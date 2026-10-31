/**
 * Knowledge Universe — Nanotechnology — Chapter 03: Carbon Nanomaterials & Nanoelectronics
 * 2 lessons · ~3,553 words
 * field: Nanotechnology
 * legacy sources: x61-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Carbon Nanomaterials & Nanoelectronics]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 nano-carbon-family — Fullerenes, Nanotubes and Graphene: The Carbon Family
 *   03.2 nano-nanoelectronics-scaling — Nanoelectronics: Transistors at the Scaling Limit
 */
import type { KnowledgeTopic } from '../../types'

export const nanotechnologyCh03: KnowledgeTopic[] = [
  {
    id: 'nano-carbon-family',
    title: 'Fullerenes, Nanotubes and Graphene: The Carbon Family',
    domain: 'Emerging & Interdisciplinary',
    field: 'Nanotechnology',
    branch: 'Carbon Nanomaterials & Nanoelectronics',
    tier: 'core' as const,
    concepts: [
      'Curved sp² carbon: the 1985 fullerene discovery',
      'Nanotubes: cylinders, chirality and the metal/semiconductor switch',
      'Mechanics and transport: the strongest bonds, the fastest current',
      'Graphene: Dirac cones and massless charge carriers',
      'Beyond graphene: the 2D family and heterostructures',
      'Honest engineering: where carbon nanomaterials actually ship',
    ],
    words: 1817,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The book\u2019s opening tour introduced carbon\u2019s nanoscale stars in a single paragraph — a graphene sheet, sticky-tape isolation, extraordinary numbers. This lesson gives those names their physics. Carbon is unique among elements in building stable structures that are curved, hollow and one atom thick while remaining pure elemental chemistry: no doping recipe, no compound synthesis, just bonding geometry. Three Nobel Prizes anchor the story — fullerenes in 1996, graphene in 2010 — and the carbon nanotube sits between them as the field\u2019s great almost-there material. Together they form a family whose members differ only in how a hexagonal chickenwire is rolled, capped or flattened, and whose properties swing from metal to semiconductor to insulator with the rolling angle.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Carbon nanomaterials are the case study for how a nanoscale discovery becomes an industry — and for how long the gap between those two sentences can be. Graphene moved from laboratory curiosity to touchscreen electrodes, battery additives and sensor platforms in under two decades; nanotubes strengthened sports equipment and composite aircraft parts decades before the transistor promise materialized. Reading this family teaches the transferable skill of separating a material\u2019s intrinsic property (where the claims are true and stunning) from its manufacturable form (where fibers, films and junctions lose most of it). That skill generalizes to every 2D material now racing through the literature.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Curvature in sp² carbon comes from pentagons. A perfect graphene sheet is flat because every ring is a hexagon; substitute twelve pentagons into the network and the sheet closes into a sphere — C60, buckminsterfullerene, a molecular football sixty carbons wide at about one nanometre. Harry Kroto, Rick Smalley and Robert Curl found it in 1985 by laser-vaporizing graphite and reading the mass spectrum: a lone, stubborn peak at 720 atomic mass units that no plausible fragment explained. The structure — twenty hexagons and twelve pentagons in the truncated icosahedron of a football — earned the 1996 Nobel Prize in Chemistry and opened the cage chemistry that followed: endohedral fullerenes with metal atoms inside, fullerene derivatives in organic solar cells. The pentagon-count rule generalizes: twelve pentagons close a sphere, six make a cone, and zero keep the sheet flat — topology governing nanoscale architecture.',
      },
      {
        kind: 'para',
        text: 'Roll the sheet into a seamless cylinder and you have the carbon nanotube — observed by Sumio Iijima in 1991 in the soot of an arc-discharge experiment at NEC, in multi-walled concentric form, with single-walled tubes following in 1993. The defining variable is chirality, the pair of integers (n, m) that specifies how the graphene lattice wraps: roll along one symmetry axis for the zigzag family, along the other for armchair, anywhere between for the chiral family. Chirality decides the electronics. When n − m is a multiple of three, the allowed electron states cross the conducting point of the band structure and the tube is metallic with no gap; the remaining two-thirds are semiconducting with a band gap that scales roughly as 0.9 electron-volts divided by the diameter in nanometres. One element, one bonding pattern — and a metal-to-semiconductor switch set entirely by rolling angle and diameter, which is both the nanotube\u2019s magic and its manufacturing curse: as-grown soot is a mixture, and every application has to sort it.',
      },
      {
        kind: 'para',
        text: 'The mechanical and transport numbers are the reason the family refuses to leave the literature. The carbon-carbon bond in sp² carbon is among the strongest in nature, and in a defect-free nanotube or graphene sheet it is loaded directly: Young\u2019s modulus near 1 terapascal, estimated tensile strength in the range of tens to above a hundred gigapascals — order fifty to a hundred times steel at a fraction of the density. Electrical current density reaches around 10⁹ amperes per square centimetre, orders of magnitude beyond copper interconnects, with thermal conductivity comparable to diamond. The catch is engineering, not physics: strength claims apply to the perfect crystal, but a macroscopic fiber or composite is a network of shorter tubes and flakes whose load must cross countless weak interfaces — real carbon-fiber composites and spun CNT fibers land in the single-digit gigapascal range. The intrinsic property is real; the transfer of that property into bulk matter is the decades-long problem the opening tour\u2019s honest caveats named.',
      },
      {
        kind: 'para',
        text: 'Graphene — the flat sheet itself, isolated by Andre Geim and Konstantin Novoselov in 2004 (the sticky-tape story told in this book\u2019s opening lesson; Nobel Prize in Physics 2010) — earns its own physics from its band structure. Because the conduction and valence bands meet in cone-shaped touches at two symmetry points rather than crossing with a gap, the charge carriers obey a linear energy-momentum relation like massless particles: they behave as Dirac fermions moving at roughly a million metres per second, about 1/300 of light speed, rather than as the massive, band-gap-bound carriers of silicon. Mobility in suspended sheets has exceeded 200,000 square centimetres per volt-second. One optical consequence is exact: a single atomic layer absorbs πα ≈ 2.3 percent of normal-incidence light — the fine-structure constant, made visible in a material you can see through but that still conducts. What graphene famously does NOT have is a band gap, which is why the transistor problem is structural: no gap means no real off state, and logic built on gapless channels barely discriminates.',
      },
      {
        kind: 'para',
        text: 'Graphene was the proof that stable one-atom-thick crystals exist, and the family now extends across the periodic table\u2019s behavior range: hexagonal boron nitride as the atomically flat insulator (white graphene), molybdenum disulfide as the natural semiconductor (monolayer band gap near 1.8 electron-volts, direct where the bulk is indirect), black phosphorus as the tunable gap, and the MXenes as conducting carbides. The real architectural idea is stacking: van der Waals heterostructures — layers assembled like atomic LEGO, any sequence, no lattice-matching rule — and the twist angle between two graphene sheets as a dial that produced superconductivity in magic-angle bilayers. This is the design language the carbon family bequeathed: properties assembled layer by layer rather than doped atom by atom, with the 2D-channel transistor waiting in the next lesson as the device payoff.',
      },
      {
        kind: 'para',
        text: 'Where the family actually ships is the honest ledger. Carbon nanotubes earn their keep today as conductive additives in lithium-ion battery electrodes (a percolating network at fractions of a percent loading), in structural composites for bicycle frames, wind blades and aircraft parts, and in electrostatic-dissipative plastics; sorted semiconducting tubes drive printed and flexible electronics research. Graphene\u2019s shipped products are conductive inks and coatings, composite additives, thermal films in phones, membranes and biosensor platforms — while the transparent-electrode fight against indium tin oxide remains a cost-and-manufacturing story, and the digital-logic dream waits for a band gap that chemistry has not cleanly delivered. The pattern to carry forward: nanomaterials enter markets through the applications where their defects do not matter, then climb — the exact trajectory the applications chapters of this book trace in medicine and clean tech.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Classify a Nanotube and Estimate Its Band Gap',
        steps: [
          'Take the chiral vector (10, 6). Metallic test: n − m = 4, not divisible by 3 — the tube is semiconducting.',
          'Diameter from the lattice constant a = 0.246 nm: d = (a/π)·√(n² + m² + n·m) = (0.246/π)·√(100 + 36 + 60) = (0.246/π)·14 ≈ 1.10 nm.',
          'Band gap from the chirality rule: Eg ≈ 0.9 eV / d ≈ 0.9 / 1.10 ≈ 0.8 eV — a mid-gap semiconductor tunable purely by rolling geometry.',
          'Compare (8, 8): n − m = 0, divisible by 3 — armchair, metallic, no gap. Same element, same bond, different integer pair: the classification takes thirty seconds and decides the application.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Battery electrodes: CNT and graphene conductive additives build percolating networks that let active materials charge faster at tiny loadings — the family\u2019s largest current market.',
        'Structural composites: nanotube-modified resins in sporting goods, wind-turbine blades and aircraft components trade cost against fracture toughness and conductivity.',
        'Transparent conductors: graphene films target touchscreens and displays as the thin-film alternative to scarce indium tin oxide.',
        'Sensors and membranes: single-atom thickness means every atom is surface — the foundation of graphene biosensors and desalination-scale filtration research.',
        'Printed and flexible electronics: sorted semiconducting nanotubes and 2D channels drive thin-film transistors where silicon cannot bend.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, quoting fiber strength as material strength: "two hundred times steel" describes the perfect crystal, and any bulk form lives or dies at its interfaces. Second, promising graphene logic: no band gap means a poor switch; the honest graphene transistor story runs through RF analog and 2D-channel substitutes like MoS2. Third, misreading chirality: both indices matter, and the metal/semiconductor test is n − m modulo three, not n alone. Fourth, assuming all 2D materials inherit graphene\u2019s mobility — most trade mobility for a usable gap. Fifth, conflating the tape-isolated research material with the large-area chemical-vapor-deposition films that manufacturing actually uses; they are the same lattice at very different defect levels, and application claims must say which one they mean.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Fullerene', def: 'A closed sp² carbon cage — C60 the archetype — closed by exactly twelve pentagons; Nobel Chemistry 1996.' },
        { term: 'Chirality (n, m)', def: 'The integer pair describing how a graphene sheet rolls into a nanotube; it selects metallic versus semiconducting behavior.' },
        { term: 'Dirac cone', def: 'Graphene\u2019s conical band crossing, giving linear dispersion and massless-fermion carriers at ~10⁶ m/s.' },
        { term: 'Fine-structure opacity', def: 'Graphene\u2019s 2.3 percent absorption per layer, πα — an exact optical constant of the monolayer.' },
        { term: 'Van der Waals heterostructure', def: 'A designer stack of 2D layers bonded by van der Waals forces, assembled layer by layer without lattice-matching constraints.' },
        { term: 'Band gap ~0.9 eV/d', def: 'The empirical semiconducting-nanotube gap scaling with diameter d in nanometres — geometry as band-structure engineering.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A nanotube with chiral indices (9, 3) is…',
          options: ['metallic, because 9 − 3 = 6 is divisible by 3', 'semiconducting, because m is smaller', 'insulating, because it is chiral', 'impossible to roll'],
          answer: 0,
          explain: 'n − m = 6, a multiple of 3, so allowed states cross the Fermi point: metallic. Two-thirds of random chiralities are instead semiconducting.',
        },
        {
          q: 'Why does graphene make a poor digital logic transistor?',
          options: ['It conducts too slowly', 'It has no band gap, so the on/off discrimination is weak', 'It is too thick', 'It melts at processing temperatures'],
          answer: 1,
          explain: 'The Dirac cones leave no gap: the channel never truly turns off. Logic needs a gap — which is why 2D semiconductors like MoS2 inherit the role.',
        },
        {
          q: 'Closing a graphene sheet into a sphere requires how many pentagons among the hexagons?',
          options: ['Six', 'Twelve', 'Twenty', 'None — spheres are hexagons only'],
          answer: 1,
          explain: 'Twelve pentagons close the sheet into C60\u2019s truncated icosahedron; pentagon count also sets cone angles and caps in nanotubes.',
        },
        {
          q: 'Graphene absorbs about 2.3 percent of light per layer because…',
          options: ['of the fine-structure constant πα in its Dirac-cone absorption', 'it is one nanometre thick', 'carbon is black', 'of plasmon resonance'],
          answer: 0,
          explain: 'The universal monolayer opacity is πα ≈ πe²/hc ≈ 2.3 percent — a quantum-electrodynamic constant made visible by the linear band structure.',
        },
      ] },
    ],
  },
  {
    id: 'nano-nanoelectronics-scaling',
    title: 'Nanoelectronics: Transistors at the Scaling Limit',
    domain: 'Emerging & Interdisciplinary',
    field: 'Nanotechnology',
    branch: 'Carbon Nanomaterials & Nanoelectronics',
    tier: 'core' as const,
    concepts: [
      'Moore\u2019s observation and Dennard\u2019s license',
      'How Dennard died: leakage and the power wall',
      'Short-channel physics and the high-k rescue',
      'Geometry saves scaling: FinFET to gate-all-around',
      'Quantum effects as devices: Coulomb blockade and SETs',
      'The economics: what scaling costs and what 2D channels offer',
    ],
    words: 1736,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The opening tour of this book named the FinFET and EUV lithography in one paragraph as the semiconductor industry\u2019s arrival in nanotechnology. This lesson owns that story in full, because the transistor is the most consequential nanodevice ever built: the reason "nanoscale" is a manufacturing reality rather than a laboratory curiosity. Semiconductor scaling is where quantum mechanics, materials science and global economics meet on a silicon surface, and its history since 1965 is a sequence of rescues — each time the physics said stop, a new geometry or material bought the next decade.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every claim about the future of computing — AI acceleration, the end of Moore\u2019s law, quantum advantage — is calibrated against the scaling curve this lesson follows. Understanding why gate lengths stopped shrinking simply, why the clock plateaued near four gigahertz in the mid-2000s, and why new geometries keep arriving, is the literacy needed to read any roadmap: the physics of the switch decides what the machines of the next decades can and cannot do.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Two observations built the industry. Gordon Moore\u2019s 1965 note — that the number of components per integrated chip was doubling roughly every year, later revised to every two years — is an observation about an industry, not a law of physics; it held because each doubling was economically rational. The physical license behind it was Robert Dennard\u2019s 1974 scaling theory: shrink every dimension of a MOSFET by a factor k, scale voltages down with it, and the electric fields stay constant — power density stays constant, delay improves, and the smaller transistor is simply better. Dennard scaling is why gate lengths fell from micrometres to tens of nanometres across four decades, each generation faster and cooler at once. It is the most successful engineering recipe ever executed, and it has a precise expiry date written into its assumptions.',
      },
      {
        kind: 'para',
        text: 'The expiry came in the mid-2000s, and the cause is visible in the numbers. As gate oxide thinned toward 1.2 nanometres — about five atomic layers of silicon dioxide — electrons tunnelled straight through it, and gate leakage became intolerable; subthreshold leakage grew as channels shortened; and supply voltages could not keep scaling because the thermal threshold floor refused to move. Power density, flat under Dennard\u2019s assumptions, began to climb. The industry\u2019s clock speeds plateaued around three to four gigahertz around 2005-2006 and stayed there — the power wall — and the response was architectural: multi-core processors, dark silicon (transistors present but unpowered), and the specialized accelerators that dominate today\u2019s chips. Every generation after that point bought density without the free performance dividend, which is why "Moore\u2019s law" survived as a density observation while Dennard scaling, the thing that actually made each node better, ended.',
      },
      {
        kind: 'para',
        text: 'The first rescue was materials. The tunnelling gate oxide was replaced by high-k dielectrics — hafnium-based oxides with dielectric constants around 25 against silicon dioxide\u2019s 3.9 — letting the physical insulator be thick enough to stop tunnelling while its capacitance looked thin enough to keep gate control; pairing them with metal gates (rather than polysilicon) removed the last parasitics. Intel shipped high-k plus metal gate at 45 nanometres in 2007, the first wholesale transistor-material change since the 1960s. The second front was the channel itself: as gates shrank, source and drain fields reached through the channel — drain-induced barrier lowering, threshold roll-off, punch-through — the short-channel effects that make a short transistor leak from underneath its gate. The cure is geometry, and it reorganizes the whole device.',
      },
      {
        kind: 'para',
        text: 'FinFETs and their successors fix electrostatics with topology. In a FinFET the channel is a thin vertical fin and the gate wraps it on three sides, so the drain\u2019s field must fight a gate on three faces instead of leaking beneath one; the fin\u2019s thinness, not lithography, sets the channel width. Proposed at Berkeley by Chenming Hu, Tsu-Jae King-Liu and Jeffrey Bokor\u2019s group in 1999, the FinFET reached production at Intel\u2019s 22-nanometre node in 2011 and carried the industry through roughly a decade. Gate-all-around (GAA) nanosheet devices — the gate wrapping all four sides of a stacked nanosheet channel, in production at Samsung\u2019s 3-nanometre node from 2022 and entering the 2-nanometre generation — are the same idea completed: total electrostatic custody. The figure of merit is the subthreshold swing, floor at sixty millivolts per decade of current at room temperature by thermodynamic law; every geometry change is a fight to stay near that floor while the channel shrinks.',
      },
      {
        kind: 'para',
        text: 'At the nanoscale the transistor stops being a classical valve and starts offering quantum options. Shrink an island of semiconductor between two barriers until its capacitance C is a few attofarads, and adding ONE electron costs a charging energy e²/2C that exceeds thermal jitter: the island blocks current until the gate lifts it over the step — the Coulomb blockade, demonstrated in the first single-electron transistor by Fulton and Dolan in 1987. The SET is the extreme of scaling — one electron per operation — but its charging energies and sensitivity have kept it a laboratory and cryogenic device. Alongside it: tunnelling FETs that switch on band-to-band tunnelling to beat the sixty-millivolt floor, molecular electronics proposed by Aviram and Ratner in 1974 as single-molecule rectifiers, and the 2D-channel devices that grew out of this book\u2019s carbon lesson — molybdenum disulfide monolayer transistors (EPFL, 2011) putting a semiconductor one atom thick under a gate. None has displaced silicon\u2019s trillion-dollar manufacturing base; all are the research frontier the scaling curve is heading toward.',
      },
      {
        kind: 'para',
        text: 'Scaling is, finally, an economic phenomenon. A modern fab costs tens of billions of dollars; a leading-edge mask set costs more than a mid-sized research lab; and the number of firms able to fund a new node has collapsed from dozens to three foundry groups. The industry\u2019s answers are architectural: 3D NAND stacks memory vertically (hundreds of layers) because the horizontal dimension is exhausted, chiplets disaggregate large dies to raise yields, and backside power delivery moves the power rails under the transistors to free the interconnect layers. The nano-materials connection closes the loop: extreme-ultraviolet lithography (the 13.5-nanometre light named in this book\u2019s opening tour) prints the geometries, and 2D semiconductors — the carbon lesson\u2019s family — are the leading candidate for the channels that might carry the curve one more decade.',
      },
      {
        kind: 'example',
        title: 'Worked Example: When Does Coulomb Blockade Survive Room Temperature?',
        steps: [
          'Charging energy: E_C = e²/2C. For an island with C = 10 aF (10⁻¹⁷ F): E_C = (1.6×10⁻¹⁹)² / (2×10⁻¹⁷) = 1.28×10⁻²¹ J ≈ 0.008 eV.',
          'Compare thermal energy at 300 K: kT ≈ 0.026 eV — bigger than the charging energy, so thermal smearing erases the blockade. Room temperature demands E_C ≫ kT.',
          'Solve for the temperature the device needs: T < E_C/k ≈ 0.008 eV / (8.6×10⁻⁵ eV/K) ≈ 93 K — this island is a cryogenic device.',
          'For room-temperature operation, E_C must clear ~0.026 eV, i.e. C ≲ 3 aF — an island of a few nanometres. That is the literal meaning of "scaling limit": the classical transistor runs out where single-electron physics takes over.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Smartphone systems-on-chip: tens of billions of FinFET/GAA transistors integrate CPU, GPU, modem, image and AI processors on one die — the consumer face of every node advance.',
        'AI accelerators: matrix-multiply engines trade precision and density for throughput, and their energy budgets are the reason geometric scaling still matters economically.',
        'Memory: DRAM cell scaling and 3D NAND\u2019s hundreds of stacked layers are where density growth actually lives now.',
        'Image sensors and MEMS: scaled devices turned every phone into a camera and laboratory — nanoelectronics beyond logic.',
        'Cryogenic control chips: quantum computers (this Library\u2019s Quantum Information book) need CMOS controllers that survive near millikelvin qubits — scaling meeting the next technology.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, treating Moore\u2019s law as physics: it is an economic observation that held while each node paid its own way — the physics was Dennard\u2019s, and it expired first. Second, assuming smaller always means better: post-2005 generations buy density, not speed, and leakage, variability and cost per transistor can rise while dimensions fall. Third, crediting lithography alone: the high-k dielectric, metal gates and three-dimensional geometry rescued scaling as much as printing did. Fourth, over-promising single-electron and molecular devices: their room-temperature margins are thin, and manufacturing reality has kept silicon\u2019s base unchallenged. Fifth, forgetting where the energy goes: at the leading edge, data movement — not switching — dominates, which is why the next lesson of the Computational Science book and this one share the same physics of cost.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Dennard scaling', def: 'The 1974 constant-field scaling recipe that made each transistor generation faster and cooler; it ended in the mid-2000s.' },
        { term: 'Short-channel effect', def: 'Leakage and threshold degradation as source-drain fields reach through a nanoscale channel.' },
        { term: 'High-k dielectric', def: 'Hafnium-oxide-class gate insulators (k ≈ 25) that replaced tunnelling SiO₂ at 45 nm in 2007.' },
        { term: 'FinFET / gate-all-around', def: 'Three- then four-sided gate geometries that restore electrostatic control of short channels.' },
        { term: 'Coulomb blockade', def: 'The e²/2C charging step that lets an island control current one electron at a time — the single-electron transistor\u2019s principle.' },
        { term: 'Subthreshold swing floor', def: 'The 60 mV/decade room-temperature minimum for turning a FET off — the thermodynamic constant geometry fights against.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Dennard scaling ended in the mid-2000s primarily because…',
          options: ['silicon ran out', 'leakage and power density rose as oxide and channel dimensions hit atomic limits', 'lithography could not print smaller features', 'transistors became too expensive'],
          answer: 1,
          explain: 'Tunnelling gate oxides, subthreshold leakage and the unscalable threshold floor broke the constant-field recipe — the power wall behind the clock-speed plateau.',
        },
        {
          q: 'The essential improvement a FinFET offers over a planar transistor is…',
          options: ['a smaller wavelength of light', 'electrostatic control of the channel from three sides, suppressing leakage', 'higher clock speeds', 'room-temperature superconductivity'],
          answer: 1,
          explain: 'Wrapping the gate around a thin fin (then all four sides in GAA) lets the gate win against drain fields — geometry as leakage control.',
        },
        {
          q: 'For Coulomb blockade to be visible at room temperature, the island\u2019s capacitance must be roughly…',
          options: ['a few femtofarads', 'a few attofarads — a few-nanometre island', 'a picofarad', 'capacitance is irrelevant'],
          answer: 1,
          explain: 'E_C = e²/2C must exceed kT ≈ 26 meV, which needs C of order 1-3 aF: an island only nanometres across.',
        },
        {
          q: 'High-k dielectrics rescued scaling by…',
          options: ['making gates smaller', 'keeping gate capacitance high while the physical oxide thickens enough to stop tunnelling', 'cooling the chip', 'replacing silicon channels'],
          answer: 1,
          explain: 'Equivalent oxide thickness with a physically thicker film: hafnia\u2019s k ≈ 25 versus SiO₂\u2019s 3.9 decouples capacitance from tunnelling leakage.',
        },
      ] },
    ],
  },
]
