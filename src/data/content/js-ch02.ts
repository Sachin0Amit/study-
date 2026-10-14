import type { SectionContent } from '../library'

// ============================================================================
// Flanagan, JavaScript: The Definitive Guide, 7th Edition
// Chapter 2: Lexical Structure (Sections 2.1 – 2.5)
// Master study content.
// ============================================================================

export const jsCh2Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'js-ch2-s1',
    readingTime: 6,
    intro: 'The lexical structure of a programming language is the set of elementary rules that specify how you write programs in that language — the lowest-level syntax: what counts as one token versus another, what variable names look like, how comments are delimited, and how one statement is separated from the next. This section covers the character-level ground rules: JavaScript is case sensitive, and it is mostly indifferent to your spaces and line breaks.',
    objectives: [
      'State the case-sensitivity rule and predict which identifiers collide',
      'List the characters JavaScript treats as whitespace and as line terminators',
      'Explain why formatting freedom does not extend to line breaks next to certain tokens'
    ],
    concepts: [
      {
        term: 'Case sensitivity',
        kind: 'law',
        statement: 'JavaScript is a **case-sensitive** language: keywords, variables, function names and all other identifiers must always be typed with a consistent capitalization of letters. The `while` keyword must be typed "while", not "While" or "WHILE". Similarly, `online`, `Online`, `OnLine` and `ONLINE` are **four distinct variable names**.',
        detail: 'This bites programmers coming from HTML (case-insensitive tag and attribute names) when they move to client-side JavaScript: `getElementById` is not `getElementbyID`. Consistency in capitalization is the cure.'
      },
      {
        term: 'Whitespace is ignored',
        kind: 'definition',
        statement: 'JavaScript ignores spaces that appear **between tokens** in programs. Beyond the regular space character (\\u0020), the whitespace set includes tabs, assorted ASCII control characters, and various Unicode space characters. Because you can use spaces freely, you can format and indent programs in a neat, consistent way that makes code easy to read and understand.',
        detail: 'Whitespace is required only where it separates tokens that would otherwise fuse: `let x` cannot be written `letx`. Otherwise the engine discards it.'
      },
      {
        term: 'Line terminators are (mostly) ignored',
        kind: 'law',
        statement: 'For the most part, JavaScript also ignores line breaks — but with an important exception: the automatic semicolon insertion rules of Section 2.5 mean some line breaks **do** change the meaning of your program. The recognized line terminators are the newline (\\n), the carriage return (\\r), and the carriage-return/line-feed sequence (\\r\\n).',
        detail: 'A program may be written as one enormous line or spread elegantly over many; both parse the same, provided no line break splits a token or triggers the ASI rules of Section 2.5.'
      },
      {
        term: 'Tokens and the longest match',
        kind: 'definition',
        statement: 'The tokenizer splits source into **tokens**: identifiers, keywords, numeric and string literals, and punctuators such as `+`, `++`, `=>`, `(`, `{`. It always takes the **longest valid token** starting at each position, so `a+++b` tokenizes as `a ++ + b`, never as `a + ++ b` by choice.',
        detail: 'Whitespace matters exactly at token boundaries: it prevents two adjacent identifier characters or digits from fusing into one longer token. `let x` is keyword + identifier; `letx` is a single identifier because the space that separated the tokens is gone.'
      },
      {
        term: 'Line breaks that matter: preview of ASI hazards',
        kind: 'insight',
        statement: 'Most line breaks are plain whitespace, but three positions turn a break into a terminator: after `return`, `throw`, `break`, `continue` or `yield` before its expression; between a postfix `++`/`--` and its operand; and between an arrow parameter list and `=>`. A line starting with `(` or `[` can also glue itself to the previous line as a call or index.',
        detail: 'So `return\\ntrue` returns `undefined` and `x\\n++` is two statements, while `let y = x + f\\n(a+b).toString()` parses as one call `f(a+b)`. Section 2.5 states the full rule; the habit starts here: never break after a jump keyword, and never start a statement with `(` or `[` without a guarding semicolon.'
      }
    ],
    examples: [
      {
        title: 'Trace: which of these are the same name?',
        problem: 'A program declares `let online = 1;`. For each reference below, decide whether it refers to that same binding, or to something new (or an error).',
        steps: [
          { label: 'Step 1', text: '```js\nOnline\n```\nCapital O. Identifiers are compared character by character, and "O" (U+004F) is not "o" (U+006F). This is a **different identifier** — reading it before any declaration of its own throws a ReferenceError.' },
          { label: 'Step 2', text: '```js\nOnLine\n```\nA third distinct identifier — the internal capital L differs again. Four spellings, four names.' },
          { label: 'Step 3', text: '```js\nONLINE\n```\nYet a fourth. Only the exact sequence `online` refers to the declared variable. The lesson: pick one spelling convention (the book uses camelCase) and keep every reference identical.' },
          { label: 'Step 4', text: '```js\nwhile (x) {}   // ok\nWhile (x) {}    // While is NOT the while keyword\n```\nThe same rule governs keywords: capitalizing `While` turns the keyword into a plain identifier, which is a syntax error when used where a statement is expected.' }
        ],
        result: 'online, Online, OnLine and ONLINE are four unrelated names; keywords are case sensitive in exactly the same way.'
      },
      {
        title: 'Trace: spaces that fuse and breaks that do not',
        problem: 'Predict how the engine tokenizes each fragment:\n```js\nlet x = 2;\nletx = 2;\nlet a\na = 3\nreturn\ntrue\n```',
        steps: [
          { label: 'Step 1', text: '```js\nlet x = 2;\n```\nThree tokens before the value: keyword `let`, identifier `x`, punctuator `=`. The spaces separate `let` from `x` so the tokenizer sees two names, not one.' },
          { label: 'Step 2', text: '```js\nletx = 2;\n```\nNo separator: the tokenizer takes the longest identifier `letx` — one name. In strict mode this is a syntax error (no declaration); in sloppy mode it assigns to an accidental global named `letx`.' },
          { label: 'Step 3', text: '```js\nlet a\na = 3\n```\nThe line break between `a` and `a` cannot continue one statement (`let a a` is unparseable), so it acts as a separator: `let a; a = 3;`. Reformatting the same tokens onto one enormous line without a `;` would fail — breaks help only where a semicolon could go.' },
          { label: 'Step 4', text: '```js\nreturn\ntrue\n```\nThe break after `return` always terminates (Section 2.5 exception 1): `return; true;`. The function returns `undefined` and `true` is dead code — the preview of why some breaks matter.' }
        ],
        result: 'Spaces separate tokens that would fuse (`let x` vs `letx`); line breaks separate statements only where parsing needs a boundary — and after `return` the break always ends the statement.'
      }
    ],
    keyTakeaways: [
      'Lexical structure = the lowest-level rules of the language: tokens, comments, literals, identifiers, Unicode and semicolons.',
      'JavaScript is case sensitive: `while`, `While` and `WHILE` are different, and `online`/`Online`/`OnLine`/`ONLINE` are four distinct variable names.',
      'Spaces and line breaks between tokens are ignored — you may format and indent freely.',
      'Whitespace includes the regular space, tabs, ASCII control characters and Unicode spaces; line terminators are newline (\\n), carriage return (\\r) and the \\r\\n pair.',
      'Line breaks are not always inert: the automatic semicolon insertion rules of Section 2.5 can turn a line break into a statement separator.'
    ],
    quiz: [
      {
        q: 'How many distinct variables are named by the identifiers `id`, `ID`, `Id` and `iD`?',
        options: ['1', '2', '4', 'It depends on whether the program is in strict mode'],
        answer: 2,
        explanation: 'JavaScript identifiers are case sensitive and compared character by character, so four spellings that differ in the capitalization of i and d name four different variables.'
      },
      {
        q: 'Which of the following is NOT treated as a line terminator by JavaScript?',
        options: ['newline (\\n)', 'carriage return (\\r)', 'carriage return / line feed sequence (\\r\\n)', 'form feed (\\f)'],
        answer: 3,
        explanation: 'Form feed is in the whitespace/control set, not the line-terminator set — the terminators are newline, carriage return, and the CR/LF pair, and only these interact with semicolon insertion.'
      },
      {
        q: 'You delete all spaces from the line `let x = 2;` producing `letx=2;`. What happens?',
        options: [
          'It still works: JavaScript ignores all spaces',
          'It is a syntax error (or creates a variable named letx): whitespace separated the keyword let from the variable name',
          'It assigns 2 to the existing global variable letx, always',
          'Strict mode rejects it but sloppy mode accepts it'
        ],
        answer: 1,
        explanation: 'Spaces are ignored only BETWEEN tokens. Removing the space between let and x fuses them into the single identifier letx, so the statement becomes an assignment to a (possibly undeclared) variable named letx — a syntax error in strict mode, an accidental global otherwise.'
      }
    ]
  },

  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'js-ch2-s2',
    readingTime: 7,
    intro: 'Two small topics share this section: comments — the two ways JavaScript lets you embed prose for humans inside code for machines — and literals, the values written directly in the source. Every value a program ever manipulates starts life either as a literal, as input, or as the result of an operator or function.',
    objectives: [
      'Write both comment styles and explain why block comments cannot nest',
      'Define “literal” and identify literals of each type in a line of code',
      'Preview the literal forms detailed in Chapter 3 (numbers, strings) and Chapter 4 (object and array initializers)'
    ],
    concepts: [
      {
        term: 'Comments',
        kind: 'notation',
        statement: 'JavaScript supports two comment styles. Any text between `//` and the end of a line is a comment and is ignored. Any text between `/*` and `*/` is also a comment; these may span multiple lines but **may not be nested**:\n```js\n// This is a single-line comment.\n\n/* This is also a comment */  // and here is another one.\n\n/*\n * This is a multi-line comment. The extra * characters at the start of\n * each line are not a required part of the syntax; they just look cool!\n */\n```',
        detail: 'The multi-line style is often written with a decorative star at the start of each line. The single-line style is preferred for short notes because it cannot accidentally swallow code beyond the line.'
      },
      {
        term: 'Literals',
        kind: 'definition',
        statement: 'A **literal** is a data value that appears directly in a program. The following are all literals:\n```js\n12            // The number twelve\n1.2           // The number one point two\n"hello world" // A string of text\n\u0027Hi\u0027          // Another string\ntrue          // A Boolean value\nfalse         // The other Boolean value\nnull          // Absence of an object\n```',
        detail: 'Compare with names: `twelve` is an identifier that might hold 12; `12` is the value itself. Complete details on numeric and string literals appear in Chapter 3; object `{x: 1, y: 2}` and array `[1, 2, 3]` initializers — sometimes called object and array literals, though they are built from subexpressions — are in Chapter 4.'
      },
      {
        term: 'The `// =>` convention in examples',
        kind: 'notation',
        statement: 'The book’s example comments frequently begin with an arrow: `// => 42` shows the value produced by the preceding code; `// a == 42` means the variable `a` holds 42 after the code runs; and `// !` marks a line that throws an exception. These double as executable assertions.',
        detail: 'When you copy examples into your own environment, the comments can become real checks — assert the printed value equals the comment, and you have caught your first typo.'
      },
      {
        term: 'Number and string literal flavors (preview)',
        kind: 'notation',
        statement: "Chapter 3 details the spellings: decimal `12`, hex `0xFF`, binary `0b101`, octal `0o17`, separators `1_000_000`, exponents `1.2e3`; strings in single 'Hi', double \"hello world\" or backtick `hi ${name}` quotes. The quote choice never changes the value — only what needs escaping inside.",
        detail: 'A leading `0x`, `0b` or `0o` switches base for integer literals; an underscore between digits is ignored (`1_000 === 1000`). Backtick strings are template literals (Chapter 3 and Section 14.4): the only strings that interpolate `${...}`.'
      },
      {
        term: 'Object and array initializers as composite literals',
        kind: 'definition',
        statement: 'The expressions `{x: 1, y: 2}` and `[1, 2, 3]` are called **object and array literals** (or initializers): they build a fresh object or array from a comma-separated list of subexpressions. Unlike simple literals they are evaluated — each element expression runs — and trailing commas are allowed.',
        detail: '```js\nconst point = { x: 1 + 1, y: Math.sqrt(4) };  // values computed, then stored\nconst sparse = [1, , 3];                     // a hole at index 1\n```\nFull rules appear in Chapter 4; the point here is birthplace: every object and array value starts as one of these two bracketed forms.'
      }
    ],
    examples: [
      {
        title: 'Trace: a commented, literal-heavy line',
        problem: 'Annotate every token of this statement as comment, literal, identifier or keyword, then say what the engine keeps.',
        steps: [
          { label: 'The code', text: '```js\nlet speed = 299792.458; // speed of light, km/s\n/* old value: 186282 miles per second */\n```' },
          { label: 'Step 1: Keywords and identifiers', text: '`let` is a keyword introducing a declaration; `speed` is the identifier being declared. Neither is a value.' },
          { label: 'Step 2: The literal', text: '`299792.458` is a floating-point numeric literal — a real number written as integral part, decimal point, and fractional part. It is the only data value in the statement.' },
          { label: 'Step 3: What the engine discards', text: 'The `//` comment to end of line and the `/* ... */` block comment are both stripped after tokenization. The engine never evaluates the number 186282 — comments are not code.' },
          { label: 'Step 4: The result', text: 'After execution, the binding `speed` refers to the number 299792.458 — the literal is the value’s birthplace.' }
        ],
        result: 'One keyword, one identifier, one literal, two ignored comments: the entire statement reduces to binding speed to the value 299792.458.'
      },
      {
        title: 'Why block comments do not nest',
        problem: 'A programmer comments out a region that already contains a block comment. What goes wrong?',
        steps: [
          { label: 'The code', text: '```js\n/* outer comment begins\nlet x = 1;  /* inner note: initialize x */\nlet y = 2;\n*/   // programmer intended this to end the outer comment\n```' },
          { label: 'Step 1: The engine scans for the first */', text: 'A block comment ends at the **first** `*/` it encounters — the one after "initialize x". The engine does not track nesting depth at all.' },
          { label: 'Step 2: What re-enters the program', text: 'The text `let y = 2;` is now live code again, and the trailing `*/` on the last line is parsed as operators — a syntax error. The region between the two inner stars was never commented out.' },
          { label: 'Step 3: The fix', text: 'To disable a region containing `/* */`, comment it line by line with `//`, or temporarily delete. Single-line comments are nestable precisely because each ends at its own line end.' }
        ],
        result: 'The first */ closes the whole comment; code after it becomes live and the stray final */ is a syntax error. Use // for commenting-out and /* */ only for prose blocks.'
      }
    ],
    keyTakeaways: [
      'Two comment styles: // to end of line, and /* … */ across lines; block comments cannot nest.',
      'A literal is a value written directly in source: numbers, strings, true/false, null (and later object/array initializers and regex literals).',
      'Comments are stripped by the tokenizer — the engine never evaluates their contents.',
      'The book’s // => value comments double as verified assertions of what the code produces.',
      'Use single-line comments to disable code: they nest safely; block comments do not.'
    ],
    quiz: [
      {
        q: 'Which one of these lines contains a literal?',
        options: [
          'let total;', 
          'count++', 
          'x = null;', 
          '// set x to 3'
        ],
        answer: 2,
        explanation: 'null is one of the literals listed in the chapter (the absence of an object); the other lines contain a keyword/identifier, an operator on a name, and a comment — and the 3 in the comment is stripped before evaluation.'
      },
      {
        q: 'What is wrong with this attempt to comment out a region?\n```js\n/* disable this:\nlet a = 1;  /* note */\nlet b = 2;\n*/\n```',
        options: [
          'Nothing — block comments nest in ES6 and later',
          'The comment ends at the first */ (after “note”), so `let b = 2;` becomes live code and the final */ is a syntax error',
          'Block comments must start with more than one asterisk',
          'Comments cannot span more than two lines'
        ],
        answer: 1,
        explanation: 'A /* comment runs only until the very next */, regardless of intent or nesting; everything after that first closer is parsed as code again.'
      },
      {
        q: 'Which of the following is NOT a literal?',
        options: ['`1.2`', '`"hello world"`', '`true`', '`answer`'],
        answer: 3,
        explanation: 'answer is an identifier — a name for a value, not a value written directly. Numbers, strings, true/false and null are all literals.'
      }
    ]
  },

  // ---------------------------------------------------------------- 2.3
  {
    sectionId: 'js-ch2-s3',
    readingTime: 8,
    intro: 'Identifiers are simply names: they label constants, variables, properties, functions and classes, and provide labels for loops. JavaScript’s naming rules are permissive — letters, digits, underscores and dollar signs — but a sizeable set of words is reserved for the language itself. Knowing which words are forbidden, and which merely contextual, prevents a whole family of confusing syntax errors.',
    objectives: [
      'State the rules for legal identifiers: first character and subsequent characters',
      'Explain why digits cannot start an identifier',
      'Recognize the reserved words and the future-reserved list',
      'Explain contextual keywords: why `from`, `of`, `get`, `set` and `target` remain safe, and why `let` is complicated'
    ],
    concepts: [
      {
        term: 'Identifier syntax',
        kind: 'notation',
        statement: 'An **identifier** is simply a name. A JavaScript identifier must begin with a **letter**, an **underscore** (`_`), or a **dollar sign** (`$`). Subsequent characters can be letters, digits, underscores, or dollar signs. These are all legal:\n```js\ni\nmy_variable_name\nv13\n_dummy\n$str\n```',
        detail: 'Digits are not allowed as the first character so that JavaScript can easily distinguish identifiers from numbers: seeing a digit at the start of a token tells the tokenizer, unambiguously, that a numeric literal is under way.'
      },
      {
        term: 'Reserved words',
        kind: 'definition',
        statement: 'JavaScript reserves certain identifiers for use by the language itself; these "reserved words" cannot be used as the names of constants, variables, functions, or classes — though they **can** all be used as the names of properties within an object. The reserved list:\n```js\nas       const     export      get          null      target    void\nasync    continue  extends     if           of        this      while\nawait    debugger  false       import       return    throw     with\nbreak    default   finally     in           set       true      yield\ncase     delete    for        instanceof   static    try\ncatch    do        from        let          super     typeof\nclass    else      function   new          switch    var\n```',
        detail: 'Two groups deserve extra care. First, `arguments` and `eval` are not allowed as identifiers in certain circumstances and are best avoided entirely. Second, the so-called "soft" words — `get`, `set`, `from`, `of`, `static`, `as`, `target` — are reserved only in limited contexts and are perfectly legal as ordinary identifiers; the book singles out `from`, `set` and `target` as safe and already in common use.'
      },
      {
        term: 'The `let` complication',
        kind: 'insight',
        statement: 'Some keywords — notably `let` — cannot be fully reserved without breaking older programs that used them as variable names. So there are complex rules governing when `let` can be an identifier and when it cannot: `let` can be a variable name if declared with `var` outside a class, for example, but not when declared inside a class or with `const`. **The simplest course is to avoid using any of these words as identifiers**, except for `from`, `set` and `target`.',
        detail: 'You will never need this knowledge to write good code — treat the whole reserved list as taken, and the three safe words as available.'
      },
      {
        term: 'Future reserved words',
        kind: 'definition',
        statement: 'JavaScript also reserves or restricts keywords that are **not currently used** by the language but might be in future versions:\n```js\nenum    implements   interface   package   private   protected   public\n```',
        detail: 'These words (familiar from Java) are mostly restricted only in strict-mode code and class bodies — but as with `let`, the practical advice is simply: never use them as names.'
      },
      {
        term: 'arguments and eval are poison names',
        kind: 'law',
        statement: '`arguments` and `eval` are not on the reserved list, but they are **restricted as identifiers**: in strict mode neither may name a variable, function, parameter or catch binding, and assigning to `eval` breaks the indirect-eval machinery of Section 3.6. The book rule is blunt: never use either as a name in any mode.',
        detail: '```js\nlet eval = 1;        // SyntaxError in strict mode (modules, classes)\nfunction f(arguments) {}  // SyntaxError in strict mode\n```\nEven where sloppy mode permits them, shadowing `eval` disables the `eval(x)` function and shadowing `arguments` hides the call arguments object — two silent breakages for one saved name.'
      },
      {
        term: 'Property names are not identifiers',
        kind: 'insight',
        statement: 'After a dot, any reserved word is legal (`o.class`, `o.for`, `o.while`); inside brackets, any string is legal (`o["my-var"]`, `o["two words"]`). Property position has no reserved list — only variable, function, class and parameter positions do.',
        detail: '```js\nconst o = { class: "CS", for: 4 };  // legal: property names\no.while;                            // legal read\no["my-var"] = 1;                    // dashes need brackets, not dots\n```\nQuoted keys also allow names no identifier could spell — the reason JSON-style data (`{"first-name": "Ada"}`) always uses brackets or quotes.'
      }
    ],
    examples: [
      {
        title: 'Trace: legal versus illegal names',
        problem: 'Classify each of these proposed variable names as legal or illegal, and explain each verdict.',
        steps: [
          { label: 'Name 1', text: '```js\nlet $str = "money";\n```\n**Legal.** `$` is allowed as a first character and beyond — a legacy of generated code (and jQuery’s famous `$` function).' },
          { label: 'Name 2', text: '```js\nlet v13 = 13;\n```\n**Legal.** Digits are fine as long as they are not the first character.' },
          { label: 'Name 3', text: '```js\nlet 3v = 3;\n```\n**Illegal.** A leading digit marks the token as a numeric literal, so "3v" is not even tokenizable as a name. The tokenizer must be able to distinguish identifiers from numbers at a glance — this rule is why.' },
          { label: 'Name 4', text: '```js\nlet my_variable_name = 1;\n```\n**Legal.** Underscores are permitted anywhere. Snake_case like this is a legal (if un-idiomatic) alternative to camelCase.' },
          { label: 'Name 5', text: '```js\nlet class = "CS";\n```\n**Illegal.** `class` is a reserved word. Use it as an object **property** and it is fine: `const o = { class: "CS" };` — reserved words are barred as identifiers, not as property names.' },
          { label: 'Name 6', text: '```js\nlet _dummy;\n```\n**Legal.** Leading underscore, common convention for "internal, ignore me" parameters and fields.' }
        ],
        result: 'Legal: `$str`, `v13`, `my_variable_name`, `_dummy`. Illegal: `3v` (leading digit), `class` (reserved). Reserved words remain usable as property names — only identifier roles are barred.'
      },
      {
        title: 'Trace: reserved, soft, or property-only?',
        problem: 'For each fragment, say whether it parses and why:\n```js\nlet from = 1;\nlet enum = 1;\nconst o = { while: 5 };\no.while;\nlet eval = 1;\n```',
        steps: [
          { label: 'Step 1', text: '```js\nlet from = 1;\n```\n**Legal.** `from` is a soft/contextual word (import/export syntax only) — the book lists `from`, `set`, `target` as safe. It names a variable with no restriction.' },
          { label: 'Step 2', text: '```js\nlet enum = 1;\n```\n**Illegal in strict mode.** `enum` is future-reserved: modules, classes and all strict code forbid it as a name. The fix is any other spelling — the reservation exists so a future `enum` declaration cannot silently capture your variable.' },
          { label: 'Step 3', text: '```js\nconst o = { while: 5 };\no.while;   // => 5\n```\n**Legal.** Property position has no reserved list: `while` as a key and after a dot is an ordinary name. The same word as a variable (`let while`) would be a syntax error.' },
          { label: 'Step 4', text: '```js\nlet eval = 1;\n```\n**SyntaxError in strict mode; dangerous everywhere.** `eval` is restricted, not reserved: strict mode bans it as a binding, and sloppy-mode use shadows the `eval()` function. Rename to `result` or `value` — no program needs this collision.' }
        ],
        result: '`from` is safe, `enum` is future-reserved (strict-mode error), `while` is property-only, `eval` is poison in every mode. Identifier rules depend on position: variable slots are strict, property slots are free.'
      }
    ],
    keyTakeaways: [
      'An identifier starts with a letter, `_` or `$`; subsequent characters may also be digits.',
      'Digits cannot start an identifier so the tokenizer can tell numbers from names.',
      'Reserved words (`if`, `while`, `class`, `yield`, …) cannot name constants, variables, functions or classes — but all of them can name object properties.',
      'Some words are contextual or soft (`from`, `of`, `get`, `set`, `target`): usable as identifiers; `let` has complicated rules — avoid the entire list when naming.',
      'Future-reserved words to avoid: enum, implements, interface, package, private, protected, public.',
      'Avoid `arguments` and `eval` as identifiers entirely; they are restricted in certain circumstances.'
    ],
    quiz: [
      {
        q: 'Which of these is NOT a legal JavaScript identifier?',
        options: ['`_dummy`', '`$str`', '`v13`', '`13v`'],
        answer: 3,
        explanation: 'Identifiers cannot begin with a digit — a leading digit signals a numeric literal to the tokenizer. The other three are explicitly listed as legal names in the chapter.'
      },
      {
        q: 'Why does JavaScript forbid digits as the first character of an identifier?',
        options: [
          'It is a leftover from the Java language and has no effect',
          'So that the tokenizer can easily distinguish identifiers from numeric literals',
          'Because identifiers are stored as numbers internally',
          'It is only forbidden in strict mode'
        ],
        answer: 1,
        explanation: 'Seeing a digit first tells the tokenizer unambiguously that a numeric literal has begun, which keeps the two token classes trivially separable.'
      },
      {
        q: 'You write `const o = { for: 4, while: 5 };`. What happens?',
        options: [
          'A syntax error: reserved words cannot appear in object literals',
          'It works: reserved words cannot be identifiers, but they can be property names',
          'It works only in strict mode',
          'The properties are silently renamed to for_ and while_'
        ],
        answer: 1,
        explanation: 'The chapter notes that reserved words can all be used as the names of properties within an object — the restriction applies to naming constants, variables, functions and classes.'
      },
      {
        q: 'Which statement about the word `let` is correct, per the chapter?',
        options: [
          '`let` is fully reserved and can never be used as a variable name in any context',
          '`let` can never be used as a variable name declared with var',
          'Because of backward compatibility, `let` has complicated rules: it can be a var-declared variable name outside a class, but not a const-declared one or one inside a class',
          '`let` is one of the three words (with from and set) explicitly recommended for free use'
        ],
        answer: 2,
        explanation: 'To keep old code working, `let` cannot be fully reserved, so its usability as an identifier depends on declaration form and context — the simplest course is to avoid it (and the rest of the reserved list) entirely.'
      },
      {
        q: 'Which word is on JavaScript’s list of reserved-for-the-future words?',
        options: ['`enum`', '`async`', '`await`', '`debugger`'],
        answer: 0,
        explanation: 'enum belongs with implements, interface, package, private, protected and public as words reserved or restricted for possible future use; the others are all active keywords today.'
      }
    ]
  },

  // ---------------------------------------------------------------- 2.4
  {
    sectionId: 'js-ch2-s4',
    readingTime: 8,
    intro: 'JavaScript programs are written using the Unicode character set, and any Unicode character may appear in strings and comments. Identifiers are more restricted — Unicode letters, digits and ideographs are allowed, but not emojis — and any character can be spelled with an ASCII-only escape sequence. The section closes with the sneakiest hazard in the chapter: two visually identical strings can be encoded two different ways, and JavaScript will not normalize them for you.',
    objectives: [
      'Use non-ASCII characters legally in identifiers, strings and comments',
      'Write Unicode escape sequences in both forms: `\\uXXXX` and `\\u{XXXXXX}`',
      'Explain when each escape form is needed (pre-ES6 vs codepoints above 16 bits)',
      'Recognize the Unicode normalization hazard and the two encodings of “é”'
    ],
    concepts: [
      {
        term: 'Unicode in programs',
        kind: 'definition',
        statement: 'JavaScript programs are written using the **Unicode character set**, and you can use any Unicode characters in strings and comments. For portability and ease of editing, it is common to use only ASCII letters and digits in identifiers — but that is a convention only: the language allows Unicode letters, digits and ideographs (though **not emojis**) in identifiers:\n```js\nconst \u03C0 = 3.14;   // A Greek letter as a constant name\nconst s\u00ED = true;     // A Spanish word\n```',
        detail: 'Programmers can use mathematical symbols and words from non-English languages as constants and variables — a small courtesy of the language’s design that real, international codebases do use.'
      },
      {
        term: 'Unicode escape sequences',
        kind: 'notation',
        statement: 'To support systems that cannot display, input, or correctly process the full Unicode set, JavaScript defines **escape sequences** that write Unicode characters using only ASCII. Escapes begin with `\\u` and are either followed by **exactly four hexadecimal digits**, or by **one to six hexadecimal digits enclosed in curly braces**:\n```js\nlet caf\u00E9 = 1;       // Define a variable using a Unicode character\ncaf\\u00e9            // => 1: access it via a 4-digit escape\ncaf\\u{E9}            // => 1: same escape, curly-brace form\n```',
        detail: 'Unicode escapes may appear in string literals, regular expression literals, and identifiers — but **not** in language keywords. In comments they are allowed but never interpreted, since comments are ignored.'
      },
      {
        term: 'The ES6 curly-brace form and emoji',
        kind: 'insight',
        statement: 'Early versions of JavaScript only supported the four-digit escape. The curly-brace version was introduced in ES6 to support Unicode **codepoints that require more than 16 bits**, such as emoji:\n```js\nconsole.log("\\u{1F600}");   // Prints a smiley face emoji\n```',
        detail: 'A codepoint like U+1F600 cannot fit in four hex digits (max U+FFFF), so before ES6 there was no escape for it. The two-form system is also the bridge to Chapter 3’s discussion of UTF-16 code units, where the same emoji occupies a length of 2 in a string.'
      },
      {
        term: 'Unicode normalization',
        kind: 'law',
        statement: 'Unicode allows more than one way to encode the same character. The string "é" can be encoded as the single codepoint \\u00E9, **or** as a regular ASCII "e" followed by the acute-accent **combining mark** \\u0301. The two encodings typically look exactly the same in an editor but have different binary values — so JavaScript considers them different, which can produce two visually indistinguishable constants:\n```js\nconst caf\u00E9 = 1;   // This constant is named caf\\u{e9}\nconst cafe\u0301 = 2; // This constant is different: cafe\\u{301}\ncaf\u00E9            // => 1: this constant has one value\ncafe\u0301            // => 2: this indistinguishable constant has another\n```',
        detail: 'The Unicode standard defines a **normalization procedure** that converts text to a canonical form suitable for comparison. JavaScript assumes source code has already been normalized and does no normalization itself. If you use non-ASCII characters in programs, ensure your editor or another tool normalizes the source — the fix is NFC normalization, the same operation the string method `normalize()` performs (Chapter 3).'
      },
      {
        term: 'Surrogate pairs and string length',
        kind: 'insight',
        statement: 'JavaScript strings are sequences of 16-bit **UTF-16 code units**, not codepoints: characters at or below U+FFFF occupy one unit, characters above (emoji, historic scripts) occupy two — a **surrogate pair**. So `"\\u{1F600}".length` is `2`, indexing splits the pair, and only `codePointAt()` / `for...of` see the character whole.',
        detail: '```js\n"\\u{1F600}".length;                 // => 2: two code units, one character\n[..."\\u{1F600}"].length;             // => 1: iteration is codepoint-aware\n"\\u{1F600}".codePointAt(0).toString(16);  // => "1f600"\n```\nThe curly-brace escape exists precisely because four hex digits cannot name these characters — and Chapter 3 shows why `charAt` on emoji returns half a face.'
      },
      {
        term: 'Comparing safely with normalize()',
        kind: 'method',
        statement: 'Two strings that look identical can compare unequal when one uses composed é (U+00E9) and the other uses e + combining accent (U+0301). The fix is to normalize both sides before comparing: `a.normalize() === b.normalize()` (NFC by default), which canonicalizes composed and decomposed forms to one spelling.',
        detail: '```js\nconst a = "caf\\u00e9";      // composed é\nconst b = "cafe\\u0301";     // e + combining accent\na === b;                      // => false: different code units\na.normalize() === b.normalize();  // => true: canonical forms match\n```\nNormalize user input at the boundary (usernames, filenames, search keys) and normalize source files on save — JavaScript never does it for you, in identifiers or in string equality.'
      }
    ],
    examples: [
      {
        title: 'Trace: three spellings of one variable',
        problem: 'A session defines `let café = 1;` using the composed character. Predict the result of reading the variable through each of three spellings.',
        steps: [
          { label: 'The declaration', text: '```js\nlet caf\u00E9 = 1;  // one codepoint: the é is U+00E9\n```\nThe identifier’s stored name is the 5-codepoint sequence c, a, f, é(composed), exactly as typed.' },
          { label: 'Read 1: identical spelling', text: '```js\ncaf\u00E9   // => 1\n```\nSame codepoint sequence → same name → value found.' },
          { label: 'Read 2: 4-digit escape', text: '```js\ncaf\\u00e9   // => 1\n```\nEscapes are resolved before identifiers are compared, so `caf\\u00e9` and `café` are the **same** identifier. Escapes are a way of typing, not a different name.' },
          { label: 'Read 3: the combining-mark twin', text: '```js\ncafe\u0301   // Not the same identifier! e + combining accent (U+0301)\n```\nThis name is the 6-codepoint sequence c, a, f, e, \u0301 — visually identical to café on screen, but a different sequence of values. If no such variable was declared, this is a ReferenceError; if one was, it holds a different value (in the book’s example, 2).' },
          { label: 'The lesson', text: 'What you see is not what the engine sees. Visual identity of characters does not imply identity of codepoints — and the engine never merges them for you.' }
        ],
        result: 'café, caf\\u00e9 and caf\\u{E9} all name one variable; cafe + combining accent names another, visually indistinguishable one. Normalize source (NFC) to avoid this trap.'
      },
      {
        title: 'Choosing between the two escape forms',
        problem: 'You must write, using only ASCII characters, the identifiers `résumé` and the emoji-smuggler string `"hello \U0001F600"`. Which escape form works for each, and why?',
        steps: [
          { label: 'Step 1: Check the codepoints', text: 'é is U+00E9 — a value below U+10000, expressible in four hex digits. The grinning-face emoji is U+1F600 — beyond four hex digits (U+FFFF is the four-digit ceiling).' },
          { label: 'Step 2: The 4-digit form', text: '```js\nlet r\\u00e9sum\\u00e9 = "CV";\n```\nWorks: both é characters fit the classic `\\u00XX` form that existed before ES6.' },
          { label: 'Step 3: The curly-brace form', text: '```js\nlet s = "hello \\u{1F600}";\n```\nThe curly-brace form takes 1–6 hex digits, so it covers all of Unicode including emoji. ES6 added it precisely for codepoints like this one — four digits simply cannot express U+1F600.' },
          { label: 'Step 4: Consistency note', text: 'The curly form also works for small codepoints (`\\u{E9}` is é again), so it can be used everywhere ES6 is available; the four-digit form survives for pre-ES6 compatibility.' }
        ],
        result: 'résumé: either form (\\u00e9 or \\u{E9}); emoji: only \\u{1F600}, the curly-brace form, because the codepoint exceeds four hex digits.'
      }
    ],
    keyTakeaways: [
      'JavaScript source is Unicode: any character may appear in strings and comments; identifiers may use Unicode letters, digits and ideographs — but not emojis.',
      'Unicode escapes start with \\u and come in two forms: exactly 4 hexadecimal digits, or 1–6 hex digits in curly braces (ES6).',
      'Escapes work in string literals, regex literals and identifiers — not in keywords; in comments they are allowed but never interpreted.',
      'The curly-brace form exists for codepoints above 16 bits, such as emoji: `console.log("\\u{1F600}")` prints a smiley face.',
      'Unicode normalization is the hidden trap: "é" as U+00E9 and "e" + U+0301 look identical but are different to JavaScript, allowing two visually indistinguishable constants to coexist.',
      'JavaScript does not normalize your source — ensure your editor does (NFC normalization).'
    ],
    quiz: [
      {
        q: 'Which of these may legally appear in a JavaScript identifier?',
        options: [
          'The Greek letter π, as in `const π = 3.14;`',
          'An emoji, as in `let \U0001F600 = 1;`',
          'A leading digit, as in `let 2x = 2;`',
          'The keyword `const` itself'
        ],
        answer: 0,
        explanation: 'Unicode letters, digits and ideographs are legal in identifiers — the book’s own example uses π and sí. Emojis are explicitly excluded, leading digits make a numeric literal, and const is reserved.'
      },
      {
        q: 'What does `console.log("\\u{1F600}")` print, and why does the curly-brace form exist?',
        options: [
          'The literal text \\u{1F600}, because escapes never work in strings',
          'A smiley-face emoji; the ES6 curly form expresses codepoints requiring more than 16 bits, which four hex digits cannot',
          'A smiley-face emoji; the curly form is the only escape allowed in ES6',
          'The number 1F600 interpreted as hexadecimal'
        ],
        answer: 1,
        explanation: 'The escape prints the grinning-face emoji. Four hex digits top out at U+FFFF, so ES6 added the 1–6 digit curly-brace form to reach codepoints beyond 16 bits — emoji being the flagship example.'
      },
      {
        q: 'Two constants are declared, one named with é as the single codepoint U+00E9 and one with e followed by the combining accent U+0301. What is true?',
        options: [
          'The second declaration is a syntax error',
          'JavaScript automatically normalizes them into the same name, so the declarations conflict',
          'They are different, visually indistinguishable identifiers that can coexist with different values',
          'They are equal under == but not under ==='
        ],
        answer: 2,
        explanation: 'The two encodings have different binary values, and JavaScript performs no normalization of its own — so both declarations are legal and name different constants (the book’s example shows values 1 and 2).'
      },
      {
        q: 'Where can a Unicode escape sequence such as `\\u00E9` NOT be used?',
        options: [
          'Inside a string literal',
          'Inside an identifier, like `caf\\u00e9`',
          'Inside a language keyword, like `wh\\u0069le`',
          'Inside a regular expression literal'
        ],
        answer: 2,
        explanation: 'The chapter lists string literals, regular expression literals and identifiers as escape-capable; keywords are excluded — you cannot spell the while keyword with an escape. In comments escapes are allowed but ignored.'
      }
    ]
  },

  // ---------------------------------------------------------------- 2.5
  {
    sectionId: 'js-ch2-s5',
    readingTime: 9,
    intro: 'Like many languages, JavaScript uses the semicolon to separate statements — but unlike most, it makes the semicolon optional much of the time. The rule that fills the gap, automatic semicolon insertion (ASI), is simple to state and treacherous in practice: a line break is treated as a semicolon only when the program cannot otherwise be parsed. Three exceptions — return and friends, postfix ++/--, and the arrow — make certain line breaks dangerous, and two punctuation characters at the start of a line can silently glue it to the previous statement.',
    objectives: [
      'State the ASI rule and the three situations that terminate statements regardless of parseability',
      'Predict when a semicolon is required between statements on one line',
      'Recognize the return/throw/yield/break/continue line-break exception and its consequences',
      'Apply the defensive-semicolon technique for lines beginning with ( or [',
      'Choose and follow a personal semicolon style with knowledge of the hazards'
    ],
    concepts: [
      {
        term: 'Optional semicolons: the basic rule',
        kind: 'law',
        statement: 'JavaScript uses `;` to separate statements. You can **usually** omit the semicolon between two statements written on separate lines (and always at the end of a program or just before a closing `}`). More precisely: JavaScript treats a line break as a semicolon **only if it cannot parse the code without adding one** — that is, if the next nonspace character cannot be interpreted as a continuation of the current statement. Otherwise the line break is just whitespace.',
        detail: 'Two legitimate styles follow from this: many programmers (and this book) use semicolons to explicitly mark every statement end; others omit them everywhere except the few places where they are required. Whichever you choose, the details below are worth understanding either way.'
      },
      {
        term: 'How the parser decides: the continuation test',
        kind: 'method',
        statement: 'The engine tries to keep parsing across the line break. This code needs no semicolons at all:\n```js\nlet a\na\n=\n3\nconsole.log(a)\n```\nJavaScript interprets it as `let a; a = 3; console.log(a);` — the first line break **does** become a semicolon, because `let a a` cannot be parsed as one statement; but the second line break does **not**, because `a = 3` continues the statement legitimately.',
        detail: 'The engine is always greedy for the longest statement it can parse. A line break becomes a statement terminator only where that greed would otherwise produce a syntax error.'
      },
      {
        term: 'The ( and [ hazard',
        kind: 'insight',
        statement: 'Because parentheses can continue an expression as a function call and brackets as an array index, a line beginning with `(` or `[` can be glued to the previous line. This looks like two statements:\n```js\nlet y = x + f\n(a+b).toString()\n```\nbut JavaScript parses it as:\n```js\nlet y = x + f(a+b).toString();\n```\ncalling `f` with `(a+b)` — almost certainly not the author’s intent. In general, if a statement begins with `(`, `[`, `/`, `+`, or `-`, there is a chance it will be interpreted as a continuation of the statement before. Statements beginning with `/`, `+` and `-` are rare; `(` and `[` are not.',
        detail: 'This is why semicolon-free codebases are disciplined about never leaving a line ending in a bare expression that could invite continuation, and why the defensive semicolon below exists.'
      },
      {
        term: 'The defensive semicolon',
        kind: 'method',
        statement: 'Some programmers protect lines that begin with `(` or `[` by **starting** them with a semicolon:\n```js\nlet x = 0                        // Semicolon omitted here\n;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this separate\n```\nThe leading `;` terminates whatever came before, so the statement works even if the line above is later edited and its terminating semicolon removed.',
        detail: 'Whether or not you adopt the style, you will encounter it in the wild — an initial semicolon is not a typo, it is armor.'
      },
      {
        term: 'Exception 1: return, throw, yield, break, continue',
        kind: 'law',
        statement: 'These five statements are often followed by an identifier or expression. If a **line break appears after any of these words** before any other token, JavaScript **always** interprets that line break as a semicolon. The classic casualty:\n```js\nreturn\ntrue;\n```\nJavaScript assumes you meant `return; true;` — the function returns `undefined` and `true` becomes a dead statement. You almost certainly meant `return true;` (one line). **Never insert a line break between return, break, or continue and the expression that follows.**',
        detail: 'This is the single most dangerous ASI behavior, because it fails silently: no syntax error, just a function that mysteriously returns undefined. The same rule applies to `throw`, and to `yield` in generator functions.'
      },
      {
        term: 'Exceptions 2 and 3: ++/-- and the arrow',
        kind: 'law',
        statement: 'The second exception involves `++` and `--`: to use either as a **postfix** operator, it must appear on the same line as the expression it applies to — otherwise the line break is read as ending the statement. The third exception involves arrow functions: the `=>` itself must appear on the same line as the parameter list. These exceptions exist so that postfix increments and arrows cannot be severed from their operands.',
        detail: 'So `x\n++` is parsed as `x; ++` (a syntax error, since `++` then has nothing to increment) — the engine will not treat `++` as applying to `x` across the break. Keep postfix operators and arrows attached to their left.'
      }
    ],
    examples: [
      {
        title: 'Trace: the return-newline bug',
        problem: 'A function is written to double a number, but its author broke the line after `return`. What happens at run time?',
        steps: [
          { label: 'The code', text: '```js\nfunction double(x) {\n    return\n        x * 2;\n}\ndouble(21)\n```' },
          { label: 'Step 1: ASI fires after return', text: 'The parser reaches `return` and encounters a line break before any other token. Exception 1 applies: the break becomes a semicolon. The function body is now `return;` followed by the statement `x * 2;`.' },
          { label: 'Step 2: Execution', text: 'Calling `double(21)` executes `return` with no expression — such a return yields **undefined** to the caller, immediately. The `x * 2;` statement is never executed; it is dead code after an unconditional return.' },
          { label: 'Step 3: No error is raised', text: 'The program is syntactically legal — `x * 2;` is a valid (pointless) expression statement. The bug is purely semantic, which makes it hard to see and hard to debug.' },
          { label: 'Step 4: The fix', text: '```js\nfunction double(x) {\n    return x * 2;  // or at least: return (x * 2);\n}\n```\nKeep the returned expression on the same line as the keyword — or parenthesize it so the break is impossible.' }
        ],
        result: 'double(21) returns undefined, not 42: the line break after return terminates the function per ASI exception 1, and the computed expression becomes unreachable dead code.'
      },
      {
        title: 'Trace: when a required semicolon goes missing',
        problem: 'Two assignments are written on one line with one semicolon, then on two lines with none. Which forms are legal, and why?',
        steps: [
          { label: 'Form 1: two lines, no semicolons', text: '```js\na = 3\nb = 4\n```\n**Legal.** After `a = 3`, the next line starts with `b`, which cannot continue the assignment `a = 3` (the statement is complete), so the line break acts as a semicolon.' },
          { label: 'Form 2: one line, no semicolon', text: '```js\na = 3 b = 4\n```\n**Syntax error.** On a single line there is no line break to convert — the parser needs an explicit `;` (or a comma, with different meaning) to separate the statements.' },
          { label: 'Form 3: one line, correct', text: '```js\na = 3; b = 4;\n```\n**Legal.** The semicolon does the separating; the trailing one is optional before end-of-program or `}` but harmless and stylistically common.' },
          { label: 'The rule behind all three', text: 'ASI never "inserts" text into your file — it is a parsing rule about line breaks. Where there is no line break, the rule has nothing to act on, so the semicolon must be explicit.' }
        ],
        result: 'Two lines: no semicolon needed. One line: semicolon required. The engine’s separation rule is about line breaks that cannot be parsed as continuations.'
      },
      {
        title: 'Trace: the silent function call',
        problem: 'Semicolon-free code ends a line with an expression, and the next line begins with `(`. Predict the parsed program and the run-time consequence.',
        steps: [
          { label: 'The code', text: '```js\nlet a = [1, 2]\n(function() { console.log("hi"); })()\n```' },
          { label: 'Step 1: The parse', text: '`[1, 2]` followed by `( ... )` parses as an **indexing expression** — the parenthesized function is used as an array index. No line break helps, because `[1, 2](...)` is grammatically a valid continuation of the initializer expression.' },
          { label: 'Step 2: Execution', text: 'The engine tries to evaluate the function object as a property key for the array. The function is coerced toward a string; the attempt to call/index misfires and typically throws a TypeError — or worse, performs a silent no-op lookup.' },
          { label: 'Step 3: The defensive fix', text: '```js\nlet a = [1, 2]\n;(function() { console.log("hi"); })()\n```\nThe leading semicolon terminates the previous statement explicitly, so the IIFE (immediately invoked function expression) is parsed standalone, as intended.' }
        ],
        result: 'Without the defensive ;, the ( glues the lines into one accidental indexing expression. With it, two clean statements — the standard defense in semicolon-free style.'
      }
    ],
    keyTakeaways: [
      'Semicolons separate statements; you may omit them between statements on separate lines, at end of program, and before a closing }.',
      'ASI rule: a line break is treated as a semicolon only if the next nonspace character cannot be interpreted as a continuation of the current statement.',
      'Statements beginning with (, [, /, + or - risk being glued to the previous line; ( and [ are the common ones — guard them with a leading defensive semicolon.',
      'Exception 1: a line break after return, throw, yield, break or continue always ends the statement — `return\\nvalue` returns undefined and is a notorious silent bug.',
      'Exception 2: postfix ++/-- must stay on the same line as its operand. Exception 3: => must stay on the same line as the parameter list.',
      'Pick a style — always-semicolon (the book’s) or semicolon-free — and apply it with knowledge of these hazards, not by accident.'
    ],
    quiz: [
      {
        q: 'Under automatic semicolon insertion, JavaScript treats a line break as a semicolon when:',
        options: [
          'the line break is followed by a comment',
          'the next nonspace character cannot be interpreted as a continuation of the current statement (plus three special exceptions)',
          'the line ends with a closing brace',
          'the program is in strict mode'
        ],
        answer: 1,
        explanation: 'That is the ASI rule: the engine greedily parses the longest statement it can, and only converts a line break into a terminator when parsing would otherwise fail — plus the return/throw/yield/break/continue, postfix ++/--, and => exceptions.'
      },
      {
        q: 'What does the following function return?\n```js\nfunction f() {\n    return\n        42;\n}\n```',
        options: ['42', 'undefined', 'NaN', 'It throws a SyntaxError'],
        answer: 1,
        explanation: 'A line break after return always terminates the statement (exception 1), so the function executes return with no value — undefined — and the 42 statement is dead code.'
      },
      {
        q: 'Why do some programmers begin certain statements with a semicolon, as in `;[x].forEach(f)`?',
        options: [
          'It is a comment marker in older dialects',
          'As a defensive semicolon: it terminates any previous statement so a line beginning with ( or [ cannot be glued to it as a continuation',
          'It is required syntax for array methods',
          'It makes the statement execute in strict mode'
        ],
        answer: 1,
        explanation: 'Statements starting with ( or [ can accidentally continue the previous line (as a call or index); a leading ; explicitly ends whatever came before, keeping the statement separate even if the earlier line is edited.'
      },
      {
        q: 'Which of these is NOT one of the three ASI exceptions in which a line break always acts as a semicolon?',
        options: [
          'A break after return, throw, yield, break or continue',
          'A break between a postfix ++ or -- and the expression it follows',
          'A break between a function’s parameter list and the => of an arrow function',
          'A break between an if keyword and its parenthesized condition'
        ],
        answer: 3,
        explanation: 'The three exceptions are the jump keywords, postfix ++/--, and the => arrow. A break between if and ( is ordinary whitespace between tokens of one statement — no ASI involved.'
      },
      {
        q: 'This code fails mysteriously. Why?\n```js\nlet y = x + f\n(a+b).toString()\n```',
        options: [
          '`f` must be declared before use in strict mode',
          'The two lines parse as one statement — a call `f(a+b)` followed by `.toString()` — instead of two statements',
          '`(a+b).toString()` is not valid JavaScript',
          '`let` cannot appear at the start of a program'
        ],
        answer: 1,
        explanation: 'Because ( can continue an expression as an argument list, ASI does not fire; the program parses as let y = x + f(a+b).toString(); — an unintended function call, which is why an explicit semicolon after the first line is required here.'
      },
      // Placement-pattern: automatic semicolon insertion — return line break (original)
      {
        q: "What does this program print?\n```js\nfunction build() {\n  return\n  { ready: true };\n}\nconsole.log(build());\n```",
        options: ["`{ ready: true }`", "`true`", "`undefined`", "A ReferenceError is thrown"],
        answer: 2,
        explanation: "Step 1: The code given returns on one line and places an object literal on the next. Step 2: The governing rule is the ASI exception for jump keywords: a line break after `return`, `throw`, `yield`, `break`, or `continue` always ends the statement, so `return` completes with no value and the function yields `undefined`. Step 3: Tracing line by line, the engine executes a bare `return`, exits with `undefined`, then parses `{ ready: true };` as a separate block containing a labeled statement, which produces nothing. Step 4: The distractors fail because the object never becomes the returned value, no boolean is produced, and no undeclared name is read, so no ReferenceError arises. Step 5: Therefore the program prints `undefined`."
      }
    ]
  }
]
