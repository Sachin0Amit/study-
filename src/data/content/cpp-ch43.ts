import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 43: The C Standard Library (Sections 43.1 – 43.8)
// Master study content.
// ============================================================================

export const cppCh43Content: SectionContent[] = [
  // ---------------------------------------------------------------- 43.1
  {
    sectionId: "cpp-ch43-s1",
    readingTime: 4,
    intro: "C++ did not replace the C library; it absorbed it. Virtually the whole ISO C library — files, formatted I/O, strings, memory, dates, and a long tail of utilities — is part of standard C++, and decades of system interfaces speak it. Stroustrup's posture is double-edged: know this library because you will read it, link against it, and occasionally need it — but in code you own, prefer the type-safe C++ equivalents.",
    objectives: [
      "Explain how the C library is incorporated into C++ and how the two header spellings differ",
      "Name the C features that are not available in C++ and why they block direct porting",
      "Justify when a modern C++ program should still use C library facilities",
    ],
    concepts: [
      {
        term: "The C library in C++",
        kind: "definition",
        statement: "The C++ standard incorporates the C standard library. Its headers are the C names with a `c` prefix and no `.h` — `<cstdio>`, `<cstdlib>`, `<cstring>`, `<cmath>`, `<ctime>`, `<cctype>`, `<climits>`, and so on — and their contents live in namespace `std`.",
        detail: "C++11 based its C library on C99, so the C99 additions (snprintf, stdint-style types, complex) are available in C++ where the implementation provides them.",
      },
      {
        term: "Two spellings, one library",
        kind: "method",
        statement: "`<stdio.h>` declares its names in the global namespace (and may additionally place them in `std`); `<cstdio>` declares them in `std` (and may additionally place them in the global namespace). Use `<cname>` in new code — but never rely on the cross-guarantees, only on the one each header promises.",
        detail: "Both spellings work everywhere in practice; the `c`-prefixed form is the C++-idiomatic one and pairs with `std::` qualification.",
      },
      {
        term: "Not everything in C is in C++",
        kind: "insight",
        statement: "C kept evolving after the fork: variable-length arrays, the `restrict` qualifier, C99 designated initializers, compound literals, `_Generic` selections, and flexible array members have no (pre-C++20) C++ equivalent. C code that uses them is not C++ code, however clean it looks.",
        detail: "Chapter 44 gives the full compatibility picture; the practical consequence here is that 'it compiled under a C compiler' is no evidence at all that it is a C++ program.",
      },
      {
        term: "Why a C++ programmer should care",
        kind: "insight",
        statement: "Three honest reasons: system APIs (POSIX, Windows, database drivers) are C; an enormous body of battle-tested algorithms and file formats is written in C; and you will maintain code that uses it. The chapter's rule: understand it, contain it behind interfaces, and prefer `string`, `vector`, `iostream`, `chrono`, and `<random>` in code you own.",
        detail: "TC++PL's summary of the C library is blunt: it is unsafe by design — unchecked arrays, manual lifetimes, static state — and every recommendation in this chapter's Advice section is really a containment strategy.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** The C library from C++. You can claim this section when you can explain how the C library is incorporated into C++ and how the two header spellings differ — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 43 (The C Standard Library); later sections in the chapter use it without restating it, so the contract compounds.",
      },
    ],
    examples: [
      {
        title: "Hello, both ways",
        problem: "Print pi to six places once through the C interface and once through iostreams; compare what each checks at compile time.",
        steps: [
          { label: "Step 1: The C call", text: "`std::printf(\"pi is about %.6f\\n\", 3.14159265);` — the format string is data interpreted at run time; the compiler does not in general verify that the conversion matches the argument type." },
          { label: "Step 2: The C++ call", text: "`std::cout << \"pi is about \" << 3.14159265 << '\\n';` — overload resolution chooses the double formatting at compile time; a wrong type cannot sneak through." },
          { label: "Step 3: The numbers", text: "`%.6f` rounds 3.14159265 to `3.141593`; the line prints 21 characters — `pi is about ` is 12, `3.141593` is 8, the newline 1 — and that 21 is exactly what printf returns." },
        ],
        result: "Both lines print the same text; the printf version is more compact and a familiar notation, but its correctness is a run-time property, while the iostream version's is a compile-time property.",
      },
      {
        title: "Working through introduction",
        problem: "The C library from C++. Your task: explain how the C library is incorporated into C++ and how the two header spellings differ.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain how the C library is incorporated into C++ and how the two header spellings differ. Write down the guarantee you will rely on — for this chapter it is: The C standard library is part of C++; `<cname>` headers put its names in `std`." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `FILE* f = std::fopen(path, modes); if (f) { std::fclose(f); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — name the C features that are not available in C++ and why they block direct porting — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: C features like variable-length arrays and `restrict` have no C++ equivalent — C code must be ported, not assumed compatible. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: The C standard library is part of C++; `<cname>` headers put its names in `std`. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "The C standard library is part of C++; `<cname>` headers put its names in `std`.",
      "C features like variable-length arrays and `restrict` have no C++ equivalent — C code must be ported, not assumed compatible.",
      "Use the C library at boundaries (OS, drivers, legacy); use the C++ equivalents in new code.",
    ],
    quiz: [
      {
        q: "What does `<cstdio>` do that `<stdio.h>` does not?",
        options: [
          "Declares the names in namespace `std` (the `.h` form declares them in the global namespace).",
          "Provides faster I/O primitives.",
          "Adds compile-time checking of format strings.",
          "Nothing at all — they are required to be identical.",
        ],
        answer: 0,
        explanation: "The `c`-prefixed header is the C++-side spelling: names in `std`. Neither header guarantees the other's placement, so qualify your calls.",
      },
      {
        q: "Which of these C features is NOT available in (pre-C++20) C++?",
        options: [
          "`printf`",
          "`qsort`",
          "Variable-length arrays (`int a[n];` with run-time n).",
          "`memcpy`",
        ],
        answer: 2,
        explanation: "VLAs, `restrict`, and C99 designated initializers are C-only; printf, qsort, and memcpy are standard C++ through `<cstdio>`, `<cstdlib>`, `<cstring>`.",
      },
      {
        q: "What is the single best reason a modern C++ programmer still needs the C library?",
        options: [
          "It is required in order to use templates.",
          "It is the only thread-safe part of the standard library.",
          "It is uniformly faster than the C++ library.",
          "Operating-system APIs, drivers, and huge legacy code bases speak C — interop is unavoidable.",
        ],
        answer: 3,
        explanation: "The C ABI is the systems lingua franca; every OS exposes a C interface first, so C++ programs must call C to reach it.",
      },
    ],
  },

  // ---------------------------------------------------------------- 43.2
  {
    sectionId: "cpp-ch43-s2",
    readingTime: 6,
    intro: "C file I/O is built on one opaque type and a handful of functions: `FILE` handles, `fopen`/`fclose` bracket a file's use, `fread`/`fwrite` move unformatted bytes, and `fseek`/`ftell` navigate. The style is bare-metal — every failure comes back as a return value nobody checks for you, which is exactly why wrapping these calls in RAII types is the first thing a C++ programmer should do with them.",
    objectives: [
      "Open, read, write, reposition, and close files with the FILE family, checking every result",
      "Choose the correct mode string for reading, writing, and appending",
      "Explain why loops must test the read count rather than feof()",
    ],
    concepts: [
      {
        term: "FILE and fopen",
        kind: "definition",
        statement: "`FILE` is the opaque handle for an open stream. `fopen(name, mode)` returns a `FILE*`, or **NULL on failure** — a check you must never omit — and `fclose` releases the stream, flushing any buffered output.",
        detail: "Three standard streams exist without opening anything: `stdin`, `stdout`, `stderr`. In C++ code, wrap the handle in a class whose destructor closes it.",
      },
      {
        term: "The mode string",
        kind: "method",
        statement: "`\"r\"` opens an existing file for reading; `\"w\"` creates or **truncates to zero** for writing; `\"a\"` creates or opens for appending (writes always go to the end); `\"r+\"`, `\"w+\"`, `\"a+\"` add reading to each; a `\"b\"` suffix requests binary mode (no newline translation).",
        detail: "The classic data-loss accident is opening with `\"w\"` a file you meant to inspect: the truncation happens at open, before your first read.",
      },
      {
        term: "Unformatted block I/O",
        kind: "method",
        statement: "`fread(p, size, n, f)` reads up to `size × n` bytes into `p` and returns the number of **items** read; `fwrite` is its mirror and returns the count written. A short count means end-of-file or error — distinguish them with `feof` and `ferror` *after* the short read.",
        detail: "Passing `size = 1` makes the item count equal bytes, which is the convenient convention for binary blobs.",
      },
      {
        term: "Repositioning",
        kind: "method",
        statement: "`fseek(f, offset, origin)` moves the position — `SEEK_SET` from the start, `SEEK_CUR` from here, `SEEK_END` from the end — and `ftell` reports it as a `long`; `rewind(f)` seeks to the start and also clears the error flags.",
        detail: "For files larger than a `long` can address, C adds `fgetpos`/`fsetpos` with an opaque position type; C++ code with random-access needs should prefer `fstream` (chapter 38).",
      },
      {
        term: "The feof trap",
        kind: "insight",
        statement: "`feof(f)` becomes true only **after** a read has already hit end-of-file — it cannot look ahead. The correct loop tests the count `fread` returns; the classic wrong loop tests `feof` first and processes the final, failed block a second time.",
        detail: "The same logic applies to `fgetc` returning `EOF` and to `fgets` returning NULL: in C, end-of-file is something you discover, not something you predict.",
      },
    ],
    examples: [
      {
        title: "Copying a file, block by block",
        problem: "Copy a 100 MiB file through a 4,096-byte buffer, and a 100 MiB + 17 byte file, using fread/fwrite.",
        steps: [
          { label: "Step 1: The loop structure", text: "`while ((n = fread(buf, 1, sizeof buf, in)) > 0) if (fwrite(buf, 1, n, out) != n) { /* error */ }` — with `size` fixed at 1, the return value is simply bytes moved, and the loop naturally handles short reads." },
          { label: "Step 2: The full blocks", text: "100 MiB = 104,857,600 bytes; at 4,096 bytes per block that is exactly 104,857,600 / 4,096 = 25,600 iterations, each with `fread` returning 4,096." },
          { label: "Step 3: The ragged tail", text: "For a file of 100 MiB + 17 bytes: 25,600 full blocks, then one `fread` returns 17, one `fwrite` writes 17, and the *next* `fread` returns 0, ending the loop — at that point, and only then, `feof(in)` would be true." },
          { label: "Step 4: What to check", text: "`fopen` twice for NULL, `fwrite` counts on every iteration, and `fclose(out)` for a flush failure — the error paths are the majority of the production version of this function, which is why C++ wraps it all." },
        ],
        result: "Exactly 25,601 iterations for the ragged file, zero extra bytes copied, and the same buffer reused throughout — the pattern every `copy` utility has used since the 1970s.",
      },
      {
        title: "Working through files",
        problem: "FILE operations. Your task: open, read, write, reposition, and close files with the FILE family, checking every result.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: open, read, write, reposition, and close files with the FILE family, checking every result. Write down the guarantee you will rely on — for this chapter it is: `fopen` returns NULL on failure; `fclose` flushes; every C file operation reports through its return value." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `FILE* f = std::fopen(path, modes); if (f) { std::fclose(f); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — choose the correct mode string for reading, writing, and appending — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `fread`/`fwrite` move size × count bytes and return the item count — check it, and let a short count end your loop. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `fopen` returns NULL on failure; `fclose` flushes; every C file operation reports through its return value. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`fopen` returns NULL on failure; `fclose` flushes; every C file operation reports through its return value.",
      "`fread`/`fwrite` move size × count bytes and return the item count — check it, and let a short count end your loop.",
      "feof() is a post-mortem flag, not a prediction: loop on the read count, never on feof().",
    ],
    quiz: [
      {
        q: "`fopen` cannot open the file. What does it do?",
        options: [
          "It throws an exception.",
          "It returns -1.",
          "It returns NULL — a pointer you must test before using.",
          "It prints a message to stderr and tries again.",
        ],
        answer: 2,
        explanation: "C has no exceptions: failures are return values. `fopen` yields a null `FILE*`, and using it unchecked is undefined behavior — typically a crash on the first call through it.",
      },
      {
        q: "What does `fopen(name, \"w\")` do to an existing file?",
        options: [
          "Truncates it to zero length and opens it for writing.",
          "Fails, because the file already exists.",
          "Opens it for appending.",
          "Opens it read-only for safety.",
        ],
        answer: 0,
        explanation: "Write mode creates or truncates. This is the single most destructive two-character string in the C library — inspecting a file with `\"w\"` destroys it before your first read.",
      },
      {
        q: "`fread(buf, 1, 4096, f)` returns 17. What happened?",
        options: [
          "An error certainly occurred.",
          "17 items — bytes, since size is 1 — were read: a short count whose cause (end-of-file or error) you determine afterwards with `feof`/`ferror`.",
          "The end of the file was reached and no bytes were read.",
          "17 more blocks of 4,096 bytes remain in the file.",
        ],
        answer: 1,
        explanation: "A short read is data: fewer bytes than requested arrived. Whether more data exists is a separate question the flags answer only after the attempt.",
      },
      {
        q: "Why is `while (!feof(f)) { fread(...); ... }` the wrong loop?",
        options: [
          "It is too slow.",
          "It is not thread-safe.",
          "It only works in binary mode.",
          "feof() is true only after a read has already failed, so the loop body runs once more on a failed block — loop on the count returned instead.",
        ],
        answer: 3,
        explanation: "The EOF flag lags one read behind. Testing it as a precondition means processing the last, failed read; the correct condition is the short count itself.",
      },
    ],
  },

  // ---------------------------------------------------------------- 43.3
  {
    sectionId: "cpp-ch43-s3",
    readingTime: 7,
    intro: "The printf family is C's formatted output: a mini-language of conversions, flags, widths, and precisions packed into one string. It is compact, fast, and universally understood — and because the format is data interpreted at run time, every misuse is undefined behavior rather than a compile error. Master the grammar, and treat the family's sharp edges (`%n`, `sprintf`, `scanf(\"%s\")`) as named hazards.",
    objectives: [
      "Parse a format specification into flags, width, precision, length, and conversion",
      "Predict the exact output of the integer, floating-point, and string conversions",
      "Use the scanf family and snprintf safely, and explain why %n and unchecked %s are banned",
    ],
    concepts: [
      {
        term: "The format grammar",
        kind: "notation",
        statement: "A conversion specification is `%` `[flags]` `[width]` `[.precision]` `[length]` conversion — for example `%08.3f` is flag `0`, width 8, precision 3, conversion `f`; `%%` prints a literal percent sign.",
        detail: "Width and precision may be given as `*`, taking their values from the next arguments — the rare case where printf consumes arguments you cannot read off the format string alone.",
      },
      {
        term: "The conversions",
        kind: "method",
        statement: "Integers: `d`/`i` signed decimal, `u` unsigned, `o` octal, `x`/`X` hexadecimal, with `hh`/`h`/`l`/`ll` length modifiers matching `char`, `short`, `long`, `long long`. Characters and strings: `c` and `s`. Pointers: `p`. Floating point: `f`/`F` fixed, `e`/`E` scientific, `g`/`G` general.",
        detail: "`g` picks the shorter of `f` and `e` for the given precision (counted in *significant* digits) and strips trailing zeros — which is why `%g` of 0.5 prints `0.5` but `%g` of 1234567.0 prints `1.23457e+06`.",
      },
      {
        term: "Width, precision, and flags",
        kind: "method",
        statement: "Width pads the field on the left (right with `-`); precision means digits after the point for `f`/`e`, significant digits for `g`, and maximum characters for `s`. Flag `0` pads with zeros, `+` forces a sign, a space reserves one for non-negatives, and `#` adds `0x` prefixes (and keeps the decimal point).",
        detail: "Padding and truncation never wrap or complain: `%3d` of 12345 prints all five digits; `%.3s` silently truncates a longer string.",
      },
      {
        term: "Return values",
        kind: "definition",
        statement: "`printf` returns the number of characters written, or negative on error; `snprintf(buf, n, ...)` writes at most `n - 1` characters plus a terminator **and returns the length the output would have had** — `n = snprintf(0, 0, fmt, args...)` is the measuring idiom.",
        detail: "The scanf family returns the number of items converted, 0 on a matching failure, or `EOF` (typically -1) — the return value is how you know the variables were actually written.",
      },
      {
        term: "The hazards",
        kind: "insight",
        statement: "A format/argument mismatch, a missing argument, or writing through `%n` is **undefined behavior** — `%n` stores the count of characters so far through a pointer argument and is banned outright in security review. `sprintf` writes without any bound; `scanf(\"%s\")` reads without any bound.",
        detail: "The safe replacements are `snprintf` for output and width-limited conversions (`%63s`) for input. This is the entire reason the C++ `format`-style and iostream approaches exist: their formatting is type-checked.",
      },
    ],
    examples: [
      {
        title: "Ten calls, ten exact outputs",
        problem: "Predict what each of these printf calls prints before reading the results.",
        steps: [
          { label: "Step 1: Integers", text: "`printf(\"[%d]\", 42)` prints `[42]`; `printf(\"[%-8d]\", 42)` prints `[42      ]` (42 then six spaces — left-justified in 8); `printf(\"[%05d]\", 42)` prints `[00042]` (zero-padded to 5)." },
          { label: "Step 2: Hex", text: "`printf(\"[%x]\", 48879)` prints `[beef]` — 11 × 4096 + 14 × 256 + 14 × 16 + 15 = 45,056 + 3,584 + 224 + 15 = 48,879; with the `#` flag and `X`, `[%#X]` prints `[0XBEEF]`." },
          { label: "Step 3: Fixed and scientific", text: "`printf(\"[%8.3f]\", 3.14159)` prints `[   3.142]` — `3.142` is 5 characters, padded to width 8; `printf(\"[%e]\", 12345.6789)` prints `[1.234568e+04]` (6 decimals by default)." },
          { label: "Step 4: The general conversion", text: "`printf(\"[%g]\", 0.5)` prints `[0.5]` — trailing zeros stripped; `printf(\"[%g]\", 1234567.0)` prints `[1.23457e+06]` — the exponent reaches the precision, so `e`-form wins with 6 significant digits." },
          { label: "Step 5: Strings", text: "`printf(\"[%.3s]\", \"abcdef\")` prints `[abc]` — precision is a maximum character count for `s`; and `printf(\"[%%]\")` prints `[%]`." },
        ],
        result: "Ten conversions, all predicted from the grammar alone: flags and width place and pad, precision changes meaning per family, and `g` is exactly 'the shorter of f and e, trailing zeros removed'.",
      },
      {
        title: "Working through the printf() family",
        problem: "Formatted output the C way. Your task: parse a format specification into flags, width, precision, length, and conversion.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: parse a format specification into flags, width, precision, length, and conversion. Write down the guarantee you will rely on — for this chapter it is: A conversion is % flags-width-precision-length-conversion; precision means decimals for f/e, significant digits for g, and maximum characters for s." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `FILE* f = std::fopen(path, modes); if (f) { std::fclose(f); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict the exact output of the integer, floating-point, and string conversions — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: printf returns the character count (or negative on error); snprintf returns the untruncated length and never writes past the buffer. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A conversion is % flags-width-precision-length-conversion; precision means decimals for f/e, significant digits for g, and maximum characters for s. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A conversion is % flags-width-precision-length-conversion; precision means decimals for f/e, significant digits for g, and maximum characters for s.",
      "printf returns the character count (or negative on error); snprintf returns the untruncated length and never writes past the buffer.",
      "%n and unbounded %s are security vulnerabilities by definition — snprintf and width-limited conversions are the safe replacements.",
    ],
    quiz: [
      {
        q: "What exactly does `printf(\"[%8.3f]\", 3.14159)` print?",
        options: [
          "[3.142]",
          "[   3.142]",
          "[  3.14]",
          "[0003.142]",
        ],
        answer: 1,
        explanation: "Precision 3 gives `3.142` (5 characters); width 8 pads on the left with 3 spaces. Zero-padding would require the `0` flag.",
      },
      {
        q: "What does `printf(\"%g\", 1234567.0)` print?",
        options: [
          "1.23457e+06",
          "1234567",
          "1234567.000000",
          "1.234568e+06",
        ],
        answer: 0,
        explanation: "With default precision 6, an exponent this large triggers the e-form with 6 significant digits: 1.23457e+06. The plain decimal would need 7 significant digits.",
      },
      {
        q: "What does `printf` return?",
        options: [
          "Nothing — it is void.",
          "The number of arguments it consumed.",
          "The number of characters written, or a negative value on error.",
          "A pointer to the output buffer.",
        ],
        answer: 2,
        explanation: "The count of characters is how callers detect output truncation and stream errors — including on snprintf, where it reports the length the output *would* have had.",
      },
      {
        q: "Which is the safest formatted-output call for writing into a fixed-size buffer?",
        options: [
          "`sprintf`",
          "`printf`",
          "`fprintf`",
          "`snprintf` — it never writes past the buffer end and always terminates.",
        ],
        answer: 3,
        explanation: "sprintf has no bound at all; snprintf takes the buffer size and truncates cleanly. That single `n` is the difference between a utility and a vulnerability.",
      },
    ],
  },

  // ---------------------------------------------------------------- 43.4
  {
    sectionId: "cpp-ch43-s4",
    readingTime: 6,
    intro: "A C string is not a type — it is a convention: a `char` array whose logical end is the first zero byte. Every function in the str family rescans for that terminator, trusts the caller to have left enough room, and (in one case) keeps hidden state between calls. The convention is efficient and utterly unforgiving; knowing its byte-level bookkeeping is what lets you debug it.",
    objectives: [
      "Explain the NUL-termination contract and its consequences for strlen and sizeof",
      "Predict the exact behavior of the copy, compare, and search families — including strncpy's traps",
      "Identify why strtok cannot be used reentrantly or from multiple threads",
    ],
    concepts: [
      {
        term: "The C string contract",
        kind: "definition",
        statement: "A C string is a `char` array whose content ends at the first zero byte (the **NUL terminator**). `strlen` counts the characters before it in O(n); `sizeof` on the array counts the whole capacity — `sizeof(\"Hi\") == 3` while `strlen(\"Hi\") == 2`.",
        detail: "The terminator is why every buffer must budget one byte more than the text, and why 'the string got longer' is never the library's problem to notice.",
      },
      {
        term: "Copy and concatenate",
        kind: "method",
        statement: "`strcpy(dst, src)` copies through and including the terminator; `strcat(dst, src)` appends src to dst's end. Both return `dst` (so calls can chain) and both write **as much as src demands** — if the destination lacks room, the behavior is undefined.",
        detail: "There is no length parameter because the length is defined by the source's terminator; the capacity of the destination exists nowhere in the interface.",
      },
      {
        term: "The strncpy trap",
        kind: "insight",
        statement: "`strncpy(dst, src, n)` writes exactly `n` bytes: it **pads with zeros** when src is shorter than n, and **leaves no terminator at all** when src is n characters or longer. Neither property is what 'safe copy' suggests — it is a fixed-size copy, not a bounded string copy.",
        detail: "If you must use it, either guarantee `dst[n-1] = 0` yourself afterward, or switch to `snprintf(dst, n, \"%s\", src)`, which does bound and terminate — or better, use `std::string`.",
      },
      {
        term: "Comparisons",
        kind: "method",
        statement: "`strcmp(a, b)` compares lexicographically (by unsigned char values) and returns a negative value, zero, or a positive value — only the sign is specified, not −1/0/1. `strncmp` compares at most n characters; `memcmp` compares raw memory with no terminator logic.",
        detail: "Test `strcmp(...) == 0` for equality, never `== -1` or `== 1` — code that assumes ±1 is portable nowhere and fails loudly on some platforms.",
      },
      {
        term: "Searches and strtok's state",
        kind: "method",
        statement: "`strchr(s, c)` and `strrchr` find the first/last occurrence of a character; `strstr(s, sub)` finds a substring; all return a pointer or NULL. `strtok(s, delim)` splits s into tokens — but it **mutates the string** (writing terminators over delimiters) and **remembers its scan position in static storage**, so it is neither reentrant nor thread-safe.",
        detail: "POSIX offers `strtok_r` with an explicit state parameter; C++ offers `std::string`, `string_view`, and regular expressions (chapter 36) with none of these problems.",
      },
    ],
    examples: [
      {
        title: "Buffer bookkeeping, byte by byte",
        problem: "Track every byte of a `char s[16] = \"Hello\";` as it is appended to, searched, and miscopied.",
        steps: [
          { label: "Step 1: The starting state", text: "`strlen(s)` is 5, `sizeof(s)` is 16, and the NUL sits at `s[5]`; bytes `s[6..15]` are indeterminate padding." },
          { label: "Step 2: Appending", text: "`strcat(s, \", world\");` — the appended text is 7 characters plus a terminator, so the result needs 5 + 7 + 1 = 13 bytes and fits in 16. Now `strlen(s)` is 12 and `sizeof(s)` is still 16 — the capacity never changes." },
          { label: "Step 3: Searching", text: "`strstr(s, \"world\")` returns `s + 7`: `s[7]` is 'w', and the match runs to `s[11]`, one before the terminator at `s[12]`. `strchr(s, 'o')` returns `s + 4` — the *first* 'o', not the one in \"world\"." },
          { label: "Step 4: The miscopy", text: "`char t[8] = \"YYYYYYY\"; strncpy(t, \"Hello\", 3);` — t now holds 'H', 'e', 'l', then the untouched 'Y','Y','Y','Y' and the original zero at `t[7]`. No terminator was written at `t[3]`, so `strlen(t)` returns 7, not 3 — and had t not happened to end in a zero, strlen would have walked off the array." },
          { label: "Step 5: The safe form", text: "`strncpy(t, \"Hello\", 8)` would have copied all 5 characters *and* two zero bytes — src shorter than n means pad — leaving `strlen(t) == 5`." },
        ],
        result: "One array, five operations, every count accounted: the terminator is the invisible 1 in every length, and strncpy is two different functions depending on whether src is shorter than n.",
      },
      {
        title: "Working through C-style strings",
        problem: "The str family. Your task: explain the NUL-termination contract and its consequences for strlen and sizeof.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: explain the NUL-termination contract and its consequences for strlen and sizeof. Write down the guarantee you will rely on — for this chapter it is: A C string ends at the first zero byte: strlen counts characters, sizeof counts the array, and every buffer needs one byte for the terminator." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `FILE* f = std::fopen(path, modes); if (f) { std::fclose(f); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict the exact behavior of the copy, compare, and search families — including strncpy's traps — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: strcpy/strcat are unbounded; strncpy neither terminates nor detects overflow — snprintf or `std::string` are the safe tools. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: A C string ends at the first zero byte: strlen counts characters, sizeof counts the array, and every buffer needs one byte for the terminator. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "A C string ends at the first zero byte: strlen counts characters, sizeof counts the array, and every buffer needs one byte for the terminator.",
      "strcpy/strcat are unbounded; strncpy neither terminates nor detects overflow — snprintf or `std::string` are the safe tools.",
      "Only the sign of strcmp's result is specified, and strtok's static state makes it unusable in multithreaded code.",
    ],
    quiz: [
      {
        q: "For `char s[] = \"Hi\";` what are `sizeof(s)` and `strlen(s)`?",
        options: [
          "2 and 3",
          "3 and 3",
          "2 and 2",
          "3 and 2 — sizeof counts the terminating zero, strlen does not.",
        ],
        answer: 3,
        explanation: "The array holds 'H', 'i', and the NUL: three bytes of storage for two characters of string.",
      },
      {
        q: "What lands in `dst` after `strncpy(dst, \"Hello\", 3)`?",
        options: [
          "The string \"Hello\"",
          "The bytes 'H', 'e', 'l' with no terminating zero — the result is not necessarily a string at all.",
          "The string \"Hel\" with a terminator",
          "Nothing — the call is an error",
        ],
        answer: 1,
        explanation: "When the source is n characters or longer, strncpy copies exactly n bytes and writes no terminator; anything reading dst as a string continues into whatever follows.",
      },
      {
        q: "What does `strcmp(\"apple\", \"apricot\")` return?",
        options: [
          "Exactly -1",
          "0",
          "A negative value — only the sign of the result is specified",
          "The difference of the string lengths, -4",
        ],
        answer: 2,
        explanation: "The standard specifies negative, zero, or positive — the first difference is 'p' (112) versus 'r' (114), so the value is negative, but its magnitude is not promised.",
      },
      {
        q: "Why is `strtok` unusable in multithreaded code?",
        options: [
          "It is not part of the standard library.",
          "It allocates memory with malloc.",
          "It keeps its scan position in static storage and mutates its argument — not reentrant, not thread-safe.",
          "It only works on wide character strings.",
        ],
        answer: 2,
        explanation: "The hidden pointer remembers where the last call stopped, so two interleaved tokenizations corrupt each other — the classic case of static state being shared state (section 42.3).",
      },
    ],
  },

  // ---------------------------------------------------------------- 43.5
  {
    sectionId: "cpp-ch43-s5",
    readingTime: 6,
    intro: "C's memory interface is four functions and one rule: malloc allocates, calloc zeroes, realloc grows, free releases — and the rule is that each block has exactly one owner who releases it exactly once, through the matching function. C++ adds the allocation operators, and the two systems must never be crossed. The section's payoff is the classic analysis of why growing a buffer by doubling costs O(1) per element amortized.",
    objectives: [
      "Use the malloc family correctly, including realloc's move semantics and NULL checks",
      "Explain alignment, and why new/delete and malloc/free must never be mixed",
      "Derive the geometric-series bound behind doubling growth and memmove's overlap rule",
    ],
    concepts: [
      {
        term: "The malloc family",
        kind: "definition",
        statement: "`malloc(n)` returns a pointer to n **uninitialized** bytes (NULL if it fails); `calloc(n, size)` allocates n × size **zeroed** bytes (and checks the multiplication for overflow); `realloc(p, n)` resizes to n — possibly by moving, returning the (possibly new) pointer, leaving the old block untouched on failure; `free(p)` releases, and `free(NULL)` is a harmless no-op.",
        detail: "Every allocation must be checked for NULL before use, and released exactly once — a double free, a free of unallocated memory, or use after free is undefined behavior.",
      },
      {
        term: "Alignment",
        kind: "definition",
        statement: "`malloc` returns a block **suitably aligned for any object with a fundamental alignment requirement** — in practice 16 bytes on x86-64. Over-aligned types (`alignas(32)` members, SIMD buffers) exceed that guarantee and need `aligned_alloc` or `operator new` with alignment.",
        detail: "The rule is what lets a C++ compiler free-with-delete-style... no — it is what lets arbitrary objects live in malloc'd memory *legally*; alignment violations on some architectures fault at run time.",
      },
      {
        term: "malloc versus new",
        kind: "insight",
        statement: "`new` knows the type, runs constructors, and reports failure by throwing; `malloc` returns NULL and constructs nothing. Memory from one allocator must be released by its own deallocator: `free` on `new`-memory, or `delete` on malloc-memory, is **undefined behavior**.",
        detail: "The mismatch typically *appears* to work — both free the pointer — and corrupts allocator metadata in production. A C++ wrapper class makes the pairing mechanical.",
      },
      {
        term: "Byte-level operations",
        kind: "method",
        statement: "`memcpy(dst, src, n)` copies n bytes and requires **non-overlapping** regions; `memmove` behaves as if through a temporary, tolerating any overlap; `memset` fills; `memcmp` compares raw bytes (returning negative/zero/positive).",
        detail: "The overlap rule is a performance contract: memcpy may copy in any order, so overlapping copies can duplicate bytes; memmove pays a small cost to detect direction and do it right.",
      },
      {
        term: "Doubling is the growth law",
        kind: "law",
        statement: "Growing an array by repeated doubling copies at most about $2n$ elements on the way from empty to capacity $n$ — the geometric series $1 + 2 + 4 + \\dots + 2^{k} < 2^{k+1}$ — so the amortized copy cost per appended element is $O(1)$. Growing by a constant increment instead copies about $n^2/2$ elements.",
        detail: "This is the analysis behind `vector` growth (chapter 31) and behind every hash table and string builder ever written in C.",
      },
    ],
    examples: [
      {
        title: "The cost of growing, in bytes moved",
        problem: "Build a 1,000-element int array twice — once adding one slot per element, once doubling the capacity — and count the bytes realloc copies.",
        steps: [
          { label: "Step 1: Incremental growth", text: "Each append moves the existing elements: total element copies are 1 + 2 + ... + 999 = 999 × 1000 / 2 = 499,500. At 4 bytes each, realloc moves 1,998,000 bytes." },
          { label: "Step 2: Doubling growth", text: "Capacities pass through 1, 2, 4, ..., 512, 1024; the copies are 1 + 2 + 4 + ... + 512 = 2^10 − 1 = 1,023 elements — 4,092 bytes for the whole build." },
          { label: "Step 3: The ratio", text: "1,998,000 / 4,092 ≈ 488× — nearly three orders of magnitude fewer bytes moved, and the gap widens with n (linear-in-n amortized versus quadratic total)." },
          { label: "Step 4: The same facts in C++", text: "`std::vector` implements exactly the doubling strategy, so its push_back is O(1) amortized — the theorem above is why you never hand-roll the +1 loop." },
        ],
        result: "499,500 versus 1,023 element copies: doubling pays a bounded geometric series instead of a quadratic sum, which is the entire engineering justification for exponential buffer growth.",
      },
      {
        title: "Working through memory",
        problem: "malloc, free and friends. Your task: use the malloc family correctly, including realloc's move semantics and NULL checks.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use the malloc family correctly, including realloc's move semantics and NULL checks. Write down the guarantee you will rely on — for this chapter it is: malloc gives uninitialized bytes, calloc zeroes, realloc may move (check for NULL), and free must be called exactly once per block." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `FILE* f = std::fopen(path, modes); if (f) { std::fclose(f); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain alignment, and why new/delete and malloc/free must never be mixed — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Never mix allocators — delete only new, free only malloc; and over-aligned types need aligned allocation. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: malloc gives uninitialized bytes, calloc zeroes, realloc may move (check for NULL), and free must be called exactly once per block. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "malloc gives uninitialized bytes, calloc zeroes, realloc may move (check for NULL), and free must be called exactly once per block.",
      "Never mix allocators — delete only new, free only malloc; and over-aligned types need aligned allocation.",
      "memcpy forbids overlap (memmove allows it), and doubling growth costs at most ~2n copies — O(1) amortized per element.",
    ],
    quiz: [
      {
        q: "`free(p)` is called twice with no allocation in between. What does the standard say?",
        options: [
          "The second call is harmless.",
          "It is undefined behavior.",
          "A runtime error is thrown.",
          "The second call returns an error code.",
        ],
        answer: 1,
        explanation: "A block has exactly one owner and exactly one release. Double free corrupts allocator bookkeeping — the bug behind many security advisories.",
      },
      {
        q: "What does `realloc(p, n)` do?",
        options: [
          "It always frees the old block first.",
          "It never moves the data.",
          "It may move the block: it returns the (possibly new) pointer, and on failure returns NULL with the old block left intact.",
          "It zeroes the newly added bytes.",
        ],
        answer: 2,
        explanation: "The move is why you must assign the result to a temporary: `q = realloc(p, n); if (!q) /* p is still valid */`. Overwriting p directly on failure leaks the block.",
      },
      {
        q: "Doubling growth to a capacity of n elements copies at most about how many elements in total?",
        options: [
          "About n",
          "About 2n — a bounded geometric series",
          "About n²",
          "Exactly log n",
        ],
        answer: 1,
        explanation: "1 + 2 + ... + n/2 + n < 2n: each element is copied at most once per doubling, and the series sums to under twice the final capacity — O(1) amortized per append.",
      },
      {
        q: "`memcpy(dst, src, n)` where the regions overlap. What happens?",
        options: [
          "It copies backward to handle the overlap.",
          "It is fine — memcpy handles overlap.",
          "It is undefined behavior — use memmove for overlapping regions.",
          "It silently truncates at the overlap.",
        ],
        answer: 2,
        explanation: "memcpy's contract excludes overlap so implementations may copy in whatever order is fastest; memmove is specified to behave as if copying through a temporary buffer.",
      },
    ],
  },

  // ---------------------------------------------------------------- 43.6
  {
    sectionId: "cpp-ch43-s6",
    readingTime: 5,
    intro: "The C library's time facilities are three different clocks wearing one header: `time()` for wall-clock seconds since the epoch, `clock()` for the processor time your program has consumed, and `struct tm` for the broken-down calendar a human can read. The functions are simple — and two of them return pointers into static storage, which is a thread-safety landmine chapter 42 prepared you for.",
    objectives: [
      "Distinguish time_t/time() from clock_t/clock(), and use difftime and CLOCKS_PER_SEC",
      "Convert a time_t to a broken-down struct tm and format it with strftime",
      "Identify the thread-safety hazards of localtime/gmtime and the modern alternatives",
    ],
    concepts: [
      {
        term: "time_t and time()",
        kind: "definition",
        statement: "`time(nullptr)` returns the current calendar time encoded as a `time_t` — on every real implementation, an integral count of **seconds since 1970-01-01 UTC**; `difftime(t1, t0)` subtracts two `time_t`s and returns the difference in seconds as a `double`.",
        detail: "The standard only promises an arithmetic type able to represent times; the seconds-since-epoch convention is a universal de facto standard. `time(&t)` also stores through the pointer if given one.",
      },
      {
        term: "clock() and processor time",
        kind: "definition",
        statement: "`clock()` returns the **processor time** consumed by the program as a `clock_t`, in units of $1/\\text{CLOCKS_PER_SEC}$ seconds — commonly microseconds (CLOCKS_PER_SEC = 1,000,000 on POSIX). It measures CPU time, not wall-clock time, so sleeping threads cost nothing and a busy loop costs everything.",
        detail: "Convert with `(double)(c1 - c0) / CLOCKS_PER_SEC`. For wall time, use `time()`/`difftime` — or better, C++ `chrono` (chapter 35) with its steady, never-wrapping clocks.",
      },
      {
        term: "struct tm and the converters",
        kind: "method",
        statement: "`gmtime(&t)` and `localtime(&t)` convert a `time_t` into a broken-down `struct tm` — `tm_year` counts from 1900, `tm_mon` is 0-based, `tm_wday`/`tm_yday` included — and `mktime` converts back, normalizing out-of-range fields. **Both converters return a pointer to static storage**: one buffer, overwritten by the next call, shared by all threads.",
        detail: "The safe pattern is to copy the result out immediately, or use POSIX `localtime_r`; `mktime` is also the way to answer 'what date is day 400 of this year' — put 400 in `tm_yday` and let it normalize.",
      },
      {
        term: "strftime",
        kind: "method",
        statement: "`strftime(buf, n, fmt, tm)` formats a `struct tm` with printf-like specifiers — `%Y` year, `%m` month, `%d` day, `%H:%M:%S` clock time, `%A` weekday name — returning the characters written, or 0 if the buffer was too small.",
        detail: "Unlike printf, the arguments are fixed (one struct tm), so there is no mismatch hazard; the format only reorganizes fields the struct already holds.",
      },
      {
        term: "The modern alternatives",
        kind: "insight",
        statement: "For measuring, C++11 `chrono` (chapter 35) offers typed durations, steady clocks, and time points that do not wrap; for thread-safe conversion, POSIX `localtime_r` or a mutex; C11 `timespec_get` gives sub-second calendar time. The C functions remain the lingua franca at boundaries — know them, use them briefly, and get back to `chrono`.",
        detail: "This division — C at the boundary, C++ inside — is the chapter's recurring recommendation applied to time.",
      },
    ],
    examples: [
      {
        title: "Decomposing 1,700,000,000",
        problem: "The epoch clock reads exactly 1,700,000,000. Recover the date, verify it arithmetically, and measure 0.31 seconds of work with clock().",
        steps: [
          { label: "Step 1: Days and leftover seconds", text: "1,700,000,000 / 86,400 = 19,675 days with remainder 80,000 seconds — and 80,000 = 22 × 3600 + 13 × 60 + 20, so the time of day is 22:13:20 UTC." },
          { label: "Step 2: The year", text: "19,675 / 365.2425 ≈ 53.86 years after 1970-01-01 — about 53 years and 10.3 months, i.e. mid-November 2023. The calendar confirms: Tuesday, 14 November 2023." },
          { label: "Step 3: What the struct holds", text: "`gmtime` returns a tm with `tm_year = 123` (2023 − 1900), `tm_mon = 10` (November, 0-based), `tm_mday = 14`, `tm_wday = 2` (Tuesday, 0-based from Sunday) — the two off-by-one conventions that cause a bug a year in naive code." },
          { label: "Step 4: Formatting and differencing", text: "`strftime` with \"%Y-%m-%d %H:%M:%S\" prints `2023-11-14 22:13:20`; and `difftime(1700000000, 1699999000)` returns exactly `1000.0` seconds." },
          { label: "Step 5: Timing with clock()", text: "A loop measured with `clock()` shows `c1 - c0 = 310,000`; with CLOCKS_PER_SEC = 1,000,000 that is 310,000 / 1,000,000 = 0.31 s of *processor* time — free of interference from other processes, unlike wall-clock timing." },
        ],
        result: "1,700,000,000 = Tue 2023-11-14 22:13:20 UTC — every digit recovered by hand arithmetic that matches the library's answer.",
      },
      {
        title: "Working through date and time",
        problem: "Clocks the C way. Your task: distinguish time_t/time() from clock_t/clock(), and use difftime and CLOCKS_PER_SEC.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: distinguish time_t/time() from clock_t/clock(), and use difftime and CLOCKS_PER_SEC. Write down the guarantee you will rely on — for this chapter it is: time() gives epoch seconds; clock() gives processor time in 1/CLOCKS_PER_SEC units — different clocks answering different questions." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `FILE* f = std::fopen(path, modes); if (f) { std::fclose(f); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — convert a time_t to a broken-down struct tm and format it with strftime — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: struct tm counts tm_year from 1900 and tm_mon from 0; strftime formats it; the converters return static storage. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: time() gives epoch seconds; clock() gives processor time in 1/CLOCKS_PER_SEC units — different clocks answering different questions. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "time() gives epoch seconds; clock() gives processor time in 1/CLOCKS_PER_SEC units — different clocks answering different questions.",
      "struct tm counts tm_year from 1900 and tm_mon from 0; strftime formats it; the converters return static storage.",
      "localtime/gmtime are not thread-safe — copy immediately, use reentrant variants, or move to chrono.",
    ],
    quiz: [
      {
        q: "What does `time(nullptr)` return?",
        options: [
          "The calendar time — seconds since 1970-01-01 on every real implementation.",
          "The processor time used by the program.",
          "Milliseconds since the machine booted.",
          "A struct tm with the current date.",
        ],
        answer: 0,
        explanation: "The standard only promises an arithmetic time type, but the seconds-since-epoch encoding is universal — and is what makes difftime and date arithmetic possible.",
      },
      {
        q: "What does `localtime` return?",
        options: [
          "A freshly allocated struct tm that you must free.",
          "A pointer to static storage — overwritten by the next call and shared across threads.",
          "A copy of the result in a buffer you supply.",
          "Nothing — it fills a caller's struct through a parameter.",
        ],
        answer: 1,
        explanation: "The single static buffer is why a second conversion destroys the first result, and why threaded programs need `localtime_r` or a mutex around each use.",
      },
      {
        q: "What does `clock()` measure?",
        options: [
          "Wall-clock time.",
          "The number of context switches.",
          "The number of elapsed seconds as a double.",
          "Processor time used by the program, in units of 1/CLOCKS_PER_SEC.",
        ],
        answer: 3,
        explanation: "clock() is for CPU-time accounting: a program blocked on I/O spends no clock ticks, which is precisely what distinguishes it from time().",
      },
      {
        q: "For a date in November, what is `tm_mon`?",
        options: [
          "11",
          "10 — the field is 0-based",
          "9",
          "It stores the month name as a string",
        ],
        answer: 1,
        explanation: "January is 0, so November is 10 — the classic off-by-one that pairs with tm_year's offset of 1900.",
      },
    ],
  },

  // ---------------------------------------------------------------- 43.7
  {
    sectionId: "cpp-ch43-s7",
    readingTime: 6,
    intro: "The rest of the C library is a drawer of useful single-purpose tools: character classification, the generic sort and search, program termination, environment access, and a math library that predates overloading. Each entry is small; together they account for a startling share of the code you will read in C and in C programs embedded in C++ systems — and each has a sharper C++ counterpart worth knowing by contrast.",
    objectives: [
      "Use the character classification functions and their nonzero-return convention",
      "Sort and search with qsort/bsearch through void* comparators, and contrast std::sort",
      "Explain exit versus abort, and the hazards of getenv, system, and rand",
    ],
    concepts: [
      {
        term: "Character classification",
        kind: "method",
        statement: "From `<cctype>`: `isdigit`, `isalpha`, `isalnum`, `isspace`, `isupper`, `islower`, `toupper`, `tolower`. All tests return **nonzero for true — not necessarily 1** — and zero for false; all depend on the current locale.",
        detail: "So test `if (isdigit(c))`, never `if (isdigit(c) == 1)`. The functions take an int that must be representable as unsigned char or EOF — passing a plain signed char is a latent bug for bytes above 127.",
      },
      {
        term: "qsort and bsearch",
        kind: "method",
        statement: "C's generic algorithms work through `void*`: `qsort(base, n, size, compar)` sorts with a comparator receiving `const void*`s and returning negative/zero/positive; `bsearch` does binary search over a **sorted** array with the same comparator. No type checking, no inlining of the comparator — the contrast with `std::sort` is the whole lesson.",
        detail: "The comparator must be a total order, and the subtraction idiom `return x - y;` overflows for extreme ints — use `(x > y) - (x < y)`.",
      },
      {
        term: "exit, abort, atexit",
        kind: "definition",
        statement: "`exit(n)` terminates normally: functions registered with `atexit` run in **reverse order of registration**, open streams are flushed and closed, and (in C++) static objects are destroyed. `abort()` terminates **immediately** — no cleanup, no flushing — typically producing a core dump; it is what `std::terminate` ends in.",
        detail: "atexit guarantees at least 32 handlers. Returning from main runs the same cleanup as calling exit with the return value.",
      },
      {
        term: "Environment and commands",
        kind: "insight",
        statement: "`getenv(\"HOME\")` returns a pointer into the environment — or **NULL if the variable is unset**, which you must check — and modifying through that pointer is undefined. `system(cmd)` hands a string to a shell: blocking, opaque to the caller, and a command-injection hazard whenever any part of the command derives from input.",
        detail: "The security review rule: never build a system() command from untrusted strings — the C++ replacements are proper process APIs, and file operations are much safer through the streams of chapter 38.",
      },
      {
        term: "rand and the math functions",
        kind: "insight",
        statement: "`rand()` is a linear congruential generator of the 1960s: `RAND_MAX` may be as small as 32767, and the low bits are weakly random; `srand` seeds it. Use `<random>` (chapter 40) for anything that matters. C's `<math.h>` functions take and return `double` only — the C++ `<cmath>` overloads them for `float` and `long double`.",
        detail: "The classic trap: `abs()` from `<cstdlib>` takes an int — use `fabs()` or the overloaded `std::abs` from `<cmath>` for floating point.",
      },
    ],
    examples: [
      {
        title: "Sorting five ints, the C way and the C++ way",
        problem: "Sort `{42, 7, 19, 73, 7}` with qsort, then find 19 with bsearch — and write both comparators correctly.",
        steps: [
          { label: "Step 1: The comparator", text: "`int cmp_int(const void* a, const void* b) { int x = *(const int*)a, y = *(const int*)b; return (x > y) - (x < y); }` — the cast-dereference dance is unavoidable, and the difference form is overflow-proof: `return x - y;` is undefined for x = 2,000,000,000 and y = −2,000,000,000, whose difference of 4 × 10⁹ does not fit in an int." },
          { label: "Step 2: The call", text: "`qsort(a, 5, sizeof a[0], cmp_int);` sorts to `{7, 7, 19, 42, 73}` — with the element size passed by hand because the interface has erased the type." },
          { label: "Step 3: The search", text: "`int key = 19; int* hit = (int*)bsearch(&key, a, 5, sizeof a[0], cmp_int);` returns `&a[2]` — index 2 in the sorted array. bsearch on an unsorted array is undefined: the comparator and the sort must agree." },
          { label: "Step 4: The C++ contrast", text: "`std::sort(a, a + 5);` and `std::lower_bound` do the same jobs with the element type known, the comparison inlined, and a lambda writing the ordering where it is used — typically several times faster for exactly this reason." },
        ],
        result: "{7, 7, 19, 42, 73}, 19 found at index 2, and a clear picture of what type erasure costs: every call site re-states the size, every comparison re-casts, and the compiler can check none of it.",
      },
      {
        title: "Working through etc.",
        problem: "Everything else in the C library. Your task: use the character classification functions and their nonzero-return convention.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use the character classification functions and their nonzero-return convention. Write down the guarantee you will rely on — for this chapter it is: Character tests return nonzero-or-zero (never compare to 1) and depend on the locale." },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `FILE* f = std::fopen(path, modes); if (f) { std::fclose(f); }` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — sort and search with qsort/bsearch through void* comparators, and contrast std::sort — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: qsort/bsearch are generic through void* comparators — check them for overflow and keep the array sorted before bsearch. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Character tests return nonzero-or-zero (never compare to 1) and depend on the locale. Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Character tests return nonzero-or-zero (never compare to 1) and depend on the locale.",
      "qsort/bsearch are generic through void* comparators — check them for overflow and keep the array sorted before bsearch.",
      "exit cleans up and abort does not; getenv can return NULL; system is a security hazard; rand is for toy programs — use <random>.",
    ],
    quiz: [
      {
        q: "What does `isdigit('9')` return?",
        options: [
          "Exactly 1",
          "Some nonzero value — only the zero/nonzero distinction is specified",
          "true",
          "The character itself",
        ],
        answer: 1,
        explanation: "The standard permits any nonzero value for true; comparing the result to 1 is a portability bug that happens to work until it does not.",
      },
      {
        q: "Why is the qsort comparator idiom `return x - y;` a bug for ints?",
        options: [
          "It sorts in descending order.",
          "Nothing — it is the recommended form.",
          "The subtraction can overflow for extreme values — undefined behavior; the form `(x > y) - (x < y)` cannot.",
          "It only works for positive numbers.",
        ],
        answer: 2,
        explanation: "Two ints can differ by more than INT_MAX: the subtraction overflows and the result's sign flips, corrupting the sort's ordering assumptions.",
      },
      {
        q: "What is the difference between `exit(n)` and `abort()`?",
        options: [
          "They are synonyms.",
          "exit runs cleanup — flushing streams, atexit handlers, static destructors — while abort terminates immediately with no cleanup.",
          "abort runs cleanup; exit does not.",
          "exit is for C programs, abort for C++ programs.",
        ],
        answer: 1,
        explanation: "exit is the orderly end (and what returning from main does); abort is the emergency stop — and the destination of `std::terminate` (chapter 42).",
      },
      {
        q: "Why does the book direct you away from `rand()`?",
        options: [
          "rand() is cryptographically secure, which is wasteful for games.",
          "RAND_MAX is guaranteed to be at least 2,147,483,647, making it too slow.",
          "It is a low-quality LCG: RAND_MAX may be as small as 32767 and low bits are weak — `<random>` provides real engines and distributions.",
          "srand() makes it thread-safe, which is too convenient.",
        ],
        answer: 2,
        explanation: "rand was designed for 1970s memory budgets. `<random>` (chapter 40) gives Mersenne Twister-class engines and correct distributions — the reason to accept nothing less.",
      },
    ],
  },

  // ---------------------------------------------------------------- 43.8
  {
    sectionId: "cpp-ch43-s8",
    readingTime: 4,
    intro: "The chapter's advice is one strategy applied five ways: treat the C library as a boundary dialect — read it fluently, call it where the platform demands, and keep it out of your program's interior. Each rule below exists because its violation is a named bug class with CVEs attached.",
    objectives: [
      "Choose the correct C++ replacement for each risky C facility",
      "Wrap C resources and checks in RAII types at program boundaries",
      "Apply the bounded-buffer and single-allocator rules that prevent the classic C failures",
    ],
    concepts: [
      {
        term: "Prefer the C++ equivalents",
        kind: "insight",
        statement: "`std::string` over `char*`, `std::vector` over `malloc`/`realloc`, `iostream` or C++20 `format` over `printf`, `chrono` over `clock()`, `<random>` over `rand()`. Reserve the C library for boundaries: operating-system calls, file descriptors, and existing C interfaces.",
        detail: "This is not aesthetic: the C++ facilities carry lengths, types, scopes, and exceptions, which is precisely the information the C versions throw away at the interface.",
      },
      {
        term: "Check every result, wrap every resource",
        kind: "law",
        statement: "C reports failure through return values — `fopen` NULL, `malloc` NULL, short `fread`/`fwrite` counts, negative `printf` — and does nothing else. Wrap each C call in an RAII type whose destructor releases the resource, so the checks and the cleanup cannot be forgotten.",
        detail: "A `File` class owning a `FILE*` turns the eleven exit paths of a realistic C function into eleven ordinary returns, all of which close the file.",
      },
      {
        term: "Bound every buffer",
        kind: "law",
        statement: "`sprintf`, `strcpy`, `strcat`, and `scanf(\"%s\")` write without limit; prefer `snprintf`, counted copies, and width-limited conversions like `scanf(\"%63s\")`. `gets` was removed from the language because it cannot be made safe at all.",
        detail: "The unbounded writes are the buffer-overflow bug class — the most exploited software defect in computing history; every fix is mechanical once identified.",
      },
      {
        term: "One allocator per allocation",
        kind: "law",
        statement: "Never mix: `free` only what `malloc`/`calloc`/`realloc` produced; `delete` only `new`; `delete[]` only `new[]`. Crossing them is undefined behavior that survives testing and corrupts heap metadata in production.",
        detail: "When a C API returns malloc'd memory, document its deallocation next to the function — and when you wrap it in C++, make the wrapper's destructor call free.",
      },
      {
        term: "Static state is shared state",
        kind: "insight",
        statement: "`strtok`, `localtime`, `gmtime`, `asctime`, and `rand` all read or write static storage: in a threaded program, that is a data race (section 42.3). Use reentrant variants (`strtok_r`, `localtime_r`) or a mutex — or better, the C++ facility that keeps state in an object instead of the process.",
        detail: "The pattern generalizes: any C function that 'remembers' the last call has a hidden global, and every hidden global is a concurrency hazard.",
      },
    ],
    examples: [
      {
        title: "Audit: five defects in eight lines",
        problem: "Find every defect in this C-style logging helper, and name the fix for each.",
        steps: [
          { label: "Step 1: The code", text: "`void log_user(const char* user, int n) { char buf[64]; sprintf(buf, \"%s: %d\", user, n); FILE* f = fopen(\"/tmp/log\", \"a\"); fprintf(f, \"%s\\n\", buf); int* data = malloc(n * sizeof *data); strcpy(buf, user); }` — with no further use of f or data shown." },
          { label: "Step 2: The unbounded writes", text: "Defect 1: `sprintf` into a 64-byte buffer — a 60-character user name overflows it; fix: `snprintf(buf, sizeof buf, \"%s: %d\", user, n)`. Defect 2: `strcpy(buf, user)` repeats the same overflow with no bound at all." },
          { label: "Step 3: The unchecked results", text: "Defect 3: `fopen` may return NULL and `fprintf` then writes through it — undefined behavior; fix: check, or wrap in a RAII file type that throws. Defect 4: the file is never closed (flush never happens); fix: the same wrapper's destructor." },
          { label: "Step 4: The allocation arithmetic", text: "Defect 5: `malloc(n * sizeof *data)` with hostile n — the multiplication can overflow size_t (n = 2^30 with 4-byte ints wraps to 0 on 32-bit) and returns NULL unchecked; fix: validate n, use `calloc` (which checks the product), and test the result." },
        ],
        result: "Five defects, four of them exploitable, all fixed by moving each operation to its bounded, checked, destructor-owned C++ counterpart.",
      },
      {
        title: "Reviewing the C standard library code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: choose the correct C++ replacement for each risky C facility.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: In new C++ code, replace C strings, malloc, printf, clock, and rand with their standard C++ counterparts." },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `FILE* f = std::fopen(path, modes); if (f) { std::fclose(f); }`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: wrap C resources and checks in RAII types at program boundaries. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Wrap C resources in RAII types so every failure check and every release happens exactly once." },
        ],
        result: "The review ends with findings tied to reasons: In new C++ code, replace C strings, malloc, printf, clock, and rand with their standard C++ counterparts. Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "In new C++ code, replace C strings, malloc, printf, clock, and rand with their standard C++ counterparts.",
      "Wrap C resources in RAII types so every failure check and every release happens exactly once.",
      "Bounded buffers, one allocator per block, and reentrancy discipline are the three rules that prevent the classic C failures.",
    ],
    quiz: [
      {
        q: "What is the right C++ replacement for hand-managed `char` buffers and `strcpy`?",
        options: [
          "`std::string` (with `std::vector` for raw buffers)",
          "`snprintf` into a fixed array",
          "`char*` plus careful `strncpy` calls",
          "`printf` with wide format specifiers",
        ],
        answer: 0,
        explanation: "std::string carries its length, grows safely, and frees itself — the properties the strcpy family lacks by construction.",
      },
      {
        q: "`free(p)` on memory that came from `new`. What does the standard say?",
        options: [
          "The memory is correctly released either way.",
          "It is undefined behavior — each allocator owns its memory.",
          "It leaks, but is otherwise defined.",
          "It compiles only in C mode.",
        ],
        answer: 1,
        explanation: "new/delete and malloc/free are separate allocation systems; crossing them is undefined — typically heap corruption that surfaces far from the bug.",
      },
      {
        q: "What is this chapter's overall posture toward the C library in C++ programs?",
        options: [
          "Never learn it — it is deprecated in C++11.",
          "Use only the C library, for maximum portability.",
          "Know it fluently for interop and reading code; prefer the C++ equivalents in code you own.",
          "Mix the two freely within each function for best performance.",
        ],
        answer: 2,
        explanation: "The C library is unavoidable at boundaries and in legacy code — the advice is containment, not ignorance or purity.",
      },
    ],
  },
]
