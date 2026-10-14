import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 13
// Gravitation (Secs 13.1–13.8)
// ============================================================================

export const youngCh13Content: SectionContent[] = [
  {
    sectionId: "young-ch13-s1",
    readingTime: 5,
    intro: "Every mass attracts every other with an inverse-square force: $F = Gm_1m_2/r^2$. This section states Newton gravitation, fixes $G$, and superposes forces from many masses vectorially.",
    objectives: [
      "State $F_g = Gm_1m_2/r^2$ with direction",
      "Use $G = 6.674 \\times 10^{-11}\\ \\mathrm{N\\cdot m^2/kg^2}$",
      "Superpose gravitational forces vectorially"
    ],
    concepts: [
      {
        term: "Newton gravitation",
        kind: "law",
        statement: "**$F_g = Gm_1m_2/r^2$** attractive along the line joining the masses — inverse-square weakening.",
        detail: "Doubling $r$ quarters $F$; doubling either mass doubles it."
      },
      {
        term: "Gravitational constant",
        kind: "notation",
        statement: "**$G = 6.674 \\times 10^{-11}\\ \\mathrm{N\\cdot m^2/kg^2}$** (Cavendish torsion balance) — feeble, hence unnoticed daily.",
        detail: "Two $1.0\\ \\mathrm{kg}$ spheres $1.0\\ \\mathrm{m}$ apart pull $6.7 \\times 10^{-11}\\ \\mathrm{N}$."
      },
      {
        term: "Superposition",
        kind: "method",
        statement: "Many masses **add vectorially**: $\\vec{F} = \\sum Gm m_i\\hat{r}_i/r_i^2$ toward each source.",
        detail: "Three-body configurations need components — magnitudes alone mislead."
      },
      {
        term: "Action-reaction",
        kind: "insight",
        statement: "Gravity obeys the **third law**: Earth pulls the apple as hard as the apple pulls Earth — $ma$ differs enormously.",
        detail: "Apple $0.20\\ \\mathrm{kg}$: $a = 9.8$; Earth $6.0 \\times 10^{24}$: $a = 3.3 \\times 10^{-25}\\ \\mathrm{m/s^2}$."
      },
      {
        term: "Point-mass idealization",
        kind: "method",
        statement: "Spherically symmetric bodies act as **points at their centers** for external points (proved Sec 13.6).",
        detail: "Earth–Moon $3.84 \\times 10^8\\ \\mathrm{m}$ apart: centers rule, radii negligible."
      }
    ],
    examples: [
      {
        title: "Earth–Moon pull",
        problem: "Find the Earth–Moon gravitational force ($M_E = 5.97 \\times 10^{24}$, $M_M = 7.35 \\times 10^{22}$, $r = 3.84 \\times 10^8\\ \\mathrm{m}$).",
        steps: [
          { label: "Formula", text: "$F = 6.674 \\times 10^{-11} \\times 5.97 \\times 10^{24} \\times 7.35 \\times 10^{22}/(3.84 \\times 10^8)^2$." },
          { label: "Numbers", text: "Numerator $2.93 \\times 10^{37}$; denominator $1.475 \\times 10^{17}$." },
          { label: "Force", text: "$F = 1.99 \\times 10^{20}\\ \\mathrm{N}$ — tides and orbits from this." }
        ],
        result: "$1.99 \\times 10^{20}\\ \\mathrm{N}$ mutual attraction."
      },
      {
        title: "Cavendish-scale force",
        problem: "Two $1.5\\ \\mathrm{kg}$ lead balls $0.20\\ \\mathrm{m}$ apart. Force?",
        steps: [
          { label: "Compute", text: "$F = 6.674 \\times 10^{-11} \\times 2.25/0.040 = 3.75 \\times 10^{-9}\\ \\mathrm{N}$." },
          { label: "Sense", text: "Nanonewtons — torsion fibers detect it; humans never feel it." },
          { label: "Compare", text: "Weight of one ball: $14.7\\ \\mathrm{N}$ — ten orders larger." }
        ],
        result: "$3.75\\ \\mathrm{nN}$ — Cavendish territory."
      }
    ],
    keyTakeaways: [
      "Gravity is $Gm_1m_2/r^2$ attractive along the join.",
      "$G$ is tiny; only planets pull noticeably.",
      "Many sources sum as vectors, not scalars."
    ],
    quiz: [
      {
        q: "Doubling separation changes $F_g$ by:",
        options: ["Double", "Quarter (inverse-square)", "Half", "Unchanged"],
        answer: 1,
        explanation: "$1/r^2$: $1/4$ at $2r$."
      },
      {
        q: "Earth–Moon force is about:",
        options: ["$2.0 \\times 10^{20}\\ \\mathrm{N}$", "$9.8\\ \\mathrm{N}$", "$3.7\\ \\mathrm{nN}$", "Zero"],
        answer: 0,
        explanation: "Direct $GmM/r^2$ with lunar distance gives $10^{20}\\ \\mathrm{N}$."
      },
      {
        q: "Gravitational forces from two sources:",
        options: ["Add as scalars always", "Add vectorially toward each source", "Cancel always", "Multiply"],
        answer: 1,
        explanation: "Direction matters; components carry the geometry."
      }
    ]
  },
  {
    sectionId: "young-ch13-s2",
    readingTime: 4,
    intro: "Weight is local gravity: $w = GmM_E/R_E^2 = mg$. This section computes $g$ from planetary mass and radius and explains its small variations over Earth surface.",
    objectives: [
      "Derive $g = GM/R^2$ for spherical planets",
      "Compute weights on other worlds",
      "Explain latitude and altitude corrections"
    ],
    concepts: [
      {
        term: "g from M and R",
        kind: "theorem",
        statement: "**$g = GM/R^2$** at the surface of a spherical planet of mass $M$, radius $R$.",
        detail: "Earth: $6.674 \\times 10^{-11} \\times 5.97 \\times 10^{24}/(6.37 \\times 10^6)^2 = 9.82\\ \\mathrm{m/s^2}$."
      },
      {
        term: "Weight anywhere",
        kind: "method",
        statement: "**$w = GMm/r^2$** at distance $r$ from center — falls as $1/r^2$ outward.",
        detail: "At $2R_E$: $g/4 = 2.45\\ \\mathrm{m/s^2}$."
      },
      {
        term: "Other worlds",
        kind: "notation",
        statement: "Moon $1.62$, Mars $3.71$, Jupiter $24.8\\ \\mathrm{m/s^2}$ — same $G$, different $M/R^2$.",
        detail: "$70\\ \\mathrm{kg}$ weighs $113$, $260$, $1736\\ \\mathrm{N}$ respectively."
      },
      {
        term: "Latitude effect",
        kind: "insight",
        statement: "Spin and bulge lighten the **equator by ~$0.5$%** versus poles ($9.78$ vs $9.83$).",
        detail: "Centrifugal $\\omega^2R\\cos^2\\lambda$ plus larger $R$ both cut $g$ equatorward."
      },
      {
        term: "Altitude drop",
        kind: "method",
        statement: "**$g(h) \\approx g_0(1-2h/R_E)$** for $h \\ll R_E$ — linear fade with height.",
        detail: "Everest ($8.8\\ \\mathrm{km}$): $g$ down $0.28$% to $9.77$."
      }
    ],
    examples: [
      {
        title: "Computing g",
        problem: "Verify $g$ from $M_E$ and $R_E$.",
        steps: [
          { label: "Numerator", text: "$GM = 3.986 \\times 10^{14}\\ \\mathrm{m^3/s^2}$." },
          { label: "Denominator", text: "$R^2 = 4.058 \\times 10^{13}\\ \\mathrm{m^2}$." },
          { label: "Divide", text: "$g = 9.82\\ \\mathrm{m/s^2}$ — matches lab." }
        ],
        result: "$9.82\\ \\mathrm{m/s^2}$ from astronomy constants."
      },
      {
        title: "Mars weight",
        problem: "$70\\ \\mathrm{kg}$ on Mars ($M = 6.42 \\times 10^{23}$, $R = 3.40 \\times 10^6$).",
        steps: [
          { label: "g", text: "$g = 6.674 \\times 10^{-11} \\times 6.42 \\times 10^{23}/1.156 \\times 10^{13} = 3.71\\ \\mathrm{m/s^2}$." },
          { label: "Weight", text: "$w = 260\\ \\mathrm{N}$." },
          { label: "Leap", text: "Jump three times higher than on Earth." }
        ],
        result: "$3.71\\ \\mathrm{m/s^2}$; $260\\ \\mathrm{N}$."
      }
    ],
    keyTakeaways: [
      "$g = GM/R^2$ unifies weight and astronomy.",
      "Weight follows $1/r^2$ outside the planet.",
      "Spin, bulge, and height trim $g$ by fractions of a percent."
    ],
    quiz: [
      {
        q: "Surface $g$ scales with planet as:",
        options: ["$M/R$", "$GM/R^2$", "$R/M$", "$G$ only"],
        answer: 1,
        explanation: "Force $GMm/R^2$ divided by $m$."
      },
      {
        q: "At $2R_E$ from center, $g$ is:",
        options: ["$g_0$", "$g_0/4$", "$2g_0$", "Zero"],
        answer: 1,
        explanation: "Inverse-square: $1/4$ at double radius."
      },
      {
        q: "Equator $g$ is lower because:",
        options: ["More mass at poles", "Spin centrifugal plus equatorial bulge", "No gravity at equator", "Colder air"],
        answer: 1,
        explanation: "Both effects cut effective weight equatorward."
      }
    ]
  },
  {
    sectionId: "young-ch13-s3",
    readingTime: 6,
    intro: "Far from Earth, $mgh$ fails and the true potential $U = -Gm_1m_2/r$ takes over. This section generalizes gravitational energy, derives escape speed $v_{\\mathrm{esc}} = \\sqrt{2GM/R}$, and balances orbital energy.",
    objectives: [
      "State $U_g = -Gm_1m_2/r$ with zero at infinity",
      "Derive $v_{\\mathrm{esc}} = \\sqrt{2GM/R}$",
      "Use $E = K+U$ for bound versus escape trajectories"
    ],
    concepts: [
      {
        term: "General potential energy",
        kind: "definition",
        statement: "**$U_g = -Gm_1m_2/r$**, zero at **infinite separation**, negative when bound.",
        detail: "Lifting from $R$ to $r$ costs $GMm(1/R-1/r)$; $mgh$ is its $h \\ll R$ limit."
      },
      {
        term: "Escape speed",
        kind: "theorem",
        statement: "**$v_{\\mathrm{esc}} = \\sqrt{2GM/R}$**: $K+U = 0$ marginally escapes to rest at infinity.",
        detail: "Earth: $11.2\\ \\mathrm{km/s}$; Moon: $2.38$; Jupiter: $59.5$."
      },
      {
        term: "Energy sign decides fate",
        kind: "theorem",
        statement: "**$E < 0$ bound** (ellipse/circle), **$E = 0$ marginal escape**, **$E > 0$ hyperbolic** surplus at infinity.",
        detail: "$E = -GMm/2a$ for ellipse of semi-major $a$."
      },
      {
        term: "Why negative U",
        kind: "insight",
        statement: "**Negative $U$ means work needed to separate**: bound systems sit in an energy well below zero.",
        detail: "Deeper (closer) orbits bind harder — more negative $E$."
      },
      {
        term: "Recovery of mgh",
        kind: "theorem",
        statement: "For $r = R+h$: **$\\Delta U = GMmh/R(R+h) \\approx mgh$** with $g = GM/R^2$.",
        detail: "Linear $mgh$ is the tangent to the $1/r$ curve at the surface."
      }
    ],
    figures: [
      {
        caption: "General $U = -GMm/r$ well: $E < 0$ trapped, $E \\ge 0$ escapes; $mgh$ is the surface tangent",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gravitational potential well"><path d="M 80 40 Q 200 60 300 120 Q 380 170 620 165" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="60" y1="100" x2="660" y2="100" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><text x="630" y="92" font-size="11" fill="currentColor">E = 0 escape</text><line x1="60" y1="140" x2="660" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><text x="630" y="132" font-size="11" fill="currentColor">E below 0 bound</text><text x="300" y="180" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">U = minus GMm / r well</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Earth escape speed",
        problem: "Compute $v_{\\mathrm{esc}}$ from Earth surface.",
        steps: [
          { label: "Formula", text: "$v = \\sqrt{2 \\times 3.986 \\times 10^{14}/6.37 \\times 10^6} = \\sqrt{1.252 \\times 10^8}$." },
          { label: "Value", text: "$v = 11{,}190\\ \\mathrm{m/s} = 11.2\\ \\mathrm{km/s}$." },
          { label: "Moon check", text: "$GM_M = 4.90 \\times 10^{12}$, $R = 1.74 \\times 10^6$: $v = 2380\\ \\mathrm{m/s}$." }
        ],
        result: "$11.2\\ \\mathrm{km/s}$ Earth; $2.38\\ \\mathrm{km/s}$ Moon."
      },
      {
        title: "Energy of a satellite",
        problem: "A $1000\\ \\mathrm{kg}$ satellite circles at $r = 2R_E$. Find $E$.",
        steps: [
          { label: "Potential", text: "$U = -3.986 \\times 10^{14} \\times 1000/1.274 \\times 10^7 = -3.129 \\times 10^{10}\\ \\mathrm{J}$." },
          { label: "Kinetic", text: "Circular: $K = -U/2 = 1.564 \\times 10^{10}\\ \\mathrm{J}$." },
          { label: "Total", text: "$E = -1.564 \\times 10^{10}\\ \\mathrm{J}$ — bound." }
        ],
        result: "$E = -15.6\\ \\mathrm{GJ}$; needs $+15.6\\ \\mathrm{GJ}$ to escape."
      }
    ],
    keyTakeaways: [
      "$U = -GMm/r$ with zero at infinity governs spaceflight.",
      "$v_{\\mathrm{esc}} = \\sqrt{2GM/R}$ barely reaches infinity.",
      "Sign of $E$ sorts bound orbits from escapes."
    ],
    quiz: [
      {
        q: "Earth escape speed is about:",
        options: ["$7.9\\ \\mathrm{km/s}$", "$11.2\\ \\mathrm{km/s}$", "$3.0\\ \\mathrm{km/s}$", "$300{,}000\\ \\mathrm{km/s}$"],
        answer: 1,
        explanation: "$\\sqrt{2GM/R} = 11.2\\ \\mathrm{km/s}$ — $\\sqrt{2}$ above circular $7.9$."
      },
      {
        q: "Bound orbits have total energy:",
        options: ["Positive", "Negative", "Zero always", "Infinite"],
        answer: 1,
        explanation: "Trapped below the $U = 0$ rim at infinity."
      },
      {
        q: "$mgh$ relates to $-GMm/r$ as:",
        options: ["Unrelated", "Small-$h$ linear tangent at the surface", "Exact at all heights", "Opposite sign always"],
        answer: 1,
        explanation: "Expanding $1/(R+h)$ to first order recovers $mgh$."
      }
    ]
  },
  {
    sectionId: "young-ch13-s4",
    readingTime: 6,
    intro: "Circular orbits balance gravity against $mv^2/r$: $v = \\sqrt{GM/r}$, $T = 2\\pi\\sqrt{r^3/GM}$. This section derives orbital speed, period, and energy, and parks satellites in geostationary slots.",
    objectives: [
      "Derive $v = \\sqrt{GM/r}$ and $T = 2\\pi\\sqrt{r^3/GM}$",
      "Compute geostationary radius",
      "Split orbital energy into $K = -E$, $U = 2E$"
    ],
    concepts: [
      {
        term: "Circular orbit speed",
        kind: "theorem",
        statement: "**$v = \\sqrt{GM/r}$**: gravity $GMm/r^2$ supplies $mv^2/r$.",
        detail: "Low Earth ($r = 6.77 \\times 10^6$): $v = 7.67\\ \\mathrm{km/s}$."
      },
      {
        term: "Period",
        kind: "theorem",
        statement: "**$T = 2\\pi\\sqrt{r^3/GM}$** — Kepler third law for circles; $T^2 \\propto r^3$.",
        detail: "Low Earth: $T = 5540\\ \\mathrm{s}$ ($92$ min); Moon distance: $27.3$ days."
      },
      {
        term: "Orbital energy split",
        kind: "theorem",
        statement: "Circular: **$K = +GMm/2r$**, **$U = -GMm/r$**, **$E = -GMm/2r$** — virial halves.",
        detail: "Raising orbit (less negative $E$) needs energy though speed drops."
      },
      {
        term: "Geostationary orbit",
        kind: "method",
        statement: "**$T = 24$ h** forces **$r = 42{,}200\\ \\mathrm{km}$** ($35{,}800\\ \\mathrm{km}$ altitude) over the equator.",
        detail: "Satellite hovers over one meridian — comms and weather slots."
      },
      {
        term: "Weightless in orbit",
        kind: "insight",
        statement: "Orbiters **fall continuously** with $a = g(r)$ — apparent weight zero, gravity undiminished.",
        detail: "ISS at $400\\ \\mathrm{km}$: $g = 8.68\\ \\mathrm{m/s^2}$ ($89$% of surface) yet floats."
      }
    ],
    examples: [
      {
        title: "Low-orbit period",
        problem: "Find $v$ and $T$ at $400\\ \\mathrm{km}$ altitude ($r = 6.77 \\times 10^6\\ \\mathrm{m}$).",
        steps: [
          { label: "Speed", text: "$v = \\sqrt{3.986 \\times 10^{14}/6.77 \\times 10^6} = 7670\\ \\mathrm{m/s}$." },
          { label: "Period", text: "$T = 2\\pi \\times 6.77 \\times 10^6/7670 = 5546\\ \\mathrm{s} = 92.4$ min." },
          { label: "g there", text: "$g = 3.986 \\times 10^{14}/(6.77 \\times 10^6)^2 = 8.70\\ \\mathrm{m/s^2}$." }
        ],
        result: "$7.67\\ \\mathrm{km/s}$; $92$-min lap."
      },
      {
        title: "Geostationary radius",
        problem: "Find $r$ for $T = 86{,}164\\ \\mathrm{s}$ (sidereal day).",
        steps: [
          { label: "Formula", text: "$r^3 = GM(T/2\\pi)^2 = 3.986 \\times 10^{14} \\times (13713)^2 = 7.496 \\times 10^{22}$." },
          { label: "Root", text: "$r = 4.216 \\times 10^7\\ \\mathrm{m}$." },
          { label: "Altitude", text: "Minus $R_E$: $35{,}800\\ \\mathrm{km}$ up." }
        ],
        result: "$42{,}200\\ \\mathrm{km}$ radius; $35{,}800\\ \\mathrm{km}$ altitude."
      }
    ],
    keyTakeaways: [
      "Gravity funds $mv^2/r$: $v = \\sqrt{GM/r}$.",
      "$T^2 \\propto r^3$ spaces the satellite ladder.",
      "Circular $E$ is half $U$ negative — raising costs energy."
    ],
    quiz: [
      {
        q: "Circular speed at $r$ is:",
        options: ["$GM/r^2$", "$\\sqrt{GM/r}$", "$2\\pi r$ always", "$Gr$"],
        answer: 1,
        explanation: "Equating $GMm/r^2 = mv^2/r$ and solving."
      },
      {
        q: "Geostationary altitude is about:",
        options: ["$400\\ \\mathrm{km}$", "$35{,}800\\ \\mathrm{km}$", "$384{,}000\\ \\mathrm{km}$", "Zero"],
        answer: 1,
        explanation: "$24$-h period forces $r = 42{,}200\\ \\mathrm{km}$."
      },
      {
        q: "Astronauts float because:",
        options: ["No gravity in space", "Continuous free fall with $a = g(r)$", "Zero velocity", "Air buoyancy"],
        answer: 1,
        explanation: "Falling ship and crew together kill contact forces; $g$ stays ~$90$%."
      }
    ]
  },
  {
    sectionId: "young-ch13-s5",
    readingTime: 6,
    intro: "Kepler distilled Tycho data into three laws; Newton derived them from $1/r^2$ gravity. This section states ellipse, area, and harmony laws and shows how $G$ plus orbits weigh planets.",
    objectives: [
      "State Kepler three laws precisely",
      "Connect equal areas to $L$-conservation",
      "Derive $T^2 = 4\\pi^2a^3/GM$ and weigh the Sun"
    ],
    concepts: [
      {
        term: "First law: ellipses",
        kind: "law",
        statement: "Planets orbit **ellipses with the Sun at one focus** — circles as zero-eccentricity cases.",
        detail: "Earth $e = 0.017$ (near circle); Halley $e = 0.967$ (needle)."
      },
      {
        term: "Second law: equal areas",
        kind: "law",
        statement: "**Equal areas in equal times**: areal velocity $dA/dt = L/2m$ constant under central force.",
        detail: "Perihelion sprint, aphelion crawl — Ch 10 $L$-conservation."
      },
      {
        term: "Third law: harmony",
        kind: "law",
        statement: "**$T^2 = 4\\pi^2a^3/GM$**: period squared scales with semi-major cubed.",
        detail: "Earth ($1$ yr, $1$ AU) versus Jupiter ($11.9$ yr, $5.2$ AU): $11.9^2 \\approx 5.2^3$."
      },
      {
        term: "Weighing the Sun",
        kind: "method",
        statement: "Earth orbit gives **$M_{\\odot} = 4\\pi^2a^3/GT^2 = 1.99 \\times 10^{30}\\ \\mathrm{kg}$**.",
        detail: "$a = 1.496 \\times 10^{11}$, $T = 3.156 \\times 10^7\\ \\mathrm{s}$: arithmetic weighs the star."
      },
      {
        term: "Newton derivation moral",
        kind: "insight",
        statement: "**Inverse-square implies conic sections** (ellipses, parabolas, hyperbolas) — Kepler laws are $1/r^2$ fingerprints.",
        detail: "Any other exponent precesses ellipses; only $1/r^2$ (and Hooke) closes them."
      }
    ],
    figures: [
      {
        caption: "Second law: equal areas $dA = L\\,dt/2m$ swept in equal times — fast near, slow far",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kepler equal areas"><ellipse cx="360" cy="95" rx="220" ry="70" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="500" cy="95" r="10" fill="currentColor"/><text x="500" y="125" font-size="11" text-anchor="middle" fill="currentColor">Sun (focus)</text><path d="M 500 95 L 200 65 L 210 125 Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5"/><path d="M 500 95 L 560 60 L 575 130 Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="230" y="150" font-size="11" fill="currentColor">far: wide slow wedge</text><text x="540" y="160" font-size="11" fill="currentColor">near: fast wedge</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Weighing the Sun",
        problem: "Use Earth orbit ($a = 1.496 \\times 10^{11}\\ \\mathrm{m}$, $T = 3.156 \\times 10^7\\ \\mathrm{s}$) to find $M_{\\odot}$.",
        steps: [
          { label: "Formula", text: "$M = 4\\pi^2a^3/GT^2$." },
          { label: "Numbers", text: "$a^3 = 3.348 \\times 10^{33}$; $4\\pi^2a^3 = 1.322 \\times 10^{35}$; $GT^2 = 6.648 \\times 10^4$." },
          { label: "Divide", text: "$M = 1.99 \\times 10^{30}\\ \\mathrm{kg}$ — $333{,}000$ Earths." }
        ],
        result: "$1.99 \\times 10^{30}\\ \\mathrm{kg}$ solar mass."
      },
      {
        title: "Halley period",
        problem: "Halley $a = 17.8$ AU. Estimate $T$.",
        steps: [
          { label: "Harmony", text: "$T = a^{3/2} = 17.8^{1.5}$ years." },
          { label: "Compute", text: "$17.8 \\times \\sqrt{17.8} = 17.8 \\times 4.22 = 75.1$ yr." },
          { label: "Check", text: "Observed $75$–$76$ yr — Kepler nails it." }
        ],
        result: "~$75$-yr period."
      }
    ],
    keyTakeaways: [
      "Ellipses, equal areas, $T^2 \\propto a^3$ — Kepler trio.",
      "Areas encode $L$-conservation under central pull.",
      "Orbits weigh their centers via $GM = 4\\pi^2a^3/T^2$."
    ],
    quiz: [
      {
        q: "Kepler second law is equivalent to:",
        options: ["Energy conservation", "Angular-momentum conservation under central force", "Circular orbits only", "No gravity"],
        answer: 1,
        explanation: "$dA/dt = L/2m$ fixed when $\\vec{\\tau} = 0$."
      },
      {
        q: "Halley ($a = 17.8$ AU) returns every about:",
        options: ["$17.8$ yr", "$75$ yr", "$318$ yr", "$1$ yr"],
        answer: 1,
        explanation: "$a^{3/2} = 75.1$ yr."
      },
      {
        q: "Earth orbit weighs the Sun as:",
        options: ["$5.97 \\times 10^{24}\\ \\mathrm{kg}$", "$1.99 \\times 10^{30}\\ \\mathrm{kg}$", "$7.35 \\times 10^{22}\\ \\mathrm{kg}$", "Zero"],
        answer: 1,
        explanation: "$4\\pi^2a^3/GT^2$ with $1$ AU and $1$ yr."
      }
    ]
  },
  {
    sectionId: "young-ch13-s6",
    readingTime: 5,
    intro: "Shells of matter gravitate simply: outside they pull as a point, inside they cancel. This section proves the shell theorem, weighs Earth interior, and tunnels through the planet.",
    objectives: [
      "State the spherical-shell theorem (outside point, inside zero)",
      "Compute $g(r)$ inside uniform Earth",
      "Solve the planet-tunnel oscillator"
    ],
    concepts: [
      {
        term: "Shell theorem",
        kind: "theorem",
        statement: "A uniform **spherical shell** attracts externally as **point mass at center** and exerts **zero force inside**.",
        detail: "Newton delayed Principia until proving it by integral geometry."
      },
      {
        term: "Solid sphere exterior",
        kind: "theorem",
        statement: "Outside, **$F = GMm/r^2$** with full $M$ — layered shells sum to the total.",
        detail: "All of Secs 13.1–13.5 rest on this license."
      },
      {
        term: "Uniform interior field",
        kind: "theorem",
        statement: "Inside uniform density: **$g(r) = GMr/R^3$** — linear in $r$, zero at center.",
        detail: "Halfway down: $g/2$; only inner sphere pulls, outer shell cancels."
      },
      {
        term: "Real Earth profile",
        kind: "insight",
        statement: "Real $g$ **rises slightly** to the core-mantle boundary (dense core) then **falls linearly** through the core.",
        detail: "Uniform model is pedagogy; PREM seismology gives the true curve."
      },
      {
        term: "Planet tunnel",
        kind: "method",
        statement: "Frictionless diametral tunnel is **SHM** with **$T = 2\\pi\\sqrt{R/g} = 84$ min** — same as low orbit.",
        detail: "Restoring $F = -GMmr/R^3$: $\\omega = \\sqrt{g/R}$."
      }
    ],
    examples: [
      {
        title: "Halfway gravity",
        problem: "Uniform Earth: $g$ at $r = R/2$?",
        steps: [
          { label: "Formula", text: "$g = g_0/2 = 4.90\\ \\mathrm{m/s^2}$." },
          { label: "Mass inside", text: "$M/8$ within half radius ($\\propto r^3$)." },
          { label: "Force", text: "$(M/8)/(R/2)^2 = M/2R^2$ — half surface." }
        ],
        result: "$4.90\\ \\mathrm{m/s^2}$ at half radius (uniform model)."
      },
      {
        title: "Tunnel period",
        problem: "Find oscillation period through a diametral tunnel (uniform Earth).",
        steps: [
          { label: "Equation", text: "$a = -g x/R$: $\\omega = \\sqrt{9.80/6.37 \\times 10^6} = 1.24 \\times 10^{-3}\\ \\mathrm{rad/s}$." },
          { label: "Period", text: "$T = 2\\pi/\\omega = 5060\\ \\mathrm{s} = 84.4$ min." },
          { label: "Orbit link", text: "Matches grazing-orbit period — same $\\sqrt{R/g}$." }
        ],
        result: "$84$-min pole-to-pole shuttle."
      }
    ],
    keyTakeaways: [
      "Shells: point outside, nothing inside.",
      "Uniform interior grows $g \\propto r$.",
      "Tunnels oscillate at orbit frequency."
    ],
    quiz: [
      {
        q: "Inside a uniform spherical shell, gravity is:",
        options: ["$GM/r^2$", "Zero everywhere", "$GMr/R^3$", "Infinite"],
        answer: 1,
        explanation: "Symmetric pulls cancel exactly at every interior point."
      },
      {
        q: "Uniform Earth at $R/2$ has $g$:",
        options: ["$g_0$", "$g_0/2$", "$2g_0$", "Zero"],
        answer: 1,
        explanation: "Enclosed $M/8$ over $(R/2)^2$ gives half."
      },
      {
        q: "Diametral tunnel period is about:",
        options: ["$24$ h", "$84$ min", "$1$ min", "$1$ s"],
        answer: 1,
        explanation: "$2\\pi\\sqrt{R/g} = 5060\\ \\mathrm{s}$."
      }
    ]
  },
  {
    sectionId: "young-ch13-s7",
    readingTime: 5,
    intro: "Scales weigh effective gravity: true $g$ minus centrifugal relief from Earth spin. This section corrects weight for latitude, explains equatorial lightness, and floats astronauts in free fall.",
    objectives: [
      "Compute centrifugal correction $\\omega^2R\\cos^2\\lambda$",
      "Explain effective $g$ and plumb-line deflection",
      "Distinguish true weightlessness from deep space"
    ],
    concepts: [
      {
        term: "Effective gravity",
        kind: "definition",
        statement: "**$\\vec{g}_{\\mathrm{eff}} = \\vec{g}_{\\mathrm{true}} - \\vec{a}_{\\mathrm{centrifugal}}$** — what scales and pendulums feel.",
        detail: "Equator: $\\omega^2R = 0.0339\\ \\mathrm{m/s^2}$ ($0.35$%) outward relief."
      },
      {
        term: "Latitude formula",
        kind: "theorem",
        statement: "**$g_{\\mathrm{eff}} \\approx g - \\omega^2R\\cos^2\\lambda$** at latitude $\\lambda$ (plus bulge).",
        detail: "Poles ($\\cos = 0$): full $9.83$; equator: $9.78$."
      },
      {
        term: "Plumb deflection",
        kind: "insight",
        statement: "Except at poles/equator, **plumb lines tilt equatorward** — centrifugal has a south-north part.",
        detail: "Maximum $0.1^{\\circ}$ at $45^{\\circ}$ — surveyors correct for it."
      },
      {
        term: "Apparent weightlessness",
        kind: "definition",
        statement: "**Free fall zeroes apparent weight** ($n = 0$) though $g$ persists — orbit is perpetual fall.",
        detail: "Vomit-comet arcs and ISS share $a = g$ trajectories, not $g = 0$."
      },
      {
        term: "True zero-g",
        kind: "insight",
        statement: "**Deep-space $g \\approx 0$** only far from masses; orbital float is **acceleration-matched fall**, not absence.",
        detail: "Lagrange points balance pulls; intergalactic voids approach true milli-$g$."
      }
    ],
    figures: [
      {
        caption: "Spin relief: $\\omega^2R\\cos^2\\lambda$ lightens equatorial weights most",
        svg: `<svg viewBox="0 0 720 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Centrifugal relief"><circle cx="360" cy="85" r="60" fill="none" stroke="currentColor" stroke-width="2"/><line x1="360" y1="25" x2="360" y2="145" stroke="currentColor" stroke-width="1"/><line x1="300" y1="85" x2="420" y2="85" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="85" x2="420" y2="85" stroke="currentColor" stroke-width="2.5"/><polygon points="420,85 408,79 408,91" fill="currentColor"/><text x="430" y="80" font-size="11" fill="currentColor">centrifugal max at equator</text><text x="360" y="160" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">poles: zero relief</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Equatorial relief",
        problem: "Compute centrifugal acceleration at the equator ($R = 6.38 \\times 10^6\\ \\mathrm{m}$, $T = 86{,}164\\ \\mathrm{s}$).",
        steps: [
          { label: "Omega", text: "$\\omega = 7.292 \\times 10^{-5}\\ \\mathrm{rad/s}$." },
          { label: "Product", text: "$a = \\omega^2R = 5.317 \\times 10^{-9} \\times 6.38 \\times 10^6 = 0.0339\\ \\mathrm{m/s^2}$." },
          { label: "Fraction", text: "$0.35$% of $g$ — plus $0.2$% bulge totals equatorial lightness." }
        ],
        result: "$0.0339\\ \\mathrm{m/s^2}$ outward at the equator."
      },
      {
        title: "Scale at latitude 45",
        problem: "$70\\ \\mathrm{kg}$ at $45^{\\circ}$: effective weight?",
        steps: [
          { label: "Correction", text: "$0.0339 \\times 0.50 = 0.0170\\ \\mathrm{m/s^2}$ off radial $g$." },
          { label: "Weight", text: "$w \\approx 70 \\times 9.81 = 687\\ \\mathrm{N}$ (between $686$ equator and $688$ pole)." },
          { label: "Tilt", text: "Plumb tilts ~$0.1^{\\circ}$ — irrelevant to the scale number." }
        ],
        result: "~$687\\ \\mathrm{N}$ — grams of difference."
      }
    ],
    keyTakeaways: [
      "Scales read $g_{\\mathrm{eff}}$: true $g$ minus spin relief.",
      "Relief peaks at the equator, vanishes at poles.",
      "Orbit float is matched fall, not missing gravity."
    ],
    quiz: [
      {
        q: "Equatorial centrifugal relief is about:",
        options: ["$9.8\\ \\mathrm{m/s^2}$", "$0.034\\ \\mathrm{m/s^2}$", "Zero", "$3.7\\ \\mathrm{m/s^2}$"],
        answer: 1,
        explanation: "$\\omega^2R = 0.0339\\ \\mathrm{m/s^2}$."
      },
      {
        q: "Plumb lines tilt except at:",
        options: ["$45^{\\circ}$", "Poles and equator", "Nowhere", "Everywhere equally"],
        answer: 1,
        explanation: "Only there is centrifugal purely radial or zero."
      },
      {
        q: "ISS weightlessness means:",
        options: ["$g = 0$ in orbit", "Free-fall $a = g$ zeroes contact forces", "No motion", "No mass"],
        answer: 1,
        explanation: "$g$ is $89$%; falling together hides it."
      }
    ]
  },
  {
    sectionId: "young-ch13-s8",
    readingTime: 5,
    intro: "When escape speed reaches light speed, nothing escapes: a black hole. This section introduces the Schwarzschild radius $R_S = 2GM/c^2$, sketches event horizons, and surveys the evidence for stellar and supermassive holes.",
    objectives: [
      "State $R_S = 2GM/c^2$ and compute it",
      "Explain event horizons and escape",
      "Survey X-ray binaries, Sgr A*, and LIGO evidence"
    ],
    concepts: [
      {
        term: "Schwarzschild radius",
        kind: "definition",
        statement: "**$R_S = 2GM/c^2$**: radius where **$v_{\\mathrm{esc}} = c$** — about $3.0\\ \\mathrm{km}$ per solar mass.",
        detail: "Earth crushed to $8.87\\ \\mathrm{mm}$; Sun to $2.95\\ \\mathrm{km}$."
      },
      {
        term: "Event horizon",
        kind: "definition",
        statement: "The **horizon** at $R_S$ is a **one-way membrane**: worldlines inside point toward the singularity.",
        detail: "No signal escapes; outside physics continues normally (orbits possible beyond $3R_S$)."
      },
      {
        term: "Newton hint, Einstein proof",
        kind: "insight",
        statement: "Setting $\\sqrt{2GM/R} = c$ gives the right $R_S$ by **lucky Newtonian hint**; full **general relativity** owns the geometry.",
        detail: "Light bending, redshift, and time dilation need curved spacetime, not faster corpuscles."
      },
      {
        term: "Stellar holes",
        kind: "notation",
        statement: "**$3$–$100\\ M_{\\odot}$** holes from collapsed cores feed **X-ray binaries** (Cygnus X-1) and **LIGO mergers**.",
        detail: "GW150914 rang $3\\ M_{\\odot}$ into spacetime from $1.3$ billion light-years."
      },
      {
        term: "Supermassive holes",
        kind: "notation",
        statement: "**$10^6$–$10^{10}\\ M_{\\odot}$** anchor galaxies: **Sgr A* $4.3 \\times 10^6$** imaged by the Event Horizon Telescope.",
        detail: "Stellar orbits plus shadow imaging weigh them directly."
      }
    ],
    examples: [
      {
        title: "Sun as a black hole",
        problem: "Find $R_S$ for $M_{\\odot}$.",
        steps: [
          { label: "Formula", text: "$R_S = 2 \\times 6.674 \\times 10^{-11} \\times 1.99 \\times 10^{30}/9.0 \\times 10^{16} = 2950\\ \\mathrm{m}$." },
          { label: "Density", text: "Compressed into $1.08 \\times 10^{11}\\ \\mathrm{m^3}$: $\\rho = 1.8 \\times 10^{19}\\ \\mathrm{kg/m^3}$." },
          { label: "Earth check", text: "$M_E$ gives $8.87\\ \\mathrm{mm}$ — a marble." }
        ],
        result: "$2.95\\ \\mathrm{km}$ solar horizon."
      },
      {
        title: "Sgr A* size",
        problem: "$M = 4.3 \\times 10^6\\ M_{\\odot}$. Find $R_S$ in AU.",
        steps: [
          { label: "Scale", text: "$R_S = 4.3 \\times 10^6 \\times 2.95\\ \\mathrm{km} = 1.27 \\times 10^7\\ \\mathrm{km}$." },
          { label: "AU", text: "$/1.496 \\times 10^8 = 0.0849$ AU — Mercury orbit is $0.39$ AU." },
          { label: "Shadow", text: "Photon ring ~$5R_S$ spans microarcseconds from Earth — EHT target." }
        ],
        result: "$0.085$ AU horizon radius."
      }
    ],
    keyTakeaways: [
      "$R_S = 2GM/c^2$ marks light-speed escape.",
      "Horizons trap causally; outside orbits persist.",
      "Stellar mergers and galactic shadows confirm holes."
    ],
    quiz: [
      {
        q: "Solar Schwarzschild radius is about:",
        options: ["$8.87\\ \\mathrm{mm}$", "$2.95\\ \\mathrm{km}$", "$1$ AU", "$11.2\\ \\mathrm{km/s}$"],
        answer: 1,
        explanation: "$2GM/c^2$ with $M_{\\odot}$ gives $2950\\ \\mathrm{m}$."
      },
      {
        q: "Event horizon is:",
        options: ["A solid surface", "A one-way causal membrane at $R_S$", "The singularity itself", "Outside the universe"],
        answer: 1,
        explanation: "Inside, all futures point inward; signals cannot exit."
      },
      {
        q: "Strongest black-hole evidence includes:",
        options: ["Tides only", "X-ray binaries, Sgr A* orbits and shadow, LIGO waves", "Solar eclipses", "Rainbows"],
        answer: 1,
        explanation: "Independent mass, imaging, and gravitational-wave measurements converge."
      }
    ]
  }
];
