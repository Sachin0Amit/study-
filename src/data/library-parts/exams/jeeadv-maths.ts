// ============================================================================
// JEE (Advanced) 2026 — Mathematics syllabus library metadata (bookId
// 'jeeadv-maths-2026'). Structure follows the JEE (Advanced) 2026 official
// syllabus (jeeadv.ac.in, jee-advanced-2026-syllabus.pdf): the 9 official
// sections (Sets/Relations/Functions, Algebra, Matrices, Probability &
// Statistics, Trigonometry, Analytical Geometry, Differential Calculus,
// Integral Calculus, Vectors) are split into 15 study-sized chapters
// (76 sections). Every official subtopic is covered; the `pages` field
// records the official section each chapter draws from.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../../library'

export const JEEADV_MATH_CHAPTERS: ChapterMeta[] = [
  { id: 'math-a1', bookId: 'math-master', number: 45, title: 'Sets, Relations & Functions', shortTitle: 'Sets & Functions', description: 'Sets with their algebra and De Morgan’s laws, relations with equivalence, and functions as mappings with invertibility, parity and composition. Official advanced engineering assessment mathematics section 1, and the language of every later chapter.', icon: 'network', pages: 'Section 1', interactiveKey: 'venn-explorer' },
  { id: 'math-a2', bookId: 'math-master', number: 46, title: 'Complex Numbers & Quadratic Equations', shortTitle: 'Complex & Quadratics', description: 'The algebra and polar form of complex numbers with the triangle inequality and cube roots of unity, and quadratic equations with real coefficients tied to their roots. The complex-numbers slice of official advanced engineering assessment algebra.', icon: 'infinity', pages: 'Section 2', interactiveKey: 'js-playground' },
  { id: 'math-a3', bookId: 'math-master', number: 47, title: 'Sequences, Series & Logarithms', shortTitle: 'Sequences & Logarithms', description: 'Arithmetic and geometric progressions with their means and sums, infinite geometric series, the special power sums and the properties of logarithms. The progressions slice of official advanced engineering assessment algebra.', icon: 'list-ordered', pages: 'Section 2', interactiveKey: 'recurrence-explorer' },
  { id: 'math-a4', bookId: 'math-master', number: 48, title: 'Permutations, Combinations & Binomial Theorem', shortTitle: 'P&C & Binomial', description: 'Counting by permutations and combinations and the binomial theorem for a positive integral index with the properties of binomial coefficients. The counting slice of official advanced engineering assessment algebra, heavily taxed in both papers.', icon: 'hash', pages: 'Section 2', interactiveKey: 'counting-lab' },
  { id: 'math-a5', bookId: 'math-master', number: 49, title: 'Matrices & Determinants', shortTitle: 'Matrices & Determinants', description: 'Matrices as rectangular arrays with their algebra and elementary transformations, determinants up to order three, adjoints and inverses, the special matrix types and the solution of simultaneous linear equations. Official advanced engineering assessment mathematics section 3.', icon: 'boxes', pages: 'Section 3', interactiveKey: 'js-playground' },
  { id: 'math-a6', bookId: 'math-master', number: 50, title: 'Probability & Statistics', shortTitle: 'Probability & Statistics', description: 'Sample spaces and events, the addition, multiplication, total-probability and Bayes rules with counting-based probabilities, and the statistical measures of central tendency and dispersion including random variables. Official advanced engineering assessment mathematics section 4.', icon: 'dices', pages: 'Section 4', interactiveKey: 'probability-lab' },
  { id: 'math-a7', bookId: 'math-master', number: 51, title: 'Trigonometry', shortTitle: 'Trigonometry', description: 'The trigonometric functions with their periodicity and graphs, the addition and multiple-angle formulae, general solutions of equations and inverse functions with principal values. Official advanced engineering assessment mathematics section 5.', icon: 'triangle', pages: 'Section 5', interactiveKey: 'curve-lab' },
  { id: 'math-a8', bookId: 'math-master', number: 52, title: 'Two-Dimensional Coordinate Geometry', shortTitle: '2D Coordinate Geometry', description: 'Coordinates, distances and section formulae, lines in all their forms with bisectors and concurrency, the four triangle centres, and the full circle geometry of tangents, chords and families. The 2D core of official advanced engineering assessment analytical geometry.', icon: 'layout-grid', pages: 'Section 6', interactiveKey: 'curve-lab' },
  { id: 'math-a9', bookId: 'math-master', number: 53, title: 'Conic Sections: Parabola, Ellipse & Hyperbola', shortTitle: 'Conic Sections', description: 'The parabola, ellipse and hyperbola in standard form with foci, directrices and eccentricity, their parametric equations with tangents and normals, and locus problems. The conic half of official advanced engineering assessment analytical geometry.', icon: 'orbit', pages: 'Section 6', interactiveKey: 'orbit-lab' },
  { id: 'math-a10', bookId: 'math-master', number: 54, title: 'Three-Dimensional Geometry', shortTitle: '3D Geometry', description: 'Direction cosines and ratios, lines and planes in space with their distances and mutual angles, and skew lines with the shortest distance between them. The 3D part of official advanced engineering assessment analytical geometry.', icon: 'box', pages: 'Section 6', interactiveKey: 'efield-lab' },
  { id: 'math-a11', bookId: 'math-master', number: 55, title: 'Limits, Continuity & Differentiability', shortTitle: 'Limits & Continuity', description: 'Limits at real numbers, continuity with its algebra and composites, the intermediate value property and L’Hospital’s rule. The opening of official advanced engineering assessment differential calculus.', icon: 'gauge', pages: 'Section 7', interactiveKey: 'derivative-lab' },
  { id: 'math-a12', bookId: 'math-master', number: 56, title: 'Differentiation & Its Applications', shortTitle: 'Differentiation', description: 'Derivative rules with the chain rule, derivatives of every standard function family, implicit differentiation to second order, tangents and normals, monotonicity, extrema and the mean value theorems. The heart of official advanced engineering assessment differential calculus.', icon: 'trending', pages: 'Section 7', interactiveKey: 'taylor-lab' },
  { id: 'math-a13', bookId: 'math-master', number: 57, title: 'Integral Calculus', shortTitle: 'Integration', description: 'Antiderivatives of the standard functions, the methods of substitution, partial fractions and parts, definite integrals as limits of sums with the fundamental theorem, and areas bounded by simple curves. Official advanced engineering assessment mathematics section 8.', icon: 'sigma', pages: 'Section 8', interactiveKey: 'riemann-lab' },
  { id: 'math-a14', bookId: 'math-master', number: 58, title: 'Differential Equations', shortTitle: 'Differential Equations', description: 'The formation of ordinary differential equations and their solution by homogeneity, separation of variables and the linear first-order method. The ODE half of official advanced engineering assessment mathematics section 8.', icon: 'spline', pages: 'Section 8', interactiveKey: 'curve-lab' },
  { id: 'math-a15', bookId: 'math-master', number: 59, title: 'Vector Algebra', shortTitle: 'Vectors', description: 'Vector addition and scalar multiplication, the dot and cross products and the scalar and vector triple products with their geometrical interpretations. Official advanced engineering assessment mathematics section 9.', icon: 'vector-square', pages: 'Section 9', interactiveKey: 'efield-lab' },
]

