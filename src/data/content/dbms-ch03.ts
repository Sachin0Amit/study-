import type { SectionContent } from '../library'

// ============================================================================
// Databases — Chapter 3: Relational Algebra & Tuple Calculus
// Master study content covering Sections 3.1 – 3.4.
// ============================================================================

export const dbmsCh03Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'dbms-ch3-s1',
    readingTime: 8,
    intro: 'Relational algebra is the procedural core of querying: **selection** filters rows, **projection** keeps columns, and **rename** relabels. Every `SELECT` block compiles to these operators, and their order decides how much data each step drags along. This section builds fluency in reading, writing and reordering the three unary operators.',
    objectives: [
      'Write selection, projection and rename expressions with correct operator symbols',
      'Push selections down and combine projections to shrink intermediate results',
      'Explain duplicate handling differences between algebra and practical systems'
    ],
    concepts: [
      {
        term: 'Selection sigma',
        kind: 'definition',
        statement: 'The **selection** operator $\\sigma_{p}(R)$ keeps exactly the tuples of `R` satisfying predicate `p`, for example $\\sigma_{Salary > 50000}(Employee)$. Selection is **row-wise**: degree unchanged, cardinality shrinks, and compound predicates use $\\land$ (AND), $\\lor$ (OR) and $\\lnot$ (NOT).',
        detail: 'Selections commute with each other and cascade: $\\sigma_{p \\land q}(R) = \\sigma_{p}(\\sigma_{q}(R))$, which is what lets optimizers split compound filters.'
      },
      {
        term: 'Projection pi',
        kind: 'definition',
        statement: 'The **projection** operator $\\pi_{A_1, A_2, \\ldots, A_k}(R)$ keeps only the listed columns, for example `$\\pi_{Name, Salary}` over `Employee`. Projection is **column-wise** and, in pure algebra, **removes duplicate** tuples — projecting `{ (Asha, 60k), (Dev, 60k) }` onto salary yields one tuple $\\{(60000)\\}$, not two.',
        detail: 'Duplicate elimination is the sharpest algebra-versus-practice split: practical SQL keeps duplicates unless `DISTINCT` is written.'
      },
      {
        term: 'Rename rho',
        kind: 'notation',
        statement: 'The **rename** operator $\\rho_{S(B_1, \\ldots, B_n)}(R)$ relabels a relation and its attributes, for example $\\rho_{E(Name, Pay)}(\\pi_{Name, Salary}(Employee))$. Rename enables **self-joins** (two copies of one table need different names) and gives intermediate results readable `headings`.',
        detail: 'Rename changes names only — rows and columns are untouched — so it commutes freely with selection and projection on renamed attributes.'
      },
      {
        term: 'Predicate pushdown',
        kind: 'method',
        statement: '**Predicate pushdown** moves selections **below** projections and joins so filters run on the smallest input: rewrite $\\pi_{Name}(\\sigma_{Salary > 50000}(Employee))$ is already optimal, but $\\sigma_{p}(R \\bowtie S)$ should become $\\sigma_{p}(R) \\bowtie S$ when `p` mentions only `R`. Filter **early**, project **early**, join **late**.',
        detail: 'Pushdown is the first optimizer rule: a selection on $n$ rows before a join avoids materializing the full cross product of size up to $n \\times m$.'
      },
      {
        term: 'Set semantics versus bag semantics',
        kind: 'insight',
        statement: 'Pure algebra uses **set semantics** — duplicate tuples vanish after every operator — while practical engines use **bag semantics** where `R` may hold a tuple twice and only `DISTINCT` dedupes. Hence $\\pi$ in algebra equals `SELECT DISTINCT` in SQL, and plain `SELECT` corresponds to **bag projection** $\\pi^{bag}$.',
        detail: 'Counting queries expose the gap: set semantics counts distinct values automatically, bag semantics needs the explicit keyword.'
      }
    ],
    examples: [
      {
        title: 'Names of highly paid staff',
        problem: 'From `Employee(EmpId, Name, Salary, DeptNo)` get names of employees earning above 50000.',
        steps: [
          { label: 'Step 1', text: 'Filter rows first. ```text\nsigma_{Salary > 50000}(Employee)\n```\nOnly qualifying tuples survive; degree still 4.' },
          { label: 'Step 2', text: 'Keep one column. ```text\npi_{Name}(sigma_{Salary > 50000}(Employee))\n```\nProjection drops the other three columns and dedupes names.' },
          { label: 'Step 3', text: 'Confirm the order. Filtering before projecting touches fewer values; the reverse order projects the whole table first and wastes work.' }
        ],
        result: '$\\pi_{Name}(\\sigma_{Salary > 50000}(Employee))$ — select early, project next.'
      },
      {
        title: 'Self-join setup with rename',
        problem: 'Find employees earning more than their own manager, given `Employee(EmpId, Name, Salary, MgrId)` where `MgrId` references `EmpId`.',
        steps: [
          { label: 'Step 1', text: 'Clone with rename. ```text\nrho_{E(EmpId, Name, Salary, MgrId)}(Employee)\nrho_{M(MId, MName, MSalary, MMgr)}(Employee)\n```\nTwo names for one table allow the self-comparison.' },
          { label: 'Step 2', text: 'Join clone to original on the management link, then filter: $\\sigma_{Salary > MSalary}(E \\bowtie_{MgrId = MId} M)$.' },
          { label: 'Step 3', text: 'Project the answer: $\\pi_{Name}(\\sigma_{Salary > MSalary}(E \\bowtie_{MgrId = MId} M))$.' }
        ],
        result: 'Rename makes the self-join expressible; one filter plus one projection finishes it.'
      }
    ],
    keyTakeaways: [
      'Sigma filters rows, pi keeps columns with dedup, rho relabels — the three unary operators compose inside out.',
      'Filter early and project early: pushdown shrinks every downstream intermediate result.',
      'Algebra uses set semantics (automatic dedup); plain SQL uses bag semantics until DISTINCT.',
      'Rename is mandatory for self-joins and clarifies every nested intermediate result.'
    ],
    quiz: [
      {
        q: 'What does $\\sigma_{Salary > 50000}(Employee)$ return?',
        options: [
          'Only the Salary column of qualifying rows',
          'All columns of exactly those tuples satisfying the predicate',
          'One boolean per tuple',
          'The schema with zero tuples always'
        ],
        answer: 1,
        explanation: 'Step 1: Selection is row-wise. Step 2: Qualifying tuples survive whole. Step 3: Columns are untouched, so the full qualifying rows return.'
      },
      // PYQ-pattern: projection duplicate elimination under set semantics
      {
        q: 'Projecting { (Asha, 60k), (Dev, 60k) } onto the second column under pure set semantics yields?',
        options: [
          'Two rows: (60k), (60k)',
          'Zero rows',
          'A syntax error: projection needs keys',
          'One row: (60000), since sets drop duplicates'
        ],
        answer: 3,
        explanation: 'Step 1: Projection keeps the listed columns. Step 2: Both tuples project to the same value. Step 3: Set semantics dedupes, leaving a single row.'
      },
      {
        q: 'Why push $\\sigma_{p}(R \\bowtie S)$ down to $\\sigma_{p}(R) \\bowtie S$ when p mentions only R?',
        options: [
          'It filters R before the join, shrinking the intermediate product',
          'It changes the final answer to include more rows',
          'It removes the need for join conditions',
          'It converts an inner join to an outer join'
        ],
        answer: 0,
        explanation: 'Step 1: The unoptimized form joins full tables first. Step 2: Filtering R first drops useless rows early. Step 3: The join then processes far fewer candidate pairs with the same result.'
      },
      {
        q: 'When is rename (rho) indispensable?',
        options: [
          'When filtering with compound predicates',
          'When projecting all columns',
          'When one query uses the same relation twice, as in self-joins needing two names',
          'When union compatibility already holds'
        ],
        answer: 2,
        explanation: 'Step 1: Two uses of one table collide under one name. Step 2: Rename gives each copy its own namespace. Step 3: Join conditions and projections can then address each copy separately.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.2
  {
    sectionId: 'dbms-ch3-s2',
    readingTime: 10,
    intro: '**Joins** combine rows from two tables on a matching condition and are the most executed operator in practice. **Theta joins** use any comparison, **equi-joins** use equality, **natural joins** match all shared columns, and **outer joins** preserve unmatched rows with nulls. Choosing the right join — and ordering several of them — separates correct queries from subtly wrong ones.',
    objectives: [
      'Separate theta, equi, natural and outer joins by condition and unmatched-row policy',
      'Predict output columns and row counts for each join flavor',
      'Order join sequences and place selections to control size'
    ],
    concepts: [
      {
        term: 'Theta join and equi-join',
        kind: 'definition',
        statement: 'The **theta join** $R \\bowtie_{\\theta} S$ keeps pairs satisfying an arbitrary condition $\\theta$, for example $R \\bowtie_{R.A > S.B} S$. An **equi-join** restricts $\\theta$ to **equality** conjunctions such as $R.DeptNo = S.DeptNo$ — the common case, written with `=` throughout.',
        detail: 'Theta generalizes everything: cross product is theta with $\\theta = true$, and every equi-join is a theta join with equality conditions only.'
      },
      {
        term: 'Natural join',
        kind: 'definition',
        statement: 'The **natural join** $R \\bowtie S$ (no subscript) **equates all commonly named columns** and keeps **one copy** of each: `Employee NATURAL JOIN Department` matches on `DeptNo` and shows it once. It equals $\\pi$ over shared columns of the equi-join on all of them — convenient but hostage to column naming.',
        detail: 'An accidental shared name (two unrelated `Name` columns) silently becomes a join condition — the classic natural-join trap.'
      },
      {
        term: 'Outer joins preserve the unmatched',
        kind: 'definition',
        statement: '**Left outer** $R \\mathbin{\\bowtie\\mkern-5mu\\rule{0.4pt}{1.6ex}} S$ keeps every `R` row, padding misses with **`NULL`**; **right outer** mirrors it; **full outer** $R \\mathbin{\\rule{0.4pt}{1.6ex}\\mkern-5mu\\bowtie\\mkern-5mu\\rule{0.4pt}{1.6ex}} S$ keeps both sides. Departments with no employees appear only under a right or full outer join — inner joins drop them.',
        detail: 'Outer joins are the tool for "show X even with no Y" reports; inner joins answer "show matched pairs only".'
      },
      {
        term: 'Join size and ordering',
        kind: 'method',
        statement: 'A join of $n$ rows with $m$ rows yields between $0$ and $n \\times m$ rows; key–foreign-key `JOIN` hits exactly the child count when every key matches. Join the **most selective pair first** and push selections below joins: $(\\sigma_{p}(R) \\bowtie S) \\bowtie T$ beats $(R \\bowtie S \\bowtie T)$ filtered last, since intermediate size compounds multiplicatively.',
        detail: 'Estimate before executing: equi-join on a key outputs at most the foreign-key side cardinality — a bound that catches missing join conditions instantly.'
      },
      {
        term: 'Semi-join intuition',
        kind: 'insight',
        statement: 'The **semi-join** $R \\ltimes S = \\pi_{R}(R \\bowtie S)$ returns `R` rows having **at least one** partner — membership without duplication or extra columns. `EXISTS` subqueries in SQL compile to semi-joins, which is why they avoid the row multiplication of a full join.',
        detail: 'Use semi-join thinking for "which R have a partner" and full joins for "pair each R with its partners".'
      }
    ],
    examples: [
      {
        title: 'Natural join versus equi-join output',
        problem: '`Employee(EmpId, Name, DeptNo)` has (1, Asha, 10); `Department(DeptNo, DName)` has (10, Sales), (20, Legal). Compare inner equi-join with left outer join.',
        steps: [
          { label: 'Step 1', text: 'Run the equi-join. ```text\nEmployee ⋈_{DeptNo} Department =\n(1, Asha, 10, Sales)\n```\nOnly matching pairs survive: Legal (20) vanishes.' },
          { label: 'Step 2', text: 'Run the left outer join from Department. ```text\nDepartment ⟕ Employee =\n(10, Sales, 1, Asha) + (20, Legal, NULL, NULL)\n```\nLegal survives with null-padded employee columns.' },
          { label: 'Step 3', text: 'Read the lesson. Inner joins drop the unmatched; outer joins preserve one side with NULLs — pick by whether the report needs childless parents.' }
        ],
        result: 'Inner join: 1 row. Left outer from Department: 2 rows with one null-padded.'
      },
      {
        title: 'Order two joins well',
        problem: 'Query joins 100-row `Topay` (10 pay above 90000), 10000-row `Staff` and 50-row `Dept`. Where does the salary filter go?',
        steps: [
          { label: 'Step 1', text: 'Filter first. ```text\nsigma_{Salary > 90000}(Topay)  -> 10 rows\n```\nPushdown shrinks the build input from 100 to 10 rows.' },
          { label: 'Step 2', text: 'Join small with small next: 10-row filtered set against 50-row Dept before touching 10000-row Staff.' },
          { label: 'Step 3', text: 'Join the giant last. Intermediate results stay tiny at each step instead of exploding to millions of candidate pairs.' }
        ],
        result: 'Filter early, join selective pairs first, touch the largest table last.'
      }
    ],
    keyTakeaways: [
      'Theta allows any condition, equi uses equality, natural equates all shared names and dedupes the columns.',
      'Outer joins preserve unmatched rows with NULLs; inner joins drop them.',
      'Key joins output at most the child-side row count; unkeyed joins can reach the full product.',
      'Filter before joining and join selective pairs first; EXISTS-style tests are semi-joins.'
    ],
    quiz: [
      // PYQ-pattern: natural join column handling and row counts
      {
        q: 'R(A, B) has 3 rows, S(B, C) has 4 rows sharing column B. Which bound holds for R ⋈ S?',
        options: [
          'Exactly 7 rows with 4 columns',
          'Between 0 and 12 rows with 3 columns (B appears once)',
          'Exactly 12 rows with 4 columns',
          'Between 3 and 4 rows'
        ],
        answer: 1,
        explanation: 'Step 1: Joins range from empty to full product: 0 to 12 rows. Step 2: Natural join merges the shared B into one column. Step 3: So at most 12 rows over the 3 columns A, B, C.'
      },
      {
        q: 'Which query lists every department, including ones with no employees?',
        options: [
          'Employee INNER JOIN Department',
          'Employee LEFT OUTER JOIN Department',
          'CROSS JOIN of the two tables',
          'Department LEFT OUTER JOIN Employee (departments preserved)'
        ],
        answer: 3,
        explanation: 'Step 1: Childless departments are unmatched rows. Step 2: Inner and natural joins drop them. Step 3: Preserving the Department side needs a left outer join from Department.'
      },
      {
        q: 'The danger of NATURAL JOIN on tables sharing an unrelated Name column is?',
        options: [
          'The accidental shared name becomes a silent extra equi-condition, dropping valid pairs',
          'It always returns the cross product',
          'It duplicates the Name column',
          'It converts to a full outer join'
        ],
        answer: 0,
        explanation: 'Step 1: Natural join equates every shared name. Step 2: Unrelated same-named columns add unintended conditions. Step 3: Pairs matching on the real key but differing on Name wrongly vanish.'
      },
      {
        q: 'R ⋉ S (semi-join) returns?',
        options: [
          'Paired rows with columns of both tables',
          'S rows having no R partner',
          'R rows having at least one S partner, with R columns only and no duplication',
          'The full cross product filtered later'
        ],
        answer: 2,
        explanation: 'Step 1: Semi-join tests existence of a partner. Step 2: It projects back to R columns. Step 3: Each qualifying R row appears once regardless of partner count.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.3
  {
    sectionId: 'dbms-ch3-s3',
    readingTime: 9,
    intro: '**Division** answers for-all questions — suppliers of every part, students passing every course — that no join expresses directly. **Set operators** (union, intersection, difference) combine whole compatible relations. Together they complete the expressive core: anything phrased with universal quantification or set combination reduces to these operators.',
    objectives: [
      'Recognize for-all patterns and write them with the division operator',
      'Check union compatibility before applying set operators',
      'Translate division into double-negation form for execution'
    ],
    concepts: [
      {
        term: 'Division for for-all queries',
        kind: 'definition',
        statement: 'The **division** $R \\div S$ returns the `R`-values paired with **every** `S`-value: with `Enrols(RollNo, CourseId)` and `Core(CourseId)`, the quotient $Enrols \\div Core$ lists students taking **all** core courses. Quotient attributes are those of `R` minus those of `S`, and an empty divisor yields **all** distinct dividends.',
        detail: 'Spot the phrasing "every", "all", "only" — each signals division, the one operator joins cannot simulate.'
      },
      {
        term: 'Union compatibility',
        kind: 'law',
        statement: 'Set operators demand **union compatibility**: same **degree** with pairwise **compatible domains**. `Student(RollNo, Name)` unions with `Alumnus(RollNo, Name)` legally, but never with a 3-column table — degree mismatch rejects the query before any row is read.',
        detail: 'Compatibility is structural, not nominal: column names may differ (rename first), but domain types must align positionally.'
      },
      {
        term: 'Union, intersection, difference',
        kind: 'definition',
        statement: '**Union** $R \\cup S$ keeps rows in either; **intersection** $R \\cap S$ keeps rows in both; **difference** $R - S$ keeps rows in `R` but not `S`. Under set semantics all three **dedupe**: $R \\cup R = R$. Difference is the only non-commutative one — $R - S \\ne S - R$ in general.',
        detail: 'Difference expresses negation ("took DB but not OS"); intersection expresses conjunction of memberships ("took both").'
      },
      {
        term: 'Division as double negation',
        kind: 'theorem',
        statement: 'Division equals **missing-nothing**: $R \\div S = \\pi_{x}(R) - \\pi_{x}((\\pi_{x}(R) \\times S) - R)$, where $x$ are the quotient attributes. In words: all dividend values **minus** those missing **at least one** divisor value. This identity is exactly the `NOT EXISTS ... NOT EXISTS` SQL pattern of Section 4.3.',
        detail: 'Read it inside out: build every required combination, subtract the actuals to find gaps, subtract gapped dividends from all dividends.'
      },
      {
        term: 'Division versus aggregation shortcuts',
        kind: 'method',
        statement: 'When `COUNT` suffices, compare **counts**: students taking all $k$ core courses satisfy $|\\pi_{CourseId}(\\sigma_{RollNo = r}(Enrols)) \\cap Core| = |Core| = k$. The count form is often cheaper, but it works only when the dividend holds **no duplicates** and the divisor is fixed — **division stays the general tool**, counts are the shortcut.',
        detail: 'Prefer division for correctness arguments, counts for hand computation on small published instances.'
      }
    ],
    examples: [
      {
        title: 'Students taking all core courses',
        problem: '`Enrols(RollNo, CourseId)`; `Core(CourseId)` = {C1, C2}. Roll 1 took C1, C2; roll 2 took C1 only. Who took all core courses?',
        steps: [
          { label: 'Step 1', text: 'Write the division. ```text\nEnrols ÷ Core  -> { 1 }\n```\nOnly roll 1 pairs with every core course.' },
          { label: 'Step 2', text: 'Check via double negation. All dividends {1, 2}; required combos {1-C1, 1-C2, 2-C1, 2-C2}; actuals miss 2-C2, so roll 2 is gapped and removed.' },
          { label: 'Step 3', text: 'Confirm the count shortcut. Roll 1 matches 2 of 2 core courses; roll 2 matches 1 of 2 — same answer {1}.' }
        ],
        result: 'Quotient {1}: only roll 1 completed every core course.'
      },
      {
        title: 'Difference for took-A-but-not-B',
        problem: 'Find students who took `DB` but not `OS` from `Takes(RollNo, Course)`.',
        steps: [
          { label: 'Step 1', text: 'Isolate each membership. ```text\nA = pi_{RollNo}(sigma_{Course=DB}(Takes))\nB = pi_{RollNo}(sigma_{Course=OS}(Takes))\nAnswer = A - B\n```' },
          { label: 'Step 2', text: 'Verify compatibility. Both projections are single-column roll-number sets — union compatible by construction.' },
          { label: 'Step 3', text: 'Note non-commutativity. $A - B$ is the answer; $B - A$ inverts it (OS but not DB) — order carries the meaning.' }
        ],
        result: '$A - B$ lists DB-takers absent from OS enrolment.'
      }
    ],
    keyTakeaways: [
      'Division R ÷ S answers for-all queries: dividends paired with every divisor value.',
      'Set operators need union compatibility: equal degree, compatible domains.',
      'Difference is non-commutative and expresses negation; intersection expresses dual membership.',
      'Division = all dividends minus gapped ones; the identity compiles directly to double NOT EXISTS.'
    ],
    quiz: [
      // PYQ-pattern: division semantics on small instances
      {
        q: 'Enrols = {(1,C1),(1,C2),(2,C1)}, Core = {C1, C2}. What is Enrols ÷ Core?',
        options: ['{1, 2}', '{2}', '{} (empty)', '{1}'],
        answer: 3,
        explanation: 'Step 1: Roll 1 pairs with both C1 and C2. Step 2: Roll 2 lacks C2. Step 3: Only complete dividends survive, so the quotient is {1}.'
      },
      {
        q: 'Which pairs are union compatible?',
        options: [
          'R(A:int, B:string) with S(A:int, B:string)',
          'R(A:int, B:string) with S(A:int, B:int, C:int)',
          'R(A:int) with S(B:string)',
          'Any two relations regardless of shape'
        ],
        answer: 0,
        explanation: 'Step 1: Compatibility needs equal degree: both have 2 columns. Step 2: Domains must match positionally: int with int, string with string. Step 3: Only the first pair satisfies both.'
      },
      {
        q: 'R − S differs from S − R in general because?',
        options: [
          'Difference dedupes but union does not',
          'Difference is non-commutative: membership direction matters',
          'Difference needs compatibility but union does not',
          'Difference returns divisors, not dividends'
        ],
        answer: 1,
        explanation: 'Step 1: R − S keeps R-only rows. Step 2: S − R keeps S-only rows. Step 3: These are different sets, so operand order defines the answer.'
      },
      {
        q: 'The double-negation identity for R ÷ S reads as?',
        options: [
          'Divisors minus dividends directly',
          'The union of dividends and divisors',
          'Dividends missing nothing: all dividends minus those lacking some divisor value',
          'The intersection of R and S'
        ],
        answer: 2,
        explanation: 'Step 1: Enumerate all required dividend–divisor combos. Step 2: Subtract actuals to expose gaps. Step 3: Remove gapped dividends from the full dividend set.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.4
  {
    sectionId: 'dbms-ch3-s4',
    depth: [
      {
        tier: 'masters',
        title: 'Calculus versus algebra: safety and expressive power',
        blocks: [
          {
            kind: 'para',
            body: 'Tuple calculus states **what** set is wanted as $\\{ t \\mid P(t) \\}$ with quantified tuple variables, while algebra states **how** to build it operator by operator. The graduate question is when a logical description denotes a finite, computable answer independent of the infinite domain of all conceivable tuples. **Safety** restricts quantifiers to range over active-domain values appearing in the database or the query constants, and **domain independence** demands the same answer on every larger domain. Unsafe formulas such as unbounded negation describe infinite complements; safe ones describe exactly the queries an engine can evaluate without enumerating the universe.'
          },
          {
            kind: 'theorem',
            body: 'The classic equivalence states that **safe tuple calculus and relational algebra express exactly the same queries**. For every safe formula $P(t)$ there exists an algebra expression $E$ with the same answer on all instances, and for every algebra expression there exists an equivalent safe formula. In particular, existential quantification corresponds to projection and join, conjunction to cross product plus selection, disjunction to union, and universal quantification to division or double negation. No safe logical query lies beyond algebra, and no algebraic query needs unsafe logic.'
          },
          {
            kind: 'proof',
            body: 'The proof proceeds by structural induction on safe formulas. Atomic predicates $R(t)$ and comparisons become base relations and selections. Conjunction $P \\land Q$ becomes $E_P \\bowtie E_Q$ after aligning free variables, disjunction becomes union after type reconciliation, and existential $\\exists u \\, R(u) \\land P$ becomes projection onto the free attributes of the join of $R$ with the translation of $P$. The hard case is negation: safe $\\lnot P$ is always guarded by a positive range formula, so it translates to set difference against the active-domain relation rather than infinite complement. Universal $\\forall u \\, (R(u) \\to P)$ rewrites as $\\lnot \\exists u \\, (R(u) \\land \\lnot P)$, reducing to difference and division. The converse direction encodes each operator as a guarded formula, completing the equivalence.'
          },
          {
            kind: 'example',
            heading: 'Unsafe complement made safe',
            body: 'Consider $\\{ t \\mid \\lnot Employee(t) \\}$ asking for all non-employee tuples: over an unbounded domain of strings and integers the answer is infinite and no engine can materialize it. The safe, domain-independent rewrite bounds $t$ by the active domain $D$ built from constants and stored values, giving $\\{ t \\mid Person(t) \\land \\lnot Employee(t) \\}$ or in algebra $Person - Employee$. Graduate practice generalizes the fix: every negation needs a **positive guard** that ranges its variable, every universal needs a range relation, and query optimizers use exactly these guards to choose between anti-join and division plans. The example is minimal but the discipline scales to full SQL with `NOT EXISTS` and `EXCEPT`.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: '**Tuple relational calculus** (TRC) states what is wanted without saying how: queries are set-builders $\\{ t \\mid P(t) \\}$ over quantified tuple variables. **Existential** queries ask for some witness row, **universal** queries constrain all rows, and **safety** rules keep answers finite. TRC matches algebra in power but reads like logic — the declarative yardstick behind SQL.',
    objectives: [
      'Read and write TRC set-builders with existential and universal quantifiers',
      'Convert between universal and double-negation existential form',
      'Judge queries safe versus unsafe by domain independence'
    ],
    concepts: [
      {
        term: 'TRC set-builder form',
        kind: 'notation',
        statement: 'A TRC query has the shape $\\{ t \\mid P(t) \\}$: **target** tuple variable `t` plus **condition** `P` built from atoms like $t.Salary > 50000$, $\\land$, $\\lor$, $\\lnot$ and quantifiers. Example: $\\{ t \\mid Employee(t) \\land t.Salary > 50000 \\}$ returns whole qualifying employee tuples; $\\{ t.Name \\mid Employee(t) \\land t.Salary > 50000 \\}$ projects the name.',
        detail: 'Free variables define the output columns; bound variables range inside quantifiers. One free target keeps the query monadic and readable.'
      },
      {
        term: 'Existential queries',
        kind: 'definition',
        statement: 'The **existential** quantifier $\\exists s$ asserts **some** row witnesses the condition: employees of department 10 read $\\{ t \\mid Employee(t) \\land \\exists d\\,(Department(d) \\land d.DeptNo = 10 \\land t.DeptNo = d.DeptNo) \\}$. `EXISTS` in SQL is this quantifier made executable — semi-join in logic clothing.',
        detail: 'Joins in algebra almost always become existential conjunctions in TRC: pair existence, not universal claims.'
      },
      {
        term: 'Universal queries and De Morgan duals',
        kind: 'theorem',
        statement: '**Universal** claims use $\\forall$: students taking every core course read $\\{ s.RollNo \\mid Student(s) \\land \\forall c\\,(Core(c) \\rightarrow Enrols(s, c)) \\}$. The dual $\\forall x\\,P \\equiv \\lnot \\exists x\\,\\lnot P$ rewrites it as **double negation** — no core course lacking an enrolment — which is the division pattern executable in `SQL`.',
        detail: 'Implication $A \\rightarrow B$ inside $\\forall$ is load-bearing: $\\forall c\\,(Core(c) \\land Enrols(s,c))$ wrongly demands every course in the universe be core and taken.'
      },
      {
        term: 'Safe versus unsafe queries',
        kind: 'law',
        statement: 'A query is **safe** when every output value comes from a **finite source**: the database or an explicit bound. $\\{ t \\mid \\lnot Employee(t) \\}$ is **unsafe** — it asks for all non-employees in the universe, an infinite answer. **Safety rule**: each free variable must appear in a positive (non-negated) range atom like `$Employee(t)$`.',
        detail: 'Unsafe queries have no finite evaluation; every practical language restricts or rejects them.'
      },
      {
        term: 'Domain independence',
        kind: 'insight',
        statement: '**Domain independence** means the `query` answer is unchanged if the underlying value universe grows: safe queries are domain independent, unsafe ones are not. Adding a new never-used integer must not alter $\\{ t \\mid Employee(t) \\land t.Salary > 50000 \\}$ — and it does not, because all values originate in stored tuples.',
        detail: 'Independence is the semantic prize; safety is the syntactic guarantee. Check range atoms to certify both.'
      }
    ],
    examples: [
      {
        title: 'Existential: staff of department 10',
        problem: 'Write the TRC for names of employees working in department 10.',
        steps: [
          { label: 'Step 1', text: 'Range the target. ```text\n{ t.Name | Employee(t) ∧ (∃d)(Department(d) ∧ ... ) }\n```\n`t` ranges over Employee, outputting Name.' },
          { label: 'Step 2', text: 'Add the witness. `(Department(d) ∧ d.DeptNo = 10 ∧ t.DeptNo = d.DeptNo)` demands some department-10 row matching the employee link.' },
          { label: 'Step 3', text: 'Check safety. `t` is range-restricted by the positive atom `Employee(t)` — finite and domain independent.' }
        ],
        result: 'One existential conjunction expresses the join declaratively.'
      },
      {
        title: 'Universal: all-core students, then negated',
        problem: 'Write students taking every core course universally, then convert to the executable double negation.',
        steps: [
          { label: 'Step 1', text: 'Universal form. ```text\n{ s.RollNo | Student(s) ∧ (∀c)(Core(c) → Takes(s.RollNo, c)) }\n```' },
          { label: 'Step 2', text: 'Apply the dual. ```text\n{ s.RollNo | Student(s) ∧ ¬(∃c)(Core(c) ∧ ¬Takes(s.RollNo, c)) }\n```\nNo core course exists that the student missed.' },
          { label: 'Step 3', text: 'Map to SQL mentally. Outer `¬∃` becomes `NOT EXISTS`, inner `¬Takes` becomes the inner `NOT EXISTS` — the division idiom of Section 4.3.' }
        ],
        result: 'Universal implication converts to double NOT EXISTS for execution.'
      }
    ],
    keyTakeaways: [
      'TRC queries are { t | P(t) }: free variables shape output, quantifiers range inputs.',
      'Existential quantifiers express joins and membership; universals express for-all claims via implication.',
      '∀ converts to ¬∃¬, giving the executable double-negation (division) pattern.',
      'Safety (positive range atoms for every free variable) guarantees finite, domain-independent answers.'
    ],
    quiz: [
      {
        q: 'What does { t | Employee(t) ∧ ¬Employee(t) } return, and is it safe?',
        options: [
          'All employees; safe',
          'Infinite; unsafe',
          'Empty set; safe since t is range-restricted by a positive atom',
          'All departments; safe'
        ],
        answer: 2,
        explanation: 'Step 1: The condition is a contradiction, so no tuple qualifies. Step 2: t still has the positive range atom Employee(t). Step 3: Finite source plus empty result means safe.'
      },
      // PYQ-pattern: unsafe query recognition via unrestricted negation
      {
        q: 'Why is { t | ¬Employee(t) } unsafe?',
        options: [
          'Because t has no positive range atom, so the answer is the infinite universe minus employees',
          'Because negation is forbidden in TRC',
          'Because Employee is empty',
          'Because conjunction is missing'
        ],
        answer: 0,
        explanation: 'Step 1: Look for a positive atom ranging t — none exists. Step 2: The query then ranges over the whole value universe. Step 3: Infinite answers are exactly what safety forbids.'
      },
      {
        q: 'Convert ∀c (Core(c) → Takes(s, c)) to existential form.',
        options: [
          '∃c (Core(c) ∧ Takes(s, c))',
          '¬∃c (Core(c) ∧ ¬Takes(s, c)): no core course is missed',
          '∃c (¬Core(c) ∨ Takes(s, c)) for all s',
          '∀c (¬Core(c) ∧ ¬Takes(s, c))'
        ],
        answer: 1,
        explanation: 'Step 1: Apply ∀x P ≡ ¬∃x ¬P. Step 2: ¬(Core → Takes) is (Core ∧ ¬Takes). Step 3: The result asserts no missed core course exists.'
      },
      {
        q: 'Inside ∀, why must for-all use implication (→) rather than conjunction (∧)?',
        options: [
          'Conjunction is forbidden with ∀',
          'Implication runs faster',
          'There is no difference; both are equivalent',
          '∧ would demand every universe value be both core and taken, while → restricts the claim to core courses'
        ],
        answer: 3,
        explanation: 'Step 1: ∀ ranges over all values. Step 2: ∧ asserts the body of everything, an absurd global claim. Step 3: → scopes the claim to rows satisfying the premise.'
      }
    ]
  }
]
