import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE FEYNMAN LECTURES ON PHYSICS — MASTER PHYSICS LIBRARY
// Chapter 8: Optics and Light
// Source: Feynman, Leighton & Sands, Vol. I, Lectures 26–33 and 35–36
//   26 Optics: The Principle of Least Time  ·  27 Geometrical Optics
//   28 Electromagnetic Radiation  ·  29 Interference  ·  30 Diffraction
//   31 The Origin of the Refractive Index
//   32 Radiation Damping. Light Scattering  ·  33 Polarization
//   35 Color Vision  ·  36 Mechanisms of Seeing
// (PDF pp. 452–587 and 610–653 of the New Millennium Edition.)
// All worked-example numbers are the book’s own, or recomputations of them.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh8Content: SectionContent[] = [
  // ------------------------------------------------------------------ 8.1
  {
    sectionId: 'phys-ch8-s1',
    readingTime: 10,
    intro: 'Geometrical optics is the first approximation of light: wavelengths so small, and photon energies so feeble, compared with the apparatus and the detector, that light can be treated as rays that simply go from place to place. Within this "chapter we shall have to unlearn" (Feynman’s own warning), one idea organizes everything — out of all possible paths from A to B, light takes the one that takes the least time. From that single statement fall the law of reflection, Snell’s law, the shapes of lenses and telescope mirrors, and the mirage on a hot road.',
    objectives: [
      'Locate geometrical optics among the three approximation regimes of the electromagnetic spectrum',
      'State and apply Snell’s law $\\sin\\theta_i = n\\sin\\theta_r$, and contrast Ptolemy’s table with Snell’s rule',
      'Derive the law of reflection and Snell’s law from Fermat’s principle of least time',
      'Design focusing systems — lens, ellipsoidal mirror, paraboloidal mirror — as equal-time devices',
      'Explain the precise (stationary-time) statement of the principle and its quantum-mechanical origin',
    ],
    concepts: [
      {
        term: 'The spectrum and its approximation regimes',
        kind: 'insight',
        statement: 'Light is one small band of a vast spectrum distinguished by wavelength — from broadcast radiowaves near 500 m through short waves, millimeter waves, infrared, the visible, ultraviolet (x-rays begin around $10^{-8}$ m), and on to $\\gamma$-rays.',
        detail: 'Three useful regions of approximation exist: geometrical optics (wavelength small compared with the equipment, photon energy small compared with sensitivity), wave optics (wavelength comparable to the equipment, photons still negligible — the regime of Sections 8.3 and 8.4), and the simple photon picture at very short wavelengths (Chapter 15). The names and boundaries are approximate — nature provides no sharp edges — and geometrical optics itself is a chapter we must partly unlearn.',
      },
      {
        term: 'Straight lines and non-interference of rays',
        kind: 'definition',
        statement: 'Light goes in straight lines when nothing is in the way, and rays criss-crossing in a room do not disturb one another.',
        detail: 'The second fact was once a powerful argument against the corpuscular theory — Huygens asked how arrows could fly through arrows — though, as Feynman notes, one could always say light is made of arrows that pass through each other. Both facts define the ray picture in which geometrical optics is done.',
      },
      {
        term: 'Reflection and refraction: Ptolemy to Snell',
        kind: 'law',
        statement: 'At a mirror the angles to the normal are equal, $\\theta_i = \\theta_r$; passing from air into water the ray bends toward the normal according to Snell’s law (1621), $$\\sin\\theta_i = n\\sin\\theta_r,$$ with $n \\approx 1.33$ for water.',
        detail: 'Ptolemy tabulated air–water angles in 140 A.D. — one of the few experimental tables in all of Greek physics, though the values were interpolated from a few measurements (they fit a parabola perfectly). The rule stayed hidden for nearly fifteen centuries. Note how science actually progressed: observation, then a table of numbers, then the law — and only then a way of thinking that makes the law evident.',
      },
      {
        term: 'Fermat’s principle of least time',
        kind: 'law',
        statement: 'Out of all possible paths from one point to another, **light takes the path which requires the shortest time** (Fermat, about 1650).',
        detail: 'For reflection this reduces to Hero of Alexandria’s older rule of shortest distance, which inspired Fermat to try *time* instead — because in refraction the light plainly does not take the shortest distance. The principle automatically contains both straight-line propagation (in a uniform medium) and the mirror law, so understanding grows: one statement now organizes two phenomena.',
      },
      {
        term: 'Snell’s law from least time: the lifeguard problem',
        kind: 'method',
        statement: 'Demanding that a small displacement of the crossing point produce no first-order change in travel time gives $EC = n\\cdot XF$ — the distance saved on land equals $n$ times the distance lost in the water — which is exactly $\\sin\\theta_i = n\\sin\\theta_r$.',
        detail: 'It is the problem of a lifeguard at $A$ who runs fast on land and swims slowly, rescuing a swimmer at $B$: a straight line is *not* best. At the optimal crossing point the time gained by shortening the land leg equals the time lost lengthening the water leg; converting those little lengths to angles reproduces Snell. The same first-order-zero argument proves the mirror law in one line.',
      },
      {
        term: 'Focusing means equal times',
        kind: 'method',
        statement: 'To bring **all** the light from $P$ to $P{\\,}{\\!}^{\\prime}$, arrange the apparatus so that the travel time is the same on every path — otherwise light would select the fastest and abandon the rest.',
        detail: 'A converging lens is a piece of glass shaped so that the extra thickness on the axis exactly compensates the longer air path of an oblique ray. A mirror version needs only equal *distances*: $r_1 + r_2$ constant is the definition of an ellipse, so light from one focus of an ellipsoidal mirror converges at the other. For a star at infinity, incoming rays are parallel and the equal-time surface is a parabola — the design of the great 200-inch Palomar telescope mirror.',
      },
      {
        term: 'Least time in action: sunsets, mirages, reciprocity',
        kind: 'insight',
        statement: 'Because the atmosphere is dense at the bottom and light travels slower in dense air, sunlight bends to spend less time low: **when we see the sun touch the horizon it is already below it** — and hot air over a road, being thin and fast, bends sky light up into the eye as a mirage of water.',
        detail: 'A parallel-sided glass block offsets the beam sideways without bending it — the time saved inside cancels the extra air time on exit. And from least time follows reciprocity: if the least-time path from $A$ to $B$ is traversed backwards, it is still the least-time path, so any optical arrangement works equally in reverse.',
      },
      {
        term: 'A real principle predicts new things',
        kind: 'insight',
        statement: 'Least time predicts that relative indexes compose: $n_{23} = n_{13}/n_{12}$ — the water-to-glass index follows from the air-to-water and air-to-glass indexes — and, far more dramatically, that **the speed of light in water is less than in air**, by exactly the factor $n$.',
        detail: 'Snell’s law alone provides no basis for either prediction; it merely summarizes angles. The second one is a different *kind* of statement entirely — a claim about speeds derived from nothing but angle measurements — and experiment confirms it. This is what separates a physical principle from a formula.',
      },
      {
        term: 'Stationary time, and how light "smells" the path',
        kind: 'insight',
        statement: 'The correct statement is **not** minimum but stationary: nearby paths take almost exactly the same time (the first-order change vanishes); and in the quantum picture light actually does "check" the nearby paths — with a reach of about one wavelength.',
        detail: 'With 3-cm radiowaves through a slit, closing the slit to a narrow crack sends *more* radiation to an off-axis detector, because a wide slit lets the waves compare many paths and refuse the slow ones. The full machinery (Chapter 15, and Section 26-6 of the lectures): the probability of a photon arriving is the square of a sum of little complex arrows, one per path, each rotated by an angle proportional to that path’s time. Where the times vary slowly — near the stationary path — the arrows line up and add; far away they curl into a spiral and cancel. Hiding the outer parts of a mirror barely dims the reflection, because only the arrows near the stationary path ever mattered.',
      },
    ],
    examples: [
      {
        title: 'Checking Ptolemy against Snell',
        problem: 'Ptolemy’s table lists a ray entering water at $60^\\circ$ in air as refracted to $40\\tfrac{1}{2}^\\circ$. Does Snell’s law with $n = 1.33$ reproduce it?',
        steps: [
          { label: 'Step 1: Apply Snell', text: '$\\sin\\theta_r = \\sin 60^\\circ/n = 0.8660/1.33 = 0.651$.' },
          { label: 'Step 2: Take the inverse sine', text: '$\\theta_r = 40.6^\\circ$, which rounds to Ptolemy’s $40\\tfrac{1}{2}^\\circ$.' },
          { label: 'Step 3: Test the consistency the other way', text: 'From Ptolemy’s numbers directly: $n = \\sin 60^\\circ/\\sin 40.5^\\circ = 0.8660/0.6494 = 1.334$ — the same index, as it must be for a law of nature.' },
          { label: 'Step 4: Compare at another angle', text: 'Ptolemy’s $30^\\circ \\to 22\\tfrac{1}{2}^\\circ$ gives $n = 0.5000/0.3827 = 1.31$, while Snell predicts $22^\\circ$: the ancient table, interpolated onto a parabola, drifts by about half a degree at the ends — which is exactly how Snell’s rule outclassed it.' },
        ],
        result: 'Snell’s law with a single constant $n = 1.33$ reproduces the measured pairs — one number now summarizes the whole table.',
      },
      {
        title: 'Deriving Snell’s law from least time',
        problem: 'A source $A$ sits in air above a water surface; a detector $B$ lies in the water. Show that the least-time crossing point satisfies $\\sin\\theta_i = n\\sin\\theta_r$, where light in the water travels at $c/n$.',
        steps: [
          { label: 'Step 1: Set up the displacement', text: 'Let $C$ be the crossing point and $X$ a point displaced slightly from it along the surface. Moving from $X$ to $C$ shortens the air leg by $EC$ (dropping a perpendicular from $X$ to the ray through $C$) and lengthens the water leg by $XF$.' },
          { label: 'Step 2: Demand no first-order change', text: 'At the true minimum the time gained going $X \\to C$ equals the time lost: $EC/v_{\\mathrm{air}} = XF/v_{\\mathrm{water}}$, i.e. $EC = (v_{\\mathrm{air}}/v_{\\mathrm{water}})XF = n\\cdot XF$.' },
          { label: 'Step 3: Convert lengths to angles', text: 'Both $EC$ and $XF$ share the hypotenuse $XC$: $EC = XC\\sin\\theta_i$ and $XF = XC\\sin\\theta_r$ (with $X$ near $C$ the angles are those of the full path).' },
          { label: 'Step 4: Cancel and conclude', text: '$XC\\sin\\theta_i = n\\,XC\\sin\\theta_r$, so $\\sin\\theta_i = n\\sin\\theta_r$. The mirror law follows identically with both speeds equal.' },
        ],
        result: 'Fermat’s principle contains Snell (and reflection) exactly; the index $n$ is revealed as the ratio of speeds, $v_{\\mathrm{air}}/v_{\\mathrm{water}}$.',
      },
      {
        title: 'Composing indexes',
        problem: 'The air-to-water index is $n_{12} = 4/3$ and the air-to-glass index is $n_{13} = 3/2$. What is the water-to-glass index $n_{23}$, and what does the result mean?',
        steps: [
          { label: 'Step 1: Write each index as a speed ratio', text: '$n_{12} = v_1/v_2$, $n_{13} = v_1/v_3$, $n_{23} = v_2/v_3$, where $v_1, v_2, v_3$ are the speeds of light in air, water and glass.' },
          { label: 'Step 2: Eliminate the air', text: 'The common $v_1$ cancels: $$n_{23} = \\frac{v_2}{v_3} = \\frac{v_1/v_3}{v_1/v_2} = \\frac{n_{13}}{n_{12}}.$$' },
          { label: 'Step 3: Insert the numbers', text: '$n_{23} = (3/2)/(4/3) = 9/8 = 1.125$ — light passes from water to glass far more gently than from air to glass.' },
          { label: 'Step 4: Appreciate the prediction', text: 'Snell’s law could never produce this relation by itself; least time derives it because every index is a ratio of speeds to a common standard (vacuum). The agreement of such predictions with experiment was a very strong argument for Fermat\u2019s idea.' },
        ],
        result: '$n_{23} = n_{13}/n_{12} = 9/8$; relative indexes compose, and each material can be assigned a single absolute index $n_i = c/v_i$.',
      },
    ],
    keyTakeaways: [
      'Geometrical optics is the short-wavelength, weak-photon approximation: light as rays that travel straight and do not disturb one another.',
      'Ptolemy tabulated refraction in 140 A.D.; Snell found $\\sin\\theta_i = n\\sin\\theta_r$ in 1621 — and Fermat made it inevitable: light takes the path of least time.',
      'The least-time machinery is the vanishing first-order change: move the crossing point slightly and the time gained on land equals $n$ times the time lost in water.',
      'Focusing is an equal-time arrangement — a lens (glass thickness compensating air path), an ellipse ($r_1 + r_2$ constant), or a parabola for starlight (the 200-inch Palomar mirror).',
      'Least time correctly predicts both the composition of indexes, $n_{23} = n_{13}/n_{12}$, and the slower speed of light in water.',
      'The precise statement is stationary, not minimal, time; quantum mechanics explains it — photons add probability amplitudes (little arrows rotated by the travel time), which cancel everywhere except near the stationary path, over a reach of about one wavelength.',
      'Applications everywhere: the sun is already below the horizon when it appears to touch it, hot-road mirages are upward-bent sky light, and reciprocity (any path works backwards) is immediate.',
    ],
    quiz: [
      {
        q: 'Why did Fermat propose least time rather than least distance for refraction?',
        options: [
          'Because distances are harder to measure than times',
          'Because light in water visibly travels a shorter distance than it would in air',
          'Because the bent path in refraction is plainly longer than the straight line, yet is the one light chooses',
          'Because Hero of Alexandria had already proved distance minimization wrong',
        ],
        answer: 2,
        explanation: 'For a mirror, shortest distance already gives the right answer (Hero). In refraction the true path bends and is longer than the straight line — so the quantity nature minimizes must be time, in which the slower speed in water counts against the water leg.',
      },
      {
        q: 'To focus all the light from one point to another, an optical system must be arranged so that:',
        options: [
          'every path has the same geometrical length',
          'every path is a straight line',
          'the travel time is exactly the same on every path',
          'the shortest path is blocked, forcing the light to converge',
        ],
        answer: 2,
        explanation: 'If one path were faster, light would take it and abandon the others; the only way light willingly takes many adjacent paths is for their times to be equal. In air this means equal distances (elliptical mirror); with glass in the way, thickness compensates air path (lens).',
      },
      {
        q: 'With 3-cm radiowaves passing a slit, why does narrowing the slit increase the radiation reaching an off-axis detector?',
        options: [
          'The slit edges radiate extra waves',
          'A narrow slit leaves only one path, so the wave can no longer "compare" nearby paths and reject the slow ones',
          'Narrow slits polarize the waves, focusing them sideways',
          'The detector becomes more sensitive when the beam is weaker',
        ],
        answer: 1,
        explanation: 'Light checks the neighboring paths — within about a wavelength — and refuses those of differing time. Squeeze the slit to a crack and there is nothing to check: the single remaining path is taken, and more energy arrives off-axis. This is the wave nature leaking through the ray approximation.',
      },
      {
        q: 'The air-to-water index is $4/3$ and the air-to-glass index is $3/2$. The water-to-glass index is:',
        options: [`$2$`, `$9/8$`, `$1/2$`, `$17/12$`],
        answer: 1,
        explanation: 'Each index is a ratio of speeds, so the common factor (air) cancels: $n_{23} = n_{13}/n_{12} = (3/2)/(4/3) = 9/8$. Snell’s law alone cannot produce this; least time can.',
      },
      {
        q: 'When we watch the sun set, the true position of the sun is:',
        options: [
          'Exactly where we see it',
          'Already below the horizon, because light curves to spend less time in the dense lower air',
          'Above the horizon, because the atmosphere magnifies the image',
          'Displaced sideways by the Earth\u2019s rotation during the light-travel time',
        ],
        answer: 1,
        explanation: 'Dense air is slow air; the least-time path dips into the thin upper air and arrives at the eye from a shallower angle than it travelled. Near the horizon the apparent sun sits about half a degree higher than the true one — its whole disc still visible after it has geometrically set.',
      },
    ],
  },

  // ------------------------------------------------------------------ 8.2
  {
    sectionId: 'phys-ch8-s2',
    readingTime: 11,
    intro: 'Now the principle is put to work: what shapes actually focus light, and what do simple instruments do? The whole of elementary lens theory needs one piece of geometry (the small sagitta $\\Delta \\approx h^2/2s$) plus the equal-time idea — out come the surface formula, the lens equation, magnification, and the recipe for chasing images through any number of lenses. And just as the machinery starts to feel perfect, we hit the wall: ray optics cannot beat the wavelength of the light itself.',
    objectives: [
      'Use the sagitta relation $\\Delta \\approx h^2/2s$ to derive the refraction formula for a single spherical surface',
      'Compute focal lengths of surfaces and thin lenses, and work image problems with $1/s + 1/s{\\,}{\\!}^{\\prime} = 1/f$ and $xx{\\,}{\\!}^{\\prime} = f^2$',
      'Determine magnification and distinguish real from virtual images',
      'Trace a compound system through successive surfaces and state the principal-plane theorem',
      'Explain spherical and chromatic aberration, and derive the wavelength limit of resolution',
    ],
    concepts: [
      {
        term: 'The one-piece geometry: sagitta',
        kind: 'notation',
        statement: 'For a triangle with small altitude $h$ and long base $d$, the diagonal exceeds the base by $$\\Delta = s - d \\approx \\frac{h^2}{2s},$$ obtained from $(s-d)(s+d) = h^2$ with $s + d \\approx 2s$.',
        detail: 'This single relation — the excess length of a slanted path over a straight one — is all the geometry needed to derive image formation by curved surfaces, because equal-time arguments always reduce to comparing such excesses.',
      },
      {
        term: 'Focusing by a single spherical surface',
        kind: 'theorem',
        statement: 'A spherical surface of radius $R$ between air and glass (speeds $1$ and $1/n$) focuses paraxial rays from object distance $s$ to image distance $s{\\,}{\\!}^{\\prime}$ when $$\\frac{1}{s} + \\frac{n}{s{\\,}{\\!}^{\\prime}} = \\frac{n-1}{R}.$$',
        detail: 'The equal-time balance: excess time on the two air and glass legs, $h^2/2s + nh^2/2s{\\,}{\\!}^{\\prime}$, must be paid for by the delay in the extra glass thickness $VQ = h^2/2R$, i.e. by $(n-1)h^2/2R$. The exact surface for perfect focusing is a complicated fourth-degree curve; the sphere is the compromise that is easy to grind and exact for rays near the axis.',
      },
      {
        term: 'Focal lengths of a surface',
        kind: 'law',
        statement: 'For the single surface, $f{\\,}{\\!}^{\\prime} = Rn/(n-1)$ on the glass side and $f = R/(n-1)$ on the air side — and in **every** optical system, the two focal lengths are in the ratio of the indices of the media in which they focus: $f{\\,}{\\!}^{\\prime}/n{\\,}{\\!}^{\\prime} = f/n$.',
        detail: 'The same lens focuses not just one pair of points but all pairs satisfying $1/s + n/s{\\,}{\\!}^{\\prime} = \\text{const}$: as the object recedes, the image creeps in, and at $s \\to \\infty$ it lands at $f{\\,}{\\!}^{\\prime}$. Measuring a focal length is far easier than measuring a curvature and an index, so one writes $1/s + n/s{\\,}{\\!}^{\\prime} = 1/f$ in practice.',
      },
      {
        term: 'Real and virtual images; apparent depth',
        kind: 'definition',
        statement: 'If light really converges to a point, the image is **real**; if it merely appears to diverge from a point behind the surface, the image is **virtual** — which is what a negative $s{\\,}{\\!}^{\\prime}$ in the formula means.',
        detail: 'For a flat interface ($R \\to \\infty$): $1/s + n/s{\\,}{\\!}^{\\prime} = 0$, so $s{\\,}{\\!}^{\\prime} = -ns$: viewed from above, the bottom of a swimming pool appears at $3/4$ of its true depth (the reciprocal of water’s $n = 4/3$), and a fish seen from the air is not where it looks.',
      },
      {
        term: 'The thin lens and its maker’s equation',
        kind: 'theorem',
        statement: 'For a lens of index $n$ with surface radii $R_1$ and $R_2$, thin enough that the thickness drops out, $$\\frac{1}{f} = (n-1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right), \\qquad \\frac{1}{s} + \\frac{1}{s{\\,}{\\!}^{\\prime}} = \\frac{1}{f}.$$',
        detail: 'The derivation passes the ray through surface one (glass forming an intermediate image), then treats that image as the object for surface two — through five or seventy-five surfaces the same game works, one surface at a time. Because the lens starts and ends in the same medium (air), the two focal lengths come out equal.',
      },
      {
        term: 'Magnification and Newton’s form',
        kind: 'law',
        statement: 'Measuring object and image distances $x$ and $x{\\,}{\\!}^{\\prime}$ from the focal points, everything about a thin lens is $$xx{\\,}{\\!}^{\\prime} = f^2, \\qquad \\frac{y{\\,}{\\!}^{\\prime}}{y} = \\frac{x{\\,}{\\!}^{\\prime}}{f} = \\frac{f}{x}.$$',
        detail: 'Two rays suffice to locate any image: a ray in parallel to the axis passes through the far focus, and a ray through the near focus emerges parallel — two similar triangles then give both relations. The formulas show $s$ and $s{\\,}{\\!}^{\\prime}$ moving together, and the symmetric unit magnification case sits at $s = s{\\,}{\\!}^{\\prime} = 2f$.',
      },
      {
        term: 'Compound systems and principal planes',
        kind: 'theorem',
        statement: 'Any sequence of lenses and mirrors that starts and ends in the same medium behaves, in total, like a single thin lens situated at a pair of **principal planes**: parallel light entering one way focuses a distance $f$ beyond the second plane, and vice versa.',
        detail: 'The working method is to find each lens’s image of the previous one’s image, all along the line. That the final description of even a complicated instrument collapses to two planes and one focal length is the remarkable part. This is how a telescope (long focus plus short-focus eyepiece) or a microscope (short-focus objective feeding an magnifier) is analyzed — and it is why the 200-inch Palomar mirror’s 5-metre focal length, not its diameter, sets where the instruments sit.',
      },
      {
        term: 'Aberrations',
        kind: 'definition',
        statement: 'Real lenses fail to focus perfectly: **spherical aberration** because the sphere is only the paraxial stand-in for the right curve, **chromatic aberration** because the index — hence the focal length — differs for each color, and off-axis errors for objects far from the axis.',
        detail: 'Designers fight back by reshaping surfaces for a chosen object distance and by stacking lenses whose aberrations oppose each other. The eye solved the chromatic problem differently: its cornea is flatter than a sphere in just the way that reduces spherical aberration, and the lens is layered (index 1.40 inside, 1.38 outside) to avoid needing so much curvature.',
      },
      {
        term: 'The wall: resolving power',
        kind: 'theorem',
        statement: 'Two point sources are resolved only if the arrival-time difference of the extreme rays from one, evaluated at the other’s image, exceeds one period of the light: $t_2 - t_1 > 1/\\nu$ — equivalent to $$D > \\frac{\\lambda}{n\\sin\\theta}$$ for object detail of size $D$ in a medium of index $n$, and to the angle $\\theta \\approx \\lambda/L$ for a telescope of aperture $L$.',
        detail: 'Not even a perfect system can beat this, because least time is only an approximation: beyond a certain point, equalizing the ray times further changes nothing observable. One can build 10,000-diameter magnification, but two points closer than about a wavelength refuse to come apart — a bacterium’s spots remain single. For a circular aperture the factor is 1.22, a refinement Feynman calls a little pedantic next to the roughness of Rayleigh’s criterion itself.',
      },
    ],
    examples: [
      {
        title: 'The swimming pool’s honest depth',
        problem: 'Looking straight down into a pool whose bottom is 3.00 m below the surface, at what depth does the bottom appear to be? (Water: $n = 4/3$.)',
        steps: [
          { label: 'Step 1: Recognize the flat surface', text: 'For $R \\to \\infty$ the surface formula gives $1/s + n/s{\\,}{\\!}^{\\prime} = 0$, so $s{\\,}{\\!}^{\\prime} = -ns$ — a virtual image on the same side as the object.' },
          { label: 'Step 2: Insert the numbers', text: '$s{\\,}{\\!}^{\\prime} = -(4/3)(3.00\\ \\mathrm{m}) = -4.00$ m measured *inside the water*; equivalently, the image sits at $s{\\,}{\\!}^{\\prime}/n = s \\times 1/n$ from the surface as seen by the eye in air.' },
          { label: 'Step 3: State the apparent depth', text: 'The bottom appears at $3.00 \\times (3/4) = 2.25$ m — three-quarters of the true depth, the reciprocal of the index.' },
          { label: 'Step 4: Note the general rule', text: 'Looking from a dense medium into a rare one, depths are compressed by the index ratio; this is why a spear fisherman must aim below where the fish appears to be.' },
        ],
        result: 'Apparent depth $2.25$ m: plane surfaces re-image objects to $n$ times their apparent optical distance, $s{\\,}{\\!}^{\\prime} = -ns$.',
      },
      {
        title: 'A thin biconvex lens at work',
        problem: 'A symmetric biconvex lens has $|R_1| = |R_2| = 50$ cm and index $n = 1.5$. An object stands 75 cm in front of it. Where is the image, and how big is it?',
        steps: [
          { label: 'Step 1: The focal length', text: '$1/f = (1.5 - 1)(1/50 + 1/50) = 0.5 \\times 0.04 = 0.02$ cm⁻¹, so $f = 50$ cm.' },
          { label: 'Step 2: Locate the image', text: '$1/75 + 1/s{\\,}{\\!}^{\\prime} = 1/50$ gives $1/s{\\,}{\\!}^{\\prime} = (3 - 2)/150$, so $s{\\,}{\\!}^{\\prime} = 150$ cm — a real image on the far side.' },
          { label: 'Step 3: Newton cross-check', text: 'With $x = s - f = 25$ cm, $x{\\,}{\\!}^{\\prime} = f^2/x = 2500/25 = 100$ cm beyond the far focus, i.e. $s{\\,}{\\!}^{\\prime} = 150$ cm — consistent.' },
          { label: 'Step 4: Magnification', text: '$y{\\,}{\\!}^{\\prime}/y = f/x = 50/25 = 2$: the image is twice the size of the object, and (real image) inverted.' },
        ],
        result: '$f = 50$ cm, image at 150 cm, magnification 2 — the two rays (parallel-to-focus and focus-to-parallel) meet at exactly that height.',
      },
      {
        title: 'The resolution wall of a great telescope',
        problem: 'The 200-inch (5.1-m) Palomar mirror observes yellow-green light of wavelength 550 nm. What is the smallest angular separation of two stars it can resolve?',
        steps: [
          { label: 'Step 1: Apply the angle criterion', text: 'For an aperture $L$ the limit is $\\theta \\approx \\lambda/L$; for a circular mirror the refinement is $1.22\\lambda/L$.' },
          { label: 'Step 2: Compute', text: '$\\theta = 1.22 \\times 5.5\\times 10^{-7}/5.1 = 1.3\\times 10^{-7}$ radians.' },
          { label: 'Step 3: Convert to the sky', text: 'One radian is about 206,265 arcseconds, so $\\theta \\approx 1.3\\times 10^{-7} \\times 2.06\\times 10^5 \\approx 0.027$ arcseconds — far finer than the atmosphere usually permits, which is why the mirror, not the wavelength, is rarely the limit on the ground.' },
          { label: 'Step 4: The microscope version', text: 'The same rule reads $D > \\lambda/(n\\sin\\theta)$: with green light the smallest visible detail is of order half a micrometre, whatever the magnification — the price of least time being only approximate.' },
        ],
        result: 'About $1.3\\times 10^{-7}$ radians ($\\approx 0.03$ arcsec): no instrument resolves detail finer than about one wavelength of its own light.',
      },
    ],
    keyTakeaways: [
      'All of paraxial optics flows from the sagitta $\\Delta \\approx h^2/2s$ plus equal times: $1/s + n/s{\\,}{\\!}^{\\prime} = (n-1)/R$ for one surface.',
      'Focal lengths of any system are in the ratio of the bounding indices; for a thin lens in air they are equal, and $1/f = (n-1)(1/R_1 - 1/R_2)$.',
      'Negative image distances mean virtual images; a flat interface makes depth appear compressed by $1/n$ — the pool bottom at $3/4$ of its true depth.',
      'Newton’s form $xx{\\,}{\\!}^{\\prime} = f^2$ with $y{\\,}{\\!}^{\\prime}/y = f/x = x{\\,}{\\!}^{\\prime}/f$ is everything about a thin lens; the symmetric case sits at $s = s{\\,}{\\!}^{\\prime} = 2f$.',
      'Compound instruments are computed surface by surface, and reduce to two principal planes and one focal length — however many elements they contain.',
      'Spherical aberration (wrong curve), chromatic aberration ($n$ depends on color) and off-axis faults set the real-lens limits the designer trades against.',
      'Ray optics finally fails at one period of the light: $t_2 - t_1 > 1/\\nu$, i.e. detail finer than $\\lambda/(n\\sin\\theta)$ or angles below $\\lambda/L$ cannot be resolved by any instrument.',
    ],
    quiz: [
      {
        q: 'A plane water surface ($n = 4/3$) is viewed from directly above. The image of the bottom satisfies:',
        options: [`$s{\\,}{\\!}^{\\prime} = -ns$`, `$s{\\,}{\\!}^{\\prime} = -s/n$`, `$s{\\,}{\\!}^{\\prime} = s$`, `$s{\\,}{\\!}^{\\prime} = +ns$`],
        answer: 0,
        explanation: 'With $R \\to \\infty$ the surface formula becomes $1/s + n/s{\\,}{\\!}^{\\prime} = 0$, so $s{\\,}{\\!}^{\\prime} = -ns$: a virtual image that, seen from the air, puts the bottom at $1/n = 3/4$ of its true depth.',
      },
      {
        q: 'For a thin lens, if the object distance equals the image distance, both are:',
        options: [`$f$`, `$2f$`, `$f/2$`, `$4f$`],
        answer: 1,
        explanation: 'From $1/s + 1/s{\\,}{\\!}^{\\prime} = 1/f$ with $s = s{\\,}{\\!}^{\\prime}$: $2/s = 1/f$, so $s = s{\\,}{\\!}^{\\prime} = 2f$ — the symmetric, unit-magnification configuration.',
      },
      {
        q: 'Which statement about the principal planes of a compound optical system is Feynman’s?',
        options: [
          'They are always at the physical center of the system',
          'Any system, however complicated, acts like a single thin lens located at them: parallel light in one side focuses a distance $f$ beyond the other',
          'They exist only for systems of exactly two lenses',
          'They are the planes where chromatic aberration vanishes',
        ],
        answer: 1,
        explanation: 'That a huge stack of lenses and mirrors collapses to two planes and one focal length (for light starting and ending in the same medium) is the beautiful net result of chasing images surface by surface.',
      },
      {
        q: 'Chromatic aberration arises because:',
        options: [
          'Glass absorbs some colors',
          'The index of refraction differs for different colors, so the focal length differs too',
          'The lens surfaces are not perfectly spherical',
          'Light of different colors travels at different speeds in air',
        ],
        answer: 1,
        explanation: 'Section 8.4 derives exactly how $n$ varies with frequency; for the designer the consequence is immediate — focus the red and the blue is out of focus, and white spot images come out rimmed in color.',
      },
      {
        q: 'No microscope, however perfect, can resolve two objects much closer than the wavelength of its light, because:',
        options: [
          'The lenses would need impossibly large diameters',
          'Beyond equalizing travel times to within one period of the light, further correction changes nothing observable — least time is only an approximation',
          'Photon pressure stirs the objects apart',
          'Glass becomes opaque at high magnification',
        ],
        answer: 1,
        explanation: 'The resolving limit $t_2 - t_1 > 1/\\nu$ (equivalently $D > \\lambda/(n\\sin\\theta)$) comes from the finiteness of the light frequency: geometrical optics is an approximation, and the wavelength is where it breaks.',
      },
    ],
  },

  // ------------------------------------------------------------------ 8.3
  {
    sectionId: 'phys-ch8-s3',
    readingTime: 11,
    intro: 'With Maxwell’s synthesis, light stopped being a mystery and became a consequence of electricity: the fields of oscillating charges, radiating outward forever. The key surprise is that the radiation field falls off as $1/r$, not $1/r^2$ — which is why the universe is knit together and a galaxy five billion light years away can still tickle a radio dish. With two such radiators side by side, every interference phenomenon of optics appears.',
    objectives: [
      'Explain why the $1/r$ acceleration field, not the Coulomb field, carries signals across the universe',
      'State the radiation field of a slowly moving charge and interpret its retarded acceleration and $\\sin\\theta$ factor',
      'Verify the properties of a dipole radiator: zero along the axis, maximum broadside, polarization transverse to the line of sight',
      'Compute two-source interference patterns from the phase difference $\\alpha + 2\\pi d\\sin\\theta/\\lambda$',
      'Add oscillations by trig identity, rotating vectors, and complex numbers, and derive the intensity formula',
    ],
    concepts: [
      {
        term: 'Maxwell’s synthesis and the $1/r$ field',
        kind: 'insight',
        statement: 'When Maxwell repaired the inconsistencies among the known laws of electricity and magnetism, the new term predicted fields falling as the **first power** of the distance — radio, radar, and light itself: "Let there be electricity and magnetism, and there is light."',
        detail: 'Static (and near) fields fall off as the inverse square, leaving distant charges barely able to influence one another; the radiation part declines only as $1/r$, so an oscillating electron in a distant star still drives electrons in our eyes. This is why we see the stars, and why the electric surgings of a galaxy five billion light years away — the farthest object known — still register in a radio telescope’s dish.',
      },
      {
        term: 'The complete field of a moving charge',
        kind: 'law',
        statement: 'The electric field of an arbitrarily moving charge has three pieces — the retarded Coulomb field $-q\\mathbf{e}_{r{\\,}{\\!}^{\\prime}}/4\\pi\\epsilon_0 r{\\,}{\\!}^{\\prime 2}$, a correction proportional to its rate of change, and the **second derivative of the retarded unit vector** — with the magnetic field $\\mathbf{B} = -\\mathbf{e}_{r{\\,}{\\!}^{\\prime}} \\times \\mathbf{E}/c$.',
        detail: 'Influences cannot travel faster than $c$, so everything is evaluated at the retarded time — where the charge *was* when the now-arriving influence left it. The first two pieces both fall as $1/r^2$; only the third survives at large distances, and it is "complete and correct so far as we know (except for quantum mechanics)" — relativity included.',
      },
      {
        term: 'The radiation field',
        kind: 'law',
        statement: 'Far from a slowly moving charge, the field is proportional to the **retarded transverse acceleration**: $$E_x(t) = -\\frac{q}{4\\pi\\epsilon_0 c^2 r}\\, a_x\\left(t - \\frac{r}{c}\\right),$$ or with the projection factor, $E = -qa(t - r/c)\\sin\\theta/4\\pi\\epsilon_0 c^2 r$.',
        detail: 'The rule is visual: watch the charge as a moving dot painted on a screen at unit distance (a painter who paints the world as he sees it, delays included); the acceleration of that painted dot, divided by $r$, is the field. Motion straight toward or away from you does not move the painted dot — a charge accelerating along your line of sight radiates nothing at you. Only the transverse piece survives.',
      },
      {
        term: 'The dipole radiator',
        kind: 'definition',
        statement: 'Two short wires driven by a high-frequency generator — charges pumped up and down together — form an **electric dipole oscillator**, the fundamental antenna of radio and the model for every radiating atom in this chapter.',
        detail: 'A detector of the same construction feels maximum field when parallel to the source and zero when turned broadside to it; the field is zero along the axis of motion and strongest broadside, and it is polarized along the projected acceleration. The experiments verify each clause of the radiation formula separately before we ever compute with it.',
      },
      {
        term: 'Two sources: the interference experiments',
        kind: 'method',
        statement: 'Two driven dipoles in phase double the field at a point on their perpendicular bisector (four times the intensity); with one source’s phase knob turned $180^\\circ$, the two cancel exactly — and at points whose distances to the two sources differ by $\\lambda/2$ (or any odd half-wavelength) the signal vanishes without any knob at all.',
        detail: 'The addition of fields is genuinely a **vector** addition: rotate one antenna $90^\\circ$ and the resultant detector signal swings to $45^\\circ$, with a null at right angles to that. Moving the detector to where the path difference $\\Delta$ is half a wavelength restores a maximum at a full wavelength — the retardation $r/c$ of each field is doing exactly what the formula says.',
      },
      {
        term: 'Radiation patterns of arrays',
        kind: 'insight',
        statement: 'Two dipoles half a wavelength apart in phase give intensity 4 broadside and zero fore–aft (2 at $30^\\circ$); run a quarter period out of phase a quarter wavelength apart and the pattern is one-sided (2, 0 and 4 in the three directions); ten wavelengths apart, the beam is narrow but sprouts extra lobes.',
        detail: 'This is antenna engineering: steer the beam by changing phases — broadcast to Hawaii today, Alberta tomorrow, without moving anything. The unwanted lobes can be suppressed by filling in with more antennas (six at $2\\lambda$ spacing give 36 units on-axis and only tiny bumps elsewhere), and the "extra maxima at $d > \\lambda$" nuisance returns later as the diffraction grating.',
      },
      {
        term: 'Energy, intensity, and the wave zone',
        kind: 'law',
        statement: 'The energy a wave delivers is proportional to $\\langle E^2\\rangle$; since the radiation field goes as $1/r$, the **intensity falls as $1/r^2$** while the energy crossing any given cone of directions is the same no matter how far out you measure it.',
        detail: 'The amplitude in $E = a_0\\cos\\omega(t - r/c)\\sin\\theta/4\\pi\\epsilon_0 c^2 r$ carries the standard wave vocabulary: frequency $\\omega$, wave number $k = \\omega/c$, wavelength $\\lambda = 2\\pi c/\\omega$, and $\\lambda\\nu = c$. The $1/r$ radiation term dominates only beyond a few wavelengths — the "wave zone" — closer in, the $1/r^2$ pieces spoil the simple picture.',
      },
      {
        term: 'Adding oscillations: three ways',
        kind: 'method',
        statement: 'Two waves $A_1\\cos(\\omega t + \\phi_1)$ and $A_2\\cos(\\omega t + \\phi_2)$ add to a single oscillation whose amplitude and phase can be found by trig identity, by rotating vectors, or by complex numbers: $\\hat{R} = A_1e^{i\\phi_1} + A_2e^{i\\phi_2} = A_Re^{i\\phi_R}$.',
        detail: 'The identity route gives $A_R = 2A\\cos\\tfrac{1}{2}(\\phi_1 - \\phi_2)$ for equal amplitudes; the vector route draws the two phasors rigidly rotating together and takes the diagonal of the parallelogram; the complex route multiplies $\\hat{R}$ by its conjugate to get the length squared. All three give the same physics — Chapter 6’s algebra, now doing optics.',
      },
      {
        term: 'The interference formula',
        kind: 'theorem',
        statement: 'For two equal sources separated by $d$ with intrinsic relative phase $\\alpha$, observed at angle $\\theta$, the phase difference at arrival is $$\\phi_2 - \\phi_1 = \\alpha + \\frac{2\\pi d\\sin\\theta}{\\lambda},$$ and the intensity is $$I = A_1^2 + A_2^2 + 2A_1A_2\\cos(\\phi_2 - \\phi_1) = 4I_0\\cos^2\\tfrac{1}{2}(\\phi_2 - \\phi_1).$$',
        detail: 'The cross term is the interference: positive it is constructive, negative destructive (physicists use the words neutrally). Everything about two-source patterns — Young’s slits, radio arrays, the lobes and nulls — is this one line with different $\\alpha$ and $d$.',
      },
    ],
    examples: [
      {
        title: 'From an oscillating charge to a travelling wave',
        problem: 'A charge oscillates as $x = x_0\\cos\\omega t$. Show that the radiated field is a sinusoidal wave travelling at speed $c$, and write down its wavelength.',
        steps: [
          { label: 'Step 1: Differentiate twice', text: 'The acceleration is $a = -\\omega^2 x_0\\cos\\omega t = a_0\\cos\\omega t$ with $a_0 = -\\omega^2 x_0$.' },
          { label: 'Step 2: Insert into the radiation field', text: '$E = -\\dfrac{q\\,a_0\\sin\\theta}{4\\pi\\epsilon_0 c^2 r}\\cos\\omega(t - r/c)$ — the retarded acceleration means the field at distance $r$ now was caused a time $r/c$ ago.' },
          { label: 'Step 3: Read off the propagation', text: 'Keeping $\\omega(t - r/c)$ constant requires $\\Delta r = c\\,\\Delta t$: the pattern moves outward at exactly $c$, a snapshot being the acceleration history of the charge run backwards in space.' },
          { label: 'Step 4: Wavelength and wave number', text: 'The phase changes by $2\\pi$ when $r$ changes by $\\lambda = 2\\pi c/\\omega$, so $k = \\omega/c$ and $\\lambda\\nu = c$ — for 1-m radiowaves, $\\nu = 3\\times 10^8$ oscillations per second.' },
        ],
        result: 'A spherical sinusoidal wave at frequency $\\omega$, speed $c$, amplitude falling as $1/r$: radiation is the retarded acceleration of the charge, broadcast in all directions except its line of motion.',
      },
      {
        title: 'The two-dipole pattern computed',
        problem: 'Two identical in-phase dipoles sit $\\lambda/2$ apart. Predict the intensity broadside to the line joining them, along the line, and at $30^\\circ$.',
        steps: [
          { label: 'Step 1: Broadside', text: 'At a distant point on the perpendicular bisector both distances are equal, so $\\phi_2 - \\phi_1 = 0$ and $\\alpha = 0$: $I = 2I_0(1 + \\cos 0) = 4I_0$ — four times a single source.' },
          { label: 'Step 2: Along the array', text: 'On the line through both sources the path difference is $d = \\lambda/2$, a half period: the fields arrive $180^\\circ$ apart and $I = 2I_0(1 + \\cos\\pi) = 0$.' },
          { label: 'Step 3: At thirty degrees', text: 'The path difference is $d\\sin\\theta = (\\lambda/2)(1/2) = \\lambda/4$, a quarter period: $\\phi_2 - \\phi_1 = 2\\pi(\\lambda/4)/\\lambda = \\pi/2$, and the interference term vanishes — adding two unit vectors at $90^\\circ$ gives $\\sqrt{2}$, whose square is $2I_0$.' },
          { label: 'Step 4: Read the pattern', text: 'The intensity runs 4, 2, 0 as the angle sweeps from broadside to end-on — exactly the numbers Feynman plots for the $\\lambda/2$ array, and the origin of every two-source interference figure.' },
        ],
        result: '$4I_0$ broadside, $0$ end-on, $2I_0$ at $30^\\circ$ — the whole pattern from $I = 2I_0[1 + \\cos(\\alpha + 2\\pi d\\sin\\theta/\\lambda)]$.',
      },
      {
        title: 'Building a one-directional beam',
        problem: 'Two dipoles are spaced a quarter wavelength apart, the northern one oscillating a quarter period behind the southern one. Find the intensity to the north, to the south, and broadside.',
        steps: [
          { label: 'Step 1: To the south', text: 'The southern source’s signal arrives at a southward observer $90^\\circ$ of phase later than the northern one’s (it is $\\lambda/4$ farther); but the northern source is $90^\\circ$ late by construction — the two arrive $180^\\circ$ apart: intensity 0.' },
          { label: 'Step 2: To the north', text: 'Now the northern signal is $90^\\circ$ early in path but $90^\\circ$ late in phase — the delays cancel: the fields arrive in step, giving amplitude 2 and intensity 4.' },
          { label: 'Step 3: Broadside', text: 'Equal path lengths, $90^\\circ$ intrinsic phase difference: the resultant of two equal vectors at right angles gives intensity 2.' },
          { label: 'Step 4: Use it', text: 'The pattern (0 south, 2 broadside, 4 north) sends the power one way: the principle of every phased-array radar and of the "cleverness in spacing and phasing" Feynman describes.' },
        ],
        result: 'One-sided beaming with intensities 0, 2 and 4 — the intrinsic phase compensates the path phase exactly in one direction and doubles the mismatch in the other.',
      },
    ],
    keyTakeaways: [
      'Radiation is Maxwell’s extra term: the part of the field that falls as $1/r$ rather than $1/r^2$, carrying energy indefinitely and knitting the universe together. Its complete expression — the retarded Coulomb field, a delay correction, and the second derivative of the retarded unit vector — reduces far away to the radiation term alone.',
      'Far away, $E = -qa(t - r/c)\\sin\\theta/4\\pi\\epsilon_0 c^2 r$: proportional to the retarded transverse acceleration — a charge accelerating along the line of sight radiates nothing at you.',
      'A dipole antenna radiates nothing along its axis and maximum broadside, with the field polarized along the projected acceleration.',
      'Fields add vectorially: in phase they double (intensity 4), $180^\\circ$ apart they cancel, and path differences of odd half-wavelengths produce nulls.',
      'Arrays steer and sharpen beams by spacing and phasing — quarter-wavelength spacing with quarter-period delay radiates one way; spacings beyond $\\lambda$ sprout extra lobes.',
      'Intensity goes as the time average of $E^2$, so the $1/r$ field delivers energy through any fixed cone independent of distance; the formula is trustworthy only in the wave zone, beyond a few wavelengths.',
      'All two-source results follow from $I = 2I_0[1 + \\cos(\\alpha + 2\\pi d\\sin\\theta/\\lambda)] = 4I_0\\cos^2(\\Delta\\phi/2)$, computable by identity, by phasors, or by complex numbers.',
    ],
    quiz: [
      {
        q: 'What makes it possible to detect a galaxy five billion light years away?',
        options: [
          'The galaxy is extremely hot, so its Coulomb field is enormous',
          'Part of its electromagnetic field falls off as $1/r$ rather than $1/r^2$, so the intensity declines only as $1/r^2$ across ever larger spheres',
          'Gravity focuses the light along the line of sight',
          'Space expands and amplifies the signal',
        ],
        answer: 1,
        explanation: 'Maxwell’s added term produces fields varying inversely as the first power of the distance. Energy flux ($\\propto E^2$) then falls as $1/r^2$, exactly matching the growth of the sphere it crosses — the signal survives across the universe.',
      },
      {
        q: 'A charge oscillates along a line pointing directly at you. The radiation you receive is:',
        options: [
          'Maximum, since the acceleration is fully toward you',
          'Zero, because only the acceleration projected perpendicular to the line of sight radiates',
          'Doubled by the approach motion',
          'Polarized circularly',
        ],
        answer: 1,
        explanation: 'The painted dot on the unit-distant screen does not move when the charge moves along your line of sight, so $d^2\\mathbf{e}_{r}/dt^2$ has no transverse component there: radiation is maximum broadside to the motion and zero along it, with the $\\sin\\theta$ factor.',
      },
      {
        q: 'Two identical in-phase sources are $\\lambda/2$ apart. At $30^\\circ$ from broadside the total intensity is:',
        options: [`$4I_0$`, `$2I_0$`, `$I_0$`, 'Zero'],
        answer: 1,
        explanation: 'The path difference is $d\\sin 30^\\circ = \\lambda/4$, a quarter-period phase of $\\pi/2$: the interference term vanishes, and two unit phasors at $90^\\circ$ give amplitude $\\sqrt{2}$, intensity $2I_0$ — twice a single source.',
      },
      {
        q: 'The interference term $2A_1A_2\\cos(\\phi_2 - \\phi_1)$ is described by Feynman as:',
        options: [
          'A quantum correction absent in classical physics',
          'The difference between simply adding intensities and what actually happens — called interference whether positive or negative',
          'An artifact of detector nonlinearity',
          'Zero whenever the sources are identical',
        ],
        answer: 1,
        explanation: 'Physicists call the positive case constructive and the negative destructive interference — using "interference" neutrally for the cross term itself, which is the entire departure from naive intensity addition.',
      },
      {
        q: 'Why does a quarter-wavelength-spaced pair with a quarter-period phase delay radiate essentially one way?',
        options: [
          'The backward wave is absorbed by the nearer antenna',
          'In one direction the path delay cancels the built-in phase delay (fields in step), while in the other they add to $180^\\circ$ (cancellation)',
          'Antennas radiate only forward at high frequency',
          'The ground reflects the backward beam into the forward one',
        ],
        answer: 1,
        explanation: 'To the north the $90^\\circ$ path advantage exactly offsets the $90^\\circ$ late start — in step, intensity 4; to the south the two $90^\\circ$ shifts accumulate to $180^\\circ$ — cancellation. Phased arrays steer beams precisely this way.',
      },
    ],
  },

  // ------------------------------------------------------------------ 8.4
  {
    sectionId: 'phys-ch8-s4',
    readingTime: 12,
    intro: 'Diffraction is just interference with many participants — and once the arithmetic of $n$ oscillators is in hand, gratings, resolving powers, the refractive index of glass, the width of spectral lines, the blueness of the sky, and the laws of polarization all fall out of the same small toolkit of added arrows. Feynman closes the optical journey where physics meets biology: the eye itself, whose rod cells count single quanta of light and whose insect counterpart is sized by the diffraction limit.',
    objectives: [
      'Sum $n$ equal phasors and derive the grating formula $d\\sin\\theta = m\\lambda$ and the resolving power $\\lambda/\\Delta\\lambda = mn$',
      'Explain the origin of the refractive index from driven electron oscillators, with dispersion and absorption',
      'Compute radiated power, radiation damping and natural line widths for atomic oscillators',
      'Show why the sky is blue and sunsets red, and why clouds scatter so strongly State the polarization states of light with Malus’s law, Brewster’s angle and the Fresnel reflection formulas.',
      'Summarize color mixing laws and the eye as a wave-limited detector',
    ],
    concepts: [
      {
        term: 'The $n$-oscillator pattern',
        kind: 'theorem',
        statement: 'Adding $n$ equal phasors with successive phase $\\phi$ (the arrows form a closed equiangular polygon) gives $$A_R = A\\,\\frac{\\sin n\\phi/2}{\\sin\\phi/2}, \\qquad I = I_0\\,\\frac{\\sin^2 n\\phi/2}{\\sin^2\\phi/2}$$ — a central maximum of $n^2 I_0$ (all in phase), first zero at $n\\phi = 2\\pi$ (arrows close the circle), and subsidiary maxima of only $4/9\\pi^2 \\approx 4.5$ percent of the peak.',
        detail: 'With the phase $\\phi = \\alpha + kd\\sin\\theta$ from the array, other great maxima appear whenever successive sources differ by whole cycles: $d\\sin\\theta = m\\lambda$. If the spacing is under one wavelength, only the zero order exists — which is why the same $n$-source arithmetic covers both antenna arrays (previous section) and the diffraction grating.',
      },
      {
        term: 'The diffraction grating and its resolving power',
        kind: 'law',
        statement: 'Many fine, evenly spaced scratches in glass scatter incident light coherently, sending strong beams where $$d\\sin\\theta = m\\lambda$$ — a different angle for each color, so the grating spreads white light into spectra of order $m$.',
        detail: 'Real gratings carry several hundred scratches to the millimetre; "blazing" the sawtooth shape of each groove dumps most power into a chosen order. Two wavelengths are just resolved (Rayleigh’s criterion: one’s maximum on the other’s first zero) when $$\\Delta\\lambda/\\lambda = 1/mn$$ — the resolving power is the number of lines times the order. Equivalently $\\Delta\\nu = 1/T$ with $T$ the travel-time spread across the array: a rule that works for *any* instrument. The same interference, applied to the regular lattice of atoms in a crystal with x-ray wavelengths, reveals the atomic positions — the subject of crystal diffraction in Chapter 14.',
      },
      {
        term: 'Diffraction by screens, holes and edges',
        kind: 'insight',
        statement: 'The diffraction pattern of an opaque screen with holes is computed as if the holes themselves were uniform sources — a "peculiar fact", since the holes are precisely where there are no charges.',
        detail: 'The justification is a beautiful subtraction argument: an opaque screen is one whose driven charges radiate a field cancelling the incident one behind it; now compare the screen-with-holes to the same screen with the holes plugged — the wall currents are the same, and the field at the observer equals minus the field of the plugs alone. Summing the little arrows for a shadow edge, where the phase now varies as the *square* of distance from the edge, gives Cornu’s spiral — and the striking prediction that the intensity at the very edge of a shadow is exactly $1/4$ of the incident light (half the amplitude).',
      },
      {
        term: 'The origin of the refractive index',
        kind: 'theorem',
        statement: 'Model the electrons as little harmonic oscillators ($\\omega_0$, spring constant from atom to atom); the incident wave drives them in motion $x = q_eE_0e^{i\\omega t}/m(\\omega_0^2 - \\omega^2)$, and the sheet of driven charges radiates a forward field $E_a$ at right angles to (and proportional to) the incident one — which, added to the original wave, is exactly a phase delay. Matching it gives $$n = 1 + \\frac{Nq_e^2}{2\\epsilon_0 m(\\omega_0^2 - \\omega^2)}.$$',
        detail: 'This is Feynman’s "most complicated thing we do this year" — the point is not the answer but the machinery: light is *not* slowed at the surface; the total field beyond the plate is the superposition of the original wave and the new wave from every driven atom, each piece travelling at $c$. The result carries the observed physics: $n$ rises slowly with frequency (blue bends more than red — dispersion, hence the prism spectrum); for x-rays and for free electrons in the stratosphere ($\\omega_0 = 0$), $n$ is **less** than one — the phase velocity exceeds $c$, though signals never do (Chapter 7’s group velocity). With damping $i\\gamma\\omega$ and a sum over all resonances, $n$ becomes complex: the real part bends, the imaginary part $n{\\,}{\\!}^{\\prime\\prime}$ **absorbs** — the origin of the dark lines in the sun’s spectrum, from which we read the chemistry of the stars.',
      },
      {
        term: 'Energy of a light wave, radiation damping, line widths',
        kind: 'theorem',
        statement: 'An accelerated charge radiates total power $$P = \\frac{q^2a_0^2}{6\\pi\\epsilon_0 c^3}$$ (for an oscillator, $\\langle a^2\\rangle = \\tfrac{1}{2}\\omega^4x_0^2$, so $P = q^2\\omega^4x_0^2/12\\pi\\epsilon_0c^3$); the intensity of a wave is $S = \\epsilon_0c\\langle E^2\\rangle$; and the resulting damping gives an oscillator of wavelength $\\lambda$ a quality factor $Q = 3\\lambda/4\\pi r_0$ with $r_0 = 2.82\\times 10^{-15}$ m.',
        detail: 'For a sodium atom emitting yellow light ($\\lambda \\approx 6000$ Å), $Q \\approx 5\\times 10^7$: the atom swings about $10^7$ times before its energy falls by $1/e$ — a lifetime of order $10^{-8}$ s, and a natural line width $\\Delta\\lambda = \\lambda/Q = 4\\pi r_0/3 = 1.18\\times 10^{-14}$ m. The constant $1/\\epsilon_0c = 377$ ohms is the "impedance of a vacuum"; the length $r_0$, the classical electron radius, is the historical scale of the electron.',
      },
      {
        term: 'Scattering: why the sky is blue',
        kind: 'law',
        statement: 'A single atom scatters a fraction of the incident beam described by the cross section $$\\sigma_s = \\frac{8\\pi}{3}r_0^2\\,\\frac{\\omega^4}{(\\omega^2 - \\omega_0^2)^2}$$ — for visible light in air ($\\omega_0 \\gg \\omega$), **scattering grows as the fourth power of frequency**: double the frequency, sixteen times the scattered light.',
        detail: 'Blue light scatters far more than red, so looking at the sky away from the sun you see blue; looking toward the sun through a long air path at sunset, the blue has been scattered away and what survives is red. Clouds puzzle until you remember interference: atoms closer together than a wavelength scatter **in phase**, so a droplet of $N$ molecules scatters $N^2$ times a single one (not $N$) — the growth stops when the drop approaches a wavelength in size, which is also why big drops scatter white rather than blue. For free electrons ($\\omega_0 = 0$) the cross section is the constant Thomson value, of order $10^{-30}$ m². And the scattered light at $90^\\circ$ is **polarized** — the observable bees navigate by.',
      },
      {
        term: 'Polarization and polarizers',
        kind: 'definition',
        statement: 'The electric vector of light may oscillate on a line (linear polarization), an ellipse, or a circle (from two perpendicular components with a $90^\\circ$ phase difference); polaroid passes only its own pass-axis component, so light polarized at angle $\\theta$ emerges with intensity $I = I_0\\cos^2\\theta$.',
        detail: 'Two crossed polaroids pass nothing — yet slip a third between them at $45^\\circ$ and light gets through: each sheet projects out a component, and analysis is left as the reader’s pleasant exercise. Reflection from glass at **Brewster’s angle** (reflected beam perpendicular to refracted beam) yields completely polarized reflected light — because the oscillating charges that make the "reflected" wave cannot radiate along their own motion. The full Fresnel formulas give the reflected amplitudes: $b = -\\sin(i-r)/\\sin(i+r)$ and $B = -\\tan(i-r)/\\tan(i+r)$, reducing at normal incidence to a reflection coefficient $(n-1)^2/(n+1)^2$. Birefringent crystals (cellophane is a homespun example) carry the two polarizations at different speeds — a quarter-wave plate converts linear to circular; stressed plastics show their strain in colored fringes; a Kerr cell switches light with an electric field; optically active (corkscrew) molecules like sugar rotate the polarization direction; and circularly polarized light carries angular momentum $\\pm E/\\omega$ per energy $E$.',
      },
      {
        term: 'Color: three pigments and the mixing laws',
        kind: 'law',
        statement: 'Different spectral distributions can look identical — the sensation of color spans only a three-dimensional manifold: any color can be matched by three primaries, and matched lights can substitute for one another in any mixture: $$X = Y \\quad \\Rightarrow \\quad X + Z = Y + Z.$$',
        detail: 'This is the Young–Helmholtz picture: three cone pigments with different absorption spectra. Mixtures add like vectors, $X = aA + bB + cC$, and *some* coefficients must be negative whatever primaries are chosen — there are no "the" primary colors. The chromaticity diagram plots all colors as a bounded region with the pure spectral colors on its curved rim; dichromats (color-blind, about 8 percent of men) match everything with two primaries, and their confusion lines let the response curves be deduced. Dark-adapted rods (peak sensitivity green) take over from cones (peak yellow) at low light: colors vanish, faint stars are best seen $off$-center where the rod-rich periphery lies, and a red page that is bright by day is nearly black by night — the Purkinje effect.',
      },
      {
        term: 'The eye as a detector',
        kind: 'insight',
        statement: 'The retina is a piece of the brain grown out to touch the light — it computes before the optic nerve ever leaves the eye — and even the insect compound eye is a physics instrument: its ommatidia have the optimum size $\\delta = \\sqrt{\\lambda r}$ set by the balance of packing angle $\\delta/r$ against diffraction $\\lambda/\\delta$.',
        detail: 'The cornea (index 1.37) does the main focusing — which is why we see poorly under water (1.33) — with a layered lens (1.38 to 1.40) and an iris of opposing muscle pairs adjusting. Rod cells stack rhodopsin (visual purple) in membranes; its retinene chromophore carries a chain of conjugated double bonds whose electrons shove along like dominoes, absorbing strongly — and since we cannot synthesize retinene, deficiency of vitamin A causes night blindness. For the bee’s eye with $r \\approx 3$ mm and $\\lambda = 4000$ Å, $\\delta = (3\\times 10^{-3} \\times 4\\times 10^{-7})^{1/2} = 35\\ \\mu$m, pleasingly close to the measured 30 microns — the diffraction-limited design of evolution. Bees see ultraviolet down to 3000 Å, so "white" flowers advertise in hidden colors; the horseshoe crab’s retina inhibits neighbors additively, enhancing contrast at edges; and the octopus evolved the vertebrate camera eye independently — this time with its photoreceptors wired the right way round.',
      },
    ],
    examples: [
      {
        title: 'Designing with a diffraction grating',
        problem: 'A grating has 600 lines per millimetre and is illuminated at normal incidence. Where does 500-nm green light emerge in first order, where 650-nm red, and how close can two wavelengths be and still be resolved in first order if 6000 grooves are lit?',
        steps: [
          { label: 'Step 1: The spacing', text: '$d = 1/600$ mm $= 1.67\\ \\mu$m — comfortably more than a wavelength, so higher orders exist.' },
          { label: 'Step 2: First-order green', text: '$\\sin\\theta = \\lambda/d = 0.500/1.67 = 0.30$, so $\\theta = 17.5^\\circ$ for green light.' },
          { label: 'Step 3: First-order red', text: '$\\sin\\theta = 0.650/1.67 = 0.39$, so $\\theta = 23^\\circ$ — red farther out than green, exactly as observed with any grating spectroscope.' },
          { label: 'Step 4: Resolution', text: 'Rayleigh: $\\Delta\\lambda/\\lambda = 1/mn = 1/(1 \\times 6000)$, so $\\Delta\\lambda = 500/6000 = 0.083$ nm — lines separated by less than an ångström-blend merge in first order (and $m = 2$ would halve it again).' },
        ],
        result: 'Green at $17.5^\\circ$, red at $23^\\circ$, and a resolving power of 6000 in first order: $\\Delta\\lambda \\approx 0.08$ nm at 500 nm.',
      },
      {
        title: 'The lifetime of a sodium atom’s glow',
        problem: 'A sodium atom radiates yellow light of wavelength about 6000 Å. Estimate the quality factor $Q$, the number of oscillations before the energy drops by $1/e$, and the natural line width.',
        steps: [
          { label: 'Step 1: The quality factor', text: 'Radiation damping gives $1/Q = 4\\pi r_0/3\\lambda$ with $r_0 = 2.82\\times 10^{-15}$ m: $1/Q = 4\\pi(2.82\\times 10^{-15})/(3\\times 6\\times 10^{-7}) = 2.0\\times 10^{-8}$.' },
          { label: 'Step 2: Evaluate', text: '$Q \\approx 5\\times 10^7$: the atom oscillates about $10^7$ times (Feynman’s $10^8$ radians) before losing most of its energy.' },
          { label: 'Step 3: The lifetime', text: 'For $\\lambda = 6000$ Å the frequency is $\\nu = c/\\lambda = 5\\times 10^{14}$ Hz, so the e-folding time is $Q/2\\pi\\nu \\approx 1.6\\times 10^{-8}$ s — of order $10^{-8}$ s, the classic lifetime of a freely radiating atom.' },
          { label: 'Step 4: The line width', text: 'The damping $\\gamma = \\omega_0/Q$ broadens the emitted line to $\\Delta\\lambda = \\lambda/Q = 4\\pi r_0/3 = 1.2\\times 10^{-14}$ m — about a fifty-millionth of the wavelength itself.' },
        ],
        result: '$Q \\approx 5\\times 10^7$, lifetime $\\sim 10^{-8}$ s, natural width $\\Delta\\lambda = 1.18\\times 10^{-14}$ m — the "radiation resistance" of an atom.',
      },
      {
        title: 'How much light bounces off water and glass',
        problem: 'Using the normal-incidence limit of Fresnel’s formulas, find the fraction of light reflected from a water surface ($n = 4/3$) and from glass ($n = 1.5$).',
        steps: [
          { label: 'Step 1: The formula', text: 'At normal incidence both polarizations reflect equally with intensity fraction $R = (n-1)^2/(n+1)^2$.' },
          { label: 'Step 2: Water', text: '$R = (1/3)^2/(7/3)^2 = (1/3)^2/(7/3)^2 = (1/7)^2 = 2$ percent — only a fiftieth of the light.' },
          { label: 'Step 3: Glass', text: '$R = (0.5/2.5)^2 = (1/5)^2 = 4$ percent — the price of every uncoated air–glass surface in an instrument.' },
          { label: 'Step 4: Cross-check with Brewster', text: 'The same formulas vanish for in-plane polarization when $i + r = 90^\\circ$ (Brewster’s angle): polarized sunglasses, set to block the preferentially horizontally polarized glare from water, buy back most of that 2 percent.' },
        ],
        result: 'Water reflects about 2 percent, glass 4 percent at normal incidence — from $R = (n-1)^2/(n+1)^2$, the small-angle limit of Fresnel\u2019s formulas.',
      },
    ],
    keyTakeaways: [
      '$n$ equal phasors give $I = I_0\\sin^2(n\\phi/2)/\\sin^2(\\phi/2)$: a peak of $n^2I_0$, first null at $n\\phi = 2\\pi$, side lobes below 5 percent — and repeated maxima at $d\\sin\\theta = m\\lambda$, the grating equation.',
      'Grating resolving power is the number of lines times the order ($\\Delta\\lambda/\\lambda = 1/mn$), or universally $\\Delta\\nu = 1/T$; holes in an opaque screen act as sources (the plug argument), and the intensity at a shadow edge is exactly one quarter of the incident light.',
      'The refractive index is a phase delay manufactured by driven electron oscillators: $n = 1 + Nq_e^2/2\\epsilon_0m(\\omega_0^2 - \\omega^2)$, with damping making $n$ complex and the imaginary part the absorption seen as solar dark lines.',
      'Radiation carries energy flux $\\epsilon_0c\\langle E^2\\rangle$ and damps the emitting oscillator: a sodium atom has $Q \\approx 5\\times 10^7$, lives about $10^{-8}$ s per excitation, and its line is naturally $1.2\\times 10^{-14}$ m wide.',
      'Scattering grows as $\\omega^4$ for air: blue wins by day (the sky) and loses by path length at sunset (the red sun); droplets of $N$ coherent molecules scatter $N^2$, which is why clouds are bright.',
      'Polaroid obeys $I = I_0\\cos^2\\theta$; Brewster-angle reflection is completely polarized; Fresnel’s formulas give $R = (n-1)^2/(n+1)^2$ at normal incidence — 2 percent for water, 4 percent for glass.',
      'Color is a three-dimensional sensation (three cone pigments, substitutable matches, $X + Z = Y + Z$), with no unique set of primaries; the retina is brain tissue touching light — the cornea focuses, rhodopsin transduces, and the bee’s compound eye is diffraction-sized at $\\delta = \\sqrt{\\lambda r} \\approx 35\\ \\mu$m.',
    ],
    quiz: [
      {
        q: 'For $n$ identical equally spaced sources in phase, the intensity at the exact center of the principal maximum is:',
        options: [`$nI_0$`, `$n^2I_0$`, `$I_0$ regardless of $n$`, `$\\sqrt{n}I_0$`],
        answer: 1,
        explanation: 'All $n$ phasors align, so the amplitude is $nA$ and the intensity $n^2I_0$. (The limit of $\\sin^2(n\\phi/2)/\\sin^2(\\phi/2)$ as $\\phi \\to 0$ is $n^2$ — the very reason gratings and arrays concentrate power.',
      },
      {
        q: 'A grating of 10,000 lines is used in second order. The smallest fractional wavelength difference it can resolve is:',
        options: [`$1/10{,}000$`, `$1/20{,}000$`, `$1/5000$`, `$2/10{,}000 \\times \\lambda$`],
        answer: 1,
        explanation: 'Rayleigh plus the grating formula: $\\Delta\\lambda/\\lambda = 1/mn = 1/(2 \\times 10{,}000) = 1/20{,}000$ — the resolving power is the total number of lines times the order.',
      },
      {
        q: 'Light passing through glass emerges with a phase delay because:',
        options: [
          'Light travels slower than $c$ between the atoms',
          'The driven electrons of the glass radiate an additional forward wave that, superposed on the original, is equivalent to a retarded phase — every piece still travelling at $c$',
          'The atoms absorb and re-emit photons one by one',
          'Glass has a complex dielectric constant at all frequencies',
        ],
        answer: 1,
        explanation: 'Nothing is slowed at the microscopic level: the total field is the source wave plus the wave from all the driven oscillators, and the sum is mathematically identical to a delayed wave — this is the whole content of the index $n$.',
      },
      {
        q: 'The sky is blue because:',
        options: [
          'Air molecules are blue',
          'Ozone absorbs red light',
          'Scattering by air grows as the fourth power of the frequency, and blue light has nearly twice the frequency of deep red',
          'Water vapour droplets reflect the blue of the sea',
        ],
        answer: 2,
        explanation: 'With $\\omega_0$ far above the visible, $\\sigma_s \\propto \\omega^4/(\\omega_0^2)^2$: doubling the frequency multiplies the scattering sixteen-fold. Blue is scattered out of the direct beam (red sunsets) and into your sideways view (blue sky).',
      },
      {
        q: 'The bee’s compound eye has ommatidia of diameter $\\delta$ on a spherical eye of radius $r$. Why is there an optimum size?',
        options: [
          'Larger ommatidia overheat in sunlight',
          'The packing angle $\\delta/r$ improves as $\\delta$ shrinks, but diffraction $\\lambda/\\delta$ worsens — the minimum of their sum fixes $\\delta = \\sqrt{\\lambda r}$',
          'Bees need to conserve photopigment',
          'The optic nerve can carry only a limited number of fibers',
        ],
        answer: 1,
        explanation: 'Too big and there are too few directions; too small and each light pipe diffracts broadly. Evolution’s compromise, $\\delta = \\sqrt{\\lambda r} \\approx 35\\ \\mu$m for $r \\approx 3$ mm and 4000-Å light, matches the measured 30 microns.',
      },
    ],
  },
]

