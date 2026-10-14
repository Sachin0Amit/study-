import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse master study content — Compiler Design, Chapter 9: Translation,
// Runtime and Intermediate Code. Sections 9.1 – 9.4. Full depth: S versus L
// attributes, activation records, three-address code, leaders and blocks.
// ============================================================================

export const compcoaCh09Content: SectionContent[] = [
  // ---------------------------------------------------------------- 9.1
  {
    sectionId: 'compcoa-ch9-s1',
    readingTime: 8,
    intro: 'Syntax-directed translation attaches meaning to parse structure by evaluating attributes at grammar symbols. Synthesized attributes flow upward from children while inherited attributes flow downward or sideways from context. This section separates the S and L families and shows evaluation orders that respect each dependency shape.',
    objectives: [
      'Distinguish synthesized from inherited attributes by dependency direction',
      'Test whether a definition is S-attributed or L-attributed from its rules',
      'Choose bottom-up versus depth-first evaluation matching the attribute class'
    ],
    concepts: [
      {
        term: 'Synthesized attribute',
        kind: 'definition',
        statement: 'A **synthesized** attribute of `A` is computed only from **children plus constants**, as in `E.val = T.val + X.val`. The value equation has form $A.s = f(children)$ so information rises from leaves toward the root `S`.',
        detail: 'Parse-tree evaluation is bottom-up: children complete before parents. Types of expressions and generated code fragments are canonical synthesized cases.'
      },
      {
        term: 'Inherited attribute',
        kind: 'definition',
        statement: 'An **inherited** attribute of a symbol takes values from its **parent or siblings**, as in `T.inh = E.env` or `X.tail = T.val`. The form is $child.i = g(parent, siblings)$ so context moves downward or left to right across the production.',
        detail: 'Environments, scopes, and left-operand values travel this way. Inherited flow needs a traversal that visits context before the receiving child.'
      },
      {
        term: 'S-attributed definitions',
        kind: 'definition',
        statement: 'An **S-attributed** definition uses only **synthesized** attributes, denoted `S-ATTR`. Every rule reads child values, so a single bottom-up pass aligned with `LR` reductions evaluates the whole tree without extra scheduling.',
        detail: 'Stack machines hold attribute values beside grammar symbols. Reduction by $A \\to \\beta$ fires the semantic action with child values on hand.'
      },
      {
        term: 'L-attributed definitions',
        kind: 'definition',
        statement: 'An **L-attributed** definition allows inherited attributes but only from **left siblings and the parent**, coded as `L-ATTR`. Each rule for `Xi` may read $parent.i$ or $X_1 \\ldots X_{i-1}$ attributes, never right siblings, so one left-to-right depth-first walk suffices.',
        detail: 'The restriction guarantees that every dependency is already computed when a depth-first visitor arrives. Declarations with type prefix distributed over declarator lists fit this class.'
      },
      {
        term: 'Evaluation order by dependency graph',
        kind: 'method',
        statement: 'Build one **dependency graph** per production with edges from read attributes to written ones, then topologically sort the union over the tree with `topsort`. Acyclic per-tree instances evaluate in that order, written $order = topsort(deps)$, while a cycle marks the definition ill-formed.',
        detail: 'S-attributed graphs sort bottom-up automatically and L-attributed graphs sort in visit order. General definitions may need multi-pass or dynamic scheduling when neither discipline applies.'
      }
    ],
    examples: [
      {
        title: 'Trace: types rising in S style',
        problem: 'Evaluate `E -> E + T | T`, `T -> num` with synthesized type and value.',
        steps: [
          { label: 'Step 1', text: '```text\nleaf num(3): T.val=3, T.type=int\nleaf num(4): T.val=4, T.type=int\nnode E(T): E.val=3, E.type=int\n```\nLeaves synthesize constants upward with no context input.' },
          { label: 'Step 2', text: 'At $E \\to E+T$ read both child values and child types, check $int + int$ compatibility, then write $E.val = E_1.val + T.val$ and $E.type = int$.' },
          { label: 'Step 3', text: 'Reductions fire in bottom-up order so every $E$ and $T$ value is ready before its parent action runs, completing the root with value and type.' }
        ],
        result: 'Pure synthesized flow evaluates with the parse reductions and needs no inherited context.'
      },
      {
        title: 'Trace: distributing a declaration type',
        problem: 'Translate `D -> T L`, `L -> L , id | id` carrying declared type downward.',
        steps: [
          { label: 'Step 1', text: '```text\nD -> T L   { L.inh = T.type }\nL -> L1 , id { id.type = L.inh; L1.inh = L.inh }\n```\nThe head type is inherited by the declarator list and copied across comma siblings left to right.' },
          { label: 'Step 2', text: 'Visit $T$ first to fix $T.type$, pass it into $L.inh$, then walk $L$ left to right assigning $id.type = L.inh$ at each leaf. The dependency $L_1.inh \\to id.type$ respects left-to-right order.' },
          { label: 'Step 3', text: 'No rule reads right siblings, so the definition is L-attributed and one depth-first pass completes all identifier types.' }
        ],
        result: 'Inherited type flows from the specifier leftward across the list, a pattern S-attributed rules cannot state.'
      }
    ],
    keyTakeaways: [
      'Synthesized attributes rise from children while inherited ones arrive from parent or siblings.',
      'S-attributed means synthesized only and evaluates with bottom-up reductions.',
      'L-attributed allows inherited flow from left siblings and parent in one depth-first walk.',
      'Dependency graphs plus topological order give the general evaluation schedule.'
    ],
    quiz: [
      // PYQ-pattern: S-attributed versus L-attributed classification from rule shapes.
      {
        q: 'Which rule can appear in an S-attributed definition?',
        options: ['`A.s = f(B.s, C.s)` for children B and C', '`B.i = f(A.i, C.s)` reading right sibling C', '`A.i = f(parent.i)`', '`B.i = f(B.i)` with a self loop'],
        answer: 0,
        explanation: 'Step 1: Recall S allows only synthesized reads from children. Step 2: Check the option reads B and C children. Step 3: Verify no parent or sibling reads occur. Step 4: Accept the child-only synthesized rule.'
      },
      {
        q: 'Why does `L -> L1 , id` with copying of `L.inh` stay L-attributed?',
        options: ['Because it uses no attributes', 'Because id is a terminal', 'Because inherited flow moves left to right from parent and left sibling only', 'Because commas are ignored'],
        answer: 2,
        explanation: 'Step 1: Trace the inherited value from parent L. Step 2: Copy across left sibling L1. Step 3: Confirm no right-sibling reads. Step 4: Match the L-attributed left-flow restriction.'
      },
      {
        q: 'How are S-attributed definitions usually evaluated?',
        options: ['By multiple depth-first passes only', 'On the parse stack during bottom-up reductions', 'By random topological order', 'By lexer priority'],
        answer: 1,
        explanation: 'Step 1: Note children finish before parents bottom-up. Step 2: Hold child values on the value stack. Step 3: Fire the action at reduction time. Step 4: Complete the tree in one pass.'
      },
      {
        q: 'What does a dependency cycle in one parse tree mean?',
        options: ['The tree needs more lookahead', 'FOLLOW was miscomputed', 'The grammar is ambiguous', 'The definition is ill-formed for that tree and no static order works'],
        answer: 3,
        explanation: 'Step 1: Build edges from reads to writes. Step 2: Attempt a topological sort. Step 3: Detect the cycle blocking all orders. Step 4: Reject the definition for that input shape.'
      }
    ]
  },

  // ---------------------------------------------------------------- 9.2
  {
    sectionId: 'compcoa-ch9-s2',
    readingTime: 9,
    intro: 'Procedures need private storage that appears on call and disappears on return, plus disciplined links for nesting and nonlocal access. The activation record packs return state, locals, and access links in one frame. This section lays out frame fields and calling sequences for stack and display models.',
    objectives: [
      'List activation-record fields and their roles during call and return',
      'Contrast static links with displays for reaching nonlocal bindings',
      'Trace caller and callee duties across a nested call sequence'
    ],
    concepts: [
      {
        term: 'Activation record layout',
        kind: 'definition',
        statement: 'An **activation record** holds `return address`, saved `frame pointer`, **static and dynamic links**, parameters, locals, and temporaries in one `frame`. The layout satisfies $frame = control + links + data$ with fixed offsets known at compile time.',
        detail: 'Contiguous frames form the call stack with the top frame active. Fixed offsets let `load [fp + k]` reach any field without search.'
      },
      {
        term: 'Dynamic link versus static link',
        kind: 'definition',
        statement: 'The **dynamic link** points to the caller frame while the **static link** points to the lexically enclosing scope frame, stored as `dyn` and `stat`. Dynamic links model call history with $dyn = caller.fp$ and static links model nesting with $stat = scope.fp$.',
        detail: 'Recursion chains dynamic links through repeated self frames while static links skip to the definition context. Return restores the caller pointer from the dynamic link.'
      },
      {
        term: 'Calling sequence duties',
        kind: 'method',
        statement: 'The **caller** evaluates arguments, saves registers, and jumps with the return label in `ret`, while the **callee** builds its frame, sets `fp`, and allocates locals. Return then places the result in `retval`, tears down the frame, and jumps to $ret$.',
        detail: 'Splitting duties keeps variable-length argument code with the caller and fixed frame code with the callee. The contract is checked by matching save and restore lists.'
      },
      {
        term: 'Displays for fast nonlocal access',
        kind: 'method',
        statement: 'A **display** is a register array `D` with one entry per nesting level pointing at the current frame of that level. Access to a nonlocal at level $k$ is a single indexed load $D[k] + offset$ instead of a static-link walk.',
        detail: 'Calls save and restore the single display slot for their own level. Deep nesting pays constant access time at the cost of per-call save traffic.'
      },
      {
        term: 'Access chains versus displays trade-off',
        kind: 'insight',
        statement: 'Static-link walks cost **depth steps** per access with zero call overhead, while displays cost **one indexed load** per access plus save and restore per call. The choice compares $walk = depth$ against $display = save + load$ across call and access frequencies with `D[k]` as the display probe.',
        detail: 'Shallow programs favor links and deeply nested closures favor displays. Both implement the same scope rule with different constant factors.'
      }
    ],
    examples: [
      {
        title: 'Trace: frames for nested calls',
        problem: 'Show frames when `main` calls `p` and `p` calls `q` with `q` nested inside `p`.',
        steps: [
          { label: 'Step 1', text: '```text\n[main frame: ret=boot, dyn=none]\n[ p  frame: ret=main+3, dyn=main, stat=main ]\n[ q  frame: ret=p+7, dyn=p, stat=p ]\n```\nEach call pushes return address plus both links with parameters above locals.' },
          { label: 'Step 2', text: 'Inside $q$, a local of $p$ is reached by one static hop $stat(q) = p$, while a global in $main$ needs two hops $stat(stat(q))$. Dynamic links instead trace $q \\to p \\to main$ for return unwinding.' },
          { label: 'Step 3', text: 'Return from $q$ restores $fp$ to $p$ through $dyn(q)$, jumps to $ret(q)$, and discards the $q$ frame, leaving $p$ active with its locals intact.' }
        ],
        result: 'Dynamic links unwind calls while static links resolve lexical scope independently of call order.'
      },
      {
        title: 'Trace: display update on entry and exit',
        problem: 'Maintain a two-level display across a call to level-two procedure `r`.',
        steps: [
          { label: 'Step 1', text: '```text\nbefore: D[0]=main, D[1]=p\nentry r: save old D[2], set D[2]=r\naccess level-1 var: load [D[1] + off]\n```\nOnly the slot for the callee level is touched on entry.' },
          { label: 'Step 2', text: 'Nonlocal reads use $D[k]$ directly with no chain walk, so a level-one variable from $r$ costs one indexed load through $D[1]$.' },
          { label: 'Step 3', text: 'Exit restores $D[2]$ from the saved slot and pops the frame, leaving upper slots valid for the continuing caller.' }
        ],
        result: 'Displays trade one save and restore per call for constant-time nonlocal loads.'
      }
    ],
    keyTakeaways: [
      'Frames bundle return state, links, parameters, locals, and temporaries with fixed offsets.',
      'Dynamic links record callers while static links record lexical parents.',
      'Caller and callee split argument handling, frame building, and teardown duties.',
      'Displays index frames by nesting level for single-step nonlocal access.'
    ],
    quiz: [
      {
        q: 'Which field lets a callee return to the right instruction?',
        options: ['The static link', 'The first local variable', 'The return address saved at call time', 'The display base'],
        answer: 2,
        explanation: 'Step 1: Recall calls must resume after the call site. Step 2: Save the resume label in the frame. Step 3: Jump to it on return. Step 4: Identify the return address field.'
      },
      {
        q: 'How does `q` nested in `p` reach a variable local to `p`?',
        options: ['By loading the first global', 'By following its static link once to the p frame', 'By scanning the whole heap', 'By using the dynamic link only'],
        answer: 1,
        explanation: 'Step 1: Map nesting with static links. Step 2: Note q parent scope is p. Step 3: Follow one static hop to p. Step 4: Add the variable offset within that frame.'
      },
      // PYQ-pattern: static link versus display access cost for nonlocals.
      {
        q: 'What does display entry D[k] hold?',
        options: ['The k-th local of the current frame', 'The return value of level k', 'The k-th instruction of the program', 'A pointer to the current frame at nesting level k'],
        answer: 3,
        explanation: 'Step 1: Recall displays index by lexical level. Step 2: Store one live frame pointer per level. Step 3: Update the slot on entry and exit. Step 4: Load nonlocals through D of their level.'
      },
      {
        q: 'When do displays beat static-link walks?',
        options: ['When nesting is deep and nonlocal accesses are frequent', 'When no procedures nest', 'When frames hold no locals', 'When recursion is absent and calls are rare'],
        answer: 0,
        explanation: 'Step 1: Compare walk cost growing with depth. Step 2: Compare display cost of one load plus saves. Step 3: Weigh frequent access against per-call save traffic. Step 4: Prefer displays for deep frequent nonlocal use.'
      }
    ]
  },

  // ---------------------------------------------------------------- 9.3
  {
    sectionId: 'compcoa-ch9-s3',
    readingTime: 9,
    intro: 'Intermediate code bridges front-end structure and back-end details with a flat instruction list that later passes can reorder and optimize. Three-address code limits each step to one operator while basic blocks group straight-line runs. This section emits quadruples and partitions them into blocks with a control-flow graph.',
    objectives: [
      'Emit three-address code with temporaries for expressions and control flow',
      'Find leaders and partition a listing into basic blocks',
      'Draw the control-flow graph with edges for branches and fall-through'
    ],
    concepts: [
      {
        term: 'Three-address instruction shape',
        kind: 'notation',
        statement: 'Each **three-address** statement has at most one operator in the form `t = a op b` with explicit temporaries `t1` and `t2`. Compound expressions flatten into sequences such as `t1 = b + c` then `t2 = a + t1`, with $|operands| \\le 2$ per line.',
        detail: 'Labels, jumps, and copies complete the set alongside arithmetic and relational ops. The flat form exposes every intermediate value to later analysis.'
      },
      {
        term: 'Quadruples and temporaries',
        kind: 'notation',
        statement: 'A **quadruple** `(op, arg1, arg2, result)` records each operation as data, so `t = a + b` becomes `(+, a, b, t)`. Fresh temporaries `t1` and `t2` break sharing into single-assignment lines with $def(t_i)$ exactly once per emission.',
        detail: 'Quadruples suit reordering because each value names its producer. Copy and phi-free straight code keeps use and definition lists exact.'
      },
      {
        term: 'Leaders that start blocks',
        kind: 'method',
        statement: 'A **leader** is the first line, any jump target `L`, or any line after a jump or branch. Marking leaders with rule $leader = first \\cup targets \\cup after\\_jumps$ splits the listing into maximal straight runs.',
        detail: 'Scanning once collects all three leader classes. Every instruction belongs to exactly the block starting at the nearest leader at or before it.'
      },
      {
        term: 'Basic block contract',
        kind: 'definition',
        statement: 'A **basic block** runs from one `leader` up to but excluding the next leader with **single entry and single exit**. Control enters only at the top line and leaves only from the bottom branch or fall-through, written $entry = top$ and $exit = bottom$.',
        detail: 'No internal branches means dataflow facts propagate uniformly inside. Block boundaries are the only points needing merge equations.'
      },
      {
        term: 'Control-flow graph edges',
        kind: 'method',
        statement: 'The **control-flow graph** has one node per block `B` with edges `B -> target` for jumps and `B -> next` for fall-through. The edge set is $E = jumps \\cup fallthrough$ rooted at the entry block with an exit sink.',
        detail: 'Loops appear as back edges to dominators. Graph shape drives liveness, reaching, and available-expression passes in the next chapter.'
      }
    ],
    examples: [
      {
        title: 'Trace: lowering a loop body',
        problem: 'Emit three-address code for `while a < b do a = a + c`.',
        steps: [
          { label: 'Step 1', text: '```text\nL1: t1 = a < b\n    ifFalse t1 goto L2\n    t2 = a + c\n    a = t2\n    goto L1\nL2:\n```\nComparisons materialize in t1 so control flow tests one boolean temporary.' },
          { label: 'Step 2', text: 'Each source operator maps to one quadruple: $(<, a, b, t_1)$, $(+, a, c, t_2)$, plus copies and jumps. Labels $L_1$ and $L_2$ delimit loop head and exit.' },
          { label: 'Step 3', text: 'Leaders are the first line, $L_1$, $L_2$, and the line after the false branch, giving blocks for test, body, latch jump, and exit.' }
        ],
        result: 'Five quads plus two labels lower the loop with explicit test, body, back jump, and exit blocks.'
      },
      {
        title: 'Trace: blocks and edges for a branch',
        problem: 'Partition `t1 = a + b; ifFalse t1 goto L1; t2 = c + d; goto L2; L1: t2 = e + f; L2:` into blocks.',
        steps: [
          { label: 'Step 1', text: '```text\nB1: t1 = a + b; ifFalse t1 goto L1\nB2: t2 = c + d; goto L2\nB3: t2 = e + f\nB4: (exit at L2)\n```\nLeaders open B1 at line one, B2 after the branch, B3 at L1, and B4 at L2.' },
          { label: 'Step 2', text: 'Edges are $B_1 \\to B_2$ by fall-through, $B_1 \\to B_3$ by branch, $B_2 \\to B_4$ by jump, and $B_3 \\to B_4$ by fall-through.' },
          { label: 'Step 3', text: 'Each block has one entry and one exit, so later dataflow merges happen only at $B_4$ with predecessors $B_2$ and $B_3$.' }
        ],
        result: 'Four blocks with a diamond shape capture both paths rejoining at the exit label.'
      }
    ],
    keyTakeaways: [
      'Three-address code flattens expressions into one-operator steps with named temporaries.',
      'Quadruples store each operation as explicit operator and operand fields.',
      'Leaders at starts, targets, and post-jump lines partition listings into blocks.',
      'Control-flow graphs link blocks by jump and fall-through edges for analysis.'
    ],
    quiz: [
      {
        q: 'Which form is valid three-address code for `x = a + b * c`?',
        options: ['`x = a + b * c` in one line', '`t1 = b * c; x = a + t1`', '`x = + a b c`', '`if a goto b + c`'],
        answer: 1,
        explanation: 'Step 1: Enforce one operator per line. Step 2: Evaluate b times c first into t1. Step 3: Add a to t1 into x. Step 4: Select the two-line temporary form.'
      },
      // PYQ-pattern: leader detection and basic-block partitioning of TAC listings.
      {
        q: 'Which lines are leaders in a TAC listing?',
        options: ['First line, jump targets, and lines after jumps or branches', 'Only the first line', 'Only jump targets', 'Only lines with temporaries'],
        answer: 0,
        explanation: 'Step 1: Include the first line as a leader. Step 2: Add every jump target label. Step 3: Add lines following jumps or branches. Step 4: Start one block per leader.'
      },
      {
        q: 'What characterizes a basic block?',
        options: ['Multiple entries with one exit', 'Arbitrary jumps inside', 'No instructions at all', 'Single entry at top and single exit at bottom'],
        answer: 3,
        explanation: 'Step 1: Require entry only through the top line. Step 2: Require exit only from the bottom. Step 3: Forbid internal branches. Step 4: Match the single-entry single-exit contract.'
      },
      {
        q: 'In a CFG, what edges leave a conditional block ending with `ifFalse t goto L1`?',
        options: ['One edge to L1 only', 'One fall-through edge only', 'Two edges: to L1 and to the next block', 'No edges until liveness runs'],
        answer: 2,
        explanation: 'Step 1: Identify the branch target L1. Step 2: Identify fall-through to the textual next block. Step 3: Add both successors. Step 4: Keep both until later passes prune unreachable arms.'
      }
    ]
  },

  // ---------------------------------------------------------------- 9.4
  {
    sectionId: 'compcoa-ch9-s4',
    readingTime: 7,
    intro: 'Declarations become memory by assigning each type a size and alignment and then laying fields at padded offsets. Widths compose from element counts while alignment rounds each start upward. This section computes sizes for scalars, arrays, and records and places nested fields without overlap.',
    objectives: [
      'Compute widths of scalar, array, and record types from component sizes',
      'Apply alignment padding to field offsets and total record size',
      'Lay out nested records and arrays with correct strides'
    ],
    concepts: [
      {
        term: 'Width of a type',
        kind: 'definition',
        statement: 'The **width** `w(T)` is the byte count of one value, with `w(int) = 4` and `w(double) = 8` on the assumed target. Arrays multiply with $w(array[n, T]) = n \\times w(T)$ and records sum padded member widths.',
        detail: 'Widths drive address arithmetic: element $i$ sits at $base + i \\times w(T)$. Wrong widths shift every later access.'
      },
      {
        term: 'Alignment requirement',
        kind: 'definition',
        statement: 'Each type has an **alignment** `align(T)` and every object must start at a multiple of it, so `int` sits at multiples of `4`. The rule is $addr \\bmod align(T) = 0$ for all live addresses of $T$.',
        detail: 'Hardware penalizes or forbids misaligned loads, so the layout rounds field starts upward. Doubles commonly need stricter alignment than integers.'
      },
      {
        term: 'Field offset with padding',
        kind: 'method',
        statement: 'Place fields left to right with **`off = align_up(prev_end, align(field))`** and pad gaps explicitly. The running equation is $off_{k+1} = align\\_up(off_k + w_k, align_{k+1})$ with zero-size gaps collapsed away.',
        detail: 'Padding bytes are unnamed and never read as values. Reordering fields by decreasing alignment can shrink total size under the same member set.'
      },
      {
        term: 'Record size rounding',
        kind: 'law',
        statement: 'The total record size rounds up to a multiple of the **strictest member alignment**, giving `size = align_up(end, maxAlign)`. The condition $size \\bmod maxAlign = 0$ keeps array strides aligned for every element.',
        detail: 'Trailing padding after the last field serves arrays of records. Without it the second element would start misaligned.'
      },
      {
        term: 'Nested layout by recursion',
        kind: 'method',
        statement: 'Lay out **nested records** by treating the inner record as one member with its own `size` and `align`, then continue the outer offset walk. The stride of `outer[i]` stays $w(outer)$ and inner field address is $base + off_{inner} + off_{field}$.',
        detail: 'Recursion terminates at scalars with known pairs. Arrays of records reuse the rounded inner size as the element stride.'
      }
    ],
    examples: [
      {
        title: 'Trace: record with mixed fields',
        problem: 'Lay out `{int a; double b; int c;}` with align 4 for int and 8 for double.',
        steps: [
          { label: 'Step 1', text: '```text\na: off=0  size=4   end=4\npad 4 bytes to reach multiple of 8\nb: off=8  size=8   end=16\nc: off=16 size=4   end=20\n```\n each field starts at its alignment multiple with explicit gaps.' },
          { label: 'Step 2', text: 'Strictest alignment is $8$ from $b$, so round $end = 20$ up to $size = 24$ with four trailing pad bytes. Member $c$ sits at $16$ and the tail pad spans $20$ to $23$.' },
          { label: 'Step 3', text: 'Array stride for this record is $24$, so element one starts at $base + 24$ still aligned to $8$.' }
        ],
        result: 'Offsets are a at 0, b at 8, c at 16, with total size 24 including internal and trailing padding.'
      },
      {
        title: 'Trace: array of records stride',
        problem: 'Size an array `arr[3]` of `{int x; int y;}` with no padding needed.',
        steps: [
          { label: 'Step 1', text: '```text\nrecord: x off=0, y off=4, size=8, align=4\narray: w = 3 * 8 = 24\n```\nBoth members already sit on multiples of four, so no internal gaps appear.' },
          { label: 'Step 2', text: 'Element addresses are $base$, $base + 8$, and $base + 16$ from $w = 8$ stride. Field $y$ of element $i$ is at $base + i \\times 8 + 4$.' },
          { label: 'Step 3', text: 'Total $24$ is already a multiple of $4$, so no trailing pad is added and the array packs densely.' }
        ],
        result: 'Three records occupy 24 bytes with stride 8 and dense packing.'
      }
    ],
    keyTakeaways: [
      'Widths multiply for arrays and sum with padding for records.',
      'Every object starts at a multiple of its alignment requirement.',
      'Field offsets round upward, leaving explicit pad gaps between members.',
      'Record size rounds to the strictest member alignment to keep array strides valid.'
    ],
    quiz: [
      {
        q: 'With `w(int) = 4`, what is the width of `array[5, int]`?',
        options: ['5', '9', '20', '25'],
        answer: 2,
        explanation: 'Step 1: Recall array width multiplies count by element width. Step 2: Multiply five by four. Step 3: Check alignment needs no extra pad here. Step 4: Return twenty bytes.'
      },
      {
        q: 'Field `b` of type double with alignment eight follows `int a` ending at offset four. Where does `b` start?',
        options: ['At offset four', 'At offset eight after four pad bytes', 'At offset five', 'At offset twelve'],
        answer: 1,
        explanation: 'Step 1: Round the current end upward. Step 2: Find the next multiple of eight, which is eight. Step 3: Insert four pad bytes. Step 4: Place b at eight.'
      },
      // PYQ-pattern: record size rounding with trailing padding for array strides.
      {
        q: 'A record ends at offset twenty with strictest member alignment eight. What is its size?',
        options: ['Twenty four', 'Twenty two', 'Twenty', 'Twenty eight'],
        answer: 0,
        explanation: 'Step 1: Recall size must be a multiple of max alignment. Step 2: Test twenty against eight and find a remainder. Step 3: Round up to the next multiple. Step 4: Select twenty four with four tail pad bytes.'
      },
      {
        q: 'For nested record address `base + off_inner + off_field`, what is `off_inner`?',
        options: ['The width of the outer record', 'Always zero', 'The alignment of the field alone', 'The aligned offset of the inner record within the outer'],
        answer: 3,
        explanation: 'Step 1: Treat the inner record as one member. Step 2: Walk outer offsets with padding. Step 3: Record where the inner block starts. Step 4: Add the inner field offset to it.'
      }
    ]
  }
]
