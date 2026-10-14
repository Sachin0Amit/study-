import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th ed. — Chapter 35
// Utilities (§35.1 – §35.6)
// ============================================================================

export const cppCh35Content: SectionContent[] = [
  // ---------------------------------------------------------------- 35.1
  {
    sectionId: 'cpp-ch35-s1',
    readingTime: 5,
    intro: "This chapter is the library's utility drawer: small components that everything else builds on — time, compile-time rational arithmetic, compile-time type interrogation, and the tiny glue of pair, swap, move and forward. Individually modest; collectively the vocabulary in which the rest of the library is specified.",
    objectives: [
      "Name the four utility families and the headers that own them",
      "Say what makes a component 'utility' rather than 'library feature'",
      "Distinguish the compile-time utilities from the runtime ones",
    ],
    concepts: [
      {
        term: 'The utility corner',
        kind: 'definition',
        statement: "The library's **utility** components are the small, general foundations other parts build on: **time** (`<chrono>`: durations, time points, clocks), **compile-time rational arithmetic** (`<ratio>`), **type functions** (`<type_traits>` and the traits elsewhere: `iterator_traits`, `allocator_traits`), and the **minor utilities** of `<utility>` — `pair`, `swap`, `move`, `forward`.",
        detail: "They are specified first-class citizens of the library precisely because they are needed everywhere and owned by nobody: `pair` is `map`'s element type; `ratio` is a duration's period.",
      },
      {
        term: 'Small and general',
        kind: 'insight',
        statement: "A component earns a place here only if it is **small** (a page or two of code), **general** (usable without reading the rest of the library first) and **foundational** (other library parts depend on it). This is why `pair` qualifies and, say, a hypothetical `rectangle` never could.",
        detail: "The test of a utility is that removing it would force duplication in a dozen unrelated places.",
      },
      {
        term: 'Compile time versus runtime',
        kind: 'insight',
        statement: "Half this chapter runs entirely at compile time — `ratio` and the type functions are programs *about types and constants*, executed by the compiler at zero runtime cost. The other half exists to *price* runtime: `<chrono>`'s durations and clocks are how the library expresses 'how long did this take?' without unit errors.",
        detail: "The split is the modern C++ design pattern in miniature: push every decision to the compiler that the compiler can make, and make runtime values carry their units in their types.",
      },
      {
        term: 'Introduction: the working contract',
        kind: 'definition',
        statement: '**Introduction.** The utility corner of the library. You can claim this section when you can name the four utility families and the headers that own them — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 35 (Utilities); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Introduction: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, say what makes a component ’utility’ rather than ’library feature’. Then, distinguish the compile-time utilities from the runtime ones. Finally, test the outcome against the section promise: Utilities are small, general, foundational components: time, rationals, type functions, and the pair/swap/move/forward glue.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Where the pieces show up',
        problem: "Match each utility to the library feature that depends on it — the point being that these components are infrastructure, not conveniences.",
        steps: [
          { label: 'pair', text: "`map` and `unordered_map` store `pair<const Key, Value>`; `insert` returns a pair of iterator and bool. Remove `pair` and the associative containers have no element type." },
          { label: 'move and forward', text: "Every container's rvalue overloads — `push_back(T&&)`, move construction, in-place `emplace` — are written with exactly these two casts; they *are* the move semantics machinery." },
          { label: 'ratio', text: "`milliseconds` is just `duration<long long, ratio<1, 1000>>`; unit-correct time arithmetic is ratio arithmetic, done by the compiler." },
          { label: 'Type functions', text: "The library's own algorithms and containers choose implementations with traits — `is_trivial` for copy strategy, `iterator_traits` for element types — and reject nonsense instantiations with `enable_if`." },
        ],
        result: "Four utilities, four load-bearing walls: the container element type, move semantics, unit arithmetic and compile-time dispatch all live in this drawer.",
      },
      {
        title: 'Working through introduction',
        problem: 'The utility corner of the library. Your task: name the four utility families and the headers that own them.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: name the four utility families and the headers that own them. Write down the guarantee you will rely on — for this chapter it is: Utilities are small, general, foundational components: time, rationals, type functions, and the pair/swap/move/forward glue.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `auto t0 = std::chrono::steady_clock::now();` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — say what makes a component ’utility’ rather than ’library feature’ — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Their test is that the rest of the library could not be written without them. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Utilities are small, general, foundational components: time, rationals, type functions, and the pair/swap/move/forward glue. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "Utilities are small, general, foundational components: time, rationals, type functions, and the pair/swap/move/forward glue.",
      "Their test is that the rest of the library could not be written without them.",
      "Half of them compute at compile time; the rest exist to measure runtime safely.",
    ],
    quiz: [
      {
        q: "Which header owns durations, time points and clocks?",
        options: ["`<ctime>`", "`<chrono>`", "`<ratio>`", "`<utility>`"],
        answer: 1,
        explanation: "`<chrono>` is the whole time facility; `<ratio>` supplies the periods it uses.",
      },
      {
        q: "`map`'s element type is built on which utility?",
        options: ["`tuple`", "`array`", "`pair`", "`ratio`"],
        answer: 2,
        explanation: "A key and a value, exactly two heterogeneous members — `pair<const Key, Value>`.",
      },
      {
        q: "`ratio` and the type traits run:",
        options: [
          "at runtime, on small integers",
          "at compile time, costing zero runtime",
          "in a separate thread",
          "only in debug builds",
        ],
        answer: 1,
        explanation: "They are programs about types and constants — the compiler is their interpreter.",
      },
    ],
  },

  // ---------------------------------------------------------------- 35.2
  {
    sectionId: 'cpp-ch35-s2',
    readingTime: 7,
    intro: "Time in the library is a small type system: durations are counts with units, time points are offsets from a clock's epoch, and the three named clocks differ in exactly the guarantees you need before trusting a measurement. Get the units into the types and interval timing becomes hard to get wrong.",
    objectives: [
      "Model time as `duration<Rep, Period>` and predict where conversions are implicit",
      "Distinguish `system_clock`, `steady_clock` and `high_resolution_clock` by their guarantees",
      "Time a code block and convert the result to the units you want",
    ],
    concepts: [
      {
        term: 'duration',
        kind: 'definition',
        statement: "A **`duration<Rep, Period>`** measures time as a number of *ticks* of type `Rep` times a *period* — a `ratio` of seconds per tick: `milliseconds` is `duration<long long, ratio<1, 1000>>`, `nanoseconds` uses `ratio<1, 1000000000>`. Arithmetic keeps the units: subtracting two time points yields a duration; adding durations of the same type adds ticks. Conversion rules: **to a finer unit it is implicit** (seconds → milliseconds: every tick becomes an exact integer of smaller ticks) while **to a coarser unit it needs `duration_cast`**, which truncates — 1,500 ms becomes 1 s.",
        detail: "The units live in the type, so `milliseconds` and `seconds` cannot be silently mixed into a wrong answer — the compiler demands the cast that loses ticks.",
      },
      {
        term: 'time_point',
        kind: 'definition',
        statement: "A **`time_point<Clock, Duration>`** is a point on one clock's timeline: an offset from that clock's *epoch* (its zero) plus the clock type that gives the offset meaning. Subtracting two `time_point`s on the same clock gives a `duration`; adding a `duration` shifts the point. A time point without its clock is meaningless — `system_clock`'s zero and `steady_clock`'s zero are unrelated facts.",
        detail: "Comparing or differencing time points from *different* clocks is not even type-correct — a rare case where the type system encodes physics.",
      },
      {
        term: 'The three clocks',
        kind: 'definition',
        statement: "**`system_clock`** is wall-clock time — related to calendar time, convertible to and from `time_t`, and *not monotonic*: NTP adjustments and user clock changes move it. **`steady_clock`** never runs backwards — the one to use for *measuring intervals*. **`high_resolution_clock`** is the implementation's steadiest short-period clock, often an alias of one of the others. Each exposes `now()`, returning its own `time_point`.",
        detail: "The classic bug this trio prevents: benchmarking with the wall clock and reporting negative intervals when the clock stepped back under the measurement.",
      },
      {
        term: 'The timing idiom',
        kind: 'method',
        statement: "Time anything with the same four lines:\n```\nauto t0 = steady_clock::now();\ndo_work();\nauto t1 = steady_clock::now();\nauto d = duration_cast<milliseconds>(t1 - t0);\ncout << d.count() << \" ms\\n\";\n```\nSubtract the points (a duration in the clock's native unit — often nanoseconds), cast to the unit you want, read `.count()` for the raw number. `sleep_for` and the timed waits take durations directly, so units are checked by the type system.",
        detail: "For fractional units, cast to `duration<double, milli>` instead — `.count()` then returns 24.6 rather than truncating to 24.",
      },
      {
        term: 'Time: the working contract',
        kind: 'definition',
        statement: '**Time.** Clocks, durations and time points. You can claim this section when you can model time as `duration<Rep, Period>` and predict where conversions are implicit — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 35 (Utilities); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'Pricing one iteration',
        problem: "A loop of $10^7$ cheap operations is bracketed by `steady_clock::now()` calls; the difference cast to microseconds reads 24,600 μs. What does one iteration cost, in nanoseconds and in cycles on a 3.0 GHz machine? And what is `milliseconds(500) + microseconds(1500)`?",
        steps: [
          { label: 'Per operation', text: "$24{,}600\\ \\mu s / 10^7 = 2.46$ ns per operation — the microseconds cancel against the exponent: $24{,}600 \\times 10^{-6} / 10^7 = 2.46 \\times 10^{-9}$ s." },
          { label: 'In cycles', text: "At $3.0 \\times 10^9$ cycles/s: $2.46 \\times 3.0 \\approx 7.4$ cycles per iteration — a sanity check that flags impossible results (hundreds of cycles for one add means the measurement measured the clock, not the work)." },
          { label: 'Mixed units', text: "`milliseconds(500) + microseconds(1500)`: the common type is the finer unit — microseconds, since $\\gcd(1/10^3, 1/10^6) = 1/10^6$ — and 500 ms is exactly 500,000 μs, so the sum is `microseconds(501500)`." },
          { label: 'Narrowing', text: "`duration_cast<seconds>` of that result would truncate: 0.5015 s → 0 s. The cast is explicit precisely because ticks are about to be lost." },
        ],
        result: "2.46 ns ≈ 7.4 cycles per operation; the mixed sum is exactly 501,500 μs — every conversion visible in the types.",
      },
      {
        title: 'Working through time',
        problem: 'Clocks, durations and time points. Your task: model time as `duration<Rep, Period>` and predict where conversions are implicit.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: model time as `duration<Rep, Period>` and predict where conversions are implicit. Write down the guarantee you will rely on — for this chapter it is: A duration is ticks × period; finer units convert implicitly, coarser units only through truncating `duration_cast`.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `auto t0 = std::chrono::steady_clock::now();` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — distinguish `system_clock`, `steady_clock` and `high_resolution_clock` by their guarantees — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `steady_clock` for intervals (never steps back), `system_clock` for wall time, `high_resolution_clock` for the steadiest tick. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A duration is ticks × period; finer units convert implicitly, coarser units only through truncating `duration_cast`. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "A duration is ticks × period; finer units convert implicitly, coarser units only through truncating `duration_cast`.",
      "`steady_clock` for intervals (never steps back), `system_clock` for wall time, `high_resolution_clock` for the steadiest tick.",
      "Subtract two time points, cast to your units, read `.count()` — the four-line idiom that keeps units honest.",
    ],
    quiz: [
      {
        q: "Which clock should a benchmark use to measure elapsed time?",
        options: ["`system_clock`", "`steady_clock`", "`high_resolution_clock` only", "the epoch"],
        answer: 1,
        explanation: "Wall-clock time can step backwards under you; `steady_clock`'s monotonicity is the guarantee a measurement needs.",
      },
      {
        q: "Which conversion compiles without an explicit cast?",
        options: [
          "`seconds` → `milliseconds`",
          "`milliseconds` → `seconds`",
          "both",
          "neither",
        ],
        answer: 0,
        explanation: "Finer targets multiply ticks exactly; coarser targets would lose ticks, so they demand `duration_cast`.",
      },
      {
        q: "Subtracting two `time_point`s on the same clock yields:",
        options: ["a time point", "a duration", "a clock", "a tick count in seconds"],
        answer: 1,
        explanation: "Points subtract to differences — the duration between them, in the clock's native unit.",
      },
      {
        q: "`duration_cast<milliseconds>(microseconds(1500))` is:",
        options: ["1.5 ms", "1 ms", "2 ms", "a compile-time error"],
        answer: 1,
        explanation: "The cast truncates: 1.5 ms loses its half-millisecond and reports 1.",
      },
    ],
  },

  // ---------------------------------------------------------------- 35.3
  {
    sectionId: 'cpp-ch35-s3',
    readingTime: 6,
    intro: "Durations need exact periods, and floating point is not exact — so the library keeps a compile-time rational-arithmetic type. `ratio` is a fraction whose value lives in its *type*, computed and normalized entirely by the compiler, and it is the machinery behind every millisecond and nanosecond the time library uses.",
    objectives: [
      "Read `ratio<N, D>` as a normalized compile-time fraction",
      "Use the SI prefix typedefs and the four ratio arithmetic templates",
      "Explain why exactness is required and where overflow stops it",
    ],
    concepts: [
      {
        term: 'ratio',
        kind: 'definition',
        statement: "**`ratio<N, D>`** (with $D \\ne 0$) is a compile-time rational number $N/D$ — a *type*, not a value: the numerator `num` and denominator `den` are static constants. The type is always stored **normalized**: divided by $\\gcd(|N|, |D|)$ with the sign carried by the numerator — `ratio<2, 4>` *is* `ratio<1, 2>`, the same type, and `ratio<1, -2>` normalizes to `ratio<-1, 2>`.",
        detail: "Normalization is why `ratio` types can be compared and used as template arguments without worrying about representation: equal values have equal types.",
      },
      {
        term: 'The SI prefixes',
        kind: 'notation',
        statement: "The library predefines the metric prefixes as types, from `atto` ($10^{-18}$) up through `femto`, `pico`, `nano`, `micro`, `milli`, `centi`, `deci` — then `deca`, `hecto`, `kilo`, `mega`, `giga`, `tera`, `peta` to `exa` ($10^{18}$). `milliseconds` is `duration<Rep, milli>`; `nanoseconds` is `duration<Rep, nano>`. The time library's units are literally these ratios.",
        detail: "Spelling matters: `milli` is `ratio<1, 1000>`, `kilo` is `ratio<1000, 1>` — denominator last, both plain integers.",
      },
      {
        term: 'Ratio arithmetic',
        kind: 'method',
        statement: "Four templates compute on ratio types: `ratio_add`, `ratio_subtract`, `ratio_multiply`, `ratio_divide`, plus comparisons like `ratio_equal` and `ratio_less`. `ratio_add<ratio<1, 3>, ratio<1, 6>>` works like any fraction addition — cross-multiply, add, normalize — and yields the *type* `ratio<1, 2>`; `ratio_multiply<kilo, milli>` yields `ratio<1, 1>`. Every operation is exact integer arithmetic done by the compiler, and the result is again normalized.",
        detail: "The members `num` and `den` let you print or assert on the value: `static_assert(ratio_add<ratio<1,3>, ratio<1,6>>::den == 2);`.",
      },
      {
        term: 'Why exact — and where it breaks',
        kind: 'insight',
        statement: "Ratios exist because **unit algebra must be decimal-exact**: a clock that ticks every $1/1000$ s combined with one that ticks every $1/10^6$ s must land on $1/10^6$ — never on 0.0009999999. The price is **overflow**: values are held in `intmax_t` (64 bits, $\\pm 9.22 \\times 10^{18}$), so `ratio_multiply<giga, giga>` ($10^{18}$) still fits, but `ratio_multiply<exa, exa>` ($10^{36}$) is a compile-time error — detected, because the intermediate `num`/`den` computations are required to not overflow.",
        detail: "This is compile-time arithmetic's general bargain: exactness and early failure instead of convenience and silent rounding.",
      },
      {
        term: 'Compile-Time Rational Arithmetic: the working contract',
        kind: 'definition',
        statement: '**Compile-Time Rational Arithmetic.** ratio and its uses. You can claim this section when you can read `ratio<N, D>` as a normalized compile-time fraction — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 35 (Utilities); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'Exact unit algebra',
        problem: "Compute: (a) `ratio_add<ratio<1, 3>, ratio<1, 6>>`; (b) `ratio_multiply<kilo, milli>`; (c) the common duration type of `milliseconds` and `microseconds`; (d) `seconds(500) + milliseconds(1500)`.",
        steps: [
          { label: '(a) Addition', text: "Cross-multiply: $(1 \\cdot 6 + 1 \\cdot 3)/(3 \\cdot 6) = 9/18$; normalize by $\\gcd(9, 18) = 9$ → $1/2$. The result type is `ratio<1, 2>`: `::num` is 1, `::den` is 2." },
          { label: '(b) Multiplication', text: "$(1000 \\cdot 1)/(1 \\cdot 1000) = 1000/1000$ → `ratio<1, 1>`. A kilo times a milli is *exactly* one — in floating point, $1000 \\times 0.001$ famously is not always." },
          { label: '(c) Common period', text: "The common duration type takes the gcd of periods: $\\gcd(1/10^3, 1/10^6) = 1/10^6$ — microseconds. Both inputs convert exactly (1 ms = 1,000 μs), so the compiler does it silently." },
          { label: '(d) The sum', text: "500 s = 500,000 ms exactly; plus 1,500 ms → `milliseconds(501500)`. Had the target been seconds, an explicit `duration_cast` would truncate back to 501 s." },
        ],
        result: "1/2, exactly 1, microseconds, and 501,500 ms — four answers, not one decimal point endangered.",
      },
      {
        title: 'Working through compile-time rational arithmetic',
        problem: 'ratio and its uses. Your task: read `ratio<N, D>` as a normalized compile-time fraction.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: read `ratio<N, D>` as a normalized compile-time fraction. Write down the guarantee you will rely on — for this chapter it is: `ratio<N, D>` is a compile-time fraction, always stored normalized with the sign on the numerator.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `auto t0 = std::chrono::steady_clock::now();` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — use the SI prefix typedefs and the four ratio arithmetic templates — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The SI prefixes (`nano` … `exa`) are ratio typedefs; duration units are durations over them. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `ratio<N, D>` is a compile-time fraction, always stored normalized with the sign on the numerator. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "`ratio<N, D>` is a compile-time fraction, always stored normalized with the sign on the numerator.",
      "The SI prefixes (`nano` … `exa`) are ratio typedefs; duration units are durations over them.",
      "Arithmetic on ratios is exact integer math in 64-bit `intmax_t` — and overflow is a compile-time error, not a wrong answer.",
    ],
    quiz: [
      {
        q: "`ratio<6, 8>::num` and `::den` are:",
        options: ["6 and 8", "3 and 4", "0.75 and 1", "a compile-time error"],
        answer: 1,
        explanation: "Normalization divides out $\\gcd(6, 8) = 2$ — the type is `ratio<3, 4>`.",
      },
      {
        q: "Why does the library use `ratio` rather than `double` for units?",
        options: [
          "it is faster at runtime",
          "unit algebra must be exact, and floating point is not",
          "doubles cannot hold small numbers",
          "ratio supports more operations",
        ],
        answer: 1,
        explanation: "Ticking clocks must compose exactly; 0.001 × 1000 must be 1, and only integers guarantee it.",
      },
      {
        q: "`ratio_multiply<exa, exa>` (that is, $10^{36}$) is:",
        options: ["`ratio<1, 1>`", "`ratio<10, 36>`", "a compile-time error", "zero"],
        answer: 2,
        explanation: "The numerator overflows 64-bit `intmax_t`, and the standard requires detection — a compile-time error.",
      },
    ],
  },

  // ---------------------------------------------------------------- 35.4
  {
    sectionId: 'cpp-ch35-s4',
    readingTime: 7,
    intro: "A type function is a function the compiler runs: it takes types — sometimes values — and returns types or compile-time truths. The library ships a large catalog of them, the traits, and two selection tools that turn those truths into code choices. This is metaprogramming as the library actually uses it: dispatch with zero runtime cost.",
    objectives: [
      "Read a trait's `::type` and `::value` members as a type function's return values",
      "Classify the catalog: predicates, transformations, and the selectors `conditional` and `enable_if`",
      "Write a compile-time branch that emits no runtime test",
    ],
    concepts: [
      {
        term: 'Type function',
        kind: 'definition',
        statement: "A **type function** is evaluated by the compiler: it takes types (and sometimes values) as arguments and returns a type or a compile-time value. In the library they appear as **traits** — class templates exposing a `::type` member (returning a type: `remove_const<T>::type`) or a `::value` member (returning a truth: `is_integral<T>::value`). Value-returning traits are `integral_constant`s — `true_type`/`false_type` — so they compose like booleans and participate in compile-time logic.",
        detail: "You have already used type functions without the name: `iterator_traits` (chapter 33) turns 'some iterator' into its five associated types. `sizeof(T)` is a built-in type function from types to values.",
      },
      {
        term: 'The predicate catalog',
        kind: 'definition',
        statement: "The `<type_traits>` predicates come in three layers. **Primary categories** ask what a type fundamentally is: `is_integral`, `is_floating_point`, `is_class`, `is_union`, `is_enum`, `is_pointer`, `is_member_pointer`, `is_function`… **Composites** are unions of those: `is_arithmetic` (integral or floating-point), `is_fundamental`, `is_object`. **Properties** ask what a type can do: `is_trivial` (memcpy-safe: trivial construction, copy, destruction), `is_standard_layout`, `is_empty`, `is_signed`, `is_constructible` and family.",
        detail: "Every answer is known before the program runs — which is why *overload resolution and template selection* can act on it.",
      },
      {
        term: 'Transformations and selectors',
        kind: 'method',
        statement: "Transformation traits map types to types: `remove_const`, `add_const`, `remove_reference`, `decay`, `make_signed`, `make_unsigned`, `common_type`, `underlying_type`. Two selectors turn predicate results into decisions: `conditional<B, T, F>::type` is the type-level `?:` (yielding `T` when `B` is true), and `enable_if<B, T>::type` exists only when `B` is true — instantiating it otherwise is a substitution failure that silently removes the template from the overload set (SFINAE).",
        detail: "Selectors plus predicates are the entire control-flow language of compile-time programming: test, then pick — or test, then vanish.",
      },
      {
        term: 'What type functions buy',
        kind: 'insight',
        statement: "Library code must work for every user type without paying for features the type lacks: choose a copy strategy by `is_trivial` (`memcpy` for trivial types, element-wise calls otherwise), reject nonsensical instantiations with `enable_if`, compute the right return type with `common_type` or `decay`. The pattern is **compile-time dispatch with zero runtime cost** — the branch is decided before the machine code exists.",
        detail: "This is the honest version of 'abstraction without overhead': the abstraction runs in the compiler, and only its *result* appears in the binary.",
      },
      {
        term: 'Type Functions: the working contract',
        kind: 'definition',
        statement: '**Type Functions.** Type traits in the library. You can claim this section when you can read a trait’s `::type` and `::value` members as a type function’s return values — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 35 (Utilities); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    figures: [
      {
        caption: "The type-traits idea as a truth table. Rows are types; columns are the library's compile-time predicates — integral, arithmetic, class, pointer and trivial (that is, the traits `is_integral`, `is_arithmetic`, `is_class`, `is_pointer` and `is_trivial`); a filled dot is true. Composite columns are unions of primary ones: a type is arithmetic exactly when it is integral *or* floating-point, which is why `double` scores true in the arithmetic column and false in the integral column. Trivial types are the memcpy-safe ones — `int`, `double` and `char*` qualify; the class types do not. Every cell is decided before the program runs, which is what lets overload selection act on it with zero runtime cost.",
        svg: `<svg viewBox="0 0 720 330" width="100%" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Type traits as a truth table of types against predicates"><defs><marker id="tar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><text x="360" y="26" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">five predicates, five types — all decided at compile time</text><g font-size="12" font-weight="600" fill="currentColor" text-anchor="middle"><text x="112" y="62">type</text><text x="241" y="62">integral</text><text x="343" y="62">arithmetic</text><text x="445" y="62">class</text><text x="547" y="62">pointer</text><text x="649" y="62">trivial</text></g><g stroke="currentColor" opacity="0.35" stroke-width="1"><line x1="40" y1="72" x2="680" y2="72"/><line x1="40" y1="112" x2="680" y2="112" opacity="0.5"/><line x1="40" y1="152" x2="680" y2="152"/><line x1="40" y1="192" x2="680" y2="192" opacity="0.5"/><line x1="40" y1="232" x2="680" y2="232"/><line x1="40" y1="272" x2="680" y2="272" opacity="0.5"/></g><line x1="40" y1="72" x2="40" y2="272" stroke="currentColor" opacity="0.35"/><line x1="190" y1="72" x2="190" y2="272" stroke="currentColor" opacity="0.25"/><line x1="292" y1="72" x2="292" y2="272" stroke="currentColor" opacity="0.25"/><line x1="394" y1="72" x2="394" y2="272" stroke="currentColor" opacity="0.25"/><line x1="496" y1="72" x2="496" y2="272" stroke="currentColor" opacity="0.25"/><line x1="598" y1="72" x2="598" y2="272" stroke="currentColor" opacity="0.25"/><line x1="680" y1="72" x2="680" y2="272" stroke="currentColor" opacity="0.35"/><g font-size="12.5" fill="currentColor" text-anchor="middle"><text x="112" y="104">int</text><text x="112" y="144">double</text><text x="112" y="184">char*</text><text x="112" y="224">string</text><text x="112" y="264">vector&lt;int&gt;</text></g><g fill="currentColor"><circle cx="241" cy="100" r="8" opacity="0.9"/><circle cx="241" cy="140" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="241" cy="180" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="241" cy="220" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="241" cy="260" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="343" cy="100" r="8" opacity="0.9"/><circle cx="343" cy="140" r="8" opacity="0.9"/><circle cx="343" cy="180" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="343" cy="220" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="343" cy="260" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="445" cy="100" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="445" cy="140" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="445" cy="180" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="445" cy="220" r="8" opacity="0.9"/><circle cx="445" cy="260" r="8" opacity="0.9"/><circle cx="547" cy="100" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="547" cy="140" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="547" cy="180" r="8" opacity="0.9"/><circle cx="547" cy="220" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="547" cy="260" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="649" cy="100" r="8" opacity="0.9"/><circle cx="649" cy="140" r="8" opacity="0.9"/><circle cx="649" cy="180" r="8" opacity="0.9"/><circle cx="649" cy="220" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="649" cy="260" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/></g><g font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85"><text x="360" y="298">composite predicates are set unions: arithmetic = integral or floating point</text><text x="360" y="316">filled dot = true, hollow = false — every value a compile-time constant</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'A compile-time branch',
        problem: "A numeric template must pick a wider working type — `long` for integral `T` (exact arithmetic), `double` for floating `T` — and a `twice()` overload must accept only integral types. Write both and trace the decisions for `T = int` and `T = double`.",
        steps: [
          { label: 'The pick', text: "`using Work = conditional<is_integral<T>::value, long, double>::type;` — the type-level conditional expression." },
          { label: 'T = int', text: "`is_integral<int>::value` is true → `Work` is `long`; the computation's intermediate values stay exact." },
          { label: 'T = double', text: "The predicate is false → `Work` is `double` — the only representation that can hold the intermediates." },
          { label: 'The gate', text: "`template<class T> enable_if_t<is_integral<T>::value, T> twice(T x) { return 2 * x; }` — for `twice(3)` the trait is true, the return type exists, and the overload participates; for `twice(2.5)` substitution fails quietly (SFINAE), so this overload simply is not a candidate." },
        ],
        result: "Two decisions, both made during compilation — the emitted code contains no test of any trait, only its consequence.",
      },
      {
        title: 'Working through type functions',
        problem: 'Type traits in the library. Your task: read a trait’s `::type` and `::value` members as a type function’s return values.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: read a trait’s `::type` and `::value` members as a type function’s return values. Write down the guarantee you will rely on — for this chapter it is: Traits are type functions: `::type` returns a type, `::value` returns a compile-time truth.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `auto t0 = std::chrono::steady_clock::now();` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — classify the catalog: predicates, transformations, and the selectors `conditional` and `enable_if` — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The catalog layers primary categories (`is_integral`), composites (`is_arithmetic`) and properties (`is_trivial`); transformations map types to types. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Traits are type functions: `::type` returns a type, `::value` returns a compile-time truth. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "Traits are type functions: `::type` returns a type, `::value` returns a compile-time truth.",
      "The catalog layers primary categories (`is_integral`), composites (`is_arithmetic`) and properties (`is_trivial`); transformations map types to types.",
      "`conditional` is the type-level ternary; `enable_if` removes templates from overload sets — together they are compile-time dispatch.",
    ],
    quiz: [
      {
        q: "`is_arithmetic<double>::value` is:",
        options: ["false — it is not integral", "true — arithmetic means integral or floating point", "undefined for double", "true only for int"],
        answer: 1,
        explanation: "`double` is a primary floating-point type, and `is_arithmetic` is the union of integral and floating point.",
      },
      {
        q: "`conditional<B, T, F>::type` computes:",
        options: [
          "the common type of T and F",
          "T if B is true, F otherwise",
          "whether T and F are the same",
          "T only if B is true, otherwise nothing",
        ],
        answer: 1,
        explanation: "It is the ternary expression at the type level — that last option describes `enable_if`, not `conditional`.",
      },
      {
        q: "`enable_if<false, T>` is used to:",
        options: [
          "return a null pointer",
          "make the template's substitution fail, removing it from the overload set",
          "throw at compile time",
          "convert T to bool",
        ],
        answer: 1,
        explanation: "There is no `::type` when the condition fails — SFINAE drops the candidate instead of erroring.",
      },
      {
        q: "Which of these is a *transformation* trait?",
        options: ["`is_class`", "`remove_const`", "`integral_constant`", "`is_trivial`"],
        answer: 1,
        explanation: "It maps a type to a (const-stripped) type; the others are predicates or their base class.",
      },
    ],
  },

  // ---------------------------------------------------------------- 35.5
  {
    sectionId: 'cpp-ch35-s5',
    readingTime: 6,
    intro: "The smallest utilities carry the biggest load: pair underlies the associative containers, swap is the engine of move idioms, and move and forward are the two casts that make value-category control possible. Each is a few lines — and misunderstanding either of the last two is the classic source of silent performance bugs.",
    objectives: [
      "Use `pair` and `make_pair`, and say what `tie` adds",
      "State exactly what `std::move` does and does not do",
      "Trace perfect forwarding through a forwarding reference",
    ],
    concepts: [
      {
        term: 'pair',
        kind: 'definition',
        statement: "**`pair<F, S>`** holds exactly two — possibly different — types as public members `first` and `second`, with copy, assignment, `swap` and lexicographic comparison. `make_pair(x, y)` builds one, decaying `T&` to `T`. It is not a container — fixed at two members — but it is the library's join type: `map`'s elements are `pair<const Key, Value>`, and `insert` returns a `pair<iterator, bool>`.",
        detail: "With `tie` (§34.2's tuple unpacking) a pair becomes a multiple-return-value channel; with `piecewise_construct` its two members can be built in place from argument tuples.",
      },
      {
        term: 'swap',
        kind: 'method',
        statement: "`swap(a, b)` exchanges the values of two objects of the same type. Its importance is out of all proportion to its size: swapping is how move assignment is written (swap in a fresh copy's resources, let the old value's destructor clean up), how containers exchange contents in constant time, and how the copy-and-swap idiom delivers the strong exception guarantee. The more expensive copying is, the more swapping is worth.",
        detail: "The standard `swap` moves member by member; user types provide specialized swaps so the whole exchange costs four pointer writes — which is what container moves are made of.",
      },
      {
        term: 'move',
        kind: 'definition',
        statement: "**`std::move(x)` does not move anything.** It is a cast — `static_cast<T&&>(x)` — that relabels an lvalue as an rvalue so overload resolution will *choose* a move constructor or move assignment if one exists. The move itself happens inside that constructor, by convention stealing the source's resources and leaving it **valid but unspecified** — usually empty.",
        detail: "After `string t = move(s);`, `s` can be assigned to or destroyed, but reading its contents is reading an unspecified value — that is why the rule is *move only what you are finished with*.",
      },
      {
        term: 'forward',
        kind: 'method',
        statement: "`forward<T>(x)` is the **perfect-forwarding** cast. Inside `template<class T> void wrap(T&& x)`, reference collapsing makes `x` an lvalue reference or an rvalue reference depending on the call; `forward<T>(x)` restores the *original* value category at the call site, so the wrapped function sees exactly what the caller passed. The rules: `move` on parameters you are done with, `forward` on forwarding references — nothing else.",
        detail: "This is how `emplace_back` and every perfectly-forwarding wrapper in the library is written; it is the reason your `string` argument reaches the constructor without an extra copy.",
      },
      {
        term: 'Minor Utilities: the working contract',
        kind: 'definition',
        statement: '**Minor Utilities.** pair, swap, forward and move. You can claim this section when you can use `pair` and `make_pair`, and say what `tie` adds — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 35 (Utilities); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'Tracing a forwarding wrapper',
        problem: "Given `void echo(const string&)` and `void echo(string&&)`, trace two calls of `template<class T> void wrap(T&& x) { echo(forward<T>(x)); }` — one with an lvalue, one with a temporary — and then both misuses with `move` and plain pass-through.",
        steps: [
          { label: 'Lvalue argument', text: "`string s; wrap(s);` — `T` deduces `string&`, so `T&& x` collapses to `string& x`; `forward<string&>(x)` is an lvalue → the `const string&` overload of `echo` runs." },
          { label: 'Rvalue argument', text: "`wrap(\"hi\"s);` — `T` deduces `string`, `x` is `string&&`; `forward<string>(x)` is an rvalue → the `string&&` overload runs and may steal the temporary's buffer." },
          { label: 'Misuse 1: move', text: "Replace `forward` with `move`: both calls take the rvalue overload — the lvalue caller's `s` would be silently emptied inside `echo`. A correctness bug, not a speedup." },
          { label: 'Misuse 2: nothing', text: "Pass `x` bare: it names a variable, so it is always an lvalue → the temporary pays a full copy that perfect forwarding existed to avoid." },
        ],
        result: "One wrapper, both value categories preserved — the definition of perfect forwarding, and the exact pattern behind `emplace_back`.",
      },
      {
        title: 'Working through minor utilities',
        problem: 'pair, swap, forward and move. Your task: use `pair` and `make_pair`, and say what `tie` adds.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: use `pair` and `make_pair`, and say what `tie` adds. Write down the guarantee you will rely on — for this chapter it is: `pair` is the two-member join type: `map` elements and `insert` results are pairs; `tie` unpacks them.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `auto t0 = std::chrono::steady_clock::now();` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — state exactly what `std::move` does and does not do — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: `move` is a cast that relabels, not a mover — moved-from means valid but unspecified. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `pair` is the two-member join type: `map` elements and `insert` results are pairs; `tie` unpacks them. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "`pair` is the two-member join type: `map` elements and `insert` results are pairs; `tie` unpacks them.",
      "`move` is a cast that relabels, not a mover — moved-from means valid but unspecified.",
      "`forward<T>` restores the caller's value category inside a forwarding reference; `move` for done-with parameters, `forward` for forwarded ones.",
    ],
    quiz: [
      {
        q: "What does `std::move(x)` actually do?",
        options: [
          "Moves x's resources immediately",
          "Casts x to an rvalue reference so move overloads are selected",
          "Swaps x with a default value",
          "Nothing — it is documentation only",
        ],
        answer: 1,
        explanation: "The move happens later, inside the selected constructor or assignment — `move` only changes how overload resolution sees x.",
      },
      {
        q: "The element type stored inside a `map<K, V>` is:",
        options: ["`pair<K, V>`", "`pair<const K, V>`", "`tuple<K, V>`", "`V`"],
        answer: 1,
        explanation: "Keys must not be mutated once placed — the const is on the first member.",
      },
      {
        q: "Inside `template<class T> void f(T&& x)`, `forward<T>(x)` is for:",
        options: [
          "emptying x safely",
          "restoring the caller's original value category when passing x on",
          "converting x to a base class",
          "copying x cheaply",
        ],
        answer: 1,
        explanation: "That restoration is perfect forwarding; `move` would force rvalue-ness on every call.",
      },
      {
        q: "After `string t = move(s);`, the state of `s` is:",
        options: [
          "destroyed",
          "valid but unspecified — assignable, destructible, contents unknown",
          "identical to t",
          "null-terminated as before",
        ],
        answer: 1,
        explanation: "The standard's contract for moved-from objects: usable, but the only honest description of the contents is 'unspecified'.",
      },
    ],
  },

  // ---------------------------------------------------------------- 35.6
  {
    sectionId: 'cpp-ch35-s6',
    readingTime: 4,
    intro: "The chapter's advice is three habits: measure time with the typed clocks, do exact arithmetic with ratio and traits instead of doubles and macros, and be strict about when move and forward may fire. Each rule replaces a classic C-era bug with a type-checked idiom.",
    objectives: [
      "Replace C-era timing with `<chrono>` and know which clock to reach for",
      "Prefer standard type functions to hand-rolled template tricks",
      "Apply the move-versus-forward discipline to parameters",
    ],
    concepts: [
      {
        term: 'Time is typed',
        kind: 'law',
        statement: "Use `<chrono>` for anything time-related: durations and time points in the types, never `time(0)` counters, `clock()` ticks or unsigned long milliseconds. `steady_clock` for intervals; `system_clock` only when the wall clock itself is the subject; `sleep_for` and timed waits take durations so the units are checked.",
        detail: "The bugs this retires are famous: unit mix-ups, truncating divisions by 1000, and negative intervals when the wall clock steps back mid-measurement.",
      },
      {
        term: 'Metaprogram with the standard vocabulary',
        kind: 'law',
        statement: "Prefer the library's type functions — `conditional`, `enable_if`, the `is_...` predicates, the transformation traits — to home-grown template mazes, and use `ratio`, not `double`, wherever units must be exact. The standard ones are named, specified and maintained; your `typedef` labyrinth is none of those.",
        detail: "A reader who knows the library can read standard-trait code; nobody but the author can read a private one.",
      },
      {
        term: 'Move only what you are finished with',
        kind: 'insight',
        statement: "`move` on objects you are about to drop; `forward` only on forwarding references. Casting anything else to rvalue robs a named object of its contents silently — the bug that surfaces as a mysteriously empty string three functions later. And take multiple return values as pairs/tuples with `tie` rather than through out-parameters.",
        detail: "The compiler will not stop you — `move` is legal C++ on any lvalue — which is exactly why it is a discipline, written down in the chapter's advice.",
      },
      {
        term: 'Shipping rule for utilities',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Typed time: `<chrono>` durations and the right clock for the question — never raw integer ticks.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
      {
        term: 'Review checklist for utilities',
        kind: 'method',
        statement: 'Take the objectives as review questions: replace C-era timing with `<chrono>` and know which clock to reach for? Then prefer standard type functions to hand-rolled template tricks? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.',
        detail: 'A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.',
      },
    ],
    examples: [
      {
        title: 'Retiring a C-era benchmark',
        problem: "Modernize `clock_t c0 = clock(); f(); double secs = double(clock()-c0)/CLOCKS_PER_SEC;` — what actually changes besides syntax?",
        steps: [
          { label: 'What it measured', text: "The C `clock()` reports *process CPU time*, not elapsed time — a thread blocked on I/O for ten seconds reads as free. The rewrite must first decide which question is being asked." },
          { label: 'Elapsed time', text: "`auto t0 = steady_clock::now(); f(); auto d = duration<double, ratio<1>>(steady_clock::now() - t0);` — `d.count()` is elapsed seconds as a double, monotonic by construction, no macro constant, no truncation." },
          { label: 'If CPU time was wanted', text: "Keep a C clock call — but then name the variable for CPU time; mixing elapsed and CPU measurements is the classic benchmark bug this discipline prevents." },
        ],
        result: "Elapsed versus CPU made explicit, monotonicity guaranteed, and the per-second constant absorbed into the type system.",
      },
      {
        title: 'Reviewing utilities code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: replace C-era timing with `<chrono>` and know which clock to reach for.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Typed time: `<chrono>` durations and the right clock for the question — never raw integer ticks.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `auto t0 = std::chrono::steady_clock::now();`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: prefer standard type functions to hand-rolled template tricks. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Compile-time decisions go through the standard traits and `ratio`, not hand-rolled equivalents.' },
        ],
        result: 'The review ends with findings tied to reasons: Typed time: `<chrono>` durations and the right clock for the question — never raw integer ticks. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      "Typed time: `<chrono>` durations and the right clock for the question — never raw integer ticks.",
      "Compile-time decisions go through the standard traits and `ratio`, not hand-rolled equivalents.",
      "`move` only what you are finished with; `forward` only forwarding references.",
    ],
    quiz: [
      {
        q: "The advice to use `steady_clock` for benchmarking exists because it:",
        options: [
          "has the highest resolution",
          "never steps backwards, so intervals are trustworthy",
          "reads the same as the wall clock",
          "is the fastest clock to call",
        ],
        answer: 1,
        explanation: "Monotonicity, not resolution, is the property a measurement needs.",
      },
      {
        q: "For exact unit arithmetic (say, combining milli and kilo), the chapter's advice is:",
        options: [
          "use double and round",
          "use `ratio` — compile-time integers, exact",
          "write a runtime gcd",
          "avoid units entirely",
        ],
        answer: 1,
        explanation: "`ratio` exists precisely so that unit algebra never meets floating point.",
      },
      {
        q: "You wrote `consume(move(s)); report(s.size());` and `report` prints garbage. The violated rule:",
        options: [
          "`steady_clock` should have been used",
          "`move` was applied to an object still in use — move only what you are finished with",
          "`forward` should have been used",
          "`swap` should have been used",
        ],
        answer: 1,
        explanation: "The moved-from string is valid but unspecified — reporting its contents reads that unspecified state.",
      },
    ],
  },
]
