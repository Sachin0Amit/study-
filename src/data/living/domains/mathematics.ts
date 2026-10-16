/**
 * Living Library — domain file: Mathematics
 *
 * Calculus, probability, and linear algebra — complete lessons.
 * Future expansion passes append new topics below.
 */

import type { LivingDomainFile } from '../types'

export const mathematics: LivingDomainFile = {
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
  ],
}
