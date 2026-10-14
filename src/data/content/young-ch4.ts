import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 4
// Newton's Laws of Motion (Secs 4.1–4.6)
// ============================================================================

export const youngCh4Content: SectionContent[] = [
  {
    sectionId: "young-ch4-s1",
    readingTime: 4,
    intro: "Dynamics asks why motion changes: forces, arising from interactions, are the answer. This section classifies contact versus long-range forces and introduces the vector language every free-body diagram will use.",
    objectives: [
      "Define force as a vector interaction effect",
      "Classify contact forces versus long-range forces",
      "Represent forces by vector arrows with magnitude and direction"
    ],
    concepts: [
      {
        term: "Force",
        kind: "definition",
        statement: "A **force** is a **vector interaction** that can deform a body or change its motion, measured in **newtons ($\\mathrm{N}$)**.",
        detail: "Pushing a $1\\ \\mathrm{kg}$ mass to $1\\ \\mathrm{m/s^2}$ takes $1\\ \\mathrm{N}$; direction decides the resulting acceleration direction."
      },
      {
        term: "Contact forces",
        kind: "definition",
        statement: "**Contact forces** — normal, friction, tension, spring — act **at the touching surface** and need matter in contact.",
        detail: "A table pushes up on a book with a normal force exactly canceling weight in equilibrium."
      },
      {
        term: "Long-range forces",
        kind: "definition",
        statement: "**Long-range forces** — gravity, electric, magnetic — act **across empty space** via fields.",
        detail: "Earth pulls a satellite without touching it; a magnet deflects iron through air."
      },
      {
        term: "Net force as vector sum",
        kind: "definition",
        statement: "**Net force** $\\sum\\vec{F} = \\vec{F}_1+\\vec{F}_2+\\cdots$ is the **vector sum**; only the net accelerates the mass.",
        detail: "Two $10\\ \\mathrm{N}$ pulls in opposite directions net to zero — balanced forces, no acceleration."
      },
      {
        term: "Superposition of forces",
        kind: "insight",
        statement: "Forces **superpose independently**: each acts as if the others were absent, and the vector sum governs.",
        detail: "Gravity and air drag add vectorially on a falling leaf; analyzing them separately then summing is exact."
      }
    ],
    examples: [
      {
        title: "Net of two pulls",
        problem: "Two ropes pull a crate: $60\\ \\mathrm{N}$ east, $80\\ \\mathrm{N}$ north. Find the net force.",
        steps: [
          { label: "Sum", text: "$F = \\sqrt{60^2+80^2} = 100\\ \\mathrm{N}$." },
          { label: "Direction", text: "$\\theta = \\arctan(80/60) = 53.1^{\\circ}$ north of east." },
          { label: "Meaning", text: "One $100\\ \\mathrm{N}$ rope at $53.1^{\\circ}$ replaces both." }
        ],
        result: "$100\\ \\mathrm{N}$ at $53.1^{\\circ}$ north of east."
      },
      {
        title: "Balanced book",
        problem: "A $2.0\\ \\mathrm{kg}$ book rests on a table. Identify the forces.",
        steps: [
          { label: "Gravity", text: "$w = mg = 19.6\\ \\mathrm{N}$ downward — long-range." },
          { label: "Contact", text: "Normal $n = 19.6\\ \\mathrm{N}$ upward — contact." },
          { label: "Net", text: "$\\sum\\vec{F} = 0$: balanced, so the book stays put." }
        ],
        result: "Equal opposite pair nets to zero; motion unchanged."
      }
    ],
    keyTakeaways: [
      "Force is a vector interaction in newtons.",
      "Contact needs touch; long-range acts through fields.",
      "Only the vector sum $\\sum\\vec{F}$ drives acceleration."
    ],
    quiz: [
      {
        q: "Which is a long-range force?",
        options: ["Friction", "Tension", "Gravity", "Normal force"],
        answer: 2,
        explanation: "Gravity acts across space; the other three need contact."
      },
      {
        q: "$60\\ \\mathrm{N}$ east plus $80\\ \\mathrm{N}$ north nets to:",
        options: ["$140\\ \\mathrm{N}$", "$100\\ \\mathrm{N}$ at $53^{\\circ}$ north of east", "$20\\ \\mathrm{N}$", "Zero"],
        answer: 1,
        explanation: "Perpendicular vectors add by Pythagoras: $\\sqrt{3600+6400} = 100\\ \\mathrm{N}$."
      },
      {
        q: "Balanced forces ($\\sum\\vec{F} = 0$) imply:",
        options: ["Acceleration must be zero", "Velocity must be zero", "Mass is zero", "Friction is zero"],
        answer: 0,
        explanation: "Zero net force gives zero acceleration; velocity keeps whatever it had."
      }
    ]
  },
  {
    sectionId: "young-ch4-s2",
    readingTime: 5,
    intro: "Newton first law defines the playing field: without net force, velocity never changes. This section states the law, defines inertial frames where it holds, and exposes the common idea of force as the maintainer of motion.",
    objectives: [
      "State Newton first law precisely",
      "Define inertial frames and recognize non-inertial ones",
      "Explain why no force is needed to sustain uniform motion"
    ],
    concepts: [
      {
        term: "Newton first law",
        kind: "law",
        statement: "With **$\\sum\\vec{F} = 0$**, a body **keeps constant velocity** (rest or straight uniform motion) — **inertia**.",
        detail: "A puck on frictionless ice glides on; only a net push, pull, or drag alters $\\vec{v}$."
      },
      {
        term: "Inertial frame",
        kind: "definition",
        statement: "An **inertial frame** is one where the first law holds: **no acceleration without net force**.",
        detail: "Ground and constant-velocity trains are nearly inertial; a braking car is not — loose objects lurch with no real force."
      },
      {
        term: "Mass as inertia",
        kind: "definition",
        statement: "**Mass** measures **inertia**: larger $m$ resists velocity change more strongly under the same force.",
        detail: "A $1000\\ \\mathrm{kg}$ car and a $0.15\\ \\mathrm{kg}$ ball under $10\\ \\mathrm{N}$ gain $0.01$ versus $67\\ \\mathrm{m/s^2}$."
      },
      {
        term: "Force changes, not sustains, motion",
        kind: "insight",
        statement: "**Force is needed to change $\\vec{v}$, never to maintain it** — Aristotle claim reversed.",
        detail: "A spaceship with engines off coasts at constant $\\vec{v}$ forever; friction on Earth merely hides this by demanding steady pushing."
      },
      {
        term: "Equilibrium preview",
        kind: "insight",
        statement: "**$\\sum\\vec{F} = 0$ is equilibrium**: statics ($\\vec{v} = 0$) and uniform motion both satisfy the first law.",
        detail: "A hovering helicopter and a cruising jet at constant $\\vec{v}$ both balance forces to zero net."
      }
    ],
    figures: [
      {
        caption: "First law: with $\\sum\\vec{F} = 0$ the puck keeps constant $\\vec{v}$ across frictionless ice",
        svg: `<svg viewBox="0 0 720 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inertia on ice"><rect x="40" y="110" width="640" height="14" fill="currentColor" opacity="0.15"/><rect x="120" y="80" width="60" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="200" y1="95" x2="320" y2="95" stroke="currentColor" stroke-width="2.5"/><polygon points="320,95 306,89 306,101" fill="currentColor"/><rect x="420" y="80" width="60" height="30" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="500" y1="95" x2="620" y2="95" stroke="currentColor" stroke-width="2.5"/><polygon points="620,95 606,89 606,101" fill="currentColor"/><text x="260" y="75" font-size="12" fill="currentColor">same v, no push</text><text x="360" y="140" font-size="12" fill="currentColor" opacity="0.7">frictionless ice: sum F = 0</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Coasting spaceship",
        problem: "A $2000\\ \\mathrm{kg}$ probe drifts at $5000\\ \\mathrm{m/s}$ with engines off. What force sustains it?",
        steps: [
          { label: "First law", text: "$\\sum\\vec{F} = 0$ still gives constant $\\vec{v}$ — no sustainer needed." },
          { label: "Answer", text: "Zero net force; velocity persists by inertia." },
          { label: "To change", text: "A $100\\ \\mathrm{N}$ burn for $50\\ \\mathrm{s}$ adds $\\Delta v = Ft/m = 2.5\\ \\mathrm{m/s}$." }
        ],
        result: "No force needed to coast; forces only change $\\vec{v}$."
      },
      {
        title: "Non-inertial lurch",
        problem: "A bus brakes hard; a ball on the floor rolls forward with no visible push. Violated law?",
        steps: [
          { label: "Frame check", text: "Braking bus accelerates — non-inertial frame." },
          { label: "Ground view", text: "Inertial ground frame: ball keeps its $\\vec{v}$ while the bus slows under it." },
          { label: "Fictitious effect", text: "Forward roll is inertia, not a real force." }
        ],
        result: "First law holds in inertial frames; accelerating frames add fictitious effects."
      }
    ],
    keyTakeaways: [
      "Zero net force means constant velocity — rest or uniform motion.",
      "Inertial frames honor the first law; accelerating frames do not.",
      "Mass quantifies resistance to velocity change."
    ],
    quiz: [
      {
        q: "Newton first law states:",
        options: ["$F = ma$ always", "With $\\sum\\vec{F} = 0$, velocity stays constant", "Objects naturally stop", "Heavier objects fall faster"],
        answer: 1,
        explanation: "Inertia: no net force, no change of $\\vec{v}$."
      },
      {
        q: "A braking bus is:",
        options: ["An inertial frame", "A non-inertial frame — free objects appear to accelerate", "Free of fictitious effects", "At rest"],
        answer: 1,
        explanation: "Acceleration of the frame itself breaks the first-law test."
      },
      {
        q: "Keeping a puck gliding on frictionless ice requires:",
        options: ["A steady forward force", "No net force — inertia sustains motion", "Increasing force", "Zero mass"],
        answer: 1,
        explanation: "Force changes $\\vec{v}$; it never maintains uniform motion."
      }
    ]
  },
  {
    sectionId: "young-ch4-s3",
    readingTime: 7,
    intro: "Newton second law is the engine of mechanics: net force equals mass times acceleration. This section states it in vector and component form, fixes units, and shows the standard solution pattern used in every dynamics chapter.",
    objectives: [
      "State $\\sum\\vec{F} = m\\vec{a}$ in vector and component form",
      "Solve for acceleration and motion from known forces",
      "Apply the component equations $\\sum F_x = ma_x$ independently"
    ],
    concepts: [
      {
        term: "Newton second law",
        kind: "law",
        statement: "**$\\sum\\vec{F} = m\\vec{a}$**: the vector sum of forces equals mass times acceleration, direction included.",
        detail: "A $2.0\\ \\mathrm{kg}$ mass under $6.0\\ \\mathrm{N}$ east gains $3.0\\ \\mathrm{m/s^2}$ east — $\\vec{a}$ follows $\\sum\\vec{F}$."
      },
      {
        term: "Component equations",
        kind: "theorem",
        statement: "**$\\sum F_x = ma_x$, $\\sum F_y = ma_y$, $\\sum F_z = ma_z$** — one scalar law per axis, coupled only through shared forces.",
        detail: "Ropes at angles contribute $F\\cos\\theta$ to $x$ and $F\\sin\\theta$ to $y$; solve axes in parallel."
      },
      {
        term: "Unit of force",
        kind: "notation",
        statement: "**$1\\ \\mathrm{N} = 1\\ \\mathrm{kg\\cdot m/s^2}$**: the force accelerating $1\\ \\mathrm{kg}$ at $1\\ \\mathrm{m/s^2}$.",
        detail: "Pounds convert as $1\\ \\mathrm{lb} = 4.448\\ \\mathrm{N}$; dynes as $1\\ \\mathrm{dyn} = 10^{-5}\\ \\mathrm{N}$."
      },
      {
        term: "Mass versus weight preview",
        kind: "insight",
        statement: "**$m$ is inertia** (same everywhere); **weight $w = mg$** is the gravitational force (place-dependent).",
        detail: "Second law reads $\\sum\\vec{F} = m\\vec{a}$ with inertial $m$ even when one force is weight."
      },
      {
        term: "Dynamics protocol",
        kind: "method",
        statement: "**Draw, resolve, sum, solve**: free-body diagram, components, $\\sum F = ma$ per axis, then kinematics for motion.",
        detail: "Finding $a_x$ from forces hands off to Chapter 2 equations for $v_x$ and $x$."
      }
    ],
    examples: [
      {
        title: "Acceleration from two forces",
        problem: "A $4.0\\ \\mathrm{kg}$ block feels $12\\ \\mathrm{N}$ east and $5.0\\ \\mathrm{N}$ north. Find $\\vec{a}$.",
        steps: [
          { label: "Net force", text: "$F = \\sqrt{144+25} = 13\\ \\mathrm{N}$ at $\\arctan(5/12) = 22.6^{\\circ}$ north of east." },
          { label: "Second law", text: "$a = F/m = 13/4.0 = 3.25\\ \\mathrm{m/s^2}$ same direction." },
          { label: "Components", text: "$a_x = 3.0\\ \\mathrm{m/s^2}$, $a_y = 1.25\\ \\mathrm{m/s^2}$." }
        ],
        result: "$3.25\\ \\mathrm{m/s^2}$ at $22.6^{\\circ}$ north of east."
      },
      {
        title: "Force to produce motion",
        problem: "What net force accelerates a $1200\\ \\mathrm{kg}$ car at $2.5\\ \\mathrm{m/s^2}$?",
        steps: [
          { label: "Law", text: "$F = ma = 1200 \\times 2.5 = 3000\\ \\mathrm{N}$." },
          { label: "Direction", text: "Along $\\vec{a}$ — forward for speeding up." },
          { label: "Check", text: "About $0.25g$: firm acceleration, plausible for an engine plus friction balance." }
        ],
        result: "$3000\\ \\mathrm{N}$ net forward."
      }
    ],
    keyTakeaways: [
      "$\\sum\\vec{F} = m\\vec{a}$ is vector: magnitude and direction both matter.",
      "Solve per axis with $\\sum F_x = ma_x$ and friends.",
      "Forces give acceleration; kinematics converts it to motion."
    ],
    quiz: [
      {
        q: "$6.0\\ \\mathrm{N}$ east on $2.0\\ \\mathrm{kg}$ gives:",
        options: ["$12\\ \\mathrm{m/s^2}$ east", "$3.0\\ \\mathrm{m/s^2}$ east", "$3.0\\ \\mathrm{m/s^2}$ west", "$6.0\\ \\mathrm{m/s^2}$ north"],
        answer: 1,
        explanation: "$a = F/m = 3.0\\ \\mathrm{m/s^2}$ along the net force."
      },
      {
        q: "Component form of the second law is:",
        options: ["$\\sum F_x = ma_x$ etc. per axis", "$F = mv$ per axis", "$\\sum F = 0$ always", "$a = mF$"],
        answer: 0,
        explanation: "Each axis carries its own scalar copy of $\\sum F = ma$."
      },
      {
        q: "One newton is:",
        options: ["$1\\ \\mathrm{kg\\cdot m/s^2}$", "$1\\ \\mathrm{kg/m}$", "$9.8\\ \\mathrm{kg}$", "$1\\ \\mathrm{J/s^2}$"],
        answer: 0,
        explanation: "From $F = ma$: mass times acceleration units."
      }
    ]
  },
  {
    sectionId: "young-ch4-s4",
    readingTime: 5,
    intro: "Mass and weight sound alike but physics separates them sharply: mass is inertia, weight is gravity pull. This section quantifies $w = mg$, shows $g$ varying slightly with place, and handles weighing and apparent weight.",
    objectives: [
      "Distinguish mass (inertia) from weight (force)",
      "Compute $w = mg$ and convert mass and weight units",
      "Explain apparent weight in accelerating elevators"
    ],
    concepts: [
      {
        term: "Mass",
        kind: "definition",
        statement: "**Mass $m$** (kilograms) measures **inertia** — resistance to acceleration — and is **location-independent**.",
        detail: "A $70\\ \\mathrm{kg}$ astronaut is $70\\ \\mathrm{kg}$ on Earth, the Moon, and in orbit."
      },
      {
        term: "Weight",
        kind: "definition",
        statement: "**Weight $\\vec{w} = m\\vec{g}$** is the **gravitational force** on the mass, pointing toward Earth center.",
        detail: "$70\\ \\mathrm{kg}$ weighs $686\\ \\mathrm{N}$ where $g = 9.80$ but $113\\ \\mathrm{N}$ where $g = 1.62\\ \\mathrm{m/s^2}$ (Moon)."
      },
      {
        term: "Variation of $g$",
        kind: "insight",
        statement: "**$g$ varies** with altitude, latitude, and planet: $9.83$ at the poles, $9.78$ at the equator, $3.71$ on Mars.",
        detail: "Centrifugal reduction and equatorial bulge lighten equatorial weight by ~$0.5$%."
      },
      {
        term: "Weighing measures force",
        kind: "method",
        statement: "A **scale reads normal force**, which equals $mg$ only in **non-accelerating** equilibrium.",
        detail: "Standing on a scale in an elevator accelerating up at $a$: $n = m(g+a)$ — heavier; accelerating down: $n = m(g-a)$."
      },
      {
        term: "Weightlessness",
        kind: "insight",
        statement: "**Weightlessness is zero apparent weight** ($n = 0$), not zero gravity — free fall cancels the contact force.",
        detail: "Orbiting astronauts still feel ~$90$% of surface $g$; falling with $a = g$ removes the scale push."
      }
    ],
    examples: [
      {
        title: "Weight on Moon and Mars",
        problem: "A $70\\ \\mathrm{kg}$ astronaut: weight on Earth, Moon ($g = 1.62$), Mars ($g = 3.71$)?",
        steps: [
          { label: "Earth", text: "$w = 70 \\times 9.80 = 686\\ \\mathrm{N}$." },
          { label: "Moon", text: "$w = 70 \\times 1.62 = 113\\ \\mathrm{N}$." },
          { label: "Mars", text: "$w = 70 \\times 3.71 = 260\\ \\mathrm{N}$." }
        ],
        result: "$686$, $113$, $260\\ \\mathrm{N}$ — same mass, three weights."
      },
      {
        title: "Elevator scale",
        problem: "A $60\\ \\mathrm{kg}$ person rides an elevator accelerating up at $2.0\\ \\mathrm{m/s^2}$. What does the scale read?",
        steps: [
          { label: "Forces", text: "$n - mg = ma$: $n = m(g+a)$." },
          { label: "Numbers", text: "$n = 60 \\times 11.8 = 708\\ \\mathrm{N}$." },
          { label: "Mass-equivalent", text: "$708/9.8 = 72.2\\ \\mathrm{kg}$ displayed — heavier than true $60\\ \\mathrm{kg}$." }
        ],
        result: "$708\\ \\mathrm{N}$ ($72.2\\ \\mathrm{kg}$ reading) while accelerating up."
      }
    ],
    keyTakeaways: [
      "Mass is inertia ($\\mathrm{kg}$); weight is force ($\\mathrm{N}$).",
      "$w = mg$ follows $g$ wherever you go.",
      "Scales read apparent weight $n$, equal to $mg$ only at rest."
    ],
    quiz: [
      {
        q: "A $70\\ \\mathrm{kg}$ astronaut on the Moon ($g = 1.62$) has:",
        options: ["Mass $11\\ \\mathrm{kg}$, weight $686\\ \\mathrm{N}$", "Mass $70\\ \\mathrm{kg}$, weight $113\\ \\mathrm{N}$", "Mass zero, weight zero", "Mass $113\\ \\mathrm{kg}$"],
        answer: 1,
        explanation: "Mass is invariant; weight scales with local $g$."
      },
      {
        q: "Elevator accelerating upward makes the scale read:",
        options: ["Less than $mg$", "$m(g+a)$ — heavier", "Zero always", "$mg$ always"],
        answer: 1,
        explanation: "$n - mg = ma$ forces $n$ above $mg$ when $a$ is up."
      },
      {
        q: "Orbital weightlessness means:",
        options: ["No gravity acts", "Zero apparent weight in free fall, though gravity still pulls", "Zero mass", "No motion"],
        answer: 1,
        explanation: "Astronauts and ship fall together; contact force vanishes while $g$ remains ~$90$%."
      }
    ]
  },
  {
    sectionId: "young-ch4-s5",
    readingTime: 5,
    intro: "Forces come in opposite pairs: push on something and it pushes back equally. This section states Newton third law, identifies true action-reaction pairs, and defeats the classic horse-and-cart paradox.",
    objectives: [
      "State Newton third law for interaction pairs",
      "Identify correct action-reaction partners",
      "Resolve why pairs do not cancel (different bodies)"
    ],
    concepts: [
      {
        term: "Newton third law",
        kind: "law",
        statement: "If A pushes B with $\\vec{F}_{A\\mathrm{on}B}$, then B pushes A with **$\\vec{F}_{B\\mathrm{on}A} = -\\vec{F}_{A\\mathrm{on}B}$** — equal, opposite, same line.",
        detail: "A $100\\ \\mathrm{N}$ hammer blow on a nail returns $100\\ \\mathrm{N}$ on the hammer."
      },
      {
        term: "Pairs act on different bodies",
        kind: "insight",
        statement: "Action and reaction **never share a body**, so they **never cancel** in $\\sum\\vec{F}$ for one object.",
        detail: "Book-on-table gravity pair: Earth pulls book down; book pulls Earth up — only the first enters the book diagram."
      },
      {
        term: "True versus false pairs",
        kind: "method",
        statement: "True pairs share an **interaction type** (both gravity, both contact); equal-opposite forces on one body are **not** a third-law pair.",
        detail: "Book weight (Earth on book, gravity) and table normal (table on book, contact) balance but are not partners."
      },
      {
        term: "Horse-and-cart resolved",
        kind: "insight",
        statement: "The horse pulls the cart forward; the cart pulls the horse back — but **cart motion depends on cart forces, horse motion on horse forces**.",
        detail: "The horse advances by pushing ground backward; ground pushes the horse forward harder than the cart drags it back."
      },
      {
        term: "Recoil and propulsion",
        kind: "insight",
        statement: "**Recoil** (gun, rocket, swimmer off a wall) is third-law bookkeeping: exhaust momentum one way pays for vehicle momentum the other.",
        detail: "A $0.01\\ \\mathrm{kg}$ bullet at $400\\ \\mathrm{m/s}$ recoils a $4\\ \\mathrm{kg}$ rifle at $1.0\\ \\mathrm{m/s}$."
      }
    ],
    figures: [
      {
        caption: "Third law: $\\vec{F}_{B\\mathrm{on}A} = -\\vec{F}_{A\\mathrm{on}B}$ act on different bodies and never cancel",
        svg: `<svg viewBox="0 0 720 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Action reaction pair"><rect x="120" y="60" width="140" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="190" y="95" font-size="14" text-anchor="middle" fill="currentColor">A: horse</text><rect x="460" y="60" width="140" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="530" y="95" font-size="14" text-anchor="middle" fill="currentColor">B: cart</text><line x1="260" y1="90" x2="460" y2="90" stroke="currentColor" stroke-width="2.5"/><polygon points="460,90 446,84 446,96" fill="currentColor"/><line x1="460" y1="110" x2="260" y2="110" stroke="currentColor" stroke-width="2.5"/><polygon points="260,110 274,104 274,116" fill="currentColor"/><text x="360" y="75" font-size="12" text-anchor="middle" fill="currentColor">A on B forward</text><text x="360" y="135" font-size="12" text-anchor="middle" fill="currentColor">B on A backward</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Rifle recoil",
        problem: "A $4.0\\ \\mathrm{kg}$ rifle fires a $0.010\\ \\mathrm{kg}$ bullet at $400\\ \\mathrm{m/s}$. Find recoil speed.",
        steps: [
          { label: "Pair", text: "Gas pushes bullet forward and rifle back equally during the shot." },
          { label: "Momentum shortcut", text: "Initially zero: $0 = m_b v_b + m_r v_r$." },
          { label: "Solve", text: "$v_r = -(0.010 \\times 400)/4.0 = -1.0\\ \\mathrm{m/s}$." }
        ],
        result: "$1.0\\ \\mathrm{m/s}$ backward — small mass ratio, small kick."
      },
      {
        title: "Book on table pairs",
        problem: "List the third-law partners for a book resting on a table.",
        steps: [
          { label: "Gravity pair", text: "Earth pulls book down $mg$; book pulls Earth up $mg$." },
          { label: "Contact pair", text: "Table pushes book up $n$; book pushes table down $n$." },
          { label: "Non-pair", text: "$mg$ down and $n$ up share a body (book) — balance, not partners." }
        ],
        result: "Two pairs, four forces; equilibrium uses two forces on one body."
      }
    ],
    keyTakeaways: [
      "Third-law pairs are equal, opposite, same interaction, different bodies.",
      "Pairs never cancel in a single free-body diagram.",
      "Motion follows per-body net force, resolving all paradoxes."
    ],
    quiz: [
      {
        q: "Action-reaction pairs cancel because they are equal and opposite:",
        options: ["True — net is always zero", "False — they act on different bodies", "True in space only", "False — they are never equal"],
        answer: 1,
        explanation: "Cancellation needs one body; partners live on two."
      },
      {
        q: "Book weight and table normal force are:",
        options: ["A third-law pair", "Balanced forces on one body, not partners", "Both gravity", "Both contact"],
        answer: 1,
        explanation: "Different interactions (gravity vs contact) disqualify them despite balancing."
      },
      {
        q: "A $0.010\\ \\mathrm{kg}$ bullet at $400\\ \\mathrm{m/s}$ recoils a $4.0\\ \\mathrm{kg}$ rifle at:",
        options: ["$400\\ \\mathrm{m/s}$", "$1.0\\ \\mathrm{m/s}$", "$40\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "Mass ratio $0.010/4.0$ scales $400\\ \\mathrm{m/s}$ down to $1.0\\ \\mathrm{m/s}$."
      }
    ]
  },
  {
    sectionId: "young-ch4-s6",
    readingTime: 7,
    intro: "The free-body diagram is the universal setup tool: isolate the object, draw every force at its point, choose axes, and let $\\sum F = ma$ write itself. This section builds the diagram habit Young demands on every dynamics problem.",
    objectives: [
      "Construct complete free-body diagrams for single and multiple bodies",
      "Choose coordinates that simplify $\\sum F = ma$",
      "Translate diagrams into component equations"
    ],
    concepts: [
      {
        term: "Free-body diagram",
        kind: "method",
        statement: "**Isolate one body**, sketch it alone, and draw **every external force** as an arrow from its application point.",
        detail: "Book on table: dot for the book, $mg$ down, $n$ up — nothing else; the table gets its own diagram."
      },
      {
        term: "Include everything, exclude the body surroundings",
        kind: "method",
        statement: "List **gravity, normals, friction, tension, springs, applied pushes** — never accelerations or velocities as forces.",
        detail: "$ma$ is the result of forces, not a force itself; drawing it double-counts."
      },
      {
        term: "Coordinate choice",
        kind: "method",
        statement: "Point **one axis along the acceleration** so the other sums to zero; tilt axes with slopes and pendulums.",
        detail: "Incline: $x$ down the plane gives $mg\\sin\\theta = ma_x$ directly, $n - mg\\cos\\theta = 0$ across."
      },
      {
        term: "Multiple bodies, multiple diagrams",
        kind: "method",
        statement: "Draw **one diagram per mass**; cord tension pulls **away** from each body with the same magnitude for massless strings.",
        detail: "Atwood $m_1, m_2$: two diagrams, shared $T$, accelerations equal in magnitude along the cord."
      },
      {
        term: "From picture to equations",
        kind: "method",
        statement: "Resolve each arrow into components and **sum per axis**: $\\sum F_x = ma_x$, $\\sum F_y = ma_y$.",
        detail: "The diagram is the equation in graphical form — missing arrows mean missing terms."
      }
    ],
    figures: [
      {
        caption: "Free-body diagram: isolate the block, draw $m\\vec{g}$, $\\vec{n}$, $\\vec{T}$, and $\\vec{f}$ at the point",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Free body diagram"><rect x="300" y="90" width="120" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="60" y1="160" x2="680" y2="160" stroke="currentColor" stroke-width="2"/><circle cx="360" cy="125" r="4" fill="currentColor"/><line x1="360" y1="125" x2="360" y2="185" stroke="currentColor" stroke-width="2"/><polygon points="360,185 354,173 366,173" fill="currentColor"/><text x="375" y="175" font-size="12" fill="currentColor">mg</text><line x1="360" y1="125" x2="360" y2="65" stroke="currentColor" stroke-width="2"/><polygon points="360,65 354,77 366,77" fill="currentColor"/><text x="375" y="75" font-size="12" fill="currentColor">n</text><line x1="360" y1="125" x2="500" y2="125" stroke="currentColor" stroke-width="2"/><polygon points="500,125 488,119 488,131" fill="currentColor"/><text x="505" y="118" font-size="12" fill="currentColor">T</text><line x1="360" y1="125" x2="240" y2="125" stroke="currentColor" stroke-width="2"/><polygon points="240,125 252,119 252,131" fill="currentColor"/><text x="210" y="118" font-size="12" fill="currentColor">f</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Block on a frictionless incline",
        problem: "A $5.0\\ \\mathrm{kg}$ block slides on a $30^{\\circ}$ frictionless incline. Find $a_x$ down the plane.",
        steps: [
          { label: "Diagram", text: "Isolate block: $mg$ down, $n$ perpendicular to plane." },
          { label: "Axes", text: "$x$ down plane, $y$ normal: $mg_x = mg\\sin 30^{\\circ}$, $mg_y = -mg\\cos 30^{\\circ}$." },
          { label: "Laws", text: "$\\sum F_x = mg\\sin 30^{\\circ} = ma_x$: $a_x = 9.80 \\times 0.500 = 4.90\\ \\mathrm{m/s^2}$; $n = mg\\cos 30^{\\circ} = 42.4\\ \\mathrm{N}$." }
        ],
        result: "$4.90\\ \\mathrm{m/s^2}$ down the plane; $n = 42.4\\ \\mathrm{N}$."
      },
      {
        title: "Two-body pull",
        problem: "A $3.0\\ \\mathrm{kg}$ and $2.0\\ \\mathrm{kg}$ pair joined by a cord are pulled by $25\\ \\mathrm{N}$ on frictionless ice. Find $a$ and $T$.",
        steps: [
          { label: "System", text: "Total $5.0\\ \\mathrm{kg}$: $a = 25/5.0 = 5.0\\ \\mathrm{m/s^2}$." },
          { label: "Rear diagram", text: "Only $T$ pulls the $2.0\\ \\mathrm{kg}$ mass: $T = 2.0 \\times 5.0 = 10\\ \\mathrm{N}$." },
          { label: "Front check", text: "$25 - T = 3.0 \\times 5.0 = 15$: $T = 10\\ \\mathrm{N}$ — consistent." }
        ],
        result: "$a = 5.0\\ \\mathrm{m/s^2}$; cord tension $10\\ \\mathrm{N}$."
      }
    ],
    keyTakeaways: [
      "One body, one diagram, every external force drawn.",
      "Aim an axis along $\\vec{a}$ to decouple the equations.",
      "Never draw $ma$ as a force; it is the sum result."
    ],
    quiz: [
      {
        q: "First step of any dynamics problem is:",
        options: ["Plugging numbers into $F = ma$", "Isolating the body and drawing all external forces", "Guessing the acceleration direction magnitude", "Drawing velocity as a force"],
        answer: 1,
        explanation: "The diagram enumerates terms before any equation is written."
      },
      {
        q: "Block on a $30^{\\circ}$ frictionless incline accelerates at:",
        options: ["$9.80\\ \\mathrm{m/s^2}$", "$4.90\\ \\mathrm{m/s^2}$ down the plane", "Zero", "$8.49\\ \\mathrm{m/s^2}$ up the plane"],
        answer: 1,
        explanation: "$a_x = g\\sin 30^{\\circ} = 4.90\\ \\mathrm{m/s^2}$."
      },
      {
        q: "Which must never appear as a force arrow?",
        options: ["Tension", "Weight", "$ma$ — it is the result, not a force", "Normal force"],
        answer: 2,
        explanation: "Drawing $ma$ alongside real forces double-counts the law itself."
      }
    ]
  }
];
