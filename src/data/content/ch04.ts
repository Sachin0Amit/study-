import type { SectionContent } from '../library'

// ============================================================
// Rosen, Discrete Mathematics and Its Applications (8th ed.)
// Chapter 4 — Number Theory and Cryptography (Sections 4.1–4.6)
// ============================================================

export const ch4Content: SectionContent[] = [
  // ---------- 4.1 Divisibility and Modular Arithmetic ----------
  {
    sectionId: "rosen-ch4-s1",
    readingTime: 10,
    intro: "Every interesting question about integers eventually runs into remainders. This section formalizes divisibility, proves the division algorithm (every division leaves a unique quotient and remainder), and builds modular arithmetic — the mathematics of clocks, hash tables, and cryptography that powers the rest of the chapter.",
    objectives: [
      "State the definition of divisibility and prove its basic consequences (transitivity, linearity)",
      "Apply the division algorithm to write a = dq + r with 0 ≤ r < d, for negative a as well as positive",
      "Compute a div d and a mod d correctly, including negative dividends",
      "Translate between m | (a − b) and the congruence a ≡ b (mod m)",
      "Add and multiply congruences to compute in $\\mathbb{Z}_m$ without ever forming huge numbers",
    ],
    concepts: [
      {
        term: "Divisibility",
        kind: "definition",
        statement: "If a and b are integers with a ≠ 0, then **a divides b**, written **a | b**, when there is an integer c with b = ac. Then a is a factor (divisor) of b and b is a multiple of a. If no such c exists we write a ∤ b.",
        detail: "3 | 12 because 12 = 3·4, but 3 ∤ 7 since no integer c gives 3c = 7. Every nonzero integer divides 0 (0 = a·0); 1 divides everything; 0 divides nothing (we require a ≠ 0).",
      },
      {
        term: "Properties of divisibility",
        kind: "theorem",
        statement: "For integers a, b, c: (1) if a | b and b | c, then a | c (transitivity); (2) if a | b and a | c, then a | (b + c) and a | (b − c); (3) if a | b, then a | bc for every integer c.",
        detail: "The proofs are one line each: write b = ax and c = ay, then b + c = a(x + y). Example: 5 | 10 and 10 | 40 give 5 | 40; since 3 | 9 and 3 | 15, we get 3 | 24.",
      },
      {
        term: "Division algorithm",
        kind: "theorem",
        statement: "Let d be a positive integer and a any integer. Then there exist **unique** integers q (the quotient) and r (the remainder) with **a = dq + r and 0 ≤ r < d**.",
        detail: "Despite its name, this is a theorem about existence and uniqueness of remainders — the guarantee that division works the way you learned in school. Example: 101 = 13·7 + 10 with 0 ≤ 10 < 13, so 101 div 13 = 7 and 101 mod 13 = 10.",
      },
      {
        term: "div and mod",
        kind: "notation",
        statement: "For integers a and d with d > 0: **a div d = q** and **a mod d = r** where a = dq + r and 0 ≤ r < d. The mod operation returns the non-negative remainder.",
        detail: "Watch negatives: −133 = 12·(−12) + 11, so −133 div 12 = −12 and −133 mod 12 = 11. Many programming languages return −1 here because they truncate toward zero — mathematics demands 0 ≤ r < d.",
      },
      {
        term: "Congruence modulo m",
        kind: "definition",
        statement: "If a, b are integers and m ≥ 1, then **a is congruent to b modulo m**, written **a ≡ b (mod m)**, when m divides a − b. Congruence mod m is reflexive, symmetric, and transitive — an equivalence relation.",
        detail: "17 ≡ 5 (mod 6) because 17 − 5 = 12 is divisible by 6. Two integers are congruent mod m exactly when they leave the same remainder mod m, so the integers split into exactly m congruence classes.",
      },
      {
        term: "Arithmetic on congruences",
        kind: "theorem",
        statement: "If a ≡ b (mod m) and c ≡ d (mod m), then a + c ≡ b + d (mod m), a − c ≡ b − d (mod m), and **ac ≡ bd (mod m)**. Consequently $a^k \\equiv b^k \\pmod{m}$ for every positive integer k.",
        detail: "You may swap any quantity for a congruent one at any point of a computation — replace 457 by 2 mod 13, or $2^{100}$ by 1 mod 5. The one operation NOT preserved is division: that is section 4.4's business.",
      },
      {
        term: "The number system Zₘ",
        kind: "insight",
        statement: "The set $\\mathbb{Z}_m = \\{0, 1, 2, \\dots, m - 1\\}$ of remainders is closed under addition and multiplication mod m: compute normally, then reduce mod m. Every integer is congruent to exactly one element of $\\mathbb{Z}_m$.",
        detail: "Example: in $\\mathbb{Z}_9$, $7 \\cdot 8 = 56 \\equiv 2 \\pmod{9}$. Working mod m means all arithmetic can be done inside these m small values.",
      },
      {
        term: "Compute big powers mod m by reducing early",
        kind: "method",
        statement: "To evaluate an expression mod m, reduce every factor mod m first and reduce after every operation — never form the huge number and reduce at the end.",
        detail: "$2^{100} \\bmod 5$: the powers of 2 mod 5 cycle 2, 4, 3, 1 with period 4, and 100 ≡ 0 (mod 4), so $2^{100} \\equiv 1 \\pmod{5}$. Cycles and congruence arithmetic replace billion-digit arithmetic.",
      },
    ],
    examples: [
      {
        title: "div and mod with a negative dividend",
        problem: "Find 133 div 12, 133 mod 12, −133 div 12, and −133 mod 12.",
        steps: [
          { label: "Positive case", text: "133 = 12·11 + 1 with 0 ≤ 1 < 12, so 133 div 12 = 11 and 133 mod 12 = 1." },
          { label: "Set up the negative case", text: "For −133 = 12q + r the remainder must still satisfy 0 ≤ r < 12, so the quotient rounds down: −133 = 12·(−12) + 11." },
          { label: "Read off the answer", text: "−133 div 12 = −12 and −133 mod 12 = 11." },
        ],
        result: "133 = 12·11 + 1 and −133 = 12·(−12) + 11. A remainder from the division algorithm is never negative.",
      },
      {
        title: "Squaring a big number mod 13",
        problem: "Compute 457² mod 13 without ever squaring 457.",
        steps: [
          { label: "Reduce first", text: "457 = 13·35 + 2, so 457 ≡ 2 (mod 13)." },
          { label: "Square the congruence", text: "Congruences multiply: 457² ≡ 2² = 4 (mod 13)." },
          { label: "Check", text: "Indeed 457² = 208,849 = 13·16,065 + 4." },
        ],
        result: "457² ≡ 4 (mod 13).",
      },
      {
        title: "Clock arithmetic",
        problem: "If it is 5 o'clock now, what time will the clock show exactly 100 hours later?",
        steps: [
          { label: "Model with congruences", text: "Clock arithmetic is mod 12: we need 5 + 100 (mod 12)." },
          { label: "Reduce", text: "100 mod 12 = 4 since 100 = 12·8 + 4." },
          { label: "Add", text: "5 + 4 = 9." },
        ],
        result: "9 o'clock — 100 hours after 5 o'clock the clock reads 9.",
      },
    ],
    keyTakeaways: [
      "a | b means b = ac for some integer c; divisibility is transitive and linear over sums and differences of multiples",
      "Division algorithm: a = dq + r with 0 ≤ r < d, and the pair (q, r) is unique",
      "a div d and a mod d extract q and r — the remainder is always in {0, …, d − 1}, even for negative a",
      "a ≡ b (mod m) exactly when a and b differ by a multiple of m — think same remainder",
      "Congruences can be added, subtracted, and multiplied; reduce early, reduce often",
    ],
    quiz: [
      {
        q: "What is −17 mod 5?",
        options: ["−2", "3", "2", "−3"],
        answer: 1,
        explanation: "−17 = 5·(−4) + 3 with 0 ≤ 3 < 5, so the remainder is 3. The division algorithm always produces a non-negative remainder.",
      },
      {
        q: "Which pair of integers is congruent modulo 6?",
        options: ["24 and 4", "17 and 5", "25 and 4", "18 and 5"],
        answer: 1,
        explanation: "17 − 5 = 12 = 6·2, so 17 ≡ 5 (mod 6). For the others: 24 − 4 = 20, 25 − 4 = 21, and 18 − 5 = 13 — none is divisible by 6.",
      },
      {
        q: "If a ≡ 3 (mod 7) and b ≡ 2 (mod 7), then ab mod 7 equals:",
        options: ["6", "5", "1", "13"],
        answer: 0,
        explanation: "Congruences multiply: ab ≡ 3·2 = 6 (mod 7).",
      },
      {
        q: "Dividing 101 by 13, the division algorithm gives 101 = 13q + r with 0 ≤ r < 13. What are q and r?",
        options: ["q = 8, r = −3", "q = 7, r = 8", "q = 7, r = 10", "q = 8, r = 2"],
        answer: 2,
        explanation: "13·7 = 91 and 101 − 91 = 10, so 101 = 13·7 + 10: q = 7, r = 10.",
      },
    ],
  },

  // ---------- 4.2 Integer Representations and Algorithms ----------
  {
    sectionId: "rosen-ch4-s2",
    readingTime: 12,
    intro: "Computers think in binary, engineers shorthand in hexadecimal, and RSA lives on fast modular exponentiation. This section builds the conversion machinery between number bases, the algorithms for integer arithmetic, and the repeated-squaring trick that makes encrypting with huge exponents instantaneous.",
    objectives: [
      "Write any integer in base b as n = ∑ aᵢbⁱ and explain why the representation is unique",
      "Convert fluently between decimal, binary, octal, and hexadecimal",
      "Explain why binary converts to octal and hex by grouping 3 or 4 bits",
      "Trace addition and multiplication of integers in binary",
      "Compute $b^n \\bmod m$ with fast modular exponentiation in $O(\\log n)$ multiplications",
    ],
    concepts: [
      {
        term: "Base-b expansion",
        kind: "definition",
        statement: "If b ≥ 2 and n is a positive integer, then n has a **unique** representation $n = a_{k-1}b^{k-1} + a_{k-2}b^{k-2} + \\cdots + a_1 b + a_0$ with digits $0 \\le a_i < b$. It is written $(a_{k-1}\\cdots a_1 a_0)_b$.",
        detail: "Uniqueness is the division algorithm applied repeatedly — each division by b peels off one digit. Example: $(2AE9)_{16} = 2\\cdot 16^3 + 10\\cdot 16^2 + 14\\cdot 16 + 9 = 10{,}985$.",
      },
      {
        term: "Binary expansion",
        kind: "notation",
        statement: "Base 2: the digits (bits) are 0 and 1, and bit i is worth $2^i$. Example: $(101011111)_2 = 256 + 64 + 16 + 8 + 4 + 2 + 1 = 351$.",
        detail: "Binary is the native language of digital hardware: two stable states per digit map to bits, and two's-complement arithmetic is built on it.",
      },
      {
        term: "Octal and hexadecimal",
        kind: "notation",
        statement: "Base 8 uses digits 0–7; base 16 uses 0–9 and A = 10, B = 11, C = 12, D = 13, E = 14, F = 15. Because 8 = 2³ and 16 = 2⁴, each octal digit equals a group of 3 bits and each hex digit equals a group of 4 bits.",
        detail: "$(11100101)_2 = (345)_8 = (E5)_{16} = 229$ — group the bits from the right in 3s or 4s and read the digits off directly.",
      },
      {
        term: "Constructing a base-b expansion (successive division)",
        kind: "method",
        statement: "To convert n to base b: divide n by b and record the remainder; divide the quotient by b again; repeat until the quotient is 0. The remainders, read from last to first, are the base-b digits.",
        detail: "241 to binary: 241 = 2·120 + 1, 120 = 2·60 + 0, 60 = 2·30 + 0, 30 = 2·15 + 0, 15 = 2·7 + 1, 7 = 2·3 + 1, 3 = 2·1 + 1, 1 = 2·0 + 1. Read bottom-up: $241 = (11110001)_2$.",
      },
      {
        term: "Converting to decimal (multiply-and-add)",
        kind: "method",
        statement: "Evaluate the digit polynomial: start at the leftmost digit and repeatedly multiply by b and add the next digit (Horner's rule). Example: $(E5)_{16} = 14\\cdot 16 + 5 = 229$.",
        detail: "Horner's rule costs one multiply and one add per digit — the fastest way to convert into decimal by hand or in hardware.",
      },
      {
        term: "Algorithms for integer arithmetic",
        kind: "method",
        statement: "Grade-school addition and multiplication work in any base. Binary addition carries when 1 + 1 = 10; binary multiplication is a sequence of shifts (doublings) and adds. Adding n-bit integers costs O(n) bit operations; the standard multiplication algorithm costs O(n²).",
        detail: "Example: 1011 + 110 = 10001, i.e., 11 + 6 = 17. Faster multiplication algorithms (Karatsuba, FFT-based) beat O(n²) for very long numbers.",
      },
      {
        term: "Fast modular exponentiation",
        kind: "method",
        statement: "To compute $b^n \\bmod m$: write n in binary; compute b, b², b⁴, b⁸, … mod m by **repeated squaring** (about log₂ n squarings); multiply together the squares corresponding to the 1-bits of n, reducing mod m after each multiplication. Total: **O(log n) modular multiplications** instead of n − 1.",
        detail: "Computing $3^{644} \\bmod 645$ needs roughly 19 multiplications on numbers below 645 rather than 643 multiplications of ever-growing numbers.",
      },
      {
        term: "Why fast exponentiation matters",
        kind: "insight",
        statement: "RSA routinely raises 2048-bit messages to 2048-bit exponents: only the O(log n) repeated-squaring method makes this feasible on everyday hardware.",
        detail: "The same idea underlies many algorithms: any recurrence $a^{2k} = (a^k)^2$ halves the exponent at one multiplication's cost.",
      },
    ],
    examples: [
      {
        title: "Converting 241 to binary",
        problem: "Convert the decimal number 241 to base 2.",
        steps: [
          { label: "Divide repeatedly, tracking remainders", text: "241 = 2·120 + 1; 120 = 2·60 + 0; 60 = 2·30 + 0; 30 = 2·15 + 0; 15 = 2·7 + 1; 7 = 2·3 + 1; 3 = 2·1 + 1; 1 = 2·0 + 1." },
          { label: "Read remainders bottom to top", text: "The remainders, from the last division to the first, are 1, 1, 1, 1, 0, 0, 0, 1." },
          { label: "Check", text: "128 + 64 + 32 + 16 + 1 = 241." },
        ],
        result: "$241 = (11110001)_2$.",
      },
      {
        title: "Hex and octal at a glance",
        problem: "Convert $(11100101)_2$ to hexadecimal and to octal; convert $(2AE9)_{16}$ to decimal.",
        steps: [
          { label: "Group in 4s from the right", text: "1110 | 0101 → E | 5, so $(11100101)_2 = (E5)_{16}$." },
          { label: "Group in 3s from the right", text: "11 | 100 | 101 → 3 | 4 | 5, so $(11100101)_2 = (345)_8$." },
          { label: "Evaluate the hex number", text: "$(2AE9)_{16} = 2\\cdot 4096 + 10\\cdot 256 + 14\\cdot 16 + 9 = 8192 + 2560 + 224 + 9 = 10{,}985$." },
        ],
        result: "$(11100101)_2 = (E5)_{16} = (345)_8 = 229$, and $(2AE9)_{16} = 10{,}985$.",
      },
      {
        title: "Fast modular exponentiation: 3⁶⁴⁴ mod 645",
        problem: "Compute $3^{644} \\bmod 645$ using repeated squaring.",
        steps: [
          { label: "Squares of 3, reduced mod 645", text: "$3^1 = 3$, $3^2 = 9$, $3^4 = 81$, $3^8 = 111$, $3^{16} = 66$, $3^{32} = 486$, $3^{64} = 126$, $3^{128} = 396$, $3^{256} = 81$, $3^{512} = 111$ — each entry is the square of the previous, reduced mod 645." },
          { label: "Write the exponent in binary", text: "644 = 512 + 128 + 4." },
          { label: "Multiply the needed squares", text: "$3^{644} \\equiv 3^{512} \\cdot 3^{128} \\cdot 3^4 \\equiv 111 \\cdot 396 \\equiv 96 \\pmod{645}$, then $96 \\cdot 81 \\equiv 36 \\pmod{645}$." },
        ],
        result: "$3^{644} \\equiv 36 \\pmod{645}$, using about 19 multiplications on small numbers.",
      },
    ],
    keyTakeaways: [
      "Every positive integer has a unique base-b expansion with digits 0, …, b − 1",
      "Decimal → base b: successive division; base b → decimal: multiply-and-add",
      "Hex and octal are binary with the bits grouped by 4 and 3 — conversions are instant",
      "Binary addition costs O(n) bit operations, standard multiplication O(n²)",
      "Fast modular exponentiation (repeated squaring) needs only O(log n) multiplications — the engine of RSA",
    ],
    quiz: [
      {
        q: "The bit string 11110000 is which hexadecimal number?",
        options: ["0F", "F0", "E1", "78"],
        answer: 1,
        explanation: "Group into 4-bit chunks: 1111 = F and 0000 = 0, giving $(F0)_{16}$.",
      },
      {
        q: "What is $(2FB)_{16}$ in decimal?",
        options: ["673", "699", "763", "753"],
        answer: 2,
        explanation: "2·256 + 15·16 + 11 = 512 + 240 + 11 = 763 (F = 15, B = 11).",
      },
      {
        q: "Roughly how many modular multiplications does repeated-squaring exponentiation need to compute $b^{644} \\bmod m$?",
        options: ["About 20 — proportional to log 644", "About 644 — proportional to the exponent", "About 644² — proportional to its square", "Exactly 1 — hardware does it all"],
        answer: 0,
        explanation: "644 needs 10 bits; each bit costs one squaring plus possibly one multiplication, giving about 20 modular multiplications — O(log n) versus O(n) naive.",
      },
      {
        q: "Which binary string represents the decimal number 75?",
        options: ["1011011", "1001011", "1001111", "1101011"],
        answer: 1,
        explanation: "$75 = 64 + 8 + 2 + 1 = 2^6 + 2^3 + 2^1 + 2^0$, which is 1001011.",
      },
    ],
  },

  // ---------- 4.3 Primes and Greatest Common Divisors ----------
  {
    sectionId: "rosen-ch4-s3",
    readingTime: 13,
    intro: "Primes are the atoms of multiplication: every integer above 1 factors into them in exactly one way. This section proves that, meets the 2300-year-old Euclidean algorithm for greatest common divisors, and derives Bézout's theorem — the fact that gcd(a, b) can be written as a combination sa + tb that later unlocks solving congruences.",
    objectives: [
      "Define primes and composites, and test primality by trial division up to √n",
      "State and apply the Fundamental Theorem of Arithmetic",
      "Compute gcd and lcm from prime factorizations, using gcd(a,b)·lcm(a,b) = ab",
      "Run the Euclidean algorithm and find Bézout coefficients by back-substitution",
      "Distinguish relatively prime from pairwise relatively prime",
    ],
    concepts: [
      {
        term: "Prime and composite numbers",
        kind: "definition",
        statement: "An integer p > 1 is **prime** if its only positive divisors are 1 and p. An integer n > 1 that is not prime is **composite**. The integer 1 is neither prime nor composite.",
        detail: "2 is the only even prime. A composite n has a factorization n = ab with 1 < a ≤ b < n.",
      },
      {
        term: "Trial division primality test",
        kind: "method",
        statement: "An integer n > 1 is prime if and only if it has no prime divisor p ≤ √n. Reason: if n = ab with both a, b > √n, then ab > n, which is impossible.",
        detail: "Is 91 prime? √91 ≈ 9.5, so test 2, 3, 5, 7: 91 = 7·13 — composite. Trial division is O(√n), fine for small numbers, hopeless for cryptographic sizes (hundreds of digits).",
      },
      {
        term: "Sieve of Eratosthenes",
        kind: "method",
        statement: "To list all primes ≤ n: write down 2, …, n; repeatedly take the smallest uncrossed number p (which is prime) and cross out its multiples p², p² + p, p² + 2p, …. The survivors are exactly the primes.",
        detail: "The sieve costs about O(n log log n) operations — essentially linear in n, and the classical way to build a table of primes.",
      },
      {
        term: "Fundamental theorem of arithmetic",
        kind: "theorem",
        statement: "Every integer n > 1 can be written as a product of primes, and the factorization is **unique up to the order of the factors**: $n = p_1^{a_1}p_2^{a_2}\\cdots p_k^{a_k}$. (Existence is proved by strong induction in section 5.2; uniqueness uses the fact that a prime dividing a product must divide one of the factors.)",
        detail: "456 = 2³·3·19 and no other prime factorization exists. This uniqueness is why gcds and lcms can be read off from factorizations.",
      },
      {
        term: "Infinitude and distribution of primes",
        kind: "theorem",
        statement: "There are infinitely many primes (Euclid): if $p_1, \\dots, p_n$ were all of them, then $N = p_1p_2\\cdots p_n + 1$ has a prime factor different from every $p_i$ — a contradiction. The prime counting function π(n) grows like $n/\\ln n$ (prime number theorem); the largest known primes are Mersenne primes of the form $2^p - 1$.",
        detail: "The gap between consecutive primes is irregular, but proportionally thin: among the first n integers, roughly 1 in ln n is prime.",
      },
      {
        term: "Greatest common divisor and least common multiple",
        kind: "definition",
        statement: "gcd(a, b) is the largest integer dividing both a and b; lcm(a, b) is the smallest positive integer that is a multiple of both. Given prime factorizations, the gcd takes the **minimum** exponent of each prime and the lcm takes the **maximum**, and **gcd(a,b) · lcm(a,b) = a·b**.",
        detail: "720 = 2⁴·3²·5 and 1512 = 2³·3³·7, so gcd = 2³·3² = 72 and lcm = 2⁴·3³·5·7 = 15,120; indeed 72·15,120 = 720·1,512 = 1,088,640.",
      },
      {
        term: "Relatively prime",
        kind: "definition",
        statement: "Integers a, b are **relatively prime** when gcd(a, b) = 1. A set is **pairwise relatively prime** when every two distinct elements have gcd 1 — a strictly stronger condition than the whole set having gcd 1.",
        detail: "6, 10, 15 have overall gcd 1 but are NOT pairwise relatively prime since gcd(6, 10) = 2. The numbers 8, 9, 25 are pairwise relatively prime.",
      },
      {
        term: "Euclidean algorithm",
        kind: "method",
        statement: "Iterate **gcd(a, b) = gcd(b, a mod b)** until the remainder is 0; the last nonzero remainder is the gcd. It works because the common divisors of (a, b) and (b, a mod b) coincide. The algorithm uses O(log min(a, b)) divisions — the worst case occurs at consecutive Fibonacci numbers (Lamé's theorem).",
        detail: "gcd(252, 198): 252 = 1·198 + 54; 198 = 3·54 + 36; 54 = 1·36 + 18; 36 = 2·18 + 0. So gcd = 18, in four divisions and without factoring anything.",
      },
      {
        term: "Bézout's theorem",
        kind: "theorem",
        statement: "If a and b are positive integers, there exist integers s and t with **sa + tb = gcd(a, b)**. In fact gcd(a, b) is the **smallest positive** integer expressible as ma + nb. The coefficients are found by running the Euclidean algorithm backward.",
        detail: "gcd(252, 198) = 18 and 4·252 − 5·198 = 1008 − 990 = 18. The pair (s, t) is not unique, but the extended Euclidean algorithm produces one.",
      },
    ],
    examples: [
      {
        title: "Euclidean algorithm: gcd(414, 662)",
        problem: "Use the Euclidean algorithm to find gcd(414, 662).",
        steps: [
          { label: "Divide the larger by the smaller", text: "662 = 1·414 + 248, so gcd(662, 414) = gcd(414, 248)." },
          { label: "Continue", text: "414 = 1·248 + 166; 248 = 1·166 + 82; 166 = 2·82 + 2." },
          { label: "Stop at remainder 0", text: "82 = 41·2 + 0 — the last nonzero remainder is 2." },
        ],
        result: "gcd(414, 662) = 2, found in five divisions instead of by factoring two large numbers.",
      },
      {
        title: "Bézout coefficients by back-substitution",
        problem: "Find integers s, t with 252s + 198t = gcd(252, 198).",
        steps: [
          { label: "Run the algorithm forward", text: "252 = 1·198 + 54; 198 = 3·54 + 36; 54 = 1·36 + 18; 36 = 2·18 + 0, so gcd = 18." },
          { label: "Back-substitute the remainders", text: "18 = 54 − 36 and 36 = 198 − 3·54, so 18 = 4·54 − 198." },
          { label: "Substitute once more", text: "54 = 252 − 198, so 18 = 4·(252 − 198) − 198 = 4·252 − 5·198." },
        ],
        result: "18 = 4·252 − 5·198 — Bézout coefficients s = 4, t = −5.",
      },
      {
        title: "gcd and lcm from factorizations",
        problem: "Find gcd and lcm of 720 = 2⁴·3²·5 and 1512 = 2³·3³·7.",
        steps: [
          { label: "gcd takes minimum exponents", text: "2³·3²·5⁰·7⁰ = 8·9 = 72." },
          { label: "lcm takes maximum exponents", text: "2⁴·3³·5·7 = 16·27·35 = 15,120." },
          { label: "Verify the identity", text: "gcd·lcm = 72·15,120 = 1,088,640 = 720·1,512." },
        ],
        result: "gcd = 72 and lcm = 15,120.",
      },
    ],
    keyTakeaways: [
      "p > 1 is prime when its only divisors are 1 and p; test divisors only up to √n",
      "Fundamental theorem of arithmetic: prime factorization exists and is unique",
      "gcd takes min exponents, lcm takes max exponents, and gcd(a,b)·lcm(a,b) = ab",
      "Euclidean algorithm: repeatedly replace (a, b) by (b, a mod b); O(log min(a,b)) divisions",
      "Bézout: sa + tb = gcd(a,b), computed by back-substitution; the gcd is the smallest positive linear combination",
      "Pairwise relatively prime (every pair coprime) is stronger than overall gcd 1",
    ],
    quiz: [
      {
        q: "What is gcd(287, 91)?",
        options: ["13", "1", "7", "21"],
        answer: 2,
        explanation: "Euclid: 287 = 3·91 + 14; 91 = 6·14 + 7; 14 = 2·7 + 0, so the gcd is 7. (Equivalently 287 = 7·41 and 91 = 7·13.)",
      },
      {
        q: "Which statement about the numbers 6, 10, 15 is correct?",
        options: ["They are pairwise relatively prime", "Their overall gcd is 1, but they are not pairwise relatively prime", "Their gcd is 2", "Their gcd is 30"],
        answer: 1,
        explanation: "No prime divides all three, so gcd(6, 10, 15) = 1; but gcd(6, 10) = 2, so they are not pairwise relatively prime.",
      },
      {
        q: "If a = 2⁴·3²·5 and b = 2³·3³·5², then lcm(a, b) =",
        options: ["2⁴·3³·5² = 10,800", "2³·3²·5 = 360", "2⁷·3⁵·5³", "2⁴·3²·5 = 720"],
        answer: 0,
        explanation: "The lcm takes the maximum exponent of each prime: 2⁴·3³·5² = 16·27·25 = 10,800.",
      },
      {
        q: "The first step of the Euclidean algorithm applied to gcd(252, 198) is:",
        options: ["gcd(198, 54)", "gcd(252, 54)", "gcd(126, 99)", "gcd(198, 66)"],
        answer: 0,
        explanation: "252 = 1·198 + 54, so gcd(252, 198) = gcd(198, 54): replace the larger number by the division remainder.",
      },
    ],
  },

  // ---------- 4.4 Solving Congruences ----------
  {
    sectionId: "rosen-ch4-s4",
    readingTime: 12,
    intro: "Modular arithmetic gets its algebra chapter: solving linear equations mod m. The tools are inverses (division, when it exists), the Chinese Remainder Theorem (piecing simultaneous congruences together), and Fermat's little theorem (taming enormous exponents) — the trio that makes RSA work.",
    objectives: [
      "Decide when ax ≡ b (mod m) is solvable and count its incongruent solutions",
      "Compute the inverse of a modulo m with the extended Euclidean algorithm",
      "Solve systems of congruences with pairwise relatively prime moduli (CRT)",
      "Apply Fermat's little theorem to reduce huge exponents mod a prime",
      "Explain pseudoprimes and Carmichael numbers: why the converse of Fermat fails",
    ],
    concepts: [
      {
        term: "Linear congruence",
        kind: "definition",
        statement: "A **linear congruence** is an equation of the form **ax ≡ b (mod m)**, where m ≥ 1 is the modulus and x is the unknown. Two solutions that are congruent mod m count as the same (incongruent solutions are the distinct ones).",
        detail: "3x ≡ 4 (mod 7) asks: which remainders mod 7 triple to something ≡ 4? Answer: x ≡ 6, since 3·6 = 18 ≡ 4.",
      },
      {
        term: "Solvability criterion",
        kind: "theorem",
        statement: "The congruence ax ≡ b (mod m) has solutions if and only if **gcd(a, m) divides b**. When d = gcd(a, m) does divide b, the congruence has exactly **d incongruent solutions modulo m**.",
        detail: "To solve: divide the whole congruence by d to get (a/d)x ≡ b/d (mod m/d), then multiply by the inverse of a/d modulo m/d. Example: 9x ≡ 12 (mod 15) has gcd(9, 15) = 3 solutions: x ≡ 3, 8, 13 (mod 15).",
      },
      {
        term: "Inverse modulo m",
        kind: "definition",
        statement: "An integer ā is an **inverse of a modulo m** when **āa ≡ 1 (mod m)**. An inverse exists if and only if gcd(a, m) = 1, and then it is unique modulo m.",
        detail: "5 is the inverse of 3 mod 7 because 3·5 = 15 ≡ 1 (mod 7). No inverse of 6 mod 9 exists since gcd(6, 9) = 3: multiples of 6 mod 9 are only 0, 3, 6 — never 1.",
      },
      {
        term: "Finding inverses with the Euclidean algorithm",
        kind: "method",
        statement: "Run the extended Euclidean algorithm on (a, m): if it yields sa + tm = 1, then s mod m is the inverse of a modulo m.",
        detail: "gcd(3, 7): 7 = 2·3 + 1, so 1 = 7 − 2·3, giving s = −2 ≡ 5 (mod 7) — the inverse of 3 mod 7 is 5. For tiny moduli, trial multiplication also works.",
      },
      {
        term: "Chinese Remainder Theorem",
        kind: "theorem",
        statement: "Let $m_1, \\dots, m_k$ be **pairwise relatively prime** moduli. Then for any integers $b_1, \\dots, b_k$ the system $x \\equiv b_i \\pmod{m_i}$ has a solution, and the solution is **unique** modulo $M = m_1m_2\\cdots m_k$. Every residue mod M corresponds to exactly one combination of residues mod the mᵢ.",
        detail: "Legend has Sun Tzu counting troops mod 3, 5, 7. Modern use: fast multi-precision arithmetic — work mod several small primes and recombine with the CRT.",
      },
      {
        term: "Solving CRT systems by back-substitution",
        kind: "method",
        statement: "Write x = b₁ + m₁t and substitute into the second congruence to solve for t mod m₂; write t = t₀ + m₂u and substitute into the third; continue. The answer is a single residue class modulo the product of the moduli.",
        detail: "The constructive proof: each substitution peels off one congruence, and the running modulus grows to $m_1m_2\\cdots m_k$.",
      },
      {
        term: "Fermat's little theorem",
        kind: "theorem",
        statement: "If p is prime and a is an integer not divisible by p, then $a^{p-1} \\equiv 1 \\pmod{p}$. Equivalently, $a^p \\equiv a \\pmod{p}$ for every integer a.",
        detail: "The exponent-killer: to find $7^{222} \\bmod 11$, note 222 = 22·10 + 2, so $7^{222} \\equiv (7^{10})^{22} \\cdot 7^2 \\equiv 49 \\equiv 5 \\pmod{11}$. Exponents only need to be reduced mod p − 1.",
      },
      {
        term: "Pseudoprimes and Carmichael numbers",
        kind: "insight",
        statement: "The converse of Fermat's little theorem is false: composite n with $b^{n-1} \\equiv 1 \\pmod{n}$ are **pseudoprimes to base b** (smallest for base 2: 341 = 11·31). **Carmichael numbers** (smallest: 561 = 3·11·17) satisfy it for every b coprime to n — so primality testing uses many bases or stronger tests such as Miller–Rabin.",
        detail: "Passing a Fermat test only makes n a probable prime; absolute certainty requires a different method (or randomness you are willing to live with).",
      },
    ],
    examples: [
      {
        title: "Solving a linear congruence",
        problem: "Solve 3x ≡ 4 (mod 7).",
        steps: [
          { label: "Check the criterion", text: "gcd(3, 7) = 1 divides 4, so a unique solution mod 7 exists." },
          { label: "Find the inverse of 3 mod 7", text: "3·5 = 15 ≡ 1 (mod 7), so the inverse is 5." },
          { label: "Multiply through by 5", text: "x ≡ 5·4 = 20 ≡ 6 (mod 7)." },
          { label: "Check", text: "3·6 = 18 = 14 + 4 ≡ 4 (mod 7)." },
        ],
        result: "x ≡ 6 (mod 7).",
      },
      {
        title: "Chinese Remainder Theorem",
        problem: "Find x with x ≡ 2 (mod 3), x ≡ 3 (mod 5), and x ≡ 2 (mod 7).",
        steps: [
          { label: "Substitute the first congruence", text: "Write x = 2 + 3t. Then 2 + 3t ≡ 3 (mod 5), so 3t ≡ 1 (mod 5), so t ≡ 2 (mod 5) since 3·2 = 6 ≡ 1." },
          { label: "Substitute again", text: "t = 2 + 5s, so x = 2 + 3(2 + 5s) = 8 + 15s." },
          { label: "Use the third congruence", text: "8 + 15s ≡ 2 (mod 7). Since 15 ≡ 1 (mod 7), this says s ≡ 1 (mod 7)." },
          { label: "Assemble", text: "s = 1 + 7u, so x = 8 + 15(1 + 7u) = 23 + 105u — a single class mod 105." },
        ],
        result: "x ≡ 23 (mod 105); check: 23 mod 3 = 2, 23 mod 5 = 3, 23 mod 7 = 2.",
      },
      {
        title: "Fermat's little theorem in action",
        problem: "Compute $7^{222} \\bmod 11$.",
        steps: [
          { label: "Invoke Fermat", text: "11 is prime and does not divide 7, so $7^{10} \\equiv 1 \\pmod{11}$." },
          { label: "Split the exponent", text: "222 = 22·10 + 2." },
          { label: "Reduce", text: "$7^{222} = (7^{10})^{22} \\cdot 7^2 \\equiv 1^{22} \\cdot 49 \\equiv 49 \\equiv 5 \\pmod{11}$." },
        ],
        result: "$7^{222} \\equiv 5 \\pmod{11}$.",
      },
    ],
    keyTakeaways: [
      "ax ≡ b (mod m) is solvable exactly when gcd(a, m) | b; then there are exactly gcd(a, m) incongruent solutions mod m",
      "a has an inverse mod m exactly when gcd(a, m) = 1 — that is when you can divide by a",
      "Inverses come from the extended Euclidean algorithm",
      "CRT: pairwise coprime moduli give exactly one solution mod the product of the moduli",
      "Fermat: $a^{p-1} \\equiv 1 \\pmod{p}$ reduces exponents mod p − 1",
      "The converse fails: pseudoprimes and Carmichael numbers (561) fool Fermat-style tests",
    ],
    quiz: [
      {
        q: "Does 6x ≡ 14 (mod 26) have solutions?",
        options: ["No — gcd(6, 26) = 2 does not divide 14", "Yes — exactly 2 incongruent solutions mod 26", "Yes — a unique solution mod 26", "Yes — 26 incongruent solutions"],
        answer: 1,
        explanation: "d = gcd(6, 26) = 2 divides 14, so solutions exist and there are exactly d = 2 of them mod 26 (in fact x ≡ 11 and x ≡ 24).",
      },
      {
        q: "The inverse of 5 modulo 17 is:",
        options: ["12", "3", "7", "5"],
        answer: 2,
        explanation: "5·7 = 35 = 2·17 + 1 ≡ 1 (mod 17), so 7 is the inverse of 5 mod 17.",
      },
      {
        q: "By the CRT, the system x ≡ 1 (mod 4), x ≡ 2 (mod 5) has how many solutions mod 20?",
        options: ["Exactly two", "None, since 4 and 5 share a factor", "Exactly one — x ≡ 17 (mod 20)", "Five"],
        answer: 2,
        explanation: "4 and 5 are relatively prime, so the CRT guarantees exactly one solution mod 20: x = 17, since 17 = 4·4 + 1 and 17 = 3·5 + 2.",
      },
      {
        q: "$3^{100} \\bmod 11$ equals:",
        options: ["3", "1", "9", "27"],
        answer: 1,
        explanation: "Fermat: $3^{10} \\equiv 1 \\pmod{11}$, so $3^{100} = (3^{10})^{10} \\equiv 1$.",
      },
    ],
  },

  // ---------- 4.5 Applications of Congruences ----------
  {
    sectionId: "rosen-ch4-s5",
    readingTime: 9,
    intro: "Congruences quietly run modern computing: hashing functions decide where each record lives in memory, linear congruential generators produce the pseudorandom numbers behind simulations, and check digits catch the typos in UPC codes and ISBNs. This is applied number theory — mod m doing real work.",
    objectives: [
      "Explain how hashing assigns memory locations with h(k) = k mod m",
      "Resolve collisions with linear probing",
      "Explain why prime moduli are used for hash table sizes",
      "Generate pseudorandom numbers with the linear congruential method",
      "Verify and construct check digits for UPC-A and ISBN-style codes",
    ],
    concepts: [
      {
        term: "Hashing functions",
        kind: "method",
        statement: "To store records with keys k (student IDs, account numbers, …) in a table with m memory locations, use the hash function **h(k) = k mod m**: the record goes to location h(k). One division places each record, so insertion and lookup are essentially instantaneous.",
        detail: "With m = 101 and keys up to several digits, h spreads them over locations 0–100 with no factorization or searching needed.",
      },
      {
        term: "Collisions and linear probing",
        kind: "method",
        statement: "Two keys can hash to the same slot (a **collision**). **Linear probing** resolves it: if location h(k) is occupied, try h(k) + 1, h(k) + 2, … (mod m) until a free location is found.",
        detail: "Keys 12, 18, 25 with m = 7: h(12) = 5, h(18) = 4, h(25) = 4 — a collision — so 25 probes to slot 5 and then settles in slot 6.",
      },
      {
        term: "Why prime table sizes",
        kind: "insight",
        statement: "If m shares a common factor with many keys (for example m = 100 and all keys even), the keys can only land in slots sharing that structure, piling up collisions. A prime m destroys such patterns, so real hash tables use prime sizes.",
        detail: "This is a purely modular phenomenon: the image of k mod m is constrained by gcd patterns when m is composite.",
      },
      {
        term: "Pseudorandom numbers: linear congruential method",
        kind: "definition",
        statement: "Choose modulus m, multiplier a, increment c, and seed x₀. Generate $x_{n+1} = (a \\cdot x_n + c) \\bmod m$; the values $x_n/m$ are pseudorandom numbers in [0, 1). The sequence looks random but is a deterministic function of the seed, and repeats with period at most m.",
        detail: "With m = 9, a = 7, c = 4, x₀ = 3 the sequence runs 3, 7, 8, 6, 1, 2, 0, 4, 5, 3, … — full period 9. Bad parameters (like a = 1) give obviously nonrandom output; simulations demand well-tested parameters.",
      },
      {
        term: "Check digits: UPC-A",
        kind: "method",
        statement: "A 12-digit UPC code d₁d₂⋯d₁₂ is valid when **3(d₁ + d₃ + d₅ + d₇ + d₉ + d₁₁) + (d₂ + d₄ + d₆ + d₈ + d₁₀ + d₁₂) ≡ 0 (mod 10)** — the twelfth digit is the unique check digit making this hold. The scheme detects **all single-digit errors** and most transpositions of adjacent digits.",
        detail: "The weights 3, 1, 3, 1, … are chosen so that changing any one digit alters the weighted sum by an amount not divisible by 10.",
      },
      {
        term: "Check digits: ISBN-style codes",
        kind: "method",
        statement: "ISBN-10 validates with weighted digits: $\\sum_{i=1}^{10} (11 - i) \\cdot d_i \\equiv 0 \\pmod{11}$, with the letter X representing the value 10. ISBN-13 uses alternating weights 1, 3, 1, 3, … with the total ≡ 0 (mod 10).",
        detail: "ISBN-10 0-306-40615-2: 10·0 + 9·3 + 8·0 + 7·6 + 6·4 + 5·0 + 4·6 + 3·1 + 2·5 + 1·2 = 132 = 11·12 ≡ 0 (mod 11), so the code is valid.",
      },
      {
        term: "Error detection philosophy",
        kind: "insight",
        statement: "A check digit encodes the entire number into one congruence: changing any single digit breaks the congruence (the change in the weighted sum is a nonzero value the modulus does not divide), so the error is caught at the scanner. Choosing the weights is choosing which errors you can afford to miss.",
        detail: "Position-dependent weights also make most transpositions detectable: swapping two digits changes the sum by (weight difference)·(digit difference), nonzero for distinct digits under suitable weights.",
      },
    ],
    examples: [
      {
        title: "Hashing with linear probing",
        problem: "A hash table has m = 7 slots and h(k) = k mod 7. Insert records with keys 12, 18, 25, 30 in order.",
        steps: [
          { label: "Key 12", text: "h(12) = 12 mod 7 = 5 → slot 5 is free, store there." },
          { label: "Key 18", text: "h(18) = 18 mod 7 = 4 → slot 4 is free, store there." },
          { label: "Key 25 — collision", text: "h(25) = 4 is occupied; probe slot 5 — also occupied; slot 6 is free, so 25 goes to slot 6." },
          { label: "Key 30", text: "h(30) = 30 mod 7 = 2 → slot 2 is free, store there." },
        ],
        result: "Final layout: slot 2 → 30, slot 4 → 18, slot 5 → 12, slot 6 → 25; one collision resolved with two extra probes.",
      },
      {
        title: "Running a linear congruential generator",
        problem: "Generate the first values with m = 9, a = 7, c = 4, seed x₀ = 3, and find the period.",
        steps: [
          { label: "Iterate", text: "x₁ = (7·3 + 4) mod 9 = 25 mod 9 = 7; x₂ = (7·7 + 4) mod 9 = 53 mod 9 = 8." },
          { label: "Continue", text: "x₃ = 6, x₄ = 1, x₅ = 2, x₆ = 0, x₇ = 4, x₈ = 5." },
          { label: "Detect the cycle", text: "x₉ = (7·5 + 4) mod 9 = 39 mod 9 = 3 = x₀ — the sequence restarts." },
        ],
        result: "3, 7, 8, 6, 1, 2, 0, 4, 5, 3, … — period 9, the full modulus (a good parameter choice).",
      },
      {
        title: "Validating a UPC-A code",
        problem: "Is 036000291452 a valid UPC-A code?",
        steps: [
          { label: "Odd-position digits (1, 3, 5, 7, 9, 11)", text: "0, 6, 0, 2, 1, 5 → sum 14; tripled: 42." },
          { label: "Even-position digits (2, 4, 6, 8, 10, 12)", text: "3, 0, 0, 9, 4, 2 → sum 18." },
          { label: "Test the congruence", text: "42 + 18 = 60 ≡ 0 (mod 10) — the check passes." },
        ],
        result: "Yes — 036000291452 is valid; the check digit 2 makes the weighted total divisible by 10.",
      },
    ],
    keyTakeaways: [
      "h(k) = k mod m places a record with one division; collisions are resolved by linear probing",
      "Prime table sizes scatter structured keys more evenly",
      "LCG: $x_{n+1} = (a \\cdot x_n + c) \\bmod m$ — deterministic, period at most m, and parameters matter",
      "UPC-A: 3·(odd-position digits) + (even-position digits) ≡ 0 (mod 10); catches every single-digit error",
      "ISBN-10 uses a weighted sum ≡ 0 (mod 11); distinct weights catch transpositions too",
    ],
    quiz: [
      {
        q: "A hash table has 11 slots and uses h(k) = k mod 11. The key k = 73 hashes to slot:",
        options: ["11", "7", "62", "3"],
        answer: 1,
        explanation: "73 = 11·6 + 7, so h(73) = 7.",
      },
      {
        q: "In the LCG $x_{n+1} = (5x_n + 3) \\bmod 16$ with seed x₀ = 7, the first generated value x₁ is:",
        options: ["38", "10", "6", "0"],
        answer: 2,
        explanation: "(5·7 + 3) mod 16 = 38 mod 16 = 6.",
      },
      {
        q: "Why are prime numbers preferred as hash table sizes m?",
        options: ["They make h(k) = k mod m spread out keys that share common factors more evenly", "They make the table physically larger", "They guarantee that no collisions occur", "They speed up the division k mod m"],
        answer: 0,
        explanation: "If m is composite, keys sharing a factor with m can only land in a restricted set of slots; a prime modulus destroys such patterns and evens out the load.",
      },
      {
        q: "In the UPC-A check, if 3·(sum of odd-position digits) + (sum of even-position digits excluding the check digit) ≡ r (mod 10), the check digit is:",
        options: ["r", "10 − r (with 0 used when r = 0)", "11 − r", "r + 3"],
        answer: 1,
        explanation: "The check digit is chosen to make the total ≡ 0 (mod 10), so it equals (10 − r) mod 10 — that is, 10 − r, except 0 when r = 0.",
      },
    ],
  },

  // ---------- 4.6 Cryptography ----------
  {
    sectionId: "rosen-ch4-s6",
    readingTime: 13,
    intro: "This is where number theory meets real-world security. Classical ciphers scramble letters with modular arithmetic and fall to frequency analysis; RSA turns the difficulty of factoring into a public-key system where the encryption key is published for the world — and decryption stays impossible in practice.",
    objectives: [
      "Use cryptosystem vocabulary: plaintext, ciphertext, keys, encryption and decryption functions",
      "Encrypt and decrypt with shift (Caesar) and affine ciphers",
      "Explain why monoalphabetic ciphers fall to frequency analysis",
      "Describe the Vigenère cipher and transposition ciphers",
      "Walk through RSA: key generation, encryption, decryption, and the proof it works",
      "Explain digital signatures and public-key authentication",
    ],
    concepts: [
      {
        term: "Cryptosystem vocabulary",
        kind: "definition",
        statement: "A **cryptosystem** is a five-tuple (P, C, K, E, D): a plaintext space P, a ciphertext space C, a keyspace K, and families of encryption rules $E_k: P \\to C$ and decryption rules $D_k: C \\to P$ with $D_k(E_k(p)) = p$ for every plaintext p. Only the key needs to be secret.",
        detail: "Kerckhoff's principle: the system itself may be public; security must live entirely in the key.",
      },
      {
        term: "Shift (Caesar) cipher",
        kind: "method",
        statement: "Number the letters A–Z as 0–25. The shift cipher with key k encrypts letter p as **f(p) = (p + k) mod 26**; decryption shifts back: p = (c − k) mod 26.",
        detail: "Caesar famously used k = 3. With only 26 keys, an attacker tries them all in seconds — or notices that E is the most frequent English letter and solves for k directly.",
      },
      {
        term: "Affine cipher",
        kind: "method",
        statement: "Encrypt with **f(p) = (ap + b) mod 26**, where gcd(a, 26) = 1 (required for invertibility). Decrypt with p = ā(c − b) mod 26, where āa ≡ 1 (mod 26).",
        detail: "There are φ(26) = 12 choices of a and 26 of b — only 312 keys, and frequency analysis breaks affine ciphers exactly as easily as shift ciphers.",
      },
      {
        term: "Cryptanalysis by frequency analysis",
        kind: "method",
        statement: "In long English texts, letters occur at stable frequencies (E ≈ 12.7%, T ≈ 9%, A ≈ 8%, …). A monoalphabetic cipher preserves per-letter frequencies, so matching ciphertext letter frequencies to English frequencies recovers the substitution — no key needed.",
        detail: "This is why the substitution ciphers of this section are historically interesting but cryptographically dead.",
      },
      {
        term: "Vigenère cipher",
        kind: "method",
        statement: "Choose a keyword $(k_1, \\dots, k_n)$; the i-th plaintext letter is shifted by the corresponding key letter: $c_i = (p_i + k_{i \\bmod n}) \\bmod 26$. The same plaintext letter maps to different ciphertext letters at different positions — a polyalphabetic cipher.",
        detail: "Vigenère resisted naive frequency analysis for centuries (le chiffre indéchiffrable) but falls to the Kasiski test and index-of-coincidence attacks that first recover the key length, then break each shift independently.",
      },
      {
        term: "Transposition ciphers",
        kind: "method",
        statement: "Rearrange letter positions rather than substituting: in the rail-fence cipher, write the message in zigzag rows and read across. Modern block ciphers such as AES likewise combine substitution boxes and permutation steps over many rounds.",
        detail: "Transposition defeats single-letter frequency tables but preserves pair frequencies (digrams) — different information leaks, same eventual fate.",
      },
      {
        term: "Public-key cryptography",
        kind: "insight",
        statement: "In a **public-key cryptosystem** each user publishes an encryption key and keeps secret the matching decryption key: knowing how to encrypt does not help an adversary decrypt. Security rests on **one-way functions** — computations easy to perform but infeasible to invert, such as multiplying primes versus factoring their product.",
        detail: "Public-key systems also solve key distribution (symmetric systems need a shared secret channel first) and enable digital signatures.",
      },
      {
        term: "RSA cryptosystem",
        kind: "method",
        statement: "**Key generation:** choose large distinct primes p, q; let n = pq; choose e with gcd(e, (p−1)(q−1)) = 1; publish the public key (n, e) and keep d ≡ e⁻¹ (mod (p−1)(q−1)) secret. **Encryption:** $c = m^e \\bmod n$. **Decryption:** $m = c^d \\bmod n$.",
        detail: "Recovering d from (n, e) is equivalent in difficulty to factoring n; no efficient factoring algorithm is known, and 2048-bit moduli are far beyond any projected attack.",
      },
      {
        term: "Why RSA works + digital signatures",
        kind: "theorem",
        statement: "For 0 ≤ m < n: $(m^e)^d = m^{1 + t(p-1)(q-1)} \\equiv m \\pmod{p}$ and (mod q) by Fermat's little theorem, hence $\\equiv m \\pmod{n = pq}$ by the CRT. **Digital signatures** reverse the roles: the holder signs $s = m^d \\bmod n$, and anyone verifies $m = s^e \\bmod n$ — only the private-key holder could have produced s.",
        detail: "Signing a digest of the message (rather than the message itself) is how real systems do it; hashing makes signatures efficient.",
      },
    ],
    examples: [
      {
        title: "A Caesar shift",
        problem: "Encrypt the message STOPMSG using the shift cipher with k = 3, and describe the decryption.",
        steps: [
          { label: "Shift each letter", text: "S = 18 → 21 = V; T = 19 → 22 = W; O = 14 → 17 = R; P = 15 → 18 = S." },
          { label: "Continue", text: "M = 12 → 15 = P; S → V; G = 6 → 9 = J." },
          { label: "Decrypt", text: "Decryption shifts each ciphertext letter back by 3: p = (c − 3) mod 26." },
        ],
        result: "STOPMSG → VWRSPVSJ.",
      },
      {
        title: "An affine cipher",
        problem: "Encrypt HELLO with f(p) = (3p + 5) mod 26 and explain how to decrypt.",
        steps: [
          { label: "Encrypt letter by letter", text: "H = 7 → 3·7 + 5 = 26 ≡ 0 = A; E = 4 → 17 = R; L = 11 → 38 ≡ 12 = M; L → M; O = 14 → 47 ≡ 21 = V." },
          { label: "Find the inverse of 3 mod 26", text: "3·9 = 27 ≡ 1 (mod 26), so 9 is the inverse of 3." },
          { label: "Write the decryption rule", text: "p = 9(c − 5) mod 26. Check: c = 0 gives 9·(−5) = −45 ≡ 7 = H (mod 26)." },
        ],
        result: "HELLO → ARMMV; decryption is p = 9(c − 5) mod 26.",
      },
      {
        title: "A tiny RSA run",
        problem: "Set up RSA with p = 11, q = 13, e = 7 and encrypt the message m = 9.",
        steps: [
          { label: "Modulus and totient", text: "n = pq = 143 and (p−1)(q−1) = 10·12 = 120; gcd(7, 120) = 1, so e is valid." },
          { label: "Private key", text: "d = 7⁻¹ mod 120: since 7·103 = 721 = 6·120 + 1, we get d = 103." },
          { label: "Encrypt", text: "c = 9⁷ mod 143. Compute: 9² = 81; 9³ ≡ 14; 9⁶ ≡ 14² = 196 ≡ 53; so c = 9⁶·9 ≡ 53·9 = 477 ≡ 48 (mod 143)." },
          { label: "Decrypt", text: "By repeated squaring, $48^{103} \\bmod 143 = 9$ — guaranteed by Fermat's little theorem plus the CRT." },
        ],
        result: "Public key (143, 7), private key d = 103, ciphertext c = 48.",
      },
    ],
    keyTakeaways: [
      "A cryptosystem is spaces plus key-dependent rules $E_k$, $D_k$ with $D_k(E_k(p)) = p$",
      "Shift and affine ciphers are arithmetic mod 26 — broken by brute force or frequency analysis",
      "Vigenère varies the shift with a keyword; transposition ciphers permute positions — both still breakable",
      "Public-key systems publish encryption and keep decryption; security = a one-way trapdoor (factoring)",
      "RSA: $c = m^e \\bmod n$ and $m = c^d \\bmod n$ with $ed \\equiv 1 \\pmod{(p-1)(q-1)}$; correctness via Fermat + CRT",
      "Digital signatures: sign with the private key, verify with the public key",
    ],
    quiz: [
      {
        q: "Encrypt the word SEND with a shift cipher using k = 4.",
        options: ["WIRH", "AIRC", "ODHR", "WHSF"],
        answer: 0,
        explanation: "S(18) + 4 = 22 = W; E(4) + 4 = 8 = I; N(13) + 4 = 17 = R; D(3) + 4 = 7 = H.",
      },
      {
        q: "For the affine cipher f(p) = ap + b (mod 26) to be decryptable, a must satisfy:",
        options: ["a > b", "a must be prime", "gcd(a, 26) = 1", "a ≡ 1 (mod 26)"],
        answer: 2,
        explanation: "Multiplication by a must be invertible mod 26, which happens exactly when gcd(a, 26) = 1 — that is, a is odd and not divisible by 13.",
      },
      {
        q: "RSA with p = 5, q = 11, e = 3. What is the private exponent d?",
        options: ["27", "13", "7", "40"],
        answer: 0,
        explanation: "(p−1)(q−1) = 4·10 = 40 and 3·27 = 81 ≡ 1 (mod 40), so d = 27.",
      },
      {
        q: "Why can't an attacker who knows the public key (n, e) decrypt RSA ciphertexts efficiently?",
        options: ["Because e is chosen randomly for each message", "Because m is always transmitted alongside c", "Because d is transmitted encrypted", "Because inverting the encryption is believed to require factoring n = pq, for which no efficient algorithm is known"],
        answer: 3,
        explanation: "RSA's security rests on the hardness of factoring: computing d from (n, e) is essentially as hard as factoring n, believed infeasible for properly sized moduli.",
      },
      // PYQ-pattern: GATE 2019 — RSA private exponent from primes (rephrased, values changed)
      {
        q: "RSA uses primes $p = 7$ and $q = 11$ with public exponent $e = 13$. The private exponent $d$ equals:",
        options: ["$13$", "$60$", "$37$", "$7$"],
        answer: 2,
        explanation: "Step 1: Restate the key-generation rule as $d \\equiv e^{-1} \\pmod{(p-1)(q-1)}$. Step 2: Recall the key formula $\\phi(n) = (p-1)(q-1) = 6 \\times 10 = 60$. Step 3: Seek $d$ with $13d \\equiv 1 \\pmod{60}$ using the extended Euclidean method. Step 4: Verify $13 \\times 37 = 481 = 8 \\times 60 + 1$, so $13 \\times 37 \\equiv 1 \\pmod{60}$. Step 5: The distractors fail since $13$ is the public exponent itself, $60$ is $\\phi(n)$ rather than its inverse, and $7$ is one prime factor. Step 6: Hence the private exponent is $d = 37$."
      },
      // PYQ-pattern: GATE 2014 — RSA encryption of a small message (rephrased, values changed)
      {
        q: "RSA has modulus $n = 33$ with public exponent $e = 3$. The encryption of the message $m = 4$ is $c = m^{e} \\bmod n$, which equals:",
        options: ["$31$", "$12$", "$64$", "$7$"],
        answer: 0,
        explanation: "Step 1: Restate encryption as **modular exponentiation** $c \\equiv m^{e} \\pmod{n}$. Step 2: Recall the key congruence rule that powers reduce modulo $n$ at every stage. Step 3: Compute $m^{e} = 4^{3} = 64$. Step 4: Reduce modulo $33$ as $64 = 1 \\times 33 + 31$, so $c = 31$. Step 5: The distractor $64$ forgets the final reduction, $12$ arises from multiplying exponents instead of raising powers, and $7$ is a modular inverse confusion. Step 6: Therefore the ciphertext is $31$."
      },
    ],
  },
]
