import type { SectionContent } from '../library'

// ============================================================================
// Flanagan — JavaScript: The Definitive Guide, 7th Edition
// Chapter 5: Statements (Sections 5.1 – 5.5)
// Master study content.
// ============================================================================

export const jsCh5Content: SectionContent[] = [
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'js-ch5-s1',
    readingTime: 7,
    intro: 'A JavaScript program is a list of **statements**: the sentences that give orders — declare a variable, call a function, run a loop, branch on a condition, throw an error. This opening section separates expressions (which compute values) from statements (which perform actions), introduces the expression statements that blur the line, the declaration statements, the compound statement (block) that groups statements as one, and the empty statement — occasionally exactly what you mean, and occasionally a bug that eats a loop body.',
    objectives: [
      'Distinguish expression statements from declaration statements, and identify which expressions earn their semicolon',
      'Use blocks to group statements, and state when a block does and does not need a trailing semicolon',
      'Predict block scoping for var versus let/const',
      'Recognize the empty statement, its legitimate uses and its hazard'
    ],
    concepts: [
      {
        term: 'The statement taxonomy',
        kind: 'definition',
        statement: 'JavaScript statements come in a handful of kinds, and Chapter 5 covers them all: **expression statements** and **declaration statements** (this section), **conditionals** (`if/else`, `switch`), **loops** (`while`, `do/while`, `for`, `for/of`, `for/in`), **jumps** (`break`, `continue`, `return`, `yield`, `throw`, `try/catch/finally`) and the miscellany (`with`, `debugger`, `"use strict"`). A program executes its statements top to bottom unless a jump redirects it.',
        detail: 'Statements are separated by semicolons — usually optional at the end of a line, thanks to the automatic semicolon insertion rules of Section 2.5, which is exactly why the return pitfall of Section 5.4 exists.'
      },
      {
        term: 'Expression statements',
        kind: 'definition',
        statement: 'Any expression can stand alone as a statement: evaluate it, discard the value, continue. In practice the ones worth writing have **side effects** — assignment (`count = 0;`), increment (`count++;`), deletion (`delete o.x;`) and, above all, function calls (`console.log("hi");`), the most common statement in the language. A pure expression like `1 + 2;` is legal but useless, and linters (Chapter 17) flag it as a probable mistake.',
        detail: 'Two expressions that look statement-worthy are not: `function f() {}` at the start of a line is a declaration, not an expression statement, and a class declaration likewise. That distinction decides where the semicolon goes — and what can appear on the right side of an =.'
      },
      {
        term: 'Declaration statements',
        kind: 'definition',
        statement: 'The declaration statements introduce bindings: `let`, `const` (and legacy `var`) declare variables — several at once with declarators: `let x = 1, y = 2;` — and destructuring patterns from Section 3.8; `function` and `class` declare callable and constructable bindings. **Function declarations are fully hoisted** — defined before the statement is reached, so they can be called earlier in the same scope — while `class` bindings live in the temporal dead zone like `let`.',
        detail: 'Section 3.8 has the var/let/const story: var hoists to the function, initializes undefined, and becomes a global-object property; let and const are block-scoped and TDZ-guarded. Here they simply count as statements.'
      },
      {
        term: 'Compound statements and blocks',
        kind: 'definition',
        statement: 'A **block** is a set of braces containing zero or more statements, treated grammatically as a single statement:\n```js\n{\n  let temp = compute();\n  use(temp);\n}                       // no semicolon after }\n```\nBlocks need no trailing semicolon. They are how if, for and while accept multiple-statement bodies — and with `let/const` they are **scopes**: bindings declared inside stay inside. `var` ignores block braces entirely (it is function-scoped), one of the reasons Chapter 3 retired it.',
        detail: 'A standalone block is legal and occasionally useful for grouping or restricting let-scoped temporaries — most blocks you write will belong to a control structure.'
      },
      {
        term: 'The empty statement',
        kind: 'notation',
        statement: 'A lone semicolon is the **empty statement**: it does nothing, and it is a real statement — able to serve as a loop body that has no work. Flanagan’s canonical example zeroes an array with no body at all:\n```js\nfor (let i = 0; i < a.length; a[i++] = 0) /* empty */ ;\n```\nThe increment clause does the work, so the body has nothing left to do. The hazard is the accidental one — a stray semicolon after `if (...)` or `for (...)` becomes the *entire* body, and the indented statement after it runs unconditionally (or once, after the loop). Mark intentional emptiness with a comment; delete unintentional semicolons.',
        detail: 'The empty statement is also the grammar’s way of making semicolons optional-but-meaningful: `{}` and `;` are both valid bodies, and Section 5.3’s for(;;) relies on clauses being optional rather than statements being non-empty.'
      }
    ],
    examples: [
      {
        title: 'Trace: classify every line',
        problem: 'A six-line program mixes declaration, expression, and compound statements. Classify each, and justify each semicolon decision.',
        steps: [
          { label: 'The code', text: '```js\n"use strict";                         // (1)\nlet total = 0;                         // (2)\nfunction bump(n) { return total += n; } // (3)\nbump(3);                               // (4)\ntotal++;                                // (5)\nif (total > 3) {                        // (6)\n  total = 0;                            // (7)\n}                                       // (8)\n```' },
          { label: 'Step 1: the directive', text: '(1) is the "use strict" directive prologue — a string expression statement with a special meaning to the interpreter (Section 5.5), semicolon customary.' },
          { label: 'Step 2: declarations do not need semicolons', text: '(2) is a declaration statement — the semicolon terminates the declarator list and is required. (3) is a function declaration: the body’s closing brace ends it, so no semicolon — and its body happens to be a single return expression statement.' },
          { label: 'Step 3: the workhorse expression statements', text: '(4) is an invocation expression statement; (5) is an increment expression statement; (7) is an assignment expression statement inside the block. All three exist for their side effects — the classic expression statements.' },
          { label: 'Step 4: the compound body', text: '(6) is an if statement whose test is an expression; its body is the block (6)–(8). The closing brace at (8) needs no semicolon — and the fact that `total = 0;` inside DOES need one is the contrast worth remembering: blocks end bare, statements end punctuated.' }
        ],
        result: 'Two declarations, three side-effecting expression statements, one directive, one compound if: a complete statement taxonomy in eight lines.'
      },
      {
        title: 'Trace: the stray semicolon',
        problem: 'A loop was meant to total the numbers 0 through 4. With the semicolon as written, what does total end up being — and why?',
        steps: [
          { label: 'The code', text: '```js\nlet total = 0;\nfor (var i = 0; i < 5; i++);   // <-- the bug: this ; is the loop body\ntotal += i;                     // intended body — actually runs AFTER\n```' },
          { label: 'Step 1: parse the for statement', text: 'The for header is followed by a `;` — which parses as the empty statement, the complete body of the loop. The indented `total += i` is a separate statement that the loop does not own. Indentation is decoration; the grammar already decided.' },
          { label: 'Step 2: run the loop — five empty iterations', text: 'i takes the values 0, 1, 2, 3, 4; each pass executes the empty statement and the increment; the test finally fails when i is 5. Nothing was added; total is still 0.' },
          { label: 'Step 3: the orphaned statement runs once', text: 'After the loop, execution continues with `total += i` — exactly once, with i left at its final value 5. total becomes 5, not the intended 0 + 1 + 2 + 3 + 4 = 10.' },
          { label: 'Step 4: the fix and the habit', text: 'Delete the semicolon — and write braces for any body longer than one line, so an accidental semicolon becomes a visible `{ ; }` anomaly instead of a silent five-fold error. Linters catch this pattern specifically (no-unexpected-multiline, Chapter 17).' }
        ],
        result: 'total is 5 — the loop iterated five times doing nothing, then the intended body executed once with i === 5. One semicolon redirected the entire program.'
      }
    ],
    keyTakeaways: [
      'Expressions compute values; statements perform actions — and every statement in Chapter 5 is one of: expression, declaration, compound, conditional, loop, jump, or miscellany.',
      'Expression statements earn their keep through side effects: assignments, increments, deletes and function calls; pure expression statements are lint bait.',
      'let/const/var, function and class declarations are statements; function declarations hoist fully while class bindings obey the temporal dead zone.',
      'Blocks group statements as one and need no trailing semicolon; with let/const a block is a new scope (var leaks through to function scope).',
      'A lone semicolon is the empty statement — a legitimate no-op body, and a classic bug when it accidentally swallows an if or for body.'
    ],
    quiz: [
      {
        q: 'Which of these is NOT useful as an expression statement?',
        options: [
          '```js\ncounter = counter + 1;\n```',
          '```js\nsaveAndClose();\n```',
          '```js\n1 + 2;\n```',
          '```js\ndelete o.temp;\n```'
        ],
        answer: 2,
        explanation: '1 + 2 evaluates to 3 and the value is discarded — no side effect, no result kept. The other three are the classic side-effecting expression statements: assignment, call, deletion.'
      },
      {
        q: 'Which statement requires NO semicolon after it?',
        options: [
          'A function declaration ending with its closing brace',
          'A const declaration with an initializer',
          'An assignment expression statement',
          'An increment expression statement'
        ],
        answer: 0,
        explanation: 'The body’s closing brace terminates a function declaration. Declarations of variables, and expression statements generally, need their semicolons (inserted by ASI at line ends, but required on one line).'
      },
      {
        q: 'Inside a standalone block, `let blockScoped = 1; var fnScoped = 2;` is declared. After the block, what is visible?',
        options: [
          'Both are visible',
          'Neither is visible',
          'blockScoped is gone (ReferenceError); fnScoped is still visible',
          'blockScoped is visible; fnScoped is gone'
        ],
        answer: 2,
        explanation: 'Blocks are scopes for let and const but not for var: the let binding dies with the block, while var hoists to the enclosing function (or global) and survives — Chapter 3’s scoping rules in statement clothing.'
      },
      {
        q: 'What does the semicolon in `for (var i = 0; i < 5; i++);` (followed by a total += i line) actually do?',
        options: [
          'It is a syntax error',
          'It becomes the entire loop body — the empty statement — leaving the next line outside the loop',
          'It separates the loop from the next statement with no other effect',
          'It terminates the for statement early, skipping all iterations'
        ],
        answer: 1,
        explanation: 'The empty statement is a valid body, so the loop runs five no-op iterations and total += i executes exactly once afterward with i === 5 — the classic stray-semicolon bug.'
      }
    ]
  },

  // ---------------------------------------------------------------- 5.2
  {
    sectionId: 'js-ch5-s2',
    readingTime: 9,
    intro: 'Conditionals choose. JavaScript has exactly two forms: the if statement for one- and two-way decisions (and else-if ladders for more), and the switch statement for dispatching on the value of a single expression — with semantics that surprise the unwary: matching uses strict equality, there is no implicit break, and a missing break means the cases deliberately run together. This section covers both forms, the dangling-else ambiguity, the fallthrough discipline, and the switch-on-true idiom.',
    objectives: [
      'Write if, else and else-if chains, evaluating tests by truthiness',
      'Resolve the dangling-else ambiguity and defend against it with braces',
      'Trace switch matching (strict ===, default, runtime case expressions) and fallthrough',
      'Apply break discipline and the grouped-cases sharing pattern',
      'Recognize and evaluate the switch(true) dispatch idiom'
    ],
    concepts: [
      {
        term: 'The if statement',
        kind: 'definition',
        statement: '`if (expression) statement1` evaluates the expression and converts it with the truthiness rules (the six falsy values of Section 3.4), running statement1 when the result is truthy. The optional `else statement2` covers the other case. Any statement can be the body — a single statement directly, or a block for several. The test must be wrapped in parentheses; assignments work as tests (`if (x = next())`), which is usually a typo worth a lint rule.',
        detail: 'Style guidance used across the book: braces around every multi-statement body, and around single-statement bodies too when a reader might mis-attach an else — which is precisely the dangling-else problem below.'
      },
      {
        term: 'else-if ladders',
        kind: 'method',
        statement: 'There is no elseif keyword: the ladder is just repeated `else if`, where each else contains another if statement:\n```js\nif (n === 1) {\n  // ...\n} else if (n === 2) {\n  // ...\n} else {\n  // all other cases\n}\n```\nThe tests evaluate top to bottom; the first truthy one wins and the rest are skipped. The ladder is the natural shape for range checks and ordered conditions — and the direct competitor of switch(true).',
        detail: 'A final bare else is the catch-all: without it, a value that matches nothing silently falls through the whole ladder.'
      },
      {
        term: 'The dangling else',
        kind: 'law',
        statement: 'When if statements nest without braces, an else belongs to the **nearest if that can accept it** — not necessarily the one your indentation suggests:\n```js\nif (a === 1)\n  if (b === 1)\n    log("both");\n  else\n    log("a is 1, b is not");   // else pairs with the INNER if\n```\nThe braces rule makes the pairing explicit and makes refactoring safe — adding a statement to the outer body cannot silently capture the else.',
        detail: 'The indentation above happens to tell the truth; the danger is code where it does not. This is the single most-cited reason style guides mandate braces: the grammar has an opinion, and the layout cannot override it.'
      },
      {
        term: 'switch mechanics',
        kind: 'definition',
        statement: 'The switch statement evaluates one expression, then compares the result against each `case` label in order:\n```js\nswitch (expression) {\n  case value1:  statements1  // executed if expression === value1\n  // ...\n  default:     statements   // when no case matches\n}\n```\nThree mechanics that matter: (1) matching uses **strict equality** — `switch (1)` does not match `case "1"`; (2) the **default** clause runs when nothing matches and may appear anywhere (top by convention when it is not the catch-all); (3) **case labels are expressions** — evaluated, in order, when the switch is reached, so a case can be any runtime value including function calls.',
        detail: 'The switch expression is evaluated once, then compared left to right. Because matching is ===, NaN can never match a case, and string/number lookalikes fail exactly as === says they must.'
      },
      {
        term: 'Fallthrough and break discipline',
        kind: 'law',
        statement: 'Inside a switch, execution does **not** stop at the end of a case — it keeps executing statements into the following cases until it hits a `break` (or `return`, `throw`, or the closing brace). Omitting break is therefore a **fallthrough**, and since it is usually a bug, intentional fallthrough should be rare and **explicitly commented**. The legitimate use is **grouping** cases that share a body:\n```js\nswitch (month) {\n  case 12: case 1: case 2:   // three labels, one body: deliberate\n    return "winter";\n  case 3: case 4: case 5:\n    return "spring";\n  // ... 6-9, 10-11 similarly\n  default:\n    return "unknown";\n}\n```\nA `return` inside a case makes break unnecessary — the function is leaving anyway.',
        detail: 'The discipline: every case ends in break, return or throw unless a comment says /* fall through */. Chapter 17’s lint rules (no-fallthrough) enforce exactly this, comments included.'
      },
      {
        term: 'The switch(true) idiom',
        kind: 'method',
        statement: 'When the decision does not share one comparand — ranges, type mixes, predicates — switch on the constant `true`, and let the case expressions be the conditions:\n```js\nswitch (true) {\n  case score >= 90: return "A";\n  case score >= 80: return "B";\n  case score >= 70: return "C";\n  default:          return "F";\n}\n```\nEach case is tested as `true === (score >= 90)` and so on, top to bottom — an else-if ladder wearing switch syntax. It is a matter of taste; readability wins whichever way reads better.',
        detail: 'Remember the === rule: the case expression must actually evaluate to the boolean true — a truthy non-boolean (like 1 or "yes") does NOT match. That subtlety is the idiom’s main trap.'
      }
    ],
    examples: [
      {
        title: 'Trace: the dangling else',
        problem: 'With a === 1 and b === 2, what does this unbraced nest print — and what did the author intend?',
        steps: [
          { label: 'The code', text: '```js\nfunction check(a, b) {\n  if (a === 1)\n    if (b === 1)\n      log("both");\n  else\n    log("a is not 1");     // indented to LOOK outer\n  return "done";\n}\ncheck(1, 2);\n```' },
          { label: 'Step 1: the grammar pairs the else inward', text: 'An else clause attaches to the nearest if that can accept one — here the inner `if (b === 1)`, regardless of indentation. The parse is: if (a === 1) { if (b === 1) log("both"); else log("a is not 1"); }.' },
          { label: 'Step 2: evaluate with a = 1, b = 2', text: 'The outer test passes (a is 1). The inner test fails (b is not 1). The inner else — which the layout labeled as the outer catch-all — fires: the message "a is not 1" prints even though a IS 1.' },
          { label: 'Step 3: the case that reveals the bug', text: 'Call check(2, 1): the outer test fails, the entire inner statement (including its else) is skipped, and nothing prints at all. The author’s intended "a is not 1" message never runs in the one case it was written for.' },
          { label: 'Step 4: the brace fix', text: 'Wrap the outer body: `if (a === 1) { if (b === 1) log("both"); } else log("a is not 1");`. Now the else can only pair with the outer if, and both calls behave as intended — check(1, 2) prints nothing, check(2, 1) prints the message.' }
        ],
        result: 'The original printed "a is not 1" for a === 1 — the else belonged to the inner if. Braces make the pairing visible and the code honest.'
      },
      {
        title: 'Worked: a switch with grouped cases and one missing break',
        problem: 'A shipping-cost switch groups adjacent weight tiers and forgets one break. Predict the outputs for 2 kg and 5 kg, then fix it.',
        steps: [
          { label: 'The buggy code', text: '```js\nfunction shipping(kg) {\n  let cost;\n  switch (true) {\n    case kg <= 1:  cost = 5;               // letter\n    case kg <= 5:  cost = 8;  // missing break — BUG\n    case kg <= 20: cost = 12; break;\n    default:       cost = 30;\n  }\n  return cost;\n}\nshipping(2);   // (1)\nshipping(5);   // (2)\n```' },
          { label: 'Step 1: (1) a 2 kg parcel finds its case', text: 'kg <= 1 is false; kg <= 5 is true, so execution jumps there and sets cost = 8. But the case body has no break — execution falls through into kg <= 20, overwriting cost to 12, and only then hits break. The answer is 12: the customer is charged for a large parcel.' },
          { label: 'Step 2: (2) a 5 kg parcel does the same', text: 'kg <= 5 is true (boundary included), then the same fallthrough sets 12. Both inputs return 12 — the 8 tier is unreachable as written, a strong signal that something structural is wrong.' },
          { label: 'Step 3: the fix', text: '```js\nswitch (true) {\n  case kg <= 1:  cost = 5;  break;   // break added\n  case kg <= 5:  cost = 8;  break;   // break added\n  case kg <= 20: cost = 12; break;\n  default:       cost = 30;\n}\n```\nNow shipping(2) is 8, shipping(5) is 8, and every tier behaves — the switch(true) ladder with disciplined breaks is an else-if chain in disguise.' },
          { label: 'Step 4: when fallthrough is the tool', text: 'Contrast with deliberate grouping: `case kg <= 1: case kg <= 2: cost = 6; break;` — two labels, one body, no orphaned statements between them. Grouping shares a body; falling through runs two bodies by accident. The comment rule (write /* fall through */ when you mean it) exists so the reader can tell them apart at a glance.' }
        ],
        result: 'Before: both calls returned 12 — one missing break erased a whole pricing tier. After: 8 for both, and each case ends in break unless a comment declares an intentional group.'
      },
      {
        title: 'Trace: strict matching in switch',
        problem: 'A dispatch table keys on user input. Show why `switch ("1")` and `case 1` fail to meet — and two ways to repair the dispatch.',
        steps: [
          { label: 'The code', text: '```js\nfunction route(cmd) {\n  switch (cmd) {\n    case 1:    return "number route";\n    case "1":  return "string route";\n    default:   return "no route";\n  }\n}\nroute(1);      // (1)\nroute("1");    // (2)\nroute("one");  // (3)\n```' },
          { label: 'Step 1: (1) the number finds its case', text: 'The switch value 1 compares with === against each label in order: 1 === 1 is true — "number route".' },
          { label: 'Step 2: (2) the string never matches the number label', text: '"1" === 1 is false — switch never converts. The comparison continues to "1" === "1", which is true: "string route". The two cases are genuinely different arms, and reversing their order changes nothing.' },
          { label: 'Step 3: (3) everything else lands in default', text: '"one" matches neither label, so the default clause answers "no route". Without default the switch would simply do nothing and route would return undefined.' },
          { label: 'Step 4: repairing a genuine mismatch', text: 'If input arrives as a string but the labels are numbers, normalize first — `switch (Number(cmd))` — or make every label a string. Silent type juggling is not an option: the === rule is the switch’s contract, and it is the same contract === itself uses in Section 4.5.' }
        ],
        result: '"number route", "string route", "no route" — switch matches with strict equality, so string "1" and number 1 are different destinations, and normalization must happen before the switch.'
      }
    ],
    keyTakeaways: [
      'if converts its test with the truthiness rules (six falsy values); else-if ladders are nested else statements with the first truthy test winning.',
      'A dangling else pairs with the nearest if that can accept it — braces make the pairing explicit and refactor-safe.',
      'switch evaluates its expression once and compares with strict ===: string "1" never matches case 1, and NaN matches nothing.',
      'default is the no-match clause (placeable anywhere); case labels are expressions evaluated when the switch is reached.',
      'Execution falls through every case without a break — group cases deliberately (case a: case b: shared body), end the rest with break/return/throw, and comment any intentional fallthrough.',
      'switch (true) with boolean case expressions is the ladder alternative — but only real booleans match (true === 1 is false).'
    ],
    quiz: [
      {
        q: 'In nested unbraced if statements, an else clause pairs with:',
        options: [
          'The if whose indentation aligns with it',
          'The nearest enclosing if that can accept it',
          'The outermost if',
          'Whichever if has no other else — chosen at random'
        ],
        answer: 1,
        explanation: 'The grammar binds an else to the nearest if lacking one — layout is irrelevant. This is why style guides demand braces around nested if bodies.'
      },
      {
        q: 'What does `switch (2)` do when the matching case body contains statements but no break, and another case follows?',
        options: [
          'It stops at the end of the matching case body',
          'It keeps executing into the following case’s statements until a break, return, throw, or the closing brace',
          'It throws a SyntaxError — every case needs a break',
          'It re-tests the value against the next case label first'
        ],
        answer: 1,
        explanation: 'Cases are labels, not fences: execution falls through to the next case body without re-testing. The missing-break fallthrough is the classic switch bug.'
      },
      {
        q: 'Which comparison does switch use to match a case label?',
        options: ['== with type conversion', '=== strict equality', 'Object.is semantics including NaN', 'Truthy comparison of both values'],
        answer: 1,
        explanation: 'Matching is strict: switch(1) does not match case "1". Normalize the switched value before the switch when the inputs might arrive in the wrong type.'
      },
      {
        q: 'In `switch (true) { case x > 5: ... }`, which case expression MATCHES?',
        options: ['`x = 6` — truthy number 6', '`x > 5` evaluating to the boolean true', '`"yes"` — a truthy string', '`x` holding any nonempty object'],
        answer: 1,
        explanation: 'The comparison is true === case-expression, strict: only the actual boolean true matches. Truthy values like 6, "yes" or objects do not — the idiom’s little trap.'
      },
      {
        q: 'What is the legitimate fallthrough pattern?',
        options: [
          'Omitting breaks on every case for compactness',
          'Grouping several case labels to share one body: case 12: case 1: case 2: return "winter"',
          'Using continue instead of break inside a switch',
          'Placing default first so it runs before the cases'
        ],
        answer: 1,
        explanation: 'Adjacent labels with no statements between them share the body that follows — deliberate, readable grouping. Stray missing breaks elsewhere are bugs; continue does not apply to switch (it is not a loop).'
      }
    ]
  },

  // ---------------------------------------------------------------- 5.3
  {
    sectionId: 'js-ch5-s3',
    readingTime: 12,
    intro: 'JavaScript has five loops: while and do/while (condition-tested), the three-clause for (counting and indexing), for/of (iterating the VALUES of anything iterable) and for/in (enumerating the property NAMES of any object). The two for variants are the chapter’s best-known trap: on an array they produce different things — index strings versus element values — and for/in includes inherited properties, which is why the Object.keys filter idiom exists. Along the way: the exact timing of the for clauses, the do/while post-check, and how await fits inside a loop body.',
    objectives: [
      'Write while and do/while loops, applying the pre-test versus post-check difference',
      'Trace the for loop’s init/test/increment timing, including fully omitted clauses',
      'Iterate arrays, strings, Maps and Sets with for/of, including destructured entries',
      'Explain await-in-a-loop sequencing, and distinguish it from for await...of',
      'Contrast for/in with for/of on arrays, and filter with Object.keys or Object.hasOwn'
    ],
    concepts: [
      {
        term: 'while',
        kind: 'definition',
        statement: '`while (expression) statement` is the plain loop: evaluate the expression (truthiness rules), run the statement if truthy, repeat. The test comes FIRST, so the body may run **zero times**. The programmer owns progress toward termination — a variable the body never advances is an infinite loop. Braces around multi-statement bodies are the same recommendation as for if.',
        detail: 'while is the loop of choice when the iteration count is unknown in advance — polling a queue, consuming input — and when the natural structure is "check, then do".'
      },
      {
        term: 'do/while',
        kind: 'definition',
        statement: '`do statement while (expression);` puts the body first and the test after — so the body runs **at least once**, and only then does the condition decide whether to repeat. Note the required **semicolon after the closing parenthesis** — the one place ASI will not save you. do/while suits loops that must prime or consume something before the question makes sense:\n```js\nlet input;\ndo {\n  input = nextToken();\n  process(input);\n} while (input !== "END");   // ; required here\n```\ncontinue inside a do/while jumps to the condition check — the bottom of the loop, not the top.',
        detail: 'Any do/while can be rewritten as a while with the body duplicated ahead of the loop; the do form exists to say "at least once" in one readable place.'
      },
      {
        term: 'for and its three clauses',
        kind: 'definition',
        statement: 'The for statement packs loop bookkeeping into a header: `for (initialize; test; increment) statement`. The timing is exact: **initialize runs once** before anything; **test runs before every iteration** (including the first — a false test means zero iterations); **increment runs after the body**, before the next test. All three clauses are optional — an omitted test is true forever:\n```js\nfor (let i = 0; i < a.length; i++) { ... }   // canonical\nfor (;;) { ... }                             // infinite: no test\nlet i = 0;\nfor (; i < 3;) { i++; }                       // work split out\n```\nThe initialize clause may declare (let/const — a fresh binding per loop, scoped to the loop) or assign (var — function-scoped), and the comma operator (Section 4.7) lets one clause juggle two variables: `for (let i = 0, j = 9; i <= j; i++, j--)`.',
        detail: 'Use let in the header unless the index must survive the loop — a var counter is still visible afterward at its final (failed-test) value, which the stray-semicolon example exploited.'
      },
      {
        term: 'for/of — values of iterables',
        kind: 'definition',
        statement: 'ES6’s **for/of** iterates the VALUES of any **iterable** — an object that knows how to produce a sequence (Chapter 12): arrays (elements, in index order; holes surface as undefined), strings (by code point, so surrogate pairs stay whole), Sets (members), Maps (entry arrays — destructure them), typed arrays, NodeLists, arguments:\n```js\nfor (const v of [10, 20, 30]) use(v);        // values\nfor (const ch of "hi\\uD83D\\uDE00") log(ch);   // "h", "i", ONE emoji\nfor (const [k, v] of aMap) log(k, v);         // destructure entries\nfor (const el of document.querySelectorAll("p")) el.classList.add("x");\n```\nA plain object is not iterable — `for (const v of {})` throws `TypeError: {} is not iterable`. Use for/in or Object.entries for plain objects. `const` in the header is idiomatic (a fresh binding per element); assignment to it is a SyntaxError.',
        detail: 'for/of is the modern default for arrays: no off-by-one indexing, no length recomputation, and it visits elements via the array iterator — extra properties (the for/in trap below) are ignored.'
      },
      {
        term: 'await inside for/of',
        kind: 'method',
        statement: 'Inside an async function, the for/of body may await — each iteration then finishes its asynchronous work before the next begins, which makes the loop **sequential**:\n```js\nasync function loadAll(urls) {\n  for (const url of urls) {\n    const response = await fetch(url);   // one at a time\n    log(response.status);\n  }\n}\n```\nSequential is often exactly right (respecting rate limits, depending on each result). For independent work, Chapter 13 shows the parallel alternative — collecting promises and awaiting them together — and for iterating asynchronous SEQUENCES (streams), the `for await...of` statement of Section 13.4.',
        detail: 'One await per element is not automatically slow: it is slow only when the iterations are independent. Decide sequential versus parallel deliberately, never by accident.'
      },
      {
        term: 'for/in — enumerable property names',
        kind: 'definition',
        statement: 'The older **for/in** enumerates the enumerable string property NAMES of any object — own properties AND inherited ones:\n```js\nconst o = { a: 1, b: 2 };\nfor (const p in o) log(p);        // "a", "b"\n\nconst parent = { inherited: true };\nconst child = Object.create(parent);\nchild.own = 1;\nfor (const p in child) log(p);    // "own", "inherited" — BOTH\n```\nIteration order: integer-like keys ascend first, then string keys in definition order. For null or undefined, the loop body runs zero times. On arrays it yields the index keys **as strings** — see the next concept.',
        detail: 'for/in predates the iterator protocol and was JavaScript’s only loop-in-object mechanism for years — which is why its quirks (inherited properties, string keys) are baked into so much legacy code.'
      },
      {
        term: 'for/in versus for/of on an array',
        kind: 'insight',
        statement: 'The chapter’s classic trap, side by side:\n```js\nconst arr = ["x", "y", "z"];\narr.tag = "letters";          // arrays are objects: property fits\nfor (const k in arr) log(k);  // "0", "1", "2", "tag"  (!)\nfor (const v of arr) log(v);   // "x", "y", "z"\n```\nfor/in hands you property names — including non-index properties and inherited ones — as **strings**, so `arr[k]` is required to reach the value and `k + 1` is "01". for/of hands you the element values via the iterator: no tag, no strings, no surprises. **Rule: for/of for arrays, for/in (filtered) for plain objects.**',
        detail: 'The filter idiom for objects that might inherit: `for (const k in o) if (Object.hasOwn(o, k)) { ... }` — or sidestep entirely with `for (const [k, v] of Object.entries(o))`, which enumerates own properties only.'
      },
      {
        term: 'Choosing the loop',
        kind: 'method',
        statement: 'A one-line decision table:\n```js\nfor (const v of array)          // array elements (or string/Map/Set)\nfor (const [k, v] of aMap)      // Map entries via destructuring\nfor (const c of "text")          // string code points\nfor (let i = 0; i < n; i++)      // when you need the INDEX\nfor (const p in object)          // property NAMES (own + inherited)\nfor (const k of Object.keys(o))  // own property names, safe\nwhile (test)                    // condition-driven, zero-or-more\ndo body while (test);            // condition-driven, at-least-once\n```\nDefault to for/of for sequences; fall back to the three-clause for when the index itself matters (sparseness, stepping backwards, multiple cursors).',
        detail: 'Chapter 7 adds the array methods — forEach, map, filter — which cover most index-free array loops at a higher level of intent.'
      }
    ],
    examples: [
      {
        title: 'Trace: do/while runs the body before it asks',
        problem: 'A tokenizer loop processes until an END marker. Trace both a normal input and one that begins with END — then compare with the while form.',
        steps: [
          { label: 'The code', text: '```js\nfunction readTokens(tokens) {\n  const out = [];\n  let t, i = 0;\n  do {\n    t = tokens[i++];\n    out.push(t.toUpperCase());\n  } while (t !== "END");\n  return out;\n}\nreadTokens(["a", "b", "END"]);   // (1)\nreadTokens(["END"]);             // (2)\n```' },
          { label: 'Step 1: (1) normal input', text: 'The body runs first: t = "a", push "A". Test: "a" !== "END" → true, loop again: "B". Third pass: t = "END", push "END" — the marker is processed — and now the test fails and the loop exits. Result ["A", "B", "END"]. The marker-included behavior is a design decision living in the body, not the loop.' },
          { label: 'Step 2: (2) the immediate END', text: 'Even with END first, the body executes once BEFORE any test: t = "END", out gets "END", and only then does the condition stop the loop. Result ["END"] — a do/while is incapable of zero iterations.' },
          { label: 'Step 3: the while form needs priming', text: '```js\nlet t = tokens[i++];             // prime BEFORE the loop\nwhile (t !== "END") {\n  out.push(t.toUpperCase());\n  t = tokens[i++];               // and re-prime at the bottom\n}\n```\nThe same logic as a while duplicates the read twice — and the immediate-END case returns [] instead of ["END"], because the test now runs before the first push. The two forms differ on exactly the first iteration.' },
          { label: 'Step 4: choosing the form', text: 'Write do/only when "at least once" is the truth of the problem — prompting for input, consuming a first item, executing once before asking. If zero iterations is a meaningful case, the test belongs on top.' }
        ],
        result: 'readTokens(["a","b","END"]) is ["A","B","END"]; readTokens(["END"]) is ["END"] — the body always runs once, and the required trailing semicolon is part of the syntax.'
      },
      {
        title: 'Trace: the for anatomy, timed precisely',
        problem: 'For `let sum = 0; for (let i = 1; i <= 5; i++) { sum += i; }`, state exactly when each clause runs, and give the final sum. Then read the all-omitted form.',
        steps: [
          { label: 'The code', text: '```js\nlet sum = 0;\nfor (let i = 1; i <= 5; i++) {\n  sum += i;\n}\n// sum === ?\n```' },
          { label: 'Step 1: initialize — once, before everything', text: 'i is created and set to 1 one time. This clause never runs again, no matter how many iterations follow — and with let, i is scoped to the loop: asking for i afterward is a ReferenceError.' },
          { label: 'Step 2: test — before EACH iteration, including the first', text: 'The sequence of tests is 1<=5, 2<=5, 3<=5, 4<=5, 5<=5 (all true — five bodies), then 6<=5, which fails. The failed test is the loop’s exit; note that i is 6 at exit, not 5 — the increment ran after the last body.' },
          { label: 'Step 3: increment — after the body, before the next test', text: 'The per-iteration order is always: test, body, increment, test, body, increment, ... So during the last body i is 5, and the increment to 6 is what lets the final test fail. sum accumulates 1 + 2 + 3 + 4 + 5 = 15.' },
          { label: 'Step 4: omitting clauses', text: '```js\nfor (;;) {                  // infinite: omitted test means true\n  if (done()) break;        // escape hatch: break (Section 5.4)\n}\n```\nEvery clause is optional: an empty test is true forever; the initialize or increment can move out (or in) as needed. The semicolons, however, are load-bearing — a for header is exactly two semicolons, whatever sits around them.' }
        ],
        result: 'sum is 15, with the timing test-body-increment repeating five times and the final i === 6. for(;;) is the canonical infinite loop, exited by break.'
      },
      {
        title: 'Worked: for/in versus for/of on an array — and the safe object idioms',
        problem: 'An array carries a custom property and an object inherits one. Show what each loop sees, then filter for/in to own properties only.',
        steps: [
          { label: 'The code', text: '```js\nconst arr = ["x", "y", "z"];\narr.tag = "letters";\nfor (const k in arr) log(k);     // (1)\nfor (const v of arr) log(v);      // (2)\n\nconst parent = { inherited: true };\nconst child = Object.create(parent);\nchild.own = 1;\nfor (const k in child) log(k);   // (3)\nfor (const k in child) {\n  if (Object.hasOwn(child, k)) log(k);   // (4) filtered\n}\nfor (const k of Object.keys(child)) log(k); // (5) keys are own-only\n```' },
          { label: 'Step 1: (1) for/in on the array', text: 'Output: "0", "1", "2", "tag". Property names as STRINGS — including the custom tag property the iterator never sees. Arithmetic on them misbehaves ("0" + 1 is "01"), and the body needs arr[k] to reach a value at all.' },
          { label: 'Step 2: (2) for/of on the array', text: 'Output: "x", "y", "z". The iterator hands over element values only — no tag, no string keys, holes surfacing as undefined rather than being skipped. This is the array default.' },
          { label: 'Step 3: (3) for/in on the object — inheritance included', text: 'Output: "own", "inherited". The loop enumerates every enumerable string property up the prototype chain, not just the object’s own. For library-tainted objects, prototype pollution turns into surprise keys.' },
          { label: 'Step 4: (4) the hasOwn guard', text: 'Output: "own" only. Object.hasOwn(child, k) (or the older child.hasOwnProperty(k)) filters the loop to own properties — the defensive idiom to use whenever for/in meets objects you do not fully control.' },
          { label: 'Step 5: (5) the keys sidestep', text: 'Object.keys returns own enumerable property names only, so iterating its array with for/of gives "own" with no guard — and Object.entries(o) goes one better, yielding [name, value] pairs for destructuring. When in doubt, use the object statics (Section 6.4) instead of for/in.' }
        ],
        result: 'Same array, two loops, different worlds: names-with-strings-and-extras versus values-only. Own-property discipline comes from Object.hasOwn or the Object.keys/entries sidestep.'
      }
    ],
    keyTakeaways: [
      'while tests first (zero or more iterations); do/while tests last (at least one) and is the one loop whose required semicolon ASI will not supply.',
      'for runs initialize once, test before every iteration (including the first), increment after every body — all clauses optional, an omitted test looping forever.',
      'for/of iterates VALUES of iterables: arrays (holes as undefined), strings (by code point), Sets, Maps (entry arrays — destructure them). Plain objects are not iterable.',
      'await in a for/of body makes the loop sequential — deliberate for dependent work; Chapter 13 has the parallel patterns and the for await...of form for async sequences.',
      'for/in enumerates enumerable string property NAMES, own AND inherited; on arrays that means string indices plus any custom properties.',
      'Default: for/of for arrays; for/in only on plain objects, guarded with Object.hasOwn — or replaced by Object.keys/entries iteration.',
      'Three-clause for earns its keep when the index itself matters; everything else is cleaner as for/of or the array methods of Chapter 7.'
    ],
    quiz: [
      {
        q: 'How many times is the body of a do/while loop guaranteed to execute?',
        options: ['Zero or more — the test runs first', 'Exactly once — do/while does not loop', 'At least once — the body precedes the test', 'It depends on strict mode'],
        answer: 2,
        explanation: 'The do body executes before the condition is ever evaluated, so one iteration is the floor. Zero-iteration behavior requires a while (or for) instead.'
      },
      {
        q: 'In `for (let i = 0; i < n; i++)`, when does the increment run?',
        options: [
          'Before each test',
          'After the body of each iteration, before the next test',
          'Only once, after the loop ends',
          'Before the body of each iteration'
        ],
        answer: 1,
        explanation: 'The cycle is test, body, increment. That is why the loop variable holds the first failing value after exit — the increment runs, then the test fails.'
      },
      {
        q: 'What does `for (const x of someObj)` do when someObj is a plain object like { a: 1 }?',
        options: [
          'Iterates the values 1',
          'Iterates the keys "a"',
          'Throws TypeError: someObj is not iterable',
          'Executes zero iterations'
        ],
        answer: 2,
        explanation: 'for/of requires the iterable protocol (Chapter 12), and plain objects do not implement it. Use for/in, or iterate Object.keys/values/entries of the object.'
      },
      {
        q: 'For `const arr = ["a", "b"]; arr.extra = "!";`, what does `for (const k in arr)` log?',
        options: ['"a", "b"', '0, 1', '"0", "1", "extra"', 'It throws'],
        answer: 2,
        explanation: 'for/in yields property names as strings — the index keys "0" and "1" plus the custom property "extra". for/of is the loop that visits only the elements a, b.'
      },
      {
        q: 'Inside an async function, what does `for (const url of urls) { await fetch(url); }` guarantee?',
        options: [
          'All fetches start simultaneously',
          'Each fetch completes before the next iteration begins — sequential execution',
          'The loop body is skipped if a fetch is pending',
          'Nothing — await is not allowed in loop bodies'
        ],
        answer: 1,
        explanation: 'await pauses its function until the promise settles, so the next iteration starts only afterward. Parallel fetching is a deliberate Chapter 13 pattern (Promise.all), never an accident of the loop.'
      }
    ]
  },

  // ---------------------------------------------------------------- 5.4
  {
    sectionId: 'js-ch5-s4',
    readingTime: 11,
    intro: 'Jumps interrupt the top-to-bottom flow: break and continue leave loops early (with labels, out of several at once), return leaves a function, yield pauses a generator, and throw leaves the whole block in search of a handler. The try/catch/finally statement is where thrown exceptions land — with the rule that finally ALWAYS runs, even through a return, and that a finally of its own can override the outcome it interrupts. And one hazard belongs to every JavaScript engineer’s scar tissue: the return keyword followed by a newline.',
    objectives: [
      'Label statements and jump to labels with break and continue from inside nested loops',
      'Explain continue behavior in each loop form',
      'Apply return — and recognize the automatic-semicolon return hazard',
      'Throw any value, following the best practice of Error objects, and rethrow selectively',
      'Trace try/catch/finally including finally’s always-runs and override semantics'
    ],
    concepts: [
      {
        term: 'Labeled statements',
        kind: 'notation',
        statement: 'Any statement can carry a **label** — an identifier followed by a colon:\n```js\nmainloop: while (token !== null) {\n  // ...\n}\n```\nBy convention labels are plain identifiers (not reserved), indented alone on their line for big loops. They exist for exactly one audience: break and continue, which may name a label to jump out of or to the next iteration of an **enclosing** labeled loop. A label never changes control flow by itself.',
        detail: 'Labels can also mark blocks (`search: { break search; }`) for a mid-block exit — rarer, but legal. Chapter 4’s conditional expression covers choosing values; labels cover escaping structures.'
      },
      {
        term: 'break',
        kind: 'definition',
        statement: 'break exits the **nearest** enclosing loop or switch statement immediately. Its labeled form names a specific enclosing label and jumps past the end of THAT statement — the escape hatch for nested loops:\n```js\nouter: for (let r = 0; r < rows; r++) {\n  for (let c = 0; c < cols; c++) {\n    if (found(r, c)) break outer;   // leave BOTH loops\n  }\n}\n```\nAn unlabeled break in the inner loop would merely advance to the next row — the label is what makes the double exit one statement.',
        detail: 'break also ends switch cases (Section 5.2). It cannot jump backward — a break label must enclose the break lexically; a forward goto is not a thing JavaScript has.'
      },
      {
        term: 'continue',
        kind: 'definition',
        statement: 'continue skips the rest of the current iteration and starts the next one of the nearest enclosing LOOP (it is meaningless in a switch — that is not a loop). Its target depends on the loop: in a while, control goes to the **re-test**; in a for, to the **increment** (then the test); in a do/while, to the **bottom condition**. The labeled form, `continue label;`, skips to the next iteration of an OUTER labeled loop — useful for "abandon this inner pass and this outer item, next item":\n```js\nouter: for (const line of lines) {\n  for (const word of line.split(" ")) {\n    if (word === "SKIP") continue outer;  // next line, not next word\n    emit(word);\n  }\n}\n```',
        detail: 'Flanagan’s honest observation: continue is one of the less-used statements — a well-placed if around the body often reads better. The labeled form, though, has no cleaner substitute.'
      },
      {
        term: 'return and the ASI hazard',
        kind: 'law',
        statement: '`return expression;` terminates the function and delivers the expression’s value; a bare `return;` delivers undefined. The hazard is **automatic semicolon insertion** (Section 2.5): a line break between return and its expression makes ASI supply a semicolon, so the function returns undefined and the orphaned expression runs (unreachably) on the next line:\n```js\nfunction bad() {\n  return              // ASI inserts ; HERE\n    { ok: true };     // never reached as a value\n}\nbad();                // undefined, not { ok: true }\n```\nKeep the value on the same line as return — or open a parenthesis on that line and let the expression continue below.',
        detail: 'The same ASI rule affects ++, -- and arrow-parameter lists in minor ways, but return is the dangerous one because it silently produces undefined instead of erroring. Linters call it no-unexpected-multiline.'
      },
      {
        term: 'yield',
        kind: 'definition',
        statement: 'The **yield** keyword appears only inside generator functions (Chapter 12). `yield expression` hands the expression’s value out to the caller and **suspends** the generator right there — variable bindings, loop position, everything — until the caller asks for the next value:\n```js\nfunction* fib() {\n  let [a, b] = [0, 1];\n  for (;;) {\n    yield a;          // pause here, deliver a\n    [a, b] = [b, a + b];\n  }\n}\n```\nWhere return leaves, yield pauses — the statement that makes infinite sequences representable.',
        detail: 'yield is an operator-like statement form: like await (Section 4.7) it moves control between caller and callee without unwinding the stack. The full story — yield*, passing values back in, async generators — is Chapter 12’s.'
      },
      {
        term: 'throw',
        kind: 'definition',
        statement: '`throw expression;` raises an exception: the expression’s value is thrown, and the enclosing statements unwind until a catch handles it — or the program terminates with the error on the console. **Any value can be thrown** (`throw 42;` is legal), but the universal practice is to throw an **Error object**, because it carries a message and a stack trace:\n```js\nfunction factorial(n) {\n  if (n < 0) throw new RangeError("n must be non-negative");\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}\n```\nThe standard subclasses — TypeError, RangeError, SyntaxError and friends — are cataloged in Section 11.4.',
        detail: 'A thrown value that nothing catches propagates out of the function, the event handler or the promise chain it started in — the error surfaces wherever the runtime decides the buck stops. Never throw strings or numbers: catch blocks lose all structure.'
      },
      {
        term: 'try/catch/finally',
        kind: 'law',
        statement: 'The full exception-handling statement:\n```js\ntry {\n  // statements that might throw\n} catch (e) {\n  // runs ONLY if the try threw; e is the thrown value\n} finally {\n  // ALWAYS runs — after try, after catch, even through return/throw\n}\n```\nThe rules that matter: the **first** exception in try jumps directly to catch (skipping the rest of try); catch is optional-in-spirit (ES2019 even allows omitting the binding); and **finally runs no matter how the try or catch ended** — normal completion, return, break, continue, or an in-flight exception. If finally itself returns or throws, **it overrides** whatever was pending.',
        detail: 'The recommended catch discipline: inspect the exception (instanceof the expected types), handle what you recognize, and rethrow the rest — swallowing an unknown error with an empty catch is the classic anti-pattern.'
      }
    ],
    examples: [
      {
        title: 'Worked: break to a label from a nested loop',
        problem: 'Search a grid for a target value: exit both loops the moment it is found, and report the coordinates — then adapt the same structure to continue-to-label.',
        steps: [
          { label: 'The code', text: '```js\nconst grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];\nfunction find(grid, target) {\n  let found = null;\n  outer: for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[r].length; c++) {\n      if (grid[r][c] === target) {\n        found = [r, c];\n        break outer;            // exit BOTH loops at once\n      }\n    }\n  }\n  return found;                 // reached whether found or not\n}\nfind(grid, 5);                  // (1)\nfind(grid, 99);                 // (2)\n```' },
          { label: 'Step 1: label the outer loop', text: 'The label outer names the whole row loop. Labels are declarations of jump targets — inert until some break or continue names them.' },
          { label: 'Step 2: the hit and the double exit', text: '(1) Scanning row 1: grid[1][1] is 5 — found is set to [1, 1] — and `break outer` transfers past the END of the outer loop. Without the label, break would exit only the inner loop and the search would keep scanning row 2.' },
          { label: 'Step 3: the miss', text: '(2) No cell matches; the loops complete naturally, found stays null, and the single return after the label handles both outcomes — one exit point for a two-loop search.' },
          { label: 'Step 4: the continue variant', text: '```js\nouter: for (const line of lines) {\n  for (const word of line.split(" ")) {\n    if (word === "SKIP") continue outer;\n    emit(word);\n  }\n}\n```\nSame labeling, different jump: continue outer abandons the entire inner loop for THIS line and proceeds with the next line — "skip this record" as one statement instead of a flag and two breaks.' }
        ],
        result: 'find(grid, 5) returns [1, 1] having exited both loops; find(grid, 99) returns null. break label leaves; continue label skips to the next pass of the labeled loop.'
      },
      {
        title: 'Trace: the return newline pitfall',
        problem: 'A function returns an object literal, formatted onto its own line. What comes back — and why does the fix with parentheses work?',
        steps: [
          { label: 'The code', text: '```js\nfunction status(signedIn) {\n  return                  // <-- ASI inserts a semicolon here\n    { ok: signedIn };\n}\nstatus(true);              // (1)\n\nfunction fixed(signedIn) {\n  return {                // opening brace on the SAME line\n    ok: signedIn\n  };\n}\nfixed(true);               // (2)\n```' },
          { label: 'Step 1: ASI sees a complete statement', text: 'return on its own line cannot be continued by anything the parser expects next — the grammar treats a lone return as a complete statement, so a semicolon is inserted. The function has returned.' },
          { label: 'Step 2: the orphaned object is not even an object', text: 'The next line `{ ok: signedIn };` parses as a BLOCK — braces as a compound statement — containing `ok: signedIn` as a labeled expression statement (the label syntax of this section, in the wild). As a value it is unreachable code after the return: harmless, useless, invisible in the output.' },
          { label: 'Step 3: the result', text: '(1) status(true) is **undefined** — no error, no warning from the language itself; the bug type that costs an afternoon. (2) fixed(true) is { ok: true }, because keeping the opening brace (or any opening delimiter) on the return line defeats ASI: the statement is visibly incomplete.' },
          { label: 'Step 4: the habits', text: 'Three defenses: keep the expression on the return line; start multiline values with an opening delimiter on that line; and run the no-unexpected-multiline lint rule (Chapter 17) that flags exactly this shape. The same newline rule is why ++ and -- should never be split from their operand.' }
        ],
        result: 'The split return yields undefined and a dead block; the same-line brace returns the object. ASI is a convenience at line ends and a hazard at statement continuations.'
      },
      {
        title: 'Worked: finally always runs — and can override',
        problem: 'Trace three functions: a normal path, a handled-exception path, and a finally that returns of its own — then use the pattern to rethrow only what a catch cannot handle.',
        steps: [
          { label: 'The code', text: '```js\nfunction risky(n) {\n  if (n < 0) throw new RangeError("negative");\n  return n * 2;\n}\n\nfunction demo(n) {\n  try {\n    const v = risky(n);\n    return "got " + v;\n  } catch (e) {\n    if (e instanceof RangeError) return "handled: " + e.message;\n    throw e;                     // rethrow the unfamiliar\n  } finally {\n    log("finally: always");     // runs on every path\n  }\n}\n\ndemo(5);    // (1)\ndemo(-1);   // (2)\n\nfunction sneaky() {\n  try { return "from try"; }\n  finally { return "from finally"; }  // overrides!\n}\nsneaky();   // (3)\n```' },
          { label: 'Step 1: the happy path', text: '(1) risky(5) returns 10; the try completes normally with "got 10" pending as the return value. Before the function actually returns, finally runs — "finally: always" logs — and then the pending "got 10" is delivered.' },
          { label: 'Step 2: the handled exception', text: '(2) risky(-1) throws; the rest of the try is skipped; catch receives the RangeError, recognizes it with instanceof, and prepares "handled: negative". finally still runs — the log proves it — then the catch’s value returns. Unfamiliar exceptions take the other branch: `throw e` re-raises, and finally runs on the way OUT too, before the exception continues its search for a handler above.' },
          { label: 'Step 3: the override', text: '(3) The try computes "from try" — but before returning it, finally executes and returns "from finally" of its own. A finally return replaces the pending outcome; a finally throw would likewise replace a pending exception. The result is "from finally": proof that finally is not just cleanup, it is the last word.' },
          { label: 'Step 4: the design lesson', text: 'Use finally for cleanup that must happen (closing files, releasing locks, clearing "busy" flags) — work with no control-flow opinions. Never return or throw from finally except in rare, deliberate patterns: an innocent-looking return there silently discards errors and values alike.' }
        ],
        result: '(1) "got 10" with the log; (2) "handled: negative" with the log; (3) "from finally". finally runs on every exit path and, if it completes the function itself, wins.'
      }
    ],
    keyTakeaways: [
      'Labels (identifier: statement) are jump targets for break and continue — the double-exit and skip-to-next-item tools for nested loops.',
      'break leaves the nearest loop or switch (or the labeled statement); continue starts the next iteration — via the re-test in while, the increment in for, the bottom condition in do/while.',
      'return delivers a value and exits — but ASI turns return-plus-newline into return undefined; keep values (or their opening delimiter) on the return line.',
      'yield suspends a generator and hands out a value (Chapter 12); it pauses rather than leaves.',
      'Throw any value — but throw Error objects (or subclasses) so catch blocks get message and stack; rethrow what you cannot handle.',
      'finally ALWAYS runs — normal completion, return, break, continue, or exception — and a return/throw inside finally overrides the pending outcome; keep it to side-effect-free cleanup.'
    ],
    quiz: [
      {
        q: 'After `outer: for (...) { for (...) { break outer; } }`, where does execution continue?',
        options: [
          'At the next iteration of the outer loop',
          'Immediately after the END of the entire labeled (outer) statement',
          'At the next iteration of the inner loop',
          'It is a syntax error — labels cannot appear on for loops'
        ],
        answer: 1,
        explanation: 'break with a label transfers past the end of the labeled statement itself — both loops end together. Unlabeled break would have continued the outer loop instead.'
      },
      {
        q: 'In a for loop, `continue` transfers control to:',
        options: ['The initialize clause', 'The increment expression, then the test', 'The closing brace, ending the loop', 'The first statement of the body without testing'],
        answer: 1,
        explanation: 'continue means "start the next iteration": in a for it jumps to the increment, then the test decides whether the body runs again. In a while it jumps straight to the test.'
      },
      {
        q: 'What does this function return?\n```js\nfunction f() {\n  return\n    42;\n}\n```',
        options: ['42', 'undefined', 'null', 'A SyntaxError'],
        answer: 1,
        explanation: 'Automatic semicolon insertion completes the return statement at the line break, so the function returns undefined and the 42 is unreachable code. Keep the value on the return line.'
      },
      {
        q: 'A try block ends with `return "A";` and the finally block contains `return "B";`. What does the function return?',
        options: ['"A" — finally is cleanup only', '"B" — the finally return overrides the pending value', 'undefined — two returns conflict', 'It throws'],
        answer: 1,
        explanation: 'finally runs before the function actually returns, and a return inside it completes the function with ITS value — the pending "A" is discarded. This is why returns in finally are discouraged.'
      },
      {
        q: 'Which value SHOULD you throw to signal a programming-interface misuse?',
        options: [
          'A string: throw "bad argument";',
          'A number: throw 404;',
          'An Error subclass: throw new TypeError("expected a function");',
          'null — falsy and lightweight'
        ],
        answer: 2,
        explanation: 'Error objects (and subclasses like TypeError) carry message and stack — everything a catch block or a console needs. Strings and numbers lose that structure, and null throws away even the identity of the failure.'
      },
      // University-pattern: labeled break — exiting nested loops (original)
      {
        q: "What does this program print?\n```js\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) break outer;\n    console.log(i + ':' + j);\n  }\n}\n```",
        options: ["`0:0`, `1:0`, then `2:0`", "`0:0` only", "`0:0` then `0:1`", "Nothing is printed"],
        answer: 1,
        explanation: "Step 1: The code given nests two loops under the label `outer` and breaks that label when `j` reaches 1. Step 2: The governing rule is that a labeled `break` terminates the labeled statement entirely, exiting both loops at once, whereas a plain `break` would exit only the inner loop. Step 3: Tracing iteration by iteration, `i = 0, j = 0` prints `0:0`, then `j = 1` triggers `break outer`, which abandons the inner and outer loops together, so no further lines print. Step 4: The distractors fail because three lines would need a plain inner `break` per row, `0:1` would need the guard to print instead of break, and the first iteration does print before any break. Step 5: Therefore only `0:0` is printed."
      }
    ]
  },

  // ---------------------------------------------------------------- 5.5
  {
    sectionId: 'js-ch5-s5',
    readingTime: 9,
    intro: 'The chapter closes with the odds and ends — one statement the language has since forbidden, one that exists to talk to debuggers — and with strict mode: a five-character string that switches JavaScript into the less forgiving dialect ES5 introduced. Strict mode is where the accidental global, the silent property failure, the octal literal and the lying this of Section 4.2 all become loud errors instead of quiet bugs.',
    objectives: [
      'Read the with statement, and state why strict mode forbids it',
      'Use the debugger statement and know what it does without a debugger',
      'Write "use strict" correctly at file and function level, and know which contexts are strict automatically',
      'List strict mode’s behavioral changes: accidental globals, this coercion, octal literals, arguments.callee, duplicate parameters, failed writes and deletes'
    ],
    concepts: [
      {
        term: 'The with statement (forbidden)',
        kind: 'definition',
        statement: 'The legacy **with** statement temporarily made an object’s properties available as bare identifiers:\n```js\nwith (Math) {               // SyntaxError in strict mode\n  const r = 2 * sqrt(PI);  // meant Math.sqrt, Math.PI\n}\n```\nIt is now forbidden: strict mode makes it a parse-time SyntaxError, and ES6 modules and class bodies never allowed it. The reasons are structural — every identifier inside with becomes ambiguous (property of the object? outer variable? global?), so code is harder to read, refactor and optimize, and the scope chain grows a runtime-dependent link. Nothing of value was lost: write `Math.sqrt(Math.PI)`.',
        detail: 'with is the only ES3-era statement the language has actually removed from the strict dialect — the clearest precedent for why new code never uses it and linters reject it.'
      },
      {
        term: 'The debugger statement',
        kind: 'definition',
        statement: '`debugger;` is a breakpoint that lives in the source: **if a debugger program is attached, execution pauses there; if not, the statement does nothing at all**:\n```js\nfunction suspicious(o) {\n  if (o === undefined) debugger;   // pause here, devtools open\n  return process(o);\n}\n```\nIt was designed for era-of-console debugging; the modern practice is setting breakpoints in the browser or IDE — but a debugger line left in checked-in code is harmless (and occasionally useful for a colleague).',
        detail: 'No "debug mode" flag exists at runtime: the statement simply cooperates with whatever tooling is listening. It has no effect on production behavior, unlike the bugs it helps you find.'
      },
      {
        term: 'The "use strict" directive',
        kind: 'definition',
        statement: 'Strict mode is enabled by the **directive prologue** — a string literal statement at the very top of a script or function body:\n```js\n"use strict";            // everything below is strict\n\nfunction onlyInside() {\n  "use strict";         // this function only\n  // ...\n}\n```\nIt must be the first statement (a directive buried after code is just an inert string expression). ES6 modules and the bodies of ES6 classes are **always strict** — no directive needed — so most modern code is strict without ever writing the line.',
        detail: 'Because it is just a string expression, old interpreters that do not understand it run it harmlessly as a no-op — the design that let ES5 ship a new dialect without breaking the web.'
      },
      {
        term: 'Strict mode: scoping and this changes',
        kind: 'law',
        statement: 'The changes that bite the most code:\n```js\n"use strict";\noops = 42;              // ReferenceError — sloppy: creates a global!\nfunction f() { return this; }\nf() === undefined;      // true — sloppy: f() === globalThis\nlet n = 010;            // SyntaxError — legacy octal forbidden\nfunction g(a, a) {}     // SyntaxError — duplicate parameters\nfunction h() { return arguments.callee; }\nh();                    // TypeError — callee is off-limits\n```\nAccidental globals become errors; a plain function call binds **this to undefined** instead of the global object (the call-form rules of Section 4.2, made loud); legacy octal literals (`010` for 8) are rejected — write `0o10`; duplicate parameter names are rejected; and `arguments.callee` (self-reference without naming the function) is banned.',
        detail: 'The this change also means call/apply no longer box primitive receivers: in strict code, this stays the actual primitive (or undefined), which is why `this` can legitimately be a number in a strict function called with one.'
      },
      {
        term: 'Strict mode: property and syntax hardening',
        kind: 'law',
        statement: 'The changes that turn silent failure into exceptions:\n```js\n"use strict";\nconst o = Object.freeze({ x: 1 });\no.x = 2;                // TypeError — sloppy: silently ignored\ndelete o.x;            // TypeError — sloppy: returns false\ndelete Object.prototype; // TypeError — a protected property\nvar y = 1;\ndelete y;              // SyntaxError — deleting a bare identifier\n```\nAssigning to a non-writable property, deleting a non-configurable one, deleting an unqualified identifier — all escalate from quiet no-ops (or false) to thrown TypeErrors or SyntaxErrors. With statements are SyntaxErrors (above), function declarations become block-scoped where allowed, and reserved words are enforced as such.',
        detail: 'Every rule here is Section 4.6 and Section 4.7’s delete/assignment semantics in their strict clothing — the same operations, with failure no longer suppressed.'
      },
      {
        term: 'Adopting strict mode',
        kind: 'method',
        statement: 'Migration guidance: strict mode can be adopted **per function** (directive at the top of each function body) or per file — the practical pattern for a legacy codebase is wrapping a file’s contents in an IIFE with the directive inside (Section 8.4), because a top-of-file directive in a concatenated bundle would leak to every other file joined after it. New code needs none of this: **write modules (Section 10.3), which are strict by definition**, and let class bodies (Section 9.3) be strict automatically.',
        detail: 'Linters make the whole question mostly historical: Chapter 17’s ESLint configurations enable strictness rules by default, and the modern bundler pipeline (Chapter 17) works entirely in modules — where "use strict" is simply always true.'
      }
    ],
    examples: [
      {
        title: 'Trace: the this coercion, sloppy versus strict',
        problem: 'A method that increments this.count is called three ways, first in a sloppy script and then in a strict one. Predict all six outcomes.',
        steps: [
          { label: 'The code', text: '```js\nfunction Counter() {\n  this.count = 0;\n}\nCounter.prototype.bump = function () {\n  this.count++;\n  return this.count;\n};\nconst c = new Counter();\nc.bump();                    // (1) same in both modes\nconst loose = c.bump;\nloose();                     // (2) sloppy: ?   (3) strict: ?\ntry { loose(); } catch (e) { log(e.name); }\n```' },
          { label: 'Step 1: the method call is mode-independent', text: '(1) The call form c.bump() binds this to c in both modes — the method rule of Section 4.2 has no strict/sloppy split. count becomes 1.' },
          { label: 'Step 2: sloppy — the plain call globalizes this', text: '(2) In sloppy code a plain call binds this to the global object. this.count++ reads globalThis.count — undefined — and undefined++ is NaN: the increment writes NaN back as a NEW global property and returns it. No error, one corrupted global, a bug that can run for weeks.' },
          { label: 'Step 3: strict — the plain call fails fast', text: '(3) In strict code the same call binds this to undefined, so `this.count` throws `TypeError: Cannot set properties of undefined` at the very first access. The failure is immediate, at the scene, with a stack trace pointing at the exact line.' },
          { label: 'Step 4: reading the difference', text: 'Same function, same call — different worlds: sloppy mode quietly poisons the global object; strict mode throws. This is the strict-mode philosophy in one example: convert the silent failure modes of Sections 4.6–4.7 and this section into errors you cannot miss.' }
        ],
        result: '(1) 1 in both modes; (2) sloppy NaN with a new global; (3) strict TypeError. Loose this handling is a bug in both dialects — strict mode merely refuses to hide it.'
      },
      {
        title: 'Worked: six strict-mode changes, side by side',
        problem: 'Run one statement per behavioral change in both dialects and tabulate the outcomes.',
        steps: [
          { label: 'The battery', text: '```js\n// each line: sloppy result -> strict result\nundeclared = 42;        // global created -> ReferenceError\nlet n = 010;            // 8 -> SyntaxError (write 0o10)\nfunction dup(a, a) {}   // allowed -> SyntaxError\nfunction selfRef() {\n  return arguments.callee;  // the function -> TypeError\n}\nconst o = Object.freeze({ x: 1 });\no.x = 2;                // silently ignored -> TypeError\ndelete o.x;             // false -> TypeError\n```' },
          { label: 'Step 1: the undeclared assignment', text: 'Sloppy: `undeclared = 42` creates a property of the global object (Section 3.8’s accident). Strict: ReferenceError before anything is written. The typo in a variable name now fails at the typo, not three functions later.' },
          { label: 'Step 2: the syntax-era leftovers', text: 'Legacy octal `010` (value 8) was a decades-old confusion source — strict mode rejects it in favor of the explicit `0o10`; duplicate parameter names (`a, a`) were legal but parasitic — the second binding shadowed the first — and are now a SyntaxError; `arguments.callee` enabled anonymous recursion but broke engines’ inlining — now a TypeError.' },
          { label: 'Step 3: the property writes', text: 'On a frozen object, sloppy assignment is a silent no-op (the program continues as if it had succeeded) and sloppy delete merely returns false. Strict mode throws TypeError for both — and for deleting protected properties like Object.prototype. Failed writes stop the program where the failure happened.' },
          { label: 'Step 4: what strict mode is FOR', text: 'Every row is the same trade: sloppy mode’s answer is to continue with damage; strict mode’s answer is to stop with an explanation. That is why ES6 modules and classes made strict the DEFAULT — the language committee’s recommendation is visible in what new code cannot opt out of.' }
        ],
        result: 'Six behaviors flipped: accidental global, octal literal, duplicate params, arguments.callee, silent write failure, silent delete failure — each a quiet bug in sloppy code, a thrown error in strict.'
      }
    ],
    keyTakeaways: [
      'with (object) injected properties as identifiers — ambiguous, slow, and forbidden: a SyntaxError in strict code, never present in modules or classes.',
      'debugger; pauses execution only when a debugger is attached; otherwise it is a harmless no-op.',
      '"use strict" is a directive prologue string — top of file or function; ES6 modules and class bodies are strict automatically.',
      'Strict scoping: undeclared assignment throws ReferenceError; plain-call this is undefined (not globalThis); primitives passed as this stay unboxed.',
      'Strict syntax: legacy octal literals, duplicate parameter names and arguments.callee are all rejected.',
      'Strict properties: writing non-writable, deleting non-configurable or unqualified targets throw instead of silently failing or returning false.',
      'Modern code inherits strictness from modules — the directive itself is mostly a legacy-migration tool, and linters make the question historical.'
    ],
    quiz: [
      {
        q: 'What does `with (Math) { const r = sqrt(PI); }` do in strict mode?',
        options: [
          'Computes the square root of pi into r',
          'Throws a TypeError at runtime when with runs',
          'Is a SyntaxError — the statement is forbidden in strict code',
          'Creates a new scope that shadows Math’s properties'
        ],
        answer: 2,
        explanation: 'Strict mode removed with at the grammar level: the parser rejects it before the code ever runs. Modules and class bodies — always strict — never allowed it at all.'
      },
      {
        q: 'Where must "use strict" appear to take effect?',
        options: [
          'Anywhere in the file — it is a runtime function call',
          'As the first statement of the script or function body (the directive prologue)',
          'Only at the top of the file',
          'Only inside functions'
        ],
        answer: 1,
        explanation: 'Directives are recognized only in the prologue — the leading sequence of string-literal statements. Later in the code, "use strict" is an inert expression with no effect.'
      },
      {
        q: 'In sloppy mode, what does the assignment `oops = 42;` do when oops was never declared?',
        options: [
          'Throws a ReferenceError',
          'Creates a property on the global object — a new global variable',
          'Creates a local variable in the enclosing function',
          'Nothing — the assignment is discarded'
        ],
        answer: 1,
        explanation: 'Assignment to an undeclared name writes to the global object — the accidental global of Section 3.8. Strict mode changes the answer to a ReferenceError.'
      },
      {
        q: 'Which failure becomes a TypeError in strict mode but a silent no-op in sloppy mode?',
        options: [
          'Calling a method with the wrong this',
          'Assigning to a property of a frozen (non-writable) object',
          'Reading an undeclared variable',
          'Declaring two variables with the same let name'
        ],
        answer: 1,
        explanation: 'Sloppy mode continues past the failed write as if it succeeded; strict mode throws at the attempt. Reading undeclared variables throws in both modes, and duplicate let declarations are a SyntaxError in both.'
      },
      {
        q: 'In strict mode, what is `this` inside a function invoked as a plain call — `f()` rather than `o.f()`?',
        options: ['The global object', 'undefined', 'null', 'The function itself (arguments.callee)'],
        answer: 1,
        explanation: 'Strict mode does not coerce a missing receiver to the global object: a plain call binds this to undefined. Sloppy mode binds it to globalThis — the difference the worked example traced.'
      }
    ]
  }
]
