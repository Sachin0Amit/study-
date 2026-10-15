import type { SectionContent } from "../library"

// ============================================================================
// Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms, 3rd Edition
// Chapter 17: Amortized Analysis (Sections 17.1 – 17.4)
// Aggregate analysis, the accounting method, the potential method, and
// dynamic tables: pricing rare expensive work honestly, without probability.
// ============================================================================

export const clrsCh17Content: SectionContent[] = [
  // ---------------------------------------------------------------- 17.1
  {
    sectionId: "clrs-ch17-s1",
    readingTime: 6,
    intro: "Every so often a data structure does something drastic: a `MULTIPOP` empties the whole stack, an `INCREMENT` flips every bit of a counter, an insertion copies an entire table. Worst-case per-operation analysis would charge every operation for the disaster it might cause; average-case analysis would hide behind assumptions about inputs. Amortized analysis does neither: it proves that in **any** sequence of operations the total cost is small enough that the average per operation is bounded — a worst-case guarantee with no probability in sight. Aggregate analysis, the first of this chapter's three methods, obtains that bound in a single stroke.",
    objectives: [
      "Define amortized analysis precisely and distinguish it from worst-case per-operation and average-case (probabilistic) analysis",
      "Bound any sequence of n stack operations (PUSH, POP, MULTIPOP) by charging each pop to its push",
      "Count the total bit flips of n INCREMENTs on a binary counter as a geometric series below 2n",
    ],
    concepts: [
      {
        term: "Amortized analysis",
        kind: "definition",
        statement: "In an **amortized analysis**, we bound the **total cost of a sequence** of operations in the worst case, and then divide by the number of operations. If any sequence of $n$ operations costs at most $T(n)$, each operation carries amortized cost $T(n)/n$ — a bound on the true average cost per operation that holds for **every** sequence, with no probabilistic assumptions.",
        detail: "The term is borrowed from accounting: a large one-time expense is amortized by spreading it over many periods. The few expensive operations are subsidized by the many cheap ones — CLRS notes that the amortized cost of the cheap operations is deliberately overstated so that the expensive ones can be understated.",
      },
      {
        term: "Aggregate analysis",
        kind: "method",
        statement: "**Aggregate analysis** bounds the entire sequence in one stroke: show that for all $n$, **any** sequence of $n$ operations starting from the initial state takes at most $T(n)$ total time in the worst case; then every operation has amortized cost $T(n)/n$, the same for every operation type.",
        detail: "The bluntness is both virtue and limitation — no bookkeeping is needed, but the method cannot assign different amortized costs to different operation types. The accounting method (17.2) and the potential method (17.3) can.",
      },
      {
        term: "The stack with MULTIPOP",
        kind: "definition",
        statement: "On a stack $S$ holding $|S|$ items, `PUSH` and `POP` each cost $\\Theta(1)$, and **`MULTIPOP(S, k)`** pops $\\min(k, |S|)$ items at a cost of $\\Theta(\\min(k, |S|))$ — up to $\\Theta(n)$ for a single call. Nevertheless, **any sequence of $n$ stack operations starting from an empty stack costs $O(n)$ total**, so each operation is amortized $O(1)$.",
        detail: "Charging argument: each object can be popped at most once for each time it is pushed, so charge every pop to the push that placed the object. At most $n$ pushes occur, hence at most $n$ pops in all their forms, for a total of at most $2n$ elementary steps — the one $\\Theta(n)$ MULTIPOP is paid for by the pushes that filled the stack.",
      },
      {
        term: "The binary counter",
        kind: "insight",
        statement: "Incrementing a $k$-bit counter $n$ times starting from 0 flips bit $i$ exactly $\\lfloor n/2^i \\rfloor$ times, so the total number of bit flips is $\\sum_{i \\ge 0} \\lfloor n/2^i \\rfloor < n \\cdot \\sum_{i \\ge 0} 1/2^i = 2n$ — amortized $O(1)$ flips per `INCREMENT`, although a single increment can flip all $k = \\Theta(\\lg n)$ bits.",
        detail: "Bit 0 flips every time, bit 1 every other time, bit 2 every fourth time — a geometric decay. The same charging idea as the stack: the flips of bit $i$ are paid for by the $2^i$ increments that elapse between two of its flips, so each increment owes only $O(1)$ flips on average.",
      },
      {
        term: "Amortized versus average-case",
        kind: "insight",
        statement: "Average-case averages over inputs with a distribution; amortized bounds the worst case over sequences with no distribution: $\\frac{1}{n}\\sum_{i=1}^{n} c_i \\le t$ for every sequence. Amortized is a worst-case guarantee, average-case is not.",
        detail: "Stack MULTIPOP is $O(n)$ per operation worst case but $O(1)$ amortized: no input distribution is assumed, the bound holds even for adversarial sequences that call MULTIPOP every time.",
      },
    ],
    examples: [
      {
        title: "Eight increments of a binary counter, flip by flip",
        problem: "Starting from a counter holding 0000, execute INCREMENT eight times (reaching 8 = 1000). Count the flips at each bit position, then compare the total work against the aggregate bound $2n$.",
        steps: [
          { label: "Bit 0", text: "Flips on every single increment — its value runs 0,1,0,1,0,1,0,1,0 across the eight steps: $8$ flips, matching $\\lfloor 8/2^0 \\rfloor = 8$." },
          { label: "Bit 1", text: "Flips each time the count reaches an even value: at increments landing on 2, 4, 6 and 8 — four flips, matching $\\lfloor 8/2^1 \\rfloor = 4$." },
          { label: "Bits 2 and 3", text: "Bit 2 flips at 4 and 8 ($\\lfloor 8/2^2 \\rfloor = 2$ flips); bit 3 flips exactly once, in the jump 0111 → 1000 ($\\lfloor 8/2^3 \\rfloor = 1$). Higher bits never flip." },
          { label: "Total", text: "Total work $= 8 + 4 + 2 + 1 = 15$ bit flips, strictly below the aggregate bound $2n = 16$. The most expensive single increment (7 → 8, flipping four bits) is absorbed by the cheap ones around it." },
        ],
        result: "15 flips for $n = 8$: the geometric series $\\sum_{i \\ge 0} \\lfloor n/2^i \\rfloor$ stays under $2n$, so $n$ increments cost $\\Theta(n)$ — amortized $\\Theta(1)$ per increment even though the final increment alone flipped 4 bits.",
      },
      {
        title: "Worst-case chain that amortizes",
        problem: "Push $1,2,3$, MULTIPOP $3$, push $4$, MULTIPOP $2$ (one pop fails on empty): total the actual costs.",
        steps: [
          { label: "Pushes", text: "Three PUSHes: $1+1+1 = 3$. Stack $\\langle 1,2,3 \\rangle$." },
          { label: "First MULTIPOP", text: "Pops $3,2,1$: $3$ pops + $1$ loop test $= 4$? Book charges $\\min(s, k)$ pops: here $3$." },
          { label: "Push 4, MULTIPOP 2", text: "PUSH $4$: $1$. MULTIPOP $2$: pops $4$ then fails on empty: $1$ pop. Total pops $= 4$." },
          { label: "Average", text: "Total $3+3+1+1 = 8$ over $6$ operations: $1.33$ average. Each element popped at most once per push, so $n$ operations cost $O(n)$." },
        ],
        result: "$8$ total, $O(1)$ amortized: expensive MULTIPOPs are prepaid by their PUSHes.",
      },
    ],
    keyTakeaways: [
      "Amortized analysis divides a worst-case bound on the total cost of any $n$-operation sequence by $n$ — a guarantee on the average that needs no probability.",
      "Aggregate analysis is the one-shot version: one total bound $T(n)$, and the same amortized cost $T(n)/n$ for every operation.",
      "Stack: each element is popped at most once per push, so $n$ operations cost $O(n)$; counter: bit flips decay geometrically to under $2n$.",
    ],
    quiz: [
      {
        q: "Which statement best characterizes amortized analysis?",
        options: [
          "It averages the running time over a probability distribution on the inputs.",
          "It bounds the average cost per operation in the worst case, over any sequence of operations.",
          "It bounds the worst-case running time of each individual operation.",
          "It applies only to randomized algorithms.",
        ],
        answer: 1,
        explanation: "Amortized analysis is a worst-case guarantee on the average over a sequence — no probabilities are involved (that would be average-case analysis, Chapter 5).",
      },
      {
        q: "A single MULTIPOP(S, k) executed on a stack currently holding s items costs:",
        options: [
          "$\\Theta(k)$ regardless of the stack contents",
          "$\\Theta(k + s)$",
          "$\\Theta(\\min(k, s))$ — it pops only as many items as are present",
          "$\\Theta(s)$ regardless of k",
        ],
        answer: 2,
        explanation: "MULTIPOP pops min(k, s) items and its cost is proportional to that count — it cannot pop more items than the stack holds.",
      },
      {
        q: "Starting from an empty stack, the total cost of an arbitrary sequence of n operations (PUSH, POP, MULTIPOP) is:",
        options: [
          "$O(n)$",
          "$O(n \\lg n)$",
          "$O(n^2)$",
          "$O(k \\cdot n)$, where k is the largest MULTIPOP parameter",
        ],
        answer: 0,
        explanation: "Each object can be popped at most once per push and at most n pushes occur; charging pops to pushes bounds the sequence by 2n elementary steps.",
      },
      {
        q: "When a k-bit binary counter is incremented n times starting from 0, how many times does bit i flip?",
        options: [
          "exactly $n$ times, for every bit",
          "exactly $\\lfloor n/2^i \\rfloor$ times",
          "at most $\\lg n$ times",
          "exactly $k$ times",
        ],
        answer: 1,
        explanation: "Bit i flips once per $2^i$ increments — a geometric decay that keeps the total number of flips below 2n.",
      },
    ],
  },

  // ---------------------------------------------------------------- 17.2
  {
    sectionId: "clrs-ch17-s2",
    readingTime: 6,
    intro: "Aggregate analysis hands the same number to every operation. The accounting method is finer: each operation type carries its own amortized cost, at the price of keeping books. Picture a bank inside the data structure — when an operation's amortized charge exceeds its actual cost, the difference is deposited as credit; when an operation is expensive, it withdraws stored credit instead of paying cash. The books are valid exactly when the balance never dips below zero.",
    objectives: [
      "State and justify the prefix credit invariant that makes a set of amortized charges valid",
      "Assign charges 2/0/0 to PUSH/POP/MULTIPOP with one dollar riding on each stack element",
      "Charge the binary counter 2 dollars per INCREMENT by banking one dollar on every 1 bit",
    ],
    concepts: [
      {
        term: "Amortized cost and credit",
        kind: "definition",
        statement: "In the **accounting method**, the $i$-th operation receives an **amortized cost** $\\hat{c}_i$ that may differ from its **actual cost** $c_i$. When $\\hat{c}_i > c_i$, the difference $\\hat{c}_i - c_i$ is stored as **credit** with the data structure; when $\\hat{c}_i < c_i$, stored credit pays the shortfall. Credit is an artifact of the analysis — the real running time is always the actual cost.",
        detail: "Unlike aggregate analysis, the method can charge different operation types different amounts — expensive operations are deliberately undercharged and cheap ones overcharged — provided the books balance at every point in time.",
      },
      {
        term: "The credit invariant",
        kind: "theorem",
        statement: "A set of amortized costs is valid if, for every $i$, the data structure holds nonnegative credit: $$\\sum_{j=1}^{i} \\hat{c}_j \\;\\ge\\; \\sum_{j=1}^{i} c_j \\quad \\text{for all } i.$$ Then the total amortized cost upper-bounds the total actual cost of **every** operation sequence.",
        detail: "The prefix form is the point: a user may stop after any number of operations, and the charges collected so far must already cover the work done so far. A scheme that balances only in total could hide unpaid debt in the middle of a sequence.",
      },
      {
        term: "Charging the stack",
        kind: "method",
        statement: "Charge **`PUSH` $2$**, **`POP` $0$**, **`MULTIPOP` $0$**. Of the two dollars, one pays for the push itself and one is banked **on the element just pushed**. Any later pop of that element — alone or inside a `MULTIPOP` — is paid by the dollar riding on it, so pops are free in the amortized view.",
        detail: "The credit balance equals the number of elements in the stack, which is never negative — the invariant holds automatically, and $n$ operations cost at most $2n$.",
      },
      {
        term: "Charging the binary counter",
        kind: "insight",
        statement: "Charge **`INCREMENT` $2$**: at most one bit changes from 0 to 1 per increment, so one dollar pays for setting that bit and the second is banked **on the bit**. A later $1 \\to 0$ flip of that bit pays for itself out of the dollar riding on it. Every `INCREMENT` costs at most $2$ amortized.",
        detail: "The credit balance equals the number of 1 bits, never negative; since at most one bit is set per increment, $n$ increments cost at most $2n$ — matching the aggregate bound, but with a per-operation story of where the money sits.",
      },
      {
        term: "Credit never negative implies the bound",
        kind: "theorem",
        statement: "If amortized costs $\\hat c_i$ keep cumulative credit $\\sum_{i=1}^{k}(\\hat c_i - c_i) \\ge 0$ for every prefix $k$, then $\\sum_{i=1}^{n} c_i \\le \\sum_{i=1}^{n} \\hat c_i$ for every sequence: total actual never exceeds total amortized.",
        detail: "The prefix condition is the whole proof: credit is a bank balance that starts at $0$ and never overdraws. Choosing $\\hat c$ is design; checking prefixes is verification.",
      },
    ],
    examples: [
      {
        title: "The stack's bank statement",
        problem: "Run the sequence PUSH, PUSH, PUSH, PUSH, MULTIPOP(S, 3), POP, PUSH, MULTIPOP(S, 2) from an empty stack. Track the actual cost, the amortized charge, and the credit balance after each operation (PUSH and POP cost 1; MULTIPOP(S, k) costs min(k, |S|)).",
        steps: [
          { label: "Four pushes", text: "Each PUSH charges $2$ and costs $1$, so the balance climbs $1, 2, 3, 4$. Each of the four elements in the stack carries exactly one banked dollar." },
          { label: "MULTIPOP(S, 3)", text: "Actual cost 3 (three elements leave); charge 0. The dollars riding on those three elements pay the bill, and the balance falls to $4 - 3 = 1$ — the dollar on the one remaining element." },
          { label: "POP", text: "Cost 1, charge 0, paid by the last element's dollar; balance 0 with an empty stack." },
          { label: "PUSH", text: "Charge 2, cost 1: balance 1 again, one element with one dollar on board." },
          { label: "MULTIPOP(S, 2)", text: "Only one element is present, so the actual cost is $\\min(2, 1) = 1$; charge 0, and the last dollar is spent. Balance 0." },
        ],
        result: "Total actual cost $4 + 3 + 1 + 1 + 1 = 10$; total amortized charge $4 \\cdot 2 + 0 + 0 + 2 + 0 = 10$ — equal, because the run starts and ends at the empty stack where no credit is held. The invariant held throughout: the balance, always exactly the stack size, never went negative.",
      },
      {
        title: "Binary counter's bank statement",
        problem: "Charge INCREMENT $2$ dollars, pay $1$ per flip. Audit $0 \\to 7$ ($000 \\to 111$).",
        steps: [
          { label: "Deposit", text: "Each INCREMENT deposits $2$, spends $t+1$ on $t$ trailing $1$s plus the $0$ flip: net $+1$ per increment banked on the new $1$." },
          { label: "Balance", text: "After $7$ increments balance $=$ number of $1$s $= 3$: each $1$ holds $1$ dollar of prepaid reset cost." },
          { label: "Total", text: "Actual flips $= 1+2+1+3+1+2+1 = 11$; amortized $7 \\times 2 = 14 \\ge 11$ ✓." },
          { label: "Bound", text: "$14/7 = 2$ amortized per INCREMENT, hence $O(1)$: the $3$-flip increments withdrew stored dollars instead of charging cash." },
        ],
        result: "Balance $3$, total $11 \\le 14$: $2$ dollars per INCREMENT covers every flip with credit to spare.",
      },
    ],
    keyTakeaways: [
      "Validity is the prefix inequality: for every $i$, total charges so far must cover total actual costs so far — credit never goes negative.",
      "Stack: charge $2$ / $0$ / $0$ with one dollar riding on each element; the balance equals the stack size.",
      "Counter: $2$ per INCREMENT — one dollar sets a bit, one is banked on it; clearing a bit pays itself.",
    ],
    quiz: [
      {
        q: "In the accounting method, when is a set of amortized costs valid?",
        options: [
          "Whenever each amortized cost is at least as large as the actual cost of that same operation.",
          "Whenever the total amortized cost of any sequence is at least its total actual cost — the credit balance never goes negative.",
          "Whenever all operations are assigned the same amortized cost.",
          "Whenever the amortized costs sum to the actual costs exactly.",
        ],
        answer: 1,
        explanation: "The condition is on running totals (prefixes): cheap operations overcharge to prepay for expensive ones, so individual amortized costs may legitimately sit below actual costs.",
      },
      {
        q: "With PUSH charged 2 and POP/MULTIPOP charged 0, where does the credit reside in the accounting story?",
        options: [
          "In a global counter maintained outside the data structure.",
          "Two dollars on the top element of the stack only.",
          "Split evenly across all operations ever executed.",
          "One dollar on each element currently in the stack.",
        ],
        answer: 3,
        explanation: "Each pushed element carries one banked dollar that pays for its eventual pop, whether by POP or by MULTIPOP — so the balance equals the stack size.",
      },
      {
        q: "Why can MULTIPOP(S, k) be charged 0 when it may cost Θ(s) to execute?",
        options: [
          "MULTIPOP never actually removes elements from the stack.",
          "Its amortized cost is defined as zero because k is small in practice.",
          "Every element it pops carries a banked dollar that pays for that pop.",
          "The elements popped are always near the top and therefore cheap.",
        ],
        answer: 2,
        explanation: "The credits deposited by the pushes ride on the elements themselves; a MULTIPOP spends exactly one banked dollar per element it removes.",
      },
      {
        q: "In the accounting scheme for a binary counter, why is INCREMENT charged only 2 dollars?",
        options: [
          "Because at most two bits ever flip in one increment.",
          "Because bit flips are free whenever the bit is 0.",
          "Because the counter is assumed to hold few 1 bits on average.",
          "Because at most one bit turns from 0 to 1: one dollar pays for the set, and one is banked on that bit to pay for its eventual clearing.",
        ],
        answer: 3,
        explanation: "Clearing a 1 to 0 consumes the dollar banked on that bit, so the only cash an increment ever needs is for the single bit it sets (plus the credit for that bit's future clear).",
      },
    ],
  },

  // ---------------------------------------------------------------- 17.3
  {
    sectionId: "clrs-ch17-s3",
    readingTime: 8,
    intro: "Tracking where every dollar sits works for stacks, but many structures have no place to pin credit: a Fibonacci heap amortizes over the number of trees and marked nodes — quantities belonging to the whole structure. The potential method drops the bookkeeping of locations and keeps a single real number per state: a potential function Φ, exactly analogous to potential energy in physics, where only differences are ever observed. This section defines the machinery, states the one theorem that drives it, and exercises it on the stack and the counter; the masters tier below carries the formal proof.",
    objectives: [
      "Define a potential function and compute amortized costs as actual cost plus the change in potential",
      "Apply the telescoping identity to bound total actual cost by total amortized cost",
      "Analyze the stack with Φ = stack size and the binary counter with Φ = number of 1 bits",
    ],
    concepts: [
      {
        term: "Potential function",
        kind: "definition",
        statement: "A **potential function** $\\Phi$ assigns a real number $\\Phi(D)$ to each state $D$ of the data structure, chosen so that $\\Phi(D_0) = 0$ on the initial state and $\\Phi(D_i) \\ge \\Phi(D_0)$ on every reachable state. The **amortized cost** of the $i$-th operation, which changes state $D_{i-1}$ into $D_i$ at actual cost $c_i$, is $$\\hat{c}_i = c_i + \\Phi(D_i) - \\Phi(D_{i-1}).$$ An operation that raises the potential is overcharged; one that spends potential gets a rebate.",
        detail: "As in physics, only differences of potential are observable — the convention $\\Phi(D_0) = 0$ merely fixes the zero level, like choosing the origin for measuring height.",
      },
      {
        term: "The telescoping bound",
        kind: "theorem",
        statement: "If $\\Phi(D_0) = 0$ and $\\Phi(D_i) \\ge \\Phi(D_0)$ for all $i$, then the amortized total dominates the actual total: $$\\sum_{i=1}^{n} \\hat{c}_i = \\sum_{i=1}^{n} c_i + \\Phi(D_n) - \\Phi(D_0) \\;\\ge\\; \\sum_{i=1}^{n} c_i.$$ The total amortized cost is therefore a valid upper bound on the total actual cost of any sequence of $n$ operations.",
        detail: "The sum **telescopes** — each intermediate $\\Phi(D_i)$ is added once and subtracted once — so only the endpoints survive. The formal proof, and the reason the hypothesis must hold at *every* $i$ rather than just the last, is the masters tier below.",
      },
      {
        term: "Potential as a bank balance",
        kind: "insight",
        statement: "The accounting method's credit balance **is** a potential function in disguise: if $\\Phi(D_i)$ is the credit held in state $D_i$, then $\\Phi(D_i) = \\Phi(D_{i-1}) + \\hat{c}_i - c_i$, which is the definition rearranged. The potential method simply refuses to say **where** the credit is stored — freeing $\\Phi$ to mix global quantities (table occupancy, number of trees, marks) that no per-object scheme can express.",
        detail: "This is the method's practical edge: structures whose state does not decompose into credit-carrying objects — Fibonacci heaps are the canonical example — still submit to a well-chosen potential.",
      },
      {
        term: "Choosing the potential",
        kind: "method",
        statement: "Design $\\Phi$ to be **low right after expensive work** and to **grow as expensive work approaches**, so that the term $\\Phi(D_i) - \\Phi(D_{i-1})$ released by a rare expensive operation subsidizes it: the stack's $\\Phi = |S|$ rises by 1 on each push; the counter's $\\Phi = $ number of 1 bits changes by $2 - t$ on an increment that flips $t$ bits, making $\\hat{c} = t + (2 - t) = 2$; the table's $\\Phi = 2\\,num - size$ peaks exactly when a doubling is due.",
        detail: "The two conditions ($\\Phi(D_0) = 0$, $\\Phi \\ge \\Phi(D_0)$) make any bound *valid*, but only a well-shaped $\\Phi$ makes it *tight* — a lazy potential yields true but uselessly large amortized costs.",
      },
      {
        term: "Valid potential: $\\Phi(D_0) = 0$",
        kind: "definition",
        statement: "A potential $\\Phi$ must satisfy $\\Phi(D_0) = 0$ and $\\Phi(D_i) \\ge 0$ for all $i$: it starts empty and never goes negative. Then $\\sum c_i = \\sum \\hat c_i - \\Phi(D_n) \\le \\sum \\hat c_i$.",
        detail: "Negative potential would lend the analysis money it never repays; $\\Phi(D_0) > 0$ would charge the empty structure. Stack size and counter ones both start at $0$ and stay nonnegative, so both qualify.",
      },
    ],
    examples: [
      {
        title: "Five increments through the potential lens",
        problem: "Let Φ be the number of 1 bits in a 4-bit counter. Increment from 3 through 8, recording for each step the number t of flipped bits, the ones count before and after, the change ΔΦ, and the amortized cost ĉ = t + ΔΦ.",
        steps: [
          { label: "3 → 4", text: "$0011 \\to 0100$: $t = 3$ (bits 0 and 1 cleared, bit 2 set). Ones go $2 \\to 1$, so $\\Delta\\Phi = -1$ and $\\hat{c} = 3 + (-1) = 2$." },
          { label: "4 → 5", text: "$0100 \\to 0101$: $t = 1$, ones $1 \\to 2$, $\\Delta\\Phi = +1$, $\\hat{c} = 2$." },
          { label: "5 → 6", text: "$0101 \\to 0110$: $t = 2$, ones $2 \\to 2$, $\\Delta\\Phi = 0$, $\\hat{c} = 2$." },
          { label: "6 → 7", text: "$0110 \\to 0111$: $t = 1$, ones $2 \\to 3$, $\\Delta\\Phi = +1$, $\\hat{c} = 2$." },
          { label: "7 → 8", text: "$0111 \\to 1000$: $t = 4$, ones $3 \\to 1$, $\\Delta\\Phi = -2$, $\\hat{c} = 2$ — the cascade is exactly what the banked potential was waiting for." },
        ],
        result: "Every increment costs 2 amortized. The actual total is $3+1+2+1+4 = 11$ while the amortized total is only $10 = 11 + \\Phi(1000) - \\Phi(0011) = 11 + 1 - 2$ — the telescoping identity checks out to the dollar, and the potential released by earlier operations genuinely pays for the final cascade.",
      },
      {
        title: "Potential audit of three pushes and a multipop",
        problem: "Stack $\\Phi = $ size. PUSH $a,b$, MULTIPOP $5$, PUSH $c$: compute $\\hat c$ each step.",
        steps: [
          { label: "PUSH a", text: "Actual $1$, $\\Delta\\Phi = +1$: $\\hat c = 2$." },
          { label: "PUSH b", text: "Actual $1$, $\\Delta\\Phi = +1$: $\\hat c = 2$." },
          { label: "MULTIPOP 5", text: "Pops $2$: actual $2$, $\\Delta\\Phi = -2$: $\\hat c = 0$." },
          { label: "PUSH c", text: "Actual $1$, $\\Delta\\Phi = +1$: $\\hat c = 2$. Totals: actual $5$, amortized $6$, $\\Phi_{final} = 1 = 6-5$ ✓." },
        ],
        result: "Amortized $2,2,0,2$ sum $6 \\ge 5$ actual; $\\Phi$ telescopes exactly as the theorem promises.",
      },
    ],
    keyTakeaways: [
      "Amortized cost is $\\hat{c}_i = c_i + \\Phi(D_i) - \\Phi(D_{i-1})$: cash paid plus potential banked, minus potential released.",
      "The telescoping identity turns $\\sum \\hat{c} \\ge \\sum c$ into the single condition $\\Phi(D_n) \\ge \\Phi(D_0)$ — required at every prefix, not just the end.",
      "Any accounting scheme's balance is a potential, and vice versa; the potential notation is what lets global quantities be amortized.",
    ],
    quiz: [
      {
        q: "The amortized cost of the i-th operation under potential Φ is:",
        options: [
          "$c_i - \\Phi(D_i) + \\Phi(D_{i-1})$",
          "$c_i \\cdot \\Phi(D_i) / \\Phi(D_{i-1})$",
          "$c_i + \\Phi(D_i) - \\Phi(D_{i-1})$",
          "$c_i + \\Phi(D_i) + \\Phi(D_{i-1})$",
        ],
        answer: 2,
        explanation: "Amortized cost is actual cost plus the potential stored; an operation that releases potential (Φ decreases) receives the difference as a rebate.",
      },
      {
        q: "What must a potential function satisfy to yield valid bounds?",
        options: [
          "$\\Phi(D_0) = 0$ for the initial state and $\\Phi(D_i) \\ge \\Phi(D_0)$ for every reachable state",
          "$\\Phi$ must be integer-valued and strictly increasing",
          "$\\Phi(D_i) \\le \\Phi(D_0)$ for every state",
          "$\\Phi$ must equal the number of objects in the structure",
        ],
        answer: 0,
        explanation: "These two conditions make the telescoping sum dominate the actual total; the specific shape of Φ is free — which is where the analyst's skill lives.",
      },
      {
        q: "With Φ(S) = number of stack elements, the amortized cost of a MULTIPOP(S, k) that pops s = min(k, |S|) items is:",
        options: [
          "$k$",
          "$0$",
          "$s$",
          "$k - s$",
        ],
        answer: 1,
        explanation: "Actual cost s plus potential change −s: every popped element lowers Φ by 1, exactly canceling the cost of popping it.",
      },
      {
        q: "Why does the telescoping argument prove that total amortized cost bounds total actual cost?",
        options: [
          "Because each amortized cost individually bounds its actual cost.",
          "Because Φ is convex over the state space.",
          "Because the sum runs over a finite number of states.",
          "Because all intermediate Φ terms cancel, leaving $\\Phi(D_n) - \\Phi(D_0) \\ge 0$ to be added to the actual total.",
        ],
        answer: 3,
        explanation: "Every $\\Phi(D_i)$ for $0 < i < n$ appears once with a plus and once with a minus; what survives is the actual total plus the nonnegative net potential change.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "The potential method, formally — why Φ ≥ Φ(D₀) carries the proof",
        blocks: [
          {
            kind: "para",
            body: "Set the stage precisely. A data structure starts in an initial state $D_0$; operations with real costs $c_1, \\ldots, c_n$ carry it through states $D_1, \\ldots, D_n$. A **potential** is any real-valued function on states with $\\Phi(D_0) = 0$ and $\\Phi(D_i) \\ge \\Phi(D_0)$ for every $i \\ge 0$. The amortized cost of the $i$-th operation is defined as $\\hat{c}_i = c_i + \\Phi(D_i) - \\Phi(D_{i-1})$: cash paid, plus potential banked (or withdrawn, when the difference is negative). Everything below follows from this one definition.",
          },
          {
            kind: "theorem",
            heading: "Prefix domination",
            body: "For every prefix length $m \\le n$, $$\\sum_{i=1}^{m} \\hat{c}_i \\;=\\; \\sum_{i=1}^{m} c_i \\;+\\; \\Phi(D_m) - \\Phi(D_0).$$ In particular, if $\\Phi(D_m) \\ge \\Phi(D_0)$ for all $m$, then the running total of amortized charges dominates the running total of actual costs at every instant, and the full-sequence bound $\\sum_{i=1}^{n} \\hat{c}_i \\ge \\sum_{i=1}^{n} c_i$ follows by taking $m = n$.",
          },
          {
            kind: "proof",
            body: "Sum the definition of $\\hat{c}_i$ over $i = 1, \\ldots, m$: $$\\sum_{i=1}^{m} \\hat{c}_i = \\sum_{i=1}^{m} c_i + \\sum_{i=1}^{m} \\bigl( \\Phi(D_i) - \\Phi(D_{i-1}) \\bigr).$$ The second sum is telescoping: write it out as $\\bigl[\\Phi(D_1) - \\Phi(D_0)\\bigr] + \\bigl[\\Phi(D_2) - \\Phi(D_1)\\bigr] + \\cdots + \\bigl[\\Phi(D_m) - \\Phi(D_{m-1})\\bigr]$ and watch every intermediate value $\\Phi(D_1), \\ldots, \\Phi(D_{m-1})$ appear once with a plus and once with a minus, cancelling pairwise. What survives is $\\Phi(D_m) - \\Phi(D_0)$, giving the identity. Now observe carefully what the hypothesis contributes. The **identity** holds for any $\\Phi$ whatsoever — no condition needed. The **inequality**, the claim that charges cover costs, is exactly the statement $\\Phi(D_m) \\ge \\Phi(D_0)$, invoked at whichever $m$ the user happens to stop. A potential that dipped below its initial level at some intermediate state would certify a prefix whose charges do not pay for its work: that is debt, not amortization. This is why the hypothesis is demanded at *every* $i$ — a bound proved only at the final state is worthless for a computation that pauses, checkpoints, or simply ends early.",
          },
          {
            kind: "derivation",
            heading: "The stack, exactly",
            body: "Take $\\Phi(S) = |S|$, the number of elements — legal, since the empty stack starts at $0$ and counts never go negative. `PUSH` costs 1 and raises $\\Phi$ by 1: $\\hat{c} = 2$. `POP` costs 1 and lowers $\\Phi$ by 1: $\\hat{c} = 0$. `MULTIPOP(S, k)` popping $s = \\min(k, |S|)$ items costs $s$ and lowers $\\Phi$ by exactly $s$: $\\hat{c} = 0$. Hence any $n$ operations cost at most $2n$ — and the prefix identity is **tight at every step**: charges minus costs equal the current stack size, the potential, to the unit.",
          },
          {
            kind: "derivation",
            heading: "Dynamic tables, expansion only",
            body: "For a table holding $num$ items in $size$ slots (insertions only), take $\\Phi(T) = 2\\,num - size$. This is legal: right after a doubling the load factor sits just above $1/2$ so $\\Phi > 0$, and it only grows until the table is full, where $\\Phi = num$ exactly finances the coming copy. Two cases. **Insert without expansion** ($num < size$): actual cost 1, and $\\Delta\\Phi = 2(num+1) - size - (2\\,num - size) = 2$, so $\\hat{c} = 3$. **Insert that doubles** ($num = size = m$): actual cost $m + 1$ (copy $m$ items, then insert); the new state has $num = m+1$, $size = 2m$, so $\\Delta\\Phi = 2(m+1) - 2m - (2m - m) = 2 - m$ and $\\hat{c} = (m+1) + (2 - m) = 3$. Every insertion costs exactly 3 amortized: the $m$ dollars of potential released by a full table pay for its $m$-item copy, and the three-dollar charge refills the reservoir as the table fills again. Section 17.4 adds deletion with a piecewise potential.",
          },
          {
            kind: "remark",
            body: "The hypothesis $\\Phi \\ge \\Phi(D_0)$ is not bureaucracy; it is the method's entire soundness condition — the state-based reincarnation of the accounting method's never-negative balance. Given any valid accounting scheme, define $\\Phi(D)$ as the credit the structure holds in state $D$: validity says precisely that this $\\Phi$ starts at $0$ and never dips below it. Conversely, any potential can be read as a bank balance that happens to depend only on the current state. The two methods prove the same theorems; the potential notation simply refuses to track **where** the money sits — which is what lets it express quantities like “number of roots plus twice the number of marked nodes” that no per-object wallet can hold.",
          },
          {
            kind: "application",
            body: "This machinery is CLRS's workhorse well beyond Chapter 17. **Fibonacci heaps** (Chapter 19) run on $\\Phi = (\\text{number of roots}) + 2 \\cdot (\\text{number of marked nodes})$: the potential released by consolidating roots pays for the consolidation, yielding amortized $O(\\lg n)$ `EXTRACT-MIN` against $O(1)$ `INSERT` and `DECREASE-KEY`. The disjoint-set forests of Chapter 21 — amortized $\\alpha(n)$ per operation under union by rank with path compression — are analyzed there by a rank-level argument of the same amortized spirit. And the dynamic tables of Section 17.4 use the $2\\,num - size$ potential just derived, made piecewise, to prove amortized $O(1)$ insertion **and** deletion. Tarjan's 1985 survey “Amortized Computational Complexity” remains the method's definitive treatment.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 17.4
  {
    sectionId: "clrs-ch17-s4",
    readingTime: 7,
    intro: "The theory now pays rent. A dynamic table is an array whose capacity must track its contents: an insertion into a full table forces an expansion — allocate bigger, copy everything — and deletions from a nearly empty table beg for a contraction. Any single boundary operation costs $\\Theta(n)$, so a worst-case analyst would report $\\Theta(n)$ per operation. The doubling rule and the quarter threshold make every operation amortized $O(1)$, provable by all three methods — and the load factor α traces the sawtooth that makes the whole design visible at a glance.",
    objectives: [
      "Define the load factor α = num/size and read the sawtooth it traces under mixed inserts and deletes",
      "Prove the O(1) amortized insertion bound for doubling tables by aggregate analysis and by the potential Φ = 2·num − size",
      "Justify the α < 1/4 contraction threshold and the hysteresis it creates between doubling and halving",
    ],
    concepts: [
      {
        term: "Dynamic table and load factor",
        kind: "definition",
        statement: "A **dynamic table** $T$ stores $num[T]$ items in $size[T]$ slots; its **load factor** is $\\alpha(T) = num[T] / size[T]$ (with $\\alpha = 1$ when $size = 0$). Operations on a table with spare slots cost $\\Theta(1)$; the interesting events sit at the extremes of $\\alpha$.",
        detail: "Expansion fires when an insertion finds $\\alpha = 1$; contraction fires when a deletion would push $\\alpha$ below $1/4$. Between those rails, the table absorbs work at constant cost per operation.",
      },
      {
        term: "Expansion by doubling",
        kind: "theorem",
        statement: "**TABLE-INSERT** on a full table allocates a new table of **twice** the size, copies the $num$ stored items, and then inserts — actual cost $\\Theta(n)$ for that one operation. Over any $n$ insertions from an empty table the total cost is **less than $3n$**: copying occurs at capacities $1, 2, 4, \\ldots, 2^{\\lfloor \\lg n \\rfloor}$ and $\\sum_{j=0}^{\\lfloor \\lg n \\rfloor} 2^j < 2n$. Each insertion is amortized $O(1)$ — charge 3 by the accounting method, or take $\\Phi = 2\\,num - size$ and get $\\hat{c} = 3$ in both cases.",
        detail: "The three methods agree because they are three notations for one phenomenon: geometric capacity growth means the items copied since the last doubling are at most those inserted since then. Tripling instead of doubling also works, with different constants; growing by a constant *additive* increment does not — $n$ insertions then cost $\\Theta(n^2)$.",
      },
      {
        term: "Contraction and the 1/4 rule",
        kind: "method",
        statement: "**TABLE-DELETE** removes an item; if that would leave $\\alpha < 1/4$, the table is **halved** (never below a minimal size). The resulting invariant — after every operation the nonempty table satisfies $1/4 \\le \\alpha \\le 1$ — supports the piecewise potential $$\\Phi(T) = \\begin{cases} 2\\,num - size & \\text{if } \\alpha \\ge 1/2, \\\\ size/2 - num & \\text{if } \\alpha < 1/2, \\end{cases}$$ which proves amortized cost at most $3$ per insertion and at most $2$ per deletion.",
        detail: "The two branches agree ($\\Phi = 0$) at the seam $\\alpha = 1/2$, so the potential cannot be pumped by oscillating across the boundary — the piecewise definition is what makes the hysteresis argument airtight.",
      },
      {
        term: "Why not halve at α = 1/2",
        kind: "insight",
        statement: "With thresholds **double at 1, halve below 1/2**, an adversary can alternate one deletion and one insertion forever around the boundary: from $\\alpha = 1/2$ with $size = 2m$, a **delete** forces a halving to $size = m$ (leaving $\\alpha \\approx 1$), and the next **insert** immediately doubles back to $size = 2m$ (leaving $\\alpha = 1/2$). Every such pair copies $\\Theta(m)$ items, so the amortized cost per operation would be $\\Theta(n)$ — the bound collapses. Halving only below $\\alpha = 1/4$ buys **hysteresis**: a halving lands near $\\alpha = 1/2$, and roughly a quarter of the slots' worth of further deletions must pass before the next halving, so expensive moves can never cluster.",
        detail: "The gap between the thresholds *is* the design: any policy whose expansion point and contraction point touch can be pumped; keeping them apart forces the adversary to spend cheap operations between expensive ones.",
      },
      {
        term: "The sawtooth of $\\alpha$",
        kind: "notation",
        statement: "Under doubling, $\\alpha = num/size$ sawtooths from $1/2$ (just after expansion) to $1$ (just before next expansion); with contraction at $1/4$ it never drops below $1/4$ in the steady state. The teeth are the expansions, the ramps the cheap inserts.",
        detail: "Reading $\\alpha$ diagnoses the table: $\\alpha \\approx 1$ means expand soon; $\\alpha \\approx 1/4$ means contract soon; $\\alpha < 1/4$ should not persist, or the hysteresis is broken.",
      },
    ],
    figures: [
      {
        caption: "The load factor α = num/size across 16 TABLE-INSERT operations followed by 15 TABLE-DELETE operations on a dynamic table. Insertions ramp α up to 1; each arrival triggers a doubling that resets α to just over 1/2 (ringed points at operations 1, 2, 3, 5, 9 — the tiny early tables double so fast that the first rings crowd together; op 1's ring is the initial allocation of a size-1 table). Deletions ramp α down; when one would push α below 1/4 the table halves and α jumps back toward 1/2 (dashed rings at operations 29 and 31). The guardrails at 1 and 1/4 leave a hysteresis band: after a doubling about $size/2$ insertions must pass before the next, and after a halving roughly a quarter of the slots' worth of deletions — which is exactly why both moves are amortized $O(1)$.",
        svg: '<svg viewBox="0 0 720 340" width="100%" role="img" aria-label="Load factor of a dynamic table across 16 inserts and 15 deletes, with expansions and contractions marked"><rect x="72" y="56" width="628" height="162" fill="currentColor" fill-opacity="0.05"/><line x1="72" y1="56" x2="700" y2="56" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4" opacity="0.55"/><line x1="72" y1="164" x2="700" y2="164" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4" opacity="0.55"/><line x1="72" y1="218" x2="700" y2="218" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4" opacity="0.55"/><line x1="72" y1="44" x2="72" y2="272" stroke="currentColor" stroke-width="1.5"/><line x1="72" y1="272" x2="700" y2="272" stroke="currentColor" stroke-width="1.5"/><text x="60" y="59" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">1</text><text x="60" y="167" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">1/2</text><text x="60" y="221" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor">1/4</text><text x="76" y="34" font-family="ui-sans-serif, system-ui" font-size="10.5" font-style="italic" fill="currentColor" opacity="0.85">load factor α</text><text x="237" y="34" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.85">16 TABLE-INSERT operations</text><text x="548" y="34" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.85">15 TABLE-DELETE operations</text><polyline points="91.4,56 110.8,56 130.2,110 149.6,56 169,137 188.4,110 207.8,83 227.2,56 246.6,150.5 266,137 285.4,123.5 304.8,110 324.2,96.5 343.6,83 363,69.5 382.4,56 401.8,69.5 421.2,83 440.6,96.5 460,110 479.4,123.5 498.8,137 518.2,150.5 537.6,164 557,177.5 576.4,191 595.8,204.5 615.2,218 634.6,191 654,218 673.4,218" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="91.4" cy="56" r="2.6" fill="currentColor"/><circle cx="110.8" cy="56" r="2.6" fill="currentColor"/><circle cx="130.2" cy="110" r="2.6" fill="currentColor"/><circle cx="149.6" cy="56" r="2.6" fill="currentColor"/><circle cx="169" cy="137" r="2.6" fill="currentColor"/><circle cx="188.4" cy="110" r="2.6" fill="currentColor"/><circle cx="207.8" cy="83" r="2.6" fill="currentColor"/><circle cx="227.2" cy="56" r="2.6" fill="currentColor"/><circle cx="246.6" cy="150.5" r="2.6" fill="currentColor"/><circle cx="266" cy="137" r="2.6" fill="currentColor"/><circle cx="285.4" cy="123.5" r="2.6" fill="currentColor"/><circle cx="304.8" cy="110" r="2.6" fill="currentColor"/><circle cx="324.2" cy="96.5" r="2.6" fill="currentColor"/><circle cx="343.6" cy="83" r="2.6" fill="currentColor"/><circle cx="363" cy="69.5" r="2.6" fill="currentColor"/><circle cx="382.4" cy="56" r="2.6" fill="currentColor"/><circle cx="401.8" cy="69.5" r="2.6" fill="currentColor"/><circle cx="421.2" cy="83" r="2.6" fill="currentColor"/><circle cx="440.6" cy="96.5" r="2.6" fill="currentColor"/><circle cx="460" cy="110" r="2.6" fill="currentColor"/><circle cx="479.4" cy="123.5" r="2.6" fill="currentColor"/><circle cx="498.8" cy="137" r="2.6" fill="currentColor"/><circle cx="518.2" cy="150.5" r="2.6" fill="currentColor"/><circle cx="537.6" cy="164" r="2.6" fill="currentColor"/><circle cx="557" cy="177.5" r="2.6" fill="currentColor"/><circle cx="576.4" cy="191" r="2.6" fill="currentColor"/><circle cx="595.8" cy="204.5" r="2.6" fill="currentColor"/><circle cx="615.2" cy="218" r="2.6" fill="currentColor"/><circle cx="634.6" cy="191" r="2.6" fill="currentColor"/><circle cx="654" cy="218" r="2.6" fill="currentColor"/><circle cx="673.4" cy="218" r="2.6" fill="currentColor"/><circle cx="91.4" cy="56" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="110.8" cy="56" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="130.2" cy="110" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="169" cy="137" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="246.6" cy="150.5" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="634.6" cy="191" r="7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 2"/><circle cx="673.4" cy="218" r="7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 2"/><line x1="246.6" y1="232" x2="246.6" y2="163" stroke="currentColor" stroke-width="1.2"/><polygon points="243,171 246.6,161 250.2,171" fill="currentColor"/><text x="246.6" y="248" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.9">expansion at op 9: copy 8, size 8 → 16</text><line x1="634.6" y1="236" x2="634.6" y2="204" stroke="currentColor" stroke-width="1.2"/><polygon points="631,212 634.6,202 638.2,212" fill="currentColor"/><text x="610" y="252" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.9">contraction at op 29: copy 3, size 16 → 8</text><line x1="91.4" y1="272" x2="91.4" y2="277" stroke="currentColor" stroke-width="1.2"/><line x1="227.2" y1="272" x2="227.2" y2="277" stroke="currentColor" stroke-width="1.2"/><line x1="382.4" y1="272" x2="382.4" y2="277" stroke="currentColor" stroke-width="1.2"/><line x1="537.6" y1="272" x2="537.6" y2="277" stroke="currentColor" stroke-width="1.2"/><line x1="673.4" y1="272" x2="673.4" y2="277" stroke="currentColor" stroke-width="1.2"/><text x="91.4" y="290" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">1</text><text x="227.2" y="290" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">8</text><text x="382.4" y="290" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">16</text><text x="537.6" y="290" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">24</text><text x="673.4" y="290" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">31</text><text x="386" y="306" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" font-style="italic" fill="currentColor" opacity="0.85">operation number</text><circle cx="150" cy="322" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="162" y="326" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">capacity doubled (ops 1, 2, 3, 5, 9)</text><circle cx="430" cy="322" r="6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 2"/><text x="442" y="326" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">capacity halved (ops 29, 31)</text><circle cx="614" cy="322" r="2.6" fill="currentColor"/><text x="624" y="326" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">α after each op</text></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Nine insertions into a doubling table",
        problem: "Insert 9 items into an empty dynamic table that allocates size 1 on the first insert and doubles whenever full. Record the actual cost of each insertion (1 when no expansion occurs; num + 1 when the table must double from num items) and check the total against the 3n bound.",
        steps: [
          { label: "Inserts 1–3", text: "Insert 1 allocates size 1: cost 1. Insert 2 finds 1/1 full — double to 2, copying 1 item: cost 2. Insert 3 finds 2/2 full — double to 4, copying 2: cost 3. Sizes so far: 1, 2, 4." },
          { label: "Insert 4", text: "$num = 3$, $size = 4$: three-quarters full, no expansion — cost 1." },
          { label: "Inserts 5–8", text: "Insert 5 hits 4/4 full — double to 8, copying 4 items: cost 5. Inserts 6, 7 and 8 land in spare slots at cost 1 each, and the table returns to $\\alpha = 1$." },
          { label: "Insert 9", text: "8/8 full — double to 16, copying 8 items: cost 9, the most expensive operation of the run." },
          { label: "Total", text: "Actual cost $= 1+2+3+1+5+1+1+1+9 = 24$. The copying happens at capacities $1, 2, 4, 8$: $1+2+4+8 = 2^4 - 1 = 15 \\le 2n - 1 = 17$, so the total is $n + 15 = 24 \\le 3n = 27$." },
        ],
        result: "Nine insertions cost 24 in total — under 3 per insertion on average — even though insertions 3, 5 and 9 individually cost 3, 5 and 9. The final table has size 16 and α = 9/16, primed for seven more cheap insertions.",
      },
      {
        title: "Thrashing at $\\alpha = 1/2$",
        problem: "Table size $8$, $num = 4$ ($\\alpha = 1/2$). Alternate insert then delete the same element $6$ times with halve-at-$1/2$ rule versus quarter rule.",
        steps: [
          { label: "Halve-at-half", text: "Insert: $num = 5$, $\\alpha = 5/8$, no expand. Delete: $num = 4$, $\\alpha = 1/2$: contract to $4$ ($4$ copies). Insert: expand to $8$ ($4$ copies). Each pair costs $\\Theta(n)$: $6$ pairs $= \\Theta(6n)$." },
          { label: "Quarter rule", text: "Delete to $num = 4$, $\\alpha = 1/2 > 1/4$: no contract. Insert/delete pair touches $O(1)$ cells each: $6$ pairs $= O(6)$." },
          { label: "Hysteresis", text: "Gap between $1$ (expand) and $1/4$ (contract) forces $\\Omega(n)$ operations between resizes; halve-at-$1/2$ allows resize every $2$ operations." },
          { label: "Bound", text: "Quarter rule: $O(1)$ amortized per operation; halve-at-half: $\\Theta(n)$ amortized in the adversarial alternation." },
        ],
        result: "Halve-at-$1/2$ thrashes at $\\Theta(n)$ per pair; the $1/4$ hysteresis restores $O(1)$ amortized.",
      },
    ],
    keyTakeaways: [
      "Doubling at α = 1 makes n insertions cost less than 3n total: copies happen at capacities 1, 2, 4, … and the geometric series stays below 2n.",
      "Halve only when α < 1/4; after every operation the nonempty table satisfies 1/4 ≤ α ≤ 1, with amortized cost at most 3 per insert and 2 per delete.",
      "The gap between thresholds is hysteresis: it forces Θ(size) cheap operations between consecutive expensive ones — which is the whole proof.",
    ],
    quiz: [
      {
        q: "TABLE-INSERT is called on a full table with size = m. What does it do, and what does that one insertion cost?",
        options: [
          "It grows the table by exactly one slot in place: cost Θ(1).",
          "It allocates a table of size 2m, copies the m stored items into it, then inserts: cost Θ(m).",
          "It allocates a table of size m + 1 and copies: cost Θ(m).",
          "It rejects the insertion until deletions free space: cost 0.",
        ],
        answer: 1,
        explanation: "Expansion allocates twice the capacity and copies everything — Θ(num) = Θ(m) work for that single operation, which is why per-operation worst-case analysis would report Θ(n).",
      },
      {
        q: "Across n insertions into an initially empty doubling table, how many items get copied in total?",
        options: [
          "at most $2n$ — copying happens only at capacities $1, 2, 4, \\ldots, 2^{\\lfloor \\lg n \\rfloor}$ and the geometric series sums below $2n$",
          "exactly $n \\lg n$ — each insertion copies half the table on average",
          "$\\Theta(n^2)$ — any insertion can copy the whole table",
          "at most $\\lg n$ — one item is copied per doubling",
        ],
        answer: 0,
        explanation: "Expansions fire at capacities $1, 2, 4, \\ldots, 2^{\\lfloor \\lg n \\rfloor}$, so the copies form a geometric series $\\sum_j 2^j < 2n$; adding the n insertions themselves gives a total below 3n.",
      },
      {
        q: "With the halve-below-1/4 rule, what does the table look like after every operation (while nonempty)?",
        options: [
          "$1/2 \\le \\alpha \\le 1$ — the table is always at least half full",
          "$1/4 \\le \\alpha \\le 1$ — the two thresholds leave a hysteresis band",
          "$1/4 \\le \\alpha \\le 1/2$ — the table stays sparse",
          "$\\alpha = 1/2$ exactly after every contraction",
        ],
        answer: 1,
        explanation: "Doubling happens at α = 1 (landing just above 1/2) and halving happens only below 1/4 (landing near 1/2 and rising); everything between is absorbed without resizing.",
      },
      {
        q: "What goes wrong if the table halves as soon as α drops below 1/2?",
        options: [
          "Deletion itself becomes too expensive to perform even once.",
          "The load factor could exceed 1 and overflow the slots.",
          "Halving would silently lose the items in the second half of the table.",
          "An adversary alternating delete and insert at the boundary makes each pair copy Θ(size) items, destroying the O(1) amortized bound.",
        ],
        answer: 3,
        explanation: "With expansion at 1 and contraction just below 1/2 the two thresholds touch: from α = 1/2 one delete halves and the next insert doubles — Θ(size) copies per pair. Halving only below 1/4 is the hysteresis that prevents this pumping.",
      },
      // PYQ-pattern — dynamic table amortized cost (rephrased, values changed)
      {
        q: "A dynamic table starts empty and doubles on full insertions. For $n$ INSERT operations, the total and amortized costs are:",
        options: ["$\\Theta(n^2)$ total, $\\Theta(n)$ amortized each", "$\\Theta(n)$ total, $O(1)$ amortized each", "$\\Theta(n\\lg n)$ total, $O(\\lg n)$ amortized each", "$\\Theta(1)$ worst case each"],
        answer: 1,
        explanation: "Step 1 — Given: empty start, expansion copies all items, cost $1$ per simple insert plus copy bursts $1, 2, 4, \\ldots$. Step 2 — Governing sum: bursts below $n$ total $1 + 2 + 4 + \\cdots < 2n$, so aggregate is below $3n$. Step 3 — Amortization: $\\frac{O(n)}{n} = O(1)$ per operation; potential $\\Phi = 2\\cdot num - size$ banks each insert to pay its future copy. Step 4 — Sanity check: load factor oscillates between $\\frac{1}{2}$ and $1$, bursts are exponentially rare, and halving on quarter-full keeps deletes cheap too. Step 5 — Distractor analysis: $\\Theta(n^2)$ charges every insert for a full copy, $n\\lg n$ invents a logarithm, and $O(1)$ worst-case denies the linear burst. Step 6 — Conclude: $\\Theta(n)$ total, $O(1)$ amortized.",
      },
    ],
  },
]
