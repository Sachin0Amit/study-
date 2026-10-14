import type { SectionContent } from '../library'

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 8: Potential Energy and Conservation of Energy
// (sections 8.1–8.5, ids hall-ch8-s1..s5)
// ============================================================================

export const hallCh8Content: SectionContent[] = [
  // ------------------------------------------------------------- 8.1
  {
    sectionId: 'hall-ch8-s1',
    readingTime: 6,
    intro: "Potential energy is the energy of configuration: energy a system stores because of where things are — a book's height above the floor, a spring's compression. It is defined only through conservative forces, those whose work depends on endpoints alone, and it hands the stored energy back as kinetic energy with perfect fidelity.",
    objectives: [
      "Define potential energy through the work of a conservative force: $\\Delta U = -W_c$",
      "Compute gravitational and spring potential energy with a chosen reference",
      "Recover a conservative force as the negative slope of $U$: $F = -dU/dx$",
    ],
    concepts: [
      {
        term: 'Conservative force',
        kind: 'definition',
        statement: "**A force is conservative when the work it does depends only on the initial and final positions, not on the path between them.** Gravity near Earth and the ideal spring force are conservative; friction is not — drag a crate around any closed loop and friction does negative work every centimeter.",
        detail: "Equivalent test: the work around any closed path is zero. Only conservative forces get to define a potential energy.",
      },
      {
        term: 'Potential energy defined',
        kind: 'definition',
        statement: "**The change in potential energy is the negative of the work done by the conservative force: $\\Delta U = -W_c$.** Energy the conservative force takes out of a body is banked in the configuration, waiting to be returned.",
        detail: "$U$ itself is defined only up to an added constant — only changes are physical — so we may set $U = 0$ at any convenient reference: the floor, a tabletop, the spring's relaxed length.",
      },
      {
        term: 'The two storehouses',
        kind: 'definition',
        statement: "**With $y$ measured from the chosen reference: gravitational $U = mgy$; for a spring displaced $x$ from relaxed: $U = \\frac{1}{2}kx^{2}$.** Both are checks of $\\Delta U = -W_c$ using chapter 7's work formulas.",
        detail: "Spring check: $-W_s = \\frac{1}{2}kx_f^2 - \\frac{1}{2}kx_i^2 = \\Delta U$, exactly the change in $\\frac{1}{2}kx^2$.",
      },
      {
        term: 'Force from potential energy',
        kind: 'theorem',
        statement: "**In one dimension, the conservative force is the negative slope of the potential energy curve: $F(x) = -dU/dx$.** The minus sign means systems are pushed toward lower potential energy — they slide downhill in $U$.",
        detail: "Check both storehouses: $-d(mgy)/dy = -mg$ ✓ and $-d(\\frac{1}{2}kx^2)/dx = -kx$ ✓. Section 8-3 builds a whole reading method on this slope rule.",
      },
      {
        term: "Potential Energy: solution protocol",
        kind: "method",
        statement: "**Solve Potential Energy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is potential energy and conservation of mechanical energy; the working equation is $U_g = mgy$, $U_s = \\tfrac12kx^2$, $K+U = \\text{const}$ (isolated, no $W_{nc}$), $F = -dU/dx$; every substitution must carry its units so the final unit (joules and the slope of $U(x)$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $mgh\\sim 10^3\\ \\text{J}$ per kg per $100\\ \\text{m}$; mechanical conservation needs an isolated system with no nonconservative work.",
      },
    ],
    examples: [
      {
        title: 'Banking energy in a book',
        problem: "A 2.0 kg book is lifted from the floor to a shelf 1.5 m up. (a) How much potential energy is stored, relative to the floor? (b) If it later falls off, how fast does it hit the floor?",
        steps: [
          { label: 'Change in U', text: "$\\Delta U = mg\\Delta y = 2.0 \\times 9.8 \\times 1.5 = 29.4$ J — stored while the book sits on the shelf." },
          { label: 'Who did it', text: "Lifted slowly, the hand did $+29.4$ J while gravity did $-29.4$ J: the energy is now in configuration, not motion." },
          { label: 'The fall', text: "Gravity's work during the fall is $+29.4$ J, all of it kinetic at the floor: $v = \\sqrt{2K/m} = \\sqrt{2 \\times 29.4/2.0} = 5.4$ m/s." },
        ],
        result: "29.4 J stored on the shelf; impact speed 5.4 m/s.",
      },
      {
        title: 'Loading a spring',
        problem: "A spring with $k = 300$ N/m is compressed 0.15 m. How much energy is stored? How much at half the compression?",
        steps: [
          { label: 'Full compression', text: "$U = \\frac{1}{2} \\times 300 \\times (0.15)^2 = 3.4$ J." },
          { label: 'Half compression', text: "$U = \\frac{1}{2} \\times 300 \\times (0.075)^2 = 0.84$ J — one quarter, because $U$ is quadratic in $x$." },
        ],
        result: "3.4 J at 0.15 m; 0.84 J at 0.075 m.",
      },
    ],
    keyTakeaways: [
      "Conservative forces do endpoint-dependent work; only they define a potential energy, via $\\Delta U = -W_c$.",
      "The two standard storehouses: $U = mgy$ and $U = \\frac{1}{2}kx^2$, each measured from a freely chosen reference.",
      "The force is the negative slope of $U$: $F = -dU/dx$.",
    ],
    quiz: [
      {
        q: "A force is conservative if:",
        options: [
          "it always does positive work",
          "the work it does depends only on the endpoints of the motion",
          "its magnitude never changes",
          "it acts only on bodies at rest",
        ],
        answer: 1,
        explanation: "Path independence is the defining property — equivalently, zero work around every closed loop.",
      },
      {
        q: "The reference level where $U = 0$:",
        options: [
          "must be the ground",
          "must be sea level",
          "can be chosen freely — only changes in $U$ are physical",
          "is fixed by the SI system",
        ],
        answer: 2,
        explanation: "$U$ is defined only up to a constant; shifting the reference shifts every $U$ by the same constant and changes no physics.",
      },
      {
        q: "For the potential energy $U(x) = \\frac{1}{2}kx^2$, the associated force is:",
        options: [
          "$+kx$",
          "$-kx$",
          "$-\\frac{1}{2}kx^2$",
          "zero everywhere",
        ],
        answer: 1,
        explanation: "$F = -dU/dx = -kx$ — Hooke's restoring law recovered from the parabola's slope.",
      },
    ],
  },

  // ------------------------------------------------------------- 8.2
  {
    sectionId: 'hall-ch8-s2',
    readingTime: 7,
    intro: "Add up what a system owns in motion ($K$) and in configuration ($U$) and, whenever only conservative forces are working, the total never changes: energy merely moves between the two accounts. This is the conservation of mechanical energy — the problem-solving engine that replaces kinematics whenever timing is not the question.",
    objectives: [
      "State the conservation principle: $E_{mech} = K + U$ is constant when only conservative forces do work",
      "Run the energy recipe on falls, ramps, pendulums and coasters",
      "Recognize when mechanical energy conservation fails, and why",
    ],
    concepts: [
      {
        term: 'Mechanical energy',
        kind: 'definition',
        statement: "**$E_{mech} = K + U$: the sum of the kinetic and potential energies of a system, with $U$ including every conservative force present** — gravitational plus spring, say.",
        detail: "Mechanical energy is a property of the system, not of one body: the height $y$ in $mgy$ is measured in Earth's field, so 'book + Earth' is the honest system.",
      },
      {
        term: 'Conservation of mechanical energy',
        kind: 'theorem',
        statement: "**If only conservative forces do work, $E_{mech}$ cannot change: $K_i + U_i = K_f + U_f$.** Energy sloshes between motion and configuration, but the ledger total is fixed.",
        detail: "Proof in one line: $W_c = -\\Delta U$ and $W_{net} = \\Delta K$; when only conservative forces work, $\\Delta K = -\\Delta U$, that is, $\\Delta(K + U) = 0$.",
      },
      {
        term: 'The energy recipe',
        kind: 'method',
        statement: "**Steps: choose the $U = 0$ reference; pick the two states to compare; write $K + U$ for each; equate; solve for the unknown — usually a speed or a height.** No path details, no time, no acceleration vectors needed.",
        detail: "Ideal for 'how fast at the bottom?' questions; useless for 'when exactly?' or 'what force?' questions.",
      },
      {
        term: 'Where it fails',
        kind: 'insight',
        statement: "**Friction and drag convert mechanical energy into thermal energy, so $E_{mech}$ alone is not conserved when they act.** Sections 8-4 and 8-5 restore the books by adding a thermal account.",
        detail: "Watch a pendulum with a sticky pivot: each swing's turning point dips a little lower — the missing energy warmed the air and the pivot.",
      },
      {
        term: "Conservation of Mechanical Energy: solution protocol",
        kind: "method",
        statement: "**Solve Conservation of Mechanical Energy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is potential energy and conservation of mechanical energy; the working equation is $U_g = mgy$, $U_s = \\tfrac12kx^2$, $K+U = \\text{const}$ (isolated, no $W_{nc}$), $F = -dU/dx$; every substitution must carry its units so the final unit (joules and the slope of $U(x)$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $mgh\\sim 10^3\\ \\text{J}$ per kg per $100\\ \\text{m}$; mechanical conservation needs an isolated system with no nonconservative work.",
      },
    ],
    figures: [
      {
        caption: "An energy bar chart for a coaster released from rest at $h = 12$ m: each column stacks kinetic energy $K$ on potential energy $U$, and the stack's height — the mechanical energy $E$ — never changes. Energy merely migrates from the $U$ account to the $K$ account and back, with $v = \\sqrt{2gh}$ at the bottom.",
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy bar chart trading kinetic and potential energy at constant total"><line x1="60" y1="310" x2="660" y2="310" stroke="currentColor" stroke-width="2"/><line x1="70" y1="90" x2="650" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5" opacity="0.8"/><text x="360" y="76" font-size="15" text-anchor="middle" fill="currentColor">E = K + U stays constant</text><rect x="120" y="90" width="90" height="220" fill="currentColor" fill-opacity="0.30" stroke="currentColor" stroke-width="2"/><text x="165" y="205" font-size="20" text-anchor="middle" fill="currentColor">U</text><text x="165" y="82" font-size="13" text-anchor="middle" fill="currentColor">K = 0</text><rect x="320" y="200" width="90" height="110" fill="currentColor" fill-opacity="0.30" stroke="currentColor" stroke-width="2"/><rect x="320" y="90" width="90" height="110" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="2"/><text x="365" y="262" font-size="18" text-anchor="middle" fill="currentColor">U</text><text x="365" y="152" font-size="18" text-anchor="middle" fill="currentColor">K</text><rect x="520" y="90" width="90" height="220" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="2"/><text x="565" y="205" font-size="20" text-anchor="middle" fill="currentColor">K</text><text x="565" y="106" font-size="13" text-anchor="middle" fill="currentColor">U = 0</text><text x="165" y="335" font-size="14" text-anchor="middle" fill="currentColor">top: h = 12 m</text><text x="365" y="335" font-size="14" text-anchor="middle" fill="currentColor">halfway: h = 6 m</text><text x="565" y="335" font-size="14" text-anchor="middle" fill="currentColor">bottom: h = 0</text><rect x="150" y="30" width="16" height="16" fill="currentColor" fill-opacity="0.30" stroke="currentColor"/><text x="172" y="43" font-size="13" fill="currentColor">U = mgy</text><rect x="260" y="30" width="16" height="16" fill="currentColor" fill-opacity="0.10" stroke="currentColor"/><text x="282" y="43" font-size="13" fill="currentColor">K = ½mv²</text><text x="520" y="43" font-size="13" fill="currentColor" opacity="0.8">mass cancels: v = √(2gh)</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Roller coaster',
        problem: "A coaster car starts from rest at the top of a 12 m hill (friction negligible). (a) Speed at the bottom? (b) Speed as it crests a later 5.0 m hill?",
        steps: [
          { label: 'Reference', text: "Take $U = 0$ at the bottom. At the start, $E = mgh = m \\times 9.8 \\times 12 = 117.6m$ J." },
          { label: 'At the bottom', text: "$U = 0$, so $K = 117.6m$: $v = \\sqrt{2 \\times 9.8 \\times 12} = 15.3$ m/s (55 km/h) — the mass cancels." },
          { label: 'At 5.0 m', text: "$K = mg(12 - 5.0) = 68.6m$: $v = \\sqrt{2 \\times 9.8 \\times 7.0} = 11.7$ m/s." },
        ],
        result: "15.3 m/s at the bottom, 11.7 m/s on the 5.0 m hill.",
      },
      {
        title: 'Pendulum',
        problem: "A pendulum is released from rest with its string horizontal ($L = 1.0$ m). Find the speed at the lowest point.",
        steps: [
          { label: 'States', text: "Release: $K = 0$ and $U = mgL$ above the low point; bottom: $U = 0$." },
          { label: 'Conservation', text: "$mgL = \\frac{1}{2}mv^{2}$." },
          { label: 'Solve', text: "$v = \\sqrt{2gL} = \\sqrt{19.6} = 4.4$ m/s — independent of the mass and of the string's tension history." },
        ],
        result: "4.4 m/s at the lowest point.",
      },
    ],
    keyTakeaways: [
      "When only conservative forces do work, $K + U$ is constant between any two states of the system.",
      "The recipe — reference, two states, equate $K + U$ — bypasses forces, paths and timing entirely.",
      "Friction and drag break the $E_{mech}$ ledger; the total energy books stay balanced only after adding thermal energy.",
    ],
    quiz: [
      {
        q: "Mechanical energy $K + U$ is conserved when:",
        options: [
          "always, without exception",
          "only conservative forces do work on the system",
          "the body moves slowly",
          "no forces act at all",
        ],
        answer: 1,
        explanation: "Friction and drag convert mechanical energy to thermal energy; with only conservative work, $\\Delta(K+U) = 0$ exactly.",
      },
      {
        q: "A ball is dropped from 2.0 m (no drag). Its speed at the floor is:",
        options: [
          "4.4 m/s",
          "19.6 m/s",
          "6.3 m/s",
          "2.8 m/s",
        ],
        answer: 2,
        explanation: "$v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 2.0} = 6.3$ m/s.",
      },
      {
        q: "A skater starts from rest atop a frictionless quarter-pipe of height $h$. At the bottom:",
        options: [
          "her kinetic energy is $mgh$, regardless of the pipe's shape",
          "her kinetic energy depends on the pipe's curvature",
          "mechanical energy is not conserved on a curved path",
          "she arrives with zero speed",
        ],
        answer: 0,
        explanation: "With only gravity working, $K$ at the bottom equals the potential energy given up — the path's shape is irrelevant.",
      },
    ],
  },

  // ------------------------------------------------------------- 8.3
  {
    sectionId: 'hall-ch8-s3',
    readingTime: 7,
    intro: "Draw the potential energy $U(x)$ of a one-dimensional system and you have drawn its whole biography: slopes give forces, minima and maxima give equilibria, and a horizontal line at the total energy $E$ slices the curve into allowed regions and turning points. This section teaches you to read that graph like a story.",
    objectives: [
      "Convert between $U(x)$ and $F(x)$ through the slope rule $F = -dU/dx$",
      "Locate and classify equilibrium points as stable, unstable or neutral",
      "Use the total-energy line to find turning points, allowed regions and speeds",
    ],
    concepts: [
      {
        term: 'Slope gives force',
        kind: 'theorem',
        statement: "**$F(x) = -dU/dx$: the force at any point is minus the local slope of the potential energy curve.** Steep walls mean strong forces, and the force always points downhill on the $U$ graph.",
        detail: "This is 8-1's rule doing full work: a curve is a complete force specification — often the only one you have. Molecular physics works almost exclusively with $U(r)$ curves.",
      },
      {
        term: 'Equilibrium points',
        kind: 'definition',
        statement: "**Equilibrium points sit where $dU/dx = 0$ — the flat spots.** A local minimum is stable: displacement raises $U$ and the force pushes back. A local maximum is unstable: any nudge lowers $U$ and the body runs away. A flat stretch is neutral.",
        detail: "Second-derivative test: $d^2U/dx^2 > 0$ stable, $< 0$ unstable, $= 0$ examine higher derivatives.",
      },
      {
        term: 'Turning points',
        kind: 'definition',
        statement: "**Turning points are where the total-energy line meets the curve: $E = U$, so $K = 0$ and the body reverses.** Where $E > U$, motion is allowed; where $E < U$, the region is forbidden — the body cannot be there with that energy.",
        detail: "The speed at any allowed point follows from the vertical gap: $v = \\sqrt{2(E-U)/m}$.",
      },
      {
        term: 'The reading procedure',
        kind: 'method',
        statement: "**Draw the $E$ line; mark where it crosses the curve (turning points); read each trapped region as an oscillation well; check for escape channels where the curve dips below $E$ on out to infinity.**",
        detail: "One drawing answers questions that would take pages of force analysis — HRW's sample problems here are exercises exactly in reading.",
      },
      {
        term: "Reading a Potential Energy Curve: solution protocol",
        kind: "method",
        statement: "**Solve Reading a Potential Energy Curve problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is potential energy and conservation of mechanical energy; the working equation is $U_g = mgy$, $U_s = \\tfrac12kx^2$, $K+U = \\text{const}$ (isolated, no $W_{nc}$), $F = -dU/dx$; every substitution must carry its units so the final unit (joules and the slope of $U(x)$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $mgh\\sim 10^3\\ \\text{J}$ per kg per $100\\ \\text{m}$; mechanical conservation needs an isolated system with no nonconservative work.",
      },
    ],
    figures: [
      {
        caption: "A potential energy curve with the total energy drawn as a horizontal line. Where the line crosses the curve ($x_1$, $x_2$) the kinetic energy $K = E - U$ vanishes — those are the turning points. Between them the particle oscillates; outside them $E < U$ is forbidden territory. The vertical gap between line and curve measures $K$ at a glance.",
        svg: `<svg viewBox="0 0 720 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Potential energy curve with total energy line, turning points and allowed regions"><defs><marker id="curE" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto"><path d="M0,0 L9,4 L0,8 z" fill="currentColor"/></marker></defs><line x1="70" y1="330" x2="680" y2="330" stroke="currentColor" stroke-width="2" marker-end="url(#curE)"/><text x="688" y="336" font-size="15" fill="currentColor">x</text><line x1="80" y1="345" x2="80" y2="45" stroke="currentColor" stroke-width="2" marker-end="url(#curE)"/><text x="92" y="52" font-size="15" fill="currentColor">U(x)</text><line x1="86" y1="160" x2="660" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5" opacity="0.8"/><text x="94" y="152" font-size="14" fill="currentColor">E</text><path d="M 110 80 C 180 100 250 160 320 235 C 360 275 380 280 420 270 C 470 255 540 180 610 130" fill="none" stroke="currentColor" stroke-width="3"/><line x1="243" y1="330" x2="243" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="571" y1="330" x2="571" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/><text x="243" y="352" font-size="15" text-anchor="middle" fill="currentColor">x₁</text><text x="571" y="352" font-size="15" text-anchor="middle" fill="currentColor">x₂</text><line x1="497" y1="221" x2="497" y2="160" stroke="currentColor" stroke-width="2" marker-start="url(#curE)" marker-end="url(#curE)"/><text x="488" y="196" font-size="14" text-anchor="end" fill="currentColor">K = E − U</text><circle cx="392" cy="274" r="5" fill="currentColor"/><text x="390" y="262" font-size="13" text-anchor="middle" fill="currentColor" opacity="0.9">stable equilibrium: F = 0</text><line x1="255" y1="312" x2="560" y2="312" stroke="currentColor" stroke-width="2" marker-start="url(#curE)" marker-end="url(#curE)"/><text x="400" y="302" font-size="13" text-anchor="middle" fill="currentColor" opacity="0.9">oscillates between the turning points</text><text x="135" y="62" font-size="13" fill="currentColor" opacity="0.8">U > E — forbidden</text><text x="548" y="108" font-size="13" fill="currentColor" opacity="0.8">U > E — forbidden</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'A quadratic well, off-center',
        problem: "A 0.50 kg particle moves in one dimension with $U(x) = 2(x-1)^2$ J ($x$ in m). Find (a) the equilibrium and its stability, (b) the effective spring constant, (c) the turning points and the bottom speed for total energy $E = 2.0$ J.",
        steps: [
          { label: 'Force and equilibrium', text: "$F = -dU/dx = -4(x-1)$ N, which vanishes at $x = 1.0$ m. Since $d^2U/dx^2 = 4 > 0$, it is a stable minimum." },
          { label: 'Effective spring', text: "$F = -k_{eff}(x - x_0)$ with $k_{eff} = 4.0$ N/m about $x_0 = 1.0$ m — Hooke's law in disguise." },
          { label: 'Turning points', text: "$E = U$ at the edges: $2(x-1)^2 = 2.0$ gives $x - 1 = \\pm 1$, so $x = 0$ and $x = 2.0$ m." },
          { label: 'Bottom speed', text: "$K = E - U(1) = 2.0$ J, so $v = \\sqrt{2 \\times 2.0/0.50} = 2.8$ m/s." },
        ],
        result: "Stable equilibrium at $x = 1.0$ m with $k_{eff} = 4.0$ N/m; turning points $x = 0$ and $2.0$ m; bottom speed 2.8 m/s.",
      },
      {
        title: "Reading a Potential Energy Curve: $mgh$ to $\\tfrac12mv^2$",
        problem: "A $5\\ \\text{kg}$ block drops $20\\ \\text{m}$. How much gravitational potential is lost, and what speed does energy conservation predict at the bottom (from rest, no friction)?",
        steps: [
          { label: "Lost $U$", text: "$\\Delta U = mgh = 5\\times 9.8\\times 20 = 980\\ \\text{J}$." },
          { label: "Gain $K$", text: "$\\tfrac12mv^2 = 980$ gives $v = \\sqrt{2gh} = \\sqrt{392} = 19.8\\ \\text{m/s}$." },
          { label: "Check", text: "Mass cancels: any mass dropped $20\\ \\text{m}$ reaches 19.8\\ \\text{m/s}$." },
        ],
        result: "$980\\ \\text{J} \\to v \\approx 19.8\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      "The force is the negative slope of the potential energy curve — steep means strong, downhill means pushed.",
      "Flat spots are equilibria: minima stable, maxima unstable, flats neutral.",
      "The total-energy line splits the graph: crossings are turning points, the region $E > U$ is allowed, and $K$ is the vertical gap.",
    ],
    quiz: [
      {
        q: "At some point the $U(x)$ curve is rising to the right. The force there points:",
        options: [
          "to the right",
          "to the left",
          "upward",
          "there is no force there",
        ],
        answer: 1,
        explanation: "$F = -dU/dx$: a positive slope gives a negative (leftward) force, pushing the particle downhill in $U$.",
      },
      {
        q: "A stable equilibrium point of a one-dimensional system is always:",
        options: [
          "a local minimum of $U$",
          "a local maximum of $U$",
          "a point with $U = 0$",
          "a vertical asymptote of $U$",
        ],
        answer: 0,
        explanation: "Any displacement from a minimum raises $U$, so the force pushes back toward it.",
      },
      {
        q: "Turning points of the motion occur where:",
        options: [
          "$E = U$",
          "the curve is steepest",
          "$U = 0$",
          "every local maximum of $U$",
        ],
        answer: 0,
        explanation: "Where the energy line meets the curve, $K = E - U = 0$: the body stops and turns around.",
      },
      {
        q: "A 0.40 kg particle has $E - U = 5.0$ J at some allowed point. Its speed there is:",
        options: [
          "2.5 m/s",
          "5.0 m/s",
          "12.5 m/s",
          "impossible to determine without the path",
        ],
        answer: 1,
        explanation: "$v = \\sqrt{2(E-U)/m} = \\sqrt{2 \\times 5.0/0.40} = 5.0$ m/s — the gap alone decides.",
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Potential-curve analysis, complete: turning points, equilibria and small oscillations',
        blocks: [
          {
            kind: 'theorem',
            heading: 'The complete toolkit',
            body: "Everything about one-dimensional conservative motion follows from two statements. (i) Energy conservation: $\\frac{1}{2}m\\dot{x}^{2} + U(x) = E$, a constant fixed by the initial conditions. (ii) The slope rule: $F = -U'(x)$. Together they turn dynamics into geometry: the particle is a bead sliding without friction on a wire shaped like $U(x)$, released from rest at height $E$, and every question about the motion becomes a question about the curve.",
          },
          {
            kind: 'derivation',
            heading: 'Speed and turning points from the energy line',
            body: "Solving the conservation statement for the velocity gives $$\\dot{x} = \\pm\\sqrt{\\frac{2}{m}\\bigl(E - U(x)\\bigr)}.$$ Real motion requires $E \\ge U(x)$ — the allowed region. Where $E = U$ the speed vanishes: those are the turning points, found by solving $U(x) = E$, and the sign of $\\dot{x}$ flips there (the bead stops and slides back). Where $E < U$ the region is forbidden — not merely hard to reach but impossible, since $\\frac{1}{2}m\\dot{x}^{2}$ cannot be negative. This is exactly how bond lengths are bounded in a molecule: the outer turning point of the vibrational energy line is the largest separation the atoms ever reach.",
          },
          {
            kind: 'theorem',
            heading: 'Classification of equilibria',
            body: "At a critical point $x_0$ where $U'(x_0) = 0$: if $U''(x_0) > 0$ (local minimum) the equilibrium is stable — displacement raises $U$ and the restoring force pushes back. If $U''(x_0) < 0$ (local maximum) it is unstable: any nudge lowers $U$ and the particle accelerates away. If the curve is flat over an interval, equilibrium is neutral: the particle drifts without restoring or expelling. In the degenerate case $U''(x_0) = 0$ with nonzero higher derivatives, the classification moves to the first nonzero derivative beyond the first.",
          },
          {
            kind: 'derivation',
            heading: 'Small oscillations: every well is a spring',
            body: "Taylor-expand about a stable minimum $x_0$: $U(x) \\approx U(x_0) + \\frac{1}{2}U''(x_0)\\xi^{2}$ with $\\xi = x - x_0$ (the linear term vanishes because $U'(x_0) = 0$). The force is then $F = -U''(x_0)\\xi$ — Hooke's law with effective stiffness $k_{eff} = U''(x_0)$. Small-amplitude motion in any smooth well is therefore simple harmonic with $$\\omega = \\sqrt{\\frac{U''(x_0)}{m}}, \\qquad T = 2\\pi\\sqrt{\\frac{m}{U''(x_0)}}.$$ This is why springs, pendulums, molecular vibrations and building sways all oscillate sinusoidally: up close, every valley is a parabola.",
          },
          {
            kind: 'example',
            heading: 'The double well, worked to the last digit',
            body: "Take $U(x) = \\frac{x^{4}}{4} - \\frac{x^{2}}{2}$ (joules, $x$ in meters) and $m = 0.50$ kg. Critical points: $U' = x^{3} - x = 0$ gives $x = -1, 0, +1$ m. The second derivative $U'' = 3x^{2} - 1$ is $+2$ N/m at $x = \\pm 1$ — two stable minima with $U(\\pm 1) = -0.25$ J — and $-1$ at $x = 0$, an unstable maximum at $U = 0$: a barrier $0.25$ J above either well floor. Small oscillations about either minimum have $\\omega = \\sqrt{2/0.50} = 2.0$ rad/s, so the period is $T = 2\\pi/\\omega = 3.1$ s. Now inject total energy $E = -0.16$ J, which is $0.09$ J above a well floor. Turning points solve $\\frac{x^{4}}{4} - \\frac{x^{2}}{2} = -0.16$; writing $y = x^{2}$ gives $y^{2} - 2y + 0.64 = 0$, so $y = 0.40$ or $1.60$ — the particle, say in the right well, swings between $x = +0.63$ m and $x = +1.26$ m. At the well bottom its speed is $v = \\sqrt{2(E - U_{min})/m} = \\sqrt{2 \\times 0.09/0.50} = 0.60$ m/s. Raise $E$ to $0$ — the barrier top — and the oscillation grows until the particle can cross into the other well: that energy is the separatrix. Any $E > 0$ lets it roam over both wells and out to infinity.",
          },
          {
            kind: 'application',
            heading: 'Molecular bonds read off a curve',
            body: "The Lennard-Jones interaction between two atoms, $U(r) = \\varepsilon\\left[(r_0/r)^{12} - 2(r_0/r)^{6}\\right]$, has a minimum of depth $\\varepsilon$ at $r = r_0$. Every number a chemist quotes is a feature of this curve: the well depth $\\varepsilon$ is the dissociation energy (a few times $10^{-21}$ J for noble-gas pairs), the curvature $U''(r_0)$ at the minimum fixes the vibrational frequency through the small-oscillation formula, and the steep inner wall is why solids resist compression. Pull-out tests, atomic-force microscopy and spectroscopy all amount to mapping this curve and reading off its geometry.",
          },
          {
            kind: 'remark',
            heading: 'Three dimensions and beyond',
            body: "In three dimensions the slope rule becomes $\\vec{F} = -\\nabla U$ and the curve becomes a landscape; equilibrium classification uses the Hessian matrix of second derivatives, and stability requires every eigenvalue to be positive. The energy-line method survives intact — allowed regions are where $E \\ge U$. The picture returns at full strength in chapter 24, where electric potential curves govern electrons in devices, and again in quantum mechanics, where wavefunctions must live inside the allowed region.",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------- 8.4
  {
    sectionId: 'hall-ch8-s4',
    readingTime: 6,
    intro: "Real systems leak: friction turns mechanical energy into heat, and outside agents push energy in or pull it out. The full accounting starts here: track the work done by external forces, add a thermal account for friction, and the energy ledger closes to the last joule.",
    objectives: [
      "Relate external work to a system's energy change: $W_{ext} = \\Delta E_{mech}$ when friction is absent",
      "Include friction: $W_{ext} = \\Delta K + \\Delta U + \\Delta E_{th}$ with $\\Delta E_{th} = f_k d$",
      "Choose the system boundary wisely, and know which forces are external",
    ],
    concepts: [
      {
        term: 'External work',
        kind: 'definition',
        statement: "**Choose a system; forces from outside it do external work $W_{ext}$ on it.** For a single particle, $W_{ext} = \\Delta K$. For a system with internal structure and no friction, $W_{ext} = \\Delta K + \\Delta U = \\Delta E_{mech}$.",
        detail: "Example: system = book + Earth. The hand is external and does $+mgh$ while the book is lifted slowly; gravity is internal, so its work never appears — it lives in $\\Delta U$ instead.",
      },
      {
        term: "Friction's thermal account",
        kind: 'law',
        statement: "**When kinetic friction acts, $W_{ext} = \\Delta K + \\Delta U + \\Delta E_{th}$, where $\\Delta E_{th} = f_k d$: the product of the friction magnitude and the sliding distance.** Thermal energy is always created — friction never refunds.",
        detail: "Here $d$ is the distance the surfaces slide past each other. Because the contact spots deform and slip microscopically, the clean way to book the loss is the thermal account rather than a signed 'work of friction'.",
      },
      {
        term: 'System choice',
        kind: 'method',
        statement: "**The boundary decides what counts.** Gravity on a book is external if the system is 'book', and internal (absorbed into $\\Delta U$) if the system is 'book + Earth'. Choose the boundary that makes the question easy.",
        detail: "External work is energy crossing the boundary; internal conservative exchanges hide inside $\\Delta U$; internal friction shows up as $\\Delta E_{th}$.",
      },
      {
        term: 'The zero-work carry',
        kind: 'insight',
        statement: "**Carrying a bag at constant height does no work on the bag — the upward force you exert is perpendicular to the horizontal displacement.** Yet you tire: your muscle fibers contract internally, spending chemical energy (an 8-5 account).",
        detail: "Force without displacement along its line is energetically free for the bag, not for the biology.",
      },
      {
        term: "Work Done on a System by an External Force: solution protocol",
        kind: "method",
        statement: "**Solve Work Done on a System by an External Force problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is potential energy and conservation of mechanical energy; the working equation is $U_g = mgy$, $U_s = \\tfrac12kx^2$, $K+U = \\text{const}$ (isolated, no $W_{nc}$), $F = -dU/dx$; every substitution must carry its units so the final unit (joules and the slope of $U(x)$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $mgh\\sim 10^3\\ \\text{J}$ per kg per $100\\ \\text{m}$; mechanical conservation needs an isolated system with no nonconservative work.",
      },
    ],
    examples: [
      {
        title: 'The dragged crate',
        problem: "A 20 kg crate is pulled 3.0 m across a level floor by a 100 N force at 37° above the horizontal. The floor's coefficient of kinetic friction is 0.50. Find the crate's final speed (from rest) and the full energy ledger.",
        steps: [
          { label: 'External work', text: "$W_{ext} = Fd\\cos 37^{\\circ} = 100 \\times 3.0 \\times 0.80 = 240$ J — the only energy crossing the boundary." },
          { label: 'Friction', text: "$N = mg - F\\sin 37^{\\circ} = 196 - 60 = 136$ N, so $f_k = 0.50 \\times 136 = 68$ N and $\\Delta E_{th} = f_k d = 68 \\times 3.0 = 204$ J." },
          { label: 'Ledger', text: "$\\Delta K = W_{ext} - \\Delta E_{th} - \\Delta U = 240 - 204 - 0 = 36$ J on the level floor." },
          { label: 'Speed', text: "$v = \\sqrt{2 \\times 36/20} = 1.9$ m/s." },
        ],
        result: "1.9 m/s; of the 240 J pulled in, 204 J — 85% — went to warming floor and crate. A typical friction tax.",
      },
      {
        title: "Work Done on a System by an External Force: $mgh$ to $\\tfrac12mv^2$",
        problem: "A $2\\ \\text{kg}$ block drops $10\\ \\text{m}$. How much gravitational potential is lost, and what speed does energy conservation predict at the bottom (from rest, no friction)?",
        steps: [
          { label: "Lost $U$", text: "$\\Delta U = mgh = 2\\times 9.8\\times 10 = 196\\ \\text{J}$." },
          { label: "Gain $K$", text: "$\\tfrac12mv^2 = 196$ gives $v = \\sqrt{2gh} = \\sqrt{196} = 14\\ \\text{m/s}$." },
          { label: "Check", text: "Mass cancels: any mass dropped $10\\ \\text{m}$ reaches 14\\ \\text{m/s}$." },
        ],
        result: "$196\\ \\text{J} \\to v \\approx 14\\ \\text{m/s}$.",
      },
    ],
    keyTakeaways: [
      "External work changes a system's mechanical energy: $W_{ext} = \\Delta K + \\Delta U$ when friction is absent.",
      "With friction, add the thermal account: $\\Delta E_{th} = f_k d$, always positive.",
      "The system boundary decides whether a force counts as external work or hides inside $\\Delta U$.",
    ],
    quiz: [
      {
        q: "Kinetic friction acts while a system slides a distance $d$. The thermal energy created is:",
        options: [
          "$f_k d$, always positive",
          "$\\mu_s N$",
          "zero when the speed is constant",
          "negative when the friction acts downhill",
        ],
        answer: 0,
        explanation: "The friction magnitude times the sliding distance lands in the thermal account regardless of direction or speed.",
      },
      {
        q: "You carry a 15 kg bag horizontally 10 m at constant speed. The work done on the bag by your upward force is:",
        options: [
          "1470 J",
          "150 J",
          "zero, since the force is perpendicular to the displacement",
          "impossible to compute without your walking speed",
        ],
        answer: 2,
        explanation: "$W = Fd\\cos 90^{\\circ} = 0$. The tiring you feel is chemical energy spent inside your muscles, not work on the bag.",
      },
      {
        q: "A system's mechanical energy changes by +50 J while external forces do +80 J of work. The other 30 J:",
        options: [
          "was destroyed",
          "became 30 J of thermal energy via friction",
          "went into the normal force",
          "is the change in potential energy",
        ],
        answer: 1,
        explanation: "$W_{ext} = \\Delta E_{mech} + \\Delta E_{th}$, so $\\Delta E_{th} = 80 - 50 = 30$ J: friction's cut.",
      },
    ],
  },

  // ------------------------------------------------------------- 8.5
  {
    sectionId: 'hall-ch8-s5',
    readingTime: 6,
    intro: "Zoom out to the whole system — mechanical, thermal, chemical, everything — and energy becomes the most strictly conserved quantity in physics. This section assembles the complete ledger: external work still crosses boundaries, but inside the system energy only transforms. Nothing is ever lost; it only moves.",
    objectives: [
      "State the full energy ledger: $W_{ext} = \\Delta K + \\Delta U + \\Delta E_{int}$",
      "Track transformations among mechanical, thermal and chemical energy in real situations",
      "Explain why 'conserving energy' in the everyday sense and in the physics sense are different claims",
    ],
    concepts: [
      {
        term: 'The full ledger',
        kind: 'law',
        statement: "**A system's total energy is the sum over all accounts: $E = K + U + E_{thermal} + E_{chemical} + \\dots$, and the only way to change it is energy crossing the boundary as external work (or heat, in later chapters): $W_{ext} = \\Delta K + \\Delta U + \\Delta E_{int}$.** For an isolated system, $\\Delta E_{total} = 0$ — always.",
        detail: "Each earlier chapter is a special case: single particle ($W = \\Delta K$), no friction ($W_{ext} = \\Delta E_{mech}$), friction aboard (8-4's law).",
      },
      {
        term: 'Transformations, not losses',
        kind: 'insight',
        statement: "**Energy changes form but never vanishes: a falling diver trades $U$ for $K$; brakes trade $K$ for heat; muscles trade chemical energy — at roughly a quarter efficiency — for mechanical work; the Sun trades mass itself for light.**",
        detail: "When someone says energy was 'lost', they mean it left the accounts they were watching — usually into the thermal one, where it is spread among $10^{23}$ random molecular motions and hard to harvest.",
      },
      {
        term: 'Internal energy',
        kind: 'definition',
        statement: "**$E_{int}$ collects every internal account: thermal energy (random molecular motion), chemical energy (molecular configuration), nuclear, and the rest.** Friction's $f_k d$ is the commonest deposit into the thermal account.",
        detail: "The body is a chemical engine: it draws down its chemical account to do mechanical work and to dump heat, which is why climbing burns food Calories.",
      },
      {
        term: 'The full-ledger recipe',
        kind: 'method',
        statement: "**(1)** Define the system and its boundary. **(2)** List the external forces and compute their work. **(3)** Write every internal change of account: $\\Delta K$, $\\Delta U$, $\\Delta E_{th}$, $\\Delta E_{chem}$. **(4)** Balance: external work in equals the sum of changes.",
        detail: "Sign discipline: work crossing in goes on the left; every internal account's change goes on the right, with its own sign.",
      },
      {
        term: "Conservation of Energy: solution protocol",
        kind: "method",
        statement: "**Solve Conservation of Energy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is potential energy and conservation of mechanical energy; the working equation is $U_g = mgy$, $U_s = \\tfrac12kx^2$, $K+U = \\text{const}$ (isolated, no $W_{nc}$), $F = -dU/dx$; every substitution must carry its units so the final unit (joules and the slope of $U(x)$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $mgh\\sim 10^3\\ \\text{J}$ per kg per $100\\ \\text{m}$; mechanical conservation needs an isolated system with no nonconservative work.",
      },
    ],
    examples: [
      {
        title: 'The rough slide',
        problem: "A 2.0 kg block starts from rest at the top of a 30° incline 3.0 m high (6.0 m along the slope), with $\\mu_k = 0.20$. How fast does it reach the bottom, and how much energy became heat?",
        steps: [
          { label: 'Available energy', text: "The configuration gives up $mgh = 2.0 \\times 9.8 \\times 3.0 = 58.8$ J." },
          { label: 'Thermal account', text: "$\\Delta E_{th} = \\mu_k mg\\cos\\theta \\cdot d = 0.20 \\times 2.0 \\times 9.8 \\times 0.866 \\times 6.0 = 20.4$ J." },
          { label: 'Ledger', text: "$\\Delta K = 58.8 - 20.4 = 38.4$ J, so $v = \\sqrt{2 \\times 38.4/2.0} = 6.2$ m/s." },
          { label: 'Compare', text: "Without friction the block would arrive at $\\sqrt{2gh} = 7.7$ m/s — friction took a 35% bite out of the energy budget." },
        ],
        result: "6.2 m/s at the bottom; 20.4 J warmed the block and ramp together.",
      },
      {
        title: 'The cost of a climb, in food',
        problem: "A 70 kg climber gains 400 m of altitude in 1.0 hour. (a) How much mechanical work is done on the climber? (b) If muscles convert chemical energy at 25% efficiency, how much metabolic energy is spent — in joules and in food Calories?",
        steps: [
          { label: 'Mechanical work', text: "$W = mgh = 70 \\times 9.8 \\times 400 = 2.7 \\times 10^{5}$ J." },
          { label: 'Metabolic energy', text: "$E_{chem} = 2.7 \\times 10^{5}/0.25 = 1.1 \\times 10^{6}$ J — the rest (75%) leaves as body heat." },
          { label: 'In food Calories', text: "With 1 food Calorie $= 4186$ J: $E = 1.1 \\times 10^{6}/4186 = 260$ Cal." },
        ],
        result: "About $2.7 \\times 10^{5}$ J of mechanical work, bought with roughly $1.1 \\times 10^{6}$ J — 260 food Calories — of chemical energy.",
      },
    ],
    keyTakeaways: [
      "Total energy $K + U + E_{int}$ changes only by external work: $W_{ext} = \\Delta K + \\Delta U + \\Delta E_{int}$.",
      "Friction and drag move energy into the thermal account; bodies move it out of the chemical one at about 25% efficiency.",
      "An isolated system's total energy is exactly conserved — 'energy waste' is energy that left the account you were watching.",
    ],
    quiz: [
      {
        q: "For an isolated system, the total energy is:",
        options: [
          "constant only if there is no friction",
          "constant, always — whatever happens inside",
          "slowly decreasing due to internal friction",
          "increasing whenever internal forces act",
        ],
        answer: 1,
        explanation: "Internal friction merely moves energy from the mechanical to the thermal account; the total cannot change without energy crossing the boundary.",
      },
      {
        q: "In the ledger $W_{ext} = \\Delta K + \\Delta U + \\Delta E_{int}$, the $E_{int}$ term includes:",
        options: [
          "the kinetic energy of the center of mass",
          "gravitational potential energy",
          "thermal and chemical energy inside the system",
          "the work of external forces",
        ],
        answer: 2,
        explanation: "Internal accounts are everything that is neither bulk motion ($K$) nor configuration energy ($U$) — chiefly thermal and chemical.",
      },
      {
        q: "A 1000 kg car brakes from 25 m/s to rest on level ground. The thermal energy created is about:",
        options: [
          "$3.1 \\times 10^{5}$ J",
          "$2.5 \\times 10^{4}$ J",
          "zero — braking is internal to the car",
          "$1.2 \\times 10^{5}$ J",
        ],
        answer: 0,
        explanation: "$\\frac{1}{2} \\times 1000 \\times 25^2 = 3.1 \\times 10^{5}$ J of kinetic energy all lands in the brakes and tires as heat.",
      },
    ],
  },
]
