import type { SectionContent } from '../library'

// ============================================================================
// Materials Science & Metallurgy + Metrology & Quality Control top-up
// (Task 5-i) — authored SectionContent blocks for the two mechanical-subject
// flagship chapters: me-e-materials (s1–s10) and me-e-metrology (s1–s6).
// Integrated by the orchestrator via source.ts + scripts/serialize-content.ts.
// ============================================================================

export const materialsMetroTopupContent: SectionContent[] = [
  // ============================================================ materials 1.1
  {
    sectionId: "me-e-materials-s1",
    readingTime: 10,
    intro: "Every property a metal shows — density, stiffness, ductility, even how it fails in the cold — traces back to how its atoms stack and where the stacking goes wrong. This section computes the three classic unit cells from first principles, then tours the defect zoo from single vacancies to grain boundaries. The packing factors are not trivia: they explain why FCC copper and aluminium are dense and formable while BCC iron embrittles when it gets cold.",
    objectives: [
      "Compute lattice parameter, atoms per cell, coordination number and atomic packing factor for SC, BCC, FCC and ideal HCP cells",
      "Predict the theoretical density of a pure metal from its crystal structure and atomic radius",
      "Classify defects into point, line, surface and volume classes with engineering examples of each",
      "State the Burgers vector for BCC, FCC and HCP metals and distinguish edge from screw dislocations",
    ],
    concepts: [
      {
        term: "Atomic packing factor (APF)",
        kind: "definition",
        statement: "**APF** is the fraction of the unit-cell volume actually occupied by atoms, treating them as hard spheres touching along the close-packed direction: $\\text{APF} = \\frac{N \\cdot \\frac{4}{3}\\pi r^3}{a^3}$. Works out to **0.52 (SC), 0.68 (BCC), 0.74 (FCC), 0.74 (ideal HCP)** — and 0.74 is the theoretical maximum for equal spheres.",
        detail: "For BCC: 2 atoms per cell (8 corners x 1/8 + 1 body centre) and atoms touch along the body diagonal, so $4r = \\sqrt{3}a$, giving $a = \\frac{4r}{\\sqrt{3}}$ and APF = $\\pi\\sqrt{3}/8$ = 0.680. For FCC: 4 atoms per cell, contact along the face diagonal, $4r = \\sqrt{2}a$, so $a = 2\\sqrt{2}\\,r$ and APF = 0.740.",
      },
      {
        term: "Cell census: atoms, neighbours, Burgers vector",
        kind: "notation",
        statement: "| Cell | Atoms/cell | CN | a vs r | Burgers vector |\n|---|---|---|---|---|\n| SC | 1 | 6 | $2r$ | rarely slips |\n| BCC | 2 | 8 | $4r/\\sqrt{3}$ | $\\frac{a}{2}\\langle 111\\rangle$ |\n| FCC | 4 | 12 | $2\\sqrt{2}r$ | $\\frac{a}{2}\\langle 110\\rangle$ |\n| HCP | 6 | 12 | $a = 2r$, ideal $c/a = 1.633$ | $\\frac{a}{3}\\langle 11\\bar{2}0\\rangle$ |",
        detail: "The HCP cell holds 12 corner atoms x 1/6 + 2 face-centre atoms x 1/2 + 3 fully interior atoms = 6. The 1.633 c/a ratio is what makes HCP truly close-packed; real HCP metals deviate (zinc 1.86, magnesium 1.62, titanium 1.59).",
      },
      {
        term: "Theoretical density from the cell",
        kind: "method",
        statement: "$\\rho = \\frac{nA}{V_c N_A}$ — atoms per cell n, atomic mass A, cell volume $V_c = a^3$, Avogadro $N_A = 6.022 \\times 10^{23}$. Compute a from r using the contact geometry, then evaluate.",
        detail: "This is how crystallographers first proved BCC iron: the calculated density for 2 atoms in a = 0.2866 nm (r = 0.124 nm) gives about 7.9 g/cm³, matching measured iron. For Cu (FCC, r = 0.128 nm, A = 63.5) the same recipe gives 8.90 g/cm³.",
      },
      {
        term: "Point defects",
        kind: "definition",
        statement: "**Zero-dimensional defects**: the **vacancy** (missing atom — the only defect present at equilibrium in significant numbers, population $N_v = N e^{-Q_v/kT}$), the **self-interstitial**, **substitutional** and **interstitial impurity** atoms. In ionic crystals: a **Frenkel defect** is a cation vacancy + the same cation parked in an interstitial site; a **Schottky defect** is a charge-balanced pair of cation and anion vacancies.",
        detail: "Vacancies are the carrier of diffusion: an atom can only jump into an empty neighbour site, so substitutional diffusivity scales with the vacancy population and vanishes at 0 K. Interstitial carbon in iron (max 0.022 wt% in ferrite) is the whole reason steel can be hardened.",
      },
      {
        term: "Line defects: edge and screw dislocations",
        kind: "insight",
        statement: "A **dislocation** is a line defect bounding a slipped region; its identity is the **Burgers vector b**, the closure failure of a circuit around the line. In an **edge** dislocation b is **perpendicular** to the line (extra half-plane of atoms); in a **screw** dislocation b is **parallel** to the line (spiral ramp of atoms); real ones are mixed. Energy per unit length scales as $E \\approx \\alpha G b^2$ with $\\alpha$ near 0.5-1.0.",
        detail: "The $b^2$ scaling has a consequence: dislocations dissociate into smaller-b partials in FCC ($\\frac{a}{2}\\langle 110\\rangle \\to 2 \\times \\frac{a}{6}\\langle 112\\rangle$, energy dropping from $b^2$ to $2(b/\\sqrt{3})^2 = \\frac{2}{3}b^2$), which is why FCC slip is so easy and planar.",
      },
      {
        term: "Surface and volume defects",
        kind: "definition",
        statement: "**Surface (2-D) defects**: **grain boundaries** (disordered regions ~2-3 atoms thick between misoriented crystals — always the chemical weak point, which is why they etch, corrode and segregate), **low-angle tilt boundaries** (stacks of edge dislocations, angle $\\theta \\approx b/D$), **twin boundaries** and **stacking faults**. **Volume (3-D) defects**: pores, inclusions, cracks — unavoidable in castings and powder parts.",
        detail: "Small-angle boundaries are the classic proof of dislocation theory: measured boundary energy grows linearly with tilt angle exactly as the edge-dislocation-wall model predicts, up to roughly 10 degrees.",
      },
    ],
    examples: [
      {
        title: "Density of copper from the FCC cell",
        problem: "Copper is FCC with atomic radius 0.128 nm and atomic mass 63.5 g/mol. Predict its density.",
        steps: [
          { label: "Lattice parameter", text: "FCC atoms touch along the face diagonal: $a = 2\\sqrt{2}r = 2(1.414)(0.128) = 0.362$ nm." },
          { label: "Cell volume", text: "$V_c = a^3 = (0.362 \\text{ nm})^3 = 4.74 \\times 10^{-23}$ cm³." },
          { label: "Mass in cell", text: "FCC has n = 4 atoms: mass = $4 \\times 63.5 / N_A$ = $2.54 \\times 10^2 / 6.022 \\times 10^{23}$ = $4.22 \\times 10^{-22}$ g." },
          { label: "Density", text: "$\\rho = 4.22 \\times 10^{-22} / 4.74 \\times 10^{-23} = 8.90$ g/cm³." },
        ],
        result: "8.90 g/cm³ — the handbook value is 8.96 g/cm³, the small deficit being vacancies, impurities and grain-boundary free volume.",
      },
      {
        title: "Proving the packing factor for BCC",
        problem: "Show from geometry that the BCC atomic packing factor is 0.68.",
        steps: [
          { label: "Atoms per cell", text: "Corners: $8 \\times \\frac{1}{8} = 1$. Body centre: 1. Total n = 2." },
          { label: "Contact geometry", text: "Body-centre atom touches the corner atoms along the **body diagonal**, which spans $\\sqrt{3}a$ and contains 4 atomic radii: $4r = \\sqrt{3}a \\Rightarrow a = \\frac{4r}{\\sqrt{3}}$." },
          { label: "Ratio", text: "$\\text{APF} = \\frac{2 \\cdot \\frac{4}{3}\\pi r^3}{(4r/\\sqrt{3})^3} = \\frac{\\frac{8\\pi}{3}r^3}{\\frac{64}{3\\sqrt{3}}r^3} = \\frac{\\pi\\sqrt{3}}{8} = 0.680$." },
        ],
        result: "BCC packs 68% — 6 points behind FCC/HCP at 74%, which is one reason austenite (FCC) is denser than ferrite (BCC) in steel, and quenching BCC-to-nothing introduces distortion.",
      },
    ],
    keyTakeaways: [
      "APF: SC 0.52, BCC 0.68, FCC and ideal HCP 0.74 — 74% is the hard-sphere ceiling; contact geometry ($4r = \\sqrt{3}a$ in BCC, $4r = \\sqrt{2}a$ in FCC) converts radius to lattice parameter.",
      "Theoretical density follows from $\\rho = nA/(V_c N_A)$; getting 7.9 g/cm³ for iron is direct evidence for the BCC cell.",
      "Vacancies are equilibrium defects whose population explodes exponentially with temperature; they mediate diffusion.",
      "A dislocation's Burgers vector is perpendicular to the line for edge, parallel for screw, and its energy scales as $Gb^2$ — small b wins.",
      "Grain boundaries are 2-3 atom thick disordered skins: they strengthen (Hall-Petch), but they etch, corrode and creep first.",
    ],
    quiz: [
      {
        q: "Compute the atomic packing factor of a BCC metal.",
        options: ["0.52", "0.68", "0.74", "0.81"],
        answer: 1,
        explanation: "With 2 atoms/cell and $a = 4r/\\sqrt{3}$, APF = $\\pi\\sqrt{3}/8$ = 0.680. 0.52 is the simple-cubic value and 0.74 belongs to FCC/HCP — both classic mix-ups.",
      },
      {
        q: "Alpha iron is BCC with atomic radius 0.124 nm. What is its lattice parameter?",
        options: ["0.248 nm", "0.286 nm", "0.351 nm", "0.404 nm"],
        answer: 1,
        explanation: "$a = 4r/\\sqrt{3} = 4(0.124)/1.732 = 0.286$ nm. 0.248 nm = 2r (simple cubic), 0.351 nm = $2\\sqrt{2}r$ (the FCC relation applied to the same radius).",
      },
      {
        q: "How many atoms belong to the HCP unit cell?",
        options: ["2", "4", "6", "8"],
        answer: 2,
        explanation: "Twelve corner atoms contribute $12 \\times \\frac{1}{6} = 2$, two face-centre atoms contribute $2 \\times \\frac{1}{2} = 1$, and three interior atoms count fully: 2 + 1 + 3 = 6.",
      },
      {
        q: "The Burgers vector of the slip dislocation in an FCC metal is:",
        options: ["$a\\langle 100\\rangle$", "$\\frac{a}{2}\\langle 110\\rangle$", "$\\frac{a}{2}\\langle 111\\rangle$", "$\\frac{a}{3}\\langle 11\\bar{2}0\\rangle$"],
        answer: 1,
        explanation: "FCC slip is $\\frac{a}{2}\\langle 110\\rangle$ on {111}. $\\frac{a}{2}\\langle 111\\rangle$ is the BCC vector and $\\frac{a}{3}\\langle 11\\bar{2}0\\rangle$ the HCP basal vector — remembering which lattice owns which shortest lattice vector is the whole game.",
      },
      {
        q: "A cation leaves its lattice site and comes to rest in a nearby interstitial position. The defect pair left behind is called:",
        options: ["a Schottky defect", "a Frenkel defect", "an edge dislocation", "a stacking fault"],
        answer: 1,
        explanation: "Vacancy + interstitial of the **same ion** = Frenkel. A Schottky defect removes a cation-anion pair to the surface, keeping the crystal charge-neutral without any interstitial.",
      },
      {
        q: "In a screw dislocation, the Burgers vector is:",
        options: ["perpendicular to the dislocation line", "parallel to the dislocation line", "always at 45 degrees to the line", "undefined — screw dislocations have no Burgers vector"],
        answer: 1,
        explanation: "Screw geometry is a spiral ramp: circling the line advances you one b **along** the line. Perpendicular b is the edge-dislocation signature (extra half-plane).",
      },
    ],
  },

  // ============================================================ materials 1.2
  {
    sectionId: "me-e-materials-s2",
    readingTime: 10,
    prerequisites: ["Crystal structure of BCC/FCC iron (me-e-materials-s1)"],
    intro: "A phase diagram is a map of what microstructure nature allows at each temperature and composition — and the lever rule is the tool for reading off how much of each phase you get. This section works a real binary map (lead-tin) numerically, then follows eutectoid steel through its TTT diagram, where the difference between a rail and a razor blade is simply how fast you cool.",
    objectives: [
      "Read binary phase diagrams: liquidus, solidus, solvus, tie-lines and three-phase invariant points",
      "Apply the lever rule to compute phase and microconstituent fractions on the Pb-Sn system",
      "Recall the invariant points of the Fe-C diagram (eutectic 4.30 wt% at 1147 °C, eutectoid 0.76 wt% at 727 °C)",
      "Predict the product of isothermal transformation of eutectoid austenite at any holding temperature from the TTT curve",
    ],
    concepts: [
      {
        term: "Diagram anatomy and the condensed phase rule",
        kind: "definition",
        statement: "**Liquidus** — first solid appears on cooling; **solidus** — last liquid vanishes; **solvus** — solubility limit of a solid phase. In a two-phase field a horizontal **tie-line** connects the two phase compositions at that temperature. The condensed (constant-pressure) Gibbs rule $F = C - P + 1$ explains every flat line: three phases coexist ($P = 3$) with $C = 2$ forces $F = 0$, an invariant temperature.",
        detail: "The composition read at each tie-line end is the phase composition — not the overall composition, which only tells you how much of each phase to mix via the lever rule.",
      },
      {
        term: "Lever rule",
        kind: "method",
        statement: "For overall composition $C_0$ between phase compositions $C_\\alpha$ and $C_\\beta$ at the tie-line ends: $W_\\alpha = \\frac{C_\\beta - C_0}{C_\\beta - C_\\alpha}$ and $W_\\beta = \\frac{C_0 - C_\\alpha}{C_\\beta - C_\\alpha}$. The phase sitting **farther** from $C_0$ on the tie-line gets the **larger** fraction — the fulcrum is at $C_0$.",
        detail: "The same mechanics works for microconstituents: just above the eutectic, tie-line between $C_\\alpha$ and the eutectic liquid $C_E$ gives primary alpha versus eutectic-mixture fractions.",
      },
      {
        term: "The Pb-Sn eutectic system",
        kind: "notation",
        statement: "**Eutectic point: 61.9 wt% Sn at 183 °C.** Alpha (Pb-rich) solubility at 183 °C: 18.3 wt% Sn; beta (Sn-rich) at 183 °C: 97.8 wt% Sn. Eutectic reaction: $L \\to \\alpha + \\beta$. Solders live near the eutectic because it melts low and solidifies sharply.",
        detail: "Numbers worth memorising because they make every lever-rule computation concrete: for $C_0$ = 40 wt% Sn just below 183 °C the beta arm is (40 - 18.3)/(97.8 - 18.3) = 0.273 — 27% beta, 73% alpha.",
      },
      {
        term: "Invariant reactions vocabulary",
        kind: "definition",
        statement: "**Eutectic** $L \\to \\alpha + \\beta$; **eutectoid** $\\gamma \\to \\alpha + \\text{Fe}_3\\text{C}$ (steel, 0.76 wt% C at 727 °C); **peritectic** $L + \\delta \\to \\gamma$ (Fe-C, 0.17 wt% C at 1493 °C); **monotectic** $L_1 \\to L_2 + \\alpha$ (liquid immiscibility); **peritectoid** $\\alpha + \\beta \\to \\gamma$ (two solids react). The word ending tells you the inputs: -tectic involves a liquid, -tectoid all solids.",
        detail: "In the Fe-C diagram the other key compositions: ferrite dissolves at most 0.022 wt% C (at 727 °C), austenite at most 2.14 wt% (at 1147 °C), cementite is 6.67 wt% C, and the eutectic liquid at 4.30 wt% C freezes into ledeburite in cast irons.",
      },
      {
        term: "TTT curves of eutectoid steel",
        kind: "insight",
        statement: "The isothermal transformation diagram for 0.76 wt% C austenite is a pair of C-curves on a temperature-time plot. Holding **just below 727 °C** gives coarse pearlite; near 575 °C fine pearlite; ~550-400 °C upper bainite (feathery); ~400-250 °C lower bainite (fine acicular); below $M_s$ (about 220 °C for this steel) martensite forms **athermally** — by time-independent shear, only as the temperature drops.",
        detail: "The **nose** near 540 °C is where transformation starts fastest (about 1 s): to harden a part you must cool past the nose before the clock runs out — that minimum rate is the critical cooling rate. Diffusion-controlled products (pearlite, bainite) need time; martensite needs only temperature.",
      },
      {
        term: "Hardness ladder of eutectoid products",
        kind: "law",
        statement: "Hardness increases in the order **spheroidite < coarse pearlite < fine pearlite < upper bainite < lower bainite < martensite**, because the ferrite/cementite interlamellar spacing (or carbide size) shrinks — the finer the spacing, the more boundaries block dislocations. Toughness peaks in between: fine pearlite is tough, martensite is hardest but brittle until tempered.",
        detail: "Spheroidite — cementite balls in ferrite, produced by long holding just below the eutectoid — is the softest, most machinable form a high-carbon steel can take.",
      },
    ],
    examples: [
      {
        title: "Lever rule on a 40 wt% Sn solder",
        problem: "A Pb-40 wt% Sn alloy is equilibrated just below 183 °C. Compute (a) the total alpha and beta fractions, and (b) the fraction of the microstructure that is eutectic mixture.",
        steps: [
          { label: "Tie-line", text: "Just below 183 °C the ends are $C_\\alpha$ = 18.3 and $C_\\beta$ = 97.8 wt% Sn, with $C_0$ = 40 in between." },
          { label: "(a) Beta fraction", text: "$W_\\beta = \\frac{C_0 - C_\\alpha}{C_\\beta - C_\\alpha} = \\frac{40 - 18.3}{97.8 - 18.3} = \\frac{21.7}{79.5} = 0.273$." },
          { label: "(a) Alpha fraction", text: "$W_\\alpha = 1 - 0.273 = 0.727$, or by the mirrored arm $\\frac{97.8 - 40}{79.5} = 0.727$." },
          { label: "(b) Just above 183 °C", text: "The remaining liquid has the eutectic composition $C_E$ = 61.9: $W_L = \\frac{C_0 - C_\\alpha}{C_E - C_\\alpha} = \\frac{40 - 18.3}{61.9 - 18.3} = \\frac{21.7}{43.6} = 0.498$." },
          { label: "Interpretation", text: "On crossing 183 °C that 49.8% liquid transforms to 49.8% eutectic (fine alternating alpha+beta); the 50.2% primary alpha that formed earlier simply cools through unchanged." },
        ],
        result: "27% beta / 73% alpha overall; the as-cast microstructure is about 50% primary alpha + 50% eutectic mixture.",
      },
      {
        title: "Choosing the holding temperature",
        problem: "A eutectoid steel is austenitised at 800 °C, then held isothermally at (i) 650 °C, (ii) 300 °C until transformation is complete, and in (iii) quenched to 150 °C. Name each product and rank the hardness.",
        steps: [
          { label: "(i) 650 °C", text: "Between 575 and 727 °C — coarse pearlite (thick cementite lamellae, slow diffusion-limited growth). Relatively soft, tough." },
          { label: "(ii) 300 °C", text: "Lower bainite range (400-250 °C): fine acicular structure with thin carbides on shear planes; nearly as hard as martensite but far tougher." },
          { label: "(iii) 150 °C", text: "Below $M_s \\approx 220$ °C: martensite (BCT supersaturated with carbon), hardest and brittle; forms athermally, fraction set by temperature not time." },
          { label: "Ranking", text: "Hardness: martensite > lower bainite > coarse pearlite. But for toughness at useful strength, lower bainite is often the engineered choice." },
        ],
        result: "Coarse pearlite, lower bainite, martensite — hardness in that ascending order.",
      },
    ],
    keyTakeaways: [
      "Tie-line ends give phase compositions; the lever rule gives phase amounts: $W_\\alpha = (C_\\beta - C_0)/(C_\\beta - C_\\alpha)$ — the far phase is the heavy one.",
      "Pb-Sn eutectic: 61.9 wt% Sn at 183 °C with terminal solubilities 18.3 / 97.8 wt% Sn — enough numbers to solve any solder problem.",
      "Fe-C invariants: eutectoid 0.76 wt% C at 727 °C, eutectic 4.30 wt% C at 1147 °C, peritectic 0.17 wt% at 1493 °C; cementite 6.67 wt% C.",
      "TTT products by holding temperature: coarse pearlite just below 727 °C, fine pearlite ~575 °C, upper bainite 550-400 °C, lower bainite 400-250 °C, martensite below $M_s$.",
      "Martensite is diffusionless and athermal — it needs low temperature, not time; everything else on the TTT diagram is diffusion racing the clock.",
    ],
    quiz: [
      {
        q: "For a Pb-30 wt% Sn alloy equilibrated just below 183 °C (solubilities: alpha 18.3, beta 97.8 wt% Sn), the mass fraction of alpha is closest to:",
        options: ["0.70", "0.78", "0.85", "0.93"],
        answer: 2,
        explanation: "$W_\\alpha = \\frac{97.8 - 30}{97.8 - 18.3} = \\frac{67.8}{79.5} = 0.853$. The common error is inverting the arms (which gives 0.147 ≈ 0.15, not listed here but be careful) or averaging the solubilities.",
      },
      {
        q: "In the Pb-40 wt% Sn alloy of the worked example, the fraction of the final microstructure that is eutectic mixture is about:",
        options: ["0.30", "0.50", "0.62", "0.78"],
        answer: 1,
        explanation: "Just above 183 °C, $W_L = (40 - 18.3)/(61.9 - 18.3) = 0.498$, and all of that liquid freezes as eutectic. Distractors come from using the beta solubility 97.8 instead of the eutectic 61.9 in the arm.",
      },
      {
        q: "The eutectoid reaction in the iron-carbon system occurs at:",
        options: ["0.76 wt% C and 727 °C", "4.30 wt% C and 1147 °C", "2.14 wt% C and 1147 °C", "0.022 wt% C and 723 °C"],
        answer: 0,
        explanation: "Austenite of 0.76 wt% C decomposes to ferrite (0.022 wt% C) + cementite (6.67 wt% C) at 727 °C. The 4.30 wt% / 1147 °C point is the eutectic; 2.14 wt% is the maximum carbon solubility in austenite.",
      },
      {
        q: "Austenitised eutectoid steel is quenched to 300 °C and held until transformation completes. The product is:",
        options: ["coarse pearlite", "upper bainite", "lower bainite", "martensite"],
        answer: 2,
        explanation: "300 °C sits in the 400-250 °C window of the TTT diagram — lower bainite, fine carbides in acicular ferrite. Upper bainite forms 550-400 °C; pearlite needs to be nearer 727 °C; martensite requires dropping below $M_s \\approx 220$ °C.",
      },
      {
        q: "Which transformation in steel proceeds without any diffusion?",
        options: ["pearlite", "bainite", "martensite", "spheroidite"],
        answer: 2,
        explanation: "Martensite is a shear of the FCC lattice to BCT with every carbon atom trapped where it sat — composition-invariant and time-independent. Pearlite, bainite and spheroidite are all cementite-precipitating, diffusion-controlled products.",
      },
      {
        q: "While quenching eutectoid steel, martensite starts to form at roughly:",
        options: ["727 °C (the eutectoid temperature)", "about 220 °C", "about 540 °C (the nose of the C-curve)", "only below room temperature"],
        answer: 1,
        explanation: "$M_s$ for plain eutectoid steel is about 220 °C, with $M_f$ below it (retained austenite persists if the quench stops early). 540 °C is where diffusion-controlled transformation is fastest — the temperature you must race past.",
      },
    ],
  },

  // ============================================================ materials 1.3
  {
    sectionId: "me-e-materials-s3",
    readingTime: 9,
    intro: "A tensile test condenses a material's whole mechanical personality into one curve — and most exam-and-workshop questions live on four landmarks of that curve. This section pins down engineering versus true stress-strain, the hardness scales and how they talk to each other, the Charpy test's blunt verdict on toughness, and the S-N curve's message about fatigue.",
    objectives: [
      "Identify proportional limit, yield point, UTS, necking and fracture on an engineering stress-strain curve",
      "Convert between engineering and true stress/strain and compute modulus of resilience",
      "Relate Brinell hardness to tensile strength for steels and switch scales intelligently",
      "Interpret Charpy impact energy, ductile-brittle transition and S-N (fatigue) behaviour",
    ],
    concepts: [
      {
        term: "Landmarks of the tensile curve",
        kind: "definition",
        statement: "**Proportional limit** — Hooke's law ends; **elastic limit / yield strength** — permanent deformation begins (0.2% offset when there is no sharp knee; low-carbon steel instead shows an **upper and lower yield point** with a yield-point elongation plateau); **UTS** — the load maximum, where necking starts in ductile metals; **fracture** — after necking thins the gauge section. Ductility is reported as % elongation and % reduction of area.",
        detail: "Engineering stress uses the original area throughout: $\\sigma = F/A_0$. Because the area shrinks, the true load-bearing capacity keeps rising past UTS even as the engineering curve falls.",
      },
      {
        term: "True versus engineering",
        kind: "method",
        statement: "Up to necking: $\\sigma_T = \\sigma(1 + \\epsilon)$ and $\\epsilon_T = \\ln(1 + \\epsilon)$. The necking point obeys the Considere criterion $\\frac{d\\sigma_T}{d\\epsilon_T} = \\sigma_T$. Modulus of resilience (elastic energy density) is $U_r = \\frac{\\sigma_y^2}{2E}$ — a spring-material figure of merit.",
        detail: "Example: at engineering strain 0.20, true strain is $\\ln 1.2 = 0.182$ — true strain is always the smaller number for tension, because it accumulates on the shrinking length.",
      },
      {
        term: "Hardness: scales and conversions",
        kind: "law",
        statement: "**Brinell (HB)**: 10 mm ball, heavy load — good for coarse microstructures. **Rockwell B (HRB)**: 1.588 mm ball for soft metals; **Rockwell C (HRC)**: diamond cone for hardened steel. For steels, a workhorse link between tests: **$\\sigma_{UTS} \\text{(MPa)} \\approx 3.45 \\times \\text{HB}$** (e.g., HB 180 → about 620 MPa). The HRB scale saturates near 100 (≈ HB 240); harder than that you must move to HRC.",
        detail: "Vickers (HV) uses a diamond pyramid and works across the whole range, with HV ≈ HB up to about 300. Conversions are empirical (tabulated, composition-dependent) — treat them as estimates, not identities.",
      },
      {
        term: "Impact energy and the ductile-brittle transition",
        kind: "definition",
        statement: "The **Charpy test** swings a pendulum through a 10 x 10 x 55 mm notched bar; the height loss reports absorbed energy in joules. BCC metals (and many polymers/ceramics) show a **ductile-brittle transition temperature (DBTT)** — 100+ J above it, single-digit J below it, over a narrow band. FCC metals (copper, aluminium, austenitic steel) have **no** DBTT and stay tough to cryogenic temperatures.",
        detail: "Ferritic steels embrittle as neutron irradiation and cold work raise the DBTT — a core concern for pressure-vessel steels, which are specified to be tough at their minimum service temperature.",
      },
      {
        term: "Fatigue and the S-N curve",
        kind: "insight",
        statement: "Plotting stress amplitude versus cycles-to-failure: **ferrous alloys show an endurance (fatigue) limit around 0.4-0.5 $\\sigma_{UTS}$** below which life is effectively infinite (taken beyond $10^6$-$10^7$ cycles); **aluminium alloys have no true limit** — the curve keeps falling and design uses a finite-life strength at, say, $5 \\times 10^8$ cycles. Mean stress enters through Goodman ($\\sigma_a = \\sigma_e (1 - \\sigma_m/\\sigma_u)$) or the more conservative Soderberg (yield replaces UTS).",
        detail: "Most fatigue failures start at stress concentrations, surface finish defects or corrosion pits — the S-N curve assumes a polished laboratory specimen, and real parts pay a knock-down factor for notch sensitivity $q = (K_f - 1)/(K_t - 1)$.",
      },
    ],
    examples: [
      {
        title: "Reading a tensile test record",
        problem: "A steel round of diameter 10 mm and gauge length 50 mm gives: load at yield 25.1 kN, maximum load 31.4 kN, fracture at 24 kN after 12.5 mm extension. Compute yield strength, UTS and % elongation.",
        steps: [
          { label: "Area", text: "$A_0 = \\frac{\\pi}{4}(10)^2 = 78.5$ mm²." },
          { label: "Yield strength", text: "$\\sigma_y = 25100 / 78.5 = 320$ MPa." },
          { label: "UTS", text: "$\\sigma_u = 31400 / 78.5 = 400$ MPa (this is where necking begins)." },
          { label: "Elongation", text: "$\\%\\text{EL} = 12.5 / 50 = 25\\%$ — a comfortably ductile steel." },
          { label: "Cross-check by hardness", text: "If this steel measured HB 180, the estimate $3.45 \\times 180 = 621$ MPa would **not** match — a warning that the bar may not be the steel you think, or the test was on a harder grade." },
        ],
        result: "Yield 320 MPa, UTS 400 MPa, 25% elongation; hardness cross-checks are cheap insurance against mixed-up stock.",
      },
    ],
    keyTakeaways: [
      "Engineering stress uses original area: $\\sigma = F/A_0$; true values follow $\\sigma_T = \\sigma(1+\\epsilon)$, $\\epsilon_T = \\ln(1+\\epsilon)$ until necking.",
      "Necking starts at UTS, exactly where the Considere condition $d\\sigma_T/d\\epsilon_T = \\sigma_T$ is met.",
      "For steels, $\\sigma_{UTS} \\approx 3.45\\,\\text{HB}$ MPa; HRB saturates near 100 (≈ HB 240), switch to HRC.",
      "Charpy energy exposes the DBTT of BCC metals; FCC metals have none — the classic material-selection argument for cryogenic service.",
      "Steels show an endurance limit near 0.4-0.5 UTS; aluminium does not, so its fatigue design is always finite-life.",
    ],
    quiz: [
      {
        q: "A 10 mm diameter tensile bar carries a maximum load of 31.4 kN. Its ultimate tensile strength is:",
        options: ["40 MPa", "400 MPa", "628 MPa", "3.14 GPa"],
        answer: 1,
        explanation: "$A_0 = 78.5$ mm², so $\\sigma_u = 31400/78.5 = 400$ MPa. 628 MPa results from forgetting to square half the diameter (using $d = 10$ as the radius, i.e., area 50 mm²... or 3.14 GPa from dropping the area division entirely).",
      },
      {
        q: "A steel part measures HB 180. The best tensile-strength estimate is:",
        options: ["about 180 MPa", "about 350 MPa", "about 620 MPa", "about 1.8 GPa"],
        answer: 2,
        explanation: "$3.45 \\times 180 = 621$ MPa. 180 MPa would be a naive 1:1 hardness-strength equality and 350 MPa mixes in the yield-strength rule of thumb instead.",
      },
      {
        q: "A specimen stretched to an engineering strain of 0.20 has a true strain of:",
        options: ["0.182", "0.223", "0.200", "0.912"],
        answer: 0,
        explanation: "$\\epsilon_T = \\ln(1 + 0.20) = \\ln 1.2 = 0.182$ — always smaller than the engineering value in tension, since it integrates on the current length. 0.223 is $\\ln 1.25$ (strain of 0.25).",
      },
      {
        q: "A quality inspector reads about HB 240 on a steel component and wants a Rockwell number. What is the correct move?",
        options: ["Use HRB — it covers all hardness values", "Switch to the HRC scale", "Rockwell cannot measure steel", "Convert HB to Mohs first"],
        answer: 1,
        explanation: "HRB saturates near 100 at about HB 240; from there upward the diamond-cone HRC scale is the standard choice. This is exactly why hardened parts are specified in HRC, soft ones in HRB.",
      },
      {
        q: "Charpy tests on a ferritic steel give 120 J at +40 °C but only 8 J at -100 °C. The explanation is:",
        options: ["the machine was not calibrated at low temperature", "the steel crossed its ductile-brittle transition temperature", "cold work accumulated between the tests", "notch sensitivity decreases with temperature"],
        answer: 1,
        explanation: "BCC iron's yield strength rises sharply as temperature drops until it overtakes cleavage resistance — the DBTT. An FCC metal like copper or aluminium would show no such cliff, which is the practical fingerprint of the crystal class.",
      },
      {
        q: "A steel with UTS 800 MPa is loaded in fully reversed bending. A reasonable first estimate of its endurance limit is:",
        options: ["about 800 MPa", "about 400 MPa", "about 130 MPa", "there is no endurance limit in steel"],
        answer: 1,
        explanation: "Endurance limit ≈ 0.5 UTS = 400 MPa for a polished lab specimen; real parts with notches and surface finish run lower. 'No endurance limit' is the aluminium story, not the steel one.",
      },
    ],
  },

  // ============================================================ materials 1.4
  {
    sectionId: "me-e-materials-s4",
    readingTime: 8,
    intro: "Engineering alloys are named phases doing engineered jobs: ferrite for ductility, cementite for wear, austenite for corrosion resistance, graphite for damping. This section is the field guide — the Fe-C menagerie, the four stainless families, the copper and aluminium workhorses, and the Greek-letter naming convention that keeps them all straight.",
    objectives: [
      "Recall composition limits and roles of ferrite, austenite, cementite, pearlite and martensite in steels",
      "Distinguish the austenitic, ferritic, martensitic and duplex stainless families by structure and use",
      "Identify principal copper alloys (brasses, bronzes, cupronickels) and wrought aluminium series by alloying element",
      "Apply phase-naming conventions (terminal solid solutions versus intermetallic compounds)",
    ],
    concepts: [
      {
        term: "The Fe-C menagerie",
        kind: "definition",
        statement: "**Ferrite (alpha)** — BCC, dissolves at most 0.022 wt% C, soft and ductile, magnetic. **Austenite (gamma)** — FCC, up to 2.14 wt% C at 1147 °C, formable, non-magnetic (the hot-working phase). **Cementite (Fe3C)** — 6.67 wt% C, hard, brittle, metastable. **Pearlite** — alternating lamellae of ferrite + cementite from the eutectoid. **Martensite** — BCT supersaturated carbon, the hard quenched phase. Below 2.14 wt% C it is steel; 2.11-4.3 wt% and beyond is cast iron territory.",
        detail: "In cast irons the eutectic product is **ledeburite** (austenite + cementite); graphite morphologies then set the family — flakes (grey), spheres (ductile, via magnesium inoculation), tempered aggregates (malleable).",
      },
      {
        term: "Stainless steel families",
        kind: "insight",
        statement: "All stainless depends on >10.5% Cr forming a passive oxide film. **Austenitic (304 = 18Cr-8Ni, 316 adds 2-3 Mo)**: FCC, non-magnetic, excellent cryogenic toughness and weldability, work-hardening but **not** hardenable by heat treatment. **Ferritic (430 ≈ 17Cr)**: BCC, magnetic, cheaper, moderate corrosion resistance. **Martensitic (410/420)**: higher carbon, **heat-treatable to high hardness** — knife blades and turbine parts; magnetic. **Duplex**: ~50/50 austenite + ferrite, roughly double the yield strength, chloride-resistant.",
        detail: "Molybdenum in 316 is the pitting-resistance element — the standard upgrade for marine and chloride service. A magnet is a surprisingly useful alloy-sorting tool: austenitic sticks only weakly (cold work can induce slight magnetism), the other three families stick firmly.",
      },
      {
        term: "Copper alloys",
        kind: "definition",
        statement: "**Brass = Cu-Zn**: cartridge brass 70/30 is single-phase alpha and deep-draws superbly; past ~40% Zn the beta phase appears (Muntz metal 60/40) and hot-working behaviour dominates — watch for **dezincification** of high-Zn grades in water. **Bronze = Cu-Sn**: strong, corrosion- and wear-resistant (bearings, propellers); **aluminium bronze**, **phosphor bronze**. **Cupronickel (Cu-Ni, 90/10 and 70/30)**: superb seawater and biofouling resistance — condenser tubing.",
        detail: "Beryllium copper (precipitation-hardenable) reaches spring-steel strengths while remaining non-sparking and non-magnetic — the safe tool alloy for explosive atmospheres.",
      },
      {
        term: "Wrought aluminium series",
        kind: "notation",
        statement: "First digit = major alloying element: **2xxx Al-Cu** (2024: aircraft skins, heat-treatable), **3xxx Al-Mn** (3003: general purpose), **5xxx Al-Mg** (5052: marine, weldable, not heat-treatable), **6xxx Al-Mg-Si** (6061: the universal structural alloy), **7xxx Al-Zn-Mg-Cu** (7075: highest strength). Tempers: **O** annealed, **H** strain-hardened (H18 fully hard), **T** heat-treated (T6 = solution treated + artificially aged).",
        detail: "The strength hierarchy 7075-T6 > 2024-T3 > 6061-T6 tracks precipitate potency: Zn-Mg-Cu and Cu-rich phases beat Mg2Si. Casting alloys open the 4xx series (Al-Si, e.g., A356) — excellent fluidity, near-zero hot-short cracking.",
      },
      {
        term: "Phase-naming conventions",
        kind: "notation",
        statement: "In a binary A-B system, terminal solid solutions are labelled by Greek letters in order of **decreasing melting point of the pure components** — alpha is the solid solution of B in the **higher**-melting component, beta typically the one based on the lower-melting component. Later letters (gamma, delta, epsilon...) mark intermediate phases as they appear; **intermetallic compounds** (Mg2Si, CuAl2, Fe3C, NiAl) have near-fixed stoichiometry, high hardness and brittleness.",
        detail: "The same letter can mean opposite things in different systems (alpha in Fe-C is BCC ferrite; alpha in brass is Cu-rich FCC) — always read the letter against its specific diagram, never from memory.",
      },
    ],
    examples: [
      {
        title: "Specifying alloys for three jobs",
        problem: "Choose an alloy for: (i) a deep-drawn kitchen sink, (ii) a marine pump shaft in chloride-rich brine, (iii) a hard-wearing knife blade — justify with structure.",
        steps: [
          { label: "(i) Sink", text: "304 austenitic (18Cr-8Ni): FCC gives extreme formability, nickel suppresses the BCC-to-FCC... rather stabilises austenite at room temperature, and it work-hardens during forming. Non-magnetic." },
          { label: "(ii) Marine shaft", text: "316 austenitic — the molybdenum addition resists pitting and crevice attack in chlorides. A duplex would also serve where its higher yield strength and the process allow." },
          { label: "(iii) Knife", text: "420/440 martensitic: enough carbon to quench to a hard chromium carbide/martensite structure — the one stainless family that heat treatment can harden." },
          { label: "Common thread", text: "Corrosion resistance is set by Cr + passive film in all three; what changes is crystal structure and hardening mechanism — the family name is really a metallurgical contract." },
        ],
        result: "304 for forming, 316 for chlorides, 440 martensitic for a hard edge — same base element, three different microstructural strategies.",
      },
    ],
    keyTakeaways: [
      "Ferrite: BCC, 0.022 wt% C max, soft; austenite: FCC, 2.14 wt% C max at 1147 °C; cementite: 6.67 wt% C, hard and brittle.",
      "Steel ends at 2.1 wt% C; beyond that the eutectic (ledeburite, 4.30 wt% C) puts you in cast-iron country.",
      "Austenitic stainless (304/316) is non-magnetic and non-heat-treatable; martensitic is magnetic and hardens by quenching; Mo in 316 buys chloride/pitting resistance.",
      "Brass = Cu-Zn, bronze = Cu-Sn, cupronickel = seawater tubing; 2xxx/6xxx/7xxx aluminium = Cu / Mg-Si / Zn-Mg-Cu.",
      "Greek letters are diagram-local: alpha means 'terminal solid solution on the high-melting side', not any particular structure.",
    ],
    quiz: [
      {
        q: "The carbon content of cementite (Fe3C) is:",
        options: ["0.022 wt%", "2.14 wt%", "4.30 wt%", "6.67 wt%"],
        answer: 3,
        explanation: "The stoichiometry of 3 iron atoms to one carbon forces 6.67 wt% C. The distractors are the other milestone numbers: ferrite solubility, austenite maximum, and the eutectic composition.",
      },
      {
        q: "Which stainless steel is hardenable by conventional quench-and-temper heat treatment?",
        options: ["304 austenitic", "316 austenitic", "410 martensitic", "Duplex 2205"],
        answer: 2,
        explanation: "Martensitic grades have enough carbon to form martensite on quenching. Austenitics work-harden only, and duplex keeps a fixed two-phase structure — heat treatment cannot raise their hardness.",
      },
      {
        q: "The key alloying difference between 304 and 316 stainless is:",
        options: ["316 has more carbon", "316 adds molybdenum for pitting resistance", "316 is ferritic rather than austenitic", "316 replaces nickel with chromium"],
        answer: 1,
        explanation: "2-3% molybdenum dramatically improves resistance to chloride pitting and crevice corrosion — the reason 316 is the marine standard. Both grades are austenitic with similar chromium.",
      },
      {
        q: "7075-T6 aluminium is strengthened primarily by precipitates from which system?",
        options: ["Al-Cu (theta phase)", "Al-Mg2Si", "Al-Zn-Mg-Cu", "Al-Si eutectic"],
        answer: 2,
        explanation: "The 7xxx series is Al-Zn-Mg-Cu; T6 means solution treat and artificially age to peak hardness with fine Zn/Mg/Cu-containing precipitates. Al-Cu is 2024 and Al-Mg-Si is 6061.",
      },
      {
        q: "Bronze differs from brass in that bronze is primarily an alloy of copper with:",
        options: ["zinc", "tin", "nickel", "lead"],
        answer: 1,
        explanation: "Bronze = Cu-Sn (often with P, Al or Mn additions); brass = Cu-Zn; cupronickel = Cu-Ni. Mixing these up mis-specifies bearing and marine hardware.",
      },
      {
        q: "Austenite is preferred over ferrite for hot rolling of steel because:",
        options: ["austenite is BCC and therefore softer", "FCC austenite has more slip systems and dissolves far more carbon, allowing heavy deformation without cracking", "ferrite cannot exist above 727 °C", "austenite is magnetic and rolls better"],
        answer: 1,
        explanation: "FCC's 12 close-packed slip systems give high ductility, and up to 2.14 wt% carbon stays in solution rather than segregating. Ferrite does exist above 727 °C in hypoeutectoid steels — option 3 confuses it with the eutectoid point — and austenite is non-magnetic.",
      },
    ],
  },

  // ============================================================ materials 1.5
  {
    sectionId: "me-e-materials-s5",
    readingTime: 10,
    prerequisites: ["Galvanic couples and unit cells (me-e-materials-s1)"],
    intro: "Corrosion destroys roughly a small car's worth of steel per person every year, so the electrochemistry of the galvanic series pays for itself immediately — especially when you can size a sacrificial anode with Faraday's law. Add powder metallurgy's three sintering stages and the NDT toolkit for finding hidden flaws, and this section is the plant-engineer's survival kit.",
    objectives: [
      "Rank common engineering metals on the galvanic series and predict which member of a couple corrodes",
      "Design and size sacrificial-anode cathodic protection using Faraday's law, and convert corrosion current density to penetration rate",
      "Describe the three stages of sintering and the advantages of the powder route",
      "Select the right NDT method (UT, radiography, eddy current, MPI, DPI) for a given flaw, material and access situation",
    ],
    concepts: [
      {
        term: "The galvanic series",
        kind: "law",
        statement: "In seawater, metals rank from **active (anodic)** to **noble (cathodic)** approximately: Mg, Zn, Al alloys, carbon steel, cast iron, active stainless, Sn, Cu alloys (brass, bronze), Cu, Ni alloys, Ag, Ti (passive), graphite, Au, Pt. In any couple, **the more active metal corrodes faster and the more noble one is protected**; the further apart, the worse the attack on the anode.",
        detail: "This is why galvanised (zinc-coated) steel survives scratches: the exposed steel becomes the protected cathode. The classic design sins are the copper pipe earthed to a steel tank and the aluminium fastener in a steel plate — small anode, huge cathode, rapid failure.",
      },
      {
        term: "Cathodic protection economics",
        kind: "method",
        statement: "Two routes to making the structure a cathode: **sacrificial anodes** (Zn, Mg, Al — consumed by design) or **impressed current** with an inert anode and a DC rectifier. Faraday's law sizes the bill: mass consumed $m = \\frac{M}{nF}It$. For zinc ($M$ = 65.4 g/mol, $n$ = 2): about **10.7 kg of zinc per ampere-year** (theoretical).",
        detail: "Zinc delivers roughly 0.9 A per kg per year in practice after efficiency losses — so protecting a pipeline drawing 0.5 A for 10 years needs on the order of 50 kg of zinc. Impressed current wins for big structures because the anode mass is then inert graphite/MMO-coated titanium, not sacrificial metal.",
      },
      {
        term: "Corrosion rate from current density",
        kind: "method",
        statement: "$CR \\,(\\text{mm/yr}) = 0.00327 \\times i\\,(\\mu A/cm^2) \\times \\frac{EW}{\\rho}$, where $EW$ is equivalent weight ($M/n$) and $\\rho$ the density in g/cm³. For iron ($EW$ = 27.9, $\\rho$ = 7.86): about **0.012 mm per year per $\\mu A/cm^2$**.",
        detail: "This bridges the electrochemist's ammeter and the inspector's micrometer: a measured current density of 20 microamp/cm² on iron means roughly a quarter-millimetre of wall lost per year — pipeline-replacement territory.",
      },
      {
        term: "Sintering stages",
        kind: "definition",
        statement: "Powder compacts densify on firing in three overlapping stages: **initial** — necks grow between touching particles (surface-diffusion dominated), little densification but strength appears; **intermediate** — continuous pore channels round and shrink, density climbing through the 70s-80s percent range; **final** — pores pinch off into isolated spheres and shrink slowly by bulk/vacancy diffusion, grain growth competing.",
        detail: "The powder route (press-and-sinter) buys near-net shape, zero chip waste, self-lubricating porosity in bearings, and access to alloys impossible to cast (W-Cu) — at the cost of residual porosity that caps ductility and toughness versus forgings.",
      },
      {
        term: "NDT selection matrix",
        kind: "insight",
        statement: "**Ultrasonic testing (UT)** — 0.1-25 MHz sound; finds internal flaws, sizes depth; needs couplant, one side. **Radiography (X/gamma)** — sees volumetric density changes, gives a permanent film/digital record; safety burden, poor for tight cracks perpendicular to beam. **Eddy current** — electromagnetic, surface/near-surface flaws and conductivity/sorting; **conductors only**, no couplant, very fast. **Magnetic particle** — surface/near-surface cracks; **ferromagnetic parts only**. **Dye penetrant** — any nonporous material, surface-breaking flaws only, cheapest of all.",
        detail: "The quick triage: is the flaw surface or internal? Is the part conductive/magnetic? Is one side or both accessible? Do you need a permanent record? Two yes-answers usually pin the method.",
      },
    ],
    examples: [
      {
        title: "Sizing a sacrificial zinc anode",
        problem: "A buried steel tank requires a protection current of 0.5 A. The design life is 10 years and the zinc anode operates at 85% efficiency (15% of metal lost to self-corrosion). What anode mass is needed?",
        steps: [
          { label: "Faraday consumption", text: "$m = \\frac{M}{nF}It = \\frac{65.4}{2 \\times 96485} \\times 0.5 \\times (10 \\times 3.156 \\times 10^7)$ g." },
          { label: "Per ampere-year", text: "The factor works out to 10.7 kg per ampere-year; here: 10.7 x 0.5 x 10 = 53.5 kg of zinc electrochemically consumed." },
          { label: "Efficiency correction", text: "Only 85% does useful protection: $m_{anode} = 53.5 / 0.85 \\approx 63$ kg." },
          { label: "Design note", text: "Round up and add margin for the anode's own galvanic self-corrosion in soil backfill — and specify resistivity-matched backfill so the anode actually delivers its current." },
        ],
        result: "About 63 kg of zinc — order 70 kg in distributed anodes so the last kilogram is not doing all the work.",
      },
    ],
    keyTakeaways: [
      "In a galvanic couple the active metal is the anode and gets eaten; zinc-coated steel survives scratches because zinc is the sacrificial member.",
      "Faraday's law for zinc: roughly 10.7 kg consumed per ampere-year — cathodic protection is bought by the kilogram.",
      "$CR \\approx 0.012$ mm/yr per $\\mu A/cm^2$ on iron converts an electrochemistry reading straight to wall loss.",
      "Sintering: necks form (initial), channels close (intermediate), pores spheroidise and shrink (final); porosity is both the product and the penalty of P/M.",
      "NDT triage: surface vs internal, conductive vs magnetic, one-side vs two-side access, record needed or not — answer those and the method picks itself.",
    ],
    quiz: [
      {
        q: "A steel bolt clamps a thick copper busbar in a humid switchyard. Which component corrodes preferentially?",
        options: ["the copper busbar", "the steel bolt", "both equally", "neither — copper passivates steel"],
        answer: 1,
        explanation: "Steel sits well above copper on the galvanic series (more active), so steel is the anode and dissolves while copper is cathodically protected. The small-anode/large-cathode area ratio makes the bolt's attack especially fast.",
      },
      {
        q: "The theoretical mass of zinc consumed by 1 ampere of cathodic-protection current in one year is closest to:",
        options: ["1.1 kg", "10.7 kg", "65 kg", "326 kg"],
        answer: 1,
        explanation: "$m = (65.4 / (2 \\times 96485)) \\times 3.156 \\times 10^7 \\approx 1.07 \\times 10^4$ g = 10.7 kg. The 65 kg distractor forgets to divide by the two electrons per zinc ion; 326 kg uses the atomic mass directly as the Faradaic equivalent.",
      },
      {
        q: "A corrosion monitoring probe reads a uniform current density of 20 $\\mu A/cm^2$ on a steel pipe wall. The estimated penetration rate is about:",
        options: ["0.023 mm/yr", "0.23 mm/yr", "2.3 mm/yr", "9.3 mm/yr"],
        answer: 1,
        explanation: "Iron loses about 0.012 mm/yr per $\\mu A/cm^2$, so 20 gives 0.23 mm/yr — aggressive. The 0.023 answer forgets the factor of ten; 2.3 mm/yr would imply milliamp-level currents.",
      },
      {
        q: "During firing of a powder compact, you observe particle contact points growing into necks while the density has barely moved. This is the:",
        options: ["initial stage of sintering", "intermediate stage", "final stage", "green-state compaction"],
        answer: 0,
        explanation: "Neck growth with minimal densification is the signature of the initial stage, dominated by surface diffusion from the convex particle surface into the neck. Densification becomes significant only in the intermediate stage as pore channels shrink.",
      },
      {
        q: "You must find and depth-size a planar lack-of-fusion defect inside a 25 mm thick steel weldment, with access from one side. The best method is:",
        options: ["dye penetrant", "ultrasonic pulse-echo", "magnetic particle", "eddy current"],
        answer: 1,
        explanation: "UT penetrates thick sections from a single surface and times the echo to locate depth. Penetrant and magnetic particle see only surface-breaking flaws; eddy current is limited to a shallow skin depth in thick steel.",
      },
      {
        q: "Eddy-current inspection cannot be used on which of the following?",
        options: ["aluminium aircraft skin", "copper heat-exchanger tubing", "carbon steel plate", "a sintered alumina ceramic"],
        answer: 3,
        explanation: "Eddy currents require electrical conductivity — alumina is an insulator, so no circulating currents and no signal. The other three are conductors and routinely inspected this way.",
      },
    ],
  },

  // ============================================================ materials 1.6
  {
    sectionId: "me-e-materials-s6",
    readingTime: 9,
    prerequisites: ["Unit cells and Burgers vectors (me-e-materials-s1)"],
    intro: "Crystallography is the coordinate system of materials science: Miller indices name every plane and direction, and slip — the atomic mechanism of plasticity — happens on specific families of them. This section works the index arithmetic, computes what a stress actually resolves to on a slip plane (Schmid's law), and counts slip systems to explain why FCC bends like butter while HCP snaps.",
    objectives: [
      "Index planes and directions from intercepts and direction vectors in cubic crystals",
      "Compare dislocation energies via $E \\propto Gb^2$ and rank edge versus screw line energies",
      "Count slip systems for FCC, BCC and HCP lattices and apply the five-independent-systems rule",
      "Compute the resolved shear stress on a slip system under an applied uniaxial stress (Schmid's law)",
    ],
    concepts: [
      {
        term: "Miller indices of planes",
        kind: "method",
        statement: "Recipe: take intercepts on x, y, z in units of lattice parameters; **invert** them; **clear fractions**; enclose in round brackets with a bar over negatives. A plane parallel to an axis has intercept infinity → reciprocal **0**. Families with equivalent symmetry share braces {hkl}; parallel planes are a single (hkl) set with spacing $d_{hkl} = a/\\sqrt{h^2+k^2+l^2}$ in cubic crystals.",
        detail: "Example: intercepts $1, -1, \\tfrac{1}{2}$ invert to $1, -1, 2$ → $(1\\bar{1}2)$. Example: parallel to z, cutting x at 1/2 and y at 1 → $2, 1, 0$ → (210).",
      },
      {
        term: "Directions",
        kind: "notation",
        statement: "A direction is the vector components in units of a, b, c — reduced to smallest integers in **square** brackets [uvw]; family ⟨uvw⟩. In cubic crystals only, [hkl] is **normal to (hkl)** — a coincidence of the metric that fails in every other system.",
        detail: "So [110] is the face diagonal, [111] the body diagonal, [100] the cube edge. The slip direction of FCC is ⟨110⟩ — the shortest lattice translation, which is why it carries the smallest Burgers vector and the cheapest dislocations.",
      },
      {
        term: "Dislocation energetics",
        kind: "law",
        statement: "Strain energy per unit length: $E_{screw} = \\frac{Gb^2}{4\\pi}\\ln(\\frac{R}{r_0})$ and $E_{edge} = \\frac{Gb^2}{4\\pi(1-\\nu)}\\ln(\\frac{R}{r_0})$ — the edge is bigger by the factor $1/(1-\\nu)$ (about 1.5 for $\\nu = 0.33$). Either way, **energy scales as $b^2$**, so the short-Burgers-vector dislocation always wins: a Frank-Read source costs about $\\tau \\approx Gb/L$ to operate.",
        detail: "Consequences: FCC slip is $\\frac{a}{2}\\langle 110\\rangle$ (b = 0.707a) not $a\\langle 100\\rangle$ (b = a, twice the energy); superdislocations in ordered alloys are why intermetallics are strong but brittle; dislocations dodge, annihilate and bow to minimise total line length.",
      },
      {
        term: "Slip systems census",
        kind: "insight",
        statement: "**FCC**: {111}⟨110⟩ — 4 close-packed planes x 3 close-packed directions = **12 systems**. **BCC**: ⟨111⟩ directions on {110}, {112} and {123} — **48 systems** in total. **HCP basal**: (0001)⟨11$\\bar{2}$0⟩ — only **3 systems**. An arbitrary shape change needs **5 independent systems** (von Mises) — FCC and BCC have them; HCP basal slip alone does not, which is why magnesium and zinc are formable only in favourable orientations or at temperature.",
        detail: "BCC has the numbers but not the close-packed planes — its Peierls-Nabarro (lattice friction) stress is high and rises steeply as temperature falls, so BCC iron glides easily when hot and turns brittle when cold enough for cleavage to win instead.",
      },
      {
        term: "Schmid's law",
        kind: "theorem",
        statement: "The shear stress resolved on a slip system under uniaxial stress $\\sigma$ is $\\tau_R = \\sigma \\cos\\phi \\cos\\lambda$, where $\\phi$ is the angle between the stress axis and the **slip-plane normal** and $\\lambda$ between the stress axis and the **slip direction**. Slip begins when $\\tau_R$ reaches the critical resolved shear stress $\\tau_{CRSS}$; the Schmid factor $\\cos\\phi\\cos\\lambda$ peaks at **0.5** when $\\phi = \\lambda = 45°$.",
        detail: "This is why single-crystal turbine blades and deep-drawn sheet are oriented so that hard-to-slip orientations face the load — geometry alone can double the effective strength between a 45-degree and an axial texture.",
      },
    ],
    examples: [
      {
        title: "Indexing two planes",
        problem: "Plane A intercepts the axes at x = 1, y = -1, z = 1/2 (in units of a). Plane B is parallel to the z axis and intercepts x at 1/2 and y at 1. Index both.",
        steps: [
          { label: "A: reciprocals", text: "$1, -1, 1/2 \\to 1/1, 1/(-1), 1/(1/2) = 1, -1, 2$." },
          { label: "A: clear and label", text: "Already integral → $(1\\bar{1}2)$, the bar over the minus-one index." },
          { label: "B: handle infinity", text: "Parallel to z means infinite intercept → reciprocal 0. Inverting $1/2, 1, \\infty$ gives $2, 1, 0$ → (210)." },
          { label: "Check", text: "Plane A cuts the positive z-axis at half a cell and negative y — consistent with the $\\bar{1}$ and 2. Plane B being z-parallel must show 0 in the third slot — it does." },
        ],
        result: "A = $(1\\bar{1}2)$, B = (210) — six-second jobs once inversion is automatic.",
      },
      {
        title: "Resolving an applied stress",
        problem: "A single crystal is pulled along a tensile axis at $\\phi = 48°$ to the slip-plane normal and $\\lambda = 55°$ to the slip direction. The applied stress is 60 MPa. What is the resolved shear stress, and at what stress would slip start if $\\tau_{CRSS}$ = 30 MPa?",
        steps: [
          { label: "Schmid factor", text: "$\\cos 48° = 0.669$, $\\cos 55° = 0.574$; product = 0.384." },
          { label: "Resolved shear", text: "$\\tau_R = 60 \\times 0.384 = 23.0$ MPa — below the 30 MPa critical value, so no slip yet." },
          { label: "Yield stress", text: "$\\sigma_y = \\tau_{CRSS} / (\\cos\\phi\\cos\\lambda) = 30 / 0.384 = 78.1$ MPa." },
          { label: "Sanity", text: "Because the factor is capped at 0.5, the yield stress can never fall below $2\\tau_{CRSS}$ for this single-slip geometry." },
        ],
        result: "$\\tau_R = 23$ MPa now; the crystal yields at about 78 MPa — geometry has multiplied the material's 30 MPa resistance by 2.6.",
      },
    ],
    keyTakeaways: [
      "Miller indices = invert intercepts, clear fractions, bar the negatives; square brackets for directions, round for planes, braces/angle for families.",
      "Energy of a dislocation scales as $Gb^2$; edge beats screw on line energy by $1/(1-\\nu)$, and short-Burgers vectors always dominate the slip menu.",
      "Slip systems: FCC 12, BCC up to 48, HCP basal 3 — five independent systems are the minimum for arbitrary polycrystal plasticity, so HCP metals are the awkward ones.",
      "Schmid's law $\\tau_R = \\sigma\\cos\\phi\\cos\\lambda$: the 45-degree double-angle geometry is the softest orientation a crystal can offer.",
      "BCC's high, temperature-sensitive Peierls stress is the root of iron's ductile-to-brittle behaviour in the cold.",
    ],
    quiz: [
      {
        q: "A plane is parallel to the z-axis and intercepts the x and y axes at 1/2 and 1 respectively. Its Miller index is:",
        options: ["(120)", "(210)", "(012)", "(112)"],
        answer: 1,
        explanation: "Reciprocals of 1/2, 1, infinity are 2, 1, 0 → (210). (120) inverts the order of x and y intercepts; (012) puts the zero in the wrong slot — z-parallel means the **third** index is zero.",
      },
      {
        q: "How many slip systems does the FCC lattice have on {111}⟨110⟩?",
        options: ["3", "8", "12", "48"],
        answer: 2,
        explanation: "Four distinct {111} planes times three ⟨110⟩ directions each = 12. The 48 belongs to BCC counting all three plane families; 3 is the HCP basal count.",
      },
      {
        q: "A tensile stress of 100 MPa is applied at $\\phi = 60°$ to the slip normal and $\\lambda = 45°$ to the slip direction. The resolved shear stress is about:",
        options: ["35 MPa", "50 MPa", "71 MPa", "25 MPa"],
        answer: 0,
        explanation: "$\\tau_R = 100 \\cos 60° \\cos 45° = 100 \\times 0.5 \\times 0.707 = 35.4$ MPa. 50 MPa would use only one cosine; 71 MPa multiplies by $\\sqrt{2}/2$ twice upside down.",
      },
      {
        q: "Compare a dislocation with $b = a[100]$ to one with $b = \\frac{a}{2}[110]$ in the same FCC crystal. The line energy of the first is:",
        options: ["half that of the second", "the same as the second", "twice that of the second", "four times that of the second"],
        answer: 2,
        explanation: "$|a[100]| = a$ while $|\\frac{a}{2}[110]| = a\\sqrt{2}/2 = 0.707a$, and energy goes as $b^2$: $(a)^2 / (0.5a^2) = 2$. This is exactly why FCC crystals slip on $\\frac{a}{2}\\langle 110\\rangle$.",
      },
      {
        q: "Zinc (HCP) sheet cracks when bent at room temperature, while copper (FCC) bends easily. The structural reason is:",
        options: ["zinc's atoms are heavier", "HCP basal slip offers too few independent slip systems for arbitrary shape change", "FCC has no dislocations", "zinc has a higher melting point"],
        answer: 1,
        explanation: "Basal HCP slip gives only 3 systems against the 5 (von Mises) needed for polycrystal compatibility, so grains cannot accommodate each other and boundaries crack. FCC's 12 systems make every grain compliant.",
      },
      {
        q: "The Frank-Read source stress scaling $\\tau \\approx Gb/L$ says that:",
        options: ["long dislocation segments multiply at lower stress", "short sources operate more easily", "stress is independent of segment length", "the source stress equals the theoretical shear strength"],
        answer: 0,
        explanation: "The longer the pinned segment L, the larger the radius it can bow to at a given stress, so critical bowing (and multiplication) happens at $\\tau \\approx Gb/L$ — longer sources are cheaper to operate, which sets the dislocation density a metal can sustain.",
      },
    ],
  },

  // ============================================================ materials 1.7
  {
    sectionId: "me-e-materials-s7",
    readingTime: 8,
    prerequisites: ["Binary phase diagrams and tie-lines (me-e-materials-s2)"],
    intro: "Why does copper dissolve nickel completely but silver only grudgingly? Why are ordered intermetallics wonderful and terrible at the same time? This section assembles the solubility rulebook (Hume-Rothery), the reaction vocabulary beyond the eutectic (peritectic, monotectic), and the electron-counting magic that predicts brass-type phases.",
    objectives: [
      "State the Hume-Rothery rules and use them to rank solubility of solute pairs",
      "Distinguish solid solutions, ordered structures and intermetallic compounds",
      "Write peritectic, monotectic, eutectic and peritectoid reactions and locate them on real diagrams",
      "Explain electron-compound (Hume-Rothery phase) formation via the electron-to-atom ratio",
    ],
    concepts: [
      {
        term: "Hume-Rothery rules",
        kind: "law",
        statement: "Extensive **substitutional** solid solubility requires: (1) atomic radii within **15%** of each other; (2) **same crystal structure** in the pure elements; (3) **similar electronegativity** (else a compound forms instead); (4) **same valency** — and a higher-valence solvent tolerates a lower-valence solute better than the reverse.",
        detail: "Cu-Ni is the model citizen: both FCC, radii 0.128/0.125 nm (2.4% apart), similar electronegativities → complete mutual solubility. Cu-Ag (13% radius difference) still shows only limited solubility — the rules are necessary, not sufficient.",
      },
      {
        term: "Solid solutions versus intermetallics",
        kind: "definition",
        statement: "A **solid solution** keeps the solvent lattice with solute atoms sprinkled in — composition ranges over a field, properties change smoothly, ductility survives. An **intermetallic compound** (Mg2Si, CuAl2, NiAl, Fe3C) has its own lattice and near-fixed stoichiometry: **hard, often very strong at temperature, and brittle** — useful as strengtheners, disastrous as continuous matrices.",
        detail: "Between them sit **ordered structures** (superlattices): same lattice as the disordered solution but with sublattice occupancy — beta brass orders from BCC to the B2 structure below about 470 °C, gaining strength and losing ductility.",
      },
      {
        term: "Peritectic reaction",
        kind: "definition",
        statement: "**$L + \\alpha \\to \\beta$** at an invariant temperature: a solid and the remaining liquid react to a new solid. Real estate: the Fe-C peritectic at 0.17 wt% C and 1493 °C ($L + \\delta \\to \\gamma$) — responsible for hot-tearing sensitivity during welding of low-carbon steels; the Cu-Zn peritectic at 902 °C turns liquid + alpha into beta brass.",
        detail: "Peritectics are diffusion awkward: the new phase forms a shell around the old solid, so complete reaction needs slow cooling — residual unreacted liquid and core alpha are common cast defects.",
      },
      {
        term: "Monotectic reaction",
        kind: "definition",
        statement: "**$L_1 \\to \\alpha + L_2$**: one liquid decomposes into a solid and a **second liquid** of different composition — this requires a liquid miscibility gap. Classic example: Cu-Pb near 955 °C; Cu and Pb simply refuse to mix as liquids across the gap, so lead-rich droplets segregate (exploited to make self-lubricating Cu-Pb bearing layers).",
        detail: "Gravity segregation is the manufacturing headache of monotectic systems (the denser liquid sinks, e.g., trying to cast useful Cu-Pb), and the engineering opportunity when you want an aligned two-liquid structure — rapid solidification or stir-casting keeps the droplets fine.",
      },
      {
        term: "Electron compounds (Hume-Rothery phases)",
        kind: "insight",
        statement: "In Cu, Ag, Au alloyed with Zn, Al, Sn etc., specific disordered phases appear at characteristic **electron-to-atom ratios**: **3/2 → beta (BCC)**, **21/13 → gamma (complex cubic)**, **7/4 → epsilon (HCP)**. Count valence electrons (Cu = 1, Zn = 2, Al = 3) and the phase is predictable arithmetic.",
        detail: "CuZn: (1 + 2)/2 = 3/2 → beta brass. Cu5Zn8: (5 + 16)/13 = 21/13 → gamma. The phases are compositionally broad (electron concentration, not atom ratio, is the controlling variable) — a rare case where electron bookkeeping replaces temperature-composition intuition.",
      },
    ],
    examples: [
      {
        title: "Solubility screening with Hume-Rothery",
        problem: "Rank these solutes by expected solubility in copper (FCC, r = 0.128 nm): Ni (FCC, 0.125), Zn (HCP, 0.133), Ag (FCC, 0.144), W (BCC, 0.137). Justify each verdict.",
        steps: [
          { label: "Size check", text: "Radius differences: Ni 2.4%, Zn 3.9%, Ag 12.5%, W 7% — all under 15%, so size alone eliminates nobody." },
          { label: "Structure check", text: "Ni and Ag are FCC like Cu; Zn is HCP and W is BCC — a structure mismatch caps solubility for Zn and W." },
          { label: "Electronegativity/valence", text: "Ni matches valence and electronegativity closely; Ag is further off on both; W's high melting point and d-band differences do it no favours." },
          { label: "Ranking", text: "Ni (complete solubility — the Cu-Ni isomorphous system) > Ag (limited but appreciable) > Zn (substantial but terminal, ~38% at low T) > W (essentially insoluble)." },
        ],
        result: "Ni > Ag > Zn > W — four rules applied in ninety seconds, matching the published diagrams.",
      },
    ],
    keyTakeaways: [
      "Hume-Rothery: within 15% size, same structure, similar electronegativity, same valence — necessary for extensive substitutional solubility, not sufficient.",
      "Solid solutions are ductile and compositionally broad; intermetallics are stoichiometric, hard and brittle — strengtheners, not matrices.",
      "Peritectic $L + \\alpha \\to \\beta$ (Fe-C at 1493 °C, Cu-Zn at 902 °C); monotectic $L_1 \\to \\alpha + L_2$ (Cu-Pb) — know both reaction lines cold.",
      "Electron compounds: 3/2 beta, 21/13 gamma, 7/4 epsilon — count electrons per atom, read off the brass phases.",
      "Ordering (as in beta brass below ~470 °C) hardens a solution without changing its lattice — the cheapest strengthening phase transition there is.",
    ],
    quiz: [
      {
        q: "Which solute should show the greatest solubility in copper (FCC, r = 0.128 nm)?",
        options: ["Ni (FCC, r = 0.125 nm)", "Ag (FCC, r = 0.144 nm)", "W (BCC, r = 0.137 nm)", "Zn (HCP, r = 0.133 nm)"],
        answer: 0,
        explanation: "Nickel passes every Hume-Rothery test — nearest in size, same FCC structure, matched electronegativity and valence — and indeed Cu-Ni forms a complete isomorphous solid solution. Ag's 12.5% radius gap and the wrong-structure options fall well short.",
      },
      {
        q: "The reaction $L + \\alpha \\to \\beta$ at a fixed temperature is called:",
        options: ["eutectic", "eutectoid", "peritectic", "monotectic"],
        answer: 2,
        explanation: "A liquid plus a solid reacting to a new solid is the peritectic. Eutectic is L to two solids, eutectoid all solids, and monotectic splits a liquid into a solid plus a second liquid.",
      },
      {
        q: "The reaction $L_1 \\to L_2 + \\alpha$, encountered in the Cu-Pb system, is a:",
        options: ["peritectoid", "monotectic", "syntectic", "congruent transformation"],
        answer: 1,
        explanation: "One liquid decomposing into another liquid plus a solid defines monotectic — the signature of a liquid miscibility gap. Syntectic is the opposite: two liquids reacting to one solid.",
      },
      {
        q: "A 15% atomic-radius difference between solvent and solute most directly threatens which Hume-Rothery requirement?",
        options: ["the crystal-structure requirement", "the size-factor requirement", "the valence requirement", "the electronegativity requirement"],
        answer: 1,
        explanation: "The size factor demands radii within about 15% — beyond it the lattice strain of substitution becomes prohibitive and solubility collapses regardless of the other three rules.",
      },
      {
        q: "Intermetallic compounds such as NiAl and Mg2Si are typically:",
        options: ["soft and ductile", "hard and brittle", "amorphous", "only stable above the melting point"],
        answer: 1,
        explanation: "Fixed stoichiometry, mixed bonding and limited slip systems make intermetallics hard, strong at high temperature and brittle at low temperature — superb reinforcements (as Mg2Si in 6xxx aluminium) but poor standalone structures.",
      },
      {
        q: "In copper-zinc brasses, the beta (BCC) phase appears when the electron-to-atom ratio reaches:",
        options: ["1", "3/2", "21/13", "7/4"],
        answer: 1,
        explanation: "Beta brass is the 3/2 electron compound: CuZn gives (1 + 2)/2 = 1.5. The 21/13 and 7/4 ratios belong to the gamma and epsilon phases respectively.",
      },
    ],
  },

  // ============================================================ materials 1.8
  {
    sectionId: "me-e-materials-s8",
    readingTime: 10,
    prerequisites: ["Fe-C diagram and TTT curves (me-e-materials-s2)"],
    intro: "Heat treatment is the choreography of cooling: the same bar of steel can leave the furnace as a soft machining blank or a bearing raceway depending on cooling rate and holding temperature alone. This section walks the four canonical treatments and the microstructures they buy, then measures a steel's ability to harden deeply with the Jominy bar.",
    objectives: [
      "Predict microstructures and property trends from full annealing, normalizing, quenching and tempering",
      "Explain recovery, recrystallization and grain growth and locate the recrystallization temperature",
      "Interpret a Jominy end-quench curve and distinguish hardenability from maximum hardness",
      "Choose austempering, martempering and case-hardening routes for distortion and property targets",
    ],
    concepts: [
      {
        term: "The four canonical treatments",
        kind: "method",
        statement: "**Full anneal**: heat 30-50 °C above A3 (hypoeutectoid) / A1 (hypereutectoid), hold, **furnace cool** → coarse pearlite, softest, most machinable-per-dimension-stable. **Normalize**: heat similarly, **cool in still air** → fine pearlite, slightly harder/stronger, refined and uniform grains — the default stress-reliever before machining. **Quench**: cool faster than the critical rate (water/oil/brine) → **martensite**, maximum hardness, brittle, full of stress. **Temper**: reheat the quenched part (typically 200-600 °C) → **tempered martensite** (ferrite + fine cementite), trading some hardness for most of the toughness back.",
        detail: "Media severity in ascending order: still air < oil < water < brine. Quench severity and section size decide whether the core outruns the C-curve nose — the birth of hardenability.",
      },
      {
        term: "Annealing a cold-worked metal: three stages",
        kind: "definition",
        statement: "**Recovery**: dislocations rearrange (polygonisation), internal stress falls, hardness barely moves. **Recrystallization**: new strain-free grains nucleate and consume the worked matrix; strength drops, ductility returns. **Grain growth**: the fresh grains coarsen if held hot — usually undesirable. The **recrystallization temperature** is roughly **0.3-0.5 Tm (in kelvin)** for pure metals, lowered by heavy prior cold work and raised by solutes and fine particles (which pin boundaries).",
        detail: "So cold-drawn copper wire (Tm = 1356 K) recrystallizes from roughly 200-400 °C, while the same 0.4 Tm rule puts aluminium (Tm = 933 K) at about 100-200 °C — which is why Al wiring work-softens near warm engines.",
      },
      {
        term: "Jominy hardenability test",
        kind: "method",
        statement: "A 100 mm x 25 mm bar is austenitised, then one end is sprayed with water while the rest cools in air — producing every cooling rate along one bar. Rockwell hardness is then plotted versus **distance from the quenched end**. The curve's **level** near the end is set mainly by **carbon content**; how slowly it falls with distance is **hardenability**, set by alloying (Cr, Mo, Mn, Ni all push it up).",
        detail: "A plain 1080 carbon steel may hold 60 HRC only a few millimetres in; an alloy steel at the same carbon level can hold it 40+ mm deep. That is why alloy steels exist: not to be harder, but to be **hard deeper** (and to oil-harden instead of water-harden, warping less).",
      },
      {
        term: "Austempering and martempering",
        kind: "insight",
        statement: "**Austempering**: quench to just above $M_s$, **hold** until all austenite becomes **bainite** — near-martensitic hardness with far better toughness and minimal distortion. **Martempering (marquenching)**: quench to just above $M_s$ only long enough to equalise temperature through the section, then air-cool through the martensite range — martensite everywhere, thermal gradients (and thus quench cracks) minimised.",
        detail: "Both tricks dodge the worst of quench stress by pausing above $M_s$; both are salt-bath or hot-oil processes. The reward is dimensional control in gears and dies that no direct water quench can match.",
      },
      {
        term: "Case hardening",
        kind: "method",
        statement: "When the specification is a **hard case over a tough core**: **carburizing** (pack/gas, 900-950 °C, carbon in, then quench), **nitriding** (500-575 °C, nitrogen in — hard nitrides of Al/Cr/V, **no quench**, superb distortion control), **cyaniding/carbonitriding** (both elements, thin cases), **flame/induction hardening** (heat only the surface of a medium/high-carbon steel, then quench — localised, cheap, keeps core properties untouched).",
        detail: "Rule of thumb for the choice: distortion-critical precision gears get nitrided; deep-case heavy-duty gears get carburized; large shafts needing a localised hard zone get induction hardening.",
      },
    ],
    examples: [
      {
        title: "Selecting the thermal route",
        problem: "A medium-carbon (0.45% C) steel shaft needs overall yield strength of about 600 MPa, a tough, machinable body, and a 1 mm deep, 55 HRC wear zone on the journal. Specify the route.",
        steps: [
          { label: "Bulk treatment", text: "Normalize (air cool) after forging: fine pearlite + ferrite, about 600 MPa yield, uniform refined grain, stress-free enough to machine — no quench distortion risk before the journal is finished." },
          { label: "Surface strategy", text: "The steel already has 0.45% C — enough carbon to harden without carburising: **induction harden the journal only** (heat 1 mm deep in seconds, water-quench, self-temper), giving ~55 HRC in the case." },
          { label: "Finish", text: "Light temper at low temperature (~180 °C) to relax quench stress and stabilise the case; grind to size." },
          { label: "Rejected alternatives", text: "Through-hardening would embrittle the whole shaft; carburizing would need a low-carbon steel to start with; nitriding needs special Al/Cr grades and runs shallower." },
        ],
        result: "Normalize → machine → induction harden journal → low temper → grind: tough core, hard case, minimum distortion.",
      },
      {
        title: "Reading a Jominy comparison",
        problem: "Steel A (plain 0.8% C) shows 65 HRC at 2 mm from the quenched end falling to 40 HRC by 15 mm. Steel B (0.8% C with Cr-Mo) shows 65 HRC at 2 mm and still 60 HRC at 25 mm. Interpret.",
        steps: [
          { label: "Level match", text: "Both start near 65 HRC: the quenched-end hardness of martensite is governed by carbon content (0.8% C in both), and no alloying changes that ceiling much." },
          { label: "Slope difference", text: "B's flat curve means its C-curve nose sits far to the right — Cr and Mo delay the diffusional transformation, so even the slow-cooling interior outruns pearlite and hardens." },
          { label: "Practical meaning", text: "A can only through-harden a few millimetres (knife blades, small tools); B will harden a 50 mm section (gears, dies) — and can do it in oil rather than water, with less distortion and cracking risk." },
        ],
        result: "A and B have identical maximum hardness but B's hardenability is several times greater — the entire justification for alloy steels.",
      },
    ],
    keyTakeaways: [
      "Furnace cool = coarse pearlite (anneal); air cool = fine pearlite (normalize); fast quench = martensite; reheat = tempered martensite. Hardness rises, toughness recovers on tempering.",
      "Recovery → recrystallization → grain growth; $T_{recryst} \\approx 0.3-0.5\\,T_m$ (K), shifted down by cold work and up by solutes/particles.",
      "Jominy: carbon sets the hardness level, alloys set the depth — hardenability is a slope, not a height.",
      "Austempering gives bainite; martempering gives low-distortion martensite — both pause above $M_s$.",
      "Case options: carburize (deep case, quench), nitride (thin, no quench, Al/Cr grades), induction/flame (local, needs existing carbon).",
    ],
    quiz: [
      {
        q: "Arrange quench media by increasing severity of cooling:",
        options: ["water < oil < brine < air", "air < oil < water < brine", "oil < air < water < brine", "air < water < oil < brine"],
        answer: 1,
        explanation: "Still air cools slowest, oil is gentler than water, and brine (salt water) is fastest of all because salt bursts the vapour blanket. Getting this order backwards is how parts crack.",
      },
      {
        q: "Two steels have identical carbon but one is Cr-Mo alloyed. On the Jominy test they will most likely show:",
        options: ["different quenched-end hardness, same depth of hardening", "the same quenched-end hardness, but the alloy steel hardens much deeper", "the alloy steel harder at every point including the end", "identical curves — carbon is the only variable"],
        answer: 1,
        explanation: "Carbon sets the martensite hardness ceiling at the quenched end; Cr-Mo retard the diffusional transformations, pushing the TTT nose right so the alloy steel keeps hardness far deeper. Option 3 overstates: the very end can't exceed the carbon-set ceiling.",
      },
      {
        q: "The recrystallization temperature of a heavily cold-worked pure metal is typically about:",
        options: ["0.1 of its melting point in kelvin", "0.3-0.5 of its melting point in kelvin", "0.7 of its melting point in kelvin", "a fixed 500 °C for all metals"],
        answer: 1,
        explanation: "The 0.3-0.5 Tm rule (kelvin!) — heavy prior cold work and purity pull it toward the low end, solutes and second-phase particles push it up. Absolute-temperature ratios are essential; 500 °C fixed is meaningless across materials.",
      },
      {
        q: "A part is quenched into a salt bath at a temperature just above $M_s$, held until transformation completes, then cooled. The final structure is:",
        options: ["martensite", "bainite", "fine pearlite", "tempered martensite"],
        answer: 1,
        explanation: "That is austempering: holding above $M_s$ long enough converts the austenite isothermally to bainite. Pausing above $M_s$ and then cooling through the martensite range (no long hold) would instead be martempering.",
      },
      {
        q: "The primary reason for tempering a quenched steel is to:",
        options: ["increase hardness further", "relieve stresses and restore toughness at some cost in hardness", "refine the prior-austenite grain size", "dissolve cementite back into austenite"],
        answer: 1,
        explanation: "Tempering precipitates fine cementite from the supersaturated BCT martensite, dropping hardness somewhat while dramatically raising toughness and relieving quench stress — untempered martensite is a crack waiting to happen.",
      },
      {
        q: "Normalizing differs from full annealing in that the normalized part:",
        options: ["is furnace-cooled more slowly, so it is softer", "is air-cooled, giving finer pearlite and slightly higher strength", "never involves heating above the critical temperature", "produces spheroidite"],
        answer: 1,
        explanation: "The only difference is the cooling rate: still air versus furnace. Faster cooling past the transformation range gives finer pearlite — and finer means slightly harder and stronger, with refined grains as a bonus. Spheroidite needs long near-eutectoid holds instead.",
      },
    ],
  },

  // ============================================================ materials 1.9
  {
    sectionId: "me-e-materials-s9",
    readingTime: 9,
    intro: "Metals are only a third of the materials story. Polymers bend the rules with chain architecture, ceramics cheat brittleness with clever phase transformations, composites average their constituents by volume — sometimes in a straight line, sometimes dramatically not — and carbon's nano-forms hold records for strength and conductivity. One rule of mixtures, applied twice with the right arithmetic, explains most of it.",
    objectives: [
      "Classify polymer architectures, copolymer types and tacticity, and link them to properties",
      "Explain why ceramics are brittle and how transformation toughening and fibre reinforcement fix that",
      "Compute longitudinal and transverse moduli of a unidirectional composite by the rule of mixtures",
      "Describe fullerenes, graphene and nanotubes and the size-dependent properties of nanomaterials",
    ],
    concepts: [
      {
        term: "Polymer architectures and configurations",
        kind: "definition",
        statement: "**Chains**: linear (HDPE), branched (LDPE), crosslinked (vulcanised rubber, thermosets) and network (phenolics). **Copolymers**: random, alternating, block, graft. **Tacticity** (side-group placement on vinyl chains): **isotactic** (all one side — crystalline, strong), **syndiotactic** (alternating), **atactic** (random — amorphous, soft; atactic polypropylene is useless as plastic, isotactic PP is a workhorse). Thermoplastics re-melt; thermosets decompose instead.",
        detail: "Above the **glass transition $T_g$** amorphous chains gain segmental mobility (rigid plastic → rubber); below it they are frozen. Semi-crystalline polymers additionally melt at $T_m > T_g$. Polyethylene: $T_g$ about -110 °C, so it is a flexible solid at room temperature; PMMA: $T_g$ about 105 °C, so it is a rigid glass until quite hot.",
      },
      {
        term: "Why ceramics are brittle — and how to toughen them",
        kind: "insight",
        statement: "Ionic/covalent bonding makes dislocation motion nearly impossible, so a crack tip meets no plastic relief: **flaw-dominated brittle fracture** with $K_{IC}$ typically 2-5 MPa$\\sqrt{m}$. Toughening levers: **transformation toughening** (partially stabilised zirconia: the tetragonal → monoclinic transformation at the crack tip expands ~4% in volume, clamping the crack shut), **fibre/whisker bridging** and **crack deflection** by elongated grains, **microcrack shielding**, and residual-compressive surface glazes.",
        detail: "PSZ can absorb 5-10x the fracture energy of plain zirconia and matches some steels' toughness — the classic example of a microstructural mechanism beating a fundamental bonding limitation.",
      },
      {
        term: "Rule of mixtures — longitudinal",
        kind: "method",
        statement: "Loading **parallel** to continuous fibres: strains are equal (isostrain), so moduli and loads average by volume: $E_{cl} = E_f V_f + E_m V_m$. Same form for density and axial strength (up to the fibre failure strain).",
        detail: "This is the good direction: with $E_f \\gg E_m$, even 60% glass in epoxy behaves mostly like glass — see the worked example reaching 43 GPa against the resin's 3 GPa.",
      },
      {
        term: "Rule of mixtures — transverse",
        kind: "law",
        statement: "Loading **perpendicular** to the fibres: stresses are equal (isostress), so compliances average: $\\frac{1}{E_{ct}} = \\frac{V_f}{E_f} + \\frac{V_m}{E_m}$ — the **inverse rule of mixtures**. The weak phase dominates: a 60/20 GPa pair can collapse to a single-digit modulus across the fibres.",
        detail: "This anisotropy ratio (often 5:1 or worse) is why real laminates are cross-plied at 0/90/+45/-45 — a single unidirectional ply is a springboard, not a structure.",
      },
      {
        term: "Carbon nano-forms",
        kind: "definition",
        statement: "**Fullerene C60**: truncated icosahedron — 20 hexagons + **12 pentagons**, about 0.71 nm across (pentagons are mandatory curvature, per Euler). **Graphene**: one-atom-thick sp2 honeycomb — Young's modulus about **1 TPa**, intrinsic strength ~130 GPa, spectacular electron mobility and thermal conductivity. **Carbon nanotubes**: rolled graphene; armchair $(n,n)$ tubes are metallic, others semiconducting depending on chirality; SWCNT vs MWCNT. **Quantum confinement**: shrink a particle and the band gap **widens** (quantum-dot colour shifts blue as size drops).",
        detail: "Graphene's numbers come from the in-plane sp2 bond of graphite — the same bond that makes graphite's basal planes excellent lubricants and their normal direction floppy. Allotropy plus dimensionality, not new chemistry, generates every one of these record properties.",
      },
    ],
    examples: [
      {
        title: "A glass/epoxy ply, both ways",
        problem: "A unidirectional composite has $V_f$ = 0.6 of E-glass ($E_f$ = 70 GPa) in epoxy ($E_m$ = 3 GPa). Compute the longitudinal and transverse moduli, and the load share carried by the fibres under longitudinal load.",
        steps: [
          { label: "Longitudinal (isostrain)", text: "$E_{cl} = 70(0.6) + 3(0.4) = 42 + 1.2 = 43.2$ GPa." },
          { label: "Transverse (isostress)", text: "$\\frac{1}{E_{ct}} = \\frac{0.6}{70} + \\frac{0.4}{3} = 0.00857 + 0.1333 = 0.1419$, so $E_{ct} = 7.05$ GPa." },
          { label: "Load share (longitudinal)", text: "Equal strain: $\\frac{P_f}{P_c} = \\frac{E_f V_f}{E_{cl}} = \\frac{42}{43.2} = 0.972$." },
          { label: "Moral", text: "Ninety-seven percent of the load rides on the fibres in the good direction — but across the fibres the ply is barely twice as stiff as the resin, a 6:1 anisotropy from 60% fibre loading." },
        ],
        result: "$E_{cl} \\approx 43$ GPa, $E_{ct} \\approx 7$ GPa — one material, two personalities, decided entirely by load direction.",
      },
    ],
    keyTakeaways: [
      "Chain architecture (linear/branched/crosslinked), copolymer sequencing and tacticity set crystallinity, hence stiffness and melting behaviour.",
      "Ceramic brittleness is bonding, not bad luck; transformation toughening (ZrO2 t→m, ~4% expansion) buys an order of magnitude in toughness.",
      "Longitudinal: $E = E_f V_f + E_m V_m$ (isostrain). Transverse: $1/E = V_f/E_f + V_m/E_m$ (isostress) — the matrix rules the transverse direction.",
      "With $E_f \\gg E_m$, fibres carry almost the entire longitudinal load ($P_f/P_c = E_f V_f / E_{cl}$).",
      "C60 = 20 hexagons + 12 pentagons; graphene ≈ 1 TPa; quantum confinement widens band gaps as particles shrink.",
    ],
    quiz: [
      {
        q: "A unidirectional composite has $V_f = 0.5$, $E_f = 70$ GPa, $E_m = 3.5$ GPa. Its longitudinal modulus is about:",
        options: ["36.8 GPa", "35.0 GPa", "6.7 GPa", "70 GPa"],
        answer: 0,
        explanation: "$E_{cl} = 70(0.5) + 3.5(0.5) = 35 + 1.75 = 36.75$ GPa. 6.7 GPa is the transverse answer for the same material — the favourite trap of this entire topic.",
      },
      {
        q: "For the same composite ($V_f = 0.5$, $E_f = 70$ GPa, $E_m = 3.5$ GPa), the transverse modulus is about:",
        options: ["36.8 GPa", "18.4 GPa", "6.7 GPa", "3.5 GPa"],
        answer: 2,
        explanation: "$1/E_{ct} = 0.5/70 + 0.5/3.5 = 0.15 \\Rightarrow E_{ct} = 6.7$ GPa — the soft matrix dominates an isostress series. 36.8 GPa is the longitudinal value; you must know which average applies.",
      },
      {
        q: "Transformation toughening in partially stabilised zirconia works because the tetragonal-to-monoclinic change:",
        options: ["dissolves the crack tip", "expands about 4% in volume, putting the crack tip under compression", "converts the ceramic to a polymer", "raises the modulus by two orders of magnitude"],
        answer: 1,
        explanation: "The stress field of an advancing crack triggers the martensitic t→m transformation, whose volume expansion locally compresses and pins the crack — energy that would propagate the crack is spent transforming the lattice instead.",
      },
      {
        q: "A fullerene C60 molecule contains how many pentagonal rings?",
        options: ["12", "20", "30", "60"],
        answer: 0,
        explanation: "12 pentagons among 20 hexagons close the cage (Euler's formula demands exactly 12 pentagons for any fullerene), giving the 0.71 nm soccer ball. 20 is the hexagon count.",
      },
      {
        q: "Isotactic polypropylene means the methyl side groups are:",
        options: ["randomly arranged on both sides of the chain", "all on the same side of the chain backbone", "alternating sides along the chain", "replaced by phenyl groups"],
        answer: 1,
        explanation: "Same side = isotactic (crystalline, stiff, the commercial plastic); alternating = syndiotactic; random = atactic (soft, amorphous). Chain configuration alone decides whether the polymer is a packaging material or a grease.",
      },
      {
        q: "As a semiconductor quantum dot is made smaller, its absorption edge:",
        options: ["shifts to longer wavelength", "shifts to shorter wavelength (wider band gap)", "does not change — band gap is a bulk property", "disappears entirely"],
        answer: 1,
        explanation: "Quantum confinement widens the gap as the particle shrinks below the exciton Bohr radius, pushing absorption/emission toward the blue — the tunability that gives quantum dots their size-controlled colours.",
      },
    ],
  },

  // ============================================================ materials 1.10
  {
    sectionId: "me-e-materials-s10",
    readingTime: 9,
    prerequisites: ["Tensile testing and S-N curves (me-e-materials-s3)", "Galvanic corrosion basics (me-e-materials-s5)"],
    intro: "Time and electrochemistry are the two slow assassins of engineering materials: creep and corrosion both advance at rates you can measure, plot and extrapolate — if you know the laws. This section runs creep through its three stages and the Larson-Miller time-temperature trade, fatigue cracks through Paris's law, mean stress through Goodman, and corrosion through polarisation curves and passivation.",
    objectives: [
      "Identify the three creep stages and their micromechanisms, and apply the Larson-Miller parameter",
      "Use Paris's law $da/dN = C(\\Delta K)^m$ to compare crack growth rates and estimate lifetimes",
      "Apply the Goodman and Soderberg criteria for mean stress in fatigue",
      "Read a polarisation (Evans) curve: corrosion potential, Tafel behaviour, passivation and pitting",
    ],
    concepts: [
      {
        term: "Creep stages and mechanisms",
        kind: "definition",
        statement: "Under sustained load at high homologous temperature ($> 0.4\\,T_m$), strain accumulates: **primary** (decelerating — work hardening dominates as dislocations tangle), **secondary/steady-state** (constant **minimum** creep rate — hardening and recovery balanced; diffusion-controlled climb), **tertiary** (accelerating — necking, grain-boundary voids coalesce, rupture). Steady-state rate: $\\dot{\\epsilon}_s = A\\sigma^n e^{-Q/RT}$ with $n \\approx 5$ for dislocation creep and $n \\approx 1$ for diffusion (Nabarro-Herring/Coble) creep.",
        detail: "Design against creep is design for a strain budget over life — a steam pipe might be allowed 1% total strain in 30 years, so the whole engineering question is the secondary-stage slope.",
      },
      {
        term: "Larson-Miller parameter",
        kind: "method",
        statement: "One number bundles stress-free time-temperature severity for a given stress: $LMP = T(C + \\log_{10} t_r)$, with $T$ in kelvin, $t_r$ in hours, $C \\approx 20$ for steels. Equal LMP ≈ equal rupture life — so a 1000-hour lab test at higher temperature stands in for a 100,000-hour service life at lower temperature.",
        detail: "Worked: 873 K for 1000 h gives $873 \\times (20 + 3) = 20{,}079$; 923 K for 100 h gives $923 \\times (20+2) = 20{,}306$ — the shorter, hotter exposure is actually the slightly more severe one.",
      },
      {
        term: "Paris law of fatigue crack growth",
        kind: "law",
        statement: "In the mid-range (stage II) of crack behaviour, growth per cycle follows $\\frac{da}{dN} = C(\\Delta K)^m$ with $m$ typically **2-4**, where $\\Delta K = Y\\Delta\\sigma\\sqrt{\\pi a}$. Below a threshold $\\Delta K_{th}$ cracks don't grow; near $K_{IC}$ stage III accelerates to fracture. Integrate $\\int da/(C(\\Delta K)^m)$ from $a_0$ to $a_c$ for cycles-to-failure — life goes as $a_0$-to-the-power $(-m/2+1)$, so **initial crack size is everything**.",
        detail: "Quick sensitivity: doubling $\\Delta K$ with $m = 4$ multiplies the growth rate 16-fold; halving the initial flaw can multiply life tenfold. This asymmetry is why NDI acceptance limits are written in fractions of a millimetre.",
      },
      {
        term: "Mean stress: Goodman and Soderberg",
        kind: "method",
        statement: "A tensile mean stress eats fatigue life. **Goodman** (line from $\\sigma_e$ on the amplitude axis to $\\sigma_u$ on the mean axis): $\\sigma_a = \\sigma_e (1 - \\sigma_m/\\sigma_u)$. **Soderberg** swaps $\\sigma_u$ for $\\sigma_y$ — more conservative, protects against first-cycle yielding. **Gerber** is the parabola between the same endpoints.",
        detail: "Example: $\\sigma_e$ = 400 MPa, $\\sigma_u$ = 1000 MPa, mean stress 250 MPa → allowable amplitude $400(1 - 0.25) = 300$ MPa. Compression means are mildly beneficial — shot-peening exploits exactly this.",
      },
      {
        term: "Polarisation curves and passivation",
        kind: "insight",
        statement: "On a potentiodynamic (Evens-type) plot of potential versus log current density: the **corrosion potential $E_{corr}$** sits where the anodic and cathodic branches intersect (mixed-potential theory), and the current there is $i_{corr}$ — convertible to penetration rate by Faraday. Kinetics follow the **Tafel equation** $\\eta = \\beta \\log(i/i_0)$. **Active-passive metals** (stainless, Ti, Ni) show the anodic current collapsing by orders of magnitude above a critical passivating potential — until **chlorides induce pitting** at a breakdown potential.",
        detail: "This picture unifies the corrosion toolkit: cathodic protection pulls the potential back into the active range below the passive film's stability window... in fact, into a region where the metal is thermodynamically immune; inhibitors and alloying (Cr!) widen the passive plateau; avoid galvanic couples that polarise stainless dangerously.",
      },
    ],
    examples: [
      {
        title: "Ranking creep severity with Larson-Miller",
        problem: "A boiler steel ran 10,000 hours at 550 °C (823 K). Maintenance proposes 5,000 hours at 580 °C (853 K). Which duty is more severe at the same stress (C = 20)?",
        steps: [
          { label: "LMP of current duty", text: "$823 \\times (20 + \\log_{10} 10^4) = 823 \\times 24 = 19{,}752$." },
          { label: "LMP of proposed duty", text: "$853 \\times (20 + \\log_{10} 5000) = 853 \\times (20 + 3.699) = 853 \\times 23.699 = 20{,}215$." },
          { label: "Compare", text: "20,215 > 19,752 — the shorter, hotter exposure is **more** damaging: +463 LMP is equivalent to a meaningful life debit." },
          { label: "Translate back", text: "At the original 823 K, the same LMP would need $\\log t_r = 20{,}215/823 - 20 = 4.55 \\Rightarrow t_r \\approx 35{,}000$ hours — wait, that exceeds the 10,000-h budget, confirming the new duty ages the steel faster per hour." },
        ],
        result: "The 580 °C / 5,000 h plan is the harsher duty — cut hours, cut temperature, or re-rate the component.",
      },
      {
        title: "Sensitivity check with Paris law",
        problem: "A steel plate has $m = 4$ in Paris's law. If inspection improves and the detectable initial crack halves while everything else is fixed, roughly what happens to growth rate comparisons — and to life?",
        steps: [
          { label: "Rate at fixed crack", text: "$\\Delta K \\propto \\sqrt{a}$: halving $a_0$ cuts $\\Delta K$ by $\\sqrt{2}$ and the rate by $(\\sqrt{2})^4 = 4$ — slower from the start." },
          { label: "Life scaling", text: "For $m = 4$, $N_f \\propto 1/a_0$ to leading order: halving the starting flaw roughly **doubles** the number of cycles to grow it to critical size." },
          { label: "Engineering meaning", text: "A factor-2 improvement in detection limits is a factor-2 life extension at zero weight cost — the cheapest fatigue design decision available." },
        ],
        result: "Halving $a_0$ divides early growth rate by 4 and approximately doubles remaining life.",
      },
    ],
    keyTakeaways: [
      "Creep: primary decelerates, secondary is the minimum-rate design datum (recovery-climb balanced), tertiary is damage racing to rupture.",
      "$LMP = T(C + \\log t_r)$, C ≈ 20 for steels: equal parameter, equal life — the lab-to-service exchange rate.",
      "Paris: $da/dN = C(\\Delta K)^m$, m ≈ 2-4; because $\\Delta K \\propto \\sqrt{a}$, life is hyper-sensitive to initial flaw size.",
      "Goodman $\\sigma_a = \\sigma_e(1 - \\sigma_m/\\sigma_u)$ for mean stress; Soderberg is the conservative yield-based variant.",
      "Evans/Tafel curves locate $E_{corr}$ and $i_{corr}$ (→ penetration rate); passive metals collapse their anodic current until chlorides pit them.",
    ],
    quiz: [
      {
        q: "Using the Larson-Miller parameter with C = 20, compute $LMP$ for a steel tested at 900 K with a rupture life of 100 hours.",
        options: ["about 9,200", "about 19,800", "about 21,400", "about 90,000"],
        answer: 1,
        explanation: "$LMP = 900(20 + \\log_{10} 100) = 900 \\times (20 + 2) = 900 \\times 22 = 19{,}800$. The 21,400 distractor uses 1000 hours (log = 3) and 9,200 forgets the constant entirely.",
      },
      {
        q: "A material obeys Paris's law with exponent m = 4. If the stress range (and hence $\\Delta K$) doubles, the crack growth rate increases by a factor of:",
        options: ["2", "4", "8", "16"],
        answer: 3,
        explanation: "$da/dN \\propto (\\Delta K)^4$, so doubling $\\Delta K$ gives $2^4 = 16$. Choosing 8 corresponds to m = 3 and 4 to m = 2 — knowing the exponent is knowing the physics.",
      },
      {
        q: "In which creep stage is the strain rate at its minimum and approximately constant?",
        options: ["primary", "secondary (steady-state)", "tertiary", "the elastic stage"],
        answer: 1,
        explanation: "Secondary creep balances dislocation generation (hardening) against climb-enabled recovery, giving the flat minimum-rate segment used for design life. Tertiary accelerates via necking and void growth toward rupture.",
      },
      {
        q: "A steel has endurance limit 400 MPa and UTS 1000 MPa. By the Goodman criterion, the allowable stress amplitude at a mean stress of 250 MPa is:",
        options: ["100 MPa", "250 MPa", "300 MPa", "400 MPa"],
        answer: 2,
        explanation: "$\\sigma_a = 400(1 - 250/1000) = 400 \\times 0.75 = 300$ MPa. 250 MPa is the answer if you subtract the mean stress from the amplitude instead of scaling, and 400 MPa ignores mean stress entirely.",
      },
      {
        q: "An electrode obeys the Tafel equation with $\\beta = 100$ mV per decade. Increasing the current density 1000-fold requires an overpotential of:",
        options: ["100 mV", "300 mV", "1 V", "33 mV"],
        answer: 1,
        explanation: "$\\eta = \\beta \\log(i/i_0) = 100 \\times \\log(10^3) = 300$ mV — three decades times the slope. One decade per 100 mV is the whole content of Tafel kinetics.",
      },
      {
        q: "The anodic polarisation curve of 304 stainless steel in dilute acid shows current density dropping by several orders of magnitude as potential increases past about +0.2 V. This is:",
        options: ["cathodic protection", "active-passive transition — formation of a protective oxide film", "concentration polarisation by oxygen depletion", "galvanic attack"],
        answer: 1,
        explanation: "That collapse is passivation: a chromium-rich oxide film forms and chokes the anodic dissolution current. Chloride ions locally rupture the film above the pitting potential, which is why seawater is the enemy of stainless.",
      },
    ],
  },

  // ============================================================ metrology 1.1
  {
    sectionId: "me-e-metrology-s1",
    readingTime: 8,
    intro: "Measurement is engineering's contract language, and every contract needs a reference. This section builds the reference ladder — line standards, end standards, the wavelength of light — then turns to comparators, the amplifiers that turn a micron of difference into millimetres of needle travel, and the Abbe principle whose violation explains why a caliper lies to you at exactly the wrong moment.",
    objectives: [
      "Distinguish line standards, end standards and the wavelength standard with accuracy and use cases",
      "Explain slip-gauge grades and wringing, and build stacks to a target dimension",
      "Classify comparators (mechanical, optical, electrical, pneumatic) by amplification and application",
      "Quantify Abbe offset errors numerically and identify which instruments obey the principle",
    ],
    concepts: [
      {
        term: "Line, end and wavelength standards",
        kind: "definition",
        statement: "**Line standard**: the quantity is the distance between two engraved lines (steel rule) — cheap, direct reading, but suffers parallax and line-thickness limits (best ~0.2 mm). **End standard**: the quantity is the distance between two end faces (slip/gauge blocks, end bars) — accuracy to a tenth of a micron, wringable into stacks; the workshop's working standard. **Wavelength standard**: the metre is defined as the distance light travels in 1/299,792,458 s, realised by stabilised lasers (He-Ne at 632.8 nm) — the top of the traceability pyramid.",
        detail: "Historical stepping stones: the Pt-Ir artefact bar (two lines, 1889), then the krypton-86 orange line (605.7 nm, 1960), then the 1983 speed-of-light definition. Each step bought orders of magnitude and made the standard reproducible anywhere in the universe.",
      },
      {
        term: "Slip gauges and wringing",
        kind: "method",
        statement: "Gauge blocks are hardened, lapped to flatness within ~0.05 µm; **wringing** — sliding two blocks together with a whisper of oil — bonds them by molecular adhesion so the stack behaves as one piece. Grades by tolerance: **calibration/reference** (tightest, for standards rooms), **inspection**, **workshop**. Building a stack: start with the last decimal digit and work left (e.g., 47.825 = 1.005 + 6.82? — no: 1.005 + 1.32 + 45.5), minimising block count.",
        detail: "Care discipline: never wring without wiping, never exceed 4-5 blocks (errors stack too), always compensate temperature by measuring near 20 °C. A stack's calibrated value is the sum of individual deviations from nominal.",
      },
      {
        term: "Comparators and amplification",
        kind: "definition",
        statement: "A comparator does not measure length absolutely — it reports the **difference** between a workpiece and a reference (usually a slip-gauge stack set to nominal), amplified so a technician can read it. Families: **mechanical** (dial, sigma — amplification ~100-1000x), **mechanical-optical** (optical lever, ~1000-3000x), **electrical** (LVDT/cartridge — up to ~10,000x, easily digitised), **pneumatic** (back-pressure/Solex — up to ~10,000x+, non-contacting, self-cleaning, averages surface finish).",
        detail: "Requirements checklist: high magnification with linear response, zero drift, minimal backlash/ inertia, robustness, and quick zero-setting. Pneumatic systems shine on bores and soft parts (no stylus force); LVDTs dominate where data must go straight to a computer.",
      },
      {
        term: "The Abbe principle",
        kind: "theorem",
        statement: "**The axis of measurement should be collinear with the axis of the measuring scale.** Any offset $d$ between the axes converts angular guide error $\\theta$ into length error $e = d\\tan\\theta \\approx d\\theta$ (sine error). The **outside micrometer obeys Abbe** (spindle, scale and dimension share a line); the **vernier caliper violates it** (jaws offset from the beam scale) — which is why calipers are one class less accurate than micrometers of the same graduation.",
        detail: "Abbe offset multiplies geometric imperfection: 30 mm of jaw offset with a 0.1° carriage tilt yields $30 \\times 0.001745 = 52$ µm of pure fiction — larger than a caliper's entire least count. Design lesson: put the scale in line with the displacement, or measure the angle and compensate.",
      },
    ],
    examples: [
      {
        title: "The caliper that lied",
        problem: "A vernier caliper with 30 mm of beam-to-jaw offset measures a gauge block. During measurement the carriage tilts by 0.1°. (a) Compute the systematic error. (b) What error would an Abbe-compliant micrometer suffer from the same angular error?",
        steps: [
          { label: "Convert the tilt", text: "$\\theta = 0.1° = 0.1 \\times \\pi/180 = 1.745 \\times 10^{-3}$ rad." },
          { label: "(a) Sine error", text: "$e = d\\tan\\theta = 30 \\times 1.745 \\times 10^{-3} = 0.0524$ mm ≈ 52 µm — the jaws sweep an arc while the scale thinks it moved in a straight line." },
          { label: "(b) Micrometer", text: "Offset d ≈ 0, so $e = 0 \\times \\tan\\theta = 0$: the angular error has no lever arm. The spindle, thimble scale and the dimension are collinear — Abbe's promise." },
          { label: "Interpretation", text: "A 0.02 mm caliper graduation is meaningless in the presence of a 52 µm geometry error; the instrument's real accuracy is set by the Abbe term, not the vernier." },
        ],
        result: "52 µm of Abbe error for the caliper, zero for the micrometer — same tilt, different geometry, 2.6 least-counts of fiction.",
      },
      {
        title: "Building a 47.825 mm stack",
        problem: "Build 47.825 mm from a standard slip-gauge set using the fewest blocks.",
        steps: [
          { label: "Rule", text: "Start from the last digit: the 0.005 mm digit says block 1 = 1.005 mm (every set's one and only .005 block). Remaining: 46.820 mm." },
          { label: "Next digit", text: "Take 1.32? Sets carry 1.001-1.009 and 1.01-1.49 pieces: block 2 = 1.32 mm. Remaining: 45.500 mm." },
          { label: "Finish with tens", text: "Block 3 = 45.5 mm (from the 10-100 range halves). Sum: 1.005 + 1.32 + 45.5 = 47.825 mm." },
          { label: "Check", text: "Three blocks — good practice; each wringing interface adds sub-micron uncertainty, so count discipline is accuracy discipline." },
        ],
        result: "1.005 + 1.32 + 45.5 = 47.825 mm in three blocks.",
      },
    ],
    keyTakeaways: [
      "Line standard = engraved lines (rules); end standard = end faces (slip gauges, an order of magnitude better); wavelength standard = the SI metre via the speed of light.",
      "Wringing stacks blocks into a single lapped assembly; build from the last decimal digit and keep the block count low.",
      "Comparators amplify differences against a reference: mechanical ~1000x, optical lever ~3000x, LVDT and pneumatic up to ~10,000x.",
      "Abbe: error = offset × tan(tilt). Micrometers comply; calipers do not — hence their accuracy gap.",
      "A 30 mm offset with 0.1° of tilt already produces 52 µm of error — geometry beats graduation as the accuracy limiter.",
    ],
    quiz: [
      {
        q: "A measuring instrument holds its scale 25 mm to the side of the displacement axis. If the guidance tilts by 0.2° during measurement, the resulting Abbe error is about:",
        options: ["0.87 µm", "8.7 µm", "87 µm", "870 µm"],
        answer: 2,
        explanation: "$e = 25 \\times \\tan 0.2° = 25 \\times 0.00349 = 0.0873$ mm ≈ 87 µm. Missing the mm-to-µm conversion by a factor of ten gives the 8.7 µm distractor.",
      },
      {
        q: "Which of these instruments best satisfies the Abbe principle?",
        options: ["vernier caliper", "outside micrometer", "steel rule", "height gauge with offset scriber"],
        answer: 1,
        explanation: "In a micrometer the dimension, the spindle axis and the thimble scale are all collinear — Abbe's requirement. Calipers, rules and offset-scribe height gauges all measure displaced from their scale axis.",
      },
      {
        q: "A gauge block is classified as which type of standard?",
        options: ["line standard", "end standard", "wavelength standard", "secondary voltage standard"],
        answer: 1,
        explanation: "Its defining quantity is the distance between the two end faces — the archetypal end standard, wringable and accurate to a tenth of a micron. Line standards live between engraved graduations.",
      },
      {
        q: "The metre is currently defined as:",
        options: ["the length of a platinum-iridium bar in Sevres", "1,650,763.73 wavelengths of krypton-86 radiation", "the distance light travels in vacuum in 1/299,792,458 of a second", "one ten-millionth of the distance from pole to equator"],
        answer: 2,
        explanation: "Since 1983 the metre is fixed by defining the speed of light. The krypton definition ruled 1960-1983; the artefact bar and the Earth-quadrant definition are the older, less reproducible ancestors.",
      },
      {
        q: "The essential function of a comparator is to:",
        options: ["measure absolute lengths from a built-in scale", "compare a dimension against a reference standard with high amplification", "inspect surface roughness optically", "generate a reference wavelength"],
        answer: 1,
        explanation: "Comparators have no absolute scale of their own — they are difference amplifiers zeroed on a reference (typically slip gauges), which is exactly why their accuracy can exceed their size and cost.",
      },
    ],
  },

  // ============================================================ metrology 1.2
  {
    sectionId: "me-e-metrology-s2",
    readingTime: 9,
    intro: "The vernier caliper and the micrometer are the workhorses of dimensional measurement — and their least counts are pure arithmetic, not marketing. Add the sine bar for angles (it is just trigonometry with roller centres), the autocollimator for straightness over metres, and angle gauges that build to seconds of arc, and linear-and-angular measurement is fully equipped.",
    objectives: [
      "Derive and compute least counts of vernier calipers and micrometers from their scale construction",
      "Read a full vernier or micrometer measurement including zero error",
      "Set up and compute sine-bar angles from slip-gauge stacks, and know its accuracy envelope",
      "Explain the autocollimator principle and its role in straightness, flatness and small-angle measurement",
    ],
    concepts: [
      {
        term: "Vernier principle and least count",
        kind: "method",
        statement: "**LC = 1 main-scale division − 1 vernier-scale division.** The classic metric caliper: 50 vernier divisions span 49 main divisions → 1 VSD = 0.98 MSD → **LC = 0.02 mm** (with 1 mm MSDs). Reading = main-scale reading to the left of the vernier zero + (coinciding vernier division) × LC.",
        detail: "A vernier works because graduations drift out of step: at the k-th vernier line the cumulative mismatch is k × LC, and the coincidence of lines marks exactly k × LC beyond the last main graduation. Zero error (vernier zero right/left of main zero) must be added or subtracted algebraically.",
      },
      {
        term: "Micrometer screw gauge",
        kind: "method",
        statement: "**LC = pitch ÷ number of thimble divisions.** Standard metric: pitch 0.5 mm, 50 divisions on the thimble → **LC = 0.01 mm**. Reading = sleeve (whole + half mm, the half-mm line appears below the datum) + thimble × 0.01. Faster screw pitch (2 mm, 100 divisions) keeps the same 0.01; digital micrometers resolve 0.001 mm.",
        detail: "Fringes of technique that actually matter: use the ratchet/friction stop (standard measuring force ~5-10 N), check zero with the anvils closed, wipe faces. The 0.5 mm pitch two-start? — no, one start; the sleeve simply carries two datum rows, one for whole and one for half millimetres.",
      },
      {
        term: "Sine bar",
        kind: "method",
        statement: "Two equal rollers, centre distance L (100 or 200 mm standard), one propped on a slip-gauge stack: $\\sin\\theta = h/L$. Example: L = 100 mm, stack 50 mm → $\\theta = 30°$. Best below **45°** — since $dh = L\\cos\\theta\\,d\\theta$, near 90° a tiny height error explodes into a large angle error.",
        detail: "The sine bar measures an angle against a length standard — that is its beauty and its limitation. For steep angles, complement it (measure 90° − θ) or use an angle gauge/autocollimator stack instead.",
      },
      {
        term: "Autocollimator",
        kind: "definition",
        statement: "A collimated light beam reflects off a flat mirror mounted on the object; a tilt $\\theta$ of the mirror deflects the reflected beam by **2θ**, displacing the image on a graduated eyepiece/photodetector. Sensitivities reach a **tenth of an arc-second**, and the instrument reads tilt, which is why sweeping a mirror along a straightedge or surface plate yields **straightness and flatness profiles** (integrating tilt into height).",
        detail: "Straightedge calibration: step the mirror/pedestal along by equal spans, record tilt each step, integrate differences to height deviations; close the loop or least-squares the line. The same instrument with a polygon mirror calibrates rotary tables and dividing heads to arc-second level.",
      },
      {
        term: "Angle gauges and clinometers",
        kind: "notation",
        statement: "Angle-gauge blocks (degrees, minutes, seconds series) stack **additively or subtractively** — a 13-piece set can build any angle in steps of 3 seconds of arc. The **clinometer** (spirit level on a rotatable vernier circle) reads inclination of surfaces directly to a minute or so; **spirit levels** resolve ~10 arc-seconds per division for machine setting.",
        detail: "Angle gauges carry a wedge symbol showing direction; stacking with alternating directions subtracts — e.g., 30° + 1° laid against 3° builds 28°, and seconds blocks trim the remainder. They are to angles what slip gauges are to lengths.",
      },
    ],
    examples: [
      {
        title: "A full vernier reading",
        problem: "On a metric vernier caliper (LC = 0.02 mm), the main scale reads 37 mm to the left of the vernier zero, and the 18th vernier division coincides. With jaws closed, the vernier zero sits 0.04 mm (two divisions) to the right of the main zero. What is the true dimension?",
        steps: [
          { label: "Raw reading", text: "Main 37 mm + 18 × 0.02 = 37 + 0.36 = 37.36 mm." },
          { label: "Zero error", text: "Vernier zero right of main zero with closed jaws = **positive zero error** of +0.04 mm." },
          { label: "Correction", text: "True = raw − zero error = 37.36 − 0.04 = 37.32 mm." },
          { label: "Watch the sign convention", text: "Right-of-zero with closed jaws means the instrument over-reads, hence subtract; if the vernier zero had sat left, the error would be negative and the correction additive." },
        ],
        result: "37.32 mm — the zero check is the 10-second habit that separates a measurement from a guess.",
      },
      {
        title: "Setting 30 degrees on a sine bar",
        problem: "A 100 mm sine bar must be set to 30°. Compute the stack, build it, and assess the angle sensitivity to a ±1 µm stack error.",
        steps: [
          { label: "Trigonometry", text: "$h = L\\sin\\theta = 100\\sin 30° = 50.000$ mm." },
          { label: "Stack", text: "From a standard set: 40 + 9.5 + 0.5 = 50.000 mm (three blocks), wrung and placed under the far roller." },
          { label: "Sensitivity", text: "$dh = L\\cos\\theta\\,d\\theta$: at 30°, 1 µm of height error gives $d\\theta = 0.001/(100 \\times 0.866) = 1.15 \\times 10^{-5}$ rad ≈ **2.4 arc-seconds**." },
          { label: "Envelope", text: "Sub-arc-second accuracy is therefore possible at modest angles with calibrated blocks — and increasingly expensive as θ → 90° (cos θ → 0 inflates everything)." },
        ],
        result: "Stack 50.000 mm exactly; ±1 µm on the stack costs about ±2.4 arc-seconds at 30°.",
      },
    ],
    keyTakeaways: [
      "LC(vernier) = 1 MSD − 1 VSD (49:50 construction → 0.02 mm); LC(micrometer) = pitch/thimble divisions (0.5/50 → 0.01 mm).",
      "Read = main + coincidence × LC, then algebraically correct the zero error measured with closed anvils/jaws.",
      "Sine bar: $\\sin\\theta = h/L$ — a length-based angle standard, accurate below 45° and exponentially sensitive beyond.",
      "Autocollimator: mirror tilt θ deflects the beam 2θ; integrating equal-step tilts yields straightness/flatness to sub-arc-second.",
      "Angle gauges stack additively and subtractively to 3-second resolution — slip gauges for angles.",
    ],
    quiz: [
      {
        q: "A vernier caliper has 1 mm main-scale divisions, and 50 vernier divisions coincide with 49 main-scale divisions. Its least count is:",
        options: ["0.1 mm", "0.05 mm", "0.02 mm", "0.01 mm"],
        answer: 2,
        explanation: "1 VSD = 49/50 = 0.98 mm, so LC = 1 − 0.98 = 0.02 mm. The 0.01 mm answer belongs to the micrometer, and 0.05 to the older 20-division vernier construction.",
      },
      {
        q: "A micrometer screw has a pitch of 0.5 mm and its thimble carries 50 divisions. Its least count is:",
        options: ["0.5 mm", "0.05 mm", "0.01 mm", "0.001 mm"],
        answer: 2,
        explanation: "One thimble division advances the spindle 0.5/50 = 0.01 mm. Digital versions with an extra decade give 0.001 mm, but the classical mechanical instrument stops at 0.01.",
      },
      {
        q: "A 100 mm sine bar uses a slip-gauge stack of exactly 50 mm under one roller. The angle set is:",
        options: ["15°", "30°", "45°", "60°"],
        answer: 1,
        explanation: "$\\sin\\theta = h/L = 50/100 = 0.5 \\Rightarrow \\theta = 30°$. A stack of 70.7 mm would give 45° — the other memorable pair.",
      },
      {
        q: "In the worked vernier example, the raw reading was 37.36 mm and the closed-jaw zero error was +0.04 mm. The corrected dimension is:",
        options: ["37.40 mm", "37.32 mm", "37.36 mm", "37.28 mm"],
        answer: 1,
        explanation: "A positive zero error means the caliper over-reads, so subtract: 37.36 − 0.04 = 37.32 mm. Adding instead (37.40) is the classic sign flip.",
      },
      {
        q: "An autocollimator is best described as an instrument that:",
        options: ["collimates light to measure long distances directly", "measures small angular tilts of a mirror via the 2θ deflection of a reflected beam", "compares angles against a sine bar", "measures roundness of bores"],
        answer: 1,
        explanation: "Its bread and butter is tiny angles: a mirror tilt of θ swings the returned beam by 2θ, which the graduated reticle or detector converts to arc-seconds — and stepping that mirror along a bed integrates tilts into a straightness profile.",
      },
    ],
  },

  // ==== SENTINEL_FOR_APPEND ====
]
