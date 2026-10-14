import type { SectionContent } from '../library'

// ============================================================================
// Databases — Chapter 1: Entity-Relationship Modeling (Sections 1.1 – 1.4)
// Master study content.
// ============================================================================

export const dbmsCh01Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'dbms-ch1-s1',
    readingTime: 8,
    intro: 'An **entity** is a distinguishable real-world object — one employee, one course, one loan — and entities sharing the same descriptive properties form an **entity set**. Each entity is described by **attributes**, and one or more attributes acting as a **key** identify each entity uniquely. This section fixes the vocabulary of strong versus weak entities and of simple, composite, multivalued and derived attributes.',
    objectives: [
      'Distinguish strong and weak entity sets and state what a partial key identifies',
      'Classify attributes as simple, composite, multivalued, stored or derived, and key versus non-key',
      'Select candidate and primary keys for a small narrative and justify minimality'
    ],
    concepts: [
      {
        term: 'Entity and entity set',
        kind: 'definition',
        statement: 'An **entity** is a thing in the mini-world with an independent existence, such as one row-worthy object `e1` of type `Employee`. An **entity set** is the collection of all entities of the same type sharing the same attributes, written `Employee(EmpId, Name, Salary)`.',
        detail: 'Entity sets become tables later; entities become rows. Two entities of one set are distinguished by their attribute values, never by position.'
      },
      {
        term: 'Strong versus weak entities',
        kind: 'definition',
        statement: 'A **strong entity** set owns a key and stands alone, for example `Account(AccNo, Balance)`. A **weak entity** set has no key of its own and depends on an **identifying relationship** with an owner, for example `Payment(PayNo, Amount)` owned by `Loan`.',
        detail: 'Weak entities use a **partial key** (discriminator) such as `PayNo`, which identifies a payment only within one loan. Drop the owner and the weak entity cannot be identified at all.'
      },
      {
        term: 'Attribute taxonomy',
        kind: 'notation',
        statement: '**Simple** attributes are indivisible (`Salary`); **composite** attributes split into parts (`Address` into `Street`, `City`, `Pin`); **multivalued** attributes hold a set of values (`{PhoneNo}`); **derived** attributes are computed from stored ones (`Age` from `Dob`). Single-valued stored attributes such as `EmpId` are the default.',
        detail: 'Multivalued attributes need their own table later; derived attributes are normally not stored. Composite attributes may be stored flattened into their component parts.'
      },
      {
        term: 'Superkey, candidate key, primary key',
        kind: 'definition',
        statement: 'A **superkey** is any attribute set identifying each entity; a **candidate key** is a minimal superkey; the **primary key** is the candidate key chosen as the identifier, underlined in diagrams as `EmpId`. Formally, key `K` satisfies the functional constraint $K \\rightarrow \\text{all attributes}$ with no proper subset doing so.',
        detail: 'Minimality is the test people forget: `{EmpId, Name}` is a superkey but not a candidate key when `EmpId` alone suffices. Prefer short, stable, single-attribute primary keys.'
      },
      {
        term: 'Key attributes reject nulls',
        kind: 'law',
        statement: 'No attribute of a primary key may ever hold **`NULL`** — a null cannot identify anything, so `EmpId = NULL` would make two employees indistinguishable. This **entity-integrity** rule applies to every base table created from an entity set.',
        detail: 'Non-key attributes may permit nulls (for example an optional `MiddleName`), but key attributes are always declared `NOT NULL`. Weak-entity tables additionally inherit the owner key, which is equally non-nullable.'
      }
    ],
    examples: [
      {
        title: 'Classify the attributes of an Employee narrative',
        problem: 'A firm records `EmpId`, `Name`, `Address` (street, city, pin), `PhoneNo` (several allowed), `Dob` and `Age` for each employee. Classify every attribute and pick the primary key.',
        steps: [
          { label: 'Step 1', text: 'Sort by structure. ```text\nEmpId      : simple, single-valued\nName       : simple (or composite First/Last)\nAddress    : composite -> Street, City, Pin\nPhoneNo    : multivalued {PhoneNo}\nDob        : stored simple\nAge        : derived from Dob\n```' },
          { label: 'Step 2', text: 'Test keys for minimality. `EmpId` alone identifies each employee, so it is a candidate key and the natural primary key. `{EmpId, Name}` also identifies but is not minimal, hence a mere superkey.' },
          { label: 'Step 3', text: 'Apply the storage rules. Store `Dob`, compute `Age`; flatten `Address` into three columns; plan a separate table for `{PhoneNo}`; declare `EmpId NOT NULL`.' }
        ],
        result: 'Primary key `EmpId`; composite `Address` flattened; multivalued `{PhoneNo}` separated; derived `Age` computed, never stored.'
      },
      {
        title: 'Weak entity: payments of a loan',
        problem: '`Loan(LoanNo, Amount)` has payments identified only by `PayNo` within each loan. Model the weak entity and state its full key.',
        steps: [
          { label: 'Step 1', text: 'Recognize weakness. ```text\n[Loan] --< Has >-- (Payment)\nLoanNo (key)      PayNo (partial key)\n```\n`PayNo` repeats across loans (every loan has a payment 1), so it cannot key `Payment` alone.' },
          { label: 'Step 2', text: 'Attach the identifying relationship. The double-diamond `Has` links each payment to exactly one owner loan with total participation on the weak side.' },
          { label: 'Step 3', text: 'Form the full key. The weak-entity key is the pair `{LoanNo, PayNo}`: owner key plus partial key. Delete a loan and its payments lose identity — typically deleted with it.' }
        ],
        result: 'Full key `{LoanNo, PayNo}`; partial key `PayNo` works only inside one owner loan.'
      }
    ],
    keyTakeaways: [
      'Strong entities own a key; weak entities are identified by owner key plus partial key through an identifying relationship.',
      'Attributes split into simple, composite, multivalued, stored and derived; only stored single-valued attributes become plain columns.',
      'Candidate keys are minimal superkeys; the primary key is the chosen candidate and never holds NULL.',
      'Multivalued attributes and weak entities each force extra tables in the relational mapping of Section 1.4.'
    ],
    quiz: [
      // PYQ-pattern: weak entity versus multivalued attribute identification
      {
        q: 'Which statement about weak entity sets is correct?',
        options: [
          'A weak entity set has its own full key and needs no owner',
          'A weak entity set is identified by its partial key together with its owner key via an identifying relationship',
          'A weak entity set cannot have any attributes of its own',
          'A weak entity set always has total participation on the owner side'
        ],
        answer: 1,
        explanation: 'Step 1: Recall a weak set lacks a full key by definition. Step 2: Its discriminator (partial key) is unique only within one owner. Step 3: Owner key plus partial key jointly identify each weak entity through the identifying relationship.'
      },
      {
        q: '`Age` is computed from `Dob`. How should the two be classified and stored?',
        options: [
          'Both are stored base attributes',
          '`Age` is multivalued and needs its own table',
          '`Dob` is composite and must be split',
          '`Dob` is stored and `Age` is derived, computed rather than stored'
        ],
        answer: 3,
        explanation: 'Step 1: A derived attribute is defined from stored ones. Step 2: `Age` follows from `Dob` plus the current date. Step 3: Store `Dob` and compute `Age` on demand to avoid inconsistency.'
      },
      {
        q: '`EmpId` alone identifies each employee. What is `{EmpId, Name}`?',
        options: [
          'A superkey but not a candidate key, since it is not minimal',
          'A candidate key because it is smaller',
          'A primary key because it contains one',
          'A partial key of a weak entity'
        ],
        answer: 0,
        explanation: 'Step 1: Any identifying set is a superkey. Step 2: Candidate keys must additionally be minimal. Step 3: Dropping `Name` still identifies, so the pair is a non-minimal superkey.'
      },
      {
        q: 'Which attribute needs its own table in the relational mapping?',
        options: [
          'Simple single-valued `Salary`',
          'Composite `Address` after flattening',
          'Multivalued `{PhoneNo}` holding a set of values per employee',
          'Derived `Age` computed from `Dob`'
        ],
        answer: 2,
        explanation: 'Step 1: Atomic columns hold one value per row. Step 2: A set-valued attribute violates atomicity. Step 3: Hence `{PhoneNo}` becomes a separate table keyed by owner plus one value.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.2
  {
    sectionId: 'dbms-ch1-s2',
    readingTime: 9,
    intro: 'A **relationship** associates entities from two or more sets — an employee works in a department, a student enrols in a course. The **cardinality ratio** bounds how many entities on each side may participate, and the **participation constraint** states whether every entity must participate. Reading these two constraints correctly determines foreign-key placement and table counts later.',
    objectives: [
      'Read cardinality ratios (one-to-one, one-to-many, many-to-many) off a narrative or diagram',
      'Distinguish total from partial participation and recursive roles',
      'Predict how cardinality and participation shape foreign keys and nulls'
    ],
    concepts: [
      {
        term: 'Relationship set and degree',
        kind: 'definition',
        statement: 'A **relationship** is an association among entities, and a **relationship set** is a set of such associations of the same type, for example `WorksIn \\subseteq Employee \\times Department`. The **degree** is the number of participating entity sets: `binary` degree two is the norm, `ternary` degree three is rarer.',
        detail: 'Relationships may carry their own descriptive attributes such as `Since` on `WorksIn`. Degree two covers the large majority of modeling situations.'
      },
      {
        term: 'Cardinality ratios',
        kind: 'definition',
        statement: 'The **cardinality ratio** caps participation: **one-to-one** ($1:1$) pairs at most one with one, **one-to-many** ($1:N$) lets one `Department` have many `Employees`, and **many-to-many** ($M:N$) lets each `Student` take many `Courses` and vice versa. The arrow or crow-foot toward the **many** side records the choice.',
        detail: 'Cardinality is a business rule, not a current count: saying $1:N$ means the schema forbids one employee in two departments, whatever today data shows.'
      },
      {
        term: 'Total versus partial participation',
        kind: 'definition',
        statement: '**Total participation** (double line) forces every entity to take part — every `Employee` must work in some department — while **partial participation** (single line) permits non-participants, as when a `Department` may temporarily have no employees. Total participation on the many side of a $1:N$ link later forbids **`NULL`** foreign keys.',
        detail: 'Participation and cardinality are independent axes: a $1:N$ link can be total on either side, both, or neither, giving four distinct business rules.'
      },
      {
        term: 'Roles and recursive relationships',
        kind: 'notation',
        statement: 'When one entity set plays two parts, **role names** disambiguate: in `Supervises \\subseteq Employee \\times Employee` the roles `supervisor` and `subordinate` separate the two uses of `Employee`. Such a **recursive** relationship is still binary but references one set twice.',
        detail: 'Model the two roles as two distinct relationship legs; later both foreign keys reference the same table with different column names such as `SupId`.'
      },
      {
        term: 'Cardinality decides the foreign key side',
        kind: 'method',
        statement: 'For a $1:N$ relationship, place the **foreign key** on the **many** side referencing the one side: `Employee(DeptNo)` references `Department(DeptNo)`. A $1:1$ link allows the key on either side, while an $M:N$ link needs a **separate relationship table** with both keys.',
        detail: 'Putting the key on the wrong side either forbids legal data or permits illegal data — for $1:N$, a key on the one side could reference only one of the many.'
      }
    ],
    examples: [
      {
        title: 'Read the WorksIn constraints',
        problem: 'Each employee works in at most one department; each department may have many employees; every employee must belong to some department. Name the ratio and both participations.',
        steps: [
          { label: 'Step 1', text: 'Fix the ratio. ```text\nEmployee --< WorksIn >-- Department\n   (many)                   (one)\n```\nAt most one department per employee but many employees per department gives $1:N$ with `Department` on the one side.' },
          { label: 'Step 2', text: 'Read participation. "Every employee must belong" is total on the `Employee` side; "may have many" (possibly zero) is partial on the `Department` side.' },
          { label: 'Step 3', text: 'Predict the schema effect. Foreign key `Employee(DeptNo)` is `NOT NULL` because of total participation on the many side.' }
        ],
        result: '$1:N$ WorksIn, total on Employee, partial on Department, non-nullable `Employee(DeptNo)`.'
      },
      {
        title: 'Recursive supervision with roles',
        problem: 'Employees supervise other employees; each employee has at most one supervisor, and a supervisor may head many subordinates. Model it with roles.',
        steps: [
          { label: 'Step 1', text: 'Draw one set twice. ```text\nEmployee(supervisor) --< Supervises >-- Employee(subordinate)\n```\nRoles separate the supervisor leg from the subordinate leg.' },
          { label: 'Step 2', text: 'Set ratio and participation. One supervisor to many subordinates is $1:N$; supervisor side partial (a top manager has none), subordinate side partial (some head nobody — wait, that is the supervisor role).' },
          { label: 'Step 3', text: 'Map mentally. One self-referencing key `Employee(SupId)` points at `Employee(EmpId)`, nullable for the boss with no supervisor.' }
        ],
        result: 'Recursive $1:N$ with roles supervisor/subordinate becomes nullable self-referencing `SupId`.'
      }
    ],
    keyTakeaways: [
      'Cardinality ($1:1$, $1:N$, $M:N$) bounds how many partners each entity may have; participation (total/partial) states whether partners are mandatory.',
      'The two axes are independent: always read both before choosing keys.',
      'Recursive relationships reuse one entity set under two role names.',
      'The many side of a $1:N$ link carries the foreign key; $M:N$ links need their own table.'
    ],
    quiz: [
      // PYQ-pattern: cardinality-plus-participation reading from a narrative
      {
        q: 'Each course is taught by at most one professor, each professor may teach many courses, and every course must have a professor. What are the constraints on Teaches?',
        options: [
          '$M:N$, total on both sides',
          '$1:N$ with Course on the many side, total on Course, partial on Professor',
          '$1:N$ with Professor on the many side, total on both sides',
          '$1:1$, partial on both sides'
        ],
        answer: 1,
        explanation: 'Step 1: Many courses per professor with at most one professor per course is $1:N$. Step 2: "Every course must" is total on the Course (many) side. Step 3: "May teach" is partial on the Professor side.'
      },
      {
        q: 'A $1:N$ relationship is total on the many side. What does this force in the tables?',
        options: [
          'The foreign key on the many side must be NOT NULL',
          'The foreign key on the one side must be UNIQUE',
          'A separate relationship table becomes mandatory',
          'The one-side primary key must be composite'
        ],
        answer: 0,
        explanation: 'Step 1: The key sits on the many side. Step 2: Total participation means every many-side row has a partner. Step 3: A missing partner would be NULL, so the key column is declared NOT NULL.'
      },
      {
        q: 'Why do recursive relationships need role names?',
        options: [
          'Because ternary relationships are illegal',
          'Because the same entity set plays two distinguishable parts that one bare line cannot separate',
          'Because recursion forces an $M:N$ ratio',
          'Because roles replace primary keys'
        ],
        answer: 1,
        explanation: 'Step 1: Both legs touch `Employee`. Step 2: Without labels, supervisor and subordinate legs merge. Step 3: Roles name each leg so keys and constraints stay distinct.'
      },
      {
        q: 'Which relationship cannot be mapped with a single foreign key and needs its own table?',
        options: [
          '$1:1$ with total participation on one side',
          '$1:N$ between Department and Employee',
          '$M:N$ between Student and Course with attribute Grade',
          'Recursive $1:N$ supervision'
        ],
        answer: 2,
        explanation: 'Step 1: A single key can point at only one partner row. Step 2: $M:N$ needs sets of partners on both sides. Step 3: Only a separate table holding both keys (plus `Grade`) can record that.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.3
  {
    sectionId: 'dbms-ch1-s3',
    readingTime: 7,
    intro: 'Real mini-worlds contain hierarchies: a `Student` is a `Person`, a `Professor` is a `Person`, each with the shared attributes plus its own. **Specialization** refines a superclass into subclasses, **generalization** runs the reverse, and **aggregation** treats a whole relationship as an entity for higher-level links. Constraint annotations — disjoint versus overlapping, total versus partial — control membership precisely.',
    objectives: [
      'Model ISA hierarchies with disjoint/overlapping and total/partial constraints',
      'Explain attribute and relationship inheritance in hierarchies',
      'Use aggregation to attach relationships to relationships'
    ],
    concepts: [
      {
        term: 'Specialization and generalization',
        kind: 'definition',
        statement: '**Specialization** splits a **superclass** such as `Person` into **subclasses** such as `Student` and `Professor` using defining predicates; **generalization** discovers the superclass from the subclasses bottom-up. Both are drawn with a triangle labelled **ISA**, as in `Student ISA Person`.',
        detail: 'Subclasses inherit all superclass attributes and relationships, then add their own: `Student` gains `RollNo` while sharing `Name` from `Person`.'
      },
      {
        term: 'Disjoint versus overlapping',
        kind: 'definition',
        statement: 'A **disjoint** (exclusive) constraint, marked `d` in the circle, forbids dual membership — nobody is both `Student` and `Professor`. An **overlapping** constraint, marked `o`, permits it, as with `TeachingAssistant` belonging to both `Student` and `Employee`.',
        detail: 'Disjointness is a semantic claim about the mini-world: choose `o` whenever moonlighting or dual roles are possible, else sensible queries miscount people.'
      },
      {
        term: 'Total versus partial specialization',
        kind: 'definition',
        statement: '**Total** specialization (double line from superclass) forces every superclass member into some subclass — every `Person` in a college database is staff or student. **Partial** specialization (single line) allows plain members with no subclass, such as a visitor `Person`.',
        detail: 'Total plus disjoint is the strictest hierarchy; partial plus overlapping is the loosest. The four combinations each generate different membership tests.'
      },
      {
        term: 'Attribute and relationship inheritance',
        kind: 'theorem',
        statement: 'A subclass **inherits** every attribute and relationship of its ancestors: `PhDStudent` inherits `Name` from `Person` and `RollNo` from `Student`, adding only `ThesisTopic`. Inheritance is transitive, so keys chosen at the top identify members at every level via the shared key `PersonId`.',
        detail: 'Never duplicate inherited attributes in the subclass; duplication invites contradictory values. Shared keys also make hierarchy joins lossless later.'
      },
      {
        term: 'Aggregation',
        kind: 'method',
        statement: '**Aggregation** wraps a relationship set in a box so it can participate in another relationship: `Enrols(Student, Course)` aggregated as `ENROL` can then link to `ExamSession` via `AssessedBy`. Without the box, a relationship cannot legally touch another relationship, so model the assessment of an `enrolment` with `AssessedBy(ENROL, Session)`.',
        detail: 'Use aggregation only when the higher link genuinely concerns the association itself (grades for an enrolment), not merely one of its entities — otherwise link the entity directly.'
      }
    ],
    examples: [
      {
        title: 'Constrain a Person hierarchy',
        problem: 'A college stores `Person` with subclasses `Student` and `Professor`. Nobody holds both posts; every recorded person is one or the other. Annotate the hierarchy.',
        steps: [
          { label: 'Step 1', text: 'Draw the ISA triangle. ```text\nPerson(Name, PersonId)\n   /\\  (ISA)\nStudent(RollNo)  Professor(Dept)\n```\nBoth subclasses inherit `PersonId` as their key.' },
          { label: 'Step 2', text: 'Nobody holds both posts, so mark the circle `d` for disjoint. Dual membership is rejected.' },
          { label: 'Step 3', text: 'Every person is one or the other, so draw a double line: total specialization. A bare `Person` row is illegal here.' }
        ],
        result: 'Total, disjoint hierarchy: every person is exactly one of Student, Professor.'
      },
      {
        title: 'Aggregate an enrolment for assessment',
        problem: '`Enrols(Student, Course)` carries `Year`; each enrolment is evaluated in an `ExamSession`. Model the evaluation link.',
        steps: [
          { label: 'Step 1', text: 'Box the relationship. ```text\n[Student]--<Enrols>--[Course]  wrapped as [ENROL]\n[ENROL]--<AssessedBy>--[ExamSession]\n```' },
          { label: 'Step 2', text: 'Explain why the box is needed. `AssessedBy` concerns the enrolment event (student-course pair), not the student or course alone.' },
          { label: 'Step 3', text: 'Place the grade. `Marks` belongs on `AssessedBy` (or the aggregate), since the same student-course pair can be assessed in different sessions.' }
        ],
        result: 'Aggregation lets `AssessedBy` reference the enrolment association as a first-class participant.'
      }
    ],
    keyTakeaways: [
      'Specialization refines top-down, generalization abstracts bottom-up; both use the ISA triangle with inheritance.',
      'Disjoint (d) versus overlapping (o) and total versus partial give four hierarchy disciplines — pick from the narrative.',
      'Subclasses inherit all ancestor attributes and relationships through the shared superclass key.',
      'Aggregation boxes a relationship so a higher-level relationship can reference the association itself.'
    ],
    quiz: [
      {
        q: 'A database requires every Person to be exactly one of Student or Professor. Which annotation pair applies?',
        options: [
          'Partial, overlapping',
          'Total, disjoint',
          'Partial, disjoint',
          'Total, overlapping'
        ],
        answer: 1,
        explanation: 'Step 1: "Every person is one" forces total specialization. Step 2: "Exactly one" forbids dual membership, forcing disjoint. Step 3: Only total plus disjoint yields exactly-one membership.'
      },
      {
        q: 'What does a subclass inherit from its superclass?',
        options: [
          'Only the primary key',
          'Only relationships, not attributes',
          'All attributes and all relationships, plus its own additions',
          'Nothing; each subclass redefines everything'
        ],
        answer: 2,
        explanation: 'Step 1: Inheritance covers descriptive attributes. Step 2: It also covers relationship memberships. Step 3: The subclass then adds only what is specific to it.'
      },
      {
        q: 'When is aggregation the right tool?',
        options: [
          'When a relationship itself must participate in another relationship, such as assessing an enrolment',
          'Whenever two entity sets are related',
          'When a multivalued attribute appears',
          'When a weak entity needs an owner'
        ],
        answer: 0,
        explanation: 'Step 1: Ordinary links join entity sets. Step 2: Aggregation promotes one association to entity-like status. Step 3: Only then can a second relationship legally reference it.'
      },
      // PYQ-pattern: disjoint-overlapping with total-partial combinations
      {
        q: 'Teaching assistants are both Students and Employees. Which hierarchy constraint fits the Person split into Student and Employee?',
        options: [
          'Disjoint, because roles never mix',
          'Total, which by itself permits dual membership',
          'Partial, which by itself forbids dual membership',
          'Overlapping, because one person may belong to both subclasses'
        ],
        answer: 3,
        explanation: 'Step 1: Separate the two axes: disjointness governs dual membership, totality governs coverage. Step 2: Dual membership exists, so the split must be overlapping. Step 3: Totality is a separate question about uncovered persons.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.4
  {
    sectionId: 'dbms-ch1-s4',
    readingTime: 10,
    intro: 'ER-to-relational mapping converts each diagram element into tables, keys and foreign keys by fixed rules. Strong entities become tables, weak entities absorb the owner key, $1:N$ links become foreign keys, $M:N$ links become tables, and multivalued attributes become tables. Applying the rules mechanically yields a schema that preserves every constraint the diagram states.',
    objectives: [
      'Map strong entities, weak entities and multivalued attributes to tables and keys',
      'Place foreign keys for $1:1$ and $1:N$ links and build tables for $M:N$ links',
      'Count the minimum tables for a diagram under each cardinality rule'
    ],
    concepts: [
      {
        term: 'Strong entity mapping',
        kind: 'method',
        statement: 'Each **strong entity** set becomes a table with its attributes as columns and its primary key as **`PRIMARY KEY`**: `Employee(EmpId, Name, Salary)` maps to ```sql\nCREATE TABLE Employee(EmpId INT PRIMARY KEY, Name TEXT, Salary INT);\n``` Composite attributes flatten; derived attributes are omitted.',
        detail: 'One table per strong set is the baseline count; every later rule adds tables or keys to this skeleton.'
      },
      {
        term: 'Weak entity mapping',
        kind: 'method',
        statement: 'A **weak entity** table includes the **owner key** as a foreign key plus its partial key, with the pair as primary key: `Payment(LoanNo, PayNo, Amount)` uses **`PRIMARY KEY (LoanNo, PayNo)`** with `LoanNo` referencing `Loan`. The identifying relationship needs no separate table.',
        detail: 'Owner-key inclusion is what makes weak rows identifiable; the foreign key is non-nullable and usually cascades on delete of the owner.'
      },
      {
        term: '$1:1$ and $1:N$ relationship mapping',
        kind: 'method',
        statement: 'A **$1:N$** link needs no new table: post the one-side key as a **foreign key** on the many side, as `Employee(DeptNo)` referencing `Department`. A **$1:1$** link likewise posts the key to either side — prefer the side with **total participation** so the key stays **`NOT NULL`**, otherwise the receiving column must allow nulls.',
        detail: 'Relationship attributes of $1:N$ migrate with the key (for example `Since` joins `Employee`). Never post keys both ways: one direction records the link completely.'
      },
      {
        term: '$M:N$ and multivalued mapping',
        kind: 'method',
        statement: 'An **$M:N$** relationship becomes its own table holding **both** entity keys as a composite primary key, for example `Enrols(RollNo, CourseId, Grade)`. A **multivalued** attribute becomes a table of owner key plus value, for example `EmpPhone(EmpId, PhoneNo)`, keyed by the pair.',
        detail: 'Relationship attributes live only in the new table. Each $M:N$ link and each multivalued attribute adds exactly one table to the minimum count.'
      },
      {
        term: 'Minimum-table counting rules',
        kind: 'theorem',
        statement: 'The **minimum** table count is: one per strong/weak set, plus one per **$M:N$** link, plus one per **multivalued** attribute; $1:1$ and $1:N$ links add **zero**. So two sets joined by one $1:N$ need $1 + 1 + 0 = 2$ tables, while the same pair under $M:N$ needs $1 + 1 + 1 = 3$ `tables`.',
        detail: 'Total participation can merge a $1:1$ pair into one table, and $1:N$ with total on the one side can merge too — but the zero-addition rule above is the safe default count.'
      }
    ],
    examples: [
      {
        title: 'Map Department–Employee plus phones',
        problem: '`Department(DeptNo, DName)` $1:N$ `Employee(EmpId, Name)` with total participation on Employee; `{PhoneNo}` multivalued on Employee. Produce the minimum tables.',
        steps: [
          { label: 'Step 1', text: 'Map the strong sets. ```sql\nCREATE TABLE Department(DeptNo INT PRIMARY KEY, DName TEXT);\nCREATE TABLE Employee(EmpId INT PRIMARY KEY, Name TEXT,\n  DeptNo INT NOT NULL REFERENCES Department(DeptNo));\n```\nThe $1:N$ link adds no table; total participation makes `DeptNo NOT NULL`.' },
          { label: 'Step 2', text: 'Add the multivalued table. ```sql\nCREATE TABLE EmpPhone(EmpId INT REFERENCES Employee(EmpId),\n  PhoneNo TEXT, PRIMARY KEY (EmpId, PhoneNo));\n```' },
          { label: 'Step 3', text: 'Count. Two entity tables plus one multivalued table gives 3 minimum tables.' }
        ],
        result: '3 tables: Department, Employee with FK `DeptNo`, EmpPhone keyed by pair.'
      },
      {
        title: 'Map an $M:N$ enrolment with grades',
        problem: '`Student(RollNo, Name)` $M:N$ `Course(CourseId, Title)` via `Enrols` carrying `Grade`. Produce the tables.',
        steps: [
          { label: 'Step 1', text: 'Map the two entity sets. ```sql\nCREATE TABLE Student(RollNo INT PRIMARY KEY, Name TEXT);\nCREATE TABLE Course(CourseId INT PRIMARY KEY, Title TEXT);\n```' },
          { label: 'Step 2', text: 'Build the relationship table. ```sql\nCREATE TABLE Enrols(RollNo INT REFERENCES Student(RollNo),\n  CourseId INT REFERENCES Course(CourseId),\n  Grade CHAR(2), PRIMARY KEY (RollNo, CourseId));\n```\n`Grade` lives here because it describes the pair, not either side alone.' },
          { label: 'Step 3', text: 'Count. Two entity tables plus one $M:N$ table gives 3 minimum tables.' }
        ],
        result: '3 tables with `Enrols` keyed by `{RollNo, CourseId}` holding `Grade`.'
      }
    ],
    keyTakeaways: [
      'Strong sets give one table each; weak sets add the owner key and use the pair as key with no extra relationship table.',
      '$1:N$ links post a foreign key on the many side; $1:1$ links post to the totally-participating side.',
      '$M:N$ links and multivalued attributes each cost exactly one new table keyed by the relevant pair.',
      'Minimum tables = entity tables + $M:N$ tables + multivalued tables; relationship attributes migrate with the key or into the new table.'
    ],
    quiz: [
      // PYQ-pattern: minimum tables for M:N between two entity sets
      {
        q: 'Two entity sets are joined by one $M:N$ relationship with no multivalued attributes. Minimum tables?',
        options: ['2', '4', '3', '1'],
        answer: 2,
        explanation: 'Step 1: Each entity set needs one table: 2 so far. Step 2: The $M:N$ link needs its own table: +1. Step 3: Total is 3, and no rule adds more.'
      },
      // PYQ-pattern: minimum tables for 1:N chain of entity sets
      {
        q: 'Three entity sets A, B, C are joined in a chain by two $1:N$ relationships and there are no multivalued attributes. Minimum tables?',
        options: ['3', '5', '4', '2'],
        answer: 0,
        explanation: 'Step 1: Three entity sets give 3 tables. Step 2: Each $1:N$ maps to a foreign key adding 0 tables. Step 3: Minimum is 3.'
      },
      {
        q: 'A weak entity set with one identifying relationship maps to how many tables for the pair (owner + weak)?',
        options: [
          '3: owner, weak, plus a relationship table',
          '2: owner table and weak table holding the owner key, with no relationship table',
          '1: merged into the owner table always',
          '2: owner table plus a relationship table only'
        ],
        answer: 1,
        explanation: 'Step 1: The owner keeps its own table. Step 2: The weak table carries owner key plus partial key. Step 3: The identifying link is recorded by that key, so no third table is needed.'
      },
      {
        q: 'One entity set has one multivalued attribute and takes part in one $1:N$ relationship. Extra tables beyond the entity table?',
        options: [
          '0: both map with foreign keys',
          '2: both need new tables',
          '1: only the relationship needs a table',
          '1: only the multivalued attribute needs a table'
        ],
        answer: 3,
        explanation: 'Step 1: $1:N$ maps via a foreign key with no new table. Step 2: The multivalued attribute violates atomicity in place. Step 3: So exactly one extra table is needed, for the multivalued values.'
      }
    ]
  }
]
