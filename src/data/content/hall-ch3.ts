import type { SectionContent } from '../library'

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 3: Vectors (sections 3.1–3.3, ids hall-ch3-s1..s3)
// ============================================================================

export const hallCh3Content: SectionContent[] = [
  // ------------------------------------------------------------- 3.1
  {
    sectionId: 'hall-ch3-s1',
    readingTime: 6,
    intro: "What is physics? The tornado moved at 60 km/h northeast — a direction is half the story. Scalars carry size, vectors carry size and direction, and the laws of mechanics are written in vectors. This section installs the vocabulary: what a vector is, how to add them geometrically, and how to reduce them to components — the move that turns drawing into arithmetic.",
    objectives: [
      "Distinguish vector from scalar quantities and write vectors with proper notation",
      "Add vectors geometrically by the head-to-tail rule and find resultants",
      "Resolve a vector into components and rebuild it from them, handling the quadrant ambiguity",
    ],
    concepts: [
      {
        term: 'Vectors and scalars',
        kind: 'definition',
        statement: "**A scalar is fully specified by a number with a unit (mass, time, temperature). A vector requires a magnitude and a direction (displacement, velocity, force, acceleration).** In print a vector appears in boldface with an arrow ($\\vec a$); its magnitude, a nonnegative scalar with the same units, is written $a$ or $|\\vec a|$.",
        detail: "The test is simple: if reversing the direction makes a different physical situation, the quantity is a vector.",
      },
      {
        term: 'Adding vectors geometrically',
        kind: 'method',
        statement: "**Head to tail: place the tail of the second vector at the head of the first; the sum — the resultant — runs from the free tail to the free head.** The order does not matter: vectors add commutatively, and drawing both orders from a common tail produces a parallelogram.",
        detail: "A displacement of 3 km east followed by 4 km north sums to 5 km at 53° north of east — the 3-4-5 triangle in the wild.",
      },
      {
        term: 'Components',
        kind: 'definition',
        statement: "**The components $a_x$ and $a_y$ are the projections of $\\vec a$ onto the coordinate axes: $a_x = a\\cos\\theta$ and $a_y = a\\sin\\theta$, with $\\theta$ measured from the $+x$ direction toward $+y$.**",
        detail: "Components are scalars with signs: a vector pointing into the third quadrant has both components negative, and the signs are the whole quadrant story.",
      },
      {
        term: 'Rebuilding a vector',
        kind: 'method',
        statement: "**From components: $a = \\sqrt{a_x^2 + a_y^2}$ and $\\theta = \\tan^{-1}(a_y/a_x)$ — with the quadrant fixed by the signs of the components.** When both components are negative, add 180° to the calculator's answer.",
        detail: "The inverse-tangent key cannot distinguish first from third quadrant (or second from fourth); the component signs can. This is the single most common vector error.",
      },
      {
        term: 'Why components win',
        kind: 'insight',
        statement: "**Geometric addition needs drafting skill; component addition needs only arithmetic.** Resolve everything, add the columns, rebuild — every vector computation in the rest of this book is actually done this way.",
        detail: "A calculator never drew a parallelogram in its life, and it never needed to.",
      },
    ],
    figures: [
      {
        caption: "Resolving $\\vec a$ into components: $a_x = a\\cos\\theta$ and $a_y = a\\sin\\theta$, with $\\theta$ measured from the $+x$ direction. The vector, its components and the dashed lines always close a right triangle, so $a = \\sqrt{a_x^2 + a_y^2}$ on the way back.",
        svg: `<svg viewBox="0 0 720 320" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vector component resolution"><line x1="100" y1="260" x2="668" y2="260" stroke="currentColor" stroke-width="1.5"/><polygon points="668,260 658,256 658,264" fill="currentColor"/><line x1="130" y1="290" x2="130" y2="42" stroke="currentColor" stroke-width="1.5"/><polygon points="130,42 126,52 134,52" fill="currentColor"/><text x="652" y="248" font-size="13" font-style="italic" fill="currentColor">x</text><text x="140" y="52" font-size="13" font-style="italic" fill="currentColor">y</text><text x="112" y="280" font-size="12" fill="currentColor">O</text><line x1="326.6" y1="122.3" x2="326.6" y2="260" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.6"/><line x1="130" y1="122.3" x2="326.6" y2="122.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.6"/><path d="M 316.6 122.3 L 316.6 132.3 L 326.6 132.3" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="130" y1="260" x2="322" y2="125" stroke="currentColor" stroke-width="3"/><polygon points="326.6,122.3 318.0,134.4 312.2,126.2" fill="currentColor"/><line x1="130" y1="260" x2="320" y2="260" stroke="currentColor" stroke-width="2.5"/><polygon points="326.6,260 314.6,256 314.6,264" fill="currentColor"/><line x1="130" y1="260" x2="130" y2="134" stroke="currentColor" stroke-width="2.5"/><polygon points="130,122.3 126,134.3 134,134.3" fill="currentColor"/><text x="248" y="182" font-size="15" font-style="italic" font-weight="bold" fill="currentColor">a</text><text x="230" y="286" font-size="13" text-anchor="middle" fill="currentColor">a<tspan dy="4" font-size="10">x</tspan><tspan dy="-4"> = a cos θ</tspan></text><text x="142" y="115" font-size="13" fill="currentColor">a<tspan dy="4" font-size="10">y</tspan><tspan dy="-4"> = a sin θ</tspan></text><path d="M 170 260 A 40 40 0 0 0 162.8 237.1" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="185" y="252" font-size="13" font-style="italic" fill="currentColor">θ</text><rect x="415" y="62" width="285" height="86" rx="8" fill="none" stroke="currentColor" stroke-dasharray="5 4" opacity="0.5"/><text x="432" y="94" font-size="13" fill="currentColor">magnitude: a = √(a<tspan dy="4" font-size="10">x</tspan><tspan dy="-4">² + a</tspan><tspan dy="4" font-size="10">y</tspan><tspan dy="-4">²)</tspan></text><text x="432" y="126" font-size="13" fill="currentColor">direction: θ = tan⁻¹(a<tspan dy="4" font-size="10">y</tspan><tspan dy="-4">/a</tspan><tspan dy="4" font-size="10">x</tspan><tspan dy="-4">), quadrant from signs</tspan></text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Resolving and rebuilding',
        problem: "(a) A displacement $\\vec r$ has magnitude 12.0 m and direction 40° north of east. Find its components. (b) A vector has components $a_x = -5.0$ m and $a_y = -2.0$ m. Find its magnitude and direction.",
        steps: [
          { label: '(a) Resolve', text: "$r_x = 12.0\\cos 40° = 12.0(0.766) = 9.19$ m and $r_y = 12.0\\sin 40° = 12.0(0.643) = 7.71$ m — both positive, so the vector points up-right." },
          { label: '(b) Magnitude', text: "$a = \\sqrt{(-5.0)^2 + (-2.0)^2} = \\sqrt{29} = 5.4$ m." },
          { label: '(b) Direction', text: "$\\tan^{-1}(2.0/5.0) = 21.8°$, but both components are negative — third quadrant — so $\\theta = 180° + 21.8° = 201.8°$, equivalently 21.8° south of west." },
        ],
        result: "(a) (9.19 m, 7.71 m); (b) 5.4 m at 201.8° — the calculator's bare 21.8° would be wrong.",
      },
      {
        title: "Vectors and Their Components: components to magnitude",
        problem: "A displacement has components $A_x = 4\\ \\text{m}$, $A_y = 5\\ \\text{m}$. Find $|\\vec A|$ and $\\vec A\\cdot\\vec B$ with $\\vec B = (2\\hat{i}-\\hat{j})\\ \\text{m}$.",
        steps: [
          { label: "Magnitude", text: "$|\\vec A| = \\sqrt{4^2+5^2} = \\sqrt{41} = 6.4\\ \\text{m}$." },
          { label: "Dot", text: "$\\vec A\\cdot\\vec B = (4)(2)+(5)(-1) = 3\\ \\text{m}^2$." },
          { label: "Angle check", text: "$\\cos\\phi = 3/(6.4\\times \\sqrt{5})$, so $\\phi \\approx 77.9^\\circ$." },
        ],
        result: "$|\\vec A| = 6.4\\ \\text{m}$; dot $= 3\\ \\text{m}^2$.",
      },
    ],
    keyTakeaways: [
      "Vectors carry magnitude and direction; scalars only magnitude — a vector is never equal to a scalar.",
      "Head-to-tail addition is commutative and equivalent to the parallelogram rule.",
      "Components turn geometry into arithmetic: $a_x = a\\cos\\theta$, $a_y = a\\sin\\theta$ — and on the way back, the component signs fix the quadrant.",
    ],
    quiz: [
      {
        q: "Which pair could be the components of a vector of magnitude 10?",
        options: ["(5, 5)", "(6, 8)", "(4, 3)", "(9, 12)"],
        answer: 1,
        explanation: "Only $(6, 8)$ passes $\\sqrt{6^2 + 8^2} = 10$; (5, 5) gives 7.1, (4, 3) gives 5, and (9, 12) gives 15.",
      },
      {
        q: "A vector points due south (along $-y$). Its x-component is",
        options: ["equal to the vector's magnitude", "positive", "zero", "negative"],
        answer: 2,
        explanation: "The angle from $+x$ is 270°, and $\\cos 270° = 0$: a vector has no projection onto a direction perpendicular to itself.",
      },
      {
        q: "The component of $\\vec a$ along a direction perpendicular to $\\vec a$ is",
        options: ["$-a$", "$a$", "zero", "undefined"],
        answer: 2,
        explanation: "The projection uses $\\cos 90° = 0$ — the geometric content of the dot product's vanishing for perpendicular vectors.",
      },
      {
        q: "A vector has $a_x < 0$ and $a_y > 0$. Which statement is correct?",
        options: [
          "its magnitude is negative",
          "it points into the third quadrant",
          "it points into the second quadrant",
          "its direction angle from $+x$ is between 0° and 90°",
        ],
        answer: 2,
        explanation: "Left and up is the second quadrant; the direction angle from $+x$ lies between 90° and 180°.",
      },
    ],
  },
  // ------------------------------------------------------------- 3.2
  {
    sectionId: 'hall-ch3-s2',
    readingTime: 6,
    intro: "What is physics? Once vectors are columns of numbers, the next step is a notation that lets the equations themselves carry direction. Unit vectors — one unit long, pointing along the axes — play that role: any vector becomes a sum of axis-aligned pieces, and adding vectors becomes adding pairs of numbers. With this language, the laws of physics (starting with Newton's $\\vec F = m\\vec a$ in Chapter 5) can be written as single vector equations valid in any coordinate system.",
    objectives: [
      "Write any vector in unit-vector form and read off its components",
      "Add vectors by adding components, then recover magnitude and direction",
      "Recognize unit-vector notation in the vector equations of later chapters",
    ],
    concepts: [
      {
        term: 'Unit vectors',
        kind: 'definition',
        statement: "**$\\hat{i}$, $\\hat{j}$ and $\\hat{k}$ are vectors of magnitude 1 pointing along $+x$, $+y$ and $+z$.** Multiplying one by a scalar produces an axis-aligned vector of that length.",
        detail: "A caret always signals a unit vector; $\\vec a/a$ is the unit vector along $\\vec a$ — the direction of $\\vec a$ stripped of its length.",
      },
      {
        term: 'Unit-vector form',
        kind: 'notation',
        statement: "**$\\vec a = a_x\\hat{i} + a_y\\hat{j} + a_z\\hat{k}$** — the vector written as a package of its components.",
        detail: "Displacement, velocity, force all unpack this way; the notation is why 3D problems are no harder than 2D — just one more column.",
      },
      {
        term: 'Adding by components',
        kind: 'law',
        statement: "**$\\vec c = \\vec a + \\vec b$ means $c_x = a_x + b_x$, $c_y = a_y + b_y$, $c_z = a_z + b_z$ — and subtraction is the same with minus signs.** The geometric head-to-tail rule is thereby automated.",
        detail: "Multiply a vector by a scalar and every component scales: $\\vec d = 5\\vec a$ has components $5a_x, 5a_y, 5a_z$.",
      },
      {
        term: 'The three-step strategy',
        kind: 'method',
        statement: "**To add vectors: (1) resolve each into components in one chosen frame; (2) add the columns; (3) rebuild magnitude and direction from the sums.**",
        detail: "Steps 1 and 3 are where the errors live — above all, losing the quadrant of the answer.",
      },
      {
        term: "Unit Vectors, Adding Vectors by Components: solution protocol",
        kind: "method",
        statement: "**Solve Unit Vectors, Adding Vectors by Components problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is resolving vectors into components and adding componentwise; the working equation is $\\vec A = A_x\\hat{i}+A_y\\hat{j}$, $A = \\sqrt{A_x^2+A_y^2}$, $\\vec A\\cdot\\vec B = AB\\cos\\phi$, $|\\vec A\\times\\vec B| = AB\\sin\\phi$; every substitution must carry its units so the final unit (magnitude versus components, and $\\hat{i},\\hat{j}$ bookkeeping) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against components of order $1$--$100$ in textbook problems; dot/cross formulas need the angle $\\phi$ between tails; components need one fixed frame.",
      },
    ],
    examples: [
      {
        title: 'Adding two displacements',
        problem: "A courier walks displacement $\\vec a = (8.0\\hat{i} + 3.0\\hat{j})$ m along one leg of a route, then $\\vec b = (-5.0\\hat{i} - 1.0\\hat{j})$ m along the next. Find the magnitude and direction of the resultant displacement.",
        steps: [
          { label: 'Add the columns', text: "$c_x = 8.0 + (-5.0) = 3.0$ m and $c_y = 3.0 + (-1.0) = 2.0$ m, so $\\vec c = (3.0\\hat{i} + 2.0\\hat{j})$ m." },
          { label: 'Magnitude', text: "$c = \\sqrt{(3.0)^2 + (2.0)^2} = \\sqrt{13} = 3.6$ m." },
          { label: 'Direction', text: "Both components positive — first quadrant: $\\theta = \\tan^{-1}(2.0/3.0) = 34°$ from the $+x$ direction." },
        ],
        result: "$\\vec c = (3.0\\hat{i} + 2.0\\hat{j})$ m, magnitude 3.6 m at 34°.",
      },
      {
        title: "Unit Vectors, Adding Vectors by Components: components to magnitude",
        problem: "A displacement has components $A_x = 5\\ \\text{m}$, $A_y = 6\\ \\text{m}$. Find $|\\vec A|$ and $\\vec A\\cdot\\vec B$ with $\\vec B = (2\\hat{i}-\\hat{j})\\ \\text{m}$.",
        steps: [
          { label: "Magnitude", text: "$|\\vec A| = \\sqrt{5^2+6^2} = \\sqrt{61} = 7.81\\ \\text{m}$." },
          { label: "Dot", text: "$\\vec A\\cdot\\vec B = (5)(2)+(6)(-1) = 4\\ \\text{m}^2$." },
          { label: "Angle check", text: "$\\cos\\phi = 4/(7.81\\times \\sqrt{5})$, so $\\phi \\approx 76.8^\\circ$." },
        ],
        result: "$|\\vec A| = 7.81\\ \\text{m}$; dot $= 4\\ \\text{m}^2$.",
      },
    ],
    keyTakeaways: [
      "Unit vectors $\\hat{i}, \\hat{j}, \\hat{k}$ package direction; any vector is a weighted sum of them.",
      "Addition = column addition of components; rebuild the magnitude with Pythagoras.",
      "The answer's quadrant comes from the signs of the summed components, never from the calculator alone.",
    ],
    quiz: [
      {
        q: "Which of these is a unit vector?",
        options: ["$(3\\hat{i} + 4\\hat{j})/5$", "$\\hat{i} + \\hat{j}$", "$3\\hat{i}$", "$\\hat{j}/2$"],
        answer: 0,
        explanation: "Its magnitude is $\\sqrt{3^2 + 4^2}/5 = 5/5 = 1$; $\\hat{i} + \\hat{j}$ has magnitude $\\sqrt{2}$, and the others are not unit length either.",
      },
      {
        q: "The sum $\\vec a + \\vec b$ for $\\vec a = (2\\hat{i} - 6\\hat{j})$ and $\\vec b = (-4\\hat{i} + 2\\hat{j})$ is",
        options: ["$-2\\hat{i} + 8\\hat{j}$", "$6\\hat{i} - 8\\hat{j}$", "$-2\\hat{i} - 4\\hat{j}$", "$-6\\hat{i} + 8\\hat{j}$"],
        answer: 2,
        explanation: "Add componentwise: $x$ gives $2 + (-4) = -2$; $y$ gives $-6 + 2 = -4$.",
      },
      {
        q: "The magnitude of $\\vec c = 3\\hat{i} + 2\\hat{j}$ is",
        options: ["13", "5.0", "3.6", "2.2"],
        answer: 2,
        explanation: "$\\sqrt{3^2 + 2^2} = \\sqrt{13} \\approx 3.6$; the 13 is the squared magnitude, a classic slip.",
      },
      {
        q: "Two nonzero vectors can sum to zero",
        options: [
          "never",
          "only if both point along an axis",
          "whenever their x-components cancel",
          "only if they have equal magnitudes and opposite directions",
        ],
        answer: 3,
        explanation: "Each component of the sum must vanish, which for two vectors forces $\\vec b = -\\vec a$: same length, opposite direction.",
      },
    ],
  },
  // ------------------------------------------------------------- 3.3
  {
    sectionId: 'hall-ch3-s3',
    readingTime: 7,
    intro: "What is physics? Multiplying two vectors is not one operation but two, because two different questions get asked: how much do they point the same way, and how much do they point around each other. The dot product answers the first — it will price out work in Chapter 7 and flux in Chapter 23. The cross product answers the second — it will run torque in Chapter 10 and every magnetic force in Chapter 28. Learn both here, once, with components and geometry in agreement.",
    objectives: [
      "Compute the dot product from magnitudes and the angle, and from components; use it to find the angle between vectors",
      "Compute the cross product's magnitude and direction (right-hand rule), and its components from the determinant",
      "State the special cases — parallel, antiparallel, perpendicular — for both products",
    ],
    concepts: [
      {
        term: 'Scalar (dot) product',
        kind: 'definition',
        statement: "**$\\vec a \\cdot \\vec b = ab\\cos\\phi$** — a scalar, with $\\phi$ the angle between the vectors drawn tail to tail. Perpendicular vectors have dot product zero; parallel ones have $ab$.",
        detail: "The component recipe $\\vec a \\cdot \\vec b = a_xb_x + a_yb_y + a_zb_z$ makes computation trivial, and equating the two forms yields the angle: $\\cos\\phi = (\\vec a\\cdot\\vec b)/ab$.",
      },
      {
        term: 'Vector (cross) product',
        kind: 'definition',
        statement: "**$\\vec a \\times \\vec b$ has magnitude $ab\\sin\\phi$ and direction given by the right-hand rule**: curl the fingers of your right hand from $\\vec a$ toward $\\vec b$, and your thumb gives the product's direction, perpendicular to both vectors.",
        detail: "The magnitude equals the area of the parallelogram the two vectors span — a geometric fact that returns as torque and angular momentum themselves.",
      },
      {
        term: 'Cross product by components',
        kind: 'method',
        statement: "**Evaluate the determinant** $$\\vec a \\times \\vec b = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ a_x & a_y & a_z \\\\ b_x & b_y & b_z \\end{vmatrix}$$ — expand along the first row, keeping the signs of the cofactors straight.",
        detail: "The skeleton to memorize: $\\hat{i} \\times \\hat{j} = \\hat{k}$, $\\hat{j} \\times \\hat{k} = \\hat{i}$, $\\hat{k} \\times \\hat{i} = \\hat{j}$ — cyclic — and any product reversed flips sign.",
      },
      {
        term: 'Anticommutation',
        kind: 'law',
        statement: "**$\\vec a \\times \\vec b = -\\vec b \\times \\vec a$** — the cross product is the one familiar product that reverses under exchange. The dot product, by contrast, is commutative: $\\vec a \\cdot \\vec b = \\vec b \\cdot \\vec a$.",
        detail: "The right-hand rule makes the reversal visible: curling from $\\vec b$ to $\\vec a$ points the thumb the other way.",
      },
      {
        term: 'Special angles',
        kind: 'insight',
        statement: "**Parallel ($\\phi = 0°$): dot maximal, cross zero. Perpendicular ($\\phi = 90°$): dot zero, cross maximal. Antiparallel ($\\phi = 180°$): dot most negative, cross zero.** Each product is blind to exactly what the other measures.",
        detail: "One product measures alignment, the other measures separation from alignment — which is why physics needs both.",
      },
    ],
    examples: [
      {
        title: 'One pair of vectors, both products',
        problem: "Let $\\vec a = 2\\hat{i} - 3\\hat{j} + \\hat{k}$ and $\\vec b = -\\hat{i} + 2\\hat{j} + 4\\hat{k}$. Find (a) the angle between them; (b) $\\vec a \\times \\vec b$ and its magnitude.",
        steps: [
          { label: 'Dot product in components', text: "$\\vec a \\cdot \\vec b = (2)(-1) + (-3)(2) + (1)(4) = -2 - 6 + 4 = -4$." },
          { label: 'Magnitudes', text: "$a = \\sqrt{4 + 9 + 1} = \\sqrt{14} = 3.74$ and $b = \\sqrt{1 + 4 + 16} = \\sqrt{21} = 4.58$." },
          { label: 'Angle', text: "$\\cos\\phi = -4/(3.74 \\times 4.58) = -0.233$, so $\\phi = 103.5°$ — obtuse, as the negative dot already suggested." },
          { label: 'Cross product', text: "The determinant gives $\\vec a \\times \\vec b = (-12 - 2)\\hat{i} - (8 + 1)\\hat{j} + (4 - 3)\\hat{k} = -14\\hat{i} - 9\\hat{j} + \\hat{k}$, of magnitude $\\sqrt{196 + 81 + 1} = \\sqrt{278} = 16.7$." },
          { label: 'Check', text: "$ab\\sin\\phi = 17.15 \\times \\sin 103.5° = 16.7$ — geometry and determinant agree." },
        ],
        result: "$\\phi = 103.5°$; $\\vec a \\times \\vec b = -14\\hat{i} - 9\\hat{j} + \\hat{k}$ with magnitude 16.7.",
      },
      {
        title: "Multiplying Vectors: components to magnitude",
        problem: "A displacement has components $A_x = 6\\ \\text{m}$, $A_y = 4\\ \\text{m}$. Find $|\\vec A|$ and $\\vec A\\cdot\\vec B$ with $\\vec B = (2\\hat{i}-\\hat{j})\\ \\text{m}$.",
        steps: [
          { label: "Magnitude", text: "$|\\vec A| = \\sqrt{6^2+4^2} = \\sqrt{52} = 7.21\\ \\text{m}$." },
          { label: "Dot", text: "$\\vec A\\cdot\\vec B = (6)(2)+(4)(-1) = 8\\ \\text{m}^2$." },
          { label: "Angle check", text: "$\\cos\\phi = 8/(7.21\\times \\sqrt{5})$, so $\\phi \\approx 60.3^\\circ$." },
        ],
        result: "$|\\vec A| = 7.21\\ \\text{m}$; dot $= 8\\ \\text{m}^2$.",
      },
    ],
    keyTakeaways: [
      "$\\vec a \\cdot \\vec b = ab\\cos\\phi = a_xb_x + a_yb_y + a_zb_z$ — a scalar measuring alignment; zero for perpendicular vectors.",
      "$\\vec a \\times \\vec b$ has magnitude $ab\\sin\\phi$ and the right-hand-rule direction — a vector measuring perpendicularity; zero for parallel vectors.",
      "$\\vec a \\times \\vec b = -\\vec b \\times \\vec a$: the cross product is anticommutative, and its magnitude is the parallelogram area.",
    ],
    quiz: [
      {
        q: "Two vectors have nonzero magnitudes and their dot product is zero. Then they are",
        options: ["parallel", "equal in magnitude", "perpendicular", "antiparallel"],
        answer: 2,
        explanation: "$ab\\cos\\phi = 0$ with $a, b \\ne 0$ forces $\\cos\\phi = 0$: a 90° angle.",
      },
      {
        q: "$\\hat{i} \\times \\hat{j} =$",
        options: ["$\\hat{k}$", "$-\\hat{k}$", "1", "0"],
        answer: 0,
        explanation: "The cyclic rule: curling from $+x$ toward $+y$ points the right thumb along $+z$.",
      },
      {
        q: "The magnitude of $\\vec a \\times \\vec b$ is largest when the angle between the vectors is",
        options: ["0°", "45°", "180°", "90°"],
        answer: 3,
        explanation: "$|\\vec a \\times \\vec b| = ab\\sin\\phi$ peaks at $\\sin 90° = 1$ and vanishes at both 0° and 180°.",
      },
      {
        q: "Swapping the order of a cross product",
        options: ["doubles it", "leaves it unchanged", "turns it into a dot product", "reverses the product's direction"],
        answer: 3,
        explanation: "$\\vec b \\times \\vec a = -\\vec a \\times \\vec b$: anticommutation, visible directly in the right-hand rule.",
      },
    ],
  },
]
