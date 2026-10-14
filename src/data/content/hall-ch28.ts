import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 28
// Magnetic Fields — sections 28-1 … 28-8 (ids hall-ch28-s1 … hall-ch28-s8)
// Constants: e = 1.602×10⁻¹⁹ C, m_e = 9.11×10⁻³¹ kg, m_p = 1.673×10⁻²⁷ kg,
// Bohr magneton μ_B = 9.27×10⁻²⁴ J/T; 1 T = 10⁴ G.
// ============================================================================

export const hallCh28Content: SectionContent[] = [
  // ------------------------------------------------------------------ 28-1
  {
    sectionId: 'hall-ch28-s1',
    readingTime: 6,
    intro: "Electric fields push charges along their lines; magnetic fields push them sideways. That single geometric difference — force perpendicular to velocity, perpendicular to the field — defines magnetism, gives the tesla its meaning, and is why compass needles turn and motors spin. Before magnetic fields can be used for anything, though, they must be defined, and the definition is operational: shoot a test charge through and watch what happens.",
    objectives: [
      'Define $\\vec B$ operationally from the magnetic force $\\vec F = q\\vec v\\times\\vec B$ on a moving test charge',
      'Use $F = |q|vB\\sin\\phi$, the right-hand rule, and the units tesla and gauss',
      'Explain why the magnetic force can do no work on a charged particle',
    ],
    concepts: [
      {
        term: 'The operational definition of B',
        kind: 'method',
        statement: "**Fire a test charge with speed $v$ through a point in many directions: the force is zero when $\\vec v \\parallel \\vec B$ and maximal ($F_{\\max}$) when $\\vec v \\perp \\vec B$. The field is defined by** $$B = \\frac{F_{\\max}}{|q|v},$$ and points along the zero-force direction (orientation fixed by the right-hand rule).",
        detail: 'Compare with $\\vec E = \\vec F/q$, which works even for a charge at rest. A moving charge is the only probe of $\\vec B$, because magnetism is a velocity-dependent force.',
      },
      {
        term: 'The magnetic force law',
        kind: 'law',
        statement: "**A charge $q$ moving with velocity $\\vec v$ in field $\\vec B$ feels** $$\\vec F = q\\,\\vec v\\times\\vec B, \\qquad F = |q|\\,vB\\sin\\phi,$$ directed by the right-hand rule for $q>0$ (opposite for $q<0$), always perpendicular to both $\\vec v$ and $\\vec B$.",
        detail: 'The cross product encodes every experimental fact: maximum effect at perpendicular incidence, none at parallel, and a force sideways to the motion. Reversing the sign of the charge reverses the force.',
      },
      {
        term: 'The tesla and the gauss',
        kind: 'definition',
        statement: "**The SI unit of magnetic field is the tesla: $1\\ \\mathrm{T} = 1\\ \\mathrm{N/(A\\cdot m)} = 1\\ \\mathrm{kg/(C\\cdot s)}$.** The older cgs unit persists: $1\\ \\mathrm{G} = 10^{-4}\\ \\mathrm{T}$.",
        detail: 'The Earth\u2019s field is about $50\\ \\mu\\mathrm{T} = 0.5$ G at the surface; a strong permanent magnet reaches 0.5 T; MRI scanners run 1.5–3 T; the strongest steady laboratory fields are about 45 T. The tesla is huge compared to everyday experience — which is why magnetism only dazzles when currents are enormous or charges are fast.',
      },
      {
        term: 'Magnetic force does no work',
        kind: 'insight',
        statement: "**Because $\\vec F \\perp \\vec v$ always, the magnetic force never changes a particle\u2019s speed or kinetic energy — it only steers.** The rate of work $\\vec F\\cdot\\vec v = 0$ identically.",
        detail: 'Every device that extracts energy from a magnetic field (motors, generators) does so through the electric fields that accompany it, with the magnetic part steering charge into position. Field-line pictures respect this: a charged particle spirals around the lines but never slides along them because of $\\vec B$ alone.',
      },
      {
        term: "Magnetic Fields and the Definition of B: solution protocol",
        kind: "method",
        statement: "**Solve Magnetic Fields and the Definition of B problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is magnetic force on moving charge and current; the working equation is $\\vec F_B = q\\vec v\\times\\vec B$, $r = mv/qB$, $T = 2\\pi m/qB$, $\\vec\\tau = \\vec\\mu\\times\\vec B$; every substitution must carry its units so the final unit (tesla, meters, hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $r\\sim \\text{cm}$ for $\\text{eV}$--$\\text{keV}$ in tesla fields; uniform $\\vec B$, $v\\perp\\vec B$ for a circle; $\\vec F_B$ does no work.",
      },
    ],
    examples: [
      {
        title: 'A proton in a 0.5 T field',
        problem: 'A proton ($q = +e$, $m = 1.67\\times 10^{-27}$ kg) moves at $2.0\\times 10^{6}$ m/s through a uniform field $B = 0.50$ T. (a) Find the force when the velocity is perpendicular to $\\vec B$. (b) Compare with the proton\u2019s weight. (c) What is the force if the velocity makes a $30\\degree$ angle with $\\vec B$?',
        steps: [
          { label: 'Perpendicular force', text: '$F = qvB\\sin 90\\degree = (1.602\\times 10^{-19})(2.0\\times 10^{6})(0.50)(1) = 1.6\\times 10^{-13}$ N.' },
          { label: 'Versus gravity', text: 'Weight $mg = (1.67\\times 10^{-27})(9.8) = 1.6\\times 10^{-26}$ N — the magnetic force is $10^{13}$ times larger. Gravity is utterly negligible in charged-particle dynamics.' },
          { label: 'At 30°', text: '$F = qvB\\sin 30\\degree = (1.6\\times 10^{-13})(0.50) = 8.0\\times 10^{-14}$ N, still perpendicular to the velocity, with direction from the right-hand rule.' },
        ],
        result: '$1.6\\times 10^{-13}$ N perpendicular to the motion — ten trillion gravities; at $30\\degree$ it halves to $8.0\\times 10^{-14}$ N.',
      },
      {
        title: "Magnetic Fields and the Definition of B: cyclotron-radius check",
        problem: "An electron at $2.0\\times 10^6\\ \\text{m/s}$ enters $B = 1.5\\ \\text{T}$ perpendicularly. Find $r = mv/qB$.",
        steps: [
          { label: "Numerator", text: "$mv = 9.11\\times 10^{-31}\\times 2.0\\times 10^6 = 1.82\\times 10^{-24}$." },
          { label: "Denominator", text: "$qB = 1.60\\times 10^{-19}\\times 1.5 = 2.40\\times 10^{-19}$." },
          { label: "Radius", text: "$r \\approx 7.58\\times 10^{-6}\\ \\text{m}$ ($7.58\\ \\mu\\text{m}$)." },
        ],
        result: "$r \\approx 7.58\\times 10^{-6}\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      'Define $\\vec B$ by the sideways force on a moving charge: $\\vec F = q\\vec v\\times\\vec B$, magnitude $F = |q|vB\\sin\\phi$.',
      'Unit: the tesla ($1\\ \\mathrm{T} = 1\\ \\mathrm{N/(A\\cdot m)}$); $1\\ \\mathrm{G} = 10^{-4}$ T; Earth supplies ~50 μT.',
      'The force is always perpendicular to $\\vec v$, so magnetism steers but never does work.',
    ],
    quiz: [
      {
        q: 'A charged particle moves through a magnetic field and feels zero force. Its velocity must be:',
        options: ['perpendicular to $\\vec B$', 'parallel or antiparallel to $\\vec B$', 'very small', 'at 45° to $\\vec B$'],
        answer: 1,
        explanation: '$F = |q|vB\\sin\\phi$ vanishes only when $\\sin\\phi = 0$, i.e., $\\vec v$ along $\\vec B$ (speed is irrelevant).',
      },
      {
        q: 'An electron ($e = 1.602\\times 10^{-19}$ C) moves at $4.0\\times 10^{6}$ m/s perpendicular to a $0.20$ T field. The magnetic force on it is about:',
        options: ['$1.3\\times 10^{-13}$ N', '$1.3\\times 10^{-14}$ N', '$3.2\\times 10^{-13}$ N', '$1.3\\times 10^{-15}$ N'],
        answer: 0,
        explanation: '$F = evB = (1.602\\times 10^{-19})(4.0\\times 10^{6})(0.20) \\approx 1.3\\times 10^{-13}$ N.',
      },
      {
        q: 'One tesla may be written as:',
        options: ['N·m/A', 'N/(A·m)', 'A/N·m', 'N/A'],
        answer: 1,
        explanation: 'From $F = qvB$: $[B] = \\mathrm{N/(C\\cdot m/s)} = \\mathrm{N/(A\\cdot m)}$.',
      },
      {
        q: 'A uniform magnetic field acts on a moving electron over some time. Which quantity definitely stays constant?',
        options: ['its velocity vector', 'its speed', 'its position', 'its direction of motion'],
        answer: 1,
        explanation: 'The force is always perpendicular to the velocity, so it changes direction but never the speed — magnetic forces do no work.',
      },
    ],
  },

  // ------------------------------------------------------------------ 28-2
  {
    sectionId: 'hall-ch28-s2',
    readingTime: 7,
    intro: "Cross an electric current with a magnetic field inside a flat slab of conductor and something marvelous happens: the carriers pile up on one edge, a sideways voltage appears, and its polarity betrays whether the current is carried by negative or positive particles. The Hall effect, discovered in 1879, turned an assumption about conduction into a measurement — and a century later its quantized descendant became the world's resistance standard.",
    objectives: [
      'Explain the equilibrium $qE_H = qv_dB$ that produces the Hall voltage',
      'Compute $V_H = v_dBd = iB/(net)$ and use it to find carrier density and drift speed',
      'Show how Hall polarity distinguishes negative from positive carriers',
    ],
    concepts: [
      {
        term: 'The Hall field',
        kind: 'definition',
        statement: "**A conductor slab carries current $i$ while a field $\\vec B$ points perpendicular to the slab (and to the drift velocity). The magnetic force $q\\vec v_d\\times\\vec B$ pushes carriers toward one edge; charge builds there until the transverse electric field satisfies** $$qE_H = qv_dB.$$",
        detail: 'The equilibrium is exact — a minute surface charge, a few hundred electrons per edge for typical slabs, supplies the field. From then on carriers travel straight down the slab as if nothing were there.',
      },
      {
        term: 'Hall voltage',
        kind: 'theorem',
        statement: "**Across the slab\u2019s width $d$, the Hall potential difference is** $$V_H = E_H d = v_dBd = \\frac{iB}{net},$$ where $t$ is the slab thickness (along $\\vec B$), $n$ the carrier density. Measuring $V_H$, $i$ and $B$ yields $n$ — and with the current, the drift speed $v_d$.",
        detail: 'The $1/n$ explains materials: metals with $n \\sim 10^{29}\\ \\mathrm{m^{-3}}$ give microvolts; doped semiconductors with $n \\sim 10^{21}$–$10^{22}$ give millivolts per tesla — three orders more sensitive.',
      },
      {
        term: 'Sign of the carriers',
        kind: 'insight',
        statement: "**The polarity of the Hall voltage reveals the sign of the charge carriers.** Reversing the carrier sign reverses the magnetic push, so the carriers pile on the opposite edge and $V_H$ flips — even though the conventional current looks identical.",
        detail: 'In metals the voltage always has the electron polarity (negative carriers). In p-type semiconductors it flips: the current is genuinely carried by positive “holes.” Before Hall\u2019s experiment, no one could tell; shortly after, it helped cement the electron theory of metals.',
      },
      {
        term: 'Applications',
        kind: 'insight',
        statement: "**Hall probes measure magnetic fields (current clamps, position sensors, brushless-motor commutation); automotive ignition and keyboards use Hall switches with no contacts to wear.** In the quantum Hall effect (2D electrons at low temperature), the ratio $V_H/i$ is quantized to better than a part in $10^{9}$, defining the resistance standard.",
        detail: 'The quantized Hall resistance $R_K = h/e^2 \\approx 25.8\\ \\mathrm{k\\Omega}$ earned Klaus von Klitzing the 1985 Nobel Prize and now anchors the SI ohm.',
      },
      {
        term: "Crossed Fields: The Hall Effect: solution protocol",
        kind: "method",
        statement: "**Solve Crossed Fields: The Hall Effect problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is magnetic force on moving charge and current; the working equation is $\\vec F_B = q\\vec v\\times\\vec B$, $r = mv/qB$, $T = 2\\pi m/qB$, $\\vec\\tau = \\vec\\mu\\times\\vec B$; every substitution must carry its units so the final unit (tesla, meters, hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $r\\sim \\text{cm}$ for $\\text{eV}$--$\\text{keV}$ in tesla fields; uniform $\\vec B$, $v\\perp\\vec B$ for a circle; $\\vec F_B$ does no work.",
      },
    ],
    examples: [
      {
        title: 'Metal vs semiconductor Hall probe',
        problem: '(a) A copper strip of thickness $t = 1.0$ mm carries $i = 100$ A in a perpendicular field $B = 1.0$ T; copper has $n = 8.49\\times 10^{28}\\ \\mathrm{m^{-3}}$. (b) A doped semiconductor sensor with $n = 1.0\\times 10^{22}\\ \\mathrm{m^{-3}}$, $t = 0.10$ mm, carries $i = 10$ mA in $B = 0.10$ T. Find the Hall voltage in each case.',
        steps: [
          { label: 'Copper', text: '$V_H = iB/(net) = (100)(1.0)/[(8.49\\times 10^{28})(1.602\\times 10^{-19})(1.0\\times 10^{-3})]$.' },
          { label: 'Evaluate', text: 'Denominator: $(8.49\\times 10^{28})(1.602\\times 10^{-19}) = 1.36\\times 10^{10}$; times $10^{-3}$ gives $1.36\\times 10^{7}$. So $V_H = 100/1.36\\times 10^{7} = 7.4\\ \\mu\\mathrm{V}$ — buried in noise.' },
          { label: 'Semiconductor', text: 'Denominator: $(1.0\\times 10^{22})(1.602\\times 10^{-19})(1.0\\times 10^{-4}) = 0.16$; numerator $iB = (0.010)(0.10) = 1.0\\times 10^{-3}$.' },
          { label: 'Compare', text: '$V_H = 1.0\\times 10^{-3}/0.16 = 6.3$ mV — a thousand times the copper signal for a hundred times less current and a tenth the field: sensors are made of semiconductors.' },
        ],
        result: 'Copper: 7.4 μV (hopeless); semiconductor: 6.3 mV (easy to read).',
      },
      {
        title: "Crossed Fields: The Hall Effect: cyclotron-radius check",
        problem: "An electron at $2.0\\times 10^6\\ \\text{m/s}$ enters $B = 0.5\\ \\text{T}$ perpendicularly. Find $r = mv/qB$.",
        steps: [
          { label: "Numerator", text: "$mv = 9.11\\times 10^{-31}\\times 2.0\\times 10^6 = 1.82\\times 10^{-24}$." },
          { label: "Denominator", text: "$qB = 1.60\\times 10^{-19}\\times 0.5 = 8.01\\times 10^{-20}$." },
          { label: "Radius", text: "$r \\approx 2.27\\times 10^{-5}\\ \\text{m}$ ($22.7\\ \\mu\\text{m}$)." },
        ],
        result: "$r \\approx 2.27\\times 10^{-5}\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      'In crossed fields, carriers pile on one edge until $E_H = v_dB$; the resulting $V_H = v_dBd = iB/(net)$.',
      'Hall voltage $\\propto 1/n$: weakly doped semiconductors make the best probes.',
      'The polarity of $V_H$ is the only practical way to learn the sign of the carriers in a material.',
    ],
    quiz: [
      {
        q: 'In the Hall effect, the transverse electric field builds up until:',
        options: [`$E_H = v_dB$`, `$E_H = B/v_d$`, `$E_H = v_d/B$`, '$E_H = 0$ when equilibrium is reached'],
        answer: 0,
        explanation: 'Electric and magnetic forces cancel: $qE_H = qv_dB$, so $E_H = v_dB$.',
      },
      {
        q: 'A Hall measurement gives the carrier density $n$ from:',
        options: [`$n = iB/(e t V_H)$`, `$n = eV_Ht/(iB)$`, `$n = V_Hi/(Bt)$`, `$n = i/(eV_H)$`],
        answer: 0,
        explanation: 'Invert $V_H = iB/(net)$ to get $n = iB/(e t V_H)$.',
      },
      {
        q: 'Two identical slabs carry the same conventional current, one with electrons, one with positive holes. The Hall voltages:',
        options: ['have the same polarity', 'have opposite polarities', 'are both zero', 'differ by a factor of 2'],
        answer: 1,
        explanation: 'Opposite charges drift in opposite directions, so the magnetic force pushes both carrier types to the same edge… wait, no: reversing both $q$ and $v_d$ leaves $q\\vec v_d$ (the current) unchanged, so $\\vec F = q\\vec v_d\\times\\vec B$ on holes equals that on electrons in direction — but the edge that is “negative carriers accumulated” becomes “positive carriers accumulated,” flipping the measured polarity.',
      },
      {
        q: 'Hall sensors are made from lightly doped semiconductors rather than copper because:',
        options: ['semiconductors are cheaper', 'the Hall voltage scales as $1/n$, and $n$ is far smaller in semiconductors', 'copper is not a conductor', 'semiconductors withstand higher current'],
        answer: 1,
        explanation: 'With $n \\sim 10^{22}$ instead of $10^{29}\\ \\mathrm{m^{-3}}$, the same $iB/t$ yields millions of times more voltage.',
      },
    ],
  },

  // ------------------------------------------------------------------ 28-3
  {
    sectionId: 'hall-ch28-s3',
    readingTime: 7,
    intro: "A charge shot perpendicular to a magnetic field cannot cross the lines or stop on them — it is forced into a circle at constant speed, looping with a period that is completely independent of how fast it moves. Give it a component along the field as well and the circle slides sideways, tracing a helix: the trajectory of solar wind particles, of trapped radiation belts, and of every electron microscope beam ever steered.",
    objectives: [
      'Derive the radius $r = mv/(qB)$ from $qvB = mv^2/r$',
      'Compute the cyclotron period $T = 2\\pi m/(qB)$ and frequency $f = qB/(2\\pi m)$, and explain their speed-independence',
      'Analyze helical motion: decompose $\\vec v$ and use pitch $p = v_{\\parallel}T$',
    ],
    concepts: [
      {
        term: 'Radius of the circle',
        kind: 'theorem',
        statement: "**A particle of mass $m$, charge $q$, speed $v$ moving perpendicular to $\\vec B$ is bent into a circle whose radius is fixed by $qvB = mv^2/r$:** $$r = \\frac{mv}{qB}.$$ Faster particles trace wider circles; stronger fields squeeze them tighter.",
        detail: 'Momentum over charge ($p/qB$) is the form high-energy physicists use — in a detector photograph, the curvature of a track measures $p/(qB)$ at a glance.',
      },
      {
        term: 'Cyclotron period and frequency',
        kind: 'theorem',
        statement: "**One revolution takes** $$T = \\frac{2\\pi m}{qB}, \\qquad f = \\frac{qB}{2\\pi m}, \\qquad \\omega = \\frac{qB}{m},$$ **independent of speed and radius** (nonrelativistically): doubling $v$ doubles $r$ and cancels out of $T = 2\\pi r/v$.",
        detail: 'A proton in a 1.0 T field cycles at $f = (1.602\\times 10^{-19})/[2\\pi(1.67\\times 10^{-27})] = 15.3$ MHz; an electron at $f = 28.0$ GHz. This independence is the engine of the cyclotron (next section) and the reason for a detector trick called frequency classifying.',
      },
      {
        term: 'Helical motion',
        kind: 'theorem',
        statement: "**Decompose the velocity: the parallel component $v_{\\parallel}$ feels no force and coasts, while the perpendicular component $v_\\perp$ circles. The result is a helix of radius $r = mv_\\perp/(qB)$ that advances one pitch** $$p = v_{\\parallel}T = \\frac{2\\pi m v_{\\parallel}}{qB}$$ per turn.",
        detail: 'A charged particle therefore spirals around field lines like a bead on a screw thread — it is guided, not captured: it escapes along the line as fast as it likes, but crossing from line to line is resisted.',
      },
      {
        term: 'Magnetic mirrors and belts',
        kind: 'insight',
        statement: "**In a converging field, the spiraling particle meets stronger $B$ and its circular motion tightens; conservation of energy then slows the forward motion, and the particle can be reflected.** Two such mirrors facing each other trap particles — the principle of the magnetic bottle and of Earth\u2019s Van Allen radiation belts.",
        detail: 'Auroras are Van Allen electrons leaking down field lines into the atmosphere. Fusion machines (tokamaks, mirror machines) fight this same physics to hold a 100-million-degree plasma away from the walls — no material container could survive it.',
      },
      {
        term: "A Circulating Charged Particle: solution protocol",
        kind: "method",
        statement: "**Solve A Circulating Charged Particle problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is magnetic force on moving charge and current; the working equation is $\\vec F_B = q\\vec v\\times\\vec B$, $r = mv/qB$, $T = 2\\pi m/qB$, $\\vec\\tau = \\vec\\mu\\times\\vec B$; every substitution must carry its units so the final unit (tesla, meters, hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $r\\sim \\text{cm}$ for $\\text{eV}$--$\\text{keV}$ in tesla fields; uniform $\\vec B$, $v\\perp\\vec B$ for a circle; $\\vec F_B$ does no work.",
      },
    ],
    figures: [
      {
        caption: 'Helical motion in a uniform field $\\vec B$. The perpendicular velocity component $v_\\perp$ circles with radius $r = mv_\\perp/(qB)$ and period $T = 2\\pi m/(qB)$; the parallel component $v_\\parallel$ is unaffected, so each turn advances the helix by one pitch $p = v_\\parallel T$. Because the magnetic force does no work, the speed — and hence both components — stay constant forever.',
        svg: `<svg viewBox="0 0 720 330" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Charged particle spiraling in a helix around a magnetic field axis"><defs><marker id="helA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="95" y1="160" x2="620" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 6" opacity="0.5"/><line x1="620" y1="160" x2="662" y2="160" stroke="currentColor" stroke-width="2.5" marker-end="url(#helA)"/><text x="672" y="140" font-size="19" fill="currentColor" font-style="italic">B</text><polyline points="100.0,160.0 105.0,151.4 110.0,143.0 115.0,135.0 120.0,127.7 125.0,121.1 130.0,115.5 135.0,111.0 140.0,107.7 145.0,105.7 150.0,105.0 155.0,105.7 160.0,107.7 165.0,111.0 170.0,115.5 175.0,121.1 180.0,127.7 185.0,135.0 190.0,143.0 195.0,151.4 200.0,160.0 205.0,168.6 210.0,177.0 215.0,185.0 220.0,192.3 225.0,198.9 230.0,204.5 235.0,209.0 240.0,212.3 245.0,214.3 250.0,215.0 255.0,214.3 260.0,212.3 265.0,209.0 270.0,204.5 275.0,198.9 280.0,192.3 285.0,185.0 290.0,177.0 295.0,168.6 300.0,160.0 305.0,151.4 310.0,143.0 315.0,135.0 320.0,127.7 325.0,121.1 330.0,115.5 335.0,111.0 340.0,107.7 345.0,105.7 350.0,105.0 355.0,105.7 360.0,107.7 365.0,111.0 370.0,115.5 375.0,121.1 380.0,127.7 385.0,135.0 390.0,143.0 395.0,151.4 400.0,160.0 405.0,168.6 410.0,177.0 415.0,185.0 420.0,192.3 425.0,198.9 430.0,204.5 435.0,209.0 440.0,212.3 445.0,214.3 450.0,215.0 455.0,214.3 460.0,212.3 465.0,209.0 470.0,204.5 475.0,198.9 480.0,192.3 485.0,185.0 490.0,177.0 495.0,168.6 500.0,160.0 505.0,151.4 510.0,143.0 515.0,135.0 520.0,127.7 525.0,121.1 530.0,115.5 535.0,111.0 540.0,107.7 545.0,105.7 550.0,105.0 555.0,105.7 560.0,107.7 565.0,111.0 570.0,115.5 575.0,121.1 580.0,127.7 585.0,135.0 590.0,143.0 595.0,151.4 600.0,160.0 605.0,168.6 610.0,177.0 615.0,185.0 620.0,192.3 625.0,198.9 630.0,204.5 635.0,209.0 640.0,212.3 645.0,214.3 650.0,215.0 655.0,214.3 660.0,212.3" fill="none" stroke="currentColor" stroke-width="3"/><line x1="150" y1="75" x2="350" y2="75" stroke="currentColor" stroke-width="1.8" marker-start="url(#helA)" marker-end="url(#helA)"/><text x="250" y="64" font-size="15" fill="currentColor" text-anchor="middle">p = v∥T (pitch)</text><line x1="350" y1="160" x2="350" y2="105" stroke="currentColor" stroke-width="2" marker-end="url(#helA)"/><text x="356" y="90" font-size="15" fill="currentColor">r = mv⊥/(qB)</text><line x1="200" y1="160" x2="200" y2="205" stroke="currentColor" stroke-width="2.5" marker-end="url(#helA)"/><text x="188" y="226" font-size="15" fill="currentColor" text-anchor="end">v⊥</text><line x1="545" y1="78" x2="615" y2="78" stroke="currentColor" stroke-width="2.5" marker-end="url(#helA)"/><text x="580" y="66" font-size="15" fill="currentColor" text-anchor="middle">v∥</text><text x="360" y="295" font-size="15" fill="currentColor" text-anchor="middle">T = 2πm/(qB) — independent of speed</text><text x="360" y="318" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.85">B does no work: v∥ coasts, v⊥ turns the path into a circle</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Electron in a millitesla',
        problem: 'An electron ($m = 9.11\\times 10^{-31}$ kg) moves at $v = 3.0\\times 10^{7}$ m/s in a uniform field $B = 1.0$ mT. (a) Find the radius and period of the motion when $\\vec v \\perp \\vec B$. (b) Find the radius and pitch if the velocity makes a $30\\degree$ angle with $\\vec B$. (c) What radius would a proton have at the same speed and field?',
        steps: [
          { label: 'Radius', text: '$r = mv/(eB) = (9.11\\times 10^{-31})(3.0\\times 10^{7})/[(1.602\\times 10^{-19})(1.0\\times 10^{-3})] = 2.73\\times 10^{-23}/1.60\\times 10^{-22} = 0.17$ m.' },
          { label: 'Period', text: '$T = 2\\pi m/(eB) = 2\\pi(9.11\\times 10^{-31})/1.60\\times 10^{-22} = 3.6\\times 10^{-8}$ s — a 28 GHz gyration, regardless of the speed.' },
          { label: 'At 30°', text: '$v_\\perp = v\\sin 30\\degree = 1.5\\times 10^{7}$ m/s gives $r = 0.085$ m (half); $v_{\\parallel} = v\\cos 30\\degree = 2.6\\times 10^{7}$ m/s gives pitch $p = v_{\\parallel}T = (2.6\\times 10^{7})(3.6\\times 10^{-8}) = 0.93$ m.' },
          { label: 'Proton', text: '$r_p = m_p v/(eB) = 1836\\,r_e = 1836(0.17) \\approx 3.1\\times 10^{2}$ m — the proton\u2019s inertia makes it nearly impossible to turn.' },
        ],
        result: '17 cm circles every 36 ns; tilted at 30°, a helix of radius 8.5 cm and pitch 0.93 m; a proton at the same speed needs a 310 m radius.',
      },
      {
        title: "A Circulating Charged Particle: cyclotron-radius check",
        problem: "An electron at $2.0\\times 10^6\\ \\text{m/s}$ enters $B = 1\\ \\text{T}$ perpendicularly. Find $r = mv/qB$.",
        steps: [
          { label: "Numerator", text: "$mv = 9.11\\times 10^{-31}\\times 2.0\\times 10^6 = 1.82\\times 10^{-24}$." },
          { label: "Denominator", text: "$qB = 1.60\\times 10^{-19}\\times 1 = 1.60\\times 10^{-19}$." },
          { label: "Radius", text: "$r \\approx 1.14\\times 10^{-5}\\ \\text{m}$ ($11.4\\ \\mu\\text{m}$)." },
        ],
        result: "$r \\approx 1.14\\times 10^{-5}\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      'Perpendicular motion: $qvB = mv^2/r$ gives $r = mv/(qB)$; faster is wider, stronger field is tighter.',
      'Period $T = 2\\pi m/(qB)$ — famously independent of speed and radius (nonrelativistically).',
      'Any parallel component turns the circle into a helix with pitch $p = v_{\\parallel}T$; converging fields reflect particles (magnetic mirrors).',
    ],
    quiz: [
      {
        q: 'A particle circles in a uniform magnetic field. If its speed doubles (staying perpendicular to $\\vec B$), the radius and period:',
        options: ['both double', 'radius doubles, period unchanged', 'both halve', 'radius unchanged, period doubles'],
        answer: 1,
        explanation: '$r = mv/qB \\propto v$, but $T = 2\\pi m/(qB)$ contains no $v$ at all.',
      },
      {
        q: 'In a 1.0 mT field, which particle has the larger orbit radius at the same speed?',
        options: ['the electron', 'the proton', 'equal radii', 'depends on charge sign'],
        answer: 1,
        explanation: '$r = mv/(qB)$ is proportional to mass; the proton is 1836 times heavier and its circle is 1836 times wider.',
      },
      {
        q: 'A charged particle moves at angle $\\theta$ to a uniform $\\vec B$. What sets the pitch of the helix?',
        options: [`$v\\sin\\theta$`, `$v\\cos\\theta$`, 'the field strength alone', 'the charge alone'],
        answer: 1,
        explanation: 'The parallel component $v_{\\parallel} = v\\cos\\theta$ is untouched by the field and advances the helix by $p = v_{\\parallel}T$ per turn.',
      },
      {
        q: 'While a particle spirals in a magnetic bottle, its total kinetic energy:',
        options: ['slowly increases', 'slowly decreases', 'stays constant', 'oscillates with the gyration'],
        answer: 2,
        explanation: 'The magnetic force is always perpendicular to the velocity and does no work; energy shuttles between parallel and rotational motion only as $B$ varies.',
      },
    ],
  },

  // ------------------------------------------------------------------ 28-4
  {
    sectionId: 'hall-ch28-s4',
    readingTime: 6,
    intro: "The speed-independence of the cyclotron period is an open invitation: accelerate a particle with an alternating voltage that stays in step with the circles, and the same little push, repeated tens of thousands of times, builds a giant energy. Ernest Lawrence saw it in 1929 and built the cyclotron; a billion dollars of descendants later, the LHC uses 27 kilometers of the same idea, corrected for relativity.",
    objectives: [
      'Explain the cyclotron: dees, the resonance condition $f = qB/(2\\pi m)$, and spiral acceleration',
      'Compute the final kinetic energy $K = q^2B^2R^2/(2m)$ and the number of revolutions needed',
      'Explain why relativity breaks the fixed-frequency cyclotron and how synchrotrons respond',
    ],
    concepts: [
      {
        term: 'The cyclotron principle',
        kind: 'method',
        statement: "**A charged particle lives inside two hollow conducting “dees” in a uniform field $B$. An alternating voltage across the dee gap, at the cyclotron frequency $f = qB/(2\\pi m)$, gives the particle a kick $q\\Delta V$ at every crossing — always in step, because $f$ does not depend on speed or radius. The orbit spirals outward to the extraction radius $R$.**",
        detail: 'Each crossing adds a fixed energy; the particle crosses the gap twice per revolution, so the energy grows in $2q\\Delta V$ steps until the dees\u2019 edge is reached.',
      },
      {
        term: 'Energy at extraction',
        kind: 'theorem',
        statement: "**The kinetic energy at radius $R$ follows from $r = mv/(qB)$ with $v = qBR/m$:** $$K = \\tfrac{1}{2}mv^2 = \\frac{q^2B^2R^2}{2m}.$$ The final energy depends on the field and the machine\u2019s size — not on the gap voltage, which only sets the number of turns needed.",
        detail: 'Doubling $B$ or $R$ doubles the final momentum; the energy quadruples. Small machines with superconducting magnets rival room-temperature giants.',
      },
      {
        term: 'Relativity breaks the resonance',
        kind: 'insight',
        statement: "**As $v$ approaches $c$, the particle\u2019s effective inertia grows as $\\gamma m$, the cyclotron frequency drops, and a fixed-frequency gap voltage falls out of step — the particle stops gaining energy.** Ordinary cyclotrons top out near 20–25 MeV for protons.",
        detail: 'The synchrocyclotron chirps its frequency downward to follow the slowing particle. The synchrotron goes further: it holds the radius fixed (the beam pipe is narrow and cheap) and ramps $B$ upward in step with the momentum, keeping $f$ synchronized too.',
      },
      {
        term: 'Synchrotrons',
        kind: 'insight',
        statement: "**Modern particle accelerators are rings of magnets with timed RF cavities: the LHC steers protons around 27 km at 6.8 TeV with superconducting magnets near 8 T.** The same machines, at softer energies, produce the synchrotron light that illuminates protein structures and chip masks.",
        detail: 'For scale: Lawrence\u2019s first cyclotron fit in a palm (80 keV); a proton therapy synchrotron now delivers 250 MeV beams to tumor sites; the LHC stores beams whose kinetic energy equals a 400 t train at 150 km/h.',
      },
      {
        term: "Cyclotrons and Synchrotrons: solution protocol",
        kind: "method",
        statement: "**Solve Cyclotrons and Synchrotrons problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is magnetic force on moving charge and current; the working equation is $\\vec F_B = q\\vec v\\times\\vec B$, $r = mv/qB$, $T = 2\\pi m/qB$, $\\vec\\tau = \\vec\\mu\\times\\vec B$; every substitution must carry its units so the final unit (tesla, meters, hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $r\\sim \\text{cm}$ for $\\text{eV}$--$\\text{keV}$ in tesla fields; uniform $\\vec B$, $v\\perp\\vec B$ for a circle; $\\vec F_B$ does no work.",
      },
    ],
    examples: [
      {
        title: 'A desktop cyclotron',
        problem: 'A small cyclotron has field $B = 1.5$ T and dee radius $R = 0.50$ m, accelerating protons. (a) What is the final kinetic energy? (b) At what frequency must the gap voltage oscillate? (c) With a gap voltage of $80$ kV (two kicks per turn), how many revolutions, and how long, does the acceleration take?',
        steps: [
          { label: 'Final energy', text: '$K = q^2B^2R^2/2m = \\dfrac{(1.602\\times 10^{-19})^2(1.5)^2(0.50)^2}{2(1.673\\times 10^{-27})} = \\dfrac{1.44\\times 10^{-38}}{3.35\\times 10^{-27}} = 4.3\\times 10^{-12}$ J.' },
          { label: 'Convert', text: '$K = 4.3\\times 10^{-12}/1.602\\times 10^{-19} = 2.7\\times 10^{7}$ eV $= 27$ MeV.' },
          { label: 'Frequency', text: '$f = qB/(2\\pi m) = (1.602\\times 10^{-19})(1.5)/[2\\pi(1.673\\times 10^{-27})] = 2.3\\times 10^{7}$ Hz $= 23$ MHz — shortwave radio.' },
          { label: 'Revolutions', text: 'Each turn adds $2q\\Delta V = 2(80\\ \\mathrm{keV}) = 160$ keV, so the proton needs $27{,}000/160 \\approx 170$ turns; at $T = 1/f = 44$ ns each, the whole ride takes about $7.5\\ \\mu$s.' },
        ],
        result: '27 MeV at 23 MHz, reached in roughly 170 turns over 7.5 microseconds.',
      },
      {
        title: "Cyclotrons and Synchrotrons: cyclotron-radius check",
        problem: "An electron at $2.0\\times 10^6\\ \\text{m/s}$ enters $B = 1.5\\ \\text{T}$ perpendicularly. Find $r = mv/qB$.",
        steps: [
          { label: "Numerator", text: "$mv = 9.11\\times 10^{-31}\\times 2.0\\times 10^6 = 1.82\\times 10^{-24}$." },
          { label: "Denominator", text: "$qB = 1.60\\times 10^{-19}\\times 1.5 = 2.40\\times 10^{-19}$." },
          { label: "Radius", text: "$r \\approx 7.58\\times 10^{-6}\\ \\text{m}$ ($7.58\\ \\mu\\text{m}$)." },
        ],
        result: "$r \\approx 7.58\\times 10^{-6}\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      'Cyclotrons exploit $f = qB/(2\\pi m)$ being speed-independent: a fixed RF frequency accelerates on every gap crossing.',
      'Extraction energy $K = q^2B^2R^2/2m$ — set by the magnet and the radius, not the gap voltage.',
      'Relativistic mass growth detunes the resonance; synchrotrons respond by ramping $B$ (and $f$) at fixed radius — the design of every modern collider.',
    ],
    quiz: [
      {
        q: 'The gap voltage in a cyclotron oscillates at the cyclotron frequency $f = qB/(2\\pi m)$, chosen because:',
        options: ['it maximizes the voltage', 'the period of the orbit is independent of the particle\u2019s speed, so the kicks always stay in step', 'it minimizes radiation', 'the dees resonate mechanically'],
        answer: 1,
        explanation: 'Nonrelativistically every orbit takes the same time regardless of radius — fixed-frequency pushing works.',
      },
      {
        q: 'The final kinetic energy of a cyclotron beam depends on:',
        options: ['the gap voltage', 'the field $B$ and the dee radius $R$', 'the frequency of the RF supply', 'the number of dees'],
        answer: 1,
        explanation: '$K = q^2B^2R^2/2m$; the gap voltage only changes how many turns are needed to get there.',
      },
      {
        q: 'A proton cyclotron is scaled up: $B$ doubled and $R$ doubled. The final energy grows by a factor of:',
        options: ['2', '4', '8', '16'],
        answer: 3,
        explanation: '$K \\propto B^2R^2$: doubling each of $B$ and $R$ multiplies $K$ by $4\\times 4 = 16$.',
      },
      {
        q: 'At high speeds a fixed-frequency cyclotron fails because:',
        options: ['the magnetic field decays', 'relativistic mass increase lowers the orbital frequency, desynchronizing the kicks', 'the proton charge changes', 'the dees melt'],
        answer: 1,
        explanation: '$f = qB/(2\\pi\\gamma m)$ falls as $\\gamma$ grows, so the particle arrives late at the gap and the pushes turn into brakes.',
      },
    ],
  },

  // ------------------------------------------------------------------ 28-5
  {
    sectionId: 'hall-ch28-s5',
    readingTime: 6,
    intro: "A wire carrying current is nothing but a parade of moving charges, so a magnetic field pushes on it exactly as it pushes on the individual carriers. Summing the microscopic forces gives one of the most useful formulas in technology — the force on a current-carrying wire — and with it, the working principle of loudspeakers, motors, and every device that turns electricity into motion.",
    objectives: [
      'Sum the carrier forces to obtain $d\\vec F = i\\,d\\vec L\\times\\vec B$ and $\\vec F = i\\vec L\\times\\vec B$',
      'Compute magnitudes $F = iLB\\sin\\phi$ and directions by the right-hand rule',
      'Use the chord shortcut for curved wires and the levitation condition',
    ],
    concepts: [
      {
        term: 'From charges to current',
        kind: 'method',
        statement: "**Each carrier feels $q\\vec v_d\\times\\vec B$; counting the carriers in an element of length ($nA\\,dL$ of them) gives the total force on the element:** $$d\\vec F = i\\,d\\vec L\\times\\vec B,$$ where $d\\vec L$ points along the conventional current. For a straight segment in a uniform field, $\\vec F = i\\vec L\\times\\vec B$, of magnitude $F = iLB\\sin\\phi$.**",
        detail: 'The drift speed and density cancel into the current: this is why the formula needs no microscopic quantities — the wire\u2019s net force is exactly the sum of its carriers\u2019 forces, lattice collisions relaying the push to the metal.',
      },
      {
        term: 'The chord shortcut',
        kind: 'insight',
        statement: "**In a uniform field, the force on a curved wire equals the force on the straight chord joining its endpoints:** $\\vec F = i\\,\\vec L_{\\mathrm{chord}}\\times\\vec B$, because $\\int d\\vec L$ around any curve between two fixed points is just the displacement vector.",
        detail: 'A semicircular loop in a uniform field feels exactly the force of its diameter — a favorite exam trap, and a quick way to see that a closed loop in a uniform field has zero net force.',
      },
      {
        term: 'Direction by right-hand rule',
        kind: 'method',
        statement: "**Point the fingers of the right hand along the current ($\\vec L$), curl them toward $\\vec B$; the thumb gives $\\vec F$.** Reverse the current or the field and the force flips.",
        detail: 'For geometry-free checks remember the extremes: wire parallel to $\\vec B$ feels nothing ($\\sin\\phi = 0$); wire perpendicular feels the maximum $iLB$.',
      },
      {
        term: 'Electromechanics',
        kind: 'insight',
        statement: "**A current-carrying wire in a field is the muscle of electromechanics: the voice coil of a loudspeaker (force $\\propto$ audio current), the rotor bars of motors, and rails that launch projectiles.** The condition for a wire to levitate is pure force balance: $iLB = mg$ with $\\vec F$ upward.",
        detail: 'The “jumping wire” demonstration — a stiff wire leaping out of a mercury trough between magnet poles — was one of the first electric motors, and the physics has not changed since.',
      },
      {
        term: "Magnetic Force on a Current-Carrying Wire: solution protocol",
        kind: "method",
        statement: "**Solve Magnetic Force on a Current-Carrying Wire problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is magnetic force on moving charge and current; the working equation is $\\vec F_B = q\\vec v\\times\\vec B$, $r = mv/qB$, $T = 2\\pi m/qB$, $\\vec\\tau = \\vec\\mu\\times\\vec B$; every substitution must carry its units so the final unit (tesla, meters, hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $r\\sim \\text{cm}$ for $\\text{eV}$--$\\text{keV}$ in tesla fields; uniform $\\vec B$, $v\\perp\\vec B$ for a circle; $\\vec F_B$ does no work.",
      },
    ],
    examples: [
      {
        title: 'Levitating a wire',
        problem: 'A horizontal wire of length $L = 0.50$ m and mass $m = 20$ g lies perpendicular to a horizontal field $B = 0.40$ T. What current (with what orientation) makes the wire float?',
        steps: [
          { label: 'Force needed', text: 'The wire must feel an upward magnetic force equal to its weight: $F = mg = (0.020)(9.8) = 0.196$ N.' },
          { label: 'Solve for current', text: 'With $\\vec L \\perp \\vec B$, $F = iLB$, so $i = F/(LB) = 0.196/[(0.50)(0.40)] = 0.98 \\approx 1.0$ A.' },
          { label: 'Orientation', text: 'The current must run horizontally and perpendicular to $\\vec B$, with the direction chosen (right-hand rule) so that $\\vec L\\times\\vec B$ points up — reversing the current drives the wire into the table.' },
        ],
        result: 'About 1.0 A, flowing perpendicular to the field with the sense fixed by the right-hand rule.',
      },
      {
        title: "Magnetic Force on a Current-Carrying Wire: cyclotron-radius check",
        problem: "An electron at $2.0\\times 10^6\\ \\text{m/s}$ enters $B = 0.5\\ \\text{T}$ perpendicularly. Find $r = mv/qB$.",
        steps: [
          { label: "Numerator", text: "$mv = 9.11\\times 10^{-31}\\times 2.0\\times 10^6 = 1.82\\times 10^{-24}$." },
          { label: "Denominator", text: "$qB = 1.60\\times 10^{-19}\\times 0.5 = 8.01\\times 10^{-20}$." },
          { label: "Radius", text: "$r \\approx 2.27\\times 10^{-5}\\ \\text{m}$ ($22.7\\ \\mu\\text{m}$)." },
        ],
        result: "$r \\approx 2.27\\times 10^{-5}\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      'Summing carrier forces gives $d\\vec F = i\\,d\\vec L\\times\\vec B$; a straight wire in a uniform field: $F = iLB\\sin\\phi$.',
      'In a uniform field a curved wire feels the force of its chord, so a closed loop has zero net force.',
      'Right-hand rule: fingers along the current, curl toward $\\vec B$, thumb is the force; levitation needs $iLB = mg$.',
    ],
    quiz: [
      {
        q: 'A straight wire carries 3.0 A perpendicular to a 0.40 T field. The force on a 0.20 m length is:',
        options: ['0.24 N', '2.4 N', '0.024 N', '24 N'],
        answer: 0,
        explanation: '$F = iLB = (3.0)(0.20)(0.40) = 0.24$ N.',
      },
      {
        q: 'A wire runs east; the field points north. The magnetic force on the current is directed:',
        options: ['east', 'north', 'vertically up', 'vertically down'],
        answer: 2,
        explanation: 'Right-hand rule with $\\vec L$ east and $\\vec B$ north: $\\vec L\\times\\vec B$ points up (out of the ground).',
      },
      {
        q: 'A wire bent into a semicircle sits in a uniform field perpendicular to its plane. The net force on it equals the force on:',
        options: ['zero — curved wires feel no force', 'a straight wire spanning the diameter', 'half the arc length', 'the full circle of the same wire'],
        answer: 1,
        explanation: 'In a uniform field $\\vec F = i(\\int d\\vec L)\\times\\vec B$, and the integral is the chord — the diameter.',
      },
      {
        q: 'The magnetic force on a current-carrying wire is largest when the wire is:',
        options: ['parallel to $\\vec B$', 'perpendicular to $\\vec B$', 'at 45° to $\\vec B$', 'carrying alternating current'],
        answer: 1,
        explanation: '$F = iLB\\sin\\phi$ is maximal at $\\phi = 90\\degree$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 28-6
  {
    sectionId: 'hall-ch28-s6',
    readingTime: 7,
    intro: "Take a loop of wire, hang it in a magnetic field, and turn on the current: the two sides of the loop are pushed in opposite directions, and the loop twists. Nothing simpler — and nothing more consequential, because this torque on a current loop is the working principle of every electric motor, every galvanometer, and (in atomic costume) of compass needles themselves.",
    objectives: [
      'Find the forces on each side of a current loop in a uniform field and combine them into a torque',
      'Apply $\\tau = NiAB\\sin\\phi$ with $\\phi$ the angle between the loop normal and $\\vec B$',
      'Explain the commutator\u2019s role in turning oscillation into continuous rotation',
    ],
    concepts: [
      {
        term: 'The force couple on a loop',
        kind: 'method',
        statement: "**In a uniform field, the two sides of a loop carrying current perpendicular to $\\vec B$ feel equal and opposite forces $F = iLB$; they add to zero net force but form a couple — a torque.** The other sides (current parallel to $\\vec B$) feel nothing that contributes torque.",
        detail: 'A couple\u2019s torque is the same about every axis, which is why the formula that follows depends only on the loop\u2019s area and orientation, not on where it pivots.',
      },
      {
        term: 'Torque on the loop',
        kind: 'theorem',
        statement: "**For a loop of $N$ turns, area $A = L\\cdot b$, current $i$, with its normal at angle $\\phi$ from $\\vec B$:** $$\\tau = NiAB\\sin\\phi.$$ It holds for any planar shape — only the area enters.",
        detail: 'Maximum torque at $\\phi = 90\\degree$ (plane of the loop parallel to $\\vec B$); zero at $\\phi = 0$ (normal aligned with the field). The derivation: force $NiLB$ on each side, lever arm $b\\sin\\phi$, product $NiAB\\sin\\phi$.',
      },
      {
        term: 'Zero net force, nonzero torque',
        kind: 'insight',
        statement: "**A closed current loop in a uniform magnetic field feels no net force at all — the field lines push its parts oppositely — but a torque that tries to line its magnetic face up with the field.** Only non-uniform fields translate loops (that is how magnets attract).",
        detail: 'This clean division — uniform fields rotate, non-uniform fields translate — recurs in dipole problems of every kind, electric as well as magnetic.',
      },
      {
        term: 'The motor principle',
        kind: 'insight',
        statement: "**Left alone, the loop swings until its normal aligns with $\\vec B$ and stops. A split-ring commutator reverses the current every half-turn, flipping the torque sign so rotation continues — the DC motor.**",
        detail: 'Brushes press against the rotating split ring to swap leads at the right moment; AC induction and synchronous motors achieve the same trick with rotating fields instead of contacts.',
      },
      {
        term: "Torque on a Current Loop: solution protocol",
        kind: "method",
        statement: "**Solve Torque on a Current Loop problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is magnetic force on moving charge and current; the working equation is $\\vec F_B = q\\vec v\\times\\vec B$, $r = mv/qB$, $T = 2\\pi m/qB$, $\\vec\\tau = \\vec\\mu\\times\\vec B$; every substitution must carry its units so the final unit (tesla, meters, hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $r\\sim \\text{cm}$ for $\\text{eV}$--$\\text{keV}$ in tesla fields; uniform $\\vec B$, $v\\perp\\vec B$ for a circle; $\\vec F_B$ does no work.",
      },
    ],
    figures: [
      {
        caption: 'Torque on a current loop. With $\\vec B$ horizontal, the loop\u2019s two side arms carry antiparallel currents and feel equal, opposite forces (one toward the viewer, one away) forming a couple. The torque $\\tau = NiAB\\sin\\phi$ rotates the normal $\\hat n$ toward $\\vec B$; the side length is $L$, the width $b$, so $A = Lb$.',
        svg: `<svg viewBox="0 0 720 380" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Current loop in a magnetic field with forces on its sides producing torque"><defs><marker id="torA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="70" y1="95" x2="635" y2="95" stroke="currentColor" stroke-width="1.6" opacity="0.25" marker-end="url(#torA)"/><line x1="70" y1="185" x2="635" y2="185" stroke="currentColor" stroke-width="1.6" opacity="0.25" marker-end="url(#torA)"/><line x1="70" y1="275" x2="635" y2="275" stroke="currentColor" stroke-width="1.6" opacity="0.25" marker-end="url(#torA)"/><text x="652" y="190" font-size="18" fill="currentColor" font-style="italic" opacity="0.75">B</text><polygon points="300,110 490,150 490,270 300,230" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/><line x1="300" y1="158" x2="300" y2="196" stroke="currentColor" stroke-width="3" marker-end="url(#torA)"/><text x="282" y="182" font-size="15" fill="currentColor" text-anchor="end" font-style="italic">i</text><line x1="490" y1="225" x2="490" y2="187" stroke="currentColor" stroke-width="3" marker-end="url(#torA)"/><text x="508" y="210" font-size="15" fill="currentColor" font-style="italic">i</text><line x1="385" y1="248" x2="422" y2="255.8" stroke="currentColor" stroke-width="3" marker-end="url(#torA)"/><text x="398" y="278" font-size="15" fill="currentColor" font-style="italic">i</text><line x1="405" y1="131" x2="368" y2="123.2" stroke="currentColor" stroke-width="3" marker-end="url(#torA)"/><text x="408" y="116" font-size="15" fill="currentColor" font-style="italic">i</text><line x1="300" y1="212" x2="240" y2="240" stroke="currentColor" stroke-width="4" marker-end="url(#torA)"/><text x="243" y="262" font-size="14" fill="currentColor" text-anchor="middle">F (toward you)</text><line x1="490" y1="205" x2="550" y2="175" stroke="currentColor" stroke-width="4" marker-end="url(#torA)"/><text x="565" y="170" font-size="14" fill="currentColor" text-anchor="middle">F (away from you)</text><line x1="395" y1="190" x2="490" y2="115" stroke="currentColor" stroke-width="3.5" marker-end="url(#torA)"/><text x="502" y="108" font-size="17" fill="currentColor" font-style="italic">μ</text><line x1="395" y1="190" x2="505" y2="190" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 5" opacity="0.6"/><path d="M 435,190 A 40 40 0 0 0 426.4,165.2" fill="none" stroke="currentColor" stroke-width="2"/><text x="450" y="181" font-size="16" fill="currentColor" font-style="italic">φ</text><path d="M 492,110 A 55 55 0 0 1 503,178" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#torA)"/><text x="528" y="148" font-size="19" fill="currentColor" font-style="italic">τ</text><text x="279" y="142" font-size="15" fill="currentColor" text-anchor="end" font-style="italic">L</text><text x="330" y="100" font-size="15" fill="currentColor" font-style="italic">b</text><text x="360" y="348" font-size="17" fill="currentColor" text-anchor="middle">τ = NiAB sinφ, with A = L·b</text><text x="360" y="370" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.85">the torque rotates μ toward B (φ shrinks toward 0)</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'A galvanometer coil',
        problem: 'A moving-coil galvanometer has $N = 100$ turns of area $A = 2.5\\ \\mathrm{cm^2}$ in a radial field $B = 0.50$ T, so the torque is always at its maximum ($\\phi = 90\\degree$). A hairspring resists with $\\tau_{\\mathrm{spring}} = \\kappa\\theta$, $\\kappa = 2.5\\times 10^{-4}\\ \\mathrm{N\\cdot m/rad}$. What current gives a full-scale deflection of $\\theta = 1.0$ rad (57°)?',
        steps: [
          { label: 'Magnetic torque', text: '$\\tau = NiAB\\sin 90\\degree = (100)(i)(2.5\\times 10^{-4})(0.50)(1) = 1.25\\times 10^{-2}\\, i$ N·m.' },
          { label: 'Spring balance', text: 'Set equal: $1.25\\times 10^{-2} i = \\kappa\\theta = (2.5\\times 10^{-4})(1.0)$, so $i = 2.5\\times 10^{-4}/1.25\\times 10^{-2} = 0.020$ A.' },
          { label: 'Design note', text: 'The radial (cylindrical-pole) field geometry is the trick that keeps $\\sin\\phi = 1$ for every needle position, making the scale linear in current.' },
        ],
        result: 'Full scale at 20 mA — with the linear scale promised by the radial field design.',
      },
      {
        title: "Torque on a Current Loop: cyclotron-radius check",
        problem: "An electron at $2.0\\times 10^6\\ \\text{m/s}$ enters $B = 1\\ \\text{T}$ perpendicularly. Find $r = mv/qB$.",
        steps: [
          { label: "Numerator", text: "$mv = 9.11\\times 10^{-31}\\times 2.0\\times 10^6 = 1.82\\times 10^{-24}$." },
          { label: "Denominator", text: "$qB = 1.60\\times 10^{-19}\\times 1 = 1.60\\times 10^{-19}$." },
          { label: "Radius", text: "$r \\approx 1.14\\times 10^{-5}\\ \\text{m}$ ($11.4\\ \\mu\\text{m}$)." },
        ],
        result: "$r \\approx 1.14\\times 10^{-5}\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      'A current loop in a uniform field feels zero net force but a torque $\\tau = NiAB\\sin\\phi$ ($\\phi$ between normal and $\\vec B$).',
      'The torque is maximum when the loop\u2019s plane is parallel to the field and zero when the normal aligns with it.',
      'Commutators reverse the current each half-turn, converting the aligning oscillation into continuous rotation — the DC motor.',
    ],
    quiz: [
      {
        q: 'Torque on a current loop is maximum when the angle between the loop\u2019s normal and $\\vec B$ is:',
        options: ['0°', '45°', '90°', '180°'],
        answer: 2,
        explanation: '$\\tau = NiAB\\sin\\phi$ peaks at $\\phi = 90\\degree$, i.e., when the loop\u2019s plane lies along the field.',
      },
      {
        q: 'A loop of 50 turns, area $10\\ \\mathrm{cm^2}$, carrying 2.0 A in a 0.10 T field with $\\vec n \\perp \\vec B$ feels a torque of:',
        options: ['$1.0\\times 10^{-3}$ N·m', '$1.0\\times 10^{-2}$ N·m', '0.10 N·m', '$1.0\\times 10^{-4}$ N·m'],
        answer: 1,
        explanation: '$\\tau = NiAB = (50)(2.0)(1.0\\times 10^{-3})(0.10) = 1.0\\times 10^{-2}\\ \\mathrm{N\\cdot m}$.',
      },
      {
        q: 'A closed current loop in a perfectly uniform magnetic field experiences:',
        options: ['net force and torque, generally both', 'no net force, but a torque', 'net force but no torque', 'neither force nor torque'],
        answer: 1,
        explanation: 'The forces on all sides cancel in sum (uniform field) but not in moment — pure torque, the motor\u2019s daily bread.',
      },
      {
        q: 'The function of a commutator in a DC motor is to:',
        options: ['strengthen the magnetic field', 'reverse the current every half-turn so the torque never changes sign', 'reduce friction', 'convert DC to AC for the brushes'],
        answer: 1,
        explanation: 'Without reversal the loop would oscillate to alignment and stop; with it, the torque keeps pushing rotation the same way.',
      },
    ],
  },

  // ------------------------------------------------------------------ 28-7
  {
    sectionId: 'hall-ch28-s7',
    readingTime: 6,
    intro: "The torque formula NiAB sinφ hides a small miracle: only the product of current and area ever appears — never the loop's shape. That observation promotes a current loop to a full vector quantity, the magnetic dipole moment, and the torque law becomes a single cross product. From there the formula escapes wires entirely and describes atoms, nuclei, and compass needles with equal ease.",
    objectives: [
      'Define the magnetic dipole moment $\\vec\\mu = NiA\\hat n$ and give its units',
      'Write the torque as $\\vec\\tau = \\vec\\mu\\times\\vec B$ and recover $\\muB\\sin\\phi$',
      'Explain why the dipole description applies to loops of any shape — and to atoms',
    ],
    concepts: [
      {
        term: 'Magnetic dipole moment',
        kind: 'definition',
        statement: "**A current loop of $N$ turns carrying current $i$ around area $A$ has magnetic dipole moment** $$\\vec\\mu = NiA\\,\\hat n,$$ where $\\hat n$ is the unit normal set by the right-hand rule: curl the fingers with the current and the thumb gives $\\hat n$. Units: $\\mathrm{A\\cdot m^2}$.",
        detail: 'The moment is the loop\u2019s entire magnetic identity as far as fields and torques go: a 10-turn, 5 cm², 0.4 A coil and a 1-turn, 20 cm², 0.5 A coil are indistinguishable dipoles.',
      },
      {
        term: 'Torque as a cross product',
        kind: 'theorem',
        statement: "**The torque of the previous section collapses to one line:** $$\\vec\\tau = \\vec\\mu\\times\\vec B, \\qquad |\\tau| = \\mu B\\sin\\phi,$$ with $\\phi$ the angle between $\\vec\\mu$ and $\\vec B$. The torque twists $\\vec\\mu$ toward alignment with $\\vec B$.",
        detail: 'Substituting $\\mu = NiA$ reproduces $\\tau = NiAB\\sin\\phi$ exactly; the vector form additionally gives the rotation axis (along $\\vec\\tau$) for free.',
      },
      {
        term: 'Shape does not matter',
        kind: 'insight',
        statement: "**Any planar loop with the same $NiA$ has the same dipole moment.** The proof tiles an arbitrary loop into many thin rectangular strips: interior sides cancel in pairs, leaving only the boundary, so only the enclosed area can enter.",
        detail: 'Even non-planar and microscopic loops qualify: an electron in an atom, circulating charge in a nucleus, a spinning charged sphere — each is a magnetic dipole with some $\\mu = iA$, which is exactly how atomic magnetism is modeled.',
      },
      {
        term: 'The dipole wants to align',
        kind: 'insight',
        statement: "**A magnetic dipole in a field is happiest (minimum energy, next section) when $\\vec\\mu \\parallel \\vec B$.** Randomly oriented dipoles in a field all feel torques toward alignment — the microscopic story of paramagnetism and of every compass on Earth.",
        detail: 'Anti-alignment ($\\phi = 180\\degree$) is an unstable equilibrium: the slightest nudge and the torque swings the dipole around.',
      },
      {
        term: "Torque on a Current Loop: the dipole: solution protocol",
        kind: "method",
        statement: "**Solve Torque on a Current Loop: the dipole problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is magnetic force on moving charge and current; the working equation is $\\vec F_B = q\\vec v\\times\\vec B$, $r = mv/qB$, $T = 2\\pi m/qB$, $\\vec\\tau = \\vec\\mu\\times\\vec B$; every substitution must carry its units so the final unit (tesla, meters, hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $r\\sim \\text{cm}$ for $\\text{eV}$--$\\text{keV}$ in tesla fields; uniform $\\vec B$, $v\\perp\\vec B$ for a circle; $\\vec F_B$ does no work.",
      },
    ],
    examples: [
      {
        title: 'Torque on a circular coil',
        problem: 'A circular coil of $N = 200$ turns, radius $2.0$ cm, carries current $i = 0.50$ A in a field $B = 0.10$ T. Find the dipole moment, the maximum torque, and the torque when the coil\u2019s normal makes $\\phi = 30\\degree$ with the field.',
        steps: [
          { label: 'Dipole moment', text: '$\\mu = NiA = N i\\pi r^2 = (200)(0.50)\\pi(0.020)^2 = 100\\pi(4.0\\times 10^{-4}) = 0.126\\ \\mathrm{A\\cdot m^2}$.' },
          { label: 'Maximum torque', text: '$\\tau_{\\max} = \\mu B = (0.126)(0.10) = 1.3\\times 10^{-2}\\ \\mathrm{N\\cdot m}$, at $\\phi = 90\\degree$.' },
          { label: 'At 30°', text: '$\\tau = \\mu B\\sin 30\\degree = (1.26\\times 10^{-2})(0.50) = 6.3\\times 10^{-3}\\ \\mathrm{N\\cdot m}$, directed along $\\vec\\mu\\times\\vec B$.' },
        ],
        result: '$\\mu = 0.126\\ \\mathrm{A\\cdot m^2}$; torque 13 mN·m at most, 6.3 mN·m at 30°.',
      },
      {
        title: "Torque on a Current Loop: the dipole: cyclotron-radius check",
        problem: "An electron at $2.0\\times 10^6\\ \\text{m/s}$ enters $B = 1.5\\ \\text{T}$ perpendicularly. Find $r = mv/qB$.",
        steps: [
          { label: "Numerator", text: "$mv = 9.11\\times 10^{-31}\\times 2.0\\times 10^6 = 1.82\\times 10^{-24}$." },
          { label: "Denominator", text: "$qB = 1.60\\times 10^{-19}\\times 1.5 = 2.40\\times 10^{-19}$." },
          { label: "Radius", text: "$r \\approx 7.58\\times 10^{-6}\\ \\text{m}$ ($7.58\\ \\mu\\text{m}$)." },
        ],
        result: "$r \\approx 7.58\\times 10^{-6}\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      'Dipole moment: $\\vec\\mu = NiA\\hat n$, normal set by the right-hand rule, in $\\mathrm{A\\cdot m^2}$.',
      'Torque: $\\vec\\tau = \\vec\\mu\\times\\vec B$ — one vector law replacing the loop-geometry bookkeeping.',
      'Only the product $NiA$ matters, so any planar loop — and any circulating charge, down to atomic orbits — is a magnetic dipole.',
    ],
    quiz: [
      {
        q: 'The SI unit of magnetic dipole moment is:',
        options: ['A·m²', 'A/m²', 'N·m', 'T·m²'],
        answer: 0,
        explanation: 'Current times area: $\\mu = NiA$ has units of amperes times square meters.',
      },
      {
        q: 'A loop lies in the xy-plane with current circulating counterclockwise as seen from +z. Its dipole moment points:',
        options: [`$-z$`, `$+z$`, `$+x$`, 'radially outward'],
        answer: 1,
        explanation: 'Curl the right hand with the counterclockwise current and the thumb points along $+z$.',
      },
      {
        q: 'A 100-turn loop of area $5.0\\ \\mathrm{cm^2}$ carrying 2.0 A has a dipole moment of:',
        options: ['$1.0\\times 10^{-2}$ A·m²', '$1.0\\times 10^{-4}$ A·m²', '0.10 A·m²', '1.0 A·m²'],
        answer: 0,
        explanation: '$\\mu = NiA = (100)(2.0)(5.0\\times 10^{-4}) = 1.0\\times 10^{-2}\\ \\mathrm{A\\cdot m^2}$.',
      },
      {
        q: 'Two loops carry currents in the same sense, one square of side $a$ and one circular of radius $a/2$ (same number of turns and current). Their dipole moments compare as:',
        options: ['square is larger by $4/\\pi$', 'circle is larger by $4/\\pi$', 'equal — same perimeter, same moment', 'equal — moments never depend on area'],
        answer: 0,
        explanation: '$\\mu \\propto A$: the square has $a^2$, the circle $\\pi a^2/4 \\approx 0.785a^2$, so the square wins by $4/\\pi \\approx 1.27$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 28-8
  {
    sectionId: 'hall-ch28-s8',
    readingTime: 7,
    intro: "A torque that always pushes a dipole toward alignment is a conservative force in disguise: it corresponds to a potential energy, and writing it down completes the magnetic dipole as a fully-fledged energy-storing object. The formula U = −μ·B is tiny in atoms but enormous in consequence — it is why compasses point north, why MRI machines see inside bodies, and why thermal agitation, not field strength, decides most questions of magnetism in matter.",
    objectives: [
      'Derive the potential energy $U = -\\vec\\mu\\cdot\\vec B$ from the work done against the torque',
      'Compute the work to rotate or flip a dipole in a field',
      'Compare magnetic alignment energy $\\mu B$ with thermal energy $k_BT$ for atomic dipoles',
    ],
    concepts: [
      {
        term: 'Potential energy of a dipole',
        kind: 'theorem',
        statement: "**The work an external agent does to rotate a dipole from $\\phi_i$ to $\\phi_f$ (at constant speed) is** $$W = \\int_{\\phi_i}^{\\phi_f} \\mu B\\sin\\phi\\,d\\phi = \\mu B(\\cos\\phi_i - \\cos\\phi_f) = U_f - U_i,$$ which identifies the potential energy $$U = -\\vec\\mu\\cdot\\vec B = -\\mu B\\cos\\phi.$$",
        detail: 'Minimum $U = -\\mu B$ at alignment ($\\phi = 0$), maximum $U = +\\mu B$ at anti-alignment ($\\phi = 180\\degree$); $U = 0$ at $\\phi = 90\\degree$ by convention.',
      },
      {
        term: 'The energy hill',
        kind: 'insight',
        statement: "**Flipping a dipole from aligned to anti-aligned costs $W = 2\\mu B$ — riding up the steepest energy hill a field offers a dipole.** Conversely, an anti-aligned dipole releases $2\\mu B$ when it snaps around.",
        detail: 'This is the energy a compass needle dumps as it swings north, and the energy barrier that magnetic recording must overcome (and, when writing, deliberately lower by heating) to flip a bit.',
      },
      {
        term: 'The Bohr magneton',
        kind: 'definition',
        statement: "**Atomic-scale moments come in a natural unit, the Bohr magneton** $$\\mu_B = \\frac{eh}{4\\pi m_e} = 9.27\\times 10^{-24}\\ \\mathrm{J/T},$$ the dipole moment of the electron\u2019s orbital motion in the ground state of hydrogen-sized atoms.",
        detail: 'Electron spins carry one $\\mu_B$ each; nuclear moments are a thousand times smaller (proton magnetic moment $2.79\\mu_N$ with $\\mu_N$ about $5.05\\times 10^{-27}\\ \\mathrm{J/T}$) — the mismatch behind MRI\u2019s sensitivity to hydrogen.',
      },
      {
        term: 'Magnetism vs thermal agitation',
        kind: 'insight',
        statement: "**Alignment competes with temperature: a field can order atomic dipoles only if $\\mu B \\gtrsim k_BT$.** In Earth\u2019s field ($50\\ \\mu$T), $\\mu_B B \\approx 4.6\\times 10^{-28}$ J versus $k_BT \\approx 4.1\\times 10^{-21}$ J at room temperature — a ratio of $10^{-7}$, so ordinary fields barely nudge atomic magnets; ferromagnetism and strong laboratory fields are needed.**",
        detail: 'A compass needle wins because its dipole moment ($\\sim 1\\ \\mathrm{A\\cdot m^2}$, some $10^{23}$ aligned atoms locked by quantum exchange) makes $\\mu B$ about $5\\times 10^{-5}$ J — comfortably dominant.',
      },
      {
        term: "The Magnetic Dipole Moment: solution protocol",
        kind: "method",
        statement: "**Solve The Magnetic Dipole Moment problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is magnetic force on moving charge and current; the working equation is $\\vec F_B = q\\vec v\\times\\vec B$, $r = mv/qB$, $T = 2\\pi m/qB$, $\\vec\\tau = \\vec\\mu\\times\\vec B$; every substitution must carry its units so the final unit (tesla, meters, hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $r\\sim \\text{cm}$ for $\\text{eV}$--$\\text{keV}$ in tesla fields; uniform $\\vec B$, $v\\perp\\vec B$ for a circle; $\\vec F_B$ does no work.",
      },
    ],
    examples: [
      {
        title: 'Flipping a coil and an atom',
        problem: '(a) The 200-turn, 2.0 cm-radius coil of Section 28-7 carries $i = 0.50$ A, giving $\\mu = 0.126\\ \\mathrm{A\\cdot m^2}$. How much work is needed to flip it from aligned to anti-aligned in $B = 0.10$ T? (b) Compare the alignment energy of a single atomic dipole ($\\mu_B = 9.27\\times 10^{-24}\\ \\mathrm{J/T}$) in the Earth\u2019s $50\\ \\mu$T field with thermal energy $k_BT$ at 300 K.',
        steps: [
          { label: 'Flip work', text: '$W = 2\\mu B = 2(0.126)(0.10) = 2.5\\times 10^{-2}$ J.' },
          { label: 'Atomic alignment energy', text: '$\\mu_B B = (9.27\\times 10^{-24})(5.0\\times 10^{-5}) = 4.6\\times 10^{-28}$ J.' },
          { label: 'Thermal energy', text: '$k_BT = (1.38\\times 10^{-23})(300) = 4.1\\times 10^{-21}$ J.' },
          { label: 'Verdict', text: 'Ratio $\\mu_BB/k_BT \\approx 1.1\\times 10^{-7}$: room-temperature jostling swamps atomic alignment a million times over — Earth\u2019s field cannot magnetize matter atom by atom; only cooperative (ferromagnetic) order can.' },
        ],
        result: 'The coil needs 25 mJ to flip; an atomic dipole in Earth\u2019s field holds $10^{-7}$ of $k_BT$ — magnetism vs heat is a landslide for heat.',
      },
      {
        title: "The Magnetic Dipole Moment: cyclotron-radius check",
        problem: "An electron at $2.0\\times 10^6\\ \\text{m/s}$ enters $B = 0.5\\ \\text{T}$ perpendicularly. Find $r = mv/qB$.",
        steps: [
          { label: "Numerator", text: "$mv = 9.11\\times 10^{-31}\\times 2.0\\times 10^6 = 1.82\\times 10^{-24}$." },
          { label: "Denominator", text: "$qB = 1.60\\times 10^{-19}\\times 0.5 = 8.01\\times 10^{-20}$." },
          { label: "Radius", text: "$r \\approx 2.27\\times 10^{-5}\\ \\text{m}$ ($22.7\\ \\mu\\text{m}$)." },
        ],
        result: "$r \\approx 2.27\\times 10^{-5}\\ \\text{m}$.",
      },
    ],
    keyTakeaways: [
      'Dipole potential energy: $U = -\\vec\\mu\\cdot\\vec B = -\\mu B\\cos\\phi$; stable at alignment, unstable at anti-alignment.',
      'Flipping from aligned costs $W = 2\\mu B$; rotating to perpendicular costs $\\mu B$.',
      'Atomic moments come in Bohr magnetons ($9.27\\times 10^{-24}$ J/T); field alignment beats temperature only when $\\mu B \\gtrsim k_BT$.',
    ],
    quiz: [
      {
        q: 'The potential energy of a magnetic dipole is lowest when:',
        options: [`$\\vec\\mu \\perp \\vec B$`, `$\\vec\\mu \\parallel \\vec B$`, `$\\vec\\mu$ anti-parallel to $\\vec B$`, 'the dipole is at 45°'],
        answer: 1,
        explanation: '$U = -\\mu B\\cos\\phi$ is most negative at $\\phi = 0$: alignment is the energy minimum.',
      },
      {
        q: 'A dipole with $\\mu = 0.50\\ \\mathrm{A\\cdot m^2}$ sits aligned in a $0.20$ T field. The work required to flip it anti-aligned is:',
        options: ['0.10 J', '0.20 J', '0.050 J', 'zero'],
        answer: 1,
        explanation: '$W = 2\\mu B = 2(0.50)(0.20) = 0.20$ J.',
      },
      {
        q: 'The Bohr magneton, the natural unit of atomic magnetic moments, equals about:',
        options: ['$9.3\\times 10^{-24}$ J/T', '$9.3\\times 10^{-19}$ J/T', '$1.6\\times 10^{-19}$ J/T', '$9.3\\times 10^{-28}$ J/T'],
        answer: 0,
        explanation: '$\\mu_B = eh/(4\\pi m_e) = 9.27\\times 10^{-24}\\ \\mathrm{J/T}$.',
      },
      {
        q: 'At room temperature, the alignment energy of an atomic dipole in the Earth\u2019s field compared with $k_BT$ is:',
        options: ['about equal', 'roughly a million times larger', 'roughly a million times smaller', 'exactly zero'],
        answer: 2,
        explanation: '$\\mu_B B/k_BT \\approx 10^{-7}$: thermal agitation overwhelms the tiny magnetic alignment — which is why strong fields or cooperative ferromagnetic order are needed to magnetize matter.',
      },
    ],
  },
]
