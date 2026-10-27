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
    // ------------------------------------------------------------------
    {
      id: 'math-integration-techniques',
      title: 'Integration Techniques and the Fundamental Theorem',
      domain: 'Mathematics',
      field: 'Calculus',
      branch: 'Integral Calculus',
      tier: 'core',
      concepts: [
        'Antiderivatives and the constant of integration',
        'Riemann sums and signed area',
        'The Fundamental Theorem of Calculus',
        'u-substitution',
        'Integration by parts',
        'Partial fractions',
      ],
      words: 1200,
      readMins: 6,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Differentiation answers how fast; integration answers how much altogether — distance from speed, charge from current, area from height. The two questions look unrelated until the Fundamental Theorem of Calculus reveals them as inverses, turning hard limit-sums into routine antiderivative bookkeeping. This topic builds the definite integral from Riemann sums, states the theorem that makes it computable, then trains the three techniques — substitution, parts, partial fractions — that unlock essentially every integral you will meet.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Areas, volumes, centers of mass, work, probabilities, and total cost from marginal cost are all integrals. Physical laws written as differential equations are read back through integration, and the technique you choose decides whether a model can be solved in closed form at all.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Strip the region under a curve into rectangles of width \u0394x, sum their areas, and let the strips narrow. The limit of those sums is the definite integral — and it must handle signs: area below the axis counts negative, so an integral is signed area, the net excess of height above zero. The notation stores the history: the integral sign from a to b of f(x) dx is the limit of a sum of f(x\u1d62)\u0394x, its elongated S a fossil of the word sum.',
        },
        {
          kind: 'para',
          text: 'An antiderivative of f is any F with F\u2032 = f. The function x\u00b2 is one for 2x, and so is x\u00b2 + 7, since constants vanish on differentiation. Every antiderivative differs by such a constant, so an indefinite integral denotes a whole family of functions, not one — forgetting + C loses infinitely many answers at a stroke. Reversing the derivative table line by line (raise the power, divide by the new power; sin integrates to \u2212cos) rebuilds most elementary antiderivatives.',
        },
        {
          kind: 'para',
          text: 'The Fundamental Theorem has two halves. Part 1: if f is continuous, the accumulation function that measures the area from a fixed point to x differentiates back to f — a bucket filling at rate f has its water level read directly. Part 2: if F is any antiderivative of f on an interval, then the integral of f from a to b equals F(b) \u2212 F(a). Part 2 is the workhorse: it converts area problems into bookkeeping with no limits of sums. The hinge of calculus is exactly this — slope and area are inverse operations.',
        },
        {
          kind: 'para',
          text: 'Substitution reverses the chain rule. When an integral contains a function and its derivative side by side — the integral of 2x cos(x\u00b2) dx, say — name the inner function u = x\u00b2, so du = 2x dx replaces both offenders at once, leaving the integral of cos u du. For definite integrals, convert the limits too (x from 1 to 2 becomes u from 1 to 4) and never return to x. The pattern to hunt is always the same: f(g(x)) multiplied by g\u2032(x).',
        },
        {
          kind: 'para',
          text: 'Parts reverses the product rule: the integral of u dv becomes uv minus the integral of v du. Success is a trade — you agree to integrate a different, hopefully easier, integral. Choose u by LIATE priority (Logarithmic, Inverse trigonometric, Algebraic, Trigonometric, Exponential): pick u = ln x and the logarithm differentiates away; pick u = x against an exponential and the polynomial erodes division by division. Repeated application, organized as a table, dispatches x\u00b2e\u02e3 and x\u00b3 sin x systematically.',
        },
        {
          kind: 'para',
          text: 'Rational functions integrate after decomposition: 1/(x\u00b2\u22121) splits as one half over (x\u22121) minus one half over (x+1), each piece a logarithm. The general recipe matches the denominator\u2019s factors — distinct linear, repeated linear, irreducible quadratic — with unknown coefficients solved by substituting convenient x values. Facing any integral, work a ladder: simplify algebraically, try substitution, try parts, try partial fractions — and accept that some honest-looking integrals, such as the integral of e^(\u2212x\u00b2), have no elementary antiderivative at all, which is precisely why numerical methods and special functions exist.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Fundamental Theorem of Calculus',
          latex: '\\int_a^b f(x)\\,dx = F(b) - F(a)',
          meaning: 'For any antiderivative F of f: areas from antiderivatives, and limits of sums retired.',
        },
        {
          kind: 'formula',
          name: 'u-substitution',
          latex: '\\int f(g(x))\\,g^{\\prime}(x)\\,dx = \\int f(u)\\,du',
          meaning: 'Reverse chain rule: set u = g(x) so that du replaces g\u2032(x) dx, and rewrite the integrand entirely in u.',
        },
        {
          kind: 'formula',
          name: 'Integration by parts',
          latex: '\\int u\\,dv = uv - \\int v\\,du',
          meaning: 'Product rule reversed; choose u by LIATE so that differentiating u simplifies the remaining integral.',
        },
        {
          kind: 'formula',
          name: 'Partial fractions',
          latex: '\\frac{1}{x^2-1} = \\frac{1/2}{x-1} - \\frac{1/2}{x+1}',
          meaning: 'Decompose a rational function into simple fractions whose integrals are logarithms; match the denominator\u2019s factors.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the exact value of the definite integral of x e\u02e3 from 0 to 1.',
            'Choose a technique: the integrand is an algebraic factor times an exponential, so integrate by parts with u = x and dv = e\u02e3 dx.',
            'Set up: du = dx and v = e\u02e3, so the integral equals [x e\u02e3] from 0 to 1 minus the integral of e\u02e3 from 0 to 1.',
            'Evaluate: the boundary term is e \u2212 0 = e, while the remaining integral is e \u2212 1, so the whole is e \u2212 (e \u2212 1) = 1.',
            'Verify by antidifferentiating: F(x) = e\u02e3(x \u2212 1) has derivative x e\u02e3, and F(1) \u2212 F(0) = 0 \u2212 (\u22121) = 1 — the area is exactly one.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Three classics: dropping the constant of integration (each antiderivative is a family); forgetting to transform the limits under substitution and then plugging x-values into a u-integral; and choosing u and v backwards in parts so the new integral is harder — LIATE exists to prevent exactly that. Beware hidden sign errors too: the integral of sin x is \u2212cos x + C, and that minus sign has vanished from more solutions than any other symbol in calculus.',
          tone: 'warn',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Antiderivative', def: 'A function whose derivative is the integrand; unique up to an additive constant.' },
            { term: 'Definite integral', def: 'The limit of Riemann sums — signed area between graph and axis over an interval.' },
            { term: 'Riemann sum', def: 'A finite rectangle approximation whose limit defines the integral.' },
            { term: 'Integrand', def: 'The function being integrated.' },
            { term: 'u-substitution', def: 'Reverse chain rule: rename the inner function to expose a simpler integral.' },
            { term: 'Integration by parts', def: 'Reverse product rule: the integral of u dv equals uv minus the integral of v du.' },
            { term: 'Partial fraction decomposition', def: 'Splitting a rational function into simpler fractions matching the denominator\u2019s factors.' },
            { term: 'Constant of integration', def: 'The + C reminding you that antiderivatives form a vertical family.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The integral of 1/x dx equals:',
              options: ['ln x + C', '1/x\u00b2 + C', '\u22121/x\u00b2 + C', 'x ln x + C'],
              answer: 0,
              explain: 'The derivative of ln x is 1/x; strictly, ln|x| + C away from the positive axis.',
            },
            {
              q: 'To evaluate the integral of 2x cos(x\u00b2) dx, the right move is:',
              options: ['Parts with u = 2x', 'Substitution u = x\u00b2', 'Partial fractions', 'Direct antidifferentiation of cos'],
              answer: 1,
              explain: 'The integrand has the form f(g(x)) times g\u2032(x): u = x\u00b2 and du = 2x dx absorb everything.',
            },
            {
              q: 'The integral of x e\u02e3 from 0 to 1 equals:',
              options: ['e \u2212 1', '1', 'e', '0'],
              answer: 1,
              explain: 'Parts gives e \u2212 (e \u2212 1) = 1.',
            },
            {
              q: 'For the integral of x ln x dx, LIATE says:',
              options: ['u = x, dv = ln x dx', 'u = ln x, dv = x dx', 'Both choices work equally well', 'Parts does not apply'],
              answer: 1,
              explain: 'Logarithmic outranks algebraic in the LIATE order; differentiating ln x removes it from the integrand.',
            },
            {
              q: 'The Fundamental Theorem lets you replace a limit of Riemann sums with:',
              options: ['A derivative', 'Any antiderivative evaluated at the endpoints', 'A product of endpoints', 'A Riemann sum with fewer rectangles'],
              answer: 1,
              explain: 'F(b) \u2212 F(a) computes the area exactly, whatever antiderivative F you chose.',
            },
          ],
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Definite integral = limit of rectangle sums = signed area.',
            'FTC: the integral of f from a to b is F(b) \u2212 F(a); slope and area are inverse operations.',
            'Always + C on indefinite integrals.',
            'Substitution hunts f(g(x))\u00b7g\u2032(x); parts trades the integral of u dv for uv minus the integral of v du.',
            'Partial fractions turn rational functions into logarithms.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'math-probability-distributions',
      title: 'Probability Distributions: Binomial, Poisson, and Normal',
      domain: 'Mathematics',
      field: 'Probability & Statistics',
      branch: 'Distribution Theory',
      tier: 'intermediate',
      concepts: [
        'Random variables: discrete and continuous',
        'PMF, PDF, and CDF',
        'Expectation and variance',
        'The binomial distribution',
        'The Poisson distribution and rare events',
        'The normal distribution and z-scores',
        'The Central Limit Theorem',
      ],
      words: 1230,
      readMins: 6,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'A random variable is a number that has not been decided yet, and its distribution is the complete recipe for how that number will fall — which values, with what probabilities. Three distributions do most of the practical work: the binomial counts successes in repeated trials, the Poisson counts rare events in time or space, and the normal describes the bell-shaped pile-up that sums and averages drift toward. This topic builds each from its assumptions and shows when one impersonates another.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Quality control on assembly lines, radiation counts, website traffic, insurance reserves, polling margins, and measurement error all model as one of these three. Choosing the wrong distribution — treating rare counts as normal, or continuous measurements as counts — quietly poisons every downstream conclusion.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Formally, a random variable maps each outcome of a random process to a number: two dice to their sum, a sample of voters to its proportion. Discrete random variables take separated values (counts); continuous ones fill intervals (measurements). Their distributions are described differently: a probability mass function lists the probability of each exact discrete value, while a continuous variable has a probability density — exact values have probability zero, and probability is area under the curve between two values. The cumulative distribution function, the probability of landing at or below x, serves both kinds.',
        },
        {
          kind: 'para',
          text: 'The expected value is the long-run average — for a discrete variable, the sum of value times probability — and it is linear: averages add even when the variables are dependent, and E[aX + b] = aE[X] + b. Variance measures spread in squared units as the expected squared deviation from the mean; the standard deviation \u03c3 returns to the variable\u2019s own units. Scaling is asymmetric: adding a constant shifts the center but not the spread, while multiplying by a scales the mean and \u03c3 both (and the variance by a\u00b2).',
        },
        {
          kind: 'para',
          text: 'Run n independent trials with the same success probability p, count the successes, and you have a Binomial(n, p) variable. Its mass function multiplies three ingredients: choose which k of the n trials succeed, then weight by p raised to the k and (1\u2212p) raised to the rest. The mean is np and the variance np(1\u2212p). Ten free throws at 70 percent: expect 7 makes, with \u03c3 = \u221a(10 \u00d7 0.7 \u00d7 0.3) \u2248 1.4 — so 5 or 9 makes are both ordinary outcomes.',
        },
        {
          kind: 'para',
          text: 'Count rare events in a fixed window — mutations per genome, buses per hour, typos per page — with average rate \u03bb, and the count follows a Poisson: the probability of exactly k is e\u207b\u1d5c\u03bb\u1d4f over k!. Its mean and variance are both \u03bb, a signature worth memorizing. The Poisson is the binomial\u2019s limit for many trials with tiny success probability, \u03bb = np held fixed. A 0.1 percent defect rate over 2,000 items is Poisson(2): expect two defects, and the probability of none is e\u207b\u00b2 \u2248 13.5 percent.',
        },
        {
          kind: 'para',
          text: 'The normal distribution is the bell: symmetric, bell-shaped, and fully specified by mean \u03bc and standard deviation \u03c3. The 68\u201395\u201399.7 rule fixes its landmarks — 68 percent of values within one \u03c3, 95 within two, 99.7 within three — and standardization, z = (x \u2212 \u03bc)/\u03c3, converts any normal into the standard normal, which is why one small table serves every \u03bc and \u03c3 in existence.',
        },
        {
          kind: 'para',
          text: 'Why is the normal everywhere? The Central Limit Theorem: sums and averages of many independent random terms are approximately normal almost regardless of the ingredients\u2019 distributions, the approximation improving as the count grows (n \u2265 30 is the usual rule of thumb). Measurement errors are normal because they are sums of tiny disturbances; sample means are approximately normal because averaging is summing. The theorem underwrites confidence intervals, significance tests, and the error bars on every scientific plot.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Binomial mass function',
          latex: 'P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}',
          meaning: 'Probability of exactly k successes in n independent trials with success probability p; mean np, variance np(1\u2212p).',
        },
        {
          kind: 'formula',
          name: 'Poisson mass function',
          latex: 'P(X=k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}',
          meaning: 'Probability of k events in a window with mean rate \u03bb; mean and variance both equal \u03bb.',
        },
        {
          kind: 'formula',
          name: 'Normal density',
          latex: 'f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-(x-\\mu)^2/(2\\sigma^2)}',
          meaning: 'The bell curve, fully specified by mean \u03bc and standard deviation \u03c3; 68\u201395\u201399.7 within 1, 2, 3 \u03c3.',
        },
        {
          kind: 'formula',
          name: 'Standardization',
          latex: 'z = \\frac{x - \\mu}{\\sigma}',
          meaning: 'Convert any normal value to standard-normal units — the entry key to every z-table.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the probability of exactly 4 successes in 10 independent trials with success probability 0.3, plus the distribution\u2019s mean and standard deviation.',
            'Model the situation: a fixed number of independent trials with constant p — Binomial(n = 10, p = 0.3).',
            'Compute the pieces: the binomial coefficient C(10,4) = 210; p\u2074 = 0.0081; (1\u2212p)\u2076 = 0.7\u2076 \u2248 0.1176.',
            'Multiply: P(X = 4) = 210 \u00d7 0.0081 \u00d7 0.1176 \u2248 0.200.',
            'Locate the answer: the mean is 3 and \u03c3 = \u221a(10 \u00d7 0.3 \u00d7 0.7) = \u221a2.1 \u2248 1.45, so exactly 4 successes sits comfortably within one standard deviation of the mean — a perfectly ordinary outcome at about 20 percent.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The binomial needs independent, identical trials — sampling without replacement from a small population violates it (reach for the hypergeometric instead). The Poisson requires rare, independent events; bursty traffic is not Poisson. The normal approximates sums, not raw counts of rare events: heights are normal, accidents per year are skewed. And for continuous variables the probability of any exact value is zero — probability is area, never the curve\u2019s height.',
          tone: 'warn',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Random variable', def: 'A numerical measurement of a random outcome.' },
            { term: 'Probability mass function', def: 'The probability of each exact value of a discrete random variable.' },
            { term: 'Probability density function', def: 'A curve whose area over an interval gives probability for a continuous variable.' },
            { term: 'Cumulative distribution function', def: 'The probability of landing at or below a given value; works for both kinds.' },
            { term: 'Expected value', def: 'The probability-weighted long-run average of a random variable.' },
            { term: 'Standard deviation', def: 'The square root of variance; spread in the variable\u2019s own units.' },
            { term: 'Central Limit Theorem', def: 'Sums and averages of many independent terms are approximately normal, whatever the ingredients\u2019 shape.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A binomial variable has mean 6 and variance 2.4. Then:',
              options: ['n = 10, p = 0.6', 'n = 15, p = 0.4', 'n = 6, p = 1', 'n = 12, p = 0.5'],
              answer: 0,
              explain: 'np = 6 and np(1\u2212p) = 2.4 give 1\u2212p = 0.4, hence p = 0.6 and n = 10.',
            },
            {
              q: 'For a Poisson variable with \u03bb = 4, the variance is:',
              options: ['2', '4', '16', 'It depends on the window'],
              answer: 1,
              explain: 'Poisson mean and variance both equal \u03bb.',
            },
            {
              q: 'In the normal distribution, about 95 percent of values lie within:',
              options: ['One \u03c3', 'Two \u03c3', 'Three \u03c3', 'Half a \u03c3'],
              answer: 1,
              explain: 'The 68\u201395\u201399.7 rule: two standard deviations bracket roughly 95 percent.',
            },
            {
              q: 'The Poisson approximates the binomial well when:',
              options: ['n is large and p is small', 'n is small and p is large', 'p equals 0.5 exactly', 'The trials are dependent'],
              answer: 0,
              explain: 'Many rare chances converge to Poisson with \u03bb = np — the law of rare events.',
            },
            {
              q: 'The Central Limit Theorem says that for large n, the sample mean is approximately:',
              options: ['Distributed like the population', 'Normal, regardless of the population\u2019s shape', 'Binomial', 'Uniform'],
              answer: 1,
              explain: 'Averaging many independent terms smooths toward the bell — the origin of the normal\u2019s ubiquity.',
            },
          ],
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Discrete variables have mass functions; continuous ones have densities — probability as area.',
            'Expectation is linear; variance scales with the square of the multiplier.',
            'Binomial: independent trials, mean np, variance np(1\u2212p).',
            'Poisson: rare-event counts, mean = variance = \u03bb, the binomial\u2019s large-n small-p limit.',
            'Normal: z = (x \u2212 \u03bc)/\u03c3 standardizes; the Central Limit Theorem explains why bells are everywhere.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'math-series-convergence-tests',
      title: 'Sequences, Series, and Convergence Tests',
      domain: 'Mathematics',
      field: 'Calculus',
      branch: 'Infinite Series',
      tier: 'advanced',
      concepts: [
        'Limits of sequences',
        'Partial sums and series',
        'Geometric series',
        'The divergence test',
        'Ratio and root tests',
        'The integral test and p-series',
        'Alternating series and conditional convergence',
        'Taylor series',
      ],
      words: 1250,
      readMins: 6,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Add infinitely many positive numbers and surely you get infinity — unless you do not. Half plus a quarter plus an eighth heads toward 2; the harmonic series one plus a half plus a third creeps past every bound. Analysis is the discipline of telling these apart. This topic assembles the standard test kit — divergence, ratio, root, integral, comparison, alternating — and ends where the kit pays its biggest dividends: Taylor series, where functions themselves become sums.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Every time a calculator computes sin or an exponential, it is summing a truncated series. Radii of convergence decide where power-series solutions of differential equations are valid, and the same tests certify whether Fourier representations, financial perpetuities, and iterative algorithms converge at all.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'A series is a sequence of partial sums: the running totals of the terms. To say the series converges is to say those totals approach a finite limit — the number the additions are trying to reach. The geometric series with ratio one half has partial sums 1, 1.5, 1.75, 1.875, crowding onto 2; the harmonic totals 1, 1.5, 1.833, 2.083 crawl upward forever. Nicole Oresme proved the divergence in the fourteenth century by grouping terms into blocks that each sum to more than one half — a half, then a third plus a quarter, then four terms past a fifth — so the total exceeds any bound you name.',
        },
        {
          kind: 'para',
          text: 'The geometric series is the one series with a complete theory: a + ar + ar\u00b2 + \u2026 converges exactly when |r| < 1, and then to a/(1\u2212r). The proof is one subtraction — multiply the sum by r, subtract, and watch the middle cancel. Repeating decimals are geometric series in disguise: 0.999\u2026 is nine tenths plus nine hundredths plus nine thousandths, summing to exactly 1. Discounting, annuities, and the fiscal multiplier are the same series wearing suits.',
        },
        {
          kind: 'para',
          text: 'Before any fancy test, check the terms: if they do not approach zero, the series cannot converge, because the partial sums keep making strides of non-vanishing size. This necessary condition is far from sufficient — harmonic terms shrink to zero yet the series diverges, which is exactly why subtler tests exist. Term test first, always; it costs one limit and settles the hopeless cases instantly.',
        },
        {
          kind: 'para',
          text: 'For positive terms, the workhorses are three. The ratio test computes the limit L of each term divided by its predecessor: below 1 the series converges absolutely, above 1 it diverges, and exactly 1 is inconclusive — the default choice when factorials or exponentials appear. The integral test compares the sum of a decreasing function with the corresponding improper integral and immediately yields the p-series verdict: the sum of 1/n\u1d56 converges if and only if p > 1. Comparison and limit-comparison tests then measure unknowns against these benchmarks — smaller than a convergent series, or larger than a divergent one, inherits its fate.',
        },
        {
          kind: 'para',
          text: 'Put (\u22121)\u207f in front and even the harmonic series behaves: the alternating harmonic series converges by the Leibniz test, which asks only that terms decrease steadily to zero. Such a series converges conditionally, since the absolute values diverge; series that converge after taking absolute values converge absolutely and may be rearranged at will. Conditionally convergent series cannot: Riemann proved that a rearrangement exists for any target you like — the sum depends on the order of addition, a genuinely eerie fact.',
        },
        {
          kind: 'para',
          text: 'A function smooth enough at a point unfolds into a power series: the sum of its successive derivatives at a, each divided by the matching factorial, times powers of (x \u2212 a). The ratio test then supplies the radius of convergence: the exponential series converges for every x; the series for 1/(1\u2212x) only for |x| < 1. Inside the radius, a power series may be differentiated and integrated term by term, which turns hard integrals and differential equations into arithmetic on coefficients — how computers actually evaluate functions.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Geometric series',
          latex: '\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}, \\quad |r| < 1',
          meaning: 'The one complete theory: convergence exactly for ratio below 1 in size, with sum first term over one-minus-ratio.',
        },
        {
          kind: 'formula',
          name: 'Ratio test',
          latex: 'L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|',
          meaning: 'L < 1: absolute convergence; L > 1: divergence; L = 1: no verdict — try another test.',
        },
        {
          kind: 'formula',
          name: 'p-series test',
          latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^p} \\;\\text{converges} \\iff p > 1',
          meaning: 'The great benchmark family: p = 2 converges, the harmonic p = 1 diverges.',
        },
        {
          kind: 'formula',
          name: 'Taylor series',
          latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}\\,(x-a)^n',
          meaning: 'Unfolding a smooth function into powers of (x \u2212 a); the ratio test sets its radius of convergence.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: whether the series one half plus two quarters plus three eighths, and so on — the sum of n/2\u207f — converges, and to what.',
            'Run the ratio test: each term divided by its predecessor is (n+1)/2\u207f\u207a\u00b9 \u00d7 2\u207f/n = (n+1)/(2n), which tends to one half as n grows.',
            'Conclude: L = 0.5 < 1, so the series converges absolutely.',
            'Find the sum by telescoping: with S the total, compute S \u2212 S/2 by shifting indices — the difference collapses term by term, leaving the geometric sum of 1/2\u207f, which is 1; hence S/2 = 1 and S = 2.',
            'State the result: the series converges to exactly 2 — its partial sums pass 1.78 by the fifth term and close in ever more slowly, the hallmark of a convergent tail.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Ratio-test blindness is the commonest disease: L = 1 means no information, not divergence — the test is silent on the harmonic series and every p-series. Never announce convergence merely because terms shrink; shrinking to zero is required but proves nothing. And respect the alternating-series bound: the error after truncating is at most the first omitted term only when the terms decrease in size.',
          tone: 'warn',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Partial sum', def: 'The running total of the first n terms; the sequence whose limit defines the sum.' },
            { term: 'Geometric series', def: 'Constant-ratio series; converges to a/(1\u2212r) exactly when |r| < 1.' },
            { term: 'p-series', def: 'The sum of 1/n\u1d56, converging exactly for p > 1.' },
            { term: 'Conditional convergence', def: 'Convergence without absolute convergence; rearrangements can then change the sum.' },
            { term: 'Radius of convergence', def: 'The distance from the centre within which a power series converges.' },
            { term: 'Ratio test', def: 'Compares successive terms; decisive for factorials and exponentials, silent at L = 1.' },
            { term: 'Taylor series', def: 'The power-series unfolding of a smooth function around a point.' },
            { term: 'Integral test', def: 'Compares a positive decreasing series with an improper integral of the same shape.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The geometric series summing (1/3)\u207f from n = 0 equals:',
              options: ['3/2', '1/2', '3', 'It diverges'],
              answer: 0,
              explain: 'a = 1 and r = 1/3, so the sum is 1/(1 \u2212 1/3) = 3/2.',
            },
            {
              q: 'The harmonic series, the sum of 1/n:',
              options: ['Converges to e', 'Converges to 2', 'Diverges even though its terms approach zero', 'Converges only over even n'],
              answer: 2,
              explain: 'Oresme\u2019s grouping shows the partial sums pass every bound despite the shrinking terms.',
            },
            {
              q: 'The ratio test gives L = 1. You may conclude:',
              options: ['Convergence', 'Divergence', 'Nothing — the test is inconclusive', 'Absolute convergence'],
              answer: 2,
              explain: 'The harmonic and p-series all give L = 1 yet have different fates; other tests must decide.',
            },
            {
              q: 'The alternating harmonic series is:',
              options: ['Divergent', 'Absolutely convergent', 'Conditionally convergent', 'Geometric'],
              answer: 2,
              explain: 'It converges by the Leibniz test, but its absolute values are the divergent harmonic series.',
            },
            {
              q: 'The sum of 1/n\u1d56 converges for:',
              options: ['p \u2264 1', 'p > 1', 'Every p', 'p = 1 only'],
              answer: 1,
              explain: 'The integral test verdict: the boundary case p = 1 diverges, p = 2 and above converge.',
            },
          ],
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'A series is a sequence of partial sums; convergence means those totals settle.',
            'Geometric: a/(1\u2212r) for |r| < 1 — the one complete theory.',
            'Terms must vanish; that is necessary, never sufficient.',
            'Ratio for factorials and exponentials; integral test and p-series for powers; comparison against both.',
            'Alternating series converge by Leibniz — conditionally, order-sensitive; Taylor series converge inside a radius.',
          ],
        },
      ],
    },
  ],
}
