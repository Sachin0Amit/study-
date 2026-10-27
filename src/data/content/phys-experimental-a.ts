import type { SectionContent } from '../library'

// ============================================================================
// Lesson content for the Experimental Skills chapter of the unified physics
// book, sections 1-4 (phys-m20-s1..s4): measurement instruments, mechanics
// experiments, heat and sound experiments, electricity experiments.
//
// Scope follows the official national engineering-entrance experimental-skills
// list (the testing agency's published practical syllabus; research notes in
// research/*.md). Provenance lives ONLY in this comment - product rule: no
// exam, agency or publisher names in any user-visible string.
//
// ZERO-REPETITION CARVING (greps run before writing):
// - grep -rli "vernier|screw gauge" src/data/content/*.ts ->
//   topup-materials-metro.ts and topup-metrology.ts: the engineering-metrology
//   lessons own INSTRUMENT DESIGN (Abbe principle, sine error, gear-tooth
//   vernier, comparator design). This file owns the READING DISCIPLINE only:
//   least count, coincidence reading, zero-error sign convention and the
//   prescribed measurement numericals. Abbe and metrology engineering are
//   deliberately not re-explained.
// - Stokes' law derivation lives in the Fluids chapter (hall-ch14, section
//   "Viscosity, Stokes' Law & Terminal Velocity"). Here v_t = 2r^2(rho-sigma)g
//   / 9*eta is quoted as the measurement equation of the falling-sphere
//   experiment, not re-derived.
// - Calorimetry theory (heat, specific heat, first law) lives in
//   hall-ch18 (Temperature, Heat & the First Law). This file owns the
//   experimental method: calorimeter, water equivalent, mixing arithmetic,
//   heat-loss corrections.
// - Ohm's law and circuit theory (including the Wheatstone balance
//   derivation) live in hall-ch26 / hall-ch27 / elec-ch02. This file owns
//   the measurement arrangements, the slide-wire bridge practice and the
//   galvanometer half-deflection experiment.
// ============================================================================

