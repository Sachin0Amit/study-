import type { SectionContent } from '../library'

// ============================================================
// Halliday, Resnick & Walker — Fundamentals of Physics 11e
// Extended, Chapter 11: Rolling, Torque, and Angular Momentum
// (HRW pp. 294–326). Rolling kinematics and energy, the yo-yo,
// torque as a vector, angular momentum, its conservation and
// the precessing gyroscope.
// ============================================================

export const hallCh11Content: SectionContent[] = [
  // ------------------------------------------------------ 11.1
  {
    sectionId: 'hall-ch11-s1',
    readingTime: 6,
    intro: "A rolling wheel is doing two jobs at once: its center translates while every spoke rotates about that center. Remarkably, the two motions are welded together by one simple equation, v = ωR, and the wheel's contact with the road is — for an instant — perfectly still. Rolling is the first place where the linear and rotational halves of mechanics must be used simultaneously.",
    objectives: [
      "Describe rolling as translation of the center of mass plus rotation about the center of mass",
      "Derive and apply the rolling-without-slipping constraint $v_{com} = \\omega R$ and its differentiated form $a_{com} = \\alpha R$",
      "Show that rolling is instantaneously a pure rotation about the contact point, with the top of the wheel moving at twice the com speed",
    ],
    concepts: [
      {
        term: 'Rolling as two motions',
        kind: 'definition',
        statement: "A rolling body's motion is the superposition of (i) **pure translation** — every point moves with $\\vec v_{com}$ — and (ii) **pure rotation** about an axis through the center of mass. The velocity of any point is the vector sum of the two contributions.",
        detail: "This decomposition is exact, not an approximation, and it is the bookkeeping device for everything in this chapter: kinetic energy splits the same way ($\\frac12 Mv_{com}^2 + \\frac12 I_{com}\\omega^2$), and each point's velocity comes from adding the two vector pieces.",
      },
      {
        term: 'The rolling constraint',
        kind: 'theorem',
        statement: "For rolling **without slipping**, the translational and angular motions are locked: $$v_{com} = \\omega R, \\qquad a_{com} = \\alpha R$$ (the second by differentiation). The arc length laid on the road equals the distance traveled: $s = R\\theta$.",
        detail: "The proof is one sentence: the contact point must have zero velocity relative to the ground, and the contact point's velocity is $v_{com}$ (translation) minus $\\omega R$ (rotation moving backward), forcing the equality. Skidding — a locked wheel on ice — is exactly the failure of this constraint.",
      },
      {
        term: 'Instantaneous axis at the contact point',
        kind: 'insight',
        statement: "Because the contact point is momentarily at rest, the rolling wheel is instantaneously in **pure rotation about that point**: the top of the wheel moves at $2v_{com}$, the center at $v_{com}$, the contact at zero. The wheel pivots about its own footprint, over and over.",
        detail: "This is why the top of a moving bicycle wheel is a blur while the valve stem near the hub is trackable — and why a mud flap placed high on a truck catches flung debris: the top of the tire swings forward at twice the truck's speed. The full trajectory of a rim point is a cycloid.",
      },
      {
        term: "Rolling: solution protocol",
        kind: "method",
        statement: "**Solve Rolling problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rolling and angular momentum; the working equation is $v_{\\text{com}} = \\omega R$ (no slip), $\\vec L = \\vec r\\times\\vec p$, $L = I\\omega$, $\\vec\\tau_{\\text{net}} = d\\vec L/dt$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m}^2/\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit); no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.",
      },
      {
        term: "Rolling: scales and validity",
        kind: "insight",
        statement: "**Rolling lives at $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit) and the textbook model holds while no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Rolling calculation gives seconds when $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ demands meters, or a value orders of magnitude beyond $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit), recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: "Rolling without slipping. The wheel translates at $v_{com}$ while rotating at $\\omega$, and the two are locked by $v_{com} = \\omega R$: the bottom point's backward rotational speed $\\omega R$ exactly cancels the forward translation, so the contact point is **instantaneously at rest**. Point speeds stack: zero at contact, $v_{com}$ at the hub, $2v_{com} = 2\\omega R$ at the top. The wheel may be viewed as pure rotation about the contact point at each instant.",
        svg: `<svg viewBox="0 0 460 300" width="100%" role="img" aria-label="Rolling wheel velocity decomposition" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><line x1="20" y1="240" x2="440" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="250" cy="155" r="85" fill="none" stroke="currentColor" stroke-width="2.5"/><g stroke="currentColor" stroke-width="1" opacity="0.4"><line x1="250" y1="70" x2="250" y2="240"/><line x1="165" y1="155" x2="335" y2="155"/><line x1="190" y1="95" x2="310" y2="215"/><line x1="190" y1="215" x2="310" y2="95"/></g><line x1="250" y1="155" x2="250" y2="240" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><text x="262" y="205" font-size="10.5" fill="currentColor">R</text><line x1="250" y1="70" x2="384" y2="70" stroke="currentColor" stroke-width="2.5"/><polygon points="388,70 373,64 373,76" fill="currentColor"/><text x="322" y="60" font-size="10.5" fill="currentColor" text-anchor="middle">2v = 2ωR</text><line x1="250" y1="155" x2="318" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="322,155 307,149 307,161" fill="currentColor"/><text x="352" y="152" font-size="10.5" fill="currentColor" text-anchor="middle">v = ωR</text><path d="M291,114 A58 58 0 0 1 291,196" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="291,196 304.4,189.6 297.4,182.6" fill="currentColor"/><text x="310" y="108" font-size="11" fill="currentColor">ω</text><circle cx="250" cy="240" r="5.5" fill="currentColor"/><text x="250" y="262" font-size="10.5" fill="currentColor" text-anchor="middle">v = 0 (instantaneously at rest)</text><text x="230" y="292" font-size="11" fill="currentColor" text-anchor="middle">rolling without slipping:  v com = ω R</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "A bicycle's wheel speed",
        problem: "A bicycle rolls at 6.2 m/s on wheels of radius 0.33 m. Find the wheels' angular velocity and the speed of the topmost point of a wheel.",
        steps: [
          { label: 'Angular velocity', text: "From $v_{com} = \\omega R$: $\\omega = 6.2/0.33 = 18.8\\ \\text{rad/s}$, or $\\omega/2\\pi = 3.0$ rev/s." },
          { label: 'Top point', text: "Translation gives $+6.2$ m/s; rotation about the hub adds $\\omega R = 6.2$ m/s in the same direction at the top: total $12.4$ m/s forward." },
          { label: 'Contact point', text: "The two contributions cancel there: the point on the tire touching the road is momentarily at rest relative to the road — rolling is a sequence of pivots about the footprint." },
        ],
        result: "$\\omega = 18.8$ rad/s (3.0 rev/s); the tire's crown races ahead at 12.4 m/s while its footprint stands still.",
      },
      {
        title: "How far per revolution",
        problem: "A car moves at 20 m/s on tires of radius 0.33 m. Find the tire's angular velocity in rev/s, and the distance the car travels per wheel revolution.",
        steps: [
          { label: 'Angular velocity', text: "$\\omega = v/R = 20/0.33 = 60.6$ rad/s; $60.6/2\\pi = 9.65$ rev/s." },
          { label: 'Distance per turn', text: "$s = R\\theta$ for one turn: $s = 2\\pi R = (2\\pi)(0.33) = 2.07$ m — the tire's circumference, as it must be." },
          { label: 'Cross-check', text: "At 9.65 turns per second times 2.07 m per turn: $9.65 \\times 2.07 = 20$ m/s. Consistent — the constraint stitches the two descriptions together." },
        ],
        result: "$\\omega = 60.6$ rad/s $= 9.65$ rev/s; each revolution carries the car 2.07 m, one full circumference.",
      },
    ],
    keyTakeaways: [
      "Rolling = translation of the com + rotation about the com; without slipping the two are locked by $v_{com} = \\omega R$ and $a_{com} = \\alpha R$.",
      "The contact point is instantaneously at rest, so rolling is pure rotation about the contact point: point speeds run from 0 (contact) to $2v_{com}$ (top).",
      "Distance traveled equals arc laid down: $s = R\\theta$, one circumference per revolution.",
    ],
    quiz: [
      {
        q: "A wheel of radius 0.40 m rolls without slipping at 6.0 m/s. Its angular velocity is:",
        options: ['6.0 rad/s', '15 rad/s', '24 rad/s', '2.4 rev/s'],
        answer: 1,
        explanation: "$\\omega = v_{com}/R = 6.0/0.40 = 15$ rad/s — about 2.4 rev/s only in the separate sense that $15/2\\pi \\approx 2.39$; the clean answer in the requested unit is 15 rad/s.",
      },
      {
        q: "For a wheel rolling without slipping, which point is instantaneously at rest?",
        options: [
          'the center of mass',
          'the topmost point',
          'the point in contact with the ground',
          'no point; rolling motion never rests',
        ],
        answer: 2,
        explanation: "At the contact point the backward rotational speed $\\omega R$ cancels the forward translation $v_{com} = \\omega R$ — the footprint is momentarily stationary, which is precisely why static friction can grip it.",
      },
      {
        q: "A car travels at 15 m/s. The top of a tire moves forward, relative to the road, at:",
        options: ['0 m/s', '15 m/s', '30 m/s', 'depends on the tire radius'],
        answer: 2,
        explanation: "Translation ($v_{com}$) and rotation ($\\omega R = v_{com}$) add at the top: $2v_{com} = 30$ m/s. This is why high tire flings debris so far — and why the speedometer's cable is safe inside the hub.",
      },
    ],
  },

  // ------------------------------------------------------ 11.2
  {
    sectionId: 'hall-ch11-s2',
    readingTime: 8,
    intro: "Why does a can of soup beat a hoop down a ramp? Because rolling energy splits between translation and spin, and how much goes to spin is set by the body's shape through the single ratio I_com/MR². One derivation gives the acceleration of any round body on an incline, and the famous race result: sphere first, disk next, hoop last — independent of mass and radius.",
    objectives: [
      "Write the kinetic energy of a rolling body as $K = \\frac12 Mv_{com}^2 + \\frac12 I_{com}\\omega^2$ and combine it with the rolling constraint",
      "Derive $a_{com} = \\frac{g\\sin\\theta}{1 + I_{com}/MR^2}$ for rolling down an incline, using force/torque analysis",
      "Predict and verify the rolling race: sphere beats disk beats hoop, independent of M and R",
    ],
    concepts: [
      {
        term: 'Kinetic energy of rolling',
        kind: 'theorem',
        statement: "A body rolling at $v_{com}$ with spin $\\omega$ has $$K = \\tfrac12 M v_{com}^2 + \\tfrac12 I_{com}\\omega^2 = \\tfrac12 M v_{com}^2\\left(1 + \\frac{I_{com}}{MR^2}\\right),$$ where the second form uses the rolling constraint $\\omega = v_{com}/R$.",
        detail: "The dimensionless shape factor $k = I_{com}/MR^2$ is all that matters: hoop $k = 1$, disk $k = \\frac12$, solid sphere $k = \\frac25$. A hoop devotes half its rolling energy to spin; a sphere only 2/7 of the total. Note mass and radius have cancelled — shape alone decides.",
      },
      {
        term: 'Rolling down an incline',
        kind: 'method',
        statement: "Newton's second law along the incline plus the torque equation about the com gives, for rolling without slipping, $$a_{com} = \\frac{g\\sin\\theta}{1 + I_{com}/MR^2}.$$ Derivation: $Mg\\sin\\theta - f = Ma_{com}$ and $fR = I_{com}\\alpha = I_{com}a_{com}/R$; eliminate $f$.",
        detail: "The friction $f$ is **static** — the contact point does not slide — so it does no work and wastes no energy; it merely redistributes energy from translation into spin. On a frictionless ramp the body would slide at $g\\sin\\theta$ and never rotate at all.",
      },
      {
        term: 'The rolling race',
        kind: 'insight',
        statement: "Ranking by shape factor $k$: sphere ($\\frac25$) > disk ($\\frac12$) > hoop ($1$) in acceleration, whatever their masses and radii. At the bottom of a drop of height $h$, $$v = \\sqrt{\\frac{2gh}{1+k}}:$$ sphere $\\sqrt{10gh/7}$, disk $\\sqrt{4gh/3}$, hoop $\\sqrt{gh}$.",
        detail: "The finish order is a pure geometry statement — a marble beats a coin beats a hula hoop on any ramp, every time. Cans of soup race by their contents: liquid soup barely rotates ($k \\approx 0$) and outruns a solid can, a classic lecture demo.",
      },
      {
        term: "Forces and Kinetic Energy of Rolling: solution protocol",
        kind: "method",
        statement: "**Solve Forces and Kinetic Energy of Rolling problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rolling and angular momentum; the working equation is $v_{\\text{com}} = \\omega R$ (no slip), $\\vec L = \\vec r\\times\\vec p$, $L = I\\omega$, $\\vec\\tau_{\\text{net}} = d\\vec L/dt$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m}^2/\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit); no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.",
      },
      {
        term: "Forces and Kinetic Energy of Rolling: scales and validity",
        kind: "insight",
        statement: "**Forces and Kinetic Energy of Rolling lives at $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit) and the textbook model holds while no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Forces and Kinetic Energy of Rolling calculation gives seconds when $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ demands meters, or a value orders of magnitude beyond $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "The ramp race, numerically",
        problem: "A solid sphere, a solid disk and a hoop, each of the same mass 1.0 kg and radius 0.10 m, are released together on a 30° incline of height 1.2 m. Find each acceleration and each speed at the bottom.",
        steps: [
          { label: 'Accelerations', text: "$a = g\\sin 30^\\circ/(1+k)$: sphere $(4.90)/(1.4) = 3.5\\ \\text{m/s}^2$; disk $4.90/1.5 = 3.27\\ \\text{m/s}^2$; hoop $4.90/2.0 = 2.45\\ \\text{m/s}^2$." },
          { label: 'Bottom speeds via energy', text: "$v = \\sqrt{2gh/(1+k)}$ with $2gh = 23.5\\ \\text{m}^2/\\text{s}^2$: sphere $\\sqrt{23.5/1.4} = 4.10$; disk $\\sqrt{23.5/1.5} = 3.96$; hoop $\\sqrt{23.5/2} = 3.43$ m/s." },
          { label: 'Energy audit for the sphere', text: "$Mgh = (1.0)(9.8)(1.2) = 11.8$ J; at the bottom $K_{trans} = \\frac12(1)(16.8) = 8.4$ J and $K_{rot} = \\frac12 (\\frac25 MR^2)(v/R)^2 = \\frac15 v^2 = 3.4$ J. Total $11.8$ J — the gravitational payment is split 5:2 between translation and spin, exactly the sphere's $1 + \\frac25$." },
          { label: 'Mass and radius', text: "Cancel everywhere: a 5 g marble and a 5 kg bowling ball tie, and so would a coin and a manhole cover of the same shape." },
        ],
        result: "Accelerations 3.5 / 3.3 / 2.5 m/s² and bottom speeds 4.10 / 3.96 / 3.43 m/s for sphere, disk, hoop — shape alone sets the podium.",
      },
      {
        title: "How much friction does rolling need?",
        problem: "For the sphere of the previous example on the 30° ramp, find the static friction force and the minimum coefficient of friction.",
        steps: [
          { label: 'Torque equation', text: "$fR = I_{com}\\alpha$ with $I = \\frac25 MR^2$ and $\\alpha = a/R$: $f = \\frac25 Ma = (0.4)(1.0)(3.5) = 1.4$ N." },
          { label: 'Compare with the normal force', text: "$N = Mg\\cos 30^\\circ = (1.0)(9.8)(0.866) = 8.5$ N." },
          { label: 'Minimum μ', text: "$\\mu_{min} = f/N = 1.4/8.5 = 0.16$. Any grippier surface and the sphere rolls; any slicker and it slips, and then both the acceleration and the analysis change." },
          { label: 'Note who does the work', text: "Static friction acts at a point of zero velocity, so it does no work: it levies no energy tax, it only redirects energy into spin." },
        ],
        result: "$f = 1.4$ N and $\\mu_{min} \\approx 0.16$: just enough grip to enforce $v_{com} = \\omega R$.",
      },
    ],
    keyTakeaways: [
      "Rolling energy splits as $K = \\frac12 Mv^2(1 + k)$ with shape factor $k = I_{com}/MR^2$ — mass and radius cancel, shape alone matters.",
      "Down an incline, $a_{com} = g\\sin\\theta/(1 + k)$; the required friction is static and does no work.",
      "Race order: sphere ($k = 2/5$) before disk ($1/2$) before hoop ($1$), with bottom speeds $\\sqrt{10gh/7}$, $\\sqrt{4gh/3}$, $\\sqrt{gh}$.",
    ],
    quiz: [
      {
        q: "A solid sphere and a hoop roll from rest down the same incline. At the bottom:",
        options: [
          'both have the same speed; the hoop spins faster',
          'the sphere is faster, because less of its energy is tied up in rotation',
          'the hoop is faster, because it stores more rotational energy',
          'the winner depends on their masses',
        ],
        answer: 1,
        explanation: "$v = \\sqrt{2gh/(1+k)}$ is larger for smaller $k$: the sphere's $\\frac25$ beats the hoop's $1$. Energy is conserved either way; the sphere just spends less of it spinning.",
      },
      {
        q: "A solid disk rolls down a 30° incline without slipping. Its acceleration is:",
        options: [`$4.9\\ \\text{m/s}^2$`, `$3.3\\ \\text{m/s}^2$`, `$2.45\\ \\text{m/s}^2$`, `$9.8\\ \\text{m/s}^2$`],
        answer: 1,
        explanation: "$a = g\\sin\\theta/(1 + \\frac12) = (9.8)(0.5)/1.5 = 3.27\\ \\text{m/s}^2$. The sliding disk (no friction) would accelerate at 4.9 — rolling always brakes relative to sliding.",
      },
      {
        q: "The friction acting on a body rolling without slipping down an incline:",
        options: [
          'does negative work, dissipating energy as heat',
          'does no work, because it acts on an instantaneously stationary contact point',
          'does positive work, driving the rotation',
          'is kinetic friction and depends on the sliding speed',
        ],
        answer: 1,
        explanation: "The contact patch is momentarily at rest, so $P = \\vec f \\cdot \\vec v = 0$ there: static friction transfers energy between translation and spin without taxing it. That is why the bottom speeds obey energy conservation exactly.",
      },
      {
        q: "A soup can (liquid center, barely rotates) races a solid can of the same size down a ramp. The winner is:",
        options: [
          'the liquid can, because almost none of its energy goes to spin',
          'the solid can, because it is heavier',
          'a tie, since both have the same mass and radius',
          'the solid can, because solid cans have lower centers of mass',
        ],
        answer: 0,
        explanation: "The liquid mostly translates ($k \\to 0$ effectively for the soup), so $a \\to g\\sin\\theta$: nearly the full gravitational payment goes into forward motion. The demo works precisely because the soup refuses to spin with the can.",
      },
    ],
  },

  // ------------------------------------------------------ 11.3
  {
    sectionId: 'hall-ch11-s3',
    readingTime: 6,
    intro: "A yo-yo is a rolling body whose ramp is its own string: it falls, translating and spinning, with the string tension torquing the spin. The analysis is one force equation plus one torque equation, and the result — that a solid-disk yo-yo falls at two-thirds of g — showcases the clean division of labor between Newton's two laws.",
    objectives: [
      "Model the yo-yo as a body rolling down its string and derive its acceleration and tension",
      "Verify the solution by energy bookkeeping",
      "Explain why a yo-yo's axle radius and body inertia, not its mass, set the behavior",
    ],
    concepts: [
      {
        term: 'The yo-yo setup',
        kind: 'definition',
        statement: "A yo-yo is a spool of radius $R$ and rotational inertia $I$ hanging from a string wound around its axle. As it falls a distance $d$, the com translates downward while the string unwinds without slipping: the 'rolling constraint' is $v_{com} = \\omega R$ with the string's exit point playing the road's contact point.",
        detail: "The string is vertical and (ideally) massless; the tension $T$ acts at the rim of the axle, tangent to it, so it delivers torque $TR$ about the center of mass. Real yo-yos have a thin axle, but the textbook model treats the string radius as $R$ — the inertia $I$ absorbs the difference in shape.",
      },
      {
        term: 'Yo-yo acceleration and tension',
        kind: 'method',
        statement: "Newton's second law for the fall plus the torque equation about the com: $$Mg - T = Ma_{com}, \\qquad TR = I\\alpha = I\\frac{a_{com}}{R}.$$ Eliminating $T$: $$a_{com} = \\frac{g}{1 + I/MR^2}, \\qquad T = \\frac{Mg}{1 + MR^2/I}.$$ For a solid-disk yo-yo ($I = \\frac12 MR^2$): $a = \\frac23 g$ and $T = \\frac13 Mg$.",
        detail: "The yo-yo is a ramp-less rerun of Section 11.2: gravity pulls, the string tension both brakes the fall and drives the spin, and the shape factor $I/MR^2$ fixes the split. A massive-rim yo-yo ($I \\to MR^2$) would fall at $g/2$; the string would be doing half the work of holding it.",
      },
      {
        term: 'The energy check',
        kind: 'method',
        statement: "Energy descent: $Mgh = \\frac12 Mv^2 + \\frac12 I\\omega^2 = \\frac12 Mv^2(1 + I/MR^2)$, so $$v = \\sqrt{\\frac{2gh}{1 + I/MR^2}}$$ — identical to the rolling-down-a-ramp result with $h$ the distance unwound. For the solid-disk yo-yo, $v = \\sqrt{4gh/3}$.",
        detail: "That the force analysis and the energy analysis agree is a nontrivial consistency check on the tension's role: tension does no net work (the string's contact point with the axle is instantaneously at rest relative to the string), so gravity's energy splits cleanly between the two kinetic forms.",
      },
      {
        term: "The Yo-Yo: solution protocol",
        kind: "method",
        statement: "**Solve The Yo-Yo problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rolling and angular momentum; the working equation is $v_{\\text{com}} = \\omega R$ (no slip), $\\vec L = \\vec r\\times\\vec p$, $L = I\\omega$, $\\vec\\tau_{\\text{net}} = d\\vec L/dt$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m}^2/\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit); no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.",
      },
      {
        term: "The Yo-Yo: scales and validity",
        kind: "insight",
        statement: "**The Yo-Yo lives at $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit) and the textbook model holds while no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a The Yo-Yo calculation gives seconds when $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ demands meters, or a value orders of magnitude beyond $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "A falling yo-yo",
        problem: "A yo-yo modeled as a solid disk of mass 0.20 kg and string radius 2.0 cm falls from rest. Find its acceleration, the string tension, and its speed after unwinding 1.0 m.",
        steps: [
          { label: 'Acceleration', text: "With $I = \\frac12 MR^2$: $a = g/(1 + \\frac12) = \\frac23(9.8) = 6.5\\ \\text{m/s}^2$ — a yo-yo is a lazy faller." },
          { label: 'Tension', text: "$T = Mg - Ma = M(g - \\frac23 g) = \\frac13 Mg = \\frac13(0.20)(9.8) = 0.65$ N. The string holds only a third of the weight while the yo-yo is descending." },
          { label: 'Speed after 1.0 m', text: "Kinematics: $v = \\sqrt{2as} = \\sqrt{2(6.53)(1.0)} = 3.6$ m/s. Energy: $Mgh = \\frac12 Mv^2(1.5)$ gives the same $v^2 = 2gh/1.5 = 13.1$." },
          { label: 'Spin', text: "$\\omega = v/R = 3.6/0.020 = 180$ rad/s — about 29 rev/s. Most of the energy is spin: $\\frac12 I\\omega^2 = \\frac12 M v^2$ equals the translational share for a disk." },
        ],
        result: "$a = 6.5\\ \\text{m/s}^2$, $T = 0.65$ N, $v = 3.6$ m/s and $\\omega = 180$ rad/s after 1.0 m of fall.",
      },
      {
        title: "The Yo-Yo: angular-momentum numbers",
        problem: "A solid disk ($M \\approx 4\\ \\text{kg}$, $R = 0.30\\ \\text{m}$, $I = \\tfrac12MR^2$) spins at $14\\ \\text{rad/s}$. Compute $L = I\\omega$.",
        steps: [
          { label: "Inertia", text: "$I = 0.5\\times 4\\times 0.09 = 0.18\\ \\text{kg}\\cdot\\text{m}^2$." },
          { label: "Momentum", text: "$L = I\\omega = 0.18\\times 14 = 2.52\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$." },
          { label: "Conservation", text: "With $\\tau_{\\text{net}} = 0$ this $L$ is frozen — halving $I$ doubles $\\omega$." },
        ],
        result: "$L \\approx 2.52\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$.",
      },
    ],
    keyTakeaways: [
      "A yo-yo rolls down its string: $a_{com} = g/(1 + I/MR^2)$ and $T = Mg - Ma_{com}$ — for a solid disk, $a = \\frac23 g$ and $T = \\frac13 Mg$.",
      "The string tension simultaneously brakes the fall and torques the spin; it does no work, so energy splits cleanly between $\\frac12 Mv^2$ and $\\frac12 I\\omega^2$.",
      "The yo-yo's mass is irrelevant; the inertia ratio $I/MR^2$ (its shape) fixes everything.",
    ],
    quiz: [
      {
        q: "A yo-yo modeled as a uniform disk falls, unwinding its string. Its downward acceleration is:",
        options: [`$g$`, `$\\frac12 g$`, `$\\frac23 g$`, `$\\frac13 g$`],
        answer: 2,
        explanation: "$a = g/(1 + \\frac12) = \\frac23 g \\approx 6.5\\ \\text{m/s}^2$. The spinning takes a share of gravity's driving, braking the fall below free fall.",
      },
      {
        q: "While the solid-disk yo-yo of the example descends, the string tension is:",
        options: [
          'equal to the weight Mg',
          'zero, since the yo-yo is falling',
          'one-third of the weight',
          'two-thirds of the weight',
        ],
        answer: 2,
        explanation: "$T = M(g - a) = M(g - \\frac23 g) = \\frac13 Mg$. A hand holding the string feels only a third of the yo-yo's weight during the descent — and more than its weight at the sharp yank at the bottom.",
      },
      {
        q: "Two yo-yos have identical mass and radius, but one has most of its mass at the rim. Descending, the rim-weighted yo-yo has:",
        options: [
          'larger acceleration than the disk-like one',
          'the same acceleration; only the tension differs',
          'smaller acceleration and larger tension',
          'smaller acceleration and smaller tension',
        ],
        answer: 2,
        explanation: "A rim-weighted body has larger $I/MR^2$, so both $a = g/(1+k)$ drops and $T = Mg\\,k/(1+k)$ rises: more of the string's force goes into fighting the fall, because it is busy spinning up a flywheel.",
      },
    ],
  },

  // ------------------------------------------------------ 11.4
  {
    sectionId: 'hall-ch11-s4',
    readingTime: 6,
    intro: "Until now torque lived in a plane, with a sign telling clockwise from counterclockwise. The full three-dimensional theory makes torque a vector — the cross product of the position vector with the force — whose direction is along the rotation axis by the right-hand rule. This vector is what makes gyroscopes, angular momentum and the whole second half of the chapter possible.",
    objectives: [
      "Compute the torque vector $\\vec\\tau = \\vec r \\times \\vec F$, its magnitude and its direction",
      "Use the right-hand rule and component (determinant) cross products",
      "Explain the role of the choice of origin, and sum torques as vectors",
    ],
    concepts: [
      {
        term: 'Torque as a vector',
        kind: 'definition',
        statement: "The torque about origin $O$ of a force $\\vec F$ applied at point $P$ is $$\\vec\\tau = \\vec r \\times \\vec F,$$ with $\\vec r$ from $O$ to $P$. Magnitude $\\tau = rF\\sin\\phi$ (Section 10.6's scalar), direction perpendicular to the plane of $\\vec r$ and $\\vec F$, set by the right-hand rule.",
        detail: "Right-hand rule: point the fingers of your right hand along $\\vec r$, curl them toward $\\vec F$; your thumb gives $\\vec\\tau$. The same rule fixes the positive sense of rotations: curl the fingers the way the body turns, and the thumb is the rotation axis' positive direction.",
      },
      {
        term: 'Torque by components',
        kind: 'method',
        statement: "With $\\vec r = (r_x, r_y, r_z)$ and $\\vec F = (F_x, F_y, F_z)$: $$\\vec\\tau = (r_y F_z - r_z F_y,\\; r_z F_x - r_x F_z,\\; r_x F_y - r_y F_x),$$ the determinant expansion $$\\vec\\tau = \\begin{vmatrix} \\hat x & \\hat y & \\hat z \\\\ r_x & r_y & r_z \\\\ F_x & F_y & F_z \\end{vmatrix}.$$",
        detail: "The component recipe is the safe route whenever the geometry is not obviously planar. A torque perpendicular to the page's plane appears as a pure $\\hat z$-component; torques about different points add as vectors only after each is computed about the same origin.",
      },
      {
        term: 'Torque depends on the origin',
        kind: 'insight',
        statement: "$\\vec\\tau = \\vec r \\times \\vec F$ changes when you move the origin, because $\\vec r$ changes. The net torque on a system about different origins differs by $\\vec R \\times \\vec F_{net}$ — so if the net force vanishes, the net torque is origin-independent, a fact Chapter 12 exploits in equilibrium.",
        detail: "For a single force, shifting the origin along the force's own line of action leaves $\\vec\\tau$ unchanged (the lever arm does not move). Zero-force systems — couples — carry the same torque about every origin, which is why a pure twist is a genuinely origin-free object.",
      },
      {
        term: "Torque Revisited: solution protocol",
        kind: "method",
        statement: "**Solve Torque Revisited problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rolling and angular momentum; the working equation is $v_{\\text{com}} = \\omega R$ (no slip), $\\vec L = \\vec r\\times\\vec p$, $L = I\\omega$, $\\vec\\tau_{\\text{net}} = d\\vec L/dt$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m}^2/\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit); no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.",
      },
      {
        term: "Torque Revisited: scales and validity",
        kind: "insight",
        statement: "**Torque Revisited lives at $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit) and the textbook model holds while no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Torque Revisited calculation gives seconds when $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ demands meters, or a value orders of magnitude beyond $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "A torque out of the page",
        problem: "A force $\\vec F = 40\\hat y$ N acts at $\\vec r = 0.30\\hat x$ m from the origin. Find $\\vec\\tau$. Then find the torque if the same force is redirected to $\\vec F = 40(\\cos 60^\\circ\\,\\hat x + \\sin 60^\\circ\\,\\hat y)$ N.",
        steps: [
          { label: 'Cross product', text: "$\\vec\\tau = (0.30\\hat x) \\times (40\\hat y) = (0.30)(40)(\\hat x \\times \\hat y) = 12\\hat z$ N·m — 12 N·m pointing out of the page (counterclockwise turn)." },
          { label: 'Tilted force', text: "Only the $\\hat y$-component (perpendicular to $\\vec r$) torques: $\\tau = r F \\sin 60^\\circ = (0.30)(40)(0.866) = 10.4$ N·m, still $+\\hat z$." },
          { label: 'The x-component', text: "The $\\hat x$-part of $\\vec F$ is parallel to $\\vec r$ and contributes nothing — the vector statement of 'you cannot push a door into its hinges'." },
        ],
        result: "$\\vec\\tau = 12\\hat z$ N·m; tilted to 60°, $10.4\\hat z$ N·m. Direction out of the page both times.",
      },
      {
        title: "Torque in three dimensions",
        problem: "A force $\\vec F = (6.0, 0, 0)$ N acts at the point $\\vec r = (0, 0.50, 0)$ m. Find the torque vector.",
        steps: [
          { label: 'Apply the formula', text: "$\\vec\\tau = (r_y F_z - r_z F_y,\\; r_z F_x - r_x F_z,\\; r_x F_y - r_y F_x)$." },
          { label: 'Substitute', text: "$= ((0.50)(0) - 0,\\; 0 - 0,\\; 0 - (0.50)(6.0)) = (0, 0, -3.0)$ N·m." },
          { label: 'Interpret', text: "A $-3.0\\hat z$ torque: it would drive a clockwise rotation in the $xy$-plane — check with the right-hand rule: fingers along $+\\hat y$, curling toward $+\\hat x$, thumb points $-\\hat z$." },
        ],
        result: "$\\vec\\tau = -3.0\\hat z$ N·m. Component arithmetic and the right hand agree.",
      },
    ],
    keyTakeaways: [
      "$\\vec\\tau = \\vec r \\times \\vec F$: magnitude $rF\\sin\\phi$, direction along the rotation axis by the right-hand rule.",
      "The component formula (or determinant) handles all geometry; forces along $\\vec r$ itself contribute zero torque.",
      "Torque vectors depend on the origin; for zero net force the net torque is the same about every origin — the lever arm becomes a free choice.",
    ],
    quiz: [
      {
        q: "A force points in the +x direction and is applied at a point on the +y axis. The torque about the origin points:",
        options: ['+x', '+y', '+z', '−z'],
        answer: 3,
        explanation: "$\\vec\\tau = (r\\hat y) \\times (F\\hat x) = rF(\\hat y \\times \\hat x) = -rF\\hat z$. Fingers along $+y$, curl toward $+x$: thumb points into the page, $-\\hat z$.",
      },
      {
        q: "When is the torque $\\vec r \\times \\vec F$ zero?",
        options: [
          'whenever the force is small',
          'when $\\vec r$ and $\\vec F$ are parallel or antiparallel',
          'when $\\vec r$ and $\\vec F$ are perpendicular',
          'only when the force acts at the origin',
        ],
        answer: 1,
        explanation: "$\\tau = rF\\sin\\phi$ vanishes for $\\phi = 0$ or $180^\\circ$ — a force aimed through the origin has no lever arm about it. Perpendicular forces give the maximum torque $rF$.",
      },
      {
        q: "You compute the torque of a single force about origin A, then about origin B displaced by a vector $\\vec d$ from A. The two torques differ by:",
        options: [
          `$\\vec d \\times \\vec F$`,
          `$\\vec F \\times \\vec d$`,
          'nothing; torque is origin-independent',
          `$\\vec d \\cdot \\vec F$`,
        ],
        answer: 0,
        explanation: "With $\\vec r_B = \\vec r_A - \\vec d$, $\\vec\\tau_B = (\\vec r_A - \\vec d)\\times\\vec F = \\vec\\tau_A - \\vec d \\times \\vec F$: shifting the origin subtracts the cross product of the shift with the force.",
      },
    ],
  },

  // ------------------------------------------------------ 11.5
  {
    sectionId: 'hall-ch11-s5',
    readingTime: 6,
    intro: "Angular momentum is the rotational twin of linear momentum: for a single particle it is the cross product of position with momentum. It measures the 'quantity of rotational motion' about a chosen point, and — like torque — it depends on where you put the origin. For a particle in a circular orbit it collapses to the friendly product mvr.",
    objectives: [
      "Define the angular momentum of a particle, $\\vec l = \\vec r \\times \\vec p$, and compute magnitude and direction",
      "Specialize to circular motion: $l = mr^2\\omega$",
      "Explain the origin dependence of angular momentum and its vector direction",
    ],
    concepts: [
      {
        term: 'Angular momentum of a particle',
        kind: 'definition',
        statement: "A particle of momentum $\\vec p = m\\vec v$ at position $\\vec r$ (from origin $O$) has angular momentum about $O$: $$\\vec l = \\vec r \\times \\vec p,$$ magnitude $\\ell = rmv\\sin\\phi = m v r_\\perp$, direction by the right-hand rule. Units: kg·m²/s.",
        detail: "A particle moving in a straight line generally has nonzero angular momentum about off-line origins — it 'would sweep by' that point. Only motion aimed exactly through the origin gives $\\ell = 0$. Like torque, $\\vec l$ depends on the choice of origin and must be recomputed if you move it.",
      },
      {
        term: 'Circular motion: l = mr²ω',
        kind: 'theorem',
        statement: "For a particle in a circle of radius $r$ about the origin, $\\vec r \\perp \\vec p$ at every instant, so $$\\ell = rmv = mr^2\\omega,$$ directed along the rotation axis with the sense of the circulation.",
        detail: "The formula splits physics from geometry: doubling the orbital radius at fixed $\\omega$ quadruples $\\ell$. When a circling particle is pulled inward with no torque about the center, $mr^2\\omega$ must hold — radius down, angular speed up — which is exactly the ice-skater effect one particle at a time.",
      },
      {
        term: 'Angular momentum is a bookkeeping about a point',
        kind: 'insight',
        statement: "Angular momentum is not a new substance: it is linear momentum's moment, weighted by lever arm. A system's total is the vector sum $\\vec L = \\sum \\vec l_i$; different particles may contribute angular momenta that reinforce or cancel.",
        detail: "Two identical particles on opposite sides of a circling pair contribute equal, parallel $\\vec l$'s — they add. In Chapter 10's language, summing $m r_i^2 \\omega$ over a rigid body is precisely how $L = I\\omega$ will be built in Section 11.7.",
      },
      {
        term: "Angular Momentum: solution protocol",
        kind: "method",
        statement: "**Solve Angular Momentum problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rolling and angular momentum; the working equation is $v_{\\text{com}} = \\omega R$ (no slip), $\\vec L = \\vec r\\times\\vec p$, $L = I\\omega$, $\\vec\\tau_{\\text{net}} = d\\vec L/dt$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m}^2/\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit); no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.",
      },
      {
        term: "Angular Momentum: scales and validity",
        kind: "insight",
        statement: "**Angular Momentum lives at $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit) and the textbook model holds while no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Angular Momentum calculation gives seconds when $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ demands meters, or a value orders of magnitude beyond $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "The angular momentum of Earth's orbit",
        problem: "Treat Earth's orbit as a circle of radius $1.50\\times10^{11}$ m. With $M = 5.98\\times10^{24}$ kg and period $T = 3.16\\times10^{7}$ s, find the orbital angular momentum.",
        steps: [
          { label: 'Speed', text: "$v = 2\\pi r/T = (6.28)(1.50\\times10^{11})/3.16\\times10^{7} = 2.98\\times10^{4}$ m/s (29.8 km/s, as expected)." },
          { label: 'Angular momentum', text: "$\\ell = Mvr = (5.98\\times10^{24})(2.98\\times10^{4})(1.50\\times10^{11}) = 2.7\\times10^{40}\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$." },
          { label: 'Direction', text: "The orbit circulates counterclockwise seen from north ecliptic pole, so $\\vec l$ points toward that pole (along $+\\hat z$ in ecliptic coordinates) — the axis every planet's orbit shares to within a few degrees." },
        ],
        result: "$\\ell = 2.7\\times10^{40}$ kg·m²/s, along the north ecliptic pole — 10⁷ times Earth's spin angular momentum, computed in Section 11.7.",
      },
      {
        title: "A puck on a string, pulled in",
        problem: "A 0.50 kg puck circles at 3.0 m/s on a frictionless table at the end of a 1.2 m string through a hole at the origin. You pull the string to shorten the radius to 0.60 m. Find $\\ell$ before and after, and the new speed.",
        steps: [
          { label: 'Before', text: "$\\ell = mvr = (0.50)(3.0)(1.2) = 1.8\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$." },
          { label: 'The physics of pulling', text: "The string's tension points along $\\vec r$ — toward the origin — so its torque about the origin is zero and $\\ell$ cannot change." },
          { label: 'After', text: "$1.8 = (0.50)v(0.60)$ gives $v = 6.0$ m/s: halving the radius doubled the speed." },
          { label: 'Energy ledger', text: "Kinetic energy rose from 2.25 J to 4.5 J — the extra 2.25 J is the work your hand did pulling against the puck's tendency to fly outward. Angular momentum is free; energy is not." },
        ],
        result: "$\\ell = 1.8\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ throughout; speed doubles to 6.0 m/s as the radius halves, paid for by the puller's work.",
      },
    ],
    keyTakeaways: [
      "$\\vec l = \\vec r \\times \\vec p$ with $\\ell = mv r_\\perp$; circular motion gives the clean $\\ell = mr^2\\omega$ along the axis.",
      "Angular momentum depends on the chosen origin, like torque; motion aimed at the origin carries none about it.",
      "A central force (aimed at the origin) exerts zero torque, so it cannot change $\\ell$ — the seed of both Kepler's second law and the skater's spin-up.",
    ],
    quiz: [
      {
        q: "A 2.0 kg particle moves at 4.0 m/s along a line that passes 0.50 m from the origin. Its angular momentum about the origin has magnitude:",
        options: ['zero', '2.0 kg·m²/s', '4.0 kg·m²/s', '8.0 kg·m²/s'],
        answer: 2,
        explanation: "$\\ell = m v r_\\perp = (2.0)(4.0)(0.50) = 4.0\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ — the perpendicular offset (the 'impact parameter') is the lever arm that matters, not the instantaneous distance.",
      },
      {
        q: "A particle moves in a straight line directly toward the origin. Its angular momentum about that origin is:",
        options: [
          'large and increasing',
          'constant and nonzero',
          'zero at every instant',
          'zero only at the instant of closest approach',
        ],
        answer: 2,
        explanation: "$\\vec r$ is antiparallel to $\\vec v$ the whole way, so $\\vec r \\times \\vec p = 0$ throughout. Motion on a 'collision course' with the origin carries no angular momentum about it.",
      },
      {
        q: "A puck on frictionless ice is pulled toward the center of its circle by a string. About the center, its angular momentum:",
        options: [
          'decreases as the radius shrinks',
          'stays constant, so the speed grows as 1/r',
          'stays constant, so the speed stays constant',
          'increases because the speed increases',
        ],
        answer: 1,
        explanation: "The tension is a central force: zero torque about the center, so $\\ell = mvr$ is fixed and $v \\propto 1/r$. The kinetic energy grows only because the puller does work.",
      },
    ],
  },

  // ------------------------------------------------------ 11.6
  {
    sectionId: 'hall-ch11-s6',
    readingTime: 6,
    intro: "Newton's second law has an angular form: net torque equals the rate of change of angular momentum. The proof is a one-line differentiation that shows why force-free moments of momentum simply persist — and buried in it is Kepler\'s second law of planetary motion, which stops being a mystery and becomes a cross product.",
    objectives: [
      "Derive $\\vec\\tau_{net} = d\\vec l/dt$ for a particle from $\\vec F = d\\vec p/dt$",
      "Write the system form $\\vec\\tau_{net,ext} = d\\vec L/dt$ and explain why internal torques cancel",
      "Apply the central-force result: zero torque means constant angular momentum — Kepler's second law",
    ],
    concepts: [
      {
        term: "Newton's second law in angular form",
        kind: 'theorem',
        statement: "For a single particle, $$\\vec\\tau_{net} = \\frac{d\\vec l}{dt}.$$ Proof: $\\frac{d}{dt}(\\vec r \\times \\vec p) = \\vec v \\times m\\vec v + \\vec r \\times \\frac{d\\vec p}{dt} = 0 + \\vec r \\times \\vec F_{net}$, since $\\vec v \\times \\vec v = 0$ identically.",
        detail: "Every statement of Chapter 2's law has an angular shadow: torque is what changes angular momentum, and the cross product's antisymmetry does the bookkeeping. Zero net torque about a point does not mean zero force — it means the existing angular momentum about that point is frozen.",
      },
      {
        term: 'The system form',
        kind: 'theorem',
        statement: "For a system of particles, $$\\vec\\tau_{net,ext} = \\frac{d\\vec L}{dt}, \\qquad \\vec L = \\sum \\vec l_i.$$ Internal torques cancel in pairs — by Newton's third law, the forces between two particles give $\\vec r_{12} \\times \\vec F_{12}$ plus $\\vec r_{21} \\times \\vec F_{21} = (\\vec r_{12}) \\times (\\vec F_{12} + \\vec F_{21}) = 0$ for forces along the line joining them.",
        detail: "The cancellation requires only that internal forces act **along the line joining the particles** — true for gravity, springs, electrostatics. This is the angular rerun of Section 9.2's argument that internal forces cannot move the center of mass.",
      },
      {
        term: "Kepler's second law",
        kind: 'insight',
        statement: "A central force (gravity, aimed at the Sun) exerts zero torque about the force center, so each planet's $\\vec l$ about the Sun is constant — therefore $\\tfrac12 |\\vec r \\times \\vec v|$ is constant: the **areal velocity** $dA/dt = \\ell/2m$ is fixed, and the radius vector sweeps equal areas in equal times.",
        detail: "Kepler found the law in Tycho Brahe's data (1609); Newton\'s cross product explains it in one line. A planet moves fastest at perihelion not by whimsy but because it must sweep the same area rate at small radius as at large — angular momentum is the invisible contract.",
      },
      {
        term: "Newton's Second Law in Angular Form: solution protocol",
        kind: "method",
        statement: "**Solve Newton's Second Law in Angular Form problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rolling and angular momentum; the working equation is $v_{\\text{com}} = \\omega R$ (no slip), $\\vec L = \\vec r\\times\\vec p$, $L = I\\omega$, $\\vec\\tau_{\\text{net}} = d\\vec L/dt$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m}^2/\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit); no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.",
      },
      {
        term: "Newton's Second Law in Angular Form: scales and validity",
        kind: "insight",
        statement: "**Newton's Second Law in Angular Form lives at $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit) and the textbook model holds while no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Newton's Second Law in Angular Form calculation gives seconds when $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ demands meters, or a value orders of magnitude beyond $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Torque changes angular momentum, quantitatively",
        problem: "A particle at rest is acted on for 3.0 s by a constant net torque of 2.0 N·m about the origin. Find the angular momentum after 3.0 s.",
        steps: [
          { label: 'Integrate the law', text: "$\\vec\\tau = d\\vec l/dt$ with constant $\\vec\\tau$ integrates to $\\Delta \\vec l = \\vec\\tau t$ — the angular impulse-momentum theorem." },
          { label: 'Compute', text: "$\\Delta \\vec l = (2.0)(3.0) = 6.0\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ along the torque's direction, starting from zero." },
          { label: 'Note the structure', text: "Exactly as impulse $\\vec J = \\vec F\\Delta t$ changes linear momentum, an angular impulse $\\vec\\tau\\Delta t$ changes angular momentum — same theorem, rotated." },
        ],
        result: "$\\ell = 6.0\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ after 3.0 s of 2.0 N·m.",
      },
      {
        title: "Earth's areal velocity",
        problem: "Using Earth's orbital angular momentum ($\\ell = 2.7\\times10^{40}$ kg·m²/s), verify Kepler\'s second law numerically: compute the areal velocity and check it against the total orbital area over one year.",
        steps: [
          { label: 'Areal velocity', text: "$dA/dt = \\ell/2M = 2.7\\times10^{40}/(2 \\times 5.98\\times10^{24}) = 2.3\\times10^{15}\\ \\text{m}^2/\\text{s}$." },
          { label: 'Area per year', text: "$(2.3\\times10^{15})(3.16\\times10^{7}) = 7.1\\times10^{22}\\ \\text{m}^2$ swept per orbit." },
          { label: 'Independent check', text: "The ellipse's area $\\pi a b$ with $a = 1.496\\times10^{11}$ m and $b = a\\sqrt{1-e^2} \\approx 1.4959\\times10^{11}$ m (e = 0.0167): $\\pi (1.496)(1.4959)\\times10^{22} \\approx 7.0\\times10^{22}$ m². Agreement to the precision carried." },
        ],
        result: "Areal velocity $2.3\\times10^{15}$ m²/s, constant by the central-force theorem — Kepler's law, audited and passed.",
      },
    ],
    keyTakeaways: [
      "$\\vec\\tau_{net} = d\\vec l/dt$ for a particle; $\\vec\\tau_{net,ext} = d\\vec L/dt$ for a system, with internal torques cancelling pairwise.",
      "Zero net torque about a point freezes the angular momentum about that point — no force is required for this, only no torque.",
      "Central forces give zero torque, so planetary $\\vec l$ is constant and equal areas are swept in equal times: Kepler's second law is a cross product identity.",
    ],
    quiz: [
      {
        q: "The net torque on a particle about a point is zero. We may conclude:",
        options: [
          'no force acts on the particle',
          'its angular momentum about that point is constant',
          'its linear momentum is constant',
          'it moves in a straight line',
        ],
        answer: 1,
        explanation: "$\\vec\\tau = d\\vec l/dt = 0$ freezes $\\vec l$ about that point. Forces may still act — gravity does, on every orbiting planet — as long as none delivers torque about the chosen point.",
      },
      {
        q: "Kepler's second law (equal areas in equal times) follows from:",
        options: [
          'conservation of energy',
          'the central nature of gravity: zero torque about the Sun means constant angular momentum',
          "the inverse-square form of the force law specifically",
          'the small eccentricity of planetary orbits',
        ],
        answer: 1,
        explanation: "Any central force — inverse-square or not — gives constant $\\ell$ about the center, hence constant areal velocity $dA/dt = \\ell/2m$. The area law predates Newton's specific force and is more general than it.",
      },
      {
        q: "A 3.0 N·m constant torque acts on a particle for 4.0 s. The change in the particle's angular momentum is:",
        options: ['0.75 kg·m²/s', '7.5 kg·m²/s', '12 kg·m²/s', '36 kg·m²/s'],
        answer: 2,
        explanation: "$\\Delta \\ell = \\tau t = (3.0)(4.0) = 12\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ — the angular twin of impulse $F\\Delta t$.",
      },
    ],
  },

  // ------------------------------------------------------ 11.7
  {
    sectionId: 'hall-ch11-s7',
    readingTime: 6,
    intro: "For a rigid body spinning about a fixed axis, all the individual angular momenta of its particles point along the axis and add to one product: L = Iω. This is the rotational twin of P = Mv, and with it the torque law becomes τ = dL/dt = Iα — Chapter 10's law reborn as a statement about momentum. It also quantifies the vast spin stored in planets and flywheels.",
    objectives: [
      "Derive $L = I\\omega$ for a rigid body about a fixed axis by summing particle angular momenta",
      "Use $\\tau_{net} = dL/dt = I\\alpha$ and compute angular momenta of real spinning bodies",
      "Distinguish spin angular momentum from orbital angular momentum",
    ],
    concepts: [
      {
        term: 'Angular momentum of a rigid body',
        kind: 'theorem',
        statement: "A rigid body rotating about a fixed axis at angular velocity $\\omega$ has angular momentum along that axis: $$L = I\\omega$$ where $I$ is the rotational inertia about the same axis. Derivation: each particle contributes $\\ell_{i,z} = m_i r_i^2 \\omega$, and $\\sum m_i r_i^2 = I$.",
        detail: "The direction comes from the right-hand rule along the rotation axis. With $L = I\\omega$, the whole angular-momentum machinery of the chapter applies to flywheels, planets and figure skaters alike — and the vector form survives even when the axis moves, as the gyroscope will show.",
      },
      {
        term: 'Torque law for a rigid body',
        kind: 'theorem',
        statement: "For rotation about a fixed axis with constant $I$: $$\\tau_{net} = \\frac{dL}{dt} = I\\alpha.$$ It is the same law as Chapter 10's $\\tau_{net} = I\\alpha$, now recognized as the angular-momentum form $\\vec\\tau = d\\vec L/dt$ — and when $I$ changes with time (a skater pulling in her arms), only $L = I\\omega$ with $\\tau = dL/dt$ is the safe statement.",
        detail: "The rigid-body law inherits the system theorem's conditions: external torques only, about a fixed axis in an inertial frame. Its great power is conservation: if the net external torque vanishes, $L$ stays fixed even while $\\omega$ runs wild — the next section's engine.",
      },
      {
        term: 'Spin versus orbital angular momentum',
        kind: 'insight',
        statement: "The angular momentum of a body's own rotation about its com is its **spin**; the angular momentum of the com orbiting some external point is its **orbital** part. Earth carries both: spin ($5.8\\times10^{33}$ kg·m²/s) and solar orbit ($2.7\\times10^{40}$ kg·m²/s), seven million times larger.",
        detail: "The split is exactly the rolling decomposition of Section 11.1 applied to momentum: a rolling wheel's angular momentum about a point on the floor is the sum of its spin $I_{com}\\omega$ and the orbital $M v_{com} R$. Physicists meet the same split in quantum mechanics, where spin and orbital angular momentum belong to different operators — but the classical bookkeeping came first.",
      },
      {
        term: "Angular Momentum of a Rigid Body: solution protocol",
        kind: "method",
        statement: "**Solve Angular Momentum of a Rigid Body problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rolling and angular momentum; the working equation is $v_{\\text{com}} = \\omega R$ (no slip), $\\vec L = \\vec r\\times\\vec p$, $L = I\\omega$, $\\vec\\tau_{\\text{net}} = d\\vec L/dt$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m}^2/\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit); no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.",
      },
      {
        term: "Angular Momentum of a Rigid Body: scales and validity",
        kind: "insight",
        statement: "**Angular Momentum of a Rigid Body lives at $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit) and the textbook model holds while no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Angular Momentum of a Rigid Body calculation gives seconds when $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ demands meters, or a value orders of magnitude beyond $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Earth's spin angular momentum",
        problem: "Model Earth as a uniform sphere of mass $5.98\\times10^{24}$ kg and radius $6.37\\times10^{6}$ m, rotating once per day. Find its spin angular momentum.",
        steps: [
          { label: 'Inertia', text: "$I = \\frac25 MR^2 = (0.4)(5.98\\times10^{24})(6.37\\times10^{6})^2 = 9.7\\times10^{37}\\ \\text{kg}\\cdot\\text{m}^2$ (a uniform sphere; Earth's real, centrally-condensed value is smaller, $\\approx 0.33MR^2 = 8.0\\times10^{37}$)." },
          { label: 'Angular velocity', text: "One rotation per sidereal day: $\\omega = 2\\pi/86{,}164 = 7.29\\times10^{-5}$ rad/s." },
          { label: 'Spin', text: "With the realistic $I = 8.0\\times10^{37}$: $L = I\\omega = 5.8\\times10^{33}\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$, pointing along Earth's rotation axis (out the North pole)." },
          { label: 'Scale', text: "Compare the orbital $2.7\\times10^{40}$: the orbital part is $4.7\\times10^{6}$ times larger — Earth's motion is overwhelmingly its journey around the Sun." },
        ],
        result: "$L_{spin} \\approx 5.8\\times10^{33}$ kg·m²/s along the North polar axis — the vast reservoir that gyrocompasses and Foucault pendulums tap.",
      },
      {
        title: "Braking a flywheel",
        problem: "The flywheel of Section 10.4 ($I = 1.08\\ \\text{kg}\\cdot\\text{m}^2$) spins at 94.2 rad/s. A constant friction torque brings it to rest in 30 s. Find the torque.",
        steps: [
          { label: 'Initial angular momentum', text: "$L_i = I\\omega = (1.08)(94.2) = 102\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$." },
          { label: 'Torque from the law', text: "$\\tau = dL/dt = \\Delta L/\\Delta t = (0 - 102)/30 = -3.4$ N·m — negative: it opposes the spin." },
          { label: 'Consistency with Chapter 10', text: "$\\alpha = \\tau/I = -3.4/1.08 = -3.1\\ \\text{rad/s}^2$, and $\\omega_f = \\omega_i + \\alpha t = 94.2 - 94 = 0$. The two chapters agree." },
        ],
        result: "A friction torque of $-3.4$ N·m drains 102 kg·m²/s of angular momentum in half a minute.",
      },
    ],
    keyTakeaways: [
      "A rigid body spinning about a fixed axis carries $L = I\\omega$ along the axis — the rotational twin of $P = Mv$.",
      "$\\tau_{net} = dL/dt = I\\alpha$ for fixed $I$; the angular-momentum form is the safe one when $I$ changes.",
      "Spin (about the com) and orbital (com about a point) angular momentum add; Earth's orbital part dwarfs its spin by a factor of millions.",
    ],
    quiz: [
      {
        q: "A solid sphere and a hollow sphere of equal mass and radius spin at the same angular speed. Their angular momenta compare as:",
        options: [
          'equal',
          'solid : hollow = 2 : 3',
          'solid : hollow = 3 : 2',
          'solid : hollow = 1 : 2',
        ],
        answer: 2,
        explanation: "$L = I\\omega$ with $I_{solid} = \\frac25 MR^2$ and $I_{hollow} = \\frac23 MR^2$: the ratio is $2/5 : 2/3 = 3 : 2$. The hollow sphere's far-flung mass carries more angular momentum per unit spin.",
      },
      {
        q: "A flywheel with I = 2.5 kg·m² spins at 40 rad/s. Its angular momentum is:",
        options: ['10 kg·m²/s', '100 kg·m²/s', '2000 kg·m²/s', '16 kg·m²/s'],
        answer: 1,
        explanation: "$L = I\\omega = (2.5)(40) = 100\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$. A 5.0 N·m friction torque would take 20 s to remove it.",
      },
      {
        q: "For a body with fixed rotational inertia, $\\tau_{net} = dL/dt$ reduces to:",
        options: [`$\\tau_{net} = I\\alpha$`, `$\\tau_{net} = I\\omega$`, `$\\tau_{net} = \\frac12 I\\omega^2$`, `$\\tau_{net} = I a_{com}$`],
        answer: 0,
        explanation: "With $I$ constant, $dL/dt = d(I\\omega)/dt = I\\alpha$ — Chapter 10's rotational Newton\'s second law is this chapter's momentum law in disguise.",
      },
    ],
  },

  // ------------------------------------------------------ 11.8
  {
    sectionId: 'hall-ch11-s8',
    readingTime: 9,
    intro: "When no external torque acts, angular momentum is locked — even if the body changes shape. Pull mass inward and the spin must rise to keep Iω constant; a diver tucks and whirls; a collapsing star spins up from once a month to hundreds of times a second. Conservation of angular momentum is the third great conservation law of mechanics, and the only one that lets kinetic energy grow while nothing external acts.",
    objectives: [
      "State the conservation law for angular momentum and its per-axis validity",
      "Apply $I_i\\omega_i = I_f\\omega_f$ to skaters, divers and collapsing stars, including the energy bookkeeping",
      "Explain why the kinetic energy can increase under angular-momentum conservation, and identify the energy source",
    ],
    concepts: [
      {
        term: 'Conservation of angular momentum',
        kind: 'law',
        statement: "If the net external torque on a system about a point (or a fixed axis) is zero, then $$\\vec L = \\text{constant}: \\qquad I_i \\omega_i = I_f \\omega_f$$ even as $I$ changes by internal rearrangement. Component form: if $\\tau_{ext,z} = 0$, then $L_z$ alone is conserved.",
        detail: "The hypothesis is zero torque, not zero force — gravity can rain down on a system all day and still deliver no torque about the right point. And because the conserved object is $I\\omega$ rather than $\\omega$ itself, the angular speed is free to change dramatically: mass toward the axis, spin up; mass away, spin down.",
      },
      {
        term: 'The skater and the energy surprise',
        kind: 'insight',
        statement: "A skater pulling her arms in decreases $I$, so $\\omega$ rises as $I$ falls — and her kinetic energy $K = \\frac12 I\\omega^2 = \\frac{L^2}{2I}$ **increases**. Angular-momentum conservation does not conserve energy; the muscles do work $W = \\frac{L^2}{2}\\left(\\frac{1}{I_f} - \\frac{1}{I_i}\\right)$ to pull the mass inward.",
        detail: "This is the one conservation law whose exercise can create kinetic energy from internal sources — pushing mass toward the rotation axis costs work against the 'centrifugal' tendency to fly outward. Reverse it: letting the arms out does work on the skater and the spin dies.",
      },
      {
        term: 'Spin stabilization',
        kind: 'insight',
        statement: "A spinning body with large $L$ resists changes to its axis direction — to re-aim $\\vec L$ requires a torque sustained for time. This is why rifling stabilizes bullets, why gyroscopes hold attitude in spacecraft navigation, and why a passed football spirals instead of tumbling.",
        detail: "The quantitative statement is the vector law $\\vec\\tau = d\\vec L/dt$: with $\\vec L$ huge, a given torque changes the axis only slowly (the precession of Section 11.9). Falling cats exploit the same law in reverse — twisting internal parts one way to rotate the rest the other, with total $L \\approx 0$ throughout.",
      },
      {
        term: "Conservation of Angular Momentum: solution protocol",
        kind: "method",
        statement: "**Solve Conservation of Angular Momentum problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rolling and angular momentum; the working equation is $v_{\\text{com}} = \\omega R$ (no slip), $\\vec L = \\vec r\\times\\vec p$, $L = I\\omega$, $\\vec\\tau_{\\text{net}} = d\\vec L/dt$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m}^2/\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit); no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.",
      },
      {
        term: "Conservation of Angular Momentum: scales and validity",
        kind: "insight",
        statement: "**Conservation of Angular Momentum lives at $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit) and the textbook model holds while no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Conservation of Angular Momentum calculation gives seconds when $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ demands meters, or a value orders of magnitude beyond $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit), recheck the setup before trusting the arithmetic.",
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Angular momentum conservation taken seriously: from Kepler to millisecond pulsars',
        blocks: [
          {
            kind: 'theorem',
            heading: 'The exact statement and its proof',
            body: "For a system of particles, $\\vec L = \\sum \\vec r_i \\times \\vec p_i$ and $\\frac{d\\vec L}{dt} = \\sum \\vec r_i \\times \\vec F_i^{ext} + \\sum_{i \\ne j} \\vec r_i \\times \\vec F_{ij}^{int}$. The internal double sum groups into pairs $(i,j)$: $\\vec r_i \\times \\vec F_{ij} + \\vec r_j \\times \\vec F_{ji} = (\\vec r_i - \\vec r_j) \\times \\vec F_{ij}$, which vanishes whenever $\\vec F_{ij}$ acts along the line joining the two particles — the **strong** form of Newton's third law. For such central internal forces (gravity, electrostatics, ideal springs) the internal torques cancel exactly, leaving $\\vec\\tau_{net,ext} = d\\vec L/dt$: zero external torque implies $\\vec L$ constant, and the result holds even while the system reshapes itself, collapses, or explodes.",
          },
          {
            kind: 'remark',
            heading: 'A caveat worth a whole physics career',
            body: "Not all forces in nature obey the strong third law: the magnetic force between moving charges acts perpendicular to the separation, and its internal torques fail to cancel pairwise. Noether's theorem repairs the ledger: angular momentum conservation follows from the isotropy of space (rotational symmetry of the laws), and the 'missing' mechanical angular momentum resides in the fields themselves — the field angular momentum $\\epsilon_0 \\int \\vec r \\times (\\vec E \\times \\vec B)\\,dV$. The famous Shockley-James example of a charge-magnet system shows mechanical + field angular momentum conserved while mechanics alone appears to fail.",
          },
          {
            kind: 'derivation',
            heading: 'The skater\'s energy ledger, exactly',
            body: "With $L$ fixed, write $K = \\frac{L^2}{2I}$; the work done changing $I$ from $I_i$ to $I_f$ is $W = K_f - K_i = \\frac{L^2}{2}\\left(\\frac{1}{I_f} - \\frac{1}{I_i}\\right)$. For the section's skater ($I_i = 4.6$, $I_f = 1.8\\ \\text{kg}\\cdot\\text{m}^2$, $L = 4.6 \\times 7.54 = 34.7\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$): $W = \\frac{(34.7)^2}{2}(1/1.8 - 1/4.6) = 601.8 \\times 0.338 = 203$ J of muscular work — precisely the computed jump from 131 J to 334 J. Every joule of spin-up is paid for; where does it come from in a **gravitating** system? From gravity itself: pulling mass toward the axis lets it fall inward, and gravitational potential energy converts to rotational kinetic energy.",
          },
          {
            kind: 'example',
            heading: 'Collapse of a Sun-like star: the pulsar spin-up',
            body: "A stellar core of the Sun's radius $R_i = 7.0\\times10^{8}$ m rotating with the Sun's 25-day period collapses (supernova) to a neutron star of $R_f = 10$ km, ejecting the envelope but conserving the core's mass and angular momentum. First estimate: uniform spheres, $I = \\frac25 MR^2$, so $\\frac{\\omega_f}{\\omega_i} = \\left(\\frac{R_i}{R_f}\\right)^2 = (7\\times10^4)^2 = 4.9\\times10^9$. With $\\omega_i = 2\\pi/(25 \\times 86400\\ \\text{s}) = 2.9\\times10^{-6}$ rad/s: $\\omega_f = 1.4\\times10^{4}$ rad/s, a period of 0.44 ms. That is suspiciously fast — faster than any known pulsar — because the uniform-sphere model is wrong in the right direction: the Sun's mass is centrally concentrated ($I \\approx 0.059 MR^2$) while a neutron star is more nearly uniform with relativistic corrections ($I \\approx 0.35 MR^2$). Redoing the ratio with realistic inertias multiplies the uniform answer by $0.059/0.35 \\approx 0.17$: $\\omega_f \\approx 2.4\\times10^{3}$ rad/s, a period of $\\approx 2.6$ ms — squarely in the observed millisecond-pulsar range (the fastest known, PSR J1748-2446ad, spins at 716 Hz, period 1.4 ms).",
          },
          {
            kind: 'derivation',
            heading: 'Why nothing spins much faster: the breakup limit',
            body: "Conservation of angular momentum would seem to allow unlimited spin-up as $R \\to 0$, but before that, centrifugal physics intervenes: surface material leaves when the equatorial orbital speed is reached, $\\omega_{max}^2 R = GM/R^2$, i.e. $\\omega_{max} = \\sqrt{GM/R^3}$. For a neutron star of $M = 1.4 M_{sun}$, $R = 10$ km: $\\omega_{max} = \\sqrt{(6.67\\times10^{-11})(2.8\\times10^{30})/10^{12}} = 1.4\\times10^{4}$ rad/s, a minimum period of $\\approx 0.46$ ms. The observed cutoff just above 1 ms is this gravitational speed limit plus the equatorial-bulge feedback of general relativity — the universe's fastest spinning objects sit pressed against the wall their own gravity builds.",
          },
          {
            kind: 'application',
            heading: "Kepler's law as conservation, and the retrograde exception",
            body: "The areal-velocity result $dA/dt = \\ell/2m$ of Section 11.6 is angular momentum conservation in geometry clothing, and it generalizes: the Lagrangian's rotational symmetry in the two-body problem makes $\\vec L$ the generator of the orbit plane's fixedness (orbits are planar) and of Kepler's law. When you meet the exceptions — planets on inclined orbits, the Sun\'s 7°-tilted equator, the Moon's inclined orbit — you are looking at fossils of torques: systems that were **not** isolated, torqued by neighbors, tides, or by the star-forming cloud that gave them their initial $\\vec L$ in the first place. Theorists reconstruct solar-system history from angular-momentum mismatches; the current problem, the Sun\'s slow spin carrying only 0.3% of the system's angular momentum, is the 'angular momentum problem' of solar formation — the young Sun was torqued by its disk, and its planets inherited the difference.",
          },
        ],
      },
    ],
    examples: [
      {
        title: "A figure skater pulls in",
        problem: "A skater spins at 1.2 rev/s with rotational inertia 4.6 kg·m² (arms out). She pulls her arms in, dropping to 1.8 kg·m². Find her new spin rate and the change in kinetic energy.",
        steps: [
          { label: 'Conservation', text: "The ice exerts negligible torque about the skate's vertical axis: $L = I\\omega$ is conserved. $\\omega_i = (1.2)(2\\pi) = 7.54$ rad/s, so $L = (4.6)(7.54) = 34.7\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$." },
          { label: 'New rate', text: "$\\omega_f = L/I_f = 34.7/1.8 = 19.3$ rad/s — that is 3.07 rev/s, more than 2.5 times faster." },
          { label: 'Energy before', text: "$K_i = \\frac12 I\\omega^2 = \\frac12(4.6)(7.54)^2 = 131$ J." },
          { label: 'Energy after', text: "$K_f = \\frac12(1.8)(19.3)^2 = 334$ J. The increase of 203 J is work her muscles did pulling mass inward against the centrifugal tendency — angular momentum is free, energy is not." },
        ],
        result: "3.1 rev/s and $K$ up from 131 J to 334 J: the skater is the conservation law made visible.",
      },
      {
        title: "A diver's tuck",
        problem: "A diver leaves the board rotating at 0.80 rev/s in layout position ($I = 14\\ \\text{kg}\\cdot\\text{m}^2$). She tucks to $I = 4.5\\ \\text{kg}\\cdot\\text{m}^2$. Find her spin rate in the tuck.",
        steps: [
          { label: 'Conservation about her com', text: "Gravity's torque about the com is zero, so during free fall $L = I\\omega$ is hers to keep: $L = (14)(0.80) = 11.2\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ in rev/s units (equivalently 70.4 rad/s-equivalent; ratios are unaffected)." },
          { label: 'Tuck rate', text: "$\\omega_f = L/I_f = 11.2/4.5 = 2.5$ rev/s — a tripled rotation rate bought in mid-air." },
          { label: 'The choreography', text: "She must complete her somersaults while the tuck lasts, then kick out to $I = 14$ again — the spin drops back to 0.80 rev/s exactly, and she enters the water straight and slow-spinning. $L$ was never negotiable; only its distribution was." },
        ],
        result: "2.5 rev/s in the tuck — how three and a half somersaults fit into 1.5 seconds of fall.",
      },
    ],
    keyTakeaways: [
      "Zero net external torque about an axis conserves that axis's angular momentum: $I_i\\omega_i = I_f\\omega_f$ — shape changes included.",
      "Kinetic energy $K = L^2/2I$ can **increase** under conservation; the energy comes from internal work (muscles) or gravity (collapsing stars).",
      "Large $L$ stabilizes a spin axis — rifling, spiraling footballs, gyroscopes — and collapsing stars convert radius into astonishing spin (millisecond pulsars).",
    ],
    quiz: [
      {
        q: "A skater spinning with arms out pulls them in, halving her rotational inertia. Her angular speed and her kinetic energy:",
        options: [
          'both stay the same',
          'angular speed doubles; kinetic energy doubles',
          'angular speed doubles; kinetic energy quadruples',
          'angular speed doubles; kinetic energy is unchanged',
        ],
        answer: 1,
        explanation: "Conservation of $L = I\\omega$ forces $\\omega$ to double when $I$ halves. Then $K = L^2/2I$ also doubles (from $L^2/2I$ to $L^2/I$): the extra energy is the muscular work of pulling mass inward against the outward tendency.",
      },
      {
        q: "Where does the extra rotational kinetic energy of the tucking skater come from?",
        options: [
          'the ice, through her blades',
          'work done by her muscles pulling mass toward the axis',
          'conservation of energy: it was always there',
          'a decrease in her linear kinetic energy',
        ],
        answer: 1,
        explanation: "Angular-momentum conservation fixes $L$, not $K$. Pulling mass inward against the outward centrifugal tendency costs muscular work, and that work appears as the increase in $\\frac12 I\\omega^2 = L^2/2I$.",
      },
      {
        q: "A star collapses from radius $7\\times10^{8}$ m to $10^{4}$ m while conserving angular momentum (uniform spheres). Its rotation rate increases by about:",
        options: [`$7\\times10^{4}$`, `$2\\times10^{4}$`, `$5\\times10^{9}$`, `$3.5\\times10^{2}$`],
        answer: 2,
        explanation: "$\\omega \\propto 1/I \\propto 1/R^2$ for uniform spheres: the factor is $(7\\times10^8/10^4)^2 = (7\\times10^4)^2 = 4.9\\times10^9$. A once-a-month rotation becomes a several-millisecond spin — a pulsar.",
      },
      {
        q: "For angular momentum about a given axis to be conserved, the requirement is:",
        options: [
          'no external force acts on the system',
          'no net external torque about that axis acts on the system',
          'the system must be rigid',
          'the system must be at rest',
        ],
        answer: 1,
        explanation: "Torque, not force, is the villain: gravity can act freely and $L$ still holds, provided its torque about the chosen axis vanishes. Rigidity is irrelevant — skaters change shape precisely to exploit the law.",
      },
    ],
  },

  // ------------------------------------------------------ 11.9
  {
    sectionId: 'hall-ch11-s9',
    readingTime: 7,
    intro: "A spinning gyroscope hung from one end of its axle refuses to fall; instead, the axle sweeps slowly around the horizontal — precession. Nothing mysterious is happening: gravity's torque is horizontal, perpendicular to the angular momentum along the axle, so it tips $\\vec L$ sideways rather than downward. Watching $d\\vec L = \\vec\\tau\\,dt$ in action is the best geometry lesson in the chapter.",
    objectives: [
      "Explain qualitatively why a spinning gyro precesses instead of falling: $\\vec\\tau \\perp \\vec L$",
      "Derive the precession rate $\\Omega = MgD/(I\\omega)$ for a fast gyroscope with horizontal axle",
      "Use the $1/\\omega$ dependence: slower spin means faster precession, and the limit where the formula fails",
    ],
    concepts: [
      {
        term: 'Why the gyroscope does not fall',
        kind: 'insight',
        statement: "Gravity pulls the spinning wheel's center of mass down, but the torque about the pivot is $\\vec\\tau = \\vec D \\times M\\vec g$ — **horizontal**, perpendicular to $\\vec L$ (which lies along the axle). A torque perpendicular to $\\vec L$ changes only its direction: $d\\vec L = \\vec\\tau\\,dt$ tips the axle sideways, not down. The tip of $\\vec L$ traces a horizontal circle: precession.",
        detail: "A non-spinning gyroscope has $\\vec L \\approx 0$, and the same torque simply rotates it downward — it falls, as intuition expects. Spin does not defy gravity; it re-routes the torque's effect from falling to turning. The same reasoning explains why a rolling coin wobbles in slow circles before it settles.",
      },
      {
        term: 'Precession rate',
        kind: 'method',
        statement: "For a fast top with axle horizontal, pivot-to-com distance $D$: in time $dt$, $\\vec L$ of magnitude $L = I\\omega$ tips by $d\\phi = \\tau\\,dt/L$, so the precession angular velocity is $$\\Omega = \\frac{d\\phi}{dt} = \\frac{\\tau}{L} = \\frac{MgD}{I\\omega}.$$ The direction of $\\vec\\Omega$ is along the vertical (the axle sweeps a horizontal cone about it).",
        detail: "Validity: $\\omega \\gg \\Omega$ — the spin must be fast for $\\vec L$ to stay essentially along the axle. Note the dependencies: heavier or longer-armed gyros precess faster; faster spin precesses more slowly. Nothing here involves g's direction except through $\\tau$; on the Moon, precession slows by the Moon's g.",
      },
      {
        term: 'The 1/ω signature and its limit',
        kind: 'insight',
        statement: "As friction bleeds the spin $\\omega$, the precession rate $\\Omega = MgD/I\\omega$ **speeds up** — a dying top wobbles in quicker and quicker circles. Eventually $\\omega$ becomes comparable to $\\Omega$, the 'fast top' approximation fails, and the motion gains a nodding component called **nutation** before the top finally drops.",
        detail: "Engineers meet the same equation as the gyroscopic drift of ships' stabilizers and the precession of Earth's axis (26,000-year cycle) under the Moon's and Sun\'s torques on Earth's equatorial bulge — a precession so slow only because Earth's $L$ is astronomically large.",
      },
      {
        term: "Precession of a Gyroscope: solution protocol",
        kind: "method",
        statement: "**Solve Precession of a Gyroscope problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rolling and angular momentum; the working equation is $v_{\\text{com}} = \\omega R$ (no slip), $\\vec L = \\vec r\\times\\vec p$, $L = I\\omega$, $\\vec\\tau_{\\text{net}} = d\\vec L/dt$; every substitution must carry its units so the final unit ($\\text{kg}\\cdot\\text{m}^2/\\text{s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit); no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.",
      },
      {
        term: "Precession of a Gyroscope: scales and validity",
        kind: "insight",
        statement: "**Precession of a Gyroscope lives at $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit) and the textbook model holds while no-slip needs static friction; $\\vec L$ conserved only if $\\vec\\tau_{\\text{net}} = 0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Precession of a Gyroscope calculation gives seconds when $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ demands meters, or a value orders of magnitude beyond $L\\sim 1\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ (wheel) to $10^{41}$ (Earth orbit), recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: "Precession of a gyroscope. The spinning wheel's angular momentum $\\vec L = I\\omega$ lies along the axle, distance $D$ from the pivot. Gravity's torque $\\vec\\tau = \\vec D \\times M\\vec g$ is horizontal — into the page in the view shown — so in each $dt$ the tip of $\\vec L$ moves by $d\\vec L = \\vec\\tau\\,dt$ **sideways**, never downward: the axle sweeps a horizontal circle at $\\Omega = \\tau/L = MgD/(I\\omega)$. Seen from above (inset), $\\vec L$ rotates counterclockwise for the spin direction drawn. The gyroscope falls only when $\\omega$ dies and $L \\to 0$.",
        svg: `<svg viewBox="0 0 460 310" width="100%" role="img" aria-label="Gyroscope precession with torque and change of angular momentum" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><rect x="81" y="120" width="8" height="140" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1"/><line x1="55" y1="262" x2="115" y2="262" stroke="currentColor" stroke-width="3"/><circle cx="85" cy="120" r="4" fill="currentColor"/><line x1="85" y1="120" x2="415" y2="120" stroke="currentColor" stroke-width="3"/><polygon points="417,120 402,114 402,126" fill="currentColor"/><text x="392" y="108" font-size="11" font-weight="600" fill="currentColor" text-anchor="middle">L = Iω</text><line x1="85" y1="104" x2="320" y2="104" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.6"/><polygon points="85,104 97,100 97,108" fill="currentColor" opacity="0.6"/><polygon points="320,104 308,100 308,108" fill="currentColor" opacity="0.6"/><text x="202" y="98" font-size="10.5" fill="currentColor" text-anchor="middle">D</text><circle cx="320" cy="120" r="52" fill="none" stroke="currentColor" stroke-width="2.5"/><g stroke="currentColor" stroke-width="1" opacity="0.45"><line x1="320" y1="68" x2="320" y2="172"/><line x1="268" y1="120" x2="372" y2="120"/><line x1="283" y1="83" x2="357" y2="157"/><line x1="283" y1="157" x2="357" y2="83"/></g><path d="M346,75 A52 52 0 0 1 346,165" fill="none" stroke="currentColor" stroke-width="1.8"/><polygon points="346,165 360.6,162.3 355.6,153.7" fill="currentColor"/><text x="372" y="142" font-size="11" fill="currentColor" text-anchor="middle">spin ω</text><line x1="320" y1="120" x2="320" y2="182" stroke="currentColor" stroke-width="2.2"/><polygon points="320,186 315,172 325,172" fill="currentColor"/><text x="320" y="205" font-size="11" fill="currentColor" text-anchor="middle">Mg</text><circle cx="430" cy="120" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="424" y1="114" x2="436" y2="126" stroke="currentColor" stroke-width="1.4"/><line x1="424" y1="126" x2="436" y2="114" stroke="currentColor" stroke-width="1.4"/><text x="430" y="146" font-size="9.5" fill="currentColor" text-anchor="middle">dL = τ dt</text><g><ellipse cx="380" cy="255" rx="38" ry="14" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="4 3" opacity="0.6"/><line x1="380" y1="255" x2="418" y2="255" stroke="currentColor" stroke-width="1.6"/><circle cx="380" cy="255" r="2.5" fill="currentColor"/><path d="M418,255 A38 38 0 0 0 411.1,233.2" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="411.1,233.2 423.2,241.8 415.0,247.6" fill="currentColor"/></g><text x="380" y="285" font-size="9.5" fill="currentColor" text-anchor="middle">view from above: L sweeps at Ω</text><text x="230" y="30" font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">Ω = MgD / (Iω) — precession, not falling</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "A demonstration gyroscope",
        problem: "A gyroscope wheel ($I = 1.40\\times10^{-2}\\ \\text{kg}\\cdot\\text{m}^2$ about its axle) spins at 1500 rev/min. Its com hangs 6.0 cm from the pivot, and the wheel's mass with frame is 0.25 kg. Find the precession rate and period.",
        steps: [
          { label: 'Spin and L', text: "$\\omega = 1500(2\\pi/60) = 157$ rad/s; $L = I\\omega = (0.0140)(157) = 2.20\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$." },
          { label: 'Torque', text: "$\\tau = MgD = (0.25)(9.8)(0.060) = 0.147$ N·m, horizontal, perpendicular to the axle." },
          { label: 'Precession', text: "$\\Omega = \\tau/L = 0.147/2.20 = 0.067$ rad/s. The axle sweeps around once every $T = 2\\pi/\\Omega = 94$ s — a lazy, dignified circle." },
          { label: 'Check the hierarchy', text: "$\\Omega/\\omega = 0.067/157 = 4\\times10^{-4} \\ll 1$: the fast-top approximation is excellent, and $\\vec L$ stays put along the axle." },
        ],
        result: "$\\Omega = 0.067$ rad/s, a precession period of about 1.6 minutes.",
      },
      {
        title: "As the spin dies",
        problem: "The same gyroscope slows by friction to 300 rev/min. What happens to the precession?",
        steps: [
          { label: 'New spin', text: "$\\omega' = 31.4$ rad/s; $L' = (0.0140)(31.4) = 0.44\\ \\text{kg}\\cdot\\text{m}^2/\\text{s}$ — one fifth of before." },
          { label: 'New precession', text: "The torque is unchanged: $\\Omega' = 0.147/0.44 = 0.33$ rad/s — five times faster, a period of 19 s. The dying top wobbles faster and faster." },
          { label: 'Toward the limit', text: "As $\\omega$ falls toward $\\Omega$ itself, the fast-top formula fails and nutation (nodding) appears; at $\\omega \\approx 0$ the gyroscope is just a hanging mass and sags like any other." },
        ],
        result: "Precession accelerates from one lap per 94 s to one per 19 s: the $1/\\omega$ law observed directly.",
      },
    ],
    keyTakeaways: [
      "Gravity's torque on a gyro is horizontal, $\\vec\\tau = \\vec D \\times M\\vec g$, perpendicular to $\\vec L$: it turns $\\vec L$ sideways rather than tipping it down — hence precession instead of falling.",
      "Fast-top precession rate: $\\Omega = MgD/(I\\omega)$, valid when $\\omega \\gg \\Omega$; heavier or longer gyros precess faster, faster spins more slowly.",
      "As friction kills the spin, precession speeds up ($\\Omega \\propto 1/\\omega$), nutation sets in, and only then does the top fall.",
    ],
    quiz: [
      {
        q: "A spinning gyroscope hangs from one end of its axle. Instead of falling, it precesses because:",
        options: [
          'gravity is too weak to affect spinning bodies',
          "the torque $\\vec D \\times M\\vec g$ is perpendicular to $\\vec L$, so it re-aims $\\vec L$ sideways rather than downward",
          'centrifugal force holds it up',
          'its angular momentum exactly cancels its weight',
        ],
        answer: 1,
        explanation: "$d\\vec L = \\vec\\tau\\,dt$ adds a horizontal bit to a horizontal $\\vec L$: the tip of $\\vec L$ circles horizontally. Gravity never gets to pull the axle down until the spin — and with it $L$ — dies.",
      },
      {
        q: "Doubling the spin rate of a gyroscope (still in the fast-top regime) does what to its precession rate?",
        options: [
          'doubles it',
          'halves it',
          'leaves it unchanged',
          'quadruples it',
        ],
        answer: 1,
        explanation: "$\\Omega = MgD/(I\\omega)$ with everything else fixed: twice the spin, half the precession. This inverse relation is the classic lecture demo — and why slowly dying tops wobble in ever-faster circles.",
      },
      {
        q: "For the demonstration gyroscope of the example (M = 0.25 kg, D = 0.060 m, I = 0.0140 kg·m²) spinning at 157 rad/s, the precession rate is about:",
        options: ['0.067 rad/s', '0.67 rad/s', '6.7 rad/s', '1.6 rad/s'],
        answer: 0,
        explanation: "$\\Omega = MgD/(I\\omega) = (0.25)(9.8)(0.060)/[(0.0140)(157)] = 0.147/2.20 = 0.067$ rad/s — one lap every minute and a half.",
      },
    ],
  },
]
