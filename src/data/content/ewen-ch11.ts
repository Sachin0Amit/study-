import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 11: Universal Gravitation and Satellite Motion (pp 315-326)
// ============================================================================

export const ewenCh11Content: SectionContent[] = [
  {
    sectionId: 'ewen-ch11-s1',
    readingTime: 6,
    intro: "Every mass attracts every other mass with a force that weakens as distance squared. This section states Newton universal law and computes weights, pulls, and Cavendish-scale forces.",
    objectives: [
      "State $F = Gm_1m_2/r^2$ with $G$ and its units",
      "Explain the inverse-square weakening with distance",
      "Compute gravitational forces for lab and planetary masses",
    ],
    concepts: [
      {
        term: "Universal gravitation law",
        kind: "law",
        statement: "**$F = G m_1 m_2/r^2$** attracts along the line of centers, with **$G = 6.67 \\times 10^{-11}\\ \\mathrm{N \\cdot m^2/kg^2}$**.",
        detail: "The same law weighs apples and guides planets — universality is the point.",
      },
      {
        term: "Inverse-square weakening",
        kind: "insight",
        statement: "**Doubling distance quarters force**; tripling cuts it to one-ninth — gravity dilutes over expanding spheres.",
        detail: "A $700\\ \\mathrm{N}$ person at $2R_E$ from earth center would weigh $175\\ \\mathrm{N}$.",
      },
      {
        term: "Center-to-center distance",
        kind: "method",
        statement: "$r$ is **center-to-center**: for surface weight use earth radius $R_E = 6.38 \\times 10^{6}\\ \\mathrm{m}$, not altitude alone.",
        detail: "Low-orbit $400\\ \\mathrm{km}$ changes $r$ by only $6\\%$, so $g$ stays near $8.7\\ \\mathrm{m/s^2}$.",
      },
      {
        term: "Cavendish-scale forces",
        kind: "insight",
        statement: "Lab masses pull with **nanonewton forces** — measurable only with torsion balances because $G$ is so small.",
        detail: "Two $50\\ \\mathrm{kg}$ students $1.0\\ \\mathrm{m}$ apart attract at $1.67 \\times 10^{-7}\\ \\mathrm{N}$.",
      },
      {
        term: "Weight as planetary case",
        kind: "law",
        statement: "Surface weight is the law with $m_2 = M_E$: **$g = GM_E/R_E^2 = 9.80\\ \\mathrm{m/s^2}$** — derived, not assumed.",
        detail: "From $M_E = 5.97 \\times 10^{24}\\ \\mathrm{kg}$: $g = (6.67 \\times 10^{-11})(5.97 \\times 10^{24})/(6.38 \\times 10^{6})^2$.",
      },
    ],
    figures: [
      {
        caption: "Inverse-square dilution: force quarters when center distance doubles",
        svg: '<svg role="img" aria-label="Inverse-square dilution: force quarters when center distance doubles" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g fill="currentColor"><circle cx="80" cy="90" r="12"/><circle cx="200" cy="90" r="8"/><circle cx="340" cy="90" r="8"/></g><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" fill="none"><line x1="92" y1="90" x2="192" y2="90"/><line x1="92" y1="90" x2="332" y2="90"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="120" y="75">r: F</text><text x="200" y="75">2r: F/4</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Students gravitational pull",
        problem: "Two $50.0\\ \\mathrm{kg}$ students sit $1.00\\ \\mathrm{m}$ center-to-center. Find their mutual attraction.",
        steps: [
          { label: "Apply", text: "$F = (6.67 \\times 10^{-11})(50.0)(50.0)/1.00^2 = 6.67 \\times 10^{-11} \\times 2500$." },
          { label: "Compute", text: "$F = 1.6675 \\times 10^{-7}\\ \\mathrm{N} \\approx 1.67 \\times 10^{-7}\\ \\mathrm{N}$." },
          { label: "Sense", text: "Ten-millionth of a newton — utterly swamped by friction, hence unnoticed." },
        ],
        result: "About $1.67 \\times 10^{-7}\\ \\mathrm{N}$ of mutual pull.",
      },
      {
        title: "Deriving $g$ from $G$",
        problem: "Verify $g = 9.80\\ \\mathrm{m/s^2}$ from $G = 6.67 \\times 10^{-11}$, $M_E = 5.97 \\times 10^{24}\\ \\mathrm{kg}$, $R_E = 6.38 \\times 10^{6}\\ \\mathrm{m}$.",
        steps: [
          { label: "Numerator", text: "$GM_E = 6.67 \\times 10^{-11} \\times 5.97 \\times 10^{24} = 3.982 \\times 10^{14}$." },
          { label: "Denominator", text: "$R_E^2 = 4.070 \\times 10^{13}$." },
          { label: "Divide", text: "$3.982 \\times 10^{14}/4.070 \\times 10^{13} = 9.78\\ \\mathrm{m/s^2} \\approx 9.80$." },
        ],
        result: "$g \\approx 9.78\\ \\mathrm{m/s^2}$ — the familiar value derived.",
      },
    ],
    keyTakeaways: [
      "$F = Gm_1m_2/r^2$ along centers with tiny $G$.",
      "Double $r$, quarter $F$; $r$ is center-to-center.",
      "Surface $g = GM/R^2$ unifies weight with gravitation.",
    ],
    quiz: [
      {
        q: "Two $50\\ \\mathrm{kg}$ students $1\\ \\mathrm{m}$ apart attract at about",
        options: ["$1.67\\ \\mathrm{N}$", "$1.67 \\times 10^{-7}\\ \\mathrm{N}$", "$2500\\ \\mathrm{N}$", "$9.80\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$G(2500)/1 = 1.67 \\times 10^{-7}\\ \\mathrm{N}$.",
      },
      {
        q: "Moving from $R_E$ to $2R_E$ changes weight by",
        options: ["$\\times 2$", "$\\times 1/4$", "$\\times 4$", "No change"],
        answer: 1,
        explanation: "Inverse square: $(1/2)^2 = 1/4$.",
      },
      {
        q: "Surface $g$ follows from gravitation as",
        options: ["$g = GM/R^2$", "$g = GR^2/M$", "$g = GM^2/R$", "$g = G$ alone"],
        answer: 0,
        explanation: "Dividing $GMm/R^2$ by $m$ leaves $GM/R^2$.",
      },
    ],
  },
  {
    sectionId: 'hall-ch13-s18',
    readingTime: 5,
    intro: "Gravity can be mapped as a field: an arrow at every point showing the force a test mass would feel. This section defines $g$ as field strength and traces weight loss with altitude.",
    objectives: [
      "Define gravitational field as force per unit mass",
      "Compute $g$ at altitude with the inverse square",
      "Sketch field lines for earth and two-body regions",
    ],
    concepts: [
      {
        term: "Gravitational field",
        kind: "definition",
        statement: "**Field $\\vec{g} = \\vec{F}/m$** in $\\mathrm{N/kg} = \\mathrm{m/s^2}$ points toward the source — force per kilogram placed there.",
        detail: "Earth surface field is $9.80\\ \\mathrm{N/kg}$ downward everywhere locally.",
      },
      {
        term: "Field of a planet",
        kind: "theorem",
        statement: "Outside a spherical planet, **$g(r) = GM/r^2$** directed centrally — altitude enters through $r = R + h$.",
        detail: "At $h = 400\\ \\mathrm{km}$: $g = 9.80(6.38/6.78)^2 \\approx 8.68\\ \\mathrm{m/s^2}$.",
      },
      {
        term: "Field-line picture",
        kind: "notation",
        statement: "**Lines point inward with density showing strength**: crowded near the surface, sparse far away, ending only on masses.",
        detail: "Two-body fields show a neutral (zero-force) point between the masses.",
      },
      {
        term: "Weight versus mass, revisited",
        kind: "insight",
        statement: "Your **mass feeds the field; the field sets your weight** $W = mg(r)$ — travel changes $g$, never $m$.",
        detail: "Space-station floating is free fall through a still-strong field, not field absence.",
      },
      {
        term: "Superposition",
        kind: "method",
        statement: "Multiple masses give **vector sums of fields**: moon plus earth contributions add arrow-to-tail at each point.",
        detail: "Tides come from the field gradient (difference across earth diameter), not the field itself.",
      },
    ],
    examples: [
      {
        title: "$g$ aboard the space station",
        problem: "The station orbits at $h = 400\\ \\mathrm{km}$ above $R_E = 6380\\ \\mathrm{km}$. Find $g$ there.",
        steps: [
          { label: "Ratio", text: "$r/R_E = 6780/6380 = 1.0627$." },
          { label: "Square down", text: "$g = 9.80/(1.0627^2) = 9.80/1.1293 = 8.678\\ \\mathrm{m/s^2}$." },
          { label: "Interpret", text: "$89\\%$ of surface gravity remains — astronauts float from free fall, not zero-$g$." },
        ],
        result: "$g \\approx 8.68\\ \\mathrm{m/s^2}$ at station altitude.",
      },
      {
        title: "Earth-moon neutral point",
        problem: "Estimate where earth and moon pulls cancel on the connecting line ($M_E = 81.3\\,M_M$, separation $D = 384{,}400\\ \\mathrm{km}$).",
        steps: [
          { label: "Balance", text: "$M_E/x^2 = M_M/(D - x)^2$ with $x$ from earth center." },
          { label: "Root", text: "$x/(D - x) = \\sqrt{81.3} = 9.017$, so $x = 9.017D/10.017 \\approx 0.900D$." },
          { label: "Locate", text: "$x \\approx 346{,}000\\ \\mathrm{km}$ from earth — about $38{,}400\\ \\mathrm{km}$ from the moon." },
        ],
        result: "Neutral point about nine-tenths of the way to the moon.",
      },
    ],
    keyTakeaways: [
      "$g$ is force per unit mass, mapping gravity everywhere.",
      "$g(r) = GM/r^2$ falls slowly — $89\\%$ remains at $400\\ \\mathrm{km}$.",
      "Fields superpose vectorially; gradients drive tides.",
    ],
    quiz: [
      {
        q: "$g$ at $400\\ \\mathrm{km}$ altitude is about",
        options: ["Zero", "$8.68\\ \\mathrm{m/s^2}$", "$9.80\\ \\mathrm{m/s^2}$ exactly", "$1.62\\ \\mathrm{m/s^2}$"],
        answer: 1,
        explanation: "$9.80(6380/6780)^2 = 8.68\\ \\mathrm{m/s^2}$.",
      },
      {
        q: "Astronauts float because they are",
        options: ["Beyond gravity", "In continuous free fall around earth", "Without mass", "Held by cables only"],
        answer: 1,
        explanation: "Strong $g$ still acts; orbit is falling while missing the ground.",
      },
      {
        q: "The earth-moon neutral point sits",
        options: ["Midway", "About 9/10 of the way to the moon", "At earth center", "At the moon center"],
        answer: 1,
        explanation: "Earth mass dominance pushes cancellation near the moon.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch11-s3',
    readingTime: 7,
    intro: "Orbits are controlled falling: gravity supplies exactly the centripetal force the path needs. This section derives orbital speed, periods, and the geosynchronous radius technicians point dishes at.",
    objectives: [
      "Derive $v = \\sqrt{GM/r}$ for circular orbits",
      "Compute periods from $T = 2\\pi r/v$",
      "Find the geosynchronous radius and explain its use",
    ],
    concepts: [
      {
        term: "Orbital-speed condition",
        kind: "theorem",
        statement: "Circular orbit needs **$mv^2/r = GMm/r^2$**, giving **$v = \\sqrt{GM/r}$** — mass of the satellite cancels.",
        detail: "Low $400\\ \\mathrm{km}$ orbit: $v = \\sqrt{3.986 \\times 10^{14}/6.78 \\times 10^{6}} = 7.67\\ \\mathrm{km/s}$.",
      },
      {
        term: "Orbital period",
        kind: "method",
        statement: "**$T = 2\\pi r/v = 2\\pi\\sqrt{r^3/GM}$**: higher orbits are slower and much longer — Kepler third law in circular form.",
        detail: "That $400\\ \\mathrm{km}$ orbit repeats every $92.6\\ \\mathrm{min}$.",
      },
      {
        term: "Geosynchronous orbit",
        kind: "definition",
        statement: "**$T = 24\\ \\mathrm{h}$** (sidereal $86{,}164\\ \\mathrm{s}$) fixes **$r = 42{,}164\\ \\mathrm{km}$**, altitude $35{,}786\\ \\mathrm{km}$ over the equator.",
        detail: "Satellites there hang over one meridian — the TV, weather, and comms arc.",
      },
      {
        term: "Weightlessness in orbit",
        kind: "insight",
        statement: "Orbiters and contents fall together, so **apparent weight vanishes while true gravity stays strong** — free-fall weightlessness.",
        detail: "Scales inside the station read zero despite $8.68\\ \\mathrm{m/s^2}$ acting.",
      },
      {
        term: "Escape versus orbit",
        kind: "insight",
        statement: "**$\\sqrt{2}$ faster** than circular speed escapes entirely: $v_{esc} = \\sqrt{2GM/r}$ ($11.2\\ \\mathrm{km/s}$ at the surface).",
        detail: "Between lies elliptical transfer — faster than circular but short of escape.",
      },
    ],
    figures: [
      {
        caption: "Circular orbit: gravity $GMm/r^2$ supplies the required $mv^2/r$ tangentially flown",
        svg: '<svg role="img" aria-label="Circular orbit: gravity GMm/r^2 supplies the required mv^2/r tangentially flown" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g fill="currentColor"><circle cx="200" cy="90" r="22"/></g><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="200" cy="90" r="60"/></g><g fill="currentColor"><circle cx="260" cy="90" r="7"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="260" y1="90" x2="260" y2="45"/><line x1="260" y1="90" x2="222" y2="90"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="190" y="95">earth</text><text x="264" y="60">v</text><text x="170" y="80">Fg inward</text></g></svg>',
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Space-station speed and period",
        problem: "Find circular speed and period at $r = 6.78 \\times 10^{6}\\ \\mathrm{m}$ with $GM = 3.986 \\times 10^{14}\\ \\mathrm{m^3/s^2}$.",
        steps: [
          { label: "Speed", text: "$v = \\sqrt{3.986 \\times 10^{14}/6.78 \\times 10^{6}} = \\sqrt{5.879 \\times 10^{7}} = 7667\\ \\mathrm{m/s}$." },
          { label: "Period", text: "$T = 2\\pi(6.78 \\times 10^{6})/7667 = 4.2596 \\times 10^{7}/7667 = 5555\\ \\mathrm{s} = 92.6\\ \\mathrm{min}$." },
          { label: "Check", text: "About $16$ sunrises daily — matches station experience." },
        ],
        result: "$7.67\\ \\mathrm{km/s}$; period $92.6\\ \\mathrm{min}$.",
      },
      {
        title: "Geosynchronous radius",
        problem: "Derive the GEO radius for $T = 86{,}164\\ \\mathrm{s}$.",
        steps: [
          { label: "Cube", text: "$r^3 = GM(T/2\\pi)^2 = 3.986 \\times 10^{14} \\times (13{,}713)^2 = 3.986 \\times 10^{14} \\times 1.8805 \\times 10^{8} = 7.496 \\times 10^{22}$." },
          { label: "Root", text: "$r = (7.496 \\times 10^{22})^{1/3} = 4.2164 \\times 10^{7}\\ \\mathrm{m}$." },
          { label: "Altitude", text: "Minus $R_E$: $35{,}786\\ \\mathrm{km}$ above the equator." },
        ],
        result: "$r = 42{,}164\\ \\mathrm{km}$; altitude $35{,}786\\ \\mathrm{km}$.",
      },
    ],
    keyTakeaways: [
      "$v = \\sqrt{GM/r}$ sets circular speed; satellite mass is irrelevant.",
      "$T = 2\\pi\\sqrt{r^3/GM}$ stretches periods with altitude.",
      "GEO at $42{,}164\\ \\mathrm{km}$ radius hovers over one meridian.",
    ],
    quiz: [
      {
        q: "Circular speed at $r = 6.78 \\times 10^{6}\\ \\mathrm{m}$ is about",
        options: ["$11.2\\ \\mathrm{km/s}$", "$7.67\\ \\mathrm{km/s}$", "$3.07\\ \\mathrm{km/s}$", "$1.00\\ \\mathrm{km/s}$"],
        answer: 1,
        explanation: "$\\sqrt{GM/r} = 7667\\ \\mathrm{m/s}$.",
      },
      {
        q: "That orbit period is about",
        options: ["$24\\ \\mathrm{h}$", "$92.6\\ \\mathrm{min}$", "$12.0\\ \\mathrm{min}$", "$365$ days"],
        answer: 1,
        explanation: "$2\\pi r/v = 5555\\ \\mathrm{s}$.",
      },
      {
        q: "GEO satellites hover fixed because",
        options: ["They burn fuel continuously", "Their $24\\ \\mathrm{h}$ period matches earth spin", "Gravity vanishes there", "The moon holds them"],
        answer: 1,
        explanation: "Matched angular rate keeps one longitude below.",
      },
    ],
  },
]
