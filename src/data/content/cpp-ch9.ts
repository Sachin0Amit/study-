import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 9: Statements (Sections 9.1 – 9.8)
// The statement catalogue, declarations as statements, selection, iteration,
// goto, comments and indentation, and the chapter's advice.
// ============================================================================

export const cppCh9Content: SectionContent[] = [
  // ---------------------------------------------------------------- 9.1
  {
    sectionId: "cpp-ch9-s1",
    readingTime: 5,
    intro: "Statements are where a running program actually does things: they change the values of variables, write output, and decide which piece of code runs next. Stroustrup opens the chapter with a design fact that surprises programmers coming from Pascal or BASIC: C++ has no assignment statement and no procedure-call statement — assignment and function call are expressions, and a statement is what you get when a computation is put to work. Fixing that vocabulary first makes the whole catalogue in 9.2 easy to read.",
    objectives: [
      "Define what a C++ statement is and distinguish it from an expression",
      "Explain why assignment and function call are expressions rather than statements",
      "Identify the two levels of control flow the language deliberately provides"
    ],
    concepts: [
      {
        term: "Statement",
        kind: "definition",
        statement: "A **statement** is the basic unit of execution: it either changes the state of the program — the values of variables, the data written to files and devices — or determines which statement is executed next. Syntactically a statement is a declaration, an expression followed by a `;`, a block, a selection or iteration statement, or a jump.",
        detail: "The state of a program is the totality of its variables together with whatever it has already written to the world. A statement executes for its effect on that state; an expression computes a value that may then be put to use by a statement."
      },
      {
        term: "No assignment-statement, no call-statement",
        kind: "insight",
        statement: "C++ has **no assignment statement and no procedure-call statement**. Both `a = b` and `f(x)` are *expressions* — `a = b` yields the value assigned — and they become statements only when terminated by a semicolon.",
        detail: "That is why chains such as `a = b = c = 0;` work: the right-associative assignment expression nests inside itself, and one semicolon turns the whole chain into a single statement. A language that made assignment a statement would need a separate multi-assignment construct."
      },
      {
        term: "Two levels of control flow",
        kind: "insight",
        statement: "C++ deliberately offers **two levels of control**: structured, machine-independent statements — `if`, `switch`, `for`, `while` — and the low-level `goto` with labels. Most code never needs the low level, but C++ keeps it because occasionally, such as escaping a deeply nested loop or coding a retry loop in a device driver, it is the most honest tool available.",
        detail: "The policy throughout the chapter: prefer the structured forms; treat `goto` as a last resort to be understood, not a habit to be acquired."
      },
      {
        term: "Statements have no value",
        kind: "insight",
        statement: "**A statement does not have a value.** Expressions produce values; statements produce effects and sequencing. You cannot write `x = if (a) 2;` — when selection is needed *inside* an expression, C++ supplies the conditional operator `a ? 2 : 0` instead.",
        detail: "This is the cleanest way to remember the boundary drawn in Chapter 10: everything that computes is an expression; everything that controls when and whether computation happens is a statement."
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Statements as building blocks. You can claim this section when you can define what a C++ statement is and distinguish it from an expression — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 9 (Statements); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Reading a six-line program as statements",
        problem: "Classify every construct in the following program fragment as declaration, expression-statement, block, selection, iteration or jump.",
        steps: [
          { label: "Lines 1–2", text: "`int n = 5;` and `double s = 0;` are **declaration statements** — they bring variables into existence with values; a declaration is one of the legal statement forms." },
          { label: "Line 3", text: "`while (n) { ... }` is an **iteration statement** whose body is a **block** — the braces group five statements into one." },
          { label: "Line 4", text: "`s = s + 1.0 / n;` looks like an assignment statement, but it is an **expression-statement**: the expression is the assignment `s + 1.0/n` stored into `s`, and the `;` makes it a statement. The assignment itself is an expression with value `s`." },
          { label: "Line 5", text: "`--n;` is likewise an expression-statement whose whole purpose is the side effect of decrementing `n`." },
          { label: "Line 6", text: "`return s;` is a **jump statement** — it terminates the function and hands the computed state change back to the caller." }
        ],
        result: "Two declarations, three expression-statements, one iteration controlling one block, one jump — and no construct that is both a statement and a value."
      },
      {
        title: "Working through introduction",
        problem: "Statements as building blocks. Your task: define what a C++ statement is and distinguish it from an expression.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define what a C++ statement is and distinguish it from an expression. Write down the guarantee you will rely on — for this chapter it is: A statement changes program state or controls which statement runs next; expressions produce values, and statements execute for their effects." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (int i = 0; i < n; ++i) { sum += i; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why assignment and function call are expressions rather than statements — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Assignment and function call are expressions in C++ — the semicolon is what turns a computation into a statement, which is why `a = b = c = 0;` is one legal statement. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A statement changes program state or controls which statement runs next; expressions produce values, and statements execute for their effects. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A statement changes program state or controls which statement runs next; expressions produce values, and statements execute for their effects.",
      "Assignment and function call are expressions in C++ — the semicolon is what turns a computation into a statement, which is why `a = b = c = 0;` is one legal statement.",
      "C++ keeps both structured control statements and `goto`: prefer the structured forms and reserve the low-level escape for rare, local, well-commented uses."
    ],
    quiz: [
      {
        q: "In C++, `x = y = 7;` compiles and sets both variables to 7 because:",
        options: [
          "assignment is a special statement that assigns right to left",
          "assignment is an expression whose value is the value assigned, so assignments nest",
          "the compiler rewrites it as two separate statements as an extension",
          "7 is cast to the type of y and then to the type of x"
        ],
        answer: 1,
        explanation: "There is no assignment statement; `y = 7` is an expression yielding 7, which is then the right operand of the outer assignment. One semicolon, one statement."
      },
      {
        q: "Which of these is a legal statement on its own?",
        options: [
          "`a * 3`",
          "`int a = 7;`",
          "`else x = 1;`",
          "`goto done`"
        ],
        answer: 1,
        explanation: "`a * 3` lacks a semicolon (and would be a useless-but-legal expression-statement only with one), `else` cannot appear without a preceding `if`, and `goto` needs its semicolon. The declaration-with-semicolon is a declaration statement."
      },
      {
        q: "The essential difference between a statement and an expression is that:",
        options: [
          "expressions must contain operators, statements must not",
          "a statement has no value; it acts on state and controls execution order",
          "statements are compiled, expressions are interpreted",
          "expressions may be nested but statements may not"
        ],
        answer: 1,
        explanation: "Statements produce effects and sequencing, not values — which is exactly why selection inside an expression needs `?:` rather than `if`."
      },
      {
        q: "Why does C++ retain `goto` alongside its structured statements?",
        options: [
          "because structured statements cannot implement loops",
          "because legacy code would not link without it",
          "because for a few low-level situations, such as escaping a deep loop nest, it is the clearest tool",
          "because the compiler generates better code for it"
        ],
        answer: 2,
        explanation: "The chapter keeps goto as a disciplined escape hatch for machine-level control; the structured statements cover virtually all ordinary control flow."
      }
    ]
  },

  // ---------------------------------------------------------------- 9.2
  {
    sectionId: "cpp-ch9-s2",
    readingTime: 6,
    intro: "Stroustrup summarizes the complete statement inventory in a single table, and it is worth memorizing: every control-flow construct in the language fits on one page. Two entries deserve special attention — the block, which is both a grouping device and a scope, and the empty statement, which is legal but almost always a bug when it appears by accident.",
    objectives: [
      "Reproduce the catalogue of C++ statement forms and their purposes",
      "Explain what a block does both syntactically and as a scope",
      "Recognize the empty statement and the statement forms that are not complete on their own"
    ],
    concepts: [
      {
        term: "The statement catalogue",
        kind: "definition",
        statement: "The complete set of statement forms:\n```\nstatement:\n    declaration            int a = 7;\n    expression ;           a = a * 3 + 1;\n    ;                      the empty statement\n    { statement-list }     compound statement: a block\n    if ( condition ) statement\n    if ( condition ) statement else statement\n    switch ( condition ) statement\n    case constant-expression : statement\n    default : statement\n    while ( condition ) statement\n    do statement while ( condition ) ;\n    for ( init ; condition ; step ) statement\n    for ( declaration : range ) statement      the range-for\n    break ;               leave the innermost loop or switch\n    continue ;            take the next iteration of the loop\n    return expression ;   leave the function with a value\n    goto label ;\n    label : statement\n    try { } catch ( ) { }  exception handling\n```\nEverything about C++ control flow is an instance of one of these forms.",
        detail: "Note how few forms there are. The power of the language comes from combining them with expressions and functions, not from a large statement zoo."
      },
      {
        term: "Compound statement (block)",
        kind: "definition",
        statement: "A **compound statement**, or *block*, is a possibly empty sequence of statements wrapped in braces `{ }`. A block is itself a statement, so it can appear wherever a statement is expected — and it introduces a **scope**: names declared inside are usable from their declaration to the closing brace, and nowhere else.",
        detail: "Blocks are how many statements act as one: the body of a `while` or the branch of an `if` is usually a block. They are also the workhorse of scope control — a temporary needed for three lines lives in a three-line block, not in the whole function."
      },
      {
        term: "The empty statement",
        kind: "definition",
        statement: "The lone semicolon `;` is the **empty statement** — a complete statement that does nothing. It exists so that a label can immediately precede the closing brace of a block, but in modern code it usually appears by accident.",
        detail: "The classic accident: `if (a > b); x = 1;` — the stray semicolon terminates the `if`, so `x = 1;` runs unconditionally. A useful compiler warning flags an empty statement used as a controlled statement."
      },
      {
        term: "Forms that are not statements on their own",
        kind: "notation",
        statement: "A few entries in the catalogue decorate other statements rather than standing alone: `case` and `default` labels attach to statements inside a `switch`, a `label:` precedes the statement it names, and the handlers of a `try`-block are part of the `try` construct.",
        detail: "`try`/`catch` is included in the statement catalogue as the *exception-handling statement*; it gets its full treatment in Chapter 13. What matters here is only that it is one more statement form."
      },
      {
        term: "Statement Summary: the working contract",
        kind: "definition",
        statement: "**Statement Summary.** The complete statement catalogue. You can claim this section when you can reproduce the catalogue of C++ statement forms and their purposes — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 9 (Statements); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Classifying a realistic fragment",
        problem: "Annotate each numbered construct in this fragment with its catalogue entry:\n```\n1  int total = 0;                    \n2  for (int i = 0; i < 4; ++i) {\n3      switch (i) {\n4      case 0:\n5      case 2: total += 10; break;\n6      default: total += 1;\n7      }\n8  }\n```",
        steps: [
          { label: "Line 1", text: "`int total = 0;` — declaration statement. At the end `total` is the observable state this program builds." },
          { label: "Line 2", text: "`for (int i = 0; i < 4; ++i) { ... }` — iteration statement; its initializer declares `i` (a declaration used inside a statement), and the body is the block from `{` to `}` on line 8." },
          { label: "Line 3", text: "`switch (i) { ... }` — selection statement; the braces are part of the switch syntax and also one big block scope." },
          { label: "Lines 4–5", text: "`case 0:` and `case 2:` — labels, not statements; they stack so that `i == 0` and `i == 2` share the same body: `total += 10` (an expression-statement) followed by `break;` (jump statement)." },
          { label: "Trace", text: "`i = 0` hits case 0, falls through case 2: `total = 10`. `i = 1` hits default: `total = 11`. `i = 2`: `total = 21`. `i = 3`: `total = 22`. The label stacking in lines 4–5 is deliberate fallthrough — the one sanctioned use of it." }
        ],
        result: "One declaration, one iteration over one block, one selection with stacked labels, expression-statements and jumps inside: 10 + 1 + 10 + 1 = 22 after four iterations."
      },
      {
        title: "Working through statement summary",
        problem: "The complete statement catalogue. Your task: reproduce the catalogue of C++ statement forms and their purposes.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: reproduce the catalogue of C++ statement forms and their purposes. Write down the guarantee you will rely on — for this chapter it is: The entire control flow of C++ is the catalogue: declarations, expression-statements, the empty statement, blocks, if/switch, while/do/for/range-for, break/continue/return/goto and try/catch." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (int i = 0; i < n; ++i) { sum += i; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain what a block does both syntactically and as a scope — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: A block `{ }` is simultaneously a statement — so it can nest anywhere — and a scope that limits the visibility of everything declared inside it. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: The entire control flow of C++ is the catalogue: declarations, expression-statements, the empty statement, blocks, if/switch, while/do/for/range-for, break/continue/return/goto and try/catch. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "The entire control flow of C++ is the catalogue: declarations, expression-statements, the empty statement, blocks, if/switch, while/do/for/range-for, break/continue/return/goto and try/catch.",
      "A block `{ }` is simultaneously a statement — so it can nest anywhere — and a scope that limits the visibility of everything declared inside it.",
      "The empty statement `;` is legal but in practice a bug when accidental, as in `if (a > b);` — the controlled statement is nothing, and the next line runs unconditionally."
    ],
    quiz: [
      {
        q: "In addition to grouping statements into one, a `{ }` block also:",
        options: [
          "creates a new function scope visible to the caller",
          "introduces a scope: declarations inside it are visible only until the closing brace",
          "makes the statements inside run in parallel",
          "guarantees the statements run at least once"
        ],
        answer: 1,
        explanation: "A compound statement is a statement and a scope at once — which is why temporaries can be confined to the exact lines that need them."
      },
      {
        q: "Which statement about the empty statement `;` is true?",
        options: [
          "It is a syntax error outside of switch",
          "It is a complete, legal statement that executes no operation",
          "It only appears immediately before a closing brace by mandate",
          "It is how C++ writes comments"
        ],
        answer: 1,
        explanation: "The lone semicolon is a real statement doing nothing; historically it exists so labels can precede `}`, but today it mostly appears as an accident after `if (...)` or `for (...)`."
      },
      {
        q: "Why can `x = if (a) b;` never be made legal C++?",
        options: [
          "because `if` requires an `else` branch",
          "because statements have no value, so an `if` cannot be an operand of assignment",
          "because assignment only accepts pointers",
          "because `a` cannot be converted to `bool`"
        ],
        answer: 1,
        explanation: "Statements produce effects, not values. Selection that must yield a value uses the conditional *expression* `a ? b : c` instead."
      }
    ]
  },

  // ---------------------------------------------------------------- 9.3
  {
    sectionId: "cpp-ch9-s3",
    readingTime: 5,
    intro: "In classic C, all declarations had to sit at the top of a block, far from the code that used them. C++ makes a declaration one of the statement forms, so you can declare a variable exactly where it acquires a meaningful value — and even inside the condition of an `if`, `while` or `for`. The whole section is one good habit: minimize the distance between a name's birth and its first use.",
    objectives: [
      "Explain why a declaration counts as a statement and where one may appear",
      "Apply declare-at-first-use to shorten scopes and eliminate uninitialized variables",
      "Use declarations inside conditions and understand their scope and truth test"
    ],
    concepts: [
      {
        term: "Declaration as statement",
        kind: "definition",
        statement: "A **declaration is a statement** in C++: it may appear wherever any statement can — after other statements, inside a block, in a loop body, in a branch of an `if`. Nothing forces declarations to the head of a function.",
        detail: "This is a deliberate break with the oldest C tradition (pre-1999), where a block had to be introduced by all of its declarations before the first executable statement."
      },
      {
        term: "Declare at first use",
        kind: "method",
        statement: "Declare each variable **as close as possible to its first use**, and wait to declare it until you have a meaningful value to initialize it with. A variable in scope for ten lines is easier to reason about than one in scope for two hundred.",
        detail: "Small scope plus initializer-on-declaration kills two bug families at once: reading a variable before it has a value, and accidentally reusing a stale name from an earlier part of the function."
      },
      {
        term: "Declarations in conditions",
        kind: "definition",
        statement: "The condition of an `if`, `while`, `for` or `switch` may itself be a **declaration**. The declared variable's value, converted to `bool`, becomes the condition, and the variable's scope extends over the whole statement the condition controls: `if (int* p = find(v, key)) { /* p is known non-null */ } else { /* p is null */ }`.",
        detail: "This idiom is why the book writes `if (double d = prim(true))` in its expression-parser examples: the input value and the test that it is usable arrive together, and `d` never leaks into the surrounding scope."
      },
      {
        term: "Uninitialized variables",
        kind: "insight",
        statement: "A variable of a built-in type declared without an initializer — `int x;` — holds an **indeterminate value**; reading it before assignment is undefined behavior. Variables of class types are always initialized by a constructor, so the hazard is specific to built-ins and combinations holding them.",
        detail: "The cure is the section's habit itself: by delaying the declaration until the value is known, `int x = compute();` replaces the dangerous `int x; ... x = compute();` pattern and the compiler can check the initializer for narrowing with `{ }`."
      },
      {
        term: "Declarations as Statements: the working contract",
        kind: "definition",
        statement: "**Declarations as Statements.** Declaring where you use. You can claim this section when you can explain why a declaration counts as a statement and where one may appear — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 9 (Statements); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Refactoring top-of-function declarations",
        problem: "The C-style function below declares everything up front. Rewrite it with declarations at first use and explain what improves.",
        steps: [
          { label: "Before", text: "```\nint process(vector<int>& v)\n{\n    int i, n, best;      // three declarations, three traps\n    n = v.size();\n    best = -1;\n    for (i = 0; i < n; ++i)\n        if (v[i] > best) best = v[i];\n    return best;\n}\n``` — `i`, `n` and `best` are visible everywhere; `best = -1` breaks the moment the data can legitimately contain −1." },
          { label: "After", text: "```\nint process(vector<int>& v)\n{\n    int best = -1;\n    for (int i = 0; i < v.size(); ++i)\n        if (v[i] > best) best = v[i];\n    return best;\n}\n``` — `i` is scoped to the loop; no separate `n`; `best` is born with its sentinel value." },
          { label: "Even better", text: "When the loop is over the whole container, the range-for removes the index entirely: `for (int x : v) if (x > best) best = x;` — the entire question of `i`'s scope disappears with `i` itself." },
          { label: "What improved", text: "Scope shrank from whole-function to statement; the uninitialized window shrank to zero; and the sentinel bug is now visible on one line instead of hidden among three declarations." }
        ],
        result: "Declarations become statements in their own right; nothing is in scope except while it matters, and every variable is born initialized."
      },
      {
        title: "Working through declarations as statements",
        problem: "Declaring where you use. Your task: explain why a declaration counts as a statement and where one may appear.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain why a declaration counts as a statement and where one may appear. Write down the guarantee you will rely on — for this chapter it is: A declaration is a statement form, so variables may be introduced anywhere a statement may appear — at first use, not at block top." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (int i = 0; i < n; ++i) { sum += i; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — apply declare-at-first-use to shorten scopes and eliminate uninitialized variables — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Conditions may be declarations: `if (T x = expr)` tests the value of `x` and keeps `x` in scope for exactly the statement it controls. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A declaration is a statement form, so variables may be introduced anywhere a statement may appear — at first use, not at block top. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A declaration is a statement form, so variables may be introduced anywhere a statement may appear — at first use, not at block top.",
      "Conditions may be declarations: `if (T x = expr)` tests the value of `x` and keeps `x` in scope for exactly the statement it controls.",
      "Builtin variables without initializers hold indeterminate values; declaring at the point where the value is known removes both the uninitialized window and the over-wide scope."
    ],
    quiz: [
      {
        q: "After `if (int* p = find(v, key)) { use(p); }` — where is `p` visible?",
        options: [
          "from the declaration to the end of the enclosing function",
          "only inside the `if` statement's controlled parts (both branch and else, if any), then it goes out of scope",
          "anywhere in the same source file after this line",
          "only inside the braces, not in an `else` branch"
        ],
        answer: 1,
        explanation: "A declaration in a condition scopes the variable over the whole statement the condition controls — the controlled statement and its `else` — and nowhere else."
      },
      {
        q: "What is the value of `int x;` immediately after the declaration executes?",
        options: [
          "zero, as in Java",
          "null",
          "an indeterminate value — reading it before assignment is undefined behavior",
          "the value from the previous function call"
        ],
        answer: 2,
        explanation: "Built-ins are not zero-initialized by default in C++ — only class-type variables run constructors. Declaring at first use with an initializer is the fix."
      },
      {
        q: "Which rewrite best follows the chapter's advice for a loop over an entire `vector<int> v`?",
        options: [
          "declare `int i;` at function top, loop with `for (i = 0; ...)`",
          "`for (const auto& x : v)` at the point of use",
          "declare all loop variables in a global scope",
          "use `goto` to avoid a scope entirely"
        ],
        answer: 1,
        explanation: "Declare at use, initialize on declaration, and prefer the range-for over the whole container: no index variable exists to worry about at all."
      }
    ]
  },

  // ---------------------------------------------------------------- 9.4
  {
    sectionId: "cpp-ch9-s4",
    readingTime: 7,
    intro: "Selection is where programs get their branching power, and where two classic traps live: the dangling `else`, which binds to the nearest `if` no matter how the code is indented, and fallthrough, where a `switch` case that forgets `break` silently spills into the next case. Both are cured by the same medicine — braces and explicitness — and both are exam favorites precisely because the layout can lie.",
    objectives: [
      "Write if/else chains and switches, and predict what the dangling else will bind to",
      "State the rules a switch enforces on selector types and case labels",
      "Explain fallthrough, its one sanctioned use, and why declarations in cases need blocks"
    ],
    concepts: [
      {
        term: "if statement",
        kind: "definition",
        statement: "The **if statement** executes its controlled statement exactly when its condition converts to `true`; the optional `else` clause runs otherwise. The condition may be any expression, or a declaration whose value is tested: `if (p) ...` is the idiomatic test that a pointer is non-null.",
        detail: "Chained `if`/`else if`/`else` reads as a multi-way choice; the compiler sees only nested two-way choices, with each `else` belonging to the immediately preceding `if`."
      },
      {
        term: "The dangling else",
        kind: "law",
        statement: "An `else` matches the **nearest unmatched `if`**, regardless of indentation. In the fragment `if (a) if (b) x = 1; else x = 2;` the `else` belongs to `if (b)`, so `x = 2` runs when `a` holds and `b` does not — not when `a` fails.",
        detail: "The cure is structural: wrap the inner `if` in braces so the `else` has only one possible partner. The chapter's rule is to brace all non-trivial branches, because layout is invisible to the compiler and treacherous to readers."
      },
      {
        term: "switch statement",
        kind: "definition",
        statement: "A **switch** selects among alternatives based on the value of an integral or enumeration expression. Each `case constant :` label marks where execution starts for that value, `default :` catches unmatched values, and `break` exits the switch.",
        detail: "It is essentially a computed jump into a table of labels — which is exactly why fallthrough exists and why the case labels must be constants known at compile time."
      },
      {
        term: "Fallthrough",
        kind: "insight",
        statement: "Execution does **not** stop at the end of a case; it falls through into the statements of the next case. Fallthrough is occasionally used deliberately to let several labels share code — `case 9: case 10: letter = 'A'; break;` — and such intentional falls should be marked with a comment or the `[[fallthrough]]` attribute so readers know it is not a forgotten `break`.",
        detail: "The shared-labels form (several empty labels stacked before one body) is not fallthrough at all — no code is skipped into — and it is the standard way to express *one of these values*."
      },
      {
        term: "switch restrictions",
        kind: "definition",
        statement: "The switch selector must be of **integral or enumeration type** — `int`, `char`, an enum; never `double` or `std::string`. Case labels must be **constant expressions** of a compatible type, may not duplicate, and control may not jump over the initialization of a variable — declarations that need initialization belong inside a `{ }` block within the case.",
        detail: "For string or floating selectors, an `if`/`else if` chain is the tool; the restriction exists because the switch is implemented as a jump on a compile-time-known value."
      }
    ],
    examples: [
      {
        title: "A grade classifier, traced twice",
        problem: "Convert a percentage score into a letter with a switch on the tens digit, then trace `score = 87` and `score = 59`.",
        steps: [
          { label: "The code", text: "```\nswitch (score / 10) {          // 0..10 for scores 0..100\ncase 10:\ncase 9:  letter = 'A'; break;\ncase 8:  letter = 'B'; break;\ncase 7:  letter = 'C'; break;\ncase 6:  letter = 'D'; break;\ndefault: letter = 'F'; break;\n}\n``` — `case 10:` and `case 9:` stack before one body: 100 and 90–99 both earn an 'A'." },
          { label: "Trace score = 87", text: "`87 / 10` is integer division → `8` (the fractional part is discarded, never rounded). Execution starts at `case 8:`, assigns `'B'`, and `break` exits immediately." },
          { label: "Trace score = 59", text: "`59 / 10` → `5`. No `case 5:` exists, so control enters at `default:`, assigns `'F'`, and breaks. All scores 0–59 funnel the same way — which is exactly what `default` is for." },
          { label: "Sanity check", text: "Scores 90, 93, 100 all take `case 10:` (fall through zero statements to the 'A' body) or `case 9:` directly; the stacked labels make the A-band one rule, not two." }
        ],
        result: "87 → 'B', 59 → 'F'. The stacked `case 10:`/`case 9:` labels share one body without executing any fallthrough code."
      },
      {
        title: "The dangling else, laid out to lie",
        problem: "What does this fragment print for `a = false, b = true`?\n```\nif (a)\n    if (b)\n        cout << \"both\";\nelse\n    cout << \"neither\";\n```",
        steps: [
          { label: "What the layout suggests", text: "The `else` is aligned with the outer `if`, so a reader expects: if `a` fails, print *neither*." },
          { label: "What the grammar says", text: "The `else` binds to the **nearest unmatched `if`** — the inner one. The fragment really is `if (a) { if (b) cout << \"both\"; else cout << \"neither\"; }`." },
          { label: "Trace a = false", text: "The outer condition fails, so nothing at all inside runs: no output. The *neither* branch is unreachable when `a` is false — it handles `a` true with `b` false." },
          { label: "The fix", text: "Brace the inner `if` so the `else` has only the intended partner, and the layout stops lying: `if (a) { if (b) cout << \"both\"; } else { cout << \"neither\"; }`." }
        ],
        result: "Nothing is printed for `a = false, b = true`; the else was the inner if's all along — braces make the intended grouping and the visible grouping agree."
      }
    ],
    keyTakeaways: [
      "`else` matches the nearest unmatched `if`, whatever the indentation says — brace the branches of any nested selection so structure is explicit.",
      "A switch jumps on an integral or enumeration value to constant `case` labels; execution falls through the end of a case unless a `break` (or the end of the switch) stops it.",
      "Stacking several labels before one body (`case 9: case 10:`) shares code without fallthrough; declarations inside cases must sit in a block so no initialization is bypassed."
    ],
    quiz: [
      {
        q: "In `if (a) if (b) x = 1; else x = 2;` the `else` belongs to:",
        options: [
          "the outer `if (a)` — indentation decides",
          "the inner `if (b)` — the nearest unmatched if decides",
          "neither — it is a syntax error",
          "whichever if is longer"
        ],
        answer: 1,
        explanation: "The grammar binds each else to the nearest unmatched if. Layout is invisible to the compiler; braces are how you override the default pairing."
      },
      {
        q: "Case labels of a switch must be:",
        options: [
          "runtime-computed values",
          "constant expressions of a type compatible with the selector",
          "strings or doubles only",
          "declared before the switch statement"
        ],
        answer: 1,
        explanation: "The switch is a computed jump to labels fixed at compile time, which is why labels are constant expressions and the selector is integral or enumeration."
      },
      {
        q: "After `case 9: letter = 'A';` a programmer forgot the `break;`. What happens when that case runs?",
        options: [
          "a compile error",
          "the switch exits with an error value",
          "execution continues into the statements of the next case until a break or the end",
          "the case body re-executes"
        ],
        answer: 2,
        explanation: "That is fallthrough — occasionally intentional (and then marked, e.g. with `[[fallthrough]]`), but when unintended it is a classic source of wrong values."
      },
      {
        q: "Which selector is legal for a switch?",
        options: [
          "`double d`",
          "`std::string name`",
          "`char c`",
          "`vector<int> v`"
        ],
        answer: 2,
        explanation: "`char` is an integral type. `double`, `std::string` and containers are not — for those, an if/else-if chain is the selection tool."
      }
    ]
  },

  // ---------------------------------------------------------------- 9.5
  {
    sectionId: "cpp-ch9-s5",
    readingTime: 7,
    intro: "C++ gives four loop forms, and choosing among them is a readability decision, not a capability one — anything one can do, all can. The range-for expresses the common case (do this to every element); the classic for handles counted and indexed iteration; while suits data-driven exits tested at the top; do guarantees a first pass. The chapter's guidance: pick the form whose shape tells the reader why you are looping.",
    objectives: [
      "Choose among range-for, for, while and do based on the problem's shape",
      "Write each loop form correctly, including declarations in the for-init",
      "Use break and continue for loop exits and know their limits in deep nesting"
    ],
    concepts: [
      {
        term: "range-for statement",
        kind: "definition",
        statement: "**`for (declaration : range) statement`** iterates over each element of a container or other sequence: for each element, the declared variable is initialized with it and the statement runs. It works for anything that offers `begin()` and `end()` — the standard containers, built-in arrays, `std::string`, `std::initializer_list`.",
        detail: "Use the loop variable that matches the job: `for (const auto& x : v)` reads elements without copying them, `for (auto& x : v)` lets the body modify each element through the reference."
      },
      {
        term: "for statement",
        kind: "definition",
        statement: "**`for (init; condition; step) statement`** runs `init` once, then repeats: test the condition, execute the body if it holds, execute the step, and test again. The classic counting loop `for (int i = 0; i < n; ++i)` declares `i` scoped to the loop itself.",
        detail: "The for is the natural choice when the number of iterations is known or index-driven — walking two containers in lockstep, addressing elements by position — because the counter, its test and its increment are visible on one line."
      },
      {
        term: "while statement",
        kind: "definition",
        statement: "**`while (condition) statement`** tests the condition before each pass and runs the body only while it holds — so zero iterations are possible. It is the natural form when the exit condition arises from the data, not from a counter: `while (cin >> word)` consumes input until it ends or fails.",
        detail: "The condition may be a declaration too: `while (Token t = ts.get())` loops until a token converts to false, keeping `t` scoped to the loop."
      },
      {
        term: "do statement",
        kind: "definition",
        statement: "**`do statement while (condition);`** runs the body first and tests afterwards — the body therefore executes **at least once**, even if the condition is false from the start. Use it only when that first-iteration guarantee is genuinely required; otherwise `while` is easier to reason about because the exit test sits where iteration begins.",
        detail: "The canonical uses are prompts-and-read patterns: ask the user for input, validate, and loop — the question must be asked once before any test makes sense."
      },
      {
        term: "Loop exit: break and continue",
        kind: "insight",
        statement: "**`break`** leaves the innermost enclosing loop or switch immediately; **`continue`** abandons the rest of this pass and takes the next iteration (in a `for`, after running the step). Both are single-level exits: escaping two nested loops needs either a flag tested at each level, a restructured algorithm, or (9.6) a `goto` straight out.",
        detail: "A range-for has no explicit step or index at all — which is precisely its virtue: the compiler generates the `begin()`/`end()`/advance machinery and the reader sees pure *for every element*."
      }
    ],
    examples: [
      {
        title: "The same sum by three loops",
        problem: "Compute the sum 1 + 2 + ... + 10 with a classic for, a while and a range-for, and check the answer independently.",
        steps: [
          { label: "Classic for", text: "```\nint s = 0;\nfor (int i = 1; i <= 10; ++i) s += i;\n``` — `i` is born in the loop, runs 1..10, and dies with it. The loop makes exactly 10 passes (11 tests)." },
          { label: "while", text: "```\nint s = 0, i = 1;\nwhile (i <= 10) { s += i; ++i; }\n``` — same behavior, but `i` must be declared outside and the increment is now body bookkeeping the reader must find." },
          { label: "range-for", text: "```\nint s = 0;\nfor (int i : {1,2,3,4,5,6,7,8,9,10}) s += i;\n``` — or over a `vector<int>` holding 1..10: no counter, no off-by-one, no `i <= 10` versus `i < 10` question." },
          { label: "Independent check", text: "Gauss's identity: the sum of 1..n is $n(n+1)/2 = 10 \\times 11 / 2 = 55$. All three loops must yield `s == 55` — and they do." }
        ],
        result: "All three forms compute 55; the range-for version is shortest and eliminates the entire class of counter mistakes."
      },
      {
        title: "When do is the honest choice",
        problem: "A menu must be shown at least once and repeated until the user enters 0. Sketch the loop and explain why while would be worse.",
        steps: [
          { label: "do form", text: "```\nint choice;\ndo {\n    choice = show_menu_and_read();   // happens at least once\n} while (choice != 0);\n``` — the body-then-test order matches the requirement exactly: display, read, decide." },
          { label: "while alternative", text: "With `while`, `choice` would have to be primed with a fake non-zero value before the loop so the first test passes — an extra initialization whose only purpose is to satisfy the loop, and a lie about the program state." },
          { label: "Cost of misuse", text: "Used where the body might legitimately need to run zero times (e.g. empty input), do executes the body once anyway — so the pattern is *first pass guaranteed* or nothing." }
        ],
        result: "do-while states the at-least-once contract directly; any while version has to smuggle it in through a primed variable."
      }
    ],
    keyTakeaways: [
      "Match the loop to the shape of the problem: range-for for whole containers, classic for for counted or indexed iteration, while for data-driven top-tested exits, do only when the first pass is guaranteed.",
      "The loop variable of a for-init declaration is scoped to the loop; conditions may also be declarations, keeping tested values out of the surrounding scope.",
      "`break` and `continue` are single-level exits; deep nests need a flag per level, restructuring, or — as a last resort — the goto of 9.6."
    ],
    quiz: [
      {
        q: "To read (without modifying) elements of a large `vector<string> v`, the idiomatic loop head is:",
        options: [
          "`for (string x : v)`",
          "`for (const string& x : v)`",
          "`for (string& x : v)`",
          "`for (int i = 1; i <= v.size(); ++i)`"
        ],
        answer: 1,
        explanation: "`const string&` binds each element without copying it and promises not to modify it — value copies a string per element and a non-const reference needlessly claims write access (and blocks binding temporaries)."
      },
      {
        q: "A do-statement executes its body:",
        options: [
          "zero or more times, testing the condition first",
          "exactly once, no matter what",
          "at least once, because the test comes after the body",
          "until a `break` appears"
        ],
        answer: 2,
        explanation: "do-while tests after the body: the first pass always runs even if the condition is false initially — the one property distinguishing it from while."
      },
      {
        q: "`continue` inside a `for` loop causes:",
        options: [
          "the loop to terminate entirely",
          "the next iteration to begin — after running the loop's step expression",
          "the condition to be skipped on the next test",
          "a jump to the enclosing function"
        ],
        answer: 1,
        explanation: "continue abandons the rest of this pass only; the for's step (e.g. `++i`) still runs before the next condition test — unlike in a while, where continue jumps straight to the test."
      },
      {
        q: "Which loop form most directly expresses *keep reading input while it keeps arriving*?",
        options: [
          "a range-for over the stream",
          "a classic for with a counter",
          "`while (cin >> word)`",
          "a do-while"
        ],
        answer: 2,
        explanation: "The exit condition comes from the data, not a counter, and must be tested before the first pass — the while with a stream condition is the textbook idiom."
      }
    ]
  },

  // ---------------------------------------------------------------- 9.6
  {
    sectionId: "cpp-ch9-s6",
    readingTime: 4,
    intro: "goto is the assembly-language control flow that survived into C, and C++ keeps it for one reason: some low-level control problems are genuinely clearer with it. The discipline is strict — jump only to a nearby label in the same function, never into a block, and only for the two sanctioned patterns: escaping a deeply nested loop, and jumping backwards to retry an operation.",
    objectives: [
      "State what goto does and the scope rules of labels",
      "Explain the initialization rule that limits where goto may jump",
      "Identify the two disciplined uses and the structured alternatives"
    ],
    concepts: [
      {
        term: "goto and labels",
        kind: "definition",
        statement: "**`goto label;`** transfers control unconditionally to the statement marked **`label:`**. Labels have function scope: a `goto` can only reach a label in the **same function**, forwards or backwards.",
        detail: "The label syntax is `identifier : statement` — which is exactly why the empty statement earns its keep: before a block's closing brace, a label needs *something* to attach to, and `;` is that something."
      },
      {
        term: "The initialization rule",
        kind: "law",
        statement: "A `goto` may **not jump into a block past the initialization of a variable** — the compiler rejects it, because the variable would come into existence without its initializer having run. Jumping *out* of blocks, freely ending their scopes, is always allowed.",
        detail: "This is the language defending its own invariant: no object exists whose initialization was bypassed. The same rule protects `switch` jumps — which is why a declaration with an initializer inside a case must be wrapped in its own `{ }` block."
      },
      {
        term: "Disciplined use",
        kind: "insight",
        statement: "The sanctioned patterns are narrow: **(1)** a single exit out of a deeply nested loop nest, jumping forward to a label just past the nest; **(2)** a backward jump that *retries* an operation until it succeeds. Anything else — long-distance jumps, jumps between logically unrelated code — is better expressed by restructuring with loops, flags, or functions.",
        detail: "Note the asymmetry: the sanctioned gotos are local, visible on one screen, and jump to a label that names the intent (`done:`, `retry:`). A goto you have to scroll to understand is already a bug."
      },
      {
        term: "goto Statements: the working contract",
        kind: "definition",
        statement: "**goto Statements.** goto and its disciplined use. You can claim this section when you can state what goto does and the scope rules of labels — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 9 (Statements); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "goto Statements: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, explain the initialization rule that limits where goto may jump. Then, identify the two disciplined uses and the structured alternatives. Finally, test the outcome against the section promise: goto jumps to a label in the same function, forward or backward; labels have function scope only.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Escaping a nested search",
        problem: "Find the position of `key` in a 2-D array `a[rows][cols]` and stop the moment it is found — with goto and with a flag.",
        steps: [
          { label: "With goto", text: "```\nfor (int i = 0; i < rows; ++i)\n    for (int j = 0; j < cols; ++j)\n        if (a[i][j] == key) { ri = i; rj = j; goto found; }\n// not found: ri == -1 here\nfound:\n``` — one jump exits both loops at once; the label says what happened." },
          { label: "With a flag", text: "```\nbool found = false;\nfor (int i = 0; i < rows && !found; ++i)\n    for (int j = 0; j < cols && !found; ++j)\n        if (a[i][j] == key) { ri = i; rj = j; found = true; }\n``` — two extra condition tests per pass, and the reader must verify both loop conditions to see the exit." },
          { label: "The structured winner", text: "Wrap the search in a function and `return` the result — the multi-level exit becomes an ordinary return, with no label, no flag and no extra tests: `return make_pair(i, j);` on the spot." },
          { label: "Judgment", text: "Inside one function, goto is arguably clearest for this shape; once the nest grows or the code is reusable, the function-with-return version wins — which is why advice says *a function is the best structured break*." }
        ],
        result: "goto exits the nest in one jump; the flag version is correct but noisier; the extract-a-function version removes the problem the goto was solving."
      },
      {
        title: "Working through goto statements",
        problem: "goto and its disciplined use. Your task: state what goto does and the scope rules of labels.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: state what goto does and the scope rules of labels. Write down the guarantee you will rely on — for this chapter it is: goto jumps to a label in the same function, forward or backward; labels have function scope only." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (int i = 0; i < n; ++i) { sum += i; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain the initialization rule that limits where goto may jump — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: The compiler forbids jumping into a block past an initialization — objects must never exist uninitialized — but jumping out of scopes is unrestricted. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: goto jumps to a label in the same function, forward or backward; labels have function scope only. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "goto jumps to a label in the same function, forward or backward; labels have function scope only.",
      "The compiler forbids jumping into a block past an initialization — objects must never exist uninitialized — but jumping out of scopes is unrestricted.",
      "The two disciplined uses are the forward multi-level loop exit and the backward retry; both keep label and jump within one screen, and both have structured alternatives worth considering first."
    ],
    quiz: [
      {
        q: "Which can a `goto` NOT do?",
        options: [
          "jump out of nested loops to a later label",
          "jump backwards to retry an operation",
          "jump into another function",
          "jump to a label later in the same function"
        ],
        answer: 2,
        explanation: "Labels have function scope — goto cannot cross function boundaries; that is what function calls and returns are for."
      },
      {
        q: "Why does the compiler reject `goto` into a block past `int x = compute();`?",
        options: [
          "goto may only target empty statements",
          "the variable would exist without its initialization having run",
          "labels cannot appear inside blocks",
          "compute() might throw"
        ],
        answer: 1,
        explanation: "The initialization rule: control may never bypass an initializer, so that every object in scope has been constructed — the same invariant that protects switch cases."
      },
      {
        q: "The chapter's two sanctioned goto patterns are:",
        options: [
          "recursion and iteration",
          "escaping a nested loop nest, and a backward retry jump",
          "error handling and memory management",
          "jumping between classes"
        ],
        answer: 1,
        explanation: "Local, intent-named, single-screen jumps for multi-level exit and retry — everything else is better restructured with loops, flags or functions."
      }
    ]
  },

  // ---------------------------------------------------------------- 9.7
  {
    sectionId: "cpp-ch9-s7",
    readingTime: 4,
    intro: "Comments and layout are the parts of a program that the compiler throws away and the humans live on. Stroustrup's treatment is short and firm: comments should state intent and rationale, not echo the code; an inaccurate comment is worse than none; and indentation must mirror control structure so that the reader's eye can verify what the compiler enforces invisibly.",
    objectives: [
      "Use the two comment forms and know their limits (no nesting for block comments)",
      "Write comments that state intent, and keep them accurate as code changes",
      "Apply a layout discipline that makes control structure visible"
    ],
    concepts: [
      {
        term: "Comment forms",
        kind: "definition",
        statement: "A `//` comment runs to the end of the line. A `/* ... */` comment may span several lines — but **does not nest**: the first `*/` ends it, so commenting out a block that already contains a block comment breaks.",
        detail: "To disable code containing `/* */` comments, use `#if 0 ... #endif` (conditional compilation, Chapter 12) rather than wrapping it in another block comment that cannot nest."
      },
      {
        term: "Comment intent, not mechanics",
        kind: "method",
        statement: "A good comment records what the code **cannot express about itself**: the purpose of a function, class or data structure, the units of a value, the reason an odd-looking expression is correct, and the invariant a loop maintains. `i = i + 1; // add 1 to i` is noise; `// one more failed login: lock the account after 3` is information.",
        detail: "The test to apply: would a competent reader of C++ who cannot see the surrounding design still misread this code without the comment? If not, delete the comment."
      },
      {
        term: "Comments must stay accurate",
        kind: "insight",
        statement: "**A comment that disagrees with the code is worse than no comment**: readers trust prose more than they trust parsing, so a stale comment actively misleads. Whenever code changes, its comments change in the same edit.",
        detail: "This is the practical reason for commenting *why* rather than *what*: the *what* is duplicated by the code and rots first when the code is tuned; the *why* survives."
      },
      {
        term: "Indentation and layout",
        kind: "law",
        statement: "Layout is for humans: indent one level per nested block so the visible structure mirrors the control structure, brace consistently, and let a formatting tool apply the rules mechanically. The compiler ignores every space — the debugger at 3 a.m. does not.",
        detail: "The classic demonstration is the misleadingly indented dangling-else fragment of 9.4: it compiles, runs, and lies. Consistent layout is the cheapest code review you will ever get."
      },
      {
        term: "Comments and Indentation: the working contract",
        kind: "definition",
        statement: "**Comments and Indentation.** Code that people can read. You can claim this section when you can use the two comment forms and know their limits (no nesting for block comments) — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 9 (Statements); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Rewriting a commented function",
        problem: "This function compiles and works. Improve its comments and layout without touching its behavior.",
        steps: [
          { label: "Before", text: "```\n// this function takes n and returns the factorial\nint f2(int n) {\n    int r = 1; // r is the result\n    int i; // loop variable\n    for (i = 1; i <= n; i++) { // loop from 1 to n\n        r = r * i; } // multiply r by i\n    return r; } // return r\n``` — every comment restates syntax the reader already knows." },
          { label: "What the code cannot say", text: "The missing information: what *for*? Is overflow a risk? Why multiply and not `std::factorial`-style accumulation? The design intent is absent precisely where the noise is loudest." },
          { label: "After", text: "```\n// factorial(n): n! for n in [0, 12]; n beyond 12 overflows int\nint factorial(int n)\n{\n    int r = 1;\n    for (int i = 2; i <= n; ++i) r *= i;   // r = (i-1)! each pass\n    return r;\n}\n``` — scope shrinks, `i` is born in the loop, and the comments now carry contract and invariant." },
          { label: "Verification", text: "Behavior is identical for every input: the loop `1..n` versus `2..n` both leave `r == n!` because multiplying by 1 is the identity. The overflow bound is real: $12! = 479{,}001{,}600$ fits a 32-bit int, $13! = 6{,}227{,}020{,}800$ does not." }
        ],
        result: "Fewer comments, more information: the contract (valid range, overflow bound) and the loop invariant replace six lines of syntax-echo."
      },
      {
        title: "Working through comments and indentation",
        problem: "Code that people can read. Your task: use the two comment forms and know their limits (no nesting for block comments).",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use the two comment forms and know their limits (no nesting for block comments). Write down the guarantee you will rely on — for this chapter it is: `//` runs to end of line; `/* */` spans lines but does not nest — use `#if 0` to disable code containing block comments." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `for (int i = 0; i < n; ++i) { sum += i; }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — write comments that state intent, and keep them accurate as code changes — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Comment intent, units, invariants and rationale — the things code cannot express; a comment that restates the code is noise that rots into lies. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `//` runs to end of line; `/* */` spans lines but does not nest — use `#if 0` to disable code containing block comments. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`//` runs to end of line; `/* */` spans lines but does not nest — use `#if 0` to disable code containing block comments.",
      "Comment intent, units, invariants and rationale — the things code cannot express; a comment that restates the code is noise that rots into lies.",
      "Indent so the visible structure matches the control structure and let tools enforce it, because layout is the reader's map of the program."
    ],
    quiz: [
      {
        q: "What happens when a `/* ... */` comment contains another `/* ... */` inside it?",
        options: [
          "the compiler reports a nesting error",
          "the inner `/*` is ordinary text; the comment ends at the *first* `*/`",
          "the comments merge into one",
          "the outer comment extends to the next matching pair"
        ],
        answer: 1,
        explanation: "Block comments do not nest — the first `*/` closes the comment, so the code after it is live again. This is why #if 0 is the safe way to disable code."
      },
      {
        q: "Which comment is the best by the chapter's standard?",
        options: [
          "`++i; // increment i`",
          "`// tax is stored in basis points (1/100 of a percent)`",
          "`// a for loop follows`",
          "`// this line was changed on Tuesday`"
        ],
        answer: 1,
        explanation: "It states the units of the data — a fact about the design that the code cannot express and that a reader genuinely needs."
      },
      {
        q: "A stale comment that contradicts the current code is:",
        options: [
          "harmless, since the code is what executes",
          "worse than no comment, because readers trust prose and get misled",
          "auto-corrected by the compiler",
          "required documentation practice"
        ],
        answer: 1,
        explanation: "The book's rule: keep comments accurate; a wrong comment actively misleads during maintenance, which is exactly when comments get read."
      }
    ]
  },

  // ---------------------------------------------------------------- 9.8
  {
    sectionId: "cpp-ch9-s8",
    readingTime: 4,
    intro: "The chapter closes with its advice list — the distilled rules the preceding sections argued for. They read as common sense only after the arguments: declare late and initialized, match the statement form to the problem's shape, keep selection and loops visible with braces and honest layout, and treat goto as a local, rare, named-intent tool.",
    objectives: [
      "Apply the chapter's rules on declaration placement and initialization",
      "Choose the statement form that makes each control-flow shape most readable",
      "Recognize the discipline that keeps braces, layout and goto honest"
    ],
    concepts: [
      {
        term: "Keep scopes small",
        kind: "method",
        statement: "**Don't declare a variable until you have a value to initialize it with** — and then declare it there, in the smallest scope that covers its use. This single habit eliminates uninitialized reads, shrinks the set of live names a reader must track, and lets the optimizer see lifetimes.",
        detail: "The corollaries: declare loop variables in the for-init, use declarations in conditions when the value is immediately tested, and confine scratch work to explicit blocks."
      },
      {
        term: "Match the statement to the shape",
        kind: "method",
        statement: "Choose the construct that says *why* you are looping or branching: **range-for** for whole containers, **for** for counted or indexed iteration, **while** for top-tested data-driven exits, **do** only when the first pass is guaranteed, **switch** for selection among enumerated constants, and **if/else** chains otherwise.",
        detail: "The reader should be able to name the loop's purpose from its head alone — if the head and the purpose disagree, you picked the wrong form."
      },
      {
        term: "Prefer structured exits",
        kind: "method",
        statement: "Exit loops with their own conditions first; use `break`/`continue` sparingly and locally; keep `goto` for the two sanctioned patterns (nested escape, retry) — never into blocks, never far. When a nest needs a multi-level exit, consider extracting a function so an ordinary `return` does the job.",
        detail: "The advice is about predictability: every jump statement is a point where the reader loses the thread, so each one must buy its keep."
      },
      {
        term: "Write for the reader",
        kind: "insight",
        statement: "Code is read far more often than it is written — by reviewers, debuggers and future you. Braces on all non-trivial branches, indentation that mirrors structure, comments that state intent, and names that carry meaning are all parts of one policy: make the visible program tell the truth about the actual one.",
        detail: "This is also why the chapter's examples brace even single-statement branches: the cost is two characters now, and the benefit is that no `else` can ever dangle ambiguously."
      },
      {
        term: "Shipping rule for statements",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Declare variables as late as possible and always with an initializer; keep loop counters inside the for-init and tested values inside conditions.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Auditing a fragment against the advice",
        problem: "List every rule from this chapter that the following fragment violates, and fix it.",
        steps: [
          { label: "The fragment", text: "```\nint i, max, t;      // (a)\nmax = -1;\ncin >> t;           // (b)\nfor (i = 0; i < t; i++)   // (c)\n    if (a[i] > max)   // (d)\n        max = a[i];\nif (max > 0)\n;\nelse\n    cout << \"none\";    // (e)\n```" },
          { label: "(a) Three top-of-block declarations", text: "All three live for the whole function; `i` is only the loop counter and `t` only the count. Advice: declare at first use with initializers — `int t = 0; cin >> t;` and the counter belongs to the for-init." },
          { label: "(b) and (c)", text: "`max = -1` is a sentinel that breaks if data can hold −1 (a precondition the code cannot check); the counting loop over a whole container is a range-for in disguise: `for (int x : a) if (x > max) max = x;` with `max` initialized to the first element or the type's lowest value." },
          { label: "(d) and (e)", text: "An unbraced multi-line branch, and a stray `;` after the `if` — the classic empty-statement accident: as written, the `else` pairs with `if (max > 0)` but the semicolon already ended it, making the fragment ill-formed; bracing both branches removes the entire class of error." }
        ],
        result: "The repaired version declares three variables at use with initializers, uses a range-for, braces every branch, and deletes the sentinel in favor of an explicit first-element comparison."
      },
      {
        title: "Reviewing statements code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the chapter's rules on declaration placement and initialization.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Declare variables as late as possible and always with an initializer; keep loop counters inside the for-init and tested values inside conditions." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `for (int i = 0; i < n; ++i) { sum += i; }`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: choose the statement form that makes each control-flow shape most readable. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Pick the statement whose head states the purpose: range-for for containers, for for counting, while for data-driven exits, do only for guaranteed first pass, switch for enumerated cases." },
        ],
        result: "The review ends with findings tied to reasons: Declare variables as late as possible and always with an initializer; keep loop counters inside the for-init and tested values inside conditions. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Declare variables as late as possible and always with an initializer; keep loop counters inside the for-init and tested values inside conditions.",
      "Pick the statement whose head states the purpose: range-for for containers, for for counting, while for data-driven exits, do only for guaranteed first pass, switch for enumerated cases.",
      "Brace non-trivial branches, let layout mirror structure, and confine goto to local, intent-named nested-escape and retry jumps — or better, to nothing."
    ],
    quiz: [
      {
        q: "Which of these is NOT part of the chapter's advice?",
        options: [
          "declare a variable when you have a value to initialize it with",
          "prefer range-for when iterating over a whole container",
          "declare all variables at the top of the function for easy lookup",
          "keep comments accurate and meaningful"
        ],
        answer: 2,
        explanation: "The chapter argues the opposite: declarations at the top maximize scope and the uninitialized window — declare at first use, initialized."
      },
      {
        q: "For looping over every element of a `map` while modifying each value, the advised form is:",
        options: [
          "`for (auto& kv : m)`",
          "`for (auto kv : m)`",
          "a do-while over the map's size",
          "`goto` between elements"
        ],
        answer: 0,
        explanation: "Range-for with a non-const reference: the compiler supplies iteration, the reference avoids copying each element, and `auto&` grants the write access the task needs."
      },
      {
        q: "The advice on `do` statements is to:",
        options: [
          "prefer them over while because they are faster",
          "use them whenever a loop is needed",
          "avoid them unless the body genuinely must run before the first test",
          "always pair them with goto"
        ],
        answer: 2,
        explanation: "A while with its test on top is easier to reason about; do is for the special case where the first pass is required by the problem's shape."
      }
    ]
  }
]