export const physExperimentalAContent: SectionContent[] = [
  // ------------------------------------ phys-m20-s1 · Measurement Instruments
  {
    sectionId: 'phys-m20-s1',
    readingTime: 9,
    prerequisites: [
      'Significant figures and reading uncertainty (Units, Measurement & Vectors)',
      'Torque and static equilibrium (Static Equilibrium & Elasticity)',
    ],
    intro: 'Three instruments carry the entire length-measurement burden of the physics laboratory, and each earns its place by trading range for resolution: the metre scale reads to a millimetre, the vernier caliper to a fiftieth of one, and the screw gauge to a hundredth or better. Entrance and university experimental questions concentrate on the reading discipline rather than the engineering of these tools — the least count, the coincidence or circular-scale reading, and above all the zero error, the small offset every real instrument carries from manufacturing and wear. This section works through the prescribed measurements one by one: the external diameter, internal diameter and depth of a vessel with vernier calipers; the thickness of a sheet and the diameter of a wire with a screw gauge; and the mass of an object found with nothing but a metre scale, a knife edge and the principle of moments. Every numerical is worked in the exact order you should write it in an answer: instrument constants first, zero error second, observed reading third, corrected reading last.',
    objectives: [
      'Compute the least count of a vernier caliper and a screw gauge from their scale construction, and take a coincidence reading with correct significant figures',
      'Apply the zero-error sign convention — subtract a positive error, add the magnitude of a negative one — and distinguish zero error from zero correction',
      'Measure the external diameter, internal diameter and depth of a vessel with vernier calipers, and sheet thickness or wire diameter with a screw gauge',
      'Determine the mass of an object with a metre scale by the principle of moments, with and without the pivot at the scale’s centre of gravity',
    ],
    concepts: [
      {
        term: 'Vernier least count',
        kind: 'definition',
        statement: 'The **least count** of a vernier caliper is $LC = 1\\,\\text{MSD} - 1\\,\\text{VSD}$ — one main-scale division minus one vernier-scale division. On the common metric instrument $1\\,\\text{MSD} = 1$ mm and 50 vernier divisions span 49 mm, so $1\\,\\text{VSD} = 0.98$ mm and $LC = 0.02$ mm. A reading is $\\text{MSR} + n \\times LC$, where MSR is the last main-scale mark left of the vernier zero and $n$ is the coincident vernier division.',
        detail: 'Why coincidence works: vernier graduations drift out of step with the main scale by exactly one least count per division, so the $k$-th vernier line sits $k \\times LC$ past a main-scale mark; when the lines line up, that accumulated mismatch is precisely the extra fraction beyond the MSR. With a 0.02 mm least count the vernier contribution is always an even multiple of 0.01 mm — 0.02, 0.04, 0.06 and so on — a quick self-check while reading. Report to the least count and no further: a caliper result deserves two decimal places in millimetres, and inventing a third is the classic significant-figure error.',
      },
      {
        term: 'Zero error and correction',
        kind: 'method',
        statement: 'Close the jaws and compare the two zeros. If the **vernier zero sits right of the main-scale zero**, every reading is too large by the closed-jaw reading: the **zero error is positive** and the corrected reading is $\\text{observed} - \\text{zero error}$. If the vernier zero sits left, the zero error is negative — its magnitude is $(N - n) \\times LC$ for $N$ vernier divisions with the $n$-th coincident — and you **add** the magnitude to the observed reading. The **zero correction** is simply the negative of the zero error.',
        detail: 'Sign discipline beats memorising: a positive zero error means the instrument reads high, so subtract; a negative one means it reads low, so add the magnitude. Find the zero error exactly the way you find any reading — close the jaws gently, never forced, and locate the coincident division. Wear on the jaw faces opens the closed-jaw gap and pushes the vernier zero to the right, making the error more positive as the instrument ages; that is why the zero error is checked at the start of every session and recorded with its sign.',
      },
      {
        term: 'Screw gauge reading',
        kind: 'method',
        statement: 'The least count of a screw gauge is $LC = \\text{pitch} \\div \\text{circular-scale divisions}$: a pitch of 0.5 mm with 100 divisions gives $LC = 0.005$ mm, and a pitch of 1 mm with 100 divisions gives $LC = 0.01$ mm. A reading is $\\text{PSR} + n \\times LC - \\text{zero error}$, where PSR is the pitch-scale (sleeve) reading exposed at the edge of the thimble and $n$ is the circular-scale division aligned with the reference line.',
        detail: 'Find the pitch by counting whole turns: advance the screw several full rotations and note the axial travel — if 5 rotations move it 2.5 mm, the pitch is 0.5 mm. The same sign convention as the vernier applies: with the studs closed, a reference line sitting past the circular-scale zero gives a positive error to subtract; a zero mark not yet reached gives a negative error, whose magnitude is $(\\text{divisions} - n) \\times LC$. Always close the studs through the ratchet, never by force — squeezing deforms both the wire and the reading.',
      },
      {
        term: 'Diameter, depth, thickness',
        kind: 'method',
        statement: 'A vernier caliper is three instruments in one. The **lower (external) jaws** span the outside of a body for external diameter; the **upper (internal) jaws** spread inside a hole or tube for internal diameter; the **depth rod** sliding out of the far end measures the depth of a vessel from its rim to its inner base. Each member is read with the same MSR-plus-coincidence rule, and each deserves its own zero check.',
        detail: 'Keep the caliper square to the measured dimension: a tilted jaw reads the long diagonal of what is meant to be a circle, so rotate the object within the jaws and watch for the minimum reading — the true diameter. For depth, rest the beam end squarely on the rim and let the rod touch the base without tilting, because a tilted rod reads deep. A vessel is then fully characterised by three corrected numbers — external diameter, internal diameter and depth — enough to compute wall thickness and capacity.',
      },
      {
        term: 'Principle of moments',
        kind: 'law',
        statement: 'A body balanced on a pivot has zero net torque: the anticlockwise moments about the pivot equal the clockwise moments, so for weights $m_1 g$ and $m_2 g$ at perpendicular distances $d_1$ and $d_2$, $m_1 d_1 = m_2 d_2$. To weigh with a metre scale, first balance the scale alone to locate its **centre of gravity**; then hang the unknown mass $m$ a distance $d_1$ from that point and a known mass $M$ at $d_2$ on the other side until balance returns: $m = M d_2/d_1$.',
        detail: 'Placing the pivot at the centre of gravity is the elegant move: the scale’s own weight then acts through the pivot and contributes no moment, so the mass of the scale never enters the arithmetic. If the pivot sits off the centre of gravity, the scale’s weight $M_s g$ at its own lever arm simply joins the moment equation as a third term — which is exactly how the mass of the scale itself is measured. Every distance is a difference of two marked readings on the scale, never a raw position.',
      },
      {
        term: 'Choosing the instrument',
        kind: 'insight',
        statement: 'Match the instrument to the dimension: the metre scale (least count 1 mm) sets out lengths and moment arms; the vernier caliper ($0.02$ or $0.1$ mm) takes diameters of a few centimetres and depths; the screw gauge ($0.01$ or $0.005$ mm) takes wire diameters and sheet thicknesses below a millimetre or two. The instrument must also be *large enough* — a caliper cannot exceed its jaw span, and a screw gauge cannot exceed its spindle travel.',
        detail: 'Resolution is wasted without a stable zero: check the zero error before and after each set of readings, and average several measurements at different positions and orientations, because wires are not uniform and sheets are not flat. Report the mean with its spread — a diameter quoted as the average of five screw-gauge readings along the wire is a measurement; a single reading is an anecdote. The habit matters most where the quantity enters squared: the wire area in a Young’s modulus experiment doubles any diameter error, and the radius-squared in the falling-sphere experiment quadruples it.',
      },
    ],
    figures: [
      {
        caption: 'Taking a vernier reading, drawn to scale: the vernier gains 0.02 mm per division on the main scale until the 27th division re-aligns with the 61 mm mark — reading $= 34 + 27 \\times 0.02 = 34.54$ mm.',
        sketchImage: '/diagrams/vernier_caliper_sketch.jpg',
        sketchCaption: 'Field Laboratory Notebook: vernier caliper jaws gripping a rod, main + vernier scale zoom with the coincident 27th division marked, least count 0.02 mm, zero-error sign convention.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vernier caliper reading with the coincident division highlighted" font-family="sans-serif"><text x="40" y="24" font-size="13" fill="currentColor">Main scale (1 mm divisions)</text><text x="60" y="48" font-size="11" fill="currentColor">vernier zero — 0.54 mm past 34</text><line x1="76.8" y1="56" x2="76.8" y2="70" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><rect x="40" y="70" width="640" height="34" fill="none" stroke="currentColor" stroke-width="2"/><path d="M66 104V112M106 104V112M126 104V112M146 104V112M166 104V112M206 104V112M226 104V112M246 104V112M266 104V112M306 104V112M326 104V112M346 104V112M366 104V112M406 104V112M426 104V112M446 104V112M466 104V112M506 104V112M526 104V112M546 104V112M566 104V112M626 104V112M646 104V112M666 104V112" stroke="currentColor" stroke-width="1"/><path d="M86 104V122M186 104V122M286 104V122M386 104V122M486 104V122M586 104V122" stroke="currentColor" stroke-width="1.5"/><text x="86" y="138" font-size="11" fill="currentColor" text-anchor="middle">35</text><text x="186" y="138" font-size="11" fill="currentColor" text-anchor="middle">40</text><text x="286" y="138" font-size="11" fill="currentColor" text-anchor="middle">45</text><text x="386" y="138" font-size="11" fill="currentColor" text-anchor="middle">50</text><text x="486" y="138" font-size="11" fill="currentColor" text-anchor="middle">55</text><text x="586" y="138" font-size="11" fill="currentColor" text-anchor="middle">60</text><line x1="606" y1="104" x2="606" y2="124" stroke="currentColor" stroke-width="2.5"/><text x="606" y="138" font-size="12" fill="currentColor" text-anchor="middle">61</text><line x1="606" y1="64" x2="606" y2="158" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><text x="606" y="54" font-size="12" fill="currentColor" text-anchor="middle">coincidence: n = 27</text><rect x="40" y="180" width="640" height="34" fill="none" stroke="currentColor" stroke-width="2"/><path d="M96.4 180V171M116 180V171M135.6 180V171M155.2 180V171M174.8 180V171M194.4 180V171M214 180V171M233.6 180V171M253.2 180V171M292.4 180V171M312 180V171M331.6 180V171M351.2 180V171M370.8 180V171M390.4 180V171M410 180V171M429.6 180V171M449.2 180V171M488.4 180V171M508 180V171M527.6 180V171M547.2 180V171M566.8 180V171M586.4 180V171M625.6 180V171M645.2 180V171" stroke="currentColor" stroke-width="1"/><path d="M76.8 180V167M272.8 180V167M468.8 180V167M664.8 180V167" stroke="currentColor" stroke-width="1.5"/><text x="76.8" y="232" font-size="11" fill="currentColor" text-anchor="middle">0</text><text x="272.8" y="232" font-size="11" fill="currentColor" text-anchor="middle">10</text><text x="468.8" y="232" font-size="11" fill="currentColor" text-anchor="middle">20</text><text x="664.8" y="232" font-size="11" fill="currentColor" text-anchor="middle">30</text><line x1="606" y1="180" x2="606" y2="165" stroke="currentColor" stroke-width="2.5"/><circle cx="606" cy="172" r="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="606" y="232" font-size="12" fill="currentColor" text-anchor="middle">27</text><text x="40" y="252" font-size="12" fill="currentColor">Vernier scale: 50 divisions cover 49 mm, so 1 VSD = 0.98 mm</text><text x="360" y="274" font-size="12" fill="currentColor" text-anchor="middle">Reading = MSR + n × LC = 34 mm + 27 × 0.02 mm = 34.54 mm</text><text x="360" y="292" font-size="12" fill="currentColor" text-anchor="middle">LC = 1 MSD − 1 VSD = 0.02 mm</text></svg>`,
        afterConcept: 2,
      },
      {
        caption: 'Weighing by moments: with the knife edge at the centre of gravity the scale’s own weight drops out of the balance, leaving $m\\,d_1 = M\\,d_2$.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Metre scale balanced on a knife edge with unknown and known masses" font-family="sans-serif"><path d="M60 92V100M120 92V100M180 92V100M240 92V100M300 92V100M360 92V100M420 92V100M480 92V100M540 92V100M600 92V100M660 92V100" stroke="currentColor" stroke-width="1"/><text x="60" y="86" font-size="11" fill="currentColor" text-anchor="middle">0</text><text x="180" y="86" font-size="11" fill="currentColor" text-anchor="middle">20</text><text x="300" y="86" font-size="11" fill="currentColor" text-anchor="middle">40</text><text x="420" y="86" font-size="11" fill="currentColor" text-anchor="middle">60</text><text x="540" y="86" font-size="11" fill="currentColor" text-anchor="middle">80</text><text x="660" y="86" font-size="11" fill="currentColor" text-anchor="middle">100</text><rect x="60" y="100" width="600" height="16" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="358.8" cy="108" r="3.5" fill="currentColor"/><text x="358.8" y="76" font-size="11" fill="currentColor" text-anchor="middle">CG at 49.8 cm</text><line x1="358.8" y1="80" x2="358.8" y2="96" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><polygon points="358.8,116 344,150 374,150" fill="none" stroke="currentColor" stroke-width="2"/><line x1="330" y1="150" x2="388" y2="150" stroke="currentColor" stroke-width="2"/><line x1="120" y1="116" x2="120" y2="165" stroke="currentColor" stroke-width="1.5"/><rect x="103" y="165" width="34" height="24" fill="none" stroke="currentColor" stroke-width="2"/><text x="120" y="182" font-size="12" fill="currentColor" text-anchor="middle">m</text><line x1="508.8" y1="116" x2="508.8" y2="165" stroke="currentColor" stroke-width="1.5"/><rect x="489" y="165" width="40" height="24" fill="none" stroke="currentColor" stroke-width="2"/><text x="509" y="182" font-size="11" fill="currentColor" text-anchor="middle">100 g</text><line x1="120" y1="192" x2="120" y2="218" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><line x1="508.8" y1="192" x2="508.8" y2="218" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><line x1="358.8" y1="154" x2="358.8" y2="218" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><line x1="120" y1="225" x2="358.8" y2="225" stroke="currentColor" stroke-width="1.5"/><polygon points="120,225 130,221 130,229" fill="currentColor"/><polygon points="358.8,225 348.8,221 348.8,229" fill="currentColor"/><text x="239" y="243" font-size="11" fill="currentColor" text-anchor="middle">d₁ = 39.8 cm</text><line x1="358.8" y1="225" x2="508.8" y2="225" stroke="currentColor" stroke-width="1.5"/><polygon points="358.8,225 368.8,221 368.8,229" fill="currentColor"/><polygon points="508.8,225 498.8,221 498.8,229" fill="currentColor"/><text x="434" y="243" font-size="11" fill="currentColor" text-anchor="middle">d₂ = 25.0 cm</text><text x="360" y="278" font-size="12" fill="currentColor" text-anchor="middle">moments about the knife edge: m × 39.8 cm = 100 g × 25.0 cm, so m ≈ 62.8 g</text><text x="360" y="296" font-size="11" fill="currentColor" text-anchor="middle">the scale’s weight acts through the pivot and contributes no moment</text></svg>`,
        afterConcept: 5,
      },
    ],
    examples: [
      {
        title: 'A vessel surveyed with vernier calipers',
        problem: 'A vernier caliper has $1\\,\\text{MSD} = 1$ mm and 50 vernier divisions spanning 49 mm. With the jaws closed the vernier zero lies to the right of the main-scale zero and the 4th vernier division coincides with a main-scale mark. The vessel is then measured: external diameter with MSR $= 34$ mm and the 27th division coincident; internal diameter with MSR $= 28$ mm and the 13th division coincident; depth with the rod giving MSR $= 58$ mm and the 31st division coincident. Find the corrected external and internal diameters, the corrected depth, and the wall thickness.',
        steps: [
          { label: 'Step 1', text: 'Instrument constants first: $LC = 1\\,\\text{MSD} - 1\\,\\text{VSD} = 1 - 0.98 = 0.02$ mm, because 50 vernier divisions cover 49 mm.' },
          { label: 'Step 2', text: 'Zero error: the vernier zero sits right of the main zero with the jaws closed and the 4th division coincides, so the error is positive: $z = +4 \\times 0.02 = +0.08$ mm. Every observed reading is 0.08 mm too large and must have 0.08 mm subtracted.' },
          { label: 'Step 3', text: 'Read and correct each member. External: $34 + 27 \\times 0.02 = 34.54$ mm observed, $34.54 - 0.08 = 34.46$ mm corrected. Internal: $28 + 13 \\times 0.02 = 28.26$ mm observed, $28.18$ mm corrected. Depth: $58 + 31 \\times 0.02 = 58.62$ mm observed, $58.54$ mm corrected.' },
          { label: 'Step 4', text: 'Combine: wall thickness is half the difference of the diameters, $\\frac{34.46 - 28.18}{2} = \\frac{6.28}{2} = 3.14$ mm, and the capacity would follow from the corrected internal diameter and depth: $\\frac{\\pi}{4}(2.818)^2 \\times 5.854 \\approx 36.5\\ \\text{cm}^3$.' },
        ],
        result: 'Corrected readings: external $34.46$ mm, internal $28.18$ mm, depth $58.54$ mm; wall thickness $3.14$ mm (capacity $\\approx 36.5$ cm³).',
      },
      {
        title: 'A wire and a sheet through the screw gauge',
        problem: 'A screw gauge has a pitch of 0.5 mm and 100 divisions on its circular scale. With the studs closed the reference line aligns with the 4th division past the zero. (i) A sheet is gripped: the pitch scale reads 1.5 mm and the 27th circular division coincides with the reference line. (ii) A wire is gripped: the pitch scale reads zero and the 63rd circular division coincides. Find the corrected thickness of the sheet and the corrected diameter of the wire.',
        steps: [
          { label: 'Step 1', text: 'Least count: $LC = \\text{pitch}/\\text{divisions} = 0.5/100 = 0.005$ mm.' },
          { label: 'Step 2', text: 'Zero error: with the studs closed the reference line sits 4 divisions past the circular-scale zero, a positive error $z = +4 \\times 0.005 = +0.02$ mm; subtract it from every observed reading.' },
          { label: 'Step 3', text: '(i) Sheet: observed $= 1.5 + 27 \\times 0.005 = 1.5 + 0.135 = 1.635$ mm, corrected $= 1.635 - 0.02 = 1.615$ mm.' },
          { label: 'Step 4', text: '(ii) Wire: observed $= 0 + 63 \\times 0.005 = 0.315$ mm, corrected $= 0.315 - 0.02 = 0.295$ mm. The diameter is smaller than half the pitch, which is exactly why the pitch scale reads zero — the circular scale alone carries the measurement.' },
        ],
        result: 'Sheet thickness $1.615$ mm; wire diameter $0.295$ mm (both after removing the $+0.02$ mm zero error).',
      },
      {
        title: 'The mass of a weight, and of the scale itself',
        problem: 'A metre scale balances alone on a knife edge at the 49.8 cm mark. (i) The unknown mass is hung at the 10.0 cm mark and a 100.0 g standard mass at the 74.8 cm mark, and the system balances with the knife edge back at the 49.8 cm mark. Find the unknown mass. (ii) Separately, the 100.0 g standard is hung at the 10.0 cm mark and the scale, otherwise alone, balances on a knife edge at the 35.0 cm mark. Find the mass of the scale.',
        steps: [
          { label: 'Step 1', text: 'In (i) the knife edge sits at the centre of gravity, so the scale’s own weight acts through the pivot and contributes no moment — only the two suspended weights matter.' },
          { label: 'Step 2', text: '(i) Moment balance about 49.8 cm: the left arm $d_1 = 49.8 - 10.0 = 39.8$ cm carries the unknown $m$, the right arm $d_2 = 74.8 - 49.8 = 25.0$ cm carries the 100.0 g standard, and $m \\times 39.8 = 100.0 \\times 25.0$.' },
          { label: 'Step 3', text: 'Solve: $m = \\frac{100.0 \\times 25.0}{39.8} = \\frac{2500}{39.8} = 62.8$ g.' },
          { label: 'Step 4', text: '(ii) Now the pivot is off the centre of gravity, so the scale itself joins the balance: the 100.0 g acts $35.0 - 10.0 = 25.0$ cm left of the pivot, while the scale’s weight acts at its centre of gravity, $49.8 - 35.0 = 14.8$ cm to the right: $100.0 \\times 25.0 = M_s \\times 14.8$.' },
          { label: 'Step 5', text: 'Solve: $M_s = \\frac{2500}{14.8} = 169$ g — a plausible figure for a wooden metre scale, obtained with no balance at all.' },
        ],
        result: '(i) $m \\approx 62.8$ g; (ii) the scale itself has mass $\\approx 169$ g.',
      },
    ],
    keyTakeaways: [
      'Least count is pure construction arithmetic — $LC = 1\\,\\text{MSD} - 1\\,\\text{VSD}$ for the caliper and pitch over circular divisions for the screw gauge — and the reading is MSR (or PSR) plus coincident division times LC.',
      'Zero error is a signed quantity: positive when the instrument reads high (subtract it), negative when it reads low (add its magnitude); the zero correction is its negative.',
      'Survey a vessel with all three caliper members — external jaws, internal jaws, depth rod — always squaring the instrument to the dimension and rotating the body to hunt the minimum reading.',
      'A metre scale plus a knife edge is a balance: with the pivot at the centre of gravity the scale’s weight drops out and $m = M d_2/d_1$; off the centre of gravity, the scale’s own weight enters as a third moment term.',
    ],
    quiz: [
      {
        q: 'A caliper has $1\\,\\text{MSD} = 1$ mm with 50 vernier divisions spanning 49 mm. With the jaws closed the vernier zero sits right of the main-scale zero and the 3rd division coincides. For a body, the MSR is 40 mm and the 18th division coincides. The corrected reading is:',
        options: ['40.36 mm', '40.30 mm', '40.42 mm', '40.18 mm'],
        answer: 1,
        explanation: 'Step 1: The least count is $1 - 49/50 = 0.02$ mm. Step 2: The vernier zero sits right of the main zero, so the zero error is positive: $z = 3 \\times 0.02 = +0.06$ mm. Step 3: Observed reading $= 40 + 18 \\times 0.02 = 40.36$ mm, and the corrected reading subtracts the zero error: $40.36 - 0.06 = 40.30$ mm. Step 4: 40.36 mm is the uncorrected reading, 40.42 mm adds the error instead of subtracting it, and 40.18 mm comes from misusing 0.01 mm as the least count.',
      },
      {
        q: 'A screw gauge has a pitch of 1 mm and 100 circular divisions. With the studs closed the zero of the circular scale has crossed the reference line, and the 97th division sits on the line. A wire is measured with pitch-scale reading zero and the 42nd circular division on the line. The corrected diameter of the wire is:',
        options: ['0.45 mm', '0.42 mm', '0.39 mm', '0.55 mm'],
        answer: 0,
        explanation: 'Step 1: The least count is $LC = 1/100 = 0.01$ mm. Step 2: The zero mark has crossed the line, so the error is negative, with magnitude $(100 - 97) \\times 0.01 = 0.03$ mm: $z = -0.03$ mm. Step 3: Observed reading $= 0 + 42 \\times 0.01 = 0.42$ mm; correcting means adding the magnitude: $0.42 + 0.03 = 0.45$ mm. Step 4: 0.42 mm is the uncorrected value and 0.39 mm subtracts the magnitude — the classic sign flip on a negative zero error.',
      },
      {
        q: 'A uniform metre scale balances at its centre of gravity, the 50.0 cm mark. An unknown mass at the 15.0 cm mark is balanced by a 120 g standard at the 78.0 cm mark, the knife edge remaining at 50.0 cm. The unknown mass is:',
        options: ['84 g', '105 g', '96 g', '150 g'],
        answer: 2,
        explanation: 'Step 1: The pivot sits at the centre of gravity, so the scale’s weight has no lever arm and drops out. Step 2: The left arm is $50.0 - 15.0 = 35.0$ cm and the right arm is $78.0 - 50.0 = 28.0$ cm. Step 3: Moment balance: $m \\times 35.0 = 120 \\times 28.0 = 3360$, so $m = 96$ g. Step 4: 150 g is the swapped-arm error ($120 \\times 35/28$); 84 g comes from miscounting an arm as 40 cm.',
      },
      {
        q: 'To measure the internal diameter of a beaker with a vernier caliper, use:',
        options: ['The lower (outside) jaws closing on the outside wall', 'The depth rod resting on the rim', 'The main scale alone, held against the rim', 'The upper (inside) jaws spreading against the inner wall'],
        answer: 3,
        explanation: 'Step 1: The lower jaws measure external dimensions — closing them on the outside gives the external diameter. Step 2: The upper jaws are shaped to spread inside cavities and read the internal diameter directly. Step 3: The depth rod measures depths from a rim to a base, not diameters. Step 4: The main scale alone has no way to grip or span an inner wall.',
      },
    ],
  },

  // ------------------------------------ phys-m20-s2 · Mechanics Experiments
  {
    sectionId: 'phys-m20-s2',
    readingTime: 10,
    prerequisites: [
      'Damped oscillations and the pendulum period (Oscillations)',
      'Stress, strain and Young’s modulus (Static Equilibrium & Elasticity)',
      'Surface tension and viscous drag (Fluids)',
    ],
    intro: 'The mechanics bench is where physics stops being watched and starts being weighed, stretched, timed and drained. Four prescribed experiments anchor it: a pendulum left to itself betrays its damping when the square of its amplitude is plotted against time; a long wire under load gives up Young’s modulus from a fraction of a millimetre of stretch; a capillary tube turns surface tension into a measurable height; and a steel ball falling through oil delivers the viscosity from nothing but a stopwatch and two marks. Each experiment pairs a clean formula with a craft skill — small amplitudes, deadbeat timing, clean glass, thermal equilibrium — and each hides its classic trap. This section works through all four in the order an answer script expects: apparatus and formula, a fully worked numerical, then the precautions that separate a recorded result from a repeated one.',
    objectives: [
      'Explain why plotting $A^2$ against time diagnoses energy dissipation, and read the dissipated power from the slope',
      'Determine Young’s modulus of a wire from load–extension data using $Y = 4FL/(\\pi d^2 \\Delta l)$, with the diameter from a screw gauge',
      'Compute surface tension from capillary rise, $T = rh\\rho g/2$, and predict the effect of dissolved detergent',
      'Extract the viscosity of a liquid from the terminal velocity of a falling sphere using $\\eta = 2r^2(\\rho-\\sigma)g/(9v_t)$',
    ],
    concepts: [
      {
        term: 'Pendulum energy dissipation',
        kind: 'method',
        statement: 'The energy of a pendulum swinging at small amplitude is proportional to the **square of its amplitude**, $E \\approx \\tfrac{1}{2}m\\omega^2 A^2$, so the prescribed experiment records the amplitude every half-minute and plots $A^2$ against $t$. For the weak damping of a laboratory pendulum the points fall close to a **straight, decaying line**: energy leaves in nearly equal amounts in equal times, the signature of dissipation doing almost constant work per oscillation.',
        detail: 'Read the plot the way it is drawn: the slope of the $A^2$–$t$ line times $\\tfrac{1}{2}m\\omega^2$ is the power being dissipated, and the intercept is $A_0^2$. Amplitudes are measured at the equilibrium mark, where the bob moves fastest and the reading is sharpest — a ruler held behind the arc, read mid-swing. Keep $A$ below about $10^{\\circ}$ so the motion stays simple harmonic and $E \\propto A^2$ holds without correction; over longer runs the decay curves away (exponentially for viscous drag), which is why the experiment is kept short and the damping weak.',
      },
      {
        term: 'Young’s modulus setup',
        kind: 'method',
        statement: 'A long wire hangs from a rigid support, carries a hanger with slotted weights, and its extension is read from a vernier or micrometer scale; a second, identically loaded **reference wire** beside it cancels thermal drift and support yield. From the measured length $L$, diameter $d$, force $F = mg$ and extension $\\Delta l$: $$Y = \\frac{FL}{A\\,\\Delta l} = \\frac{4FL}{\\pi d^2 \\Delta l}.$$ A loading table — extension against load — beats a single reading because its slope averages out the initial kinks of the wire.',
        detail: 'A small initial load keeps the wire taut and straight, and extensions are measured from that baseline once creep has settled. The diameter is the sensitive input: because $A \\propto d^2$, a 1% error in $d$ becomes 2% in $Y$, so the wire is measured with a screw gauge at several places and in two perpendicular directions at each place. Report $Y$ in pascals and let the answer check itself — steel lands near $2 \\times 10^{11}$ Pa and copper near $1.1 \\times 10^{11}$ Pa.',
      },
      {
        term: 'Capillary rise method',
        kind: 'law',
        statement: 'Water climbs a clean glass capillary because surface tension pulls the wetting meniscus up against gravity. For a tube of radius $r$ with rise $h$ measured from the flat outside surface to the meniscus: $$h = \\frac{2T\\cos\\theta}{r\\rho g}, \\qquad T = \\frac{rh\\rho g}{2\\cos\\theta}.$$ For water on clean glass $\\theta \\approx 0^{\\circ}$, so $\\cos\\theta \\approx 1$ and $T = rh\\rho g/2$.',
        detail: 'The radius comes from the internal diameter measured at both ends of the tube with a travelling microscope, halved from the mean. Read the rise with the eye level with the meniscus to kill parallax. Cleanliness is physics here, not housekeeping: a greasy patch changes the contact angle and can turn a rise into a depression, so the tube is rinsed with alkali and then distilled water before every liquid. The liquid held in the meniscus itself adds about $r/3$ of extra effective height — under 1% for a half-millimetre tube rising 3 cm, but worth stating in a careful answer.',
      },
      {
        term: 'Effect of detergents',
        kind: 'insight',
        statement: 'Detergent molecules are surfactants: they crowd the water surface and **lower its surface tension** by more than half — from about $0.072$ N/m for pure water toward $0.025$–$0.030$ N/m for a typical washing solution. Since $h \\propto T$ for the same tube and nearly the same density, the rise collapses in proportion: the capillary that lifts water 2.9 cm lifts the detergent solution barely past a centimetre.',
        detail: 'That is the physics of cleaning in one picture: lower tension lets the solution wet greasy surfaces and penetrate the same capillary channels in fabric that plain water cannot enter. The contact angle changes too as the surface chemistry changes, so the drop in the effective $T\\cos\\theta$ is even steeper than the drop in $T$ alone. Rinsing the capillary between liquids is not optional — a trace of detergent left on the glass permanently alters the next pure-water reading.',
      },
      {
        term: 'Terminal velocity method',
        kind: 'law',
        statement: 'A sphere of radius $r$ and density $\\rho$ falling through a liquid of density $\\sigma$ and viscosity $\\eta$ reaches a **terminal velocity** where weight balances buoyancy plus viscous drag: $$v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}, \\qquad \\eta = \\frac{2r^2(\\rho - \\sigma)g}{9v_t}.$$ The fluids chapter derives this from Stokes’ drag law $F = 6\\pi\\eta r v$; the experiment’s job is to arrange matters so the sphere is timed while genuinely in the terminal state.',
        detail: 'Two facts license the measurement. First, the approach to terminal speed is extremely fast — the exponential time constant is $\\tau = 2r^2\\rho/9\\eta$, a couple of milliseconds for a millimetre steel ball in oil — so any mark a centimetre below the surface is already in the terminal regime. Second, the walls retard the sphere by roughly $2.1\\,r/R$ for sphere radius $r$ in a tube of radius $R$, so use small, slow spheres in a wide jar and note the correction. Two horizontal marks 15–20 cm apart, a stopwatch started and stopped as the ball’s centre crosses each, and several spheres averaged — that is the whole measurement.',
      },
      {
        term: 'Precautions and error budget',
        kind: 'insight',
        statement: 'Each experiment owns one dominant error: for the pendulum it is reading the amplitude mid-swing; for Young’s modulus it is the wire diameter, which counts twice through the area; for the capillary it is the cleanliness that controls the contact angle; for the falling sphere it is temperature, because viscosity collapses as oil warms — glycerine falls from roughly $1.4$ to $0.6$ Pa·s between 20 and 30 °C. Naming the dominant error is half the credit in any experimental answer.',
        detail: 'The standard phrasing of the precautions: amplitudes small and read at the equilibrium mark; loads added gently with time allowed for settling; the capillary cleaned and rinsed before every liquid; the sphere dropped dry and grease-free along the axis, in liquid that has been stirred and left to still; the thermometer read in the liquid, not in the room. Every quantity should be measured several times and averaged — the spread itself is data, and a single reading carries no error bar.',
      },
    ],
    figures: [
      {
        caption: 'Dissipation of a pendulum: $A^2$ falls by equal steps in equal times, so the energy — proportional to $A^2$ — drains at a nearly constant rate.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of amplitude squared versus time, a straight decaying line" font-family="sans-serif"><line x1="90" y1="250" x2="662" y2="250" stroke="currentColor" stroke-width="2"/><polygon points="670,250 660,245 660,255" fill="currentColor"/><line x1="90" y1="250" x2="90" y2="34" stroke="currentColor" stroke-width="2"/><polygon points="90,26 85,36 95,36" fill="currentColor"/><text x="655" y="274" font-size="12" fill="currentColor" text-anchor="middle">t (s)</text><text x="140" y="32" font-size="12" fill="currentColor">A² (cm²)</text><path d="M90 250H84M260 250V256M430 250V256M600 250V256" stroke="currentColor" stroke-width="1.5"/><text x="90" y="268" font-size="11" fill="currentColor" text-anchor="middle">0</text><text x="260" y="268" font-size="11" fill="currentColor" text-anchor="middle">100</text><text x="430" y="268" font-size="11" fill="currentColor" text-anchor="middle">200</text><text x="600" y="268" font-size="11" fill="currentColor" text-anchor="middle">300</text><path d="M84 250H90M84 204H90M84 158H90M84 112H90M84 66H90" stroke="currentColor" stroke-width="1.5"/><text x="76" y="254" font-size="11" fill="currentColor" text-anchor="end">0</text><text x="76" y="208" font-size="11" fill="currentColor" text-anchor="end">4</text><text x="76" y="162" font-size="11" fill="currentColor" text-anchor="end">8</text><text x="76" y="116" font-size="11" fill="currentColor" text-anchor="end">12</text><text x="76" y="70" font-size="11" fill="currentColor" text-anchor="end">16</text><line x1="90" y1="66" x2="600" y2="204" stroke="currentColor" stroke-width="2"/><circle cx="90" cy="66" r="4.5" fill="currentColor"/><circle cx="260" cy="112" r="4.5" fill="currentColor"/><circle cx="430" cy="158" r="4.5" fill="currentColor"/><circle cx="600" cy="204" r="4.5" fill="currentColor"/><line x1="260" y1="112" x2="260" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><line x1="430" y1="158" x2="430" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><line x1="600" y1="204" x2="600" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><text x="400" y="90" font-size="12" fill="currentColor" text-anchor="middle">slope = −4.0 cm² per 100 s</text><text x="150" y="58" font-size="11" fill="currentColor" text-anchor="middle">A₀² = 16</text><text x="360" y="292" font-size="12" fill="currentColor" text-anchor="middle">dissipated power = slope × ½ m ω²</text></svg>`,
        afterConcept: 1,
      },
      {
        caption: 'Capillary rise in the same tube: pure water ($h = 2.9$ cm) against a detergent solution ($h = 1.2$ cm) — the rise tracks the surface tension.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two capillary tubes, one in pure water with a high rise, one in detergent solution with a low rise" font-family="sans-serif"><path d="M70 170V280H300V170" fill="none" stroke="currentColor" stroke-width="2"/><line x1="76" y1="200" x2="294" y2="200" stroke="currentColor" stroke-width="1.5"/><text x="187" y="215" font-size="11" fill="currentColor" text-anchor="middle">free surface</text><line x1="130" y1="40" x2="130" y2="265" stroke="currentColor" stroke-width="2"/><line x1="170" y1="40" x2="170" y2="265" stroke="currentColor" stroke-width="2"/><path d="M130 92Q150 104 170 92" fill="none" stroke="currentColor" stroke-width="2"/><line x1="112" y1="200" x2="112" y2="99" stroke="currentColor" stroke-width="1.5"/><polygon points="112,99 108,109 116,109" fill="currentColor"/><polygon points="112,200 108,190 116,190" fill="currentColor"/><text x="106" y="155" font-size="11" fill="currentColor" text-anchor="end">h = 2.9 cm</text><text x="150" y="30" font-size="12" fill="currentColor" text-anchor="middle">T ≈ 0.071 N/m</text><line x1="160" y1="95" x2="202" y2="82" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><circle cx="243" cy="70" r="42" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="226" y1="35" x2="226" y2="105" stroke="currentColor" stroke-width="2"/><line x1="276" y1="35" x2="276" y2="105" stroke="currentColor" stroke-width="2"/><path d="M226 48Q251 68 276 48" fill="none" stroke="currentColor" stroke-width="2"/><line x1="251" y1="35" x2="251" y2="66" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><line x1="251" y1="55" x2="226" y2="55" stroke="currentColor" stroke-width="1.5"/><polygon points="226,55 236,51 236,59" fill="currentColor"/><polygon points="251,55 241,51 241,59" fill="currentColor"/><text x="251" y="46" font-size="11" fill="currentColor" text-anchor="middle">r</text><text x="220" y="38" font-size="11" fill="currentColor" text-anchor="end">θ ≈ 0°</text><path d="M420 170V280H650V170" fill="none" stroke="currentColor" stroke-width="2"/><line x1="426" y1="200" x2="644" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="480" y1="40" x2="480" y2="265" stroke="currentColor" stroke-width="2"/><line x1="520" y1="40" x2="520" y2="265" stroke="currentColor" stroke-width="2"/><path d="M480 157Q500 167 520 157" fill="none" stroke="currentColor" stroke-width="2"/><line x1="462" y1="200" x2="462" y2="164" stroke="currentColor" stroke-width="1.5"/><polygon points="462,164 458,174 466,174" fill="currentColor"/><polygon points="462,200 458,190 466,190" fill="currentColor"/><text x="456" y="186" font-size="11" fill="currentColor" text-anchor="end">h = 1.2 cm</text><text x="500" y="30" font-size="12" fill="currentColor" text-anchor="middle">T ≈ 0.029 N/m</text><text x="185" y="268" font-size="11" fill="currentColor" text-anchor="middle">pure water</text><text x="535" y="268" font-size="11" fill="currentColor" text-anchor="middle">detergent solution</text><text x="360" y="296" font-size="12" fill="currentColor" text-anchor="middle">T = rhρg/2 — in the same tube the rise is proportional to the surface tension</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'Reading the pendulum’s decay table',
        problem: 'A 100 g bob on a 1.00 m pendulum is released from a small amplitude. Measured along the arc at the equilibrium mark, the amplitude is $A = 4.00$, $3.46$, $2.83$ and $2.00$ cm at $t = 0$, $100$, $200$ and $300$ s. (i) Show that the $A^2$–$t$ plot is straight and find its slope. (ii) Find the energy dissipated per second and per oscillation. (iii) What fraction of the initial energy is lost in each oscillation? Take $g = 9.8$ m/s².',
        steps: [
          { label: 'Step 1', text: 'Squares: $A^2 = 16.0$, $12.0$, $8.0$, $4.0$ cm² at the four times — equal drops of 4.0 cm² per 100 s, so the points are collinear with slope $\\frac{4.0 - 16.0}{300 - 0} = -0.040$ cm² per second.' },
          { label: 'Step 2', text: 'Energy of the pendulum: $E = \\tfrac{1}{2}m\\omega^2 A^2$ with $\\omega^2 = g/\\ell = 9.8\\ \\text{s}^{-2}$, so with $m = 0.100$ kg and $A$ in metres, $E = 0.49\\,A^2$ joules.' },
          { label: 'Step 3', text: 'Dissipated power: $\\frac{dE}{dt} = 0.49 \\times \\frac{d(A^2)}{dt} = 0.49 \\times (-0.040 \\times 10^{-4}) \\approx -2.0 \\times 10^{-6}$ W — about 2 µJ lost per second.' },
          { label: 'Step 4', text: 'Period $T_0 = 2\\pi\\sqrt{\\ell/g} = 2\\pi\\sqrt{1/9.8} \\approx 2.0$ s, so each oscillation loses $2.0\\ \\text{s} \\times 1.96\\ \\mu\\text{J/s} \\approx 3.9$ µJ. The initial energy is $E_0 = 0.49 \\times (0.040)^2 = 7.8 \\times 10^{-4}$ J, so the loss per oscillation is $\\frac{3.9 \\times 10^{-6}}{7.8 \\times 10^{-4}} \\approx 0.5\\%$.' },
        ],
        result: 'Slope $-0.040$ cm²/s; dissipation $\\approx 2.0$ µW; $\\approx 3.9$ µJ per oscillation, which is about $0.5\\%$ of the initial energy per swing.',
      },
      {
        title: 'Young’s modulus of a steel wire',
        problem: 'A steel wire of length 1.00 m has its diameter measured with a screw gauge (zero error removed) at several places; the mean is 0.70 mm. It is loaded, and the extension is measured with a vernier of least count 0.01 mm:\n\nLoad m (kg): 0.5, 1.0, 1.5, 2.0\nExtension (mm): 0.06, 0.13, 0.19, 0.26\n\nFind Young’s modulus of the wire.',
        steps: [
          { label: 'Step 1', text: 'Cross-section from the diameter: $A = \\frac{\\pi d^2}{4} = \\frac{\\pi (0.70 \\times 10^{-3})^2}{4} = 3.85 \\times 10^{-7}\\ \\text{m}^2$.' },
          { label: 'Step 2', text: 'Use the two ends of the table to average out reading scatter: from $m = 0.5$ to $2.0$ kg the load rises by $\\Delta F = 1.5 \\times 9.8 = 14.7$ N while the extension rises by $0.26 - 0.06 = 0.20$ mm $= 2.0 \\times 10^{-4}$ m.' },
          { label: 'Step 3', text: 'Young’s modulus from the slope: $Y = \\frac{\\Delta F \\cdot L}{A \\cdot \\Delta(\\Delta l)} = \\frac{14.7 \\times 1.00}{3.85 \\times 10^{-7} \\times 2.0 \\times 10^{-4}}$.' },
          { label: 'Step 4', text: 'Evaluate: the denominator is $7.70 \\times 10^{-11}$, so $Y = 1.9 \\times 10^{11}$ Pa — steel, as expected. A single-pair check on the 1.0 kg row gives $\\frac{9.8 \\times 1.00}{3.85 \\times 10^{-7} \\times 1.3 \\times 10^{-4}} \\approx 2.0 \\times 10^{11}$ Pa, agreeing within the reading resolution.' },
        ],
        result: '$Y \\approx 1.9 \\times 10^{11}$ Pa — a steel wire. The diameter dominates the error budget: 1% on $d$ is 2% on $Y$.',
      },
      {
        title: 'Viscosity from a falling steel ball',
        problem: 'A steel sphere of radius 1.00 mm and density $7800\\ \\text{kg/m}^3$ falls through glycerine of density $1260\\ \\text{kg/m}^3$ in a wide jar. Two horizontal marks 20.0 cm apart sit well below the surface; the sphere takes 11.7 s, 11.6 s and 11.7 s to cross between them. (i) Find the terminal velocity. (ii) Find the viscosity of the glycerine. (iii) Justify that the sphere is effectively at terminal speed by the first mark. Take $g = 9.8$ m/s².',
        steps: [
          { label: 'Step 1', text: 'Mean transit time $\\bar{t} = (11.7 + 11.6 + 11.7)/3 \\approx 11.7$ s, so $v_t = 0.200/11.7 = 1.7 \\times 10^{-2}$ m/s.' },
          { label: 'Step 2', text: 'Rearrange the terminal-velocity relation for the viscosity: $\\eta = \\frac{2r^2(\\rho - \\sigma)g}{9v_t} = \\frac{2(1.0 \\times 10^{-3})^2 (7800 - 1260)(9.8)}{9 \\times 1.71 \\times 10^{-2}}$.' },
          { label: 'Step 3', text: 'Numerator: $2 \\times 10^{-6} \\times 6540 \\times 9.8 = 0.128$. Denominator: $9 \\times 1.71 \\times 10^{-2} = 0.154$. So $\\eta = 0.128/0.154 = 0.83$ Pa·s.' },
          { label: 'Step 4', text: 'Terminal-speed check: the time constant is $\\tau = 2r^2\\rho/9\\eta = \\frac{2 \\times 10^{-6} \\times 7800}{9 \\times 0.83} \\approx 2$ ms, so the sphere is within a fraction of a percent of terminal speed less than a millimetre below release — any mark below that is safe. Published glycerine viscosities span roughly $1.4$ Pa·s at 20 °C to $0.6$ Pa·s at 30 °C, so quote the thermometer reading with the result.' },
        ],
        result: '$v_t \\approx 1.7 \\times 10^{-2}$ m/s and $\\eta \\approx 0.83$ Pa·s at the laboratory temperature — with the temperature recorded, since glycerine loses about a third of its viscosity between 20 and 25 °C.',
      },
    ],
    keyTakeaways: [
      'A weakly damped pendulum has $E \\propto A^2$, and the straight $A^2$–$t$ line means nearly constant energy loss per unit time; the slope times $\\tfrac{1}{2}m\\omega^2$ is the dissipated power.',
      'Young’s modulus from a wire: $Y = 4FL/(\\pi d^2 \\Delta l)$ — use a load–extension slope, and remember that the diameter error counts twice.',
      'Capillary rise gives $T = rh\\rho g/2$ for water in clean glass ($\\theta \\approx 0$); detergent lowers $T$ toward $0.03$ N/m and the rise falls in proportion — the wetting physics behind cleaning.',
      'The falling sphere measures $\\eta = 2r^2(\\rho-\\sigma)g/(9v_t)$ once — and only once — it is at terminal speed, which a small sphere reaches almost immediately; temperature is the controlling variable.',
    ],
    quiz: [
      {
        q: 'A wire of length 2.0 m and diameter 0.80 mm stretches by 0.50 mm under a 2.0 kg load ($g = 9.8$ m/s²). Young’s modulus of its material is approximately:',
        options: ['$1.6 \\times 10^{11}$ Pa', '$3.2 \\times 10^{11}$ Pa', '$8.0 \\times 10^{10}$ Pa', '$1.6 \\times 10^{8}$ Pa'],
        answer: 0,
        explanation: 'Step 1: Force $F = 2.0 \\times 9.8 = 19.6$ N; area $A = \\pi d^2/4 = \\pi (0.80 \\times 10^{-3})^2/4 = 5.0 \\times 10^{-7}$ m². Step 2: Substitute into $Y = FL/(A\\,\\Delta l) = 19.6 \\times 2.0/(5.0 \\times 10^{-7} \\times 5.0 \\times 10^{-4})$. Step 3: The denominator is $2.5 \\times 10^{-10}$, so $Y = 39.2/(2.5 \\times 10^{-10}) \\approx 1.6 \\times 10^{11}$ Pa. Step 4: The other options come from halving or doubling the area and from mixing millimetres with metres in the extension.',
      },
      {
        q: 'A capillary of radius 0.25 mm carries water up 5.9 cm. Taking complete wetting, $\\rho = 1000$ kg/m³ and $g = 9.8$ m/s², the surface tension of the water is about:',
        options: ['$0.036$ N/m', '$0.072$ N/m', '$0.144$ N/m', '$0.0072$ N/m'],
        answer: 1,
        explanation: 'Step 1: With complete wetting the rise gives $T = rh\\rho g/2$. Step 2: Substitute $r = 2.5 \\times 10^{-4}$ m, $h = 5.9 \\times 10^{-2}$ m, $\\rho = 1000$, $g = 9.8$. Step 3: $T = (2.5 \\times 10^{-4})(5.9 \\times 10^{-2})(1000)(9.8)/2 = 0.072$ N/m. Step 4: $0.036$ N/m drops the factor of 2, $0.144$ N/m doubles instead of halving, and $0.0072$ N/m misplaces the decimal by one place.',
      },
      {
        q: 'Dish detergent is dissolved in the water of a capillary-rise experiment. The rise in the same tube will:',
        options: ['Increase, because the solution is denser', 'Stay the same, since the tube is unchanged', 'Decrease, because surfactants lower the surface tension', 'First increase, then decrease'],
        answer: 2,
        explanation: 'Step 1: The rise is $h = 2T\\cos\\theta/(r\\rho g)$ — set mainly by $T$ for the same tube and nearly unchanged density. Step 2: Detergent is a surfactant: it lowers the surface tension of water from about 0.072 N/m toward 0.03 N/m. Step 3: With $T$ roughly halved, the rise roughly halves — 2.9 cm of water becomes about 1.2 cm of solution. Step 4: Density changes of a dilute solution are percent-level and cannot compete with a factor-of-two change in tension.',
      },
      {
        q: 'Keeping the liquid and the sphere material the same, the radius of the falling sphere is doubled. Its terminal velocity becomes:',
        options: ['Half as large', 'Twice as large', 'Eight times as large', 'Four times as large'],
        answer: 3,
        explanation: 'Step 1: Terminal velocity is $v_t = 2r^2(\\rho - \\sigma)g/(9\\eta)$, proportional to $r^2$ with everything else fixed. Step 2: Doubling $r$ multiplies $r^2$ by 4. Step 3: So the terminal velocity becomes four times as large. Step 4: This quadratic leverage is also why the sphere’s diameter must be measured carefully and why small spheres are preferred — they keep the fall slow enough to time.',
      },
    ],
  },

  // -------------------------------- phys-m20-s3 · Heat and Sound Experiments
  {
    sectionId: 'phys-m20-s3',
    readingTime: 8,
    prerequisites: [
      'Standing waves and sound in pipes (Waves—II)',
      'Heat capacity and specific heat (Temperature, Heat & the First Law)',
    ],
    intro: 'Two of the most reliable numbers in an introductory laboratory come from this section: the speed of sound in air, extracted from a water-filled tube that resonates with a tuning fork, and a specific heat capacity, extracted from hot metal stirred into cold water. The resonance tube wins its accuracy by cunning — taking two resonances for the same fork cancels the end correction that would otherwise spoil a single reading. The method of mixtures wins its accuracy by bookkeeping — every joule lost by the hot body is accounted for in the water, the calorimeter or the thermometer, and the losses that cannot be eliminated are estimated and repaid. Both experiments reward the same habit: measure the raw quantities carefully, then let an exact difference or an exact heat balance do the arithmetic for you.',
    objectives: [
      'Locate the first and second resonances of an air column and derive the wavelength from their separation',
      'Compute the speed of sound as $v = 2f(l_2 - l_1)$ and the end correction as $e = (l_2 - 3l_1)/2$, and check the result against $v \\approx 331 + 0.6\\,T$ m/s',
      'Set up the method of mixtures with a calorimeter, its water equivalent, proper stirring and correct timing of the peak temperature',
      'Determine the specific heat of a solid and of a liquid from the mixing balance, with the heat-loss tricks applied',
    ],
    concepts: [
      {
        term: 'The resonance tube',
        kind: 'definition',
        statement: 'A vertical tube partly filled with water carries an air column closed at the bottom by the water and open at the top; a vibrating tuning fork held over the mouth drives the column. Resonance — an abrupt loud reinforcement — occurs when the column is close to an odd number of quarter-wavelengths: $l_1 \\approx \\lambda/4$ for the first resonance and $l_2 \\approx 3\\lambda/4$ for the second, each measured from the mouth down to the water surface. The water level is raised or lowered until the sound strengthens; that level is the resonance length.',
        detail: 'The displacement node sits at the water, where the air cannot move, and the antinode lies just outside the open end, because the wave bulges slightly beyond the rim before reflecting. Strike the fork softly on a rubber pad — a hard strike adds overtones that excite spurious resonances — and hold it just over the mouth without touching the tube. A reservoir and rubber tube let the level be swept slowly through the resonance, which is far more precise than hunting it from one direction only.',
      },
      {
        term: 'Two-resonance difference method',
        kind: 'method',
        statement: 'Both resonances share the same end correction $e$, so the exact quarter-wave conditions are $l_1 + e = \\lambda/4$ and $l_2 + e = 3\\lambda/4$. Subtracting kills $e$: $$\\lambda = 2(l_2 - l_1), \\qquad v = f\\lambda = 2f(l_2 - l_1), \\qquad e = \\frac{l_2 - 3l_1}{2}.$$ Two lengths and one frequency deliver the speed of sound with no knowledge of the tube’s acoustics at all.',
        detail: 'The end correction can be checked against theory, which predicts $e \\approx 0.6R$ for a tube of radius $R$ — a 0.5 cm correction implies $R$ near 0.8 cm, a cross-check on the tube actually held. Keep $l_2 - l_1$ large by using a long tube and a fork of modest frequency: at 512 Hz the separation is about 34 cm, comfortably resolvable. Read the water level against a metre scale taped beside the tube with the eye level with the meniscus, which removes parallax from both lengths.',
      },
      {
        term: 'Speed of sound',
        kind: 'insight',
        statement: 'The measured speed must be reported with the air temperature, because dry air gains about 0.6 m/s for every degree Celsius: $v(T) \\approx 331 + 0.6\\,T$ m/s with $T$ in °C. At a laboratory 27 °C this predicts $v \\approx 347$ m/s, and a carefully run resonance tube at 27 °C lands within a fraction of a percent of it. Humidity adds a little more speed, since moist air is less dense.',
        detail: 'The temperature formula is the built-in marking scheme of the experiment: a measured 348 m/s has meaning only beside the thermometer reading. A result far from the temperature prediction points to a mis-identified resonance — the fork’s overtone exciting the column — or to parallax in reading the water level, not to the air. This dependence is also why the tube is kept away from sunlight, draughts and warm apparatus.',
      },
      {
        term: 'Method of mixtures',
        kind: 'law',
        statement: 'A hot solid at $T_s$ is stirred into water at $T_w$ inside a calorimeter, and the mixture settles to a peak temperature $T_m$. Neglecting losses to the room, the heat lost by the solid equals the heat gained by the water and the calorimeter: $$m_s c_s (T_s - T_m) = (m_w + W)(T_m - T_w),$$ where $W$ is the **water equivalent** of the calorimeter assembly. Solved for $c_s$, the same equation delivers the specific heat of the solid.',
        detail: 'The solid is heated in a steam chamber or boiling-water bath so that $T_s$ is the well-defined boiling point, and the transfer to the calorimeter is made quickly with hot tongs. Stir continuously and read the maximum the thermometer reaches — the peak is the true mixing temperature before room losses pull it back down. Every mass is a difference of weighings: calorimeter empty, with water, after the run; and the calorie system is used throughout, with the specific heat of copper as $0.092$ cal/g°C.',
      },
      {
        term: 'Water equivalent',
        kind: 'definition',
        statement: 'The **water equivalent** $W$ of a calorimeter is the mass of water that would absorb heat at the same rate as the calorimeter itself: $W = m_c c_c/c_w$. In the calorie system, where $c_w = 1.00$ cal/g°C, a copper calorimeter and stirrer of mass $m_c$ have $W = 0.092\\,m_c$ — a 120 g assembly behaves like 11 g of extra water.',
        detail: 'The definition quietly extends to every accessory that warms with the mixture: the stirrer, the thermometer (counted as a gram or two of water) and the clip holding the solid. Multiplying $W$ into the bracket $(m_w + W)$ is where most numerical slips happen — the calorimeter warms through the same $\\Delta T$ as the water, so it simply rides along inside the bracket. Keep one unit system throughout: calories with $c_w = 1$, or joules with $c_w = 4.18$ J/g°C, never both in the same line of arithmetic.',
      },
      {
        term: 'Heat-loss corrections',
        kind: 'insight',
        statement: 'No calorimeter is perfectly insulated, so the measured peak $T_m$ sits slightly below the loss-free value. The classical fix is **anticipation**: take the water a degree or so below room temperature initially, so that it gains from the room while below room and loses to it after passing room — the early losses are repaid by the late gains, and the two nearly cancel. What remains is removed by extrapolating the slow cooling curve of the mixture back to the instant of mixing.',
        detail: 'Choosing the initial water temperature about as far below room as the expected final temperature is above it is the single most effective precaution, and stating it earns the mark in a written answer. A polished outer vessel with an air jacket between the two vessels cuts the loss rate further — the copper inner sits in a wooden outer on an insulating support, never on the bench. The same calorimeter, run with a known solid, measures an unknown liquid in place of the water: the balance simply moves the unknown into the bracket, and that inverted run is the prescribed liquid method.',
      },
    ],
    figures: [
      {
        caption: 'Resonance tube: node at the water surface, antinode just outside the mouth; the two resonances give $v = 2f(l_2 - l_1)$ with the end correction cancelled.',
        sketchImage: '/diagrams/resonance_tube_sketch.jpg',
        sketchCaption: 'Acoustics Notebook: resonance tube with reservoir, tuning fork above the mouth, l1/l2 water levels with node-antinode sketch, v = 2f(l2 - l1) derivation notes.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Resonance tube apparatus with tuning fork, water reservoir and two resonance levels" font-family="sans-serif"><path d="M396 42V22Q396 10 410 10Q424 10 424 22V42" fill="none" stroke="currentColor" stroke-width="2"/><line x1="384" y1="18" x2="384" y2="34" stroke="currentColor" stroke-width="1.5"/><polygon points="384,18 380,27 388,27" fill="currentColor"/><polygon points="384,34 380,25 388,25" fill="currentColor"/><text x="432" y="30" font-size="11" fill="currentColor">tuning fork, f = 512 Hz</text><line x1="380" y1="45" x2="380" y2="272" stroke="currentColor" stroke-width="2.5"/><line x1="440" y1="45" x2="440" y2="272" stroke="currentColor" stroke-width="2.5"/><circle cx="410" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="426" y="44" font-size="11" fill="currentColor">A</text><line x1="382" y1="84" x2="438" y2="84" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><text x="372" y="72" font-size="11" fill="currentColor" text-anchor="end">l₁ + e = λ/4</text><line x1="382" y1="164" x2="438" y2="164" stroke="currentColor" stroke-width="2.5"/><text x="372" y="124" font-size="11" fill="currentColor" text-anchor="end">l₂ + e = 3λ/4</text><text x="372" y="168" font-size="11" fill="currentColor" text-anchor="end">N</text><text x="410" y="220" font-size="11" fill="currentColor" text-anchor="middle">water</text><line x1="452" y1="45" x2="452" y2="84" stroke="currentColor" stroke-width="1.5"/><polygon points="452,45 448,55 456,55" fill="currentColor"/><polygon points="452,84 448,74 456,74" fill="currentColor"/><text x="458" y="70" font-size="11" fill="currentColor">l₁ = 16.5 cm</text><line x1="500" y1="45" x2="500" y2="164" stroke="currentColor" stroke-width="1.5"/><polygon points="500,45 496,55 504,55" fill="currentColor"/><polygon points="500,164 496,154 504,154" fill="currentColor"/><text x="506" y="110" font-size="11" fill="currentColor">l₂ = 50.5 cm</text><path d="M85 110H125V140H150V240H60V140H85Z" fill="none" stroke="currentColor" stroke-width="2"/><line x1="66" y1="170" x2="144" y2="170" stroke="currentColor" stroke-width="1.5"/><text x="105" y="258" font-size="11" fill="currentColor" text-anchor="middle">reservoir</text><path d="M150 225C240 292 300 292 380 268" fill="none" stroke="currentColor" stroke-width="2"/><text x="105" y="96" font-size="11" fill="currentColor" text-anchor="middle">raise or lower</text><text x="105" y="284" font-size="11" fill="currentColor" text-anchor="middle">to tune the level</text><text x="360" y="296" font-size="12" fill="currentColor" text-anchor="middle">v = 2f(l₂ − l₁) = 2 × 512 × 0.340 m ≈ 348 m/s</text></svg>`,
        afterConcept: 2,
      },
      {
        caption: 'Method of mixtures: the copper calorimeter (water equivalent $W = 0.092\\,m_c$ in calories) rides inside an insulating jacket; stir continuously and read the peak.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calorimeter with stirrer, thermometer, hot solid and insulating jacket" font-family="sans-serif"><rect x="250" y="90" width="220" height="190" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M290 118V250H430V118" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="296" y1="168" x2="424" y2="168" stroke="currentColor" stroke-width="1.5"/><text x="360" y="184" font-size="11" fill="currentColor" text-anchor="middle">water</text><ellipse cx="377" cy="234" rx="14" ry="9" fill="none" stroke="currentColor" stroke-width="2"/><text x="377" y="254" font-size="11" fill="currentColor" text-anchor="middle">hot solid, Tₛ</text><line x1="366" y1="216" x2="366" y2="202" stroke="currentColor" stroke-width="1.5"/><polygon points="366,202 362,211 370,211" fill="currentColor"/><line x1="388" y1="216" x2="388" y2="202" stroke="currentColor" stroke-width="1.5"/><polygon points="388,202 384,211 392,211" fill="currentColor"/><line x1="286" y1="112" x2="313" y2="112" stroke="currentColor" stroke-width="2"/><line x1="317" y1="112" x2="391" y2="112" stroke="currentColor" stroke-width="2"/><line x1="399" y1="112" x2="434" y2="112" stroke="currentColor" stroke-width="2"/><line x1="315" y1="60" x2="315" y2="240" stroke="currentColor" stroke-width="1.5"/><ellipse cx="315" cy="240" rx="10" ry="6" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="298" y="48" font-size="11" fill="currentColor" text-anchor="end">stirrer</text><line x1="395" y1="58" x2="395" y2="222" stroke="currentColor" stroke-width="1.5"/><circle cx="395" cy="226" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="408" y="48" font-size="11" fill="currentColor">thermometer</text><text x="238" y="132" font-size="11" fill="currentColor" text-anchor="end">copper calorimeter</text><line x1="243" y1="128" x2="287" y2="126" stroke="currentColor" stroke-width="1"/><polygon points="287,126 277,122 277,130" fill="currentColor"/><text x="478" y="104" font-size="11" fill="currentColor">outer jacket + air gap</text><line x1="473" y1="100" x2="436" y2="108" stroke="currentColor" stroke-width="1"/><polygon points="436,108 446,108 443,101" fill="currentColor"/><text x="360" y="294" font-size="11" fill="currentColor" text-anchor="middle">anticipation trick: start the water below room temperature so early losses are repaid by late gains</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'Speed of sound from two resonances',
        problem: 'With a 512 Hz fork, a resonance tube gives its first resonance at $l_1 = 16.5$ cm and its second at $l_2 = 50.5$ cm. (i) Find the speed of sound in the air of the tube. (ii) Find the end correction and check it against the tube radius. (iii) The air is at 27 °C — does the result agree with $v \\approx 331 + 0.6\\,T$ m/s?',
        steps: [
          { label: 'Step 1', text: 'Difference method: $v = 2f(l_2 - l_1) = 2 \\times 512 \\times (0.505 - 0.165) = 2 \\times 512 \\times 0.340 = 348$ m/s.' },
          { label: 'Step 2', text: 'End correction: $e = \\frac{l_2 - 3l_1}{2} = \\frac{50.5 - 49.5}{2} = 0.5$ cm, which matches the rule of thumb $e \\approx 0.6R$ for a tube radius near $0.8$ cm — exactly the size of a standard resonance tube.' },
          { label: 'Step 3', text: 'Temperature check: $v(27\\ ^\\circ\\text{C}) \\approx 331 + 0.6 \\times 27 = 347$ m/s. The measured value differs by about 1 m/s — within a third of a percent.' },
          { label: 'Step 4', text: 'Bonus consistency: the wavelength is $\\lambda = 2(l_2 - l_1) = 0.680$ m, and $f\\lambda = 512 \\times 0.680 = 348$ m/s — the same number by two routes, as it must be.' },
        ],
        result: '$v \\approx 348$ m/s; $e = 0.5$ cm, consistent with $0.6R$ for $R \\approx 0.8$ cm; the temperature formula predicts 347 m/s at 27 °C — agreement within 0.3%.',
      },
      {
        title: 'Specific heat of a solid by mixing',
        problem: 'An 80.0 g metal sample is heated in steam to $100.0\\ ^\\circ$C and quickly stirred into 150.0 g of water at $20.0\\ ^\\circ$C in a copper calorimeter whose water equivalent is 11.0 g. The mixture peaks at $27.7\\ ^\\circ$C. (i) Find the specific heat of the metal. (ii) Identify the metal. (iii) What error would ignoring the calorimeter cause?',
        steps: [
          { label: 'Step 1', text: 'Heat lost by the metal: $m_s c_s (T_s - T_m) = 80.0 \\times c_s \\times (100.0 - 27.7) = 5784\\,c_s$ cal.' },
          { label: 'Step 2', text: 'Heat gained by water plus calorimeter: $(m_w + W)(T_m - T_w) = (150.0 + 11.0)(27.7 - 20.0) = 161 \\times 7.7 = 1240$ cal.' },
          { label: 'Step 3', text: 'Balance: $5784\\,c_s = 1240$, so $c_s = 0.214$ cal/g°C. Converting with 4.186 J/cal gives $c_s \\approx 0.90$ J/g°C — aluminium.' },
          { label: 'Step 4', text: 'Ignoring the calorimeter would give $c_s = \\frac{150 \\times 7.7}{5784} = 0.200$ cal/g°C, nearly 7% low: the 11 g of water equivalent is only 7% of the 161 g bracket, but it enters at full weight.' },
        ],
        result: '$c_s = 0.214$ cal/g°C $\\approx 0.90$ J/g°C — aluminium; neglecting the calorimeter biases the answer about 7% low.',
      },
      {
        title: 'Specific heat of a liquid by the same balance',
        problem: 'The same calorimeter (water equivalent 11.0 g) now holds 120.0 g of a light oil at $22.0\\ ^\\circ$C. The 80.0 g aluminium sample ($c_s = 0.215$ cal/g°C) at $100.0\\ ^\\circ$C is stirred in and the mixture settles at $37.2\\ ^\\circ$C. Find the specific heat of the oil.',
        steps: [
          { label: 'Step 1', text: 'Heat lost by the aluminium: $m_s c_s (T_s - T_m) = 80.0 \\times 0.215 \\times (100.0 - 37.2) = 17.2 \\times 62.8 = 1080$ cal.' },
          { label: 'Step 2', text: 'Heat gained by oil plus calorimeter: $(m_{\\text{oil}}c_{\\text{oil}} + W)(T_m - T_{\\text{oil}}) = (120\\,c_{\\text{oil}} + 11)(37.2 - 22.0) = (120\\,c_{\\text{oil}} + 11) \\times 15.2$.' },
          { label: 'Step 3', text: 'Balance and solve: $1080 = 1824\\,c_{\\text{oil}} + 167$, so $c_{\\text{oil}} = \\frac{913}{1824} = 0.50$ cal/g°C.' },
          { label: 'Step 4', text: 'In SI units: $0.50 \\times 4.186 \\approx 2.1$ J/g°C — the right order for kerosene-type oils, roughly half the value for water.' },
        ],
        result: '$c_{\\text{oil}} \\approx 0.50$ cal/g°C ($\\approx 2.1$ J/g°C) — the unknown has simply slid from the left of the balance into the bracket, which is the whole trick of the liquid method.',
      },
    ],
    keyTakeaways: [
      'The resonance lengths satisfy $l_1 + e = \\lambda/4$ and $l_2 + e = 3\\lambda/4$; subtracting gives $v = 2f(l_2 - l_1)$ with the end correction cancelled, and $e = (l_2 - 3l_1)/2$ comes free as a cross-check.',
      'Report the air temperature with the speed: $v \\approx 331 + 0.6\\,T$ m/s predicts 347 m/s at 27 °C, and a careful tube lands within a fraction of a percent.',
      'Method of mixtures: heat lost by the hot solid equals heat gained by $(m_w + W)$, with the copper water equivalent $W = 0.092\\,m_c$ in calories — ignoring it costs several percent.',
      'The liquid run inverts the same balance — known solid, unknown liquid inside the bracket — and the loss-control tricks (start below room temperature, stir, read the peak) apply to both.',
    ],
    quiz: [
      {
        q: 'A 512 Hz fork gives resonance lengths of 16.0 cm and 50.0 cm in a resonance tube. The speed of sound in the air of the tube is about:',
        options: ['174 m/s', '338 m/s', '348 m/s', '696 m/s'],
        answer: 2,
        explanation: 'Step 1: The two resonances differ by half a wavelength: $l_2 - l_1 = 34.0$ cm $= \\lambda/2$. Step 2: So $v = 2f(l_2 - l_1) = 2 \\times 512 \\times 0.340$. Step 3: $v = 348$ m/s. Step 4: 174 m/s forgets the factor of 2, 338 m/s wrongly uses $\\lambda = l_1 + l_2$, and 696 m/s doubles twice.',
      },
      {
        q: 'A 200 g metal sample at 100.0 °C is stirred into 300 g of water at 15.0 °C in a calorimeter of water equivalent 15.0 g; the mixture peaks at 25.2 °C. The specific heat of the metal is about:',
        options: ['0.215 cal/g°C', '0.11 cal/g°C', '0.43 cal/g°C', '0.90 cal/g°C'],
        answer: 0,
        explanation: 'Step 1: Heat gained $= (300 + 15)(25.2 - 15.0) = 315 \\times 10.2 = 3213$ cal. Step 2: Heat lost by the metal $= 200 \\times c \\times (100.0 - 25.2) = 14{,}960\\,c$. Step 3: Balance: $c = 3213/14{,}960 = 0.215$ cal/g°C — aluminium, whose value is about $0.90$ J/g°C but not 0.90 cal/g°C. Step 4: 0.43 cal/g°C doubles the heat term; 0.90 is the joule value wearing calorie units.',
      },
      {
        q: 'In the resonance-tube experiment, using $v = 2f(l_2 - l_1)$ rather than $v = 4f l_1$ alone is preferred because:',
        options: ['The tube is then not needed', 'Both resonances share the same end correction, which cancels in the difference', 'The fork’s frequency is uncertain, and the difference cancels it', 'The second resonance is louder and easier to hear'],
        answer: 1,
        explanation: 'Step 1: Each measured length is short by the same end correction: $l_1 + e = \\lambda/4$ and $l_2 + e = 3\\lambda/4$. Step 2: Subtracting eliminates $e$ exactly, whatever the tube’s radius or rim shape. Step 3: Using $4fl_1$ alone leaves $e$ inside the answer — an error of a few percent. Step 4: The frequency enters both forms identically, so it cannot be the reason.',
      },
      {
        q: 'The water equivalent of a calorimeter is:',
        options: ['The mass of water it can hold', 'The specific heat of its material', 'The heat lost to the surroundings in one minute', 'The mass of water that absorbs heat at the same rate as the calorimeter for the same temperature rise'],
        answer: 3,
        explanation: 'Step 1: The calorimeter, stirrer and thermometer warm through the same $\\Delta T$ as the water, absorbing $m_c c_c \\Delta T$. Step 2: The same heat would raise $W$ grams of water through the same $\\Delta T$ with $c_w = 1$ cal/g°C. Step 3: Setting the two equal gives $W = m_c c_c/c_w$ — for copper in calories, $W = 0.092\\,m_c$. Step 4: It is not the volume the vessel holds but its thermal bookkeeping equivalent in water.',
      },
    ],
  },

  // ------------------------------------ phys-m20-s4 · Electricity Experiments
  {
    sectionId: 'phys-m20-s4',
    readingTime: 9,
    prerequisites: [
      'Resistance and resistivity (Current and Resistance)',
      'Kirchhoff’s rules, the ammeter and the voltmeter (Circuits)',
    ],
    intro: 'The electricity bench converts three theoretical statements — the Wheatstone balance, Ohm’s law and the shunted galvanometer — into measurement routines that fill the practical notebook. The metre bridge turns one metre of uniform wire into a pair of ratio arms, so an unknown resistance is read off as a length; the resistivity of the wire then follows from its geometry alone. Ohm’s law, verified as a straight V–I line, is less about the law than about the ammeter–voltmeter arrangement, because each placement of the voltmeter bakes a small systematic error into the slope. And the half-deflection method squeezes two numbers out of one galvanometer — its own resistance and its figure of merit — with nothing but a resistance box, a shunt and a steady cell. Every result here is a ratio or a slope, which is exactly why these experiments are so accurate: meter errors cancel in quotients.',
    objectives: [
      'Balance a metre bridge and compute the unknown as $X = R\\,l/(100 - l)$, then convert it to resistivity with $\\rho = \\pi d^2 X/(4L)$',
      'Verify Ohm’s law from a V–I table, extract $R$ as the slope, and choose the ammeter–voltmeter arrangement that suits the resistance being measured',
      'Derive and apply the half-deflection results $G = RS/(R - S)$ and $k = E/((R + G)\\theta)$',
      'State the precautions — mid-wire balance, jockey taps, steady emf, no heating of the wire — that these experiments depend on',
    ],
    concepts: [
      {
        term: 'Metre bridge balance',
        kind: 'method',
        statement: 'A metre bridge is a Wheatstone network whose two ratio arms are the two stretches of a uniform one-metre wire: the unknown $X$ and a resistance-box value $R$ are joined at a node M, the battery is connected across the wire ends A–B, and the galvanometer reads the jockey potential against M. At balance — the galvanometer falls silent — $$\\frac{X}{R} = \\frac{l}{100 - l},$$ where $l$ is the balance length measured from the end of the wire joined to $X$, so $X = R\\,l/(100 - l)$.',
        detail: 'Tap the jockey, never drag it: dragging heats and wears the wire, changing its resistance per centimetre. Choose $R$ close to the expected $X$ so the balance point falls near the middle of the wire, where the reading is most precise and the end effects — stray resistance where the wire meets its terminals — matter least. The classic refinement is to interchange $X$ and $R$ between the gaps, rebalance and average the two results: the end error largely reverses sign and cancels.',
      },
      {
        term: 'Resistivity of the wire',
        kind: 'method',
        statement: 'Once $X$ is known, the material of the wire follows from its geometry: $$\\rho = \\frac{X A}{L} = \\frac{\\pi d^2}{4}\\cdot\\frac{X}{L},$$ with $L$ the wire’s stretched length from a metre scale and $d$ its diameter from a screw gauge at several places. The result identifies the alloy: constantan and manganin sit near $4.4$–$4.9 \\times 10^{-7}\\ \\Omega\\cdot$ m, nichrome near $1.1 \\times 10^{-6}\\ \\Omega\\cdot$ m, copper near $1.7 \\times 10^{-8}\\ \\Omega\\cdot$ m.',
        detail: 'The diameter is the weak link again — it enters squared — so several screw-gauge readings along the wire, rotated to catch ovality, are averaged. Measure $L$ with the wire held straight but unstrained, because a kinked wire misreports both its length and its effective cross-section. Alloys like constantan are used for resistance wires precisely because their resistivity barely moves with temperature, so a laboratory-temperature reading is a fair sample of the material.',
      },
      {
        term: 'Ohm’s law verification',
        kind: 'law',
        statement: 'Ohm’s law — $V \\propto I$ at constant temperature — is verified by plotting the voltmeter reading against the ammeter reading for a resistor: the points must lie on a **straight line through the origin**, and its slope is the resistance. A rheostat in series sweeps the current through a range; readings are taken with the current rising and again with it falling, and the two sets should agree if the resistor is not heating.',
        detail: 'Keep the current low enough that the resistor’s temperature — and hence its resistance — does not drift mid-experiment; a line that bends toward the voltage axis at high currents is the signature of heating, not of non-ohmic behaviour. Each reading is a simultaneous pair (V, I), and averaging the rising and falling sets cancels slow drifts. The slope is best read between the extreme points, $R = \\Delta V/\\Delta I$, when the points are visibly collinear — which is the whole claim of the law.',
      },
      {
        term: 'Ammeter–voltmeter arrangements',
        kind: 'insight',
        statement: 'Two arrangements measure $R = V/I$, each with its own systematic error. **Voltmeter across $R$ alone**: the ammeter reads $I_R + I_V$, so the computed value $V/(I_R + I_V) = R/(1 + R/R_V)$ reads **low** by about $R/R_V$ — this suits a small resistance. **Voltmeter across $R$ plus ammeter**: the voltmeter reads $V_R + V_A$, so the computed value $R + R_A$ reads **high** by $R_A$ — this suits a large one. The ammeter is built with milliohm shunts; the voltmeter, with a high series multiplier.',
        detail: 'The rule is easy to remember through the extreme cases: for a resistor of a few ohms against a voltmeter of kilohms, $R/R_V$ is a fraction of a percent while the ammeter’s 0.1 Ω is a full percent — connect the voltmeter across the resistor alone. For a kilohm resistor, the voltmeter current becomes the problem while 0.1 Ω becomes negligible — span the ammeter too. A third route avoids meters on the unknown altogether: the bridge methods of this section, which is why they are the standard-bearers for accuracy.',
      },
      {
        term: 'Half-deflection method',
        kind: 'method',
        statement: 'With the galvanometer in series with a large resistance $R$ and a cell of emf $E$, the deflection $\\theta$ corresponds to the current $E/(R + G)$. Now connect a shunt $S$ across the galvanometer and adjust it — same $E$, same $R$ — until the deflection falls to $\\theta/2$. The result is exact: $$G = \\frac{RS}{R - S},$$ and the cell’s internal resistance never appears because the same emf drives both settings.',
        detail: 'Why the formula lands where it does: with the shunt in place the cell drives $R$ in series with the parallel pair, and the galvanometer takes the fraction $S/(G + S)$ of the line current. Setting the galvanometer current equal to half the original gives $2S(R + G) = RG + RS + GS$, which rearranges to $G(R - S) = RS$. Only two assumptions are made — the same emf for both settings and a cell resistance negligible against $R$ — and both are easy to satisfy. Notice the graceful bench check: since $R \\gg S$, the formula gives $G$ only a shade above $S$, so the shunt that halves the deflection sits right at the galvanometer’s own resistance.',
      },
      {
        term: 'Figure of merit',
        kind: 'definition',
        statement: 'The **figure of merit** $k$ of a galvanometer is the current required per division of deflection. From the series setting of the half-deflection experiment: $$k = \\frac{E}{(R + G)\\theta}$$ in amperes per division, with $\\theta$ the deflection in divisions. A galvanometer with $k = 1.5 \\times 10^{-5}$ A per division needs 15 µA per division, and its full-scale current is $k$ times the number of divisions.',
        detail: 'The figure of merit converts the instrument into a meter: knowing $k$ and $G$, a shunt $S = G/(n-1)$ turns it into an ammeter of $n$ times the range, and a high series multiplier turns it into a voltmeter. It also prices the measurement — a galvanometer of very small $k$ is sensitive but slow and delicate, while one of large $k$ is robust but coarse. The half-deflection experiment delivers both numbers, $G$ from the resistance ratio and $k$ from the one calibration point, and both should be quoted together with the cell voltage used.',
      },
    ],
    figures: [
      {
        caption: 'Metre bridge: battery across the wire ends A–B, unknown $X$ and resistance box $R$ joined at node M, galvanometer between M and the jockey; balance gives $X = R\\,l/(100 - l)$.',
        sketchImage: '/diagrams/metre_bridge_sketch.jpg',
        sketchCaption: 'Circuits Notebook: metre bridge wire with jockey at the balance point, galvanometer, resistance box and unknown coil, X = R·l/(100 - l) balance condition.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Metre bridge circuit with wire, jockey, galvanometer, resistance box and unknown resistance" font-family="sans-serif"><line x1="140" y1="110" x2="580" y2="110" stroke="currentColor" stroke-width="3"/><circle cx="140" cy="110" r="3.5" fill="currentColor"/><circle cx="580" cy="110" r="3.5" fill="currentColor"/><text x="128" y="106" font-size="12" fill="currentColor" text-anchor="end">A</text><text x="592" y="106" font-size="12" fill="currentColor">B</text><path d="M140 114V120M184 114V120M228 114V120M272 114V120M316 114V120M360 114V120M404 114V120M448 114V120M492 114V120M536 114V120M580 114V120" stroke="currentColor" stroke-width="1"/><text x="140" y="134" font-size="11" fill="currentColor" text-anchor="middle">0</text><text x="250" y="134" font-size="11" fill="currentColor" text-anchor="middle">25</text><text x="360" y="134" font-size="11" fill="currentColor" text-anchor="middle">50</text><text x="470" y="134" font-size="11" fill="currentColor" text-anchor="middle">75</text><text x="580" y="134" font-size="11" fill="currentColor" text-anchor="middle">100 cm</text><line x1="313.8" y1="66" x2="313.8" y2="103" stroke="currentColor" stroke-width="2"/><polygon points="313.8,109 308.8,100 318.8,100" fill="currentColor"/><text x="313.8" y="58" font-size="11" fill="currentColor" text-anchor="middle">jockey</text><line x1="313.8" y1="120" x2="313.8" y2="156" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><text x="238" y="152" font-size="11" fill="currentColor" text-anchor="middle">balance: l = 39.5 cm from A</text><line x1="313.8" y1="66" x2="360" y2="66" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="66" x2="360" y2="143" stroke="currentColor" stroke-width="1.5"/><circle cx="360" cy="160" r="17" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="165" font-size="13" fill="currentColor" text-anchor="middle">G</text><line x1="360" y1="177" x2="360" y2="205" stroke="currentColor" stroke-width="1.5"/><circle cx="360" cy="205" r="3.5" fill="currentColor"/><text x="372" y="210" font-size="12" fill="currentColor">M</text><line x1="360" y1="205" x2="270" y2="205" stroke="currentColor" stroke-width="1.5"/><rect x="190" y="188" width="80" height="34" fill="none" stroke="currentColor" stroke-width="2"/><text x="230" y="209" font-size="11" fill="currentColor" text-anchor="middle">X (unknown)</text><line x1="190" y1="205" x2="140" y2="205" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="205" x2="450" y2="205" stroke="currentColor" stroke-width="1.5"/><rect x="450" y="188" width="80" height="34" fill="none" stroke="currentColor" stroke-width="2"/><text x="490" y="209" font-size="11" fill="currentColor" text-anchor="middle">R (box)</text><line x1="530" y1="205" x2="580" y2="205" stroke="currentColor" stroke-width="1.5"/><line x1="140" y1="110" x2="140" y2="262" stroke="currentColor" stroke-width="1.5"/><line x1="580" y1="110" x2="580" y2="262" stroke="currentColor" stroke-width="1.5"/><line x1="140" y1="262" x2="306" y2="262" stroke="currentColor" stroke-width="1.5"/><line x1="322" y1="262" x2="580" y2="262" stroke="currentColor" stroke-width="1.5"/><line x1="310" y1="252" x2="310" y2="272" stroke="currentColor" stroke-width="2.5"/><line x1="318" y1="257" x2="318" y2="267" stroke="currentColor" stroke-width="2.5"/><text x="314" y="288" font-size="11" fill="currentColor" text-anchor="middle">battery E</text><text x="360" y="298" font-size="12" fill="currentColor" text-anchor="middle">X = R · l / (100 − l)</text></svg>`,
        afterConcept: 1,
      },
      {
        caption: 'Half-deflection method: (a) the series setting gives deflection $\\theta$; (b) the shunt $S$ is tuned to $\\theta/2$ at the same emf — then $G = RS/(R - S)$.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two circuits for the half-deflection galvanometer experiment, series setting and shunted setting" font-family="sans-serif"><line x1="40" y1="60" x2="130" y2="60" stroke="currentColor" stroke-width="1.5"/><rect x="130" y="46" width="80" height="28" fill="none" stroke="currentColor" stroke-width="2"/><text x="170" y="65" font-size="13" fill="currentColor" text-anchor="middle">R</text><line x1="210" y1="60" x2="300" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="300" y1="60" x2="300" y2="110" stroke="currentColor" stroke-width="1.5"/><circle cx="300" cy="130" r="20" fill="none" stroke="currentColor" stroke-width="2"/><text x="300" y="135" font-size="13" fill="currentColor" text-anchor="middle">G</text><line x1="300" y1="130" x2="316" y2="144" stroke="currentColor" stroke-width="2"/><line x1="300" y1="150" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="300" y1="200" x2="40" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="200" x2="40" y2="136" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="124" x2="50" y2="124" stroke="currentColor" stroke-width="2.5"/><line x1="35" y1="136" x2="45" y2="136" stroke="currentColor" stroke-width="2.5"/><line x1="40" y1="124" x2="40" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="22" y="132" font-size="12" fill="currentColor" text-anchor="end">E</text><text x="54" y="122" font-size="11" fill="currentColor">+</text><text x="330" y="150" font-size="11" fill="currentColor">θ = 30 div</text><text x="170" y="240" font-size="12" fill="currentColor" text-anchor="middle">(a) full deflection θ</text><line x1="400" y1="60" x2="490" y2="60" stroke="currentColor" stroke-width="1.5"/><rect x="490" y="46" width="80" height="28" fill="none" stroke="currentColor" stroke-width="2"/><text x="530" y="65" font-size="13" fill="currentColor" text-anchor="middle">R</text><line x1="570" y1="60" x2="660" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="660" y1="60" x2="660" y2="110" stroke="currentColor" stroke-width="1.5"/><circle cx="660" cy="130" r="20" fill="none" stroke="currentColor" stroke-width="2"/><text x="660" y="135" font-size="13" fill="currentColor" text-anchor="middle">G</text><line x1="660" y1="130" x2="671" y2="137" stroke="currentColor" stroke-width="2"/><line x1="660" y1="150" x2="660" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="660" y1="200" x2="400" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="400" y1="200" x2="400" y2="136" stroke="currentColor" stroke-width="1.5"/><line x1="390" y1="124" x2="410" y2="124" stroke="currentColor" stroke-width="2.5"/><line x1="395" y1="136" x2="405" y2="136" stroke="currentColor" stroke-width="2.5"/><line x1="400" y1="124" x2="400" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="382" y="132" font-size="12" fill="currentColor" text-anchor="end">E</text><text x="414" y="122" font-size="11" fill="currentColor">+</text><text x="688" y="142" font-size="11" fill="currentColor">θ/2</text><line x1="660" y1="100" x2="560" y2="100" stroke="currentColor" stroke-width="1.5"/><line x1="560" y1="100" x2="560" y2="113" stroke="currentColor" stroke-width="1.5"/><rect x="533" y="113" width="54" height="28" fill="none" stroke="currentColor" stroke-width="2"/><text x="560" y="132" font-size="13" fill="currentColor" text-anchor="middle">S</text><line x1="560" y1="141" x2="560" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="560" y1="160" x2="660" y2="160" stroke="currentColor" stroke-width="1.5"/><text x="530" y="240" font-size="12" fill="currentColor" text-anchor="middle">(b) half deflection θ/2</text><text x="240" y="278" font-size="12" fill="currentColor" text-anchor="middle">G = RS / (R − S)</text><text x="500" y="278" font-size="12" fill="currentColor" text-anchor="middle">k = E / ((R + G) θ)</text></svg>`,
        afterConcept: 5,
      },
    ],
    examples: [
      {
        title: 'Resistivity of a wire from the bridge',
        problem: 'A wire is connected in the left gap of a metre bridge and a resistance box in the right gap. With $R = 10.0\\ \\Omega$ the balance point is 39.5 cm from the end joined to the wire. The wire is 50.0 cm long, and its screw-gauge diameter averages 0.22 mm. Find its resistance and the resistivity of its material.',
        steps: [
          { label: 'Step 1', text: 'Balance condition: $X = R\\,\\frac{l}{100 - l} = 10.0 \\times \\frac{39.5}{60.5} = 6.53\\ \\Omega$.' },
          { label: 'Step 2', text: 'Geometry inputs: $L = 0.500$ m from the metre scale, and $A = \\frac{\\pi d^2}{4} = \\frac{\\pi (0.22 \\times 10^{-3})^2}{4} = 3.8 \\times 10^{-8}\\ \\text{m}^2$ from the screw gauge.' },
          { label: 'Step 3', text: 'Resistivity: $\\rho = \\frac{XA}{L} = \\frac{6.53 \\times 3.8 \\times 10^{-8}}{0.500} = 5.0 \\times 10^{-7}\\ \\Omega\\cdot\\text{m}$.' },
          { label: 'Step 4', text: 'Identify the material: $5 \\times 10^{-7}\\ \\Omega\\cdot$ m sits in the constantan–manganin band of $4.4$–$4.9 \\times 10^{-7}$, the alloys used for resistance wires because this value barely moves with temperature. A copper wire of the same geometry would read about $0.22\\ \\Omega$ and balance near 2 cm — right where end errors dominate, which is why bridge work suits resistances of a few ohms and up.' },
        ],
        result: '$X = 6.53\\ \\Omega$ and $\\rho \\approx 5.0 \\times 10^{-7}\\ \\Omega\\cdot$ m — a constantan-family resistance wire.',
      },
      {
        title: 'Ohm’s law as a slope, with the meter errors priced',
        problem: 'A resistor is tested with a milliammeter of resistance $0.10\\ \\Omega$ and a voltmeter of resistance $3000\\ \\Omega$, the voltmeter connected across the resistor alone:\n\nV (volt): 0.4, 0.8, 1.2, 1.6, 2.0\nI (mA): 41, 82, 121, 164, 204\n\n(i) Find $R$ from the slope. (ii) Estimate the systematic error of this arrangement. (iii) Would the other arrangement have been better?',
        steps: [
          { label: 'Step 1', text: 'Collinearity check: each pair gives $V/I$ between 9.8 and 9.9 Ω, so the points lie on a line through the origin within reading resolution — Ohm’s law holds over this range.' },
          { label: 'Step 2', text: 'Slope from the extreme points: $R = \\frac{\\Delta V}{\\Delta I} = \\frac{2.0 - 0.4}{(204 - 41) \\times 10^{-3}} = \\frac{1.6}{0.163} = 9.8\\ \\Omega$.' },
          { label: 'Step 3', text: 'With the voltmeter across $R$ alone the ammeter over-reads by the voltmeter current, so the measured value is $R/(1 + R/R_V)$ — a fractional error of $-R/R_V = -9.8/3000 = -0.33\\%$, about $0.03\\ \\Omega$.' },
          { label: 'Step 4', text: 'The other arrangement — voltmeter spanning resistor plus ammeter — would read $R + R_A = 9.8 + 0.10 = 9.9\\ \\Omega$, a $+1.0\\%$ error, three times worse. For a resistance this small the voltmeter belongs across the resistor alone.' },
        ],
        result: '$R \\approx 9.8\\ \\Omega$; the chosen arrangement reads $0.33\\%$ low against $1.0\\%$ high for the alternative — it is the right one.',
      },
      {
        title: 'Galvanometer by half deflection',
        problem: 'A galvanometer is connected in series with a resistance box and a 2.0 V battery. With $R = 4400\\ \\Omega$ the deflection is 30 divisions. A shunt box is then connected across the galvanometer and, with $R$ and the battery untouched, adjusted until the deflection is 15 divisions, at $S = 60\\ \\Omega$. Find the galvanometer resistance and its figure of merit.',
        steps: [
          { label: 'Step 1', text: 'Half-deflection formula: $G = \\frac{RS}{R - S} = \\frac{4400 \\times 60}{4400 - 60} = \\frac{264{,}000}{4340} = 60.8\\ \\Omega$.' },
          { label: 'Step 2', text: 'Sanity check: since $R \\gg S$, the result sits only a shade above $S$ — 60.8 against 60 — and indeed the shunt that halves the deflection lands right at the galvanometer’s own resistance.' },
          { label: 'Step 3', text: 'Figure of merit from the series setting: $k = \\frac{E}{(R + G)\\theta} = \\frac{2.0}{(4400 + 60.8) \\times 30} = \\frac{2.0}{133{,}825} = 1.5 \\times 10^{-5}$ A per division.' },
          { label: 'Step 4', text: 'Full-scale current: 30 divisions at $1.5 \\times 10^{-5}$ A per division is $4.5 \\times 10^{-4}$ A, about 0.45 mA. With $G$ and $k$ known, the instrument converts: a shunt of $G/(n-1)$ makes an ammeter of $n$ times the range, and a series multiplier makes a voltmeter.' },
        ],
        result: '$G = 60.8\\ \\Omega$ and $k \\approx 1.5 \\times 10^{-5}$ A per division; the full-scale current is about $0.45$ mA.',
      },
    ],
    keyTakeaways: [
      'Metre bridge: $X = R\\,l/(100 - l)$ with $l$ measured from the unknown’s end; balance near mid-wire, tap the jockey, and interchange the gaps to cancel end error.',
      'Resistivity follows from geometry — $\\rho = \\pi d^2 X/(4L)$ — with the screw-gauge diameter the dominant, squared error source; the result identifies the alloy.',
      'Ohm’s law is a straight V–I line whose slope is $R$; put the voltmeter across a small resistance (error $\\approx R/R_V$) and across resistor plus ammeter for a large one (error $\\approx R_A/R$).',
      'Half deflection delivers $G = RS/(R - S)$ and $k = E/((R + G)\\theta)$ from one cell and two resistance boxes — valid because the same emf drives both settings.',
    ],
    quiz: [
      {
        q: 'In a metre bridge the unknown $X$ sits in the left gap and $R = 5.0\\ \\Omega$ in the right gap. The balance point is 40.0 cm from the left end of the wire. $X$ equals:',
        options: ['$3.3\\ \\Omega$', '$7.5\\ \\Omega$', '$2.0\\ \\Omega$', '$5.0\\ \\Omega$'],
        answer: 0,
        explanation: 'Step 1: The balance condition is $X/R = l/(100 - l)$ with $l$ measured from the end joined to $X$. Step 2: Substitute: $X = 5.0 \\times 40.0/60.0$. Step 3: $X = 200/60 = 3.3\\ \\Omega$. Step 4: $7.5\\ \\Omega$ comes from inverting the ratio — the classic left–right slip.',
      },
      {
        q: 'In a half-deflection experiment the series resistance is 8800 Ω and the shunt that halves the deflection is 100 Ω. The galvanometer resistance is about:',
        options: ['99 Ω', '101 Ω', '100 Ω', '8700 Ω'],
        answer: 1,
        explanation: 'Step 1: The half-deflection result is $G = RS/(R - S)$. Step 2: Substitute: $G = 8800 \\times 100/(8800 - 100) = 880{,}000/8700$. Step 3: $G \\approx 101\\ \\Omega$ — a shade above the shunt, as it must be when $R \\gg S$. Step 4: 99 Ω is the $R + S$ slip and 100 Ω ignores the small correction the formula exists to supply.',
      },
      {
        q: 'To measure a resistance of about 10 Ω with a voltmeter of 3 kΩ and an ammeter of 0.1 Ω, the voltmeter should be connected:',
        options: ['Across the series combination of the resistor and the ammeter', 'In series with the ammeter', 'It makes no difference at this resistance', 'Across the resistor alone, with the ammeter outside the voltmeter loop'],
        answer: 3,
        explanation: 'Step 1: With the voltmeter across the resistor alone, the ammeter includes the voltmeter current, so the error is about $R/R_V = 10/3000 \\approx 0.3\\%$ on the low side. Step 2: Spanning the resistor plus ammeter instead reads the ammeter’s voltage too — an error of $R_A/R = 0.1/10 = 1\\%$ on the high side. Step 3: The smaller error wins: connect the voltmeter across the resistor alone. Step 4: A voltmeter is never wired in series — it is a high-resistance instrument built to tap, not to carry.',
      },
      {
        q: 'In a metre bridge experiment, the resistance box is chosen close to the expected unknown so that the balance point falls near the middle of the wire. The main reason is that:',
        options: ['The wire’s resistance is smallest near the middle', 'The galvanometer is most sensitive at mid-wire', 'Reading errors and end effects contribute least to the ratio near mid-wire', 'The battery current is limited by a mid-wire balance'],
        answer: 2,
        explanation: 'Step 1: The unknown is a ratio $l/(100 - l)$, and an uncertainty in the balance point perturbs this ratio least when $l$ is near 50 cm. Step 2: Stray resistances where the wire meets its terminals act like extra lengths — end errors — and they weigh on the ratio in proportion to their size relative to $l$ and $100 - l$. Step 3: Mid-wire balance therefore minimises both the fractional reading error and the end-effect error. Step 4: Neither the wire’s resistance distribution nor the galvanometer’s sensitivity depends on where the jockey sits.',
      },
    ],
  },
]
