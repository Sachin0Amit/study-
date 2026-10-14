import type { SectionContent } from '../library'

// ============================================================================
// Databases — Chapter 5: Functional Dependencies and Normal Forms
// Sections 5.1 - 5.4. Master study content.
// ============================================================================

export const dbmsCh05Content: SectionContent[] = [
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'dbms-ch5-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Armstrong axioms: soundness, completeness and closure',
        blocks: [
          {
            kind: 'para',
            body: 'A functional dependency $X \\to Y$ is a **universal claim** over all legal instances, so implication $F \\models X \\to Y$ quantifies over infinitely many tables and cannot be checked by inspection. Attribute closure $X^{+}$ turns that infinitary question into a finite computation: starting from $X$, repeatedly add right-hand sides whose left sides are already present until fixation. The graduate content is that this greedy loop is not a heuristic but a **decision procedure** — $Y \\subseteq X^{+}$ holds exactly when every model of $F$ satisfies $X \\to Y$. Minimal covers, key discovery and normal-form tests are all corollaries of that equivalence.'
          },
          {
            kind: 'theorem',
            body: 'The Armstrong axioms of **reflexivity** ($Y \\subseteq X \\Rightarrow X \\to Y$), **augmentation** ($X \\to Y \\Rightarrow XZ \\to YZ$) and **transitivity** ($X \\to Y, Y \\to Z \\Rightarrow X \\to Z$) are **sound and complete** for functional dependencies. Soundness means every derivable dependency is implied; completeness means every implied dependency has a derivation. Derived rules such as union, decomposition and pseudotransitivity follow in a few lines but add no new power.'
          },
          {
            kind: 'proof',
            body: 'Soundness is a direct check on arbitrary two-row instances: reflexivity holds because agreeing on $X$ entails agreeing on any subset, augmentation holds because agreement extends with equal $Z$ columns, transitivity chains agreements. Completeness uses a **two-tuple counterexample**: suppose $Y$ is not a subset of $X^{+}$ under $F$ and pick $A$ in $Y$ outside $X^{+}$. Build rows $r_1$ and $r_2$ that agree exactly on $X^{+}$ and differ elsewhere, with $A$ differing. Every $U \\to V$ in $F$ is satisfied because $U \\subseteq X^{+}$ forces $V \\subseteq X^{+}$ by closure construction, yet $X \\to Y$ fails on $A$. Hence underivable dependencies are not implied, which is the contrapositive of completeness. The construction also explains why closure computation decides implication in linear time.'
          },
          {
            kind: 'example',
            heading: 'Closure certifies a key',
            body: 'Take $R = (A, B, C, D, E)$ with $F = \\{A \\to B, B \\to C, A \\to D, D \\to E\\}$. Starting from $\\{A\\}$, fire $A \\to B$ to reach $\\{A, B\\}$, then $B \\to C$ and $A \\to D$ to reach $\\{A, B, C, D\\}$, then $D \\to E$ to reach all five attributes, so $A^{+} = R$ and $A$ is a superkey; minimality follows because the empty set closes to itself. The trace is a **proof object**: each step cites transitivity or augmentation, and deleting any dependency shrinks some closure, which is exactly the minimal-cover test. Graduate engines internalize this as reachability search over the dependency hypergraph rather than row enumeration.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Redundancy in a table is governed by constraints between columns called functional dependencies, and almost every normalization decision flows from them. This section builds the closure machinery that turns a small set of stated dependencies into every implied one. With closures in hand, keys, equivalence and minimal covers become routine computations.',
    objectives: [
      'Compute attribute closures $X^{+}$ under a set $F$ and list every implied dependency $X \\to Y$',
      'Derive keys and superkeys from closures and justify each step with Armstrong axioms',
      'Remove extraneous attributes and redundant dependencies to obtain a minimal cover $F_c$'
    ],
    concepts: [
      {
        term: 'Functional dependency',
        kind: 'definition',
        statement: 'A **functional dependency** `X -> Y` asserts that any two rows agreeing on the attribute set $X$ must agree on $Y$, written $X \\to Y$. It is a constraint on all legal instances, not a coincidence in one snapshot.',
        detail: 'Trivial cases such as $AB \\to A$ always hold. Nontrivial ones carry design force: $roll \\to hostel$ forbids one roll number from appearing with two hostels in any valid instance.'
      },
      {
        term: 'Attribute closure',
        kind: 'method',
        statement: 'The **closure** `closure(X)` denoted $X^{+}$ is the set of attributes forced by $X$ under $F$, computed by repeatedly adding right-hand sides of applicable dependencies until fixation. Then $X \\to Y$ follows from $F$ exactly when $Y \\subseteq X^{+}$.',
        detail: 'Start with $result = X$. While some $U \\to V$ in $F$ has $U \\subseteq result$ with $V \\not\\subseteq result$, add $V$ to $result$. The loop runs in time linear in the size of $F$ with proper indexing.'
      },
      {
        term: 'Armstrong axioms',
        kind: 'theorem',
        statement: 'Reflexivity, augmentation and transitivity form a **sound and complete** axiom set `Armstrong`, so every implied $X \\to Y$ has a derivation and nothing false derives. Union, decomposition and pseudotransitivity are convenient derived rules built from the core three.',
        detail: 'Completeness is shown by constructing a two-row counterexample whenever $Y \\not\\subseteq X^{+}$. In drills, cite transitivity chains explicitly rather than jumping across three columns at once.'
      },
      {
        term: 'Superkeys and candidate keys',
        kind: 'definition',
        statement: 'A **superkey** `K` satisfies $K^{+} = R$ for the full schema $R$, while a **candidate key** is a minimal superkey with no proper subset closing to $R$. Prime attributes are those belonging to at least one candidate key.',
        detail: 'Test minimality by trying removal of each attribute from $K$ and recomputing closure. A schema may hold several candidate keys, and one is later chosen as primary for referencing.'
      },
      {
        term: 'Extraneous attributes and minimal cover',
        kind: 'method',
        statement: 'An attribute is **extraneous** in `F` when dropping it from a left-hand side or discarding a whole dependency leaves $F^{+}$ unchanged, verified by closure tests. A **minimal cover** $F_c$ is a singleton-right-hand-side set with no extraneous attributes and no redundant dependencies.',
        detail: 'Procedure: split right-hand sides, delete extraneous left attributes using closures under the current set, then delete redundant dependencies one at a time. Minimal covers are not unique, and any one of them suffices for synthesis.'
      }
    ],
    examples: [
      {
        title: 'Trace: closure and key discovery',
        problem: 'Schema $R = (A, B, C, D, E)$ carries $F = (A \\to B, B \\to C, A \\to D, D \\to E)$. Compute $A^{+}$ and decide whether $A$ is a key.',
        steps: [
          { label: 'Step 1', text: '```text\nstart:  result = {A}\nuse A -> B:  result = {A, B}\nuse B -> C:  result = {A, B, C}\n```\nSeed the closure with $A$ itself, then fire every dependency whose left side is already inside the set.' },
          { label: 'Step 2', text: 'Continue with $A \\to D$ to reach $(A, B, C, D)$, then $D \\to E$ to reach $(A, B, C, D, E)$. No further dependency adds anything, so $A^{+} = R$ and $A$ is a superkey.' },
          { label: 'Step 3', text: 'Minimality is immediate here because the only subset of a single attribute is the empty set, and $\\emptyset^{+} = \\emptyset \\ne R$. Hence $A$ alone is a candidate key of $R$.' }
        ],
        result: '$A^{+} = (A, B, C, D, E)$, so $A$ is the candidate key and every $A \\to Y$ with $Y \\subseteq R$ is implied.'
      },
      {
        title: 'Drill: minimal cover of a bloated set',
        problem: 'Reduce $F = (AB \\to C, A \\to B, B \\to C, A \\to C)$ to a minimal cover and justify each deletion.',
        steps: [
          { label: 'Step 1', text: 'Right-hand sides are already singletons. Test $AB \\to C$: compute $A^{+}$ under the remaining set $(A \\to B, B \\to C)$, which yields $(A, B, C)$. Since $C$ follows without $AB \\to C$, discard it as redundant.' },
          { label: 'Step 2', text: 'Test $A \\to C$ against $(A \\to B, B \\to C)$: again $A^{+} = (A, B, C)$ by transitivity through $B$, so $A \\to C$ adds nothing and is removed.' },
          { label: 'Step 3', text: '```text\nremaining: A -> B, B -> C\ncheck A -> B: B not in A+ without it, keep\ncheck B -> C: C not in B+ without it, keep\n```\nNeither survivor is implied by the other, and no left side shrinks, so $F_c = (A \\to B, B \\to C)$.' }
        ],
        result: 'Minimal cover $F_c = (A \\to B, B \\to C)$ preserves $F^{+}$ with two dependencies instead of four.'
      }
    ],
    keyTakeaways: [
      '$X \\to Y$ holds exactly when $Y \\subseteq X^{+}$, so closure answers every implication question.',
      'Armstrong axioms of reflexivity, augmentation and transitivity derive every true dependency and no false one.',
      '$K$ is a superkey when $K^{+} = R$ and a candidate key when no proper subset closes to $R$.',
      'Minimal covers remove extraneous attributes and redundant dependencies while keeping $F^{+}$ identical.'
    ],
    quiz: [
      {
        q: 'Under $F = (A \\to B, B \\to C)$, which statement is correct?',
        options: [
          '$A^{+} = (A, B)$ only',
          '$A^{+} = (A, B, C)$ by transitivity, so $A \\to C$ is implied',
          `$B^{+} = (A, B, C)$`,
          'No nontrivial dependency with left side $A$ is implied'
        ],
        answer: 1,
        explanation: 'Step 1: Start closure with $result = (A)$. Step 2: Fire $A \\to B$ to add $B$. Step 3: With $B$ present, fire $B \\to C$ to add $C$. Step 4: Since $C \\in A^{+}$, the dependency $A \\to C$ is implied and the other options misstate the closures.'
      },
      // PYQ-pattern: closure computation under a chain of dependencies
      {
        q: 'Schema $(P, Q, R, S)$ has $F = (P \\to Q, Q \\to R)$. Which is a candidate key?',
        options: [`$(Q)$`, `$(P, S)$`, `$(Q, S)$`, `$(R, S)$`],
        answer: 1,
        explanation: 'Step 1: $P^{+} = (P, Q, R)$ using the chain, so $P$ reaches everything except $S$. Step 2: Adding $S$ gives $(P, S)^{+} = (P, Q, R, S)$, a superkey. Step 3: Neither $P$ nor $S$ alone closes to all four attributes. Step 4: Hence $(P, S)$ is minimal and the remaining choices either miss attributes or are not minimal.'
      },
      {
        q: 'Which rule is NOT one of the three Armstrong axioms?',
        options: ['Reflexivity', 'Augmentation', 'Union', 'Transitivity'],
        answer: 2,
        explanation: 'Step 1: Recall the core three: reflexivity, augmentation, transitivity. Step 2: Union is derived by augmenting each premise and chaining with transitivity. Step 3: Decomposition and pseudotransitivity are likewise derived conveniences. Step 4: Therefore Union is useful but not axiomatic.'
      },
      {
        q: 'Attribute $A$ on the left of $AB \\to C$ is extraneous when:',
        options: [
          `$C \\subseteq A^{+}$ computed without using $AB \\to C$`,
          `$B^{+} = R$`,
          '$C$ is a prime attribute',
          '$AB$ is a superkey'
        ],
        answer: 0,
        explanation: 'Step 1: Drop $A$ to get the candidate $B \\to C$. Step 2: Test whether $B$ alone forces $C$ under the surviving set. Step 3: That test is exactly the closure check $C \\subseteq B^{+}$, equivalently $C \\subseteq A^{+}$ without the dependency under test in the standard formulation used here. Step 4: The other options describe unrelated key or primality facts.'
      }
    ]
  },

  // ---------------------------------------------------------------- 5.2
  {
    sectionId: 'dbms-ch5-s2',
    readingTime: 8,
    intro: 'First, second and third normal forms each outlaw one shape of redundancy tied to the key structure. Partial dependencies violate second normal form and transitive dependencies violate third. This section trains the eye to spot the offending dependency and repair it by lossless splitting.',
    objectives: [
      'Classify violations as partial or transitive using prime attributes and candidate keys',
      'Test schemas for $1NF$, $2NF$ and $3NF$ membership from closures alone',
      'Decompose $2NF$ and $3NF$ violators into lossless pieces that remove the anomaly'
    ],
    concepts: [
      {
        term: 'First normal form',
        kind: 'definition',
        statement: 'A table is in **first normal form** `1NF` when every attribute holds atomic, indivisible values with one value per cell and no repeating groups. Multivalued cells and nested tables must be unpacked into separate rows or tables.',
        detail: 'Atomicity is judged by the workload: a comma-separated phone list is non-atomic when queries filter on single numbers. Repeating groups across columns such as $phone_1$ and $phone_2$ likewise break the form.'
      },
      {
        term: 'Partial dependency and 2NF',
        kind: 'definition',
        statement: 'A **partial dependency** `partial` occurs when a nonprime attribute depends on a proper subset of a candidate key, written $K_{part} \\to A$ with $K_{part} \\subset K$. **Second normal form** forbids every such dependency while assuming $1NF$.',
        detail: 'Single-attribute keys are immune: with nothing proper to depend on, no partial dependency can exist. Composite keys such as $(roll, course)$ invite the fault, for instance $roll \\to hostel$ alongside $(roll, course) \\to grade$.'
      },
      {
        term: 'Transitive dependency and 3NF',
        kind: 'definition',
        statement: 'A **transitive dependency** `transitive` chains $K \\to X$ and $X \\to A$ where $X$ is not a superkey and $A$ is nonprime. **Third normal form** permits $X \\to A$ only when $X$ is a superkey or $A$ is prime.',
        detail: 'Classic chain: $emp \\to dept$ with $dept \\to building$, where $building$ repeats per department. The middle column $dept$ is the cut point for decomposition.'
      },
      {
        term: 'Prime versus nonprime reasoning',
        kind: 'method',
        statement: 'Mark each attribute as **prime** `prime` when it belongs to any candidate key, else nonprime, then screen every $X \\to A$ against the normal-form condition. Prime right-hand sides are forgiven by $3NF$ even with a non-superkey left side.',
        detail: 'Enumerate all candidate keys first, since missing one corrupts every later verdict. A dependency whose right side mixes prime and nonprime attributes is judged per attribute, not per dependency.'
      },
      {
        term: 'Lossless repair by splitting',
        kind: 'method',
        statement: 'Repair a violation by **splitting** `split` the schema along the offending $X \\to A$ into $(X, A)$ plus the remainder carrying $X$ as a link. The shared $X$ keeps the join lossless while the anomaly-bearing redundancy disappears.',
        detail: 'For $roll \\to hostel$ inside $(roll, course, grade, hostel)$, produce $(roll, hostel)$ and $(roll, course, grade)$. Each fact lives once, and joining on $roll$ rebuilds every row exactly.'
      }
    ],
    examples: [
      {
        title: 'Trace: partial dependency in an enrollment table',
        problem: 'Table $Enroll(roll, course, grade, hostel)$ has key $(roll, course)$ and $F = ((roll, course) \\to grade, roll \\to hostel)$. Identify the violation and repair it.',
        steps: [
          { label: 'Step 1', text: '```text\nkey:          (roll, course)\nnonprime:     grade, hostel\nsuspect:      roll -> hostel\n```\n$hostel$ is nonprime and $roll$ is a proper subset of the key, matching the partial-dependency pattern exactly.' },
          { label: 'Step 2', text: 'Hence the schema is in $1NF$ but not $2NF$: $grade$ depends on the whole key while $hostel$ depends on part of it, so hostel names repeat for every course of the same student.' },
          { label: 'Step 3', text: 'Split into $Hostel(roll, hostel)$ keyed by $roll$ and $Marks(roll, course, grade)$ keyed by $(roll, course)$. Both pieces reach $2NF$, and the common $roll$ column joins them losslessly.' }
        ],
        result: 'Partial dependency $roll \\to hostel$ removed by the split, leaving two $2NF$ tables with no hostel duplication.'
      },
      {
        title: 'Drill: transitive chain through department',
        problem: '$Emp(eid, dept, building)$ has $eid \\to dept$ and $dept \\to building$ with key $eid$. Test $3NF$ and decompose.',
        steps: [
          { label: 'Step 1', text: 'Only key $eid$ exists, so $building$ is nonprime. The dependency $dept \\to building$ has a non-superkey left side and a nonprime right side, which is the forbidden transitive shape.' },
          { label: 'Step 2', text: 'The schema satisfies $2NF$ since the key is a single column, yet fails $3NF$ because facts about buildings repeat for every employee of one department.' },
          { label: 'Step 3', text: '```text\nE1(eid, dept)       key eid,  eid -> dept\nE2(dept, building)  key dept, dept -> building\n```\nJoining $E1$ and $E2$ on $dept$ reconstructs the roster with each building stored once.' }
        ],
        result: 'Decomposition into $E1$ and $E2$ keeps $3NF$ and stores each department building exactly once.'
      }
    ],
    keyTakeaways: [
      '$1NF$ demands atomic cells with no repeating groups or nested tables.',
      '$2NF$ forbids nonprime attributes depending on a proper part of any candidate key.',
      '$3NF$ additionally forbids transitive chains through a non-superkey middle column.',
      'Splitting along the offending dependency removes the duplication while the shared columns keep the join lossless.'
    ],
    quiz: [
      {
        q: 'Which table is NOT in $1NF$?',
        options: [
          'Orders with one order id per row and scalar columns',
          'Students with a comma-separated phone list in one cell',
          'Log with one timestamp per row',
          'Items with integer quantities per row'
        ],
        answer: 1,
        explanation: 'Step 1: Recall $1NF$ requires atomic single values per cell. Step 2: A comma-separated list packs several values into one cell. Step 3: The remaining tables hold one scalar per cell. Step 4: Hence only the phone-list design breaks atomicity.'
      },
      // PYQ-pattern: partial dependency under a composite key
      {
        q: 'Key $(A, B)$ with $A \\to C$ and $C$ nonprime violates:',
        options: [`$1NF$`, `$2NF$`, '$3NF$ only', 'No normal form up to $3NF$'],
        answer: 1,
        explanation: 'Step 1: Identify $C$ as nonprime and $A$ as a proper part of the key. Step 2: That is precisely a partial dependency. Step 3: Partial dependencies are the $2NF$ violation. Step 4: The schema may still be in $1NF$ since atomicity is untouched.'
      },
      {
        q: 'Schema with single-attribute key $K$ and $K \\to X$, $X \\to A$ where $A$ is nonprime fails:',
        options: [`$2NF$`, `$3NF$`, 'Both $1NF$ and $2NF$', 'Neither, it is in $3NF$'],
        answer: 1,
        explanation: 'Step 1: A single-column key admits no partial dependency, so $2NF$ holds. Step 2: $X$ is not a superkey and $A$ is nonprime, forming a transitive chain. Step 3: That chain is the $3NF$ violation. Step 4: Splitting at $X$ repairs it.'
      },
      {
        q: 'After repairing $roll \\to hostel$ by splitting, the join column is:',
        options: ['hostel', 'grade', 'roll', 'course'],
        answer: 2,
        explanation: 'Step 1: The pieces are $(roll, hostel)$ and $(roll, course, grade)$. Step 2: Their shared attribute is $roll$. Step 3: Joining on $roll$ rebuilds each row once. Step 4: No other attribute appears in both pieces.'
      }
    ]
  },

  // ---------------------------------------------------------------- 5.3
  {
    sectionId: 'dbms-ch5-s3',
    readingTime: 9,
    intro: 'Boyce-Codd normal form tightens third normal form by removing the prime-attribute pardon. Every determinant must be a superkey, with no exceptions. The price of this strictness is that some correct decompositions stop preserving dependencies.',
    objectives: [
      'Test $BCNF$ membership by checking that every nontrivial $X \\to A$ has a superkey $X$',
      'Decompose $BCNF$ violators with the binary-split loop until every piece passes',
      'Detect when a $BCNF$ split drops a dependency and state the $3NF$ tradeoff'
    ],
    concepts: [
      {
        term: 'BCNF condition',
        kind: 'definition',
        statement: 'A schema is in **Boyce-Codd normal form** `BCNF` when every nontrivial $X \\to A$ has a superkey $X$. Unlike $3NF$, a prime right-hand side earns no exemption.',
        detail: 'The test needs only a minimal cover: check each surviving $X \\to A$ for $X^{+} = R$. One violator is enough to fail the whole schema.'
      },
      {
        term: 'BCNF versus 3NF gap',
        kind: 'insight',
        statement: 'The **gap** `gap` between the forms is exactly prime right-hand sides with non-superkey determinants: allowed by $3NF$, banned by $BCNF$. Such schemas hide redundancy among overlapping candidate keys.',
        detail: 'Standard shape: keys $(A, B)$ and $(A, C)$ with $C \\to B$. Then $C \\to B$ is $3NF$-legal since $B$ is prime, yet $C$ alone is no superkey so $BCNF$ fails.'
      },
      {
        term: 'BCNF binary-split loop',
        kind: 'method',
        statement: 'While a piece violates $BCNF$ at $X \\to A$, **split** `split` it into $(X, A^{+})$ and the remainder $(R - A^{+} + X)$. Recurse on each piece until all pass.',
        detail: 'The $(X, A^{+})$ piece has $X$ as key by construction. Termination follows because each split shrinks at least one piece, and losslessness holds by the shared-$X$ argument at every step.'
      },
      {
        term: 'Dependency preservation loss',
        kind: 'insight',
        statement: 'A decomposition **preserves** `preserve` a dependency $X \\to Y$ when $X \\to Y$ follows from the union of the projections onto the pieces. $BCNF$ splits can separate $X$ and $Y$ so no piece checks the constraint.',
        detail: 'Checking preservation means projecting $F$ onto each piece via closures restricted to that piece, then testing whether the union implies each original dependency. Lost dependencies then need cross-table assertions or triggers.'
      },
      {
        term: '3NF synthesis tradeoff',
        kind: 'theorem',
        statement: 'The **synthesis** `synthesis` algorithm always yields $3NF$, lossless and dependency-preserving pieces, which $BCNF$ cannot guarantee. Choose $BCNF$ for anomaly removal and $3NF$ synthesis when every constraint must stay checkable inside one table.',
        detail: 'Synthesis builds one table per minimal-cover dependency, then adds a key table when no piece contains a key. The result may keep a $BCNF$ violator of the gap shape deliberately to avoid losing the constraint.'
      }
    ],
    derivations: [
      {
        title: 'Lossless Binary Split on a BCNF Violator',
        statement: 'Splitting $R$ on a violating $X \\to A$ into $R_{1}$ and $R_{2}$ sharing $X$ loses no rows: $$R = R_{1} \\bowtie R_{2}$$',
        prerequisites: [
          'Attribute closure $X^{+}$ and the superkey test $X^{+} = R$',
          'Lossless-join theorem: $(R_{1} \\cap R_{2}) \\to R_{1}$ or $(R_{1} \\cap R_{2}) \\to R_{2}$ suffices',
          'BCNF violator $X \\to A$ where $X$ is not a superkey of $R$',
        ],
        steps: [
          {
            label: 'Step 1: Close the violator left side',
            formula: `$$X^{+} = \\{ B \\mid X \\to B \\in F^{+} \\}$$`,
            explanation: 'Closure gathers every attribute forced by $X$ under the full dependency set $F$, so $X^{+}$ is exactly the content the new piece must hold to give $X$ key status. Computing it by repeated expansion is sound because each added attribute follows from Armstrong rules applied to already reached ones. The violator guarantees $X^{+}$ lies strictly between $X$ and $R$, which is why the split below makes progress on both pieces.',
          },
          {
            label: 'Step 2: Build two pieces sharing the left side',
            formula: `$$R_{1} = X \\cup X^{+} \\qquad R_{2} = (R - X^{+}) \\cup X$$`,
            explanation: 'Placing the full closure with $X$ in $R_{1}$ makes $X$ a key of that piece by construction, which is the property $BCNF$ demands locally. Keeping $X$ inside $R_{2}$ preserves the join link so shared values can match rows back together. Subtracting $X^{+}$ outside $X$ from $R_{2}$ removes the repeated fact while leaving every attribute present in at least one piece.',
          },
          {
            label: 'Step 3: Show the shared columns determine a whole piece',
            formula: `$$R_{1} \\cap R_{2} = X \\quad \\text{and} \\quad X \\to R_{1}$$`,
            explanation: 'Intersection equals $X$ because $R_{1}$ contributes $X^{+}$ while $R_{2}$ contributes only $X$ from that region. The dependency $X \\to R_{1}$ holds since $R_{1}$ is $X^{+}$ by definition and every member follows from $X$. This is precisely the lossless-join precondition, which is why a superkey on one side forbids spurious combinations.',
          },
          {
            label: 'Step 4: Conclude the join rebuilds the original rows',
            formula: `$$R_{1} \\bowtie R_{2} = R$$`,
            explanation: 'The lossless theorem turns the functional condition into a row-level guarantee: joining on $X$ reproduces each original tuple exactly once. No extra tuples appear because $X$ is unique within $R_{1}$, so each $R_{2}$ row matches at most one partner. Repeating the argument at every recursion level keeps the whole binary-split loop lossless down to $BCNF$ pieces.',
          },
        ],
        result: 'Every binary split on $X \\to A$ is lossless because the shared $X$ is a key of $R_{1}$; iterating the loop therefore yields $BCNF$ tables whose natural join equals the original $R$. The guarantee covers rows only, so a dependency such as $AB \\to C$ may still span pieces and need cross-table checking.',
      },
    ],
    examples: [
      {
        title: 'Trace: a schema in 3NF but not BCNF',
        problem: '$R = (A, B, C)$ with $F = (AB \\to C, C \\to B)$. Keys are $(A, B)$ and $(A, C)$. Test $3NF$ and $BCNF$.',
        steps: [
          { label: 'Step 1', text: '```text\nkeys:      (A,B) and (A,C)\nprime:     A, B, C (all prime)\ncheck C -> B:  left not superkey, right prime\n```\n$3NF$ forgives the dependency because $B$ is prime, so the schema passes $3NF$.' },
          { label: 'Step 2', text: 'For $BCNF$ there is no prime pardon: $C^{+} = (C, B) \\ne R$, so $C$ is not a superkey and $C \\to B$ is a $BCNF$ violator.' },
          { label: 'Step 3', text: 'Splitting on $C \\to B$ gives $(C, B)$ and $(A, C)$, both in $BCNF$. But $AB \\to C$ no longer sits inside one piece, so that constraint is lost to single-table checks.' }
        ],
        result: 'In $3NF$ yet not in $BCNF$; the $BCNF$ repair costs the dependency $AB \\to C$.'
      },
      {
        title: 'Drill: binary-split loop to BCNF',
        problem: '$R = (S, C, I)$ for student, course and instructor with $C \\to I$ and $(S, C)$ as key. Decompose to $BCNF$.',
        steps: [
          { label: 'Step 1', text: '$C^{+} = (C, I) \\ne R$, so $C \\to I$ violates $BCNF$: one instructor teaches each course, yet instructor names repeat per enrolled student.' },
          { label: 'Step 2', text: 'Split into $T1(C, I)$ with key $C$ and $T2(S, C)$ with key $(S, C)$. Both pieces now have every determinant as a superkey.' },
          { label: 'Step 3', text: '```text\nT1(C, I):  C -> I kept inside T1\nT2(S, C):  key (S, C), no leftover FD\njoin on C is lossless\n```\nHere no dependency is lost, so $BCNF$ is strictly better than $3NF$ for this instance.' }
        ],
        result: 'Lossless $BCNF$ design $(C, I)$ plus $(S, C)$ with all constraints preserved.'
      }
    ],
    keyTakeaways: [
      '$BCNF$ requires every nontrivial determinant to be a superkey, with no prime-attribute pardon.',
      'Overlapping candidate keys with a dependency like $C \\to B$ mark the $3NF$-yes yet $BCNF$-no gap.',
      'The binary-split loop on violators always terminates in lossless $BCNF$ pieces.',
      '$BCNF$ can lose dependencies, while $3NF$ synthesis keeps losslessness plus preservation.'
    ],
    quiz: [
      // PYQ-pattern: 3NF-yes BCNF-no verdict on overlapping keys
      {
        q: '$R = (A, B, C)$ with $AB \\to C$ and $C \\to B$ is:',
        options: [
          'In $BCNF$',
          'In $3NF$ but not in $BCNF$',
          'Not even in $2NF$',
          'In $1NF$ only because $C \\to B$ is partial'
        ],
        answer: 1,
        explanation: 'Step 1: Compute keys $(A, B)$ and $(A, C)$, so all attributes are prime. Step 2: $C \\to B$ has a prime right side, hence $3NF$ passes. Step 3: $C^{+} = (C, B)$, not a superkey, hence $BCNF$ fails. Step 4: The dependency is transitive-like, not partial, so the middle verdict is exact.'
      },
      {
        q: 'A schema is in $BCNF$ when:',
        options: [
          'Every determinant of a nontrivial dependency is a superkey',
          'Every determinant is prime',
          'There are no transitive dependencies on prime attributes',
          'Every table has a single-column key'
        ],
        answer: 0,
        explanation: 'Step 1: Recall the $BCNF$ condition quantifies over determinants. Step 2: It demands superkey status for each one. Step 3: Primality of attributes is irrelevant under $BCNF$. Step 4: Key width is likewise unrestricted.'
      },
      {
        q: 'Splitting $R$ on violator $X \\to A$ produces:',
        options: [
          'One table $(X, A)$ and one copy of $R$ unchanged',
          'Tables $(X, A^{+})$ and $(R - A^{+} + X)$ sharing $X$',
          'Tables $(X)$ and $(R - X)$ with no shared column',
          'A single table $(X, A)$ that always preserves all dependencies'
        ],
        answer: 1,
        explanation: 'Step 1: The violating closure $X^{+}$ becomes its own piece with key $X$. Step 2: The remainder keeps $X$ as the join link. Step 3: Sharing $X$ is what keeps the split lossless. Step 4: Preservation is not guaranteed by this construction.'
      },
      {
        q: 'Why might a designer knowingly keep $3NF$ instead of $BCNF$?',
        options: [
          '$3NF$ always has fewer tables',
          '$BCNF$ cannot be tested with closures',
          'A $BCNF$ split can force a constraint to span tables, while $3NF$ synthesis preserves all dependencies',
          `$3NF$ removes more redundancy than $BCNF$`
        ],
        answer: 2,
        explanation: 'Step 1: Compare the guarantees of the two constructions. Step 2: $BCNF$ prioritizes anomaly removal and may scatter a dependency. Step 3: Scattered constraints need cross-table checks, which are costly. Step 4: $3NF$ synthesis keeps every constraint inside one table at the cost of a possible gap violator.'
      }
    ]
  },

  // ---------------------------------------------------------------- 5.4
  {
    sectionId: 'dbms-ch5-s4',
    readingTime: 10,
    intro: 'Two guarantees decide whether a decomposition is usable: joining the pieces must rebuild exactly the original rows, and constraints should stay checkable. The chase test settles the first question and projection closure settles the second. The section closes with the synthesis routine that delivers both at once for third normal form.',
    objectives: [
      'Run the chase tableau to decide losslessness of binary and multiway splits',
      'Test dependency preservation by projecting $F$ onto pieces and re-deriving each $X \\to Y$',
      'Build lossless, preserving $3NF$ schemas with the synthesis algorithm'
    ],
    concepts: [
      {
        term: 'Lossless-join decomposition',
        kind: 'definition',
        statement: 'A decomposition is **lossless** `lossless` when the natural join of the projections always equals the original instance, so no spurious rows appear and none vanish. Lossy splits either invent or destroy rows on rejoin.',
        detail: 'Spurious rows arise when pieces share too little: joining independent facts multiplies them. The shared columns must functionally pin down at least one side.'
      },
      {
        term: 'Binary lossless test',
        kind: 'theorem',
        statement: 'A split of $R$ into **$R1$ and $R2$** `binary` is lossless exactly when the shared attributes $R1 \\cap R2$ functionally determine $R1$ or $R2$, that is $R1 \\cap R2 \\to R1$ or $R1 \\cap R2 \\to R2$ holds in $F^{+}$. One functional link suffices.',
        detail: 'For the hostel repair, $(roll, hostel) \\cap (roll, course, grade) = (roll)$ and $roll \\to (roll, hostel)$, so losslessness is immediate. Test the condition with a closure, not by eyeballing sample rows.'
      },
      {
        term: 'Chase tableau test',
        kind: 'method',
        statement: 'The **chase** `chase` tableau starts one row per piece with distinguished symbols on owned columns and repeatedly equates symbols wherever $X \\to Y$ forces agreement. A row of all distinguished symbols proves losslessness.',
        detail: 'Initialize undetermined cells with fresh subscripted symbols per row. Each dependency application may merge symbols across rows, and merges cascade. For binary splits the chase reduces exactly to the shared-key test.'
      },
      {
        term: 'Dependency preservation test',
        kind: 'method',
        statement: 'Project $F$ by collecting every **$X \\to Y$** `project` with $X, Y$ inside one piece that follows from $F$, take the union $G$ across pieces, and check each original dependency against $G^{+}$. Preservation holds when all re-derive.',
        detail: 'Projection is exponential in the worst case but tiny in drills: enumerate closures of subsets within each piece. A lost dependency is not a wrong schema, only one needing wider checks.'
      },
      {
        term: '3NF synthesis algorithm',
        kind: 'method',
        statement: 'The **synthesis** `synthesis` routine builds one table per minimal-cover dependency, merges tables with equal keys, and adds a key-carrying table when needed. The output is lossless, preserving and in $3NF$.',
        detail: 'Steps: compute $F_c$, group dependencies by left side, create each group table, then verify some table contains a candidate key of $R$ and append one when missing. Redundant wide tables may be dropped when subsumed.'
      }
    ],
    examples: [
      {
        title: 'Trace: chase on a three-way split',
        problem: '$R = (A, B, C, D)$ with $A \\to B$ and $C \\to D$ splits into $(A, B)$, $(C, D)$ and $(A, C)$. Decide losslessness.',
        steps: [
          { label: 'Step 1', text: '```text\npiece (A,B):  a1 a2 b3 b4\npiece (C,D):  a1 b2 c3 d4\npiece (A,C):  a1 b2 c3 b4\nsymbols: a = distinguished, b = fresh\n```\nSeed each row with distinguished marks on owned columns and fresh marks elsewhere.' },
          { label: 'Step 2', text: 'Apply $A \\to B$: all rows share distinguished $A$, so their $B$ marks merge to one symbol. Apply $C \\to D$ after the $(A, C)$ row links the pieces, merging the $D$ marks similarly.' },
          { label: 'Step 3', text: 'Cascading merges turn the $(A, C)$ row fully distinguished across $(A, B, C, D)$, which certifies a lossless multiway join.' }
        ],
        result: 'Chase succeeds with a fully distinguished row, so the three-way split is lossless.'
      },
      {
        title: 'Drill: synthesis that keeps every constraint',
        problem: '$R = (A, B, C, D)$ with $F = (A \\to B, B \\to C, A \\to D)$. Synthesize $3NF$ tables.',
        steps: [
          { label: 'Step 1', text: 'Minimal cover is already $(A \\to B, B \\to C, A \\to D)$. Group by left side: group $A$ carries $(A \\to B, A \\to D)$ and group $B$ carries $(B \\to C)$.' },
          { label: 'Step 2', text: 'Create $T1(A, B, D)$ and $T2(B, C)$. Candidate key of $R$ is $A$, and $T1$ contains $A$, so no extra key table is needed.' },
          { label: 'Step 3', text: '```text\nT1(A, B, D):  A -> B, A -> D inside T1\nT2(B, C):     B -> C inside T2\nlossless via A, preserving, both in 3NF\n```\nEach dependency sits inside one table and the shared $B$ plus key $A$ keep the join exact.' }
        ],
        result: 'Synthesis yields $T1(A, B, D)$ and $T2(B, C)$: lossless, preserving and $3NF$.'
      }
    ],
    keyTakeaways: [
      'Lossless means rejoining projections rebuilds exactly the original rows with no spurious tuples.',
      'A binary split is lossless exactly when the shared columns determine at least one piece.',
      'The chase equates tableau symbols via dependencies, and a fully distinguished row certifies losslessness.',
      'Synthesis from a minimal cover delivers $3NF$ tables that are both lossless and dependency-preserving.'
    ],
    quiz: [
      {
        q: 'Split $R$ into $R1$ and $R2$ is lossless when:',
        options: [
          '$R1 \\cup R2 = R$ regardless of dependencies',
          'Both pieces are in $BCNF$',
          `$R1 \\cap R2 \\to R1$ or $R1 \\cap R2 \\to R2$ follows from $F$`,
          'No dependency spans the two pieces'
        ],
        answer: 2,
        explanation: 'Step 1: Recall the binary lossless theorem. Step 2: It quantifies over the shared columns only. Step 3: One functional link from the intersection to a full piece suffices. Step 4: Union coverage and normal forms alone do not decide the issue.'
      },
      // PYQ-pattern: chase tableau verdict on a multiway decomposition
      {
        q: 'In a chase tableau, losslessness is certified by:',
        options: [
          'One row becoming fully distinguished on every column',
          'Two rows becoming identical on all columns',
          'Every cell holding a fresh subscripted symbol',
          'No dependency applying to any row'
        ],
        answer: 0,
        explanation: 'Step 1: Recall tableau initialization with distinguished and fresh symbols. Step 2: Dependencies merge symbols across rows. Step 3: A fully distinguished row means the join pins down one original tuple. Step 4: That row is the success criterion for arbitrary splits.'
      },
      {
        q: 'Dependency preservation is tested by:',
        options: [
          'Joining sample instances and comparing row counts',
          'Checking that each piece is in $BCNF$',
          'Counting tables against the number of dependencies',
          'Projecting $F$ onto each piece, uniting the projections, and re-deriving every original dependency'
        ],
        answer: 3,
        explanation: 'Step 1: Projection collects dependencies checkable inside one piece. Step 2: The union $G$ captures all single-table enforceable constraints. Step 3: Each $X \\to Y$ in $F$ is tested against $G^{+}$. Step 4: Row counts and normal forms answer different questions.'
      },
      {
        q: 'Synthesis adds an extra key table when:',
        options: [
          'The minimal cover has more than three dependencies',
          'No constructed piece contains a candidate key of $R$',
          'Two pieces share the same key',
          'Every piece is already in $BCNF$'
        ],
        answer: 1,
        explanation: 'Step 1: Recall synthesis builds one table per dependency group. Step 2: Losslessness needs a key connected across the pieces. Step 3: When no piece carries a full key, appending one restores the guarantee. Step 4: Dependency count and $BCNF$ status do not trigger this step.'
      }
    ]
  }
]
