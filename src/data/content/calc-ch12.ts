import type { SectionContent } from '../library'

// ============================================================================
// Stewart, Clegg, Watson — Calculus: Early Transcendentals, 9th Edition
// Chapter 12: Vectors and the Geometry of Space (Sections 12.1 – 12.6,
// Stewart pages 651–701). Master study content. Worked-example numbers are
// the book’s own or are fully verified by direct computation. Math is LaTeX
// rendered by KaTeX via the RichText $...$ / $$...$$ pipeline; figures are
// authored inline SVG with honestly sampled curves (oblique projection with
// +x toward the lower left, +y to the right, +z up, right-handed).
// ============================================================================

export const calcCh12Content: SectionContent[] = [
  // ------------------------------------------------------------------ 12.1
  {
    sectionId: 'calc-ch12-s1',
    readingTime: 8,
    intro: 'To locate a point in space we need three numbers, not two, and the price of the extra number is that we must fix not just axes but an **orientation** — the right-hand rule that decides which way the positive $z$-axis points. With the coordinate system in place, the distance formula falls out of the Pythagorean theorem applied twice, spheres become the set of points at a fixed distance from a center, and equations in three variables start drawing surfaces in space. The chapter’s whole geometry of lines, planes and curved surfaces is built on this one section.',
    objectives: [
      'Set up a right-handed three-dimensional rectangular coordinate system and plot points, identifying octants',
      'Derive and use the distance formula $|P_1P_2| = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$ from Pythagoras applied twice',
      'Find the equation of a sphere with given center and radius, and recover center and radius by completing the square',
      'Find midpoints, distances to coordinate planes and to coordinate axes',
      'Analyze surfaces in space by their traces in the planes $z = k$, $x = k$ and $y = k$',
      'Describe solid regions such as balls by inequalities',
    ],
    concepts: [
      {
        term: 'Three-dimensional rectangular coordinates',
        kind: 'definition',
        statement: 'A **three-dimensional rectangular coordinate system** starts from a point $O$ (the origin) and three mutually perpendicular directed lines through it: the $x$-, $y$- and $z$-axes. Each point $P$ in space is assigned a triple $(x, y, z)$ of coordinates. The system is **right-handed**: if the fingers of the right hand curl from the positive $x$-axis toward the positive $y$-axis, the thumb points along the positive $z$-axis.',
        detail: 'The three axes determine the $xy$-, $yz$- and $xz$-**coordinate planes**, which divide space into eight **octants** labeled I through VIII, the first octant being the one where $x > 0$, $y > 0$ and $z > 0$. The point $(a, b, c)$ lies $|a|$ units from the $yz$-plane, $|b|$ units from the $xz$-plane and $|c|$ units from the $xy$-plane, on the side picked by the signs.',
      },
      {
        term: 'The distance formula in space',
        kind: 'theorem',
        statement: 'The distance between $P_1(x_1, y_1, z_1)$ and $P_2(x_2, y_2, z_2)$ is $$|P_1P_2| = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}.$$',
        detail: 'The derivation applies the Pythagorean theorem twice. First drop from $P_2$ to the point $(x_2, y_2, z_1)$ directly below it: the horizontal leg from $P_1$ to that foot has length $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$, the plane formula, and the vertical leg has length $|z_2 - z_1|$. A second Pythagoras, on the right triangle these two legs form with $|P_1P_2|$ as hypotenuse, gives the formula — space adds one squared difference to the planar distance, nothing more.',
      },
      {
        term: 'Equation of a sphere',
        kind: 'theorem',
        statement: 'The **sphere** with center $C(a, b, c)$ and radius $r$ is the set of points $P(x, y, z)$ with $|PC| = r$, that is, $$(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2.$$ Equivalently, any second-degree equation $x^2 + y^2 + z^2 + Ax + By + Cz + D = 0$ with $\\tfrac{1}{4}(A^2+B^2+C^2) - D > 0$ is a sphere after completing the square.',
        detail: 'This is the exact 3D analogue of the circle equation of Chapter 1: fixed distance from a fixed point. Expanding the boxed equation produces $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + (a^2+b^2+c^2-r^2) = 0$, which is how a sphere in disguise is recognized: equal nonzero coefficients on the three squared terms, no cross terms.',
      },
      {
        term: 'Completing the square in three variables',
        kind: 'method',
        statement: 'To identify the surface $x^2 + y^2 + z^2 + Ax + By + Cz + D = 0$, complete the square in each variable: $x^2 + Ax = \\left(x + \\tfrac{A}{2}\\right)^2 - \\tfrac{A^2}{4}$, and likewise for $y$ and $z$. The equation becomes $(x + \\tfrac{A}{2})^2 + (y + \\tfrac{B}{2})^2 + (z + \\tfrac{C}{2})^2 = \\tfrac{A^2+B^2+C^2}{4} - D$, a sphere with center $(-\\tfrac{A}{2}, -\\tfrac{B}{2}, -\\tfrac{C}{2})$ and radius the square root of the right side — provided that number is positive; if it is zero the surface is a single point, and if negative the surface is empty.',
        detail: 'The midpoint formula rides along: $\\left(\\tfrac{x_1+x_2}{2}, \\tfrac{y_1+y_2}{2}, \\tfrac{z_1+z_2}{2}\\right)$ is the midpoint of $P_1P_2$ and, being equidistant from the endpoints of every diameter, is the natural center of any sphere having $P_1P_2$ as a diameter.',
      },
      {
        term: 'Traces of a surface',
        kind: 'method',
        statement: 'A **trace** of a surface is the curve of intersection of the surface with a plane, most usefully the horizontal planes $z = k$ and the coordinate planes $x = 0$, $y = 0$. To find the trace in $z = k$, substitute $k$ for $z$ and read the resulting plane curve.',
        detail: 'For the sphere $(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$, the trace in the plane $z = k$ is the circle $(x-a)^2 + (y-b)^2 = r^2 - (k-c)^2$, which has radius $\\sqrt{r^2 - (k-c)^2}$ when $|k - c| < r$, shrinks to a point when $|k-c| = r$ (the plane just grazes the sphere) and does not exist when $|k-c| > r$. Traces are the standard tool for visualizing every surface in this chapter.',
      },
      {
        term: 'Regions described by inequalities',
        kind: 'insight',
        statement: 'Equations describe surfaces; **inequalities describe solids**. The ball of radius $r$ centered at the origin is $x^2 + y^2 + z^2 \\le r^2$; its interior alone is $x^2 + y^2 + z^2 < r^2$; the region above the $xy$-plane is $z > 0$.',
        detail: 'Reading a region off an inequality is the reverse of reading a surface off an equation: $1 \\le x^2 + y^2 + z^2 \\le 4$ is the solid shell between the spheres of radii 1 and 2, and adding $z \\ge 0$ saws it in half. This habit of describing sets by coordinate conditions is exactly how the calculus of Chapter 14 will specify its regions of integration.',
      },
    ],
    figures: [
      {
        caption: 'The point $P(3, 4, 5)$ in a right-handed coordinate system, with the rectangular box of edges $3$, $4$ and $5$ that connects it to the origin. Its foot in the $xy$-plane is $Q(3, 4, 0)$: Pythagoras gives $|OQ| = \\sqrt{3^2 + 4^2} = 5$, and a second Pythagoras on the right triangle $OQP$ gives $|OP| = \\sqrt{25 + 25} = 5\\sqrt{2}$. The first octant, where all three coordinates are positive, is labeled.',
        svg: '<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="Three-dimensional axes with a plotted point P of coordinates 3, 4, 5, its rectangular box back to the origin, and the foot Q in the xy-plane.">\n  <polyline points="369.9,199.3 193.1,292.1" fill="none" stroke="currentColor" stroke-width="1.8"/>\n  <polygon points="193.1,292.1 199.6,285.1 202.6,290.8" fill="currentColor" stroke="none"/>\n  <polyline points="316.2,209.1 506.6,256.7" fill="none" stroke="currentColor" stroke-width="1.8"/>\n  <polygon points="506.6,256.7 497.1,257.6 498.6,251.4" fill="currentColor" stroke="none"/>\n  <polyline points="340,238.8 340,11" fill="none" stroke="currentColor" stroke-width="1.8"/>\n  <polygon points="340,11 343.2,20 336.8,20" fill="currentColor" stroke="none"/>\n  <polyline points="258.4,257.8 394.4,291.8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/>\n  <polyline points="476,249 394.4,291.8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/>\n  <polyline points="258.4,257.8 258.4,87.8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/>\n  <polyline points="476,249 476,79" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/>\n  <polygon points="340,215 258.4,257.8 394.4,291.8 476,249 476,79 394.4,121.8 258.4,87.8" fill="currentColor" fill-opacity="0.05" stroke="none"/>\n  <polyline points="340,215 394.4,291.8" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polyline points="394.4,291.8 394.4,121.8" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polyline points="394.4,121.8 258.4,87.8" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.85"/>\n  <polyline points="394.4,121.8 476,79" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.85"/>\n  <polyline points="390.4,286.1 390.4,279.1 394.4,284.8" fill="none" stroke="currentColor" stroke-width="1"/>\n  <polyline points="340,215 394.4,121.8" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="6 4"/>\n  <circle cx="394.4" cy="121.8" r="3.5" fill="currentColor" stroke="none"/>\n  <circle cx="394.4" cy="291.8" r="3.5" fill="currentColor" stroke="none"/>\n  <circle cx="340" cy="215" r="3.5" fill="currentColor" stroke="none"/>\n  <text x="181" y="308" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">x</text>\n  <text x="514" y="266" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">y</text>\n  <text x="347" y="19" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">z</text>\n  <text x="326" y="231" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">O</text>\n  <text x="400" y="116" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">P(3, 4, 5)</text>\n  <text x="400" y="306" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">Q(3, 4, 0)</text>\n  <text x="302" y="258" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">|OQ| = 5</text>\n  <text x="400" y="210" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">|QP| = 5</text>\n  <text x="362" y="158" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f59e0b">|OP| = 5√2</text>\n  <text x="452" y="336" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">first octant: x &gt; 0, y &gt; 0, z &gt; 0</text>\n</svg>',
        afterConcept: 2,
      },
      {
        caption: 'The sphere $(x - 0.5)^2 + (y - 0.5)^2 + (z - 0.9)^2 = 2.25$ as a wireframe of its great circles, with center $C$, radius $r$ drawn to a point $P$ on the surface, and the horizontal trace in the plane $z = 1.8$: the circle $(x-0.5)^2 + (y-0.5)^2 = 1.44$, of radius $\\sqrt{r^2 - 0.9^2} = 1.2$. Every horizontal trace of a sphere is a circle, shrinking to a point where the plane grazes the sphere.',
        svg: '<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="Wireframe sphere with center, radius segment, and a circular horizontal trace above the equator.">\n  <polyline points="351.1,203.9 168.1,300" fill="none" stroke="currentColor" stroke-width="1.5"/>\n  <polygon points="168.1,300 174.6,293 177.5,298.7" fill="currentColor" stroke="none"/>\n  <polyline points="308,209.5 514.8,261.2" fill="none" stroke="currentColor" stroke-width="1.5"/>\n  <polygon points="514.8,261.2 505.3,262.1 506.8,255.9" fill="currentColor" stroke="none"/>\n  <polyline points="330,237 330,21.4" fill="none" stroke="currentColor" stroke-width="1.5"/>\n  <polygon points="330,21.4 333.2,30.4 326.8,30.4" fill="currentColor" stroke="none"/>\n  <polyline points="387.2,162.4 381.2,161.1 374.9,160 368.3,159.1 361.4,158.4 354.4,158 347.1,157.9 339.8,158 332.4,158.3 325.1,158.9 317.8,159.7 310.6,160.7 303.6,162 296.9,163.5 290.4,165.2 284.3,167" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>\n  <polyline points="281.6,217.9 287.6,219.2 293.9,220.3 300.5,221.2 307.4,221.8 314.4,222.2 321.7,222.4 329,222.3 336.4,222 343.7,221.4 351,220.6 358.2,219.6 365.2,218.3 371.9,216.8 378.4,215.1 384.5,213.3 390.2,211.2 395.5,209 400.4,206.6 404.8,204.2 408.6,201.6 411.8,198.9 414.5,196.2 416.5,193.4 418,190.6 418.7,187.8 418.9,185 418.4,182.2 417.3,179.5 415.5,176.9 413.1,174.4 410.1,172 406.6,169.7 402.5,167.6 397.9,165.7 392.8,164" fill="none" stroke="currentColor" stroke-width="1.8"/>\n  <polyline points="278.6,169.1 273.3,171.3 268.4,173.6 264,176.1 260.2,178.7 257,181.4 254.3,184.1 252.3,186.9 250.8,189.7 250.1,192.5 249.9,195.3 250.4,198.1 251.5,200.8 253.3,203.4 255.7,205.9 258.7,208.3 262.2,210.5 266.3,212.6 270.9,214.6 276,216.3 281.6,217.9" fill="none" stroke="currentColor" stroke-width="1.8"/>\n  <polyline points="387.2,162.4 387,168.3 386.4,174.3 385.4,180.4 384,186.7 382.3,192.9 380.1,199.1 377.7,205.3 374.8,211.3 371.7,217.2 368.3,222.9 364.7,228.3 360.8,233.4 356.7,238.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>\n  <polyline points="281.6,217.9 281.8,212 282.4,206 283.4,199.8 284.8,193.6 286.5,187.4 288.7,181.1 291.1,175 294,169 297.1,163.1 300.5,157.4 304.1,152 308,146.8 312.1,142 316.3,137.6 320.7,133.6 325.2,130 329.8,126.8 334.4,124.1 339,122 343.6,120.3 348.1,119.2 352.5,118.6 356.7,118.6 360.8,119.1 364.7,120.2 368.3,121.8 371.7,123.9 374.8,126.5 377.7,129.6 380.1,133.1 382.3,137.1 384,141.5 385.4,146.3 386.4,151.4 387,156.8" fill="none" stroke="currentColor" stroke-width="1.8"/>\n  <polyline points="352.5,242.7 348.1,246.7 343.6,250.3 339,253.5 334.4,256.1 329.8,258.3 325.2,260 320.7,261.1 316.3,261.6 312.1,261.7 308,261.2 304.1,260.1 300.5,258.5 297.1,256.4 294,253.8 291.1,250.7 288.7,247.1 286.5,243.2 284.8,238.8 283.4,234 282.4,228.9 281.8,223.5 281.6,217.9" fill="none" stroke="currentColor" stroke-width="1.8"/>\n  <polyline points="274.6,203.1 277.2,208.9 280.3,214.5 283.8,219.9 287.7,225.1 292,230.1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>\n  <polyline points="296.5,234.7 301.4,239 306.5,243 311.8,246.5 317.3,249.6 322.9,252.3 328.6,254.5 334.4,256.1 340.2,257.3 345.9,258 351.5,258.2 357,257.8 362.3,256.9 367.4,255.5 372.3,253.7 376.8,251.3 381.1,248.5 385,245.2 388.5,241.5 391.6,237.4 394.2,233 396.4,228.2 398.2,223.2 399.4,217.9 400.1,212.3 400.4,206.6" fill="none" stroke="currentColor" stroke-width="1.8"/>\n  <polyline points="274.6,203.1 272.4,197.2 270.6,191.3 269.4,185.4 268.7,179.5 268.4,173.6 268.7,168 269.4,162.4 270.6,157.1 272.4,152.1 274.6,147.3 277.2,142.9 280.3,138.8 283.8,135.1 287.7,131.8 292,129 296.5,126.6 301.4,124.7 306.5,123.4 311.8,122.5 317.3,122.1 322.9,122.3 328.6,123 334.4,124.1 340.2,125.8 345.9,128 351.5,130.7 357,133.8 362.3,137.3 367.4,141.2 372.3,145.5 376.8,150.2 381.1,155.1 385,160.4 388.5,165.8 391.6,171.4 394.2,177.2 396.4,183.1 398.2,189 399.4,194.9 400.1,200.8 400.4,206.6" fill="none" stroke="currentColor" stroke-width="1.8"/>\n  <polyline points="334.4,190.1 315.9,158.9" fill="none" stroke="#10b981" stroke-width="1.8" stroke-dasharray="4 4"/>\n  <circle cx="334.4" cy="190.1" r="3.5" fill="currentColor" stroke="none"/>\n  <circle cx="315.9" cy="158.9" r="3.5" fill="currentColor" stroke="none"/>\n  <text x="356" y="196" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">C(a, b, c)</text>\n  <text x="300" y="152" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">P</text>\n  <text x="322" y="180" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981">r</text>\n  <text x="181" y="313" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">x</text>\n  <text x="520" y="270" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">y</text>\n  <text x="337" y="19" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">z</text>\n  <polyline points="241.7,159.1 238.5,162.7 235.7,166.2 233.5,169.8 231.9,173.3 230.8,176.7 230.2,180.1 230.2,183.4 230.8,186.5 231.9,189.6 233.6,192.6 235.8,195.4 238.5,198 241.8,200.6 245.5,202.9 249.8,205 254.5,207 259.7,208.8 265.3,210.3" fill="none" stroke="#f59e0b" stroke-width="2"/>\n  <polyline points="265.3,210.3 271.3,211.7 277.7,212.8 284.4,213.7 291.5,214.4 298.9,214.8 306.5,215 314.3,215 322.4,214.8 330.6,214.3 338.9,213.6 347.3,212.6 355.8,211.5 364.3,210.1 372.8,208.5 381.2,206.7 389.5,204.7 397.7,202.5 405.8,200.1 413.6,197.6 421.3,194.9 428.6,192.1 435.7,189.1 442.4,186 448.8,182.8 454.8,179.5 460.4,176.1 465.6,172.7 470.3,169.2 474.5,165.6 478.3,162.1 481.5,158.5 484.3,155 486.5,151.4 488.1,147.9 489.2,144.5" fill="none" stroke="#f59e0b" stroke-width="2"/>\n  <polyline points="489.8,141.1 489.8,137.8 489.2,134.7 488.1,131.6 486.4,128.6 484.2,125.8 481.5,123.2 478.2,120.6 474.5,118.3 470.2,116.2 465.5,114.2 460.3,112.4 454.7,110.9 448.7,109.5 442.3,108.4 435.6,107.5 428.5,106.8 421.1,106.4 413.5,106.2 405.7,106.2 397.6,106.4 389.4,106.9 381.1,107.6 372.7,108.6 364.2,109.7 355.7,111.1 347.2,112.7 338.8,114.5 330.5,116.5 322.3,118.7 314.2,121.1 306.4,123.6 298.7,126.3 291.4,129.1 284.3,132.1 277.6,135.2 271.2,138.4 265.2,141.7 259.6,145.1 254.4,148.5 249.7,152 245.5,155.6" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.6"/>\n  <text x="492" y="126" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f59e0b">trace in z = 1.8: circle, radius 1.2</text>\n</svg>',
        afterConcept: 5,
      },
    ],
    examples: [
      {
        title: 'Plotting a point and measuring to planes and axes',
        problem: 'Plot the point $P(3, 4, 5)$ and find its reflections in the three coordinate planes. How far is $P$ from the $xy$-plane, from the $z$-axis, and from the origin?',
        steps: [
          { label: 'Step 1: Plot', text: 'Start at the origin, go 3 units along the $x$-axis, 4 units parallel to the $y$-axis, then 5 units straight up: $P$ lies in the first octant, the corner of a box of edges 3, 4 and 5.' },
          { label: 'Step 2: Reflect', text: 'Reflection in the $xy$-plane keeps $x$ and $y$ and flips the sign of $z$: $(3, 4, -5)$. Reflection in the $yz$-plane gives $(-3, 4, 5)$, and in the $xz$-plane $(3, -4, 5)$ — each reflection walks the point across one coordinate plane to the mirror octant.' },
          { label: 'Step 3: Distance to the $xy$-plane', text: 'The nearest point of the $xy$-plane is directly below: $(3, 4, 0)$. The distance is the drop, $|z| = 5$.' },
          { label: 'Step 4: Distance to the $z$-axis', text: 'The nearest point of the $z$-axis is $(0, 0, 5)$, so the distance is $\\sqrt{(3-0)^2 + (4-0)^2 + (5-5)^2} = \\sqrt{9 + 16} = 5$ — a 3-4-5 triangle hiding inside the coordinates.' },
          { label: 'Step 5: Distance to the origin', text: 'By the distance formula, $|OP| = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2} \\approx 7.07$: Pythagoras on legs $5$ ($= \\sqrt{3^2+4^2}$) and $5$.' },
        ],
        result: 'Reflections: $(3, 4, -5)$, $(-3, 4, 5)$, $(3, -4, 5)$. Distances: $5$ to the $xy$-plane, $5$ to the $z$-axis, and $5\\sqrt{2}$ to the origin.',
      },
      {
        title: 'Using the distance formula',
        problem: 'Find the distance between $A(2, -1, 4)$ and $B(5, 3, -4)$, and interpret it as the diagonal of a box.',
        steps: [
          { label: 'Step 1: Compute the differences', text: '$\\Delta x = 5 - 2 = 3$, $\\Delta y = 3 - (-1) = 4$, $\\Delta z = -4 - 4 = -8$; the signs do not matter because each is squared.' },
          { label: 'Step 2: Apply the formula', text: '$|AB| = \\sqrt{3^2 + 4^2 + (-8)^2} = \\sqrt{9 + 16 + 64} = \\sqrt{89} \\approx 9.43$.' },
          { label: 'Step 3: See the box', text: 'The segment $AB$ is the space diagonal of the rectangular box with edges $3$, $4$ and $8$ parallel to the axes; $\\sqrt{89}$ is simultaneously the hypotenuse of a $\\sqrt{3^2+4^2} = 5$ by $8$ right triangle — the two-step Pythagoras of the distance formula made visible.' },
        ],
        result: '$|AB| = \\sqrt{89} \\approx 9.43$.',
      },
      {
        title: 'A sphere in disguise: completing the square',
        problem: 'Identify the surface $x^2 + y^2 + z^2 + 4x - 6y + 2z + 2 = 0$ and find its center and radius.',
        steps: [
          { label: 'Step 1: Recognize the shape of the equation', text: 'The coefficients of $x^2$, $y^2$ and $z^2$ are equal and there are no cross terms, so the surface — if it exists — is a sphere.' },
          { label: 'Step 2: Complete the square in $x$', text: '$x^2 + 4x = (x+2)^2 - 4$.' },
          { label: 'Step 3: Complete the square in $y$ and $z$', text: '$y^2 - 6y = (y-3)^2 - 9$ and $z^2 + 2z = (z+1)^2 - 1$.' },
          { label: 'Step 4: Assemble', text: 'The equation becomes $(x+2)^2 + (y-3)^2 + (z+1)^2 - 12 + 2 = 0$, that is $(x+2)^2 + (y-3)^2 + (z+1)^2 = 12$.' },
        ],
        result: 'A sphere with center $(-2, 3, -1)$ and radius $\\sqrt{12} = 2\\sqrt{3} \\approx 3.46$.',
      },
      {
        title: 'Reading a surface through its traces',
        problem: 'Describe the traces of the surface $z = x^2 + y^2$ in the planes $z = k$ and in the plane $y = 0$, and sketch the surface.',
        steps: [
          { label: 'Step 1: Horizontal trace in $z = k$', text: 'Substituting $z = k$ gives $x^2 + y^2 = k$: a circle of radius $\\sqrt{k}$ centered at $(0, 0, k)$, existing for $k \\ge 0$.' },
          { label: 'Step 2: Watch the traces grow', text: 'As $k$ increases, the circles widen and lift: the surface is a stack of circles whose radius grows like the square root of the height — a bowl, narrow at the bottom, flaring upward.' },
          { label: 'Step 3: Trace in the plane $y = 0$', text: 'Setting $y = 0$ leaves $z = x^2$, a parabola: sliced vertically through its axis, the bowl shows its profile curve.' },
          { label: 'Step 4: Conclude', text: 'Circles horizontally, parabolas vertically: the surface is a (circular) paraboloid — the 3D relative of the plane parabola $y = x^2$, and a first taste of the quadric surfaces of Section 12.6.' },
        ],
        result: 'Traces $z = k$ are circles $x^2 + y^2 = k$; the trace $y = 0$ is the parabola $z = x^2$. The surface is a circular paraboloid opening upward.',
      },
    ],
    keyTakeaways: [
      'A right-handed system of three mutually perpendicular axes assigns each point a triple $(x, y, z)$; the coordinate planes cut space into eight octants.',
      'The distance formula $|P_1P_2| = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2}$ is the Pythagorean theorem applied twice: once in a coordinate plane, once vertically.',
      'A sphere with center $(a, b, c)$ and radius $r$ has equation $(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$; disguised versions are exposed by completing the square in each variable.',
      'The distance from $(a, b, c)$ to a coordinate plane is the absolute value of the corresponding coordinate; the distance to a coordinate axis combines the other two by planar Pythagoras.',
      'Traces — intersections with planes such as $z = k$ — are the standard way to visualize a surface: spheres cut in circles, $z = x^2 + y^2$ in growing circles.',
      'Inequalities describe solid regions: $x^2 + y^2 + z^2 \\le r^2$ is the closed ball bounded by the sphere of radius $r$.',
    ],
    quiz: [
      {
        q: 'The point $(-3, 4, -5)$ lies in which octant?',
        options: ['Octant II', 'Octant IV', 'Octant VI', 'Octant VIII'],
        answer: 2,
        explanation: 'The signs of the coordinates are $(-, +, -)$. Counting octants so that I is $(+,+,+)$ and each sign flip past the $z = 0$ plane moves from II to VI, the pattern $(-,+,-)$ is octant VI.',
      },
      {
        q: 'The distance between $P(-2, 1, 5)$ and $Q(4, 3, -1)$ is:',
        options: [`$2\\sqrt{19}$`, `$\\sqrt{62}$`, `$10$`, `$8$`],
        answer: 0,
        explanation: 'Differences are $6$, $2$, $-6$, so $|PQ| = \\sqrt{36 + 4 + 36} = \\sqrt{76} = 2\\sqrt{19} \\approx 8.72$.',
      },
      {
        q: 'The distance from the point $(3, -4, 12)$ to the $z$-axis is:',
        options: [`$5$`, `$12$`, `$13$`, `$\\sqrt{153}$`],
        answer: 0,
        explanation: 'The nearest point of the $z$-axis is $(0, 0, 12)$, so the distance is $\\sqrt{3^2 + (-4)^2 + 0^2} = 5$. The tempting answers $12$ and $13$ are the distances to the $xy$-plane and to the origin.',
      },
      {
        q: 'The surface $x^2 + y^2 + z^2 - 4x + 2y - 6z + 10 = 0$ is a sphere with center and radius:',
        options: ['Center $(2, -1, 3)$, radius $2$', 'Center $(-2, 1, -3)$, radius $2$', 'Center $(2, -1, 3)$, radius $4$', 'Center $(4, -2, 6)$, radius $\\sqrt{10}$'],
        answer: 0,
        explanation: 'Completing squares: $(x-2)^2 + (y+1)^2 + (z-3)^2 = 4 + 1 + 9 - 10 = 4$, a sphere of radius $2$ about $(2, -1, 3)$.',
      },
      {
        q: 'The sphere with center $(-1, 3, 2)$ and radius $3$ has equation:',
        options: [`$(x+1)^2 + (y-3)^2 + (z-2)^2 = 9$`, `$(x-1)^2 + (y+3)^2 + (z-2)^2 = 9$`, `$(x+1)^2 + (y-3)^2 + (z-2)^2 = 3$`, `$x^2 + y^2 + z^2 + 2x - 6y - 4z = 9$`],
        answer: 0,
        explanation: 'Substitute $(a, b, c) = (-1, 3, 2)$ and $r = 3$ into $(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$. Note the sign flips: center $(-1, \\ldots)$ produces $(x+1)^2$.',
      },
      {
        q: 'The trace of the sphere $x^2 + y^2 + z^2 = 25$ in the plane $z = 3$ is:',
        options: ['A circle of radius $4$', 'A circle of radius $5$', 'A circle of radius $3$', 'A single point'],
        answer: 0,
        explanation: 'Substituting $z = 3$: $x^2 + y^2 = 25 - 9 = 16$, a circle of radius $4$ in the plane $z = 3$ — the sphere’s radius shrinks by the Pythagorean slack $\\sqrt{25 - 3^2}$.',
      },
      {
        q: 'The distance from the point $(2, 3, -5)$ to the $xz$-plane is:',
        options: [`$3$`, `$2$`, `$5$`, `$\\sqrt{38}$`],
        answer: 0,
        explanation: 'The $xz$-plane is $y = 0$, so the distance is $|y| = 3$; the nearest point of the plane is $(2, 0, -5)$.',
      },
      {
        q: 'The midpoint of the segment joining $(2, -3, 5)$ and $(6, 1, -7)$ is:',
        options: [`$(4, -1, -1)$`, `$(4, 2, -2)$`, `$(2, -2, 6)$`, `$(8, -2, -2)$`],
        answer: 0,
        explanation: 'Average the coordinates: $\\left(\\tfrac{2+6}{2}, \\tfrac{-3+1}{2}, \\tfrac{5-7}{2}\\right) = (4, -1, -1)$.',
      },
      {
        q: 'For which value of $k$ does $x^2 + y^2 + z^2 - 2x + 4y - 6z + k = 0$ describe a sphere of radius $3$?',
        options: [`$k = 5$`, `$k = 9$`, `$k = 14$`, `$k = 3$`],
        answer: 0,
        explanation: 'Completing squares gives $(x-1)^2 + (y+2)^2 + (z-3)^2 = 1 + 4 + 9 - k = 14 - k$. Radius $3$ forces $14 - k = 9$, so $k = 5$.',
      },
      {
        q: 'Which inequality describes the closed solid ball of radius $2$ centered at the origin?',
        options: [`$x^2 + y^2 + z^2 \\le 4$`, `$x^2 + y^2 + z^2 = 4$`, `$x^2 + y^2 + z^2 < 4$`, `$x^2 + y^2 + z^2 \\ge 4$`],
        answer: 0,
        explanation: 'The sphere itself is the equality $x^2 + y^2 + z^2 = 4$; the solid it bounds — boundary included — is $x^2 + y^2 + z^2 \\le 4$, all points within distance $2$ of the origin.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Distance, spheres, and metric structure',
        blocks: [
          {
            kind: 'theorem',
            heading: 'The parallelogram law',
            body: 'For all vectors $\\mathbf{u}, \\mathbf{v}$ in $\\mathbb{R}^3$ (in fact in any inner product space), $$\\|\\mathbf{u} + \\mathbf{v}\\|^2 + \\|\\mathbf{u} - \\mathbf{v}\\|^2 = 2\\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{v}\\|^2.$$ Geometrically: in the parallelogram spanned by $\\mathbf{u}$ and $\\mathbf{v}$, the sum of the squares of the two diagonals equals the sum of the squares of the four sides. Stewart’s distance formula is exactly the squared norm $\\|\\mathbf{u}\\|^2 = \\mathbf{u} \\cdot \\mathbf{u}$, so this identity is a statement about distances alone — no coordinates appear in it.',
          },
          {
            kind: 'proof',
            body: 'Expand each square with the dot product: $\\|\\mathbf{u} \\pm \\mathbf{v}\\|^2 = (\\mathbf{u} \\pm \\mathbf{v}) \\cdot (\\mathbf{u} \\pm \\mathbf{v}) = \\mathbf{u} \\cdot \\mathbf{u} \\pm 2\\,\\mathbf{u} \\cdot \\mathbf{v} + \\mathbf{v} \\cdot \\mathbf{v}$. Adding the $+$ and $-$ versions, the cross terms $+2\\mathbf{u} \\cdot \\mathbf{v}$ and $-2\\mathbf{u} \\cdot \\mathbf{v}$ cancel, leaving $2\\,\\mathbf{u} \\cdot \\mathbf{u} + 2\\,\\mathbf{v} \\cdot \\mathbf{v}$, which is the right side. Everything used — commutativity and bilinearity of the dot product — is on Stewart’s properties list for Section 12.3, so the identity costs nothing beyond the section’s own tools.',
          },
          {
            kind: 'example',
            heading: 'A numerical check',
            body: 'Take $\\mathbf{u} = \\langle 3, 1, 2\\rangle$ and $\\mathbf{v} = \\langle 1, 2, 2\\rangle$. Then $\\|\\mathbf{u}\\|^2 = 14$ and $\\|\\mathbf{v}\\|^2 = 9$, so the right side is $2(14) + 2(9) = 46$. The diagonals are $\\mathbf{u} + \\mathbf{v} = \\langle 4, 3, 4\\rangle$ with $\\|\\mathbf{u}+\\mathbf{v}\\|^2 = 16 + 9 + 16 = 41$, and $\\mathbf{u} - \\mathbf{v} = \\langle 2, -1, 0\\rangle$ with $\\|\\mathbf{u}-\\mathbf{v}\\|^2 = 5$; and indeed $41 + 5 = 46$. Running such a check on random triples never fails — the cancellation of the dot-product term is structural, not lucky.',
          },
          {
            kind: 'para',
            heading: 'Orientation: why the right hand?',
            body: 'The right-hand rule is not decoration; it is a choice of **orientation**. The set of ordered bases of $\\mathbb{R}^3$ splits into two classes, bases reachable from each other by a continuous motion with $\\det > 0$ and bases related to those by a reflection with $\\det < 0$, and declaring $\\{\\mathbf{i}, \\mathbf{j}, \\mathbf{k}\\}$ right-handed merely names one class “positive”. A mirror turns a right-handed system into a left-handed one — which is why a printed page of this chapter read in a mirror still shows consistent geometry but with every triple product (Section 12.4) reversed in sign. Physics makes the same choice: the standard orientation of space is what lets torque, angular momentum and magnetic fields be treated as vectors rather than as signed magnitudes.',
          },
          {
            kind: 'application',
            heading: 'GPS: intersecting spheres',
            body: 'A satellite broadcast tells a receiver “you are 20,200 km from me” — one sphere of position. Two satellite spheres intersect in a circle, three in a pair of points (the algebra: subtracting two sphere equations eliminates the squared terms and leaves a plane, so the pair of points is the intersection of a line with a sphere), and of the two candidates only one sits near the Earth’s surface. A fourth sphere is needed not for geometry but for physics: the receiver’s clock bias is a fourth unknown, and four sphere equations resolve position and time simultaneously. Trilateration is thus the distance formula and the theory of this section running at the speed of light, billions of times a day.',
          },
          {
            kind: 'remark',
            heading: 'Distances determine the dot product',
            body: 'The **polarization identity** rearranges the parallelogram law into $$\\mathbf{u} \\cdot \\mathbf{v} = \\tfrac{1}{4}\\left(\\|\\mathbf{u} + \\mathbf{v}\\|^2 - \\|\\mathbf{u} - \\mathbf{v}\\|^2\\right).$$ Read backwards, it says that whoever knows all the distances between points of $\\mathbb{R}^3$ can reconstruct every dot product, hence every angle: the distance function contains the entire metrical geometry. This is why Section 12.3 can be viewed either as defining angles from the dot product or — equivalently — from lengths alone, and it is the technical fact behind the distance-geometry methods used on protein structures.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Metric geometry beyond the formula',
        blocks: [
          {
            kind: 'para',
            heading: 'Other metrics on the same space',
            body: 'Stewart’s formula defines the Euclidean metric, but it is one of infinitely many. For $1 \\le p \\le \\infty$ the $\\ell^p$ norms $\\|\\mathbf{x}\\|_p = (|x_1|^p + |x_2|^p + |x_3|^p)^{1/p}$ give the taxicab metric ($p = 1$), the Euclidean metric ($p = 2$) and the max metric ($p = \\infty$), whose unit spheres are an octahedron, a round sphere and a cube respectively. All norms on a finite-dimensional space are equivalent for convergence purposes, so calculus cannot tell them apart — but geometry can: only for $p = 2$ is the unit ball rotation-invariant, and only $p = 2$ makes the polarization identity (previous tier) available to define angles. The Euclidean choice is precisely the choice on which the orthogonal group acts transitively on directions.',
          },
          {
            kind: 'theorem',
            heading: 'Beckman and Quarles: rigidity',
            body: 'A map $f\\colon \\mathbb{R}^n \\to \\mathbb{R}^n$ with $n \\ge 2$ that preserves the single distance $1$ — meaning $|\\mathbf{x} - \\mathbf{y}| = 1$ implies $|f(\\mathbf{x}) - f(\\mathbf{y})| = 1$ — automatically preserves **all** distances, and is therefore an isometry: a rigid motion composed possibly with a reflection. No continuity, linearity or injectivity is assumed. The unit distance alone is a complete fingerprint of Euclidean structure, which is a remarkable rigidity: in the plane one builds every distance $\\sqrt{m}/\\sqrt{n}$ from chains of unit segments and forces $f$ to preserve rational-grid distances, then all distances, by pure combinatorics.',
          },
          {
            kind: 'application',
            heading: 'Distance geometry of molecules',
            body: 'An NMR experiment does not measure coordinates; it produces **upper bounds on distances** between nearby hydrogen atoms. Reconstructing a molecule is therefore a distance-geometry problem: find points in $\\mathbb{R}^3$ realizing a given list of interpoint distances. The classical criterion is Schoenberg’s: a matrix of squared distances comes from a Euclidean configuration exactly when the associated Gram matrix is positive semidefinite, and the $k$-dimensional volume of any simplex formed by the points is governed by its Cayley–Menger determinant, built from distances alone. Structural biology pipelines embed noisy distance bounds by semidefinite programming — literally the distance formula of this section inverted at scale, with thousands of unknowns.',
          },
          {
            kind: 'open',
            heading: 'The turnpike problem',
            body: 'Given the multiset of all $\\binom{n}{2}$ pairwise distances among $n$ unknown points on a line, can the points be reconstructed? This turnpike (or partial digest) problem — the name comes from reading exit distances on a highway — is solvable in practice by backtracking, is unique up to reflection for most inputs, but can be ambiguous: genuinely different point sets with identical distance multisets exist. Despite decades of work, its exact complexity is unresolved: no polynomial-time algorithm is known, and the problem has resisted both NP-completeness proofs and fast algorithms, in a genomic era where restriction-site mapping produces exactly these data. The higher-dimensional analog — reconstructing a configuration in the plane or in space from unlabeled distances — is harder still, and is open even for generic inputs.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 12.2
  {
    sectionId: 'calc-ch12-s2',
    readingTime: 8,
    intro: 'Temperature has size but no direction; force, velocity and displacement have both. A **vector** is the mathematical object that captures exactly that pair — magnitude and direction — independent of where it sits. This section builds the algebra of vectors: components, addition by the triangle and parallelogram laws, scalar multiplication, unit vectors and the standard basis $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$. The punchline is that all of it works by simple component arithmetic, which is why vectors became the language of physics and of every computation in the rest of this book.',
    objectives: [
      'Represent a vector in component form $\\langle a_1, a_2, a_3\\rangle$ and compute its magnitude',
      'Add vectors geometrically (triangle and parallelogram laws) and algebraically, and multiply by scalars',
      'Use the algebraic properties of vector addition and scalar multiplication',
      'Find and use unit vectors, including the standard basis $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$',
      'Find the vector $\\overrightarrow{AB}$ from the coordinates of two points, and the midpoint of a segment',
      'Model directed quantities such as force and velocity with vectors',
    ],
    concepts: [
      {
        term: 'Vectors and scalars',
        kind: 'definition',
        statement: 'A **vector** $\\mathbf{a}$ is a quantity with both magnitude and direction, represented geometrically by a directed line segment (an arrow) whose length is the magnitude. A **scalar** is an ordinary number — magnitude alone. Two vectors are **equal** if they have the same length and the same direction, wherever their tails sit.',
        detail: 'Speed is a scalar; velocity is a vector. Mass and temperature are scalars; force, displacement, acceleration and momentum are vectors. Because position is irrelevant, a vector may be slid anywhere (a “free vector”); in particular, any vector can be moved so its tail sits at the origin, where it becomes the **position vector** of its tip.',
      },
      {
        term: 'Component form and the zero vector',
        kind: 'notation',
        statement: 'With its tail at the origin, the vector with tip at $(a_1, a_2, a_3)$ is written $$\\mathbf{a} = \\langle a_1, a_2, a_3\\rangle,$$ the three numbers being its **components**. The vector with length $0$ is the **zero vector** $\\mathbf{0} = \\langle 0, 0, 0\\rangle$, the only vector with no assigned direction.',
        detail: 'Components are the 3D analogue of the slope-and-intercept bookkeeping of plane analytic geometry, but better: all the arithmetic to come is componentwise. A plane vector $\\langle a_1, a_2\\rangle$ is handled with the first two slots left out.',
      },
      {
        term: 'Magnitude',
        kind: 'definition',
        statement: 'The **length** (magnitude, norm) of $\\mathbf{a} = \\langle a_1, a_2, a_3\\rangle$ is $$|\\mathbf{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2},$$ the distance from the origin to the tip of the position vector — the Section 12.1 distance formula applied to one point.',
        detail: 'For instance $|\\langle 2, -3, 6\\rangle| = \\sqrt{4 + 9 + 36} = 7$. The double bar notation $\\|\\mathbf{a}\\|$ is also common; Stewart uses single bars, the same symbol as for the length $|AB|$ of a segment and for absolute value.',
      },
      {
        term: 'Vector addition',
        kind: 'law',
        statement: 'Geometrically, $\\mathbf{a} + \\mathbf{b}$ is given by the **triangle law** (place the tail of $\\mathbf{b}$ at the tip of $\\mathbf{a}$; the sum runs from the tail of $\\mathbf{a}$ to the tip of $\\mathbf{b}$) or the **parallelogram law** (put the tails together; the sum is the diagonal). In components, $$\\langle a_1, a_2, a_3\\rangle + \\langle b_1, b_2, b_3\\rangle = \\langle a_1+b_1,\\ a_2+b_2,\\ a_3+b_3\\rangle.$$',
        detail: 'Addition satisfies $\\mathbf{a} + \\mathbf{b} = \\mathbf{b} + \\mathbf{a}$, $\\mathbf{a} + (\\mathbf{b} + \\mathbf{c}) = (\\mathbf{a} + \\mathbf{b}) + \\mathbf{c}$, $\\mathbf{a} + \\mathbf{0} = \\mathbf{a}$ and $\\mathbf{a} + (-\\mathbf{a}) = \\mathbf{0}$. Physically this is the rule for combining forces: two forces applied at a point act like their vector sum, the **resultant**. The difference $\\mathbf{a} - \\mathbf{b}$ is the vector from the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$ when the tails coincide.',
      },
      {
        term: 'Scalar multiplication',
        kind: 'law',
        statement: 'If $c$ is a scalar, $c\\,\\mathbf{a}$ has length $|c|\\,|\\mathbf{a}|$ and the direction of $\\mathbf{a}$ if $c > 0$, the opposite direction if $c < 0$: $$c\\,\\langle a_1, a_2, a_3\\rangle = \\langle ca_1, ca_2, ca_3\\rangle.$$ The laws $c(\\mathbf{a}+\\mathbf{b}) = c\\mathbf{a} + c\\mathbf{b}$ and $(c+d)\\mathbf{a} = c\\mathbf{a} + d\\mathbf{a}$ hold, and $(-1)\\mathbf{a} = -\\mathbf{a}$.',
        detail: 'Two nonzero vectors are **parallel** exactly when one is a scalar multiple of the other. Doubling a force doubles it; reversing the scalar reverses it. Scalar multiplication is what lets vectors encode units: $5\\,\\mathbf{u}$ newtons, for a unit direction $\\mathbf{u}$, is a force of magnitude 5.',
      },
      {
        term: 'Unit vectors and the standard basis',
        kind: 'notation',
        statement: 'A **unit vector** has length $1$. Every nonzero vector $\\mathbf{a}$ points in the direction of the unit vector $\\mathbf{a}/|\\mathbf{a}|$. The special unit vectors $\\mathbf{i} = \\langle 1, 0, 0\\rangle$, $\\mathbf{j} = \\langle 0, 1, 0\\rangle$, $\\mathbf{k} = \\langle 0, 0, 1\\rangle$ along the coordinate axes satisfy $$\\mathbf{a} = a_1\\,\\mathbf{i} + a_2\\,\\mathbf{j} + a_3\\,\\mathbf{k}.$$',
        detail: 'For example $\\langle 4, -1, 7\\rangle = 4\\mathbf{i} - \\mathbf{j} + 7\\mathbf{k}$. The triple $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ is the **standard basis**: any vector decomposes into them uniquely, and the decomposition separates direction ($\\mathbf{a}/|\\mathbf{a}|$) from magnitude ($|\\mathbf{a}|$). In the plane the same story runs with $\\mathbf{i}, \\mathbf{j}$ alone.',
      },
      {
        term: 'The vector from one point to another',
        kind: 'method',
        statement: 'Given points $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$, the vector with tail $A$ and tip $B$ is $$\\overrightarrow{AB} = \\langle x_2 - x_1,\\ y_2 - y_1,\\ z_2 - z_1\\rangle.$$ Its length $|\\overrightarrow{AB}|$ is the distance $|AB|$, and $\\overrightarrow{AB} = -\\overrightarrow{BA}$.',
        detail: 'Head minus tail, coordinate by coordinate. The **midpoint** $M$ of $AB$ has position vector $\\overrightarrow{OM} = \\tfrac{1}{2}(\\overrightarrow{OA} + \\overrightarrow{OB})$, the average of the endpoints’ position vectors — the lever rule of mechanics in coordinate clothing.',
      },
    ],
    figures: [
      {
        caption: 'The parallelogram law: with $\\mathbf{a}$ and $\\mathbf{b}$ issuing from a common tail, the diagonal is $\\mathbf{a} + \\mathbf{b}$ while the off-diagonal from the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$ is $\\mathbf{a} - \\mathbf{b}$. Moving the tail of $\\mathbf{b}$ to the tip of $\\mathbf{a}$ draws the same sum by the triangle law — the dashed copies are parallel translates of $\\mathbf{a}$ and $\\mathbf{b}$.',
        svg: '<svg viewBox="0 0 720 320" width="100%" role="img" aria-label="Parallelogram spanned by vectors a and b with diagonal a plus b and difference a minus b.">\n  <polyline points="128,310 410,55" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>\n  <polygon points="410,55 405.5,63.4 401.2,58.7" fill="currentColor" stroke="none"/>\n  <polygon points="150,255 350,205 410,55 210,105" fill="currentColor" fill-opacity="0.06" stroke="none"/>\n  <polyline points="210,105 410,55" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4" opacity="0.7"/>\n  <polyline points="350,205 410,55" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4" opacity="0.7"/>\n  <polyline points="150,255 350,205" fill="none" stroke="#10b981" stroke-width="2"/>\n  <polygon points="350,205 342,210.3 340.5,204.1" fill="currentColor" stroke="none"/>\n  <polyline points="150,255 210,105" fill="none" stroke="#f59e0b" stroke-width="2"/>\n  <polygon points="210,105 209.6,114.5 203.7,112.2" fill="currentColor" stroke="none"/>\n  <polyline points="150,255 410,55" fill="none" stroke="#f43f5e" stroke-width="2.2"/>\n  <polygon points="410,55 404.8,63 400.9,58" fill="currentColor" stroke="none"/>\n  <polyline points="210,105 350,205" fill="none" stroke="#10b981" stroke-width="1.6" stroke-dasharray="6 4"/>\n  <polygon points="350,205 340.8,202.4 344.5,197.2" fill="currentColor" stroke="none"/>\n  <circle cx="150" cy="255" r="3.5" fill="currentColor" stroke="none"/>\n  <circle cx="350" cy="205" r="3.5" fill="currentColor" stroke="none"/>\n  <circle cx="210" cy="105" r="3.5" fill="currentColor" stroke="none"/>\n  <circle cx="410" cy="55" r="3.5" fill="currentColor" stroke="none"/>\n  <text x="358" y="196" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981">a</text>\n  <text x="200" y="96" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f59e0b">b</text>\n  <text x="416" y="46" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f43f5e">a + b</text>\n  <text x="292" y="148" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981">a − b</text>\n  <text x="138" y="272" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">tail</text>\n</svg>',
        afterConcept: 4,
      },
      {
        caption: 'The standard basis $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ and the decomposition $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j} + 3\\mathbf{k}$: the dashed box shows how the components $2$, $3$ and $3$ rebuild the vector, and $|\\mathbf{a}| = \\sqrt{2^2 + 3^2 + 3^2} = \\sqrt{22} \\approx 4.69$ is the space diagonal of the box.',
        svg: '<svg viewBox="0 0 720 340" width="100%" role="img" aria-label="Three-dimensional axes with unit vectors i, j, k and a vector a equal to 2 i plus 3 j plus 3 k shown with its component box.">\n  <polyline points="355.6,211.6 189.2,298.9" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polygon points="189.2,298.9 195.7,291.9 198.7,297.6" fill="currentColor" stroke="none"/>\n  <polyline points="306,219 514,271" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polygon points="514,271 504.5,271.9 506,265.7" fill="currentColor" stroke="none"/>\n  <polyline points="330,249 330,33" fill="none" stroke="currentColor" stroke-width="1.6"/>\n  <polygon points="330,33 333.2,42 326.8,42" fill="currentColor" stroke="none"/>\n  <polyline points="386,168.6 386,288.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.7"/>\n  <polyline points="386,288.6 266,258.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.7"/>\n  <polyline points="386,288.6 450,255" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.7"/>\n  <polyline points="330,225 386,288.6" fill="none" stroke="#f59e0b" stroke-width="2"/>\n  <polyline points="330,225 298,241.8" fill="none" stroke="#10b981" stroke-width="2"/>\n  <polygon points="298,241.8 304.5,234.8 307.5,240.4" fill="currentColor" stroke="none"/>\n  <polyline points="330,225 370,235" fill="none" stroke="#10b981" stroke-width="2"/>\n  <polygon points="370,235 360.5,235.9 362,229.7" fill="currentColor" stroke="none"/>\n  <polyline points="330,225 330,185" fill="none" stroke="#10b981" stroke-width="2"/>\n  <polygon points="330,185 333.2,194 326.8,194" fill="currentColor" stroke="none"/>\n  <polyline points="330,225 386,168.6" fill="none" stroke="#f43f5e" stroke-width="2.4"/>\n  <polygon points="386,168.6 381.9,177.2 377.4,172.7" fill="currentColor" stroke="none"/>\n  <circle cx="386" cy="168.6" r="3.5" fill="currentColor" stroke="none"/>\n  <circle cx="386" cy="288.6" r="3.5" fill="currentColor" stroke="none"/>\n  <text x="394" y="163" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f43f5e">a = ⟨2, 3, 3⟩</text>\n  <text x="394" y="182" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">|a| = √22 ≈ 4.69</text>\n  <text x="394" y="300" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">(2, 3, 0)</text>\n  <text x="286" y="254" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981">i</text>\n  <text x="376" y="248" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981">j</text>\n  <text x="338" y="180" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981">k</text>\n  <text x="181" y="313" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">x</text>\n  <text x="520" y="279" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">y</text>\n  <text x="338" y="40" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">z</text>\n</svg>',
        afterConcept: 6,
      },
    ],
    examples: [
      {
        title: 'A crosswind: adding velocities',
        problem: 'An airplane flies due north at an airspeed of 250 km/h while a steady wind blows toward the east at 40 km/h. Find the ground velocity of the airplane (speed and direction).',
        steps: [
          { label: 'Step 1: Choose vectors', text: 'Take north as the positive $y$-direction and east as the positive $x$-direction. The velocity relative to the air is $\\mathbf{v} = \\langle 0, 250\\rangle$ and the wind velocity is $\\mathbf{w} = \\langle 40, 0\\rangle$, in km/h.' },
          { label: 'Step 2: Add', text: 'The ground velocity is the resultant $\\mathbf{v} + \\mathbf{w} = \\langle 40, 250\\rangle$ — the plane is carried sideways as it flies, exactly as the parallelogram law prescribes.' },
          { label: 'Step 3: Ground speed', text: 'The speed is the magnitude: $|\\mathbf{v} + \\mathbf{w}| = \\sqrt{40^2 + 250^2} = \\sqrt{64100} \\approx 253.2$ km/h — slightly more than the airspeed, since the wind is perpendicular to the heading.' },
          { label: 'Step 4: Drift angle', text: 'The track makes an angle $\\theta$ east of north with $\\tan\\theta = 40/250 = 0.16$, so $\\theta = \\arctan(0.16) \\approx 9.1^\\circ$. The pilot must crab into the wind to fly a straight line — the same triangle of velocities, solved the other way.' },
        ],
        result: 'Ground velocity $\\langle 40, 250\\rangle$: about 253.2 km/h along a track $9.1^\\circ$ east of north.',
      },
      {
        title: 'The vector joining two points',
        problem: 'Find the vector $\\overrightarrow{AB}$ from $A(2, -3, 4)$ to $B(5, 1, -2)$, its length, the midpoint of $AB$, and the vector from $A$ to that midpoint.',
        steps: [
          { label: 'Step 1: Head minus tail', text: '$\\overrightarrow{AB} = \\langle 5-2,\\ 1-(-3),\\ -2-4\\rangle = \\langle 3, 4, -6\\rangle$.' },
          { label: 'Step 2: Length', text: '$|\\overrightarrow{AB}| = \\sqrt{9 + 16 + 36} = \\sqrt{61} \\approx 7.81$, which is of course the distance $|AB|$ from Section 12.1.' },
          { label: 'Step 3: Midpoint', text: '$M = \\left(\\tfrac{2+5}{2}, \\tfrac{-3+1}{2}, \\tfrac{4+(-2)}{2}\\right) = (3.5, -1, 1)$.' },
          { label: 'Step 4: Vector to the midpoint', text: '$\\overrightarrow{AM} = \\langle 3.5-2, -1-(-3), 1-4\\rangle = \\langle 1.5, 2, -3\\rangle = \\tfrac{1}{2}\\overrightarrow{AB}$ — the midpoint vector is exactly half the trip, as it must be.' },
        ],
        result: '$\\overrightarrow{AB} = \\langle 3, 4, -6\\rangle$ with $|\\overrightarrow{AB}| = \\sqrt{61} \\approx 7.81$; midpoint $(3.5, -1, 1)$; $\\overrightarrow{AM} = \\tfrac{1}{2}\\overrightarrow{AB}$.',
      },
      {
        title: 'Unit vectors and rescaling',
        problem: 'For $\\mathbf{a} = 4\\mathbf{i} - \\mathbf{j} + 7\\mathbf{k}$, find $|\\mathbf{a}|$, the unit vector in the direction of $\\mathbf{a}$, and the vector of length $6$ that points the same way.',
        steps: [
          { label: 'Step 1: Magnitude', text: '$|\\mathbf{a}| = \\sqrt{4^2 + (-1)^2 + 7^2} = \\sqrt{66} \\approx 8.12$.' },
          { label: 'Step 2: Normalize', text: 'The unit vector is $\\mathbf{a}/|\\mathbf{a}| = \\dfrac{1}{\\sqrt{66}}\\langle 4, -1, 7\\rangle \\approx \\langle 0.492, -0.123, 0.862\\rangle$; check that $0.492^2 + 0.123^2 + 0.862^2 \\approx 1$.' },
          { label: 'Step 3: Rescale', text: 'A vector of length $6$ in the same direction is $6\\,\\mathbf{a}/|\\mathbf{a}| = \\dfrac{6}{\\sqrt{66}}\\langle 4, -1, 7\\rangle \\approx \\langle 2.95, -0.74, 5.17\\rangle$.' },
          { label: 'Step 4: Sanity check', text: 'The result has the form (direction) × (magnitude): multiplying any vector by a positive scalar changes only its length, which is exactly why magnitude and direction were separated in the first place.' },
        ],
        result: '$|\\mathbf{a}| = \\sqrt{66}$; unit vector $\\dfrac{1}{\\sqrt{66}}\\langle 4, -1, 7\\rangle$; length-6 vector $\\dfrac{6}{\\sqrt{66}}\\langle 4, -1, 7\\rangle$.',
      },
      {
        title: 'Varignon: the midpoints of any quadrilateral',
        problem: 'Show that the four midpoints of the sides of an arbitrary quadrilateral in space are the vertices of a parallelogram.',
        steps: [
          { label: 'Step 1: Position vectors', text: 'Let the vertices have position vectors $\\mathbf{a}, \\mathbf{b}, \\mathbf{c}, \\mathbf{d}$. The midpoint of $AB$ is $\\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b})$, of $BC$ is $\\tfrac{1}{2}(\\mathbf{b}+\\mathbf{c})$, of $CD$ is $\\tfrac{1}{2}(\\mathbf{c}+\\mathbf{d})$ and of $DA$ is $\\tfrac{1}{2}(\\mathbf{d}+\\mathbf{a})$.' },
          { label: 'Step 2: One side of the midpoint figure', text: 'The vector from the midpoint of $AB$ to the midpoint of $BC$ is $\\tfrac{1}{2}(\\mathbf{b}+\\mathbf{c}) - \\tfrac{1}{2}(\\mathbf{a}+\\mathbf{b}) = \\tfrac{1}{2}(\\mathbf{c}-\\mathbf{a})$.' },
          { label: 'Step 3: The opposite side', text: 'From the midpoint of $CD$ to the midpoint of $DA$: $\\tfrac{1}{2}(\\mathbf{d}+\\mathbf{a}) - \\tfrac{1}{2}(\\mathbf{c}+\\mathbf{d}) = \\tfrac{1}{2}(\\mathbf{a}-\\mathbf{c}) = -\\tfrac{1}{2}(\\mathbf{c}-\\mathbf{a})$.' },
          { label: 'Step 4: Conclude', text: 'The two opposite sides are negatives of each other — parallel and equal in length — so the midpoint figure is a parallelogram (Varignon’s theorem). Note that the quadrilateral need not be planar, need not be convex, and may even be skew: vectors never looked at the picture.' },
        ],
        result: 'The midpoint quadrilateral has opposite sides $\\pm\\tfrac{1}{2}(\\mathbf{c}-\\mathbf{a})$, so it is always a parallelogram (of half the area, in the planar case).',
      },
    ],
    keyTakeaways: [
      'A vector carries magnitude and direction; equality of vectors means equal length and direction, independent of position.',
      'Component form $\\langle a_1, a_2, a_3\\rangle$ turns geometry into arithmetic: add and scale componentwise, and $|\\mathbf{a}| = \\sqrt{a_1^2+a_2^2+a_3^2}$.',
      'The triangle and parallelogram laws describe the same sum; the difference $\\mathbf{a} - \\mathbf{b}$ joins the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$.',
      'Every nonzero vector factors as (magnitude) × (unit direction): $\\mathbf{a} = |\\mathbf{a}|\\,(\\mathbf{a}/|\\mathbf{a}|)$, and $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ rebuild it as $a_1\\mathbf{i} + a_2\\mathbf{j} + a_3\\mathbf{k}$.',
      'For points $A$ and $B$, $\\overrightarrow{AB} = \\langle x_2-x_1, y_2-y_1, z_2-z_1\\rangle$ (head minus tail), and the midpoint averages the position vectors.',
      'Forces and velocities combine by vector addition: resultants, ground velocities and equilibria are all parallelogram problems.',
    ],
    quiz: [
      {
        q: 'If $\\mathbf{a} = \\langle 3, -2, 5\\rangle$ and $\\mathbf{b} = \\langle 1, 4, -2\\rangle$, then $\\mathbf{a} + \\mathbf{b} =$',
        options: [`$\\langle 4, 2, 3\\rangle$`, `$\\langle 2, -6, 7\\rangle$`, `$\\langle 4, -6, 3\\rangle$`, `$\\langle 2, 2, 3\\rangle$`],
        answer: 0,
        explanation: 'Add components: $3+1 = 4$, $-2+4 = 2$, $5+(-2) = 3$, giving $\\langle 4, 2, 3\\rangle$.',
      },
      {
        q: 'The magnitude of $\\langle 2, -3, 6\\rangle$ is:',
        options: [`$5$`, `$7$`, `$\\sqrt{5}$`, `$11$`],
        answer: 1,
        explanation: '$\\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4+9+36} = \\sqrt{49} = 7$.',
      },
      {
        q: 'A unit vector in the direction of $\\langle 3, -4, 0\\rangle$ is:',
        options: [`$\\left\\langle \\tfrac{3}{5}, -\\tfrac{4}{5}, 0 \\right\\rangle$`, `$\\langle 3, -4, 0\\rangle$`, `$\\left\\langle \\tfrac{1}{3}, -\\tfrac{1}{4}, 0 \\right\\rangle$`, `$\\left\\langle \\tfrac{3}{7}, -\\tfrac{4}{7}, 0 \\right\\rangle$`],
        answer: 0,
        explanation: 'The length is $\\sqrt{9+16} = 5$, so dividing by it gives $\\langle 3/5, -4/5, 0\\rangle$, whose components square-sum to $1$.',
      },
      {
        q: 'The vector of length $12$ in the direction of $\\langle 2, 1, -2\\rangle$ is:',
        options: [`$\\langle 8, 4, -8\\rangle$`, `$\\langle 12, 6, -12\\rangle$`, `$\\langle 6, 3, -6\\rangle$`, `$\\langle 4, 2, -4\\rangle$`],
        answer: 0,
        explanation: '$|\\langle 2,1,-2\\rangle| = 3$, so the rescaling factor is $12/3 = 4$ and the vector is $4\\langle 2, 1, -2\\rangle = \\langle 8, 4, -8\\rangle$.',
      },
      {
        q: 'If $A(1, -2, 3)$ and $B(4, 1, 5)$, then $|\\overrightarrow{AB}| =$',
        options: [`$\\sqrt{22}$`, `$\\sqrt{14}$`, `$\\sqrt{26}$`, `$22$`],
        answer: 0,
        explanation: '$\\overrightarrow{AB} = \\langle 3, 3, 2\\rangle$, so $|\\overrightarrow{AB}| = \\sqrt{9+9+4} = \\sqrt{22} \approx 4.69$.',
      },
      {
        q: 'The vectors $\\langle 6, -3, -9\\rangle$ and $\\langle -2, 1, 3\\rangle$ are:',
        options: ['Parallel', 'Perpendicular', 'Neither parallel nor perpendicular', 'Equal in magnitude'],
        answer: 0,
        explanation: '$\\langle 6, -3, -9\\rangle = -3\\,\\langle -2, 1, 3\\rangle$: one is a scalar multiple of the other, so they are parallel (antiparallel in sign, but parallel as lines).',
      },
      {
        q: 'Two forces $\\langle 3, -4, 0\\rangle$ and $\\langle 1, 2, 0\\rangle$ act on a point. A third force that keeps the point in equilibrium is:',
        options: [`$\\langle -4, 2, 0\\rangle$`, `$\\langle 4, -2, 0\\rangle$`, `$\\langle 2, 2, 0\\rangle$`, `$\\langle -3, -4, 0\\rangle$`],
        answer: 0,
        explanation: 'The resultant of the two forces is $\\langle 4, -2, 0\\rangle$, so the balancing force must be its negative, $\\langle -4, 2, 0\\rangle$: the three vectors then sum to $\\mathbf{0}$.',
      },
      {
        q: 'In standard-basis form, $\\langle 5, 0, -2\\rangle =$',
        options: [`$5\\mathbf{i} - 2\\mathbf{k}$`, `$5\\mathbf{i} - 2\\mathbf{j}$`, `$-2\\mathbf{i} + 5\\mathbf{k}$`, `$5\\mathbf{i} + 2\\mathbf{k}$`],
        answer: 0,
        explanation: 'The components are the coefficients of $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$: five $\\mathbf{i}$’s, no $\\mathbf{j}$, minus two $\\mathbf{k}$’s.',
      },
      {
        q: 'If $M\\left(3, \\tfrac{1}{2}, 2\\right)$ is the midpoint of $PQ$ and $P = (2, 1, 3)$, then $Q =$',
        options: [`$(4, 0, 1)$`, `$(4, 1, 1)$`, `$(2.5, 0.75, 2.5)$`, `$(5, -1, 4)$`],
        answer: 0,
        explanation: 'Since $M = \\tfrac{1}{2}(P + Q)$, we get $Q = 2M - P = (6, 1, 4) - (2, 1, 3) = (4, 0, 1)$.',
      },
      {
        q: 'Which statement about the zero vector is correct?',
        options: ['It has length 1 and points along the $z$-axis', 'It has length zero and no assigned direction', 'It is the only vector orthogonal to itself', 'It cannot be added to other vectors'],
        answer: 1,
        explanation: 'The zero vector has magnitude $0$ and, having all directions collapsed, is assigned none — which is why statements like “parallel to the zero vector” are excluded from theorems. (It is, in fact, the only vector orthogonal to itself as well, but that is a statement for the dot product section.)',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Vectors as an algebraic structure',
        blocks: [
          {
            kind: 'para',
            heading: 'The eight properties are the axioms',
            body: 'Stewart lists eight properties of addition and scalar multiplication — commutativity and associativity of addition, the zero and negative, the distributive laws both ways, and the two scalar identities — and then quietly notes that the same rules hold for many other systems. That list **is** the definition of a (real) vector space: arrows in $\\mathbb{R}^3$ are just one model. Polynomials of degree at most $n$, $m \\times n$ matrices, solutions of a linear homogeneous differential equation and all continuous functions on an interval are vectors in exactly this sense, and every theorem proved from the eight properties alone transfers to all of them at once. The component arithmetic of this section is the concrete model on which the abstraction was patterned historically.',
          },
          {
            kind: 'theorem',
            heading: 'Unique coordinates in a basis',
            body: 'Every vector $\\mathbf{a} = a_1\\mathbf{i} + a_2\\mathbf{j} + a_3\\mathbf{k}$ has exactly one such representation: if $a_1\\mathbf{i} + a_2\\mathbf{j} + a_3\\mathbf{k} = b_1\\mathbf{i} + b_2\\mathbf{j} + b_3\\mathbf{k}$, then $a_1 = b_1$, $a_2 = b_2$ and $a_3 = b_3$. In the language of linear algebra, $\\{\\mathbf{i}, \\mathbf{j}, \\mathbf{k}\\}$ is linearly independent and spans, so it is a **basis**, and the components of a vector are its coordinates in that basis.',
          },
          {
            kind: 'proof',
            body: 'Suppose the two representations differ and subtract: $(a_1 - b_1)\\mathbf{i} + (a_2 - b_2)\\mathbf{j} + (a_3 - b_3)\\mathbf{k} = \\mathbf{0}$. If, say, $a_1 \\ne b_1$, solve for $\\mathbf{i}$: $\\mathbf{i} = \\lambda\\mathbf{j} + \\mu\\mathbf{k}$ with $\\lambda = -(a_2-b_2)/(a_1-b_1)$ and $\\mu = -(a_3-b_3)/(a_1-b_1)$. But $\\mathbf{i}$ points along the $x$-axis while any combination $\\lambda\\mathbf{j} + \\mu\\mathbf{k}$ lies in the $yz$-plane, and the only vector in both is $\\mathbf{0}$, which $\\mathbf{i}$ is not. Contradiction; similarly for $y$ and $z$. Alternatively in one line: take the yet-unmet dot product of both sides with $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ in turn. Uniqueness of components is what makes “reading off the components” a well-defined operation.',
          },
          {
            kind: 'derivation',
            heading: 'Centroids as weighted averages',
            body: 'The midpoint formula generalizes to the **center of mass**: for masses $m_1, \\ldots, m_n$ at points with position vectors $\\mathbf{r}_1, \\ldots, \\mathbf{r}_n$, the balance point is $\\mathbf{c} = \\dfrac{\\sum m_i\\,\\mathbf{r}_i}{\\sum m_i}$. The derivation is a torque computation about the (unknown) balance point: equilibrium demands $\\sum m_i (\\mathbf{r}_i - \\mathbf{c}) = \\mathbf{0}$, and expanding gives $(\\sum m_i)\\mathbf{c} = \\sum m_i \\mathbf{r}_i$. The expression on the right is a linear combination of position vectors with coefficients summing to 1 — an **affine combination** — and affine combinations, unlike plain linear ones, are independent of the choice of origin: shift every $\\mathbf{r}_i$ by the same vector and $\\mathbf{c}$ shifts by it too. That invariance is the signature of a genuinely geometric quantity.',
          },
          {
            kind: 'example',
            heading: 'Center of mass, computed',
            body: 'Masses $2$, $3$ and $5$ sit at $P(1, 0, 0)$, $Q(0, 2, 0)$ and $R(0, 0, 3)$. The center of mass is $\\mathbf{c} = \\tfrac{2\\langle 1,0,0\\rangle + 3\\langle 0,2,0\\rangle + 5\\langle 0,0,3\\rangle}{10} = \\tfrac{1}{10}\\langle 2, 6, 15\\rangle = \\langle 0.2, 0.6, 1.5\\rangle$. As a check, the weighted displacements about $\\mathbf{c}$ must cancel: $2\\langle 0.8, -0.6, -1.5\\rangle + 3\\langle -0.2, 1.4, -1.5\\rangle + 5\\langle -0.2, -0.6, 1.5\\rangle = \\langle 0, 0, 0\\rangle$, and they do, coordinate by coordinate. Note that $\\mathbf{c}$ lands inside the triangle $PQR$ — the convex-hull property of affine combinations with nonnegative weights.',
          },
          {
            kind: 'application',
            heading: 'The triangle of forces',
            body: 'A weight of $100$ N hangs from two ropes that each make $30^\\circ$ with the ceiling. Symmetry makes the tensions equal, $T$; resolving each rope force into vertical and horizontal components gives vertical total $2T\\sin 30^\\circ = T$ and horizontal total zero. Equilibrium of the vertical direction requires $T = 100$ N: each rope carries the full weight of the load, a result that surprises builders and pleases trigonometricians. As the ropes are pulled flatter, $T = W/(2\\sin\\theta)$ grows without bound — the reason a tow cable snapped taut cannot be pulled truly straight, and why power lines always sag. Three concurrent forces balance exactly when their vectors, laid head to tail, close a triangle: the vector sum returning to its start.',
          },
          {
            kind: 'remark',
            heading: 'Parallelism and the zero vector',
            body: 'The definition “$\\mathbf{a}$ is parallel to $\\mathbf{b}$ if $\\mathbf{a} = c\\,\\mathbf{b}$ for some scalar $c$” silently requires $\\mathbf{b} \\ne \\mathbf{0}$, because the zero vector would make every vector “parallel” to everything while itself having no direction. Textbooks and theorem statements repeatedly exclude $\\mathbf{0}$ for exactly this reason; in the cross product section the condition becomes $\\mathbf{a} \\times \\mathbf{b} = \\mathbf{0}$, which also flags parallelism but for the same reason needs nonzero vectors to say anything. Learning to notice these quiet exclusions is learning to read mathematical prose the way it is written: with the edge cases doing real work.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Affine structure and the plane as algebra',
        blocks: [
          {
            kind: 'para',
            heading: 'Points are not vectors',
            body: 'Euclidean space is not naturally a vector space — it has no distinguished origin. What it has is a **torsor** for the translation group: a set on which the vectors act freely and transitively, so that $\\overrightarrow{AB}$ is well defined for every pair of points, and choosing an origin $O$ (an arbitrary act!) identifies each point $P$ with the vector $\\overrightarrow{OP}$. The operations that are genuinely geometric — midpoints, centroids, ratios along segments, barycentric coordinates — are the affine combinations $\\sum \\lambda_i \\mathbf{r}_i$ with $\\sum \\lambda_i = 1$, precisely because these are the ones unaffected by the choice of origin. Galilean spacetime carries the same structure: no event is the origin, and the step from one event to another is a vector. Weyl built exactly this distinction into the foundations of relativity, taking “point” and “vector” as separate primitive notions.',
          },
          {
            kind: 'derivation',
            heading: 'The plane is an algebra: complex numbers',
            body: 'Identify the plane with $\\mathbb{C}$ by $\\langle a_1, a_2\\rangle \\leftrightarrow a_1 + a_2 i$ and multiply: $$(a_1 + a_2 i)(b_1 + b_2 i) = (a_1b_1 - a_2b_2) + (a_1b_2 + a_2b_1)\\,i.$$ The real part is exactly the dot product $\\mathbf{a} \\cdot \\mathbf{b}$ and the imaginary part is exactly the two-dimensional cross product (the signed area $a_1b_2 - a_2b_1$). One complex multiplication performs both products of the next two sections simultaneously — dot and cross are the shadows cast by a single algebraic operation when complex numbers are split into real and imaginary parts. Multiplication by the unit complex number $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ rotates every plane vector by $\\theta$, as the angle-addition formulas confirm on components; so rotations of the plane are themselves a multiplication. The 3D story (cross product, rotations of space) will need the quaternions, in Section 12.4’s research tier.',
          },
          {
            kind: 'application',
            heading: 'Bézier curves from affine combinations',
            body: 'Repeated affine combinations generate the curves of computer-aided design. From control points $\\mathbf{p}_0, \\mathbf{p}_1, \\mathbf{p}_2$, define $\\mathbf{q}_0(t) = (1-t)\\mathbf{p}_0 + t\\mathbf{p}_1$ and $\\mathbf{q}_1(t) = (1-t)\\mathbf{p}_1 + t\\mathbf{p}_2$ (points sliding along the segments at the common rate $t$), then $\\mathbf{B}(t) = (1-t)\\mathbf{q}_0 + t\\mathbf{q}_1$: the quadratic **Bézier curve** of de Casteljau’s algorithm. Expanding, $\\mathbf{B}(t) = (1-t)^2\\mathbf{p}_0 + 2t(1-t)\\mathbf{p}_1 + t^2\\mathbf{p}_2$, a combination whose coefficients are nonnegative and sum to 1 for $0 \\le t \\le 1$ — so the whole curve stays inside the triangle of control points (the convex-hull property). Every font glyph on this screen is drawn by higher-degree Béziers: mass points and lever rules, iterated.',
          },
          {
            kind: 'open',
            heading: 'Why three dimensions?',
            body: 'The vector algebra of this chapter is tuned to dimension three in ways that are easy to miss. A bilinear “product” of two vectors that is again a vector, perpendicular to both and with the expected length, exists **only** in dimensions 3 and 7 — in dimension 7 it exists by grace of the octonions and fails the Jacobi identity that makes 3-dimensional mechanics coherent. Frobenius’s theorem limits the associative division algebras to $\\mathbb{R}, \\mathbb{C}, \\mathbb{H}$ (dimensions 1, 2, 4), and Hurwitz extended the classification to the normed ones, adding only the octonions in dimension 8. Whether the observed three-dimensionality of space connects to such algebraic constraints — via stability of orbits, of wave propagation, or of quantum mechanics — remains a speculative but active question in mathematical physics: no theorem derives the dimension of the world.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 12.3
  {
    sectionId: 'calc-ch12-s3',
    readingTime: 8,
    intro: 'Multiplying two vectors is not one idea but two: the **dot product** of this section measures how much two vectors agree in direction, and the cross product of the next section measures how much they turn away from each other. The dot product is defined by a one-line component formula, yet it secretly knows the angle between the vectors, the length of every projection and the work done by every constant force. Its two faces — a bookkeeping formula in components and a geometric statement about angles — are equivalent, and proving that equivalence via the law of cosines is the theoretical heart of the section. Everything later in this book that involves angles, orthogonality or projection in space runs on this one product.',
    objectives: [
      'Compute the dot product $\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3$ and use its algebraic properties, including $\\mathbf{a} \\cdot \\mathbf{a} = |\\mathbf{a}|^2$',
      'Prove and apply the angle formula $\\cos\\theta = \\dfrac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$, deriving it from the law of cosines',
      'Test orthogonality with $\\mathbf{a} \\cdot \\mathbf{b} = 0$, respecting the zero-vector convention',
      'Compute scalar and vector projections $\\mathrm{comp}_{\\mathbf{b}}\\,\\mathbf{a}$ and $\\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a}$, and decompose a vector into parallel and perpendicular parts',
      'Calculate the work $W = \\mathbf{F} \\cdot \\mathbf{D}$ done by a constant force along a displacement',
      'Find direction angles and direction cosines, and verify $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$',
    ],
    concepts: [
      {
        term: 'The dot product',
        kind: 'definition',
        statement: 'If $\\mathbf{a} = \\langle a_1, a_2, a_3\\rangle$ and $\\mathbf{b} = \\langle b_1, b_2, b_3\\rangle$, the **dot product** (scalar product, inner product) is the number $$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3.$$ The product of two vectors is a **scalar**, not a vector.',
        detail: 'For example $\\langle 2, 4, -3\\rangle \\cdot \\langle 1, -2, 2\\rangle = 2 - 8 - 6 = -12$. The same definition with two components covers the plane, and with $n$ components it covers $\\mathbb{R}^n$: multiply matching components and add. The negative sign is meaningful — it records an obtuse angle, as the angle theorem below makes precise.',
      },
      {
        term: 'Properties of the dot product',
        kind: 'theorem',
        statement: 'For all vectors $\\mathbf{a}, \\mathbf{b}, \\mathbf{c}$ and scalars $c$: (1) $\\mathbf{a} \\cdot \\mathbf{a} = |\\mathbf{a}|^2 \\ge 0$, with equality only for $\\mathbf{a} = \\mathbf{0}$; (2) $\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{b} \\cdot \\mathbf{a}$; (3) $\\mathbf{a} \\cdot (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{a} \\cdot \\mathbf{c}$; (4) $(c\\mathbf{a}) \\cdot \\mathbf{b} = c(\\mathbf{a} \\cdot \\mathbf{b}) = \\mathbf{a} \\cdot (c\\mathbf{b})$; (5) $\\mathbf{0} \\cdot \\mathbf{a} = 0$.',
        detail: 'Proof. Each is a one-line computation in components. For (1), $\\mathbf{a} \\cdot \\mathbf{a} = a_1^2 + a_2^2 + a_3^2 = |\\mathbf{a}|^2$, a sum of squares, zero only when every component is. For (3), $\\mathbf{a} \\cdot (\\mathbf{b} + \\mathbf{c}) = \\sum a_i(b_i + c_i) = \\sum a_ib_i + \\sum a_ic_i = \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{a} \\cdot \\mathbf{c}$ — the distributive law of ordinary arithmetic read aloud. Properties (2) and (4) are commutativity and associativity of multiplication, coordinate by coordinate. These five properties, not the component formula, are what make every later computation legal — including the expansion $|\\mathbf{a} + \\mathbf{b}|^2 = |\\mathbf{a}|^2 + 2\\,\\mathbf{a} \\cdot \\mathbf{b} + |\\mathbf{b}|^2$, the workhorse of the next theorem.',
      },
      {
        term: 'The angle between two vectors',
        kind: 'theorem',
        statement: 'If $\\theta$ is the angle between two nonzero vectors $\\mathbf{a}$ and $\\mathbf{b}$, with $0 \\le \\theta \\le \\pi$, then $$\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta, \\qquad \\text{that is,} \\qquad \\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}.$$',
        detail: 'Proof. Place the tails of $\\mathbf{a}$ and $\\mathbf{b}$ at a common point and let $\\theta$ be the included angle, so that the third side of the triangle, running from the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$, is the vector $\\mathbf{a} - \\mathbf{b}$. Compute its squared length twice. Algebra: by the properties above, $|\\mathbf{a} - \\mathbf{b}|^2 = (\\mathbf{a} - \\mathbf{b}) \\cdot (\\mathbf{a} - \\mathbf{b}) = |\\mathbf{a}|^2 - \\mathbf{a} \\cdot \\mathbf{b} - \\mathbf{b} \\cdot \\mathbf{a} + |\\mathbf{b}|^2 = |\\mathbf{a}|^2 + |\\mathbf{b}|^2 - 2\\,\\mathbf{a} \\cdot \\mathbf{b}$. Geometry: the law of cosines applied to this same triangle gives $|\\mathbf{a} - \\mathbf{b}|^2 = |\\mathbf{a}|^2 + |\\mathbf{b}|^2 - 2|\\mathbf{a}||\\mathbf{b}|\\cos\\theta$. The two expressions for one length must agree; subtracting and dividing by $-2$ leaves $\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta$, as claimed.',
      },
      {
        term: 'Orthogonal vectors',
        kind: 'definition',
        statement: 'Two vectors $\\mathbf{a}$ and $\\mathbf{b}$ are **orthogonal** (perpendicular) if and only if $$\\mathbf{a} \\cdot \\mathbf{b} = 0.$$ By convention, the zero vector is orthogonal to every vector.',
        detail: 'For nonzero vectors this is exactly perpendicularity: since $\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta$ and the lengths are positive, the product vanishes precisely when $\\cos\\theta = 0$, that is $\\theta = \\pi/2$. Orthogonality is the most-used test in the book: a vanishing dot product replaces “the angle is a right angle” with arithmetic. For instance $\\langle 2, 2, 0\\rangle \\cdot \\langle 2, -2, 1\\rangle = 4 - 4 + 0 = 0$, so those two vectors are perpendicular whatever they look like.',
      },
      {
        term: 'Scalar and vector projections',
        kind: 'method',
        statement: 'The **scalar projection of $\\mathbf{a}$ onto $\\mathbf{b}$** (also called the component of $\\mathbf{a}$ along $\\mathbf{b}$) is the signed length $$\\mathrm{comp}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{b}|} = |\\mathbf{a}|\\cos\\theta,$$ and the **vector projection of $\\mathbf{a}$ onto $\\mathbf{b}$** is $$\\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\left(\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{b}|^2}\\right)\\mathbf{b} = \\left(\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{b}|}\\right)\\frac{\\mathbf{b}}{|\\mathbf{b}|}.$$',
        detail: 'The vector projection is (scalar projection) × (unit vector along $\\mathbf{b}$): the Section 12.2 factorization of magnitude and direction in action. The scalar projection is negative when the angle is obtuse — the shadow falls behind the tail of $\\mathbf{b}$. The remainder $\\mathbf{a} - \\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a}$ is orthogonal to $\\mathbf{b}$, so every vector splits as $\\mathbf{a} = \\mathbf{a}_{\\parallel} + \\mathbf{a}_{\\perp}$ with $\\mathbf{a}_{\\parallel}$ parallel to $\\mathbf{b}$ and $\\mathbf{a}_{\\perp} \\cdot \\mathbf{b} = 0$, and the Pythagorean theorem then gives $|\\mathbf{a}|^2 = |\\mathbf{a}_{\\parallel}|^2 + |\\mathbf{a}_{\\perp}|^2$.',
      },
      {
        term: 'Work done by a constant force',
        kind: 'insight',
        statement: 'If a constant force $\\mathbf{F}$ moves an object along the displacement $\\mathbf{D}$, the **work** done is $$W = \\mathbf{F} \\cdot \\mathbf{D} = |\\mathbf{F}||\\mathbf{D}|\\cos\\theta.$$ Only the component of the force along the displacement does work.',
        detail: 'Resolve $\\mathbf{F}$ into $\\mathbf{F}_{\\parallel}$ along $\\mathbf{D}$ and $\\mathbf{F}_{\\perp}$ perpendicular to it. The perpendicular component pushes sideways and accomplishes nothing; the parallel component, of length $|\\mathbf{F}|\\cos\\theta$, acts along the entire displacement, so $W = |\\mathbf{F}_{\\parallel}||\\mathbf{D}| = |\\mathbf{F}||\\mathbf{D}|\\cos\\theta = \\mathbf{F} \\cdot \\mathbf{D}$. Carrying a suitcase level down a hallway does zero work on it — the force is vertical, the motion horizontal, and the dot product knows. With $\\mathbf{F}$ in newtons and $\\mathbf{D}$ in meters, $W$ comes out in joules.',
      },
      {
        term: 'Direction angles and direction cosines',
        kind: 'definition',
        statement: 'The **direction angles** $\\alpha, \\beta, \\gamma$ of a nonzero vector $\\mathbf{a}$ are the angles it makes with the positive $x$-, $y$- and $z$-axes. Their cosines are $$\\cos\\alpha = \\frac{\\mathbf{a} \\cdot \\mathbf{i}}{|\\mathbf{a}|} = \\frac{a_1}{|\\mathbf{a}|}, \\qquad \\cos\\beta = \\frac{\\mathbf{a} \\cdot \\mathbf{j}}{|\\mathbf{a}|} = \\frac{a_2}{|\\mathbf{a}|}, \\qquad \\cos\\gamma = \\frac{\\mathbf{a} \\cdot \\mathbf{k}}{|\\mathbf{a}|} = \\frac{a_3}{|\\mathbf{a}|},$$ and they always satisfy $$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1.$$',
        detail: 'Derivation: each direction cosine is the scalar projection of $\\mathbf{a}$ onto a coordinate axis, because $\\mathbf{a} \\cdot \\mathbf{i} = a_1$, $\\mathbf{a} \\cdot \\mathbf{j} = a_2$ and $\\mathbf{a} \\cdot \\mathbf{k} = a_3$. Squaring and adding gives $\\tfrac{a_1^2 + a_2^2 + a_3^2}{|\\mathbf{a}|^2} = \\tfrac{|\\mathbf{a}|^2}{|\\mathbf{a}|^2} = 1$. In other words $\\langle \\cos\\alpha, \\cos\\beta, \\cos\\gamma\\rangle$ is exactly the unit vector $\\mathbf{a}/|\\mathbf{a}|$: the direction cosines ARE the components of the direction. A vector making equal angles with all three axes points along $\\langle 1, 1, 1\\rangle$, the body diagonal of a cube, with common angle $\\arccos(1/\\sqrt{3}) \\approx 54.7^\\circ$.',
      },
    ],
    figures: [
      {
        caption: 'The orthogonal projection of $\\mathbf{a}$ onto $\\mathbf{b}$: the scalar projection $\\mathrm{comp}_{\\mathbf{b}}\\,\\mathbf{a} = |\\mathbf{a}|\\cos\\theta$ is the signed length of the shadow that $\\mathbf{a}$ casts on the line of $\\mathbf{b}$, and the vector projection $\\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a} = (\\mathrm{comp}_{\\mathbf{b}}\\,\\mathbf{a})\\,\\mathbf{b}/|\\mathbf{b}|$ points along $\\mathbf{b}$. What is left over, $\\mathbf{a} - \\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a}$, is the perpendicular part; it meets the line of $\\mathbf{b}$ at a right angle, marked by the small square.',
        svg: '<svg viewBox="0 0 640 300" width="100%" role="img" aria-label="Two vectors a and b from a common tail, with the vector projection of a onto b drawn along b, and the perpendicular remainder running from the foot of the projection to the tip of a, meeting at a right angle.">\n  <polygon points="140,250 352.4,214.6 330,80" fill="currentColor" fill-opacity="0.04" stroke="none"/>\n  <polyline points="140,250 500,190" fill="none" stroke="#10b981" stroke-width="2"/>\n  <polygon points="500,190 491.7,195 490.5,188" fill="currentColor" stroke="none"/>\n  <polyline points="140,250 330,80" fill="none" stroke="#f59e0b" stroke-width="2"/>\n  <polygon points="330,80 325.6,88.6 321,83.4" fill="currentColor" stroke="none"/>\n  <polyline points="140,250 352.4,214.6" fill="none" stroke="#f43f5e" stroke-width="2.4"/>\n  <polygon points="352.4,214.6 344.1,219.6 342.9,212.7" fill="currentColor" stroke="none"/>\n  <polyline points="352.4,214.6 332.3,93.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4" opacity="0.85"/>\n  <polygon points="332.3,93.8 330.4,103.3 337.3,102.1" fill="currentColor" stroke="none"/>\n  <polyline points="350.4,202.8 362.2,200.8 364.2,212.6" fill="none" stroke="currentColor" stroke-width="1"/>\n  <path d="M 169.8 223.3 A 40 40 0 0 1 179.5 243.4" fill="none" stroke="currentColor" stroke-width="1.2"/>\n  <circle cx="140" cy="250" r="3.5" fill="currentColor" stroke="none"/>\n  <text x="509" y="184" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981">b</text>\n  <text x="320" y="74" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f59e0b">a</text>\n  <text x="372" y="203" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f43f5e">proj</text>\n  <text x="264" y="156" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">a − proj</text>\n  <text x="188" y="233" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">θ</text>\n  <text x="126" y="264" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">O</text>\n</svg>',
        afterConcept: 5,
      },
      {
        caption: 'Work as a dot product: a 30-newton force pulls a wagon at an angle with $\\cos\\theta = \\tfrac{4}{5}$ while the wagon advances 12 meters, so $W = \\mathbf{F} \\cdot \\mathbf{D} = |\\mathbf{F}||\\mathbf{D}|\\cos\\theta = 30 \\cdot 12 \\cdot \\tfrac{4}{5} = 288$ J. Only the component $|\\mathbf{F}|\\cos\\theta = 24$ N along the motion does work; the perpendicular $|\\mathbf{F}|\\sin\\theta = 18$ N merely tries to lift the wagon.',
        svg: '<svg viewBox="0 0 640 300" width="100%" role="img" aria-label="A wagon on the ground pulled by a force F at angle theta above the horizontal while moving through displacement D; the force decomposes into a component along the motion and a perpendicular lifting component.">\n  <polyline points="100,250 580,250" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.55"/>\n  <rect x="170" y="195" width="85" height="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>\n  <circle cx="191" cy="241.5" r="8.5" fill="none" stroke="currentColor" stroke-width="1.5"/>\n  <circle cx="234" cy="241.5" r="8.5" fill="none" stroke="currentColor" stroke-width="1.5"/>\n  <polyline points="160,270 450,270" fill="none" stroke="#10b981" stroke-width="2"/>\n  <polygon points="450,270 441,273.5 441,266.5" fill="currentColor" stroke="none"/>\n  <polyline points="258,230 378,230" fill="none" stroke="#10b981" stroke-width="1.6" stroke-dasharray="4 4" opacity="0.85"/>\n  <polygon points="378,230 369,233.5 369,226.5" fill="currentColor" stroke="none"/>\n  <polyline points="258,230 378,140" fill="none" stroke="#f59e0b" stroke-width="2.2"/>\n  <polygon points="378,140 372.9,148.2 368.7,142.6" fill="currentColor" stroke="none"/>\n  <polyline points="378,230 378,148" fill="none" stroke="#f43f5e" stroke-width="1.6" stroke-dasharray="4 4" opacity="0.85"/>\n  <polygon points="378,148 381.5,157 374.5,157" fill="currentColor" stroke="none"/>\n  <polyline points="390,230 390,218 378,218" fill="none" stroke="currentColor" stroke-width="1"/>\n  <path d="M 294 203 A 45 45 0 0 1 303 230" fill="none" stroke="currentColor" stroke-width="1.2"/>\n  <circle cx="258" cy="230" r="3" fill="currentColor" stroke="none"/>\n  <text x="386" y="136" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f59e0b">F, |F| = 30 N</text>\n  <text x="384" y="190" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f43f5e">|F| sin θ = 18 N</text>\n  <text x="288" y="244" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981">|F| cos θ = 24 N</text>\n  <text x="458" y="274" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#10b981">D = 12 m</text>\n  <text x="308" y="216" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">θ</text>\n  <text x="404" y="172" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f43f5e">W = F · D = 288 J</text>\n</svg>',
        afterConcept: 6,
      },
    ],
    examples: [
      {
        title: 'Dot products, an angle, and a hidden rhombus',
        problem: 'For $\\mathbf{a} = \\langle 2, 2, 0\\rangle$ and $\\mathbf{b} = \\langle 2, 0, 2\\rangle$: compute $\\mathbf{a} \\cdot \\mathbf{b}$, find the angle between the vectors, describe all vectors orthogonal to $\\mathbf{a}$, and decide whether the diagonals of the parallelogram spanned by $\\mathbf{a}$ and $\\mathbf{b}$ are perpendicular.',
        steps: [
          { label: 'Step 1: The dot product', text: '$\\mathbf{a} \\cdot \\mathbf{b} = (2)(2) + (2)(0) + (0)(2) = 4$. Also $\\mathbf{a} \\cdot \\mathbf{a} = 8 = |\\mathbf{a}|^2$ and $\\mathbf{b} \\cdot \\mathbf{b} = 8 = |\\mathbf{b}|^2$, so $|\\mathbf{a}| = |\\mathbf{b}| = 2\\sqrt{2}$.' },
          { label: 'Step 2: The angle', text: '$\\cos\\theta = \\dfrac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|} = \\dfrac{4}{(2\\sqrt{2})(2\\sqrt{2})} = \\dfrac{4}{8} = \\dfrac{1}{2}$, so $\\theta = 60^\\circ$.' },
          { label: 'Step 3: Vectors orthogonal to $\\mathbf{a}$', text: 'A vector $\\mathbf{x} = \\langle x_1, x_2, x_3\\rangle$ is orthogonal to $\\mathbf{a}$ when $\\mathbf{a} \\cdot \\mathbf{x} = 2x_1 + 2x_2 = 0$, that is $x_1 = -x_2$ with $x_3$ free: for instance $\\langle 1, -1, 0\\rangle$ and $\\langle 0, 0, 1\\rangle$. The set of all solutions is a plane through the origin — a preview of Section 12.5.' },
          { label: 'Step 4: The diagonals', text: 'The diagonals of the parallelogram are $\\mathbf{a} + \\mathbf{b} = \\langle 4, 2, 2\\rangle$ and $\\mathbf{a} - \\mathbf{b} = \\langle 0, 2, -2\\rangle$, and their dot product is $0 + 4 - 4 = 0$: they are perpendicular. In general $(\\mathbf{a} + \\mathbf{b}) \\cdot (\\mathbf{a} - \\mathbf{b}) = |\\mathbf{a}|^2 - |\\mathbf{b}|^2$, so equal side lengths force perpendicular diagonals — the rhombus criterion, proved by dot products without a picture.' },
        ],
        result: '$\\mathbf{a} \\cdot \\mathbf{b} = 4$ and $\\theta = 60^\\circ$; the orthogonal vectors to $\\mathbf{a}$ form the plane $x_1 = -x_2$; the diagonals are perpendicular because $|\\mathbf{a}| = |\\mathbf{b}|$ (a rhombus).',
      },
      {
        title: 'Projecting one vector onto another',
        problem: 'For $\\mathbf{a} = \\langle 2, -1, 3\\rangle$ and $\\mathbf{b} = \\langle 1, 2, 1\\rangle$, find the scalar and vector projections of $\\mathbf{a}$ onto $\\mathbf{b}$, and decompose $\\mathbf{a}$ into parts parallel and perpendicular to $\\mathbf{b}$.',
        steps: [
          { label: 'Step 1: The ingredients', text: '$\\mathbf{a} \\cdot \\mathbf{b} = 2 - 2 + 3 = 3$; and $|\\mathbf{b}|^2 = 1 + 4 + 1 = 6$, so $|\\mathbf{b}| = \\sqrt{6}$.' },
          { label: 'Step 2: Scalar projection', text: '$\\mathrm{comp}_{\\mathbf{b}}\\,\\mathbf{a} = \\dfrac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{b}|} = \\dfrac{3}{\\sqrt{6}} = \\dfrac{\\sqrt{6}}{2} \\approx 1.22$. It is positive, so the angle is acute and the shadow falls forward along $\\mathbf{b}$.' },
          { label: 'Step 3: Vector projection', text: '$\\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\dfrac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{b}|^2}\\,\\mathbf{b} = \\dfrac{3}{6}\\langle 1, 2, 1\\rangle = \\left\\langle \\tfrac{1}{2}, 1, \\tfrac{1}{2} \\right\\rangle$.' },
          { label: 'Step 4: The perpendicular part', text: '$\\mathbf{a} - \\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\left\\langle \\tfrac{3}{2}, -2, \\tfrac{5}{2} \\right\\rangle$, and the check passes: $\\left\\langle \\tfrac{3}{2}, -2, \\tfrac{5}{2} \\right\\rangle \\cdot \\mathbf{b} = \\tfrac{3}{2} - 4 + \\tfrac{5}{2} = 0$. So $\\mathbf{a} = \\left\\langle \\tfrac{1}{2}, 1, \\tfrac{1}{2} \\right\\rangle + \\left\\langle \\tfrac{3}{2}, -2, \\tfrac{5}{2} \\right\\rangle$, parallel plus perpendicular.' },
          { label: 'Step 5: Pythagoras checks', text: '$|\\mathbf{a}|^2 = 4 + 1 + 9 = 14$, while $\\left(\\mathrm{comp}_{\\mathbf{b}}\\,\\mathbf{a}\\right)^2 + |\\mathbf{a} - \\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a}|^2 = \\tfrac{3}{2} + \\tfrac{25}{2} = 14$ — the decomposition splits the length orthogonally, as it must.' },
        ],
        result: '$\\mathrm{comp}_{\\mathbf{b}}\\,\\mathbf{a} = \\sqrt{6}/2 \\approx 1.22$; $\\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\langle \\tfrac{1}{2}, 1, \\tfrac{1}{2}\\rangle$; perpendicular remainder $\\langle \\tfrac{3}{2}, -2, \\tfrac{5}{2}\\rangle$.',
      },
      {
        title: 'Work done by a constant force',
        problem: 'A crate is dragged along a floor by a force $\\mathbf{F} = \\langle 6, 0, 8\\rangle$ newtons while it moves from the origin to the point $Q(7, 0, 1)$, in meters. Find the work done, the angle between the force and the displacement, and the effective component of the force.',
        steps: [
          { label: 'Step 1: Displacement and magnitudes', text: '$\\mathbf{D} = \\overrightarrow{OQ} = \\langle 7, 0, 1\\rangle$ m, with $|\\mathbf{D}| = \\sqrt{49 + 1} = \\sqrt{50} = 5\\sqrt{2} \\approx 7.07$ m; and $|\\mathbf{F}| = \\sqrt{36 + 64} = 10$ N.' },
          { label: 'Step 2: Work', text: '$W = \\mathbf{F} \\cdot \\mathbf{D} = (6)(7) + (0)(0) + (8)(1) = 42 + 8 = 50$ J.' },
          { label: 'Step 3: The angle', text: '$\\cos\\theta = \\dfrac{\\mathbf{F} \\cdot \\mathbf{D}}{|\\mathbf{F}||\\mathbf{D}|} = \\dfrac{50}{(10)(5\\sqrt{2})} = \\dfrac{1}{\\sqrt{2}}$, so $\\theta = 45^\\circ$ — the force points halfway between along-the-floor and straight-up.' },
          { label: 'Step 4: Effective force', text: 'The component of $\\mathbf{F}$ along $\\mathbf{D}$ is $\\mathrm{comp}_{\\mathbf{D}}\\,\\mathbf{F} = 50/(5\\sqrt{2}) = 5\\sqrt{2} \\approx 7.07$ N, and indeed $W = \\left(\\mathrm{comp}_{\\mathbf{D}}\\,\\mathbf{F}\\right)|\\mathbf{D}| = (5\\sqrt{2})(5\\sqrt{2}) = 50$ J. The rest of the force, $\\mathbf{F} - \\mathrm{proj}_{\\mathbf{D}}\\,\\mathbf{F}$, is pure lifting effort and does no work.' },
        ],
        result: '$W = 50$ J, with $\\theta = 45^\\circ$ between force and motion; the effective component of the force is $5\\sqrt{2} \\approx 7.07$ N.',
      },
      {
        title: 'Direction angles of a vector',
        problem: 'Find the direction angles of $\\mathbf{a} = \\langle 2, 3, 6\\rangle$, verify that the squares of the direction cosines sum to 1, and determine which vectors make equal angles with all three axes.',
        steps: [
          { label: 'Step 1: The magnitude', text: '$|\\mathbf{a}| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.' },
          { label: 'Step 2: The cosines', text: '$\\cos\\alpha = a_1/|\\mathbf{a}| = 2/7$, $\\cos\\beta = 3/7$, $\\cos\\gamma = 6/7$ — each is the scalar projection of $\\mathbf{a}$ onto a coordinate axis.' },
          { label: 'Step 3: The identity', text: '$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = \\tfrac{4 + 9 + 36}{49} = \\tfrac{49}{49} = 1$. It is the statement that $\\langle \\cos\\alpha, \\cos\\beta, \\cos\\gamma\\rangle = \\mathbf{a}/|\\mathbf{a}|$ is a unit vector.' },
          { label: 'Step 4: The angles', text: '$\\alpha = \\arccos(2/7) \\approx 73.4^\\circ$, $\\beta = \\arccos(3/7) \\approx 64.6^\\circ$, $\\gamma = \\arccos(6/7) \\approx 31.0^\\circ$ — closest to the $z$-axis, as the largest component suggests.' },
          { label: 'Step 5: Equal angles', text: 'Equal direction angles force $\\cos\\alpha = \\cos\\beta = \\cos\\gamma = 1/\\sqrt{3}$, since the three squares must sum to 1; the direction is therefore $\\pm\\langle 1, 1, 1\\rangle/\\sqrt{3}$ and the common angle is $\\arccos(1/\\sqrt{3}) \\approx 54.7^\\circ$: the body diagonal of a cube.' },
        ],
        result: '$(\\cos\\alpha, \\cos\\beta, \\cos\\gamma) = (2/7, 3/7, 6/7)$; $\\alpha \\approx 73.4^\\circ$, $\\beta \\approx 64.6^\\circ$, $\\gamma \\approx 31.0^\\circ$; equal-angle vectors point along $\\langle 1, 1, 1\\rangle$, at $\\approx 54.7^\\circ$ from every axis.',
      },
    ],
    keyTakeaways: [
      'The dot product is componentwise: $\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3$, a scalar, with $\\mathbf{a} \\cdot \\mathbf{a} = |\\mathbf{a}|^2$.',
      'Angle and orthogonality: $\\cos\\theta = \\mathbf{a} \\cdot \\mathbf{b}/(|\\mathbf{a}||\\mathbf{b}|)$, and nonzero vectors are perpendicular exactly when $\\mathbf{a} \\cdot \\mathbf{b} = 0$.',
      'Projections: $\\mathrm{comp}_{\\mathbf{b}}\\,\\mathbf{a} = (\\mathbf{a} \\cdot \\mathbf{b})/|\\mathbf{b}|$ is a signed length and $\\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a} = (\\mathbf{a} \\cdot \\mathbf{b}/|\\mathbf{b}|^2)\\,\\mathbf{b}$ is the vector shadow; the remainder is orthogonal to $\\mathbf{b}$.',
      'Work is a dot product: $W = \\mathbf{F} \\cdot \\mathbf{D}$ — only the component of force along the displacement counts.',
      'The direction cosines of $\\mathbf{a}$ are the components of $\\mathbf{a}/|\\mathbf{a}|$, so they satisfy $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$ and determine the direction completely.',
    ],
    quiz: [
      {
        q: 'If $\\mathbf{a} = \\langle 2, -1, 2\\rangle$ and $\\mathbf{b} = \\langle 1, 2, 3\\rangle$, then $\\mathbf{a} \\cdot \\mathbf{b} =$',
        options: [`$5$`, `$6$`, `$7$`, `$2$`],
        answer: 1,
        explanation: 'Componentwise products, added: $(2)(1) + (-1)(2) + (2)(3) = 2 - 2 + 6 = 6$.',
      },
      {
        q: 'The angle between $\\mathbf{a} = \\langle 1, 0, 1\\rangle$ and $\\mathbf{b} = \\langle 0, 1, 1\\rangle$ is:',
        options: [`$30^\\circ$`, `$45^\\circ$`, `$60^\\circ$`, `$90^\\circ$`],
        answer: 2,
        explanation: '$\\mathbf{a} \\cdot \\mathbf{b} = 1$ while $|\\mathbf{a}| = |\\mathbf{b}| = \\sqrt{2}$, so $\\cos\\theta = 1/2$ and $\\theta = 60^\\circ$.',
      },
      {
        q: 'Which of these vectors is orthogonal to $\\langle 2, -1, 3\\rangle$?',
        options: [`$\\langle 3, 1, -2\\rangle$`, `$\\langle 2, 1, 3\\rangle$`, `$\\langle -1, 3, 2\\rangle$`, `$\\langle 1, 2, 0\\rangle$`],
        answer: 3,
        explanation: '$\\langle 2, -1, 3\\rangle \\cdot \\langle 1, 2, 0\\rangle = 2 - 2 + 0 = 0$; the other dot products are $-1$, $12$ and $1$.',
      },
      {
        q: 'The scalar projection of $\\mathbf{a} = \\langle 2, 1, 2\\rangle$ onto $\\mathbf{b} = \\langle 3, 4, 0\\rangle$ is:',
        options: [`$10$`, `$5$`, `$2$`, `$\\sqrt{5}$`],
        answer: 2,
        explanation: '$\\mathbf{a} \\cdot \\mathbf{b} = 6 + 4 + 0 = 10$ and $|\\mathbf{b}| = \\sqrt{9 + 16} = 5$, so $\\mathrm{comp}_{\\mathbf{b}}\\,\\mathbf{a} = 10/5 = 2$.',
      },
      {
        q: 'The vector projection of $\\mathbf{a} = \\langle 2, 1, 2\\rangle$ onto $\\mathbf{b} = \\langle 3, 4, 0\\rangle$ is:',
        options: [`$\\langle 6, 8, 0\\rangle$`, `$\\left\\langle \\tfrac{2}{5}, \\tfrac{1}{5}, \\tfrac{2}{5} \\right\\rangle$`, `$\\langle 2, 1, 0\\rangle$`, `$\\left\\langle \\tfrac{6}{5}, \\tfrac{8}{5}, 0 \\right\\rangle$`],
        answer: 3,
        explanation: '$\\mathbf{a} \\cdot \\mathbf{b}/|\\mathbf{b}|^2 = 10/25 = 2/5$, so $\\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\tfrac{2}{5}\\langle 3, 4, 0\\rangle = \\langle 6/5, 8/5, 0\\rangle$.',
      },
      {
        q: 'A force $\\mathbf{F} = \\langle 10, -3, 2\\rangle$ newtons acts while an object undergoes the displacement $\\mathbf{D} = \\langle 4, 6, 2\\rangle$ meters. The work done is:',
        options: ['$30$ J', '$22$ J', '$34$ J', '$26$ J'],
        answer: 3,
        explanation: '$W = \\mathbf{F} \\cdot \\mathbf{D} = (10)(4) + (-3)(6) + (2)(2) = 40 - 18 + 4 = 26$ joules; the parts of the force perpendicular to the motion contribute nothing.',
      },
      {
        q: 'For the vector $\\mathbf{a} = \\langle 1, 2, 2\\rangle$, the direction cosine $\\cos\\beta$ (with the positive $y$-axis) is:',
        options: [`$\\tfrac{1}{3}$`, `$\\tfrac{2}{3}$`, `$\\tfrac{2}{9}$`, `$\\tfrac{\\sqrt{2}}{3}$`],
        answer: 1,
        explanation: '$|\\mathbf{a}| = \\sqrt{1 + 4 + 4} = 3$, so $\\cos\\beta = a_2/|\\mathbf{a}| = 2/3$; as a check, $\\tfrac{1}{9} + \\tfrac{4}{9} + \\tfrac{4}{9} = 1$.',
      },
      {
        q: 'If $|\\mathbf{a}| = 3$, $|\\mathbf{b}| = 4$ and the angle between them is $60^\\circ$, then $\\mathbf{a} \\cdot \\mathbf{b} =$',
        options: [`$12$`, `$6$`, `$6\\sqrt{3}$`, `$4$`],
        answer: 1,
        explanation: '$\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos 60^\\circ = 12 \\cdot \\tfrac{1}{2} = 6$.',
      },
      {
        q: 'If $|\\mathbf{a}| = 5$ and $|\\mathbf{b}| = 2$, the dot product $\\mathbf{a} \\cdot \\mathbf{b}$ cannot equal:',
        options: [`$12$`, `$10$`, `$-10$`, `$0$`],
        answer: 0,
        explanation: 'Cauchy–Schwarz gives $|\\mathbf{a} \\cdot \\mathbf{b}| \\le |\\mathbf{a}||\\mathbf{b}| = 10$, so $12$ is impossible; $10$, $-10$ and $0$ occur for parallel, antiparallel and perpendicular vectors.',
      },
      {
        q: 'For what value of $k$ are $\\langle k, 2, -1\\rangle$ and $\\langle 2, 1, 4\\rangle$ orthogonal?',
        options: [`$k = -1$`, `$k = 2$`, `$k = 1$`, `$k = 3$`],
        answer: 2,
        explanation: 'Orthogonality requires $(k)(2) + (2)(1) + (-1)(4) = 2k - 2 = 0$, so $k = 1$.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'The dot product behind the formula',
        blocks: [
          {
            kind: 'derivation',
            heading: 'One product, two definitions',
            body: 'Stewart defines the dot product by components and then proves $\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta$. Run the logic the other way: postulate the geometric rule as the definition, and note that lengths alone then determine the product, because expanding $|\\mathbf{a} + \\mathbf{b}|^2$ and $|\\mathbf{a} - \\mathbf{b}|^2$ and subtracting gives the **polarization identity** $$\\mathbf{a} \\cdot \\mathbf{b} = \\tfrac{1}{4}\\left(|\\mathbf{a} + \\mathbf{b}|^2 - |\\mathbf{a} - \\mathbf{b}|^2\\right).$$ So a formula that never mentions angles computes a quantity that is nothing but angle, and any operation on vectors that gets the lengths of all sums and differences right must be the dot product. This equivalence is the pattern of modern mathematics: define an object by what it must do, then discover that a concrete formula does it — the component formula and the angle formula are two coordinate systems for one idea.',
          },
          {
            kind: 'theorem',
            heading: 'Cauchy–Schwarz in all dimensions',
            body: 'For any two vectors in $\\mathbb{R}^n$, $$\\left|\\mathbf{a} \\cdot \\mathbf{b}\\right| \\le |\\mathbf{a}|\\,|\\mathbf{b}|,$$ with equality if and only if the vectors are parallel. The angle formula of this section is a corollary, not a prerequisite: the inequality says the quotient $\\mathbf{a} \\cdot \\mathbf{b}/(|\\mathbf{a}||\\mathbf{b}|)$ lies between $-1$ and $1$ for nonzero vectors, so it deserves the name $\\cos\\theta$. Cauchy–Schwarz is what makes defining angles legal in $\\mathbb{R}^n$ for every $n$, and it converts the geometric statement “there is an angle between these vectors” into a provable fact about sums of products of components.',
          },
          {
            kind: 'proof',
            heading: 'Lagrange’s proof of Cauchy–Schwarz',
            body: 'Expand the sum of all squared 2-by-2 minors: $$\\sum_{i<j}\\left(a_ib_j - a_jb_i\\right)^2 = \\left(\\sum_i a_i^2\\right)\\left(\\sum_j b_j^2\\right) - \\left(\\sum_i a_ib_i\\right)^2.$$ The left side is a sum of squares, hence nonnegative, which is the inequality. Equality holds exactly when every minor vanishes, $a_ib_j = a_jb_i$ for all pairs $i, j$, which forces all the ratios $a_i/b_i$ to agree (or $\\mathbf{b} = \\mathbf{0}$): the vectors are proportional. The proof never mentions geometry, angles or dimension three — it is pure algebra, which is why it survives in $\\mathbb{R}^n$, in function spaces and wherever an inner product appears. In $\\mathbb{R}^3$ the three minors on the left are exactly the components of $\\mathbf{a} \\times \\mathbf{b}$, and the identity becomes the length formula $|\\mathbf{a} \\times \\mathbf{b}|^2 = |\\mathbf{a}|^2|\\mathbf{b}|^2 - (\\mathbf{a} \\cdot \\mathbf{b})^2$ of the next section.',
          },
          {
            kind: 'derivation',
            heading: 'Projections as best approximation',
            body: 'Fix $\\mathbf{a}$ and a direction $\\mathbf{b} \\ne \\mathbf{0}$, and ask which point of the line $\\{t\\mathbf{b}\\}$ is closest to $\\mathbf{a}$. Minimize the squared distance $$f(t) = |\\mathbf{a} - t\\mathbf{b}|^2 = |\\mathbf{a}|^2 - 2t\\,(\\mathbf{a} \\cdot \\mathbf{b}) + t^2\\,|\\mathbf{b}|^2,$$ a parabola in $t$ whose vertex sits at $t = (\\mathbf{a} \\cdot \\mathbf{b})/|\\mathbf{b}|^2$ — precisely the projection coefficient of this section. So $\\mathrm{proj}_{\\mathbf{b}}\\,\\mathbf{a}$ is the best approximation of $\\mathbf{a}$ on the line of $\\mathbf{b}$, and the residual is perpendicular to the line, which is the geometric translation of the vanishing derivative. Replace the line by a subspace and the scalar $t$ by a vector of unknowns: minimizing $|\\mathbf{A}\\mathbf{x} - \\mathbf{b}|^2$ the same way yields the **normal equations** $\\mathbf{A}^T\\mathbf{A}\\mathbf{x} = \\mathbf{A}^T\\mathbf{b}$ — least squares, regression and every fitted line in statistics are this section’s projection coefficient, grown up.',
          },
          {
            kind: 'derivation',
            heading: 'Rotations cannot change a dot product',
            body: 'Rotate the plane by $\\phi$: the vector $(a_1, a_2)$ becomes $(a_1\\cos\\phi - a_2\\sin\\phi,\\ a_1\\sin\\phi + a_2\\cos\\phi)$. Dot two rotated vectors and expand: the $\\cos^2\\phi$ and $\\sin^2\\phi$ terms collect the same coefficient $a_1b_1 + a_2b_2$, and the $\\sin\\phi\\cos\\phi$ cross terms cancel in pairs, so the whole expression collapses back to $\\mathbf{a} \\cdot \\mathbf{b}$. In matrix language a rotation $\\mathbf{R}$ satisfies $\\mathbf{R}^T\\mathbf{R} = \\mathbf{I}$, hence $(\\mathbf{R}\\mathbf{a}) \\cdot (\\mathbf{R}\\mathbf{b}) = \\mathbf{a} \\cdot (\\mathbf{R}^T\\mathbf{R}\\mathbf{b}) = \\mathbf{a} \\cdot \\mathbf{b}$: orthogonality of the matrix is exactly preservation of dot products. Since lengths and angles are defined by dot products, rotations preserve them all — this is what “rotation” means algebraically, and conversely any linear map preserving one dot product is built from rotations and reflections.',
          },
          {
            kind: 'example',
            heading: 'Maximizing a dot product',
            body: 'Maximize $f(x, y, z) = 2x + 3y + z$ subject to $x^2 + y^2 + z^2 = 1$. Writing $f = \\mathbf{a} \\cdot \\mathbf{x}$ with $\\mathbf{a} = \\langle 2, 3, 1\\rangle$ and $|\\mathbf{a}| = \\sqrt{14}$, Cauchy–Schwarz gives $f \\le |\\mathbf{a}||\\mathbf{x}| = \\sqrt{14}$, with equality exactly when $\\mathbf{x}$ is a positive multiple of $\\mathbf{a}$ — and the constraint pins that multiple to the unit vector $\\mathbf{x} = \\langle 2, 3, 1\\rangle/\\sqrt{14}$. The maximum is $\\sqrt{14} \\approx 3.74$, attained at $(0.535, 0.802, 0.267)$, and by symmetry the minimum $-\\sqrt{14}$ sits at the antipodal point. The inequality did the work of multivariable calculus: the equality case of a theorem is often exactly where extremal configurations hide, a pattern reused whenever one optimizes a linear function over a sphere.',
          },
          {
            kind: 'remark',
            heading: 'The other fundamental inequality',
            body: 'The triangle inequality is the dot product’s second bequest: $$|\\mathbf{a} + \\mathbf{b}|^2 = |\\mathbf{a}|^2 + 2\\,\\mathbf{a} \\cdot \\mathbf{b} + |\\mathbf{b}|^2 \\le |\\mathbf{a}|^2 + 2|\\mathbf{a}||\\mathbf{b}| + |\\mathbf{b}|^2 = (|\\mathbf{a}| + |\\mathbf{b}|)^2,$$ where the only inequality is Cauchy–Schwarz, and equality holds exactly at angle zero — the straight path is genuinely shortest precisely when the vectors agree. Both inequalities transfer verbatim to every inner product space; for functions the first reads $\\left(\\int fg\\right)^2 \\le \\int f^2 \\int g^2$, with equality exactly for proportional functions, which is why a correlation coefficient cannot exceed $1$ and reaches it only for perfectly related data. Cauchy–Schwarz and the triangle inequality are the two load-bearing walls of everything metric that follows in this book.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Inner products across mathematics',
        blocks: [
          {
            kind: 'para',
            heading: 'From dot product to inner product',
            body: 'Axiomatize the dot product — bilinear, symmetric, positive definite — and every theorem of this section survives unchanged: Cauchy–Schwarz, the triangle inequality, angles, orthogonal projection, best approximation. This is the theory of **inner product spaces**. The infinite-dimensional examples carry modern analysis: $\\ell^2$, the square-summable sequences with $\\langle \\mathbf{a}, \\mathbf{b}\\rangle = \\sum a_ib_i$, and $L^2$, the square-integrable functions with $\\langle f, g\\rangle = \\int f(x)g(x)\\,dx$. In a complete inner product space the **Riesz representation theorem** identifies every continuous linear functional with an inner product against a fixed vector, collapsing the distinction between a space and its dual. Fourier analysis is this section run in $L^2$: the coefficients are scalar projections of $f$ onto $\\cos(nx)$ and $\\sin(nx)$, and partial sums are orthogonal projections onto the span of finitely many modes — best approximation in function space.',
          },
          {
            kind: 'application',
            heading: 'Kernels and the kernel trick',
            body: 'Many learning algorithms touch the data only through dot products. **Mercer’s theorem** characterizes which kernels $K(\\mathbf{x}, \\mathbf{y})$ are dot products in disguise: exactly the symmetric ones for which every matrix $K(\\mathbf{x}_i, \\mathbf{x}_j)$ built from sample points is positive semidefinite. The **kernel trick** then replaces $\\mathbf{x} \\cdot \\mathbf{y}$ by, for instance, the Gaussian kernel $e^{-\\|\\mathbf{x} - \\mathbf{y}\\|^2/2\\sigma^2}$, implicitly working in an infinite-dimensional feature space where the data become linearly separable, while never computing a single coordinate there — the algorithms of this section, fed a geometry no one can visualize. Support vector machines choose the maximum-margin separating hyperplane by solving for projections in that hidden space; Gaussian processes and kernel PCA are the projection and eigen-structure of Section 12.2, transplanted. The entire edifice stands on one fact from this section: everything geometric about vectors is encoded in their dot products.',
          },
          {
            kind: 'open',
            heading: 'Spherical codes and kissing numbers',
            body: 'How should $n$ points be arranged on a sphere so that the smallest angle between any two is as large as possible? Since angles between unit vectors are dot products, this is a question about dot-product matrices, and it is open for almost every $n$ in every dimension above the plane. Its most famous relative, the **kissing number**, asks how many unit spheres can touch a central one without overlapping: six in the plane, twelve in three dimensions — the Newton–Gregory dispute of 1694, settled only in 1953 by Schütte and van der Waerden — 240 in eight dimensions from the exceptional lattice $E_8$ and 196560 in twenty-four from the Leech lattice. Dimension four fell in 2008 to Musin’s computer-assisted proof; between and beyond these islands the exact values are unknown. The best general tools, Delsarte’s linear programming and the Welch bounds, are inequalities about Gram matrices of dot products — Cauchy–Schwarz wearing formal dress — and closing the gap between them and the truth is an open industry shared by coding theory, error correction and the design of experiments.',
          },
          {
            kind: 'remark',
            heading: 'Complex inner products',
            body: 'Quantum mechanics complexifies the dot product, and symmetry must bend: a Hermitian inner product satisfies $\\langle \\mathbf{u}, \\mathbf{v}\\rangle = \\overline{\\langle \\mathbf{v}, \\mathbf{u}\\rangle}$, so that $\\langle \\mathbf{u}, \\mathbf{u}\\rangle$ is real and can be required positive. Dirac’s bracket notation writes state vectors as $|\\psi\\rangle$ and dual functionals as $\\langle\\phi|$; the transition amplitude is an inner product, and the **Born rule** turns its squared modulus $|\\langle\\phi|\\psi\\rangle|^2$ into a probability — a number legally in $[0, 1]$ precisely because Cauchy–Schwarz bounds the modulus by the product of the norms, both one for normalized states. The measurement projection postulate is this section’s orthogonal projection onto a subspace, and the uncertainty principle is, at bottom, the impossibility of a state being simultaneously sharp for two noncommuting observables — geometry again: two subspaces with no common line.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 12.4
  {
    sectionId: 'calc-ch12-s4',
    readingTime: 8,
    intro: 'The dot product of a vector with itself gives a length, a scalar — but several questions of this chapter want a **vector** answer: a perpendicular direction, an oriented area, a rotation axis. The cross product supplies exactly that: to each pair of vectors it assigns a third vector perpendicular to both, with length equal to the area of the parallelogram they span and direction fixed by the right-hand rule. Its component formula looks like unmotivated bookkeeping — three two-by-two determinants — but every piece is forced by the geometry, as the proofs in this section show. It is anticommutative rather than commutative and not associative at all, quirks that are not defects but the signature of a product built from rotation. Area, torque and volume all become one-line computations.',
    objectives: [
      'Compute $\\mathbf{a} \\times \\mathbf{b}$ from the 3-by-3 determinant expansion, evaluating each 2-by-2 minor',
      'Apply the right-hand rule for the direction of $\\mathbf{a} \\times \\mathbf{b}$ and use $|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}||\\mathbf{b}|\\sin\\theta$',
      'Prove that $\\mathbf{a} \\times \\mathbf{b}$ is orthogonal to both factors, and use the cross product to test parallelism',
      'Use the products of $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ and the algebraic properties, respecting anticommutativity and non-associativity',
      'Compute areas of parallelograms and triangles, and torques with $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$',
      'Evaluate scalar triple products as determinants, find volumes of parallelepipeds, and test coplanarity',
    ],
    concepts: [
      {
        term: 'The cross product as a determinant',
        kind: 'definition',
        statement: 'If $\\mathbf{a} = \\langle a_1, a_2, a_3\\rangle$ and $\\mathbf{b} = \\langle b_1, b_2, b_3\\rangle$, the **cross product** $\\mathbf{a} \\times \\mathbf{b}$ is the vector $$\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix} = \\left\\langle a_2b_3 - a_3b_2,\\ a_3b_1 - a_1b_3,\\ a_1b_2 - a_2b_1 \\right\\rangle,$$ computed by expanding the determinant along its first row.',
        detail: 'Each entry of the expansion is a **2-by-2 minor**: cross out the row and column of $\\mathbf{i}$, say, and take the determinant $a_2b_3 - a_3b_2$ of what is left (top-left times bottom-right, minus top-right times bottom-left), with a minus sign on the middle cofactor. The determinant is only a memory device — the component formula is the definition — but it packages six products into a shape the hand can run: cover a column, multiply the visible diagonals, subtract backwards from forwards.',
      },
      {
        term: 'The right-hand rule and the magnitude',
        kind: 'insight',
        statement: 'The vector $\\mathbf{a} \\times \\mathbf{b}$ is perpendicular to both $\\mathbf{a}$ and $\\mathbf{b}$, and its direction is given by the **right-hand rule**: curl the fingers of the right hand from $\\mathbf{a}$ toward $\\mathbf{b}$ through the smaller angle, and the thumb points along $\\mathbf{a} \\times \\mathbf{b}$. Its length is $$|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}||\\mathbf{b}|\\sin\\theta, \\qquad 0 \\le \\theta \\le \\pi,$$ where $\\theta$ is the angle between the vectors.',
        detail: 'Where the dot product measures agreement ($\\cos\\theta$), the cross product measures turning away ($\\sin\\theta$): it is largest for perpendicular vectors and vanishes for parallel ones, since $\\sin 0 = \\sin\\pi = 0$. In particular $\\mathbf{a} \\times \\mathbf{a} = \\mathbf{0}$ for every vector, and two nonzero vectors are parallel exactly when $\\mathbf{a} \\times \\mathbf{b} = \\mathbf{0}$ — the cross-product test for parallelism facing the dot-product test for perpendicularity. Example: $\\langle 2, 1, 0\\rangle \\times \\langle 4, 2, 0\\rangle = \\mathbf{0}$, so those vectors are parallel, while their dot product $10$ is nonzero.',
      },
      {
        term: 'The cross product is orthogonal to both factors',
        kind: 'theorem',
        statement: 'For all vectors $\\mathbf{a}$ and $\\mathbf{b}$ in $\\mathbb{R}^3$, $$(\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{a} = 0 \\qquad \\text{and} \\qquad (\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{b} = 0.$$',
        detail: 'Proof. Expand the first dot product: $$\\mathbf{a} \\cdot (\\mathbf{a} \\times \\mathbf{b}) = a_1(a_2b_3 - a_3b_2) + a_2(a_3b_1 - a_1b_3) + a_3(a_1b_2 - a_2b_1)$$ $$= a_1a_2b_3 - a_1a_3b_2 + a_2a_3b_1 - a_2a_1b_3 + a_3a_1b_2 - a_3a_2b_1.$$ Pair the terms: $a_1a_2b_3$ cancels against $-a_2a_1b_3$, $-a_1a_3b_2$ against $a_3a_1b_2$, and $a_2a_3b_1$ against $-a_3a_2b_1$, so the total is $0$. The computation for $\\mathbf{b}$ is the same with the roles swapped. Geometrically, the vectors perpendicular to the plane of $\\mathbf{a}$ and $\\mathbf{b}$ form a line, so perpendicularity to both plus a length fixes $\\mathbf{a} \\times \\mathbf{b}$ up to sign — and the right-hand rule picks the sign.',
      },
      {
        term: 'The cross products of i, j, k',
        kind: 'notation',
        statement: '$$\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}, \\qquad \\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}, \\qquad \\mathbf{k} \\times \\mathbf{i} = \\mathbf{j},$$ and reversing the order reverses the sign: $\\mathbf{j} \\times \\mathbf{i} = -\\mathbf{k}$, $\\mathbf{k} \\times \\mathbf{j} = -\\mathbf{i}$, $\\mathbf{i} \\times \\mathbf{k} = -\\mathbf{j}$. Also $\\mathbf{i} \\times \\mathbf{i} = \\mathbf{j} \\times \\mathbf{j} = \\mathbf{k} \\times \\mathbf{k} = \\mathbf{0}$.',
        detail: 'The three positive products run in the cycle $\\mathbf{i} \\to \\mathbf{j} \\to \\mathbf{k} \\to \\mathbf{i}$: write the letters around a circle, read clockwise for the positive products and counterclockwise for the negative ones. These nine products are the multiplication table of the standard basis, and through distributivity they generate every other cross product: expand both vectors in the basis and multiply out, exactly as one multiplies polynomials.',
      },
      {
        term: 'Algebraic properties, and one warning',
        kind: 'law',
        statement: 'For all vectors and scalars: $\\mathbf{a} \\times \\mathbf{b} = -(\\mathbf{b} \\times \\mathbf{a})$ (**anticommutativity**); $\\mathbf{a} \\times (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\times \\mathbf{b} + \\mathbf{a} \\times \\mathbf{c}$ and $(\\mathbf{a} + \\mathbf{b}) \\times \\mathbf{c} = \\mathbf{a} \\times \\mathbf{c} + \\mathbf{b} \\times \\mathbf{c}$ (**distributivity**); $(c\\mathbf{a}) \\times \\mathbf{b} = c(\\mathbf{a} \\times \\mathbf{b}) = \\mathbf{a} \\times (c\\mathbf{b})$; and $\\mathbf{a} \\times \\mathbf{0} = \\mathbf{a} \\times \\mathbf{a} = \\mathbf{0}$. **Warning:** the cross product is NOT associative — parentheses are mandatory.',
        detail: 'Counterexample to associativity: $\\mathbf{i} \\times (\\mathbf{j} \\times \\mathbf{j}) = \\mathbf{i} \\times \\mathbf{0} = \\mathbf{0}$, but $(\\mathbf{i} \\times \\mathbf{j}) \\times \\mathbf{j} = \\mathbf{k} \\times \\mathbf{j} = -\\mathbf{i}$. What is true instead is the **Jacobi identity**, $\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{c}) + \\mathbf{b} \\times (\\mathbf{c} \\times \\mathbf{a}) + \\mathbf{c} \\times (\\mathbf{a} \\times \\mathbf{b}) = \\mathbf{0}$, the algebraic fingerprint of a product built to describe rotation. Distributivity is the workhorse property — the only genuinely tedious one to verify from components — and it is what makes the basis products of the previous concept generate everything.',
      },
      {
        term: 'Lagrange’s identity',
        kind: 'theorem',
        statement: 'For all vectors $\\mathbf{a}$ and $\\mathbf{b}$ in $\\mathbb{R}^3$, $$|\\mathbf{a} \\times \\mathbf{b}|^2 = |\\mathbf{a}|^2|\\mathbf{b}|^2 - (\\mathbf{a} \\cdot \\mathbf{b})^2.$$',
        detail: 'Proof. The left side is the sum of the three squared minors, $(a_2b_3 - a_3b_2)^2 + (a_3b_1 - a_1b_3)^2 + (a_1b_2 - a_2b_1)^2$. Expand the right side instead. The product $|\\mathbf{a}|^2|\\mathbf{b}|^2 = (a_1^2 + a_2^2 + a_3^2)(b_1^2 + b_2^2 + b_3^2)$ contains all nine terms $a_i^2b_j^2$, while $(\\mathbf{a} \\cdot \\mathbf{b})^2 = (a_1b_1 + a_2b_2 + a_3b_3)^2$ contains the products $a_ib_ia_jb_j$ for every pair. Subtracting cancels the diagonal terms and leaves, for each pair $i < j$, exactly $a_i^2b_j^2 + a_j^2b_i^2 - 2(a_ib_j)(a_jb_i) = (a_ib_j - a_jb_i)^2$ — the three squared minors, which are the components of $\\mathbf{a} \\times \\mathbf{b}$. Both sides are the same sum of three squares. Dividing by $|\\mathbf{a}|^2|\\mathbf{b}|^2$ turns the identity into $\\sin^2\\theta + \\cos^2\\theta = 1$: dot and cross split the product of the squared lengths between them exactly as the two legs of a right triangle split a hypotenuse.',
      },
      {
        term: 'Areas, torque and volumes',
        kind: 'method',
        statement: 'The parallelogram spanned by $\\mathbf{a}$ and $\\mathbf{b}$ (tails together) has **area** $|\\mathbf{a} \\times \\mathbf{b}|$, and the triangle with those edge vectors has area $\\tfrac{1}{2}|\\mathbf{a} \\times \\mathbf{b}|$. A force $\\mathbf{F}$ applied at the point with position vector $\\mathbf{r}$ exerts **torque** $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$. And the **scalar triple product** $$\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = \\det\\begin{pmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{pmatrix}$$ gives the signed **volume** of the parallelepiped spanned by $\\mathbf{a}, \\mathbf{b}, \\mathbf{c}$; three vectors are coplanar exactly when it is $0$.',
        detail: 'Area: base $|\\mathbf{a}|$ times height $|\\mathbf{b}|\\sin\\theta$ gives $|\\mathbf{a} \\times \\mathbf{b}|$. Torque: magnitude $|\\mathbf{r}||\\mathbf{F}|\\sin\\theta$ — force times lever arm — with direction along the rotation axis by the right-hand rule. Volume: $|\\mathbf{b} \\times \\mathbf{c}|$ is the area of the base of the slanted box, and the height of $\\mathbf{a}$ above that base is the scalar projection $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})/|\\mathbf{b} \\times \\mathbf{c}|$; multiplying cancels the denominator, so the triple product is base area times height in one multiplication. Its sign records handedness, so $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = 0$ is precisely the **coplanarity criterion**: the box has collapsed to a plane.',
      },
    ],
    figures: [
      {
        caption: 'The cross product $\\mathbf{a} \\times \\mathbf{b}$ of two vectors in the $xy$-plane: its length is the area of the shaded parallelogram they span, $|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$, and the right-hand rule sends it along $+z$. Curl the fingers of your right hand from $\\mathbf{a}$ toward $\\mathbf{b}$ through the smaller angle — your thumb points along $\\mathbf{a} \\times \\mathbf{b}$.',
        svg: '<svg viewBox="0 0 720 400" width="100%" role="img" aria-label="Two vectors a and b in the xy-plane, the parallelogram they span shaded, and the cross product a cross b perpendicular to the plane along the positive z-axis by the right-hand rule"><defs><marker id="a12-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="300" y1="300" x2="182" y2="374" stroke="currentColor" stroke-width="1.5" marker-end="url(#a12-ar)" opacity="0.75"/><line x1="300" y1="300" x2="562" y2="300" stroke="currentColor" stroke-width="1.5" marker-end="url(#a12-ar)" opacity="0.75"/><line x1="300" y1="300" x2="300" y2="78" stroke="currentColor" stroke-width="1.5" marker-end="url(#a12-ar)" opacity="0.75"/><text x="170" y="392" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">x</text><text x="572" y="304" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">y</text><text x="294" y="66" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">z</text><polygon points="300,300 381,354 573,327 492,273" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.8"/><line x1="300" y1="300" x2="381" y2="354" stroke="#10b981" stroke-width="2.5" marker-end="url(#a12-ar)"/><line x1="300" y1="300" x2="492" y2="273" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#a12-ar)"/><text x="392" y="368" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="15" fill="#10b981">a</text><text x="498" y="262" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="15" fill="#f59e0b">b</text><path d="M 337 311 A 42 42 0 0 1 349 323" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><text x="352" y="330" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="13" fill="currentColor">θ</text><line x1="436" y1="313" x2="436" y2="198" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#a12-ar)"/><line x1="446" y1="305" x2="456" y2="305" stroke="currentColor" stroke-width="1"/><line x1="446" y1="296" x2="446" y2="305" stroke="currentColor" stroke-width="1"/><line x1="446" y1="305" stroke="currentColor" stroke-width="1" opacity="0"/><line x1="446" y1="304" x2="446" y2="296" stroke="currentColor" stroke-width="1"/><line x1="446" y1="304" x2="454" y2="304" stroke="currentColor" stroke-width="1"/><line x1="449" y1="258" x2="465" y2="258" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/><text x="446" y="188" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="15" fill="#f43f5e">a × b</text><line x1="436" y1="313" x2="447" y2="313" stroke="currentColor" stroke-width="1.2" opacity="0"/><text x="404" y="345" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">area = |a||b| sin θ</text></svg>',
      },
      {
        caption: 'The scalar triple product as a volume: $|\\mathbf{b} \\times \\mathbf{c}|$ is the area of the base of the parallelepiped and $|\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})| / |\\mathbf{b} \\times \\mathbf{c}|$ is the height of $\\mathbf{a}$ above it, so $|\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})|$ is the enclosed volume. The sign records the handedness of the triple $(\\mathbf{a}, \\mathbf{b}, \\mathbf{c})$; it vanishes exactly when the three vectors are coplanar.',
        svg: '<svg viewBox="0 0 720 380" width="100%" role="img" aria-label="A parallelepiped spanned by three vectors a, b, c drawn from a common origin, with the base parallelogram spanned by b and c shaded"><defs><marker id="a12-ar2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="280" y1="250" x2="274" y2="318" stroke="#10b981" stroke-width="2.5" marker-end="url(#a12-ar2)"/><line x1="280" y1="250" x2="478" y2="223" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#a12-ar2)"/><line x1="280" y1="250" x2="260" y2="119" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#a12-ar2)"/><text x="258" y="334" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="15" fill="#10b981">a</text><text x="486" y="231" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="15" fill="#f59e0b">b</text><text x="248" y="106" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="15" fill="#f43f5e">c</text><polygon points="280,250 274,318 472,291 478,223" fill="#f59e0b" fill-opacity="0.1" stroke="currentColor" stroke-width="1" opacity="0.9"/><polygon points="260,119 254,187 456,160 464,92" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1" opacity="0.9"/><line x1="280" y1="250" x2="260" y2="119" stroke="currentColor" stroke-width="1.2" opacity="0"/><line x1="274" y1="318" x2="254" y2="187" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.45"/><line x1="472" y1="291" x2="452" y2="160" stroke="currentColor" stroke-width="1.2"/><line x1="478" y1="223" x2="464" y2="92" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.45"/><line x1="280" y1="250" x2="260" y2="119" stroke="#f43f5e" stroke-width="2.5"/><line x1="274" y1="318" x2="472" y2="291" stroke="currentColor" stroke-width="1" opacity="0.8"/><line x1="478" y1="223" x2="472" y2="291" stroke="currentColor" stroke-width="1" opacity="0.8"/><line x1="260" y1="119" x2="274" y2="318" stroke="currentColor" stroke-width="1" opacity="0"/><line x1="260" y1="119" x2="478" y2="223" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.35"/><line x1="254" y1="187" x2="472" y2="291" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.35"/><line x1="456" y1="160" x2="472" y2="291" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.35"/><text x="380" y="270" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.8">base area = |b × c|</text><line x1="330" y1="247" x2="330" y2="196" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.55"/><text x="336" y="205" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">height = comp_b×c(a)</text><text x="540" y="150" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.85">V = |a · (b × c)|</text></svg>',
        afterConcept: 6,
      },
    ],
    examples: [
      {
        title: 'Computing a cross product and checking orthogonality',
        problem: 'Find $\\mathbf{a} \\times \\mathbf{b}$ for $\\mathbf{a} = \\langle 2,\\ 3,\\ 0\\rangle$ and $\\mathbf{b} = \\langle 1,\\ -2,\\ 4\\rangle$, and verify the result is perpendicular to both factors.',
        steps: [
          { label: 'Set up the determinant', text: 'Write $$\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 2 & 3 & 0 \\\\ 1 & -2 & 4 \\end{vmatrix}.$$ Covering the $\\mathbf{i}$ column leaves the minor $3 \\cdot 4 - 0 \\cdot (-2)$.' },
          { label: 'Expand along the first row', text: 'The three cofactors give $\\mathbf{i}\\,(3 \\cdot 4 - 0 \\cdot (-2)) - \\mathbf{j}\\,(2 \\cdot 4 - 0 \\cdot 1) + \\mathbf{k}\\,(2 \\cdot (-2) - 3 \\cdot 1) = 12\\,\\mathbf{i} - 8\\,\\mathbf{j} - 7\\,\\mathbf{k}$.' },
          { label: 'Check against a', text: 'Dot with the first factor: $\\mathbf{a} \\cdot (\\mathbf{a} \\times \\mathbf{b}) = 2(12) + 3(-8) + 0(-7) = 24 - 24 + 0 = 0$. Perpendicular ✓' },
          { label: 'Check against b', text: 'Dot with the second factor: $\\mathbf{b} \\cdot (\\mathbf{a} \\times \\mathbf{b}) = 1(12) + (-2)(-8) + 4(-7) = 12 + 16 - 28 = 0$. Perpendicular ✓' },
        ],
        result: '$\\mathbf{a} \\times \\mathbf{b} = \\langle 12,\\ -8,\\ -7\\rangle$, orthogonal to both $\\mathbf{a}$ and $\\mathbf{b}$ — the two dot-product checks vanish identically.',
      },
      {
        title: 'Area of a triangle in space',
        problem: 'Find the area of the triangle with vertices $P(1,\\ 0,\\ -1)$, $Q(2,\\ 4,\\ 5)$ and $R(3,\\ 1,\\ 7)$.',
        steps: [
          { label: 'Form edge vectors', text: 'Take $P$ as the base point: $\\overrightarrow{PQ} = \\langle 1,\\ 4,\\ 6\\rangle$ and $\\overrightarrow{PR} = \\langle 2,\\ 1,\\ 8\\rangle$.' },
          { label: 'Cross the edges', text: '$\\overrightarrow{PQ} \\times \\overrightarrow{PR} = \\langle 4 \\cdot 8 - 6 \\cdot 1,\\ 6 \\cdot 2 - 1 \\cdot 8,\\ 1 \\cdot 1 - 4 \\cdot 2\\rangle = \\langle 26,\\ 4,\\ -7\\rangle$.' },
          { label: 'Parallelogram area', text: 'The magnitude is $|\\langle 26, 4, -7\\rangle| = \\sqrt{676 + 16 + 49} = \\sqrt{741}$.' },
          { label: 'Halve for the triangle', text: 'The triangle is half the parallelogram its edge vectors span, so its area is $\\tfrac{1}{2}\\sqrt{741} \\approx 13.6$.' },
        ],
        result: 'Area $= \\tfrac{1}{2}\\sqrt{741} \\approx 13.6$ square units — no sketching, no base-times-height gymnastics: two subtractions, one determinant, one square root.',
      },
      {
        title: 'Torque about the origin',
        problem: 'A force $\\mathbf{F} = \\langle 2,\\ 0,\\ -3\\rangle$ newtons is applied at the point with position vector $\\mathbf{r} = \\langle 0.5,\\ 0.8,\\ 0\\rangle$ meters. Find the torque about the origin.',
        steps: [
          { label: 'Apply the definition', text: 'The torque is $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$, the position vector crossed with the force.' },
          { label: 'Compute the components', text: '$\\tau_x = 0.8(-3) - 0 \\cdot 0 = -2.4$; $\\tau_y = 0 \\cdot 2 - 0.5(-3) = 1.5$; $\\tau_z = 0.5 \\cdot 0 - 0.8 \\cdot 2 = -1.6$, all in newton-meters.' },
          { label: 'Interpret the magnitude', text: '$|\\boldsymbol{\\tau}| = \\sqrt{2.4^2 + 1.5^2 + 1.6^2} = \\sqrt{10.57} \\approx 3.25$ N·m, equal to the lever arm times the component of force perpendicular to it.' },
        ],
        result: '$\\boldsymbol{\\tau} = \\langle -2.4,\\ 1.5,\\ -1.6\\rangle$ N·m, with $|\\boldsymbol{\\tau}| \\approx 3.25$ N·m along the axis the right-hand rule picks out.',
      },
      {
        title: 'Volume of a parallelepiped',
        problem: 'Find the volume of the parallelepiped spanned by $\\mathbf{a} = \\langle 1,\\ 2,\\ -1\\rangle$, $\\mathbf{b} = \\langle 2,\\ 1,\\ 3\\rangle$ and $\\mathbf{c} = \\langle 1,\\ 0,\\ 2\\rangle$.',
        steps: [
          { label: 'Cross the base vectors', text: '$\\mathbf{b} \\times \\mathbf{c} = \\langle 1 \\cdot 2 - 3 \\cdot 0,\\ 3 \\cdot 1 - 2 \\cdot 2,\\ 2 \\cdot 0 - 1 \\cdot 1\\rangle = \\langle 2,\\ -1,\\ -1\\rangle$.' },
          { label: 'Dot with the third vector', text: '$\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = 1(2) + 2(-1) + (-1)(-1) = 2 - 2 + 1 = 1$.' },
          { label: 'Take the absolute value', text: 'The signed volume is $1$; since it is positive, the triple $(\\mathbf{a}, \\mathbf{b}, \\mathbf{c})$ is right-handed, and the volume is $|1| = 1$.' },
        ],
        result: 'Volume $= 1$ cubic unit — a single $3 \\times 3$ determinant in disguise: expand along the $\\mathbf{a}$ row and the same three minors appear.',
      },
    ],
    keyTakeaways: [
      'The cross product $\\mathbf{a} \\times \\mathbf{b} = \\langle a_2b_3 - a_3b_2,\\ a_3b_1 - a_1b_3,\\ a_1b_2 - a_2b_1\\rangle$ is a vector perpendicular to both factors, directed by the right-hand rule, with length $|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$.',
      'It is anticommutative ($\\mathbf{b} \\times \\mathbf{a} = -\\mathbf{a} \\times \\mathbf{b}$) and NOT associative — parentheses are mandatory, and the Jacobi identity stands in for associativity.',
      'Lagrange\'s identity $|\\mathbf{a} \\times \\mathbf{b}|^2 = |\\mathbf{a}|^2|\\mathbf{b}|^2 - (\\mathbf{a} \\cdot \\mathbf{b})^2$ is the algebraic engine behind the geometric length formula, reducing it to $\\sin^2\\theta + \\cos^2\\theta = 1$.',
      'Areas and volumes become one-liners: parallelogram $|\\mathbf{a} \\times \\mathbf{b}|$, triangle half that, parallelepiped $|\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})|$ — with coplanarity detected by a vanishing triple product.',
      'Physics leans on it constantly: torque $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$, angular momentum $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$, magnetic force $q\\mathbf{v} \\times \\mathbf{B}$ — always a vector result from two vector causes.',
      'A vanishing cross product ($\\mathbf{a} \\times \\mathbf{b} = \\mathbf{0}$, with neither factor zero) means the vectors are parallel — the standard parallelism test in space.',
    ],
    quiz: [
      {
        q: 'Compute $\\mathbf{a} \\times \\mathbf{b}$ for $\\mathbf{a} = \\langle 3,\\ -1,\\ 2\\rangle$ and $\\mathbf{b} = \\langle 2,\\ 0,\\ 1\\rangle$.',
        options: [`$\\langle -1,\\ 1,\\ 2\\rangle$`, `$\\langle 1,\\ -1,\\ 2\\rangle$`, `$\\langle -1,\\ -1,\\ 2\\rangle$`, `$\\langle 1,\\ 1,\\ -2\\rangle$`],
        answer: 0,
        explanation: 'Minors: $(-1)(1) - 2 \\cdot 0 = -1$; $2 \\cdot 2 - 3 \\cdot 1 = 1$; $3 \\cdot 0 - (-1)(2) = 2$. So $\\mathbf{a} \\times \\mathbf{b} = \\langle -1, 1, 2\\rangle$. Quick check: $\\mathbf{a} \\cdot \\langle -1,1,2\\rangle = -3 - 1 + 4 = 0$ ✓',
      },
      {
        q: 'Which vector is perpendicular to both $\\langle 3,\\ -1,\\ 2\\rangle$ and $\\langle 2,\\ 0,\\ 1\\rangle$?',
        options: [`$\\langle -1,\\ 1,\\ 2\\rangle$`, `$\\langle 1,\\ 2,\\ 0\\rangle$`, `$\\langle 5,\\ -1,\\ 3\\rangle$`, `$\\langle 2,\\ 1,\\ 1\\rangle$`],
        answer: 0,
        explanation: 'Only $\\langle -1, 1, 2\\rangle$ gives dot product $0$ with both: $3(-1) + (-1)(1) + 2(2) = 0$ and $2(-1) + 0 + 1 \\cdot 2 = 0$. It is exactly $\\mathbf{a} \\times \\mathbf{b}$.',
      },
      {
        q: 'Evaluate $\\mathbf{i} \\times (\\mathbf{j} \\times \\mathbf{j})$ and $(\\mathbf{i} \\times \\mathbf{j}) \\times \\mathbf{j}$, respectively.',
        options: [`$\\mathbf{0}$ and $-\\mathbf{i}$`, `$-\\mathbf{i}$ and $\\mathbf{0}$`, 'Both are $\\mathbf{0}$', 'Both are $-\\mathbf{i}$'],
        answer: 0,
        explanation: '$\\mathbf{j} \\times \\mathbf{j} = \\mathbf{0}$, so the first product is $\\mathbf{i} \\times \\mathbf{0} = \\mathbf{0}$. But $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$, and $\\mathbf{k} \\times \\mathbf{j} = -\\mathbf{i}$. Different answers — the cross product is not associative.',
      },
      {
        q: 'The area of the parallelogram spanned by $\\mathbf{a} = \\langle 1,\\ 1,\\ 0\\rangle$ and $\\mathbf{b} = \\langle 0,\\ 1,\\ 1\\rangle$ is:',
        options: [`$\\sqrt{3}$`, `$2$`, `$\\sqrt{2}$`, `$1$`],
        answer: 0,
        explanation: '$\\mathbf{a} \\times \\mathbf{b} = \\langle 1 \\cdot 1 - 0 \\cdot 1,\\ 0 \\cdot 0 - 1 \\cdot 1,\\ 1 \\cdot 1 - 1 \\cdot 0\\rangle = \\langle 1, -1, 1\\rangle$, whose length is $\\sqrt{1 + 1 + 1} = \\sqrt{3}$.',
      },
      {
        q: 'A triangle has vertices $(0,0,0)$, $(2,0,0)$ and $(1,3,0)$. Its area is:',
        options: [`$3$`, `$6$`, `$\\tfrac{3}{2}$`, `$\\sqrt{10}$`],
        answer: 0,
        explanation: 'Edge vectors $\\langle 2,0,0\\rangle$ and $\\langle 1,3,0\\rangle$ cross to $\\langle 0, 0, 6\\rangle$ (all area along $z$). Parallelogram area $6$, triangle area $\\tfrac{1}{2} \\cdot 6 = 3$.',
      },
      {
        q: 'If $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = 0$ with all three vectors nonzero, the vectors must be:',
        options: ['coplanar', 'mutually perpendicular', 'parallel', 'unit vectors'],
        answer: 0,
        explanation: 'A zero scalar triple product means the parallelepiped has zero volume — the height of $\\mathbf{a}$ above the plane spanned by $\\mathbf{b}$ and $\\mathbf{c}$ is $0$, so all three vectors lie in one common plane (some two of them may even be parallel).',
      },
      {
        q: 'For nonzero vectors, $|\\mathbf{a} \\times \\mathbf{b}|$ is largest when the angle $\\theta$ between them is:',
        options: [`$\\pi/2$`, `$\\pi/4$`, `$\\pi$`, `$0$`],
        answer: 0,
        explanation: '$|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}||\\mathbf{b}|\\sin\\theta$, and $\\sin\\theta$ peaks at $1$ when $\\theta = \\pi/2$ — perpendicular vectors span the biggest parallelogram, while parallel ones span none at all.',
      },
      {
        q: 'A force $\\mathbf{F} = \\langle 0,\\ 10,\\ 0\\rangle$ N acts at the point $\\langle 0.3,\\ 0.4,\\ 0\\rangle$ m. The magnitude of the torque about the origin is:',
        options: ['$3$ N·m', '$5$ N·m', '$4$ N·m', '$0$ N·m'],
        answer: 0,
        explanation: '$\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F} = \\langle 0.4 \\cdot 0 - 0 \\cdot 10,\\ 0 \\cdot 0 - 0.3 \\cdot 0,\\ 0.3 \\cdot 10 - 0.4 \\cdot 0\\rangle = \\langle 0, 0, 3\\rangle$, so $|\\boldsymbol{\\tau}| = 3$ N·m — lever arm $0.5$ m times the perpendicular force component $6$ N.',
      },
      {
        q: 'Simplify $(2\\mathbf{a}) \\times \\mathbf{b} + \\mathbf{a} \\times \\mathbf{b}$.',
        options: [`$3(\\mathbf{a} \\times \\mathbf{b})$`, `$2(\\mathbf{a} \\times \\mathbf{b})$`, `$\\mathbf{a} \\times \\mathbf{b}$`, '$3\\mathbf{a} \\times \\mathbf{b}$ is undefined'],
        answer: 0,
        explanation: 'Scalars slide through the cross product: $(2\\mathbf{a}) \\times \\mathbf{b} = 2(\\mathbf{a} \\times \\mathbf{b})$, and the two terms share the vector $\\mathbf{a} \\times \\mathbf{b}$, so they add to $3(\\mathbf{a} \\times \\mathbf{b})$.',
      },
      {
        q: 'The volume of the parallelepiped spanned by $\\langle 1, 2, -1\\rangle$, $\\langle 2, 1, 3\\rangle$ and $\\langle 1, 0, 2\\rangle$ is:',
        options: [`$1$`, `$6$`, `$0$`, `$12$`],
        answer: 0,
        explanation: '$\\mathbf{b} \\times \\mathbf{c} = \\langle 2, -1, -1\\rangle$ and $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = 2 - 2 + 1 = 1$: a sliver of a box with volume exactly $1$.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'The algebra behind the product',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Deriving the component formula from the geometry',
            body: 'Suppose we insist only on the geometry: a product $\\mathbf{a} \\times \\mathbf{b}$ that is perpendicular to both factors, has length $|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$, and points by the right-hand rule. Writing $\\mathbf{a} \\times \\mathbf{b} = \\langle x, y, z\\rangle$, perpendicularity gives two linear equations: $a_1x + a_2y + a_3z = 0$ and $b_1x + b_2y + b_3z = 0$. The solution space of this pair is a line, and one reads off a direction vector for it as the formal determinant $\\langle a_2b_3 - a_3b_2,\\ a_3b_1 - a_1b_3,\\ a_1b_2 - a_2b_1\\rangle$. The length requirement then fixes the scale, which Lagrange\'s identity confirms is exactly $|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$, and the right-hand rule fixes the sign. The determinant formula is not a convention — it is the only possible answer.',
          },
          {
            kind: 'theorem',
            heading: 'BAC-CAB identity',
            body: 'For all vectors in $\\mathbb{R}^3$, $$\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{c}) = \\mathbf{b}(\\mathbf{a} \\cdot \\mathbf{c}) - \\mathbf{c}(\\mathbf{a} \\cdot \\mathbf{b}).$$ The double cross product lands back in the plane of $\\mathbf{b}$ and $\\mathbf{c}$ — the identity shows this by writing the result as a linear combination of exactly those two vectors.',
          },
          {
            kind: 'proof',
            heading: 'BAC-CAB by components',
            body: 'Take $\\mathbf{b} = \\mathbf{i}$, $\\mathbf{c} = \\mathbf{j}$ first: $\\mathbf{i} \\times (\\mathbf{i} \\times \\mathbf{j})$? Better to verify the identity on a basis: both sides are trilinear (linear in each vector separately — the left by the linearity of $\\times$ in each slot, the right because the dot product is bilinear), so it suffices to check the $3^3 = 27$ combinations of basis vectors. For $\\mathbf{b} = \\mathbf{c} = \\mathbf{i}$: left $\\mathbf{a} \\times \\mathbf{0} = \\mathbf{0}$; right $\\mathbf{i}(a_1) - \\mathbf{i}(a_1) = \\mathbf{0}$ ✓. For $\\mathbf{b} = \\mathbf{i}, \\mathbf{c} = \\mathbf{j}$: left $\\mathbf{a} \\times \\mathbf{k} = \\langle a_2, -a_1, 0\\rangle$; right $\\mathbf{i} a_2 - \\mathbf{j} a_1$ ✓ — and the remaining cases follow by cyclic symmetry of $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$. By trilinearity, the identity holds for all vectors.',
          },
          {
            kind: 'application',
            heading: 'Angular momentum',
            body: 'Newton\'s second law for rotation is a cross product statement. Define the **angular momentum** of a mass $m$ at position $\\mathbf{r}$ with velocity $\\mathbf{v}$ as $\\mathbf{L} = \\mathbf{r} \\times m\\mathbf{v}$. Differentiating, $\\frac{d\\mathbf{L}}{dt} = \\mathbf{v} \\times m\\mathbf{v} + \\mathbf{r} \\times m\\frac{d\\mathbf{v}}{dt} = \\mathbf{0} + \\mathbf{r} \\times \\mathbf{F} = \\boldsymbol{\\tau}$, because a vector crossed with itself is zero. For a planet under the sun\'s gravity — a force parallel to $\\mathbf{r}$ at every instant — the torque vanishes, so $\\mathbf{L}$ is conserved: the orbit stays in one fixed plane, and the radius vector sweeps equal areas in equal times, which is Kepler\'s second law recovered from one line of vector algebra.',
          },
          {
            kind: 'application',
            heading: 'The magnetic force',
            body: 'A charge $q$ moving with velocity $\\mathbf{v}$ through a magnetic field $\\mathbf{B}$ feels the Lorentz force $q\\,\\mathbf{v} \\times \\mathbf{B}$ — perpendicular to both motion and field. Because the force is always perpendicular to $\\mathbf{v}$, it does no work ($\\mathbf{F} \\cdot \\mathbf{v} = 0$), and the speed never changes; only the direction bends. With $\\mathbf{v} \\perp \\mathbf{B}$ the charge runs in a circle of radius $r = mv/(qB)$, the cyclotron orbit, and reversing $q$ or the field direction reverses the sense of circulation — exactly the anticommutativity of $\\times$ in the laboratory.',
          },
          {
            kind: 'remark',
            heading: 'Rotation is the origin of the algebra',
            body: 'The cross product\'s strange algebra — anticommutative, non-associative, yet satisfying the Jacobi identity — is not an accident of the formula but a portrait of what it represents. The Jacobi identity is precisely the statement that the operators "rotate about $\\mathbf{a}$, then $\\mathbf{b}$, then $\\mathbf{c}$, and undo all three in reverse order" compose to the identity to first order; the algebra of rotations is a **Lie algebra**, and $\\mathbb{R}^3$ with the cross product is its smallest nontrivial example, $\\mathfrak{so}(3)$. When rotations compose in different orders and the results genuinely differ, non-associativity is the algebra catching the geometry.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Why three dimensions is special',
        blocks: [
          {
            kind: 'para',
            heading: 'The wedge product',
            body: 'The coordinate-free object behind the cross product is the **exterior product** (wedge) of linear algebra. For vectors in $\\mathbb{R}^n$, the wedge $\\mathbf{a} \\wedge \\mathbf{b}$ is an antisymmetric bilinear object that lives not in $\\mathbb{R}^n$ but in the second exterior power $\\wedge^2 \\mathbb{R}^n$, a space of dimension $\\binom{n}{2}$. It encodes exactly the oriented parallelogram: its magnitude is the area, its "direction" is the plane the two vectors span. The cross product is what you get by identifying $\\wedge^2 \\mathbb{R}^3$ with $\\mathbb{R}^3$ itself — possible because $\\binom{3}{2} = 3$ — using the Hodge star dual and the orientation (volume form). That numerical coincidence is why the cross product exists only in three dimensions.',
          },
          {
            kind: 'application',
            heading: 'Differential forms',
            body: 'Multiplication of differentials in integral calculus is the wedge in disguise. A **2-form** such as $\\omega = P\\,dy \\wedge dz + Q\\,dz \\wedge dx + R\\,dx \\wedge dy$ is a field of oriented area elements, and its three coefficients are precisely the components of a vector field through the same Hodge identification. The flux integral $\\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\, dS$ is the integral of the 2-form over the surface; the divergence theorem becomes Stokes\' theorem for forms, $\\int_{\\partial M} \\omega = \\int_M d\\omega$; and the identity $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ is just $d \\circ d = 0$ — antisymmetry of the wedge, not a miracle of vector calculus.',
          },
          {
            kind: 'para',
            heading: 'Dimensions three and seven',
            body: 'A theorem of Eckmann (1943) and Whitehead classifies all "vector products": bilinear maps $\\mathbb{R}^n \\times \\mathbb{R}^n \\to \\mathbb{R}^n$ satisfying $\\mathbf{x} \\times \\mathbf{y} \\perp \\mathbf{x}, \\mathbf{y}$ and $|\\mathbf{x} \\times \\mathbf{y}|^2 = |\\mathbf{x}|^2|\\mathbf{y}|^2 - (\\mathbf{x} \\cdot \\mathbf{y})^2$. They exist **only** for $n = 3$ and $n = 7$. The 7-dimensional product is built from the octonions, the largest of the four normed division algebras (real $1$, complex $2$, quaternion $4$, octonion $8$ — Hurwitz\'s theorem), and its automorphism group is the exceptional Lie group $G_2$. The quaternions themselves supply the 3-dimensional story: $\\mathbf{a} \\times \\mathbf{b}$ is the imaginary part of the quaternion product, which is why rotations compose so cleanly through $q = \\cos(\\theta/2) + \\mathbf{u}\\sin(\\theta/2)$ — the algebra computer graphics uses to avoid gimbal lock.',
          },
          {
            kind: 'open',
            heading: 'Why the exceptional structures',
            body: 'The exceptional Lie groups ($G_2$, $F_4$, $E_6$–$E_8$) are all anchored to the octonions and their 7-dimensional cross product, and they appear stubbornly in the wild: $G_2$ as the holonomy of 7-dimensional manifolds that feature in M-theory compactifications, $E_8$ in the gauge symmetries of heterotic string theory and in the 2007 ATLAS of Lie group representations. Whether these appearances are deep or coincidental — whether the universe "uses" the exceptional algebra or merely permits it — remains an open philosophical-physical question with real mathematical substance: no known principle selects the octonionic path, yet nothing forbids it either.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 12.5
  {
    sectionId: 'calc-ch12-s5',
    readingTime: 9,
    intro: 'A point is located by three numbers; a line is located by a point and a direction; a plane by a point and a normal. Those three data pairs are the whole grammar of flat geometry in space, and this section writes the equations that encode them. The line is the set of all points a fixed step vector can reach from one starting point; the plane is the set of all points whose displacement from a given point is perpendicular to a given vector. Everything else — symmetric equations, scalar equations of planes, angles between planes, distances from points to planes — falls out of these two descriptions by pure vector algebra from Sections 12.2–12.4.',
    objectives: [
      'Write the vector, parametric and symmetric equations of a line in space',
      'Decide whether a point lies on a given line, and parametrize the line through two given points',
      'Recognize skew lines — neither parallel nor intersecting — and reason about them',
      'Find the equation of a plane from a point and a normal, or from three points, or from a point and two spanning vectors',
      'Read off normals, test parallel and orthogonal planes, and compute the angle between planes',
      'Derive and apply the distance from a point to a plane, and the distance between two skew lines',
    ],
    concepts: [
      {
        term: 'The vector equation of a line',
        kind: 'definition',
        statement: 'The line through the point $P_0$ with position vector $\\mathbf{r}_0$ and parallel to the vector $\\mathbf{v} \\ne \\mathbf{0}$ is the set of tips of $$\\mathbf{r} = \\mathbf{r}_0 + t\\,\\mathbf{v}, \\qquad t \\in \\mathbb{R}.$$ The parameter $t$ slides the tip from $\\mathbf{r}_0$ (at $t = 0$) in both directions forever; $\\mathbf{v}$ is a **direction vector** of the line.',
        detail: 'One point plus one direction is the minimum information a line carries — exactly as in the plane, but now the direction vector has three components. Any nonzero scalar multiple of $\\mathbf{v}$ describes the same line (with the parameter rescaled), which is why a line\'s equations are never unique: the same line has infinitely many valid parameterizations.',
      },
      {
        term: 'Parametric equations of a line',
        kind: 'method',
        statement: 'Equating components in $\\mathbf{r} = \\mathbf{r}_0 + t\\mathbf{v}$ with $\\mathbf{r}_0 = \\langle x_0, y_0, z_0\\rangle$ and $\\mathbf{v} = \\langle a, b, c\\rangle$ gives the **parametric equations** $$x = x_0 + at, \\qquad y = y_0 + bt, \\qquad z = z_0 + ct.$$',
        detail: 'Each coordinate is a linear function of the single parameter $t$. To test whether a point $P$ lies on the line, solve one equation for $t$ and check the other two — all three must agree on the same $t$. To parametrize the line through two points $P_0$ and $P_1$, take $\\mathbf{v} = \\overrightarrow{P_0P_1}$: one subtraction, then the machinery above.',
      },
      {
        term: 'Symmetric equations',
        kind: 'method',
        statement: 'Eliminating $t$ from the parametric equations (solve each for $t$ and set them equal) gives the **symmetric form** $$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}.$$ If one component of $\\mathbf{v}$ is $0$ — say $c = 0$ — the line lies in the plane $z = z_0$, and the honest equations are the pair $\\frac{x - x_0}{a} = \\frac{y - y_0}{b}$ together with $z = z_0$.',
        detail: 'The symmetric form makes two things readable at a glance: the direction vector $\\langle a, b, c\\rangle$ sits in the denominators, and a point $\\langle x_0, y_0, z_0\\rangle$ sits in the numerators. It is the spatial version of the point-slope form of a line in the plane — and the caveat about zero components is the first place where 3D genuinely differs from 2D: a line can be parallel to a coordinate plane, and the algebra must not divide by zero to say so.',
      },
      {
        term: 'Skew lines',
        kind: 'insight',
        statement: 'Two lines in space that are not parallel and do not intersect are **skew**. Two lines are parallel when their direction vectors are scalar multiples; otherwise they meet at most once — and in 3D they may miss each other entirely, something impossible in the plane.',
        detail: 'Detecting skewness: directions not proportional rules out parallel; solving two of the three intersection equations for $s$ and $t$ and checking the third rules out (or confirms) a meeting. Geometrically, two skew lines always admit exactly one common perpendicular — the shortest segment joining them — which leads to the distance formula in this section\'s final method.',
      },
      {
        term: 'The vector and scalar equations of a plane',
        kind: 'definition',
        statement: 'A **plane** through the point $P_0$ with position vector $\\mathbf{r}_0$, with (nonzero) **normal vector** $\\mathbf{n}$, is the set of all points whose displacement from $P_0$ is perpendicular to $\\mathbf{n}$: $$\\mathbf{n} \\cdot (\\mathbf{r} - \\mathbf{r}_0) = 0.$$ Expanding the dot product with $\\mathbf{n} = \\langle a, b, c\\rangle$ gives the **scalar (linear) equation** $$ax + by + cz = d, \\qquad d = \\mathbf{n} \\cdot \\mathbf{r}_0 = ax_0 + by_0 + cz_0.$$',
        detail: 'The normal is the plane\'s DNA: it fixes the orientation completely. Two planes are **parallel** when their normals are proportional ($\\mathbf{n}_2 = k\\mathbf{n}_1$ with different constants $d$), **identical** when proportional with matching ratio in $d$, and **perpendicular** exactly when $\\mathbf{n}_1 \\cdot \\mathbf{n}_2 = 0$. The angle between two planes is defined as the angle between their normals (or its supplement, whichever is acute).',
      },
      {
        term: 'Every plane is a linear equation, and back',
        kind: 'theorem',
        statement: '**Theorem.** (a) Every plane has an equation $ax + by + cz = d$ with $\\langle a, b, c\\rangle \\ne \\mathbf{0}$. (b) Conversely, the solution set of any such equation is a plane with normal $\\langle a, b, c\\rangle$.',
        detail: 'Proof. (a) is the expansion above. For (b), fix any solution $P_0 = (x_0, y_0, z_0)$, so $ax_0 + by_0 + cz_0 = d$. Subtracting, every solution $P$ satisfies $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$, i.e. $\\mathbf{n} \\cdot \\overrightarrow{P_0P} = 0$ with $\\mathbf{n} = \\langle a, b, c\\rangle$: the solution set is exactly the plane through $P_0$ with normal $\\mathbf{n}$. This converse is why "graph of a linear equation in three variables" and "plane" are synonyms.',
      },
      {
        term: 'Distance from a point to a plane',
        kind: 'method',
        statement: 'The distance from $P_1 = (x_1, y_1, z_1)$ to the plane $ax + by + cz + d = 0$ is $$D = \\frac{|ax_1 + by_1 + cz_1 + d|}{\\sqrt{a^2 + b^2 + c^2}}.$$',
        detail: 'Derivation: take any point $P_0$ on the plane and drop the perpendicular from $P_1$. The distance is the absolute value of the **scalar projection** of $\\overrightarrow{P_0P_1}$ onto the unit normal $\\mathbf{n}/|\\mathbf{n}|$: $D = |\\operatorname{comp}_{\\mathbf{n}} \\overrightarrow{P_0P_1}| = |\\mathbf{n} \\cdot \\overrightarrow{P_0P_1}|/|\\mathbf{n}|$. Choosing $P_0$ conveniently and expanding the dot product, the numerator becomes $|ax_1 + by_1 + cz_1 + d|$ — the plane\'s left side evaluated at the point, whose sign even tells you which side of the plane the point is on.',
      },
      {
        term: 'Distance between skew lines',
        kind: 'method',
        statement: 'For skew lines $\\mathbf{r}_1 + t\\mathbf{v}_1$ and $\\mathbf{r}_2 + s\\mathbf{v}_2$, the direction perpendicular to both is $\\mathbf{v}_1 \\times \\mathbf{v}_2 \\ne \\mathbf{0}$ (it exists precisely because the lines are not parallel). With $P_1, P_2$ one point on each line, the distance between them is $$D = \\frac{|\\overrightarrow{P_1P_2} \\cdot (\\mathbf{v}_1 \\times \\mathbf{v}_2)|}{|\\mathbf{v}_1 \\times \\mathbf{v}_2|}.$$',
        detail: 'The numerator is the absolute scalar triple product — the volume of the parallelepiped spanned by $\\overrightarrow{P_1P_2}, \\mathbf{v}_1, \\mathbf{v}_2$ — and dividing by the area $|\\mathbf{v}_1 \\times \\mathbf{v}_2|$ of the base leaves the height: exactly the length of the common perpendicular. Every piece of Sections 12.3 and 12.4 is used at once: the cross product to find the common perpendicular direction, the dot product to measure along it.',
      },
    ],
    figures: [
      {
        caption: 'The vector equation of a line: from the point $P_0$ with position vector $\\mathbf{r}_0$, the direction vector $\\mathbf{v}$ carries the tip of $\\mathbf{r}(t) = \\mathbf{r}_0 + t\\mathbf{v}$ along the line — backward for $t < 0$, forward for $t > 0$. One point and one direction: the least a line can be known by.',
        svg: '<svg viewBox="0 0 720 380" width="100%" role="img" aria-label="Three-dimensional axes with a point P0 reached by the position vector r0 from the origin, a direction vector v from P0, and the line through P0 in the direction of v with several points marked at different parameter values"><defs><marker id="a12-l5a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="170" y1="310" x2="70" y2="372" stroke="currentColor" stroke-width="1.5" marker-end="url(#a12-l5a)" opacity="0.75"/><line x1="170" y1="310" x2="430" y2="310" stroke="currentColor" stroke-width="1.5" marker-end="url(#a12-l5a)" opacity="0.75"/><line x1="170" y1="310" x2="170" y2="130" stroke="currentColor" stroke-width="1.5" marker-end="url(#a12-l5a)" opacity="0.75"/><text x="58" y="384" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">x</text><text x="440" y="314" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">y</text><text x="164" y="118" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">z</text><text x="162" y="326" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="13" fill="currentColor">O</text><line x1="170" y1="310" x2="153" y2="247" stroke="#f43f5e" stroke-width="2.2" marker-end="url(#a12-l5a)"/><text x="128" y="272" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="14" fill="#f43f5e">r₀</text><circle cx="153" cy="247" r="4" fill="#f43f5e"/><text x="163" y="243" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">P₀</text><line x1="153" y1="247" x2="186" y2="226" stroke="#f59e0b" stroke-width="2.4" marker-end="url(#a12-l5a)"/><text x="182" y="216" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="14" fill="#f59e0b">v</text><line x1="100" y1="281" x2="252" y2="184" stroke="currentColor" stroke-width="1.8"/><circle cx="120" cy="268" r="3.5" fill="#10b981"/><circle cx="153" cy="247" r="4" fill="#f43f5e"/><circle cx="219" cy="205" r="3.5" fill="#10b981"/><circle cx="252" cy="184" r="3.5" fill="#10b981"/><line x1="153" y1="247" x2="120" y2="268" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 4" opacity="0.55"/><line x1="153" y1="247" x2="219" y2="205" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 4" opacity="0.55"/><text x="86" y="272" font-family="ui-monospace, monospace" font-size="11" fill="#10b981">t = −1</text><text x="216" y="196" font-family="ui-monospace, monospace" font-size="11" fill="#10b981">t = 1</text><text x="258" y="180" font-family="ui-monospace, monospace" font-size="11" fill="#10b981">t = 2</text><text x="305" y="235" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="13.5" fill="currentColor">r(t) = r₀ + t v</text></svg>',
        afterConcept: 2,
      },
      {
        caption: 'The plane through $P_0$ with normal $\\mathbf{n}$: every displacement $\\mathbf{r} - \\mathbf{r}_0$ lying in the plane is perpendicular to $\\mathbf{n}$, which is exactly the equation $\\mathbf{n} \\cdot (\\mathbf{r} - \\mathbf{r}_0) = 0$. The normal, not any line in the plane, is what the equation knows.',
        svg: '<svg viewBox="0 0 720 380" width="100%" role="img" aria-label="A tilted plane drawn as a shaded parallelogram with a point P0 in it, a normal vector n rising perpendicular from P0 with a right-angle mark, and a second in-plane vector from P0 to another point P"><defs><marker id="a12-l5b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><polygon points="145,270 425,320 535,190 255,140" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.2"/><circle cx="350" cy="235" r="4" fill="#10b981"/><text x="360" y="232" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">P₀</text><line x1="350" y1="235" x2="270" y2="110" stroke="#f43f5e" stroke-width="2.6" marker-end="url(#a12-l5b)"/><text x="252" y="100" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="15" fill="#f43f5e">n</text><path d="M 328 218 L 336 226" fill="none" stroke="#f43f5e" stroke-width="1.2" opacity="0.0"/><line x1="336" y1="227" x2="328" y2="219" stroke="#f43f5e" stroke-width="1"/><line x1="336" y1="227" x2="345" y2="234" stroke="#f43f5e" stroke-width="1"/><line x1="350" y1="235" x2="470" y2="285" stroke="#10b981" stroke-width="2.2" marker-end="url(#a12-l5b)"/><circle cx="474" cy="286" r="3.5" fill="#10b981"/><text x="484" y="283" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">P</text><text x="392" y="278" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="13" fill="#10b981">r − r₀</text><text x="556" y="170" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="14" fill="currentColor">n · (r − r₀) = 0</text><text x="180" y="345" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.7">the plane: all tips of r for which the displacement from P₀ is ⊥ n</text></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'Three forms of one line',
        problem: 'Find the vector, parametric and symmetric equations of the line through $P_0(1,\\ -2,\\ 3)$ parallel to $\\mathbf{v} = \\langle 4,\\ 2,\\ -5\\rangle$, and decide whether $(9,\\ 2,\\ -7)$ lies on it.',
        steps: [
          { label: 'Vector form', text: 'With $\\mathbf{r}_0 = \\langle 1, -2, 3\\rangle$: $\\mathbf{r} = \\langle 1, -2, 3\\rangle + t\\langle 4, 2, -5\\rangle$.' },
          { label: 'Parametric form', text: 'Component by component: $x = 1 + 4t$, $y = -2 + 2t$, $z = 3 - 5t$.' },
          { label: 'Symmetric form', text: 'Solve each for $t$ and equate: $\\frac{x - 1}{4} = \\frac{y + 2}{2} = \\frac{z - 3}{-5}$ (mind the signs: $y - (-2) = y + 2$).' },
          { label: 'Test the point', text: 'From $x$: $t = (9 - 1)/4 = 2$. Check $y$: $-2 + 2(2) = 2$ ✓. Check $z$: $3 - 5(2) = -7$ ✓. The same $t = 2$ satisfies all three — the point is on the line.' },
        ],
        result: 'All three descriptions of the same line; $(9, 2, -7)$ is the point at $t = 2$, one full direction-step beyond $2\\mathbf{v}$ from $P_0$.',
      },
      {
        title: 'A plane through three points',
        problem: 'Find the plane through $P(1,\\ 3,\\ 2)$, $Q(3,\\ -1,\\ -6)$ and $R(5,\\ 2,\\ 1)$.',
        steps: [
          { label: 'Two spanning vectors', text: '$\\overrightarrow{PQ} = \\langle 2, -4, -8\\rangle$ and $\\overrightarrow{PR} = \\langle 4, -1, -1\\rangle$ both lie in the plane.' },
          { label: 'Normal by cross product', text: '$\\overrightarrow{PQ} \\times \\overrightarrow{PR} = \\langle (-4)(-1) - (-8)(-1),\\ (-8)(4) - (2)(-1),\\ (2)(-1) - (-4)(4)\\rangle = \\langle -4, -30, 14\\rangle$, which simplifies to $\\mathbf{n} = \\langle 2, 15, -7\\rangle$.' },
          { label: 'Point-normal form', text: 'Through $P(1,3,2)$: $2(x - 1) + 15(y - 3) - 7(z - 2) = 0$, i.e. $2x + 15y - 7z = 33$.' },
          { label: 'Verify with the third point', text: 'Check $R$: $2(5) + 15(2) - 7(1) = 10 + 30 - 7 = 33$ ✓ — and $Q$ gives $6 - 15 + 42 = 33$ ✓. All three points lie on the plane.' },
        ],
        result: '$2x + 15y - 7z = 33$, with normal $\\langle 2, 15, -7\\rangle$ — the cross product of any two in-plane edge vectors is the standard way to produce a normal.',
      },
      {
        title: 'Distance from a point to a plane',
        problem: 'How far is the point $(1,\\ 2,\\ 3)$ from the plane $2x - 3y + 6z - 1 = 0$, and which side of the plane is it on?',
        steps: [
          { label: 'Plug into the formula', text: 'The denominator is the normal\'s length: $\\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{49} = 7$.' },
          { label: 'Evaluate the signed distance', text: 'The numerator: $2(1) - 3(2) + 6(3) - 1 = 2 - 6 + 18 - 1 = 13$, so $D = |13|/7 = \\frac{13}{7}$.' },
          { label: 'Read the sign', text: 'The left side evaluates to $+13 > 0$; the origin evaluates to $-1 < 0$. The point sits on the opposite side of the plane from the origin, at distance $\\frac{13}{7} \\approx 1.86$.' },
        ],
        result: 'Distance $\\frac{13}{7}$, on the far side from the origin — the sign of $ax_0 + by_0 + cz_0 + d$ is a side-detector, and its magnitude over $|\\mathbf{n}|$ is the exact distance.',
      },
      {
        title: 'Where a line pierces a plane',
        problem: 'Find the point where the line $x = 1 + 2t$, $y = 2 - t$, $z = 3 + t$ meets the plane $x + 2y + 3z = 6$.',
        steps: [
          { label: 'Substitute the line into the plane', text: '$(1 + 2t) + 2(2 - t) + 3(3 + t) = 6$ — the line\'s point travels, and we want the instant it satisfies the plane equation.' },
          { label: 'Solve for the parameter', text: '$1 + 2t + 4 - 2t + 9 + 3t = 6$ gives $14 + 3t = 6$, so $t = -\\frac{8}{3}$.' },
          { label: 'Back-substitute', text: '$x = 1 - \\frac{16}{3} = -\\frac{13}{3}$, $y = 2 + \\frac{8}{3} = \\frac{14}{3}$, $z = 3 - \\frac{8}{3} = \\frac{1}{3}$.' },
        ],
        result: 'The line pierces the plane at $\\left(-\\frac{13}{3},\\ \\frac{14}{3},\\ \\frac{1}{3}\\right)$ — one linear equation in one unknown; the parameter is the price of reducing geometry to algebra.',
      },
    ],
    keyTakeaways: [
      'A line is a point and a direction: $\\mathbf{r} = \\mathbf{r}_0 + t\\mathbf{v}$, with parametric forms $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$ and symmetric form $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$ (zero components handled separately).',
      'A plane is a point and a normal: $\\mathbf{n} \\cdot (\\mathbf{r} - \\mathbf{r}_0) = 0$, equivalently $ax + by + cz = d$ with $\\mathbf{n} = \\langle a, b, c\\rangle$; conversely every linear equation in $x, y, z$ draws a plane.',
      'Planes are parallel when their normals are proportional, perpendicular when their normals are orthogonal; the angle between planes is the angle between normals.',
      'Distance from point to plane: $D = \\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$ — a scalar projection of any connecting vector onto the unit normal.',
      'Skew lines are a genuinely spatial phenomenon; their common perpendicular has direction $\\mathbf{v}_1 \\times \\mathbf{v}_2$, and the distance between them is a scalar triple product divided by an area.',
      'Lines and planes intersect (or fail to) by pure algebra: substitute the parametric line into the plane equation and solve the single resulting equation in $t$.',
    ],
    quiz: [
      {
        q: 'The line through $(2,\\ 1,\\ -3)$ and $(5,\\ 1,\\ -3)$ has direction vector:',
        options: [`$\\langle 3,\\ 0,\\ 0\\rangle$`, `$\\langle 0,\\ 0,\\ 0\\rangle$`, `$\\langle 2,\\ 1,\\ -3\\rangle$`, `$\\langle 5,\\ 1,\\ -3\\rangle$`],
        answer: 0,
        explanation: 'Subtract: $\\langle 5 - 2,\\ 1 - 1,\\ -3 - (-3)\\rangle = \\langle 3, 0, 0\\rangle$ — the line runs parallel to the $x$-axis with $y$ and $z$ frozen.',
      },
      {
        q: 'Which point lies on the line $\\frac{x - 1}{4} = \\frac{y + 2}{2} = \\frac{z - 3}{-5}$?',
        options: [`$(9,\\ 2,\\ -7)$`, `$(5,\\ 0,\\ -2)$`, '$(1,\\ -2,\\ 3)$ only', 'None of these'],
        answer: 0,
        explanation: 'At $(9, 2, -7)$: $(9-1)/4 = 2$, $(2+2)/2 = 2$, $(-7-3)/(-5) = 2$ — all three ratios equal $t = 2$, so the point is on the line. (The point $(1, -2, 3)$ also lies on it at $t = 0$, but option 3 says "only", which is false.)',
      },
      {
        q: 'A normal vector to the plane through $(1,3,2)$, $(3,-1,-6)$ and $(5,2,1)$ is:',
        options: [`$\\langle 2,\\ 15,\\ -7\\rangle$`, `$\\langle 2,\\ -4,\\ -8\\rangle$`, `$\\langle 4,\\ -1,\\ -1\\rangle$`, `$\\langle 1,\\ 3,\\ 2\\rangle$`],
        answer: 0,
        explanation: 'The edge vectors $\\langle 2,-4,-8\\rangle$ and $\\langle 4,-1,-1\\rangle$ span the plane; their cross product $\\langle -4, -30, 14\\rangle$ is the normal, which scales to $\\langle 2, 15, -7\\rangle$. The edge vectors themselves lie IN the plane, so they cannot be normals.',
      },
      {
        q: 'The plane $x - 2y + 3z = 5$ is parallel to the plane:',
        options: [`$2x - 4y + 6z = 7$`, `$x - 2y + 3z = 5$`, `$x + 2y + 3z = 5$`, `$3x - 2y + z = 5$`],
        answer: 0,
        explanation: 'Normals $\\langle 1,-2,3\\rangle$ and $\\langle 2,-4,6\\rangle$ are proportional ($\\times 2$), and the constants $5 \\ne 10$ differ, so the planes are parallel and distinct. Identical normals with equal constants would be the same plane.',
      },
      {
        q: 'The planes $x + y + z = 1$ and $x + y - 2z = 1$ are:',
        options: ['perpendicular', 'parallel', 'identical', 'neither — they do not intersect'],
        answer: 0,
        explanation: 'Normals $\\langle 1,1,1\\rangle$ and $\\langle 1,1,-2\\rangle$: dot product $1 + 1 - 2 = 0$, so the normals are orthogonal and the planes are perpendicular. Non-proportional normals also guarantee they meet (in a line).',
      },
      {
        q: 'The distance from $(1,\\ 2,\\ 3)$ to the plane $2x - 3y + 6z - 1 = 0$ is:',
        options: [`$\\frac{13}{7}$`, `$\\frac{7}{13}$`, `$13$`, '$\\frac{13}{\\sqrt{49}}$ is not the right form'],
        answer: 0,
        explanation: 'Numerator $|2 - 6 + 18 - 1| = 13$; denominator $\\sqrt{4 + 9 + 36} = 7$; distance $13/7 \\approx 1.86$. Note $\\sqrt{49} = 7$, so the last option is just a distractor phrasing of the same thing incorrectly.',
      },
      {
        q: 'The angle between the planes $x + y + z = 1$ and $x - 2y + 3z = 1$ satisfies $\\cos\\theta = $',
        options: [`$\\frac{2}{\\sqrt{42}}$`, `$\\frac{1}{\\sqrt{3}}$`, `$0$`, `$\\frac{2}{\\sqrt{3}}$`],
        answer: 0,
        explanation: 'Normals $\\langle 1,1,1\\rangle$ and $\\langle 1,-2,3\\rangle$: $\\cos\\theta = \\frac{|1 - 2 + 3|}{\\sqrt{3}\\sqrt{14}} = \\frac{2}{\\sqrt{42}}$, giving $\\theta \\approx 72°$.',
      },
      {
        q: 'The lines $x = 1 + t,\\ y = 2 - t,\\ z = t$ and $x = 2 - s,\\ y = 1 + 2s,\\ z = 4 + s$ are:',
        options: ['skew', 'parallel', 'intersecting', 'identical'],
        answer: 0,
        explanation: 'Directions $\\langle 1,-1,1\\rangle$ and $\\langle -1,2,1\\rangle$ are not proportional (not parallel). Solving $x$ and $z$: $1 + t = 2 - s$ and $t = 4 + s$ give $t = 2.5$, $s = -1.5$; checking $y$: $2 - 2.5 = -0.5$ but $1 + 2(-1.5) = -2$ — no agreement. The lines miss each other: skew.',
      },
      {
        q: 'The line $x = 1 + 2t,\\ y = 2 - t,\\ z = 3 + t$ meets the plane $x + 2y + 3z = 6$ at:',
        options: [`$\\left(-\\frac{13}{3},\\ \\frac{14}{3},\\ \\frac{1}{3}\\right)$`, `$(1,\\ 2,\\ 3)$`, `$(3,\\ 1,\\ 4)$`, 'It never meets the plane'],
        answer: 0,
        explanation: 'Substituting: $14 + 3t = 6$ so $t = -\\frac{8}{3}$; then $x = 1 - \\frac{16}{3} = -\\frac{13}{3}$, $y = 2 + \\frac{8}{3} = \\frac{14}{3}$, $z = 3 - \\frac{8}{3} = \\frac{1}{3}$.',
      },
      {
        q: 'For skew lines with directions $\\mathbf{v}_1$ and $\\mathbf{v}_2$, the direction of their common perpendicular is:',
        options: [`$\\mathbf{v}_1 \\times \\mathbf{v}_2$`, `$\\mathbf{v}_1 \\cdot \\mathbf{v}_2$`, `$\\mathbf{v}_1 + \\mathbf{v}_2$`, `$\\mathbf{v}_1 \\times \\mathbf{v}_1$`],
        answer: 0,
        explanation: 'The cross product is perpendicular to both direction vectors at once — exactly what a segment meeting both lines at right angles requires. It is nonzero precisely when the lines are not parallel.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Lines, planes and their arithmetic',
        blocks: [
          {
            kind: 'derivation',
            heading: 'The point-to-plane distance, honestly',
            body: 'Start from the projection picture. Choose any point $P_0$ on the plane $ax + by + cz + d = 0$ and let $P_1$ be the external point. The sought distance is the component of $\\overrightarrow{P_0P_1}$ along the normal direction $\\mathbf{n} = \\langle a, b, c\\rangle$: $D = \\left| \\frac{\\mathbf{n} \\cdot \\overrightarrow{P_0P_1}}{|\\mathbf{n}|} \\right| = \\left| \\frac{a(x_1 - x_0) + b(y_1 - y_0) + c(z_1 - z_0)}{\\sqrt{a^2+b^2+c^2}} \\right|$. Since $P_0$ lies on the plane, $ax_0 + by_0 + cz_0 = -d$, and the numerator becomes $|ax_1 + by_1 + cz_1 + d|$: the plane\'s left-hand side, evaluated at the point. The derivation shows the formula is nothing but Section 12.3\'s scalar projection wearing plane clothing — and it generalizes verbatim to $n$ dimensions, where it becomes the distance from a point to a hyperplane.',
          },
          {
            kind: 'derivation',
            heading: 'The distance between skew lines',
            body: 'Let the lines be $P_1 + t\\mathbf{v}_1$ and $P_2 + s\\mathbf{v}_2$. The squared distance between a generic pair of points is $q(t,s) = |\\overrightarrow{P_1P_2} + t\\mathbf{v}_1 - s\\mathbf{v}_2|^2$; setting both partial derivatives $\\partial q/\\partial t$ and $\\partial q/\\partial s$ to zero yields the normal equations $\\mathbf{v}_1 \\cdot (\\overrightarrow{P_1P_2} + t\\mathbf{v}_1 - s\\mathbf{v}_2) = 0$ and $\\mathbf{v}_2 \\cdot (\\overrightarrow{P_1P_2} + t\\mathbf{v}_1 - s\\mathbf{v}_2) = 0$ — the closest connecting segment is perpendicular to both lines. Solving and simplifying collapses the minimal distance to $|\\overrightarrow{P_1P_2} \\cdot (\\mathbf{v}_1 \\times \\mathbf{v}_2)|/|\\mathbf{v}_1 \\times \\mathbf{v}_2|$: the height of the parallelepiped whose base is spanned by the two directions. This is least squares in miniature — the same normal equations Gauss used for orbits.',
          },
          {
            kind: 'theorem',
            heading: 'Linear equations are planes',
            body: 'The correspondence is exact: the graph of $ax + by + cz = d$ (with $\\langle a,b,c\\rangle \\ne \\mathbf{0}$) is the plane through any one of its solutions with normal $\\langle a, b, c\\rangle$; and every plane arises this way. The same theorem holds in every dimension — the solution set of one linear equation in $n$ unknowns is an $(n-1)$-dimensional hyperplane, and the coefficient vector is its normal. Systems of linear equations then ask where hyperplanes meet: two planes in space meet in a line, three in a point — or in nothing, when the algebra reports inconsistency that geometry calls parallel.',
          },
          {
            kind: 'application',
            heading: 'Normals in computer graphics',
            body: 'Real-time 3D lives on this section\'s arithmetic. Every triangle of a mesh carries a normal (the cross product of two edges — Example 2\'s computation run billions of times per second). Lambert\'s lighting law shades a surface by $\\mathbf{n} \\cdot \\mathbf{L}$, the cosine between normal and light direction, which is why faces turn dark as they turn away. **Backface culling** discards a triangle when $\\mathbf{n} \\cdot \\mathbf{v} > 0$ (its normal points away from the camera, so it must be on the far side of the object). And ray tracing intersects a view ray $\\mathbf{o} + t\\mathbf{d}$ with a plane by exactly Example 4\'s substitution: $t = \\mathbf{n} \\cdot (\\mathbf{r}_0 - \\mathbf{o})/(\\mathbf{n} \\cdot \\mathbf{d})$, then checks the hit point against the triangle\'s edges.',
          },
          {
            kind: 'application',
            heading: 'Robotics and collision axes',
            body: 'A robot arm\'s rotational joints have axes — lines in space — and the mathematics of screw motion pairs each rotation axis with a sliding along it. Two successive rotations about skew axes compose to a rotation about a third skew axis plus a translation, computed with exactly the common-perpendicular machinery of this section. In robotics this is the theory of screws (Ball, 1900; modern formulations via dual quaternions); in everyday terms it is why your shoulder-then-elbow motion moves your hand in an arc no single joint explains.',
          },
          {
            kind: 'remark',
            heading: 'Why skewness needs three dimensions',
            body: 'Count degrees of freedom. A line in $\\mathbb{R}^n$ has $2n - 2$ parameters (a point on it up to sliding, plus a direction up to scale); forcing two lines to share a point imposes $n - 1$... in $\\mathbb{R}^3$ two generic lines each have 4 parameters and the meeting condition is codimension 2, so generically they miss. In the plane, two non-parallel lines must meet — there is no room to dodge. In $\\mathbb{R}^4$ and beyond, skewness is generic even for pairs of lines in "general position". The pattern is worth internalizing: incidence questions in geometry are dimension counts in disguise, a principle that grows into intersection theory.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Hyperplanes, duality, and beyond',
        blocks: [
          {
            kind: 'application',
            heading: 'Hyperplanes and machine learning',
            body: 'Replace "plane" by **hyperplane** — the set $\\mathbf{w} \\cdot \\mathbf{x} = b$ in $\\mathbb{R}^n$ — and this section\'s geometry becomes the geometry of data. A linear classifier labels points by the sign of $\\mathbf{w} \\cdot \\mathbf{x} - b$, i.e. by which side of the hyperplane they fall on: the two sides of a plane, made into a decision. The support vector machine finds the separating hyperplane that maximizes the margin $2/|\\mathbf{w}|$ between the classes — the point-to-plane distance formula of this section is literally the objective. The separating hyperplane theorem (two disjoint convex sets can be split by a hyperplane, proved by projecting onto the segment of closest approach — the same projection argument as the distance derivation) is the load-bearing result of convex analysis and optimization duality.',
          },
          {
            kind: 'para',
            heading: 'Affine geometry',
            body: 'This section has quietly been doing **affine geometry**: the study of points, lines and planes with no notion of angle or distance, only incidence and parallelism. The vector equation $\\mathbf{r} = \\mathbf{r}_0 + t\\mathbf{v}$ is affine, not linear — it does not pass through the origin unless $\\mathbf{r}_0 = \\mathbf{0}$. The plane through three points is the set of **barycentric combinations** $\\alpha P + \\beta Q + \\gamma R$ with $\\alpha + \\beta + \\gamma = 1$ — the weights are the triangle\'s barycentric coordinates, which is how graphics cards decide which triangle a pixel belongs to (every point of the plane is a unique affine combination of the three vertices, and the weights interpolate color and depth). Barycentric coordinates have themselves become a research field — generalized barycentric coordinates for polygons and meshes power modern mesh deformation and finite elements.',
          },
          {
            kind: 'open',
            heading: 'Duality and incidence',
            body: 'In the projective plane, points and lines are interchangeable: the dual of "two points determine a line" is "two lines determine a point". The duality maps a point to its set of incident lines and back, and it converts hard incidence questions about points into dual questions about hyperplanes. The **Szemerédi–Trotter theorem** bounds how many incidences $n$ points and $n$ lines can share ($O(n^{4/3})$ — the grid-and-lattice construction shows the bound is tight), and its proof, the crossing-number method of Székely, is one of the pillars of discrete geometry. The exact constant remains open, and every hyperplane variant — incidences with hyperplanes in higher dimensions, unit-distance problems, distinct-distances (the Erdős problem Guth and Katz nearly closed) — is an active frontier where this chapter\'s humble plane meets combinatorics.',
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 12.6
  {
    sectionId: 'calc-ch12-s6',
    readingTime: 8,
    intro: 'Curves were easy to draw and hard to describe; surfaces are the reverse — a single equation in $x$, $y$ and $z$ describes a surface, but seeing which one takes training. This section supplies the training. The two great tools are the **trace** (slice the surface by a plane and read the curve that appears) and the **classification of quadric surfaces** — the complete census of second-degree equations, which turns out to be exactly six shapes plus their rotated and shifted relatives. The parabola, ellipse and hyperbola of single-variable calculus all return, extruded and revolved into the third dimension, joined by two newcomers: the saddle that dips and rises along different directions, and the hyperboloids that curve outward in opposite senses.',
    objectives: [
      'Recognize cylinders — surfaces generated by lines moving parallel to a missing variable — and identify their ruling direction',
      'Use the trace technique: slice a surface by coordinate planes and parallel planes to identify it',
      'Sketch and classify the six quadric surfaces: ellipsoid, elliptic paraboloid, hyperbolic paraboloid, elliptic cone, and the two hyperboloids',
      'Read off axis intercepts and the axis of symmetry from a quadric equation',
      'Complete the square to identify quadrics that are shifted off the origin',
    ],
    concepts: [
      {
        term: 'Cylinders',
        kind: 'definition',
        statement: 'A **cylinder** is a surface generated by a straight line (**ruling**) that moves parallel to a fixed axis while tracing a plane curve. Algebraically, an equation with a missing variable draws a cylinder parallel to that variable\'s axis: $z = x^2$ is a **parabolic cylinder** (a parabola extruded along the $y$-axis), $x^2 + y^2 = 1$ a circular cylinder along $z$.',
        detail: 'The rule is mechanical: whatever variable does not appear, the surface is constant along — every point $(x_0, z_0)$ on the parabola $z = x^2$ in the $xz$-plane lifts to the entire line of points $(x_0, y, z_0)$, all $y$. Cylinders over ellipses, parabolas and hyperbolas inherit their names from the curve. Note that in 3D "cylinder" no longer means circular — any extruded curve qualifies.',
      },
      {
        term: 'The trace technique',
        kind: 'method',
        statement: 'A **trace** of a surface is its intersection with a plane — usually the coordinate planes $x = 0$, $y = 0$, $z = 0$, or parallels like $z = k$. To identify a surface: set each variable to zero (and to convenient constants) in its equation, recognize the resulting plane curves, and assemble the shape from its slices.',
        detail: 'The traces are the diagnostic fingerprints: an elliptic paraboloid has ellipses in horizontal planes and parabolas in vertical ones; a hyperboloid of one sheet has ellipses horizontally and hyperbolas vertically; a cone has ellipses shrinking to a point. Sketching a quadric well is drawing three or four informative traces and letting the reader\'s eye interpolate between them.',
      },
      {
        term: 'Quadric surfaces',
        kind: 'definition',
        statement: 'A **quadric surface** is the graph of a second-degree equation in $x$, $y$, $z$. In standard position it is one of six types: the **ellipsoid** $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1$; the **elliptic paraboloid** $z = \\frac{x^2}{a^2} + \\frac{y^2}{b^2}$; the **hyperbolic paraboloid** (saddle) $z = \\frac{y^2}{b^2} - \\frac{x^2}{a^2}$; the **elliptic cone** $\\frac{z^2}{c^2} = \\frac{x^2}{a^2} + \\frac{y^2}{b^2}$; the **hyperboloid of one sheet** $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1$; and the **hyperboloid of two sheets** $\\frac{z^2}{c^2} - \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$.',
        detail: 'The variable carrying the minus sign (or the squared-away variable of the paraboloids) names the **axis**: the one-sheeted hyperboloid above opens around the $z$-axis; its two-sheeted relative opens along the $z$-axis. Shifting the center away from the origin replaces $x$ by $(x - x_0)$ everywhere, and the standard completing-the-square drill recovers the center.',
      },
      {
        term: 'Ellipsoid and elliptic paraboloid',
        kind: 'insight',
        statement: 'The **ellipsoid** has all-positive signs; its traces are all ellipses, with intercepts $(\\pm a, 0, 0)$, $(0, \\pm b, 0)$, $(0, 0, \\pm c)$, and it is bounded. The **elliptic paraboloid** $z = \\frac{x^2}{a^2} + \\frac{y^2}{b^2}$ opens along the positive $z$-axis with a minimum at the origin; horizontal traces are ellipses growing with height, vertical traces are parabolas.',
        detail: 'If two semiaxes of an ellipsoid are equal it is a spheroid (revolved); if all three are equal, a sphere. The elliptic paraboloid is the shape of satellite dishes and headlights precisely because of the reflection property in this section\'s deeper results: rays entering parallel to the axis all reflect through one point — the focus.',
      },
      {
        term: 'The saddle',
        kind: 'insight',
        statement: 'The **hyperbolic paraboloid** $z = \\frac{y^2}{b^2} - \\frac{x^2}{a^2}$ curves upward along the $y$-direction and downward along the $x$-direction. The trace $z = k$ is the hyperbola $\\frac{y^2}{b^2} - \\frac{x^2}{a^2} = k$ (opening along $y$ for $k > 0$, along $x$ for $k < 0$, degenerating to two lines at $k = 0$); vertical traces are parabolas of opposite concavity.',
        detail: 'At the origin the surface rises in one direction and falls in the perpendicular one — the origin is neither a maximum nor a minimum but a **saddle point**, the 3D avatar of the second-derivative test\'s failure case $f_{xx}f_{yy} < f_{xy}^2$. The shape is the Pringles chip, and near its center it approximates the minimal surface a soap film stretches to — which is why saddle-shaped roofs and saddle joints appear wherever curvature must fight load.',
      },
      {
        term: 'Cone and the two hyperboloids',
        kind: 'method',
        statement: 'The **elliptic cone** $\\frac{z^2}{c^2} = \\frac{x^2}{a^2} + \\frac{y^2}{b^2}$ has elliptical traces shrinking to the vertex at the origin, with straight lines (the generators) lying wholly on the surface. The **hyperboloid of one sheet** (one minus sign) is connected — a cooling tower — and is also a ruled surface. The **hyperboloid of two sheets** (minus signs on two variables, constant moved) separates into two pieces, one above $z = c$, one below $z = -c$.',
        detail: 'A quick discriminator for $Ax^2 + By^2 + Cz^2 + J = 0$: all signs agreeing after normalization gives an ellipsoid (if the constant has the right sign), one disagreement gives the one-sheeted hyperboloid, two disagreements the two-sheeted, and $J = 0$ with one disagreement gives the cone between them — in fact the cone is the limiting surface the hyperboloids approach as their waist or gap closes.',
      },
      {
        term: 'Completing the square',
        kind: 'method',
        statement: 'A shifted quadric is returned to standard position by completing the square in each variable: $x^2 - 2x = (x-1)^2 - 1$, so an equation like $x^2 + 2y^2 + z^2 - 2x + 8y - 2z = 1$ becomes $$(x - 1)^2 + 2(y + 2)^2 + (z - 1)^2 = 11$$ — an ellipsoid centered at $(1,\\ -2,\\ 1)$.',
        detail: 'The drill is exactly the 2D one, done three times: gather each variable\'s linear and quadratic terms, add and subtract the square of half the linear coefficient, and collect the leftover constants on the right. What survives on the left is a sum of shifted squares; comparing signs and constants with the six standard forms finishes the identification. Rotation of axes (when an $xy$-term is present) is a linear-algebra matter — the eigenvalue discussion in the deeper results.',
      },
    ],
    figures: [
      {
        caption: 'The ellipsoid $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1$ with its traces: every horizontal slice is an ellipse, shrinking from the $z = 0$ waist ellipse to points at the intercepts $(0, 0, \\pm c)$. All traces of an ellipsoid are ellipses — that is its fingerprint.',
        svg: '<svg viewBox="0 0 720 400" width="100%" role="img" aria-label="An ellipsoid drawn as an outer ellipse with two horizontal elliptical traces above and below the central trace, like sliced bread, with axis labels"><ellipse cx="360" cy="220" rx="150" ry="90" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.6"/><ellipse cx="360" cy="220" rx="150" ry="26" fill="none" stroke="#10b981" stroke-width="1.8"/><ellipse cx="360" cy="166" rx="120" ry="21" fill="none" stroke="#10b981" stroke-width="1.4" stroke-dasharray="5 4" opacity="0.85"/><ellipse cx="360" cy="274" rx="120" ry="21" fill="none" stroke="#10b981" stroke-width="1.4" stroke-dasharray="5 4" opacity="0.85"/><line x1="360" y1="316" x2="360" y2="104" stroke="currentColor" stroke-width="1.3" marker-end="url(#a12-l6a)" opacity="0.0"/><line x1="360" y1="316" x2="360" y2="104" stroke="currentColor" stroke-width="1.3" opacity="0.6"/><polygon points="360,100 355,110 365,110" fill="currentColor" opacity="0.7"/><text x="348" y="92" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="12.5" fill="currentColor">z</text><line x1="205" y1="220" x2="515" y2="220" stroke="currentColor" stroke-width="1.1" opacity="0.4" stroke-dasharray="4 4"/><text x="196" y="216" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="12.5" fill="currentColor">−a</text><text x="520" y="216" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="12.5" fill="currentColor">a</text><text x="528" y="240" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="12.5" fill="currentColor">x</text><text x="352" y="196" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="12.5" fill="currentColor">c</text><text x="352" y="252" font-family="ui-sans-serif, system-ui" font-style="italic" font-size="12.5" fill="currentColor">−c</text><text x="516" y="158" font-family="ui-sans-serif, system-ui" font-size="12" fill="#10b981">trace z = 0.6c</text><text x="516" y="286" font-family="ui-sans-serif, system-ui" font-size="12" fill="#10b981">trace z = −0.6c</text><text x="188" y="130" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" opacity="0.8">all traces: ellipses</text></svg>',
        afterConcept: 4,
      },
      {
        caption: 'The hyperbolic paraboloid $z = \\frac{y^2}{b^2} - \\frac{x^2}{a^2}$: it rises along the $y$-axis (amber curve) and dips along the $x$-axis (rose curve), while every nonzero horizontal trace is a hyperbola (at $k = 0$ the trace degenerates to the pair of lines $y = \\pm(b/a)x$). Through the saddle point the surface curves downward in one direction and upward in the perpendicular one.',
        svg: '<svg viewBox="0 0 720 460" width="100%" role="img" aria-label="A wireframe saddle surface: green grid lines, an amber parabola rising along one axis and a rose parabola dipping along the other"><polyline points="240,226 260,142 280,122 300,166 320,274" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/><polyline points="280,322 300,238 320,218 340,262 360,370" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/><polyline points="320,354 340,270 360,250 380,294 400,402" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/><polyline points="360,322 380,238 400,218 420,262 440,370" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/><polyline points="400,226 420,142 440,122 460,166 480,274" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/><polyline points="240,226 280,322 320,354 360,322 400,226" fill="none" stroke="#10b981" stroke-width="1.3" opacity="0.8"/><polyline points="260,142 300,238 340,270 380,238 420,142" fill="none" stroke="#10b981" stroke-width="1.3" opacity="0.8"/><polyline points="320,354 340,270 360,250 380,294 400,402" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.45"/><polyline points="300,166 340,262 380,294 420,262 460,166" fill="none" stroke="#10b981" stroke-width="1.3" opacity="0.8"/><polyline points="320,274 360,370 400,402 440,370 480,274" fill="none" stroke="#10b981" stroke-width="1.3" opacity="0.8"/><polyline points="280,122 320,218 360,250 400,218 440,122" fill="none" stroke="#f59e0b" stroke-width="2.6"/><polyline points="320,354 340,270 360,250 380,294 400,402" fill="none" stroke="#f43f5e" stroke-width="2.6"/><text x="448" y="112" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f59e0b">rises along y</text><text x="408" y="424" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="#f43f5e">dips along x</text><text x="238" y="396" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">x</text><text x="492" y="270" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" opacity="0.75">y</text><text x="516" y="180" font-family="ui-sans-serif, system-ui" font-size="12" fill="#10b981" opacity="0.9">z = 0: hyperbola trace</text><circle cx="360" cy="250" r="3.5" fill="currentColor"/><text x="368" y="244" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">saddle point</text></svg>',
        afterConcept: 5,
      },
    ],
    examples: [
      {
        title: 'Identifying an ellipsoid',
        problem: 'Describe and sketch $x^2 + \\frac{y^2}{9} + \\frac{z^2}{4} = 1$.',
        steps: [
          { label: 'Compare with the standard form', text: 'All three variables squared with plus signs and total $1$: an **ellipsoid** with $a = 1$, $b = 3$, $c = 2$.' },
          { label: 'Read the intercepts', text: 'Setting pairs of variables to zero: $(\\pm 1, 0, 0)$, $(0, \\pm 3, 0)$, $(0, 0, \\pm 2)$ — six axis crossings.' },
          { label: 'Check the traces', text: 'In the plane $z = k$ (for $|k| \\le 2$): $x^2 + \\frac{y^2}{9} = 1 - \\frac{k^2}{4}$, an ellipse shrinking as $|k|$ grows to $2$; the $z = 0$ waist is the largest, $x^2 + \\frac{y^2}{9} = 1$. Vertical traces like $x = 0$ give $\\frac{y^2}{9} + \\frac{z^2}{4} = 1$, also ellipses.' },
        ],
        result: 'An ellipsoid stretched farthest along $y$ (semi-axis 3), with all traces ellipses — a rugbly ball around the origin.',
      },
      {
        title: 'Identifying an elliptic paraboloid',
        problem: 'Identify $z = 4x^2 + y^2$ and describe its traces.',
        steps: [
          { label: 'Shape of the equation', text: 'One linear variable ($z$) equals a sum of positive squares: an **elliptic paraboloid** opening upward along $+z$, with vertex at the origin.' },
          { label: 'Horizontal trace', text: 'At $z = 4$: $4x^2 + y^2 = 4$, i.e. $x^2 + \\frac{y^2}{4} = 1$ — an ellipse with semi-axes $1$ (along $x$) and $2$ (along $y$). Higher slices give bigger ellipses.' },
          { label: 'Vertical traces', text: 'At $y = 0$: $z = 4x^2$, a parabola four times as steep as $z = x^2$; at $x = 0$: $z = y^2$, a gentler one. The bowl is steeper across than along.' },
        ],
        result: 'An upward elliptic paraboloid, steeper in the $x$-direction, every horizontal trace an ellipse growing with height.',
      },
      {
        title: 'A hyperboloid of one sheet',
        problem: 'Identify $\\frac{x^2}{4} + y^2 - \\frac{z^2}{4} = 1$ and describe its traces.',
        steps: [
          { label: 'Count the minus signs', text: 'Two plus signs and one minus, equalling $+1$: a **hyperboloid of one sheet** — a connected surface, a cooling tower.' },
          { label: 'Name the axis', text: 'The minus sign sits on $z$, so the axis of the surface is the $z$-axis; the smallest horizontal trace is at $z = 0$.' },
          { label: 'Horizontal traces', text: 'At height $z = k$: $\\frac{x^2}{4} + y^2 = 1 + \\frac{k^2}{4}$ — ellipses, smallest at the waist $z = 0$ and growing in both directions.' },
          { label: 'Vertical trace', text: 'At $x = 0$: $y^2 - \\frac{z^2}{4} = 1$, a hyperbola opening along $y$ — the tower\'s silhouette in profile.' },
        ],
        result: 'One-sheeted hyperboloid about the $z$-axis: elliptical belts growing away from the waist, hyperbolic profiles containing it — and (deeper result) straight lines lying wholly on it.',
      },
      {
        title: 'Completing the square three times',
        problem: 'Identify $x^2 + 2y^2 + z^2 - 2x + 8y - 2z = 1$.',
        steps: [
          { label: 'Group by variable', text: 'Collect: $(x^2 - 2x) + 2(y^2 + 4y) + (z^2 - 2z) = 1$.' },
          { label: 'Complete each square', text: '$x^2 - 2x = (x-1)^2 - 1$; $2(y^2 + 4y) = 2[(y+2)^2 - 4] = 2(y+2)^2 - 8$; $z^2 - 2z = (z-1)^2 - 1$.' },
          { label: 'Collect constants', text: '$(x-1)^2 + 2(y+2)^2 + (z-1)^2 - 10 = 1$, so $(x-1)^2 + 2(y+2)^2 + (z-1)^2 = 11$.' },
          { label: 'Read off the surface', text: 'A sum of shifted positive squares equalling a positive constant: an **ellipsoid** centered at $(1,\\ -2,\\ 1)$, with semiaxes $\\sqrt{11}$, $\\sqrt{11/2}$, $\\sqrt{11}$.' },
        ],
        result: 'A shifted ellipsoid about $(1, -2, 1)$ — the three completing-the-square moves return any shifted quadric to standard position.',
      },
    ],
    keyTakeaways: [
      'A missing variable means a cylinder: the surface is the named curve extruded along the missing axis.',
      'The trace technique — slice by coordinate and parallel planes — identifies any surface from its cross-sections.',
      'The six quadrics: ellipsoid (all ellipses), elliptic paraboloid (ellipses + parabolas, bowl), hyperbolic paraboloid (saddle, parabolas both ways, hyperbola traces), cone (ellipses through a point), hyperboloids of one sheet (connected, cooling tower) and two sheets (two pieces).',
      'The variable carrying the minus sign names the axis of a hyperboloid; the linear variable names the opening direction of a paraboloid.',
      'Shifted quadrics are identified by completing the square in each variable — three 2D drills and a read-off.',
      'Hyperboloids of one sheet and cones are ruled surfaces — straight lines lie entirely on them, which is why they are built from straight steel beams.',
    ],
    quiz: [
      {
        q: 'The equation $z = x^2$ in three-dimensional space draws:',
        options: ['a parabolic cylinder with rulings parallel to the $y$-axis', 'a parabola in the $xz$-plane only', 'an elliptic paraboloid', 'a parabolic cylinder with rulings parallel to the $z$-axis'],
        answer: 0,
        explanation: 'The variable $y$ is missing, so every point of the parabola extends into a full line of constant $x, z$ and varying $y$: a parabolic cylinder ruled along $y$.',
      },
      {
        q: 'The intercepts of the ellipsoid $x^2 + \\frac{y^2}{9} + \\frac{z^2}{4} = 1$ on the $y$-axis are:',
        options: [`$(0,\\ \\pm 3,\\ 0)$`, `$(0,\\ \\pm 9,\\ 0)$`, `$(0,\\ \\pm\\frac{1}{3},\\ 0)$`, `$(\\pm 3,\\ 0,\\ 0)$`],
        answer: 0,
        explanation: 'Set $x = z = 0$: $\\frac{y^2}{9} = 1$ gives $y = \\pm 3$. The denominators are squared semi-axes, not the semi-axes\' reciprocals.',
      },
      {
        q: 'The surface $z = x^2 + 4y^2$ has traces:',
        options: ['ellipses in horizontal planes, parabolas in vertical planes', 'hyperbolas in horizontal planes, parabolas in vertical planes', 'all ellipses', 'parabolas in horizontal planes, lines in vertical planes'],
        answer: 0,
        explanation: 'At $z = k > 0$: $x^2 + 4y^2 = k$, an ellipse; at $x = 0$ or $y = 0$: a parabola in $z$. That signature — ellipses and parabolas — is the elliptic paraboloid.',
      },
      {
        q: 'The trace of $\\frac{x^2}{4} + y^2 - \\frac{z^2}{4} = 1$ in the plane $z = 2$ is:',
        options: ['the ellipse $\\frac{x^2}{8} + \\frac{y^2}{2} = 1$', 'the hyperbola $\\frac{x^2}{4} + y^2 = 2$', 'a parabola', 'two intersecting lines'],
        answer: 0,
        explanation: 'Substituting $z = 2$: $\\frac{x^2}{4} + y^2 = 1 + 1 = 2$, i.e. $\\frac{x^2}{8} + \\frac{y^2}{2} = 1$ — an ellipse, as every horizontal trace of a one-sheeted hyperboloid must be.',
      },
      {
        q: 'A cooling-tower shape is best modeled by:',
        options: ['a hyperboloid of one sheet', 'a hyperboloid of two sheets', 'an elliptic cone', 'a parabolic cylinder'],
        answer: 0,
        explanation: 'The cooling tower has a circular waist and flares outward both up and down while staying connected — the one-sheeted hyperboloid, built from straight steel rulings lying on the surface.',
      },
      {
        q: 'The axis of the hyperboloid $\\frac{x^2}{9} - \\frac{y^2}{4} + \\frac{z^2}{4} = 1$ is:',
        options: ['the $y$-axis', 'the $x$-axis', 'the $z$-axis', 'it has no axis'],
        answer: 0,
        explanation: 'The minus sign sits on $y$: the surface opens around the $y$-axis. Its horizontal $y = k$ traces are ellipses $\\frac{x^2}{9} + \\frac{z^2}{4} = 1 + \\frac{k^2}{4}$, smallest at the waist $y = 0$.',
      },
      {
        q: 'In the saddle $z = x^2 - y^2$, the trace in the plane $x = 0$ is:',
        options: ['a downward-opening parabola $z = -y^2$', 'an upward-opening parabola $z = y^2$', 'a hyperbola', 'a pair of lines'],
        answer: 0,
        explanation: 'Setting $x = 0$ leaves $z = -y^2$: a parabola opening downward, while the $y = 0$ trace $z = x^2$ opens upward. Opposite concavities in perpendicular planes are the saddle\'s defining signature.',
      },
      {
        q: 'Completing the square shows that $x^2 + 2y^2 + z^2 - 2x + 8y - 2z = 1$ is:',
        options: ['an ellipsoid centered at $(1,\\ -2,\\ 1)$', 'an ellipsoid centered at the origin', 'a hyperboloid of one sheet', 'an elliptic paraboloid with vertex $(1, -2, 1)$'],
        answer: 0,
        explanation: 'The completed form is $(x-1)^2 + 2(y+2)^2 + (z-1)^2 = 11$: a positive-definite sum of shifted squares equal to a positive constant — an ellipsoid about $(1, -2, 1)$. (Mind the sign: $y + 2$ means the center\'s $y$-coordinate is $-2$.)',
      },
      {
        q: 'The surface $z^2 = \\frac{x^2}{4} + \\frac{y^2}{9}$ is:',
        options: ['an elliptic cone', 'a cylinder', 'a hyperboloid of two sheets', 'an ellipsoid'],
        answer: 0,
        explanation: 'A squared variable equals a sum of positive squares: at each height $z = k$ the trace is the ellipse $\\frac{x^2}{4k^2} + \\frac{y^2}{9k^2} = 1$, shrinking linearly to the vertex — an elliptic (double) cone about the $z$-axis.',
      },
      {
        q: 'Which surface is a ruled surface — containing straight lines lying wholly in it?',
        options: ['the hyperboloid of one sheet', 'the ellipsoid', 'the elliptic paraboloid', 'the sphere'],
        answer: 0,
        explanation: 'Both one-sheeted hyperboloids and cones carry families of straight rulings (the hyperboloid two families, doubly ruled); the ellipsoid and paraboloid are strictly curved — no line segment of either lies in its surface.',
      },
      // PYQ-pattern — identifying a two-sheeted hyperboloid (rephrased, values changed)
      {
        q: 'The surface $x^{2} + y^{2} - z^{2} = -1$ is:',
        options: ['An ellipsoid', 'A hyperboloid of two sheets', 'A cone', 'A hyperboloid of one sheet'],
        answer: 1,
        explanation: 'Step 1: Restate the task as reading the sign pattern of $\\frac{x^{2}}{1} + \\frac{y^{2}}{1} - \\frac{z^{2}}{1} = -1$. Step 2: Recall the key census that one minus sign with constant $-1$ separates into two pieces along the axis of the isolated variable. Step 3: Check horizontal traces as $x^{2} + y^{2} = z^{2} - 1$, empty for $|z| < 1$ and elliptical for $|z| > 1$. Step 4: Note the gap $|z| < 1$ splits the surface into upper and lower sheets about the $z$-axis. Step 5: The distractors fail since the cone needs constant $0$, the one-sheeted form needs constant $+1$, and the ellipsoid needs all plus signs. Step 6: Hence the surface is a hyperboloid of two sheets.'
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Classification, curvature and structure',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Why exactly six quadrics',
            body: 'The general quadric $Ax^2 + By^2 + Cz^2 + Dxy + Ezx + Fyz + Gx + Hy + Iz + J = 0$ looks like it has ten shapes\' worth of freedom, but almost all of it is disguise. Step one, eliminate the cross terms $Dxy, Ezx, Fyz$: they form the off-diagonal of a symmetric $3 \\times 3$ matrix, and the spectral theorem orthogonally diagonalizes it — geometrically, a rotation of axes kills every cross term. Step two, complete the square in whatever variables remain, translating the center to the origin. What survives is $\\epsilon_1 \\tilde{x}^2 + \\epsilon_2 \\tilde{y}^2 + \\epsilon_3 \\tilde{z}^2 = J$ with each $\\epsilon_i \\in \\{+1, -1, 0\\}$ — and counting the sign patterns (up to permuting variables and scaling) produces exactly the six nondegenerate shapes, plus cylinders and the degenerate empty set, points and lines. The classification is a theorem about diagonalizing quadratic forms, which is why the same six-family census reappears for conics, and again in relativity for the metric.',
          },
          {
            kind: 'theorem',
            heading: 'Rulings on the one-sheeted hyperboloid',
            body: 'The hyperboloid $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1$ contains two distinct families of straight lines, each line lying wholly in the surface, with exactly one line of each family through every surface point. The identity behind it: for any parameter $\\lambda$, the intersection of the two planes $$\\frac{x}{a} + \\frac{z}{c} = \\lambda\\left(1 + \\frac{y}{b}\\right), \\qquad \\lambda\\left(\\frac{x}{a} - \\frac{z}{c}\\right) = 1 - \\frac{y}{b}$$ lies on the hyperboloid, because multiplying the two left sides and the two right sides reproduces $\\frac{x^2}{a^2} - \\frac{z^2}{c^2} + \\frac{y^2}{b^2} = 1$ after cancellation. Varying $\\lambda$ sweeps one family; $\\lambda \\to -1/\\lambda$-style exchange gives the second.',
          },
          {
            kind: 'proof',
            heading: 'The paraboloid reflection property',
            body: 'Rays entering parallel to the axis of the paraboloid $z = \\frac{r^2}{4f}$ all reflect through the focus $(0, 0, f)$. Proof for the 2D profile $z = \\frac{x^2}{4f}$ (revolving preserves it): the tangent at $(x_0, z_0)$ has slope $\\frac{dz}{dx} = \\frac{x_0}{2f}$, so the tangent line makes angle $\\alpha = \\arctan\\frac{x_0}{2f}$ with the horizontal. The focal segment from $(x_0, z_0)$ to $(0, f)$ has slope $\\frac{z_0 - f}{x_0} = \\frac{x_0^2/4f - f}{x_0} = \\frac{x_0^2 - 4f^2}{4fx_0}$; elementary angle-chasing with $\\tan 2\\alpha = \\frac{2(x_0/2f)}{1 - x_0^2/4f^2} = \\frac{4fx_0}{4f^2 - x_0^2}$ shows the tangent bisects the angle between the incoming vertical ray and the focal segment (the two slopes are negatives), which is exactly the law of reflection. Hence every dish pointed at the sky concentrates the signal at one point — radio telescopes, satellite dishes and solar furnaces are this proof in steel.',
          },
          {
            kind: 'application',
            heading: 'The saddle in the second-derivative test',
            body: 'For $f(x, y)$ with $f_x = f_y = 0$ at a critical point, the quadratic Taylor remainder is governed by the Hessian $H = \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{xy} & f_{yy} \\end{pmatrix}$, and the test reads its eigenvalues: both positive — bowl up (minimum); both negative — bowl down; mixed signs — **saddle**, the hyperbolic paraboloid $z \\approx \\lambda_1 u^2 + \\lambda_2 v^2$ with $\\lambda_1 \\lambda_2 < 0$ in rotated coordinates $u, v$. The discriminant $f_{xx}f_{yy} - f_{xy}^2$ is just $\\det H$, the product of the eigenvalues. This section\'s surface is the local shape of every smooth function of two variables at a critical point: minima are elliptic paraboloids, saddles are hyperbolic paraboloids, and optimization lives or dies by the difference.',
          },
          {
            kind: 'application',
            heading: 'Architecture of straight lines',
            body: 'Because the one-sheeted hyperboloid is ruled, a curved tower can be built from entirely straight beams: rotate each ruling about the axis and the envelope of the family is the hyperboloid. This is literally how cooling towers, Kobe Port Tower, Shukhov towers (Vladimir Shukhov\'s 1896 gridshell patents — the same mathematics done a century before CAD) and many airport roofs are constructed: steel straight, surface curved. The saddle, for its part, approximates a **minimal surface** near its center — soap films bounded by a square frame pull themselves into exactly that shape, minimizing area, which is why saddle-shaped shells are extraordinarily rigid for their weight (the Pringle).',
          },
          {
            kind: 'remark',
            heading: 'The cone as the boundary case',
            body: 'Squeeze the waist of a one-sheeted hyperboloid or close the gap of a two-sheeted one and both limits are the cone — algebraically, sending the constant $J$ to $0$ in $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = J$ passes through the cone at $J = 0$ and switches sheets at $J < 0$. The cone is the degenerate quadric separating the families, and it is also the asymptote surface of both hyperboloids: each hyperboloid hugs the cone\'s surface at infinity. This "cone between the hyperboloids" picture generalizes to cones over any curve — and the asymptotic cone of a hyperboloid is the 3D shadow of how hyperbolas carry their asymptote lines.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Curvature, minimal surfaces, equivalence',
        blocks: [
          {
            kind: 'para',
            heading: 'Gauss curvature sorts the zoo',
            body: 'Gauss curvature $K$ — the product of the two principal curvatures — divides this section\'s surfaces topologically. The ellipsoid and elliptic paraboloid have $K > 0$ everywhere (dome-like: both curvatures agree); the saddle has $K < 0$ everywhere (curvatures oppose); the cylinder and cone have $K = 0$ (flat in one direction — they can be unrolled to a plane without stretching, which is why cones and cylinders develop for sheet metal and maps). Gauss\'s **Theorema Egregium** says $K$ is intrinsic — measurable within the surface, unchanged by bending without stretching — so the sign of $K$ is a genuine birthmark, not a viewpoint artifact.',
          },
          {
            kind: 'application',
            heading: 'From the saddle to minimal surfaces',
            body: 'The mean curvature $H$ averages the principal curvatures; surfaces with $H = 0$ everywhere are **minimal surfaces** — locally area-minimizing, and the physical shape of every soap film. The saddle $z = y^2 - x^2$ has $H = 0$ only at the origin, but a genuine minimal surface with boundary a wire square is the closely related saddle-shaped **Scherk-like** graph. The classical minimal surfaces (catenoid, helicoid; Costa\'s 1982 embedded example with its three-punctured-torus topology) all wear the local shape of this section\'s hyperbolic paraboloid, and Plateau\'s problem — prove that every closed wire bounds some minimal surface — was solved (Douglas and Radó, 1930s) by methods that grew into geometric measure theory.',
          },
          {
            kind: 'open',
            heading: 'How many shapes, really',
            body: 'Euclidean classification says: six quadrics. But up to **projective** equivalence, all nondegenerate conics are one curve — the projective plane has no parallel lines, no distances, no circles vs hyperbolas; the ellipse, parabola and hyperbola differ only in how they sit relative to the line at infinity. The classification questions then sharpen: within affine geometry, the signature $(p, q)$ of the quadratic form is the complete invariant (Sylvester\'s law of inertia); within projective geometry even that collapses. Which classification is "right" depends on what the surface is for — and in the mathematics of general relativity, the level surfaces of the Minkowski metric\'s quadratic form are exactly hyperboloids: the two-sheeted hyperboloid is the shape of constant proper time from an event, and its asymptotic cone is the light cone. Whether the quadrics\' appearance at the foundations of spacetime is bookkeeping or structure remains a matter of interpretation, not theorem.',
          },
        ],
      },
    ],
  },
]
