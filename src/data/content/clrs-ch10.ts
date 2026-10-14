import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Chapter 10: Elementary Data Structures (Sections 10.1 – 10.4)
// ============================================================================

export const clrsCh10Content: SectionContent[] = [
  // ---------------------------------------------------------------- 10.1
  {
    sectionId: "clrs-ch10-s1",
    readingTime: 6,
    intro: "Stacks and queues are the simplest dynamic sets: which element a DELETE removes is fixed in advance — the most recently inserted (stack, LIFO) or the oldest (queue, FIFO). Both admit $O(1)$ array implementations built from nothing but an index or two; the only genuine idea in the section is the queue's circular wraparound, where head and tail chase each other through the array with all arithmetic done modulo $n$.",
    objectives: [
      "Implement a stack with PUSH, POP and an underflow check on a single array index",
      "Implement a circular queue with ENQUEUE and DEQUEUE, tracking head and tail",
      "Explain the mod-n wraparound and why capacity is one less than the array size",
    ],
    concepts: [
      {
        term: "The stack: LIFO discipline",
        kind: "definition",
        statement: "A **stack** is a dynamic set with the **LIFO** (last-in, first-out) property: INSERT (called `PUSH`) and DELETE (called `POP`) both operate on the same end — the **top**. The element popped is always the most recently pushed one still present.",
        detail: "CLRS models the abstract stack on the array $S[1..n]$ with the attribute $S.top$ = index of the most recently pushed element; $S.top = 0$ means empty. `STACK-EMPTY(S)` tests exactly $S.top = 0$.",
      },
      {
        term: "Stack array code",
        kind: "method",
        statement: "**`PUSH(S, x)`**: if $S.top = n$ raise **overflow**; else $S.top = S.top + 1$; $S[S.top] = x$. **`POP(S)`**: if `STACK-EMPTY` raise **underflow**; else $S.top = S.top - 1$; return $S[S.top + 1]$.",
        detail: "Each operation is a constant number of array accesses — $O(1)$, with zero data movement. Overflow and underflow are genuine errors, not silent failures: popping an empty stack or pushing onto a full one violates the contract and must be signalled, never ignored.",
      },
      {
        term: "The queue: FIFO discipline",
        kind: "definition",
        statement: "A **queue** is a dynamic set with the **FIFO** (first-in, first-out) property: elements are deleted in the same order they were inserted. INSERT is called `ENQUEUE`, DELETE is called `DEQUEUE`; the two operations touch opposite ends.",
        detail: "CLRS implements the queue on $Q[1..n]$ with two attributes: $Q.head$ = index of the oldest element, $Q.tail$ = the index where the next ENQUEUE will write (so the occupied cells are exactly the cyclic interval $head, head+1, \\ldots, tail-1$).",
      },
      {
        term: "The circular wraparound",
        kind: "insight",
        statement: "When an index passes $n$ it wraps to 1: both loops advance by $Q.head = (Q.head \\bmod n) + 1$ and $Q.tail = (Q.tail \\bmod n) + 1$. The queue is **empty** when $head = tail$, and **full** when $head = tail + 1$ (cyclically) — so an $n$-cell array holds at most $n - 1$ elements.",
        detail: "The capacity sacrifice is forced by indistinguishability: after $n$ enqueues with no dequeues, $tail$ would return to $head$, reading 'empty' while the array is packed. Reserving one slot keeps the two states apart. Storage is reused automatically — cells freed by DEQUEUE are overwritten when the tail comes back around, as the figure shows.",
      },
      {
        term: "Overflow versus underflow discipline",
        kind: "definition",
        statement: "A stack of capacity $n$ overflows on the $(n+1)$st PUSH and underflows on POP from empty ($top = 0$); a queue of capacity $n$ is full when $(tail+1) \\bmod (n+1) = head$ and empty when $head = tail$. Both structures check one integer before touching the array.",
        detail: "CLRS wastes one queue slot so full and empty remain distinguishable without a separate count: with $n+1$ cells the queue holds at most $n$ elements. The alternative is a size counter, which costs one more field but uses every cell.",
      },
    ],
    figures: [
      {
        caption: "The two array implementations. Left: the stack after `PUSH(S,15)`, `PUSH(S,6)`, `PUSH(S,2)`, `PUSH(S,41)` — $S.top = 4$; the next PUSH writes $S[5]$ and the next POP returns $S[4] = 41$. Right: a 12-cell circular queue holding $\\langle 15, 6, 9, 8, 4, 17, 3 \\rangle$, running from $Q.head = 8$ up to $Q.tail = 3$ exclusive — the tail has already wrapped past cell 12 back to cell 1. DEQUEUE reads $Q[head]$; ENQUEUE writes $Q[tail]$; both advance cyclically (mod 12), and the queue is full when $head = tail + 1$ — capacity 11.",
        afterConcept: 4,
        svg: `<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="Left: a vertical array stack with four filled cells, S.top pointing below the top cell, push and pop annotations. Right: a horizontal twelve-cell circular queue with head at cell 8 and wrapped tail at cell 3"><line x1="352" y1="16" x2="352" y2="296" stroke="currentColor" stroke-width="1" opacity="0.15"/><text x="74" y="30" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="bold" fill="currentColor">STACK — LIFO</text><g stroke="currentColor" stroke-width="1.5"><rect x="140" y="250" width="90" height="34" fill="currentColor" fill-opacity="0.12"/><rect x="140" y="212" width="90" height="34" fill="currentColor" fill-opacity="0.12"/><rect x="140" y="174" width="90" height="34" fill="currentColor" fill-opacity="0.12"/><rect x="140" y="136" width="90" height="34" fill="currentColor" fill-opacity="0.12"/></g><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"><rect x="140" y="98" width="90" height="34"/><rect x="140" y="60" width="90" height="34"/></g><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="185" y="272">15</text><text x="185" y="234">6</text><text x="185" y="196">2</text><text x="185" y="158">41</text></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="246" y="272">1</text><text x="246" y="234">2</text><text x="246" y="196">3</text><text x="246" y="158">4</text><text x="246" y="120">5</text><text x="246" y="82">6</text></g><line x1="78" y1="153" x2="130" y2="153" stroke="currentColor" stroke-width="1.8"/><polygon points="136,153 126,148.5 126,157.5" fill="currentColor"/><text x="105" y="143" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">S.top = 4</text><line x1="78" y1="115" x2="130" y2="115" stroke="currentColor" stroke-width="1.8"/><polygon points="136,115 126,110.5 126,119.5" fill="currentColor"/><text x="105" y="105" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">PUSH(S, 58)</text><text x="185" y="310" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75" text-anchor="middle">POP returns S[S.top] = 41 · PUSH writes S[S.top+1]</text><text x="388" y="30" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="bold" fill="currentColor">QUEUE — FIFO</text><g stroke="currentColor" stroke-width="1.5"><rect x="375" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.12"/><rect x="400" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.12"/><rect x="425" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.03" stroke-dasharray="4 3"/><rect x="450" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.03" stroke-dasharray="4 3"/><rect x="475" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.03" stroke-dasharray="4 3"/><rect x="500" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.03" stroke-dasharray="4 3"/><rect x="525" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.03" stroke-dasharray="4 3"/><rect x="550" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.12"/><rect x="575" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.12"/><rect x="600" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.12"/><rect x="625" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.12"/><rect x="650" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.12"/><rect x="675" y="120" width="25" height="36" fill="currentColor" fill-opacity="0.12"/></g><g font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle"><text x="387.5" y="143">17</text><text x="412.5" y="143">3</text><text x="562.5" y="143">15</text><text x="587.5" y="143">6</text><text x="612.5" y="143">9</text><text x="637.5" y="143">8</text><text x="662.5" y="143">4</text></g><g font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.65" text-anchor="middle"><text x="387.5" y="172">1</text><text x="412.5" y="172">2</text><text x="437.5" y="172">3</text><text x="462.5" y="172">4</text><text x="487.5" y="172">5</text><text x="512.5" y="172">6</text><text x="537.5" y="172">7</text><text x="562.5" y="172">8</text><text x="587.5" y="172">9</text><text x="612.5" y="172">10</text><text x="637.5" y="172">11</text><text x="662.5" y="172">12</text></g><line x1="437" y1="98" x2="437" y2="112" stroke="currentColor" stroke-width="1.8"/><polygon points="437,117 432.5,108 441.5,108" fill="currentColor"/><text x="437" y="92" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">Q.tail = 3</text><line x1="562" y1="98" x2="562" y2="112" stroke="currentColor" stroke-width="1.8"/><polygon points="562,117 557.5,108 566.5,108" fill="currentColor"/><text x="562" y="92" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">Q.head = 8</text><path d="M 677 148 C 706 148, 706 200, 660 200 L 405 200 C 362 200, 366 158, 371 152" stroke="currentColor" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/><polygon points="373,150 381,153 376,160" fill="currentColor"/><text x="525" y="218" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75" text-anchor="middle">indices wrap around: 12 → 1 (mod 12)</text><text x="375" y="244" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">DEQUEUE returns Q[head] = 15, then head ← 9</text><text x="375" y="262" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">ENQUEUE(x): Q[tail] ← x, then tail ← 4 — writes cell 3</text><text x="375" y="280" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">7 elements · empty when head = tail · full when head = tail + 1 — capacity 11</text></svg>`,
      },
    ],
    examples: [
      {
        title: "A stack trace with an underflow",
        problem: "Starting from an empty stack ($S.top = 0$), trace `PUSH(S,15)`, `PUSH(S,6)`, `PUSH(S,2)`, `PUSH(S,41)`, then four POPs and a fifth POP.",
        steps: [
          { label: "Four pushes", text: "$S = \\langle 15, 6, 2, 41 \\rangle$ with $S.top = 4$ — 15 sits at the bottom and never moves; each later element lands above it." },
          { label: "Pops", text: "POP returns 41 ($top \\to 3$), then 2 ($top \\to 2$), 6 ($top \\to 1$), 15 ($top \\to 0$) — strictly the reverse order of arrival." },
          { label: "The fifth pop", text: "Now `STACK-EMPTY` holds: $S.top = 0$. POP must raise an **underflow error** — returning 0 or 15 silently would corrupt every caller that trusts the stack contract." },
        ],
        result: "LIFO verified; eight $O(1)$ operations, zero data movement, and one precondition (non-empty) that the implementation must police itself.",
      },
      {
        title: "A queue wraps around a 6-cell array",
        problem: "Trace on $Q[1..6]$: ENQUEUE(a), ENQUEUE(b), ENQUEUE(c), DEQUEUE, DEQUEUE, ENQUEUE(d), ENQUEUE(e), ENQUEUE(f), DEQUEUE, ENQUEUE(g) — from the initial empty state ($head = tail = 1$).",
        steps: [
          { label: "Enqueue a, b, c", text: "Write $Q[1..3]$, $tail$ moves $1 \\to 4$; contents $\\langle a, b, c \\rangle$ from $head = 1$." },
          { label: "Dequeue twice", text: "Return $a$ then $b$; $head$ moves $1 \\to 3$; contents $\\langle c \\rangle$." },
          { label: "Enqueue d, e, f", text: "Write $Q[4], Q[5], Q[6]$; $tail$ advances $4 \\to 5 \\to 6 \\to 1$ — the wraparound fires: $tail = (6 \\bmod 6) + 1 = 1$." },
          { label: "Dequeue, then ENQUEUE(g)", text: "Return $c$, $head \\to 4$; write $Q[1] = g$ (cell 1 was freed when $a$ left), $tail \\to 2$." },
        ],
        result: "Final state: $head = 4$, $tail = 2$, contents $\\langle d, e, f, g \\rangle$ occupying cells 4, 5, 6, 1 — storage reused, no element ever copied. Capacity here is 5 of 6 cells; a sixth ENQUEUE would report full.",
      },
    ],
    keyTakeaways: [
      "A stack is one array plus one index: PUSH writes $S[top{+}1]$, POP reads $S[top]$ — both $O(1)$, with overflow and underflow as real error conditions.",
      "A circular queue is two indices chasing each other modulo $n$: occupied cells form the cyclic interval $head..tail{-}1$; storage is reused without any copying.",
      "Empty ($head = tail$) and full ($head = tail + 1$ cyclically) must stay distinguishable, so an $n$-cell queue holds at most $n - 1$ elements.",
    ],
    quiz: [
      {
        q: "With `S.top` holding the index of the most recent push, a correct PUSH is:",
        options: [
          "increment `S.top`, then write `S[S.top] = x` — the cell above the old top",
          "write `S[S.top] = x`, then increment `S.top` — overwriting the top element",
          "shift all elements down one cell, then write `S[1] = x`",
          "a $\\Theta(n)$ operation to make room at the bottom",
        ],
        answer: 0,
        explanation: "The top index points at the last occupied cell, so the new element belongs one above it: top is incremented first, then written — and only after checking for overflow.",
      },
      {
        q: "Popping an empty stack (top = 0) must:",
        options: [
          "return a sentinel key silently",
          "raise an underflow error — the deletion's precondition fails",
          "wrap around to the last cell",
          "re-push the previous value",
        ],
        answer: 1,
        explanation: "DELETE on an empty set is undefined behavior for the caller; the implementation's contract is to detect and signal it, not to invent a value.",
      },
      {
        q: "In the circular array queue (tail = next insertion point), the queue is empty exactly when:",
        options: ["head = 0", "head = tail", "tail = n", "head = tail + 1 (mod n)"],
        answer: 1,
        explanation: "The occupied cells are head..tail−1 cyclically; the interval is empty precisely when the two indices coincide. head = tail + 1 is the full condition instead.",
      },
      {
        q: "With $n$ array cells, this queue implementation stores at most $n - 1$ elements because:",
        options: [
          "one cell is reserved for a sentinel key value",
          "after $n$ enqueues $tail$ would equal $head$ — indistinguishable from empty — so 'full' is declared one slot early",
          "the head cell must always stay empty for the head pointer",
          "the tail pointer needs a spare slot to detect overflow",
        ],
        answer: 1,
        explanation: "Both states are encoded by index arithmetic alone; sacrificing one slot makes 'empty' (head = tail) and 'full' (head = tail + 1) mutually exclusive signals.",
      },
      // PYQ-pattern: GATE 2018 — circular queue wraparound (rephrased, values changed)
      {
        q: "A circular queue of capacity $5$ has head $= 3$ and tail $= 1$ (all arithmetic modulo $5$). After two further ENQUEUE operations, the queue is:",
        options: ["Holding $3$ items", "Full with $5$ items", "Empty", "Holding $4$ items"],
        answer: 1,
        explanation: "Step 1 — Given: capacity $n = 5$, head $= 3$, tail $= 1$, two ENQUEUE operations. Step 2 — Governing count: stored items equal $(tail - head + n) \\bmod n$. Step 3 — Arithmetic: initial count $(1 - 3 + 5) \\bmod 5 = 3$; two arrivals raise it to $5$ with tail $(1 + 2) \\bmod 5 = 3$, which equals capacity. Step 4 — Sanity check: head never moved, tail wrapped past the array end exactly as the circular design intends, and $5$ items in $5$ slots is the full condition. Step 5 — Distractor analysis: $3$ is the before-state, empty confuses head-equals-tail with the tag bit unset, and $4$ miscounts the arrivals. Step 6 — Conclude: the queue is full with $5$ items.",
      },
    ],
  },

  // ---------------------------------------------------------------- 10.2
  {
    sectionId: "clrs-ch10-s2",
    readingTime: 6,
    intro: "Arrays fix the shape of data; linked lists let elements live anywhere and find each other through pointers. Searching degrades to $O(n)$, but insertion and deletion at a known position are $O(1)$ pointer surgery — and with a sentinel node standing in for both boundary NILs, the surgery becomes branch-free: the same two pointer writes delete any node, first or last, no cases required.",
    objectives: [
      "Read and write singly and doubly linked list search, insert and delete",
      "Explain why doubly linked deletion is $O(1)$ while singly linked deletion is $\\Theta(n)$",
      "Use a sentinel node to eliminate boundary cases in a circular doubly linked list",
    ],
    concepts: [
      {
        term: "Linked lists",
        kind: "definition",
        statement: "A **linked list** stores its elements in **nodes**, each carrying one or more **pointers** to neighbors in addition to the key. A **singly linked** node has a `next` field (and the list has a `head`); a **doubly linked** node also has a `prev` field, so both neighbors are reachable from any node.",
        detail: "The set's order lives in the pointers, not in addresses — splicing rearranges order without moving data. The cost is locality (nodes are scattered) and search: `LIST-SEARCH(L, k)` must walk from the head, $\\Theta(n)$ worst case.",
      },
      {
        term: "Insertion and deletion",
        kind: "method",
        statement: "**`LIST-INSERT(L, x)`** splices $x$ at the front: $x.next = L.head$; $x.prev = \\text{NIL}$; if the list is non-empty $L.head.prev = x$; $L.head = x$ — $O(1)$. **`LIST-DELETE(L, x)`** on a doubly linked list: $x.prev.next = x.next$ and $x.next.prev = x.prev$, plus head bookkeeping if $x$ is first — $O(1)$ given a pointer to $x$.",
        detail: "The doubly linked version deletes any node in constant time **because the node knows its predecessor**. In a singly linked list, deleting $x$ requires the predecessor — reachable only by walking from the head, $\\Theta(n)$: the single missing pointer costs a linear scan per deletion.",
      },
      {
        term: "Sentinels",
        kind: "definition",
        statement: "A **sentinel** is a dummy node — `L.nil` — that stands where NIL would be, converting the list into a **circular doubly linked list**: `L.nil.next` is the first element, `L.nil.prev` the last, and the last node's `next` / first node's `prev` point back at the sentinel.",
        detail: "The sentinel holds no data; it exists so that every real node has a genuine neighbor on both sides. 'Empty list' becomes a one-node ring, and head/tail checks disappear from the code — every list, however short, is handled by the same instructions.",
      },
      {
        term: "What the sentinel buys — and costs",
        kind: "insight",
        statement: "With a sentinel, `LIST-SEARCH'`, `LIST-INSERT'` and `LIST-DELETE'` lose all their boundary cases: delete is unconditionally $x.prev.next = x.next$; $x.next.prev = x.prev$; insert is three pointer writes. The price is one extra node per list and slightly less obvious termination conditions (loops end when the walk returns to `L.nil`, not at NIL).",
        detail: "CLRS's judgment: sentinels should be used when clarity and robustness matter and the list is short enough that the memory is negligible; they shine precisely in loops whose bodies would otherwise sprout 'unless this is the end' branches — the classic source of off-by-one bugs.",
      },
      {
        term: "Head pointer versus sentinel",
        kind: "insight",
        statement: "A plain doubly linked list keeps a $head$ pointer that is $\\mathrm{NIL}$ when empty, so every operation branches on emptiness and ends. A sentinel $L.\\mathrm{nil}$ is a permanent dummy node: the list is never empty as a pointer structure, so insertion and deletion never test for $\\mathrm{NIL}$.",
        detail: "Price: one node of overhead and a circular invariant to maintain ($nil.next$ is the head, $nil.prev$ the tail). Payoff: LIST-DELETE becomes four pointer writes with no branches, which is why the text calls sentinels branch-free.",
      },
    ],
    figures: [
      {
        caption: "A doubly linked list with a sentinel, keys $\\langle 9, 16, 4, 25 \\rangle$. The sentinel `L.nil` replaces both boundary NILs: 25's `next` and 9's `prev` point at it, making the structure a closed ring — a list with no ends and hence no end cases. Deleting the node with key 4 given pointer $x$ is two branch-free pointer writes: $x.prev.next = x.next$ (16's next now points at 25) and $x.next.prev = x.prev$ (25's prev now points at 16). Searching for 13 walks $9 \\to 16 \\to 4 \\to 25$ and stops when the walk returns to `L.nil` — no head pointer is needed at all.",
        afterConcept: 3,
        svg: `<svg viewBox="0 0 720 290" width="100%" role="img" aria-label="A circular doubly linked list with a sentinel node and four keyed nodes, next arrows along the middle, prev arrows arcing above, and the wraparound pointers looped below"><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"><rect x="40" y="110" width="110" height="46" rx="8"/></g><g stroke="currentColor" stroke-width="1.8"><rect x="175" y="110" width="110" height="46"/><rect x="310" y="110" width="110" height="46"/><rect x="445" y="110" width="110" height="46"/><rect x="580" y="110" width="110" height="46"/></g><g stroke="currentColor" stroke-width="1" opacity="0.4"><line x1="70" y1="110" x2="70" y2="156"/><line x1="120" y1="110" x2="120" y2="156"/><line x1="205" y1="110" x2="205" y2="156"/><line x1="255" y1="110" x2="255" y2="156"/><line x1="340" y1="110" x2="340" y2="156"/><line x1="390" y1="110" x2="390" y2="156"/><line x1="475" y1="110" x2="475" y2="156"/><line x1="525" y1="110" x2="525" y2="156"/><line x1="610" y1="110" x2="610" y2="156"/><line x1="660" y1="110" x2="660" y2="156"/></g><g font-family="ui-sans-serif, system-ui" font-size="15" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="230" y="139">9</text><text x="365" y="139">16</text><text x="500" y="139">4</text><text x="635" y="139">25</text></g><text x="95" y="139" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" opacity="0.6" text-anchor="middle">—</text><text x="95" y="98" font-family="ui-sans-serif, system-ui" font-size="11.5" font-style="italic" fill="currentColor" opacity="0.75" text-anchor="middle">L.nil (sentinel)</text><text x="230" y="182" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.55" text-anchor="middle">prev</text><text x="230" y="104" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.55" text-anchor="middle">key</text><g stroke="currentColor" stroke-width="1.8"><line x1="151" y1="127" x2="170" y2="127"/></g><polygon points="173,127 164,122.5 164,131.5" fill="currentColor"/><g stroke="currentColor" stroke-width="1.8"><line x1="286" y1="127" x2="305" y2="127"/></g><polygon points="308,127 299,122.5 299,131.5" fill="currentColor"/><g stroke="currentColor" stroke-width="1.8"><line x1="421" y1="127" x2="440" y2="127"/></g><polygon points="443,127 434,122.5 434,131.5" fill="currentColor"/><g stroke="currentColor" stroke-width="1.8"><line x1="556" y1="127" x2="575" y2="127"/></g><polygon points="578,127 569,122.5 569,131.5" fill="currentColor"/><path d="M 190 106 C 190 78, 135 78, 135 104" stroke="currentColor" stroke-width="1.5" fill="none"/><polygon points="135,108 131,99 139,99" fill="currentColor"/><path d="M 325 106 C 325 78, 270 78, 270 104" stroke="currentColor" stroke-width="1.5" fill="none"/><polygon points="270,108 266,99 274,99" fill="currentColor"/><path d="M 460 106 C 460 78, 405 78, 405 104" stroke="currentColor" stroke-width="1.5" fill="none"/><polygon points="405,108 401,99 409,99" fill="currentColor"/><path d="M 595 106 C 595 78, 540 78, 540 104" stroke="currentColor" stroke-width="1.5" fill="none"/><polygon points="540,108 536,99 544,99" fill="currentColor"/><text x="212" y="70" font-family="ui-sans-serif, system-ui" font-size="10.5" font-style="italic" fill="currentColor" opacity="0.75">prev</text><path d="M 610 160 L 610 195 L 130 195 C 100 195, 95 180, 95 162" stroke="currentColor" stroke-width="1.5" fill="none"/><polygon points="95,158 91,167 99,167" fill="currentColor"/><text x="360" y="190" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.75" text-anchor="middle">25.next wraps to L.nil</text><path d="M 55 156 L 55 232 L 675 232 L 675 162" stroke="currentColor" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/><polygon points="675,158 671,167 679,167" fill="currentColor"/><text x="360" y="250" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.75" text-anchor="middle">L.nil.prev wraps to 25</text><text x="60" y="275" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.55" text-anchor="middle">each node: [ prev | key | next ]</text></svg>`,
      },
    ],
    examples: [
      {
        title: "Branch-free deletion and a failed search",
        problem: "On the sentinel list $\\text{L.nil} \\Leftrightarrow 9 \\Leftrightarrow 16 \\Leftrightarrow 4 \\Leftrightarrow 25$, (a) delete the node with key 4 given a pointer $x$ to it; (b) search for key 13.",
        steps: [
          { label: "Delete: write 1", text: "$x.prev.next = x.next$: node 16's `next` field now points directly at node 25 — 4 is bypassed from the left." },
          { label: "Delete: write 2", text: "$x.next.prev = x.prev$: node 25's `prev` field now points directly at node 16 — 4 is bypassed from the right. That is the entire deletion: **two pointer writes, no conditionals** — the code never asked whether 4 was first or last." },
          { label: "Search for 13", text: "`LIST-SEARCH'` walks from `L.nil.next`: 9 ($\\ne 13$) $\\to$ 16 ($\\ne 13$) $\\to$ 25 ($\\ne 13$) — after the deletion — and the next step reaches `L.nil` itself: the loop's termination condition fires." },
        ],
        result: "The ring now reads $\\text{L.nil} \\Leftrightarrow 9 \\Leftrightarrow 16 \\Leftrightarrow 25$; key 13 is reported absent because the walk came home. The same two-line delete works for node 9, node 25, or the last remaining node — uniformity is the sentinel's whole point.",
      },
      {
        title: "Inserting at both ends",
        problem: "On circular doubly linked list with sentinel $nil$, insert $9$ at the head and $1$ at the tail starting from $\\langle 5 \\rangle$.",
        steps: [
          { label: "Start", text: "$nil.next = 5$, $5.prev = nil$, $5.next = nil$, $nil.prev = 5$: one element, head and tail coincide." },
          { label: "Head insert 9", text: "LIST-INSERT puts $9$ before the head: $9.next = 5$, $5.prev = 9$, $9.prev = nil$, $nil.next = 9$: list $\\langle 9, 5 \\rangle$." },
          { label: "Tail insert 1", text: "Insert after $nil.prev$: $5$ stays, $1.prev = 5$, $1.next = nil$, $5.next = 1$, $nil.prev = 1$: list $\\langle 9, 5, 1 \\rangle$." },
          { label: "Delete middle", text: "LIST-DELETE($5$): $9.next = 1$, $1.prev = 9$ in two writes, no case split for head/tail: $\\langle 9, 1 \\rangle$." },
        ],
        result: "Head and tail inserts are the same four-write splice at different anchors; sentinel deletion never branches on position.",
      },
    ],
    keyTakeaways: [
      "Linked lists trade search time ($\\Theta(n)$ from the head) for $O(1)$ splicing: doubly linked deletion from a given pointer is two pointer writes; singly linked deletion needs the predecessor and costs a linear scan.",
      "A sentinel node replaces both boundary NILs and closes the list into a ring — empty and one-element lists need no special cases, and delete becomes unconditional.",
      "Sentinels cost one node per list and replace NIL-termination with 'return to L.nil' conditions — worth it whenever branch-light code matters.",
    ],
    quiz: [
      {
        q: "Deleting a node $x$ from a doubly linked list, given a pointer to $x$, takes $O(1)$ via:",
        options: [
          "`x.prev.next = x.next; x.next.prev = x.prev`",
          "scanning from the head to find $x$'s predecessor",
          "marking $x$'s key as deleted and compacting later",
          "swapping $x$ with the head first",
        ],
        answer: 0,
        explanation: "The node carries both neighbors, so both bypasses are single writes. (If x is the head, the head pointer is also updated — still O(1), and the sentinel version removes even that case.)",
      },
      {
        q: "From a singly linked list, deleting a given node $x$ requires:",
        options: [
          "$O(1)$ — one pointer write bypasses it",
          "$\\Theta(n)$ — the predecessor must be found by walking from the head",
          "$O(\\lg n)$ — binary search over the list",
          "the list's length as a parameter",
        ],
        answer: 1,
        explanation: "Only x.next is stored, so the predecessor — the node whose next must be rewired — is reachable only by traversing the list from the head.",
      },
      {
        q: "Replacing NIL by a sentinel in a circular doubly linked list primarily buys:",
        options: [
          "smaller memory — the sentinel replaces two null pointers",
          "simpler, branch-free code — no special cases for the ends in SEARCH, INSERT or DELETE",
          "constant-time search by key",
          "automatic maintenance of sorted order",
        ],
        answer: 1,
        explanation: "Every real node has real neighbors on both sides, so the end-of-list conditionals vanish from the operations — the same code path handles every position, including the empty ring.",
      },
      {
        q: "In the sentinel version, how does `LIST-SEARCH'` detect that a key is absent?",
        options: [
          "it returns NIL because the loop exits at a null pointer",
          "the walk returns to `L.nil` — the sentinel marks the end of the ring",
          "a boolean flag is set by the last node visited",
          "it throws a not-found exception",
        ],
        answer: 1,
        explanation: "The termination test is x ≠ L.nil rather than x ≠ NIL: the walk chases next pointers around the ring and stops exactly when it arrives back at the sentinel.",
      },
    ],
  },

  // ---------------------------------------------------------------- 10.3
  {
    sectionId: "clrs-ch10-s3",
    readingTime: 5,
    intro: "What is a pointer, really? This section answers by building objects without them: a linked list can live in three parallel arrays, with ordinary integers playing the role of addresses. Allocation and deallocation become a free list threaded through the unused cells — a two-line allocator that is the ancestor of every object pool.",
    objectives: [
      "Represent a linked list in the multiple-array and single-array forms, with integer indices as pointers",
      "Implement ALLOCATE-OBJECT and FREE-OBJECT on the free list in $O(1)$",
      "Explain the trade-offs between the two packed representations",
    ],
    concepts: [
      {
        term: "The multiple-array representation",
        kind: "method",
        statement: "Represent a doubly linked list by three parallel arrays — `key`, `next`, `prev` — indexed by object number, plus a variable `L` holding the index of the first object. A 'pointer' to a node **is an integer index**; NIL is 0 (or any reserved non-index).",
        detail: "Node $i$'s key is `key[i]`, its neighbors `next[i]` and `prev[i]`. Traversal, insertion and deletion run exactly as before with index arithmetic instead of pointer dereference — the structure is identical because the *shape* of a linked list lives in the pointer values, not in memory layout.",
      },
      {
        term: "The single-array representation",
        kind: "method",
        statement: "Alternatively pack all objects into **one array**: object $i$'s $k$ fields occupy the consecutive cells $k \\cdot i + 1, \\ldots, k \\cdot i + k$, and a pointer is the base index — field $f$ of object $i$ is found at the computed address $k \\cdot i + f$.",
        detail: "This is how real compilers lay out `struct` arrays — pointer arithmetic on a base plus a stride. The multiple-array version is more flexible (fields of different widths, easy to grow one field); the single-array version is more compact and matches hardware addressing.",
      },
      {
        term: "The free list",
        kind: "method",
        statement: "The unused cells are threaded into a **singly linked list** — the free list — using the `next` array itself. **`ALLOCATE-OBJECT()`**: if `free == NIL` report out of space; else $x = $ `free`; `free = next[x]`; return $x$. **`FREE-OBJECT(x)`**: `next[x] = free`; `free = x`. Both $O(1)$.",
        detail: "The allocator is a stack discipline on free cells (LIFO), implemented in the objects' own storage: an unallocated node's `next` field is exactly where its free-list successor is recorded. No scanning, no heaps, no garbage — just relink.",
      },
      {
        term: "Why build this by hand",
        kind: "insight",
        statement: "Besides supporting languages without pointer types, the array representation makes explicit what abstract pointers hide: **allocation policy**. The free list gives deterministic $O(1)$ allocate/free but cannot defragment or grow; garbage-collected heaps trade that control for safety and convenience.",
        detail: "This is the machinery inside object pools, arena allocators and the classic technique for packing sparse structures into flat memory — e.g., symbol tables in early compilers. When CLRS later needs to store objects of bounded size it simply reuses this scheme.",
      },
      {
        term: "The free-list invariant",
        kind: "definition",
        statement: "Unused cells form a singly linked free list threaded through their $next$ fields with head $free$: ALLOCATE-OBJECT pops the head in $O(1)$ and signals overflow when $free = \\mathrm{NIL}$; FREE-OBJECT pushes the cell back in $O(1)$. Allocated and free cells partition the array.",
        detail: "Invariant: every array slot is either reachable from the stored list(s) or from $free$, never both, never neither. Compaction is unnecessary because allocation reuses whatever the free list offers first.",
      },
    ],
    examples: [
      {
        title: "A list in three arrays, one allocation, one deletion",
        problem: "Arrays `key`, `next`, `prev` of length 8 hold the list $9 \\to 16 \\to 4 \\to 25$ in cells 4, 1, 7, 5 (`L` = 4); the free list chains cells $2 \\to 3 \\to 6 \\to 8$. Insert key 17 at the front, then delete key 4.",
        steps: [
          { label: "Initial layout", text: "`key = ⟨·, 16, ·, 9, 25, ·, 4, ·⟩`; `next[4]=1, next[1]=7, next[7]=5, next[5]=NIL`; `prev[4]=NIL, prev[1]=4, prev[7]=1, prev[5]=7` — the list reads cells 4 → 1 → 7 → 5." },
          { label: "ALLOCATE for 17", text: "`free = 2`, so the object goes to cell 2 and `free` advances to `next[2] = 3`. Write `key[2] = 17`; splice: `next[2] = 4`, `prev[4] = 2`, `L = 2` — the list is $17 \\to 9 \\to 16 \\to 4 \\to 25$." },
          { label: "Delete key 4 (cell 7)", text: "Splice: `next[1] = 5`, `prev[5] = 1`. Then `FREE-OBJECT(7)`: `next[7] = 3` (the current free head), `free = 7` — cell 7 rejoins the free list in front of cell 3." },
          { label: "Final state", text: "List $17 \\to 9 \\to 16 \\to 25$ in cells 2 → 4 → 1 → 5; free list $7 \\to 3 \\to 6 \\to 8$. Every operation: a constant number of array writes." },
        ],
        result: "Both operations are $O(1)$; nothing was scanned and no memory moved — the pointer *discipline* survived the loss of real pointers completely.",
      },
      {
        title: "Exhausting the free list",
        problem: "With array size $5$ and free list $1 \\to 2 \\to 3 \\to 4 \\to 5$, allocate three objects, free the middle one, then allocate twice more.",
        steps: [
          { label: "Allocate 3", text: "Pop $1,2,3$: $free = 4$. Stored list uses cells $1,2,3$; free list $4 \\to 5$." },
          { label: "Free cell 2", text: "Push $2$: $2.next = 4$, $free = 2$. Stored cells $1,3$; free $2 \\to 4 \\to 5$." },
          { label: "Allocate 2", text: "Pop $2$ then $4$: $free = 5$. Stored cells $1,3,2,4$ in allocation order, free $5$." },
          { label: "Overflow next", text: "One more allocation pops $5$ ($free = \\mathrm{NIL}$); the following allocation signals overflow: $5$ cells hold at most $5$ objects." },
        ],
        result: "Free-list allocation is $O(1)$ per operation with no search; overflow is exactly $free = \\mathrm{NIL}$, i.e. every slot allocated.",
      },
    ],
    keyTakeaways: [
      "A linked list needs only parallel arrays plus integer indices — the multiple-array form (key/next/prev) and the packed single-array form (stride arithmetic) are equivalent in power.",
      "The free list threads unused cells through the `next` array, giving $O(1)$ ALLOCATE-OBJECT and FREE-OBJECT — a stack allocator with zero auxiliary storage.",
      "This representation exposes allocation policy explicitly: deterministic relink-based management, at the price of manual free-list discipline that garbage collectors would automate.",
    ],
    quiz: [
      {
        q: "In the multiple-array representation of a doubly linked list, a 'pointer' to a node is:",
        options: [
          "a language-level reference to an object",
          "an integer index into the parallel `key`/`next`/`prev` arrays — NIL for 'no object'",
          "a memory address returned by the heap allocator",
          "a pointer to a row of a two-dimensional array",
        ],
        answer: 1,
        explanation: "Node i exists exactly at the index i across all three arrays; storing, comparing and dereferencing 'pointers' is ordinary integer arithmetic.",
      },
      {
        q: "ALLOCATE-OBJECT runs in $O(1)$ because:",
        options: [
          "it scans the arrays for a cell with an empty key",
          "the free cells are chained by the `next` array; it pops the free-list head and updates `free` in a couple of writes",
          "a hash table maps keys to cells",
          "allocation is amortized over all insertions",
        ],
        answer: 1,
        explanation: "The free list is threaded through the very cells it manages, so allocating is: x = free; free = next[x]; return x — three operations, no search.",
      },
      {
        q: "In the single-array packed representation with $k$ fields per object stored consecutively from index 1, field $f$ of object $i$ lives at:",
        options: [
          "$k \\cdot i + f$ — computed by index arithmetic",
          "a location recorded in a separate index array",
          "$i + f$",
          "an arbitrary cell chosen by the free list",
        ],
        answer: 0,
        explanation: "Objects occupy fixed strides: object i's fields are cells k·i+1 … k·i+k, so any field is base-plus-offset arithmetic — exactly how struct arrays are addressed in real machines.",
      },
    ],
  },

  // ---------------------------------------------------------------- 10.4
  {
    sectionId: "clrs-ch10-s4",
    readingTime: 5,
    intro: "A binary tree fits in three pointers per node, but what if a node may have any number of children? Storing a list of children per parent works, but CLRS's answer is leaner: give every node a left-child pointer and a right-sibling pointer, and a whole rooted forest — however wide — fits in $O(n)$ fields with $O(1)$ parent, first-child and next-sibling access.",
    objectives: [
      "Represent binary trees with p, left and right pointer fields",
      "Represent arbitrary rooted trees with the left-child, right-sibling scheme",
      "Analyze the costs of traversals and the trade-offs among representations",
    ],
    concepts: [
      {
        term: "Representing binary trees",
        kind: "method",
        statement: "Each node of a **binary tree** stores three fields: `p` (parent), `left` (left child) and `right` (right child) — the root's `p` and missing children are NIL. $O(1)$ parent, left-child and right-child access; $3n$ fields total.",
        detail: "When the tree is complete (like a heap, Chapter 6) even these pointers vanish: the implicit array layout computes children at $2i$ and $2i+1$. The explicit pointer representation is for arbitrary shapes — and for Chapter 12's search trees.",
      },
      {
        term: "Left-child, right-sibling representation",
        kind: "method",
        statement: "For a rooted tree with **unbounded branching**, each node stores: `p` (parent), `left-child` (its leftmost child, NIL if a leaf) and `right-sibling` (the next child of the same parent, NIL if last). A parent points at its **first** child only; the remaining children form a singly linked list through sibling pointers.",
        detail: "Any rooted tree — however many children per node — fits in exactly three fields per node: $O(n)$ space with no dependence on the branching factor. To enumerate all children of node $u$: follow `left-child` once, then `right-sibling` until NIL.",
      },
      {
        term: "Cost of the sibling chains",
        kind: "insight",
        statement: "Enumerating all $k$ children of a node costs $O(k)$ — one hop per child — and finding whether $v$ is a child of $u$ likewise scans the chain. Parent queries remain $O(1)$, and converting a general tree to this form is a single pass.",
        detail: "Contrast with the alternative — each node storing a variable-length array of children: same asymptotic total space ($O(n)$ pointers overall), $O(1)$ random access to the $j$th child, but heavier per-node objects and no fixed record size. The sibling chain trades indexed access for uniform, pointer-sized records.",
      },
      {
        term: "The binary-tree coincidence",
        kind: "insight",
        statement: "For an **ordered** rooted tree with at most two children per node, the left-child, right-sibling representation coincides with the ordinary binary-tree layout: the first child becomes the left pointer, the second child (a sibling of the first) becomes the right pointer.",
        detail: "This is the classic 'rotation' that maps any forest onto a binary tree — the engine of the Knuth transform and of the correspondence between general trees and binary trees. Every algorithm for binary trees thereby inherits a meaning for arbitrary trees.",
      },
      {
        term: "Rooted versus free trees",
        kind: "definition",
        statement: "A free tree is an acyclic connected undirected graph; rooting it at any vertex $r$ orients every edge away from $r$ and defines parent, child, ancestor and descendant. The left-child, right-sibling scheme stores any rooted forest, however wide, in two pointers per node.",
        detail: "Theorem B.5 in the appendix: $|E| = |V|-1$ characterizes trees, so rooting never changes the edge count, only the vocabulary. Binary trees are the special case where right-sibling chains have length at most $1$.",
      },
    ],
    figures: [
      {
        caption: "One rooted tree, two representations. (a) The tree with root A; A has children B, C, D; B has children E, F; D has child G. (b) The same tree in left-child, right-sibling form: A's `left-child` points at B only — its **first** child — and B → C → D is a sibling chain. Likewise B's left-child is E, with F reached as E's right-sibling, and D's left-child is G. Each node also keeps a parent pointer (dashed, shown for a few nodes). Seven nodes cost exactly 21 fields regardless of how wide the tree grows.",
        afterConcept: 2,
        svg: `<svg viewBox="0 0 720 320" width="100%" role="img" aria-label="Two drawings of the same seven-node rooted tree: conventional parent-child edges on the left, and the left-child right-sibling pointer structure on the right"><text x="185" y="26" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.85" text-anchor="middle">(a) the rooted tree</text><g stroke="currentColor" stroke-width="1.8"><line x1="173" y1="72" x2="117" y2="128"/><line x1="185" y1="77" x2="185" y2="123"/><line x1="197" y1="72" x2="253" y2="128"/><line x1="97.4" y1="155.2" x2="72.6" y2="204.8"/><line x1="112.6" y1="155.2" x2="137.4" y2="204.8"/><line x1="260.9" y1="156.5" x2="249.1" y2="203.5"/></g><g stroke="currentColor" stroke-width="1.8"><circle cx="185" cy="60" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="105" cy="140" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="185" cy="140" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="265" cy="140" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="65" cy="220" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="145" cy="220" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="245" cy="220" r="17" fill="currentColor" fill-opacity="0.06"/></g><g font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="185" y="65">A</text><text x="105" y="145">B</text><text x="185" y="145">C</text><text x="265" y="145">D</text><text x="65" y="225">E</text><text x="145" y="225">F</text><text x="245" y="225">G</text></g><text x="535" y="26" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.85" text-anchor="middle">(b) left-child, right-sibling</text><g stroke="#f59e0b" stroke-width="2.2"><line x1="523" y1="72" x2="469" y2="126"/></g><polygon points="467,128 476.2,127.4 470.6,121.8" fill="#f59e0b"/><g stroke="#f59e0b" stroke-width="2.2"><line x1="447.4" y1="155.2" x2="424.2" y2="198"/></g><polygon points="422.6,204.8 430.2,198.6 423,195" fill="#f59e0b"/><g stroke="#f59e0b" stroke-width="2.2"><line x1="610.9" y1="156.5" x2="600" y2="199"/></g><polygon points="599.1,203.5 605.2,195.8 597.4,193.8" fill="#f59e0b"/><g stroke="#14b8a6" stroke-width="2.2"><line x1="473" y1="140" x2="517" y2="140"/></g><polygon points="519,140 510,135.5 510,144.5" fill="#14b8a6"/><g stroke="#14b8a6" stroke-width="2.2"><line x1="553" y1="140" x2="597" y2="140"/></g><polygon points="599,140 590,135.5 590,144.5" fill="#14b8a6"/><g stroke="#14b8a6" stroke-width="2.2"><line x1="433" y1="220" x2="477" y2="220"/></g><polygon points="479,220 470,215.5 470,224.5" fill="#14b8a6"/><g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.45"><line x1="535" y1="121" x2="535" y2="80"/></g><polygon points="535,78 530.5,87 539.5,87" fill="currentColor" opacity="0.55"/><g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.45"><line x1="495" y1="204.8" x2="456" y2="158.5"/></g><polygon points="453,155.2 454.5,164.8 447,165" fill="currentColor" opacity="0.55"/><g stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.45"><line x1="595" y1="203.5" x2="612" y2="157"/></g><polygon points="613,153.5 606.5,160.8 614.9,162.5" fill="currentColor" opacity="0.55"/><g stroke="currentColor" stroke-width="1.8"><circle cx="535" cy="60" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="455" cy="140" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="535" cy="140" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="615" cy="140" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="415" cy="220" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="495" cy="220" r="17" fill="currentColor" fill-opacity="0.06"/><circle cx="595" cy="220" r="17" fill="currentColor" fill-opacity="0.06"/></g><g font-family="ui-sans-serif, system-ui" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="535" y="65">A</text><text x="455" y="145">B</text><text x="535" y="145">C</text><text x="615" y="145">D</text><text x="415" y="225">E</text><text x="495" y="225">F</text><text x="595" y="225">G</text></g><g stroke="#f59e0b" stroke-width="2"><line x1="390" y1="298" x2="416" y2="298"/></g><polygon points="420,298 412,294 412,302" fill="#f59e0b"/><text x="426" y="302" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">left-child</text><g stroke="#14b8a6" stroke-width="2"><line x1="505" y1="298" x2="531" y2="298"/></g><polygon points="535,298 527,294 527,302" fill="#14b8a6"/><text x="541" y="302" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">right-sibling</text><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"><line x1="640" y1="298" x2="666" y2="298"/></g><polygon points="670,298 662,294 662,302" fill="currentColor"/><text x="676" y="302" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">parent p</text></svg>`,
      },
    ],
    examples: [
      {
        title: "The seven-node tree as a field table",
        problem: "Write the left-child, right-sibling tables for the figure's tree (A root; A's children B, C, D; B's children E, F; D's child G) and enumerate A's children.",
        steps: [
          { label: "The table", text: "A: $p = \\Lambda$, left-child $= B$, right-sibling $= \\Lambda$. B: $p = A$, left-child $= E$, right-sibling $= C$. C: $p = A$, left-child $= \\Lambda$, right-sibling $= D$. D: $p = A$, left-child $= G$, right-sibling $= \\Lambda$. E: $p = B$, left-child $= \\Lambda$, right-sibling $= F$. F: $p = B$, left-child $= \\Lambda$, right-sibling $= \\Lambda$. G: $p = D$, left-child $= \\Lambda$, right-sibling $= \\Lambda$." },
          { label: "Enumerate A's children", text: "$c = A.\\text{left-child} = B$ (yield B); $c = c.\\text{right-sibling} = C$ (yield C); $c = c.\\text{right-sibling} = D$ (yield D); $c = c.\\text{right-sibling} = \\Lambda$ — stop. Three hops for three children." },
          { label: "Space audit", text: "Seven nodes × 3 fields = 21 fields, of which 12 hold non-NIL pointers (6 parent, 3 left-child, 3 sibling) — and the count would stay at 21 fields even if A had a thousand children." },
        ],
        result: "Children of any node are enumerable in $O(k)$ for $k$ children; parents are $O(1)$; total space is exactly $3n$ fields — independent of the tree's width.",
      },
      {
        title: "Walking sibling chains",
        problem: "Node $a$ has children $b,c,d,e$ in left-child, right-sibling form. Count the steps to reach $e$ from $a$ and to list all children.",
        steps: [
          { label: "First child", text: "$a.left = b$: $O(1)$ to the first child." },
          { label: "Chain", text: "$b.right = c$, $c.right = d$, $d.right = e$, $e.right = \\mathrm{NIL}$: reaching $e$ costs $4$ right steps, i.e. $O(\\mathrm{degree})$." },
          { label: "List all", text: "Enumerating $k$ children costs $\\Theta(k)$ right steps; a binary-tree coincidence would cost $\\Theta(1)$ per child via indexed children." },
          { label: "Tradeoff", text: "Space $O(n)$ regardless of width versus $O(\\mathrm{degree})$ access per child: the scheme buys unbounded branching with two fields at the price of linear child scans." },
        ],
        result: "First child $O(1)$, $k$th child $O(k)$: sibling chains trade child-access time for fixed $O(1)$ fields per node.",
      },
    ],
    keyTakeaways: [
      "Binary trees need only `p`, `left`, `right` per node; complete trees (heaps) even elide the pointers into array arithmetic.",
      "The left-child, right-sibling scheme represents arbitrary rooted trees in $3n$ fields: a parent points at its first child, and the children of each node form a sibling chain.",
      "Sibling chains make child enumeration $O(k)$ for $k$ children — and, for trees with at most two children, the scheme coincides exactly with the standard binary-tree representation.",
    ],
    quiz: [
      {
        q: "In the left-child, right-sibling representation, all children of a node are found by:",
        options: [
          "following `left-child` once, then `right-sibling` repeatedly until NIL",
          "following `right-sibling` repeatedly from the parent",
          "scanning the whole array of nodes",
          "following parent pointers downward",
        ],
        answer: 0,
        explanation: "The parent points only at its leftmost child; each subsequent child is the previous one's right-sibling, so enumeration is one left-child hop then k − 1 sibling hops.",
      },
      {
        q: "Compared with giving each node a variable-length list of children, the left-child, right-sibling representation uses:",
        options: [
          "$O(n \\cdot d)$ fields, where $d$ is the maximum number of children",
          "exactly three fields per node — $O(n)$ total, independent of branching",
          "$O(n \\lg n)$ fields",
          "a fixed number of fields per tree, not per node",
        ],
        answer: 1,
        explanation: "Every node contributes one parent, one left-child and one right-sibling field; the wide fan-out is absorbed into chains rather than stored per parent.",
      },
      {
        q: "Enumerating all $k$ children of one node in this representation costs:",
        options: ["$O(1)$ regardless of $k$", "$O(k)$ — one sibling hop per child", "$O(k \\lg k)$", "$O(n)$ even when $k$ is small"],
        answer: 1,
        explanation: "The children live in a singly linked sibling chain, so visiting them costs one pointer hop each — the standard price of chained versus indexed access.",
      },
      {
        q: "For an ordered tree with at most two children per node, the left-child, right-sibling scheme:",
        options: [
          "cannot represent it, since binary trees need left/right child pointers",
          "coincides with the usual binary-tree layout — first child = left pointer, second child = right-sibling of the first",
          "requires extra parent pointers to disambiguate",
          "stores the two children in a hash table keyed by position",
        ],
        answer: 1,
        explanation: "A node's second child is exactly the first child's right-sibling, so the three-field layout maps onto p/left/right — the correspondence that turns general-tree algorithms into binary-tree ones.",
      },
    ],
  },
]
