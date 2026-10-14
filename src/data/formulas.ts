// Curated formula sheet — key formulas, identities and facts per chapter.
// Used by the printable Formula Sheet view.
//
// Sources: Rosen, "Discrete Mathematics and Its Applications", 8th Edition,
// Silberschatz/Galvin/Gagne, "Operating System Concepts", 10th Edition,
// Stewart, Calculus: Early Transcendentals, 9th Edition,
// the Electronics Master Library (Hughes 12e + Nilsson 12e + AoE 3e),
// Feynman Lectures on Physics (Vols I–III),
// Flanagan, JavaScript: The Definitive Guide, 7th Edition,
// Mano, Digital Logic and Computer Design,
// Cormen et al., Introduction to Algorithms, 3rd Edition,
// Halliday/Resnick/Walker, Fundamentals of Physics, 11th Edition,
// Stroustrup, The C++ Programming Language, 4th Edition.
// Entries are mined from the master content files; `section` is the real
// section number where the formula appears. `formula` is a compact Unicode
// fallback (search/export); when `latex` is present the sheet renders the
// expression with KaTeX (proper superscripts, subscripts and fractions).

export interface FormulaEntry {
  chapterId: string // 'rosen-ch1' ... 'rosen-ch13' | 'osc-ch1' ... 'osc-ch15'
  section: string // e.g. '1.3' — the section number where it appears
  name: string // short name, e.g. "De Morgan's laws"
  formula: string // the formula itself in Unicode math (fallback / search text)
  note?: string // optional one-line usage hint (max ~90 chars)
  latex?: string // KaTeX source — rendered by the formula sheet when present
  derive?: string[] // step-by-step derivation lines; $...$ math allowed per step
}

import { OS_FORMULAS } from './os-formulas'
import { CALC_FORMULAS } from './calc-formulas'
import { JS_FORMULAS } from './js-formulas'
import { MANO_FORMULAS } from './mano-formulas'
import { CLRS_FORMULAS } from './clrs-formulas'
import { HALL_FORMULAS } from './hall-formulas'
import { YOUNG_FORMULAS } from './young-formulas'
import { EWEN_FORMULAS } from './ewen-formulas'
import { COLETTA_FORMULAS } from './coletta-formulas'
import { CPP_FORMULAS } from './cpp-formulas'
import { WEBDEV_FORMULAS } from './webdev-formulas'
import { EXAM_FORMULAS } from './exam-formulas'
import { MISSING_FORMULAS } from './missing-formulas'
import { elecCh1Formulas } from './content/elec-ch01'
import { elecCh2Formulas } from './content/elec-ch02'
import { elecCh3Formulas } from './content/elec-ch03'
import { elecCh4Formulas } from './content/elec-ch04'
import { elecCh5Formulas } from './content/elec-ch05'
import { elecCh6Formulas } from './content/elec-ch06'
import { elecCh7Formulas } from './content/elec-ch07'
import { elecCh8Formulas } from './content/elec-ch08'
import { elecCh9Formulas } from './content/elec-ch09'
import { elecCh10Formulas } from './content/elec-ch10'
import { elecCh11Formulas } from './content/elec-ch11'
import { elecCh12Formulas } from './content/elec-ch12'
import { elecCh13Formulas } from './content/elec-ch13'
import { elecCh14Formulas } from './content/elec-ch14'
import { elecCh15Formulas } from './content/elec-ch15'
import { elecCh16Formulas } from './content/elec-ch16'
import { elecCh17Formulas } from './content/elec-ch17'
import { elecCh18Formulas } from './content/elec-ch18'
import { elecCh19Formulas } from './content/elec-ch19'
import { elecCh20Formulas } from './content/elec-ch20'
import { physCh1Formulas } from './content/phys-ch01'
import { physCh2Formulas } from './content/phys-ch02'
import { physCh3Formulas } from './content/phys-ch03'
import { physCh4Formulas } from './content/phys-ch04'
import { physCh5Formulas } from './content/phys-ch05'
import { physCh6Formulas } from './content/phys-ch06'
import { physCh7Formulas } from './content/phys-ch07'
import { physCh8Formulas } from './content/phys-ch08'
import { physCh9Formulas } from './content/phys-ch09'
import { physCh10Formulas } from './content/phys-ch10'
import { physCh11Formulas } from './content/phys-ch11'
import { physCh12Formulas } from './content/phys-ch12'
import { physCh13Formulas } from './content/phys-ch13'
import { physCh14Formulas } from './content/phys-ch14'
import { physCh15Formulas } from './content/phys-ch15'

