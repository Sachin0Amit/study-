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
  { id: 'jeemain-math-u1', bookId: 'jeemain-maths-2026', number: 1, title: 'Sets, Relations and Functions', shortTitle: 'Sets & Functions', description: 'Set operations and their algebra, power sets, relations including equivalence relations, and function types with composition. Straightforward classification questions from this unit open many JEE Main maths sections.', icon: 'circles', pages: 'Unit 1', interactiveKey: 'venn-explorer' },
  { id: 'jeemain-math-u2', bookId: 'jeemain-maths-2026', number: 2, title: 'Complex Numbers and Quadratic Equations', shortTitle: 'Complex & Quadratics', description: 'Complex numbers as ordered pairs, the Argand plane, algebra, modulus and argument, and quadratic equations with root–coefficient relations. Argand-geometry and nature-of-roots questions are JEE Main regulars.', icon: 'infinity', pages: 'Unit 2', interactiveKey: 'phasor-lab' },
  { id: 'jeemain-math-u3', bookId: 'jeemain-maths-2026', number: 3, title: 'Matrices and Determinants', shortTitle: 'Matrices & Determinants', description: 'Matrix algebra and types, determinants of order two and three, adjoint and inverse, consistency tests and solving linear systems. Determinant-expansion and system-solving questions appear in nearly every JEE Main paper.', icon: 'layout-grid', pages: 'Unit 3', interactiveKey: 'js-playground' },
  { id: 'jeemain-math-u4', bookId: 'jeemain-maths-2026', number: 4, title: 'Permutations and Combinations', shortTitle: 'P&C', description: 'The fundamental principle of counting, the meaning of P(n, r) and C(n, r) and simple applications. The counting toolkit behind many probability questions in JEE Main.', icon: 'dices', pages: 'Unit 4', interactiveKey: 'counting-lab' },
  { id: 'jeemain-math-u5', bookId: 'jeemain-maths-2026', number: 5, title: 'Binomial Theorem and its Simple Applications', shortTitle: 'Binomial Theorem', description: 'The binomial theorem for a positive integral index with the general and middle terms and simple applications. Term-finding and coefficient questions are quick, reliable JEE Main marks.', icon: 'layers', pages: 'Unit 5', interactiveKey: 'counting-lab' },
  { id: 'jeemain-math-u6', bookId: 'jeemain-maths-2026', number: 6, title: 'Sequence and Series', shortTitle: 'Sequences & Series', description: 'Arithmetic and geometric progressions, insertion of arithmetic and geometric means and the relation between A.M. and G.M. AP–GP numericals are among the most frequent JEE Main maths questions.', icon: 'list-ordered', pages: 'Unit 6', interactiveKey: 'recurrence-explorer' },
  { id: 'jeemain-math-u7', bookId: 'jeemain-maths-2026', number: 7, title: 'Limit, Continuity and Differentiability', shortTitle: 'Limits & Continuity', description: 'Real functions and their graphs, limits, continuity and differentiability, the full differentiation toolkit up to second order, and applications to rates of change, monotonicity and extrema. The gateway to all JEE Main calculus problems.', icon: 'activity', pages: 'Unit 7', interactiveKey: 'derivative-lab' },
  { id: 'jeemain-math-u8', bookId: 'jeemain-maths-2026', number: 8, title: 'Integral Calculus', shortTitle: 'Integral Calculus', description: 'Indefinite integration by substitution, parts and partial fractions, the standard forms, the fundamental theorem, properties of definite integrals and area calculation. The highest-weightage single unit in JEE Main mathematics.', icon: 'sigma', pages: 'Unit 8', interactiveKey: 'riemann-lab' },
  { id: 'jeemain-math-u9', bookId: 'jeemain-maths-2026', number: 9, title: 'Differential Equations', shortTitle: 'Differential Equations', description: 'Order and degree, solution by separation of variables, homogeneous equations and linear first-order equations of the form dy/dx + p(x)y = q(x). Variable-separable and linear-equation questions are JEE Main certainties.', icon: 'spline', pages: 'Unit 9', interactiveKey: 'curve-lab' },
  { id: 'jeemain-math-u10', bookId: 'jeemain-maths-2026', number: 10, title: 'Co-ordinate Geometry', shortTitle: 'Coordinate Geometry', description: 'The straight line in all its forms, triangle centres, circles and the conic sections in standard form. Formula-intensive and heavily represented in every JEE Main paper.', icon: 'vector-square', pages: 'Unit 10', interactiveKey: 'curve-lab' },
  { id: 'jeemain-math-u11', bookId: 'jeemain-maths-2026', number: 11, title: 'Three Dimensional Geometry', shortTitle: '3D Geometry', description: 'Coordinates in space, distance and section formulae, direction cosines and ratios, lines, skew lines and the shortest distance. Short, method-driven questions make this a dependable JEE Main unit.', icon: 'box', pages: 'Unit 11', interactiveKey: 'orbit-lab' },
  { id: 'jeemain-math-u12', bookId: 'jeemain-maths-2026', number: 12, title: 'Vector Algebra', shortTitle: 'Vector Algebra', description: 'Vectors and scalars, addition of vectors, components in two and three dimensions, and scalar and vector products. Dot- and cross-product computations feed many JEE Main 3D questions.', icon: 'move', pages: 'Unit 12', interactiveKey: 'efield-lab' },
  { id: 'jeemain-math-u13', bookId: 'jeemain-maths-2026', number: 13, title: 'Statistics and Probability', shortTitle: 'Stats & Probability', description: 'Central tendency and dispersion for grouped and ungrouped data, the addition and multiplication theorems, Bayes\' theorem and random-variable distributions. Probability questions rooted in counting appear in nearly every paper.', icon: 'chart-line', pages: 'Unit 13', interactiveKey: 'probability-lab' },
  { id: 'jeemain-math-u14', bookId: 'jeemain-maths-2026', number: 14, title: 'Trigonometry', shortTitle: 'Trigonometry', description: 'Trigonometrical identities and functions and inverse trigonometrical functions with their properties. Inverse-trig principal values and identity simplifications are recurring JEE Main questions.', icon: 'triangle', pages: 'Unit 14', interactiveKey: 'phasor-lab' },
]

