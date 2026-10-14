import type { SectionContent } from '../library'

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 7: Kinetic Energy and Work (sections 7.1–7.6, ids hall-ch7-s1..s6)
// ============================================================================

export const hallCh7Content: SectionContent[] = [
  // ------------------------------------------------------------- 7.1
  {
    sectionId: 'hall-ch7-s1',
    readingTime: 5,
    intro: "Energy enters physics in its simplest form here: the energy of motion. Kinetic energy grows with mass and with the square of speed — a quadratic dependence whose consequences run from braking distances to why 'speed kills' is physics rather than rhetoric. This short section defines the quantity and its unit; the next gives it a job.",
    objectives: [
      "Compute kinetic energy $K = \\frac{1}{2}mv^2$ and state its SI unit, the joule",
      "Explain the physical meaning of the quadratic speed dependence and its everyday consequences",
      "Compare kinetic energies by ratio, and explain why $K$ depends on the reference frame",
    ],
    concepts: [
      {
        term: 'Kinetic energy',
        kind: 'definition',
        statement: "**A body of mass $m$ moving at speed $v$ carries kinetic energy $K = \\frac{1}{2}mv^{2}$.** It is a scalar — no direction — and never negative, being built from a square. Its unit is the joule (J).",
        detail: "Only the speed matters, not the direction of motion: a 1500 kg car at 25 m/s has the same $K$ whether heading north or east.",
      },
      {
        term: 'Why quadratic?',
        kind: 'insight',
        statement: "**Kinetic energy grows as the square of speed: double the speed and the energy quadruples.** Stopping distance inherits this — with roughly constant braking force it too grows as the square, which is why 90 km/h is not 'a bit' worse than 60 km/h.",
        detail: "Leibniz called the quantity vis viva, 'living force', and insisted $mv^2$ was the true measure of motion; the argument with the $mv$ camp ended only when work (next section) showed the two sides measuring different things.",
      },
      {
        term: 'The joule',
        kind: 'notation',
        statement: "**1 joule $= 1$ kg·m²/s²: the kinetic energy of a 2 kg mass moving at 1 m/s.** Everyday scale: an apple of 0.1 kg falling 1 m arrives with about 1 J; a car at highway speed carries hundreds of kilojoules.",
        detail: "The joule is the shared unit of work and every form of energy — the first of many accounts that will exchange into it.",
      },
      {
        term: 'Frame dependence',
        kind: 'insight',
        statement: "**$K$ depends on the reference frame.** To a trackside observer, the train's dining cart has enormous kinetic energy; to a passenger, none at all.",
        detail: "The work–kinetic-energy theorem will hold in both frames, but the bookkeeping is per-frame: there is no frame-free value of kinetic energy.",
      },
      {
        term: "Kinetic Energy: solution protocol",
        kind: "method",
        statement: "**Solve Kinetic Energy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic energy and the work--kinetic-energy theorem; the working equation is $K = \\tfrac12mv^2$, $W = \\vec F\\cdot\\vec d$, $W_{\\text{net}} = \\Delta K$, $P = \\vec F\\cdot\\vec v$; every substitution must carry its units so the final unit (joules and watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed); $W_{\\text{net}} = \\Delta K$ is general; $P_{\\text{avg}} \\ne P_{\\text{inst}}$.",
      },
    ],
    examples: [
      {
        title: 'A baseball and a car',
        problem: "Compute the kinetic energy of (a) a 145 g baseball pitched at 40 m/s and (b) a 1500 kg car at 25 m/s (90 km/h).",
        steps: [
          { label: 'Baseball', text: "$K = \\frac{1}{2} \\times 0.145 \\times 40^2 = 116$ J." },
          { label: 'Car', text: "$K = \\frac{1}{2} \\times 1500 \\times 25^2 = 4.7 \\times 10^{5}$ J." },
          { label: 'Compare', text: "The car carries about $4000$ times the baseball's energy — mass matters linearly, speed quadratically." },
        ],
        result: "$K_{ball} = 116$ J; $K_{car} = 4.7 \\times 10^{5}$ J — a factor of $4.0 \\times 10^{3}$.",
      },
      {
        title: "Kinetic Energy: kinetic energy numbers",
        problem: "A $1250\\ \\text{kg}$ car moves at $30\\ \\text{m/s}$. Compute its kinetic energy and the work needed to stop it.",
        steps: [
          { label: "Formula", text: "$K = \\tfrac12mv^2$; $W_{\\text{net}} = \\Delta K$." },
          { label: "Substitute", text: "$K = 0.5\\times 1250\\times 30^2 = 5.63\\times 10^{+5}\\ \\text{J}$." },
          { label: "Stopping", text: "Stopping work is $-K$: the brakes must absorb 5.63\\times 10^{+5}\\ \\text{J}$." },
        ],
        result: "$K \\approx 5.63\\times 10^{+5}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      "Kinetic energy is the scalar $K = \\frac{1}{2}mv^2$, measured in joules, and never negative.",
      "The quadratic speed law means doubling speed quadruples energy — and, at fixed braking force, the stopping distance.",
      "Kinetic energy is frame-dependent: every observer tallies it relative to their own rest frame.",
    ],
    quiz: [
      {
        q: "If a body's speed triples, its kinetic energy grows by a factor of:",
        options: [
          "3",
          "6",
          "1.5",
          "9",
        ],
        answer: 3,
        explanation: "$K \\propto v^2$: tripling $v$ multiplies $K$ by $3^2 = 9$.",
      },
      {
        q: "Kinetic energy can be:",
        options: [
          "positive or negative depending on the direction of motion",
          "negative when the body moves backward",
          "zero or positive only",
          "any real number",
        ],
        answer: 2,
        explanation: "$K = \\frac{1}{2}mv^2$ is built from a square: it vanishes at rest and is otherwise positive, whatever the direction of travel.",
      },
      {
        q: "A passenger holds a 1.0 kg book still on a smoothly moving train. The book's kinetic energy:",
        options: [
          "is the same in the passenger's frame and the ground frame",
          "is zero in the passenger's frame but large in the ground frame",
          "is zero in both frames",
          "is large in the passenger's frame",
        ],
        answer: 1,
        explanation: "In the passenger's frame the book's speed is zero; for a trackside observer the book shares the train's speed, so $K$ is large.",
      },
    ],
  },

  // ------------------------------------------------------------- 7.2
  {
    sectionId: 'hall-ch7-s2',
    readingTime: 6,
    intro: "Work is the bridge between force and energy: it measures how much kinetic energy a force delivers. For a constant force, work is the dot product of force and displacement — force times distance times the cosine of the angle between them — and the total over all forces equals the change in kinetic energy. That statement is the work–kinetic-energy theorem, the first of physics' great bookkeeping rules.",
    objectives: [
      "Compute the work done by a constant force, $W = Fd\\cos\\phi$, with the correct sign",
      "Apply the work–kinetic-energy theorem $W_{net} = \\Delta K$ to find speeds without kinematics",
      "Recognize when a force does positive, negative or zero work",
    ],
    concepts: [
      {
        term: 'Work by a constant force',
        kind: 'definition',
        statement: "**If a body undergoes a displacement of magnitude $d$ while a constant force $\\vec{F}$ acts at angle $\\phi$ to the displacement, the force does work $W = Fd\\cos\\phi$.** Work is a scalar in joules; only the force component along the displacement counts.",
        detail: "The same statement reads as a dot product: $W = \\vec{F} \\cdot \\vec{d}$.",
      },
      {
        term: 'Signs of work',
        kind: 'insight',
        statement: "**Work is positive when the force has a component along the displacement, negative when against it, and zero when perpendicular.** Friction on a sliding box does negative work; the normal force on a box sliding along a floor does none; gravity does negative work on a rising ball.",
        detail: "Zero work is not 'no force': carrying a bag at constant speed, you exert a sizable upward force but do zero work on the bag, because the force is perpendicular to the motion.",
      },
      {
        term: 'The work–kinetic-energy theorem',
        kind: 'theorem',
        statement: "**The net work done on a body equals the change in its kinetic energy: $W_{net} = \\Delta K = K_f - K_i$.** Positive net work speeds the body up; negative slows it; zero leaves the speed unchanged.",
        detail: "For a constant net force along a straight line, multiply $v_f^2 - v_i^2 = 2ad$ by $m/2$ and use $F = ma$: $Fd = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$. The theorem survives curved paths and variable forces (section 7-5) and becomes the base of the whole energy ledger.",
      },
      {
        term: 'Net versus individual work',
        kind: 'method',
        statement: "**Only the net work changes kinetic energy.** Individual forces' works can be large and cancel: lifting a book slowly, your hand does $+mgh$ while gravity does $-mgh$ — net zero, so the book's kinetic energy is unchanged.",
        detail: "When solving, tally the work of every force acting, add with signs, and set the total equal to $K_f - K_i$.",
      },
      {
        term: "Work and Kinetic Energy: solution protocol",
        kind: "method",
        statement: "**Solve Work and Kinetic Energy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic energy and the work--kinetic-energy theorem; the working equation is $K = \\tfrac12mv^2$, $W = \\vec F\\cdot\\vec d$, $W_{\\text{net}} = \\Delta K$, $P = \\vec F\\cdot\\vec v$; every substitution must carry its units so the final unit (joules and watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed); $W_{\\text{net}} = \\Delta K$ is general; $P_{\\text{avg}} \\ne P_{\\text{inst}}$.",
      },
    ],
    examples: [
      {
        title: 'A push starts a sled',
        problem: "A 10 kg sled on frictionless ice is pushed by the only horizontal force, 20 N, through 4.0 m starting from rest. How fast is it moving at the end?",
        steps: [
          { label: 'Work', text: "$W = Fd = 20 \\times 4.0 = 80$ J, all of it net work (the vertical forces do none)." },
          { label: 'Theorem', text: "$W_{net} = \\Delta K = \\frac{1}{2}mv^2 - 0$." },
          { label: 'Solve', text: "$v = \\sqrt{2W/m} = \\sqrt{160/10} = 4.0$ m/s." },
          { label: 'Cross-check', text: "Kinematics agrees: $a = F/m = 2.0$ m/s², so $v^2 = 2ad = 2 \\times 2.0 \\times 4.0 = 16$." },
        ],
        result: "$v = 4.0$ m/s.",
      },
      {
        title: 'Friction reads out the coefficient',
        problem: "A 2.0 kg block sliding at 3.0 m/s coasts 1.5 m across a rough floor before stopping. Find the friction force and the coefficient of kinetic friction.",
        steps: [
          { label: 'Net work', text: "Only friction has a component along the motion, so $W = 0 - \\frac{1}{2} \\times 2.0 \\times 3.0^2 = -9.0$ J." },
          { label: 'Friction force', text: "$W = -f_k d$, so $f_k = 9.0/1.5 = 6.0$ N." },
          { label: 'Coefficient', text: "$\\mu_k = f_k/N = 6.0/(2.0 \\times 9.8) = 0.31$." },
        ],
        result: "$f_k = 6.0$ N and $\\mu_k = 0.31$ — the work–energy theorem converts a stopping distance into a friction measurement.",
      },
    ],
    keyTakeaways: [
      "Work by a constant force is $W = Fd\\cos\\phi$: positive, negative or zero according to the angle.",
      "The net work on a body equals its change in kinetic energy — the work–kinetic-energy theorem.",
      "A force perpendicular to the displacement does no work, however large it is.",
    ],
    quiz: [
      {
        q: "A 5.0 N force acts on a box that moves 2.0 m while the angle between force and displacement is 60°. The work done is:",
        options: [
          "10 J",
          "5.0 J",
          "8.7 J",
          "zero",
        ],
        answer: 1,
        explanation: "$W = Fd\\cos\\phi = 5.0 \\times 2.0 \\times 0.50 = 5.0$ J.",
      },
      {
        q: "You carry a 10 kg bag horizontally at constant speed across a room. The work you do on the bag is:",
        options: [
          "zero, since your upward force is perpendicular to the displacement",
          "98 J for each meter walked",
          "negative, because the bag is heavy",
          "98 J, from the upward force",
        ],
        answer: 0,
        explanation: "$\\cos 90^{\\circ} = 0$: the supporting force does no work during horizontal travel.",
      },
      {
        q: "The net work done on a body is negative. Its speed:",
        options: [
          "increases",
          "decreases",
          "is unchanged",
          "could do any of these — sign alone does not decide",
        ],
        answer: 1,
        explanation: "Negative net work means $\\Delta K < 0$: the kinetic energy, and with it the speed, drops.",
      },
      {
        q: "A net work of 24 J is done on a 3.0 kg body initially at rest. Its final speed is:",
        options: [
          "2.0 m/s",
          "8.0 m/s",
          "4.0 m/s",
          "16 m/s",
        ],
        answer: 2,
        explanation: "$v = \\sqrt{2W/m} = \\sqrt{48/3.0} = 4.0$ m/s.",
      },
    ],
  },

  // ------------------------------------------------------------- 7.3
  {
    sectionId: 'hall-ch7-s3',
    readingTime: 5,
    intro: "Gravity does work in a particularly simple way: it cares only how far you fall, not how you get there. Drop a coin, slide it down a ramp, or throw it in an arc — if the endpoints are at the same heights, gravity's work is identical. This path independence is the seed of potential energy in chapter 8.",
    objectives: [
      "Compute gravity's work $W_g = mg(y_i - y_f)$ for any change of height",
      "Explain why gravity's work is path-independent, and contrast it with friction",
      "Relate the work done by a hand that lifts slowly to the negative work gravity does",
    ],
    concepts: [
      {
        term: "Gravity's work formula",
        kind: 'definition',
        statement: "**When a body of mass $m$ moves from height $y_i$ to height $y_f$, gravity does $W_g = mg(y_i - y_f) = mgh$, where $h$ is the drop.** Downward motion brings positive work; upward motion, negative.",
        detail: "On an incline of angle $\\theta$, a displacement $d$ along the slope changes height by $d\\sin\\theta$, and the same formula gives $mgd\\sin\\theta$.",
      },
      {
        term: 'Path independence',
        kind: 'theorem',
        statement: "**The work done by gravity depends only on the endpoints' heights — not on the route between them.** Straight drop, zigzag path, frictionless slide, projectile arc: all give the same $mg(y_i - y_f)$.",
        detail: "Forces with this property are called conservative. Friction is the canonical non-conservative force: its work depends on the path length — drag a crate around any loop and friction bills you for every centimeter.",
      },
      {
        term: 'Lifting slowly',
        kind: 'insight',
        statement: "**To lift a body at essentially constant speed, your hand does $+mgh$ while gravity does $-mgh$: the net work is zero, so the kinetic energy is unchanged.** Equal and opposite works — not equal and opposite forces.",
        detail: "The hand's upward force equals $mg$ only in the slow limit; any excess accelerates the body and shows up as kinetic energy.",
      },
      {
        term: "Work Done by the Gravitational Force: solution protocol",
        kind: "method",
        statement: "**Solve Work Done by the Gravitational Force problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic energy and the work--kinetic-energy theorem; the working equation is $K = \\tfrac12mv^2$, $W = \\vec F\\cdot\\vec d$, $W_{\\text{net}} = \\Delta K$, $P = \\vec F\\cdot\\vec v$; every substitution must carry its units so the final unit (joules and watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed); $W_{\\text{net}} = \\Delta K$ is general; $P_{\\text{avg}} \\ne P_{\\text{inst}}$.",
      },
      {
        term: "Work Done by the Gravitational Force: scales and validity",
        kind: "insight",
        statement: "**Work Done by the Gravitational Force lives at $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed) and the textbook model holds while $W_{\\text{net}} = \\Delta K$ is general; $P_{\\text{avg}} \\ne P_{\\text{inst}}$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Work Done by the Gravitational Force calculation gives seconds when joules and watts demands meters, or a value orders of magnitude beyond $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Three routes down',
        problem: "A 5.0 kg package descends 2.0 m: (a) dropped, (b) slid down a frictionless 30° ramp ($d = 4.0$ m along the slope), (c) carried down a spiral staircase. Compare gravity's work on the three routes.",
        steps: [
          { label: 'Drop', text: "$W = mgd\\cos 0^{\\circ} = 5.0 \\times 9.8 \\times 2.0 = 98$ J." },
          { label: 'Ramp', text: "Force and displacement differ by $\\phi = 60^{\\circ}$ here: $W = mgd\\cos 60^{\\circ} = 5.0 \\times 9.8 \\times 4.0 \\times 0.50 = 98$ J." },
          { label: 'Spiral', text: "The path length is unknown — and irrelevant: $W = mgh = 98$ J again." },
        ],
        result: "98 J by every route. Dragging the package 2.0 m horizontally afterward adds nothing: gravity's work for zero height change is zero.",
      },
      {
        title: 'Throwing up',
        problem: "A 2.0 kg ball is thrown straight up and rises 3.0 m before stopping momentarily. (a) How much work does gravity do during the rise? (b) How much kinetic energy did the ball have at release?",
        steps: [
          { label: "Gravity's work", text: "$W_g = -mgh = -2.0 \\times 9.8 \\times 3.0 = -59$ J." },
          { label: 'Energy at the top', text: "The ball is momentarily at rest there, so $K_{top} = 0$ and the theorem reads $-59 = 0 - K_{launch}$." },
          { label: 'At release', text: "$K_{launch} = 59$ J — which is also the work the thrower's hand did during the release, over a negligible height change." },
        ],
        result: "$W_g = -59$ J on the way up; the hand put in 59 J, and gravity takes it all back.",
      },
    ],
    keyTakeaways: [
      "Gravity's work is $mg(y_i - y_f)$: only the height change matters, and the sign follows the direction of vertical motion.",
      "Gravity is conservative (path-independent); friction is not.",
      "A slow lift involves equal and opposite works by hand and gravity, so the book's kinetic energy never changes.",
    ],
    quiz: [
      {
        q: "A 1.0 kg ball is thrown 5.0 m up and falls back to its launch height. The total work done by gravity over the round trip is:",
        options: [
          "+98 J",
          "−98 J",
          "zero",
          "+49 J",
        ],
        answer: 2,
        explanation: "The up leg gives $-49$ J and the down leg $+49$ J; the endpoint heights are the same, so the total is zero.",
      },
      {
        q: "Which of these forces is NOT conservative (its work depends on the path)?",
        options: [
          "gravity near Earth's surface",
          "an ideal spring force",
          "kinetic friction",
          "all three are conservative",
        ],
        answer: 2,
        explanation: "Friction's work grows with the path length; gravity and spring work depend only on endpoints.",
      },
      {
        q: "A 60 kg hiker descends 500 m along a winding trail. The work gravity does on the hiker is about:",
        options: [
          "$2.9 \\times 10^{5}$ J",
          "$5.9 \\times 10^{5}$ J",
          "zero, because the trail is not vertical",
          "impossible to compute without the trail length",
        ],
        answer: 0,
        explanation: "$W = mgh = 60 \\times 9.8 \\times 500 = 2.9 \\times 10^{5}$ J — the winding route is irrelevant to gravity.",
      },
    ],
  },

  // ------------------------------------------------------------- 7.4
  {
    sectionId: 'hall-ch7-s4',
    readingTime: 6,
    intro: "A stretched spring pulls back with a force proportional to the stretch — Hooke's law — and the constant $k$ measures stiffness. Work accumulated against such a force is a triangle of area on a force–displacement graph, and the $\\frac{1}{2}kx^2$ that results is the second great energy storehouse, alongside $mgh$.",
    objectives: [
      "State Hooke's law and interpret the spring constant $k$",
      "Compute the work done by a spring between two positions: $W_s = \\frac{1}{2}kx_i^2 - \\frac{1}{2}kx_f^2$",
      "Evaluate work as the area under an F–x curve, and combine spring work with the work–kinetic-energy theorem",
    ],
    concepts: [
      {
        term: "Hooke's law",
        kind: 'law',
        statement: "**An ideal spring pulls (or pushes) back along its axis with $F = -kx$, where $x$ is the displacement of its end from the relaxed position and $k$ is the spring constant, in N/m.** The minus sign says the force opposes the displacement — a restoring force.",
        detail: "Stiff springs have large $k$: a 200 N/m spring stretches 5 cm under a 10 N pull. Spring scales and force meters are just calibrated springs.",
      },
      {
        term: 'Work done by a spring',
        kind: 'theorem',
        statement: "**A spring moves a body from $x_i$ to $x_f$ doing $W_s = \\frac{1}{2}kx_i^{2} - \\frac{1}{2}kx_f^{2}$.** Stretching further from relaxed, the spring does negative work; relaxing back, positive work.",
        detail: "Like gravity, spring work depends only on the endpoints — another conservative force, and chapter 8 will bank its work as $\\frac{1}{2}kx^2$ of potential energy.",
      },
      {
        term: 'Area under the F–x curve',
        kind: 'method',
        statement: "**On a graph of force versus position, work is the signed area under the curve.** For a slowly stretched spring the pulling force grows along $F = kx$, and the area is a triangle of base $x$ and height $kx$: $W = \\frac{1}{2}kx^{2}$.",
        detail: "The spring's own force is $-kx$ — below the axis while stretching — so its work is the negative of the hand's. The same area rule holds for any force shape: chop into thin strips and add them up, which is the integral of section 7-5.",
      },
      {
        term: 'The launcher calculation',
        kind: 'method',
        statement: "**Release a compressed spring against a block and the work–kinetic-energy theorem converts spring work into speed: $\\frac{1}{2}kx_i^{2} = \\frac{1}{2}mv^{2}$ when the block leaves at the relaxed length.**",
        detail: "This is the popgun and pinball-launcher calculation, and the seed of every 'spring energy' problem in chapter 8.",
      },
      {
        term: "Work Done by a Spring Force: solution protocol",
        kind: "method",
        statement: "**Solve Work Done by a Spring Force problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic energy and the work--kinetic-energy theorem; the working equation is $K = \\tfrac12mv^2$, $W = \\vec F\\cdot\\vec d$, $W_{\\text{net}} = \\Delta K$, $P = \\vec F\\cdot\\vec v$; every substitution must carry its units so the final unit (joules and watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed); $W_{\\text{net}} = \\Delta K$ is general; $P_{\\text{avg}} \\ne P_{\\text{inst}}$.",
      },
    ],
    figures: [
      {
        caption: "Work as area: stretching a spring from $0$ to $x_1$, the pulling force grows along the line $F = kx$, and the work done is the shaded triangle's area, $W = \\frac{1}{2}(kx_1)(x_1) = \\frac{1}{2}kx_1^2$. The inset shows the physical setup — pull slowly, and the hand's force matches the spring's at every instant.",
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Work as the area under a linear spring force versus position graph"><defs><marker id="sprC" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto"><path d="M0,0 L9,4 L0,8 z" fill="currentColor"/></marker></defs><line x1="80" y1="290" x2="660" y2="290" stroke="currentColor" stroke-width="2" marker-end="url(#sprC)"/><text x="668" y="296" font-size="15" fill="currentColor">x</text><line x1="80" y1="310" x2="80" y2="50" stroke="currentColor" stroke-width="2" marker-end="url(#sprC)"/><text x="66" y="42" font-size="15" fill="currentColor">F</text><polygon points="80,290 500,290 500,110" fill="currentColor" fill-opacity="0.15" stroke="none"/><line x1="80" y1="290" x2="500" y2="110" stroke="currentColor" stroke-width="2.5"/><line x1="500" y1="290" x2="500" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="500" y="312" font-size="15" text-anchor="middle" fill="currentColor">x₁</text><text x="300" y="228" font-size="15" text-anchor="middle" fill="currentColor">shaded area = work</text><text x="300" y="250" font-size="15" text-anchor="middle" fill="currentColor">W = ½ k x₁²</text><text x="408" y="132" font-size="15" fill="currentColor">F = kx</text><line x1="668" y1="55" x2="668" y2="119" stroke="currentColor" stroke-width="4"/><polyline points="668,85 656,69 644,101 632,69 620,101 608,69 596,101 584,69 572,101 560,85" fill="none" stroke="currentColor" stroke-width="2"/><rect x="526" y="67" width="34" height="36" fill="none" stroke="currentColor" stroke-width="2"/><line x1="522" y1="85" x2="462" y2="85" stroke="currentColor" stroke-width="2.5" marker-end="url(#sprC)"/><text x="490" y="72" font-size="15" fill="currentColor">F</text><text x="360" y="40" font-size="13" text-anchor="middle" fill="currentColor" opacity="0.8">stretch slowly: the hand's pull equals kx at each instant</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Spring launcher',
        problem: "A spring with $k = 200$ N/m is compressed 0.10 m and used to launch a 2.0 kg block along a frictionless surface. How fast is the block moving when the spring reaches its relaxed length?",
        steps: [
          { label: 'Spring work', text: "$W_s = \\frac{1}{2}kx_i^{2} - \\frac{1}{2}kx_f^{2} = \\frac{1}{2} \\times 200 \\times (0.10)^2 - 0 = 1.0$ J." },
          { label: 'Theorem', text: "$1.0 = \\Delta K = \\frac{1}{2}mv^2 - 0$ with $m = 2.0$ kg." },
          { label: 'Solve', text: "$v = \\sqrt{2 \\times 1.0/2.0} = 1.0$ m/s." },
        ],
        result: "$v = 1.0$ m/s at the relaxed position.",
      },
      {
        title: 'Stretching further',
        problem: "A worker slowly stretches a spring ($k = 200$ N/m) from $x_i = 0.10$ m to $x_f = 0.20$ m. How much work does the hand do?",
        steps: [
          { label: "Hand's work", text: "For a slow stretch the hand's work is the negative of the spring's: $W_{hand} = \\frac{1}{2}kx_f^{2} - \\frac{1}{2}kx_i^{2}$." },
          { label: 'Numbers', text: "$\\frac{1}{2} \\times 200 \\times 0.040 - \\frac{1}{2} \\times 200 \\times 0.010 = 4.0 - 1.0 = 3.0$ J." },
          { label: 'Geometry check', text: "On the F–x plot, this is the trapezoid under $F = kx$ between $x = 0.10$ and $0.20$: average force $\\frac{1}{2}(20 + 40) = 30$ N over 0.10 m gives 3.0 J." },
        ],
        result: "3.0 J of hand work goes into the extra stretch.",
      },
    ],
    keyTakeaways: [
      "Hooke's law: $F = -kx$, a restoring force whose stiffness $k$ is measured in N/m.",
      "Spring work between two positions is $\\frac{1}{2}kx_i^2 - \\frac{1}{2}kx_f^2$ — endpoint-dependent, hence conservative.",
      "Work is the signed area under the F–x curve; for a linear spring it is a triangle or trapezoid.",
    ],
    quiz: [
      {
        q: "A spring with $k = 300$ N/m is slowly stretched 0.20 m. The work done BY the spring is:",
        options: [
          "+6.0 J",
          "−6.0 J",
          "+3.0 J",
          "−3.0 J",
        ],
        answer: 1,
        explanation: "$W_s = -\\frac{1}{2}kx^2 = -\\frac{1}{2} \\times 300 \\times 0.040 = -6.0$ J: the restoring force opposes the stretch, so the spring's work is negative.",
      },
      {
        q: "On an F–x graph, the work done by the force corresponds to:",
        options: [
          "the slope of the curve",
          "the length of the curve",
          "the signed area under the curve",
          "the intercept on the force axis",
        ],
        answer: 2,
        explanation: "Each thin strip contributes $F_x\\,dx$; the accumulated total is the area between curve and axis, counted with sign.",
      },
      {
        q: "Compressing a spring 0.10 m launches a block at 1.0 m/s. Compressing 0.20 m instead launches it at:",
        options: [
          "1.4 m/s",
          "4.0 m/s",
          "0.5 m/s",
          "2.0 m/s",
        ],
        answer: 3,
        explanation: "Doubling the compression quadruples the work ($\\frac{1}{2}kx^2$), and $v \\propto \\sqrt{W}$, so the speed doubles.",
      },
    ],
  },

  // ------------------------------------------------------------- 7.5
  {
    sectionId: 'hall-ch7-s5',
    readingTime: 6,
    intro: "Real forces vary with position — a spring's pull grows as it stretches, road resistance lumps and bumps, magnetic fields push unevenly. Work generalizes to an integral: the accumulated area under the force–position curve. With it, the work–kinetic-energy theorem becomes a complete machine.",
    objectives: [
      "Evaluate $W = \\int_{x_i}^{x_f} F_x\\,dx$ for forces given as functions of $x$",
      "Interpret work as the signed area under the F–x curve, numerically if not analytically",
      "Set up the two-variable work integral $W = \\int (F_x\\,dx + F_y\\,dy)$ along a path",
    ],
    concepts: [
      {
        term: 'The integral definition',
        kind: 'definition',
        statement: "**For a force that varies with position, the work from $x_i$ to $x_f$ is $W = \\int_{x_i}^{x_f} F_x(x)\\,dx$ — the limit of summing $F_x\\Delta x$ over ever-thinner slices.** Geometrically, the signed area under the $F_x$-versus-$x$ curve.",
        detail: "Slices below the axis count negative: the arithmetic keeps each strip's sign, so opposing stretches of the path subtract.",
      },
      {
        term: 'Two-dimensional paths',
        kind: 'definition',
        statement: "**When the force has two components and the path curves, $W = \\int (F_x\\,dx + F_y\\,dy)$ along the actual route.** For a constant force this collapses to the dot product $\\vec{F} \\cdot \\vec{d}$; for position-dependent forces, the route generally matters.",
        detail: "Such a sum along a path is called a line integral. Only for conservative forces does it reduce to endpoints alone — chapter 8's theme.",
      },
      {
        term: 'Numerical work',
        kind: 'method',
        statement: "**When $F(x)$ has no closed form, count area: plot the curve, shade to the axis, and convert squares to joules.** Every data-driven work computation in engineering runs this way, or its software equivalent.",
        detail: "The same slicing logic underlies lab software integrating a force sensor's output over a measured displacement.",
      },
      {
        term: "Work Done by a General Variable Force: solution protocol",
        kind: "method",
        statement: "**Solve Work Done by a General Variable Force problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic energy and the work--kinetic-energy theorem; the working equation is $K = \\tfrac12mv^2$, $W = \\vec F\\cdot\\vec d$, $W_{\\text{net}} = \\Delta K$, $P = \\vec F\\cdot\\vec v$; every substitution must carry its units so the final unit (joules and watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed); $W_{\\text{net}} = \\Delta K$ is general; $P_{\\text{avg}} \\ne P_{\\text{inst}}$.",
      },
      {
        term: "Work Done by a General Variable Force: scales and validity",
        kind: "insight",
        statement: "**Work Done by a General Variable Force lives at $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed) and the textbook model holds while $W_{\\text{net}} = \\Delta K$ is general; $P_{\\text{avg}} \\ne P_{\\text{inst}}$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Work Done by a General Variable Force calculation gives seconds when joules and watts demands meters, or a value orders of magnitude beyond $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'A growing push',
        problem: "A one-dimensional force $F_x = 3.0x^2$ N ($x$ in meters) pushes a 4.0 kg block from $x = 0$ to $x = 2.0$ m along a frictionless line. Find the work and the block's final speed from rest.",
        steps: [
          { label: 'Integrate', text: "$W = \\int_0^{2.0} 3.0x^2\\,dx = [x^3]_0^{2.0} = 8.0$ J." },
          { label: 'Sanity check', text: "The average force is $W/d = 4.0$ N — consistent, since $3x^2$ averages 4 N over the interval." },
          { label: 'Theorem', text: "$8.0 = \\frac{1}{2} \\times 4.0 \\times v^2$, so $v^2 = 4.0$." },
        ],
        result: "$W = 8.0$ J; $v = 2.0$ m/s.",
      },
      {
        title: 'Spring work, the honest way',
        problem: "Derive the work done by a spring stretched from $x = 0$ to $x = X$ using the integral, and evaluate it for $k = 150$ N/m and $X = 0.30$ m.",
        steps: [
          { label: 'Set up', text: "$W_s = \\int_0^X (-kx)\\,dx$ — the spring's force points opposite the stretch." },
          { label: 'Integrate', text: "$W_s = -\\frac{1}{2}kX^{2}$ — the triangle below the axis, negative by construction." },
          { label: 'Numbers', text: "$-\\frac{1}{2} \\times 150 \\times (0.30)^2 = -6.75 \\approx -6.8$ J; a hand pulling slowly does the opposite: $+6.8$ J." },
        ],
        result: "$W_s = -6.8$ J by the spring, $+6.8$ J by the hand.",
      },
    ],
    keyTakeaways: [
      "Variable-force work is the integral $\\int F_x\\,dx$ — the signed area under the F–x curve.",
      "In two dimensions the work is a line integral along the path; path matters unless the force is conservative.",
      "Counting area under a measured curve is a legitimate work computation when no formula exists.",
    ],
    quiz: [
      {
        q: "For a force that varies with position, the work it does equals:",
        options: [
          "the final force times the total distance",
          "the signed area under the F–x curve",
          "the average force times distance in every case",
          "the slope of the F–x curve",
        ],
        answer: 1,
        explanation: "Each strip $F_x\\,dx$ adds to the total; only when $F$ is constant does this reduce to the rectangle $Fd$.",
      },
      {
        q: "The area under an F–x curve is +12 J over the first 2.0 m and −4 J over the next 2.0 m. The net work over 4.0 m is:",
        options: [
          "8 J",
          "16 J",
          "−8 J",
          "12 J",
        ],
        answer: 0,
        explanation: "Signed areas add: $12 + (-4) = 8$ J.",
      },
      {
        q: "A force $F_x = 6x$ N acts from $x = 0$ to $x = 1.0$ m. The work done is:",
        options: [
          "6 J",
          "1.5 J",
          "3 J",
          "12 J",
        ],
        answer: 2,
        explanation: "$W = \\int_0^1 6x\\,dx = 3x^2 \\big|_0^1 = 3$ J — the triangle of base 1 m and height 6 N.",
      },
    ],
  },

  // ------------------------------------------------------------- 7.6
  {
    sectionId: 'hall-ch7-s6',
    readingTime: 5,
    intro: "Two motors can do the same work, but the one that does it faster is more powerful. Power — the rate of doing work — is where mechanics meets the electric bill, the horsepower rating and the kilowatt-hour.",
    objectives: [
      "Define average and instantaneous power, $P = dW/dt$, in watts",
      "Use $P = \\vec{F} \\cdot \\vec{v}$ for a force acting on a moving body",
      "Convert among joules, kilowatt-hours and horsepower",
    ],
    concepts: [
      {
        term: 'Power',
        kind: 'definition',
        statement: "**Power is the rate of energy transfer by work: $P_{avg} = W/t$, and in the instantaneous limit $P = dW/dt$.** The unit is the watt: 1 W = 1 J/s.",
        detail: "Power is a scalar; a 60 W bulb converts 60 J of electrical energy to light and heat every second.",
      },
      {
        term: 'The force form',
        kind: 'theorem',
        statement: "**A force $\\vec{F}$ acting on a body moving with velocity $\\vec{v}$ delivers power $P = \\vec{F} \\cdot \\vec{v}$.** Lifting at constant speed $v$ takes an upward force $mg$, so the lifting power is $mgv$.",
        detail: "For a constant force, $W = Fd$ divided by time gives $P = F(d/t) = Fv$; the dot product form handles any angle between force and motion.",
      },
      {
        term: 'Energy units of the trade',
        kind: 'notation',
        statement: "**The kilowatt-hour is a unit of energy: 1 kW·h $= 1000$ W $\\times 3600$ s $= 3.6 \\times 10^{6}$ J.** The horsepower is a power unit: 1 hp $= 746$ W.",
        detail: "Utility bills sell energy; engines and motors are rated in power — the two are related but not the same thing.",
      },
      {
        term: "Power: solution protocol",
        kind: "method",
        statement: "**Solve Power problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is kinetic energy and the work--kinetic-energy theorem; the working equation is $K = \\tfrac12mv^2$, $W = \\vec F\\cdot\\vec d$, $W_{\\text{net}} = \\Delta K$, $P = \\vec F\\cdot\\vec v$; every substitution must carry its units so the final unit (joules and watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed); $W_{\\text{net}} = \\Delta K$ is general; $P_{\\text{avg}} \\ne P_{\\text{inst}}$.",
      },
      {
        term: "Power: scales and validity",
        kind: "insight",
        statement: "**Power lives at $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed) and the textbook model holds while $W_{\\text{net}} = \\Delta K$ is general; $P_{\\text{avg}} \\ne P_{\\text{inst}}$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Power calculation gives seconds when joules and watts demands meters, or a value orders of magnitude beyond $K\\sim 10^2\\ \\text{J}$ (sprinter) to $10^6\\ \\text{J}$ (car at highway speed), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Elevator motor',
        problem: "A 1000 kg elevator cab rises at a steady 2.0 m/s. What power must the motor deliver (ignore friction and counterweights)?",
        steps: [
          { label: 'Force', text: "Constant speed means the cable's pull equals the weight: $F = mg = 9800$ N." },
          { label: 'Power', text: "$P = Fv = 9800 \\times 2.0 = 19,600$ W." },
        ],
        result: "About 20 kW (26 hp) at cruise — more during the acceleration phase, zero when parked.",
      },
      {
        title: 'A stair run',
        problem: "A 70 kg student climbs a 4.0 m flight of stairs in 10 s. Estimate the mechanical power output.",
        steps: [
          { label: 'Work', text: "$W = mgh = 70 \\times 9.8 \\times 4.0 = 2744$ J $\\approx 2.7 \\times 10^{3}$ J." },
          { label: 'Power', text: "$P = W/t = 2744/10 = 274$ W." },
          { label: 'Context', text: "Roughly three old lightbulbs — and sustainable only briefly; a trained athlete sustains about 300–400 W for an hour." },
        ],
        result: "About 270 W of mechanical power.",
      },
    ],
    keyTakeaways: [
      "Power is the work rate: $P = dW/dt$ in watts (J/s); average power is $W/t$.",
      "For a force on a moving body, $P = \\vec{F} \\cdot \\vec{v}$ — lifting at constant speed costs $mgv$.",
      "The kilowatt-hour is energy ($3.6 \\times 10^{6}$ J); the horsepower is power (746 W).",
    ],
    quiz: [
      {
        q: "One kilowatt-hour equals:",
        options: [
          "$3.6 \\times 10^{3}$ J",
          "$3.6 \\times 10^{6}$ J",
          "$1.0 \\times 10^{3}$ J",
          "746 J",
        ],
        answer: 1,
        explanation: "A kilowatt running for an hour: $1000 \\times 3600 = 3.6 \\times 10^{6}$ J.",
      },
      {
        q: "A motor lifts 50 kg by 20 m at constant speed in 40 s. Its power output is:",
        options: [
          "9800 W",
          "98 W",
          "245 W",
          "25 kW",
        ],
        answer: 2,
        explanation: "$P = mgh/t = 50 \\times 9.8 \\times 20/40 = 245$ W.",
      },
      {
        q: "A motor's power output is fixed while its lifting speed doubles. The force it can exert:",
        options: [
          "doubles",
          "halves",
          "quarters",
          "stays the same",
        ],
        answer: 1,
        explanation: "$P = Fv$ at fixed $P$: twice the speed means half the available force.",
      },
    ],
  },
]
