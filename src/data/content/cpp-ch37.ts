import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th ed. — Chapter 37
// Regular Expressions (§37.1 – §37.6)
// ============================================================================

export const cppCh37Content: SectionContent[] = [
  // ---------------------------------------------------------------- 37.1
  {
    sectionId: 'cpp-ch37-s1',
    readingTime: 7,
    intro: "A regular expression is a pattern that describes a set of strings — the strings that match it. This section is the language itself: characters, classes, repetition, grouping, alternation and anchors, with the ECMAScript dialect as the default. Mastering the operators' precedence and their greedy default is everything; the library in the next sections just runs this language for you.",
    objectives: [
      "Read a regex as a recipe: classes, repetition, grouping, alternation",
      "Predict greedy versus lazy captures on a given input",
      "Use anchors and word boundaries as zero-width assertions",
    ],
    concepts: [
      {
        term: 'Regular expression',
        kind: 'definition',
        statement: "A **regular expression** is a pattern describing the set of strings that *match* it, built from: ordinary characters (match themselves), the **wildcard `.`** (any character except newline), **character classes** `[...]` (any listed character; ranges `a-z`; negation `[^...]`), **repetition** — `*` (zero or more), `+` (one or more), `?` (optional), `{n}`, `{n,}`, `{n,m}` — **alternation** `|`, **grouping** `( )` with numbered captures, and **anchors**. The default dialect is ECMAScript's; others (basic, extended, awk, grep) are selectable by flag.",
        detail: "Precedence, lowest to highest: alternation, then concatenation, then repetition. `ab|cd` means 'ab or cd', not 'a, then b-or-c, then d'.",
      },
      {
        term: 'Class abbreviations',
        kind: 'method',
        statement: "Escaped letters abbreviate classes: `\\d` a digit, `\\w` a word character (letter, digit, underscore), `\\s` whitespace — with uppercase negations `\\D`, `\\W`, `\\S`. Inside brackets, POSIX-style names also work: `[[:alpha:]]`, `[[:digit:]]`, `[[:space:]]`. To match a character that is itself syntax — `\\ . * ? ( ) [ ] { } | ^ $` — escape it with a backslash.",
        detail: "A ZIP code is therefore `\\d{5}(-\\d{4})?`: five digits, then optionally a dash and four more — the optional part grouped so the `?` governs all of it.",
      },
      {
        term: 'Greedy versus lazy',
        kind: 'law',
        statement: "Repetition is **greedy** by default: each quantifier consumes as many characters as it can while still letting the rest of the pattern match — so `<(.*)>` on the input `<a><b>` captures `a><b`, the longest span between the first `<` and the last `>`. Appending `?` makes it **lazy**: consume as few as possible, growing only when forced — `<(.*?)>` captures just `a`. Greedy versus lazy changes *which* match is found among the possibilities, never whether one is.",
        detail: "The leftmost-start rule is fixed: matching begins at the earliest position where the pattern can match; only then do the quantifiers' appetites decide the extent.",
      },
      {
        term: 'Anchors and boundaries',
        kind: 'method',
        statement: "`^` and `$` assert the beginning and end (of the string, by default); `\\b` asserts a word boundary — the edge between a `\\w` and a non-`\\w`. Anchors consume **no characters**: they are zero-width assertions, which is why `^\\s*$` can match a line consisting only of whitespace (or nothing), and `\\bword\\b` finds `word` without swallowing its neighbors.",
        detail: "Zero-width is also why anchors compose: `^` and `$` add position constraints to a pattern the way assertions add preconditions to code.",
      },
      {
        term: 'Regular Expressions: the working contract',
        kind: 'definition',
        statement: '**Regular Expressions.** The regex language in C++. You can claim this section when you can read a regex as a recipe: classes, repetition, grouping, alternation — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 37 (Regular Expressions); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'Greedy and lazy dissect one input',
        problem: "Match `<(.*)>` and `<(.*?)>` against the input `<a><b>` (positions: `<`0 `a`1 `>`2 `<`3 `b`4 `>`5). What does each capture, and why?",
        steps: [
          { label: 'Same start', text: "Both patterns must start at position 0 — the leftmost `<`. Where they differ is how far the capture reaches before the closing `>` is tried." },
          { label: 'Greedy', text: "`.*` first grabs everything to the end, then backtracks only until `>` can match: the last `>` (position 5) serves, so the capture is `a><b` — 4 characters, and the whole match is all 6." },
          { label: 'Lazy', text: "`.*?` matches nothing first, growing one character at a time only when the rest fails: at `a` the next `>` (position 2) matches — capture `a`, whole match `<a>` (3 characters)." },
          { label: 'What remains', text: "The input still holds `<b>` after either match's end at the greedy case, or position 3 in the lazy case — continuing the search (§37.4's iterators) finds `<b>` next, with either pattern." },
        ],
        result: "Same input, same start, different appetites: greedy captures `a><b`; lazy captures `a`.",
      },
      {
        title: 'Working through regular expressions',
        problem: 'The regex language in C++. Your task: read a regex as a recipe: classes, repetition, grouping, alternation.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: read a regex as a recipe: classes, repetition, grouping, alternation. Write down the guarantee you will rely on — for this chapter it is: A regex composes characters, classes, repetition, grouping and alternation — with alternation binding loosest.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::regex pat(word); bool hit = std::regex_search(line, pat);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — predict greedy versus lazy captures on a given input — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `\\d`, `\\w`, `\\s` (and negations) abbreviate classes; metacharacters are escaped with backslashes. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A regex composes characters, classes, repetition, grouping and alternation — with alternation binding loosest. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "A regex composes characters, classes, repetition, grouping and alternation — with alternation binding loosest.",
      "`\\d`, `\\w`, `\\s` (and negations) abbreviate classes; metacharacters are escaped with backslashes.",
      "Quantifiers are greedy by default and lazy with a trailing `?`; anchors `^`, `$` and `\\b` assert without consuming.",
    ],
    quiz: [
      {
        q: "`\\d{5}(-\\d{4})?` matches:",
        options: [
          "exactly five digits",
          "five digits, optionally followed by a dash and four more digits",
          "any run of digits",
          "a dash followed by nine digits",
        ],
        answer: 1,
        explanation: "The group holds the dash-plus-four unit, and the `?` makes exactly that group optional.",
      },
      {
        q: "`[^abc]` matches:",
        options: ["the string 'abc'", "any one character except a, b or c", "the caret character", "an empty string"],
        answer: 1,
        explanation: "The leading `^` inside the brackets negates the set.",
      },
      {
        q: "On the input `<a><b>`, which pattern captures `a` and nothing more?",
        options: ["`<(.*)>`", "`<(.*?)>`", "`<(.+)?>`", "`<(.{4})>`"],
        answer: 1,
        explanation: "Lazy `.*?` stops at the first `>`; greedy `.*` runs to the last.",
      },
      {
        q: "How many input characters does `\\b` consume?",
        options: ["one", "one only at a word start", "zero — it is a zero-width assertion", "it depends on the dialect"],
        answer: 2,
        explanation: "Boundaries assert a condition between characters; nothing is consumed, so patterns can stack around them.",
      },
    ],
  },

  // ---------------------------------------------------------------- 37.2
  {
    sectionId: 'cpp-ch37-s2',
    readingTime: 7,
    intro: "The `regex` class is where the language of §37.1 becomes an object: constructing one compiles the pattern into a state machine, and matching runs that machine over input into a `match_results` structure of coordinates. Construction is the expensive part — which makes 'compile once, run often' the section's governing rule.",
    objectives: [
      "Explain what a `regex` object holds and why construction is costly",
      "Read a `match_results`: `m[0]`, captures, `prefix`/`suffix`, positions and lengths",
      "Write patterns as raw strings and hoist construction out of loops",
    ],
    concepts: [
      {
        term: 'The regex object',
        kind: 'definition',
        statement: "**`regex`** — `basic_regex<char>` — *compiles* its pattern the moment it is constructed: the object holds the compiled state machine, not the text. Construction is comparatively expensive (parsing, allocation, table building), so build once and reuse; a malformed pattern throws **`regex_error`** carrying what went wrong. Constructor flags tune the machine: `regex::icase` folds case, `optimize` spends construction time to speed matching, `nosubs` drops capture bookkeeping.\n```\nregex pat {R\"(\\d{5}(-\\d{4})?)\"};   // compile once\nsmatch m;\nbool ok = regex_match(\"02158-6543\", m, pat);\n```",
        detail: "A `regex` constructed inside a loop recompiles per iteration — typically an order of magnitude (or two) more expensive than the matching itself. Hoist it.",
      },
      {
        term: 'match_results',
        kind: 'definition',
        statement: "**`smatch`** is `match_results<string::const_iterator>` — a container of **`sub_match`**es filled by a match attempt. `m[0]` is the whole match; `m[1]`, `m[2]`, … are the captures, with unmatched ones marked `matched == false` and empty `.str()`; `m.size()` is captures-plus-one. Around them, `m.prefix()` and `m.suffix()` expose the unmatched text on either side, and `m.position(i)`, `m.length(i)`, `m.str(i)` give each piece's coordinates.",
        detail: "The `cmatch`/`smatch`/`wsmatch` variants differ only in the input's iterator type — the structure of results is identical.",
      },
      {
        term: 'The raw-string trick',
        kind: 'method',
        statement: "Regex syntax is backslash-heavy, and ordinary string literals eat backslashes: to get the two characters `\\d`, a normal literal must be written `\"\\\\d\"`, doubling every backslash in the pattern. Raw string literals end the doubling: `R\"(\\d{5}(-\\d{4})?)\"` contains exactly the characters you read. Write every pattern as a raw string unless something forces otherwise.",
        detail: "The `R\"(...)\"` form is C++11's raw literal — no escape processing at all between those delimiters, which is precisely what a pattern wants.",
      },
      {
        term: 'What the machine looks like',
        kind: 'insight',
        statement: "Conceptually, a compiled pattern is a finite state machine: states for 'where in the pattern am I', transitions for each input character, plus ε-transitions — free moves — wherever a choice or a loop is (alternation, `*`, `?`). Matching runs the machine over the input, backtracking when a path dies. This is why construction is expensive (build the machine) while matching is cheap (run it) — and why `optimize` exists: spend more building to make the running cheaper.",
        detail: "The figure below shows the machine for `ab*c`: one loop for the star, ε-edges around it, one straight path for the `c`.",
      },
      {
        term: 'regex: the working contract',
        kind: 'definition',
        statement: '**regex.** The regex class and matching. You can claim this section when you can explain what a `regex` object holds and why construction is costly — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 37 (Regular Expressions); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    figures: [
      {
        caption: "The compiled regex for the pattern ab*c is a state machine (a Thompson-style NFA). Labeled edges consume one input character; the ε edges consume none — they are free moves that let the machine enter the loop, repeat it, or skip it entirely. Matching the input abbc enters the loop twice, exits along the ε edge to q6, and consumes c to reach the accepting state q7 (double circle); the input ac skips the loop at the first ε branch. A regex object is exactly this machine plus bookkeeping — which is why constructing one is expensive (build it) and matching is cheap (run it).",
        svg: `<svg viewBox="0 0 720 300" width="100%" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="NFA state machine for the regex a b star c"><defs><marker id="nar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><text x="360" y="28" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">the machine compiled from ab*c</text><g fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="1.5"><circle cx="70" cy="200" r="22"/><circle cx="176" cy="200" r="22"/><circle cx="280" cy="200" r="22"/><circle cx="330" cy="110" r="22"/><circle cx="440" cy="110" r="22"/><circle cx="390" cy="200" r="22"/><circle cx="500" cy="200" r="22"/></g><circle cx="500" cy="200" r="16" fill="none" stroke="currentColor" stroke-width="1.2"/><g font-size="12" fill="currentColor" text-anchor="middle"><text x="70" y="204">q0</text><text x="176" y="204">q1</text><text x="280" y="204">q2</text><text x="330" y="114">q4</text><text x="440" y="114">q5</text><text x="390" y="204">q6</text><text x="500" y="204">q7</text></g><g font-size="12" font-style="italic" fill="currentColor" text-anchor="middle"><text x="122" y="192">a</text><text x="228" y="192">ε</text><text x="340" y="192">ε</text><text x="445" y="192">c</text><text x="385" y="100">b</text></g><g stroke="currentColor" stroke-width="1.5" marker-end="url(#nar)"><line x1="30" y1="200" x2="46" y2="200"/><line x1="92" y1="200" x2="148" y2="200"/><line x1="198" y1="200" x2="254" y2="200"/><line x1="292" y1="183" x2="320" y="128"/><line x1="352" y1="110" x2="414" y2="110"/><line x1="302" y1="200" x2="364" y2="200"/><line x1="412" y1="200" x2="474" y2="200"/><path d="M 444 112 C 356 170, 308 170, 288 180" fill="none"/></g><text x="368" y="156" font-size="12" font-style="italic" fill="currentColor" text-anchor="middle">ε</text><text x="312" y="148" font-size="12" font-style="italic" fill="currentColor" text-anchor="middle">ε</text><text x="70" y="244" font-size="10.5" fill="currentColor" opacity="0.7" text-anchor="middle">start</text><text x="536" y="204" font-size="10.5" fill="currentColor" opacity="0.7" text-anchor="middle">accept</text><text x="360" y="268" font-size="11" fill="currentColor" text-anchor="middle">abbc: q0 → q1 → q2 → q4 → q5 → q2 → q4 → q5 → q2 → q6 → q7</text><text x="360" y="288" font-size="10.5" fill="currentColor" opacity="0.75" text-anchor="middle">ε edges are free moves — the b-loop may be taken any number of times, or skipped</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'ZIP codes with coordinates',
        problem: "With `regex pat {R\"(\\d{5}(-\\d{4})?)\"};`, run `regex_match` against \"02158\" and \"02158-6543\" and read off every coordinate the library records.",
        steps: [
          { label: "\"02158\"", text: "The whole string matches: `m[0].str()` is all 5 characters. The optional group never fires — `m[1].matched` is false, `m[1].str()` is empty — and `m.size()` is 2 (the whole match plus one group)." },
          { label: "\"02158-6543\"", text: "`m[0]` spans all 10 characters; `m[1].str()` is \"-6543\" with `m.position(1) == 5` and `m.length(1) == 5` — the group starts exactly where the five digits end." },
          { label: 'Around the match', text: "`m.prefix().str()` and `m.suffix().str()` are both empty here: `regex_match` demands the entire input, so nothing is left over on either side." },
          { label: 'Contrast', text: "On \"x02158y\", `regex_match` would fail outright — but `regex_search` (§37.3) would find the match at position 1 with prefix \"x\" and suffix \"y\"." },
        ],
        result: "Two inputs, full coordinates: on the nine-digit ZIP, group one is present at position 5, length 5, text \"-6543\"; on the bare ZIP it is absent.",
      },
      {
        title: 'Working through regex',
        problem: 'The regex class and matching. Your task: explain what a `regex` object holds and why construction is costly.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain what a `regex` object holds and why construction is costly. Write down the guarantee you will rely on — for this chapter it is: A `regex` object holds the compiled machine — build once, outside loops; bad patterns throw `regex_error`.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::regex pat(word); bool hit = std::regex_search(line, pat);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — read a `match_results`: `m[0]`, captures, `prefix`/`suffix`, positions and lengths — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `smatch` records `m[0]` (whole), `m[i]` (captures, possibly unmatched), plus prefix/suffix and each piece’s position and length. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A `regex` object holds the compiled machine — build once, outside loops; bad patterns throw `regex_error`. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "A `regex` object holds the compiled machine — build once, outside loops; bad patterns throw `regex_error`.",
      "`smatch` records `m[0]` (whole), `m[i]` (captures, possibly unmatched), plus prefix/suffix and each piece's position and length.",
      "Write patterns as raw strings so the page and the pattern agree character for character.",
    ],
    quiz: [
      {
        q: "A `regex` object holds:",
        options: [
          "the pattern text, matched character by character",
          "the compiled state machine, ready to run",
          "the input string and its matches",
          "a table of all possible matches",
        ],
        answer: 1,
        explanation: "Construction compiles — which is why it is expensive and belongs outside loops.",
      },
      {
        q: "In an `smatch` named m, `m[1]` refers to:",
        options: [
          "the first character of the match",
          "the first capture group's `sub_match`",
          "the whole match",
          "the text before the match",
        ],
        answer: 1,
        explanation: "`m[0]` is the whole match; indices 1 and up are the parenthesized groups in order.",
      },
      {
        q: "Raw string literals are recommended for patterns because:",
        options: [
          "they run faster",
          "backslashes appear as written — no doubling to survive the string literal",
          "they allow more syntax",
          "they are the only form `regex` accepts",
        ],
        answer: 1,
        explanation: "The pattern you read is the pattern the machine compiles; `\"\\\\d\"` and `\\d` no longer fight.",
      },
    ],
  },

  // ---------------------------------------------------------------- 37.3
  {
    sectionId: 'cpp-ch37-s3',
    readingTime: 6,
    intro: "Three functions cover the verbs: `regex_match` validates the whole input, `regex_search` finds the first match anywhere, and `regex_replace` rewrites every match through a format string. Choosing the wrong one is the classic bug — validation when you meant extraction — so the section fixes the contract of each.",
    objectives: [
      "Choose `regex_match` or `regex_search` by whether the whole input must match",
      "Rewrite text with `regex_replace` and its format splices",
      "Recognize the match-versus-search confusion before it costs an evening",
    ],
    concepts: [
      {
        term: 'regex_match',
        kind: 'definition',
        statement: "**`regex_match(s, m, pat)`** succeeds only if the *entire* input matches the pattern — anchors at both ends, implicitly: think `^pattern$`. It is the **validation** tool: is this whole string an identifier, a date, a well-formed line? On success `m` holds every capture; on failure, `false`.",
        detail: "Because the whole input must match, `m.prefix()` and `m.suffix()` are always empty on success — there is nothing left over.",
      },
      {
        term: 'regex_search',
        kind: 'definition',
        statement: "**`regex_search(s, m, pat)`** finds the *first* substring that matches, anywhere in the input: the search tool. The leftmost match wins, `m` gets its captures, and `m.prefix()`/`m.suffix()` carry the unmatched text on either side. It finds only the first — harvesting all matches is the iterators' job (§37.4). The classic bug is reaching for `match` when `search` was meant: whole-input validation where a find-anywhere was wanted.",
        detail: "`regex_search(\"x02158y\", m, zip)` finds the ZIP at position 1; `regex_match` on the same input fails — the x and y are not pattern characters.",
      },
      {
        term: 'regex_replace',
        kind: 'method',
        statement: "**`regex_replace(s, pat, fmt)`** copies the input, replacing **every** match with `fmt`. The format string is ordinary text plus splices:\n```\n$1 $2 $3 ...   the captures, by number\n$&             the whole match\n$` $'          the text just before / just after the match\n$$             a literal dollar sign\n```\nFlags tune it: `format_first_only` stops after one replacement, `format_no_copy` emits *only* the replacements (turning replace into extraction), `format_sed` switches to sed's backslash-number style.",
        detail: "Sed mode exists because a generation of tools expects it; the default `$`-style is the book's working notation.",
      },
      {
        term: 'Regular Expression Functions: the working contract',
        kind: 'definition',
        statement: '**Regular Expression Functions.** match, search and replace. You can claim this section when you can choose `regex_match` or `regex_search` by whether the whole input must match — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 37 (Regular Expressions); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Regular Expression Functions: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, rewrite text with `regex_replace` and its format splices. Then, recognize the match-versus-search confusion before it costs an evening. Finally, test the outcome against the section promise: `regex_match` demands the whole input (validation); `regex_search` finds the leftmost match anywhere (extraction).',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Reformatting a date',
        problem: "With `string iso = \"2025-07-14\";` and `regex d {R\"((\\d{4})-(\\d{2})-(\\d{2}))\"};`, validate the input, then rewrite it as day/month/year, and extract the date from surrounding text.",
        steps: [
          { label: 'Validate', text: "`regex_match(iso, m, d)` — the whole string is 4-2-2 digits: true, with captures `2025`, `07`, `14` at positions 0, 5 and 8 and lengths 4, 2, 2." },
          { label: 'Rewrite', text: "`regex_replace(iso, d, \"$3/$2/$1\")` replaces the whole match (it spans everything) by splicing capture 3, then 2, then 1 → `14/07/2025`." },
          { label: 'Extract from noise', text: "For `\"x 2025-07-14 y\"`: `regex_search` finds the date at position 2 with prefix `x ` and suffix ` y`; `regex_match` would fail outright — the surrounding text is not part of the pattern." },
          { label: 'Extract with replace', text: "The same search-and-splice result comes from `regex_replace(text, d, \"$3/$2/$1\", format_no_copy)` — replacements only, surrounding text dropped." },
        ],
        result: "Validation, rewriting and extraction — three one-liners over one compiled regex, with `14/07/2025` out the end.",
      },
      {
        title: 'Working through regular expression functions',
        problem: 'match, search and replace. Your task: choose `regex_match` or `regex_search` by whether the whole input must match.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: choose `regex_match` or `regex_search` by whether the whole input must match. Write down the guarantee you will rely on — for this chapter it is: `regex_match` demands the whole input (validation); `regex_search` finds the leftmost match anywhere (extraction).' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::regex pat(word); bool hit = std::regex_search(line, pat);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — rewrite text with `regex_replace` and its format splices — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `regex_replace` rewrites every match; `$`-splices bring captures and the whole match into the replacement text. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `regex_match` demands the whole input (validation); `regex_search` finds the leftmost match anywhere (extraction). Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "`regex_match` demands the whole input (validation); `regex_search` finds the leftmost match anywhere (extraction).",
      "`regex_replace` rewrites every match; `$`-splices bring captures and the whole match into the replacement text.",
      "`format_no_copy` turns replace into extraction; `format_first_only` caps it at one.",
    ],
    quiz: [
      {
        q: "On the input \"x02158y\" with a five-digit ZIP pattern, which succeeds?",
        options: [
          "`regex_match` only",
          "`regex_search` only",
          "both",
          "neither",
        ],
        answer: 1,
        explanation: "The surrounding characters bar a whole-input match; the ZIP inside is still findable.",
      },
      {
        q: "In a format string, `$&` denotes:",
        options: [
          "the first capture",
          "the whole match",
          "the text before the match",
          "a literal dollar",
        ],
        answer: 1,
        explanation: "The ampersand stands for the entire matched span; `$1` and friends are the captures.",
      },
      {
        q: "To emit only the matches — dropping the unmatched text between them — use:",
        options: ["`format_sed`", "`format_no_copy`", "`format_first_only`", "`match_not_bol`"],
        answer: 1,
        explanation: "`format_no_copy` suppresses the non-matching text, turning replace into extract.",
      },
      {
        q: "By default, `regex_replace` replaces:",
        options: [
          "the first match only",
          "every match in the input",
          "the longest match only",
          "nothing — it only counts",
        ],
        answer: 1,
        explanation: "All matches, unless `format_first_only` says otherwise.",
      },
    ],
  },

  // ---------------------------------------------------------------- 37.4
  {
    sectionId: 'cpp-ch37-s4',
    readingTime: 6,
    intro: "The search functions stop at the first match; the iterators do not. `sregex_iterator` walks every match in turn, and `sregex_token_iterator` walks pieces — captures, or, with a magic index of −1, everything the pattern did not match, which is how splitting is written. Both are the loop forms of §37.3's one-shot calls.",
    objectives: [
      "Range over all matches with `sregex_iterator`",
      "Split input using `sregex_token_iterator` and the −1 convention",
      "Respect the iterators' lifetime rule: the regex must outlive them",
    ],
    concepts: [
      {
        term: 'sregex_iterator',
        kind: 'definition',
        statement: "An **`sregex_iterator`** ranges over all non-overlapping matches: construct the begin from an input range and a pattern; the default-constructed iterator is the end sentinel; each `*it` is a full `smatch`. It is `regex_search` in increment form — each advance searches from the end of the previous match:\n```\nfor (auto it = sregex_iterator(text.begin(), text.end(), num);\n     it != sregex_iterator(); ++it)\n    cout << it->str() << \" at \" << it->position() << \"\\n\";\n```",
        detail: "Non-overlapping means the next match starts at or after the previous match's end — one pass, no rescanning of consumed text.",
      },
      {
        term: 'sregex_token_iterator',
        kind: 'definition',
        statement: "An **`sregex_token_iterator`** ranges over *pieces*: with a submatch index argument it yields that capture of each match (0 = whole matches, 1 and up = captures); with the index **−1** it yields everything the pattern *did not* match — the complement of the separators — which is how **splitting** is written: `regex ws {R\"(\\s+)\"};` and a token iterator over `ws` with −1 walks the words between whitespace runs.",
        detail: "The −1 convention reads as 'give me the gaps': pattern = separator, tokens = the un-matched stretches between them.",
      },
      {
        term: 'Lifetime and mechanics',
        kind: 'insight',
        statement: "Both iterators store a *pointer* to the regex and a copy of the current `smatch` — so the `regex` object must outlive the iteration (declare it before the loop, not as a temporary), and the input sequence must not be modified while iterating. Dereferencing yields the stored match; the iterators are const forward iterators in practice — you observe, you do not mutate.",
        detail: "The classic crash is passing a temporary regex: `sregex_iterator(b, e, regex{...})` compiles, iterates happily for one statement, and dangles the moment the temporary dies.",
      },
      {
        term: 'Regular Expression Iterators: the working contract',
        kind: 'definition',
        statement: '**Regular Expression Iterators.** Iterating matches and tokens. You can claim this section when you can range over all matches with `sregex_iterator` — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 37 (Regular Expressions); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Regular Expression Iterators: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, split input using `sregex_token_iterator` and the −1 convention. Then, respect the iterators’ lifetime rule: the regex must outlive them. Finally, test the outcome against the section promise: `sregex_iterator` walks every non-overlapping match, each as a full `smatch`; its ++ is a `regex_search` from the last match’s end.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Splitting and harvesting',
        problem: "Split `\"the quick brown fox\"` on whitespace; then collect every number from `\"a1 b22 c333\"` with its position.",
        steps: [
          { label: 'Split', text: "`regex ws {R\"(\\s+)\"};` — a token iterator with −1 yields the four words: `the` (positions 0–2), `quick` (4–8), `brown` (10–14), `fox` (16–18). The tokens are `sub_match` values over the original string — positions, not copies." },
          { label: 'Harvest', text: "`regex num {R\"(\\d+)\"};` — an `sregex_iterator` finds matches at positions 1, 4 and 8 with lengths 1, 2 and 3: `1`, `22`, `333`." },
          { label: 'Read coordinates', text: "Each dereference is a full `smatch`: `it->str()` is the text, `it->position()` where it started, `it->length()` how long it ran." },
          { label: 'Mirror image', text: "The same input with the token iterator at index 0 would yield the whole matches (`1`, `22`, `333`); at index 1 with a capture-group pattern it would yield that group. Only −1 gives the gaps." },
        ],
        result: "Four tokens from splitting, three numbers with exact positions (1, 4, 8) and lengths (1, 2, 3) — two range-fors, no index arithmetic.",
      },
      {
        title: 'Working through regular expression iterators',
        problem: 'Iterating matches and tokens. Your task: range over all matches with `sregex_iterator`.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: range over all matches with `sregex_iterator`. Write down the guarantee you will rely on — for this chapter it is: `sregex_iterator` walks every non-overlapping match, each as a full `smatch`; its ++ is a `regex_search` from the last match’s end.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::regex pat(word); bool hit = std::regex_search(line, pat);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — split input using `sregex_token_iterator` and the −1 convention — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `sregex_token_iterator` with −1 yields the unmatched gaps — the splitting idiom; with indices ≥ 0 it yields whole matches or captures. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `sregex_iterator` walks every non-overlapping match, each as a full `smatch`; its ++ is a `regex_search` from the last match’s end. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "`sregex_iterator` walks every non-overlapping match, each as a full `smatch`; its ++ is a `regex_search` from the last match's end.",
      "`sregex_token_iterator` with −1 yields the unmatched gaps — the splitting idiom; with indices ≥ 0 it yields whole matches or captures.",
      "The regex must outlive the iterators, and the input must stay put while iterating.",
    ],
    quiz: [
      {
        q: "Passing −1 as a `sregex_token_iterator`'s index yields:",
        options: [
          "the whole matches",
          "the first capture of each match",
          "the pieces *between* matches — the splitting idiom",
          "nothing — it is an error",
        ],
        answer: 2,
        explanation: "−1 selects the complement of the pattern: the text the separators did not touch.",
      },
      {
        q: "Incrementing an `sregex_iterator` performs:",
        options: [
          "a fresh `regex_match` on the whole input",
          "a `regex_search` starting where the previous match ended",
          "a copy of the previous match",
          "a jump to the input's end",
        ],
        answer: 1,
        explanation: "That is exactly the progression that makes matches non-overlapping and the loop exhaustive.",
      },
      {
        q: "The lifetime rule for the iterators is:",
        options: [
          "they own a copy of the pattern",
          "the `regex` object must outlive them — they store a pointer to it",
          "they must be destroyed before the input",
          "there is no lifetime rule",
        ],
        answer: 1,
        explanation: "Declare the regex before the loop; a temporary pattern is the classic dangling-pointer crash.",
      },
    ],
  },

  // ---------------------------------------------------------------- 37.5
  {
    sectionId: 'cpp-ch37-s5',
    readingTime: 5,
    intro: "Everything character-specific in the regex engine is delegated to a traits class: classification, case folding, digit values, collation. `regex_traits<char>` implements the pattern language over the standard locale, and the same engine serves wide and custom character types through different traits. You will rarely write one — but this section is why you could.",
    objectives: [
      "Say what the traits parameter of `basic_regex` supplies",
      "Explain how `icase` matching works through `translate_nocase`",
      "Recognize the one sanctioned way to bend character classes to an unusual alphabet",
    ],
    concepts: [
      {
        term: 'The traits idea',
        kind: 'definition',
        statement: "`basic_regex<C, Tr>` separates the *pattern language* from the *character set* it runs on: everything that touches actual characters — classification (`[[:alpha:]]`, `\\w`), case folding, digit values, collation — is delegated to the traits class `Tr`. `regex_traits<char>` and `regex_traits<wchar_t>` are the provided specializations; both implement the language over `std::ctype` of the imbued locale, which is why the same `regex` machinery serves `regex`, `wregex` and beyond.",
        detail: "Traits are the 'policy' of the regex world: the engine's state machine, backtracking and capture logic are policy-free.",
      },
      {
        term: 'What the traits class supplies',
        kind: 'method',
        statement: "The catalogue: a `char_class_type` (a bitmask of character classes); `lookup_classname` (name → mask) and `isctype` (character against mask) — the pair behind every named class; `translate` and `translate_nocase` (single-character equivalences used for matching — where `icase` folds); `value(c, base)` (the numeric value of a digit character, used by escapes and counted repetitions); `transform`/`transform_primary` (sort-key equivalents of strings, needed for locale-correct ranges like `[a-z]`); `imbue`/`getloc` for locale handling.",
        detail: "The engine calls these; it never inspects characters directly. That is the entire seam along which behavior is customized.",
      },
      {
        term: 'Why traits exist',
        kind: 'insight',
        statement: "Because the policy is external, the *same engine* serves `char`, `wchar_t` and custom character types, and locale behavior is not frozen into the machine. A custom traits class is the sanctioned way to bend the alphabet: treat `'_'` as a word character in `\\w`, add folded pairs to case-insensitive matching, or adapt the classes to a non-ASCII set. You pay for the flexibility once, when writing the traits; every pattern after that inherits it.",
        detail: "The book's own example instantiates the regex machinery over different character types — the engine never notices.",
      },
      {
        term: 'regex_traits: the working contract',
        kind: 'definition',
        statement: '**regex_traits.** Customizing regex. You can claim this section when you can say what the traits parameter of `basic_regex` supplies — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 37 (Regular Expressions); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'regex_traits: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, explain how `icase` matching works through `translate_nocase`. Then, recognize the one sanctioned way to bend character classes to an unusual alphabet. Finally, test the outcome against the section promise: `basic_regex<C, Tr>` delegates every character-level decision to traits; the engine is policy-free.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Case folding through traits',
        problem: "How does matching built with `regex::icase` compare 'Q' with 'q' — and why is that a traits concern rather than an engine concern?",
        steps: [
          { label: 'The mechanism', text: "With `icase`, the engine compares `translate_nocase(a) == translate_nocase(b)` instead of `a == b` — each character is folded once, and the folds are compared." },
          { label: 'The default fold', text: "For `regex_traits<char>` over the classic locale, `translate_nocase` is essentially `tolower` on both bytes: 'Q' (0x51) and 'q' (0x71) both fold to 0x71 — equal." },
          { label: 'The engine never learned what a letter is', text: "Swap in a traits class that folds differently — more pairs, different pairs — and the same engine folds differently, because the comparison goes through the policy, not through the machine." },
          { label: 'Classes too', text: "Character *classes* are equally external: `\\w` is an `isctype(c, mask)` call, which is why a custom traits can widen or narrow what counts as a word character." },
        ],
        result: "Matching is equality; *which things are equal* is policy — and policy lives in traits.",
      },
      {
        title: 'Working through regex_traits',
        problem: 'Customizing regex. Your task: say what the traits parameter of `basic_regex` supplies.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: say what the traits parameter of `basic_regex` supplies. Write down the guarantee you will rely on — for this chapter it is: `basic_regex<C, Tr>` delegates every character-level decision to traits; the engine is policy-free.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::regex pat(word); bool hit = std::regex_search(line, pat);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain how `icase` matching works through `translate_nocase` — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `lookup_classname`/`isctype` implement named classes; `translate_nocase` implements `icase`; `value` and `transform` cover digits and collation. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `basic_regex<C, Tr>` delegates every character-level decision to traits; the engine is policy-free. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "`basic_regex<C, Tr>` delegates every character-level decision to traits; the engine is policy-free.",
      "`lookup_classname`/`isctype` implement named classes; `translate_nocase` implements `icase`; `value` and `transform` cover digits and collation.",
      "Custom traits are the sanctioned way to adapt the alphabet — the same engine then serves the custom character type.",
    ],
    quiz: [
      {
        q: "The second template parameter of `basic_regex` supplies:",
        options: [
          "the state machine's memory limit",
          "the character-level policy: classification, folding, digit values, collation",
          "the pattern dialect",
          "the input's iterator type",
        ],
        answer: 1,
        explanation: "Everything touching actual characters is delegated; the engine itself is generic.",
      },
      {
        q: "`lookup_classname` and `isctype` together implement:",
        options: [
          "alternation",
          "the capture numbering",
          "named character classes such as the alpha class",
          "greedy backtracking",
        ],
        answer: 2,
        explanation: "One maps a class name to a bitmask, the other tests a character against that mask.",
      },
      {
        q: "With `regex::icase`, two characters match when:",
        options: [
          "their bits are equal",
          "their `translate_nocase` results are equal",
          "their classes overlap",
          "either is a letter",
        ],
        answer: 1,
        explanation: "Folding through the traits function is the whole of case-insensitive matching.",
      },
    ],
  },

  // ---------------------------------------------------------------- 37.6
  {
    sectionId: 'cpp-ch37-s6',
    readingTime: 4,
    intro: "The chapter's advice is about where regexes pay and where they betray: build them once and write them as raw strings; pick match, search or replace by intent; and know that regular languages cannot carry nested structure — tokens yes, grammar no.",
    objectives: [
      "Apply the construction discipline: raw strings, built once, outside loops",
      "Choose the right function family for validation, extraction and transformation",
      "Recognize the structural limit of regular languages",
    ],
    concepts: [
      {
        term: 'Build once, write raw',
        kind: 'law',
        statement: "Construct the `regex` outside loops — compilation is the expensive part, matching is cheap. And write patterns as raw string literals: `R\"(\\d{5})\"` rather than `\"\\\\d{5}\"`, so the pattern on the page is the pattern the machine compiles. Every doubled backslash is one more chance for a maintainer to halve or double it wrongly.",
        detail: "A pattern hidden inside a loop is a silent tax of parse-and-build on every iteration — often the difference between milliseconds and seconds.",
      },
      {
        term: 'The right tool per job',
        kind: 'law',
        statement: "Validate with `regex_match`; extract with `regex_search` or the iterators; transform with `regex_replace` — whose format splices do most rewriting jobs without post-processing. For plain splitting, the token iterator with −1 beats manual `find` loops. Reach for non-greedy quantifiers when structure demands them — the §37.1 `<a><b>` case is the canonical example.",
        detail: "Most regex bugs are intent bugs: the wrong verb for the job, not a wrong pattern inside the right verb.",
      },
      {
        term: 'Know the limits',
        kind: 'insight',
        statement: "Regular expressions match *regular* languages — flat patterns, no nesting. HTML with balanced tags, arithmetic with nested parentheses, C++ itself: not regular, and forcing them into a regex produces monsters that half-work. Use regex for tokens and shapes; use (recursive) grammars and real parsers for structure. And in hot paths, measure: the convenience has a price, and `optimize` plus hoisting is how you pay less of it.",
        detail: "The book's own regular-expression chapters are followed by parsing chapters — the boundary between them is exactly this rule.",
      },
      {
        term: 'Shipping rule for regular expressions',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Compile once, outside loops; write patterns as raw strings so backslashes survive untouched.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
      {
        term: 'Review checklist for regular expressions',
        kind: 'method',
        statement: 'Take the objectives as review questions: apply the construction discipline: raw strings, built once, outside loops? Then choose the right function family for validation, extraction and transformation? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.',
        detail: 'A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.',
      },
    ],
    examples: [
      {
        title: 'The pattern, made readable',
        problem: "A date pattern was written as `regex pat {\"\\\\d{2}/\\\\d{2}/\\\\d{4}\"};` — correct, but every edit risks a backslash error. Restate it by the chapter's rules.",
        steps: [
          { label: 'What the escapes cost', text: "Each `\\\\` in the literal is one real backslash reaching the engine — correct, but the reader must un-double in their head on every line, and a maintainer who 'fixes' one to a single backslash silently changes `\\d` (digit class) into `d` (the letter)." },
          { label: 'The raw form', text: "`regex pat {R\"(\\d{2}/\\d{2}/\\d{4})\"};` — character for character what the engine compiles: digit-digit, slash, digit-digit, slash, digit-digit-digit-digit. Page and pattern can no longer disagree." },
          { label: 'The placement', text: "And the `regex` lives at namespace or function-static scope — outside any loop that uses it — so it compiles once per run, not once per call." },
        ],
        result: "Same machine, one readable form, zero construction in loops — the advice in two moves.",
      },
      {
        title: 'Reviewing regular expressions code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the construction discipline: raw strings, built once, outside loops.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Compile once, outside loops; write patterns as raw strings so backslashes survive untouched.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `std::regex pat(word); bool hit = std::regex_search(line, pat);`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: choose the right function family for validation, extraction and transformation. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Match to validate, search to extract, replace to transform; token iterator with −1 to split.' },
        ],
        result: 'The review ends with findings tied to reasons: Compile once, outside loops; write patterns as raw strings so backslashes survive untouched. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      "Compile once, outside loops; write patterns as raw strings so backslashes survive untouched.",
      "Match to validate, search to extract, replace to transform; token iterator with −1 to split.",
      "Regular languages have no nesting — tokens and shapes for regex, structure for grammars.",
    ],
    quiz: [
      {
        q: "The chapter's advice about `regex` construction is:",
        options: [
          "construct inline for locality",
          "hoist construction out of loops — compilation is the expensive part",
          "always pass the pattern string directly to the match functions",
          "compile patterns at runtime only",
        ],
        answer: 1,
        explanation: "The regex object is a compiled machine; rebuilding it per iteration re-pays the build cost every time.",
      },
      {
        q: "A pattern that must match arbitrarily nested parentheses is:",
        options: [
          "fine with more groups",
          "fine with non-greedy quantifiers",
          "not expressible as a regular expression — use a grammar/parser",
          "expressible with backreferences",
        ],
        answer: 2,
        explanation: "Nesting is exactly the structure regular languages lack; backreferences add nothing structural.",
      },
      {
        q: "Raw string literals are preferred for patterns because:",
        options: [
          "they are faster to compile",
          "the pattern appears exactly as written — no escape doubling",
          "they allow nested quotes",
          "they are required by `regex_match`",
        ],
        answer: 1,
        explanation: "What you read is what the machine gets — the whole point of a pattern's notation.",
      },
    ],
  },
]
