import type { SectionContent } from '../library'

// ============================================================
// Chapter 7 — Discrete Probability (Rosen, 8th Edition)
// Master study content — sections 7.1 to 7.4
// ============================================================

export const ch7Content: SectionContent[] = [
  // ---------- 7.1 An Introduction to Discrete Probability ----------
  {
    sectionId: 'rosen-ch7-s1',
    readingTime: 10,
    intro: "Before probability became a theory, it was a gambler's problem: how often does a given total show up when dice are thrown? This section builds probability from nothing but sets and counting — the sample space, events, and Laplace's beautifully simple formula p(E) = |E|/|S|, together with the rules for combining events.",
    objectives: [
      "Model experiments with finite sample spaces and translate questions into events",
      "Apply Laplace's definition p(E) = |E|/|S| when outcomes are equally likely",
      "Assign probabilities when outcomes are not equally likely",
      "Combine events with complements, unions and intersections",
    ],
    concepts: [
      {
        term: 'Sample Space',
        kind: 'definition',
        statement: "The **sample space S** of an experiment is the set of all possible outcomes of the experiment.",
        detail: "Flipping three coins: S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT} with |S| = 2³ = 8. Rolling two distinguishable dice: 36 ordered pairs. Everything in discrete probability starts by writing down S.",
      },
      {
        term: 'Event',
        kind: 'definition',
        statement: "An **event E** is a subset of the sample space — a set of outcomes. The event E occurs when the outcome of the experiment belongs to E.",
        detail: "For two dice, 'the sum is 7' is the event {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)}. 'At least one head in three flips' is S minus {TTT}.",
      },
      {
        term: "Laplace's Definition of Probability",
        kind: 'law',
        statement: "If S is a finite sample space in which **all outcomes are equally likely**, then the probability of event E is **p(E) = |E|/|S|**.",
        detail: "This is the classical definition (Laplace, 1812). It requires genuine symmetry — a fair coin, an unloaded die, a well-shuffled deck. If the die is weighted, the outcomes are not equally likely and the formula is invalid.",
      },
      {
        term: 'Probability Distribution on Outcomes',
        kind: 'definition',
        statement: "A **probability distribution** on a sample space S assigns each outcome s a number p(s) with 0 ≤ p(s) ≤ 1 and ∑ₛ p(s) = 1; the probability of an event is p(E) = ∑ₛ∈E p(s).",
        detail: "A loaded die might have p(6) = 0.30 and p(i) = 0.14 for the other faces. The equally likely case is the special case p(s) = 1/|S| for every s.",
      },
      {
        term: 'The Complement Rule',
        kind: 'law',
        statement: "The probability that E does not occur is **p(Ē) = 1 − p(E)**.",
        detail: "'At least one' events live in complements: it is usually far easier to count 'none' and subtract from 1.",
      },
      {
        term: 'The Union Rule',
        kind: 'theorem',
        statement: "For any two events, **p(E ∪ F) = p(E) + p(F) − p(E ∩ F)**.",
        detail: "The overlap E ∩ F would be counted twice by a naive sum, so it is subtracted once. This is inclusion–exclusion wearing probabilistic clothing.",
      },
      {
        term: 'Mutually Exclusive Events',
        kind: 'definition',
        statement: "Events E and F are **mutually exclusive** if E ∩ F = ∅; in that case p(E ∪ F) = p(E) + p(F).",
        detail: "'Roll an even number' and 'roll a 3' cannot both happen on one roll, so their probabilities simply add.",
      },
      {
        term: 'The At-Least-One Strategy',
        kind: 'insight',
        statement: "By De Morgan's law, p(Ē₁ ∩ Ē₂ ∩ ... ∩ Ēₙ) = 1 − p(E₁ ∪ E₂ ∪ ... ∪ Eₙ): the probability that none of the events occur equals one minus the probability that at least one occurs.",
        detail: "This single identity solves 'is there a match?' problems — four dice showing at least one six, shared birthdays, collided hashes — by counting the easy side.",
      },
      {
        term: 'Counting Powers Probability',
        kind: 'insight',
        statement: "Every equally likely probability is a ratio of two counts, so the counting techniques of Chapter 6 — product rule, permutations, combinations — do the real work.",
        detail: "Ask first: how many total outcomes? Then: how many favorable ones? Poker hands, lottery draws and committee selections all become counting problems.",
      },
    ],
    examples: [
      {
        title: "The Chevalier's Dice",
        problem: "A fair die is rolled four times. What is the probability of rolling at least one 6?",
        steps: [
          { label: 'Total outcomes', text: 'The sample space has 6⁴ = 1296 equally likely sequences.' },
          { label: 'Take the complement', text: "The complement of 'at least one 6' is 'no 6 at all'." },
          { label: 'Count the complement', text: 'Each roll has 5 non-6 outcomes, giving 5⁴ = 625 sequences.' },
          { label: 'Subtract', text: 'p(at least one 6) = 1 − 625/1296 = 671/1296 ≈ 0.5177.' },
        ],
        result: '≈ 0.518 — slightly better than even, though gamblers of the era believed otherwise.',
      },
      {
        title: 'The Lottery',
        problem: 'A lottery asks you to pick 6 distinct numbers from 1 to 40; you win if your set matches the drawn set. What is the probability a single ticket wins?',
        steps: [
          { label: 'Sample space', text: 'The drawn set is an unordered 6-subset of 40 numbers, so |S| = C(40,6).' },
          { label: 'Winning event', text: 'Exactly one subset matches, so |E| = 1.' },
          { label: 'Compute C(40,6)', text: 'C(40,6) = 40!/(6!·34!) = 3,838,380.' },
          { label: 'Conclusion', text: 'p(win) = 1/3,838,380 ≈ 0.00000026.' },
        ],
        result: 'About one chance in 3.8 million per ticket.',
      },
      {
        title: 'Two Pair in Poker',
        problem: 'What is the probability that a 5-card hand from a standard 52-card deck is exactly two pairs?',
        steps: [
          { label: 'Total hands', text: '|S| = C(52,5) = 2,598,960 equally likely hands.' },
          { label: 'Choose the two ranks', text: 'C(13,2) = 78 ways to pick which two ranks form the pairs.' },
          { label: 'Choose suits for the pairs', text: 'Each pair uses 2 of the 4 suits: C(4,2)·C(4,2) = 36 ways.' },
          { label: 'Choose the side card', text: 'The fifth card comes from one of the other 11 ranks: 11·4 = 44 choices.' },
          { label: 'Multiply', text: '|E| = 78 · 36 · 44 = 123,552, so p = 123,552/2,598,960 ≈ 0.0475.' },
        ],
        result: 'About 4.75% — roughly one hand in 21.',
      },
    ],
    keyTakeaways: [
      'Probability starts by writing down the sample space S; an event is any subset of S.',
      "Laplace's formula p(E) = |E|/|S| is valid only when all outcomes are equally likely.",
      'When outcomes are not equally likely, assign each outcome s a probability p(s) with 0 ≤ p(s) ≤ 1 summing to 1.',
      "p(Ē) = 1 − p(E) turns painful 'at least one' problems into easy 'none' problems.",
      'p(E ∪ F) = p(E) + p(F) − p(E ∩ F); mutual exclusivity (E ∩ F = ∅) makes the last term vanish.',
    ],
    quiz: [
      {
        q: 'A fair coin is flipped three times. What is the probability of getting exactly two heads?',
        options: ['1/4', '3/8', '1/2', '5/8'],
        answer: 1,
        explanation: 'There are 2³ = 8 equally likely outcomes and exactly C(3,2) = 3 of them have two heads (HHT, HTH, THH), giving 3/8.',
      },
      {
        q: 'Two fair dice are rolled. What is the probability that the sum is 7 or 11?',
        options: ['1/6', '2/9', '5/18', '1/4'],
        answer: 1,
        explanation: 'Sum 7 occurs in 6 of 36 outcomes and sum 11 in 2 of 36; the events are mutually exclusive, so p = (6+2)/36 = 8/36 = 2/9.',
      },
      {
        q: 'Events E and F satisfy p(E) = 0.4, p(F) = 0.5 and E ∩ F = ∅. What is p(E ∪ F)?',
        options: ['0.9', '0.7', '0.2', '1.1'],
        answer: 0,
        explanation: 'Mutually exclusive events never overlap, so the probabilities simply add: 0.4 + 0.5 = 0.9.',
      },
      {
        q: 'A sample space has 10 equally likely outcomes. Event E contains 4 of them, event F contains 7, and |E ∩ F| = 2. What is p(E ∪ F)?',
        options: ['1.1, so the data is impossible', '0.9', '11/10', '0.5'],
        answer: 1,
        explanation: 'p(E ∪ F) = 4/10 + 7/10 − 2/10 = 9/10. The union rule subtracts the double-counted overlap, keeping probabilities at most 1.',
      },
    ],
  },

  // ---------- 7.2 Probability Theory ----------
  {
    sectionId: 'rosen-ch7-s2',
    readingTime: 12,
    intro: "New information changes everything: the probability of drawing an ace shifts the moment you see the first card. This section develops conditional probability, the product rule and independence, then introduces random variables, Bernoulli trials and the binomial distribution — the workhorses of all of applied probability.",
    objectives: [
      'Compute and interpret conditional probability p(E|F)',
      'Use the product rule for intersections of dependent events',
      'Define independence and distinguish pairwise from mutual independence',
      'Work with random variables and their distributions',
      'Count successes with the binomial distribution b(k; n, p)',
    ],
    concepts: [
      {
        term: 'Conditional Probability',
        kind: 'definition',
        statement: "If p(F) > 0, the **conditional probability of E given F** is **p(E|F) = p(E ∩ F)/p(F)**.",
        detail: 'Restrict attention to outcomes where F happened: p(E|F) measures the fraction of those in which E also happens. Note p(E|E) = 1 and p(E|S) = p(E).',
      },
      {
        term: 'Product Rule for Intersections',
        kind: 'theorem',
        statement: "**p(E ∩ F) = p(F)·p(E|F)**, and generally p(E₁ ∩ E₂ ∩ ... ∩ Eₙ) = p(E₁)·p(E₂|E₁)·p(E₃|E₁∩E₂)·...·p(Eₙ|E₁∩...∩Eₙ₋₁).",
        detail: 'Unfold intersections step by step, conditioning each new event on everything seen so far. This is the engine of the birthday problem.',
      },
      {
        term: 'Independence',
        kind: 'definition',
        statement: 'Events E and F are **independent** when **p(E ∩ F) = p(E)·p(F)**; otherwise they are dependent. When p(F) > 0 this is equivalent to p(E|F) = p(E).',
        detail: 'Independence is an algebraic fact, not a vague feeling: knowing that F occurred must leave the probability of E completely unchanged.',
      },
      {
        term: 'Pairwise Is Not Mutual',
        kind: 'insight',
        statement: 'A collection of events is **mutually independent** only if p(∩Eᵢ) = ∏p(Eᵢ) holds for every subcollection; pairwise independence alone is weaker.',
        detail: "Flip two fair coins and let E₁ = first is heads, E₂ = second is heads, E₃ = both match. Every pair is independent (each pairwise product checks out at 1/4), yet p(E₁∩E₂∩E₃) = 1/4 ≠ 1/8 = p(E₁)p(E₂)p(E₃).",
      },
      {
        term: 'Random Variable',
        kind: 'definition',
        statement: 'A **random variable** X is a function from the sample space S to the real numbers: X(s) is the value assigned to outcome s.',
        detail: 'Roll two dice and let X((i,j)) = i + j be the sum. The variable is random only because the outcome s is; the function itself is deterministic.',
      },
      {
        term: 'Distribution of a Random Variable',
        kind: 'definition',
        statement: "The **distribution** of X is given by **p(X = x) = p({s ∈ S : X(s) = x})**; X is uniformly distributed when all of its values are equally probable.",
        detail: 'The distribution lists the values X can take together with their probabilities, which sum to 1 over the range of X.',
      },
      {
        term: 'Bernoulli Trials',
        kind: 'definition',
        statement: 'A **Bernoulli trial** has exactly two outcomes — success with probability p and failure with probability q = 1 − p; a **sequence of Bernoulli trials** is independent repetition of such a trial.',
        detail: 'Each transmitted bit (error / no error), each coin flip, each shot modeled as independent with a fixed success probability p.',
      },
      {
        term: 'The Binomial Distribution',
        kind: 'theorem',
        statement: 'The probability of exactly k successes in n independent Bernoulli trials is **b(k; n, p) = C(n,k)·pᵏ·qⁿ⁻ᵏ**.',
        detail: 'Choose which k of the n trials succeed: C(n,k) ways, each specific pattern having probability pᵏqⁿ⁻ᵏ. The binomial theorem gives ∑ₖ b(k;n,p) = (p+q)ⁿ = 1.',
      },
      {
        term: 'The Birthday Template',
        kind: 'insight',
        statement: "No-match questions multiply chains of conditional probabilities: p(no shared birthday among n people) = (365/365)·(364/365)·...·((365−n+1)/365).",
        detail: 'With just n = 23 the product dips below 0.5, so p(at least one shared birthday) > 1/2 — one of the most counterintuitive facts in elementary probability.',
      },
    ],
    examples: [
      {
        title: 'Cards Without Replacement',
        problem: 'Two cards are dealt from a standard 52-card deck without replacement. What is the probability that both are aces?',
        steps: [
          { label: 'First card', text: 'p(ace on the first draw) = 4/52.' },
          { label: 'Condition on the first', text: 'Given the first is an ace, 3 of the remaining 51 cards are aces, so p(ace₂ | ace₁) = 3/51.' },
          { label: 'Product rule', text: 'p(both aces) = (4/52)·(3/51) = 12/2652 = 1/221.' },
        ],
        result: '1/221 ≈ 0.0045 — the draws are dependent, so you must condition.',
      },
      {
        title: 'The Birthday Problem',
        problem: 'Among 23 randomly chosen people, what is the probability that at least two share a birthday? (Assume 365 equally likely birthdays.)',
        steps: [
          { label: 'Complement', text: 'Compute p(no shared birthday) and subtract from 1.' },
          { label: 'Sequential conditioning', text: 'Person 2 avoids person 1 with probability 364/365; person 3 avoids two people with probability 363/365; and so on.' },
          { label: 'Product', text: 'p(no match) = ∏ₖ₌₁²³ (365 − k + 1)/365 = 365!/(342!·365²³).' },
          { label: 'Numerical value', text: 'The product ≈ 0.493, so p(at least one match) ≈ 1 − 0.493 = 0.507.' },
        ],
        result: '≈ 0.507 — with just 23 people, a shared birthday is more likely than not.',
      },
      {
        title: 'Bit Errors in Transmission',
        problem: 'A noisy channel flips each of 10 transmitted bits independently with probability 0.01. What is the probability that exactly two bits arrive corrupted?',
        steps: [
          { label: 'Model', text: 'The 10 bits are 10 independent Bernoulli trials with p = 0.01, q = 0.99.' },
          { label: 'Formula', text: 'b(2; 10, 0.01) = C(10,2)·(0.01)²·(0.99)⁸.' },
          { label: 'Compute', text: '45 · 0.0001 · 0.9227 ≈ 0.0042.' },
        ],
        result: '≈ 0.0042 — slightly better than 1 chance in 250, despite 10 chances to fail.',
      },
    ],
    keyTakeaways: [
      'Conditional probability p(E|F) = p(E ∩ F)/p(F) rescales probabilities to the world where F has already happened.',
      'The product rule unfolds intersections: p(E ∩ F) = p(F)p(E|F), extended stepwise to n events.',
      'Independence is the equation p(E ∩ F) = p(E)p(F) — not a judgment call.',
      'Pairwise independence does not imply mutual independence; every subcollection must be checked.',
      'For n independent Bernoulli trials with success probability p: b(k; n, p) = C(n,k)pᵏqⁿ⁻ᵏ.',
      'A random variable is a function on the sample space; its distribution assigns a probability to each value it can take.',
    ],
    quiz: [
      {
        q: 'Suppose p(F) = 0.4 and p(E ∩ F) = 0.1. What is p(E|F)?',
        options: ['0.25', '0.04', '0.5', '0.3'],
        answer: 0,
        explanation: 'p(E|F) = p(E ∩ F)/p(F) = 0.1/0.4 = 0.25. Conditioning rescales probabilities by the evidence F.',
      },
      {
        q: 'Events E and F are independent with p(E) = 0.5 and p(F) = 0.4. What is p(E ∩ F)?',
        options: ['0.9', '0.2', '0.1', '0.6'],
        answer: 1,
        explanation: 'By definition of independence, p(E ∩ F) = p(E)p(F) = 0.5 × 0.4 = 0.2. Adding the probabilities would be the union-rule mistake.',
      },
      {
        q: 'A fair coin is flipped 5 times. What is the probability of exactly 3 heads?',
        options: ['1/32', '5/16', '3/8', '1/2'],
        answer: 1,
        explanation: 'b(3; 5, 1/2) = C(5,3)(1/2)³(1/2)² = 10/32 = 5/16.',
      },
      {
        q: 'Which statement about independent events E and F (both with nonzero probability) is always true?',
        options: ['p(E|F) = p(F)', 'p(E|F) = p(E) and p(F|E) = p(F)', 'E and F are mutually exclusive', 'p(E ∪ F) = p(E) + p(F)'],
        answer: 1,
        explanation: 'Independence means neither event changes the other: p(E|F) = p(E)p(F)/p(F) = p(E), and symmetrically p(F|E) = p(F). Mutually exclusive nonzero events are, in fact, always dependent.',
      },
    ],
  },

  // ---------- 7.3 Bayes' Theorem ----------
  {
    sectionId: 'rosen-ch7-s3',
    readingTime: 10,
    intro: "A test for a rare disease is 99% accurate and you test positive — are you sick? Surprisingly, probably not. Bayes' theorem is the most used — and most misused — formula in applied probability: it tells you how to correctly reverse conditional probabilities and update beliefs with evidence.",
    objectives: [
      "Derive and apply Bayes' theorem p(F|E) = p(E|F)p(F)/p(E)",
      'Use partitions of the sample space to compute denominators',
      'Distinguish prior from posterior probabilities',
      'Analyze medical-test style problems with sensitivity and specificity',
      'Recognize the base-rate fallacy in inference',
    ],
    concepts: [
      {
        term: "Bayes' Theorem",
        kind: 'theorem',
        statement: "If p(E) > 0 and p(F) > 0, then **p(F|E) = p(E|F)·p(F)/p(E)**.",
        detail: "It converts 'the probability of the evidence given the cause' into 'the probability of the cause given the evidence'. Derivation: both products p(E|F)p(F) and p(F|E)p(E) equal p(E ∩ F); divide and rearrange.",
      },
      {
        term: 'Partition of the Sample Space',
        kind: 'definition',
        statement: 'Nonempty events F₁, F₂, ..., Fₙ form a **partition** of S if they are pairwise disjoint and F₁ ∪ ... ∪ Fₙ = S.',
        detail: 'A partition is a complete set of mutually exclusive scenarios: exactly one of them occurs. Hypotheses in Bayesian inference always come as a partition.',
      },
      {
        term: 'Bayes with a Partition',
        kind: 'theorem',
        statement: 'If F₁, ..., Fₙ partition S and p(E) > 0, then **p(Fᵢ|E) = p(E|Fᵢ)·p(Fᵢ) / ∑ⱼ₌₁ⁿ p(E|Fⱼ)·p(Fⱼ)**.',
        detail: 'The denominator is the total probability of the evidence across all scenarios. With just two scenarios (F and F̄), it is p(E|F)p(F) + p(E|F̄)p(F̄).',
      },
      {
        term: 'Prior and Posterior',
        kind: 'definition',
        statement: 'The **prior** p(F) is the probability of the hypothesis before seeing the evidence; the **posterior** p(F|E) is the updated probability after observing E.',
        detail: "Bayes' theorem is a belief-update machine: posterior ∝ likelihood × prior. Applied repeatedly, today's posterior becomes tomorrow's prior.",
      },
      {
        term: 'Sensitivity and Specificity',
        kind: 'definition',
        statement: 'For a test of a condition D, the **sensitivity** is p(positive | D) (the true-positive rate) and the **specificity** is p(negative | D̄) (the true-negative rate).',
        detail: 'Sensitivity catches the sick; specificity clears the healthy. The quantity 1 − specificity is the false-positive rate that dominates screening for rare conditions.',
      },
      {
        term: 'The Base-Rate Fallacy',
        kind: 'insight',
        statement: 'With a rare condition, most positive results are false even for an excellent test, because the healthy population is so much larger.',
        detail: 'Prevalence 1%, sensitivity 99%, specificity 95%: p(D|+) = (0.99·0.01)/(0.99·0.01 + 0.05·0.99) = 1/6. Only one positive in six is a true positive.',
      },
      {
        term: 'Bayesian Inference at Scale',
        kind: 'insight',
        statement: "Bayes' theorem on partitions is the mathematics behind medical diagnosis, spam filters and machine-learning classifiers.",
        detail: 'A naive Bayes spam filter treats words as evidence: multiply the conditional probabilities of the observed words given spam and given ham, then renormalize — exactly the partition form of Bayes.',
      },
    ],
    examples: [
      {
        title: 'The Medical Test',
        problem: 'A disease affects 1% of a population. A test has sensitivity 0.99 and specificity 0.95. A randomly chosen person tests positive. What is the probability they actually have the disease?',
        steps: [
          { label: 'Define events', text: 'D = has disease with p(D) = 0.01; + = positive test, with p(+|D) = 0.99 and p(+|D̄) = 0.05.' },
          { label: 'Numerator', text: 'p(+|D)·p(D) = 0.99 × 0.01 = 0.0099.' },
          { label: 'Denominator via partition', text: 'p(+) = 0.99×0.01 + 0.05×0.99 = 0.0099 + 0.0495 = 0.0594.' },
          { label: "Bayes' theorem", text: 'p(D|+) = 0.0099/0.0594 = 1/6 ≈ 0.167.' },
        ],
        result: 'Only ≈ 16.7% — false positives from the 99% healthy majority swamp the true positives.',
      },
      {
        title: 'The Three Coins',
        problem: 'A box holds a two-headed coin, a fair coin and a two-tailed coin. You pick a coin at random, flip it, and it shows heads. What is the probability you picked the two-headed coin?',
        steps: [
          { label: 'Partition', text: 'F₁ = two-headed, F₂ = fair, F₃ = two-tailed, each with prior probability 1/3.' },
          { label: 'Likelihoods', text: 'p(H|F₁) = 1, p(H|F₂) = 1/2, p(H|F₃) = 0.' },
          { label: 'Total probability', text: 'p(H) = (1/3)(1) + (1/3)(1/2) + (1/3)(0) = 1/2.' },
          { label: "Bayes' theorem", text: 'p(F₁|H) = (1/3)/(1/2) = 2/3.' },
        ],
        result: '2/3 — the evidence heads doubles the odds of the two-headed coin, from 1 in 3 to 2 in 3.',
      },
      {
        title: 'A Spam Filter',
        problem: '40% of email is spam. The word "free" appears in 30% of spam but only 1% of legitimate mail. A message contains "free". What is the probability it is spam?',
        steps: [
          { label: 'Priors', text: 'p(spam) = 0.4, p(ham) = 0.6.' },
          { label: 'Likelihoods', text: 'p(free|spam) = 0.30, p(free|ham) = 0.01.' },
          { label: 'Total probability', text: 'p(free) = 0.30×0.4 + 0.01×0.6 = 0.12 + 0.006 = 0.126.' },
          { label: "Bayes' theorem", text: 'p(spam|free) = 0.12/0.126 ≈ 0.952.' },
        ],
        result: '≈ 95.2% — one strong word already nearly decides the classification.',
      },
    ],
    keyTakeaways: [
      "Bayes' theorem: p(F|E) = p(E|F)p(F)/p(E) — it reverses the direction of conditioning.",
      'With a partition F₁, ..., Fₙ, the denominator is p(E) = ∑ⱼ p(E|Fⱼ)p(Fⱼ).',
      'The prior p(F) is belief before evidence; the posterior p(F|E) is belief after.',
      'Sensitivity = p(+|disease), specificity = p(−|no disease); 1 − specificity is the false-positive rate.',
      'For rare conditions, false positives dominate: even excellent tests yield surprising posteriors (the base-rate fallacy).',
    ],
    quiz: [
      {
        q: 'Suppose p(F) = 0.3, p(E|F) = 0.6 and p(E|F̄) = 0.2. What is p(F|E)?',
        options: ['0.45', '0.5625', '0.6', '0.18'],
        answer: 1,
        explanation: 'p(E) = 0.6×0.3 + 0.2×0.7 = 0.32, so p(F|E) = 0.18/0.32 = 0.5625.',
      },
      {
        q: 'A condition has prevalence 1%. A test with sensitivity 100% and specificity 95% is given to a random person who tests positive. Roughly what fraction of positives are true positives?',
        options: ['About 99%', 'About 2/3', 'About 1/6', 'About 1/2'],
        answer: 2,
        explanation: 'True positives contribute 1.00×0.01 = 0.01 while false positives contribute 0.05×0.99 = 0.0495, so only 0.01/0.0595 ≈ 1/6 of positives are real — the base-rate fallacy at work, even with a perfect sensitivity.',
      },
      {
        q: "In Bayes' theorem p(F|E) = p(E|F)p(F)/p(E), the quantity p(F) is called the:",
        options: ['posterior probability', 'prior probability', 'likelihood', 'marginal evidence'],
        answer: 1,
        explanation: 'p(F) is the prior — the probability of the hypothesis before the evidence E arrives; p(F|E) is the updated posterior.',
      },
      {
        q: "You want to compute the probability a person has a disease given a positive test using Bayes' theorem. Which partition of the sample space should structure the calculation?",
        options: ['{positive, negative}', '{has disease, does not have disease}', '{true positive, false positive}', '{tested, not tested}'],
        answer: 1,
        explanation: "The scenarios 'has disease' and 'does not have disease' are mutually exclusive and exhaustive — exactly one occurs. Bayes' denominator p(+) is then the weighted sum over these two hypotheses.",
      },
    ],
  },

  // ---------- 7.4 Expected Value and Variance ----------
  {
    sectionId: 'rosen-ch7-s4',
    readingTime: 12,
    intro: "The casino does not care whether you win tonight — it cares about the long run, and the long run is governed by expectation. This section defines expected value and variance of a random variable, proves the linearity of expectation (the most useful tool in the chapter), and ends with Chebyshev's remarkable guarantee that variance alone bounds how far a random variable can stray from its mean.",
    objectives: [
      'Compute expected values E(X) from distributions',
      'Exploit linearity of expectation, with or without independence',
      'Compute variance V(X) = E(X²) − E(X)² and use its algebraic rules',
      "Apply Chebyshev's inequality to bound tail probabilities",
      'Model sequential dependence with Markov chains',
    ],
    concepts: [
      {
        term: 'Expected Value',
        kind: 'definition',
        statement: 'The **expected value** (mean) of a random variable X on a sample space is **E(X) = ∑ₛ p(s)·X(s)** — equivalently E(X) = ∑ᵣ r·p(X = r) summed over the values r of X.',
        detail: 'A fair die: E(X) = (1+2+3+4+5+6)/6 = 3.5. The expectation is a weighted average of possible values; it need not be a value X can actually take.',
      },
      {
        term: 'Linearity of Expectation',
        kind: 'theorem',
        statement: '**E(aX + b) = a·E(X) + b** and E(X₁ + X₂ + ... + Xₙ) = E(X₁) + E(X₂) + ... + E(Xₙ) — **no independence required**.',
        detail: 'Expected heads in 100 flips = 100 × 1/2 = 50, instantly. The sum rule is what makes indicator variables so powerful.',
      },
      {
        term: 'Independent Random Variables',
        kind: 'definition',
        statement: 'X and Y are **independent** when p(X = x₁ ∧ Y = y₁) = p(X = x₁)·p(Y = y₁) for all values; then **E(XY) = E(X)·E(Y)** and V(X + Y) = V(X) + V(Y).',
        detail: 'Products of expectations require independence; sums of expectations never do. Two dice are independent; the first and second cards of a deal are not.',
      },
      {
        term: 'Indicator Random Variables',
        kind: 'method',
        statement: 'For an event E define X(s) = 1 if s ∈ E and 0 otherwise; then **E(X) = p(E)**. The number of things that happen is a sum of indicators.',
        detail: 'Expected number of aces in a 5-card hand: five indicators (one per card), each with probability 1/13, giving 5/13 — no hypergeometric gymnastics required.',
      },
      {
        term: 'Variance',
        kind: 'definition',
        statement: 'The **variance** of X is **V(X) = E((X − E(X))²)**, the expected squared deviation from the mean.',
        detail: 'A fair die: V(X) = 91/6 − (7/2)² = 35/12 ≈ 2.92. Variance measures spread and is always nonnegative.',
      },
      {
        term: 'Variance Formulas',
        kind: 'theorem',
        statement: '**V(X) = E(X²) − E(X)²**; V(aX + b) = a²·V(X); and for independent X and Y, **V(X + Y) = V(X) + V(Y)**.',
        detail: 'Shifting by b does not change spread; scaling by a scales deviations, so variance scales by a². Caution: the sum rule fails without independence.',
      },
      {
        term: "Chebyshev's Inequality",
        kind: 'theorem',
        statement: "For any random variable X with mean μ = E(X) and variance V(X), and any r > 0: **p(|X − μ| ≥ r) ≤ V(X)/r²**.",
        detail: 'Distribution-free! It converts knowledge of only the mean and variance into a tail bound. For 100 coin flips with V = 25, p(|X − 50| ≥ 10) ≤ 25/100 = 0.25.',
      },
      {
        term: 'Bernoulli and Binomial Moments',
        kind: 'law',
        statement: 'A single Bernoulli(p) trial has E(X) = p and V(X) = pq; a binomial count of successes in n trials has **E(X) = np** and **V(X) = npq**.',
        detail: 'The binomial variable is a sum of n independent Bernoulli indicators: expectations add to np and variances add to npq by independence.',
      },
      {
        term: 'Markov Chains',
        kind: 'definition',
        statement: 'A **Markov chain** is a sequence of trials where the outcome of each trial depends only on the state of the previous trial; its **transition matrix** T = [tᵢⱼ] records the probability of moving from state i to state j, with each row summing to 1.',
        detail: 'If p⁽ⁿ⁾ is the probability distribution after n steps, then p⁽ⁿ⁺¹⁾ = Tᵗ·p⁽ⁿ⁾ — matrix multiplication propagates belief. Weather (sunny/rainy) and random walks are classic Markov chains.',
      },
    ],
    examples: [
      {
        title: 'Roulette',
        problem: 'An American roulette wheel has 38 pockets: 18 black, 18 red and 2 green. You bet one dollar on black; you win a dollar if black comes up and lose your dollar otherwise. What is your expected profit per spin?',
        steps: [
          { label: 'Distribution', text: 'p(profit = +1) = 18/38 and p(profit = −1) = 20/38.' },
          { label: 'Expected value', text: 'E = (1)(18/38) + (−1)(20/38) = −2/38 ≈ −0.0526.' },
          { label: 'Interpretation', text: 'You lose about 5.26 cents per dollar per spin — the two green pockets guarantee the house edge in the long run.' },
        ],
        result: 'E(profit) ≈ −0.053 dollars per 1-dollar bet.',
      },
      {
        title: 'Birthday Pairs via Indicators',
        problem: 'In a room of 25 people, what is the expected number of pairs that share a birthday?',
        steps: [
          { label: 'Indicators', text: 'For each of the C(25,2) = 300 pairs, let Xᵢⱼ = 1 if the pair matches and 0 otherwise.' },
          { label: 'Indicator expectation', text: 'E(Xᵢⱼ) = p(match) = 1/365 for each pair.' },
          { label: 'Linearity', text: 'E(total matching pairs) = 300 × 1/365 = 300/365 ≈ 0.822.' },
          { label: 'Why it is legal', text: 'Linearity needs no independence between the pairs — only within each pair.' },
        ],
        result: '≈ 0.82 shared-birthday pairs expected among 25 people.',
      },
      {
        title: 'Chebyshev Bounds Coin Flips',
        problem: 'X is the number of heads in 100 independent fair coin flips. Bound the probability that X lies outside [40, 60].',
        steps: [
          { label: 'Mean and variance', text: 'X is binomial with n = 100, p = 1/2, so E(X) = 50 and V(X) = 100·(1/2)(1/2) = 25.' },
          { label: 'Set r', text: 'Falling outside [40, 60] means |X − 50| ≥ 10, so take r = 10.' },
          { label: 'Chebyshev', text: 'p(|X − 50| ≥ 10) ≤ 25/100 = 0.25.' },
          { label: 'Perspective', text: 'The exact probability is about 0.057 — Chebyshev is loose but universal.' },
        ],
        result: 'p(X outside [40,60]) ≤ 0.25 for any random variable with this mean and variance.',
      },
    ],
    keyTakeaways: [
      'E(X) = ∑ r·p(X = r) is a weighted average; it need not be a possible value of X.',
      'Linearity: E(X + Y) = E(X) + E(Y) always — independence is never needed.',
      'Variance V(X) = E(X²) − E(X)² measures spread; scaling X by a multiplies V(X) by a².',
      'Variances add only for independent random variables: V(X + Y) = V(X) + V(Y).',
      "Chebyshev: p(|X − μ| ≥ r) ≤ V(X)/r² — a tail bound from just the mean and variance.",
      'Markov chains propagate distributions by transition-matrix multiplication; each step depends only on the current state.',
    ],
    quiz: [
      {
        q: 'E(X) = 3 and E(Y) = −1. What is E(X + 2Y)?',
        options: ['1', '2', '5', 'Cannot be determined without knowing whether X and Y are independent'],
        answer: 0,
        explanation: 'Linearity of expectation needs no independence: E(X + 2Y) = E(X) + 2E(Y) = 3 − 2 = 1.',
      },
      {
        q: 'X has variance 5. What is V(2X + 3)?',
        options: ['10', '20', '23', '25'],
        answer: 1,
        explanation: 'V(aX + b) = a²V(X): the shift +3 vanishes and the scale 2 contributes 2² = 4, giving 4 × 5 = 20.',
      },
      {
        q: 'A random variable X has E(X) = 10 and V(X) = 4. What does Chebyshev inequality say about p(X ≤ 6 or X ≥ 14)?',
        options: ['≤ 1/4', '≤ 1/2', '≤ 4/14', '≤ 1/16'],
        answer: 0,
        explanation: 'The event is |X − 10| ≥ 4, so Chebyshev gives the bound V(X)/r² = 4/16 = 1/4.',
      },
      {
        q: 'Which of these statements is TRUE?',
        options: ['E(XY) = E(X)E(Y) for all random variables', 'E(X + Y) = E(X) + E(Y) requires X and Y independent', 'V(X + Y) = V(X) + V(Y) when X and Y are independent', 'V(X) can be negative'],
        answer: 2,
        explanation: 'Sums of expectations are always linear; products of expectations and sums of variances both require independence. Variance, being an expectation of a square, is never negative.',
      },
      // PYQ-pattern: GATE 2016 — mean and variance of a binomial variable (rephrased, values changed)
      {
        q: 'Let $X$ count successes in $12$ independent trials, each with success probability $\\frac{1}{3}$. Then $E(X)$ and $V(X)$ equal:',
        options: [`$E(X) = 6, V(X) = 4$`, `$E(X) = 4, V(X) = \\frac{8}{3}$`, `$E(X) = 4, V(X) = 4$`, `$E(X) = 12, V(X) = 12$`],
        answer: 1,
        explanation: 'Step 1: Restate $X$ as a **binomial variable** $X = X_{1} + \\cdots + X_{12}$ with each $X_{i}$ Bernoulli. Step 2: Recall the key formulas $E(X) = np$ and $V(X) = np(1-p)$ for independent trials. Step 3: Compute the mean as $E(X) = 12 \\times \\frac{1}{3} = 4$. Step 4: Compute the variance as $V(X) = 12 \\times \\frac{1}{3} \\times \\frac{2}{3} = \\frac{8}{3}$. Step 5: The distractors confuse models since $V = 4$ forgets the factor $(1-p)$, $E = 6$ halves the trial count incorrectly, and $E = V = 12$ treats every trial as certain success. Step 6: Hence the pair is $E(X) = 4$ and $V(X) = \\frac{8}{3}$.'
      },
    ],
  },
]
