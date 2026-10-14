import type { SectionContent } from "../library"

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 38: I/O Streams (Sections 38.1 – 38.7)
// ============================================================================

export const cppCh38Content: SectionContent[] = [
  // ---------------------------------------------------------------- 38.1
  {
    sectionId: "cpp-ch38-s1",
    readingTime: 5,
    intro: "The iostream library is C++'s framework for moving characters between a program and the outside world — terminals, files, strings, sockets — with formatting and error handling built in. Its central idea is the stream: a uniform abstraction that hides the differences between devices, so the same `<<` and `>>` code works everywhere. Stroustrup's design goals were type safety, extensibility to user-defined types, and efficiency good enough for real systems. This chapter follows the library from the top of its class hierarchy down to the character buffers that touch the operating system.",
    objectives: [
      "Describe the stream abstraction and the split between formatting (stream classes) and transport (buffers)",
      "Explain why iostream I/O is type-safe where C stdio is not",
      "Name the four standard streams and their intended uses"
    ],
    concepts: [
      {
        term: "The stream abstraction",
        kind: "definition",
        statement: "**A stream is a source or sink of characters.** Input streams produce characters (from a keyboard, a file, a string); output streams consume them; the iostream library gives every stream the same interface regardless of what is behind it.",
        detail: "The key separation of concerns: the *stream classes* (`istream`, `ostream`, ...) format and convert values, while a *stream buffer* (§38.6) performs the actual character transport to and from the device."
      },
      {
        term: "Type-safe I/O",
        kind: "insight",
        statement: "The operators `<<` (output) and `>>` (input) are **overloaded on the type of their right-hand operand, so the conversion to characters is chosen at compile time**. A classic `printf` mismatch such as passing a `char*` to `%d` compiles and corrupts memory; `cout << name` where no matching operator exists is a compile-time error.",
        detail: "Every operation knows the type it is dealing with. There is no run-time format string to drift out of sync with the argument list — the class of bugs that has haunted C programs since the 1970s is structurally impossible."
      },
      {
        term: "Extensible by design",
        kind: "insight",
        statement: "**Users define `<<` and `>>` for their own types** — a `Date`, a `complex<double>`, a `Point` — and those operators immediately work with every kind of stream: files, strings, the console. That uniformity is what makes the hierarchy of §38.2 valuable.",
        detail: "The library ships with the built-in types handled; everything else is ordinary overloading, with no library changes required."
      },
      {
        term: "The four standard streams",
        kind: "definition",
        statement: "**`cin`** — standard input (from `stdin`); **`cout`** — standard output (to `stdout`); **`cerr`** — standard error, **unbuffered**, for immediate error messages; **`clog`** — standard logging, buffered. Wide-character variants `wcin`, `wcout`, `wcerr` complete the set.",
        detail: "Unbuffered means every character written to `cerr` is handed to the operating system immediately — exactly what you want when the next event might be a crash."
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Streams at a glance. You can claim this section when you can describe the stream abstraction and the split between formatting (stream classes) and transport (buffers) — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 38 (I/O Streams); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "printf vs. cout — the type-safety argument",
        problem: "A program must print a person's name (a string) and age (an int). Show how the C and C++ mechanisms differ when the programmer swaps the arguments by mistake.",
        steps: [
          { label: "Step 1: The C attempt", text: '`printf(\"%s %d\\n\", age, name);` — the arguments are swapped: `age` is printed as a string (undefined behavior — typically garbage or a crash) and the compiler cannot warn reliably, because `printf` takes `...` and checks nothing.' },
          { label: "Step 2: Why the compiler is silent", text: "Variadic C functions receive no type information at all; the conversion performed is dictated entirely by the format string at run time." },
          { label: "Step 3: The C++ equivalent", text: '`std::cout << age << \' \' << name << \"\\n\";` — overload resolution picks `operator<<(int)` and the string overload at compile time. Had `name` lacked a matching operator, the program would simply not compile.' }
        ],
        result: "The iostream design moves the run-time format/argument agreement problem into the type system: what used to be a crash becomes a compile-time error."
      },
      {
        title: "Working through introduction",
        problem: "Streams at a glance. Your task: describe the stream abstraction and the split between formatting (stream classes) and transport (buffers).",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: describe the stream abstraction and the split between formatting (stream classes) and transport (buffers). Write down the guarantee you will rely on — for this chapter it is: A stream is a uniform character source/sink; stream classes format, stream buffers transport." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (std::cin >> x) { use(x); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why iostream I/O is type-safe where C stdio is not — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `<<` and `>>` are ordinary overloaded operators — type safety and extensibility fall out of the type system. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A stream is a uniform character source/sink; stream classes format, stream buffers transport. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A stream is a uniform character source/sink; stream classes format, stream buffers transport.",
      "`<<` and `>>` are ordinary overloaded operators — type safety and extensibility fall out of the type system.",
      "Use `cerr` (unbuffered) for urgent diagnostics, `clog` for logging, `cout` for normal output."
    ],
    quiz: [
      {
        q: "Which statement best captures the division of labor in the iostream library?",
        options: [
          "The stream classes format and convert values; stream buffers handle character transport to devices",
          "The stream buffers format values; the stream classes talk to the operating system",
          "`cin` handles all input and `cout` handles all output",
          "The `<<` operator formats and the `>>` operator transports"
        ],
        answer: 0,
        explanation: "Formatting and conversion live in the stream class hierarchy; `basic_streambuf` and its derived classes move characters to and from devices (§38.6)."
      },
      {
        q: "Why is `cout << p` for a user type `p` guaranteed to be type-checked?",
        options: [
          "`cout` carries run-time type information about `p`",
          "The library scans the value for format specifiers",
          "The compiler resolves a specific overload of `operator<<` for the type of `p`",
          "`p` is always converted to a string first"
        ],
        answer: 2,
        explanation: "Type safety comes from ordinary overload resolution at compile time — no operator found means a compile error, not a run-time crash."
      },
      {
        q: "You need an error message to reach the screen immediately, before a likely crash. Which stream and why?",
        options: [
          "`clog`, because it is buffered",
          "`cerr`, because it is unbuffered — characters are handed to the OS immediately",
          "`cout`, because it is the default destination",
          "`cin`, because errors are read, not written"
        ],
        answer: 1,
        explanation: "`cerr` is unbuffered by design; buffered output can still be sitting in a buffer when the process dies."
      }
    ]
  },

  // ---------------------------------------------------------------- 38.2
  {
    sectionId: "cpp-ch38-s2",
    readingTime: 6,
    intro: "The iostream framework is a small class hierarchy — small enough to memorize. At the top sits `ios_base`, which holds everything that is independent of the character type: stream state, formatting flags, and the locale. Below it, templated on the character type, `basic_ios` adds the link to a stream buffer, and the input/output/file/string classes hang off that. Knowing the shape of this hierarchy tells you what you can safely pass to a function that logs.",
    objectives: [
      "Draw the iostream class hierarchy from `ios_base` down to the file and string streams",
      "Say what each level contributes: state, buffer link, input, output",
      "Use the typedefs (`istream`, `ofstream`, ...) and explain the diamond under `basic_iostream`"
    ],
    concepts: [
      {
        term: "ios_base — the character-type-independent root",
        kind: "definition",
        statement: "**`ios_base`** holds the stream *state* (`goodbit`, `failbit`, `eofbit`, `badbit`), the *formatting information* (base, precision, width, flag set) and the *locale*. Because none of that depends on the character type, it is a plain class, not a template.",
        detail: "`flags()`, `precision()` and `width()` all live here — the formatting state that §38.4 manipulates."
      },
      {
        term: "basic_ios<charT, traits> — the buffered base",
        kind: "definition",
        statement: "**`basic_ios`** adds everything that needs to know the character type: the managed pointer to a **`basic_streambuf`** (`rdbuf()`), the fill character, `tie()`, and `narrow`/`widen`. It is here that `imbue()` installs a new locale (§39.2).",
        detail: "A stream object is a formatting front end; the buffer it points to does the real transport — one object, two cooperating classes."
      },
      {
        term: "The workhorses: basic_istream, basic_ostream, basic_iostream",
        kind: "definition",
        statement: "**`basic_istream<charT, traits>`** provides formatted input (`>>`, `get()`, `getline()`, `read()`, `ignore()`, `peek()`); **`basic_ostream`** provides output (`<<`, `put()`, `write()`); **`basic_iostream`** multiply inherits both, giving a stream that reads and writes the same character source (a file opened for I/O, a string).",
        detail: "Multiple inheritance is used because an iostream *is-a* read stream and *is-a* write stream — a classic diamond with the shared `basic_ios` base above."
      },
      {
        term: "File and string streams",
        kind: "definition",
        statement: "**`basic_ifstream`/`basic_ofstream`/`basic_fstream`** derive from the corresponding stream classes, add `open()`/close management, and own a **`basic_filebuf`**; **`basic_istringstream`/`basic_ostringstream`/`basic_stringstream`** do the same for an in-memory **`basic_stringbuf`**, plus `str()` access to the string.",
        detail: "These are the classes you instantiate: they bundle a stream and its buffer so construction opens the source and destruction closes it (RAII, as in Chapter 5)."
      },
      {
        term: "The typedefs",
        kind: "notation",
        statement: "`istream` = `basic_istream<char, char_traits<char>>`, `ostream` = `basic_ostream<char, ...>`; prefix `w` for `wchar_t`: `wistream`, `wofstream`, `wstringstream`, ... The naming runs through the buffers too: `streambuf` = `basic_streambuf<char, ...>`.",
        detail: "Almost all code mentions only the `char` typedefs; the template machinery exists so wide characters and custom traits work with zero library redesign."
      }
    ],
    figures: [
      {
        caption: "The iostream class hierarchy. Template parameters (`charT`, `traits`) are elided after the first level; every class exists for `char` (typedefs `istream`, `ostream`, ...) and `wchar_t` (`wistream`, ...). The dashed link is the `rdbuf()` pointer by which `basic_ios` delegates transport to a `basic_streambuf` (§38.6).",
        svg: `<svg viewBox="0 0 900 500" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The iostream class hierarchy from ios_base through basic_ios to istream, ostream, iostream and the file and string streams"><defs><marker id="a38m" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="340" y="14" width="180" height="48" rx="7" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="430" y="37" text-anchor="middle" font-size="15" fill="currentColor">ios_base</text><text x="430" y="53" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">state · format flags · locale</text><line x1="430" y1="62" x2="430" y2="88" stroke="currentColor" stroke-width="1.6" marker-end="url(#a38m)"/><rect x="330" y="92" width="200" height="48" rx="7" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="430" y="115" text-anchor="middle" font-size="13.5" fill="currentColor">basic_ios&lt;charT, traits&gt;</text><text x="430" y="131" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">rdbuf link · tie · fill</text><line x1="370" y1="140" x2="245" y2="170" stroke="currentColor" stroke-width="1.6" marker-end="url(#a38m)"/><line x1="490" y1="140" x2="615" y2="170" stroke="currentColor" stroke-width="1.6" marker-end="url(#a38m)"/><rect x="120" y="172" width="190" height="48" rx="7" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="215" y="195" text-anchor="middle" font-size="14" fill="currentColor">basic_istream</text><text x="215" y="211" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">operator&gt;&gt; · get · getline</text><rect x="590" y="172" width="190" height="48" rx="7" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="685" y="195" text-anchor="middle" font-size="14" fill="currentColor">basic_ostream</text><text x="685" y="211" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">operator&lt;&lt; · put · write</text><line x1="350" y1="260" x2="240" y2="224" stroke="currentColor" stroke-width="1.6" marker-end="url(#a38m)"/><line x1="510" y1="260" x2="600" y2="224" stroke="currentColor" stroke-width="1.6" marker-end="url(#a38m)"/><rect x="335" y="262" width="190" height="48" rx="7" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.6"/><text x="430" y="285" text-anchor="middle" font-size="14" fill="currentColor">basic_iostream</text><text x="430" y="301" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">input + output</text><rect x="660" y="92" width="210" height="48" rx="7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 5"/><text x="765" y="115" text-anchor="middle" font-size="14" fill="currentColor">basic_streambuf</text><text x="765" y="131" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">device transport</text><line x1="530" y1="116" x2="660" y2="116" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 5" opacity="0.7"/><text x="595" y="108" text-anchor="middle" font-size="10.5" fill="currentColor">rdbuf()</text><rect x="15" y="352" width="130" height="50" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.4"/><text x="80" y="375" text-anchor="middle" font-size="11.5" fill="currentColor">basic_ifstream</text><text x="80" y="391" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.75">file input</text><rect x="160" y="352" width="145" height="50" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.4"/><text x="232" y="375" text-anchor="middle" font-size="10.5" fill="currentColor">basic_istringstream</text><text x="232" y="391" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.75">string input</text><rect x="320" y="352" width="125" height="50" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.4"/><text x="382" y="375" text-anchor="middle" font-size="11.5" fill="currentColor">basic_fstream</text><text x="382" y="391" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.75">file I/O</text><rect x="460" y="352" width="145" height="50" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.4"/><text x="532" y="375" text-anchor="middle" font-size="10.5" fill="currentColor">basic_stringstream</text><text x="532" y="391" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.75">string I/O</text><rect x="620" y="352" width="125" height="50" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.4"/><text x="682" y="375" text-anchor="middle" font-size="11.5" fill="currentColor">basic_ofstream</text><text x="682" y="391" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.75">file output</text><rect x="760" y="352" width="135" height="50" rx="7" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.4"/><text x="827" y="375" text-anchor="middle" font-size="9.5" fill="currentColor">basic_ostringstream</text><text x="827" y="391" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.75">string output</text><line x1="80" y1="350" x2="160" y2="224" stroke="currentColor" stroke-width="1.4" marker-end="url(#a38m)"/><line x1="232" y1="350" x2="205" y2="224" stroke="currentColor" stroke-width="1.4" marker-end="url(#a38m)"/><line x1="382" y1="350" x2="395" y2="312" stroke="currentColor" stroke-width="1.4" marker-end="url(#a38m)"/><line x1="532" y1="350" x2="465" y2="312" stroke="currentColor" stroke-width="1.4" marker-end="url(#a38m)"/><line x1="682" y1="350" x2="625" y2="224" stroke="currentColor" stroke-width="1.4" marker-end="url(#a38m)"/><line x1="827" y1="350" x2="665" y2="224" stroke="currentColor" stroke-width="1.4" marker-end="url(#a38m)"/><text x="450" y="432" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.85">typedefs: istream = basic_istream&lt;char&gt; · ostream = basic_ostream&lt;char&gt; · wistream = basic_istream&lt;wchar_t&gt;</text><text x="450" y="454" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.85">basic_iostream inherits basic_istream and basic_ostream — the classic diamond</text><text x="450" y="476" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.85">every basic_ios holds a basic_streambuf* (rdbuf) — the object that touches devices</text></svg>`,
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "One logging function, three destinations",
        problem: "Write a single function that appends a message to any output destination — console, file, or an in-memory string — and use all three.",
        steps: [
          { label: "Step 1: The function", text: '`void log_event(std::ostream& os, const std::string& msg) { os << msg << \"\\n\"; }` — it accepts a reference to the base `ostream`, so any derived stream can be passed (polymorphism).' },
          { label: "Step 2: Console", text: '`log_event(std::cout, \"session start\");` — the formatted characters go to the terminal.' },
          { label: "Step 3: File", text: '`std::ofstream log{\"run.log\", std::ios::app}; log_event(log, \"session start\");` — the same call appends to the file; destruction of `log` closes it.' },
          { label: "Step 4: String", text: '`std::ostringstream buf; log_event(buf, \"session start\"); std::string line = buf.str();` — the characters are captured in `line` for later use.' }
        ],
        result: "Because `ofstream` and `ostringstream` are both kinds of `ostream`, one function covers all three sinks — the whole point of the hierarchy."
      },
      {
        title: "Working through the I/O stream hierarchy",
        problem: "The class hierarchy of streams. Your task: draw the iostream class hierarchy from `ios_base` down to the file and string streams.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: draw the iostream class hierarchy from `ios_base` down to the file and string streams. Write down the guarantee you will rely on — for this chapter it is: `ios_base` (state, flags, locale) → `basic_ios` (buffer link) → `basic_istream`/`basic_ostream` → the `basic_iostream` diamond." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (std::cin >> x) { use(x); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — say what each level contributes: state, buffer link, input, output — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: File and string streams package a stream together with the matching buffer and its lifetime management. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `ios_base` (state, flags, locale) → `basic_ios` (buffer link) → `basic_istream`/`basic_ostream` → the `basic_iostream` diamond. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`ios_base` (state, flags, locale) → `basic_ios` (buffer link) → `basic_istream`/`basic_ostream` → the `basic_iostream` diamond.",
      "File and string streams package a stream together with the matching buffer and its lifetime management.",
      "Functions taking `ostream&`/`istream&` work for every destination and source in the library."
    ],
    quiz: [
      {
        q: "Which class holds the stream state bits and the formatting flags?",
        options: [
          "`basic_ios`",
          "`ios_base`",
          "`basic_streambuf`",
          "`basic_istream`"
        ],
        answer: 1,
        explanation: "State and formatting are character-type independent, so they live in the non-template root `ios_base`; the typed layer starts at `basic_ios`."
      },
      {
        q: "What does `basic_ios` add over `ios_base`?",
        options: [
          "The `>>` and `<<` operators",
          "The file `open()` operations",
          "The managed link to a `basic_streambuf`, plus `tie()`, `fill()` and the character-typed state",
          "The locale and the formatting flags"
        ],
        answer: 2,
        explanation: "`basic_ios` is where the character type enters — including the `rdbuf()` pointer that carries out the actual transport."
      },
      {
        q: "`std::ifstream` is derived from ...",
        options: [
          "`std::istream`, and it owns a `basic_filebuf`",
          "`std::basic_streambuf`",
          "`std::iostream`",
          "`std::filebuf`, and it owns an `istream`"
        ],
        answer: 0,
        explanation: "The file stream classes derive from the corresponding basic stream classes and add an owned file buffer plus `open()` management."
      },
      {
        q: "`std::stringstream` exists so that ...",
        options: [
          "strings can be written to files",
          "a stream that reads and writes can operate on an in-memory `std::string`",
          "wide characters can be formatted",
          "the `tie()` mechanism can flush `cout`"
        ],
        answer: 1,
        explanation: "A `stringstream` is a `basic_iostream` over a `basic_stringbuf`: you get full stream I/O over a string in memory."
      }
    ]
  },

  // ---------------------------------------------------------------- 38.3
  {
    sectionId: "cpp-ch38-s3",
    readingTime: 6,
    intro: "Streams report trouble in their state, not by throwing. Every stream carries four state bits that record what went wrong, and every operation checks them before doing anything — a failed stream stays failed until you clear it. This design makes the canonical read loop `while (is >> x)` both idiomatic and safe, and it explains why forgetting to test the result of an input is the classic I/O bug.",
    objectives: [
      "Read and set the four stream state bits and know what each means",
      "Explain the idiom `if (cin >> x)` and the failure behavior of formatted input",
      "Enable and use stream exceptions, and recover a failed stream with `clear()` plus `ignore()`"
    ],
    concepts: [
      {
        term: "The stream state",
        kind: "definition",
        statement: "Each stream carries a state composed of four bits: **`goodbit`** (zero — no error), **`eofbit`** (end of input reached), **`failbit`** (an operation failed: the characters did not form a valid value for the target type), **`badbit`** (a corrupted stream or buffer — a serious error). Queries: `good()`, `eof()`, `fail()`, `bad()`, `rdstate()`.",
        detail: "`fail()` is true whenever `failbit` *or* `badbit` is set — failure subsumes badness, so testing `!fail()` is the general 'is the stream usable' check."
      },
      {
        term: "How state gets set — and stays",
        kind: "law",
        statement: "**A failed operation leaves the stream in a failed state, and subsequent operations on a failed stream do nothing.** A formatted extraction that cannot parse the characters sets `failbit` (and since C++11 writes 0 to the arithmetic target — never rely on that); reaching the end of input during a read sets `eofbit`; only `clear()` restores operation.",
        detail: "The fail-sticky design is deliberate: a stream in a bad state would otherwise produce cascading garbage; silence is safer."
      },
      {
        term: "The stream as a condition",
        kind: "method",
        statement: "Since C++11 streams provide **`explicit operator bool`** — `if (cin >> x)` works because `>>` returns the stream by reference, and the stream converts to `bool` as `!fail()`. Chained extractions `cin >> a >> b` stop at the first failure for the same reason.",
        detail: "The `explicit` qualifier rules out accident-prone implicit conversions; before C++11 the same effect was achieved with the 'safe bool' idiom."
      },
      {
        term: "Exceptions on state — opt-in",
        kind: "method",
        statement: "By default streams never throw. **`is.exceptions(mask)`** arms a state mask: when a subsequent operation sets a bit in the mask, an **`ios_base::failure`** (derived from `std::system_error` since C++11) is thrown. `exceptions()` with no argument reads the current mask; a `clear()` that lands in the mask throws too.",
        detail: "A common policy: keep `failbit`/`eofbit` as ordinary control flow and throw only on `badbit` — parsing attempts to recover, but a broken stream surfaces loudly."
      },
      {
        term: "Error Handling: the working contract",
        kind: "definition",
        statement: "**Error Handling.** Stream state and exceptions. You can claim this section when you can read and set the four stream state bits and know what each means — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 38 (I/O Streams); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Reading integers with failure and recovery",
        problem: "Input is the string `\"10 20 30 forty 40\"` (delivered by an `istringstream`). Sum every integer, surviving the word in the middle.",
        steps: [
          { label: "Step 1: First pass", text: '`for (int x; is >> x;) sum += x;` — extracts 10, 20 and 30; the next extraction of an `int` sees the letter `f`, sets `failbit`, and stops. `sum` is 60.' },
          { label: "Step 2: Diagnose", text: "`is.fail()` is true but `is.eof()` is false — a parse failure, not end of input, so recovery is reasonable." },
          { label: "Step 3: Recover", text: '`is.clear();` resets the state; `is.ignore(std::numeric_limits<std::streamsize>::max(), \' \');` discards characters up to and including the next space, removing `forty`.' },
          { label: "Step 4: Resume", text: "A second identical loop extracts 40 and then ends cleanly at end-of-input. Final `sum` = 60 + 40 = **100**." }
        ],
        result: "Robust input = test after every read, then clear-and-skip past the offending characters. Without `clear()` the stream would have stayed silent forever."
      },
      {
        title: "Working through error handling",
        problem: "Stream state and exceptions. Your task: read and set the four stream state bits and know what each means.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: read and set the four stream state bits and know what each means. Write down the guarantee you will rely on — for this chapter it is: State lives in four bits: good, eof, fail, bad — and `fail()` covers fail+bad." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (std::cin >> x) { use(x); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain the idiom `if (cin >> x)` and the failure behavior of formatted input — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: A failed stream silently no-ops every later operation until `clear()`; `while (is >> x)` is the safe idiom. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: State lives in four bits: good, eof, fail, bad — and `fail()` covers fail+bad. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "State lives in four bits: good, eof, fail, bad — and `fail()` covers fail+bad.",
      "A failed stream silently no-ops every later operation until `clear()`; `while (is >> x)` is the safe idiom.",
      "Exceptions are opt-in via `exceptions(mask)`; throwing only on `badbit` is a sane policy."
    ],
    quiz: [
      {
        q: "In `while (cin >> x)`, what exactly terminates the loop?",
        options: [
          "`eof()` becomes true",
          "`fail()` becomes true — failure or end of input stops the extraction, and the conversion to `bool` yields false",
          "An exception is thrown",
          "`bad()` becomes true"
        ],
        answer: 1,
        explanation: "The contextually converted `operator bool` tests `!fail()`; both a parse failure and hitting end-of-input set `failbit` (often together with `eofbit`)."
      },
      {
        q: "An `int` extraction meets the characters `\"t4\"`. What is the state after?",
        options: [
          "`failbit` set; the characters remain unread, pending `clear()` and `ignore()`",
          "`eofbit` set",
          "Nothing is wrong — the extraction reads 4",
          "`badbit` set; the stream is corrupted"
        ],
        answer: 0,
        explanation: "No digit could be converted, so the extraction fails immediately; the input characters stay in the stream for a later skip."
      },
      {
        q: "You want a genuinely broken (bad) stream to throw `ios_base::failure`, while parsing failures remain flag-based. What do you set?",
        options: [
          "`is.exceptions(ios_base::failbit)`",
          "`is.exceptions(ios_base::badbit)`",
          "`is.clear(ios_base::badbit)`",
          "Nothing — streams always throw on `badbit`"
        ],
        answer: 1,
        explanation: "The `exceptions` mask selects which state bits throw; arming only `badbit` leaves parsing failures as ordinary flags."
      },
      {
        q: "After a failed extraction, which sequence can make the stream usable again?",
        options: [
          "Just `ignore()` — skipping input resets the state",
          "`clear()` to reset the state, then `ignore()` to remove the offending characters",
          "`setstate(goodbit)` alone suffices",
          "Close and reopen the stream — there is no other way"
        ],
        answer: 1,
        explanation: "`clear()` resets the bits; `ignore()` then removes the bad characters that caused the failure — either alone is not enough."
      }
    ]
  },

  // ---------------------------------------------------------------- 38.4
  {
    sectionId: "cpp-ch38-s4",
    readingTime: 7,
    intro: "I/O operations split into formatted (converting values to and from character sequences) and unformatted (moving raw characters). Formatting is governed by a small amount of per-stream state — base, precision, width, fill and a flag set — usually touched through manipulators such as `std::hex` and `std::setprecision`. Files add the last piece: opening with modes, and letting the stream's destructor close.",
    objectives: [
      "Choose between formatted (`<<`, `>>`) and unformatted (`get`, `write`, `read`, `getline`) operations",
      "Predict output from the formatting state: base, precision, width, fill, and the manipulators that set them",
      "Open files with the right mode flags and know why `app` differs from `ate`"
    ],
    concepts: [
      {
        term: "Formatted and unformatted operations",
        kind: "definition",
        statement: "`operator<<` converts values to character sequences under the current format state; `operator>>` parses characters into typed values, skipping leading whitespace by default (`skipws`). Unformatted operations — `put(c)`, `write(p, n)` on output; `get()`, `getline()`, `read()`, `ignore()`, `peek()`, `unget()` on input — move characters with no conversion; `gcount()` reports how many characters the last unformatted input took.",
        detail: "The free function `getline(is, s)` reads a line into a `std::string` and discards the newline — the everyday tool for line-oriented input."
      },
      {
        term: "The formatting state",
        kind: "definition",
        statement: "Three flag groups — **basefield** (`dec`/`hex`/`oct`), **floatfield** (`fixed`/`scientific`/`defaultfloat`), **adjustfield** (`left`/`right`/`internal`) — plus **precision** (how many digits to show), the **width** of the next field, and the **fill** character. Everything persists except width: **`width` is reset to 0 after every output operation** and must be re-set (`setw`) for each field.",
        detail: "That asymmetry is the number-one formatting gotcha: base, precision and fill are sticky; width is not."
      },
      {
        term: "Manipulators",
        kind: "method",
        statement: "Manipulators are the ergonomic interface to that state: `std::hex`, `std::fixed`, `std::setprecision(9)`, `std::setw(12)`, `std::setfill('*')`, `std::boolalpha`, `std::showbase` (print `0x` for hex), `std::uppercase`, `std::left`. **`std::endl` inserts a newline *and flushes*; a plain `\"\\n\"` does not** — prefer it when you do not need the flush.",
        detail: "`std::ws` skips whitespace on input; `ends` writes a terminating zero into char arrays (a `string`-era relic)."
      },
      {
        term: "Files",
        kind: "definition",
        statement: "`ifstream`, `ofstream` and `fstream` wrap a `basic_filebuf` with `open()` and `close()`; construction opens, destruction closes, `is_open()` tests. Modes combine: **`in`**, **`out`**, **`trunc`** (discard existing content), **`ate`** (seek to end after opening), **`app`** (append: *every* write goes to the end), **`binary`** (no end-of-line translation).",
        detail: "`app` vs `ate`: `ate` positions once after opening (you may then seek back), while `app` forces each write to the current end regardless of any seeks."
      },
      {
        term: "I/O Operations: the working contract",
        kind: "definition",
        statement: "**I/O Operations.** Formatting, manipulators and files. You can claim this section when you can choose between formatted (`<<`, `>>`) and unformatted (`get`, `write`, `read`, `getline`) operations — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 38 (I/O Streams); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Formatting one number six ways",
        problem: "The double `1234.5678` and the int `255` must appear in a report: with the default format, with 9 significant digits, fixed with 2 decimals, scientific, right-aligned in a field of width 12, and hex with the base shown. Predict each output.",
        steps: [
          { label: "Step 1: Default", text: '`std::cout << 1234.5678;` — the default precision is 6 significant digits: prints `1234.57`.' },
          { label: "Step 2: More digits", text: '`std::cout << std::setprecision(9) << 1234.5678;` → `1234.5678` — the value needs only 8 significant digits, so 9 restore it exactly.' },
          { label: "Step 3: Fixed", text: '`std::cout << std::fixed << std::setprecision(2) << 1234.5678;` → `1234.57` — precision now counts digits *after* the decimal point.' },
          { label: "Step 4: Scientific", text: '`std::cout << std::scientific << std::setprecision(6) << 1234.5678;` → `1.234568e+03` — six digits after the point, exponent form.' },
          { label: "Step 5: A field", text: '`std::cout << std::defaultfloat << std::setprecision(9) << std::setw(12) << 1234.5678;` → three spaces then `1234.5678` — 9 characters in a field of 12, right-aligned by default. The next output would no longer be padded: width was consumed.' },
          { label: "Step 6: Hex", text: '`std::cout << std::hex << std::showbase << 255;` → `0xff` — the base shows, digits are lowercase (add `std::uppercase` for `0XFF`).' }
        ],
        result: "Formatting state is sticky (base, precision, fill) — except width, which must be set per field. Every output above is exactly what the state dictates."
      },
      {
        title: "Working through I/O operations",
        problem: "Formatting, manipulators and files. Your task: choose between formatted (`<<`, `>>`) and unformatted (`get`, `write`, `read`, `getline`) operations.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: choose between formatted (`<<`, `>>`) and unformatted (`get`, `write`, `read`, `getline`) operations. Write down the guarantee you will rely on — for this chapter it is: Formatted operations convert; unformatted operations (`get`, `write`, `read`, `getline`) move raw characters." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (std::cin >> x) { use(x); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict output from the formatting state: base, precision, width, fill, and the manipulators that set them — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Formatting state is sticky except `width`; `endl` flushes while `'\\n'` does not — prefer `'\\n'` unless you need the flush. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Formatted operations convert; unformatted operations (`get`, `write`, `read`, `getline`) move raw characters. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Formatted operations convert; unformatted operations (`get`, `write`, `read`, `getline`) move raw characters.",
      "Formatting state is sticky except `width`; `endl` flushes while `'\\n'` does not — prefer `'\\n'` unless you need the flush.",
      "Files: construction opens, destruction closes; `app` ≠ `ate`; `binary` disables newline translation."
    ],
    quiz: [
      {
        q: "Which piece of formatting state is *not* sticky?",
        options: [
          "The base (`dec`/`hex`)",
          "The precision",
          "The field width — it is reset to 0 after each output operation",
          "The fill character"
        ],
        answer: 2,
        explanation: "`setw` applies to the next output only; base, precision and fill persist until changed."
      },
      {
        q: "`cout << hex << showbase << 255;` prints",
        options: [
          "`255`",
          "`ff`",
          "`0xff`",
          "`FF`"
        ],
        answer: 2,
        explanation: "`hex` selects base 16, `showbase` adds the `0x` prefix; `uppercase` would be needed for `FF`."
      },
      {
        q: "The difference between `app` and `ate` when opening an output file:",
        options: [
          "None — both position at the end",
          "`ate` seeks to the end once after opening; `app` forces every write to the end even after seeking backward",
          "`app` truncates the file; `ate` does not",
          "`ate` is only valid for input files"
        ],
        answer: 1,
        explanation: "`ate` is a one-time initial position; `app` pins each write to the end — the mode for log files."
      },
      {
        q: "Which pair reads a whole line into a `std::string`, newline discarded?",
        options: [
          "`is >> s`",
          "`getline(is, s)`",
          "`is.get(s)`",
          "`s = is.peek()`"
        ],
        answer: 1,
        explanation: "The free `getline` reads through the newline and removes it; `>>` stops at the first whitespace."
      }
    ]
  },

  // ---------------------------------------------------------------- 38.5
  {
    sectionId: "cpp-ch38-s5",
    readingTime: 5,
    intro: "Stream iterators make an input stream look like a sequence and an output stream look like an algorithm's destination — the bridge between the iostream framework and the STL. With `istream_iterator<int>` the standard algorithms (`copy`, `accumulate`, `sort`) can consume console or file input directly, and `ostream_iterator<int>` lets them produce output. The buffer-level `istreambuf_iterator` family does the same job with no formatted-input layer at all.",
    objectives: [
      "Construct and use `istream_iterator<T>` and `ostream_iterator<T>` with algorithms",
      "Explain when an input iterator becomes the end-of-stream sentinel",
      "Contrast `istreambuf_iterator` with the formatted iterator — and copy a file with either"
    ],
    concepts: [
      {
        term: "istream_iterator<T>",
        kind: "definition",
        statement: "An input iterator constructed from a stream: `std::istream_iterator<int> in{cin};`. **Constructing it triggers the first `>>` read**, each `++` reads the next value, and dereferencing (`*in`) returns the value read. A value-initialized `istream_iterator<T>{}` is the **end-of-stream sentinel** — and any iterator whose extraction has failed compares equal to it.",
        detail: "So the classic range is `copy(istream_iterator<int>{is}, {}, back_inserter(v));` — the second `{}` reads as 'until extraction fails'."
      },
      {
        term: "ostream_iterator<T>",
        kind: "definition",
        statement: "An output iterator that writes values with `<<`; a second constructor argument becomes the separator written after each value: `ostream_iterator<int> out{cout, \"\\n\"};` produces one number per line.",
        detail: "It lets `copy(v.begin(), v.end(), ostream_iterator<int>{cout, \" \"})` print a container — no hand-written loop, no off-by-one."
      },
      {
        term: "Streams as sequences",
        kind: "insight",
        statement: "The pair (stream iterator, end sentinel) is an STL range, so **any algorithm that accepts input iterators works on I/O**: `accumulate` to total a file of numbers, `find` to search a log, `sort` once the values are collected into a container first.",
        detail: "The pattern is always the same: read lazily until an extraction fails, at which point the iterator silently becomes the sentinel and the algorithm stops."
      },
      {
        term: "The character-level variants",
        kind: "definition",
        statement: "**`istreambuf_iterator<char>`** and **`ostreambuf_iterator<char>`** iterate the stream's *buffer* — no whitespace skipping, no parsing, no formatting: exactly the characters in the file. `copy(istreambuf_iterator<char>{is}, {}, ostreambuf_iterator<char>{os});` copies a file character-for-character.",
        detail: "With `istream_iterator<char>` you would need `is >> noskipws` to approximate that — and still pay the formatted-input layer for every character."
      },
      {
        term: "Stream Iterators: the working contract",
        kind: "definition",
        statement: "**Stream Iterators.** istream_iterator and ostream_iterator. You can claim this section when you can construct and use `istream_iterator<T>` and `ostream_iterator<T>` with algorithms — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 38 (I/O Streams); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Totalling a file of numbers with algorithms only",
        problem: "The file `nums.txt` contains one line: `2 3 5 7 11`. Read it into a vector, sum it with `accumulate`, and write it back one number per line — no explicit loops.",
        steps: [
          { label: "Step 1: Read", text: '`std::ifstream is{\"nums.txt\"}; std::vector<int> v; std::copy(std::istream_iterator<int>{is}, {}, std::back_inserter(v));` — five extractions succeed; the sixth hits end-of-input, fails, and the iterator equals the sentinel, ending the copy. `v` = {2, 3, 5, 7, 11}.' },
          { label: "Step 2: Sum", text: '`int total = std::accumulate(v.begin(), v.end(), 0);` — 2 + 3 + 5 + 7 + 11 = **28**.' },
          { label: "Step 3: Write", text: '`std::copy(v.begin(), v.end(), std::ostream_iterator<int>{std::cout, \"\\n\"});` — prints 2, 3, 5, 7 and 11, each followed by a newline.' }
        ],
        result: "Three statements, no loops: the stream iterators turned a file into a range and a range into output."
      },
      {
        title: "Working through stream iterators",
        problem: "istream_iterator and ostream_iterator. Your task: construct and use `istream_iterator<T>` and `ostream_iterator<T>` with algorithms.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: construct and use `istream_iterator<T>` and `ostream_iterator<T>` with algorithms. Write down the guarantee you will rely on — for this chapter it is: `istream_iterator<T>` turns a stream into an STL input range; the value-initialized `{}` default is the end sentinel." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (std::cin >> x) { use(x); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain when an input iterator becomes the end-of-stream sentinel — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `ostream_iterator<T>{os, sep}` turns an algorithm's output into stream writes. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `istream_iterator<T>` turns a stream into an STL input range; the value-initialized `{}` default is the end sentinel. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`istream_iterator<T>` turns a stream into an STL input range; the value-initialized `{}` default is the end sentinel.",
      "`ostream_iterator<T>{os, sep}` turns an algorithm's output into stream writes.",
      "`istreambuf_iterator`/`ostreambuf_iterator` bypass formatting entirely — raw characters, whitespace included."
    ],
    quiz: [
      {
        q: "What does a default-constructed `istream_iterator<int>{}` represent?",
        options: [
          "A null pointer",
          "The end-of-stream position: it compares equal to any iterator whose extraction has failed",
          "The first value in the stream",
          "An error state"
        ],
        answer: 1,
        explanation: "It is the sentinel of the stream-as-range: algorithms stop exactly when an extraction fails."
      },
      {
        q: "An `istream_iterator<string>` extracts words using which operation?",
        options: [
          "`getline`",
          "`operator>>` — formatted extraction, whitespace-delimited",
          "`get(char&)` one character at a time",
          "`read()`"
        ],
        answer: 1,
        explanation: "The iterator holds the stream and uses formatted extraction; the value type is whatever `>>` reads."
      },
      {
        q: "Why would you choose `istreambuf_iterator<char>` over `istream_iterator<char>`?",
        options: [
          "It is the only one that can read numbers",
          "It works only on files",
          "You want every character — whitespace included — with no parsing or skipping",
          "It flushes the stream automatically"
        ],
        answer: 2,
        explanation: "The buf-iterators talk straight to the stream buffer: raw, unfiltered characters."
      }
    ]
  },

  // ---------------------------------------------------------------- 38.6
  {
    sectionId: "cpp-ch38-s6",
    readingTime: 7,
    intro: "Below the formatting layer sits `basic_streambuf`: the abstract class that actually moves characters, usually in blocks, between memory and a device. The design is two little memory windows — a get area you read from and a put area you write to — plus virtual functions (`underflow`, `overflow`, `sync`) that derived buffers (`filebuf`, `stringbuf`, your own device buffers) override to talk to real devices. Understanding the pointer protocol explains both the speed of buffered I/O and how to build new devices.",
    objectives: [
      "Explain the split: stream classes format, `basic_streambuf` transports",
      "Name the get-area and put-area pointers and the events that trigger `underflow()` and `overflow()`",
      "Use `rdbuf()` for whole-buffer operations and justify why it is the fast way to copy"
    ],
    concepts: [
      {
        term: "The transport layer",
        kind: "definition",
        statement: "**`basic_streambuf<charT, traits>`** is the abstract device interface: the stream classes never touch a device — they ask their buffer (`rdbuf()`) for characters. The standard provides `basic_filebuf` (files) and `basic_stringbuf` (strings); user-defined buffers implement anything from terminals to network sockets.",
        detail: "This is §38.1's separation made concrete: formatting policy in one class family, transport mechanism in another — either can vary independently."
      },
      {
        term: "The put area",
        kind: "definition",
        statement: "Output characters accumulate in an array delimited by three pointers: **`pbase`** (start), **`pptr`** (next free position), **`epptr`** (end). `sputc` writes at `pptr` and advances it; when `pptr` reaches `epptr` the buffer calls the virtual **`overflow()`**, which in `basic_filebuf` writes the whole area out with one large operation and makes room again.",
        detail: "`xsputn` moves whole blocks in one call — the bulk path used by `write()` and by `os << is.rdbuf()`."
      },
      {
        term: "The get area",
        kind: "definition",
        statement: "Input is served from an array delimited by **`eback`** (start), **`gptr`** (current position), **`egptr`** (end). Reads advance `gptr`; when it reaches `egptr`, the virtual **`underflow()`** is invoked to refill the area from the device — a `basic_filebuf` fills it with one big read. `sungetc`/`sputbackc` step `gptr` back for ungetting.",
        detail: "`in_avail()` reports how many characters are buffered without touching the device; `uflow()` is underflow plus advance."
      },
      {
        term: "The protocol",
        kind: "law",
        statement: "**`overflow()` and `underflow()` return `traits::eof()` to report trouble** — end of input is a normal outcome signalled by failing to refill, not by throwing. `sync()` flushes the put area to the device (what `endl`, `flush` and destruction ultimately call); `xsgetn`/`xsputn` are the bulk character moves.",
        detail: "Consequence: end-of-input is discovered lazily, one read too late — hence the eofbit-after-failure pattern of §38.3."
      },
      {
        term: "Direct buffer use",
        kind: "method",
        statement: "`is.rdbuf()` yields the buffer pointer, and **`os << is.rdbuf()` copies all remaining characters through the bulk path** — no per-character formatting layer, typically the fastest way to copy a stream. If zero characters are copied, the insertion sets `failbit` on `os`.",
        detail: "The buffer stays owned by its stream: `rdbuf()` is for using, not for deleting — `basic_streambuf` has a protected destructor, like the locale facet of §39.3."
      }
    ],
    figures: [
      {
        caption: "Stream buffer architecture. The stream object formats values and hands characters to its `rdbuf`. Output fills the put area (`pbase`..`epptr`); when it is full, `overflow()` writes the block to the device. Input drains the get area (`eback`..`egptr`); when it is exhausted, `underflow()` reads a new block. Buffering converts many small character operations into a few large device transfers.",
        svg: `<svg viewBox="0 0 820 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stream buffer architecture with put area and get area pointer protocol and the device on the right"><defs><marker id="a38n" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="20" y="78" width="180" height="116" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.6"/><text x="110" y="104" text-anchor="middle" font-size="14" fill="currentColor">basic_ostream</text><text x="110" y="126" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.8">formats values,</text><text x="110" y="144" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.8">asks its rdbuf to</text><text x="110" y="162" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.8">move characters</text><line x1="200" y1="96" x2="283" y2="84" stroke="currentColor" stroke-width="1.5" marker-end="url(#a38n)"/><text x="240" y="72" text-anchor="middle" font-size="10.5" fill="currentColor">sputc · sputn</text><line x1="283" y1="182" x2="200" y2="170" stroke="currentColor" stroke-width="1.5" marker-end="url(#a38n)"/><text x="240" y="206" text-anchor="middle" font-size="10.5" fill="currentColor">sgetc · sbumpc</text><text x="242" y="134" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.7">rdbuf()</text><rect x="250" y="28" width="350" height="206" rx="10" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.55"/><text x="425" y="48" text-anchor="middle" font-size="12.5" fill="currentColor">basic_streambuf (basic_filebuf for a file)</text><rect x="285" y="64" width="130" height="46" fill="currentColor" fill-opacity="0.16" stroke="none"/><rect x="285" y="64" width="260" height="46" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="305" y1="64" x2="305" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="325" y1="64" x2="325" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="345" y1="64" x2="345" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="365" y1="64" x2="365" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="385" y1="64" x2="385" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="405" y1="64" x2="405" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="425" y1="64" x2="425" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="445" y1="64" x2="445" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="465" y1="64" x2="465" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="485" y1="64" x2="485" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="505" y1="64" x2="505" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="525" y1="64" x2="525" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="285" y1="110" x2="285" y2="122" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="405" y1="110" x2="405" y2="122" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="545" y1="110" x2="545" y2="122" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><text x="285" y="136" text-anchor="middle" font-size="10.5" fill="currentColor">pbase</text><text x="405" y="136" text-anchor="middle" font-size="10.5" fill="currentColor">pptr</text><text x="545" y="136" text-anchor="middle" font-size="10.5" fill="currentColor">epptr</text><text x="425" y="152" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.8">put area — characters waiting to go out</text><rect x="285" y="166" width="60" height="46" fill="currentColor" fill-opacity="0.16" stroke="none"/><rect x="285" y="166" width="260" height="46" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="325" y1="166" x2="325" y2="212" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="365" y1="166" x2="365" y2="212" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="405" y1="166" x2="405" y2="212" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="445" y1="166" x2="445" y2="212" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="485" y1="166" x2="485" y2="212" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="525" y1="166" x2="525" y2="212" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/><line x1="285" y1="212" x2="285" y2="224" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="345" y1="212" x2="345" y2="224" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="545" y1="212" x2="545" y2="224" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3"/><text x="285" y="238" text-anchor="middle" font-size="10.5" fill="currentColor">eback</text><text x="345" y="238" text-anchor="middle" font-size="10.5" fill="currentColor">gptr</text><text x="545" y="238" text-anchor="middle" font-size="10.5" fill="currentColor">egptr</text><text x="425" y="252" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.8">get area — characters already fetched</text><rect x="655" y="80" width="130" height="140" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.6"/><text x="720" y="140" text-anchor="middle" font-size="13" fill="currentColor">file / device</text><text x="720" y="158" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.75">disk · socket · tty</text><line x1="545" y1="88" x2="655" y2="100" stroke="currentColor" stroke-width="1.5" marker-end="url(#a38n)"/><text x="600" y="78" text-anchor="middle" font-size="10.5" fill="currentColor">overflow() flushes</text><line x1="655" y1="182" x2="545" y2="188" stroke="currentColor" stroke-width="1.5" marker-end="url(#a38n)"/><text x="600" y="208" text-anchor="middle" font-size="10.5" fill="currentColor">underflow() refills</text><text x="410" y="282" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.85">sync() flushes the put area on demand — what endl, flush and close call</text><text x="410" y="306" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.85">buffering amortizes: one large device transfer per area-full instead of one per character</text><text x="410" y="328" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.85">os &lt;&lt; is.rdbuf() moves whole areas — the bulk-copy path of §38.5</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Two ways to copy a file — and why one wins",
        problem: "A large text file must be copied with iostreams. Compare the naive character loop against the single-statement buffer copy.",
        steps: [
          { label: "Step 1: Naive", text: '`char c; while (is.get(c)) os.put(c);` — every character travels through the formatted layer: `get` checks state and calls the buffer (possibly a virtual `underflow`), `put` calls `sputc` (possibly a virtual `overflow`). Millions of tiny operations.' },
          { label: "Step 2: Buffer copy", text: '`os << is.rdbuf();` — the filebuf hands whole blocks (typically thousands of characters) from its get area to the device, in essentially `memmove` plus a few system calls.' },
          { label: "Step 3: Why", text: "The per-character state checks and virtual calls are amortized over a block instead of being paid once per byte — the same reason C's `stdio` beats raw `read()` per byte." },
          { label: "Step 4: A peek inside", text: 'On an `istringstream` holding `\"42x\"`: `is >> n` reads 42 and stops at `x`; `is.peek()` returns `x` without moving `gptr`; `is.get()` consumes it and `gcount()` reports 1 — the pointer protocol of the figure, visible from the stream interface.' }
        ],
        result: "Same output bytes; the buffer copy is commonly several times faster. Stroustrup's rule: formatted I/O for values, raw buffers for bulk."
      },
      {
        title: "Working through buffering",
        problem: "Stream buffers under the hood. Your task: explain the split: stream classes format, `basic_streambuf` transports.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain the split: stream classes format, `basic_streambuf` transports. Write down the guarantee you will rely on — for this chapter it is: Streams format; stream buffers transport — devices appear only below `basic_streambuf`." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `if (std::cin >> x) { use(x); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — name the get-area and put-area pointers and the events that trigger `underflow()` and `overflow()` — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Put area: `pbase`/`pptr`/`epptr` with `overflow()`; get area: `eback`/`gptr`/`egptr` with `underflow()`; `sync()` flushes. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Streams format; stream buffers transport — devices appear only below `basic_streambuf`. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Streams format; stream buffers transport — devices appear only below `basic_streambuf`.",
      "Put area: `pbase`/`pptr`/`epptr` with `overflow()`; get area: `eback`/`gptr`/`egptr` with `underflow()`; `sync()` flushes.",
      "Bulk operations (`xsputn`, `os << is.rdbuf()`) win because block moves amortize the per-character overhead."
    ],
    quiz: [
      {
        q: "What happens when `pptr` reaches `epptr` during an output operation?",
        options: [
          "The stream throws",
          "`overflow()` is called to flush and rearrange the put area",
          "Output silently stops",
          "The buffer doubles its size automatically"
        ],
        answer: 1,
        explanation: "A full put area triggers the virtual `overflow()`, which in a `filebuf` writes the block out and makes room."
      },
      {
        q: "Which call refills the get area when `gptr` has reached `egptr`?",
        options: [
          "`sync()`",
          "`sungetc()`",
          "`underflow()`",
          "`in_avail()`"
        ],
        answer: 2,
        explanation: "`underflow()` is the virtual that fetches the next block from the device; `setg()` is what it uses internally to publish the new pointers."
      },
      {
        q: "Why is `os << is.rdbuf()` the fast way to copy a file?",
        options: [
          "It uses a larger disk cache",
          "It moves whole blocks through the buffer, skipping the per-character formatting layer",
          "It disables buffering",
          "It uses C stdio internally"
        ],
        answer: 1,
        explanation: "The insertion of a `streambuf*` uses the bulk path (`xsputn`), so block moves replace millions of single-character operations."
      },
      {
        q: "How does a streambuf report failure or end-of-input from `underflow()`?",
        options: [
          "By throwing `ios_base::failure`",
          "By returning `traits::eof()`",
          "By setting `eofbit` directly",
          "By returning a negative count"
        ],
        answer: 1,
        explanation: "The protocol is a return value, not an exception: end of input is a normal outcome signalled by failing to refill."
      }
    ]
  },

  // ---------------------------------------------------------------- 38.7
  {
    sectionId: "cpp-ch38-s7",
    readingTime: 4,
    intro: "A handful of rules prevent most real-world I/O bugs: define operators for your own types, test the stream after every input, send diagnostics where they survive failures, and prefer the safe idioms — string streams over `sprintf`, `'\\n'` over `endl`, `rdbuf()` for bulk copies. This closing section collects the chapter's practice into a checklist you can apply to any I/O code.",
    objectives: [
      "Apply the chapter's rules for user-defined types and error reporting",
      "Choose `\"\\n\"` vs `endl`, string streams vs `sprintf`, formatted vs unformatted I/O",
      "Write the canonical robust read loop with testing, clearing and recovery"
    ],
    concepts: [
      {
        term: "Teach your types to streams",
        kind: "method",
        statement: "**Define `operator<<` and `operator>>` for each user-defined type you want to print or read.** This is the extension point the whole design exists for — one pair of functions, and the type works with every stream in the library.",
        detail: "Keep the operators minimal: stream the parts in a natural order and leave layout decisions to the caller's manipulators."
      },
      {
        term: "Check — always — after reading",
        kind: "method",
        statement: "**After `is >> x`, verify `is` before using `x`.** The `while (is >> x)` form makes the check the loop condition. Using a value after a failed extraction is the classic I/O bug: garbage or zeros propagate silently.",
        detail: "Check even for values you 'know' are there — file formats drift, users edit files, disks truncate."
      },
      {
        term: "Format as needed, not as a habit",
        kind: "method",
        statement: "**Prefer `'\\n'` to `endl`** — `endl` flushes on every line, a pure performance loss on large outputs. When you must change format state in a function, **restore it** before returning: global format changes leak across call boundaries.",
        detail: "Flush when you need the data visible — before a long computation, before reading a prompt response, on the error path — not by reflex."
      },
      {
        term: "Diagnostics belong on cerr",
        kind: "method",
        statement: "**Error messages go to `cerr`** — unbuffered, so nothing is lost if the process dies, and separate from `stdout` so piped program data is not polluted.",
        detail: "C libraries that print errors to `stdout` corrupt piped output; the stream design gives you the two channels for free."
      },
      {
        term: "In memory is in style",
        kind: "method",
        statement: "**To build a string, format into an `ostringstream`** (`buf << \"(\" << x << \", \" << y << \")\"`, then `s = buf.str()`), never into a fixed `char` buffer with `sprintf` — the latter is a buffer overflow waiting to happen. To parse a string, read it back through an `istringstream`.",
        detail: "The same goes for values going into GUIs, databases and logs: format in memory, hand over a `std::string`."
      }
    ],
    examples: [
      {
        title: "The robust reader, assembled",
        problem: "Read whitespace-separated integers from a stream until exhaustion, summing the good ones and tolerating (while reporting) bad tokens — the full §38.3 recovery pattern.",
        steps: [
          { label: "Step 1: Loop", text: '`for (int x; is >> x;) sum += x;` — consumes every well-formed integer.' },
          { label: "Step 2: On failure", text: "If `is.eof()`, the input is done — a clean end. Otherwise a bad token is next: `is.clear();` then `is.ignore(std::numeric_limits<std::streamsize>::max(), \' \');` skips past it." },
          { label: "Step 3: Repeat until exhausted", text: "Wrap steps 1–2 in `while (is)` — the outer loop ends only on a clean end-of-input." },
          { label: "Step 4: Trace", text: "Input `\"10 20 30 forty 40\"` → 10+20+30, fail at `forty`, recover, read 40 → sum **100**, one bad token reported." }
        ],
        result: "A reader that cannot be derailed by malformed input — the pattern to reuse for any structured format."
      },
      {
        title: "Reviewing I/O streams code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the chapter's rules for user-defined types and error reporting.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Define `<<`/`>>` for your types; test the stream after every extraction." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `if (std::cin >> x) { use(x); }`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: choose `'\\n'` vs `endl`, string streams vs `sprintf`, formatted vs unformatted I/O. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: `'\\n'` unless you need the flush; `cerr` for diagnostics; string streams, never `sprintf`." },
        ],
        result: "The review ends with findings tied to reasons: Define `<<`/`>>` for your types; test the stream after every extraction. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Define `<<`/`>>` for your types; test the stream after every extraction.",
      "`'\\n'` unless you need the flush; `cerr` for diagnostics; string streams, never `sprintf`.",
      "Recoverable input: fail → `clear()` → `ignore()` past the bad token → resume."
    ],
    quiz: [
      {
        q: "You output a large table and performance matters. `endl` or `'\\n'` between rows — and why?",
        options: [
          "`endl` — it is safer",
          "`'\\n'` — `endl` also flushes the buffer on every row, which costs system calls for no benefit",
          "They are identical",
          "`'\\n'` — because `endl` is deprecated"
        ],
        answer: 1,
        explanation: "`endl` = newline + flush; in a big loop the flushes dominate. Flush deliberately, not by habit."
      },
      {
        q: "Why write diagnostics to `cerr` rather than `cout`?",
        options: [
          "It is unbuffered (survives crashes) and keeps error text out of the program's data stream on `stdout`",
          "`cerr` is buffered, so it is faster",
          "`cout` cannot be written to during errors",
          "`cerr` throws automatically"
        ],
        answer: 0,
        explanation: "Two channels: `stdout` for program output (pipeable), `cerr` for immediate diagnostics."
      },
      {
        q: "A colleague suggests `sprintf` into `char buf[32]`. The iostream answer is:",
        options: [
          "Use `sprintf` with a longer buffer",
          "Format into an `ostringstream` and take `str()` — no fixed size, no overflow",
          "Use `printf` directly",
          "Write to `cout` and read it back"
        ],
        answer: 1,
        explanation: "In-memory formatting grows with the data; a fixed buffer is an overflow bug with a delay fuse."
      }
    ]
  }
]
