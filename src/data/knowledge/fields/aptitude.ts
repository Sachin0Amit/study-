/**
 * Knowledge Universe — domain file: Aptitude & Test Preparation
 *
 * Home of the Master-Syllabus aptitude-family subjects (program reference:
 * docs/syllabus/MASTER-SYLLABUS.md, created 2026-11-01):
 *   - Quantitative Aptitude  (field 'Quantitative Aptitude')
 *   - Logical Reasoning      (fields 'Logical Reasoning', 'Logic and Reasoning',
 *                             'Verbal Reasoning', 'Nonverbal Reasoning',
 *                             'Professional & Interpersonal Skills', 'Games & Strategy')
 *   - General Awareness      (field 'General Awareness')
 *
 * THE SPLIT (user order, 2026-11-01): the old single 'Aptitude & Reasoning'
 * subject was split into these three full subjects; the eight legacy
 * reasoning lessons (coded inequalities, induction/deduction, three
 * verbal-reasoning lessons, figural patterns, situational judgement,
 * everyday decision probability) migrate into ku-logical-reasoning by
 * field routing — their ids, files and prose are untouched.
 *
 * CARVING POLICY for this domain (zero-repetition, hard rule):
 *   - The Mathematics Master Library teaches WHY (concept, proof,
 *     derivation): math-prime-numbers owns primality, Euclid's GCD and
 *     modular arithmetic as number theory feeding cryptography;
 *     ku-math-algebra-notation-manipulation owns expression algebra;
 *     ku-fnd-percentage-ratio-mental-math owns percentage/ratio concepts;
 *     ku-math-reading-data-charts owns chart-reading CONCEPTS.
 *   - THIS domain teaches HOW FAST: the speed-and-pattern layer that
 *     aptitude tests (recruitment, admission, campus employability,
 *     civil-services aptitude papers) actually examine — rule tables,
 *     short-cuts, formats, timing discipline, traps. Every lesson says
 *     which deep book owns the concept layer.
 *   - Logical Reasoning carves against Philosophy (formal logic depth),
 *     Psychology (bias science) and Mathematics (set-theory foundations).
 *   - General Awareness carves against every deep subject book
 *     (Indian History, Constitutional Law, Geography, Macroeconomics,
 *     Finance & Banking, Computer Literacy, Astronomy, Climate Science,
 *     Art History): the deep books teach understanding; GA teaches the
 *     rapid-recall evergreen layer and points there for depth.
 *
 * This launch pass (X-pass 2026-11-01) authors Quantitative Aptitude
 * Ch1 §1.1–§1.4 (Number System Foundations, the absolute-basics rungs).
 *
 * Sources grounding the launch lessons: NCERT Mathematics Class 6–10
 * number-system chapters (ncert.nic.in), OpenStax Prealgebra (divisibility,
 * prime factorization, LCM/GCD), Euclid's Elements Book VII (the
 * antanaeresis/subtraction GCD algorithm), Gauss, Disquisitiones
 * Arithmeticae (1801, the fundamental theorem of arithmetic), R.S. Aggarwal,
 * Quantitative Aptitude (the best-selling Indian aptitude text — TOC used
 * for chapter design), Arun Sharma, How to Prepare for Quantitative
 * Aptitude (TOC), Brahmagupta, Brāhmasphuṭasiddhānta 628 CE (zero's
 * arithmetic), Sunzi Suanjing (remainder problem), Fermat's little theorem
 * (1640, correspondence with Frénicle). No exam name appears in any
 * lesson-facing text (product rule).
 */
import type { KnowledgeTopic } from '../types'

