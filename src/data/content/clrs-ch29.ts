import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Chapter 29: Linear Programming (Sections 29.1 – 29.5)
// ============================================================================

export const clrsCh29Content: SectionContent[] = [
  // ---------------------------------------------------------------- 29.1
  {
    sectionId: 'clrs-ch29-s1',
    readingTime: 6,
    intro: "Linear programming optimizes a linear objective over a polytope cut out by linear inequalities. The book's simplex machinery consumes a very specific syntax — standard form for stating the problem, slack form for computing — and this section builds both, together with the vocabulary of basic and nonbasic variables that every later section relies on.",
    objectives: [
      "State an LP in standard form: maximize $c^Tx$ subject to $Ax \\le b$, $x \\ge 0$",
      "Convert any LP (minimization, equalities, free variables) into standard form",
      "Introduce slack variables and read off the initial basic feasible solution",
      "Relate basic feasible solutions to vertices of the feasible polytope",
    ],
    concepts: [
      {
        term: 'Standard form',
        kind: 'definition',
        statement: "A linear program in **standard form** maximizes $\\sum_j c_j x_j$ subject to $\\sum_j a_{ij} x_j \\le b_i$ for $i = 1..m$, and $x_j \\ge 0$. In matrix notation: maximize $c^Tx$ s.t. $Ax \\le b$, $x \\ge 0$.",
        detail: "The form is a *wlog* convention: minimize becomes maximize by negating $c$; an equality $=$ splits into $\\le$ plus $\\ge$ (negate); a variable free in sign becomes $x = x^+ - x^-$ with $x^+, x^- \\ge 0$; $\\ge$ constraints become $\\le$ by negating both sides.",
      },
      {
        term: 'Slack form',
        kind: 'definition',
        statement: "Add a **slack variable** $x_{n+i} \\ge 0$ per constraint and write the system as $x_{n+i} = b_i - \\sum_j a_{ij} x_j$. The objective becomes $z = v + \\sum_{j \\in N} \\bar{c}_j x_j$ over the **nonbasic** set $N$; the **basic** set $B$ holds one variable per equation. A **basic solution** sets all nonbasic variables to 0; it is **feasible** when every basic value is then $\\ge 0$.",
        detail: "Slack form is a *bookkeeping format*: the equation for a basic variable always solves for it in terms of the nonbasics, and the tableau is just the coefficient array of this system.",
      },
      {
        term: 'The running example',
        kind: 'insight',
        statement: "Maximize $3x_1 + x_2 + 2x_3$ subject to $x_1 + x_2 + 3x_3 \\le 30$, $2x_1 + 2x_2 + 5x_3 \\le 24$, $4x_1 + x_2 + 2x_3 \\le 36$, $x \\ge 0$. In slack form: $x_4 = 30 - x_1 - x_2 - 3x_3$, $x_5 = 24 - 2x_1 - 2x_2 - 5x_3$, $x_6 = 36 - 4x_1 - x_2 - 2x_3$, $z = 0 + 3x_1 + x_2 + 2x_3$.",
        detail: "The initial BFS is transparent here: $N = \\{x_1, x_2, x_3\\}$ (all zero), $B = \\{x_4, x_5, x_6\\} = (30, 24, 36)$ — feasible because all $b_i \\ge 0$. Sections 29.3–29.5 will carry this LP all the way to its optimum $z^* = 28$ at $(8, 4, 0)$.",
      },
      {
        term: 'Geometry of the feasible region',
        kind: 'insight',
        statement: "The feasible set is a convex polytope: intersections of half-spaces. If the LP is feasible and bounded, an optimal solution exists at a **vertex** — and vertices correspond exactly to basic feasible solutions, which is what simplex walks.",
        detail: "A vertex is where $n$ linearly independent constraints are tight; in slack form that says exactly 'the nonbasic variables (at their zero bounds) number $n$'. Degenerate vertices arise when more than $n$ constraints meet — several bases describe one vertex.",
      },
      {
        term: 'Feasible versus basic feasible',
        kind: 'definition',
        statement: 'Feasible means satisfying all constraints; basic feasible means feasible with at most $m$ positive variables (at a vertex: $n$ nonbasics at $0$). Simplex walks basic feasible solutions: every step is a vertex, every pivot an edge.',
        detail: 'The running example’s optimum $(x_1,x_2) = (2,6)$? Actually $(8/3?)$: wherever it sits, it is a vertex where two constraints bind, hence basic. Interior feasible points are never simplex stops.',
      },
    ],
    examples: [
      {
        title: 'Converting an awkward LP to standard form',
        problem: "Put the following into standard form: minimize $2x_1 - x_2$ subject to $x_1 + x_2 = 7$, $x_1 \\ge 2$, and $x_2$ free in sign.",
        steps: [
          { label: 'Step 1: Flip the objective', text: "Minimizing $2x_1 - x_2$ is maximizing $-2x_1 + x_2$; the optimal point is unchanged." },
          { label: 'Step 2: Split the equality', text: "$x_1 + x_2 = 7$ becomes $x_1 + x_2 \\le 7$ and $-(x_1 + x_2) \\le -7$." },
          { label: 'Step 3: Handle the lower bound', text: "Substitute $y_1 = x_1 - 2 \\ge 0$, so the constraint $x_1 \\ge 2$ disappears into the substitution." },
          { label: 'Step 4: Kill the free variable', text: "Write $x_2 = x_2^+ - x_2^-$ with both parts $\\ge 0$. The program is now: maximize $-2y_1 + x_2^+ - x_2^-$ subject to $y_1 + x_2^+ - x_2^- \\le 5$, $-y_1 - x_2^+ + x_2^- \\le -5$, all variables $\\ge 0$." },
        ],
        result: 'Every LP, however stated, folds into the one standard shape that simplex expects.',
      },
      {
        title: 'Slack form of two inequalities',
        problem: 'Convert $\\max 3x_1 + x_2$ s.t. $x_1 + x_2 \\le 4$, $x_1 \\le 2$, $x \\ge 0$ to slack form.',
        steps: [
          { label: 'Slacks', text: '$x_1 + x_2 + s_1 = 4$, $x_1 + s_2 = 2$ with $x_1,x_2,s_1,s_2 \\ge 0$. Objective $z = 3x_1 + x_2$.' },
          { label: 'Basic solution', text: 'Nonbasics $x_1 = x_2 = 0$: basics $s_1 = 4$, $s_2 = 2$: vertex $(0,0)$.' },
          { label: 'Nonnegativity', text: '$b = [4,2] \\ge 0$: initial BFS available; negative $b$ would need auxiliary LP (Section 29.5).' },
          { label: 'Geometry', text: 'Slacks measure distance to each wall: $s_1 = 0$ on $x_1+x_2 = 4$, $s_2 = 0$ on $x_1 = 2$.' },
        ],
        result: 'Slack form $x_1+x_2+s_1 = 4$, $x_1+s_2 = 2$, $z = 3x_1+x_2$: BFS $(0,0,4,2)$ at the origin vertex.',
      },
    ],
    keyTakeaways: [
      "Standard form: maximize $c^Tx$ with $Ax \\le b$, $x \\ge 0$ — reachable from any LP by negation and substitution.",
      "Slack variables turn inequalities into equations; the basic/nonbasic split plus 'nonbasics = 0' defines basic solutions.",
      "A basic solution is feasible iff all basic values come out nonnegative.",
      "Vertices of the polytope = basic feasible solutions; simplex moves along edges from vertex to vertex.",
    ],
    quiz: [
      {
        q: "In slack form, a basic solution is obtained by:",
        options: ["setting all basic variables to zero", "setting all nonbasic variables to zero and reading each basic variable off its equation", "solving the system by Gaussian elimination", "setting all slack variables to zero"],
        answer: 1,
        explanation: "Nonbasic variables sit at their bounds (0); each basic variable then has a determined value from its own slack-form equation. Feasibility additionally demands these values be nonnegative.",
      },
      {
        q: "To convert the constraint $x_1 \\ge 2$ into standard form you would write:",
        options: ["$x_1 \\le -2$", "$-x_1 \\le -2$", "$x_1 + s = 2$ with $s \\ge 0$", "drop it"],
        answer: 1,
        explanation: "Multiplying by $-1$ flips the inequality direction: $x_1 \\ge 2 \\iff -x_1 \\le -2$, which is a legal standard-form row.",
      },
      {
        q: "For the running LP, the initial BFS $(x_4, x_5, x_6) = (30, 24, 36)$ is feasible because:",
        options: ["the objective is positive there", "all basic values are nonnegative when the nonbasics are zero", "all slack variables are basic", "the polytope is bounded"],
        answer: 1,
        explanation: "Feasibility of a basic solution = nonnegativity of the values induced on the basic variables; here $b = (30,24,36) \\ge 0$ makes the origin vertex feasible.",
      },
    ],
  },

  // ---------------------------------------------------------------- 29.2
  {
    sectionId: 'clrs-ch29-s2',
    readingTime: 7,
    intro: "The art of linear programming is translation: recognizing that shortest paths, maximum flows, production plans, and countless scheduling puzzles are all polytopes in disguise. Once a problem speaks standard form, a single general engine — simplex, or a polynomial-time interior-point method — solves it exactly.",
    objectives: [
      "Translate an optimization story into variables, objective and constraints",
      "Formulate single-pair shortest paths as an LP",
      "Formulate max flow as an LP with capacity and conservation constraints",
      "Solve a two-variable production LP geometrically",
    ],
    concepts: [
      {
        term: 'The modeling recipe',
        kind: 'method',
        statement: "Name the **decision variables** (what you can choose, with units), write the **objective** as their linear combination, list every limit as a linear **constraint**, and append nonnegativity where quantities are physical. If a quantity could be negative (profit, flow direction), split it into $x^+ - x^-$.",
        detail: "Most modeling errors are unit errors: every constraint row should dimension-check (hours to hours, tons to tons).",
      },
      {
        term: 'Shortest paths as an LP',
        kind: 'method',
        statement: "For a directed graph with weights $w_{uv}$, send one unit of flow from $s$ to $t$: minimize $\\sum_{(u,v)} w_{uv} x_{uv}$ subject to flow conservation $\\sum_{v} x_{uv} - \\sum_v x_{vu} = 1$ for $u = s$, $= -1$ for $u = t$, $= 0$ otherwise, and $0 \\le x_{uv} \\le 1$. An optimal BFS picks an integral solution — a shortest path.",
        detail: "The polytope is integral (its vertices are 0/1 flows) because the constraint matrix is a network matrix — the LP relaxation already solves the combinatorial problem exactly.",
      },
      {
        term: 'Max flow as an LP',
        kind: 'method',
        statement: "Maximize $\\sum_v f_{sv}$ subject to capacity $0 \\le f_{uv} \\le c_{uv}$ on every edge and conservation $\\sum_u f_{uv} = \\sum_w f_{vw}$ at every internal vertex $v$. The LP optimum equals the capacity of a minimum cut — LP duality reproves the max-flow min-cut theorem (Section 29.4).",
        detail: "Here too the vertices are integral, so the LP computes an exact maximum flow without any combinatorial algorithm.",
      },
      {
        term: 'Why model as an LP at all',
        kind: 'insight',
        statement: "One general solver captures every problem in the family: simplex in practice, ellipsoid and interior-point methods in guaranteed polynomial time. Modelling replaces algorithm design with translation — and duality (29.4) then gifts you sensitivity analysis for free.",
        detail: "The trade: LP solvers ignore combinatorial structure, so specialized algorithms can beat them on huge structured instances — but for one-off or rapidly changing models, the LP route wins on flexibility.",
      },
      {
        term: 'Objective as cost vector $c$',
        kind: 'notation',
        statement: 'Standard form $\\max c^T x$ s.t. $Ax \\le b$, $x \\ge 0$ packs the objective into $c$: $c_j$ is the per-unit profit of $x_j$. Shortest-path LP has $c$ selecting $d_t$; max-flow LP has $c$ summing out of $s$; production LP has $c$ as prices.',
        detail: 'Modeling is choosing $x$, $A$, $b$, $c$ so the polytope’s vertices are the combinatorial objects (paths, flows, plans) and $c$ ranks them: the LP optimum is then the combinatorial optimum.',
      },
    ],
    examples: [
      {
        title: 'A production plan, solved on the corner points',
        problem: "A workshop makes desks ($x_1$) and chairs ($x_2$). A desk needs 1 hour of assembly and 3 hours of finishing; a chair needs 2 and 2. Assembly has 40 hours, finishing 60. Profit is 20 per desk, 30 per chair. Maximize profit.",
        steps: [
          { label: 'Step 1: Write the LP', text: "Maximize $20x_1 + 30x_2$ subject to $x_1 + 2x_2 \\le 40$ (assembly), $3x_1 + 2x_2 \\le 60$ (finishing), $x_1, x_2 \\ge 0$." },
          { label: 'Step 2: List the vertices of the polytope', text: "Intersections of the binding constraints: $(0,0)$ with $z = 0$; $(20, 0)$ (finishing tight) with $z = 400$; $(0, 20)$ (assembly tight) with $z = 600$; and the intersection of both resource lines." },
          { label: 'Step 3: Solve the binding pair', text: "$x_1 + 2x_2 = 40$ and $3x_1 + 2x_2 = 60$: subtracting gives $2x_1 = 20$, so $x_1 = 10$, $x_2 = 15$. Check: $10 + 30 = 40$ ✓, $30 + 30 = 60$ ✓." },
          { label: 'Step 4: Compare objective values', text: "$z(10, 15) = 200 + 450 = 650$, beating 600 and 400 — the optimum sits at the vertex where both resources are exhausted simultaneously." },
        ],
        result: 'Make 10 desks and 15 chairs for profit 650: a preview of how simplex only ever needs the vertices.',
      },
      {
        title: 'Two constraints from one conservation law',
        problem: "Formulate the LP relaxation of the single-pair shortest path from $s$ to $t$ on edges $(s,a), (a,t), (s,t)$ with weights 3, 4, 5, and read off its meaning.",
        steps: [
          { label: 'Step 1: Variables', text: "$x_{sa}, x_{at}, x_{st} \\in [0, 1]$: how much of the unit of flow uses each edge." },
          { label: 'Step 2: Conservation', text: "At $s$: $x_{sa} + x_{st} = 1$ (one unit leaves). At $a$: $x_{sa} = x_{at}$ (whatever enters leaves). At $t$: $x_{at} + x_{st} = 1$ (one unit arrives)." },
          { label: 'Step 3: Objective', text: "Minimize $3x_{sa} + 4x_{at} + 5x_{st}$. Substituting $x_{at} = x_{sa}$: minimize $7x_{sa} + 5x_{st}$ with $x_{sa} + x_{st} = 1$ — the path $s\\!-\\!a\\!-\\!t$ costs 7 versus 5 direct." },
          { label: 'Step 4: Read the optimum', text: "The minimum $5$ is attained at $x_{st} = 1$, $x_{sa} = x_{at} = 0$: the LP's optimal vertex *is* the shortest path $s \\to t$." },
        ],
        result: 'Flow conservation plus 0/1 bounds produces a polytope whose vertices are paths — the LP solves the graph problem.',
      },
    ],
    keyTakeaways: [
      "Modeling = decision variables, linear objective, linear constraints, nonnegativity; free quantities split as $x^+ - x^-$.",
      "Shortest path: minimize $\\sum w_{uv} x_{uv}$ with one unit of flow conserved from $s$ to $t$, $0 \\le x \\le 1$.",
      "Max flow: maximize total outflow of $s$ under capacities and conservation; duality proves max-flow min-cut.",
      "Network LPs are integral — their vertices are the combinatorial objects, so exact answers fall out of the general solver.",
    ],
    quiz: [
      {
        q: "In the shortest-path LP, the constraints $\\sum_v x_{uv} - \\sum_v x_{vu} = 1$ for $u = s$ (0 at internal nodes, −1 at $t$) express:",
        options: ["edge capacities", "flow conservation of a single unit traveling from s to t", "nonnegativity", "the triangle inequality"],
        answer: 1,
        explanation: "One unit appears at the source, disappears at the sink, and is neither created nor destroyed anywhere else — that is conservation.",
      },
      {
        q: "The production LP of the example has optimum at the vertex where both resource lines meet because:",
        options: ["the objective is parallel to neither constraint", "an LP optimum over a bounded polytope is attained at a vertex, and the best vertex here is that intersection", "simplex prefers balanced solutions", "interior points are infeasible"],
        answer: 1,
        explanation: "Linear objectives on polytopes attain optima at vertices; comparing the four candidate vertices identifies $(10, 15)$ as best.",
      },
      {
        q: "Which feature lets network LPs return integral (0/1) optima without any rounding step?",
        options: ["their objective vectors are nonnegative", "their constraint matrices are network (totally unimodular) matrices, making every vertex integral", "the number of constraints is even", "the feasible region is unbounded"],
        answer: 1,
        explanation: "Total unimodularity makes every basis inverse integral, so basic solutions — including the optimum — are integral automatically.",
      },
    ],
  },

  // ---------------------------------------------------------------- 29.3
  {
    sectionId: 'clrs-ch29-s3',
    readingTime: 9,
    intro: "Simplex is a local search over vertices: pick a nonbasic variable whose objective coefficient promises improvement, slide along an edge until some basic variable hits zero, and re-express. The tableau is the bookkeeping; the ratio test chooses the leaving variable; Bland's rule keeps the walk from ever cycling back.",
    objectives: [
      "Execute a pivot: entering variable, ratio test, leaving variable, tableau update",
      "Trace simplex on the running LP to its optimum",
      "Define degeneracy and explain how cycling can occur",
      "State Bland's rule and the Klee–Minty caveat on worst-case running time",
    ],
    concepts: [
      {
        term: 'The pivot',
        kind: 'method',
        statement: "In slack form $z = v + \\sum_{j \\in N} \\bar{c}_j x_j$, pick an entering variable $x_e$ with $\\bar{c}_e > 0$ (increasing it improves $z$). The **ratio test** finds the tightest limit: $\\Delta = \\min_{i: a_{ie} > 0} b_i / a_{ie}$ over the equations of basic variables; the argmin **leaves** the basis at value 0. Rewrite the leaving variable's equation to solve for $x_e$ and substitute everywhere — one **pivot**.",
        detail: "Geometrically: move along one edge of the polytope (only $x_e$ changes among nonbasics) until a constraint blocks further motion; the blocking constraint's slack enters the nonbasic set at zero.",
      },
      {
        term: 'The tableau',
        kind: 'notation',
        statement: "The tableau stacks the slack-form equations as a grid: one row per basic variable plus the objective row $z - \\sum \\bar c_j x_j = v$. Entering-column entries are the substitution coefficients; the $b$ column holds the current basic values.",
        detail: "Each pivot modifies only the rows whose entering coefficient is nonzero — elementary row operations in disguise, exactly like one step of Gaussian elimination.",
      },
      {
        term: 'Degeneracy and cycling',
        kind: 'insight',
        statement: "A BFS is **degenerate** when some basic variable sits at 0. The ratio test can then give $\\Delta = 0$: the pivot changes the basis but not the point. If bases repeat, simplex **cycles** and never terminates.",
        detail: "Cycling needs degeneracy as a necessary condition; it is rare in practice but real — the fix is a deterministic tie-breaking rule with a termination proof.",
      },
      {
        term: "Bland's rule",
        kind: 'theorem',
        statement: "**Bland's rule:** always enter the *lowest-indexed* eligible nonbasic, and break ratio ties by the lowest-indexed leaving variable. With Bland's rule simplex never repeats a basis, hence terminates.",
        detail: "The proof is a clever minimal-counterexample argument about the set of variables that ever both enter and leave. Other common rules (Dantzig's most-negative coefficient) are faster in practice but not cycle-proof.",
      },
      {
        term: 'Worst-case behavior',
        kind: 'insight',
        statement: "Klee and Minty built deformed cubes on which simplex visits $2^n - 1$ vertices: exponential worst case. Yet average-case and smoothed analyses, plus decades of practice, keep simplex the default — and the ellipsoid and interior-point methods decide LPs in polynomial time if guarantees are needed.",
        detail: "This is a central lesson of the book: practical dominance and worst-case optimality are different virtues.",
      },
    ],
    figures: [
      {
        caption: 'The initial tableau of the running LP, mid-decision. The entering column $x_1$ (amber) is chosen for the most negative objective coefficient $-3$; the leaving row is picked by the **ratio test** $b_i / a_{i1}$: $30/1 = 30$, $24/2 = 12$, $36/4 = 9$ — the minimum 9 marks $x_6$ (teal row) as leaving. The pivot element $4$ (ringed) divides the leaving row; the new BFS has $x_1 = 9$, $x_4 = 21$, $x_5 = 6$, $z = 27$. One more pivot (on $x_2$, with $x_5$ leaving at ratio 4) reaches the optimum $z = 28$ at $(8, 4, 0)$.',
        svg: '<svg viewBox="0 0 720 350" width="100%" role="img" aria-label="Simplex tableau with entering column, ratio test and pivot element marked"><text x="20" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" font-weight="600">Initial tableau — choosing the first pivot</text><rect x="160" y="50" width="70" height="254" fill="#f59e0b" fill-opacity="0.12"/><rect x="90" y="248" width="620" height="56" fill="#14b8a6" fill-opacity="0.1"/><g stroke="currentColor" stroke-width="1"><line x1="90" y1="80" x2="710" y2="80"/><line x1="90" y1="136" x2="710" y2="136"/><line x1="90" y1="192" x2="710" y2="192"/><line x1="90" y1="248" x2="710" y2="248"/><line x1="90" y1="304" x2="710" y2="304"/><line x1="90" y1="50" x2="710" y2="50"/><line x1="90" y1="50" x2="90" y2="304"/><line x1="160" y1="50" x2="160" y2="304"/><line x1="230" y1="50" x2="230" y2="304"/><line x1="300" y1="50" x2="300" y2="304"/><line x1="370" y1="50" x2="370" y2="304"/><line x1="440" y1="50" x2="440" y2="304"/><line x1="510" y1="50" x2="510" y2="304"/><line x1="580" y1="50" x2="580" y2="304"/><line x1="650" y1="50" x2="650" y2="304"/><line x1="710" y1="50" x2="710" y2="304"/></g><g font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle"><text x="125" y="71">basic</text><text x="195" y="71" fill="#f59e0b" font-weight="600">x₁</text><text x="265" y="71">x₂</text><text x="335" y="71">x₃</text><text x="405" y="71">x₄</text><text x="475" y="71">x₅</text><text x="545" y="71">x₆</text><text x="615" y="71">b</text><text x="680" y="71">b/a</text></g><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="125" y="119">z</text><text x="195" y="119" fill="#f59e0b" font-weight="600">−3</text><text x="265" y="119">−1</text><text x="335" y="119">−2</text><text x="405" y="119">0</text><text x="475" y="119">0</text><text x="545" y="119">0</text><text x="615" y="119">0</text><text x="680" y="119">—</text><text x="125" y="175">x₄</text><text x="195" y="175">1</text><text x="265" y="175">1</text><text x="335" y="175">3</text><text x="405" y="175">1</text><text x="475" y="175">0</text><text x="545" y="175">0</text><text x="615" y="175">30</text><text x="680" y="175">30</text><text x="125" y="231">x₅</text><text x="195" y="231">2</text><text x="265" y="231">2</text><text x="335" y="231">5</text><text x="405" y="231">0</text><text x="475" y="231">1</text><text x="545" y="231">0</text><text x="615" y="231">24</text><text x="680" y="231">12</text><text x="125" y="287" fill="#14b8a6" font-weight="600">x₆</text><text x="195" y="287" font-weight="700">4</text><text x="265" y="287">1</text><text x="335" y="287">2</text><text x="405" y="287">0</text><text x="475" y="287">0</text><text x="545" y="287">1</text><text x="615" y="287">36</text><text x="680" y="287" fill="#14b8a6" font-weight="700">9</text></g><circle cx="195" cy="282" r="15" fill="none" stroke="#f59e0b" stroke-width="2.5"/><path d="M 195 267 l -6 -10 l 12 0 z" fill="#f59e0b"/><line x1="195" y1="112" x2="195" y2="97" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/><text x="330" y="106" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b">entering: most negative z-row entry</text><line x1="700" y1="282" x2="706" y2="282" stroke="#14b8a6" stroke-width="1.5" stroke-dasharray="3 3"/><text x="680" y="322" font-family="ui-sans-serif, system-ui" font-size="11" fill="#14b8a6" text-anchor="middle">leaving: min ratio</text><text x="195" y="336" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">pivot = 4</text><text x="475" y="336" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">rows of slack-form equations, one pivot = one elimination step</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Two pivots from origin to optimum',
        problem: "Run simplex on the running LP (maximize $3x_1 + x_2 + 2x_3$) from the initial tableau of the figure to the optimal vertex.",
        steps: [
          { label: 'Step 1: First pivot — $x_1$ enters', text: "The z-row $z - 3x_1 - x_2 - 2x_3 = 0$ has most negative entry $-3$ on $x_1$. Ratio test on the $x_1$ column: $30/1 = 30$, $24/2 = 12$, $36/4 = 9$ → $x_6$ leaves at $x_1 = 9$." },
          { label: 'Step 2: Re-express and read the new BFS', text: "Substituting $x_1 = 9 - \\frac14 x_2 - \\frac12 x_3 - \\frac14 x_6$ everywhere: $z = 27 + \\frac14 x_2 + \\frac12 x_3 - \\frac34 x_6$, with $x_4 = 21$, $x_5 = 6$. Both coefficients on nonbasics $x_2, x_3$ are positive — more improvement available." },
          { label: 'Step 3: Second pivot — $x_2$ enters', text: "Ratios in the $x_2$ column: $x_4$: $21/(3/4) = 28$; $x_5$: $6/(3/2) = 4$; $x_1$: $9/(1/4) = 36$ → $x_5$ leaves at $x_2 = 4$." },
          { label: 'Step 4: Verify optimality', text: "After pivoting, $z = 28 - \\frac16 x_3 - \\frac16 x_5 - \\frac23 x_6$ — every coefficient nonpositive, so no edge improves: the optimum is $z^* = 28$ at $(x_1, x_2, x_3) = (8, 4, 0)$ with $x_4 = 18$ (30 − 12) still slack in the first constraint." },
        ],
        result: 'Vertex sequence $(0,0,0) \\to (9,0,0) \\to (8,4,0)$ with $z$: $0 \\to 27 \\to 28$ — two edges of the polytope.',
      },
      {
        title: 'A degenerate pivot that goes nowhere',
        problem: "Explain how the ratio test can produce a zero-length step even when the entering coefficient is positive.",
        steps: [
          { label: 'Step 1: Set up', text: "Suppose some basic variable $x_B$ has current value $b_B = 0$ (the BFS is degenerate) and a positive coefficient in the entering column." },
          { label: 'Step 2: Ratio test', text: "Its ratio $0 / a = 0$ wins the minimum, so it leaves the basis and the entering variable enters at value $\\Delta = 0$: the point does not move." },
          { label: 'Step 3: The danger', text: "The basis changed while $z$ did not; a second degenerate pivot can return to a previously seen basis — cycling. With Bland's rule (lowest-index entering, lowest-index leaving on ties) no basis ever repeats, so termination is guaranteed." },
        ],
        result: 'Degeneracy is common (it just means $> n$ constraints through one vertex); cycling is the pathology, Bland the cure.',
      },
    ],
    keyTakeaways: [
      "A pivot: choose an entering nonbasic with positive objective coefficient, ratio-test for the leaving basic, re-express the slack form.",
      "The tableau is the slack form as a grid; pivoting is Gaussian elimination on it.",
      "Degenerate BFS values of 0 allow zero-length pivots; cycling is possible without a tie-breaking rule — Bland's rule guarantees termination.",
      "Simplex is exponential in the worst case (Klee–Minty cubes) yet fast in practice; interior-point methods give polynomial guarantees.",
    ],
    quiz: [
      {
        q: "In the first pivot of the example, $x_6$ leaves because:",
        options: ["it has the largest coefficient in the $x_1$ column", "its row attains the minimum ratio $b_i / a_{i1} = 36/4 = 9$", "it is the last slack variable", "its value is zero"],
        answer: 1,
        explanation: "The ratio test bounds how far the entering variable can grow: the first basic variable to hit 0 is $x_6$, at ratio 9, so it leaves the basis.",
      },
      {
        q: "A slack form $z = 28 - \\frac16 x_3 - \\frac16 x_5 - \\frac23 x_6$ certifies optimality because:",
        options: ["all basic values are positive", "every nonbasic coefficient is nonpositive, so no edge direction improves the objective", "the tableau is degenerate", "the basis is triangular"],
        answer: 1,
        explanation: "Raising any nonbasic from 0 only subtracts from $z$; with feasibility intact, the current vertex is a local (hence global) optimum.",
      },
      {
        q: "Bland's rule prevents cycling by:",
        options: ["always taking the largest possible step", "a deterministic lowest-index choice of entering and leaving variables, which makes basis repetition impossible", "perturbing the right-hand side", "restarting from a random vertex"],
        answer: 1,
        explanation: "The fixed-index tie-break gives a potential argument under which no basis can repeat — simplex then terminates after finitely many pivots.",
      },
      {
        q: "The Klee–Minty construction shows that simplex can take:",
        options: ["polynomially many pivots on some inputs", "exponentially many pivots on specially deformed cubes", "infinitely many pivots on feasible LPs", "fewer pivots than the number of variables"],
        answer: 1,
        explanation: "On these cubes simplex visits $2^n - 1$ vertices — an exponential lower bound that motivated the polynomial-time ellipsoid and interior-point methods.",
      },
    ],
  },

  // ---------------------------------------------------------------- 29.4
  {
    sectionId: 'clrs-ch29-s4',
    readingTime: 8,
    intro: "Every linear program has a mirror image — its dual — whose feasible solutions bound the primal objective from the other side. Weak duality is a two-line inequality; strong duality says the bounds meet exactly at the optimum, turning any primal-dual feasible pair into a checkable certificate of optimality. The dual variables read as prices: what each constraint is worth per unit.",
    objectives: [
      "Write the dual of a standard-form LP mechanically",
      "Prove weak duality and state strong duality",
      "Verify complementary slackness on the running LP",
      "Interpret dual variables as shadow prices",
    ],
    concepts: [
      {
        term: 'The dual LP',
        kind: 'definition',
        statement: "Primal: maximize $c^Tx$ s.t. $Ax \\le b$, $x \\ge 0$. **Dual:** minimize $b^Ty$ s.t. $A^Ty \\ge c$, $y \\ge 0$. Each primal constraint spawns a dual variable $y_i$; each primal variable $x_j$ spawns a dual constraint; the dual of the dual is the primal.",
        detail: "Mechanics: transpose the constraint matrix, swap $b$ and $c$, flip maximization to minimization and $\\le$ to $\\ge$. An equality constraint in the primal makes the corresponding $y_i$ free; a free primal variable makes its dual constraint an equality.",
      },
      {
        term: 'Weak duality',
        kind: 'theorem',
        statement: "For any primal-feasible $x$ and dual-feasible $y$: $c^Tx \\le y^TAx \\le b^Ty$. (First step: $c \\le A^Ty$ and $x \\ge 0$; second: $Ax \\le b$ and $y \\ge 0$.) Hence every dual value upper-bounds every primal value.",
        detail: "Consequences arrive instantly: if the primal is unbounded the dual must be infeasible (and vice versa); a duality gap $b^Ty - c^Tx$ measures how far a candidate pair is from optimal.",
      },
      {
        term: 'Strong duality',
        kind: 'theorem',
        statement: "If the primal LP has an optimal solution $x^*$, the dual has an optimal $y^*$ with $b^Ty^* = c^Tx^*$ — the bounds meet exactly. (Conversely, feasibility on both sides with equal objective values certifies optimality of both.)",
        detail: "The proof (sketched in many texts, including via simplex's final tableau: the z-row coefficients of the slack variables are exactly a dual optimal solution) is constructive — running simplex on the primal hands you the optimal dual for free.",
      },
      {
        term: 'Complementary slackness',
        kind: 'theorem',
        statement: "At an optimal pair $(x^*, y^*)$: for each primal constraint $i$, either it is tight or $y_i^* = 0$; for each primal variable $j$, either its dual constraint is tight or $x_j^* = 0$. Formally: $y_i^* (b_i - a_i^Tx^*) = 0$ and $x_j^* ((A^Ty^*)_j - c_j) = 0$.",
        detail: "A positive price $y_i$ means the constraint is a scarce resource actually consumed; a zero price means slack. This is the sensitivity readout engineers want from the solver.",
      },
      {
        term: 'Shadow prices',
        kind: 'insight',
        statement: "The optimal dual variables are marginal values: $y_i^* \\approx \\partial z^*/\\partial b_i$ — the change in optimum per unit increase of resource $b_i$, valid while the optimal basis does not change.",
        detail: "Dual of the max-flow LP gives edge prices whose sum is the min cut — duality *is* the max-flow min-cut theorem; similarly, shortest path vs. potentials is another primal-dual pair.",
      },
    ],
    figures: [
      {
        caption: 'Weak duality sandwiches both problems. Every primal-feasible point gives a value $c^Tx$ (teal markers on the left axis — the simplex walk visits $0 \\to 27 \\to 28$); every dual-feasible point gives $b^Ty$ (amber markers on the right axis, e.g. 90, 54, 45, 36 from feasible price vectors). No primal value ever exceeds any dual value — the shaded band is the duality gap. At the optimum the band pinches shut: the dual solution $(0, 1/6, 2/3)$ attains exactly $28$, the primal optimum — strong duality.',
        svg: '<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="Primal values climbing and dual values descending to meet at the common optimum"><text x="20" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" font-weight="600">Weak duality: primal below, dual above — they meet at 28</text><rect x="180" y="197.2" width="360" height="20.7" fill="currentColor" fill-opacity="0.08"/><text x="360" y="192" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">duality gap: every cᵀx ≤ every bᵀy</text><line x1="180" y1="50" x2="180" y2="280" stroke="#14b8a6" stroke-width="2"/><polygon points="180,40 175.5,52 184.5,52" fill="#14b8a6"/><line x1="540" y1="50" x2="540" y2="280" stroke="#f59e0b" stroke-width="2"/><polygon points="540,290 535.5,278 544.5,278" fill="#f59e0b"/><line x1="180" y1="215.6" x2="540" y2="215.6" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="360" y="210" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">28 = strong duality</text><g fill="#14b8a6"><circle cx="180" cy="280" r="4.5"/><circle cx="180" cy="252.4" r="4.5"/><circle cx="180" cy="217.9" r="4.5"/><circle cx="180" cy="215.6" r="6" fill="none" stroke="#14b8a6" stroke-width="2.5"/><circle cx="180" cy="215.6" r="3" /></g><g font-family="ui-sans-serif, system-ui" font-size="11" fill="#14b8a6" text-anchor="end"><text x="170" y="284">0</text><text x="170" y="256">12</text><text x="170" y="221">27</text><text x="170" y="209">28</text></g><g fill="#f59e0b"><circle cx="540" cy="73" r="4.5"/><circle cx="540" cy="155.8" r="4.5"/><circle cx="540" cy="176.5" r="4.5"/><circle cx="540" cy="197.2" r="4.5"/><circle cx="540" cy="215.6" r="6" fill="none" stroke="#f59e0b" stroke-width="2.5"/><circle cx="540" cy="215.6" r="3"/></g><g font-family="ui-sans-serif, system-ui" font-size="11" fill="#f59e0b"><text x="552" y="77">90</text><text x="552" y="160">54</text><text x="552" y="180">45</text><text x="552" y="201">36</text><text x="552" y="209">28</text></g><text x="150" y="140" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#14b8a6" text-anchor="middle">primal cᵀx</text><text x="150" y="155" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">simplex climbs</text><text x="580" y="140" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="#f59e0b" text-anchor="middle">dual bᵀy</text><text x="580" y="155" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">prices descend</text><text x="360" y="314" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">dual optimum (0, 1/6, 2/3): 30·0 + 24·(1/6) + 36·(2/3) = 4 + 24 = 28</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'The dual of the running LP, verified',
        problem: "Write the dual of the running LP, guess the optimal dual from complementary slackness, and verify strong duality.",
        steps: [
          { label: 'Step 1: Transcribe the dual', text: "Minimize $30y_1 + 24y_2 + 36y_3$ subject to $y_1 + 2y_2 + 4y_3 \\ge 3$, $y_1 + 2y_2 + y_3 \\ge 1$, $3y_1 + 5y_2 + 2y_3 \\ge 2$, $y \\ge 0$ — one dual variable per primal constraint, one dual constraint per primal variable." },
          { label: 'Step 2: Apply complementary slackness to the primal optimum', text: "Optimal $(x_1, x_2, x_3) = (8, 4, 0)$: constraint 1 has slack ($8+4+3\\cdot0 = 12 < 30$) → $y_1 = 0$. Variables $x_1, x_2 > 0$ → their dual constraints are tight: $2y_2 + 4y_3 = 3$ and $2y_2 + y_3 = 1$ (using $y_1 = 0$)." },
          { label: 'Step 3: Solve the two tight equations', text: "Subtract: $3y_3 = 2 \\Rightarrow y_3 = 2/3$, then $2y_2 = 1 - 2/3 \\Rightarrow y_2 = 1/6$. Candidate dual: $(0, 1/6, 2/3)$." },
          { label: 'Step 4: Verify feasibility and value', text: "Third dual constraint: $5(1/6) + 2(2/3) = 13/6 \\ge 2$ ✓ (slack, consistent with $x_3 = 0$). Objective: $30(0) + 24(1/6) + 36(2/3) = 4 + 24 = 28 = c^Tx^*$ — strong duality holds." },
        ],
        result: 'The pair $(8,4,0)$ and $(0, 1/6, 2/3)$ is a self-certifying optimum: feasibility on both sides plus equal objective values.',
      },
      {
        title: 'Weak duality gap on two variables',
        problem: 'Primal $\\max x_1 + x_2$ s.t. $x_1 + 2x_2 \\le 4$, $4x_1 + 2x_2 \\le 12$, $x \\ge 0$. Exhibit primal $x$ and dual $y$ with gap $2$, then close it.',
        steps: [
          { label: 'Dual', text: 'Dual $\\min 4y_1 + 12y_2$ s.t. $y_1 + 4y_2 \\ge 1$, $2y_1 + 2y_2 \\ge 1$, $y \\ge 0$.' },
          { label: 'Feasible pair', text: 'Primal $(1,1)$: $3 \\le 4$, $6 \\le 12$ ✓ value $2$. Dual $(0.5,0.5)$: $0.5+2 = 2.5 \\ge 1$ ✓ value $4 \\cdot 0.5 + 12 \\cdot 0.5 = 8$. Gap $8-2 = 6$ (weak duality: primal $\\le$ dual ✓).' },
          { label: 'Optima', text: 'Primal optimum $(2.67,0.67)$? Solve binding: $x_1+2x_2 = 4$, $4x_1+2x_2 = 12$: $x_1 = 8/3$, $x_2 = 2/3$: value $10/3 \\approx 3.33$. Dual optimum $(1/6,1/6)$? Check: $1/6+4/6 = 5/6 < 1$ infeasible; true optimum $y = (0,0.5)$? $0+2 = 2 \\ge 1$ ✓, $0+1 = 1 \\ge 1$ ✓ value $6$: gap $6-3.33$? Still gap: exact optima need simplex; weak duality only bounds.' },
          { label: 'Certificate', text: 'Any feasible $y$ upper-bounds every feasible $x$: $c^Tx \\le y^TAx \\le y^Tb = b^Ty$. Strong duality closes the gap at optima.' },
        ],
        result: 'Feasible $(1,1)$ value $2$ vs feasible dual value $8$: gap $6 \\ge 0$ (weak duality); optima meet (strong duality).',
      },
    ],
    keyTakeaways: [
      "Dual of $\\max c^Tx, Ax \\le b, x \\ge 0$ is $\\min b^Ty, A^Ty \\ge c, y \\ge 0$ — constraints ↔ variables, $b$ ↔ $c$.",
      "Weak duality $c^Tx \\le b^Ty$ for all feasible pairs: two lines, and it already rules out simultaneous unboundedness of both.",
      "Strong duality: optimal values coincide; the pair of optimal solutions certifies each other.",
      "Complementary slackness: a positive price sits only on a binding constraint; a positive primal variable has a tight dual constraint.",
      "Dual variables are shadow prices $\\partial z^*/\\partial b_i$ — the economic reading of the LP.",
    ],
    quiz: [
      {
        q: "The dual of a standard-form primal with $m$ constraints and $n$ variables has:",
        options: ["$m$ variables and $n$ constraints", "$n$ variables and $m$ constraints", "$m$ variables and $m$ constraints", "the same shape always"],
        answer: 1,
        explanation: "Constraints and variables swap roles under dualization: each primal constraint prices a dual variable, each primal variable demands a dual constraint.",
      },
      {
        q: "If some primal-feasible $x$ and dual-feasible $y$ satisfy $c^Tx = b^Ty$, then:",
        options: ["the primal is unbounded", "both are optimal for their respective LPs", "the dual is infeasible", "complementary slackness fails"],
        answer: 1,
        explanation: "Weak duality forces every primal value below $b^Ty$ and every dual value above $c^Tx$; equality pins both at the common optimum — the standard optimality certificate.",
      },
      {
        q: "In the running LP, constraint 1 ($x_1 + x_2 + 3x_3 \\le 30$) has slack 18 at the optimum. Complementary slackness therefore implies:",
        options: ["$y_1 = 0$", "the dual is infeasible", "$x_1$ must be zero", "the constraint should be deleted"],
        answer: 0,
        explanation: "Slack resources are free: $y_1^* (b_1 - a_1^Tx^*) = 0$ with slack $18 > 0$ forces the price $y_1^* = 0$.",
      },
      {
        q: "The economic reading of the optimal dual variable $y_i$ is:",
        options: ["the cost of the cheapest primal variable", "the marginal change in the optimal objective per unit increase of the right-hand side $b_i$", "the number of pivots simplex needs", "the duality gap"],
        answer: 1,
        explanation: "Shadow price: relax resource $i$ by one unit and the optimum moves by about $y_i$ — exact while the optimal basis stays put.",
      },
    ],
  },

  // ---------------------------------------------------------------- 29.5
  {
    sectionId: 'clrs-ch29-s5',
    readingTime: 7,
    intro: "Simplex needs a starting vertex, but a slack form is only guaranteed to give one when every $b_i \\ge 0$ — and real LPs often don't. The fix is elegant: solve one auxiliary LP whose optimum is either a certificate of infeasibility or a feasible basis for the original problem. This is the two-phase method.",
    objectives: [
      "Recognize why negative slack values block an initial BFS",
      "Construct the auxiliary LP and its trivial initial BFS",
      "Run Phase 1 and pivot the auxiliary variable out of the basis",
      "State what Phase 1's optimal value proves about feasibility",
    ],
    concepts: [
      {
        term: 'The initialization problem',
        kind: 'insight',
        statement: "After converting to slack form, some equation may read $x_B = b_i - \\ldots$ with $b_i < 0$: setting nonbasics to 0 makes $x_B < 0$ — not a BFS. A constraint like $x_1 + x_2 \\ge 2$ (a minimum production quota) does exactly this.",
        detail: "The origin is infeasible; simplex cannot start. Geometrically the polytope avoids the positive orthant's corner, so we need a helicopter to a vertex.",
      },
      {
        term: 'The auxiliary LP',
        kind: 'method',
        statement: "Introduce one extra variable $x_0 \\ge 0$ added to the *left* of every violated constraint: minimize $x_0$ subject to the relaxed system. Setting $x_0 = -\\min_i b_i \\ge 0$ (with all other nonbasics zero) is trivially feasible — an instant initial BFS.",
        detail: "Intuition: $x_0$ is a slack *budget* that absorbs how badly the constraints are violated; the auxiliary optimum measures the minimum total violation that cannot be squeezed away.",
      },
      {
        term: 'The two-phase method',
        kind: 'theorem',
        statement: "**Phase 1:** run simplex on the auxiliary LP. If its optimal value is $> 0$, the original LP is **infeasible**. If it is $0$: if $x_0$ left the basis, what remains is a feasible basis of the original LP; if $x_0$ sits at 0 in the basis, one degenerate pivot removes it. **Phase 2:** run simplex on the original objective from that basis.",
        detail: "Why infeasibility: any feasible $x$ of the original LP extends to $(x, x_0 = 0)$ of the auxiliary one, so a positive auxiliary minimum means no such $x$ exists — and the final Phase-1 tableau hands you the separating witnesses.",
      },
      {
        term: 'Unboundedness detection',
        kind: 'insight',
        statement: "Phase 2 can still discover an unbounded edge: an entering column with *no positive entries* lets the entering variable grow forever. No ratio test candidate exists, and the LP has no finite optimum.",
        detail: "So the full simplex lifecycle is: Phase 1 settles feasibility (or proves infeasibility), Phase 2 terminates at optimality or unboundedness — every LP ends in exactly one of three verdicts.",
      },
      {
        term: 'Feasibility versus optimality versus unboundedness',
        kind: 'insight',
        statement: 'Phase 1 answers feasibility ($\\bar b$ sign pattern); Phase 2 answers optimality-or-unboundedness (reduced costs and ratio test). Infeasible means no vertex satisfies $Ax \\le b$; unbounded means the feasible polytope has a ray improving $c$ forever; otherwise an optimal vertex exists.',
        detail: 'Auxiliary optimum $x_0 = 0$ certifies feasibility with a basis; $x_0 > 0$ certifies infeasibility with a Farkas proof. Unboundedness is detected in Phase 2 when an entering variable has no leaving constraint.',
      },
    ],
    examples: [
      {
        title: 'Two-phase on a quota-constrained LP',
        problem: "Solve: maximize $2x_1 + 3x_2$ subject to $x_1 + x_2 \\ge 2$, $x_1 + 4x_2 \\le 12$, $x_1 \\le 3$, $x \\ge 0$.",
        steps: [
          { label: 'Step 1: Slack form exposes the problem', text: "The quota becomes $x_1 + x_2 - s_1 = 2$, i.e. $s_1 = -2 + x_1 + x_2$: the naive origin BFS has $s_1 = -2 < 0$ — infeasible start." },
          { label: 'Step 2: Build the auxiliary LP', text: "Minimize $x_0$ subject to $x_1 + x_2 - s_1 + x_0 = 2$, $x_1 + 4x_2 + s_2 = 12$, $x_1 + s_3 = 3$. Initial BFS: nonbasics $x_1 = x_2 = s_1 = 0$ give $x_0 = 2$, $s_2 = 12$, $s_3 = 3$ — all nonnegative." },
          { label: 'Step 3: Phase 1 pivot', text: "From $x_0 = 2 - x_1 - x_2 + s_1$, the entering variable $x_2$ (any variable with a negative coefficient) reduces $x_0$. Ratio test: $x_0$ hits 0 at $x_2 = 2$; $s_2$ allows $12/4 = 3$; $s_3$ has no $x_2$. Minimum 2 → $x_0$ leaves the basis, $x_2 = 2$, $x_0 = 0$: feasible in one pivot." },
          { label: 'Step 4: Drop $x_0$, run Phase 2', text: "The basis $\\{x_2, s_2, s_3\\} = (2, 4, 3)$ is feasible for the original LP (point $(0, 2)$, $z = 6$). Successive pivots: $s_1$ enters ($z = 9$ at $(0,3)$), then $x_1$ enters with $s_3$ leaving at $x_1 = 3$ → $(3, 9/4)$ with $z = 2\\cdot3 + 3\\cdot(9/4) = 51/4 = 12.75$." },
          { label: 'Step 5: Verify', text: "$x_1 + x_2 = 5.25 \\ge 2$ ✓ (slack), $x_1 + 4x_2 = 3 + 9 = 12$ ✓ (tight), $x_1 = 3$ ✓ (tight). No edge improves: optimal." },
        ],
        result: 'Phase 1 buys a starting vertex in one pivot; Phase 2 walks $z$: $6 \\to 9 \\to 12.75$.',
      },
      {
        title: 'Auxiliary objective $x_0$',
        problem: 'LP with $x_1 + x_2 \\le -1$, $x \\ge 0$ (infeasible: left $\\ge 0$). Form the auxiliary LP and read $x_0$.',
        steps: [
          { label: 'Auxiliary', text: '$\\max -x_0$ s.t. $x_1 + x_2 + x_0 \\le? $ Standard: $x_1 + x_2 - s + x_0 = -1$? With $x_0$ added to each violated constraint: $x_1 + x_2 + x_0 \\ge? $ Precisely: subtract surplus, add $x_0$ to infeasible rows.' },
          { label: 'Initial BFS', text: '$x_0 = 1$, $x_1 = x_2 = 0$ satisfies $0+0+1 \\ge? $: feasible start for auxiliary.' },
          { label: 'Optimum', text: 'Minimize $x_0$: best is $x_0 = 1 > 0$ (need $x_1+x_2 \\ge? $ can’t reach $-1$ with nonnegatives): $x_0^* > 0$ proves original infeasible.' },
          { label: 'Versus feasible', text: 'Had optimum been $x_0^* = 0$, dropping $x_0$ would leave a feasible basis for Phase 2.' },
        ],
        result: 'Auxiliary optimum $x_0^* = 1 > 0$: certificate of infeasibility; $x_0^* = 0$ would have handed Phase 2 its starting vertex.',
      },
    ],
    keyTakeaways: [
      "Negative $b_i$ in slack form means the origin is not feasible — simplex has no starting BFS.",
      "The auxiliary LP adds one variable $x_0$ absorbing violations; its origin BFS is free to construct.",
      "Auxiliary optimum $> 0$ proves infeasibility; $= 0$ hands Phase 2 a genuine feasible basis (degenerate pivot out if $x_0$ lingers at zero).",
      "An entering column with no positive entries certifies unboundedness — the third and final verdict simplex can return.",
    ],
    quiz: [
      {
        q: "The auxiliary variable $x_0$ is added to the left side of each violated constraint so that:",
        options: ["the objective improves immediately", "setting nonbasics to zero yields a feasible basis, with $x_0$ absorbing all violations", "the dual becomes feasible", "cycling cannot occur"],
        answer: 1,
        explanation: "With $x_0$ basic at $-\\min b_i \\ge 0$, every basic value is nonnegative: an instant legal BFS for Phase 1 to start from.",
      },
      {
        q: "Phase 1 terminates with optimal value $x_0 = 3 > 0$. Conclusion:",
        options: ["the original LP is unbounded", "the original LP is infeasible — no x satisfies all constraints", "Phase 2 must be rerun with a different pivot rule", "the optimum is 3"],
        answer: 1,
        explanation: "Any original-feasible point would give auxiliary value 0; a positive minimum proves no such point exists.",
      },
      {
        q: "Phase 2 is about to pivot on an entering variable whose column contains only negative or zero coefficients. This means:",
        options: ["the LP is infeasible", "the LP is unbounded — the entering variable can grow without limit", "degeneracy is present", "Bland's rule was violated"],
        answer: 1,
        explanation: "No basic variable decreases as the entering one grows, so the ratio test finds no blocking constraint: an infinite improving edge exists.",
      },
    ],
  },
]
