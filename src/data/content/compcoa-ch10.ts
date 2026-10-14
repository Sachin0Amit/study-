import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse master study content — Compiler Design, Chapter 10: Optimization
// and Dataflow. Sections 10.1 – 10.4. Full depth: local transforms, lattices,
// reaching, liveness and available-expression equations with loop rewrites.
// ============================================================================

export const compcoaCh10Content: SectionContent[] = [
  // ---------------------------------------------------------------- 10.1
  {
    sectionId: 'compcoa-ch10-s1',
    readingTime: 7,
    intro: 'Local optimization rewrites straight-line code into cheaper equivalent forms without analyzing whole procedures. Constant folding evaluates known values early while strength reduction and cleanup remove wasteful operations. This section catalogs the core local transforms with safety conditions.',
    objectives: [
      'Apply folding, strength reduction, and algebraic identities within blocks',
      'Remove dead code and redundant copies using local use information',
      'State when each local rewrite preserves program meaning'
    ],
    concepts: [
      {
        term: 'Constant folding',
        kind: 'method',
        statement: 'Constant **folding** evaluates `2 + 3 * 4` at compile time to `14` whenever all operands are known constants. The rule replaces $c_1 op c_2$ by $eval(c_1 op c_2)$ with no runtime instruction left behind.',
        detail: 'Folding runs bottom-up on expression trees and feeds later passes with fresh constants. Overflow and division-by-zero semantics must match target execution.'
      },
      {
        term: 'Strength reduction in miniature',
        kind: 'method',
        statement: 'Local **strength reduction** swaps a costly operator for a cheaper one, such as `x * 2` becoming `x + x` or `x << 1`. The swap keeps $value$ identical while lowering latency on targets where shifts outrun multiplies.',
        detail: 'Powers of two give the cleanest wins through shifts and adds. Later loop passes extend the same idea to induction sequences across iterations.'
      },
      {
        term: 'Algebraic identities',
        kind: 'method',
        statement: 'Identities simplify `x + 0` to `x`, `x * 1` to `x`, and `x * 0` to `0` by matching **neutral and absorbing** elements. Each rewrite has shape $x op c \\to x$ or $x op c \\to c$ guarded by the operator table.',
        detail: 'Floating-point identities need care since signed zero and NaN break naive rules. Integer and boolean identities apply freely under modular semantics.'
      },
      {
        term: 'Dead-code removal',
        kind: 'method',
        statement: 'An assignment `t = rhs` is **dead** when `t` is never read before redefinition or exit, so the line can be erased. The local test scans the rest of the block for $use(t) = \\emptyset$ after the definition point.',
        detail: 'Removals cascade when erasing one line kills the last use of another temporary. Stores to live globals or I/O never qualify as dead.'
      },
      {
        term: 'Copy and common-piece cleanup',
        kind: 'method',
        statement: 'Copy motion replaces uses of `y` by `x` after the **copy** `y = x` while `x` stays unchanged, and repeated `a + b` lines reuse one `t = a + b`. The conditions are $def(x) = \\emptyset$ on the span for copies and identical operands for shared pieces.',
        detail: 'Both shrinks expose further folding and dead lines. Copy chains collapse transitively until every use names the original value holder.'
      }
    ],
    examples: [
      {
        title: 'Trace: folding plus identities',
        problem: 'Optimize `t1 = 2 + 3 * 4; t2 = t1 + 0; y = t2 * 1`.',
        steps: [
          { label: 'Step 1', text: '```text\nt1 = 2 + 3 * 4   -> t1 = 14\nt2 = t1 + 0      -> t2 = t1\ny  = t2 * 1      -> y = t2\n```\nFold the constant tree first, then apply plus-zero and times-one identities in order.' },
          { label: 'Step 2', text: 'Copy motion turns $t_2 = t_1$ into direct uses of $t_1$, and $y = t_2$ into $y = t_1$. Each substitution checks $def(t_1) = \\emptyset$ across the spanned lines.' },
          { label: 'Step 3', text: 'Dead-code removal erases $t_2$ entirely since no use remains, leaving $t_1 = 14$ plus $y = t_1$ as the compact block.' }
        ],
        result: 'Three lines shrink to two with all constant and identity waste removed.'
      },
      {
        title: 'Trace: strength plus dead store',
        problem: 'Optimize `t = x * 2; z = t; w = 5;` when `w` is never read later.',
        steps: [
          { label: 'Step 1', text: '```text\nt = x * 2   -> t = x + x\nz = t       -> z = x + x (after copy)\nw = 5       -> dead, erase\n```\nReduce the multiply to an add of x with itself, then forward the copy into z.' },
          { label: 'Step 2', text: 'Scan after $w = 5$ for any $use(w)$ in the block and successors; finding none marks the store dead. Erasing it cannot alter observable state since $w$ is a pure temporary.' },
          { label: 'Step 3', text: 'Remaining code is $t = x+x$ and $z = t$, with $t$ retained only when later blocks read it; otherwise a second dead pass erases $t$ as well.' }
        ],
        result: 'The multiply becomes an add and the unused store vanishes, leaving only live value flow.'
      }
    ],
    keyTakeaways: [
      'Folding evaluates constant trees at compile time with target-matched semantics.',
      'Strength reduction and identities trade costly or redundant operators for cheaper forms.',
      'Dead assignments with no later reads can be erased safely inside blocks.',
      'Copy motion and shared-piece reuse shrink temporaries and unlock more folding.'
    ],
    quiz: [
      // PYQ-pattern: folding plus identity and dead-code elimination on straight-line TAC.
      {
        q: 'What does folding produce for `t = 2 + 3 * 4`?',
        options: ['`t = 2 + 3 * 4` unchanged', '`t = 14`', '`t = 9 * 4`', '`t = 2 + 12` as final code'],
        answer: 1,
        explanation: 'Step 1: Respect multiply before add. Step 2: Evaluate three times four to twelve. Step 3: Add two to get fourteen. Step 4: Replace the whole tree by the constant.'
      },
      {
        q: 'Which strength reduction is valid for integers?',
        options: ['`x * 2` to `x + x`', '`x + x` to `x * x`', '`x * 2` to `x / 0`', '`x << 1` to `x * 3`'],
        answer: 0,
        explanation: 'Step 1: Check value equality of the pair. Step 2: Confirm add is cheaper than multiply here. Step 3: Reject options changing the value. Step 4: Keep x plus x as the reduced form.'
      },
      {
        q: 'When is `t = rhs` dead within its block?',
        options: ['When rhs contains a constant', 'When rhs is long', 'When t is never read before redefinition or block exit', 'When t is a global name'],
        answer: 2,
        explanation: 'Step 1: Scan forward from the definition. Step 2: Look for any read of t. Step 3: Confirm redefinition or exit arrives first. Step 4: Mark the line erasable only then.'
      },
      {
        q: 'After `y = x` with x unchanged, what does copy motion do?',
        options: ['It deletes x', 'It folds y to zero', 'It swaps the two names everywhere', 'It replaces later uses of y by x on the safe span'],
        answer: 3,
        explanation: 'Step 1: Verify x has no redefinition on the span. Step 2: Rewrite each y use as x. Step 3: Keep the copy until uses vanish. Step 4: Erase the copy when dead.'
      }
    ]
  },

  // ---------------------------------------------------------------- 10.2
  {
    sectionId: 'compcoa-ch10-s2',
    readingTime: 9,
    intro: 'Constant propagation moves known values forward through the control-flow graph so later folds can fire far from the original assignment. A small lattice tracks undefined, constant, and overdefined states per variable. This section runs the forward equations and shows the meet logic at merge points.',
    objectives: [
      'Read the constant lattice with top, constant, and bottom elements',
      'Apply the forward transfer and meet equations at merges',
      'Decide when a propagated constant enables folding or branch trimming'
    ],
    concepts: [
      {
        term: 'Constant lattice',
        kind: 'definition',
        statement: 'Each variable maps to **`undef`** (never assigned on path), a **constant `c`**, or **`overdef`** (multiple values meet). The order is $undef \\sqsubset c \\sqsubset overdef$ with meet $\\sqcap$ taking the greatest lower shared fact.',
        detail: 'Undef is optimistic for straight code while overdef is the pessimistic sink. Constants sit incomparable with each other in the middle rank.'
      },
      {
        term: 'Forward transfer through a block',
        kind: 'method',
        statement: 'The transfer `OUT = transfer(B, IN)` kills the assigned variable fact then sets **`x = c`** for constant right-hand sides or **`overdef`** otherwise. The equation is $OUT = (IN - \\{x\\}) \\cup \\{x \\mapsto eval(rhs, IN)\\}$ per assignment in order.',
        detail: 'Copies forward the source fact and arithmetic folds when all inputs are constants. Unknown inputs push the target to overdef immediately.'
      },
      {
        term: 'Meet at merge points',
        kind: 'method',
        statement: 'At a join with predecessors `P`, the entry is the **meet** `IN = meet over OUT(P)` applied per variable. The table is $c \\sqcap c = c$, $c \\sqcap d = overdef$ for $c \\ne d$, and $undef \\sqcap v = v$ for any $v$.',
        detail: 'Agreement keeps the constant while disagreement sinks to overdef. Undef sides defer to defined sides so straight-line facts survive joins with untouched paths.'
      },
      {
        term: 'Reaching flavor of the analysis',
        kind: 'insight',
        statement: 'The equations mirror **reaching definitions** in forward direction with kill and generate sets per block, denoted `IN` and `OUT`. Constant facts ride the same scaffolding but carry values through $gen$ instead of mere presence bits.',
        detail: 'Both iterate from entry facts to a least fixed point. Reaching answers where a value may come from while constants answer which single value arrives.'
      },
      {
        term: 'Using propagated facts',
        kind: 'method',
        statement: 'A use of `x` with fact **`x = c`** rewrites to `c`, enabling folding and branch trimming such as `ifFalse c goto L` resolved statically. The rewrite needs $fact(x) = c$ at that point, not merely on some path.',
        detail: 'Overdef blocks rewriting while undef warns of uninitialized use. Each rewrite can spark new constants downstream, so propagation loops with folding.'
      }
    ],
    examples: [
      {
        title: 'Trace: straight-line constant flow',
        problem: 'Track facts for `x = 3; y = x + 2; z = y + x`.',
        steps: [
          { label: 'Step 1', text: '```text\nin:  {x=undef, y=undef, z=undef}\nafter x=3:       {x=3}\nafter y=x+2:     {x=3, y=5}\nafter z=y+x:     {x=3, y=5, z=8}\n```\nEach transfer kills the old fact and installs the evaluated constant from current IN.' },
          { label: 'Step 2', text: 'At $y = x + 2$ read $x = 3$ from $IN$ to fold $3 + 2$ to $5$. At $z = y + x$ read $y = 5$ and $x = 3$ to fold $8$.' },
          { label: 'Step 3', text: 'No merges occur, so every $meet$ is trivial and the block OUT holds all three constants ready for later folding.' }
        ],
        result: 'OUT is {x=3, y=5, z=8} with every temporary resolved to one constant.'
      },
      {
        title: 'Trace: merge that kills a constant',
        problem: 'Join facts {x=3} and {x=4} from two branches into one successor.',
        steps: [
          { label: 'Step 1', text: '```text\npred1 OUT: {x=3}\npred2 OUT: {x=4}\njoin IN:   {x=3} sqcap {x=4}\n```\nBoth predecessors define x with disagreeing values on entry to the merge block.' },
          { label: 'Step 2', text: 'Apply $3 \\sqcap 4 = overdef$ by the middle-rank rule, giving $IN = \\{x \\mapsto overdef\\}$ for the successor.' },
          { label: 'Step 3', text: 'Later uses of $x$ cannot rewrite to a constant, while a third predecessor with $undef$ would instead defer via $undef \\sqcap 3 = 3$.' }
        ],
        result: 'Disagreement sinks x to overdef and blocks folding after the merge.'
      }
    ],
    keyTakeaways: [
      'The lattice orders undef below constants below overdef with meet as shared agreement.',
      'Forward transfers kill old facts and install evaluated constants per assignment.',
      'Merges meet predecessor facts so only unanimous constants survive.',
      'Surviving constants rewrite uses and unlock folding plus static branch choices.'
    ],
    quiz: [
      {
        q: 'What is $3 \\sqcap 4$ in the constant lattice?',
        options: ['overdef', '4', '3', 'undef'],
        answer: 0,
        explanation: 'Step 1: Place both values in the middle rank. Step 2: Note distinct constants are incomparable. Step 3: Drop to their shared lower bound. Step 4: Return overdef.'
      },
      {
        q: 'What is $undef \\sqcap 7$?',
        options: ['overdef', 'undef', '7', 'No meet exists'],
        answer: 2,
        explanation: 'Step 1: Recall undef is the top optimistic start. Step 2: Meet with a defined fact defers to it. Step 3: Keep seven as the surviving knowledge. Step 4: Select seven as the result.'
      },
      // PYQ-pattern: forward transfer and meet equations for constant propagation.
      {
        q: 'Block `y = x + 2` runs with IN fact $x = 3$. What is OUT for y?',
        options: ['y stays undef', 'y becomes overdef', 'x becomes overdef', 'y becomes five'],
        answer: 3,
        explanation: 'Step 1: Read x as three from IN. Step 2: Evaluate three plus two. Step 3: Kill the old y fact. Step 4: Install y equal to five.'
      },
      {
        q: 'How does constant propagation resemble reaching definitions?',
        options: ['Both run backward with use sets', 'Both run forward with kill and generate structure per block', 'Both ignore control-flow merges', 'Both track only branch outcomes'],
        answer: 1,
        explanation: 'Step 1: Note both move entry to exit forward. Step 2: Kill old facts on assignment. Step 3: Generate fresh facts per block. Step 4: Merge predecessor outs at joins.'
      }
    ]
  },

  // ---------------------------------------------------------------- 10.3
  {
    sectionId: 'compcoa-ch10-s3',
    depth: [
      {
        tier: 'masters',
        title: 'Live-variable analysis: backward fixpoints and register use',
        blocks: [
          {
            kind: 'para',
            body: '**Liveness** asks which variables may be read on some path before being overwritten, guiding register allocation and dead-code elimination. Equations run **backward**: $LiveIn(n) = Use(n) \\cup (LiveOut(n) - Def(n))$ with $LiveOut(n) = \\bigcup_{s} LiveIn(s)$ over successors $s$. The system is monotone over finite sets, so iterating from empty sets reaches a **least fixpoint** that safely over-approximates true liveness. Graduate dataflow theory treats this as one instance of a general framework — direction, meet operator, transfer functions — whose convergence and precision follow from lattice height and distributivity.'
          },
          {
            kind: 'theorem',
            body: 'Backward iteration for live variables terminates in at most $H+1$ passes for lattice height $H$ equal to the number of variables, and the result is the **least fixpoint**, hence the most precise safe approximation: every truly live variable is included, and no smaller safe solution exists. The analysis is **distributive**, so the iterative result coincides with the meet over all paths, not merely an approximation. Dead assignments to non-live variables can be removed without changing observable behavior.'
          },
          {
            kind: 'proof',
            body: 'Monotonicity holds because transfer $f_n(X) = Use(n) \\cup (X - Def(n))$ grows with $X$ and union preserves order; finiteness holds because each set ranges over subsets of $V$ variables with height $|V|$. Starting from $\\emptyset$, each iteration only adds variables, so at most $|V|$ additions per program point occur before stabilization — termination. Least-fixpoint precision follows from Kleene iteration on a finite lattice: the limit is the least set satisfying all equations, so any safe solution must contain it. Distributivity $f_n(X \\cup Y) = f_n(X) \\cup f_n(Y)$ holds by set algebra, which lifts per-path precision to the global meet. Dead-code safety follows because removing a definition of $x$ with $x \\notin LiveOut(n)$ cannot affect any later use on any path.'
          },
          {
            kind: 'application',
            body: 'Register allocators consume liveness as **live ranges**: maximal regions where a variable stays live, whose overlaps form an interference graph colored with $k$ registers. Spilling chooses the range whose reload cost per use is minimal when coloring fails. Just-in-time compilers reuse the same equations incrementally, re-solving only reversed-postorder successors of edited blocks. Research frontiers extend the framework to SSA-based liveness with phi-functions, where $LiveIn$ and $LiveOut$ split per edge, and to linear-scan allocation that orders ranges by start position for near-linear time at small precision loss.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Liveness tells the compiler which values must survive each program point for future reads. The equations run backward because later uses decide current keep obligations. This section solves live-variable sets and shows how live ranges guide register choices.',
    objectives: [
      'Write the backward liveness equations with use and definition sets',
      'Solve live sets to a fixed point on a small branch and loop shape',
      'Map live ranges to register pressure and spill choices'
    ],
    concepts: [
      {
        term: 'Live variable condition',
        kind: 'definition',
        statement: 'A variable `v` is **live** at point `p` when some path from `p` reads `v` before redefining it. The condition is $live_p(v)$ exactly when $\\exists$ path $p \\to use(v)$ with no $def(v)$ in between.',
        detail: 'Death occurs at redefinition and birth at reads. Values live across calls or loop edges need homes that survive those regions.'
      },
      {
        term: 'Use and definition sets',
        kind: 'notation',
        statement: 'Each block `B` has **`use(B)`** of variables read before local definition and **`def(B)`** of variables assigned inside. For `t = a + b` the sets are $use = \\{a, b\\}$ and $def = \\{t\\}$ when $t$ differs from both sources.',
        detail: 'Order inside the block matters: a read after a local write is not an upward-exposed use. Copies and calls contribute their reads and writes similarly.'
      },
      {
        term: 'Backward equations',
        kind: 'method',
        statement: 'Liveness flows backward with **`IN(B) = use(B) union (OUT(B) minus def(B))`** and **`OUT(B) = union of IN over successors`**. The pair is $IN = use \\cup (OUT - def)$ solved from exit facts $OUT(exit) = \\emptyset$ toward entry.',
        detail: 'Subtracting def kills values redefined locally while union with use adds fresh needs. Successor union merges all future paths conservatively.'
      },
      {
        term: 'Fixed-point solving order',
        kind: 'method',
        statement: 'Iterate blocks in **reverse order** from exit to entry with `worklist`, requeuing predecessors whenever a successor IN grows. The sequence reaches the least fixed point $IN^{*}$ and $OUT^{*}$ because sets only grow and variables are finite.',
        detail: 'Loops need multiple rounds as back-edge facts circle around. Worklists avoid rechecking blocks whose successors stayed unchanged.'
      },
      {
        term: 'Live ranges and registers',
        kind: 'insight',
        statement: 'The **live range** of `v` spans points where `v` is live, and two ranges that overlap need **different registers** `r1` and `r2`. The interference rule is $overlap(range_u, range_v) \\Rightarrow reg_u \\ne reg_v$, with spills for excess pressure.',
        detail: 'Short ranges invite reuse of one register across disjoint spans. Liveness width at each point equals the minimum register count there.'
      }
    ],
    examples: [
      {
        title: 'Trace: liveness on a branch diamond',
        problem: 'Solve liveness for `B1: t = a + b; if t goto B2 else B3; B2: c = t + d; B3: e = a + f`.',
        steps: [
          { label: 'Step 1', text: '```text\nuse(B2)={t,d} def(B2)={c}\nuse(B3)={a,f} def(B3)={e}\nOUT(B1) = IN(B2) union IN(B3)\n```\nExit blocks seed from empty successors so IN equals use at each leaf.' },
          { label: 'Step 2', text: 'Compute $IN(B_2) = \\{t, d\\}$ and $IN(B_3) = \\{a, f\\}$ since both have empty $OUT$. Union gives $OUT(B_1) = \\{t, d, a, f\\}$ before local kill.' },
          { label: 'Step 3', text: 'Apply $IN(B_1) = \\{a, b\\} \\cup (OUT(B_1) - \\{t\\}) = \\{a, b, d, f\\}$. Variable $t$ dies in $B_1$ because it is defined there, while $a$ stays live through both arms.' }
        ],
        result: 'Entry needs {a, b, d, f} live with t local to the branch head and middle.'
      },
      {
        title: 'Trace: ranges to registers',
        problem: 'Assign registers when ranges of `p` and `q` overlap but `r` is disjoint from both.',
        steps: [
          { label: 'Step 1', text: '```text\nrange(p): lines 1-4\nrange(q): lines 3-6   overlap p/q on 3-4\nrange(r): lines 7-8   disjoint\n```\nOverlap on lines three and four forces separation while later lines are free.' },
          { label: 'Step 2', text: 'Give $p \\to r_1$ and $q \\to r_2$ by $reg_p \\ne reg_q$ on the shared span. Either register is free after line six when both die.' },
          { label: 'Step 3', text: 'Reuse $r_1$ for $r$ on lines seven and eight since $range(r)$ touches neither earlier span.' }
        ],
        result: 'Two registers cover all three values by reusing one slot after the overlap ends.'
      }
    ],
    keyTakeaways: [
      'A variable is live when a future read precedes any redefinition on some path.',
      'Backward equations add upward uses and remove locally defined names.',
      'Reverse-order iteration with worklists reaches the least fixed point.',
      'Overlapping live ranges need distinct registers while disjoint ones can share.'
    ],
    quiz: [
      {
        q: 'For block `t = a + b` with t distinct from a and b, what are use and def?',
        options: ['use {a, b}, def {t}', 'use {t}, def {a, b}', 'use empty, def {a, b, t}', 'use {a}, def {b, t}'],
        answer: 0,
        explanation: 'Step 1: Collect reads before local writes as use. Step 2: Find a and b read first. Step 3: Collect writes as def with t. Step 4: Pair use {a, b} with def {t}.'
      },
      // PYQ-pattern: backward liveness equations IN and OUT on CFG shapes.
      {
        q: 'What is the liveness IN equation for block B?',
        options: ['IN(B) = def(B) minus OUT(B)', 'IN(B) = use(B) union (OUT(B) minus def(B))', 'IN(B) = OUT(B) only', 'IN(B) = use(B) intersect def(B)'],
        answer: 1,
        explanation: 'Step 1: Start from successor needs OUT. Step 2: Remove locally redefined names. Step 3: Add upward-exposed reads. Step 4: Form use union adjusted OUT.'
      },
      {
        q: 'What seeds liveness at the exit block?',
        options: ['All variables live', 'Only temporaries live', 'Empty set with nothing live after exit', 'Only constants live'],
        answer: 2,
        explanation: 'Step 1: Look past program end for future reads. Step 2: Find no reads beyond exit. Step 3: Seed OUT of exit as empty. Step 4: Grow sets backward from there.'
      },
      {
        q: 'Ranges of u and v overlap. What follows for registers?',
        options: ['They must share one register', 'Overlap is irrelevant', 'Both must spill always', 'They need different registers while overlapping'],
        answer: 3,
        explanation: 'Step 1: Note both values are live together. Step 2: Recall one register holds one live value. Step 3: Separate them on the shared span. Step 4: Allow sharing only after one dies.'
      }
    ]
  },

  // ---------------------------------------------------------------- 10.4
  {
    sectionId: 'compcoa-ch10-s4',
    readingTime: 10,
    intro: 'Redundant computations and loop-invariant work waste the most time in hot code, so global passes target them directly. Available-expression analysis finds values already computed on every path while loop passes hoist invariants and retire weak induction variables. This section states the equations and rewrites with safety guards.',
    objectives: [
      'State available-expression equations and use them to remove common subexpressions',
      'Hoist loop-invariant code only when dominance and single-definition guards hold',
      'Simplify induction variables and fold loop control to cheaper forms'
    ],
    concepts: [
      {
        term: 'Available expression',
        kind: 'definition',
        statement: 'An expression `a + b` is **available** at `p` when every path from entry computes it and no operand is redefined after the last computation. The condition is $avail_p(e)$ on all paths with $def(a) = def(b) = \\emptyset$ since that computation.',
        detail: 'Availability is all-paths knowledge, unlike reaching which is any-path. Redefinitions of either operand kill the fact immediately.'
      },
      {
        term: 'Available equations forward',
        kind: 'method',
        statement: 'The forward sets use **`OUT = gen union (IN minus kill)`** per block with **`IN = intersect over predecessors`** and entry `IN(entry) = empty`. Gen lists locally computed expressions surviving to block end while $kill$ holds those with redefined operands.',
        detail: 'Intersection keeps only facts true on every incoming path. Entry starts empty since nothing has been computed before the program starts.'
      },
      {
        term: 'Common-subexpression removal',
        kind: 'method',
        statement: 'When `a + b` is **available** before a recomputation `t = a + b`, replace the second line by copy `t = u` from the earlier holder `u`. The rewrite needs $avail(e)$ plus identical operands and no intervening kills.',
        detail: 'Local copies then forward the holder into later uses. The transform turns recompute cost into one copy or direct reuse.'
      },
      {
        term: 'Loop-invariant hoisting guards',
        kind: 'method',
        statement: 'An invariant assignment `t = a op b` with loop-constant operands hoists to preheader only when it **dominates exits**, has **one definition** in the loop, and `t` is **dead after** or renamed safely. The guards are $dom + single\\_def + safe\\_live$ checked before motion.',
        detail: 'Hoisting out of conditions needs the block to dominate the loop body so the value exists on every iteration path. Fresh temporaries avoid clobbering live ranges.'
      },
      {
        term: 'Induction variables and strength passes',
        kind: 'method',
        statement: 'A **basic induction** `i = i + c` steps by a constant each iteration while a **derived induction** `j = i * k + d` is linear in it. The pass rewrites derived updates to adds with $j = j + c \\times k$ and retires loop tests to the basic counter.',
        detail: 'Linear test replacement removes multiplies from control logic. Dead basic counters vanish once no derived value needs them.'
      }
    ],
    examples: [
      {
        title: 'Trace: removing a global common piece',
        problem: 'Remove the second `a + b` in `B1: u = a + b; goto B2,B3; B2: v = a + b; B3: w = a + b` with no redefinitions.',
        steps: [
          { label: 'Step 1', text: '```text\nOUT(B1) gen={a+b} kill={}\nIN(B2) = IN(B3) = {a+b}\nrewrite B2: v = u\nrewrite B3: w = u\n```\nThe expression survives block one and reaches both successors since neither kills operands.' },
          { label: 'Step 2', text: 'Check $avail$ at each recompute point: intersection over the single predecessor $B_1$ keeps $\\{a+b\\}$ live on both arms. Operand equality holds term by term.' },
          { label: 'Step 3', text: 'Replace both recomputes by copies from $u$ and let copy motion reuse $u$ downstream, erasing two arithmetic lines.' }
        ],
        result: 'One computation in B1 serves both successors through copies with no arithmetic repeated.'
      },
      {
        title: 'Trace: hoisting plus induction trim',
        problem: 'Optimize `for i = 0; i < n; i = i + 1 { t = c + d; j = i * 4 + b; }` with loop-constant c and d.',
        steps: [
          { label: 'Step 1', text: '```text\npreheader: t = c + d\nloop: j = i * 4 + b  -> j = j + 4 with init\n```\nThe sum of loop constants is invariant while j derives linearly from i.' },
          { label: 'Step 2', text: 'Hoist $t = c+d$ because its block dominates all exits, $t$ has one loop definition, and $t$ is only read inside. Preheader placement computes it once before entry.' },
          { label: 'Step 3', text: 'Rewrite $j$ updates as $j = j + 4$ seeded from $b$ at entry, retiring the per-iteration multiply and keeping the test on basic $i$.' }
        ],
        result: 'Loop body loses one invariant evaluation and one multiply per iteration after hoisting and induction trim.'
      }
    ],
    keyTakeaways: [
      'Available expressions hold on every path with operands intact since last computation.',
      'Forward intersection equations keep only unanimous facts for safe reuse.',
      'Hoisting needs dominance, single definition, and live-range safety before motion.',
      'Induction trim turns derived multiplies into adds and simplifies loop tests.'
    ],
    quiz: [
      {
        q: 'When is `a + b` available at point p?',
        options: ['When some path computed it once', 'When every path computed it with no operand redefined since', 'When a and b are constants', 'Always after one computation anywhere'],
        answer: 1,
        explanation: 'Step 1: Require computation on all paths. Step 2: Check operand definitions after the last compute. Step 3: Kill on any redefinition. Step 4: Keep availability only when both hold.'
      },
      {
        q: 'What is IN for available expressions at a merge?',
        options: ['Intersection over predecessors', 'Union over predecessors', 'Empty always', 'OUT of one arbitrary predecessor'],
        answer: 0,
        explanation: 'Step 1: Recall availability is all-paths knowledge. Step 2: Keep facts present on every arm. Step 3: Intersect predecessor OUT sets. Step 4: Drop facts missing from any arm.'
      },
      // PYQ-pattern: loop-invariant hoisting guards plus induction-variable strength passes.
      {
        q: 'Which guard is required before hoisting `t = a op b` from a loop?',
        options: ['The block defines t twice in the loop', 'The operands vary each iteration', 'The assignment dominates loop exits with loop-constant operands and safe liveness', 'The loop has no preheader'],
        answer: 2,
        explanation: 'Step 1: Check operands are loop-constant. Step 2: Check the definition dominates exits. Step 3: Check single definition and live-range safety. Step 4: Hoist to preheader only when all pass.'
      },
      {
        q: 'For derived induction `j = i * 4 + b` with `i = i + 1`, what is the trimmed update?',
        options: ['`j = j * 4`', '`j = 0` each iteration', '`j = i + b`', '`j = j + 4` with proper init from b'],
        answer: 3,
        explanation: 'Step 1: Confirm basic step of one on i. Step 2: Scale the step by four for j. Step 3: Seed j from b at entry. Step 4: Replace the multiply by an add of four.'
      }
    ]
  }
]