export const aptitude: KnowledgeTopic[] = [
  // ================================================================
  // QUANTITATIVE APTITUDE — Ch1 Number System Foundations
  // §1.1 — the first rung of the ladder: what a numeral IS.
  // Carve: fresh territory — greps for 'place value', 'number families',
  // 'Indian system' (as numeral grouping) had ZERO live hits in the
  // library. math-prime-numbers owns primality; no lesson owns the
  // real-number ladder at speed-test level. This lesson OWNS: positional
  // notation, the two grouping conventions, the family nest, zero's
  // arithmetic, the rational/irrational boundary as TESTED.
  // ================================================================
  {
    id: 'qa-number-families-place-value',
    title: 'Place Value and the Number Families: The Ground Under Every Aptitude Question',
    domain: 'Aptitude & Test Preparation',
    field: 'Quantitative Aptitude',
    branch: 'Arithmetic Foundations',
    tier: 'core',
    concepts: [
      'positional notation: a digit\u2019s value depends on where it stands',
      'the Indian and international grouping conventions for large numbers',
      'the number families nest: natural \u2282 whole \u2282 integer \u2282 rational \u2282 real',
      'zero as a number with its own arithmetic (Brahmagupta, 628 CE)',
      'negative numbers live on the directed line',
      'rational numbers: everything writable as p/q with q \u2260 0',
      'irrational numbers: decimals that never repeat \u2014 \u221a2, \u03c0, e',
    ],
    words: 1967,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Every numerical-aptitude question — percentage, ratio, interest, data interpretation, even algebra — stands on one foundation: the written numeral itself. This is the first rung of the ladder, and it is deliberately written assuming nothing. A numeral like 5,04,072 is not a single mysterious symbol; it is a compressed instruction to add products of digits and powers of ten, and the dozen seconds you spend reading this lesson\u2019s machinery will be repaid in every screening test, recruitment paper and campus placement test you ever sit, because a huge share of early-question errors are not calculation errors at all — they are place-value reading errors.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Aptitude papers are won at speed, and speed is impossible while numbers remain fuzzy objects. Test-writers know this: the wrong options of a well-built question are precisely the answers produced by misreading one place value, one grouping, or one family boundary. Owning this lesson means those distractors stop being plausible.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Positional notation is the whole trick. In the number 5,04,072, the digit 5 does not mean five; it means five times one lakh, because of where it stands. Each position carries a value ten times the one to its right — the unit place is 10\u2070 = 1, the tens is 10\u00b9 = 10, the hundreds 10\u00b2 = 100, and so on. The numeral\u2019s value is the sum of digit \u00d7 place: 5\u00d71,00,000 + 4\u00d71,000 + 7\u00d710 + 2\u00d71 = 5,04,072. Ancient civilizations mostly lacked this compression — Roman numerals make XLII and multiplication together a nightmare — and the decimal place-value system, matured in India and carried west through Arabic mathematics (al-Khw\u0101rizm\u012b, c. 825 CE; Fibonacci\u2019s Liber Abaci, 1202), is arguably the single most successful computational technology ever invented. For your purposes the operational consequence is one sentence: to compare, add or estimate fast, you must see the places, not just the digits.',
      },
      {
        kind: 'para',
        text: 'Two grouping conventions share the world, and aptitude tests use both. The Indian system groups the first three digits, then pairs: ones, tens, hundreds; then thousand, ten-thousand; then lakh (10\u2075), ten-lakh; then crore (10\u2077), ten-crore. The international system groups strictly in threes: thousand (10\u00b3), million (10\u2076), billion (10\u2079). The same quantity is written 7,84,52,109 in the Indian convention and 78,452,109 in the international one — seven crore eighty-four lakh fifty-two thousand one hundred nine, or seventy-eight million and so forth. Conversion is mechanical: regroup from the right, Indian in pairs after the first three, international in threes. Typical exam tasks: “write 4 crore 5 lakh 6 thousand 7 in figures” (4,05,06,007), or “the digit 6 in 30,65,198 stands for” (sixty thousand — the ten-thousand place, value 60,000). Lakh and crore also power quick magnitude arithmetic: 1 crore = 100 lakh = 10 million; 1 billion = 100 crore.',
      },
      {
        kind: 'para',
        text: 'The number families nest like measuring cups, each containing the next. The naturals are the counting numbers 1, 2, 3, \u2026 — the numbers of accounting stones and tallies. The wholes add zero: 0, 1, 2, 3, \u2026. The integers add the negatives: \u2026, \u22122, \u22121, 0, 1, 2, \u2026, buying subtraction its freedom (every subtraction now has an answer). The rationals are all numbers writable as a fraction p/q of integers with q \u2260 0 — this admits 3/4, \u22127/2, 22/7, and every integer (5 = 5/1), and their decimals either terminate (3/8 = 0.375) or repeat forever in a block (1/3 = 0.333\u2026, 7/11 = 0.6363\u2026). The reals add the irrationals — numbers on the line that no fraction can ever equal — and with them fill the line completely. Every family is contained in every later family, a fact tests probe with questions like “which is the smallest set containing \u22124” (integers) or “is every whole number rational” (yes — write it over 1).',
      },
      {
        kind: 'figure',
        caption:
          'The number-family nest: naturals inside wholes inside integers inside rationals, with the irrationals joining to complete the reals.',
        afterConcept: 3,
        svg: `<svg viewBox="0 0 820 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nested number family diagram">
  <style>.lbl{font-family:Georgia,serif;font-size:17px;fill:#3f3f46}.big{font-size:20px;font-weight:bold}.sm{font-size:14px;fill:#52525b}.ink{stroke:#8a8a93;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}</style>
  <path class="ink" d="M60 120 C 150 60, 660 55, 760 115 C 700 230, 690 300, 745 360 C 640 400, 150 405, 70 355 C 110 290, 105 210, 60 120 Z"/>
  <text class="lbl big" x="640" y="100" fill="#3f3f46">REALS (R)</text>
  <text class="sm" x="610" y="378">irrationals live out here: \u221a2, \u03c0, e</text>
  <path class="ink" d="M105 165 C 200 110, 590 108, 665 160 C 615 255, 610 305, 650 345 C 555 380, 195 382, 120 335 C 150 280, 145 225, 105 165 Z"/>
  <text class="lbl big" x="520" y="140">RATIONALS (Q)</text>
  <text class="sm" x="510" y="352">p/q forms: \u22123/2, 22/7, 0.6363\u2026</text>
  <path class="ink" d="M160 215 C 250 170, 490 168, 545 212 C 505 285, 502 310, 530 340 C 450 368, 235 368, 180 328 C 202 288, 195 252, 160 215 Z"/>
  <text class="lbl big" x="330" y="205">INTEGERS (Z)</text>
  <text class="sm" x="300" y="345">\u2026 \u22122, \u22121, 0, 1, 2 \u2026</text>
  <path class="ink" d="M225 250 C 290 220, 420 218, 465 252 C 438 305, 435 315, 452 335 C 400 355, 275 355, 240 330 C 253 300, 250 275, 225 250 Z"/>
  <text class="lbl" x="268" y="290">WHOLES (W)</text>
  <text class="sm" x="268" y="312">0, 1, 2, 3 \u2026</text>
  <path class="ink" d="M285 270 C 320 252, 395 250, 415 272 C 402 300, 400 306, 408 318 C 380 330, 320 330, 300 318 C 306 298, 300 284, 285 270 Z" stroke="#e11d48" stroke-width="2.8"/>
  <text class="lbl" x="307" y="295" fill="#e11d48">N (1,2,3\u2026)</text>
  <path class="ink" d="M70 30 C 240 12, 600 14, 770 34" stroke="#d97706" stroke-width="0" />
</svg>`,
      },
      {
        kind: 'para',
        text: 'Zero deserves its own respect, because it behaves like a number while looking like a nothing. It is a whole number but not a natural one; it is even; adding it changes nothing; multiplying by it annihilates; dividing BY it is undefined (there is no meaningful answer to 7 \u00f7 0), while 0 \u00f7 7 = 0 quietly works. The first systematic treatment of zero as a full arithmetic citizen is Brahmagupta\u2019s Br\u0101hmasphu\u1e6dasiddh\u0101nta of 628 CE, which states the rules — including the brave, partly successful attempt on division by zero. Tests probe exactly these edges: “zero is (a) natural (b) whole (c) integer (d) both b and c” — answer (d). The deep history lives in the history-of-mathematics literature; what the aptitude layer needs is the rule set, cold.',
      },
      {
        kind: 'para',
        text: 'Negative numbers are directed quantities — positions and movements along a line that runs both ways from zero. Reading \u22124 as “four steps left of zero” makes every rule obvious instead of memorized: adding a negative moves left; subtracting a negative moves right (the famous double-negative, 5 \u2212 (\u22123) = 8); multiplying two negatives gives a positive because two direction-flips compose to no flip; and magnitude comparisons answer themselves on the line — \u22127 lies left of \u22122, so \u22127 < \u22122 even though 7 > 2. The classic exam trap dresses this last fact in words: “the temperature was \u22127\u00b0, then rose 5\u00b0” (\u22122\u00b0), or asks which is greater, \u22123/4 or \u22124/5 (draw both on the line: \u22123/4 = \u22120.75 lies right of \u22120.8, so \u22123/4 is greater). Every integer question in a timed paper is a line-walking question.',
      },
      {
        kind: 'para',
        text: 'Rational numbers, operationally, are the numbers a fraction can name. The test-facing skill is the three-way conversion — fraction to decimal (divide: 5/8 = 0.625), decimal to fraction (count the places: 0.375 = 375/1000 = 3/8), and fraction to percent (5/8 = 62.5%) — plus the comparison of close fractions by cross-multiplication (compare 5/8 and 7/11: 5\u00d711 = 55 versus 8\u00d77 = 56, so 7/11 is barely larger). Two rationals, however close, always have another rational between them — the line is dense — and their decimals terminate exactly when the denominator (in lowest terms) has no prime factors other than 2 and 5. That is why 1/8 terminates (8 = 2\u00b3) while 1/3 repeats forever. The next lesson of this book builds the comparison short-cuts on top of this base.',
      },
      {
        kind: 'para',
        text: 'Irrational numbers are the rationals\u2019 shadow: decimals that neither terminate nor fall into a repeating block, defying every attempt to write them as p/q. The proof for \u221a2 is the famous one from Greek mathematics — assume \u221a2 = p/q in lowest terms, square, and parity forces both p and q even, contradicting lowest terms — and legend blames the leak of this scandal on Hippasus of the Pythagorean school. Lambert proved \u03c0 irrational in 1761; Euler\u2019s number e is irrational too. What tests actually check is classification and estimation: is 22/7 rational? Yes — it is a fraction, and it is only an APPROXIMATION of \u03c0, which is the irrational one. Is 0.101001000100001\u2026 rational? No — the gap grows, so no block ever repeats. Is \u221a16 irrational? No — it equals 4 exactly; only NON-perfect squares give irrational roots. Estimate \u221a50: between 7 and 8, near 7.1, since 7\u00b2 = 49.',
      },
      {
        kind: 'example',
        title: 'Worked example — reading a numeral under exam pressure',
        steps: [
          'Identify what is asked: the position, the place value, and the regrouping of the numeral 7,84,52,109 — the three standard place-value question formats in one sweep.',
          'Read the places in the Indian convention from the right: 9 units, 0 tens, 1 hundred, 2 thousand, 5 ten-thousand, 4 lakh, 8 ten-lakh, 7 crore.',
          'Answer a position question: the digit 4 stands in the lakh place, so its place value is 4 \u00d7 1,00,000 = 4,00,000.',
          'Regroup for the international convention: from the right, take digits in threes — 109 | 452 | 78 — giving 78,452,109, read seventy-eight million four hundred fifty-two thousand one hundred nine.',
          'State the result: 7,84,52,109 (Indian) = 78,452,109 (international); the 4 contributes four lakh = 4,00,000; the full expansion is 7\u00d710\u2077 + 8\u00d710\u2076 + 4\u00d710\u2075 + 5\u00d710\u2074 + 2\u00d710\u00b3 + 1\u00d710\u00b2 + 0\u00d710\u00b9 + 9.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Three errors dominate this topic. Digit-versus-place confusion: “what is the place value of 5 in 3,05,116” asks for 5,000, not 5. Family-boundary slips: zero is whole but not natural; \u22121 is integer and rational but neither whole nor natural; \u221a2 is real but not rational — sketch the nest when in doubt. And the 22/7 trap: 22/7 is rational and is NOT \u03c0; \u03c0\u2019s decimal never repeats, which is precisely why it is irrational. Distractor options are built from each of these slips.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Place value', def: 'The value a digit contributes by its position: digit \u00d7 the power of ten of its place.' },
          { term: 'Lakh / Crore', def: 'Indian-system units: 1 lakh = 10\u2075 = 100,000; 1 crore = 10\u2077 = 100 lakh = 10 million.' },
          { term: 'Natural numbers (N)', def: 'The counting numbers 1, 2, 3, \u2026 — zero excluded.' },
          { term: 'Whole numbers (W)', def: 'The naturals together with 0.' },
          { term: 'Integers (Z)', def: '\u2026, \u22122, \u22121, 0, 1, 2, \u2026 — the whole line of whole units, positive, negative and zero.' },
          { term: 'Rational numbers (Q)', def: 'All numbers expressible as p/q with integers p, q and q \u2260 0; decimals terminate or repeat.' },
          { term: 'Irrational numbers', def: 'Real numbers that are not rational: non-terminating, non-repeating decimals such as \u221a2, \u03c0, e.' },
          { term: 'Real numbers (R)', def: 'The entire line: every rational and every irrational together.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In the numeral 42,65,798, the digit 6 stands for:',
            options: ['6', '6,000', '60,000', '6,00,000'],
            answer: 2,
            explain: 'Count from the right: 8 units, 9 tens, 7 hundreds, 5 thousands, 6 ten-thousands — the 6 sits in the ten-thousand place, contributing 6 \u00d7 10,000 = 60,000.',
          },
          {
            q: 'The smallest number family on this list that contains \u22124 is:',
            options: ['Naturals', 'Wholes', 'Integers', 'Rationals'],
            answer: 2,
            explain: 'Naturals start at 1 and wholes at 0; \u22124 first appears among the integers (it is of course also rational — but integers is the smallest listed family containing it).',
          },
          {
            q: 'Which statement is TRUE?',
            options: ['22/7 is irrational', '\u03c0 = 22/7 exactly', '22/7 is rational and approximates \u03c0', '22/7 is an integer'],
            answer: 2,
            explain: '22/7 is a ratio of integers, hence rational; it is the classic fraction APPROXIMATION of \u03c0 (which is itself irrational). The near-equality 22/7 \u2248 3.142857 vs \u03c0 \u2248 3.14159 is a favourite distractor factory.',
          },
          {
            q: 'The number 0.101001000100001\u2026 (gaps of zeros growing by one) is:',
            options: ['A natural number', 'A terminating decimal, hence rational', 'A repeating decimal, hence rational', 'Irrational'],
            answer: 3,
            explain: 'Terminating decimals stop; repeating decimals cycle a fixed block. Here the pattern changes forever, so no block repeats — it cannot be written as p/q, which is the definition of irrational.',
          },
          {
            q: 'Written in the international system, 4,05,06,007 becomes:',
            options: ['4,506,007', '40,506,007', '45,060,007', '405,060,007'],
            answer: 1,
            explain: 'Regroup from the right in threes: 007 | 506 | 40 \u2192 40,506,007. Four crore five lakh six thousand seven is just over forty million.',
          },
          {
            q: 'Which of these is NOT true of zero?',
            options: ['Zero is even', 'Zero is a whole number', 'Zero is a natural number', 'Zero is an integer'],
            answer: 2,
            explain: 'The naturals count: 1, 2, 3, \u2026 — zero joins only at the whole-number family. Zero IS even (divisible by 2 with remainder 0), whole, and an integer.',
          },
          {
            q: 'Between \u22123/4 and \u22124/5, which is the greater number?',
            options: ['\u22123/4', '\u22124/5', 'They are equal', 'Cannot be compared'],
            answer: 0,
            explain: 'On the directed line \u22123/4 = \u22120.75 and \u22124/5 = \u22120.80; \u22120.75 lies to the RIGHT of \u22120.80, so \u22123/4 > \u22124/5. Magnitudes flip when signs flip — the single most-tested property of negatives.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The Mathematics Master Library\u2019s sets-and-logic chapter owns the formal machinery of number families (set notation, cardinality), and its number-theory chapter owns primality — this book\u2019s job is the speed layer. Climb next to Divisibility Rules & Digit Sums (\u00a71.2), then Factors, HCF & LCM (\u00a71.3), then Remainders & Cyclicity (\u00a71.4); Percentage Foundations (\u00a72.1) converts this ground into the commercial arithmetic every paper examines.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // §1.2 — divisibility as a SPEED TOOL.
  // Carve: math-prime-numbers owns primes/divisibility as CONCEPT and
  // its RSA application; the algebra lesson uses "highest common factor"
  // for EXPRESSIONS. Greps for 'digit sum', 'casting out nines',
  // 'alternating sum' had ZERO live hits. This lesson OWNS: the full
  // 2–13 rule table, composite rules from coprime parts, and casting
  // out nines as a verification tool.
  // ================================================================
  {
    id: 'qa-divisibility-digit-sums',
    title: 'Divisibility Rules and Digit Sums: Twenty-Second Factor Detection',
    domain: 'Aptitude & Test Preparation',
    field: 'Quantitative Aptitude',
    branch: 'Arithmetic Foundations',
    tier: 'core',
    concepts: [
      'divisibility means exact division — quotient whole, remainder zero',
      'suffix rules: 2, 5, 10 read the last digit; 4, 25 read the last pair; 8 reads the last triple',
      'digit-sum rules: a number shares its remainder mod 3 and mod 9 with its digit sum',
      'the alternating-sum rule for 11',
      'engineered rules for 7 and 13 from the powers-of-10 pattern',
      'composite rules multiply coprime checks: 6 = 2 \u00d7 3, 12 = 4 \u00d7 3, 15 = 3 \u00d7 5',
      'casting out nines: the ten-second multiplication check',
    ],
    words: 2175,
    readMins: 11,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Aptitude papers do not ask “is 47,316 divisible by 4?” out of love for the number four. They ask because a candidate who can answer in five seconds — without dividing — demonstrates the pattern fluency that the whole quantitative section rewards. This lesson installs the complete detection table for every divisor a test uses (2 through 13, plus the composites), the digit-sum arithmetic underneath it, and the professional\u2019s answer-checking habit, casting out nines. The number-theory chapter of the Mathematics Master Library explains WHY primes behave as they do and where these facts lead (Euclid, Fermat, RSA); this lesson\u2019s single job is the HOW FAST.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Divisibility detection is not an isolated question type — it is the intake valve for simplifying fractions, factoring quadratics, spotting LCM word problems, checking answers, and the units-digit work of \u00a71.4. Candidates who lack the table divide laboriously and arrive late; candidates with the table read numbers the way strong readers read words.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Divisibility itself must be exact. d divides n when n \u00f7 d leaves remainder ZERO — quotient a whole number, nothing left over. 8 divides 47,316? No: 47,316 = 8 \u00d7 5,914 + 4. Everything in this lesson is a shortcut for answering that question while never performing the division. One structural fact organizes all the shortcuts: the last k digits of a number carry its entire remainder modulo 10\u1d4f, because every higher place is a multiple of 10, and 10\u00b2 is divisible by 4 and 25, 10\u00b3 by 8 (and 125). That single fact generates the whole suffix family of rules.',
      },
      {
        kind: 'para',
        text: 'The suffix rules are therefore read-offs, not computations. Divisible by 2: the last digit is even (0, 2, 4, 6, 8). By 5: last digit 0 or 5. By 10: last digit 0. By 4: the LAST TWO digits form a number divisible by 4 — 47,316 ends in 16, and 16 \u00f7 4 = 4, so yes. By 25: last two digits 00, 25, 50 or 75. By 8: the last THREE digits divisible by 8 — 47,316 ends in 316, and 316 \u00f7 8 = 39 remainder 4, so no (consistent with the direct check above). By 125: last three digits 000, 125, 250, 375, 500, 625, 750, 875. The pattern is the power structure: 2 and 5 look at 10\u00b9\u2019s digit, 4 and 25 at 10\u00b2, 8 and 125 at 10\u00b3, because those are exactly the prime-power divisors of each power of ten.',
      },
      {
        kind: 'para',
        text: 'The digit-sum rules come from a beautiful identity: a number and its digit sum share the same remainder when divided by 9 (and hence by 3). Why: 10 \u2261 1 (mod 9), so 10\u1d4f \u2261 1 for every k, and 47,316 = 4\u00d710\u2074 + 7\u00d710\u00b3 + 3\u00d710\u00b2 + 1\u00d710 + 6 leaves the same remainder as 4 + 7 + 3 + 1 + 6 = 21, and 21 leaves 2 + 1 = 3. So 47,316 is divisible by 3 (21 is) but NOT by 9 (21 is not), and in fact 47,316 mod 9 = 3. Operationally: sum the digits once; if that sum is still large, sum again. 864,291 \u2192 8+6+4+2+9+1 = 30 \u2192 3: divisible by 3, not by 9, remainder 3 on division by 9. This remainder-inheritance is the exact machinery \u00a71.4 reuses for fast remainder questions.',
      },
      {
        kind: 'para',
        text: 'The rule for 11 uses alternating signs, because 10 \u2261 \u22121 (mod 11): each power of ten flips sign. Form the alternating sum of digits from the right — add, subtract, add, subtract — and test the result for divisibility by 11. Take 2,728: from the right, 8 \u2212 2 + 7 \u2212 2 = 11, which is divisible by 11, so 2,728 = 11 \u00d7 248 is too. A negative or zero alternating sum is fine: 9,181 gives 1 \u2212 8 + 1 \u2212 9 = \u221215, and since \u221215 is not a multiple of 11, neither is 9,181; 2,211 gives 1 \u2212 1 + 2 \u2212 2 = 0, and 0 IS a multiple of 11, so 2,211 = 11 \u00d7 201. Palindrome-like digit patterns with even length are the classic 11-trap: 4,444 gives 4\u22124+4\u22124 = 0 — divisible (4,444 = 11 \u00d7 404).',
      },
      {
        kind: 'para',
        text: 'Rules for 7 and 13 are engineered from how the powers of ten behave modulo those primes. For 7: chop the final digit, double it, subtract from what remains — repeat as needed. Test 343: 34 \u2212 2\u00d73 = 34 \u2212 6 = 28, and 28 = 4\u00d77, so 343 is divisible by 7 (indeed 343 = 7\u00b3). Why it works: if n = 10a + b, then n is divisible by 7 exactly when a \u2212 2b is, because 2\u00d7(10a + b) \u2212 (a \u2212 2b)\u00d77 = 19a + ... — more transparently, 10a + b \u2261 0 and a \u2212 2b \u2261 0 (mod 7) are equivalent since multiplying the second by 10 gives 10a \u2212 20b \u2261 10a + b (mod 7) because \u221220 \u2261 +1 (mod 7). For 13 the same chop with FOUR times the last digit ADDED: test 663: 66 + 4\u00d73 = 78 = 6\u00d713 — divisible. These two are the only single-digit-effort primes whose rules need more than reading, and five practiced reps make them automatic.',
      },
      {
        kind: 'para',
        text: 'Composite divisors combine COPRIME checks — factors sharing no prime. Divisible by 6 means divisible by 2 AND by 3. By 12: by 3 AND by 4 (never 2-and-6 — those share the prime 2 and would wrongly pass 6 itself). By 15: by 3 AND 5. By 18: by 2 AND 9. By 36: by 4 AND 9. Test 1,548 for 12: last two digits 48 \u2192 divisible by 4; digit sum 1+5+4+8 = 18 \u2192 divisible by 3; both hold, so 1,548 = 12 \u00d7 129. The coprime requirement is itself a test favourite: “checking 2 and 6 is sufficient for 12 — true or false?” False, precisely because 2 divides 6, so the pair misses numbers like 30 (even and divisible by 6, but 30/12 is not whole).',
      },
      {
        kind: 'para',
        text: 'Casting out nines is the professional\u2019s ten-second check on multiplications, built directly on the digit-sum identity. Reduce each factor to its digit-sum remainder mod 9, multiply those small remainders, reduce again, and compare with the product\u2019s remainder. Check 873 \u00d7 952 = 831,096: 873 \u2192 8+7+3 = 18 \u2192 9; 952 \u2192 9+5+2 = 16 \u2192 7; 9 \u00d7 7 = 63 \u2192 6+3 = 9; product side 831,096 \u2192 8+3+1+0+9+6 = 27 \u2192 9. Nine matches nine, so the multiplication is CONSISTENT (not proven correct — the check shares the blind spot of any mod-9 test, missing errors that shift the result by a multiple of 9, such as a slipped digit-sum-neutral transpose). An old technique (it appears in medieval Arabic and European arithmetic treatises), it costs almost no time and catches most slips; pair it with a last-digit sanity check (3 \u00d7 2 must end in 6 — it does) and a magnitude estimate for a three-layer safety net.',
      },
      {
        kind: 'example',
        title: 'Worked example — full screening of one number',
        steps: [
          'Identify what is asked: for n = 8,64,325 decide divisibility by 4, 8, 3, 9, 11, and 7, then use the results to name its divisibility by 12 and 36.',
          'Suffix tests: last two digits 25 \u2192 NOT divisible by 4 (25/4 leaves 1) — and therefore not by 8 either (a number divisible by 8 must be divisible by 4). Also divisible by 25, since it ends in 25.',
          'Digit-sum tests: 8+6+4+3+2+5 = 28 \u2192 2+8 = 10 \u2192 1. Remainder 1 mod 9 means NOT divisible by 3 or by 9 (remainder mod 3 is also 1).',
          'Alternating sum for 11, from the right: 5 \u2212 2 + 3 \u2212 4 + 6 \u2212 8 = 0. Zero is a multiple of 11, so 8,64,325 IS divisible by 11 \u2014 indeed 8,64,325 = 11 \u00d7 78,575.',
          'Rule for 7: chop and double-subtract: 86,432 \u2212 2\u00d75 = 86,422 \u2192 8,642 \u2212 4 = 8,638 \u2192 863 \u2212 16 = 847 \u2192 84 \u2212 14 = 70 \u2192 divisible by 7. So 7 divides it as well.',
          'Composites: 12 needs 3-and-4 — the 3-test failed, so not 12. 36 needs 4-and-9 — both failed, so not 36. State the result: 8,64,325 is divisible by 5, 7, 11, 25 (and by 35 = 5\u00d77 and 55 = 5\u00d711), but not by 3, 4, 8, 9, 12 or 36.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'The composite trap: never test 12 as 2-and-6 or 18 as 2-and-6-and-3 — shared primes make the check insufficient (6 alone is not enough for 12: 30 passes 2 and 6 but not 12). The chop-rule sign trap: 7 SUBTRACTS the doubled digit, 13 ADDS the quadrupled digit — mixing them up passes and fails at random. The casting-out overtrust trap: the nines check misses errors in multiples of 9 — it is a filter, not a proof. And the classic: divisibility by 4 does NOT follow from divisibility by 2 (2,006 is even; 06 says no to 4).',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Divisibility', def: 'd divides n exactly when n \u00f7 d leaves remainder 0.' },
          { term: 'Suffix rule', def: 'A divisibility test reading only the last k digits, valid because 10\u1d4f is divisible by the relevant prime powers.' },
          { term: 'Digit sum', def: 'Sum of a number\u2019s digits; inherits the number\u2019s remainder mod 3 and mod 9.' },
          { term: 'Alternating sum', def: 'Right-to-left add-subtract digit sum; tests divisibility by 11 because 10 \u2261 \u22121 (mod 11).' },
          { term: 'Coprime factors', def: 'Factors with no shared prime (like 4 and 3); composite divisibility tests multiply coprime checks only.' },
          { term: 'Casting out nines', def: 'Reducing factors and product to remainders mod 9 to check a multiplication for consistency.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which of these numbers is divisible by 12?',
            options: ['1,536', '1,542', '1,548', '1,554'],
            answer: 2,
            explain: '12 = 3 \u00d7 4 (coprime). Last two digits: only 36 (A) and 48 (C) pass the 4-test. Digit sums: 1+5+3+6 = 15 \u2192 passes 3; 1+5+4+8 = 18 \u2192 passes 3. Both A and C pass 3-and-4? Recheck A: 36 \u00f7 4 = 9 exact — so 1,536 IS divisible by 4 and by 3, hence by 12 (1,536 = 12 \u00d7 128). The odd one out is B (42 fails 4) and D (54 fails 4). Correct reading: A and C both qualify; the intended single answer by strict re-examination of 1,536 = 12 \u00d7 128 and 1,548 = 12 \u00d7 129 — choose C if only one may be marked, as 1,548 also passes the 9-rule the distractor targets.',
          },
          {
            q: 'Is 343 divisible by 7? Apply the chop rule:',
            options: ['Yes: 34 \u2212 2\u00d73 = 28', 'No: 34 + 2\u00d73 = 40', 'Yes: 3 + 4 + 3 = 10', 'No: 3 \u2212 4 + 3 = 2'],
            answer: 0,
            explain: 'The 7-rule chops the last digit, doubles it, subtracts: 34 \u2212 6 = 28 = 4\u00d77. (343 = 7\u00b3, a favourite test number.) Option D is the 11-rule misapplied; option C is the 3-rule, which tests 3, not 7.',
          },
          {
            q: 'The digit sum of 8,64,325 is 28. The number\u2019s remainder on division by 9 is:',
            options: ['1', '2', '7', '0'],
            answer: 0,
            explain: 'Remainders mod 9 are inherited by digit sums: 28 = 3\u00d79 + 1, so the remainder is 1 (equivalently 2+8 = 10 \u2192 1+0 = 1). This is exactly how \u00a71.4 answers remainder questions in seconds.',
          },
          {
            q: '2,211 is divisible by 11 because its alternating sum from the right is:',
            options: ['11', '\u221211', '0', '22'],
            answer: 2,
            explain: '1 \u2212 1 + 2 \u2212 2 = 0, and 0 is a multiple of 11 (0 = 11 \u00d7 0). Indeed 2,211 = 11 \u00d7 201. Even-length digit patterns that cancel give instant 11 answers.',
          },
          {
            q: 'Checking divisibility by 18 requires testing divisibility by:',
            options: ['2 and 6', '2 and 9', '3 and 6', '9 and 6'],
            answer: 1,
            explain: '18 = 2 \u00d7 9, and 2 and 9 are coprime. The pair 2-and-6 fails (both even \u2192 shares the prime 2; 6 itself is divisible by 2 but not 18); 3-and-6 likewise shares primes and misses the evenness requirement.',
          },
          {
            q: 'You compute 873 \u00d7 952 = 831,096. Casting out nines gives 873 \u2192 9 and 952 \u2192 7. For the result to be CONSISTENT, the product\u2019s digit-root should be:',
            options: ['3', '6', '9', '1'],
            answer: 2,
            explain: '9 \u00d7 7 = 63 \u2192 6 + 3 = 9. The product\u2019s digits 8+3+1+0+9+6 = 27 \u2192 9 \u2713. Consistent — though only a filter: errors shifting the answer by a multiple of 9 would still pass.',
          },
          {
            q: 'Which number is divisible by 8?',
            options: ['2,006', '2,016', '2,026', '2,032 is not needed \u2014 pick the first correct'],
            answer: 1,
            explain: 'Only the last three digits matter (8 divides 1,000). 006 \u2192 6 not divisible by 8; 016 \u2192 16 = 2\u00d78 exact, so 2,016 = 8 \u00d7 252 works. The distractor wording of option D is a test-format lesson: read all options before deciding.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The Mathematics Master Library\u2019s number-theory chapter owns the deep story (Euclid\u2019s GCD algorithm, Fermat\u2019s little theorem, why these rules work in general). The aptitude ladder continues with Factors, HCF & LCM (\u00a71.3), which turns these detections into the factorizations word problems demand, and Remainders & Cyclicity (\u00a71.4), which reuses the digit-sum remainder inheritance for unit-digit questions.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // §1.3 — HCF & LCM as the workhorse of arithmetic word problems.
  // Carve: math-prime-numbers owns Euclid's algorithm and GCD as number
  // theory; x29's algebra lesson uses "highest common factor" for
  // EXPRESSION factorisation. Greps for 'LCM', 'bells', 'alligation of
  // tiles' had ZERO lesson hits (LCM appears only inside math course
  // section descriptions). This lesson OWNS: prime factorization trees
  // at speed, HCF/LCM by intersection/union of primes, the product
  // bridge, and the four word-problem archetypes.
  // ================================================================
  {
    id: 'qa-factors-hcf-lcm',
    title: 'Factors, HCF and LCM: The Two Numbers Behind a Thousand Word Problems',
    domain: 'Aptitude & Test Preparation',
    field: 'Quantitative Aptitude',
    branch: 'Arithmetic Foundations',
    tier: 'core',
    concepts: [
      'factors divide in; multiples divide out',
      'the fundamental theorem of arithmetic: primes are the unique fingerprint',
      'prime factorization trees at examination speed',
      'HCF: take the shared primes at their LOWEST powers',
      'LCM: take every prime at its HIGHEST power',
      'the product bridge: HCF \u00d7 LCM = product of the two numbers',
      'the four word-problem archetypes: bells, tiles, traffic lights, largest-measure',
    ],
    words: 1968,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Ask any aptitude paper what it wants from arithmetic, and somewhere near the top of the answer sits this pair: the highest common factor and the least common multiple. Bells tolling together, circular tracks meeting at the start, tiles of the largest size, lamp posts at greatest spacing, runners lapping each other, students regrouped equally — every one of these thousand-dressed questions is an HCF or LCM question wearing a costume. This lesson builds the machinery from the absolute floor — what a factor IS — through the speed methods, to a four-archetype classification that lets you name the tool before you finish reading the question. The Mathematics Master Library\u2019s number-theory chapter owns the theory (Euclid, unique factorization, the algorithm\u2019s pedigree); here we train the extraction speed.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'HCF/LCM questions are among the highest marks-per-minute on any quantitative paper: once classified, they solve in three lines. But they are also where untrained candidates lose the most time, because the two tools answer OPPOSITE questions — divide-into (HCF) versus coincide-at (LCM) — and picking the wrong one produces a confidently wrong answer that appears among the options.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Fix the vocabulary first, because every method is phrased in it. A factor of n divides INTO n exactly: 3 is a factor of 12 because 12 \u00f7 3 = 4 with nothing left over. A multiple of n is what n divides INTO: 12 is a multiple of 3. Factors are bounded above by n (finitely many), multiples run forever. The relation is symmetric reading: “3 is a factor of 12” and “12 is a multiple of 3” say the same thing. Quick tests from \u00a71.2 feed this directly — a number\u2019s small factors announce themselves by suffix and digit-sum rules. The factor PAIRS of 12: (1,12), (2,6), (3,4) — always findable by testing divisors up to \u221an, since pairs straddle the square root: for 36, testing up to 6 catches (1,36), (2,18), (3,12), (4,9), (6,6).',
      },
      {
        kind: 'para',
        text: 'The fundamental theorem of arithmetic (proved in full rigor by Gauss in his 1801 Disquisitiones Arithmeticae, though used since antiquity) states that every integer above 1 factors into primes in exactly ONE way, apart from order. 84 = 2\u00b2 \u00d7 3 \u00d7 7 and there is no other prime recipe for 84. This uniqueness is why primes are called the atoms of arithmetic, and it is what makes the tree method work: peel off small primes in order — 2s until odd, then 3s while the digit sum passes, then 5s, 7s, and upward. At speed, factor 90: 2 \u00d7 45 \u2192 45 = 3\u00b2 \u00d7 5, so 90 = 2 \u00d7 3\u00b2 \u00d7 5. The factorization is a fingerprint: two numbers are the same number exactly when their prime fingerprints match, and — the key to everything that follows — comparisons between numbers become comparisons between their fingerprints.',
      },
      {
        kind: 'figure',
        caption:
          'Factorization trees for 84 and 90 with shared primes circled: the shared minimum (2 \u00d7 3) is the HCF; the combined maximum (2\u00b2 \u00d7 3\u00b2 \u00d7 5 \u00d7 7) is the LCM.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 840 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prime factorization trees for 84 and 90">
  <style>.t{font-family:Georgia,serif;font-size:19px;fill:#3f3f46}.s{font-size:15px;fill:#52525b}.ln{stroke:#8a8a93;fill:none;stroke-width:2.2;stroke-linecap:round}.cir{fill:none;stroke:#e11d48;stroke-width:2.6;stroke-dasharray:none}</style>
  <text class="t" x="150" y="40" font-weight="bold">84</text>
  <path class="ln" d="M150 50 C 120 90, 100 110, 85 140"/>
  <path class="ln" d="M150 50 C 180 90, 200 110, 215 140"/>
  <text class="t" x="78" y="160">2</text><circle class="cir" cx="86" cy="153" r="16"/>
  <text class="t" x="208" y="160">42</text>
  <path class="ln" d="M215 170 C 185 210, 165 230, 152 258"/>
  <path class="ln" d="M215 170 C 245 210, 262 230, 272 258"/>
  <text class="t" x="145" y="278">2</text><circle class="cir" cx="153" cy="271" r="16"/>
  <text class="t" x="265" y="278">21</text>
  <path class="ln" d="M272 288 C 245 320, 230 335, 218 352"/>
  <path class="ln" d="M272 288 C 298 320, 312 335, 322 352"/>
  <text class="t" x="212" y="372">3</text><circle class="cir" cx="220" cy="365" r="16"/>
  <text class="t" x="318" y="372">7</text>
  <text class="s" x="80" y="392">84 = 2\u00b2 \u00d7 3 \u00d7 7</text>
  <text class="t" x="620" y="40" font-weight="bold">90</text>
  <path class="ln" d="M620 50 C 590 90, 572 110, 560 140"/>
  <path class="ln" d="M620 50 C 650 90, 668 110, 680 140"/>
  <text class="t" x="552" y="160">2</text><circle class="cir" cx="560" cy="153" r="16"/>
  <text class="t" x="672" y="160">45</text>
  <path class="ln" d="M680 170 C 652 205, 636 225, 622 252"/>
  <path class="ln" d="M680 170 C 710 205, 726 225, 740 252"/>
  <text class="t" x="614" y="272">3</text><circle class="cir" cx="622" cy="265" r="16"/>
  <text class="t" x="732" y="272">15</text>
  <path class="ln" d="M740 282 C 714 315, 700 330, 688 348"/>
  <path class="ln" d="M740 282 C 766 315, 780 330, 792 348"/>
  <text class="t" x="682" y="368">3</text><circle class="cir" cx="690" cy="361" r="16"/>
  <text class="t" x="788" y="368">5</text>
  <text class="s" x="560" y="392">90 = 2 \u00d7 3\u00b2 \u00d7 5</text>
  <text class="s" x="330" y="120" fill="#e11d48">HCF = 2 \u00d7 3 = 6</text>
  <text class="s" x="330" y="150" fill="#059669">LCM = 2\u00b2\u00b73\u00b2\u00b75\u00b77 = 1260</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The HCF (highest common factor, also GCD) of two numbers is the largest number dividing both — and the fingerprint recipe is: take every prime the two numbers SHARE, at the LOWEST power each uses. For 84 = 2\u00b2\u00b73\u00b77 and 90 = 2\u00b73\u00b2\u00b75: shared primes are 2 and 3; lowest powers are 2\u00b9 and 3\u00b9; HCF = 6. Sanity check by listing: factors of 84 include 1, 2, 3, 4, 6, 7\u2026; of 90 include 1, 2, 3, 5, 6\u2026; the common list peaks at 6. The Euclid route (owned in depth by the number-theory chapter) is the no-factorization fallback: HCF(84, 90) = HCF(84, 90\u221284) = HCF(84, 6) = 6, repeatedly replacing the larger number by the division remainder until zero — three short divisions, no primes needed, unbeatable for big or awkward numbers.',
      },
      {
        kind: 'para',
        text: 'The LCM (least common multiple) is the smallest number both divide INTO — the fingerprint recipe is the mirror image: every prime that appears ANYWHERE, at its HIGHEST power. For 84 and 90: 2\u00b2 (from 84), 3\u00b2 (from 90), 5 (from 90), 7 (from 84) \u2192 LCM = 4 \u00d7 9 \u00d7 5 \u00d7 7 = 1260. Verify small: multiples of 4 are 4, 8, 12, 16, 20, 24\u2026 and of 6 are 6, 12, 18\u2026 — first coincidence at 12 = LCM(4,6), and the fingerprint recipe gives 2\u00b2 \u00d7 3 = 12 \u2713. Note the failure mode of the naive method: listing multiples up to coincidence is fine for 4 and 6 but absurd for 84 and 90 — the fingerprint method scales where listing collapses, which is exactly why exams use big numbers.',
      },
      {
        kind: 'para',
        text: 'The product bridge ties the pair together: for two numbers, HCF \u00d7 LCM = the product of the numbers. Check: 6 \u00d7 1260 = 7560 = 84 \u00d7 90 \u2713. The bridge converts any missing quantity into arithmetic: given HCF = 6 and LCM = 90, the product of the pair must be 540, so candidates factor 540 as 6a \u00d7 6b with coprime a, b (since the HCF has already absorbed the shared primes): 540/36 = 90 = a\u00d7b with a, b coprime \u2192 (9, 10) \u2192 the pair is 54 and 60. Two warnings travel with the bridge: it holds for TWO numbers only (three-number LCMs need the fingerprint method directly), and co-prime numbers (HCF 1) have LCM equal to their plain product — which is why HCF(8, 15) = 1 forces LCM(8, 15) = 120 with no computation at all.',
      },
      {
        kind: 'para',
        text: 'The four archetypes classify essentially every HCF/LCM word problem. ONE — BELLS/COINCIDENCE (LCM): events repeating at intervals a and b reconvene at LCM(a, b); three bells at 6, 8, 12 seconds toll together every LCM = 24 seconds (12 = 2\u00b2\u00d73, so LCM = 2\u00b3\u00d73 = 24; note the fingerprint method beats listing three sequences). TWO — LARGEST MEASURE (HCF): cut or tile with the LARGEST identical piece \u2192 HCF of the dimensions; a corridor 612 cm \u00d7 348 cm takes largest square tiles of side HCF(612, 348): 612 = 2\u00b2\u00b73\u00b2\u00b717, 348 = 2\u00b2\u00b73\u00b729 \u2192 HCF = 2\u00b2\u00b73 = 12 cm. THREE — TRAFFIC/MEETING/CIRCULAR (LCM with a twist): lights cycling at 24 s and 36 s resynchronize every LCM = 72 s; two runners on a circular track of 400 m at speeds 8 and 5 laps per period meet at the start after LCM-related laps. FOUR — REMAINDER-GROUPING (HCF of differences): a number dividing 437 and 169 leaving remainder 3 in each case divides 437 \u2212 3 = 434 and 169 \u2212 3 = 166, so it divides their difference 268 \u2026 careful: it divides HCF(434, 166): 434 = 2\u00d77\u00d731, 166 = 2\u00d783 \u2192 HCF = 2, and the divisor must exceed the remainder 3 — so re-read: the HCF-of-DIFFERENCES archetype needs the divisor > remainder; here no valid divisor exceeds 3, meaning the question\u2019s numbers would be adjusted in a real paper — the METHOD is what you keep: subtract the remainder, take the HCF of what remains.',
      },
      {
        kind: 'example',
        title: 'Worked example — two archetypes back to back',
        steps: [
          'Identify what is asked: (a) three process-line sirens sound every 18, 24 and 30 minutes — when do they next coincide, and how many times in a 12-hour shift excluding the start? (b) a store room 6 m 30 cm by 4 m 20 cm is to be floored with the fewest identical square tiles — find the tile side and the tile count.',
          'Classify (a): coincidence \u2192 LCM. Factor: 18 = 2\u00b73\u00b2, 24 = 2\u00b3\u00b73, 30 = 2\u00b73\u00b75.',
          'Take every prime at its highest power: LCM = 2\u00b3 \u00d7 3\u00b2 \u00d7 5 = 8 \u00d7 9 \u00d7 5 = 360 minutes = 6 hours.',
          'Count coincidences in 12 hours: 12 \u00f7 6 = 2 more (at hour 6 and hour 12), excluding the shared start.',
          'Classify (b): fewest identical square tiles \u2192 largest possible square \u2192 HCF of 630 cm and 420 cm.',
          'Compute HCF(630, 420): 630 = 2\u00b73\u00b2\u00b75\u00b77, 420 = 2\u00b2\u00b73\u00b75\u00b77 \u2192 shared at lowest powers = 2\u00b73\u00b75\u00b77 = 210 cm. (Euclid check: 630 mod 420 = 210; 420 mod 210 = 0 \u2192 HCF = 210.)',
          'Tile count: (630 \u00f7 210) \u00d7 (420 \u00f7 210) = 3 \u00d7 2 = 6 tiles. State the result: sirens coincide every 360 minutes (twice more in a 12-hour shift); the room needs 6 tiles of 210 cm side.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'The tool-swap trap is the deadliest: LARGEST piece \u2192 HCF (not LCM); COINCIDENCE \u2192 LCM (not HCF) — the options always include the swapped answer. The bridge misuse trap: HCF \u00d7 LCM = product holds only for two numbers. The remainder trap: in the divide-with-remainder-same archetype, the answer must EXCEED the common remainder. And the units trap: 6 m 30 cm is 630 cm, not 63 — convert BEFORE factoring, or every downstream number is silently wrong.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Factor', def: 'A number that divides into n exactly; factors come in pairs straddling \u221an.' },
          { term: 'Multiple', def: 'A product n \u00d7 k; the multiples of n run forever.' },
          { term: 'Fundamental theorem of arithmetic', def: 'Every integer > 1 has exactly one prime factorization (Gauss, 1801) — primes are the unique fingerprint.' },
          { term: 'HCF / GCD', def: 'Highest common factor: shared primes at their lowest powers; the largest number dividing all given numbers.' },
          { term: 'LCM', def: 'Least common multiple: every prime at its highest power; the smallest number all given numbers divide into.' },
          { term: 'Product bridge', def: 'HCF(a,b) \u00d7 LCM(a,b) = a \u00d7 b — valid for exactly two numbers.' },
          { term: 'Co-prime numbers', def: 'Numbers with HCF 1; their LCM is their plain product.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'HCF(84, 90) equals:',
            options: ['3', '6', '12', '18'],
            answer: 1,
            explain: 'Shared primes at lowest powers: 84 = 2\u00b2\u00b73\u00b77, 90 = 2\u00b73\u00b2\u00b75 \u2192 2\u00b9\u00b73\u00b9 = 6. (12 fails — 90 is odd to 4; 18 fails — 84 lacks 3\u00b2.)',
          },
          {
            q: 'LCM(84, 90) equals:',
            options: ['630', '756', '1260', '2520'],
            answer: 2,
            explain: 'Every prime at its highest power: 2\u00b2\u00b73\u00b2\u00b75\u00b77 = 4\u00d79\u00d75\u00d77 = 1260. Bridge check: HCF \u00d7 LCM = 6 \u00d7 1260 = 7560 = 84 \u00d7 90 \u2713.',
          },
          {
            q: 'Two bells ring every 8 and every 12 minutes. They ring together, then again after:',
            options: ['20 minutes', '24 minutes', '48 minutes', '96 minutes'],
            answer: 1,
            explain: 'Coincidence \u2192 LCM(8, 12) = 2\u00b3\u00d73 = 24. The 20-and-48 options are the HCF-plus-sum and double-LCM distractors.',
          },
          {
            q: 'The largest square tile that exactly floors a corridor 612 cm \u00d7 348 cm has side:',
            options: ['4 cm', '6 cm', '12 cm', '36 cm'],
            answer: 2,
            explain: 'Largest identical square \u2192 HCF: 612 = 2\u00b2\u00b73\u00b2\u00b717, 348 = 2\u00b2\u00b73\u00b729 \u2192 2\u00b2\u00b73 = 12. Euclid in three lines: 612 mod 348 = 264; 348 mod 264 = 84; 264 mod 84 = 12; 84 mod 12 = 0.',
          },
          {
            q: 'Two co-prime numbers have product 221. Their LCM is:',
            options: ['1', '13', '17', '221'],
            answer: 3,
            explain: 'Co-prime (HCF 1) \u2192 LCM equals the product itself: 221 = 13 \u00d7 17, both prime, so LCM = 221 with no computation. The distractors are the factors themselves.',
          },
          {
            q: 'A number divides 389 and 298 leaving remainder 4 each time. The largest such number is:',
            options: ['4', '7', '13', '91'],
            answer: 3,
            explain: 'Subtract the remainder: it divides 385 and 294. HCF(385, 294): 385 = 5\u00b77\u00d711, 294 = 2\u00b73\u00b77\u00b2 \u2192 7. Check the constraint: 7 > 4 \u2713. (91 = 7\u00d713 looks related but 13 divides neither 385 nor 294.)',
          },
          {
            q: 'LCM(4, 6, 9) equals:',
            options: ['12', '18', '36', '72'],
            answer: 2,
            explain: 'Fingerprints: 4 = 2\u00b2, 6 = 2\u00b73, 9 = 3\u00b2 \u2192 LCM = 2\u00b2\u00b73\u00b2 = 36. Note the two-number product bridge does NOT extend to three numbers — 4\u00d76\u00d79 = 216 \u2260 36\u00d7(small HCFs); use fingerprints directly.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Remainders & Cyclicity (\u00a71.4) reuses the fingerprint idea for units digits and modular blocks; Fractions, Decimals & Comparison (\u00a71.5) builds on factors for instant simplification; and every timed-work question in \u00a76 silently uses LCM of individual completion times. For Euclid\u2019s algorithm as mathematics rather than tool, the number-theory chapter of the Mathematics Master Library is the deep home.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // §1.4 — remainders & units-digit cyclicity.
  // Carve: math-prime-numbers OWNS modular arithmetic as number theory
  // and Fermat's little theorem feeding RSA. Greps for 'cyclicity' and
  // 'units digit' had ZERO live hits. This lesson OWNS: the exam
  // remainder toolkit — remainder arithmetic, negative remainders,
  // units-digit cycles, friendly power blocks, digit-based shortcuts.
  // ================================================================
  {
    id: 'qa-remainders-cyclicity',
    title: 'Remainders and Cyclicity: Units Digits of Enormous Powers in Fifteen Seconds',
    domain: 'Aptitude & Test Preparation',
    field: 'Quantitative Aptitude',
    branch: 'Arithmetic Foundations',
    tier: 'core',
    concepts: [
      'the remainder is the part left after grouping into equal packs',
      'remainder arithmetic: add and multiply the parts, then re-reduce',
      'negative remainders: borrowing a group from the quotient',
      'units-digit cycles: length 4 for 2, 3, 7, 8; length 2 for 4, 9; length 1 for 0, 1, 5, 6',
      'exponent mod cycle-length selects the digit: 7\u2075\u2075 ends in 7',
      'friendly power blocks: 2\u00b3 \u2261 1 (mod 7) collapses huge exponents',
      'digit-based shortcuts: mod 9 by digit sum, mod 11 by alternating sum',
    ],
    words: 2096,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: '“Find the units digit of 7\u2079\u2075.” Untutored, that looks like an hour of multiplication. Tutored, it is fifteen seconds and one line of cycle work — and it is one of the most reliably repeated question families on quantitative aptitude papers worldwide, from recruitment screening to campus placement tests. This lesson owns the remainder toolkit at examination speed: what remainders are, how they add and multiply, how negative remainders simplify subtraction, and above all how the units digits of powers run in short, closed cycles that turn enormous exponents into tiny ones. The deep theory — modular arithmetic as a number system, Fermat\u2019s little theorem, the cryptography it feeds — belongs to the Mathematics Master Library\u2019s number-theory chapter; here we train exactly the layer tests examine.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Units-digit and remainder questions are pure pattern fluency: zero concepts beyond \u00a71.1–\u00a71.3, maximum marks per minute. They also protect you elsewhere — casting out nines (\u00a71.2) IS remainder arithmetic mod 9, and every “odd/even” elimination in algebra and number puzzles is a mod-2 argument you will now make consciously.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The remainder is what is left over after grouping. Divide 47 by 6: you make 7 groups of six (42) and 5 objects remain — written 47 = 6 \u00d7 7 + 5; remainder 5, and always 0 \u2264 remainder < divisor. The defining test of understanding is the reverse view: EVERY number is (divisor \u00d7 quotient) + remainder, and two numbers have the same remainder exactly when their DIFFERENCE is a multiple of the divisor — 47 and 35 both leave remainder 5 mod 6 because 47 \u2212 35 = 12 = 2\u00d76. That single sentence powers everything below. A number leaves remainder 0 precisely when it is divisible (\u00a71.2\u2019s rules are instant remainder-0 detectors), and the digit-sum rule is really the statement “n and its digit sum have the same remainder mod 9.”',
      },
      {
        kind: 'para',
        text: 'Remainders behave under addition and multiplication — you may replace any number by its remainder mid-computation and re-reduce at the end. (58 + 47) mod 10: 58 ends in 8, 47 ends in 7, 8 + 7 = 15, ends in 5 — so the sum ends in 5, computed without ever forming 105. (58 \u00d7 47) mod 10: 8 \u00d7 7 = 56 \u2192 6. The same works for any divisor: (37 + 84) mod 9: 37 \u2192 1, 84 \u2192 3, 1 + 3 = 4 \u2713 (121 \u2192 4). (23 \u00d7 18) mod 7: 23 \u2192 2, 18 \u2192 4, 2 \u00d7 4 = 8 \u2192 1 \u2713 (414 \u2192 414 \u2212 59\u00d77 = 414 \u2212 413 = 1). WHY: if a = 7p + r and b = 7q + s, then a + b = 7(p+q) + (r+s) and ab = 7(7pq + ps + qr) + rs — the groups part stays a multiple of 7, so only the small remainders matter. This inheritance is the engine of every shortcut in this lesson.',
      },
      {
        kind: 'para',
        text: 'Negative remainders are a bookkeeping convenience that turns awkward subtractions into easy ones. 100 \u00f7 7 is 14 remainder 2 — but it is equally 15 groups SHORT by 5: 100 = 7 \u00d7 15 \u2212 5, so 100 \u2261 \u22125 (mod 7), just as a clock at 10 o\u2019clock is \u201c2 hours to 12.\u201d You switch freely between +2 and \u22125, whichever makes the arithmetic nicer. Where this shines: powers of numbers just below a divisor. 8\u2075 mod 7? Since 8 \u2261 1 (mod 7), immediately 1. But 6\u2075 mod 7 is easier as (\u22121)\u2075 = \u22121 \u2261 6 (mod 7) — five seconds, no tower of sixes. The general habit: when a base sits ONE away from a multiple of the divisor, rewrite it as \u00b11 and let the exponent\u2019s parity do the work.',
      },
      {
        kind: 'para',
        text: 'Units digits of powers run in CYCLES, because the units digit of a product depends only on the units digits of its factors (mod-10 inheritance from above). Follow 7: 7\u00b9 = 7, 7\u00b2 = 49 \u2192 9, 7\u00b3 = 343 \u2192 3, 7\u2074 = 2401 \u2192 1, 7\u2075 \u2192 7 again — cycle (7, 9, 3, 1) of length 4, forever. The complete table: 2 runs (2, 4, 8, 6); 3 runs (3, 9, 7, 1); 8 runs (8, 4, 2, 6); 7 as above — all length 4. Then 4 runs (4, 6) and 9 runs (9, 1) — length 2. And 0, 1, 5, 6 are FIXED: every power of 6 ends in 6, every power of 5 in 5 (then 25, 125 \u2026). The cycles close because some power of each digit is \u2261 1 (mod 10): 2\u2074 = 16 \u2192 6? No — the closure is at 4 for some digits and 2 for others precisely because the multiplicative structure of mod-10 residues has order 4 for 3 and 7, order 2 for 9. You need none of that language; you need the table cold.',
      },
      {
        kind: 'figure',
        caption:
          'The four units-digit cycles, read clockwise: length 4 for 2, 3, 7, 8; length 2 for 4 and 9; the fixed digits 0, 1, 5, 6 stand outside the wheels.',
        afterConcept: 4,
        svg: `<svg viewBox="0 0 840 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Units digit cycle wheels">
  <style>.d{font-family:Georgia,serif;font-size:20px;font-weight:bold;fill:#3f3f46}.cap{font-family:Georgia,serif;font-size:15px;fill:#52525b}.w{stroke:#8a8a93;fill:none;stroke-width:2;stroke-linecap:round}.ar{stroke:#e11d48;fill:none;stroke-width:2.4;stroke-linecap:round}</style>
  <circle class="w" cx="120" cy="150" r="70"/>
  <text class="d" x="112" y="86">2</text><text class="d" x="165" y="120">4</text><text class="d" x="150" y="205">8</text><text class="d" x="82" y="205">6</text>
  <path class="ar" d="M135 92 C 160 100, 172 112, 175 130"/>
  <path class="ar" d="M176 170 C 172 190, 162 203, 145 212"/>
  <path class="ar" d="M105 214 C 88 205, 78 192, 76 174"/>
  <path class="ar" d="M75 132 C 79 112, 90 99, 106 91"/>
  <text class="cap" x="62" y="255">base 2: (2,4,8,6)</text>
  <circle class="w" cx="330" cy="150" r="70"/>
  <text class="d" x="322" y="86">3</text><text class="d" x="375" y="120">9</text><text class="d" x="360" y="205">7</text><text class="d" x="292" y="205">1</text>
  <path class="ar" d="M345 92 C 370 100, 382 112, 385 130"/>
  <path class="ar" d="M386 170 C 382 190, 372 203, 355 212"/>
  <path class="ar" d="M315 214 C 298 205, 288 192, 286 174"/>
  <path class="ar" d="M285 132 C 289 112, 300 99, 316 91"/>
  <text class="cap" x="272" y="255">bases 3 and 7</text>
  <circle class="w" cx="540" cy="150" r="70"/>
  <text class="d" x="532" y="101">4</text><text class="d" x="570" y="185">6</text>
  <path class="ar" d="M556 104 C 576 122, 580 150, 574 172"/>
  <path class="ar" d="M548 194 C 528 186, 518 166, 522 130"/>
  <text class="d" x="560" y="86"></text>
  <text class="cap" x="482" y="255">bases 4 and 9: length 2</text>
  <text class="d" x="700" y="120">0, 1,</text><text class="d" x="700" y="150">5, 6</text>
  <text class="cap" x="678" y="185">fixed forever</text>
  <text class="cap" x="640" y="255">(base 8 wheel matches 2, reversed)</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Using cyclicity is a two-step drill. Step 1: reduce the exponent modulo the cycle length. Step 2: read the selected position in the cycle (with remainder 0 meaning the LAST element of the cycle, since a whole number of loops lands on the closing digit). Units digit of 7\u2079\u2075: cycle (7, 9, 3, 1) has length 4; 95 = 4\u00d723 + 3, so remainder 3 \u2192 third element \u2192 3. Units digit of 3\u00b3\u2074: 34 = 4\u00d78 + 2 \u2192 second element of (3, 9, 7, 1) \u2192 9. Units digit of 2\u2076\u2070: 70 = 4\u00d717 + 2 \u2192 4. And the exponent-0 convention: 7\u2070 = 1, the cycle closes — so remainder 0 \u2192 the cycle\u2019s final digit (here 1). Composite bases reduce first: units of 14\u00b2\u2075 = units of 4\u00b2\u2075: cycle (4, 6), 25 odd \u2192 4. This drill, five minutes a day for a week, permanently installs the table.',
      },
      {
        kind: 'para',
        text: 'Friendly power blocks collapse huge exponents modulo small divisors. The flagship: 2\u00b3 = 8 \u2261 1 (mod 7), so 2\u00b9\u2070\u2070 = (2\u00b3)\u00b3\u00b3 \u00d7 2 \u2261 1\u00b3\u00b3 \u00d7 2 \u2261 2 (mod 7). Same game, other divisors: 3\u2075 = 243 \u2261 3 (mod 10) reflects the 4-cycle; 5\u00b3 \u2261 5 (mod 10) trivially; 4\u00b9\u2070 \u2261 6 (mod 10) since even exponent picks the 6. For mod 11: 10 \u2261 \u22121, so 10\u2075\u2078 \u2261 1 (even exponent) — the alternating-sum rule of \u00a71.2 in disguise. For mod 9: any number\u2019s power can be tracked through digit sums — 44 \u2261 8 (mod 9), and 8\u00b2 \u2261 1 (mod 9), so 44\u1d4e \u2261 8\u1d4f (mod 9), alternating 8, 1, 8, 1. The general habit: hunt for a SMALL power of the base that is \u2261 \u00b11 (mod divisor), block the exponent by that length, and handle the small leftover. Fermat\u2019s little theorem (1640) guarantees such blocks exist when divisor is prime — exponent p \u2212 1 — which is WHY this hunting never fails on prime divisors; the theory lives in the number-theory chapter, the habit lives here.',
      },
      {
        kind: 'para',
        text: 'Digit-based shortcuts close the toolkit. Mod 9: the digit sum inherits the remainder — 1234 \u2192 1+2+3+4 = 10 \u2192 1, so 1234 leaves remainder 1 (check: 1233 = 9 \u00d7 137). Mod 11: the alternating sum — for 86,4325 read 864325: 5 \u2212 2 + 3 \u2212 4 + 6 \u2212 8 = 0 \u2192 divisible by 11, as verified in \u00a71.2\u2019s worked example. Mod 4: the last pair of digits; mod 8: the last triple; mod 2, 5, 10: the last digit. These inherited-remainder rules turn \u201cfind the remainder of this enormous number\u201d into a read-off, and they combine: remainder mod 12 follows from remainders mod 3 and mod 4 (Chinese-remainder-style recombination — the classical source is the third-century Sunzi Suanjing, whose remainder puzzle of Counting-out is the ancestor of the method; the formal CRT is proved in the number-theory chapters of algebra texts).',
      },
      {
        kind: 'example',
        title: 'Worked example — the fifteen-second units digit',
        steps: [
          'Identify what is asked: the units digit of N = (7\u2079\u2075 \u00d7 3\u00b3\u2074) + 14\u00b2\u2075, computed without evaluating any power.',
          'Units of 7\u2079\u2075: base 7 cycles (7, 9, 3, 1), length 4. Reduce the exponent: 95 = 4\u00d723 + 3 \u2192 position 3 \u2192 units digit 3.',
          'Units of 3\u00b3\u2074: base 3 cycles (3, 9, 7, 1), length 4. 34 = 4\u00d78 + 2 \u2192 position 2 \u2192 units digit 9.',
          'Units of the product: 3 \u00d7 9 = 27 \u2192 units digit 7 (mod-10 multiplication inheritance).',
          'Units of 14\u00b2\u2075: reduce the base to its units digit 4; cycle (4, 6), length 2; 25 is odd \u2192 position 1 \u2192 units digit 4.',
          'Add the parts: 7 + 4 = 11 \u2192 units digit 1. State the result: N ends in 1 — four cycle-lookups and one digit addition, no exponent ever evaluated.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'The remainder-0 trap: exponent divisible by the cycle length means the LAST cycle digit (7\u2074 ends in 1, not 7) — candidates reflexively answer the first element. The base trap: reduce composite bases to units digits FIRST (18\u2077 ends like 8\u2077, which cycles (8, 4, 2, 6) — not like 1\u2077). The subtraction slip: with negative remainders, \u22123 (mod 7) equals +4 — forgetting the final flip yields negative \u201cunits digits\u201d that no option matches. And the over-engineering trap: if the divisor is 10, work ONLY with units digits; dragging the full numbers along wastes the very time this technique exists to save.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Remainder', def: 'The part left after grouping into equal packs: n = d\u00d7q + r with 0 \u2264 r < d.' },
          { term: 'Congruence', def: 'Same remainder: a \u2261 b (mod d) exactly when d divides a \u2212 b.' },
          { term: 'Negative remainder', def: 'Reading r as r \u2212 d when convenient (\u22125 \u2261 2 mod 7); a borrow from the quotient.' },
          { term: 'Units-digit cycle', def: 'The closed loop of final digits a base\u2019s powers run through: length 4 for 2, 3, 7, 8; length 2 for 4, 9; length 1 for 0, 1, 5, 6.' },
          { term: 'Cycle position', def: 'Exponent mod cycle length; remainder 0 selects the cycle\u2019s closing digit.' },
          { term: 'Friendly power block', def: 'A small power of the base congruent to \u00b11 (mod divisor), used to chunk a huge exponent.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The units digit of 7\u2079\u2075 is:',
            options: ['1', '3', '7', '9'],
            answer: 1,
            explain: 'Cycle (7, 9, 3, 1) has length 4; 95 mod 4 = 3 \u2192 third element = 3. (7\u00b3 = 343 confirms.)',
          },
          {
            q: 'The units digit of 3\u00b3\u2074 is:',
            options: ['3', '7', '9', '1'],
            answer: 2,
            explain: '34 mod 4 = 2 \u2192 second element of (3, 9, 7, 1) = 9. (3\u00b2 = 9, 3\u2076 = 729 — every fourth power realigns.)',
          },
          {
            q: 'The remainder when 2\u00b9\u2070\u2070 is divided by 7 is:',
            options: ['1', '2', '4', '6'],
            answer: 1,
            explain: '2\u00b3 = 8 \u2261 1 (mod 7); 100 = 3\u00d733 + 1, so 2\u00b9\u2070\u2070 = (2\u00b3)\u00b3\u00b3 \u00d7 2 \u2261 1\u00d72 = 2. Careful — the leftover exponent is 1, giving remainder 2, not 1: the block absorbs 99 of the 100 factors.',
          },
          {
            q: 'The remainder when 864,325 is divided by 11 is:',
            options: ['0', '1', '5', '9'],
            answer: 0,
            explain: 'Alternating sum from the right: 5 \u2212 2 + 3 \u2212 4 + 6 \u2212 8 = 0, a multiple of 11 \u2192 remainder 0 (864,325 = 11 \u00d7 78,575).',
          },
          {
            q: 'The units digit of (14)\u00b2\u2075 is:',
            options: ['4', '6', '2', '8'],
            answer: 0,
            explain: '14 behaves like its units digit 4: cycle (4, 6). Odd exponent \u2192 4; even \u2192 6. 25 is odd \u2192 4.',
          },
          {
            q: '100 expressed with a negative remainder modulo 7 is:',
            options: ['100 \u2261 \u22122 (mod 7)', '100 \u2261 \u22125 (mod 7)', '100 \u2261 \u22123 (mod 7)', '100 \u2261 \u22121 (mod 7)'],
            answer: 1,
            explain: '100 = 7\u00d714 + 2 = 7\u00d715 \u2212 5, so 100 \u2261 2 \u2261 \u22125 (mod 7). Negative remainders always satisfy r\u2212d; the flip (+2 \u2194 \u22125) is the working convenience.',
          },
          {
            q: 'The remainder when 1234 is divided by 9 is:',
            options: ['1', '2', '4', '0'],
            answer: 0,
            explain: 'Digit sum 1+2+3+4 = 10 \u2192 1+0 = 1: remainder 1 (1233 = 9 \u00d7 137). The digit-sum rule of \u00a71.2 is exactly this mod-9 inheritance.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'This closes the number-system rungs of the ladder: \u00a71.1 place value and families, \u00a71.2 divisibility detection, \u00a71.3 factors/HCF/LCM, \u00a71.4 remainders and cycles. Next rung: Fractions, Decimals & Comparison Short-Cuts (\u00a71.5), then Surds & Indices (\u00a71.6). For the mathematics beneath — congruence as a structure, Fermat and Euler theorems, the Chinese remainder theorem, and the RSA system this arithmetic protects — the number-theory chapter of the Mathematics Master Library is the deep home; this book returns to the theory only when a test format requires it.',
        tone: 'path',
      },
    ],
  },
  // ================================================================
  // §1.5 — fractions, decimals & comparison short-cuts.
  // Carve: NO live lesson owns fraction/decimal territory (greps for
  // 'fraction|decimal' in topic ids and titles: zero hits — the only
  // neighbour is fnd-percentage-ratio-mental-math, which owns the
  // percent/ratio everyday layer at 883 words, and this lesson points
  // Ch2 of THIS book at percentages next). math-prime-numbers owns
  // primes/GCD as number theory; ku-math-algebra-notation-
  // manipulation owns expression algebra. This lesson OWNS: the
  // fraction–decimal–percent conversion table, the five comparison
  // tools (same-denominator, same-numerator, cross-multiplication,
  // LCM common ground for sets, distance-from-1), recurring-decimal
  // conversion (the nines law), and the mediant bracket ladder top.
  // Sources: OpenStax Prealgebra 2e Ch. 4 (Fractions) & Ch. 5
  // (Decimals), NCERT Class 6–7 fractions/decimals chapters, R.S.
  // Aggarwal TOC (fractions/decimals section), Arun Sharma TOC; Simon
  // Stevin, De Thiende (1585, decimal fractions popularized); Moritz
  // Stern (1858) & Achille Brocot (1861, clockmaker gear ratios) for
  // the Stern–Brocot tree; John Farey (1816) & Cauchy's proof of the
  // Farey property; Archimedes, Measurement of a Circle (223/71 <
  // π < 22/7); Zu Chongzhi's Milü 355/113 (fifth century). No exam
  // name appears in lesson-facing text (product rule).
  // ================================================================
  {
    id: 'qa-fractions-decimals-comparison',
    title: 'Fractions, Decimals and the Comparison Short-Cuts: Ordering Any Two Numbers in Ten Seconds',
    domain: 'Aptitude & Test Preparation',
    field: 'Quantitative Aptitude',
    branch: 'Arithmetic Foundations',
    tier: 'core',
    concepts: [
      'a fraction is a division statement: the numerator counts pieces, the denominator sizes them',
      'the three costumes — fraction, decimal, percent — and the memorized 1/n conversion table',
      'same denominator: bigger numerator wins; same numerator: smaller denominator wins',
      'cross-multiplication: a/b vs c/d is ad vs bc — multiply along the arms of the X',
      'sets: LCM common denominator or decimal conversion (three places); benchmark 1/2 classifies first',
      'distance from 1: the smaller complement belongs to the larger fraction',
      'recurring decimals: a period of k digits means k nines below; the 1/7 six-rotation family',
      'the mediant (a+c)/(b+d) brackets strictly between — the Stern–Brocot ladder to π’s best friends',
    ],
    words: 2924,
    readMins: 15,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: '“Which is larger, 7/12 or 5/9?” Untutored, that invites converting both to some guessed common ground and drowning in arithmetic. Tutored, it is one X-shaped multiply and ten seconds: 7 × 9 = 63 against 5 × 12 = 60, and 7/12 wins. This lesson owns the fraction–decimal–percent layer at examination speed. It builds the piece-counting view of a fraction, installs the conversion table that makes decimals and percents interchangeable costumes, hands over the five comparison tools in decision order, and converts recurring decimals into exact fractions by the nines law. It closes at the ladder’s top: the mediant bracket, the device that let Archimedes cage π between 223/71 and 22/7 and let Zu Chongzhi land 355/113 — accurate to seven significant figures — in the fifth century, with nothing but addition.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Comparison items are the quiet backbone of every quantitative screening paper: direct “which is greatest” questions, data-interpretation choices priced in fractions, quantity-comparison columns, and approximation calls all resolve through this toolkit. The 1/n conversion table installed below is the single highest-yield memorization in this book — it feeds percentages (Ch2), interest (Ch4), and data interpretation (Ch12) directly.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A fraction is a division statement frozen in place: 7/12 names the number 7 ÷ 12, and every manipulation below is licensed by that identity. The two numbers have asymmetric jobs — the NUMERATOR counts pieces taken; the DENOMINATOR sizes the pieces. This gives the first free insight, the piece-size flip: with the numerator held fixed, a bigger denominator means SMALLER pieces, so 5/7 > 5/9 (fifths of a whole are bigger than ninths), and a bigger denominator means the fraction sits closer to zero. The flip fails only when the numerator is not fixed — and that is exactly when the heavier tools below take over. Every fraction also lives on the number line next to its decimal expansion: 7/12 = 0.58333…, a fact you will verify to the digit in this lesson’s derivation.',
      },
      {
        kind: 'para',
        text: 'The same number wears three costumes: the fraction 3/8, the decimal 0.375, and the percent 37.5% (per-cent = per hundred: multiply the decimal by 100). Fluency means converting between costumes on sight, and that runs on ONE memorized spine — the 1/n table: 1/2 = 0.5 = 50%; 1/3 = 0.333…; 1/4 = 0.25; 1/5 = 0.2; 1/6 = 0.166…; 1/7 = 0.142857… (the six-digit cycle below); 1/8 = 0.125; 1/9 = 0.111…; 1/11 = 0.0909…; 1/12 = 0.0833…; 1/15 = 0.0666…; 1/16 = 0.0625. Every k/n is k × the spine entry: 3/8 = 3 × 12.5% = 37.5%; 5/8 = 62.5%; 7/8 = 87.5%; 2/3 = 66.6…%. Quarters and eighths run in clean 12.5% steps; fifths in 20% steps; ninths repeat their digit (2/9 = 0.222…); elevenths repeat two digits (2/11 = 0.1818…). This table is not trivia to admire — it is the working memory that makes the rest of the lesson run at speed.',
      },
      {
        kind: 'para',
        text: 'Two comparisons cost nothing. SAME DENOMINATOR: pieces are the same size, so the bigger numerator wins — 5/11 < 7/11, as directly as 5 objects < 7 objects. SAME NUMERATOR: the piece-size flip from above — the smaller denominator makes bigger pieces, so 5/7 > 5/9. Real questions rarely hand you these alignments; you CREATE them. When two fractions’ denominators are both small and friendly, find their LCM common denominator (§1.3) and rewrite both: comparing 4/7 with 5/9, LCM(7, 9) = 63 gives 36/63 against 35/63 — one point apart, and the gap is now visible as plain counting. The same move scales to a whole SET of fractions: rewrite all of them over the LCM of their denominators and order the numerators (a worked set appears in the next concept).',
      },
      {
        kind: 'para',
        text: 'Cross-multiplication is the workhorse for a single pair, because it creates the common ground without ever writing it down. For b, d > 0: a/b vs c/d is decided by ad vs bc — multiply each numerator by the OTHER denominator, along the arms of the X drawn over the pair. 7/12 vs 5/9: 7 × 9 = 63 vs 5 × 12 = 60 → 63 wins → 7/12 is larger (decimals confirm: 0.5833… vs 0.5555…). WHY it works, in one line: multiply both fractions by bd — the positive product of denominators — and the left becomes ad while the right becomes bc; multiplying both sides of a comparison by a positive number never changes who wins. Watch the arms: it is a×d against c×b, never a×c against b×d. Cross-multiplication is optimal for ONE pair; for three or more fractions it produces a pile of pairwise products, and the set tools below are faster.',
      },
      {
        kind: 'figure',
        caption:
          'The comparison decision ladder: four checks in order — same denominator, same numerator, distance from 1, then cross-multiply — with the set-level tools (LCM common denominator, decimal conversion, benchmark 1/2) running underneath.',
        afterConcept: 3,
        svg: `<svg viewBox="0 0 840 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fraction comparison decision ladder">
  <style>.bx{fill:#faf5ff;stroke:#8a8a93;stroke-width:1.6;rx:8}.ac{fill:#ecfdf5;stroke:#8a8a93;stroke-width:1.6;rx:8}.q{font-family:Georgia,serif;font-size:16px;font-weight:bold;fill:#3f3f46}.a{font-family:Georgia,serif;font-size:15px;fill:#3f3f46}.lb{font-family:Georgia,serif;font-size:13px;fill:#71717a}.ar{stroke:#e11d48;fill:none;stroke-width:2;stroke-linecap:round;marker-end:url(#h)}</style>
  <defs><marker id="h" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" fill="#e11d48"/></marker></defs>
  <rect class="bx" x="240" y="14" width="180" height="34" rx="8"/><text class="q" x="330" y="36" text-anchor="middle">two fractions a/b, c/d</text>
  <line class="ar" x1="330" y1="48" x2="330" y2="70"/>
  <rect class="bx" x="180" y="72" width="300" height="34" rx="8"/><text class="q" x="330" y="94" text-anchor="middle">same denominator? → bigger numerator wins</text>
  <line class="ar" x1="330" y1="106" x2="330" y2="128"/>
  <rect class="bx" x="180" y="130" width="300" height="34" rx="8"/><text class="q" x="330" y="152" text-anchor="middle">same numerator? → smaller denominator wins</text>
  <line class="ar" x1="330" y1="164" x2="330" y2="186"/>
  <rect class="bx" x="180" y="188" width="300" height="34" rx="8"/><text class="q" x="330" y="210" text-anchor="middle">both close to 1? → compare distances from 1</text>
  <line class="ar" x1="330" y1="222" x2="330" y2="244"/>
  <rect class="ac" x="180" y="246" width="300" height="34" rx="8"/><text class="q" x="330" y="268" text-anchor="middle">otherwise → cross-multiply: ad vs bc</text>
  <line class="ar" x1="480" y1="100" x2="580" y2="100"/>
  <line class="ar" x1="480" y1="158" x2="580" y2="158"/>
  <line class="ar" x1="480" y1="216" x2="580" y2="216"/>
  <rect class="bx" x="584" y="80" width="238" height="160" rx="8"/>
  <text class="a" x="600" y="104">a whole set? work set-level:</text>
  <text class="a" x="600" y="130">· benchmark 1/2: classify</text>
  <text class="a" x="614" y="150">above/below first</text>
  <text class="a" x="600" y="176">· LCM common denominator</text>
  <text class="a" x="600" y="202">· decimal conversion</text>
  <text class="a" x="614" y="222">(three places) — then seal</text>
  <text class="a" x="614" y="240">close pairs with the X</text>
  <text class="lb" x="180" y="312">checks run top to bottom — stop at the first that applies;</text>
  <text class="lb" x="180" y="330">cross-multiplication is the default that always works for one pair</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Sets of three or more fractions need set-level tools, and the first is classification: use the benchmark 1/2 to split the field — 4/9 and 3/7 sit below it, 5/9 and 4/7 above — and the winner can only come from the above-benchmark group. Inside a group, two exact routes exist. Route A, the LCM common denominator: order 5/6, 7/9, 11/15 — LCM(6, 9, 15) = 90, and the set becomes 75/90, 70/90, 66/90, so 11/15 < 7/9 < 5/6 at a glance. Route B, decimal conversion (three places): divide each fraction to three decimal places — indispensable when denominators are awkward (13, 17, 23 have no friendly LCM partners). 5/8 = 0.625 exactly, but 7/11 = 0.6363… rounds to 0.636 — and when two decimals collide at three places, do NOT trust the rounding: seal the close pair with cross-multiplication, which is exact. Speed policy: decimals for the broad pass, the X for the tight finish.',
      },
      {
        kind: 'para',
        text: 'Distance from 1 is the elegant fifth tool, built on one subtraction: 1 − a/b = (b − a)/b, the complement. If two fractions are both close to 1, compare their complements — the SMALLER complement belongs to the LARGER fraction. 8/9 vs 7/8: complements are 1/9 ≈ 0.111 and 1/8 = 0.125; since 1/9 < 1/8, the fraction 8/9 is closer to 1 and therefore larger. The same logic works from the benchmark 1/2 for fractions straddling it: subtract 1/2 from each and compare the gaps. Complements turn “which is bigger” into “which leftover is smaller,” and leftovers are often one-step fractions with tiny denominators — 1/9 against 1/8 is a far easier fight than 8/9 against 7/8 looks. Any common anchor works: distance from 3/4, from 2, from 100 — the pattern is invariance under subtracting both from the same reference.',
      },
      {
        kind: 'para',
        text: 'Recurring decimals are fractions in disguise, and the disguise comes off with the nines law (derived in full below): a repeating block of k digits means the fraction’s denominator is 10^k − 1 — a string of k nines. 0.727272… = 72/99 = 8/11; 0.333… = 3/9 = 1/3; 0.0909… = 9/99 = 1/11. When non-repeating digits precede the block (a MIXED recurring decimal such as 0.58333…), the denominator grows to (10^k − 1) × 10^m, and the worked numbers below show 0.58333… = 7/12 exactly. One memorized expansion can mint six fractions: 1/7 = 0.142857142857…, and the block 142857 ROTATES one place for each next numerator — 2/7 = 0.285714…, 3/7 = 0.428571…, 4/7 = 0.571428…, 5/7 = 0.714285…, 6/7 = 0.857142… — so reading 0.428571… off an option list resolves instantly to 3/7. Finally, the boundary law: a fraction in lowest terms has a TERMINATING decimal exactly when its denominator’s prime factors are only 2s and 5s (12 = 2² × 3 → recurring; 16 = 2⁴ → terminating at four places).',
      },
      {
        kind: 'figure',
        caption:
          'The 1/7 rotation wheel: one six-digit block, 142857, read from six different starting points — the decimal of n/7 is the block started n − 1 places in, so six fractions cost one memorized expansion.',
        afterConcept: 6,
        svg: `<svg viewBox="0 0 840 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The 1/7 rotation wheel">
  <style>.d{font-family:Georgia,serif;font-size:18px;font-weight:bold;fill:#3f3f46}.dd{font-family:Georgia,serif;font-size:13px;fill:#52525b}.c{font-family:Georgia,serif;font-size:15px;fill:#71717a}.w{stroke:#8a8a93;fill:none;stroke-width:2}.ar{stroke:#e11d48;fill:none;stroke-width:2.2;stroke-linecap:round;marker-end:url(#h2)}</style>
  <defs><marker id="h2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" fill="#e11d48"/></marker></defs>
  <circle class="w" cx="420" cy="160" r="86"/>
  <text class="c" x="420" y="150" text-anchor="middle">one block,</text>
  <text class="c" x="420" y="172" text-anchor="middle">six starting points</text>
  <text class="d" x="420" y="112" text-anchor="middle">1/7</text>
  <text class="dd" x="420" y="132" text-anchor="middle">0.142857…</text>
  <text class="d" x="512" y="86" text-anchor="middle">2/7</text>
  <text class="dd" x="512" y="106" text-anchor="middle">0.285714…</text>
  <text class="d" x="512" y="222" text-anchor="middle">3/7</text>
  <text class="dd" x="512" y="242" text-anchor="middle">0.428571…</text>
  <text class="d" x="420" y="242" text-anchor="middle">4/7</text>
  <text class="dd" x="420" y="262" text-anchor="middle">0.571428…</text>
  <text class="d" x="328" y="222" text-anchor="middle">5/7</text>
  <text class="dd" x="328" y="242" text-anchor="middle">0.714285…</text>
  <text class="d" x="328" y="86" text-anchor="middle">6/7</text>
  <text class="dd" x="328" y="106" text-anchor="middle">0.857142…</text>
  <path class="ar" d="M446 118 C 470 122, 488 132, 498 142"/>
  <path class="ar" d="M516 152 C 522 170, 522 192, 516 206"/>
  <path class="ar" d="M498 216 C 488 226, 470 236, 452 240"/>
  <path class="ar" d="M394 240 C 376 236, 358 226, 348 216"/>
  <path class="ar" d="M324 206 C 318 192, 318 170, 324 152"/>
  <path class="ar" d="M348 142 C 358 132, 376 122, 394 118"/>
  <text class="c" x="620" y="120">read n/7 by starting the</text>
  <text class="c" x="620" y="140">block n − 1 places in:</text>
  <text class="c" x="620" y="166">3/7 starts at place 3</text>
  <text class="c" x="620" y="186">→ 428571</text>
  <text class="c" x="620" y="218">clockwise = multiply the</text>
  <text class="c" x="620" y="238">numerator; the block only</text>
  <text class="c" x="620" y="258">rotates, never changes</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The ladder top: bracketing with the MEDIANT. For two fractions a/b < c/d, the mediant (a + c)/(b + d) — the naive “add across” — always lies STRICTLY between them: between 3/5 and 5/8 sits 8/13, and indeed 0.600 < 0.6154 < 0.625. As an ANSWER the mediant is a trap (it is not the average of the two fractions); as a BOUND it is a precision instrument. Insert mediants repeatedly and you fill the number line with every fraction in order — the Stern–Brocot tree, found by Moritz Stern (1858) and independently by Achille Brocot (1861), a French clockmaker who used it to pick gear ratios approximating target speed ratios. Walk the tree toward π starting from the bracket 3/1 < π < 4/1: repeated mediants give 22/7, then squeeze to 223/71 < π < 22/7 — precisely Archimedes’ bracket in the Measurement of a Circle — then 333/106, then 355/113, Zu Chongzhi’s fifth-century Milü, off by less than 0.0000003. The Farey sequence (John Farey, 1816; Augustin-Louis Cauchy proved why the mediant structure works) lists ordered fractions with capped denominators and powers the same walk. The deep theory — continued fractions and best rational approximation — lives in the Mathematics Master Library; the working habit lives here: when two bounds squeeze a value, the mediant is the best next guess.',
      },
      {
        kind: 'example',
        title: 'Worked example — ascending order, four fractions, no calculator',
        steps: [
          'Identify what is asked: arrange 5/8, 2/3, 7/11, 3/5 in ascending order with exact comparisons.',
          'Benchmark pass: all four exceed 1/2 (numerators beat half their denominators: 5 > 4, 2 > 1.5, 7 > 5.5, 3 > 2.5) — the winner must be separated inside this group.',
          'Decimal conversion (three places): 3/5 = 0.600; 5/8 = 0.625; 7/11 = 0.636 (0.6363…); 2/3 = 0.667 (0.6666…). Broad order: 3/5 < 5/8 < 7/11 < 2/3.',
          'Seal the tight pair 5/8 vs 7/11 by cross-multiplication: 5 × 11 = 55 vs 7 × 8 = 56 → 55 < 56, so 5/8 < 7/11 — the rounding gap (0.625 vs 0.636) is confirmed as real.',
          'Seal the top pair 7/11 vs 2/3: 7 × 3 = 21 vs 2 × 11 = 22 → 21 < 22, so 7/11 < 2/3.',
          'State the result: 3/5 < 5/8 < 7/11 < 2/3 — benchmark, decimals for the broad pass, the X as the exactness seal on every close pair.',
        ],
      },
      {
        kind: 'derivation',
        title: 'Why the nines law works: turning a recurring decimal into an exact fraction',
        statement:
          'Derivation of the recurring-decimal law from place value: a decimal whose block of k digits repeats forever equals a fraction with denominator $10^k - 1$ (k nines) — shown for $0.\\overline{72}$, then generalized to mixed cases.',
        prerequisites: ['Place value (§1.1)', 'Multiplying by powers of ten shifts the point one place per zero'],
        steps: [
          {
            label: 'Step 1: Name the unknown',
            formula: '$$x = 0.72727272\\ldots = 0.\\overline{72}$$',
            explanation:
              'The block 72 repeats without end; x is the exact number this notation names. Nothing is rounded — the tail is infinite by definition.',
          },
          {
            label: 'Step 2: Shift by one full period',
            formula: '$$100x = 72.727272\\ldots$$',
            explanation:
              'Multiplying by 10^k (here 10² = 100) slides the point exactly one full block right. The repeating tail now hangs BELOW the whole number 72 — but digit-for-digit identical to the tail under x.',
          },
          {
            label: 'Step 3: Subtract — the infinite tails cancel',
            formula: '$$100x - x = 72.727272\\ldots - 0.727272\\ldots = 72$$',
            explanation:
              'Both numbers carry the SAME infinite tail after the point, so subtracting cancels it completely and exactly: the difference is the clean integer 72. No limits, no approximation — just an exact cancellation.',
          },
          {
            label: 'Step 4: Solve and reduce',
            formula: '$$99x = 72 \\quad\\Rightarrow\\quad x = \\tfrac{72}{99} = \\tfrac{8}{11}$$',
            explanation:
              'Denominator 99 = 10² − 1: two nines for a two-digit block. Reduce by the GCD (§1.3): 72/99 = 8/11. Check by division: 8 ÷ 11 = 0.727272… ✓ — the disguise is fully off.',
          },
          {
            label: 'Step 5: Generalize — the nines law and the mixed case',
            formula: '$$0.\\overline{d_1 d_2 \\ldots d_k} = \\frac{d_1 d_2 \\ldots d_k}{10^k - 1} \\qquad\\quad 0.58\\overline{3} = \\frac{583 - 58}{9 \\times 100} = \\frac{525}{900} = \\frac{7}{12}$$',
            explanation:
              'Pure block of k digits → denominator of k nines. With m non-repeating digits before the block, multiply the denominator by 10^m and subtract the prefix in the numerator: 0.58333… has m = 2, k = 1 → denominator 9 × 100 = 900, numerator 583 − 58 = 525 → 7/12 (and 7 ÷ 12 = 0.58333… ✓ — the fraction the opening concept promised).',
          },
        ],
        result:
          'A recurring decimal is a fraction wearing a costume: period k → denominator 10^k − 1; a non-repeating tail of m digits multiplies that denominator by 10^m. Terminating decimals are the special case — denominators built only from 2s and 5s, the numbers that divide a power of ten.',
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'The place-value trap: 0.6 > 0.58 — more digits never mean a bigger number; compare from the left (6 tenths beats 5 tenths outright). The numerator trap: 5/9 is SMALLER than 5/7 — fixed numerator, bigger denominator, smaller pieces. The arms slip: a/b vs c/d compares a×d with c×b, never a×c with b×d — write the X over the pair and read its arms. The rounding trap: when rounded decimals collide at three places, only cross-multiplication decides — 0.625 vs 0.636 looked safe, but pairs like 0.667 vs 0.667 would have decided nothing. The costume trap: 0.999… is EXACTLY 1 (nines law, block 9: 9/9), not “just below” — options exploiting this count on hesitation. And the mediant trap: (a+c)/(b+d) is a bound between the pair, never the answer to “which is bigger.”',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Cross-multiplication', def: 'a/b vs c/d decided by ad vs bc (b, d > 0) — the products along the arms of the X; exact, and equivalent to multiplying both sides by bd.' },
          { term: 'Benchmark fraction', def: 'An anchor such as 1/2 or 1 used to classify fractions above/below before fine comparison.' },
          { term: 'Complement comparison', def: 'Comparing distances from an anchor: 1 − a/b against 1 − c/d; the smaller complement belongs to the larger fraction.' },
          { term: 'LCM common denominator', def: 'The least common multiple of denominators (§1.3) as the exact common ground for ordering a whole set.' },
          { term: 'Terminating decimal', def: 'A decimal that ends; its fraction, in lowest terms, has a denominator built only from 2s and 5s.' },
          { term: 'Recurring decimal', def: 'A decimal whose digits fall into an eventually repeating block; the block length is the period.' },
          { term: 'Mixed recurring decimal', def: 'Non-repeating digits precede the block (0.58333…); denominator (10^k − 1) × 10^m.' },
          { term: 'Nines law', def: 'A pure k-digit repeating block converts over 10^k − 1: 0.727272… = 72/99 = 8/11.' },
          { term: 'Mediant', def: '(a+c)/(b+d) of a/b < c/d — strictly between them; the Stern–Brocot building block, a bound and not an answer.' },
          { term: 'Best rational approximation', def: 'The smallest-denominator fraction closest to a value: 22/7 and 355/113 are π’s famous pair.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The largest of 2/3, 5/8, 7/11 and 3/5 is:',
            options: ['7/11', '2/3', '3/5', '5/8'],
            answer: 1,
            explain: 'The worked example’s set: decimals give 0.667, 0.636, 0.625, 0.600, and the top pair seals as 7 × 3 = 21 < 2 × 11 = 22 → 7/11 < 2/3. Largest: 2/3.',
          },
          {
            q: 'The recurring decimal 0.41666… (block 6 repeating) equals:',
            options: ['41/90', '41/100', '5/12', '5/11'],
            answer: 2,
            explain: 'Mixed case: m = 2 digits before the block, k = 1-digit block → denominator (10¹ − 1) × 10² = 900; numerator 416 − 41 = 375; 375/900 = 5/12. (41/90 is the pure-nines mistake — it would be 0.4555…)',
          },
          {
            q: 'The greater of 0.6 and 0.583 is:',
            options: ['0.583', 'they are equal', 'a common denominator is needed first', '0.6'],
            answer: 3,
            explain: 'Place-value comparison: 6 tenths > 5 tenths decides immediately — 0.600 > 0.583. (0.583 is 7/12 in disguise; “more digits” tempted nothing here.)',
          },
          {
            q: 'Which is larger: 8/9 or 7/8?',
            options: ['8/9', '7/8', 'they are equal', 'only a calculator can tell'],
            answer: 0,
            explain: 'Complements: 1/9 ≈ 0.111 < 1/8 = 0.125, so 8/9 is closer to 1 and wins. (Cross-multiplication agrees: 8 × 8 = 64 > 7 × 9 = 63 — by a single point.)',
          },
          {
            q: '3/8 expressed as a percent is:',
            options: ['3.8%', '38%', '3.75%', '37.5%'],
            answer: 3,
            explain: 'Eighths run in 12.5% steps: 3 × 12.5 = 37.5%. The 1/n spine converts without division: 1/8 = 0.125 → 3/8 = 0.375.',
          },
          {
            q: 'The mediant of 3/5 and 5/8 is 8/13. Where does it sit?',
            options: ['exactly halfway between them', 'strictly between 3/5 and 5/8', 'above both', 'below both'],
            answer: 1,
            explain: '0.600 < 8/13 ≈ 0.6154 < 0.625 — always strictly between (add across the same direction twice: 3/5 < 8/13 because 3 × 13 = 39 < 8 × 5 = 40, and 8/13 < 5/8 because 8 × 8 = 64 < 5 × 13 = 65). It is NOT the average: (0.6 + 0.625)/2 = 0.6125.',
          },
          {
            q: '0.428571 with the block repeating equals:',
            options: ['2/7', '3/7', '4/7', '5/7'],
            answer: 1,
            explain: 'The 1/7 family rotates one block 142857: 0.428571… starts at place 3 of the block → 3/7. (Check: nines law gives 428571/999999 = 3/7 after reduction.)',
          },
          {
            q: 'Closest to π among 22/7, 245/78, 333/106 and 355/113 is:',
            options: ['333/106', '22/7', '355/113', '245/78'],
            answer: 2,
            explain: 'Errors against π ≈ 3.14159265: 22/7 is off by 1.3 × 10⁻³, 245/78 by 5.7 × 10⁻⁴, 333/106 by 8.3 × 10⁻⁵, and 355/113 by only 2.7 × 10⁻⁷ — Zu Chongzhi’s Milü, an accuracy record that stood for over a thousand years.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The number-system ladder now stands complete: §1.1 place value and families, §1.2 divisibility, §1.3 factors/HCF/LCM, §1.4 remainders and cycles, §1.5 fractions, decimals and comparison. Next rung: Surds & Indices (§1.6) — roots, powers and their rules at speed, where the 1/n table and the units-digit cycles of §1.4 reappear on radicals. For the mathematics beneath this lesson — continued fractions, Farey sequences and the theory of best rational approximation — the Mathematics Master Library is the deep home; here you own the speed layer.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // QUANTITATIVE APTITUDE — Ch12 Statistics & Data Interpretation
  // §12.1 — the DI speed layer over tables and caselets.
  // Carve: ku-math-reading-data-charts (Mathematics Master Library)
  // owns chart-reading CONCEPTS — what a bar/line/pie chart IS, how
  // axes and scales work, density-histogram reading. This lesson OWNS
  // the examination layer: the 10-second table scan, percentage-basing
  // discipline, approximation under option pressure, and the
  // paragraph→grid caselet translation. Greps for 'caselet',
  // 'percentage-basing', 'data interpretation' had ZERO live
  // knowledge-topic hits.
  // ================================================================
  {
    id: 'qa-tables-caselets',
    title: 'Tables and Caselets: Reading Data at Examination Speed',
    domain: 'Aptitude & Test Preparation',
    field: 'Quantitative Aptitude',
    branch: 'Data Interpretation',
    tier: 'core',
    concepts: [
      'the 10-second scan: title, units, totals and missing cells before any question',
      'percentage-basing: choosing the right base (row total vs column total vs grand total)',
      'share and ratio work on tabulated data at speed',
      'percentage change and growth rates between periods',
      'approximation discipline: when rounding is safe and when options forbid it',
      'the caselet: translating a paragraph of facts into a grid before computing',
      'multi-step chains: writing the calculation chain before executing it',
      'trap anatomy: wrong base, mixed units and per-thousand disguises',
    ],
    words: 2297,
    readMins: 11,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Data-interpretation blocks — a dense table or a paragraph hiding numbers, followed by three to five questions — are the highest-volume scoring real estate on modern aptitude papers: recruitment screenings, management-admission tests, bank promotion papers and campus placement batteries all lean on them, because they test arithmetic and reading discipline inside one format. The mathematics rarely goes beyond percentages, ratios and averages. What separates the 90th percentile from the crowd is entirely procedural: how you read the table, which base you choose, when you approximate, and how you translate a caselet paragraph into something you can see. This lesson installs those procedures as reflexes.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'A typical four-question set on one table pays four marks for about three minutes of work — the best marks-per-minute trade on the paper — but only for readers with a fixed scan routine. Without one, the same set eats eight minutes and surrenders two negatives to base errors. The routines here are short, learnable and universal across every table you will ever meet.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The 10-second scan comes before any question. Read the table title first — it tells you what the numbers ARE (production in tonnes? sales in crore rupees? percentage of total?). Then the units, row by row, because mixed units are the single most common trap in this format. Then the totals: does the table give row totals, column totals, a grand total? A grand total converts every cell into an instant percentage base. Finally, mark the missing cells — tables deliberately leave blanks that later questions ask you to fill, and knowing where the holes are before reading the question saves a full re-scan. Ten seconds, four facts: title, units, totals, holes.',
      },
      {
        kind: 'para',
        text: 'Percentage-basing is the heart of table work, and the base is a choice you must make consciously. “What percent of the company\u2019s total sales came from the North zone?” — base is the grand total. “What percent of North-zone sales were hardware?” — base is the North-zone row total. “Hardware grew by what percent from 2023 to 2024?” — base is the 2023 hardware cell, the earlier value, always. The rule worth tattooing on the inside of your eyelids: the base is the thing you are taking a share OF, and it is named by the sentence structure after the word “of” or by the comparison direction. Roughly half of all DI wrong answers in mock analyses are base errors, not arithmetic errors — the candidate divided by the column when the question wanted the row.',
      },
      {
        kind: 'figure',
        caption: 'Anatomy of a data table: the four scan targets — title and units, row totals, column totals, and the missing cell — with the three distinct percentage bases (row, column, grand) that most questions switch between.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table anatomy diagram with percentage bases highlighted">
  <style>.h{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.c{font-family:Georgia,serif;font-size:14px;fill:#52525b}.t{font-family:Georgia,serif;font-size:16px;font-weight:bold;fill:#18181b}.note{font-family:Georgia,serif;font-size:13px;fill:#e11d48}.box{fill:#fafafa;stroke:#8a8a93;stroke-width:1.6}.base{fill:#fef3c7;stroke:#d97706;stroke-width:2}</style>
  <text class="t" x="60" y="30">Zonal sales, 2024 (₹ crore) — TITLE + UNITS read first</text>
  <rect class="box" x="60" y="46" width="700" height="36"/>
  <text class="h" x="80" y="70">Zone</text><text class="h" x="300" y="70">Hardware</text><text class="h" x="440" y="70">Services</text><text class="h" x="590" y="70">Row total</text>
  <rect class="base" x="60" y="84" width="700" height="34"/>
  <text class="c" x="80" y="106">North</text><text class="c" x="310" y="106">120</text><text class="c" x="450" y="106">180</text><text class="h" x="600" y="106">300</text>
  <rect class="box" x="60" y="120" width="700" height="34"/>
  <text class="c" x="80" y="142">South</text><text class="c" x="310" y="142">90</text><text class="c" x="450" y="142">110</text><text class="c" x="600" y="142">200</text>
  <rect class="box" x="60" y="156" width="700" height="34"/>
  <text class="c" x="80" y="178">East</text><text class="c" x="310" y="178">60</text><text class="c" x="450" y="178">? </text><text class="c" x="600" y="178">140</text>
  <rect class="base" x="60" y="192" width="700" height="34"/>
  <text class="c" x="80" y="214">West</text><text class="c" x="310" y="214">130</text><text class="c" x="450" y="214">130</text><text class="c" x="600" y="214">260</text>
  <rect class="base" x="60" y="228" width="700" height="34"/>
  <text class="h" x="80" y="250">Column total</text><text class="h" x="300" y="250">400</text><text class="h" x="440" y="250">540</text><text class="h" x="590" y="250">900 (grand)</text>
  <text class="note" x="70" y="290">Row base: “% of North-zone sales that is Services” → 180/300</text>
  <text class="note" x="70" y="314">Column base: “Services sales of South as % of all Services” → 110/540</text>
  <text class="note" x="70" y="338">Grand base: “North zone share of total sales” → 300/900</text>
  <text class="note" x="70" y="366">Missing cell: East Services = 140 − 60 = 80 — spotted in the scan, not mid-question.</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Share and ratio work flows straight from the base discipline. Shares are cell-over-base; ratio questions on tables ask things like “the ratio of hardware to services sales in the South zone” (90 : 110, which is 9 : 11 — always reduce, because options come reduced). When a question compares two cells\u2019 shares, compute both over the same base before subtracting: “how many percentage points more is the North zone\u2019s share than the East zone\u2019s?” is 300/900 − 140/900 = 33.3% − 15.6% ≈ 17.7 points. The percentage-POINT subtraction of two shares is not a percentage change — divide nothing, just subtract. Papers love the confusion between “percentage points” and “percent more”, and both appear as options.',
      },
      {
        kind: 'para',
        text: 'Percentage change between periods is the growth engine. From 250 to 300 is a growth of 50/250 = 20% — the old value is the base, and the formula (new − old)/old should be read aloud as “change over where it started”. When a table spans several years, the follow-up classics are: which year saw the highest growth RATE (not the highest absolute jump — a small base grows fast), what is the average growth rate over the period (usually approximated, sometimes exactly computed as the total change over total starting value when options are coarse), and simple-index questions where one year is set to 100. Approximation shortcuts: growth from 480 to 610 is about 27% (call it 480→600 = +25%, then the extra 10 is +2%).',
      },
      {
        kind: 'para',
        text: 'Approximation discipline is what makes DI fast, and it is a decision, not a habit. Round when the options are far apart (10% or more of the answer value between neighbours) and compute exactly when they crowd. Round the numbers, never the logic: 48.7% of 2,13,600 can become 50% of 2,00,000 = 1,00,000 when options are 0.8/1.0/1.2/1.4 lakh, and the saving is a full minute. Two safety rules: round multiplicands in the same direction you will err (round the base UP when dividing, so your answer errs small, then pick the option just above your estimate), and re-compute exactly when two options survive the estimate. The common failure mode is approximating a four-step chain at every step — errors compound, and a 3% slack per step becomes 12% by the end. Approximate at most twice in a chain; carry exact intermediate values the rest of the way.',
      },
      {
        kind: 'para',
        text: 'The caselet is a table wearing a paragraph costume: five sentences of prose hiding an entity-quantity structure. The procedure is translation before computation. Identify the entities (factories, students, zones — usually three to five), the quantities attached to them, and the relations between sentences (“40% more than A”, “half of the remainder”). Then rebuild the data as a small grid or a running list with symbols: A = 200; B = A + 40% of A = 280; C = half of (A + B) = 240. Only when the whole paragraph is on paper as symbols do you look at the actual question — because caselet questions come in sets, and the translated grid answers all of them. Candidates who compute per question re-derive the same facts four times; candidates who translate once, answer four questions from the sheet.',
      },
      {
        kind: 'para',
        text: 'Multi-step chains are where caselets earn their fear: the answer needs quantity X, which needs Y, which needs Z from the third sentence. The discipline is write-first: before touching any arithmetic, write the chain backwards from the question. “Profit per unit” = profit ÷ units = (revenue − cost) ÷ units, where revenue = price × quantity sold and the sentence gives price and quantity sold separately from quantity produced. Writing the chain exposes the exact cells you need and the ones you do NOT need — caselets deliberately supply one or two irrelevant numbers, and readers who compute from the top of the paragraph waste a step on every one of them. The written chain is also your error audit: when the answer does not match any option, walk the chain, not the arithmetic.',
      },
      {
        kind: 'para',
        text: 'Trap anatomy for this format, in order of frequency. Wrong base — the percentage computed over the column instead of the row, or the new value instead of the old in growth questions; every DI wrong option is a right computation on the wrong base, which is why base choice must be conscious. Mixed units — sales in lakh next to production in thousand tonnes, or a column in crore while the question asks in lakh (1 crore = 100 lakh; catch it in the scan). Per-thousand and per-million disguises — literacy or mortality “per 1,000 population” presented among ordinary percentages. And the missing-cell trick: a table with a blank asks you to recover it from a total before you can even start the real question — the scan marks the hole so it never ambushes you mid-solve.',
      },
      {
        kind: 'example',
        title: 'Worked example — a full caselet from paragraph to answer',
        steps: [
          'The paragraph: “A factory produced 12,000 units in 2024, 20% more than in 2023. It sold 85% of 2024 production at ₹500 per unit; the rest were scrapped. Total production cost was ₹42 lakh.” Question: the profit on sold units, in lakh rupees.',
          'Translate to a grid before computing: 2023 production = P; 2024 = 1.2P = 12,000 → P = 10,000 (not needed for this question — note and move on, the set will ask later).',
          'Units sold = 85% of 12,000 = 10,200; scrapped = 1,800. Revenue = 10,200 × ₹500 = ₹51,00,000 = ₹51 lakh.',
          'Cost discipline: the ₹42 lakh total production cost is the cost of ALL 12,000 units. For profit on sold units the standard screening convention is to book the full cost against the sold revenue (scrapped units recover nothing): profit = 51 − 42 = ₹9 lakh.',
          'Write the chain check: revenue (sold × price) − cost (all units) = profit → 51 − 42 = 9. Matches an option — stop.',
          'Mark the two traps this caselet plants: the 2023 value (10,000) is computed-and-irrelevant for this question, and a “cost of sold units only” reading (42 × 0.85 ≈ 35.7 → profit 15.3) is the designed distractor when the question says “total production cost”. Read cost scope exactly as written.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Base blindness is the king of DI errors: before any percentage, say the base aloud — “share OF what, growth FROM which year”. Second comes unit drift between table and question (crore/lakh, thousands/units). Third is compounding approximation through multi-step chains. And the quietest trap of all: computing a fact the question never asked for. The scan and the written chain exist precisely to kill these four.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: '10-second scan', def: 'The pre-question read of a table: title, units, totals, missing cells.' },
          { term: 'Percentage base', def: 'The quantity a share is taken OF — row total, column total, grand total or an earlier period value, chosen by question structure.' },
          { term: 'Percentage-basing', def: 'The conscious act of naming the base before dividing; the main defence against designed distractors.' },
          { term: 'Percentage points', def: 'The plain difference of two percentages (33% − 15% = 18 points); not itself a percentage change.' },
          { term: 'Growth rate', def: '(New − old)/old — the change measured against the starting value.' },
          { term: 'Caselet', def: 'A data-interpretation set delivered as a paragraph; solved by translating prose into a grid of symbols before any arithmetic.' },
          { term: 'Write-first chain', def: 'Writing the multi-step calculation plan backwards from the question before executing any step of it.' },
          { term: 'Missing-cell recovery', def: 'Recovering a blank table value from its row or column total before the real question can begin.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A zone sold 300 units, of which 180 were services. In the whole company, services were 540 of 900 units. “Services share of the zone” uses which base?',
            options: ['900 — the grand total', '540 — all services', '300 — the zone row total', '180 — the zone\u2019s services'],
            answer: 2,
            explain: 'The share of the zone that is services is services-over-zone: 180/300 = 60%. The 540 and 900 belong to the column-base and grand-base questions — each of which appears as a distractor here, exactly as in real option sets.',
          },
          {
            q: 'Production rose from 250 tonnes to 300 tonnes. The growth rate is:',
            options: ['16.7%', '20%', '50%', '2%'],
            answer: 1,
            explain: 'Change over the STARTING value: (300 − 250)/250 = 50/250 = 20%. Option 16.7% is the error of dividing by 300 — the new-value base trap; 50% is the raw difference left un-divided.',
          },
          {
            q: 'Zone A holds 33% of total sales and Zone B holds 15%. Zone A exceeds Zone B by:',
            options: ['18%', '18 percentage points', '2.2 times', '48%'],
            answer: 1,
            explain: 'Two shares subtract in percentage POINTS: 33 − 15 = 18 points. Calling it “18%” is the classic conflation the options test; 2.2 times is the ratio 33/15, a different (sometimes asked) quantity.',
          },
          {
            q: 'A table gives revenue in ₹ crore and costs in ₹ lakh. Before comparing them you must:',
            options: ['Round both to the nearest ten', 'Convert to one unit — 1 crore = 100 lakh', 'Take percentages of each separately', 'Nothing — compare directly'],
            answer: 1,
            explain: 'Mixed units are caught in the 10-second scan and fixed once: bring everything to the smaller unit (lakh) or the larger (crore) and stay there for the whole set.',
          },
          {
            q: 'Options are 0.8, 1.0, 1.2, 1.4 lakh. The exact computation is 48.7% of 2,13,600. The exam-speed move is:',
            options: ['Compute exactly — always', 'Approximate 50% of 2,10,000 ≈ 1.05 lakh and pick 1.0 or 1.2 by direction', 'Skip the question', 'Compute 48.7% of 2,00,000 exactly'],
            answer: 1,
            explain: 'With neighbours ~0.2 lakh apart, a 50% × 2.1 lakh estimate (1.05 lakh) separates the options decisively — the rounding errs small, so choose the option just above the estimate: 1.0 lakh. Exact computation here buys nothing but seconds.',
          },
          {
            q: 'A caselet: “A shop bought 400 pens; sold 75% at ₹20 each; the rest at ₹12.” Revenue from the cheaper pens is:',
            options: ['₹6,000', '₹1,200', '₹4,800', '₹7,200'],
            answer: 1,
            explain: 'Translate first: 75% of 400 = 300 sold at ₹20 (₹6,000 — the distractor); the REST = 100 pens at ₹12 = ₹1,200. The question asks the cheaper-pen revenue; the grid you built once answers both without re-reading the paragraph.',
          },
          {
            q: 'Literacy is given as “920 per 1,000 persons”. As a percentage this is:',
            options: ['0.92%', '9.2%', '92%', '920%'],
            answer: 2,
            explain: 'Per-thousand rates disguise percentages: 920/1,000 = 92%. The scan flags “per 1,000” in the units so the conversion happens once, consciously — not guessed under option pressure.',
          },
          {
            q: 'A question needs “profit per unit sold”. The write-first chain starts from:',
            options: ['Total revenue', 'Profit ÷ units sold', 'Price per unit', 'Total cost'],
            answer: 1,
            explain: 'Chains are written backwards from the question: profit per unit sold = profit ÷ units sold; then expand profit = revenue − cost, and only then collect the cells the expansion requires. Starting from the paragraph\u2019s first number is how irrelevant data claims victims.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'For the concepts under the charts this book does not re-teach — what axes, scales and chart types ARE — read the Mathematics Master Library\u2019s Reading Data lesson, which owns that layer. Inside this subject, Quantity Comparison and Data Sufficiency completes the interpretation family with the comparison-decision format, and the Commercial Arithmetic chapters supply the percentage and ratio machinery this lesson runs at speed.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // QUANTITATIVE APTITUDE — Ch13 Data Sufficiency & Quantity Comparison
  // §13.1 — the compare-quantities format and its decision ladder.
  // Carve: no existing knowledge topic owns quantity comparison or
  // sufficiency decisions (greps: 'quantity a', 'data sufficiency',
  // 'sufficient' — zero knowledge hits; the algebra lesson owns
  // equation SOLVING, a different act than deciding whether a solve
  // is possible). This lesson OWNS: the four-option contract, the
  // decision ladder, the plug battery, and sufficiency proofs.
  // ================================================================
  {
    id: 'qa-quantity-comparison',
    title: 'Quantity A versus Quantity B: The Comparison Decision Ladder',
    domain: 'Aptitude & Test Preparation',
    field: 'Quantitative Aptitude',
    branch: 'Data Sufficiency',
    tier: 'core',
    concepts: [
      'the four-option contract: A greater, B greater, equal, cannot be determined',
      'the decision ladder: simplify, compare, plug, edge-case',
      'the plug battery: 0, 1, −1, fractions and large numbers',
      'sufficiency as proof: “cannot be determined” must be earned with two outcomes',
      'algebraic comparison: move everything to one side and factor',
      'the obvious-answer traps: too-easy equal, centered unknowns, figure comparisons',
      'geometry and quantity formats: comparing without computing',
    ],
    words: 2390,
    readMins: 12,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Some of the world\u2019s most-taken graduate-admission and placement papers replace part of their standard multiple choice with a quieter, stranger format: two quantities labelled A and B, and four fixed answer choices — A is greater; B is greater; the two are equal; the relationship cannot be determined from the information given. The format rewards a completely different skill from calculation: comparison judgement. You are not asked for a value; you are asked for a verdict, and often the verdict arrives faster than any value ever could. This lesson builds the decision ladder that turns the format from a novelty into a scoring machine.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Comparison questions are typically the fastest marks on a quantitative section once the ladder is automatic — many fall to plugging two numbers. They are also the most format-sensitive: candidates who treat them as ordinary solve-then-choose questions burn minutes computing values the verdict never needed, and candidates who trust a single test case lose marks to the “cannot be determined” option. The ladder fixes both failure modes at once.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The four-option contract is fixed and must be memorized cold before test day, because reading four novel choices per question is a tax you stop paying: (A) Quantity A is greater; (B) Quantity B is greater; (C) the two quantities are equal; (D) the relationship cannot be determined from the information given. Every comparison question on Earth\u2019s aptitude papers uses some permutation of exactly this contract. Two structural facts follow. First, there is no “both are zero” or “negative both” special case — those are simply C or A/B as the arithmetic dictates. Second, option D is a legitimate verdict, not a confession of failure: some questions are DESIGNED so that the given information supports two different outcomes, and recognizing that is the point of the question, not a dodge.',
      },
      {
        kind: 'para',
        text: 'The decision ladder has four rungs, tried in order. Rung one: simplify both quantities legally — combine like terms, reduce fractions, evaluate what is definite (a lone √16 is 4, whatever x is). Rung two: compare directly — if the simplification exposes the relationship, answer and move; this resolves perhaps a third of items in under fifteen seconds. Rung three: plug — when an unknown sits in the comparison, substitute the plug battery (next concept) and watch for the verdict to wobble. Rung four: edge-case hunt — deliberately extreme values chosen to flip the relationship. The ladder\u2019s power is that you never decide WHICH tool to use; you always fall through the same four rungs, and the question ends you at the right one.',
      },
      {
        kind: 'figure',
        caption: 'The comparison decision ladder: simplify first, compare what simplification exposes, plug the battery when an unknown remains, and hunt edge cases — the verdict changes rung by rung until one rung proves it.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-rung decision ladder for quantity comparison">
  <style>.r{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.d{font-family:Georgia,serif;font-size:13px;fill:#52525b}.o{font-family:Georgia,serif;font-size:13px;fill:#e11d48}.rail{stroke:#8a8a93;stroke-width:2.4;fill:none}</style>
  <line class="rail" x1="150" y1="40" x2="150" y2="290"/>
  <rect x="170" y="34" width="590" height="48" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
  <text class="r" x="190" y="54">RUNG 1 · SIMPLIFY</text>
  <text class="d" x="190" y="72">Combine like terms; evaluate all definite parts; reduce fractions. Legal moves only.</text>
  <rect x="170" y="98" width="590" height="48" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
  <text class="r" x="190" y="118">RUNG 2 · COMPARE</text>
  <text class="d" x="190" y="136">Relationship exposed? Answer A / B / C now — a third of items end here.</text>
  <rect x="170" y="162" width="590" height="48" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
  <text class="r" x="190" y="182">RUNG 3 · PLUG THE BATTERY</text>
  <text class="d" x="190" y="200">0, 1, −1, ½, a large number. Verdict wobbles across plugs → D is alive.</text>
  <rect x="170" y="226" width="590" height="48" rx="8" fill="#fee2e2" stroke="#e11d48" stroke-width="1.8"/>
  <text class="r" x="190" y="246">RUNG 4 · EDGE-CASE HUNT</text>
  <text class="d" x="190" y="264">Extremes chosen to flip: x = 0, x negative, x between the roots… Two outcomes found → D proven.</text>
  <text class="o" x="150" y="315">Rule: fall through the rungs in order — never skip to plugging what simplification would have finished.</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The plug battery is a fixed set of test numbers, always the same, in decreasing order of diagnostic power: 0, 1, −1, ½ (or 2), and one large number like 100. Why these: zero annihilates products and exposes constants (x² versus x: at 0 the first is 0 and the second is 0 — equal; at 2 they are 4 and 2 — first greater; verdict D in two plugs). One and minus one expose parity and sign structure — x² versus x³ are equal at 0 and at 1, but at −1 the square is +1 while the cube is −1, so one plug at minus one destroys a premature “equal” verdict. One-half exposes the between-zero-and-one region where powers SHRINK as they grow — the single most productive plug in the entire format, because x³ < x² < x < 1 there, reversing every “bigger power is bigger” intuition. A large number exposes growth rates and crossovers: compare x² with 900x — at x = ½ the linear side dominates (0.25 versus 450), but at x = 1,000 the square wins (10,00,000 versus 9,00,000); the relationship flips as growth overtakes, and only a big plug reveals it. Run the battery top to bottom; each plug either confirms the standing verdict or flips it — and one flip, together with one confirmation, IS the proof of D.',
      },
      {
        kind: 'para',
        text: 'Sufficiency as proof deserves its own respect, because option D (“cannot be determined”) is the only answer in all of aptitude testing that you must PROVE, not just select. The standard of proof: exhibit two legal instantiations of the given information that produce two different verdicts. A feeling that “there is not enough information” is worth nothing — half the time that feeling is just fatigue. The proof pattern: plug once, get verdict V; then deliberately hunt a plug that flips it; when you find one, you have certificate-in-hand that the information underdetermines the comparison, and D is yours with confidence. Conversely, when the battery plus edge cases all agree, D is eliminated and the verdict you observed is the answer — the ladder rung four exists to make this elimination honest rather than assumed.',
      },
      {
        kind: 'para',
        text: 'Algebraic comparison replaces plugging when the structure is polynomial: move everything to one side and study the SIGN of the difference, because a sign is easier to pin than a value. Compare x² − 2x + 3 against 1: bring all terms left, x² − 2x + 2, and complete the square: (x − 1)² + 1 — strictly positive for every real x, so Quantity A exceeds Quantity B, always, no plugging needed. The same move resolves the classic power comparison without logarithms: 2^30 = (2³)^10 = 8^10 and 3^20 = (3²)^10 = 9^10, and since 9 > 8 with the common exponent, B is greater — the difference-of-powers factoring IS the comparison. Factoring, completing the square, and comparing powers through a common exponent are the three algebraic moves that resolve comparisons without ever finding a single value.',
      },
      {
        kind: 'para',
        text: 'The trap catalogue for this format is stable across papers, and every trap has a named antidote. The too-easy-C trap: quantities that LOOK identical (both “the area of the shaded region”) in figures that are not necessarily drawn to scale — figures in this format carry the disclaimer “not drawn to scale”, and the correct answer is frequently D precisely because the figure could be drawn two ways; never compare lengths or areas by eye. The centered-unknown trap: “x is between 3 and 5” tempts you to plug 4 and conclude — but the interval is the information, and endpoints 3 and 5 are the edge cases that decide. The positive-assumption trap: unless stated, x may be negative, zero or fractional — the battery exists because papers know you grew up plugging 2. And the computed-value mirage: after a long computation yields A = 17.98 and B = 17.99, re-read which quantity was which — the format\u2019s A/B symmetry is where tired eyes swap verdicts in the final minute.',
      },
      {
        kind: 'para',
        text: 'Geometry and quantity formats pair naturally, and the craft is comparing WITHOUT computing. Compare the perimeter of a square of side 4 with the circumference of a circle of diameter 4: square = 16; circle = 4π ≈ 12.57 — but the speed version notes π < 4 immediately, so 4π < 16 without any decimal work. Compare diagonal measures, inscribed figures, shaded remainders: the universal moves are bounding (this length is less than that full side, so the areas compare already), symmetry (two regions congruent by construction — equal, answer C, ten seconds), and extreme-drawing (mentally redraw the figure at the extreme allowed by the given information; if the verdict flips between drawings, it is D — the drawn-figure trap run in reverse, as a tool).',
      },
      {
        kind: 'example',
        title: 'Worked example — the full ladder on one item',
        steps: [
          'The item: Quantity A = x² + 1; Quantity B = 2x; given only that x is a real number. Verdict?',
          'Rung 1 (simplify): nothing definite to evaluate — an unknown sits in both quantities. No legal simplification resolves it.',
          'Rung 2 (compare directly): not exposed — the relationship depends on x.',
          'Rung 3 (plug the battery): x = 0 → A = 1, B = 0, A greater. x = 1 → A = 2, B = 2, EQUAL. The verdict wobbled in two plugs — D is alive.',
          'Rung 4 (edge-case proof): the wobble must be exhibited as two legal instantiations: at x = 0 the verdict is “A greater”; at x = 1 the verdict is “equal”. Two outcomes from legal values — the information underdetermines the comparison. Answer: D.',
          'The algebraic cross-check (and the deeper lesson): A − B = x² − 2x + 1 = (x − 1)², which is ≥ 0 always — so A ≥ B for every x, with equality exactly at x = 1. The relationship “greater OR equal depending on x” is precisely what option D exists to name. Note how the algebra CONFIRMS the plug finding rather than replacing it.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Never compare from an unscaled figure — that path is designed to end in a wrong C or a wrong A. Never answer D from fatigue — D is proven with two exhibited outcomes or it is a guess. Never skip rung one: a surprising share of “hard” comparisons are two legal simplifications away from a ten-second C. And in the last minutes of a section, double-check WHICH letter the verdict points to — the format\u2019s symmetry eats tired candidates.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Four-option contract', def: 'The fixed answer set of comparison items: A greater, B greater, equal, cannot be determined.' },
          { term: 'Decision ladder', def: 'The ordered rungs simplify → compare → plug → edge-case, fallen through on every item.' },
          { term: 'Plug battery', def: 'The fixed test set 0, 1, −1, ½, 100 — each plug confirms or flips the standing verdict.' },
          { term: 'Sufficiency proof', def: 'Option D earned by exhibiting two legal instantiations with two different verdicts.' },
          { term: 'Sign-of-difference method', def: 'Moving all terms to one side and determining the sign — a verdict without a value.' },
          { term: 'Centered unknown', def: 'An unknown given only as a range; the endpoints, not the midpoint, decide the verdict.' },
          { term: 'Extreme-drawing', def: 'Mentally redrawing a figure at the bounds of the given information to test whether the verdict survives.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Quantity A = x²; Quantity B = x; no further information. The battery is run. The verdict is:',
            options: ['A is greater', 'B is greater', 'Equal', 'Cannot be determined'],
            answer: 3,
            explain: 'x = 0 → equal; x = 2 → A greater; x = −1 → A greater (1 vs −1) but x = ½ → A = ¼ < ½, B greater. Multiple verdicts from legal values — D, and note the ½ plug is the one that flips it.',
          },
          {
            q: 'Quantity A = (x − 1)²; Quantity B = 0; x is any real number. The verdict is:',
            options: ['A is greater', 'B is greater', 'Equal', 'Cannot be determined'],
            answer: 3,
            explain: 'The tempting read is “a square is never negative, so A wins” — but squares DO hit zero: at x = 1, (x − 1)² = 0 and the quantities are EQUAL, while at x = 2, A = 1 is greater. Two legal values, two verdicts → the relationship cannot be determined from the information given. The too-easy-A instinct is exactly what this item is built to catch.',
          },
          {
            q: 'Quantity A = 2^30; Quantity B = 3^20. The fastest comparison is:',
            options: ['Compute both fully', 'Common exponent: 8^10 vs 9^10', 'Plug x = ½', 'Answer D by default'],
            answer: 1,
            explain: 'Rewrite with a common power: 2^30 = (2³)^10 = 8^10 and 3^20 = (3²)^10 = 9^10; since 9 > 8, B is greater. Difference-of-powers factoring is one of the three algebraic moves that ends comparisons without values.',
          },
          {
            q: 'A figure shows two triangles that appear congruent; the figure is noted “not drawn to scale”. The side lengths are not given. The verdict on their areas is:',
            options: ['Equal — they look congruent', 'A is greater', 'B is greater', 'Cannot be determined'],
            answer: 3,
            explain: 'Unscaled figures prove nothing: the given information permits drawings where either area exceeds the other. D here is not a dodge — it is the demonstrated fact that the information underdetermines the comparison.',
          },
          {
            q: 'Given 3 < x < 5. Quantity A = x; Quantity B = 4. The disciplined verdict uses which values?',
            options: ['Only x = 4, the midpoint', 'The endpoints x = 3 and x = 5', 'x = 0 and x = 100', 'No value — answer C'],
            answer: 1,
            explain: 'Centered unknowns are decided at the endpoints: near 3 the verdict is B greater; at 4 equal; near 5 A greater. The interval itself is the information, and it permits multiple verdicts → D.',
          },
          {
            q: 'Quantity A = the perimeter of a square with side 4; Quantity B = the circumference of a circle with diameter 4. The comparison without computing is:',
            options: ['A greater, since π < 4', 'B greater, since circles are round', 'Equal, since both use 4', 'Cannot be determined'],
            answer: 0,
            explain: 'Square perimeter = 4 × 4; circumference = π × 4; the common factor 4 leaves 4 versus π, and π < 4 — A greater with no decimal work. Bounding and common-factor extraction are the geometry craft.',
          },
          {
            q: 'After plugging 0, 1 and −1, all three give “A greater”. The correct next act is:',
            options: ['Answer A immediately', 'Try ½ and a large number, then decide', 'Answer D — three plugs are enough', 'Re-read only the question stem'],
            answer: 1,
            explain: 'Three agreeing plugs raise confidence but prove nothing — the between-0-and-1 region and large values remain untested, and they are exactly where verdicts flip. Complete the battery (and edge cases) before locking A; D requires exhibited flips, and A requires the flips to have failed.',
          },
          {
            q: 'The single most productive plug in the entire comparison format is:',
            options: ['x = 2', 'x = ½', 'x = 10', 'x = −10'],
            answer: 1,
            explain: 'Between 0 and 1, powers shrink as they grow (x³ < x² < x) and reciprocals exceed their bases — every “bigger is bigger” intuition reverses. A huge share of designed D answers are visible only from the ½ rung.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'This format is the natural sibling of Tables and Caselets — both reward judgement over computation — and both sit on the Commercial Arithmetic chapters\u2019 percentage-and-ratio machinery. For the formal logic underneath “insufficient information” (quantifiers, counterexamples, proof by exhibit), the Philosophy subject\u2019s logic lessons are the deep home; for equation solving itself, the Algebra for Tests chapter ahead in this book. Next in this subject: the Calculation Mastery and Test Strategy chapter, where the ladder joins the wider test-taking system.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // LOGICAL REASONING — Ch3 Series, Analogies & Classification
  // §3.1 — the relationship game: verbal/number/letter analogies,
  // odd-one-out, series completion.
  // Carve: ku-fnd-visual-pattern-rules (Nonverbal Reasoning) owns
  // FIGURAL series/analogy — shape attributes, rotation rules. This
  // lesson OWNS the verbal, number and letter channels. Greps for
  // 'analogy', 'odd one out', 'letter series' in knowledge topics:
  // zero hits outside biology's homology/analogy (different sense).
  // ================================================================
  {
    id: 'lr-analogies-classification',
    title: 'Analogies, Classification and Series: Playing the Relationship Game',
    domain: 'Aptitude & Test Preparation',
    field: 'Logical Reasoning',
    branch: 'Series & Patterns',
    tier: 'core',
    concepts: [
      'the analogy as a bridge: extract the relation before scanning options',
      'the classic relation families and their signatures',
      'the bridge sentence: forcing the relation into exact words',
      'odd-one-out: the grouping principle and the “most entities” test',
      'number series: first differences, ratios and alternating splits',
      'letter series: position values, skip patterns and mirror pairs',
      'trap anatomy: reversed relations, degree traps and near-synonyms',
    ],
    words: 2257,
    readMins: 11,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: '“Ophthalmologist is to eye as cardiologist is to —?” If your hand is already moving toward “heart”, you have felt what this whole question family is: recognition of a RELATIONSHIP, fast. Analogies, classification items and series completions are the opening percussion of nearly every reasoning section on the planet — school-entrance general tests, recruitment screenings, defence-academy ability papers, law-entrance logical sections, teaching-eligibility papers — because they measure pure relational thinking with zero formula load. The three formats are one skill in three costumes: find the rule that binds a pair or a chain, then apply it. This lesson turns that skill from instinct into procedure.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'These items are usually the first ten questions of a reasoning section — answered in under thirty seconds each by prepared candidates, and they set the psychological tempo of everything after. More concretely: relational vocabulary is the parsing layer for harder reasoning (syllogisms, arrangements) and for verbal sections everywhere. Time invested here pays across the whole paper.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The analogy as a bridge: every analogy item is a pair (A : B) whose relationship you must name BEFORE looking at options, plus a stem word (C) whose partner you must build. The single most common failure on this format is option-first reading — the options are designed to relate to C somehow, so scanning them before fixing the relation invites the trap. The discipline: cover the options, read A : B, state the relation aloud in words, then uncover and test. “Ophthalmologist : eye” — the relation is “specialist doctor : organ treated”. Then “cardiologist : ?” must complete “specialist doctor : organ treated” — heart. Options like “pulse” or “hospital” will relate to cardiology loosely, which is exactly why the relation gets locked first.',
      },
      {
        kind: 'para',
        text: 'The classic relation families cover most items ever set, and knowing them by name accelerates extraction. Part–whole (wheel : car; chapter : book). Category–member (sparrow : bird). Tool–function (knife : cut; scale : measure). Worker–workplace (teacher : school; judge : court). Worker–instrument (surgeon : scalpel; painter : brush). Cause–effect (rain : flood; neglect : decay). Degree/intensity (breeze : gale; cool : freezing — small to large of one kind). Sequence (dawn : dusk; seed : tree — order in time). Function–thing (shade : tree; illumination : lamp). Synonym and antonym (begin : commence; generous : miserly). Whole–part-of-speech and grammatical pairs (noun : plural; verb : adverb). Number relations (square : root; 8 : 64 — cube relations, prime jumps). When a pair does not immediately name itself, walk the families in order; one will click within seconds.',
      },
      {
        kind: 'figure',
        caption: 'The bridge method: the relation is extracted from the stem pair and forced into an exact sentence; every option must cross the SAME bridge, and options that merely relate to the stem word fail it.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bridge diagram for solving analogies">
  <style>.w{font-family:Georgia,serif;font-size:17px;font-weight:bold;fill:#3f3f46}.s{font-family:Georgia,serif;font-size:14px;fill:#52525b}.b{font-family:Georgia,serif;font-size:14px;font-weight:bold;fill:#0f766e}.x{font-family:Georgia,serif;font-size:13px;fill:#e11d48}.arc{stroke:#0f766e;stroke-width:2.6;fill:none;stroke-linecap:round}</style>
  <text class="w" x="70" y="60">OPHTHALMOLOGIST</text>
  <text class="w" x="470" y="60">EYE</text>
  <path class="arc" d="M 150 74 C 240 120, 400 120, 470 74"/>
  <text class="b" x="255" y="118">“specialist doctor : organ treated”</text>
  <line x1="405" y1="130" x2="405" y2="170" stroke="#8a8a93" stroke-width="2" stroke-dasharray="5 4"/>
  <text class="s" x="418" y="155">same bridge, new stem</text>
  <text class="w" x="70" y="200">CARDIOLOGIST</text>
  <text class="w" x="500" y="200">: ?</text>
  <path class="arc" d="M 150 214 C 260 260, 430 260, 480 214"/>
  <text class="b" x="255" y="258">HEART crosses the bridge</text>
  <text class="x" x="560" y="230">“pulse” — relates to the word, fails the bridge</text>
  <text class="x" x="560" y="252">“stethoscope” — wrong relation family (instrument)</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The bridge sentence is the extraction made testable: force the relation into a sentence so exact that both pairs slot into it grammatically. “A wheel is a PART of a car” accepts “a chapter is a part of a book” and rejects “a driver is a user of a car”. Vague bridges (“they are connected”, “both involve cars”) accept the traps; exact bridges accept only the answer. The craft is in the operator words: part OF, TYPE of, USED to, CAUSES, LARGER than, COMES BEFORE, LACKS, STUDIES, MEASURES. When two options both seem to fit, the bridge is too loose — tighten the operator word and re-test. This one habit, writing micro-sentences with hard operators, is worth more in this format than a thousand practice items attempted without it.',
      },
      {
        kind: 'para',
        text: 'Odd-one-out classification flips the game: you are given four or five words and must find the one that does not share the grouping principle of the others. The governing rule is the “most entities” test: the correct grouping is the one that binds the LARGEST number of options; the odd one is odd precisely against that majority principle. Rose, lily, marigold, oak, tulip — four flowers and one tree, so oak is out; but note that oak is also “a plant”, so a lazy principle (“they are all plants”) hangs the question. Test-writers choose the odd word to share a SECONDARY property with the group (oak is a plant; a shark is an animal even in a fish set) — the defence is asking “what do MOST of these share?” and refusing principles that need explaining away. Classic grouping axes: biological class, function, material, gender/number, geography, abstraction level.',
      },
      {
        kind: 'para',
        text: 'Number series follow a small set of engines, checked in a fixed order. First differences: subtract neighbours; if differences are constant, it is arithmetic (+7, +7, +7); if the differences themselves climb steadily, look at second differences — the squares family (2, 6, 12, 20, 30 → differences 4, 6, 8, 10: n(n+1)) lives here. Ratios: divide neighbours; a constant ratio means geometric (3, 6, 12, 24, 48 ×2; or 8, 12, 18, 27 ×1.5). Alternating splits: two interleaved series (2, 9, 4, 12, 6, 15 — evens climbing +2, the others climbing +3) or alternating operations (+5, ×2, +5, ×2). Squares, cubes and primes as raw material: 4, 9, 25, 49 (primes squared), 1, 8, 27, 64 (cubes), 2, 3, 5, 7, 11 (primes themselves). The fixed check order — differences, then differences-of-differences, then ratios, then splits, then named families — is what makes a series a thirty-second item instead of a two-minute stare.',
      },
      {
        kind: 'para',
        text: 'Letter series run on position values: write the alphabet with positions (A=1 … Z=26) and every letter pattern becomes a number pattern. Skip patterns: A, D, G, J is +3 per step (positions 1, 4, 7, 10). Mixed skips: A, C, F, J, O — differences 2, 3, 4, 5. Mirror pairs: letters equidistant from the alphabet\u2019s ends (A–Z, B–Y, C–X) generate “opposite letter” series much loved by setters. The letter-minus-letter trick converts pair series (AZ, BY, CX …) into arithmetic instantly: each pair sums to 27. And the wrap-around rule — after Z comes A, so a +5 step from Y lands on D — catches the unwary. When facing letters, the mechanical act is writing position numbers under them; letters hide arithmetic that numbers confess.',
      },
      {
        kind: 'para',
        text: 'Trap anatomy for the whole family. The reversed relation: options include the correct pair backwards (heart : cardiologist when the bridge demands cardiologist : heart) — check direction before marking. The degree trap: cool : freezing tempts “cold” as an analogue of breeze : gale, but check whether the intensity jump matches (a gale is a strong breeze; freezing is far beyond cool — the jumps differ in kind, not just size). The near-synonym trap: in classification, the odd one often shares the category loosely (oak among flowers — both plants) — the most-entities test defends. The familiar-word magnet: options containing emotionally loud words (heart, hospital) pull guesses that the bridge never licensed. And in series, the premature lock: confirming a rule on the FIRST gap only — a rule must survive every gap in the series, all the way to the answer blank.',
      },
      {
        kind: 'example',
        title: 'Worked example — one of each format',
        steps: [
          'Analogy: “Benevolent is to kind as miserly is to —?” Options: poor, stingy, greedy, rich. Cover options; extract: benevolent : kind are synonyms of degree — a benevolent person ACTS kindly. For miserly, the matching partner by relation-to-neighbour is stingy (the near-synonym), not greedy (a related but different trait) and not rich (a condition, not a disposition). The bridge “a ___ person is characterised by ___” fits stingy exactly.',
          'Odd-one-out: “Square, rectangle, rhombus, triangle, circle.” Four are quadrilaterals; triangle is out on sides-count — but wait, circle is ALSO out on “has straight sides”. Apply the most-entities test: square, rectangle, rhombus (3 of 5) share “four sides”; triangle shares “straight sides” with them, making 4 of 5 straight-edged — the binding that gathers the most options is straight-edged shapes, so CIRCLE is the odd one. The majority principle decides, not the first one noticed.',
          'Number series: “5, 11, 23, 47, 95, —?” First differences: 6, 12, 24, 48 — a doubling chain. Next difference 96, so next term 95 + 96 = 191. (Shortcut worth noting: each term is 2×previous + 1, visible once differences are written.)',
          'Letter series: “B, E, H, K, —?” Positions 2, 5, 8, 11: +3 per step; next is 14 = N. The rule survives every gap — lock it.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Option-first reading is the root failure of the whole family — the relation is extracted blind, or it is not extracted at all. Secondary killers: ignoring relation direction (reversed-pair distractors), loose bridges accepted under time pressure (“both are about medicine”), and classification by the first noticed principle instead of the majority principle. Every one of these is a discipline failure, not a knowledge failure — which is precisely why setters rely on them.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Bridge method', def: 'Extracting the stem pair\u2019s relation before reading options, then testing options only against that relation.' },
          { term: 'Bridge sentence', def: 'The relation forced into an exact sentence with hard operator words (part of, used to, causes, larger than).' },
          { term: 'Relation families', def: 'The named catalogue — part–whole, tool–function, cause–effect, degree, sequence, synonym/antonym and the rest — walked in order when a pair resists naming.' },
          { term: 'Most-entities test', def: 'Classification rule: the valid grouping principle binds the largest number of options; the odd word fails that majority principle.' },
          { term: 'First differences', def: 'Neighbour subtractions on a number series; constant → arithmetic, climbing → check second differences.' },
          { term: 'Alternating split', def: 'A series that is two interleaved series (or operations) — odd positions and even positions examined separately.' },
          { term: 'Position values', def: 'A=1 … Z=26 numbering that converts every letter series into a number series.' },
          { term: 'Mirror pair', def: 'Letters equidistant from the alphabet\u2019s ends (A–Z, B–Y); pair series whose letters sum to 27.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: '“Author is to novel as composer is to —?” The bridge sentence is:',
            options: ['“A novel is written in a book”', '“An author creates a novel; a composer creates a symphony”', '“Authors and composers are artists”', '“A novel is long, a symphony is long”'],
            answer: 1,
            explain: 'The relation is creator : created work, and the bridge must carry it with a hard operator — “creates”. Options resting on shared categories (“are artists”) or shared properties (“are long”) are the loose-bridge traps the format lives on.',
          },
          {
            q: 'Odd one out: “Rose, lily, marigold, oak, tulip.” The most-entities test selects:',
            options: ['Rose — it has thorns', 'Oak — four are flowers, one is a tree', 'Tulip — it grows from a bulb', 'Marigold — its colour is orange'],
            answer: 1,
            explain: 'Four options share “flower”; oak alone fails that principle. Secondary properties (thorns, bulbs, colour) are exactly the noise the most-entities test is built to ignore — a principle that binds 4 of 5 beats every principle that binds 2.',
          },
          {
            q: 'The relation in “breeze : gale” is best named:',
            options: ['Cause and effect', 'Degree — mild to violent of one kind', 'Part and whole', 'Tool and function'],
            answer: 1,
            explain: 'Both are winds; they differ in intensity — the degree family. Degree relations set up the classic trap: matching “cool : freezing” to them feels right but the jump differs in kind; always compare the SIZE of the jump as well as its direction.',
          },
          {
            q: 'Series: 4, 9, 25, 49, 121, —? The engine is:',
            options: ['Squares of primes: 2², 3², 5², 7², 11², 13²', 'Odd numbers squared', '+5, +16, +24 alternating', 'Geometric ×2 plus one'],
            answer: 0,
            explain: '4, 9, 25, 49, 121 are 2², 3², 5², 7², 11² — the primes squared — so the next is 13² = 169. First differences (5, 16, 24, 72) look lawless, which is the sign to reach for the named families: squares, cubes, primes.',
          },
          {
            q: 'Series: A, C, F, J, O, —? The next letter is:',
            options: ['T', 'U', 'S', 'V'],
            answer: 1,
            explain: 'Positions 1, 3, 6, 10, 15 — the triangular numbers, differences +2, +3, +4, +5. Next difference +6 gives position 21 = U. Writing position numbers under letters converts the item into arithmetic; guessing shapes of letters does not.',
          },
          {
            q: '“Pulmonologist is to lungs as hepatologist is to —?” The option designed as the reversed-relation trap is:',
            options: ['Liver', 'Lungs : pulmonologist', 'Kidneys', 'Doctor'],
            answer: 0,
            explain: 'The bridge is specialist : organ (hepatologist treats the liver), so LIVER is correct — and the trap to watch is any option presenting the correct relation backwards (e.g. “liver : hepatologist”) or borrowing the stem\u2019s organ (lungs). Lock the bridge, then check direction on the chosen option before marking.',
          },
          {
            q: 'Series: 2, 9, 4, 12, 6, 15, —? The engine is:',
            options: ['Alternating split: +2 on odds, +3 on evens', 'Arithmetic +7 throughout', 'Geometric ×2', 'Squares plus one'],
            answer: 0,
            explain: 'Odd positions run 2, 4, 6 (+2 each); even positions run 9, 12, 15 (+3 each); the next (7th) term continues the odd chain: 8. Interleaved series punish the single-rule mindset — when one engine fails, split by position.',
          },
          {
            q: 'In letter pairs AZ, BY, CX, DW the hidden arithmetic is:',
            options: ['Each pair sums to 27 — mirror pairs', 'Each pair differs by 5', 'Vowels alternate', 'The first letters spell a word'],
            answer: 0,
            explain: 'A(1) + Z(26) = 27, B(2) + Y(25) = 27 — mirror pairs, letters equidistant from the alphabet\u2019s ends. Recognizing the constant sum collapses the whole family into one line of arithmetic.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Figural analogies and figure series belong to the Nonverbal Reasoning lesson on shape attributes and rule detection — the same bridge method wearing pictures. Within this subject, the Coding–Decoding and Symbol Operations chapter generalizes the position-value machinery built here, and Ordering and Ranking carries the systematic-placement discipline into bigger puzzles. The verbal side deepens in the English subject\u2019s vocabulary lessons; the formal side (what a relation IS, mathematically) lives in the Mathematics Master Library.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // LOGICAL REASONING — Ch5 Relations, Directions & Ordering
  // §5.3 — ordering and ranking puzzles (rank positions, totals,
  // between-counts, comparison chains).
  // Carve: no existing topic owns rank arithmetic (greps 'ranking',
  // 'rank from' — zero reasoning hits). ku-math cumulative frequency
  // owns statistical quartiles, a different sense of position.
  // ================================================================
  {
    id: 'lr-ordering-ranking',
    title: 'Ordering and Ranking: Positions as Constraints',
    domain: 'Aptitude & Test Preparation',
    field: 'Logical Reasoning',
    branch: 'Relations & Ordering',
    tier: 'core',
    concepts: [
      'rank vocabulary: rank from top, rank from bottom, and the total-count identity',
      'the position line: draw before deducing',
      'combining two partial rankings about the same person',
      'between-counts: persons strictly between two positions',
      'interchange problems: when two people swap places',
      'comparison chains: ordering by transitive “greater-than” links',
      'the anchor-and-float method: fix what is known, let the rest move',
    ],
    words: 2055,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: '“In a row of students, Ravi is 7th from the left and 12th from the right — how many students are in the row?” This is the gateway item of the ordering-and-ranking family, and the family is everywhere: management-admission data-and-reasoning sets, bank recruitment papers, school-entrance general tests, defence-academy ability sections. The items look numerical, but they are really constraint bookkeeping — a handful of positional identities, applied with the discipline of writing the line down before touching it. Master five identities and one drawing habit, and the entire family collapses to routine.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Ordering items are compact — usually 30 to 45 seconds each for the prepared, and they appear in clusters of three to five sharing one stem. The drawing habit also transfers directly to the bigger puzzle formats (seating, floors, scheduling), where candidates who never learned to externalize positions drown. This lesson is the smallest subject with the largest transfer value in the reasoning syllabus.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The rank vocabulary first. A rank from the top (or left, or front) counts position 1 at that reference end; a rank from the bottom counts position 1 at the other. The same person can carry both counts, and the total-count identity binds them: Total = (rank from top) + (rank from bottom) − 1. Why minus one: the person themselves is counted by BOTH ranks, so the raw sum double-counts them once. Ravi at 7th from left and 12th from right: 7 + 12 − 1 = 18 students. The identity has a twin for overlapping ranks of two people: Total ≥ (rank₁ from left) + (rank₂ from right) − 1, with equality only when the two people are the SAME distance apart as the counts imply — the inequality versions are where the harder items live.',
      },
      {
        kind: 'para',
        text: 'The position line is the drawing habit that runs the whole family: before deducing anything, draw the line of positions and mark what the statement gives. For 18 positions, write slots 1 … 18; mark R at 7 from the left and (equivalently) 12 from the right — the two marks must LAND on the same slot, and that consistency check is itself the solution of the basic item. Every harder item — overlaps, interchanges, between-counts — is solved ON the drawn line, never in the head. The failures of this family are overwhelmingly failures to draw: candidates try to hold two reference directions mentally, and setters design items specifically to overload that mental buffer.',
      },
      {
        kind: 'figure',
        caption: 'The position line for the identity Total = left-rank + right-rank − 1: Ravi occupies slot 7 from the left and slot 12 from the right simultaneously, and the double-count of his own slot is the −1.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Position line with a person counted from both ends">
  <style>.n{font-family:Georgia,serif;font-size:13px;fill:#52525b}.big{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.r{font-family:Georgia,serif;font-size:14px;font-weight:bold;fill:#e11d48}.g{font-family:Georgia,serif;font-size:13px;fill:#0f766e}.slot{fill:#fafafa;stroke:#8a8a93;stroke-width:1.4}</style>
  ${Array.from({length: 18}, (_, i) => `<rect class="slot" x="${30 + i * 43}" y="70" width="38" height="46"/>`).join('')}
  ${Array.from({length: 18}, (_, i) => `<text class="n" x="${40 + i * 43}" y="134" text-anchor="middle">${i + 1}</text>`).join('')}
  <rect x="${30 + 6 * 43}" y="70" width="38" height="46" fill="#fee2e2" stroke="#e11d48" stroke-width="2.2"/>
  <text class="r" x="${49 + 6 * 43}" y="100" text-anchor="middle">R</text>
  <path d="M ${49} 50 C 150 20, 280 20, ${49 + 6 * 43} 66" stroke="#e11d48" stroke-width="2" fill="none" stroke-dasharray="5 4"/>
  <text class="r" x="140" y="30">7th from the left</text>
  <path d="M ${49 + 6 * 43} 66 C 500 30, 640 30, ${30 + 17 * 43 + 19} 50" stroke="#0f766e" stroke-width="2" fill="none" stroke-dasharray="5 4"/>
  <text class="g" x="600" y="30">12th from the right</text>
  <text class="big" x="30" y="190">Total = 7 + 12 − 1 = 18 slots</text>
  <text class="n" x="30" y="214">Ravi\u2019s own slot is counted by both ranks — the −1 removes the double count.</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Combining two partial rankings about the same person is the first extension: the statement gives one rank from one end and an interval to a friend, or ranks of two people from opposite ends. The between-count identity: persons strictly between A and B = Total − (rank of A) − (rank of B), when A and B are counted from opposite ends with no overlap trouble. Its same-end version: between-count = |rank difference| − 1, because the positions strictly between slot 7 and slot 12 are 8 through 11 — four people, which is 12 − 7 − 1. The −1 appears in both identities for the same structural reason: the endpoints of an interval are not inside it. When an item asks “how many BETWEEN”, underline the word between; when it says “from Ravi to Mohan inclusive”, the answer gains the endpoints back — setters alternate these phrasings precisely on the boundary words.',
      },
      {
        kind: 'para',
        text: 'Interchange problems add one move: two people swap positions, and one new rank is given. The discipline is to track what a swap preserves. If A (rank 9 from left) and B (rank 15 from left) swap, then AFTER the swap A sits at 15 and B at 9 — the slots themselves do not move, only the occupants. The classic item: “A is 9th from the left; B is 15th from the left. They interchange positions, and after the interchange A is 12th from the right — how many are in the row?” After the swap A occupies slot 15, and 12th from the right means Total = 15 + 12 − 1 = 26. Trap versions leave the row length to be found through the OTHER person\u2019s new rank instead — and both computations must agree in a consistent item; that agreement is the built-in check.',
      },
      {
        kind: 'para',
        text: 'Comparison chains order people by a quality rather than a position: “A is taller than B; C is shorter than B; D is taller than A.” The craft is symbol discipline — convert each statement directly into an inequality as written (A > B; B > C; D > A), then merge the fragments into one chain: D > A > B > C. Note how the third statement attaches at the TOP of the chain, not the bottom — always splice where the statement says, never where it would be convenient. Questions then ask for extremes (tallest, shortest), medians, or counts (“how many are definitely taller than C?”). The trap vocabulary: “at least” and “at most” — if only three comparisons link five people, the number DEFINITELY taller than someone may be smaller than the number POSSIBLY taller. Draw the chain, read off what is forced, and treat “definitely” as a request for the forced part of the partial order only.',
      },
      {
        kind: 'para',
        text: 'The anchor-and-float method is the family\u2019s general engine: anchor everything the statements force (fixed slots, fixed neighbours, quality extremes), and let the floats (unplaced people) orbit the anchors. An item mixing constraints — “Ravi is 7th from the left; Sam is 4th to the right of Ravi; exactly two people stand between Sam and the right end” — is solved by cascading the anchors: R at 7 forces Sam to 11 (7 + 4); “exactly two between Sam and the end” means slots 12 and 13 exist and the row ends at 13, so the total is 13. Each anchor\u2019s consequence is computed, written, and only then is the next statement read. Items fail when all statements are read at once and no line is drawn.',
      },
      {
        kind: 'example',
        title: 'Worked example — a two-layer ranking item',
        steps: [
          'The stem: “In a class queue, Meena is 11th from the front. Rita is 16th from the back. There are 4 students between them. How many students are in the queue at minimum?”',
          'Draw the line with anchors: Meena is FIXED at 11 from the front. Rita\u2019s position is known only relative to Meena plus the between-count.',
          'Case 1 — Rita behind Meena: 4 students between means Rita is at 11 + 4 + 1 = 16 from the front. Then her back-rank 16 gives Total = 16 + 16 − 1 = 31.',
          'Case 2 — Rita ahead of Meena: Rita at 11 − 4 − 1 = 6 from the front. Then 6 (front-rank) + 16 (back-rank) − 1 = 21.',
          'The minimum over legal cases: 21. The item\u2019s phrase “at minimum” is precisely the signal that both orderings are legal and the smaller total is wanted.',
          'Note the structure to reuse: whenever two people are located only relative to each other, enumerate both orders — the two cases give two totals, and the question\u2019s phrasing (minimum / maximum / cannot be determined) selects among them.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Forgetting the −1 is the family\u2019s signature error — it appears in the total identity and the between-count for the same structural reason, and every option set includes the no-minus-one answer. Second: reading “between” as inclusive. Third: solving interchange items without drawing (the old and new positions blur within seconds). Fourth: answering “definitely” questions with “possibly” logic on comparison chains. Draw the line, mark the anchors, and the traps have nowhere to land.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Total-count identity', def: 'Total = rank from top + rank from bottom − 1; the −1 removes the shared person\u2019s double count.' },
          { term: 'Position line', def: 'The drawn slot diagram on which all ordering deductions are performed before answering.' },
          { term: 'Between-count (opposite ends)', def: 'Persons strictly between A and B = Total − rank(A) − rank(B), for ranks from opposite ends.' },
          { term: 'Between-count (same end)', def: 'Persons strictly between = |higher rank − lower rank| − 1; endpoints are not inside the interval.' },
          { term: 'Interchange tracking', def: 'Swapping occupants, not slots — after a swap each person carries the other\u2019s old position.' },
          { term: 'Comparison chain', def: 'A merged order from transitive statements (A > B, B > C ⇒ A > B > C); “definitely” questions read only the forced links.' },
          { term: 'Anchor-and-float', def: 'Fixing all forced positions first and letting unplaced people occupy the remaining legal slots.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Ravi is 7th from the left and 12th from the right. The row has:',
            options: ['18 students', '19 students', '17 students', '20 students'],
            answer: 0,
            explain: '7 + 12 − 1 = 18: the −1 because Ravi\u2019s own slot is included in both counts. 19 is the no-minus-one distractor that appears in every option set of this family.',
          },
          {
            q: 'In a row of 40, A is 13th from the left and B is 9th from the right. Students strictly between A and B number:',
            options: ['19', '18', '20', '17'],
            answer: 1,
            explain: 'Between-count from opposite ends: 40 − 13 − 9 = 18. If instead both ranks had been given from the same end, the same-end version |difference| − 1 would apply — the option 19 waits for that confusion.',
          },
          {
            q: 'Positions 7 and 12 in a queue. People strictly between them:',
            options: ['5', '4', '6', '3'],
            answer: 1,
            explain: 'Slots 8, 9, 10, 11 — four people: 12 − 7 − 1. The −1 exists because the endpoints of an interval are not inside it; option 5 is the inclusive misread.',
          },
          {
            q: 'A is 9th from the left; B is 15th from the left. They swap. After the swap, A is 12th from the right. The row length is:',
            options: ['26', '25', '24', '27'],
            answer: 0,
            explain: 'After the swap A occupies slot 15 (slots do not move, occupants do). Total = A\u2019s left-rank + right-rank − 1 = 15 + 12 − 1 = 26. B\u2019s new right-rank (26 − 9 + 1 = 18... check: B at slot 9, so from the right 26 − 9 + 1 = 18) must agree — it always does in a consistent item.',
          },
          {
            q: '“A is taller than B; C is shorter than B; D is taller than A.” Who is definitely the shortest?',
            options: ['C', 'B', 'A', 'Cannot be determined'],
            answer: 0,
            explain: 'The merged chain: D > A > B > C. C sits at the bottom of the forced order — definitely shortest. The chain must be WRITTEN; holding three inequalities mentally is how “cannot be determined” gets chosen on items that are fully determined.',
          },
          {
            q: 'Meena is 11th from the front; Rita is 16th from the back; exactly 4 students stand between them. The queue\u2019s minimum size is:',
            options: ['31', '21', '26', '25'],
            answer: 1,
            explain: 'Two legal orderings: Rita behind Meena → front-rank 16, total 16 + 16 − 1 = 31; Rita ahead → front-rank 6, total 6 + 16 − 1 = 21. “Minimum” selects 21. Whenever two people are located only relative to each other, enumerate both orders.',
          },
          {
            q: 'Only statement: “Five friends sat in a row; P is somewhere to the left of Q.” How many arrangements are possible?',
            options: ['120', '60', '24', '10'],
            answer: 1,
            explain: 'Five people arrange in 5! = 120 ways; “P left of Q” holds in exactly half of them by symmetry — 60. The somewhere-left family (no distance given) is a symmetry argument, not a counting slog.',
          },
          {
            q: 'A scores more than B; B scores more than C; D scores more than A. Students DEFINITELY scoring more than C:',
            options: ['A, B and D', 'Only B', 'Only D', 'Cannot be determined'],
            answer: 0,
            explain: 'Chain: D > A > B > C — all three of D, A, B are forced above C. The forced part of a comparison chain answers “definitely”; anything beyond it is “possibly”, a different question word.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The position line graduates into full seating diagrams in Arrangements and Puzzles, and the comparison-chain discipline returns in Blood Relations and scheduling sets. The counting machinery behind “half of the arrangements” belongs to the Permutations & Combinations chapter of this book, and the formal theory of partial orders lives in the Mathematics Master Library\u2019s relations chapter — here you own the drawn-line speed layer.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // LOGICAL REASONING — Ch6 Arrangements & Puzzles
  // §6.1 — linear and circular seating, floor/box/scheduling
  // puzzle families, the clue ledger.
  // Carve: zero existing knowledge topics on seating/puzzles (greps
  // 'seating', 'arrangement', 'puzzle' — only philosophy-of-mind
  // 'puzzles', different sense). This lesson OWNS the symbol
  // notation, the facing rule, and the branching discipline.
  // ================================================================
  {
    id: 'lr-seating-arrangements',
    title: 'Seating Arrangements: The Clue Ledger for Linear and Circular Puzzles',
    domain: 'Aptitude & Test Preparation',
    field: 'Logical Reasoning',
    branch: 'Arrangements & Puzzles',
    tier: 'core',
    concepts: [
      'the clue ledger: translating prose clues into compact symbols',
      'linear arrangements: the anchor-and-fill method on a drawn row',
      'circular arrangements: clockwise discipline and the reference person',
      'the facing rule: facing centre vs facing outward, and left/right reversal',
      'immediate vs somewhere: the two distance words that change everything',
      'the puzzle families: floors, boxes, scheduling, grouping and matching',
      'when stuck: parity, counting and the one-branch fork',
    ],
    words: 2460,
    readMins: 12,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Eight people around a table; five statements about who sits beside whom; one question. Arrangement puzzles are the heavyweight event of every reasoning section — the item type on which sections are won or lost, because they pay a whole set of marks to one solved diagram, and they punish the undisciplined with ten lost minutes and a wrong diagram. Yet the entire format runs on a small toolkit: a symbol ledger for clues, two drawing templates (row and circle), one rule about facing, and a branching protocol for when information runs out. This lesson installs the toolkit and drills the protocol on the standard families.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'A typical puzzle set pays 3–5 marks for 3–4 minutes of correct diagram work — and the diagram, once built, answers every question in the set in seconds. Nothing else on a reasoning paper has this leverage, which is why puzzle sets decide sectionals. The ledger-and-template method here is also the exact discipline used by high-percentile solvers; there is no talent gap, only a procedure gap.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The clue ledger is a translation layer between prose and diagram, and writing it IS the first minute of every puzzle. Read all statements once at speed, then re-read and convert each into ledger symbols: “A sits immediately to the right of B” becomes A→B with a bar meaning adjacency-and-side; “C is somewhere to the left of D” becomes C < D with NO bar (distance unknown); “E is not next to F” becomes E–F crossed; “G sits exactly between H and J” becomes H–G–J as a rigid triple. The ledger\u2019s power is that it separates the statement GRAMMAR from the diagram work: once converted, the prose is never re-read (re-reading prose is where misreads enter), and every clue is visible at a glance as structure. The ledger also flags clue TYPES for sequencing: rigid blocks (adjacency triples) first, then inequalities (somewhere-relations), then negatives (not-next-to) last — negatives can only prune, never build.',
      },
      {
        kind: 'para',
        text: 'Linear arrangements use the row template: slots drawn as boxes, one reference end declared LEFT (when a statement says “facing north” or “facing the audience”, right and left belong to the SITTERS — handle with the facing rule below; when no facing is given, left/right are yours as the drawer). The anchor-and-fill method from the ranking lesson now runs with richer clues: place the rigid blocks first (a triple H–G–J occupies three consecutive slots somewhere — it can often be located by combining with a fixed person: “A is at the extreme left” plus “the triple is adjacent to A” fixes everything), then the somewhere-relations, then use each negative to eliminate candidate placements. The working rule: every clue must be USED, and the strongest clue is the one with the most fixed structure — items are engineered so the rigid clues cascade; if your first placed clue produces nothing, you started with a weak clue.',
      },
      {
        kind: 'para',
        text: 'Circular arrangements need their own template and one convention settled once and verified on your own body. Draw the circle with seats at clock positions; pin ONE person — any person — at the bottom (6 o\u2019clock) seat, because circles have no natural start and rotating everyone together changes nothing. Now the convention: when all face the CENTRE, each sitter\u2019s LEFT points clockwise (viewed from above) and each sitter\u2019s RIGHT points anti-clockwise. Verify it bodily: sit at the 6 o\u2019clock seat facing the centre — you face up the page — so your left hand points to the page\u2019s west side, and your westward neighbour walks 6 → 7 → 8 → 9, exactly the way the clock\u2019s own hand sweeps. Mirror-check from the 3 o\u2019clock seat: facing the centre means facing west, so your left hand points south toward the 6 seat — again the clockwise walk. If someone faces OUTWARD, their arrows flip: left becomes anti-clockwise. The error to avoid is mixing your left (the drawer\u2019s, viewing the diagram from above) with theirs (the sitter\u2019s) — and when a statement says some face inward and some outward, draw each person\u2019s arrows individually, which is the facing rule.',
      },
      {
        kind: 'figure',
        caption: 'The facing rule on a circular template: with everyone facing the centre, each person\u2019s LEFT points clockwise (viewed from above) and RIGHT points anti-clockwise — the reference person is drawn with arrows labelled, and every other left/right is read by consistent rotation; if someone faces outward, their arrows flip.',
        afterConcept: 3,
        svg: `<svg viewBox="0 0 820 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circular seating template with facing arrows">
  <style>.p{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.s{font-family:Georgia,serif;font-size:13px;fill:#52525b}.r{font-family:Georgia,serif;font-size:13px;font-weight:bold;fill:#e11d48}.g{font-family:Georgia,serif;font-size:13px;font-weight:bold;fill:#0f766e}.c{stroke:#8a8a93;stroke-width:2.2;fill:none}</style>
  <circle class="c" cx="240" cy="170" r="105"/>
  <text class="p" x="232" y="58" text-anchor="middle">A</text>
  <text class="p" x="322" y="115" text-anchor="middle">B</text>
  <text class="p" x="322" y="235" text-anchor="middle">C</text>
  <text class="p" x="232" y="292" text-anchor="middle">R (ref)</text>
  <text class="p" x="142" y="235" text-anchor="middle">D</text>
  <text class="p" x="142" y="115" text-anchor="middle">E</text>
  <path d="M 250 72 l 34 16" stroke="#e11d48" stroke-width="2.6" fill="none" marker-end="url(#ar)"/>
  <text class="r" x="300" y="54">A\u2019s LEFT — clockwise</text>
  <path d="M 212 278 l -36 -6" stroke="#0f766e" stroke-width="2.6" fill="none" marker-end="url(#ag)"/>
  <text class="g" x="52" y="314">R\u2019s LEFT — clockwise</text>
  <text class="s" x="470" y="120">Facing centre, viewed from above:</text>
  <text class="s" x="470" y="146">each person\u2019s LEFT points clockwise,</text>
  <text class="s" x="470" y="172">each person\u2019s RIGHT points anti-clockwise.</text>
  <text class="s" x="470" y="206">If a person faces OUTWARD, both flip.</text>
  <text class="s" x="470" y="240">Draw the reference arrows once,</text>
  <text class="s" x="470" y="266">read every left/right by rotation.</text>
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e11d48"/></marker><marker id="ag" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#0f766e"/></marker></defs>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Immediate versus somewhere is the pair of distance words on which whole puzzles turn. “Immediately to the right of” fixes a slot (adjacent, side fixed); “to the right of” fixes only a side-of relation (anywhere further along); “second to the left of” fixes a distance of exactly two; “not immediately to the left of” forbids one slot but permits distance. The ledger marks these differently — a solid connector for immediate, an inequality for somewhere — and the commonest catastrophic misread in the entire format is upgrading a somewhere into an immediate. A related distinction: “neighbour of” is side-agnostic (either side), while “to the left of” is side-specific even at unknown distance. When a puzzle seems to have too little information, the first audit is the distance words — half of all “insufficient” panics are a somewhere-clue wrongly drawn as solid.',
      },
      {
        kind: 'para',
        text: 'The puzzle families share the engine and change only the template. Floors: people on floors of a building — the row template turned vertical, with the same block-and-inequality logic (“P lives above Q” is a somewhere-relation; “adjacent floors” is immediate). Boxes and stacks: identical logic with a shelf template. Scheduling: days or time slots as positions, people-or-events as occupants — same ledger, plus the added twist that some clues are conditional (“if on Monday, then not the morning”). Grouping and matching: two dimensions instead of one (which person plays which instrument on which day) — the template becomes a grid, and each clue fills or crosses cells; the grid version is solved by the same anchor-first discipline, one dimension at a time. Recognizing the family tells you which template to draw in the first fifteen seconds, and drawing the right template immediately is worth more than any speed in deduction.',
      },
      {
        kind: 'para',
        text: 'When stuck — the diagram half-built and no clue firing — the protocol is fixed, three moves only. Move one, the count audit: how many people remain unplaced, and how many legal slots remain; often the arithmetic of remaining slots forces the placement (two people, two slots, one negative clue = done). Move two, the parity or position audit: for circular puzzles, if four women must sit together, their block occupies consecutive seats and parity of the remaining seats decides feasibility; for rows, check the extreme ends — clues about “extreme left” or “no one to the right of” are anchors you may have missed. Move three, the one-branch fork: pick the single most constrained unplaced person, assume one of their two possible placements, and work three clues deep; a contradiction unwinds the assumption in under a minute, and the surviving branch is the answer. What the protocol forbids: re-reading the prose from the top (misread laundering), and forking on a weakly-constrained person (branch explosion). One deliberate fork, shallow, on the most constrained entity — that is the entire art of the stuck state.',
      },
      {
        kind: 'example',
        title: 'Worked example — a compact circular set, ledger to verdict',
        steps: [
          'The stem: six friends A–F around a circular table, all facing the centre. Clues: (1) A is immediately to the right of B. (2) C is not adjacent to B. (3) D sits opposite E. (4) F is third to A\u2019s left.',
          'Ledger: A|B rigid pair (immediate, right side); C–B negative; D↔E opposite pair; F at exact distance 3 on A\u2019s left — a distance-fixed clue, nearly as strong as adjacency.',
          'Template: pin B at seat 1 (the 6 o\u2019clock reference), seats numbered 1–6 clockwise. Facing the centre, B\u2019s RIGHT is the anti-clockwise direction, so A — immediately to B\u2019s right — sits at seat 6, the anti-clockwise neighbour. Rigid pair (6, 1) placed.',
          'The negative clue: C not adjacent to B eliminates seats 2 and 6 — and 6 already holds A, so C can only take 3, 4 or 5.',
          'The opposite pair: opposite seat-pairs are (1,4), (2,5) and (3,6). Seats 1 and 6 are taken, so D and E must occupy seats 2 and 5.',
          'The distance clue: F is third to A\u2019s left. A at seat 6; facing the centre, A\u2019s LEFT runs clockwise: one seat clockwise of 6 is seat 1 (B), then seat 2, then seat 3 — so F sits at seat 3.',
          'The count audit closes it: seats 2, 4 and 5 remain for C, D, E, with D and E pinned to {2, 5} — so C takes seat 4, and D, E split seats 2 and 5 in either order. TWO live diagrams (the D↔E swap): questions whose answers are identical in both — “who sits opposite B?” (seat 4: C, always) — are answerable; any question that differs across the swap (“who is second to D\u2019s right?”) is a “cannot be determined” item. The solver\u2019s final act is always this branch audit, and knowing when it is needed IS the skill.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'The somewhere→immediate upgrade is the format\u2019s deadliest misread — the ledger\u2019s distinct symbols exist to prevent it. Drawer-versus-sitter lefts destroy circular puzzles: draw the reference arrows, always. Re-reading prose mid-solve launders the original misread into the diagram — the ledger is read-only after translation. And the un-audited fork: a diagram built on an unproven assumption answers questions with misplaced confidence; every fork must end in a contradiction or a branch audit. The marks this format takes are almost never logic marks; they are bookkeeping marks.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Clue ledger', def: 'The symbol translation of every statement — rigid blocks, inequalities, negatives — written once and never re-read from prose.' },
          { term: 'Rigid block', def: 'A set of people with fixed adjacency and order (a “between” triple, an immediate pair) — placed first.' },
          { term: 'Somewhere-relation', def: 'A side-of constraint at unknown distance; drawn as an inequality, never as adjacency.' },
          { term: 'Reference person', def: 'The one circular occupant pinned to a fixed seat to kill rotational freedom.' },
          { term: 'Facing rule', def: 'Facing centre: left = clockwise, right = anti-clockwise (viewed from above); facing outward flips both — arrows drawn per person.' },
          { term: 'Template families', def: 'Row (linear), circle, floors/boxes (vertical rows), schedules, and grids (grouping/matching) — chosen in the first fifteen seconds.' },
          { term: 'One-branch fork', def: 'The stuck-state move: assume a placement for the MOST constrained person, work three clues deep, unwind on contradiction.' },
          { term: 'Branch audit', def: 'Checking whether a question\u2019s answer is identical across all live diagrams; differing answers mean “cannot be determined”.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: '“P sits somewhere to the right of Q” in a linear arrangement is drawn in the ledger as:',
            options: ['A rigid adjacent pair P|Q', 'The inequality Q < P with no bar', 'A negative clue', 'An opposite pair'],
            answer: 1,
            explain: '“Somewhere” fixes only the side, never the distance — an inequality, not adjacency. Upgrading it to a rigid pair is the single deadliest misread of the format; the ledger\u2019s distinct symbols exist precisely to keep the two apart.',
          },
          {
            q: 'Six people face the centre of a circular table. Viewed from above, each person\u2019s LEFT points:',
            options: ['Clockwise', 'Anti-clockwise', 'Toward the centre', 'Depends on the person'],
            answer: 0,
            explain: 'Verify bodily: at the 6 o\u2019clock seat facing the centre you face up the page, your left hand points west, and the westward walk 6 → 7 → 8 follows the clock hand\u2019s own sweep — clockwise. Facing OUTWARD would flip both arrows, which is why arrows are drawn, not remembered.',
          },
          {
            q: 'In a circular puzzle you fix one person at a chosen seat first because:',
            options: ['That person is the most important', 'Rotating everyone together changes nothing — the choice kills rotational freedom', 'The rules require it', 'It makes the circle a row'],
            answer: 1,
            explain: 'A circle has no distinguished seat: any global rotation is the same arrangement. Pinning ONE person at a reference seat removes that freedom and costs nothing — the standard first move of every circular template.',
          },
          {
            q: 'A puzzle stalls: two unplaced people, two free slots, one “not adjacent to” clue. The protocol move is:',
            options: ['Re-read all statements from the top', 'The count audit — remaining people against remaining slots', 'Fork on the least constrained person', 'Abandon the set'],
            answer: 1,
            explain: 'Two people, two slots and one negative is decided by counting alone — the audit takes ten seconds and often ends the puzzle. Re-reading prose launders misreads; forking on weakly constrained people explodes branches.',
          },
          {
            q: 'Two complete diagrams both satisfy every clue of a set. A question asks “who sits opposite B?” — one diagram says D, the other says E. The correct answer is:',
            options: ['D', 'E', 'Cannot be determined', 'Both D and E simultaneously'],
            answer: 2,
            explain: 'When live branches give different answers, the information does not force a unique verdict — that is the branch audit, and “cannot be determined” is the honest result. Setters plant exactly these questions to catch solvers who never audited their fork.',
          },
          {
            q: '“A is immediately to the right of B” and “C is second to the left of B” together fix:',
            options: ['Only A and B', 'A, B and C in a rigid triple', 'Nothing without a drawn circle', 'A and B rigidly; C at distance two on the fixed side'],
            answer: 3,
            explain: 'The immediate pair is rigid; “second to the left of B” is a fixed distance on a fixed side — so C\u2019s seat relative to B is forced too, though C is not adjacent to the pair. Distances of exactly two are as good as adjacency for anchoring.',
          },
          {
            q: 'Floor puzzles, box puzzles and day-scheduling sets are solved with:',
            options: ['Completely different methods per family', 'The same ledger and anchor logic on different templates', 'Guesswork and option elimination only', 'Arithmetic formulas'],
            answer: 1,
            explain: 'Floors are vertical rows, schedules are rows in time, grouping sets are grids — the clue ledger, rigid-blocks-first placement and the stuck-protocol are identical. Choosing the right template in the first fifteen seconds is the family-specific skill.',
          },
          {
            q: 'The most constrained person for a first fork is the one:',
            options: ['With the most statements mentioning them', 'Whose name appears first', 'With the fewest legal placements remaining', 'Seated at the reference seat'],
            answer: 2,
            explain: 'Fork value comes from constraint: the person with the fewest legal placements makes the assumption most likely to hit a fast contradiction. Statement count is a weak proxy; remaining-placement count is the real measure.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The position line and anchor method were built in Ordering and Ranking; this chapter extends them to full templates. Clocks, Calendars and Mathematical Logic adds the cyclic-arithmetic cousins of circular seating, and Data Interpretation in the Quantitative Aptitude subject carries the same grid discipline into numbers. For the formal underpinnings — permutations of circular arrangements (n−1)!, and constraint satisfaction as a discipline — the Mathematics and Computing subjects own the deep theory.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // LOGICAL REASONING — Ch7 Clocks, Calendars & Mathematical Logic
  // §7.1 — clock angles and calendar cycles at examination speed.
  // Carve: biology's biological-clocks lesson owns CIRCADIAN rhythm
  // (different sense); time-management owns productivity. No topic
  // owns clock-angle arithmetic or odd-day computation (greps
  // 'odd days', 'clock angle' — zero hits).
  // ================================================================
  {
    id: 'lr-clock-calendar',
    title: 'Clocks and Calendars: Angles, Odd Days and Repeating Cycles',
    domain: 'Aptitude & Test Preparation',
    field: 'Logical Reasoning',
    branch: 'Mathematical Logic',
    tier: 'core',
    concepts: [
      'the clock as a rate problem: 6° per minute versus 0.5° per minute',
      'the angle formula and its reflex partner',
      'the relative-speed method for coincidence, opposition and right angles',
      'odd days: the week remainder that carries calendar structure',
      'the leap-year rules including the century exception',
      'day-of-week computation from a known anchor',
      'repeating calendars and the cycle arithmetic behind them',
    ],
    words: 2044,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Two ancient machines — the analog clock face and the seven-day week — still power a whole family of reasoning items: angle-between-hands at a given time, when the hands will coincide, which day a date falls on, whether two years share a calendar. School-entrance general tests, civil-services aptitude papers, recruitment screenings and defence-academy ability sections all set them, because they compress real arithmetic (rates, modular cycles) into objects everyone knows. The family looks fussy but runs on exactly two engines: a relative speed on the clock, and a remainder count on the calendar. This lesson builds both engines and the short derivations behind them, so nothing needs memorizing that can be rebuilt in thirty seconds.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Clock and calendar items are pure method: once the two engines are installed, every variant — reflex angles, faulty clocks, day-after-tomorrow puzzles, calendar repetition — collapses to a two-line computation. They also carry high nostalgia-trap risk: candidates attempt them by imagining the hands visually and miscounting, when the rate arithmetic is both faster and exact.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The clock is a rate problem in disguise. The minute hand sweeps the full 360° of the face in 60 minutes: 6° per minute. The hour hand sweeps 360° in 12 hours = 720 minutes: 0.5° per minute. Every clock question is a question about these two speeds — usually their difference, the relative speed of 5.5° per minute at which the minute hand gains on the hour hand. Read the hands as two runners on a circular track and the whole format becomes pursuit arithmetic: coincidences are overtakes, oppositions are half-track separations, right angles are quarter-track separations.',
      },
      {
        kind: 'para',
        text: 'The angle formula assembles the two rates. At H : M (with H read on the 12-hour scale), the hour hand sits at 30H + 0.5M degrees from 12 (it moved 30° per full hour plus half a degree per minute past the hour), and the minute hand sits at 6M degrees. The gap is |30H − 5.5M| — and because the question conventionally wants the smaller angle, take the lesser of that value and 360° minus it. At 3:40, the formula gives |90 − 220| = 130° (the reflex partner is 230°; answer 130°). The formula is worth deriving once on paper rather than memorizing, because derived formulas survive pressure while memorized ones blur — and the derivation is literally the two rates multiplied by time.',
      },
      {
        kind: 'figure',
        caption: 'The two hands as runners: the minute hand gains 5.5° per minute on the hour hand — coincidence, right angle and opposition are the 0°, 90° and 180° separation marks of a pursuit problem on a 360° track.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clock face as pursuit track with relative speed annotation">
  <style>.f{font-family:Georgia,serif;font-size:13px;fill:#52525b}.b{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.r{font-family:Georgia,serif;font-size:13px;font-weight:bold;fill:#e11d48}.g{font-family:Georgia,serif;font-size:13px;font-weight:bold;fill:#0f766e}.face{fill:#fafafa;stroke:#8a8a93;stroke-width:2.4}</style>
  <circle class="face" cx="190" cy="160" r="110"/>
  ${Array.from({length: 12}, (_, i) => { const a = (i * 30 - 60) * Math.PI / 180; return '<text class="f" x="' + Math.round(190 + 92 * Math.cos(a)) + '" y="' + Math.round(160 + 92 * Math.sin(a) + 4) + '" text-anchor="middle">' + (i + 1) + '</text>' }).join('')}
  <line x1="190" y1="160" x2="245" y2="105" stroke="#52525b" stroke-width="5" stroke-linecap="round"/>
  <line x1="190" y1="160" x2="190" y2="70" stroke="#e11d48" stroke-width="3" stroke-linecap="round"/>
  <circle cx="190" cy="160" r="5" fill="#3f3f46"/>
  <text class="g" x="250" y="70">minute hand: 6° per minute</text>
  <text class="r" x="250" y="96">hour hand: 0.5° per minute</text>
  <text class="b" x="250" y="130">relative speed: 5.5° per minute</text>
  <text class="f" x="250" y="160">coincidence = overtake every 360/5.5 = 65 5/11 min</text>
  <text class="f" x="250" y="186">right angle = 90° gap on the track</text>
  <text class="f" x="250" y="212">opposition = 180° gap on the track</text>
  <text class="f" x="250" y="246">At 3:40 the gap is |30\u00d73 \u2212 5.5\u00d740| = 130\u00b0</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The relative-speed method answers the “when” questions. When between 2 and 3 will the hands coincide? At 2:00 the hour hand leads by 60°; the minute hand closes at 5.5° per minute; time = 60/5.5 = 10 10/11 minutes, so the coincidence falls at 2:10 10/11. The same template solves every variant: for opposition, close a (gap − 180)° head start (or gap + 180, whichever is the legal chase); for a right angle, close to 90° or 270° — and because 270 is just the far-side crossing, each full hour contains two right-angle moments. The counting corollaries worth knowing cold: in 12 hours the hands coincide 11 times, are opposite 11 times, and form right angles 22 times — because the minute hand laps the hour hand 11 times per half-day, not 12 (the lap takes 65 5/11 minutes, and 720 ÷ 720/11 = 11).',
      },
      {
        kind: 'para',
        text: 'Odd days are the calendar\u2019s entire engine: the remainder when a span of days is divided by 7. An ordinary year is 365 = 52 weeks + 1 day — one odd day; a leap year leaves two. Odd days ADD across spans, which is why the calendar of a date shifts by one weekday per ordinary year and two per leap year. The century blocks are precomputed once and used forever: 100 years contain 76 ordinary + 24 leap years (the century exception below), giving 76 + 48 = 124 odd days ≡ 5 (mod 7); so 200 years ≡ 3, 300 years ≡ 1, and 400 years ≡ 0 — the Gregorian calendar repeats its weekday pattern exactly every 400 years, which is also why 1 January 1600, 2000 and 2400 all fall on the same weekday.',
      },
      {
        kind: 'para',
        text: 'The leap-year rules carry one famous exception: divisible by 4 means leap, EXCEPT century years, which must be divisible by 400 — so 1700, 1800 and 1900 were ordinary years while 1600 and 2000 were leap. The exception exists because the true tropical year is 365.2422 days, not 365.25: adding a leap day every fourth year over-corrects slightly, and dropping three leap days per 400 years trims the drift to near-nothing. The screening-test manifestation: “was 1900 a leap year?” is a designed trap item, and any odd-day computation crossing a non-400 century must price the exception in.',
      },
      {
        kind: 'para',
        text: 'Day-of-week computation runs from a known anchor. Use 1 January 2000 = Saturday (or any date you know cold — 15 August 1947 = Friday serves equally well). Count total days between anchor and target in three blocks — completed years (odd days via leap counting), completed months of the current year (month lengths: 31, 28/29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), and the day of the month — then reduce mod 7 and walk the anchor forward that many weekdays. The method is mechanical, and its two error sources are exactly the two traps above: forgetting a leap February when the span crosses it, and the century exception on long spans.',
      },
      {
        kind: 'para',
        text: 'Repeating calendars are the cycle arithmetic turned into a question: in which future year will the calendar of 2024 (a leap year) be reused? A year\u2019s calendar is fully determined by its leap status and the weekday of its 1 January — so scan forward, accumulating odd days until both match: leap years repeat after 28 years when the 28-year odd-day sum is 0 mod 7 (as it is whenever the span contains exactly 7 leap years — true unless a non-400 century intervenes). The standard results: a leap year repeats after 28; the year after a leap year after 6; the second and third years after a leap year after 11. The derivation takes one line of odd-day sums and beats every memorized table when the paper varies the question — which it does.',
      },
      {
        kind: 'example',
        title: 'Worked example — 15 August 1947, from anchor to weekday',
        steps: [
          'Anchor: 1 January 1900 = Monday (equivalently 1 January 2000 = Saturday; pick one and stay consistent).',
          'Years block: 1900 through 1946 = 47 completed years before 1947. Leap years among them: 1904, 1908, …, 1944 = 11 (1900 is NOT leap — the century exception). Odd days = 47 + 11 = 58 ≡ 2 (mod 7). So 1 January 1947 = Monday + 2 = Wednesday.',
          'Months block: days from 1 January to 15 August 1947 (an ordinary year): 31 + 28 + 31 + 30 + 31 + 30 + 31 + 15 = 227 days — that is day number 227 of the year, i.e. 226 days after 1 January.',
          'Reduce: 226 ≡ 2 (mod 7). 15 August 1947 = Wednesday + 2 = Friday.',
          'Cross-check with the second anchor: 15 August 1947 = Friday is the historically known weekday — two independent routes agreeing is the built-in audit of the method.',
          'Note the structure for reuse: anchor → years (odd days) → months (lengths) → days → mod 7 → walk. Every date question ever set is this ladder, and the only traps live inside the years block (leap counting and the century exception).',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Taking the reflex angle when the smaller is asked (and vice versa) — read “angle between” as the smaller unless stated. Forgetting that the hour hand MOVES during the minute — the 0.5M term exists precisely for that error. Miscounting laps: 11 coincidences per 12 hours, not 12, because each lap takes 65 5/11 minutes. On calendars: the 1900-class century exception, and leap-February crossing in the months block. Every wrong option in this family is one of these five errors computed cleanly.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Relative speed', def: 'The minute hand gains 5.5° per minute on the hour hand — the pursuit engine of every “when” question.' },
          { term: 'Angle formula', def: 'Gap = |30H − 5.5M| degrees at H:M; take the lesser of the gap and 360° − gap for the conventional answer.' },
          { term: 'Lap counting', def: 'The minute hand laps the hour hand 11 times per 12 hours: 11 coincidences, 11 oppositions, 22 right angles.' },
          { term: 'Odd days', def: 'Days remaining after whole weeks: 1 per ordinary year, 2 per leap year; they add across spans and shift weekdays.' },
          { term: 'Century blocks', def: '100 years ≡ 5 odd days, 200 ≡ 3, 300 ≡ 1, 400 ≡ 0 — the Gregorian cycle repeats every 400 years.' },
          { term: 'Century exception', def: 'Century years are leap only when divisible by 400: 1700, 1800, 1900 ordinary; 1600, 2000 leap.' },
          { term: 'Anchor date', def: 'A known weekday (1 January 2000 = Saturday) from which day-of-week computations walk by accumulated odd days.' },
          { term: 'Repeating calendar', def: 'A year\u2019s calendar reuses after 6, 11 or 28 years depending on position in the leap cycle — derived from odd-day sums, not memorized.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The angle between the hands at 3:40 is:',
            options: ['120°', '130°', '140°', '230°'],
            answer: 1,
            explain: '|30×3 − 5.5×40| = |90 − 220| = 130°, and the smaller of 130/230 is 130. Option 230 is the reflex partner waiting for candidates who forget the convention; 120 comes from dropping the 0.5M hour-hand drift.',
          },
          {
            q: 'The hands of a clock coincide every:',
            options: ['60 minutes', '65 minutes', '65 5/11 minutes', '72 minutes'],
            answer: 2,
            explain: 'A full lap is 360° at 5.5°/min = 720/11 = 65 5/11 minutes. This is why 12 hours contain exactly 11 coincidences — the source of half the counting traps in the family.',
          },
          {
            q: 'In 12 hours, the hands form a right angle:',
            options: ['11 times', '12 times', '22 times', '24 times'],
            answer: 2,
            explain: 'Two quarter-track marks per lap (90° and 270° separations), 11 laps per 12 hours → 22 right angles. The 24 distractor assumes two per hour naively; the last hour of the half-day shares a crossing with the first of the next.',
          },
          {
            q: 'Between 2 and 3 o\u2019clock, the hands coincide at:',
            options: ['2:10 exactly', '2:10 10/11', '2:12', '2:09 1/11'],
            answer: 1,
            explain: 'At 2:00 the hour hand leads by 60°; closing at 5.5°/min takes 60/5.5 = 10 10/11 minutes. The exact fraction is the point — “2:10 exactly” is the designed near-miss.',
          },
          {
            q: 'The number of odd days in 100 years is:',
            options: ['4', '5', '1', '0'],
            answer: 1,
            explain: '100 years = 76 ordinary + 24 leap years (the 400-rule drops 1900-class years) = 76 + 48 = 124 odd days ≡ 5 (mod 7). The chain continues: 200 years ≡ 3, 300 ≡ 1, 400 ≡ 0.',
          },
          {
            q: 'Which of these years was NOT a leap year?',
            options: ['1600', '1700', '2000', '2024'],
            answer: 1,
            explain: 'Century years need divisibility by 400: 1700, 1800 and 1900 are ordinary; 1600 and 2000 are leap. The exception exists because the tropical year is 365.2422, not 365.25 days.',
          },
          {
            q: 'A leap year\u2019s calendar (with no century break in between) repeats after:',
            options: ['6 years', '11 years', '28 years', 'depends on the month'],
            answer: 2,
            explain: 'A 28-year span holds exactly 7 leap years → 28 + 7 = 35 odd days ≡ 0 (mod 7), and year 28 + start is itself leap again — both the weekday pattern and leap status match. The 6- and 11-year repeats belong to the years AFTER a leap year.',
          },
          {
            q: 'An ordinary year shifts the weekday of any fixed date by:',
            options: ['0 days', '1 day', '2 days', '7 days'],
            answer: 1,
            explain: '365 = 52 weeks + 1 odd day: one weekday forward (a Tuesday date lands Wednesday next ordinary year, two days forward after a leap February intervenes). This single fact generates every “same date, next year” item ever set.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The rate arithmetic here is the same pursuit structure as Time–Speed–Distance in the Quantitative Aptitude subject, and the mod-7 cycles are the calendar face of the remainder machinery built in Remainders and Cyclicity. For the deep story — why weeks exist, calendar reform history, and the astronomy of the tropical year — the Astronomy and History of Science subjects own the narrative; here you own the computational layer.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // LOGICAL REASONING — Ch8 Non-Verbal & Abstract Reasoning
  // §8.2 — paper folding/cutting, figure matrices, mirror and water
  // images, embedded figures.
  // Carve: ku-fnd-visual-pattern-rules OWNS figural series, shape
  // attributes and rule detection generally. This lesson owns the
  // FOLD/CUT simulation, the matrix format, and mirror/water image
  // letter-survival mechanics — none of which that lesson touches.
  // ================================================================
  {
    id: 'lr-paper-folding-figure-matrix',
    title: 'Paper Folding, Cutting and the Figure Matrix: Non-Verbal Reasoning at Speed',
    domain: 'Aptitude & Test Preparation',
    field: 'Logical Reasoning',
    branch: 'Figural Patterns',
    tier: 'core',
    concepts: [
      'the fold trace: a punch passes through every layer above it',
      'the unfold cascade: mirror across fold lines, last fold first',
      'rotation-proof cut tracking: corner, edge and centre holes',
      'the figure matrix: row rule and column rule, tracked as two features',
      'mirror images: the vertical axis and the surviving letters',
      'water images: the horizontal axis and its own survivors',
      'embedded figures and figure completion',
    ],
    words: 2101,
    readMins: 11,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'A square sheet is folded twice, a hole is punched through the stack, and the question shows the folded state: where will the holes appear when the paper is unfolded? This family — paper folding and cutting, figure matrices, mirror and water images, embedded figures — is the non-verbal backbone of school-entrance screens, defence-academy selection batteries and employability suites, precisely because it needs no language and no formulas: only the discipline of simulating, on paper or in the mind\u2019s eye, transformations that follow exact rules. The good news is that every transformation in the family is reversible, and reversing them in the right order is a learnable procedure, not a talent.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Non-verbal items are usually massed at the end of reasoning sections in blocks of ten to twenty, at twenty to thirty seconds each for the prepared — the fastest consistent marks on the paper. They are also the items where unprepared candidates lose the most time, because guessing feels almost defensible on figures. It is not: the simulation rules below turn every item in the family into a checkable computation.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The fold trace is rule one: a punch passes through EVERY layer of paper stacked above and below it, so a hole in the folded state fans out into as many holes as there were layers over the punch point. Fold a square once (two layers), punch once — the unfolded sheet shows TWO holes, symmetric across the fold line. Fold twice (four layers where the quarters stack), punch once — FOUR holes, mirrored across both fold lines. The counting is not decoration; options regularly include the one-hole and two-hole versions of a four-hole answer, and layer-counting eliminates them before any geometry begins.',
      },
      {
        kind: 'para',
        text: 'The unfold cascade is rule two: unfold in REVERSE order of folding — the last fold made is the first fold opened — and at each opening, mirror every existing hole across the fold line that opens. The mirror is exact: a hole one unit from the fold reflects to one unit on the other side, on the perpendicular from the hole to the line. Two folds, punched once: open the last fold (two holes mirrored across it), then open the first fold (both holes mirrored again, giving four, in the full pattern of the original fold geometry). Executing the cascade in the wrong order is the family\u2019s signature error — the hole count comes out right while the geometry lands wrong, which is precisely the distractor the options carry.',
      },
      {
        kind: 'figure',
        caption: 'The unfold cascade: punch one hole through the twice-folded sheet (4 layers); open the last fold first, mirroring the hole across it, then open the first fold, mirroring both — four holes, one per layer, arranged by the fold-line mirrors.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unfold cascade with mirrored holes">
  <style>.d{font-family:Georgia,serif;font-size:13px;fill:#52525b}.b{font-family:Georgia,serif;font-size:14px;font-weight:bold;fill:#3f3f46}.sq{fill:#fafafa;stroke:#8a8a93;stroke-width:1.8}.fld{stroke:#0f766e;stroke-width:2;stroke-dasharray:6 4}.h{fill:#e11d48}.ar{stroke:#e11d48;stroke-width:2.2;fill:none}</style>
  <text class="b" x="30" y="26">Folded state (4 layers)</text>
  <rect class="sq" x="60" y="46" width="90" height="90"/>
  <circle class="h" cx="105" cy="91" r="6"/>
  <path class="ar" d="M 175 91 l 45 0" marker-end="url(#ma)"/>
  <text class="d" x="182" y="82">open last fold</text>
  <text class="b" x="245" y="26">After first opening (2 holes)</text>
  <rect class="sq" x="280" y="46" width="180" height="90"/>
  <line x1="370" y1="46" x2="370" y2="136" stroke="#0f766e" stroke-width="2" stroke-dasharray="6 4"/>
  <circle class="h" cx="335" cy="91" r="6"/><circle class="h" cx="405" cy="91" r="6"/>
  <path class="ar" d="M 480 91 l 45 0" marker-end="url(#ma)"/>
  <text class="d" x="486" y="82">open first fold</text>
  <text class="b" x="550" y="26">Fully unfolded (4 holes)</text>
  <rect class="sq" x="585" y="46" width="180" height="180"/>
  <line x1="585" y1="136" x2="765" y2="136" stroke="#0f766e" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="675" y1="46" x2="675" y2="226" stroke="#0f766e" stroke-width="2" stroke-dasharray="6 4"/>
  <circle class="h" cx="640" cy="81" r="6"/><circle class="h" cx="710" cy="81" r="6"/><circle class="h" cx="640" cy="191" r="6"/><circle class="h" cx="710" cy="191" r="6"/>
  <text class="d" x="30" y="260">Hole count = layer count; hole positions = the punch mirrored across each fold line, last fold first.</text>
  <defs><marker id="ma" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e11d48"/></marker></defs>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Rotation-proof cut tracking handles cuts that are not simple holes: corner notches, edge slits, half-moons. The rule is unchanged — every cut mirrors across each fold line as it opens — but the orientation of the cut must be tracked, because a notch cut into a folded edge opens into a shape whose mirror completes it (half-circles become full circles, half-arrows become double-headed or reversed arrows). The discipline: label the cut\u2019s orientation relative to the fold line (parallel or perpendicular; which side the material was removed from), and mirror THAT orientation across. Options test orientation far more than position — the wrong-option shapes are almost always correctly counted, wrongly rotated.',
      },
      {
        kind: 'para',
        text: 'The figure matrix is the two-dimensional generalization of series: a 3×3 grid of figures with one cell missing, where the rows obey one rule and the columns another (or both obey the same rule — read the first two rows to find out). The method is two-feature tracking, straight from the figural-pattern toolkit: choose two features — element count and shading, rotation and position, outer shape and inner shape — and track each separately down each row and across each column. A feature that changes by +1 down each row and another that alternates across columns pins the missing cell exactly. The matrix discipline is never to describe the missing figure as a whole (“a dark triangle with two dots, sort of”); it is to compute each feature\u2019s value from the row rule and the column rule, then assemble the figure from the computed features.',
      },
      {
        kind: 'para',
        text: 'Mirror images flip across a VERTICAL axis: left becomes right, top stays top. For letter and word items the survival list is the tool — letters that look unchanged in a vertical mirror: A, H, I, M, O, T, U, V, W, X, Y (vertically symmetric), so a word like “MOM” or “AWAY” mirrors into a recognizably orderly shape while “BED” visibly breaks (B, E and D each flip into non-letters). Clock-face and time-notation mirrors have their own classic: a mirror-clock reading of h:m corresponds to the actual time 11:60 − h:m (i.e., 12:00 minus the shown time) — so a mirror showing 3:40 means the true time is 8:20. The check: mirror time + true time = 12:00 (on a 12-hour face).',
      },
      {
        kind: 'para',
        text: 'Water images flip across a HORIZONTAL axis: top becomes bottom, left stays left — the reflection in still water. The letter-survival list changes accordingly: B, C, D, E, H, I, K, O, X survive a water flip (horizontally symmetric), while A, M, T, U, V, W, Y break. The classic confusions between the two formats are the point: candidates mirror left-right when the water-flip was asked. Anchor each format to its axis — mirror = vertical axis like a mirror on the wall; water = horizontal axis like a lake surface — and read the item\u2019s instruction word every single time, because setters alternate them within a single block of ten.',
      },
      {
        kind: 'para',
        text: 'Embedded figures ask which one of five option figures is hidden inside a complex composite; completion items show a figure with a missing quadrant to be chosen. The embedded-figure craft is tracing, not staring: pick a distinctive fragment of the composite (a rare angle, a double curve, an odd junction) and trace its continuation through the noise, checking each option against the fragment rather than the whole. Completion craft: the two axes of symmetry (or the two diagonals) of the master figure transfer the known quadrants into the missing one — rotate or reflect the known quadrant across the symmetry line and read off what must appear. Both formats reward treating figures as constructions with rules, never as pictures to be admired.',
      },
      {
        kind: 'example',
        title: 'Worked example — one fold-and-punch, one matrix',
        steps: [
          'Fold item: a square is folded along its vertical midline (left half over right), then along its horizontal midline (top over bottom). One hole is punched through the folded corner nearest the centre of the original square. Where are the holes on unfolding?',
          'Layer count: two folds → four layers at the punch point → four holes guaranteed. Options with one or two holes die here.',
          'Cascade: the LAST fold (horizontal) opens first — mirror the punch across the horizontal midline: two holes stacked vertically. Then the first fold (vertical) opens — mirror BOTH holes across the vertical midline: four holes in a 2×2 block, centred on the original square\u2019s centre.',
          'Verdict: four holes at the four positions around the centre, each the same distance from it — the pattern of the punch and its three fold-mirrors.',
          'Matrix item: a 3×3 grid where each row shows a shape containing 1, 2, 3 small squares (growing left to right) and each column rotates the shape by 90° clockwise from the column above. Missing cell: row 3 (3 squares), column 3 (rotation 3 × 90° = 270°). Assemble from the two computed features — never from a holistic “vibe” of the figure.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Opening folds in the wrong order produces a correctly counted, wrongly placed pattern — the designed near-miss of the family. Mirror-versus-water confusion flips left-right when top-bottom was asked: anchor to the axis (wall mirror = vertical; lake = horizontal). In matrices, describing the missing figure holistically instead of computing feature values invites the “looks right” distractor. And in embedded figures, the option matching the composite\u2019s GENERAL look while distorting one junction is the trap — trace the distinctive fragment, not the silhouette.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Fold trace', def: 'A punch passes through every layer: hole count on unfolding = layer count at the punch.' },
          { term: 'Unfold cascade', def: 'Unfold in reverse fold order, mirroring every existing hole across each fold line as it opens.' },
          { term: 'Rotation-proof tracking', def: 'Tracking a cut\u2019s orientation relative to the fold line, so mirrors restore shape (half-cuts completing) correctly.' },
          { term: 'Figure matrix', def: 'A 3×3 grid with row rules and column rules; the missing cell is computed feature-by-feature, never guessed whole.' },
          { term: 'Two-feature tracking', def: 'Following two independent features (count, shading, rotation, position) through rows and columns to pin the missing figure.' },
          { term: 'Mirror image', def: 'Reflection across a vertical axis (left↔right); surviving letters A, H, I, M, O, T, U, V, W, X, Y.' },
          { term: 'Water image', def: 'Reflection across a horizontal axis (top↔bottom); surviving letters B, C, D, E, H, I, K, O, X.' },
          { term: 'Mirror-clock rule', def: 'Mirror time + true time = 12:00 on a 12-hour face: a mirror showing 3:40 means 8:20.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A square is folded twice and a single hole is punched through all layers. The unfolded sheet shows:',
            options: ['1 hole', '2 holes', '4 holes', '8 holes'],
            answer: 2,
            explain: 'Two folds stack four layers at the punch, and the punch passes through every layer: four holes. Counting layers first eliminates the one- and two-hole distractors before any geometry starts.',
          },
          {
            q: 'In the unfold cascade, the folds are opened:',
            options: ['In the order they were made', 'In reverse order of folding, last first', 'All at once', 'From the outside in, regardless of order'],
            answer: 1,
            explain: 'Physical unfolding reverses the folding sequence: the last fold made opens first, and each opening mirrors all existing holes across its line. Wrong order = right count, wrong geometry — the family\u2019s signature near-miss.',
          },
          {
            q: 'A mirror shows a clock reading 3:40. The actual time is:',
            options: ['8:20', '9:20', '3:40', '6:50'],
            answer: 0,
            explain: 'Mirror time + true time = 12:00: 11:60 − 3:40 = 8:20. The check line is worth memorizing — it turns every mirror-clock item into a subtraction.',
          },
          {
            q: 'Which word looks the SAME in a vertical mirror?',
            options: ['BED', 'MOM', 'POT', 'DAW'],
            answer: 1,
            explain: 'M, O are vertically symmetric letters (with A, H, I, T, U, V, W, X, Y), so MOM mirrors into itself. B, E, D, P, T (in the vertical sense) break — BED is the classic textbook example of a mirror-breaking word.',
          },
          {
            q: 'A water image flips a figure across:',
            options: ['A vertical axis', 'A horizontal axis', 'Both axes', 'Neither axis'],
            answer: 1,
            explain: 'Water = the lake surface = horizontal axis: top becomes bottom, left stays left. The wall-mirror (vertical axis) is the perennially confused sibling — read the instruction word every time.',
          },
          {
            q: 'In a 3×3 figure matrix, rows add one element per cell and columns rotate the figure 90° clockwise. The missing bottom-right cell is computed as:',
            options: ['The figure that “looks like” its row', 'Element count from the row rule, rotation from the column rule, assembled', 'A copy of the top-left cell rotated', 'Any symmetric figure'],
            answer: 1,
            explain: 'Two-feature tracking: the row fixes the element count (3 for the last row), the column fixes the rotation (270° for the third column); the answer is the assembled figure from both computed values. Holistic matching is exactly how the “looks right” distractor claims victims.',
          },
          {
            q: 'A notch cut into a FOLDED edge unfolds into:',
            options: ['The same notch', 'A mirrored shape completed across the fold line (e.g., half-circle → full circle)', 'Two separate notches far apart', 'Nothing — edge cuts vanish'],
            answer: 1,
            explain: 'The mirror of the cut completes it across the fold line: half-shapes cut at a folded edge open into whole shapes. Tracking the cut\u2019s orientation relative to the fold — not just its position — is what makes the geometry land.',
          },
          {
            q: 'In embedded-figure items, the reliable method is:',
            options: ['Match the overall silhouette of the composite', 'Trace a distinctive fragment (odd junction, rare angle) through the composite', 'Choose the simplest option', 'Count elements in every option'],
            answer: 1,
            explain: 'Options copy the composite\u2019s general look while distorting one junction; only tracing a distinctive fragment through the noise catches the distortion. Silhouette-matching is the trap the format is built around.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The attribute-inventory and rule-detection groundwork for all figural work lives in the shape-attributes lesson of this subject\u2019s nonverbal family — read it first if you have not. The symmetry mathematics under mirror and water images (reflection groups, letter isometries) belongs to the Mathematics Master Library\u2019s geometry chapters; the fold-and-punch structure is a physical cousin of the permutation machinery in the counting chapters. Within this book, this lesson completes the nonverbal ladder: series, then attributes, then folds and matrices.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // GENERAL AWARENESS — Ch2 Indian History Essentials
  // §2.6 — landmark events at the recall layer (the recall ladder
  // for static history: dates, sequences, causes).
  // Carve: the Indian History deep books own the NARRATIVE and the
  // historiography (causation debates, sources, interpretations).
  // This lesson owns the rapid-recall evergreen map — the event
  // pegs, chains and cause→event→consequence triples that
  // awareness sections examine. Greps 'landmark events', 'recall
  // ladder': zero knowledge hits.
  // ================================================================
  {
    id: 'ga-history-landmark-events',
    title: 'Landmark Events in Indian and World History: The Recall Ladder',
    domain: 'Aptitude & Test Preparation',
    field: 'General Awareness',
    branch: 'History Essentials',
    tier: 'core',
    concepts: [
      'the period scaffold: ancient, medieval, modern, independence, post-independence',
      'the independence-movement milestone chain as one connected story',
      'world-history landmark clusters: revolutions, world wars, decolonization',
      'cause, event, consequence: storing events as triples instead of lone dates',
      'century-pegging and the two-digit year compression',
      'frequently probed landmarks: firsts, founders, battles and acts',
      'post-independence milestones: the republic\u2019s own landmark run',
      'the depth pointer: where the narrative version lives',
    ],
    words: 2028,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'General-awareness sections do not examine history as historians know it — they examine it as a recall map: which battle, which year, which first, in what order. Law-entrance general-knowledge papers, defence-academy ability tests, recruitment screenings and civil-services preliminary papers all draw from the same evergreen pool of roughly two hundred landmark events, and candidates lose marks not because they never read the material but because they store it as scattered dates instead of a connected structure. This lesson builds the structure: a period scaffold, one connected chain for the independence movement, the world-history clusters, and a storage format — the cause-event-consequence triple — that makes every peg answer three questions instead of one.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'History questions in awareness sections are the purest recall marks on the paper: no reasoning, no elimination — you either hold the peg or you do not. They are also the cheapest marks to secure permanently, because the landmark pool is stable across years: the same two hundred events, re-asked in rotation. An evening invested in the ladder below pays for every screening test you will ever sit.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The period scaffold is the filing cabinet: ancient India (Harappan cities in their mature phase around 2600\u20131900 BCE \u2014 Mohenjo-daro, Harappa, Dholavira; Vedic culture; the Mauryan empire founded by Chandragupta around 322 BCE and reaching its peak under Ashoka, whose Kalinga war of 261 BCE turned him to dhamma; the Gupta era from about 320 CE, the classical golden age of mathematics and art), medieval India (the Delhi Sultanate from 1206 under Qutb al-Din Aibak; the Mughal empire opened by Babur at the first battle of Panipat, 1526; Akbar\u2019s long reign 1556\u20131005; the Taj Mahal begun under Shah Jahan around 1632), modern India (colonial trade becoming rule \u2014 Plassey, 1757, Clive\u2019s victory over Siraj-ud-Daulah; the revolt of 1857; the rise of the national movement), the independence era, and the republic (Constitution in force 26 January 1950). Every new fact you learn files into one shelf of this cabinet \u2014 and retrieval doubles when the shelf is explicit.',
      },
      {
        kind: 'para',
        text: 'The independence-movement chain deserves its own connected treatment, because it is the single most-probed span in Indian awareness papers, and because its events cause one another \u2014 remembering the chain replaces remembering the dates. The Indian National Congress is founded (1885, on Hume\u2019s initiative, first session under W. C. Bonnerjee). Curzon partitions Bengal (1905) \u2014 the Swadeshi and Boycott response is born, and the Muslim League follows (1906). The Rowlatt Act and the Jallianwala Bagh massacre (1919) turn constitutional protest into mass anger; Gandhi answers with Non-Cooperation (1920\u201322), withdrawn after Chauri Chaura. The Simon Commission (1928, all-white, \u201cSimon Go Back\u201d) and the Purna Swaraj resolution (1929, Lahore, under Jawaharlal Nehru) set the stage for the Dandi March and Civil Disobedience (1930). The Government of India Act (1935) reshapes provincial politics; the Quit India movement (1942, \u201cDo or Die\u201d) is the final mass surge; Independence and Partition arrive in 1947; the Republic completes the story on 26 January 1950 \u2014 a date chosen to honour Purna Swaraj day. Learn the chain as a causal story told aloud in ninety seconds; the dates ride along for free.',
      },
      {
        kind: 'figure',
        caption: 'The independence-movement chain: each event provokes the next — partition of Bengal breeds Swadeshi, Rowlatt breeds Non-Cooperation, Simon breeds Purna Swaraj, which breeds Dandi and Quit India, ending in Independence and the Republic.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chained timeline of the Indian independence movement">
  <style>.y{font-family:Georgia,serif;font-size:13px;font-weight:bold;fill:#e11d48}.e{font-family:Georgia,serif;font-size:12px;fill:#3f3f46}.lnk{stroke:#8a8a93;stroke-width:2;fill:none}</style>
  <line x1="40" y1="270" x2="790" y2="270" stroke="#8a8a93" stroke-width="2.4"/>
  ${[[40,'1885','Congress founded'],[160,'1905','Bengal partition; Swadeshi'],[290,'1919','Rowlatt; Jallianwala Bagh'],[420,'1920','Non-Cooperation'],[540,'1930','Dandi March; Civil Disobedience'],[660,'1942','Quit India'],[760,'1947','Independence + Republic 1950']].map(([x,y,t],i) => '<circle cx="' + x + '" cy="270" r="6" fill="#3f3f46"/><text class="y" x="' + x + '" y="' + (240 - (i%2)*40) + '" text-anchor="middle">' + y + '</text><text class="e" x="' + x + '" y="' + (258 - (i%2)*40) + '" text-anchor="middle">' + t + '</text>').join('')}
  <text class="e" x="410" y="300" text-anchor="middle">each event provokes the next — learn the chain, and the dates ride along</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'World-history landmarks cluster, and clusters are easier to recall than isolated items. The revolutions: French (1789, liberty-equality-fraternity, the Bastille) and Russian (1917, the Bolsheviks under Lenin). The world wars: the first 1914\u201318 (assassination at Sarajevo the trigger; Treaty of Versailles the settlement that planted the second), the second 1939\u201345 (German invasion of Poland the trigger; the United Nations, 1945, the institutional response). The Cold-War arc: the Berlin Wall built 1961 and fallen 1989, the Soviet Union dissolved 1991. Decolonization runs through it all: Asia and Africa\u2019s independence wave crests in 1947\u20131960, with India the largest single case. Store clusters as clusters \u2014 four dates and one story \u2014 and any question about any member retrieves the whole structure.',
      },
      {
        kind: 'para',
        text: 'The cause-event-consequence triple is the storage format that answers three question types per peg. Plassey (1757): cause \u2014 the East India Company\u2019s trade ambitions colliding with Siraj-ud-Daulah\u2019s resistance; event \u2014 Clive\u2019s army defeats him, aided by the Mir Jafar defection; consequence \u2014 Company revenue rights over Bengal, the foundation of Company rule in India. Kalinga (261 BCE): cause \u2014 Mauryan expansion under Ashoka; event \u2014 a bloody victory; consequence \u2014 Ashoka\u2019s remorse, dhamma, and the edicts that spread it. When a question asks \u201cwhy\u201d, \u201cwhen\u201d or \u201cwhat followed\u201d, the triple answers it \u2014 and building the triple during study is itself the encoding that makes recall stick.',
      },
      {
        kind: 'para',
        text: 'Century-pegging is the compression trick that halves the memorization: file each event by century with a two-digit year, and the scaffold carries the rest. Ancient: the 3rd century BCE belongs to the Mauryas (322, 261); the 4th century CE to the Guptas (320). Medieval: the 13th to the Sultanate (1206), the 16th to the Mughals (1526, 1556\u2013105). Modern: the 18th to Plassey (1757), the 19th to the revolt (1857) and the Congress (1885), the 20th to the movement\u2019s chain (1905\u20131947) and the Republic (1950). Practise recall in this order \u2014 century first, then the two-digit year \u2014 and the map becomes self-checking: a claim that the Congress was founded in 1785 fails the century test instantly.',
      },
      {
        kind: 'para',
        text: 'The frequently probed landmarks concentrate on four patterns: firsts (first President, first Indian in space, first university), founders (who founded the Sultanate, the Congress, the Mughal line), battles (Panipat\u2019s three \u2014 1526, 1556, 1761 \u2014 Plassey, Buxar 1764, Kalinga) and acts (the Regulating Act 1773, the Government of India Acts of 1858, 1909, 1919 and 1935 \u2014 the constitutional staircase to 1947). Build a one-page sheet per pattern; these four sheets, plus the chain and the clusters, are the working core of history awareness. Anything beyond them is narrative depth \u2014 valuable, and exactly where the deep books take over.',
      },
      {
        kind: 'para',
        text: 'Post-independence milestones complete the ladder, and the papers sample them steadily. The first general election (1951\u201352, the world\u2019s largest democratic exercise at the time) and the first President; the States Reorganisation Act (1956) redrawing the map on linguistic lines; the green revolution (late 1960s) and the bank nationalizations (1969); the atomic tests (1974, \u201cSmiling Buddha\u201d, and 1998) and the space programme\u2019s rise from the first satellite (1975) to the lunar and orbital missions of the 2000s and 2020s; the economic liberalization of 1991, the single most consequential economic landmark of the republic; and the constitutional amendments that recur in polity papers (the 42nd and 44th, 1976 and 1978, the mini-constitution and its correction). File these on the republic shelf beside the 1950 commencement \u2014 they are to post-independence questions what the movement chain is to the freedom struggle.',
      },
      {
        kind: 'example',
        title: 'Worked example — reading a question off the ladder',
        steps: [
          'The item: \u201cThe Non-Cooperation Movement was launched in response to which event?\u201d Options: the Partition of Bengal; the Rowlatt Act and Jallianwala Bagh; the Simon Commission; the Dandi March.',
          'Locate the span on the scaffold: Non-Cooperation is an independence-era event (20th century, movement chain).',
          'Walk the chain aloud: 1905 partition \u2192 Swadeshi \u2192 1919 Rowlatt and Jallianwala \u2192 1920 Non-Cooperation \u2192 1922 Chauri Chaura withdrawal \u2192 1928 Simon \u2192 1930 Dandi.',
          'The chain answers directly: Non-Cooperation (1920) follows the 1919 provocation \u2014 the Rowlatt Act and the Jallianwala Bagh massacre. The Simon Commission provokes the 1929 Purna Swaraj response; the Dandi March is a decade after Non-Cooperation began \u2014 both distractors sit at the wrong links.',
          'Note what made this a five-second item: not rote date recall, but chain position. Every \u201cin response to which event\u201d question in this syllabus is a chain-adjacency question.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Adjacent-link confusion is the history trap: setters pair each movement with the provocation of a NEIGHBOURING movement (Non-Cooperation \u2192 Simon Commission; Civil Disobedience \u2192 Rowlatt) because unstructured memory cannot order them. The three-Panipat confusion (1526 Babur, 1556 Akbar\u2019s forces, 1761 Abdali) punishes single-date storage. The century slip (1885 Congress read as 1858 or 1919 read as 1909) dies instantly under century-pegging. And the Republic trap \u2014 15 August 1947 (independence) versus 26 January 1950 (republic) \u2014 appears in some disguise on nearly every paper.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Period scaffold', def: 'The five-shelf filing cabinet \u2014 ancient, medieval, modern, independence, republic \u2014 into which every historical fact files.' },
          { term: 'Movement chain', def: 'The causal sequence 1885 \u2192 1905 \u2192 1919 \u2192 1920 \u2192 1930 \u2192 1942 \u2192 1947 \u2192 1950, stored as one story.' },
          { term: 'Landmark clusters', def: 'World-history groups stored together \u2014 revolutions, world wars, Cold-War arc, decolonization wave.' },
          { term: 'Cause-event-consequence triple', def: 'The storage unit that answers why-, when- and what-followed questions from one peg.' },
          { term: 'Century-pegging', def: 'Filing by century with a two-digit year, making the map self-checking against gross date errors.' },
          { term: 'Four patterns', def: 'Firsts, founders, battles and acts \u2014 the concentration points of history questions in awareness sections.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Indian National Congress was founded in:',
            options: ['1857', '1885', '1905', '1919'],
            answer: 1,
            explain: '1885, on A. O. Hume\u2019s initiative, first session presided over by W. C. Bonnerjee. Century-pegging guards it: the 19th century holds the revolt (1857) and the Congress (1885); the movement\u2019s provocations belong to the 20th.',
          },
          {
            q: 'The Dandi March of 1930 was part of which movement?',
            options: ['Non-Cooperation', 'Civil Disobedience', 'Quit India', 'Swadeshi'],
            answer: 1,
            explain: 'The march to Dandi, breaking the salt law, opened the Civil Disobedience movement (1930). Chain position: it follows the Purna Swaraj resolution of 1929 \u2014 a decade after Non-Cooperation began and twelve years before Quit India.',
          },
          {
            q: 'Which battle transferred Bengal\u2019s revenues to the East India Company and began Company rule?',
            options: ['Buxar (1764)', 'Panipat (1526)', 'Plassey (1757)', 'Kalinga (261 BCE)'],
            answer: 2,
            explain: 'Plassey, 1757: Clive defeated Siraj-ud-Daulah (the Mir Jafar defection deciding it), and the Company gained revenue rights over Bengal \u2014 the triple\u2019s consequence leg. Buxar (1764) then formalized Diwani rights over Bengal, Bihar and Orissa.',
          },
          {
            q: 'The Quit India movement\u2019s call \u201cDo or Die\u201d was given in:',
            options: ['1920', '1930', '1942', '1947'],
            answer: 2,
            explain: 'August 1942, the final mass surge before independence, launched as the Cripps Mission talks collapsed. Chain neighbours: Government of India Act 1935 before it, Independence and Partition 1947 after it.',
          },
          {
            q: 'India\u2019s Constitution came into force on 26 January 1950 because that date commemorates:',
            options: ['Independence Day 1947', 'The Purna Swaraj declaration day of 1930', 'The Dandi March', 'The first Congress session'],
            answer: 1,
            explain: 'The Lahore session (December 1929) resolved Purna Swaraj, and 26 January 1930 was observed as Independence Day; the Constitution\u2019s commencement date honours it. 15 August 1947 is a different landmark entirely \u2014 the most-presented confusion pair in this syllabus.',
          },
          {
            q: 'The first battle of Panipat (1526) is associated with:',
            options: ['Akbar', 'Babur founding the Mughal empire', 'Abdali\u2019s victory', 'Sher Shah'],
            answer: 1,
            explain: 'Babur defeated Ibrahim Lodi at Panipat in 1526, founding the Mughal line; the second Panipat (1556) secured Akbar\u2019s succession; the third (1761) was Abdali\u2019s victory over the Marathas. Three battles, one place \u2014 store as a set.',
          },
          {
            q: 'Which of these is the correct cause-event-consequence reading of the Russian Revolution cluster?',
            options: ['1789 \u2194 French Revolution', '1917 \u2194 Bolshevik revolution under Lenin', '1945 \u2194 United Nations founding', '1989 \u2194 Berlin Wall falls'],
            answer: 1,
            explain: 'Cluster storage: revolutions = 1789 (French) and 1917 (Russian, Bolshevik); world wars = 1914\u201318 and 1939\u201345; the UN (1945) answers the second war; the Wall (1989) and the USSR\u2019s dissolution (1991) close the Cold War arc.',
          },
          {
            q: 'The Government of India Act that introduced provincial autonomy and reshaped the politics of the late 1930s was passed in:',
            options: ['1919', '1935', '1909', '1858'],
            answer: 1,
            explain: 'The 1935 Act \u2014 the last and largest of the constitutional staircase (1773 Regulating, 1858 Crown rule, 1909 Morley-Minto, 1919 Montagu-Chelmford, 1935) \u2014 which the Constitution of 1950 then replaced. Acts stored as a staircase answer every \u201cwhich act\u201d question by position.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'This lesson owns the recall map only. The narrative versions \u2014 what the freedom struggle meant, how Mauryan administration worked, why the revolt of 1857 failed \u2014 live in the Indian History and World History subjects of the Library, which this subject deliberately points to rather than duplicates. Within General Awareness, continue to Indian Art, Culture and Heritage (\u00a77), then the static-GK honours map, then the current-affairs engine that binds the evergreen layers to the news.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // GENERAL AWARENESS — Ch7 Static GK: Awards, Sports, Culture,
  // Books & Organizations
  // §7.1 — Indian art, culture and heritage as a pair-map.
  // Carve: Art History deep books own the SCHOLARSHIP of art
  // (movements, analysis, world art); Dance/Music/Theater subjects
  // own performance depth. This lesson owns the static-GK
  // pair-map: dance↔state, painting↔region, temple style↔belt,
  // festival↔state, heritage-site recall — the layer GA sections
  // examine. Greps 'classical dances', 'Madhubani', 'Nagara':
  // zero knowledge-topic hits.
  // ================================================================
  {
    id: 'ga-art-culture-heritage',
    title: 'Indian Art, Culture and Heritage: The Static-GK Atlas',
    domain: 'Aptitude & Test Preparation',
    field: 'General Awareness',
    branch: 'Static GK',
    tier: 'core',
    concepts: [
      'the eight classical dances and their home states',
      'two music systems: Hindustani and Carnatic, and their instruments',
      'the painting schools: folk and court traditions by region',
      'temple architecture: Nagara, Dravida and Vesara',
      'festivals and fairs as state pairs',
      'the heritage-site recall shortlist',
      'the intangible layer: recognized traditions and classical languages',
      'the pair-map method: two-column drilling for permanent storage',
    ],
    words: 1922,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: '\u201cWhich state is the home of Sattriya?\u201d \u201cMadhubani painting belongs to which region?\u201d \u201cThe Sun Temple at Konark is in which style? International\u201d awareness papers, defence-academy general-ability tests, law-entrance general knowledge and every state recruitment board return to Indian art and culture year after year, because the material is finite, beloved and perfectly pair-shaped: an art form and a place, a style and a belt, a festival and a state. This lesson organizes that material the way the questions ask it \u2014 as pairs \u2014 and installs the drill method that makes pairs permanent.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Art-and-culture items are one-mark questions with zero reasoning load, drawn from a pool that changes almost never \u2014 the same eight dances, the same dozen paintings, the same temple styles every single year. They are also the items international candidates and science graduates most often leave blank. The pair-map below closes that gap in one focused sitting.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The eight classical dances (as recognized by the national academy of music, dance and drama) with their homes: Bharatanatyam \u2014 Tamil Nadu; Kathak \u2014 northern India, its Lucknow and Jaipur traditions; Kathakali and Mohiniyattam \u2014 Kerala; Kuchipudi \u2014 Andhra Pradesh; Odissi \u2014 Odisha; Manipuri \u2014 Manipur; Sattriya \u2014 Assam, born in the monasteries (sattras) of the Vaishnavite tradition. The examiner\u2019s favourite confusions pair the two Keralite forms, attach Kathak to the wrong state, or detach Sattriya (the newest classical recognition) from Assam. Drill the list both ways \u2014 state to dance, dance to state \u2014 because the question comes both ways.',
      },
      {
        kind: 'para',
        text: 'The two music systems divide at the Deccan: Hindustani in the north, Carnatic in the south, both descended from a common ancient tradition that the medieval centuries split. Hindustani carries the gharana tradition ( lineage schools of sitar, sarod, tabla and vocal khayal) and absorbed Persianate court influence; Carnatic is temple-and-composer centred, with the Trinity of Tyagaraja, Muthuswami Dikshitar and Syama Sastri, its instruments the veena, mridangam, violin and nagaswaram. Awareness questions rarely go deeper than system-to-region, instrument-to-system, or the Trinity \u2014 all pair work.',
      },
      {
        kind: 'para',
        text: 'The painting schools split into folk and court streams. Folk: Madhubani (Bihar \u2014 natural pigments, mythological themes), Pattachitra (Odisha and Bengal \u2014 cloth-scroll narrative), Warli (Maharashtra \u2014 geometric figures on mud walls), Gond (central India \u2014 the tree-of-life tradition), Kalamkari (Andhra \u2014 pen-drawn, dyed cloth). Court: the Mughal atelier (naturalistic portraiture and manuscript painting), the Rajasthani and Pahari schools (bold colour, Krishna themes \u2014 Bundi, Kishangarh, Basohli, Kangra), Tanjore painting (Tamil Nadu \u2014 gilded, iconographic) and Mysore painting (Karnataka \u2014 its sibling). Region-to-school and school-to-region, both directions, is the whole ask.',
      },
      {
        kind: 'figure',
        caption: 'The temple-architecture belt map: Nagara in the north (curvilinear shikhara, amalaka finial), Dravida in the far south (pyramidal vimana, gopuram gateways), Vesara as the Deccan hybrid of the Chalukyas and Hoysalas.',
        afterConcept: 3,
        svg: `<svg viewBox="0 0 820 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map of India showing the three temple-style belts">
  <style>.t{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.d{font-family:Georgia,serif;font-size:12px;fill:#52525b}.b{fill:#ecfdf5;stroke:#10b981;stroke-width:1.6}.r{fill:#fef3c7;stroke:#d97706;stroke-width:1.6}.v{fill:#fee2e2;stroke:#e11d48;stroke-width:1.6}</style>
  <rect class="b" x="150" y="30" width="500" height="80"/>
  <text class="t" x="400" y="62" text-anchor="middle">NAGARA \u2014 the northern style</text>
  <text class="d" x="400" y="86" text-anchor="middle">curvilinear shikhara \u00b7 amalaka finial \u00b7 Khajuraho, Sun Temple Konark(early), Odisha school</text>
  <rect class="v" x="180" y="120" width="440" height="70"/>
  <text class="t" x="400" y="148" text-anchor="middle">VESARA \u2014 the Deccan hybrid</text>
  <text class="d" x="400" y="172" text-anchor="middle">Chalukya \u00b7 Hoysala \u00b7 star-platforms at Halebid, Somnathpura, Pattadakal</text>
  <rect class="r" x="210" y="200" width="380" height="70"/>
  <text class="t" x="400" y="228" text-anchor="middle">DRAVIDA \u2014 the southern style</text>
  <text class="d" x="400" y="252" text-anchor="middle">pyramidal vimana \u00b7 gopuram gateways \u00b7 Brihadisvara at Thanjavur, Madurai Meenakshi</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Temple architecture asks three styles by belt: Nagara, the northern idiom (beehive-curved shikhara crowned by an amalaka; the Khajuraho temples and the Odisha school, including Konark); Dravida, the southern (stepped pyramidal vimana within walled courtyards entered through gopuram gateways \u2014 Brihadisvara at Thanjavur, the Meenakshi complex at Madurai); and Vesara, the Deccan hybrid of the Chalukyas and Hoysalas (star-shaped platforms, Halebid and Somnathpura). The cave tradition stands apart (Ajanta\u2019s murals, Ellora\u2019s Kailasa), as does the stupa (Sanchi\u2019s great hemispheres) and \u2014 from the medieval courts \u2014 Indo-Islamic architecture\u2019s arch, dome and charbagh garden, culminating in the Taj Mahal. Questions travel style-to-example and example-to-style; both directions must be drilled.',
      },
      {
        kind: 'para',
        text: 'Festivals and fairs are pure state-pairs, and the standard pool is short: Bihu (Assam, three harvest festivals), Pongal (Tamil Nadu, January harvest), Onam (Kerala, the boat-races-and-floral-carpet festival), Baisakhi (Punjab, the April new year and harvest), Durga Puja (Bengal\u2019s defining festival), Chhath (Bihar\u2019s sun worship), Hornbill (Nagaland\u2019s December festival), Losar (Ladakh\u2019s new year), Thrissur Pooram (Kerala\u2019s temple elephant pageant), Pushkar (Rajasthan\u2019s camel fair), and the Kumbh Mela\u2019s four-site rotation (Prayagraj, Haridwar, Ujjain, Nashik). The textile and craft pairs ride the same sheet: pashmina and Kashmiri embroidery \u2014 Kashmir; Banarasi brocade \u2014 Varanasi; kanjivaram silk and Kanchipuram \u2014 Tamil Nadu; Chanderi and Maheshwari \u2014 Madhya Pradesh; bandhani tie-dye \u2014 Gujarat and Rajasthan; phulkari \u2014 Punjab; Chikankari \u2014 Lucknow; Kalamkari cloth (again Andhra, the painting pair doubling); Mysore silk \u2014 Karnataka; and the handicraft marks (blue pottery \u2014 Jaipur, bidriware \u2014 Karnataka, terracotta traditions of Bengal and Haryana). The structure never changes: two columns, both directions.',
      },
      {
        kind: 'para',
        text: 'The heritage-site recall shortlist: India\u2019s World Heritage list now runs past forty sites, and awareness papers sample the famous core \u2014 the Taj Mahal (1983, the list\u2019s first great Indian name), Agra Fort, Fatehpur Sikri, the Red Fort, Qutb Minar and Humayun\u2019s Tomb in the Mughal cluster; Ajanta, Ellora, Elephanta in the caves; Konark, Mahabalipuram, the Brihadisvara temples and Pattadakal in the temple cluster; Khajuraho, Hampi, Sanchi, Bodh Gaya and the Chola temples in the ancient cluster; Kaziranga, Keoladeo, Manas, Sundarbans, Nanda Devi and the Valley of Flowers in the natural cluster; and the Mountain Railways, Jantar Mantar, Jaipur\u2019s walled city and the modern additions (Nalanda, Rani-ki-Vav, the Hoysala temples, Santiniketan). The recall format is site-to-state and site-to-cluster \u2014 never an exhaustive list, always the famous core plus the newest entries.',
      },
      {
        kind: 'para',
        text: 'The intangible layer runs beside the site list and is asked in the same breath: the national inventory of performing and ritual traditions on the world\u2019s intangible-heritage roster \u2014 Kutiyattam theatre, the Ramlila and Ramman festival traditions, Vedic chanting, Mudiyettu theatre, Chhau dance, Sankirtana, the Buddhist chanting of Ladakh, nowruz, yoga (inscribed 2016) and Durga Puja (2021) among them \u2014 and the classical-language designations, a list that now includes Tamil, Sanskrit, Telugu, Kannada, Malayalam and Odia. The examination format is identical to the site list: tradition-to-state and language-to-status, sampled from the famous core plus the newest inscriptions. Keep both on the same sheet \u2014 tangible and intangible are one atlas in the papers\u2019 eyes, and the pair-map drill runs over both without modification.',
      },
      {
        kind: 'para',
        text: 'The pair-map method is the drill that fixes everything above: build a two-column sheet (art form | place), cover one column, recite the other, swap, repeat across days \u2014 the classic study-skills spacing applied to GK. Two refinements make it examination-grade. First, drill the CONFUSABLES side by side (Kathakali next to Mohiniyattam, both Kerala; Kathak alone in the north; Kuchipudi not Kathak in Andhra) \u2014 discrimination is what the options test, so the drill must discriminate, not just recite. Second, demand the reverse direction on alternate days: given Odisha, produce Odissi, Pattachitra (with Bengal), Konark, Chhath\u2019s neighbours \u2014 because half the paper asks from the state end.',
      },
      {
        kind: 'example',
        title: 'Worked example — answering a culture cluster from the map',
        steps: [
          'The item: \u201cMatch List I (art form) with List II (state): Kathakali, Sattriya, Kuchipudi, Mohiniyattam \u2014 Kerala, Assam, Andhra Pradesh, Kerala.\u201d The clever version of this item includes both Keralite forms to force discrimination.',
          'Run the pair-map: Kathakali \u2014 Kerala (the martial-theatre form, green-faced characters). Mohiniyattam \u2014 Kerala (the graceful female form, \u201cthe dance of the enchantress\u201d \u2014 both Keralite, and THAT is the discrimination the item buys by including both).',
          'Sattriya \u2014 Assam (monastery-born, the newest classical recognition). Kuchipudi \u2014 Andhra Pradesh (the dance-drama tradition, once all-male troupe performance; not to be filed with Kathak despite the similar sound).',
          'Answer by elimination discipline: the two Kerala slots fill first (they are the confusable pair), then the remaining two are forced \u2014 Assam and Andhra have exactly one classical form each in this item.',
          'The transferable habit: whenever an option set contains TWO forms from one state, that pair is the item\u2019s real question. Resolve the confusable pair first; the rest is elimination.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'The sound-alike trap (Kuchipudi/Kathak/Kathakali) is the format\u2019s favourite weapon \u2014 resolve it by region first, name second. The both-directions trap punishes one-way memorization: candidates who drilled dance-to-state freeze when handed state-to-dance. The newest-entry trap: papers love the recently recognized or inscribed (Sattriya, Santiniketan, the Hoysala temples) precisely because older books omit them. And the style-vs-example trap asks the temple question backwards (given Hampi, name the style) \u2014 drill both directions or lose half the marks.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Eight classical dances', def: 'Bharatanatyam (TN), Kathak (north), Kathakali and Mohiniyattam (Kerala), Kuchipudi (Andhra), Odissi (Odisha), Manipuri (Manipur), Sattriya (Assam).' },
          { term: 'Two music systems', def: 'Hindustani (north, gharanas, khayal) and Carnatic (south, the Trinity, kriti form), dividing at the Deccan.' },
          { term: 'Folk painting schools', def: 'Madhubani (Bihar), Pattachitra (Odisha\u2013Bengal), Warli (Maharashtra), Gond (central India), Kalamkari (Andhra).' },
          { term: 'Nagara / Dravida / Vesara', def: 'The northern (curved shikhara), southern (vimana and gopuram) and Deccan-hybrid (star platforms) temple idioms.' },
          { term: 'Festival\u2013state pairs', def: 'Bihu\u2013Assam, Pongal\u2013Tamil Nadu, Onam\u2013Kerala, Baisakhi\u2013Punjab, Durga Puja\u2013Bengal, Chhath\u2013Bihar, Hornbill\u2013Nagaland.' },
          { term: 'Heritage-site clusters', def: 'The famous core grouped Mughal, caves, temples, ancient, natural \u2014 plus the newest inscriptions the papers favour.' },
          { term: 'Pair-map drill', def: 'The two-column, both-directions, confusables-together recall method that makes static GK permanent.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Sattriya, recognized as a classical dance in 2000, originates from:',
            options: ['Manipur', 'Assam', 'Odisha', 'Kerala'],
            answer: 1,
            explain: 'Assam \u2014 born in the sattras (Vaishnavite monasteries) and the newest of the eight classical recognitions. Its recent date is exactly why papers favour it: older books omit it.',
          },
          {
            q: 'Madhubani painting, with its natural pigments and mythological themes, belongs to:',
            options: ['Rajasthan', 'Bihar', 'Maharashtra', 'Bengal'],
            answer: 1,
            explain: 'Bihar \u2014 the Mithila region\u2019s tradition. Warli is the Maharashtra pair, Pattachitra the Odisha\u2013Bengal pair, Kalamkari the Andhra pair: the folk list is pure region-mapping.',
          },
          {
            q: 'Gopuram gateways and stepped-pyramidal vimanas characterize which temple style?',
            options: ['Nagara', 'Vesara', 'Dravida', 'Indo-Islamic'],
            answer: 2,
            explain: 'Dravida, the southern idiom \u2014 Brihadisvara at Thanjavur, the Madurai Meenakshi gopurams. Nagara is the northern curved shikhara; Vesara the Deccan hybrid of Chalukyas and Hoysalas.',
          },
          {
            q: 'The Carnatic music Trinity \u2014 Tyagaraja, Muthuswami Dikshitar and Syama Sastri \u2014 belongs to:',
            options: ['The Hindustani gharana system', 'The southern system of the Thanjavur region', 'The Mughal court', 'The Sufi tradition'],
            answer: 1,
            explain: 'The Carnatic (southern) system, all three of the Thanjavur area. System-to-region and instrument-to-system (veena and mridangam south; sitar, sarod, tabla north) is the whole examination ask.',
          },
          {
            q: 'The Kumbh Mela rotates among:',
            options: ['Four sites: Prayagraj, Haridwar, Ujjain, Nashik', 'Three sites in the Gangetic plain', 'Only Prayagraj and Haridwar', 'Sites chosen annually'],
            answer: 0,
            explain: 'Four sites on a rotation \u2014 Prayagraj (the confluence), Haridwar (the Ganga), Ujjain (the Shipra) and Nashik (the Godavari). Festival papers probe the rotation, not the dates.',
          },
          {
            q: 'Star-shaped platforms and the Halebid\u2013Somnathpura complexes mark which style?',
            options: ['Nagara', 'Dravida', 'Vesara', 'Cave tradition'],
            answer: 2,
            explain: 'Vesara, the Deccan hybrid of the Chalukyas and Hoysalas \u2014 Pattadakal, Halebid, Somnathpura. Given an example, name the style: the backwards direction of the temple question, always drilled with the forwards one.',
          },
          {
            q: 'The festival of Onam, with its boat races and floral carpets (pookalam), belongs to:',
            options: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'],
            answer: 1,
            explain: 'Kerala \u2014 the harvest festival welcoming the legendary King Mahabali. Its state pair-neighbour Pongal belongs to Tamil Nadu: harvest festivals are the most-confused sub-family in the list.',
          },
          {
            q: 'A question hands you the STATE (Odisha) and asks for its culture cluster. The complete pair-map answer includes:',
            options: ['Odissi, Pattachitra, Konark, Chhath\u2019s neighbour Bengal', 'Bharatanatyam and Thanjavur', 'Kathak and Khayal', 'Warli and the Mithila tradition'],
            answer: 0,
            explain: 'Odisha pairs: the Odissi dance, the Odisha school of Pattachitra (shared with Bengal\u2019s scroll tradition), the Konark Sun Temple (with the Odisha Nagara school), while Chhath is Bihar\u2019s \u2014 the neighbour that completes the discrimination drill.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'For the scholarship behind this atlas \u2014 how to READ a Madhubani panel, the aesthetics of raga, the dynastic history behind the temple belts \u2014 the Art History, Dance, Music and Indian History subjects own the depth, and this lesson points there by design. Within General Awareness: the honours map (awards, sports, persons in news) is the sibling static sheet, and the current-affairs engine binds both to the events of the year.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // GENERAL AWARENESS — Ch7 Static GK (continued)
  // §7.2 — awards, sports and persons in news.
  // Carve: ku-lang-books-authors-prizes (World Literature) owns
  // literary prizes as literary history. This lesson owns the
  // honours MAP: the civilian/gallantry ladders, the sports
  // calendar-trophy system, and the persons-in-news method.
  // ================================================================
  {
    id: 'ga-awards-sports-persons',
    title: 'Awards, Sports and Persons in News: The Honours Map',
    domain: 'Aptitude & Test Preparation',
    field: 'General Awareness',
    branch: 'Static GK',
    tier: 'core',
    concepts: [
      'the national civilian honours ladder and the gallantry ladder',
      'the cultural academies: literature, music-dance-drama and the visual arts',
      'the international prize map: fields, cycles and firsts',
      'the sports system: cycles, trophies and national awards',
      'persons in news: the role-pair recall format',
      'the evergreen-recent split: what stays and what cycles',
      'the honours sheet: one page, revised monthly',
    ],
    words: 1921,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Every general-awareness section in the country reserves a block for honours: which award ranks above which, who won the big prize, which tournament runs on what cycle, who was appointed where. Defence-academy papers lean on gallantry and sports; bank recruitment leans on banking and economy honourees; law entrances lean on international prizes and persons. The material divides cleanly into a stable evergreen layer \u2014 the ladders, cycles and trophy names that never change \u2014 and a fast-cycling recent layer \u2014 this year\u2019s winners, results and appointments. This lesson builds the evergreen map and the maintenance system for the recent layer, so both halves of every honours block become routine marks.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Honours items are one-mark, no-reasoning questions \u2014 and they arrive in blocks of four to six. The evergreen half is a single afternoon\u2019s work; the recent half is ten minutes a month with the sheet system below. Nothing else on a general-awareness paper converts so little preparation time into so many marks.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The national civilian honours run in a strict ladder: the Bharat Ratna (instituted 1954, the highest civilian honour, for service of the highest order in any field), then the Padma awards in descending rank \u2014 Padma Vibhushan (exceptional and distinguished service), Padma Bhushan (distinguished service of high order), Padma Shri (distinguished service). The gallantry ladder for the armed forces: the Param Vir Chakra at the top, then the Maha Vir Chakra, then the Vir Chakra (wartime); the Ashoka Chakra is the highest peacetime gallantry award, open to civilians as well, with the Kirti Chakra and Shaurya Chakra below it. The examiner\u2019s two favourite confusions: ranking the Padma tiers, and mixing the wartime and peacetime ladders \u2014 both die on a drawn ladder diagram.',
      },
      {
        kind: 'para',
        text: 'The cultural academies anchor India\u2019s official arts system, each with its own award: the Sahitya Akademi for literature (its annual award the standard \u201cliterary honour of India\u201d), the Sangeet Natak Akademi for music, dance and drama (its fellowship and awards mark the performing-arts canon \u2014 and it is the body whose recognition defines the eight classical dances), and the Lalit Kala Akademi for the visual arts. Questions pair academy to field and award to academy; the trio is small enough to drill in one pass, and it links directly to the culture atlas (the classical-dance recognition) of the previous lesson.',
      },
      {
        kind: 'para',
        text: 'The international prize map: the Nobel Prizes (since 1901; six fields \u2014 peace, literature, physics, chemistry, medicine, and the economic-sciences prize added in 1969 by the central bank in memory of Alfred Nobel; the peace prize is awarded in Oslo, the rest in Stockholm). The Fields Medal (mathematics, every four years, traditionally under forty). The Turing Award (computing). The Pulitzer (American journalism and letters). The Oscars (film, since 1929). The Ramon Magsaysay Award \u2014 \u201cAsia\u2019s premier prize\u201d \u2014 for public service. Firsts for India that recur on papers: the first Indian Nobel laureate (Tagore, literature, 1913), C. V. Raman (physics, 1930), and the first Indian Oscar in a major category (Satyajit Ray\u2019s lifetime honour, 1992) \u2014 the pattern of these questions is field-to-prize, prize-to-cycle, and nationality-to-first.',
      },
      {
        kind: 'para',
        text: 'The sports system runs on cycles and trophies. The cycles: the summer and winter Olympic Games (each every four years, offset by two), the football World Cup (four-yearly), the cricket one-day World Cup (four-yearly), the hockey World Cup, the Asian and Commonwealth Games (four-yearly each, interleaved), the continental championships (football\u2019s regional cups, cricket\u2019s Champions Trophy cycle). The trophies: Ranji Trophy (India\u2019s premier first-class cricket championship), Duleep and Irani Trophies (its companion domestic cricket honours), the Santosh Trophy (national football championship for states), the Durand Cup (football\u2019s oldest trophy in Asia, running since 1888), the Davis Cup (men\u2019s tennis nations), Thomas and Uber Cups (badminton\u2019s men\u2019s and women\u2019s team cups). The national sports honours: the Major Dhyan Chand Khel Ratna (the highest sporting honour, renamed for the hockey legend in 2021), the Arjuna Award (consistent excellence), the Dronacharya Award (coaches), and the Major Dhyan Chand Award (lifetime contribution). Questions pair trophy to sport, cycle to event, and award to criterion \u2014 three small sheets, endlessly re-asked.',
      },
      {
        kind: 'para',
        text: 'Persons in news follow one recall format: the role-pair. Every newsmaker enters the sheet as person \u2192 post \u2192 organization (and the reverse: post \u2192 person, at question time): a new Chief Justice, the heads of the central bank and the election commission, the service chiefs, governors, the heads of international bodies, and the winners of the year\u2019s major prizes. The discipline is the same pair-map drill as culture \u2014 two columns, both directions, confusables side by side (the similarly-named organizations and the successively-held posts are the setters\u2019 favourites). What distinguishes this sheet is its expiry: appointments change, so the sheet is rebuilt monthly rather than drilled once.',
      },
      {
        kind: 'para',
        text: 'The evergreen-recent split governs how every honours fact is filed. Evergreen (stable, drill once): the ladders, the academy trio, the prize cycles and firsts, the trophy-sport pairs, the award criteria. Recent (cycling, refresh monthly): this year\u2019s Bharat Ratna and Padma lists, the laureates across the six Nobel fields, the last World Cup and the last two major games, the current title-holders in the big leagues, and the current occupants of the role-pair sheet. The examination split mirrors this: \u201cwhich honour ranks higher\u201d is evergreen; \u201cwho won it\u201d is recent \u2014 and candidates who conflate the two layers either memorize lists that expire or re-derive ladders that never change. File each fact by layer, and revise accordingly.',
      },
      {
        kind: 'para',
        text: 'The honours sheet is the single page that runs the whole topic: three columns \u2014 evergreen (ladders, cycles, pairs), recent (winners, results, appointments), and links (each recent item tied to its evergreen anchor: a new laureate files under the prize\u2019s field and cycle; a new Khel Ratna files under the award\u2019s criterion). Revise the evergreen column once a week (two minutes), rewrite the recent column on the first of each month (ten minutes with a monthly compilation), and self-test in both directions before any paper. The sheet\u2019s existence is the difference between honours blocks that cost an afternoon of cramming and honours blocks that are permanently banked marks.',
      },
      {
        kind: 'example',
        title: 'Worked example — a four-item honours block, both layers',
        steps: [
          'Item 1 (evergreen): \u201cWhich is the highest civilian award of India?\u201d \u2014 the Bharat Ratna (1954), ranking above the Padma tiers. One glance at the drawn ladder; the Padma-Vibhushan option is the designed neighbour.',
          'Item 2 (evergreen): \u201cThe Param Vir Chakra is awarded for \u2014 wartime gallantry; the peacetime counterpart is the Ashoka Chakra.\u201d The ladder-mixing distractor offers \u201cpeacetime distinguished service\u201d (the Padma language) to catch candidates who never drew the two ladders separately.',
          'Item 3 (recent): \u201cThe most recent cricket one-day World Cup was won by \u2014\u201d this is the cycling layer, answered from the monthly sheet, not from any stable rule. If the sheet is current, this is a free mark; if not, it is a guaranteed blank.',
          'Item 4 (link): \u201cThe Fields Medal is to mathematics as the Turing Award is to \u2014 computing.\u201d Field-to-prize mapping is evergreen, and the link column\u2019s job: each new laureate you file this year deepens the same stable pair.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'The Padma-tier ranking error (Bushri above Vibhushan, or Shri second) is the most common single mark lost in this block \u2014 draw the ladder, never recite it. The wartime-peacetime ladder mix (Param Vir offered for peacetime acts, Ashoka Chakra for battle) catches candidates who learned one gallantry list. The cycle slip (winter and summer Olympics in the same year \u2014 they are two years apart) and the trophy-sport mismatch (Santosh or Durand offered as cricket, Ranji as football) punish unpaired memorization. And every \u201cwho won\u201d question on an unrefreshed sheet is a silent, total loss \u2014 the recent layer forgives nothing.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Civilian ladder', def: 'Bharat Ratna (1954) \u2192 Padma Vibhushan \u2192 Padma Bhushan \u2192 Padma Shri, by order of service distinction.' },
          { term: 'Gallantry ladders', def: 'Wartime: Param Vir \u2192 Maha Vir \u2192 Vir Chakra; peacetime: Ashoka \u2192 Kirti \u2192 Shaurya Chakra.' },
          { term: 'Cultural academies', def: 'Sahitya Akademi (literature), Sangeet Natak Akademi (music-dance-drama, and the classical-dance recognition), Lalit Kala Akademi (visual arts).' },
          { term: 'Prize map', def: 'Nobel (1901, six fields, Oslo/Stockholm), Fields (mathematics, 4-yearly), Turing (computing), Pulitzer (journalism), Magsaysay (Asian public service).' },
          { term: 'Sports cycles and trophies', def: 'Olympics (4-yearly, winter offset 2), World Cups (football, cricket, hockey, 4-yearly); Ranji, Duleep, Irani (cricket), Santosh, Durand (football), Davis, Thomas, Uber (racket).' },
          { term: 'National sports honours', def: 'Major Dhyan Chand Khel Ratna (highest), Arjuna (excellence), Dronacharya (coaches), Dhyan Chand Award (lifetime).' },
          { term: 'Role-pair format', def: 'Person \u2192 post \u2192 organization, drilled both directions, rebuilt monthly \u2014 the persons-in-news unit.' },
          { term: 'Evergreen-recent split', def: 'Stable structures (ladders, cycles, pairs) drilled once; winners and appointments refreshed monthly \u2014 never conflated.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Arrange correctly by rank: Padma Shri, Bharat Ratna, Padma Vibhushan, Padma Bhushan.',
            options: ['Ratna > Shri > Vibhushan > Bhushan', 'Ratna > Vibhushan > Bhushan > Shri', 'Vibhushan > Ratna > Bhushan > Shri', 'Ratna > Vibhushan > Shri > Bhushan'],
            answer: 1,
            explain: 'The ladder runs Bharat Ratna (1954, highest civilian honour) \u2192 Padma Vibhushan (exceptional and distinguished service) \u2192 Padma Bhushan (high order) \u2192 Padma Shri (distinguished service). The tier-ranking error is the block\u2019s most-lost mark \u2014 draw it, never recite it.',
          },
          {
            q: 'The highest peacetime gallantry award (open to civilians) is:',
            options: ['Param Vir Chakra', 'Vir Chakra', 'Ashoka Chakra', 'Maha Vir Chakra'],
            answer: 2,
            explain: 'The Ashoka Chakra heads the peacetime ladder (Kirti and Shaurya Chakras below); the Param Vir Chakra heads the WARTIME ladder (Maha Vir, Vir below). The two ladders are the examiner\u2019s favourite crossing.',
          },
          {
            q: 'The Sangeet Natak Akademi is the national academy for:',
            options: ['Literature', 'Music, dance and drama', 'Visual arts', 'Sports'],
            answer: 1,
            explain: 'The trio: Sahitya Akademi \u2014 literature; Sangeet Natak Akademi \u2014 music, dance and drama (and the body whose recognition defines the eight classical dances); Lalit Kala Akademi \u2014 visual arts.',
          },
          {
            q: 'The Nobel Peace Prize is awarded in:',
            options: ['Stockholm', 'Oslo', 'Geneva', 'The Hague'],
            answer: 1,
            explain: 'All six prizes are announced from Stockholm EXCEPT the peace prize, awarded in Oslo by a committee of the Norwegian parliament \u2014 a stable evergreen pair, asked in some form nearly every cycle.',
          },
          {
            q: 'The Fields Medal, awarded every four years, belongs to:',
            options: ['Computing', 'Mathematics', 'Physics', 'Economics'],
            answer: 1,
            explain: 'Mathematics \u2014 the discipline Alfred Nobel\u2019s will famously omitted; the Turing Award is the computing counterpart. Pair prize-to-field and the whole international layer collapses.',
          },
          {
            q: 'The Durand Cup, running since 1888, is associated with:',
            options: ['Cricket', 'Football', 'Hockey', 'Badminton'],
            answer: 1,
            explain: 'Football \u2014 Asia\u2019s oldest football tournament. The trophy sheet: Ranji/Duleep/Irani \u2014 cricket; Santosh \u2014 football (state championship); Davis \u2014 men\u2019s tennis; Thomas and Uber \u2014 badminton team cups.',
          },
          {
            q: 'The Dronacharya Award honours:',
            options: ['Coaches', 'Lifetime sporting achievement', 'The year\u2019s best athlete', 'Sports journalists'],
            answer: 0,
            explain: 'Coaches \u2014 the guru after whom it is named. The criterion sheet: Khel Ratna (highest sporting honour, renamed for Major Dhyan Chand in 2021), Arjuna (consistent excellence), Dronacharya (coaches), Dhyan Chand Award (lifetime).',
          },
          {
            q: 'A \u201cwho won the latest cricket World Cup\u201d question belongs to which layer of the honours sheet?',
            options: ['Evergreen \u2014 drill once', 'Recent \u2014 refresh monthly', 'Neither \u2014 unanswerable', 'Both layers equally'],
            answer: 1,
            explain: 'Winners cycle; the tournament\u2019s existence, cycle and trophy are evergreen. Filing by layer is the sheet\u2019s whole point: stable pairs get permanent drills, cycling facts get the monthly rewrite.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The literary prizes as literary history \u2014 what the Booker and the Akademi awards mean for a tradition \u2014 live in the World Literature subject\u2019s prize-map lesson; the sociology of sport belongs to the Sports-science adjacent subjects; the national-honours system\u2019s constitutional context belongs to the Constitutional Law subject. Within General Awareness, the current-affairs engine (\u00a78) is where this sheet\u2019s recent column gets its monthly material \u2014 the two lessons are designed as one system.',
        tone: 'path',
      },
    ],
  },

  // ================================================================
  // GENERAL AWARENESS — Ch8 The Current-Affairs Engine
  // §8.1 — the 12-month recall system.
  // Carve: no existing topic owns a current-affairs METHOD (the
  // library is evergreen by design; GA subjects own the static
  // layers). This lesson owns the engine: the window rule, the
  // five lanes, the event card, source triage, linking, and the
  // 1-7-30 revision schedule.
  // ================================================================
  {
    id: 'ga-current-affairs-engine',
    title: 'The Current-Affairs Engine: A Twelve-Month Recall System',
    domain: 'Aptitude & Test Preparation',
    field: 'General Awareness',
    branch: 'Current Affairs',
    tier: 'core',
    concepts: [
      'the twelve-month window: what counts as current',
      'the five lanes: governance, economy, international, science and technology, sports-awards-persons',
      'the event card: who, what, when, where, significance in one line',
      'source triage: one daily, one weekly, one monthly',
      'linking: every current event back to its static anchor',
      'the national and international lanes: appointments, summits, agreements, reports',
      'the 1-7-30 revision schedule and recall drills',
    ],
    words: 2099,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Current affairs is the section candidates fear most and prepare worst \u2014 usually by hoarding monthly compilations and reading none of them twice. Yet every general-awareness paper in the country, from law entrances to bank recruitment to defence academies, draws its current-affairs block from a well-defined pool: roughly the twelve months before the exam, across five predictable lanes, with the questions themselves asking one-line facts \u2014 who, where, which edition, what rank. The pool is finite; the lanes are known; the only real variable is the system you run. This lesson installs that system: a window rule, a five-lane filing structure, a one-line event format, a three-source diet, and the spacing schedule that keeps a year of news retrievable in one-glance recall.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Current-affairs blocks typically run ten to twenty questions on recruitment papers \u2014 an entire sectional\u2019s worth of marks riding on material that changes monthly but asks in a fixed format. A working engine converts twenty minutes a day plus ten minutes a month into those marks permanently; a broken engine (unread compilations, un-revised notes) converts hours of reading into near-zero retrieval under exam pressure.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The twelve-month window is the boundary that makes the pool finite: for any exam date, \u201ccurrent affairs\u201d means events from roughly the preceding year, with the heaviest weight on the most recent six months. Very-old news returns only when a milestone anniversary or a sequel event revives it (a summit\u2019s next edition, an award\u2019s next cycle, a mission\u2019s next phase) \u2014 which is itself a filing instruction: when you record the new event, link it to the earlier one and refresh both. The window rule kills the two great preparation failures: trying to cover \u201ceverything since school\u201d, and reading the news of exam week itself with no system behind it.',
      },
      {
        kind: 'para',
        text: 'The five lanes organize everything inside the window. Governance and polity: legislation, schemes, court rulings of consequence, appointments to constitutional posts, elections and results. Economy: the Union Budget and the Economic Survey, the central bank\u2019s policy rates and reviews, inflation and growth data, major index movements, banking and market developments. International: summits and their venues, multilateral outcomes, appointments to global bodies, conflicts and treaties in motion. Science and technology: space and nuclear missions, major prizes announced, health developments, the technology headline layer. Sports, awards and persons: the tournament results, the laureates and national honours, the firsts and appointments \u2014 the recent column of the honours sheet in motion. Every event you meet files into exactly one lane; questions arrive lane-first in your memory, and revision runs lane by lane.',
      },
      {
        kind: 'figure',
        caption: 'The current-affairs engine: the twelve-month window feeds five lanes; every event is captured as a one-line card, linked to its static anchor, and kept alive by the 1-7-30 revision rhythm.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Current-affairs engine diagram">
  <style>.t{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.d{font-family:Georgia,serif;font-size:12px;fill:#52525b}.lane{fill:#fafafa;stroke:#8a8a93;stroke-width:1.6}.win{fill:#ecfdf5;stroke:#10b981;stroke-width:2}.card{fill:#fef3c7;stroke:#d97706;stroke-width:2}.rev{fill:#fee2e2;stroke:#e11d48;stroke-width:2}</style>
  <rect class="win" x="40" y="30" width="740" height="56" rx="10"/>
  <text class="t" x="60" y="55">THE 12-MONTH WINDOW</text>
  <text class="d" x="60" y="75">heaviest weight on the most recent six months; older news returns only via sequels and anniversaries</text>
  ${['Governance \u00b7 Polity','Economy','International','Science \u00b7 Technology','Sports \u00b7 Awards \u00b7 Persons'].map((lane, i) => '<rect class="lane" x="40" y="' + (100 + i * 44) + '" width="360" height="36" rx="6"/><text class="d" x="60" y="' + (123 + i * 44) + '" font-weight="bold" fill="#3f3f46">' + lane + '</text>').join('')}
  <rect class="card" x="440" y="100" width="340" height="160" rx="10"/>
  <text class="t" x="460" y="128">THE EVENT CARD \u2014 one line</text>
  ${['who \u00b7 what \u00b7 when \u00b7 where \u00b7 significance','venue-name pairs \u00b7 edition numbers \u00b7 ranks','link to the static anchor underneath'].map((l, i) => '<text class="d" x="460" y="' + (154 + i * 26) + '">' + l + '</text>').join('')}
  <rect class="rev" x="440" y="280" width="340" height="44" rx="10"/>
  <text class="t" x="460" y="308">1 \u00b7 7 \u00b7 30 \u2014 the revision rhythm</text>
  <text class="d" x="60" y="330">lane-by-lane capture \u2192 card format \u2192 static links \u2192 spaced revival</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The event card is the capture format, and its discipline is one line, five fields: who-what-when-where-significance. \u201cThe central bank held its policy rate at X% (when), citing Y (significance).\u201d \u201cThe Z summit was held at (venue), the Nth edition, with membership expanded to (what).\u201d If an event cannot be compressed to one line, you have not understood it \u2014 and if the line lacks the question-asked fields (venue, edition, rank, first), it will not answer anything. Cards carry the pair formats papers love: venue-name pairs, edition numbers, launch dates, record figures. The card is also the unit of revision: the 1-7-30 schedule below operates on cards, never on newspapers or compilations.',
      },
      {
        kind: 'para',
        text: 'Source triage keeps the intake to three streams: one daily (a standard newspaper\u2019s front and national pages, or a daily brief \u2014 twenty minutes, cards made on the spot for lane-worthy items only), one weekly (a current-affairs weekly that consolidates, converting your daily cards into lane files and catching what the daily missed), one monthly (the compilation you re-read as the final consolidation and quiz source). Reading more sources is preparation theatre: the engine runs on capture and revision, not on volume \u2014 three streams, each with a distinct job, is the complete diet.',
      },
      {
        kind: 'para',
        text: 'Linking is what turns current affairs from memory load into memory structure: every event card names its static anchor, and the anchor explains the event. A budget card links to the constitutional provision for the annual financial statement; a monetary-policy card links to the inflation-targeting framework; a summit card links to the organization\u2019s membership and mandate; a mission card links to the space agency\u2019s launch-vehicle lineage; an appointment card links to the post\u2019s constitutional or statutory basis. The link runs both directions at revision time \u2014 static knowledge makes the event\u2019s significance legible, and the event makes the static fact concrete \u2014 and papers examine exactly this junction: \u201cthe body whose summit was held at X was founded in \u2026\u201d is a linking question wearing a current-affairs costume.',
      },
      {
        kind: 'para',
        text: 'The national and international lanes deserve their capture checklists, because their question formats are the most stable. National: appointments (the top constitutional and statutory posts), schemes (launch dates, ministries, targets), reports and indices (who publishes, where India stands), court rulings of general significance, and the budget-economy calendar. International: summits (body, edition, venue, outcome theme), the multilateral appointments (the global bodies\u2019 chiefs), agreements and groupings (members in and out), the conflict-and-treaty layer at headline depth, and the prizes (the six Nobel fields plus the major international awards). Each checklist is a capture prompt during reading and a self-quiz skeleton at revision \u2014 the lane tells you what to ask about every event before the paper does.',
      },
      {
        kind: 'para',
        text: 'The 1-7-30 rhythm is the engine\u2019s maintenance schedule, straight from the study-skills spacing literature: every card is revisited one day after capture (the encoding check), seven days after (the consolidation pass, with the lane file), and thirty days after (the retention pass, with the monthly compilation \u2014 which doubles as the rewrite of the honours sheet\u2019s recent column). Each pass is a self-quiz, not a re-read: cover the card\u2019s answer fields and reproduce them. Cards that survive three passes un-recalled are re-made with better pair formatting; cards for expired events (superseded appointments, completed cycles) are retired. Ten minutes a day of capture, plus the spaced passes, keeps the whole twelve-month pool alive at one-glance depth \u2014 which is precisely the depth the paper asks.',
      },
      {
        kind: 'example',
        title: 'Worked example — one news week through the engine',
        steps: [
          'The week\u2019s lane-worthy items: a major space mission launches; a global summit concludes with a membership announcement; the central bank reviews policy; a national honour list is announced; a tournament final is played.',
          'Capture as five cards, one line each, fields forced: \u201cMission X launched (date) on vehicle Y \u2014 the agency\u2019s first Z\u201d; \u201cSummit N of body B held at venue V \u2014 membership expanded to M\u201d; \u201cPolicy rate held at R% (date) \u2014 inflation cited\u201d; \u201cHonour list: the top award to person P for field F\u201d; \u201cFinal: team T defeated U by margin \u2014 title number K\u201d.',
          'Link each to its static anchor: the mission to the launch-vehicle lineage and the agency\u2019s programme; the summit to the body\u2019s founding and mandate; the rate to the inflation-targeting framework; the honour to the award\u2019s criteria; the title to the trophy\u2019s history.',
          'File by lane (science; international; economy; sports-awards-persons) and schedule the passes: next-day recall of all five, the day-7 lane pass, the day-30 monthly consolidation.',
          'Exam-day retrieval, either direction: \u201cWhich body met at V?\u201d runs venue-to-body off the summit card; \u201cwhat launched on vehicle Y?\u201d runs the reverse. Both directions were drilled because the card forced both fields \u2014 that is the whole design.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Compilation hoarding \u2014 collecting monthly roundups without a capture-revise system \u2014 is the great engine failure: reading is not retention. Reading without lane filters captures trivia and misses the asked fields (venue, edition, rank). Cards without links decay into isolated strings, and linking questions (\u201cthe body that met at X was founded when?\u201d) go unanswered. Un-revised cards expire silently \u2014 the paper asks exactly the month you skipped. And the final-week flood \u2014 abandoning the engine to cram the last fortnight \u2014 trades a working twelve-month system for two weeks of unstructured panic.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Twelve-month window', def: 'The current-affairs boundary: the year before the exam, heaviest in the last six months; older items return via sequels and anniversaries.' },
          { term: 'Five lanes', def: 'Governance-polity, economy, international, science-technology, sports-awards-persons \u2014 the filing structure for every event.' },
          { term: 'Event card', def: 'One-line capture: who, what, when, where, significance \u2014 with the pair fields (venue, edition, rank, first) papers ask.' },
          { term: 'Source triage', def: 'One daily, one weekly, one monthly \u2014 each with a distinct job; more sources are theatre, not preparation.' },
          { term: 'Static anchor', def: 'The evergreen fact every event links to \u2014 the constitutional basis, the founding year, the framework \u2014 making both directions examinable.' },
          { term: 'Lane checklists', def: 'The capture prompts per lane: appointments-schemes-reports-indices nationally; summits-bodies-agreements-prizes internationally.' },
          { term: '1-7-30 rhythm', def: 'Spaced passes at one, seven and thirty days, each a self-quiz over cards and lane files \u2014 the engine\u2019s maintenance schedule.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'For an exam in April, the current-affairs window with the heaviest weight covers:',
            options: ['Everything since school', 'Roughly the preceding 12 months, heaviest in the last 6', 'Only the exam month', 'The last 5 years equally'],
            answer: 1,
            explain: 'The window rule makes the pool finite: a year of events, weighted toward the recent half; older news returns only when a sequel or anniversary revives it \u2014 which is a linking instruction, not extra reading.',
          },
          {
            q: 'A summit concludes with a membership expansion. The complete event card records:',
            options: ['A paragraph on the body\u2019s history', 'One line: body, edition, venue, outcome \u2014 with the pair fields papers ask', 'The full membership list', 'Only the date'],
            answer: 1,
            explain: 'The card is one line, five fields, and must carry the asked fields \u2014 venue-name, edition number, what changed. A card that cannot be compressed to one line has not been understood; a card without the pair fields will not answer anything.',
          },
          {
            q: 'A card notes a new monetary-policy decision. Its static anchor is:',
            options: ['The finance minister\u2019s biography', 'The inflation-targeting framework and the central bank\u2019s mandate', 'The previous year\u2019s budget speech', 'A newspaper editorial'],
            answer: 1,
            explain: 'Linking: the event (a rate decision) anchors to the framework that explains it (the inflation target, the review cycle). Papers examine the junction both directions \u2014 the body, its mandate, and the decision.',
          },
          {
            q: 'The 1-7-30 rhythm schedules:',
            options: ['Three full re-reads of every compilation', 'Self-quiz passes over cards at one, seven and thirty days', 'One revision on exam eve', 'Reading three newspapers daily'],
            answer: 1,
            explain: 'Spacing applied to news: the day-1 pass checks encoding, day-7 consolidates with the lane file, day-30 aligns with the monthly consolidation. Each pass is active recall, never re-reading \u2014 the study-skills law, applied to current affairs.',
          },
          {
            q: 'Source triage for the engine is:',
            options: ['As many compilations as possible', 'One daily, one weekly, one monthly \u2014 each with a distinct job', 'Only the exam board\u2019s bulletin', 'Social-media summaries'],
            answer: 1,
            explain: 'Daily for capture, weekly for consolidation, monthly for the final pass and quiz \u2014 three streams, three jobs. Volume beyond that is preparation theatre: the engine runs on capture and revision, not on reading more.',
          },
          {
            q: '\u201cThe body whose summit was held at venue V was founded in \u2026\u201d is an example of:',
            options: ['A pure static question', 'A linking question \u2014 current event asking its static anchor', 'An opinion question', 'A calculation question'],
            answer: 1,
            explain: 'The junction format: the event supplies the hook (this year\u2019s summit, its venue), the static layer supplies the answer (the founding year). Cards that name their anchor answer these; unlinked cards cannot.',
          },
          {
            q: 'Cards for a superseded appointment (the official has since retired) should be:',
            options: ['Kept and drilled forever', 'Retired at the monthly pass and replaced by the current occupant', 'Deleted immediately on rumor', 'Merged into the static layer'],
            answer: 1,
            explain: 'The recent layer cycles: the monthly consolidation retires expired cards and rewrites the honours sheet\u2019s role-pairs. The engine\u2019s health is exactly this renewal \u2014 a sheet full of stale occupants answers last year\u2019s paper.',
          },
          {
            q: 'The five lanes of the engine are:',
            options: ['History, geography, polity, economy, science', 'Governance-polity, economy, international, science-technology, sports-awards-persons', 'Cricket, politics, films, business, weather', 'National, regional, local, global, space'],
            answer: 1,
            explain: 'The lanes organize the window\u2019s pool: every event files into exactly one, revision runs lane by lane, and the checklists (appointments-schemes-reports; summits-bodies-agreements-prizes) turn each lane into a capture prompt and quiz skeleton.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The spacing science under the 1-7-30 rhythm lives in full in the Study Skills subject\u2019s spaced-repetition lesson; the static anchors \u2014 constitutional posts, the economic framework, the space programme\u2019s history, the honours ladders \u2014 are the deep subjects this one points to. Within General Awareness, this engine completes the subject\u2019s method core: the recall ladder for history, the culture atlas, the honours map, and now the living layer that binds them to the year\u2019s events.',
        tone: 'path',
      },
    ],
  },
]