// ============================================================================
// Chapter 8 formula sheet — Unicode fallback + KaTeX
// ============================================================================

export const physCh8Formulas: FormulaEntry[] = [
  {
    chapterId: 'phys-ch8',
    section: '8.1',
    name: 'Snell\u2019s law',
    formula: 'sin θᵢ = n sin θᵣ',
    note: 'n is the ratio of speeds, v_air/v_water',
    latex: '\\sin\\theta_i = n\\sin\\theta_r',
  },
  {
    chapterId: 'phys-ch8',
    section: '8.2',
    name: 'Thin lens equation',
    formula: '1/s + 1/s′ = 1/f',
    note: 'with 1/f = (n−1)(1/R₁ − 1/R₂); Newton form xx′ = f²',
    latex: '\\frac{1}{s} + \\frac{1}{s\'} = \\frac{1}{f}',
  },
  {
    chapterId: 'phys-ch8',
    section: '8.3',
    name: 'Radiation field of a charge',
    formula: 'E = −qa(t − r/c)sinθ / 4πε₀c²r',
    note: 'retarded transverse acceleration; falls as 1/r',
    latex: 'E = \\frac{-q\\,a(t - r/c)\\sin\\theta}{4\\pi\\epsilon_0 c^2 r}',
  },
  {
    chapterId: 'phys-ch8',
    section: '8.3',
    name: 'Two-source interference',
    formula: 'I = 4I₀cos²(½(α + 2πd sinθ/λ))',
    note: 'equal sources; Δφ = α + 2πd sinθ/λ',
    latex: 'I = 4I_0\\cos^2\\tfrac{1}{2}\\left(\\alpha + \\frac{2\\pi d\\sin\\theta}{\\lambda}\\right)',
  },
  {
    chapterId: 'phys-ch8',
    section: '8.4',
    name: 'Grating maxima',
    formula: 'd sinθ = mλ,  Δλ/λ = 1/mn',
    note: 'm order, n lines; resolving power = mn',
    latex: 'd\\sin\\theta = m\\lambda',
  },
  {
    chapterId: 'phys-ch8',
    section: '8.4',
    name: 'Index of refraction (dispersion)',
    formula: 'n = 1 + Nqₑ² / 2ε₀m(ω₀² − ω²)',
    note: 'driven electron oscillators; damping makes n complex',
    latex: 'n = 1 + \\frac{Nq_e^2}{2\\epsilon_0 m(\\omega_0^2 - \\omega^2)}',
  },
  {
    chapterId: 'phys-ch8',
    section: '8.4',
    name: 'Radiated power of an accelerated charge',
    formula: 'P = q²a² / 6πε₀c³',
    note: 'oscillator: P = q²ω⁴x₀²/12πε₀c³',
    latex: 'P = \\frac{q^2a_0^2}{6\\pi\\epsilon_0 c^3}',
  },
  {
    chapterId: 'phys-ch8',
    section: '8.4',
    name: 'Malus\u2019s law (polarizer)',
    formula: 'I = I₀cos²θ',
    note: 'θ between polarization and pass axis; Brewster: reflected ⊥ refracted',
    latex: 'I = I_0\\cos^2\\theta',
  },
]
