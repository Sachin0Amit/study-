import type { SectionContent } from '../library'

// ============================================================================
// Lesson content for the Data Interpretation & Data Sufficiency aptitude
// sections (apt-q1-s7/s8 of the 'Quantitative Aptitude & Numerical Ability'
// chapter) and the expanded Lasers & Optical Fibres physics chapter
// (phys-lasers-s1/s2/s3). Syllabus scope researched from quantitative-aptitude
// screening patterns and applied-physics curricula — provenance documented in
// research/*.md; product rule: no exam names in UI.
// ============================================================================

export const aptLasersContent: SectionContent[] = [
  // -------------------------------------- apt-q1-s7 · Data Interpretation
  {
    sectionId: 'apt-q1-s7',
    readingTime: 10,
    prerequisites: [
      'Percentages, ratio–proportion and averages (Sections 2 and 3)',
      'Fraction–decimal–percent conversion fluency',
    ],
    intro: 'Data interpretation is the highest-yield block of any engineering selection assessment’s quantitative section: a single table or chart anchors three to five questions, so two minutes spent understanding the data once is repaid across every mark that follows. The formats are predictable — tables, multi-bar and stacked-bar charts, pie charts, line graphs and caselets — and so are the question verbs: share, growth, ratio, average, difference. Nearly every computation is percentage-basing of one kind or another, which means the real skill is identifying the correct base before touching the numbers. Screening papers add one more layer: the numbers are chosen to reward approximation, so a candidate who rounds 4,980 to 5,000 and 19.8% to 20% finishes three sets in the time a precise calculator finishes one. This lesson works through one full table set, one pie chart and one line-chart set in exactly that spirit.',
    objectives: [
      'Base every percentage on the correct total — row, column or grand total — before computing',
      'Read multi-bar and stacked-bar charts, and convert pie sectors between degrees, fractions and percents',
      'Extract average annual growth and ratio-of-slopes comparisons from line charts, separating percentage change from absolute change',
      'Convert caselet narratives into self-built tables, and judge when to approximate or skip a set entirely',
    ],
    concepts: [
      {
        term: 'Percentage-basing on table totals',
        kind: 'method',
        statement: 'Every table question is a fraction in disguise — decide the **base** first: a cell against its row total, a cell against its column total, or a cell against the grand total. “Hardware’s share in 2024” is $\\frac{\\text{Hardware in 2024}}{\\text{Total in 2024}}$ — never the 2021 total, never the four-year company-wide total.',
        detail: 'Write the fraction in words before substituting numbers: most distractors are manufactured by using a nearby but wrong base (a different year’s total, or the row total instead of the column total). Quick self-checks: the shares of one column must add to 100%, and shares of the same row across years can move even when the raw value rises — a falling share with rising revenue is the classic “both true” reading. When two fractions share the same base, compare them by numerators alone; when bases differ, cross-multiply rather than divide: comparing $\\frac{200}{600}$ with $\\frac{230}{750}$ is settled by $200 \\times 750 = 150{,}000$ versus $230 \\times 600 = 138{,}000$ — no division anywhere.',
      },
      {
        term: 'Multi-bar and stacked-bar reading',
        kind: 'method',
        statement: 'In a **grouped (multi-bar)** chart, bars stand side by side within each category, so the eye compares across groups; in a **stacked** bar, segments pile on top of one another, so a category’s value is the *height of its upper boundary*, and the segment’s size is the **difference of consecutive boundaries**.',
        detail: 'The stacked-bar trap: the visually largest top segment is not necessarily the largest category, because segments start at different heights — read boundary differences, not segment prominence. Always check three things before computing: the axis units (crore versus lakh is a factor of 100), any axis break (a bar that looks twice as tall may be far more than twice as large), and whether the bars show absolute values or percentages (a 100%-stacked chart has equal total heights by construction). In grouped charts, draw the comparison the question asks — pairing bars within a group — rather than comparing bar heights across distant groups.',
      },
      {
        term: 'Pie-chart degree conversion',
        kind: 'law',
        statement: 'A pie chart maps the whole to the full circle: $360^{\\circ} = 100\\%$, so $1\\% = 3.6^{\\circ}$ and a sector of angle $\\theta$ is the fraction $\\frac{\\theta}{360^{\\circ}}$ of the total: $$\\text{amount} = \\text{total} \\times \\frac{\\theta}{360^{\\circ}}, \\qquad \\theta = \\frac{\\text{part}}{\\text{total}} \\times 360^{\\circ}.$$',
        detail: 'Memorise the fraction shortcuts and the degree equivalents together: 45° = 12.5% = 1/8, 60° = 16⅔% = 1/6, 90° = 25% = 1/4, 120° = 33⅓% = 1/3, 135° = 37.5% = 3/8, 180° = 50% = 1/2. Converting through fractions (not decimals) keeps the arithmetic mental: a 72° sector of ₹45,000 is $\\frac{72}{360} = \\frac{1}{5}$ of the total, instantly ₹9,000. The manufactured error is treating the angle as a percentage — 72° is 20% of the circle, not 72% — and forgetting that “per cent distribution” charts still need the caption’s grand total to convert shares into amounts.',
      },
      {
        term: 'Line charts: growth, slopes and averages',
        kind: 'method',
        statement: 'Average annual **absolute** growth $= \\frac{\\text{last} - \\text{first}}{\\text{number of intervals}}$; **percentage** growth always divides by the value at the start of the interval. With equal time spacing, the **ratio of slopes equals the ratio of growth rates** — a line twice as steep grows twice as fast in absolute terms.',
        detail: 'Count intervals, not plotted points: five annual points span four years of growth, and dividing by five understates the rate by exactly that factor. The largest absolute rise is rarely the largest percentage rise, because big bases dilute rates — screening sets deliberately place the two answers side by side to catch the confusion. When a paper asks for the average annual *growth rate* over a period, the compound form $\\left(\\frac{\\text{final}}{\\text{initial}}\\right)^{1/n} - 1$ is meant only when stated; otherwise compute the arithmetic average of the year-on-year percentages. On stacked line charts (two series on one axes), compare slopes segment by segment before comparing heights.',
      },
      {
        term: 'Caselets: narrative data into tables',
        kind: 'method',
        statement: 'A **caselet** is a data set told in prose. Convert it immediately into a small table or a set of relations: assign one variable per unknown, translate each sentence into exactly one equation, and only then attempt the questions.',
        detail: 'When the narrative gives only percentages and ratios (no absolute total), assume a convenient base of 100 units — the unknown total cancels out of every share, ratio and percentage question. Example: “a plant makes only items A and B; A is 40% of output; defect rates are 2% on A and 5% on B” becomes a two-row table over 100 units (A = 40, B = 60) giving defects $0.8 + 3.0 = 3.8$, so 3.8% of all units are defective. The classic caselet trap is hidden double-counting — “20% of the women and 30% of the men” needs the men:women split before any blending, which is exactly the weighted-average work of Section 3.',
      },
      {
        term: 'Approximation and set selection',
        kind: 'insight',
        statement: 'Round to factor-friendly numbers **before** multiplying — 19.8% of 25,300 is close enough to $0.20 \\times 25{,}000 = 5{,}000$ when the answer options are spaced 10% apart. When options differ by only 1–2%, the set demands exact work; when they differ by 10% or more, approximation is the intended method.',
        detail: 'Timed-paper triage rules: skip a set when (i) it needs long chained exact computations with tightly clustered options, (ii) the caselet carries more than three interdependent unknowns, or (iii) you have already spent its time budget (roughly one and a half to two minutes per question). Mark it and return on the second pass — DI answers rarely depend on earlier skipped work, so the cost of deferring is near zero. When rounding, control the error direction: rounding one quantity up and the other down is safe when you only need to *eliminate* options; if you must land *between* two options, round both in the same direction and correct at the end.',
      },
    ],
    examples: [
      {
        title: 'A full set on a company revenue table',
        problem: 'A company’s revenue (₹ lakh) by product line over four years:\n\n```text\nProduct line   2021   2022   2023   2024\nHardware        240    300    360    450\nSoftware        160    220    310    420\nServices        200    230    270    330\nTotal           600    750    940   1200\n```\n\n(i) What was Hardware’s share of total revenue in 2024? (ii) By what percent did Software revenue grow from 2021 to 2024? (iii) In which year was Services’ share of total revenue the lowest?',
        steps: [
          { label: 'Step 1', text: 'Read the structure first: rows are product lines, columns are years, and the Total row is the base for every share question — shares are computed **within one column**, against that year’s total.' },
          { label: 'Step 2', text: '(i) Hardware share in 2024 $= \\frac{450}{1200} = \\frac{3}{8} = 37.5\\%$. Simplify before dividing: $450 : 1200 = 3 : 8$, and $\\frac{3}{8} = 0.375$ is a known conversion.' },
          { label: 'Step 3', text: '(ii) Software growth $= \\frac{420 - 160}{160} \\times 100 = \\frac{260}{160} \\times 100 = 162.5\\%$ — the base is the 2021 value, the starting point of the interval, not the average and not the ending value.' },
          { label: 'Step 4', text: '(iii) Services’ share by year: $\\frac{200}{600} = 33.3\\%$, $\\frac{230}{750} = 30.7\\%$, $\\frac{270}{940} = 28.7\\%$, $\\frac{330}{1200} = 27.5\\%$ — strictly falling, so the lowest share falls in **2024** even though the raw revenue rose every single year.' },
        ],
        result: '(i) 37.5%; (ii) 162.5%; (iii) 2024 — Services’ share falls every year while its revenue rises.',
      },
      {
        title: 'A pie-chart household budget',
        problem: 'A household’s monthly budget of ₹72,000 is shown as a pie chart with sector angles: Housing 120°, Food 90°, Transport 60°, Savings 45°, Others 45°. (i) How much goes to Housing? (ii) What percent of the budget is Savings? (iii) What is the ratio of Housing to Food expenditure?',
        steps: [
          { label: 'Step 1', text: 'Check the chart closes: $120 + 90 + 60 + 45 + 45 = 360^{\\circ}$, so no hidden “miscellaneous” remainder is folded into the sectors.' },
          { label: 'Step 2', text: '(i) Housing fraction $= \\frac{120}{360} = \\frac{1}{3}$, so Housing $= 72{,}000 \\times \\frac{1}{3} = ₹24{,}000$. The shortcut list does it instantly: 90° is a quarter, so 120° is a third.' },
          { label: 'Step 3', text: '(ii) Savings: $\\frac{45}{360} = \\frac{1}{8} = 12.5\\%$ — 45° is half of 90°, and half of a quarter is one eighth.' },
          { label: 'Step 4', text: '(iii) Housing : Food $= \\frac{120}{360} : \\frac{90}{360} = 120 : 90 = 4 : 3$ — the common denominator 360 cancels, so ratios of sectors equal ratios of angles.' },
          { label: 'Step 5', text: 'Verify with money: ₹24,000 : ₹18,000 = 4 : 3, and the five amounts $24{,}000 + 18{,}000 + 12{,}000 + 9{,}000 + 9{,}000$ re-add to ₹72,000 — the cheapest possible error check on any pie set.' },
        ],
        result: '(i) ₹24,000; (ii) 12.5%; (iii) 4 : 3.',
      },
      {
        title: 'Line chart: same percentage, different absolute',
        problem: 'Sales of two product models (₹ crore): Model A rose from 40 to 52 to 64 to 76 across 2020–2023; Model B rose from 20 to 26 to 32 to 38 in the same years. (i) What is Model A’s average annual (absolute) growth? (ii) Compare the percentage growth of the two models over the period. (iii) What happens to the absolute gap between them?',
        steps: [
          { label: 'Step 1', text: '(i) Average annual growth of A $= \\frac{76 - 40}{3} = \\frac{36}{3} = ₹12$ crore per year — four plotted points span three intervals, the classic off-by-one trap.' },
          { label: 'Step 2', text: '(ii) Model A: $\\frac{76 - 40}{40} = \\frac{36}{40} = 90\\%$. Model B: $\\frac{38 - 20}{20} = \\frac{18}{20} = 90\\%$. Identical percentage growth — the two lines keep the same relative shape.' },
          { label: 'Step 3', text: 'Slope check: A gains 12 per year, B gains 6 per year, so the slope ratio is $2 : 1$ — A grows twice as fast in absolute terms, exactly as the widening gap between the lines shows.' },
          { label: 'Step 4', text: '(iii) The gap grows from $40 - 20 = ₹20$ crore to $76 - 38 = ₹38$ crore: equal percentage growth on unequal bases widens the absolute difference, which is why “percentage change” and “absolute change” questions sit side by side in the same set.' },
        ],
        result: '(i) ₹12 crore per year; (ii) both grew 90% — equal; (iii) the gap widens from ₹20 crore to ₹38 crore.',
      },
    ],
    keyTakeaways: [
      'Fix the base before computing — cell ÷ its column total for shares, start-of-interval value for growth; every distractor comes from a wrong base.',
      'Pie charts: 360° = 100%, so 1% = 3.6°; know 45° = 12.5%, 60° = 16⅔%, 90° = 25%, 120° = 33⅓%, and convert through fractions, not decimals.',
      'Line charts: count intervals not points, compare growth by ratio of slopes, and never confuse the largest absolute rise with the largest percentage rise.',
      'Turn caselets into tables over a convenient 100-unit base, round before multiplying when options are 10% apart, and skip exact-demanding sets until the second pass.',
    ],
    quiz: [
      {
        q: 'A company’s 2023 revenue was ₹940 lakh in total, of which Software contributed ₹310 lakh, Hardware ₹360 lakh and Services the rest. Software’s share of the year’s revenue, to the nearest whole percent, is:',
        options: ['25%', '29%', '33%', '38%'],
        answer: 2,
        explanation: 'Step 1: The base is the 2023 column total, ₹940 lakh. Step 2: Share $= \\frac{310}{940} \\approx 0.330$. Step 3: To the nearest whole percent that is 33%. Step 4: 38% is Hardware’s share ($\\frac{360}{940}$) and 29% is Services’ ($\\frac{270}{940}$) — reading the wrong row or wrong base supplies the distractors.',
      },
      {
        q: 'In a pie chart of a ₹45,000 monthly expense budget, the education sector subtends 72°. The amount spent on education is:',
        options: ['₹7,200', '₹9,000', '₹10,000', '₹12,500'],
        answer: 1,
        explanation: 'Step 1: 360° represents the whole ₹45,000, so 1° is worth $\\frac{45{,}000}{360} = ₹125$. Step 2: Education $= 72^{\\circ} \\times 125 = ₹9{,}000$. Step 3: Fraction route: $\\frac{72}{360} = \\frac{1}{5}$, and $\\frac{45{,}000}{5} = 9{,}000$. Step 4: ₹7,200 is the trap of treating 72° as 16% instead of converting properly ($1\\% = 3.6^{\\circ}$, so 72° is 20%); ₹10,000 would be an 80° sector.',
      },
      {
        q: 'Over three years, product P’s sales rose from ₹40 crore to ₹76 crore while product Q’s rose from ₹20 crore to ₹38 crore. Which statement is correct?',
        options: ['P grew by a larger percentage than Q', 'Q grew by a larger percentage than P', 'Both grew by the same percentage, but the absolute gap widened', 'Both grew by the same percentage, and the absolute gap stayed the same'],
        answer: 2,
        explanation: 'Step 1: P’s percentage growth $= \\frac{76 - 40}{40} = \\frac{36}{40} = 90\\%$. Step 2: Q’s $= \\frac{38 - 20}{20} = \\frac{18}{20} = 90\\%$ — equal. Step 3: The absolute gap moves from $40 - 20 = 20$ crore to $76 - 38 = 38$ crore, so it widens. Step 4: Equal relative growth on unequal bases always widens the absolute gap — the steeper-looking line is steeper only in absolute terms.',
      },
      {
        q: 'Using sensible rounding, the best estimate of 19.8% of 25,300 is:',
        options: ['4,000', '5,000', '5,500', '6,000'],
        answer: 1,
        explanation: 'Step 1: Round both numbers toward easy factors: 19.8% ≈ 20% and 25,300 ≈ 25,000. Step 2: Compute $0.20 \\times 25{,}000 = 5{,}000$. Step 3: Check the error: the exact value is $0.198 \\times 25{,}300 = 5{,}009$ — within 0.2% of the estimate. Step 4: 5,500 and 6,000 overshoot by 10–20%, far outside the rounding error; when options are spaced that widely, approximation is the intended method.',
      },
    ],
  },

  // ------------------------- apt-q1-s8 · Data Sufficiency & Quantity Comparison
  {
    sectionId: 'apt-q1-s8',
    readingTime: 9,
    prerequisites: [
      'Linear and quadratic equations, including two-variable systems',
      'Number properties: signs, parity, powers and fractions',
    ],
    intro: 'Data sufficiency turns testing inside out: instead of asking for a value, it asks whether the value could be found. Two numbered statements accompany every question, and your job is to decide which statement — or which combination — pins the answer down. Aptitude screening papers favour the format because it punishes auto-pilot solving: the strongest candidates stop computing the moment sufficiency is settled, saving half the time the question appears to demand. The same philosophy powers quantity comparison — Column A versus Column B — where the fourth choice, “cannot be determined”, is correct exactly when the relationship changes across the values the variables are allowed to take. Both formats live or die on traps: negatives, zero, fractions between 0 and 1, and even powers that hide signs.',
    objectives: [
      'Apply the standard sufficiency answer pattern, mapping the five classic options onto the four choices used here',
      'Run the decision tree in order — statement 1 alone, statement 2 alone, both together — without ever solving more than sufficiency requires',
      'Answer quantity comparisons by probing boundary values: negative, zero, fraction, one and a large number',
      'Recognise the four classic traps: negative values, zero, fractions that flip inequalities, and even powers that hide signs',
    ],
    concepts: [
      {
        term: 'The sufficiency question type',
        kind: 'definition',
        statement: 'A data-sufficiency item supplies a question and two numbered statements, and asks which statements determine the answer. The classic five-option pattern — statement 1 alone; statement 2 alone; both together; each alone; neither — is compressed in this course to four choices: **(A)** statement 1 alone is sufficient, **(B)** statement 2 alone is sufficient, **(C) both together are needed**, **(D) each alone is sufficient**.',
        detail: '“Sufficient” means the statements force exactly one answer to the question asked — a unique number for a value question, or a definite YES (or a definite NO) for a yes/no question; a definite negative answer settles a question just as firmly as a positive one. In the full five-option format a fifth choice, “neither even together”, exists; the four-choice adaptation used here simply guarantees the combined statements always settle the question, so read the printed mapping before starting. Two failure modes to avoid: answering the underlying question instead of the sufficiency question, and forgetting that the statements are to be taken as true — you judge whether they *determine* the answer, not whether they are plausible.',
      },
      {
        term: 'The decision tree',
        kind: 'method',
        statement: 'Work in fixed order: **test statement 1 alone** (physically cover statement 2), then **test statement 2 alone**, then combine. If both work alone the answer is (D); if exactly one works alone it is (A) or (B); if neither works alone, combine before answering (C).',
        detail: 'Covering the unused statement with a finger is not a gimmick — statements leak, and half of all errors come from letting statement 2 colour the judgement of statement 1. Keep the survivors: if statement 1 alone narrows x to two candidates, that narrowing is gold when you later combine — you only test the survivors, not all values. The logical obligation behind (C) is strict: you may answer (C) only after showing that *each* statement alone fails; a single missed case that one statement handles alone converts a correct (C) into a trap. Symmetrically, answering (A) or (B) requires the statement to work for every allowed case, not just the first one you tried.',
      },
      {
        term: 'Sufficiency is not solving',
        kind: 'insight',
        statement: 'The question is “could you find it?”, not “what is it?” — once a statement forces a unique answer, stop; the numerical value is irrelevant. Two independent linear equations in two unknowns are sufficient without solving them, and a quadratic with a nonzero discriminant is **not** sufficient unless a statement selects between its two roots.',
        detail: 'The timing dividend is real: in the pen-and-notebook example below, subtracting the two statements settles the pen price without ever computing the notebook price — a sufficiency judgement made in one line. “Insufficient”, likewise, is best proven by counterexample: to show a statement fails, exhibit one allowed case giving YES and another giving NO. Counterexamples, not algebra, are the fast exit. One boundary case deserves respect: a statement that is true for *every* possible case (like “2n is even” for integer n) separates nothing and is therefore never sufficient, no matter how true it sounds.',
      },
      {
        term: 'Quantity comparison format',
        kind: 'definition',
        statement: 'A quantity-comparison item gives **Column A** and **Column B** with shared constraints, and four fixed choices: Column A is greater; Column B is greater; the two are equal; **the relationship cannot be determined** from the information given. The fourth choice is correct precisely when the allowed values produce more than one of the first three outcomes.',
        detail: 'The solving routine: plug one friendly value and note the winner, then hunt for a value that flips or ties the result. If two probes give different winners, the answer is “cannot be determined” and you are finished — a third probe is wasted time. Only when every allowed value gives the same verdict (or all tie) may you choose one of the first three. The most common error is over-claiming: after testing 2 and 3 (both making Column A win), candidates declare Column A greater — but the constraint “x is a real number” also admits −1, 0 and ½, where the verdict may flip. Read the constraint as the exact set of values you are allowed to probe.',
      },
      {
        term: 'The four classic traps',
        kind: 'insight',
        statement: '**Negatives**: $-3 > -5$ and squaring is not order-preserving across signs; **zero**: equal to itself, annihilates products, collapses exponents ($x^0 = 1$); **fractions between 0 and 1**: squaring shrinks them, so $x^2 < x$ — the inequality verdict flips; **even powers**: $x^2 = 25$ admits $x = \\pm 5$, so even powers, absolute values and even roots all hide signs.',
        detail: 'Each trap lives at a specific boundary, which is why the probe list below is short and fixed. Reciprocals add one more flip: for positives, $0 < a < b$ implies $\\frac{1}{a} > \\frac{1}{b}$. Inequalities reverse when multiplied or divided by a negative number: $-2x < 6$ becomes $x > -3$. And respect the root convention: $\\sqrt{25}$ denotes the principal root 5, never −5, while the *equation* $x^2 = 25$ keeps both roots — statements quoting a square root are silently handing you sign information that statements quoting a square are not.',
      },
      {
        term: 'Plug-the-boundaries discipline',
        kind: 'method',
        statement: 'For any comparison over loosely constrained variables, probe in this order: a **positive integer** (usually 2), a **fraction** (½), **zero**, a **negative** (−1 or −2), and a **large number** (10 or 100). The first probe that flips the outcome settles “cannot be determined”; if all agree, look for an algebraic confirmation before committing.',
        detail: 'Why this set: zero kills products and exponents, fractions reverse squaring, negatives reverse powers and inequalities, and large numbers expose asymptotic behaviour — between them they cover all four traps. Probes must respect the constraints: given $0 < x < 1$, zero and negatives are forbidden and the probe set shrinks to ½, 0.9 and 0.99; given “x is a nonzero integer”, ½ drops out. When the quantity involves two variables, vary them independently (x = 2, y = 3 then x = 3, y = 2) — symmetric-looking quantities are exactly where order flips hide.',
      },
    ],
    examples: [
      {
        title: 'Pens and notebooks — both together, and nothing more',
        problem: 'A shop sells only pens and notebooks, each at a fixed whole-rupee price. What is the price of one pen?\n\n(1) 3 pens and 2 notebooks together cost ₹79.\n(2) 5 pens and 2 notebooks together cost ₹117.\n\nChoose: (A) statement 1 alone; (B) statement 2 alone; (C) both together needed; (D) each alone sufficient.',
        steps: [
          { label: 'Step 1', text: 'Cover statement 2. Statement 1 is one equation, $3p + 2n = 79$, in two unknowns: $(p, n) = (21, 8)$ satisfies it ($63 + 16 = 79$), and so does $(19, 11)$ ($57 + 22 = 79$). Two different pen prices — not sufficient.' },
          { label: 'Step 2', text: 'Cover statement 1. Statement 2 alone has the same defect: $5p + 2n = 117$ is satisfied by $(21, 6)$ ($105 + 12 = 117$) and by $(23, 1)$ ($115 + 2 = 117$). Two pen prices again — not sufficient.' },
          { label: 'Step 3', text: 'Combine: subtract statement 1 from statement 2, $(5p + 2n) - (3p + 2n) = 117 - 79$, so $2p = 38$ and $p = ₹19$ — a unique pen price, so together the statements are sufficient.' },
          { label: 'Step 4', text: 'Note what was never computed: the notebook price (₹11) is irrelevant to the question asked, and stopping at sufficiency — the answer is (C) — skipped the second half of the solve entirely.' },
        ],
        result: '(C) — both statements together are sufficient, but neither alone.',
      },
      {
        title: 'Even powers hide the sign',
        problem: 'What is the value of the real number $x$?\n\n(1) $x^2 = 49$.\n(2) $x > 0$.\n\nChoose: (A) statement 1 alone; (B) statement 2 alone; (C) both together needed; (D) each alone sufficient.',
        steps: [
          { label: 'Step 1', text: 'Statement 1 alone: $x^2 = 49$ has **two** real roots, $x = 7$ and $x = -7$. Squaring destroyed the sign, so the value is not unique — not sufficient. The reflex “x = 7” is precisely the trap being tested.' },
          { label: 'Step 2', text: 'Statement 2 alone: $x > 0$ leaves infinitely many candidates — not sufficient.' },
          { label: 'Step 3', text: 'Together: statement 2 selects the positive root, $x = 7$, uniquely — sufficient, so the answer is (C).' },
          { label: 'Step 4', text: 'Generalise: pair $x^2 = 49$ with *any* sign information — $x < 0$, $x > 5$, $x + y > 0$ with $y$ known — and the combination becomes sufficient. “Even power plus one sign fact” is the standard (C) pattern; “even power alone” is the standard trap.' },
        ],
        result: '(C) — together they force $x = 7$; neither statement alone.',
      },
      {
        title: 'Quantity comparison: $x^3$ versus $x$',
        problem: '$x$ is a real number. **Column A:** $x^3$. **Column B:** $x$. Which is greater?',
        steps: [
          { label: 'Step 1', text: 'Probe a positive integer: $x = 2$ gives $8 > 2$ — Column A wins this round.' },
          { label: 'Step 2', text: 'Probe a fraction: $x = \\frac{1}{2}$ gives $\\frac{1}{8} < \\frac{1}{2}$ — Column B wins. The outcome has flipped, so no single verdict can survive.' },
          { label: 'Step 3', text: 'Map the rest quickly: $x = -2$ gives $-8 < -2$ (Column B); $x = -\\frac{1}{2}$ gives $-\\frac{1}{8} > -\\frac{1}{2}$ (Column A); and $x \\in \\{-1, 0, 1\\}$ ties the columns. Every one of the four outcomes occurs.' },
          { label: 'Step 4', text: 'Since more than one outcome occurs across allowed values, the answer is the fourth choice — the relationship **cannot be determined**. Had the constraint been $x > 1$, Column A would win everywhere; had it been $0 < x < 1$, Column B would — the unconstrained version is the trap, and the boundary probes are the defence.' },
        ],
        result: 'Cannot be determined — all four relationships occur for different real $x$.',
      },
    ],
    keyTakeaways: [
      'Sufficiency means the statements force exactly one answer — a definite YES or NO qualifies for yes/no questions; stop computing the moment uniqueness is assured.',
      'Run the decision tree with the unused statement physically covered; never answer (C) until each statement alone has failed, and never (A)/(B) on a single favourable case.',
      'In quantity comparison, two probes with different winners settle “cannot be determined” instantly — probe 2, ½, 0, −1 and 10 in that order, respecting the constraints.',
      'The four traps live at the boundaries: negatives, zero, fractions between 0 and 1, and even powers — test each before declaring a winner.',
    ],
    quiz: [
      {
        q: 'What is the value of $x$?\n\n(1) $5x - 12 = 3x + 4$.\n(2) $x^2 = 100$ and $x < 0$.\n\nOptions: (A) statement 1 alone is sufficient; (B) statement 2 alone is sufficient; (C) both together are needed; (D) each alone is sufficient.',
        options: ['(A) Statement 1 alone', '(B) Statement 2 alone', '(C) Both together needed', '(D) Each alone sufficient'],
        answer: 3,
        explanation: 'Step 1: Statement 1 alone: $5x - 3x = 4 + 12$, so $2x = 16$ and $x = 8$ — a unique value, sufficient. Step 2: Statement 2 alone: $x^2 = 100$ gives $x = \\pm 10$, and $x < 0$ selects $x = -10$ uniquely — sufficient. Step 3: Each statement independently determines $x$, so the answer is (D). Step 4: The trap is stopping at statement 1’s simplicity and never testing statement 2 — the sign condition there is doing real work.',
      },
      {
        q: 'Is the integer $n$ even?\n\n(1) $n^2$ is even.\n(2) $2n$ is even.\n\nOptions: (A) statement 1 alone is sufficient; (B) statement 2 alone is sufficient; (C) both together are needed; (D) each alone is sufficient.',
        options: ['(A) Statement 1 alone', '(B) Statement 2 alone', '(C) Both together needed', '(D) Each alone sufficient'],
        answer: 0,
        explanation: 'Step 1: Statement 1 alone: parity is preserved under multiplication — an odd $n$ would give odd $n^2$ — so $n^2$ even forces $n$ even. A definite YES: sufficient. Step 2: Statement 2 alone: $2n$ is even for **every** integer $n$, so the statement separates nothing — not sufficient. Step 3: Only statement 1 decides, so the answer is (A). Step 4: The trap is reading “2n is even” as evidence about $n$ — statements true for all cases carry zero information.',
      },
      {
        q: 'If $0 < a < 1$, which is greater: **Column A:** $a^2$ or **Column B:** $a$?',
        options: ['Column A is greater', 'Column B is greater', 'The two are equal', 'Cannot be determined'],
        answer: 1,
        explanation: 'Step 1: A number strictly between 0 and 1 shrinks when squared: $0.5^2 = 0.25 < 0.5$. Step 2: Algebraically, $a - a^2 = a(1 - a)$, and both factors are positive when $0 < a < 1$, so $a > a^2$ always. Step 3: Column B is greater for every allowed value — no probe can flip it, so “cannot be determined” is wrong here. Step 4: Without the constraint, $x = 2$ would flip the verdict — the fraction condition is exactly what pins the answer down.',
      },
      {
        q: 'Which is greater: **Column A:** 45% of 80, or **Column B:** 80% of 45?',
        options: ['Column A is greater', 'Column B is greater', 'The two are equal', 'Cannot be determined'],
        answer: 2,
        explanation: 'Step 1: Column A: $0.45 \\times 80 = 36$. Step 2: Column B: $0.80 \\times 45 = 36$. Step 3: The columns are equal — multiplication is commutative, so $x\\%$ of $y$ always equals $y\\%$ of $x$. Step 4: The intuition “a bigger percentage of a bigger number must be bigger” misleads here: the percentage and the base swap exactly, and the products tie.',
      },
    ],
  },

  // --------------------------- phys-lasers-s1 · Lasers & Fiber Optics (overview)
  {
    sectionId: 'phys-lasers-s1',
    readingTime: 9,
    prerequisites: [
      'Photon energy $E = h\\nu$ and energy-level diagrams from atomic physics',
      'Wave optics: interference and standing waves',
    ],
    intro: 'A laser is not a source of energy but a reorganiser of it: atoms that would otherwise glow at random are persuaded to emit in step, and the resulting beam is coherent, monochromatic, directional and intense enough to cut steel. The physics rests on three light–matter interactions — absorption, spontaneous emission and stimulated emission — whose equilibrium balance Einstein analysed in 1917, decades before anyone built a device. Two engineering ingredients turn the physics into light: population inversion, achieved by pumping atoms into a metastable state, and an optical resonator that feeds photons back through the inverted medium until gain beats loss. This section builds the full chain — stimulated emission, inversion, resonator, threshold — and closes with the property set that makes lasers useful, plus a first look at how a glass fibre traps light by total internal reflection. The two sections that follow work through real laser systems and the complete fibre-communication design.',
    objectives: [
      'Distinguish absorption, spontaneous emission and stimulated emission, and state how the Einstein A and B coefficients balance them at equilibrium',
      'Explain population inversion, the role of metastable states, and why at least three energy levels are needed for pumping',
      'Compare three-level and four-level pumping schemes and derive the round-trip threshold condition of an optical resonator',
      'State the four hallmark properties of laser light and describe, qualitatively, how a fibre guides light by total internal reflection',
    ],
    concepts: [
      {
        term: 'Three light–matter interactions',
        kind: 'definition',
        statement: 'For two atomic levels $E_1 < E_2$ separated by $\\Delta E = h\\nu$: **absorption** lifts an atom from 1 to 2 by destroying a photon; **spontaneous emission** drops $2 \\to 1$ creating a photon at a random time, in a random direction and phase; **stimulated emission** drops $2 \\to 1$ when triggered by a passing photon of frequency $\\nu$, producing a **second photon identical in frequency, phase, direction and polarisation** — the trigger emerges with a clone.',
        detail: 'Spontaneous emission is the ordinary glow of a lamp: incoherent, emitted in all directions, from excited states that live only about $10^{-8}$ s. Stimulated emission is the multiplier of optics — one photon in, two indistinguishable photons out — and repeated passes through an inverted medium give $2 \\to 4 \\to 8 \\cdots$, exponential amplification. It is this photon “family”, cloned from a common ancestor and therefore sharing one phase front, that makes laser light coherent: the beam is not merely bright, it is organised.',
      },
      {
        term: 'Einstein A and B coefficients',
        kind: 'law',
        statement: 'With $N_1, N_2$ atoms in the two levels and radiation energy density $\\rho(\\nu)$ at the transition frequency, the rates are: absorption $= B_{12} N_1 \\rho(\\nu)$, stimulated emission $= B_{21} N_2 \\rho(\\nu)$, spontaneous emission $= A_{21} N_2$. Thermal equilibrium (absorption balancing both emission channels) forces $B_{12} = B_{21}$ and $\\frac{A_{21}}{B_{21}} \\propto \\nu^3$ — spontaneous emission dominates ever more strongly as frequency rises.',
        detail: 'Two consequences drive all laser design. First, because $B_{12} = B_{21}$, a photon meeting an excited atom is exactly as likely to trigger emission as a photon meeting a ground-state atom is to be absorbed — which process wins is decided purely by which population is larger, nothing else. Second, the $\\nu^3$ law says that at optical frequencies equilibrium is overwhelmingly spontaneous; making stimulated emission win requires raising the photon density $\\rho(\\nu)$ inside the cavity enormously above its thermal value, which is precisely what the resonator mirrors are for.',
      },
      {
        term: 'Population inversion and metastable states',
        kind: 'definition',
        statement: 'A **population inversion** exists when $N_2 > N_1$ for the lasing pair — more atoms in the upper level than the lower — so that stimulated emission out-runs absorption and the medium amplifies light at $\\nu = \\Delta E/h$. Achieving it requires the upper level to be **metastable**: an excited state with an unusually long lifetime, about $10^{-3}$ s, some $10^{5}$ times longer than an ordinary excited state, in which atoms can accumulate.',
        detail: 'Metastability comes from selection rules: transitions to lower states are quantum-mechanically forbidden or weak, so the state decays slowly and behaves as a storage shelf for excitation. Inversion is impossible to sustain in a strict two-level system pumped at the transition frequency: as $N_2$ approaches $N_1$, absorption and stimulated emission rates become equal and net gain vanishes — at best you equalise the populations. Three or more levels break the deadlock by pumping atoms up through one pair of levels and letting them lase down a different pair, with the metastable shelf as the middle stop.',
      },
      {
        term: 'Pumping: three-level and four-level schemes',
        kind: 'method',
        statement: '**Three-level scheme:** pump atoms from the ground level into a broad absorption band; they drop rapidly and radiationlessly to a metastable level, and lase from there back to the ground level — inversion requires **more than half** of all atoms to sit in the metastable level. **Four-level scheme:** pump to a band, decay to the metastable upper level, lase down to a *lower level that sits above the ground state* and empties to the ground within nanoseconds — so almost every pumped atom contributes to inversion.',
        detail: 'The arithmetic explains the design split. In a three-level laser the lower lasing level is the ground state, which is always crowded, so the pump must excite over 50% of all atoms — demanding intense flashlamp pumping and yielding pulsed operation. In a four-level laser the lower lasing level is nearly empty by construction, so a modest continuous pump holds inversion; that is why four-level systems (helium–neon, Nd:YAG) run continuously on milliwatts to watts where ruby needs kilowatt flashes. The pump source can be light (flashlamp or another laser), an electrical discharge, or, for diode lasers, injected current.',
      },
      {
        term: 'The optical resonator and threshold',
        kind: 'insight',
        statement: 'Two facing mirrors — one fully reflecting ($R_1$), one partially transmitting ($R_2$) — turn the inverted medium into an oscillator: photons traverse repeatedly, and each round trip multiplies the intensity by $R_1 R_2 e^{2gL}$ for medium gain coefficient $g$ and cavity length $L$. **Lasing threshold** is the condition that this factor equal 1: $$g_{\\text{th}} = \\frac{1}{2L}\\ln\\frac{1}{R_1 R_2}.$$ Above threshold, stimulated emission grows until it depletes the inversion, and the partial mirror leaks the output beam.',
        detail: 'The resonator also defines the light it amplifies: the cavity length must hold an integer number of half-wavelengths, $L = q\\lambda/2$, selecting narrow longitudinal modes and narrowing the spectrum; transverse modes shape the beam profile. Feedback raises the photon density — the $\\rho(\\nu)$ of the Einstein balance — by orders of magnitude over a single pass, letting stimulated emission overwhelm spontaneous emission along the axis. The few spontaneously emitted photons that happen to run exactly along the axis are the seeds that get amplified into the beam; the resonator is what makes a weak random event into the dominant output.',
      },
      {
        term: 'The four laser properties and the fibre bridge',
        kind: 'insight',
        statement: '**Coherence** — the photons share one phase front, so interference survives metres of path difference; **directionality** — divergence is diffraction-limited, $\\theta \\sim \\frac{\\lambda}{D}$ for aperture $D$, typically milliradians; **monochromaticity** — spectral width $\\Delta\\lambda$ is a fraction of a nanometre, set by the transition plus cavity modes; **intensity** — power packed into the narrowest angular and spectral slice light can occupy. A glass fibre with core index $n_1$ inside cladding of index $n_2 < n_1$ guides light by **total internal reflection**: rays reaching the core–cladding wall beyond the critical angle $\\sin\\theta_c = \\frac{n_2}{n_1}$ reflect without loss and are channelled for kilometres (Section 3 does the full design).',
        detail: 'Each property is exploited downstream: coherence enables holography (Section 2), directionality and intensity enable cutting and LIDAR, monochromaticity limits pulse spreading in fibres, and diode lasers matched to the fibre windows enable communication links. Contrast a filament lamp: hundreds of nanometres wide, all directions, random phase, brightness limited by the source temperature. The laser wins not by making more energy but by concentrating its power into the narrowest possible region of the space of light — direction, frequency and phase all at once.',
      },
    ],
    examples: [
      {
        title: 'Why pumping is unavoidable: the thermal fraction',
        problem: 'For the red 632.8 nm transition of a neon-based gas laser, estimate the fraction of atoms occupying the upper level in thermal equilibrium at 300 K. ($h = 6.63 \\times 10^{-34}$ J·s, $c = 3.0 \\times 10^{8}$ m/s, $k = 1.38 \\times 10^{-23}$ J/K.)',
        steps: [
          { label: 'Step 1', text: 'Photon energy: $E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^{8})}{632.8 \\times 10^{-9}} = \\frac{1.99 \\times 10^{-25}}{6.33 \\times 10^{-7}} \\approx 3.14 \\times 10^{-19}$ J $\\approx 1.96$ eV.' },
          { label: 'Step 2', text: 'Thermal energy scale: $kT = (1.38 \\times 10^{-23})(300) \\approx 4.14 \\times 10^{-21}$ J $\\approx 0.026$ eV — the level gap is about 76 times larger.' },
          { label: 'Step 3', text: 'Boltzmann ratio: $\\frac{N_2}{N_1} = e^{-\\Delta E/kT} = e^{-75.9}$. Converting with $e^{-x} = 10^{-x/2.303}$: $\\frac{75.9}{2.303} \\approx 33$, so $\\frac{N_2}{N_1} \\approx 10^{-33}$.' },
          { label: 'Step 4', text: 'Interpretation: about one atom in $10^{33}$ occupies the upper level — thermal agitation at room temperature cannot populate a visible transition at all. Every laser must therefore pump atoms upward by design; inversion is an engineered state, never a natural one.' },
        ],
        result: '$N_2/N_1 \\approx e^{-76} \\approx 10^{-33}$ — effectively zero; pumping is indispensable.',
      },
      {
        title: 'The 50% barrier in a three-level laser',
        problem: 'A three-level laser contains $N = 10^{20}$ active atoms, all initially in the ground state, and the lower lasing level **is** the ground state. (i) What minimum number of atoms must occupy the metastable level before any net amplification occurs? (ii) If the pump drives the metastable population to 75% of N, what is the inversion ratio $N_2/N_1$?',
        steps: [
          { label: 'Step 1', text: 'Net gain requires the stimulated rate to exceed the absorption rate: $B_{21}N_2 > B_{12}N_1$, and with $B_{12} = B_{21}$ this reduces to $N_2 > N_1$ — a purely population condition.' },
          { label: 'Step 2', text: '(i) The pumped band empties immediately into the metastable level, so $N_1 + N_2 = N$. Then $N_2 > N_1$ means $N_2 > \\frac{N}{2}$: at least $5 \\times 10^{19}$ atoms must be lifted — the 50% barrier that makes three-level lasers power-hungry.' },
          { label: 'Step 3', text: '(ii) At $N_2 = 0.75N$: $N_1 = 0.25N$, so $\\frac{N_2}{N_1} = \\frac{0.75}{0.25} = 3$, and the inversion density is $N_2 - N_1 = 0.5N = 5 \\times 10^{19}$ atoms contributing to gain.' },
          { label: 'Step 4', text: 'Contrast the four-level case: with the lower lasing level empty ($N_1 \\approx 0$), even $10^{-4}$ of the atoms in the metastable level would give an enormous ratio $N_2/N_1$ — the essential economy of four-level design.' },
        ],
        result: '(i) More than half — $5 \\times 10^{19}$ of the $10^{20}$ atoms; (ii) $N_2/N_1 = 3$, inversion density $0.5N$.',
      },
      {
        title: 'Round-trip threshold gain',
        problem: 'A laser cavity of length $L = 50$ cm has a total reflector ($R_1 = 1.00$) and an output mirror with $R_2 = 0.95$. Ignoring all other losses, find the threshold gain coefficient $g_{\\text{th}}$ of the medium.',
        steps: [
          { label: 'Step 1', text: 'One round trip (length $2L = 1.0$ m) multiplies the intensity by the two mirror reflections and the medium gain: factor $= R_1 R_2\\,e^{2gL} = 0.95\\,e^{g}$, since $2gL = 1.0 \\times g$ here.' },
          { label: 'Step 2', text: 'Threshold is the condition that the round trip neither grows nor decays — the factor equals 1: $R_1R_2\\,e^{2gL} = 1$.' },
          { label: 'Step 3', text: 'Solve: $g_{\\text{th}} = \\frac{1}{2L}\\ln\\frac{1}{R_1R_2} = \\frac{1}{1.0\\ \\text{m}}\\ln\\frac{1}{0.95} = \\ln(1.0526) \\approx 0.051$ m$^{-1}$.' },
          { label: 'Step 4', text: 'Reading: the medium must supply about 5% intensity gain per metre just to balance the 5% leak through the output mirror. Real cavities add absorption and scattering losses, raising the requirement; and since $g_{\\text{th}} \\propto \\frac{1}{L}$, a longer cavity spreads the fixed mirror loss over more gain length and demands less gain per metre.' },
        ],
        result: '$g_{\\text{th}} \\approx 0.051$ m$^{-1}$ — about 5% net gain per metre.',
      },
    ],
    keyTakeaways: [
      'Stimulated emission clones the trigger photon in frequency, phase, direction and polarisation — one photon in, two indistinguishable photons out — while spontaneous emission is random in all four.',
      'Because $B_{12} = B_{21}$, only the populations decide amplification: inversion $N_2 > N_1$, parked on a metastable (millisecond) level, is the precondition for laser action — and it cannot be reached in a two-level system.',
      'Three-level lasers must pump past 50% of all atoms (the lower level is the ground state); four-level systems lase into a nearly empty lower level and run continuously at far lower pump power.',
      'The resonator sets the threshold $g_{\\text{th}} = \\frac{1}{2L}\\ln\\frac{1}{R_1R_2}$ and raises photon density until stimulated emission dominates — the beam inherits coherence, directionality, monochromaticity and intensity, and a fibre can trap it by total internal reflection.',
    ],
    quiz: [
      {
        q: 'The photon produced by stimulated emission is identical to the triggering photon in:',
        options: ['Frequency only', 'Frequency and direction only', 'Frequency, phase, direction and polarisation', 'Phase only'],
        answer: 2,
        explanation: 'Step 1: Energy conservation fixes the same frequency, since the same level gap $\\Delta E = h\\nu$ is crossed. Step 2: The emitted wave adds in phase with the driving field — the process amplifies the existing wave rather than starting a new one. Step 3: It propagates along the same direction and shares the polarisation of the trigger. Step 4: All four attributes are cloned, which is exactly why laser light is coherent while spontaneous emission, random in all four, is not.',
      },
      {
        q: 'A metastable state is crucial for population inversion mainly because it:',
        options: ['Lies lower than the ground state', 'Has a lifetime about $10^{5}$ times longer than ordinary excited states, letting atoms accumulate', 'Emits photons spontaneously at a very high rate', 'Absorbs pump photons faster than any other level'],
        answer: 1,
        explanation: 'Step 1: Ordinary excited states decay in about $10^{-8}$ s — too fast for any population to build up. Step 2: A metastable state survives about $10^{-3}$ s, roughly $10^{5}$ times longer, because transitions out of it are forbidden or weak. Step 3: With pumping maintaining the supply, atoms accumulate until $N_2 > N_1$ — inversion. Step 4: The other options contradict level ordering or the weak-transition nature of metastability.',
      },
      {
        q: 'In a three-level laser, net gain begins only when the fraction of active atoms in the metastable level exceeds:',
        options: ['25%', '50%', '75%', '90%'],
        answer: 1,
        explanation: 'Step 1: The lower lasing level is the ground state, so $N_1 + N_2 = N$ for the atoms that matter. Step 2: Gain needs $N_2 > N_1$, because the stimulated and absorption rate constants are equal ($B_{12} = B_{21}$). Step 3: Therefore $N_2 > N/2$ — more than 50%, the three-level barrier. Step 4: A four-level laser faces no such barrier because its lower lasing level stays nearly empty, which is why it needs far less pump power.',
      },
      {
        q: 'A cavity has $R_1 = 1.0$, $R_2 = 0.90$ and length $L = 25$ cm. The threshold gain coefficient is approximately:',
        options: ['$0.02$ m$^{-1}$', '$0.1$ m$^{-1}$', '$0.2$ m$^{-1}$', '$1.0$ m$^{-1}$'],
        answer: 2,
        explanation: 'Step 1: Apply $g_{\\text{th}} = \\frac{1}{2L}\\ln\\frac{1}{R_1R_2}$ with $2L = 0.5$ m. Step 2: Compute the mirror factor: $\\ln\\frac{1}{0.90} = \\ln(1.111) \\approx 0.105$. Step 3: Divide: $g_{\\text{th}} = \\frac{0.105}{0.5} \\approx 0.21$ m$^{-1}$, closest to $0.2$ m$^{-1}$. Step 4: Compared with the worked example (longer cavity, less leaky mirror), the requirement quadrupled — mirror loss is amortised over less gain length in a short cavity.',
      },
    ],
  },

  // ------------------------ phys-lasers-s2 · Laser Systems & Applications
  {
    sectionId: 'phys-lasers-s2',
    readingTime: 9,
    prerequisites: [
      'Laser action: inversion, pumping schemes and resonator threshold (Section 1)',
      'Reading energy-level diagrams',
    ],
    intro: 'Section 1 built the machinery; this section visits the systems that implement it. The ruby laser — historically the first, in 1960 — shows a three-level, flashlamp-pumped design and its characteristic spiking output. The helium–neon tube is the textbook four-level gas laser, in which a clever resonant transfer between helium and neon levels buys continuous, exquisitely narrow red light. Semiconductor diode lasers replace atomic levels with bands, converting electrical current directly into photons at efficiencies no other family matches — they are the source inside every fibre transmitter and every optical drive. We close with one-paragraph profiles of CO₂ and Nd:YAG, the industrial workhorses, and a survey of applications that exploit the beam’s concentration of power: cutting and welding, retinal and corneal surgery, holography, fibre-communication sources and LIDAR ranging.',
    objectives: [
      'Trace the ruby laser’s energy-level route and explain its pulsed, spiking output at 694.3 nm',
      'Explain how resonant transfer from metastable helium sustains continuous 632.8 nm output in the He–Ne four-level system',
      'Describe electron–hole recombination, heterojunction confinement and the direct-bandgap requirement in semiconductor diode lasers',
      'Relate beam power density and coherence to applications: cutting and welding, eye surgery, holography, communication sources and LIDAR ranging',
    ],
    concepts: [
      {
        term: 'The ruby laser (three-level, pulsed)',
        kind: 'definition',
        statement: 'Ruby is sapphire ($\\text{Al}_2\\text{O}_3$) doped with about 0.05% $\\text{Cr}^{3+}$. A xenon **flashlamp** pumps chromium ions from the ground state into broad blue–green absorption bands (near 400 nm and 550 nm); they decay within microseconds, radiationlessly, to the $^{2}E$ **metastable** level (lifetime $\\sim 3$ ms), and lasing runs from there down to the ground state at **694.3 nm** (deep red).',
        detail: 'It is the archetypal three-level system: the lower lasing level is the ground state, so more than half of all chromium ions must be elevated before gain appears — demanding intense flash pumping and producing output in intense **spikes** rather than a smooth pulse. Each spike is one cycle of relaxation oscillation: the flash builds inversion over milliseconds, a stimulated cascade drains the metastable population in a burst, pumping rebuilds it, and the cycle repeats — visible as the classic spiked output trace. Pulse energies reach joules, but the duty cycle is low; the same physics returns in Section 1’s threshold language, with the pump far above threshold for most of the flash.',
      },
      {
        term: 'The helium–neon laser (four-level, continuous)',
        kind: 'definition',
        statement: 'A discharge tube holds helium and neon (about 10 : 1) at low pressure. Electrons excite helium to its long-lived **metastable** levels ($2^{3}S$ at 19.8 eV, $2^{1}S$ at 20.6 eV); collisions transfer this energy **resonantly** to neon levels of almost identical energy (the $2s$ and $3s$ families), which become the upper lasing levels. Neon then lases on several lines — $3s \\to 2p$ at **632.8 nm**, $2s \\to 2p$ at 1.15 µm and $3s \\to 3p$ at 3.39 µm — while the lower levels drain toward the ground state within nanoseconds.',
        detail: 'Why the helium at all? Direct electron excitation of the needed neon levels is inefficient; helium metastables act as a selective energy reservoir that matches only the *upper* laser levels of neon, never the lower ones — a kinetic trick that builds the inversion in. The $2p$ lower level empties fast, so a small population difference suffices: continuous-wave milliwatt output at 632.8 nm with a very narrow line. The cavity mirrors, by their wavelength-dependent coatings, decide which of the competing lines actually lases — normally the red 632.8 nm. Coherence lengths of tens of centimetres make the red He–Ne beam the classic tool for alignment, interferometry and teaching-lab holography.',
      },
      {
        term: 'The semiconductor diode laser',
        kind: 'definition',
        statement: 'A heavily doped p–n junction under strong forward bias injects electrons and holes into a thin active region; **recombination** across the bandgap emits photons of energy $\\approx E_g$, at $\\lambda \\approx \\frac{hc}{E_g}$ (about 860 nm for GaAs). Above a threshold current the recombination becomes stimulated, and the cleaved crystal facets — a natural mirror pair a few hundred micrometres apart — complete the resonator. A **heterojunction**, a narrow-gap active layer sandwiched between wide-gap cladding layers (GaAs between AlGaAs), confines both carriers and light, cutting the threshold current by orders of magnitude.',
        detail: 'The band structure decides everything: **direct bandgap** semiconductors (GaAs, InGaAsP, InP) conserve momentum across the gap and recombine radiatively with high efficiency, while indirect-gap silicon and germanium recombine mostly through traps and heat — which is why diode lasers are III–V compounds. Composition sets the wavelength to match the fibre windows: GaAs near 850 nm, InGaAsP alloys covering 1310 and 1550 nm. Wall-plug efficiency tops 30–50%, the device is the size of a grain of salt, the modulation is direct (current to light at gigahertz rates) and the price at scale is pennies — the combination that won optical communications.',
      },
      {
        term: 'CO₂ and Nd:YAG — the industrial workhorses',
        kind: 'insight',
        statement: 'The **CO₂ laser** lases on vibrational–rotational transitions of the CO₂ molecule near **10.6 µm** (and 9.6 µm), pumped by a gas discharge in which nitrogen again plays resonant carrier — its first vibrational level matches the CO₂ upper level — while helium depopulates the lower level and cools the gas. The **Nd:YAG laser** uses Nd³⁺ ions in yttrium-aluminium garnet: a four-level system lasing at **1064 nm**, pumped by flashlamp or infrared diodes into broad bands, storing energy in a 230 µs metastable level that is ideal for Q-switched pulses.',
        detail: 'CO₂ lasers deliver the highest continuous powers of the gas family — kilowatt class for cutting and welding metals, polymers and ceramics, because organics absorb the 10.6 µm wavelength strongly. Nd:YAG’s 1064 nm light transmits through fibre optics and its pulses (or the frequency-doubled 532 nm green output) serve marking, drilling, range-finding and surgery. Both systems repeat the He–Ne lesson at higher power: choose a pumping partner whose energy levels match your upper laser level and not your lower one.',
      },
      {
        term: 'Applications: concentration of power',
        kind: 'method',
        statement: 'A laser’s usefulness is often plain power density: focusing power $P$ to a spot of radius $w$ gives intensity $$I = \\frac{P}{\\pi w^2}$$ — a 2 kW beam focused to 0.2 mm diameter reaches $\\sim 6 \\times 10^{10}$ W/m², enough to melt or vaporise any material locally. **Cutting and welding** steer that spot with galvanometer mirrors and blow the molten material away with a gas jet; the heat-affected zone is narrower than any torch or arc can produce.',
        detail: 'In **medicine**, the eye is a natural optical link: the cornea and lens focus a low-power beam onto the retina, where pigment absorbs it, so retinal tears are welded shut by photocoagulation in milliseconds; pulsed ultraviolet lasers ablate corneal tissue with sub-micron precision for refractive reshaping, and keratometry — measuring the cornea’s curvature for lens fitting — is now routinely done by laser scanning. In **LIDAR**, a short pulse’s time of flight measures distance, $d = \\frac{ct}{2}$, and scanning the beam builds three-dimensional maps; the beam’s milliradian divergence keeps the return detectable over kilometres. In every case the recipe is the same three factors — power, area, time — and the laser’s contribution is extreme values of each.',
      },
      {
        term: 'Holography and the communication source',
        kind: 'method',
        statement: '**Recording:** split the laser beam; one part (the **reference**) shines directly on a photographic plate while the other reflects off the object — the plate stores their **interference fringes**, encoding both the amplitude *and the phase* of the object’s scattered wave. **Reconstruction:** illuminate the developed plate with the reference beam again, and the fringes diffract it into a faithful copy of the object’s entire wavefront — a three-dimensional image with full parallax.',
        detail: 'Only coherence makes this possible: the path difference between object and reference arms must stay within the laser’s coherence length — centimetres to metres for a laser, micrometres for a lamp — which is why practical holography waited for the laser. In communications, the diode laser is the transmitter: current-modulated at gigabit rates and launched into a single-mode fibre at 1310 or 1550 nm, where the fibre’s attenuation minimum (Section 3) carries the signal a hundred kilometres between amplifiers. The laser’s narrow linewidth limits wavelength spreading along the link, extending reach; its direct modulability removes any need for an external shutter.',
      },
    ],
    examples: [
      {
        title: 'Photons in a ruby pulse',
        problem: 'A ruby laser emits a 1.0 J pulse at 694.3 nm. (i) What is the energy of one photon, in joules and electron-volts? (ii) How many photons does the pulse contain? ($h = 6.63 \\times 10^{-34}$ J·s, $c = 3.0 \\times 10^{8}$ m/s, $1\\ \\text{eV} = 1.60 \\times 10^{-19}$ J.)',
        steps: [
          { label: 'Step 1', text: 'Photon energy: $E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^{8})}{694.3 \\times 10^{-9}} = \\frac{1.99 \\times 10^{-25}}{6.94 \\times 10^{-7}} \\approx 2.86 \\times 10^{-19}$ J.' },
          { label: 'Step 2', text: 'In electron-volts: $\\frac{2.86 \\times 10^{-19}}{1.60 \\times 10^{-19}} \\approx 1.79$ eV — squarely in the red visible band (roughly 1.6–2.0 eV).' },
          { label: 'Step 3', text: 'Photon count: $N = \\frac{1.0\\ \\text{J}}{2.86 \\times 10^{-19}\\ \\text{J}} \\approx 3.5 \\times 10^{18}$ photons in the pulse.' },
          { label: 'Step 4', text: 'Each stimulated emission event adds exactly one photon, so building this pulse needs of order $10^{18}$ stimulated decays — which is why the flashlamp must dump joules of pump energy into the rod in under a millisecond.' },
        ],
        result: '(i) $2.86 \\times 10^{-19}$ J $\\approx 1.79$ eV; (ii) $\\approx 3.5 \\times 10^{18}$ photons.',
      },
      {
        title: 'Power density at a cutting spot',
        problem: 'A 2.0 kW industrial laser is focused to a circular spot of diameter 0.20 mm. (i) What is the intensity at the spot? (ii) How does it compare with bright sunlight (about 1 kW/m²)?',
        steps: [
          { label: 'Step 1', text: 'Spot radius: $w = 0.10$ mm $= 1.0 \\times 10^{-4}$ m, so the area is $A = \\pi w^2 = \\pi \\times 10^{-8}\\ \\text{m}^2 \\approx 3.14 \\times 10^{-8}$ m².' },
          { label: 'Step 2', text: 'Intensity: $I = \\frac{P}{A} = \\frac{2000}{3.14 \\times 10^{-8}} \\approx 6.4 \\times 10^{10}$ W/m².' },
          { label: 'Step 3', text: 'Comparison: $\\frac{6.4 \\times 10^{10}}{1 \\times 10^{3}} \\approx 6 \\times 10^{7}$ — tens of millions of times the intensity of sunlight.' },
          { label: 'Step 4', text: 'At such intensity, absorbed energy exceeds any material’s vaporisation enthalpy within microseconds: cutting, drilling and welding are simply *delivery* — power divided by area divided by time — which is why beam quality (how tightly the beam can be focused) matters as much as raw watts.' },
        ],
        result: '(i) $\\approx 6.4 \\times 10^{10}$ W/m²; (ii) about $6 \\times 10^{7}$ times sunlight.',
      },
      {
        title: 'LIDAR time of flight',
        problem: 'A surveying LIDAR fires a 5 ns pulse and detects the return 3.0 µs later. How far away is the target? Cross-check: what return time corresponds to a 120 m target?',
        steps: [
          { label: 'Step 1', text: 'The pulse travels to the target **and back**, so the distance is $d = \\frac{ct}{2}$ — forgetting the factor of 2 is the echo mistake that doubles every answer.' },
          { label: 'Step 2', text: 'With $t = 3.0 \\times 10^{-6}$ s: $d = \\frac{(3.0 \\times 10^{8})(3.0 \\times 10^{-6})}{2} = \\frac{900}{2} = 450$ m.' },
          { label: 'Step 3', text: 'Reverse check: $t = \\frac{2d}{c} = \\frac{2 \\times 120}{3.0 \\times 10^{8}} = 8.0 \\times 10^{-7}$ s $= 0.8$ µs for 120 m.' },
          { label: 'Step 4', text: 'The 5 ns pulse width limits range resolution: light travels $3.0 \\times 10^{8} \\times 5 \\times 10^{-9} = 1.5$ m per pulse width, giving 0.75 m two-way resolution — fine for terrain mapping, and the beam’s milliradian divergence spreads only about 0.45 m over the 450 m range.' },
        ],
        result: '450 m; a 120 m target returns the echo in 0.8 µs.',
      },
    ],
    keyTakeaways: [
      'Ruby: three-level, flashlamp-pumped into broad Cr³⁺ bands, millisecond $^{2}E$ metastable shelf, lases at 694.3 nm in relaxation-oscillation spikes.',
      'He–Ne: helium metastables resonantly pump only neon’s upper levels — a four-level design that runs continuously at 632.8 nm on milliwatts.',
      'Diode lasers: direct-bandgap recombination at a heterojunction, wavelength set by bandgap (near 850/1310/1550 nm), directly current-modulated — the communication source.',
      'Applications follow the beam’s concentration: $I = \\frac{P}{\\pi w^2}$ for cutting and surgery, coherence for holography, $d = \\frac{ct}{2}$ for LIDAR — pick the property the job needs.',
    ],
    quiz: [
      {
        q: 'The spiking (relaxation-oscillation) output of a ruby laser arises because:',
        options: ['The flashlamp flickers at the same rate', 'Inversion builds up, is suddenly drained by a burst of stimulated emission, then rebuilds', 'The mirrors vibrate mechanically during the flash', 'Helium atoms collide with neon atoms in the tube'],
        answer: 1,
        explanation: 'Step 1: The xenon flash drives inversion upward over milliseconds while the metastable level stores atoms. Step 2: Once gain crosses threshold, a stimulated cascade drains the metastable population in a sharp spike. Step 3: Pumping then rebuilds the inversion and the cycle repeats — a relaxation oscillation, one spike per cycle. Step 4: The flashlamp, the mirrors and (absent) helium play no role in setting the cycle; it is the population dynamics of the three-level scheme.',
      },
      {
        q: 'In a helium–neon laser, the helium gas mainly serves to:',
        options: ['Lase itself in the green', 'Cool the discharge tube', 'Transfer excitation energy resonantly to neon’s upper lasing levels through its metastable states', 'Absorb the competing 3.39 µm line'],
        answer: 2,
        explanation: 'Step 1: Electron impact populates helium’s metastable levels at 19.8 and 20.6 eV. Step 2: These match neon’s $2s$ and $3s$ upper lasing levels almost exactly, so collisions hand over the energy selectively. Step 3: Because no helium level matches neon’s lower laser levels, the transfer builds the inversion — helium is a selective pump, not the lasing atom. Step 4: Neon does the lasing (632.8 nm among other lines); the gas mixture does help cool the discharge, but that is not its principal role.',
      },
      {
        q: 'A GaAs diode laser has bandgap $E_g = 1.44$ eV. Its emission wavelength is nearest to:',
        options: ['632.8 nm', '694.3 nm', '860 nm', '1310 nm'],
        answer: 2,
        explanation: 'Step 1: Recombination emits a photon of energy $E_g$, so $\\lambda = \\frac{hc}{E_g}$; the shortcut is $\\lambda(\\text{nm}) \\approx \\frac{1240}{E_g(\\text{eV})}$. Step 2: $\\lambda \\approx \\frac{1240}{1.44} \\approx 861$ nm. Step 3: The nearest option is 860 nm — the near-infrared GaAs line. Step 4: The 1310 and 1550 nm windows need the smaller bandgaps of InGaAsP alloys (below 1 eV); 632.8 and 694.3 nm belong to the He–Ne and ruby systems, not to diodes.',
      },
      {
        q: 'A hologram differs fundamentally from a photograph because it records:',
        options: ['Only brightness, but on a larger plate', 'Both amplitude and phase of the object wave, via interference with a reference beam', 'Three separate colours for stereo viewing', 'A series of time-separated exposures on one plate'],
        answer: 1,
        explanation: 'Step 1: A photographic plate records only time-averaged intensity — amplitude squared — and discards phase. Step 2: In holography the object wave interferes with a coherent reference beam. Step 3: The fringe contrast encodes amplitude and the fringe geometry encodes phase, so the whole wavefront is stored. Step 4: Re-illuminating with the reference beam reconstructs that wavefront complete with parallax — and the enabling requirement is coherence, which is why holography is a laser application.',
      },
    ],
  },

  // ------------------ phys-lasers-s3 · Optical Fibres: Principles & Systems
  {
    sectionId: 'phys-lasers-s3',
    readingTime: 10,
    prerequisites: [
      'Ray optics: Snell’s law and total internal reflection',
      'Laser sources and their wavelengths (Sections 1 and 2)',
    ],
    intro: 'An optical fibre is a light pipe built from one of physics’ oldest tricks: total internal reflection. A core of refractive index $n_1$ sheathed in a cladding of slightly lower index $n_2$ traps rays that arrive steeply enough, and modern silica is so transparent that a guided signal loses only a few percent per kilometre — a window pane of equivalent purity would be kilometres thick before dimming comparably. This section develops the design arithmetic: critical and acceptance angles, the numerical aperture that measures light-gathering power, the V-number that counts a fibre’s modes and controls the single-mode condition, and the decibel bookkeeping of attenuation across the three transmission windows. We close by contrasting step-index and graded-index designs through the modal-dispersion problem that separates them, and by assembling the pieces into a complete link — source, fibre, detector.',
    objectives: [
      'Compute critical angles, acceptance angles and numerical aperture from the core and cladding indices',
      'Count modes with the V-number and apply the single-mode condition $V < 2.405$',
      'Contrast step-index and graded-index fibres and explain why the parabolic profile suppresses modal dispersion',
      'Compute attenuation in decibels over a link and place a system correctly in the 850, 1310 and 1550 nm windows',
    ],
    concepts: [
      {
        term: 'Total internal reflection and the critical angle',
        kind: 'law',
        statement: 'A ray travelling in the core ($n_1$) that meets the core–cladding boundary at an incidence angle (measured from the normal) exceeding the **critical angle** $\\theta_c$ is totally reflected with no transmission loss, where $$\\sin\\theta_c = \\frac{n_2}{n_1} \\quad (n_2 < n_1).$$ Rays shallower than $\\theta_c$ refract into the cladding and are lost within a few bounces.',
        detail: 'Internalise the geometry: a ray making angle $\\phi$ with the fibre axis strikes the wall at $90^{\\circ} - \\phi$ from the normal, so nearly axial rays reflect most easily. Because the two indices differ by only a few percent ($n_1 \\approx 1.5$, $n_2 \\approx 1.47$), $\\theta_c$ is large — about 78° — meaning guided rays travel almost parallel to the axis, zig-zagging shallowly. The cladding, not air, sets the critical angle, which is why fibres are specified by the index pair $(n_1, n_2)$; the cladding also protects the guiding interface, since a bare core in air would guide differently and leak at every fingerprint.',
      },
      {
        term: 'Acceptance angle and numerical aperture',
        kind: 'definition',
        statement: 'Not every external ray can be guided: the **acceptance cone** is the set of launch directions that refract into the core and then strike the wall beyond $\\theta_c$. Its half-angle $\\theta_{max}$ (measured in air) satisfies $$NA = \\sin\\theta_{max} = \\sqrt{n_1^2 - n_2^2},$$ the **numerical aperture** — the fibre’s light-gathering power, defined exactly as for a lens.',
        detail: 'The formula is the composition of two Snell events: refraction at the flat entry face plus the total-internal-reflection condition at the wall, which combine (with air outside) into $\\sin^2\\theta_{max} = n_1^2 - n_2^2$. A bigger index difference gives a bigger NA and easier launching — but also more modal dispersion, so designers trade the two. Example numbers: $n_1 = 1.50$, $n_2 = 1.47$ give $NA \\approx 0.30$ and an acceptance half-angle near 17°. Large-NA fibres (0.4 and above) are built for medical endoscopes that must collect light from poor sources; long-haul single-mode fibres use NA near 0.1 to control dispersion.',
      },
      {
        term: 'The V-number and mode count',
        kind: 'law',
        statement: 'A fibre of core radius $a$ guiding light of wavelength $\\lambda$ with numerical aperture NA supports a number of guided **modes** governed by the dimensionless $$V = \\frac{2\\pi a}{\\lambda}\\,NA.$$ A multimode step-index fibre carries about $$M \\approx \\frac{V^2}{2}$$ modes, while the fibre guides only the fundamental mode when $$V < 2.405$$ — the **single-mode condition**.',
        detail: 'Physical reading: $V$ compares the core size with the wavelength — a wide waveguide at short wavelength holds many field patterns, exactly as a wide duct holds many acoustic standing waves. Each mode travels at its own group velocity, and their spread is modal dispersion. Numbers: $a = 25$ µm with $NA = 0.30$ at 850 nm gives $V \\approx 55$ and $M \\approx 1500$ — thoroughly multimode. Satisfying $V < 2.405$ at 1310 nm demands $a \\lesssim 1.7$ µm at that NA; in practice single-mode fibres use $NA \\approx 0.1$ with $a \\approx 4$–5 µm. Since $M \\propto V^2 \\propto \\lambda^{-2}$, longer wavelengths squeeze fewer modes into the same core.',
      },
      {
        term: 'Step-index versus graded-index fibre',
        kind: 'method',
        statement: 'A **step-index** fibre has a uniform core index with an abrupt step to $n_2$; a **graded-index** fibre smooths the profile — ideally parabolic, $n(r)$ falling from the axis to the cladding as $\\sqrt{1 - 2\\Delta(r/a)^2}$ with $\\Delta = \\frac{n_1 - n_2}{n_1}$. The graded profile bends off-axis rays back toward the axis: they travel **farther but faster** (through lower index near the periphery), so all ray paths arrive in a bundle instead of a smear.',
        detail: 'The modal-dispersion arithmetic: in a step-index multimode fibre the steepest ray path exceeds the axial path by the factor $\\frac{n_1}{n_2}$, spreading a pulse by roughly $\\frac{n_1 \\Delta}{c}$ per unit length — about 100 ns per kilometre for $n_1 = 1.5$, $\\Delta = 0.02$, which caps the bandwidth severely. The parabolic profile equalises transit times to first order, cutting the spreading by two to three orders of magnitude (well under 1 ns/km); graded-index multimode fibre with a 50 µm core therefore serves short building links, while single-mode fibre — which removes intermodal dispersion entirely by carrying one mode — owns the long haul.',
      },
      {
        term: 'Attenuation and the transmission windows',
        kind: 'law',
        statement: 'Fibre loss is quoted in decibels per kilometre: $$\\alpha = \\frac{10}{L}\\log_{10}\\frac{P_{in}}{P_{out}} \\quad (\\text{dB/km}),$$ so the output power follows $P_{out} = P_{in} \\times 10^{-\\alpha L/10}$. Silica’s loss spectrum leaves three usable **windows**: about 850 nm (first window, 2–3 dB/km), 1310 nm (second, near 0.4 dB/km and near-zero material dispersion) and 1550 nm (third, the minimum near 0.2 dB/km).',
        detail: 'The loss floor’s origins: Rayleigh scattering from frozen-in density fluctuations falls as $\\lambda^{-4}$, favouring long wavelengths, while infrared absorption rises steeply past about 1.6 µm — the 1550 nm minimum sits in the crossover. **Material dispersion** — the refractive index itself depends on wavelength, so the different wavelengths inside a pulse travel at different speeds — crosses zero for silica near 1310 nm. **Waveguide dispersion** — the core geometry confines long and short wavelengths differently, adding a spread of the same order — can be shaped by design to shift the *total* zero-dispersion point from 1310 nm to 1550 nm (dispersion-shifted fibre), marrying the loss minimum to the dispersion minimum.',
      },
      {
        term: 'Anatomy of a fibre link',
        kind: 'method',
        statement: 'A point-to-point link runs:\n\n```text\nelectrical input → driver/modulator → optical source (laser diode or LED)\n   → fibre (splices & connectors; optical amplifiers every ~80–100 km on long routes)\n   → photodetector (PIN or avalanche photodiode) → receiver → electrical output\n```\n\nThe **power budget** checks each stage: launched power minus (fibre loss $\\alpha L$ plus splice and connector losses) must exceed the detector’s minimum sensitivity.',
        detail: 'Reading the diagram left to right is rereading this chapter: the source’s wavelength must sit in a window (Sections 1–2), the fibre’s NA must accept the source’s emission cone, and the V-number decides mode behaviour and hence bandwidth — the detector’s responsivity then sets how little light is enough. Sample budget: a 0 dBm (1 mW) launch and a −25 dBm sensitivity allow 25 dB of loss, that is, 125 km at 0.2 dB/km before amplification. Every decibel is a factor $10^{1/10} \\approx 1.26$ in power; losses add in dB while power ratios multiply — the whole reason the dB scale exists.',
      },
    ],
    examples: [
      {
        title: 'Numerical aperture of a step-index fibre',
        problem: 'A step-index fibre has $n_1 = 1.50$ and $n_2 = 1.47$. Find (i) the critical angle at the core–cladding boundary, (ii) the numerical aperture and the acceptance half-angle in air, and (iii) whether a ray launched at 10° from the axis (in air) is guided.',
        steps: [
          { label: 'Step 1', text: '(i) Critical angle: $\\sin\\theta_c = \\frac{n_2}{n_1} = \\frac{1.47}{1.50} = 0.98$, so $\\theta_c = \\sin^{-1}(0.98) \\approx 78.5^{\\circ}$ — rays must strike the wall within $11.5^{\\circ}$ of grazing, i.e. travel nearly parallel to the axis.' },
          { label: 'Step 2', text: '(ii) $NA = \\sqrt{n_1^2 - n_2^2} = \\sqrt{2.250 - 2.161} = \\sqrt{0.089} \\approx 0.30$, and the acceptance half-angle is $\\theta_{max} = \\sin^{-1}(0.30) \\approx 17.4^{\\circ}$.' },
          { label: 'Step 3', text: '(iii) A launch at 10° is inside the $\\pm 17.4^{\\circ}$ cone, so it refracts into the core and strikes the wall beyond $\\theta_c$ — guided. A ray at 25° would exceed the cone and leak into the cladding after a few bounces.' },
          { label: 'Step 4', text: 'Consistency check: the two conditions are one physics. Snell’s law at the entry face composed with the critical-angle condition at the wall is exactly $\\sin^2\\theta_{max} = n_1^2 - n_2^2$ — the acceptance cone is the TIR condition seen from outside the fibre.' },
        ],
        result: '$\\theta_c \\approx 78.5^{\\circ}$; $NA \\approx 0.30$ with $\\theta_{max} \\approx 17.4^{\\circ}$; the 10° ray is guided.',
      },
      {
        title: 'V-number and the single-mode boundary',
        problem: 'A fibre has core radius $a = 25$ µm and $NA = 0.30$. (i) How many modes propagate at $\\lambda = 850$ nm? (ii) What core radius would make it single-mode at 1310 nm at the same NA? (iii) What happens to the mode count at 1550 nm for the original fibre?',
        steps: [
          { label: 'Step 1', text: '(i) $V = \\frac{2\\pi a}{\\lambda}NA = \\frac{2\\pi \\times 25\\ \\mu\\text{m}}{0.85\\ \\mu\\text{m}} \\times 0.30$: first $\\frac{2\\pi \\times 25}{0.85} = \\frac{157.1}{0.85} \\approx 184.8$, so $V \\approx 184.8 \\times 0.30 \\approx 55.4$.' },
          { label: 'Step 2', text: 'Mode count: $M \\approx \\frac{V^2}{2} = \\frac{55.4^2}{2} \\approx \\frac{3069}{2} \\approx 1535$ — deeply multimode.' },
          { label: 'Step 3', text: '(ii) Single-mode demands $V < 2.405$, so $a < \\frac{2.405\\,\\lambda}{2\\pi NA} = \\frac{2.405 \\times 1.31\\ \\mu\\text{m}}{2\\pi \\times 0.30} \\approx \\frac{3.15}{1.885} \\approx 1.7$ µm — a drastic shrink from 25 µm (practical single-mode fibre instead relaxes NA to about 0.1, allowing a 4–5 µm core).' },
          { label: 'Step 4', text: '(iii) At 1550 nm: $V = \\frac{2\\pi \\times 25}{1.55} \\times 0.30 \\approx 30.4$, so $M \\approx \\frac{30.4^2}{2} \\approx 460$ — the mode count falls with $\\lambda^{-2}$, since $M \\propto V^2$ and $V \\propto \\lambda^{-1}$: longer wavelengths squeeze fewer modes into the same core.' },
        ],
        result: '(i) $V \\approx 55$, about 1,500 modes; (ii) $a \\lesssim 1.7$ µm; (iii) $V \\approx 30$, about 460 modes.',
      },
      {
        title: 'Attenuation budget over a 20 km link',
        problem: 'A 1550 nm link launches 1.0 mW into fibre with $\\alpha = 0.2$ dB/km. The run is 20 km with two splices losing 0.1 dB each and one connector pair losing 0.5 dB. (i) What is the total loss in dB? (ii) What power reaches the detector? (iii) Roughly how much fibre (ignoring the discrete losses) would drop the power to 1 µW?',
        steps: [
          { label: 'Step 1', text: '(i) Losses add in decibels: fibre $0.2 \\times 20 = 4.0$ dB, splices $2 \\times 0.1 = 0.2$ dB, connector $0.5$ dB — a total of $4.7$ dB.' },
          { label: 'Step 2', text: '(ii) $P_{out} = P_{in} \\times 10^{-\\text{loss}/10} = 1.0\\ \\text{mW} \\times 10^{-0.47}$. Since $10^{0.47} \\approx 2.95$, we get $P_{out} \\approx \\frac{1}{2.95} \\approx 0.34$ mW.' },
          { label: 'Step 3', text: '(iii) The power must fall by a factor $\\frac{1\\ \\text{mW}}{1\\ \\mu\\text{W}} = 1000$, which is 30 dB. At 0.2 dB/km that requires $L = \\frac{30}{0.2} = 150$ km of fibre.' },
          { label: 'Step 4', text: 'Check the dB arithmetic: $0.34$ mW is $-4.7$ dBm, exactly the launch power in dBm minus the 4.7 dB loss — and comfortably above typical receiver sensitivities near $-30$ dBm, so this link has margin to spare.' },
        ],
        result: '(i) 4.7 dB; (ii) about 0.34 mW; (iii) about 150 km of fibre (30 dB).',
      },
    ],
    keyTakeaways: [
      'Guidance is total internal reflection: $\\sin\\theta_c = \\frac{n_2}{n_1}$ at the wall, seen from outside as the acceptance cone with $NA = \\sin\\theta_{max} = \\sqrt{n_1^2 - n_2^2}$.',
      'The V-number $V = \\frac{2\\pi a}{\\lambda}NA$ tells the whole mode story: $M \\approx \\frac{V^2}{2}$ modes in step-index multimode fibre, and $V < 2.405$ is the single-mode boundary.',
      'Graded-index fibres bend rays through a parabolic index profile so all paths arrive nearly together, cutting modal dispersion from roughly 100 ns/km to well under 1 ns/km; single-mode removes it entirely.',
      'Attenuation adds in decibels, $\\alpha = \\frac{10}{L}\\log_{10}\\frac{P_{in}}{P_{out}}$, across windows at 850, 1310 and 1550 nm — the 1550 nm minimum near 0.2 dB/km is where long-haul systems live.',
    ],
    quiz: [
      {
        q: 'At a boundary between glass of refractive index 1.5 and air (index 1.0), the critical angle for total internal reflection is approximately:',
        options: ['$30^{\\circ}$', '$41.8^{\\circ}$', '$48.6^{\\circ}$', '$60^{\\circ}$'],
        answer: 1,
        explanation: 'Step 1: The critical angle satisfies $\\sin\\theta_c = \\frac{n_2}{n_1} = \\frac{1.0}{1.5} = 0.667$. Step 2: $\\theta_c = \\sin^{-1}(0.667) \\approx 41.8^{\\circ}$. Step 3: Incidence angles (from the normal) beyond 41.8° reflect totally. Step 4: $30^{\\circ}$ is the angle whose sine is 0.5 — half the index ratio; $48.6^{\\circ}$ belongs to a lower index such as 1.33; and $\\sin 60^{\\circ} = 0.866$ would require $n_2 = 1.30$ here.',
      },
      {
        q: 'A step-index fibre has $n_1 = 1.48$ and $n_2 = 1.44$. Its numerical aperture is approximately:',
        options: ['$0.24$', '$0.34$', '$0.44$', '$0.58$'],
        answer: 1,
        explanation: 'Step 1: Square both indices: $1.48^2 = 2.190$ and $1.44^2 = 2.074$. Step 2: Subtract: $2.190 - 2.074 = 0.116$. Step 3: $NA = \\sqrt{0.116} \\approx 0.34$. Step 4: The distractors come from working with the index difference before squaring, or from forgetting the square root — and 0.58 is implausibly close to the core index itself for a launch-cone sine.',
      },
      {
        q: 'A step-index fibre is operated so that its V-number is $V = 1.8$. The fibre:',
        options: ['Supports only the fundamental mode', 'Supports exactly two modes', 'Supports about $V^2/2 \\approx 2$ modes', 'Cannot propagate light at all'],
        answer: 0,
        explanation: 'Step 1: The single-mode condition is $V < 2.405$. Step 2: Since $1.8 < 2.405$, only the fundamental mode is guided. Step 3: The $\\frac{V^2}{2}$ mode count applies only to multimode operation, well above the cutoff — using it here is a category error. Step 4: A count of “about 2” from $\\frac{V^2}{2}$ misapplies the multimode formula near cutoff: the fibre is not “almost single-mode”, it is single-mode.',
      },
      {
        q: 'A 15 km fibre link has $\\alpha = 0.3$ dB/km. If 2.0 mW is launched, the power reaching the far end is about:',
        options: ['$0.5$ mW', '$0.71$ mW', '$1.0$ mW', '$1.4$ mW'],
        answer: 1,
        explanation: 'Step 1: Total loss $= 0.3 \\times 15 = 4.5$ dB. Step 2: Convert to a factor: $P_{out} = 2.0 \\times 10^{-4.5/10} = 2.0 \\times 10^{-0.45}$. Step 3: $10^{-0.45} \\approx 0.355$, so $P_{out} \\approx 0.71$ mW. Step 4: Quick check: each decibel is a factor $10^{1/10} \\approx 1.26$, so 4.5 dB is about $1.26^{4.5} \\approx 2.8$-fold down, and $\\frac{2.0}{2.8} \\approx 0.71$ mW.',
      },
    ],
  },
]
