import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 2: Problem Solving (pp 65-81)
// ============================================================================

export const ewenCh2Content: SectionContent[] = [
  {
    sectionId: 'ewen-ch2-s1',
    readingTime: 5,
    intro: "Formulas are the working tools of applied physics: each one names a law in symbols. This section teaches you to read those symbols fluently so substitution later is mechanical and safe.",
    objectives: [
      "Read physics symbols as named quantities with units",
      "Rearrange common formulas with basic algebra",
      "Identify which formula fits a stated shop problem",
    ],
    concepts: [
      {
        term: "Formula as a law in symbols",
        kind: "definition",
        statement: "A **formula** states a verified relation compactly, e.g. **$s = vt$** reads distance equals speed times time.",
        detail: "Every letter stands for a measured quantity with units, never a bare number.",
      },
      {
        term: "Symbol vocabulary",
        kind: "notation",
        statement: "Standard symbols recur: **$s$ distance, $v$ speed/velocity, $t$ time, $m$ mass, $F$ force, $W$ work, $P$ power** — subscripts like $v_0$ mark initial values.",
        detail: "Learning this dozen symbols unlocks nearly every formula through Chapter 12.",
      },
      {
        term: "Rearranging by inverse operations",
        kind: "method",
        statement: "Isolate any variable by **undoing operations on both sides**: from $s = vt$ come $v = s/t$ and $t = s/v$.",
        detail: "Divide both sides by $t$ to free $v$; the units rearrange with the symbols.",
      },
      {
        term: "Formula triangle",
        kind: "method",
        statement: "Cover-and-read triangles encode three-variable laws: covering $s$ in $s/vt$ leaves **$v \\times t$**, covering $v$ leaves **$s/t$**.",
        detail: "Triangles speed routine rearrangement but never replace understanding the algebra.",
      },
      {
        term: "Choosing the formula",
        kind: "method",
        statement: "List **knowns and the wanted unknown**, then pick the law containing exactly those quantities.",
        detail: "Knowing $F$ and $m$ but wanting $a$ points to $F = ma$ in its $a = F/m$ form.",
      },
    ],
    figures: [
      {
        caption: "Cover-and-read triangle for $s = vt$: cover the wanted variable to read its form",
        svg: '<svg role="img" aria-label="Cover-and-read triangle for s = vt: cover the wanted variable to read its form" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="200" y1="25" x2="110" y2="130"/><line x1="200" y1="25" x2="290" y2="130"/><line x1="110" y1="130" x2="290" y2="130"/><line x1="145" y1="85" x2="255" y2="85"/></g><g fill="currentColor" font-size="14" font-family="sans-serif"><text x="192" y="65">s</text><text x="150" y="120">v</text><text x="235" y="120">t</text></g></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Rearranging $F = ma$",
        problem: "A $1500\\ \\mathrm{kg}$ car needs acceleration $2.5\\ \\mathrm{m/s^2}$. Which form gives the force, and what is it?",
        steps: [
          { label: "Knowns and unknown", text: "Known $m$, $a$; want $F$ — the as-written form $F = ma$ already fits." },
          { label: "Substitute", text: "$F = (1500\\ \\mathrm{kg})(2.5\\ \\mathrm{m/s^2}) = 3750\\ \\mathrm{N}$." },
          { label: "Alternate form", text: "Had $F$ and $m$ been known, $a = F/m$ would give acceleration." },
        ],
        result: "$F = 3750\\ \\mathrm{N} \\approx 3.75\\ \\mathrm{kN}$ of driving force.",
      },
      {
        title: "Solving power for time",
        problem: "A $750\\ \\mathrm{W}$ motor does $W = 15{,}000\\ \\mathrm{J}$ of work. How long does it take, starting from $P = W/t$?",
        steps: [
          { label: "Rearrange", text: "Multiply by $t$ and divide by $P$: $t = W/P$." },
          { label: "Substitute", text: "$t = 15{,}000/750 = 20\\ \\mathrm{s}$; joules per watt give seconds." },
          { label: "Check", text: "$750 \\times 20 = 15{,}000$ confirms the inversion." },
        ],
        result: "$t = 20\\ \\mathrm{s}$ of running time.",
      },
    ],
    keyTakeaways: [
      "Read each symbol as quantity-plus-unit, not a bare letter.",
      "Rearrange with inverse operations on both sides; triangles shortcut routine cases.",
      "Match knowns and unknown to the law containing them.",
    ],
    quiz: [
      {
        q: "From $s = vt$, the speed form is",
        options: ["$v = st$", "$v = s/t$", "$v = t/s$", "$v = s + t$"],
        answer: 1,
        explanation: "Divide both sides by $t$: $v = s/t$ with units $(\\mathrm{m})/(\\mathrm{s})$.",
      },
      {
        q: "Known $F$ and $m$, wanting $a$, you use",
        options: ["$a = Fm$", "$a = F/m$", "$a = m/F$", "$a = F + m$"],
        answer: 1,
        explanation: "Solving $F = ma$ for $a$ gives $a = F/m$.",
      },
      {
        q: "A $750\\ \\mathrm{W}$ motor doing $15{,}000\\ \\mathrm{J}$ runs for",
        options: ["$20\\ \\mathrm{s}$", "$200\\ \\mathrm{s}$", "$2.0\\ \\mathrm{s}$", "$0.05\\ \\mathrm{s}$"],
        answer: 0,
        explanation: "$t = W/P = 15{,}000/750 = 20\\ \\mathrm{s}$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch2-s2',
    readingTime: 6,
    intro: "Substitution is where right setups become right answers — or where dropped units hide errors. This section drills the Ewen habit: replace symbols with data-plus-units, cancel, compute, and round honestly.",
    objectives: [
      "Substitute data with units into any formula",
      "Convert inputs to consistent units before computing",
      "Round the result to justified digits with the correct unit",
    ],
    concepts: [
      {
        term: "Substitute quantity, not number",
        kind: "method",
        statement: "Replace each symbol by its **value with units**, e.g. $v = 20\\ \\mathrm{m/s}$ into $s = vt$, and let the units compute alongside.",
        detail: "Bare-number substitution forfeits the free error check units provide.",
      },
      {
        term: "Consistent units first",
        kind: "method",
        statement: "All inputs must share a **compatible system before substituting**: convert minutes to seconds, kilometers to meters first.",
        detail: "Mixing $\\mathrm{km/h}$ with seconds is the most common substitution failure.",
      },
      {
        term: "Unit cancellation check",
        kind: "method",
        statement: "Cancel units algebraically; the **surviving unit must match the wanted quantity** or the setup is wrong.",
        detail: "$(\\mathrm{m/s})(\\mathrm{s}) \\to \\mathrm{m}$ confirms a distance; anything else rejects it.",
      },
      {
        term: "Calculator discipline",
        kind: "method",
        statement: "Enter grouped denominators with **parentheses**, keep a guard digit, and re-estimate by mental arithmetic.",
        detail: "$s = 1/2 \\times 9.8 \\times 4^2$ needs the square before the halving — order matters.",
      },
      {
        term: "Result with honest digits",
        kind: "method",
        statement: "Report the computed value **rounded to the weakest input digits with its unit**: $18.0\\ \\mathrm{m}$, not $18$ or $18.0000$.",
        detail: "Chapters 1 digit rules apply to every substituted answer.",
      },
    ],
    examples: [
      {
        title: "Conveyor distance with minutes",
        problem: "A belt runs at $v = 2.40\\ \\mathrm{m/s}$ for $3.50\\ \\mathrm{min}$. Find $s = vt$.",
        steps: [
          { label: "Unify units", text: "$3.50\\ \\mathrm{min} = 3.50 \\times 60 = 210\\ \\mathrm{s}$." },
          { label: "Substitute", text: "$s = (2.40\\ \\mathrm{m/s})(210\\ \\mathrm{s}) = 504\\ \\mathrm{m}$." },
          { label: "Round", text: "Three-digit input justifies $504\\ \\mathrm{m}$." },
        ],
        result: "The belt advances $504\\ \\mathrm{m}$.",
      },
      {
        title: "Braking force substitution",
        problem: "A $1200\\ \\mathrm{kg}$ car decelerates at $6.00\\ \\mathrm{m/s^2}$. Find the braking force $F = ma$.",
        steps: [
          { label: "Substitute", text: "$F = (1200\\ \\mathrm{kg})(6.00\\ \\mathrm{m/s^2}) = 7200\\ \\mathrm{N}$." },
          { label: "Units", text: "$\\mathrm{kg \\cdot m/s^2} = \\mathrm{N}$ confirms a force." },
          { label: "Sense", text: "$7.20\\ \\mathrm{kN}$ total, about $1.80\\ \\mathrm{kN}$ per wheel — plausible." },
        ],
        result: "$7.20\\ \\mathrm{kN}$ of braking force.",
      },
    ],
    keyTakeaways: [
      "Convert to consistent units before substituting a single digit.",
      "Substitute value-with-unit and cancel to verify the setup.",
      "Round the final answer to the weakest input digits.",
    ],
    quiz: [
      {
        q: "Belt at $2.40\\ \\mathrm{m/s}$ for $3.50\\ \\mathrm{min}$ advances",
        options: ["$8.40\\ \\mathrm{m}$", "$504\\ \\mathrm{m}$", "$140\\ \\mathrm{m}$", "$0.686\\ \\mathrm{m}$"],
        answer: 1,
        explanation: "$3.50\\ \\mathrm{min} = 210\\ \\mathrm{s}$; $2.40 \\times 210 = 504\\ \\mathrm{m}$.",
      },
      {
        q: "First step when inputs mix minutes and seconds is to",
        options: ["Substitute anyway", "Convert to one consistent unit system", "Drop the units", "Average the numbers"],
        answer: 1,
        explanation: "Mixed units guarantee a wrong magnitude unless unified first.",
      },
      {
        q: "A $1200\\ \\mathrm{kg}$ car at $6.00\\ \\mathrm{m/s^2}$ needs braking force",
        options: ["$200\\ \\mathrm{N}$", "$7200\\ \\mathrm{N}$", "$1206\\ \\mathrm{N}$", "$0.005\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$F = ma = 1200 \\times 6.00 = 7200\\ \\mathrm{N}$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch2-s3',
    readingTime: 6,
    intro: "Top technicians solve problems the same way every time, so stress cannot scramble their thinking. This section formalizes the five-step Ewen routine and proves it on motion, force, and power problems.",
    objectives: [
      "Execute the five-step problem-solving routine reliably",
      "Show full written work that earns partial credit",
      "Verify answers by units, sign, and magnitude",
    ],
    concepts: [
      {
        term: "The five-step routine",
        kind: "method",
        statement: "**1. Given/wanted with units. 2. Law. 3. Symbolic solution. 4. Substitution. 5. Unit and sense check** — in that order, every time.",
        detail: "Skipping straight to numbers is how sign errors and unit mix-ups survive to the answer line.",
      },
      {
        term: "Sketch and symbols",
        kind: "method",
        statement: "Draw a **labeled sketch** and define symbols ($v_0 = 0$, $a = +2.0\\ \\mathrm{m/s^2}$) before writing equations.",
        detail: "The sketch fixes signs and directions that words leave ambiguous.",
      },
      {
        term: "Symbolic-before-numeric solution",
        kind: "method",
        statement: "Solve the law **in symbols first** ($t = 2s/v$), then substitute once — one arithmetic pass, fewer slips.",
        detail: "Symbolic form also reveals whether the answer scales sensibly with inputs.",
      },
      {
        term: "Estimate first",
        kind: "method",
        statement: "Make a **rough mental estimate** before computing so the calculator result has something to agree with.",
        detail: "$1500 \\times 2.5$ is about $4000\\ \\mathrm{N}$; a display of $375$ would then smell wrong.",
      },
      {
        term: "Verification pass",
        kind: "insight",
        statement: "Check **units, sign, and order of magnitude**; re-derive by an alternate route when anything feels off.",
        detail: "A negative time, a force in joules, or a highway speed in $\\mathrm{mm/s}$ fails loudly.",
      },
    ],
    examples: [
      {
        title: "Full-routine stopping distance",
        problem: "A car at $v_0 = 25.0\\ \\mathrm{m/s}$ brakes at $a = -5.00\\ \\mathrm{m/s^2}$ to rest. Find stopping distance via $v^2 = v_0^2 + 2as$.",
        steps: [
          { label: "Given, wanted, law", text: "$v_0 = 25.0\\ \\mathrm{m/s}$, $v = 0$, $a = -5.00\\ \\mathrm{m/s^2}$; want $s$; law $v^2 = v_0^2 + 2as$." },
          { label: "Symbolic", text: "$s = (v^2 - v_0^2)/(2a)$." },
          { label: "Substitute", text: "$s = (0 - 625)/(2 \\times -5.00) = (-625)/(-10.0) = 62.5\\ \\mathrm{m}$; units $(\\mathrm{m^2/s^2})/(\\mathrm{m/s^2})$ give meters." },
          { label: "Verify", text: "Positive, tens of meters at highway speed — estimate $(25^2)/(10) \\approx 62$ agrees." },
        ],
        result: "Stopping distance $62.5\\ \\mathrm{m}$.",
      },
      {
        title: "Hoist power check",
        problem: "A hoist lifts $m = 400\\ \\mathrm{kg}$ by $h = 6.00\\ \\mathrm{m}$ in $t = 15.0\\ \\mathrm{s}$. Is a $2.00\\ \\mathrm{kW}$ motor enough?",
        steps: [
          { label: "Work", text: "$W = mgh = 400 \\times 9.80 \\times 6.00 = 23{,}520\\ \\mathrm{J}$." },
          { label: "Power", text: "$P = W/t = 23{,}520/15.0 = 1568\\ \\mathrm{W} \\approx 1.57\\ \\mathrm{kW}$ ideal." },
          { label: "Decide", text: "$1.57 < 2.00$ with margin for efficiency losses — adequate, pending friction allowance." },
        ],
        result: "Ideal $1.57\\ \\mathrm{kW}$; the $2.00\\ \\mathrm{kW}$ motor suffices with modest margin.",
      },
    ],
    keyTakeaways: [
      "Given, law, symbolic form, substitution, verification — never skip or reorder.",
      "Sketch first to fix signs; estimate to trap calculator slips.",
      "Verify units, sign, and magnitude on every answer.",
    ],
    quiz: [
      {
        q: "Stopping from $25.0\\ \\mathrm{m/s}$ at $5.00\\ \\mathrm{m/s^2}$ takes about",
        options: ["$6.25\\ \\mathrm{m}$", "$62.5\\ \\mathrm{m}$", "$625\\ \\mathrm{m}$", "$2.50\\ \\mathrm{m}$"],
        answer: 1,
        explanation: "$s = 625/10.0 = 62.5\\ \\mathrm{m}$.",
      },
      {
        q: "Why solve symbolically before substituting?",
        options: ["It uses more paper", "One arithmetic pass with visible scaling and fewer slips", "It avoids units", "It removes the need to check"],
        answer: 1,
        explanation: "Symbolic form shows structure and needs only one numeric evaluation.",
      },
      {
        q: "Hoisting $400\\ \\mathrm{kg}$ by $6.00\\ \\mathrm{m}$ in $15.0\\ \\mathrm{s}$ needs ideal power",
        options: ["$160\\ \\mathrm{W}$", "$1.57\\ \\mathrm{kW}$", "$15.7\\ \\mathrm{kW}$", "$360\\ \\mathrm{W}$"],
        answer: 1,
        explanation: "$mgh/t = 23{,}520/15.0 = 1568\\ \\mathrm{W}$.",
      },
    ],
  },
]
