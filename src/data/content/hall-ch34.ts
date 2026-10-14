import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 34
// Images — sections 34-1 … 34-6 (ids hall-ch34-s1 … hall-ch34-s6).
// Plane and spherical mirrors, spherical refracting surfaces, thin lenses,
// optical instruments, and the formal proofs of the imaging equations.
// ============================================================================

export const hallCh34Content: SectionContent[] = [
  // ------------------------------------------------------------------ 34-1
  {
    sectionId: 'hall-ch34-s1',
    readingTime: 6,
    intro: "Mirrors do not create anything — they redirect light so that it seems to come from somewhere it does not. That 'somewhere' is the image. This section builds the vocabulary of images (real and virtual, upright and inverted) with the simplest case, the plane mirror, whose image is virtual, upright, life-size — and in one sense surprisingly reversed.",
    objectives: [
      'Distinguish real images (light actually passes through) from virtual images (light only appears to)',
      'Construct the image formed by a plane mirror and prove $i = -p$',
      'Explain what a mirror does and does not reverse',
    ],
    concepts: [
      {
        term: 'Real and virtual images',
        kind: 'definition',
        statement: "**A real image is a point through which the light actually converges** (you could catch it on a card). **A virtual image is a point the light only appears to diverge from** — behind a mirror, or through a lens. Your eye cannot tell the difference: both send the same diverging bundle into the pupil.",
      },
      {
        term: 'Plane mirror image',
        kind: 'theorem',
        statement: "**Every point of an object has its image directly opposite it, perpendicular to the mirror, at equal distance:** $i = -p$ (image distance negative, hence virtual). The image is upright, unmagnified ($m = +1$), left–right unswapped but front–back reversed.",
      },
      {
        term: 'What a mirror reverses',
        kind: 'insight',
        statement: '**A mirror does not swap left and right — it swaps front and back.** The image of your right hand is a right hand, but it faces you, so *you* call the image\u2019s right hand \'left\' by comparison. Text held to a mirror is reversed only because *you* flipped the page toward it; the mirror merely faithfully reverses the axis perpendicular to its own surface.',
      },
      {
        term: 'Nearest-eye wins',
        kind: 'insight',
        statement: '**To see any point of yourself in a mirror, you need a mirror region only half your height.** By similar triangles the mirror must span from halfway between your eye and the top of your head to halfway between your eye and your feet — moving back does not enlarge the useful region, one of the most counterintuitive facts of everyday optics.',
      },
      {
        term: "Images and Plane Mirrors: solution protocol",
        kind: "method",
        statement: "**Solve Images and Plane Mirrors problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is geometric imaging with mirrors and thin lenses; the working equation is $1/f = 1/p+1/i$, $m = -i/p$, $n_1/p+n_2/i = (n_2-n_1)/r$; every substitution must carry its units so the final unit (centimeters and dimensionless $m$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $f\\sim 10\\ \\text{cm}$ lab lenses; $m\\sim -1$ to $+5$; paraxial, thin, small angles; fix one sign convention once.",
      },
    ],
    figures: [
      {
        caption: 'Image construction in a plane mirror. Two rays leave the tip of the arrow at object distance $p$: ray 1 hits the mirror perpendicular and reflects back on itself; ray 2 reflects with equal angles at the surface. The *reflected* rays (solid, right-going) diverge — so the eye traces them back along their extensions (dashed) to the virtual image tip at $i = -p$, exactly as far behind the mirror as the object is in front. The full image is assembled point by point this way, upright and unmagnified.',
        afterConcept: 3,
        svg: `<svg viewBox="0 0 720 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plane mirror image construction with two rays and virtual image behind mirror">
  <rect x="330" y="30" width="10" height="340" fill="currentColor" opacity="0.22"/>
  <line x1="335" y1="24" x2="335" y2="370" stroke="currentColor" stroke-width="3"/>
  <text x="312" y="388" font-size="13" fill="currentColor">mirror</text>
  <text x="364" y="52" font-size="13" fill="currentColor" opacity="0.7">behind mirror (virtual side)</text>
  <line x1="150" y1="170" x2="150" y2="330" stroke="currentColor" stroke-width="4"/>
  <path d="M 140 330 L 150 342 L 160 330" fill="none" stroke="currentColor" stroke-width="3"/>
  <path d="M 145 180 L 150 195 L 155 180" fill="none" stroke="currentColor" stroke-width="3"/>
  <text x="100" y="346" font-size="14" font-weight="bold" fill="currentColor">object</text>
  <circle cx="150" cy="170" r="4" fill="currentColor"/>
  <line x1="520" y1="170" x2="520" y2="330" stroke="currentColor" stroke-width="4" opacity="0.55"/>
  <path d="M 512 330 L 520 340 L 528 330" fill="none" stroke="currentColor" stroke-width="3" opacity="0.55"/>
  <path d="M 516 180 L 520 192 L 524 180" fill="none" stroke="currentColor" stroke-width="3" opacity="0.55"/>
  <text x="494" y="346" font-size="14" font-weight="bold" fill="currentColor" opacity="0.55">image</text>
  <circle cx="520" cy="170" r="4" fill="currentColor" opacity="0.55"/>
  <line x1="150" y1="170" x2="335" y2="170" stroke="currentColor" stroke-width="1.8"/>
  <path d="M 325 176 L 335 170 L 325 164" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="218" y="156" font-size="13" fill="currentColor">ray 1</text>
  <line x1="150" y1="170" x2="335" y2="104" stroke="currentColor" stroke-width="1.8"/>
  <line x1="335" y1="104" x2="600" y2="170" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 590 176 L 600 170 L 590 164" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <text x="222" y="98" font-size="13" fill="currentColor">ray 2</text>
  <line x1="520" y1="170" x2="335" y2="104" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 6" opacity="0.6"/>
  <line x1="170" y1="112" x2="310" y2="112" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <path d="M 180 108 L 170 112 L 180 116" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <path d="M 300 108 L 310 112 L 300 116" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <text x="222" y="134" font-size="14" fill="currentColor">p</text>
  <line x1="360" y1="196" x2="500" y2="196" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <path d="M 370 192 L 360 196 L 370 200" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <path d="M 490 192 L 500 196 L 490 200" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <text x="421" y="218" font-size="14" fill="currentColor">i = −p</text>
  <path d="M 400 60 L 460 84 M 400 84 L 460 60" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="600" cy="170" r="17" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="592" cy="162" r="3.5" fill="currentColor"/>
  <circle cx="608" cy="162" r="3.5" fill="currentColor"/>
  <text x="582" y="200" font-size="13" fill="currentColor">eye</text>
</svg>`,
      },
    ],
    examples: [
      {
        title: 'The full-length mirror test',
        problem: 'A person of height 1.70 m with eyes 1.60 m above the floor wants to see head to toe in a vertical mirror. What is the minimum mirror height, and where must its top edge be?',
        steps: [
          { label: 'Key principle', text: 'To see a point in a plane mirror, a ray from the point must reflect to the eye. The required mirror point lies where the line from the point to the eye crosses the mirror.' },
          { label: 'Top of head (1.70 m)', text: 'The line from head to eye (1.60 m) crosses the mirror at the average height: $(1.70 + 1.60)/2 = 1.65$ m.' },
          { label: 'Toes (0 m)', text: 'The line from toe to eye crosses at $(0 + 1.60)/2 = 0.80$ m.' },
          { label: 'Minimum height', text: 'From 0.80 m to 1.65 m: $h = 0.85$ m — exactly half the person\u2019s height, and independent of distance from the mirror.' },
        ],
        result: 'A 0.85 m mirror suffices, spanning 0.80–1.65 m above the floor; stepping back changes nothing.',
      },
      {
        title: "Images and Plane Mirrors: thin-lens numbers",
        problem: "A converging lens has $f = 10\\ \\text{cm}$; an object sits at $p = 50\\ \\text{cm}$. Locate the image via $1/f = 1/p+1/i$.",
        steps: [
          { label: "Solve", text: "$1/i = 1/10-1/50 = 0.08\\ \\text{cm}^{-1}$." },
          { label: "Image", text: "$i \\approx 12.5\\ \\text{cm}$ (real, since $i > 0$)." },
          { label: "Magnification", text: "$m = -i/p \\approx -0.25$." },
        ],
        result: "$i \\approx 12.5\\ \\text{cm}$, $m \\approx -0.25$.",
      },
    ],
    keyTakeaways: [
      'Real images: light passes through them; virtual images: light only appears to diverge from them.',
      'Plane mirrors: $i = -p$, $m = +1$ — virtual, upright, unmagnified.',
      'Mirrors reverse front to back, not left to right; seeing your whole self needs only a half-height mirror.',
    ],
    quiz: [
      {
        q: 'The image of a candle 2.0 m in front of a plane mirror is:',
        options: ['real, 2.0 m behind the mirror', 'virtual, 2.0 m behind the mirror', 'virtual, 4.0 m behind the mirror', 'real, at the mirror surface'],
        answer: 1,
        explanation: 'Plane mirror: $i = -p = -2.0$ m — virtual image 2.0 m behind.',
      },
      {
        q: 'The lateral magnification of a plane mirror is:',
        options: [`$-1$`, `$+1$`, '0', `$2$`],
        answer: 1,
        explanation: 'Image and object are the same size and orientation: $m = +1$.',
      },
      {
        q: 'Which is reversed by a plane mirror?',
        options: ['left and right', 'up and down', 'front and back', 'nothing at all'],
        answer: 2,
        explanation: 'The reversal is along the axis perpendicular to the mirror surface — front–back; the left–right appearance is the viewer\u2019s interpretation.',
      },
      {
        q: 'A photograph held facing a mirror appears reversed in the mirror image because:',
        options: ['mirrors swap left and right', 'you rotated the photograph 180° about a vertical axis to face the mirror', 'the image is inverted top to bottom', 'light changes frequency on reflection'],
        answer: 1,
        explanation: 'The mirror reverses only the perpendicular axis; the left–right swap you see is the flip you yourself made pointing the page at the glass.',
      },
    ],
  },
  // ------------------------------------------------------------------ 34-2
  {
    sectionId: 'hall-ch34-s2',
    readingTime: 7,
    intro: "Curve the mirror and the magic begins: parallel rays converge to a focal point, images grow or shrink, and they can be real or virtual depending on where the object sits. One equation with careful sign conventions — plus the focal length $f = r/2$ — governs everything from shaving mirrors to the 10-m Keck telescopes.",
    objectives: [
      'Locate the focal point of a spherical mirror ($f = r/2$) and define the mirror equation',
      'Construct ray diagrams for concave and convex mirrors',
      'Apply sign conventions to find image distance, orientation and magnification $m = -i/p$',
    ],
    concepts: [
      {
        term: 'Focal length of a spherical mirror',
        kind: 'theorem',
        statement: "**Rays parallel to the central axis reflect through a common focal point halfway between mirror and center of curvature:** $$f = \\frac{r}{2}.$$ Concave (converging) mirrors have $f > 0$; convex (diverging) mirrors have $f < 0$.",
      },
      {
        term: 'The mirror equation',
        kind: 'law',
        statement: "**Object distance $p$, image distance $i$ and focal length $f$ obey** $$\\frac{1}{p} + \\frac{1}{i} = \\frac{1}{f}.$$ Signs: $p > 0$ for real objects; $i > 0$ for real images (in front), $i < 0$ for virtual (behind); $f > 0$ concave, $f < 0$ convex.",
      },
      {
        term: 'Lateral magnification',
        kind: 'definition',
        statement: "**The image size relative to the object is** $$m = -\\frac{i}{p}.$$ Reading the signs: $m > 0$ upright and virtual (for mirrors), $m < 0$ inverted and real; $|m| > 1$ enlarged, $|m| < 1$ reduced.",
      },
      {
        term: 'Ray-diagram rules',
        kind: 'method',
        statement: "**Three rays locate any image instantly.** (1) A ray parallel to the axis reflects through the focal point (or appears to come from it, for convex). (2) A ray through the focal point reflects parallel to the axis. (3) A ray to the mirror center reflects symmetrically about the axis. Any two suffice; the third is a check.",
      },
      {
        term: 'The object-distance sorting',
        kind: 'insight',
        statement: '**Concave mirror: object beyond $C$ ($p > 2f$) gives real, inverted, reduced; between $C$ and $F$ gives real, inverted, enlarged; inside $F$ ($p < f$) gives virtual, upright, enlarged (the shaving-mirror case).** Convex mirrors always give virtual, upright, reduced images — which is exactly why they widen the field of view on truck mirrors and at blind corners.',
      },
    ],
    examples: [
      {
        title: 'A concave makeup mirror',
        problem: 'A concave mirror has radius of curvature 20 cm. Your face is 10 cm from it. Where is the image, and what is the magnification?',
        steps: [
          { label: 'Focal length', text: '$f = r/2 = 10$ cm.' },
          { label: 'Mirror equation', text: '$1/i = 1/f - 1/p = 1/10 - 1/10 = 0$… wait, take $p = 15$ cm instead (face at the focal point would send the image to infinity, i.e. no comfortable view). Redo with $p = 15$ cm.' },
          { label: 'Recompute', text: '$1/i = 1/10 - 1/15 = (3 - 2)/30 = 1/30$, so $i = +30$ cm — real, on your side of the mirror.' },
          { label: 'Magnification', text: '$m = -i/p = -(30)/(15) = -2.0$: inverted and twice life size, floating 30 cm from the mirror.' },
        ],
        result: 'With the face at 15 cm: $i = +30$ cm, $m = -2.0$ — a real, inverted, doubled image.',
      },
      {
        title: "Spherical Mirrors: thin-lens numbers",
        problem: "A converging lens has $f = 10\\ \\text{cm}$; an object sits at $p = 30\\ \\text{cm}$. Locate the image via $1/f = 1/p+1/i$.",
        steps: [
          { label: "Solve", text: "$1/i = 1/10-1/30 = 0.0667\\ \\text{cm}^{-1}$." },
          { label: "Image", text: "$i \\approx 15\\ \\text{cm}$ (real, since $i > 0$)." },
          { label: "Magnification", text: "$m = -i/p \\approx -0.5$." },
        ],
        result: "$i \\approx 15\\ \\text{cm}$, $m \\approx -0.5$.",
      },
    ],
    keyTakeaways: [
      'Spherical mirrors: $f = r/2$, concave positive, convex negative.',
      '$1/p + 1/i = 1/f$ with $m = -i/p$; the sign conventions carry all the physics.',
      'Inside the focal length a concave mirror gives a virtual, upright, enlarged image; convex mirrors always give virtual reduced ones.',
    ],
    quiz: [
      {
        q: 'A concave mirror has radius 40 cm. Its focal length is:',
        options: ['40 cm', '20 cm', '10 cm', '80 cm'],
        answer: 1,
        explanation: '$f = r/2 = 20$ cm for a spherical mirror.',
      },
      {
        q: 'An object sits at the center of curvature of a concave mirror. The image is:',
        options: ['virtual and upright', 'real, inverted, same size, at C', 'real, upright, enlarged', 'at infinity'],
        answer: 1,
        explanation: 'With $p = r = 2f$, the equation gives $i = 2f$ and $m = -1$.',
      },
      {
        q: 'For any object position, a convex mirror produces an image that is:',
        options: ['real and inverted', 'virtual and upright', 'real and upright', 'virtual and inverted'],
        answer: 1,
        explanation: 'With $f < 0$ the equation forces $i < 0$ (virtual) and $m = -i/p > 0$ (upright), always reduced.',
      },
      {
        q: 'An object is placed inside the focal length of a concave mirror. The image is:',
        options: ['real, inverted, reduced', 'virtual, upright, enlarged', 'real, upright, enlarged', 'virtual, inverted, reduced'],
        answer: 1,
        explanation: '$p < f$ makes $1/i < 0$: virtual, behind the mirror, with $m > 1$ — the magnifying shaving mirror.',
      },
    ],
  },
  // ------------------------------------------------------------------ 34-3
  {
    sectionId: 'hall-ch34-s3',
    readingTime: 5,
    intro: "Refraction bends light at curved surfaces too, and a single curved boundary between two media already forms images — the basis of the eye and of every lens. One equation, with the sign of the index difference doing the work, covers the fish tank seen from outside and the first surface of a lens.",
    objectives: [
      'Apply $n_1/p + n_2/i = (n_2 - n_1)/r$ to a single refracting surface',
      'Explain the apparent depth of a fish in water',
      'Track how the sign of $r$ encodes which way the surface bulges',
    ],
    concepts: [
      {
        term: 'Single refracting surface',
        kind: 'law',
        statement: "**For an object in medium $n_1$ viewed through a spherical surface of radius $r$ into medium $n_2$:** $$\\frac{n_1}{p} + \\frac{n_2}{i} = \\frac{n_2 - n_1}{r}.$$ Here $r > 0$ if the center of curvature lies on the outgoing side (the side of the refracted, image-forming light).",
      },
      {
        term: 'Apparent depth',
        kind: 'theorem',
        statement: "**Looking nearly straight down into water, the apparent depth is** $$i = -\\frac{n_2}{n_1}p$$ **with $n_1$ the water, $n_2$ the air — about three-quarters of the true depth for water.** The image is virtual (negative $i$) and slightly compressed toward the surface.",
        detail: 'This is why spearfishing is hard: the fish is deeper than it looks.',
      },
      {
        term: 'Why curvature matters',
        kind: 'insight',
        statement: '**The right-hand side $(n_2-n_1)/r$ is the "power" of the surface.** Flat glass ($r \\to \\infty$) contributes nothing — a flat window does not image, whatever its thickness. The greater the index mismatch and the tighter the curve, the stronger the surface bends rays.',
      },
      {
        term: "Spherical Refracting Surfaces: solution protocol",
        kind: "method",
        statement: "**Solve Spherical Refracting Surfaces problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is geometric imaging with mirrors and thin lenses; the working equation is $1/f = 1/p+1/i$, $m = -i/p$, $n_1/p+n_2/i = (n_2-n_1)/r$; every substitution must carry its units so the final unit (centimeters and dimensionless $m$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $f\\sim 10\\ \\text{cm}$ lab lenses; $m\\sim -1$ to $+5$; paraxial, thin, small angles; fix one sign convention once.",
      },
      {
        term: "Spherical Refracting Surfaces: scales and validity",
        kind: "insight",
        statement: "**Spherical Refracting Surfaces lives at $f\\sim 10\\ \\text{cm}$ lab lenses; $m\\sim -1$ to $+5$ and the textbook model holds while paraxial, thin, small angles; fix one sign convention once.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Spherical Refracting Surfaces calculation gives seconds when centimeters and dimensionless $m$ demands meters, or a value orders of magnitude beyond $f\\sim 10\\ \\text{cm}$ lab lenses; $m\\sim -1$ to $+5$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'How deep is that fish?',
        problem: 'A fish floats 10 cm below the flat surface of a pond ($n = 1.33$). How deep does it appear to a viewer looking straight down?',
        steps: [
          { label: 'Set up', text: 'Flat surface: $r \\to \\infty$, so the right side of the equation vanishes: $n_1/p + n_2/i = 0$, with $n_1 = 1.33$ (water), $n_2 = 1.00$ (air), $p = 10$ cm.' },
          { label: 'Solve for i', text: '$i = -(n_2/n_1)p = -(1.00/1.33)(10) = -7.5$ cm.' },
          { label: 'Interpret', text: 'The negative sign means a virtual image 7.5 cm below the surface — only 75 percent of the true depth.' },
          { label: 'Spear advice', text: 'Aim about a third deeper than the fish appears, and not directly at the image.' },
        ],
        result: 'Apparent depth 7.5 cm versus true 10 cm — the classic 3/4 rule for water.',
      },
      {
        title: "Spherical Refracting Surfaces: thin-lens numbers",
        problem: "A converging lens has $f = 10\\ \\text{cm}$; an object sits at $p = 40\\ \\text{cm}$. Locate the image via $1/f = 1/p+1/i$.",
        steps: [
          { label: "Solve", text: "$1/i = 1/10-1/40 = 0.075\\ \\text{cm}^{-1}$." },
          { label: "Image", text: "$i \\approx 13.3\\ \\text{cm}$ (real, since $i > 0$)." },
          { label: "Magnification", text: "$m = -i/p \\approx -0.333$." },
        ],
        result: "$i \\approx 13.3\\ \\text{cm}$, $m \\approx -0.333$.",
      },
    ],
    keyTakeaways: [
      'Single spherical surface: $n_1/p + n_2/i = (n_2-n_1)/r$, with $r$ signed by the center of curvature.',
      'A flat surface does not image, but it does shift apparent depth: $i = -(n_2/n_1)p$.',
      'Fish in water appear at about 3/4 of their true depth.',
    ],
    quiz: [
      {
        q: 'Looking straight down at a coin on the bottom of a 2.0 m pool ($n = 1.33$), it appears to be about:',
        options: ['2.0 m deep', '1.5 m deep', '2.7 m deep', 'at the surface'],
        answer: 1,
        explanation: 'Apparent depth $= p/n = 2.0/1.33 \\approx 1.5$ m.',
      },
      {
        q: 'In the single-surface equation, a flat refracting surface has:',
        options: [`$r = 0$`, '$r \\to \\infty$ and zero imaging power', `$r = 1$`, 'undefined behavior'],
        answer: 1,
        explanation: 'With $1/r \\to 0$ the surface cannot change the vergence of the rays.',
      },
      {
        q: 'The sign of the radius $r$ in the refracting-surface equation is positive when the center of curvature is:',
        options: ['on the side the object is on', 'on the side the refracted light goes', 'at infinity', 'inside the surface'],
        answer: 1,
        explanation: 'By the book\u2019s convention, $r$ is signed positive if the center of curvature lies on the outgoing (image) side.',
      },
      {
        q: 'A flat glass window pane never forms an image of a distant object because:',
        options: ['glass is opaque', 'the two surfaces cancel only if parallel — each flat surface has zero power', 'light slows but keeps its direction, and flat surfaces contribute no vergence change', 'windows are always curved'],
        answer: 2,
        explanation: 'With $r \\to \\infty$ each surface contributes $(n_2-n_1)/r = 0$: rays bend on entry and exit but a parallel plate leaves their directions — hence the vergence — unchanged.',
      },
    ],
  },
  // ------------------------------------------------------------------ 34-4
  {
    sectionId: 'hall-ch34-s4',
    readingTime: 7,
    intro: "Two refracting surfaces, thin enough that their separation can be ignored, make a lens — the workhorse of all optics. One equation, $1/p + 1/i = 1/f$, identical in form to the mirror equation, plus the lensmaker's recipe for $f$, controls cameras, projectors, eyeglasses and microscopes.",
    objectives: [
      'Apply the thin-lens equation and classify converging versus diverging lenses',
      'Use ray diagrams with the three principal rays',
      'Combine thin lenses in contact: $1/f = 1/f_1 + 1/f_2$',
    ],
    concepts: [
      {
        term: 'Thin-lens equation',
        kind: 'law',
        statement: "**Object, image and focal distances of a thin lens obey** $$\\frac{1}{p} + \\frac{1}{i} = \\frac{1}{f},$$ with magnification $m = -i/p$ — the same algebra as mirrors. Converging (convex) lenses have $f > 0$; diverging (concave) lenses have $f < 0$.",
      },
      {
        term: 'Sign conventions for lenses',
        kind: 'notation',
        statement: "**Real-is-positive for both sides.** $p > 0$ real object on the incoming side; $i > 0$ real image on the *far* side of the lens (light actually passes through); $i < 0$ virtual image on the incoming side, same side as the object. $m < 0$ inverted, $m > 0$ upright.",
      },
      {
        term: 'Principal rays',
        kind: 'method',
        statement: '**Three rays trace any thin lens.** (1) Parallel to the axis emerges through the far focal point. (2) Through the near focal point emerges parallel. (3) Through the lens center passes undeviated. Two rays give the image; the third checks it.',
      },
      {
        term: 'Lenses in contact',
        kind: 'theorem',
        statement: "**Thin lenses pressed together add their powers:** $$\\frac{1}{f} = \\frac{1}{f_1} + \\frac{1}{f_2},$$ also written $P = P_1 + P_2$ with power $P = 1/f$ in diopters ($\\mathrm{m^{-1}}$). This is exactly how optometrists stack corrections in one eyeglass blank.",
      },
      {
        term: "Thin Lenses: solution protocol",
        kind: "method",
        statement: "**Solve Thin Lenses problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is geometric imaging with mirrors and thin lenses; the working equation is $1/f = 1/p+1/i$, $m = -i/p$, $n_1/p+n_2/i = (n_2-n_1)/r$; every substitution must carry its units so the final unit (centimeters and dimensionless $m$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $f\\sim 10\\ \\text{cm}$ lab lenses; $m\\sim -1$ to $+5$; paraxial, thin, small angles; fix one sign convention once.",
      },
    ],
    figures: [
      {
        caption: 'Ray diagram for a converging lens with $p = 15$ cm and $f = 10$ cm (the worked example). Ray 1, parallel to the axis, refracts through the far focal point $F_2$; ray 2 passes through the lens center undeviated (it meets the thin lens mid-plane at zero height above the axis). The two refracted rays cross on the far side at $i = +30$ cm, locating a real, inverted image of magnification $m = -30/15 = -2.0$. The near focal point $F_1$ and the thin-lens plane are marked.',
        afterConcept: 4,
        svg: `<svg viewBox="0 0 720 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Converging lens ray diagram: parallel ray through focal point and central ray crossing at real image">
  <line x1="40" y1="200" x2="690" y2="200" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
  <path d="M 680 195 L 690 200 L 680 205" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
  <text x="664" y="218" font-size="12" fill="currentColor" opacity="0.6">axis</text>
  <path d="M 355 200 C 366 126, 386 76, 400 60 C 414 76, 434 126, 445 200 C 434 274, 414 324, 400 340 C 386 324, 366 274, 355 200" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="2"/>
  <text x="381" y="42" font-size="13" fill="currentColor">lens (f &gt; 0)</text>
  <line x1="160" y1="130" x2="160" y2="200" stroke="currentColor" stroke-width="4"/>
  <path d="M 151 200 L 160 212 L 169 200" fill="none" stroke="currentColor" stroke-width="3"/>
  <text x="122" y="232" font-size="14" font-weight="bold" fill="currentColor">object</text>
  <line x1="160" y1="130" x2="355" y2="130" stroke="currentColor" stroke-width="1.8"/>
  <text x="230" y="120" font-size="13" fill="currentColor">ray 1</text>
  <line x1="400" y1="130" x2="560" y2="340" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 551 330 L 561 342 L 564 327" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <line x1="160" y1="130" x2="400" y2="200" stroke="currentColor" stroke-width="1.8"/>
  <text x="255" y="152" font-size="13" fill="currentColor">ray 2 (center)</text>
  <line x1="400" y1="200" x2="620" y2="340" stroke="currentColor" stroke-width="2.4"/>
  <path d="M 611 330 L 621 342 L 624 327" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <line x1="560" y1="340" x2="560" y2="200" stroke="currentColor" stroke-width="4"/>
  <path d="M 551 200 L 560 188 L 569 200" fill="none" stroke="currentColor" stroke-width="3"/>
  <text x="520" y="182" font-size="14" font-weight="bold" fill="currentColor">image</text>
  <circle cx="400" cy="200" r="3.5" fill="currentColor"/>
  <line x1="400" y1="150" x2="400" y2="192" stroke="currentColor" stroke-width="1" stroke-dasharray="4 5" opacity="0.5"/>
  <text x="384" y="166" font-size="15" font-weight="bold" fill="currentColor">F₁</text>
  <circle cx="550" cy="200" r="3.5" fill="currentColor"/>
  <text x="546" y="166" font-size="15" font-weight="bold" fill="currentColor">F₂</text>
  <line x1="400" y1="136" x2="400" y2="150" stroke="currentColor" stroke-width="1.2" opacity="0.5"/>
  <line x1="160" y1="90" x2="400" y2="90" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <path d="M 170 86 L 160 90 L 170 94" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <path d="M 390 86 L 400 90 L 390 94" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <text x="266" y="82" font-size="14" fill="currentColor">p = 15 cm</text>
  <line x1="400" y1="90" x2="560" y2="90" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <path d="M 410 86 L 400 90 L 410 94" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <path d="M 550 86 L 560 90 L 550 94" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7"/>
  <text x="436" y="82" font-size="14" fill="currentColor">i = 30 cm</text>
</svg>`,
      },
    ],
    examples: [
      {
        title: 'A projector lens',
        problem: 'A slide 2.0 cm tall sits 15 cm from a converging lens of focal length 10 cm. Locate and size the image.',
        steps: [
          { label: 'Thin-lens equation', text: '$1/i = 1/f - 1/p = 1/10 - 1/15 = (3-2)/30 = 1/30$.' },
          { label: 'Image distance', text: '$i = +30$ cm, on the far side — real, because $i > 0$, and light truly passes through it (that is where the screen goes).' },
          { label: 'Magnification', text: '$m = -i/p = -30/15 = -2.0$: inverted and doubled.' },
          { label: 'Image height', text: '$h\u2019 = mh = (-2.0)(2.0\\ \\mathrm{cm}) = -4.0$ cm — 4.0 cm tall, upside down on the screen.' },
        ],
        result: 'Real inverted image, 4.0 cm tall, 30 cm beyond the lens — hence the slide must be inserted upside down.',
      },
      {
        title: "Thin Lenses: thin-lens numbers",
        problem: "A converging lens has $f = 10\\ \\text{cm}$; an object sits at $p = 50\\ \\text{cm}$. Locate the image via $1/f = 1/p+1/i$.",
        steps: [
          { label: "Solve", text: "$1/i = 1/10-1/50 = 0.08\\ \\text{cm}^{-1}$." },
          { label: "Image", text: "$i \\approx 12.5\\ \\text{cm}$ (real, since $i > 0$)." },
          { label: "Magnification", text: "$m = -i/p \\approx -0.25$." },
        ],
        result: "$i \\approx 12.5\\ \\text{cm}$, $m \\approx -0.25$.",
      },
    ],
    keyTakeaways: [
      'Thin lenses: $1/p + 1/i = 1/f$ with $m = -i/p$ — converging $f>0$, diverging $f<0$.',
      'Real images form on the far side ($i>0$) and can be caught on a screen; virtual ones share the object\u2019s side.',
      'Lenses in contact add powers: $1/f = 1/f_1 + 1/f_2$ (diopters add).',
    ],
    quiz: [
      {
        q: 'An object sits at twice the focal length ($p = 2f$) of a converging lens. The image is:',
        options: ['virtual and upright', 'real, inverted, same size, at $2f$', 'at infinity', 'real, upright, halved'],
        answer: 1,
        explanation: 'Symmetric imaging: $i = 2f$, $m = -1$.',
      },
      {
        q: 'An object is placed inside the focal length of a converging lens. The image is:',
        options: ['real and inverted', 'virtual, upright, enlarged', 'real, upright, reduced', 'at infinity'],
        answer: 1,
        explanation: 'Like a magnifying glass: $p < f$ gives $i < 0$ and $|m| > 1$.',
      },
      {
        q: 'A diverging lens always forms, for any real object, an image that is:',
        options: ['real and inverted', 'virtual, upright, reduced', 'real, enlarged', 'virtual, inverted, enlarged'],
        answer: 1,
        explanation: 'With $f < 0$, $i$ is negative and $|i| < p$ for every $p$: virtual, upright, smaller.',
      },
      {
        q: 'Two thin lenses in contact have $f_1 = 20$ cm and $f_2 = +5.0$ cm (the second converging, the first — check the sign!). Taking both converging, $f_1 = 20$ cm and $f_2 = 5.0$ cm, the combination focal length is:',
        options: ['25 cm', '12.5 cm', '4.0 cm', '100 cm'],
        answer: 2,
        explanation: '$1/f = 1/20 + 1/5 = 5/20$, so $f = 4.0$ cm: powers add, focal lengths do not.',
      },
    ],
  },
  // ------------------------------------------------------------------ 34-5
  {
    sectionId: 'hall-ch34-s5',
    readingTime: 7,
    intro: "Instruments are lenses arranged with intent. The eye brings the world onto the retina by accommodation; a simple magnifier lets the eye relax while viewing virtual images up close; the microscope and telescope chain two lenses to stretch angular magnification across nine orders of magnitude in scale — from bacteria to galaxies.",
    objectives: [
      'Model the eye: retina as screen, near point, accommodation, and corrective lenses',
      'Compute simple magnification $m = (25\\ \\mathrm{cm})/f$ of a magnifier',
      'Compute angular magnifications of compound microscope and refracting telescope',
    ],
    concepts: [
      {
        term: 'The eye',
        kind: 'definition',
        statement: "**A converging lens (cornea plus variable lens) forms a real, inverted image on the retina.** *Accommodation* — tensing the ciliary muscles — shortens the focal length to focus near objects. The *near point* is the closest sharp focus (about 25 cm in a young adult); the *far point* is infinity for a normal eye.",
      },
      {
        term: 'Correcting the eye',
        kind: 'method',
        statement: '**A diverging lens is prescribed for a myopic (nearsighted) eye whose far point is finite:** the lens images distant objects at the far point. **A converging lens is prescribed for a hyperopic (farsighted) eye whose near point has receded:** it images the near point onto a comfortable closer distance. The power in diopters is just $1/f$.',
      },
      {
        term: 'Simple magnifier',
        kind: 'law',
        statement: "**A single converging lens used with the image at the viewer\u2019s near point gives** $$M = \\frac{25\\ \\mathrm{cm}}{f}$$ **angular magnification** (25 cm the reference near point). The lens lets the object sit at $f$ or closer while the eye focuses comfortably, enlarging the angle it subtends.",
      },
      {
        term: 'Compound microscope',
        kind: 'definition',
        statement: "**Objective (short $f_\\text{ob}$) makes a real enlarged image of a near object; the eyepiece magnifies that image.** With the tube image at the near point, $$M = -\\frac{s}{f_\\text{ob}}\\cdot\\frac{25\\ \\mathrm{cm}}{f_\\text{ey}},$$ with $s \\approx$ tube length (17 cm standard) and $P = 25$ cm the near-point distance.",
      },
      {
        term: 'Refracting telescope',
        kind: 'definition',
        statement: "**Objective of long focal length forms a real image of a distant object near its focal plane; the eyepiece magnifies it:** $$M = -\\frac{f_\\text{ob}}{f_\\text{ey}}.$$ The image is inverted, and angular magnification is simply the ratio of focal lengths. Large $f_\\text{ob}$ is why observatory refractors were (and are) long tubes.",
      },
    ],
    examples: [
      {
        title: 'A backyard telescope',
        problem: 'A refracting telescope has an objective of focal length 900 mm and an eyepiece of 25 mm. Find its angular magnification, and the magnification of a microscope with $f_\\text{ob} = 0.50$ cm, tube distance 17 cm, and $f_\\text{ey} = 2.5$ cm.',
        steps: [
          { label: 'Telescope', text: '$M = -f_\\text{ob}/f_\\text{ey} = -(900\\ \\mathrm{mm})/(25\\ \\mathrm{mm}) = -36$.' },
          { label: 'Interpret', text: 'The minus sign: the sky appears inverted (astronomers shrug; a correcting prism fixes it for terrestrial use).' },
          { label: 'Microscope', text: '$M = -(s/f_\\text{ob})(25\\ \\mathrm{cm}/f_\\text{ey}) = -(17/0.50)(25/2.5)$.' },
          { label: 'Evaluate', text: '$M = -(34)(10) = -340$: the object appears 340 times larger in angle.' },
        ],
        result: 'Telescope $M = -36$; microscope $M = -340$ — both inverted.',
      },
      {
        title: "Optical Instruments: thin-lens numbers",
        problem: "A converging lens has $f = 10\\ \\text{cm}$; an object sits at $p = 30\\ \\text{cm}$. Locate the image via $1/f = 1/p+1/i$.",
        steps: [
          { label: "Solve", text: "$1/i = 1/10-1/30 = 0.0667\\ \\text{cm}^{-1}$." },
          { label: "Image", text: "$i \\approx 15\\ \\text{cm}$ (real, since $i > 0$)." },
          { label: "Magnification", text: "$m = -i/p \\approx -0.5$." },
        ],
        result: "$i \\approx 15\\ \\text{cm}$, $m \\approx -0.5$.",
      },
    ],
    keyTakeaways: [
      'The eye is a variable-f converging system imaging onto the retina; near point ≈ 25 cm, far point ∞ when normal.',
      'Diverging lenses correct myopia, converging lenses correct hyperopia; magnifiers give $M = 25\\ \\mathrm{cm}/f$.',
      'Microscope: $M = -(s/f_\\text{ob})(25\\,\\mathrm{cm}/f_\\text{ey})$; telescope: $M = -f_\\text{ob}/f_\\text{ey}$ — focal-length ratios do all the work.',
    ],
    quiz: [
      {
        q: 'The image formed on the retina by a normal eye is:',
        options: ['virtual and upright', 'real and inverted', 'real and upright', 'virtual and inverted'],
        answer: 1,
        explanation: 'The eye\u2019s lens converges real light through the retina: $m < 0$; the brain re-inverts it.',
      },
      {
        q: 'A farsighted (hyperopic) eye most needs:',
        options: ['a diverging corrective lens', 'a converging corrective lens', 'no lens can help', 'a cylindrical lens'],
        answer: 1,
        explanation: 'Hyperopia means the near point is too far out; converging power brings close objects to focus on the retina.',
      },
      {
        q: 'A simple magnifier of focal length 5.0 cm gives (near point 25 cm) an angular magnification of about:',
        options: ['2', '5', '25', '0.2'],
        answer: 1,
        explanation: '$M = 25\\ \\mathrm{cm}/f = 25/5 = 5$.',
      },
      {
        q: 'To increase the angular magnification of a refracting telescope, one should:',
        options: ['shorten the objective focal length', 'lengthen the objective focal length or shorten the eyepiece focal length', 'increase the eyepiece focal length', 'increase the tube diameter'],
        answer: 1,
        explanation: '$M = -f_\\text{ob}/f_\\text{ey}$: maximize the ratio. (Tube diameter sets light-gathering, not magnification.)',
      },
    ],
  },
  // ------------------------------------------------------------------ 34-6
  {
    sectionId: 'hall-ch34-s6',
    readingTime: 6,
    intro: "The formulas of this chapter have been used freely; now they are earned. The three proofs — plane-mirror equality of distances, the spherical-mirror equation, and the single refracting surface — all run on the same engine: ray geometry plus one small-angle approximation. Checking exactly how good that approximation is tells us when spherical optics is trustworthy and when it fails.",
    objectives: [
      'Prove $i = -p$ for a plane mirror from ray geometry',
      'Derive the spherical mirror equation from the geometry of a single reflected ray',
      'Derive $n_1/p + n_2/i = (n_2-n_1)/r$ for a refracting surface, and quantify the small-angle approximation',
    ],
    concepts: [
      {
        term: 'Plane mirror proof',
        kind: 'theorem',
        statement: "**In similar triangles formed by object, image and mirror, the two perpendicular distances are equal.** The right triangles from object tip and image tip to any reflection point share a side along the mirror and equal base angles (law of reflection), so $|i| = p$; the image is behind the mirror ($i < 0$) because the reflected rays diverge as if from there.",
      },
      {
        term: 'Spherical mirror equation derivation',
        kind: 'method',
        statement: "**Take a ray from the object tip through the center of curvature C: it reflects back on itself and passes through the image tip.** A second ray to the mirror vertex reflects symmetrically. Comparing triangles and using the exterior-angle relation $\\beta = \\alpha + \\theta$, $\\gamma = \\alpha + 2\\theta$, the small-angle limit yields $1/p + 1/i = 2/r = 1/f$.",
        detail: 'The algebra: eliminating $\\theta$ between $\\alpha + 2\\beta = \\gamma + 2\\delta$ style angle sums and the arc relation $\\tan\\alpha \\approx \\alpha$ etc. gives the result. Its validity is the small-angle assumption — see the third concept.',
      },
      {
        term: 'Small-angle approximation',
        kind: 'method',
        statement: "**The proofs use $\\sin\\theta \\approx \\tan\\theta \\approx \\theta$ (in radians).** The table of errors: $\\theta = 10^\\circ$: sine 0.02% low, tangent 0.1% low; $\\theta = 20^\\circ$: 0.01% and 0.2%; $\\theta = 30^\\circ$: 0.07% and 1.0%; $\\theta = 45^\\circ$: 0.35% and 5.3%. Rays must stay near the axis — paraxial optics — for the equations to hold.",
      },
      {
        term: 'Spherical aberration',
        kind: 'insight',
        statement: '**When paraxial fails, parallel rays far from the axis reflect inside the focal point.** For a mirror of radius 20 cm, rays at height 1.0 cm cross the axis 9.99 cm from the vertex (deficit 0.01 cm), at 5.0 cm height 9.67 cm, at 8.0 cm height 9.09 cm — a blur, not a point. Parabolic mirrors (and aspheric lenses) fix this exactly, which is why telescopes are parabolas.',
      },
      {
        term: "Three Proofs: solution protocol",
        kind: "method",
        statement: "**Solve Three Proofs problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is geometric imaging with mirrors and thin lenses; the working equation is $1/f = 1/p+1/i$, $m = -i/p$, $n_1/p+n_2/i = (n_2-n_1)/r$; every substitution must carry its units so the final unit (centimeters and dimensionless $m$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $f\\sim 10\\ \\text{cm}$ lab lenses; $m\\sim -1$ to $+5$; paraxial, thin, small angles; fix one sign convention once.",
      },
    ],
    examples: [
      {
        title: 'How good is the paraxial approximation?',
        problem: 'For a spherical mirror of radius 20 cm ($f = 10$ cm), find where a ray parallel to the axis, hitting at height $h$, crosses the axis after reflection, for $h = 1.0$, 5.0 and 8.0 cm.',
        steps: [
          { label: 'Ray geometry', text: 'A parallel ray at height $h$ strikes the mirror where $r^2 = h^2 + s^2$ ($s$ measured along the axis from the center of curvature). The reflected ray crosses the axis at $x = r - r^2/(2s)$ from the vertex.' },
          { label: 'Small h', text: '$h = 1.0$ cm: $s = \\sqrt{400-1} = 19.975$ cm, $x = 20 - 400/(2\\times 19.975) = 20 - 10.013 = 9.99$ cm — only 0.01 cm inside F.' },
          { label: 'Moderate h', text: '$h = 5.0$ cm: $s = \\sqrt{400-25} = 19.36$ cm, $x = 20 - 400/38.72 = 9.67$ cm; the deficit is 0.33 cm.' },
          { label: 'Large h', text: '$h = 8.0$ cm: $s = \\sqrt{400-64} = 18.33$ cm, $x = 20 - 400/36.67 = 9.09$ cm — nearly a centimeter inside the focal point: spherical aberration in action.' },
        ],
        result: 'Crossing points 9.99, 9.67, 9.09 cm: only near-axis rays honor $f = r/2$.',
      },
      {
        title: "Three Proofs: thin-lens numbers",
        problem: "A converging lens has $f = 10\\ \\text{cm}$; an object sits at $p = 40\\ \\text{cm}$. Locate the image via $1/f = 1/p+1/i$.",
        steps: [
          { label: "Solve", text: "$1/i = 1/10-1/40 = 0.075\\ \\text{cm}^{-1}$." },
          { label: "Image", text: "$i \\approx 13.3\\ \\text{cm}$ (real, since $i > 0$)." },
          { label: "Magnification", text: "$m = -i/p \\approx -0.333$." },
        ],
        result: "$i \\approx 13.3\\ \\text{cm}$, $m \\approx -0.333$.",
      },
    ],
    keyTakeaways: [
      'All three imaging equations follow from ray geometry plus the law of reflection or Snell\u2019s law.',
      'The derivations assume $\\sin\\theta \\approx \\tan\\theta \\approx \\theta$ (radians) — excellent below about 10°, poor by 45°.',
      'Off-axis rays miss the focus (spherical aberration); parabolic surfaces fix mirrors exactly.',
    ],
    quiz: [
      {
        q: 'At $20^\\circ$, the small-angle approximation $\\tan\\theta \\approx \\theta$ is off by about:',
        options: ['0.001%', '0.2%', '5%', '20%'],
        answer: 1,
        explanation: '$\\tan 20^\\circ$ is 0.2% below $20^\\circ$ in radians; $\\sin 20^\\circ$ is within 0.01%.',
      },
      {
        q: 'In the mirror-equation derivation, the relation between angles at the mirror is ultimately a statement of:',
        options: ["Snell's law", "the exterior-angle theorem for triangles plus the law of reflection", "energy conservation", "the small-angle approximation alone"],
        answer: 1,
        explanation: 'The angles $\\alpha, \\beta, \\gamma, \\theta$ are tied by triangle exterior angles; reflection sets the incidence equal to the reflection angle.',
      },
      {
        q: 'Parallel rays striking a spherical concave mirror far from the axis reflect to points:',
        options: ['exactly at F', 'outside F (farther from the mirror)', 'inside F (closer to the mirror)', 'back parallel to the axis'],
        answer: 2,
        explanation: 'Spherical aberration: marginal rays cross the axis short of the paraxial focus — a paraboloid is needed for exact focusing.',
      },
      {
        q: 'The plane-mirror proof that $|i| = p$ mostly relies on:',
        options: ['conservation of energy', 'similar right triangles and equal reflection angles', "Snell's law at the surface", 'the small-angle approximation'],
        answer: 1,
        explanation: 'Two right triangles sharing the mirror-side segment have equal angles, hence equal legs.',
      },
    ],
  },
]
