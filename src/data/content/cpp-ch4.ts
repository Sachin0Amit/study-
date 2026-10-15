import type { SectionContent } from "../library"

// ============================================================================
// Bjarne Stroustrup, The C++ Programming Language, 4th Edition (C++11)
// Chapter 4: A Tour of C++ — Containers and Algorithms (Sections 4.1 – 4.6)
// ============================================================================

export const cppCh4Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: "cpp-ch4-s1",
    readingTime: 5,
    intro: "No real program is written from raw language alone: strings, files, containers, sorting and searching are everyone's bread and butter, and reimplementing them is where most bugs and most slowness enter. The C++ standard library is the language's answer — specified by the ISO standard, implemented everywhere, and organized so that its pieces snap together. The book calls knowing it the single most productive thing a C++ programmer can do.",
    objectives: [
      "List the major components of the standard library and their headers",
      "Explain the design constraints a standard library must satisfy",
      "Apply the library-first discipline to a programming task",
    ],
    concepts: [
      {
        term: "What the ISO C++ standard library provides",
        kind: "definition",
        statement: "The standard library is specified in the same ISO document as the language and includes: the **STL** — containers (`vector`, `list`, `map`, `unordered_map`, …), algorithms (`sort`, `find_if`, `accumulate`, …) and the iterators that glue them; **strings**; **stream I/O** with formatting; **numerics** (`complex`, `valarray`, random numbers); **regular expressions**; **concurrency** (`thread`, `mutex`, `future`, `atomic`); smart pointers (`unique_ptr`, `shared_ptr`); time and dates, function objects, and the whole C standard library.",
        detail: "Chapter organization mirrors this: containers in 31, algorithms in 32, iterators in 33 — each with the library's own design chapter following the tours.",
      },
      {
        term: "The library's design constraints",
        kind: "law",
        statement: "A standard library is written for *everyone*, so its rules are strict: components must be **usable without reading their source** (names, semantics and complexity must be documented); **type-safe** at their interfaces (no `printf`-style holes); **fast enough to be the default choice** (the code must be inlinable and efficient on the hottest paths); and **uniform** — once you know one container and its iterator protocol, you know them all, and every algorithm works on every container.",
        detail: "It must also never break the billions of lines of existing code that use it: stability is a feature, and extensions are additive.",
      },
      {
        term: "Use the library first",
        kind: "method",
        statement: "The discipline: before writing any data structure, search, or formatter, **find the standard-library version and use it**. The results are shorter code (fewer places for bugs), clearer code (named operations instead of index arithmetic), and often *faster* code — library components are used by millions of programs, so implementations optimize them hard.",
        detail: "The book's framing: you should be genuinely surprised when you need to write your own container — the tour's hand-built `Vector` was pedagogy, not a recommendation.",
      },
      {
        term: "Libraries: the working contract",
        kind: "definition",
        statement: "**Libraries.** What the standard library gives you and how it is organized. You can claim this section when you can list the major components of the standard library and their headers — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 4 (A Tour of C++: Containers and Algorithms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Libraries: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, explain the design constraints a standard library must satisfy. Then, apply the library-first discipline to a programming task. Finally, test the outcome against the section promise: The standard library ships with the language: STL containers/algorithms/iterators, strings, streams, numerics, regex, concurrency, smart pointers.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Auditing a task against the library inventory",
        problem: "A program must: read whitespace-separated numbers from a file; sort them; report the median; store names against ages and look them up by name; and print the result. Which standard components cover each requirement, and how many containers must be written from scratch?",
        steps: [
          { label: "Reading", text: "`ifstream` (stream I/O, §4.3) with the `>>` operator gives the numeric loop `while (ifs >> t)`; no file handling code exists to write." },
          { label: "Sorting", text: "`std::sort` from the algorithms section (§4.5) orders the `vector<double>`; no hand-written sort." },
          { label: "Median", text: "Indexing the sorted `vector` (§4.4) — the tour's temperature example is exactly this program." },
          { label: "Name lookup", text: "`map<string,int>` (§4.4) is an associative array: `words[name]` finds or inserts; no hand-written hash or tree." },
          { label: "Total", text: "Four requirements, four standard components, **zero** hand-written containers — and every line of the program remains about the problem, not about infrastructure." },
        ],
        result: "The audit is the skill: recognizing that a requirement is already a library component is faster than any optimization of a wrong hand-rolled solution.",
      },
      {
        title: "Working through libraries",
        problem: "What the standard library gives you and how it is organized. Your task: list the major components of the standard library and their headers.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: list the major components of the standard library and their headers. Write down the guarantee you will rely on — for this chapter it is: The standard library ships with the language: STL containers/algorithms/iterators, strings, streams, numerics, regex, concurrency, smart pointers." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::map<std::string, int> counts; counts[key]++;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain the design constraints a standard library must satisfy — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Its constraints: documented interfaces, type safety, efficiency, uniformity, and permanent stability. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: The standard library ships with the language: STL containers/algorithms/iterators, strings, streams, numerics, regex, concurrency, smart pointers. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "The standard library ships with the language: STL containers/algorithms/iterators, strings, streams, numerics, regex, concurrency, smart pointers.",
      "Its constraints: documented interfaces, type safety, efficiency, uniformity, and permanent stability.",
      "Library-first is the default; writing your own container should be an event worth remarking on.",
    ],
    quiz: [
      {
        q: "Where is the STL portion of the standard library described by the book's own structure?",
        options: [
          "Part II, with the basic facilities",
          "Part IV — containers in Chapter 31, algorithms in Chapter 32, iterators in Chapter 33",
          "Only in the tours; there is no detailed treatment",
          "Appendix A of the ISO paper",
        ],
        answer: 1,
        explanation: "Part IV is the standard library part; the three STL chapters map one-to-one to the STL's three coordinated components.",
      },
      {
        q: "Which is NOT one of the library's stated design constraints?",
        options: [
          "Components usable without reading their source",
          "Type-safe interfaces",
          "Mandatory garbage collection for all containers",
          "Efficiency good enough to be the default choice",
        ],
        answer: 2,
        explanation: "The library is built on deterministic destruction and value semantics; garbage collection is nowhere required of implementations.",
      },
      {
        q: "A colleague hand-writes a balanced tree for name lookup. The library-first rule says:",
        options: [
          "Good practice — trees are always worth writing yourself",
          "The tree should inherit from `std::map`",
          "Hand-written containers must be faster than the library's",
          "`std::map` (or `std::unordered_map`) almost certainly does this better: documented, tested, tuned",
        ],
        answer: 3,
        explanation: "The library's ordered `map` and hashed `unordered_map` cover the need; hand-rolling duplicates tested code and adds a bug surface.",
      },
    ],
  },

  // ---------------------------------------------------------------- 4.2
  {
    sectionId: "cpp-ch4-s2",
    readingTime: 5,
    intro: "The library tour proper starts with the most-used type in the library: the standard string. It exists because C-style strings — zero-terminated char arrays — push onto every programmer the same three bugs: overflow on copy, overflow on concatenation, and the cost of finding the length each time. A string that owns its characters makes all three impossible by construction.",
    objectives: [
      "Use `std::string` for construction, concatenation, comparison and substring extraction",
      "Perform string/number conversions in both directions",
      "Contrast `string` value semantics with C-string pointer semantics",
    ],
    concepts: [
      {
        term: "The standard string",
        kind: "definition",
        statement: "`std::string` owns a character sequence: `string name = \"Niels Stroustrup\";` initializes it from a literal (copying the characters into storage `name` manages). It grows as needed under concatenation (`name += '!';`), supports assignment and comparison with full value semantics (`==`, `<` compare lexicographically), subscripting `s[i]`, `s.size()`, and the substring operation `s.substr(pos, len)` — all checked against the sequence's actual length.",
        detail: "Because a `string` is a proper object with copy, move and destruction, you never again choose a buffer size — the type manages storage exactly as `vector` does for elements.",
      },
      {
        term: "The everyday operations",
        kind: "method",
        statement: "The working set: concatenation `+` and `+=`; `substr(pos, len)` extracts a copy of a region (defaults: from `pos` to the end); `replace(pos, len, s2)` overwrites a region with another string; comparisons are lexicographic — character by character by code point, prefix before longer string; and the conversion pair `to_string(3.14)` (producing the `string` `\"3.14\"`) and `stod(\"2.78\")` (producing the `double` 2.78) bridge text and numbers.",
        detail: "Lexicographic comparison is the same ordering dictionaries use: `\"ape\" < \"apple\"` because at the first differing position `'e' < 'p'`; a prefix is smaller than any string extending it.",
      },
      {
        term: "String versus C-string",
        kind: "insight",
        statement: "A C-style string is a `const char*` — a pointer to a zero-terminated array. It knows nothing of its own length (finding it is an O(n) scan), it owns nothing (whoever holds it must manage the storage), and every operation on it (`strcpy`, `strcat`) trusts the caller about buffer sizes. `string` is the type-shaped fix: length stored, storage owned, operations bounded. The bridge is `s.c_str()`, which hands out a read-only `const char*` view of `string` storage for C interfaces.",
        detail: "The book's rule: use `string` in your code, and convert at the boundary only where a C interface demands it.",
      },
      {
        term: "Strings: the working contract",
        kind: "definition",
        statement: "**Strings.** Strings, their operations and usability. You can claim this section when you can use `std::string` for construction, concatenation, comparison and substring extraction — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 4 (A Tour of C++: Containers and Algorithms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Strings: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, perform string/number conversions in both directions. Then, contrast `string` value semantics with C-string pointer semantics. Finally, test the outcome against the section promise: `string` owns its characters: growth, comparison, `substr(pos, len)` and `replace` are all bounded by the real length.",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Surgery on a name: substr, replace and lexicographic order",
        problem: "Given `string name = \"Niels Stroustrup\";` (16 characters), determine: `name.substr(6, 10)`, `name.substr(6)`, the value and length of `name.replace(0, 5, \"Nicholas\")`, and which of `\"ape\"` and `\"apple\"` compares smaller.",
        steps: [
          { label: "Step 1: check the layout", text: "Indices: `N`(0) `i`(1) `e`(2) `l`(3) `s`(4) ` `(5) `S`(6) … `p`(15). The surname occupies indices 6 through 15 — exactly 10 characters." },
          { label: "Step 2: `substr(6, 10)`", text: "Ten characters starting at index 6: `\"Stroustrup\"` — position and length, not start-and-end. This is the book's own example." },
          { label: "Step 3: `substr(6)`", text: "Length omitted defaults to “to the end”: also `\"Stroustrup\"`. `substr` with no arguments would copy the whole string." },
          { label: "Step 4: `replace(0, 5, \"Nicholas\")`", text: "The five characters `Niels` are replaced by the eight of `Nicholas`, shifting the rest right: the string becomes `\"Nicholas Stroustrup\"` — length $8 + 1 + 10 = 19$. Note the growth: `string` reallocated internally; nothing overflows." },
          { label: "Step 5: compare", text: "`\"ape\"` vs `\"apple\"`: positions 0,1,2 are `a`,`p`,`e` vs `a`,`p`,`p`; the first difference is at index 2, where `'e'` (101) < `'p'` (112), so `\"ape\" < \"apple\"` — comparison stops at the first mismatch." },
        ],
        result: "`\"Stroustrup\"`, `\"Stroustrup\"`, `\"Nicholas Stroustrup\"` of length 19, and `\"ape\"` is the smaller — all from position/length semantics and lexicographic order.",
      },
      {
        title: "Working through strings",
        problem: "Strings, their operations and usability. Your task: use `std::string` for construction, concatenation, comparison and substring extraction.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use `std::string` for construction, concatenation, comparison and substring extraction. Write down the guarantee you will rely on — for this chapter it is: `string` owns its characters: growth, comparison, `substr(pos, len)` and `replace` are all bounded by the real length." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::map<std::string, int> counts; counts[key]++;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — perform string/number conversions in both directions — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Lexicographic comparison stops at the first differing character; a proper prefix precedes its extensions. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `string` owns its characters: growth, comparison, `substr(pos, len)` and `replace` are all bounded by the real length. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`string` owns its characters: growth, comparison, `substr(pos, len)` and `replace` are all bounded by the real length.",
      "Lexicographic comparison stops at the first differing character; a proper prefix precedes its extensions.",
      "Use C-strings only at the boundary via `.c_str()`; in program logic, `string` replaces every `strcpy`-class bug with a checked operation.",
    ],
    quiz: [
      {
        q: "For `string s = \"Niels Stroustrup\";`, what is `s.substr(6, 10)`?",
        options: [
          "`\"Stroustrup\"`",
          "Ill-formed — the string is only 16 long",
          "`\" Stroustrup\"`",
          "`\"Stroust\"`",
        ],
        answer: 0,
        explanation: "`substr(pos, len)` takes position then length: 10 characters from index 6, which lands exactly on the surname.",
      },
      {
        q: "Which comparison result is correct?",
        options: [
          "They compare equal",
          "`\"ape\" < \"apple\"`",
          "`\"apple\" < \"ape\"`",
          "Comparison depends on locale everywhere",
        ],
        answer: 1,
        explanation: "The first difference is at index 2 (`'e'` vs `'p'`), and `'e'` precedes `'p'` in the character set — so `\"ape\"` is smaller.",
      },
      {
        q: "What is the essential difference between `string` and `const char*`?",
        options: [
          "None — `string` is an alias for `const char*`",
          "`string` is always heap-allocated by the programmer",
          "C-strings cannot be converted to `string`",
          "`string` owns its storage and knows its length; a C-string is an unowned pointer to a zero-terminated array",
        ],
        answer: 3,
        explanation: "Ownership and length knowledge are exactly what removes the overflow and scan costs of C-string code.",
      },
      {
        q: "`to_string(3.14)` produces:",
        options: [
          "The `double` 3.14 again",
          "A compile error — no such function",
          "The `string` `\"3.14\"`",
          "A `char` array of length 4",
        ],
        answer: 2,
        explanation: "`to_string` converts numbers to their decimal text; the reverse direction is `stod`/`stoi`, which parse numbers out of strings.",
      },
    ],
  },

  // ---------------------------------------------------------------- 4.3
  {
    sectionId: "cpp-ch4-s3",
    readingTime: 6,
    intro: "C++ inherited from C a file-and-format I/O model and replaced its type system with streams: every type gets its own `<<` and `>>` operation, so the compiler — not a format string — decides how values are read and written. The tour shows the essentials: the console streams, file streams that close themselves, and the truth that a stream is usable as a condition, which turns the read loop into one idiom you will use for the rest of your career.",
    objectives: [
      "Read and write with the standard streams and with file streams",
      "Use the stream-as-condition idiom to loop until input ends",
      "Format into and parse from strings with string streams",
    ],
    concepts: [
      {
        term: "The stream model",
        kind: "definition",
        statement: "A stream is a source or sink of characters with typed operations on top: `std::cout << \"Enter: \"` writes the string, `std::cin >> t` reads a formatted value into `t`. The operators are **overloaded per type** — `<<` for `int` formats digits, for `string` copies characters — so no format string can ever disagree with the argument list. `cin`, `cout`, `cerr` (unbuffered, for errors) are the console trio from `<iostream>`.",
        detail: "Because `<<` returns the stream itself, writes chain left to right: `std::cout << \"x = \" << x << '\\n';` is one statement with three insertions.",
      },
      {
        term: "File streams",
        kind: "method",
        statement: "`std::ofstream ofs {\"squares.txt\"};` creates (or overwrites) the file and opens it for writing; `ofs << i << '\\n';` writes to it; `std::ifstream ifs {\"data.txt\"};` opens it for reading. The files close **in the destructors** when the stream object leaves scope — even on exceptions — so there is no close-call to forget, and no locked file left behind by an early return.",
        detail: "This is the same constructor-acquires/destructor-releases pattern as `Vector`'s `delete[] elem;`: resource management by scope, not by discipline.",
      },
      {
        term: "Streams as conditions",
        kind: "method",
        statement: "A stream converts to `bool`: `true` while the last operation succeeded, `false` once a read fails — typically at end of file or on malformed input. This powers the input idiom `for (double t; cin >> t; ) temps.push_back(t);` — read into `t`, test the stream, stop at the first failure — which reads an entire unknown-length input with no counter and no sentinel value.",
        detail: "After failure, the stream stays in a failed state until cleared, so the idiom never re-reads the bad token: a malformed value ends the loop exactly where the data ends.",
      },
      {
        term: "String streams and formatting",
        kind: "insight",
        statement: "`std::ostringstream` is a stream that writes into a `string` (compose a message, then call `.str()` to get it); `std::istringstream` reads from one (parse a line into typed fields: `istringstream iss {line}; iss >> month >> day >> year;`). General formatting — field widths, precision, locales — attaches to streams with manipulators; the tours only need defaults.",
        detail: "In-memory formatting turns I/O into composition: build the text with the same `<<` you use for files, then hand the string onward — log messages, CSV rows, protocols.",
      },
      {
        term: "Stream I/O: the working contract",
        kind: "definition",
        statement: "**Stream I/O.** Streams, files and formatting. You can claim this section when you can read and write with the standard streams and with file streams — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 4 (A Tour of C++: Containers and Algorithms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Writing and re-reading the squares file",
        problem: "Write the squares of 1..10 to a file, one per line, then reopen the file and compute the sum of the values read back. Also compute the file's size on disk (one number per line, no spaces).",
        steps: [
          { label: "Step 1: write", text: "`std::ofstream ofs {\"squares.txt\"}; for (int i = 1; i <= 10; ++i) ofs << i*i << '\\n';` — the loop body writes `1`, `4`, `9`, `16`, `25`, `36`, `49`, `64`, `81`, `100`, each followed by a newline; the file closes when `ofs` leaves scope." },
          { label: "Step 2: read back", text: "`std::ifstream ifs {\"squares.txt\"}; int sum = 0; for (int v; ifs >> v; ) sum += v;` — the stream-as-condition loop runs exactly ten times, then hits end-of-file and stops." },
          { label: "Step 3: the sum", text: "$1+4+9+16+25+36+49+64+81+100 = 385$ — the sum of the first ten squares, which you can verify by the formula $\\frac{10 \\cdot 11 \\cdot 21}{6} = 385$." },
          { label: "Step 4: the size", text: "Digit counts: `1`,`4`,`9` are 1 digit each (3), `16`..`81` are six 2-digit numbers (12), `100` is 3 digits — 18 digits total, plus 10 newlines = **28 bytes** (each `int` was written in its natural width, no padding)." },
          { label: "Step 5: failure behavior", text: "Had the file contained a stray word, `ifs >> v` would fail on it and the loop would stop right there — the sum would reflect only the numbers before the bad token, never a corrupted value." },
        ],
        result: "Ten written, ten read, sum 385, 28 bytes — with no open/close calls, no buffer, and no format string anywhere in the program.",
      },
      {
        title: "Working through stream I/O",
        problem: "Streams, files and formatting. Your task: read and write with the standard streams and with file streams.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: read and write with the standard streams and with file streams. Write down the guarantee you will rely on — for this chapter it is: `<<` and `>>` are type-overloaded: the compiler formats, so format strings cannot disagree with arguments." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::map<std::string, int> counts; counts[key]++;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — use the stream-as-condition idiom to loop until input ends — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `ofstream`/`ifstream` own their files and close them at scope exit; streams convert to `bool` and the `while (ifs >> v)` idiom loops to first failure. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `<<` and `>>` are type-overloaded: the compiler formats, so format strings cannot disagree with arguments. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`<<` and `>>` are type-overloaded: the compiler formats, so format strings cannot disagree with arguments.",
      "`ofstream`/`ifstream` own their files and close them at scope exit; streams convert to `bool` and the `while (ifs >> v)` idiom loops to first failure.",
      "`ostringstream`/`istringstream` apply the same operators to in-memory strings for parsing and composing text.",
    ],
    quiz: [
      {
        q: "What does `while (cin >> t)` test, and when does the loop stop?",
        options: [
          "It tests the stream's state after the read; stops at end of input or malformed input, when the read fails",
          "It always runs forever, since streams cannot be tested",
          "It tests that the file is open; stops only on a thrown exception",
          "It tests that `t` is positive; stops at the first negative value",
        ],
        answer: 0,
        explanation: "A stream used as a condition is `true` while the last operation succeeded; failure (EOF or a bad value) makes it `false` and ends the loop cleanly.",
      },
      {
        q: "When is the file of `std::ofstream ofs {\"data.txt\"};` closed?",
        options: [
          "At the next `<<` operation",
          "When `ofs`'s destructor runs at scope exit, even if an exception was thrown",
          "Only when you call `close()` explicitly",
          "Never — the operating system handles it at reboot",
        ],
        answer: 1,
        explanation: "File streams are RAII objects: the destructor closes the file, so no path out of the scope — return, break, or throw — can leak it.",
      },
      {
        q: "The type-safety advantage of `cout << x` over `printf(\"%d\", x)` when `x` is a `double` is:",
        options: [
          "None — both print 3.5 for the value 3.5",
          "`printf` cannot print doubles at all",
          "Streams are always faster",
          "The `<<` for `double` is selected by the compiler from `x`'s type; a `%d` in a format string would misinterpret the argument with no diagnostic",
        ],
        answer: 3,
        explanation: "Format strings are data, not code: `%d` on a `double` is undefined behavior at run time, while `<<` resolves the formatter at compile time.",
      },
      {
        q: "To parse the line `\"3 14 159\"` into three integers, the idiomatic tool is:",
        options: [
          "An `istringstream` initialized from the line, extracting with `>>`",
          "`sscanf` with a format string",
          "Splitting the `string` manually with `substr` loops",
          "`to_string` on the line",
        ],
        answer: 0,
        explanation: "`std::istringstream iss {line}; iss >> a >> b >> c;` reuses the typed extraction operators on in-memory text — the stream model turned loose on strings.",
      },
    ],
  },

  // ---------------------------------------------------------------- 4.4
  {
    sectionId: "cpp-ch4-s4",
    readingTime: 7,
    intro: "The heart of the standard library is its container set, and the tour builds it around one program: read an unknown number of values, then ask for the median. That program needs a structure that grows without bound, keeps what was added, and can be ordered on demand — which is `vector`. The section then widens to the choice among `list`, `map` and `unordered_map`, each defined by its access pattern.",
    objectives: [
      "Use `vector`: `push_back`, `[]`, `size()`, and the sort-then-index median pattern",
      "Explain a `vector`'s memory layout and amortized growth",
      "Choose among `vector`, `list`, `map` and `unordered_map` by access pattern",
    ],
    concepts: [
      {
        term: "The `vector`",
        kind: "definition",
        statement: "A `std::vector<T>` is a variable-length sequence of `T`s in a **contiguous array on the free store**, with the object itself holding only pointers to the array's beginning, end of elements, and end of storage (its size and capacity). `push_back` appends (relocating to a larger array when capacity is exhausted — amortized constant time); `v[i]` gives unchecked element access; `v.size()` reports the count; `v.at(i)` is the checked form; and range-`for` walks all elements. Contiguity is the performance contract: iteration walks memory linearly, and elements cache-localize.",
        detail: "The tour's program: `vector<double> temps; for (double t; cin >> t; ) temps.push_back(t); sort(temps.begin(), temps.end());` then `temps[temps.size()/2]` is the median — the whole pipeline of a growing, sortable sequence.",
      },
      {
        term: "The `list`",
        kind: "definition",
        statement: "A `std::list<T>` is a **doubly-linked list**: each element is a node holding the value plus forward and backward pointers, so inserting or erasing at a known position is O(1) and never moves other elements. The price: no `[]` subscript (reaching element *k* means walking the chain), two pointers of overhead per element, and poor cache locality — which is why the tour's guidance remains *vector by default*, list when splicing and mid-sequence surgery dominate.",
        detail: "The book's example is a shopping list being merged item-by-item — a pattern of insertion between existing elements, not of indexed access.",
      },
      {
        term: "The `map`",
        kind: "definition",
        statement: "A `std::map<K,V>` is an **ordered associative array**: it stores (key, value) pairs kept sorted by key in a balanced tree, so lookup, insertion and removal are $O(\\log n)$. The subscript operator looks up the key — and **inserts the pair with the default value if absent**: `++words[s];` inside a loop is the entire word-counting program. Iteration visits pairs in ascending key order.",
        detail: "`std::unordered_map<K,V>` is the hash-table alternative: expected $O(1)$ lookup, but no ordering guarantee on iteration — pick it when you need speed and never need sorted traversal.",
      },
      {
        term: "Choosing a container",
        kind: "insight",
        statement: "The choice is an access-pattern question: mostly appending and indexing → **`vector`**; frequent insertion/erasure in the middle at known positions → **`list`**; lookup by key with sorted iteration → **`map`**; fastest key lookup, order irrelevant → **`unordered_map`**. The defaults are strong: the tour states that `vector` should be the first container you reach for, and that switching is a decision you make with a reason (ideally a measurement).",
        detail: "All four offer `begin()`/`end()`, so the algorithms of §4.5 work over all of them — the uniformity that makes the choice reversible, not permanent.",
      },
      {
        term: "Containers: the working contract",
        kind: "definition",
        statement: "**Containers.** Vector, map and the container overview. You can claim this section when you can use `vector`: `push_back`, `[]`, `size()`, and the sort-then-index median pattern — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 4 (A Tour of C++: Containers and Algorithms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    figures: [
      {
        caption: "A `std::vector` after five `push_back` calls into a capacity-8 array: the object holds three pointers — `alloc` (first element), `last` (one past the last used), `cap` (one past the storage) — so size is `last − alloc` = 5 and capacity is `cap − alloc` = 8. The sixth `push_back` writes into cell 5 for free; the ninth must relocate the whole array to a larger allocation, moving the elements across.",
        afterConcept: 1,
        svg: '<svg viewBox="0 0 760 300" width="100%" role="img" aria-label="Vector object with three pointers above a heap array of eight cells, five used and three spare"><rect x="60" y="24" width="230" height="104" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><text x="175" y="44" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" font-weight="700" fill="currentColor">vector&lt;int&gt; v</text><text x="80" y="66" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">alloc  ●</text><circle cx="172" cy="62" r="3.6" fill="currentColor"/><text x="80" y="92" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">last  ●</text><circle cx="172" cy="88" r="3.6" fill="currentColor"/><text x="80" y="118" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">cap   ●</text><circle cx="172" cy="114" r="3.6" fill="currentColor"/><text x="175" y="146" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.7">the object itself — 3 pointers, 24 bytes on a 64-bit machine</text><rect x="60" y="188" width="480" height="40" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="60" y="188" width="300" height="40" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8"/><line x1="120" y1="188" x2="120" y2="228" stroke="currentColor" stroke-width="1.1"/><line x1="180" y1="188" x2="180" y2="228" stroke="currentColor" stroke-width="1.1"/><line x1="240" y1="188" x2="240" y2="228" stroke="currentColor" stroke-width="1.1"/><line x1="300" y1="188" x2="300" y2="228" stroke="currentColor" stroke-width="1.1"/><line x1="360" y1="188" x2="360" y2="228" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3 3"/><line x1="420" y1="188" x2="420" y2="228" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3 3"/><line x1="480" y1="188" x2="480" y2="228" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3 3"/><text x="90" y="212" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">7</text><text x="150" y="212" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">9</text><text x="210" y="212" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">11</text><text x="270" y="212" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">13</text><text x="330" y="212" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10.5" fill="currentColor">15</text><text x="390" y="212" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.55">spare</text><text x="450" y="212" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.55">spare</text><text x="510" y="212" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.55">spare</text><path d="M 176 62 C 300 62 240 172 62 182" fill="none" stroke="currentColor" stroke-width="1.4"/><polygon points="58,175 62,186 70,179" fill="currentColor"/><path d="M 176 88 C 320 100 370 150 362 182" fill="none" stroke="currentColor" stroke-width="1.4"/><polygon points="355,176 363,185 368,175" fill="currentColor"/><path d="M 176 114 C 380 130 500 150 538 182" fill="none" stroke="currentColor" stroke-width="1.4"/><polygon points="530,176 538,185 544,175" fill="currentColor"/><text x="210" y="252" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">size = last − alloc = 5</text><text x="452" y="252" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">capacity = cap − alloc = 8</text><path d="M 560 172 C 590 60 700 40 720 96" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"/><polygon points="713,89 723,100 723,88" fill="currentColor"/><text x="648" y="40" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor">growth: when full, allocate</text><text x="648" y="54" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor">a larger array, move elements,</text><text x="648" y="68" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor">free the old block</text><text x="380" y="288" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" font-style="italic" fill="currentColor" opacity="0.8">contiguous free-store storage — the elements cache-localize because of it</text></svg>',
      },
    ],
    examples: [
      {
        title: "The temperature program: grow, sort, take the median",
        problem: "Seven temperature readings arrive: 61.5, 63.7, 59.0, 58.1, 57.4, 59.3, 60.9 °C. Run the tour's program — push each into a `vector<double>`, `sort` it, report `temps[temps.size()/2]` — and also compute the mean, checking both by hand.",
        steps: [
          { label: "Step 1: fill", text: "Seven `push_back` calls grow the vector to `size() == 7`; if capacity ran out along the way, growth relocated the array — the program neither knows nor cares." },
          { label: "Step 2: sort", text: "`sort(temps.begin(), temps.end())` orders the values ascending: 57.4, 58.1, 59.0, 59.3, 60.9, 61.5, 63.7." },
          { label: "Step 3: median, the tour's way", text: "`temps[temps.size()/2]` = `temps[3]` = **59.3** — for an odd count 7, index 3 is the exact middle (three below, three above)." },
          { label: "Step 4: mean as a check", text: "Sum: $61.5+63.7+59.0+58.1+57.4+59.3+60.9 = 419.9$; dividing by 7 gives a mean of $59.99$, slightly above the median — the outlier 63.7 pulls the mean up while leaving the middle value alone." },
          { label: "Step 5: the even-count caveat", text: "With eight readings, `size()/2` is 4 — the fifth of eight, *not* the average of the fourth and fifth; the tour's one-liner is exact only for odd counts, and a correct even-count median needs `(temps[n/2 - 1] + temps[n/2]) / 2`. Knowing when a formula's precondition fails is the point of the check." },
        ],
        result: "Median 59.3 °C, mean 59.99 °C: an unknown-length input reduced to order statistics in six lines — vector + sort + index.",
      },
      {
        title: "Working through containers",
        problem: "Vector, map and the container overview. Your task: use `vector`: `push_back`, `[]`, `size()`, and the sort-then-index median pattern.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use `vector`: `push_back`, `[]`, `size()`, and the sort-then-index median pattern. Write down the guarantee you will rely on — for this chapter it is: `vector` = contiguous free-store array plus three pointers; `push_back` amortized, `[]` unchecked, `at()` checked." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::map<std::string, int> counts; counts[key]++;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain a `vector`'s memory layout and amortized growth — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `map` is a balanced tree: $O(\\log n)$ keyed access and sorted iteration, with `[]` inserting a default value on a miss — `++words[s]` is a word counter. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `vector` = contiguous free-store array plus three pointers; `push_back` amortized, `[]` unchecked, `at()` checked. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`vector` = contiguous free-store array plus three pointers; `push_back` amortized, `[]` unchecked, `at()` checked.",
      "`map` is a balanced tree: $O(\\log n)$ keyed access and sorted iteration, with `[]` inserting a default value on a miss — `++words[s]` is a word counter.",
      "Choose by access pattern — `vector` by default; `list` for mid-sequence surgery; `map` or `unordered_map` for keyed access, ordered or not.",
    ],
    quiz: [
      {
        q: "In `++words[s];` on a `map<string,int>`, the key `s` was not yet present. What happened?",
        options: [
          "The program threw a `std::out_of_range`",
          "The key was inserted with a random value",
          "The map inserted the pair (`s`, 0), then the increment made it 1",
          "The statement was a no-op",
        ],
        answer: 2,
        explanation: "`map`'s `[]` default-inserts on a miss — the exact behavior that turns the loop body into a one-statement word counter.",
      },
      {
        q: "Why does the tour recommend `vector` over `list` by default?",
        options: [
          "`list` cannot hold fundamental types",
          "Contiguous storage gives cache locality and indexed access; list pays two pointers per element and cannot subscript",
          "Vectors use less memory per element when nearly empty, always",
          "Lists are not part of the standard library",
        ],
        answer: 1,
        explanation: "Node-based storage scatters elements and forbids subscripting; for the common pattern of append-and-iterate, contiguity wins, and the tour says to switch only for a reason.",
      },
      {
        q: "What is the complexity of lookup in a `std::map` with n entries?",
        options: [
          "$O(1)$ guaranteed",
          "$O(n)$ always",
          "$O(\\log n)$ — it is a balanced tree",
          "$O(n \\log n)$",
        ],
        answer: 2,
        explanation: "The ordered map is a red-black tree, so search, insert and erase are all logarithmic; the *unordered* map is the hash-based $O(1)$-expected one.",
      },
      {
        q: "A `push_back` into a full `vector` triggers:",
        options: [
          "A thrown exception every time",
          "Silent loss of the new element",
          "Conversion into a list",
          "Relocation: allocate a larger array, move the elements across, free the old block — amortized constant time per append",
        ],
        answer: 3,
        explanation: "Growth is why appending is amortized O(1): occasional linear relocations spread over the many constant-time appends they enable.",
      },
      // PYQ-pattern — ordered versus hashed container complexity (rephrased)
      {
        q: "A program stores one million records keyed by ID and looks them up constantly, with no need for ordering. Which container choice matches the library guarantees?",
        options: ["`std::vector`, because keyed lookup in a vector is logarithmic", "`std::list`, because pointer hops are friendly to the cache", "`std::map`, because hashing always beats trees for ordered data", "`std::unordered_map`, because average lookup is constant time, while `std::map` lookup is logarithmic"],
        answer: 3,
        explanation: "Step 1: The data given is one million keyed records with lookup-dominated access and no ordering need. Step 2: The governing rules are the container guarantees: `unordered_map` averages constant-time lookup through hashing, `map` offers logarithmic lookup through a balanced tree plus ordering, and sequence containers provide no keyed lookup at all. Step 3: Computing the gap, a tree search needs about twenty comparisons at this size while a hash lookup averages near one probe, so the hashed container removes nearly all per-query work. Step 4: The distractors fail because vectors and lists lack keyed lookup, and the tree pays logarithmic cost precisely to maintain order nobody needs. Step 5: Therefore the hashed container is the matching choice."
      }
    ],
  },

  // ---------------------------------------------------------------- 4.5
  {
    sectionId: "cpp-ch4-s5",
    readingTime: 7,
    intro: "Containers hold data; algorithms process it. The tour's central example of the two worlds meeting is the find operation, and the standard library's answer is a separation so clean it looks strange at first: algorithms never ask what container they run on. They take iterators — positions — instead. That one decision is what makes a single sort serve vector, array, list and stream alike.",
    objectives: [
      "Read the half-open iterator range [b:e) and explain what `end()` points to",
      "Use `sort`, `find_if`, `count_if` and `accumulate` with lambdas and function objects",
      "Explain why algorithms-plus-iterators beat member loops and hand-rolled searches",
    ],
    concepts: [
      {
        term: "The iterator model",
        kind: "definition",
        statement: "An **iterator** is a position in a sequence. Every container exposes `begin()` (its first element) and `end()` (the position **one past its last element**), and the standard algorithms operate on the pair `[b:e)` — the **half-open range**: it contains `b` and everything up to but not including `e`. An empty sequence is exactly the pair where `b == e`, which is why every algorithm's loop test is `b != e`. Dereferencing `end()` is not merely wrong — it has no element to be wrong about; it is the *outside* position.",
        detail: "This convention makes the number of elements in `[b:e)` simply `e − b` for random-access iterators, and lets algorithms describe zero-length inputs without a special case.",
      },
      {
        term: "The core algorithms",
        kind: "definition",
        statement: "The everyday set from `<algorithm>` and `<numeric>`: `sort(b, e)` orders a range; `stable_sort(b, e)` orders it while preserving the relative order of equal elements; `find(b, e, v)` locates the first element equal to `v`; `find_if(b, e, pred)` locates the first satisfying a predicate; `count_if(b, e, pred)` counts them; `for_each(b, e, f)` applies `f` to each; `accumulate(b, e, init)` (from `<numeric>`) folds the range onto `init` with `+`. A failed `find` returns `e` — “not found” is a position, not a special value.",
        detail: "`sort` on `n` elements is about $n \\log n$ comparisons; `find` is linear and stops early; `accumulate` is the single linear pass that replaces most hand-written sum loops.",
      },
      {
        term: "Function objects and lambdas",
        kind: "definition",
        statement: "Algorithms take **callable arguments**: a predicate is any object that can be called like a function. A **lambda** writes one inline: `[](const string& a, const string& b) { return a.size() < b.size(); }` — brackets for the capture, then a parameter list, then the body whose value is returned. A **function object** is the class form: `class Less_than { double v; public: Less_than(double vv) : v{vv} { } bool operator()(double x) const { return x < v; } };` — an object carrying state `v` that is called through `operator()`.",
        detail: "The lambda is not a new kind of entity: it compiles to a function object of exactly this shape, with the capture stored as its members. The tour uses both forms deliberately, one line apart.",
      },
      {
        term: "Algorithms over hand-rolled loops",
        kind: "insight",
        statement: "The library's composition rule: a **container** holds a sequence, **algorithms** transform it, and **iterators** are the interface between — so the pieces are independent and recombinable. A hand-written loop names its container and its index arithmetic, and it is wrong once per off-by-one; `find_if(v.begin(), v.end(), pred)` says *what* is wanted and works unchanged on every sequence type, including `istream` and arrays.",
        detail: "This is the Stepanov STL vision in one sentence: a small set of orthogonal algorithms, uniform over all sequences, is more reuse than any container-specific method list can buy.",
      },
      {
        term: "Algorithms: the working contract",
        kind: "definition",
        statement: "**Algorithms.** Find, sort and the algorithm ideas. You can claim this section when you can read the half-open iterator range [b:e) and explain what `end()` points to — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 4 (A Tour of C++: Containers and Algorithms); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Sort by length, count the long ones",
        problem: "With `vector<string> words = {\"the\", \"quick\", \"brown\", \"fox\", \"jumps\"};` run: (1) `stable_sort` with the lambda comparing by `size()`; (2) `count_if` counting words longer than 4 characters; (3) `accumulate` summing the lengths.",
        steps: [
          { label: "Step 1: lengths", text: "The words' lengths are: the=3, quick=5, brown=5, fox=3, jumps=5 — two of length 3 (the, fox in that order) and three of length 5 (quick, brown, jumps in that order)." },
          { label: "Step 2: stable sort", text: "`stable_sort(words.begin(), words.end(), [](const string& a, const string& b) { return a.size() < b.size(); });` orders by length but **preserves the original order among equal lengths**: the → fox → quick → brown → jumps." },
          { label: "Step 3: why stable", text: "With plain `sort`, the two 3-letter and three 5-letter words could come out in any order — the same length keys give the algorithm no reason to prefer one. `stable_sort`'s guarantee is exactly about this case." },
          { label: "Step 4: count", text: "`count_if(words.begin(), words.end(), [](const string& s) { return s.size() > 4; });` counts quick, brown and jumps — words strictly longer than 4 characters — giving **3** (the and fox are 3; nothing has length 4)." },
          { label: "Step 5: accumulate", text: "`accumulate(words.begin(), words.end(), 0, [](int s, const string& w) { return s + w.size(); });` folds to $3+5+5+3+5 = 21$ — the total characters, via the four-argument form of the algorithm with a custom fold." },
        ],
        result: "Sorted {the, fox, quick, brown, jumps}, count 3, total length 21 — three algorithms, three lambdas, no loop written by hand.",
      },
      {
        title: "Working through algorithms",
        problem: "Find, sort and the algorithm ideas. Your task: read the half-open iterator range [b:e) and explain what `end()` points to.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: read the half-open iterator range [b:e) and explain what `end()` points to. Write down the guarantee you will rely on — for this chapter it is: Algorithms take iterator ranges `[b:e)`; `end()` is one-past-the-last and never dereferenceable; empty is `b == e`." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::map<std::string, int> counts; counts[key]++;` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — use `sort`, `find_if`, `count_if` and `accumulate` with lambdas and function objects — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Predicates are callables: lambdas inline, function objects with state; a failed `find`/`find_if` returns `end()`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Algorithms take iterator ranges `[b:e)`; `end()` is one-past-the-last and never dereferenceable; empty is `b == e`. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Algorithms take iterator ranges `[b:e)`; `end()` is one-past-the-last and never dereferenceable; empty is `b == e`.",
      "Predicates are callables: lambdas inline, function objects with state; a failed `find`/`find_if` returns `end()`.",
      "`sort`/`stable_sort` (order and order-preserving), `find_if`, `count_if`, `accumulate` cover the everyday majority — over any sequence.",
    ],
    quiz: [
      {
        q: "For a non-empty container `v`, what does `v.end()` return?",
        options: [
          "An iterator to the position one past the last element — the outside marker that ends the half-open range",
          "The container's capacity",
          "The first element",
          "The last element",
        ],
        answer: 0,
        explanation: "`[begin(), end())` is half-open: `end()` is not an element at all, which is why `find` can return it to mean “not found”.",
      },
      {
        q: "After `stable_sort` by `size()` on {\"the\", \"quick\", \"brown\", \"fox\", \"jumps\"}, what is the second word?",
        options: [
          "`the`",
          "`fox`",
          "`quick`",
          "`brown`",
        ],
        answer: 1,
        explanation: "Sorted by length: the (3), fox (3), then the three 5-letter words in their original order. Stability kept “fox” after “the” among the equal lengths.",
      },
      {
        q: "What does `find_if(v.begin(), v.end(), pred)` return when no element satisfies `pred`?",
        options: [
          "The last element, as a fallback",
          "It throws an exception",
          "`v.end()`",
          "A null pointer",
        ],
        answer: 2,
        explanation: "“Not found” is a position — the past-the-end iterator — and the caller checks `p != v.end()` to see if anything was found.",
      },
      {
        q: "The essential difference between `sort` and `stable_sort` is:",
        options: [
          "`stable_sort` is always faster",
          "`sort` only works on `list`",
          "`stable_sort` requires the elements be strings",
          "`stable_sort` preserves the relative order of elements that compare equal; `sort` may reorder them arbitrarily",
        ],
        answer: 3,
        explanation: "When the comparison key ties (equal lengths, equal dates), stability is the difference between deterministic and arbitrary output order.",
      },
    ],
  },

  // ---------------------------------------------------------------- 4.6
  {
    sectionId: "cpp-ch4-s6",
    readingTime: 4,
    intro: "The library tour closes with advice that reads as a single strategy: never write below the level the library has already built. Its containers, algorithms and iterators are the product of decades of refinement, and every hand-written loop that replaces a named algorithm is a small bet that you will beat that record — a bet history says you will lose.",
    objectives: [
      "Apply the library-first discipline to containers and algorithms",
      "Justify passing containers by reference and avoiding element copies",
      "Know the complexity contract of the operations you use daily",
    ],
    concepts: [
      {
        term: "Library before invention",
        kind: "law",
        statement: "The first question on any data-structure or algorithm problem is **“what does the standard library do here?”** — and only a measured shortfall justifies replacing it. The library's components are documented, type-safe, and tuned by implementations competing on their performance; homemade replacements start at zero on all three counts.",
        detail: "The book's phrasing of the habit: use the library's containers, algorithms and strings in preference to your own — and know them well enough that the question is quick to answer.",
      },
      {
        term: "Know the costs you are buying",
        kind: "method",
        statement: "Using the library is not code-blindness: know each operation's complexity contract — `vector`'s `push_back` amortized constant and its subscript constant; `list`'s insertion constant but its lookup linear; `map`'s operations logarithmic; `unordered_map`'s expected constant — because the container choice *is* the performance decision, made once, at declaration.",
        detail: "The tour's numbers are worth memorizing: indexing into a `vector` is one pointer computation; reaching the middle of a `list` is half its length in pointer hops.",
      },
      {
        term: "Algorithms and references over loops and copies",
        kind: "method",
        statement: "Write **named algorithms with lambdas** instead of index loops — the name documents intent, and the boundary conditions come with the algorithm. Pass containers **by reference** (by `const&` for reading) so element copies do not silently multiply, and pass large elements the same way — `[](const string& s)` not `[](string s)`.",
        detail: "The combination of this rule with move semantics is the modern style: `const&` in, move out, algorithms between — the copy count of a well-written function is zero.",
      },
      {
        term: "Shipping rule for a tour of C++: containers and algorithms",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Library first: only a measured shortfall justifies hand-rolled containers or searches.** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
      {
        term: "Review checklist for a tour of C++: containers and algorithms",
        kind: "method",
        statement: "Take the objectives as review questions: apply the library-first discipline to containers and algorithms? Then justify passing containers by reference and avoiding element copies? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.",
        detail: "A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.",
      },
    ],
    examples: [
      {
        title: "Replacing a hand-rolled search loop",
        problem: "A code review finds: `int i = 0; while (i < (int)v.size() && v[i] < 10) ++i; if (i < (int)v.size()) use(v[i]); else miss();` — a search for the first element ≥ 10. Rewrite it in the advised style and compare what each version asks the reader to verify.",
        steps: [
          { label: "Step 1: audit the loop", text: "To trust it you must check four things: the cast, the index bound `i < size()`, the loop condition's predicate direction, and the re-test of the same bound after the loop. Each is a classic off-by-one site, and each must be re-audited at every maintenance touch." },
          { label: "Step 2: the rewrite", text: "`auto p = find_if(v.begin(), v.end(), [](double x) { return x >= 10; }); if (p != v.end()) use(*p); else miss();` — one statement of intent, one predicate to read." },
          { label: "Step 3: what the reader verifies now", text: "The predicate (`x >= 10`) and the found-test (`p != v.end()`) — both local, both in the language of the library. Bounds, casts and index arithmetic have ceased to exist." },
          { label: "Step 4: generality for free", text: "The `find_if` version works unchanged if `v` becomes a `list`, an array, or any sequence exposing iterators — the loop version would need its cast, subscripting and bounds all rewritten." },
        ],
        result: "Two conditions to audit instead of four, zero rewrites under container changes — the concrete payoff of algorithms over loops.",
      },
      {
        title: "Reviewing a tour of C++: containers and algorithms code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the library-first discipline to containers and algorithms.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Library first: only a measured shortfall justifies hand-rolled containers or searches." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `std::map<std::string, int> counts; counts[key]++;`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: justify passing containers by reference and avoiding element copies. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Know each operation's complexity contract — the declaration of the container is the performance decision." },
        ],
        result: "The review ends with findings tied to reasons: Library first: only a measured shortfall justifies hand-rolled containers or searches. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Library first: only a measured shortfall justifies hand-rolled containers or searches.",
      "Know each operation's complexity contract — the declaration of the container is the performance decision.",
      "Prefer named algorithms with lambdas; pass containers by reference and elements by `const&`; count your copies and keep them at zero.",
    ],
    quiz: [
      {
        q: "The first response to needing a keyed lookup structure should be:",
        options: [
          "Use `std::map` or `std::unordered_map`, replacing it only if measurement shows a shortfall",
          "Store pairs in a `vector` and linear-search them",
          "Inherit from `std::map` and add the operations you want",
          "Write a hash table tuned to your key type",
        ],
        answer: 0,
        explanation: "Library-first: the standard associative containers are documented, correct and tuned — a hand-rolled replacement starts far behind and must justify itself.",
      },
      {
        q: "Why pass containers as `const vector<T>&` rather than by value into a function that only reads them?",
        options: [
          "By value is illegal for containers",
          "Passing by value copies every element on the call; a `const&` binds to the caller's object with no copies",
          "References make the function inline automatically",
          "By-value parameters cannot be iterated",
        ],
        answer: 1,
        explanation: "Value semantics means a by-value parameter is a full deep copy — for a million-element vector, an 8 MB copy where a reference would cost a pointer.",
      },
      {
        q: "Which operation is expected O(1) rather than O(log n) or O(n)?",
        options: [
          "Lookup in `std::map`",
          "Finding the middle of a `std::list`",
          "Sorting a `std::vector`",
          "Subscripting a `std::vector`",
        ],
        answer: 3,
        explanation: "`v[i]` on a vector is a pointer computation — the single address `alloc + i`. Map lookup is logarithmic; the list walk is linear; sort is $n \\log n$.",
      },
    ],
  },
]
