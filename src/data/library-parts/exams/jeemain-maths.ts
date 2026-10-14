// ============================================================================
// JEE (Main) 2026 — Mathematics syllabus metadata (bookId 'jeemain-maths-
// 2026'). Source: JEE (Main) 2026 official NTA syllabus (transcribed in
// research/jee-syllabus.md), Units 1–14. Each official NTA unit = one
// chapter; each unit's official subtopic bullets are grouped into 3–5
// sections so every bullet appears in exactly one section description.
// Lab mapping: sets → venn-explorer, complex numbers/trigonometry →
// phasor-lab, P&C/binomial → counting-lab, sequences → recurrence-explorer,
// calculus → derivative-lab/riemann-lab/curve-lab, 3D → orbit-lab, vectors
// → efield-lab, probability → probability-lab, matrices → js-playground.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../../library'

export const JEEMAIN_MATH_CHAPTERS: ChapterMeta[] = [
  { id: 'math-m1', bookId: 'math-master', number: 31, title: 'Sets, Relations and Functions', shortTitle: 'Sets & Functions', description: 'Set operations and their algebra, power sets, relations including equivalence relations, and function types with composition. Straightforward classification questions from this unit open many engineering assessment maths sections.', icon: 'circles', pages: 'Unit 1', interactiveKey: 'venn-explorer' },
  { id: 'math-m2', bookId: 'math-master', number: 32, title: 'Complex Numbers and Quadratic Equations', shortTitle: 'Complex & Quadratics', description: 'Complex numbers as ordered pairs, the Argand plane, algebra, modulus and argument, and quadratic equations with root–coefficient relations. Argand-geometry and nature-of-roots questions are engineering assessment regulars.', icon: 'infinity', pages: 'Unit 2', interactiveKey: 'phasor-lab' },
  { id: 'math-m3', bookId: 'math-master', number: 33, title: 'Matrices and Determinants', shortTitle: 'Matrices & Determinants', description: 'Matrix algebra and types, determinants of order two and three, adjoint and inverse, consistency tests and solving linear systems. Determinant-expansion and system-solving questions appear in nearly every engineering assessment paper.', icon: 'layout-grid', pages: 'Unit 3', interactiveKey: 'js-playground' },
  { id: 'math-m4', bookId: 'math-master', number: 34, title: 'Permutations and Combinations', shortTitle: 'P&C', description: 'The fundamental principle of counting, the meaning of P(n, r) and C(n, r) and simple applications. The counting toolkit behind many probability questions in engineering assessment.', icon: 'dices', pages: 'Unit 4', interactiveKey: 'counting-lab' },
  { id: 'math-m5', bookId: 'math-master', number: 35, title: 'Binomial Theorem and its Simple Applications', shortTitle: 'Binomial Theorem', description: 'The binomial theorem for a positive integral index with the general and middle terms and simple applications. Term-finding and coefficient questions are quick, reliable engineering assessment marks.', icon: 'layers', pages: 'Unit 5', interactiveKey: 'counting-lab' },
  { id: 'math-m6', bookId: 'math-master', number: 36, title: 'Sequence and Series', shortTitle: 'Sequences & Series', description: 'Arithmetic and geometric progressions, insertion of arithmetic and geometric means and the relation between A.M. and G.M. AP–GP numericals are among the most frequent engineering assessment maths questions.', icon: 'list-ordered', pages: 'Unit 6', interactiveKey: 'recurrence-explorer' },
  { id: 'math-m7', bookId: 'math-master', number: 37, title: 'Limit, Continuity and Differentiability', shortTitle: 'Limits & Continuity', description: 'Real functions and their graphs, limits, continuity and differentiability, the full differentiation toolkit up to second order, and applications to rates of change, monotonicity and extrema. The gateway to all engineering assessment calculus problems.', icon: 'activity', pages: 'Unit 7', interactiveKey: 'derivative-lab' },
  { id: 'math-m8', bookId: 'math-master', number: 38, title: 'Integral Calculus', shortTitle: 'Integral Calculus', description: 'Indefinite integration by substitution, parts and partial fractions, the standard forms, the fundamental theorem, properties of definite integrals and area calculation. The highest-weightage single unit in engineering assessment mathematics.', icon: 'sigma', pages: 'Unit 8', interactiveKey: 'riemann-lab' },
  { id: 'math-m9', bookId: 'math-master', number: 39, title: 'Differential Equations', shortTitle: 'Differential Equations', description: 'Order and degree, solution by separation of variables, homogeneous equations and linear first-order equations of the form dy/dx + p(x)y = q(x). Variable-separable and linear-equation questions are engineering assessment certainties.', icon: 'spline', pages: 'Unit 9', interactiveKey: 'curve-lab' },
  { id: 'math-m10', bookId: 'math-master', number: 40, title: 'Co-ordinate Geometry', shortTitle: 'Coordinate Geometry', description: 'The straight line in all its forms, triangle centres, circles and the conic sections in standard form. Formula-intensive and heavily represented in every engineering assessment paper.', icon: 'vector-square', pages: 'Unit 10', interactiveKey: 'curve-lab' },
  { id: 'math-m11', bookId: 'math-master', number: 41, title: 'Three Dimensional Geometry', shortTitle: '3D Geometry', description: 'Coordinates in space, distance and section formulae, direction cosines and ratios, lines, skew lines and the shortest distance. Short, method-driven questions make this a dependable engineering assessment unit.', icon: 'box', pages: 'Unit 11', interactiveKey: 'orbit-lab' },
  { id: 'math-m12', bookId: 'math-master', number: 42, title: 'Vector Algebra', shortTitle: 'Vector Algebra', description: 'Vectors and scalars, addition of vectors, components in two and three dimensions, and scalar and vector products. Dot- and cross-product computations feed many engineering assessment 3D questions.', icon: 'move', pages: 'Unit 12', interactiveKey: 'efield-lab' },
  { id: 'math-m13', bookId: 'math-master', number: 43, title: 'Statistics and Probability', shortTitle: 'Stats & Probability', description: 'Central tendency and dispersion for grouped and ungrouped data, the addition and multiplication theorems, Bayes\' theorem and random-variable distributions. Probability questions rooted in counting appear in nearly every paper.', icon: 'chart-line', pages: 'Unit 13', interactiveKey: 'probability-lab' },
  { id: 'math-m14', bookId: 'math-master', number: 44, title: 'Trigonometry', shortTitle: 'Trigonometry', description: 'Trigonometrical identities and functions and inverse trigonometrical functions with their properties. Inverse-trig principal values and identity simplifications are recurring engineering assessment questions.', icon: 'triangle', pages: 'Unit 14', interactiveKey: 'phasor-lab' },
]

