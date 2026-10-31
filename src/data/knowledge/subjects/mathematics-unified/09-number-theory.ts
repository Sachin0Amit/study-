/**
 * Knowledge Universe — Mathematics — Chapter 09: Number Theory
 * 1 lesson · ~1,246 words
 * field: Number Theory
 * legacy sources: mathematics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Number Theory]
 *
 * Lessons (snapshot at reorganization):
 *   09.1 math-prime-numbers — Prime Numbers: The Atoms of Arithmetic
 */
import type { KnowledgeTopic } from '../../types'

export const mathematicsUnifiedCh09: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'math-prime-numbers',
    title: 'Prime Numbers: The Atoms of Arithmetic',
    domain: 'Mathematics',
    field: 'Number Theory',
    branch: 'Pure Mathematics',
    tier: 'core',
    concepts: [
      'What makes a number prime',
      'The Fundamental Theorem of Arithmetic',
      'Euclid\u2019s proof that primes never end',
      'The distribution of primes',
      'Easy to test, hard to factor',
      'Primes as the locks of modern cryptography',
    ],
    words: 1246,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Primes are the numbers that refuse to be broken apart: 2, 3, 5, 7, 11, and an endless procession afterward. Every whole number above 1 is either one of them or a product of them, which makes primes the periodic table of arithmetic — atoms from which all other integers are assembled. This topic follows them from that defining property, through Euclid\u2019s dazzling proof that the supply never runs out, to the eerie law governing their spacing and the cryptographic locks their hardness makes possible.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every padlock icon in your browser rests on two enormous secret primes. The same indivisibility that fascinated the ancient Greeks now guards bank transfers and state secrets, and the unresolved riddles of prime spacing — such as the twin prime conjecture — remain among the deepest open problems in mathematics.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A prime is an integer greater than 1 whose only positive divisors are 1 and itself; every integer above 1 that is not prime is composite, a product of smaller factors. The definition pointedly excludes 1 so that factorizations stay unique — otherwise 6 could be 2·3, 1·2·3, 1·1·2·3, forever. Primality lives in multiplication rather than addition: no pattern of digits reliably announces it, which is why primality feels less like a property and more like a dare.',
      },
      {
        kind: 'para',
        text: 'The Fundamental Theorem of Arithmetic states that every integer above 1 factors into primes in exactly one way, up to reordering: 60 is 2·2·3·5 and nothing else. Uniqueness follows from Euclid\u2019s lemma — if a prime divides a product, it must divide one of the factors — and it is what elevates primes from building blocks to atoms. Reducing fractions, simplifying radicals, and computing greatest common divisors all quietly invoke this one canonical factorization.',
      },
      {
        kind: 'para',
        text: 'Around 300 BCE, Euclid proved the primes never end. Take any finite list p₁, p₂, …, p_k, form the number N = p₁p₂⋯p_k + 1, and observe that dividing N by any prime on the list leaves remainder 1 — so some prime outside the list divides N. The argument never exhibits the new prime; it merely guarantees one exists, and repeating that guarantee forever is precisely the infinity of the primes.',
      },
      {
        kind: 'para',
        text: 'Primes thin out as numbers grow — 25 of them live below 100, yet near one million only about one integer in 14 is prime, and near one billion only one in 21 — but they thin lawfully. The prime number theorem, proved in 1896, says the count π(x) of primes up to x is asymptotic to x/ln x. Individual primes arrive without rhythm; their population obeys a smooth rule that could only be discovered with calculus.',
      },
      {
        kind: 'para',
        text: 'Deciding whether a number is prime is genuinely easy: randomized tests such as Miller–Rabin settle it in polynomial time, and the deterministic AKS test proves primality outright. Factoring a composite is another story — no known classical algorithm splits a 600-digit semiprime in feasible time. This asymmetry, certified easy in one direction and believed hard in the other, is the most consequential fact about primes in the modern era.',
      },
      {
        kind: 'para',
        text: 'RSA encryption exploits that asymmetry directly: multiply two secret 300-digit primes and publish the 600-digit product as a public key. Anyone may use it to scramble a message; only the holder of the factors can decode. Quantum computers running Shor\u2019s algorithm would break the scheme — which is why post-quantum cryptography, built on different hard problems, is already being standardized and deployed.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Unique factorization',
        latex: 'n = p_1^{a_1}\\, p_2^{a_2} \\cdots p_k^{a_k}',
        meaning: 'Every integer above 1 is a product of prime powers in exactly one way — the Fundamental Theorem of Arithmetic.',
      },
      {
        kind: 'formula',
        name: 'Euclid\u2019s construction',
        latex: 'N = p_1 p_2 \\cdots p_k + 1',
        meaning: 'N is divisible by none of the listed primes, so every finite list of primes is incomplete.',
      },
      {
        kind: 'formula',
        name: 'Prime number theorem',
        latex: '\\pi(x) \\sim \\frac{x}{\\ln x}',
        meaning: 'The prime-counting function grows like x divided by its natural logarithm; near x, primes have density about 1/ln x.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: decide whether 91 is prime, and if it is not, produce its prime factorization.',
          'Recall the governing idea: a composite n must have a prime factor no larger than √n, so trial division by the primes up to √91 ≈ 9.5 — namely 2, 3, 5, and 7 — is decisive.',
          'Apply: 91 is odd, its digit sum 10 rules out 3, and it does not end in 0 or 5; but 91 ÷ 7 = 13 exactly, and 13 is itself prime.',
          'State the result: 91 is composite, with the unique factorization 7 × 13 — both factors sit close to √91, which is exactly where trial division is slowest.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Public-key cryptography: RSA keys are semiprimes whose factorization must stay infeasible.',
          'Hash tables use prime bucket counts so hash values spread evenly and collisions stay rare.',
          'Modular arithmetic modulo large primes underlies the elliptic-curve cryptography in every modern phone.',
          'Pseudorandom number generators and error-correcting codes are built on the arithmetic of prime fields.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Two classic slips: forgetting that 1 is not prime — admitting it would wreck unique factorization — and overlooking 2, the only even prime, when an argument assumes oddness. Trial-dividing up to n instead of √n wastes astronomical effort, since 997 needs testing only against primes up to 31. And primes are not rare curiosities: near a billion, one integer in 21 is prime.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Prime', def: 'An integer greater than 1 divisible only by 1 and itself.' },
          { term: 'Composite', def: 'An integer greater than 1 that factors into smaller integers greater than 1.' },
          { term: 'Fundamental Theorem of Arithmetic', def: 'The guarantee that prime factorization exists and is unique for every integer above 1.' },
          { term: 'Sieve of Eratosthenes', def: 'An algorithm that finds all primes up to a bound by crossing out multiples of each prime discovered.' },
          { term: 'Semiprime', def: 'A product of exactly two primes — the shape of an RSA modulus.' },
          { term: 'Coprime', def: 'Sharing no prime factor, so the greatest common divisor is 1.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Trial division for the primality of n may stop at √n because:',
            options: ['√n is always prime itself', 'A composite n must have a prime factor no larger than √n', 'Factors above √n are extremely rare', 'Primes cluster near square roots'],
            answer: 1,
            explain: 'If n = ab with both factors above √n, their product would exceed n; the smaller factor — or a prime dividing it — is at most √n.',
          },
          {
            q: 'The unique prime factorization of 60 is:',
            options: ['2² · 3 · 5', '2 · 3 · 10', '4 · 15', '2 · 5 · 6'],
            answer: 0,
            explain: '10, 15, 4, and 6 are themselves composite, so those lists are not prime factorizations; uniqueness forces 2² · 3 · 5.',
          },
          {
            q: 'Euclid\u2019s proof that the primes are infinite works by:',
            options: ['Exhibiting one prime larger than any given bound', 'Counting the primes below a huge number', 'Showing any finite list of primes misses at least one prime', 'Induction over the composite numbers'],
            answer: 2,
            explain: 'The number (product of the listed primes) + 1 is divisible by none of them, so it must harbor a prime outside the list.',
          },
          {
            q: 'The security of RSA encryption rests on:',
            options: ['The apparent hardness of factoring large semiprimes', 'The scarcity of primes near a billion', 'The prime number theorem', 'Modular addition being difficult to reverse'],
            answer: 0,
            explain: 'Multiplying two big primes is fast, yet no known classical algorithm factors their 600-digit product in feasible time.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: divisibility, greatest common divisors, and modular arithmetic. Follow with Fermat\u2019s little theorem and modular exponentiation, then the RSA cryptosystem in full, the Riemann hypothesis and its surprising grip on prime spacing, and analytic number theory, where calculus meets the integers.',
        tone: 'path',
      },
    ],
  },
]