export const FORMULAS: FormulaEntry[] = [
  // ============================ Chapter 1 — Logic and Proofs ============================
  {
    chapterId: "rosen-ch1",
    section: "1.1",
    name: "Conditional Truth Condition",
    formula: "p → q is false only when p = T and q = F",
    note: "the single false row of the → truth table",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.3",
    name: "De Morgan's Laws",
    formula: "¬(p ∧ q) ≡ ¬p ∨ ¬q ; ¬(p ∨ q) ≡ ¬p ∧ ¬q",
    note: "negation swaps ∧ with ∨ — the most-used laws of the chapter",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.3",
    name: "Distributive Laws",
    formula: "p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r) ; p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.3",
    name: "Implication Law",
    formula: "p → q ≡ ¬p ∨ q",
    note: "an implication is an or in disguise",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.3",
    name: "Contrapositive Law",
    formula: "p → q ≡ ¬q → ¬p",
    note: "converse q → p and inverse ¬p → ¬q are NOT equivalent",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.3",
    name: "Biconditional Expansion",
    formula: "p ↔ q ≡ (p → q) ∧ (q → p) ≡ (p ∧ q) ∨ (¬p ∧ ¬q)",
    note: "also p ↔ q ≡ ¬(p ⊕ q)",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.3",
    name: "Absorption Laws",
    formula: "p ∨ (p ∧ q) ≡ p ; p ∧ (p ∨ q) ≡ p",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.3",
    name: "Negation Laws",
    formula: "p ∨ ¬p ≡ T ; p ∧ ¬p ≡ F",
    note: "excluded middle and contradiction; also ¬¬p ≡ p",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.4",
    name: "Quantifier Negation",
    formula: "¬∀x P(x) ≡ ∃x ¬P(x) ; ¬∃x P(x) ≡ ∀x ¬P(x)",
    note: "negation flips the quantifier and negates the predicate",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.5",
    name: "Negating Nested Quantifiers",
    formula: "¬∀x∃y P(x, y) ≡ ∃x∀y ¬P(x, y)",
    note: "flip each quantifier left to right, then negate the predicate",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.6",
    name: "Modus Ponens",
    formula: "p, p → q ∴ q",
    note: "affirm the antecedent — the fundamental inference rule",
  },
  {
    chapterId: "rosen-ch1",
    section: "1.6",
    name: "Modus Tollens",
    formula: "¬q, p → q ∴ ¬p",
    note: "deny the consequent",
  },

  // ===================== Chapter 2 — Sets, Functions, Sequences, Matrices =====================
  {
    chapterId: "rosen-ch2",
    section: "2.1",
    name: "Power Set Size",
    formula: "|P(A)| = 2ⁿ when |A| = n",
    note: "subsets correspond to bit strings of length n",
  },
  {
    chapterId: "rosen-ch2",
    section: "2.2",
    name: "Set De Morgan's Laws",
    formula: "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ ; (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ",
  },
  {
    chapterId: "rosen-ch2",
    section: "2.2",
    name: "Set Distributive Laws",
    formula: "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) ; A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)",
  },
  {
    chapterId: "rosen-ch2",
    section: "2.2",
    name: "Set Absorption Laws",
    formula: "A ∪ (A ∩ B) = A ; A ∩ (A ∪ B) = A",
  },
  {
    chapterId: "rosen-ch2",
    section: "2.2",
    name: "Difference Laws",
    formula: "A − B = A ∩ Bᶜ ; A ⊕ B = (A ∪ B) − (A ∩ B)",
    note: "membership tables work like truth tables",
  },
  {
    chapterId: "rosen-ch2",
    section: "2.3",
    name: "Floor And Ceiling",
    formula: "⌊x⌋ = n iff n ≤ x < n + 1 ; ⌈x⌉ = n iff n − 1 < x ≤ n",
    note: "also ⌊x + n⌋ = ⌊x⌋ + n (n ∈ ℤ) and ⌊−x⌋ = −⌈x⌉",
  },
  {
    chapterId: "rosen-ch2",
    section: "2.3",
    name: "Logarithm Laws",
    formula: "log_b(xy) = log_b x + log_b y ; log_b(xʸ) = y·log_b x",
    latex: "\\log_b(xy) = \\log_b x + \\log_b y \\quad ; \\quad \\log_b(x^y) = y \\cdot \\log_b x",
    note: "change of base: log_a x = log_b x / log_b a",
  },
  {
    chapterId: "rosen-ch2",
    section: "2.4",
    name: "Sum Of First n Integers",
    formula: "∑ₖ₌₁ⁿ k = n(n + 1)/2",
    latex: "\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}",
    note: "Gauss: 1 + 2 + ⋯ + 100 = 5050",
    derive: [
      "Write the sum twice, once in each order: $S = 1 + 2 + \\cdots + n$ and $S = n + (n-1) + \\cdots + 1$",
      "Add column by column — every column sums to $n + 1$, and there are $n$ columns: $2S = n(n+1)$",
      "Divide by $2$: $S = \\frac{n(n+1)}{2}$",
    ],
  },
  {
    chapterId: "rosen-ch2",
    section: "2.4",
    name: "Sums Of Powers",
    formula: "∑ₖ₌₁ⁿ k² = n(n + 1)(2n + 1)/6 ; ∑ₖ₌₁ⁿ k³ = [n(n + 1)/2]²",
    latex: "\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6} \\quad ; \\quad \\sum_{k=1}^{n} k^3 = \\left[ \\frac{n(n+1)}{2} \\right]^2",
    note: "the cube sum is the square of the linear sum",
    derive: [
      "Telescoping identity: $(k+1)^{3} - k^{3} = 3k^{2} + 3k + 1$",
      "Sum over $k = 1, \\ldots, n$: the left side collapses to $(n+1)^{3} - 1$, so $(n+1)^{3} - 1 = 3\\sum_{k=1}^{n}k^{2} + 3\\sum_{k=1}^{n}k + n$",
      "Insert $\\sum k = \\frac{n(n+1)}{2}$ and solve: $\\sum_{k=1}^{n} k^{2} = \\frac{n(n+1)(2n+1)}{6}$",
      "One power up, $(k+1)^{4} - k^{4} = 4k^{3} + 6k^{2} + 4k + 1$, the same way gives $\\sum_{k=1}^{n} k^{3} = \\left[\\frac{n(n+1)}{2}\\right]^{2}$",
    ],
  },
  {
    chapterId: "rosen-ch2",
    section: "2.4",
    name: "Geometric Series",
    formula: "∑ₖ₌₀ⁿ a·rᵏ = a(rⁿ⁺¹ − 1)/(r − 1), r ≠ 1",
    latex: "\\sum_{k=0}^{n} a r^k = \\frac{a(r^{n+1} - 1)}{r - 1}, \\ r \\ne 1",
    note: "infinite sum: a/(1 − r) for |r| < 1",
    derive: [
      "Partial sum: $S = a + ar + ar^{2} + \\cdots + ar^{n}$",
      "Multiply by $r$: $rS = ar + ar^{2} + \\cdots + ar^{n+1}$",
      "Subtract — everything in the middle cancels: $S - rS = a - ar^{n+1}$",
      "Solve for $S$ ($r \\ne 1$): $S = \\frac{a(r^{n+1} - 1)}{r - 1}$",
    ],
  },
  {
    chapterId: "rosen-ch2",
    section: "2.5",
    name: "Cantor's Theorem",
    formula: "|P(S)| > |S| for every set S",
    note: "diagonalization also proves ℝ is uncountable",
  },

  // ============================ Chapter 3 — Algorithms ============================
  {
    chapterId: "rosen-ch3",
    section: "3.2",
    name: "Big-O Definition",
    formula: "f is O(g) ⇔ ∃C, k: |f(x)| ≤ C|g(x)| for all x > k",
    note: "C and k are the witnesses",
  },
  {
    chapterId: "rosen-ch3",
    section: "3.2",
    name: "Big-Omega Definition",
    formula: "f is Ω(g) ⇔ ∃C, k: |f(x)| ≥ C|g(x)| for all x > k",
    note: "f is Ω(g) iff g is O(f)",
  },
  {
    chapterId: "rosen-ch3",
    section: "3.2",
    name: "Big-Theta Definition",
    formula: "f is Θ(g) ⇔ C₁|g(x)| ≤ |f(x)| ≤ C₂|g(x)| for x > k",
    note: "same growth rate up to constant factors",
  },
  {
    chapterId: "rosen-ch3",
    section: "3.2",
    name: "Polynomial Theorem",
    formula: "degree-n polynomial with leading coefficient aₙ > 0 is Θ(xⁿ)",
    note: "drop all but the leading term",
  },
  {
    chapterId: "rosen-ch3",
    section: "3.2",
    name: "Growth Ladder",
    formula: "1 ≺ log n ≺ √n ≺ n ≺ n log n ≺ n² ≺ n³ ≺ 2ⁿ ≺ n!",
    latex: "1 \\prec \\log n \\prec \\sqrt{n} \\prec n \\prec n \\log n \\prec n^2 \\prec n^3 \\prec 2^n \\prec n!",
    note: "each class eventually dominates the previous one",
  },
  {
    chapterId: "rosen-ch3",
    section: "3.2",
    name: "Combining Big-O",
    formula: "f₁ + f₂ is O(max(g₁, g₂)) ; f₁·f₂ is O(g₁·g₂)",
  },
  {
    chapterId: "rosen-ch3",
    section: "3.3",
    name: "Linear Search Complexity",
    formula: "worst case Θ(n) ; average (n + 1)/2 comparisons",
    latex: "\\text{worst } \\Theta(n) \\quad ; \\quad \\text{avg } \\frac{n+1}{2} \\text{ comparisons}",
    note: "target present at a uniformly random position",
  },
  {
    chapterId: "rosen-ch3",
    section: "3.3",
    name: "Binary Search Complexity",
    formula: "worst case Θ(log n) ; ≤ 2·log₂ n + 1 comparisons",
    latex: "\\text{worst } \\Theta(\\log n) \\quad ; \\quad \\le 2 \\log_2 n + 1 \\text{ comparisons}",
    note: "requires a sorted list",
  },
  {
    chapterId: "rosen-ch3",
    section: "3.3",
    name: "Simple Sort Complexity",
    formula: "bubble: exactly n(n − 1)/2 comparisons ; insertion: ≤ n(n − 1)/2",
    latex: "\\text{bubble: } \\frac{n(n-1)}{2} \\text{ exactly} \\quad ; \\quad \\text{insertion: } \\le \\frac{n(n-1)}{2}",
    note: "insertion sort needs only n − 1 comparisons on sorted input",
  },
  {
    chapterId: "rosen-ch3",
    section: "3.3",
    name: "Euclid Complexity",
    formula: "gcd(a, b) needs O(log b) divisions (a ≥ b > 0)",
    note: "worst case: consecutive Fibonacci numbers (Lamé's theorem)",
  },

  // ============================ Chapter 4 — Number Theory and Cryptography ============================
  {
    chapterId: "rosen-ch4",
    section: "4.1",
    name: "Division Algorithm",
    formula: "a = d·q + r with 0 ≤ r < d, q and r unique",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.1",
    name: "Congruence Definition",
    formula: "a ≡ b (mod m) ⇔ m | (a − b)",
    note: "an equivalence relation: reflexive, symmetric, transitive",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.1",
    name: "Congruence Arithmetic",
    formula: "a ≡ b, c ≡ d (mod m) ⇒ a ± c ≡ b ± d and ac ≡ bd (mod m)",
    note: "also aᵏ ≡ bᵏ (mod m); division is not preserved",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.3",
    name: "GCD–LCM Identity",
    formula: "gcd(a, b) · lcm(a, b) = a·b",
    note: "from factorizations: gcd takes min exponents, lcm takes max",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.3",
    name: "Euclidean Algorithm",
    formula: "gcd(a, b) = gcd(b, a mod b), gcd(a, 0) = a",
    note: "iterate until the remainder is 0",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.3",
    name: "Bézout's Theorem",
    formula: "sa + tb = gcd(a, b) for some integers s, t",
    note: "the gcd is the smallest positive linear combination of a and b",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.3",
    name: "Unique Factorization",
    formula: "every n ≥ 2 factors as n = p₁p₂⋯pₖ uniquely (up to order)",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.4",
    name: "Linear Congruence Solvability",
    formula: "ax ≡ b (mod m) solvable ⇔ gcd(a, m) | b; then d solutions",
    note: "d = gcd(a, m); divide through by d and invert a/d mod m/d",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.4",
    name: "Modular Inverse",
    formula: "ā·a ≡ 1 (mod m) exists ⇔ gcd(a, m) = 1",
    note: "unique mod m; found via the extended Euclidean algorithm",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.4",
    name: "Chinese Remainder Theorem",
    formula: "pairwise coprime mᵢ: x ≡ bᵢ (mod mᵢ) has a unique solution mod m₁⋯mₖ",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.4",
    name: "Fermat's Little Theorem",
    formula: "aᵖ⁻¹ ≡ 1 (mod p) for prime p with p ∤ a",
    note: "equivalently aᵖ ≡ a (mod p); reduce exponents mod p − 1",
  },
  {
    chapterId: "rosen-ch4",
    section: "4.6",
    name: "RSA Scheme",
    formula: "n = p·q ; c = mᵉ mod n ; m = cᵈ mod n ; e·d ≡ 1 (mod (p−1)(q−1))",
    note: "public key (n, e), private d; security rests on factoring n",
  },

  // ============================ Chapter 5 — Induction and Recursion ============================
  {
    chapterId: "rosen-ch5",
    section: "5.1",
    name: "Mathematical Induction",
    formula: "P(1) ∧ ∀k(P(k) → P(k+1)) ⇒ ∀n P(n)",
    note: "basis step plus inductive step topples all the dominoes",
  },
  {
    chapterId: "rosen-ch5",
    section: "5.1",
    name: "Sum Of First n Odd Numbers",
    formula: "1 + 3 + 5 + ⋯ + (2n − 1) = n²",
  },
  {
    chapterId: "rosen-ch5",
    section: "5.1",
    name: "Factorial Beats Exponential",
    formula: "2ⁿ < n! for all n ≥ 4",
    note: "classic first example of a shifted induction base",
  },
  {
    chapterId: "rosen-ch5",
    section: "5.2",
    name: "Strong Induction",
    formula: "P(b) ∧ ∀k≥b(∀j<k P(j) → P(k)) ⇒ ∀n≥b P(n)",
    note: "may use every earlier case, not just the previous one",
  },
  {
    chapterId: "rosen-ch5",
    section: "5.2",
    name: "Well-Ordering Property",
    formula: "every nonempty subset of ℕ has a least element",
    note: "equivalent to induction; powers least-counterexample proofs",
  },
  {
    chapterId: "rosen-ch5",
    section: "5.3",
    name: "Factorial Recurrence",
    formula: "0! = 1 ; n! = n·(n − 1)! for n ≥ 1",
  },
  {
    chapterId: "rosen-ch5",
    section: "5.3",
    name: "Fibonacci Recurrence",
    formula: "f₀ = 0, f₁ = 1 ; fₙ = fₙ₋₁ + fₙ₋₂ for n ≥ 2",
    note: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …",
  },
  {
    chapterId: "rosen-ch5",
    section: "5.3",
    name: "Bit Strings Without 00",
    formula: "aₙ = aₙ₋₁ + aₙ₋₂ with a₁ = 2, a₂ = 3 ⇒ aₙ = fₙ₊₂",
    note: "counts length-n bit strings with no two consecutive 0s",
  },
  {
    chapterId: "rosen-ch5",
    section: "5.4",
    name: "Merge Sort Recurrence",
    formula: "T(n) = 2T(n/2) + n ⇒ T(n) = Θ(n log n)",
    latex: "T(n) = 2\\,T\\!\\left(\\tfrac{n}{2}\\right) + n \\implies T(n) = \\Theta(n \\log n)",
    note: "asymptotically optimal for comparison sorting",
  },
  {
    chapterId: "rosen-ch5",
    section: "5.5",
    name: "Loop Invariant Rule",
    formula: "while c: S is correct if {I ∧ c} S {I} and I ∧ ¬c → q",
    note: "I holds before every iteration and at loop exit",
  },

  // ============================ Chapter 6 — Counting ============================
  {
    chapterId: "rosen-ch6",
    section: "6.1",
    name: "Product Rule",
    formula: "|A₁ × ⋯ × Aₙ| = |A₁|⋯|Aₙ|",
    note: "n-stage procedure with nᵢ choices per stage gives n₁⋯nₙ ways",
  },
  {
    chapterId: "rosen-ch6",
    section: "6.1",
    name: "Sum Rule",
    formula: "A ∩ B = ∅ ⇒ |A ∪ B| = |A| + |B|",
  },
  {
    chapterId: "rosen-ch6",
    section: "6.1",
    name: "Subtraction Rule",
    formula: "|A ∪ B| = |A| + |B| − |A ∩ B|",
    note: "inclusion–exclusion for two sets",
  },
  {
    chapterId: "rosen-ch6",
    section: "6.2",
    name: "Generalized Pigeonhole Principle",
    formula: "N objects in k boxes ⇒ some box has ≥ ⌈N/k⌉ objects",
    latex: "N \\text{ objects, } k \\text{ boxes} \\implies \\exists \\text{ box with } \\ge \\left\\lceil \\tfrac{N}{k} \\right\\rceil \\text{ objects}",
    note: "k + 1 objects in k boxes forces two into one box",
    derive: [
      "Suppose not: every one of the $k$ boxes holds at most $\\lceil N/k\\rceil - 1$ objects",
      "But $\\lceil N/k\\rceil - 1 < N/k$, so together the boxes hold fewer than $k \\cdot \\frac{N}{k} = N$ objects",
      "Contradiction — all $N$ objects are placed — so some box holds at least $\\lceil N/k\\rceil$",
    ],
  },
  {
    chapterId: "rosen-ch6",
    section: "6.3",
    name: "r-Permutations",
    formula: "P(n, r) = n!/(n − r)! = n(n − 1)⋯(n − r + 1)",
    latex: "P(n, r) = \\frac{n!}{(n-r)!} = n(n-1)\\cdots(n-r+1)",
    note: "ordered arrangements; P(n, n) = n!",
  },
  {
    chapterId: "rosen-ch6",
    section: "6.3",
    name: "r-Combinations",
    formula: "C(n, r) = n!/(r!·(n − r)!)",
    latex: "C(n, r) = \\binom{n}{r} = \\frac{n!}{r!\\,(n-r)!}",
    note: "unordered selections; symmetry C(n, r) = C(n, n − r)",
  },
  {
    chapterId: "rosen-ch6",
    section: "6.4",
    name: "Binomial Theorem",
    formula: "(x + y)ⁿ = ∑ₖ₌₀ⁿ C(n, k)·xⁿ⁻ᵏ·yᵏ",
    latex: "(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^{k}",
    note: "C(n, k) counts choosing which k of the n factors give y",
    derive: [
      "Expand the product $(x+y)(x+y)\\cdots(x+y)$ of $n$ identical factors term by term: from each factor take either $x$ or $y$",
      "A monomial $x^{n-k}y^{k}$ appears once per choice of which $k$ factors donate the $y$",
      "There are $\\binom{n}{k}$ such choices",
      "Collect like monomials: $(x+y)^{n} = \\sum_{k=0}^{n}\\binom{n}{k}x^{n-k}y^{k}$",
    ],
  },
  {
    chapterId: "rosen-ch6",
    section: "6.4",
    name: "Pascal's Identity",
    formula: "C(n + 1, k) = C(n, k − 1) + C(n, k)",
    note: "each interior triangle entry is the sum of the two above",
  },
  {
    chapterId: "rosen-ch6",
    section: "6.4",
    name: "Binomial Sum",
    formula: "∑ₖ₌₀ⁿ C(n, k) = 2ⁿ",
    latex: "\\sum_{k=0}^{n} \\binom{n}{k} = 2^n",
    note: "counts all subsets of an n-element set",
  },
  {
    chapterId: "rosen-ch6",
    section: "6.4",
    name: "Vandermonde's Identity",
    formula: "C(m + n, r) = ∑ⱼ C(m, r − j)·C(n, j)",
    latex: "\\binom{m+n}{r} = \\sum_j \\binom{m}{r-j} \\binom{n}{j}",
    note: "special case: C(2n, n) = ∑ⱼ C(n, j)²",
    derive: [
      "Form a committee of $r$ people from $m$ women and $n$ men, and count the committees two ways",
      "Directly: $\\binom{m+n}{r}$ committees",
      "Group by the number $j$ of men: $\\binom{m}{r-j}\\binom{n}{j}$ committees with exactly $j$ men; sum over $j$",
      "The two counts agree: $\\binom{m+n}{r} = \\sum_{j}\\binom{m}{r-j}\\binom{n}{j}$",
    ],
  },
  {
    chapterId: "rosen-ch6",
    section: "6.5",
    name: "Permutations With Repetition",
    formula: "nʳ arrangements of r objects chosen from n types",
  },
  {
    chapterId: "rosen-ch6",
    section: "6.5",
    name: "Combinations With Repetition",
    formula: "C(n + r − 1, r) multisets of size r from n types",
    note: "stars and bars: r stars separated by n − 1 bars",
  },
  {
    chapterId: "rosen-ch6",
    section: "6.5",
    name: "Multiset Permutations",
    formula: "n!/(n₁!·n₂!⋯nₖ!) with n = n₁ + ⋯ + nₖ",
    latex: "\\frac{n!}{n_1!\\,n_2!\\cdots n_k!}, \\quad n = n_1 + n_2 + \\cdots + n_k",
    note: "anagram counting; a multinomial coefficient",
  },

  // ============================ Chapter 7 — Discrete Probability ============================
  {
    chapterId: "rosen-ch7",
    section: "7.1",
    name: "Laplace Probability",
    formula: "p(E) = |E|/|S| for equally likely outcomes",
    latex: "p(E) = \\frac{|E|}{|S|} \\text{ for equally likely outcomes}",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.1",
    name: "Complement Rule",
    formula: "p(Ē) = 1 − p(E)",
    note: "p(at least one) = 1 − p(none)",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.1",
    name: "Union Rule",
    formula: "p(E ∪ F) = p(E) + p(F) − p(E ∩ F)",
    note: "reduces to p(E) + p(F) when mutually exclusive",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.2",
    name: "Conditional Probability",
    formula: "p(E | F) = p(E ∩ F)/p(F), p(F) > 0",
    latex: "p(E \\mid F) = \\frac{p(E \\cap F)}{p(F)}, \\quad p(F) > 0",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.2",
    name: "Product Rule For Events",
    formula: "p(E ∩ F) = p(F)·p(E | F)",
    note: "chains over n events as a product of conditionals",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.2",
    name: "Independence",
    formula: "E, F independent ⇔ p(E ∩ F) = p(E)·p(F)",
    note: "equivalent to p(E | F) = p(E) when p(F) > 0",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.2",
    name: "Binomial Distribution",
    formula: "b(k; n, p) = C(n, k)·pᵏ·qⁿ⁻ᵏ, q = 1 − p",
    note: "exactly k successes in n independent Bernoulli trials",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.3",
    name: "Bayes' Theorem",
    formula: "p(F | E) = p(E | F)·p(F)/p(E)",
    latex: "p(F \\mid E) = \\frac{p(E \\mid F)\\,p(F)}{p(E)}",
    note: "partition form: p(Fᵢ|E) = p(E|Fᵢ)p(Fᵢ)/Σⱼ p(E|Fⱼ)p(Fⱼ)",
    derive: [
      "Product rule: $p(E \\cap F) = p(F)\\,p(E \\mid F)$ — and, swapping the roles of $E$ and $F$, also $= p(E)\\,p(F \\mid E)$",
      "Equate the two expressions: $p(E)\\,p(F \\mid E) = p(F)\\,p(E \\mid F)$",
      "Divide by $p(E) \\ne 0$: $p(F \\mid E) = \\frac{p(E \\mid F)\\,p(F)}{p(E)}$",
    ],
  },
  {
    chapterId: "rosen-ch7",
    section: "7.4",
    name: "Expected Value",
    formula: "E(X) = ∑ₛ p(s)·X(s) = ∑ᵣ r·p(X = r)",
    latex: "E(X) = \\sum_{s \\in S} p(s)\\,X(s) = \\sum_r r\\,p(X = r)",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.4",
    name: "Linearity Of Expectation",
    formula: "E(X₁ + ⋯ + Xₙ) = E(X₁) + ⋯ + E(Xₙ)",
    note: "no independence required; E(aX + b) = a·E(X) + b",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.4",
    name: "Variance Identities",
    formula: "V(X) = E(X²) − E(X)² ; V(aX + b) = a²·V(X)",
    note: "independent X, Y: V(X + Y) = V(X) + V(Y)",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.4",
    name: "Chebyshev's Inequality",
    formula: "p(|X − μ| ≥ r) ≤ V(X)/r² for any r > 0",
    latex: "p(\\,|X - \\mu| \\ge r\\,) \\le \\frac{V(X)}{r^2} \\quad (r > 0)",
    note: "μ = E(X); holds for every distribution",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.4",
    name: "Bernoulli And Binomial Moments",
    formula: "Bernoulli: E = p, V = p·q ; binomial: E = n·p, V = n·p·q",
  },
  {
    chapterId: "rosen-ch7",
    section: "7.4",
    name: "Markov Chain Step",
    formula: "p⁽ⁿ⁺¹⁾ = Tᵗ·p⁽ⁿ⁾",
    note: "T is the transition matrix; each row of T sums to 1",
  },

  // ============================ Chapter 8 — Advanced Counting ============================
  {
    chapterId: "rosen-ch8",
    section: "8.1",
    name: "Compound Interest",
    formula: "aₙ = P·(1 + r)ⁿ for rate r per period",
    note: "from aₙ = (1 + r)·aₙ₋₁ with a₀ = P",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.1",
    name: "Tower Of Hanoi",
    formula: "Hₙ = 2Hₙ₋₁ + 1, H₁ = 1 ⇒ Hₙ = 2ⁿ − 1",
    note: "minimum number of moves for n disks",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.2",
    name: "Characteristic Equation",
    formula: "aₙ = c₁aₙ₋₁ + ⋯ + cₖaₙ₋ₖ → rᵏ − c₁rᵏ⁻¹ − ⋯ − cₖ = 0",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.2",
    name: "Distinct Roots Theorem",
    formula: "distinct roots r₁, …, rₖ ⇒ aₙ = α₁r₁ⁿ + ⋯ + αₖrₖⁿ",
    note: "constants αᵢ are fixed by the initial conditions",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.2",
    name: "Repeated Roots Theorem",
    formula: "root r of multiplicity m ⇒ (α₁ + α₂n + ⋯ + αₘnᵐ⁻¹)·rⁿ",
    note: "double root: aₙ = (α₁ + α₂n)·rⁿ",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.2",
    name: "Particular Solution Trials",
    formula: "F poly deg t → poly deg t ; C·sⁿ → A·sⁿ ; s root mult m → A·nᵐ·sⁿ",
    note: "general solution = homogeneous general + one particular",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.2",
    name: "Binet's Formula",
    formula: "fₙ = (φⁿ − ψⁿ)/√5, φ = (1 + √5)/2, ψ = (1 − √5)/2",
    latex: "f_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}, \\quad \\varphi = \\tfrac{1+\\sqrt{5}}{2}, \\ \\psi = \\tfrac{1-\\sqrt{5}}{2}",
    note: "exact closed form for the Fibonacci numbers",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.3",
    name: "Master Theorem",
    formula: "a > b^d: O(n^(log_b a)) ; a < b^d: O(n^d) ; a = b^d: O(n^d·log n)",
    latex: "a > b^d :\\ O(n^{\\log_b a}) \\quad ; \\quad a < b^d :\\ O(n^d) \\quad ; \\quad a = b^d :\\ O(n^d \\log n)",
    note: "for f(n) = a·f(n/b) + c·n^d with a ≥ 1, b > 1, d ≥ 0",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.4",
    name: "Generating Function Closed Forms",
    formula: "∑xᵏ = 1/(1 − x) ; ∑aᵏxᵏ = 1/(1 − ax) ; ∑(k+1)xᵏ = 1/(1 − x)²",
    latex: "\\sum x^k = \\tfrac{1}{1-x} \\quad ; \\quad \\sum a^k x^k = \\tfrac{1}{1-ax} \\quad ; \\quad \\sum (k{+}1)x^k = \\tfrac{1}{(1-x)^2}",
    note: "also ∑ₖ₌₀ⁿ C(n, k)xᵏ = (1 + x)ⁿ",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.4",
    name: "Extended Binomial Theorem",
    formula: "(1 + x)ᵘ = ∑ₖ C(u, k)·xᵏ, C(u, k) = u(u−1)⋯(u−k+1)/k!",
    latex: "(1+x)^u = \\sum_{k} \\binom{u}{k} x^k, \\quad \\binom{u}{k} = \\frac{u(u-1)\\cdots(u-k+1)}{k!}",
    note: "valid for real u and integer k ≥ 0",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.5",
    name: "Inclusion–Exclusion (3 Sets)",
    formula: "|A∪B∪C| = |A|+|B|+|C| − |A∩B|−|A∩C|−|B∩C| + |A∩B∩C|",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.5",
    name: "Inclusion–Exclusion (n Sets)",
    formula: "|A₁∪⋯∪Aₙ| = ∑|Aᵢ| − ∑ᵢ<ⱼ|Aᵢ∩Aⱼ| + ⋯ + (−1)ⁿ⁺¹|A₁∩⋯∩Aₙ|",
    latex: "\\left| A_1 \\cup \\cdots \\cup A_n \\right| = \\sum_i |A_i| - \\sum_{i<j} |A_i \\cap A_j| + \\cdots + (-1)^{n+1} |A_1 \\cap \\cdots \\cap A_n|",
    note: "complement form counts elements in none of the sets",
    derive: [
      "Two sets already need the correction $|A \\cup B| = |A| + |B| - |A \\cap B|$: pairs get counted twice",
      "For $n$ sets alternate: add the singles $\\sum_{i}|A_{i}|$, subtract the pairs $\\sum_{i<j}|A_{i} \\cap A_{j}|$, add the triples, and so on",
      "Check one element lying in exactly $j \\ge 1$ of the sets: it appears in $\\binom{j}{k}$ of the $k$-fold intersections",
      "Its net count is $\\sum_{k=1}^{j}(-1)^{k+1}\\binom{j}{k} = 1$ — the binomial theorem at $x = -1$",
      "Hence: $|A_{1} \\cup \\cdots \\cup A_{n}| = \\sum_{i}|A_{i}| - \\sum_{i<j}|A_{i} \\cap A_{j}| + \\cdots + (-1)^{n+1}|A_{1} \\cap \\cdots \\cap A_{n}|$",
    ],
  },
  {
    chapterId: "rosen-ch8",
    section: "8.6",
    name: "Onto Function Count",
    formula: "onto m → n: ∑ⱼ₌₀ⁿ (−1)ʲ·C(n, j)·(n − j)ᵐ",
    latex: "\\#\\text{onto} = \\sum_{j=0}^{n} (-1)^j \\binom{n}{j} (n-j)^m",
    note: "equals n!·S(m, n), a Stirling number of the second kind",
  },
  {
    chapterId: "rosen-ch8",
    section: "8.6",
    name: "Derangement Formula",
    formula: "Dₙ = n!·∑ₖ₌₀ⁿ (−1)ᵏ/k! ≈ n!/e",
    latex: "D_n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!} \\approx \\frac{n!}{e}",
    note: "recurrence Dₙ = n·Dₙ₋₁ + (−1)ⁿ; Dₙ/n! → 1/e ≈ 0.368",
  },

  // ============================ Chapter 9 — Relations ============================
  {
    chapterId: "rosen-ch9",
    section: "9.1",
    name: "Counting Relations",
    formula: "relations on n-set: 2^(n²) ; reflexive: 2^(n²−n) ; symmetric: 2^(n(n+1)/2)",
    latex: "\\text{all: } 2^{n^2} \\quad ; \\quad \\\text{reflexive: } 2^{n^2-n} \\quad ; \\quad \\\text{symmetric: } 2^{n(n+1)/2}",
  },
  {
    chapterId: "rosen-ch9",
    section: "9.3",
    name: "Boolean Product",
    formula: "(M₁ ⊙ M₂)ᵢⱼ = ⋁ₖ(mᵢₖ ∧ mₖⱼ)",
    note: "AND replaces ×, OR replaces +; M(S∘R) = M_R ⊙ M_S",
  },
  {
    chapterId: "rosen-ch9",
    section: "9.3",
    name: "Matrix Property Tests",
    formula: "reflexive ⇔ diagonal all 1s ; symmetric ⇔ M = Mᵗ",
    note: "antisymmetric ⇔ no mirrored pair of 1s off the diagonal",
  },
  {
    chapterId: "rosen-ch9",
    section: "9.4",
    name: "Reflexive Closure",
    formula: "R ∪ Δ with Δ = {(a, a) : a ∈ A}",
    note: "Δ is the diagonal (identity) relation",
  },
  {
    chapterId: "rosen-ch9",
    section: "9.4",
    name: "Symmetric Closure",
    formula: "R ∪ R⁻¹",
    note: "add each missing reversed pair",
  },
  {
    chapterId: "rosen-ch9",
    section: "9.4",
    name: "Transitive Closure",
    formula: "R⁺ = R ∪ R² ∪ ⋯ ∪ Rⁿ on an n-element set",
    note: "every longer path repeats a vertex",
  },
  {
    chapterId: "rosen-ch9",
    section: "9.4",
    name: "Warshall Recurrence",
    formula: "Wₖ[i,j] = Wₖ₋₁[i,j] ∨ (Wₖ₋₁[i,k] ∧ Wₖ₋₁[k,j])",
    note: "computes the transitive closure in Θ(n³)",
  },
  {
    chapterId: "rosen-ch9",
    section: "9.5",
    name: "Equivalence Class Dichotomy",
    formula: "[a] = [b] or [a] ∩ [b] = ∅ ; aRb ⇔ [a] = [b]",
  },
  {
    chapterId: "rosen-ch9",
    section: "9.5",
    name: "Classes ↔ Partitions",
    formula: "equivalence classes partition A; every partition defines a relation",
    note: "the two constructions are inverse to each other",
  },
  {
    chapterId: "rosen-ch9",
    section: "9.6",
    name: "Topological Sort",
    formula: "every finite poset has a compatible total order",
    note: "repeatedly delete a minimal element",
  },
  {
    chapterId: "rosen-ch9",
    section: "9.6",
    name: "Lattice",
    formula: "poset in which every pair has both lub(a, b) and glb(a, b)",
    note: "join = lub, meet = glb",
  },

  // ============================ Chapter 10 — Graphs ============================
  {
    chapterId: "rosen-ch10",
    section: "10.2",
    name: "Handshaking Theorem",
    formula: "∑ᵥ deg(v) = 2|E|",
    latex: "\\sum_{v \\in V} \\deg(v) = 2\\,|E|",
    note: "hence an even number of vertices have odd degree",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.2",
    name: "Complete Graph Edges",
    formula: "|E(Kₙ)| = n(n − 1)/2",
    latex: "|E(K_n)| = \\frac{n(n-1)}{2}",
    note: "Kₙ is (n − 1)-regular",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.2",
    name: "Bipartite Characterization",
    formula: "G is bipartite ⇔ G has no circuit of odd length",
    note: "test by 2-coloring levels from any vertex",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.4",
    name: "Adjacency Matrix Powers",
    formula: "(Aʳ)ᵢⱼ = number of paths of length r from vᵢ to vⱼ",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.5",
    name: "Euler Circuit Criterion",
    formula: "connected multigraph has an Euler circuit ⇔ every degree is even",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.5",
    name: "Euler Path Criterion",
    formula: "Euler path without circuit ⇔ exactly two odd-degree vertices",
    note: "the path must start and end at those two vertices",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.5",
    name: "Dirac's Theorem",
    formula: "n ≥ 3 and deg(v) ≥ n/2 for all v ⇒ Hamilton circuit",
    latex: "n \\ge 3 \\text{ and } \\deg(v) \\ge \\tfrac{n}{2} \\implies \\text{Hamilton circuit}",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.5",
    name: "Ore's Theorem",
    formula: "deg(u) + deg(v) ≥ n for all nonadjacent u, v ⇒ Hamilton circuit",
    note: "implies Dirac's condition",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.6",
    name: "Dijkstra Complexity",
    formula: "O(n²) with matrix ; O(|E|·log|V|) with heap + adjacency lists",
    note: "requires nonnegative edge weights",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.7",
    name: "Euler's Formula",
    formula: "v − e + r = 2 for connected planar graphs",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.7",
    name: "Planar Edge Bounds",
    formula: "e ≤ 3v − 6 ; bipartite (triangle-free): e ≤ 2v − 4, v ≥ 3",
    note: "these bounds kill K₅ and K₃,₃",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.8",
    name: "Chromatic Numbers Of Families",
    formula: "χ(Kₙ) = n ; χ(Cₙ) = 2 if n even, 3 if n odd ; bipartite: χ = 2",
  },
  {
    chapterId: "rosen-ch10",
    section: "10.8",
    name: "Four Color Theorem",
    formula: "every planar graph is 4-colorable",
    note: "Appel–Haken 1976, the first computer-assisted proof",
  },

  // ============================ Chapter 11 — Trees ============================
  {
    chapterId: "rosen-ch11",
    section: "11.1",
    name: "Tree Edge Count",
    formula: "a tree with n vertices has exactly n − 1 edges",
    note: "every edge is a bridge; unique simple path joins any two vertices",
  },
  {
    chapterId: "rosen-ch11",
    section: "11.1",
    name: "Full m-Ary Tree Identities",
    formula: "n = i + l ; n = m·i + 1 ; l = (m − 1)·i + 1",
    note: "full binary: n = 2i + 1 and l = i + 1",
  },
  {
    chapterId: "rosen-ch11",
    section: "11.1",
    name: "Level Size Bound",
    formula: "≤ mᵏ vertices at level k ; ≤ (mʰ⁺¹ − 1)/(m − 1) vertices total",
    latex: "\\le m^k \\text{ at level } k \\quad ; \\quad \\le \\frac{m^{h+1} - 1}{m - 1} \\text{ total}",
  },
  {
    chapterId: "rosen-ch11",
    section: "11.1",
    name: "Height Lower Bound",
    formula: "l leaves ⇒ height ≥ ⌈log_m l⌉",
    latex: "l \\text{ leaves} \\implies \\text{height} \\ge \\lceil \\log_m l \\rceil",
    note: "balanced trees attain it — searches cost O(log n)",
  },
  {
    chapterId: "rosen-ch11",
    section: "11.2",
    name: "Decision Tree Lower Bound",
    formula: "distinguishing N outcomes needs ≥ ⌈log_b N⌉ b-ary tests",
    latex: "\\ge \\left\\lceil \\log_b N \\right\\rceil \\text{ tests}",
  },
  {
    chapterId: "rosen-ch11",
    section: "11.2",
    name: "Comparison Sort Lower Bound",
    formula: "height ≥ ⌈log₂ n!⌉ = Ω(n log n)",
    latex: "\\text{height} \\ge \\lceil \\log_2 n! \\rceil = \\Omega(n \\log n)",
    note: "merge sort is asymptotically optimal",
  },
  {
    chapterId: "rosen-ch11",
    section: "11.2",
    name: "Huffman Coding",
    formula: "merge the two least-frequent trees; cost = ∑ wᵢ·dᵢ",
    latex: "\\text{cost} = \\sum_i w_i \\cdot d_i",
    note: "optimal among prefix codes — no codeword prefixes another",
  },
  {
    chapterId: "rosen-ch11",
    section: "11.2",
    name: "BST Search Cost",
    formula: "comparisons = height: O(log n) balanced, O(n) degenerate",
    note: "inorder traversal of a BST yields sorted order",
  },
  {
    chapterId: "rosen-ch11",
    section: "11.4",
    name: "Cayley's Formula",
    formula: "Kₙ has nⁿ⁻² spanning trees",
    note: "K₃: 3, K₄: 16, K₅: 125, K₆: 1296",
  },
  {
    chapterId: "rosen-ch11",
    section: "11.5",
    name: "MST Cut Property",
    formula: "the cheapest edge across any cut belongs to some MST",
    note: "the exchange argument behind Prim and Kruskal",
  },
  {
    chapterId: "rosen-ch11",
    section: "11.5",
    name: "MST Algorithm Complexity",
    formula: "Prim: O(n²) ; Kruskal: O(|E|·log|E|)",
    note: "Kruskal sorts edges; union–find detects circuits",
  },

  // ============================ Chapter 12 — Boolean Algebra ============================
  {
    chapterId: "rosen-ch12",
    section: "12.1",
    name: "Boolean Function Count",
    formula: "2^(2ⁿ) Boolean functions of n variables",
    note: "4 for n = 1, 16 for n = 2, 256 for n = 3",
  },
  {
    chapterId: "rosen-ch12",
    section: "12.1",
    name: "Identity And Domination Laws",
    formula: "x + 0 = x, x·1 = x ; x + 1 = 1, x·0 = 0",
  },
  {
    chapterId: "rosen-ch12",
    section: "12.1",
    name: "Complement Laws",
    formula: "x + x′ = 1 ; x·x′ = 0 ; (x′)′ = x",
    note: "also idempotent: x + x = x ; x·x = x",
  },
  {
    chapterId: "rosen-ch12",
    section: "12.1",
    name: "De Morgan's Laws (Boolean)",
    formula: "(x + y)′ = x′·y′ ; (x·y)′ = x′ + y′",
  },
  {
    chapterId: "rosen-ch12",
    section: "12.1",
    name: "Absorption Laws",
    formula: "x + x·y = x ; x·(x + y) = x",
  },
  {
    chapterId: "rosen-ch12",
    section: "12.1",
    name: "Principle Of Duality",
    formula: "swap + ↔ · and 0 ↔ 1: the dual of every identity is valid",
  },
  {
    chapterId: "rosen-ch12",
    section: "12.2",
    name: "Sum-Of-Products Expansion",
    formula: "F = OR of the minterms where F = 1",
    note: "a minterm is 1 on exactly one of the 2ⁿ input rows",
  },
  {
    chapterId: "rosen-ch12",
    section: "12.2",
    name: "NAND Completeness",
    formula: "x′ = x ↑ x ; x·y = (x↑y) ↑ (x↑y) ; x + y = (x↑x) ↑ (y↑y)",
    note: "NOR too: x′ = x ↓ x, x + y = (x↓y) ↓ (x↓y)",
  },
  {
    chapterId: "rosen-ch12",
    section: "12.3",
    name: "Full Adder",
    formula: "s = x ⊕ y ⊕ z ; carry = x·y + (x ⊕ y)·z",
    note: "two half adders + one OR gate; half adder: s = x ⊕ y, c = x·y",
  },
  {
    chapterId: "rosen-ch12",
    section: "12.4",
    name: "K-Map Grouping",
    formula: "a group of 2ᵏ cells of 1s drops k literals",
    note: "groups wrap map edges; four corners may group",
  },

  // ============================ Chapter 13 — Modeling Computation ============================
  {
    chapterId: "rosen-ch13",
    section: "13.1",
    name: "Kleene Closure",
    formula: "Σ* = Σ⁰ ∪ Σ¹ ∪ Σ² ∪ ⋯ ; |Σⁿ| = |Σ|ⁿ",
  },
  {
    chapterId: "rosen-ch13",
    section: "13.1",
    name: "Language Of A Grammar",
    formula: "L(G) = {w ∈ T* : S ⇒* w}",
  },
  {
    chapterId: "rosen-ch13",
    section: "13.1",
    name: "Chomsky Hierarchy",
    formula: "type 3 ⊂ type 2 ⊂ type 1 ⊂ type 0",
    note: "regular ⊂ context-free ⊂ context-sensitive ⊂ unrestricted",
  },
  {
    chapterId: "rosen-ch13",
    section: "13.3",
    name: "Language Recognized",
    formula: "L(M) = {x : f(s₀, x) ∈ F}",
  },
  {
    chapterId: "rosen-ch13",
    section: "13.4",
    name: "Kleene's Theorem",
    formula: "a set is regular ⇔ some finite-state machine recognizes it",
    note: "regular expressions and FSMs define the same class",
  },
  {
    chapterId: "rosen-ch13",
    section: "13.4",
    name: "Subset Construction",
    formula: "an NFA with |S| states ⇒ equivalent DFA with ≤ 2^|S| states",
    note: "nondeterminism adds convenience, not power",
  },
  {
    chapterId: "rosen-ch13",
    section: "13.4",
    name: "A Non-Regular Language",
    formula: "{0ⁿ1ⁿ : n ≥ 0} is not regular",
    note: "finite states cannot count unboundedly (pumping argument)",
  },
  {
    chapterId: "rosen-ch13",
    section: "13.5",
    name: "Turing Machine Transition",
    formula: "δ(s, i) = (s′, i′, d) with d ∈ {L, R}",
    note: "write i′, move the head, enter state s′",
  },
  {
    chapterId: "rosen-ch13",
    section: "13.5",
    name: "Halting Problem Undecidability",
    formula: "no TM decides whether an arbitrary TM halts on input x",
    note: "proved by diagonalization",
  },

  // ============== Operating System Concepts (Silberschatz 10e) ==============
  ...OS_FORMULAS,
  ...CALC_FORMULAS,
  ...JS_FORMULAS,
  ...MANO_FORMULAS,
  ...CLRS_FORMULAS,
  ...HALL_FORMULAS,
  ...YOUNG_FORMULAS,
  ...EWEN_FORMULAS,
  ...COLETTA_FORMULAS,
  ...CPP_FORMULAS,
  ...WEBDEV_FORMULAS,
  ...EXAM_FORMULAS,
  ...MISSING_FORMULAS,
  ...elecCh1Formulas,
  ...elecCh2Formulas,
  ...elecCh3Formulas,
  ...elecCh4Formulas,
  ...elecCh5Formulas,
  ...elecCh6Formulas,
  ...elecCh7Formulas,
  ...elecCh8Formulas,
  ...elecCh9Formulas,
  ...elecCh10Formulas,
  ...elecCh11Formulas,
  ...elecCh12Formulas,
  ...elecCh13Formulas,
  ...elecCh14Formulas,
  ...elecCh15Formulas,
  ...elecCh16Formulas,
  ...elecCh17Formulas,
  ...elecCh18Formulas,
  ...elecCh19Formulas,
  ...elecCh20Formulas,
  ...physCh1Formulas,
  ...physCh2Formulas,
  ...physCh3Formulas,
  ...physCh4Formulas,
  ...physCh5Formulas,
  ...physCh6Formulas,
  ...physCh7Formulas,
  ...physCh8Formulas,
  ...physCh9Formulas,
  ...physCh10Formulas,
  ...physCh11Formulas,
  ...physCh12Formulas,
  ...physCh13Formulas,
  ...physCh14Formulas,
  ...physCh15Formulas,
]

// --------------------------- Helpers ---------------------------

/** All formula entries belonging to one chapter, in sheet order. */
export function formulasForChapter(chapterId: string): FormulaEntry[] {
  return FORMULAS.filter((f) => f.chapterId === chapterId)
}

/** Number of formula entries per chapterId (rosen-ch1 … rosen-ch13). */
export const FORMULA_COUNTS: Record<string, number> = (() => {
  const counts: Record<string, number> = {}
  for (const f of FORMULAS) {
    counts[f.chapterId] = (counts[f.chapterId] ?? 0) + 1
  }
  return counts
})()

/** Total number of formula entries in the sheet. */
export const TOTAL_FORMULAS: number = FORMULAS.length