export const JEEADV_MATH_SECTIONS: SectionMeta[] = [
  // ---- Unit 1 · Sets, Relations & Functions (official section 1) ----
  { id: 'math-a1-s1', chapterId: 'math-a1', number: 45.1, title: 'Sets & Their Representations', description: 'Representations of sets and the empty, finite and infinite kinds of sets.' },
  { id: 'math-a1-s2', chapterId: 'math-a1', number: 45.2, title: 'Algebra of Sets & De Morgan’s Laws', description: 'Intersection, complement, difference and symmetric difference with their algebraic properties, and De Morgan’s laws on union, intersection and difference for a finite number of sets, with practical problems.' },
  { id: 'math-a1-s3', chapterId: 'math-a1', number: 45.3, title: 'Cartesian Products & Relations', description: 'Ordered pairs, the Cartesian product of finite sets, relations with their domains and codomains, and the equivalence relation.' },
  { id: 'math-a1-s4', chapterId: 'math-a1', number: 45.4, title: 'Functions as Mappings', description: 'Functions as special relations — domain, codomain and range — and the into, onto and one-to-one types.' },
  { id: 'math-a1-s5', chapterId: 'math-a1', number: 45.5, title: 'Invertible, Even & Odd Functions', description: 'When a function is invertible, and the symmetry behaviour of even and odd functions.' },
  { id: 'math-a1-s6', chapterId: 'math-a1', number: 45.6, title: 'Special Functions & Operations on Functions', description: 'Polynomial, trigonometric, exponential, logarithmic, power, absolute-value and greatest-integer functions; sums, differences, products and compositions of functions.' },
  // ---- Unit 2 · Complex Numbers & Quadratic Equations (official section 2) ----
  { id: 'math-a2-s1', chapterId: 'math-a2', number: 46.1, title: 'Algebra of Complex Numbers', description: 'Addition, multiplication and conjugation of complex numbers with their properties.' },
  { id: 'math-a2-s2', chapterId: 'math-a2', number: 46.2, title: 'Polar Representation, Modulus & Argument', description: 'The polar representation of complex numbers and the properties of modulus and principal argument.' },
  { id: 'math-a2-s3', chapterId: 'math-a2', number: 46.3, title: 'Triangle Inequality & Cube Roots of Unity', description: 'The triangle inequality, the cube roots of unity with their geometric interpretation, and the statement of the fundamental theorem of algebra.' },
  { id: 'math-a2-s4', chapterId: 'math-a2', number: 46.4, title: 'Quadratic Equations with Real Coefficients', description: 'Solving quadratic equations with real coefficients and reading their roots.' },
  { id: 'math-a2-s5', chapterId: 'math-a2', number: 46.5, title: 'Roots & Coefficients', description: 'Relations between roots and coefficients, the formation of quadratic equations with given roots and symmetric functions of roots.' },
  // ---- Unit 3 · Sequences, Series & Logarithms (official section 2) ----
  { id: 'math-a3-s1', chapterId: 'math-a3', number: 47.1, title: 'Arithmetic Progressions & Means', description: 'Arithmetic progressions, their terms and arithmetic means.' },
  { id: 'math-a3-s2', chapterId: 'math-a3', number: 47.2, title: 'Geometric Progressions & Means', description: 'Geometric progressions, their terms and geometric means.' },
  { id: 'math-a3-s3', chapterId: 'math-a3', number: 47.3, title: 'Sums & Infinite Series', description: 'Sums of finite arithmetic and geometric progressions and the infinite geometric series.' },
  { id: 'math-a3-s4', chapterId: 'math-a3', number: 47.4, title: 'Special Sums', description: 'The sum of the first n natural numbers and the sums of their squares and cubes.' },
  { id: 'math-a3-s5', chapterId: 'math-a3', number: 47.5, title: 'Logarithms', description: 'Logarithms and their properties.' },
  // ---- Unit 4 · Permutations, Combinations & Binomial (official section 2) ----
  { id: 'math-a4-s1', chapterId: 'math-a4', number: 48.1, title: 'Permutations', description: 'Ordered arrangements and the standard permutation counting techniques.' },
  { id: 'math-a4-s2', chapterId: 'math-a4', number: 48.2, title: 'Combinations', description: 'Unordered selections and the standard combination counting techniques.' },
  { id: 'math-a4-s3', chapterId: 'math-a4', number: 48.3, title: 'Binomial Theorem', description: 'The binomial theorem for a positive integral index and its expansion.' },
  { id: 'math-a4-s4', chapterId: 'math-a4', number: 48.4, title: 'Properties of Binomial Coefficients', description: 'The identities satisfied by binomial coefficients and their use in summation problems.' },
  // ---- Unit 5 · Matrices & Determinants (official section 3) ----
  { id: 'math-a5-s1', chapterId: 'math-a5', number: 49.1, title: 'Matrices, Equality & Elementary Operations', description: 'Matrices as rectangular arrays of real numbers, their equality, and elementary row and column transformations.' },
  { id: 'math-a5-s2', chapterId: 'math-a5', number: 49.2, title: 'Matrix Algebra & Transpose', description: 'Addition, multiplication by a scalar, products of matrices and the transpose, with the properties of these operations.' },
  { id: 'math-a5-s3', chapterId: 'math-a5', number: 49.3, title: 'Determinants', description: 'The determinant of a square matrix of order up to three and its evaluation and properties.' },
  { id: 'math-a5-s4', chapterId: 'math-a5', number: 49.4, title: 'Adjoint & Inverse', description: 'The adjoint of a matrix and the inverse of a square matrix of order up to three.' },
  { id: 'math-a5-s5', chapterId: 'math-a5', number: 49.5, title: 'Diagonal, Symmetric & Skew-Symmetric Matrices', description: 'These special matrix types and their properties.' },
  { id: 'math-a5-s6', chapterId: 'math-a5', number: 49.6, title: 'Simultaneous Linear Equations', description: 'Solutions of simultaneous linear equations in two or three variables by matrix and determinant methods.' },
  // ---- Unit 6 · Probability & Statistics (official section 4) ----
  { id: 'math-a6-s1', chapterId: 'math-a6', number: 50.1, title: 'Random Experiments, Sample Spaces & Events', description: 'Random experiments, sample spaces and the impossible, simple and compound types of events.' },
  { id: 'math-a6-s2', chapterId: 'math-a6', number: 50.2, title: 'Addition & Multiplication Rules', description: 'The addition and multiplication rules of probability, conditional probability and the independence of events.' },
  { id: 'math-a6-s3', chapterId: 'math-a6', number: 50.3, title: 'Total Probability & Bayes’ Theorem', description: 'Total probability and Bayes’ theorem over partitioned sample spaces.' },
  { id: 'math-a6-s4', chapterId: 'math-a6', number: 50.4, title: 'Counting-Based Probability', description: 'Computation of the probability of events using permutations and combinations.' },
  { id: 'math-a6-s5', chapterId: 'math-a6', number: 50.5, title: 'Central Tendency & Dispersion', description: 'Mean, median and mode; and mean deviation, standard deviation and variance of grouped and ungrouped data.' },
  { id: 'math-a6-s6', chapterId: 'math-a6', number: 50.6, title: 'Frequency Distributions & Random Variables', description: 'Analysis of frequency distributions with the same mean but different variance, and random variables with their mean and variance.' },
  // ---- Unit 7 · Trigonometry (official section 5) ----
  { id: 'math-a7-s1', chapterId: 'math-a7', number: 51.1, title: 'Trigonometric Functions, Periodicity & Graphs', description: 'The trigonometric functions, their periodicity and their graphs.' },
  { id: 'math-a7-s2', chapterId: 'math-a7', number: 51.2, title: 'Addition & Subtraction Formulae', description: 'The formulae for the trigonometric functions of sums and differences of angles.' },
  { id: 'math-a7-s3', chapterId: 'math-a7', number: 51.3, title: 'Multiple & Sub-Multiple Angles', description: 'Formulae involving multiple and sub-multiple angles.' },
  { id: 'math-a7-s4', chapterId: 'math-a7', number: 51.4, title: 'Trigonometric Equations', description: 'General solutions of trigonometric equations.' },
  { id: 'math-a7-s5', chapterId: 'math-a7', number: 51.5, title: 'Inverse Trigonometric Functions', description: 'Inverse trigonometric functions — principal values only — and their elementary properties.' },
  // ---- Unit 8 · Two-Dimensional Coordinate Geometry (official section 6) ----
  { id: 'math-a8-s1', chapterId: 'math-a8', number: 52.1, title: 'Coordinates, Distance & Section Formulae', description: 'Cartesian coordinates, the distance between two points, section formulae and the shift of origin.' },
  { id: 'math-a8-s2', chapterId: 'math-a8', number: 52.2, title: 'Straight Lines', description: 'The equation of a straight line in various forms, the angle between two lines and the distance of a point from a line.' },
  { id: 'math-a8-s3', chapterId: 'math-a8', number: 52.3, title: 'Families, Bisectors & Concurrency', description: 'Lines through the point of intersection of two given lines, the bisector of the angle between two lines, and concurrency of lines.' },
  { id: 'math-a8-s4', chapterId: 'math-a8', number: 52.4, title: 'Triangle Centres', description: 'The centroid, orthocentre, incentre and circumcentre of a triangle.' },
  { id: 'math-a8-s5', chapterId: 'math-a8', number: 52.5, title: 'Circles', description: 'The equation of a circle in various forms, parametric equations, and the equations of tangent, normal and chord.' },
  { id: 'math-a8-s6', chapterId: 'math-a8', number: 52.6, title: 'Circle Intersections & Families', description: 'Intersection of a circle with a straight line or a circle, and the equation of a circle through those points of intersection.' },
  // ---- Unit 9 · Conic Sections (official section 6) ----
  { id: 'math-a9-s1', chapterId: 'math-a9', number: 53.1, title: 'Parabola', description: 'The parabola in standard form with its focus, directrix and eccentricity.' },
  { id: 'math-a9-s2', chapterId: 'math-a9', number: 53.2, title: 'Ellipse', description: 'The ellipse in standard form with its foci, directrices and eccentricity.' },
  { id: 'math-a9-s3', chapterId: 'math-a9', number: 53.3, title: 'Hyperbola', description: 'The hyperbola in standard form with its foci, directrices and eccentricity.' },
  { id: 'math-a9-s4', chapterId: 'math-a9', number: 53.4, title: 'Tangents, Normals & Parametric Forms', description: 'Parametric equations of the conics and the equations of their tangents and normals.' },
  { id: 'math-a9-s5', chapterId: 'math-a9', number: 53.5, title: 'Locus Problems', description: 'Locus problems built on the conic definitions.' },
  // ---- Unit 10 · Three-Dimensional Geometry (official section 6) ----
  { id: 'math-a10-s1', chapterId: 'math-a10', number: 54.1, title: 'Points, Directions & Distances', description: 'The distance between two points in space, direction cosines and direction ratios.' },
  { id: 'math-a10-s2', chapterId: 'math-a10', number: 54.2, title: 'Straight Lines in Space', description: 'The equation of a straight line in space.' },
  { id: 'math-a10-s3', chapterId: 'math-a10', number: 54.3, title: 'Skew Lines & Shortest Distance', description: 'Skew lines and the shortest distance between two lines.' },
  { id: 'math-a10-s4', chapterId: 'math-a10', number: 54.4, title: 'Planes', description: 'The equation of a plane and the distance of a point from a plane.' },
  { id: 'math-a10-s5', chapterId: 'math-a10', number: 54.5, title: 'Angles & Coplanarity', description: 'The angle between two lines, between two planes and between a line and a plane; and coplanar lines.' },
  // ---- Unit 11 · Limits, Continuity & Differentiability (official section 7) ----
  { id: 'math-a11-s1', chapterId: 'math-a11', number: 55.1, title: 'Limits of Functions', description: 'The limit of a function at a real number and its evaluation.' },
  { id: 'math-a11-s2', chapterId: 'math-a11', number: 55.2, title: 'Continuity & Algebra of Functions', description: 'Continuity and the limits and continuity of the sum, difference, product and quotient of two functions.' },
  { id: 'math-a11-s3', chapterId: 'math-a11', number: 55.3, title: 'Composites & the Intermediate Value Property', description: 'Continuity of composite functions and the intermediate value property of continuous functions.' },
  { id: 'math-a11-s4', chapterId: 'math-a11', number: 55.4, title: 'L’Hospital’s Rule', description: 'The rule and its use in the evaluation of limits of functions.' },
  // ---- Unit 12 · Differentiation & Its Applications (official section 7) ----
  { id: 'math-a12-s1', chapterId: 'math-a12', number: 56.1, title: 'Derivatives & the Rules', description: 'The derivative of a function and of sums, differences, products and quotients of two functions, with the chain rule.' },
  { id: 'math-a12-s2', chapterId: 'math-a12', number: 56.2, title: 'Derivatives of Standard Functions', description: 'Derivatives of polynomial, rational, trigonometric, inverse trigonometric, exponential and logarithmic functions.' },
  { id: 'math-a12-s3', chapterId: 'math-a12', number: 56.3, title: 'Implicit Differentiation & Geometry', description: 'Derivatives up to order two of implicit functions and the geometric interpretation of the derivative.' },
  { id: 'math-a12-s4', chapterId: 'math-a12', number: 56.4, title: 'Tangents & Normals', description: 'Tangents and normals to curves as the geometric payoff of differentiation.' },
  { id: 'math-a12-s5', chapterId: 'math-a12', number: 56.5, title: 'Monotonicity', description: 'Increasing and decreasing functions detected by the sign of the first derivative.' },
  { id: 'math-a12-s6', chapterId: 'math-a12', number: 56.6, title: 'Extrema & Mean Value Theorems', description: 'Maximum and minimum values of a function with derivatives of order two, and Rolle’s theorem and Lagrange’s mean value theorem with their geometric interpretation.' },
  // ---- Unit 13 · Integral Calculus (official section 8) ----
  { id: 'math-a13-s1', chapterId: 'math-a13', number: 57.1, title: 'Integration as the Inverse of Differentiation', description: 'Integration as the inverse process of differentiation.' },
  { id: 'math-a13-s2', chapterId: 'math-a13', number: 57.2, title: 'Indefinite Integrals of Standard Functions', description: 'The indefinite integrals of the standard functions.' },
  { id: 'math-a13-s3', chapterId: 'math-a13', number: 57.3, title: 'Methods: Substitution, Partial Fractions & By Parts', description: 'Integration by the methods of substitution and partial fractions, and integration by parts.' },
  { id: 'math-a13-s4', chapterId: 'math-a13', number: 57.4, title: 'Definite Integrals as Limits of Sums', description: 'The definite integral defined as the limit of a sum.' },
  { id: 'math-a13-s5', chapterId: 'math-a13', number: 57.5, title: 'Properties & the Fundamental Theorem', description: 'The properties of definite integrals and the fundamental theorem of integral calculus.' },
  { id: 'math-a13-s6', chapterId: 'math-a13', number: 57.6, title: 'Areas Bounded by Simple Curves', description: 'The application of definite integrals to the determination of areas bounded by simple curves.' },
  // ---- Unit 14 · Differential Equations (official section 8) ----
  { id: 'math-a14-s1', chapterId: 'math-a14', number: 58.1, title: 'Formation of Differential Equations', description: 'The formation of ordinary differential equations.' },
  { id: 'math-a14-s2', chapterId: 'math-a14', number: 58.2, title: 'Homogeneous First-Order Equations', description: 'Solutions of homogeneous differential equations of first order and first degree.' },
  { id: 'math-a14-s3', chapterId: 'math-a14', number: 58.3, title: 'Separation of Variables', description: 'The separation of variables method for first-order equations.' },
  { id: 'math-a14-s4', chapterId: 'math-a14', number: 58.4, title: 'Linear First-Order Equations', description: 'Linear first order differential equations and their solutions.' },
  // ---- Unit 15 · Vector Algebra (official section 9) ----
  { id: 'math-a15-s1', chapterId: 'math-a15', number: 59.1, title: 'Vector Addition & Scalar Multiplication', description: 'Addition of vectors and multiplication by scalars, with their geometric meaning.' },
  { id: 'math-a15-s2', chapterId: 'math-a15', number: 59.2, title: 'Dot & Cross Products', description: 'The dot and cross products of vectors and their computation and uses.' },
  { id: 'math-a15-s3', chapterId: 'math-a15', number: 59.3, title: 'Scalar & Vector Triple Products', description: 'The scalar and vector triple products and their geometrical interpretations.' },
]
