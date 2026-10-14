import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 10: Expressions (Sections 10.1 – 10.6)
// The desk calculator, operator precedence, constexpr computation, and the
// implicit conversion rules.
// ============================================================================

export const cppCh10Content: SectionContent[] = [
  // ---------------------------------------------------------------- 10.1
  {
    sectionId: "cpp-ch10-s1",
    readingTime: 5,
    intro: "If statements are what a program does, expressions are what it thinks: every value the program computes is computed by an expression. This chapter is organized around three questions — how expressions are built from operators and operands, how the grammar alone decides which operator binds to which operand (precedence), and how the compiler turns mixes of types into one common type (implicit conversions). First the vocabulary: expressions, operands, lvalues, and the crucial difference between grouping and evaluation order.",
    objectives: [
      "Define expression, operator and operand, and classify operators by arity",
      "Distinguish grouping (precedence/associativity) from order of evaluation",
      "Distinguish lvalues from rvalues and say what the distinction is for"
    ],
    concepts: [
      {
        term: "Expression",
        kind: "definition",
        statement: "An **expression** is a sequence of operators and operands that specifies a computation. An expression may **produce a value** (`a * b + 1`), **produce side effects** (`++i`), or both (`x = y + 1`). It can also produce nothing useful at all — a stray computation with its result discarded is still an expression.",
        detail: "In C++ the statement `;` and the expression are separable layers: an expression becomes an expression-statement when terminated by a semicolon (Chapter 9). Everything else in this chapter is about the expression layer itself."
      },
      {
        term: "Operator and operand",
        kind: "definition",
        statement: "An **operator** is a token (`+`, `<<`, `[]`, `?:`) that operates on its **operands**. Operators are classified by arity: most are **binary** (`a + b`), a large family is **unary** (`-x`, `*p`, `!ok`), and C++ has exactly one **ternary** operator — the conditional expression `cond ? a : b`. Some symbols do double duty: unary `*` (dereference) is unrelated to binary `*` (multiply).",
        detail: "Operators are also classified by what they require of their operands and what they yield: arithmetic operators want numbers, `&&`/`||` want conditions and yield `bool`, `<<` shifts bits or writes streams depending on its left operand's type."
      },
      {
        term: "Grouping vs order of evaluation",
        kind: "law",
        statement: "**Precedence and associativity determine grouping only** — which operators bind to which operands. They say nothing about the order in which the subexpressions execute. In `f() + g() * h()` the grouping is `f() + (g() * h())`, but `f` may well run before `g` and `h`. Only `&&`, `||`, `?:` and `,` sequence their parts: `c && f()` guarantees `c` is tested first, and `f()` runs at all only if `c` is true.",
        detail: "The consequence is a rule of survival: an expression that both reads and writes the same object (`v[i] = i++;`, `f(i, i++)`) relies on unspecified or undefined order and must be split into separate statements."
      },
      {
        term: "lvalue and rvalue",
        kind: "definition",
        statement: "An **lvalue** is an expression that refers to an object — a name (`x`), a dereference (`*p`), a subscript (`v[i]`), a string literal — something that (at least in principle) denotes storage. An **rvalue** is a value: `7`, `x + 1`, a function call returning by value. The heritage of the names is *left value* — what can stand on the left of an assignment.",
        detail: "The distinction drives the language: assignment needs a modifiable lvalue on the left; `&` (address-of) needs an lvalue; and the rvalue/lvalue split is exactly what move semantics (Chapter 11 and 12) exploits to steal from temporaries."
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Expressions evaluated. You can claim this section when you can define expression, operator and operand, and classify operators by arity — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 10 (Expressions); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Dissecting one expression",
        problem: "For `x = y + 2 * z`, identify every operator and operand, state the grouping, and point out what precedence does NOT promise.",
        steps: [
          { label: "Operators", text: "Three binary operators: `=` (assignment), `+` (addition), `*` (multiplication). Operands: `x`, `y`, `2`, `z` are all expressions themselves — a variable name is the simplest expression." },
          { label: "Grouping", text: "`*` binds tighter than `+`, which binds tighter than `=`, so the parse is `x = (y + (2 * z))` — precedence has already decided this; no parentheses are needed for the compiler to get it right." },
          { label: "What precedence does not promise", text: "Nothing about when `y` and `z` are read relative to each other. Here both are plain reads so it cannot matter — but if `z` were `f()` and `y` were `g()`, the order of the two calls would be unspecified." },
          { label: "Value and effect", text: "The expression produces a value — the sum that was assigned — and has a side effect: `x` now holds that value. The statement `x = y + 2 * z;` keeps the effect and discards the value." }
        ],
        result: "Grouping `x = (y + (2*z))` is fixed by the grammar; evaluation order of the operand reads is not — harmless here, a bug the moment side effects appear."
      },
      {
        title: "Working through introduction",
        problem: "Expressions evaluated. Your task: define expression, operator and operand, and classify operators by arity.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: define expression, operator and operand, and classify operators by arity. Write down the guarantee you will rely on — for this chapter it is: An expression specifies a computation: it may yield a value, have side effects, or both; operators are unary, binary, or (the conditional) ternary." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `int q = x / y; int rem = x % y;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — distinguish grouping (precedence/associativity) from order of evaluation — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Precedence and associativity fix grouping, never evaluation order — only `&&`, `||`, `?:` and `,` sequence their operands. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: An expression specifies a computation: it may yield a value, have side effects, or both; operators are unary, binary, or (the conditional) ternary. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "An expression specifies a computation: it may yield a value, have side effects, or both; operators are unary, binary, or (the conditional) ternary.",
      "Precedence and associativity fix grouping, never evaluation order — only `&&`, `||`, `?:` and `,` sequence their operands.",
      "An lvalue refers to an object; an rvalue is a value — assignment needs a modifiable lvalue on the left, and the distinction is the foundation of move semantics."
    ],
    quiz: [
      {
        q: "In `f() + g() * h()`, what does precedence guarantee?",
        options: [
          "that `f()` is evaluated first",
          "that `g()` is evaluated before `h()`",
          "only the grouping `f() + (g() * h())` — nothing about execution order",
          "that the result is an lvalue"
        ],
        answer: 2,
        explanation: "Precedence and associativity are parsing rules; the compiler may call f, g and h in any order because only the grouping — and not the sequencing — is fixed."
      },
      {
        q: "Which of these expressions is an lvalue?",
        options: [
          "`42`",
          "`*p`",
          "`x + 1`",
          "`sqrt(2.0)`"
        ],
        answer: 1,
        explanation: "`*p` refers to the object p points at — storage you can assign through. A literal, an arithmetic result and a call returning by value are rvalues."
      },
      {
        q: "The only ternary operator in C++ is:",
        options: [
          "the comma",
          "the conditional expression `?:`",
          "`<<`",
          "the function call"
        ],
        answer: 1,
        explanation: "`cond ? a : b` is the sole operator with three operands — one reason it earns special sequencing rules: exactly one of `a` and `b` is evaluated."
      },
      {
        q: "Why is `v[i] = i++;` flagged as a bug?",
        options: [
          "`++` has lower precedence than `=`",
          "it mixes an lvalue with an rvalue",
          "the order of evaluating `v[i]`'s index and the new `i` is unspecified — which `i` is used is not defined",
          "assignment cannot appear in an expression"
        ],
        answer: 2,
        explanation: "The write to `i` and the read of `i` for the subscript are unsequenced — grouping cannot help because both uses are of the same object. Split into `++i; v[i] = i;` — or better, one clear statement."
      }
    ]
  },

  // ---------------------------------------------------------------- 10.2
  {
    sectionId: "cpp-ch10-s2",
    readingTime: 8,
    intro: "To make expression evaluation concrete, Stroustrup builds a desk calculator: a program that reads arithmetic like `2+3*(4-1)` with variables and computes it. The design lesson is the grammar: precedence and associativity are not a table of arbitrary rules but the visible shape of a little recursive definition — expressions are made of terms, terms of primaries, and the parsing functions mirror the grammar rule by rule. One figure of a parse tree is worth a thousand words about precedence.",
    objectives: [
      "Read the desk calculator grammar and explain why deeper nesting means tighter binding",
      "Trace recursive-descent parsing of an input such as `2+3*4`",
      "Explain the token stream's get/putback lookahead and how the loop in expr() produces left associativity"
    ],
    concepts: [
      {
        term: "The expression grammar",
        kind: "definition",
        statement: "The calculator's grammar, in the book's notation:\n```\nprogram:\n    end                        // end is end-of-input\nexpr:\n    term\n    expr + term                // addition\n    expr - term                // subtraction\nterm:\n    prim\n    term * prim                // multiplication\n    term / prim                // division\nprim:\n    number                     // floating-point numbers\n    name                       // names are looked up\n    name = expr                // assignment\n    - prim\n    ( expr )\n```\nAn expression is a sum of terms; a term is a product of primaries; a primary is a number, a variable, an assignment, a negation, or a parenthesized expression.",
        detail: "The grammar *is* the precedence table: `*` and `/` sit one level deeper than `+` and `-`, so they bind their operands closer. Parentheses work by making a whole expression a primary — nothing deeper than a primary can be, so parenthesizing is the escape to the top."
      },
      {
        term: "Recursive descent",
        kind: "method",
        statement: "**Recursive descent** gives each grammar rule a function: `expr()` parses an expr by first calling `term()` (which calls `prim()`, which reads a token), then looping while it sees `+` or `-`, folding each new term into the running result. The call tree of the parser mirrors the parse tree of the input.",
        detail: "The book's loop form handles the left-recursive rule `expr: expr + term` without infinite regress: instead of calling `expr()` on the rest, `expr()` keeps a `left` accumulator and loops — which is also what makes `-` left-associative."
      },
      {
        term: "The token stream",
        kind: "definition",
        statement: "The parser reads not characters but **tokens** — numbers, names, operators — through a `Token_stream` with `get()` and `putback(t)`. The one-token buffer that `putback` provides is exactly the one-token lookahead the parser needs: `prim()` reads a token to decide what kind of primary it faces, and hands back anything (like a `+`) that belongs to the caller.",
        detail: "Separating lexing (characters to tokens) from parsing (tokens to structure) is what keeps each function small: `expr()` never sees digits, only whole numbers."
      },
      {
        term: "Left associativity from a loop",
        kind: "insight",
        statement: "Because `expr()` folds terms into `left` as it reads left-to-right, `1-2-3` evaluates as `(1-2)-3 = -4` — not `1-(2-3) = 2`. The loop shape of the parser hard-codes left associativity for `-`, `/` and every other non-associative-seeming operator.",
        detail: "The exception proves the rule: assignment in `prim` (`name = expr`) parses its right side by calling `expr()` recursively, so `x = y = 2` groups `x = (y = 2)` — right-associative, because the recursion is on the right."
      },
      {
        term: "Variables in the calculator",
        kind: "notation",
        statement: "A `name` is looked up in a `map<string,double> table`; `name = expr` evaluates the expression and stores it in the table — which is how the calculator remembers variables across inputs, e.g. `x = 2+3*4` followed later by `x/2 - 1`.",
        detail: "The assignment rule lives in `prim` because a parenthesized or negated expression may appear on the right — the full expr grammar, recursively."
      }
    ],
    figures: [
      {
        caption: "The parse tree of `2 + 3 * 4` in the desk-calculator grammar. Each nonterminal (expr, term, prim) becomes one function call in the recursive-descent parser. Because the `*` rule lives one level *deeper* in the grammar than `+`, the multiplication `3 * 4` forms a single term that is then added to `2`: value $2 + (3 \\times 4) = 14$.",
        svg: '<svg viewBox="0 0 760 440" width="100%" role="img" aria-label="Parse tree of 2 plus 3 times 4 under the desk calculator grammar"><rect x="330" y="16" width="100" height="30" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor"/><text x="380" y="36" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" fill="currentColor">expr</text><line x1="352" y1="46" x2="200" y2="98" stroke="currentColor" stroke-width="1.3"/><line x1="380" y1="46" x2="380" y2="96" stroke="currentColor" stroke-width="1.3"/><line x1="408" y1="46" x2="558" y2="98" stroke="currentColor" stroke-width="1.3"/><rect x="140" y="100" width="100" height="30" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor"/><text x="190" y="120" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" fill="currentColor">expr</text><ellipse cx="380" cy="115" rx="18" ry="15" fill="currentColor" fill-opacity="0.16" stroke="currentColor"/><text x="380" y="120" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" font-weight="bold" fill="currentColor">+</text><rect x="515" y="100" width="100" height="30" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor"/><text x="565" y="120" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" fill="currentColor">term</text><line x1="170" y1="130" x2="118" y2="183" stroke="currentColor" stroke-width="1.3"/><rect x="60" y="185" width="100" height="30" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor"/><text x="110" y="205" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" fill="currentColor">term</text><line x1="535" y1="130" x2="485" y2="183" stroke="currentColor" stroke-width="1.3"/><line x1="565" y1="130" x2="565" y2="183" stroke="currentColor" stroke-width="1.3"/><line x1="595" y1="130" x2="655" y2="183" stroke="currentColor" stroke-width="1.3"/><rect x="420" y="185" width="100" height="30" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor"/><text x="470" y="205" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" fill="currentColor">term</text><ellipse cx="565" cy="200" rx="18" ry="15" fill="currentColor" fill-opacity="0.16" stroke="currentColor"/><text x="565" y="205" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" font-weight="bold" fill="currentColor">*</text><rect x="625" y="185" width="100" height="30" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor"/><text x="675" y="205" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" fill="currentColor">prim</text><line x1="110" y1="215" x2="110" y2="268" stroke="currentColor" stroke-width="1.3"/><rect x="60" y="270" width="100" height="30" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor"/><text x="110" y="290" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" fill="currentColor">prim</text><line x1="470" y1="215" x2="470" y2="268" stroke="currentColor" stroke-width="1.3"/><rect x="420" y="270" width="100" height="30" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor"/><text x="470" y="290" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" fill="currentColor">prim</text><line x1="675" y1="215" x2="675" y2="258" stroke="currentColor" stroke-width="1.3"/><ellipse cx="675" cy="278" rx="18" ry="15" fill="currentColor" fill-opacity="0.16" stroke="currentColor"/><text x="675" y="283" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" font-weight="bold" fill="currentColor">4</text><line x1="110" y1="300" x2="110" y2="355" stroke="currentColor" stroke-width="1.3"/><ellipse cx="110" cy="375" rx="18" ry="15" fill="currentColor" fill-opacity="0.16" stroke="currentColor"/><text x="110" y="380" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" font-weight="bold" fill="currentColor">2</text><line x1="470" y1="300" x2="470" y2="355" stroke="currentColor" stroke-width="1.3"/><ellipse cx="470" cy="375" rx="18" ry="15" fill="currentColor" fill-opacity="0.16" stroke="currentColor"/><text x="470" y="380" text-anchor="middle" font-family="ui-monospace, monospace" font-size="13" font-weight="bold" fill="currentColor">3</text><rect x="405" y="95" width="340" height="315" rx="10" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="5 4"/><text x="575" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" font-style="italic" fill="currentColor" opacity="0.85">the multiplication subtree: one term</text><text x="380" y="165" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.85">expr = expr + term</text><text x="60" y="418" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.85">one function per rule: expr(), term(), prim()</text><text x="60" y="436" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.85">value: 2 + (3*4) = 14 — * nests deeper, so it binds tighter</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Parsing and evaluating 2+3*4",
        problem: "Trace the calculator on the input `2+3*4` — which functions run, in what order, and what value comes back?",
        steps: [
          { label: "expr() calls term()", text: "`expr()` starts by calling `term()` for its first term. `term()` calls `prim()`, which does `ts.get()` and reads the number token `2`, returning the value $2.0$." },
          { label: "term() looks ahead", text: "`term()` calls `ts.get()` to see whether a `*` or `/` follows. It sees `+` — not its operator — so it does `putback(+)` and returns $2$." },
          { label: "expr() sees the +", text: "`expr()` receives `left = 2`, gets the `+`, and calls `term()` again for the right side." },
          { label: "The right-hand term", text: "The new `term()` calls `prim()` → $3$; then gets `*` — its operator — so it calls `prim()` again → $4$, and folds: $3 \\times 4 = 12$. The next token (end) is not `*`, so `term()` returns $12$." },
          { label: "expr() finishes", text: "`expr()` folds `left = 2 + 12 = 14`, reads the end token, exits its loop, and $14$ is the value of the whole expression." }
        ],
        result: "2+3*4 = 14 — the multiplication happened inside `term()`, before `expr()` ever got to see its operand as a whole: grammar depth *is* precedence."
      },
      {
        title: "Left associativity: 1-2-3",
        problem: "Why does the calculator (correctly) answer −4 for `1-2-3`, and not 2?",
        steps: [
          { label: "First iteration", text: "`expr()` gets `left = term() = 1`, reads the first `-`, and immediately calls `term()` for the rest of that operation → $2$, folding `left = 1 - 2 = -1`." },
          { label: "Second iteration", text: "The loop continues: it reads the second `-`, calls `term()` → $3$, and folds `left = -1 - 3 = -4`." },
          { label: "The alternative", text: "If the grammar had grouped right — `1-(2-3)` — the answer would be $1-(-1) = 2$. The loop's fold-direction makes subtraction left-associative, matching the C++ rule for `-`." },
          { label: "Same for division", text: "`12/3/2` folds the same way: $(12/3)/2 = 2$, not $12/(3/2) = 8$." }
        ],
        result: "1-2-3 = (1-2)-3 = -4: the accumulator loop in expr() implements left associativity."
      }
    ],
    keyTakeaways: [
      "The grammar expresses precedence structurally: term (products) nests inside expr (sums), prim inside term — the deeper rule binds its operands tighter.",
      "Recursive descent maps one function per grammar rule; the loop in `expr()` (rather than a recursive call) is what makes `-` and `/` left-associative.",
      "The token stream's `get()`/`putback()` pair gives one token of lookahead, enough for `prim()` to decide what it faces and return what it does not need."
    ],
    quiz: [
      {
        q: "Why does `2+3*4` evaluate to 14 rather than 20 in the calculator?",
        options: [
          "the parser compares operator priorities in a table before parsing",
          "the `*` rule sits deeper in the grammar — the whole `3*4` is parsed as one term before expr() adds",
          "multipation is evaluated by a separate pass",
          "the number 3 is read before the number 2"
        ],
        answer: 1,
        explanation: "Precedence is grammar shape: term() absorbs 3*4 completely before returning, so expr() adds 2 to 12. Parentheses work by making an expr into a prim — jumping straight to the deepest level."
      },
      {
        q: "What is the purpose of `ts.putback(t)`?",
        options: [
          "to record parsed tokens for error reporting",
          "to unread one token so the next `get()` (usually in the caller) returns it again — one token of lookahead",
          "to push results back onto a stack for evaluation",
          "to free the token's memory"
        ],
        answer: 1,
        explanation: "When term() reads a `+` that belongs to expr(), it puts it back; expr()'s next get() then sees it. The one-token buffer implements exactly the one-token lookahead the grammar needs."
      },
      {
        q: "With the book's grammar, `x = 2` inside the calculator parses its right-hand side by:",
        options: [
          "reading a single number token only",
          "calling expr() recursively, which makes assignment right-associative",
          "looping over numbers and adding them",
          "looking up x in the table first"
        ],
        answer: 1,
        explanation: "`name = expr` recurses on the full expression grammar, so `x = y = 2` groups as x = (y = 2) — the one right-associative case in the calculator."
      },
      {
        q: "In the parse tree of `2+3*4`, the tokens `3` and `4` hang under which nonterminal?",
        options: [
          "expr directly, on both sides of the +",
          "a term that sits as the right operand of the `+`",
          "separate expr nodes",
          "the program rule"
        ],
        answer: 1,
        explanation: "3*4 is entirely a term: prim(3) and prim(4) under term, term(*) — that subtree is then the right operand of `+` at the top."
      }
    ]
  },

  // ---------------------------------------------------------------- 10.3
  {
    sectionId: "cpp-ch10-s3",
    readingTime: 7,
    intro: "The operator summary is the chapter's most consulted page: every operator, its precedence level and its associativity, in one table. Two reading skills unlock it. First, operators in the same box bind equally strongly, and associativity breaks ties. Second — and this is the one everyone gets wrong — the table decides grouping, not order of evaluation, so `f() + g()*h()` still runs f whenever the compiler likes. The tower below is the table drawn to scale: the higher the band, the tighter the grip.",
    objectives: [
      "Read the precedence/associativity table and resolve mixed expressions by hand",
      "Apply associativity to break ties among equally-ranked operators",
      "State precisely what precedence does not determine, and when to parenthesize"
    ],
    concepts: [
      {
        term: "The precedence table",
        kind: "definition",
        statement: "C++ arranges its operators into **precedence levels**; in the table, each box (grouped by horizontal rules) is one level. Operators higher in the table bind their operands more tightly: `a + b * c` parses as `a + (b * c)`, and `*a.b` parses as `*(a.b)` because `.` outranks unary `*`.",
        detail: "A workable subset, high to low: `::` scope; postfix (`a()`, `a[]`, `.`, `->`, `a++`, `a--`); unary (`++a`, `-a`, `!a`, `~a`, `*a`, `&a`, casts, `sizeof`, `new`, `delete`); `.*` and `->*`; `* / %`; `+ -`; `<< >>`; relational (`< <= > >=`); equality (`== !=`); bitwise `&`, then `^`, then `|`; logical `&&`, then `||`; then the conditional and assignment operators; and finally `,` at the very bottom."
      },
      {
        term: "Associativity",
        kind: "definition",
        statement: "**Associativity breaks ties** between operators of the same level. Almost all levels associate **left** (`a-b-c` is `(a-b)-c`; `cout << a << b` streams a then b). The right-associative ones are the unary operators, the conditional `?:`, and the assignment family — so `x = y = 0` is `x = (y = 0)`, and `a ? b : c ? d : e` nests on the right.",
        detail: "The mnemonic: anything that *produces an lvalue-ish result to assign into* associates right; things that *consume values* associate left."
      },
      {
        term: "Grouping is not evaluation order",
        kind: "law",
        statement: "**The precedence table fixes how expressions parse — nothing else.** In `f() + g() * h()` the grouping is `f() + (g()*h())`, yet the compiler may call `f` first, last, or interleaved. Any code whose answer depends on which subexpression runs first (`v[i] = i++`, `f(i, i++)`) is unspecified or undefined — the table cannot save it.",
        detail: "The four exceptions — `&&`, `||`, `?:`, `,` — sequence their operands left to right, which is why `p && p->next` is safe when `p` might be null and an `if`-statement cannot be used in an expression."
      },
      {
        term: "When in doubt, parenthesize",
        kind: "method",
        statement: "Explicit parentheses **override** the table's grouping and, equally important, document intent for readers. Redundant parentheses cost nothing at run time; the book's own examples parenthesize liberally around mixes of `&&`, `||` and comparisons — precisely the levels people misremember.",
        detail: "The professional rule: memorize the top and bottom of the table (`::`, postfix, unary up high; assignment and `,` at the bottom) and parenthesize everything in between that you have not just verified."
      },
      {
        term: "Operator Summary: the working contract",
        kind: "definition",
        statement: "**Operator Summary.** Precedence, associativity and the full operator table. You can claim this section when you can read the precedence/associativity table and resolve mixed expressions by hand — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 10 (Expressions); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "The operator precedence tower. Each band is one precedence level; higher bands bind tighter, and the arrow beside each band gives its associativity. Note the three-step staircase of the logical/bitwise region — `&` then `^` then `|` below the equality tests, then `&&` then `||` — and the right-associative block of assignment and `?:` near the bottom.",
        svg: '<svg viewBox="0 0 680 786" width="100%" role="img" aria-label="Operator precedence tower, sixteen levels from scope resolution at the top to comma at the bottom"><text x="340" y="20" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="bold" fill="currentColor">the operator precedence tower</text><line x1="150" y1="700" x2="150" y2="56" stroke="currentColor" stroke-width="1.6"/><polygon points="146,64 150,52 154,64" fill="currentColor"/><text x="140" y="380" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-style="italic" fill="currentColor" opacity="0.85" transform="rotate(-90 140 380)">binds tighter</text><rect x="170" y="44" width="450" height="30" fill="currentColor" fill-opacity="0.10"/><text x="180" y="63" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">scope</text><text x="300" y="63" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">::</text><text x="610" y="63" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">—</text><rect x="170" y="78" width="450" height="30" fill="currentColor" fill-opacity="0.04"/><text x="180" y="97" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">postfix</text><text x="300" y="97" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">a() a[] . a-&gt; a++ a-- T{}</text><text x="610" y="97" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="112" width="450" height="30" fill="currentColor" fill-opacity="0.10"/><text x="180" y="131" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">unary</text><text x="300" y="131" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">++a --a -a !a ~a *a &amp;a (T)a sizeof</text><text x="610" y="131" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">right</text><rect x="170" y="146" width="450" height="30" fill="currentColor" fill-opacity="0.04"/><text x="180" y="165" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">ptr-to-mem</text><text x="300" y="165" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">.* -&gt;*</text><text x="610" y="165" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="180" width="450" height="30" fill="currentColor" fill-opacity="0.10"/><text x="180" y="199" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">multiplicative</text><text x="300" y="199" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">* / %</text><text x="610" y="199" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="214" width="450" height="30" fill="currentColor" fill-opacity="0.04"/><text x="180" y="233" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">additive</text><text x="300" y="233" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">+ -</text><text x="610" y="233" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="248" width="450" height="30" fill="currentColor" fill-opacity="0.10"/><text x="180" y="267" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">shift</text><text x="300" y="267" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">&lt;&lt; &gt;&gt;</text><text x="610" y="267" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="282" width="450" height="30" fill="currentColor" fill-opacity="0.04"/><text x="180" y="301" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">relational</text><text x="300" y="301" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">&lt; &lt;= &gt; &gt;=</text><text x="610" y="301" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="316" width="450" height="30" fill="currentColor" fill-opacity="0.10"/><text x="180" y="335" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">equality</text><text x="300" y="335" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">== !=</text><text x="610" y="335" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="350" width="450" height="30" fill="currentColor" fill-opacity="0.04"/><text x="180" y="369" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">bitwise AND</text><text x="300" y="369" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">&amp;</text><text x="610" y="369" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="384" width="450" height="30" fill="currentColor" fill-opacity="0.10"/><text x="180" y="403" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">bitwise XOR</text><text x="300" y="403" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">^</text><text x="610" y="403" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="418" width="450" height="30" fill="currentColor" fill-opacity="0.04"/><text x="180" y="437" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">bitwise OR</text><text x="300" y="437" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">|</text><text x="610" y="437" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="452" width="450" height="30" fill="currentColor" fill-opacity="0.10"/><text x="180" y="471" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">logical AND</text><text x="300" y="471" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">&amp;&amp;</text><text x="610" y="471" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="486" width="450" height="30" fill="currentColor" fill-opacity="0.04"/><text x="180" y="505" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">logical OR</text><text x="300" y="505" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">||</text><text x="610" y="505" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><rect x="170" y="520" width="450" height="30" fill="currentColor" fill-opacity="0.10"/><text x="180" y="539" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">conditional</text><text x="300" y="539" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">?:</text><text x="610" y="539" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">right</text><rect x="170" y="554" width="450" height="30" fill="currentColor" fill-opacity="0.04"/><text x="180" y="573" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">assignment</text><text x="300" y="573" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">= += -= *= /= %= &amp;= ^= |=</text><text x="610" y="573" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">right</text><rect x="170" y="588" width="450" height="30" fill="currentColor" fill-opacity="0.10"/><text x="180" y="607" font-family="ui-sans-serif, system-ui" font-size="10.5" font-weight="bold" fill="currentColor">comma</text><text x="300" y="607" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">,</text><text x="610" y="607" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.8">left</text><line x1="170" y1="636" x2="620" y2="636" stroke="currentColor" stroke-width="1" opacity="0.5"/><text x="180" y="660" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">a + b * c     groups as   a + (b*c)</text><text x="180" y="682" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">x = y = 0     groups as   x = (y = 0)   (right)</text><text x="180" y="704" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">*p++          groups as   *(p++)</text><text x="180" y="732" font-family="ui-sans-serif, system-ui" font-size="10.5" font-style="italic" fill="currentColor" opacity="0.85">precedence fixes grouping only — it does not fix which of f() or g() runs first</text><text x="180" y="752" font-family="ui-sans-serif, system-ui" font-size="10.5" font-style="italic" fill="currentColor" opacity="0.85">in f() + g(); only and, or, ?: and the comma operator sequence their operands</text><text x="180" y="776" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor" opacity="0.7">shift/relational levels trimmed for legibility; see the concept for the full list</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Resolving a precedence chain by hand",
        problem: "With `int i = 4;` evaluate `bool ok = i < 10 && i % 2 == 0;` — group it first, then compute.",
        steps: [
          { label: "Group the comparisons", text: "Relational (`<`) and equality (`==`) both outrank `&&`, so the parse is `(i < 10) && ((i % 2) == 0)` — and `%` sits above them both, binding `i % 2` first." },
          { label: "Left operand", text: "`i < 10` with `i = 4` is `4 < 10` → `true`." },
          { label: "Right operand", text: "`i % 2 == 0` is `(4 % 2) == 0` → `0 == 0` → `true`. Note the classic trap avoided by the table: `==` outranks nothing between it and `&&`, but a programmer who wrote `i % 2 == 0 && ...` without the inner parentheses got them for free." },
          { label: "Combine", text: "`true && true` → `true`, assigned to `ok`; converting `bool` to `int` later would give $1$." }
        ],
        result: "`ok` is true — grouping `(i<10) && ((i%2)==0)` comes straight off the tower without a single parenthesis."
      },
      {
        title: "Assignment is right-associative",
        problem: "Evaluate `x = y = z = 5;` with all three variables `int`, and explain the grouping.",
        steps: [
          { label: "Group", text: "Assignment is one precedence level and associates right: the parse is `x = (y = (z = 5))`." },
          { label: "Innermost first", text: "`z = 5` is an expression whose value is the value assigned, $5$ — so `y = (z = 5)` stores $5$ into `y` and also yields $5$." },
          { label: "Outermost", text: "`x = ...` stores $5$ into `x`. One semicolon, three assignments, all variables equal $5$." },
          { label: "Why it must be right", text: "Left grouping `(x = y) = z` would assign to the *result* of `x = y` — for built-ins that result is an rvalue and the code would be ill-formed; right associativity is the only grouping that makes chained assignment legal." }
        ],
        result: "x = y = z = 5 → x = (y = (z = 5)); all three end with 5, thanks to assignment's right associativity and its value-producing nature."
      }
    ],
    keyTakeaways: [
      "Operators live in precedence levels — same level means equal strength, and associativity (left for most, right for unary, `?:` and assignment) breaks the tie.",
      "The table determines grouping only; evaluation order of operands is unspecified except for `&&`, `||`, `?:` and `,`.",
      "Parentheses override the table and document intent — redundant grouping costs nothing, while misremembering the bitwise/logical staircase (`&` above `^` above `|`, both above `&&`) silently changes results."
    ],
    quiz: [
      {
        q: "Which groups `a & b == c` the way C++ parses it?",
        options: [
          "`(a & b) == c`",
          "`a & (b == c)`",
          "either — it is ambiguous",
          "it is a syntax error"
        ],
        answer: 1,
        explanation: "Equality (`==`) outranks bitwise `&` in the tower — one of the most misremembered bands, and the reason the book recommends parentheses whenever `&` meets comparisons."
      },
      {
        q: "`x = y = z = 5;` sets all three variables because assignment:",
        options: [
          "associates left",
          "is an expression yielding the value assigned, and associates right",
          "is a statement that repeats per operand",
          "has higher precedence than ="
        ],
        answer: 1,
        explanation: "Each `=` yields the assigned value, and the level associates right, so the chain nests x = (y = (z = 5))."
      },
      {
        q: "`*p++` — what does the expression do?",
        options: [
          "increments the object p points to, then dereferences",
          "dereferences p, then increments the object",
          "post-increments p, then dereferences the old pointer value",
          "is a syntax error"
        ],
        answer: 2,
        explanation: "Postfix `++` outranks unary `*`, so the grouping is `*(p++)` — the classic idiom for walking an array, and the classic exam trap."
      },
      {
        q: "Precedence tells you nothing about:",
        options: [
          "which operand binds to which operator",
          "whether `?:` evaluates its middle or last operand",
          "how tightly `*` binds relative to `+`",
          "the grouping of a parenthesized subexpression"
        ],
        answer: 1,
        explanation: "Which branch of `?:` runs is an *evaluation-order* question (answered: exactly one, chosen by the condition); precedence only says how the text groups."
      }
    ]
  },

  // ---------------------------------------------------------------- 10.4
  {
    sectionId: "cpp-ch10-s4",
    readingTime: 6,
    intro: "Some values must be known before the program runs: array sizes, template arguments, case labels, integer template constants. C++11 introduced constexpr to say *this code computes at compile time — check it* rather than hoping a const happens to be initialized by something the compiler can fold. A constexpr function is written like an ordinary function but is guaranteed usable in constant expressions, so the same code serves both worlds — compile-time computation when required, run-time computation otherwise.",
    objectives: [
      "Define constant expression and constexpr, and what constexpr guarantees",
      "Write constexpr functions (single return, literal types, recursion allowed) and use them for array bounds",
      "Distinguish const (do not modify) from constexpr (known at compile time)"
    ],
    concepts: [
      {
        term: "Constant expression",
        kind: "definition",
        statement: "A **constant expression** is an expression that the compiler can evaluate at compile time: literals, `constexpr` variables used in the expression, `constexpr` function calls, and combinations thereof via constexpr operators. It may not contain assignments, increments, or any value that only exists at run time.",
        detail: "The places that demand constant expressions are exactly the places the compiler must finish a decision before running code: array bounds, case labels, template integer arguments, `static_assert` conditions, and the initializers of other `constexpr` variables."
      },
      {
        term: "constexpr variable",
        kind: "definition",
        statement: "A **`constexpr` variable** must be initialized by a constant expression — the compiler enforces it: `constexpr int x = 7 + 3*2;` compiles ( initializer folds to 13), but `constexpr int x = f();` is rejected unless `f` is a `constexpr` function called with constant arguments.",
        detail: "This is the checking that plain `const` lacks: `const int n = read();` is a perfectly fine read-only variable initialized at run time — legal precisely because `const` promises immutability, not compile-time knowledge."
      },
      {
        term: "constexpr function",
        kind: "definition",
        statement: "A **`constexpr` function** is one usable in constant expressions: its parameters and return must be of **literal types** (built-ins, pointers, enums, and classes of literal type), and in C++11 its body is effectively a single `return` statement — loops are absent, but **recursion is allowed**:\n```\nconstexpr int fac(int n) { return (n > 1) ? n * fac(n-1) : 1; }\nconstexpr int f9 = fac(9);          // 362880, computed by the compiler\n```\nThe guarantee is two-way: given constant arguments it must be evaluable at compile time, and no result is cached or magically different at run time.",
        detail: "The compiler applies the rules where the call needs to be a constant expression; the same `fac` called with a run-time `n` is an ordinary function call executed at run time. (C++14 loosens the single-return rule — loops and locals — but the discipline taught here is the C++11 one the book codifies.)"
      },
      {
        term: "Two-phase evaluation",
        kind: "insight",
        statement: "A `constexpr` function lives a double life: **at compile time when its value is needed in a constant expression** (an array bound, a case label, another constexpr initializer) and **at run time otherwise**. One definition serves both, with identical semantics — this is what makes constexpr code ordinary code with a guarantee attached, not a separate macro-like language.",
        detail: "This is the design win over both the pre-C++11 alternatives: the enum hack (no floating point, no arguments) and template metaprogramming (unreadable) — a constexpr factorial reads exactly like a normal one."
      },
      {
        term: "constexpr vs const",
        kind: "insight",
        statement: "**`constexpr` means *evaluated at compile time*; `const` means *not modified through this name*.** A `constexpr int` is necessarily also `const`; a `const int` need not be constexpr — `const int r = read();` is fine and useless as an array bound, whereas `constexpr int r = fac(4);` is a compile-time 24.",
        detail: "Rule of thumb from the chapter: use `constexpr` for what should be compile-time (sizes, bounds, mathematical constants), `const` for run-time immutability (parameters, references to data you promise not to change)."
      }
    ],
    examples: [
      {
        title: "A compile-time factorial table",
        problem: "Use `fac` to size an array and check the arithmetic by hand.",
        steps: [
          { label: "The function", text: "`constexpr int fac(int n) { return (n > 1) ? n * fac(n-1) : 1; }` — a single return, recursive, all types literal: legal C++11 constexpr." },
          { label: "Array bound", text: "`int buf[fac(4)];` — the bound must be a constant expression, so the compiler *must* evaluate `fac(4)` now: $4 \\times 3 \\times 2 \\times 1 = 24$ ints, i.e. 96 bytes on a 32-bit-int machine." },
          { label: "Check fac(9)", text: "The chain: $9 \\times 8 = 72$, $72 \\times 7 = 504$, $504 \\times 6 = 3024$, $3024 \\times 5 = 15120$, $15120 \\times 4 = 60480$, $60480 \\times 3 = 181440$, $181440 \\times 2 = 362880$ — so `constexpr int f9 = fac(9);` initializes the constant to $362880$ with zero run-time cost." },
          { label: "Run-time use", text: "`int n; cin >> n; int r = fac(n);` — the very same function compiles to a plain call; only the *requirement* changed, not the code." }
        ],
        result: "fac(4) = 24 sizes the array at compile time; fac(9) = 362880 initializes a constexpr; and fac(n) with run-time n is an ordinary call — one definition, two lives."
      },
      {
        title: "A physics constant as code",
        problem: "Kinetic energy $\\tfrac{1}{2}mv^2$ should be computable both ways. Write it once.",
        steps: [
          { label: "The function", text: "`constexpr double kinetic(double m, double v) { return 0.5 * m * v * v; }` — literal parameter and return types, single return." },
          { label: "Compile-time", text: "`constexpr double e = kinetic(2.0, 3.0);` → $0.5 \\times 2 \\times 9 = 9.0$ folded by the compiler — usable as a template argument or a case value where a `double` is allowed." },
          { label: "Run-time", text: "`double m = read_mass(); double e2 = kinetic(m, 3.0);` — computed at run time from data that did not exist at compile time, by the same code." },
          { label: "What you gained", text: "Had `kinetic` been a macro, `kinetic(m+1, 3)` would textually expand to `0.5*m+1*3*3`; as a constexpr function it is typed, scoped, overloadable — and still free when it can be." }
        ],
        result: "kinetic(2.0, 3.0) = 9.0 at compile time; the same expression with run-time masses is an ordinary call — type safety in both worlds."
      }
    ],
    keyTakeaways: [
      "A constant expression is one the compiler can evaluate: literals and constexpr things only — it is required for array bounds, case labels and template integer arguments.",
      "A constexpr function is guaranteed usable in constant expressions: literal types in and out, a single return (C++11), recursion allowed; called with run-time arguments it just runs.",
      "constexpr means compile-time evaluation; const means do-not-modify — a const initialized at run time is not a constant expression."
    ],
    quiz: [
      {
        q: "Which initializer makes `constexpr int n = ...;` legal?",
        options: [
          "`read()` — any function call",
          "`fac(6)` where `fac` is a constexpr function",
          "`v.size()` for a run-time vector",
          "`n = 3` from user input"
        ],
        answer: 1,
        explanation: "A constexpr variable's initializer must be a constant expression; calls to constexpr functions with constant arguments qualify, and everything involving run-time data does not."
      },
      {
        q: "A `constexpr` function called with arguments only known at run time:",
        options: [
          "is a compile error",
          "compiles and executes as an ordinary function at run time",
          "returns 0",
          "is evaluated at compile time anyway"
        ],
        answer: 1,
        explanation: "That is two-phase evaluation: the guarantee applies where a constant expression is *required*; otherwise the same code is a normal run-time call."
      },
      {
        q: "The essential difference between `const int r = read();` and `constexpr int r = 42;` is:",
        options: [
          "none — both are constant expressions",
          "the first is read-only but initialized at run time; only the second is a compile-time constant",
          "the first cannot be used in expressions",
          "the second may be modified later"
        ],
        answer: 1,
        explanation: "const promises immutability through the name; constexpr additionally demands and enforces compile-time initialization — which is why only the second can size an array."
      },
      {
        q: "In C++11, which is NOT allowed in a constexpr function body?",
        options: [
          "a recursive call to another constexpr function",
          "the conditional operator `?:`",
          "a local variable modified by a for-loop",
          "arithmetic on the parameters"
        ],
        answer: 2,
        explanation: "C++11 constexpr bodies are effectively a single return — loops (and locals they would need) are excluded; C++14 relaxed this, but the book teaches the stricter rule."
      }
    ]
  },

  // ---------------------------------------------------------------- 10.5
  {
    sectionId: "cpp-ch10-s5",
    readingTime: 7,
    intro: "C++ inherited from C a machine-near conversion policy: char is just a small int, int and double mix freely, and everything is quietly normalized to a common type before the operator runs. Most of the time this is exactly what you want — 'a'+1 is 98 without ceremony. The chapter's warning is that the same machinery produces three families of silent surprises: promotions that make char arithmetic int arithmetic, usual arithmetic conversions that can turn −1 into the largest unsigned value, and narrowing that throws away high bits and fractions with no diagnostic — unless you initialize with `{}`, which refuses.",
    objectives: [
      "State the integral promotions and what they preserve",
      "Apply the usual arithmetic conversions to predict the common type of a mixed expression",
      "Recognize narrowing and the signed/unsigned trap, and use {} initialization to catch narrowing"
    ],
    concepts: [
      {
        term: "Integral promotion",
        kind: "definition",
        statement: "Before an operator runs, operands smaller than `int` are converted to `int` (or `unsigned int` if `int` cannot hold all values, as on 16-bit chars): `char`, `bool`, `short` and their unsigned variants all promote. `'a' + 1` therefore computes in `int`: the character `'a'` has value 97, so the result is $98$ — the character `'b'`.",
        detail: "Promotions are value-preserving: no information is lost (an `int` holds every `char` value). This is why `sizeof('a' + 1)` is `sizeof(int)`, not 1 — the arithmetic was never done in char."
      },
      {
        term: "Usual arithmetic conversions",
        kind: "law",
        statement: "When a binary operator gets two different types, both operands are converted to a **common type**: if either is `long double`, both become `long double`; else if either is `double`, both become `double`; else if either is `float`, both become `float`; otherwise both undergo integral promotion and then are widened to the larger (and, if the sizes match and one is unsigned, the unsigned) type. `7/2.0` is `double` division → 3.5; `7/2` is `int` division → 3.",
        detail: "The result type of the operation is the common type — which is why `double d = 7/2;` stores $3.0$: the division already happened in `int` before any conversion to double, truncating the fraction. Write `7/2.0` or `static_cast<double>(7)/2`."
      },
      {
        term: "Narrowing conversions",
        kind: "definition",
        statement: "A **narrowing conversion** maps a type to one that cannot hold all its values: `double` to `int` (fraction truncated), `long` to `int` (high bits dropped), `int` to `char` (bits beyond 8 dropped). They happen silently in assignments and function calls — `int c = 1000;` then `char ch = c;` leaves `ch` holding $1000 \\bmod 256 = 232$ — but `{}`-initialization **rejects** them: `char ch {c};` does not compile.",
        detail: "The dropped-bits arithmetic: 1000 in binary is 1111101000; keeping the low 8 bits 11101000 gives $128+64+32+8 = 232$. For `double` to `int`, the value is truncated toward zero, never rounded: `int x = 7.9;` is 7."
      },
      {
        term: "The signed/unsigned trap",
        kind: "insight",
        statement: "When signed meets unsigned of the same size, the **signed operand is converted to unsigned** — so `-1 < 2u` compares $4294967295 < 2$ and is **false**. The same rule ambushes loop bounds: comparing an `int i` against `v.size()` (an unsigned) silently converts `i`; when a container is empty, `v.size() - 1` wraps to the largest value, not −1.",
        detail: "The defenses from the chapter: avoid mixing signed and unsigned in comparisons; prefer range-for loops (no index at all); and never compute `size() - 1` without checking emptiness first — a back-to-front loop `for (int i = v.size()-1; i >= 0; --i)` needs the emptiness guard *before* the subtraction happens in unsigned arithmetic."
      },
      {
        term: "Prefer {} initialization",
        kind: "method",
        statement: "The `{}` (braced) initialization is the conversion-safe form: it **rejects narrowing** at compile time — `int x {7.9};` and `char c {1000};` are compile errors — which is why the book's advice is to use `{}` for initialization everywhere unless a narrowing is genuinely intended and visible.",
        detail: "The `=` and `()` forms both narrow silently; `{}` makes the machine check what your eyes might miss. This is the same protection that initializer lists (Chapter 11.3) give to aggregates and containers."
      }
    ],
    examples: [
      {
        title: "Four conversions, four surprises",
        problem: "Predict each value and explain the rule that produced it.",
        steps: [
          { label: "Integer division first", text: "`double d = 7/2;` → the operands are both `int`, so the division is integer division ($3$), *then* converted: `d` is $3.0$, not 3.5. Fix: `7/2.0` → 3.5." },
          { label: "Promotion in action", text: "`'a' + 1` → `'a'` promotes to `int` 97, the sum is $98$ — assigning to `char` narrows back to `'b'`. `sizeof('a' + 1) == sizeof(int)` surprises C programmers: in C++ the arithmetic happens in int." },
          { label: "Narrowing to char", text: "`char c = 1000;` → 1000 does not fit a char's 8 bits; the high bits are dropped: $1000 - 768 = 232$ survives (768 = 3×256). `char c2 {1000};` would refuse to compile — the `{}` form catches it." },
          { label: "The unsigned ambush", text: "`unsigned u = 2; if (-1 < u)` → `-1` converts to `unsigned int`: all bits set, $4294967295$. The comparison is $4294967295 < 2$ → **false**, against every mathematical intuition." }
        ],
        result: "7/2 → 3 in int then 3.0 as double; 'a'+1 → 98; char(1000) → 232; and −1 < 2u is false: each surprise follows from one rule — normalize to a common type first, silently."
      },
      {
        title: "The empty-vector off-by-one",
        problem: "Why does `for (int i = 0; i <= v.size() - 1; ++i) cout << v[i];` print nothing for a non-empty `v` but loops ~4 billion times (and crashes) when `v` is empty?",
        steps: [
          { label: "The subtraction's type", text: "`v.size()` is an unsigned type, so `v.size() - 1` is unsigned arithmetic. For `size() == 3` it is $2$: `i <= 2` works for `i` = 0,1,2 — correct by luck." },
          { label: "When size() is 0", text: "`0 - 1` in unsigned arithmetic wraps to $2^{32} - 1 = 4294967295$. The condition `i <= 4294967295` holds for essentially every `int i`." },
          { label: "What follows", text: "The loop reads `v[0]`, `v[1]`, ... of an empty vector — undefined behavior, typically a crash after a few billion nonsense accesses. The bug is invisible on every non-empty test." },
          { label: "The repairs", text: "Write `i < v.size()` (no subtraction at all), or better the range-for `for (auto& x : v)` — no index, no unsigned, no off-by-one. If a backwards loop is needed, guard emptiness *before* computing `size() - 1`." }
        ],
        result: "`size() - 1` on an empty container wraps to 4294967295 — the canonical reason the book says never mix signed and unsigned arithmetic, and never subtract from size() unchecked."
      }
    ],
    keyTakeaways: [
      "Integral promotion converts chars, bools and shorts to int before arithmetic — value-preserving but it changes the type of every small-type expression to int.",
      "The usual arithmetic conversions pick one common type for both operands: any floating type dominates; otherwise the larger, and same-size unsigned wins — so −1 becomes 4294967295 next to a 2u.",
      "Narrowing (double→int, long→int, int→char) is silent with `=` and `()` and a compile error with `{}` — initialize with braces; avoid unsigned in comparisons and never compute size() − 1 unchecked."
    ],
    quiz: [
      {
        q: "`double d = 7/2;` stores:",
        options: [
          "3.5",
          "3.0",
          "4.0",
          "a compile error: mixed types"
        ],
        answer: 1,
        explanation: "Both operands are int, so integer division gives 3, converted to double afterwards. The common-type rule only widens the operands when one is already floating point."
      },
      {
        q: "The value of `'a' + 1` and its type are:",
        options: [
          "'b', evaluated in char",
          "98, evaluated in int after promotion",
          "97, a char",
          "a compile error"
        ],
        answer: 1,
        explanation: "'a' promotes to int 97 and the sum 98 is an int — which happens to be the code of 'b' when narrowed back to char on assignment."
      },
      {
        q: "Why is `-1 < 2u` false?",
        options: [
          "-1 cannot be compared with unsigned",
          "the int −1 is converted to unsigned: 4294967295, which is not less than 2",
          "unsigned values are always positive so the comparison is skipped",
          "the comparison is done in floating point"
        ],
        answer: 1,
        explanation: "The usual arithmetic conversions turn −1 into the largest unsigned int before comparing — the book's canonical example of why signed and unsigned must not mix."
      },
      {
        q: "Which initialization refuses to narrow?",
        options: [
          "`int x = 7.9;`",
          "`int x (7.9);`",
          "`int x {7.9};`",
          "`auto x = 7.9;`"
        ],
        answer: 2,
        explanation: "Braced initialization makes narrowing a compile error; = and () truncate silently (both to 7) and `auto` deduces double — no narrowing at all."
      },
      // PYQ-pattern: GATE 2012 — signed unsigned comparison conversion (rephrased)
      {
        q: "What does this program print?\n```cpp\n#include <iostream>\nint main() {\n  std::cout << (-1 < 1u);\n}\n```",
        options: ["`1`, because negative numbers are always smaller", "`1`, because the comparison runs in `double` precision", "`0`, because `-1` converts to a large unsigned value", "The result is unspecified by the standard"],
        answer: 2,
        explanation: "Step 1: The code given compares a negative `int` against an `unsigned` literal. Step 2: The governing rule is the usual arithmetic conversion: when `int` meets `unsigned int`, the signed operand converts to unsigned, so `-1` becomes the maximum unsigned value. Step 3: Tracing the comparison in the unsigned domain, the converted left side is enormous, which is not less than `1`, so the comparison yields false, printed as `0`. Step 4: The distractors fail because no signed comparison survives the conversion, no floating type participates, and the rule is fully specified rather than open. Step 5: Therefore the program prints `0`."
      }
    ]
  },

  // ---------------------------------------------------------------- 10.6
  {
    sectionId: "cpp-ch10-s6",
    readingTime: 4,
    intro: "The chapter's advice on expressions compresses to three habits: parenthesize what you have not verified, keep each expression to one visible side effect, and treat conversions as the boundary where correctness is lost. Every rule here has a bug shown earlier in the chapter behind it — the advice section is just the lesson list.",
    objectives: [
      "Apply the chapter's rules for writing verifiable expressions",
      "Audit code for evaluation-order dependence and signed/unsigned mixing",
      "Choose constexpr and {} initialization as defaults"
    ],
    concepts: [
      {
        term: "Parenthesize beyond the memorized levels",
        kind: "method",
        statement: "**If in doubt, parenthesize.** Redundent grouping is free — the compiler ignores redundant parens, but readers use them as documentation. The levels worth always parenthesizing in source: mixes of bitwise with comparison, mixes of `&&` with `||`, and anything near the assignment block of the tower.",
        detail: "The inverse also holds: *remove* parentheses you have proven unnecessary during code review, so the remaining ones stay meaningful — a parenthesis that is always there is a parenthesis no one reads."
      },
      {
        term: "One side effect per statement",
        kind: "method",
        statement: "Avoid expressions whose value depends on evaluation order: no two writes to the same object in one expression, no read-plus-write (`v[i] = i++`), and never two increments of one variable in an argument list. Split the computation into statements whose order you can see.",
        detail: "The compiler is free to evaluate subexpressions in any order (10.1), so such code works today and breaks — or silently misbehaves — with the next compiler flag, inlining decision, or platform."
      },
      {
        term: "Guard the type boundaries",
        kind: "method",
        statement: "Conversions are where typed correctness leaks away. Make them visible and intentional: `{}`-initialize so narrowing is rejected, avoid signed/unsigned comparisons (range-for eliminates most indices), and when a conversion is genuinely needed, name it with a cast (Chapter 11.5) rather than letting it happen silently.",
        detail: "This pairs with 10.4: make what can be compile-time constexpr, so the compiler checks arithmetic it can check and you keep run-time code for the genuinely dynamic parts."
      },
      {
        term: "Readable over clever",
        kind: "insight",
        statement: "The advice list's quiet summary: expressions exist to be read. Densely folded one-liners that exploit precedence, conversions and side effects together are a tax on every future reader — including you. A few well-named temporaries beat a heroically unreadable expression, at identical run-time cost.",
        detail: "The desk calculator is the model: its precedence comes from structure (a grammar of named levels), not from remembering a table — structure that reads is structure that is right."
      },
      {
        term: "Shipping rule for expressions",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Parenthesize what you have not verified — grouping you can see is grouping you can audit, and it costs nothing.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
    ],
    examples: [
      {
        title: "Auditing one dense line",
        problem: "The line `a[i++] = b[j++] + c[k++];` was submitted as a fix. Audit it against the chapter's rules.",
        steps: [
          { label: "Side-effect count", text: "Three increments in one expression, each a write, none related to the others' values — but all three may interleave in any order with the reads of `i`, `j`, `k`. Here the reads and writes happen to be on different objects, so it is *unspecified* rather than undefined — still unreviewable." },
          { label: "What it hides", text: "A reader must check three subscript variables and three post-increments to confirm the same element pairing the author intended. There is no comment that could make this cheaper than splitting." },
          { label: "The split", text: "```\na[i] = b[j] + c[k];\n++i; ++j; ++k;\n``` — three statements, each one line of truth; the post-increments are gone because nothing needed their old values." },
          { label: "Generalize", text: "Same audit catches `f(i, i++)` (undefined), `x = x++` (undefined), and `v[i] = ++i;` (unsequenced): any line combining a write with a later read of the same object in the same expression is a bug by construction." }
        ],
        result: "One dense line becomes three plain ones with identical behavior on every compiler — and behavior that is now specified, reviewable and testable."
      },
      {
        title: "Reviewing expressions code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the chapter's rules for writing verifiable expressions.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Parenthesize what you have not verified — grouping you can see is grouping you can audit, and it costs nothing." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `int q = x / y; int rem = x % y;`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: audit code for evaluation-order dependence and signed/unsigned mixing. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Keep to one visible side effect per statement: unsequenced read/write mixes are unspecified or undefined, and they migrate to the worst possible compiler at the worst possible time." },
        ],
        result: "The review ends with findings tied to reasons: Parenthesize what you have not verified — grouping you can see is grouping you can audit, and it costs nothing. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Parenthesize what you have not verified — grouping you can see is grouping you can audit, and it costs nothing.",
      "Keep to one visible side effect per statement: unsequenced read/write mixes are unspecified or undefined, and they migrate to the worst possible compiler at the worst possible time.",
      "Make conversions deliberate: {} initialization against narrowing, no signed/unsigned comparisons, constexpr where the value should be compile-time."
    ],
    quiz: [
      {
        q: "The chapter's rule on redundant parentheses is:",
        options: [
          "never use them; they slow the compiler down",
          "use them wherever you have not verified the grouping — they are free and document intent",
          "they change evaluation order",
          "they are only allowed in macros"
        ],
        answer: 1,
        explanation: "Grouping you can see is grouping you can audit; the cost of redundant parens is zero and the benefit is that readers (including you, later) need not trust memory of the tower."
      },
      {
        q: "Which line should definitely be split into statements?",
        options: [
          "`x = a + b * c;`",
          "`y = f(x, g(x));` where f and g are pure functions",
          "`v[i] = i++;`",
          "`z = (a < b) && (c < d);`"
        ],
        answer: 2,
        explanation: "It writes i and reads i in the same unsequenced expression — undefined behavior. The others group safely and (in the second) have no side effects at all."
      },
      {
        q: "For a loop bound against a container's length, the advice-backed choices are:",
        options: [
          "`i <= v.size() - 1` to include the last element",
          "compare an int against the unsigned size with a cast",
          "`i < v.size()`, or better, a range-for with no index at all",
          "store size() in a char"
        ],
        answer: 2,
        explanation: "Avoid the subtraction (which wraps to 4294967295 when empty) and avoid the signed/unsigned comparison; the range-for removes both hazards structurally."
      }
    ]
  }
]
