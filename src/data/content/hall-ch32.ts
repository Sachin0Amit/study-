import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 32
// Maxwell's Equations; Magnetism of Matter — sections 32-1 … 32-8
// (ids hall-ch32-s1 … hall-ch32-s8). Gauss' law for B, the Ampère–Maxwell law
// and displacement current, then the magnetism of matter: magnets, electrons,
// dia-, para- and ferromagnetism.
// ============================================================================

export const hallCh32Content: SectionContent[] = [
  // ------------------------------------------------------------------ 32-1
  {
    sectionId: 'hall-ch32-s1',
    readingTime: 6,
    intro: "Electrostatics reached its summit in Gauss' law, which counts electric charge by counting electric flux. Magnetism gets the same treatment here — and the answer is striking: the net magnetic flux through any closed surface is exactly zero, always. That single zero is Maxwell\'s second equation, and it encodes the deepest experimental fact about magnetism: no magnetic monopole has ever been found.",
    objectives: [
      "State Gauss' law for magnetic fields, $\\oint \\vec B\\cdot d\\vec A = 0$, and explain what the zero means",
      'Explain why magnetic field lines form closed loops and why cutting a magnet never isolates a pole',
      "Contrast the magnetic law with its electric partner, $\\varepsilon_0\\Phi_E = q_\\text{enc}$",
    ],
    concepts: [
      {
        term: "Gauss' law for magnetic fields",
        kind: 'law',
        statement: "**The net magnetic flux through any closed (Gaussian) surface is zero:** $$\\Phi_B = \\oint \\vec B\\cdot d\\vec A = 0,$$ no matter what magnets, currents, or magnetic materials sit inside the surface or around it.",
        detail: 'Magnetic flux is measured in webers (Wb), where $1\\ \\mathrm{Wb} = 1\\ \\mathrm{T\\cdot m^2}$. The law says the signed count of field lines entering equals the count leaving — for every closed surface, without exception.',
      },
      {
        term: 'No magnetic monopoles',
        kind: 'insight',
        statement: "**Magnetic field lines never begin or end on a single pole.** If a closed surface had net flux, lines would have to start or stop inside it on an isolated north or south charge — a magnetic monopole. None has ever been observed, despite intense searches; the strongest experiments set extremely small limits.",
      },
      {
        term: 'Field lines close on themselves',
        kind: 'insight',
        statement: '**Every magnetic field line is a closed loop.** Outside a magnet the lines run from the N pole to the S pole; inside the magnet they continue from S back to N. A line that enters any closed surface must leave it again — which is exactly why the net flux vanishes.',
      },
      {
        term: 'The electric–magnetic contrast',
        kind: 'insight',
        statement: "**Electric flux counts electric charge; magnetic flux counts nothing.** The pair of Gauss laws, $\\oint \\vec E\\cdot d\\vec A = q_\\text{enc}/\\varepsilon_0$ and $\\oint \\vec B\\cdot d\\vec A = 0$, states the asymmetry in one line: electric charge comes in two signs and can be isolated, magnetic charge comes in N–S pairs and cannot.",
      },
      {
        term: "Gauss' Law for Magnetic Fields: solution protocol",
        kind: "method",
        statement: "**Solve Gauss' Law for Magnetic Fields problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Maxwell's completion with displacement current and matter magnetism; the working equation is $\\oint\\vec B\\cdot d\\vec A = 0$, $i_d = \\varepsilon_0\\,d\\Phi_E/dt$, $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$; every substitution must carry its units so the final unit ($\\text{T}\\cdot\\text{m/A}$ and $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c$ from $\\mu_0\\varepsilon_0$; $\\chi\\sim 10^{-5}$ (dia/para) vs $10^3$ (ferro); vacuum form; matter needs $\\vec B = \\mu\\vec H$ with hysteresis.",
      },
    ],
    examples: [
      {
        title: 'A closed cylinder in a uniform field',
        problem: 'A uniform magnetic field of magnitude $B = 0.50$ T runs along the axis of a closed cylinder of radius $5.0$ cm. Find the flux through each part of the surface and the net flux.',
        steps: [
          { label: 'End caps', text: 'Each cap has area $A = \\pi r^2 = \\pi(0.050)^2 = 7.9\\times 10^{-3}\\ \\mathrm{m^2}$. The field is perpendicular to each cap: $|\\Phi| = BA = (0.50)(7.9\\times 10^{-3}) = 3.9\\times 10^{-3}\\ \\mathrm{Wb}$.' },
          { label: 'Signs', text: 'The outward normal of one cap points along $\\vec B$ and the other opposite: the fluxes are $+3.9\\times 10^{-3}$ Wb and $-3.9\\times 10^{-3}$ Wb.' },
          { label: 'Curved side', text: 'On the side, $\\vec B$ skims along the surface ($\\theta = 90^\\circ$ to the normal), so $\\vec B\\cdot d\\vec A = 0$ everywhere there.' },
          { label: 'Net', text: '$\\Phi_B = +3.9\\times 10^{-3} - 3.9\\times 10^{-3} + 0 = 0$ — as the law demands, whatever the field strength.' },
        ],
        result: 'Net flux through the closed cylinder is exactly zero: inflow through one cap is paid back as outflow through the other.',
      },
      {
        title: "Gauss' Law for Magnetic Fields: $c$ from constants",
        problem: "Verify $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ gives $2.998\\times 10^8\\ \\text{m/s}$.",
        steps: [
          { label: "Product", text: "$\\mu_0\\varepsilon_0 = 4\\pi\\times 10^{-7}\\times 8.85\\times 10^{-12} = 1.11\\times 10^{-17}$." },
          { label: "Root", text: "$\\sqrt{\\mu_0\\varepsilon_0} = 3.34\\times 10^{-9}\\ \\text{s/m}$." },
          { label: "Inverse", text: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$." },
        ],
        result: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      '$\\oint \\vec B\\cdot d\\vec A = 0$ for every closed surface: magnetic flux is a sourceless, conserved flow.',
      'No magnetic monopoles exist — every magnet is a dipole, and every field line closes on itself.',
      'The contrast with $\\oint \\vec E\\cdot d\\vec A = q_\\text{enc}/\\varepsilon_0$ is the second of Maxwell\u2019s four equations.',
    ],
    quiz: [
      {
        q: 'A Gaussian surface encloses one end of a bar magnet. The net magnetic flux through the surface is:',
        options: ['proportional to the pole strength', 'zero', 'positive', 'negative'],
        answer: 1,
        explanation: 'Every line from the N end that enters the surface returns through it to the S end: $\\oint \\vec B\\cdot d\\vec A = 0$.',
      },
      {
        q: 'Magnetic field lines:',
        options: ['begin on north poles and end on south poles', 'are closed loops', 'begin on positive charges', 'cannot pass through matter'],
        answer: 1,
        explanation: 'Lines continue through the interior of a magnet from S back to N; they never terminate — that is what zero net flux means.',
      },
      {
        q: 'A nonzero net magnetic flux through a closed surface would imply:',
        options: ['an enclosed magnetic monopole', 'an enclosed electric charge', 'a changing electric field', 'a violation of Faraday\u2019s law'],
        answer: 0,
        explanation: 'Net flux requires lines beginning or ending inside the surface, i.e. an isolated magnetic pole — never observed.',
      },
      {
        q: 'The SI unit of magnetic flux is the:',
        options: ['tesla', 'weber', 'henry', 'ampere'],
        answer: 1,
        explanation: '$1\\ \\mathrm{Wb} = 1\\ \\mathrm{T\\cdot m^2}$, the product behind every flux integral.',
      },
    ],
  },
  // ------------------------------------------------------------------ 32-2
  {
    sectionId: 'hall-ch32-s2',
    readingTime: 7,
    intro: "Faraday's law says a changing magnetic field induces an electric field — a circulation of E around the region where the flux changes. Maxwell noticed the missing partner: a changing electric field must induce a magnetic field, a circulation of B around the region where electric flux changes. Adding this term to Ampère\'s law completes it, and with the other three equations it will predict light itself.",
    objectives: [
      'State the Ampère–Maxwell law and identify both source terms for $\\vec B$',
      'Explain the symmetry between Faraday\u2019s law and the Ampère–Maxwell law',
      'Compute the induced $\\vec B$ inside the gap of a charging parallel-plate capacitor',
    ],
    concepts: [
      {
        term: 'Induced magnetic field',
        kind: 'definition',
        statement: "**A changing electric field induces a magnetic field.** The field lines of this induced $\\vec B$ encircle the region of changing electric flux — concentric circles around the axis of a charging capacitor's gap, with sense given by the right-hand rule applied exactly as to a conduction current along the axis.",
      },
      {
        term: 'The Ampère–Maxwell law',
        kind: 'law',
        statement: "**The circulation of $\\vec B$ around any closed loop is set by conduction current plus changing electric flux:** $$\\oint \\vec B\\cdot d\\vec s = \\mu_0 i_\\text{enc} + \\mu_0\\varepsilon_0\\,\\frac{d\\Phi_E}{dt}.$$ The first term is Ampère's law as Oersted and Ampère knew it; the second is Maxwell\'s addition.",
      },
      {
        term: 'Symmetry with Faraday\u2019s law',
        kind: 'insight',
        statement: "**Faraday: changing $\\vec B$ induces circulating $\\vec E$. Ampère–Maxwell: changing $\\vec E$ induces circulating $\\vec B$.** Each field circulation responds to the flux change of the other field. The pairing is the mathematical heart of the electromagnetic wave: each field can sustain the other in empty space.",
      },
      {
        term: 'Field inside a capacitor gap',
        kind: 'method',
        statement: "**Between circular plates of radius $R$ carrying current $i$, the induced field grows linearly with radius** $$B = \\frac{\\mu_0 i_d\\, r}{2\\pi R^2}\\quad (r \\le R),$$ mirroring the interior field of a current-carrying wire. Outside the gap ($r \\ge R$), $B = \\mu_0 i_d/(2\\pi r)$ exactly like the field of the wire.",
      },
      {
        term: "Induced Magnetic Fields: solution protocol",
        kind: "method",
        statement: "**Solve Induced Magnetic Fields problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Maxwell's completion with displacement current and matter magnetism; the working equation is $\\oint\\vec B\\cdot d\\vec A = 0$, $i_d = \\varepsilon_0\\,d\\Phi_E/dt$, $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$; every substitution must carry its units so the final unit ($\\text{T}\\cdot\\text{m/A}$ and $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c$ from $\\mu_0\\varepsilon_0$; $\\chi\\sim 10^{-5}$ (dia/para) vs $10^3$ (ferro); vacuum form; matter needs $\\vec B = \\mu\\vec H$ with hysteresis.",
      },
    ],
    examples: [
      {
        title: 'Induced B inside a charging capacitor',
        problem: "A parallel-plate capacitor with circular plates of radius $R = 5.0$ cm is charged by a constant current $i = 2.0$ A. Find the magnitude of $\\vec B$ at radius $r = 2.0$ cm between the plates.",
        steps: [
          { label: 'Choose the loop', text: 'Take an Amperian circle of radius $r = 2.0$ cm centered on the axis, lying in the gap. No conduction current pierces it, so only Maxwell\u2019s term survives: $B(2\\pi r) = \\mu_0\\varepsilon_0\\, d\\Phi_E/dt$.' },
          { label: 'Flux through the loop', text: 'The field is uniform over the plates, so the flux through the smaller circle is a fraction of the plate flux: $\\Phi_E = E\\pi r^2 = E\\pi R^2 (r^2/R^2)$, hence $d\\Phi_E/dt = (r^2/R^2)(i_d/\\varepsilon_0)$ with $i_d = i$.' },
          { label: 'Solve', text: '$B = \\mu_0 i r/(2\\pi R^2) = (4\\pi\\times 10^{-7})(2.0)(0.020)/(2\\pi\\times 0.050^2)$.' },
          { label: 'Evaluate', text: '$B = (2\\times 10^{-7})(0.040)/(2.5\\times 10^{-3}) = 3.2\\times 10^{-6}\\ \\mathrm{T}$, circling the axis with the same sense as the field around the wires.' },
        ],
        result: '$B = 3.2\\times 10^{-6}$ T — tiny but real, and it exists only while the field is changing.',
      },
      {
        title: "Induced Magnetic Fields: $c$ from constants",
        problem: "Verify $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ gives $2.998\\times 10^8\\ \\text{m/s}$.",
        steps: [
          { label: "Product", text: "$\\mu_0\\varepsilon_0 = 4\\pi\\times 10^{-7}\\times 8.85\\times 10^{-12} = 1.11\\times 10^{-17}$." },
          { label: "Root", text: "$\\sqrt{\\mu_0\\varepsilon_0} = 3.34\\times 10^{-9}\\ \\text{s/m}$." },
          { label: "Inverse", text: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$." },
        ],
        result: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      'Ampère–Maxwell law: $\\oint \\vec B\\cdot d\\vec s = \\mu_0 i_\\text{enc} + \\mu_0\\varepsilon_0 d\\Phi_E/dt$ — currents and changing electric flux both source $\\vec B$.',
      'Inside a capacitor gap the induced field is $B = \\mu_0 i_d r/(2\\pi R^2)$, the exact analogue of the field inside a wire.',
      'Faraday and Ampère–Maxwell form a symmetric pair: each field circulates around the other\u2019s flux change.',
    ],
    quiz: [
      {
        q: 'In the gap between the plates of a charging capacitor, the magnetic field is produced by:',
        options: ['the conduction current across the gap', 'the changing electric flux between the plates', 'magnetic poles on the plates', 'nothing — the field is zero in the gap'],
        answer: 1,
        explanation: 'No charge crosses the gap; the second term of the Ampère–Maxwell law, $\\mu_0\\varepsilon_0 d\\Phi_E/dt$, does the work.',
      },
      {
        q: 'As a function of radius inside the gap ($r < R$), the induced field magnitude B:',
        options: ['falls as $1/r$', 'falls as $1/r^2$', 'grows linearly with $r$', 'is constant'],
        answer: 2,
        explanation: '$B = \\mu_0 i_d r/(2\\pi R^2)$: only the flux inside radius $r$ counts, so the enclosed "displacement current" grows as $r^2$ while the path length grows as $r$.',
      },
      {
        q: 'The capacitor is now fully charged and disconnected (E constant in time). The B field in the gap is:',
        options: ['unchanged', 'doubled', 'zero', 'reversed in direction'],
        answer: 2,
        explanation: 'With $d\\Phi_E/dt = 0$ and no conduction current through the gap, the circulation of $\\vec B$ is zero — by symmetry, $\\vec B = 0$.',
      },
      {
        q: 'The Ampère–Maxwell law is the symmetric partner of which equation?',
        options: ["Gauss' law for $\\vec E$", "Gauss' law for $\\vec B$", "Faraday's law of induction", 'the Lorentz force law'],
        answer: 2,
        explanation: "Faraday: $\\oint \\vec E\\cdot d\\vec s = -d\\Phi_B/dt$. Ampère–Maxwell: $\\oint \\vec B\\cdot d\\vec s = \\mu_0 i_\\text{enc} + \\mu_0\\varepsilon_0 d\\Phi_E/dt$. Circulation against the other field\u2019s flux change.",
      },
    ],
  },
  // ------------------------------------------------------------------ 32-3
  {
    sectionId: 'hall-ch32-s3',
    readingTime: 6,
    intro: "Maxwell's extra term has the units of a current, and he named it the displacement current: $i_d = \\varepsilon_0\\, d\\Phi_E/dt$. Across the empty gap of a capacitor it exactly matches the conduction current in the wires, so the total current piercing any surface is the same — Ampère\'s law becomes unambiguous. With this fix, electromagnetism is complete in four equations.",
    objectives: [
      'Define displacement current and compute it for a changing uniform field',
      'Explain how $i_d$ repairs the surface-choice ambiguity of Ampère\u2019s law',
      'State all four of Maxwell\u2019s equations',
    ],
    concepts: [
      {
        term: 'Displacement current',
        kind: 'definition',
        statement: "**The displacement current is the changing electric flux scaled by $\\varepsilon_0$:** $$i_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt},$$ measured in amperes. In a charging capacitor it equals the conduction current in the leads, even though no charge crosses the gap.",
        detail: 'The name is historical — Maxwell coined it from the "displacement" of charge in dielectrics — but the term exists even in perfect vacuum, where nothing at all is displaced.',
      },
      {
        term: 'The surface-choice repair',
        kind: 'insight',
        statement: "**Ampère's law without Maxwell\'s term depends on which surface you span across the loop.** Around a capacitor lead, a flat surface cuts the wire (encloses $i$), while a bulging surface slips through the gap (encloses $i_c = 0$) — different answers, a fatal flaw for a fundamental law. With $i_d$ counted, both surfaces give the same total: $i + 0 = 0 + i_d$.",
      },
      {
        term: 'Maxwell\u2019s equations',
        kind: 'theorem',
        statement: "**The complete classical theory in four lines:** $$\\oint \\vec E\\cdot d\\vec A = \\frac{q_\\text{enc}}{\\varepsilon_0} \\quad \\text{(Gauss for E)}$$ $$\\oint \\vec B\\cdot d\\vec A = 0 \\quad \\text{(Gauss for B)}$$ $$\\oint \\vec E\\cdot d\\vec s = -\\frac{d\\Phi_B}{dt} \\quad \\text{(Faraday)}$$ $$\\oint \\vec B\\cdot d\\vec s = \\mu_0 i_\\text{enc} + \\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt} \\quad \\text{(Ampère–Maxwell)}$$ Together with $\\vec F = q(\\vec E + \\vec v\\times\\vec B)$, they account for all of classical electromagnetism.",
      },
      {
        term: 'Why the fix matters',
        kind: 'insight',
        statement: '**With the displacement current included, Maxwell\u2019s equations admit wave solutions in vacuum traveling at speed $1/\\sqrt{\\mu_0\\varepsilon_0} = 3.00\\times 10^8$ m/s — the measured speed of light.** That identification is the subject of the next chapter, and it is why the modest bookkeeping term $i_d$ is one of physics\u2019 great moments.',
      },
      {
        term: "Displacement Current: solution protocol",
        kind: "method",
        statement: "**Solve Displacement Current problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Maxwell's completion with displacement current and matter magnetism; the working equation is $\\oint\\vec B\\cdot d\\vec A = 0$, $i_d = \\varepsilon_0\\,d\\Phi_E/dt$, $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$; every substitution must carry its units so the final unit ($\\text{T}\\cdot\\text{m/A}$ and $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c$ from $\\mu_0\\varepsilon_0$; $\\chi\\sim 10^{-5}$ (dia/para) vs $10^3$ (ferro); vacuum form; matter needs $\\vec B = \\mu\\vec H$ with hysteresis.",
      },
    ],
    examples: [
      {
        title: 'Displacement current between plates',
        problem: 'The electric field between circular capacitor plates of area $A = 0.50\\ \\mathrm{m^2}$ increases uniformly at $1.0\\times 10^{12}\\ \\mathrm{V/(m\\cdot s)}$. Find the displacement current.',
        steps: [
          { label: 'Set up the flux', text: 'The field is uniform and perpendicular to the plates, so $\\Phi_E = EA$ and $d\\Phi_E/dt = A\\, dE/dt$.' },
          { label: 'Compute', text: '$i_d = \\varepsilon_0 A\\, dE/dt = (8.85\\times 10^{-12})(0.50)(1.0\\times 10^{12})$.' },
          { label: 'Evaluate', text: '$i_d = 4.4\\ \\mathrm{A}$ — the gap behaves, for purposes of the magnetic field, like a wire carrying 4.4 A.' },
          { label: 'Check the meaning', text: 'The leads must carry exactly this current to change the field at this rate: $i_d = i$, the conduction current in the circuit.' },
        ],
        result: '$i_d = 4.4$ A, equal to the charging current in the wires.',
      },
      {
        title: "Displacement Current: $c$ from constants",
        problem: "Verify $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ gives $2.998\\times 10^8\\ \\text{m/s}$.",
        steps: [
          { label: "Product", text: "$\\mu_0\\varepsilon_0 = 4\\pi\\times 10^{-7}\\times 8.85\\times 10^{-12} = 1.11\\times 10^{-17}$." },
          { label: "Root", text: "$\\sqrt{\\mu_0\\varepsilon_0} = 3.34\\times 10^{-9}\\ \\text{s/m}$." },
          { label: "Inverse", text: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$." },
        ],
        result: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      'Displacement current: $i_d = \\varepsilon_0 d\\Phi_E/dt$ — amperes of "current" carried by a changing field, even in vacuum.',
      'It makes the Ampère–Maxwell law surface-independent: conduction plus displacement current through any spanning surface is the same.',
      'Maxwell\u2019s four equations are now complete; together they predict electromagnetic waves at speed $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$.',
    ],
    quiz: [
      {
        q: 'The displacement current between capacitor plates is "equal" to the conduction current in the wires in the sense that:',
        options: ['charges hop the gap at the same rate', 'both produce the same total current through any surface spanning a loop around the circuit', 'the wire current is induced by the gap current', 'the two currents flow in opposite directions'],
        answer: 1,
        explanation: 'No charge crosses the gap; the equality $i_d = i$ is what makes the Ampère–Maxwell law give the same $\\vec B$ for every spanning surface.',
      },
      {
        q: 'A charged capacitor is discharging. Compared to the charging case with the same current magnitude, the induced B in the gap:',
        options: ['is unchanged', 'reverses direction, because $d\\Phi_E/dt$ has reversed sign', 'doubles', 'vanishes'],
        answer: 1,
        explanation: 'The field is decreasing now, so $d\\Phi_E/dt < 0$ and the circulation — hence the sense of the circling $\\vec B$ — reverses.',
      },
      {
        q: 'Which of Maxwell\u2019s four equations did Maxwell himself modify?',
        options: ["Gauss' law for $\\vec E$", "Gauss' law for $\\vec B$", "Faraday's law", "Ampère\'s law"],
        answer: 3,
        explanation: 'He added $\\mu_0\\varepsilon_0\\, d\\Phi_E/dt$ to Ampère\u2019s law; the other three he inherited intact.',
      },
      {
        q: 'The displacement current has SI units of:',
        options: ['volt', 'weber', 'ampere', 'watt'],
        answer: 2,
        explanation: '$\\varepsilon_0\\, d\\Phi_E/dt$ multiplies (C/V·m) by (V·m/s): C/s = ampere.',
      },
    ],
  },
  // ------------------------------------------------------------------ 32-4
  {
    sectionId: 'hall-ch32-s4',
    readingTime: 5,
    intro: "Matter responds to magnetic fields in ways that range from imperceptible to dramatic. Before sorting materials into diamagnetic, paramagnetic and ferromagnetic, the vocabulary of ordinary magnets must be exact: poles that always come in pairs, the Earth as a giant dipole whose compass we have trusted for a thousand years, and the short list of elements that are strongly magnetic at room temperature.",
    objectives: [
      'Describe magnetic poles, their pairing, and the forces between them',
      'Explain how a compass maps Earth\u2019s field and why the geographic north pole is magnetically a south pole',
      'List the ferromagnetic elements at room temperature',
    ],
    concepts: [
      {
        term: 'Magnetic poles',
        kind: 'definition',
        statement: "**Every magnet has a north pole (field lines emerge) and a south pole (field lines enter).** Like poles repel, unlike poles attract — the same two-rule pattern as electric charges. But unlike electric charge, an isolated pole of one sign has never been produced or found.",
      },
      {
        term: 'Cutting a magnet',
        kind: 'insight',
        statement: '**Slice a bar magnet in half and you get two complete, weaker magnets, each with both poles.** Subdivide forever and the pieces remain dipoles, down to single atoms and electrons — magnetism is not a "pole substance" stored in the ends but a property of circulating and spinning charge throughout the material.',
      },
      {
        term: 'Earth as a magnet',
        kind: 'insight',
        statement: "**Earth is a giant magnet of internal origin** (convection currents in the molten iron outer core), with surface fields of roughly $2.5\\times 10^{-5}$ to $6.5\\times 10^{-5}$ T. The pole near geographic north is magnetically a *south* pole — which is why the north-seeking end of a compass needle points toward it. The magnetic poles drift and occasionally reverse over geologic time.",
      },
      {
        term: 'The ferromagnetic elements',
        kind: 'definition',
        statement: "**Only iron, nickel and cobalt are ferromagnetic at room temperature** (gadolinium joins them just below room temperature, dysprosium only when much colder). Countless alloys and compounds are strongly magnetic, but the elemental list is remarkably short — a hint that ferromagnetism is a subtle collective quantum effect, not a generic property of matter.",
      },
      {
        term: "Magnets: solution protocol",
        kind: "method",
        statement: "**Solve Magnets problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Maxwell's completion with displacement current and matter magnetism; the working equation is $\\oint\\vec B\\cdot d\\vec A = 0$, $i_d = \\varepsilon_0\\,d\\Phi_E/dt$, $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$; every substitution must carry its units so the final unit ($\\text{T}\\cdot\\text{m/A}$ and $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c$ from $\\mu_0\\varepsilon_0$; $\\chi\\sim 10^{-5}$ (dia/para) vs $10^3$ (ferro); vacuum form; matter needs $\\vec B = \\mu\\vec H$ with hysteresis.",
      },
    ],
    examples: [
      {
        title: 'Reading Earth\u2019s field',
        problem: 'In the northeastern United States the magnetic field has magnitude $54\\ \\mu$T and points northward but $68^\\circ$ below the horizontal. Find the horizontal (compass) and vertical components.',
        steps: [
          { label: 'Resolve', text: 'The horizontal component is $B_h = B\\cos 68^\\circ = (54)(0.375)$.' },
          { label: 'Evaluate', text: '$B_h = 20\\ \\mu$T — this is what the compass needle responds to.' },
          { label: 'Vertical', text: '$B_v = B\\sin 68^\\circ = (54)(0.927) = 50\\ \\mu$T, pointing into the ground (the field dips downward throughout the northern hemisphere).' },
          { label: 'Note', text: 'The dip angle is why a pivoted needle free to tilt would point $68^\\circ$ below horizontal there.' },
        ],
        result: '$B_h = 20\\ \\mu$T for the compass, $B_v = 50\\ \\mu$T into the ground.',
      },
      {
        title: "Magnets: $c$ from constants",
        problem: "Verify $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ gives $2.998\\times 10^8\\ \\text{m/s}$.",
        steps: [
          { label: "Product", text: "$\\mu_0\\varepsilon_0 = 4\\pi\\times 10^{-7}\\times 8.85\\times 10^{-12} = 1.11\\times 10^{-17}$." },
          { label: "Root", text: "$\\sqrt{\\mu_0\\varepsilon_0} = 3.34\\times 10^{-9}\\ \\text{s/m}$." },
          { label: "Inverse", text: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$." },
        ],
        result: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      'Poles come in N–S pairs only; cutting a magnet yields two complete dipoles, never a monopole.',
      'The geographic north of Earth sits near a magnetic south pole — that is what the compass needle\u2019s north-seeking end attracts.',
      'At room temperature only iron, nickel and cobalt are ferromagnetic.',
    ],
    quiz: [
      {
        q: 'A bar magnet is cut in half. Each piece:',
        options: ['is a complete magnet with both poles', 'has only a north pole', 'has only a south pole', 'is demagnetized'],
        answer: 0,
        explanation: 'Magnetic poles cannot be isolated: each half is a weaker but complete dipole.',
      },
      {
        q: 'The pole of Earth near geographic north must be magnetically a south pole because:',
        options: ['it attracts the south ends of compasses', 'it attracts the north-seeking end of a compass needle', 'magnetic field lines circle Earth westward', 'it repels both ends of a compass'],
        answer: 1,
        explanation: 'The needle\u2019s north end points there, and attraction means opposite poles — so the Earth pole there is south.',
      },
      {
        q: 'Which element is not ferromagnetic at room temperature?',
        options: ['iron', 'cobalt', 'gadolinium', 'copper'],
        answer: 3,
        explanation: 'Copper is diamagnetic; gadolinium is ferromagnetic slightly below room temperature, and iron and cobalt well above it.',
      },
      {
        q: 'In the northern hemisphere, Earth\u2019s field points:',
        options: ['horizontally northward everywhere', 'northward and upward', 'northward and downward into the ground', 'vertically downward everywhere'],
        answer: 2,
        explanation: 'Field lines dive into the magnetic south pole region near geographic north — the field dips below the horizontal.',
      },
    ],
  },
  // ------------------------------------------------------------------ 32-5
  {
    sectionId: 'hall-ch32-s5',
    readingTime: 7,
    intro: "Where does the magnetism of materials come from? From electrons: each one carries an orbital magnetic moment set by its motion around the nucleus and a spin magnetic moment that is pure quantum mechanics. Both come in natural units of the Bohr magneton, and whether a material is dia-, para- or ferromagnetic is decided by how these atomic moments answer an applied field — and whether thermal noise lets them answer at all.",
    objectives: [
      'Relate the orbital and spin moments of an electron to its angular momentum',
      'Use the Bohr magneton as the atomic unit of magnetic moment',
      'Compare magnetic alignment energy with thermal energy $k_B T$',
    ],
    concepts: [
      {
        term: 'Orbital magnetic dipole moment',
        kind: 'definition',
        statement: "**An electron in orbit is a current loop with dipole moment** $$\\vec\\mu_\\text{orb} = -\\frac{e}{2m}\\,\\vec L,$$ of magnitude $\\mu_\\text{orb} = evr/2$ for a circular orbit of radius $r$ and speed $v$. Because the electron\u2019s charge is negative, $\\vec\\mu_\\text{orb}$ points *opposite* to the orbital angular momentum $\\vec L$.",
      },
      {
        term: 'Spin magnetic dipole moment',
        kind: 'definition',
        statement: "**Electron spin adds a moment twice as large per unit angular momentum:** $\\vec\\mu_s$ is antiparallel to $\\vec S$ with $\\mu_s = (e/m)S$. Quantum mechanics restricts the spin to two orientations along any chosen axis — 'up' and 'down' — with $S_z = \\pm h/4\\pi$, even though nothing is literally spinning.",
      },
      {
        term: 'Bohr magneton',
        kind: 'definition',
        statement: "**The natural quantum of magnetic moment:** $$\\mu_B = \\frac{eh}{4\\pi m} = 9.27\\times 10^{-24}\\ \\mathrm{J/T}.$$ Every orbital and spin moment of an electron — and hence the magnetization of every material — is an integer or half-integer multiple of this number.",
      },
      {
        term: 'A moment in a field',
        kind: 'theorem',
        statement: "**The potential energy of orientation is** $$U = -\\vec\\mu\\cdot\\vec B = -\\mu B\\cos\\theta.$$ Flipping an electron spin from antiparallel to parallel to a field $B$ costs $\\Delta U = 2\\mu_B B$ — the Zeeman splitting between the two spin orientations.",
      },
      {
        term: 'Magnetization',
        kind: 'definition',
        statement: "**The magnetization of a sample is its net dipole moment per unit volume,** $M = \\mu_\\text{net}/V$, in A/m. Zero for most materials in zero field; an applied field competes with thermal agitation to align the moments, and the outcome (next three sections) sorts matter into its three magnetic personalities.",
      },
    ],
    examples: [
      {
        title: 'Atomic magnetism versus thermal noise',
        problem: '(a) Find the orbital magnetic moment of the electron in the $n = 1$ Bohr orbit ($r = 5.29\\times 10^{-11}$ m, $v = 2.19\\times 10^6$ m/s). (b) How does the spin-flip energy in a strong $2.0$ T laboratory field compare with thermal energy at 300 K?',
        steps: [
          { label: 'Orbital moment', text: '$\\mu = evr/2 = (1.60\\times 10^{-19})(2.19\\times 10^6)(5.29\\times 10^{-11})/2 = 9.28\\times 10^{-24}$ J/T.' },
          { label: 'Recognize it', text: 'That is one Bohr magneton to the accuracy of the input data — the Bohr magneton is literally built from this orbit.' },
          { label: 'Flip energy', text: '$\\Delta U = 2\\mu_B B = 2(9.27\\times 10^{-24})(2.0) = 3.7\\times 10^{-23}$ J.' },
          { label: 'Thermal scale', text: '$k_B T = (1.38\\times 10^{-23})(300) = 4.1\\times 10^{-21}$ J, about 110 times larger.' },
        ],
        result: 'Even a 2 T field aligns atomic moments only weakly at room temperature — thermal agitation wins by two orders of magnitude, which is why ordinary magnetism is subtle.',
      },
      {
        title: "Magnetism and Electrons: $c$ from constants",
        problem: "Verify $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ gives $2.998\\times 10^8\\ \\text{m/s}$.",
        steps: [
          { label: "Product", text: "$\\mu_0\\varepsilon_0 = 4\\pi\\times 10^{-7}\\times 8.85\\times 10^{-12} = 1.11\\times 10^{-17}$." },
          { label: "Root", text: "$\\sqrt{\\mu_0\\varepsilon_0} = 3.34\\times 10^{-9}\\ \\text{s/m}$." },
          { label: "Inverse", text: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$." },
        ],
        result: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      '$\\vec\\mu_\\text{orb} = -(e/2m)\\vec L$ and $\\vec\\mu_s = -(e/m)\\vec S$: both antiparallel to angular momentum because the electron is negative.',
      'The Bohr magneton $\\mu_B = 9.27\\times 10^{-24}$ J/T sets the scale of all atomic magnetism.',
      'Alignment energy $2\\mu_B B$ versus $k_B T$: their tiny ratio at room temperature explains the weakness of para- and diamagnetism.',
    ],
    quiz: [
      {
        q: 'The orbital magnetic moment of an electron points opposite to its orbital angular momentum because:',
        options: ['the orbit is elliptical', 'the electron charge is negative', 'angular momentum is conserved', 'the nucleus screens the field'],
        answer: 1,
        explanation: 'Current direction is opposite to the electron\u2019s motion, so the right-hand rule for $\\vec L$ and for $\\vec\\mu$ give opposite results.',
      },
      {
        q: 'Flipping an electron spin from antiparallel to parallel in field B changes its energy by:',
        options: [`$\\mu_B B$`, `$2\\mu_B B$`, `$4\\mu_B B$`, 'zero'],
        answer: 1,
        explanation: '$U = -\\mu B\\cos\\theta$ changes from $+\\mu_B B$ to $-\\mu_B B$: a swing of $2\\mu_B B$.',
      },
      {
        q: 'At 300 K in a 1.0 T field, the ratio $\\mu_B B/k_B T$ is about:',
        options: [`$2\\times 10^{-3}$`, '0.5', '22', `$10^{3}$`],
        answer: 0,
        explanation: '$(9.27\\times 10^{-24})/(4.14\\times 10^{-21}) \\approx 2.2\\times 10^{-3}$ — about 0.2 percent net alignment.',
      },
      {
        q: 'The Bohr magneton is closest to:',
        options: ['$10^{-19}$ J/T', '$10^{-23}$ J/T', '$10^{-27}$ J/T', '$10^{-31}$ J/T'],
        answer: 1,
        explanation: '$\\mu_B = 9.27\\times 10^{-24}$ J/T, i.e. of order $10^{-23}$ J/T.',
      },
    ],
  },
  // ------------------------------------------------------------------ 32-6
  {
    sectionId: 'hall-ch32-s6',
    readingTime: 5,
    intro: "In most atoms the orbital and spin moments of paired electrons cancel exactly, leaving no permanent moment. Apply a field anyway and the orbital motion readjusts — always so as to oppose the change. That is diamagnetism: the weakest, universal, and always negative response of matter to magnetism.",
    objectives: [
      'Explain the induced-moment mechanism and why it opposes the applied field',
      'Characterize diamagnetic susceptibility (small and negative) and its effect on the internal field',
      'Describe the perfect diamagnetism of superconductors',
    ],
    concepts: [
      {
        term: 'Diamagnetic response',
        kind: 'definition',
        statement: "**Atoms with no permanent moment acquire an induced moment antiparallel to the applied field.** The susceptibility is negative and tiny — typically $|\\chi| \\sim 10^{-5}$ — so the field inside a diamagnetic sample is very slightly *less* than the applied field, and the sample is feebly repelled from regions of stronger field.",
      },
      {
        term: 'Why antiparallel',
        kind: 'insight',
        statement: '**It is Lenz\u2019s law at atomic scale.** When the flux through an electron\u2019s orbit changes, Faraday\u2019s induced electric field changes the orbital speed in just the direction whose extra magnetic moment opposes the flux change. The minus sign of Faraday\u2019s law is inherited by the induced moment.',
      },
      {
        term: 'Weak but universal',
        kind: 'insight',
        statement: '**Every material is diamagnetic.** In copper, water, gold and bismuth it is the only response; bismuth is the classic strong case with $\\chi \\approx -1.7\\times 10^{-4}$, still feeble. In para- and ferromagnets the diamagnetic contribution is present but swamped by much larger effects.',
      },
      {
        term: 'Superconductors: perfect diamagnets',
        kind: 'insight',
        statement: '**A superconductor has $\\chi = -1$: it expels magnetic field from its interior entirely** (the Meissner effect). Surface currents flow that produce a magnetization exactly cancelling the applied field inside — the physics behind the dramatic levitation of a magnet above a superconducting dish.',
      },
      {
        term: "Diamagnetism: solution protocol",
        kind: "method",
        statement: "**Solve Diamagnetism problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Maxwell's completion with displacement current and matter magnetism; the working equation is $\\oint\\vec B\\cdot d\\vec A = 0$, $i_d = \\varepsilon_0\\,d\\Phi_E/dt$, $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$; every substitution must carry its units so the final unit ($\\text{T}\\cdot\\text{m/A}$ and $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c$ from $\\mu_0\\varepsilon_0$; $\\chi\\sim 10^{-5}$ (dia/para) vs $10^3$ (ferro); vacuum form; matter needs $\\vec B = \\mu\\vec H$ with hysteresis.",
      },
    ],
    examples: [
      {
        title: 'Magnetization of a superconductor',
        problem: 'A superconducting slab sits in a uniform applied field $B_\\text{app} = 1.5\\times 10^{-2}$ T. What magnetization must its surface currents produce?',
        steps: [
          { label: 'Condition inside', text: 'Perfect diamagnetism means the net field inside is zero: $B_\\text{in} = B_\\text{app} + \\mu_0 M = 0$.' },
          { label: 'Solve for M', text: '$M = -B_\\text{app}/\\mu_0 = -(1.5\\times 10^{-2})/(4\\pi\\times 10^{-7})$.' },
          { label: 'Evaluate', text: '$M = -1.2\\times 10^{4}$ A/m — a large magnetization sustained by lossless supercurrents.' },
          { label: 'Contrast', text: 'An ordinary diamagnet with $\\chi = -10^{-5}$ would need $M \\sim -10^{-5}\\, B/\\mu_0$: nine orders of magnitude weaker.' },
        ],
        result: '$M = -1.2\\times 10^{4}$ A/m, exactly cancelling the interior field.',
      },
      {
        title: "Diamagnetism: $c$ from constants",
        problem: "Verify $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ gives $2.998\\times 10^8\\ \\text{m/s}$.",
        steps: [
          { label: "Product", text: "$\\mu_0\\varepsilon_0 = 4\\pi\\times 10^{-7}\\times 8.85\\times 10^{-12} = 1.11\\times 10^{-17}$." },
          { label: "Root", text: "$\\sqrt{\\mu_0\\varepsilon_0} = 3.34\\times 10^{-9}\\ \\text{s/m}$." },
          { label: "Inverse", text: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$." },
        ],
        result: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      'Diamagnetism: induced moments antiparallel to the applied field; $\\chi$ small and negative.',
      'The mechanism is Lenz\u2019s law applied to electron orbits — it is present in all materials.',
      'Superconductors are the extreme case, $\\chi = -1$: complete field expulsion (Meissner effect).',
    ],
    quiz: [
      {
        q: 'A diamagnetic material placed near a strong magnet is:',
        options: ['strongly attracted', 'feebly attracted', 'feebly repelled', 'unaffected'],
        answer: 2,
        explanation: 'Induced antiparallel moments make the sample repelled from stronger-field regions — the effect is tiny.',
      },
      {
        q: 'The sign of the diamagnetic susceptibility is:',
        options: ['positive and large', 'positive and small', 'negative and small', 'zero'],
        answer: 2,
        explanation: 'Antiparallel induced moments mean the interior field is reduced: $\\chi < 0$, with $|\\chi| \\sim 10^{-5}$ typically.',
      },
      {
        q: 'For a superconductor, $\\chi = -1$ means:',
        options: ['the field inside is twice the applied field', 'the field inside is exactly zero', 'the material is strongly attracted', 'the Curie point has been passed'],
        answer: 1,
        explanation: 'Perfect diamagnetism: surface supercurrents cancel the interior field completely.',
      },
      {
        q: 'Which magnetic response is present in every material?',
        options: ['ferromagnetism', 'paramagnetism', 'diamagnetism', 'hysteresis'],
        answer: 2,
        explanation: 'Induced opposition to flux change follows from Faraday\u2019s law and occurs in all atoms, even when stronger effects mask it.',
      },
    ],
  },
  // ------------------------------------------------------------------ 32-7
  {
    sectionId: 'hall-ch32-s7',
    readingTime: 5,
    intro: "If atoms carry permanent moments — from unpaired electron spins, as in aluminum or in the oxygen molecule — an applied field finds something to align. But alignment competes with thermal agitation, and at room temperature agitation wins by three orders of magnitude. Paramagnetism is therefore also weak, though positive, and it strengthens dramatically on cooling: Curie's law.",
    objectives: [
      'Explain the alignment of permanent moments and the sign of the susceptibility',
      'Estimate the alignment fraction $\\mu_B B/k_B T$ and its consequences',
      'State Curie\u2019s law and the conditions under which it fails',
    ],
    concepts: [
      {
        term: 'Paramagnetic response',
        kind: 'definition',
        statement: "**Permanent atomic moments partially align with the applied field.** The susceptibility is positive and small ($\\chi \\sim +10^{-5}$ to $10^{-3}$; aluminum is $+2.3\\times 10^{-5}$), the interior field is very slightly enhanced, and the sample is feebly attracted toward stronger field.",
      },
      {
        term: 'The thermal competition',
        kind: 'insight',
        statement: '**The balance is set by the ratio $\\mu_B B/k_B T$.** At $B = 1.0$ T and $T = 300$ K it is only $2.2\\times 10^{-3}$: about 0.2 percent net alignment. This one number explains why a slab of aluminum shows no visible affection for a strong magnet.',
      },
      {
        term: "Curie's law",
        kind: 'law',
        statement: "**Far from saturation, the magnetization is inversely proportional to temperature:** $$M = C\\,\\frac{B_\\text{app}}{T},$$ with the Curie constant $C$ characteristic of the material. Halve the temperature and the alignment doubles — paramagnetism is a cooling magnet.",
      },
      {
        term: 'Saturation',
        kind: 'insight',
        statement: '**Curie\u2019s law is the small-field limit of full alignment physics.** When $\\mu_B B \\sim k_B T$ — enormous fields or millikelvin temperatures — the moments approach complete alignment $M_\\text{sat}$ and the linear law gives way. Experiments at liquid-helium temperatures were the classic route to observing saturation.',
      },
      {
        term: "Paramagnetism: solution protocol",
        kind: "method",
        statement: "**Solve Paramagnetism problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Maxwell's completion with displacement current and matter magnetism; the working equation is $\\oint\\vec B\\cdot d\\vec A = 0$, $i_d = \\varepsilon_0\\,d\\Phi_E/dt$, $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$; every substitution must carry its units so the final unit ($\\text{T}\\cdot\\text{m/A}$ and $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $c$ from $\\mu_0\\varepsilon_0$; $\\chi\\sim 10^{-5}$ (dia/para) vs $10^3$ (ferro); vacuum form; matter needs $\\vec B = \\mu\\vec H$ with hysteresis.",
      },
    ],
    examples: [
      {
        title: 'How weak is room-temperature paramagnetism?',
        problem: 'Estimate the fractional alignment of atomic moments in a 1.0 T field at 300 K, and the field that would be needed for the alignment energy to match $k_B T$.',
        steps: [
          { label: 'Ratio', text: '$\\mu_B B / k_B T = (9.27\\times 10^{-24})(1.0)/(1.38\\times 10^{-23})(300) = 2.2\\times 10^{-3}$.' },
          { label: 'Interpret', text: 'Roughly 0.2 percent of full alignment — the sample\u2019s moments remain almost randomly oriented.' },
          { label: 'Matching field', text: 'Set $\\mu_B B = k_B T$: $B = (4.14\\times 10^{-21})/(9.27\\times 10^{-24})$.' },
          { label: 'Evaluate', text: '$B \\approx 450$ T — beyond almost all laboratory magnets; hence the need for cryogenic temperatures to study saturation.' },
        ],
        result: 'Fractional alignment $\\approx 0.2$ percent at 1 T and 300 K; matching thermal energy would require about 450 T.',
      },
      {
        title: "Paramagnetism: $c$ from constants",
        problem: "Verify $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ gives $2.998\\times 10^8\\ \\text{m/s}$.",
        steps: [
          { label: "Product", text: "$\\mu_0\\varepsilon_0 = 4\\pi\\times 10^{-7}\\times 8.85\\times 10^{-12} = 1.11\\times 10^{-17}$." },
          { label: "Root", text: "$\\sqrt{\\mu_0\\varepsilon_0} = 3.34\\times 10^{-9}\\ \\text{s/m}$." },
          { label: "Inverse", text: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$." },
        ],
        result: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      'Paramagnetism: permanent moments partially align; $\\chi > 0$, small; weak attraction to strong-field regions.',
      "The competition ratio $\\mu_B B / k_B T \\sim 10^{-3}$ at ordinary fields and temperatures keeps room-temperature paramagnetism feeble.",
      "Curie's law $M = CB_\\text{app}/T$ holds far from saturation; cooling strengthens the response.",
    ],
    quiz: [
      {
        q: 'A paramagnetic sample cools at fixed applied field. Its magnetization:',
        options: ['decreases', 'increases', 'stays the same', 'reverses sign'],
        answer: 1,
        explanation: "Curie's law: $M \\propto 1/T$ when $\\mu_B B \\ll k_B T$.",
      },
      {
        q: 'At fixed temperature, doubling the applied field (still far from saturation) changes the magnetization of a paramagnet by a factor of:',
        options: ['4', '2', '1/2', '1/4'],
        answer: 1,
        explanation: 'In the linear (Curie) regime the response is proportional to $B_\\text{app}$.',
      },
      {
        q: 'The fundamental reason paramagnets respond so weakly at room temperature is:',
        options: ['moments are too small to exist', `$k_B T$ far exceeds the alignment energy $\\mu_B B$`, 'the moments repel each other', 'the field cannot penetrate the sample'],
        answer: 1,
        explanation: 'Thermal agitation randomizes orientations about a thousand times faster than the field can order them.',
      },
      {
        q: 'A paramagnet approaching saturation is best described as:',
        options: ['still obeying $M \\propto B/T$', 'having nearly all moments aligned with the field', 'having switched to diamagnetism', 'having zero magnetization'],
        answer: 1,
        explanation: 'Saturation = full alignment; the linear Curie law has broken down.',
      },
    ],
  },
  // ------------------------------------------------------------------ 32-8
  {
    sectionId: 'hall-ch32-s8',
    readingTime: 6,
    intro: "Iron stays magnetic with no applied field at all. The reason is a purely quantum alignment of neighboring spins — the exchange coupling — that locks atomic moments into domains, and hysteresis, which gives a sample memory of the fields it has felt. Ferromagnetism is the strong magnetism of daily life, and it switches off abruptly above the Curie temperature.",
    objectives: [
      'Explain exchange coupling, domains, and why ferromagnetic order survives without an applied field',
      'Read a hysteresis loop: saturation, remanence, coercive force, and loop area',
      'Use the Curie temperature to predict the transition to paramagnetism',
    ],
    concepts: [
      {
        term: 'Exchange coupling',
        kind: 'definition',
        statement: "**A quantum interaction between neighboring atoms — much stronger than their classical magnetic dipole–dipole energy — favors parallel electron spins.** This exchange coupling locks neighboring atomic moments into alignment over regions called domains, and it acts with no external field at all.",
      },
      {
        term: 'Domains',
        kind: 'definition',
        statement: '**A ferromagnetic sample divides into regions (typically µm to mm) in each of which the moments are fully aligned.** In unmagnetized iron the domains point every which way, so the net magnetization cancels. An applied field enlarges favorably oriented domains and rotates others — producing a magnetization thousands of times stronger than any paramagnet\u2019s.',
      },
      {
        term: 'Hysteresis',
        kind: 'definition',
        statement: '**The magnetization lags the applied field: cycling the field traces a loop.** Key points: *saturation* (all domains aligned), *remanence* (the magnetization remaining at zero applied field — the permanent magnet), and *coercive force* (the reverse field needed to erase it). The area of the loop is the energy dissipated per cycle per unit volume.',
      },
      {
        term: 'Curie temperature',
        kind: 'law',
        statement: "**Above the Curie temperature $T_C$, thermal agitation defeats the exchange coupling and the material becomes an ordinary paramagnet:** iron at 1043 K (770°C), nickel at 631 K, gadolinium at 292 K. The transition is sharp — a hot iron paper clip snaps out of magnetism at one specific temperature.",
      },
      {
        term: 'Hard versus soft magnetic materials',
        kind: 'insight',
        statement: '**Wide-loop ("hard") materials retain large remanence and make permanent magnets.** Narrow-loop ("soft") materials such as transformer iron cycle thousands of times per second with little energy loss — the loop area is the heat dumped per cycle, so narrow is money in the power industry.',
      },
    ],
    examples: [
      {
        title: 'Two Bohr magnetons per iron atom',
        problem: 'Saturated iron has $M_\\text{sat} \\approx 1.7\\times 10^{6}$ A/m. Given density $7.87\\times 10^3\\ \\mathrm{kg/m^3}$ and molar mass 55.8 g/mol, find the moment per atom.',
        steps: [
          { label: 'Number density', text: '$n = (\\rho/M)N_A = (7870/0.0558)(6.02\\times 10^{23}) = 8.5\\times 10^{28}\\ \\mathrm{atoms/m^3}$.' },
          { label: 'Moment per atom', text: '$\\mu_\\text{atom} = M_\\text{sat}/n = (1.7\\times 10^{6})/(8.5\\times 10^{28}) = 2.0\\times 10^{-29}$ J/T.' },
          { label: 'In Bohr magnetons', text: '$\\mu_\\text{atom}/\\mu_B = (2.0\\times 10^{-29})/(9.27\\times 10^{-24}) = 2.2$.' },
          { label: 'Interpret', text: 'About two unpaired 3d electron spins per atom — consistent with iron\u2019s electronic structure, and the numbers close the loop between bulk magnetization and atomic moments.' },
        ],
        result: 'Each iron atom contributes $\\approx 2.2\\,\\mu_B$ — saturation is simply all of them pointing the same way.',
      },
      {
        title: "Ferromagnetism: $c$ from constants",
        problem: "Verify $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$ gives $2.998\\times 10^8\\ \\text{m/s}$.",
        steps: [
          { label: "Product", text: "$\\mu_0\\varepsilon_0 = 4\\pi\\times 10^{-7}\\times 8.85\\times 10^{-12} = 1.11\\times 10^{-17}$." },
          { label: "Root", text: "$\\sqrt{\\mu_0\\varepsilon_0} = 3.34\\times 10^{-9}\\ \\text{s/m}$." },
          { label: "Inverse", text: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$." },
        ],
        result: "$c \\approx 3.00\\times 10^{+8}\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      'Exchange coupling (quantum, spin-aligned) locks moments into domains; applied fields rearrange domains, giving huge $M$.',
      'A hysteresis loop encodes remanence (permanent magnetism), coercive force, and energy loss per cycle (loop area).',
      'Above the Curie temperature (iron: 1043 K) ferromagnetism collapses into ordinary paramagnetism.',
    ],
    quiz: [
      {
        q: 'Above its Curie temperature, iron is:',
        options: ['ferromagnetic', 'paramagnetic', 'diamagnetic', 'nonmagnetic in every sense'],
        answer: 1,
        explanation: 'Thermal motion defeats exchange coupling; the atomic moments survive but no longer align spontaneously.',
      },
      {
        q: 'In unmagnetized iron, the domains:',
        options: ['contain no magnetic moments', 'are individually aligned but randomly oriented, canceling on average', 'all point along Earth\u2019s field', 'have no boundaries'],
        answer: 1,
        explanation: 'Each domain is fully magnetized; the vector sum over randomly oriented domains is zero.',
      },
      {
        q: 'The remanence of a material is the magnetization:',
        options: ['at saturation', 'remaining after the applied field is removed', 'needed to reach saturation', 'at the Curie temperature'],
        answer: 1,
        explanation: 'It is what makes a permanent magnet: the loop intercept at zero applied field.',
      },
      {
        q: 'The energy dissipated in cycling a ferromagnet once through its hysteresis loop is proportional to:',
        options: ['the remanence only', 'the coercive force only', 'the area enclosed by the loop', 'the Curie temperature'],
        answer: 2,
        explanation: 'Work done per unit volume per cycle equals the loop area — why transformer cores use narrow-loop soft iron.',
      },
    ],
  },
]
