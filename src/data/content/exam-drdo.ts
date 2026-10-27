import type { SectionContent } from '../library'

// ============================================================================
// DRDO Scientist 'B' — lesson content (Tier I screening + Tier II disciplines).
// Ten master sections: the four aptitude blocks of the 100-mark Tier-I CBT
// (0.25 negative marking) and six Tier-II discipline lessons — CSE algorithms
// + OS + cybersecurity, ECE microwave/radar links, EE synchronous machines,
// ME thermodynamics — matching section metadata in
// src/data/library-parts/exams/drdo-*.ts (Tier-II = 60 discipline marks plus
// the 15-mark research-aptitude section in the legacy RAC pattern).
// ============================================================================

export const drdoContent: SectionContent[] = [
  // --------------------------------------------- Tier I · 1.1 Quantitative Aptitude
  {
    sectionId: 'apt-q1-s1',
    readingTime: 9,
    prerequisites: [
      'Fractions, decimals and place value',
      'Prime factorisation of integers',
    ],
    intro:
      'the defence research establishment\u2019s Stage-I screening test packs roughly 20 quantitative-aptitude questions into a 100-mark paper with 0.25 negative marking per slip, so speed on number systems is survival. HCF, LCM, surds and indices look elementary but hide most of the time traps in Section A. This section drills the shortcuts that turn two-minute calculations into twenty-second ones.',
    objectives: [
      'Apply divisibility and remainder rules to shortcut Stage-I computation',
      'Compute HCF and LCM from prime factorisations and decode which one a word problem wants',
      'Simplify, rationalise and compare surds without decimal approximation',
      'Resolve indices quickly, including unit-digit problems via digit cyclicity',
    ],
    concepts: [
      {
        term: 'Divisibility and remainder arithmetic',
        kind: 'law',
        statement:
          'A number $n$ is divisible by 3 or 9 when its **digit sum** is; by 4 or 8 when its last two or three digits are; and by 11 when the alternating digit sum is. Under a fixed modulus, remainders add and multiply: $(a + b) \\bmod n$ and $(a \\cdot b) \\bmod n$ can be computed from $a \\bmod n$ and $b \\bmod n$ alone.',
        detail:
          'This residue arithmetic is the engine behind "find the remainder of $17^{200}$ divided by 9" questions — reduce the base first ($17 \\equiv 8 \\equiv -1$), then the power. Trap: the rule for 11 needs the alternating sum of digits, not the plain digit sum.',
      },
      {
        term: 'HCF and LCM as prime powers',
        kind: 'definition',
        statement:
          'The **HCF** takes the lowest power of each common prime; the **LCM** takes the highest power of every prime present. For two numbers $a$ and $b$: $\\text{HCF} \\times \\text{LCM} = a \\times b$.',
        detail:
          'For fractions: HCF $= \\frac{\\text{HCF of numerators}}{\\text{LCM of denominators}}$ and LCM $= \\frac{\\text{LCM of numerators}}{\\text{HCF of denominators}}$. The product identity holds only for two numbers — with three numbers it fails, which is exactly where the assessment sets its trap.',
      },
      {
        term: 'Decoding HCF and LCM word problems',
        kind: 'method',
        statement:
          '"**Greatest number** that divides $a$ and $b$ leaving remainder $r$" is HCF$(a - r,\\ b - r)$; "**smallest number** divisible by …" or "ring/beep together again" is the LCM.',
        detail:
          'Variant: "greatest number dividing $a$ and $b$ leaving the same remainder" — the answer is HCF$(b - a)$ constrained below $r$ when remainders $r_1 \\ne r_2$ but their difference is constant, use HCF$(a - r_1,\\ b - r_2)$. When remainders differ, never subtract a fixed number from both without checking the difference logic.',
      },
      {
        term: 'Surds and rationalisation',
        kind: 'definition',
        statement:
          'A **surd** is an irrational root such as $\\sqrt{2}$. Multiply top and bottom by the conjugate to rationalise: $\\frac{1}{\\sqrt{a} + \\sqrt{b}} = \\frac{\\sqrt{a} - \\sqrt{b}}{a - b}$.',
        detail:
          'To compare surd options, raise both sides to a common power (square for square roots, cube for cube roots) instead of estimating decimals. Trap: $\\sqrt{a} + \\sqrt{b} \\ne \\sqrt{a + b}$ and $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$ is valid only for non-negative reals.',
      },
      {
        term: 'Indices and unit-digit cycles',
        kind: 'law',
        statement:
          'Index laws give $a^m a^n = a^{m+n}$, $(a^m)^n = a^{mn}$ and $a^0 = 1$. Unit digits **cycle**: 2, 3, 7 and 8 repeat every 4 powers; 4 and 9 every 2; 0, 1, 5 and 6 never change.',
        detail:
          'For "unit digit of $7^{95}$", reduce the exponent modulo the period: $95 \\bmod 4 = 3$, third member of the cycle $7, 9, 3, 1$ gives 3. Shortcut when the exponent is a multiple of the period: use the last member of the cycle, not the first.',
      },
    ],
    examples: [
      {
        title: 'Greatest number leaving a fixed remainder',
        problem:
          'Find the greatest number that divides 245 and 1029 leaving remainder 5 in each case.',
        steps: [
          { label: 'Step 1', text: 'A divisor that leaves remainder 5 must divide the differences exactly: $245 - 5 = 240$ and $1029 - 5 = 1024$. So the answer is the **HCF of 240 and 1024**.' },
          { label: 'Step 2', text: 'Factorise: $240 = 2^4 \\cdot 3 \\cdot 5$ and $1024 = 2^{10}$. The HCF keeps the lowest power of each common prime: $2^4$.' },
          { label: 'Step 3', text: 'HCF $= 16$. Verify both divisions: $245 = 16 \\times 15 + 5$ and $1029 = 16 \\times 64 + 5$ — both leave exactly 5, confirming the answer in under thirty seconds.' },
        ],
        result: 'Greatest such number is 16.',
      },
      {
        title: 'Bells that ring together (LCM signature)',
        problem:
          'Telemetry beacons on a defence-research test range beep every 6, 8, 10 and 12 minutes. They beep together at 07:00 hours. When do they next beep together?',
        steps: [
          { label: 'Step 1', text: '"Together again" is the signature of an **LCM** problem — the common cycle of the four periods.' },
          { label: 'Step 2', text: 'Factorise: $6 = 2 \\cdot 3$, $8 = 2^3$, $10 = 2 \\cdot 5$, $12 = 2^2 \\cdot 3$. The LCM takes the highest powers: $2^3 \\cdot 3 \\cdot 5 = 120$ minutes.' },
          { label: 'Step 3', text: 'They coincide every 120 minutes $= 2$ hours, so from 07:00 the next joint beep falls at 09:00 hours.' },
        ],
        result: '09:00 hours — after LCM = 120 minutes.',
      },
    ],
    keyTakeaways: [
      'HCF \u00d7 LCM = product of the two numbers; HCF takes the lowest prime powers, LCM the highest.',
      '"Greatest number that divides \u2026 leaving remainder r" is HCF(a \u2212 r, b \u2212 r); "smallest number divisible by \u2026" is the LCM.',
      'Unit digits cycle: 2, 3, 7, 8 repeat every 4 powers; 4 and 9 every 2; 0, 1, 5, 6 are constant \u2014 reduce the exponent modulo the period.',
      'Rationalise surds with the conjugate and compare irrational options by squaring rather than decimal guessing.',
    ],
    quiz: [
      {
        q: 'The unit digit of $3^{47}$ is',
        options: ['$1$', '$3$', '$7$', '$9$'],
        answer: 2,
        explanation:
          'Step 1: The cycle of 3 is $3, 9, 7, 1$ with period 4. Step 2: Reduce the exponent: $47 = 4 \\times 11 + 3$, so take the 3rd member. Step 3: The unit digit is 7. Step 4: Choosing 9 forgets to discard the completed cycles; choosing 1 uses the 4th member.',
      },
      {
        q: 'The HCF of two numbers is 11 and their LCM is 7700. If one number is 275, the other is',
        options: ['308', '264', '272', '322'],
        answer: 0,
        explanation:
          'Step 1: Use the product identity HCF \u00d7 LCM = product of the two numbers. Step 2: Product $= 11 \\times 7700 = 84700$. Step 3: Other number $= 84700 \\div 275 = 308$. Step 4: Check: $275 = 25 \\times 11$ and $308 = 28 \\times 11$, so the HCF is indeed 11.',
      },
      {
        q: 'The smallest number which when divided by 12, 16 and 18 leaves remainder 5 in each case is',
        options: ['138', '143', '153', '149'],
        answer: 3,
        explanation:
          'Step 1: Such a number is 5 more than a common multiple of 12, 16, 18, so first find the LCM. Step 2: $12 = 2^2 \\cdot 3$, $16 = 2^4$, $18 = 2 \\cdot 3^2$, giving LCM $= 2^4 \\cdot 3^2 = 144$. Step 3: Answer $= 144 + 5 = 149$. Step 4: The other options are not 5 above any common multiple \u2014 149 alone satisfies all three divisions.',
      },
      {
        q: 'The value of $\\frac{\\sqrt{5} + \\sqrt{3}}{\\sqrt{5} - \\sqrt{3}}$ is',
        options: ['$4 - \\sqrt{15}$', '$4 + \\sqrt{15}$', '$2 + \\sqrt{15}$', '$1 + \\sqrt{15}$'],
        answer: 1,
        explanation:
          'Step 1: Multiply numerator and denominator by the conjugate $\\sqrt{5} + \\sqrt{3}$. Step 2: The denominator becomes $5 - 3 = 2$. Step 3: The numerator becomes $(\\sqrt{5} + \\sqrt{3})^2 = 8 + 2\\sqrt{15}$, so the value is $\\frac{8 + 2\\sqrt{15}}{2} = 4 + \\sqrt{15}$. Step 4: Picking $4 - \\sqrt{15}$ means you squared a difference instead of a sum.',
      },
    ],
  },
  // --------------------------------------------- Tier I · 2.1 Reasoning
  {
    sectionId: 'apt-r1-s1',
    readingTime: 8,
    prerequisites: [
      'Basic arithmetic operations',
      'English alphabet positions (A = 1 \u2026 Z = 26)',
    ],
    intro:
      'Reasoning supplies the second block of about 20 questions in the defence research establishment\u2019s 100-mark Stage-I screening, where a wrong answer costs 0.25 marks and a slow one costs the paper. Analogies, classification and series reward pattern vocabulary more than raw calculation. Scientists at defence-research laboratories read signatures \u2014 of signals, materials and code \u2014 and this section trains exactly that muscle.',
    objectives: [
      'Name the relation in an A : B :: C : D analogy before scanning options',
      'Isolate the single discriminating attribute in odd-one-out classification',
      'Crack number and letter series with difference, ratio and positional engines',
      'Decide quickly when a guess is worth the 0.25-mark penalty',
    ],
    concepts: [
      {
        term: 'Analogy as a named relation',
        kind: 'definition',
        statement:
          'An **analogy** A : B :: C : ? is solved by naming the relation between A and B in one phrase \u2014 function (knife : cut), degree (warm : hot), part\u2013whole (chapter : book), worker\u2013tool (surgeon : scalpel) \u2014 then applying the same phrase to C.',
        detail:
          'Trap: options often fit a second-best relation. If A : B is "country : capital", reject options pairing a country with its currency. Order matters too: feather : bird (part : whole) is not bird : feather.',
      },
      {
        term: 'Classification by single attribute',
        kind: 'method',
        statement:
          'In **odd-one-out** problems, three options share one structural attribute \u2014 divisibility, being a perfect square, taxonomic family \u2014 and exactly one breaks it. Find the shared attribute first, not the odd option.',
        detail:
          'Test each option against candidate attributes in turn (all prime? all cubes? all vehicles with wheels?). Trap: superficial similarity \u2014 four words may all be metals while three are ferrous; the discriminator is chemistry, not metalness.',
      },
      {
        term: 'Number series engines',
        kind: 'method',
        statement:
          'Work the ladder: first **differences**, then second differences, then ratio between consecutive terms, then alternating rules, then $n^2 \\pm k$ or $n^3 \\pm k$ patterns.',
        detail:
          'If terms roughly double, jump straight to the multiplicative engine ($a_{n+1} = 2a_n \\pm k$). Mixed engines are common: $\\times 3, \\div 2$ alternating. Always verify the discovered rule on every given term \u2014 the last term you check is the one the assessor bent.',
      },
      {
        term: 'Letter series and positional values',
        kind: 'notation',
        statement:
          'Write letters as positions A = 1 to Z = 26. The anchor word **EJOTY** fixes E = 5, J = 10, O = 15, T = 20, Y = 25; a letter\u2019s mirror position is $27 - n$.',
        detail:
          'For skip patterns, convert the letters to positions and inspect the gaps \u2014 A, C, F, J, O has gaps 2, 3, 4, 5. Trap: alphabetical direction can reverse mid-series; recompute from positions rather than reciting the alphabet.',
      },
      {
        term: 'Expected value under negative marking',
        kind: 'insight',
        statement:
          'With +1 per correct answer and \u22120.25 per error, a **blind guess** on 4 options has expectation $\\tfrac{1}{4}(1) + \\tfrac{3}{4}(-0.25) = +0.0625$ \u2014 barely positive \u2014 while **eliminating two options** lifts it to $+0.375$.',
        detail:
          'So elimination, not bravado, is the strategy: spend the first pass only on questions where one option dies instantly, and bank the remaining time for the series you can actually crack.',
      },
    ],
    examples: [
      {
        title: 'Series with a doubling-difference engine',
        problem: 'Find the next term: 5, 11, 23, 47, 95, ?',
        steps: [
          { label: 'Step 1', text: '```text\n5, 11, 23, 47, 95, ?\ndiffs:  6, 12, 24, 48\n```\nFirst differences are $6, 12, 24, 48$ \u2014 doubling each time, so the next difference is $96$.' },
          { label: 'Step 2', text: 'Next term $= 95 + 96 = 191$. Cross-check with the multiplicative reading: each term is twice the previous plus one, and $2 \\times 95 + 1 = 191$.' },
          { label: 'Step 3', text: 'Two independent engines agreeing certifies the pattern \u2014 do this check before committing when 0.25 negative marking is live.' },
        ],
        result: '191 (differences double; equivalently each term = 2 \u00d7 previous + 1).',
      },
      {
        title: 'Classification with a defence flavour',
        problem:
          'Find the odd one out: Mirage 2000, Sukhoi Su-30MKI, Tejas, BrahMos.',
        steps: [
          { label: 'Step 1', text: 'Name the majority class: Mirage 2000, Su-30MKI and Tejas are all **fighter aircraft** flown by the Indian Air Force.' },
          { label: 'Step 2', text: 'Test BrahMos against that attribute: it is a supersonic cruise missile built by the India\u2013Russia joint venture, not an aircraft.' },
          { label: 'Step 3', text: 'The discriminating attribute is airframe versus missile; everything else (defence platform, the defence research establishment association) is shared and therefore useless as a discriminator.' },
        ],
        result: 'BrahMos \u2014 a cruise missile among fighter aircraft.',
      },
    ],
    keyTakeaways: [
      'Name the analogy relation in one phrase before looking at the options; reject options that fit a different relation.',
      'Odd-one-out turns on a single structural attribute shared by three options \u2014 find the attribute, not the stranger.',
      'Series ladder: differences \u2192 second differences \u2192 ratios \u2192 alternating and power patterns; verify on every term.',
      'EJOTY and mirror positions (27 \u2212 n) make letter series arithmetic instead of recitation.',
    ],
    quiz: [
      {
        q: 'Complete the series: 8, 24, 12, 36, 18, ?',
        options: ['27', '36', '54', '72'],
        answer: 2,
        explanation:
          'Step 1: The jump 8 \u2192 24 is \u00d73 and 24 \u2192 12 is \u00f72. Step 2: The alternating rule is \u00d73, \u00f72, \u00d73, \u00f72. Step 3: Apply \u00d73 to 18 to get 54. Step 4: Choosing 27 applies \u00f72 instead \u2014 the wrong half of the cycle.',
      },
      {
        q: 'Find the odd one out: 27, 64, 125, 218',
        options: ['218', '27', '64', '125'],
        answer: 0,
        explanation:
          'Step 1: Test the perfect-power attribute. Step 2: $27 = 3^3$, $64 = 4^3$, $125 = 5^3$. Step 3: $218 \\ne 6^3 = 216$ \u2014 it misses the cube by 2, a deliberate near-miss trap. Step 4: Hence 218 is the odd one.',
      },
      {
        q: 'Thermometer : Temperature :: Barometer : ?',
        options: ['Humidity', 'Pressure', 'Rainfall', 'Wind speed'],
        answer: 1,
        explanation:
          'Step 1: Name the relation: instrument : quantity it measures. Step 2: A barometer measures atmospheric pressure. Step 3: Humidity is measured by a hygrometer and wind by an anemometer. Step 4: Rainfall correlates with pressure but is not what the instrument reads.',
      },
      {
        q: 'Complete the letter series: A, C, F, J, O, ?',
        options: ['R', 'S', 'T', 'U'],
        answer: 3,
        explanation:
          'Step 1: Convert to positions: 1, 3, 6, 10, 15. Step 2: Gaps are 2, 3, 4, 5 \u2014 increasing by one each step. Step 3: Next gap is 6, giving position 21. Step 4: Position 21 is U (T = 20, U = 21).',
      },
    ],
  },
  // --------------------------------------------- Tier I · 3.1 General Awareness
  {
    sectionId: 'apt-g1-s1',
    readingTime: 9,
    prerequisites: [
      'Indian polity and geography basics',
      'Defence organisation overview (the defence research establishment, armed forces, HAL, BARC)',
    ],
    intro:
      'About a fifth of the defence research establishment\u2019s Stage-I screening marks sit in General Awareness \u2014 roughly 20 questions scored at +1 with 0.25 negative marking and a strong defence-and-S&T tilt. Current affairs decay faster than any other section, so method matters more than memory dumps. This section shows what to track, for how long before the assessment, and how to answer with elimination when the fact escapes you.',
    objectives: [
      'Scope preparation to the rolling twelve-month window the paper actually samples',
      'Classify every question into one of five event families and recall its fixed question signature',
      'Track defence and space developments (the defence research establishment tests, inductions, exercises, ISRO missions) at assessment depth',
      'Anchor current facts to static GK so each new fact stabilises an old one',
    ],
    concepts: [
      {
        term: 'The twelve-month window',
        kind: 'method',
        statement:
          'Cover current affairs from **January of the year before the assessment** to the assessment month \u2014 roughly a rolling twelve-month band \u2014 using one monthly compilation plus a one-page revision sheet per month.',
        detail:
          'Older events resurface only when they set a "first" (first indigenous carrier, first National Space Day) or an anniversary. Trap: coaching compilations front-load trivia; the assessment samples names, dates, venues and firsts, not commentary.',
      },
      {
        term: 'The five event families',
        kind: 'definition',
        statement:
          'Nearly every current-affairs question belongs to one of **five families** \u2014 summits and conferences, appointments, schemes and policies, agreements and MoUs, reports and indices \u2014 and each family asks a fixed signature: host venue, officeholder, parent ministry, signatories, or issuer and India\u2019s rank.',
        detail:
          'Build a five-column tracker and file one line per event. When a question appears, identify the family first \u2014 it tells you which attribute is being asked before you read the options.',
      },
      {
        term: 'Defence and space current affairs',
        kind: 'insight',
        statement:
          'the defence research establishment papers weight **defence and space developments** heavily: missile and system flight-tests, inductions into service, joint exercises and ISRO missions. Record system, agency, date/window and the first-of-its-kind tag.',
        detail:
          'Typical items: Agni-Prime and BrahMos extensions flight-tested from the Odisha coast, INS Vikrant commissioned as the first indigenously built aircraft carrier, Tejas Mk1A orders, Malabar with all four Quad navies, Chandrayaan-3\u2019s south-pole landing. Trap: confuse the developer (the defence research establishment versus HAL versus private DPSU) and the question flips.',
      },
      {
        term: 'Current-static anchoring',
        kind: 'method',
        statement:
          'Hook every current fact to a **static fact**: summit city \u2192 state and river, scheme \u2192 ministry and launch year, satellite \u2192 orbit type and launch centre.',
        detail:
          'One current line then answers two papers\u2019 worth of questions \u2014 the current one and a static one. Example: Chandrayaan-3 anchors 23 August, the lunar south pole, Shiv Shakti Point, LVM3 launcher and Sriharikota in a single row of notes.',
      },
      {
        term: 'Elimination in awareness questions',
        kind: 'insight',
        statement:
          'Dates and pairings often **self-eliminate** through chronology \u2014 a summit host cannot repeat in consecutive years, a scheme\u2019s ministry rarely changes, and option pairs that swap two entities kill each other.',
        detail:
          'With +1 / \u22120.25 marking, eliminating two options makes guessing strongly profitable (+0.375 expectation); eliminating none leaves it marginal. Spend eight seconds on elimination before either guessing or skipping.',
      },
    ],
    examples: [
      {
        title: 'Summit question via the presidency cycle',
        problem:
          'The 18th G20 Leaders\u2019 Summit adopting the New Delhi Declaration was hosted in which city, and when?',
        steps: [
          { label: 'Step 1', text: 'Classify the family: international summit \u2192 recall the presidency cycle. India held the G20 presidency from December 2022 to November 2023, so the leaders\u2019 summit fell in that window.' },
          { label: 'Step 2', text: 'The 18th Leaders\u2019 Summit was hosted on 9\u201310 September 2023 at **Bharat Mandapam**, Pragati Maidan, New Delhi.' },
          { label: 'Step 3', text: 'Anchor the extras while you are there: the theme was "Vasudhaiva Kutumbakam \u2014 One Earth, One Family, One Future" and the African Union was admitted as a permanent G20 member at this summit \u2014 both reusable facts.' },
        ],
        result: 'New Delhi \u2014 9\u201310 September 2023, at Bharat Mandapam.',
      },
      {
        title: 'Defence item via tag elimination',
        problem:
          'Which of the following correctly describes Agni-Prime? (A) a submarine-launched cruise missile (B) a canisterised surface-to-surface ballistic missile (C) an anti-tank guided missile (D) an air-to-air missile.',
        steps: [
          { label: 'Step 1', text: 'Tag the family: the Agni series are strategic **surface-to-surface ballistic missiles** developed by the defence research establishment \u2014 half the options die on family name alone.' },
          { label: 'Step 2', text: 'Eliminate (A): submarine-launched systems belong to the K-family; eliminate (D): Astra is the defence research establishment\u2019s air-to-air missile; eliminate (C): Nag is the anti-tank guided missile.' },
          { label: 'Step 3', text: 'Option (B) survives and carries the distinguishing detail: Agni-Prime is canisterised, two-stage and solid-propellant, first flight-tested from the Odisha coast in June 2021.' },
        ],
        result: 'Option (B) \u2014 a canisterised surface-to-surface ballistic missile.',
      },
    ],
    keyTakeaways: [
      'Prepare a rolling twelve-month window ending at the assessment month; older items matter only as firsts and anniversaries.',
      'Five event families \u2014 summits, appointments, schemes, agreements, reports/indices \u2014 each with a fixed question signature (venue, person, ministry, signatories, issuer/rank).',
      'Defence and space items carry outsized weight: record system, agency, date and the first-of-its-kind tag.',
      'Anchor current facts to static GK so one row of notes answers both current and static questions.',
    ],
    quiz: [
      {
        q: 'The 28th UN Climate Change Conference (COP28, 2023) was hosted by',
        options: ['the United Arab Emirates', 'Egypt', 'Azerbaijan', 'France'],
        answer: 0,
        explanation:
          'Step 1: Family: summit \u2192 attribute: host country. Step 2: COP28 ran from 30 November to 13 December 2023 at Expo City, Dubai, UAE. Step 3: Egypt hosted COP27 (2022, Sharm El-Sheikh) and Azerbaijan hosted COP29 (2024, Baku) \u2014 classic adjacent-year distractors. Step 4: Hence the UAE is correct.',
      },
      {
        q: 'Chandrayaan-3\u2019s Vikram lander achieved India\u2019s first lunar soft landing on',
        options: ['14 July 2023', '23 August 2023', '2 September 2023', '23 July 2023'],
        answer: 1,
        explanation:
          'Step 1: Separate launch from landing \u2014 14 July 2023 is the LVM3 launch from Sriharikota. Step 2: Vikram soft-landed near the lunar south pole on 23 August 2023. Step 3: 2 September 2023 is INS Vikrant\u2019s commissioning date, a planted cross-domain trap. Step 4: The date is now commemorated as National Space Day.',
      },
      {
        q: 'INS Vikrant, commissioned in September 2022, is significant because it is',
        options: [
          "India\u2019s first aircraft carrier, acquired from the United Kingdom in 1961",
          'India\u2019s first indigenously designed and built aircraft carrier',
          'a nuclear-powered ballistic missile submarine built at Visakhapatnam',
          'a defence-research-built stealth frigate for coastal defence',
        ],
        answer: 1,
        explanation:
          'Step 1: Read the qualifier "commissioned in September 2022" \u2014 that is the Cochin Shipyard-built carrier. Step 2: Designed by the Navy\u2019s Directorate of Naval Design, it is the first indigenously designed and built Indian aircraft carrier (about 45,000 tonnes). Step 3: The 1961 INS Vikrant of the same name was acquired from the UK \u2014 option A confuses the two ships. Step 4: Submarines (Arihant class) and frigates are different programmes entirely.',
      },
      {
        q: 'Exercise Malabar, in its current format, is a naval exercise involving',
        options: [
          'India, the USA, Japan and Australia',
          'India, Russia and the USA',
          'India, Japan, Singapore and Australia',
          'India, France, the UAE and the USA',
        ],
        answer: 0,
        explanation:
          'Step 1: Malabar began in 1992 as an India\u2013US bilateral exercise. Step 2: Japan became a permanent participant in 2015 and Australia rejoined in 2020. Step 3: It now regularly sails all four Quad navies. Step 4: Options with Russia, Singapore or France mix in exercises those navies actually run with India elsewhere.',
      },
    ],
  },
  // --------------------------------------------- Tier I · 4.1 English Language
  {
    sectionId: 'eng-l1-s1',
    readingTime: 8,
    prerequisites: [
      'Parts of speech',
      'Simple sentence structure (subject, verb, object)',
    ],
    intro:
      'The English section of the defence research establishment\u2019s Stage-I screening carries about 20 of the 100 marks, and grammar questions are its fastest-scoring subset under the 0.25 negative-marking regime. Articles, tenses and agreement are also the foundation for the descriptive Stage-II discipline papers, where marks are lost to imprecise prose. Master the rules here and error-spotting becomes a checklist rather than a gamble.',
    objectives: [
      'Choose a/an/the by the initial sound of the following word',
      'Select tenses from time markers such as since, for, by the time and next week',
      'Make verbs agree with the grammatical head of the subject, ignoring intervening phrases',
      'Apply the proximity rule and collective-noun judgement in error-spotting items',
    ],
    concepts: [
      {
        term: 'Articles chosen by sound',
        kind: 'law',
        statement:
          'Use **an** before a vowel sound and **a** before a consonant sound: an hour (silent h), a university (/yu/), an M.Tech (/em/), a one-rupee coin (/w\u028cn/). Use **the** for second mention, unique objects, superlatives, rivers, mountain ranges, holy books and organisations.',
        detail:
          'Trap: spell the word, pay with marks \u2014 "an MLA", "a European", "an SOS" all follow the ear. Also compare: "the fewer the mistakes" type fixed phrases keep the in parallel slots.',
      },
      {
        term: 'Tense selected by time marker',
        kind: 'law',
        statement:
          '**Since** + point of time and **for** + duration demand perfect tenses; a past clause after "by the time" forces past perfect in the main clause; scheduled events take the simple present or "will".',
        detail:
          'Never use a future form after when, before, after, as soon as in a time clause: "she will call when she lands", not "when she will land". Trap: "since 2018" pairs with present perfect (continuous), never simple past.',
      },
      {
        term: 'Agreement with the head noun',
        kind: 'law',
        statement:
          'The verb agrees with the **head** of the subject phrase, not the nearest noun: "the list of items is", "each of the scientists has", "one of the missiles is".',
        detail:
          'Each, every, either, neither and many a are singular even when followed by plural nouns. "A number of + plural" takes plural, but "the number of + plural" stays singular \u2014 a favourite paired option.',
      },
      {
        term: 'Proximity rule and collectives',
        kind: 'insight',
        statement:
          'With **either \u2026 or / neither \u2026 nor**, the verb agrees with the nearer subject: "neither the soldiers nor their commander was aware". Collectives (team, committee) stay singular when acting as one unit and turn plural only when members act separately.',
        detail:
          'Test: "the committee has issued its report" (unit) versus "the committee were divided among themselves" (members). Trap: distance between subject and verb \u2014 the assessor inserts long phrases precisely to hide the head.',
      },
      {
        term: 'Error-spotting workflow',
        kind: 'method',
        statement:
          'A **four-sweep protocol**: (1) underline the subject\u2013verb pair of each clause, (2) check tense consistency against the time markers, (3) check articles and prepositions, (4) prefer the smallest correction among options.',
        detail:
          'In part-labelled questions, mentally delete prepositional phrases between subject and verb before judging. Most tested errors are agreement (C position), tense (B/C position) or article (A position) \u2014 sweep in that order.',
      },
    ],
    examples: [
      {
        title: 'Spotting the intervening-phrase trap',
        problem:
          'Spot the error: "Each of the scientists (A) working on the seeker module (B) have submitted (C) their test reports (D)."',
        steps: [
          { label: 'Step 1', text: 'Strike out the intervening phrase "of the scientists working on the seeker module" \u2014 the subject is **Each**, which is always singular.' },
          { label: 'Step 2', text: 'The plural noun "scientists" sits inside a prepositional phrase and cannot govern the verb; its only job is to lure the ear.' },
          { label: 'Step 3', text: 'Correct part (C): "have" becomes "has". The later "their" reflects modern singular usage and is not the tested error.' },
        ],
        result: 'Error in part C \u2014 "have" must become "has".',
      },
      {
        title: 'Articles and tense in one sentence',
        problem:
          'Fill in the blanks: "The scientist is ___ M.Tech from a leading engineering institute and ___ (work) at the Bengaluru laboratory since 2018; next week she ___ (present) her findings to the review board."',
        steps: [
          { label: 'Step 1', text: 'Article by sound: "M.Tech" is read /em tech/, beginning with a vowel sound \u2014 "**an** M.Tech", exactly like "an hour" and opposite to "a university" (/yu/).' },
          { label: 'Step 2', text: '"Since 2018" plus a continuing action demands the present perfect continuous: "**has been working**" (simple "has worked" is also accepted).' },
          { label: 'Step 3', text: '"Next week" points to scheduled future \u2014 "will present" is the standard key, with the simple present acceptable for timetabled events.' },
        ],
        result: 'an M.Tech; has been working; will present.',
      },
    ],
    keyTakeaways: [
      'a/an follows the initial sound: an hour, a university, an M.Tech, a one-rupee coin.',
      'The verb agrees with the grammatical head, not the nearest noun: "the list of items is", "each of the scientists has".',
      'since + point and for + duration demand perfect tenses; "by the time" + past event forces past perfect.',
      'With either \u2026 or / neither \u2026 nor the nearer subject rules; collectives stay singular unless members act separately.',
    ],
    quiz: [
      {
        q: '"One of my friends ___ going to the test range tomorrow."',
        options: ['are', 'is', 'were', 'have been'],
        answer: 1,
        explanation:
          'Step 1: The head of the subject is "one", singular. Step 2: "of my friends" is a prepositional phrase and cannot control the verb. Step 3: Hence "is going". Step 4: "are" and "were" fall for the nearest-noun trap.',
      },
      {
        q: '"Neither the soldiers nor their commander ___ aware of the ambush."',
        options: ['are', 'were', 'was', 'have been'],
        answer: 2,
        explanation:
          'Step 1: Apply the proximity rule for neither \u2026 nor. Step 2: The nearer subject is "commander", singular. Step 3: The tense is past, so the answer is "was". Step 4: "were" agrees with the distant plural instead of the near singular.',
      },
      {
        q: '"He is ___ honest officer who holds ___ M.Tech degree." Choose the pair of articles.',
        options: ['an, an', 'a, an', 'an, a', 'a, a'],
        answer: 0,
        explanation:
          'Step 1: "honest" begins with a silent h \u2014 the sound is vowel-initial, so "an honest". Step 2: "M.Tech" is read /em tech/, again vowel-initial, so "an M.Tech". Step 3: Both slots take "an". Step 4: Any "a" choice spells the word instead of listening to it.',
      },
      {
        q: '"By the time the flight trial ended, the defence research establishment team ___ the telemetry anomaly."',
        options: ['has isolated', 'had isolated', 'isolated', 'was isolating'],
        answer: 1,
        explanation:
          'Step 1: "By the time + past event" triggers the past perfect in the main clause. Step 2: The isolation preceded the trial\u2019s end. Step 3: Hence "had isolated". Step 4: "has isolated" clashes with the past anchor, and plain "isolated" loses the sequence the sentence is signalling.',
      },
    ],
  },
  // --------------------------------------------- Tier II CSE · 6.4 Graph Algorithms
  {
    sectionId: 'cse-d6-s4',
    readingTime: 11,
    prerequisites: [
      'Graph representations and BFS/DFS (cse-d5-s3)',
      'Asymptotic notation and heap basics (cse-d6-s1)',
    ],
    intro:
      'The defence research establishment Stage-II Computer Science paper \u2014 60 descriptive discipline marks plus the 15-mark research-aptitude component in the legacy recruitment pattern \u2014 expects working fluency in graph algorithms, not just definitions. Shortest paths and minimum spanning trees answer real routing and network-design questions in tactical data networks. This section works Dijkstra, the MST algorithms and the negative-edge cases exactly as the paper demands: with traces, complexity and traps.',
    objectives: [
      'Trace BFS and DFS in $O(V + E)$ and state when BFS yields shortest paths',
      'Execute Prim and Kruskal correctly, quoting the cut property and their complexities',
      'Run Dijkstra by hand with a priority queue and explain why negative weights break it',
      'Choose among Dijkstra, Bellman-Ford and Floyd-Warshall for a given routing scenario',
    ],
    concepts: [
      {
        term: 'Graph search with BFS and DFS',
        kind: 'method',
        statement:
          '**BFS** explores level by level and, in an unweighted graph, delivers single-source shortest paths in $O(V + E)$; **DFS** dives along branches and exposes cycles and topological order.',
        detail:
          'Both need the adjacency-list representation for that bound \u2014 an adjacency matrix costs $O(V^2)$ regardless of edge count. Trap: BFS is a shortest-path algorithm only when every edge costs the same; with weights it becomes a mere layering.',
      },
      {
        term: 'Cut property and MST algorithms',
        kind: 'theorem',
        statement:
          'For any partition (cut) of the vertices, the minimum-weight edge crossing the cut belongs to some **minimum spanning tree**. **Prim** grows one tree from a root ($O(E \\log V)$ with a binary heap); **Kruskal** sorts all edges and unions components ($O(E \\log E)$, dominated by the sort).',
        detail:
          'Kruskal needs the union-find structure with path compression to stay fast. Traps: the MST has exactly $V - 1$ edges; it is unique only when all edge weights are distinct; and it minimises total weight, never the path length between two chosen vertices.',
      },
      {
        term: "Dijkstra's shortest-path algorithm",
        kind: 'method',
        statement:
          '**Dijkstra** maintains tentative distances, repeatedly extracts the unsettled vertex with the minimum tentative distance and relaxes its outgoing edges: if $d(u) + w(u, v) < d(v)$, update $d(v)$. With a binary heap it runs in $O((V + E) \\log V)$.',
        detail:
          'Correctness rests on edge weights being non-negative \u2014 the extracted vertex\u2019s distance is final because no later path could shrink it. Defence use: least-cost routing in tactical ad-hoc networks where link metrics are positive delays.',
      },
      {
        term: 'Negative edges: Bellman-Ford and Floyd-Warshall',
        kind: 'law',
        statement:
          '**Bellman-Ford** relaxes every edge for $V - 1$ rounds in $O(VE)$, tolerates negative weights and detects negative cycles (a $V$-th round that still improves). **Floyd-Warshall** solves all-pairs shortest paths by dynamic programming over intermediate vertices in $O(V^3)$.',
        detail:
          'A negative cycle makes "shortest path" undefined for vertices it can reach \u2014 distances can be driven to $-\\infty$. Trap: a negative edge is fine for Bellman-Ford; only a negative cycle is fatal.',
      },
      {
        term: 'Choosing the right algorithm',
        kind: 'insight',
        statement:
          '**Decision table** for the assessment: unweighted \u2192 BFS; non-negative weights \u2192 Dijkstra; negative edges possible \u2192 Bellman-Ford; all pairs \u2192 Floyd-Warshall; cheapest connectivity \u2192 MST (Prim for dense, Kruskal for sparse graphs).',
        detail:
          'Descriptive papers award marks for justification: state the graph model, the weight semantics (delay, cost, risk) and the constraint that eliminates the alternatives before naming the algorithm.',
      },
    ],
    examples: [
      {
        title: 'Dijkstra by hand with re-relaxation',
        problem:
          'Run Dijkstra from S on the directed graph with edges S\u2192A = 4, S\u2192B = 2, B\u2192A = 1, B\u2192C = 9, A\u2192C = 6, C\u2192D = 3. Report the shortest distance and path to every vertex.',
        steps: [
          { label: 'Step 1', text: 'Initialise $d(S) = 0$, all others $\\infty$. The direct edges give $d(A) = 4$, $d(B) = 2$. The queue holds the unsettled vertex of least tentative distance.' },
          { label: 'Step 2', text: '```text\nextract B (2):  relax B->A : 2 + 1 = 3  < 4   -> d(A) = 3, parent B\n                 relax B->C : 2 + 9 = 11          -> d(C) = 11\n```\nExtracting B improves A through the "back door" \u2014 this re-relaxation is the heart of the algorithm.' },
          { label: 'Step 3', text: 'Extract A (3): relax A\u2192C with $3 + 6 = 9 < 11$, so $d(C) = 9$ with parent A. Extract C (9): relax C\u2192D with $9 + 3 = 12$. Extract D (12) and stop.' },
          { label: 'Step 4', text: 'Read paths from the parent pointers: A via S\u2192B\u2192A, C via S\u2192B\u2192A\u2192C, D via S\u2192B\u2192A\u2192C\u2192D. Total cost $O((V + E) \\log V)$ with a binary heap.' },
        ],
        result:
          'd(A) = 3 (S\u2192B\u2192A); d(B) = 2 (S\u2192B); d(C) = 9 (S\u2192B\u2192A\u2192C); d(D) = 12 (S\u2192B\u2192A\u2192C\u2192D).',
      },
      {
        title: 'Kruskal with union-find',
        problem:
          'Find a minimum spanning tree of the graph with edges A\u2013B = 1, C\u2013D = 2, A\u2013C = 3, B\u2013C = 4, B\u2013D = 5.',
        steps: [
          { label: 'Step 1', text: 'Sort edges by weight: 1 (A\u2013B), 2 (C\u2013D), 3 (A\u2013C), 4 (B\u2013C), 5 (B\u2013D).' },
          { label: 'Step 2', text: 'Accept A\u2013B (1) and C\u2013D (2) \u2014 neither closes a cycle. Accept A\u2013C (3): the components {A, B} and {C, D} merge, and with $V - 1 = 3$ edges accepted the tree is complete.' },
          { label: 'Step 3', text: 'B\u2013C (4) and B\u2013D (5) would each close a cycle \u2014 reject. MST weight $= 1 + 2 + 3 = 6$.' },
          { label: 'Step 4', text: 'Certify minimality with the cut property: every accepted edge was the lightest crossing some cut of the graph at the moment of acceptance.' },
        ],
        result: 'MST = {A\u2013B, C\u2013D, A\u2013C}, total weight 6.',
      },
    ],
    keyTakeaways: [
      'BFS gives single-source shortest paths in unweighted graphs; DFS exposes cycles and topological order \u2014 both $O(V + E)$ on adjacency lists.',
      'Dijkstra is greedy relaxation with a min-priority queue: $O((V + E) \\log V)$, correct only for non-negative weights.',
      'Bellman-Ford costs $O(VE)$ but tolerates negative edges and detects negative cycles; Floyd-Warshall handles all pairs in $O(V^3)$.',
      'An MST of a connected graph has exactly $V - 1$ edges and is unique when all edge weights are distinct.',
    ],
    quiz: [
      {
        q: 'If edge weights may be negative, Dijkstra\u2019s algorithm',
        options: [
          'runs faster because distances shrink quickly',
          'may return incorrect shortest-path distances',
          'always falls into an infinite loop',
          'automatically switches to Bellman-Ford',
        ],
        answer: 1,
        explanation:
          'Step 1: Dijkstra finalises the extracted vertex\u2019s distance, assuming no later path can improve it. Step 2: That assumption uses non-negative weights. Step 3: A negative edge can later undercut a finalised distance, so results may be wrong. Step 4: Loops do not occur \u2014 the algorithm terminates, just with wrong answers.',
      },
      {
        q: 'The running time of Kruskal\u2019s algorithm, with sorting and union-find, is',
        options: ['$O(E \\log E)$', '$O(V^2)$', '$O(VE)$', '$O(V \\log V)$'],
        answer: 0,
        explanation:
          'Step 1: Sorting $E$ edges costs $O(E \\log E)$. Step 2: The union-find operations are nearly constant per edge (inverse Ackermann) with path compression. Step 3: Total $O(E \\log E)$, and since $E \\le V^2$, this is $O(E \\log V)$. Step 4: $O(VE)$ belongs to Bellman-Ford, not Kruskal.',
      },
      {
        q: 'A minimum spanning tree of a connected graph with $V$ vertices contains exactly',
        options: ['$V + 1$ edges', '$V$ edges', '$V - 1$ edges', '$2V - 1$ edges'],
        answer: 2,
        explanation:
          'Step 1: A spanning tree spans all $V$ vertices and is acyclic. Step 2: An acyclic connected graph on $V$ vertices has exactly $V - 1$ edges. Step 3: Hence every MST has $V - 1$ edges. Step 4: Extra edges would create cycles; fewer would disconnect the graph.',
      },
      {
        q: 'BFS correctly computes single-source shortest paths when the graph is',
        options: [
          'unweighted (all edges of unit cost)',
          'weighted with possibly negative edges',
          'directed and acyclic only',
          'weighted with distinct positive edges',
        ],
        answer: 0,
        explanation:
          'Step 1: BFS explores in layers of increasing edge count. Step 2: With unit costs, fewest edges means least total weight. Step 3: Any weights break this equivalence \u2014 a two-edge path may cost more than a five-edge one. Step 4: Weighted graphs need Dijkstra or Bellman-Ford.',
      },
    ],
  },
  // --------------------------------------------- Tier II CSE · 9.3 CPU Scheduling
  {
    sectionId: 'cse-d9-s3',
    readingTime: 10,
    prerequisites: [
      'Processes, threads and the ready queue (cse-d9-s1)',
      'Elementary queue arithmetic',
    ],
    intro:
      'In the defence research establishment Stage-II CSE paper \u2014 60 descriptive marks on the discipline plus 15 on research aptitude \u2014 operating-system questions ask for calculations, not slogans. CPU scheduling is a favourite because a single Gantt chart yields turnaround, waiting and response times in one sweep. Mission computers in missiles and C4I nodes are hard real-time systems, so the defence research establishment assessors like scheduling questions with a latency conscience.',
    objectives: [
      'Compute completion, turnaround, waiting and response times directly from a Gantt chart',
      'Construct FCFS, SJF/SRTF and Round-Robin schedules and compare their averages',
      'Explain the convoy effect, starvation and aging together with their fixes',
      'Match scheduling algorithms to system requirements, including real-time guarantees',
    ],
    concepts: [
      {
        term: 'The three performance clocks',
        kind: 'definition',
        statement:
          '**Turnaround time** $= $ completion $-$ arrival; **waiting time** $= $ turnaround $-$ burst; **response time** $= $ first CPU allocation $-$ arrival.',
        detail:
          'Draw the Gantt chart first and read every metric off it \u2014 computing each process separately invites sign errors. Check: total burst equals total CPU-occupancy in the chart (minus idle time), which catches transcription slips.',
      },
      {
        term: 'FCFS and the convoy effect',
        kind: 'insight',
        statement:
          '**First-come-first-served** is non-preemptive and trivially fair by order, but one long process shepherds every short arrival behind it \u2014 the convoy effect \u2014 inflating average waiting time.',
        detail:
          'Convoy damage is worst when arrival order alternates long and short bursts. The assessment trap: FCFS minimises nothing except administration; never credit it with optimality.',
      },
      {
        term: 'SJF and SRTF',
        kind: 'method',
        statement:
          '**Shortest Job First** runs the available process with the smallest burst; it provably minimises average waiting time among non-preemptive schedulers. **SRTF** (shortest remaining time first) is its preemptive version \u2014 a newly arrived shorter job displaces the running one.',
        detail:
          'Both need future burst lengths, estimated in practice by exponential averaging: $\\tau_{n+1} = \\alpha t_n + (1 - \\alpha)\\tau_n$. Trap: SJF chooses only among processes already in the ready queue \u2014 at $t = 0$ with a single long arrival, that long job starts anyway.',
      },
      {
        term: 'Round Robin and the time quantum',
        kind: 'method',
        statement:
          '**Round Robin** gives each process one quantum (typically tens of milliseconds) in cyclic order; the quantum is a dial between responsiveness and overhead \u2014 too large degenerates to FCFS, too small drowns the CPU in context switches.',
        detail:
          'Queue discipline decides marks: an arrival at the instant of preemption enters the queue before the preempted process re-enters. Response time is bounded by $(N - 1)q$ for $N$ processes \u2014 the guarantee time-shared systems sell.',
      },
      {
        term: 'Priority, starvation and aging',
        kind: 'insight',
        statement:
          '**Priority scheduling** can starve low-priority jobs indefinitely; **aging** raises effective priority with waiting time until the job runs. Hard real-time systems (flight control, missile guidance) instead use deadline-guaranteeing schemes such as rate-monotonic or EDF.',
        detail:
          'Trap: priority inversion \u2014 a low-priority job holding a lock blocks a high-priority one \u2014 is fixed by priority inheritance, a classic one-line descriptive answer.',
      },
    ],
    examples: [
      {
        title: 'Non-preemptive SJF with Gantt chart',
        problem:
          'Processes arrive as P1(0, 7), P2(2, 4), P3(4, 1), P4(5, 4) \u2014 (arrival, burst). Draw the non-preemptive SJF schedule and compute average turnaround and waiting times.',
        steps: [
          { label: 'Step 1', text: 'At $t = 0$ only P1 has arrived, so P1 runs 0\u20137 despite being longest \u2014 SJF may choose only among available processes.' },
          { label: 'Step 2', text: 'At $t = 7$ the ready queue holds P2 (4), P3 (1), P4 (4). Shortest first: P3 runs 7\u20138; the P2/P4 tie breaks by arrival, so P2 runs 8\u201312 and P4 12\u201316.' },
          { label: 'Step 3', text: '```text\nGantt: | P1 0-7 | P3 7-8 | P2 8-12 | P4 12-16 |\nTAT = CT - AT : P1 7, P2 10, P3 4, P4 11  ->  avg = 8\nWT  = TAT - BT : P1 0, P2 6,  P3 3, P4 7   ->  avg = 4\n```' },
          { label: 'Step 4', text: 'Sanity check: total burst $7 + 4 + 1 + 4 = 16$ equals the makespan \u2014 the CPU is never idle, so no time is unaccounted for.' },
        ],
        result: 'Average turnaround = 8 time units; average waiting = 4 time units.',
      },
      {
        title: 'Round Robin on the same workload',
        problem:
          'Repeat the workload P1(0, 7), P2(2, 4), P3(4, 1), P4(5, 4) under Round Robin with quantum $q = 2$. Draw the chart and compare the averages with SJF.',
        steps: [
          { label: 'Step 1', text: 'Discipline: an arrival joins the tail before the preempted process re-enters. P1 runs 0\u20132 (rem 5); P2 arrives at 2 and runs 2\u20134 (rem 2); P3 arrives at 4 and runs 4\u20135, finishing (CT 5).' },
          { label: 'Step 2', text: 'P4 arrives at 5 and runs 5\u20137 (rem 2). Then P1 7\u20139 (rem 3), P2 9\u201311 (CT 11), P4 11\u201313 (CT 13), and P1 finally 13\u201316 (CT 16).' },
          { label: 'Step 3', text: '```text\nGantt: |P1 0-2|P2 2-4|P3 4-5|P4 5-7|P1 7-9|P2 9-11|P4 11-13|P1 13-16|\nTAT: P1 16, P2 9, P3 1, P4 8  ->  avg = 8.5\nWT : P1 9,  P2 5,  P3 0, P4 4  ->  avg = 4.5\n```' },
          { label: 'Step 4', text: 'Comparison: SJF wins on averages (8, 4) versus (8.5, 4.5), but RR finishes the short P3 at t = 5 instead of t = 8 and bounds every response time \u2014 the fairness\u2013efficiency trade the descriptive paper wants articulated.' },
        ],
        result:
          'RR: average turnaround = 8.5, average waiting = 4.5 \u2014 marginally worse averages, decisively better response for short arrivals.',
      },
    ],
    keyTakeaways: [
      'Turnaround = completion \u2212 arrival; waiting = turnaround \u2212 burst; response = first CPU \u2212 arrival \u2014 all read off the Gantt chart.',
      'SJF minimises average waiting time among non-preemptive schedulers; SRTF is its preemptive sharpening.',
      'Round Robin trades throughput for bounded response: quantum too large \u2192 FCFS, too small \u2192 context-switch tax.',
      'Priority scheduling starves low-priority jobs unless aging intervenes; real-time defence systems demand deadline guarantees, not good averages.',
    ],
    quiz: [
      {
        q: 'Which scheduling algorithm gives the minimum average waiting time (burst times known in advance)?',
        options: ['FCFS', 'Round Robin', 'Shortest Job First', 'Priority scheduling'],
        answer: 2,
        explanation:
          'Step 1: Swapping a longer waiting job ahead of a shorter one never lowers total waiting. Step 2: Therefore sorting by burst is optimal \u2014 exactly SJF. Step 3: Round Robin adds preemption overhead; FCFS ignores lengths; priority ignores lengths too. Step 4: SJF is provably optimal among non-preemptive schedulers.',
      },
      {
        q: 'The convoy effect is a drawback of',
        options: ['FCFS scheduling', 'SJF scheduling', 'SRTF scheduling', 'multilevel queue scheduling'],
        answer: 0,
        explanation:
          'Step 1: Define the effect: short jobs queue behind one long running job. Step 2: It requires non-preemption and arrival-order service. Step 3: Only FCFS among the options is both non-preemptive and order-driven. Step 4: SJF/SRTF reorder precisely to avoid it.',
      },
      {
        q: 'As the Round-Robin time quantum grows very large, the schedule behaves like',
        options: ['SJF', 'FCFS', 'SRTF', 'priority scheduling'],
        answer: 1,
        explanation:
          'Step 1: With a huge quantum, no running process is ever preempted before finishing. Step 2: Processes then run to completion in arrival order. Step 3: That is exactly FCFS behaviour. Step 4: The quantum is a dial: infinity \u2192 FCFS, tiny \u2192 context-switch storm.',
      },
      {
        q: 'In SRTF, a newly arrived process preempts the running process when the newcomer\u2019s',
        options: [
          'priority is higher',
          'burst time is less than the remaining time of the running process',
          'arrival time is earlier',
          'memory footprint is smaller',
        ],
        answer: 1,
        explanation:
          'Step 1: SRTF always executes the process with the shortest remaining time. Step 2: Preemption happens only if the newcomer beats the incumbent on that measure. Step 3: Priority, arrival order and memory are irrelevant to SRTF. Step 4: Hence the burst-versus-remaining comparison.',
      },
    ],
  },
  // --------------------------------------------- Tier II ECE · 12.4 Microwave & LOS
  {
    sectionId: 'ece-e-microwave-radar-s6',
    readingTime: 10,
    prerequisites: [
      'Decibel and link-budget arithmetic',
      'Antenna gain basics (ece-d7-s5)',
    ],
    intro:
      'The defence research establishment Stage-II Electronics & Communication paper devotes 60 descriptive marks to the discipline (plus 15 for research aptitude in the legacy pattern), and microwave line-of-sight systems are its most defence-flavoured topic \u2014 every radar and telemetry link is an LOS design problem. Doppler shifts, path loss and Fresnel clearance are the working equations of the defence research establishment radar and communication laboratories. This section builds the link-budget and Doppler toolkit the paper tests.',
    objectives: [
      'Compute radio-horizon distances and size tower heights for LOS hops',
      'Apply the Friis equation and the dB free-space path-loss formula to close a link budget',
      'Compute radar Doppler shifts for approaching and receding targets',
      'Apply the 60% first-Fresnel-zone clearance rule during path profiling',
    ],
    concepts: [
      {
        term: 'Radio horizon of an LOS link',
        kind: 'definition',
        statement:
          'With standard atmospheric refraction (effective earth radius $4/3$ times the true radius), the **radio-horizon** distance is $d(\\text{km}) \\approx 3.57\\,(\\sqrt{h_t} + \\sqrt{h_r})$ with antenna heights in metres.',
        detail:
          'Doubling a tower height does not double its horizon \u2014 the square root sees to that. Trap: adding the two horizon distances (not the heights) gives the maximum hop length; questions love swapping the two operations.',
      },
      {
        term: 'Free-space path loss and the Friis equation',
        kind: 'law',
        statement:
          '**FSPL** in decibels: $\\text{FSPL} = 92.45 + 20\\log_{10} f_{(\\text{GHz})} + 20\\log_{10} d_{(\\text{km})}$, and the Friis balance reads $P_r = P_t + G_t + G_r - \\text{FSPL}$ (all dB/dBm/dBi).',
        detail:
          'Each doubling of distance or frequency adds 6 dB of loss. Trap: the constant 92.45 belongs to the GHz\u2013km combination; mixing units with the 32.45 (MHz\u2013km) version is a standard planted error.',
      },
      {
        term: 'Doppler shift in radar and links',
        kind: 'law',
        statement:
          'A target with radial velocity $v$ produces a **Doppler shift** $f_d = \\frac{2v}{\\lambda}$ \u2014 the factor 2 from the two-way monostatic path. Approaching targets raise the received frequency; receding targets lower it.',
        detail:
          'One-way communication links shift by only $\\frac{v}{\\lambda}$. Trap: use the radial (line-of-sight) velocity component, never the ground speed, unless the geometry is head-on; tangential motion produces no Doppler.',
      },
      {
        term: 'Fresnel-zone clearance',
        kind: 'insight',
        statement:
          'The first Fresnel-zone radius at a point along the path is $F_1 = 17.3 \\sqrt{\\dfrac{d_1 d_2}{f D}}$ metres ($d_1, d_2, D$ in km, $f$ in GHz); keep at least **60% of $F_1$** obstacle-free to avoid diffraction loss.',
        detail:
          'The 60% rule keeps added loss below roughly 6 dB in typical geometry. Trap: the worst obstruction point is mid-path where $F_1$ is largest \u2014 profile the whole path, not just the endpoints.',
      },
      {
        term: 'Microwave hop design workflow',
        kind: 'method',
        statement:
          'Design order: fix hop length from tower heights (radio horizon) \u2192 compute FSPL \u2192 close the budget for $P_r$ \u2192 subtract receiver threshold to obtain **fade margin** \u2192 check availability targets and diversity needs.',
        detail:
          'Descriptive marks live in the ordering and the units. Defence practice: telemetry hops between range stations budget generous fade margins because monsoon multipath and k-factor fades strike precisely during trials.',
      },
    ],
    examples: [
      {
        title: 'Doppler shift of a closing target',
        problem:
          'A 10 GHz tracking radar locks a target closing head-on at 300 m/s. Find the Doppler shift and the received echo frequency. What changes if the target recedes at the same speed?',
        steps: [
          { label: 'Step 1', text: 'Wavelength $\\lambda = \\dfrac{c}{f} = \\dfrac{3 \\times 10^8}{10^{10}} = 0.03$ m.' },
          { label: 'Step 2', text: 'Monostatic radar sees the two-way effect: $f_d = \\dfrac{2v}{\\lambda} = \\dfrac{2 \\times 300}{0.03} = 20$ kHz.' },
          { label: 'Step 3', text: 'A closing target raises the frequency: the echo returns at $10\\,\\text{GHz} + 20\\,\\text{kHz} = 10.00002$ GHz. A receding target flips the sign \u2014 the echo would come back at $10\\,\\text{GHz} - 20\\,\\text{kHz}$.' },
          { label: 'Step 4', text: 'Note the factor-of-two: a one-way communication link at the same closing speed would shift by only $v/\\lambda = 10$ kHz \u2014 the radar\u2019s round trip doubles the Doppler.' },
        ],
        result:
          'Doppler shift $= +20$ kHz (closing); echo at 10.00002 GHz. Receding flips the sign to \u221220 kHz.',
      },
      {
        title: 'Closing a 6 GHz microwave link budget',
        problem:
          'A 6 GHz LOS microwave hop of 50 km uses a 1 W transmitter (30 dBm) and 20 dBi dishes at both ends. Compute the free-space path loss and received power, and judge the margin against a \u221290 dBm receiver threshold.',
        steps: [
          { label: 'Step 1', text: 'Write the loss formula with the GHz\u2013km constant: $\\text{FSPL} = 92.45 + 20\\log_{10} 6 + 20\\log_{10} 50$ dB.' },
          { label: 'Step 2', text: 'Evaluate the logs: $20\\log_{10} 6 \\approx 15.56$ dB and $20\\log_{10} 50 \\approx 33.98$ dB, so FSPL $\\approx 92.45 + 15.56 + 33.98 \\approx 142$ dB.' },
          { label: 'Step 3', text: 'Close the Friis budget: $P_r = 30 + 20 + 20 - 142 = -72$ dBm.' },
          { label: 'Step 4', text: 'Fade margin $= -72 - (-90) = 18$ dB \u2014 comfortable in clear air, and exactly the reservoir a heavy monsoon fade will consume.' },
        ],
        result: 'FSPL \u2248 142 dB; received power \u221272 dBm; fade margin 18 dB.',
      },
    ],
    keyTakeaways: [
      'Radio horizon: $d(\\text{km}) \\approx 3.57(\\sqrt{h_t} + \\sqrt{h_r})$ for heights in metres \u2014 add horizon distances, not heights.',
      'FSPL(dB) $= 92.45 + 20\\log f_{(\\text{GHz})} + 20\\log d_{(\\text{km})}$; each doubling of distance or frequency adds 6 dB.',
      'Monostatic radar Doppler $f_d = 2v/\\lambda$: approaching raises, receding lowers the carrier; one-way links shift by $v/\\lambda$ only.',
      'Keep at least 60% of the first Fresnel zone clear \u2014 mid-path, where $F_1$ peaks, is the critical profile point.',
    ],
    quiz: [
      {
        q: 'A 10 GHz radar tracks a target receding at 150 m/s. The Doppler shift is',
        options: ['$+10$ kHz', '\u221210 kHz', '$+20$ kHz', '\u22125 kHz'],
        answer: 1,
        explanation:
          'Step 1: Wavelength $\\lambda = 0.03$ m at 10 GHz. Step 2: Two-way shift magnitude $f_d = 2 \\times 150 / 0.03 = 10$ kHz. Step 3: Receding motion lowers the received frequency, so the shift is \u221210 kHz. Step 4: The +20 kHz option doubles the speed as well as the sign.',
      },
      {
        q: 'The radio horizon of a 64 m tower (standard refraction) is about',
        options: ['35.7 km', '28.56 km', '14.28 km', '57.12 km'],
        answer: 1,
        explanation:
          'Step 1: Apply $d = 3.57\\sqrt{h}$ km. Step 2: $\\sqrt{64} = 8$. Step 3: $d = 3.57 \\times 8 = 28.56$ km. Step 4: The 35.7 km option squares to 100 m \u2014 a planted height swap.',
      },
      {
        q: 'Doubling the distance of a free-space link changes the path loss by',
        options: ['$+6$ dB', '$+3$ dB', '$+12$ dB', '\u22126 dB'],
        answer: 0,
        explanation:
          'Step 1: FSPL contains the term $20\\log_{10} d$. Step 2: Doubling $d$ adds $20\\log_{10} 2 \\approx 6$ dB. Step 3: The same 6 dB applies per doubling of frequency. Step 4: +12 dB would be a quadrupling of distance.',
      },
      {
        q: 'To avoid diffraction loss on a microwave path, at least this fraction of the first Fresnel zone should be kept clear:',
        options: ['10%', '33%', '60%', '100%'],
        answer: 2,
        explanation:
          'Step 1: The first Fresnel zone is the ellipsoid of half-wavelength path excess around the ray. Step 2: Practical planning keeps 0.6 $F_1$ clear of obstacles. Step 3: That limits the additional diffraction loss to a few dB. Step 4: Demanding full clearance over-engineers towers at real cost.',
      },
    ],
  },
  // --------------------------------------------- Tier II EE · 3.4 Synchronous Machines
  {
    sectionId: 'ee-e-machines1-s8',
    readingTime: 9,
    prerequisites: [
      'Three-phase phasor basics (ee-d2-s2)',
      "Faraday's law and magnetic circuits (ee-d10-s2)",
    ],
    intro:
      'Synchronous machines anchor the electrical-machines area of the defence research establishment Stage-II Electrical paper \u2014 60 descriptive discipline marks plus the 15-mark research-aptitude component in the legacy recruitment pattern. Every the defence research establishment runs alternators in its DG sets and test bays, so EMF equations and regulation calculations carry direct laboratory relevance. Expect numerical questions built on $N_s = 120f/P$ and $E = 4.44\\, k_w f \\Phi T$.',
    objectives: [
      'Compute synchronous speed and machine frequency from pole count and rpm',
      'Apply the alternator EMF equation to rated-voltage calculations',
      'Predict voltage regulation from the synchronous-impedance phasor diagram at lagging and leading loads',
      'State the four synchronisation conditions and the role of the synchronous condenser',
    ],
    concepts: [
      {
        term: 'Synchronous speed',
        kind: 'definition',
        statement:
          'A synchronous machine locks to the supply frequency at the **synchronous speed** $N_s = \\dfrac{120f}{P}$ rpm, and conversely a driven alternator generates $f = \\dfrac{PN_s}{120}$ Hz.',
        detail:
          'A 50 Hz, 4-pole machine must run at 1500 rpm; a 12-pole machine at 500 rpm. Trap: more poles means slower speed \u2014 options pairing high pole counts with high speeds invert the relation.',
      },
      {
        term: 'EMF equation of an alternator',
        kind: 'law',
        statement:
          'The RMS phase EMF is $E = 4.44\\, k_w f \\Phi T$ volts, where $\\Phi$ is flux per pole, $T$ the series turns per phase and $k_w = k_d k_p$ the **winding factor** pricing distribution and chording.',
        detail:
          'The 4.44 is $\\sqrt{2}\\pi/2$ in disguise \u2014 the same constant as the transformer EMF equation, because both sweep sinusoidal flux past a winding. Trap: $T$ counts series turns per phase, not conductors; using conductors $Z$ requires $E = 2.22\\, k_w f \\Phi Z$.',
      },
      {
        term: 'Armature reaction',
        kind: 'definition',
        statement:
          'Armature current produces an MMF that distorts the main field: **lagging** power-factor loads demagnetise (reduce the resultant flux), **leading** loads magnetise (strengthen it), and unity-power-factor loads act mainly cross-magnetising.',
        detail:
          'This is why regulation is positive at lagging PF and can go negative at leading PF. Trap: reactive current along the quadrature axis is what modifies flux \u2014 pure active current mostly twists it.',
      },
      {
        term: 'Voltage regulation methods',
        kind: 'method',
        statement:
          '**Regulation** $= \\dfrac{E_0 - V}{V} \\times 100\\%$. Predicted from the synchronous impedance $Z_s = R_a + jX_s$: $E_0 = \\sqrt{(V\\cos\\phi + I R_a)^2 + (V\\sin\\phi \\pm I X_s)^2}$ with $+$ for lagging, $-$ for leading loads.',
        detail:
          'The EMF (synchronous-impedance) method overestimates regulation (pessimistic); the MMF and ASA methods lean optimistic; the ZPF (Potier) triangle method is the accurate one \u2014 a favourite ordering question.',
      },
      {
        term: 'Synchronising to the grid',
        kind: 'method',
        statement:
          'Before closing the breaker, match the incoming alternator to the bus on four counts: **voltage magnitude, frequency, phase sequence and phase angle** \u2014 checked with a synchroscope (or dark-lamp method).',
        detail:
          'Closing out of synchronism produces damaging torques and stator currents. Related assessment gem: an overexcited synchronous motor running unloaded draws leading current and behaves as a **synchronous condenser** \u2014 a rotating VAR source for power-factor correction.',
      },
    ],
    examples: [
      {
        title: 'Speed and EMF of a 12-pole alternator',
        problem:
          'A 3-phase, 50 Hz, 12-pole alternator has 200 series turns per phase, a winding factor of 0.96 and 40 mWb of flux per pole. Find the synchronous speed, the phase EMF and the line EMF for a star connection.',
        steps: [
          { label: 'Step 1', text: 'Synchronous speed $N_s = \\dfrac{120f}{P} = \\dfrac{120 \\times 50}{12} = 500$ rpm \u2014 the prime mover must hold exactly this speed to stay on frequency.' },
          { label: 'Step 2', text: 'Phase EMF: $E_{ph} = 4.44\\, k_w f \\Phi T = 4.44 \\times 0.96 \\times 50 \\times 0.04 \\times 200$.' },
          { label: 'Step 3', text: '$E_{ph} = 1704.96 \\approx 1705$ V; the star connection scales line voltage by $\\sqrt{3}$: $E_L \\approx 2951$ V $\\approx 2.95$ kV.' },
          { label: 'Step 4', text: 'Sensitivity check: EMF is linear in each of $\\Phi$, $f$ and $T$ \u2014 doubling the flux alone doubles the EMF, a favourite one-mark extension.' },
        ],
        result: '$N_s = 500$ rpm, $E_{ph} \\approx 1705$ V, $E_L \\approx 2.95$ kV (star).',
      },
      {
        title: 'Regulation at 0.8 lagging power factor',
        problem:
          'A 3-phase star-connected alternator delivers 100 A at 6.6 kV line voltage and 0.8 power factor lagging. With synchronous reactance 5 \u03a9 per phase and negligible armature resistance, estimate the no-load EMF and the voltage regulation.',
        steps: [
          { label: 'Step 1', text: 'Phase voltage $V = \\dfrac{6600}{\\sqrt{3}} = 3810.5$ V; with $\\cos\\phi = 0.8$, $\\sin\\phi = 0.6$.' },
          { label: 'Step 2', text: 'With $R_a = 0$, the synchronous-impedance phasor gives $E_0 = \\sqrt{(V\\cos\\phi)^2 + (V\\sin\\phi + I X_s)^2} = \\sqrt{3048.4^2 + (2286.3 + 500)^2}$.' },
          { label: 'Step 3', text: '$E_0 = \\sqrt{9.293 \\times 10^6 + 7.763 \\times 10^6} \\approx 4130$ V.' },
          { label: 'Step 4', text: 'Regulation $= \\dfrac{4130 - 3810.5}{3810.5} \\times 100 \\approx 8.4\\%$ \u2014 positive, exactly as lagging armature reaction demagnetising predicts.' },
        ],
        result: '$E_0 \\approx 4130$ V per phase; regulation $\\approx 8.4\\%$ (positive at lagging PF).',
      },
    ],
    keyTakeaways: [
      '$N_s = 120f/P$ rpm and $f = PN_s/120$ \u2014 a 12-pole 50 Hz alternator must spin at 500 rpm.',
      'Phase EMF $E = 4.44\\, k_w f \\Phi T$ with $k_w = k_d k_p$; the constant is the transformer\u2019s, the winding factor is the addition.',
      'Lagging loads demagnetise (positive regulation); leading loads magnetise (regulation can go negative); unity loads act cross-magnetising.',
      'Synchronise on voltage, frequency, phase sequence and phase angle; an overexcited idling synchronous motor is a synchronous condenser supplying VARs.',
    ],
    quiz: [
      {
        q: 'A 50 Hz, 4-pole synchronous machine runs at',
        options: ['750 rpm', '1000 rpm', '1500 rpm', '3000 rpm'],
        answer: 2,
        explanation:
          'Step 1: Apply $N_s = 120f/P$. Step 2: $N_s = 120 \\times 50 / 4 = 1500$ rpm. Step 3: 3000 rpm belongs to a 2-pole machine at 50 Hz. Step 4: More poles \u2014 slower synchronous speed.',
      },
      {
        q: 'Armature reaction in an alternator is magnetising when the load power factor is',
        options: ['lagging', 'leading', 'unity', 'zero leading or lagging alike'],
        answer: 1,
        explanation:
          'Step 1: Reactive armature current along the quadrature axis modifies the main flux. Step 2: Leading current produces MMF that aids the field \u2014 magnetising. Step 3: Lagging current opposes it \u2014 demagnetising. Step 4: Unity-PF load mainly distorts the field (cross-magnetising).',
      },
      {
        q: 'A 6-pole alternator driven at 1000 rpm generates a frequency of',
        options: ['25 Hz', '60 Hz', '50 Hz', '100 Hz'],
        answer: 2,
        explanation:
          'Step 1: Invert the speed relation: $f = PN/120$. Step 2: $f = 6 \\times 1000 / 120 = 50$ Hz. Step 3: 60 Hz would need 1200 rpm at 6 poles. Step 4: The $120$ in the formula converts pairs of poles per revolution into per-minute cycles.',
      },
      {
        q: 'An overexcited synchronous motor running on no load, drawing leading current, is called a',
        options: ['synchronous condenser', 'induction compensator', 'phase advancer', 'static VAR compensator'],
        answer: 0,
        explanation:
          'Step 1: Overexcitation makes the synchronous machine supply reactive power even without mechanical load. Step 2: Idling, it draws a leading (capacitive) current. Step 3: Used this way it is a synchronous condenser \u2014 a rotating VAR source for power-factor correction. Step 4: A static VAR compensator does similar duty with thyristor-switched reactors and capacitors, no rotating machine.',
      },
    ],
  },
  // --------------------------------------------- Tier II ME · 3.2 Laws of Thermodynamics
  {
    sectionId: 'me-e-thermo-s8',
    readingTime: 10,
    prerequisites: [
      'Pure-substance properties and phase change (me-d3-s1)',
      'Basic integral calculus for computing work',
    ],
    intro:
      'Thermodynamics opens the propulsion-and-energy stream of the defence research establishment Stage-II Mechanical paper \u2014 60 descriptive discipline marks alongside the 15-mark research-aptitude section in the legacy recruitment pattern. Missile propulsion, wind-tunnel drives and test-rig power all trace back to the three laws. The assessor\u2019s favourite is the Carnot bound: the fastest route to full marks, and the easiest to fumble with a Celsius slip.',
    objectives: [
      'Apply the first law $Q - W = \\Delta U$ to closed systems and cycles with a consistent sign convention',
      'State and interconvert the Kelvin-Planck and Clausius forms of the second law',
      'Compute Carnot efficiency and refrigerator/heat-pump COPs in absolute temperature',
      'Use the entropy inequality to classify processes as reversible, irreversible or impossible',
    ],
    concepts: [
      {
        term: 'Zeroth law and temperature',
        kind: 'law',
        statement:
          'If bodies A and B are each in thermal equilibrium with body C, then A and B are in equilibrium with each other \u2014 the **transitivity** that makes temperature a measurable property and thermometry possible.',
        detail:
          'Assessment use: justify why a thermometer reading is meaningful at all. Trap: the zeroth law defines equality of temperature, not its direction of flow \u2014 that is the second law\u2019s business.',
      },
      {
        term: 'First law for a closed system',
        kind: 'law',
        statement:
          'The **first law** balances energy with heat positive into the system and work positive out of it: $Q - W = \\Delta U$. Over a cycle $\\oint dU = 0$, hence $\\oint \\delta Q = \\oint \\delta W$ \u2014 net heat equals net work.',
        detail:
          'The law is a bookkeeping identity, not a direction: it cannot forbid the impossible engine. Traps: boundary work is $W = \\int p\\,dV$ only for quasi-equilibrium processes; in a free expansion into vacuum $W = 0$ though volume changes.',
      },
      {
        term: 'Second law: Kelvin-Planck and Clausius',
        kind: 'law',
        statement:
          '**Kelvin-Planck**: no cyclic device converts heat from a single reservoir entirely into work. **Clausius**: heat does not flow unaided from a colder to a hotter body. The two statements are logically equivalent; both forbid a perpetual-motion machine of the second kind (PMM-2).',
        detail:
          'A heat engine must therefore reject heat \u2014 the condenser in a power plant and the exhaust of a missile engine are thermodynamic necessities, not design flaws. Trap: PMM-1 violates the first law; PMM-2 violates the second \u2014 options swap them.',
      },
      {
        term: 'Carnot efficiency',
        kind: 'theorem',
        statement:
          'No engine between reservoirs at $T_H$ and $T_L$ beats $\\eta_{\\text{Carnot}} = 1 - \\dfrac{T_L}{T_H}$, independent of the working substance \u2014 temperatures in **kelvin**. Companion coefficients: $\\text{COP}_R = \\dfrac{T_L}{T_H - T_L}$ and $\\text{COP}_{HP} = \\dfrac{T_H}{T_H - T_L} = \\text{COP}_R + 1$.',
        detail:
          'The killer trap: using \u00b0C. Between 227\u00b0C and 27\u00b0C the true bound is $1 - 300/500 = 40\\%$, while the Celsius computation suggests about 88%. Also: raising $T_H$ or lowering $T_L$ both help, but lowering the sink is usually the harder engineering problem.',
      },
      {
        term: 'Entropy and irreversibility',
        kind: 'insight',
        statement:
          'The **Clausius inequality** $dS \\ge \\dfrac{\\delta Q}{T}$ holds with equality only for reversible heat transfer; consequently $\\Delta S_{\\text{universe}} > 0$ for every real (irreversible) process and a reversible adiabatic process is isentropic ($\\Delta S = 0$).',
        detail:
          'Entropy of a system may fall \u2014 a refrigerator cools its contents \u2014 but only by exporting more entropy elsewhere. Trap: "adiabatic" alone does not mean isentropic; friction makes real adiabatic processes entropy-generating.',
      },
    ],
    examples: [
      {
        title: 'Carnot engine between 600 K and 300 K',
        problem:
          'A Carnot engine absorbs 2 kJ of heat per cycle from a 600 K reservoir and rejects to a 300 K sink. Find the efficiency, the work output and the heat rejected. What efficiency would a 250 K sink allow?',
        steps: [
          { label: 'Step 1', text: 'Efficiency $\\eta = 1 - \\dfrac{T_L}{T_H} = 1 - \\dfrac{300}{600} = 0.5$ \u2014 with temperatures already absolute.' },
          { label: 'Step 2', text: 'Work $W = \\eta Q_H = 0.5 \\times 2 = 1$ kJ; rejected heat $Q_L = Q_H - W = 1$ kJ.' },
          { label: 'Step 3', text: 'Lowering the sink to 250 K gives $\\eta = 1 - \\dfrac{250}{600} = 0.583$ \u2014 58.3%, showing why rejection temperature is a prime design lever in propulsion and electronics cooling.' },
          { label: 'Step 4', text: 'Interpretation: no real engine between the same reservoirs, however finely built, can exceed these numbers \u2014 Carnot is a bound, not a tuning target.' },
        ],
        result: '$\\eta = 50\\%$, $W = 1$ kJ, $Q_L = 1$ kJ; a 250 K sink lifts the bound to 58.3%.',
      },
      {
        title: 'First law for a process and a cycle',
        problem:
          'A sealed actuator cylinder on a missile test rig receives 800 J of heat while its gas expands doing 300 J of work. Separately, the rig\u2019s working fluid completes a cycle with heat interactions of +60 kJ and \u221230 kJ. Find $\\Delta U$ for the expansion and the net work over the cycle.',
        steps: [
          { label: 'Step 1', text: 'First law (heat-in positive, work-by positive): $\\Delta U = Q - W = 800 - 300 = 500$ J for the expansion.' },
          { label: 'Step 2', text: 'The gas stores 500 J more internal energy \u2014 observable as a temperature rise at fixed composition.' },
          { label: 'Step 3', text: 'Over a complete cycle the fluid returns to its initial state, so $\\oint dU = 0$ and $W_{\\text{net}} = Q_{\\text{net}} = 60 - 30 = 30$ kJ.' },
          { label: 'Step 4', text: 'Cross-read: the cycle converts 30 of the 60 kJ absorbed into work \u2014 a 50% conversion, permissible only because heat is rejected to a colder sink, as the second law demands.' },
        ],
        result: '$\\Delta U = +500$ J for the expansion; cyclic net work $= 30$ kJ.',
      },
    ],
    keyTakeaways: [
      'First law (closed system): $Q - W = \\Delta U$; over a cycle $\\Delta U = 0$, so net heat equals net work.',
      'Kelvin-Planck and Clausius are equivalent faces of the second law; together they outlaw PMM-2 while the first law outlaws PMM-1.',
      '$\\eta_{\\text{Carnot}} = 1 - T_L/T_H$ in kelvin \u2014 the \u00b0C slip turns 40% into 88% and full marks into zero.',
      '$\\text{COP}_R = T_L/(T_H - T_L)$ and $\\text{COP}_{HP} = \\text{COP}_R + 1$; both degrade as the temperature gap widens.',
    ],
    quiz: [
      {
        q: 'A Carnot engine works between 227\u00b0C and 27\u00b0C. Its efficiency is',
        options: ['88%', '40%', '60%', '20%'],
        answer: 1,
        explanation:
          'Step 1: Convert to absolute temperature: $T_H = 500$ K, $T_L = 300$ K. Step 2: $\\eta = 1 - 300/500 = 0.4$. Step 3: The 88% option is the Celsius trap $1 - 27/227$. Step 4: 60% and 20% fail even the Kelvin arithmetic.',
      },
      {
        q: 'The COP of a Carnot refrigerator operating between 300 K and 250 K is',
        options: ['5', '6', '1.2', '0.2'],
        answer: 0,
        explanation:
          'Step 1: Refrigerator COP removes heat from the cold reservoir: $\\text{COP}_R = T_L/(T_H - T_L)$. Step 2: $\\text{COP}_R = 250/50 = 5$. Step 3: The value 6 is the heat-pump COP $T_H/(T_H - T_L) = 300/50$. Step 4: COPs exceed 1 legitimately \u2014 they move heat, they do not create it.',
      },
      {
        q: 'A perpetual-motion machine of the second kind (PMM-2) violates',
        options: ['the zeroth law', 'the first law', 'the second law', 'both the first and second laws'],
        answer: 2,
        explanation:
          'Step 1: PMM-2 extracts work cyclically from a single reservoir, conserving energy in the process. Step 2: Energy bookkeeping is intact, so the first law is satisfied. Step 3: It contradicts the Kelvin-Planck statement of the second law. Step 4: PMM-1, which creates energy from nothing, is the one violating the first law.',
      },
      {
        q: 'In a reversible adiabatic (isentropic) process, the entropy change of the system is',
        options: ['zero', 'positive', 'negative', 'equal to $c_p \\ln(T_2/T_1)$'],
        answer: 0,
        explanation:
          'Step 1: Adiabatic means $\\delta Q = 0$, so the Clausius inequality gives $dS \\ge 0$. Step 2: Reversibility forces the equality $dS = \\delta Q / T = 0$. Step 3: Hence $\\Delta S = 0$ \u2014 the process is isentropic. Step 4: The $c_p \\ln(T_2/T_1)$ form is only one piece of the ideal-gas entropy change, which the pressure term cancels exactly along $pv^\\gamma = \\text{const}$.',
      },
    ],
  },
  // --------------------------------------------- Tier II CSE · 12.1 Security & Cryptography
  {
    sectionId: 'cse-e-crypto-s7',
    readingTime: 9,
    prerequisites: [
      'Modular arithmetic and gcd',
      'Binary and hexadecimal number bases',
    ],
    intro:
      'Cybersecurity is Area 6 of Paper 2 in the defence research establishment Stage-II CSE assessment \u2014 60 descriptive discipline marks plus the 15-mark research-aptitude component in the legacy recruitment pattern \u2014 and it is the most the defence research establishment-native topic on the syllabus. Secure tactical datalinks, classified networks and cryptographic key management are daily business in defence laboratories. This section covers the principles, the mathematics of RSA and hashes, and the PKI that binds it together.',
    objectives: [
      'Classify attacks against the CIA triad together with authentication and non-repudiation',
      'Work RSA end-to-end on small numbers: key generation, encryption, decryption and the factoring basis',
      'Distinguish hashes, MACs and digital signatures, and verify signatures with public keys',
      'Explain certificates, CA chains and why TLS combines asymmetric key exchange with AES session traffic',
    ],
    concepts: [
      {
        term: 'The CIA triad and its extensions',
        kind: 'definition',
        statement:
          'Security goals are classed as **confidentiality** (only authorised parties read the data), **integrity** (no undetected tampering) and **availability** (the service works when needed); defence practice adds **authentication** (who) and **non-repudiation** (cannot deny sending).',
        detail:
          'Map every attack to a violated property: eavesdropping \u2192 confidentiality, log tampering \u2192 integrity, DDoS \u2192 availability. Trap: encrypting a message guarantees none of the others \u2014 an attacker can still delete or replay ciphertext.',
      },
      {
        term: 'Symmetric encryption and AES',
        kind: 'method',
        statement:
          '**Symmetric** ciphers use one shared key for both directions; AES operates on 128-bit blocks with 128-, 192- or 256-bit keys and is orders of magnitude faster than public-key cryptography. The hard problem is distributing the key securely.',
        detail:
          'Kerckhoffs\u2019s principle governs design: the system\u2019s security must survive the algorithm being public \u2014 secrecy lives only in the key. Trap: key size alone does not make security; a misused 256-bit AES mode (e.g. ECB on structured data) leaks patterns.',
      },
      {
        term: 'Asymmetric encryption and RSA',
        kind: 'law',
        statement:
          '**RSA** publishes $n = pq$ and $e$, keeps $d$ with $ed \\equiv 1 \\pmod{\\phi(n)}$; encryption is $c = m^e \\bmod n$ and decryption $m = c^d \\bmod n$. Its security rests on the difficulty of factoring the modulus $n$.',
        detail:
          'ECC delivers comparable security with far smaller keys (roughly 256-bit ECC \u2248 3072-bit RSA), which matters for constrained battlefield radios. Trap: RSA encrypts a bounded block \u2014 bulk data always goes symmetric.',
      },
      {
        term: 'Hashes and digital signatures',
        kind: 'definition',
        statement:
          'A cryptographic **hash** such as SHA-256 is one-way and collision-resistant: any input maps to a fixed 256-bit digest from which nothing is recovered. A **digital signature** applies the signer\u2019s private key to the hash; anyone verifies it with the public key.',
        detail:
          'Signing the hash (not the whole message) is what makes signatures fast. Verification proves integrity, origin and non-repudiation. Trap: a MAC uses a shared secret \u2014 it authenticates but cannot prove origin to a third party.',
      },
      {
        term: 'Certificates and PKI',
        kind: 'method',
        statement:
          'A **certificate** (X.509) binds an identity to a public key under a certification authority\u2019s signature; trust chains from a root CA through intermediates to the end entity. TLS uses this to agree an AES session key via asymmetric (or ECDHE) exchange, then encrypts bulk traffic symmetrically.',
        detail:
          'The hybrid pattern answers the assessment\u2019s recurring "why both?" \u2014 asymmetric solves key distribution, symmetric supplies the speed. Defence networks layer this with segmentation, HSM-held keys and certificate pinning.',
      },
    ],
    examples: [
      {
        title: 'RSA on assessment-sized numbers',
        problem:
          'Bob publishes the public key $(n = 33, e = 7)$. Alice sends the message $m = 5$. Verify that the private key is $d = 3$, encrypt $m$, and confirm decryption recovers 5.',
        steps: [
          { label: 'Step 1', text: 'With $p = 3$, $q = 11$: $\\phi(n) = (p-1)(q-1) = 20$. Check $ed = 7 \\times 3 = 21 \\equiv 1 \\pmod{20}$ \u2014 so $d = 3$ is the matching private exponent.' },
          { label: 'Step 2', text: 'Encrypt: $c = m^e \\bmod n = 5^7 \\bmod 33$. Repeated squaring: $5^2 = 25$, $5^4 = 625 \\equiv 31$, so $5^7 = 5^4 \\cdot 5^2 \\cdot 5 \\equiv 31 \\times 25 \\times 5 \\equiv 14$.' },
          { label: 'Step 3', text: 'Decrypt: $m = c^d \\bmod n = 14^3 \\bmod 33 = 2744 \\bmod 33 = 5$ \u2014 the plaintext returns intact.' },
          { label: 'Step 4', text: 'Scale check: real systems use 2048\u20133072-bit moduli; breaking $n = 33$ needs only a glance at its factors \u2014 the mathematics is identical, the factoring is not.' },
        ],
        result: 'Ciphertext $c = 14$ travels; decryption with $d = 3$ restores $m = 5$.',
      },
      {
        title: 'Why brute force is the wrong attack on AES-128',
        problem:
          'Estimate the time to brute-force a 128-bit AES key at $10^{12}$ keys per second, and state what this implies about how adversaries actually attack the defence research establishment-grade systems.',
        steps: [
          { label: 'Step 1', text: 'Key space $= 2^{128} \\approx 3.4 \\times 10^{38}$ keys.' },
          { label: 'Step 2', text: 'At $10^{12}$ keys/s: $t = \\dfrac{3.4 \\times 10^{38}}{10^{12}} = 3.4 \\times 10^{26}$ s, and with $3.15 \\times 10^7$ s per year, $t \\approx 1.1 \\times 10^{19}$ years.' },
          { label: 'Step 3', text: 'The universe is about $1.4 \\times 10^{10}$ years old \u2014 exhaustive search is out of reach by roughly nine orders of magnitude even at planetary hardware scale.' },
          { label: 'Step 4', text: 'Conclusion for the answer: real attacks target implementations \u2014 side channels, weak randomness, key management and people \u2014 so security engineering concentrates there rather than on longer keys.' },
        ],
        result: '\u2248 $10^{19}$ years at $10^{12}$ keys/s; key search is infeasible, so attacks target implementation and key management.',
      },
    ],
    keyTakeaways: [
      'CIA triad \u2014 confidentiality, integrity, availability \u2014 plus authentication and non-repudiation; map every attack to the property it violates.',
      'RSA: publish $n = pq$ and $e$, keep $d$ with $ed \\equiv 1 \\pmod{\\phi(n)}$; security rests on factoring hardness.',
      'Sign with the private key, verify with the public key; hashing the message first makes signatures fast and tamper-evident.',
      'Kerckhoffs\u2019s principle: secrecy lives only in keys; TLS is hybrid \u2014 asymmetric setup, AES for bulk traffic.',
    ],
    quiz: [
      {
        q: 'The security of RSA rests primarily on',
        options: [
          'the difficulty of factoring large semiprime integers',
          'the difficulty of the discrete logarithm problem',
          'lattice reduction hardness',
          'finding collisions in hash functions',
        ],
        answer: 0,
        explanation:
          'Step 1: RSA publishes $n = pq$; recovering $d$ requires $\\phi(n)$, which requires factoring $n$. Step 2: Discrete logarithms underpin Diffie-Hellman, DSA and ECC instead. Step 3: Lattices power newer post-quantum schemes. Step 4: Hash collisions break signatures\u2019 collision resistance, a different property.',
      },
      {
        q: 'A digital signature is created with the',
        options: [
          "signer\u2019s private key",
          'signer\u2019s public key',
          "receiver\u2019s private key",
          'certification authority\u2019s public key',
        ],
        answer: 0,
        explanation:
          'Step 1: Signing must be possible only by the signer \u2014 so it uses the key only the signer holds. Step 2: Anyone can verify with the matching public key. Step 3: That asymmetry is what delivers non-repudiation. Step 4: The CA\u2019s key signs certificates, which bind identities to public keys.',
      },
      {
        q: 'An attacker silently alters a transmitted mission log. Which property is primarily violated?',
        options: ['Confidentiality', 'Integrity', 'Availability', 'Non-repudiation'],
        answer: 1,
        explanation:
          'Step 1: The log was readable throughout, so confidentiality held. Step 2: The service stayed up, so availability held. Step 3: The data\u2019s trustworthiness \u2014 integrity \u2014 is what tampering breaks. Step 4: Non-repudiation concerns denial of authorship, not alteration in transit.',
      },
      {
        q: 'Kerckhoffs\u2019s principle states that',
        options: [
          'security must depend only on the secrecy of the key, never of the algorithm',
          'algorithms must remain classified to stay secure',
          'longer keys always guarantee secure systems',
          'encryption and hashing are interchangeable operations',
        ],
        answer: 0,
        explanation:
          'Step 1: Assume the adversary knows the full design \u2014 only the key stays secret. Step 2: Published algorithms survive open attack, which is how AES earned trust. Step 3: Key length helps but cannot rescue a broken construction or a leaked key. Step 4: Hashing is one-way and keyless \u2014 never a substitute for encryption.',
      },
    ],
  },
]