export const JEEMAIN_MATH_SECTIONS: SectionMeta[] = [
  // ---- Unit 1: Sets, Relations and Functions ----
  { id: 'jeemain-math-u1-s1', chapterId: 'jeemain-math-u1', number: 1.1, title: 'Sets and Their Algebra', description: 'Sets and their representation, union, intersection and complement of sets and their algebraic properties, and the power set.' },
  { id: 'jeemain-math-u1-s2', chapterId: 'jeemain-math-u1', number: 1.2, title: 'Relations', description: 'Relations, types of relations and equivalence relations.' },
  { id: 'jeemain-math-u1-s3', chapterId: 'jeemain-math-u1', number: 1.3, title: 'Functions', description: 'One-one, into and onto functions and the composition of functions.' },
  // ---- Unit 2: Complex Numbers and Quadratic Equations ----
  { id: 'jeemain-math-u2-s1', chapterId: 'jeemain-math-u2', number: 2.1, title: 'Complex Numbers and the Argand Plane', description: 'Complex numbers as ordered pairs of reals, their representation in the form a + ib and in a plane (Argand diagram), and the algebra of complex numbers.' },
  { id: 'jeemain-math-u2-s2', chapterId: 'jeemain-math-u2', number: 2.2, title: 'Modulus and Argument', description: 'The modulus and argument (or amplitude) of a complex number and their geometric interpretation.' },
  { id: 'jeemain-math-u2-s3', chapterId: 'jeemain-math-u2', number: 2.3, title: 'Quadratic Equations and Their Solutions', description: 'Quadratic equations in real and complex number systems and their solutions.' },
  { id: 'jeemain-math-u2-s4', chapterId: 'jeemain-math-u2', number: 2.4, title: 'Roots and Coefficients', description: 'Relations between roots and coefficients, the nature of roots and the formation of quadratic equations with given roots.' },
  // ---- Unit 3: Matrices and Determinants ----
  { id: 'jeemain-math-u3-s1', chapterId: 'jeemain-math-u3', number: 3.1, title: 'Matrices and Their Algebra', description: 'Matrices, the algebra of matrices and the types of matrices.' },
  { id: 'jeemain-math-u3-s2', chapterId: 'jeemain-math-u3', number: 3.2, title: 'Determinants', description: 'Determinants and matrices of order two and three, and the evaluation of determinants.' },
  { id: 'jeemain-math-u3-s3', chapterId: 'jeemain-math-u3', number: 3.3, title: 'Area of Triangles Using Determinants', description: 'The area of triangles using determinants, with collinearity as the zero-area case.' },
  { id: 'jeemain-math-u3-s4', chapterId: 'jeemain-math-u3', number: 3.4, title: 'Adjoint, Inverse and Linear Systems', description: 'The adjoint and inverse of a square matrix, the test of consistency and the solution of simultaneous linear equations in two or three variables using matrices.' },
  // ---- Unit 4: Permutations and Combinations ----
  { id: 'jeemain-math-u4-s1', chapterId: 'jeemain-math-u4', number: 4.1, title: 'The Fundamental Principle of Counting', description: 'The fundamental principle of counting as the engine of all arrangement and selection problems.' },
  { id: 'jeemain-math-u4-s2', chapterId: 'jeemain-math-u4', number: 4.2, title: 'Permutations', description: 'Permutations and the meaning of P(n, r), with simple applications to arrangements.' },
  { id: 'jeemain-math-u4-s3', chapterId: 'jeemain-math-u4', number: 4.3, title: 'Combinations', description: 'Combinations and the meaning of C(n, r), with simple applications to selections.' },
  // ---- Unit 5: Binomial Theorem and its Simple Applications ----
  { id: 'jeemain-math-u5-s1', chapterId: 'jeemain-math-u5', number: 5.1, title: 'The Binomial Theorem for a Positive Integral Index', description: 'The binomial theorem for a positive integral index and its expansion.' },
  { id: 'jeemain-math-u5-s2', chapterId: 'jeemain-math-u5', number: 5.2, title: 'General Term and Middle Term', description: 'The general term and the middle term of a binomial expansion.' },
  { id: 'jeemain-math-u5-s3', chapterId: 'jeemain-math-u5', number: 5.3, title: 'Simple Applications', description: 'Simple applications of the binomial theorem: specific-term and coefficient problems.' },
  // ---- Unit 6: Sequence and Series ----
  { id: 'jeemain-math-u6-s1', chapterId: 'jeemain-math-u6', number: 6.1, title: 'Arithmetic and Geometric Progressions', description: 'Arithmetic and geometric progressions, their terms and sums.' },
  { id: 'jeemain-math-u6-s2', chapterId: 'jeemain-math-u6', number: 6.2, title: 'Insertion of Means', description: 'Insertion of arithmetic means and geometric means between two given numbers.' },
  { id: 'jeemain-math-u6-s3', chapterId: 'jeemain-math-u6', number: 6.3, title: 'Relation Between A.M. and G.M.', description: 'The relation between A.M. and G.M. and its use in series and inequality problems.' },
  // ---- Unit 7: Limit, Continuity and Differentiability ----
  { id: 'jeemain-math-u7-s1', chapterId: 'jeemain-math-u7', number: 7.1, title: 'Real Functions and Their Graphs', description: 'Real-valued functions and the algebra of functions, polynomial, rational, trigonometric, logarithmic and exponential functions, inverse functions and graphs of simple functions.' },
  { id: 'jeemain-math-u7-s2', chapterId: 'jeemain-math-u7', number: 7.2, title: 'Limits, Continuity and Differentiability', description: 'Limits, continuity and differentiability and how the three notions connect.' },
  { id: 'jeemain-math-u7-s3', chapterId: 'jeemain-math-u7', number: 7.3, title: 'Techniques of Differentiation', description: 'Differentiation of the sum, difference, product and quotient of two functions; differentiation of trigonometric, inverse trigonometric, logarithmic, exponential, composite and implicit functions; and derivatives of order up to two.' },
  { id: 'jeemain-math-u7-s4', chapterId: 'jeemain-math-u7', number: 7.4, title: 'Applications of Derivatives', description: 'Rate of change of quantities, monotonic — increasing and decreasing — functions and maxima and minima of functions of one variable.' },
  // ---- Unit 8: Integral Calculus ----
  { id: 'jeemain-math-u8-s1', chapterId: 'jeemain-math-u8', number: 8.1, title: 'Integration as an Anti-Derivative', description: 'The integral as an anti-derivative and the fundamental integrals involving algebraic, trigonometric, exponential and logarithmic functions.' },
  { id: 'jeemain-math-u8-s2', chapterId: 'jeemain-math-u8', number: 8.2, title: 'Methods of Integration', description: 'Integration by substitution, by parts and by partial fractions, and integration using trigonometric identities.' },
  { id: 'jeemain-math-u8-s3', chapterId: 'jeemain-math-u8', number: 8.3, title: 'Standard Integral Forms', description: 'Evaluation of the simple integrals of the standard listed types: 1/(x² ± a²), 1/(a² − x²), 1/√(x² ± a²), √(a² − x²) and the ax² + bx + c family, including with a linear numerator (px + q).' },
  { id: 'jeemain-math-u8-s4', chapterId: 'jeemain-math-u8', number: 8.4, title: 'Definite Integrals', description: 'The fundamental theorem of calculus, properties of definite integrals and the evaluation of definite integrals.' },
  { id: 'jeemain-math-u8-s5', chapterId: 'jeemain-math-u8', number: 8.5, title: 'Areas by Integration', description: 'Determining the areas of the regions bounded by simple curves in standard forms.' },
  // ---- Unit 9: Differential Equations ----
  { id: 'jeemain-math-u9-s1', chapterId: 'jeemain-math-u9', number: 9.1, title: 'Order and Degree', description: 'Ordinary differential equations and their order and degree.' },
  { id: 'jeemain-math-u9-s2', chapterId: 'jeemain-math-u9', number: 9.2, title: 'Separation of Variables', description: 'The solution of a differential equation by the method of separation of variables.' },
  { id: 'jeemain-math-u9-s3', chapterId: 'jeemain-math-u9', number: 9.3, title: 'Homogeneous Differential Equations', description: 'The solution of a homogeneous differential equation.' },
  { id: 'jeemain-math-u9-s4', chapterId: 'jeemain-math-u9', number: 9.4, title: 'Linear Differential Equations', description: 'The solution of a linear differential equation of the type dy/dx + p(x)y = q(x).' },
  // ---- Unit 10: Co-ordinate Geometry ----
  { id: 'jeemain-math-u10-s1', chapterId: 'jeemain-math-u10', number: 10.1, title: 'Coordinates, Distance and Locus', description: 'The Cartesian system of rectangular coordinates in a plane, the distance formula, the section formula, and locus and its equation.' },
  { id: 'jeemain-math-u10-s2', chapterId: 'jeemain-math-u10', number: 10.2, title: 'The Straight Line', description: 'Slope of a line, parallel and perpendicular lines and intercepts on the coordinate axes; various forms of equations of a line, intersection of lines and angles between two lines; conditions for the concurrence of three lines; and the distance of a point from a line.' },
  { id: 'jeemain-math-u10-s3', chapterId: 'jeemain-math-u10', number: 10.3, title: 'Centres of a Triangle', description: 'Coordinates of the centroid, orthocentre and circumcentre of a triangle.' },
  { id: 'jeemain-math-u10-s4', chapterId: 'jeemain-math-u10', number: 10.4, title: 'Circles', description: 'The standard and general forms of the equation of a circle, its radius and centre, the equation when the endpoints of a diameter are given, and points of intersection of a line and a circle with the centre at the origin.' },
  { id: 'jeemain-math-u10-s5', chapterId: 'jeemain-math-u10', number: 10.5, title: 'Conic Sections', description: 'Sections of conics and the equations of conic sections — parabola, ellipse and hyperbola — in standard forms.' },
  // ---- Unit 11: Three Dimensional Geometry ----
  { id: 'jeemain-math-u11-s1', chapterId: 'jeemain-math-u11', number: 11.1, title: 'Points in Space', description: 'Coordinates of a point in space, distance between two points and the section formula.' },
  { id: 'jeemain-math-u11-s2', chapterId: 'jeemain-math-u11', number: 11.2, title: 'Direction Ratios, Direction Cosines and Angles', description: 'Direction ratios and direction cosines of a line and the angle between two intersecting lines.' },
  { id: 'jeemain-math-u11-s3', chapterId: 'jeemain-math-u11', number: 11.3, title: 'Lines and Skew Lines', description: 'The equation of a line, skew lines and the shortest distance between them and its equation.' },
  // ---- Unit 12: Vector Algebra ----
  { id: 'jeemain-math-u12-s1', chapterId: 'jeemain-math-u12', number: 12.1, title: 'Vectors and Scalars', description: 'Vectors and scalars and the addition of vectors.' },
  { id: 'jeemain-math-u12-s2', chapterId: 'jeemain-math-u12', number: 12.2, title: 'Components of a Vector', description: 'Components of a vector in two dimensions and in three-dimensional spaces.' },
  { id: 'jeemain-math-u12-s3', chapterId: 'jeemain-math-u12', number: 12.3, title: 'Scalar and Vector Products', description: 'The scalar and vector products of vectors and their geometric meanings.' },
  // ---- Unit 13: Statistics and Probability ----
  { id: 'jeemain-math-u13-s1', chapterId: 'jeemain-math-u13', number: 13.1, title: 'Measures of Central Tendency', description: 'Calculation of the mean, median and mode of grouped and ungrouped data.' },
  { id: 'jeemain-math-u13-s2', chapterId: 'jeemain-math-u13', number: 13.2, title: 'Measures of Dispersion', description: 'Measures of dispersion and the calculation of standard deviation, variance and mean deviation for grouped and ungrouped data.' },
  { id: 'jeemain-math-u13-s3', chapterId: 'jeemain-math-u13', number: 13.3, title: 'Probability of an Event', description: 'The probability of an event with the addition and multiplication theorems of probability.' },
  { id: 'jeemain-math-u13-s4', chapterId: 'jeemain-math-u13', number: 13.4, title: 'Bayes\' Theorem', description: 'Bayes\' theorem for updating probabilities over partitioned sample spaces.' },
  { id: 'jeemain-math-u13-s5', chapterId: 'jeemain-math-u13', number: 13.5, title: 'Probability Distribution of a Random Variable', description: 'The probability distribution of a random variable.' },
  // ---- Unit 14: Trigonometry ----
  { id: 'jeemain-math-u14-s1', chapterId: 'jeemain-math-u14', number: 14.1, title: 'Trigonometrical Functions', description: 'Trigonometrical functions and their behaviour across quadrants.' },
  { id: 'jeemain-math-u14-s2', chapterId: 'jeemain-math-u14', number: 14.2, title: 'Trigonometrical Identities', description: 'Trigonometrical identities and their use in simplification and transformation.' },
  { id: 'jeemain-math-u14-s3', chapterId: 'jeemain-math-u14', number: 14.3, title: 'Inverse Trigonometrical Functions', description: 'Inverse trigonometrical functions and their properties.' },
]

// ---------------------------------------------------------------------------
// Summary: 14 chapters (NTA Units 1–14) · 52 sections · bookId
// 'jeemain-maths-2026'. Every official subtopic bullet of the NTA
// JEE (Main) 2026 mathematics syllabus is enumerated in exactly one section
// description.
// ---------------------------------------------------------------------------
