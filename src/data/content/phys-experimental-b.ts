import type { SectionContent } from '../library'

// ============================================================================
// Lesson content for the Experimental Skills chapter (phys-m20), sections
// s5–s7: Optics Experiments, Semiconductor Device Experiments, and the
// cross-cutting data-and-error analysis for the prescribed experiments.
//
// Scope provenance (code comment only — product rule: no exam or agency
// names in UI strings): the national engineering-entrance experimental-skills
// list, items (13) focal length of convex mirror, concave mirror and convex
// lens by the parallax method; (14) plot of angle of deviation vs angle of
// incidence for a triangular prism; (15) refractive index of a glass slab
// using a travelling microscope; (16) characteristic curves of a p-n
// junction diode in forward and reverse bias; (17) characteristic curves of
// a Zener diode and finding the reverse breakdown voltage; (18)
// identification of diode, LED, resistor and capacitor from a mixed
// collection; plus the error-analysis and methods-of-measurement summary
// covering Vernier calipers, screw gauge, simple pendulum for g, Young’s
// modulus, surface tension by capillary rise, specific heat by calorimeter,
// u–v focal lengths, speed of sound by resonance column, Ohm’s law by
// voltmeter–ammeter, and specific resistance by metre bridge and post
// office box. Research notes live in research/*.md.
//
// ZERO-REPETITION CARVING (greps run before writing):
// - grep -rli "prism\|minimum deviation" src/data/content/*.ts → the
//   geometric-optics chapters (hall-ch33/34, young-ch33/34/36, phys-ch08,
//   masters-physics, and the archived exam files) own prism THEORY and the
//   μ formulas. s5 below owns only the MEASUREMENT: the δ–i plotting
//   procedure, symmetric-passage detection, and the travelling-microscope
//   apparent-depth method.
// - grep -rli "diode\|zener" src/data/content/*.ts → the Electronic
//   Devices subject files (elec-ch*, engg-ece-ee-me, exam-engg-ece-ee-me)
//   and the condensed-matter chapters (young-ch42, hall-ch40/41) own
//   semiconductor DEVICE PHYSICS. s6 below owns only the BENCH EXPERIMENT:
//   circuits, meter choice, curve shapes, knee/breakdown reading and
//   component identification.
// - grep -rli "significant figure\|uncertainty" src/data/content/*.ts → the
//   units chapter (young-ch1) owns significant-figure rules and uncertainty
//   basics. s7 below owns error PROPAGATION and graph-reading craft as
//   applied to the named experiments, with only a working recap.
// - Sections s1–s4 of this chapter (authored in parallel) own every
//   experiment’s PROCEDURE. s7 deliberately re-describes no setup — it
//   references each experiment by name and teaches the analysis layer:
//   how measurements combine, how errors propagate, how graphs are plotted
//   and read.
// ============================================================================

