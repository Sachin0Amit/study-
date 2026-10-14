import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 36
// Diffraction — sections 36-1 … 36-7 (ids hall-ch36-s1 … hall-ch36-s7)
// Core: single-slit minima a sinθ = mλ, the sinc² intensity law from phasors,
// the circular-aperture Rayleigh criterion, double slit = interference ×
// diffraction with missing orders, gratings d sinθ = mλ, dispersion D = m/d cosθ
// and resolving power R = Nm, and Bragg reflection from crystal planes.
// ============================================================================

export const hallCh36Content: SectionContent[] = [
  // ------------------------------------------------------------------ 36-1
  {
    sectionId: 'hall-ch36-s1',
    readingTime: 6,
    intro: 'Light does not simply march past the edge of an opening in straight lines: it spreads, and the spreading is organized into bright and dark bands — a diffraction pattern. A single narrow slit of width $a$ throws onto a distant screen a broad central bright band flanked by far weaker side bands. This section locates those dark fringes exactly, with a one-line condition that ranks among the most useful in optics, and shows why the central band is twice as wide as every other.',
    objectives: [
      'Distinguish Fraunhofer from Fresnel diffraction and explain why a slit of width comparable to the wavelength spreads light',
      'Use $a \\sin\\theta = m\\lambda$ to locate the dark fringes of a single slit',
      'Compute the angular width of the central maximum and its linear width on a distant screen',
    ],
    concepts: [
      {
        term: 'Diffraction',
        kind: 'definition',
        statement: '**Diffraction is the spreading of a wave into the region of geometrical shadow when it passes an edge or an aperture**, appreciable when the opening is comparable in size to the wavelength $\\lambda$. In **Fraunhofer diffraction** the incident and detected waves are effectively plane (screen far away, or a lens used); in **Fresnel diffraction** the wavefront curvature matters.',
        detail: 'This chapter is Fraunhofer throughout: rays from every point of the slit to a given screen point are treated as parallel, which is why a single angle $\\theta$ labels the whole pattern.',
      },
      {
        term: 'Locating the minima',
        kind: 'law',
        statement: "**Dark fringes of a single slit lie where the path difference between rays from the slit's two edges is a whole number of wavelengths:** $$a \\sin\\theta = m\\lambda, \\qquad m = 1, 2, 3, \\ldots$$ When it holds, every wavelet in the top half of the slit has a partner in the bottom half arriving exactly out of phase.",
        detail: 'Note what the formula does not do: it does not locate the maxima. Only the central maximum sits exactly at $\\theta = 0$; the side maxima come slightly displaced from the midpoints between minima (next section).',
      },
      {
        term: 'The central maximum',
        kind: 'insight',
        statement: '**The central maximum is twice as wide as any side maximum.** It runs from the $m = 1$ minimum on one side to the $m = 1$ minimum on the other; for small angles its full angular width is $2\\lambda/a$ — wider for narrower slits and longer wavelengths.',
      },
      {
        term: "Single-Slit Diffraction: solution protocol",
        kind: "method",
        statement: "**Solve Single-Slit Diffraction problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is diffraction limits and grating dispersion; the working equation is $a\\sin\\theta = m\\lambda$, $\\theta_R = 1.22\\lambda/d$, $d\\sin\\theta = m\\lambda$ (grating), $2d\\sin\\theta = m\\lambda$ (Bragg); every substitution must carry its units so the final unit (radians and lines/mm) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\theta\\sim 10^{-3}\\ \\text{rad}$ for $\\lambda/a$; $R = mN\\sim 10^4$; Fraunhofer far field; uniform grating spacing.",
      },
      {
        term: "Single-Slit Diffraction: scales and validity",
        kind: "insight",
        statement: "**Single-Slit Diffraction lives at $\\theta\\sim 10^{-3}\\ \\text{rad}$ for $\\lambda/a$; $R = mN\\sim 10^4$ and the textbook model holds while Fraunhofer far field; uniform grating spacing.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Single-Slit Diffraction calculation gives seconds when radians and lines/mm demands meters, or a value orders of magnitude beyond $\\theta\\sim 10^{-3}\\ \\text{rad}$ for $\\lambda/a$; $R = mN\\sim 10^4$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Width of the central band',
        problem: 'Light of wavelength 610 nm falls on a slit of width 0.020 mm. A screen stands 2.0 m away. Where are the first minima, and how wide is the central maximum on the screen?',
        steps: [
          { label: 'First minimum', text: '$\\sin\\theta_1 = \\lambda/a = (610\\times10^{-9})/(2.0\\times10^{-5}) = 0.0305$, so $\\theta_1 = 1.75^\\circ$ — small enough that $\\sin\\theta \\approx \\tan\\theta$ is excellent.' },
          { label: 'Second minimum', text: '$\\sin\\theta_2 = 2\\lambda/a = 0.061$, so $\\theta_2 = 3.50^\\circ$; the first side band spans only $1.75^\\circ$, half the central width.' },
          { label: 'On the screen', text: 'The center-to-minimum distance is $y_1 = D\\tan\\theta_1 = 2.0 \\times 0.0305 = 61$ mm.' },
          { label: 'Full width', text: 'The central maximum stretches $2y_1 = 12.2$ cm across the screen — some 600 slit widths. Diffraction is not a small correction at this slit size.' },
        ],
        result: 'Minima at $\\pm 1.75^\\circ$, $\\pm 3.50^\\circ$, …; the central band is 12.2 cm wide on the 2.0 m screen.',
      },
      {
        title: "Single-Slit Diffraction: single-slit minimum check",
        problem: "A slit of width $a = 0.15\\ \\text{mm}$ is lit by $550\\ \\text{nm}$ light. Find the first minimum $a\\sin\\theta = \\lambda$.",
        steps: [
          { label: "Ratio", text: "$\\sin\\theta = 5.50\\times 10^{-7}/(0.15\\times 10^{-3}) = 3.67\\times 10^{-3}$." },
          { label: "Small angle", text: "$\\theta \\approx 0.21^\\circ$ ($3.67\\ \\text{mrad}$)." },
        ],
        result: "$\\theta_1 \\approx 0.21^\\circ$.",
      },
    ],
    keyTakeaways: [
      '$a \\sin\\theta = m\\lambda$ locates the minima; only the central maximum lies exactly at $\\theta = 0$.',
      'The pattern scales with $\\lambda/a$: narrower slit or longer wavelength means wider spread.',
      'The central maximum is twice the angular width of every side maximum and holds nearly all the light.',
    ],
    quiz: [
      {
        q: 'A single slit of width $a$ is illuminated with wavelength $\\lambda$. The first diffraction minimum occurs at angle $\\theta$ satisfying:',
        options: [`$a \\sin\\theta = \\lambda$`, `$a \\sin\\theta = \\lambda/2$`, `$a \\cos\\theta = \\lambda$`, `$a \\sin\\theta = 2\\lambda$`],
        answer: 0,
        explanation: 'The edge-to-edge path difference is $a\\sin\\theta$; the slit self-cancels when it equals exactly one wavelength.',
      },
      {
        q: 'The slit width is halved while the wavelength stays fixed. The angular width of the central maximum approximately:',
        options: ['halves', 'stays the same', 'doubles', 'quadruples'],
        answer: 2,
        explanation: 'Width $\\approx 2\\lambda/a$ in the small-angle regime, so halving $a$ doubles the spread.',
      },
      {
        q: 'Red light (700 nm) and blue light (450 nm) pass through the same slit. The wider central maximum belongs to:',
        options: ['red, because $\\lambda/a$ is larger', 'blue, because shorter wavelengths spread more', 'neither — width depends only on $a$', 'they are equal'],
        answer: 0,
        explanation: 'Everything about the angular pattern is a function of the ratio $\\lambda/a$; the longer wavelength diffracts more.',
      },
    ],
  },
  // ------------------------------------------------------------------ 36-2
  {
    sectionId: 'hall-ch36-s2',
    readingTime: 7,
    intro: 'Knowing where the dark fringes sit is half a theory; a complete one must say how bright the pattern is at every angle. Divide the slit into many narrow strips, represent each strip\'s wavelet by a phasor, and watch the phasor chain curl into an arc as the angle grows. The chord of that arc is the resultant amplitude, and one clean limit produces the sinc² law — the workhorse formula of this chapter and of every Fourier analysis to come.',
    objectives: [
      'Build the phasor arc for a single slit and derive $I(\\theta) = I_{\\max}(\\sin\\alpha/\\alpha)^2$ with $\\alpha = (\\pi a/\\lambda)\\sin\\theta$',
      'Locate the secondary maxima and state their intensities relative to the central peak',
      'Explain why the central maximum is twice the width of the side maxima',
    ],
    concepts: [
      {
        term: 'The phasor arc',
        kind: 'method',
        statement: '**Divide the slit into many equal strips and add their wavelets as phasors of equal length, each rotated a fixed step from its neighbor.** At angle $\\theta$ the phasors curl into an arc whose full curvature is the edge-to-edge phase difference; defining half of it as $$\\alpha = \\frac{\\pi a}{\\lambda}\\sin\\theta,$$ the resultant amplitude is the chord of an arc of total angle $2\\alpha$.',
      },
      {
        term: 'Intensity law',
        kind: 'law',
        statement: '**The single-slit diffraction pattern has intensity** $$I(\\theta) = I_{\\max}\\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\qquad \\alpha = \\frac{\\pi a}{\\lambda}\\sin\\theta.$$ Zeros at $\\alpha = m\\pi$ reproduce $a\\sin\\theta = m\\lambda$; at $\\theta = 0$ the chord straightens and $\\sin\\alpha/\\alpha \\to 1$.',
        detail: 'The arc geometry gives the chord as $2R\\sin\\alpha$ with arc length $2R\\alpha$ — their ratio is exactly $\\sin\\alpha/\\alpha$, so this is the whole derivation.',
      },
      {
        term: 'Secondary maxima',
        kind: 'insight',
        statement: '**Side maxima occur where the phasor arc wraps one extra half-turn before closing: where $\\tan\\alpha = \\alpha$.** They fall at $\\alpha = 1.43\\pi, 2.46\\pi, 3.47\\pi, \\ldots$ with intensities only **4.7%, 1.6% and 0.8%** of the central peak — nearly all the diffracted light stays in the central band.',
        detail: 'Note they sit pulled toward the adjacent minimum, not at the midpoints $1.5\\pi, 2.5\\pi$: the tail of the arc keeps a residue of phase mismatch.',
      },
      {
        term: 'Width bookkeeping',
        kind: 'insight',
        statement: '**Each side maximum spans one unit of $a\\sin\\theta/\\lambda$; the central one spans two.** Successive minima on the same side are separated by $\\Delta(a\\sin\\theta) = \\lambda$, while the central band covers from $-\\lambda$ to $+\\lambda$ — which is also why it collects the lion\'s share of the energy.',
      },
      {
        term: "Intensity in Single-Slit Diffraction: solution protocol",
        kind: "method",
        statement: "**Solve Intensity in Single-Slit Diffraction problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is diffraction limits and grating dispersion; the working equation is $a\\sin\\theta = m\\lambda$, $\\theta_R = 1.22\\lambda/d$, $d\\sin\\theta = m\\lambda$ (grating), $2d\\sin\\theta = m\\lambda$ (Bragg); every substitution must carry its units so the final unit (radians and lines/mm) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\theta\\sim 10^{-3}\\ \\text{rad}$ for $\\lambda/a$; $R = mN\\sim 10^4$; Fraunhofer far field; uniform grating spacing.",
      },
    ],
    figures: [
      {
        caption: 'The single-slit intensity law $I(\\theta) = I_{\\max}(\\sin\\alpha/\\alpha)^2$ plotted against $a\\sin\\theta/\\lambda$. Dashed verticals mark the minima $a\\sin\\theta = m\\lambda$; the weak secondary maxima, near $\\tan\\alpha = \\alpha$, carry only 4.7%, 1.6% and 0.8% of the central intensity.',
        svg: `<svg viewBox="0 0 720 330" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diffraction intensity curve of a single slit showing a broad central maximum and weak secondary maxima between zero-intensity minima"><defs><marker id="slA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="380" y1="30" x2="380" y2="262" stroke="currentColor" stroke-width="1.6" opacity="0.7"/><line x1="58" y1="260" x2="704" y2="260" stroke="currentColor" stroke-width="1.6" marker-end="url(#slA)"/><polyline points="60.0,258.4 61.8,258.4 63.6,258.3 65.3,258.2 67.1,258.2 68.9,258.2 70.7,258.2 72.4,258.2 74.2,258.2 76.0,258.2 77.8,258.3 79.6,258.3 81.3,258.4 83.1,258.5 84.9,258.6 86.7,258.7 88.4,258.8 90.2,258.9 92.0,259.0 93.8,259.1 95.6,259.2 97.3,259.4 99.1,259.5 100.9,259.6 102.7,259.7 104.4,259.8 106.2,259.9 108.0,259.9 109.8,260.0 111.6,260.0 113.3,260.0 115.1,260.0 116.9,260.0 118.7,259.9 120.4,259.8 122.2,259.7 124.0,259.6 125.8,259.5 127.6,259.4 129.3,259.2 131.1,259.0 132.9,258.8 134.7,258.6 136.4,258.4 138.2,258.2 140.0,258.0 141.8,257.8 143.6,257.6 145.3,257.4 147.1,257.2 148.9,257.0 150.7,256.9 152.4,256.7 154.2,256.6 156.0,256.5 157.8,256.4 159.6,256.4 161.3,256.4 163.1,256.4 164.9,256.4 166.7,256.5 168.4,256.6 170.2,256.7 172.0,256.9 173.8,257.0 175.6,257.2 177.3,257.5 179.1,257.7 180.9,257.9 182.7,258.2 184.4,258.4 186.2,258.7 188.0,258.9 189.8,259.1 191.6,259.3 193.3,259.5 195.1,259.7 196.9,259.8 198.7,259.9 200.4,260.0 202.2,260.0 204.0,260.0 205.8,259.9 207.6,259.8 209.3,259.6 211.1,259.4 212.9,259.1 214.7,258.8 216.4,258.5 218.2,258.1 220.0,257.6 221.8,257.1 223.6,256.6 225.3,256.1 227.1,255.5 228.9,255.0 230.7,254.4 232.4,253.8 234.2,253.2 236.0,252.7 237.8,252.1 239.6,251.6 241.3,251.2 243.1,250.7 244.9,250.4 246.7,250.1 248.4,249.9 250.2,249.7 252.0,249.6 253.8,249.6 255.6,249.7 257.3,249.9 259.1,250.1 260.9,250.5 262.7,250.9 264.4,251.4 266.2,251.9 268.0,252.5 269.8,253.2 271.6,253.9 273.3,254.7 275.1,255.4 276.9,256.2 278.7,256.9 280.4,257.6 282.2,258.2 284.0,258.8 285.8,259.3 287.6,259.7 289.3,259.9 291.1,260.0 292.9,259.9 294.7,259.6 296.4,259.1 298.2,258.4 300.0,257.4 301.8,256.1 303.6,254.5 305.3,252.7 307.1,250.5 308.9,248.0 310.7,245.1 312.4,241.9 314.2,238.4 316.0,234.5 317.8,230.2 319.6,225.6 321.3,220.7 323.1,215.4 324.9,209.9 326.7,204.0 328.4,197.8 330.2,191.4 332.0,184.8 333.8,177.9 335.6,170.8 337.3,163.6 339.1,156.3 340.9,148.9 342.7,141.5 344.4,134.0 346.2,126.6 348.0,119.2 349.8,111.9 351.6,104.8 353.3,97.9 355.1,91.2 356.9,84.8 358.7,78.7 360.4,72.9 362.2,67.5 364.0,62.5 365.8,57.9 367.6,53.8 369.3,50.2 371.1,47.1 372.9,44.6 374.7,42.6 376.4,41.2 378.2,40.3 380.0,40.0 381.8,40.3 383.6,41.2 385.3,42.6 387.1,44.6 388.9,47.1 390.7,50.2 392.4,53.8 394.2,57.9 396.0,62.5 397.8,67.5 399.6,72.9 401.3,78.7 403.1,84.8 404.9,91.2 406.7,97.9 408.4,104.8 410.2,111.9 412.0,119.2 413.8,126.6 415.6,134.0 417.3,141.5 419.1,148.9 420.9,156.3 422.7,163.6 424.4,170.8 426.2,177.9 428.0,184.8 429.8,191.4 431.6,197.8 433.3,204.0 435.1,209.9 436.9,215.4 438.7,220.7 440.4,225.6 442.2,230.2 444.0,234.5 445.8,238.4 447.6,241.9 449.3,245.1 451.1,248.0 452.9,250.5 454.7,252.7 456.4,254.5 458.2,256.1 460.0,257.4 461.8,258.4 463.6,259.1 465.3,259.6 467.1,259.9 468.9,260.0 470.7,259.9 472.4,259.7 474.2,259.3 476.0,258.8 477.8,258.2 479.6,257.6 481.3,256.9 483.1,256.2 484.9,255.4 486.7,254.7 488.4,253.9 490.2,253.2 492.0,252.5 493.8,251.9 495.6,251.4 497.3,250.9 499.1,250.5 500.9,250.1 502.7,249.9 504.4,249.7 506.2,249.6 508.0,249.6 509.8,249.7 511.6,249.9 513.3,250.1 515.1,250.4 516.9,250.7 518.7,251.2 520.4,251.6 522.2,252.1 524.0,252.7 525.8,253.2 527.6,253.8 529.3,254.4 531.1,255.0 532.9,255.5 534.7,256.1 536.4,256.6 538.2,257.1 540.0,257.6 541.8,258.1 543.6,258.5 545.3,258.8 547.1,259.1 548.9,259.4 550.7,259.6 552.4,259.8 554.2,259.9 556.0,260.0 557.8,260.0 559.6,260.0 561.3,259.9 563.1,259.8 564.9,259.7 566.7,259.5 568.4,259.3 570.2,259.1 572.0,258.9 573.8,258.7 575.6,258.4 577.3,258.2 579.1,257.9 580.9,257.7 582.7,257.5 584.4,257.2 586.2,257.0 588.0,256.9 589.8,256.7 591.6,256.6 593.3,256.5 595.1,256.4 596.9,256.4 598.7,256.4 600.4,256.4 602.2,256.4 604.0,256.5 605.8,256.6 607.6,256.7 609.3,256.9 611.1,257.0 612.9,257.2 614.7,257.4 616.4,257.6 618.2,257.8 620.0,258.0 621.8,258.2 623.6,258.4 625.3,258.6 627.1,258.8 628.9,259.0 630.7,259.2 632.4,259.4 634.2,259.5 636.0,259.6 637.8,259.7 639.6,259.8 641.3,259.9 643.1,260.0 644.9,260.0 646.7,260.0 648.4,260.0 650.2,260.0 652.0,259.9 653.8,259.9 655.6,259.8 657.3,259.7 659.1,259.6 660.9,259.5 662.7,259.4 664.4,259.2 666.2,259.1 668.0,259.0 669.8,258.9 671.6,258.8 673.3,258.7 675.1,258.6 676.9,258.5 678.7,258.4 680.4,258.3 682.2,258.3 684.0,258.2 685.8,258.2 687.6,258.2 689.3,258.2 691.1,258.2 692.9,258.2 694.7,258.2 696.4,258.3 698.2,258.4 700.0,258.4" fill="none" stroke="currentColor" stroke-width="2.6"/><line x1="291.1" y1="262" x2="291.1" y2="238" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.7"/><line x1="202.2" y1="262" x2="202.2" y2="238" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.7"/><line x1="113.3" y1="262" x2="113.3" y2="238" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.7"/><line x1="468.9" y1="262" x2="468.9" y2="238" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.7"/><line x1="557.8" y1="262" x2="557.8" y2="238" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.7"/><line x1="646.7" y1="262" x2="646.7" y2="238" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.7"/><line x1="113.3" y1="256" x2="113.3" y2="264" stroke="currentColor" stroke-width="1.6"/><line x1="202.2" y1="256" x2="202.2" y2="264" stroke="currentColor" stroke-width="1.6"/><line x1="291.1" y1="256" x2="291.1" y2="264" stroke="currentColor" stroke-width="1.6"/><line x1="380" y1="256" x2="380" y2="264" stroke="currentColor" stroke-width="1.6"/><line x1="468.9" y1="256" x2="468.9" y2="264" stroke="currentColor" stroke-width="1.6"/><line x1="557.8" y1="256" x2="557.8" y2="264" stroke="currentColor" stroke-width="1.6"/><line x1="646.7" y1="256" x2="646.7" y2="264" stroke="currentColor" stroke-width="1.6"/><text x="113.3" y="280" text-anchor="middle" font-size="14" fill="currentColor">−3</text><text x="202.2" y="280" text-anchor="middle" font-size="14" fill="currentColor">−2</text><text x="291.1" y="280" text-anchor="middle" font-size="14" fill="currentColor">−1</text><text x="380" y="280" text-anchor="middle" font-size="14" fill="currentColor">0</text><text x="468.9" y="280" text-anchor="middle" font-size="14" fill="currentColor">1</text><text x="557.8" y="280" text-anchor="middle" font-size="14" fill="currentColor">2</text><text x="646.7" y="280" text-anchor="middle" font-size="14" fill="currentColor">3</text><text x="660" y="302" text-anchor="end" font-size="15" fill="currentColor" opacity="0.9">a sinθ / λ</text><text x="380" y="24" text-anchor="middle" font-size="15" fill="currentColor">I / I<tspan dy="4" font-size="11">max</tspan></text><text x="466" y="222" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">m = 1</text><text x="555" y="222" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">m = 2</text><text x="644" y="222" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">m = 3</text><text x="294" y="222" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">m = −1</text><circle cx="380" cy="40" r="4" fill="currentColor"/><text x="388" y="52" font-size="14" fill="currentColor">central maximum: I = I<tspan dy="4" font-size="11">max</tspan></text><text x="507" y="243" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.85">4.7%</text><text x="599" y="250" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.85">1.7%</text><text x="676" y="253" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.85">0.8%</text><text x="98" y="150" font-size="14" fill="currentColor" opacity="0.85">secondary</text><text x="98" y="168" font-size="14" fill="currentColor" opacity="0.85">maxima at</text><text x="98" y="186" font-size="14" fill="currentColor" opacity="0.85">tanα = α</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Half-intensity angle',
        problem: 'A slit is 4.0 wavelengths wide ($a = 4.0\\lambda$). At what angle does the intensity fall to half its central value?',
        steps: [
          { label: 'Condition', text: 'Half the central intensity means $(\\sin\\alpha/\\alpha)^2 = 0.5$, i.e. $\\sin\\alpha/\\alpha = 0.707$.' },
          { label: 'Solve numerically', text: 'Trial and error gives $\\alpha = 1.392$ rad: $\\sin 1.392 = 0.9842$ and $0.9842/1.392 = 0.707$ as required.' },
          { label: 'Convert to angle', text: '$\\sin\\theta = (\\alpha/\\pi)(\\lambda/a) = (1.392/\\pi)/4.0 = 0.111$, so $\\theta = 6.4^\\circ$.' },
          { label: 'Perspective', text: 'The first minimum is at $\\sin\\theta = \\lambda/a = 0.25$ ($\\theta = 14.5^\\circ$): the peak sags to half height well before the first dark fringe, as the figure shows.' },
        ],
        result: '$\\theta \\approx 6.4^\\circ$, i.e. $\\sin\\theta \\approx 0.111$ — the sinc² peak is sharply peaked, sagging to half height at about 44% of the way to the first zero.',
      },
      {
        title: "Intensity in Single-Slit Diffraction: single-slit minimum check",
        problem: "A slit of width $a = 0.2\\ \\text{mm}$ is lit by $550\\ \\text{nm}$ light. Find the first minimum $a\\sin\\theta = \\lambda$.",
        steps: [
          { label: "Ratio", text: "$\\sin\\theta = 5.50\\times 10^{-7}/(0.2\\times 10^{-3}) = 2.75\\times 10^{-3}$." },
          { label: "Small angle", text: "$\\theta \\approx 0.158^\\circ$ ($2.75\\ \\text{mrad}$)." },
        ],
        result: "$\\theta_1 \\approx 0.158^\\circ$.",
      },
    ],
    keyTakeaways: [
      'Phasors of the slit\'s wavelets form an arc; the chord gives $I = I_{\\max}(\\sin\\alpha/\\alpha)^2$ with $\\alpha = (\\pi a/\\lambda)\\sin\\theta$.',
      'Secondary maxima at $\\tan\\alpha = \\alpha$ carry 4.7%, 1.6%, 0.8% of the peak — the central band dominates.',
      'Minima at $\\alpha = m\\pi$ are exactly the $a\\sin\\theta = m\\lambda$ condition of the previous section.',
    ],
    quiz: [
      {
        q: 'In the single-slit intensity formula, the phase variable $\\alpha$ equals:',
        options: [`$\\pi a \\sin\\theta/\\lambda$`, `$\\pi a \\sin\\theta/(2\\lambda)$`, `$2\\pi a \\sin\\theta/\\lambda$`, `$a\\sin\\theta/\\lambda$`],
        answer: 0,
        explanation: '$\\alpha$ is half the edge-to-edge phase difference across the slit.',
      },
      {
        q: 'The secondary maxima of a single-slit pattern are located at:',
        options: ['exactly halfway between minima', 'slightly toward the neighboring minimum from the midpoint, where $\\tan\\alpha = \\alpha$', 'exactly at $\\alpha = m\\pi$', 'at $\\alpha = 0$'],
        answer: 1,
        explanation: 'Each side maximum sits just short of the midpoint, where the phasor arc adds one extra half-turn — the condition $\\tan\\alpha = \\alpha$.',
      },
      {
        q: 'Compared with a side maximum, the central maximum is:',
        options: ['twice as wide', 'the same width but brighter', 'half as wide', 'of unbounded width'],
        answer: 0,
        explanation: 'Minima at $a\\sin\\theta = \\pm\\lambda$ bracket the central band: it spans $2\\lambda/a$, twice any side band\'s $\\lambda/a$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 36-3
  {
    sectionId: 'hall-ch36-s3',
    readingTime: 6,
    intro: 'Round the aperture and the pattern becomes a bull\'s-eye: a bright Airy disk ringed with dark circles. Because every real instrument forms images through circular holes — pupils, telescope mirrors, microscope objectives — this is the pattern that sets the ultimate limit on sharpness. Rayleigh\'s criterion turns it into a single number, and that number governs everything from how far away you can distinguish car headlights to how large astronomers must build their mirrors.',
    objectives: [
      'State the angular radius of the Airy disk, $\\sin\\theta = 1.22\\lambda/d$, for a circular aperture of diameter $d$',
      'Apply Rayleigh\'s criterion to decide when two point sources are just resolved',
      'Evaluate how aperture size and wavelength limit telescopes, eyes and microscopes',
    ],
    concepts: [
      {
        term: 'Airy disk',
        kind: 'definition',
        statement: '**A circular aperture of diameter $d$ diffracts plane waves into a central bright disk — the Airy disk — surrounded by dark and bright rings.** The first dark ring lies at $$\\sin\\theta = 1.22\\,\\frac{\\lambda}{d}.$$ The 1.22 is the first zero of a Bessel function: the price of integrating the sinc² pattern over a disk.',
        detail: 'About 84% of the transmitted light lands inside the first dark ring — the Airy disk is where images actually live.',
      },
      {
        term: "Rayleigh's criterion",
        kind: 'law',
        statement: "**Two point sources are just resolved when the central maximum of one's image falls on the first minimum of the other's** — for a circular aperture, when their angular separation is $$\\theta_R = 1.22\\,\\frac{\\lambda}{d}.$$ Smaller $\\theta_R$ means finer resolution: enlarge the aperture or shorten the wavelength.",
      },
      {
        term: 'Resolution is a ratio',
        kind: 'insight',
        statement: '**What limits every optical instrument is the ratio of wavelength to aperture, $\\lambda/d$.** The Hubble mirror (2.4 m) gives $\\theta_R \\approx 2.8\\times10^{-7}$ rad at 550 nm — about 0.06 arcsecond; the 10.4 m Gran Telescopio Canarias halves that. Electron microscopes win outright: a 5 pm de Broglie wavelength undercuts visible light by a factor of $10^5$.',
      },
      {
        term: 'Criterion as convention',
        kind: 'insight',
        statement: "**Rayleigh's line is a convention for incoherent sources whose light does not interfere.** Slightly closer sources are still partly distinguishable, and coherent-illumination schemes (and modern computational super-resolution) can beat it — but it remains the honest zeroth-order standard for starlight, and the number printed on telescope spec sheets.",
      },
      {
        term: "Diffraction by a Circular Aperture: solution protocol",
        kind: "method",
        statement: "**Solve Diffraction by a Circular Aperture problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is diffraction limits and grating dispersion; the working equation is $a\\sin\\theta = m\\lambda$, $\\theta_R = 1.22\\lambda/d$, $d\\sin\\theta = m\\lambda$ (grating), $2d\\sin\\theta = m\\lambda$ (Bragg); every substitution must carry its units so the final unit (radians and lines/mm) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\theta\\sim 10^{-3}\\ \\text{rad}$ for $\\lambda/a$; $R = mN\\sim 10^4$; Fraunhofer far field; uniform grating spacing.",
      },
    ],
    examples: [
      {
        title: 'Merging headlights',
        problem: 'At night, two headlights 1.4 m apart shine toward your dark-adapted pupil of diameter 5.0 mm at wavelength about 550 nm. Beyond what distance do they merge into a single blob?',
        steps: [
          { label: 'Rayleigh angle', text: '$\\theta_R = 1.22\\lambda/d = 1.22(550\\times10^{-9})/(5.0\\times10^{-3}) = 1.3\\times10^{-4}$ rad.' },
          { label: 'Resolve condition', text: 'Sources of transverse separation $s$ at range $R$ subtend $\\theta = s/R$; resolution requires $s/R \\geq \\theta_R$.' },
          { label: 'Solve for range', text: '$R \\leq s/\\theta_R = 1.4/(1.34\\times10^{-4}) = 1.0\\times10^{4}$ m.' },
          { label: 'Reality check', text: 'Glare, aberrations and retinal cell packing usually defeat the eye long before 10 km — this is the physics limit, not the driving test.' },
        ],
        result: 'About 10 km — beyond that, even a perfect eye fuses the two headlights into one.',
      },
      {
        title: "Diffraction by a Circular Aperture: single-slit minimum check",
        problem: "A slit of width $a = 0.1\\ \\text{mm}$ is lit by $550\\ \\text{nm}$ light. Find the first minimum $a\\sin\\theta = \\lambda$.",
        steps: [
          { label: "Ratio", text: "$\\sin\\theta = 5.50\\times 10^{-7}/(0.1\\times 10^{-3}) = 5.50\\times 10^{-3}$." },
          { label: "Small angle", text: "$\\theta \\approx 0.315^\\circ$ ($5.5\\ \\text{mrad}$)." },
        ],
        result: "$\\theta_1 \\approx 0.315^\\circ$.",
      },
    ],
    keyTakeaways: [
      'A circular aperture diffracts light into an Airy disk whose first dark ring lies at $\\sin\\theta = 1.22\\lambda/d$.',
      "Rayleigh: two sources are just resolved when one's central peak meets the other's first minimum — $\\theta_R = 1.22\\lambda/d$.",
      'Resolution improves with larger apertures and shorter wavelengths; it depends on $\\lambda/d$ and nothing else.',
    ],
    quiz: [
      {
        q: 'For a circular aperture, the first dark ring of the diffraction pattern lies at:',
        options: [`$\\sin\\theta = \\lambda/d$`, `$\\sin\\theta = 1.22\\lambda/d$`, `$\\sin\\theta = 2\\lambda/d$`, `$\\theta = 1.22d/\\lambda$`],
        answer: 1,
        explanation: 'The Bessel-function zero of the circular integral gives 1.22 instead of the single slit\'s 1.',
      },
      {
        q: 'To resolve a tighter double star, an astronomer should:',
        options: ['observe at a shorter wavelength', 'use a larger mirror', 'both of these reduce $\\theta_R$', 'observe at a longer wavelength for smoother fringes'],
        answer: 2,
        explanation: '$\\theta_R = 1.22\\lambda/d$ shrinks with shorter $\\lambda$ and larger $d$; altitude helps atmospheric seeing but not diffraction.',
      },
      {
        q: 'The 1.22 in the circular-aperture formula originates in:',
        options: ['the two-dimensional diffraction integral over the aperture', 'an empirical fudge factor for lens flaws', 'the ratio of circumference to diameter', "Bragg's law"],
        answer: 0,
        explanation: 'Integrating wavelets over a circular opening produces a Bessel function; its first zero sits at 1.22.',
      },
    ],
  },
  // ------------------------------------------------------------------ 36-4
  {
    sectionId: 'hall-ch36-s4',
    readingTime: 6,
    intro: 'Chapter 35\'s double slit made fringes of equal brightness — but only because the slits were pretended infinitely narrow. Real slits have width, and each imposes its own single-slit diffraction pattern on the two-slit interference. What lands on the screen is a product: cosine-squared fringes from the pair, riding under the sinc² envelope of each slit — and where the envelope hits zero, whole interference fringes are erased.',
    objectives: [
      'Combine interference and diffraction: $I(\\theta) = I_m\\cos^2\\beta\\,(\\sin\\alpha/\\alpha)^2$ with $\\beta = \\pi d\\sin\\theta/\\lambda$ and $\\alpha = \\pi a\\sin\\theta/\\lambda$',
      'Predict which interference orders go missing for a given ratio $d/a$',
      'Explain why equal-brightness fringes require very narrow slits',
    ],
    concepts: [
      {
        term: 'Two patterns multiplied',
        kind: 'insight',
        statement: '**Each slit diffracts; the pair interferes.** The screen shows two-slit fringes whose brightness is modulated by the single-slit pattern of each slit: interference supplies the $\\cos^2\\beta$ factor, diffraction the $(\\sin\\alpha/\\alpha)^2$ envelope — with $d$ the slit separation and $a$ the slit width.',
      },
      {
        term: 'Combined intensity',
        kind: 'law',
        statement: "**The double-slit intensity with finite slit widths is** $$I(\\theta) = I_m \\cos^2\\beta\\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\qquad \\beta = \\frac{\\pi d \\sin\\theta}{\\lambda}, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}.$$ Bright fringes still require $d\\sin\\theta = m\\lambda$; envelope zeros still require $a\\sin\\theta = m'\\lambda$.",
      },
      {
        term: 'Missing orders',
        kind: 'definition',
        statement: '**When an interference maximum lands exactly on a diffraction minimum, that fringe vanishes — a missing order.** Dividing the two conditions, $m = m\'(d/a)$: whenever $d/a$ is an integer $k$, the orders $m = k, 2k, 3k, \\ldots$ are missing from the pattern.',
        detail: 'Missing orders are a built-in ruler: counting fringes between the gaps of the central envelope measures $d/a$ directly.',
      },
      {
        term: 'Narrow-slit limit',
        kind: 'insight',
        statement: '**As $a \\to 0$ the envelope flattens ($\\alpha \\to 0$ everywhere) and the fringes shine equally** — the idealization Chapter 35 used. Real patterns always betray their envelope: the fringes inside the central band are bright, the next batch dimmer, and so on.',
      },
      {
        term: "Diffraction by a Double Slit: solution protocol",
        kind: "method",
        statement: "**Solve Diffraction by a Double Slit problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is diffraction limits and grating dispersion; the working equation is $a\\sin\\theta = m\\lambda$, $\\theta_R = 1.22\\lambda/d$, $d\\sin\\theta = m\\lambda$ (grating), $2d\\sin\\theta = m\\lambda$ (Bragg); every substitution must carry its units so the final unit (radians and lines/mm) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\theta\\sim 10^{-3}\\ \\text{rad}$ for $\\lambda/a$; $R = mN\\sim 10^4$; Fraunhofer far field; uniform grating spacing.",
      },
    ],
    examples: [
      {
        title: 'Which fringes vanish?',
        problem: 'In a double-slit experiment, $\\lambda = 480$ nm, slit separation $d = 0.15$ mm, slit width $a = 0.030$ mm. Which interference orders are missing, and how many bright fringes appear inside the central diffraction envelope?',
        steps: [
          { label: 'Ratio', text: '$d/a = 150/30 = 5$, an integer, so orders $m = 5, 10, 15, \\ldots$ coincide with envelope minima and disappear.' },
          { label: 'Envelope edge', text: "The envelope's first minimum sits at $\\sin\\theta = \\lambda/a = (480\\times10^{-9})/(3.0\\times10^{-5}) = 0.0160$." },
          { label: 'Which fringe is that?', text: 'Fringe $m$ sits at $\\sin\\theta = m\\lambda/d = m(0.00320)$; the envelope edge falls at $m = 0.0160/0.00320 = 5$ — exactly the missing one.' },
          { label: 'Count survivors', text: 'Fringes $m = 0, \\pm1, \\pm2, \\pm3, \\pm4$ live inside the envelope: nine bright fringes, with the fifth erased at the edge.' },
        ],
        result: 'Orders 5, 10, … are missing; nine bright fringes (m = 0 through ±4) fill the central envelope.',
      },
      {
        title: "Diffraction by a Double Slit: single-slit minimum check",
        problem: "A slit of width $a = 0.15\\ \\text{mm}$ is lit by $550\\ \\text{nm}$ light. Find the first minimum $a\\sin\\theta = \\lambda$.",
        steps: [
          { label: "Ratio", text: "$\\sin\\theta = 5.50\\times 10^{-7}/(0.15\\times 10^{-3}) = 3.67\\times 10^{-3}$." },
          { label: "Small angle", text: "$\\theta \\approx 0.21^\\circ$ ($3.67\\ \\text{mrad}$)." },
        ],
        result: "$\\theta_1 \\approx 0.21^\\circ$.",
      },
    ],
    keyTakeaways: [
      'Finite slits multiply two-slit fringes by a single-slit envelope: $I = I_m\\cos^2\\beta\\,(\\sin\\alpha/\\alpha)^2$.',
      'Missing orders occur when $d\\sin\\theta = m\\lambda$ meets $a\\sin\\theta = m\'\\lambda$: if $d/a = k$ then orders $k, 2k, \\ldots$ vanish.',
      'Only in the limit of vanishing slit width do the fringes come out equally bright.',
    ],
    quiz: [
      {
        q: 'In the combined double-slit formula, the factor $\\beta$ measures:',
        options: ['half the phase difference between the two slits', 'half the phase difference across one slit', 'the total path difference in wavelengths', 'the slit width in units of $\\lambda$'],
        answer: 0,
        explanation: '$\\beta = \\pi d\\sin\\theta/\\lambda$ pairs the two slits (giving $\\cos^2\\beta$); $\\alpha$ with the width $a$ is each slit\'s own diffraction variable.',
      },
      {
        q: 'A double slit has $d/a = 3$. The missing orders are:',
        options: [`$m = 3, 6, 9, \\ldots$`, `$m = 2, 4, 6, \\ldots$`, `$m = 1.5, 3, 4.5, \\ldots$`, 'none'],
        answer: 0,
        explanation: '$m = m\'(d/a) = 3m\'$: every third interference order falls on an envelope minimum.',
      },
      {
        q: 'The slit width $a$ is reduced while $d$ stays fixed. The number of fringes inside the central diffraction envelope:',
        options: ['increases', 'decreases', 'stays the same', 'becomes infinite only if $a = 0$ exactly'],
        answer: 0,
        explanation: 'The envelope half-width is $\\lambda/a$ in $\\sin\\theta$; the count inside goes as $2d/a + 1$, so narrower slits admit more fringes.',
      },
    ],
  },
  // ------------------------------------------------------------------ 36-5
  {
    sectionId: 'hall-ch36-s5',
    readingTime: 6,
    intro: 'Replace two slits with thousands, equally spaced, and something dramatic happens: the principal maxima stay at the very angles $d\\sin\\theta = m\\lambda$ but collapse into needle-sharp spikes that blaze brighter as the ruling count grows — a diffraction grating. Every spectroscope that has measured a star\'s composition, a laser\'s purity, or a galaxy\'s redshift is this machine: phasor arithmetic turned into a wavelength meter.',
    objectives: [
      'State the grating equation and compute diffraction angles from a given ruling density',
      'Explain with phasors why many slits sharpen and brighten the principal maxima',
      'Determine the highest visible order for a given $\\lambda$ and ruling spacing $d$',
    ],
    concepts: [
      {
        term: 'Diffraction grating',
        kind: 'definition',
        statement: '**A grating is a large number $N$ of parallel slits (transmission grating) or reflecting grooves, equally spaced by $d$ = (rulings per unit length)$^{-1}$.** With plane-wave illumination the principal maxima obey the same law as two slits, $$d\\sin\\theta = m\\lambda, \\qquad m = 0, 1, 2, \\ldots$$ but with $N$ slits contributing, not two.',
      },
      {
        term: 'Sharpness from numbers',
        kind: 'insight',
        statement: '**Between adjacent principal maxima the phasor chain of $N$ slits closes into a loop $N - 1$ times: $N - 1$ minima separated by $N - 2$ weak secondary maxima.** Almost the whole angular range is dark, and the principal peaks become spikes whose intensity scales as $N^2$.',
        detail: 'A two-slit pattern has no such structure — cosine fringes fill the screen. Sharpening is a many-slit effect, which is why real spectroscopy demands thousands of rulings.',
      },
      {
        term: 'Order limit',
        kind: 'method',
        statement: '**An order $m$ exists only if $m\\lambda \\leq d$.** For $d = 1.25\\ \\mu$m and $\\lambda = 589$ nm the third order would need $\\sin\\theta = 1.41$ — impossible; the spectrum stops at $m = 2$.',
        detail: 'Higher orders fan the spectrum out wider, but when many wavelengths are present the orders begin to overlap: the red of order $m + 1$ can land on the blue of order $m$.',
      },
      {
        term: 'Grating versus prism',
        kind: 'insight',
        statement: '**A prism deviates colors by amounts set by glass and wavelength, modestly and material-dependently; a grating deviates them by geometry alone, $\\sin\\theta = m\\lambda/d$.** The grating\'s scale is known from its ruling count, its dispersion is enormous, and — with crystals as the grating — it works from X-rays to infrared. Modern gratings are blazed (sawtooth grooves) to heap the light into one chosen order.',
      },
      {
        term: "Diffraction Gratings: solution protocol",
        kind: "method",
        statement: "**Solve Diffraction Gratings problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is diffraction limits and grating dispersion; the working equation is $a\\sin\\theta = m\\lambda$, $\\theta_R = 1.22\\lambda/d$, $d\\sin\\theta = m\\lambda$ (grating), $2d\\sin\\theta = m\\lambda$ (Bragg); every substitution must carry its units so the final unit (radians and lines/mm) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\theta\\sim 10^{-3}\\ \\text{rad}$ for $\\lambda/a$; $R = mN\\sim 10^4$; Fraunhofer far field; uniform grating spacing.",
      },
    ],
    examples: [
      {
        title: 'Sodium light through a grating',
        problem: 'A grating has 8000 rulings per centimeter and is lit by sodium\'s yellow line at $\\lambda = 589$ nm. At what angles do the first- and second-order maxima appear, and does a third order exist?',
        steps: [
          { label: 'Ruling spacing', text: '$d = 1/(8000\\ \\text{cm}^{-1}) = 1.25\\times10^{-4}$ cm $= 1.25\\ \\mu$m.' },
          { label: 'First order', text: '$\\sin\\theta_1 = \\lambda/d = 0.589/1.25 = 0.471$, so $\\theta_1 = 28.1^\\circ$.' },
          { label: 'Second order', text: '$\\sin\\theta_2 = 2(0.471) = 0.942$, so $\\theta_2 = 70.4^\\circ$ — the spectrum is dramatically stretched.' },
          { label: 'Third order?', text: '$\\sin\\theta_3 = 3(0.471) = 1.41 > 1$ — no angle satisfies it. Only two orders exist.' },
        ],
        result: 'First order at 28.1°, second at 70.4°; the third order is forbidden because $3\\lambda > d$.',
      },
      {
        title: "Diffraction Gratings: grating-angle check",
        problem: "A $600\\ \\text{lines/mm}$ grating ($d \\approx 1.67\\ \\mu\\text{m}$) is hit by $550\\ \\text{nm}$ light. Find the $m = 1$ angle via $d\\sin\\theta = m\\lambda$.",
        steps: [
          { label: "Ratio", text: "$\\sin\\theta = 5.50\\times 10^{-7}/1.67\\times 10^{-6} = 0.33$." },
          { label: "Angle", text: "$\\theta \\approx 19.3^\\circ$." },
        ],
        result: "$\\theta_1 \\approx 19.3^\\circ$.",
      },
    ],
    keyTakeaways: [
      'Grating maxima satisfy $d\\sin\\theta = m\\lambda$ — same as two slits — but with $N$ rulings they are sharp and $N^2$ times as intense.',
      'Between principal maxima lie $N-1$ minima and $N-2$ weak secondary maxima: sharpening is a many-slit effect.',
      'Orders exist only up to $m \\leq d/\\lambda$.',
    ],
    quiz: [
      {
        q: 'Increasing the number of illuminated rulings $N$ at fixed $d$ and $\\lambda$:',
        options: ['sharpens and brightens the principal maxima without moving them', 'shifts the maxima to new angles', 'spreads the spectrum across more angles', 'lowers the order limit'],
        answer: 0,
        explanation: 'Positions come from $d\\sin\\theta = m\\lambda$ alone; $N$ controls sharpness ($\\propto N$ in width) and peak intensity ($\\propto N^2$).',
      },
      {
        q: 'For $\\lambda = 600$ nm and $d = 1.2$ µm, the highest visible order is:',
        options: [`$m = 1$`, `$m = 2$`, `$m = 3$`, `$m = 4$`],
        answer: 1,
        explanation: '$m \\leq d/\\lambda = 1.2/0.6 = 2$.',
      },
      {
        q: 'The principal maxima of a grating with spacing $d$ occur at the same angles as:',
        options: ['a two-slit pattern with the same spacing $d$', 'a single slit of width $d$', 'a circular aperture of diameter $d$', 'Bragg reflection from planes spaced $d$'],
        answer: 0,
        explanation: 'Both require path difference $d\\sin\\theta = m\\lambda$ between adjacent elements; Bragg\'s law instead has $2d\\sin\\theta$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 36-6
  {
    sectionId: 'hall-ch36-s6',
    readingTime: 6,
    intro: 'A grating exists to do one job: persuade two nearly equal wavelengths to appear at different angles, and to remain distinguishable when they do. Those are two separate virtues with separate scores — dispersion $D$ measures angular separation per wavelength interval, resolving power $R$ measures the smallest $\\Delta\\lambda$ that still reads as two lines. Both drop out of the grating equation with two strokes of calculus, and they answer to different design levers.',
    objectives: [
      'Derive and apply the dispersion $D = m/(d\\cos\\theta)$ of a grating',
      'Apply the resolving power $R = \\lambda/\\Delta\\lambda = Nm$ and the just-resolved criterion',
      'Explain why dispersion and resolution respond to different design choices',
    ],
    concepts: [
      {
        term: 'Dispersion',
        kind: 'law',
        statement: '**Angular spread per unit wavelength: differentiating $d\\sin\\theta = m\\lambda$ at fixed $d$ and $m$ gives** $$D \\equiv \\frac{\\Delta\\theta}{\\Delta\\lambda} = \\frac{m}{d\\cos\\theta}.$$ Dispersion grows with order $m$ and with finer ruling (smaller $d$) — and does not care how many rulings are illuminated.',
      },
      {
        term: 'Resolving power',
        kind: 'law',
        statement: '**For $N$ illuminated rulings used in order $m$, the smallest resolvable wavelength difference is** $$\\Delta\\lambda = \\frac{\\lambda}{Nm}, \\qquad R \\equiv \\frac{\\lambda}{\\Delta\\lambda} = Nm.$$ Resolution wants many rulings — a wide, fully lit grating — not fine spacing.',
      },
      {
        term: 'Just resolved, for gratings',
        kind: 'method',
        statement: '**Two wavelengths are just resolved when their principal maxima are separated by half the angular width of either** — the grating\'s Rayleigh criterion. The half-width of a principal maximum comes from the $N$-slit phasor loop: $\\Delta\\theta_{\\text{half}} \\approx \\lambda/(Nd\\cos\\theta)$, which combines with $D$ to give $\\Delta\\lambda = \\lambda/(Nm)$.',
        detail: 'Everything about sharpness, like everything about intensity, is a many-slit effect: a two-slit "grating" ($N = 2$) resolves almost nothing.',
      },
      {
        term: 'Two independent dials',
        kind: 'insight',
        statement: '**Dispersion and resolution are set by different hardware.** A coarsely ruled but wide grating has modest angles but high resolution; a finely ruled, narrowly lit one spreads its spectrum but merges close lines. Spectroscopists choose $d$ (angles), $N$ (line separation) and $m$ (both at once) to match the lines being hunted.',
      },
      {
        term: "Gratings: Dispersion and Resolving Power: solution protocol",
        kind: "method",
        statement: "**Solve Gratings: Dispersion and Resolving Power problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is diffraction limits and grating dispersion; the working equation is $a\\sin\\theta = m\\lambda$, $\\theta_R = 1.22\\lambda/d$, $d\\sin\\theta = m\\lambda$ (grating), $2d\\sin\\theta = m\\lambda$ (Bragg); every substitution must carry its units so the final unit (radians and lines/mm) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\theta\\sim 10^{-3}\\ \\text{rad}$ for $\\lambda/a$; $R = mN\\sim 10^4$; Fraunhofer far field; uniform grating spacing.",
      },
    ],
    examples: [
      {
        title: 'Splitting the sodium doublet',
        problem: "Sodium's yellow doublet has $\\lambda_1 = 589.0$ nm and $\\lambda_2 = 589.6$ nm. A grating 3.00 cm wide is ruled at 600 lines/mm and fully illuminated. In second order, (a) what is the angular separation of the lines, and (b) is the doublet resolved?",
        steps: [
          { label: 'Ruling data', text: '$d = 1/600$ mm $= 1.667\\ \\mu$m; $N = (600\\ \\text{mm}^{-1})(30.0\\ \\text{mm}) = 18\\,000$ rulings.' },
          { label: 'Second-order angle', text: 'At the mean wavelength, $\\sin\\theta = 2(589)/1667 = 0.707$, so $\\theta = 45.0^\\circ$.' },
          { label: 'Separation', text: '$D = m/(d\\cos\\theta) = 2/[(1.667\\times10^{-6})(0.707)] = 1.70\\times10^{6}$ rad/m, so $\\Delta\\theta = D\\Delta\\lambda = (1.70\\times10^{6})(0.6\\times10^{-9}) = 1.0\\times10^{-3}$ rad.' },
          { label: 'Resolution', text: '$R = Nm = 36\\,000$, so $\\Delta\\lambda_{\\min} = \\bar{\\lambda}/(Nm) = 589/36\\,000 = 0.016$ nm $\\ll 0.6$ nm — the doublet is resolved with room to spare.' },
        ],
        result: 'Δθ ≈ 1.0 mrad; resolving the doublet needs only R = 982, and the grating delivers 36 000.',
      },
      {
        title: "Gratings: Dispersion and Resolving Power: grating-angle check",
        problem: "A $600\\ \\text{lines/mm}$ grating ($d \\approx 1.67\\ \\mu\\text{m}$) is hit by $550\\ \\text{nm}$ light. Find the $m = 1$ angle via $d\\sin\\theta = m\\lambda$.",
        steps: [
          { label: "Ratio", text: "$\\sin\\theta = 5.50\\times 10^{-7}/1.67\\times 10^{-6} = 0.33$." },
          { label: "Angle", text: "$\\theta \\approx 19.3^\\circ$." },
        ],
        result: "$\\theta_1 \\approx 19.3^\\circ$.",
      },
    ],
    keyTakeaways: [
      'Dispersion $D = m/(d\\cos\\theta)$: bigger order, finer ruling, wider spectrum.',
      'Resolving power $R = Nm$: more illuminated rulings, closer lines separated.',
      'Dispersion and resolution are independent design axes — a grating can have either without the other.',
    ],
    quiz: [
      {
        q: 'Doubling the order $m$ (same grating, same wavelengths) approximately:',
        options: ['doubles both the dispersion and the resolving power', 'doubles dispersion but not resolution', 'doubles resolution but not dispersion', 'changes neither'],
        answer: 0,
        explanation: '$D = m/(d\\cos\\theta)$ and $R = Nm$ both scale with $m$ (the $\\cos\\theta$ drift is second-order).',
      },
      {
        q: 'Which change improves a grating\'s resolving power?',
        options: ['ruling more finely on the same lit width', 'illuminating more rulings', 'increasing each slit\'s width', 'moving the detector farther away'],
        answer: 1,
        explanation: '$R = Nm$ counts illuminated rulings only; finer $d$ buys dispersion, not resolution.',
      },
      {
        q: 'Which change increases the dispersion $D$?',
        options: ['finer ruling spacing $d$', 'more rulings $N$', 'a longer detector arm', 'brighter illumination'],
        answer: 0,
        explanation: '$D = m/(d\\cos\\theta)$ contains $d$ but not $N$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 36-7
  {
    sectionId: 'hall-ch36-s7',
    readingTime: 6,
    intro: 'No machine can cut rulings 0.1 nm apart — but nature already did. In a crystal, atoms stack in periodic planes spaced a few tenths of a nanometer, and X-rays come with just that wavelength. Laue\'s students fired X-rays through copper sulfate and found spots instead of fog; the Braggs recast the physics as reflection from planes; and out of that came crystallography — the instrument that has since read the structures of table salt, insulin, DNA and most of the protein machinery of life.',
    objectives: [
      "State Bragg's law and identify the glancing angle it uses",
      'Compute interplanar spacings from X-ray diffraction angles',
      'Describe how crystal structures — and Avogadro\'s number — came out of X-ray data',
    ],
    concepts: [
      {
        term: 'Why crystals',
        kind: 'insight',
        statement: '**The right grating for X-rays already exists: the atomic planes of a crystal, with spacings $d$ of 0.1–1 nm matching X-ray wavelengths.** Visible light (λ ≈ 500 nm) sees a crystal as featureless — its grating is hopelessly fine.',
      },
      {
        term: "Bragg's law",
        kind: 'law',
        statement: "**Waves reflected from successive atomic planes interfere constructively when** $$2d\\sin\\theta = m\\lambda,$$ where $\\theta$ is the **glancing angle measured from the planes themselves** (not their normal) and $d$ is the plane spacing. The factor 2 is the down-and-up path: each deeper plane contributes an extra $2d\\sin\\theta$.",
        detail: 'Max von Laue first derived the transmission version; W. L. Bragg\'s reflection form is the one every diffraction lab uses.',
      },
      {
        term: 'Laue and Bragg methods',
        kind: 'method',
        statement: '**Laue method: white X-rays, fixed single crystal — the scattered spots map the crystal\'s symmetry in one exposure. Bragg method: monochromatic X-rays on a rotated crystal — intensity peaks whenever $\\theta$ satisfies the law for some family of planes.** Sweeping the angle catalogs the spacings; combining them locates the atoms.',
      },
      {
        term: 'From spacing to structure',
        kind: 'insight',
        statement: '**Bragg analysis yields atomic architecture, and density converts it into a census.** From NaCl\'s $d = 0.282$ nm and its cubic structure, X-ray data plus measured mass density pinned down Avogadro\'s number — among its most precise early determinations. The same law now decodes protein crystals (myoglobin 1958, thousands per year today) and, at X-ray free-electron lasers, even room-temperature biomolecules without freezing.',
      },
      {
        term: "X-Ray Diffraction: solution protocol",
        kind: "method",
        statement: "**Solve X-Ray Diffraction problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is diffraction limits and grating dispersion; the working equation is $a\\sin\\theta = m\\lambda$, $\\theta_R = 1.22\\lambda/d$, $d\\sin\\theta = m\\lambda$ (grating), $2d\\sin\\theta = m\\lambda$ (Bragg); every substitution must carry its units so the final unit (radians and lines/mm) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\theta\\sim 10^{-3}\\ \\text{rad}$ for $\\lambda/a$; $R = mN\\sim 10^4$; Fraunhofer far field; uniform grating spacing.",
      },
    ],
    examples: [
      {
        title: 'Rock-salt angles',
        problem: 'X-rays of wavelength 0.110 nm reflect from the planes of a NaCl crystal with $d = 0.282$ nm. At what glancing angles do the Bragg maxima occur?',
        steps: [
          { label: 'Set up', text: "$2d\\sin\\theta = m\\lambda$ gives $\\sin\\theta = m\\lambda/(2d) = m(0.110)/(0.564) = 0.195\\,m$." },
          { label: 'Low orders', text: '$m = 1$: $\\sin\\theta = 0.195$, $\\theta = 11.3^\\circ$. $m = 2$: $0.390$, $\\theta = 23.0^\\circ$.' },
          { label: 'Higher orders', text: '$m = 3$: $0.585$, $\\theta = 35.8^\\circ$. $m = 4$: $0.780$, $\\theta = 51.3^\\circ$.' },
          { label: 'Limit', text: '$m = 5$: $\\sin\\theta = 0.975$, $\\theta = 77^\\circ$ — a grazing beam; $m = 6$ needs $\\sin\\theta > 1$ and cannot occur.' },
        ],
        result: 'Five orders appear: 11.3°, 23.0°, 35.8°, 51.3°, 77° — each a beam of reinforced reflection from one family of planes.',
      },
      {
        title: "X-Ray Diffraction: grating-angle check",
        problem: "A $600\\ \\text{lines/mm}$ grating ($d \\approx 1.67\\ \\mu\\text{m}$) is hit by $550\\ \\text{nm}$ light. Find the $m = 1$ angle via $d\\sin\\theta = m\\lambda$.",
        steps: [
          { label: "Ratio", text: "$\\sin\\theta = 5.50\\times 10^{-7}/1.67\\times 10^{-6} = 0.33$." },
          { label: "Angle", text: "$\\theta \\approx 19.3^\\circ$." },
        ],
        result: "$\\theta_1 \\approx 19.3^\\circ$.",
      },
    ],
    keyTakeaways: [
      "Bragg's law $2d\\sin\\theta = m\\lambda$ governs constructive interference of X-rays reflected from crystal planes, with θ a glancing angle.",
      'Crystals are the only gratings fine enough for X-rays: atomic spacings ~0.1 nm match X-ray wavelengths.',
      'X-ray diffraction measures atomic spacings and structures — and historically delivered a precise Avogadro\'s number.',
    ],
    quiz: [
      {
        q: "In Bragg's law, the angle θ is measured:",
        options: ['between the incident beam and the crystal plane', 'between the incident beam and the plane normal', 'between incident and reflected beams', 'from the vertical'],
        answer: 0,
        explanation: 'Bragg used glancing angles; at θ = 90° the beam skims along the planes.',
      },
      {
        q: 'First-order Bragg reflection from planes with $d = 0.20$ nm using $\\lambda = 0.10$ nm occurs at:',
        options: [`$\\theta = 14.5^\\circ$`, `$\\theta = 30^\\circ$`, `$\\theta = 60^\\circ$`, `$\\theta = 90^\\circ$`],
        answer: 0,
        explanation: '$\\sin\\theta = m\\lambda/(2d) = 0.10/0.40 = 0.25$.',
      },
      {
        q: 'Why can visible light not diffract off atomic planes in a crystal?',
        options: [`$m\\lambda \\leq 2d$ fails for every $m \\geq 1$`, 'visible light is too weak', 'crystals are transparent to visible light only', 'atoms reflect only X-rays'],
        answer: 0,
        explanation: 'With $\\lambda \\approx 500$ nm and $2d \\approx 0.6$ nm, $\\sin\\theta = m\\lambda/2d > 1$ for all orders.',
      },
    ],
  },
]