export const JEEMAIN_MATH_SECTIONS: SectionMeta[] = [
  // ---- Unit 1: Sets, Relations and Functions ----
  { id: 'math-m1-s1', chapterId: 'math-m1', number: 31.1, title: 'Sets and Their Algebra', description: 'Sets and their representation, union, intersection and complement of sets and their algebraic properties, and the power set.' },
  { id: 'math-m1-s2', chapterId: 'math-m1', number: 31.2, title: 'Relations', description: 'Relations, types of relations and equivalence relations.' },
  { id: 'math-m1-s3', chapterId: 'math-m1', number: 31.3, title: 'Functions', description: 'One-one, into and onto functions and the composition of functions.' },
  // ---- Unit 2: Complex Numbers and Quadratic Equations ----
  { id: 'math-m2-s1', chapterId: 'math-m2', number: 32.1, title: 'Complex Numbers and the Argand Plane', description: 'Complex numbers as ordered pairs of reals, their representation in the form a + ib and in a plane (Argand diagram), and the algebra of complex numbers.' },
  { id: 'math-m2-s2', chapterId: 'math-m2', number: 32.2, title: 'Modulus and Argument', description: 'The modulus and argument (or amplitude) of a complex number and their geometric interpretation.' },
  { id: 'math-m2-s3', chapterId: 'math-m2', number: 32.3, title: 'Quadratic Equations and Their Solutions', description: 'Quadratic equations in real and complex number systems and their solutions.' },
  { id: 'math-m2-s4', chapterId: 'math-m2', number: 32.4, title: 'Roots and Coefficients', description: 'Relations between roots and coefficients, the nature of roots and the formation of quadratic equations with given roots.' },
  // ---- Unit 3: Matrices and Determinants ----
  { id: 'math-m3-s1', chapterId: 'math-m3', number: 33.1, title: 'Matrices and Their Algebra', description: 'Matrices, the algebra of matrices and the types of matrices.' },
  { id: 'math-m3-s2', chapterId: 'math-m3', number: 33.2, title: 'Determinants', description: 'Determinants and matrices of order two and three, and the evaluation of determinants.' },
  { id: 'math-m3-s3', chapterId: 'math-m3', number: 33.3, title: 'Area of Triangles Using Determinants', description: 'The area of triangles using determinants, with collinearity as the zero-area case.' },
  { id: 'math-m3-s4', chapterId: 'math-m3', number: 33.4, title: 'Adjoint, Inverse and Linear Systems', description: 'The adjoint and inverse of a square matrix, the test of consistency and the solution of simultaneous linear equations in two or three variables using matrices.' },
  // ---- Unit 4: Permutations and Combinations ----
  { id: 'math-m4-s1', chapterId: 'math-m4', number: 34.1, title: 'The Fundamental Principle of Counting', description: 'The fundamental principle of counting as the engine of all arrangement and selection problems.' },
  { id: 'math-m4-s2', chapterId: 'math-m4', number: 34.2, title: 'Permutations', description: 'Permutations and the meaning of P(n, r), with simple applications to arrangements.' },
  { id: 'math-m4-s3', chapterId: 'math-m4', number: 34.3, title: 'Combinations', description: 'Combinations and the meaning of C(n, r), with simple applications to selections.' },
  // ---- Unit 5: Binomial Theorem and its Simple Applications ----
  { id: 'math-m5-s1', chapterId: 'math-m5', number: 35.1, title: 'The Binomial Theorem for a Positive Integral Index', description: 'The binomial theorem for a positive integral index and its expansion.' },
  { id: 'math-m5-s2', chapterId: 'math-m5', number: 35.2, title: 'General Term and Middle Term', description: 'The general term and the middle term of a binomial expansion.' },
  { id: 'math-m5-s3', chapterId: 'math-m5', number: 35.3, title: 'Simple Applications', description: 'Simple applications of the binomial theorem: specific-term and coefficient problems.' },
  // ---- Unit 6: Sequence and Series ----
  { id: 'math-m6-s1', chapterId: 'math-m6', number: 36.1, title: 'Arithmetic and Geometric Progressions', description: 'Arithmetic and geometric progressions, their terms and sums.' },
  { id: 'math-m6-s2', chapterId: 'math-m6', number: 36.2, title: 'Insertion of Means', description: 'Insertion of arithmetic means and geometric means between two given numbers.' },
  { id: 'math-m6-s3', chapterId: 'math-m6', number: 36.3, title: 'Relation Between A.M. and G.M.', description: 'The relation between A.M. and G.M. and its use in series and inequality problems.' },
  // ---- Unit 7: Limit, Continuity and Differentiability ----
  { id: 'math-m7-s1', chapterId: 'math-m7', number: 37.1, title: 'Real Functions and Their Graphs', description: 'Real-valued functions and the algebra of functions, polynomial, rational, trigonometric, logarithmic and exponential functions, inverse functions and graphs of simple functions.' },
  { id: 'math-m7-s2', chapterId: 'math-m7', number: 37.2, title: 'Limits, Continuity and Differentiability', description: 'Limits, continuity and differentiability and how the three notions connect.' },
  { id: 'math-m7-s3', chapterId: 'math-m7', number: 37.3, title: 'Techniques of Differentiation', description: 'Differentiation of the sum, difference, product and quotient of two functions; differentiation of trigonometric, inverse trigonometric, logarithmic, exponential, composite and implicit functions; and derivatives of order up to two.' },
  { id: 'math-m7-s4', chapterId: 'math-m7', number: 37.4, title: 'Applications of Derivatives', description: 'Rate of change of quantities, monotonic — increasing and decreasing — functions and maxima and minima of functions of one variable.' },
  // ---- Unit 8: Integral Calculus ----
  { id: 'math-m8-s1', chapterId: 'math-m8', number: 38.1, title: 'Integration as an Anti-Derivative', description: 'The integral as an anti-derivative and the fundamental integrals involving algebraic, trigonometric, exponential and logarithmic functions.' },
  { id: 'math-m8-s2', chapterId: 'math-m8', number: 38.2, title: 'Methods of Integration', description: 'Integration by substitution, by parts and by partial fractions, and integration using trigonometric identities.' },
  { id: 'math-m8-s3', chapterId: 'math-m8', number: 38.3, title: 'Standard Integral Forms', description: 'Evaluation of the simple integrals of the standard listed types: 1/(x² ± a²), 1/(a² − x²), 1/√(x² ± a²), √(a² − x²) and the ax² + bx + c family, including with a linear numerator (px + q).' },
  { id: 'math-m8-s4', chapterId: 'math-m8', number: 38.4, title: 'Definite Integrals', description: 'The fundamental theorem of calculus, properties of definite integrals and the evaluation of definite integrals.' },
  { id: 'math-m8-s5', chapterId: 'math-m8', number: 38.5, title: 'Areas by Integration', description: 'Determining the areas of the regions bounded by simple curves in standard forms.' },
  // ---- Unit 9: Differential Equations ----
  { id: 'math-m9-s1', chapterId: 'math-m9', number: 39.1, title: 'Order and Degree', description: 'Ordinary differential equations and their order and degree.' },
  { id: 'math-m9-s2', chapterId: 'math-m9', number: 39.2, title: 'Separation of Variables', description: 'The solution of a differential equation by the method of separation of variables.' },
  { id: 'math-m9-s3', chapterId: 'math-m9', number: 39.3, title: 'Homogeneous Differential Equations', description: 'The solution of a homogeneous differential equation.' },
  { id: 'math-m9-s4', chapterId: 'math-m9', number: 39.4, title: 'Linear Differential Equations', description: 'The solution of a linear differential equation of the type dy/dx + p(x)y = q(x).' },
  // ---- Unit 10: Co-ordinate Geometry ----
  { id: 'math-m10-s1', chapterId: 'math-m10', number: 40.1, title: 'Coordinates, Distance and Locus', description: 'The Cartesian system of rectangular coordinates in a plane, the distance formula, the section formula, and locus and its equation.' },
  { id: 'math-m10-s2', chapterId: 'math-m10', number: 40.2, title: 'The Straight Line', description: 'Slope of a line, parallel and perpendicular lines and intercepts on the coordinate axes; various forms of equations of a line, intersection of lines and angles between two lines; conditions for the concurrence of three lines; and the distance of a point from a line.' },
  { id: 'math-m10-s3', chapterId: 'math-m10', number: 40.3, title: 'Centres of a Triangle', description: 'Coordinates of the centroid, orthocentre and circumcentre of a triangle.' },
  { id: 'math-m10-s4', chapterId: 'math-m10', number: 40.4, title: 'Circles', description: 'The standard and general forms of the equation of a circle, its radius and centre, the equation when the endpoints of a diameter are given, and points of intersection of a line and a circle with the centre at the origin.' },
  { id: 'math-m10-s5', chapterId: 'math-m10', number: 40.5, title: 'Conic Sections', description: 'Sections of conics and the equations of conic sections — parabola, ellipse and hyperbola — in standard forms.' },
  // ---- Unit 11: Three Dimensional Geometry ----
  { id: 'math-m11-s1', chapterId: 'math-m11', number: 41.1, title: 'Points in Space', description: 'Coordinates of a point in space, distance between two points and the section formula.' },
  { id: 'math-m11-s2', chapterId: 'math-m11', number: 41.2, title: 'Direction Ratios, Direction Cosines and Angles', description: 'Direction ratios and direction cosines of a line and the angle between two intersecting lines.' },
  { id: 'math-m11-s3', chapterId: 'math-m11', number: 41.3, title: 'Lines and Skew Lines', description: 'The equation of a line, skew lines and the shortest distance between them and its equation.' },
  // ---- Unit 12: Vector Algebra ----
  { id: 'math-m12-s1', chapterId: 'math-m12', number: 42.1, title: 'Vectors and Scalars', description: 'Vectors and scalars and the addition of vectors.' },
  { id: 'math-m12-s2', chapterId: 'math-m12', number: 42.2, title: 'Components of a Vector', description: 'Components of a vector in two dimensions and in three-dimensional spaces.' },
  { id: 'math-m12-s3', chapterId: 'math-m12', number: 42.3, title: 'Scalar and Vector Products', description: 'The scalar and vector products of vectors and their geometric meanings.' },
  // ---- Unit 13: Statistics and Probability ----
  { id: 'math-m13-s1', chapterId: 'math-m13', number: 43.1, title: 'Measures of Central Tendency', description: 'Calculation of the mean, median and mode of grouped and ungrouped data.' },
  { id: 'math-m13-s2', chapterId: 'math-m13', number: 43.2, title: 'Measures of Dispersion', description: 'Measures of dispersion and the calculation of standard deviation, variance and mean deviation for grouped and ungrouped data.' },
  { id: 'math-m13-s3', chapterId: 'math-m13', number: 43.3, title: 'Probability of an Event', description: 'The probability of an event with the addition and multiplication theorems of probability.' },
  { id: 'math-m13-s4', chapterId: 'math-m13', number: 43.4, title: 'Bayes\' Theorem', description: 'Bayes\' theorem for updating probabilities over partitioned sample spaces.' },
  { id: 'math-m13-s5', chapterId: 'math-m13', number: 43.5, title: 'Probability Distribution of a Random Variable', description: 'The probability distribution of a random variable.' },
  // ---- Unit 14: Trigonometry ----
  { id: 'math-m14-s1', chapterId: 'math-m14', number: 44.1, title: 'Trigonometrical Functions', description: 'Trigonometrical functions and their behaviour across quadrants.' },
  { id: 'math-m14-s2', chapterId: 'math-m14', number: 44.2, title: 'Trigonometrical Identities', description: 'Trigonometrical identities and their use in simplification and transformation.' },
  { id: 'math-m14-s3', chapterId: 'math-m14', number: 44.3, title: 'Inverse Trigonometrical Functions', description: 'Inverse trigonometrical functions and their properties.' },
]

// ---------------------------------------------------------------------------
// Summary: 14 chapters (NTA Units 1–14) · 52 sections · bookId
// 'jeemain-maths-2026'. Every official subtopic bullet of the NTA
// JEE (Main) 2026 mathematics syllabus is enumerated in exactly one section
// description.
// ---------------------------------------------------------------------------
