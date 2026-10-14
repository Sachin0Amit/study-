import type { SectionContent } from '../library'

// ============================================================================
// Databases — Chapter 4: SQL: Queries, Joins & Subqueries
// Master study content covering Sections 4.1 – 4.4.
// ============================================================================

export const dbmsCh04Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'dbms-ch4-s1',
    readingTime: 9,
    intro: 'The `SELECT` block filters rows with `WHERE`, groups them with `GROUP BY`, and filters groups with `HAVING`. Aggregates (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) summarize each group while nulls are quietly skipped. The `WHERE`-versus-`HAVING` boundary — rows first, groups after — is the single most tested rule of this section.',
    objectives: [
      'Separate row filtering (WHERE) from group filtering (HAVING) in execution order',
      'Apply aggregates correctly, including NULL skipping and COUNT(*) versus COUNT(col)',
      'Write GROUP BY queries where every bare column is functionally grouped'
    ],
    concepts: [
      {
        term: 'Logical execution order',
        kind: 'law',
        statement: 'SQL executes logically as **`FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY`**, whatever the written order. Hence `WHERE` cannot see aggregates or aliases, while **`HAVING`** filters **groups after** aggregation — `WHERE Salary > 0` cleans rows, `HAVING COUNT(*) > 5` keeps big departments.',
        detail: 'Alias errors ("unknown column Total") come from this order: `SELECT` aliases do not exist yet when `WHERE` runs, but are visible to `ORDER BY`.'
      },
      {
        term: 'WHERE filters rows',
        kind: 'definition',
        statement: 'The **`WHERE`** clause keeps individual tuples satisfying a boolean predicate, for example ```sql\nSELECT Name FROM Employee WHERE DeptNo = 10 AND Salary > 50000;\n``` Only rows evaluating to **`TRUE`** survive; `FALSE` and `UNKNOWN` (null comparisons) are discarded identically.',
        detail: 'Range filters, `IN` lists, `LIKE` patterns and `BETWEEN` all live here; anything needing a per-group summary belongs in `HAVING`.'
      },
      {
        term: 'Aggregates skip nulls',
        kind: 'theorem',
        statement: '**Aggregate functions ignore `NULL`** (except `COUNT(*)`): `COUNT(Salary)` counts non-null salaries, `AVG(Salary)` averages the known ones, `SUM` totals them. Only **`COUNT(*)`** counts **rows** including null-bearing ones — so `COUNT(*)` exceeds `COUNT(Bonus)` exactly by the null count.',
        detail: 'If every input is null, `COUNT` returns $0$ while `SUM`/`AVG`/`MIN`/`MAX` return `NULL` — a favourite trap in output-prediction items.'
      },
      {
        term: 'GROUP BY discipline',
        kind: 'law',
        statement: 'Every bare (non-aggregated) column in `SELECT` or `HAVING` must appear in **`GROUP BY`** (or be functionally determined by it): ```sql\nSELECT DeptNo, AVG(Salary) FROM Employee GROUP BY DeptNo;\n``` Grouping by `DeptNo` yields one row per department; selecting an ungrouped `Name` beside it is rejected because one group holds many names.',
        detail: 'Grouping by a key (or its superset) is always safe; grouping by nothing (omitted `GROUP BY`) folds the whole table into one group.'
      },
      {
        term: 'HAVING filters groups',
        kind: 'definition',
        statement: 'The **`HAVING`** clause predicates on **group properties** after aggregation: departments averaging above 60000 read ```sql\nSELECT DeptNo, AVG(Salary) AS A FROM Employee\nGROUP BY DeptNo HAVING AVG(Salary) > 60000;\n``` `WHERE` could never express this — per-row salaries know nothing of departmental averages.',
        detail: 'Mnemonic: `WHERE` asks "which rows enter groups", `HAVING` asks "which groups survive to output".'
      }
    ],
    examples: [
      {
        title: 'Department averages above a bar',
        problem: 'List departments with more than 2 employees whose average salary exceeds 60000.',
        steps: [
          { label: 'Step 1', text: 'Filter rows first (none needed beyond non-null salaries). ```sql\nSELECT DeptNo, AVG(Salary) AS A, COUNT(*) AS C\nFROM Employee GROUP BY DeptNo\nHAVING COUNT(*) > 2 AND AVG(Salary) > 60000;\n```' },
          { label: 'Step 2', text: 'Read the grouping. One output row per `DeptNo`; `WHERE` is absent because no per-row condition was stated.' },
          { label: 'Step 3', text: 'Check legality. Bare column `DeptNo` is grouped; everything else is aggregated — the GROUP BY discipline holds.' }
        ],
        result: 'One row per qualifying department with its average; small or low-paid departments filtered by HAVING.'
      },
      {
        title: 'COUNT(*) versus COUNT(Bonus)',
        problem: 'Ten employees exist; four have null bonuses. Predict `COUNT(*)`, `COUNT(Bonus)` and `AVG(Bonus)`.',
        steps: [
          { label: 'Step 1', text: 'Count rows versus values. ```sql\nSELECT COUNT(*), COUNT(Bonus), AVG(Bonus) FROM Employee;\n-- 10, 6, (sum of 6 known)/6\n```' },
          { label: 'Step 2', text: 'Explain the gap. `COUNT(*)` counts rows (10); `COUNT(Bonus)` counts known values (6); the average divides by 6, not 10.' },
          { label: 'Step 3', text: 'Generalize. Aggregates skip nulls, so averages over sparse columns run higher than sum-divided-by-row-count would.' }
        ],
        result: '10 versus 6; AVG divides by the non-null count only.'
      }
    ],
    keyTakeaways: [
      'Logical order FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY decides what each clause may reference.',
      'WHERE filters rows (TRUE only); HAVING filters groups after aggregation.',
      'Aggregates skip NULLs; only COUNT(*) counts rows — COUNT(col) counts known values.',
      'Every bare SELECT column must be grouped; omitting GROUP BY folds all rows into one group.'
    ],
    quiz: [
      // PYQ-pattern: WHERE versus HAVING placement for aggregate conditions
      {
        q: 'Where does the condition AVG(Salary) > 60000 belong?',
        options: [
          'In WHERE, since it filters salaries',
          'In HAVING, since it predicates on a per-group aggregate after grouping',
          'In ORDER BY only',
          'In the FROM clause as a join condition'
        ],
        answer: 1,
        explanation: 'Step 1: AVG(Salary) summarizes a whole group. Step 2: WHERE runs before groups exist. Step 3: Group-level predicates belong to HAVING, which runs after aggregation.'
      },
      {
        q: 'Bonus is null in 4 of 10 rows. What do COUNT(*) and COUNT(Bonus) return?',
        options: ['10 and 10', '6 and 6', '6 and 10', '10 and 6'],
        answer: 3,
        explanation: 'Step 1: COUNT(*) counts rows regardless of nulls: 10. Step 2: COUNT(Bonus) skips nulls: 6. Step 3: The gap equals exactly the null count.'
      },
      {
        q: 'SELECT DeptNo, Name, AVG(Salary) ... GROUP BY DeptNo fails. Why?',
        options: [
          'Name is a bare column not in GROUP BY, yet one group holds many names',
          'AVG needs DISTINCT always',
          'DeptNo cannot be grouped',
          'HAVING is missing'
        ],
        answer: 0,
        explanation: 'Step 1: Check each SELECT item against GROUP BY. Step 2: Name is neither grouped nor aggregated. Step 3: One output row cannot show many names, so the query is rejected.'
      },
      {
        q: 'Why does WHERE Bonus = NULL return nothing?',
        options: [
          'Because bonuses are all zero',
          'Because WHERE cannot mention Bonus',
          'Because = NULL yields UNKNOWN for every row and WHERE keeps only TRUE',
          'Because NULL equals FALSE directly'
        ],
        answer: 2,
        explanation: 'Step 1: NULL comparisons evaluate to UNKNOWN. Step 2: WHERE discards FALSE and UNKNOWN alike. Step 3: Only IS NULL tests null membership correctly.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.2
  {
    sectionId: 'dbms-ch4-s2',
    readingTime: 9,
    intro: 'SQL spells joins explicitly: `INNER JOIN ... ON` for matches, `LEFT/RIGHT/FULL OUTER JOIN` for preserved unmatched rows, and `UNION/INTERSECT/EXCEPT` for combining whole result sets. `UNION` dedupes while `UNION ALL` keeps duplicates — a performance and correctness fork. This section turns each algebra operator of Chapter 3 into its SQL spelling.',
    objectives: [
      'Write inner and outer joins with ON versus USING correctly',
      'Choose UNION versus UNION ALL and INTERSECT/EXCEPT by dedup needs',
      'Predict NULL padding and duplicate behaviour of each construct'
    ],
    concepts: [
      {
        term: 'INNER JOIN with ON',
        kind: 'definition',
        statement: 'An **`INNER JOIN ... ON`** returns only matching pairs: ```sql\nSELECT E.Name, D.DName FROM Employee E\nINNER JOIN Department D ON E.DeptNo = D.DeptNo;\n``` Unmatched employees and childless departments both vanish — inner means **matched only**, mirroring $\\bowtie$ exactly.',
        detail: 'Comma-style `FROM Employee E, Department D WHERE ...` is equivalent but mixes join with filter logic; explicit `JOIN ... ON` keeps them separate.'
      },
      {
        term: 'Outer joins and null padding',
        kind: 'definition',
        statement: '**`LEFT OUTER JOIN`** preserves the left table, **`RIGHT`** the right, **`FULL`** both, padding misses with **`NULL`**: ```sql\nSELECT D.DName, E.Name FROM Department D\nLEFT OUTER JOIN Employee E ON E.DeptNo = D.DeptNo;\n``` Childless departments appear once with a null `Name` — the "show X even with no Y" report.',
        detail: 'Counting after outer joins needs care: `COUNT(*)` counts padded rows while `COUNT(E.EmpId)` counts real matches.'
      },
      {
        term: 'ON versus USING versus NATURAL',
        kind: 'method',
        statement: '**`ON`** takes any predicate (`ON E.DeptNo = D.DeptNo`); **`USING (DeptNo)`** equates one shared column and shows it **once**; **`NATURAL JOIN`** equates **all** shared names implicitly. Prefer `ON` or `USING`: `NATURAL` silently absorbs any future same-named column into the condition.',
        detail: 'USING output has a single join column; ON output keeps both `E.DeptNo` and `D.DeptNo` — relevant when selecting `*`.'
      },
      {
        term: 'UNION versus UNION ALL',
        kind: 'theorem',
        statement: '**`UNION`** dedupes across both inputs (set semantics) while **`UNION ALL`** concatenates (bag semantics, faster): ```sql\nSELECT RollNo FROM Takes WHERE Course = \\u2018DB\\u2019\nUNION\nSELECT RollNo FROM Takes WHERE Course = \\u2018OS\\u2019;\n``` A roll taking both appears **once** under `UNION`, **twice** under `UNION ALL` — identical inputs differ only in dedup cost and result.',
        detail: 'Both branches must be union compatible (same degree, matching types); `ORDER BY` may appear only once at the very end.'
      },
      {
        term: 'INTERSECT and EXCEPT',
        kind: 'definition',
        statement: '**`INTERSECT`** keeps rows in both branches (dual membership); **`EXCEPT`** keeps rows in the first but not the second (set difference): ```sql\nSELECT RollNo FROM Takes WHERE Course = \\u2018DB\\u2019\nEXCEPT\nSELECT RollNo FROM Takes WHERE Course = \\u2018OS\\u2019;\n``` `EXCEPT` is directional — swapping branches inverts the answer — while `INTERSECT` is symmetric.',
        detail: 'Both dedupe like `UNION`; use `EXCEPT` for "took A but not B" and `INTERSECT` for "took both".'
      }
    ],
    examples: [
      {
        title: 'All departments with headcounts',
        problem: 'Show each department name with its employee count, including zero-staff departments.',
        steps: [
          { label: 'Step 1', text: 'Preserve departments. ```sql\nSELECT D.DName, COUNT(E.EmpId) AS Headcount\nFROM Department D LEFT OUTER JOIN Employee E\n  ON E.DeptNo = D.DeptNo\nGROUP BY D.DName;\n```' },
          { label: 'Step 2', text: 'Count the right thing. `COUNT(E.EmpId)` skips null-padded misses (giving 0); `COUNT(*)` would wrongly count each padded row as 1.' },
          { label: 'Step 3', text: 'Confirm inner would fail. An inner join drops childless departments entirely — the report would silently omit them.' }
        ],
        result: 'Every department appears; empty ones show 0 via the outer join plus nullable-side COUNT.'
      },
      {
        title: 'DB-but-not-OS rolls',
        problem: 'List rolls taking DB but not OS from `Takes(RollNo, Course)`.',
        steps: [
          { label: 'Step 1', text: 'Write the difference. ```sql\nSELECT RollNo FROM Takes WHERE Course = \\u2018DB\\u2019\nEXCEPT\nSELECT RollNo FROM Takes WHERE Course = \\u2018OS\\u2019;\n```' },
          { label: 'Step 2', text: 'Check compatibility. Both branches project one integer column — union compatible by construction.' },
          { label: 'Step 3', text: 'Contrast with UNION. `UNION` would give DB-or-OS takers; `INTERSECT` both-takers; `EXCEPT` directionally gives DB-only.' }
        ],
        result: 'EXCEPT returns exactly the DB-only rolls, deduped.'
      }
    ],
    keyTakeaways: [
      'INNER JOIN keeps matches only; LEFT/RIGHT/FULL preserve one or both sides with NULL padding.',
      'Prefer ON or USING over NATURAL JOIN to avoid silent condition changes.',
      'UNION dedupes (slower), UNION ALL concatenates (faster); branches must be union compatible.',
      'INTERSECT is symmetric dual membership; EXCEPT is directional set difference.'
    ],
    quiz: [
      {
        q: 'Which join lists childless departments with NULL employee columns?',
        options: [
          'Employee INNER JOIN Department',
          'Department LEFT OUTER JOIN Employee ON the key',
          'Employee LEFT OUTER JOIN Department',
          'CROSS JOIN of the two tables'
        ],
        answer: 1,
        explanation: 'Step 1: The preserved side is Department. Step 2: LEFT preserves the left table named first. Step 3: Misses pad with NULLs, so childless departments survive.'
      },
      // PYQ-pattern: UNION versus UNION ALL duplicate behaviour
      {
        q: 'A roll takes both DB and OS. How does it appear under UNION versus UNION ALL of the two course lists?',
        options: [
          'Once under both',
          'Twice under both',
          'Once under UNION (dedup), twice under UNION ALL (concatenation)',
          'Zero times under UNION ALL'
        ],
        answer: 2,
        explanation: 'Step 1: The roll occurs in both branches. Step 2: UNION applies set semantics and dedupes. Step 3: UNION ALL concatenates bags, keeping both copies.'
      },
      {
        q: 'Why is NATURAL JOIN riskier than JOIN ... USING (DeptNo)?',
        options: [
          'It equates every shared column name, so an added same-named column silently changes results',
          'It is slower on all systems',
          'It cannot handle integer keys',
          'It always produces a cross product'
        ],
        answer: 0,
        explanation: 'Step 1: NATURAL uses all shared names as conditions. Step 2: Schema evolution can add coincidental shared names. Step 3: USING pins the condition to the named column only.'
      },
      {
        q: 'After a LEFT OUTER JOIN, which count gives real matches per department?',
        options: [
          'COUNT(*), which counts padded rows too',
          'COUNT(DISTINCT DName)',
          'SUM(DeptNo)',
          'COUNT(E.EmpId), which skips NULL-padded misses'
        ],
        answer: 3,
        explanation: 'Step 1: Padded rows carry NULL on the nullable side. Step 2: COUNT(*) counts rows including padded ones. Step 3: COUNT of a nullable-side column skips NULLs, counting true matches.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.3
  {
    sectionId: 'dbms-ch4-s3',
    readingTime: 11,
    intro: 'Subqueries nest one query inside another: **uncorrelated** subqueries run once, **correlated** subqueries re-run per outer row. `IN`, `EXISTS`, `ANY` and `ALL` compare a value against a set, and double `NOT EXISTS` expresses for-all division. Correlation is powerful but row-by-row — understanding evaluation order tells you when it wins and when it crawls.',
    objectives: [
      'Separate uncorrelated from correlated evaluation with scoping rules',
      'Choose IN versus EXISTS and ANY/ALL for each comparison shape',
      'Write the double-NOT-EXISTS division pattern and the top-N correlated pattern'
    ],
    concepts: [
      {
        term: 'Uncorrelated subqueries run once',
        kind: 'definition',
        statement: 'An **uncorrelated** subquery mentions only its own tables, executes **once**, and feeds its result to the outer query: ```sql\nSELECT Name FROM Employee\nWHERE DeptNo IN (SELECT DeptNo FROM Department WHERE Loc = \\u2018Mumbai\\u2019);\n``` The inner list is built first; the outer query then filters against the frozen set.',
        detail: 'Uncorrelated `IN` with a small inner result is the cheapest nesting shape — one inner execution, then a membership test per outer row.'
      },
      {
        term: 'Correlated subqueries run per row',
        kind: 'definition',
        statement: 'A **correlated** subquery references **outer** columns and re-evaluates **per outer row**: ```sql\nSELECT Name FROM Employee E\nWHERE Salary > (SELECT AVG(Salary) FROM Employee WHERE DeptNo = E.DeptNo);\n``` `E.DeptNo` changes each iteration, so the average is recomputed department by department — conceptually $n$ inner runs for $n$ outer rows.',
        detail: 'Correlation is required when the inner condition depends on the current outer row (per-group comparisons, existence of a partner, latest-row tests).'
      },
      {
        term: 'IN versus EXISTS with nulls',
        kind: 'theorem',
        statement: '**`EXISTS`** tests **non-emptiness** (true on any row, null-safe); **`IN`** tests **membership** and goes `UNKNOWN` when the set holds `NULL`: `x IN (1, NULL)` is never true for $x = 2$. Hence **`NOT IN` with a nullable subquery can return nothing**, while the equivalent **`NOT EXISTS`** stays correct — prefer `EXISTS` under nullable columns.',
        detail: 'Rule of thumb: `IN` for small fixed lists, `EXISTS` for subqueries — especially negated or nullable ones.'
      },
      {
        term: 'ANY and ALL comparisons',
        kind: 'notation',
        statement: '**`> ANY`** means greater than **at least one** (equivalently `> MIN`); **`> ALL`** means greater than **every** one (equivalently `> MAX`): ```sql\nSELECT Name FROM Employee WHERE Salary > ALL\n  (SELECT Salary FROM Employee WHERE DeptNo = 20);\n``` `= ANY` is `IN`; `<> ALL` is `NOT IN` — the four pairings cover all quantified comparisons.',
        detail: 'Empty subquery results: every `ALL` comparison is vacuously true, every `ANY` is false — check emptiness before trusting quantified filters.'
      },
      {
        term: 'Division via double NOT EXISTS',
        kind: 'method',
        statement: '**For-all** in SQL is **double `NOT EXISTS`**: students taking every core course read ```sql\nSELECT S.RollNo FROM Student S WHERE NOT EXISTS (\n  SELECT * FROM Core C WHERE NOT EXISTS (\n    SELECT * FROM Takes T\n    WHERE T.RollNo = S.RollNo AND T.CourseId = C.CourseId));\n``` Outer negation: no core course exists that is missed; inner negation: the missed enrolment. Correlation links (`T.RollNo = S.RollNo`) carry the outer row inward.',
        detail: 'Read it as "no counterexample": the pattern is the executable form of the Section 3.3 division identity.'
      }
    ],
    examples: [
      {
        title: 'Above-average earners per department',
        problem: 'Find employees earning more than their own department average.',
        steps: [
          { label: 'Step 1', text: 'Correlate on the department. ```sql\nSELECT E.Name FROM Employee E\nWHERE E.Salary > (SELECT AVG(X.Salary) FROM Employee X\n                   WHERE X.DeptNo = E.DeptNo);\n```\n`E.DeptNo` ties each inner average to the current outer row.' },
          { label: 'Step 2', text: 'Trace evaluation. For each employee row, compute that department average, compare, keep or drop — $n$ conceptual inner runs.' },
          { label: 'Step 3', text: 'Note the uncorrelated alternative fails: a single global average would compare everyone against the company mean, answering a different question.' }
        ],
        result: 'Correlated scalar subquery compares each salary against its own department mean.'
      },
      {
        title: 'Division: all-core students in SQL',
        problem: 'List rolls taking every course in `Core(CourseId)` using `Takes(RollNo, CourseId)`.',
        steps: [
          { label: 'Step 1', text: 'Write double NOT EXISTS. ```sql\nSELECT DISTINCT T0.RollNo FROM Takes T0 WHERE NOT EXISTS (\n  SELECT * FROM Core C WHERE NOT EXISTS (\n    SELECT * FROM Takes T WHERE T.RollNo = T0.RollNo\n      AND T.CourseId = C.CourseId));\n```' },
          { label: 'Step 2', text: 'Read inner-out: for candidate roll, the inner query finds a core course with no matching take; the outer keeps rolls where no such course exists.' },
          { label: 'Step 3', text: 'Test on {(1,C1),(1,C2),(2,C1)} with Core {C1,C2}: roll 1 survives (no gap), roll 2 is removed (gap C2).' }
        ],
        result: 'Double NOT EXISTS returns exactly the complete-coverage rolls.'
      }
    ],
    keyTakeaways: [
      'Uncorrelated subqueries run once on frozen sets; correlated ones re-evaluate per outer row via outer references.',
      'EXISTS tests non-emptiness and is null-safe; NOT IN with nulls can empty the answer — prefer NOT EXISTS.',
      '> ANY compares against the minimum, > ALL against the maximum; = ANY is IN.',
      'For-all queries use double NOT EXISTS ("no missed required row"), correlated through the outer key.'
    ],
    quiz: [
      // PYQ-pattern: correlated versus uncorrelated identification
      {
        q: 'What makes a subquery correlated?',
        options: [
          'It uses aggregate functions',
          'It references outer-query columns, so it re-evaluates per outer row',
          'It appears in the FROM clause',
          'It returns more than one column'
        ],
        answer: 1,
        explanation: 'Step 1: Check whether inner predicates mention outer aliases. Step 2: Outer references change per row. Step 3: The inner query must therefore run once per outer row.'
      },
      // PYQ-pattern: NOT IN with NULL versus NOT EXISTS
      {
        q: 'The subquery may return NULLs. Which negated form stays correct?',
        options: [
          'NOT IN, which handles nulls transparently',
          'Neither works with nulls present',
          '<> ANY over the same set',
          'NOT EXISTS, since it tests row presence rather than UNKNOWN-prone membership'
        ],
        answer: 3,
        explanation: 'Step 1: NULL membership yields UNKNOWN, poisoning NOT IN. Step 2: EXISTS checks non-emptiness of correlated rows. Step 3: Presence testing is null-safe, so NOT EXISTS is the robust choice.'
      },
      {
        q: 'Salary > ALL (dept-20 salaries) is equivalent to?',
        options: [
          'Salary greater than the maximum dept-20 salary',
          'Salary greater than at least one dept-20 salary',
          'Salary equal to some dept-20 salary',
          'Salary less than the minimum dept-20 salary'
        ],
        answer: 0,
        explanation: 'Step 1: ALL quantifies over every set member. Step 2: Exceeding all means exceeding their maximum. Step 3: The ANY form would instead compare against the minimum.'
      },
      {
        q: 'The double-NOT-EXISTS pattern expresses?',
        options: [
          'Existence of at least one partner row',
          'The maximum value per group',
          'For-all coverage: no required row is missed by the candidate',
          'Set union of two branches'
        ],
        answer: 2,
        explanation: 'Step 1: The inner NOT EXISTS finds a missed required row. Step 2: The outer NOT EXISTS keeps candidates with no misses. Step 3: No-missed-requirement is exactly universal coverage (division).'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.4
  {
    sectionId: 'dbms-ch4-s4',
    readingTime: 8,
    intro: '**DDL** (`CREATE`, `ALTER`, `DROP`) builds the schema itself: tables, keys, checks and defaults. **Views** package queries as virtual tables for simplification and security, though only simple views accept updates. This section completes SQL by covering schema evolution, view updatability rules and the transactional frame (`COMMIT`/`ROLLBACK`) that wraps multi-statement changes.',
    objectives: [
      'Write CREATE TABLE with keys, checks, defaults and foreign-key actions',
      'Evolve schemas with ALTER TABLE and state DROP versus DELETE differences',
      'Judge views updatable or read-only and use WITH CHECK OPTION correctly'
    ],
    concepts: [
      {
        term: 'CREATE TABLE anatomy',
        kind: 'definition',
        statement: 'A **`CREATE TABLE`** fixes columns, types, defaults and table-level constraints in one block: ```sql\nCREATE TABLE Employee(EmpId INT PRIMARY KEY, Name TEXT NOT NULL,\n  Salary INT DEFAULT 30000 CHECK (Salary > 0),\n  DeptNo INT REFERENCES Department(DeptNo) ON DELETE SET NULL);\n``` `DEFAULT` fills missing inserts; `CHECK` guards rows; key clauses guard identity and links.',
        detail: 'Name constraints (`CONSTRAINT emp_sal CHECK ...`) for readable violation messages; anonymous constraints are harder to diagnose.'
      },
      {
        term: 'ALTER versus DROP versus DELETE',
        kind: 'method',
        statement: '**`ALTER TABLE`** evolves structure (`ADD COLUMN`, `DROP COLUMN`, `ADD CONSTRAINT`); **`DROP TABLE`** removes structure **and** data; **`DELETE`** removes **rows only**, keeping the schema. ```sql\nALTER TABLE Employee ADD COLUMN Email TEXT UNIQUE;\n``` migrates live tables, while `DROP TABLE EmpPhone` erases the table itself.',
        detail: '`TRUNCATE` is the fast row-wipe (deallocating storage, often non-transactional); `DELETE` is the logged row-by-row removal.'
      },
      {
        term: 'Views as virtual tables',
        kind: 'definition',
        statement: 'A **`VIEW`** stores a query, not rows, and is recomputed per reference: ```sql\nCREATE VIEW HighPaid AS\nSELECT Name, Salary FROM Employee WHERE Salary > 80000;\n``` Views **simplify** (hide join complexity), **secure** (expose only permitted columns/rows) and **stabilize** interfaces against base-table reshaping.',
        detail: 'Querying the view re-runs its definition against current base data — views never go stale, but they add per-reference cost.'
      },
      {
        term: 'Updatable-view rules',
        kind: 'law',
        statement: 'A view is **updatable** only when each view row maps to **exactly one** base row: single table, no `DISTINCT`, no aggregates, no `GROUP BY`, and all non-null key columns present. `HighPaid` above qualifies; a grouped `DeptAvg` view does not — inserts through it have **nowhere to go**, and deletes would remove **indeterminate** rows.',
        detail: '`WITH CHECK OPTION` forces inserts/updates through the view to still satisfy its `WHERE` — no smuggling low-paid rows via the `HighPaid` view.'
      },
      {
        term: 'Transactions frame multi-statement writes',
        kind: 'insight',
        statement: 'A **transaction** bundles writes between **`BEGIN`** and **`COMMIT`**, with **`ROLLBACK`** undoing all of them on failure: transfers debit and credit atomically or not at all. DDL auto-commits on most systems, but every multi-row `INSERT`/`UPDATE`/`DELETE` sequence belongs inside an explicit transaction for **all-or-nothing** safety.',
        detail: 'Views and constraints are checked per statement inside the transaction; deferrable constraints wait until `COMMIT` — the bridge to Chapter 6 serializability.'
      }
    ],
    examples: [
      {
        title: 'Create and evolve a table',
        problem: 'Create `Department(DeptNo, DName, Budget)` with a positive-budget check, then add a location column later.',
        steps: [
          { label: 'Step 1', text: 'Create with constraints. ```sql\nCREATE TABLE Department(DeptNo INT PRIMARY KEY,\n  DName TEXT UNIQUE NOT NULL,\n  Budget INT CHECK (Budget >= 0));\n```' },
          { label: 'Step 2', text: 'Evolve without data loss. ```sql\nALTER TABLE Department ADD COLUMN Loc TEXT DEFAULT \\u2018HQ\\u2019;\n```\nExisting rows receive the default; the schema keeps its data.' },
          { label: 'Step 3', text: 'Contrast destructive twins. `DELETE FROM Department` empties rows but keeps the table; `DROP TABLE Department` removes table, data and dependent views.' }
        ],
        result: 'CREATE fixes structure plus rules; ALTER evolves; DELETE/DROP differ in rows versus schema.'
      },
      {
        title: 'Updatable view with check option',
        problem: 'Expose high-paid staff for edits while blocking salary drops below the view threshold.',
        steps: [
          { label: 'Step 1', text: 'Create the constrained view. ```sql\nCREATE VIEW HighPaid AS\nSELECT EmpId, Name, Salary FROM Employee\nWHERE Salary > 80000 WITH CHECK OPTION;\n```' },
          { label: 'Step 2', text: 'Verify updatability. Single table, no aggregates, key `EmpId` present — each view row maps to one base row, so updates propagate.' },
          { label: 'Step 3', text: 'Test the guard. Updating a view salary to 50000 violates `WITH CHECK OPTION` and is rejected — edits cannot smuggle rows out of the view.' }
        ],
        result: 'Simple views accept guarded writes; grouped or joined views stay read-only.'
      }
    ],
    keyTakeaways: [
      'CREATE TABLE bundles types, defaults, keys, checks and referential actions in one declaration.',
      'ALTER evolves structure with data kept; DELETE wipes rows; DROP removes schema plus data.',
      'Views virtualize queries for simplicity and security and recompute on each reference.',
      'Updatable views need single-table row-to-row mapping; WITH CHECK OPTION pins writes inside the view predicate.'
    ],
    quiz: [
      {
        q: 'What does ALTER TABLE ... ADD COLUMN do to existing rows?',
        options: [
          'Deletes all existing rows',
          'Keeps rows, filling the new column with its DEFAULT (or NULL)',
          'Drops the primary key',
          'Converts the table to a view'
        ],
        answer: 1,
        explanation: 'Step 1: ALTER changes structure, not membership. Step 2: Stored rows persist through the migration. Step 3: The new column is backfilled per row with the default value.'
      },
      // PYQ-pattern: updatable view conditions
      {
        q: 'Which view accepts INSERT statements?',
        options: [
          'A grouped view with AVG(Salary) per department',
          'A DISTINCT projection over two joined tables',
          'A single-table view over Employee holding its key with no aggregates or DISTINCT',
          'A UNION of two tables with aggregates'
        ],
        answer: 2,
        explanation: 'Step 1: Updatability needs one view row to map to one base row. Step 2: Aggregates, DISTINCT and joins break that mapping. Step 3: Only the simple keyed single-table view qualifies.'
      },
      {
        q: 'What does WITH CHECK OPTION enforce?',
        options: [
          'Faster view evaluation via caching',
          'Only managers may query the view',
          'The view becomes materialized',
          'Writes through the view must keep satisfying the view WHERE condition'
        ],
        answer: 3,
        explanation: 'Step 1: Views expose a filtered subset. Step 2: Bare views allow edits that eject rows from the subset. Step 3: The option rejects writes violating the defining predicate.'
      },
      {
        q: 'DROP TABLE versus DELETE FROM differ how?',
        options: [
          'DROP removes schema plus data and dependents; DELETE removes rows only, keeping structure',
          'They are identical in effect',
          'DELETE removes the schema; DROP removes rows',
          'Both only remove constraints'
        ],
        answer: 0,
        explanation: 'Step 1: DELETE is a row operation. Step 2: The table definition survives DELETE. Step 3: DROP destroys the definition, data and dependent objects together.'
      }
    ]
  }
]
