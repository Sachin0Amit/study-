/**
 * Knowledge Universe — domain file: Mathematics
 *
 * Calculus, probability, and linear algebra — complete lessons.
 * Future expansion passes append new topics below.
 */

import type { KnowledgeDomainFile } from '../types'

export const mathematics: KnowledgeDomainFile = {
  domain: 'Mathematics',
  blurb:
    'Calculus, probability, and linear algebra — the language of change, evidence, and structure.',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'math-derivative-as-limit',
      title: 'The Derivative as a Limit',
      domain: 'Mathematics',
      field: 'Calculus',
      branch: 'Differential Calculus',
      tier: 'core',
      concepts: [
        'Average versus instantaneous rate of change',
        'Secant lines closing onto the tangent',
        'The difference quotient',
        'The formal limit definition',
        'Leibniz and Lagrange notation',
        'Continuity, corners, and differentiability',
      ],
      words: 800,
      readMins: 4,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'The derivative answers one question with unreasonable power: at this exact instant, how fast is it changing? Differential Calculus formalizes the answer as a limit — the slopes of secant lines through ever-closer points, closing in on the slope of the tangent line. This topic builds the definition from that picture, applies it to a concrete function, and connects it to the rules you use daily.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Velocity, growth rates, marginal cost, cooling curves, and the gradients that train machine-learning models are all derivatives in costume. A firm grip on the limit definition turns the shortcut rules into discoveries instead of incantations.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Average speed over an hour is a simple division of totals, but instantaneous speed at a moment seems to require distance over zero time — the paradox that stalled mathematics for centuries. The escape is to compute averages over shrinking windows and watch where they settle.',
        },
        {
          kind: 'para',
          text: 'A secant line through two points of a graph has slope Δy over Δx; slide the second point toward the first and the secants swing onto a limiting line — the tangent. This single moving picture contains the entire idea of the derivative.',
        },
        {
          kind: 'para',
          text: 'For a function f at a point x, the difference quotient (f(x+h) − f(x))/h is the slope over a step of width h. The derivative is the number this quotient approaches as h shrinks toward zero — a process, not a single plug-in.',
        },
        {
          kind: 'para',
          text: 'Writing the derivative as a limit turns the picture into a computable object: as h gets arbitrarily small, do the quotient values crowd onto one number? If they do, that number is the derivative; if they disagree or blow up, it does not exist.',
        },
        {
          kind: 'para',
          text: 'Leibniz wrote dy/dx to remind you of the quotients being limited; Lagrange wrote f′(x) to treat differentiation as a machine that produces a new function. Both denote the same object, and fluency means reading them interchangeably.',
        },
        {
          kind: 'para',
          text: 'If the limit of the quotient exists, the function is differentiable there, which forces continuity — any jump or hole kills the limit. The converse fails: the absolute value function is continuous at zero yet has no derivative there, because left and right slopes disagree at the corner.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Derivative definition',
          latex: "f'(x) = \\lim_{h \\to 0}\\frac{f(x+h) - f(x)}{h}",
          meaning: 'The slope of the tangent as the limit of secant slopes over shrinking intervals.',
        },
        {
          kind: 'formula',
          name: 'Power rule',
          latex: '\\frac{d}{dx}x^n = nx^{n-1}',
          meaning: 'Falls straight out of the definition plus the binomial expansion — the workhorse rule for polynomials.',
        },
        {
          kind: 'formula',
          name: 'Tangent slope at a point',
          latex: "m_{\\text{tangent}} = f'(a)",
          meaning: 'The tangent line to the curve at x = a has exactly this slope.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the derivative of f(x) = x² from the definition, and the tangent slope at x = 3.',
            'Recall the governing idea: f′(x) is the limit as h approaches zero of [(x+h)² − x²]/h.',
            'Apply: expand (x+h)² − x² = 2xh + h², divide by h to get 2x + h, then let h approach zero, leaving f′(x) = 2x — so f′(3) = 6.',
            'State the result: the slope of y = x² at x = 3 is 6; note that cancelling h before taking the limit is exactly the move that makes polynomial derivatives work.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Physics reads velocity as the derivative of position and acceleration as the derivative of velocity.',
            'Economics computes marginal cost and marginal revenue as derivatives of cost and revenue functions.',
            'Optimization in every field locates peaks and valleys by setting the derivative to zero.',
            'Machine learning descends error surfaces by repeatedly stepping against the gradient.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The classic blunder is substituting h = 0 directly: the difference quotient is meaningless there, and only its limit defines the derivative. Remember also the logical hierarchy — differentiability implies continuity, but continuity does not imply differentiability, as the corner of the absolute value function shows.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Difference quotient', def: 'The secant slope (f(x+h) − f(x))/h over a step of width h.' },
            { term: 'Limit', def: 'The value outputs approach as the input approaches a point.' },
            { term: 'Tangent line', def: 'The line a shrinking sequence of secants settles onto at a point.' },
            { term: 'Differentiable', def: 'Possessing a well-defined derivative at a point.' },
            { term: 'Leibniz notation', def: 'dy/dx, reading the derivative as a ratio of vanishing differences.' },
            { term: 'Power rule', def: 'The rule that the derivative of xⁿ is n·xⁿ⁻¹.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The expression (f(x+h) − f(x))/h represents:',
              options: ['The tangent slope at x', 'The secant slope over a step of width h', 'The average value of f', 'The area under f between x and x+h'],
              answer: 1,
              explain: 'It is an average rate over a finite interval; only its limit as h approaches zero becomes the tangent slope.',
            },
            {
              q: 'Differentiating f(x) = x² from the limit definition yields:',
              options: ['2x', 'x', 'x²', '2'],
              answer: 0,
              explain: 'Expanding, cancelling h, and letting h approach zero leaves f′(x) = 2x.',
            },
            {
              q: 'Which function is continuous at 0 but not differentiable there?',
              options: ['f(x) = x²', 'f(x) = |x|', 'f(x) = 1/x', 'f(x) = sin x'],
              answer: 1,
              explain: 'The absolute value function has slopes −1 and +1 on either side of the corner, so the two-sided limit of the quotient fails.',
            },
            {
              q: 'Why can we not simply substitute h = 0 in the difference quotient?',
              options: ['It gives the wrong sign', 'It would mean division by zero; only the limit is defined', 'It is slower than using rules', 'h must be negative'],
              answer: 1,
              explain: 'At h = 0 the quotient is 0/0 and undefined; the derivative is defined as the limit of the quotient, never its value at zero.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: functions, graphs, and basic limits. This topic opens the whole of calculus: differentiation rules, implicit differentiation, optimization, and eventually integration — the inverse problem of accumulating these instantaneous rates.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'The derivative is a limit of secant slopes — an instant built from shrinking intervals.',
            'f′(x) = lim of (f(x+h) − f(x))/h; cancel h before taking the limit.',
            'The derivative of xⁿ is n·xⁿ⁻¹, provable straight from the definition.',
            'Differentiability implies continuity; the converse fails at corners.',
            'dy/dx and f′(x) are one object in two notations.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'math-bayes-theorem',
      title: 'Bayes\u2019 Theorem and Updating Beliefs',
      domain: 'Mathematics',
      field: 'Probability & Statistics',
      branch: 'Bayesian Inference',
      tier: 'intermediate',
      concepts: [
        'Conditional probability',
        'Prior, likelihood, and posterior',
        'The theorem itself',
        'Base rates and false positives',
        'Sequential updating',
        'Odds and likelihood ratios',
      ],
      words: 860,
      readMins: 5,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'Bayes\u2019 theorem is the calculus of changing your mind: it says exactly how evidence should revise a prior belief into a posterior. In Bayesian Inference it converts P(hypothesis given evidence) — what you want — from P(evidence given hypothesis) — what you usually have. The formula is one line of algebra; the discipline of using it honestly is what this topic builds.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Medical screening, spam filters, fault diagnosis, and much of modern machine learning run on this single rule. Mistaking an accurate test for a probable diagnosis causes real harm, and Bayes is the corrective lens.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Conditional probability P(A|B) is the probability of A given that B is known true, computed as the probability of both divided by the probability of B — a re-weighting of the sample space. Order matters: P(A|B) and P(B|A) are generally different numbers, and confusing them is the classic Bayes error.',
        },
        {
          kind: 'para',
          text: 'The prior is your belief before the evidence arrives; the likelihood is how probable the evidence is under each hypothesis; the posterior is the re-weighted belief afterward. Bayesian inference is nothing more than feeding that loop repeatedly as data arrives.',
        },
        {
          kind: 'para',
          text: 'The theorem itself reads: posterior equals likelihood times prior, divided by the total probability of the evidence, where the denominator sums that product across all hypotheses. It follows in three lines from the definition of conditional probability — the depth lies in the habit, not the proof.',
        },
        {
          kind: 'para',
          text: 'When a condition is rare, even a highly accurate test yields mostly false positives among positive results, because the large healthy population contributes many errors. This base-rate neglect explains why screening low-risk populations for rare diseases does more harm than good.',
        },
        {
          kind: 'para',
          text: 'Today\u2019s posterior becomes tomorrow\u2019s prior: with independent pieces of evidence you may update once per observation, and the evidence accumulates multiplicatively through likelihoods. That is the logic behind spam filters scoring one feature at a time.',
        },
        {
          kind: 'para',
          text: 'Divide the theorem for a hypothesis against its negation and the odds form appears: posterior odds equal prior odds times the likelihood ratio. A likelihood ratio of 9 turns even odds into 9-to-1, and working with log-likelihood ratios turns that multiplication into convenient addition.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Bayes\u2019 theorem',
          latex: 'P(H\\mid E) = \\frac{P(E\\mid H)\\,P(H)}{P(E)}',
          meaning: 'The posterior equals likelihood times prior, normalized by the total probability of the evidence.',
        },
        {
          kind: 'formula',
          name: 'Total probability',
          latex: 'P(E) = P(E\\mid H)P(H) + P(E\\mid H^c)P(H^c)',
          meaning: 'The evidence probability across all hypotheses — the normalizing denominator.',
        },
        {
          kind: 'formula',
          name: 'Odds form',
          latex: '\\frac{P(H\\mid E)}{P(H^c\\mid E)} = \\frac{P(H)}{P(H^c)}\\times\\frac{P(E\\mid H)}{P(E\\mid H^c)}',
          meaning: 'Posterior odds = prior odds × likelihood ratio: evidence multiplies odds.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the probability of disease given a positive test, when prevalence is 1 percent, sensitivity is 99 percent, and the false-positive rate is 5 percent.',
            'Recall the governing idea: Bayes\u2019 theorem with the total-probability denominator.',
            'Apply: P(positive) = 0.99 × 0.01 + 0.05 × 0.99 = 0.0099 + 0.0495 = 0.0594, so P(disease | positive) = 0.0099 / 0.0594 ≈ 0.167.',
            'State the result: about 17 percent — a positive result is still roughly five times more likely to be false than true, purely because the disease is rare; a second independent positive would push the probability above 80 percent.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Screening policy weighs the positive predictive value, not the sensitivity, before recommending wide testing.',
            'Spam filters multiply likelihood ratios of words and phrases to score incoming mail.',
            'A/B testing platforms update posterior conversion rates continuously as data streams in.',
            'Engineering fault diagnosis ranks candidate causes by posterior probability given the observed symptoms.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Nearly every misuse swaps the conditional: the probability of a positive test given disease is not the probability of disease given a positive test, and the two can differ by an order of magnitude. Guard also against double-counting evidence and against priors stated with false confidence — Bayes amplifies bad inputs as faithfully as good ones.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Prior', def: 'Probability assigned to a hypothesis before the evidence is seen.' },
            { term: 'Likelihood', def: 'Probability of the evidence under a given hypothesis.' },
            { term: 'Posterior', def: 'Updated probability of the hypothesis after the evidence.' },
            { term: 'Base rate', def: 'The unconditional frequency of the condition in the population.' },
            { term: 'Likelihood ratio', def: 'P(E|H) over P(E|not H) — the multiplicative boost evidence gives to odds.' },
            { term: 'False positive', def: 'A positive result for a condition that is actually absent.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A test with 99 percent sensitivity and a 5 percent false-positive rate is used in a population with 1 percent prevalence. Given a positive result, the chance of disease is roughly:',
              options: ['99 percent', '95 percent', '17 percent', '50 percent'],
              answer: 2,
              explain: 'False positives from the 99 percent healthy majority outnumber true positives about five to one, so the posterior is only about 0.167.',
            },
            {
              q: 'In Bayesian terms, the posterior is proportional to:',
              options: ['The prior divided by the likelihood', 'The likelihood times the prior', 'The evidence times the prior', 'The likelihood minus the prior'],
              answer: 1,
              explain: 'Bayes\u2019 theorem multiplies how well the hypothesis predicts the evidence by how plausible it was beforehand.',
            },
            {
              q: 'In the odds form of Bayes\u2019 rule, evidence acts by:',
              options: ['Adding to the prior odds', 'Multiplying the prior odds by a likelihood ratio', 'Replacing the prior entirely', 'Averaging with the prior'],
              answer: 1,
              explain: 'Each independent observation multiplies the current odds by its own likelihood ratio.',
            },
            {
              q: 'After observing evidence E₁ and updating, then observing E₂, a Bayesian treats the previous posterior as:',
              options: ['A likelihood', 'The new prior', 'Noise to be discarded', 'The normalizing constant'],
              answer: 1,
              explain: 'Sequential updating means each posterior from one step becomes the prior entering the next.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: basic probability, conditional probability, and counting. Move on to Bayesian networks, conjugate priors, and hypothesis testing, where the Bayesian and frequentist traditions meet — and argue. The Nernst-style habit of tracking what is given versus what is wanted pays off everywhere.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Bayes in one line: posterior ∝ likelihood × prior.',
            'P(A|B) does not equal P(B|A) — the cardinal distinction.',
            'Rare conditions make even accurate tests mostly wrong on positives.',
            'Posterior odds = prior odds × likelihood ratio.',
            'Today\u2019s posterior is tomorrow\u2019s prior: updating is a loop, not an event.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'math-eigenvalues',
      title: 'Eigenvalues and What They Mean',
      domain: 'Mathematics',
      field: 'Linear Algebra',
      branch: 'Matrix Theory',
      tier: 'advanced',
      concepts: [
        'Invariant directions — the eigenvector idea',
        'The characteristic polynomial',
        'Trace and determinant shortcuts',
        'Diagonalization',
        'Defective matrices and multiplicity',
        'The spectral theorem for symmetric matrices',
        'Eigenvalues in dynamics, PCA, and stability',
      ],
      words: 890,
      readMins: 5,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'An eigenvector of a matrix is a direction its transformation leaves unchanged apart from stretching, and the eigenvalue is that stretch. Matrix Theory builds the whole subject from the characteristic polynomial det(A − λI) = 0, then uses it to diagonalize matrices, analyze stability, and decompose data. This treats eigenvalues not as a procedure to memorize but as meaning: the invariant directions of linear maps.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'The original PageRank algorithm was an eigenvector computation; principal component analysis, quantum energy levels, vibration modes of buildings, and the stability of control systems are eigenvalue problems in different clothes. Few mathematical objects appear in so many costumes.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Most vectors both rotate and stretch under a matrix, but special ones only stretch: Av = λv. For a shear, horizontal vectors pass through untouched, so λ = 1; for a reflection, vectors on the mirror line are fixed while perpendicular ones flip sign, so λ = 1 and λ = −1.',
        },
        {
          kind: 'para',
          text: 'Rewriting Av = λv as (A − λI)v = 0 shows that a nonzero solution exists only when the determinant of A − λI vanishes. That determinant is a polynomial — the characteristic polynomial — and its roots are the eigenvalues.',
        },
        {
          kind: 'para',
          text: 'For a 2×2 matrix the polynomial is λ² minus the trace times λ plus the determinant, which makes a fast checking tool: eigenvalues always sum to the trace and multiply to the determinant. Projections have eigenvalues 0 and 1; plane rotations have the complex conjugate pair e^{iθ} and e^{−iθ}.',
        },
        {
          kind: 'para',
          text: 'If A has n independent eigenvectors, stacking them as the columns of P gives A = PDP⁻¹ with D diagonal. Powers become trivial — Aᵏ equals P Dᵏ P⁻¹ — which is how Markov chains, recurrence relations, and linear differential systems are solved in closed form.',
        },
        {
          kind: 'para',
          text: 'Some matrices lack a full basis of eigenvectors: the algebraic multiplicity of an eigenvalue can exceed its geometric multiplicity, forcing Jordan blocks instead of a clean diagonal. These defective cases are why most matrices diagonalize over the complex numbers, but not every one does.',
        },
        {
          kind: 'para',
          text: 'Real symmetric matrices are guaranteed real eigenvalues and orthonormal eigenvectors — the spectral theorem. This single fact is what makes principal component analysis, vibration analysis, and quantum observables so tractable.',
        },
        {
          kind: 'para',
          text: 'In dynamical systems the eigenvalues of the state matrix decide the story: trajectories decay when every discrete eigenvalue has magnitude below one, or every continuous-time eigenvalue has negative real part, and blow up otherwise. PCA takes eigenvalues of the covariance matrix, each one the variance captured along its principal axis.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Eigenvalue equation',
          latex: 'A\\mathbf{v} = \\lambda\\mathbf{v}',
          meaning: 'The defining property: v is only scaled, never rotated, by A.',
        },
        {
          kind: 'formula',
          name: 'Characteristic equation',
          latex: '\\det(A - \\lambda I) = 0',
          meaning: 'A nonzero eigenvector exists exactly when this determinant vanishes; its roots are the eigenvalues.',
        },
        {
          kind: 'formula',
          name: '2×2 characteristic shortcut',
          latex: '\\lambda^2 - (\\mathrm{tr}\\,A)\\,\\lambda + \\det A = 0',
          meaning: 'Eigenvalues of a 2×2 matrix from its trace and determinant; in general they sum to the trace and multiply to the determinant.',
        },
        {
          kind: 'formula',
          name: 'Diagonalization',
          latex: 'A = PDP^{-1}',
          meaning: 'Changing basis to eigenvectors turns the matrix action into coordinate-wise scaling.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: all eigenvalues and eigenvectors of the matrix with rows (2, 1) and (1, 2).',
            'Recall the governing idea: solve det(A − λI) = 0, then solve (A − λI)v = 0 for each root.',
            'Apply: the determinant is (2−λ)² − 1 = 0, giving λ = 1 and λ = 3. For λ = 1 the vector (1, −1) works; for λ = 3 the vector (1, 1) works. Trace check: 1 + 3 = 4 equals the trace, and 1 × 3 = 3 equals the determinant.',
            'State the result: A stretches the diagonal direction (1, 1) threefold and leaves the anti-diagonal direction (1, −1) fixed; with P built from those eigenvectors, A = PDP⁻¹ holds.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Markov chains converge to the dominant eigenvector of the transition matrix — the stationary distribution.',
            'PCA ranks data directions by covariance eigenvalues for compression and visualization.',
            'Structural engineers compute resonant vibration modes of bridges and buildings as eigenvalue problems.',
            'Control theory certifies a system stable exactly when the relevant eigenvalues sit in the left half-plane.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Students solve the characteristic equation but never verify the eigenvector equation, or assume eigenvalues must be real — a plane rotation has none, only a complex conjugate pair. Remember also that an n×n matrix is diagonalizable only when it has n independent eigenvectors; repeated eigenvalues are exactly where that can fail.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Eigenvector', def: 'A nonzero vector v satisfying Av = λv — a direction the map only scales.' },
            { term: 'Eigenvalue', def: 'The scale factor λ attached to an eigenvector.' },
            { term: 'Characteristic polynomial', def: 'det(A − λI), whose roots are the eigenvalues.' },
            { term: 'Diagonalization', def: 'Factoring A = PDP⁻¹ so the map becomes pure coordinate scalings.' },
            { term: 'Algebraic multiplicity', def: 'How many times an eigenvalue appears as a root of the characteristic polynomial.' },
            { term: 'Spectral theorem', def: 'Real symmetric matrices have real eigenvalues and an orthonormal eigenbasis.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'For the matrix with rows (2, 1) and (1, 2), the eigenvalues are:',
              options: ['1 and 3', '2 and 2', '0 and 4', '−1 and 3'],
              answer: 0,
              explain: 'The characteristic polynomial λ² − 4λ + 3 factors as (λ − 1)(λ − 3); note the roots sum to the trace 4 and multiply to the determinant 3.',
            },
            {
              q: 'The eigenvalues of any square matrix always:',
              options: ['Sum to the trace and multiply to the determinant', 'Are all real numbers', 'Sum to the determinant', 'Are integers'],
              answer: 0,
              explain: 'Both facts follow from the characteristic polynomial\u2019s coefficients — a fast check on any hand computation.',
            },
            {
              q: 'A real 2×2 rotation by 90 degrees has eigenvalues:',
              options: ['1 and −1', '0 and 1', 'The complex pair i and −i', '2 and −2'],
              answer: 2,
              explain: 'No real direction is left invariant by a quarter-turn; the characteristic polynomial λ² + 1 yields the imaginary pair.',
            },
            {
              q: 'Writing A = PDP⁻¹ is useful mainly because:',
              options: ['It makes A symmetric', 'Powers and functions of A reduce to the diagonal matrix', 'It removes zero eigenvalues', 'It orthogonalizes the columns of A'],
              answer: 1,
              explain: 'Diagonal matrices are trivial to exponentiate or raise to powers, so repeated actions of A become easy to compute.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: matrix multiplication, determinants, and linear independence. Follow with the singular value decomposition — the twin theory for non-square matrices — then applications in differential equations, graph theory, and multivariate statistics, where eigenvalues quietly run the show.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Eigenvectors are invariant directions; eigenvalues are their stretch factors.',
            'Find them by solving det(A − λI) = 0.',
            'Eigenvalues sum to the trace and multiply to the determinant.',
            'A = PDP⁻¹ makes powers and exponentials of matrices easy.',
            'Symmetric matrices: real eigenvalues and an orthonormal eigenbasis — the spectral theorem.',
          ],
        },
      ],
    },
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
      words: 1080,
      readMins: 5,
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
    // ------------------------------------------------------------------
    {
      id: 'math-infinity-countability',
      title: 'Infinity and Different Sizes of Forever',
      domain: 'Mathematics',
      field: 'Set Theory & Logic',
      branch: 'Foundations',
      tier: 'advanced',
      concepts: [
        'Same size means one-to-one correspondence',
        'Countable infinity and Hilbert\u2019s hotel',
        'Cantor\u2019s diagonal argument',
        'Power sets and Cantor\u2019s theorem',
        'The continuum hypothesis',
        'Diagonalization beyond set theory',
      ],
      words: 1100,
      readMins: 6,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Galileo noticed that perfect squares are at once scarcer than whole numbers — thinning toward nothing as you climb — and exactly as numerous, since every whole number owns its own square. The paradox dissolved only when Georg Cantor, in the 1870s, made infinity an object that proofs could measure. This topic climbs his ladder of ever-larger infinities: from the countable sprawl of the rationals, past the unlistable continuum of the reals, to the theorem guaranteeing that the ladder never ends.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Every unsolvability result in computer science — the halting problem, undecidability, Gödel\u2019s incompleteness theorems — is a diagonal argument in different clothes. Knowing that some infinities, and some problems, are provably bigger than others is the foundation on which the modern theories of computation and mathematical truth stand.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Two sets are equinumerous — the same size — when their elements can be paired off with nothing left over: a bijection. For finite sets this is ordinary counting; Cantor\u2019s audacity was applying the same criterion to infinite sets, where a part can match the whole: the even numbers pair perfectly with all naturals through n ↔ 2n. For infinite sets, size means pairability, not containment.',
        },
        {
          kind: 'para',
          text: 'A set is countable when it can be listed — enumerated so that every element appears at some finite position. The integers qualify (0, 1, −1, 2, −2, …), and, astonishingly, so do the rationals: sweep the numerator–denominator grid along diagonals and every fraction eventually appears. Hilbert\u2019s hotel — fully occupied yet always able to seat one more guest by shifting everyone a room along — dramatizes how differently countable infinity behaves from mere largeness.',
        },
        {
          kind: 'para',
          text: 'The real numbers between 0 and 1 cannot be listed. Given any purported enumeration, Cantor builds a number whose first decimal digit differs from that of the first entry, whose second digit differs from that of the second entry, and so on down the diagonal. The constructed number disagrees with every listed entry in at least one digit, so it was never on the list — no enumeration is complete, and the reals are uncountable.',
        },
        {
          kind: 'para',
          text: 'The power set P(A) — the collection of all subsets of A — is always strictly bigger than A itself. The proof is diagonalization in its purest form: for any function f pairing elements of A with subsets of A, the set D of elements that do not belong to their own image is missed by every pairing. There is therefore no largest infinity; every cardinality spawns a bigger one, an endless tower of sizes.',
        },
        {
          kind: 'para',
          text: 'How big is the continuum? Cantor proved the reals have the same cardinality as the power set of the naturals, written 2^ℵ₀, and conjectured that no size lies strictly between that and ℵ₀ — the continuum hypothesis. Gödel in 1940 and Cohen in 1963 eventually showed the hypothesis can be neither proved nor refuted from the standard axioms of set theory: a natural, genuinely undecidable question.',
        },
        {
          kind: 'para',
          text: 'The move that defeats any list of reals also defeats any list of programs. Turing\u2019s halting problem assumes a program that predicts which programs halt, feeds it a self-referential diagonal adversary, and derives a contradiction. Gödel\u2019s incompleteness theorems run the same pattern against enumerations of proofs. One counting idea — step outside any proposed complete inventory — fences in computation, proof, and truth.',
        },
        { kind: 'heading', text: 'The Mathematics' },
        {
          kind: 'formula',
          name: 'Countable cardinality',
          latex: '\\aleph_0 = |\\mathbb{N}| = |\\mathbb{Z}| = |\\mathbb{Q}|',
          meaning: 'The naturals, integers, and rationals share one cardinality: ℵ₀, listable infinity.',
        },
        {
          kind: 'formula',
          name: 'Cantor\u2019s theorem',
          latex: '|A| < \\left|\\mathcal{P}(A)\\right|, \\qquad 2^{\\aleph_0} = |\\mathbb{R}|',
          meaning: 'Every set is strictly smaller than its power set; the reals match the subsets of the naturals.',
        },
        {
          kind: 'formula',
          name: 'Cardinal arithmetic',
          latex: '\\aleph_0 + 1 = \\aleph_0, \\qquad \\aleph_0 + \\aleph_0 = \\aleph_0',
          meaning: 'Countable infinity absorbs finite — and even countable — additions: Hilbert\u2019s hotel in symbols.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: show that no infinite list can contain every real number between 0 and 1.',
            'Recall the governing idea: Cantor\u2019s diagonal argument — from any proposed list, construct a number whose nth decimal digit differs from the nth digit of the nth entry.',
            'Apply: suppose the list opens 0.5000…, 0.3333…, 0.1414…; read off the diagonal digits 5, 3, 1 and replace each with a different digit between 1 and 8 — say 6, 4, 2 — beginning the number 0.642…, which also sidesteps the 0.999… = 1 ambiguity.',
            'State the result: 0.642… differs from the first, second, and third entries, and continuing down the diagonal it differs from every entry — the list was incomplete, so the interval is uncountable.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Computability: Turing\u2019s diagonalization proves no program can decide the halting problem.',
            'Measure theory: countable sets have length zero, so even the dense rationals fill none of the number line.',
            'Probability on continuous spaces: single outcomes carry probability zero; only ranges of outcomes have weight.',
            'Foundations of mathematics: the cardinality ladder organizes set theory and motivates the axioms still debated today.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The seductive error is treating infinity as a number you can subtract: ∞ − ∞ is undefined, and cardinal subtraction genuinely fails. Do not equate dense with uncountable — the rationals are dense yet countable. And Cantor\u2019s theorem does not say the reals are the very next size after the naturals; that claim is exactly the independent continuum hypothesis, not a theorem.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Bijection', def: 'A one-to-one pairing between two sets that exhausts both sides.' },
            { term: 'Cardinality', def: 'The size of a set, decided by which sets it can biject with.' },
            { term: 'Countable', def: 'Listable by the natural numbers — finite, or of size ℵ₀.' },
            { term: 'Aleph-null', def: 'The cardinality ℵ₀ of the natural numbers, the smallest infinite size.' },
            { term: 'Diagonal argument', def: 'Cantor\u2019s construction of an object differing from the nth listed object at position n, defeating any enumeration.' },
            { term: 'Power set', def: 'The set of all subsets of a given set — always strictly larger, by Cantor\u2019s theorem.' },
            { term: 'Continuum hypothesis', def: 'The claim that no cardinality lies strictly between ℵ₀ and the reals; independent of standard set theory.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The integers and the natural numbers have:',
              options: ['Different sizes, since the integers include the negatives', 'The same size, witnessed by an explicit bijection', 'Incomparable sizes', 'Sizes differing by exactly one'],
              answer: 1,
              explain: 'Pair 0 with 0, 1 with 1, −1 with 2, 2 with 3, −2 with 4, and so on — a bijection proves equinumerosity.',
            },
            {
              q: 'Cantor\u2019s diagonal argument establishes that:',
              options: ['The rationals cannot be listed', 'Every infinite set bijects with the naturals', 'The real numbers cannot be enumerated in a list', 'Countable unions of countable sets are uncountable'],
              answer: 2,
              explain: 'Any list of reals in an interval misses a number built to differ along the diagonal — so no enumeration is complete.',
            },
            {
              q: 'Cantor\u2019s theorem states that:',
              options: ['Every set is strictly smaller than its power set', 'The power set of a set always bijects with the set itself', 'The reals are countable', 'All infinite sets share one size'],
              answer: 0,
              explain: 'No function from a set onto its power set exists; the diagonal subset of elements not in their own image is missed by every candidate.',
            },
            {
              q: 'Hilbert\u2019s fully occupied hotel can always take one more guest because:',
              options: ['Infinite sets contain a largest element', 'Some rooms are secretly vacant', 'The guests can double up in rooms', 'Shifting each guest one room along frees room 1, since ℵ₀ + 1 = ℵ₀'],
              answer: 3,
              explain: 'The relocation n → n + 1 moves everyone and empties room 1: adding one element does not change countable cardinality.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Prerequisites: set notation, functions, and proof by contradiction. Follow with ordinal numbers — a finer notion of infinite size that tracks order rather than quantity — then the axiom of choice, Gödel\u2019s incompleteness theorems, and computability theory, where diagonalization finds its most consequential work.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'math-graph-theory-bridges',
      title: 'Graph Theory: From Königsberg to Networks',
      domain: 'Mathematics',
      field: 'Discrete Mathematics',
      branch: 'Graph Theory',
      tier: 'intermediate',
      concepts: [
        'Vertices, edges, and the abstraction of connection',
        'Degree and the handshake lemma',
        'Euler paths and the Königsberg criterion',
        'Hamiltonian cycles and the traveling salesperson problem',
        'Trees, spanning structure, and shortest paths',
        'Graph coloring and the four-color theorem',
      ],
      words: 1090,
      readMins: 5,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'In 1736 the citizens of Königsberg asked whether a Sunday stroll could cross each of the city\u2019s seven bridges exactly once. Euler\u2019s answer — no, and here is exactly why — discarded streets, distances, and scenery, keeping only landmasses and the connections between them. That act of ruthless abstraction founded graph theory, today the mathematics of networks: the internet, power grids, social platforms, supply chains, and the wiring of brains and molecules.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Whenever a question is about connection rather than distance — who talks to whom, which roads join which cities, which tasks block which — a graph is the honest model, and three centuries of theorems apply on contact. Route planning, epidemic forecasting, chip design, and friend-of-friend recommendations are all graphs in costume.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'A graph G = (V, E) is a set of vertices together with a set of edges, each joining a pair of vertices. Drawings are conveniences, not definitions — the Königsberg graph is the same object however it is scribbled. Edges may be undirected, like bridges, or directed like one-way streets, and may carry weights such as distances, costs, or capacities. Graph theory studies what survives the abstraction: connectivity, cycles, reachability, and flow.',
        },
        {
          kind: 'para',
          text: 'The degree of a vertex counts the edges touching it, and the handshake lemma totals them: the degrees of all vertices sum to exactly twice the number of edges, since every edge is counted once at each endpoint. Two consequences cost nothing to derive — the number of odd-degree vertices is always even, and a graph\u2019s edge count is pinned down by its vertex count and average degree. These are structural facts that require no drawing at all.',
        },
        {
          kind: 'para',
          text: 'An Euler path traverses every edge exactly once; if it returns to its start it is an Euler circuit. Euler\u2019s criterion is complete: a connected graph has an Euler circuit exactly when every vertex has even degree — each arrival must be matched by a departure — and an open Euler path exactly when precisely two vertices have odd degree. Königsberg\u2019s four landmasses had degrees 5, 3, 3, and 3, so its famous walk was doomed from the outset.',
        },
        {
          kind: 'para',
          text: 'A Hamiltonian cycle instead visits every vertex exactly once — a sibling question with a savage difference: no clean criterion is known, and the problem is NP-complete. It is the traveling salesperson problem in disguise: find the cheapest tour through every city. Entire industries ride on heuristics and branch-and-bound methods that tame it in practice, while worst cases remain firmly out of reach.',
        },
        {
          kind: 'para',
          text: 'A tree is a connected graph with no cycles, and every connected graph contains a spanning tree: a subgraph reaching all vertices with no redundant edge. Trees on n vertices always have exactly n − 1 edges. They are the skeleton of efficient networks — Dijkstra\u2019s algorithm grows a tree of cheapest routes from a source, and minimum spanning trees wire cities or chips together at least total cost.',
        },
        {
          kind: 'para',
          text: 'A coloring assigns colors to vertices so that adjacent ones differ; the fewest colors that suffice is the chromatic number. The four-color theorem — proved in 1976 only with substantial computer assistance — says every planar graph needs at most four. Coloring is scheduling in disguise: tasks sharing a resource, or transmitters sharing a frequency, become graphs whose chromatic number sets the minimum number of slots.',
        },
        { kind: 'heading', text: 'The Mathematics' },
        {
          kind: 'formula',
          name: 'Handshake lemma',
          latex: '\\sum_{v \\in V} \\deg(v) = 2\\,|E|',
          meaning: 'Total degree counts every edge twice, once per endpoint — so odd-degree vertices come in pairs.',
        },
        {
          kind: 'formula',
          name: 'Euler\u2019s criterion',
          latex: '\\text{Euler circuit} \\iff \\deg(v) \\text{ even for every } v',
          meaning: 'A connected graph admits a closed walk using each edge exactly once precisely when no vertex has odd degree.',
        },
        {
          kind: 'formula',
          name: 'Tree edge count',
          latex: '\\text{connected and acyclic} \\implies |E| = |V| - 1',
          meaning: 'Every tree on n vertices has exactly n − 1 edges; one more edge forces a cycle.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: whether Königsberg\u2019s seven bridges admit a walk crossing every bridge exactly once, returning or not.',
            'Recall the governing idea: an Euler path exists only in a connected graph with exactly 0 or 2 odd-degree vertices, since mid-walk every arrival at a vertex must be matched by a departure.',
            'Apply: model the four landmasses as vertices and the seven bridges as edges; their degrees are 5, 3, 3, and 3, giving four odd-degree vertices — two more than the criterion allows.',
            'State the result: the walk is impossible; Euler\u2019s criterion fails, and covering every bridge exactly once would require at least two separate strolls.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Navigation apps compute fastest routes on road networks with Dijkstra-style shortest-path searches.',
            'Social platforms mine degrees, communities, and paths — the anatomy of influence and six-degrees effects.',
            'Chip design places millions of components and routes their connections under crossing constraints.',
            'Epidemiologists simulate contagion across contact graphs to find the links most worth cutting.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Confusing Euler with Hamilton is the classic slip: Euler uses every edge once (a clean degree criterion), Hamilton every vertex once (NP-complete in general). Do not trust a drawing — edges crossing in a sketch do not make a graph non-planar, and isomorphic graphs can look utterly different. Finally, the handshake lemma is necessary, not sufficient: an even count of odd-degree vertices does not by itself guarantee an Euler circuit.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Vertex', def: 'A node of a graph — one of the objects being connected.' },
            { term: 'Edge', def: 'A link joining two vertices; it may be directed or weighted.' },
            { term: 'Degree', def: 'The number of edge-ends incident to a vertex.' },
            { term: 'Euler path', def: 'A walk that uses every edge of the graph exactly once.' },
            { term: 'Hamiltonian cycle', def: 'A closed walk that visits every vertex exactly once.' },
            { term: 'Spanning tree', def: 'A cycle-free subgraph that connects every vertex — the minimum skeleton of a network.' },
            { term: 'Chromatic number', def: 'The fewest colors needed so that adjacent vertices always differ.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Königsberg\u2019s bridge walk was impossible because:',
              options: ['The graph was disconnected', 'Four vertices had odd degree', 'The bridges were too far apart', 'Seven is an odd number of edges'],
              answer: 1,
              explain: 'An Euler path needs exactly 0 or 2 odd-degree vertices; Königsberg had four, with degrees 5, 3, 3, and 3.',
            },
            {
              q: 'In any graph, the sum of all vertex degrees equals:',
              options: ['Twice the number of edges', 'The number of edges', 'Twice the number of vertices', 'The number of odd-degree vertices'],
              answer: 0,
              explain: 'Every edge contributes 1 to the degree of each of its two endpoints — the handshake lemma.',
            },
            {
              q: 'A connected acyclic graph on 10 vertices has how many edges?',
              options: ['10', '9', '11', 'It depends on the branching shape'],
              answer: 1,
              explain: 'Every tree on n vertices has exactly n − 1 edges, no matter how it branches.',
            },
            {
              q: 'The four-color theorem states that:',
              options: ['Complete graphs need only four colors', 'Every planar graph can be colored with at most four colors', 'All graphs have chromatic number four', 'Maps need five colors in the worst case'],
              answer: 1,
              explain: 'Planarity is essential — the theorem concerns graphs drawable without edge crossings and was the first major proof delivered with computer assistance.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Prerequisites: sets, induction, and proof by contradiction. Follow with shortest-path and minimum-spanning-tree algorithms, network flow and matching, spectral graph theory — where eigenvalues of adjacency matrices expose community structure — and computational complexity, where the traveling salesperson problem makes P versus NP visible.',
          tone: 'path',
        },
      ],
    },
  ],
}
