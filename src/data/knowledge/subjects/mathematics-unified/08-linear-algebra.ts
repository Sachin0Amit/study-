/**
 * Knowledge Universe — Mathematics — Chapter 08: Linear Algebra
 * 1 lesson · ~1,084 words
 * field: Linear Algebra
 * legacy sources: mathematics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Linear Algebra]
 *
 * Lessons (snapshot at reorganization):
 *   08.1 math-eigenvalues — Eigenvalues and What They Mean
 */
import type { KnowledgeTopic } from '../../types'

export const mathematicsUnifiedCh08: KnowledgeTopic[] = [
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
    words: 1084,
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
]
