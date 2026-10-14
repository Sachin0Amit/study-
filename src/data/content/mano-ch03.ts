import type { SectionContent } from '../library'

// ============================================================================
// M. Morris Mano — Digital Logic and Computer Design (1979)
// Chapter 3: Simplification of Boolean Functions (Sections 3.1 – 3.5)
// Prime notation A′ (U+2032) throughout; worked functions verified cell by cell.
// ============================================================================

export const manoCh3Content: SectionContent[] = [
  // ------------------------------------------------------------------ 3.1
  {
    sectionId: 'mano-ch3-s1',
    readingTime: 10,
    intro: 'The Karnaugh map is the truth table redrawn so that visually adjacent cells are logically adjacent — minterms that differ in exactly one variable sit side by side, and combining them cancels that variable by inspection. This section builds the method from two variables upward: the adjacency principle, the Gray-coded row and column order that makes it work, pairs, quads and octets, essential prime implicants, and don’t-care conditions, with the book’s classic three-variable functions fully worked.',
    objectives: [
      'Explain the adjacency principle and why the map’s rows and columns follow Gray-code order',
      'Minimize two- and three-variable functions by grouping pairs, quads and octets',
      'Identify essential prime implicants and verify that every 1-cell is covered',
      'Use don’t-care conditions to enlarge groups, and know when a don’t-care is better left unused',
    ],
    concepts: [
      {
        term: 'The Karnaugh map',
        kind: 'definition',
        statement: 'A **K-map** is a diagram of $2^{n}$ cells, one per minterm, arranged so that horizontally and vertically **neighboring cells always differ in exactly one variable**. Each cell is marked with 1 (function is true there), 0, or **d** (don’t care).',
        detail: 'The map is just the truth table re-indexed: for three variables the rows are $A = 0, 1$ and the columns follow the reflected order $BC = 00, 01, 11, 10$ — the Gray ordering of Section 1.6 is precisely what guarantees the adjacency property, since moving one column changes exactly one bit of $BC$.',
      },
      {
        term: 'The adjacency principle',
        kind: 'law',
        statement: 'Two adjacent 1-cells differ in exactly one variable, so their minterms combine algebraically by the complement law: $AB C + ABC′ = AB(C + C′) = AB$. **A group of $2^{k}$ adjacent 1-cells yields one product term with $k$ variables eliminated** — a pair drops one literal, a quad drops two, an octet drops three.',
        detail: 'This is the entire mechanism of the map method: the $x + x′ = 1$ cancellation, done geometrically. It is also why groups must be rectangular and sized as powers of two (1, 2, 4, 8, … cells): only then does each internal variable take both values across the group.',
      },
      {
        term: 'Three-variable map furniture',
        kind: 'notation',
        statement: 'The three-variable map with cell indices (rows $A$, columns $BC$ in Gray order): $$\\begin{array}{c|cccc} A \\backslash BC & 00 & 01 & 11 & 10 \\\\ \\hline 0 & 0 & 1 & 3 & 2 \\\\ 1 & 4 & 5 & 7 & 6 \\end{array}$$ The left–right column order 00, 01, 11, 10 makes columns 1 and 2 (indices 00 and 10) adjacent by wraparound.',
        detail: 'Two adjacency quirks to internalize: the **map wraps horizontally** (columns 00 and 10 are neighbors — they differ only in B), and each row is a full cycle of the reflected code. For four variables (next section) the wrap applies vertically too, and the four corners become one quad.',
      },
      {
        term: 'Prime implicants and essential ones',
        kind: 'definition',
        statement: 'A **prime implicant** is a valid group that cannot be enlarged any further (adding any adjacent cell would change the term). An **essential prime implicant** is a group that covers at least one 1-cell no other group can cover — essential groups must appear in the answer; the remaining 1s are then covered with as few groups as possible.',
        detail: 'The procedure: draw the largest possible groups first (they give the fewest literals), mark each group that uniquely covers some cell, then complete the cover minimally. Overlapping groups are not just allowed but necessary — a cell may belong to several groups.',
      },
      {
        term: 'Grouping strategy',
        kind: 'method',
        statement: 'To minimize: (1) circle the largest power-of-two rectangles that contain only 1s (and any useful d’s); (2) keep every circle as large and as few as possible; (3) let circles overlap freely; (4) use the wraparound edges; (5) verify every 1-cell is inside some circle. The resulting SOP is the OR of each circle’s term.',
        detail: 'Reading a group’s term: a variable that is constant across the group survives (uncomplemented if 1, complemented if 0); every variable that changes within the group is eliminated. A quad spanning all four columns of a row leaves just the row literal — the pattern behind the biggest simplifications.',
      },
      {
        term: 'Don’t-care conditions',
        kind: 'definition',
        statement: 'A **don’t-care** (d) cell marks an input combination whose output will never occur or is never used — for example, input codes 10–15 to a BCD circuit. A d may be **treated as 1 to enlarge a group, or as 0 and ignored**; d-cells need not be covered at all.',
        detail: 'Freedom, not obligation: include a d only when it makes a group larger. The formal model is the **incompletely specified function** $F = \\Sigma m(\\ldots) + d(\\ldots)$; any assignment of the d’s yields an acceptable realization, and the minimizer picks the assignment that gives the cheapest one.',
      },
    ],
    examples: [
      {
        title: 'Two-variable map, full walkthrough',
        problem: 'Minimize $F(A, B) = \\Sigma m(1, 2, 3)$ on a two-variable map.',
        steps: [
          { label: 'Step 1: Draw and populate', text: 'Rows $A = 0, 1$; columns $B = 0, 1$. Cell $(0,1)$ is minterm 1, cell $(1,0)$ is minterm 2, cell $(1,1)$ is minterm 3 — mark these three cells with 1, leaving $(0,0)$ at 0.' },
          { label: 'Step 2: Look for the biggest group', text: 'No quad (all four cells) is possible since $(0,0)$ is 0. Look for pairs: cells $(0,1)$ and $(1,1)$ are vertically adjacent (both have $B = 1$) — a pair eliminating $A$ and leaving the term $B$.' },
          { label: 'Step 3: Second pair', text: 'Cells $(1,0)$ and $(1,1)$ are horizontally adjacent (both have $A = 1$) — a pair eliminating $B$ and leaving the term $A$.' },
          { label: 'Step 4: Allow the overlap', text: 'Minterm 3 sits in both pairs — this is correct and necessary; every 1-cell must be covered at least once, and reuse costs nothing.' },
          { label: 'Step 5: Write the result and check essentials', text: 'Each 1-cell is covered by exactly one group in one direction and two in another — the two groups $B$ and $A$ form the whole cover: $F = A + B$. Verify algebraically: $A′B + AB′ + AB = A′B + A(B′ + B) = A′B + A = A + B$ by Theorem 6a.' },
        ],
        result: '$F = \\Sigma m(1, 2, 3) = A + B$: two overlapping pairs instead of three minterms — the smallest complete demonstration of the method.',
      },
      {
        title: 'Three-variable minimization with essential groups',
        problem: 'Minimize $F(A, B, C) = \\Sigma m(3, 4, 6, 7)$ on the three-variable map.',
        steps: [
          { label: 'Step 1: Populate the map', text: 'Using the cell layout (rows $A$; columns $BC = 00, 01, 11, 10$): the 1s are minterm 3 (row 0, column 11), minterm 4 (row 1, column 00), minterms 6 and 7 (row 1, columns 10 and 11).' },
          { label: 'Step 2: Group the BC pair', text: 'Minterms 3 (011) and 7 (111) are adjacent in column 11 — they differ only in $A$, so the pair eliminates it: term $BC$.' },
          { label: 'Step 3: Group the wraparound pair', text: 'Minterms 4 (100) and 6 (110) are adjacent in row 1 (columns 00 and 10 — the wraparound edge): they differ only in $B$, leaving the term $AC′$.' },
          { label: 'Step 4: Test for larger groups', text: 'No quad exists: rows/columns that would extend either pair include 0-cells. Both pairs are prime implicants.' },
          { label: 'Step 5: Check essentials and coverage', text: 'Minterm 3 is covered only by the $BC$ pair and minterm 4 only by the $AC′$ pair — both groups are essential. Together they cover 3, 4, 6, 7 — every 1-cell. No further terms needed.' },
          { label: 'Step 6: Verify algebraically', text: '$x′yz + xyz = yz$ style pairing: $BC$ covers $m_3 + m_7$; $AC′$ covers $m_4 + m_6$; and indeed $F = BC + AC′$, three literals total instead of six.' },
        ],
        result: '$F(A, B, C) = \\Sigma m(3, 4, 6, 7) = BC + AC′$ — one essential pair in the 11 column, one essential wraparound pair in row $A = 1$.',
      },
      {
        title: 'Don’t-cares: one that helps and one that doesn’t',
        problem: 'Minimize (a) $F(A, B, C) = \\Sigma m(0, 2, 4, 6) + d(5)$, and (b) $F(A, B, C) = \\Sigma m(0, 1, 2, 5, 6) + d(4, 7)$.',
        steps: [
          { label: 'Step 1: Part (a) — populate', text: 'The 1s occupy every cell with $C = 0$: minterms 0, 2, 4, 6; the don’t-care sits at minterm 5 ($AB′C$).' },
          { label: 'Step 2: Part (a) — find the quad', text: 'The four 1s form a group spanning both rows and the columns 00 and 10: $A$ and $B$ both vary, only $C$ is constant (0) — the term is $C′$.' },
          { label: 'Step 3: Part (a) — evaluate the don’t-care', text: 'Minterm 5 sits in column 01 (C = 1): it cannot join the $C′$ quad, and pairing it with minterm 4 would only produce the longer term $AB′$. The best use of $d(5)$ is **as a 0** — leave it out entirely.' },
          { label: 'Step 4: Part (b) — populate', text: 'Now the 1s are minterms 0, 1, 2, 5, 6 with don’t-cares at 4 and 7.' },
          { label: 'Step 5: Part (b) — use both don’t-cares', text: 'Treat $d(4)$ as 1: cells 0, 1, 4, 5 fill the entire $B = 0$ region — a quad eliminating $A$ and $C$ and leaving $B′$. Treat $d(7)$ as 0: the remaining 1s at 2 and 6 form the pair $BC′$ (column 10, $A$ varies).' },
          { label: 'Step 6: Part (b) — assemble and verify', text: '$F = B′ + BC′$ — two terms, three literals. Without the don’t-cares the same 1s need three pairs ($A′C′$, $BC′$, $B′C$ or similar) — the d’s halved the cost. Check $d(4)$ as 1 is harmless (the code never occurs) and $d(7)$ as 0 is equally harmless.' },
        ],
        result: '(a) $\\Sigma m(0, 2, 4, 6) + d(5) = C′$ with the don’t-care discarded — not every d helps. (b) $\\Sigma m(0, 1, 2, 5, 6) + d(4, 7) = B′ + BC′$ — two d’s used to build a quad that collapses three pairs into two terms.',
      },
    ],
    keyTakeaways: [
      'The K-map is the truth table in Gray-coded geometry: neighboring cells differ in exactly one variable.',
      'Groups of $2^{k}$ cells eliminate $k$ literals: pairs drop one, quads two, octets three — a direct geometric application of $x + x′ = 1$.',
      'Groups must be rectangles of power-of-two size, may overlap, and may wrap around the map’s edges (columns 00/10 in three variables).',
      'Essential prime implicants cover cells nothing else can reach and must be in the answer; then finish the cover with as few groups as possible.',
      '$F(A,B,C) = \\Sigma m(3,4,6,7) = BC + AC′$ is the classic essential-pairs exercise.',
      'Don’t-cares are an option, not a duty: $d(5)$ cannot help $\\Sigma m(0,2,4,6) = C′$, but $d(4)$ and $d(7)$ turn $\\Sigma m(0,1,2,5,6)$ into $B′ + BC′$.',
    ],
    quiz: [
      {
        q: 'Why are the columns of a K-map ordered 00, 01, 11, 10 rather than 00, 01, 10, 11?',
        options: ['It is a historical accident of IBM drafting', 'So that adjacent columns differ in exactly one bit, making horizontally neighboring cells combinable', 'To keep the minterm numbers in ascending order', 'To leave room for don’t-cares'],
        answer: 1,
        explanation: 'The reflected (Gray) order guarantees the adjacency principle: neighbors differ in one variable, so their minterms combine and that variable cancels. Binary order would put 01 next to 10 — a two-bit difference that does not combine.',
      },
      {
        q: 'A group of eight adjacent 1-cells in a four-variable map eliminates:',
        options: ['One variable', 'Two variables', 'Three variables', 'All four variables'],
        answer: 2,
        explanation: 'A group of $2^{k} = 8$ cells fixes $4 - 3 = 1$ variable and eliminates the other three — the octet is the most valuable group on a four-variable map.',
      },
      {
        q: 'In $F(A,B,C) = \\Sigma m(3, 4, 6, 7)$, the minterms 4 and 6 combine because they:',
        options: ['Differ only in B, across the wraparound edge of the map', 'Differ in two variables but share a row', 'Are both even numbers', 'Both contain the literal A'],
        answer: 0,
        explanation: 'Minterms 4 (100) and 6 (110) sit in columns 00 and 10 of row $A = 1$ — adjacent through the horizontal wrap — so the pair eliminates $B$ and yields $AC′$.',
      },
      {
        q: 'For $F(A,B,C) = \\Sigma m(0,2,4,6) + d(5)$, the minimal SOP is:',
        options: [`$C′ + AB′$`, `$C′$`, `$B′ + BC′$`, `$A′C′ + AC′$`],
        answer: 1,
        explanation: 'The four 1s are exactly the $C = 0$ cells, forming a quad with the single term $C′$; the don’t-care at minterm 5 has $C = 1$ and cannot enlarge it — it is simply assigned 0.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.2
  {
    sectionId: 'mano-ch3-s2',
    readingTime: 10,
    intro: 'Four variables is the workhorse map: sixteen cells in a four-by-four grid whose rows and columns both follow the reflected order. The new features are vertical wraparound (the top and bottom rows are neighbors, so the four corners form a legitimate quad) and richer essential-prime-implicant structure. This section fully minimizes the book’s classic $\\Sigma(0, 1, 2, 6, 8, 9, 10)$ and then a second function whose overlapping groups demonstrate the general strategy.',
    objectives: [
      'Construct the four-variable map and locate all sixteen minterms by row and column Gray codes',
      'Use horizontal and vertical wraparound, including the four-corner quad',
      'Minimize a four-variable function completely, identifying essential prime implicants',
      'Handle overlapping groups and multiple valid minimal covers',
    ],
    concepts: [
      {
        term: 'The four-variable map',
        kind: 'notation',
        statement: 'Rows are $AB$ in the order 00, 01, 11, 10 and columns are $CD$ in the same reflected order; cell indices: $$\\begin{array}{c|cccc} AB \\backslash CD & 00 & 01 & 11 & 10 \\\\ \\hline 00 & 0 & 1 & 3 & 2 \\\\ 01 & 4 & 5 & 7 & 6 \\\\ 11 & 12 & 13 & 15 & 14 \\\\ 10 & 8 & 9 & 11 & 10 \\end{array}$$',
        detail: 'Every row is adjacent to the rows above and below it in the **Gray** ordering (00–01, 01–11, 11–10) and the first and last rows (00 and 10) are adjacent too; likewise for columns. The corners — 0, 2, 8, 10 — share row-neighbors and column-neighbors pairwise, so they form a legal quad reading $B′D′$.',
      },
      {
        term: 'Wraparound adjacency',
        kind: 'law',
        statement: 'The map is topologically a **torus**: the left and right edges are adjacent, the top and bottom edges are adjacent, and the four corners are mutually adjacent in a two-by-two arrangement. A group may therefore be split visually across opposite edges as long as its cells form a connected rectangle on the torus.',
        detail: 'Common patterns: a column pair spanning rows 00 and 10 (a vertical wrap quad), a row pair spanning columns 00 and 10 (a horizontal wrap pair), and the corner quad $\\{0, 2, 8, 10\\}$ — which appears in the chapter’s first fully worked example below.',
      },
      {
        term: 'Essential prime implicants in four variables',
        kind: 'method',
        statement: 'The systematic read: (1) mark every 1-cell covered by **only one** possible group — that group is essential; (2) enter the essentials on the cover list; (3) for remaining uncovered 1s, choose the fewest, largest groups. A 1-cell in a corner or at an edge often forces a wraparound group.',
        detail: 'The discipline matters most here because four-variable maps admit plausible-but-suboptimal groupings: a quad that steals two cells from a would-be octet can leave stragglers that force an extra term. Essentials first, everything else second.',
      },
      {
        term: 'Overlapping groups are required, not tolerated',
        kind: 'insight',
        statement: 'Groups routinely overlap — a cell may belong to two or three groups — because each group’s job is to be as **large** as possible, and the largest groups through different cells intersect. Overlap is not waste: two overlapping quads can be cheaper than three disjoint pairs.',
        detail: 'The algebra behind it is the consensus theorem: two terms sharing cells make a third term redundant. On the map, the redundancy is visible as a cell pair covered from both sides — exactly what the second worked example shows.',
      },
      {
        term: 'Multiple minimal answers',
        kind: 'insight',
        statement: 'A function can have several distinct minimal SOP forms with the same number of terms and literals; the map makes the choices visible, and any of them is a correct design answer.',
        detail: 'This happens when two equal-sized groups both cover the last uncovered cells. The tabulation method (Section 3.5) exposes the same multiplicity in its prime implicant chart — several minimum covers of equal cost — and the designer simply picks one.',
      },
    ],
    examples: [
      {
        title: 'The book’s classic: F(A,B,C,D) = Σ(0, 1, 2, 6, 8, 9, 10)',
        problem: 'Minimize $F(A, B, C, D) = \\Sigma m(0, 1, 2, 6, 8, 9, 10)$ completely, identifying every essential prime implicant.',
        steps: [
          { label: 'Step 1: Place the 1s', text: 'Using the map layout: 1s at cells 0, 1, 2 (row 00, columns 00, 01, 10), cell 6 (row 01, column 10), and cells 8, 9, 10 (row 10, columns 00, 01, 10).' },
          { label: 'Step 2: Find the corner quad', text: 'Cells 0, 2, 8, 10 (the four corners) all hold 1s: across the quad, $A$ and $C$ vary while $B = 0$ and $D = 0$ — the group reads $B′D′$.' },
          { label: 'Step 3: Find the left-edge quad', text: 'Cells 0, 1, 8, 9 (columns 00 and 01 of rows 00 and 10) all hold 1s: $A$ and $D$ vary, $B = 0$, $C = 0$ — the group reads $B′C′$.' },
          { label: 'Step 4: Cover the straggler', text: 'Cell 6 (0110) remains. Its neighbors: cells 2 and 10 (both 1) form with it the wraparound trio in column 10 — but a legal group of {2, 6, 10} plus cell 14 (0, absent) fails; instead pair cell 6 with cell 2 (rows 00 and 01 of column 10): $A = 0$, $C = 1$, $D = 0$ — the term $ACD′$.' },
          { label: 'Step 5: Determine essentials', text: 'Cell 1 is covered only by the $B′C′$ quad (its other pair options need cell 3 or 5, which are 0) — $B′C′$ is essential. Cell 6 is covered only by the $ACD′$ pair (cell 7 is 0, cell 14 is 0) — essential. After these two, cells 0, 2, 8, 9, 10 are covered except cell 10, which the corner quad $B′D′$ uniquely serves among prime groups.' },
          { label: 'Step 6: Assemble and verify', text: '$F = B′D′ + B′C′ + ACD′$. Verify cell 10 (1010): $B′D′ = 1 \\cdot 1 = 1$ ✓. Verify cell 6 (0110): $ACD′ = 1$ ✓. Verify a 0-cell, say 7 (0111): $B′D′ = 0$ (B = 1), $B′C′ = 0$, $ACD′ = 0$ ($D = 1$) — correctly 0.' },
        ],
        result: '$F = B′D′ + B′C′ + ACD′$ — two quads (one of them the four-corner group) plus one essential pair: the complete essential-prime-implicant analysis in three terms and nine literals.',
      },
      {
        title: 'Overlapping groups across an octet',
        problem: 'Minimize $F(A, B, C, D) = \\Sigma m(0, 1, 2, 4, 5, 6, 8, 9, 12, 13, 14)$ with attention to group overlap.',
        steps: [
          { label: 'Step 1: Place the 1s', text: 'Eleven 1s: rows 00 and 01 nearly full (cells 0, 1, 2, 4, 5, 6), row 10 columns 00, 01 (cells 8, 9), and row 11 columns 00, 01, 10 (cells 12, 13, 14).' },
          { label: 'Step 2: Find the octet', text: 'Cells 0, 1, 4, 5, 8, 9, 12, 13 — columns 00 and 01 across **all four rows** — all hold 1s: $A$ and $B$ vary, while $C = 0$ everywhere in the group: the octet reads $C′$.' },
          { label: 'Step 3: Cover the remaining column-10 cells', text: 'Cells 2 and 6 (column 10, rows 00 and 01) are not in the octet (column 10 has $C = 1$). With cell 14 (row 11, column 10) the column-10 cells 2, 6, 14 are 1s but cell 10 is 0 — no column quad.' },
          { label: 'Step 4: Build the wrap quad for 2 and 6', text: 'Cells 0, 2, 4, 6 — row 00 and row 01 across the wrap columns 00 and 10 — all 1s: $A = 0$ throughout, $B$ and $C$ vary, $D = 0$: the quad reads $A′D′$, and it **overlaps** the octet at cells 0 and 4.' },
          { label: 'Step 5: Cover cell 14', text: 'Cell 14 (1110) remains; its best group is the pair with cell 12 (1100): $A = 1$, $B = 1$, $D = 0$ — term $ABD′$, overlapping the octet at cell 12.' },
          { label: 'Step 6: Assemble and check', text: '$F = C′ + A′D′ + ABD′$ — three terms, six literals. Coverage: octet handles 0, 1, 4, 5, 8, 9, 12, 13; $A′D′$ handles 2, 6; $ABD′$ handles 14. Cell 7 (0111) as a check: $C′ = 0$, $A′D′ = 0$ ($D = 1$), $ABD′ = 0$ — correctly 0.' },
        ],
        result: '$F = C′ + A′D′ + ABD′$ — an octet with two overlapping auxiliaries: eleven minterms compressed to six literals, demonstrating that overlap is how big groups coexist.',
      },
    ],
    keyTakeaways: [
      'Four-variable map: rows and columns in Gray order 00, 01, 11, 10; sixteen cells indexed 0–15 with corners at 0, 2, 8, 10.',
      'The map wraps on all four sides; the four corners form the quad $\\{0, 2, 8, 10\\}$, reading $B′D′$.',
      'Find essential prime implicants first (cells covered by only one possible group), then complete the cover with the fewest, largest groups.',
      'Overlapping groups are the norm for large covers: the octet-plus-overlaps pattern of $\\Sigma(0,1,2,4,5,6,8,9,12,13,14) = C′ + A′D′ + ABD′$ is the model.',
      'The classic worked function: $\\Sigma(0, 1, 2, 6, 8, 9, 10) = B′D′ + B′C′ + ACD′$.',
      'Multiple equally minimal answers are possible; the map exposes the choices rather than hiding them.',
    ],
    quiz: [
      {
        q: 'On a four-variable map, the four corner cells form a valid quad because:',
        options: ['Corners are exempt from the rules', 'The map wraps both horizontally and vertically, so the corners are mutually adjacent', 'They all have even minterm numbers', 'They differ in two variables'],
        answer: 1,
        explanation: 'Top and bottom rows are adjacent and left and right columns are adjacent, so cells 0, 2, 8, 10 differ pairwise in exactly one variable each — the group is legal and reads $B′D′$.',
      },
      {
        q: 'For $F = \\Sigma m(0, 1, 2, 6, 8, 9, 10)$, which term covers the 1-cell 6?',
        options: [`$B′C′$`, `$ACD′$`, `$B′D′$`, `$AB′C$`],
        answer: 1,
        explanation: 'Cell 6 (0110) pairs with cell 2 (0010) in column 10: $A = 0$, $C = 1$, $D = 0$ gives $ACD′$ — the only prime group reaching it, hence essential.',
      },
      {
        q: 'A pair, a quad and an octet in a four-variable map eliminate how many literals, respectively?',
        options: ['1, 2, 3', '2, 3, 4', '1, 2, 4', '0, 1, 2'],
        answer: 0,
        explanation: 'Each doubling of group size frees one more variable to vary inside the group: $2^{1}$ cells drop 1 literal, $2^{2}$ drop 2, $2^{3}$ drop 3 — this is why the largest groups come first.',
      },
      {
        q: 'In minimizing, why do we start with the largest possible groups?',
        options: ['Large groups use more gate inputs', 'A larger group eliminates more variables, producing fewer and shorter product terms', 'It is easier to draw', 'Don’t-cares require it'],
        answer: 1,
        explanation: 'A group of $2^{k}$ cells eliminates $k$ literals — cost falls monotonically with group size, so octets before quads before pairs, with essentials anchoring the cover.',
      },
    
      // PYQ-pattern: GATE 2019 — four-variable quad (rephrased)
      {
        q: "On a four-variable map, $F(A,B,C,D) = \\Sigma m(0,4,8,12)$. What is the minimal sum-of-products?",
        options: ["$B′D′$", "$C′D′$", "$A′C′$", "$CD$"],
        answer: 1,
        explanation: "**Step 1 — Given data:** minterms $0 = 0000$, $4 = 0100$, $8 = 1000$, $12 = 1100$.\n**Step 2 — Rule:** a quad of adjacent cells eliminates two variables; Gray order makes the four corners/column a valid group.\n**Step 3 — Grouping:** all four have $C = 0$, $D = 0$; $A$ takes both values ($0$ vs $8$, $4$ vs $12$) and $B$ takes both ($0$ vs $4$); term is $C′D′$.\n**Step 4 — Cross-check:** $C′D′$ is $1$ exactly on those four rows and $0$ elsewhere among the $16$.\n**Step 5 — Distractors:** $B′D′$ misses $4$ and $12$; $A′C′$ misses $8$ and $12$; $CD$ is the opposite corner.\n**Step 6 — Conclude:** $C′D′$."
      },
      // PYQ-pattern: ISRO 2020 — four-variable quad rows (rephrased)
      {
        q: "$F(A,B,C,D) = \\Sigma m(1,3,5,7)$. What is the minimal sum-of-products?",
        options: ["$A′C$", "$B′D$", "$A′D$", "$BD$"],
        answer: 2,
        explanation: "**Step 1 — Given data:** $1 = 0001$, $3 = 0011$, $5 = 0101$, $7 = 0111$.\n**Step 2 — Rule:** four in one half-map sharing two fixed literals form a quad.\n**Step 3 — Grouping:** all have $A = 0$, $D = 1$; $B$ and $C$ each take both values; term $A′D$.\n**Step 4 — Cross-check:** $A′D$ covers exactly the top-half odd rows.\n**Step 5 — Distractors:** $B′D$ would need $B = 0$ rows only; $A′C$ fixes the wrong variable; $BD$ sits in the lower half.\n**Step 6 — Conclude:** $A′D$."
      },
      // PYQ-pattern: DRDO 2016 — four-corner style block (rephrased)
      {
        q: "$F(A,B,C,D) = \\Sigma m(0,1,8,9)$. What is the minimal sum-of-products?",
        options: ["$C′D′$", "$B′C′$", "$A′D′$", "$B′D$"],
        answer: 1,
        explanation: "**Step 1 — Given data:** $0 = 0000$, $1 = 0001$, $8 = 1000$, $9 = 1001$.\n**Step 2 — Rule:** cells differing only in one variable pair into a quad across the map’s vertical seam.\n**Step 3 — Grouping:** all have $B = 0$, $C = 0$; $A$ and $D$ vary; term $B′C′$.\n**Step 4 — Cross-check:** map cells $(0,1)$ and $(8,9)$ are vertically adjacent pairs, jointly a quad.\n**Step 5 — Distractors:** $C′D′$ is the $0,4,8,12$ block; $A′D′$ misses $8,9$; $B′D$ fixes $D$ wrongly.\n**Step 6 — Conclude:** $B′C′$."
      }
    ],
  },

  // ------------------------------------------------------------------ 3.3
  {
    sectionId: 'mano-ch3-s3',
    readingTime: 9,
    intro: 'Five variables exceed what one flat map can show, so Mano splits the function into two four-variable maps — one for $A = 0$ and one for $A = 1$ — placed side by side as **mirrored** layers. Cells in the same position on the two maps are adjacent (they differ only in $A$), so groups can live within one layer or span both; a group spanning both layers drops the variable $A$ from its term. The worked example finds a cross-layer octet, a layer quad and shows the resulting three-term answer.',
    objectives: [
      'Set up a five-variable minimization as two mirrored four-variable maps',
      'Identify adjacency within layers and across the $A = 0$ / $A = 1$ boundary',
      'Form groups that span both layers and eliminate the $A$ variable',
      'Minimize a complete five-variable function and verify coverage of all its minterms',
    ],
    concepts: [
      {
        term: 'Two mirrored maps',
        kind: 'method',
        statement: 'A five-variable function $F(A, B, C, D, E)$ is drawn as **two four-variable maps**: the $A = 0$ map (cells 0–15) and the $A = 1$ map (cells 16–31), each with rows $BC$ and columns $DE$ in Gray order. The two maps are drawn side by side and treated as mirrored halves of one object.',
        detail: 'Within each map, all the four-variable adjacency rules apply (Gray rows/columns, wraparound, corners). The new relation is **between** maps: cell $i$ on the $A = 0$ map and cell $i + 16$ on the $A = 1$ map differ only in $A$.',
      },
      {
        term: 'Cross-layer adjacency',
        kind: 'law',
        statement: 'Two cells in the **same position** on opposite maps are adjacent — their minterms differ only in $A$ — so a valid group may include corresponding cells from both layers. A group lying entirely within one layer keeps $A$ (as $A$ or $A′$) in its term; a group spanning both layers **eliminates $A$**.',
        detail: 'Rule of thumb: first look for groups that occupy matching regions of both maps (they shed the $A$ literal), then handle leftover 1s with layer-local groups. All groups still must be power-of-two rectangles **within each layer**, with matching shapes across layers.',
      },
      {
        term: 'Layer-local terms keep A',
        kind: 'insight',
        statement: 'A group confined to the $A = 0$ map carries the literal $A′$; one confined to the $A = 1$ map carries $A$. These terms are the fallback when a 1-cell has no partner across the boundary.',
        detail: 'The mirror geometry makes the search easy: hold the $A = 1$ map up to the $A = 0$ map (mentally flip it over), and any region where both are 1s is a cross-layer group. What remains visible only on one side is a layer-local group.',
      },
      {
        term: 'The five-variable cell numbering',
        kind: 'notation',
        statement: 'Minterm indices run 0–15 on the $A = 0$ map and 16–31 on the $A = 1$ map: minterm $16 + i$ has the same $BCDE$ bits as minterm $i$ plus $A = 1$. E.g. minterm 13 (01101, $A′CE$ region) on the lower map corresponds to minterm 29 (11101) on the upper map.',
        detail: 'When listing $\\Sigma m$ indices, first split them at 16: each index below 16 goes on the lower-layer map at that index; each index $\\geq 16$ goes on the upper map at index $- 16$. The book’s worked five-variable example proceeds exactly this way.',
      },
      {
        term: 'Don’t-cares across layers',
        kind: 'method',
        statement: 'A d-cell on either layer may be treated as 1 to enlarge a group — including a **cross-layer** group, which then needs the d in the matching position on one or both maps. As always, d-cells are optional: use one only when it grows a group, and never cover a d that helps nothing.',
        detail: 'For example a d at 7 ($A = 0$) beside 1s at 5, 21 ($A = 1$, position 5) and 23 lets the $A′B′E$-style quad borrow the d to become a cross-layer group, while a d stranded with no 1-neighbors on either map is simply assigned 0 on both.',
      },
      {
        term: 'Six variables need four maps',
        kind: 'insight',
        statement: 'Six variables ($A, B$ selecting the map) require **four** four-variable maps — $AB = 00, 01, 11, 10$ in Gray order — with adjacency both within each map and between maps whose $AB$ codes differ in one bit. Groups may span two or four layers, eliminating one or both of $A, B$.',
        detail: 'Sixty-four cells is the practical visual limit: the four-map stack is error-prone by hand, which is why Mano closes the chapter with the Quine–McCluskey tabulation of Section 3.5 — the same adjacency rule as a bit-difference test, executed as a table that scales where pictures do not.',
      },
    ],
    examples: [
      {
        title: 'A complete five-variable minimization',
        problem: 'Minimize $F(A, B, C, D, E) = \\Sigma m(0, 1, 3, 4, 5, 7, 8, 12, 13, 15, 16, 20, 24, 28)$.',
        steps: [
          { label: 'Step 1: Split the minterms by layer', text: 'Lower map ($A = 0$): indices 0, 1, 3, 4, 5, 7, 8, 12, 13, 15. Upper map ($A = 1$): indices 16, 20, 24, 28 (subtract 16 → cells 0, 4, 8, 12).' },
          { label: 'Step 2: Scan for cross-layer groups', text: 'Look at columns $DE = 00$: the lower map has 1s at 0, 4, 8, 12 (rows 00, 01, 11, 10 of column 00), and the upper map has 1s at 16, 20, 24, 28 — the **same four positions**. Together: all eight cells with $D = 0, E = 0$ across both layers.' },
          { label: 'Step 3: Read the octet', text: 'Across those eight cells, $A$, $B$ and $C$ all vary; only $D = 0$ and $E = 0$ are constant — the group reads $D′E′$, a single term covering eight minterms including four on each layer.' },
          { label: 'Step 4: Locate remaining lower-layer 1s', text: 'Leftover lower-map 1s: 1, 3, 5, 7 (with 5, 7 also uncovered), specifically cells 1, 3, 5, 7 fill the $B = 0$, $E = 1$ region of the lower map — a quad within the $A = 0$ layer only: term $A′B′E$.' },
          { label: 'Step 5: Cover the deep corner cells', text: 'Still uncovered: cells 13 and 15 (01101, 01111) on the lower map. They pair with 5 and 7 in the $C = 1, E = 1$ region — a quad reading $A′CE$ (it overlaps the previous quad at cells 5 and 7).' },
          { label: 'Step 6: Assemble and verify coverage', text: '$F = D′E′ + A′B′E + A′CE$. Check: 0 ∈ octet ✓; 1 ∈ $A′B′E$ ✓; 3, 5, 7 ✓; 4, 8, 12 ∈ octet ✓; 13, 15 ∈ $A′CE$ ✓; 16, 20, 24, 28 ∈ octet ✓ — all fourteen minterms covered in three terms (ten literals).' },
        ],
        result: '$F = D′E′ + A′B′E + A′CE$ — one cross-layer octet plus two overlapping lower-layer quads: the full five-variable method in action.',
      },
      {
        title: 'Cross-layer octet plus a layer-local pair',
        problem: 'Minimize $F(A, B, C, D, E) = \\Sigma m(0, 1, 4, 5, 13, 15, 16, 17, 20, 21)$.',
        steps: [
          { label: 'Step 1: Split by layer', text: 'Lower map ($A = 0$): cells 0, 1, 4, 5, 13, 15. Upper map ($A = 1$): indices 16, 17, 20, 21 → positions 0, 1, 4, 5. The positions 0, 1, 4, 5 hold 1s on **both** maps.' },
          { label: 'Step 2: Form the cross-layer octet', text: 'Positions 0, 1, 4, 5 are rows $BC = 00, 01$ with columns $DE = 00, 01$: $B = 0$ and $D = 0$ constant, $A$, $C$, $E$ varying across the eight cells — the group reads $B′D′$ and covers 0, 1, 4, 5, 16, 17, 20, 21.' },
          { label: 'Step 3: Locate leftovers', text: 'Cells 13 (01101) and 15 (01111) on the lower map remain: both have $A = 0$, $B = 1$, $C = 1$, $E = 1$ and differ only in $D$ — a layer-local pair confined to $A = 0$.' },
          { label: 'Step 4: Read the pair', text: 'Within the pair $A = 0$, $B = 1$, $C = 1$, $E = 1$ are constant and only $D$ varies — the term is $A′BCE$. No upper-layer partner exists at position 13 or 15, so $A$ cannot be eliminated here.' },
          { label: 'Step 5: Verify', text: 'Check 0 ∈ $B′D′$ ✓; 13 ∈ $A′BCE$ ✓ ($0′·1·1·1 = 1$); check a 0-cell such as 8 (01000): $B′D′ = 1·1 = 1$? Wait $8 = 01000$: $B = 0$, $D = 0$ gives $B′D′ = 1$ — but 8 is not in the function! Recheck: cell 8 has $BC = 10$, so $B = 1$, not 0 — $B′ = 0$ and the term is correctly 0. The octet covers only rows $BC = 00, 01$.' },
        ],
        result: '$F = B′D′ + A′BCE$ — an eight-cell cross-layer group that sheds $A$, plus one two-cell lower-layer group that keeps $A′$: both layer geometries in a single ten-minterm function.',
      },
    ],
    keyTakeaways: [
      'Five variables = two mirrored four-variable maps: cells 0–15 with $A = 0$ and 16–31 with $A = 1$.',
      'Same-position cells on opposite maps are adjacent (differ only in $A$); groups spanning both maps eliminate $A$.',
      'Layer-local groups keep $A′$ (lower) or $A$ (upper) as a literal.',
      'Procedure: split the $\\Sigma m$ list at 16, find cross-layer groups first (they shed the $A$ literal), then cover leftovers within layers.',
      'Worked example to know: $\\Sigma m(0, 1, 3, 4, 5, 7, 8, 12, 13, 15, 16, 20, 24, 28) = D′E′ + A′B′E + A′CE$.',
      'Six variables needs four maps (or software) — the practical limit of the visual method, and the reason Section 3.5 exists.',
    ],
    quiz: [
      {
        q: 'In the two-map five-variable method, cells 5 (on the $A = 0$ map) and 21 (on the $A = 1$ map) are:',
        options: ['Non-adjacent — different maps', 'Adjacent, since they differ only in A', 'Adjacent only if they are both 1s', 'The same cell'],
        answer: 1,
        explanation: 'Cell 21 = 21 − 16 = position 5 on the upper map: the minterms are $00101$ and $10101$, differing only in $A$ — the mirror makes them neighbors regardless of their values.',
      },
      {
        q: 'A group occupying the same rectangle on BOTH the $A = 0$ and $A = 1$ maps produces a term that:',
        options: ['Contains both A and A′', 'Contains the literal A', 'Eliminates the A variable entirely', 'Is invalid — groups may not span layers'],
        answer: 2,
        explanation: 'Across the two layers, $A$ takes both values inside the group, so it cancels — the whole point of hunting cross-layer groups first.',
      },
      {
        q: 'In the worked function $\\Sigma m(0, 1, 3, 4, 5, 7, 8, 12, 13, 15, 16, 20, 24, 28)$, the cross-layer octet reads:',
        options: [`$A′CE$`, `$A′B′E$`, `$D′E′$`, `$BC′D$`],
        answer: 2,
        explanation: 'The eight cells with $D = 0, E = 0$ appear identically on both layers (0, 4, 8, 12 and 16, 20, 24, 28); every other variable varies, so the term is $D′E′$.',
      },
      {
        q: 'A group lying entirely on the $A = 1$ map has a term that:',
        options: ['Carries the literal A', 'Carries the literal A′', 'Eliminates A', 'Carries E′'],
        answer: 0,
        explanation: 'Within the upper layer $A$ is constant at 1, so it survives uncomplemented — layer-local groups are always one literal longer than cross-layer groups of the same shape.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.4
  {
    sectionId: 'mano-ch3-s4',
    readingTime: 9,
    intro: 'Sometimes the best product-of-sums is not obtained by simplifying the SOP. The map offers a second exit: group the 0-cells instead, read the groups as the **complement** function $F′$ in sum-of-products form, and complement the result by DeMorgan — the OR-sums turn into ANDs of sums, i.e. POS, directly. This section works the book’s classic POS example, then formalizes don’t-cares in both SOP and POS contexts, including the incompletely specified BCD example where six don’t-cares collapse a function to a single literal.',
    objectives: [
      'Simplify to POS by grouping the 0-cells and complementing via DeMorgan',
      'Decide between SOP and POS forms by comparing the two results',
      'Apply don’t-care conditions in both SOP and POS minimization',
      'Model incompletely specified functions and exploit them fully',
    ],
    concepts: [
      {
        term: 'POS from the map',
        kind: 'method',
        statement: 'Group the **0s** of the map exactly as if they were the 1s of a new function — this reads off $F′$ in SOP. Then complement by DeMorgan: each product term becomes a **sum** with each literal complemented, and the outer sum becomes a product: $F = (F′)′$ is a product of sums.',
        detail: 'Mechanics of the complement step: a group term like $AB$ (from $F′$) becomes the sum $(A′ + B′)$ in $F$; the AND of the group-terms in $F′$ becomes the AND of the resulting sums. Literal-by-literal complementation plus OR/AND swap is pure DeMorgan from Section 2.3.',
      },
      {
        term: 'When POS is the better answer',
        kind: 'insight',
        statement: 'When the 0s are fewer or more tightly clustered than the 1s, the $F′$ grouping is cheaper, and the resulting POS has fewer terms or literals than any SOP from the same map. Compare both readings before choosing the circuit form.',
        detail: 'The two-level circuit cost is symmetric: SOP needs AND gates into OR (AND-OR), POS needs OR gates into AND (OR-AND); whichever grouping is coarser wins. A function that is 1 everywhere except one cell famously reduces to a two-literal POS, e.g. all-1s-except-7 gives $F = A′ + B′ + C′$ in three variables.',
      },
      {
        term: 'Don’t-cares in POS',
        kind: 'method',
        statement: 'A d-cell may be used as a **0** to enlarge an $F′$ group (thus simplifying the POS), or as a 1, or ignored. The d’s partition freely between the two readings — each d is assigned wherever it helps, and never needs to be covered.',
        detail: 'On the map this is the same freedom as before: when grouping 1s, treat helpful d’s as 1s; when grouping 0s, treat (possibly different!) d’s as 0s. Each d makes its own choice in each reading — with one exception: the same d cannot be forced to both a 0 and a 1 in the **same** final function, but since only one of the two readings is implemented, no conflict arises.',
      },
      {
        term: 'Incompletely specified functions',
        kind: 'definition',
        statement: 'A function specified with don’t-cares — $F = \\Sigma m(\\ldots) + d(\\ldots)$ — is **incompletely specified**: for d-inputs any output is acceptable. Each assignment of the d’s defines one of $2^{d}$ **completely specified** functions, and any of them is a valid implementation.',
        detail: 'The standard source is input encoding: a BCD-input circuit never sees codes 10–15, so those six cells are d’s in every BCD design (the BCD-to-Gray converter of Section 4.1 and the excess-3 converter of Section 4.3 both exploit this). Other sources are unreachable states (Chapter 6) and outputs nobody reads.',
      },
      {
        term: 'SOP and POS of the same function',
        kind: 'law',
        statement: 'The SOP reading of the 1s and the POS reading of the 0s describe the **same function** on every specified cell: $F = \\Sigma(\\text{1-groups}) = \\Pi(\\text{0-group sums})$. The forms differ in gate structure, not in behavior.',
        detail: 'This is the geometric version of the $\\Sigma m / \\Pi M$ duality of Section 2.5: the 0-rows are the maxterm rows. Choosing SOP or POS is a technology decision — which two-level gate pattern the IC library or NAND/NOR discipline (Section 4.4) favors.',
      },
    ],
    examples: [
      {
        title: 'POS by grouping the zeros: the book’s classic',
        problem: 'Simplify $F(A, B, C, D) = \\Sigma m(0, 1, 2, 5, 8, 9, 10)$ as a product of sums.',
        steps: [
          { label: 'Step 1: Mark both populations', text: 'The 1s occupy cells 0, 1, 2, 5, 8, 9, 10 (seven cells); the 0s therefore occupy the remaining nine: 3, 4, 6, 7, 11, 12, 13, 14, 15 — a denser, more structured set on the right side of the map.' },
          { label: 'Step 2: Group the 0s as if they were 1s', text: 'Reading the 0-cells: quad 3, 7, 11, 15 (column 11): $C = 1, D = 1$ constant — term $CD$. Quad 12, 13, 14, 15 (row 11): term $AB$. Quad 4, 6, 12, 14 (columns 00 and 10 of rows 01 and 11): $B = 1, D = 0$ — term $BD′$.' },
          { label: 'Step 3: Read off F′', text: 'The three quads cover all nine 0s (with overlaps), so $F′ = AB + CD + BD′$ — an SOP in three terms and six literals.' },
          { label: 'Step 4: Complement with DeMorgan', text: '$F = (AB + CD + BD′)′ = (AB)′(CD)′(BD′)′ = (A′ + B′)(C′ + D′)(B′ + D)$: each product complements to a sum of complemented literals, and the outer sum becomes a product of those sums.' },
          { label: 'Step 5: Verify representative cells', text: 'Cell 0 (0000): all sums are 1 — $F = 1$ ✓ (it is a 1-cell). Cell 15 (1111): $A′ + B′ = 0$, so $F = 0$ ✓. Cell 5 (0101): $A′ + B′ = 1$, $C′ + D′ = 1$, $B′ + D = 1$ — $F = 1$ ✓ (cell 5 is a 1). Cell 7 (0111): $B′ + D = 1$ but $C′ + D′ = 0$ — $F = 0$ ✓.' },
          { label: 'Step 6: Compare with the SOP route', text: 'Grouping the seven 1s instead gives pairs and a quad (e.g. $B′C′$ quad plus wrap pairs) totalling three terms and more literals — the POS from the denser 0s wins here.' },
        ],
        result: '$F = (A′ + B′)(C′ + D′)(B′ + D)$, from $F′ = AB + CD + BD′$ — the canonical demonstration that grouping 0s answers POS questions.',
      },
      {
        title: 'Don’t-cares collapsing a function: the odd BCD digit',
        problem: 'A circuit receives BCD (valid inputs 0–9 only) and must output 1 for odd digits. Minimize $F(A, B, C, D) = \\Sigma m(1, 3, 5, 7, 9) + d(10, 11, 12, 13, 14, 15)$.',
        steps: [
          { label: 'Step 1: Place the specified values', text: 'On the four-variable map mark 1s at cells 1, 3, 5, 7, 9; mark 0s at cells 0, 2, 4, 6, 8; mark d’s at all ten-through-fifteen cells.' },
          { label: 'Step 2: Hunt the biggest group with d help', text: 'The 1s all lie in odd-numbered cells — the $D = 1$ columns (01 and 11). Their column partners in the d region: cells 11, 13, 15 are d’s and 9 is a 1; the d’s at 11, 13, 15 can join the group.' },
          { label: 'Step 3: Form the octet', text: 'Columns 01 and 11, all four rows: cells 1, 3, 5, 7 (the 1s) plus 9, 11, 13, 15 (one 1 and three d’s used as 1s) — eight cells with $A$, $B$, $C$ varying and only $D = 1$ constant.' },
          { label: 'Step 4: Read the term', text: 'The octet reads $D$ — a single literal covers all five specified 1s.' },
          { label: 'Step 5: Assign the unused d’s as 0', text: 'Cells 10, 12, 14 stay outside every group (assigned 0); this is fine — those inputs never occur in BCD. Verify the specified 0s: cells 0, 2, 4, 6, 8 all have $D = 0$, so $F = 0$ there ✓.' },
        ],
        result: '$F = D$ — five minterms plus six don’t-cares compress to one literal; the d’s are what make decimal arithmetic circuits small.',
      },
    ],
    keyTakeaways: [
      'POS route: group the 0s → read $F′$ as SOP → complement by DeMorgan (complement literals, swap AND/OR) → product of sums.',
      'The worked classic: $\\Sigma(0, 1, 2, 5, 8, 9, 10)$ gives $F′ = AB + CD + BD′$ and hence $F = (A′ + B′)(C′ + D′)(B′ + D)$.',
      'Choose SOP or POS by whichever population groups more coarsely — the two forms implement the same specified behavior.',
      'Don’t-cares may join 1-groups or 0-groups (or be ignored); each d chooses independently to minimize the implemented form.',
      'Incompletely specified function = a family of $2^{d}$ legitimate implementations; the minimizer picks the cheapest.',
      'BCD-input designs always carry six d’s; the odd-digit detector $\\Sigma m(1, 3, 5, 7, 9) + d(10\\ldots15)$ collapses to $F = D$.',
    ],
    quiz: [
      {
        q: 'Grouping the 0s of a map produces SOP terms for:',
        options: ['F directly', 'F′, which must then be complemented by DeMorgan', 'The don’t-cares', 'The maxterms of F′'],
        answer: 1,
        explanation: 'The 0-cells are the 1-cells of the complement function: grouping them yields $F′$ as a sum of products, and DeMorgan turns it into the product-of-sums $F$.',
      },
      {
        q: 'For $F = \\Sigma m(0, 1, 2, 5, 8, 9, 10)$, grouping the zeros gives which SOP for $F′$?',
        options: [`$AB + CD + BD′$`, `$B′D′ + B′C′ + ACD′$`, `$A′B′ + C′D′$`, `$AB + AC + BD$`],
        answer: 0,
        explanation: 'The three zero-quads read $CD$, $AB$ and $BD′$. Option B is the SOP of $F$ itself — the answer to the other minimization question on the same map.',
      },
      {
        q: 'A don’t-care cell in a POS minimization may be:',
        options: ['Treated only as a 1', 'Treated only as a 0', 'Used as a 0 to enlarge an $F′$ group (or as a 1, or ignored) — whichever simplifies', 'Never used at all'],
        answer: 2,
        explanation: 'The d imposes no output requirement: assigning it to whichever side enlarges a group is the whole trick — and different d’s can make different choices within one minimization.',
      },
      {
        q: 'The odd-BCD-digit function $\\Sigma m(1, 3, 5, 7, 9) + d(10, \\ldots, 15)$ minimizes to:',
        options: [`$D$`, `$A′B′D + BCD′$`, 'five minterms', `$A + B + C + D$`],
        answer: 0,
        explanation: 'With the three d’s 11, 13, 15 absorbed, the $D = 1$ columns form an octet whose only constant variable is $D$ — one literal replaces five minterms.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.5
  {
    sectionId: 'mano-ch3-s5',
    readingTime: 11,
    intro: 'Beyond five variables the map strains, and guessing gets expensive — so Mano ends the chapter with the tabulation method of Quine and McCluskey: a pencil-and-paper algorithm that generates every prime implicant by systematically combining minterms, then selects a minimal cover from a prime implicant chart. It is the map method with the geometry removed: the same adjacency rule, stated as a bit-difference test, executed as a table. This section works the method completely on the book’s own four-variable function.',
    objectives: [
      'Generate prime implicants by the two-column tabulation of minterms',
      'Build and read a prime implicant chart, identifying essential PIs',
      'Select a minimal cover after the essentials are chosen',
      'Decide when the tabulation method is preferable to the map',
    ],
    concepts: [
      {
        term: 'The tabulation method',
        kind: 'definition',
        statement: 'The **Quine–McCluskey method** finds all prime implicants of a function by repeatedly combining terms that differ in exactly one bit position, marking combined terms, and retaining the unmarked survivors; a **prime implicant chart** then selects a minimal set of PIs covering every minterm.',
        detail: 'It is algebraically identical to the map: combining $ABC + ABC′$ differs only in the $C$ position, exactly as adjacent cells do. The difference is bookkeeping — the table scales where the picture does not, and it is the ancestor of every logic-minimization program.',
      },
      {
        term: 'Grouping by number of 1s',
        kind: 'method',
        statement: 'List the minterms in a first column, **grouped by how many 1s their binary patterns contain**; a term can combine only with a term from the **next** group up (fewer 1s cannot match more 1s in a single-bit change). Combining replaces the differing bit with a dash and records both source indices.',
        detail: 'The grouping prunes the search: minterms in non-adjacent groups differ in two or more bits and can never combine. Each merged term is checked off; any term never checked off — because it combined into nothing larger — is a prime implicant.',
      },
      {
        term: 'The combining rule',
        kind: 'law',
        statement: 'Two terms combine when their patterns are **identical except for one position holding 0 in one and 1 in the other, with all dashes aligned**; the result copies the pattern with a dash in that position. Second-round combines require equal dash placements: $000-$ merges with $100-$ (differ in bit 0 only) but $000-$ will not merge with $0-01$.',
        detail: 'Aligned dashes are what guarantee the merged pair really covers four minterms formed by two original pairs — the tabular version of a map quad. Each round combines the previous round’s terms; the process stops when no column produces new merges.',
      },
      {
        term: 'The prime implicant chart',
        kind: 'method',
        statement: 'Draw a table of **PI rows × minterm columns** with an X wherever a PI covers that minterm. Any column with a **single X** marks an **essential prime implicant** (only it covers that minterm) — essential rows are selected first; then cover remaining columns with the fewest extra rows.',
        detail: 'After selecting essentials, cross out their rows’ columns; if columns remain, choose additional PIs so every remaining column is covered at least once — a set-cover problem, small enough by hand here, and the step where alternative minimal covers appear (multiple cheapest completions).',
      },
      {
        term: 'When to use tabulation instead of maps',
        kind: 'insight',
        statement: 'Prefer the map for up to five variables (it is faster by eye); prefer tabulation when (a) the function has **more than five variables**, (b) you need a **guaranteed** minimum rather than a plausible one, or (c) the procedure must be **programmed** — the algorithm, not the picture, is what software runs.',
        detail: 'The trade is effort versus certainty: the map relies on human pattern-spotting, which fails silently; the tabulation method is tedious but mechanical — exactly the property computers want. Its worst case is expensive (the chart’s set cover is hard in general), but for textbook-scale functions it is definitive.',
      },
    ],
    examples: [
      {
        title: 'Quine–McCluskey, start to finish',
        problem: 'Minimize $F(A, B, C, D) = \\Sigma m(0, 1, 2, 5, 6, 7, 8, 9, 10, 14)$ by the tabulation method.',
        steps: [
          { label: 'Step 1: Group the minterms by 1-count', text: 'Write each minterm in binary $ABCD$ and sort by number of 1s: group 0 ones: $0 = 0000$. Group 1 one: $1 = 0001$, $2 = 0010$, $8 = 1000$. Group 2 ones: $5 = 0101$, $6 = 0110$, $9 = 1001$, $10 = 1010$. Group 3 ones: $7 = 0111$, $14 = 1110$.' },
          { label: 'Step 2: First combining pass (pairs)', text: 'Combine adjacent groups where patterns differ in one bit: $0+1 = 000-$, $0+2 = 00{-}0$, $0+8 = -000$; $1+5 = 0{-}01$, $1+9 = -001$; $2+6 = 0{-}10$, $2+10 = -010$; $8+9 = 100-$, $8+10 = 10{-}0$; $5+7 = 01{-}1$, $6+7 = 011-$; $6+14 = -110$; $10+14 = 1{-}10$. Every merged pair is checked off its source.' },
          { label: 'Step 3: Second combining pass (quads)', text: 'Combine dash-aligned pairs into quads: $000-$ + $100{-} \\Rightarrow -00-$ covering $\\{0,1,8,9\\}$; $00{-}0$ + $10{-}0 \\Rightarrow -0{-}0$ covering $\\{0,2,8,10\\}$; $0{-}10$ + $1{-}10 \\Rightarrow --10$ covering $\\{2,6,10,14\\}$. No third-round merges exist (no octet patterns with matching dashes).' },
          { label: 'Step 4: Collect the prime implicants', text: 'Uncombined survivors: pairs $1{+}5 = 0{-}01$ ($A′C′D$), $1{+}9 = -001$ ($B′C′D$), $5{+}7 = 01{-}1$ ($A′BD$), $6{+}7 = 011{-}$ ($A′BC$); quads $-00{-}$ ($B′C′$), $-0{-}0$ ($B′D′$), $--10$ ($CD′$). Seven prime implicants in all.' },
          { label: 'Step 5: Build the chart', text: 'Rows = the seven PIs, columns = the ten minterms. $B′C′$ covers 0, 1, 8, 9; $B′D′$ covers 0, 2, 8, 10; $CD′$ covers 2, 6, 10, 14; $A′C′D$ covers 1, 5; $B′C′D$ covers 1, 9; $A′BD$ covers 5, 7; $A′BC$ covers 6, 7.' },
          { label: 'Step 6: Pick essentials', text: 'Column 14 has a single X — only $CD′$ covers it: **essential**. After crossing out 2, 6, 10, 14, the remaining columns are 0, 1, 5, 7, 8, 9. Column 5 is covered by $A′C′D$ or $A′BD$; column 7 by $A′BD$ or $A′BC$; taking $A′BD$ covers both 5 and 7 in one row.' },
          { label: 'Step 7: Complete the cover', text: 'Remaining columns 0, 1, 8, 9: $B′C′$ covers all four in one row (chosen over the pair-plus-quad alternatives). Every column is now covered: $F = CD′ + B′C′ + A′BD$.' },
        ],
        result: '$F = CD′ + B′C′ + A′BD$ — three terms, nine literals, found mechanically: seven PIs whittled to three via one essential and two covering choices.',
      },
      {
        title: 'Cross-checking the tabulation result against the map',
        problem: 'Verify $F = CD′ + B′C′ + A′BD$ for $\\Sigma m(0, 1, 2, 5, 6, 7, 8, 9, 10, 14)$ on the four-variable K-map.',
        steps: [
          { label: 'Step 1: Draw the quad for CD′', text: 'On the map, cells 2, 6, 10, 14 all lie in the $D = 0$ column-10 positions of rows 00, 01, 11, 10 — wait, all four have $C = 1, D = 0$ (column 10): the wraparound column quad reading $CD′$ — exactly the tabulation’s $--10$ term.' },
          { label: 'Step 2: Draw the quad for B′C′', text: 'Cells 0, 1, 8, 9 are rows 00 and 10 in columns 00 and 01: $B = 0, C = 0$ constant — the $B′C′$ quad, matching the $-00-$ term.' },
          { label: 'Step 3: Draw the pair for A′BD', text: 'Cells 5 and 7 (row 01, columns 01 and 11): $A = 0, B = 1, D = 1$ — the $A′BD$ pair, matching the $01{-}1$ term.' },
          { label: 'Step 4: Confirm full coverage', text: 'The three groups cover 2, 6, 10, 14 (quad), 0, 1, 8, 9 (quad) and 5, 7 (pair) — all ten minterms, no 0-cell included.' },
          { label: 'Step 5: Note the equivalence of methods', text: 'The map finds the same three terms by eye; the tabulation finds them by rule. Where the map relies on spotting the corner quad, the chart forced the same choice by making minterm 14 essential.' },
        ],
        result: 'Map and table agree: $F = CD′ + B′C′ + A′BD$ — the geometry and the algorithm are one method in two notations.',
      },
    ],
    keyTakeaways: [
      'Quine–McCluskey = the map method as an algorithm: combine terms differing in one bit with dashes aligned, until nothing merges; survivors are the prime implicants.',
      'Group minterms by 1-count to prune combining; each round combines the previous round’s terms (pairs → quads → octets).',
      'The prime implicant chart crosses PIs against minterms; single-X columns identify essential PIs; then cover the remainder with fewest rows.',
      'Fully worked classic: $\\Sigma m(0, 1, 2, 5, 6, 7, 8, 9, 10, 14)$ has seven PIs and the minimal cover $F = CD′ + B′C′ + A′BD$.',
      'Use maps up to five variables; use tabulation beyond five, when a guaranteed minimum is required, or when the minimization is to be programmed.',
      'Alternative minimal covers may exist (equal-cost selections in the chart’s final step) — all are correct answers.',
    ],
    quiz: [
      {
        q: 'Two product terms can be combined in the tabulation method when they:',
        options: ['Have the same number of literals and differ in exactly one bit position, with dashes aligned', 'Differ in two bit positions', 'Have the same minterm count', 'Are in the same 1-count group'],
        answer: 0,
        explanation: 'One differing bit is the tabular adjacency rule (the differing variable cancels); aligned dashes ensure the pair covers the same subcube, so quads form only from matching pairs.',
      },
      {
        q: 'A prime implicant chart column containing exactly one X indicates:',
        options: ['A redundant minterm', 'An essential prime implicant that must be included in the cover', 'A don’t-care condition', 'An error in the chart'],
        answer: 1,
        explanation: 'That minterm is covered by only one PI, so that PI is essential — it enters every valid cover, before any optimization choices are made.',
      },
      {
        q: 'For $\\Sigma m(0, 1, 2, 5, 6, 7, 8, 9, 10, 14)$, the tabulation method yields the minimal cover:',
        options: [`$CD′ + B′C′ + A′BD$`, `$B′D′ + B′C′D + A′BC$`, `$CD′ + B′D′ + A′C′D + A′BC$`, 'All of the above are minimal'],
        answer: 0,
        explanation: 'Essential $CD′$ (only cover of minterm 14), plus $A′BD$ for 5 and 7 and $B′C′$ for the 0-1-8-9 block: three terms, nine literals. The other listings cover the same function with four terms or worse.',
      },
      {
        q: 'The main reason to prefer tabulation over maps for large problems is:',
        options: ['It always finishes in one step', 'It is a mechanical algorithm with a guaranteed result, suitable for programming and more than five variables', 'It produces fewer prime implicants than maps', 'It does not require the truth table'],
        answer: 1,
        explanation: 'Maps depend on human pattern recognition that degrades past five variables; tabulation is a defined procedure — tedious by hand but exact, and the basis of automated minimizers.',
      },
    ],
  },
]
