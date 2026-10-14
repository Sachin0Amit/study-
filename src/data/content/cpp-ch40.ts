import type { SectionContent } from '../library'

// ============================================================================
// Stroustrup, The C++ Programming Language, 4th Edition — Chapter 40:
// Numerics (TC++PL pp. 1159–1190). Sections 40.1 – 40.8.
// numeric_limits, cmath, complex, valarray + slices, <numeric> folds,
// random engines + distributions.
// ============================================================================

export const cppCh40Content: SectionContent[] = [
  // ------------------------------------------------------------------ 40.1
  {
    sectionId: "cpp-ch40-s1",
    readingTime: 5,
    intro: "C++ is used heavily for scientific and engineering computation, and this chapter inventories what the standard library offers the numerical programmer: the means to interrogate exactly what the machine's arithmetic can do, the classical mathematical functions, complex numbers, vectorized arrays, the generalized numerical algorithms, and a modern random-number facility. The emphasis is on the library facilities themselves rather than on numerical methods — and the premise throughout is that you must understand what the machine actually does before you trust what it computes.",
    objectives: [
      "Name the six numeric headers and the concern each addresses",
      "Explain why floating-point results deviate from real-arithmetic expectations",
      "Match numeric tasks to the library facility designed for them",
    ],
    concepts: [
      {
        term: "What numerics means in the standard library",
        kind: "insight",
        statement: "Chapter 40 is about **library support for computation with numbers**, not about numerical methods. The facilities are: `<limits>` (what the machine's arithmetic actually provides), `<cmath>` (the classical mathematical functions), `<complex>` (complex arithmetic), `<valarray>` (vectorized numeric arrays), `<numeric>` (the generalized numerical algorithms) and `<random>` (engines and distributions). Stroustrup's framing is honest: the standard library serves *ordinary* numerical computation well, but professional heavy numerics has always relied on specialized libraries built on top.",
        detail: "C++ is nevertheless a major language of scientific computing; the library's job is to supply dependable, efficient building blocks — the error analysis that chains them together correctly remains the programmer's.",
      },
      {
        term: "Machine arithmetic is not real arithmetic",
        kind: "law",
        statement: "**Floating-point arithmetic is finite, rounded and typed — it approximates real arithmetic.** A double carries 53 bits of significand, about 15 decimal digits, so most real numbers have no exact representation: 0.1 in binary is an infinitely repeating fraction stored only approximately, and every operation rounds its exact result to the nearest representable value. Consequences follow immediately: sums depend on order, equal-looking formulas give different answers, and `==` on computed results is almost always a bug.",
        detail: "The chapter's posture everywhere: know the limits of each type through `numeric_limits`, prefer the carefully written library functions, and compare with tolerances scaled to `epsilon` rather than with exact equality.",
      },
      {
        term: "The verification mindset",
        kind: "method",
        statement: "Because results are approximate, numeric code is written **defensively**: check inputs against the domain (`isnan`, `isfinite`), accumulate in a wider type than the data, verify totals by an independent route, and never let an efficiency claim go unmeasured. The chapter's miniature running example: `double s = 0; for (int i = 0; i < 10; ++i) s += 0.1;` leaves `s` one ulp below 1.",
        detail: "One ulp of 1.0 is $2^{-53} \\approx 1.1 \\times 10^{-16}$ — invisible at any sane printing precision, fatal to an equality test.",
      },
      {
        term: "Introduction: the working contract",
        kind: "definition",
        statement: "**Introduction.** Numerics at a glance. You can claim this section when you can name the six numeric headers and the concern each addresses — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 40 (Numerics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Introduction: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, explain why floating-point results deviate from real-arithmetic expectations. Then, match numeric tasks to the library facility designed for them. Finally, test the outcome against the section promise: Six headers cover library numerics: `<limits>`, `<cmath>`, `<complex>`, `<valarray>`, `<numeric>`, `<random>`",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Why ten tenths do not make one",
        problem: "Predict the behavior of `double s = 0; for (int i = 0; i < 10; ++i) s += 0.1; if (s == 1.0) print(\"equal\");`",
        steps: [
          { label: "Represent 0.1", text: "One tenth in binary is the infinitely repeating fraction 0.0001100110011…; the nearest double is 0.1000000000000000055511151231257827 — slightly above one tenth." },
          { label: "Add ten times, round ten times", text: "Each `+=` rounds the exact sum to the nearest double; the errors partly cancel but do not vanish, and after ten additions `s` holds 0.9999999999999999, which is $1 - 2^{-53}$." },
          { label: "Compare", text: "`s == 1.0` is false: the stored value differs from 1.0 by one ulp, about $1.1 \\times 10^{-16}$ — roughly half of `epsilon`." },
          { label: "Fix", text: "Compare with a tolerance: $|s - 1| \\le 4\\,\\epsilon \\approx 8.9 \\times 10^{-16}$ sits comfortably above the accumulated error and far below any meaningful discrepancy." },
        ],
        result: "The loop leaves s at 0.9999999999999999 and the equality test fails — exact comparison has no place against computed floating-point results.",
      },
      {
        title: "Working through introduction",
        problem: "Numerics at a glance. Your task: name the six numeric headers and the concern each addresses.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: name the six numeric headers and the concern each addresses. Write down the guarantee you will rely on — for this chapter it is: Six headers cover library numerics: `<limits>`, `<cmath>`, `<complex>`, `<valarray>`, `<numeric>`, `<random>`" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double r = std::sqrt(x); double n = std::abs(z);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain why floating-point results deviate from real-arithmetic expectations — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Binary floating-point cannot represent 0.1 exactly; ten 0.1 additions produce 0.9999999999999999 If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: Six headers cover library numerics: `<limits>`, `<cmath>`, `<complex>`, `<valarray>`, `<numeric>`, `<random>` Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "Six headers cover library numerics: `<limits>`, `<cmath>`, `<complex>`, `<valarray>`, `<numeric>`, `<random>`",
      "Binary floating-point cannot represent 0.1 exactly; ten 0.1 additions produce 0.9999999999999999",
      "The library supplies the building blocks; validating their error behavior is the programmer's task",
    ],
    quiz: [
      {
        q: "Which standard header provides `accumulate`, `inner_product` and `partial_sum`?",
        options: ["`<numeric>`", "`<cmath>`", "`<valarray>`", "`<complex>`"],
        answer: 0,
        explanation: "The generalized numerical algorithms live in <numeric>; <cmath> holds the mathematical functions and <valarray> the vectorized array type.",
      },
      {
        q: "A loop adds the double 0.1 to itself ten times and then tests s == 1.0. Why does the test fail?",
        options: ["The loop executes only nine times because of an off-by-one error", "0.1 has no exact binary representation, so each addition rounds and the errors accumulate", "The variable s is promoted to int in the comparison", "1.0 cannot be represented exactly as a double"],
        answer: 1,
        explanation: "One tenth is a repeating binary fraction; the stored value is slightly high, and after ten roundings the sum lands one ulp below 1.",
      },
      {
        q: "Which library component is designed on the premise that its elements are never aliased, so that whole-array operations can be aggressively optimized?",
        options: ["`std::vector`", "`std::complex`", "`std::valarray`", "`std::random_device`"],
        answer: 2,
        explanation: "valarray deliberately omits iterators and checked access so the compiler may assume no aliasing — the license for vectorized evaluation.",
      },
    ],
  },

  // ------------------------------------------------------------------ 40.2
  {
    sectionId: "cpp-ch40-s2",
    readingTime: 7,
    intro: "Every computation is ultimately executed by a machine whose arithmetic is finite, rounded and typed. The `<limits>` header exposes exactly what the implementation provides: how many digits are trustworthy, how large values can grow, how rounding behaves, and which special values exist. `numeric_limits` is the spec sheet you consult before trusting a formula — and since its members are constexpr, the machine's arithmetic properties can also steer compile-time decisions.",
    objectives: [
      "Query `numeric_limits` for precision, range, rounding and special values",
      "Explain the difference between min(), max() and lowest() for floating types",
      "Use `is_iec559`, `epsilon` and `digits10` to reason about the portability of numeric code",
    ],
    concepts: [
      {
        term: "`numeric_limits<T>` — the type's spec sheet",
        kind: "definition",
        statement: "`numeric_limits<T>` is a template in `<limits>`, specialized for every arithmetic type, whose static members describe that type on this implementation. C++11 made the value members `constexpr`, so queries such as `numeric_limits<int>::max()` and predicates like `is_signed` work in `static_assert` and in template selection, not only at run time.",
        detail: "The idiom for a type that must hold a large counter: `static_assert(numeric_limits<size_t>::digits >= 32)`; or selecting the smallest floating type with at least 10 trustworthy digits at compile time.",
      },
      {
        term: "What the spec sheet reports",
        kind: "method",
        statement: "The important members fall into four groups. **Nature**: `is_signed`, `is_integer`, `is_exact`, `is_bounded`, `is_modulo` (unsigned wraparound), `radix` (2 on binary machines). **Precision**: `digits` (significand bits: 24 float, 53 double, 31 for a 32-bit int), `digits10` (decimal digits that round-trip: 6, 15, 9). **Range**: `min()`, `max()`, `lowest()`, `min_exponent10`, `max_exponent10` (308 for double). **Behavior**: `epsilon()`, `round_style`, `round_error()`, `infinity()`, `quiet_NaN()`, `signaling_NaN()`, `denorm_min()`, `traps`, `tininess_before`.",
        detail: "The double column reads: radix 2, digits 53, digits10 15, epsilon $2^{-52} \\approx 2.22045 \\times 10^{-16}$, max $1.79769 \\times 10^{308}$, and `round_error()` is 0.5 under round-to-nearest.",
      },
      {
        term: "The min() versus lowest() trap",
        kind: "insight",
        statement: "**For floating types, `min()` is the smallest positive normalized value, not the most negative.** `numeric_limits<float>::min()` is about $1.17549 \\times 10^{-38}$; the most negative float is `lowest()`, about $-3.40282 \\times 10^{38}$. For integer types the two coincide. A max-hunting loop initialized with `min()` therefore starts at a tiny positive number and never updates on negative data — initialize with `lowest()`.",
        detail: "`is_iec559` is the companion guarantee: when true, the type obeys IEEE 754 — infinities, quiet and signaling NaNs, and round-to-nearest behave exactly as the standard specifies, so algorithms relying on those semantics are portable.",
      },
      {
        term: "Numerical Limits: the working contract",
        kind: "definition",
        statement: "**Numerical Limits.** numeric_limits and what it says. You can claim this section when you can query `numeric_limits` for precision, range, rounding and special values — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 40 (Numerics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Numerical Limits: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, explain the difference between min(), max() and lowest() for floating types. Then, use `is_iec559`, `epsilon` and `digits10` to reason about the portability of numeric code. Finally, test the outcome against the section promise: `numeric_limits<T>` is a constexpr spec sheet: digits10, epsilon, max, infinity and `round_style`, queryable at compile time",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Reading the spec sheet",
        problem: "Interpret the limit queries for float, double and int, and use them to fix the initialization of a maximum-finding loop.",
        steps: [
          { label: "Precision", text: "`digits10`: float 6, double 15, int 9. A double round-trips through 15 significant decimal digits; printing 17 digits is the classic guarantee for recovering the exact value." },
          { label: "Range", text: "`double::max()` is $1.79769 \\times 10^{308}$ and `double::lowest()` is its negation; `double::min()` is $2.22507 \\times 10^{-308}$ — the smallest positive normalized double, a completely different question." },
          { label: "Resolution", text: "`epsilon()`: float $1.19209 \\times 10^{-7}$ ($2^{-23}$), double $2.22045 \\times 10^{-16}$ ($2^{-52}$). Adding epsilon to 1 yields the next representable value; adding epsilon/2 rounds back to 1." },
          { label: "Use it", text: "A loop hunting the maximum should start `best = numeric_limits<double>::lowest()`. Starting from `min()` leaves every negative candidate unchallenged — the classic silent bug." },
        ],
        result: "The machine's spec sheet: double gives 15 trustworthy decimal digits over roughly $\\pm 1.8 \\times 10^{308}$ with resolution $2.2 \\times 10^{-16}$ near 1 — and `min()` is positive, so `lowest()` is what a max-search wants.",
      },
      {
        title: "Working through numerical limits",
        problem: "numeric_limits and what it says. Your task: query `numeric_limits` for precision, range, rounding and special values.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: query `numeric_limits` for precision, range, rounding and special values. Write down the guarantee you will rely on — for this chapter it is: `numeric_limits<T>` is a constexpr spec sheet: digits10, epsilon, max, infinity and `round_style`, queryable at compile time" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double r = std::sqrt(x); double n = std::abs(z);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain the difference between min(), max() and lowest() for floating types — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: For floating types `min()` is the smallest positive normalized value; the most negative value is `lowest()` If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `numeric_limits<T>` is a constexpr spec sheet: digits10, epsilon, max, infinity and `round_style`, queryable at compile time Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`numeric_limits<T>` is a constexpr spec sheet: digits10, epsilon, max, infinity and `round_style`, queryable at compile time",
      "For floating types `min()` is the smallest positive normalized value; the most negative value is `lowest()`",
      "`is_iec559` promises IEEE 754 semantics — NaN and infinity behavior you can rely on when it holds",
    ],
    quiz: [
      {
        q: "What does `numeric_limits<float>::min()` return?",
        options: ["The most negative float, about −3.4 × 10³⁸", "The smallest positive normalized float, about 1.17549 × 10⁻³⁸", "Negative zero", "The smallest subnormal float, about 1.4 × 10⁻⁴⁵"],
        answer: 1,
        explanation: "For floating types `min()` is the smallest positive normalized value; the most negative is `lowest()` and the smallest subnormal is `denorm_min()`.",
      },
      {
        q: "`numeric_limits<double>::epsilon()` is:",
        options: ["The difference between 1.0 and the next representable double, about $2.22045 \\times 10^{-16}$", "The smallest positive double", "The maximum relative error of any operation", "The absolute error of sqrt"],
        answer: 0,
        explanation: "epsilon() is the gap from 1.0 to the next value — $2^{-52}$ for double; adding half of it to 1 rounds back to 1.",
      },
      {
        q: "A `static_assert` on `numeric_limits<double>::is_iec559` gives what guarantee?",
        options: ["That double has at least 15 decimal digits", "That overflow throws an exception", "That all operations round toward zero", "That the type obeys IEEE 754 semantics for infinities, NaNs and rounding"],
        answer: 3,
        explanation: "When `is_iec559` holds, infinity and NaN behavior and round-to-nearest follow the IEEE standard, so algorithms relying on those semantics are portable.",
      },
    ],
  },

  // ------------------------------------------------------------------ 40.3
  {
    sectionId: "cpp-ch40-s3",
    readingTime: 6,
    intro: "The `<cmath>` header supplies the classical mathematical functions — roots, powers, exponentials, logarithms, trigonometry and hyperbolics — overloaded for float, double and long double, together with newer careful functions that respect quadrant and overflow subtleties. Two questions matter for every one of them: what comes back when the input is out of domain, and how the error is reported. The answers blend the C tradition (errno) with IEEE-754 values (NaN, infinity).",
    objectives: [
      "Use the cmath catalogue, including floor, ceil, round, trunc and the overloading rule",
      "Predict domain and range error behavior through errno and IEEE-754 values",
      "Choose the careful functions — atan2, hypot, fma — over their naive compositions",
    ],
    concepts: [
      {
        term: "The cmath catalogue",
        kind: "definition",
        statement: "`<cmath>` provides `sqrt`, `cbrt`, `pow`, `hypot`, `exp`, `exp2`, `log`, `log2`, `log10`, the trigonometric and hyperbolic families and their inverses, `fmod`, `fabs`/`abs`, the rounding family `floor`, `ceil`, `trunc`, `round`, `nearbyint`, `rint`, plus C++11 additions such as `erf`, `tgamma` and `copysign`. Every function is overloaded for **float, double and long double**, so the result type follows the argument — integer arithmetic stays where it belongs, in `<cstdlib>` with `abs`, `div` and `ldiv`.",
        detail: "Because 7/2 is 3 while 7.0/2 is 3.5, the cmath habit is to make the floating-point intent visible in the argument types rather than relying on implicit conversions.",
      },
      {
        term: "Error reporting",
        kind: "method",
        statement: "Historically the math functions report **domain errors** (such as the square root of a negative) and **range errors** (overflow) by setting `errno` to `EDOM` or `ERANGE` — the C convention. On IEEE-754 implementations the values themselves carry the news: `sqrt(-2.0)` returns a quiet NaN, and `pow(10.0, 400)` overflows to $+\\infty$ because $10^{400}$ exceeds `double::max()`. C++11 lets you query the policy through `math_errhandling`.",
        detail: "Classification functions make the state testable: `isnan`, `isinf`, `isfinite`, `signbit`, and `fpclassify` with the five classes `FP_NAN`, `FP_INFINITE`, `FP_NORMAL`, `FP_SUBNORMAL` and `FP_ZERO`.",
      },
      {
        term: "The careful trio: atan2, hypot, fma",
        kind: "insight",
        statement: "Three functions exist because their naive compositions are wrong in visible ways. **atan2(y, x)** recovers the angle of the point $(x, y)$ using both signs, so the third quadrant is distinguishable from the first; `atan(y/x)` cannot tell them apart. **hypot(x, y)** computes $\\sqrt{x^2 + y^2}$ with internal scaling, so arguments like $10^{200}$ do not overflow in the squares. **fma(x, y, z)** computes $x \\cdot y + z$ with a single rounding at the end — the primitive of compensated arithmetic and usually one hardware instruction.",
        detail: "sqrt itself is exactly rounded under IEEE 754; it is the composition of operations, not any single library call, where error creeps in.",
      },
      {
        term: "Standard Mathematical Functions: the working contract",
        kind: "definition",
        statement: "**Standard Mathematical Functions.** cmath and friends. You can claim this section when you can use the cmath catalogue, including floor, ceil, round, trunc and the overloading rule — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 40 (Numerics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Standard Mathematical Functions: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, predict domain and range error behavior through errno and IEEE-754 values. Then, choose the careful functions — atan2, hypot, fma — over their naive compositions. Finally, test the outcome against the section promise: cmath functions are overloaded for float, double and long double; integer arithmetic stays in `<cstdlib>`",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Polar conversion, carefully",
        problem: "Convert the Cartesian point $(x, y) = (-1, -1)$ to polar form $(r, \\theta)$, then repeat for $(10^{200}, 10^{200})$.",
        steps: [
          { label: "Naive angle", text: "`atan(y/x)` is `atan(1)` = 0.785398 rad (45°) — but the point lies in the third quadrant; the ratio alone discarded both signs." },
          { label: "Quadrant-correct", text: "`atan2(-1, -1)` returns $-3\\pi/4 \\approx -2.3561945$ rad (−135°): atan2 sees both signs and picks the right branch." },
          { label: "Radius", text: "`hypot(-1, -1)` returns $\\sqrt{2} \\approx 1.4142136$." },
          { label: "Why hypot", text: "For $(10^{200}, 10^{200})$ the naive `sqrt(x*x + y*y)` squares to $10^{400}$, beyond `double::max()` $\\approx 1.79769 \\times 10^{308}$: the intermediate becomes inf and the answer is destroyed. `hypot` rescales internally and returns $1.4142136 \\times 10^{200}$." },
        ],
        result: "$(r, \\theta) = (1.4142136, -2.3561945)$; the huge case returns 1.4142136e200 where the naive composition returns inf.",
      },
      {
        title: "Working through standard mathematical functions",
        problem: "cmath and friends. Your task: use the cmath catalogue, including floor, ceil, round, trunc and the overloading rule.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use the cmath catalogue, including floor, ceil, round, trunc and the overloading rule. Write down the guarantee you will rely on — for this chapter it is: cmath functions are overloaded for float, double and long double; integer arithmetic stays in `<cstdlib>`" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double r = std::sqrt(x); double n = std::abs(z);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict domain and range error behavior through errno and IEEE-754 values — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Out-of-domain inputs historically set errno (EDOM, ERANGE); IEEE implementations return NaN or infinity — `is_iec559` tells you which regime you are in If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: cmath functions are overloaded for float, double and long double; integer arithmetic stays in `<cstdlib>` Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "cmath functions are overloaded for float, double and long double; integer arithmetic stays in `<cstdlib>`",
      "Out-of-domain inputs historically set errno (EDOM, ERANGE); IEEE implementations return NaN or infinity — `is_iec559` tells you which regime you are in",
      "Prefer atan2, hypot and fma to their naive compositions: they handle quadrants, overflow and rounding that the compositions get wrong",
    ],
    quiz: [
      {
        q: "Which expression yields the quadrant-correct angle of the point (x, y) = (−1, −1)?",
        options: ["atan(y/x) — it only needs the ratio", "atan2(y, x), which returns −3π/4 ≈ −2.356", "asin(y)", "hypot(x, y)"],
        answer: 1,
        explanation: "atan2 takes both signs and lands in the third quadrant; the ratio y/x is the same in the first quadrant, so atan cannot distinguish them.",
      },
      {
        q: "On an implementation where `is_iec559` holds, `sqrt(-2.0)` returns:",
        options: ["A quiet NaN (the C errno convention would set EDOM)", "−sqrt(2), the negative root", "A thrown `std::domain_error`", "0.0"],
        answer: 0,
        explanation: "IEEE 754 defines the square root of a negative as a quiet NaN; the C tradition additionally sets errno to EDOM.",
      },
      {
        q: "Why prefer hypot(x, y) to sqrt(x*x + y*y)?",
        options: ["It is faster on all hardware", "It computes the hypotenuse of the conjugate", "It avoids overflow and underflow in the intermediate squares, so huge or tiny inputs survive", "It also works for complex numbers"],
        answer: 2,
        explanation: "hypot rescales its arguments before squaring, so 1e200 does not overflow on the way to a representable answer.",
      },
    ],
  },

  // ------------------------------------------------------------------ 40.4
  {
    sectionId: "cpp-ch40-s4",
    readingTime: 7,
    intro: "Complex numbers extend the real line to a plane, and `<complex>` gives that plane a full arithmetic: a `complex<T>` for each floating type, the usual operators with mixed scalar operands, and the mathematical library (exp, log, sqrt, trigonometry) lifted to complex arguments. The payoff is code that states mathematics directly — polynomial roots, AC analysis, Fourier transforms — without hand-managed pairs of reals. The geometry of the plane explains the algebra: what addition, multiplication and conjugation actually do.",
    objectives: [
      "Construct and combine complex<T> values with operators, literals and mixed scalar arithmetic",
      "Use the complex function library — polar, abs, arg, norm, conj, exp, sqrt",
      "Interpret addition, multiplication and conjugation as geometry in the complex plane",
    ],
    concepts: [
      {
        term: "complex<T>",
        kind: "definition",
        statement: "`complex<T>` in `<complex>` is designed for `T` being **float, double or long double**; it stores a real and an imaginary part, exposes them through `real()` and `imag()`, and supports construction `complex<double> z{3, 4}`. User-defined literals `2i`, `2.0i`, `2.0if`, `2.0il` (in `std::literals::complex_literals`) denote $2i$ as complex<double>, complex<float> or complex<long double> respectively — the imaginary unit finally looks like one.",
        detail: "There is deliberately no complex<int>: exact complex integer arithmetic has no generally useful division, and the library refuses to fake it.",
      },
      {
        term: "The operator set",
        kind: "method",
        statement: "The usual operators — `+`, `-`, `*`, `/` with their compound forms, and `==`/`!=` — are provided as free functions, so **mixed scalar operands work naturally**: `z + 3`, `3 + z`, `z * 2.0` all compile, the scalar being promoted. Comparison is exact and component-wise, with no tolerance. The mathematical library carries over: `polar(rho, theta)`, `abs` (the modulus), `arg` (the angle), `norm` (**the squared modulus**, $z \\bar{z}$ — note: not `abs`), `conj`, `proj`, `sqrt`, `exp`, `log`, `log10`, `pow`, `sin`, `cos`, `tan`, `sinh`, `cosh`, `tanh`.",
        detail: "The convention norm(z) = |z|² exists because it is the cheap operation — one multiply and one add — while the modulus needs a square root.",
      },
      {
        term: "The geometry behind the algebra",
        kind: "insight",
        statement: "**Addition is the parallelogram rule** — components add independently. **Multiplication multiplies moduli and adds arguments**: $(a+bi)(c+di) = (ac - bd) + (ad + bc)i$; for instance $(1+2i)(3+i) = 1 + 7i$ with $\\sqrt{5} \\cdot \\sqrt{10} = \\sqrt{50}$ and $63.4° + 18.4° = 81.9°$. **Conjugation reflects across the real axis** and satisfies $z \\bar{z} = |z|^2$. Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ turns `exp` into rotation — the reason complex arithmetic is the native language of FFTs, oscillations and quantum amplitudes.",
        detail: "Squaring as a special case: $(3+4i)^2 = -7 + 24i$, still of modulus $25 = |3+4i|^2$ — powers preserve the norm-multiplication law.",
      },
      {
        term: "complex Numbers: the working contract",
        kind: "definition",
        statement: "**complex Numbers.** The complex library. You can claim this section when you can construct and combine complex<T> values with operators, literals and mixed scalar arithmetic — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 40 (Numerics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "complex Numbers: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, use the complex function library — polar, abs, arg, norm, conj, exp, sqrt. Then, interpret addition, multiplication and conjugation as geometry in the complex plane. Finally, test the outcome against the section promise: `complex<T>` supports the full operator set with mixed scalar operands; comparison is exact and component-wise",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    figures: [
      {
        caption: "Complex operations as plane geometry. Left: addition by the parallelogram rule, $z_1 + z_2 = (3+i) + (1+3i) = 4+4i$. Middle: multiplication rotates and scales — $(1+2i)(3+i) = 1+7i$, moduli multiply ($\\sqrt{5}\\cdot\\sqrt{10} = \\sqrt{50}$) and arguments add ($63.4° + 18.4° = 81.9°$). Right: conjugation reflects $z = 3+4i$ across the real axis, and $z\\bar{z} = |z|^2 = 25$.",
        svg: '<svg viewBox="0 0 760 338" width="100%" role="img" aria-label="Complex plane operations: parallelogram addition, rotation and scaling multiplication, conjugate reflection"><text x="128" y="16" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="700" fill="currentColor">Addition: the parallelogram rule</text><text x="128" y="30" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.85">(3+i) + (1+3i) = 4+4i</text><g stroke="currentColor" stroke-width="0.8" opacity="0.12"><line x1="88" y1="104" x2="88" y2="296"/><line x1="118" y1="104" x2="118" y2="296"/><line x1="148" y1="104" x2="148" y2="296"/><line x1="178" y1="104" x2="178" y2="296"/><line x1="208" y1="104" x2="208" y2="296"/><line x1="28" y1="250" x2="232" y2="250"/><line x1="28" y1="220" x2="232" y2="220"/><line x1="28" y1="190" x2="232" y2="190"/><line x1="28" y1="160" x2="232" y2="160"/></g><line x1="24" y1="280" x2="232" y2="280" stroke="currentColor" stroke-width="1.3"/><polygon points="232,280 224,276.5 224,283.5" fill="currentColor"/><line x1="58" y1="304" x2="58" y2="98" stroke="currentColor" stroke-width="1.3"/><polygon points="58,98 54.5,106 61.5,106" fill="currentColor"/><text x="228" y="272" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.7">Re</text><text x="66" y="104" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.7">Im</text><line x1="148" y1="250" x2="178" y2="160" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" opacity="0.55"/><line x1="88" y1="190" x2="178" y2="160" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" opacity="0.55"/><line x1="58" y1="280" x2="88" y2="190" stroke="currentColor" stroke-width="1.8"/><polygon points="88,190 81,198.2 88.6,200.8" fill="currentColor"/><circle cx="88" cy="190" r="3" fill="currentColor"/><text x="93" y="182" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">z₂ = 1+3i</text><line x1="58" y1="280" x2="148" y2="250" stroke="currentColor" stroke-width="1.8"/><polygon points="148,250 137.3,249.3 139.9,256.9" fill="currentColor"/><circle cx="148" cy="250" r="3" fill="currentColor"/><text x="152" y="244" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">z₁ = 3+i</text><line x1="58" y1="280" x2="178" y2="160" stroke="currentColor" stroke-width="2.8"/><polygon points="178,160 168.1,164.3 173.7,169.9" fill="currentColor"/><circle cx="178" cy="160" r="3.4" fill="currentColor"/><text x="184" y="156" font-family="ui-monospace, monospace" font-size="10" font-weight="700" fill="currentColor">z₁+z₂ = 4+4i</text><text x="128" y="324" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.75">real and imaginary parts add separately</text><text x="378" y="16" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="700" fill="currentColor">Multiplication: rotate and scale</text><text x="378" y="30" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.85">(1+2i)·(3+i) = 1+7i</text><g stroke="currentColor" stroke-width="0.8" opacity="0.12"><line x1="338" y1="90" x2="338" y2="296"/><line x1="368" y1="90" x2="368" y2="296"/><line x1="398" y1="90" x2="398" y2="296"/><line x1="428" y1="90" x2="428" y2="296"/><line x1="458" y1="90" x2="458" y2="296"/><line x1="488" y1="90" x2="488" y2="296"/><line x1="278" y1="250" x2="505" y2="250"/><line x1="278" y1="220" x2="505" y2="220"/><line x1="278" y1="190" x2="505" y2="190"/><line x1="278" y1="160" x2="505" y2="160"/><line x1="278" y1="130" x2="505" y2="130"/><line x1="278" y1="100" x2="505" y2="100"/></g><line x1="268" y1="280" x2="532" y2="280" stroke="currentColor" stroke-width="1.3"/><polygon points="532,280 524,276.5 524,283.5" fill="currentColor"/><line x1="308" y1="304" x2="308" y2="62" stroke="currentColor" stroke-width="1.3"/><polygon points="308,62 304.5,70 311.5,70" fill="currentColor"/><text x="528" y="272" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.7">Re</text><text x="316" y="68" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.7">Im</text><line x1="308" y1="280" x2="338" y2="220" stroke="currentColor" stroke-width="1.8"/><polygon points="338,220 329.9,227.1 337.1,230.7" fill="currentColor"/><circle cx="338" cy="220" r="3" fill="currentColor"/><text x="344" y="216" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">z = 1+2i</text><line x1="308" y1="280" x2="398" y2="250" stroke="currentColor" stroke-width="1.8"/><polygon points="398,250 387.2,249.4 389.8,257" fill="currentColor"/><circle cx="398" cy="250" r="3" fill="currentColor"/><text x="404" y="246" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">w = 3+i</text><line x1="308" y1="280" x2="338" y2="70" stroke="currentColor" stroke-width="2.8"/><polygon points="338,70 332.6,79.3 340.6,80.5" fill="currentColor"/><circle cx="338" cy="70" r="3.4" fill="currentColor"/><text x="344" y="66" font-family="ui-monospace, monospace" font-size="10" font-weight="700" fill="currentColor">z·w = 1+7i</text><path d="M 352 280 A 44 44 0 0 0 314.2 236.4" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="378" y="318" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor">moduli multiply: √5 · √10 = √50 ≈ 7.07</text><text x="378" y="331" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor">arguments add: 63.4° + 18.4° = 81.9°</text><text x="630" y="16" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="700" fill="currentColor">Conjugate: reflect</text><text x="630" y="30" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor" opacity="0.85">z = 3+4i,  conj(z) = 3−4i</text><g stroke="currentColor" stroke-width="0.8" opacity="0.12"><line x1="596" y1="44" x2="596" y2="306"/><line x1="626" y1="44" x2="626" y2="306"/><line x1="656" y1="44" x2="656" y2="306"/><line x1="686" y1="44" x2="686" y2="306"/><line x1="716" y1="44" x2="716" y2="306"/><line x1="524" y1="115" x2="748" y2="115"/><line x1="524" y1="55" x2="748" y2="55"/><line x1="524" y1="235" x2="748" y2="235"/><line x1="524" y1="295" x2="748" y2="295"/></g><line x1="524" y1="175" x2="748" y2="175" stroke="currentColor" stroke-width="1.3"/><polygon points="748,175 740,171.5 740,178.5" fill="currentColor"/><line x1="566" y1="314" x2="566" y2="36" stroke="currentColor" stroke-width="1.3"/><polygon points="566,36 562.5,44 569.5,44" fill="currentColor"/><text x="744" y="167" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.7">Re</text><text x="572" y="42" font-family="ui-sans-serif, system-ui" font-size="9" fill="currentColor" opacity="0.7">Im</text><line x1="656" y1="55" x2="656" y2="175" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" opacity="0.55"/><path d="M 656 167 L 648 167 L 648 175" fill="none" stroke="currentColor" stroke-width="1"/><line x1="566" y1="175" x2="656" y2="55" stroke="currentColor" stroke-width="2.2"/><polygon points="656,55 646.8,60.6 653.2,65.4" fill="currentColor"/><circle cx="656" cy="55" r="3.2" fill="currentColor"/><text x="662" y="54" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">z = 3+4i</text><line x1="566" y1="175" x2="656" y2="295" stroke="currentColor" stroke-width="2.2"/><polygon points="656,295 646.8,284.6 653.2,289.4" fill="currentColor"/><circle cx="656" cy="295" r="3.2" fill="currentColor"/><text x="648" y="302" text-anchor="end" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">conj(z) = 3−4i</text><path d="M 646 64 C 590 120 590 230 646 284" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 4" opacity="0.6"/><polygon points="646,284 636,280 641.6,274.2" fill="currentColor"/><path d="M 602 175 A 36 36 0 0 0 587.6 146.2" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="612" y="152" font-family="ui-monospace, monospace" font-size="9" fill="currentColor">53.1°</text><text x="664" y="96" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor">|z| = 5</text><text x="630" y="318" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.75">reflection across the real axis</text><text x="630" y="331" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor">z·conj(z) = |z|² = 25</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Complex roots of x² + x + 1 = 0",
        problem: "Solve the quadratic $x^2 + x + 1 = 0$ using `<complex>`, and verify the roots.",
        steps: [
          { label: "Discriminant", text: "$b^2 - 4ac = 1 - 4 = -3 < 0$: the real-valued formula dead-ends — but the complex path needs no branching." },
          { label: "Complex square root", text: "`sqrt(complex<double>{-3.0, 0.0})` returns `{0, 1.7320508}` — the value $i\\sqrt{3}$, produced by the library's branch-aware algorithm." },
          { label: "Apply the formula", text: "With complex<double> coefficients the textbook expression `(-b + sqrt(b*b - 4.0*a*c)) / (2.0*a)` runs unmodified and yields $(-1 + 1.7320508i)/2 = -0.5 + 0.8660254i$, with the conjugate as the second root." },
          { label: "Check", text: "Each root has modulus $\\sqrt{0.25 + 0.75} = 1$, and the product of the roots is $1 = c/a$: they are the primitive cube roots of unity $e^{\\pm 2\\pi i/3}$." },
        ],
        result: "x = −0.5 ± 0.8660254i — unit modulus, product 1: the complex library let the real-arithmetic formula survive a negative discriminant unchanged.",
      },
      {
        title: "Working through complex numbers",
        problem: "The complex library. Your task: construct and combine complex<T> values with operators, literals and mixed scalar arithmetic.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: construct and combine complex<T> values with operators, literals and mixed scalar arithmetic. Write down the guarantee you will rely on — for this chapter it is: `complex<T>` supports the full operator set with mixed scalar operands; comparison is exact and component-wise" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double r = std::sqrt(x); double n = std::abs(z);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — use the complex function library — polar, abs, arg, norm, conj, exp, sqrt — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: Multiplication multiplies moduli and adds arguments; conjugation reflects and yields the norm $z\\bar{z} = |z|^2$ If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: `complex<T>` supports the full operator set with mixed scalar operands; comparison is exact and component-wise Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "`complex<T>` supports the full operator set with mixed scalar operands; comparison is exact and component-wise",
      "Multiplication multiplies moduli and adds arguments; conjugation reflects and yields the norm $z\\bar{z} = |z|^2$",
      "The complex function library (sqrt, exp, polar, arg) lets formulas like the quadratic root survive negative discriminants unmodified",
    ],
    quiz: [
      {
        q: "For complex<double> z{3, 4}, what is z*z?",
        options: ["{9, 16}", "{−7, 24}", "{25, 0}", "{7, 24}"],
        answer: 1,
        explanation: "$(3+4i)^2 = 9 + 24i - 16 = -7 + 24i$; note the modulus squares: $|z \\cdot z| = 25 = |z|^2$.",
      },
      {
        q: "The function norm(z) returns:",
        options: ["The modulus |z| = 5", "The argument angle", "A unit vector in the direction of z", "The squared modulus $|z|^2 = z \\bar{z} = 25$"],
        answer: 3,
        explanation: "norm is the squared modulus — the cheap one-multiply computation; abs returns the modulus itself, 5.",
      },
      {
        q: "With using namespace std::literals, the expression 2.0i denotes:",
        options: ["The int 2", "`complex<double>{0.0, 2.0}`", "The imaginary unit times the nearest int", "`complex<float>{2.0, 0.0}`"],
        answer: 1,
        explanation: "The literal suffix i yields complex<double>; if yields complex<float> and il complex<long double> — 2.0i is {0.0, 2.0}, real part zero.",
      },
    ],
  },

  // ------------------------------------------------------------------ 40.5
  {
    sectionId: "cpp-ch40-s5",
    readingTime: 8,
    intro: "valarray is the standard library's one container built for speed rather than generality: a dense one-dimensional numeric array supporting whole-array expressions such as `v = alpha*v + w`, plus subset views — slices, generalized slices, boolean masks and index lists — that name subsequences without copying. It deliberately omits container machinery (member iterators, `push_back`, checked access) because its design premise is that no aliases to its elements exist: the assumption a compiler needs in order to vectorize a whole-array expression into one tight loop. Stroustrup is candid that valarray never conquered the world, but the design idea — buy optimization freedom by restricting aliasing — is the chapter's most instructive.",
    objectives: [
      "Use whole-array valarray expressions and the free numeric functions over them",
      "Extract rows, columns and conditional subsets with slice, gslice and mask arrays",
      "Explain the no-aliasing premise and what it buys the optimizer",
    ],
    concepts: [
      {
        term: "valarray<T>",
        kind: "definition",
        statement: "`valarray<T>` in `<valarray>` is a one-dimensional numeric array with **value semantics and whole-array operations**: `v = 2*v + w` computes element-wise in one statement; `abs(v)`, `sqrt(v)`, `pow(v, w)` and the other free numeric functions apply element-wise; `v.apply(f)` maps a function; the reductions `sum()`, `min()`, `max()` aggregate; `shift`/`cshift` shift (circularly). The size is set at construction or by `resize()` — there is no `push_back` — and no member iterators exist (C++11 added free `begin()`/`end()` mainly so range-`for` works).",
        detail: "Example from the chapter's spirit: `valarray<double> v{1, 4, 9}; v = sqrt(v) + 1;` leaves v as {2, 3, 4} — a loop-free statement.",
      },
      {
        term: "Subsetting: slice, gslice, mask, indirect",
        kind: "method",
        statement: "A `slice(start, count, stride)` describes a regular subsequence — exactly a row or column of a matrix held in one flat valarray. `gslice` generalizes to several strides (boxes in n dimensions). Subscripting with a `valarray<bool>` yields a `mask_array`, and with a `valarray<size_t>` of indices an `indirect_array` — both are views that can be assigned through: `m[m > 5] = 0` bulk-rewrites the selected elements. The views themselves (`slice_array<T>` etc.) convert to a `valarray` when a value is needed.",
        detail: "Because no copy is made, a 3×3 matrix stored row-major in nine elements gets its rows as `slice(i*3, 3, 1)` and its columns as `slice(j, 3, 3)` — the book's route to a matrix without a matrix class.",
      },
      {
        term: "The no-aliasing premise",
        kind: "insight",
        statement: "The standard states that the valarray templates are designed for high-speed numeric computation **on the assumption that the elements are not aliased**. Hence: no iterator interface (iterators are aliasing machines), out-of-range `operator[]` is undefined rather than checked, and element addresses need not survive assignments. In exchange, the implementation may compile `v = v*2 + w` into a **single fused loop** — Fortran-style — rather than loops with temporaries.",
        detail: "The honest caveat, which Stroustrup voices: valarray is little used, and `vector<T>` under aggressive optimization is often competitive. The design lesson — restriction as the price of optimization — outlived the component itself.",
      },
      {
        term: "A Numerical Array: valarray: the working contract",
        kind: "definition",
        statement: "**A Numerical Array: valarray.** Vectorized numerics. You can claim this section when you can use whole-array valarray expressions and the free numeric functions over them — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 40 (Numerics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "A Numerical Array: valarray: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, extract rows, columns and conditional subsets with slice, gslice and mask arrays. Then, explain the no-aliasing premise and what it buys the optimizer. Finally, test the outcome against the section promise: valarray trades container generality for optimization freedom: whole-array expressions, no member iterators, unchecked `[]`",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "A 3×3 matrix inside one valarray",
        problem: "Store the 3×3 matrix with entries 1 through 9 row-major in one valarray<double>; extract a column with a slice; zero every entry greater than 5 through a mask.",
        steps: [
          { label: "Build", text: "`valarray<double> m{1,2,3, 4,5,6, 7,8,9};` — row i is `m[slice(i*3, 3, 1)]`: start at element i*3, take 3 elements, stride 1. Row 2 materializes as {7, 8, 9}." },
          { label: "Column 1", text: "`m[slice(1, 3, 3)]` selects indices 1, 4, 7 — the middle column {2, 5, 8}; materialized as a valarray, its `sum()` is 15." },
          { label: "Mask-assign", text: "`m > 5` yields the valarray<bool> {f,f,f,f,f,t,t,t,t}; `m[m > 5] = 0` writes through the view, leaving m as {1,2,3,4,5,0,0,0,0}." },
          { label: "Verify", text: "`m.sum()` drops from 45 to 15 = 1+2+3+4+5 — exactly the untouched entries; no loop appeared anywhere." },
        ],
        result: "Slices give matrix rows and columns as views of one flat array; masks give bulk conditional writes — the matrix algebra of a valarray without a matrix class.",
      },
      {
        title: "Working through a numerical array: valarray",
        problem: "Vectorized numerics. Your task: use whole-array valarray expressions and the free numeric functions over them.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: use whole-array valarray expressions and the free numeric functions over them. Write down the guarantee you will rely on — for this chapter it is: valarray trades container generality for optimization freedom: whole-array expressions, no member iterators, unchecked `[]`" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double r = std::sqrt(x); double n = std::abs(z);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — extract rows, columns and conditional subsets with slice, gslice and mask arrays — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `slice(start, count, stride)` views turn one flat valarray into matrix rows and columns; masks assign through boolean subsets If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: valarray trades container generality for optimization freedom: whole-array expressions, no member iterators, unchecked `[]` Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "valarray trades container generality for optimization freedom: whole-array expressions, no member iterators, unchecked `[]`",
      "`slice(start, count, stride)` views turn one flat valarray into matrix rows and columns; masks assign through boolean subsets",
      "The standard's no-aliasing note is the license for fused, vectorized evaluation of `v = v*w + u`",
    ],
    quiz: [
      {
        q: "A 3×3 matrix is stored row-major in valarray<double> m. Which slice selects its middle column?",
        options: ["`slice(3, 3, 3)`", "`slice(1, 3, 3)`", "`slice(1, 3, 1)`", "`slice(0, 3, 4)`"],
        answer: 1,
        explanation: "Start at index 1, take 3 elements with stride 3 — indices 1, 4, 7, which is the middle column {2, 5, 8}.",
      },
      {
        q: "Which statement about valarray is correct?",
        options: ["It grows amortized like vector via `push_back`", "`operator[]` performs bounds checking and throws `std::out_of_range`", "It has no iterator interface and out-of-range subscripting is undefined — both consequences of its speed premise", "Its elements are reference-counted"],
        answer: 2,
        explanation: "No member iterators and undefined out-of-range access are exactly the freedoms the no-aliasing, high-speed design requires; C++11 only retrofitted free begin()/end().",
      },
      {
        q: "The expression v = v*2 + w over valarrays can be compiled as a single fused loop because:",
        options: ["The implementation may assume the elements of distinct valarrays do not alias, so no element can be changed mid-loop through another name", "The operands are always the same size", "valarray caches its results between statements", "A temporary is always materialized first, making the loop trivial"],
        answer: 0,
        explanation: "The no-aliasing assumption means loads and stores may be reordered and batched — one pass over the data computes the whole expression.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "Why valarray enables vectorization",
        blocks: [
          {
            kind: "para",
            body: "The design problem. Fortran compilers have always turned whole-array expressions such as `v = alpha*v + w` into tight vector loops, because a Fortran array carries three promises a general C++ container cannot make: its elements are uniformly typed and densely stored, the storage is contiguous, and — decisively — no two names in scope can designate the same element, so the compiler may reorder loads and stores freely. `valarray` is the standard library's attempt to buy those promises back inside C++: a numeric array stripped of container generality. Stroustrup's summary of the intent is the standard's own note: the valarray templates are designed for high-speed numerical computation on the assumption that the elements do not alias. Every strange omission in the interface is that sentence, cashed out.",
          },
          {
            kind: "theorem",
            heading: "The no-aliasing premise and its corollaries",
            body: "**Theorem (the standard's assumption).** An implementation of the valarray templates may assume that no element of a valarray is aliased — designated simultaneously through another name — and may exploit that assumption in code generation. The corollaries are exactly the interface's oddities: (i) there are no member iterators, because an iterator is an aliasing machine; (ii) `operator[]` performs no bounds check, so an out-of-range index is undefined behavior rather than a thrown `std::out_of_range` — checking would spend the very cycles the design is buying; (iii) element addresses are not stable across assignment and `resize()`, since the implementation is free to copy; and (iv) the standard explicitly permits any function declared to return `valarray<T>` to return instead an object of an unspecified type that supports the same operations — the legal hook that lets `v*w` never materialize a temporary at all.",
          },
          {
            kind: "derivation",
            heading: "The traffic arithmetic of fusion",
            body: "Compare two evaluation strategies for `v = v*w + u` over $n$-element arrays. **Temporary-per-expression**: `t1 = v*w` performs $3n$ memory references (read $v$, read $w$, write $t1$) plus an allocation; `t2 = t1+u` performs $3n$ more; the assignment `v = t2` performs $2n$ — a total of $8n$ references and two allocations for $2n$ floating-point operations. **Fused single pass**: read $v$, read $w$, read $u$, write $v$ — $4n$ references, zero allocations. Fusion halves memory traffic, and since the loop performs two flops per four references it is bandwidth-bound on every modern machine. When the data fits in cache, the vector registers pay the second dividend: an 8-lane AVX unit retires eight multiplies per instruction, so a compute-bound elementwise kernel can approach $8\\times$ — but only because the lanes are provably independent, which is precisely what the premise purchases.",
          },
          {
            kind: "example",
            heading: "AXPY on a million floats",
            body: "Take $n = 10^6$ floats (4 MB per array). The fused loop reads $v$, $w$, $u$ and writes $v$: 16 MB of traffic, one pass. The naive evaluation materializes two temporaries and makes three sweeps: 32 MB of traffic and two 4 MB allocations, with every byte leaving cache twice. On a single core sustaining 20 GB/s, the fused form is bounded by about 0.8 ms, the naive one by 1.6 ms — a clean factor of two that costs the programmer nothing, because the expression means the same thing either way. That invariance of meaning under a change of cost is the whole point: the compiler transforms the program without consulting its author, and cannot, in a general container, prove the transformation safe.",
          },
          {
            kind: "remark",
            heading: "History: what actually happened",
            body: "`valarray` came out of the numerical community's work on the early standard — it is one of the oldest parts of the library — and the committee hoped implementations would adopt expression templates (Veldhuizen's technique), hence corollary (iv), which exists so that `v*w` may return a lazily evaluated proxy. Almost nobody did. The subset views (`slice_array` and friends) never grew an ecosystem, and in 2011 the committee simply bolted `begin()`/`end()` onto valarray so that range-`for` would work. The vindication came elsewhere: C99's `restrict` qualifier is the same insight at the language level, and today's auto-vectorizers spend most of their effort on alias analysis — proving, loop by loop, the very property valarray guarantees by construction.",
          },
          {
            kind: "open",
            heading: "Did the wrong layer win?",
            body: "Modern C++ gets vectorization from three directions at once: expression-template libraries outside the standard (Eigen, Blaze) that schedule whole expressions statically; compiler auto-vectorization with runtime alias checks; and explicit data-parallel types (`std::simd`, on the C++26 track) where the lanes are visible in the source. The valarray experiment poses the question each answers differently: where should the freedom to assume non-aliasing live — in the type system (a valarray-like no-alias span), in a qualifier (restrict), or in explicit lane types? Each placement buys the compiler the same optimization license at a different price in composability, and none has yet won the argument.",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 40.6
  {
    sectionId: "cpp-ch40-s6",
    readingTime: 6,
    intro: "The `<numeric>` header generalizes the oldest algorithms in computing: sum a sequence, combine two sequences element-wise, build running totals, generate index ranges. Each is a fold at heart — a seed plus a binary operation — and the seed's type is part of the algorithm's contract: it fixes the arithmetic in which the answer is computed. These four small functions are the backbone of the dot products, prefix computations and index generation that numerical code needs daily.",
    objectives: [
      "Apply `accumulate` and `inner_product`, with and without custom operations",
      "Predict the effect of the seed's type on the computed result",
      "Use `partial_sum`, `adjacent_difference` and `iota`, knowing them as inverses and fillers",
    ],
    concepts: [
      {
        term: "accumulate",
        kind: "definition",
        statement: "`accumulate(b, e, v)` folds `+` over the sequence starting from the seed `v`; `accumulate(b, e, v, op)` folds any binary operation instead. **The seed's type determines the arithmetic**: over a `vector<double>`, the seed `0` makes every addition an `int` addition with truncation at each step — the sum of {2.7, 3.3} is 5, not 6. Seed with `0.0` (or a wider type) for the sum you meant.",
        detail: "With `std::multiplies` and seed 1, accumulate becomes a product: 1·2·3·4 = 24 over {2, 3, 4}; with a min-like operation it becomes a minimum-finder — the seed is the identity element of the operation, which is why it must be chosen deliberately.",
      },
      {
        term: "`inner_product`",
        kind: "definition",
        statement: "`inner_product(b, e, b2, v)` computes $v + \\sum_i a_i b_i$ — the dot product plus a seed. The generalized form `inner_product(b, e, b2, v, op1, op2)` lets `op2` combine the element pairs and `op1` accumulate the results, which covers matrix-multiplication inner loops, covariance sums, and co-occurrence counting in one signature.",
        detail: "The default is `op1 = +`, `op2 = *`; writing the pair as (multiply, add) versus (add, multiply) turns a dot product into a product-of-sums — the seed and operation order are the whole specification.",
      },
      {
        term: "`partial_sum`, `adjacent_difference`, `iota`",
        kind: "definition",
        statement: "`partial_sum(b, e, out)` writes the running totals: {1, 2, 3, 4} becomes {1, 3, 6, 10}. `adjacent_difference(b, e, out)` is its inverse: {1, 3, 6, 10} becomes {1, 2, 3, 4}. `iota(b, e, n)` (C++11) fills the range with $n, n+1, n+2, \\ldots$ — named after the APL index generator $\\iota$. All three live in `<numeric>`, and all write through an output iterator, in place if the ranges are the same.",
        detail: "`partial_sum` is the prefix computation behind cumulative histograms, running maxima and tag encodings; `adjacent_difference` turns a cumulative series back into its increments — differencing and summing are inverse folds.",
      },
      {
        term: "Generalized Numerical Algorithms: the working contract",
        kind: "definition",
        statement: "**Generalized Numerical Algorithms.** accumulate, inner_product and partial sums. You can claim this section when you can apply `accumulate` and `inner_product`, with and without custom operations — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 40 (Numerics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Generalized Numerical Algorithms: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, predict the effect of the seed's type on the computed result. Then, use `partial_sum`, `adjacent_difference` and `iota`, knowing them as inverses and fillers. Finally, test the outcome against the section promise: accumulate folds + (or any op) from a seed whose type fixes the arithmetic — the seed 0 over doubles truncates, 0.0 does not",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    examples: [
      {
        title: "Folds, prefixes and indices",
        problem: "Given v = {1, 2, 3} and w = {4, −5, 6}, compute the dot product, the prefix sums, the product of {2, 3, 4} and an index range — using only `<numeric>`.",
        steps: [
          { label: "Dot product", text: "`inner_product(v.begin(), v.end(), w.begin(), 0)` = $1 \\cdot 4 + 2 \\cdot (-5) + 3 \\cdot 6 = 4 - 10 + 18 = 12$. Self-dot `inner_product(v.begin(), v.end(), v.begin(), 0)` is the sum of squares: $1 + 4 + 9 = 14$." },
          { label: "Prefix sums", text: "`partial_sum(v.begin(), v.end(), back_inserter(p))` yields p = {1, 3, 6}; then `adjacent_difference(p.begin(), p.end(), back_inserter(q))` yields q = {1, 2, 3} — the two algorithms undo each other." },
          { label: "Product by fold", text: "`accumulate(r.begin(), r.end(), 1, std::multiplies<int>())` over r = {2, 3, 4} gives $1 \\cdot 2 \\cdot 3 \\cdot 4 = 24$ — the same fold with the multiplicative identity." },
          { label: "Indices", text: "`iota(idx.begin(), idx.end(), 5)` fills the vector with {5, 6, 7, 8} — the permutation and lookup tables of the next chapters start here." },
        ],
        result: "12, {1, 3, 6}, 24 and {5, 6, 7, 8} — each a single library call in which the seed's type and value are part of the specification of the result.",
      },
      {
        title: "Working through generalized numerical algorithms",
        problem: "accumulate, inner_product and partial sums. Your task: apply `accumulate` and `inner_product`, with and without custom operations.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: apply `accumulate` and `inner_product`, with and without custom operations. Write down the guarantee you will rely on — for this chapter it is: accumulate folds + (or any op) from a seed whose type fixes the arithmetic — the seed 0 over doubles truncates, 0.0 does not" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double r = std::sqrt(x); double n = std::abs(z);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — predict the effect of the seed's type on the computed result — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `inner_product` generalizes the dot product: op2 pairs elements, op1 accumulates If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: accumulate folds + (or any op) from a seed whose type fixes the arithmetic — the seed 0 over doubles truncates, 0.0 does not Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "accumulate folds + (or any op) from a seed whose type fixes the arithmetic — the seed 0 over doubles truncates, 0.0 does not",
      "`inner_product` generalizes the dot product: op2 pairs elements, op1 accumulates",
      "`partial_sum` and `adjacent_difference` are inverse folds; `iota` generates index ranges — all in `<numeric>`",
    ],
    quiz: [
      {
        q: "vector<double> v{2.7, 3.3}; what does accumulate(v.begin(), v.end(), 0) return?",
        options: ["5.0", "6, because the doubles are summed exactly", "5 — the int seed fixes the arithmetic type, so each addition truncates", "Undefined behavior"],
        answer: 2,
        explanation: "The accumulator has type int: 0 + 2.7 truncates to 2, then 2 + 3.3 truncates to 5. Seed with 0.0 to get 6.0.",
      },
      {
        q: "`partial_sum` applied to {1, 1, 2, 3, 5} produces:",
        options: ["{1, 2, 4, 7, 12}", "{1, 0, 1, 1, 2}", "{1, 2, 3, 5, 8}", "{5, 5, 5, 5, 5}"],
        answer: 0,
        explanation: "Running totals: 1, 1+1=2, 2+2=4, 4+3=7, 7+5=12 — the Fibonacci prefix property visible in the input.",
      },
      {
        q: "Which <numeric> algorithm fills a range with n, n+1, n+2, …?",
        options: ["`fill_n`", "generate", "`iota`", "accumulate"],
        answer: 2,
        explanation: "iota — named for the APL index generator — writes successive increments starting from the given value; it arrived with C++11.",
      },
    ],
  },

  // ------------------------------------------------------------------ 40.7
  {
    sectionId: "cpp-ch40-s7",
    readingTime: 8,
    intro: "The `<random>` library separates two concerns older libraries fused: engines are deterministic state machines that transform a seed into a stream of uniform random words, and distributions map those words onto a mathematical law — uniform over an interval, normal, exponential, Bernoulli and a dozen more. Because the split is clean, you can pair any engine with any distribution, re-seed an engine to replay a computation exactly, and ask a distribution for exactly the law your model needs. The one asymmetry to internalize: engines are specified bit-for-bit and are portable; distribution algorithms are implementation-defined and are not.",
    objectives: [
      "Assemble an engine, seed it deliberately and pair it with a distribution",
      "Explain the reproducibility split between exactly specified engines and implementation-defined distributions",
      "Avoid the classic random bugs: per-call engine construction and modulo bias",
    ],
    concepts: [
      {
        term: "Engines",
        kind: "definition",
        statement: "An **engine** is a uniform random bit generator: a state machine whose `operator()` emits the next word (an unsigned integer of its `result_type`). The primary engines are `linear_congruential_engine` ($x_{n+1} = a x_n + c \\bmod m$ — one word of state, the fastest), `mersenne_twister_engine` — `mt19937` is the standard choice with 624 words of state and period $2^{19937} - 1$ — and `subtract_with_carry_engine`. Adaptors (`discard_block_engine`, `independent_bits_engine`, `shuffle_order_engine`) repack another engine's output. Engines are deterministic: the same seed yields the same sequence forever — a feature for reproducible tests, a responsibility for seeding.",
        detail: "`random_device` is the non-deterministic front door when the platform has entropy — its `entropy()` call reports quality, and it exists primarily to seed engines: `mt19937 eng{random_device{}()};`.",
      },
      {
        term: "Distributions",
        kind: "definition",
        statement: "A **distribution** maps raw engine words to a mathematical law: `uniform_int_distribution{1, 6}` (exactly uniform — its rejection logic absorbs the fact that $2^{32}$ is not divisible by 6), `uniform_real_distribution{0, 1)` (half-open), `normal_distribution{mu, sigma}`, `exponential_distribution{lambda}`, `bernoulli_distribution{p}`, and the families poisson, geometric, binomial, `negative_binomial`, gamma, weibull, `extreme_value`, cauchy, `fisher_f`, `student_t`, `chi_squared`, lognormal, `discrete_distribution` and the piecewise pair. A distribution is called with the engine — `d(eng)` — and pulls as many words as its algorithm needs.",
        detail: "The book's compact form: `auto die = bind(uniform_int_distribution<>{1, 6}, default_random_engine{});` — the engine is copied into the callable, which is convenient but hides both the seeding and the lifetime of the state.",
      },
      {
        term: "The reproducibility split",
        kind: "law",
        statement: "**Engine algorithms are specified bit-for-bit; distribution algorithms are implementation-defined.** A seeded `mt19937` produces an identical word sequence on every conforming implementation, so storing a seed reproduces a run anywhere; the values a `normal_distribution` returns from those words may differ across compilers. Two classic bugs follow from ignoring the machinery: constructing the engine fresh on every call re-seeds with the default seed 5489 and replays the same first value each time; and reducing engine output with `% 6` introduces modulo bias because $2^{32} = 6 \\cdot 715827882 + 4$ leaves faces uneven.",
        detail: "The professional habit: create one engine, seed it once (deliberately fixed, or from `random_device`), pass it by reference, and let the distribution own the mathematics.",
      },
      {
        term: "Random Numbers: the working contract",
        kind: "definition",
        statement: "**Random Numbers.** Distributions and engines. You can claim this section when you can assemble an engine, seed it deliberately and pair it with a distribution — and can say what would go wrong if you could not.",
        detail: "This section belongs to Chapter 40 (Numerics); later sections in the chapter use it without restating it, so the contract compounds.",
      },
      {
        term: "Random Numbers: deliberate practice",
        kind: "method",
        statement: "Work in three passes. First, explain the reproducibility split between exactly specified engines and implementation-defined distributions. Then, avoid the classic random bugs: per-call engine construction and modulo bias. Finally, test the outcome against the section promise: An engine turns a seed into uniform words; a distribution shapes words into a mathematical law — pair them freely",
        detail: "Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.",
      },
    ],
    figures: [
      {
        caption: "The `std::random` architecture. A seed — from `random_device` or a `seed_seq` — initializes an engine, whose `operator()` emits uniform words; a distribution such as `uniform_int_distribution{1,6}` pulls as many words as its algorithm needs to return a value with the requested law. Engines are exactly specified (identical on every implementation given the same seed); distribution algorithms are implementation-defined.",
        svg: '<svg viewBox="0 0 760 356" width="100%" role="img" aria-label="Random number library architecture: seeding flows into engines, engines emit uniform words, distributions shape words into values"><text x="380" y="20" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">Engines produce uniform words; distributions shape them into values</text><rect x="20" y="40" width="170" height="70" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="105" y="60" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" font-weight="700" fill="currentColor">random device</text><text x="105" y="76" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor" opacity="0.85">non-deterministic</text><text x="105" y="88" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor" opacity="0.85">seed source</text><text x="105" y="100" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor" opacity="0.85">entropy() query</text><rect x="20" y="126" width="170" height="54" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="105" y="144" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" font-weight="700" fill="currentColor">seed seq</text><text x="105" y="158" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor" opacity="0.85">stretches a few seeds</text><text x="105" y="170" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor" opacity="0.85">into a full state</text><line x1="190" y1="72" x2="230" y2="95" stroke="currentColor" stroke-width="1.5"/><polygon points="230,95 223.4,86.7 219.4,93.5" fill="currentColor"/><text x="203" y="76" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor">seed</text><line x1="190" y1="150" x2="230" y2="140" stroke="currentColor" stroke-width="1.5"/><polygon points="230,140 219.3,138.5 221.3,146.3" fill="currentColor"/><text x="207" y="132" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor">state</text><rect x="230" y="40" width="280" height="192" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.6"/><text x="370" y="60" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="700" fill="currentColor">Engines — uniform bit generators</text><rect x="242" y="70" width="256" height="38" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.2"/><text x="252" y="84" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor">linear congruential</text><text x="252" y="98" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor" opacity="0.85">x → a·x + c mod m — one word of state, fastest</text><rect x="242" y="112" width="256" height="38" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.2"/><text x="252" y="126" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor">mersenne twister (mt19937)</text><text x="252" y="140" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor" opacity="0.85">624-word state, period 2¹⁹⁹³⁷−1 — the default</text><rect x="242" y="154" width="256" height="38" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.2"/><text x="252" y="168" font-family="ui-monospace, monospace" font-size="9.5" fill="currentColor">subtract with carry</text><text x="252" y="182" font-family="ui-sans-serif, system-ui" font-size="8.5" fill="currentColor" opacity="0.85">x(i) → x(i−s) − x(i−r) mod m</text><rect x="242" y="196" width="256" height="28" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3"/><text x="370" y="208" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8.5" font-style="italic" fill="currentColor" opacity="0.85">adaptors: discard block · independent</text><text x="370" y="219" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8.5" font-style="italic" fill="currentColor" opacity="0.85">bits · shuffle order</text><rect x="560" y="40" width="180" height="192" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="650" y="60" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11.5" font-weight="700" fill="currentColor">Distributions</text><text x="574" y="78" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">uniform int {1,6}</text><text x="574" y="90" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">uniform real [0,1)</text><text x="574" y="102" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">normal {μ,σ}</text><text x="574" y="114" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">exponential {λ}</text><text x="574" y="126" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">bernoulli {p}</text><text x="574" y="138" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">poisson {μ}</text><text x="574" y="150" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">geometric {p}</text><text x="574" y="162" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">binomial {t,p}</text><text x="574" y="174" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">gamma {α,β}</text><text x="574" y="186" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">discrete weights</text><text x="574" y="198" font-family="ui-monospace, monospace" font-size="8" fill="currentColor">piecewise …</text><text x="650" y="216" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8.5" font-style="italic" fill="currentColor" opacity="0.85">(twenty in all)</text><line x1="510" y1="130" x2="560" y2="130" stroke="currentColor" stroke-width="2"/><polygon points="560,130 551,126.5 551,133.5" fill="currentColor"/><text x="535" y="118" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor">d(eng)</text><text x="535" y="146" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="8" fill="currentColor">pulls words</text><text x="370" y="248" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.85">deterministic: same seed ⇒ same words on every implementation</text><text x="650" y="248" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9" font-style="italic" fill="currentColor" opacity="0.85">mapping is implementation-defined</text><rect x="20" y="266" width="720" height="84" rx="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1"/><text x="40" y="290" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">mt19937 eng{rd()};     // seed once — eng() emits uniform 32-bit words</text><text x="40" y="308" font-family="ui-monospace, monospace" font-size="10" fill="currentColor">die(eng);              // a uniform int {1,6} pulls words → 1…6, each exactly 1/6</text><text x="40" y="332" font-family="ui-sans-serif, system-ui" font-size="9.5" font-style="italic" fill="currentColor" opacity="0.85">same seed + same engine ⇒ bit-for-bit identical sequences — engine algorithms are exactly specified</text><text x="40" y="346" font-family="ui-sans-serif, system-ui" font-size="9.5" font-style="italic" fill="currentColor" opacity="0.85">distribution algorithms are implementation-defined: the same seed may histogram differently across compilers</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "A die and a bell curve, done properly",
        problem: "Produce uniformly distributed die rolls and normally distributed samples with mean 5 and standard deviation 2 — and make the run reproducible.",
        steps: [
          { label: "Engine", text: "`std::mt19937 eng{42};` — a fixed seed makes the whole run reproducible on any implementation; in production, seed from entropy instead: `mt19937 eng{random_device{}()};`." },
          { label: "Die", text: "`uniform_int_distribution<int> die{1, 6};` then `die(eng)` returns 1–6 with probability exactly 1/6: the distribution rejects and redraws to absorb the remainder 4 that $2^{32}$ leaves after six equal parts. The naive `eng() % 6 + 1` instead gives faces 1–4 probability $715827883/2^{32}$ against $715827882/2^{32}$ for faces 5 and 6 — a small but real bias." },
          { label: "Bell", text: "`normal_distribution<double> nd{5.0, 2.0};` after 10,000 draws the sample mean sits within $\\sigma/\\sqrt{n} = 2/100 = 0.02$ of 5, and the sample standard deviation within about 0.014 of 2." },
          { label: "Reproducibility audit", text: "Replaying with seed 42 regenerates the engine's word sequence bit-for-bit on any conforming implementation — the engine is exactly specified; only the distribution's mapping could differ across vendors." },
        ],
        result: "Rolls and samples with the exact requested law; a stored seed reproduces the run, which is what makes random-driven tests debuggable.",
      },
      {
        title: "Working through random numbers",
        problem: "Distributions and engines. Your task: assemble an engine, seed it deliberately and pair it with a distribution.",
        steps: [
          { label: "Step 1: restate", text: "Restate the goal in the section’s terms: assemble an engine, seed it deliberately and pair it with a distribution. Write down the guarantee you will rely on — for this chapter it is: An engine turns a seed into uniform words; a distribution shapes words into a mathematical law — pair them freely" },
          { label: "Step 2: build", text: "Build the smallest program that exercises it. Start from this skeleton and adapt it: `double r = std::sqrt(x); double n = std::abs(z);` Compile it before adding anything else, so later errors are attributable to later changes." },
          { label: "Step 3: vary", text: "Change one thing at a time — explain the reproducibility split between exactly specified engines and implementation-defined distributions — and recompile after each change, so each diagnostic maps to exactly one decision." },
          { label: "Step 4: verify", text: "Check the result against the takeaway: `mt19937` is the default engine: 624 words of state, period $2^{19937} - 1$, deterministic and portable given the seed If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it." },
        ],
        result: "The section’s lesson survives contact with the compiler: An engine turns a seed into uniform words; a distribution shapes words into a mathematical law — pair them freely Small, compiled, varied, checked — that is the whole method.",
      },
    ],
    keyTakeaways: [
      "An engine turns a seed into uniform words; a distribution shapes words into a mathematical law — pair them freely",
      "`mt19937` is the default engine: 624 words of state, period $2^{19937} - 1$, deterministic and portable given the seed",
      "Distributions are implementation-defined: reproducibility comes from engines and seeds, not from distribution algorithms",
    ],
    quiz: [
      {
        q: "With the same seed, std::mt19937 produces:",
        options: ["Different sequences on different implementations, since engines are unspecified", "A bit-for-bit identical word sequence on every conforming implementation", "The same sequence only within one program run", "Non-deterministic output"],
        answer: 1,
        explanation: "Engine algorithms are specified exactly, so the word stream is portable; it is the distribution algorithms that are implementation-defined.",
      },
      {
        q: "The period of mt19937 is:",
        options: ["$2^{32} - 1$", "624", "$2^{19937} - 1$", "It depends on the seed"],
        answer: 2,
        explanation: "The Mersenne twister's period is the Mersenne prime $2^{19937} - 1$; 624 is the number of 32-bit words in its state.",
      },
      {
        q: "A function constructs `mt19937 eng; uniform_int_distribution<int> die{1,6};` locally and returns `die(eng)`. Called twice, it returns the same number. Why?",
        options: ["`uniform_int_distribution` caches its result", "Random numbers cannot be returned from functions", "Each construction re-seeds the engine with the default seed 5489, so the first draw is always the same", "mt19937 alternates outputs deterministically"],
        answer: 2,
        explanation: "A default-constructed mt19937 is seeded with 5489 every time, so the sequence — and its first value — restarts on every call. Build the engine once and pass it by reference.",
      },
    ],
  },

  // ------------------------------------------------------------------ 40.8
  {
    sectionId: "cpp-ch40-s8",
    readingTime: 5,
    intro: "The chapter closes with rules of thumb, and they reduce to a discipline: know what the machine's arithmetic actually does (consult the limits), build on the tested components the library ships (complex, valarray, the numeric algorithms, engines and distributions), and treat floating-point results as evidence to be compared with tolerance rather than equality to be asserted. Where efficiency is the motivation, measure before changing representation. This section turns those principles into review-checklist items.",
    objectives: [
      "Turn the chapter's advice into a numeric code-review checklist",
      "Recognize the standard library replacements for rand(), naive hypotenuses and int-seeded sums",
      "Justify precision decisions with measurement rather than folklore",
    ],
    concepts: [
      {
        term: "Consult the limits first",
        kind: "method",
        statement: "Before assuming precision, query `numeric_limits` — `digits10` for trustworthy digits, `max()` for range, `is_iec559` for NaN/infinity semantics — and `static_assert` the properties your algorithm actually needs. Accumulate in `double` by default, and drop to narrower types only after a measurement says the bottleneck is real.",
        detail: "The limits are constexpr, so the checks live in the type system: a template can refuse to instantiate for a type with too few digits, and the failure appears at compile time.",
      },
      {
        term: "Build on well-tested components",
        kind: "insight",
        statement: "Use `complex<T>` rather than hand-managed pairs of reals, valarray or vectorized expressions rather than element loops, the `<numeric>` folds rather than hand-written accumulation, `<random>` engines plus distributions rather than `rand()` arithmetic, and `atan2`, `hypot`, `fma` rather than their naive compositions. The library components carry decades of testing and careful error behavior; **write your own numerics only when you understand the error analysis** the library version embodies.",
        detail: "Efficiency claims deserve the same skepticism: the book's rule is not to assume that shrinking precision (double to float) speeds anything up — memory bandwidth, not arithmetic, often dominates.",
      },
      {
        term: "Compare and accumulate defensively",
        kind: "method",
        statement: "Never compare floating results with `==`: use a tolerance scaled by `epsilon` and the magnitudes involved. Remember that rounding compounds — ten 0.1 additions sum to 0.9999999999999999 — and that NaN poisons comparisons (every comparison with NaN is false), so check suspect inputs with `isnan` before trusting a branch.",
        detail: "Summation order matters too: when total accuracy matters, a wider accumulator or a compensated (Kahan-style) sum is the standard remedy; the seed-type trap of `accumulate` is the same lesson wearing library clothes.",
      },
      {
        term: "Shipping rule for numerics",
        kind: "law",
        statement: "Before code that uses this chapter is done, check it against the summary: **Consult `numeric_limits` before assuming precision; compare floating results with scaled tolerance, never with ==** A second reader should be able to point at each clause of that sentence in the code.",
        detail: "Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.",
      },
      {
        term: "Review checklist for numerics",
        kind: "method",
        statement: "Take the objectives as review questions: turn the chapter's advice into a numeric code-review checklist? Then recognize the standard library replacements for rand(), naive hypotenuses and int-seeded sums? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.",
        detail: "A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.",
      },
    ],
    examples: [
      {
        title: "The four-bug numeric review",
        problem: "A colleague submits a numeric core for review. Find the four defects: (1) `if (s == expected)` after a summation loop; (2) `srand(42); int r = rand() % 6 + 1;` inside roll(); (3) `double d = sqrt(a*a + b*b);` with a and b up to 1e200; (4) `accumulate(v.begin(), v.end(), 0)` over a vector<double>.",
        steps: [
          { label: "Bug 1 — exact comparison", text: "A sum of many rounded additions lands within a few ulp of the target, not on it; compare $|s - \\text{expected}| \\le 4\\,\\epsilon \\cdot \\max(|s|, |\\text{expected}|)$ or a problem-appropriate tolerance." },
          { label: "Bug 2 — rand() habits", text: "`RAND_MAX` can be as small as 32767, `% 6` tilts the faces, and there are no distributions; replace with an mt19937 plus `uniform_int_distribution<int>{1, 6}`, constructed once and passed by reference." },
          { label: "Bug 3 — overflow in the squares", text: "`a*a` overflows to inf long before the radius leaves range; `hypot(a, b)` scales internally and returns 1.4142136e200 for a = b = 1e200." },
          { label: "Bug 4 — the int seed", text: "The seed 0 fixes the accumulation type at int, truncating each addition: over {2.7, 3.3} the result is 5, not 6; seed with 0.0." },
        ],
        result: "All four are library-usage bugs, not mathematics bugs — each fix is a one-line switch to the facility designed for exactly that job.",
      },
      {
        title: "Reviewing numerics code",
        problem: "You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: turn the chapter's advice into a numeric code-review checklist.",
        steps: [
          { label: "Step 1: inventory", text: "List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Consult `numeric_limits` before assuming precision; compare floating results with scaled tolerance, never with ==" },
          { label: "Step 2: probe", text: "Probe the riskiest use with a minimal program built on `double r = std::sqrt(x); double n = std::abs(z);`. If the probe surprises you, the rule behind it is load-bearing." },
          { label: "Step 3: question", text: "Ask the chapter’s questions of the code: recognize the standard library replacements for rand(), naive hypotenuses and int-seeded sums. Record where the code answers and where it stays silent." },
          { label: "Step 4: rule", text: "Turn each silence into a review note that cites the reason, not just the rule: Replace `rand()` with engines plus distributions, naive hypotenuses with `hypot`, int-seeded sums with correctly typed seeds" },
        ],
        result: "The review ends with findings tied to reasons: Consult `numeric_limits` before assuming precision; compare floating results with scaled tolerance, never with == Advice applied with its reasons is engineering; without them it is taste.",
      },
    ],
    keyTakeaways: [
      "Consult `numeric_limits` before assuming precision; compare floating results with scaled tolerance, never with ==",
      "Replace `rand()` with engines plus distributions, naive hypotenuses with `hypot`, int-seeded sums with correctly typed seeds",
      "Do not trade precision for speed on faith — measure: memory bandwidth, not arithmetic, often dominates",
    ],
    quiz: [
      {
        q: "The sanctioned comparison of a computed double s against an expected value is:",
        options: ["s == expected, because doubles are exact", "round(s) == round(expected)", "fabs(s − expected) <= tolerance, with tolerance scaled by epsilon and the magnitudes", "`static_cast<int>(s) == static_cast<int>(expected)`"],
        answer: 2,
        explanation: "A tolerance scaled to epsilon and the magnitudes involved respects the ulp structure of floating-point; the other options either demand exactness or destroy resolution.",
      },
      {
        q: "The right replacement for rand() % 6 + 1 is:",
        options: ["`rand() / RAND_MAX * 6`", "`mt19937` plus `uniform_int_distribution<int>{1,6}`", "`chrono::system_clock` ticks mod 6", "time(nullptr) % 6"],
        answer: 1,
        explanation: "An engine plus a uniform int distribution is exactly uniform and free of `RAND_MAX`'s small range; the alternatives keep the bias or are not random at all.",
      },
      {
        q: "The chapter's advice on switching double to float for speed:",
        options: ["Always do it; floats are twice as fast", "Never do it; precision must not be traded away", "Do not assume it helps — measure: narrower types mainly save memory bandwidth, which may or may not dominate the computation", "It is required by the standard for valarray"],
        answer: 2,
        explanation: "The book warns against assuming efficiency from reduced precision; on modern hardware the bottleneck is frequently memory traffic, not arithmetic width.",
      },
    ],
  },
]
