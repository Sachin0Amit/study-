import type { SectionContent } from '../library'

// ============================================================================
// CS & IT core — lesson content (General Aptitude + Sections 1–10).
// Written against the standard CS & IT core syllabus and
// the standard General Aptitude syllabus. Covers the first section of
// each core area plus both GA aptitude sections tested here: verbal and
// quantitative aptitude, propositional & first-order logic, number
// representations & computer arithmetic, machine instructions & addressing
// modes, programming in C, asymptotic complexity, regular expressions &
// finite automata, system calls/processes/threads/IPC, and the ER-model.
// Paper context used throughout: 65 questions / 100 marks / 3 hours, GA 15
// marks (5 × 1-mark + 5 × 2-mark), negative marking on MCQs only.
// ============================================================================

export const csCoreContent: SectionContent[] = [
  // ------------------------------------------------------------ 1.1 GA Verbal
  {
    sectionId: 'cse-g1-s1',
    readingTime: 8,
    prerequisites: [
      'Basic English sentence structure (subject, verb, object)',
      'Everyday English vocabulary and reading habit'
    ],
    intro: 'The General Aptitude block carries a fixed 15 marks in every the graduate assessment paper through 10 questions (5 × 1 mark and 5 × 2 marks), and roughly half of them test verbal ability. The items are MCQ, MSQ or NAT format, with negative marking applying only to the MCQs, so a wrong guess on a 2-mark MCQ costs 2/3 mark. the graduate assessment verbal rewards precise sentence-level grammar and context reading far more than obscure vocabulary.',
    objectives: [
      'Apply subject–verb agreement rules, including the neither/nor proximity rule and collective nouns',
      'Choose articles, prepositions, tenses and conjunctions correctly in sentence-completion items',
      'Interpret words, idioms and phrases from context instead of memorised word lists',
      'Reorder scrambled sentences into a coherent narrative using pronoun and connector chains'
    ],
    concepts: [
      {
        term: 'Subject–verb agreement',
        kind: 'law',
        statement: 'The **verb agrees with the subject in number and person**: `the number of + plural noun` takes a singular verb, while `a number of + plural noun` takes a plural verb.',
        detail: 'With either/or and neither/nor, the verb matches the **nearest** subject: "Neither the manager nor the engineers were present". A phrase between subject and verb never changes the agreement: "The list of items is long". Collective nouns (committee, team) take a singular verb when acting as one unit — the standard the graduate assessment trap.'
      },
      {
        term: 'Tense and sequence',
        kind: 'method',
        statement: 'The **past perfect** $\\text{had} + V_3$ requires a later past event: "By the time the build finished, the tests had run". Present perfect pairs with "since/for": "the server has run without a crash since Monday".',
        detail: 'the graduate assessment usually mixes two tenses in one sentence so that only one option is internally consistent. Watch time markers: by the time, already, ever since, ago. Conditional type 3 needs "would have + V3" in the result clause.'
      },
      {
        term: 'Articles by sound',
        kind: 'method',
        statement: 'Choose **a/an by pronunciation, not spelling**: `an hour, an M.Tech, a university, a European` — the silent h and the yoo-sound decide, not the letter.',
        detail: 'Use "the" for a second mention or a uniquely identified noun, "a/an" for a first mention. Fixed collocations matter: "different from", "prefer X to Y", "superior to", "consist of" — the graduate assessment fill-in-the-blank items usually hinge on exactly one such fixed preposition.'
      },
      {
        term: 'Vocabulary in context',
        kind: 'method',
        statement: 'Pick the word the **logic of the passage demands**: contrast signals (however, yet) call for an opposite-leaning word, continuation signals (moreover, indeed) call for reinforcement.',
        detail: 'Common idioms: "let the cat out of the bag" = reveal a secret, "bite the bullet" = endure something painful bravely, "on the fence" = undecided, "throw in the towel" = give up. Of the four near-synonyms the graduate assessment offers, exactly one matches the register (formal vs informal) of the sentence.'
      },
      {
        term: 'Narrative sequencing',
        kind: 'method',
        statement: 'In para-jumbles, **the opening sentence carries no dangling reference** — pronouns such as it, these, such a, and definite noun phrases like "the scanner" must have their antecedent earlier.',
        detail: 'Chain method: find the sentence that introduces a noun with an indefinite article, then the sentence whose pronoun or definite reference points back to it. Words like then, only after, finally, consequently fix adjacent pairs. The graduate assessment answer options differ in exactly one such link, so verify the link you are least sure about first.'
      }
    ],
    examples: [
      {
        title: 'Agreement and tense in one sentence',
        problem: 'Choose the correct verb forms: "The number of students who ______ (was / were) shortlisted for the interview ______ (was / were) surprisingly small this year."',
        steps: [
          { label: 'Step 1', text: '```text\nfirst blank: subject of the relative clause is "who" = the students => plural\n```\nThe clause is "who ______ shortlisted"; the relative pronoun who refers to *students*, so the first verb must be plural: **were**.' },
          { label: 'Step 2', text: 'Strip the modifier to find the main subject: "The number of students ... ______ surprisingly small". The head noun is **number**, and "the number of" always takes a singular verb.' },
          { label: 'Step 3', text: 'Hence the second blank is **was**. Contrast: "A number of students were shortlisted" would need the plural, because "a number of" means "several".' },
          { label: 'Step 4', text: 'Check tense: "this year" anchors the sentence in the present-past frame, so simple past works for both blanks; no past perfect is triggered because there is no earlier past event.' }
        ],
        result: '"The number of students who **were** shortlisted for the interview **was** surprisingly small this year."'
      },
      {
        title: 'Para-jumble by pronoun chaining',
        problem: 'Four sentences of a paragraph are given in scrambled order. Find the correct sequence.\n\nP. The scanner feeds these tokens to the parser, which checks them against the grammar of the language.\nQ. A compiler translates a program written in a high-level language into machine code.\nR. In the first phase, the scanner breaks the source program into units called tokens.\nS. Only after all these phases is the final machine code generated.',
        steps: [
          { label: 'Step 1', text: 'Hunt for the opener: Q introduces "A compiler" with an indefinite article and no back-reference, so Q must come first. P, R and S all contain definite or anaphoric references ("the scanner", "these tokens", "all these phases").' },
          { label: 'Step 2', text: 'R introduces the scanner and *tokens* as new information ("units called tokens"), so R precedes P, whose "these tokens" can only refer back to R.' },
          { label: 'Step 3', text: 'S sums up with "all these phases" and the summarising adverb "Only after", which needs the phases already described — so S is the closing sentence.' },
          { label: 'Step 4', text: 'The chain Q (topic) → R (phase 1: tokens) → P (phase 2: parsing) → S (conclusion) is the only order in which every pronoun and definite phrase finds its antecedent in place.' }
        ],
        result: 'Correct order: **Q → R → P → S**.'
      }
    ],
    keyTakeaways: [
      '"The number of X" takes a singular verb; "a number of X" takes a plural verb — decide by the head noun, not the nearest noun.',
      'With neither/nor and either/or, the verb agrees with the subject nearest to it.',
      'Articles follow sound: an hour, an M.Tech, a university, a European.',
      'In para-jumbles, the sentence with no back-reference opens the paragraph; pronoun and "these/such" chains fix the rest.'
    ],
    quiz: [
      {
        q: 'Fill in the blank: "Neither the project manager nor the developers ______ satisfied with the new deadline."',
        options: ['is', 'was', 'were', 'has been'],
        answer: 2,
        explanation: 'Step 1: With neither ... nor, the verb agrees with the nearer subject, here "the developers". Step 2: "Developers" is plural, so the plural verb "were" is required. Step 3: "Is" and "has been" would fit only if the nearer subject were singular ("Neither the developers nor the manager was"). Step 4: The past form matches the reporting frame of the sentence.'
      },
      {
        q: 'Choose the correct articles: "______ hour of profiling revealed that ______ universal hash function was the bottleneck."',
        options: ['An ... a', 'A ... an', 'An ... an', 'A ... a'],
        answer: 0,
        explanation: 'Step 1: "Hour" begins with a vowel *sound* (the h is silent), so it takes "an". Step 2: "Universal" begins with the consonant sound "yoo", so it takes "a". Step 3: The articles depend on pronunciation, not on the letters u and o. Step 4: Hence "An hour ... a universal hash function".'
      },
      {
        q: 'In the sentence "The intern let the cat out of the bag about the release date", the idiom means that the intern',
        options: ['cancelled the release plan', 'revealed a secret inadvertently', 'postponed the announcement', 'took credit for the work'],
        answer: 1,
        explanation: 'Step 1: "Let the cat out of the bag" is a fixed English idiom. Step 2: Its meaning is to disclose a secret, usually by accident. Step 3: Nothing in the idiom concerns cancelling, postponing or claiming credit. Step 4: Only "revealed a secret inadvertently" matches the idiomatic sense.'
      },
      {
        q: 'Select the most appropriate connector: "The new scheduler is provably optimal; ______, its constant factors make it slower in practice."',
        options: ['Therefore', 'However', 'Likewise', 'Moreover'],
        answer: 1,
        explanation: 'Step 1: The first clause praises the algorithm, the second clause criticises its speed — this is contrast. Step 2: "However" is the contrastive connector. Step 3: "Therefore" signals consequence and "Moreover" adds reinforcement, both wrong for a contrast. Step 4: "Likewise" signals similarity between two parallel facts, which is absent here.'
      }
    ]
  },

  // -------------------------------------------------------- 1.2 GA Quantitative
  {
    sectionId: 'cse-g1-s2',
    readingTime: 9,
    prerequisites: [
      'Arithmetic with fractions, decimals and percentages',
      'Basic algebra: linear equations and laws of exponents'
    ],
    intro: 'The other half of the 15-mark General Aptitude block tests quantitative aptitude — data interpretation from graphs and tables, numerical computation and estimation, mensuration, geometry and elementary statistics. Most items are one- or two-step MCQ/NAT computations where a careless slip costs 1/3 or 2/3 mark. Fluency with percentage chains, logarithms and simple counting is what converts this block into reliable marks.',
    objectives: [
      'Chain percentage and ratio computations correctly (successive change, mixtures, index numbers)',
      'Manipulate powers, exponents and logarithms, including change of base',
      'Count with permutations and combinations and compute elementary probabilities',
      'Extract growth rates, averages and comparisons from tables, bar graphs and pie charts'
    ],
    concepts: [
      {
        term: 'Successive percentage change',
        kind: 'law',
        statement: 'Changes **multiply as factors**: a change of $x\\%$ then $y\\%$ gives the net factor $(1 + \\frac{x}{100})(1 + \\frac{y}{100})$, so `+20% then -10% => 1.2 x 0.9 = 1.08`, i.e. +8%.',
        detail: 'Two successive discounts of 20% and 10% equal a single discount of 28%, not 30%. Percentage change is always computed on the **new** base of the previous step — the classic the graduate assessment trap. Average of two rates is valid only when the bases are equal.'
      },
      {
        term: 'Ratios and the unitary method',
        kind: 'method',
        statement: 'Dividing a quantity $Q$ in the ratio $a : b$ gives shares $\\frac{a}{a+b}Q$ and $\\frac{b}{a+b}Q$; combine chained ratios $a:b$ and $b:c$ through the LCM of the common term to get $a:b:c$.',
        detail: 'For direct proportion set up $\\frac{x_1}{y_1} = \\frac{x_2}{y_2}$; for inverse proportion the product stays constant. the graduate assessment three-quantity problems (men–days–work, speed–time–distance) are solved by identifying which pairs vary directly and which inversely.'
      },
      {
        term: 'Exponents and logarithms',
        kind: 'law',
        statement: '**Logarithm laws**: $\\log_b xy = \\log_b x + \\log_b y$, $\\log_b \\frac{x}{y} = \\log_b x - \\log_b y$, $\\log_b x^k = k \\log_b x$, change of base $\\log_b a = \\frac{\\log_c a}{\\log_c b}$, and $b^{\\log_b x} = x$.',
        detail: 'Solve exponential equations by matching bases: $2^x = \\frac{1}{16} = 2^{-4}$ gives $x = -4$; $\\log_2 0.25 = -2$. Useful the graduate assessment facts: $\\log 2 + \\log 5 = \\log 10 = 1$ (base 10), and $\\log_a 1 = 0$, $\\log_a a = 1$. NAT answers here are frequently small integers, including negative ones.'
      },
      {
        term: 'Permutations and combinations',
        kind: 'method',
        statement: '**Order matters** → arrangements $^nP_r = \\frac{n!}{(n-r)!}$; **order does not matter** → selections $^nC_r = \\frac{n!}{r!(n-r)!}$; arrangements of $n$ objects with repeated kinds $\\frac{n!}{p!\\,q!\\cdots}$.',
        detail: '"Exactly k" selections split into cases multiplied together and added across cases: choosing a committee with exactly one manager from 4 managers and 3 of 6 engineers gives $^4C_1 \\times ^6C_3 = 4 \\times 20 = 80$. Circular arrangements of n distinct objects: $(n-1)!$. Probability then equals favourable $^nC_r$ counts over total counts for equally likely outcomes.'
      },
      {
        term: 'Data interpretation',
        kind: 'method',
        statement: 'Growth rate over a period $= \\frac{\\text{final} - \\text{initial}}{\\text{initial}} \\times 100\\%$; a pie-chart sector of angle $\\theta$ is the fraction $\\frac{\\theta}{360^{\\circ}}$ of the total.',
        detail: 'Before computing, read the axes, units and scale — the graduate assessment distractors exploit missed units (crore vs lakh) or a broken axis. Compare rates rather than absolute rises. Distinguish "percentage change" from "percentage points": a rise from 20% to 25% is 5 percentage points but a 25% relative increase.'
      },
      {
        term: 'Elementary statistics',
        kind: 'definition',
        statement: '**Mean** $\\bar{x} = \\frac{1}{n}\\sum x_i$; **median** = middle value of the sorted data (mean of the two middles for even $n$); **variance** $\\sigma^2 = \\frac{1}{n}\\sum (x_i - \\bar{x})^2$, standard deviation $\\sigma = \\sqrt{\\sigma^2}$.',
        detail: 'The mean is dragged by outliers while the median resists them — the graduate assessment asks which measure changes when an extreme value is added. For equally likely outcomes, $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$. Compute $\\sigma$ by squaring deviations, never by $\\sum x_i^2$ alone.'
      }
    ],
    examples: [
      {
        title: 'Growth rates from a sales table',
        problem: 'A company recorded sales of ₹250 lakh, ₹310 lakh, ₹341 lakh and ₹396 lakh in 2019, 2020, 2021 and 2022 respectively. (i) Which year showed the highest year-on-year growth rate? (ii) What is the total percentage growth from 2019 to 2022?',
        steps: [
          { label: 'Step 1', text: '```text\n2020: (310-250)/250 = 60/250  = 24%\n2021: (341-310)/310 = 31/310  = 10%\n2022: (396-341)/341 = 55/341  = 16.1%\n```\nCompute each year-on-year change on that year base. The three growth rates are 24%, 10% and about 16.1%.' },
          { label: 'Step 2', text: 'The largest of the three is 24%, so **2020** recorded the highest growth rate — note that the largest absolute rise (₹55 lakh in 2022) is not the largest rate, a deliberate the graduate assessment-style contrast.' },
          { label: 'Step 3', text: 'Overall growth 2019 → 2022 is computed on the 2019 base: $\\frac{396 - 250}{250} \\times 100 = \\frac{146}{250} \\times 100 = 58.4\\%$.' },
          { label: 'Step 4', text: 'Sanity check: three successive rises of 24%, 10% and 16.1% compound to $1.24 \\times 1.10 \\times 1.161 \\approx 1.584$, matching the single-step 58.4%.' }
        ],
        result: '(i) **2020** with a 24% growth rate; (ii) total growth 2019→2022 = **58.4%**.'
      },
      {
        title: 'Committee counting with probability',
        problem: 'A committee of 4 is formed from 6 engineers and 4 managers. (i) In how many ways can it be formed with exactly one manager? (ii) If every 4-person committee is equally likely, what is the probability of exactly one manager?',
        steps: [
          { label: 'Step 1', text: 'Choose the single manager and the three engineers independently: $^4C_1 \\times ^6C_3 = 4 \\times 20 = 80$ ways.' },
          { label: 'Step 2', text: 'The total number of unrestricted committees is $^{10}C_4 = \\frac{10!}{4!\\,6!} = 210$.' },
          { label: 'Step 3', text: 'Probability $= \\frac{80}{210} = \\frac{8}{21} \\approx 0.381$. Reduce before multiplying out to keep the arithmetic light.' },
          { label: 'Step 4', text: 'Cross-check the complement style: at least two managers would be $1 - \\frac{\\binom{6}{4} + \\binom{6}{3}\\binom{4}{1}}{210} = 1 - \\frac{15 + 80}{210} = \\frac{23}{42}$, consistent since zero-manager committees number $\\binom{6}{4} = 15$.' }
        ],
        result: '(i) **80** committees; (ii) probability $= \\frac{8}{21} \\approx 0.38$.'
      }
    ],
    keyTakeaways: [
      'Successive changes multiply as factors: +20% then −10% nets +8%, and 20% + 10% discounts equal 28% off.',
      'Percentage change is always taken on the current base; the largest absolute rise need not be the largest rate.',
      'Sector angle θ in a pie chart is the fraction θ/360° of the whole; a 100° sector of ₹36,000 is ₹10,000.',
      'Variance is the mean of squared deviations: for {2, 4, 6, 8, 10}, σ² = 8 and σ = 2√2 ≈ 2.83.'
    ],
    quiz: [
      {
        q: 'A laptop priced ₹60,000 is marked up by 20% and then given a discount of 10%. The final selling price is',
        options: ['₹66,000', '₹64,800', '₹62,000', '₹63,000'],
        answer: 1,
        explanation: 'Step 1: Mark-up factor is 1.20, discount factor is 0.90. Step 2: Net factor = 1.20 × 0.90 = 1.08, a net increase of 8%. Step 3: Final price = 60,000 × 1.08 = ₹64,800. Step 4: ₹66,000 would be a 10% markup on the marked-up price ignoring the discount sign; ₹62,000 wrongly subtracts 10% of the original price.'
      },
      {
        q: 'Given $\\log_{10} 2 = 0.301$, the value of $\\log_{10} 5$ is',
        options: ['0.699', '0.301', '0.500', '0.800'],
        answer: 0,
        explanation: 'Step 1: Since $2 \\times 5 = 10$, we have $\\log 2 + \\log 5 = \\log 10 = 1$. Step 2: Therefore $\\log 5 = 1 - 0.301 = 0.699$. Step 3: The answer must be positive because 5 > 1. Step 4: 0.5 would be $\\log_{10}\\sqrt{10}$, not $\\log 5$.'
      },
      {
        q: 'The standard deviation of the data {2, 4, 6, 8, 10} is',
        options: ['2.83', '8.00', '6.32', '1.41'],
        answer: 0,
        explanation: 'Step 1: Mean = (2+4+6+8+10)/5 = 6. Step 2: Deviations are −4, −2, 0, 2, 4; squared they sum to 16+4+0+4+16 = 40. Step 3: Variance = 40/5 = 8, so σ = √8 = 2√2 ≈ 2.83. Step 4: 8.00 is the variance itself and 1.41 is √2 — both partial answers, not the standard deviation.'
      },
      {
        q: 'In a monthly budget of ₹36,000 shown as a pie chart, the food sector subtends 100°. The amount spent on food is',
        options: ['₹9,000', '₹12,000', '₹10,000', '₹8,000'],
        answer: 2,
        explanation: 'Step 1: A full circle is 360°, so the food fraction is 100/360 = 5/18. Step 2: Amount = 36,000 × 100/360 = 36,000/3.6 = ₹10,000. Step 3: ₹12,000 would correspond to 120° and ₹9,000 to 90°. Step 4: Always reduce the angle to a fraction of 360° before multiplying.'
      }
    ]
  },

  // ------------------------------------------------- 2.1 Propositional & FOL
  {
    sectionId: 'cse-g2-s1',
    readingTime: 10,
    prerequisites: [
      'Truth values of simple declarative statements',
      'Basic set notation (used for assignment sets and domains)'
    ],
    intro: 'Engineering Mathematics supplies about 13 of the 85 subject marks, and propositional and first-order logic is its single most frequently examined topic. the graduate assessment repeatedly asks which of several formulas are logically equivalent, valid, or satisfiable, and NAT items ask for counts of satisfying assignments. Every answer reduces to a handful of identities and one discipline: never reason about an implication without recalling when it is false.',
    objectives: [
      'Translate English statements into propositional formulas and negate them correctly',
      'Apply the standard equivalences (implication, De Morgan, contrapositive) to simplify formulas',
      'Classify formulas as tautologies, contradictions or contingencies and count satisfying assignments',
      'Manipulate first-order quantifiers, including negation and reordering of ∀ and ∃'
    ],
    concepts: [
      {
        term: 'Propositions and connectives',
        kind: 'definition',
        statement: 'A **proposition** is a declarative sentence with a definite truth value; the connectives $\\neg, \\land, \\lor, \\to, \\leftrightarrow$ combine them, and a formula over $n$ variables needs a $2^n$-row truth table.',
        detail: 'The implication $p \\to q$ is false **only** for the row $p = T, q = F$ — the vacuous-truth rule behind most the graduate assessment traps. Precedence: $\\neg$ > $\\land$ > $\\lor$ > $\\to$ > $\\leftrightarrow$. Questions like "which of the following is a proposition" test that commands, questions and paradoxes are not propositions.'
      },
      {
        term: 'Implication family',
        kind: 'theorem',
        statement: '**$p \\to q \\equiv \\neg p \\lor q \\equiv \\neg q \\to \\neg p$** (contrapositive); the converse $q \\to p$ and the inverse $\\neg p \\to \\neg q$ are equivalent to each other but not to the original.',
        detail: 'The most-used identity in the graduate assessment options is the negation: $\\neg(p \\to q) \\equiv p \\land \\neg q$ — the denial of "if it rains, the match is cancelled" is "it rains AND the match is not cancelled". Writing the negation as another implication is the standard wrong option.'
      },
      {
        term: 'Tautology, satisfiability, counting',
        kind: 'definition',
        statement: 'A formula is a **tautology** (true under all $2^n$ assignments), a **contradiction** (true under none), or a **contingency** (true under some); satisfiable means at least one assignment works.',
        detail: 'NAT pattern: count satisfying assignments row by row. $(p \\land q) \\to r$ fails only on $(T, T, F)$, so 7 of 8 assignments satisfy it. Two formulas are equivalent exactly when their assignments sets are equal — counting both settles equivalence questions without expanding algebra.'
      },
      {
        term: 'De Morgan and normal forms',
        kind: 'law',
        statement: '**De Morgan**: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$ and dually $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$; pushing negations inward and distributing $\\lor$ over $\\land$ yields CNF (dually DNF).',
        detail: 'Functionally complete sets: {¬, ∧}, {¬, ∨}, {¬, →}, and each of NAND and NOR alone. the graduate assessment asks whether a given connective set can express every Boolean function — test the two hard functions AND and NOT first.'
      },
      {
        term: 'Quantifier negation',
        kind: 'theorem',
        statement: '**$\\neg \\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x)$** and $\\neg \\exists x\\, P(x) \\equiv \\forall x\\, \\neg P(x)$; quantifier order matters: $\\forall x \\exists y\\, P(x,y)$ is generally weaker than $\\exists y \\forall x\\, P(x,y)$.',
        detail: 'Translate negations in one pass, never piecewise: the negation of "every student passed some assessment" is "some student failed every assessment". When hunting a countermodel for an alleged validity, test a 2-element domain first — most false equivalences break there.'
      },
      {
        term: 'Validity in first-order logic',
        kind: 'insight',
        statement: 'A propositional tautology **remains valid under uniform substitution** of first-order formulas for its variables; an FOL validity must hold in every interpretation (every domain and predicate meaning).',
        detail: 'Distinguish valid (all interpretations), satisfiable (some interpretation) and true-in-a-given-model. the graduate assessment MSQs list four statements about quantified formulas and exactly the equivalences survive — derive each with the negation rules rather than intuition.'
      }
    ],
    examples: [
      {
        title: 'Negating an implication and a short tautology proof',
        problem: '(i) Express $\\neg(p \\to q)$ in a form without an arrow. (ii) Show that $(p \\to q) \\lor (q \\to r)$ is a tautology without writing the full 8-row table.',
        steps: [
          { label: 'Step 1', text: '```text\np -> q  ==  not p  or  q\nnot(p -> q)  ==  p and (not q)\n```\nReplace the arrow first: $p \\to q \\equiv \\neg p \\lor q$. Negating a disjunction with De Morgan gives $\\neg(\\neg p \\lor q) \\equiv p \\land \\neg q$.' },
          { label: 'Step 2', text: '(ii) For the whole disjunction to be false, **both** disjuncts must be false. $p \\to q$ false forces $p = T, q = F$.' },
          { label: 'Step 3', text: '$q \\to r$ false forces $q = T, r = F$. The two requirements demand $q = F$ and $q = T$ simultaneously — impossible.' },
          { label: 'Step 4', text: 'No assignment falsifies the formula, so all $2^3 = 8$ assignments satisfy it: it is a tautology. This contradiction argument replaces the table and is the intended the graduate assessment speed method.' }
        ],
        result: '(i) $\\neg(p \\to q) \\equiv p \\land \\neg q$; (ii) the disjunction is a **tautology** (satisfied by all 8 assignments).'
      },
      {
        title: 'Counting satisfying assignments (NAT pattern)',
        problem: 'Over all 8 assignments to $(p, q, r)$, how many satisfy (i) $(p \\land q) \\to r$ and (ii) $p \\leftrightarrow \\neg q$?',
        steps: [
          { label: 'Step 1', text: '```text\n(p and q) -> r  is false only when antecedent T, consequent F\n```\nAn implication is false exactly when its antecedent is true and its consequent false, i.e. $p = T, q = T, r = F$ — a single row.' },
          { label: 'Step 2', text: '(i) Hence $8 - 1 = \\mathbf{7}$ assignments satisfy $(p \\land q) \\to r$.' },
          { label: 'Step 3', text: '(ii) $p \\leftrightarrow \\neg q$ is true exactly when $p$ and $q$ have opposite values: $(T, F)$ and $(F, T)$. The variable $r$ is unconstrained and doubles each case.' },
          { label: 'Step 4', text: 'So the satisfying assignments number $2 \\times 2 = \\mathbf{4}$. Counting this way — falsifying rows first, then multiplying by free variables — is the fastest correct route on NAT items.' }
        ],
        result: '(i) **7** of 8; (ii) **4** of 8.'
      }
    ],
    keyTakeaways: [
      '$p \\to q$ is false only on the row $p = T, q = F$; its negation is $p \\land \\neg q$, never another implication.',
      'A formula on n variables has $2^n$ assignments; count the falsifying rows and subtract from $2^n$.',
      '$\\neg \\forall x\\, P \\equiv \\exists x\\, \\neg P$ — negate quantifiers and the predicate together in one pass.',
      'To refute an equivalence or validity fast, look for the contradiction argument or test a 2-element domain.'
    ],
    quiz: [
      {
        q: '$\\neg(p \\to q)$ is logically equivalent to',
        options: ['$\\neg p \\land q$', '$p \\land \\neg q$', '$\\neg p \\to \\neg q$', '$p \\lor \\neg q$'],
        answer: 1,
        explanation: 'Step 1: Rewrite the implication: $p \\to q \\equiv \\neg p \\lor q$. Step 2: Negate the disjunction with De Morgan: $\\neg(\\neg p \\lor q) \\equiv p \\land \\neg q$. Step 3: The option $\\neg p \\to \\neg q$ is the inverse, not the negation. Step 4: Only $p \\land \\neg q$ makes the original implication exactly false.'
      },
      {
        q: 'The number of distinct truth assignments for a formula involving 4 propositional variables is',
        options: ['8', '16', '32', '4'],
        answer: 1,
        explanation: 'Step 1: Each variable independently takes T or F. Step 2: With 4 variables the count is $2^4$. Step 3: $2^4 = 16$. Step 4: 8 would be $2^3$ and 32 would be $2^5$ — off-by-one-variable slips.'
      },
      {
        q: '$\\neg \\big( \\forall x\\, \\exists y\\, P(x, y) \\big)$ is equivalent to',
        options: ['$\\exists x\\, \\forall y\\, \\neg P(x, y)$', '$\\forall x\\, \\exists y\\, \\neg P(x, y)$', '$\\exists x\\, \\exists y\\, \\neg P(x, y)$', '$\\forall x\\, \\forall y\\, \\neg P(x, y)$'],
        answer: 0,
        explanation: 'Step 1: Negating a universal quantifier produces an existential: $\\neg \\forall x$ becomes $\\exists x$. Step 2: Negating the inner existential produces a universal: $\\neg \\exists y$ becomes $\\forall y$. Step 3: The predicate negates to $\\neg P(x, y)$. Step 4: Note the quantifiers swap type but keep their order — the other options fail exactly one of these swaps.'
      },
      {
        q: 'Which of the following is NOT a tautology?',
        options: ['$p \\lor \\neg p$', '$(p \\land q) \\to p$', '$p \\lor q$', '$p \\to (p \\lor q)$'],
        answer: 2,
        explanation: 'Step 1: $p \\lor \\neg p$ is the law of the excluded middle — always true. Step 2: $(p \\land q) \\to p$ is true because a conjunction implies each conjunct. Step 3: $p \\lor q$ is false when both $p$ and $q$ are false, so it is a contingency, not a tautology. Step 4: $p \\to (p \\lor q)$ is a tautology since strengthening the consequent preserves truth.'
      }
    ]
  },

  // ---------------------------------------------- 3.1 Number Reps & Arithmetic
  {
    sectionId: 'cse-g3-s1',
    readingTime: 10,
    prerequisites: [
      'Binary (base-2) representation of unsigned integers',
      'Laws of exponents and powers of 2 up to 2^16'
    ],
    intro: 'Digital Logic contributes roughly 4–6 marks, and its most dependable question type is number representation — range calculations, two\'s-complement addition with overflow detection, and IEEE-754 encoding appear year after year as precise MCQ/NAT items. The answers are exact bit patterns or integers, so success is entirely about applying the formats mechanically. This section builds the representations and the arithmetic traps the graduate assessment exploits.',
    objectives: [
      'Convert between bases, handling fractional positions by repeated multiplication',
      'Compute with sign-magnitude, one\'s-complement and two\'s-complement representations and state each range',
      'Detect overflow in two\'s-complement addition from operand signs and from the carries around the MSB',
      'Encode and decode IEEE-754 single-precision values, including denormals, infinities and NaN'
    ],
    concepts: [
      {
        term: 'Positional systems',
        kind: 'definition',
        statement: 'A base-$b$ numeral has **value $\\sum d_i b^i$** with digits $0 \\ldots b-1$; integers convert by repeated division by $b$, fractions by repeated multiplication by $b$ (collecting integer parts).',
        detail: 'Example: $0.625_{10} = 0.101_2$ because 0.625 → 1.25 → 0.5 → 1.0. Conversely $0.1_{10}$ is non-terminating in binary — the origin of floating-point rounding surprises. the graduate assessment NAT items ask for the base-$b$ expansion of small fractions; stop when the fraction reaches exactly 0 or when the requested digits are produced.'
      },
      {
        term: 'Signed integer ranges',
        kind: 'law',
        statement: 'For $n$-bit words, **two\'s complement covers $[-2^{n-1},\\ 2^{n-1}-1]$**, while sign-magnitude and one\'s complement both cover $[-(2^{n-1}-1),\\ 2^{n-1}-1]$ and waste a code on ±0.',
        detail: '8-bit two\'s complement: −128 … +127. To negate, invert all bits and add 1: $10110100 \\to 01001011 + 1 = 01001100$, so $10110100 = -76$. The asymmetry bites when negating $-2^{n-1}$: its positive partner does not exist, and the operation overflows.'
      },
      {
        term: 'Two\'s-complement addition and overflow',
        kind: 'method',
        statement: 'Add modulo $2^n$ as unsigned; **overflow $V = C_{in} \\oplus C_{out}$** at the MSB, equivalently: adding two same-signed operands can overflow, opposite-signed operands never can.',
        detail: 'Subtraction $a - b$ is executed as $a + (-b)$ and obeys the same rule on that addition. The result of an overflow is arithmetically wrong but well-defined: the hardware answer is the true sum shifted by $2^n$ (that is, ±2⁸ in 8 bits). the graduate assessment gives you a hex or binary pair and asks both for the stored result and whether V is set.'
      },
      {
        term: 'Fixed-point (Q-format)',
        kind: 'definition',
        statement: '**Fixed-point** stores a scaled integer: a $k$-bit word in Q$m.k$ format (m integer bits, k fraction bits) represents $\\text{signed\\_int} / 2^{k}$ with no hardware change.',
        detail: 'Multiplying two Q-format numbers produces a double-length result with the binary point at $2k$ fraction bits — rescaling (shifting right by k) is required, and the graduate assessment checks whether you shift before or after rounding. Fixed point is exact for representable dyadic rationals, unlike binary floating point.'
      },
      {
        term: 'IEEE-754 single precision',
        kind: 'definition',
        statement: '**Layout**: 1 sign bit, 8 exponent bits (bias 127), 23 fraction bits; a normal number has value $(-1)^s \\times 1.f \\times 2^{E - 127}$ for exponent field $E \\in [1, 254]$, with the leading 1 hidden.',
        detail: 'Special fields: $E = 0$ gives denormals $(-1)^s \\times 0.f \\times 2^{-126}$ (gradual underflow); $E = 255$ gives $\\pm\\infty$ (fraction 0) or NaN (fraction ≠ 0). 24 significant bits give about 7 decimal digits; double precision uses 11 exponent bits (bias 1023) and 52 fraction bits. The exponent stored for $2^{20}$ is $20 + 127 = 147$.'
      },
      {
        term: 'Rounding, overflow and precision',
        kind: 'insight',
        statement: '**Machine epsilon** for single precision is $2^{-23}$ — the gap between 1.0 and the next representable float; the default round-to-nearest-even mode keeps errors within half an ulp.',
        detail: 'Exponent overflow produces ±∞; underflow first passes through denormals before flushing to zero. When the graduate assessment asks "how many bits of precision", the answer counts the hidden bit: 24 of storage 32. Comparing floats for equality is a design smell the assessment expects you to recognise.'
      }
    ],
    examples: [
      {
        title: 'Encoding −13.25 in IEEE-754 single precision',
        problem: 'Write the 32-bit IEEE-754 single-precision representation of $-13.25$, and give the answer in hexadecimal.',
        steps: [
          { label: 'Step 1', text: '```text\nsign = 1 (negative)\n13.25 = 8 + 4 + 1 + 0.25 = 1101.01 (binary)\n```\nThe sign bit is 1. Converting the magnitude: integer part 13 = 1101₂ and fraction 0.25 = .01₂, so $13.25 = 1101.01_2$.' },
          { label: 'Step 2', text: 'Normalise to one leading 1: $1101.01_2 = 1.10101 \\times 2^{3}$, so the true exponent is 3.' },
          { label: 'Step 3', text: 'Biased exponent $E = 3 + 127 = 130 = 10000010_2$. The fraction drops the hidden bit and keeps 23 bits: $10101$ followed by eighteen 0s.' },
          { label: 'Step 4', text: '```text\n1 10000010 10101000000000000000000\n= 1100 0001 0101 0100 0000 0000 0000 0000\n= 0xC1540000\n```\nAssemble and regroup into hex: the word is **0xC1540000**. Decode check: $1.10101_2 = 1.65625$; $1.65625 \\times 8 = 13.25$ with the sign bit making it −13.25.' }
        ],
        result: '$-13.25 \\to$ sign 1, exponent $10000010_2$ (130), fraction $10101000\\ldots0_2$; the 32-bit word is **0xC1540000**.'
      },
      {
        title: 'Two\'s-complement addition with overflow',
        problem: 'Add the 8-bit two\'s-complement numbers $01011100$ and $01101101$. Give the 8-bit result, its interpreted decimal value, the true sum, and the overflow flag V.',
        steps: [
          { label: 'Step 1', text: '```text\n01011100 = 92 (positive, sign bit 0)\n01101101 = 109 (positive, sign bit 0)\n```\nBoth operands are positive, so overflow is possible; the true sum is $92 + 109 = 201$, which exceeds $2^7 - 1 = 127$ — expect trouble.' },
          { label: 'Step 2', text: '```text\n  01011100\n+ 01101101\n----------\n  11001001   (carries: into MSB = 1, out of MSB = 0)\n```\nPerform the binary addition: the result bit pattern is $11001001$.' },
          { label: 'Step 3', text: 'Carry into the MSB is 1 while the carry out of the MSB is 0, so $V = 1 \\oplus 0 = 1$ — overflow detected. Equivalently, two positive operands produced a result with sign bit 1.' },
          { label: 'Step 4', text: 'Interpreted as 8-bit two\'s complement, $11001001$ equals $-(00010111)$... invert to $00110110 = 54$, add 1 to get 55, so the stored result reads $-55$. The hardware answer is wrong by exactly $2^8$: $201 - 256 = -55$.' }
        ],
        result: 'Stored result **11001001 = −55**, true sum **201**, overflow flag **V = 1** (the result is invalid for 8-bit two\'s complement).'
      }
    ],
    keyTakeaways: [
      'Two\'s complement covers $[-2^{n-1}, 2^{n-1}-1]$ — 8 bits mean −128 to +127 — and has a unique zero.',
      'Overflow on addition: $V = C_{in} \\oplus C_{out}$ at the MSB, or simply "same-sign operands, different-sign result"; opposite signs never overflow.',
      'IEEE-754 single: value $(-1)^s \\times 1.f \\times 2^{E-127}$ with the hidden 1; $E = 0$ → denormals, $E = 255$ → ±∞/NaN.',
      'The exponent field for $2^k$ stores $k + 127$; for $2^{20}$ that is 147.'
    ],
    quiz: [
      {
        q: 'The range of integers representable in 8-bit two\'s complement is',
        options: ['−127 to +127', '−128 to +127', '−128 to +128', '−256 to +255'],
        answer: 1,
        explanation: 'Step 1: With n = 8 the pattern $10000000$ is the most negative value $-2^7 = -128$. Step 2: The most positive value is $01111111 = 2^7 - 1 = 127$. Step 3: Sign-magnitude and one\'s complement both stop at ±127 because they waste a code on −0. Step 4: Hence −128 to +127.'
      },
      {
        q: 'The decimal value of the 8-bit two\'s-complement number $10110100$ is',
        options: ['−76', '−52', '−75', '+76'],
        answer: 0,
        explanation: 'Step 1: The sign bit is 1, so the value is negative. Step 2: Invert all bits: $01001011 = 75$. Step 3: Add 1: $76$; the represented value is $-76$. Step 4: $-52$ is the sign-magnitude reading and $-75$ the one\'s-complement reading — both classic distractors.'
      },
      {
        q: 'In IEEE-754 single precision, the exponent field stored for the value $2^{20}$ is',
        options: ['147', '20', '127', '150'],
        answer: 0,
        explanation: 'Step 1: A normalised $2^{20}$ has mantissa $1.0$ and true exponent 20. Step 2: The stored field is the biased exponent $E = e + 127$. Step 3: $20 + 127 = 147$. Step 4: Storing 20 itself forgets the bias; 127 would correspond to $2^0 = 1$.'
      },
      {
        q: 'The 8-bit two\'s-complement sum $01111111 + 00000001$ yields the bit pattern and flag',
        options: ['10000000 with V = 1 (reads −128)', '10000000 with V = 0 (reads +128)', '01111111 with V = 0 (reads +127)', '00000000 with V = 1 (reads 0)'],
        answer: 0,
        explanation: 'Step 1: $01111111 = 127$ and $00000001 = 1$, both positive; the true sum 128 exceeds +127. Step 2: Binary addition gives $10000000$. Step 3: Carry into the MSB is 1, carry out is 0, so $V = 1$: overflow has occurred. Step 4: The stored pattern reads $-128$ (wrong by exactly $2^8 = 256$), and +128 is not representable in 8 bits.'
      }
    ]
  },

  // --------------------------------------- 4.1 Machine Instructions & Addressing
  {
    sectionId: 'cse-g4-s1',
    readingTime: 9,
    prerequisites: [
      'Binary and hexadecimal number representation',
      'Basic machine organization: PC, IR, MAR/MDR and main memory'
    ],
    intro: 'Computer Organization and Architecture carries about 6–8 marks, and addressing modes are its signature opener — typically an MCQ/NAT that hands you a snapshot of memory and registers and asks for the effective address or the operand of a named mode. The entire skill is writing the effective-address formula instantly and counting memory references. This section builds that table plus the PC-relative branch computation the paper keeps returning to.',
    objectives: [
      'Break an instruction into opcode and operand fields and classify data-movement, arithmetic and control instructions',
      'Compute the effective address and operand value for immediate, register, direct, indirect, register-indirect and indexed modes',
      'Compute PC-relative branch targets from an instruction address and a signed offset',
      'Count the memory accesses required to fetch and execute an instruction in each mode'
    ],
    concepts: [
      {
        term: 'Instruction format',
        kind: 'definition',
        statement: 'An instruction word = **opcode + operand/address fields (+ addressing-mode bits)**; instructions are classified as data movement (load/store/move), arithmetic-logical (add, and, shift) and control (branch, jump, call).',
        detail: 'One-word instructions embed operands in the word; multi-word formats put a full address in the following word(s) — this length matters for PC-relative targets. the graduate assessment sometimes gives a fixed 16-bit format with bit fields and asks which registers a specific encoding references: decode the fields, do not guess.'
      },
      {
        term: 'Instruction cycle',
        kind: 'method',
        statement: '**Fetch** (MAR ← PC; read memory; IR ← MDR; PC ← PC + instruction length) → **decode** → **operand fetch** → **execute** → **write back**; interrupts are checked between instructions.',
        detail: 'The key detail is that during execution the PC already points to the *next* instruction — that incremented PC is the base of every relative-address computation. A mode switch into the OS (trap) happens on a system call or interrupt, not as a normal step of this cycle.'
      },
      {
        term: 'Effective-address formulas',
        kind: 'law',
        statement: 'Effective addresses: **immediate** — operand is in the instruction itself; **register** — operand is in $R$; **direct** $EA = A$; **indirect** $EA = M[A]$; **register-indirect** $EA = [R]$; **indexed** $EA = A + [R]$; **PC-relative** $EA = PC + \\text{offset}$.',
        detail: 'Learn these as a table — the graduate assessment presents one memory snapshot and asks for five different answers off it. Indexed generalises to base-plus-index and scaled-index (scale factor $\\times$ element size) variants used for array addressing. The offset in relative mode is **signed**, so targets may lie below the branch.'
      },
      {
        term: 'Memory-access counting',
        kind: 'method',
        statement: 'Each level of indirection costs one extra memory reference: with one-word instructions, **direct load = 2** (instruction + operand), **indirect load = 3** (instruction + pointer + operand), **register-indirect = 2**, **register = 1** (instruction only).',
        detail: 'NAT answers here assume the instruction is one word unless the paper states otherwise; multi-word instructions add their extra fetches. Immediate mode also needs only the single instruction fetch — the operand travels inside the instruction word.'
      },
      {
        term: 'PC-relative branches',
        kind: 'method',
        statement: 'Branch target $= (\\text{address of the instruction after the branch}) + \\text{signed offset}$; the offset field of $k$ bits reaches $\\pm 2^{k-1}$ bytes from that base.',
        detail: 'The trap is forgetting that the PC was already incremented past the branch during fetch: for a 4-byte `BZ` at 512, the base is 516, not 512. Relative addressing enables position-independent code — the reason loaders can place code anywhere without patching branch targets.'
      },
      {
        term: 'RISC versus CISC addressing',
        kind: 'insight',
        statement: 'A **RISC load/store architecture** allows memory operands only in loads and stores (arithmetic is register-register) with few formats; **CISC** lets arithmetic instructions address memory directly through many modes.',
        detail: 'Fewer modes and fixed-length instructions make RISC pipelining simple — the theme of the next sections. When the graduate assessment asks "which mode suits array traversal best", the expected answer is indexed (or base-plus-index), since the index register steps through elements while the base field stays fixed.'
      }
    ],
    examples: [
      {
        title: 'One snapshot, five addressing modes',
        problem: 'A machine has registers R1 = 200 and R2 = 400, and memory M[200] = 300, M[500] = 800, M[800] = 700, M[900] = 100. An instruction `LOAD Rdst, <mode> A` has address field A = 500. What value is loaded into Rdst under (i) immediate, (ii) direct, (iii) indirect, (iv) register-indirect via R1, and (v) indexed via R2?',
        steps: [
          { label: 'Step 1', text: '```text\nimmediate : operand = A itself              = 500\ndirect    : EA = 500, value = M[500]         = 800\n```\nImmediate mode never touches memory for the operand; direct mode reads the cell named by the address field.' },
          { label: 'Step 2', text: 'Indirect mode chases the pointer: $EA = M[500] = 800$, so the value loaded is $M[800] = 700$ — one extra memory read compared with direct.' },
          { label: 'Step 3', text: 'Register-indirect via R1: $EA = [R1] = 200$, so the value is $M[200] = 300$. The register supplies the address, not the data.' },
          { label: 'Step 4', text: 'Indexed via R2: $EA = A + [R2] = 500 + 400 = 900$, so the value is $M[900] = 100$ — the classic array-element access pattern where R2 is the running index.' }
        ],
        result: 'Loaded values: immediate **500**, direct **800**, indirect **700**, register-indirect **300**, indexed **100**.'
      },
      {
        title: 'PC-relative target and access count',
        problem: 'A 4-byte conditional branch `BZ offset` with offset = 44 (in bytes) is stored at address 512. (i) If the branch is taken, what address is transferred to the PC? (ii) How many memory reads are needed to fetch and execute a one-word load in indirect addressing mode?',
        steps: [
          { label: 'Step 1', text: 'During fetch, the PC is incremented past the whole instruction: from 512 to $512 + 4 = 516$. This 516 — not 512 — is the base for the relative computation.' },
          { label: 'Step 2', text: '```text\ntarget = PC(after fetch) + offset = 516 + 44 = 560\n```\nIf taken, control goes to address **560**; if not taken, execution simply continues at 516.' },
          { label: 'Step 3', text: 'For the indirect load: read 1 fetches the instruction word; read 2 fetches the pointer $M[A]$; read 3 fetches the actual operand at that pointer — a total of **3** memory reads.' },
          { label: 'Step 4', text: 'Contrast the counts: the same load in direct mode needs 2 reads and in register mode only 1. These counting questions appear as NAT with one-word instructions assumed unless stated.' }
        ],
        result: '(i) Branch target = **560**; (ii) indirect-mode load = **3** memory reads.'
      }
    ],
    keyTakeaways: [
      'Effective address formulas: direct $EA = A$; indirect $EA = M[A]$; register-indirect $EA = [R]$; indexed $EA = A + [R]$.',
      'PC-relative target = address of the next instruction + signed offset — the PC has already been incremented.',
      'Memory reads for a one-word load: register/immediate 1, direct 2, indirect 3.',
      'Indexed mode is the array-addressing mode: base field fixed, index register stepped per element.'
    ],
    quiz: [
      {
        q: 'An indexed-mode instruction has address field 1000 and the index register contains 200 (word-addressable memory). The effective address is',
        options: ['1200', '1000', '800', '1020'],
        answer: 0,
        explanation: 'Step 1: Indexed mode computes $EA = A + [X]$. Step 2: Substituting, $EA = 1000 + 200 = 1200$. Step 3: Since memory is word-addressable, no byte scaling applies. Step 4: 1020 would wrongly scale the index by bytes on a word-addressable machine.'
      },
      {
        q: 'A 4-byte branch instruction with a byte offset of 60 is stored at address 1000. If taken, the branch transfers control to',
        options: ['1060', '1064', '1044', '1160'],
        answer: 1,
        explanation: 'Step 1: The PC is incremented during fetch to $1000 + 4 = 1004$. Step 2: The relative target is $1004 + 60 = 1064$. Step 3: 1060 is the answer that forgets the PC increment — the single most common slip. Step 4: The offset is added to the *next* instruction address, never to the branch address itself.'
      },
      {
        q: 'In which addressing mode is the operand field of the instruction itself the operand?',
        options: ['Direct', 'Indirect', 'Immediate', 'Indexed'],
        answer: 2,
        explanation: 'Step 1: Immediate mode embeds the operand value inside the instruction word. Step 2: No memory reference beyond the instruction fetch is needed to obtain it. Step 3: Direct and indirect use the field as an address, and indexed adds a register to it. Step 4: Hence the field is *data*, not an address, only in immediate mode.'
      },
      {
        q: 'Assuming one-word instructions, the number of memory reads needed to fetch and execute a load instruction in indirect addressing mode is',
        options: ['2', '3', '4', '1'],
        answer: 1,
        explanation: 'Step 1: Read 1 fetches the instruction word containing the opcode and address field. Step 2: Read 2 fetches the pointer stored at that address. Step 3: Read 3 fetches the operand at the location the pointer names. Step 4: Direct mode would stop one read earlier (2 total); the extra hop is exactly what "indirect" buys.'
      }
    ]
  },

  // ------------------------------------------------------- 5.1 Programming in C
  {
    sectionId: 'cse-g5-s1',
    readingTime: 10,
    prerequisites: [
      'Familiarity with any procedural programming language (variables, loops, functions)',
      'Binary and hexadecimal number basics for address arithmetic'
    ],
    intro: 'Programming and Data Structures is the highest-weightage core area at roughly 10–13 marks, and the paper always opens it with C semantics — expression evaluation, pointers and arrays, strings, storage classes and sizeof on structures. The items are output-prediction MCQs and NATs built from deliberately tricky snippets, and every trap is a specific rule of the language. This section covers exactly those rules.',
    objectives: [
      'Evaluate expressions using precedence, associativity, short-circuit operators and C integer division/modulo rules',
      'Trace pointer and array expressions, including pointer arithmetic scaling and row-major 2-D addressing',
      'Distinguish strlen from sizeof and predict string-operation behaviour',
      'Compute the sizes of structures and unions under alignment and padding rules'
    ],
    concepts: [
      {
        term: 'Operators and evaluation order',
        kind: 'law',
        statement: 'Precedence (high → low): `! ~ ++ -- (unary)` > `* / %` > `+ -` > relational > equality > `&&` > `||` > `?:` > assignment; **&& and || short-circuit** — the right operand is not evaluated when the left decides the result.',
        detail: 'Integer division truncates toward zero: $7/2 = 3$ and $-7/2 = -3$, with $-7 \\% 2 = -1$ (C99: the sign of the quotient and remainder follow the dividend). Modulo binds like multiplication: `a % b * c` groups left to right. Modifying the same object twice without an intervening sequence point is undefined behaviour — the graduate assessment snippets avoid it, and so should your answers.'
      },
      {
        term: 'Pointers and arrays',
        kind: 'method',
        statement: '**$a[i] \\equiv *(a + i)$**; adding an integer to a pointer moves by whole objects, i.e. by $i \\times \\text{sizeof}(T)$ bytes; the difference $p - q$ of same-array pointers is an **element count**, not a byte count.',
        detail: 'An array name decays to `&a[0]` in expressions (exceptions: sizeof, &). For `int a[M][N]`, storage is row-major: `&a[i][j]` = base $+ (i \\cdot N + j) \\times \\text{sizeof(int)}$, and `a[i][j]` ≡ `*(*(a + i) + j)`. On a little-endian machine the byte at the lowest address belongs to the least-significant byte — asked via character-pointer reads.'
      },
      {
        term: 'Strings and the null terminator',
        kind: 'definition',
        statement: 'A C **string is a char array terminated by the null character** `\\0`; `strlen` counts characters before the terminator, while `sizeof` reports the whole declared array including the terminator.',
        detail: '`char s[] = "gate"` has strlen 4 and sizeof 5. Library functions (strcpy, strcat, printf %s) rely entirely on the terminator — an unterminated array runs off the end. Comparing with `==` compares *addresses*, not contents; use strcmp. A quiz favourite: sizeof of a char pointer is the pointer size (4 or 8), never the string length.'
      },
      {
        term: 'Storage classes and lifetime',
        kind: 'definition',
        statement: '**auto** (default block local — dies at block exit), **static** (initialized once, retains its value between calls; at file scope, internal linkage), **extern** (defined elsewhere), **register** (a hint to keep in a register).',
        detail: 'A static local combines block scope with program lifetime — the exact combination the graduate assessment exploits by calling a counter function three times. Scope and lifetime are independent: a variable can go out of scope while its value persists (static), or remain in scope with a stale value after an owning function returns (returning the address of a local — undefined).'
      },
      {
        term: 'Structures, unions and padding',
        kind: 'law',
        statement: 'A **struct** lays members out in declaration order, each at an offset that is a multiple of its alignment requirement, with tail padding so that `sizeof(struct)` is a multiple of the strictest member alignment; a **union** overlays all members at offset 0 and its size is the largest member rounded up to that alignment.',
        detail: '`struct {char c; int i; short s;}` sizes to 12 on a machine with 4-byte int alignment: c at 0, padding 1–3, i at 4–7, s at 8–9, tail padding 10–11. `union {char c[6]; int i; short s;}` sizes to 8 (6 rounded up to the int alignment 4 → next multiple is 8). Reordering members from largest to smallest minimises padding — a standard interview-and-the graduate assessment observation.'
      },
      {
        term: 'Parameter passing',
        kind: 'insight',
        statement: '**C passes every argument by value — including pointers**; an array parameter decays to a pointer, so `sizeof` inside the function sees the pointer, not the caller array.',
        detail: 'To let a function modify a caller variable, pass its address. When the graduate assessment prints `sizeof(arr)/sizeof(arr[0])` inside a function that received `int arr[]`, the correct output is 2 (for an 8-byte pointer and 4-byte int) or similar — never the original element count. This decay rule also explains why 2-D array parameters must declare the column count.'
      }
    ],
    examples: [
      {
        title: 'Pointer walk with integer arithmetic',
        problem: 'What does the following program print, line by line?\n```c\nint a[] = {10, 20, 30};\nint *p = a + 1;\nprintf("%d\\n", *p);                 /* line 1 */\np++;\nprintf("%d\\n", *p);                 /* line 2 */\nprintf("%d\\n", (int)(p - a));        /* line 3 */\nprintf("%d %d\\n", 17 / 5, 17 % 5);  /* line 4 */\n```',
        steps: [
          { label: 'Step 1', text: '`a + 1` points one whole element past the start — at `a[1]`. Line 1 dereferences it: **20**.' },
          { label: 'Step 2', text: '`p++` advances by one element (4 bytes for int, though the scaling is invisible to the programmer): p now holds `&a[2]`. Line 2 prints **30**.' },
          { label: 'Step 3', text: 'Pointer subtraction yields the number of elements between the pointers, not bytes: $p - a = 2$. Line 3 prints **2**.' },
          { label: 'Step 4', text: 'Integer division truncates toward zero and the matching remainder keeps the dividend sign: $17/5 = 3$, $17 \\% 5 = 2$. Line 4 prints **3 2**.' }
        ],
        result: 'Line 1: **20** · Line 2: **30** · Line 3: **2** · Line 4: **3 2**.'
      },
      {
        title: 'sizeof with alignment padding',
        problem: 'On a machine where `sizeof(int) = 4`, `sizeof(short) = 2`, `sizeof(char) = 1` and every member must sit at an offset that is a multiple of its own size (with struct size a multiple of its strictest member), compute `sizeof(struct S)` and `sizeof(union U)` for\n```c\nstruct S { char c; int i; short s; };\nunion  U { char c[6]; int i; short s; };\n```\nand their sum.',
        steps: [
          { label: 'Step 1', text: '```text\nstruct S offsets: c -> 0, (pad 1..3), i -> 4..7, s -> 8..9, (tail pad 10..11)\n```\nIn the struct, c occupies byte 0; i needs 4-byte alignment so it starts at 4; s follows at 8–9. The struct must be a multiple of its strictest alignment (4), so two tail bytes pad it to 12.' },
          { label: 'Step 2', text: 'In the union all members overlay offset 0: the largest is `char c[6]` (6 bytes), but the union alignment is the maximum member alignment (4 from the int), so the size rounds up to **8**.' },
          { label: 'Step 3', text: 'Therefore `sizeof(struct S) = 12`, `sizeof(union U) = 8`, and the sum is $12 + 8 = 20$.' },
          { label: 'Step 4', text: 'Check the padding intuition: reordering the struct as `{int i; short s; char c;}` would need only $4 + 2 + 1 = 7$ bytes padded to 8 — the padding-aware layout saves a third of the memory.' }
        ],
        result: '`sizeof(struct S) = 12`, `sizeof(union U) = 8`; sum = **20** bytes.'
      }
    ],
    keyTakeaways: [
      '`a[i]` is `*(a + i)`; pointer arithmetic scales by `sizeof(T)` and `p - q` counts elements.',
      'Integer division truncates toward zero: 17/5 = 3 with 17%5 = 2, and −7/2 = −3 with −7%2 = −1.',
      '`char s[] = "gate"`: strlen = 4 (stops at the terminator), sizeof = 5 (counts the terminator).',
      'Struct members are padded to their alignment and the struct to its strictest member; unions overlay members and round the largest up to the union alignment.'
    ],
    quiz: [
      {
        q: 'The value printed by `printf("%d\\n", 17 / 5 + 17 % 5);` is',
        options: ['5', '3', '6', '4'],
        answer: 0,
        explanation: 'Step 1: `/` and `%` share precedence and group left to right, evaluated before `+`. Step 2: $17/5 = 3$ (truncation toward zero). Step 3: $17 \\% 5 = 2$. Step 4: $3 + 2 = 5$.'
      },
      {
        q: 'An `int a[10]` is allocated at decimal address 1000 with `sizeof(int) = 4`. The address of `a[3]` is',
        options: ['1003', '1006', '1012', '1016'],
        answer: 2,
        explanation: 'Step 1: `&a[3]` = base + 3 × sizeof(int). Step 2: That is $1000 + 3 \\times 4 = 1012$. Step 3: 1003 would treat elements as one byte; 1006 as two bytes. Step 4: Pointer arithmetic always scales by the element size.'
      },
      {
        q: 'For `char s[] = "gate";`, the values of `strlen(s)` and `sizeof(s)` are respectively',
        options: ['4 and 5', '5 and 5', '4 and 4', '5 and 4'],
        answer: 0,
        explanation: 'Step 1: The literal stores g, a, t, e and the terminating null — 5 bytes in the array. Step 2: strlen counts characters before the null: 4. Step 3: sizeof reports the whole array: 5. Step 4: Note that for `char *p = "gate"`, sizeof(p) would be the pointer size instead — a different question.'
      },
      {
        q: 'A function `int f(void) { static int c = 0; return ++c; }` is called three times in succession. The third call returns',
        options: ['1', '2', '3', '6'],
        answer: 2,
        explanation: 'Step 1: A static local is initialized once, before the first call. Step 2: The calls return 1, then 2 — the value persists between calls. Step 3: The third call returns **3**. Step 4: Without `static`, each call would re-initialize c to 0 and always return 1.'
      }
    ]
  },

  // ------------------------------------------------- 6.1 Asymptotic Complexity
  {
    sectionId: 'cse-g6-s1',
    readingTime: 10,
    prerequisites: [
      'Logarithms and exponent laws (log of product, change of base)',
      'Arithmetic and geometric summation formulas'
    ],
    intro: 'Algorithms contributes about 7–9 marks, and nearly every question begins with an asymptotic bound — ranking growth rates, bounding a loop nest, or solving a recurrence. The items are MCQ/MSQ on O, Ω and Θ statements and NAT on exact iteration counts. This section builds the formal definitions, the growth-rate ladder and the counting techniques that every later algorithms topic reuses.',
    objectives: [
      'State the formal definitions of O, Ω and Θ with the constants c and n₀ used in proofs',
      'Rank common functions by asymptotic growth using limit comparisons',
      'Derive exact iteration counts for nested, dependent and multiplicative loops',
      'Solve standard recurrences by unrolling, recursion trees and the master theorem'
    ],
    concepts: [
      {
        term: 'Formal definitions',
        kind: 'definition',
        statement: '$f \\in O(g)$ **iff** there exist $c > 0, n_0$ with $f(n) \\le c \\cdot g(n)$ for all $n \\ge n_0$; $\\Omega$ reverses the inequality; $\\Theta = O \\cap \\Omega$.',
        detail: 'O bounds a *function*, not a case: saying "the worst case is O(n²)" is fine, but so is "the best case of bubble sort is O(n²)" — a loose bound is still true. $2n \\in O(n)$ and also in $O(n^2)$; only Θ conveys tightness. To prove $f \\in O(g)$ exhibit one valid pair (c, n₀); to refute it, show f/g → ∞.'
      },
      {
        term: 'Growth-rate ladder',
        kind: 'notation',
        statement: 'Standard chain: **$\\log n \\prec \\sqrt{n} \\prec n \\prec n \\log n \\prec n^2 \\prec n^3 \\prec 2^n \\prec n!$**; any polynomial beats any polylogarithm, any exponential beats any polynomial.',
        detail: 'Compare unknowns by limits: if $\\lim f/g = 0$ then $f \\prec g$; a positive constant means $\\Theta$; $\\infty$ means $f \\succ g$. Handy identities: $2^{\\log_2 n} = n$, $\\log(n!) = \\Theta(n \\log n)$, $\\log_a n = \\Theta(\\log_b n)$ for all bases > 1, and $n^{1/2} \\prec n^{0.99}$ — powers of n are ordered strictly by exponent.'
      },
      {
        term: 'Loop analysis rules',
        kind: 'method',
        statement: 'Sequential blocks **add** (bound by the maximum); independent nested loops **multiply**; dependent inner loops **sum**: $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} \\in \\Theta(n^2)$; a loop with `i *= 2` runs $\\Theta(\\log_2 n)$ times.',
        detail: 'Multiplicative control variables give geometric sums: $\\sum_{i=0}^{k-1} 2^i = 2^k - 1$. A loop halving i from n runs while $i > 1$, i.e. $\\lfloor \\log_2 n \\rfloor$ iterations — for n = 32 that is exactly 5. Combine parts with the sum rule and report the dominant class, but keep exact counts handy for NAT variants.'
      },
      {
        term: 'Recurrence solving',
        kind: 'method',
        statement: '**Unroll or draw the recursion tree and sum per-level work**: $T(n) = 2T(n/2) + n \\Rightarrow \\Theta(n \\log n)$; $T(n) = T(n/2) + 1 \\Rightarrow \\Theta(\\log n)$; $T(n) = T(n-1) + n \\Rightarrow \\Theta(n^2)$.',
        detail: 'For $2T(n/2) + n$: level $i$ holds $2^i$ subproblems of size $n/2^i$, each costing its size, so every level costs exactly $n$ and there are $\\log_2 n$ levels plus $n$ units of leaf work — total $n(\\log_2 n + 1)$. Verify small cases numerically before trusting a closed form.'
      },
      {
        term: 'Master theorem',
        kind: 'theorem',
        statement: 'For $T(n) = aT(n/b) + f(n)$ with $a \\ge 1, b > 1$, compare $f$ against $n^{\\log_b a}$: if $f$ is polynomially **smaller**, $T = \\Theta(n^{\\log_b a})$; if **equal up to log factors**, $T = \\Theta(n^{\\log_b a} \\log n)$; if **larger** (with the regularity condition), $T = \\Theta(f)$.',
        detail: 'Merge sort: $a = 2, b = 2, f = n$ and $n^{\\log_2 2} = n$ — case 2, $\\Theta(n \\log n)$. Binary search: $a = 1, b = 2, f = 1$, $n^{\\log_2 1} = 1$ — case 1, $\\Theta(\\log n)$. Tree traversal $T(n) = 2T(n/2) + 1$ → $\\Theta(n)$. The regularity condition ($a f(n/b) \\le c f(n)$, c < 1) is what case 3 needs — the graduate assessment checks whether you check it.'
      },
      {
        term: 'Space complexity and stack depth',
        kind: 'insight',
        statement: '**Auxiliary space counts extra memory including the recursion stack**: depth $d$ with frame size $F$ costs $d \\times F$ on top of the data.',
        detail: 'Merge sort: O(n) buffer + O(log n) stack. Quicksort: O(log n) stack in the best/average case (recurse into the smaller half first), O(n) in the worst case. Heapsort: O(1). An in-place algorithm is one whose auxiliary space is O(1) — "in-place merge sort" claims deserve suspicion.'
      }
    ],
    examples: [
      {
        title: 'Exact counts for mixed loops (n = 8)',
        problem: 'How many times does `count++` execute in total for n = 8?\n```c\ncount = 0;\nfor (i = 1; i <= n; i++)\n    for (j = 1; j <= i; j++)\n        count++;\nfor (k = 1; k < n; k *= 2)\n    for (j = 1; j <= n; j++)\n        count++;\n```',
        steps: [
          { label: 'Step 1', text: '```text\npart A: inner runs i times => sum_{i=1..8} i = 36\n```\nThe dependent double loop runs the inner body $i$ times for each $i$: $\\sum_{i=1}^{8} i = \\frac{8 \\times 9}{2} = 36$.' },
          { label: 'Step 2', text: '```text\npart B: k in {1, 2, 4} (k < 8) => 3 outer iterations x 8 inner = 24\n```\nThe doubling loop takes k = 1, 2, 4 (then 8 fails k < 8): $\\lceil \\log_2 8 \\rceil = 3$ outer iterations, each running the inner loop 8 times — 24.' },
          { label: 'Step 3', text: 'Total: $36 + 24 = 60$ increments for n = 8.' },
          { label: 'Step 4', text: 'Asymptotically part A is $\\Theta(n^2)$ and part B is $\\Theta(n \\log n)$; the sum rule gives $\\Theta(n^2)$ overall, but only the exact count answers the NAT variant.' }
        ],
        result: '**60** increments for n = 8; overall complexity $\\Theta(n^2)$.'
      },
      {
        title: 'Recursion tree for T(n) = 2T(n/2) + n',
        problem: 'With $T(1) = 1$, compute $T(8)$ exactly, derive the closed form, and state the asymptotic class (also via the master theorem).',
        steps: [
          { label: 'Step 1', text: '```text\nT(8) = 8 + 2*T(4)\nT(4) = 4 + 2*T(2)\nT(2) = 2 + 2*T(1) = 4\n```\nUnroll from the bottom: $T(2) = 2 + 2(1) = 4$; $T(4) = 4 + 2(4) = 12$; $T(8) = 8 + 2(12) = 32$.' },
          { label: 'Step 2', text: 'Tree view: the root does work 8; its two children do 4 each (total 8); the four grandchildren do 2 each (total 8); the eight leaves do 1 each (total 8). Every level — including the leaves — costs exactly $n$.' },
          { label: 'Step 3', text: 'There are $\\log_2 8 = 3$ split levels plus the leaf level, so $T(8) = 8 \\times (3 + 1) = 32$, matching the unroll. Generalising: $T(n) = n(\\log_2 n + 1)$.' },
          { label: 'Step 4', text: 'Master theorem: $a = 2, b = 2$, $f(n) = n = \\Theta(n^{\\log_2 2})$ — case 2 — so $T(n) = \\Theta(n \\log n)$, consistent with the closed form.' }
        ],
        result: '$T(8) = 32$; closed form $T(n) = n(\\log_2 n + 1) \\in \\Theta(n \\log n)$.'
      }
    ],
    keyTakeaways: [
      '$f \\in O(g)$ needs one witness pair (c, n₀); Θ is the tight two-sided bound, and O is not a synonym for "worst case".',
      'Growth ladder: $\\log n \\prec \\sqrt{n} \\prec n \\prec n \\log n \\prec n^2 \\prec 2^n \\prec n!$ — compare via $\\lim f/g$.',
      'Dependent loops sum ($\\sum i = n(n+1)/2$); doubling loops run $\\Theta(\\log_2 n)$ times.',
      'Master theorem case 2 ($f = \\Theta(n^{\\log_b a})$) gives $\\Theta(n^{\\log_b a} \\log n)$ — the merge-sort bound $n \\log n$.'
    ],
    quiz: [
      {
        q: 'Which list orders the functions by **ascending** asymptotic growth?',
        options: ['$\\sqrt{n},\\ n,\\ n \\log n,\\ n^2$', '$n,\\ \\sqrt{n},\\ n^2,\\ n \\log n$', '$\\sqrt{n},\\ n \\log n,\\ n,\\ n^2$', '$\\log n,\\ n^2,\\ n,\\ \\sqrt{n}$'],
        answer: 0,
        explanation: 'Step 1: $\\sqrt{n} = n^{0.5}$ grows slower than $n$. Step 2: $n \\log n$ grows faster than $n$ but slower than any $n^{1+\\epsilon}$. Step 3: $n^2$ dominates all three. Step 4: Hence the order $\\sqrt{n} \\prec n \\prec n \\log n \\prec n^2$; every other option violates at least one of these comparisons.'
      },
      {
        q: 'The solution of $T(n) = T(n/2) + 1$ with $T(1) = 1$ is',
        options: ['$\\Theta(1)$', '$\\Theta(\\log n)$', '$\\Theta(n)$', '$\\Theta(n \\log n)$'],
        answer: 1,
        explanation: 'Step 1: Each unrolling step halves the problem and adds 1. Step 2: After $k$ steps the size is $n/2^k$, reaching 1 when $k = \\log_2 n$. Step 3: The total added is $\\log_2 n + 1$, i.e. $\\Theta(\\log n)$. Step 4: This is the binary-search recurrence; $\\Theta(1)$ would ignore the recursion entirely.'
      },
      {
        q: 'The solution of $T(n) = 2T(n/2) + n$ is',
        options: ['$\\Theta(n)$', '$\\Theta(n \\log n)$', '$\\Theta(n^2)$', '$\\Theta(\\log n)$'],
        answer: 1,
        explanation: 'Step 1: Here $a = 2, b = 2$, so $n^{\\log_b a} = n^{\\log_2 2} = n$. Step 2: The toll $f(n) = n$ matches $n^{\\log_b a}$, putting us in master-theorem case 2. Step 3: The tree has $\\log_2 n$ levels each costing $n$. Step 4: Hence $\\Theta(n \\log n)$ — the merge-sort bound; $\\Theta(n)$ would be the answer for toll 1.'
      },
      {
        q: 'The loop `for (i = n; i > 1; i = i / 2) count++;` executes `count++` exactly how many times for n = 32?',
        options: ['4', '5', '6', '32'],
        answer: 1,
        explanation: 'Step 1: i takes the values 32, 16, 8, 4, 2 while the condition i > 1 holds. Step 2: That is 5 iterations; after i becomes 1 the loop exits. Step 3: In general the count is $\\lfloor \\log_2 n \\rfloor$. Step 4: Counting 32 confuses the initial value with the iteration count.'
      }
    ]
  },

  // -------------------------------------------- 7.1 Regular Expressions & Finite Automata
  {
    sectionId: 'cse-e-toc-s7',
    readingTime: 10,
    prerequisites: [
      'Sets and set operations (languages are sets of strings)',
      'Directed graphs (states and transitions form one)'
    ],
    intro: 'Theory of Computation contributes about 6–8 marks, and the paper reliably opens with finite automata — designing or minimizing a DFA, converting an NFA by subset construction, or reading the language of a regular expression. The items are MCQ/MSQ on language membership and equivalence, and NAT on state counts. This section covers the machine definitions, the constructions, and the closure facts needed to reason about all of them.',
    objectives: [
      'Define DFAs and NFAs formally and trace the acceptance of specific strings',
      'Convert NFAs (with ε-moves) to equivalent DFAs by subset construction, computing ε-closures',
      'Move between regular expressions and automata and read off the language of an expression',
      'Apply closure properties of regular languages and minimize DFAs by merging indistinguishable states'
    ],
    concepts: [
      {
        term: 'DFA',
        kind: 'definition',
        statement: 'A **DFA** is $M = (Q, \\Sigma, \\delta, q_0, F)$ with a *total* transition function $\\delta : Q \\times \\Sigma \\to Q$; $M$ accepts $w$ iff the extended transition $\\delta^*(q_0, w) \\in F$, and $L(M)$ is the set of accepted strings.',
        detail: 'Totality is part of the definition — a design with missing transitions is an NFA, so incomplete DFAs are completed with a trap (dead) state that loops on everything and is non-accepting. The minimal DFA of a regular language is unique up to state renaming, which is why "how many states must a DFA for L have" has a single right answer.'
      },
      {
        term: 'NFA and ε-NFA',
        kind: 'definition',
        statement: 'An **NFA** maps each (state, symbol) to a *set* of states and accepts $w$ if **some** path on $w$ from $q_0$ ends in $F$; an ε-NFA additionally may follow ε-edges, formalised by the ε-closure.',
        detail: 'NFAs are easier to design but no more powerful: the subset construction converts any NFA to a DFA whose states are sets of NFA states, with up to $2^n$ states — and this blow-up is unavoidable in the worst case. For an ε-NFA, close every subset under ε before and after reading each symbol; when the initial subset is $\\varepsilon\\text{-closure}(\\{q_0\\})$, accepting DFA states are those subsets intersecting F.'
      },
      {
        term: 'RE ↔ FA equivalence',
        kind: 'theorem',
        statement: '**Kleene\'s theorem**: a language is regular iff some finite automaton accepts it iff some regular expression denotes it; RE → ε-NFA via Thompson gadgets, DFA → RE via state elimination.',
        detail: 'Working identities: $\\emptyset + R = R$, $\\varepsilon R = R$, $R^* = \\varepsilon + RR^*$, and $(a+b)^* = (a^*b^*)^*$. To read a dense expression like $(0+1)^*1(0+1)$, parse the mandatory core: some 1 with exactly one symbol after it — strings whose second symbol from the right is 1.'
      },
      {
        term: 'Closure properties',
        kind: 'law',
        statement: 'Regular languages are closed under **union, concatenation, star, complement, intersection, difference, reversal and homomorphism** — the whole regular-expression/automaton toolbox.',
        detail: 'Complement: flip accepting and non-accepting states of a *complete* DFA — doing this on an NFA is wrong because acceptance there is existential. Intersection: product construction on DFAs, never syntactic intersection of expressions. Not closed under: infinite (countable) unions, subsets, and languages like $\\{a^{2^n}\\}$ or "strings of prime length" — the standard non-regular exhibits for the pumping lemma in a later section.'
      },
      {
        term: 'DFA minimization',
        kind: 'method',
        statement: '**Delete unreachable states, then merge states no distinguishing string separates**: $p \\equiv q$ iff for every $w$, exactly one of $\\delta^*(p, w), \\delta^*(q, w)$ is in $F$; the resulting minimal DFA is unique (Myhill–Nerode).',
        detail: 'Table-filling algorithm: first mark all (accepting, non-accepting) pairs; repeatedly mark a pair whose successors on some symbol are already marked. A state count worth memorising: the minimal DFA for "binary strings ending with w" has exactly $|w| + 1$ states — 3 for ending in 01, 4 for ending in 011.'
      },
      {
        term: 'State-count heuristics',
        kind: 'insight',
        statement: '**Count what the machine must remember**: a suffix window of length $k$ forces about $2^k$ states, and "the k-th symbol from the end is 1" needs $2^k$ DFA states though it has an NFA with only $k + 1$ states.',
        detail: 'That $2^k$ versus $k+1$ gap is the canonical proof that subset construction is tight — the graduate assessment asks exactly this. Before drawing, decide the memory contents (e.g., "the parity of 1s seen" = 2 states; "the last two symbols" = 4 states plus a start), then check reachability; unreachable memory states never appear in the minimal machine.'
      }
    ],
    examples: [
      {
        title: 'Design and prove minimal: strings containing 01',
        problem: 'Design a DFA for $L = \\{w \\in \\{0,1\\}^* : 01 \\text{ is a substring of } w\\}$, prove it minimal, and describe its complement language.',
        steps: [
          { label: 'Step 1', text: '```text\nA: no progress yet (start)\nB: a 0 was just seen (waiting for 1)\nC: 01 has been seen (accepting sink)\n```\nThe machine must remember its progress towards the pattern: A (nothing useful seen), B (last symbol was 0, pattern may complete on a 1), C (pattern seen — accept forever).' },
          { label: 'Step 2', text: 'Transitions: $A: 0 \\to B, 1 \\to A$; $B: 0 \\to B, 1 \\to C$; $C: 0 \\to C, 1 \\to C$. The function is total, so this is a genuine DFA.' },
          { label: 'Step 3', text: 'Minimality by distinguishing strings: ε versus 0 — appending 1 gives "1" (rejected) versus "01" (accepted); 0 versus 01 — appending ε leaves 0 rejected and 01 accepted. So A, B, C are pairwise distinguishable and no 2-state DFA suffices.' },
          { label: 'Step 4', text: 'Complement: swap accepting and non-accepting states of this complete DFA — the result accepts strings with **no** 01 substring, which is exactly the language $0^*1^*$ (all 0s must precede all 1s).' }
        ],
        result: 'A 3-state DFA (states A, B, C as above, only C accepting) recognises L; it is minimal, and the complement of L is $0^*1^*$.'
      },
      {
        title: 'Subset construction: NFA for strings ending in "ab"',
        problem: 'An NFA over $\\{a, b\\}$ has states $q_0$ (start), $q_1$, $q_2$ (sole accepting state) and transitions: on $a$: $q_0 \\to \\{q_0, q_1\\}$; on $b$: $q_0 \\to \\{q_0\\}$ and $q_1 \\to \\{q_2\\}$; $q_2$ has no outgoing transitions. Convert it to an equivalent DFA.',
        steps: [
          { label: 'Step 1', text: 'Start state of the DFA is the singleton set $\\{q_0\\}$ (there are no ε-moves; otherwise we would take $\\varepsilon$-closure of $\\{q_0\\}$). Call it A.' },
          { label: 'Step 2', text: '```text\nA = {q0}:  a -> {q0,q1} = B     b -> {q0} = A\nB = {q0,q1}: a -> {q0,q1} = B   b -> {q0} U {q2} = C\nC = {q0,q2}: a -> {q0,q1} = B   b -> {q0} = A\n```\nCompute transitions subset by subset: from B on b, $q_0$ returns to $\\{q_0\\}$ while $q_1$ moves to $\\{q_2\\}$, and the union is $\\{q_0, q_2\\} = C$.' },
          { label: 'Step 3', text: 'Accepting DFA states are the subsets containing the NFA accepting state $q_2$: only C. All three subsets A, B, C are reachable (A start, B via a, C via ab), so the DFA has exactly 3 states.' },
          { label: 'Step 4', text: 'The result is already minimal — the language is "ends with ab", whose minimal DFA needs $|w| + 1 = 3$ states; subset construction happened to produce it directly here (in the worst case it can produce $2^n$ states).' }
        ],
        result: 'DFA: states $A = \\{q_0\\}$, $B = \\{q_0, q_1\\}$, $C = \\{q_0, q_2\\}$; transitions A—a→B, A—b→A, B—a→B, B—b→C, C—a→B, C—b→A; only **C accepts**.'
      }
    ],
    keyTakeaways: [
      'A DFA needs a total transition function — complete partial designs with a trap state before claiming DFA-hood.',
      'Subset construction: DFA states are sets of NFA states; worst case $2^n$ states, and this bound is tight.',
      'Complement only by flipping a complete DFA; intersection via the product construction.',
      'Minimal DFA for "ends with w" has $|w| + 1$ states; "k-th symbol from the end is 1" needs $2^k$ states versus $k + 1$ for an NFA.'
    ],
    quiz: [
      {
        q: 'The minimum number of states in a DFA accepting all binary strings that **end with 011** is',
        options: ['3', '4', '5', '8'],
        answer: 1,
        explanation: 'Step 1: The machine must track its progress through the suffix 011. Step 2: The progress states are: nothing matched, matched 0, matched 01, matched 011 — four states. Step 3: The minimal DFA for "ends with w" has exactly $|w| + 1$ states, and $|011| + 1 = 4$. Step 4: Three states would only track a 2-symbol suffix.'
      },
      {
        q: 'In the worst case, converting an n-state NFA to an equivalent DFA by subset construction can produce',
        options: ['$n^2$ states', '$2n$ states', '$2^n$ states', '$n!$ states'],
        answer: 2,
        explanation: 'Step 1: Each DFA state is a subset of the n NFA states. Step 2: There are at most $2^n$ subsets, and all can be reachable. Step 3: The "k-th symbol from the end is 1" family shows the bound is tight. Step 4: Hence $2^n$ is the correct worst case.'
      },
      {
        q: 'Which statement about regular languages is FALSE?',
        options: ['The union of two regular languages is regular', 'The complement of a regular language is regular', 'The intersection of two regular languages is regular', 'Every countable union of regular languages is regular'],
        answer: 3,
        explanation: 'Step 1: Union is closed by the NFA construction or by the + operator on expressions. Step 2: Complement is closed via the complete-DFA state flip. Step 3: Intersection follows from De Morgan on union and complement, or the product construction. Step 4: Countable unions can escape regularity: $\\{a\\} \\cup \\{a^2\\} \\cup \\{a^3\\} \\cup \\cdots$ unions up to $a^*$, but e.g. singletons $\\{a^{2^n}\\}$ union to a non-regular language — closure fails.'
      },
      {
        q: 'The regular expression $(0 + 1)^*1(0 + 1)$ over the alphabet $\\{0,1\\}$ denotes exactly the set of strings',
        options: ['whose second symbol from the right is 1', 'whose second symbol from the left is 1', 'that end with 1', 'that contain at least two 1s'],
        answer: 0,
        explanation: 'Step 1: Parse the expression: any prefix, then a mandatory 1, then exactly one more symbol. Step 2: So every accepted string has length ≥ 2 and its second-to-last symbol is forced to be 1. Step 3: The last symbol is free — strings may end in 0, ruling out "end with 1". Step 4: The first symbols are unconstrained by $(0+1)^*$, so nothing is forced at the left.'
      }
    ]
  },

  // ------------------------------------ 9.1 System Calls, Processes, Threads & IPC
  {
    sectionId: 'cse-g9-s1',
    readingTime: 9,
    prerequisites: [
      'The idea of a program versus a running program',
      'Basic C programming (the fork() examples are in C)'
    ],
    intro: 'Operating System questions carry 7–10 marks, and the section opener is almost always about processes — counting the processes or outputs of a fork() snippet, spotting an impossible state transition, or choosing between threads and IPC mechanisms. fork() items are MCQ/NAT with a numeric answer, so the scoring skill is drawing the process tree quickly and correctly. This section covers the process model, the system-call interface, threads and IPC.',
    objectives: [
      'Explain the process model: states, the PCB, and what a context switch must save',
      'Trace fork()-based C snippets and count processes and outputs exactly',
      'Contrast user-level and kernel-level threads and identify what threads share',
      'Choose between shared memory and message passing (including pipes) for a given IPC need'
    ],
    concepts: [
      {
        term: 'Process and the PCB',
        kind: 'definition',
        statement: 'A **process is a program in execution** — the active entity described by its **PCB** (process control block): PID, state, program counter, CPU registers, memory-management tables, and open-file information.',
        detail: 'A program is a passive executable file; a process is that program plus resources plus execution state, and many processes can run the same program concurrently. The PCB is what the OS swaps on a context switch; "which PCB fields need not be saved" is a favourite MCQ (answer: anything the kernel keeps in tables outside the process context, e.g. accounting fields — never PC or registers).'
      },
      {
        term: 'Process state transitions',
        kind: 'law',
        statement: 'Legal transitions: **new → ready** (admission), **ready → running** (dispatch), **running → ready** (preemption/time slice), **running → blocked** (I/O or event wait), **blocked → ready** (event completion), **running → terminated**. The transition **ready → blocked is impossible**.',
        detail: 'A process can only enter the blocked state by executing a wait-type request, which requires the CPU — i.e., it must be running. Symmetrically, blocked → running is impossible: an unblocked process must queue in ready first. the graduate assessment lists five transitions and asks which cannot occur; these two are the answers.'
      },
      {
        term: 'System calls and dual mode',
        kind: 'method',
        statement: '**User code requests OS services via system calls that trap into kernel mode**; the hardware mode bit separates user from kernel mode, and privileged instructions (I/O, halt, direct clock access) execute only in kernel mode.',
        detail: 'Core process calls: fork() clones the caller, exec() replaces the address space with a new program, wait() reaps a terminated child, exit() terminates. A system call causes a mode switch; it causes a full context switch only if the scheduler switches processes. Interrupts also enter kernel mode — with the same protections.'
      },
      {
        term: 'Threads',
        kind: 'definition',
        statement: 'A **thread** is an execution stream owning its own PC, registers and stack, while sibling threads of one process **share code, global data, heap and open files**.',
        detail: 'User-level threads (many-to-one model) are invisible to the kernel: switches are fast, but one blocking system call blocks them all. Kernel-level threads (one-to-one, used by Linux pthreads) are scheduled individually and can run on separate cores. Many-to-many multiplexes many user threads over fewer kernel threads. Multithreading buys responsiveness and cheap shared-memory concurrency; it costs synchronization discipline on the shared data.'
      },
      {
        term: 'fork() semantics',
        kind: 'law',
        statement: '**fork() returns twice — 0 in the child, the child\'s PID in the parent — and every execution of fork() adds exactly one process**; n plain fork() statements in sequence produce $2^n$ processes in total ($2^n - 1$ children).',
        detail: 'Children are copy-on-write copies, so the snapshot semantics are exact: each process continues from the same point with its own return value. When forks sit inside conditionals, && and ||, or loops, trace per process: short-circuit operators decide *which* processes execute the later forks. The loop `for (i = 0; i < n; i++) fork();` leaves $2^n$ processes because every live process calls fork() once per iteration.'
      },
      {
        term: 'IPC: shared memory, messages, pipes',
        kind: 'method',
        statement: '**Shared memory**: after a one-time setup, processes exchange data by ordinary reads/writes with no kernel involvement per message — fastest, but the processes must synchronize themselves. **Message passing**: send/receive through the kernel — safer and network-transparent, with blocking (synchronous) or non-blocking primitives.',
        detail: 'Pipes are unidirectional byte streams: anonymous pipes connect only related processes (created by a parent before fork); named pipes (FIFOs) live in the filesystem and connect unrelated processes; two pipes are needed for bidirectional flow. Sockets generalise IPC across machines. Producer-consumer synchronization on shared memory is the subject of the next section.'
      }
    ],
    examples: [
      {
        title: 'Conditional fork() trace',
        problem: 'How many times does the following program print "the graduate assessment"?\n```c\nint main(void) {\n    fork();\n    if (fork())\n        fork();\n    printf("the graduate assessment\\n");\n    return 0;\n}\n```',
        steps: [
          { label: 'Step 1', text: '```text\nafter fork() #1: 2 processes (parent P, child C)\n```\nThe first fork() doubles the process count from 1 to 2; both continue to the if.' },
          { label: 'Step 2', text: 'Both processes now evaluate `fork()` inside the if: 4 processes exist. In the two parents this call returned a nonzero PID (true), and in the two children it returned 0 (false).' },
          { label: 'Step 3', text: 'Only the two parents enter the if-body and execute the inner fork(), creating 2 more processes: the total is $2 + 2 = 6$.' },
          { label: 'Step 4', text: 'All 6 processes — none calls exit before the printf — fall through to the print statement. So "the graduate assessment" appears **6** times (6 processes: 1 original + 5 children).' }
        ],
        result: 'The program prints **the graduate assessment 6 times**; 6 processes exist in total when the printf calls run.'
      },
      {
        title: 'fork() in a loop — the 2^n law',
        problem: 'How many processes exist (and how many times is a printf placed after the loop executed) for\n```c\nfor (i = 0; i < n; i++)\n    fork();\nprintf("OS\\n");\n```\nwith n = 4? How many of the processes are children?',
        steps: [
          { label: 'Step 1', text: '```text\niteration 1: every live process calls fork() -> count doubles\n```\nInduction on iterations: if $2^k$ processes are alive when iteration $k+1$ begins, each of them executes fork() once, so the count becomes $2^{k+1}$.' },
          { label: 'Step 2', text: 'Starting from 1 process, after the four iterations the counts go $1 \\to 2 \\to 4 \\to 8 \\to 16$: **16 processes** in total.' },
          { label: 'Step 3', text: 'Every process, whatever iteration it was born in, eventually leaves the loop (its private copy of i keeps advancing) and reaches the printf — so the line prints **16** times.' },
          { label: 'Step 4', text: 'Children created = total − original = $16 - 1 = 15$; equivalently the tree adds $1 + 2 + 4 + 8 = 15$ forks, one new process per fork call executed.' }
        ],
        result: 'n = 4 gives **16 processes** (15 children) and the printf executes **16 times**; in general $2^n$ processes and $2^n - 1$ children.'
      }
    ],
    keyTakeaways: [
      'A process is a program in execution with a PCB; the PCB (PC, registers, state, memory tables) is what a context switch saves.',
      'ready → blocked and blocked → running are impossible transitions; blocking requires the CPU, unblocking goes through ready.',
      'Every fork() execution adds exactly one process: n sequential forks → $2^n$ processes; trace conditionals per process using the 0/nonzero return values.',
      'Threads share code, data, heap and files but not stacks or registers; pipes are unidirectional and (anonymous) connect only related processes.'
    ],
    quiz: [
      {
        q: 'The code `for (i = 0; i < 3; i++) fork();` followed by a printf creates how many processes in total (including the original)?',
        options: ['6', '7', '8', '16'],
        answer: 2,
        explanation: 'Step 1: Each loop iteration is executed by every live process. Step 2: The count doubles per iteration: $1 \\to 2 \\to 4 \\to 8$. Step 3: After n = 3 iterations there are $2^3 = 8$ processes. Step 4: 7 would count only the children; 16 would be n = 4.'
      },
      {
        q: 'Which of the following process-state transitions can NEVER occur?',
        options: ['Running → Ready', 'Running → Blocked', 'Ready → Blocked', 'Blocked → Ready'],
        answer: 2,
        explanation: 'Step 1: Running → Ready happens on preemption when the time slice expires. Step 2: Running → Blocked happens when the process requests I/O or waits on an event. Step 3: A process in the Ready state holds no CPU and cannot issue a blocking request — to block it must first be dispatched, so Ready → Blocked is impossible. Step 4: Blocked → Ready is the normal wake-up path when the awaited event completes.'
      },
      {
        q: 'Two threads of the same process do NOT share',
        options: ['the code section', 'the global variables', 'the heap', 'the stack'],
        answer: 3,
        explanation: 'Step 1: Threads of one process share its address space: code, globals and heap. Step 2: Each thread needs its own execution context to run independently: its own PC, registers and call stack. Step 3: Therefore the stack is private per thread. Step 4: Sharing stacks would make separate call chains — and separate returns — impossible.'
      },
      {
        q: 'Which statement about anonymous pipes in UNIX is TRUE?',
        options: ['They are bidirectional byte streams', 'They connect unrelated processes through a filesystem name', 'They are unidirectional byte streams normally connecting related processes', 'They are implemented entirely in user space without kernel support'],
        answer: 2,
        explanation: 'Step 1: A pipe is created with two file descriptors, one for reading and one for writing — data flows one way only. Step 2: An anonymous pipe is inherited through fork(), so it connects a parent with its descendants. Step 3: Connecting unrelated processes requires a named pipe (FIFO) with a filesystem entry, and bidirectional communication needs two pipes. Step 4: The kernel implements the pipe buffer and blocks readers/writers appropriately.'
      }
    ]
  },

  // ------------------------------------------------------------ 10.1 ER-Model
  {
    sectionId: 'cse-g10-s1',
    readingTime: 9,
    prerequisites: [
      'The relational idea of tables with rows and columns',
      'Primary keys and foreign keys at a basic level'
    ],
    intro: 'Databases contributes 6–8 marks and reliably includes one ER-model question — reducing a described diagram to relational schemas and counting the minimum number of tables, or reasoning about weak entities, cardinalities and participation. These are MCQ/NAT items solved by applying the reduction rules mechanically. This section presents the ER vocabulary and exactly those rules.',
    objectives: [
      'Model with entities, attributes (composite, multivalued, derived) and keys',
      'Reason about cardinality (1:1, 1:N, M:N) and participation, including instance-count bounds',
      'Represent weak entity sets with owners, identifying relationships and discriminators',
      'Reduce ER diagrams to relational schemas and count the minimum number of tables'
    ],
    concepts: [
      {
        term: 'Entities, attributes, keys',
        kind: 'definition',
        statement: 'An **entity** is a distinguishable object and an **entity set** a collection of the same type; attributes are **simple vs composite**, **single- vs multi-valued**, and **stored vs derived**; a **superkey** uniquely identifies entities, a **candidate key** is a minimal superkey, and one candidate key is chosen as the **primary key**.',
        detail: 'Derived attributes (age from date-of-birth) are computed, never stored. Multivalued attributes (a set of phone numbers) cannot live as columns in a normalized table and force a separate relation — a direct table-count consequence. Composite attributes are flattened into their components during reduction.'
      },
      {
        term: 'Relationship sets',
        kind: 'definition',
        statement: 'A **relationship set** is a mathematical relation among two or more entity sets (its **degree**); it may carry its own descriptive attributes — e.g. `grade` on Enrolls(Student, Course).',
        detail: 'A relationship set over entity sets $E_1, \\ldots, E_n$ is a set of tuples $(e_1, \\ldots, e_n)$ plus descriptive values. Recursive relationships (Employee *manages* Employee) need role labels to distinguish the participants; the manager/participant roles also carry the 1:N cardinality.'
      },
      {
        term: 'Cardinality and participation',
        kind: 'law',
        statement: 'Mapping ratios are **1:1, 1:N, M:N**; participation is **total** (every entity of the set participates) or **partial**. With $|A| = a$ and $|B| = b$ entities: an M:N relationship set has at most $a \\cdot b$ instances, a 1:N at most $b$ (each B appears at most once), a 1:1 at most $\\min(a, b)$; total participation of B in a 1:N forces exactly $b$ instances.',
        detail: 'These bounds are the NAT pattern: multiply for M:N, use the constrained side for 1:N, the minimum for 1:1 — then apply participation to raise a lower bound. Cardinality is a property of the *schema* (what the enterprise allows), not of one snapshot of instances.'
      },
      {
        term: 'Weak entity sets',
        kind: 'definition',
        statement: 'A **weak entity set** has attributes insufficient to form a key; it is identified by the **primary key of an owner entity set plus its discriminator** (partial key), through a total, many-to-one **identifying relationship** from the weak set to the owner.',
        detail: 'Example: Dependent(name, age) under Employee — the pair (emp-id, dep-name) identifies a dependent, with dep-name the discriminator. The weak set\'s participation in the identifying relationship is total by definition (it cannot exist without its owner); deletion of an owner typically cascades. A weak entity set can have several owner entity sets, each with its own identifying relationship.'
      },
      {
        term: 'Reduction to relational schemas',
        kind: 'method',
        statement: 'Reduction rules: **strong entity set → table** (composite attributes flattened, multivalued attributes spun off); **M:N relationship set → its own table** keyed by both foreign keys plus descriptive attributes; **1:N → foreign key on the N side**; **1:1 → foreign key on either side** (prefer the totally-participating side, and a 1:1 with total participation on both sides may merge into one table); **weak entity set → table** whose key is owner-key + discriminator.',
        detail: 'The M:N table is unavoidable: folding it into either entity would lose pairings or duplicate data. Placement on the N side avoids redundancy — one FK value per B-row instead of repeating B\'s key for each A. Derived attributes are simply not stored.'
      },
      {
        term: 'Minimum table counting',
        kind: 'insight',
        statement: '**Minimum tables = one per strong entity set + one per weak entity set + one per M:N relationship set + one per multivalued attribute**, with 1:N and 1:1 relationships absorbed as foreign keys and the 1:1 total-total merge applied where legal.',
        detail: 'the graduate assessment phrasing: "the minimum number of tables for the given ER diagram is" — apply the rules in this order and watch for the 1:1 total-total merge that subtracts one. Keep track of foreign keys as you go: the follow-up MCQ usually asks how many FK columns the schema needs in total.'
      }
    ],
    examples: [
      {
        title: 'Reduction and minimum table count',
        problem: 'An ER diagram has: STUDENT(s-id PK, name), COURSE(c-id PK, title) and INSTRUCTOR(i-id PK, name); **Enrolls** is an M:N relationship set between STUDENT and COURSE carrying the attribute grade; **Teaches** is a 1:N relationship set from INSTRUCTOR to COURSE in which every course is taught by exactly one instructor. What is the minimum number of tables, and how many foreign-key columns appear in the reduced schema?',
        steps: [
          { label: 'Step 1', text: 'The three strong entity sets become three tables: STUDENT, COURSE and INSTRUCTOR — none can be merged away since all participate only partially on their own side of Enrolls.' },
          { label: 'Step 2', text: 'Enrolls is M:N, so it must become its own table ENROLLS(s-id, c-id, grade) with primary key (s-id, c-id) and two foreign keys — one to STUDENT, one to COURSE. M:N relationships can never be folded into an entity table.' },
          { label: 'Step 3', text: 'Teaches is 1:N with COURSE on the N side, so it is absorbed as the foreign key i-id inside COURSE — no extra table, one extra FK column.' },
          { label: 'Step 4', text: '```text\ntables: STUDENT, COURSE, INSTRUCTOR, ENROLLS  => 4 tables\nFK columns: ENROLLS(s-id, c-id) + COURSE(i-id) => 3\n```\nTotal: **4 tables** minimum, carrying **3** foreign-key columns.' }
        ],
        result: 'Minimum **4 tables** (STUDENT, COURSE, INSTRUCTOR, ENROLLS); the schema contains **3 foreign-key columns** (s-id and c-id in ENROLLS, i-id in COURSE).'
      },
      {
        title: 'Weak entities and instance-count bounds',
        problem: 'EMPLOYEE(emp-id PK) owns the weak entity set DEPENDENT(dep-name, age) through the identifying relationship Has, with every employee having between 1 and 3 dependents. Separately, R is an M:N relationship set between DEPARTMENT (500 entities) and EMPLOYEE (2000 entities). (i) Give the reduced schema and key of DEPENDENT. (ii) Between how many rows does DEPENDENT range? (iii) What is the maximum possible number of instances in R?',
        steps: [
          { label: 'Step 1', text: 'A weak entity set reduces to a table whose key is the owner key plus the discriminator: DEPENDENT(**emp-id, dep-name**, age), with (emp-id, dep-name) the primary key and emp-id a foreign key referencing EMPLOYEE.' },
          { label: 'Step 2', text: 'Every one of the 2000 employees has at least 1 and at most 3 dependents, so DEPENDENT holds between $2000 \\times 1 = 2000$ and $2000 \\times 3 = 6000$ rows.' },
          { label: 'Step 3', text: 'R is M:N between 500 departments and 2000 employees: each (department, employee) pair can occur at most once, so the instance count is at most $500 \\times 2000 = 1{,}000{,}000$.' },
          { label: 'Step 4', text: 'Note the asymmetry of the two counts: weak-entity rows are bounded by the owner side (each dependent belongs to exactly one employee), while M:N instances are bounded by the product of both sides — the cardinality rules do the arithmetic for you.' }
        ],
        result: '(i) DEPENDENT(emp-id, dep-name, age) with PK (emp-id, dep-name); (ii) between **2000 and 6000 rows**; (iii) at most **1,000,000 instances** in R.'
      }
    ],
    keyTakeaways: [
      'M:N relationship sets always reduce to their own table keyed by both foreign keys; 1:N folds into a foreign key on the N side.',
      'A weak entity set is identified by owner primary key + discriminator; its reduction carries the owner key as part of its own PK.',
      'Instance bounds: M:N ≤ product of cardinalities; 1:N ≤ size of the N side; total participation fixes lower bounds.',
      'Minimum tables = entities (strong and weak) + M:N relationships + multivalued attributes, minus legal 1:1 total-total merges.'
    ],
    quiz: [
      {
        q: 'An ER diagram has three entity sets A, B, C (each with its own attributes), one M:N relationship set R(A, B) with a descriptive attribute, and one 1:N relationship set S from B to C with total participation of C. The minimum number of tables in the reduced schema is',
        options: ['3', '4', '5', '6'],
        answer: 1,
        explanation: 'Step 1: Each of the three entity sets becomes a table. Step 2: R is M:N and must become its own table regardless of its descriptive attribute. Step 3: S is 1:N and is absorbed as a foreign key in C\'s table — total participation of C does not force a separate table. Step 4: Total $= 3 + 1 = 4$ tables.'
      },
      {
        q: 'Which statement about weak entity sets is TRUE?',
        options: ['A weak entity set always has a primary key of its own', 'A weak entity set is identified by the primary key of an owner entity set combined with its discriminator', 'A weak entity set cannot participate in any relationship other than its identifying one', 'A weak entity set must participate totally in relationships with every other entity set'],
        answer: 1,
        explanation: 'Step 1: By definition a weak entity set lacks sufficient attributes to form its own key. Step 2: Its identity is the owner primary key plus its discriminator (partial key) via the identifying relationship. Step 3: A weak set may participate in other relationships like any entity set. Step 4: Total participation applies specifically to its identifying relationship, not to all relationships.'
      },
      {
        q: 'A 1:N relationship set relates A (1000 entities) to B (400 entities), and every B entity participates in exactly one relationship instance. The number of relationship instances is',
        options: ['exactly 400', 'exactly 1000', '400,000', 'at most 1000'],
        answer: 0,
        explanation: 'Step 1: In a 1:N relationship each entity on the N side (B) appears in at most one instance. Step 2: Total participation of B forces every B entity to appear exactly once. Step 3: Hence the instance count equals $|B| = 400$. Step 4: 400,000 would be the M:N bound $1000 \\times 400$; the cardinality rules out that pairing freedom.'
      },
      {
        q: 'When reducing a 1:N relationship set to a relational schema, the foreign key is placed',
        options: ['on the one side, referencing the N side', 'on the N side, referencing the one side', 'always in a separate relationship table', 'on both sides for safety'],
        answer: 1,
        explanation: 'Step 1: Each entity on the N side relates to at most one entity on the one side, so a single key value suffices per N-row. Step 2: Placing the FK on the N side stores each association once. Step 3: A separate table is needed only for M:N relationships. Step 4: Duplicating the FK on both sides would store each association twice — redundant and update-anomalous.'
      }
    ]
  },
  // ------------------------------------------------------- 8.1 Compiler: front end
  {
    sectionId: 'cse-g8-s1',
    readingTime: 11,
    prerequisites: [
      'Regular expressions and finite automata (the Theory of Computation chapter)',
      'Context-free grammars, derivation and parse trees (the Theory of Computation chapter)',
      'Basic data structures: stacks and tables'
    ],
    intro: 'Compiler design carries a reliable 4–6 marks in the CS assessment, and more than half of those questions come from this section: scanning, LL and LR parsing, and syntax-directed translation. the graduate assessment almost never asks you to build a full compiler — it asks for the exact decision point: is this grammar LL(1)? Which item set does this goto produce? Is this attribute grammar L-attributed? Every question in this lesson is built around one such decision point.',
    objectives: [
      'Classify tokens, lexemes and patterns, and trace regex-to-DFA conversion for a small scanner',
      'Decide whether a grammar is LL(1) using FIRST and FOLLOW sets, and fill a predictive parse-table cell',
      'Distinguish LR(0), SLR, LALR and CLR item sets, and identify handles and shift/reduce conflicts',
      'Classify attributes as synthesized or inherited, and S- or L-attributed grammars'
    ],
    concepts: [
      {
        term: 'Token, lexeme, pattern',
        kind: 'definition',
        statement: 'A **token** is a category name the parser consumes; a **lexeme** is the actual character sequence matched; a **pattern** is the rule (regular expression) describing all lexemes of a token.',
        detail: 'In `count = count + 1;` the lexemes are `count`, `=`, `count`, `+`, `1`, `;` mapping to tokens **id**, `assign`, **id**, `plus`, `number**, **semicolon**. The scanner runs the maximal-munch rule: the longest match wins, so `count1` is one identifier, not `count` followed by `1`.'
      },
      {
        term: 'LL(1) predictive parsing',
        kind: 'method',
        statement: 'A grammar is **LL(1)** iff for every pair of productions $A \\to \\alpha \\mid \\beta$: $FIRST(\\alpha) \\cap FIRST(\\beta) = \\emptyset$, and if $\\varepsilon \\in FIRST(\\alpha)$ then $FIRST(\\beta) \\cap FOLLOW(A) = \\emptyset$.',
        detail: 'Build the table with rows = non-terminals, columns = terminals (plus `$`): production $A \\to \\alpha$ goes in cell $[A, a]$ for each $a \\in FIRST(\\alpha)$, and in $[A, b]$ for each $b \\in FOLLOW(A)$ if $\\alpha \\Rightarrow^* \\varepsilon$. **Two productions in one cell ⇒ not LL(1).** Left recursion and ambiguity always break LL(1); left-factor the grammar before testing.'
      },
      {
        term: 'LR item families',
        kind: 'definition',
        statement: 'An LR item is a production with a dot: $A \\to \\alpha \\cdot \\beta$. **LR(0)** ignores lookahead; **SLR** reduces only on FOLLOW; **CLR(LR(1))** carries a per-item lookahead; **LALR** merges CLR states with the same core.',
        detail: 'Power and cost both grow LR(0) < SLR < LALR < CLR. LALR merges states, so it has fewer states than CLR but can introduce (never-new-shift) reduce/reduce conflicts — the classic the graduate assessment trap: LALR may report a reduce/reduce conflict absent in CLR, but any grammar LR(1)-parsable stays parseable (though with merged reductions, wrong choice detected later) under LALR. yacc/bison generate LALR(1) tables.'
      },
      {
        term: 'Handle and viable prefix',
        kind: 'definition',
        statement: 'A **handle** is the substring of the sentential form that matches a production body and whose reduction is one step of the rightmost-derivation-in-reverse; a **viable prefix** is any prefix of a right sentential form reachable on the stack.',
        detail: 'Shift/reduce decisions = "is the stack top a handle?" An LR parser never shifts an error symbol: the stack always holds a viable prefix, so errors are detected at the **earliest possible token** among all parser classes the graduate assessment asks about — a favourite one-mark fact.'
      },
      {
        term: 'Synthesized vs inherited attributes',
        kind: 'notation',
        statement: 'A **synthesized** attribute at node $X$ is computed from children of $X$; an **inherited** attribute is computed from the parent and/or left siblings.',
        detail: 'S-attributed = synthesized only ⇒ always evaluable bottom-up during an LR parse (post-order). L-attributed = inherited attributes may depend only on the parent and **left** siblings (no right-sibling dependency) ⇒ evaluable in one left-to-right pass, which LL parsing gives directly. Every S-attributed grammar is also L-attributed; the converse fails.'
      }
    ],
    examples: [
      {
        title: 'LL(1) test on a small grammar',
        problem: 'Is the grammar $S \\to iEtSS\' \\mid a$, $S\' \\to eS \\mid \\varepsilon$, $E \\to b$ (if-then-else with dangling else) LL(1)?',
        steps: [
          { label: 'Step 1', text: 'Compute FIRST sets: $FIRST(S) = \\{i, a\\}$, $FIRST(S\') = \\{e, \\varepsilon\\}$, $FIRST(E) = \\{b\\}$.' },
          { label: 'Step 2', text: 'FOLLOW(S) contains `$` (S is the start symbol) and `e` (because $S\' \\to eS$ puts `e` after S in that body). So $FOLLOW(S) = \\{e, $\\}$' },
          { label: 'Step 3', text: 'For $S\' \\to eS \\mid \\varepsilon$: FIRST of the two bodies is $\\{e\\}$ vs $\\{\\varepsilon\\}$. The $\\varepsilon$ case must check $FIRST(eS)$ vs $FOLLOW(S\')$ — and both contain **e**.' },
          { label: 'Step 4', text: 'Cell $[S\', e]$ receives both $S\' \\to eS$ (from FIRST) and $S\' \\to \\varepsilon$ (from FOLLOW) ⇒ table conflict ⇒ **not LL(1)**.' }
        ],
        result: 'Not LL(1) — the dangling-else ambiguity shows up as a parse-table conflict; that is exactly why all real languages resolve it by a "match nearest unmatched then" rule instead of pure LL(1).'
      },
      {
        title: 'LALR state merge consequence',
        problem: 'A CLR(1) automaton has two states with cores $\{A \\to a \\cdot, B \\to a \\cdot\}$ but lookaheads $\{b\}$ and $\{c\}$ respectively (state 1) and $\{c\}$ and $\{b\}$ (state 2). What happens after LALR merging?',
        steps: [
          { label: 'Step 1', text: 'LALR merges states with identical cores: the two states collapse into one with both lookaheads on both items.' },
          { label: 'Step 2', text: 'In the merged state, on lookahead `c` there are two candidate reductions (by $A$ and by $B$) — a **reduce/reduce conflict** appears that CLR did not have.' },
          { label: 'Step 3', text: 'No shift/reduce conflict can be *created* by merging (shift decisions depend on the core, which is shared), and no shift action is ever lost — the parser still detects the error, just after performing one possibly-wrong reduction.' }
        ],
        result: 'LALR merging may introduce reduce/reduce conflicts (never new shift conflicts), and errors surface at most one reduction later than in CLR. This "one extra wrong reduction" line is a recurring the graduate assessment answer.'
      }
    ],
    keyTakeaways: [
      'LL(1) fails on left recursion, ambiguity, or non-left-factored grammars — fix the grammar first, then test FIRST/FOLLOW disjointness.',
      'Parser power: LR(0) < SLR(1) < LALR(1) < CLR(1); parser sizes go the same way, which is why production tools use LALR.',
      'LALR = CLR with merged same-core states; merging can only create reduce/reduce conflicts, never shift/reduce ones.',
      'S-attributed grammars evaluate during LR parsing (bottom-up, post-order); L-attributed during LL parsing (left-to-right); S ⊂ L.',
      'LR parsers announce errors at the first token that cannot continue any viable prefix — earliest detection among the classes the graduate assessment tests.'
    ],
    quiz: [
      {
        q: 'A grammar has productions $A \\to \\alpha \\mid \\beta$ with $\\varepsilon \\in FIRST(\\alpha)$ and $FIRST(\\beta) \\cap FOLLOW(A) \\neq \\emptyset$. The grammar is',
        options: ['definitely LL(1)', 'definitely not LL(1)', 'LL(1) only if it is left-factored', 'LL(1) only if it is right-recursive'],
        answer: 1,
        explanation: 'Step 1: With $\\alpha$ nullable, production $A \\to \\alpha$ is entered in every cell $[A, b]$, $b \\in FOLLOW(A)$. Step 2: The overlap with $FIRST(\\beta)$ places $A \\to \\beta$ in some of the same cells. Step 3: Two productions in one cell violate the LL(1) condition directly. Step 4: Left-factoring cannot remove a FOLLOW-vs-FIRST clash of this kind; the grammar is not LL(1).'
      },
      {
        q: 'Which statement about LALR(1) parsing is TRUE?',
        options: ['LALR(1) has more parser states than CLR(1)', 'LALR merging can introduce shift/reduce conflicts', 'LALR merging can introduce reduce/reduce conflicts', 'LALR(1) grammars are a strict subset of SLR(1) grammars'],
        answer: 2,
        explanation: 'Step 1: LALR merges CLR states that share the same core (LR(0) items), so it has fewer or equal states. Step 2: Shift actions depend only on the core, so merging cannot create a shift/reduce conflict. Step 3: Lookahead sets combine on merge, so two reductions on the same terminal can collide — a new reduce/reduce conflict. Step 4: Every SLR grammar is LALR and CLR; LALR is the weaker (smaller) family, so "strict subset of SLR" is backwards.'
      },
      {
        q: 'In one pass of an LR (bottom-up) parse, which attribute class can always be evaluated?',
        options: ['Inherited attributes only', 'Synthesized attributes only', 'Both synthesized and inherited attributes', 'Neither, unless the grammar is ambiguous'],
        answer: 1,
        explanation: 'Step 1: LR reduction happens when the full production body is on the stack, i.e. all children are available. Step 2: Synthesized attributes are computed exactly when children values are known — at the reduction step. Step 3: Inherited attributes need parent/sibling context that the parser has not yet built (parent not reduced yet). Step 4: Hence S-attributed grammars are the class that bottom-up parsing evaluates in one pass.'
      },
      {
        q: 'The string `count1` scanned with the maximal-munch rule and tokens `id` and `number` yields',
        options: ['id(id), number(1)', 'id(count1)', 'number(1), id(count) — order swapped by priority', 'a lexical error'],
        answer: 1,
        explanation: 'Step 1: Maximal munch chooses the longest lexeme matching any pattern. Step 2: `count1` as a whole matches the identifier pattern, length 7. Step 3: Splitting into `count` + `1` would give two shorter matches, losing to the longer one. Step 4: No priority rule rescues the split; the token is one id with lexeme count1.'
      }
    ]
  },
  // ------------------------------------------------------- 8.2 Runtime environments
  {
    sectionId: 'cse-g8-s2',
    readingTime: 9,
    prerequisites: [
      'Procedure call semantics and call/return sequence',
      'Scoping rules: static (lexical) vs dynamic scoping',
      'Stack (LIFO) behaviour'
    ],
    intro: 'Runtime-environment questions are compact and rule-based: given a call chain, the graduate assessment asks how many activation records live on the stack, where an access link points, or what a callee sees after call-by-value versus call-by-reference. Two facts anchor everything: activation records are pushed and popped like stack frames in call order, and access links chain by lexical nesting, not call order.',
    objectives: [
      'Lay out an activation record and identify the purpose of each field',
      'Count live activation records for a given call chain, including recursion',
      'Trace access links for static scoping and compute the number of link hops to a non-local name',
      'Predict observable effects of call-by-value, call-by-reference, call-by-value-result and call-by-name'
    ],
    concepts: [
      {
        term: 'Activation record layout',
        kind: 'notation',
        statement: 'A typical activation record, from caller side inward: **return value | actual parameters | control link | access link | saved machine status | local data | temporaries**.',
        detail: 'The **control link** (dynamic link) points to the caller record — it restores the stack on return. The **access link** (static link) points to the record of the lexically enclosing procedure — it resolves non-local names under static scoping. Saved status holds the return address and registers; temporaries hold intermediate results like the $t_1$ of three-address code.'
      },
      {
        term: 'Access-link hops',
        kind: 'method',
        statement: 'To reference a name declared $d$ nesting levels out, the runtime follows $d$ access links; each hop costs one pointer dereference.',
        detail: 'If $P$ is nested at depth $i$ and uses a variable of a procedure at depth $j < i$, the number of link traversals is $i - j$. the graduate assessment tests the off-by-one trap: the name *inside* $P$ is at depth $i$, but following the first access link already lands in depth $i-1$; the count of hops is exactly $i - j$ when $j$ is the depth of the *declaring* procedure. A display table collapses this to one array lookup — $O(1)$ instead of $O(d)$.'
      },
      {
        term: 'Parameter passing semantics',
        kind: 'law',
        statement: '**Call-by-value** copies the value (callee mutations are invisible to the caller); **call-by-reference** passes an address (mutations are visible); **call-by-value-result** copies in and copies back at return; **call-by-name** re-evaluates the actual argument text at each use (like a macro).',
        detail: 'Classic distinguisher: `swap(a, a)` under call-by-name substitutes both formals with `a`, producing `a := a; a := a` — no swap; under call-by-value-result the copy-back order decides whether one write wins. Aliasing (the same variable passed twice) is what separates these modes in assessments.'
      },
      {
        term: 'Stack vs heap management',
        kind: 'insight',
        statement: '**Stack allocation** matches LIFO procedure lifetimes and is reclaimed free at return; **heap allocation** serves data whose lifetime is not tied to the calling procedure (objects, closures, dynamically resized structures).',
        detail: 'Dangling references arise when a stack-allocated object outlives its frame via a returned pointer; memory leaks arise when heap data loses all references without reclamation. the graduate assessment loves asking which failures each region can produce: a stack can overflow by deep recursion, a heap fragments and leaks.'
      }
    ],
    examples: [
      {
        title: 'Counting activation records in a recursion',
        problem: 'Function `fact(n)` is recursive: `fact(n) = (n ≤ 1) ? 1 : n * fact(n-1)`. The main program calls `fact(3)`. How many activation records are on the stack at the deepest point?',
        steps: [
          { label: 'Step 1', text: 'main calls fact(3): records for main and fact(3) are live.' },
          { label: 'Step 2', text: 'fact(3) calls fact(2) — three live records; fact(2) calls fact(1).' },
          { label: 'Step 3', text: 'At the deepest point: main, fact(3), fact(2), fact(1) ⇒ **4 records** (1 non-recursive + 3 recursive activations).' },
          { label: 'Step 4', text: 'General rule: a chain of $k$ nested calls plus the caller gives $k+1$ records; recursion of depth $n$ from a single call site gives $n+1$.' }
        ],
        result: '4 activation records — main, fact(3), fact(2), fact(1).'
      },
      {
        title: 'Access link direction under static scoping',
        problem: 'Procedure structure: `Q` at depth 1 contains `R` at depth 2, which contains `S` at depth 3. Execution: `Q` calls `R`, `R` calls `S`, and `S` references a variable `x` declared in `Q`. If instead the call chain were `Q → T (depth 2, sibling of R) → S`, and `S` were *nested inside T*, how many access-link hops to `x`?',
        steps: [
          { label: 'Step 1', text: 'First case: S is at depth 3, Q declared x at depth 1 ⇒ hops = $3 - 1 = 2$ (S→R→Q).' },
          { label: 'Step 2', text: 'Second case: S nested in T is still at depth 3; the declaring procedure Q is still depth 1.' },
          { label: 'Step 3', text: 'Hops remain $3 - 1 = 2$ (S→T→Q) — call chains changed, lexical nesting depths did not.' },
          { label: 'Step 4', text: 'This is the core static-scoping invariant: access links follow the *program text*, never the dynamic call order.' }
        ],
        result: '2 hops in both cases — access links are decided by lexical nesting, not by who called whom.'
      }
    ],
    keyTakeaways: [
      'Activation records live exactly as long as the call: count live records = call-chain length (including the caller) at the moment asked.',
      'Control link = caller (dynamic); access link = lexical enclosure (static) — the graduate assessment answers hinge on never confusing the two.',
      'Access hops = depth(using) − depth(declaring); a display makes every non-local lookup one step.',
      'Call-by-value is copy-in only; call-by-reference shares storage; value-result copies both ways; call-by-name re-substitutes the argument text per use — aliasing (`swap(a,a)`) is the standard discriminator.',
      'Stacks cannot leak (reclaimed at return) but overflow on deep recursion; heaps leak and fragment but survive their creating frame.'
    ],
    quiz: [
      {
        q: 'Procedure P (depth 1) contains Q (depth 2); Q contains R (depth 3). R reads a variable declared in P. How many access links does the runtime follow?',
        options: ['1', '2', '3', '0 — the display handles all lookups in hardware'],
        answer: 1,
        explanation: 'Step 1: The referencing procedure R is at nesting depth 3. Step 2: The declaring procedure P is at depth 1. Step 3: Hops = $3 - 1 = 2$: R follows its access link to Q, then Q\'s access link to P. Step 4: Without a display table the cost is proportional to the depth difference; with one it is O(1) — but the question asks about access links, so 2.'
      },
      {
        q: 'A program executes `swap(x, x)` where `swap(a, b)` is `t := a; a := b; b := t`. Under call-by-name, after the call `x` is',
        options: ['unchanged', 'the original value of the other argument (impossible here — x and x are aliased)', 'negated', 'undefined — call-by-name forbids aliased arguments'],
        answer: 0,
        explanation: 'Step 1: Call-by-name substitutes the argument *text*: the body becomes `t := x; x := x; x := t`. Step 2: After `t := x`, t holds x\'s value; `x := x` changes nothing. Step 3: `x := t` writes the same value back. Step 4: Net effect zero — aliasing under call-by-name neutralises the swap, a classic the graduate assessment observation.'
      },
      {
        q: 'Which field of an activation record points to the activation record of the *lexically enclosing* procedure?',
        options: ['Control (dynamic) link', 'Access (static) link', 'Saved machine status', 'Return-value slot'],
        answer: 1,
        explanation: 'Step 1: The control link points to the caller — the record below on the stack. Step 2: The access link points to the most recent activation of the lexically enclosing procedure. Step 3: Saved machine status holds return address/registers; the return-value slot carries the result. Step 4: Non-local name resolution under static scoping walks access links, so that is the required field.'
      },
      {
        q: 'Under call-by-value-result (copy-in, copy-out), passing the same variable to two formal parameters can produce a result that depends on',
        options: ['the order in which copy-backs are performed at return', 'nothing — the semantics are fully deterministic and aliasing-proof', 'the number of times each formal is read', 'whether the compiler uses quadruples or triples'],
        answer: 0,
        explanation: 'Step 1: Copy-in gives each formal an independent local copy; both can be updated freely. Step 2: At return, each formal is copied back to its actual — but both actuals are the *same* variable. Step 3: Which copy-back happens last decides the final value: the result depends on copy-back order. Step 4: Call-by-reference with the same alias instead shares one storage location throughout, giving order-independent (though interleaved) semantics.'
      }
    ]
  },
  // ------------------------------------------------------- 8.3 Intermediate code
  {
    sectionId: 'cse-g8-s3',
    readingTime: 9,
    prerequisites: [
      'Syntax-directed translation of expressions (section 8.1)',
      'Three-address code basics: at most one operator per instruction',
      'Boolean short-circuit evaluation'
    ],
    intro: 'the graduate assessment intermediate-code questions are countable and mechanical — exactly what makes them high-yield: translate `a = b * -c + b * -c` into quadruples and count them, or emit the short-circuit code for `a < b or c < d` and mark the backpatched labels. This section drills the two workhorses: quadruple/triple generation for expressions and boolean/control-flow translation with backpatching.',
    objectives: [
      'Emit three-address code for arithmetic expressions with unary minus and repeated sub-expressions',
      'Convert between quadruples, triples and indirect triples, and state their relative space behaviour',
      'Generate short-circuit TAC for boolean expressions and place true/false/backpatch labels correctly',
      'Translate if-else and while control flow into TAC with explicit goto targets'
    ],
    concepts: [
      {
        term: 'Three-address code',
        kind: 'definition',
        statement: 'TAC allows **at most one operator per instruction**, with implicit temporaries: $x = y \\; op \\; z$, $x = \\; op \\; y$, copy $x = y$, indexed copy, unconditional `goto L`, conditional `if x relop y goto L`, and `param`/`call`/`return`.',
        detail: 'For `x = a + b * c`: `t1 = b * c` then `x = a + t1` — two instructions; the multiplication comes first because precedence beats the earlier `+`. Unary minus becomes its own instruction (`t = minus y`) *before* use, which is exactly where most counting slips happen.'
      },
      {
        term: 'Quadruples vs triples',
        kind: 'notation',
        statement: 'A **quadruple** is `(op, arg1, arg2, result)`; a **triple** refers to results by instruction number, `(op, arg1, arg2)` with result = position; **indirect triples** add a pointer table listing triple addresses in execution order.',
        detail: 'Quadruples move values (easy to reorder); triples reference temporaries structurally — reordering is hard because an instruction\'s "name" is its address. Indirect triples regain reorderability by moving pointers instead of instructions: the same instruction list, permuted order, cost = one extra pointer array. Space: quadruple `x = y + z` needs 4 fields; the triple needs 3 + the entry in the pointer list for indirect form.'
      },
      {
        term: 'Backpatching',
        kind: 'method',
        statement: 'Boolean translation emits `if a < b goto _` / `goto _` with placeholder targets, records the instruction numbers in lists **truelist(B)** / **falselist(B)**, and patches them when the target label becomes known.',
        detail: 'Operations: `makelist(i)` starts a list; `backpatch(list, L)` writes L into every slot on the list; `merge` unions lists. Why it exists: one-pass code generation — the branch for `a or b`\'s true exit is not knowable when `a` is translated, only after `b` is seen. the graduate assessment asks "which instructions are patched when" — answer by walking the truelist/falselist merge points.'
      },
      {
        term: 'Control-flow templates',
        kind: 'law',
        statement: '`if (E) S1 else S2` ⇒ evaluate E, `if False goto L_else`, S1, `goto L_end`, `L_else:`, S2, `L_end:`. A `while (E) S` loop ⇒ `L_begin:`, evaluate E, `if False goto L_end`, S, `goto L_begin`, `L_end:`.',
        detail: 'Fall-through order matters: the *false* branch jumps (this is the normal the graduate assessment convention), and the loop body ends with an explicit jump back to the *test* — not to the body start. Students who jump back to the body re-execute nothing extra for pure S but mis-count when S itself contains labels.'
      }
    ],
    examples: [
      {
        title: 'Quadruple count for a repeated sub-expression',
        problem: 'Translate `x = b * -c + b * -c` into quadruples. How many quadruples?',
        steps: [
          { label: 'Step 1', text: '```text\nt1 = minus c\n```\nUnary minus first (one instruction).' },
          { label: 'Step 2', text: '```text\nt2 = b * t1\n```\nFirst `b * -c` (second instruction).' },
          { label: 'Step 3', text: 'Naive translation repeats the pair: `t3 = minus c`, `t4 = b * t3` (fourth instruction).' },
          { label: 'Step 4', text: '```text\nt5 = t2 + t4\nx  = t5\n```\nAdd and assign (sixth instruction).' }
        ],
        result: '6 quadruples without common sub-expression elimination; 4 after CSE reuses `t2` (`x = t2 + t2` in one add). the graduate assessment usually asks for the naive count, so read the wording.'
      },
      {
        title: 'Short-circuit translation with backpatch points',
        problem: 'Emit TAC for `a < b or c < d` and mark where the truelist is backpatched.',
        steps: [
          { label: 'Step 1', text: '```text\n1: if a < b goto _\n2: goto 3\n```\nIf the first test succeeds we jump to the *true exit* (unknown yet) — instruction 1 goes on truelist(E). On failure, fall into `goto 3` to test the second operand.' },
          { label: 'Step 2', text: '```text\n3: if c < d goto _\n4: goto _\n```\nInstruction 3 joins truelist(E) (merge). Instruction 4 — the false exit — goes on falselist(E), still unknown.' },
          { label: 'Step 3', text: 'The true exit is patched as soon as the enclosing statement\'s true target exists: `backpatch(truelist, L_true)` — both 1 and 3 receive L_true in one call. Instruction 4 is patched with L_false at the same point.' },
          { label: 'Step 4', text: 'Short-circuit semantics are preserved: `c < d` is *never* evaluated when `a < b` holds — the goto at 2 only runs when the first test fails.' }
        ],
        result: '4 instructions with two backpatch sites: truelist {1, 3} → L_true, falselist {4} → L_false.'
      }
    ],
    keyTakeaways: [
      'TAC allows one operator per instruction; unary minus, each comparison, each copy is its own instruction — count them in evaluation (precedence) order.',
      'Quadruples (4 fields, values movable), triples (3 fields, position-addressed, reorder-hostile), indirect triples (+ pointer list, reorderable).',
      'Backpatching exists because branch targets of boolean expressions are unknown in a one-pass translate: makelist → merge → backpatch.',
      'Standard templates: if-else jumps on False to the else arm; while re-tests at the top — jump back to the test, never to the body.',
      'A CSE pass halves this section\'s favourite expression (`b * -c + b * -c`): 6 quadruples naive, 4 optimized — check which one the question wants.'
    ],
    quiz: [
      {
        q: 'The number of quadruples in the naive (no CSE) three-address translation of `x = -a * b + c` is',
        options: ['2', '3', '4', '5'],
        answer: 1,
        explanation: 'Step 1: `t1 = minus a` — the unary operator gets its own instruction. Step 2: `t2 = t1 * b` — the multiply. Step 3: The final add can assign straight into the target: `x = t2 + c`. Step 4: Three instructions, one operator each — the canonical Dragon-book translation; an extra standalone copy `t3 = x` is what makes naive counts reach 4.'
      },
      {
        q: 'Which representation permits reordering instructions most easily while keeping instruction identities fixed?',
        options: ['Triples', 'Indirect triples', 'Quadruples with named temporaries', 'Direct source-to-target assembly'],
        answer: 1,
        explanation: 'Step 1: In triples, an instruction\'s identity is its position, so reordering breaks references. Step 2: In quadruples, results are named temporaries; reordering is possible but the "instructions" themselves are just records. Step 3: Indirect triples keep one canonical triple list (fixed addresses) plus a separate execution-order table of pointers — reorder by permuting pointers, identity intact. Step 4: That decoupling of *location* from *order* is precisely what optimization phases want.'
      },
      {
        q: 'In one-pass translation of `a < b or c < d`, the instruction `if a < b goto _` is placed on',
        options: ['the falselist, to be patched to the false exit', 'the truelist, to be patched to the true exit', 'no list — its target is known immediately', 'both the truelist and falselist'],
        answer: 1,
        explanation: 'Step 1: A successful first test makes the whole disjunction true, so control must reach the true exit. Step 2: That target does not exist yet when the test is emitted (one-pass constraint). Step 3: The instruction number therefore joins truelist(E), later merged with instruction 3\'s entry and backpatched together. Step 4: The *next* instruction (`goto 3`) is the one that continues to the second operand — it is a known forward jump, not a list member.'
      },
      {
        q: 'Translating `while (i < n) S` into TAC, the last instruction of S is',
        options: ['an unconditional goto to the first instruction of S', 'an unconditional goto to the test `i < n`', 'a conditional goto on `i < n`', 'a return instruction'],
        answer: 1,
        explanation: 'Step 1: The loop template is `L1: if i < n goto body / goto L2; body; goto L1; L2:`. Step 2: The test lives at L1, *before* the body. Step 3: Jumping to the body start would skip the test and create an infinite interior loop with no exit check. Step 4: Control must re-test the condition each iteration, so the back-jump targets L1 — the test.'
      }
    ]
  },
  // ------------------------------------------------------- 8.4 Local optimisation
  {
    sectionId: 'cse-g8-s4',
    readingTime: 8,
    prerequisites: [
      'Three-address code (section 8.3)',
      'Basic graph vocabulary: nodes, DAG, ancestors',
      'Loop structure of TAC programs'
    ],
    intro: 'Optimisation questions in the graduate assessment are almost always *local* — restricted to one basic block — because then every answer is mechanical: find the leaders, build the DAG, count nodes or identify which transformations apply. This section covers the four things the graduate assessment asks: leaders and blocks, DAG node counting, the standard within-block transformations, and code motion into loop pre-headers.',
    objectives: [
      'Identify leaders of basic blocks using the three-leader rule and partition TAC into blocks',
      'Construct the DAG of a block and count its nodes, including for expressions with sharing',
      'Classify transformations: common sub-expression elimination, copy propagation, dead-code elimination, code motion',
      'Recognise which transformations preserve meaning (safe) and which need extra checks'
    ],
    concepts: [
      {
        term: 'Leaders — the three-rule test',
        kind: 'law',
        statement: 'A TAC statement is a **leader** iff it is (1) the first statement, (2) the target of a jump (conditional or unconditional), or (3) the statement immediately *after* a jump. A basic block runs from a leader up to (not including) the next leader.',
        detail: 'Rule 3 is the one examinees forget — the statement after *any* jump starts a new block, even if nothing jumps to it. Equivalently: control cannot enter a block except at its start and cannot leave except at its end or the final jump.'
      },
      {
        term: 'DAG of a basic block',
        kind: 'method',
        statement: 'The **DAG** has a leaf per variable/constant *read first* and an interior node per operation; an operation whose operands match an existing node **reuses** that node instead of creating a new one.',
        detail: 'Node count = leaves + distinct operations. For `t1 = b * c; t2 = b * c`: one multiply node serves both — that shared node *is* the common sub-expression the DAG exposes. Variables that are only re-assigned attach to nodes as new labels; a node with a **killed** variable label (overwritten later) is dead above that point.'
      },
      {
        term: 'The classic within-block transforms',
        kind: 'insight',
        statement: '**CSE** reuses computed values; **copy propagation** replaces uses of copied variables (`x = y` then use `y`); **dead-code elimination** deletes assignments never used; **code motion** moves loop-invariant computations into the pre-header.',
        detail: 'Algebraic identities fold into local optimisation too: $x + 0 = x$, $x \\cdot 1 = x$, $x^2 = x \\cdot x$ (strength reduction). Constants propagate when all reaching definitions of an operand are the same constant. Each transform is *locally* safe in a block; globally (across blocks) CSE and code motion need data-flow checks — the boundary to section 8.5.'
      },
      {
        term: 'Loop-invariant code motion',
        kind: 'method',
        statement: 'A statement is **loop-invariant** if every operand is either constant or has all its definitions outside the loop; such statements move to a **pre-header** block entered once before the loop.',
        detail: 'The safety condition the graduate assessment tests: the moved statement must not depend on loop-carried values, must execute at least once even if the loop body runs zero times, and must not fault (e.g. division by a loop-carried possibly-zero divisor). Moving an invariant out of a loop that never executes *changes* when (or whether) it runs — the subtle point in "is this motion legal" questions.'
      }
    ],
    examples: [
      {
        title: 'Partitioning TAC into basic blocks',
        problem: '```text\n1: i = 1\n2: s = 0\n3: t1 = i * 10\n4: s = s + t1\n5: i = i + 1\n6: if i < 10 goto 3\n```\nWhich statements are leaders, and how many blocks are there?',
        steps: [
          { label: 'Step 1', text: 'Rule 1: statement 1 is a leader (first statement).' },
          { label: 'Step 2', text: 'Rule 2: statement 3 is a leader (target of the jump at 6).' },
          { label: 'Step 3', text: 'Rule 3: statement 7 does not exist, but if the jump at 6 were followed by more code, the next statement would be a leader. Here the sequence ends — leaders = {1, 3}.' },
          { label: 'Step 4', text: 'Block B1 = statements 1–2; block B2 = statements 3–6 (ends with the conditional jump). Two blocks; B2 is the loop body with B2 → B2 (self-loop) and B2 → exit.' }
        ],
        result: 'Leaders {1, 3}; two basic blocks — the pre-header (1–2) and the loop (3–6).'
      },
      {
        title: 'DAG node counting with a shared sub-expression',
        problem: '```text\nx = b * c + b * c\nt = a - (b * c)\n```\nHow many interior+leaf nodes does the DAG of this block have?',
        steps: [
          { label: 'Step 1', text: 'Leaves: `b`, `c`, `a` are read; `b` and `c` get one leaf each on first use, `a` one leaf ⇒ 3 leaves.' },
          { label: 'Step 2', text: 'First `b * c` creates multiply node M. The second `b * c` finds M\'s operands already present ⇒ **reuses M** (that is the CSE).' },
          { label: 'Step 3', text: 'The `+` of M + M creates node A; the `-` of a − M creates node S ⇒ 3 interior nodes (M, A, S).' },
          { label: 'Step 4', text: 'Total = 3 leaves + 3 interior = **6 nodes**; naive instruction count would have been 5 TACs with 4 operations — the DAG shares one multiply away.' }
        ],
        result: '6 nodes total: leaves {b, c, a}, interior {M: b*c (shared), A: M+M, S: a−M}.'
      }
    ],
    keyTakeaways: [
      'Leaders: first statement, jump targets, and the statement *after* any jump — forgetting rule 3 is the #1 block-partitioning error.',
      'DAG node count = distinct leaves + distinct operations; shared operand nodes are exactly the common sub-expressions found.',
      'CSE, copy propagation, constant folding, algebraic simplification, dead-code elimination are local (within-block) transforms; loop-invariant code motion needs a pre-header and loop analysis.',
      'Code motion legality: invariant operands, guaranteed execution if it had executed in the loop, and no faulting (division/overflow) — the three checks the graduate assessment phrases as "when is it unsafe".',
      'A block is single-entry single-exit: the DAG-to-statements regeneration is one topological order of the DAG.'
    ],
    quiz: [
      {
        q: '```text\n1: x = 1\n2: if a < b goto 6\n3: x = 2\n4: y = x + 1\n5: goto 7\n6: x = 3\n7: z = x\n```\nWhich statement is NOT a leader?',
        options: ['Statement 3', 'Statement 4', 'Statement 6', 'Statement 7'],
        answer: 1,
        explanation: 'Step 1: Statement 1 — first statement ⇒ leader. Step 2: Statement 3 — follows the conditional jump at 2 (rule 3) ⇒ leader. Step 3: Statement 4 — follows the non-jump assignment at 3 and is not a jump target ⇒ **NOT a leader**; it stays inside the block that started at 3. Step 4: Statement 6 — target of the jump at 2 ⇒ leader; statement 7 — follows the jump at 5 and is the target of 5 ⇒ leader. So only statement 4 is interior.'
      },
      {
        q: 'The DAG of the block `x = b * c - b * c` (no dead-code elimination) has how many nodes, including leaves?',
        options: ['3', '4', '5', '6'],
        answer: 1,
        explanation: 'Step 1: Leaves: b and c, read before any write ⇒ 2 leaf nodes. Step 2: The first `b * c` creates multiply node M; the second occurrence reuses M (common sub-expression). Step 3: `M - M` creates subtract node S. Step 4: Total = 2 leaves + 2 interior nodes (M, S) = **4 nodes**. Option 5 would double-count the multiply; 3 forgets S; 6 double-counts both.'
      },
      {
        q: 'Which transformation is NOT a purely local (within basic block) optimisation?',
        options: ['Common sub-expression elimination inside one block', 'Copy propagation with all definitions inside the block', 'Loop-invariant code motion', 'Algebraic simplification like x*1 → x'],
        answer: 2,
        explanation: 'Step 1: A local transform needs only information from the block itself. Step 2: In-block CSE, in-block copy propagation, and algebraic identities all qualify. Step 3: Deciding whether a computation is loop-invariant requires knowing that *no definition inside the entire loop* touches its operands — information from many blocks. Step 4: Hence loop-invariant code motion is a loop-level (global) optimisation, not a local one.'
      },
      {
        q: 'A statement `t = a / b` inside a loop is loop-invariant (a, b set only before the loop) but b may be zero. Why can moving it to the pre-header be unsafe?',
        options: ['Division results may differ depending on block boundaries', 'If the loop body executes zero times, the moved division still executes and may raise an exception the original never raised', 'The pre-header has no space for temporaries', 'Loop-invariant statements must be assignments to loop variables'],
        answer: 1,
        explanation: 'Step 1: Code motion preserves *values* but changes *when* code runs. Step 2: In the loop, if the body never executes (loop condition false at entry), the division never executes — zero-divide never happens. Step 3: In the pre-header it executes unconditionally on every entry, so a zero divisor now raises an exception that the original program would not have raised. Step 4: That is exactly the faulting condition the graduate assessment lists for unsafe code motion; value-preservation alone is not enough.'
      }
    ]
  },
  // ------------------------------------------------------- 8.5 Data flow analyses
  {
    sectionId: 'cse-g8-s5',
    readingTime: 8,
    prerequisites: [
      'Basic blocks and flow graphs (section 8.4)',
      'Set operations: union, intersection, fixed points',
      'Direction of data movement: forward vs backward'
    ],
    intro: 'Data-flow analysis is where compiler questions turn into small equation systems — perfect the graduate assessment material. The assessment wants three things: set up the equations for liveness, available expressions or constant propagation; run one or two iterations on a 3-block graph; and state the direction of the analysis and the meet operator. Every one of those is one workable rule, drilled below.',
    objectives: [
      'Write the liveness data-flow equations and run them backwards on a small flow graph',
      'Write the available-expressions (global CSE) equations and run them forwards',
      'Set up constant propagation and decide when the meet changes an OUT set',
      'Classify each analysis as forward/backward and its meet as union/intersection'
    ],
    concepts: [
      {
        term: 'Liveness analysis (backward)',
        kind: 'law',
        statement: 'A variable is **live** at point $p$ if its value can be used along some path from $p$ before being redefined. Equations: $IN[B] = use[B] \\cup (OUT[B] - def[B])$ and $OUT[B] = \\bigcup_{S \\in succ(B)} IN[S]$.',
        detail: 'The analysis runs **backwards**: OUT of a block depends on INs of successors; a use *inside* B keeps a variable live even if redefined later in the same block (use is checked statement-by-statement from the end). Boundary: OUT[EXIT] = ∅. Liveness drives register allocation — dead values free registers — which is why the graduate assessment pairs the two.'
      },
      {
        term: 'Available expressions (forward)',
        kind: 'law',
        statement: 'An expression is **available** at $p$ if on *every* path from entry to $p$ it is computed and none of its operands is redefined afterwards. Equations: $OUT[B] = e\\_gen[B] \\cup (IN[B] - e\\_kill[B])$ and $IN[B] = \\bigcap_{P \\in pred(B)} OUT[P]$ (except $IN[ENTRY] = \\emptyset$).',
        detail: 'The meet is **intersection** (all paths must provide it) and the direction is **forward** — the mirror image of liveness on both axes. Initialisation trick: IN of the entry block is ∅, but internal blocks start optimistically with the universe so the intersection does not collapse; the graduate assessment marks this subtlety when it asks "why not initialise to ∅ everywhere". This is the analysis behind **global CSE**: an available expression at a block start can be replaced by a saved temp.'
      },
      {
        term: 'Reaching definitions (forward, union)',
        kind: 'definition',
        statement: 'A definition $d: x = \\ldots$ **reaches** point $p$ if there is a path from $d$ to $p$ with no other definition of $x$ in between. $OUT[B] = gen[B] \\cup (IN[B] - kill[B])$, $IN[B] = \\bigcup_{P} OUT[P]$ — the meet is **union** (any path suffices).',
        detail: 'Same equation shape as available expressions, opposite meet — the assessment-favourite contrast pair. Reaching definitions power constant propagation (if exactly one definition of x reaches a use and it is a constant, substitute) and use-def chains for bug-finding tools.'
      },
      {
        term: 'Iterative fixed-point solution',
        kind: 'method',
        statement: 'All these equation systems are **monotone** over finite lattices, so iteration (in any order, until no set changes) terminates at a **least fixed point** — the most conservative solution consistent with the equations.',
        detail: 'Union-based analyses only grow sets (bottom = ∅); intersection-based analyses only shrink (top = universe), which is why their initialisation differs. Iteration order affects speed, not the result — a monotone framework fact the graduate assessment occasionally states as a 1-mark "does order matter" question.'
      }
    ],
    examples: [
      {
        title: 'Two rounds of liveness',
        problem: 'Block B: `s = 1`, `t = x + y`, `s = t + 1`. Successor (the only one) has $IN = \\{x, s\\}$. Compute $OUT[B]$ and $IN[B]$.',
        steps: [
          { label: 'Step 1', text: '$OUT[B] = IN[succ] = \\{x, s\\}$ (union over successors — only one here).' },
          { label: 'Step 2', text: 'Walk B **backwards** for $use/def$: from the end — `s = t + 1` uses t, defines s ⇒ t live; s defined (kills its liveness here).' },
          { label: 'Step 3', text: '`t = x + y` uses x, y ⇒ x, y live; defines t (t was live below, but the use here *creates* its liveness, so it stays live above only if used above — it is not).' },
          { label: 'Step 4', text: 'Statement-level result: live-in of B = $\\{x, y\\}$, live-out = $\\{x, s\\}$; set form: $use[B] = \\{x, y, t\\}$... applied via $IN[B] = use[B] \\cup (OUT[B] - def[B]) = \\{x, y, t\\} \\cup (\\{x, s\\} - \\{s, t\\}) = \\{x, y, t\\} \\cup \\{x\\} = \\{x, y, t\\}$.' }
        ],
        result: 'OUT[B] = {x, s}; IN[B] = {x, y, t} — t is live into the block because it is used before its own definition, the classic gen-before-kill subtlety.'
      },
      {
        title: 'Global CSE via available expressions',
        problem: 'Block P computes `a + b` then redefines `b`; block Q (successor of P only) computes `a + b` at its start. Is `a + b` available at the entry of every successor of Q?',
        steps: [
          { label: 'Step 1', text: 'In P: `a + b` is generated by the computation, then killed by the redefinition of `b` ⇒ $OUT[P] \\ni a+b$? No: the kill dominates — processing P forward, gen adds it but the later kill removes it, so `a+b` ∉ OUT[P].' },
          { label: 'Step 2', text: '$IN[Q] = OUT[P]$ (only predecessor) ⇒ `a + b` not available at Q entry.' },
          { label: 'Step 3', text: 'Q\'s own computation generates it: `a + b` ∈ OUT[Q] (no later kill in Q) — so it IS available at Q\'s successors.' },
          { label: 'Step 4', text: 'The kill rule is the trap: *any* redefinition of an operand invalidates the expression, even one textually far away; the equations mechanise that intuition.' }
        ],
        result: 'Available at Q\'s exit: yes. At Q\'s entry: no — P killed it by redefining b after computing it.'
      }
    ],
    keyTakeaways: [
      'Direction/meet table: liveness = backward + union; available expressions = forward + intersection; reaching definitions = forward + union; very-reaching (constant prop) = forward + intersection-like meet.',
      'A variable used before being redefined inside a block is live-in even though it is also defined in the block — process statements from the end.',
      'Union analyses start at ∅ and grow; intersection analyses start at universe (except entry) and shrink — initialisation direction is the classic 1-mark trap.',
      'Global CSE = available expressions; constant propagation = single reaching constant definition; both fail to "may" information when paths disagree.',
      'Monotone + finite lattice ⇒ the iterative algorithm reaches the same fixed point regardless of block order — order changes speed only.'
    ],
    quiz: [
      {
        q: 'In liveness analysis, the OUT set of a basic block B is computed as',
        options: ['union of IN sets of all predecessors of B', 'intersection of IN sets of all successors of B', 'union of IN sets of all successors of B', 'intersection of OUT sets of all predecessors of B'],
        answer: 2,
        explanation: 'Step 1: Liveness asks "can this value be used *after* this point?" — information flows backwards. Step 2: Backward analysis computes IN[B] from OUT[B], and OUT[B] from the successors. Step 3: Liveness is a *may* property (some future use), so the combine is union. Step 4: OUT[B] = ∪ IN[S] over successors — "union of successors\' INs" is the exact statement.'
      },
      {
        q: 'A block executes `x = 5` then `y = x + 2`. Which statement about the *constant propagation* analysis of this block is TRUE?',
        options: ['x is not constant inside the block because it is defined', 'After the block, y is definitely the constant 7 if x was not redefined between the two statements', 'Constant propagation is a backward analysis', 'The meet over paths for constant propagation is union'],
        answer: 1,
        explanation: 'Step 1: Constant propagation tracks assignments of literal constants forward. Step 2: `x = 5` makes x the constant 5 from that point forward; the subsequent `x + 2` folds to 7 because no statement intervenes. Step 3: Hence y = 7 holds at block exit — a definite constant. Step 4: The analysis is forward, and when different incoming paths disagree on a value the meet marks it not-a-constant (an "undefined/⊤-like" outcome), not a union of values.'
      },
      {
        q: 'Which data-flow analysis is used directly to perform global common sub-expression elimination?',
        options: ['Liveness analysis', 'Reaching definitions', 'Available expressions', 'Very busy expressions'],
        answer: 2,
        explanation: 'Step 1: Replacing a recomputation with a saved temp requires the expression to be computed on every path already. Step 2: "On every path" is the *must* (all-paths) property, and its standard carrier is available expressions. Step 3: Liveness handles register allocation, reaching definitions support use-def chains and constant propagation. Step 4: So global CSE = available expressions, with operand-redefinition kills.'
      },
      {
        q: 'Why are internal blocks\' IN sets for available-expressions initialised to the universe of expressions instead of ∅?',
        options: ['To make the algorithm terminate faster', 'To avoid the intersection collapsing to the empty set permanently on the first iteration before facts flow in', 'Because union-based analyses need maximal starting sets', 'It is just a convention; ∅ works identically'],
        answer: 1,
        explanation: 'Step 1: The meet for available expressions is intersection. Step 2: If every IN started at ∅, the first iteration would intersect every predecessor OUT with ∅ and every block would permanently report "nothing available". Step 3: Starting optimistically at the universe lets real kills (the only facts that can *remove* availability) do the shrinking over iterations — the least fixed point emerges from below. Step 4: The result with ∅ initialisation is a fixed point too, but the *greatest* (most conservative-empty) one, which is useless for CSE.'
      }
    ]
  },
  // ------------------------------------------------------- 11.1 Networks: layering
  {
    sectionId: 'cse-g11-s1',
    readingTime: 9,
    prerequisites: [
      'The idea of a protocol as rules for message exchange',
      'Encapsulation: headers wrapped around payloads',
      'Graph reachability (for virtual-circuit vs datagram paths)'
    ],
    intro: 'Computer Networks is the second-heaviest the CS assessment area (typically 6–8 marks) and the graduate assessment opens it exactly here: match a duty to its layer, name the PDU at each level, and tell packet switching from circuit switching. The assessment is strict about *where* OSI puts things — encryption at presentation, routing at network, end-to-end reliability at transport — and this section rehearses every mapping that has ever appeared.',
    objectives: [
      'Map the seven OSI layers and four TCP/IP layers to their precise responsibilities',
      'Name the PDU of each layer (bit, frame, packet, segment, message) and trace encapsulation',
      'Distinguish packet (datagram) switching, circuit switching and virtual-circuit switching',
      'Classify a given service (encryption, framing, reliable delivery, naming) to its correct layer'
    ],
    concepts: [
      {
        term: 'OSI seven layers, bottom-up',
        kind: 'notation',
        statement: '**Physical** (bits on wire) → **Data link** (frames, hop-to-hop) → **Network** (packets, host-to-host across networks) → **Transport** (segments, process-to-process) → **Session** (dialogues, checkpoints) → **Presentation** (syntax, encryption, compression) → **Application** (user services).',
        detail: 'Memory frame: "Please Do Not Throw Sausage Pizza Away". Strict the graduate assessment placements: routing & logical addressing = network; framing, MAC, error detection = data link; reliability, congestion control, port numbers = transport; **encryption/compression = presentation** (never application, never session); DNS/HTTP/SMTP = application. Session layer duties: dialog control, synchronization checkpoints (rarely asked, always misplaced in options).'
      },
      {
        term: 'TCP/IP stack, four layers',
        kind: 'definition',
        statement: 'The Internet model: **Network access (link)**, **Internet (network)**, **Transport** (TCP/UDP), **Application** — with session and presentation duties absorbed into applications.',
        detail: 'TCP/IP merged OSI\'s top three into one application layer; the mapping question "which OSI layer has no separate TCP/IP counterpart" ⇒ session + presentation. the graduate assessment also likes: OSI is a *reference model* (descriptive, protocol-agnostic), TCP/IP is what the Internet actually runs — and neither is an implementation.'
      },
      {
        term: 'Encapsulation and PDUs',
        kind: 'law',
        statement: 'Each layer wraps the layer above\'s PDU with its own header: Application **message** → Transport adds ports (TCP **segment**/UDP datagram) → Network adds IP addresses (**packet/datagram**) → Link adds MAC addresses and trailer (**frame**) → Physical sends **bits**.',
        detail: 'Decapsulation is the mirror image on the receiver. A 2-mark classic: "a switch examines which header?" — Ethernet frame (data link). "A router examines which?" — IP header (network). MTU is a *link* limit, so fragmentation (splitting one packet into several) is a network-layer consequence of a link-layer constraint — the crossover the graduate assessment loves to phrase as "which layer fragments".'
      },
      {
        term: 'Switching paradigms',
        kind: 'insight',
        statement: '**Circuit switching** reserves an end-to-end path (bandwidth, buffers) before data — telephone style; **packet/datagram switching** sends self-addressed packets independently, no setup; **virtual circuits** set up a logical path (connection setup, per-call VC tables) but carry packets statistically.',
        detail: 'Datagram pros: robust to router failure (reroute per packet), no setup delay; cons: per-packet header overhead, possible reordering. VC pros: in-order delivery, simpler per-packet forwarding (short VC numbers); cons: setup cost, one path = single point of failure. the graduate assessment asks "which requires setup" / "which can reorder" — answer by paradigm, not by protocol.'
      }
    ],
    examples: [
      {
        title: 'Duty-to-layer mapping',
        problem: 'Assign each duty to its OSI layer: (a) compressing a video stream header information, (b) choosing the best route for a packet, (c) detecting a bit error inside one hop\'s transmission, (d) guaranteeing ordered delivery between two processes, (e) translating between character codes.',
        steps: [
          { label: 'Step 1', text: '(a) Compression is a *representation* change ⇒ **presentation**.' },
          { label: 'Step 2', text: '(b) Route selection is the defining network-layer job ⇒ **network**.' },
          { label: 'Step 3', text: '(c) Hop-by-hop error detection (CRC in the trailer) ⇒ **data link**. Note the scope words: "one hop" pins link, not transport.' },
          { label: 'Step 4', text: '(d) Process-to-process ordering with retransmission ⇒ **transport** (TCP). (e) Code translation (EBCDIC↔ASCII) is classic **presentation**. Every option hinges on scope: hop vs host vs process vs syntax.' }
        ],
        result: 'a → presentation, b → network, c → data link, d → transport, e → presentation.'
      },
      {
        title: 'Encapsulation trace',
        problem: 'A browser sends a 1400-byte HTTP POST. The link MTU is 1500, IP+TCP headers are 20+20 bytes. Name the PDUs and sizes at each layer.',
        steps: [
          { label: 'Step 1', text: 'Application: an HTTP **message** of 1400 bytes (headers + body).' },
          { label: 'Step 2', text: 'Transport: +20 B TCP header ⇒ a TCP **segment** of 1420 B.' },
          { label: 'Step 3', text: 'Network: +20 B IP header ⇒ an IP **packet** of 1440 B — under the 1500 MTU, so no fragmentation.' },
          { label: 'Step 4', text: 'Link: +14 B Ethernet header +4 B FCS ⇒ a **frame** of 1458 B; physical layer then clocks out ~11,664 **bits**.' }
        ],
        result: 'Message 1400 → segment 1420 → packet 1440 → frame 1458 → bits; fragmentation triggers only when packet size exceeds MTU.'
      }
    ],
    keyTakeaways: [
      'Scope tells the layer: one hop = data link; host-to-host = network; process-to-process = transport; representation = presentation.',
      'PDU ladder: message → segment (UDP datagram) → packet → frame → bits; a switch reads frames, a router reads packets.',
      'OSI has 7 layers; TCP/IP has 4 and absorbs session+presentation into the application layer.',
      'Encryption/compression = OSI presentation; dialog control & checkpoints = session; both are classic misplacements in options.',
      'Datagram = no setup, per-packet routing, may reorder; circuit = reserved path, no per-packet decisions; virtual circuit = setup + statistical packet switching hybrid.'
    ],
    quiz: [
      {
        q: 'Which OSI layer is responsible for encryption of user data?',
        options: ['Application', 'Session', 'Presentation', 'Transport'],
        answer: 2,
        explanation: 'Step 1: Encryption changes the *representation* (syntax) of data, not the dialogue, not the application semantics, not delivery. Step 2: OSI assigns syntax transformations — encryption, compression, code translation — to the presentation layer. Step 3: The application layer defines services (HTTP, SMTP); session manages dialogues and checkpoints. Step 4: Transport handles end-to-end delivery/reliability, not data formatting — so presentation is the answer.'
      },
      {
        q: 'An IP packet is carried inside an Ethernet frame. The Ethernet frame is the PDU of which layer, and the IP packet is addressed to',
        options: ['data link PDU; addressed to a MAC address', 'network PDU; addressed to an IP address', 'data link PDU; addressed to an IP address', 'network PDU; addressed to a MAC address'],
        answer: 2,
        explanation: 'Step 1: PDU naming: frame = data link, packet = network, segment = transport. Step 2: The outer header on any hop is the Ethernet header, carrying MAC (link-layer) addresses — the frame is the data-link PDU. Step 3: The IP header inside it carries the IP (network-layer) address — the packet is addressed by IP. Step 4: So "data link PDU; addressed to an IP address" correctly describes the frame as link PDU and the packet it carries as IP-addressed.'
      },
      {
        q: 'Which statement about datagram (packet) switching is TRUE?',
        options: ['It requires a setup phase before any data packet is sent', 'Two successive packets between the same hosts may follow different routes', 'Packets are guaranteed to arrive in order', 'Per-packet forwarding decisions use a virtual-circuit identifier'],
        answer: 1,
        explanation: 'Step 1: Datagram switching is connectionless: each packet is routed independently using its destination address. Step 2: Independent routing means successive packets can take different paths — and can therefore arrive out of order. Step 3: Setup phases and VC numbers belong to virtual-circuit switching. Step 4: Ordering, when needed, is restored at the transport layer (TCP), not guaranteed by the network.'
      },
      {
        q: 'In the TCP/IP protocol stack, the duties of the OSI session and presentation layers are',
        options: ['handled by separate TCP/IP layers', 'absorbed into the application layer', 'handled by the transport layer', 'not supported at all and never implemented in practice'],
        answer: 1,
        explanation: 'Step 1: TCP/IP has four layers: network access, internet, transport, application. Step 2: It defines no separate session or presentation layers. Step 3: Applications take over those duties directly (TLS for encryption, application-level sessions and codecs). Step 4: So the duties are absorbed into the application layer — not dropped entirely; the Internet clearly supports encrypted, session-based applications.'
      }
    ]
  },
  // ------------------------------------------------------- 11.2 Data link layer
  {
    sectionId: 'cse-g11-s2',
    readingTime: 10,
    prerequisites: [
      'Layering and PDU names (section 11.1)',
      'Binary arithmetic (XOR) and polynomial division for CRC',
      'Sliding-window flow control basics'
    ],
    intro: 'The data-link layer supplies the graduate assessment\'s most computational networking marks: CRC remainders, bit-stuffing outputs, sliding-window efficiency, and Ethernet\'s minimum-frame-size bound. Every one of those is a 3–5 step calculation with a fixed method — this section makes each method explicit and then drills the assessment\'s favourite parameter twists (window size formulas, slot time, backoff ranges).',
    objectives: [
      'Compute CRC remainders and verify codewords for a generator polynomial',
      'Apply byte stuffing and bit stuffing to given frames and count stuffed bits',
      'Compute Go-Back-N and Selective-Repeat window limits and channel utilisation',
      'Derive Ethernet\'s minimum frame size from slot time and detect CSMA/CD backoff ranges'
    ],
    concepts: [
      {
        term: 'CRC — polynomial division',
        kind: 'method',
        statement: 'Append $r$ zeros to the message (degree of generator $G(x)$ = $r$), divide by $G(x)$ **modulo 2**, and transmit data + remainder. Receiver divides the whole codeword by $G(x)$: remainder 0 ⇒ accepted.',
        detail: 'Modulo-2 division = XOR without carries; a leading-1 bit triggers subtraction of the generator, leading-0 shifts only. A generator with $x^{r}$ and $x^0$ terms detects all single-bit errors, all double errors (if $G$ does not divide $x^k+1$ for the frame length), any odd number of errors (if $G$ has factor $x+1$), and all bursts $\\le r$ bits — the "detect all bursts of length ≤ degree" rule is the most-tested property.'
      },
      {
        term: 'Framing: stuffing rules',
        kind: 'law',
        statement: '**Bit stuffing** (HDLC): insert a 0 after any run of five consecutive 1s, so the flag `01111110` never appears in data. **Byte stuffing** (PPP): escape `0x7E` as `0x7D 0x5E` and `0x7D` as `0x7D 0x5D`.',
        detail: 'Counting questions: n ones in data produce $\\lfloor n/5 \\rfloor$ stuffed zeros (per disjoint run). Character-count framing (a length field in the header) has no delimiters but breaks on a count error — the classic "why delimiters/escaping is preferred" answer: resynchronization.'
      },
      {
        term: 'Sliding windows: GBN vs SR',
        kind: 'law',
        statement: 'With $n$ sequence-number bits: **Go-Back-N** sender window $\\le 2^n - 1$, receiver window 1; **Selective Repeat** windows $\\le 2^{n-1}$ (both sides), because the receiver must distinguish a retransmitted old frame from a brand-new one.',
        detail: 'Utilisation for a sender window $W$ on an RTT channel: $U = \\min(1, \\frac{W \\cdot t\\_tx}{t\\_tx + 2 t\\_prop})$ — GBN retransmits the whole window on error; SR retransmits only the lost frame, which is why SR needs buffering at the receiver. The $2^{n-1}$ SR limit is THE one-mark formula: 3 bits ⇒ SR max 4, GBN max 7.'
      },
      {
        term: 'CSMA/CD and the minimum frame',
        kind: 'law',
        statement: 'A station must still be transmitting when a collision returns: $t\\_tx \\ge 2 t\\_prop$ ⇒ minimum frame = $2 \\times \\frac{d}{v} \\times R$ (R = data rate). Ethernet: 51.2 μs slot, 64-byte minimum at 10 Mbps.',
        detail: 'After the $i$-th collision, each station picks backoff $k \\cdot slot$ with $k \\in [0, 2^{\\min(i,10)} - 1]$ (binary exponential backoff; cap at 10, giving 1024 slots max; after 16 attempts the frame is dropped). Hub-based segments are one collision domain; **bridges/switches split collision domains but not broadcast domains** — VLANs or routers bound broadcast domains.'
      }
    ],
    examples: [
      {
        title: 'CRC division end-to-end',
        problem: 'Data 101110, generator 1001 ($G(x) = x^3 + 1$). Find the transmitted codeword.',
        steps: [
          { label: 'Step 1', text: 'Generator degree 3 ⇒ append three zeros: dividend = 101110**000**.' },
          { label: 'Step 2', text: 'Modulo-2 divide: 1011 1000 ÷ 1001. Align generator with the leading 1: XOR the top 4 bits 1011 ⊕ 1001 = 0010, bring down…' },
          { label: 'Step 3', text: 'Continuing: quotient bits accumulate as 101011, each XOR consuming one dividend bit; the process ends with remainder **011**.' },
          { label: 'Step 4', text: 'Transmit data + remainder: 101110**011**. Receiver\'s division of this 9-bit codeword by 1001 yields remainder 000 ⇒ accept.' }
        ],
        result: 'Codeword = 101110011 with CRC 011; any non-zero receiver remainder flags the error.'
      },
      {
        title: 'Ethernet minimum frame size',
        problem: 'A 1 km collision-domain segment propagates at $2 \\times 10^8$ m/s; the data rate is 10 Mbps. What minimum frame size does CSMA/CD require?',
        steps: [
          { label: 'Step 1', text: 'One-way propagation: $t\\_prop = \\frac{1000}{2 \\times 10^8} = 5 \\ \\mu s$.' },
          { label: 'Step 2', text: 'Worst case: the farthest station starts just before the frame arrives; the collision signal needs a full round trip: $2 t\\_prop = 10 \\ \\mu s$.' },
          { label: 'Step 3', text: 'Transmission time must cover that: $t\\_tx \\ge 10\\ \\mu s$.' },
          { label: 'Step 4', text: 'Bits = $10 \\times 10^{-6} \\times 10 \\times 10^{6}$ = **100 bits minimum** (rounded up to a byte boundary in real hardware; note how the canonical 512-bit Ethernet minimum comes from its 51.2 μs slot).' }
        ],
        result: '100 bits — the frame must outlast the round-trip so the sender can detect the collision.'
      }
    ],
    keyTakeaways: [
      'CRC: append r zeros, modulo-2 divide, transmit data+remainder; receiver remainder ≠ 0 ⇒ error; a degree-r generator catches all bursts ≤ r.',
      'Bit stuffing: a 0 after every five 1s (count per run); byte stuffing escapes 0x7E/0x7D with 0x7D.',
      'Window formulas with n sequence bits: GBN ≤ 2ⁿ−1, SR ≤ 2ⁿ⁻¹; utilisation = min(1, W·t_tx/(t_tx+2t_prop)).',
      'Minimum frame = 2·t_prop·R — detection demands the sender still be sending when the collision returns; Ethernet slot = 51.2 μs = 64 B at 10 Mbps.',
      'Backoff: k ∈ [0, 2^min(i,10) −1] slots after the i-th collision, give up after 16; bridges segment collision domains, only routers/VLANs segment broadcast domains.'
    ],
    quiz: [
      {
        q: 'Data 100100 is sent with generator $x^3 + 1$. After appending zeros and dividing, the CRC remainder is 001. The transmitted codeword is',
        options: ['100100001', '100100101', '100100011', '100100100'],
        answer: 0,
        explanation: 'Step 1: The generator $x^3+1$ has degree 3, so append 3 zeros: 100100000. Step 2: Modulo-2 division by 1001: the leading bits XOR down step by step, giving the stated remainder 001. Step 3: Codeword = data followed by the remainder: 100100 **001**. Step 4: The other options place the remainder before the data or use a wrong-degree remainder — only 100100001 is data+remainder.'
      },
      {
        q: 'A sliding-window protocol uses 4 sequence-number bits and must never confuse a retransmission for a new frame (Selective Repeat semantics). The maximum sender window is',
        options: ['15', '16', '8', '7'],
        answer: 2,
        explanation: 'Step 1: With 4 bits there are $2^4 = 16$ sequence numbers cycling. Step 2: Selective Repeat requires sender and receiver windows $\\le 2^{n-1} = 2^3 = 8$. Step 3: With 8, the receiver can always tell "this is the old window wrapped" from "this is the next window" because the two windows never overlap ambiguously. Step 4: 15 is the GBN sender bound (2ⁿ−1); 7 would be the GBN bound for 3 bits — both are the distractors planted here.'
      },
      {
        q: 'In bit stuffing (HDLC), the data stream 011111101 before framing causes the transmitter to',
        options: ['stuff a 0 after the first five 1s, so the flag pattern never appears in the payload', 'stuff a 1 after five 1s', 'escape the whole byte with 0x7D', 'drop the frame as invalid'],
        answer: 0,
        explanation: 'Step 1: The flag is 01111110 — exactly six 1s bounded by zeros. Step 2: The data contains five consecutive 1s followed by 1 more: to prevent any run of six 1s in the payload, the transmitter inserts a 0 after every run of five 1s. Step 3: The stuffed stream 011111**0**101 can never synthesise the flag; the receiver removes the 0 after any five-1 run. Step 4: Byte escaping (0x7D) belongs to PPP\'s byte stuffing, not HDLC bit stuffing.'
      },
      {
        q: 'A switch (multiport bridge) connecting several hosts',
        options: ['creates one collision domain and one broadcast domain', 'creates one collision domain per port but a single broadcast domain', 'separates both collision domains and broadcast domains', 'forwards frames based on IP addresses'],
        answer: 1,
        explanation: 'Step 1: A bridge/switch stores-and-forwards frames and runs CSMA/CD per segment — each port is its own collision domain. Step 2: Broadcast frames (e.g. ARP requests) are flooded to all ports: the whole switched network is one broadcast domain. Step 3: Only routers (or VLANs) bound broadcast domains. Step 4: Switches forward on *MAC* addresses learned from source fields; IP addresses are the network layer\'s business.'
      }
    ]
  },
  // ------------------------------------------------------- 11.3 Routing protocols
  {
    sectionId: 'cse-g11-s3',
    readingTime: 9,
    prerequisites: [
      'Dijkstra\'s shortest-path algorithm (the Algorithms chapter)',
      'Graph representation of networks with link costs',
      'Distance-vector iteration idea: relax edges repeatedly'
    ],
    intro: 'Routing is the graduate assessment\'s meeting point of algorithms and networks: Dijkstra with link-state flooding on one side, Bellman–Ford distance vectors on the other, and the count-to-infinity pathology as the question that has appeared in more papers than any other networking item. The three skills: run Dijkstra to a fixed order, run one DV exchange step, and diagnose count-to-infinity — all three with numbers you can redo in under two minutes.',
    objectives: [
      'Run Dijkstra on a small weighted graph, stating the permanent order and shortest-path tree',
      'Perform one step of distance-vector exchange and update a router\'s table',
      'Recognise and explain the count-to-infinity scenario and the partial cures (split horizon, poison reverse)',
      'Contrast link-state (OSPF-style) and distance-vector (RIP-style) routing on tables, messages and convergence'
    ],
    concepts: [
      {
        term: 'Link-state routing (Dijkstra + flooding)',
        kind: 'method',
        statement: 'Each router floods a **link-state packet** (its neighbour costs) to all routers; every router then holds the full topology and runs **Dijkstra** locally, producing identical shortest-path trees.',
        detail: 'Dijkstra order: mark source permanent (0); repeatedly pick the smallest tentative distance, make it permanent, relax its edges — $O(E \\log V)$ with a heap. Link-state needs $O(VE)$ messages in the flooding phase but converges quickly after a change and has no count-to-infinity (everyone sees the same graph). OSPF: link-state, areas, cost = often inverse bandwidth.'
      },
      {
        term: 'Distance-vector routing (distributed Bellman–Ford)',
        kind: 'method',
        statement: 'Each router keeps a vector of best-known costs and next hops, periodically sends it to **neighbours only**, and updates via $D_x(y) = \\min_v \\{ c(x,v) + D_v(y) \\}$ — the classic Bellman–Ford relaxation run distributed.',
        detail: 'The "good news travels fast, bad news travels slowly" asymmetry: a cost *drop* propagates in one exchange; a *rise or link failure* can take many rounds — that slow part is count-to-infinity. RIP is DV with hop count (max 15, 16 = ∞), 30-second updates, and split-horizon/poison-reverse mitigations.'
      },
      {
        term: 'Count-to-infinity',
        kind: 'insight',
        statement: 'When the route to a destination dies, a neighbour that *routes through the reporting router* keeps offering "a route" that secretly loops through the asker; each exchange increments the cost by the loop cost until the metric ceiling.',
        detail: 'Canonical A–B–C example with destination C: link B–C breaks; A tells B "I reach C in 2 via (B)"; B updates to 3 via A; A then hears 3 and updates to 4 via B… to ∞. Cures: **split horizon** (never advertise a route back on the interface it was learned from) blocks the two-node loop; **poison reverse** (advertise it back as ∞) makes the invalidation explicit; neither fixes three-node loops — only path-vector (BGP carrying full AS paths) or link-state fully eliminates the pathology.'
      },
      {
        term: 'Flooding',
        kind: 'definition',
        statement: 'Flooding forwards every incoming packet on **all** links except the arrival link; sequence numbers at the source let routers drop duplicates and stop older copies from circulating.',
        detail: 'Properties: reaches every node in the minimum possible number of hops (all shortest paths in parallel), maximally robust (survives any non-partitioning failure set), and the baseline against which "selective" routing is compared. Its controlled variant — flooding link-state packets once per topology change, then Dijkstra — is exactly how OSPF bootstrap works.'
      }
    ],
    examples: [
      {
        title: 'Dijkstra on a 5-node graph',
        problem: 'Costs: A–B 4, A–C 2, B–C 1, B–D 5, C–D 8, C–E 10, D–E 2. Find shortest paths from A and the permanent-set order.',
        steps: [
          { label: 'Step 1', text: 'Permanent: A(0). Tentative: B=4 (via A), C=2 (via A). Pick smallest ⇒ C.' },
          { label: 'Step 2', text: 'Permanent: A, C(2). Relax C\'s edges: B = min(4, 2+1) = **3 via C**; D = 2+8 = 10; E = 2+10 = 12. Pick smallest ⇒ B.' },
          { label: 'Step 3', text: 'Permanent: A, C, B(3). Relax B: D = min(10, 3+5) = **8 via B**; E unchanged (3+? no B–E). Pick smallest ⇒ D.' },
          { label: 'Step 4', text: 'Permanent: A, C, B, D(8). Relax D: E = min(12, 8+2) = **10 via D**. Last pick ⇒ E(10).' }
        ],
        result: 'Order A→C→B→D→E; costs B=3, C=2, D=8, E=10; the tree A–C, C–B, B–D, D–E.'
      },
      {
        title: 'One distance-vector exchange step',
        problem: 'Initial tables — X: (Y,2 via direct), (Z,7 via Y); Y: (X,2), (Z,4 direct); Z: (X,7 via Y), (Y,4). Y now learns its link to Z rose from 4 to 10. After the *next* exchange (everyone advertises simultaneously), what does Y\'s entry for Z become?',
        steps: [
          { label: 'Step 1', text: 'Y recomputes with neighbours X and (the broken-cost) direct link: direct = 10; via X = $2 + D_X(Z) = 2 + 7 = 9$.' },
          { label: 'Step 2', text: 'Y picks 9 **via X** — but X\'s 7 itself came *from Y* (X routes Z via Y): that is the loop seed.' },
          { label: 'Step 3', text: 'Simultaneously X recomputes: via Y = $2 + D_Y(Z) = 2 + 9 = 11$... X had 7 via Y, now sees Y advertising 9 ⇒ X updates to 11 via Y; next round Y hears 11 and becomes $2 + 11 = 13$ via X…' },
          { label: 'Step 4', text: 'The two routers keep handing the route back and forth, each time adding the X–Y cost 2 — the count-to-infinity signature, climbing 9, 11, 13, … to the ceiling (RIP: 16 = unreachable).' }
        ],
        result: 'Y\'s immediate update: Z = 9 via X — and the (9, 11, 13, …) climb is exactly what split horizon would have blocked by refusing X to advertise Z back toward Y.'
      }
    ],
    keyTakeaways: [
      'Dijkstra: greedy permanent set, relax on extraction; on ties the permanent order can differ but costs are unique.',
      'Link-state = flood topology, run Dijkstra locally (OSPF); distance-vector = exchange cost vectors with neighbours only (RIP, Bellman–Ford).',
      'Count-to-infinity: a failing route is re-advertised by a router that loops through the asker — cost climbs by the loop cost each round.',
      'Split horizon blocks 2-node loops; poison reverse makes invalidation explicit; neither fixes ≥3-node loops — path vector (BGP) does.',
      'Flooding visits all nodes in minimal hops and is maximally robust; its cost — duplicated traffic everywhere — is why routing uses it only for control packets.'
    ],
    quiz: [
      {
        q: 'In link-state routing, after convergence every router in the area',
        options: ['knows only its neighbours\' distance vectors', 'holds the same topology database and computes shortest paths with Dijkstra', 'computes paths with distributed Bellman–Ford on exchanged vectors', 'learns destinations only when a packet is first sent to them'],
        answer: 1,
        explanation: 'Step 1: Link-state routers flood LSPs describing their own links to every router. Step 2: The flooded LSPs assemble an identical link-state database at each router. Step 3: Each router then runs Dijkstra independently over that shared graph — same data, same algorithm, consistent trees. Step 4: Distance vectors and neighbour-only knowledge describe the *other* paradigm (RIP).'
      },
      {
        q: 'Routers A and B both reach destination D. A\'s cost to D is 3 via B; B\'s cost is 2 via A. The link costs are A–B = 1. This situation is',
        options: ['stable — the costs are consistent', 'a routing loop that count-to-infinity will grow (3, 4, 5, … until the metric ceiling)', 'impossible because Dijkstra prevents loops', 'resolved automatically by flooding data packets'],
        answer: 1,
        explanation: 'Step 1: A routes D via B while B routes D via A — a 2-router cycle. Step 2: When one re-advertises, the other adds the A–B cost 1 and updates: 3 → 4 → 5 … Step 3: The climb continues to the protocol ceiling (RIP 16 = unreachable) — the count-to-infinity pathology. Step 4: Split horizon would forbid A advertising D back to B, blocking exactly this two-node loop.'
      },
      {
        q: 'Which technique advertises a learned route back to the neighbour it was learned from, but with cost ∞?',
        options: ['Split horizon', 'Poison reverse', 'Link-state flooding', 'Path vector'],
        answer: 1,
        explanation: 'Step 1: Split horizon stays *silent* about the route on that interface. Step 2: Poison reverse instead sends an explicit unreachable (∞) advertisement back — positive knowledge of invalidity. Step 3: It converges faster than silence on link failure while blocking the same 2-node loops. Step 4: Flooding and path vectors are link-state/BGP machinery, not DV loop cures.'
      },
      {
        q: 'Dijkstra on a graph with V nodes and E edges runs in (with a binary heap priority queue)',
        options: ['$O(V^2)$ only, regardless of implementation', '$O(E \\log V)$', '$O(V \\log E)$', '$O(E + V)$ always'],
        answer: 1,
        explanation: 'Step 1: Each extraction from a binary heap costs $O(\\log V)$ and there are V extractions. Step 2: Each edge relaxation may trigger a decrease-key at $O(\\log V)$, over E edges. Step 3: Total $O((V + E) \\log V)$, simplified for connected graphs to $O(E \\log V)$. Step 4: $O(V^2)$ is the array (no-heap) variant — valid but not the asked implementation; linear $O(E+V)$ needs a Fibonacci-style heap amortisation beyond binary heaps.'
      }
    ]
  }
]
