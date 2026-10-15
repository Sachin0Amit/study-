import type { SectionContent } from '../library'

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 6: Force and Motion—II (sections 6.1–6.3, ids hall-ch6-s1..s3)
// ============================================================================

export const hallCh6Content: SectionContent[] = [
  // ------------------------------------------------------------- 6.1
  {
    sectionId: 'hall-ch5-s4',
    readingTime: 7,
    intro: "Friction is the force we love to hate and cannot live without: it stops cars, walks us forward, holds every nail and knot — and wastes energy as heat. Microscopically it is a story of atoms: surfaces so rough at the atomic scale that they weld together at scattered spots. That story carries two empirical rules, and this section turns them into problem-solving machinery.",
    objectives: [
      "Distinguish static from kinetic friction and compute each from the normal force and the correct coefficient",
      "Decide whether a body slides: compare the friction the situation demands with the maximum $\\mu_s N$",
      "Solve inclined-plane problems with friction, including the angle of repose",
    ],
    concepts: [
      {
        term: 'Where friction comes from',
        kind: 'insight',
        statement: "**Pressed-together surfaces touch only at scattered high spots, which cold-weld; sliding must rip these welds apart.** The true contact area is microscopic — which is why friction depends on how hard the surfaces are pressed (through $N$) but not on the apparent contact area.",
        detail: "Kinetic friction is usually smaller than static because a moving surface has less time to settle into and weld with the other. Like the normal force, friction is ultimately electromagnetic.",
      },
      {
        term: 'Static friction',
        kind: 'law',
        statement: "**Static friction is self-adjusting: it takes whatever value equilibrium requires, up to a ceiling $f_{s,max} = \\mu_s N$.** In symbols, $f_s \\le \\mu_s N$, with $\\mu_s$ the coefficient of static friction for the surface pair.",
        detail: "Push a crate gently and friction pushes back gently; push harder and it matches you — until at $f_{s,max}$ the crate breaks loose. The maximum is the useful number: it is the breakaway threshold.",
      },
      {
        term: 'Kinetic friction',
        kind: 'law',
        statement: "**Once sliding occurs, friction has one fixed magnitude: $f_k = \\mu_k N$, directed opposite the relative sliding.** Coefficients are properties of the pair: rubber on dry concrete ($\\mu_s \\approx 1.0$, $\\mu_k \\approx 0.80$) grips hard; waxed wood on wet snow ($0.14$, $0.10$) barely; Teflon's $\\mu_k \\approx 0.04$ is why nothing sticks to it.",
        detail: "The empirical content of the law is that the ratio $f_k/N$ stays roughly constant — independent of speed over a wide range and of apparent contact area.",
      },
      {
        term: 'Reading a friction problem',
        kind: 'method',
        statement: "**First decide whether the body slides.** Test the static case (with $a = 0$ if the body is at rest): compute the friction the situation demands. If its magnitude is at most $\\mu_s N$, the body holds and that is the friction. If not, it slides — switch to $f_k = \\mu_k N$ opposite the motion and solve with Newton's second law.",
        detail: "The classic error is writing $f_s = \\mu_s N$ for a body not on the verge of slipping — that formula is only the maximum, not the value.",
      },
      {
        term: "Friction: solution protocol",
        kind: "method",
        statement: "**Solve Friction problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is friction, drag and centripetal dynamics; the working equation is $f_{s,\\max} = \\mu_s N$, $f_k = \\mu_k N$, $D = \\tfrac12\\rho CAv^2$, $F = mv^2/r$; every substitution must carry its units so the final unit (dimensionless $\\mu$ and $\\text{m/s}$ terminal speed) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\mu_s\\sim 0.1$--$1.0$; skydiver terminal $\\sim 60\\ \\text{m/s}$ closed, $\\sim 5\\ \\text{m/s}$ open; Coulomb friction and $D\\propto v^2$ are empirical; $mv^2/r$ needs the real inward agent.",
      },
    ],
    figures: [
      {
        caption: "A block on an incline of angle $\\theta$ with friction: the weight $m\\vec{g}$ resolves into $mg\\sin\\theta$ along the slope (the driving component) and $mg\\cos\\theta$ perpendicular to it (which the normal force balances). Friction acts along the surface, opposing the sliding.",
        svg: `<svg viewBox="0 0 720 380" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Block on an incline with friction and weight components"><defs><marker id="incB" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto"><path d="M0,0 L9,4 L0,8 z" fill="currentColor"/></marker></defs><line x1="70" y1="340" x2="650" y2="340" stroke="currentColor" stroke-width="2"/><line x1="160" y1="340" x2="559" y2="154" stroke="currentColor" stroke-width="2"/><polygon points="299,275 380,237 357,187 275,226" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="328" cy="231" r="4.5" fill="currentColor"/><line x1="328" y1="231" x2="290" y2="150" stroke="currentColor" stroke-width="3" marker-end="url(#incB)"/><text x="270" y="142" font-size="18" fill="currentColor">N</text><line x1="328" y1="231" x2="328" y2="332" stroke="currentColor" stroke-width="3" marker-end="url(#incB)"/><text x="345" y="326" font-size="18" fill="currentColor">mg</text><line x1="328" y1="231" x2="290" y2="249" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#incB)"/><text x="195" y="266" font-size="15" fill="currentColor">mg sin θ</text><line x1="328" y1="231" x2="366" y2="312" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#incB)"/><text x="398" y="312" font-size="15" fill="currentColor">mg cos θ</text><line x1="290" y1="249" x2="328" y2="332" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><line x1="366" y1="312" x2="328" y2="332" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><line x1="328" y1="231" x2="400" y2="197" stroke="currentColor" stroke-width="3" marker-end="url(#incB)"/><text x="414" y="194" font-size="18" fill="currentColor">f</text><path d="M 235 340 A 75 75 0 0 0 228 308" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="252" y="324" font-size="15" fill="currentColor">θ</text><text x="468" y="252" font-size="14" fill="currentColor" opacity="0.8">if sliding: f = μ N, up the slope</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'The angle of repose',
        problem: "A crate rests on a ramp whose tilt is slowly increased. The crate first slips when the ramp reaches 22°. What is the coefficient of static friction between crate and ramp?",
        steps: [
          { label: 'On the verge', text: "At the breakaway angle, the driving component $mg\\sin\\theta$ just equals the maximum static friction $\\mu_s N$, with $N = mg\\cos\\theta$ from the perpendicular balance." },
          { label: 'Set equal', text: "$mg\\sin\\theta = \\mu_s mg\\cos\\theta$ — the weight cancels, so the angle of repose does not depend on mass." },
          { label: 'Solve', text: "$\\mu_s = \\tan\\theta = \\tan 22^{\\circ} = 0.40$." },
        ],
        result: "$\\mu_s = 0.40$; any ramp steeper than the angle of repose $\\tan^{-1}\\mu_s = 22^{\\circ}$ sheds the crate.",
      },
      {
        title: 'Sliding down the rough ramp',
        problem: "A 5.0 kg crate slides down a 30° ramp with $\\mu_k = 0.30$ between crate and ramp. Starting from rest, how fast is it moving after 4.0 m?",
        steps: [
          { label: 'Forces along the slope', text: "Driving component $mg\\sin\\theta$ down the slope; friction $f_k = \\mu_k N$ up the slope, with $N = mg\\cos\\theta$ perpendicular." },
          { label: 'Numbers', text: "$mg\\sin 30^{\\circ} = 5.0 \\times 9.8 \\times 0.50 = 24.5$ N; $N = 5.0 \\times 9.8 \\times 0.866 = 42.4$ N, so $f_k = 0.30 \\times 42.4 = 12.7$ N." },
          { label: 'Second law', text: "$a = (24.5 - 12.7)/5.0 = 2.35$ m/s² down the slope." },
          { label: 'Kinematics', text: "From rest, $v = \\sqrt{2ad} = \\sqrt{2 \\times 2.35 \\times 4.0} = 4.3$ m/s." },
        ],
        result: "$a = 2.4$ m/s²; after 4.0 m the crate is moving at 4.3 m/s. (Without friction, $a = g\\sin 30^{\\circ} = 4.9$ m/s².)",
      },
    ],
    keyTakeaways: [
      "Static friction adjusts to demand, up to $\\mu_s N$; kinetic friction is fixed at $\\mu_k N$ once sliding starts, directed against the sliding.",
      "Whether a body slides is a comparison: friction demanded versus $\\mu_s N$ — do the static test first.",
      "The angle of repose is $\\tan^{-1}\\mu_s$: tilt past it and the body breaks loose; mass cancels.",
    ],
    quiz: [
      {
        q: "A 20 kg sled is pulled across snow ($\\mu_k = 0.10$) at constant speed by a horizontal rope. The rope tension is:",
        options: [
          "196 N",
          "2.0 N",
          "20 N",
          "0 N",
        ],
        answer: 2,
        explanation: "Constant speed means zero net force: $T = f_k = \\mu_k mg = 0.10 \\times 20 \\times 9.8 = 19.6 \\approx 20$ N.",
      },
      {
        q: "You push a couch horizontally with 150 N and it stays put. The static friction on it is:",
        options: [
          "$\\mu_s N$",
          "zero",
          "150 N",
          "equal to the couch's weight",
        ],
        answer: 2,
        explanation: "With no motion and no acceleration, friction must exactly balance the applied force. $\\mu_s N$ is only the ceiling it could reach.",
      },
      {
        q: "Anti-lock brakes are better than locked, skidding brakes because:",
        options: [
          "kinetic friction is larger than static friction",
          "the tires keep gripping in the static regime, where friction can reach $\\mu_s N > \\mu_k N$",
          "they reduce the normal force",
          "locked wheels rotate faster",
        ],
        answer: 1,
        explanation: "A rolling, unskidding tire works through static friction, whose maximum exceeds the kinetic value that applies during a skid.",
      },
      {
        q: "A coin rests on a book that is pushed horizontally, and the coin accelerates along with it. The static friction on the coin points:",
        options: [
          "backward, opposing the motion",
          "forward — friction opposes relative sliding, not motion",
          "vertically, along the normal force",
          "nowhere: friction cannot accelerate anything",
        ],
        answer: 1,
        explanation: "Without forward static friction the coin would slide backward relative to the accelerating book. Friction opposes relative slip between surfaces, which is not the same as opposing motion.",
      },
    ],
  },

  // ------------------------------------------------------------- 6.2
  {
    sectionId: 'hall-ch5-s5',
    readingTime: 5,
    intro: "Friction with air — drag — grows with the square of the speed, and that fact has a striking consequence: a falling body cannot keep accelerating forever. When drag grows to match gravity, the acceleration vanishes and the body falls at its terminal speed, the number that decides whether a raindrop stings and a skydiver survives.",
    objectives: [
      "Compute the drag force $D = \\frac{1}{2}C\\rho A v^2$ and say what each factor means",
      "Derive and evaluate the terminal speed $v_t = \\sqrt{2mg/(C\\rho A)}$",
      "Describe how speed approaches $v_t$ in time, for both quadratic and linear drag",
    ],
    concepts: [
      {
        term: 'The drag law',
        kind: 'law',
        statement: "**Air drag on a blunt body moving at speed $v$ through air of density $\\rho$ is $D = \\frac{1}{2}C\\rho A v^{2}$, directed opposite the motion relative to the air.** $A$ is the effective cross-sectional area and $C$ the drag coefficient — a number near 0.5 for blunt shapes that encodes streamlining.",
        detail: "The quadratic law holds for everyday sizes and speeds. Doubling the speed quadruples the drag, which is why highway fuel bills climb steeply with speed.",
      },
      {
        term: 'Terminal speed',
        kind: 'definition',
        statement: "**Terminal speed is the speed at which drag balances weight: $\\frac{1}{2}C\\rho A v_t^{2} = mg$, so $v_t = \\sqrt{2mg/(C\\rho A)}$.** At that speed the net force — and the acceleration — is zero, and the body keeps falling at constant velocity.",
        detail: "Mass sits in the numerator (heavy skydivers fall faster) and area in the denominator (spread out and slow down): the physics of the parachute.",
      },
      {
        term: 'The approach to terminal speed',
        kind: 'insight',
        statement: "**The approach is asymptotic: for quadratic drag, $v(t) = v_t\\tanh(gt/v_t)$ starting from rest.** The falling body reaches 76% of $v_t$ at $t = v_t/g$, 96% at $2v_t/g$, and is at $v_t$ for all practical purposes a few of those time units later.",
        detail: "It is a feedback loop: as $v$ grows, $D$ grows, shrinking the net force $mg - D$ toward zero — the acceleration dies out gradually rather than switching off.",
      },
      {
        term: 'When drag is linear',
        kind: 'insight',
        statement: "**For very small or very slow bodies — mist droplets, pollen, the oil drops of Millikan's experiment — drag is linear: $D = bv$, and the terminal speed is $v_t = mg/b$.**",
        detail: "The dividing line is fluid dynamics' Reynolds number: 'blunt and fast' is quadratic, 'tiny and slow' is the viscous (Stokes) regime.",
      },
      {
        term: "The Drag Force and Terminal Speed: solution protocol",
        kind: "method",
        statement: "**Solve The Drag Force and Terminal Speed problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is friction, drag and centripetal dynamics; the working equation is $f_{s,\\max} = \\mu_s N$, $f_k = \\mu_k N$, $D = \\tfrac12\\rho CAv^2$, $F = mv^2/r$; every substitution must carry its units so the final unit (dimensionless $\\mu$ and $\\text{m/s}$ terminal speed) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\mu_s\\sim 0.1$--$1.0$; skydiver terminal $\\sim 60\\ \\text{m/s}$ closed, $\\sim 5\\ \\text{m/s}$ open; Coulomb friction and $D\\propto v^2$ are empirical; $mv^2/r$ needs the real inward agent.",
      },
    ],
    examples: [
      {
        title: 'Terminal speed of a skydiver',
        problem: "A 75 kg skydiver falls spread-eagle, with effective cross-sectional area $A = 0.70$ m², drag coefficient $C = 0.50$, and air density $\\rho = 1.21$ kg/m³. Find the terminal speed.",
        steps: [
          { label: 'Condition', text: "At terminal speed, drag equals weight: $\\frac{1}{2}C\\rho A v_t^2 = mg$." },
          { label: 'Solve', text: "$v_t = \\sqrt{2mg/(C\\rho A)} = \\sqrt{2 \\times 75 \\times 9.8/(0.50 \\times 1.21 \\times 0.70)}$." },
          { label: 'Evaluate', text: "$= \\sqrt{1470/0.424} = \\sqrt{3470} = 59$ m/s." },
        ],
        result: "$v_t \\approx 59$ m/s (about 210 km/h) — the classic belly-first terminal speed.",
      },
      {
        title: 'How the speed builds up',
        problem: "For the same skydiver ($v_t = 59$ m/s), estimate the falling speed at $t = 6$, $12$ and $30$ s after the jump, starting from rest.",
        steps: [
          { label: 'Time unit', text: "$\\tau = v_t/g = 59/9.8 = 6.0$ s is the natural clock of the fall." },
          { label: 'Formula', text: "$v(t) = v_t \\tanh(t/\\tau)$." },
          { label: 'Numbers', text: "$v(6) = 59\\tanh(1) = 45$ m/s; $v(12) = 59\\tanh(2) = 57$ m/s; $v(30) = 59\\tanh(5) = 58.9$ m/s." },
        ],
        result: "45 m/s at 6 s, 57 m/s at 12 s, and effectively the terminal 59 m/s after that — 96% of terminal within two time units.",
      },
    ],
    keyTakeaways: [
      "Quadratic drag $D = \\frac{1}{2}C\\rho Av^2$ opposes the motion; terminal speed comes from $D = mg$ and is set by mass, area, shape and air density — not by how the fall started.",
      "Speed approaches $v_t$ asymptotically: 76% at $v_t/g$, 96% at $2v_t/g$.",
      "Tiny, slow bodies feel linear drag $D = bv$ instead, with terminal speed $mg/b$.",
    ],
    quiz: [
      {
        q: "If a skydiver pulls in her arms and legs, cutting her effective area to a quarter, her terminal speed:",
        options: [
          "halves",
          "stays the same",
          "quarters",
          "doubles",
        ],
        answer: 3,
        explanation: "$v_t \\propto 1/\\sqrt{A}$: quarter the area and $v_t$ grows by $\\sqrt{4} = 2$.",
      },
      {
        q: "A raindrop and a hailstone of the same shape and drag coefficient fall from the same cloud. The heavier hailstone has:",
        options: [
          "the same terminal speed",
          "a smaller terminal speed",
          "a larger terminal speed",
          "no terminal speed at all",
        ],
        answer: 2,
        explanation: "More mass raises the gravity side of $\\frac{1}{2}C\\rho A v_t^2 = mg$, so a larger $v_t$ is needed to balance it.",
      },
      {
        q: "For very small droplets the drag law becomes $D = bv$ because:",
        options: [
          "their mass is small",
          "air density is smaller around them",
          "the drag coefficient turns negative",
          "at tiny sizes and speeds the viscous, linear law dominates the quadratic one",
        ],
        answer: 3,
        explanation: "At low Reynolds number — small length and slow speed — viscosity, not inertia, sets the resistance, and drag becomes proportional to $v$.",
      },
    ],
  },

  // ------------------------------------------------------------- 6.3
  {
    sectionId: 'hall-ch5-s6',
    readingTime: 7,
    intro: "A body moving in a circle at constant speed is still accelerating — toward the center, at $a = v^2/R$ — so Newton's second law demands a real net force pointing inward. This section collects the suppliers of that inward force: friction on a flat curve, tension on a string, the normal force on a banked road, gravity on the Moon.",
    objectives: [
      "State the centripetal requirement $F_{net} = mv^2/R$ and explain why 'centripetal force' is not a new force",
      "Solve flat-curve problems with friction, and vertical-circle problems at the top and bottom of the loop",
      "Derive the banked-curve relation $\\tan\\theta = v^2/(gR)$ and use it at the design speed",
    ],
    concepts: [
      {
        term: 'The centripetal requirement',
        kind: 'law',
        statement: "**Uniform circular motion at speed $v$ on radius $R$ requires a net radial force of magnitude $mv^2/R$, pointed at the center.** The acceleration is inward (chapter 4), and the second law fixes what the force must supply.",
        detail: "This is a requirement, not a force. Something real — friction, tension, gravity, a normal force — must add up to it, or the motion will not be a circle.",
      },
      {
        term: "'Centripetal force' is a job description",
        kind: 'insight',
        statement: "**'Centripetal force' names the inward sum that real forces must produce — it is not itself a force.** Never draw it on a free-body diagram; draw the real forces and verify that their inward components total $mv^2/R$.",
        detail: "On a flat curve the supplier is static friction; on a banked curve, the normal force's horizontal component; for the Moon, Earth\'s gravity. Same requirement, different employees.",
      },
      {
        term: 'Vertical circles',
        kind: 'insight',
        statement: "**At the top of a vertical loop, gravity and the track both point toward the center: $N + mg = mv^2/R$.** The slowest possible passage has $N = 0$, giving $v_{min} = \\sqrt{gR}$. At the bottom the track pushes harder than gravity: $N - mg = mv^2/R$.",
        detail: "That is why roller-coaster riders feel squashed in the valley and light at the crest: the sensation of weight tracks $N$, not $mg$.",
      },
      {
        term: 'Banked curves',
        kind: 'method',
        statement: "**A curve banked at angle $\\theta$ needs no friction at its design speed, given by $\\tan\\theta = v^2/(gR)$.** The horizontal component of the normal force supplies the centripetal requirement while the vertical component holds up the car.",
        detail: "Below the design speed a car tends to slide down the banking, above it, up the banking — friction must make up the difference in both cases.",
      },
      {
        term: "Uniform Circular Motion: solution protocol",
        kind: "method",
        statement: "**Solve Uniform Circular Motion problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is friction, drag and centripetal dynamics; the working equation is $f_{s,\\max} = \\mu_s N$, $f_k = \\mu_k N$, $D = \\tfrac12\\rho CAv^2$, $F = mv^2/r$; every substitution must carry its units so the final unit (dimensionless $\\mu$ and $\\text{m/s}$ terminal speed) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\mu_s\\sim 0.1$--$1.0$; skydiver terminal $\\sim 60\\ \\text{m/s}$ closed, $\\sim 5\\ \\text{m/s}$ open; Coulomb friction and $D\\propto v^2$ are empirical; $mv^2/r$ needs the real inward agent.",
      },
    ],
    examples: [
      {
        title: 'How fast around the flat curve?',
        problem: "A 1200 kg car rounds an unbanked curve of radius 50 m. The tires' static friction coefficient on the dry pavement is 0.70. What is the fastest possible speed?",
        steps: [
          { label: 'FBD', text: "Vertically, $N = mg$. Horizontally, the only force is static friction pointing at the center — it is the centripetal supplier." },
          { label: 'Grip limit', text: "$f_{s,max} = \\mu_s N = 0.70 \\times 1200 \\times 9.8 = 8232$ N." },
          { label: 'Requirement', text: "$mv^2/R \\le f_{s,max}$, with equality at the fastest speed: $v = \\sqrt{\\mu_s g R} = \\sqrt{0.70 \\times 9.8 \\times 50}$." },
          { label: 'Evaluate', text: "$v = \\sqrt{343} = 18.5$ m/s $= 67$ km/h." },
        ],
        result: "$v_{max} = 18.5$ m/s (67 km/h). The mass cancels: grip per unit weight is the same for a loaded van.",
      },
      {
        title: 'Loop-the-loop',
        problem: "A roller-coaster car passes the top of a vertical loop of radius 8.0 m. (a) What is the minimum speed at the top? (b) At 12 m/s, what force does a 60 kg rider's seat exert on them there?",
        steps: [
          { label: 'Top of the loop', text: "Both gravity and the seat push toward the center (downward there): $N + mg = mv^2/R$." },
          { label: 'Minimum speed', text: "The seat force cannot go below zero, so the floor of possibility is $mg = mv^2/R$: $v_{min} = \\sqrt{gR} = \\sqrt{9.8 \\times 8.0} = 8.9$ m/s." },
          { label: 'At 12 m/s', text: "$N = m(v^2/R - g) = 60 \\times (144/8.0 - 9.8) = 60 \\times 8.2 = 492$ N." },
        ],
        result: "$v_{min} = 8.9$ m/s; at 12 m/s the seat pushes 492 N — the rider (weight 588 N) feels light at the crest.",
      },
    ],
    keyTakeaways: [
      "Circular motion at speed $v$ and radius $R$ demands an inward net force $mv^2/R$, supplied by real forces such as friction, tension, gravity or a normal force.",
      "Top of a vertical loop: $N + mg = mv^2/R$, so the minimum speed is $\\sqrt{gR}$; flat curve: $v_{max} = \\sqrt{\\mu_s g R}$.",
      "Banked without friction: $\\tan\\theta = v^2/(gR)$ — the design speed where the road alone does all the steering.",
    ],
    quiz: [
      {
        q: "A car rounds a flat curve at the maximum frictional speed and then hits a patch of ice ($\\mu \\approx 0$). The car:",
        options: [
          "stops immediately",
          "moves off along a straight line tangent to the curve",
          "spirals inward",
          "continues around the curve at the same speed",
        ],
        answer: 1,
        explanation: "With no inward force the velocity cannot keep turning; Newton's first law gives straight-line, tangential motion.",
      },
      {
        q: "A 0.50 kg ball is whirled in a horizontal circle of radius 1.0 m at 2.0 m/s on a string. The tension is:",
        options: [
          "0.50 N",
          "1.0 N",
          "2.0 N",
          "4.9 N",
        ],
        answer: 2,
        explanation: "$T = mv^2/R = 0.50 \\times (2.0)^2/1.0 = 2.0$ N — the string is the entire centripetal supplier.",
      },
      {
        q: "A frictionless curve has radius 100 m and is banked at 20°. Its design speed is:",
        options: [
          "9.9 m/s",
          "31 m/s",
          "18.9 m/s",
          "44 m/s",
        ],
        answer: 2,
        explanation: "$v = \\sqrt{gR\\tan\\theta} = \\sqrt{9.8 \\times 100 \\times 0.364} = 18.9$ m/s.",
      },
    ],
  },
]