export const physExperimentalBContent: SectionContent[] = [
  // -------------------------------------- phys-m20-s5 · Optics Experiments
  {
    sectionId: 'phys-m20-s5',
    readingTime: 10,
    prerequisites: [
      'Geometric Optics & Imaging: mirror formula, thin lenses and refraction through a prism',
      'Measurement Instruments (Section 1): least count, vernier reading and zero error',
    ],
    intro: 'Optics is where the experimental-skills list rewards pure technique: the apparatus is simple — pins, a mirror, a lens, a prism, a slab and a travelling microscope — but the marks come from knowing exactly what each is doing. The master trick of this section is parallax, the apparent relative shift between an image and a reference pin as the eye moves sideways; removing it certifies that image and pin are co-planar, which is how an otherwise unreachable image is pinned down to a measurable bench position. The same craft serves all three focal-length determinations, including the convex mirror, which cannot form a real image on its own and must borrow an auxiliary convex lens. The prism experiment then shifts the emphasis to plotting: the angle of deviation is recorded against the angle of incidence, and the U-shaped curve hands over the minimum deviation from which the refractive index follows. Finally the travelling microscope turns a scale into a 0.01 mm instrument and yields a refractive index from nothing but the real and apparent thickness of a glass slab.',
    objectives: [
      'Remove parallax between an image and a reference pin, and explain why its removal certifies co-planarity',
      'Determine the focal length of a concave mirror and a convex lens from no-parallax (u, v) pairs, and of a convex mirror by ray retracing with an auxiliary lens',
      'Plot angle of deviation against angle of incidence for a triangular prism, locate the minimum deviation, and compute the refractive index',
      'Measure the real and apparent thickness of a glass slab with a travelling microscope and obtain its refractive index',
    ],
    concepts: [
      {
        term: 'Parallax and its removal',
        kind: 'method',
        statement: 'Hold a reference pin near the image formed by a mirror or lens and move your eye sideways: the apparent relative shift between them is **parallax**. When pin and image no longer shift relative to each other — parallax removed — they lie **in one plane**, and the pin’s bench position is the image’s position.',
        detail: 'The direction rule: of two objects, the one farther from the eye appears to move **with** the eye, the nearer one against it. So if the image drifts with your eye while the pin drifts against it, the image is the farther of the two — slide the pin away from you until the relative drift vanishes. The test needs no screen, works for real and virtual images alike, and is the measurement principle behind every focal-length determination in this section. Two practical habits: move the eye a good many centimetres (a tiny movement hides a large separation), and judge the drift of the image **relative to the pin**, never against the background.',
      },
      {
        term: 'Concave mirror u–v method',
        kind: 'method',
        statement: 'With an object pin at distance $u$ and the image located by a second pin at $v$ (no parallax), the mirror formula in bench magnitudes gives $$f = \\frac{uv}{u+v}.$$ Several $(u, v)$ pairs are taken, each yielding an $f$; the mean, or a graph, gives the answer.',
        detail: 'Choose object distances beyond the centre of curvature ($u > 2f$) so the real, inverted image forms between focus and centre — a comfortable, well-conditioned region. Graphically, plot $\\frac{1}{v}$ against $\\frac{1}{u}$: the mirror formula becomes a straight line of slope $-1$ whose intercepts on **both** axes equal $\\frac{1}{f}$ — two independent readings of the same quantity from one line. (Equivalently, on a $v$-against-$u$ plot the line $v = u$ meets the curve at $(2f, 2f)$.) Repeat with the object at several distances; a drifting $f$ signals a bench fault — pins not vertical, or the mirror not squarely facing the axis.',
      },
      {
        term: 'Convex mirror retracing method',
        kind: 'method',
        statement: 'A convex mirror alone cannot form a real image, so an **auxiliary convex lens** forms one first and its position is marked. The convex mirror is then slid in between, and adjusted until the reflected image coincides with the object pin itself. Coincidence means the rays strike the mirror **normally** — along radii — so the marked point is the mirror’s centre of curvature: the mirror-to-mark distance is $R$, and $$f = \\frac{R}{2}.$$', 
        detail: 'Why retracing: a ray meeting a spherical mirror along a radius reflects back along itself, and the lens then returns it exactly to the object point (reversibility of light). Only when the incident converging rays are aimed at the centre of curvature does the image land back on the object pin — which is why the adjustment is sharp and the parallax test decisive. Bench bookkeeping: record the position where the lens **alone** formed the image (found with a screen or search pin), then the mirror position at coincidence; $R$ is the difference. The mirror’s pole, not its stand index, is the reference — know your bench’s offset. The answer comes out with the convex sign: a virtual focus behind the mirror.',
      },
      {
        term: 'Convex lens bench methods',
        kind: 'method',
        statement: 'Object pin and image pin located by no-parallax give $(u, v)$ pairs with $f = \\frac{uv}{u+v}$, exactly as for the concave mirror. With object and screen fixed a distance $D$ apart, the lens forms a sharp image at **two** conjugate positions separated by $d$, and $$f = \\frac{D^2 - d^2}{4D}$$ — the displacement method.',
        detail: 'The displacement method is the bench’s favourite because it is self-calibrating: only the **difference** between the two lens positions enters, so any constant offset between the lens centre and its bench index cancels, and $D$ is measured between object and screen, never involving the lens at all. It requires $D \\ge 4f$ (below that no position focuses); at $D = 4f$ the two positions merge ($d = 0$) and the measurement dies — keep $D$ comfortably large. A built-in check: the magnifications at the two positions are reciprocals, $m_1 m_2 = 1$. The parallax method and the displacement method should agree; a mismatch larger than the reading error means the pins are not co-axial with the lens.',
      },
      {
        term: 'The deviation–incidence curve',
        kind: 'law',
        statement: 'For a ray through a prism of refracting angle $A$, $$\\delta = i + e - A,$$ where $i$ and $e$ are the angles of incidence and emergence. Plotting $\\delta$ against $i$ gives a **U-shaped curve** whose minimum occurs where the ray passes symmetrically, $i = e = \\frac{A + \\delta_m}{2}$, and there $$\\mu = \\frac{\\sin\\frac{A+\\delta_m}{2}}{\\sin\\frac{A}{2}}.$$', 
        detail: 'The measurement, not the formula, is the experiment: set the incidence with pins defining the incident ray, read the emergent ray the same way, and compute $e$ from geometry. Two reading skills matter. First, the bottom of the U is flat — $\\delta$ changes by only a few tenths of a degree over a wide range of $i$ near the minimum — so $\\delta_m$ is well determined even though the exact incidence at the minimum is not; take several readings straddling the minimum and read the curve, never a single point. Second, the curve is **not** symmetric about $i_m$: equal deviations pair as $i + e = A + \\delta$, so the low-incidence side is the steeper one — a plot that looks mirror-symmetric about $50^{\\circ}$ has been faked, not measured. Realistic numbers: $A = 60^{\\circ}$, $\\delta_m = 40^{\\circ}$ gives $\\mu = \\frac{\\sin 50^{\\circ}}{\\sin 30^{\\circ}} = 1.53$.',
      },
      {
        term: 'Travelling microscope refractive index',
        kind: 'method',
        statement: 'Focus the microscope on an ink dot $P$ on the base (reading $R_1$); lay the slab over the dot and refocus on the raised image $P^{\\prime}$ ($R_2$); then focus on the top surface of the slab ($R_3$). Real thickness $t = R_3 - R_1$, apparent thickness $t^{\\prime} = R_2 - R_1$, and for near-normal viewing $$\\mu = \\frac{t}{t^{\\prime}}.$$', 
        detail: 'The instrument: a microscope mounted on a vertical main scale, graduated to 0.5 mm, with a 50-division vernier — least count $\\frac{0.5}{50} = 0.01$ mm, a hundredfold finer than a metre scale. Two disciplines keep it honest. Backlash: the screw’s lost motion means the same focus reads differently approached from opposite directions — always take the final approach by turning the screw the same way, ideally downward through all three readings. Obliquity: the formula assumes normal viewing, so keep the dot on the axis and the microscope vertical. A quiet bonus: since $t$ and $t^{\\prime}$ are differences of readings on the **same** scale, any uniform calibration error of that scale cancels in the ratio — the measurement is self-checking in exactly the way the prism plot is not.',
      },
    ],
    figures: [
      {
        caption: 'Angle of deviation $\\delta$ against angle of incidence $i$ for a $60^{\\circ}$ prism of $\\mu = 1.53$: the U-shaped curve bottoms out at $\\delta_m = 40^{\\circ}$, where the ray passes symmetrically ($i = e$). The dashed guides show how the minimum is read from the axes — never from a single data point.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of angle of deviation against angle of incidence for a triangular prism showing a U-shaped curve with minimum deviation marked"><line x1="60" y1="250" x2="665" y2="250" stroke="currentColor" stroke-width="1.5"/><polygon points="665,250 653,245 653,255" fill="currentColor"/><line x1="70" y1="260" x2="70" y2="30" stroke="currentColor" stroke-width="1.5"/><polygon points="70,30 65,42 75,42" fill="currentColor"/><line x1="143" y1="250" x2="143" y2="256" stroke="currentColor"/><line x1="215" y1="250" x2="215" y2="256" stroke="currentColor"/><line x1="288" y1="250" x2="288" y2="256" stroke="currentColor"/><line x1="360" y1="250" x2="360" y2="256" stroke="currentColor"/><line x1="433" y1="250" x2="433" y2="256" stroke="currentColor"/><line x1="505" y1="250" x2="505" y2="256" stroke="currentColor"/><line x1="578" y1="250" x2="578" y2="256" stroke="currentColor"/><text x="143" y="270" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">35</text><text x="215" y="270" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">40</text><text x="288" y="270" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">45</text><text x="360" y="270" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">50</text><text x="433" y="270" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">55</text><text x="505" y="270" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">60</text><text x="578" y="270" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">65</text><line x1="70" y1="208" x2="76" y2="208" stroke="currentColor"/><line x1="70" y1="166" x2="76" y2="166" stroke="currentColor"/><line x1="70" y1="124" x2="76" y2="124" stroke="currentColor"/><line x1="70" y1="82" x2="76" y2="82" stroke="currentColor"/><line x1="70" y1="40" x2="76" y2="40" stroke="currentColor"/><text x="62" y="212" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">40</text><text x="62" y="170" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">42</text><text x="62" y="128" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">44</text><text x="62" y="86" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">46</text><text x="62" y="44" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">48</text><path d="M 128 67 L 157 108 L 186 143 L 215 166 L 244 183 L 273 195 L 302 202 L 331 206 L 360 208 L 389 206 L 418 202 L 447 195 L 476 183 L 505 179 L 534 166 L 563 151 L 592 135 L 621 116" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><line x1="360" y1="208" x2="360" y2="250" stroke="currentColor" stroke-dasharray="6 4"/><line x1="360" y1="208" x2="70" y2="208" stroke="currentColor" stroke-dasharray="6 4"/><circle cx="143" cy="90" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="215" cy="166" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="288" cy="200" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="360" cy="208" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="433" cy="200" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="505" cy="179" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="578" cy="145" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="170" y="198" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="middle">δm = 40°</text><text x="378" y="243" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="start">i = e = 50°</text><text x="480" y="235" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">minimum deviation</text><text x="362" y="290" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="middle">angle of incidence i (degrees)</text><text x="80" y="20" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="start">angle of deviation δ (degrees)</text></svg>`,
        afterConcept: 5,
      },
      {
        caption: 'Travelling-microscope measurement of a slab’s refractive index: rays from the ink dot $P$ refract at the top face and, traced backward along the dashed extensions, appear to come from $P^{\\prime}$. The three focus levels — ink dot, image, top face — give the apparent thickness $t^{\\prime}$ and the real thickness $t$, and $\\mu = t/t^{\\prime}$.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side view of a travelling microscope focused on an ink dot under a glass slab showing real and apparent thickness"><rect x="180" y="140" width="300" height="60" fill="none" stroke="currentColor" stroke-width="2"/><line x1="150" y1="200" x2="510" y2="200" stroke="currentColor" stroke-width="2.5"/><circle cx="415" cy="198" r="3.5" fill="currentColor"/><circle cx="415" cy="180" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="415" y1="197" x2="403" y2="140" stroke="currentColor" stroke-width="1.5"/><line x1="415" y1="197" x2="427" y2="140" stroke="currentColor" stroke-width="1.5"/><line x1="403" y1="140" x2="389" y2="98" stroke="currentColor" stroke-width="1.5"/><line x1="427" y1="140" x2="441" y2="98" stroke="currentColor" stroke-width="1.5"/><line x1="403" y1="140" x2="414" y2="178" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><line x1="427" y1="140" x2="416" y2="178" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><rect x="385" y="20" width="60" height="68" fill="none" stroke="currentColor" stroke-width="2"/><rect x="397" y="40" width="36" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="415" y1="88" x2="415" y2="176" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/><line x1="480" y1="140" x2="570" y2="140" stroke="currentColor" stroke-dasharray="6 4"/><line x1="415" y1="180" x2="570" y2="180" stroke="currentColor" stroke-dasharray="6 4"/><line x1="510" y1="200" x2="570" y2="200" stroke="currentColor" stroke-dasharray="6 4"/><line x1="575" y1="125" x2="575" y2="215" stroke="currentColor" stroke-width="2"/><line x1="570" y1="140" x2="580" y2="140" stroke="currentColor"/><line x1="570" y1="180" x2="580" y2="180" stroke="currentColor"/><line x1="570" y1="200" x2="580" y2="200" stroke="currentColor"/><line x1="165" y1="145" x2="165" y2="195" stroke="currentColor" stroke-width="1.5"/><polygon points="165,138 160,149 170,149" fill="currentColor"/><polygon points="165,202 160,191 170,191" fill="currentColor"/><line x1="125" y1="185" x2="125" y2="195" stroke="currentColor" stroke-width="1.5"/><polygon points="125,178 120,189 130,189" fill="currentColor"/><polygon points="125,202 120,191 130,191" fill="currentColor"/><text x="155" y="168" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="end">t (real thickness)</text><text x="115" y="192" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="end">t′ (apparent)</text><text x="330" y="132" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="middle">glass slab</text><text x="403" y="196" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="end">P</text><text x="401" y="184" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="end">P′</text><text x="415" y="220" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="middle">ink dot on the base</text><text x="455" y="58" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="start">travelling microscope</text><text x="585" y="144" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="start">top face</text><text x="585" y="184" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="start">image of P</text><text x="585" y="204" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="start">ink dot P</text></svg>`,
        afterConcept: 6,
      },
    ],
    examples: [
      {
        title: 'Focal lengths on the bench — no-parallax and retracing',
        problem: 'An optical bench carries an object pin, a convex lens of focal length 12.0 cm and mirrors on stands; positions are read to 0.1 cm. (i) With a concave mirror alone, the object pin is set 40.0 cm from the mirror and a search pin is moved until parallax with the real image is removed at 24.0 cm from the mirror. Find the focal length. (ii) The concave mirror is replaced by a convex mirror. The lens is placed with the object pin 30.0 cm from it (object at bench reading 10.0 cm, lens at 40.0 cm), and the lens’s real image is found at reading 60.0 cm and marked. The convex mirror is slid in and adjusted until the image coincides with the object pin, the mirror then reading 42.0 cm. Find the convex mirror’s focal length.',
        steps: [
          { label: 'Step 1', text: '(i) No-parallax certifies that the search pin sits in the image plane, so $v = 24.0$ cm is the true image distance. The mirror formula in bench magnitudes gives $f = \\frac{uv}{u+v} = \\frac{40.0 \\times 24.0}{40.0 + 24.0} = \\frac{960}{64.0} = 15.0$ cm.' },
          { label: 'Step 2', text: 'Sanity check the optics: $R = 2f = 30.0$ cm, and the object at 40.0 cm lies beyond the centre of curvature, so the real image must form between focus (15 cm) and centre (30 cm) — 24.0 cm sits neatly between them.' },
          { label: 'Step 3', text: '(ii) The lens alone makes the real image at reading 60.0 cm — check: $\\frac{1}{v} = \\frac{1}{12.0} - \\frac{1}{30.0} = \\frac{3}{60} = \\frac{1}{20.0}$, so $v = 20.0$ cm beyond the lens at 40.0 cm. Mark that spot: it is where the rays are heading when the convex mirror intercepts them.' },
          { label: 'Step 4', text: 'The reflected image coincides with the object pin only if every ray retraces its path, which happens only for normal incidence — rays along radii through the centre of curvature. The lens was converging the rays toward the marked point, so that point is the centre of curvature: $R = 60.0 - 42.0 = 18.0$ cm.' },
          { label: 'Step 5', text: 'Hence $f = \\frac{R}{2} = 9.0$ cm, and by the sign convention the convex mirror’s focal length is negative — a virtual focus 9.0 cm behind its pole.' },
        ],
        result: '(i) $f = 15.0$ cm for the concave mirror; (ii) $R = 18.0$ cm so $f = 9.0$ cm (convex, virtual focus).',
      },
      {
        title: 'The prism: plotting δ against i',
        problem: 'For a triangular glass prism of refracting angle $A = 60^{\\circ}$, the angle of deviation is measured at several angles of incidence:\n\n```text\ni (deg)    35    40    45    50    55    60    65\nδ (deg)   45.6  42.0  40.4  40.0  40.4  41.4  43.0\n```\n\n(i) Describe the plot and locate the minimum deviation. (ii) At which incidence does it occur, and what is the emergence angle there? (iii) Compute the refractive index.',
        steps: [
          { label: 'Step 1', text: 'Plot $i$ on the horizontal axis (it is the independent variable — the one you set) and $\\delta$ vertically. The points trace a U: the deviation falls from 45.6° at $i = 35^{\\circ}$ to a flat bottom, then climbs again to 43.0° at $65^{\\circ}$.' },
          { label: 'Step 2', text: 'The flat bottom is the experimenter’s friend: between 45° and 55° the deviation changes by only 0.4°, so $\\delta_m$ is pinned to $40.0^{\\circ}$ even though the incidence at the minimum is fuzzy. Read the minimum from the drawn curve through all seven points, never from one reading.' },
          { label: 'Step 3', text: 'Symmetric passage: at minimum deviation $i = e = \\frac{A + \\delta_m}{2} = \\frac{60 + 40}{2} = 50^{\\circ}$ — and the curve indeed bottoms out at $i = 50^{\\circ}$, confirming the data.' },
          { label: 'Step 4', text: 'Refractive index: $\\mu = \\frac{\\sin\\frac{A+\\delta_m}{2}}{\\sin\\frac{A}{2}} = \\frac{\\sin 50^{\\circ}}{\\sin 30^{\\circ}} = \\frac{0.766}{0.500} = 1.532$.' },
          { label: 'Step 5', text: 'Note the honest asymmetry of the U: the deviation $42.0^{\\circ}$ occurs at both $i = 40^{\\circ}$ and $i = 62^{\\circ}$, because equal deviations pair through $i + e = A + \\delta$ — the low-incidence side of the curve is the steeper one, a fingerprint of genuinely measured data.' },
        ],
        result: '$\\delta_m = 40.0^{\\circ}$ at $i = e = 50^{\\circ}$; $\\mu = 0.766/0.500 = 1.532 \\approx 1.53$.',
      },
      {
        title: 'Travelling microscope: refractive index of a slab',
        problem: 'A travelling microscope (main scale graduated to 0.5 mm, 50-division vernier) reads, in mm: 12.20 when focused on an ink dot on the base; 22.15 when refocused on the dot’s image after a glass slab is laid over it; 27.20 when focused on the slab’s top surface. All three final approaches are made by turning the fine screw the same way. Find the refractive index.',
        steps: [
          { label: 'Step 1', text: 'Least count first: $LC = \\frac{0.5\\ \\text{mm}}{50} = 0.01$ mm, so each reading is honest to a hundredth of a millimetre. Approaching every focus from the same direction dodges backlash error — the screw’s lost motion would otherwise add a spurious shift to one reading and not the others.' },
          { label: 'Step 2', text: 'Real thickness, top surface to the dot: $t = 27.20 - 12.20 = 15.00$ mm.' },
          { label: 'Step 3', text: 'Apparent thickness, image to the dot: $t^{\\prime} = 22.15 - 12.20 = 9.95$ mm — the slab lifts the image by $15.00 - 9.95 = 5.05$ mm.' },
          { label: 'Step 4', text: 'Near-normal viewing makes apparent depth equal real depth divided by $\\mu$, so $\\mu = \\frac{t}{t^{\\prime}} = \\frac{15.00}{9.95} = 1.508$.' },
          { label: 'Step 5', text: 'Round honestly and check the physics: quote $\\mu \\approx 1.51$, right for a crown-glass slab; and because $t$ and $t^{\\prime}$ are differences of readings on the same scale, any uniform scale error cancels in the ratio — the measurement audits itself.' },
        ],
        result: '$t = 15.00$ mm, $t^{\\prime} = 9.95$ mm, so $\\mu = 15.00/9.95 \\approx 1.51$.',
      },
    ],
    keyTakeaways: [
      'Parallax removed means image and pin are co-planar: the farther of two objects drifts with the moving eye, so the drift direction tells you which way to slide the pin.',
      'Concave mirror and convex lens: locate the image by no-parallax and use $f = \\frac{uv}{u+v}$; with object and screen fixed at $D$, the two conjugate lens positions give $f = \\frac{D^2 - d^2}{4D}$, immune to bench-index error.',
      'Convex mirror by retracing: when the image returns to the object pin, the auxiliary lens’s marked image position is the centre of curvature, so $f = R/2$.',
      'Prism: $\\delta = i + e - A$ dips to $\\delta_m$ at symmetric passage and $\\mu = \\frac{\\sin\\frac{A+\\delta_m}{2}}{\\sin\\frac{A}{2}}$; slab: $\\mu = t/t^{\\prime}$ from travelling-microscope readings taken always in the same screw direction.',
    ],
    quiz: [
      {
        q: 'A triangular prism of refracting angle 60° is found to have a minimum deviation of 40°. The refractive index of its material is approximately:',
        options: ['1.42', '1.53', '1.65', '1.73'],
        answer: 1,
        explanation: 'Step 1: At minimum deviation the ray passes symmetrically, so $i = e = \\frac{A + \\delta_m}{2} = \\frac{60 + 40}{2} = 50^{\\circ}$. Step 2: Apply the prism formula $\\mu = \\frac{\\sin\\frac{A+\\delta_m}{2}}{\\sin\\frac{A}{2}} = \\frac{\\sin 50^{\\circ}}{\\sin 30^{\\circ}}$. Step 3: $\\mu = \\frac{0.766}{0.500} = 1.532 \\approx 1.53$. Step 4: 1.42 is what you get by halving $\\delta_m$ instead of $A + \\delta_m$ in the numerator; 1.73 comes from dividing by $\\sin 60^{\\circ}$ instead of $\\sin 30^{\\circ}$.',
      },
      {
        q: 'While locating an image you move your eye from left to right, and the image appears to drift to the right relative to the reference pin. To remove parallax you should move the pin:',
        options: ['Toward your eye, because the image is nearer than the pin', 'Away from your eye, because the image is farther than the pin', 'In a small circle until the drift averages out', 'Not at all — the parallax is already removed'],
        answer: 1,
        explanation: 'Step 1: The rule of parallax: of two objects, the one farther from the eye appears to move in the same direction as the eye. Step 2: The image drifts with the eye (rightward), so the image is the farther of the two — the pin sits too near. Step 3: Slide the pin away from you along the bench until the relative drift vanishes; pin and image are then co-planar and the pin marks the image. Step 4: Moving the pin toward you widens the separation and increases the drift; co-planarity, not averaging, is the criterion.',
      },
      {
        q: 'In the convex-mirror experiment, the auxiliary lens first forms a real image whose position is marked. The convex mirror is then adjusted until the image coincides with the object pin. The distance between the mirror and the marked position equals:',
        options: ['The focal length of the convex mirror', 'The radius of curvature of the convex mirror', 'Twice the focal length of the auxiliary lens', 'The object distance of the auxiliary lens'],
        answer: 1,
        explanation: 'Step 1: Coincidence of the reflected image with the object pin means every ray has returned along its own path — normal incidence on the mirror. Step 2: Rays meet a spherical mirror normally only when directed along radii, that is, when aimed at the centre of curvature. Step 3: The lens was converging those rays toward the marked point, so the mark sits at the centre of curvature and the mirror-to-mark distance is $R$. Step 4: Hence $f = R/2$ — half the marked distance, not the distance itself.',
      },
      {
        q: 'Object and screen are fixed 80.0 cm apart. A convex lens placed between them forms a sharp image at two positions separated by 40.0 cm. The focal length of the lens is:',
        options: ['10.0 cm', '12.5 cm', '15.0 cm', '20.0 cm'],
        answer: 2,
        explanation: 'Step 1: The displacement (conjugate-position) method gives $f = \\frac{D^2 - d^2}{4D}$. Step 2: Substitute $D = 80.0$ cm and $d = 40.0$ cm: $f = \\frac{6400 - 1600}{320} = \\frac{4800}{320} = 15.0$ cm. Step 3: Consistency check: the two conjugate object distances are $\\frac{D \\pm d}{2} = 60.0$ cm and 20.0 cm, and $\\frac{1}{60} + \\frac{1}{20} = \\frac{4}{60} = \\frac{1}{15}$, as required. Step 4: 20.0 cm would need $d = 0$ (the case $D = 4f$ where the two positions merge); with a real separation of 40 cm the lens must be shorter than that.',
      },
    ],
  },

  // ------------------- phys-m20-s6 · Semiconductor Device Experiments
  {
    sectionId: 'phys-m20-s6',
    readingTime: 9,
    prerequisites: [
      'Molecules, Solids & Conduction: p-n junctions, doping and energy bands',
      'Electricity Experiments (Section 4): meters, rheostats and bench circuits',
    ],
    intro: 'On the bench a semiconductor diode is not a circuit symbol but a two-terminal component whose entire personality is written in one curve: current against voltage. This section wires the two classic tracer experiments — the p-n junction diode in forward and reverse bias, and the Zener diode pushed into its reverse breakdown — and teaches you to read knee voltage, saturation current and breakdown voltage straight off the characteristic. The Zener then earns its keep in a working regulator, where a series resistance must be sized so the diode survives the worst case, which is no load at all. The last experiment needs no power supply: a multimeter on its resistance range can separate a diode, an LED, a resistor and a capacitor in seconds, and doing that from a mixed collection is a listed skill. Throughout, the device physics is taken as read from the condensed-matter chapter; what is tested here is the measurement.',
    objectives: [
      'Wire and trace the forward and reverse characteristics of a p-n junction diode with meters suited to each region',
      'Read knee voltage, reverse saturation current and breakdown voltage off a characteristic curve, and distinguish static from dynamic resistance',
      'Trace a Zener diode’s reverse curve, extract the breakdown voltage, and size the series resistance of a Zener regulator with power checks',
      'Identify a diode, an LED, a resistor and a capacitor from a mixed collection using a multimeter on its resistance range',
    ],
    concepts: [
      {
        term: 'Forward-bias circuit and knee',
        kind: 'method',
        statement: 'Wire the diode with a **milliammeter in series** and the **voltmeter directly across the diode**, the applied voltage being raised in small steps through a rheostat used as a potential divider. Current stays too small to register until the **knee** — about 0.7 V for silicon, 0.3 V for germanium — beyond which it rises steeply.',
        detail: 'The voltmeter goes across the diode alone so that it reads the diode’s voltage and not the ammeter’s small drop; the ammeter then reads the diode current plus the voltmeter’s negligible leakage. Take coarse steps well below the knee and 10–20 mV steps through it — the knee is where the curve turns, and a coarse grid will be stepped right past it. Always keep a fixed series resistance in circuit while exploring: beyond the knee the current doubles every few tens of millivolts, and an unprotected diode goes from safe to destroyed in one knob-turn. Plot current on the vertical axis against voltage horizontally, with the current axis broken or rescaled if 50 mA and 10 µA must share it.',
      },
      {
        term: 'Reverse-bias characteristic',
        kind: 'method',
        statement: 'Reverse the diode and swap the milliammeter for a **microammeter**: the current settles at a small **saturation (leakage) value** almost independent of voltage, until at a large reverse voltage the **breakdown** arrives — the current increases sharply with almost no change in voltage.',
        detail: 'The saturation current is the honest signature of a junction: thermally generated carriers swept across, a few microamperes, doubling roughly every 10 °C of temperature rise. Meter discipline is the whole experiment — a milliammeter reads zero throughout and tells you nothing except at destruction. Plot the reverse branch downward from the origin on the same voltage axis as the forward branch (the classic quadrant picture): saturation hugging the axis, then the plunge at breakdown. For an ordinary diode the breakdown voltage is far off the comfortable scale and the region is avoided in service; the next concept is the diode that lives there on purpose.',
      },
      {
        term: 'Zener breakdown',
        kind: 'definition',
        statement: 'A Zener diode is a **heavily doped** junction whose depletion layer is correspondingly thin, so a modest reverse voltage already produces a field strong enough to generate carriers directly — breakdown arrives at a **sharp, designed voltage** $V_z$. Once there, the reverse current can swing over a wide range while the terminal voltage stays almost exactly $V_z$.',
        detail: 'Finding $V_z$ on the bench: run the reverse characteristic with the microammeter, and when the current begins to climb swap to the milliampere range; the voltage at which the current first rises abruptly — the knee of the reverse curve — is $V_z$, readable to a tenth of a volt because the curve beyond it is nearly vertical. Contrast with the ordinary diode: same experiment, but its lightly doped junction breaks down at a larger, softer, less controlled voltage, and sustained operation there destroys it. The Zener is built to be operated in breakdown, limited only by its power rating $P = V_z I_z$. A typical small Zener is marked like 5.6 V, 0.5 W — meaning it holds 5.6 V while dissipating up to half a watt.',
      },
      {
        term: 'The Zener regulator',
        kind: 'method',
        statement: 'Feed the unregulated $V_{in}$ through a series resistance $R_s$ to a Zener in parallel with the load; the output sits at $V_z$. Size the resistance at the worst case, full load, where the Zener current has fallen to nearly zero: $$R_s = \\frac{V_{in} - V_z}{I_{L(max)}}.$$ The Zener then quietly absorbs whatever current the load does not take.',
        detail: 'The bookkeeping has three cases. Zero load (worst case for the diode): the Zener carries everything, $I_z = \\frac{V_{in}-V_z}{R_s}$, and must survive $P_z = V_z I_z$. Full load: the load takes all the series current and $I_z \\approx 0$, yet the output stays at $V_z$ because $R_s$ still drops exactly $V_{in} - V_z$. In between, $I_z + I_L$ is constant at $\\frac{V_{in}-V_z}{R_s}$ — that constancy **is** the regulation. Check the resistor too: it dissipates $I^2R_s$ continuously. When $V_{in}$ wobbles, only $I_z$ wobbles; the output moves by the wobble times the Zener’s tiny dynamic resistance, which is the next-to-nothing slope of the near-vertical branch.',
      },
      {
        term: 'Multimeter component identification',
        kind: 'method',
        statement: 'On the resistance range the meter drives a small current through the component and reads the result. A **diode** shows low resistance one way and very high the other; an **LED** shows the same asymmetry and glows when forward biased (threshold about 1.8–2 V); a **resistor** reads the same both ways, matching its colour code; a **capacitor** kicks an analog needle toward zero and lets it fall back to infinity — the charging current — while a digital meter shows a rising resistance count.',
        detail: 'The asymmetry test is one hundred per cent selective for junction devices, and the glow settles diode versus LED. For the resistor, decode the colour bands first and check the meter agrees within the tolerance band — a reading far outside it means either misreading the bands or a faulty component. For the capacitor, use a medium range and watch the kick: bigger capacitance, bigger kick, and an electrolytic that shows no kick at all is open. One trap worth knowing: many analog meters output the **opposite polarity** from their terminal colours in resistance mode, so identify the anode by the low-resistance lead combination you actually observed, and verify with a known diode before trusting the colours.',
      },
      {
        term: 'Static versus dynamic resistance',
        kind: 'insight',
        statement: 'Two different resistances live on the same curve: **static** resistance $R = V/I$ at a point, and **dynamic** resistance $r_d = \\frac{\\Delta V}{\\Delta I}$ — the reciprocal of the slope between two nearby points. Beyond the knee both fall to a few ohms, and in Zener breakdown the dynamic resistance is nearly zero while the static value stays small but finite.',
        detail: 'Numbers make the distinction stick: at $V = 0.80$ V a silicon diode carrying 18 mA has $R = \\frac{0.80}{0.018} = 44\\ \\Omega$, yet between 0.70 and 0.80 V the same device shows $r_d = \\frac{0.10}{0.0168} \\approx 6\\ \\Omega$ — a sevenfold difference over 100 mV. Static resistance describes what a DC circuit sees; dynamic resistance is what a small signal riding on the operating point sees, and it is the quantity that keeps shrinking as the curve steepens. Reading both off a plotted characteristic — pick two close points for $r_d$, one point for $R$ — is a standard bench question, and so is knowing which one a regulator needs to be small.',
      },
    ],
    figures: [
      {
        caption: 'The junction characteristic in one picture: forward current rides the axis until the knee (about 0.7 V for silicon), then climbs steeply; in reverse, a microampere saturation precedes a sharp breakdown — for a Zener this happens at a designed voltage $V_z$ and the branch is nearly vertical. Note the different current scales above and below the voltage axis.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Current versus voltage characteristic of a diode showing forward knee, reverse saturation and Zener breakdown"><line x1="30" y1="150" x2="670" y2="150" stroke="currentColor" stroke-width="1.5"/><polygon points="670,150 658,145 658,155" fill="currentColor"/><line x1="280" y1="290" x2="280" y2="20" stroke="currentColor" stroke-width="1.5"/><polygon points="280,20 275,32 285,32" fill="currentColor"/><polygon points="280,290 275,278 285,278" fill="currentColor"/><text x="280" y="14" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="middle">current I</text><text x="645" y="171" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="middle">voltage V</text><text x="270" y="166" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">0</text><line x1="356" y1="150" x2="356" y2="157" stroke="currentColor"/><line x1="432" y1="150" x2="432" y2="157" stroke="currentColor"/><line x1="508" y1="150" x2="508" y2="157" stroke="currentColor"/><line x1="584" y1="150" x2="584" y2="157" stroke="currentColor"/><text x="356" y="170" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">0.2</text><text x="432" y="170" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">0.4</text><text x="508" y="170" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">0.6</text><text x="584" y="170" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">0.8</text><line x1="220" y1="143" x2="220" y2="150" stroke="currentColor"/><line x1="160" y1="143" x2="160" y2="150" stroke="currentColor"/><line x1="100" y1="143" x2="100" y2="150" stroke="currentColor"/><text x="220" y="140" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">−2</text><text x="160" y="140" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">−4</text><text x="100" y="140" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">−6</text><path d="M 280 150 L 508 150 L 527 149 L 546 147 L 565 138 L 584 107 L 596 60 L 603 32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><polygon points="605,21 596,38 609,36" fill="currentColor"/><path d="M 280 150 L 268 156 L 250 162 L 200 164 L 150 165 L 132 165.5 L 122 167 L 114 180 L 108 205 L 104 235 L 101 262 L 99 276" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><polygon points="99,288 93,273 105,273" fill="currentColor"/><line x1="116" y1="150" x2="116" y2="254" stroke="currentColor" stroke-dasharray="6 4"/><text x="185" y="268" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">Vz (breakdown)</text><text x="205" y="183" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">reverse saturation (µA)</text><text x="470" y="60" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">forward current (mA)</text><line x1="546" y1="147" x2="546" y2="205" stroke="currentColor" stroke-dasharray="6 4"/><text x="546" y="220" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">knee ≈ 0.7 V (Si)</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Forward characteristic: knee and dynamic resistance',
        problem: 'A silicon p-n junction diode is wired with a milliammeter in series and a voltmeter directly across it, the voltage being raised through a rheostat used as a potential divider:\n\n```text\nV (volt)   0.30  0.50  0.60  0.65  0.70  0.75  0.80  0.85\nI (mA)     0.00  0.01  0.06  0.32  1.25  5.0   18.0  50.0\n```\n\n(i) Where is the knee? (ii) Find the static and the dynamic resistance at 0.80 V. (iii) Why does the current behave this way?',
        steps: [
          { label: 'Step 1', text: 'Below about 0.5 V the current is too small for the milliammeter — the diode is effectively a closed book; from 0.6 V onward every 50 mV multiplies the current roughly fivefold.' },
          { label: 'Step 2', text: 'The knee is where the curve turns, at about 0.70 V for silicon (0.3 V for germanium) — the forward voltage at which the current first becomes appreciable, here about a milliampere.' },
          { label: 'Step 3', text: 'Static resistance at 0.80 V: $R = \\frac{V}{I} = \\frac{0.80}{18.0\\ \\text{mA}} = \\frac{0.80}{0.0180} \\approx 44\\ \\Omega$.' },
          { label: 'Step 4', text: 'Dynamic resistance from the slope between 0.70 and 0.80 V: $r_d = \\frac{\\Delta V}{\\Delta I} = \\frac{0.10}{(18.0 - 1.25)\\ \\text{mA}} = \\frac{0.10}{0.01675} \\approx 6\\ \\Omega$ — seven times smaller than the static value at the same point.' },
          { label: 'Step 5', text: 'The physics, taken as read from the condensed-matter chapter: forward bias lowers the junction barrier, and once the applied voltage approaches it, the diffusion current rises exponentially with voltage — the plotted curve is that exponential seen through a meter, which is why the last 100 mV does more than the first 600.' },
        ],
        result: 'Knee ≈ 0.70 V; static $R \\approx 44\\ \\Omega$ at 0.80 V; dynamic $r_d \\approx 6\\ \\Omega$ between 0.70 and 0.80 V.',
      },
      {
        title: 'Zener reverse curve: reading off V_z',
        problem: 'The same bench, but a Zener diode is reverse biased and the microammeter replaces the milliammeter:\n\n```text\nV_R (volt)    1.0    3.0    5.0    5.2    5.4    5.5    5.6    5.8\nI_R           0      2 µA   5 µA   8 µA   20 µA  0.2 mA 2.0 mA 15 mA\n```\n\nWhere is the breakdown voltage, and why is this curve so much sharper than an ordinary diode’s?',
        steps: [
          { label: 'Step 1', text: 'Up to 5.4 V the reverse current is microampere leakage, almost independent of voltage — the saturation region, the same behaviour any junction shows in reverse.' },
          { label: 'Step 2', text: 'Between 5.5 and 5.6 V the current jumps tenfold (0.2 mA to 2.0 mA), and by 5.8 V it is 15 mA while the voltage has crept only 0.2 V: the characteristic has gone nearly vertical.' },
          { label: 'Step 3', text: 'The breakdown voltage is read at the knee of that rise: $V_z \\approx 5.6$ V — the voltage the diode will hold almost exactly across its entire rated current range.' },
          { label: 'Step 4', text: 'The sharpness is designed: heavy doping makes the depletion layer so thin that a modest reverse voltage already produces a field strong enough to liberate carriers in the layer itself, so breakdown arrives at a precise, repeatable voltage instead of the large, soft onset of a lightly doped junction.' },
          { label: 'Step 5', text: 'Operating rule from the curve: an ordinary diode is damaged by sustained breakdown, while the Zener is built to live there — provided $P = V_z I_z$ stays under its power rating, the one number the plot itself cannot show.' },
        ],
        result: '$V_z \\approx 5.6$ V, read at the knee where the reverse current first rises abruptly.',
      },
      {
        title: 'Designing the Zener regulator',
        problem: 'A 6.0 V, 0.5 W Zener is to stabilise a nominally 12 V supply for a load that draws up to 60 mA. (i) Choose the series resistance. (ii) Check the power dissipated in the Zener and in the resistor at zero load. (iii) What are the two currents when the load is 200 Ω?',
        steps: [
          { label: 'Step 1', text: 'Worst case for the Zener is no load at all — it must then carry the entire series current. Size $R_s$ so that this current equals the maximum load current: $R_s = \\frac{V_{in} - V_z}{I_{L(max)}} = \\frac{12 - 6}{0.060} = 100\\ \\Omega$.' },
          { label: 'Step 2', text: 'Zero load: $I_z = \\frac{12 - 6}{100} = 60$ mA, so $P_z = V_z I_z = 6.0 \\times 0.060 = 0.36$ W — inside the 0.5 W rating. The resistor carries the same current: $P_R = I^2R_s = 0.060^2 \\times 100 = 0.36$ W, so fit at least a 0.5 W resistor.' },
          { label: 'Step 3', text: 'Full load, 60 mA: the load takes all 60 mA and the Zener current falls to nearly zero — yet the output stays at 6.0 V, because $R_s$ still drops exactly $12 - 6 = 6$ V at that current.' },
          { label: 'Step 4', text: 'Intermediate load, 200 Ω: $I_L = \\frac{6.0}{200} = 30$ mA, so $I_z = 60 - 30 = 30$ mA and $P_z = 6.0 \\times 0.030 = 0.18$ W. Regulation works precisely because the Zener absorbs whatever the load releases, holding the output at $V_z$.' },
        ],
        result: '$R_s = 100\\ \\Omega$; at zero load $I_z = 60$ mA with $P_z = P_R = 0.36$ W (both within 0.5 W ratings); at 200 Ω the load and the Zener carry 30 mA each.',
      },
    ],
    keyTakeaways: [
      'Forward: negligible current until the knee (Si ≈ 0.7 V, Ge ≈ 0.3 V), then a steep exponential rise; reverse: microampere saturation until breakdown — and the meters must match the region (mA forward, µA reverse).',
      'A Zener’s heavily doped junction breaks down sharply at a designed $V_z$; as a regulator, $R_s = \\frac{V_{in}-V_z}{I_{L(max)}}$, and the worst case is zero load, when the Zener carries everything — check $V_zI_z$ and $I^2R_s$ against the ratings.',
      'Multimeter resistance mode sorts the mixed collection: diode asymmetric, LED asymmetric and glowing, resistor symmetric and matching its colour code, capacitor a needle kick that settles back to infinity.',
      'Static resistance $V/I$ and dynamic resistance $\\Delta V/\\Delta I$ differ everywhere on a curve: about 44 Ω versus 6 Ω at 0.80 V on a typical silicon diode, and in breakdown the Zener’s dynamic resistance is nearly zero — that is what regulation means.',
    ],
    quiz: [
      {
        q: 'While tracing the forward characteristic of a p-n junction diode, the current first becomes appreciable (of order a milliampere) when the voltage across a silicon diode reaches about:',
        options: ['0.3 V', '0.7 V', '1.4 V', '3.0 V'],
        answer: 1,
        explanation: 'Step 1: Forward current stays negligible until the applied voltage approaches the junction’s barrier potential. Step 2: For silicon that barrier is about 0.7 V (germanium about 0.3 V) — this is the knee of the characteristic. Step 3: Beyond the knee the current rises steeply, which is why a series resistance is kept in circuit while tracing. Step 4: 0.3 V is the germanium knee; 1.4 V and 3.0 V are far beyond where an unprotected silicon junction would already have been damaged by excessive current.',
      },
      {
        q: 'On a multimeter’s resistance range, a two-terminal component from a mixed collection shows a few hundred ohms with the leads one way and an open circuit with the leads reversed — and it glows faintly in the low-resistance direction. The component is:',
        options: ['An ordinary diode', 'A light-emitting diode', 'A resistor', 'A capacitor'],
        answer: 1,
        explanation: 'Step 1: Asymmetric resistance — low one way, open the other — is the signature of any junction device: the meter’s internal battery forward biases it one way and reverse biases it the other. Step 2: The faint glow in the forward direction identifies the LED, whose forward threshold of about 1.8–2 V is low enough for the meter’s test voltage to drive visible emission. Step 3: A resistor would read the same both ways and match its colour code; a capacitor would kick the needle and return to infinity without glowing. Step 4: Polarity bonus: the lead combination giving the low reading marks the anode — but verify the meter’s polarity convention first, since many analog meters reverse it in resistance mode.',
      },
      {
        q: 'An analog multimeter on its resistance range is connected to an uncharged capacitor. The expected behaviour of the needle is:',
        options: ['It stays at infinity — a capacitor conducts nothing', 'It kicks toward zero and then settles back to infinity as the capacitor charges', 'It reads a steady low resistance proportional to the capacitance', 'It oscillates continuously about the infinity mark'],
        answer: 1,
        explanation: 'Step 1: The meter’s internal battery drives a charging current the instant it is connected, so the needle kicks toward the low-resistance side. Step 2: As the capacitor charges, the current decays to zero and the needle settles back to infinity, the steady-state open circuit. Step 3: The kick is a rough capacitance gauge — bigger capacitors kick harder and settle more slowly; digital meters show the same physics as a rising resistance reading. Step 4: A steady finite reading indicates a resistor; a diode holds a steady asymmetric reading in each direction; nothing oscillates.',
      },
      {
        q: 'A 9.0 V Zener diode is used to regulate a 15 V supply for a load that draws up to 60 mA. The series resistance should be about:',
        options: ['60 Ω', '100 Ω', '150 Ω', '250 Ω'],
        answer: 1,
        explanation: 'Step 1: At full load the Zener current is nearly zero, so the series resistor must carry the load current while dropping $V_{in} - V_z = 15 - 9 = 6$ V. Step 2: $R_s = \\frac{6.0}{0.060} = 100\\ \\Omega$. Step 3: Zero-load check: the Zener would then carry $\\frac{6.0}{100} = 60$ mA and dissipate $9.0 \\times 0.060 = 0.54$ W, so a 1 W rating would be prudent. Step 4: 60 Ω would push 100 mA through the Zener at zero load (0.9 W — destruction); 150 Ω and 250 Ω could not supply the full 60 mA at 6 V of drop, and the output would sag below 9 V at full load.',
      },
    ],
  },

  // ------------------------------ phys-m20-s7 · The Official Experiments
  {
    sectionId: 'phys-m20-s7',
    readingTime: 10,
    prerequisites: [
      'Units, Measurement & Vectors: significant figures, precision and uncertainty',
      'Oscillations: the simple pendulum and its period formula',
      'The bench experiments of Sections 1–6 of this chapter, whose data this section analyses',
    ],
    intro: 'Every experiment in this unit ends the same way: a table of readings, a graph, and a number with an error attached. This closing section is about that last stretch — the craft that turns honest data into a defensible result, common to the pendulum, the Young’s modulus wire, the capillary tube, the calorimeter, the u–v mirror bench, the resonance column, the Ohm’s law circuit and the metre bridge alike. You will learn to combine repeated readings into a mean with an absolute error, to propagate that error through the products, quotients and powers that every one of these formulas contains, and to report the final value to honest significant figures. Just as important is graph craft: choosing the plot that makes the theory a straight line, drawing a best-fit line that balances the scatter, and computing its slope from two widely separated points on the line rather than from any data point. The individual procedures stay where they belong, in Sections 1–6; what is collected here is the analysis layer that the testing agency singles out for numerical-value questions.',
    objectives: [
      'Reduce repeated readings to a mean with a mean absolute error, and express it as a relative or percentage error',
      'Propagate errors through sums, products, quotients and powers — including g from a pendulum and resistivity from a metre-bridge wire',
      'Linearise each prescribed experiment into a straight-line plot and extract the result from the slope or intercept',
      'Draw and read best-fit lines, bracket the slope with extreme lines, and report results to honest significant figures',
    ],
    concepts: [
      {
        term: 'Mean and absolute error',
        kind: 'definition',
        statement: 'With $n$ readings $x_i$ of the same quantity, quote the mean $$\\bar{x} = \\frac{1}{n}\\sum x_i$$ together with the **mean absolute error** $$\\Delta\\bar{x} = \\frac{1}{n}\\sum \\lvert x_i - \\bar{x} \\rvert,$$ writing the result as $\\bar{x} \\pm \\Delta\\bar{x}$. The **relative error** is $\\frac{\\Delta\\bar{x}}{\\bar{x}}$, and the percentage error is that times 100.',
        detail: 'Four readings of a wire’s diameter, 2.01, 1.99, 2.03 and 1.97 mm, give $\\bar{d} = 2.00$ mm and $\\Delta\\bar{d} = \\frac{0.01+0.01+0.03+0.03}{4} = 0.02$ mm, so $d = 2.00 \\pm 0.02$ mm — the claim is only that the true value lies in that band. Two floors apply: no error can be quoted smaller than the instrument’s least count, and a quantity that refuses to repeat (a wire genuinely non-uniform) should have its spread reported, not hidden by averaging. Note what the mean absolute error is not: it is not the standard deviation, though the two usually agree to within a factor of about 1.25 for a handful of readings, and the simpler quantity is what the prescribed list expects.',
      },
      {
        term: 'Error propagation rules',
        kind: 'law',
        statement: 'For $Z = A \\pm B$, absolute errors add: $\\Delta Z = \\Delta A + \\Delta B$. For $Z = AB$ or $Z = A/B$, relative errors add: $\\frac{\\Delta Z}{Z} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}$. For powers, $$Z = \\frac{A^p B^q}{C^r} \\Rightarrow \\frac{\\Delta Z}{Z} = p\\frac{\\Delta A}{A} + q\\frac{\\Delta B}{B} + r\\frac{\\Delta C}{C}.$$ Exact constants like $4\\pi^2$ carry no error.',
        detail: 'These are worst-case rules — both errors pushing the same way — which is the convention the prescribed experiments use. The power rule is the workhorse of the whole list. Pendulum: $g = \\frac{4\\pi^2 L}{T^2}$ gives $\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta T}{T}$, so a 1% timing error costs 2% in g. Capillary rise: $T_s = \\frac{rh\\rho g}{2}$ gives $\\frac{\\Delta T_s}{T_s} = \\frac{\\Delta r}{r} + \\frac{\\Delta h}{h}$; with $r = 0.20 \\pm 0.01$ mm and $h = 7.0 \\pm 0.1$ cm that is 5% + 1.4% ≈ 6.4%, and $T_s = 0.069 \\pm 0.004$ N/m. Metre-bridge resistivity: $\\rho = \\frac{\\pi d^2 X}{4\\ell}$ gives $2\\frac{\\Delta d}{d} + \\frac{\\Delta X}{X} + \\frac{\\Delta\\ell}{\\ell}$ — the diameter arrives squared, so it dominates the budget. The universal lesson: find the term with the biggest multiplier on the least precise measurement, and spend your care there.',
      },
      {
        term: 'Least count, zero error',
        kind: 'method',
        statement: 'An instrument can do no better than its **least count** — 0.01 cm for vernier calipers, 0.001 cm for a screw gauge, 0.01 mm for the travelling microscope’s vernier — and every reading must first be corrected for **zero error**, the reading with the instrument closed, which is subtracted from each observation.',
        detail: 'Where the least counts come from: vernier calipers with 10 vernier divisions spanning 9 main-scale millimetres give $LC = 0.1$ mm; a screw gauge with 0.5 mm pitch and 50 circular divisions gives $LC = 0.01$ mm. The zero check is free and mandatory — with jaws closed, whatever the instrument reads is an offset that has silently contaminated every measurement made since it drifted. Measure diameters at several places and orientations along a wire and average: real wire is not uniform, and the spread then honestly belongs in the error. The metre bridge reads its 100 cm scale to about 0.1 cm, and the post office box — the same Wheatstone network with plug-in ratio arms — is limited by its resistance steps instead; both reduce an unknown resistance to a ratio, so their calibration errors mostly cancel.',
      },
      {
        term: 'Linearising the experiment',
        kind: 'method',
        statement: 'Plot the combination of measured quantities that theory makes a **straight line**: $T^2$ against $L$ for the pendulum (slope $\\frac{4\\pi^2}{g}$), $V$ against $I$ for Ohm’s law (slope $R$, line through the origin), extension against load for Young’s modulus (slope $\\frac{L}{AY}$), $\\frac{1}{v}$ against $\\frac{1}{u}$ for mirrors and lenses (intercepts $\\frac{1}{f}$), resonant length against resonance order for the resonance column (slope $\\frac{\\lambda}{2}$).',
        detail: 'Why bother: a straight line averages the whole data set into two parameters, makes curvature visible (curvature means the theory or the technique is wrong somewhere), and turns the extraction of the result into reading a slope. Follow each chain to its end. Pendulum: slope $\\to g = \\frac{4\\pi^2}{\\text{slope}}$. Ohm’s law: the line through the origin **is** the verification — proportionality is the claim, and a straight line through the origin is the evidence, with $R$ as its slope. Young’s modulus: $Y = \\frac{L}{A \\times \\text{slope}}$ from the extension–load line. Resonance column: slope gives $\\frac{\\lambda}{2}$, then $v = f\\lambda$ with the fork’s frequency; the intercept, far from being a nuisance, is the end correction. Mirror bench: the $\\frac{1}{v}$-against-$\\frac{1}{u}$ line has slope $-1$ and intercepts $\\frac{1}{f}$ on both axes — two readings of one quantity.',
      },
      {
        term: 'Best-fit line discipline',
        kind: 'method',
        statement: 'Draw the line to **balance** the plotted points — roughly as many above as below, deviations spread along the whole length — and compute the slope from **two widely separated points on the line itself**, never from data points. The formal version is the least-squares line, the one minimising $\\sum(\\text{residual})^2$.',
        detail: 'Why on-line points: the slope is a difference quotient, and reading errors in the line’s position are divided by a long baseline instead of a short one — the same reason the pendulum timing error shrinks when 20 oscillations are timed. Do not force the line through the origin unless the theory demands it ($T^2$ vs $L$ and $V$ vs $I$ do; extension vs load does too); where the theory does not, a small intercept is diagnostics, not nuisance — the resonance column’s intercept is the end correction, and a $V$–$I$ line missing the origin is telling you about meter offset. Bracket the uncertainty with **extreme lines**: the steepest and shallowest lines still consistent with the points give the slope range, and half that range is a defensible error to quote.',
      },
      {
        term: 'Reporting the final result',
        kind: 'insight',
        statement: 'Round the error to one significant figure, quote the value to the same decimal place as the error, and give the result no more significant figures than the least precise measurement supports: $g = 9.79 \\pm 0.10\\ \\text{m/s}^2$ says everything the data can say and not one digit more.',
        detail: 'The rules in action: a screw-gauge diameter is $2.00 \\pm 0.02$ mm, not $2.0037 \\pm 0.02$ mm — the extra digits are noise wearing a lab coat. When inputs of different precision combine, the least precise one caps the output: the calorimeter’s 15 °C rise known to about 1.3% caps the specific heat at three figures at best, whatever the masses say. And always close the loop against expectation: a $g$ of $9.79 \\pm 0.10$ m/s² agrees with the accepted value because the accepted value lies inside the error band, while $9.79 \\pm 0.01$ would be a claim worth re-checking. The error band is not an apology appended to the answer — it is the answer.',
      },
    ],
    figures: [
      {
        caption: 'Best-fit craft on a $T^2$-versus-$L$ plot (a second pendulum data set): the line balances the points above and below and is drawn through the origin because the theory demands it. The slope is read from the dashed triangle between two widely separated points **on the line** — here $\\frac{\\Delta y}{\\Delta x} = \\frac{3.63}{0.900} \\approx 4.03\\ \\text{s}^2/\\text{m}$, not from any plotted data point.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatter plot of T squared against length with a best-fit straight line and a slope triangle between two widely separated points on the line"><line x1="50" y1="260" x2="680" y2="260" stroke="currentColor" stroke-width="1.5"/><polygon points="680,260 668,255 668,265" fill="currentColor"/><line x1="60" y1="270" x2="60" y2="25" stroke="currentColor" stroke-width="1.5"/><polygon points="60,25 55,37 65,37" fill="currentColor"/><line x1="160" y1="260" x2="160" y2="266" stroke="currentColor"/><line x1="260" y1="260" x2="260" y2="266" stroke="currentColor"/><line x1="360" y1="260" x2="360" y2="266" stroke="currentColor"/><line x1="460" y1="260" x2="460" y2="266" stroke="currentColor"/><line x1="560" y1="260" x2="560" y2="266" stroke="currentColor"/><text x="160" y="278" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">0.2</text><text x="260" y="278" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">0.4</text><text x="360" y="278" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">0.6</text><text x="460" y="278" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">0.8</text><text x="560" y="278" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">1.0</text><text x="52" y="274" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">0</text><line x1="60" y1="214" x2="66" y2="214" stroke="currentColor"/><line x1="60" y1="168" x2="66" y2="168" stroke="currentColor"/><line x1="60" y1="122" x2="66" y2="122" stroke="currentColor"/><line x1="60" y1="76" x2="66" y2="76" stroke="currentColor"/><text x="52" y="218" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">1</text><text x="52" y="172" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">2</text><text x="52" y="126" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">3</text><text x="52" y="80" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="end">4</text><line x1="60" y1="260" x2="610" y2="56" stroke="currentColor" stroke-width="2.5"/><circle cx="160" cy="226" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="260" cy="187" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="310" cy="167" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="360" cy="151" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="460" cy="108" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="510" cy="94" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="560" cy="67" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="110" y1="242" x2="560" y2="242" stroke="currentColor" stroke-dasharray="6 4"/><line x1="560" y1="242" x2="560" y2="75" stroke="currentColor" stroke-dasharray="6 4"/><circle cx="110" cy="242" r="3" fill="currentColor"/><circle cx="560" cy="75" r="3" fill="currentColor"/><text x="335" y="234" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="middle">Δx = 0.900 m</text><text x="575" y="160" font-size="11" fill="currentColor" font-family="sans-serif" text-anchor="start">Δy = 3.63 s²</text><text x="350" y="105" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="middle">slope = Δy / Δx</text><text x="615" y="284" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="middle">length L (m)</text><text x="75" y="20" font-size="12" fill="currentColor" font-family="sans-serif" text-anchor="start">T² (s²)</text></svg>`,
        afterConcept: 5,
      },
    ],
    examples: [
      {
        title: 'Pendulum: from readings to g, with an error',
        problem: 'For a simple pendulum, the time for 20 oscillations is recorded at four lengths:\n\n```text\nL (m)   0.400  0.600  0.800  1.000\nt (s)   25.4   31.1   35.9   40.2\n```\n\nThe metre scale used for L can be read to about ±0.005 m at best. Find g from a suitable plot, with its uncertainty.',
        steps: [
          { label: 'Step 1', text: 'Reduce the raw data: $T = \\frac{t}{20} = 1.270, 1.555, 1.795, 2.010$ s, so $T^2 = 1.613, 2.418, 3.222, 4.040$ s². Timing 20 swings and dividing by 20 cuts the reaction-time error by a factor of 20 — the single cheapest accuracy gain on this bench.' },
          { label: 'Step 2', text: 'Linearise: $T^2 = \\frac{4\\pi^2}{g}L$ is a straight line through the origin on a $T^2$-against-$L$ plot, with slope $\\frac{4\\pi^2}{g}$ — so $T^2$ goes on the vertical axis.' },
          { label: 'Step 3', text: 'Draw the best-fit line balancing the four points; it passes through the origin within reading error. Read the slope from two widely separated points on the line itself, say (0.100, 0.40) and (1.000, 4.03): slope $= \\frac{4.03 - 0.40}{1.000 - 0.100} = \\frac{3.63}{0.900} = 4.03\\ \\text{s}^2/\\text{m}$.' },
          { label: 'Step 4', text: 'Invert for the result: $g = \\frac{4\\pi^2}{\\text{slope}} = \\frac{39.478}{4.03} = 9.79\\ \\text{m/s}^2$.' },
          { label: 'Step 5', text: 'Bracket the uncertainty with extreme lines: the steepest and shallowest lines still consistent with the points have slopes near 4.08 and 4.00, which would give g from 9.68 to 9.87 m/s² — so quote $g = 9.79 \\pm 0.10$ m/s², about 1%. The ±0.005 m length error is only 0.5%, so the timing scatter dominates the budget.' },
        ],
        result: 'g = 9.79 ± 0.10 m/s², from a best-fit slope of 4.03 s²/m on the $T^2$-versus-$L$ plot.',
      },
      {
        title: 'Resistivity of a wire — and where its error lives',
        problem: 'In the metre-bridge experiment of Section 4, balance is found at 40.0 cm from the left end (scale read to ±0.1 cm) with a 6.00 Ω standard resistance in the opposite gap. The wire under test is 0.750 m long (±0.001 m); its diameter, from several screw-gauge readings corrected for zero error, averages 0.50 mm with an uncertainty of 0.01 mm. Find the resistivity with its error.',
        steps: [
          { label: 'Step 1', text: 'Resistance from the Wheatstone balance — the post office box does the identical arithmetic with plug-in ratio arms: $X = R\\frac{\\ell}{100-\\ell} = 6.00 \\times \\frac{40.0}{60.0} = 4.00\\ \\Omega$.' },
          { label: 'Step 2', text: 'Cross-sectional area from the screw-gauge diameter: $A = \\frac{\\pi d^2}{4} = \\frac{\\pi (0.50 \\times 10^{-3})^2}{4} = 1.96 \\times 10^{-7}\\ \\text{m}^2$.' },
          { label: 'Step 3', text: 'Resistivity: $\\rho = \\frac{XA}{\\ell} = \\frac{4.00 \\times 1.96 \\times 10^{-7}}{0.750} = 1.05 \\times 10^{-6}\\ \\Omega\\cdot\\text{m}$ — a nichrome-type alloy value.' },
          { label: 'Step 4', text: 'Propagate with the power rule: $\\frac{\\Delta\\rho}{\\rho} = 2\\frac{\\Delta d}{d} + \\frac{\\Delta X}{X} + \\frac{\\Delta\\ell}{\\ell}$. The balance-point term is $0.1\\,(\\frac{1}{40} + \\frac{1}{60}) \\approx 0.004$ and the length term $\\frac{0.001}{0.750} \\approx 0.001$, while the diameter term is $2 \\times \\frac{0.01}{0.50} = 0.040$.' },
          { label: 'Step 5', text: 'Total $\\frac{\\Delta\\rho}{\\rho} \\approx 0.045$, so $\\Delta\\rho \\approx 0.05 \\times 10^{-6}$ and $\\rho = (1.05 \\pm 0.05) \\times 10^{-6}\\ \\Omega\\cdot\\text{m}$. The diameter alone contributes 4 of the 4.5 per cent — inputs that enter squared must be measured with the finest instrument on the bench, hence the screw gauge and several diameters averaged along the wire.' },
        ],
        result: 'X = 4.00 Ω; $\\rho = (1.05 \\pm 0.05) \\times 10^{-6}\\ \\Omega\\cdot\\text{m}$, dominated by the $2\\frac{\\Delta d}{d}$ term.',
      },
      {
        title: 'Calorimeter: the bookkeeping and the delicate number',
        problem: 'In the specific-heat experiment of Section 3, a 400 g copper solid at 100.0 °C is dropped into 300 g of a liquid at 20.0 °C held in a copper calorimeter and stirrer of water equivalent 7.4 g; the mixture settles at 35.0 °C. Take the specific heat of copper as 0.093 cal/g·°C and each thermometer reading as good to ±0.1 °C. Find the liquid’s specific heat and the dominant error.',
        steps: [
          { label: 'Step 1', text: 'Heat lost by the hot solid: $m_s c_s (\\theta_s - \\theta_m) = 400 \\times 0.093 \\times (100.0 - 35.0) = 400 \\times 0.093 \\times 65.0 = 2418$ cal.' },
          { label: 'Step 2', text: 'Heat gained by the liquid and the calorimeter (through its water equivalent): $300\\, c_l\\, (35.0 - 20.0) + 7.4 \\times 15.0 = 4500\\, c_l + 111$ cal.' },
          { label: 'Step 3', text: 'Balance and solve: $2418 = 4500\\, c_l + 111$, so $c_l = \\frac{2307}{4500} = 0.513 \\approx 0.51$ cal/g·°C, which is about $2.1 \\times 10^3$ J/kg·°C.' },
          { label: 'Step 4', text: 'Propagate: the masses are good to 0.1 g in hundreds (0.03%), but the temperature differences are not equal partners — $\\frac{\\Delta(\\theta_s - \\theta_m)}{65.0} = \\frac{0.2}{65.0} = 0.3\\%$ while $\\frac{\\Delta(\\theta_m - \\theta_l)}{15.0} = \\frac{0.2}{15.0} = 1.3\\%$.' },
          { label: 'Step 5', text: 'Total $\\frac{\\Delta c_l}{c_l} \\approx 1.7\\%$, giving $c_l = 0.51 \\pm 0.01$ cal/g·°C. The smallest temperature difference carries the biggest relative error — it deserves the most careful thermometer work and a thorough stir before every reading; the masses barely matter at all.' },
        ],
        result: '$c_l = 0.51 \\pm 0.01$ cal/g·°C ≈ $(2.1 \\pm 0.04) \\times 10^3$ J/kg·°C; the 15 °C rise dominates the error budget.',
      },
    ],
    keyTakeaways: [
      'Quote $\\bar{x} \\pm \\frac{1}{n}\\sum\\lvert x_i - \\bar{x}\\rvert$: absolute errors add in sums and differences, relative errors add in products and quotients, and exponents multiply relative errors — so $g = \\frac{4\\pi^2L}{T^2}$ inherits twice the timing error.',
      'Least count floors every reading (0.01 cm vernier, 0.001 cm screw gauge, 0.01 mm travelling microscope) and the zero error is subtracted first; inputs that enter squared, like a wire’s diameter, deserve the finest instrument and the most repeats.',
      'Plot the straight-line form — $T^2$ vs $L$, $V$ vs $I$, extension vs load, $\\frac{1}{v}$ vs $\\frac{1}{u}$, resonant length vs order — the slope carries the physics and the intercept often exposes a systematic effect such as the resonance column’s end correction.',
      'Take the slope from two widely separated points on the best-fit line and bracket it with extreme lines; round the error to one significant figure, match the value to it, and let the least precise measurement cap the significant figures.',
    ],
    quiz: [
      {
        q: 'In a pendulum experiment the period T is measured with a percentage uncertainty of 1%, while the length L is known much more precisely. Using $g = \\frac{4\\pi^2 L}{T^2}$, the percentage uncertainty in g is about:',
        options: ['0.5%', '1%', '2%', '4%'],
        answer: 2,
        explanation: 'Step 1: Write the relative-error budget with the power rule: $\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta T}{T}$. Step 2: The length term is negligible here, so $\\frac{\\Delta g}{g} \\approx 2 \\times 1\\% = 2\\%$. Step 3: The factor 2 appears because T enters squared — an exponent multiplies the relative error. Step 4: This is exactly why 20 oscillations are timed as one: the timing error is divided by 20 before the doubling ever happens.',
      },
      {
        q: 'The diameter of a wire is measured four times: 2.01, 1.99, 2.03 and 1.97 mm. The mean value and the mean absolute error to be quoted are:',
        options: ['2.00 ± 0.01 mm', '2.00 ± 0.02 mm', '2.00 ± 0.03 mm', '2.01 ± 0.03 mm'],
        answer: 1,
        explanation: 'Step 1: Mean: $\\bar{d} = \\frac{2.01 + 1.99 + 2.03 + 1.97}{4} = \\frac{8.00}{4} = 2.00$ mm. Step 2: Absolute deviations from the mean: $0.01, 0.01, 0.03, 0.03$ mm. Step 3: Mean absolute error: $\\frac{0.01 + 0.01 + 0.03 + 0.03}{4} = \\frac{0.08}{4} = 0.02$ mm, so $d = 2.00 \\pm 0.02$ mm. Step 4: 0.01 mm would use only the friendliest readings; the spread of all four — repeatability itself — sets the quoted error.',
      },
      {
        q: 'The slope of a best-fit straight line through scattered data should be computed from:',
        options: ['The first and last data points, however they scatter', 'Any two adjacent data points, averaged over the plot', 'Two widely separated points lying on the drawn line itself', 'The single steepest pair of data points'],
        answer: 2,
        explanation: 'Step 1: The best-fit line already averages the scatter — its position, not any single data point, carries the trend. Step 2: The slope is a difference quotient between two points on the line, and choosing them widely separated makes the line-reading error a small fraction of both rise and run. Step 3: Using data points re-imports their individual errors, and adjacent points give the shortest possible baseline — the worst choice. Step 4: Formally, the least-squares line minimises the sum of squared residuals; the balanced hand-drawn line is its graphical equivalent.',
      },
      {
        q: 'In a metre-bridge measurement, balance is obtained at 40.0 cm from the left end with a 6.00 Ω resistance in the right-hand gap. The unknown resistance in the left gap is:',
        options: ['2.40 Ω', '4.00 Ω', '6.00 Ω', '9.00 Ω'],
        answer: 1,
        explanation: 'Step 1: At balance the Wheatstone ratio holds: $\\frac{X}{R} = \\frac{\\ell}{100 - \\ell}$, where $\\ell$ is the balance length on the unknown’s side. Step 2: Substitute: $X = 6.00 \\times \\frac{40.0}{60.0} = 6.00 \\times \\frac{2}{3} = 4.00\\ \\Omega$. Step 3: The post office box performs the identical ratio with plug-in resistances — the same bridge in a box, with the same null-galvanometer logic. Step 4: 9.00 Ω is the classic slip of inverting the ratio ($6.00 \\times \\frac{60}{40}$); 2.40 Ω mixes the gaps with the wrong standard value.',
      },
    ],
  },
]
