import type { SectionContent } from '../library'

// ============================================================================
// Databases — Chapter 2: Relational Model, Keys & Constraints
// Master study content covering Sections 2.1 – 2.4.
// ============================================================================

export const dbmsCh02Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'dbms-ch2-s1',
    readingTime: 7,
    intro: 'A **relation** is a set of tuples over named attributes, each drawing values from its **domain**. The **schema** fixes structure while the **instance** holds the current rows, and every value must be **atomic**. This section pins down tuples, domains, nulls and the set-nature of relations that all later constraints assume.',
    objectives: [
      'Separate relation schema (structure) from relation instance (current rows)',
      'State the atomic-domain rule and the set properties: no duplicate tuples, no ordering',
      'Explain NULL as unknown and its three-valued-logic pitfalls'
    ],
    concepts: [
      {
        term: 'Relation schema versus instance',
        kind: 'definition',
        statement: 'A **relation schema** names the relation and its attributes with domains, for example `Employee(EmpId: integer, Name: string)`. A **relation instance** is the current **set** of tuples, for example `{ (101, \\u201cAsha\\u201d), (102, \\u201cDev\\u201d) }`. Schemas are stable; instances change with every `INSERT` or `DELETE`.',
        detail: 'Think of the schema as the table header plus types, and the instance as the rows visible right now. Constraints are declared on the schema but checked against the instance.'
      },
      {
        term: 'Tuple, attribute, domain, degree, cardinality',
        kind: 'notation',
        statement: 'A **tuple** is an ordered list of values, one per attribute; an **attribute** is a named column such as `Salary`; a **domain** is the pool of legal values such as integers from $0$ to $10^9$. **Degree** counts attributes (columns) while **cardinality** counts tuples (rows) of relation `R`.',
        detail: 'Domains may be shared across attributes: `HomePhone` and `WorkPhone` can both draw from the same phone-number domain while remaining distinct attributes.'
      },
      {
        term: 'Atomic values and first normal form preview',
        kind: 'law',
        statement: 'Every tuple component must be **atomic** — a single indivisible value from its domain, never a set or a nested record. A cell holding `{94480, 94481}` violates atomicity and the relation is not in **first normal form**; the fix is the separate-table treatment of Section 1.4.',
        detail: 'Atomicity is about the model, not display: a formatted address string is atomic if the schema never addresses its parts, but composite once parts are queried.'
      },
      {
        term: 'Relations are sets',
        kind: 'theorem',
        statement: 'A relation is a **set** of tuples: **no duplicate tuples** exist and there is **no ordering** of rows or (logically) of columns. Hence `{ t1, t2 } = { t2, t1 }`, and a query result is fully determined by membership, not position — access rows by `key` values, never by row number.',
        detail: 'Physical systems store rows in some order, but the model promises nothing; any logic depending on storage order is broken by definition.'
      },
      {
        term: 'NULL means unknown, not zero or blank',
        kind: 'insight',
        statement: 'A **`NULL`** marks a value that is **unknown or inapplicable**, and it is not equal to anything — not even to itself, since `NULL = NULL` evaluates to **unknown** under **three-valued logic** (`TRUE`, `FALSE`, `UNKNOWN`). Only the predicate **`IS NULL`** reliably finds nulls; comparisons with `=` silently drop them.',
        detail: 'Aggregates skip nulls (`COUNT(Salary)` ignores missing entries) while `COUNT(*)` counts rows — the single most tested null behaviour in query sections.'
      }
    ],
    examples: [
      {
        title: 'Schema, instance, degree, cardinality',
        problem: 'Given `Student(RollNo, Name, Marks)` holding 40 rows, identify schema versus instance and state degree and cardinality.',
        steps: [
          { label: 'Step 1', text: 'Split structure from content. ```text\nschema   : Student(RollNo: int, Name: string, Marks: int)\ninstance : the 40 tuples stored right now\n```' },
          { label: 'Step 2', text: 'Count columns versus rows. Degree is the attribute count: $3$. Cardinality is the tuple count: $40$. Inserting one row changes cardinality, never degree.' },
          { label: 'Step 3', text: 'Apply set rules. Re-inserting an existing tuple changes nothing logically; duplicate rows are rejected by the set property (or by a key, Section 2.2).' }
        ],
        result: 'Degree $3$, cardinality $40$; schema fixed, instance mutable, duplicates impossible.'
      },
      {
        title: 'NULL comparison trap',
        problem: 'A query lists employees with `Bonus = NULL` and returns nothing despite null bonuses existing. Diagnose and fix it.',
        steps: [
          { label: 'Step 1', text: 'Evaluate the predicate. ```sql\nSELECT Name FROM Employee WHERE Bonus = NULL; -- always UNKNOWN, no rows\n```\nEvery comparison with `NULL` yields `UNKNOWN`, and `WHERE` keeps only `TRUE` rows.' },
          { label: 'Step 2', text: 'Use the null-safe predicate. ```sql\nSELECT Name FROM Employee WHERE Bonus IS NULL; -- correct\n```' },
          { label: 'Step 3', text: 'Generalize. In `WHERE`, `= NULL` and `<> NULL` both filter everything out; `IS NULL` / `IS NOT NULL` are the only sound tests.' }
        ],
        result: '`WHERE` keeps only TRUE rows, so null tests must use `IS NULL`, never `= NULL`.'
      }
    ],
    keyTakeaways: [
      'Schema fixes attributes and domains; the instance is the current set of tuples and changes over time.',
      'Degree counts columns, cardinality counts rows; all values must be atomic.',
      'Relations are sets: no duplicates, no intrinsic ordering.',
      'NULL means unknown; `= NULL` is never true — use `IS NULL`, and remember aggregates skip nulls.'
    ],
    quiz: [
      {
        q: 'Which pair correctly matches degree and cardinality?',
        options: [
          'Degree = rows, cardinality = columns',
          'Degree = columns (attributes), cardinality = rows (tuples)',
          'Degree = keys, cardinality = domains',
          'Degree = rows, cardinality = keys'
        ],
        answer: 1,
        explanation: 'Step 1: Degree describes the schema header width. Step 2: Cardinality describes the instance height. Step 3: So degree counts attributes and cardinality counts tuples.'
      },
      {
        q: 'A table cell holds the set {94480, 94481} in one Phone column. What is wrong?',
        options: [
          'Nothing: sets are atomic',
          'It violates entity integrity only',
          'It is fixed by adding a primary key',
          'It violates atomicity, so the relation is not in first normal form and needs a separate table'
        ],
        answer: 3,
        explanation: 'Step 1: Atomic cells hold one value. Step 2: A set of two numbers is non-atomic. Step 3: The remedy is a separate phone table keyed by owner plus value.'
      },
      // PYQ-pattern: three-valued logic with NULL comparisons
      {
        q: '`WHERE Bonus = NULL` returns zero rows though nulls exist. Why?',
        options: [
          'Because every comparison with NULL yields UNKNOWN and WHERE keeps only TRUE rows',
          'Because NULL equals zero and no bonus is zero',
          'Because NULL rows are deleted automatically',
          'Because = NULL is a syntax error'
        ],
        answer: 0,
        explanation: 'Step 1: NULL means unknown. Step 2: Unknown compared with = gives UNKNOWN, not TRUE. Step 3: WHERE discards non-TRUE rows, so use IS NULL instead.'
      },
      {
        q: 'Which statement about relation ordering is true in the model?',
        options: [
          'Tuples are stored and returned in insertion order by definition',
          'Duplicate tuples are allowed but unordered',
          'Tuple order and (logically) column order carry no meaning; rows are identified by values',
          'Relations are multisets, so duplicates are part of the model'
        ],
        answer: 2,
        explanation: 'Step 1: Relations are sets of tuples. Step 2: Sets have neither order nor duplicates. Step 3: Ordering appears only when a query explicitly requests it.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'dbms-ch2-s2',
    readingTime: 9,
    intro: 'Keys turn the set property into enforceable structure: **candidate keys** identify tuples minimally, one becomes the **primary key**, and **foreign keys** reference other tables. Choosing keys well — and declaring what happens on delete or update — decides whether the database defends itself or silently corrupts. This section makes key selection and referential actions mechanical.',
    objectives: [
      'Separate superkeys, candidate keys, primary keys and foreign keys on sight',
      'Choose primary keys by minimality, stability and simplicity',
      'Predict the effect of CASCADE, SET NULL, RESTRICT and SET DEFAULT actions'
    ],
    concepts: [
      {
        term: 'Superkey and candidate key',
        kind: 'definition',
        statement: 'A **superkey** is any column set whose values are unique across all possible instances; a **candidate key** is a minimal superkey. If `{EmpId}` is unique, it is a candidate key, while `{EmpId, Name}` is only a **superkey** — minimality fails because `Name` is expendable.',
        detail: 'Minimality is tested by trial removal: drop each column in turn, and if uniqueness survives, the set was not minimal.'
      },
      {
        term: 'Primary key choice',
        kind: 'method',
        statement: 'The **primary key** is the chosen candidate key, declared **`PRIMARY KEY`** and therefore `UNIQUE` plus `NOT NULL`. Prefer keys that are **minimal**, **stable** (never edited, so avoid `PhoneNo` or `Name`), and **simple** (single short column such as `EmpId` over a triple-column composite).',
        detail: 'Surrogate keys (system-generated ids) win when no natural key is stable; natural keys win when the business already guarantees one, like a well-managed `CourseId`.'
      },
      {
        term: 'Foreign key and referential integrity',
        kind: 'definition',
        statement: 'A **foreign key** is a column set in one table referencing the **primary key** (or a `UNIQUE NOT NULL` key) of another: `Employee(DeptNo)` references `Department(DeptNo)`. **Referential integrity** demands every non-null foreign value match a live parent row — dangling references are rejected.',
        detail: 'The referencing table holds the constraint; the referenced columns must be unique so each child points at exactly one parent.'
      },
      {
        term: 'Referential actions on delete and update',
        kind: 'method',
        statement: 'Each foreign key declares its repair policy: **`ON DELETE CASCADE`** removes children with the parent, **`SET NULL`** orphans them safely by nulling the key, **`RESTRICT`** (or `NO ACTION`) blocks the parent change, and **`SET DEFAULT`** repoints them. Deleting a department with `CASCADE` deletes its employees; with `SET NULL` it keeps them keyless.',
        detail: 'Updates propagate the same way via `ON UPDATE`. Default when unspecified is `RESTRICT`-like: the parent change is refused while children exist.'
      },
      {
        term: 'Keys propagate through mapping',
        kind: 'insight',
        statement: 'Every ER mapping decision of Section 1.4 is a key decision: $1:N$ posts the parent **`PRIMARY KEY`** as a child foreign key, $M:N$ tables pair both keys, and weak tables extend the owner key. If a relationship cannot be rebuilt by **joining on keys**, the mapping lost information — the lossless-join test of Chapter 5 in miniature.',
        detail: 'Read any schema by chasing keys: each foreign key is one ER relationship made concrete.'
      }
    ],
    examples: [
      {
        title: 'Pick the primary key',
        problem: '`Employee(EmpId, Ssn, Name, PhoneNo)`: `EmpId` and `Ssn` are each unique; names repeat; phones change. Choose keys with reasons.',
        steps: [
          { label: 'Step 1', text: 'List candidates. ```text\ncandidate keys : {EmpId}, {Ssn}\nsuperkeys      : {EmpId, Name}, {Ssn, PhoneNo}, ...\nreject         : {Name}, {PhoneNo} (not unique/stable)\n```' },
          { label: 'Step 2', text: 'Apply stability and simplicity. `EmpId` is short, system-owned and never edited; `Ssn` is sensitive and occasionally corrected — prefer `EmpId` as primary, keep `Ssn UNIQUE`.' },
          { label: 'Step 3', text: 'Write the declaration. ```sql\nCREATE TABLE Employee(EmpId INT PRIMARY KEY, Ssn CHAR(11) UNIQUE NOT NULL,\n  Name TEXT, PhoneNo TEXT);\n```' }
        ],
        result: 'Primary key `EmpId`; `Ssn` kept unique but secondary; unstable columns never chosen.'
      },
      {
        title: 'Choose a referential action',
        problem: 'Departments may be dissolved; the firm wants historical records of past employees preserved with no department. Which action on `Employee(DeptNo)`?',
        steps: [
          { label: 'Step 1', text: 'Reject CASCADE. ```sql\nDeptNo INT REFERENCES Department(DeptNo) ON DELETE CASCADE -- deletes history, unwanted\n```' },
          { label: 'Step 2', text: 'Compare SET NULL with RESTRICT. `RESTRICT` would block dissolving any staffed department; `SET NULL` keeps employees and clears the link — matching the requirement.' },
          { label: 'Step 3', text: 'Finalize. ```sql\nDeptNo INT REFERENCES Department(DeptNo) ON DELETE SET NULL\n```\nColumn must be nullable for this action to work.' }
        ],
        result: '`ON DELETE SET NULL` with a nullable `DeptNo` preserves history while dissolving departments.'
      }
    ],
    keyTakeaways: [
      'Candidate keys are minimal unique sets; the primary key is the chosen one: UNIQUE plus NOT NULL.',
      'Pick keys that are minimal, stable and simple; keep sensitive or editable uniques as secondary UNIQUE columns.',
      'Foreign keys reference a unique parent key and forbid dangling children.',
      'CASCADE deletes children, SET NULL orphans them, RESTRICT blocks the parent change — match the action to the business rule.'
    ],
    quiz: [
      {
        q: '`{EmpId}` is unique and `{EmpId, Name}` is unique. Which is the candidate key?',
        options: [
          'Both, since both are unique',
          '`{EmpId, Name}`, since larger keys are safer',
          '`{EmpId}`, since it is minimal; the pair is only a superkey',
          'Neither without a foreign key'
        ],
        answer: 2,
        explanation: 'Step 1: Uniqueness makes both superkeys. Step 2: Minimality keeps only `{EmpId}`. Step 3: The pair carries an expendable column, so it is a non-minimal superkey.'
      },
      // PYQ-pattern: referential action semantics on delete
      {
        q: '`Employee(DeptNo)` references `Department` with ON DELETE CASCADE. A department row is deleted. What happens?',
        options: [
          'Employees of that department are deleted with it',
          'Their DeptNo becomes NULL',
          'The delete is blocked',
          'Their DeptNo takes a default value'
        ],
        answer: 0,
        explanation: 'Step 1: CASCADE propagates the delete to children. Step 2: Every employee referencing the removed department is removed. Step 3: No orphans or blocks remain.'
      },
      {
        q: 'A foreign key must reference which columns in the parent table?',
        options: [
          'Any columns, unique or not',
          'The primary key or another UNIQUE NOT NULL key, so each child maps to exactly one parent',
          'Only composite keys',
          'Only the first column of the parent'
        ],
        answer: 1,
        explanation: 'Step 1: A child must resolve to one parent row. Step 2: That needs uniqueness on the referenced columns. Step 3: Hence the primary key or an equivalent unique non-null key.'
      },
      {
        q: 'Why avoid `PhoneNo` as a primary key even if currently unique?',
        options: [
          'Because integers are mandatory for keys',
          'Because it is unstable: numbers change, get reused and may be missing, breaking identity',
          'Because foreign keys cannot reference text',
          'Because candidate keys must be composite'
        ],
        answer: 1,
        explanation: 'Step 1: Primary keys should be stable for life. Step 2: Phone numbers change owners and formats. Step 3: Editing a primary key cascades everywhere, so unstable naturals are rejected.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.3
  {
    sectionId: 'dbms-ch2-s3',
    readingTime: 8,
    intro: '**Integrity constraints** are schema-level promises the system enforces on every insert, update and delete: domains bound each column, entity integrity protects keys, referential integrity guards links, and `CHECK` plus assertions encode business rules. Stating rules declaratively beats re-checking them in every application. This section catalogues each constraint family with its enforcement moment.',
    objectives: [
      'Name the four classic integrities: domain, entity, referential and business-rule checks',
      'Write NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY and CHECK declarations',
      'Separate row-level CHECK constraints from whole-database assertions and triggers'
    ],
    concepts: [
      {
        term: 'Domain constraints',
        kind: 'definition',
        statement: 'A **domain constraint** restricts each column to its type plus format: `Salary INT CHECK (Salary > 0)` and `Grade CHAR(2)` admit only fitting values. Types, lengths, `NOT NULL` and **`CHECK`** predicates together implement the domain — violating rows are rejected at `INSERT`/`UPDATE` time.',
        detail: 'Domains are the cheapest defence: push every per-column rule into the schema so no application path can bypass it.'
      },
      {
        term: 'Entity integrity',
        kind: 'law',
        statement: '**Entity integrity**: no part of any **primary key** may be **`NULL`**, enforced automatically by every `PRIMARY KEY` declaration. A null key would create an unidentifiable tuple, so ```sql\nCREATE TABLE T(A INT PRIMARY KEY, B INT);\n``` rejects any insert with `A` null.',
        detail: 'Composite keys extend the rule to every component: one null part voids the whole key.'
      },
      {
        term: 'Referential integrity',
        kind: 'law',
        statement: '**Referential integrity**: each **foreign-key** value is either `NULL` (if allowed) or matches a live parent key, checked on child writes and parent deletes/updates. ```sql\nDeptNo INT REFERENCES Department(DeptNo)\n``` blocks inserting an employee of a nonexistent department.',
        detail: 'Together with the Section 2.2 actions, this rule decides every cross-table write outcome: match, null, cascade, or refuse.'
      },
      {
        term: 'CHECK constraints and their limits',
        kind: 'method',
        statement: 'A **`CHECK`** predicate guards one row at a time, for example `CHECK (HireDate <= MgrSince OR MgrSince IS NULL)`. Standard `CHECK` cannot see **other rows** or **other tables** — a rule like total salary budget needs an **assertion** or a **trigger** instead.',
        detail: 'Portable habit: use `CHECK` for row-local rules, triggers for cross-row business policies, and never rely on application code alone.'
      },
      {
        term: 'Assertions versus triggers',
        kind: 'insight',
        statement: 'An **assertion** (`CREATE ASSERTION ... CHECK (...)`) is a whole-database predicate rechecked after relevant writes, ideal for multi-table rules. A **trigger** is procedural code firing `BEFORE`/`AFTER` an event for repairs and audits. Assertions declare *what*; triggers program *how* — `use assertions for policy, triggers for action`.',
        detail: 'Few systems implement full assertions, so triggers carry the load in practice; still, phrase the rule as an assertion first to keep the intent clear.'
      }
    ],
    examples: [
      {
        title: 'Constrain an Employee table',
        problem: 'Require positive salaries, non-null names, unique staff numbers and valid departments. Write the declarations.',
        steps: [
          { label: 'Step 1', text: 'Encode columns and keys. ```sql\nCREATE TABLE Employee(EmpId INT PRIMARY KEY,\n  Ssn CHAR(11) UNIQUE NOT NULL,\n  Name TEXT NOT NULL,\n  Salary INT CHECK (Salary > 0),\n  DeptNo INT REFERENCES Department(DeptNo));\n```' },
          { label: 'Step 2', text: 'Map each line to an integrity: `PRIMARY KEY` gives entity integrity; `REFERENCES` gives referential integrity; `CHECK`, `UNIQUE`, `NOT NULL` give domain integrity.' },
          { label: 'Step 3', text: 'Test mentally. Null `EmpId` fails entity integrity; unknown `DeptNo` fails referential integrity; negative salary fails the check — all before application logic runs.' }
        ],
        result: 'One declaration block enforces all three classical integrities at write time.'
      },
      {
        title: 'Row-local CHECK versus global rule',
        problem: 'Rule A: each salary is positive. Rule B: the sum of all salaries stays under one million. Which mechanism for each?',
        steps: [
          { label: 'Step 1', text: 'Classify by scope. ```text\nRule A : single row  -> CHECK (Salary > 0)\nRule B : whole table -> assertion / trigger\n```' },
          { label: 'Step 2', text: 'Write Rule B as an assertion. ```sql\nCREATE ASSERTION SalaryBudget CHECK (\n  (SELECT SUM(Salary) FROM Employee) < 1000000);\n```' },
          { label: 'Step 3', text: 'Note the fallback. Systems lacking assertions implement Rule B as an `AFTER INSERT OR UPDATE` trigger that raises an error on breach.' }
        ],
        result: 'CHECK for row-local predicates; assertions or triggers for database-wide policies.'
      }
    ],
    keyTakeaways: [
      'Domain integrity (types, NOT NULL, UNIQUE, CHECK) guards single columns at write time.',
      'Entity integrity bans NULL in any primary-key part; referential integrity bans dangling foreign keys.',
      'CHECK sees one row only; cross-row and cross-table rules need assertions or triggers.',
      'Declare every rule in the schema so all applications inherit the same enforcement.'
    ],
    quiz: [
      {
        q: 'Which constraint rejects an employee row with a null EmpId primary key?',
        options: [
          'Referential integrity',
          'Domain CHECK on Salary',
          'Entity integrity, enforced by the PRIMARY KEY declaration',
          'An AFTER DELETE trigger'
        ],
        answer: 2,
        explanation: 'Step 1: EmpId is the primary key. Step 2: Entity integrity forbids null key parts. Step 3: The PRIMARY KEY declaration enforces this automatically.'
      },
      {
        q: 'Inserting DeptNo = 99 with no department 99 fails. Which integrity fires?',
        options: [
          'Referential integrity on the foreign key',
          'Entity integrity',
          'Domain type integrity on integers',
          'Assertion on salary budgets'
        ],
        answer: 0,
        explanation: 'Step 1: DeptNo is a foreign key. Step 2: Its value matches no parent row. Step 3: Referential integrity therefore rejects the insert.'
      },
      // PYQ-pattern: CHECK scope versus assertions
      {
        q: 'A rule caps the total of all salaries. Why is a column CHECK insufficient?',
        options: [
          'Because CHECK cannot do arithmetic',
          'Because CHECK sees only the current row, while the total spans all rows — use an assertion or trigger',
          'Because CHECK runs only on deletes',
          'Because totals need primary keys'
        ],
        answer: 1,
        explanation: 'Step 1: CHECK predicates evaluate per row. Step 2: A sum aggregates the whole table. Step 3: Cross-row policies belong to assertions or triggers.'
      },
      {
        q: 'What is the practical difference between an assertion and a trigger?',
        options: [
          'Assertions run only on SELECT; triggers run on writes',
          'Triggers cannot see other tables',
          'Assertions modify data; triggers only read',
          'Assertions declare a database-wide predicate; triggers run procedural code on events'
        ],
        answer: 3,
        explanation: 'Step 1: Assertions state what must hold globally. Step 2: Triggers program how to react to events. Step 3: Policy reads as an assertion even when implemented as a trigger.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.4
  {
    sectionId: 'dbms-ch2-s4',
    depth: [
      {
        tier: 'masters',
        title: 'Anomaly theory: redundancy as a proof obligation',
        blocks: [
          {
            kind: 'para',
            body: 'Redundancy is not a storage cost but a **logical duplication**: the same implication $X \\to Y$ is witnessed by many tuples, so one real-world fact has many physical copies. The classic diagnosis was that the three anomalies are one phenomenon seen from three operations — **insert** cannot add a fact without inventing a second, **delete** cannot remove one fact without removing another, **update** must change many cells atomically. Graduate schema theory therefore treats absence of anomalies as a **proof obligation**: show that every fact has exactly one home tuple, or exhibit the maintenance protocol that keeps replicas synchronized. Denormalized designs are not exempt; they merely move the obligation from the schema into application code and triggers.'
          },
          {
            kind: 'theorem',
            body: 'If a relation $R$ satisfies a nontrivial dependency $X \\to Y$ with $X$ not a superkey, then $R$ admits insertion and deletion anomalies. Concretely, there exists a legal instance $r$ over $R$ and a fact about $X$ and $Y$ alone that cannot be inserted without supplying unrelated attributes, and a deletable tuple whose removal destroys an independent $X$ and $Y$ pairing. In particular, no constraint check on single rows — domains, keys, null rules — removes the anomaly; only restructuring the schema so that $X$ becomes a key of its own table eliminates both witnesses.'
          },
          {
            kind: 'proof',
            body: 'Fix $X \\to Y$ with $X$ not a key, so two tuples may share $X$ yet differ elsewhere. Start from a legal instance containing two rows $(x, y, a_1)$ and $(x, y, a_2)$ that agree on $X$ and $Y$ by the dependency but differ on the remaining attributes $A$. To insert a fresh pairing $(x^{\\prime}, y^{\\prime})$ with no associated $A$ value, the schema forces a null or dummy $A$, which domain or key rules reject — the insertion anomaly. To delete the only row carrying $(x, y)$ together with its last $A$ companion, the $X$ and $Y$ pairing vanishes though it described an independent entity — the deletion anomaly. Both constructions use only the dependency and the non-key status of $X$, so every redundant schema admits them.'
          },
          {
            kind: 'application',
            body: 'Modern stacks reintroduce the same structure under new names: a document embedding customer address in every order, a wide event table repeating device metadata per reading, a `users` cache duplicating role names per member. Each is a schema satisfying $Addr \\to City$ or $Role \\to Permissions$ with a non-key left side, so the theorem predicts exactly the bugs teams report — orphaned addresses after partial updates, deleted metadata when the last event expires. Safe denormalization therefore follows the theory: keep the normalized base as the system of record, maintain the redundant projection by a **single writer** such as a materialized view or change-data trigger, and test the writer against the two anomaly witnesses above rather than against row counts.'
          }
        ]
      }
    ],
    readingTime: 7,
    intro: 'Storing one fact in many places feels harmless until change arrives: an **insertion anomaly** blocks new facts, a **deletion anomaly** destroys unrelated facts, and a **modification anomaly** demands synchronized edits. All three spring from **redundancy** — the same fact recorded repeatedly. This section exhibits each anomaly so normalization in Chapter 5 has a visible motive.',
    objectives: [
      'Define insertion, deletion and modification anomalies with instances',
      'Trace each anomaly to redundancy from a bad decomposition',
      'State the design goal: one fact in one place'
    ],
    concepts: [
      {
        term: 'Redundancy as repeated facts',
        kind: 'definition',
        statement: 'A design is **redundant** when one real-world fact appears in many tuples — for example the pair `(DeptNo, DName)` repeated on every `Employee` row of that department. Redundancy wastes space but, worse, lets copies **disagree**: update three of four copies and the database contradicts itself.',
        detail: 'Null-padded workarounds (storing departments with null employees) trade disagreement for a new anomaly — see insertion below.'
      },
      {
        term: 'Insertion anomaly',
        kind: 'definition',
        statement: 'An **insertion anomaly** occurs when a fact cannot be recorded without an unrelated one: with department names stored only on `Employee` rows, a brand-new empty department has ** nowhere to go** — inserting it would need a fake employee or a null-keyed row that entity integrity rejects. Facts about `Department` depend on facts about `Employee`.',
        detail: 'Symptom phrase: cannot insert X until a Y exists. The cure is a separate department table where the new row stands alone.'
      },
      {
        term: 'Deletion anomaly',
        kind: 'definition',
        statement: 'A **deletion anomaly** occurs when removing one fact accidentally erases another: deleting the last employee of a department **deletes the department itself** — its name and number vanish with that final row. One `DELETE` destroys two facts because they share storage.',
        detail: 'Symptom phrase: deleting the last X loses Y. Separate tables let employee rows vanish while the department row survives.'
      },
      {
        term: 'Modification anomaly',
        kind: 'definition',
        statement: 'A **modification anomaly** occurs when one real-world change needs many synchronized `UPDATE` edits: renaming a department means rewriting **every** employee row carrying the old name, and missing one leaves the database **inconsistent**. Cost grows with $n$ copies and correctness needs $n$ coordinated writes.',
        detail: 'Symptom phrase: update one fact in $n$ places. With a department table, the rename is a single-row edit and employees follow by reference.'
      },
      {
        term: 'One fact in one place',
        kind: 'law',
        statement: 'The design goal is **one fact in one place**: each independent entity set gets its **own table** keyed once, and relationships become **references**, not repetitions. `Employee(EmpId, ..., DeptNo)` plus `Department(DeptNo, DName)` stores each department name exactly once — insertions, deletions and renames each touch one row.',
        detail: 'This slogan is the informal entry to normalization: later normal forms are precise tests for whether any fact is still repeated.'
      }
    ],
    examples: [
      {
        title: 'Exhibit all three anomalies',
        problem: 'Single table `EmpDept(EmpId, Name, DeptNo, DName)` stores department names redundantly. Show one anomaly of each kind.',
        steps: [
          { label: 'Step 1', text: 'Insertion. ```text\nNew dept D9 (no staff yet) -> no EmpId to key the row -> REJECTED\n```\nA department without employees cannot be inserted without faking data.' },
          { label: 'Step 2', text: 'Deletion. Deleting the sole employee of D4 removes the only copy of "D4 = Sales" — the department fact is lost with the employee fact.' },
          { label: 'Step 3', text: 'Modification. Renaming D4 needs every D4 row rewritten; one missed row leaves two names for one department.' }
        ],
        result: 'One redundant table exhibits all three anomalies; splitting into Employee and Department removes them.'
      },
      {
        title: 'Verify the split design',
        problem: 'Split into `Employee(EmpId, Name, DeptNo)` and `Department(DeptNo, DName)`. Re-run the three operations.',
        steps: [
          { label: 'Step 1', text: 'Insert freely. ```sql\nINSERT INTO Department VALUES (9, \\u2018Research\\u2019); -- no employee needed\n```' },
          { label: 'Step 2', text: 'Delete safely. Removing the last employee of D4 leaves the `Department` row intact — department facts survive.' },
          { label: 'Step 3', text: 'Rename once. ```sql\nUPDATE Department SET DName = \\u2018Sales-East\\u2019 WHERE DeptNo = 4;\n```\nOne row changes; all references follow automatically.' }
        ],
        result: 'Each operation touches exactly one row: one fact in one place holds.'
      }
    ],
    keyTakeaways: [
      'Redundancy — one fact in many tuples — is the single source of update anomalies.',
      'Insertion anomalies block new facts; deletion anomalies erase unrelated facts; modification anomalies need synchronized edits.',
      'Null-padded single tables trade one anomaly for another; splitting is the real fix.',
      'One fact in one place previews normalization: separate entity tables joined by references.'
    ],
    quiz: [
      {
        q: 'A new department with no employees cannot be inserted into EmpDept(EmpId, Name, DeptNo, DName). Which anomaly?',
        options: [
          'Deletion anomaly',
          'Modification anomaly',
          'Insertion anomaly: a department fact needs an unrelated employee fact',
          'Referential anomaly'
        ],
        answer: 2,
        explanation: 'Step 1: The new fact is department-only. Step 2: The table demands an employee key for every row. Step 3: Blocked insertion of an independent fact is the insertion anomaly.'
      },
      {
        q: 'Deleting the last employee of department D4 loses the fact that D4 means Sales. Which anomaly?',
        options: [
          'Insertion anomaly',
          'Deletion anomaly: removing one fact destroys an unrelated fact sharing its row',
          'Modification anomaly',
          'Domain anomaly'
        ],
        answer: 1,
        explanation: 'Step 1: Two facts share one row. Step 2: The delete targets the employee fact. Step 3: The department fact vanishes as collateral — the deletion anomaly.'
      },
      // PYQ-pattern: modification anomaly cost in redundant tables
      {
        q: 'Renaming a department stored on 500 employee rows needs 500 edits. What does this show?',
        options: [
          'A modification anomaly: one real-world change costs one edit per redundant copy',
          'An insertion anomaly on renames',
          'A key violation on DName',
          'Normal redundancy-free design'
        ],
        answer: 0,
        explanation: 'Step 1: One business fact changed. Step 2: Redundant storage repeats it 500 times. Step 3: Multi-copy synchronized edits define the modification anomaly.'
      },
      {
        q: 'What is the principled fix for all three anomalies?',
        options: [
          'Add more nulls to pad missing facts',
          'Store each independent fact once in its own table and link by reference',
          'Forbid all deletes',
          'Merge all tables into one wider table'
        ],
        answer: 1,
        explanation: 'Step 1: Anomalies come from shared storage of independent facts. Step 2: Separate tables isolate each fact. Step 3: References preserve the links without repeating the facts.'
      }
    ]
  }
]
