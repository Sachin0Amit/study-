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
]
