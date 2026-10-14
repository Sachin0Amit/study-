import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th ed. — Chapter 36
// Strings (§36.1 – §36.4)
// ============================================================================

export const cppCh36Content: SectionContent[] = [
  // ---------------------------------------------------------------- 36.1
  {
    sectionId: 'cpp-ch36-s1',
    readingTime: 5,
    intro: "The string library is deliberately split in two: a chapter of questions about single characters (what kind is this? change its case?) and a chapter about the sequence type that owns them. This framing — classification orthogonal to storage — is what keeps the library usable for plain ASCII today and other encodings tomorrow.",
    objectives: [
      "Say precisely what `string` is: `basic_string<char>` with value semantics",
      "Explain the deliberate split between character classification and string operations",
      "Justify the zero-overhead claim against hand-rolled `char` buffers",
    ],
    concepts: [
      {
        term: 'What a string is',
        kind: 'definition',
        statement: "A **string** in this library is `basic_string<char>` — `string`: a value-semantic, growable sequence of characters that **owns** its characters, knows its length, and can be copied, compared, concatenated and searched. The same template over other character types gives `wstring` (wide), `u16string` (UTF-16) and `u32string` (UTF-32) — one set of operations, several alphabets.",
        detail: "Value semantics is the headline: assignment copies, a `string` cleans up its own memory, and no `strlen`/`strcpy` bookkeeping is yours to do.",
      },
      {
        term: 'Two separate problems',
        kind: 'insight',
        statement: "The library separates **what characters are** (classification: `isalpha`, `isdigit`, `isspace`… — §36.2) from **what strings do** (storage and algorithms — §36.3). Classification answers questions about one character; strings answer questions about sequences; neither is coupled to a locale policy unless you opt in.",
        detail: "This is why a case-folding routine or a tokenizer works unchanged over `char`, `wchar_t` and beyond: the sequence logic never inlines character judgments.",
      },
      {
        term: 'The zero-overhead claim',
        kind: 'insight',
        statement: "`string` is designed so that replacing hand-rolled `char` buffers costs *nothing measurable* while deleting whole bug families: overruns, unterminated arrays, aliasing accidents. The enablers are value semantics with cheap moves, the **small-string optimization** (short text rides inside the string object itself — no allocation), and **stored lengths**: `size()` is $O(1)$ where `strlen` is $O(n)$.",
        detail: "The claim is checked, not assumed — Stroustrup's rule is that abstraction must match or beat the hand-written alternative, and `string` is one of its load-bearing exhibits.",
      },
      {
        term: 'Introduction: the working contract',
        kind: 'definition',
        statement: '**Introduction.** Strings at a glance. You can claim this section when you can say precisely what `string` is: `basic_string<char>` with value semantics — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 36 (Strings); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Introduction: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, explain the deliberate split between character classification and string operations. Then, justify the zero-overhead claim against hand-rolled `char` buffers. Finally, test the outcome against the section promise: `string` is `basic_string<char>`: a value-semantic, growable, owning character sequence, with wstring and UTF variants over the same template.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Pricing strlen against size',
        problem: "A loop asks for the length of a 10,000-character string a million times. Contrast `strlen(p)` on a `char*` with `s.size()` on a `string`.",
        steps: [
          { label: 'strlen', text: "It walks every byte until the terminator — $10^4$ bytes per call. A million calls walk $10^4 \\times 10^6 = 10^{10}$ bytes ≈ 10 GB of memory traffic, most of it cache misses on a buffer that size." },
          { label: 'size', text: "It loads one stored member — a million loads of a word that lives on one cache line. Effectively free next to any real work." },
          { label: 'Why it is fair', text: "The `string` type already walked those bytes once, when building itself; storing the answer is what *owning* the characters buys. `strlen` re-pays the walk on every query because it has no place to remember it." },
        ],
        result: "≈ 10 GB versus a few MB of traffic for identical answers — stored length beats recomputed length by roughly the string's length, every single query.",
      },
      {
        title: 'Working through introduction',
        problem: 'Strings at a glance. Your task: say precisely what `string` is: `basic_string<char>` with value semantics.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: say precisely what `string` is: `basic_string<char>` with value semantics. Write down the guarantee you will rely on — for this chapter it is: `string` is `basic_string<char>`: a value-semantic, growable, owning character sequence, with wstring and UTF variants over the same template.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::string s; std::getline(std::cin, s);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain the deliberate split between character classification and string operations — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Classification (single characters) and string operations (sequences) are separate library concerns by design. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `string` is `basic_string<char>`: a value-semantic, growable, owning character sequence, with wstring and UTF variants over the same template. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "`string` is `basic_string<char>`: a value-semantic, growable, owning character sequence, with wstring and UTF variants over the same template.",
      "Classification (single characters) and string operations (sequences) are separate library concerns by design.",
      "The zero-overhead claim rests on cheap moves, the small-string optimization and $O(1)$ stored lengths.",
    ],
    quiz: [
      {
        q: "Compared with a `char*` plus `strlen`, `string` differs fundamentally because it:",
        options: [
          "always allocates more memory",
          "owns its characters and stores its length",
          "cannot be indexed",
          "is always encoded in UTF-8",
        ],
        answer: 1,
        explanation: "Ownership is what makes the stored length honest — the buffer cannot change out from under the count.",
      },
      {
        q: "The chapter's split between §36.2 and §36.3 is between:",
        options: [
          "reading and writing characters",
          "classifying single characters and operating on character sequences",
          "ASCII and Unicode",
          "compile time and runtime",
        ],
        answer: 1,
        explanation: "Character questions and sequence questions are orthogonal — which is what lets both work for any character type.",
      },
      {
        q: "`s.size()` on a `string` costs:",
        options: ["$O(n)$ — it counts characters", "$O(\\lg n)$", "$O(1)$ — the length is stored", "one syscall"],
        answer: 2,
        explanation: "The length is a member; `strlen`'s walk exists only because a `char*` has nowhere to remember one.",
      },
    ],
  },

  // ---------------------------------------------------------------- 36.2
  {
    sectionId: 'cpp-ch36-s2',
    readingTime: 6,
    intro: "Character classification looks trivial — and hides two ideas worth a section: the table-driven implementation that makes every predicate one AND operation, and the signed-char trap that makes naive calls undefined behavior for every non-ASCII byte. Both matter the first time your program meets UTF-8 input.",
    objectives: [
      "List the classification functions and the overlaps between their classes",
      "Implement classification as a bitmask table rather than code",
      "Avoid the signed `char` trap that breaks bytes above 127",
    ],
    concepts: [
      {
        term: 'The classification functions',
        kind: 'definition',
        statement: "`<cctype>` answers one question per call — is `c` in this class? The classes: `isalpha`, `isdigit`, `isalnum`, `isxdigit`, `isspace`, `ispunct`, `isupper`, `islower`, `iscntrl`, `isprint` (printable, including space) and `isgraph` (printable, excluding space) — plus the transforms `toupper` and `tolower`. Classes overlap on purpose: `'A'` is alpha, upper, xdigit, alnum, print and graph simultaneously.",
        detail: "The general locale-aware forms are the two-argument versions taking a `locale` — the one-argument forms use the classic 'C' behavior, which is the right default for tokens and numbers.",
      },
      {
        term: 'Table-driven classification',
        kind: 'method',
        statement: "Efficient classifiers are data, not code: a 128-entry table maps each character to a bitmask of its classes — say space = 1, alpha = 2, digit = 4, xdigit = 8, upper = 16, lower = 32, punct = 64, cntrl = 128 — and each predicate is one lookup and one AND:\n```\nbool my_isalpha(char c) { return cls[(unsigned char)c] & alpha; }\n```\nAdding a class changes a table, not logic; derived classes (`isalnum`, `isprint`) are just unions of bits.",
        detail: "This is the implementation the book sketches, and it is why classification costs a few instructions — no branches, no locale consultation on the hot path.",
      },
      {
        term: 'The signed char trap',
        kind: 'law',
        statement: "These functions take an `int` that must be representable as `unsigned char` (or be EOF). On platforms where plain `char` is signed — the common case — characters above 127 arrive as *negative* values, and passing them is undefined behavior (in practice, wild table indices). The rule, without exception: index and call through `(unsigned char)c` whenever bytes may exceed 127 — which is always, once UTF-8 is on the menu.",
        detail: "The bug is silent in pure-ASCII testing and appears only with real input — the worst kind of portability landmine.",
      },
      {
        term: 'Character Classification: the working contract',
        kind: 'definition',
        statement: '**Character Classification.** Character tests and transforms. You can claim this section when you can list the classification functions and the overlaps between their classes — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 36 (Strings); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Character Classification: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, implement classification as a bitmask table rather than code. Then, avoid the signed `char` trap that breaks bytes above 127. Finally, test the outcome against the section promise: Eleven classification functions plus two transforms; classes deliberately overlap (’A’ is in six of them).',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Reading three table rows',
        problem: "With the bit layout space = 1, alpha = 2, digit = 4, xdigit = 8, upper = 16, lower = 32, punct = 64, cntrl = 128 — compute the mask for 'A', '9', ' ' and the newline character.",
        steps: [
          { label: "'A' (0x41)", text: "Alphabetic, uppercase, and a hex digit: $2 + 16 + 8 = 26$." },
          { label: "'9' (0x39)", text: "Digit and hex digit: $4 + 8 = 12$. So `isxdigit('9')` is `12 & 8` — nonzero, true; `isalpha('9')` is `12 & 2` — zero, false." },
          { label: "' ' (0x20)", text: "Space only: 1 — printable but not graphical, since `isgraph` excludes it by definition." },
          { label: "Newline (0x0A)", text: "Whitespace-class and a control character: $1 + 128 = 129$." },
        ],
        result: "Masks: 'A' = 26, '9' = 12, ' ' = 1, newline = 129 — every predicate in the family is one AND against one byte of data.",
      },
      {
        title: 'Working through character classification',
        problem: 'Character tests and transforms. Your task: list the classification functions and the overlaps between their classes.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: list the classification functions and the overlaps between their classes. Write down the guarantee you will rely on — for this chapter it is: Eleven classification functions plus two transforms; classes deliberately overlap (’A’ is in six of them).' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::string s; std::getline(std::cin, s);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — implement classification as a bitmask table rather than code — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Classification is table data — one bitmask per character, one AND per predicate — not a branch tree. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Eleven classification functions plus two transforms; classes deliberately overlap (’A’ is in six of them). Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "Eleven classification functions plus two transforms; classes deliberately overlap ('A' is in six of them).",
      "Classification is table data — one bitmask per character, one AND per predicate — not a branch tree.",
      "Always go through `(unsigned char)c`: signed plain `char` turns bytes above 127 into negative, undefined arguments.",
    ],
    quiz: [
      {
        q: "The character '1' belongs to which classes?",
        options: [
          "`isdigit` only",
          "`isdigit` and `isxdigit` (and, derivably, alnum/print/graph)",
          "`isalpha` and `isdigit`",
          "none — it is punctuation",
        ],
        answer: 1,
        explanation: "Decimal digits are also hex digits; classes overlap by design.",
      },
      {
        q: "Why must classification calls go through `(unsigned char)c`?",
        options: [
          "To silence compiler warnings only",
          "Because signed plain `char` makes bytes above 127 negative — an undefined argument",
          "Because the functions take `double`",
          "To convert to lowercase first",
        ],
        answer: 1,
        explanation: "The parameter contract is 'representable as `unsigned char` or EOF' — negative values are undefined.",
      },
      {
        q: "In a table-driven classifier, `ispunct(c)` becomes:",
        options: [
          "a loop over the alphabet",
          "a comparison against a string of punctuation",
          "one table lookup AND one mask",
          "a call to the locale each time",
        ],
        answer: 2,
        explanation: "The mask is precomputed per character; the predicate is pure data access.",
      },
    ],
  },

  // ---------------------------------------------------------------- 36.3
  {
    sectionId: 'cpp-ch36-s3',
    readingTime: 7,
    intro: "The string type itself: constructors and concatenation, the find family, substrings and surgery, and the conversions to and from numbers — with the small-string optimization underneath making the common case allocation-free. This is the toolbox that replaces pointer arithmetic over char arrays with checked, composable operations.",
    objectives: [
      "Use the `basic_string` family and its core operations with their failure conventions",
      "Convert between text and numbers with the `to_string` and `sto*` functions",
      "Explain the small-string optimization and amortized growth",
    ],
    concepts: [
      {
        term: 'The basic_string family',
        kind: 'definition',
        statement: "**`basic_string<C, Tr, A>`** — `string` when `C` is `char` — is a value-semantic sequence of characters: copy, assign, compare, concatenate (`+`, `+=`, `append`, `push_back`), with the two things C arrays never gave you: a *stored* length (`size`/`length`, `empty`) and *growth* (`capacity`, `reserve`). The family: `string`, `wstring`, `u16string`, `u32string` — the same operations over each character type.",
        detail: "It is 'almost a container' in chapter 34's sense: the operations are vector-like, but it is optimized around characters terminating conventions and C interop (`data`, `c_str`).",
      },
      {
        term: 'The operation survey',
        kind: 'method',
        statement: "Element access: `s[i]`, `s.at(i)` (throwing), `front`, `back`, `data`, `c_str` (NUL-terminated for C APIs). The **find family**: `find`, `rfind`, `find_first_of`, `find_last_of`, `find_first_not_of`, `find_last_not_of` — each returning the index or **`npos`** on failure, each taking a start offset. Surgery: `substr(pos, n)`, `insert`, `erase`, `replace`, `compare`. The failure conventions differ and are worth memorizing: search returns `npos`; `substr` beyond the end throws `out_of_range`.",
        detail: "`find_first_of(s2, i)` answers 'the first character at or after `i` that is *any* of `s2`' — the tokenizer's primitive.",
      },
      {
        term: 'Conversions',
        kind: 'method',
        statement: "Numbers to text: `to_string` / `to_wstring`. Text to numbers: `stoi`, `stol`, `stoul`, `stoll`, `stoull` (integers — an optional `base`, and an out-parameter `pos` recording where parsing stopped) and `stof`, `stod`, `stold` (floating). All skip leading whitespace, accept an optional sign, parse the longest valid prefix, and **throw** — `invalid_argument` if no digits, `out_of_range` if too large. The `pos` parameter is how you resume parsing at the next character.",
        detail: "These are the replacements for `atoi` (which returned 0 for garbage) and `strtol` dances (whose end-pointer convention is why `pos` looks familiar).",
      },
      {
        term: 'Implementation realities',
        kind: 'insight',
        statement: "Strings copy by value but move cheaply; growth is amortized (capacity roughly doubles); and short strings ride inside the object itself — the **small-string optimization** — so the common case does no allocation at all. One post-book addition completes the picture: `string_view` (C++17), a non-owning window over characters for parsing and parameter passing without copying.",
        detail: "The SSO cutoff is implementation-defined — about 15 characters in a typical 32-byte `string` object — and the layout in the figure below is the idea, not a specific library's bytes.",
      },
      {
        term: 'Strings: the working contract',
        kind: 'definition',
        statement: '**Strings.** basic_string, conversions and views. You can claim this section when you can use the `basic_string` family and its core operations with their failure conventions — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 36 (Strings); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    figures: [
      {
        caption: "The small-string optimization. Left: a short string — roughly 15 characters in a typical 32-byte string object — is stored in a local buffer inside the object itself, next to its size: no heap allocation, no pointer chase, copying is a plain object copy. Right: once the text outgrows the buffer, the object switches to the pointer-size-capacity layout and the characters live in a heap block whose capacity grows amortized (about doubling), so appends are cheap on average. Either way `size()` is stored — $O(1)$ — and moves degenerate to swapping the three-word header. The exact cutoff is implementation-defined; the two-layout idea is universal.",
        svg: `<svg viewBox="0 0 720 320" width="100%" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Short string stored inline versus long string on the heap"><defs><marker id="sar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><text x="200" y="30" font-size="13.5" font-weight="600" fill="currentColor" text-anchor="middle">short string: rides inside the object</text><rect x="36" y="50" width="330" height="92" rx="8" fill="currentColor" opacity="0.1" stroke="currentColor"/><text x="201" y="70" font-size="11" fill="currentColor" opacity="0.75" text-anchor="middle">the string object (about 32 bytes)</text><rect x="52" y="80" width="216" height="46" rx="5" fill="currentColor" opacity="0.18" stroke="currentColor"/><text x="160" y="108" font-size="15" font-weight="600" fill="currentColor" text-anchor="middle">hi</text><text x="160" y="138" font-size="9.5" fill="currentColor" opacity="0.65" text-anchor="middle">local buffer (15 chars)</text><rect x="278" y="80" width="74" height="46" rx="5" fill="none" stroke="currentColor"/><text x="315" y="108" font-size="11" fill="currentColor" text-anchor="middle">size = 2</text><text x="201" y="166" font-size="11" fill="currentColor" opacity="0.8" text-anchor="middle">no heap allocation at all</text><text x="200" y="206" font-size="13.5" font-weight="600" fill="currentColor" text-anchor="middle">long string: the object points at the heap</text><rect x="36" y="222" width="330" height="80" rx="8" fill="currentColor" opacity="0.1" stroke="currentColor"/><rect x="52" y="240" width="56" height="46" rx="5" fill="none" stroke="currentColor"/><text x="80" y="268" font-size="11" fill="currentColor" text-anchor="middle">ptr</text><rect x="118" y="240" width="64" height="46" rx="5" fill="none" stroke="currentColor"/><text x="150" y="268" font-size="11" fill="currentColor" text-anchor="middle">size</text><rect x="192" y="240" width="64" height="46" rx="5" fill="none" stroke="currentColor"/><text x="224" y="268" font-size="11" fill="currentColor" text-anchor="middle">cap</text><text x="264" y="268" font-size="10" fill="currentColor" opacity="0.7">capacity ≥ size</text><rect x="440" y="234" width="244" height="58" rx="6" fill="currentColor" opacity="0.14" stroke="currentColor"/><text x="562" y="258" font-size="12" fill="currentColor" text-anchor="middle">the characters live here</text><text x="562" y="278" font-size="10.5" fill="currentColor" opacity="0.75" text-anchor="middle">heap buffer · grows about doubling</text><g stroke="currentColor" stroke-width="1.8" marker-end="url(#sar)"><line x1="108" y1="263" x2="436" y2="261"/></g><text x="562" y="216" font-size="11" fill="currentColor" opacity="0.8" text-anchor="middle">one allocation, one pointer to follow</text><text x="360" y="314" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">outgrowing the local buffer moves the text to the heap exactly once</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'Parsing a filename, twice',
        problem: "Split `string s = \"name.ext\";` into stem and extension; then parse `int n = stoi(\"  -42px\", &pos);` — tracking both the value and where parsing stopped.",
        steps: [
          { label: 'Find the dot', text: "`auto dot = s.find('.');` — the '.' sits at index 4, so `dot == 4`. (A missing dot would give `npos` — check before subtracting.)" },
          { label: 'Slice', text: "`s.substr(0, dot)` copies the 4 characters \"name\"; `s.substr(dot + 1)` copies from index 5 to the end — \"ext\", 3 characters. Indices 0–7 are accounted for." },
          { label: 'Parse', text: "`stoi(\"  -42px\", &pos)` skips 1 leading space, consumes the sign and the digits '4', '2', and stops at 'p': value −42, `pos == 4`." },
          { label: 'Resume', text: "The caller continues from offset 4 — `pos` is the contract for multi-token parsing without writing a pointer-arithmetic loop." },
        ],
        result: "stem = \"name\", extension = \"ext\", n = −42 with pos = 4 — lengths 4 and 3, every index reproducible by hand.",
      },
      {
        title: 'Working through strings',
        problem: 'basic_string, conversions and views. Your task: use the `basic_string` family and its core operations with their failure conventions.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: use the `basic_string` family and its core operations with their failure conventions. Write down the guarantee you will rely on — for this chapter it is: `basic_string` gives stored length, growth and value semantics over `char`, `wchar_t`, `char16_t`, `char32_t`.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::string s; std::getline(std::cin, s);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — convert between text and numbers with the `to_string` and `sto*` functions — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Search returns `npos`; `substr` throws past the end; the `sto*` functions throw and report their stop position through `pos`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `basic_string` gives stored length, growth and value semantics over `char`, `wchar_t`, `char16_t`, `char32_t`. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "`basic_string` gives stored length, growth and value semantics over `char`, `wchar_t`, `char16_t`, `char32_t`.",
      "Search returns `npos`; `substr` throws past the end; the `sto*` functions throw and report their stop position through `pos`.",
      "Short strings live inside the object (SSO); long ones are pointer-size-capacity with amortized doubling — and `string_view` (C++17) is the post-book non-owning window.",
    ],
    quiz: [
      {
        q: "`s.find('x')` reports failure by returning:",
        options: ["0", "−1", "`npos`", "an empty string"],
        answer: 2,
        explanation: "The search family's failure convention is the `npos` sentinel; `substr`'s is a thrown `out_of_range`.",
      },
      {
        q: "`stoi(\"  -42px\", &pos)` returns and sets `pos` to:",
        options: ["−42 and 4", "−42 and 3", "−4 and 2", "it throws"],
        answer: 0,
        explanation: "Whitespace skipped, sign and two digits consumed, 'p' stops it: four characters consumed, value −42.",
      },
      {
        q: "The small-string optimization means:",
        options: [
          "strings cannot exceed a fixed size",
          "short strings are stored inside the string object — no heap allocation",
          "strings are always copied lazily",
          "capacity is always equal to size",
        ],
        answer: 1,
        explanation: "A local buffer holds the common short case; the heap layout begins only when the text outgrows it.",
      },
      {
        q: "Which is NOT true of `u16string`?",
        options: [
          "It holds `char16_t` characters",
          "It has the same operations as `string`",
          "It grows dynamically",
          "It converts automatically to and from UTF-8 `string`s",
        ],
        answer: 3,
        explanation: "No automatic conversion exists — encoding conversions are the programmer's explicit work.",
      },
    ],
  },

  // ---------------------------------------------------------------- 36.4
  {
    sectionId: 'cpp-ch36-s4',
    readingTime: 4,
    intro: "The chapter's rules compress to three habits: let `string` own the text, classify characters through the library instead of arithmetic on their values, and reach for the find family before writing index arithmetic. Each replaces a classic buffer bug with a checked operation.",
    objectives: [
      "Replace `char` arrays with `string` at the earliest boundary",
      "Classify characters with the library, never with numeric comparisons",
      "Use the find family instead of hand-rolled index loops",
    ],
    concepts: [
      {
        term: 'Prefer string',
        kind: 'law',
        statement: "Use `string` where C style used `char*` and arrays: it knows its length, grows, cleans up, compares, and works with the algorithms and I/O. Raw character arrays are legitimate only at ABI boundaries — copy them into a `string` at the first opportunity and let the interface types stay clean.",
        detail: "This is the same ownership argument as chapter 34's, one level up: someone must own the buffer, and `string` is the type built to.",
      },
      {
        term: 'Classify, do not guess',
        kind: 'law',
        statement: "Test characters with the classification functions — never with arithmetic on numeric values. `if (c >= 'A' && c <= 'Z')` bakes in one collating order and silently misclassifies every encoding that orders differently; `isupper(c)` asks the library, which answers for the character set in force. And when bytes may exceed 127, the `(unsigned char)` cast is mandatory.",
        detail: "The numeric-comparison habit is invisible in ASCII-only testing and wrong the day the input is anything else.",
      },
      {
        term: 'Search, do not loop',
        kind: 'insight',
        statement: "Use `find`, `find_first_of` and `substr` instead of pointer arithmetic over buffers: the library versions handle `npos`, offsets and empty inputs uniformly, and their results are real strings that compose with `stoi`, the algorithms and I/O without copying. Hand-rolled index loops specialize in off-by-one bugs.",
        detail: "The find family is a small language for string structure — tokenizing with it reads like the problem statement.",
      },
      {
        term: 'Shipping rule for strings',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **`string` replaces character arrays everywhere except the ABI boundary, where copying into one is the first move.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
      {
        term: 'Review checklist for strings',
        kind: 'method',
        statement: 'Take the objectives as review questions: replace `char` arrays with `string` at the earliest boundary? Then classify characters with the library, never with numeric comparisons? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.',
        detail: 'A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.',
      },
    ],
    examples: [
      {
        title: 'A tokenizer, retired',
        problem: "A hand-rolled `char*` tokenizer walks a buffer with pointer increments, a saved `len`, and manual skipping of spaces. Rebuild it with the search family on `string`.",
        steps: [
          { label: 'Fields', text: "From a moving start `i`, the next delimiter is `s.find_first_of(\" \\t\", i)` (or `npos`), and the field is `s.substr(i, end - i)`; advance `i` past the delimiters with `find_first_not_of`." },
          { label: 'What disappeared', text: "Every pointer increment, terminator decision and end-check is gone; `npos` is the single, uniform end condition, and no length is ever computed by hand." },
          { label: 'What appeared', text: "Fields are genuine strings — passable to `stoi`, comparable, printable — with no buffer copying at the boundary." },
        ],
        result: "Same tokens, zero buffer arithmetic — and the class of bug the old code specialized in is no longer expressible.",
      },
      {
        title: 'Reviewing strings code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: replace `char` arrays with `string` at the earliest boundary.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: `string` replaces character arrays everywhere except the ABI boundary, where copying into one is the first move.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `std::string s; std::getline(std::cin, s);`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: classify characters with the library, never with numeric comparisons. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Classify with the library functions through `(unsigned char)` — never with comparisons on numeric values.' },
        ],
        result: 'The review ends with findings tied to reasons: `string` replaces character arrays everywhere except the ABI boundary, where copying into one is the first move. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      "`string` replaces character arrays everywhere except the ABI boundary, where copying into one is the first move.",
      "Classify with the library functions through `(unsigned char)` — never with comparisons on numeric values.",
      "The find family plus `substr` is the tokenizer; index arithmetic is where the off-by-ones live.",
    ],
    quiz: [
      {
        q: "The advice against `if (c >= 'A' && c <= 'Z')` style tests is because they:",
        options: [
          "are too slow",
          "bake in one collating order and misclassify other character sets",
          "do not compile for `char`",
          "always treat lowercase as uppercase",
        ],
        answer: 1,
        explanation: "Numeric comparisons hard-code ASCII's ordering; `isupper` defers the answer to the library.",
      },
      {
        q: "Raw `char` arrays remain appropriate:",
        options: [
          "inside string-processing algorithms",
          "at ABI boundaries, handed off to a string immediately",
          "whenever performance matters",
          "never, under any circumstances",
        ],
        answer: 1,
        explanation: "C interfaces speak arrays; the discipline is to cross that boundary once and own the text thereafter.",
      },
      {
        q: "The recommended replacement for a hand-rolled index loop that extracts fields is:",
        options: [
          "recursion",
          "the find family plus `substr`",
          "manual pointer increments",
          "converting everything to integers first",
        ],
        answer: 1,
        explanation: "`find`/`find_first_of` plus `substr` expresses the structure — and `npos` is the only end condition left.",
      },
    ],
  },
]
