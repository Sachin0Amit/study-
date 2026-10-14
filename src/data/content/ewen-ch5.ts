import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 5: Force (pp 140-159)
// ============================================================================

export const ewenCh5Content: SectionContent[] = [
  {
    sectionId: 'ewen-ch5-s1',
    readingTime: 5,
    intro: "A force is a push or pull that changes motion, and the first law tells when motion needs no force at all. This section defines force, inertia, and mass, and sets up the free-body habit.",
    objectives: [
      "State Newton first law and define inertia",
      "Relate mass to inertia with examples",
      "Draw a correct free-body diagram for a simple body",
    ],
    concepts: [
      {
        term: "Force",
        kind: "definition",
        statement: "A **force** is a push or pull in a direction, measured in **newtons ($\\mathrm{N}$)** or pounds, that tends to accelerate the body it acts on.",
        detail: "Forces are vectors: $10\\ \\mathrm{N}$ east and $10\\ \\mathrm{N}$ west cancel rather than add.",
      },
      {
        term: "Newton first law (inertia)",
        kind: "law",
        statement: "Without net force, a body **keeps its velocity**: rest stays rest, uniform motion stays uniform — this property is **inertia**.",
        detail: "Seat-belt injuries and tablecloth tricks are inertia demonstrations, not mysteries.",
      },
      {
        term: "Mass as inertia measure",
        kind: "definition",
        statement: "**Mass** in kilograms quantifies inertia: harder to accelerate means more mass, independent of location.",
        detail: "A $2\\ \\mathrm{kg}$ block resists velocity change twice as strongly as a $1\\ \\mathrm{kg}$ block anywhere.",
      },
      {
        term: "Net force decides",
        kind: "insight",
        statement: "Only the **vector sum (net force)** changes motion; balanced forces leave velocity untouched no matter how large each is.",
        detail: "A tug-of-war at $500\\ \\mathrm{N}$ each side produces zero net force and zero acceleration.",
      },
      {
        term: "Free-body diagram",
        kind: "method",
        statement: "Isolate the body, mark its **center with all external forces as arrows**, and label magnitudes, directions, and axes.",
        detail: "Internal grips and stresses are omitted — only outside pushes and pulls enter $\\sum\\vec{F}$.",
      },
    ],
    figures: [
      {
        caption: "Free-body diagram: isolated block with weight down, normal up, applied push, and friction back",
        svg: '<svg role="img" aria-label="Free-body diagram: isolated block with weight down, normal up, applied push, and friction back" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="160" y="80" width="80" height="50"/><line x1="40" y1="130" x2="360" y2="130"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="200" y1="80" x2="200" y2="35"/><line x1="200" y1="130" x2="200" y2="165"/><line x1="240" y1="105" x2="300" y2="105"/><line x1="160" y1="105" x2="110" y2="105"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="206" y="55">N</text><text x="206" y="178">W = mg</text><text x="302" y="110">applied</text><text x="60" y="110">friction</text></g></svg>',
        afterConcept: 5,
      },
    ],
    examples: [
      {
        title: "Belt-ride inertia",
        problem: "A $70.0\\ \\mathrm{kg}$ passenger rides a bus braking from $12.0\\ \\mathrm{m/s}$. Explain the forward lurch with the first law.",
        steps: [
          { label: "Before", text: "Passenger and bus share $12.0\\ \\mathrm{m/s}$ forward velocity." },
          { label: "Braking", text: "Brakes exert backward force on the bus, not directly on the passenger." },
          { label: "Inertia", text: "With no backward force on her yet, she keeps $12.0\\ \\mathrm{m/s}$ — lurching forward relative to the bus until the belt supplies the stopping force." },
        ],
        result: "The lurch is continued uniform motion, exactly as the first law predicts.",
      },
      {
        title: "Balanced forces at cruise",
        problem: "A truck cruises at steady $25\\ \\mathrm{m/s}$ with $3000\\ \\mathrm{N}$ of driving force. What is the drag force?",
        steps: [
          { label: "First law", text: "Constant velocity means net force zero." },
          { label: "Balance", text: "Drag must equal driving force oppositely: $3000\\ \\mathrm{N}$ backward." },
          { label: "Note", text: "Large forces act, but their vector sum vanishes." },
        ],
        result: "$3000\\ \\mathrm{N}$ of drag balances the drive.",
      },
    ],
    keyTakeaways: [
      "Force is a directed push or pull in newtons; only net force accelerates.",
      "Inertia (mass) keeps velocity without net force — the first law.",
      "Free-body diagrams isolate the body and show every external force.",
    ],
    quiz: [
      {
        q: "A truck cruising steadily at $25\\ \\mathrm{m/s}$ with $3000\\ \\mathrm{N}$ drive has drag",
        options: ["Zero", "$3000\\ \\mathrm{N}$ backward", "$3000\\ \\mathrm{N}$ forward", "$25\\ \\mathrm{N}$ backward"],
        answer: 1,
        explanation: "Uniform velocity requires $\\sum F = 0$, so drag cancels drive.",
      },
      {
        q: "The forward lurch under braking is caused by",
        options: ["A forward force from the brakes", "Passenger inertia maintaining velocity", "Increased mass", "Engine thrust"],
        answer: 1,
        explanation: "No backward force acts on the passenger until the belt engages.",
      },
      {
        q: "A free-body diagram shows",
        options: ["Internal stresses only", "All external forces on the isolated body", "Only the weight", "The motion path"],
        answer: 1,
        explanation: "External pushes and pulls as arrows on the isolated body.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch5-s2',
    readingTime: 6,
    intro: "The second law turns force from a qualitative push into a calculable $F = ma$. This section applies it to vehicles, hoists, and shop loads with strict unit discipline.",
    objectives: [
      "State Newton second law and its unit relation",
      "Compute $F$, $m$, or $a$ from the other two",
      "Solve horizontal dynamics with friction included",
    ],
    concepts: [
      {
        term: "Newton second law",
        kind: "law",
        statement: "Net force equals mass times acceleration: **$\\sum\\vec{F} = m\\vec{a}$**, so **$1\\ \\mathrm{N} = 1\\ \\mathrm{kg \\cdot m/s^2}$** by definition.",
        detail: "Double the net force at fixed mass and acceleration doubles; double the mass and it halves.",
      },
      {
        term: "Direction rule",
        kind: "law",
        statement: "Acceleration points **along the net force**, with magnitude $a = F_{net}/m$ — components obey $\\sum F_x = ma_x$ independently.",
        detail: "Sideways forces never cause forward acceleration.",
      },
      {
        term: "Kilogram versus newton",
        kind: "insight",
        statement: "Kilograms measure **inertia**; newtons measure **force** — $F = ma$ converts between them but they are never interchangeable.",
        detail: "A $10\\ \\mathrm{kg}$ mass needs $98.0\\ \\mathrm{N}$ to support against gravity, not $10\\ \\mathrm{N}$.",
      },
      {
        term: "Net-force bookkeeping",
        kind: "method",
        statement: "Add **signed forces on each axis first**, then apply $a = F_{net}/m$ — never apply $F = ma$ to one force of an opposed pair.",
        detail: "Thrust minus drag is the accelerating quantity, not thrust alone.",
      },
      {
        term: "Weight as $mg",
        kind: "law",
        statement: "Gravity exerts **$W = mg$** downward with $g = 9.80\\ \\mathrm{m/s^2}$ — the most common force substituted into $\\sum F$.",
        detail: "A $50.0\\ \\mathrm{kg}$ crate weighs $490\\ \\mathrm{N}$ and needs that much upward support to hover.",
      },
    ],
    examples: [
      {
        title: "Sports-car driving force",
        problem: "A $1500\\ \\mathrm{kg}$ car accelerates at $3.00\\ \\mathrm{m/s^2}$ against $1200\\ \\mathrm{N}$ of drag. What driving force is needed?",
        steps: [
          { label: "Net force", text: "$F_{net} = ma = 1500 \\times 3.00 = 4500\\ \\mathrm{N}$ forward." },
          { label: "Add drag", text: "Drive must supply net plus drag: $4500 + 1200 = 5700\\ \\mathrm{N}$." },
          { label: "Report", text: "$5.70\\ \\mathrm{kN}$ of forward driving force." },
        ],
        result: "$5.70\\ \\mathrm{kN}$ driving force.",
      },
      {
        title: "Forklift load acceleration",
        problem: "A $2000\\ \\mathrm{kg}$ loaded pallet gets net $800\\ \\mathrm{N}$ forward. Find $a$ and the speed after $5.00\\ \\mathrm{s}$ from rest.",
        steps: [
          { label: "Accelerate", text: "$a = F/m = 800/2000 = 0.400\\ \\mathrm{m/s^2}$." },
          { label: "Speed", text: "$v = at = 0.400 \\times 5.00 = 2.00\\ \\mathrm{m/s}$." },
          { label: "Sense", text: "Slow warehouse pace — consistent with a heavy load and small net force." },
        ],
        result: "$0.400\\ \\mathrm{m/s^2}$, reaching $2.00\\ \\mathrm{m/s}$.",
      },
    ],
    keyTakeaways: [
      "$\\sum F = ma$ links net force to acceleration with $1\\ \\mathrm{N} = 1\\ \\mathrm{kg \\cdot m/s^2}$.",
      "Sum signed forces first; thrust alone is not the net force.",
      "Mass is inertia ($\\mathrm{kg}$); force is push ($\\mathrm{N}$).",
    ],
    quiz: [
      {
        q: "$1500\\ \\mathrm{kg}$ at $3.00\\ \\mathrm{m/s^2}$ against $1200\\ \\mathrm{N}$ drag needs drive",
        options: ["$4500\\ \\mathrm{N}$", "$5700\\ \\mathrm{N}$", "$3300\\ \\mathrm{N}$", "$1200\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "Net $4500\\ \\mathrm{N}$ plus $1200\\ \\mathrm{N}$ drag = $5700\\ \\mathrm{N}$.",
      },
      {
        q: "Net $800\\ \\mathrm{N}$ on $2000\\ \\mathrm{kg}$ gives acceleration",
        options: ["$2.50\\ \\mathrm{m/s^2}$", "$0.400\\ \\mathrm{m/s^2}$", "$1600\\ \\mathrm{m/s^2}$", "$2800\\ \\mathrm{m/s^2}$"],
        answer: 1,
        explanation: "$a = 800/2000 = 0.400\\ \\mathrm{m/s^2}$.",
      },
      {
        q: "Acceleration points",
        options: ["Opposite the net force", "Along the net force", "Always upward", "Always along velocity"],
        answer: 1,
        explanation: "$\\vec{a} = \\sum\\vec{F}/m$ is parallel to the net force.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch5-s3',
    readingTime: 6,
    intro: "Weight is gravity pull on a mass, and it changes with $g$ while mass does not. This section computes weights, compares earth-moon readings, and separates mass, weight, and force units finally.",
    objectives: [
      "Compute weight from mass with $W = mg$",
      "Predict weight changes on the moon and in elevators",
      "Convert weights between newtons and pounds",
    ],
    concepts: [
      {
        term: "Weight formula",
        kind: "law",
        statement: "**$W = mg$** downward, with $g = 9.80\\ \\mathrm{m/s^2}$ at earth surface — weight is a force in newtons.",
        detail: "A $70.0\\ \\mathrm{kg}$ person weighs $686\\ \\mathrm{N}$ (about $154\\ \\mathrm{lb}$).",
      },
      {
        term: "Mass invariance",
        kind: "insight",
        statement: "**Mass never changes with location**; weight scales with local $g$ — moon $g$ is $1.62\\ \\mathrm{m/s^2}$, about one-sixth of earth.",
        detail: "That $70.0\\ \\mathrm{kg}$ astronaut still has $70.0\\ \\mathrm{kg}$ of inertia on the moon but weighs only $113\\ \\mathrm{N}$.",
      },
      {
        term: "Pound-newton bridge",
        kind: "notation",
        statement: "**$1\\ \\mathrm{lb} = 4.448\\ \\mathrm{N}$** converts scale readings; $1\\ \\mathrm{kg}$ of mass weighs $2.205\\ \\mathrm{lb}$ on earth.",
        detail: "Scales marked in pounds read force; balances comparing masses read mass.",
      },
      {
        term: "Apparent weight in accelerators",
        kind: "law",
        statement: "In an elevator accelerating upward at $a$, the floor pushes **$N = m(g + a)$** — apparent weight rises; downward $a$ lowers it.",
        detail: "Free fall ($a = g$ down) gives $N = 0$: true weightlessness feeling with gravity still acting.",
      },
      {
        term: "Center of weight action",
        kind: "definition",
        statement: "Weight acts at the **center of gravity** of the body — the balance point where the whole $mg$ may be drawn in diagrams.",
        detail: "Chapter 7 locates that point for beams and composite shapes.",
      },
    ],
    examples: [
      {
        title: "Crate weight both ways",
        problem: "A crate has mass $50.0\\ \\mathrm{kg}$. Find its earth weight in newtons and pounds.",
        steps: [
          { label: "Newtons", text: "$W = 50.0 \\times 9.80 = 490\\ \\mathrm{N}$." },
          { label: "Pounds", text: "$490/4.448 \\approx 110\\ \\mathrm{lb}$." },
          { label: "Moon check", text: "On the moon: $50.0 \\times 1.62 = 81.0\\ \\mathrm{N}$ — same mass, one-sixth weight." },
        ],
        result: "$490\\ \\mathrm{N}$ ($110\\ \\mathrm{lb}$) on earth; $81.0\\ \\mathrm{N}$ on the moon.",
      },
      {
        title: "Elevator scale reading",
        problem: "A $70.0\\ \\mathrm{kg}$ person rides an elevator accelerating upward at $2.00\\ \\mathrm{m/s^2}$. What does the floor scale read?",
        steps: [
          { label: "Forces", text: "$N - mg = ma$, so $N = m(g + a)$." },
          { label: "Substitute", text: "$N = 70.0 \\times (9.80 + 2.00) = 70.0 \\times 11.80 = 826\\ \\mathrm{N}$." },
          { label: "Compare", text: "Rest weight $686\\ \\mathrm{N}$ ($154\\ \\mathrm{lb}$); now $826\\ \\mathrm{N}$ ($186\\ \\mathrm{lb}$) — heavier feeling." },
        ],
        result: "Scale reads $826\\ \\mathrm{N}$ during upward acceleration.",
      },
    ],
    keyTakeaways: [
      "$W = mg$ downward; mass is fixed, weight follows local $g$.",
      "$1\\ \\mathrm{lb} = 4.448\\ \\mathrm{N}$ bridges scale units.",
      "Accelerating supports change apparent weight via $N = m(g \\pm a)$.",
    ],
    quiz: [
      {
        q: "A $50.0\\ \\mathrm{kg}$ crate weighs on earth",
        options: ["$50.0\\ \\mathrm{N}$", "$490\\ \\mathrm{N}$", "$5.10\\ \\mathrm{N}$", "$4900\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$50.0 \\times 9.80 = 490\\ \\mathrm{N}$.",
      },
      {
        q: "On the moon ($g = 1.62$) that crate weighs about",
        options: ["$490\\ \\mathrm{N}$", "$81.0\\ \\mathrm{N}$", "$50.0\\ \\mathrm{N}$", "Zero"],
        answer: 1,
        explanation: "$50.0 \\times 1.62 = 81.0\\ \\mathrm{N}$; mass unchanged.",
      },
      {
        q: "$70\\ \\mathrm{kg}$ in an elevator accelerating up at $2.00\\ \\mathrm{m/s^2}$ feels",
        options: ["$686\\ \\mathrm{N}$", "$826\\ \\mathrm{N}$", "$546\\ \\mathrm{N}$", "Zero"],
        answer: 1,
        explanation: "$N = 70(9.80 + 2.00) = 826\\ \\mathrm{N}$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch5-s4',
    readingTime: 6,
    intro: "Friction opposes slipping between surfaces and sets the real force needed to slide, roll, or hold a load. This section quantifies it with $f = \\mu N$ and works sliding-crate and braking problems.",
    objectives: [
      "Distinguish static from kinetic friction",
      "Compute friction from $f = \\mu N$",
      "Include friction in $F = ma$ problems correctly",
    ],
    concepts: [
      {
        term: "Friction direction",
        kind: "definition",
        statement: "**Friction opposes relative motion or its onset**, acting parallel to the surfaces — never helping the slide.",
        detail: "Push a crate east and friction points west; brake a rolling wheel and friction points to slow it.",
      },
      {
        term: "Coulomb friction law",
        kind: "law",
        statement: "**$f = \\mu N$**: friction is proportional to the normal force, with $\\mu$ set by the surface pair, not contact area.",
        detail: "Rubber on dry concrete $\\mu \\approx 0.7$; greased steel drops to about $0.1$.",
      },
      {
        term: "Static versus kinetic",
        kind: "definition",
        statement: "**Static $\\mu_s$** (grip before slipping) exceeds **kinetic $\\mu_k$** (sliding drag): it takes more to start than to keep going.",
        detail: "Anti-lock brakes cycle near peak static grip instead of locking into weaker kinetic sliding.",
      },
      {
        term: "Normal force on level ground",
        kind: "method",
        statement: "On a horizontal surface with no vertical push, **$N = mg$**, so sliding friction is $f_k = \\mu_k mg$.",
        detail: "Pressing down extra (a hand on the crate) raises $N$ and friction with it.",
      },
      {
        term: "Friction in net force",
        kind: "method",
        statement: "Friction enters $\\sum F$ **with opposing sign**: $F_{applied} - f = ma$ for horizontal speeding.",
        detail: "Forgetting friction overestimates acceleration and underestimates stopping needs.",
      },
    ],
    figures: [
      {
        caption: "Sliding crate: applied push forward, kinetic friction $f_k = \\mu_k N$ back, $N = mg$ up",
        svg: '<svg role="img" aria-label="Sliding crate: applied push forward, kinetic friction f_k = mu_k N back, N = mg up" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="150" y="70" width="100" height="55"/><line x1="30" y1="125" x2="370" y2="125"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="60" y1="132" x2="80" y2="125"/><line x1="100" y1="132" x2="120" y2="125"/><line x1="140" y1="132" x2="160" y2="125"/><line x1="180" y1="132" x2="200" y2="125"/><line x1="220" y1="132" x2="240" y2="125"/><line x1="260" y1="132" x2="280" y2="125"/><line x1="300" y1="132" x2="320" y2="125"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="250" y1="97" x2="320" y2="97"/><line x1="150" y1="97" x2="90" y2="97"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="322" y="102">push</text><text x="30" y="102">friction</text></g></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Pushing a crate at constant speed",
        problem: "A $60.0\\ \\mathrm{kg}$ crate slides steadily with $\\mu_k = 0.30$. What horizontal push is needed?",
        steps: [
          { label: "Normal", text: "$N = mg = 60.0 \\times 9.80 = 588\\ \\mathrm{N}$." },
          { label: "Friction", text: "$f_k = 0.30 \\times 588 = 176.4\\ \\mathrm{N}$." },
          { label: "Push", text: "Steady speed means $a = 0$, so push equals friction: $176\\ \\mathrm{N}$." },
        ],
        result: "Push with $176\\ \\mathrm{N}$ to hold constant velocity.",
      },
      {
        title: "Braking deceleration from grip",
        problem: "Tires with $\\mu = 0.70$ lock on dry road. What deceleration does friction supply, and what is the stopping distance from $20.0\\ \\mathrm{m/s}$?",
        steps: [
          { label: "Deceleration", text: "$a = f/m = \\mu g = 0.70 \\times 9.80 = 6.86\\ \\mathrm{m/s^2}$ (mass cancels)." },
          { label: "Distance", text: "$s = v_0^2/(2a) = 400/(13.72) \\approx 29.2\\ \\mathrm{m}$." },
          { label: "Note", text: "Wet $\\mu = 0.40$ would stretch this to $51.0\\ \\mathrm{m}$ — same formula, worse grip." },
        ],
        result: "$6.86\\ \\mathrm{m/s^2}$ braking; $29.2\\ \\mathrm{m}$ to stop.",
      },
    ],
    keyTakeaways: [
      "Friction opposes slip with $f = \\mu N$; static grip beats kinetic drag.",
      "Level sliding gives $f_k = \\mu_k mg$ for the force budget.",
      "Braking deceleration is $\\mu g$ — mass cancels out.",
    ],
    quiz: [
      {
        q: "$60.0\\ \\mathrm{kg}$ crate, $\\mu_k = 0.30$, steady slide needs push",
        options: ["$18.0\\ \\mathrm{N}$", "$176\\ \\mathrm{N}$", "$588\\ \\mathrm{N}$", "$1960\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$0.30 \\times 60.0 \\times 9.80 = 176\\ \\mathrm{N}$.",
      },
      {
        q: "Locked tires at $\\mu = 0.70$ brake at",
        options: ["$9.80\\ \\mathrm{m/s^2}$", "$6.86\\ \\mathrm{m/s^2}$", "$0.70\\ \\mathrm{m/s^2}$", "$14.0\\ \\mathrm{m/s^2}$"],
        answer: 1,
        explanation: "$a = \\mu g = 0.70 \\times 9.80$.",
      },
      {
        q: "Static versus kinetic friction:",
        options: ["Kinetic is always larger", "Static grip normally exceeds kinetic drag", "They are unrelated to surfaces", "Friction grows with contact area"],
        answer: 1,
        explanation: "$\\mu_s > \\mu_k$ for a given pair; $f$ scales with $N$, not area.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch5-s5',
    readingTime: 5,
    intro: "Real pushes come in opposed pairs — thrust against drag, hoist pull against weight — and only their signed total accelerates. This section practices one-dimensional force totals until the sign habit is automatic.",
    objectives: [
      "Sum collinear forces with correct signs",
      "Solve two-force acceleration problems",
      "Handle vertical hoist and elevator totals",
    ],
    concepts: [
      {
        term: "One-dimensional sign rule",
        kind: "method",
        statement: "Pick **one direction positive**, assign signs, then total: **$F_{net} = \\sum (\\pm F_i)$** before any $F = ma$ step.",
        detail: "East-positive: $+80\\ \\mathrm{N}$ thrust with $-30\\ \\mathrm{N}$ drag gives $+50\\ \\mathrm{N}$ net.",
      },
      {
        term: "Two-team resultant",
        kind: "method",
        statement: "Opposed pulls subtract: net equals **larger minus smaller toward the larger side**.",
        detail: "$400\\ \\mathrm{N}$ east versus $250\\ \\mathrm{N}$ west nets $150\\ \\mathrm{N}$ east.",
      },
      {
        term: "Vertical totals with weight",
        kind: "method",
        statement: "Upward-positive hoist problems total as **$F_{net} = T - mg$**, then $a = (T - mg)/m$.",
        detail: "Tension below weight means downward acceleration, not upward motion necessarily.",
      },
      {
        term: "Zero-total cruising",
        kind: "insight",
        statement: "**Zero total means zero acceleration** — constant velocity continues under large but balanced forces.",
        detail: "Level cruise at any speed is a force balance, not a force absence.",
      },
      {
        term: "Unit consistency in totals",
        kind: "method",
        statement: "Convert **all forces to one unit** (all newtons or all pounds) before adding — mixed totals are meaningless.",
        detail: "$500\\ \\mathrm{N}$ minus $50\\ \\mathrm{lb}$ ($222\\ \\mathrm{N}$) nets $278\\ \\mathrm{N}$, not $450$ of anything.",
      },
    ],
    examples: [
      {
        title: "Tug-of-war acceleration",
        problem: "East team pulls $420\\ \\mathrm{N}$; west team pulls $380\\ \\mathrm{N}$ on a $60.0\\ \\mathrm{kg}$ sled (friction negligible). Find acceleration.",
        steps: [
          { label: "Total", text: "East positive: $F_{net} = 420 - 380 = +40.0\\ \\mathrm{N}$." },
          { label: "Accelerate", text: "$a = 40.0/60.0 \\approx 0.667\\ \\mathrm{m/s^2}$ east." },
          { label: "Sense", text: "Small net of big forces gives gentle acceleration — expected." },
        ],
        result: "$0.667\\ \\mathrm{m/s^2}$ toward the east team.",
      },
      {
        title: "Hoist tension check",
        problem: "A $500\\ \\mathrm{kg}$ load must accelerate upward at $1.50\\ \\mathrm{m/s^2}$. What cable tension is needed?",
        steps: [
          { label: "Equation", text: "$T - mg = ma$, so $T = m(g + a)$." },
          { label: "Substitute", text: "$T = 500 \\times (9.80 + 1.50) = 500 \\times 11.30 = 5650\\ \\mathrm{N}$." },
          { label: "Compare", text: "Weight alone is $4900\\ \\mathrm{N}$; acceleration demands $750\\ \\mathrm{N}$ more." },
        ],
        result: "Tension $5.65\\ \\mathrm{kN}$.",
      },
    ],
    keyTakeaways: [
      "Assign signs first; net force is the signed sum.",
      "Hoist totals read $T - mg = ma$ upward-positive.",
      "Unify force units before totaling.",
    ],
    quiz: [
      {
        q: "$420\\ \\mathrm{N}$ east vs $380\\ \\mathrm{N}$ west on $60\\ \\mathrm{kg}$ gives",
        options: ["$13.3\\ \\mathrm{m/s^2}$ east", "$0.667\\ \\mathrm{m/s^2}$ east", "$0.667\\ \\mathrm{m/s^2}$ west", "Zero"],
        answer: 1,
        explanation: "Net $40\\ \\mathrm{N}$ east; $40/60 = 0.667\\ \\mathrm{m/s^2}$.",
      },
      {
        q: "$500\\ \\mathrm{kg}$ hoisted upward at $1.50\\ \\mathrm{m/s^2}$ needs tension",
        options: ["$4900\\ \\mathrm{N}$", "$5650\\ \\mathrm{N}$", "$4150\\ \\mathrm{N}$", "$750\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$T = 500(9.80 + 1.50) = 5650\\ \\mathrm{N}$.",
      },
      {
        q: "Constant velocity under load means the force total is",
        options: ["Large and forward", "Zero — forces balance", "Equal to mass", "Always upward"],
        answer: 1,
        explanation: "Zero acceleration requires zero net force by $F = ma$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch5-s6',
    readingTime: 5,
    intro: "Forces come in mutual pairs: push on something and it pushes back equally. This section states the third law precisely and uses it to separate action-reaction pairs from balanced forces on one body.",
    objectives: [
      "State Newton third law with the two-body condition",
      "Identify correct action-reaction pairs",
      "Explain propulsion (walking, rockets, propellers) with the third law",
    ],
    concepts: [
      {
        term: "Newton third law",
        kind: "law",
        statement: "For bodies A and B, **$\\vec{F}_{A \\mathrm{on} B} = -\\vec{F}_{B \\mathrm{on} A}$**: equal size, opposite direction, on **different bodies**.",
        detail: "The book pushes you down exactly as hard as you push it — different bodies, opposite arrows.",
      },
      {
        term: "Pairs act on different bodies",
        kind: "insight",
        statement: "Action-reaction partners **never cancel**: they act on different bodies, so only one enters each free-body diagram.",
        detail: "Weight (earth on book) pairs with book-on-earth pull — not with the table normal force.",
      },
      {
        term: "Normal force pairing",
        kind: "law",
        statement: "The table pushing up $N$ on the book pairs with the **book pushing down $N$ on the table** — separate bodies, true pair.",
        detail: "Book weight and table normal happen to balance numerically at rest but pair elsewhere.",
      },
      {
        term: "Propulsion mechanism",
        kind: "insight",
        statement: "**Propulsion pushes mass backward to be pushed forward**: feet on ground, propellers on air, rockets on exhaust.",
        detail: "A $5.0\\ \\mathrm{kg}$ exhaust puff thrown back at $200\\ \\mathrm{m/s}$ carries $1000\\ \\mathrm{kg \\cdot m/s}$ of backward momentum.",
      },
      {
        term: "Horse-and-cart resolution",
        kind: "insight",
        statement: "The cart moves because the **horse-ground interaction** (external to horse-plus-cart) has a forward surplus — internal strap forces cancel pairwise.",
        detail: "Analyze system totals: internal pairs vanish, external remainders accelerate.",
      },
    ],
    examples: [
      {
        title: "Book on table pairs",
        problem: "A $2.00\\ \\mathrm{kg}$ book rests on a table. List the forces on the book and name the pair of each.",
        steps: [
          { label: "On the book", text: "Weight $19.6\\ \\mathrm{N}$ down (partner: book pulls earth up $19.6\\ \\mathrm{N}$); normal $19.6\\ \\mathrm{N}$ up (partner: book pushes table down $19.6\\ \\mathrm{N}$)." },
          { label: "On the book total", text: "$19.6 - 19.6 = 0$: at rest as the first law requires." },
          { label: "Not a pair", text: "Weight and normal act on the same body, so despite balancing they are not third-law partners." },
        ],
        result: "Two forces on the book, each paired to a force on another body.",
      },
      {
        title: "Recoil estimate",
        problem: "A $70.0\\ \\mathrm{kg}$ skater pushes a $30.0\\ \\mathrm{kg}$ crate, giving it $2.00\\ \\mathrm{m/s}$. With what speed does she recoil (ice frictionless)?",
        steps: [
          { label: "Impulse pair", text: "Equal-opposite forces over equal time give equal-opposite momentum changes." },
          { label: "Crate momentum", text: "$p = 30.0 \\times 2.00 = 60.0\\ \\mathrm{kg \\cdot m/s}$ forward." },
          { label: "Skater", text: "She gains $60.0$ backward: $v = 60.0/70.0 \\approx 0.857\\ \\mathrm{m/s}$ backward." },
        ],
        result: "Recoil about $0.857\\ \\mathrm{m/s}$ opposite the crate.",
      },
    ],
    keyTakeaways: [
      "Third-law partners are equal, opposite, and on different bodies.",
      "Same-body balanced forces are equilibrium, not action-reaction.",
      "Propulsion is rearward mass-pushing returned as forward force.",
    ],
    quiz: [
      {
        q: "Which is a true third-law pair?",
        options: ["Book weight and table normal on the book", "Table pushing the book up and the book pushing the table down", "Two weights of different books", "Friction and weight on one crate"],
        answer: 1,
        explanation: "Partners must act on different bodies; only the table-book exchange qualifies.",
      },
      {
        q: "$70\\ \\mathrm{kg}$ skater giving $30\\ \\mathrm{kg}$ crate $2.00\\ \\mathrm{m/s}$ recoils at",
        options: ["$2.00\\ \\mathrm{m/s}$", "$0.857\\ \\mathrm{m/s}$", "$4.67\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "$60.0/70.0 = 0.857\\ \\mathrm{m/s}$ opposite.",
      },
      {
        q: "A rocket climbs because it",
        options: ["Pushes against the air", "Ejects exhaust backward and is pushed forward in return", "Becomes lighter only", "Violates the third law"],
        answer: 1,
        explanation: "Exhaust-backward pairs with rocket-forward; external force accelerates the system.",
      },
    ],
  },
]
