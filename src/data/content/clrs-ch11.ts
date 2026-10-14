import type { SectionContent } from "../library"

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition (Cormen, Leiserson, Rivest
// & Stein, MIT Press 2009). Chapter 11: Hash Tables (Sections 11.1 – 11.5).
// Master study content.
// ============================================================================

export const clrsCh11Content: SectionContent[] = [
  // ---------------------------------------------------------------- 11.1
  {
    sectionId: "clrs-ch11-s1",
    readingTime: 4,
    intro: "A dictionary supports INSERT, SEARCH and DELETE, and the fastest possible dictionary is an array indexed directly by key. When the universe of keys is small this is exactly what CLRS does: one array slot per possible key, each operation touching exactly one slot. The section also explains why this luxury usually fails — and what we will trade away in the rest of the chapter to get the space cost down.",
    objectives: [
      "Define a direct-address table and argue that each dictionary operation costs $\\Theta(1)$",
      "Explain the pointer-to-satellite-data design and why deletion stays cheap",
      "Identify exactly when direct addressing becomes impractical"
    ],
    concepts: [
      {
        term: "Direct-address table",
        kind: "definition",
        statement: "Let the universe of keys be $U = \\{0, 1, \\ldots, m-1\\}$. A **direct-address table** is an array $T[0 \\ldots m-1]$ with **one slot for every possible key**: slot $k$ represents key $k$, and each slot holds either a pointer to the element with key $k$ or **NIL** when no element with that key is stored.",
        detail: "The table is a perfect simulation of the key space — searching is array indexing, so the hash function is the identity map. Space is $\\Theta(|U|)$."
      },
      {
        term: "The dictionary operations",
        kind: "method",
        statement: "With satellite data stored in objects pointed to by the slots: **DIRECT-ADDRESS-SEARCH**$(T, k)$ returns $T[k]$; **DIRECT-ADDRESS-INSERT**$(T, x)$ sets $T[x.key] = x$; **DIRECT-ADDRESS-DELETE**$(T, x)$ sets $T[x.key] =$ NIL. Each takes $\\Theta(1)$ time.",
        detail: "Compare a stack or queue, where only privileged positions are accessible — here every key gives immediate access."
      },
      {
        term: "Why slots hold pointers",
        kind: "insight",
        statement: "Each slot stores a **pointer to the element**, and the element itself carries its key in the field $x.key$. Deleting then costs $\\Theta(1)$: given a pointer to $x$ we read $x.key$ and NIL out the slot, with no searching and no moving of data.",
        detail: "If objects were stored directly in the slots, deletion would need to know the slot index — the key field inside the object serves exactly that purpose."
      },
      {
        term: "When direct addressing fails",
        kind: "insight",
        statement: "Direct addressing needs $\\Theta(|U|)$ space even when the number of keys actually stored, $n$, is tiny. It is hopeless when the universe is astronomical — all 64-bit integers, all character strings — or when $n \\ll |U|$ so that almost every slot is wasted.",
        detail: "A hash table shrinks the array to $m \\approx n$ slots and maps keys through a hash function $h : U \\to \\{0, \\ldots, m-1\\}$; the price, studied next, is **collisions**."
      },
      {
        term: "Universe size versus table size",
        kind: "notation",
        statement: "Let $|U|$ be the universe of possible keys and $m$ the table slots. Direct addressing sets $m = |U|$: $\\Theta(|U|)$ space for $\\Theta(1)$ operations. Hashing (Sections 11.2-11.4) keeps $m = \\Theta(n)$ for the $n$ keys actually stored, trading worst-case time for space.",
        detail: "When $|U|$ is $2^{64}$ (all 64-bit integers) direct addressing is impossible; when $|U|$ is employee IDs below $10^4$ it is ideal. The rest of the chapter is the space-time negotiation between these poles.",
      },
    ],
    figures: [
      {
        caption: "A direct-address table with $m = |U| = 9$ slots. Slot $k$ either points to the record for key $k$ or is empty — SEARCH, INSERT and DELETE each touch exactly one slot in $\\Theta(1)$, but the array itself costs $\\Theta(m)$ space regardless of how few keys are stored.",
        svg: '<svg viewBox="0 0 720 334" width="100%" role="img" aria-label="A direct-address table: nine slots, three of which point to satellite records"><text x="360" y="24" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.85">universe U = {0, 1, …, 8} — slot k holds the record for key k</text><rect x="140" y="58" width="70" height="24" rx="3" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"/><text x="175" y="74.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.45">nil</text><rect x="140" y="87" width="70" height="24" rx="3" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"/><text x="175" y="103.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.45">nil</text><rect x="140" y="116" width="70" height="24" rx="3" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"/><text x="175" y="132.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">2</text><line x1="212" y1="128" x2="310" y2="128" stroke="currentColor" stroke-width="1.3"/><polygon points="320,128 308,123.5 308,132.5" fill="currentColor"/><rect x="324" y="116" width="240" height="24" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.2"/><text x="444" y="132" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">record for key 2</text><rect x="140" y="145" width="70" height="24" rx="3" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"/><text x="175" y="161.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.45">nil</text><rect x="140" y="174" width="70" height="24" rx="3" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"/><text x="175" y="190.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.45">nil</text><rect x="140" y="203" width="70" height="24" rx="3" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"/><text x="175" y="219.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">5</text><line x1="212" y1="215" x2="310" y2="215" stroke="currentColor" stroke-width="1.3"/><polygon points="320,215 308,210.5 308,219.5" fill="currentColor"/><rect x="324" y="203" width="240" height="24" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.2"/><text x="444" y="219" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">record for key 5</text><rect x="140" y="232" width="70" height="24" rx="3" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"/><text x="175" y="248.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.45">nil</text><rect x="140" y="261" width="70" height="24" rx="3" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"/><text x="175" y="277.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">7</text><line x1="212" y1="273" x2="310" y2="273" stroke="currentColor" stroke-width="1.3"/><polygon points="320,273 308,268.5 308,277.5" fill="currentColor"/><rect x="324" y="261" width="240" height="24" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.2"/><text x="444" y="277" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">record for key 7</text><rect x="140" y="290" width="70" height="24" rx="3" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"/><text x="175" y="306.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.45">nil</text><text x="266" y="112" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.6">pointer</text><text x="360" y="326" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.8">each operation touches exactly one slot — Θ(1) time, Θ(m) space</text></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "A tiny payroll keyed by employee id",
        problem: "Employee ids are the integers 0 through 99 and only keys 2, 5 and 7 are in use. Give the table, the three operations, and the space bill.",
        steps: [
          { label: "Step 1: Size the table", text: "The universe has $m = 100$ keys, so allocate $T[0 \\ldots 99]$ — one slot per id, 100 slots regardless of how many employees exist." },
          { label: "Step 2: Run the operations", text: "Insert Alice with id 2: set $T[2] \\to$ Alice. Search id 5: read $T[5]$ directly — one array access, no comparisons. Delete id 7: given the object, set $T[7] =$ NIL." },
          { label: "Step 3: Count the cost", text: "Each operation is a single array access: $\\Theta(1)$. The array itself is $\\Theta(100)$ space even though only 3 keys are live — a 97% waste rate." },
          { label: "Step 4: Diagnose", text: "Now suppose ids become 9-digit social-security numbers: $|U| = 10^9$ slots for a handful of employees is absurd — this is exactly the failure mode that forces hashing." }
        ],
        result: "Direct addressing gives perfect $\\Theta(1)$ operations whenever $|U|$ is small, but its space is $\\Theta(|U|)$, not $\\Theta(n)$."
      },
      {
        title: "When the universe is huge",
        problem: "Keys are 9-digit Social Security numbers ($|U| = 10^9$) but only $n = 1000$ are stored. Compare direct addressing with chaining.",
        steps: [
          { label: "Direct cost", text: "Table of $10^9$ slots: gigabytes of pointers for $1000$ keys, $\\Theta(|U|) = \\Theta(10^9)$ space, $\\Theta(1)$ time." },
          { label: "Chaining cost", text: "Table of $m = 1000$ slots with chains: $\\Theta(n+m) = \\Theta(2000)$ space, expected $\\Theta(1+\\alpha) = \\Theta(2)$ search with $\\alpha = 1$." },
          { label: "Verdict", text: "Direct addressing wastes $10^6\\times$ the space for identical $O(1)$ time: hashing wins whenever $|U| \\gg n$." },
          { label: "When direct wins", text: "If instead $|U| = 2000$ and $n = 1000$, direct addressing costs $2000$ slots versus $2000$ for chaining with no hash computation: direct wins." },
        ],
        result: "Direct addressing is $\\Theta(|U|)$ space; hashing is $\\Theta(n)$ space: choose by the ratio $|U|/n$.",
      },
    ],
    keyTakeaways: [
      "A direct-address table dedicates one array slot to every possible key: SEARCH, INSERT and DELETE are all $\\Theta(1)$ by array indexing.",
      "Slots hold pointers to elements, and each element stores its own key so that deletion from an object pointer stays $\\Theta(1)$.",
      "The scheme needs $\\Theta(|U|)$ space — untenable for large or sparsely used universes; hash tables cut space to $\\Theta(m)$ with $m \\approx n$ at the price of collisions."
    ],
    quiz: [
      {
        q: "A direct-address table uses an array T[0 … m−1]. What must m equal?",
        options: ["The number of keys actually stored, n", "The size of the key universe, m = |U|", "The first prime larger than n", "Any value with m ≥ √n"],
        answer: 1,
        explanation: "One slot per possible key: m = |U|. The number n of stored keys is irrelevant to the array size — that is both the scheme's simplicity and its weakness."
      },
      {
        q: "Why does each element x stored in a direct-address table carry its own key in x.key?",
        options: [
          "So SEARCH can verify the key was found",
          "So DELETE can NIL the right slot when handed only a pointer to x",
          "To keep the keys sorted for inorder traversal",
          "To support doubling the table when it gets full"
        ],
        answer: 1,
        explanation: "Deletion receives a pointer to x; without x.key it would not know which slot to empty. With it, T[x.key] = NIL is O(1)."
      },
      {
        q: "Which scenario makes direct addressing the WRONG choice?",
        options: [
          "Universe U = {0, …, 999} with 900 keys in use",
          "Universe U = {0, …, 999} with 10 keys in use",
          "Keys are exactly the ASCII codes 0–127",
          "A fixed set of 32 interrupt vectors"
        ],
        answer: 1,
        explanation: "10 keys out of 1000 slots wastes 99% of the space — n ≪ |U|. Direct addressing is attractive only when the universe is small and densely used."
      },
      {
        q: "In a direct-address table, what is the worst-case cost of an unsuccessful search?",
        options: ["Θ(n), scanning all stored keys", "Θ(log n) by binary search", "Θ(1) — one array read returns NIL", "Θ(|U|)"],
        answer: 2,
        explanation: "Search reads exactly one slot T[k]; if it is NIL the key is absent. Success or failure never costs more than one array access."
      }
    ]
  },

  // ---------------------------------------------------------------- 11.2
  {
    sectionId: "clrs-ch11-s2",
    readingTime: 6,
    intro: "Shrinking the array from |U| slots to m slots means many keys share a slot — a collision. Chaining resolves collisions by letting each slot head a linked list of all the elements that hash to it. The section's payoff is a clean average-case analysis: under a mild uniformity assumption, a search costs $\\Theta(1 + \\alpha)$ where $\\alpha = n/m$ is the load factor.",
    objectives: [
      "Describe collision resolution by chaining and implement the three dictionary operations on it",
      "Define the load factor α and its role in the average-case analysis",
      "State and interpret the Θ(1 + α) expected-search bound under simple uniform hashing"
    ],
    concepts: [
      {
        term: "Hash table with chaining",
        kind: "definition",
        statement: "A **hash table** uses $m$ slots indexed $0 \\ldots m-1$ and a **hash function** $h : U \\to \\{0, \\ldots, m-1\\}$. With **chaining** (also called separate chaining), slot $j$ heads a linked list containing every element whose key hashes to $j$; we say keys with $h(k) = h(k')$ for $k \\ne k'$ **collide**.",
        detail: "CLRS uses doubly linked lists so that deletion, given a pointer to the element, is $\\Theta(1)$ without searching the chain."
      },
      {
        term: "The load factor",
        kind: "notation",
        statement: "For a hash table with $n$ stored elements and $m$ slots, the **load factor** is $\\alpha = n/m$ — the average number of elements per chain. With chaining, $\\alpha$ may exceed 1 (chains just get longer); under uniform hashing each chain has expected length exactly $\\alpha$.",
        detail: "The load factor, not n or m alone, is what governs average performance: keeping $n = O(m)$ keeps $\\alpha = O(1)$."
      },
      {
        term: "Chaining operations",
        kind: "method",
        statement: "**INSERT** splices the new element at the **head** of its chain — $O(1)$ without even comparing keys. **SEARCH** hashes the key, then scans one chain. **DELETE**, given a pointer, unlinks from a doubly linked list in $O(1)$. Worst case (all keys collide) search degenerates to $\\Theta(n)$.",
        detail: "Inserting at the head is what makes insertion O(1): no traversal of the chain is needed to find the splice point."
      },
      {
        term: "Simple uniform hashing",
        kind: "definition",
        statement: "The analysis assumes **simple uniform hashing**: each key is equally likely to hash to any of the $m$ slots, **independently** of where every other key hashes. It is an idealization — no practical hash function achieves it — but it is the yardstick against which real hash functions are judged.",
        detail: "The assumption is about the distribution of keys over slots, not about the keys' own values."
      },
      {
        term: "Expected search cost",
        kind: "theorem",
        statement: "Under simple uniform hashing, an **unsuccessful** search examines an expected $\\alpha$ elements, and a **successful** search an expected $1 + \\frac{\\alpha}{2} - \\frac{\\alpha}{2n}$ elements; both are $\\Theta(1 + \\alpha)$. Thus with $n = O(m)$, average search is $O(1)$ — independent of the number of keys stored.",
        detail: "For a successful search the target's chain holds it ahead of the keys inserted after it, on average halfway down — hence the α/2 instead of α."
      }
    ],
    figures: [
      {
        caption: "Chaining with $h(k) = k \\bmod 9$: inserting $5, 28, 19, 15, 20, 33, 12, 17, 10$ gives $n = m = 9$, so $\\alpha = 1$ and the average chain holds one key — but keys $10, 19, 28$ all satisfy $k \\equiv 1 \\pmod 9$ and pile into slot 1. INSERT splices at the head; SEARCH walks a single chain.",
        svg: '<svg viewBox="0 0 720 380" width="100%" role="img" aria-label="A hash table with nine slots, collisions resolved by linked chains"><text x="360" y="22" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.85">h(k) = k mod 9 · m = 9 slots · n = 9 keys · load factor α = n/m = 1</text><rect x="140" y="42" width="58" height="26" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="169" y="59.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">T[0]</text><circle cx="262" cy="55" r="3.5" fill="currentColor" opacity="0.55"/><text x="272" y="59" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.55">nil</text><rect x="140" y="80" width="58" height="26" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="169" y="97.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">T[1]</text><line x1="200" y1="93" x2="232" y2="93" stroke="currentColor" stroke-width="1.3"/><polygon points="240,93 230,88.5 230,97.5" fill="currentColor"/><rect x="240" y="80" width="54" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="267" y="97.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">10</text><line x1="296" y1="93" x2="300" y2="93" stroke="currentColor" stroke-width="1.3"/><polygon points="306,93 296,88.5 296,97.5" fill="currentColor"/><rect x="306" y="80" width="54" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="333" y="97.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">19</text><line x1="362" y1="93" x2="364" y2="93" stroke="currentColor" stroke-width="1.3"/><polygon points="372,93 362,88.5 362,97.5" fill="currentColor"/><rect x="372" y="80" width="54" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="399" y="97.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">28</text><circle cx="448" cy="93" r="3.5" fill="currentColor" opacity="0.55"/><text x="458" y="97" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.55">nil</text><rect x="140" y="118" width="58" height="26" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="169" y="135.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">T[2]</text><line x1="200" y1="131" x2="232" y2="131" stroke="currentColor" stroke-width="1.3"/><polygon points="240,131 230,126.5 230,135.5" fill="currentColor"/><rect x="240" y="118" width="54" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="267" y="135.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">20</text><circle cx="318" cy="131" r="3.5" fill="currentColor" opacity="0.55"/><text x="328" y="135" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.55">nil</text><rect x="140" y="156" width="58" height="26" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="169" y="173.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">T[3]</text><line x1="200" y1="169" x2="232" y2="169" stroke="currentColor" stroke-width="1.3"/><polygon points="240,169 230,164.5 230,173.5" fill="currentColor"/><rect x="240" y="156" width="54" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="267" y="173.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">12</text><circle cx="318" cy="169" r="3.5" fill="currentColor" opacity="0.55"/><text x="328" y="173" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.55">nil</text><rect x="140" y="194" width="58" height="26" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="169" y="211.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">T[4]</text><circle cx="262" cy="207" r="3.5" fill="currentColor" opacity="0.55"/><text x="272" y="211" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.55">nil</text><rect x="140" y="232" width="58" height="26" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="169" y="249.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">T[5]</text><line x1="200" y1="245" x2="232" y2="245" stroke="currentColor" stroke-width="1.3"/><polygon points="240,245 230,240.5 230,249.5" fill="currentColor"/><rect x="240" y="232" width="54" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="267" y="249.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">5</text><circle cx="318" cy="245" r="3.5" fill="currentColor" opacity="0.55"/><text x="328" y="249" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.55">nil</text><rect x="140" y="270" width="58" height="26" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="169" y="287.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">T[6]</text><line x1="200" y1="283" x2="232" y2="283" stroke="currentColor" stroke-width="1.3"/><polygon points="240,283 230,278.5 230,287.5" fill="currentColor"/><rect x="240" y="270" width="54" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="267" y="287.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">33</text><line x1="296" y1="283" x2="298" y2="283" stroke="currentColor" stroke-width="1.3"/><polygon points="306,283 296,278.5 296,287.5" fill="currentColor"/><rect x="306" y="270" width="54" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="333" y="287.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">15</text><circle cx="384" cy="283" r="3.5" fill="currentColor" opacity="0.55"/><text x="394" y="287" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.55">nil</text><rect x="140" y="308" width="58" height="26" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="169" y="325.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">T[7]</text><circle cx="262" cy="321" r="3.5" fill="currentColor" opacity="0.55"/><text x="272" y="325" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.55">nil</text><rect x="140" y="346" width="58" height="26" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="169" y="363.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">T[8]</text><line x1="200" y1="359" x2="232" y2="359" stroke="currentColor" stroke-width="1.3"/><polygon points="240,359 230,354.5 230,363.5" fill="currentColor"/><rect x="240" y="346" width="54" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="267" y="363.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="600" fill="currentColor">17</text><circle cx="318" cy="359" r="3.5" fill="currentColor" opacity="0.55"/><text x="328" y="363" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.55">nil</text><text x="508" y="84" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">INSERT splices at the head — O(1)</text><text x="508" y="100" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">longest chain: 3 keys</text><text x="508" y="274" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">SEARCH scans one chain:</text><text x="508" y="290" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">Θ(1 + α) expected</text><text x="508" y="352" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.8">α = 1 → average chain: 1</text></svg>',
        afterConcept: 5,
      }
    ],
    examples: [
      {
        title: "Searching, inserting and measuring the table of Figure 11.3",
        problem: "With $m = 9$, $h(k) = k \\bmod 9$, and the nine keys $5, 28, 19, 15, 20, 33, 12, 17, 10$ inserted in that order, trace a successful search for 19, an unsuccessful search for 71, and the insertion of 100.",
        steps: [
          { label: "Step 1: The chains", text: "Hashing each key: $5 \\to 5$, $28 \\to 1$, $19 \\to 1$, $15 \\to 6$, $20 \\to 2$, $33 \\to 6$, $12 \\to 3$, $17 \\to 8$, $10 \\to 1$. Slot 1 holds $\\{10, 19, 28\\}$ and slot 6 holds $\\{33, 15\\}$; the other five occupied slots hold one key each." },
          { label: "Step 2: Successful search for 19", text: "$h(19) = 19 - 2 \\cdot 9 = 1$, so scan slot 1's list: compare against the head 10 (miss), then 19 (hit) — **2 elements examined**." },
          { label: "Step 3: Unsuccessful search for 71", text: "$h(71) = 71 - 7 \\cdot 9 = 8$, so scan slot 8's list: one element, 17, which is not 71 — 1 element examined and the search fails." },
          { label: "Step 4: Insert 100 and re-measure", text: "$h(100) = 100 - 11 \\cdot 9 = 1$, so 100 becomes the new head of slot 1's list. Now $n = 10$ and $\\alpha = 10/9 \\approx 1.11$: the theory predicts about 1.11 examined elements for a future unsuccessful search." }
        ],
        result: "Chaining keeps every operation localized to one list; with α held near 1 the average search inspects only a couple of elements."
      },
      {
        title: "Load factor above one",
        problem: "Insert $n = 12$ keys into $m = 5$ slots with chaining under simple uniform hashing. What is the expected search cost?",
        steps: [
          { label: "Load", text: "$\\alpha = n/m = 12/5 = 2.4$: average chain length $2.4$." },
          { label: "Hit", text: "Successful search: $\\Theta(1+\\alpha) = \\Theta(3.4)$ expected touches: one hash plus half the chain on average plus the target." },
          { label: "Miss", text: "Unsuccessful search: $\\Theta(\\alpha) = \\Theta(2.4)$: must scan the whole hashed chain to conclude absence." },
          { label: "Fix", text: "Rehash to $m = 12$ ($\\alpha = 1$): expected cost drops to $\\Theta(2)$. Chaining degrades gracefully ($\\Theta(1+\\alpha)$) rather than failing when $\\alpha > 1$." },
        ],
        result: "Expected $\\approx 3.4$ touches at $\\alpha = 2.4$; chaining stays linear in $\\alpha$, so doubling the table halves the excess.",
      },
    ],
    keyTakeaways: [
      "Chaining puts every element with $h(k) = j$ into a linked list headed at slot $j$; insertion at the head is $O(1)$ and deletion is $O(1)$ given a pointer.",
      "Under simple uniform hashing the expected search cost is $\\Theta(1 + \\alpha)$ with $\\alpha = n/m$ — keeping $n = O(m)$ buys average $O(1)$ regardless of how many keys are stored.",
      "The worst case is still $\\Theta(n)$: if every key hashes to one slot, the table degenerates into a single linked list."
    ],
    quiz: [
      {
        q: "A hash table with chaining has n = 1000 keys in m = 100 slots. Assuming simple uniform hashing, roughly how many elements does an unsuccessful search examine?",
        options: ["1000, because every chain must be checked", "10, the load factor α = n/m", "1, because hashing is constant time", "100, the number of slots"],
        answer: 1,
        explanation: "The search hashes once, then scans the one chain for that slot, whose expected length is α = 1000/100 = 10. Expected cost is Θ(1 + α) ≈ 10."
      },
      {
        q: "Why does CHAINED-HASH-INSERT splice the new element at the head of its chain?",
        options: [
          "To keep each chain sorted by key",
          "So insertion runs in O(1) without scanning the chain at all",
          "Because the tail pointer is unavailable",
          "To reduce the load factor"
        ],
        answer: 1,
        explanation: "Head insertion needs only the slot pointer — no traversal, no comparisons. Sorting chains by key would speed searches slightly but would make insertion Θ(α)."
      },
      {
        q: "What exactly does the simple uniform hashing assumption state?",
        options: [
          "Every slot receives the same number of keys",
          "Each key hashes to any of the m slots with probability 1/m, independently of all other keys",
          "The hash function is chosen randomly at each lookup",
          "Keys are uniformly distributed integers"
        ],
        answer: 1,
        explanation: "It is an independence-and-uniformity assumption about where keys land — the idealization that makes E[chain length] = α exact and that real hash functions only approximate."
      },
      {
        q: "Under simple uniform hashing with n = 2m (α = 2), the expected number of elements examined in a successful search is closest to:",
        options: ["2", "1 + α/2 − α/2n ≈ 2", "1 + α = 3", "α² = 4"],
        answer: 1,
        explanation: "The successful-search expectation is 1 + α/2 − α/(2n) = 1 + 1 − 1/n ≈ 2: on average the target sits halfway down its chain of α ≈ 2 elements."
      },
      // PYQ-pattern: GATE 2016 — chaining load factor (rephrased, values changed)
      {
        q: "A hash table with chaining has $m = 10$ slots holding $n = 30$ keys under simple uniform hashing. The average number of keys examined in an unsuccessful search is closest to:",
        options: ["3", "1", "10", "30"],
        answer: 0,
        explanation: "Step 1 — Given: $m = 10$, $n = 30$, chaining, simple uniform hashing. Step 2 — Governing quantity: load factor $\\alpha = \\frac{n}{m}$, and an unsuccessful search scans the whole hashed chain, expected length $\\alpha$. Step 3 — Arithmetic: $\\alpha = \\frac{30}{10} = 3$, so about $3$ keys are examined. Step 4 — Sanity check: $\\Theta(1 + \\alpha)$ stays constant while $\\alpha$ is bounded, doubling the table would halve the cost, and the bound needs no assumption beyond uniformity. Step 5 — Distractor analysis: $1$ suits an empty table, $10$ quotes the slot count, and $30$ scans every key as in a list. Step 6 — Conclude: about $3$ keys examined.",
      },
    ]
  },

  // ---------------------------------------------------------------- 11.3
  {
    sectionId: "clrs-ch11-s3",
    readingTime: 7,
    intro: "The Θ(1 + α) analysis presumed keys scatter uniformly — this section is about actually achieving that. CLRS first insists on the interpretation of keys as natural numbers, then gives two workhorse methods (division and multiplication), and finally universal hashing: choose the hash function at random from a family, so that no adversary can engineer collisions against you.",
    objectives: [
      "Interpret arbitrary keys as natural numbers and apply the division and multiplication methods by hand",
      "Explain why the modulus in the division method should be prime and far from a power of 2",
      "Define a universal family of hash functions and explain what randomness buys against adversarial inputs",
    ],
    concepts: [
      {
        term: "Keys as natural numbers",
        kind: "notation",
        statement: "Every hash-function discussion in CLRS assumes keys are **natural numbers**: any data — a string, a record, an IP address — is first interpreted as an integer, typically by radix conversion. E.g. the string “pt” in ASCII is $112 \\cdot 128 + 116 = 14452$ when read base 128.",
        detail: "The interpretation only has to be injective; any consistent encoding works."
      },
      {
        term: "The division method",
        kind: "method",
        statement: "$h(k) = k \\bmod m$. **Choose $m$ to be a prime not too close to a power of 2.** If $m = 2^r$ only the low $r$ bits of the key survive, so key patterns that repeat in the low bits collide catastrophically.",
        detail: "The method is one division — fast on most hardware — but the quality depends entirely on the modulus, since h(k) is just k's remainder."
      },
      {
        term: "The multiplication method",
        kind: "method",
        statement: "$h(k) = \\lfloor m \\,(kA \\bmod 1) \\rfloor$ where $0 < A < 1$ and $kA \\bmod 1$ is the fractional part of $kA$. The value of $m$ is **not critical** (powers of 2 work well — extract the high bits of $k \\cdot A \\cdot 2^w$), and Knuth recommends $A \\approx (\\sqrt{5} - 1)/2 \\approx 0.618$.",
        detail: "The golden-ratio multiplier spreads consecutive keys: the slot index is essentially the leading bits of the fractional part of kA."
      },
      {
        term: "Universal hashing",
        kind: "definition",
        statement: "A family $\\mathcal{H}$ of hash functions $U \\to \\{0, \\ldots, m-1\\}$ is **universal** if for every pair of distinct keys $k \\ne l$, $\\Pr_{h \\in \\mathcal{H}}[h(k) = h(l)] \\le 1/m$. At run time we **choose $h$ randomly from the family once**, then use it for all operations.",
        detail: "Motivation: for any fixed deterministic h there is a bad key set that collides wildly; a random choice means the adversary cannot know which h to aim at, and any n keys get expected chain behavior α."
      },
      {
        term: "The universal class of CLRS",
        kind: "theorem",
        statement: "Pick a prime $p$ with $p > |U|$ and define $h_{a,b}(k) = ((ak + b) \\bmod p) \\bmod m$ with $a \\in \\{1, \\ldots, p-1\\}$, $b \\in \\{0, \\ldots, p-1\\}$. The family $\\mathcal{H}_{p,m} = \\{h_{a,b}\\}$ of $p(p-1)$ functions is **universal**.",
        detail: "Proof idea: for fixed $k \\ne l$, the values $r = (ak+b) \\bmod p$ and $s = (al+b) \\bmod p$ are distinct (as $a \\not\\equiv 0$), and each pair $r \\ne s$ arises from exactly one choice of $(a,b)$; at most a $1/m$ fraction of the distinct pairs satisfies $r \\equiv s \\pmod m$."
      }
    ],
    examples: [
      {
        title: "Division method: why m = 2^r is a trap",
        problem: "Hash the keys $4, 16, 28, 40, 52$ with the division method using $m = 12$ and then $m = 13$. Compare the collision behavior.",
        steps: [
          { label: "Step 1: Try m = 12", text: "Every key here is $\\equiv 4 \\pmod{12}$: $4 \\bmod 12 = 4$, $16 \\bmod 12 = 4$, $28 \\bmod 12 = 4$, $40 \\bmod 12 = 4$, $52 \\bmod 12 = 4$. All five keys land in slot 4 — one chain of length 5." },
          { label: "Step 2: Diagnose", text: "The keys are multiples of 4 spaced 12 apart; because 12 shares the factor 4 with the key pattern, the residues collide. With $m = 2^r$ the same thing happens whenever keys differ only in bits above the low r." },
          { label: "Step 3: Switch to the prime m = 13", text: "$4 \\bmod 13 = 4$, $16 \\bmod 13 = 3$, $28 \\bmod 13 = 2$, $40 \\bmod 13 = 1$, $52 \\bmod 13 = 0$ — five distinct slots, no collisions at all." },
          { label: "Step 4: The rule", text: "A prime modulus shares no structure with typical key patterns (powers of 2, multiples of common bases), which is exactly why CLRS demands prime $m$ not close to a power of 2." }
        ],
        result: "m = 12 piles all five keys into one chain; m = 13 spreads them perfectly. The modulus is the whole game in the division method."
      },
      {
        title: "Multiplication method with the golden ratio",
        problem: "Using $A = 0.6180339\\ldots$ (so that $A = (\\sqrt{5}-1)/2$) and $m = 8$, hash the consecutive keys $k = 61, 62, 63$.",
        steps: [
          { label: "Step 1: k = 61", text: "$61 \\times 0.6180339 = 37.7000\\ldots$, so $kA \\bmod 1 = 0.7000\\ldots$ and $h(61) = \\lfloor 8 \\times 0.7000 \\rfloor = \\lfloor 5.60 \\rfloor = 5$." },
          { label: "Step 2: k = 62", text: "$62 \\times 0.6180339 = 38.3181\\ldots$, fractional part $0.3181\\ldots$, and $h(62) = \\lfloor 8 \\times 0.3181 \\rfloor = \\lfloor 2.54 \\rfloor = 2$." },
          { label: "Step 3: k = 63", text: "$63 \\times 0.6180339 = 38.9361\\ldots$, fractional part $0.9361\\ldots$, and $h(63) = \\lfloor 8 \\times 0.9361 \\rfloor = \\lfloor 7.49 \\rfloor = 7$." },
          { label: "Step 4: Interpret", text: "Three keys that differ by 1 map to slots 5, 2 and 7 — nowhere near each other. The fractional parts of multiples of the golden ratio are famously well spread, which is precisely the property Knuth exploited." }
        ],
        result: "Consecutive keys scatter across the table — and since only the fractional part matters, m can be any convenient value, including a power of 2."
      }
    ],
    keyTakeaways: [
      "Interpret every key as a natural number first; then the division method $h(k) = k \\bmod m$ wants $m$ prime and away from powers of 2, while the multiplication method $h(k) = \\lfloor m(kA \\bmod 1)\\rfloor$ with $A \\approx 0.618$ is insensitive to $m$.",
      "Universal hashing randomizes the function itself: drawing $h_{a,b}(k) = ((ak+b) \\bmod p) \\bmod m$ from the CLRS class guarantees $\\Pr[h(k) = h(l)] \\le 1/m$ for every distinct pair.",
      "Randomizing the hash function converts adversarial inputs into average-case inputs — the same defensive move as randomizing quicksort's pivot."
    ],
    quiz: [
      {
        q: "In the division method h(k) = k mod m, why is m = 2^r a poor choice?",
        options: [
          "Modulo a power of 2 is too slow to compute",
          "h(k) then depends only on the low r bits of k, so keys sharing those bits collide",
          "Powers of 2 make the load factor exceed 1",
          "It forces the table to have exactly r slots"
        ],
        answer: 1,
        explanation: "k mod 2^r discards everything but the low r bits. Real keys (addresses, multiples of common bases) often repeat low-bit patterns, which then pile into a few slots."
      },
      {
        q: "With A = 0.618 and m = 8, the multiplication method gives h(100) = ⌊8 · frac(61.8)⌋ = ?",
        options: ["1", "4", "6", "0"],
        answer: 2,
        explanation: "100 × 0.618 = 61.8; the fractional part is 0.8, and 8 × 0.8 = 6.4, whose floor is 6."
      },
      {
        q: "A family H of hash functions is universal precisely when:",
        options: [
          "Every h in H distributes every key set uniformly",
          "For all k ≠ l, the fraction of functions h in H with h(k) = h(l) is at most 1/m",
          "Each h in H is a bijection from U to the m slots",
          "H contains at least m distinct functions"
        ],
        answer: 1,
        explanation: "Universality is a pairwise collision guarantee over the random choice of h: any two fixed distinct keys collide with probability at most 1/m — one function chosen from the family once does the whole job."
      },
      {
        q: "In the CLRS universal family h_ab(k) = ((ak + b) mod p) mod m, what is required of the parameters?",
        options: [
          "p any integer larger than m",
          "p a prime larger than |U|, with a ≠ 0 mod p and b arbitrary",
          "a = b, both prime",
          "p a prime smaller than m so the table fits"
        ],
        answer: 1,
        explanation: "p > |U| keeps distinct keys distinct mod p; a ≠ 0 (mod p) makes the inner map a bijection; b shifts freely. These three facts drive the ≤ 1/m collision probability."
      }
    ]
  },

  // ---------------------------------------------------------------- 11.4
  {
    sectionId: "clrs-ch11-s4",
    readingTime: 7,
    intro: "Open addressing abolishes the chains: all elements live in the table itself, so a slot holds a key, not a pointer. Searching for a key now means following a computed probe sequence through the slots until the key or an empty slot turns up. The design question is what those probe sequences look like — and the section ends with the one real weakness: deletion.",
    objectives: [
      "Define open addressing, the probe-sequence requirement, and the α ≤ 1 constraint",
      "Compare linear probing, quadratic probing and double hashing and their clustering pathologies",
      "Apply the expected-probe bounds 1/(1 − α) and (1/α) ln(1/(1 − α)) and explain the deletion problem"
    ],
    concepts: [
      {
        term: "Open addressing",
        kind: "definition",
        statement: "In **open addressing** every element is stored **in a slot of the table itself** — no pointers, no lists — so the table holds at most $m$ elements and the load factor satisfies $\\alpha = n/m \\le 1$. The hash function is extended to a **probe sequence** $h : U \\times \\{0, \\ldots, m-1\\} \\to \\{0, \\ldots, m-1\\}$: for key $k$ the algorithm tries $h(k, 0), h(k, 1), h(k, 2), \\ldots$ in order.",
        detail: "HASH-INSERT probes until finding an empty slot and deposits the key there; HASH-SEARCH probes until finding the key or an empty slot; a full m-slot search that never hits an empty slot means the table is full."
      },
      {
        term: "Uniform hashing assumption and probe bounds",
        kind: "theorem",
        statement: "Assume **uniform hashing**: each key's probe sequence is equally likely to be any of the $m!$ permutations of the slots. Then with load factor $\\alpha < 1$, an **unsuccessful** search takes at most $\\frac{1}{1-\\alpha}$ expected probes, and a **successful** search at most $\\frac{1}{\\alpha}\\ln\\frac{1}{1-\\alpha}$.",
        detail: "Numbers to know: α = 0.5 → 2 and 1.39 probes; α = 0.75 → 4 and 1.85; α = 0.9 → 10 and 2.56. The lesson: keep α well below 1 — doubling the table before α hits a threshold (say 0.75) keeps searches at a handful of probes."
      },
      {
        term: "Linear probing and primary clustering",
        kind: "method",
        statement: "$h(k, i) = (h'(k) + i) \\bmod m$. Trivially fast, but it suffers **primary clustering**: every key with the same initial hash walks the same row of slots, so runs of occupied slots merge into long clusters that every new insertion must walk through.",
        detail: "Clusters feed on themselves — the longer a run, the more likely the next insertion extends it — which is why linear probing's observed probe counts exceed the uniform-hashing prediction."
      },
      {
        term: "Quadratic probing and secondary clustering",
        kind: "method",
        statement: "$h(k, i) = (h'(k) + c_1 i + c_2 i^2) \\bmod m$. The quadratic stride prevents the long linear runs — but **two keys with the same $h'$ follow the same probe sequence**, the milder defect called **secondary clustering**. The constants must be chosen so the first $m$ probes are distinct.",
        detail: "It also cannot be relied on to find an empty slot unless the constants and m are chosen so that a full permutation of slots is probed."
      },
      {
        term: "Double hashing",
        kind: "method",
        statement: "$h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\bmod m$. With $\\Theta(m^2)$ distinct probe pairs $(h_1, h_2)$ this scheme produces $\\Theta(m^2)$ different probe sequences — the closest practical approach to uniform hashing. **$h_2(k)$ must be relatively prime to $m$**: for $m = 2^r$ make $h_2$ return odd values; for prime $m$ take $h_2 \\in \\{1, \\ldots, m-1\\}$.",
        detail: "If gcd(h₂(k), m) = d > 1 the probe sequence revisits only m/d slots and can miss empty slots entirely."
      }
    ],
    figures: [
      {
        caption: "Inserting $k = 74$ into a 13-slot table with slots $\\{0, 1, 5, 9, 10, 11, 12\\}$ occupied ($\\alpha = 7/13$). Double hashing with $h_1(k) = k \\bmod 13 = 9$ and $h_2(k) = 1 + (k \\bmod 11) = 9$ probes $9, 5, 1, 10, 6$ — five probes that leap across the table and land in slot 6. Linear probing with the same $h_1 = 9$ must thread through the wrap-around cluster $9, 10, 11, 12, 0, 1$ before finding slot 2 — seven probes.",
        svg: '<svg viewBox="0 0 720 340" width="100%" role="img" aria-label="Two probe sequences over a thirteen-slot table: double hashing jumps, linear probing crawls"><text x="26" y="24" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.9">double hashing: h(k, i) = (h₁(k) + i·h₂(k)) mod 13 — k = 74, h₁ = 9, h₂ = 9 → probes 9, 5, 1, 10, 6</text><circle cx="516" cy="76" r="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2"/><text x="516" y="80" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">1</text><circle cx="308" cy="76" r="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2"/><text x="308" y="80" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">2</text><circle cx="100" cy="76" r="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2"/><text x="100" y="80" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">3</text><circle cx="568" cy="76" r="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2"/><text x="568" y="80" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">4</text><circle cx="360" cy="76" r="9" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5"/><text x="360" y="80" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">5</text><path d="M516 76 Q412 52 308 76" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="312,71.5 312,80.5 300,76" fill="currentColor" opacity="0.55"/><path d="M308 76 Q204 52 100 76" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="104,71.5 104,80.5 92,76" fill="currentColor" opacity="0.55"/><path d="M100 76 Q334 44 568 76" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="556,71.5 556,80.5 568,76" fill="currentColor" opacity="0.55"/><path d="M568 76 Q464 50 360 76" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="364,71.5 364,80.5 352,76" fill="currentColor" opacity="0.55"/><rect x="26" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="48" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">0</text><rect x="78" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="100" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">1</text><rect x="130" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="152" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">2</text><rect x="182" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="204" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">3</text><rect x="234" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="256" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">4</text><rect x="286" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="308" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">5</text><rect x="338" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="#10b981" stroke-width="1.8" stroke-dasharray="4 3"/><text x="360" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">6</text><rect x="390" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="412" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">7</text><rect x="442" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="464" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">8</text><rect x="494" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="516" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">9</text><rect x="546" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="568" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">10</text><rect x="598" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="620" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">11</text><rect x="650" y="96" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="672" y="117" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">12</text><text x="360" y="148" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="#10b981">74 lands here — 5 probes</text><text x="26" y="182" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.9">linear probing: h(k, i) = (h′(k) + i) mod 13 — h′(k) = 9 → probes 9, 10, 11, 12, 0, 1, 2</text><circle cx="516" cy="234" r="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2"/><text x="516" y="238" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">1</text><circle cx="568" cy="234" r="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2"/><text x="568" y="238" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">2</text><circle cx="620" cy="234" r="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2"/><text x="620" y="238" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">3</text><circle cx="672" cy="234" r="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2"/><text x="672" y="238" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">4</text><circle cx="48" cy="234" r="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2"/><text x="48" y="238" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">5</text><circle cx="100" cy="234" r="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.2"/><text x="100" y="238" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">6</text><circle cx="152" cy="234" r="9" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1.5"/><text x="152" y="238" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">7</text><path d="M516 234 Q542 218 568 234" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="560,229.5 560,238.5 568,234" fill="currentColor" opacity="0.55"/><path d="M568 234 Q594 218 620 234" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="612,229.5 612,238.5 620,234" fill="currentColor" opacity="0.55"/><path d="M620 234 Q646 218 672 234" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="664,229.5 664,238.5 672,234" fill="currentColor" opacity="0.55"/><path d="M672 234 Q360 198 48 234" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="56,229.5 56,238.5 44,234" fill="currentColor" opacity="0.55"/><text x="360" y="212" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.6">wraps around past slot 12</text><path d="M48 234 Q74 218 100 234" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="92,229.5 92,238.5 100,234" fill="currentColor" opacity="0.55"/><path d="M100 234 Q126 218 152 234" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/><polygon points="144,229.5 144,238.5 152,234" fill="currentColor" opacity="0.55"/><rect x="26" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="48" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">0</text><rect x="78" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="100" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">1</text><rect x="130" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="#10b981" stroke-width="1.8" stroke-dasharray="4 3"/><text x="152" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">2</text><rect x="182" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="204" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">3</text><rect x="234" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="256" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">4</text><rect x="286" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="308" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">5</text><rect x="338" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="360" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">6</text><rect x="390" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="412" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">7</text><rect x="442" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="464" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">8</text><rect x="494" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="516" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">9</text><rect x="546" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="568" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">10</text><rect x="598" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="620" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">11</text><rect x="650" y="254" width="44" height="34" rx="3" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3"/><text x="672" y="275" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">12</text><text x="152" y="306" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="#10b981">74 lands here — 7 probes</text><text x="360" y="328" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.85">same table, same h₁: linear probing threads the cluster 9–12–0–1 (7 probes); double hashing leaps out (5 probes)</text></svg>',
        afterConcept: 4,
      }
    ],
    examples: [
      {
        title: "A deletion that silently breaks the table",
        problem: "In a 13-slot open-addressed table with linear probing, $h'(k) = k \\bmod 13$: key 61 was inserted at slot 9 and key 23 ($h' = 10$) at slot 10. Key 9 ($h' = 9$) probed 9, 10, 11 and was stored at slot 11. What goes wrong if we delete 61 by emptying slot 9?",
        steps: [
          { label: "Step 1: The state before deletion", text: "Slot 9 holds 61, slot 10 holds 23, slot 11 holds 9. Note that key 9 is **not** in its home slot 9 — its probe went past two occupied slots." },
          { label: "Step 2: Empty slot 9 naively", text: "Setting slot 9 to “empty” removes 61 correctly, but the table now claims slots 9, 10, 11 are: empty, occupied, occupied." },
          { label: "Step 3: Search for key 9", text: "HASH-SEARCH(9) probes slot 9, finds it **empty**, and concludes the key is absent — yet key 9 sits in slot 11. The empty slot terminated a probe sequence that should have continued." },
          { label: "Step 4: The standard repair", text: "Deletion must write a **DELETED** tombstone instead of “empty”: searches treat it as occupied and keep probing, while insertions may reuse it. Because tombstones accumulate and push the effective load factor up, a periodically rebuilt table is the standard long-term answer." }
        ],
        result: "A NIL-ed slot amputates every probe sequence that passes through it — deletion in open addressing demands tombstones (or rehashing), never simple clearing."
      },
      {
        title: "Linear probing cluster of three",
        problem: "Table $m = 7$, $h(k) = k \\bmod 7$, linear probing. Insert $14, 21, 28$ then search $28$.",
        steps: [
          { label: "Insert 14", text: "$14 \\bmod 7 = 0$: slot $0$ free, store there." },
          { label: "Insert 21", text: "$21 \\bmod 7 = 0$ occupied, probe $1$: free, store at $1$. Cluster $0-1$ forms." },
          { label: "Insert 28", text: "$28 \\bmod 7 = 0$, probe $1$ occupied, probe $2$: free, store at $2$. Cluster $0-2$ length $3$." },
          { label: "Search 28", text: "Probe $0,1,2$: $3$ probes. Next key hashing to $0-2$ will extend the cluster: primary clustering feeds on itself, the textbook pathology of linear probing." },
        ],
        result: "Three keys, one cluster of length $3$, search cost $3$ probes; double hashing would have scattered them with independent second hashes.",
      },
    ],
    keyTakeaways: [
      "Open addressing stores keys in the table itself, probing $h(k, 0), h(k, 1), \\ldots$ — each key's sequence must be a permutation of the slots, and $\\alpha \\le 1$.",
      "Expected probes: $\\le 1/(1-\\alpha)$ unsuccessful, $\\le (1/\\alpha)\\ln(1/(1-\\alpha))$ successful — so keep the load factor modest; at $\\alpha = 0.9$ an unsuccessful search already averages 10 probes.",
      "Linear probing clusters, quadratic probing clusters mildly, double hashing (with $\\gcd(h_2, m) = 1$) approaches uniform hashing; deletion requires tombstones."
    ],
    quiz: [
      {
        q: "An open-addressed table is filled to α = 0.75. Under uniform hashing, the expected number of probes for an unsuccessful search is:",
        options: ["0.75", "1.33", "4", "ln(4)/0.75 ≈ 1.85"],
        answer: 2,
        explanation: "Unsuccessful search: 1/(1 − α) = 1/0.25 = 4. The 1.85 figure is the successful-search bound (1/α)ln(1/(1−α))."
      },
      {
        q: "Double hashing uses h(k, i) = (h₁(k) + i·h₂(k)) mod m with m = 2¹⁶. What constraint keeps the probe sequence from missing slots?",
        options: [
          "h₂(k) must be relatively prime to m — i.e. odd",
          "h₂(k) must equal h₁(k)",
          "h₂(k) must be a multiple of 16",
          "h₂(k) must exceed m"
        ],
        answer: 0,
        explanation: "The sequence touches exactly m/gcd(h₂, m) distinct slots; with m a power of two only odd strides are coprime to m, guaranteeing all 2¹⁶ slots are reachable."
      },
      {
        q: "Primary clustering is the signature defect of which scheme?",
        options: ["Chaining", "Linear probing", "Double hashing", "Perfect hashing"],
        answer: 1,
        explanation: "Linear probing's unit stride makes all keys hashing near a slot walk the same run, and runs merge as they grow. Double hashing's varied strides break exactly this."
      },
      {
        q: "Why does open-addressed deletion write a DELETED marker rather than clearing the slot?",
        options: [
          "To remember the key for undo",
          "Because a truly empty slot would terminate probe sequences that pass through it",
          "To keep the load factor α below 1",
          "Because slots cannot be emptied in arrays"
        ],
        answer: 1,
        explanation: "HASH-SEARCH stops at the first empty slot; clearing would make later keys unreachable. Tombstones keep probes alive at the cost of gradual clutter, eventually cured by rehashing."
      },
      // PYQ-pattern: ISRO 2017 — linear probing sequence (rephrased, values changed)
      {
        q: "Into an empty table of $11$ slots, three keys all hashing to $5$ are inserted by linear probing. The third key lands in slot:",
        options: ["5", "6", "8", "7"],
        answer: 3,
        explanation: "Step 1 — Given: $m = 11$, probe origin $h = 5$ for all three keys, linear probing. Step 2 — Governing sequence: probe $k$ tries $(h + k) \\bmod m$ for $k = 0, 1, 2, \\ldots$ until an empty slot appears. Step 3 — Trace: first key takes $5$; second probes $5$ (occupied) then $6$; third probes $5$, $6$ (both occupied) then $7$. Step 4 — Sanity check: consecutive occupancy forms a primary cluster, each arrival extends it by one, and wraparound arithmetic is never needed here. Step 5 — Distractor analysis: $5$ ignores occupancy, $6$ stops one probe early, and $8$ skips a slot as quadratic probing would. Step 6 — Conclude: slot $7$.",
      },
    ]
  },

  // ---------------------------------------------------------------- 11.5
  {
    sectionId: "clrs-ch11-s5",
    readingTime: 5,
    intro: "Every scheme so far had Θ(1) expected time but Θ(n) worst case — a single unlucky chain can spoil a search. Perfect hashing removes the luck: when the set of keys is fixed in advance, a two-level scheme achieves Θ(1) worst-case lookup in O(n) space. The trick is to spend quadratic space on each bucket, because with n_j² secondary slots a collision-free hash function is easy to find.",
    objectives: [
      "Describe the two-level perfect-hashing scheme and why worst-case lookup is exactly 2 probes",
      "Justify the m_j = n_j² secondary table size via the birthday/Markov argument",
      "Explain why the expected total space is O(n) and when the scheme is appropriate",
    ],
    concepts: [
      {
        term: "The static-key setting",
        kind: "insight",
        statement: "Perfect hashing assumes the **set S of n keys never changes** after construction — a compiler's reserved-word table, a dictionary on read-only media, a fixed symbol set. With no insertions or deletions, the only cost that matters is lookup, and it can be driven to $O(1)$ **worst case**.",
        detail: "If keys must be inserted and deleted dynamically, this two-level structure is not the tool — Chapters 12 and 13 take over."
      },
      {
        term: "The two-level scheme",
        kind: "method",
        statement: "Level 1 hashes the $n$ keys into $m = n$ slots with a function $h$ drawn from a universal family. Bucket $j$ receives $n_j$ keys and gets its **own secondary table of $m_j = n_j^2$ slots** with its own function $h_j$, again universal, chosen so that **no two of the bucket's keys collide at level 2**.",
        detail: "A lookup computes h(k) then h_j(k): exactly two hash evaluations and two slot reads, always — the worst case is 2 probes."
      },
      {
        term: "Why n_j² slots suffice",
        kind: "theorem",
        statement: "For a bucket with $n_j$ keys and $m_j = n_j^2$ secondary slots, a hash function drawn from a universal family has **no collisions with probability at least 1/2**: the expected number of colliding pairs is at most $\\binom{n_j}{2}/m_j < 1/2$, and by Markov's inequality $\\Pr[\\text{at least one pair collides}] < 1/2$.",
        detail: "So a handful of random trials per bucket is enough to find a collision-free h_j — the same birthday-paradox counting that makes 23 people likely to share a birthday."
      },
      {
        term: "Expected space is linear",
        kind: "theorem",
        statement: "With the level-1 table of size $m = n$ and universal hashing, $\\mathrm{E}\\big[\\sum_j n_j^2\\big] = n + \\frac{n(n-1)}{m} < 2n$, so the **expected total space of the whole structure is O(n)**; by Markov, $\\Pr[\\sum_j n_j^2 \\ge 4n] \\le 1/2$, so a good pair of levels is found in a few random trials.",
        detail: "The identity E[n_j²] = E[n_j] + 2·E[# pairs in bucket j] turns the square into a pair-count, and each of the C(n,2) key pairs lands together with probability 1/m."
      },
      {
        term: "Why $m = n$ first level suffices",
        kind: "insight",
        statement: "With $m = n$ slots and simple uniform hashing, expected collisions total $\\binom{n}{2}/n < n/2$, so the expected sum $\\sum_j n_j^2 = n + 2 \\times$ collisions is $O(n)$. The first level need only be linear for the second level's quadratic tables to total linear space in expectation.",
        detail: "Markov then bounds the chance the construction retries: with $E[\\sum n_j^2] = O(n)$, a fresh universal hash succeeds with constant probability, so expected retries are $O(1)$.",
      },
    ],
    figures: [
      {
        caption: "Perfect hashing of $S = \\{17, 42, 88, 96, 103, 140\\}$ with level 1 $h(k) = k \\bmod 5$. Bucket 2 receives $\\{17, 42\\}$ and bucket 3 receives $\\{88, 103\\}$; each gets $n_j^2 = 4$ secondary slots and a collision-free function, here $h_2(k) = (3k \\bmod 101) \\bmod 4$ (17 → 3, 42 → 1) and $h_3(k) = ((2k+1) \\bmod 101) \\bmod 4$ (88 → 0, 103 → 1). Total secondary slots: $1 + 1 + 4 + 4 = 10 < 2n = 12$.",
        svg: '<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="Two-level perfect hash table: five primary slots pointing to small secondary tables"><text x="360" y="22" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.9">perfect hashing — n = 6 static keys, worst case 2 probes</text><text x="360" y="44" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">level 1: h(k) = k mod 5, m = 5 = n</text><rect x="92" y="52" width="76" height="30" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="130" y="71" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.85">T[0]</text><rect x="208" y="52" width="76" height="30" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="246" y="71" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.85">T[1]</text><rect x="324" y="52" width="76" height="30" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="362" y="71" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.85">T[2]</text><rect x="440" y="52" width="76" height="30" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="478" y="71" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.85">T[3]</text><rect x="556" y="52" width="76" height="30" rx="3" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.4"/><text x="594" y="71" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" opacity="0.85">T[4]</text><line x1="130" y1="82" x2="130" y2="144" stroke="currentColor" stroke-width="1.3"/><polygon points="130,150 125.5,140 134.5,140" fill="currentColor"/><line x1="246" y1="82" x2="246" y2="144" stroke="currentColor" stroke-width="1.3"/><polygon points="246,150 241.5,140 250.5,140" fill="currentColor"/><line x1="362" y1="82" x2="362" y2="130" stroke="currentColor" stroke-width="1.3"/><polygon points="362,136 357.5,126 366.5,126" fill="currentColor"/><line x1="478" y1="82" x2="478" y2="130" stroke="currentColor" stroke-width="1.3"/><polygon points="478,136 473.5,126 482.5,126" fill="currentColor"/><text x="594" y="158" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" opacity="0.5">∅</text><text x="594" y="182" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.6">n₄ = 0</text><rect x="102" y="150" width="56" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="130" y="167.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">140</text><text x="130" y="196" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.7">m₀ = 1² = 1</text><rect x="218" y="150" width="56" height="26" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="246" y="167.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">96</text><text x="246" y="196" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.7">m₁ = 1² = 1</text><text x="326" y="151" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.55">0</text><text x="326" y="177" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.55">1</text><text x="326" y="203" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.55">2</text><text x="326" y="229" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.55">3</text><rect x="334" y="136" width="56" height="22" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.2"/><text x="362" y="151" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.45">—</text><rect x="334" y="162" width="56" height="22" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="362" y="177" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">42</text><rect x="334" y="188" width="56" height="22" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.2"/><text x="362" y="203" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.45">—</text><rect x="334" y="214" width="56" height="22" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="362" y="229" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">17</text><text x="362" y="258" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.7">m₂ = 2² = 4</text><text x="442" y="151" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.55">0</text><text x="442" y="177" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.55">1</text><text x="442" y="203" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.55">2</text><text x="442" y="229" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor" opacity="0.55">3</text><rect x="450" y="136" width="56" height="22" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="478" y="151" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">88</text><rect x="450" y="162" width="56" height="22" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="478" y="177" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">103</text><rect x="450" y="188" width="56" height="22" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.2"/><text x="478" y="203" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.45">—</text><rect x="450" y="214" width="56" height="22" rx="3" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.2"/><text x="478" y="229" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.45">—</text><text x="478" y="258" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.7">m₃ = 2² = 4</text><text x="360" y="288" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.8">h₂(k) = (3k mod 101) mod 4: 17 → 3, 42 → 1 · h₃(k) = ((2k+1) mod 101) mod 4: 88 → 0, 103 → 1</text><text x="360" y="310" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.85">total secondary slots 1 + 1 + 4 + 4 = 10 &lt; 2n = 12 — and every lookup is exactly 2 probes</text></svg>',
        afterConcept: 2,
      }
    ],
    examples: [
      {
        title: "Building the two levels for six keys",
        problem: "Perfectly hash $S = \\{17, 42, 88, 96, 103, 140\\}$ using level 1 $h(k) = k \\bmod 5$ and quadratic secondary tables. Verify the secondary functions are collision-free.",
        steps: [
          { label: "Step 1: Level 1", text: "$17 \\bmod 5 = 2$, $42 \\bmod 5 = 2$, $88 \\bmod 5 = 3$, $96 \\bmod 5 = 1$, $103 \\bmod 5 = 3$, $140 \\bmod 5 = 0$. Buckets: $n_0 = 1$, $n_1 = 1$, $n_2 = 2$, $n_3 = 2$, $n_4 = 0$." },
          { label: "Step 2: Size the secondary tables", text: "$m_j = n_j^2$: single slots for buckets 0 and 1, four slots each for buckets 2 and 3, and no table at all for the empty bucket 4." },
          { label: "Step 3: Test h₂(k) = (3k mod 101) mod 4 on bucket 2", text: "$3 \\cdot 17 = 51$, and $51 \\bmod 4 = 3$; $3 \\cdot 42 = 126 \\equiv 25 \\pmod{101}$, and $25 \\bmod 4 = 1$. Slots 3 and 1 — no collision, so this h₂ is accepted." },
          { label: "Step 4: Test h₃(k) = ((2k+1) mod 101) mod 4 on bucket 3", text: "$2 \\cdot 88 + 1 = 177 \\equiv 76 \\pmod{101}$, and $76 \\bmod 4 = 0$; $2 \\cdot 103 + 1 = 207 \\equiv 5 \\pmod{101}$, and $5 \\bmod 4 = 1$. Slots 0 and 1 — collision-free again." },
          { label: "Step 5: Audit the space", text: "Secondary slots: $1 + 1 + 4 + 4 + 0 = 10$, comfortably under the $2n = 12$ that the expectation $\\mathrm{E}[\\sum n_j^2] < 2n$ promises on average." }
        ],
        result: "Any key in S is found by computing two hashes and reading two slots — Θ(1) worst case, no luck involved."
      },
      {
        title: "Second-level sizes on skewed buckets",
        problem: "With $n = 6$, first-level buckets hold $n_j = 3, 2, 1, 0, 0, 0$. Size the second level and total the space.",
        steps: [
          { label: "Quadratic sizing", text: "Second tables $m_j = n_j^2$: $9, 4, 1, 0, 0, 0$ slots: total $14$ slots for $6$ keys." },
          { label: "Why squares", text: "With $n_j^2$ slots a random hash is collision-free with probability $\\ge 1/2$ (birthday bound $\\binom{n_j}{2}/n_j^2 < 1/2$), so each bucket retries $O(1)$ times expected." },
          { label: "Skew cost", text: "The $3$-bucket alone costs $9$ slots; had the six keys spread $1$ each, total would be $6$ slots. Skew is paid quadratically, which is why the expectation needs uniform hashing." },
          { label: "Lookup", text: "Worst case $2$ probes: one to $h(k)$, one to $h_j(k)$ in the $n_j^2$ table: $O(1)$ worst case, not merely expected." },
        ],
        result: "$14$ second-level slots for the $3$-$2$-$1$ split; worst-case lookup $2$ probes with $O(n)$ expected space.",
      },
    ],
    keyTakeaways: [
      "Perfect hashing handles a fixed key set: level 1 spreads n keys into m = n buckets, and each bucket gets $m_j = n_j^2$ secondary slots with a collision-free universal hash.",
      "The quadratic secondary size makes a collision-free function easy: the expected number of colliding pairs is below 1/2, so each bucket succeeds with probability ≥ 1/2 per trial.",
      "Expected total space is $O(n)$ because $\\mathrm{E}[\\sum_j n_j^2] < 2n$ — the two-level table is both worst-case fast and asymptotically compact."
    ],
    quiz: [
      {
        q: "In the two-level perfect-hashing scheme, how large is each secondary table?",
        options: ["n slots", "n_j slots, matching the bucket's key count", "n_j² slots, the square of the bucket's key count", "2n slots per bucket"],
        answer: 2,
        explanation: "Quadratic secondary tables make a collision-free universal function likely: with n_j² slots the expected number of colliding pairs in a bucket is under 1/2."
      },
      {
        q: "What is the worst-case number of hash evaluations and slot reads to look up a key?",
        options: ["1 hash, 1 read", "2 hashes, 2 reads", "O(lg n)", "Unbounded up to m probes"],
        answer: 1,
        explanation: "One level-1 hash lands in a bucket, and one level-2 hash lands in a collision-free secondary slot — exactly two probes, always."
      },
      {
        q: "Why is the expected total space of the two-level scheme O(n)?",
        options: [
          "Because each secondary table has exactly n slots",
          "Because E[Σ n_j²] = n + n(n−1)/m < 2n when the level-1 table has m = n slots",
          "Because the level-1 hash never produces collisions",
          "Because empty buckets get large tables"
        ],
        answer: 1,
        explanation: "E[n_j²] = E[n_j] + 2·E[pairs in j] and each of the C(n,2) key pairs shares a bucket with probability 1/m; summing over m = n buckets gives E[Σ n_j²] = n + n(n−1)/n < 2n."
      },
      {
        q: "Which application is the natural habitat for perfect hashing?",
        options: [
          "A database index with constant inserts",
          "A compiler's keyword table fixed before compilation",
          "A web cache with a changing key set",
          "A hash table that must support range queries"],
        answer: 1,
        explanation: "The scheme requires the key set to be static. Reserved words, error codes, or dictionary contents fixed at build time are ideal; dynamic sets need Chapter 12–13 structures instead."
      }
    ]
  }
]
