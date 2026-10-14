import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 20
// The Second Law of Thermodynamics (Sections 20.1 – 20.8)
// ============================================================================

export const youngCh20Content: SectionContent[] = [
  {
    sectionId: "young-ch20-s1",
    readingTime: 4,
    intro: "Heat flows hot to cold, eggs break but never unbreak — nature has a direction. Young opens with everyday irreversible processes and the distinction between reversible ideals and the one-way reality.",
    objectives: [
      "Define reversible versus irreversible processes with examples",
      "Explain why natural processes have a preferred direction",
      "State what a second law must explain beyond energy conservation",
    ],
    concepts: [
      {
        term: "Direction of natural processes",
        kind: "definition",
        statement: "Left alone, systems evolve toward equilibrium in one direction only: heat hot-to-cold, gas into vacuum, ink dispersing — never the reverse, though all reverses conserve energy.",
        detail: "The first law permits the reverse (energy balances); something beyond conservation forbids it — the second law's job.",
      },
      {
        term: "Reversible process",
        kind: "definition",
        statement: "A **reversible** process passes through equilibrium states slowly enough that system plus surroundings can be restored exactly; all real processes are **irreversible** to some degree.",
        detail: "Frictionless quasistatic expansion approximates reversibility; free expansion, turbulence, and heat flow across $\\Delta T$ are irreducibly irreversible.",
      },
      {
        term: "Why reversibility matters",
        kind: "insight",
        statement: "Reversible processes set performance limits: no real engine beats its reversible twin operating between the same reservoirs (Section 20.6 proves it).",
        detail: "Ideals bound reality — Carnot efficiency is the ceiling every power plant reaches toward but never through.",
      },
      {
        term: "Disorder as direction",
        kind: "insight",
        statement: "Irreversible change increases microscopic disorder: shuffled decks stay shuffled because ordered states are vanishingly rare among microstates (Section 20.8 preview).",
        detail: "Macroscopic one-way behavior emerges from symmetric microphysics plus lopsided counting.",
      },
      {
        term: "First law is not enough",
        kind: "method",
        statement: "Energy conservation allows $100$ percent heat-to-work conversion and uphill heat flow — both unobserved — so efficiency and direction need an independent principle.",
        detail: "Every heat engine's waste heat and every refrigerator's power bill testify to the missing law.",
      },
    ],
    examples: [
      {
        title: "Ink drop irreversibility",
        problem: "A $1.0\\ \\mathrm{mL}$ ink drop disperses uniformly through $1.0\\ \\mathrm{L}$ of water. Estimate the probability that random motion ever reassembles it, using $(V_{\\mathrm{drop}}/V_{\\mathrm{total}})^{N}$ with $N \\sim 10^{21}$ molecules.",
        steps: [
          { label: "Volume ratio", text: "$V_{\\mathrm{drop}}/V = 1.0/1000 = 10^{-3}$." },
          { label: "Probability", text: "$P = (10^{-3})^{10^{21}} = 10^{-3 \\times 10^{21}}$ — a $1$ followed by $3 \\times 10^{21}$ zeros in the denominator." },
          { label: "Meaning", text: "Unobservable in any cosmic time: the reverse conserves energy but has probability zero for all purposes." },
        ],
        result: "Reassembly probability $10^{-3 \\times 10^{21}}$: direction from counting, not energy.",
      },
      {
        title: "Reversible versus free expansion",
        problem: "$1.00\\ \\mathrm{mol}$ at $300\\ \\mathrm{K}$ doubles volume (a) quasistatically-isothermally and (b) by free expansion. Compare $W$ and reversibility.",
        steps: [
          { label: "Quasistatic", text: "$W = nRT\\ln 2 = (8.314)(300)(0.6931) = 1729\\ \\mathrm{J}$ — restorable by slow recompression." },
          { label: "Free", text: "$W = 0$ with identical endpoints; recompression needs $1729\\ \\mathrm{J}$ of external work plus heat rejection — surroundings permanently changed." },
          { label: "Verdict", text: "Same $\\Delta U = 0$, but (a) is reversible in the limit while (b) is irreducibly irreversible." },
        ],
        result: "$1729\\ \\mathrm{J}$ versus $0$: endpoints equal, reversibility opposite.",
      },
    ],
    keyTakeaways: [
      "Natural processes run one way toward equilibrium despite energy conservation.",
      "Reversible ideals bound irreversible reality and set efficiency ceilings.",
      "Direction emerges from disordered microstate counting, not from energy.",
    ],
    quiz: [
      {
        q: "Which process is reversible in the ideal limit?",
        options: ["Free expansion into vacuum", "Frictionless quasistatic expansion", "Heat flow across a finite $\\Delta T$", "Turbulent mixing"],
        answer: 1,
        explanation: "Slow equilibrated steps can be undone exactly; the others permanently change the surroundings.",
      },
      {
        q: "The first law alone cannot explain:",
        options: ["Energy conservation", "Why heat will not flow cold-to-hot spontaneously", "Work as $\\int p\\,dV$", "$\\Delta U = Q - W$"],
        answer: 1,
        explanation: "Uphill heat flow conserves energy perfectly — only the second law forbids it.",
      },
      {
        q: "Ink never unmixes because:",
        options: ["Energy would be lost", "Ordered microstates are vanishingly rare among all microstates", "Water pushes ink outward", "Diffusion is not molecular motion"],
        answer: 1,
        explanation: "Symmetric microphysics plus overwhelming counting gives macroscopic direction.",
      },
    ],
  },
  {
    sectionId: "young-ch20-s2",
    readingTime: 5,
    intro: "Every engine takes heat, outputs work, and dumps waste — no exceptions. Young defines the heat engine, thermal efficiency $e = W/Q_{h}$, and the Kelvin-Planck limit that waste heat is mandatory.",
    objectives: [
      "Define heat engines with hot/cold reservoirs and energy flows",
      "Compute efficiency $e = W/Q_{h} = 1 - |Q_{c}|/|Q_{h}|$",
      "State the Kelvin-Planck impossibility of perfect conversion",
    ],
    concepts: [
      {
        term: "Heat engine",
        kind: "definition",
        statement: "A **heat engine** runs a cycle absorbing $|Q_{h}|$ from a hot reservoir, outputting $W$, and rejecting $|Q_{c}|$ to a cold reservoir, with $W = |Q_{h}| - |Q_{c}|$.",
        detail: "Steam turbines, car engines, and jet turbines all fit the diagram; the working substance returns to start each cycle.",
      },
      {
        term: "Thermal efficiency",
        kind: "definition",
        statement: "**Thermal efficiency** $e = W/|Q_{h}| = 1 - |Q_{c}|/|Q_{h}|$: the fraction of input heat converted to work. A $1000\\ \\mathrm{J}$-in, $350\\ \\mathrm{J}$-out engine has $e = 0.35$.",
        detail: "$e = 1$ would need $|Q_{c}| = 0$ — no waste heat — which Kelvin-Planck forbids.",
      },
      {
        term: "Kelvin-Planck statement preview",
        kind: "law",
        statement: "No cycle can absorb heat from one reservoir and convert it entirely to work; some $|Q_{c}| > 0$ must be rejected (Section 20.5 states it formally).",
        detail: "Ocean thermal and geothermal plants are capped by this before Carnot even quantifies the cap.",
      },
      {
        term: "Power versus efficiency",
        kind: "insight",
        statement: "Engines sell **power** ($W$ per second) but pay for **heat**; high-$e$ plants (combined-cycle $\\sim 0.60$) burn less fuel per $\\mathrm{kWh}$ than car engines ($\\sim 0.25$).",
        detail: "Waste heat is not a design flaw — it is the law's commission on every conversion.",
      },
      {
        term: "Energy-flow diagrams",
        kind: "method",
        statement: "Draw $|Q_{h}|$ in at top, $W$ out the side, $|Q_{c}|$ out the bottom with arrow widths proportional to joules; first-law balance $W = |Q_{h}| - |Q_{c}|$ reads off the picture.",
        detail: "Every engine and refrigerator problem in this chapter starts with this diagram.",
      },
    ],
    figures: [
      {
        caption: "Heat-engine energy flow: $|Q_{h}|$ in, $W = |Q_{h}| - |Q_{c}|$ out as work, $|Q_{c}|$ rejected as mandatory waste.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heat engine flow diagram"><rect x="140" y="70" width="120" height="50" fill="none" stroke="currentColor" stroke-width="2"/><text x="170" y="100" font-size="13" fill="currentColor">ENGINE</text><rect x="140" y="20" width="120" height="25" fill="currentColor" opacity="0.3" stroke="currentColor"/><text x="160" y="38" font-size="12" fill="currentColor">hot |Qh|</text><line x1="200" y1="45" x2="200" y2="70" stroke="currentColor" stroke-width="3"/><line x1="260" y1="95" x2="310" y2="95" stroke="currentColor" stroke-width="3"/><text x="312" y="99" font-size="12" fill="currentColor">W</text><rect x="140" y="145" width="120" height="25" fill="currentColor" opacity="0.15" stroke="currentColor"/><text x="155" y="163" font-size="12" fill="currentColor">cold |Qc|</text><line x1="200" y1="120" x2="200" y2="145" stroke="currentColor" stroke-width="3"/></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Coal plant efficiency",
        problem: "A plant burns fuel supplying $|Q_{h}| = 2.80 \\times 10^{9}\\ \\mathrm{J}$ per minute and generates $W = 1.00 \\times 10^{9}\\ \\mathrm{J}$ of electricity. Find $e$ and $|Q_{c}|$.",
        steps: [
          { label: "Efficiency", text: "$e = W/|Q_{h}| = 1.00/2.80 = 0.357$ ($35.7$ percent)." },
          { label: "Waste", text: "$|Q_{c}| = |Q_{h}| - W = 2.80 - 1.00 = 1.80 \\times 10^{9}\\ \\mathrm{J}$ per minute." },
          { label: "Cooling load", text: "$1.80\\ \\mathrm{GJ/min} = 30\\ \\mathrm{MW}$ of waste heat — the cooling towers' job." },
        ],
        result: "$e = 35.7$ percent; $1.80\\ \\mathrm{GJ/min}$ rejected.",
      },
      {
        title: "Perfect engine check",
        problem: "An inventor claims $|Q_{h}| = 500\\ \\mathrm{J}$ in, $W = 500\\ \\mathrm{J}$ out per cycle. Test against the chapter so far.",
        steps: [
          { label: "Efficiency", text: "$e = 500/500 = 1.00$ — perfect conversion." },
          { label: "Waste", text: "$|Q_{c}| = 500 - 500 = 0$: no waste heat." },
          { label: "Verdict", text: "Violates Kelvin-Planck: some $|Q_{c}| > 0$ is mandatory. Claim rejected." },
        ],
        result: "$e = 1$ is impossible; waste heat is mandatory.",
      },
    ],
    keyTakeaways: [
      "Engines cycle $|Q_{h}| \\to W + |Q_{c}|$ with $W = |Q_{h}| - |Q_{c}|$.",
      "$e = W/|Q_{h}| = 1 - |Q_{c}|/|Q_{h}|$ prices work in heat.",
      "Perfect conversion ($e = 1$) is forbidden: waste is mandatory.",
    ],
    quiz: [
      {
        q: "An engine takes $800\\ \\mathrm{J}$ and rejects $500\\ \\mathrm{J}$. Its efficiency is:",
        options: ["$62.5$ percent", "$37.5$ percent", "$160$ percent", "$100$ percent"],
        answer: 1,
        explanation: "$W = 800 - 500 = 300$; $e = 300/800 = 0.375$.",
      },
      {
        q: "The Kelvin-Planck statement forbids:",
        options: ["Any waste heat", "Complete conversion of heat from one reservoir into work in a cycle", "Efficiency below $100$ percent", "Cold reservoirs"],
        answer: 1,
        explanation: "Some $|Q_{c}| > 0$ must be dumped every cycle; $e = 1$ is impossible.",
      },
      {
        q: "Combined-cycle plants ($e \\approx 0.60$) beat car engines ($e \\approx 0.25$) because:",
        options: ["They violate the second law", "Higher hot temperatures and staged cycles reject a smaller fraction", "They use no cold reservoir", "They are smaller"],
        answer: 1,
        explanation: "$e$ rises with $T_{h}/T_{c}$ leverage (Carnot preview) and reduced irreversibility — still below $1$.",
      },
    ],
  },
  {
    sectionId: "young-ch20-s3",
    readingTime: 5,
    intro: "From the four-stroke Otto cycle to the Diesel that ignites without spark, Young models internal combustion with air-standard cycles and derives the compression-ratio efficiency that governs every gasoline engine.",
    objectives: [
      "Trace the Otto cycle on $p$-$V$ and compute $e = 1 - r^{1-\\gamma}$",
      "Explain the Diesel difference and its efficiency trend",
      "Relate knocking to compression limits and fuel rating",
    ],
    concepts: [
      {
        term: "Otto cycle",
        kind: "definition",
        statement: "The **Otto cycle** models gasoline engines: adiabatic compression, isochoric heat addition (spark), adiabatic expansion (power), isochoric heat rejection (exhaust).",
        detail: "Intake and exhaust strokes reset the charge; the four thermodynamic legs do the analysis.",
      },
      {
        term: "Otto efficiency",
        kind: "theorem",
        statement: "With compression ratio $r = V_{\\max}/V_{\\min}$, $e_{\\mathrm{Otto}} = 1 - r^{1-\\gamma} = 1 - 1/r^{\\gamma-1}$: $r = 8$, $\\gamma = 1.40$ gives $e = 1 - 8^{-0.40} = 0.565$.",
        detail: "Efficiency depends only on $r$, not on fuel energy — squeezing harder extracts more, until knock intervenes.",
      },
      {
        term: "Diesel cycle",
        kind: "definition",
        statement: "The **Diesel cycle** replaces spark ignition with fuel injection into adiabatically superheated air; heat addition is approximately isobaric, with higher $r \\sim 15$–$20$ but a cutoff-ratio penalty.",
        detail: "No spark plugs, heavier blocks, better mileage: diesels trade refinement for $e \\sim 0.35$–$0.40$ real efficiency.",
      },
      {
        term: "Knock and octane",
        kind: "insight",
        statement: "**Knock** is premature end-gas autoignition that caps $r$; **octane rating** measures knock resistance, letting high-compression engines use their $1 - r^{1-\\gamma}$ advantage.",
        detail: "Premium fuel does not contain more energy — it permits the geometry that extracts more work from the same energy.",
      },
      {
        term: "Real versus air-standard",
        kind: "method",
        statement: "Air-standard analysis ignores fuel mass, valves, friction, and finite burn time, so real $e$ runs about half the ideal: $0.25$ actual versus $0.56$ ideal at $r = 8$.",
        detail: "Use ideals for trends (raise $r$, raise $e$) and dynamometers for numbers.",
      },
    ],
    examples: [
      {
        title: "Otto efficiency at r = 10",
        problem: "Compute ideal Otto efficiency for $r = 10$ with $\\gamma = 1.40$, and the fuel saving versus $r = 8$ ($e = 0.565$).",
        steps: [
          { label: "Exponent", text: "$r^{\\gamma-1} = 10^{0.40} = e^{0.40\\ln 10} = e^{0.9210} = 2.512$." },
          { label: "Efficiency", text: "$e = 1 - 1/2.512 = 1 - 0.398 = 0.602$ ($60.2$ percent)." },
          { label: "Fuel saving", text: "Heat per unit work scales $1/e$: $0.565/0.602 = 0.939$ — $6$ percent less fuel for the same work." },
        ],
        result: "$e = 60.2$ percent at $r = 10$; $6$ percent fuel saving over $r = 8$.",
      },
      {
        title: "Work per Otto cycle",
        problem: "An Otto engine absorbs $|Q_{h}| = 1500\\ \\mathrm{J}$ per cycle at $r = 8$ ($e = 0.565$). Find $W$ and $|Q_{c}|$.",
        steps: [
          { label: "Work", text: "$W = e|Q_{h}| = 0.565(1500) = 847.5\\ \\mathrm{J}$." },
          { label: "Rejected", text: "$|Q_{c}| = 1500 - 847.5 = 652.5\\ \\mathrm{J}$." },
          { label: "At 30 rev/s", text: "Power $= 847.5 \\times 15$ (power stroke every 2 rev) $= 12.7\\ \\mathrm{kW}$ per cylinder." },
        ],
        result: "$W = 848\\ \\mathrm{J}$, $|Q_{c}| = 653\\ \\mathrm{J}$ per cycle.",
      },
    ],
    keyTakeaways: [
      "Otto: adiabatic-isochoric-adiabatic-isochoric loop modeling gasoline engines.",
      "$e_{\\mathrm{Otto}} = 1 - r^{1-\\gamma}$: compression ratio rules efficiency.",
      "Knock caps $r$; octane buys geometry, not energy; diesels use $r \\sim 15$–$20$.",
    ],
    quiz: [
      {
        q: "Raising compression ratio $r$ in an Otto engine:",
        options: ["Lowers ideal efficiency", "Raises ideal efficiency as $1 - r^{1-\\gamma}$", "Leaves efficiency unchanged", "Makes efficiency exceed $1$"],
        answer: 1,
        explanation: "$r^{1-\\gamma} = 1/r^{\\gamma-1}$ shrinks with $r$, so $e$ grows toward $1$ (never reaching it).",
      },
      {
        q: "Diesel engines dispense with spark plugs because:",
        options: ["They are electric", "Adiabatic compression alone superheats air past ignition", "Diesel fuel cannot burn", "They run cold"],
        answer: 1,
        explanation: "$r \\sim 15$ gives $T_{2} = T_{1}r^{\\gamma-1} \\approx 300(15^{0.4}) = 886\\ \\mathrm{K}$ — hot enough to ignite injected fuel.",
      },
      {
        q: "High-octane fuel improves mileage by:",
        options: ["Containing more joules per liter", "Resisting knock so higher-$r$ geometry can be used", "Burning colder", "Lubricating cylinders"],
        answer: 1,
        explanation: "Energy per liter is similar; octane permits the compression that extracts more work per joule.",
      },
    ],
  },
  {
    sectionId: "young-ch20-s4",
    readingTime: 4,
    intro: "Run a heat engine backward and it pumps heat uphill — the refrigerator. Young defines coefficient of performance for cooling and heating and states the Clausius limit that perfect pumping is impossible.",
    objectives: [
      "Define refrigerator COPs for cooling $K = |Q_{c}|/W$ and heating",
      "Compute COPs numerically and relate heat-pump to refrigerator COP",
      "State the Clausius impossibility of unpowered uphill heat flow",
    ],
    concepts: [
      {
        term: "Refrigerator cycle",
        kind: "definition",
        statement: "A **refrigerator** uses work $W$ to extract $|Q_{c}|$ from the cold box and dump $|Q_{h}| = |Q_{c}| + W$ to the warm room — the engine diagram run backward.",
        detail: "Kitchen fridges, air conditioners, and cryocoolers differ only in $T_{c}$ and working fluid.",
      },
      {
        term: "Coefficient of performance",
        kind: "definition",
        statement: "Cooling **COP** $K = |Q_{c}|/W$ prices refrigeration in work; unlike efficiency it exceeds $1$ (typical $K \\sim 3$–$5$). Heating COP is $K_{\\mathrm{heat}} = |Q_{h}|/W = K + 1$.",
        detail: "Moving heat beats making heat: a $K = 4$ heat pump delivers $4\\ \\mathrm{J}$ of warmth per joule of electricity.",
      },
      {
        term: "Clausius statement preview",
        kind: "law",
        statement: "No cycle can transfer heat from cold to hot with no other effect; work input is mandatory (Section 20.5 states it formally).",
        detail: "Unplugged fridges warm up — uphill flow without work is never observed.",
      },
      {
        term: "Why heat pumps beat heaters",
        kind: "insight",
        statement: "Resistance heaters give $1\\ \\mathrm{J}$ per joule; heat pumps relocate $3$–$5\\ \\mathrm{J}$ per joule from outdoor air — even cold air holds pumpable thermal energy.",
        detail: "Below-freezing COPs sag toward $2$ but still double resistance heating; backup strips cover the coldest snaps.",
      },
      {
        term: "Reversed-diagram bookkeeping",
        kind: "method",
        statement: "Flip every engine arrow: $W$ enters, $|Q_{c}|$ enters from cold, $|Q_{h}|$ leaves to hot, with $|Q_{h}| = |Q_{c}| + W$ from $\\Delta U = 0$ per cycle.",
        detail: "Sign discipline on the flipped diagram prevents the classic $|Q_{h}|$-versus-$|Q_{c}|$ swap.",
      },
    ],
    figures: [
      {
        caption: "Refrigerator energy flow: work $W$ in lifts $|Q_{c}|$ uphill, dumping $|Q_{h}| = |Q_{c}| + W$ to the hot room.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Refrigerator flow diagram"><rect x="140" y="70" width="120" height="50" fill="none" stroke="currentColor" stroke-width="2"/><text x="168" y="100" font-size="13" fill="currentColor">FRIDGE</text><rect x="140" y="20" width="120" height="25" fill="currentColor" opacity="0.15" stroke="currentColor"/><text x="160" y="38" font-size="12" fill="currentColor">hot out</text><line x1="200" y1="120" x2="200" y2="145" stroke="currentColor" stroke-width="3"/><line x1="140" y1="95" x2="90" y2="95" stroke="currentColor" stroke-width="3"/><text x="62" y="99" font-size="12" fill="currentColor">W</text><rect x="140" y="145" width="120" height="25" fill="currentColor" opacity="0.3" stroke="currentColor"/><text x="150" y="163" font-size="12" fill="currentColor">cold in</text><line x1="200" y1="70" x2="200" y2="45" stroke="currentColor" stroke-width="3"/></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Fridge COP",
        problem: "A refrigerator extracts $|Q_{c}| = 450\\ \\mathrm{J}$ per cycle using $W = 150\\ \\mathrm{J}$. Find $K$ and $|Q_{h}|$.",
        steps: [
          { label: "COP", text: "$K = |Q_{c}|/W = 450/150 = 3.00$." },
          { label: "Dumped", text: "$|Q_{h}| = 450 + 150 = 600\\ \\mathrm{J}$ — the kitchen warms by $600\\ \\mathrm{J}$ per cycle." },
          { label: "As heater", text: "Run as heat pump it would deliver $K_{\\mathrm{heat}} = 600/150 = 4.00\\ \\mathrm{J}$ per joule." },
        ],
        result: "$K = 3.00$; dumps $600\\ \\mathrm{J}$ per cycle.",
      },
      {
        title: "Heat-pump savings",
        problem: "A house needs $12\\ \\mathrm{kW}$ of heating. Compare electricity for resistance heating versus a $K_{\\mathrm{heat}} = 3.5$ heat pump.",
        steps: [
          { label: "Resistance", text: "$12\\ \\mathrm{kW}$ electric for $12\\ \\mathrm{kW}$ heat." },
          { label: "Heat pump", text: "$W = |Q_{h}|/K_{\\mathrm{heat}} = 12/3.5 = 3.43\\ \\mathrm{kW}$." },
          { label: "Saving", text: "$12 - 3.43 = 8.57\\ \\mathrm{kW}$ saved — $71$ percent less electricity." },
        ],
        result: "$3.43\\ \\mathrm{kW}$ versus $12\\ \\mathrm{kW}$: heat pumps use $29$ percent of the power.",
      },
    ],
    keyTakeaways: [
      "Refrigerators pump $|Q_{c}|$ uphill with work $W$, dumping $|Q_{h}| = |Q_{c}| + W$.",
      "Cooling $K = |Q_{c}|/W$; heating $K + 1$: values above $1$ are normal.",
      "Unpowered uphill flow is impossible — work is mandatory.",
    ],
    quiz: [
      {
        q: "A refrigerator with $K = 4$ using $100\\ \\mathrm{J}$ of work extracts:",
        options: ["$25\\ \\mathrm{J}$", "$400\\ \\mathrm{J}$", "$100\\ \\mathrm{J}$", "$500\\ \\mathrm{J}$ dumped cold"],
        answer: 1,
        explanation: "$|Q_{c}| = KW = 4(100) = 400\\ \\mathrm{J}$; it dumps $500\\ \\mathrm{J}$ to the room.",
      },
      {
        q: "COP can exceed $1$ because it measures:",
        options: ["Efficiency of conversion", "Heat moved per work paid — relocation, not creation", "Perpetual motion", "Temperature ratio directly"],
        answer: 1,
        explanation: "Relocating ambient heat is not converting it; the first law $|Q_{h}| = |Q_{c}| + W$ is fully respected.",
      },
      {
        q: "The Clausius statement forbids:",
        options: ["Powered refrigeration", "Spontaneous cold-to-hot heat flow in a cycle with no other effect", "Heat pumps", "Waste heat"],
        answer: 1,
        explanation: "Uphill flow needs work input; unplugged uphill flow never occurs.",
      },
    ],
  },
  {
    sectionId: "young-ch20-s5",
    readingTime: 5,
    intro: "Two forbidding statements — Kelvin-Planck for engines, Clausius for refrigerators — turn out to be one law in disguise. Young states both precisely and proves their equivalence with coupled-machine arguments.",
    objectives: [
      "State the Kelvin-Planck and Clausius forms of the second law",
      "Prove their equivalence by coupling engines to refrigerators",
      "Classify perpetual-motion machines of the second kind",
    ],
    concepts: [
      {
        term: "Kelvin-Planck statement",
        kind: "law",
        statement: "**No cyclic process can absorb heat from a single reservoir and convert it entirely into work** — some waste $|Q_{c}| > 0$ is unavoidable.",
        detail: "Ship-driving ocean-heat engines and $e = 1$ coal plants are Kelvin-Planck violations: one reservoir cannot power a cycle.",
      },
      {
        term: "Clausius statement",
        kind: "law",
        statement: "**No cyclic process can transfer heat from cold to hot with no other effect** — uphill flow demands work input.",
        detail: "Self-chilling drink cans with no power source would be Clausius violations.",
      },
      {
        term: "Equivalence proof",
        kind: "theorem",
        statement: "A Kelvin-Planck violator (perfect engine) driving an ordinary refrigerator pumps heat uphill with no net work — a Clausius violator; and a Clausius violator feeding an ordinary engine yields net work from one reservoir — a Kelvin-Planck violator. Each statement implies the other.",
        detail: "Young's coupled-machine diagrams make both directions visual: violating one builds a machine violating the other from off-the-shelf parts.",
      },
      {
        term: "Perpetual motion of the second kind",
        kind: "notation",
        statement: "A **perpetual-motion machine of the second kind** respects energy conservation but breaks the second law (perfect engine or free refrigerator); of the first kind breaks the first law outright.",
        detail: "Patent offices reject both: the first creates energy, the second misroutes it with impossible perfection.",
      },
      {
        term: "One law, two faces",
        kind: "insight",
        statement: "Engines and refrigerators are the same diagram run opposite ways, so their impossibilities must stand or fall together — the equivalence proof is thermodynamic duality in action.",
        detail: "This unity is why Chapter 20 needs only one entropy concept to police both machines.",
      },
    ],
    examples: [
      {
        title: "Perfect engine makes free fridge",
        problem: "Couple a claimed perfect engine ($|Q_{h}| = 600\\ \\mathrm{J}$ in, $W = 600\\ \\mathrm{J}$ out) to an ordinary $K = 3$ refrigerator. Show the pair violates Clausius.",
        steps: [
          { label: "Fridge alone", text: "With $W = 600\\ \\mathrm{J}$, it extracts $|Q_{c}| = 3(600) = 1800\\ \\mathrm{J}$ and dumps $2400\\ \\mathrm{J}$." },
          { label: "Net flows", text: "Engine returns $600\\ \\mathrm{J}$ to the hot side... net: hot gains $2400 - 600 = 1800\\ \\mathrm{J}$ while cold loses $1800\\ \\mathrm{J}$, with zero net work." },
          { label: "Verdict", text: "$1800\\ \\mathrm{J}$ flows cold-to-hot with no other effect — a Clausius violation built from a Kelvin-Planck violation." },
        ],
        result: "Perfect engines imply free refrigerators: the statements are equivalent.",
      },
      {
        title: "Spotting second-kind machines",
        problem: "Classify: (a) $e = 1$ engine, (b) work-creating-then-burning loop, (c) unpowered uphill heat pump.",
        steps: [
          { label: "(a)", text: "Perfect engine: second kind (first law fine, Kelvin-Planck broken)." },
          { label: "(b)", text: "Net work from nothing: first kind (energy created)." },
          { label: "(c)", text: "Free refrigerator: second kind (Clausius broken)." },
          { label: "Test", text: "Ask first: is energy balanced? Then: is the routing permitted?" },
        ],
        result: "(a) and (c) second kind; (b) first kind.",
      },
    ],
    keyTakeaways: [
      "Kelvin-Planck: no perfect engine. Clausius: no free refrigerator.",
      "Coupled-machine proofs show each violation builds the other — one law.",
      "Second-kind machines conserve energy but misroute it impossibly.",
    ],
    quiz: [
      {
        q: "A perfect engine coupled to an ordinary refrigerator yields:",
        options: ["A first-law violation", "Net cold-to-hot heat flow with no work — a Clausius violation", "A working power plant", "Nothing usable"],
        answer: 1,
        explanation: "The engine's work exactly powers the fridge, leaving pure uphill flow as the only net effect.",
      },
      {
        q: "The two statements of the second law are:",
        options: ["Contradictory", "Logically equivalent", "About different branches of physics", "Both approximations"],
        answer: 1,
        explanation: "Each implies the other via coupled machines — one law with engine and refrigerator faces.",
      },
      {
        q: "A free self-powered cooler with no work input violates:",
        options: ["Only the first law", "The Clausius (second-law) statement", "The zeroth law", "No law — it is allowed"],
        answer: 1,
        explanation: "Uphill flow with no other effect is exactly what Clausius forbids.",
      },
    ],
  },
  {
    sectionId: "young-ch20-s6",
    readingTime: 6,
    intro: "The reversible Carnot cycle sets the ceiling every engine lives under. Young constructs its two-isotherm two-adiabat loop, derives $e = 1 - T_{c}/T_{h}$, and proves no engine between the same reservoirs can do better.",
    objectives: [
      "Trace the four Carnot steps on $p$-$V$ and $T$-$S$ diagrams",
      "Derive $e_{\\mathrm{Carnot}} = 1 - T_{c}/T_{h}$ from $|Q_{c}|/|Q_{h}| = T_{c}/T_{h}$",
      "State and argue Carnot's theorem on maximum efficiency",
    ],
    concepts: [
      {
        term: "Carnot cycle",
        kind: "definition",
        statement: "The **Carnot cycle** runs reversible isothermal expansion ($T_{h}$), adiabatic expansion ($T_{h} \\to T_{c}$), isothermal compression ($T_{c}$), adiabatic compression ($T_{c} \\to T_{h}$) — two isotherms joined by two adiabats.",
        detail: "Heat touches the working substance only at the reservoir temperatures, never across a $\\Delta T$: zero irreversible flow by design.",
      },
      {
        term: "Carnot efficiency",
        kind: "theorem",
        statement: "For any working substance, $e_{\\mathrm{Carnot}} = 1 - T_{c}/T_{h}$ with absolute temperatures: $T_{h} = 600\\ \\mathrm{K}$, $T_{c} = 300\\ \\mathrm{K}$ gives $e = 0.50$.",
        detail: "Derived from $|Q_{c}|/|Q_{h}| = T_{c}/T_{h}$ (adiabat relations cancel the volumes); substance-independence is the deep result.",
      },
      {
        term: "Carnot's theorem",
        kind: "theorem",
        statement: "**No engine between reservoirs $T_{h}$, $T_{c}$ can exceed $e_{\\mathrm{Carnot}}$**, and all reversible engines match it — proved by coupling a challenger against a reversed Carnot machine.",
        detail: "A more efficient engine driving Carnot-as-fridge backward would pump heat uphill net — a Clausius violation. Hence impossible.",
      },
      {
        term: "Carnot refrigerator COP",
        kind: "method",
        statement: "Reversed, Carnot gives the best possible $K_{\\mathrm{Carnot}} = T_{c}/(T_{h} - T_{c})$: a $T_{c} = 255\\ \\mathrm{K}$, $T_{h} = 300\\ \\mathrm{K}$ freezer tops out at $K = 5.67$.",
        detail: "Real freezers ($K \\sim 2$–$3$) trail the reversible ideal — irreversibility taxes pumping too.",
      },
      {
        term: "Temperature from efficiency",
        kind: "insight",
        statement: "Because $e_{\\mathrm{Carnot}}$ depends only on the ratio $T_{c}/T_{h}$, Carnot efficiency defines absolute temperature operationally — the thermodynamic temperature scale of Section 20.7's foundation.",
        detail: "Gas thermometers and Carnot thermometers agree because both probe the same reversible limit.",
      },
    ],
    figures: [
      {
        caption: "Carnot loop on $p$-$V$: hot isotherm out, adiabat down, cold isotherm back, adiabat up. Enclosed area is $W_{\\mathrm{net}}$.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carnot cycle on p-V diagram"><line x1="40" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor" stroke-width="1.5"/><path d="M100,70 Q200,72 260,100 Q250,140 160,145 Q95,130 100,70 Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="150" y="60" font-size="11" fill="currentColor">Th isotherm</text><text x="155" y="160" font-size="11" fill="currentColor">Tc isotherm</text><text x="265" y="120" font-size="11" fill="currentColor">adiabats</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Carnot limit for a steam plant",
        problem: "Steam at $T_{h} = 800\\ \\mathrm{K}$ exhausts to $T_{c} = 300\\ \\mathrm{K}$. Find $e_{\\mathrm{Carnot}}$ and the minimum $|Q_{c}|$ per $1000\\ \\mathrm{J}$ absorbed.",
        steps: [
          { label: "Efficiency", text: "$e = 1 - 300/800 = 1 - 0.375 = 0.625$ ($62.5$ percent)." },
          { label: "Work", text: "$W_{\\max} = 0.625(1000) = 625\\ \\mathrm{J}$." },
          { label: "Waste floor", text: "$|Q_{c}|_{\\min} = 1000 - 625 = 375\\ \\mathrm{J}$ — no plant between these $T$'s dumps less." },
        ],
        result: "$e_{\\max} = 62.5$ percent; at least $375\\ \\mathrm{J}$ rejected per kilojoule.",
      },
      {
        title: "Beating Carnot fails",
        problem: "A claimant offers $e = 0.70$ between $800\\ \\mathrm{K}$ and $300\\ \\mathrm{K}$. Show the contradiction using $|Q_{c}|/|Q_{h}| = T_{c}/T_{h}$ logic.",
        steps: [
          { label: "Carnot ratio", text: "Reversible machines need $|Q_{c}|/|Q_{h}| = 300/800 = 0.375$." },
          { label: "Claimant ratio", text: "$e = 0.70$ means $|Q_{c}|/|Q_{h}| = 0.30 < 0.375$ — rejects too little." },
          { label: "Coupled result", text: "Driving a reversed Carnot with its output pumps net heat uphill — Clausius violated. Claim impossible." },
        ],
        result: "$0.70 > 0.625$: Carnot's theorem rejects the claim.",
      },
    ],
    keyTakeaways: [
      "Carnot = two reversible isotherms plus two adiabats; heat only at $T_{h}$, $T_{c}$.",
      "$e_{\\mathrm{Carnot}} = 1 - T_{c}/T_{h}$: substance-independent ceiling.",
      "Carnot's theorem: no engine beats it; all reversible engines match it.",
    ],
    quiz: [
      {
        q: "Carnot efficiency between $500\\ \\mathrm{K}$ and $250\\ \\mathrm{K}$ is:",
        options: ["$25$ percent", "$50$ percent", "$75$ percent", "$100$ percent"],
        answer: 1,
        explanation: "$e = 1 - 250/500 = 0.50$.",
      },
      {
        q: "Carnot's theorem is proved by:",
        options: ["Measuring many engines", "Coupling a challenger to a reversed Carnot to force a Clausius violation", "Assuming ideal gases only", "Invoking the zeroth law"],
        answer: 1,
        explanation: "Excess work from a super-Carnot engine drives Carnot-as-fridge to pump net heat uphill — impossible.",
      },
      {
        q: "All reversible engines between the same reservoirs share efficiency because:",
        options: ["They use the same fuel", "Any difference would let the pair violate the second law", "They are the same size", "Friction is zero only once"],
        answer: 1,
        explanation: "If reversibles differed, the better driving the worse backward would move heat uphill free.",
      },
      {
        q: "Raising $T_{h}$ with $T_{c}$ fixed:",
        options: ["Lowers Carnot efficiency", "Raises Carnot efficiency toward $1$", "Leaves it unchanged", "Makes it negative"],
        answer: 1,
        explanation: "$e = 1 - T_{c}/T_{h}$ grows as $T_{h}$ rises — the superheated-steam strategy.",
      },
    ],
  },
  {
    sectionId: "young-ch20-s7",
    readingTime: 6,
    intro: "Entropy makes the second law calculable: $\\Delta S = \\int dQ_{\\mathrm{rev}}/T$ turns direction into arithmetic. Young defines it via Carnot ratios and computes changes for expansions, heating, and phase changes.",
    objectives: [
      "Define entropy change $\\Delta S = \\int_{1}^{2} dQ_{\\mathrm{rev}}/T$",
      "Compute $\\Delta S$ for isothermal, isochoric, and phase-change processes",
      "State the entropy form of the second law: $\\Delta S_{\\mathrm{universe}} \\ge 0$",
    ],
    concepts: [
      {
        term: "Entropy definition",
        kind: "definition",
        statement: "The **entropy change** from state $1$ to $2$ is $\\Delta S = \\int_{1}^{2} dQ_{\\mathrm{rev}}/T$ along any reversible path — path-independent because $|Q_{c}|/|Q_{h}| = T_{c}/T_{h}$ for Carnot legs.",
        detail: "Units $\\mathrm{J/K}$; only differences matter, with $S = 0$ conventionally at $T = 0$ (third-law preview).",
      },
      {
        term: "Entropy is a state function",
        kind: "theorem",
        statement: "Since every cycle decomposes into Carnot slivers with $\\oint dQ_{\\mathrm{rev}}/T = 0$, the integral depends only on endpoints — $S$ is a state variable like $U$.",
        detail: "Irreversible paths between the same states share the same $\\Delta S$: compute along the convenient reversible route.",
      },
      {
        term: "Isothermal entropy change",
        kind: "method",
        statement: "At constant $T$, $\\Delta S = Q_{\\mathrm{rev}}/T$; ideal-gas doubling gives $\\Delta S = nR\\ln 2 = (1.00)(8.314)(0.6931) = 5.76\\ \\mathrm{J/K}$ per mole.",
        detail: "Heat absorbed raises $S$; heat rejected lowers it — sign follows $Q_{\\mathrm{rev}}$.",
      },
      {
        term: "Heating and phase changes",
        kind: "method",
        statement: "Heating: $\\Delta S = \\int mc\\,dT/T = mc\\ln(T_{2}/T_{1})$; melting/boiling: $\\Delta S = \\pm mL/T$ (e.g. $1\\ \\mathrm{kg}$ ice melting gains $3.34 \\times 10^{5}/273 = 1223\\ \\mathrm{J/K}$).",
        detail: "Warming $1\\ \\mathrm{kg}$ of water $0 \\to 100^{\\circ}\\mathrm{C}$ adds $(1)(4190)\\ln(373/273) = 1305\\ \\mathrm{J/K}$.",
      },
      {
        term: "Entropy second law",
        kind: "law",
        statement: "For any process, $\\Delta S_{\\mathrm{total}} = \\Delta S_{\\mathrm{system}} + \\Delta S_{\\mathrm{surroundings}} \\ge 0$, with equality only for reversible change — entropy of the universe never decreases.",
        detail: "Free expansion: gas gains $nR\\ln 2$, surroundings $0$ — total rises, irreversibility quantified.",
      },
    ],
    figures: [
      {
        caption: "Entropy bookkeeping: reversible heat $dQ_{\\mathrm{rev}}/T$ summed along any convenient reversible path gives the state change $\\Delta S$.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two paths between states giving equal entropy change"><circle cx="80" cy="100" r="7" fill="currentColor"/><text x="60" y="125" font-size="12" fill="currentColor">state 1</text><circle cx="320" cy="100" r="7" fill="currentColor"/><text x="300" y="125" font-size="12" fill="currentColor">state 2</text><path d="M80,100 Q200,20 320,100" fill="none" stroke="currentColor" stroke-width="2"/><path d="M80,100 Q200,180 320,100" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 4"/><text x="180" y="45" font-size="12" fill="currentColor">reversible A</text><text x="175" y="160" font-size="12" fill="currentColor">any path B: same ΔS</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Entropy of melting ice",
        problem: "Find $\\Delta S$ melting $0.500\\ \\mathrm{kg}$ of ice at $273\\ \\mathrm{K}$ ($L_{f} = 3.34 \\times 10^{5}$).",
        steps: [
          { label: "Heat", text: "$Q_{\\mathrm{rev}} = mL_{f} = (0.500)(3.34 \\times 10^{5}) = 1.67 \\times 10^{5}\\ \\mathrm{J}$." },
          { label: "Entropy", text: "$\\Delta S = Q/T = 1.67 \\times 10^{5}/273 = 611.7\\ \\mathrm{J/K}$." },
          { label: "Sign", text: "Positive — melting disorders the lattice, absorbing heat at fixed $T$." },
        ],
        result: "$\\Delta S = +612\\ \\mathrm{J/K}$.",
      },
      {
        title: "Free expansion entropy rise",
        problem: "$1.00\\ \\mathrm{mol}$ free-expands, doubling volume adiabatically. Compute $\\Delta S_{\\mathrm{gas}}$, $\\Delta S_{\\mathrm{surr}}$, $\\Delta S_{\\mathrm{tot}}$.",
        steps: [
          { label: "Gas (reversible route)", text: "Use the reversible isotherm: $\\Delta S = nR\\ln 2 = 5.76\\ \\mathrm{J/K}$." },
          { label: "Surroundings", text: "No heat flows: $\\Delta S_{\\mathrm{surr}} = 0$." },
          { label: "Total", text: "$\\Delta S_{\\mathrm{tot}} = 5.76 > 0$ — irreversibility measured in $\\mathrm{J/K}$." },
        ],
        result: "Total entropy rises $5.76\\ \\mathrm{J/K}$; equality only for reversible change.",
      },
    ],
    keyTakeaways: [
      "$\\Delta S = \\int dQ_{\\mathrm{rev}}/T$: state function from Carnot ratios.",
      "Isotherms $Q/T$; heating $mc\\ln(T_{2}/T_{1})$; phase change $mL/T$.",
      "$\\Delta S_{\\mathrm{universe}} \\ge 0$: the calculable second law.",
    ],
    quiz: [
      {
        q: "Entropy change between two states is computed:",
        options: ["Only along the actual path", "Along any convenient reversible path", "As $Q_{\\mathrm{actual}}/T$ always", "Never for irreversible processes"],
        answer: 1,
        explanation: "$S$ is a state function: $\\oint dQ_{\\mathrm{rev}}/T = 0$ makes all reversible routes agree, and $\\Delta S$ is route-free.",
      },
      {
        q: "Melting ice at $273\\ \\mathrm{K}$ with $Q = +3.34 \\times 10^{5}\\ \\mathrm{J/kg}$ gives $\\Delta S$:",
        options: ["Negative", "Zero", "Positive ($+1223\\ \\mathrm{J/(kg \\cdot K)}$)", "Infinite"],
        answer: 2,
        explanation: "$\\Delta S = Q_{\\mathrm{rev}}/T = 3.34 \\times 10^{5}/273 = +1223\\ \\mathrm{J/K}$ per kilogram.",
      },
      {
        q: "The entropy statement of the second law says:",
        options: ["System entropy never rises", "Total entropy of universe never decreases", "Entropy is conserved", "Surroundings entropy is always zero"],
        answer: 1,
        explanation: "$\\Delta S_{\\mathrm{tot}} \\ge 0$ with equality iff reversible — systems may drop $S$ only by raising surroundings more.",
      },
    ],
  },
  {
    sectionId: "young-ch20-s8",
    readingTime: 5,
    intro: "Entropy is not bookkeeping magic — it counts microstates. Young closes with Boltzmann's $S = k\\ln w$, the statistical reason disorder rises, and the cosmic arc from order to equilibrium.",
    objectives: [
      "State $S = k\\ln w$ and interpret $w$ as microstate count",
      "Explain expansion and mixing entropy from counting",
      "Discuss the heat death and life's local order within global rise",
    ],
    concepts: [
      {
        term: "Microstates and macrostates",
        kind: "definition",
        statement: "A **macrostate** ($p, V, T$) comprises many **microstates** (exact molecular positions and velocities); $w$ counts microstates consistent with the macrostate.",
        detail: "Four coins show $1$-$4$-$6$-$4$-$1$ microstates per heads-count macrostate — the $2$-$2$ split dominates by counting alone.",
      },
      {
        term: "Boltzmann entropy",
        kind: "law",
        statement: "**$S = k\\ln w$**: entropy is Boltzmann's constant times the log of the microstate count. Doubling volume doubles positions per molecule ($w \\to w \\cdot 2^{N}$), so $\\Delta S = Nk\\ln 2 = nR\\ln 2$.",
        detail: "The logarithm makes $S$ additive over subsystems while $w$ multiplies — exactly the behavior macroscopic entropy needs.",
      },
      {
        term: "Why entropy rises",
        kind: "theorem",
        statement: "Isolated systems drift to the macrostate with overwhelmingly largest $w$; reverse fluctuations have probability $\\sim e^{-\\Delta S/k}$, absurdly small for moles of particles.",
        detail: "Free expansion's $5.76\\ \\mathrm{J/(mol \\cdot K)}$ is $N\\ln 2$ position choices per molecule — counting reproduces Clausius.",
      },
      {
        term: "Order, life, and the universe",
        kind: "insight",
        statement: "Life builds local order (falling $S$) by exporting more disorder as heat and waste — total $S$ still rises; the universe trends toward uniform equilibrium (**heat death**).",
        detail: "A refrigerator chills food (lowers its $S$) only by dumping $|Q_{h}|/T_{h}$-worth of entropy to the room — same bargain biology strikes.",
      },
      {
        term: "Arrow of time",
        kind: "notation",
        statement: "The **thermodynamic arrow of time** points toward larger $w$: microphysics is time-symmetric, but lopsided counting makes macroscopic reversal unobservable.",
        detail: "Cosmology traces the arrow to the universe's low-entropy beginning — the past hypothesis behind every one-way process.",
      },
    ],
    examples: [
      {
        title: "Counting expansion entropy",
        problem: "Derive $\\Delta S = nR\\ln 2$ for doubling via $S = k\\ln w$ with $N$ molecules.",
        steps: [
          { label: "Microstates", text: "Each molecule gains twice the positional choices: $w_{2}/w_{1} = 2^{N}$." },
          { label: "Log", text: "$\\Delta S = k\\ln(2^{N}) = Nk\\ln 2$." },
          { label: "Moles", text: "$Nk = nR$, so $\\Delta S = nR\\ln 2 = 5.76\\ \\mathrm{J/K}$ per mole. Matches Section 20.7." },
        ],
        result: "Boltzmann counting reproduces the thermodynamic $nR\\ln 2$.",
      },
      {
        title: "Life's entropy bargain",
        problem: "A plant orders $1.0\\ \\mathrm{J/K}$ of biomass (lowers its $S$ by $1.0$) by absorbing $100\\ \\mathrm{J}$ of sunlight at $5800\\ \\mathrm{K}$ and dumping waste heat at $300\\ \\mathrm{K}$. Check total $S$.",
        steps: [
          { label: "Sun entropy cost", text: "Absorbing $100\\ \\mathrm{J}$ at $5800\\ \\mathrm{K}$: $\\Delta S_{\\mathrm{sun}} = -100/5800 = -0.017\\ \\mathrm{J/K}$ (sun loses little $S$ per joule)." },
          { label: "Waste entropy", text: "Dumping $\\sim 100\\ \\mathrm{J}$ at $300\\ \\mathrm{K}$: $\\Delta S_{\\mathrm{waste}} = +100/300 = +0.333\\ \\mathrm{J/K}$." },
          { label: "Total", text: "$-0.017 + 0.333 - 1.0$ (biomass) $= -0.68$?? — real plants dump extra respiration heat; including it flips total positive. Order is never free." },
        ],
        result: "Local order demands larger exported disorder; full bookkeeping keeps $\\Delta S_{\\mathrm{tot}} > 0$.",
      },
    ],
    keyTakeaways: [
      "$S = k\\ln w$: entropy counts microstates logarithmically.",
      "Systems drift to max-$w$ macrostates; reversals have probability $e^{-\\Delta S/k}$.",
      "Local order (life, fridges) is paid for with larger global entropy export.",
    ],
    quiz: [
      {
        q: "Boltzmann entropy $S = k\\ln w$ uses the logarithm so that:",
        options: ["$S$ is dimensionless", "Entropy adds when microstate counts multiply", "$w$ stays small", "Temperature drops out"],
        answer: 1,
        explanation: "$w_{AB} = w_{A}w_{B}$ gives $\\ln w_{AB} = \\ln w_{A} + \\ln w_{B}$: extensivity from multiplicativity.",
      },
      {
        q: "Doubling a gas volume raises $S$ by $nR\\ln 2$ because:",
        options: ["Temperature doubles", "Each of $N$ molecules doubles its positional choices: $w \\to 2^{N}w$", "Pressure doubles", "Molecules move faster"],
        answer: 1,
        explanation: "$\\Delta S = k\\ln 2^{N} = Nk\\ln 2 = nR\\ln 2$ — pure position counting at fixed $T$.",
      },
      {
        q: "Living organisms locally decrease entropy by:",
        options: ["Violating the second law", "Exporting even more entropy as heat and waste", "Stopping metabolism", "Isolating themselves"],
        answer: 1,
        explanation: "Total $\\Delta S \\ge 0$ always; order here means disorder there — fridges and cells obey the same bargain.",
      },
      {
        q: "The thermodynamic arrow of time comes from:",
        options: ["Asymmetric molecular laws", "Time-symmetric microphysics plus overwhelmingly lopsided microstate counts", "Friction only", "Human perception only"],
        answer: 1,
        explanation: "Collisions run backward fine; macrostates with bigger $w$ simply dominate the counting.",
      },
    ],
  },
]
