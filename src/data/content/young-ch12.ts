import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 12
// Fluid Mechanics (Secs 12.1–12.6)
// ============================================================================

export const youngCh12Content: SectionContent[] = [
  {
    sectionId: "young-ch12-s1",
    readingTime: 4,
    intro: "Fluids flow because they cannot hold shear: gases expand to fill, liquids hold volume loosely. This section defines density for uniform and composite fluids and fixes the units Young uses throughout.",
    objectives: [
      "Distinguish gases from liquids mechanically",
      "Define $\\rho = m/V$ and specific gravity",
      "Compute composite densities by mass over volume"
    ],
    concepts: [
      {
        term: "Fluid",
        kind: "definition",
        statement: "A **fluid** (liquid or gas) **flows under any shear** — no static shear stress, only pressure.",
        detail: "Honey flows slowly, air quickly, but both yield continuously to sideways push."
      },
      {
        term: "Gas versus liquid",
        kind: "definition",
        statement: "**Gases expand to fill** their container (compressible); **liquids hold nearly fixed volume** with a free surface.",
        detail: "Air density swings with $p$ and $T$; water stays ~$1000\\ \\mathrm{kg/m^3}$ across lab conditions."
      },
      {
        term: "Density",
        kind: "definition",
        statement: "**$\\rho = m/V$** ($\\mathrm{kg/m^3}$); water $1000$, air $1.2$, mercury $13{,}600$.",
        detail: "A $0.50\\ \\mathrm{m^3}$ water tank holds $500\\ \\mathrm{kg}$."
      },
      {
        term: "Specific gravity",
        kind: "definition",
        statement: "**Specific gravity** is **$\\rho/\\rho_{\\mathrm{water}}$**, dimensionless — numerically $\\rho$ in $\\mathrm{g/cm^3}$.",
        detail: "Lead $11.3$, ice $0.92$ (floats), gold $19.3$."
      },
      {
        term: "Composite density",
        kind: "method",
        statement: "Mixtures average by **total mass over total volume**: $\\rho = (m_1+m_2)/(V_1+V_2)$, not by raw mean of densities.",
        detail: "$1.0\\ \\mathrm{kg}$ water plus $1.0\\ \\mathrm{kg}$ oil ($V = 1.09\\ \\mathrm{L}$): $\\rho = 952\\ \\mathrm{kg/m^3}$."
      }
    ],
    examples: [
      {
        title: "Crown test",
        problem: "A $1.00\\ \\mathrm{kg}$ crown displaces $65\\ \\mathrm{cm^3}$ of water. Is it gold ($19.3\\ \\mathrm{g/cm^3}$)?",
        steps: [
          { label: "Density", text: "$\\rho = 1000/65 = 15.4\\ \\mathrm{g/cm^3}$." },
          { label: "Compare", text: "Below $19.3$ — alloyed or hollow (Archimedes legendary test)." },
          { label: "Specific gravity", text: "$15.4$ — floats in nothing common, sinks in mercury ($13.6$? no — sinks since denser)." }
        ],
        result: "$15.4\\ \\mathrm{g/cm^3}$ — not pure gold."
      },
      {
        title: "Air in a room",
        problem: "Mass of air in a $4 \\times 5 \\times 3\\ \\mathrm{m}$ room ($\\rho = 1.2\\ \\mathrm{kg/m^3}$)?",
        steps: [
          { label: "Volume", text: "$V = 60\\ \\mathrm{m^3}$." },
          { label: "Mass", text: "$m = 1.2 \\times 60 = 72\\ \\mathrm{kg}$ — a person worth of air." },
          { label: "Weight", text: "$706\\ \\mathrm{N}$ spread over the room — felt only as pressure." }
        ],
        result: "$72\\ \\mathrm{kg}$ of air."
      }
    ],
    keyTakeaways: [
      "Fluids yield to shear; gases fill, liquids surface.",
      "$\\rho = m/V$ with water $1000\\ \\mathrm{kg/m^3}$ as reference.",
      "Mixtures divide totals, not densities."
    ],
    quiz: [
      {
        q: "Which distinguishes liquids from gases?",
        options: ["Liquids hold volume with a free surface; gases fill the container", "Gases are heavier", "Liquids have no pressure", "Gases cannot flow"],
        answer: 0,
        explanation: "Compressibility and free surfaces separate the two fluid phases."
      },
      {
        q: "Crown $1.00\\ \\mathrm{kg}$ displacing $65\\ \\mathrm{cm^3}$ has density:",
        options: ["$19.3\\ \\mathrm{g/cm^3}$", "$15.4\\ \\mathrm{g/cm^3}$", "$6.5\\ \\mathrm{g/cm^3}$", "$1.0\\ \\mathrm{g/cm^3}$"],
        answer: 1,
        explanation: "$1000/65 = 15.4\\ \\mathrm{g/cm^3}$ — below gold."
      },
      {
        q: "Specific gravity $0.92$ (ice) means:",
        options: ["Denser than water", "$920\\ \\mathrm{kg/m^3}$, floats on water", "Zero density", "Heavier than lead"],
        answer: 1,
        explanation: "Ratio to water: $0.92 \\times 1000 = 920\\ \\mathrm{kg/m^3}$."
      }
    ]
  },
  {
    sectionId: "young-ch12-s2",
    readingTime: 6,
    intro: "Pressure is force per area, and in a static fluid it grows linearly with depth: $p = p_0 + \\rho gh$. This section derives hydrostatics, states Pascal law, and reads barometers and gauges.",
    objectives: [
      "Define $p = F/A$ and its units",
      "Derive $p = p_0 + \\rho gh$ for static fluids",
      "Apply Pascal law to hydraulics and barometers"
    ],
    concepts: [
      {
        term: "Pressure",
        kind: "definition",
        statement: "**Pressure** $p = F_{\\perp}/A$ in **pascals ($\\mathrm{Pa} = \\mathrm{N/m^2}$)**; $1\\ \\mathrm{atm} = 1.013 \\times 10^5\\ \\mathrm{Pa}$.",
        detail: "A $70\\ \\mathrm{kg}$ person on $0.030\\ \\mathrm{m^2}$ of shoe stands at $22{,}900\\ \\mathrm{Pa}$ gauge."
      },
      {
        term: "Hydrostatic variation",
        kind: "theorem",
        statement: "**$p = p_0 + \\rho gh$**: pressure rises $\\rho g$ per meter of depth $h$.",
        detail: "Water gains $9800\\ \\mathrm{Pa/m}$; $10.3\\ \\mathrm{m}$ of water equals $1\\ \\mathrm{atm}$."
      },
      {
        term: "Pascal law",
        kind: "law",
        statement: "**Pressure applied to an enclosed fluid transmits undiminished** to every part — hydraulics multiply force.",
        detail: "$F_2 = F_1(A_2/A_1)$: $100\\ \\mathrm{N}$ on $0.010\\ \\mathrm{m^2}$ lifts $10{,}000\\ \\mathrm{N}$ on $1.0\\ \\mathrm{m^2}$."
      },
      {
        term: "Barometer",
        kind: "method",
        statement: "**Mercury barometer**: $p_{\\mathrm{atm}} = \\rho_{Hg}gh$ with $h \\approx 0.760\\ \\mathrm{m}$.",
        detail: "$13{,}600 \\times 9.80 \\times 0.760 = 1.013 \\times 10^5\\ \\mathrm{Pa}$ — Torricelli column."
      },
      {
        term: "Gauge versus absolute",
        kind: "notation",
        statement: "**Absolute** includes atmosphere; **gauge** subtracts it: $p_{\\mathrm{abs}} = p_{\\mathrm{gauge}} + p_{\\mathrm{atm}}$.",
        detail: "Tires at $220\\ \\mathrm{kPa}$ gauge hold $321\\ \\mathrm{kPa}$ absolute."
      }
    ],
    figures: [
      {
        caption: "Hydrostatics: $p = p_0 + \\rho gh$ grows linearly with depth $h$",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pressure versus depth"><line x1="80" y1="50" x2="500" y2="50" stroke="currentColor" stroke-width="2"/><rect x="80" y="50" width="420" height="110" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="2"/><line x1="200" y1="50" x2="200" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="380" y1="50" x2="380" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="200" y="175" font-size="11" text-anchor="middle" fill="currentColor">shallow: low p</text><text x="380" y="175" font-size="11" text-anchor="middle" fill="currentColor">deep: high p</text><text x="560" y="110" font-size="12" fill="currentColor">p = p0 + rho g h</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Dam pressure",
        problem: "Find gauge pressure $5.0\\ \\mathrm{m}$ below a reservoir surface.",
        steps: [
          { label: "Formula", text: "$p = 1000 \\times 9.80 \\times 5.0 = 49{,}000\\ \\mathrm{Pa}$." },
          { label: "Atmospheres", text: "$0.484\\ \\mathrm{atm}$ gauge; $1.484\\ \\mathrm{atm}$ absolute." },
          { label: "Force", text: "On $1.0\\ \\mathrm{m^2}$ gate: $49{,}000\\ \\mathrm{N}$." }
        ],
        result: "$49\\ \\mathrm{kPa}$ gauge at $5.0\\ \\mathrm{m}$."
      },
      {
        title: "Hydraulic lift",
        problem: "$F_1 = 200\\ \\mathrm{N}$ on $A_1 = 0.020\\ \\mathrm{m^2}$; $A_2 = 2.0\\ \\mathrm{m^2}$. Find lift and fluid shift.",
        steps: [
          { label: "Force", text: "$F_2 = 200 \\times 100 = 20{,}000\\ \\mathrm{N}$ ($2040\\ \\mathrm{kg}$)." },
          { label: "Distance", text: "Volume conserved: $d_2 = d_1/100$ — force trades for travel." },
          { label: "Pressure", text: "Both at $10{,}000\\ \\mathrm{Pa}$ — Pascal transmission." }
        ],
        result: "$20\\ \\mathrm{kN}$ lifted; small piston travels $100$ times farther."
      }
    ],
    keyTakeaways: [
      "Static pressure grows $\\rho g$ per meter down.",
      "Enclosed pressure transmits everywhere (Pascal).",
      "Quote gauge or absolute explicitly."
    ],
    quiz: [
      {
        q: "Gauge pressure $5.0\\ \\mathrm{m}$ under water is about:",
        options: ["$980\\ \\mathrm{Pa}$", "$49{,}000\\ \\mathrm{Pa}$", "$1.0\\ \\mathrm{Pa}$", "Zero"],
        answer: 1,
        explanation: "$\\rho gh = 49\\ \\mathrm{kPa}$."
      },
      {
        q: "Hydraulics multiply force by:",
        options: ["$A_1/A_2$", "$A_2/A_1$ at equal pressure", "Depth", "Density"],
        answer: 1,
        explanation: "$F = pA$: bigger piston, bigger force."
      },
      {
        q: "Mercury barometer $0.760\\ \\mathrm{m}$ reads:",
        options: ["$1\\ \\mathrm{Pa}$", "$1.013 \\times 10^5\\ \\mathrm{Pa}$", "Zero", "$760\\ \\mathrm{Pa}$"],
        answer: 1,
        explanation: "$\\rho_{Hg}gh$ equals one atmosphere."
      }
    ]
  },
  {
    sectionId: "young-ch12-s3",
    readingTime: 6,
    intro: "Immersed bodies lose apparent weight equal to the fluid they displace: Archimedes principle. This section proves $B = \\rho_{\\mathrm{fluid}}V_{\\mathrm{disp}}g$ and floats, sinks, and suspends bodies by density comparison.",
    objectives: [
      "State and prove Archimedes principle",
      "Predict float, sink, or suspend from $\\rho_{\\mathrm{obj}}$ vs $\\rho_f$",
      "Compute apparent weight and floating fraction"
    ],
    concepts: [
      {
        term: "Archimedes principle",
        kind: "theorem",
        statement: "**Buoyant force $B = w_{\\mathrm{displaced}} = \\rho_f V_{\\mathrm{disp}}g$** upward — weight of fluid pushed aside.",
        detail: "$1.0\\ \\mathrm{m^3}$ submerged in water feels $9800\\ \\mathrm{N}$ up."
      },
      {
        term: "Proof by pressure",
        kind: "theorem",
        statement: "Deeper pressure pushes harder on the bottom than the top; the **difference is exactly the displaced weight**.",
        detail: "Sideways pushes cancel; vertical imbalance $\\rho_f g h A = \\rho_f V g$ remains."
      },
      {
        term: "Float or sink rule",
        kind: "theorem",
        statement: "**$\\rho_{\\mathrm{obj}} < \\rho_f$ floats** (partially); **$>$ sinks**; **$=$ suspends** neutrally.",
        detail: "Ice ($920$) floats with $92$% submerged; steel ($7800$) sinks in water."
      },
      {
        term: "Floating fraction",
        kind: "method",
        statement: "Floating: **$V_{\\mathrm{sub}}/V = \\rho_{\\mathrm{obj}}/\\rho_f$** — weight equals displaced-fluid weight.",
        detail: "Iceberg: $920/1025 = 0.898$ in seawater — tip above hides the mass."
      },
      {
        term: "Apparent weight",
        kind: "method",
        statement: "**$w_{\\mathrm{app}} = w - B$** — scales read light underwater.",
        detail: "$10\\ \\mathrm{kg}$ aluminum ($V = 3.70\\ \\mathrm{L}$) reads $98 - 36.3 = 61.7\\ \\mathrm{N}$ submerged."
      }
    ],
    examples: [
      {
        title: "Iceberg fraction",
        problem: "What fraction of a $920\\ \\mathrm{kg/m^3}$ berg shows above $1025\\ \\mathrm{kg/m^3}$ seawater?",
        steps: [
          { label: "Submerged", text: "$920/1025 = 0.898$." },
          { label: "Exposed", text: "$1 - 0.898 = 0.102$ — about $10$%." },
          { label: "Moral", text: "Nine-tenths hidden — the navigational menace." }
        ],
        result: "$89.8$% submerged; $10.2$% visible."
      },
      {
        title: "Apparent gold weight",
        problem: "A $1.00\\ \\mathrm{kg}$ gold piece ($V = 51.8\\ \\mathrm{cm^3}$) is weighed submerged. Apparent mass?",
        steps: [
          { label: "Buoyancy", text: "$B = 1000 \\times 5.18 \\times 10^{-5} \\times 9.80 = 0.508\\ \\mathrm{N}$." },
          { label: "Apparent", text: "$9.80 - 0.508 = 9.29\\ \\mathrm{N}$ ($0.948\\ \\mathrm{kg}$ reading)." },
          { label: "Fake check", text: "Alloy $V = 65\\ \\mathrm{cm^3}$: $B = 0.637\\ \\mathrm{N}$, reads $0.935\\ \\mathrm{kg}$ — lighter, caught." }
        ],
        result: "Reads $0.948\\ \\mathrm{kg}$; fakes read lighter."
      }
    ],
    keyTakeaways: [
      "Buoyancy equals displaced-fluid weight, always upward.",
      "Density comparison decides float, sink, suspend.",
      "Submerged scales report $w - B$."
    ],
    quiz: [
      {
        q: "Buoyant force equals:",
        options: ["Object weight always", "Weight of displaced fluid", "Zero always", "Object volume always"],
        answer: 1,
        explanation: "Pressure imbalance integrates to exactly $\\rho_f V g$."
      },
      {
        q: "Ice ($920$) in seawater ($1025$) shows about:",
        options: ["$90$% above", "$10$% above", "Sinks fully", "Floats fully dry"],
        answer: 1,
        explanation: "Submerged $0.898$; exposed $0.102$."
      },
      {
        q: "Steel sinks in water because:",
        options: ["It is cold", "$\\rho_{\\mathrm{steel}} > \\rho_{\\mathrm{water}}$ so $w > B_{\\max}$", "Buoyancy is zero", "Water has no pressure"],
        answer: 1,
        explanation: "Full-displacement buoyancy $7800 \\to 1000$ ratio cannot cover weight."
      }
    ]
  },
  {
    sectionId: "young-ch12-s4",
    readingTime: 5,
    intro: "Moving fluids obey continuity: what flows in must flow out, so narrow pipes run fast. This section defines volume flow rate $Q = Av$ and derives $A_1v_1 = A_2v_2$ for incompressible steady flow.",
    objectives: [
      "Define $Q = Av$ and mass flow $\\rho Av$",
      "Apply continuity $A_1v_1 = A_2v_2$",
      "Describe streamlines and laminar versus turbulent regimes"
    ],
    concepts: [
      {
        term: "Volume flow rate",
        kind: "definition",
        statement: "**$Q = Av$** ($\\mathrm{m^3/s}$): area times normal speed through it.",
        detail: "$0.010\\ \\mathrm{m^2}$ at $2.0\\ \\mathrm{m/s}$: $Q = 0.020\\ \\mathrm{m^3/s}$ ($20\\ \\mathrm{L/s}$)."
      },
      {
        term: "Continuity equation",
        kind: "theorem",
        statement: "Incompressible steady flow: **$A_1v_1 = A_2v_2$** — halving area doubles speed.",
        detail: "Garden nozzle squeezes $2.0\\ \\mathrm{cm}$ to $0.50\\ \\mathrm{cm}$: speed jumps $16$ times."
      },
      {
        term: "Mass flow",
        kind: "definition",
        statement: "**$dm/dt = \\rho Av$** ($\\mathrm{kg/s}$) — conserved even when $\\rho$ varies (gases).",
        detail: "Compressible continuity: $\\rho_1A_1v_1 = \\rho_2A_2v_2$."
      },
      {
        term: "Streamlines",
        kind: "definition",
        statement: "**Streamlines** run tangent to $\\vec{v}$ everywhere; steady flow freezes them in place.",
        detail: "Crowded lines mark fast flow — the visual continuity equation."
      },
      {
        term: "Laminar versus turbulent",
        kind: "definition",
        statement: "**Laminar** glides in layers; **turbulent** churns chaotically past critical speed (Sec 12.6).",
        detail: "Bernoulli assumes steady laminar ideal flow — no eddies or viscosity."
      }
    ],
    figures: [
      {
        caption: "Continuity: narrow $A_2$ runs fast $v_2$ with $A_1v_1 = A_2v_2$ for incompressible flow",
        svg: `<svg viewBox="0 0 720 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Continuity nozzle"><path d="M 60 60 L 280 60 L 330 75 L 500 75 L 550 60 L 660 60 L 660 110 L 550 110 L 500 95 L 330 95 L 280 110 L 60 110 Z" fill="none" stroke="currentColor" stroke-width="2"/><line x1="150" y1="85" x2="230" y2="85" stroke="currentColor" stroke-width="2"/><polygon points="230,85 218,79 218,91" fill="currentColor"/><line x1="400" y1="85" x2="480" y2="85" stroke="currentColor" stroke-width="2"/><polygon points="480,85 468,79 468,91" fill="currentColor"/><text x="190" y="130" font-size="11" text-anchor="middle" fill="currentColor">wide: slow v1</text><text x="440" y="130" font-size="11" text-anchor="middle" fill="currentColor">narrow: fast v2</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Nozzle speedup",
        problem: "A hose ($D = 2.0\\ \\mathrm{cm}$) feeds a nozzle ($d = 0.50\\ \\mathrm{cm}$) at $1.0\\ \\mathrm{m/s}$. Find jet speed and $Q$.",
        steps: [
          { label: "Areas", text: "Ratio $(2.0/0.50)^2 = 16$." },
          { label: "Speed", text: "$v_2 = 16 \\times 1.0 = 16\\ \\mathrm{m/s}$." },
          { label: "Flow", text: "$Q = \\pi(0.010)^2 \\times 1.0 = 3.14 \\times 10^{-4}\\ \\mathrm{m^3/s}$ ($0.314\\ \\mathrm{L/s}$)." }
        ],
        result: "$16\\ \\mathrm{m/s}$ jet; $0.314\\ \\mathrm{L/s}$."
      },
      {
        title: "Artery narrowing",
        problem: "Blood slows where vessels branch: $A$ doubles. Speed change?",
        steps: [
          { label: "Continuity", text: "$v_2 = v_1/2$." },
          { label: "Capillaries", text: "Huge total area: $v \\sim 1\\ \\mathrm{mm/s}$ though aorta does $0.3\\ \\mathrm{m/s}$." },
          { label: "Time", text: "Slow capillaries grant diffusion time — physiology by continuity." }
        ],
        result: "Halved speed; capillary crawl by area explosion."
      }
    ],
    keyTakeaways: [
      "$Q = Av$ meters flow; continuity squeezes speed up.",
      "Mass flow $\\rho Av$ generalizes to gases.",
      "Streamlines visualize speed by crowding."
    ],
    quiz: [
      {
        q: "Halving pipe area (incompressible) makes speed:",
        options: ["Halve", "Double", "Unchanged", "Zero"],
        answer: 1,
        explanation: "$Av$ fixed: half $A$ needs double $v$."
      },
      {
        q: "$0.010\\ \\mathrm{m^2}$ at $2.0\\ \\mathrm{m/s}$ gives $Q$:",
        options: ["$0.020\\ \\mathrm{m^3/s}$", "$5.0\\ \\mathrm{m^3/s}$", "$0.005\\ \\mathrm{m^3/s}$", "Zero"],
        answer: 0,
        explanation: "$Q = Av = 0.020\\ \\mathrm{m^3/s}$."
      },
      {
        q: "Streamline crowding marks:",
        options: ["Slow flow", "Fast flow", "Zero pressure", "Solid walls"],
        answer: 1,
        explanation: "Continuity packs lines where $v$ runs high."
      }
    ]
  },
  {
    sectionId: "young-ch12-s5",
    readingTime: 7,
    intro: "Bernoulli trades pressure, height, and speed: $p + \\rho gy + \\frac{1}{2}\\rho v^2$ is constant along a streamline. This section derives it from work-energy and aims it at Venturis, lift, and efflux.",
    objectives: [
      "State Bernoulli $p_1+\\rho gy_1+\\frac{1}{2}\\rho v_1^2 = \\cdots$",
      "Derive it from work-energy on a fluid slug",
      "Solve Venturi, Torricelli, and lift problems"
    ],
    concepts: [
      {
        term: "Bernoulli equation",
        kind: "theorem",
        statement: "Ideal steady incompressible streamline: **$p + \\rho gy + \\frac{1}{2}\\rho v^2 =$ const**.",
        detail: "Fast flow means low pressure at fixed height — the Venturi suck."
      },
      {
        term: "Derivation sketch",
        kind: "theorem",
        statement: "Pressure work $(p_1-p_2)\\Delta V$ plus gravity $-\\rho g\\Delta V\\Delta y$ equals **$\\Delta(\\frac{1}{2}\\rho\\Delta V v^2)$**.",
        detail: "Divide by $\\Delta V$: Bernoulli — work-energy per unit volume."
      },
      {
        term: "Torricelli efflux",
        kind: "theorem",
        statement: "Tank hole at depth $h$: **$v = \\sqrt{2gh}$** — the spout matches free-fall speed.",
        detail: "$h = 4.0\\ \\mathrm{m}$: $v = 8.85\\ \\mathrm{m/s}$."
      },
      {
        term: "Venturi meter",
        kind: "method",
        statement: "Constriction speeds flow and **drops pressure**: $p_1-p_2 = \\frac{1}{2}\\rho(v_2^2-v_1^2)$ meters $Q$.",
        detail: "Water $v_1 = 1.0$, $v_2 = 4.0\\ \\mathrm{m/s}$: $\\Delta p = 7500\\ \\mathrm{Pa}$."
      },
      {
        term: "Lift and curveballs",
        kind: "insight",
        statement: "Faster air over a wing (or spinning ball) means **lower pressure above** — net push toward fast side.",
        detail: "Real wings need circulation plus angle of attack; Bernoulli alone is half the story."
      }
    ],
    figures: [
      {
        caption: "Venturi: narrow means fast ($A_1v_1 = A_2v_2$) and low pressure via Bernoulli",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venturi tube"><path d="M 60 70 L 250 70 L 300 95 L 420 95 L 470 70 L 660 70 L 660 120 L 470 120 L 420 95 L 300 95 L 250 120 L 60 120 Z" fill="none" stroke="currentColor" stroke-width="2"/><line x1="150" y1="70" x2="150" y2="30" stroke="currentColor" stroke-width="2"/><line x1="360" y1="95" x2="360" y2="30" stroke="currentColor" stroke-width="2"/><text x="150" y="22" font-size="11" text-anchor="middle" fill="currentColor">high p</text><text x="360" y="22" font-size="11" text-anchor="middle" fill="currentColor">low p</text><text x="360" y="170" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">v2 above v1, p2 below p1</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Venturi pressure drop",
        problem: "Water flows $1.0\\ \\mathrm{m/s}$ in $D = 6.0\\ \\mathrm{cm}$, $4.0\\ \\mathrm{m/s}$ in $d = 3.0\\ \\mathrm{cm}$ throat, level. Find $\\Delta p$.",
        steps: [
          { label: "Bernoulli", text: "$p_1 - p_2 = 0.5 \\times 1000 \\times (16-1) = 7500\\ \\mathrm{Pa}$." },
          { label: "Column", text: "$h = 7500/9800 = 0.765\\ \\mathrm{m}$ water manometer." },
          { label: "Direction", text: "Throat sucks — atomizers and carburetors exploit it." }
        ],
        result: "$7.5\\ \\mathrm{kPa}$ drop at the throat."
      },
      {
        title: "Draining tank",
        problem: "A $4.0\\ \\mathrm{m}$-deep open tank drains through a small hole. Exit speed?",
        steps: [
          { label: "Torricelli", text: "$v = \\sqrt{2 \\times 9.80 \\times 4.0} = 8.85\\ \\mathrm{m/s}$." },
          { label: "Top condition", text: "Large surface: $v_{\\mathrm{top}} \\approx 0$, both at $p_{\\mathrm{atm}}$." },
          { label: "Range", text: "Hole $1.0\\ \\mathrm{m}$ above ground: $t = 0.452\\ \\mathrm{s}$, range $4.0\\ \\mathrm{m}$." }
        ],
        result: "$8.85\\ \\mathrm{m/s}$ efflux."
      }
    ],
    keyTakeaways: [
      "Bernoulli banks pressure, height, and speed per volume.",
      "Narrow-fast-low is the Venturi signature.",
      "Efflux matches fall speed: $\\sqrt{2gh}$."
    ],
    quiz: [
      {
        q: "Bernoulli constant along a streamline is:",
        options: ["$p + \\rho gy + \\frac{1}{2}\\rho v^2$", "$p - \\rho v^2$ only", "$Av$ only", "Zero always"],
        answer: 0,
        explanation: "Work-energy per unit volume sums pressure, gravity, and kinetic terms."
      },
      {
        q: "Tank $4.0\\ \\mathrm{m}$ deep drains at about:",
        options: ["$39\\ \\mathrm{m/s}$", "$8.85\\ \\mathrm{m/s}$", "$4.0\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "$\\sqrt{2gh} = 8.85\\ \\mathrm{m/s}$."
      },
      {
        q: "Venturi throat shows:",
        options: ["High pressure, slow flow", "Low pressure, fast flow", "Zero velocity", "No change"],
        answer: 1,
        explanation: "Continuity speeds up; Bernoulli drops pressure to pay kinetic."
      }
    ]
  },
  {
    sectionId: "young-ch12-s6",
    readingTime: 5,
    intro: "Real fluids drag with viscosity and trip into turbulence past critical speeds. This section adds Poiseuille flow $Q = \\pi R^4\\Delta p/8\\eta L$, Stokes drag, and the Reynolds-number transition.",
    objectives: [
      "Define viscosity $\\eta$ and Poiseuille $R^4$ scaling",
      "Use Stokes $F = 6\\pi\\eta rv$ for spheres",
      "Classify laminar vs turbulent by Reynolds number"
    ],
    concepts: [
      {
        term: "Viscosity",
        kind: "definition",
        statement: "**Viscosity $\\eta$** ($\\mathrm{Pa\\cdot s}$) measures **shear drag**: water $10^{-3}$, air $1.8 \\times 10^{-5}$, honey ~$10$.",
        detail: "Cold oil thickens (higher $\\eta$); hot oil thins."
      },
      {
        term: "Poiseuille flow",
        kind: "theorem",
        statement: "Laminar pipe flow: **$Q = \\pi R^4\\Delta p/8\\eta L$** — radius to the fourth power rules.",
        detail: "Halving a vessel radius cuts flow $16$ times at fixed pressure — why plaque matters."
      },
      {
        term: "Stokes drag",
        kind: "theorem",
        statement: "Slow sphere: **$F = 6\\pi\\eta rv$**; settling balances it against net weight for terminal speed.",
        detail: "Millikan oil drops fall at microns per second — measurable $e$ from $v_t$."
      },
      {
        term: "Reynolds number",
        kind: "definition",
        statement: "**$Re = \\rho vD/\\eta$**: below ~$2000$ laminar pipe flow; above, turbulent.",
        detail: "Water at $1.0\\ \\mathrm{m/s}$ in $2.0\\ \\mathrm{cm}$: $Re = 20{,}000$ — fully turbulent."
      },
      {
        term: "Turbulence costs",
        kind: "insight",
        statement: "**Turbulence multiplies drag** ($\\propto v^2$) and kills Bernoulli accuracy — smooth and slow stays ideal.",
        detail: "Dimpled golf balls trip boundary layers deliberately to cut wake drag."
      }
    ],
    examples: [
      {
        title: "Plaque penalty",
        problem: "Artery radius narrows $10$%. How much must pressure rise to hold $Q$?",
        steps: [
          { label: "Scaling", text: "$Q \\propto R^4$: factor $0.90^4 = 0.656$." },
          { label: "Compensate", text: "$\\Delta p$ must rise $1/0.656 = 1.52$ times." },
          { label: "Moral", text: "Small plaque, $52$% more heart work — fourth-power punishment." }
        ],
        result: "$52$% higher driving pressure."
      },
      {
        title: "Settling sphere",
        problem: "A $r = 1.0\\ \\mathrm{mm}$ steel ball ($7800\\ \\mathrm{kg/m^3}$) settles in oil ($\\eta = 0.50$, $\\rho = 900$). Terminal $v$?",
        steps: [
          { label: "Net weight", text: "$V = 4.19 \\times 10^{-9}\\ \\mathrm{m^3}$; $F = V(6900) \\times 9.8 = 2.83 \\times 10^{-4}\\ \\mathrm{N}$." },
          { label: "Stokes", text: "$v = F/6\\pi\\eta r = 2.83 \\times 10^{-4}/9.42 \\times 10^{-3} = 0.0300\\ \\mathrm{m/s}$." },
          { label: "Check", text: "Slow enough for Stokes ($Re \\ll 1$) — consistent." }
        ],
        result: "$3.0\\ \\mathrm{cm/s}$ settling speed."
      }
    ],
    keyTakeaways: [
      "Viscosity prices shear; $R^4$ prices pipe radius.",
      "Stokes balances drag against weight for $v_t$.",
      "$Re$ forecasts laminar calm versus turbulent churn."
    ],
    quiz: [
      {
        q: "Halving pipe radius at fixed $\\Delta p$ cuts $Q$ by:",
        options: ["Half", "Factor $16$", "Double", "Zero change"],
        answer: 1,
        explanation: "$Q \\propto R^4$: $(1/2)^4 = 1/16$."
      },
      {
        q: "Stokes drag on a sphere is:",
        options: ["$6\\pi\\eta rv$", "$\\rho Av^2$", "$mg$ always", "Zero"],
        answer: 0,
        explanation: "Linear in $\\eta$, $r$, $v$ for slow viscous flow."
      },
      {
        q: "Pipe flow turns turbulent above about:",
        options: ["$Re = 2$", "$Re \\approx 2000$", "$Re = 10^{12}$", "Any $Re$"],
        answer: 1,
        explanation: "Empirical transition for smooth pipes."
      }
    ]
  }
];
