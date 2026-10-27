import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X61 pass (2026-10-27): LIBRARY-ORG-20261027-1 — the Library        */
/*  Organization Loop's standing backlog clearance (Job 474103,        */
/*  18:10 dispatch), part 2.                                           */
/*                                                                     */
/*  The structure audit re-ran CLEAN on the minimums (101 books, zero  */
/*  books below 2ch/3ls) and confirmed the six-book backlog from the   */
/*  previous loop dispatch: Naval Architecture, Nanotechnology and     */
/*  Quantum Information each needed +1 chapter and +2 lessons; German, */
/*  Mandarin Chinese and Computational Science each needed +1 lesson.  */
/*  This pass writes 9 lessons, declares 3 new chapters, and reorders  */
/*  the Quantum Information chapter sequence foundations-first (USER   */
/*  RULE 5).                                                           */
/*                                                                     */
/*  Sources read for grounding: the 2008 IMO International Code on     */
/*  Intact Stability (IS Code, MSC.267(85)) criterion structure via    */
/*  open naval-architecture teaching notes (MIT OCW 2.019/2.20, USNA   */
/*  EN400/EN455 series); the SOLAS Ch.II-1 probabilistic damage-      */
/*  stability framework (Regulation 7, attained index A vs required R) */
/*  via classification-society teaching summaries; standard SOLAS      */
/*  permeability table values (accommodation 0.95, machinery 0.85,     */
/*  dry cargo 0.70); the Vasa (1628) and HMS Captain (1870) capsize    */
/*  records and the Estonia (1994) accident record via official        */
/*  accident-investigation summaries; LibreTexts Nanotechnology and    */
/*  the Nobel Prize official registry (Chemistry 1996 Kroto/Curl/      */
/*  Smalley; Physics 2010 Geim/Novoselov); Iijima's 1991 Nature CNT    */
/*  report and the CNT chirality/band-gap system (Eg ≈ 0.9 eV/d) via   */
/*  open carbon-nanotube reviews; Williams/Waterman/Patterson 2009     */
/*  roofline paper, Amdahl 1967 and Gustafson 1988 via open HPC        */
/*  course notes; TOP500 official June-2022 (Frontier) and November-   */
/*  2024 (El Capitan) releases; Bennett et al. 1993 teleportation and  */
/*  Bennett/Brassard 1984 BB84 via the Qiskit open textbook            */
/*  (learning.quantum.ibm.com) and the original paper abstracts;       */
/*  Ekert 1991 E91; Hwang 2003 / Lo-Ma-Chen 2005 decoy states;         */
/*  Sheng-Yi/Zhongkan? — no: satellite and backbone deployment records */
/*  (Micius 2016 launch, Liao et al. 2017, Yin et al. 2017, the        */
/*  Delft/QuTech three-node network papers 2021-2022, Wehner/Elkouss/ */
/*  Hanson 2018 quantum-internet roadmap); Wikibooks German grammar    */
/*  + Duden compound/derivation guidance; the official PRC State      */
/*  Council 1956 Putonghua definition and Putonghua Proficiency Test   */
/*  grading scheme; Ethnologue/Sinitic classifications for the         */
/*  topolect family map.                                               */
/*                                                                     */
/*  DEDUP CARVING (verified against EXCLUDED_TOPICS, coverage/         */
/*  COVERAGE.md and greps of the live topic files):                    */
/*  - eng-naval-intact-stability-gz and eng-naval-damage-subdivision   */
/*    are carved against eng-naval-architecture-ships (which OWNS      */
/*    buoyancy/GM/free-surface STATICS — its one-concept metacentric   */
/*    treatment and the Herald-of-Free-Enterprise free-surface story), */
/*    eng-naval-seakeeping-motions (which OWNS the IMO intact-stability*/
/*    weather criterion as wind+roll-amplitude testing — that lesson's */
/*    one concept line NAMES the criterion; this pass owns the GZ-curve*/
/*    machinery AROUND it and does not re-teach wind heeling),         */
/*    eng-naval-design-propulsion (which NAMES SOLAS/MARPOL in one     */
/*    line) and eng-naval-ship-structures. Greps: 'GZ curve',          */
/*    'righting arm', 'angle of loll', 'margin line', 'downflooding',  */
/*    'vanishing' (stability sense) had ZERO live hits; 'permeability' */
/*    matched only membrane/EPR biology contexts; 'subdivision'        */
/*    matched non-naval senses only; 'Vasa' matched Vasari and a       */
/*    Hindi-novel character, not the warship. The new chapter OWNS:    */
/*    the full GZ curve, cross curves, dynamic stability as area, the  */
/*    IS Code general criteria, angle of loll, the Vasa/HMS Captain    */
/*    cases; and on the damage side: flooding mechanics, permeability, */
/*    margin line/floodable length, the deterministic→probabilistic    */
/*    SOLAS turn, ro-ro survivability (Herald callback, Estonia),      */
/*    downflooding and defense in depth.                               */
/*  - nano-carbon-family is carved against emer-nanotechnology-scale   */
/*    (which owns the one-paragraph materials tour: the sticky-tape    */
/*    isolation anecdote, strength/conductivity in outline and the     */
/*    honest caveats) and nano-confinement-brus (which OWNS the        */
/*    exciton/Brus/LSPR physics — no carbon-specific content). Greps:  */
/*    'fullerene', 'Iijima', 'chirality', 'Dirac', 'Kroto' had ZERO    */
/*    live hits; 'Geim'/'Novoselov' appear once in the intro tour (the */
/*    isolation anecdote), which this lesson references but does not   */
/*    re-tell. This lesson OWNS curved-sp2 chemistry (C60 discovery,   */
/*    truncated icosahedron), CNT chirality and metallic/semiconducting*/
/*    selection, the mechanics/transport numbers, graphene band        */
/*    structure (Dirac cones, massless fermions, the α/π opacity), the */
/*    2D family and heterostructures, and the application/caveat map.  */
/*  - nano-nanoelectronics-scaling is carved against                   */
/*    emer-nanotechnology-scale (whose one concept line NAMES FinFET   */
/*    and EUV lithography — a forward reference this lesson fills) and */
/*    quantum-qubits-gates (quantum COMPUTATION; this lesson owns      */
/*    classical device scaling). Greps: 'Dennard', 'Coulomb blockade', */
/*    'single-electron', 'high-k' had ZERO live hits; 'short-channel'  */
/*    and 'gate-all-around' each matched only the intro lesson's       */
/*    single FinFET line. This lesson OWNS Moore's observation,        */
/*    Dennard scaling and its end, the short-channel/leakage physics,  */
/*    high-k+metal gates, planar→FinFET→GAA geometry, Coulomb         */
/*    blockade/single-electron devices, molecular and 2D-channel       */
/*    devices, and the economics of scaling.                           */
/*  - quantum-qkd-bb84 and quantum-teleportation-networks are carved   */
/*    against quantum-qubits-gates (which OWNS amplitudes/Bloch/       */
/*    no-cloning/decoherence and closes with the forward reference     */
/*    "eavesdropping leaves marks" — this pass fills it),              */
/*    quantum-algorithms-hardware (which OWNS Shor/Grover and NAMES    */
/*    the post-quantum scheme ML-KEM as one term — the new lessons     */
/*    reference the math-vs-physics distinction in one line and defer  */
/*    PQC detail there), emer-quantum-computing-without-hype (whose    */
/*    QKD/teleportation coverage is one sentence plus one application  */
/*    bullet) and quantum-fault-tolerance-scale (which OWNS magic-state*/
/*    injection — its "teleportation-like" phrase is a circuit trick,  */
/*    not state transfer; the new lesson owns teleportation PROPER).   */
/*    Greps: 'BB84', 'Ekert', 'decoy state', 'device-independent',     */
/*    'entanglement swapping', 'repeater', 'Micius', 'quantum memory', */
/*    'quantum network' had ZERO live hits. The new chapter OWNS the   */
/*    communication stack: bases/sifting/QBER/privacy amplification,   */
/*    E91 and Bell-based security, decoy states, real deployments; and */
/*    the teleportation protocol, swapping, repeaters/memories, the    */
/*    network roadmap.                                                 */
/*  - lang-german-word-formation is carved against lang-german-        */
/*    foundations (which OWNS gender-suffix rules as GENDER predictors,*/
/*    cognates/false friends and pronunciation), lang-german-verbs     */
/*    (which OWNS separable/inseparable prefixes as PARTICIPLE GRAMMAR */
/*    — the no-ge- rule) and lang-german-adjective-endings (which OWNS */
/*    declension). Greps: 'Fugen', 'Donaudampf', 'Komposit', 'right-   */
/*    hand head' had ZERO live hits. This lesson OWNS compounding      */
/*    mechanics (head rule, Fugen elements, stress), derivational      */
/*    prefix MEANINGS (be-/er-/ent-/ver-/zer-/miss- as vocabulary      */
/*    builders plus the stress-split minimal pairs), noun/adjective    */
/*    suffix MEANINGS, pseudo-anglicisms and the decompounding reading */
/*    strategy.                                                        */
/*  - lang-mandarin-topolects is carved against lang-mandarin-         */
/*    foundations (which OWNS tones/pinyin/radicals and the            */
/*    simplified-vs-traditional SCRIPT choice), the Tonal Languages    */
/*    lesson (which OWNS tone typology, third-tone sandhi and the      */
/*    Cantonese six-tone TYPING in one line each — this lesson owns    */
/*    the sociolinguistic landscape, not tone phonology) and           */
/*    lang-classical-chinese-canon (which owns set texts). Greps:      */
/*    'Putonghua', 'topolect', 'Hokkien', 'Hakka', 'Shanghainese',     */
/*    'Standard Chinese', 'guanhua' had ZERO live hits; 'Cantonese'    */
/*    matched only tone-typology lines in the Tonal Languages lesson.  */
/*    This lesson OWNS the Sinitic family map, mutual                 */
/*    unintelligibility, guānhuā→Guoyu→Putonghua standardization, the */
/*    1956 definition, PSC grading, promotion machinery and the        */
/*    learner's variety choice.                                        */
/*  - compsci-hpc-parallel-scaling is carved against compsci-numerical-*/
/*    methods (which OWNS discretization/ODE/stiffness/CFL and the     */
/*    1/√N convergence law), compsci-monte-carlo-mcmc (stochastic      */
/*    machinery; ensembles referenced not re-taught) and               */
/*    em-digital-twins-mirror-worlds (real-time sync ownership).       */
/*    Greps: 'Amdahl', 'Gustafson', 'exascale', 'strong scaling',      */
/*    'weak scaling', 'domain decomposition', 'OpenMP', 'SIMT',        */
/*    'arithmetic intensity' had ZERO live hits ('MPI' matched only    */
/*    the substring inside 'compiled/compilation'; 'roofline' matched  */
/*    building rooflines in the arts file). This lesson OWNS Amdahl/   */
/*    Gustafson, strong/weak scaling, MPI/OpenMP/GPU stack, domain     */
/*    decomposition and halo exchanges, the roofline model, exascale   */
/*    hardware and the energy/data-movement story.                     */
/* ------------------------------------------------------------------ */

export const x61LibraryOrgLoopPassTopics: KnowledgeTopic[] = [
  {
    id: 'eng-naval-intact-stability-gz',
    title: 'Intact Stability: GZ Curves, Dynamic Stability and the Angle of Loll',
    domain: 'Engineering',
    field: 'Naval Architecture',
    branch: 'Stability & Safety',
    tier: 'core' as const,
    concepts: [
      'From GM to the whole curve: the righting arm GZ',
      'Reading the GZ curve: slope, peak, vanishing angle',
      'Dynamic stability: energy as the area under the curve',
      'The IS Code criteria: numbers behind the certificate',
      'Angle of loll: negative GM and how to cure it',
      'Case files: Vasa 1628 and HMS Captain 1870',
    ],
    words: 1926,
    readMins: 10,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book compressed uprighting into a single number: the metacentric height GM, positive meaning self-righting at small heel. GM answers one question — if the ship heels one degree, does it come back? — and nothing else. Real capsizes do not happen at one degree. They happen at forty or sixty, where the metacenter concept has quietly expired and the whole geometry of hull, freeboard and superstructure decides the outcome. This lesson replaces the single number with the full curve the classification societies actually certify: the righting arm GZ plotted against heel angle, and the criteria ships must meet on it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every cargo ship, ferry and passenger vessel afloat carries an approved stability booklet whose curves were computed from hull lines before the ship was built, and a loading computer that re-derives them for the actual cargo. The stability certificate is the whole curve, not the GM. A vessel can pass the GM check with a comfortable margin and still fail the area criterion — legal to sail only on paper assumptions the loader must respect. Reading a GZ curve is therefore a working skill for masters, mates, surveyors and designers alike.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The righting arm GZ is the lever arm between the ship\u2019s weight, acting down through the center of gravity G, and buoyancy, acting up through the center of buoyancy B. At any heel angle the two equal forces form a couple of moment W·GZ — weight times righting arm — and that moment, not GM, is what actually rotates the hull back. For small angles the geometry collapses to GZ ≈ GM·sin θ, which is why GM works as a proxy at one or two degrees: the curve starts with slope GM when heel is measured in radians. But as heel grows, B migrates along the hull, freeboard enters the geometry, and only the full integral of the hull form gives the true arm. Naval architects compute it from cross curves — tabulated righting arms for each heel angle across a range of displacements and vertical centers of gravity — so that the curve for any loading condition is assembled from KN values minus the correct KG·sin θ term.',
      },
      {
        kind: 'para',
        text: 'A GZ curve is read in three features. The initial slope carries the GM: a steep start means stiff, a shallow start means tender. The peak is the maximum righting arm, typically reached somewhere between thirty and forty-five degrees of heel for conventional hull forms — past the peak the arm decays as deck edge immersion and superstructure geometry stop helping. The vanishing angle is where the curve crosses zero again: heel it past that point and the couple reverses, capsize. The span from upright to vanishing is the range of stability. Hull form writes the curve\u2019s character: beam raises the peak (wider hull, faster B migration outboard), freeboard extends the range (more volume to bury before the deck edge goes under), and a raised KG flattens and shortens everything. Two ships with identical GM can have wildly different vanishing angles — which is precisely why the single number is not enough.',
      },
      {
        kind: 'para',
        text: 'Steady heel absorbs work; capsize absorbs energy. The dynamic stability at any heel is the area under the GZ curve up to that angle, multiplied by displacement: W × area, an energy. The physics matters because ships are not heeled gently — gusts and wave slopes deliver a push, the ship rolls up through the angle, and whether it survives depends on whether the energy the disturbance injects exceeds the energy the curve can absorb before the vanishing point. The steady-wind picture is the intersection problem the seakeeping lesson names in the IMO weather criterion: the wind heeling moment curve crosses the GZ curve at a static heel, and the reserve is the energy margin beyond it. Dynamic stability is why a ship that survives a steady 25-knot wind may still be rolled over by a 40-knot gust arriving at the wrong phase of the roll.',
      },
      {
        kind: 'para',
        text: 'The 2008 IMO International Code on Intact Stability — the IS Code, mandatory under SOLAS for new ships — converts the curve into pass-fail arithmetic for the standard loading conditions. The general criteria for cargo and passenger ships: the area under the curve from zero to thirty degrees must be at least 0.055 metre-radians; from zero to forty degrees (or to the downflooding angle if smaller) at least 0.090; between thirty and forty degrees at least 0.030; the righting arm must reach 0.20 metres at or beyond thirty degrees; and the maximum arm must occur at twenty-five degrees of heel or more. Special services carry their own overlays — the weather criterion for wind, grain-heeling provisions for bulk carriers, passenger-crowding and turning-heel criteria for ferries. The numbers are the certificate: a loading condition that fails any one of them is illegal to sail, however comfortable the GM looks.',
      },
      {
        kind: 'para',
        text: 'The angle of loll is the trap that punishes GM-only thinking. If cargo or ice accretion raises G just above the metacenter M, initial GM goes negative — yet the ship does not capsize. It heels to one side until B has migrated far enough outboard to recreate equilibrium, settling at the angle where GZ crosses zero with a POSITIVE slope. The vessel floats lolling, usually to either side indifferently, and comes upright if pushed — behavior that distinguishes loll from a true list caused by asymmetric loading. The cure is counterintuitive and safety-critical: add weight on the LOW side first. Ballasting the high side walks the ship across the loll and can capsize it; filling the low side lowers G and let\u2019s the curve\u2019s positive region recover. Ice on one side of a trawler plus a negative-GM loll is the classic textbook accident chain, and the reason stability courses drill the diagnosis before the arithmetic.',
      },
      {
        kind: 'para',
        text: 'The case files are old because the lessons are structural, not technological. Vasa, the Swedish warship that capsized about 1,300 metres into her maiden voyage in August 1628, carried a heavy gun deck on a hull too narrow and too shallow-hulled to support it: the GM was inadequate, and a modest gust laid her over until the lower gunports submerged — perhaps thirty lives lost, the hull raised entire in 1961 and now the point of the Vasa Museum\u2019s stability story. HMS Captain, a British masted turret ship, inverted in a Bay of Biscay gale in 1870 with roughly 480 dead: low freeboard plus heavy masts gave a curve with a fatally small reserve. Both vessels were state-of-the-art; both failed the criteria that did not yet exist. The IS Code is their epitaph, and every loading computer aboard every ship today is the institutional memory of Vasa and the Captain.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Righting Energy to 30 Degrees',
        steps: [
          'Take a 10,000-tonne displacement cargo ship (Δ = 10⁷ kg, W = Δg ≈ 98.1 MN) with a GZ curve reaching 0.40 m at thirty degrees.',
          'Approximate the area under the curve from zero to thirty degrees as a triangle (near-linear rise): area ≈ ½ × 30° in radians × GZ(30°) = ½ × 0.524 × 0.40 ≈ 0.105 metre-radians.',
          'Dynamic stability = W × area = 98.1 × 10⁶ N × 0.105 m·rad ≈ 10.3 megajoules — the energy the wave or gust must inject to heel her to thirty degrees.',
          'Check against the criterion: the code demands ≥ 0.055 m·rad to thirty degrees; 0.105 clears it with margin — but if KG rose 0.3 m in loading, GZ(30°) might fall to 0.18 m, area to ~0.047, and the ship would fail the certificate while still showing positive GM.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Loading computers: every sizeable ship must re-compute the GZ curve and IS Code criteria for the actual loading condition before departure — the master signs against the curve, not against a GM value.',
        'Ballast planning: ballast water exchanges and deballasting sequences are chosen to keep the whole curve legal, which is why ballast operations are sequenced tank by tank rather than pumped freely.',
        'Container and deck cargo: stacking heights on container ships and timber carriers are limited by KG growth and windage area — the curve trades against deadweight every voyage.',
        'Ferry operations: passenger ships carry the crowding and turning criteria on top of the general ones, and ro-ro ferries track car-deck weight shifts as a standing stability item.',
        'Grain and bulk: the IMO Grain Code\u2019s heeling-moment allowance exists because grain settles and shifts by a few degrees of heel — the intact curve must absorb it before any damage question arises.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, certifying from GM: a positive, generous GM says nothing about the vanishing angle or the area criteria — certificates fail on area far more often than on initial stability. Second, the loll cure: ballasting the high side of a lolling ship is the classic fatal move; the low side comes first, always. Third, forgetting free surface — the foundations lesson\u2019s half-full-tank warning is really a statement about the curve: every free surface is a virtual rise of G that flattens it. Fourth, trusting nominal weights: lightship KG drifts as equipment accumulates over a ship\u2019s life, which is why periodic inclining experiments are mandated — the curve you compute is only as honest as the KG you feed it. Fifth, treating the wind heeling overlay as optional paperwork: the weather criterion has retired more designs on paper than the sea has.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Righting arm (GZ)', def: 'The horizontal lever arm between weight and buoyancy at a given heel; the moment is W·GZ.' },
        { term: 'Cross curves', def: 'Tabulated righting arms versus heel for a hull form, from which the curve for any KG and displacement is assembled.' },
        { term: 'Vanishing angle', def: 'The heel beyond which GZ turns negative — the end of the range of stability and the start of capsize.' },
        { term: 'Dynamic stability', def: 'Displacement times the area under the GZ curve — the energy needed to heel the ship to a given angle.' },
        { term: 'Angle of loll', def: 'The heel a ship with slightly negative GM settles at, symmetric to either side, cured by weighting the low side first.' },
        { term: 'IS Code', def: 'The 2008 IMO Intact Stability Code — the criterion set (areas, arm minima, weather and special-service overlays) behind every stability booklet.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The initial slope of the GZ curve (heel in radians) equals which quantity?',
          options: ['KB', 'BM', 'GM', 'The vanishing angle'],
          answer: 2,
          explain: 'At small angles GZ ≈ GM·sin θ, so the curve starts with slope GM — the single number is just the curve\u2019s opening gradient.',
        },
        {
          q: 'A ship\u2019s dynamic stability to 30° is best described as…',
          options: ['GM times 30°', 'the area under the GZ curve times displacement', 'the maximum GZ value', 'the free surface correction'],
          answer: 1,
          explain: 'Dynamic stability is an energy: displacement (weight) multiplied by the area under the righting-arm curve to that angle.',
        },
        {
          q: 'A vessel floats heeled to starboard with negative initial GM and comes upright when pushed. The correct first response is…',
          options: ['fill the starboard (high) tanks to push her upright', 'fill the port (low) side first to lower G', 'pump everything out', 'increase speed'],
          answer: 1,
          explain: 'This is an angle of loll. Adding weight on the low side lowers G and recovers positive stability; filling the high side walks the ship across the loll and can capsize her.',
        },
        {
          q: 'Under the IS Code general criteria, the area under the GZ curve from 0° to 30° must be at least…',
          options: ['0.030 m·rad', '0.055 m·rad', '0.090 m·rad', '0.20 m·rad'],
          answer: 1,
          explain: '0.055 m·rad to 30°, 0.090 to 40° (or downflooding), 0.030 between 30° and 40°; the 0.20 figure is the minimum GZ in metres at ≥30°, not an area.',
        },
      ] },
    ],
  },
  {
    id: 'eng-naval-damage-subdivision',
    title: 'Damage Stability: Flooding, Subdivision and the Probabilistic Index',
    domain: 'Engineering',
    field: 'Naval Architecture',
    branch: 'Stability & Safety',
    tier: 'core' as const,
    concepts: [
      'What flooding does: weight, list and trim',
      'Permeability: spaces never fill with 100 percent water',
      'The deterministic machine: margin line and floodable length',
      'The probabilistic turn: attained index A versus required R',
      'Ro-ro: the car-deck problem from Herald to Estonia',
      'Defense in depth: double bottoms, doors, downflooding, drills',
    ],
    words: 1911,
    readMins: 10,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'Intact stability assumes the envelope holds. Damage stability begins with the opposite assumption: somewhere below the waterline the hull is open, and the sea is coming in at the rate the hole allows. Naval architecture\u2019s answer, built up over a century from Titanic through SOLAS and its successors, is subdivision — cutting the hull into watertight compartments so that a breach floods a bounded volume instead of the ship. This lesson walks the machinery: what flooding actually does to a hull, why no compartment fills completely, how the old deterministic rules were computed, and why the modern rules replaced them with a probability-weighted index that has quietly become one of the most sophisticated safety standards in engineering.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The design-propulsion lesson names SOLAS in one line; here is what that acronym actually buys. Every watertight bulkhead position, every double bottom depth, every ro-ro ferry\u2019s survivability standard and every cruise ship\u2019s damage-control plan traces to this framework. When a bulk carrier floods a hold and limps home, or a damaged ferry keeps her car deck dry for the forty minutes it takes to reach port, the invisible arithmetic of this lesson is the reason. It is also the reason the arithmetic can be pushed too far — subdivision costs cargo volume, and every rule revision is a negotiation between safety and economics conducted in indices.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Flooding is a weight problem first. A breached compartment takes on seawater until the water level inside equalizes with the sea outside — the added weight is exactly the volume of that ingressed water times its density, and the ship sinks by the corresponding amount, trimming or listing if the flooding is off-center. The old textbook catastrophe mechanism is asymmetric flooding: a flooded starboard compartment adds weight on one side, the ship lists, and if the list grows enough to submerge openings on the margin deck, progressive flooding turns a survivable breach into a total loss. The defender\u2019s geometry is therefore about limiting how far one compartment\u2019s water can move the ship: cross-flooding arrangements that correct list fast, and high side tanks that counterbalance — with the intact-stability lesson\u2019s warning now doubled, since every countermeasure tank that is partly full brings its own free surface.',
      },
      {
        kind: 'para',
        text: 'No real compartment floods solid, because spaces are full of things that are not water. Permeability is the fraction of a compartment\u2019s volume that floodwater can actually occupy: SOLAS\u2019s standard values run about 0.95 for accommodation (furniture and structure displace little), 0.85 for machinery spaces (engines and auxiliaries take real volume), and about 0.70 for dry cargo holds (cargo depends on the trade, but the rule books a conservative figure). Permeability changes outcomes dramatically: the same breached machinery space adds fifteen percent less water than the same breached cabin block, and the damage-stability calculation for every compartment in the ship is run at its assigned value. It also explains a counterintuitive survivor: a hold full of dense, well-stowed cargo has low effective permeability — the cargo itself is buoyancy-blocking ballast.',
      },
      {
        kind: 'para',
        text: 'The deterministic system — the original SOLAS machinery of 1914, refined for decades — is a clean piece of geometry. Draw the margin line: a line on the ship\u2019s side seventy-six millimetres (three inches) below the top of the bulkhead deck, the waterline the ship must never submerge even when damaged. For every position along the length, compute the floodable length: the maximum compartment length that can flood, at the governing permeability, without the margin line going under. Divide by a factor of subdivision (1.0 for the most subdivided classes of ship, larger for others) and you get the permissible length — bulkheads must be spaced so no single compartment exceeds it. The collision bulkhead forward, the afterpeak machinery arrangement, the double-bottom height: all fixed by this machine. Its weakness was its determinism: the rule guaranteed survival of ONE compartment flooded anywhere, but said nothing about how likely two-compartment damage was at a particular position, or what a long ro-ro car deck did to the assumptions.',
      },
      {
        kind: 'para',
        text: 'The probabilistic turn, now the core of SOLAS Chapter II-1, replaced the single-compartment guarantee with statistics. Damage location and extent are random variables — collisions strike where they strike, raking or glancing — so the regulation samples the hull with standard damage penetration and longitudinal extents, computes for each damage case the probability the ship survives it (balancing damaged freeboard, list, and residual stability against the sea state distribution), and sums the probability-weighted survivals into an attained subdivision index A. The ship must meet a required index R that scales with her size and passenger count. Every design decision — bulkhead spacing, freeboard, cross-flooding valves, compartmentation of the machinery spaces — trades against A, and designers hunt the cheapest incremental survival probability per bulkhead. The 2009 harmonized rules extended the framework to cargo ships, and the index approach has since spread through marine safety regulation generally: safety as expected survival, not as a worst-case promise.',
      },
      {
        kind: 'para',
        text: 'Ro-ro ferries earned their own chapter in this story. A vehicle deck is by design a single enormous undivided space — no bulkheads can cross it — so its damage stability rests entirely on the hull below, and its failure mode is vicious: even a thin layer of water on a car deck carries enormous free surface (the foundations lesson\u2019s Herald of Free Enterprise capsizing at Zeebrugge in 1987 with 193 dead after bow-door water sloshed free is the canonical case). The Estonia loss in the Baltic in September 1994 — bow visor separated in heavy seas, ramp open, 852 dead — forced the next generation of rules: the 1995 Stockholm Agreement and its successors require ro-ro survivability WITH water on the deck, testing the ship as the residual free surface accumulates rather than pretending the deck stays dry. Modern ferries carry the resulting architecture: higher subdivided freeboards on the hull below, sensors on bow doors interlocked with the bridge, and damage-stability loading computers that treat every sailing as a damage case in progress.',
      },
      {
        kind: 'para',
        text: 'Defense in depth is the design philosophy the indices formalize. Double bottoms and double hulls put a void between the sea and the cargo — mandated for tankers after the Exxon Valdez spill through MARPOL\u2019s phase-out of single-hull tankers, and standard under new build across trades. Watertight doors in bulkheads are interlocked and logged: open doors at sea are a detention offense, because one open door can bridge two compartments and void the whole index. Downflooding points — vents, air pipes, non-watertight openings — are kept high and counted, since they are how progressive flooding climbs from a damaged space into an intact one. And the human layer: damage-control plans displayed at every command station, watertight-integrity drills, and the statutory damage-stability mode of the loading computer for passenger ships and tankers. The machinery of this lesson is only as watertight as the crew\u2019s discipline in keeping it closed.',
      },
      {
        kind: 'example',
        title: 'Worked Example: How Far Does a Flooded Machinery Space Sink the Ship?',
        steps: [
          'A machinery compartment of volume 500 m³ floods at permeability 0.85: ingressed water = 0.85 × 500 = 425 m³ ≈ 425 tonnes of seawater.',
          'The waterplane area at the damaged draft is 2,000 m². Tonnes per centimetre immersion: TPC = A × ρ / 100 = 2,000 × 1.025 / 100 = 20.5 t/cm.',
          'Parallel sinkage = added weight / TPC = 425 / 20.5 ≈ 20.7 cm — the ship settles just over twenty centimetres before any list correction.',
          'The damage-stability question is what that 20.7 cm does to freeboard, reserve buoyancy and the residual GZ curve — which is why the index calculation runs every such case automatically rather than trusting one representative flood.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Damage-stability loading computers, mandatory for passenger ships and tankers, simulate any flooding case for the actual voyage condition before departure and continuously at sea.',
        'Casualty response: after a grounding or collision, the master\u2019s decisions — ballast to counter-flood, close which doors, head for shallow water — are damage-stability decisions made with exactly this machinery.',
        'Ship design: bulkhead positions on a new ferry are moved a metre at a time while the designer watches the attained index A climb toward R — subdivision as optimization, not layout convention.',
        'Flag and port state inspection: watertight doors, hatchcovers and downflooding openings are standing inspection items precisely because they are the cheap links in an expensive chain.',
        'Submarine and naval practice grew from the same roots: damage control parties, compartment isolation and counter-flooding are the deterministic system run by hand under fire.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, treating floodwater as if it filled the compartment: permeability is the difference between a 425-tonne problem and a 500-tonne one, and it varies by space type. Second, confusing intact and damage criteria — a ship can pass every intact curve and still be one open door away from failing her damage index. Third, forgetting progressive flooding: the first flood is usually survivable; the accident reports are about how water reached the second compartment. Fourth, assuming the deterministic one-compartment standard still exists as such — it was replaced by the index because real damage is probabilistic, and designs optimized for the old rule were quietly unsafe in the tails. Fifth, the ro-ro reflex of treating car-deck water as a pumping problem rather than a free-surface catastrophe: Zeebrugge and the Estonia both happened with pumps running.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Margin line', def: 'The line 76 mm below the bulkhead deck that the damaged waterline must never submerge under the deterministic rules.' },
        { term: 'Floodable length', def: 'The maximum compartment length that can flood at a given permeability without submerging the margin line.' },
        { term: 'Permeability', def: 'The fraction of a flooded space that water can occupy — about 0.95 accommodation, 0.85 machinery, 0.70 dry cargo under SOLAS.' },
        { term: 'Attained index A', def: 'The probability-weighted sum of survival across standard damage cases; must meet the required index R.' },
        { term: 'Downflooding', def: 'Progressive flooding through non-watertight openings as heel or sinkage lowers them toward the sea.' },
        { term: 'Stockholm Agreement', def: 'The 1995 ro-ro survivability framework, born from the Estonia loss, requiring ships to survive WITH water on the vehicle deck.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A 600 m³ accommodation compartment floods at SOLAS permeability. The ingressed water is closest to…',
          options: ['450 tonnes', '570 tonnes', '600 tonnes', '630 tonnes'],
          answer: 1,
          explain: 'Accommodation permeability is 0.95: 0.95 × 600 = 570 m³ ≈ 570 tonnes. Using the full 600 would overstate the flooding by 5 percent.',
        },
        {
          q: 'The margin line exists to guarantee that after flooding…',
          options: ['the ship keeps positive GM', 'the waterline never submerges the bulkhead deck side to within 76 mm', 'trim stays under one degree', 'the propeller stays immersed'],
          answer: 1,
          explain: 'The deterministic system fixes the survival waterline: the margin line, 76 mm below the top of the bulkhead deck at side, must stay dry.',
        },
        {
          q: 'The attained subdivision index A differs from the old deterministic standard because it…',
          options: ['ignores permeability', 'weights each damage case by its probability and sums survival', 'applies only to warships', 'replaces bulkheads with double hulls'],
          answer: 1,
          explain: 'A is a probability-weighted survival summed over standard damage locations and extents; the deterministic rule guaranteed one compartment anywhere, regardless of likelihood.',
        },
        {
          q: 'The Estonia and Herald of Free Enterprise disasters share which structural lesson?',
          options: ['Diesel engines are unreliable in storms', 'Large undivided ro-ro decks with free water are uniquely lethal', 'Lifeboats must be stowed lower', 'Bow visors should be welded shut'],
          answer: 1,
          explain: 'Both were ro-ro losses driven by water reaching an undivided vehicle deck — huge free surface, high KG, no bulkheads to bound the flooding. The Stockholm Agreement rules were written directly against this failure mode.',
        },
      ] },
    ],
  },
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
  {
    id: 'quantum-qkd-bb84',
    title: 'Quantum Key Distribution: Security from Physics',
    domain: 'Emerging & Interdisciplinary',
    field: 'Quantum Information',
    branch: 'Quantum Communication & Networks',
    tier: 'core' as const,
    concepts: [
      'The threat model: math-based secrets in a quantum world',
      'BB84: four polarizations, two bases, one protocol',
      'Sifting, eavesdropper detection and the error budget',
      'E91 and device independence: Bell tests as security proofs',
      'Decoy states and distance: making it work on real fiber',
      'Deployments: metropolitan rings, backbones and Micius',
    ],
    words: 1715,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The qubits lesson of this book closed on a promise: no-cloning means eavesdropping leaves marks, and the cryptographer is the beneficiary. This lesson cashes that promise. Quantum key distribution — QKD — is the oldest applied idea in quantum information: a scheme in which two parties grow a shared secret key whose secrecy is guaranteed not by the difficulty of some mathematical problem, but by the physics of measurement itself. The qubits-and-gates chapter built the qubit, the algorithms chapter built the computation; this chapter builds the link between machines, starting with the 1984 protocol that founded the field.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The algorithms lesson owns the threat: Shor\u2019s factoring algorithm breaks the public-key cryptography the internet runs on, once a large fault-tolerant machine exists. The standard response is post-quantum cryptography — new math problems (the ML-KEM family is named there as a term) that are believed quantum-resistant but remain assumptions. QKD is the other answer: information-theoretic security with no computational assumption to break, ever. Nations and banks that must protect secrets for decades — when a harvest-now-decrypt-later adversary matters — are the customers building the links this lesson describes.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The threat model defines the field. Classical key exchange rests on computational hardness: factoring, discrete logarithms — problems that a sufficiently large quantum computer solves in polynomial time. Post-quantum cryptography changes the math; QKD changes the category. Its security target is information-theoretic: even an adversary with unlimited computing power, and even one bound only by quantum mechanics (not by any implementation assumption), cannot learn the key beyond a provably negligible amount. The price of that guarantee is physical infrastructure — a quantum channel (usually optical fiber or free space) between the parties — and the honesty to state what QKD does NOT do: it distributes keys for symmetric cryptography; it does not replace authentication, since the protocol itself needs a small pre-shared secret or a PKI to prove who is talking.',
      },
      {
        kind: 'para',
        text: 'BB84 — Bennett and Brassard, 1984 — is the founding protocol and still the teaching model. Alice encodes random bits on single photons in one of two conjugate bases: rectilinear (horizontal/vertical) or diagonal (the two forty-five-degree polarizations); for each photon she records the bit and the basis, chosen independently at random. Bob measures each arriving photon in a basis of his own, chosen at random. Quantum mechanics now does the work: a photon measured in the WRONG basis yields a random outcome and destroys the original state — so Bob guesses Alice\u2019s basis half the time, and when he guesses right the bit transfers faithfully. They then announce their basis choices (never the bit values) over an authenticated public channel — basis reconciliation, or sifting — and keep only the positions where the bases matched. About half the transmitted photons survive sifting; from those, both parties hold identical random bits: the raw shared key.',
      },
      {
        kind: 'para',
        text: 'Eavesdropping has a signature because measurement is destructive. An eavesdropper Eve must measure each photon to learn anything — no-cloning forbids copying it first — and measuring in the wrong basis (fifty percent chance) randomizes the state before it reaches Bob. If Eve intercepts and resends everything, the sifted bits carry an error rate of one quarter: half the time she picked the wrong basis, and half of those her random outcome disagrees with Alice\u2019s bit — a quantum bit error rate of 25 percent that no natural channel noise can mask. The protocol therefore samples a slice of the sifted key, estimates that error rate (QBER), and aborts if it exceeds a security threshold (about eleven percent for BB84 with one-way post-processing). Below threshold, the parties run error correction to reconcile their strings, then privacy amplification — hashing the string down so that whatever partial information Eve might hold is compressed to nothing — and the remainder is the final key. Security is a theorem, not a hope.',
      },
      {
        kind: 'para',
        text: 'The entanglement route came in 1991. Artur Ekert\u2019s E91 protocol distributes entangled photon pairs and lets the security test be a Bell-inequality experiment: measure enough pairs in the correlation-testing bases and verify the violation that only unmeasured, un-eavesdropped entanglement can produce. The Bell violation IS the certificate — a device that has been intercepted fails the test by the same physics that makes entanglement unforgeable. This idea matured into device-independent QKD, developed through the 2010s and demonstrated experimentally in 2022: security proven from the Bell violation alone, holding even if the hardware was built by the adversary — the strongest security statement in cryptography, delivered by the strongest correlation physics allows.',
      },
      {
        kind: 'para',
        text: 'Real systems live in the gap between single photons and available hardware. Cheap attenuated-laser sources occasionally emit two photons in one pulse, enabling the photon-number-splitting attack — Eve keeps one photon, forwards the rest. Decoy states (proposed by Hwang in 2003 and completed by Lo, Ma and Chen in 2005) close the hole: Alice varies the pulse intensity randomly, and the intensity-dependent statistics expose any photon-number-selective attack. Distance is the second constraint: fiber absorbs about 0.2 dB per kilometre at telecom wavelengths, and with no amplifiers possible (an amplifier is a measurement-and-copy device — no-cloning again), direct QKD saturates at a few hundred kilometres. Twin-field QKD, demonstrated from 2018 onward, pushes single-span records toward a thousand kilometres by interfering photons from two distant transmitters at a midpoint — the trick that makes continental terrestrial chains feasible.',
      },
      {
        kind: 'para',
        text: 'Deployments have run for two decades and are now infrastructure. DARPA\u2019s Boston network (2003) linked university and government sites; SECOQC built a metropolitan network in Vienna (2008); Tokyo ran a QKD network for the 2010s. China built the Beijing–Shanghai trusted-relay backbone (about 2,000 km, opened 2017) for banking and government traffic, and the Micius satellite — launched 2016 — took the physics to orbit: satellite-to-ground QKD, and by 2017 intercontinental quantum-secured videoconferencing between Beijing and Vienna. The satellite matters because fiber attenuation grows with distance while free-space loss over a vacuum path does not — space is the shortcut the fiber limit demands. The honest architectural note: today\u2019s long backbones use trusted relay nodes (the key is decrypted and re-encrypted at each node), which dilutes end-to-end security — exactly the gap the repeater networks of the next lesson are meant to close.',
      },
      {
        kind: 'example',
        title: 'Worked Example: The 25 Percent Signature of an Intercept-Resend Attack',
        steps: [
          'Eve intercepts every photon and measures in a random basis: half the time she matches Alice\u2019s basis and resends the state intact.',
          'The other half she measures in the wrong basis: the state collapses to her random result, which Bob then measures.',
          'Among SIFTED bits (Bob\u2019s basis matched Alice\u2019s), Eve chose wrongly 50% of the time, and in those cases Bob\u2019s outcome is wrong 50% of the time: QBER = 0.5 × 0.5 = 25%.',
          'The BB84 abort threshold is about 11%, so full interception is caught immediately. A partial attack on a fraction f of photons raises the QBER to f/4 — Eve can tap at most ~44% of pulses before tripping the alarm, and the privacy-amplification margin shrinks accordingly. The eavesdropper\u2019s power is bounded by the physics, quantitatively.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Banking and government backbones: metropolitan QKD rings protect data-center-to-data-center links where decades-long secrecy matters.',
        'Satellite key distribution: Micius-class systems deliver keys between ground stations a fiber cannot span, enabling intercontinental quantum-secured sessions.',
        'Critical infrastructure: power-grid and telecom operators trial QKD links for control-plane secrets with decade-scale confidentiality requirements.',
        'Hybrid architectures: QKD keys feed symmetric ciphers alongside post-quantum algorithms (the ML-KEM track) — defense in depth across both physics and math.',
        'Certified randomness: the same optics power quantum random number generators — the sibling product of the QKD supply chain.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, "QKD replaces cryptography": it distributes keys only — symmetric ciphers, hashing and authentication still run the session, and QKD itself needs an authenticated classical channel. Second, "unconditional security" marketing: the theorem covers the idealized protocol; real systems add side channels — detector blinding, timing leaks — that implementation-hardening must close, which is precisely the niche device-independent designs target. Third, forgetting the distance law: no amplifier can rescue a quantum signal, so loss grows exponentially with fiber length — the reason trusted relays and satellites exist, and the opening for true repeaters. Fourth, confusing QKD with post-quantum cryptography: one is physics, the other is math; they are complements, not rivals. Fifth, treating the 25-percent intercept signature as all-or-nothing: partial attacks scale linearly (f/4), and the protocol\u2019s job is to price Eve\u2019s information down to zero, not merely to ring a bell.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'BB84', def: 'Bennett-Brassard 1984: single-photon key distribution in two conjugate polarization bases — the founding QKD protocol.' },
        { term: 'Basis reconciliation (sifting)', def: 'The public comparison of basis choices that keeps only the matching-basis positions — roughly half the raw transmissions.' },
        { term: 'QBER', def: 'Quantum bit error rate on the sifted key; the eavesdropping and noise signature that gates the abort decision.' },
        { term: 'Privacy amplification', def: 'Hashing the reconciled key to compress away any residual eavesdropper information to negligible levels.' },
        { term: 'Decoy states', def: 'Randomized pulse intensities that defeat photon-number-splitting attacks on weak laser sources.' },
        { term: 'Device-independent QKD', def: 'Security certified by a Bell-inequality violation alone — valid even with untrusted hardware.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In BB84, why must Eve\u2019s measurement disturb the key?',
          options: ['Lasers are noisy', 'No-cloning forbids copying the photon, so she must measure in a basis that is wrong half the time', 'Polarization drifts in fiber', 'Bob\u2019s detectors are imperfect'],
          answer: 1,
          explain: 'She cannot copy the unknown state, and measurement in the wrong conjugate basis randomizes it — disturbance is the physics, not an implementation flaw.',
        },
        {
          q: 'A full intercept-resend attack on BB84 produces what error rate on the sifted key?',
          options: ['5%', '11%', '25%', '50%'],
          answer: 2,
          explain: 'Wrong basis half the time × wrong outcome half of those = 25% QBER — far above the ~11% abort threshold, so the attack is caught.',
        },
        {
          q: 'Why can\u2019t optical amplifiers extend QKD links the way they extend classical fiber?',
          options: ['Amplifiers are too expensive', 'Amplification requires copying quantum states, which no-cloning forbids', 'Fiber absorption is zero', 'Photons are too fast'],
          answer: 1,
          explain: 'A quantum amplifier would have to clone unknown states. Loss must be fought with better sources, detectors, twin-field schemes — or repeaters with quantum memories.',
        },
        {
          q: 'Decoy states were invented to defeat…',
          options: ['photon-number-splitting attacks on weak laser pulses', 'fiber absorption', 'detector dead time', 'Bell-inequality loopholes'],
          answer: 0,
          explain: 'Multi-photon pulses let Eve split off a photon; randomized intensity levels make any photon-number-selective interference statistically visible.',
        },
      ] },
    ],
  },
  {
    id: 'quantum-teleportation-networks',
    title: 'Teleportation and the Quantum Internet',
    domain: 'Emerging & Interdisciplinary',
    field: 'Quantum Information',
    branch: 'Quantum Communication & Networks',
    tier: 'core' as const,
    concepts: [
      'Why qubits cannot simply be sent: the transport problem',
      'The 1993 teleportation protocol, step by step',
      'What travels and what does not: bits, not matter, not faster than light',
      'Entanglement swapping and the quantum repeater',
      'Building the network: memories, nodes, satellites',
      'The roadmap: from trusted relays to a true quantum internet',
    ],
    words: 1713,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The QKD lesson moved a classical secret across a quantum channel. This lesson moves the quantum state itself — the harder and more consequential job. You cannot amplify a qubit signal (no-cloning), cannot read it mid-flight and re-send it (measurement destroys it), and cannot tuck it in memory for long (decoherence — the T1 and T2 clocks of the qubits lesson). Teleportation is the protocol that solves transport by never moving the fragile state at all: it transfers an unknown quantum state from one particle to another using shared entanglement plus two ordinary classical bits, and it is the load-bearing operation of every quantum network now being built.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'A quantum internet — machines that exchange entanglement the way today\u2019s internet exchanges packets — is the infrastructure layer under the field\u2019s next applications: networking small quantum processors into larger ones, blind cloud computing where the server never learns your input, long-baseline telescopes and clocks synced by entangled photons, and end-to-end quantum-secured links without trusted relays. Every one of them reduces to the protocol in this lesson running over repeater chains. The roadmap stages that governments now fund are measured by how far teleportation has been pushed: between particles in one lab, between non-adjacent nodes, between cities, between continents.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The transport problem is unique to quantum information. A classical file copies freely; an unknown qubit cannot be copied (Wootters-Zurek, in the qubits lesson). A classical signal regenerates at every repeater; a quantum signal that encounters a measuring device collapses into one sampled outcome, losing the amplitudes the whole point of the computation lives in. Matter qubits — trapped ions, superconducting circuits, NV centers — are stationary: moving them across a room is an engineering ordeal. Photons fly beautifully through fiber and free space but cannot be stored. The only resource that bridges the worlds is entanglement, which is why the network layer of quantum information is, at bottom, an entanglement-distribution system with a classical control plane.',
      },
      {
        kind: 'para',
        text: 'The teleportation protocol — Charles Bennett, Gilles Brassard, Claude Crépeau, Richard Jozsa, Asher Peres and William Wootters, 1993 — uses exactly those resources. Step one: Alice and Bob share an entangled Bell pair. Step two: Alice performs a joint Bell-basis measurement on the unknown input state TOGETHER WITH her half of the pair. This measurement has four equally likely outcomes, and it consumes both states it touches — the input is destroyed in the process, which is how the protocol respects no-cloning: the state now exists only in the correlations. Step three: Alice sends Bob two classical bits naming which of the four outcomes she saw. Step four: Bob applies the corresponding correction — the identity, Pauli-X, Pauli-Z or their product — to his half, and his particle is now exactly the state that entered Alice\u2019s apparatus. The qubits lesson\u2019s gate vocabulary is the entire toolkit: one Bell pair, one Bell measurement, two bits, one of four corrections.',
      },
      {
        kind: 'para',
        text: 'What travels — and what does not — is the part popular culture mangles. No matter, no energy and no information-bearing qubit crosses the gap: only the two classical bits travel, at light speed at most, through an ordinary channel anyone may overhear (they name only the correction, carrying zero information about the state itself). Before Alice\u2019s bits arrive, Bob\u2019s particle is locally a maximally mixed state — pure randomness, no signature of the input — so relativity survives intact: teleportation cannot signal faster than light. The state\u2019s identity crosses not as a signal but as a correlation already established when the pair was distributed. And the original is always destroyed: teleportation MOVES a quantum state rather than copying it, the move operation no-cloning permits.',
      },
      {
        kind: 'para',
        text: 'Experiments traced the protocol from table to planet. Zeilinger\u2019s Innsbruck group teleported photon polarization states in 1997; the distance records climbed — 143 kilometres between Canary Islands in 2012 — until Micius teleported states from ground to satellite in 2017. Matter mattered too: ensembles of atoms, trapped ions and solid-state spins teleported among themselves, and in 2014 the Delft group teleported between nitrogen-vacancy centers on separate diamond chips, the first between permanent electronic qubits. Each generation closed a gap the network roadmap needed: teleportation between moving carriers, between storage nodes, and across continental distances.',
      },
      {
        kind: 'para',
        text: 'Entanglement swapping turns teleportation into networking. Apply the protocol to entanglement itself: Alice–Bob share a pair, Bob–Charlie share another, and a Bell measurement on Bob\u2019s two particles teleports the entanglement across him — leaving Alice and Charlie entangled though they never interacted. Chain that operation and a long link becomes a chain of short, loss-tolerant segments; this is the quantum repeater, proposed by Briegel, Dür, Cirac and Zoller in 1998. Raw entanglement degrades with every segment, so real repeaters interleave entanglement purification (distilling many noisy pairs into fewer good ones) with swapping, and they need quantum memories — matter systems that hold a qubit\u2019s entanglement while the neighboring segments complete. Memories are the hard part: laboratory records now hold entanglement for seconds to minutes in atoms and defects, enough for metropolitan segments, while the engineering of thousands of synchronized, long-lived, high-rate nodes remains the field\u2019s central construction problem. The QKD lesson\u2019s trusted relays are the placeholder until repeaters work at scale — today\u2019s backbone nodes KNOW the keys they relay; a repeater would never need to.',
      },
      {
        kind: 'para',
        text: 'The network is assembling in stages, and the stage names are now standard (Wehner, Elkouss and Hanson\u2019s 2018 Science roadmap). Trusted-repeater QKD networks — stage zero — run today, as the last lesson described. The milestones above it: entanglement distributed between two end nodes (Delft\u2019s three-node network, 2021, did it for the first time among MULTIPLE nodes, with teleportation between non-adjacent nodes following in 2022); then teleportation as a service between memories; then networks of entangled processors; finally the full quantum internet, with distributed computation, blind computing and entanglement-enhanced sensing as applications. Metropolitan testbeds, national programs and satellite constellations are all executing against that ladder — the same ladder this book\u2019s chapters climb: qubits, then algorithms, then communication, then the error-correction stack that the fault-tolerance lesson makes scalable.',
      },
      {
        kind: 'example',
        title: 'Worked Example: The Four Corrections of Teleportation',
        steps: [
          'Alice measures (input ⊗ her half) in the Bell basis. Outcome Φ₊ — the pair was already aligned: Bob\u2019s particle IS the input; correction: identity. Classical bits: 00.',
          'Outcome Φ₋ — a phase flip crept in: Bob applies Z (Pauli-Z) to fix it. Bits: 01.',
          'Outcome Ψ₊ — the roles of |0⟩ and |1⟩ swapped: Bob applies X (the quantum NOT). Bits: 10.',
          'Outcome Ψ₋ — both a swap and a phase flip: Bob applies X then Z (equivalently iY up to global phase). Bits: 11. Two classical bits decode four outcomes — exactly the 2-bit control message of the protocol, and the reason entanglement plus 2 bits transports any state α|0⟩ + β|1⟩ whatever the amplitudes.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Networked quantum processors: teleportation links small machines into larger ones — the modular route to scaling beyond any single cryostat.',
        'Blind quantum computing: clients delegate computations to a server that learns nothing about the input — privacy outsourced by physics.',
        'End-to-end quantum-secured links: repeater chains replace trusted relays, closing the last lesson\u2019s weakest architectural point.',
        'Entanglement-enhanced metrology: synchronized clocks and networked telescopes whose baseline sensitivity classical links cannot deliver.',
        'Distributed algorithms and sensing: entangled sensor arrays and multi-node games with no classical equivalent — the application layer the roadmap\u2019s later stages unlock.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, the science-fiction gloss: teleportation moves a STATE, not matter, not people, not energy — the object at Alice\u2019s end is consumed, and nothing travels except two classical bits. Second, faster-than-light dreams: without the bits arriving, Bob\u2019s half is pure noise, so no signal outruns light. Third, "the original is scanned and rebuilt": no measurement reads the amplitudes — the Bell measurement never learns them, which is precisely why the protocol is legal under no-cloning. Fourth, confusing trusted relays with repeaters: today\u2019s backbone nodes see the keys; repeaters would hold only entanglement, and the difference is the difference between a courier reading your letter and one carrying a sealed envelope. Fifth, assuming swapping needs the long segment to work first: the whole design philosophy is short segments first, then stitch — memories, not distance records, are the bottleneck.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Teleportation', def: 'Transfer of an unknown quantum state via shared entanglement, a Bell measurement, two classical bits and a Pauli correction (Bennett et al., 1993).' },
        { term: 'Bell measurement', def: 'Joint measurement in the four-state entangled basis; it consumes the input and emits one of four two-bit outcomes.' },
        { term: 'Entanglement swapping', def: 'Teleporting entanglement itself, entangling two particles that never interacted — the repeater\u2019s core primitive.' },
        { term: 'Quantum repeater', def: 'A chain node that purifies and swaps entanglement across short segments to beat exponential fiber loss without cloning.' },
        { term: 'Quantum memory', def: 'A matter system (atoms, ions, NV centers) that stores an entangled qubit while other link segments complete.' },
        { term: 'Trusted relay', def: 'A relay node that decrypts and re-encrypts keys — today\u2019s backbones\u2019 compromise, to be replaced by repeaters.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In the teleportation protocol, what crosses the distance between Alice and Bob?',
          options: ['The input qubit itself', 'Two classical bits naming the Bell-measurement outcome', 'A copy of the state', 'An amplified photon'],
          answer: 1,
          explain: 'Entanglement was shared beforehand; only the two-bit correction message travels — the state\u2019s identity transfers through the correlations.',
        },
        {
          q: 'Why is teleportation consistent with the no-cloning theorem?',
          options: ['It only works for known states', 'The Bell measurement destroys the original, so the state exists in exactly one place', 'It copies at half strength', 'Classical bits are not quantum'],
          answer: 1,
          explain: 'The measurement consumes both input and entangled partner; the state moves rather than copies — the unique move operation no-cloning permits.',
        },
        {
          q: 'A quantum repeater beats fiber loss by…',
          options: ['amplifying photons', 'purifying and swapping entanglement across short remembered segments', 'sending photons faster', 'measuring and re-sending the qubit'],
          answer: 1,
          explain: 'No amplification or measurement of the data qubit is possible; repeaters build long-distance entanglement from short verified links, with memories holding the ends.',
        },
        {
          q: 'Before Alice\u2019s two bits arrive, Bob\u2019s half of the pair…',
          options: ['already contains the state, readable with the right measurement', 'is locally a maximally mixed state with no trace of the input', 'is a clone at half fidelity', 'has collapsed to |0⟩'],
          answer: 1,
          explain: 'His reduced state is pure noise — which is why teleportation cannot signal faster than light, and why the classical bits are irreplaceable.',
        },
      ] },
    ],
  },
  {
    id: 'lang-german-word-formation',
    title: 'German Word Formation: Compounds, Prefixes and the Vocabulary Engine',
    domain: 'Languages & World Literature',
    field: 'German',
    branch: 'German Foundations',
    tier: 'core' as const,
    concepts: [
      'Compounds and the head rule: reading right to left',
      'Fugen elements: the seams inside long words',
      'Prefixes as meaning-builders: be-, er-, ent-, ver-, zer-',
      'The stress pairs: UMfahren versus umFAHren',
      'Suffix families: what -ung, -schaft, -bar actually build',
      'The decompounding workflow: vocabulary as engineering',
    ],
    words: 1667,
    readMins: 8,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book taught you to carry every noun with its article and warned that the suffix predicts the gender; the verbs lesson taught the prefix machinery that moves participles around. This lesson teaches the machine that builds the words themselves. German does not primarily borrow or abbreviate its way to new vocabulary — it CONSTRUCTS words in public, from visible parts, and a learner who knows the construction rules reads words they have never seen. That is the difference between a 3,000-word vocabulary and an unlimited one: the machine, once learned, keeps minting words on demand.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'German compounds are the language\u2019s most visible feature and its most misunderstood. The legendary Donaudampfschifffahrtsgesellschaft is not a curiosity — it is the system running at full throttle, and headlines mint equivalents daily: Klimawandel, Rentenreform, Arbeitslosengeld. Learners who treat each long word as an entry to memorize carry a dictionary; learners who parse the parts carry a decoder. Word formation is also the highest-leverage reading skill for technical German, where half the terminology is compound-built and transparently translatable once the seams are found.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'German compounds obey the head rule: the RIGHTMOST element governs everything grammatical. The last noun fixes the compound\u2019s word class, its gender and its core meaning — der Schriftstellerroman is a novel (der Roman) about writers, not a writer; die Wörterbuchaktion is an action (die Aktion) involving dictionaries. Because the head sits at the right, German compounds are read right to left: start at the end, name the category, then accumulate modifiers backward. This is the exact mirror of English, which nests to the right (steam-shipping-company head-order differs), and it is why German sentence rhythm feels like the reveal coming first. Stress reinforces the structure: the primary accent lands on the FIRST element, so the language itself marks where the word begins its buildup.',
      },
      {
        kind: 'para',
        text: 'Between the parts sit the Fugen elements — the seams that make compounds pronounceable and sometimes semantically loaded: -s-, -es-, -en-, -n-, -(e)s. Das Arbeitsamt joins Arbeit + s + Amt; die Lebensmittel are life + s + means; die Straßenbahn rides street + en + track. But the seam is NOT predictable: der Geburtstag has no Fuge, das Geburtsdatum takes -s, and the same noun pairs differently with different partners — usage has fixed each combination, and dictionaries record the compound whole. Learners should treat Fugen as spelling fossils to recognize, not rules to generate: the parse is Arbeit|s|Amt, but the lookup key is Arbeitsamt. The famous compounding freedom remains real, however — German viewers laughed at the Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz (the beef-labeling supervision task delegation law) because it was legal prose, not because the machine had jammed: sixty-three letters of perfectly regular right-to-left parsing.',
      },
      {
        kind: 'para',
        text: 'The derivational prefixes are the second mint. The verbs lesson taught them as grammar — which take ge-, which separate; this lesson teaches them as MEANING. be- transitivizes or envelops: bestellen is to order (something), besuchen to visit, bebauen to build upon. er- marks achievement: erreichen is to reach, erlernen to learn to mastery, erfinden to invent (find out). ent- removes or undoes: entfernen take away, entdecken uncover (discover), entwickeln un-wind (develop). ver- transforms or goes wrong: verbessern improve, verändern change — but verlieren lose, verbrennen burn up, verlaufen get lost; ver- is the largest family and the most double-faced. zer- destroys: zerbrechen shatter, zerstören annihilate. miss- negates: missverstehen misunderstand. Learning a verb therefore means learning its family: stehen (stand) → verstehen (understand) → missverstehen (misunderstand) → aufstehen (get up) → and so on — one stem, a constellation of verbs, each prefix a shift in meaning you can now predict rather than memorize.',
      },
      {
        kind: 'para',
        text: 'The stress pairs are where prefix grammar and prefix meaning collide audibly. Adding a prefix can change which syllable carries the stress, and with it the word: UMfahren (stress on the prefix — separable) means to tip something over; umFAHren (stress on the stem — inseparable) means to run something over. The same accent split works through the language: DURCHbrechen (separable) is to break through; durchBRECHen (inseparable) is to refract, as light through a prism — one spelling, two verbs, separated by an accent. The verbs lesson owned the grammatical consequence — separable prefixes take ge- and fly to the bracket\u2019s end; inseparable ones weld shut. Here the lesson is lexical: the accent IS the word. Learners who drill the stress at the same moment they learn the verb never confuse the pair; learners who postpone stress learn two words that differ only where their ear is not listening.',
      },
      {
        kind: 'para',
        text: 'The suffix families build the word classes. Nouns from verbs: -ung nominalizes action (bedeuten → die Bedeutung, verordnen → die Verordnung — foundations lesson already flagged them as reliably feminine; the meaning here is the verbal noun), -er makes agents (lehren → der Lehrer, arbeiten → der Arbeiter), -nis makes results (das Ergebnis, die Kenntnis). Nouns from nouns: -schaft collects (das Wissen → die Wissenschaft, knowledge become science), -chen and -lein diminish (das Brötchen little bread, das Mädchen — foundations owned their neuter gender; the meaning is small/endearing). Adjectives: -bar marks possibility (essbar edible, lesbar legible), -ig and -lich mark characterful properties (windig, freundlich), -isch marks belonging or character (kindisch childlike with a sneer). Each suffix is a machine tool: recognize it and the dictionary entry you need is the STEM you already know, not the derived word staring at you from the page.',
      },
      {
        kind: 'para',
        text: 'The workflow is the payoff. Reading: parse right to left, find the head, strip the Fugen, split the stem from its prefix, then reconstruct. Lookup: search for the stem, not the compound — dictionaries list compounds under heads or not at all. Learning: build families, not lists — Wissen (knowledge) yields Wissenschaft, wissenschaftlich, Wissenschaftler in one branch; Zeit (time) yields Zeitung, zeitgenössisch, die Zeitungsanzeige. And borrow critically: modern German absorbs English through its own machinery — downloaden conjugates like a German verb, das Handy is a pseudo-anglicism (from "handy" the adjective, not the noun phone), der Beamer projects (English "beamer" means something else entirely). False friends live inside word formation too; the foundations lesson\u2019s borrowed-vocabulary warning extends here.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Parse Donaudampfschifffahrtsgesellschaft',
        steps: [
          'Find the head (rightmost): Gesellschaft — society/company, feminine, die. The whole word is a company of some kind.',
          'Strip left: schifffahrt = Schifffahrt (shipping, itself Schiff + Fahrt); before it dampf = Dampf (steam); before that Donau = Danube.',
          'Reconstruct right to left: company of shipping, powered by steam, on the Danube — the Danube Steam Navigation Company, the 1829 enterprise that made the word famous.',
          'Generalize: the same four moves parse Arbeitslosengeld (unemployment benefit: arbeits + los + Geld — money for being without work), Klimawandel (climate change) and tomorrow\u2019s headline coinage; the head rule told you the category in one second.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Newspaper reading: headline vocabulary is compound-heavy and minted daily; the parser converts unknown headlines into known parts without a dictionary.',
        'Technical German: engineering, legal and medical prose stack compounds four deep; decompounding is the core reading skill for Fachsprache.',
        'Vocabulary efficiency: learning stems plus the prefix/suffix machinery multiplies coverage — one stem yields a family, not one entry.',
        'Exams and certificates: Goethe-Zertifikat and DSD reading sections reward candidates who parse compounds rather than skip them.',
        'Translation and localization: compound splitting is the first step of German-to-anything machine translation — and the skill that lets you check the machine\u2019s work.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, assuming Fugen are predictable: Arbeit+s+amt is regular, Geburtstag has no seam — each compound\u2019s spelling is conventional, and the dictionary is the referee. Second, reading compounds left to right like English: the head is at the RIGHT, and the meaning can invert (Holzhaus is a wood house, but Hausboot is a boat that is a house — boot is head). Third, treating ver- as one meaning: it transforms some verbs and ruins others; the family must be learned per stem. Fourth, ignoring stress: UMfahren and umFAHren are different words, and mis-stressing produces confusion your partner will politely translate wrong. Fifth, over-trusting transparency: a compound\u2019s parts suggest, but idiomatic drift is real — Handschuh is "hand shoe" for glove, and the semantic leap from parts to whole must sometimes simply be learned.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Kompositum', def: 'A compound word built from independent stems; the rightmost stem is the head that fixes class, gender and meaning.' },
        { term: 'Fugenelement', def: 'The linking element (-s-, -en-, -n-, -(e)s) between compound parts — conventional, not predictable.' },
        { term: 'Head rule', def: 'The principle that compound grammar and core meaning live in the final element; read right to left.' },
        { term: 'Derivational prefix', def: 'A meaning-building prefix (be-, er-, ent-, ver-, zer-, miss-) that turns one stem into a family of verbs.' },
        { term: '-ung nominalization', def: 'The verb-to-noun suffix producing reliably feminine action nouns: bedeuten → die Bedeutung.' },
        { term: 'Stress pair', def: 'Words distinguished only by accent placement: UMfahren (tip over, separable) versus umFAHren (run over, inseparable).' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'What determines the gender of a German compound like das Wörterbuch?',
          options: ['The first element (Wörter)', 'The head — the last element (Buch, neuter)', 'The Fugen element', 'The word\u2019s length'],
          answer: 1,
          explain: 'The head rule: the rightmost stem governs gender, class and core meaning — das Wörterbuch is a kind of Buch.',
        },
        {
          q: 'UMfahren and umFAHren differ in meaning because…',
          options: ['one is plural', 'stress placement selects the separable or inseparable reading — tip over versus run over', 'they come from different stems', 'one is Swiss usage'],
          answer: 1,
          explain: 'The accent IS the word: stressed prefix pairs with the separable verb, stressed stem with the inseparable — one spelling, two verbs.',
        },
        {
          q: 'entdecken (discover) belongs to which prefix family by MEANING?',
          options: ['destruction (zer-)', 'removal or uncovering (ent-)', 'achievement (er-)', 'negation (miss-)'],
          answer: 1,
          explain: 'ent- strips or undoes: entdecken uncovers, entfernen removes, entwickeln unwinds — the discovery sense is "de-covering".',
        },
        {
          q: 'die Bedeutung is formed how?',
          options: ['-er agent from bedeuten', '-ung verbal noun from bedeuten — an action made into a noun', 'compound with die Deutung only', 'borrowed from Latin'],
          answer: 1,
          explain: '-ung nominalizes the verb bedeuten (to mean); the foundations lesson\u2019s gender rule (-ung → feminine) applies to every word the machine builds this way.',
        },
      ] },
    ],
  },
  {
    id: 'lang-mandarin-topolects',
    title: 'Mandarin\u2019s Family: Topolects, Putonghua and the Standard',
    domain: 'Languages & World Literature',
    field: 'Mandarin Chinese',
    branch: 'Mandarin Foundations',
    tier: 'core' as const,
    concepts: [
      'One family, many voices: the Sinitic map',
      'Mutually unintelligible "dialects": the Romance-language yardstick',
      'What unites them: the shared script and the shared canon',
      'From guānhuā to Guoyu to Putonghua: building a standard',
      'The 1956 definition and the promotion machinery',
      'The living landscape and the learner\u2019s choice',
    ],
    words: 1840,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book taught the tones and pinyin of one standard; the grammar lesson taught its particles; the canon lesson recited its classical lines. This lesson zooms out to the family that standard sits inside — and the story of how one spoken variety was deliberately engineered into a national standard over the twentieth century. "Chinese" is not one spoken language with accents. It is a family of related varieties, several of them as different from each other as French from Italian, sharing a script, a classical canon and a name — and the relationship between the standard you are learning and the languages spoken in Guangzhou or Xiamen is the first thing any honest course should explain.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The variety question is where learner expectations meet reality. A Putonghua speaker landing in Hong Kong or rural Fujian will understand nothing spoken around them — yet can read every street sign. A heritage learner of Cantonese finds Mandarin tones transfer imperfectly. Media, emigration and family history all route through particular members of the family, not through the abstract "Chinese" of course catalogs. Knowing the map turns confusion into navigation: which variety to learn for which purpose, what transfers between them, and why the standard itself is a century-old political achievement rather than a neutral default.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The family map runs roughly like this. The Mandarin group — 官话 guānhuā, literally "officials\u2019 speech" — covers the north, the southwest and well over half the population of China proper; Beijing speech belongs here, and so do the varieties of Sichuan and Nanjing. To the south and east live the great non-Mandarin groups: Wu (吴语, Shanghainese and the Yangtze delta, tens of millions of speakers), Yue (粤语, Cantonese of Guangzhou and Hong Kong), Min (闽语, Hokkien, Teochew and Fuzhou varieties of Fujian and Taiwan — often split into subgroups as different from each other as Spanish from Portuguese), Hakka (客家话, the migrants\u2019 language scattered across the south and the diaspora), Xiang (Hunan) and Gan (Jiangxi). Linguists count seven to ten top-level groups depending on how the boundaries are drawn; each holds varieties a speaker of another group cannot follow by ear.',
      },
      {
        kind: 'para',
        text: 'The word "dialect" misleads badly here, and sociolinguists prefer "topolect" — a calque of 方言 fāngyán, "regional speech" — precisely to escape the European image of a dialect as a farmers\u2019 variant of one standard. Beijing speech and Cantonese are not variants of one spoken language: their sound systems, vocabularies and grammars diverged over roughly two millennia, and mutual intelligibility between a Beijing and a Guangzhou speaker is near zero — linguists\u2019 standard comparison is the distance between Spanish and Italian, or French and Romanian, languages that get separate names and separate dictionaries. The Chinese case keeps one name because ONE thing is genuinely shared: the writing system. The characters are read by every literate member of the family, each in their own spoken variety — the same newspaper pronounced entirely differently in Beijing, Shanghai and Hong Kong, yet understood identically on the page.',
      },
      {
        kind: 'para',
        text: 'That shared script — plus the classical written language, which stayed uniform while speech diverged — is the historical glue. But spoken unity was a modern project. Imperial officials used a koiné based on northern speech (the guānhuā of the name), but it reached a thin elite. The twentieth century rebuilt it as national policy: the Republic proclaimed a Guoyu (国语, "national language") standard in the 1910s-20s, fixed by 1932 on Beijing pronunciation; the People\u2019s Republic renamed and redefined it as Putonghua (普通话, "common speech") in 1955-56, with the definition still quoted today: Beijing pronunciation as the standard sound, the northern dialects as the base dialect, and model modern vernacular writing (the báihuà of the May Fourth generation) as the grammatical norm. Hanyu Pinyin, the romanization this book\u2019s foundations lesson taught, was promulgated in 1958 as the standard\u2019s teaching alphabet. Taiwan kept the name Guoyu for the same Beijing-based standard; Singapore and much of the overseas diaspora call it Huayu (华语).',
      },
      {
        kind: 'para',
        text: 'The 1956 definition repays a close read, because it is a compromise written into a sentence. Beijing pronunciation as the SOUND — but northern dialects as the BASE: the vocabulary and grammar draw on the wider Mandarin family, not on Beijing street talk, which is why the standard\u2019s word for "he" is tā wherever northerners say it, and why Beijing\u2019s own rhotacized flavor — erhua, the 儿 ending in huār, ménr — marks a Beijinger inside the standard rather than being required by it. The promotion machinery followed: Putonghua became the school medium nationwide, and the Putonghua Proficiency Test (普通话水平测试, PSC) grades speakers from 3C up to 1A on a 100-point scale — 1A (97 and above) is the broadcaster grade, and teaching credentials require roughly 2A or 2B depending on subject and region. Six decades of schooling plus the largest internal migration in history have made Putonghua the default public register of urban China: most young Chinese are diglossic, standard at school and work, topolect at home — the same home-standard split that defines Arabic\u2019s diglossia, transposed to a family with a unified script.',
      },
      {
        kind: 'para',
        text: 'The living landscape is uneven, and worth knowing without caricature. Cantonese retains extraordinary vitality through Hong Kong\u2019s media, cinema and pop music, and remains the daily language of Guangdong\u2019s streets; it also has its own written conventions for representing speech. Hokkien and Teochew survive robustly across Southeast Asia\u2019s diasporas. Shanghainese has thinned sharply among the young — children who understand Wu but answer in Putonghua are common — and sociolinguists now file several smaller varieties among the world\u2019s endangered languages, with UNESCO-style documentation projects running alongside official promotion of the standard. The state\u2019s position, formalized in language law, is both-and: Putonghua for national integration, topolects as cultural heritage to preserve. The honest summary is generational shift, not extinction: the family\u2019s diversity is contracting toward the standard faster in some cities than in others.',
      },
      {
        kind: 'para',
        text: 'For the learner, the map turns into decisions. Putonghua is the default: it opens the mainland, Taiwan (as Guoyu, with soft but real accent differences — and fewer erhua), and Singapore (as Huayu), and it is what every textbook, exam and app teaches. Cantonese is the right choice for Hong Kong, much of Guangdong family life and a century of cinema. Hokkien or Hakka may be the right choice for heritage reasons no market logic overrides. What transfers between members of the family is real but partial: character knowledge moves wholesale; the grammar of the standard\u2019s particles maps imperfectly (Cantonese\u2019s particle system is richer); tones do NOT transfer — a new tone system must be rebuilt from zero, and the Tonal Languages lesson\u2019s typology applies per variety. The practical protocol: learn one standard deeply, then treat the others as the related languages they are — cognate-rich, script-sharing, tonally foreign.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Route Three Cities to the Right Variety',
        steps: [
          'Chengdu (Sichuan): the local speech is Southwest Mandarin — inside the guānhuā family, so a Putonghua speaker follows much of it slowly and adapts in days; tone values differ, structure barely.',
          'Guangzhou (Guangdong): Yue territory — no mutual intelligibility with the standard; the learner must treat it as a new language that happens to share the script.',
          'Xiamen (Fujian): Min (Hokkien) — famously far even from other southern groups; Min subgroups like Hokkien and Fuzhounese strain mutual intelligibility among themselves.',
          'The routing rule: family membership predicts how much grammar and vocabulary transfer, but ONLY script and canon are guaranteed shared. Tone systems never transfer between top-level groups.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Travel and relocation: knowing which group a city belongs to predicts how far your Putonghua will carry — and whether a topolect phrasebook is worth packing.',
        'Media strategy: Cantonese cinema and Hong Kong news remain gateways to Yue; mainland streaming is Putonghua-first; heritage streaming serves Min and Hakka communities.',
        'Family heritage: diaspora families often speak a topolect at home — the heritage learner\u2019s first task is identifying WHICH member of the family the grandparents speak.',
        'Linguistics and teaching: the Sinitic family is the world\u2019s great natural experiment in tonogenesis and language standardization — every claim in a phonology course has a Chinese test case.',
        'Professional credentials: the PSC grading system (3C to 1A) gates broadcasting, teaching and interpretation careers inside China.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, calling Cantonese "a dialect of Mandarin": the dependency runs backward through the standard — both are sisters in the Sinitic family, and the "dialect" framing is political inheritance, not linguistic description. Second, assuming the standard is old: Putonghua as codified is younger than aviation; what is old is the script and the canon, not the sound system\u2019s official status. Third, believing character literacy implies speech comprehension across the family: a Shanghai reader navigates a Hong Kong newspaper and understands none of its spoken counterpart. Fourth, overstating Beijing\u2019s role: the definition takes Beijing PRONUNCIATION only; vocabulary and grammar are northern-family-wide, and native Beijing erhua is a local flavor the standard does not require. Fifth, treating topolects as doomed: shift is real, but Cantonese media, diaspora vitality and official heritage policy make "preservation versus promotion" a live negotiation, not a settled verdict.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Topolect', def: 'The calque of 方言 fāngyán preferred by linguists — a regional Sinitic variety, not a "dialect" of one standard.' },
        { term: 'Guānhuā (官话)', def: 'The Mandarin group — "officials\u2019 speech" — the northern and southwestern family that supplies the standard\u2019s base.' },
        { term: 'Putonghua (普通话)', def: 'The PRC standard: Beijing pronunciation, northern base, model vernacular grammar — defined 1955-56, taught nationwide since.' },
        { term: 'Guoyu / Huayu', def: 'Taiwan\u2019s and Singapore/diaspora names respectively for the same Beijing-based standard.' },
        { term: 'PSC', def: 'Putonghua Proficiency Test — the 100-point, six-grade credentialing system (3C to 1A) for broadcasters and teachers.' },
        { term: 'Erhua (儿化)', def: 'Beijing\u2019s rhotacized syllable endings — a local flavor inside the standard, not a requirement of it.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A Putonghua speaker hears everyday speech in Guangzhou. What should they expect?',
          options: ['Full understanding with accent adaptation', 'Near-zero spoken intelligibility — Yue is a different top-level group sharing the script', 'Understanding of grammar but not vocabulary', 'Understanding only of numbers'],
          answer: 1,
          explain: 'Yue and Mandarin diverged for millennia; the standard comparison is Spanish-versus-Italian distance. The script, not the speech, is shared.',
        },
        {
          q: 'The 1956 Putonghua definition takes what as the standard sound?',
          options: ['Nanjing pronunciation', 'Beijing pronunciation', 'An artificial compromise accent', 'Cantonese pronunciation'],
          answer: 1,
          explain: 'Beijing pronunciation is the sound; the NORTHERN DIALECTS are the vocabulary base; model modern vernacular writing is the grammar norm — three different sources in one sentence.',
        },
        {
          q: 'Why can a Cantonese and a Beijing reader share one newspaper?',
          options: ['They both speak Putonghua', 'The characters are read aloud in each reader\u2019s own variety while meaning stays constant', 'Newspapers are bilingual', 'Classical Chinese is universal'],
          answer: 1,
          explain: 'The script is morpheme-based, not sound-based: each literate member of the family voices the same text in their own speech — the family\u2019s true glue.',
        },
        {
          q: 'The PSC grade a national broadcaster must reach is…',
          options: ['3C', '2B', '1A (97+ points)', 'no grade is required'],
          answer: 2,
          explain: '1A is the broadcaster grade; teaching credentials typically require 2A/2B depending on subject and region — the standard enforced by credential, not by law alone.',
        },
      ] },
    ],
  },
  {
    id: 'compsci-hpc-parallel-scaling',
    title: 'High-Performance Computing: Parallelism, Scaling and the Exascale Era',
    domain: 'Emerging & Interdisciplinary',
    field: 'Computational Science',
    branch: 'Numerical Methods',
    tier: 'core' as const,
    concepts: [
      'Why one core stopped being enough',
      'Amdahl\u2019s law: the serial fraction that bounds speedup',
      'Gustafson\u2019s answer: scale the problem, not the patience',
      'The machine stack: MPI, OpenMP, GPUs and domain decomposition',
      'The roofline model: memory bandwidth as the real ceiling',
      'Exascale: Frontier, El Capitan and the cost of moving data',
    ],
    words: 1818,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The numerical-methods lesson of this chapter owns the mathematics of simulation — discretization, stability, the slow 1/√N convergence that Monte Carlo fights. But the biggest simulations in science are not limited by mathematics; they are limited by MACHINES, and machines stopped getting faster the simple way twenty years ago. Single-processor clock speeds plateaued in the mid-2000s when the power wall ended the gigahertz race, and the industry pivoted to the only resource it could still multiply: cores. Since then, scientific computing has been the art of spreading one calculation across thousands of processors without letting coordination eat the gains. This lesson is that art\u2019s rulebook — the two scaling laws, the machine stack, the memory-bound reality, and the exascale machines that embody all of it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every lesson in this book runs on the machinery of this one: the Monte Carlo ensembles, the digital twins, the climate model\u2019s ensemble spreads — all are parallel workloads whose feasibility is decided by the laws here. The gap between a code that scales and one that does not is the gap between a forecast that runs overnight and one that never finishes; between a national lab\u2019s exascale machine earning its electricity bill and an expensive space heater. The vocabulary — strong scaling, roofline, halo exchange — is the daily language of computational science as it is actually practiced.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Gene Amdahl stated the pessimist\u2019s law in 1967, and it has governed every parallelization plan since. If a fraction p of a program\u2019s work can run in parallel and the rest is irreducibly serial, then with N processors the speedup is S = 1/((1 − p) + p/N). The serial fraction does not shrink with N — it LOOMS. At p = 0.95, a hundred processors deliver S = 1/(0.05 + 0.0095) ≈ 16.8×, and as N grows without bound the speedup saturates at 1/(1 − p) = 20×. Buy a thousand processors for a program that is 95 percent parallel and you collect twenty-fold at best: the last five percent, usually input, output, coordination or an unparallelized kernel, becomes the entire cost center. Amdahl\u2019s law is why profiling — finding the serial fraction — precedes every serious parallelization effort, and why "just add more nodes" is not a strategy but a budget error.',
      },
      {
        kind: 'para',
        text: 'John Gustafson\u2019s 1988 answer reframed the question — and scientific computing has run on the reframe ever since. Amdahl fixed the problem size and asked how much faster; Gustafson fixed the TIME and asked how much bigger. Let the serial fraction be α of the parallel machine\u2019s runtime, and scale the problem with the machine: the scaled speedup becomes S = N − α(N − 1), which for α = 0.1 and N = 100 gives about 90× — near-linear. The reason is honest: scientists do not want the same computation faster, they want the same runtime spent on a BETTER computation — finer grid, longer simulation, more ensemble members, higher resolution. This is the distinction between strong scaling (same problem, more processors — Amdahl\u2019s regime, which saturates) and weak scaling (problem grows with the machine — Gustafson\u2019s regime, which can stay flat). Climate ensembles and lattice calculations are built weak; a single storm\u2019s nowcast must be strong. Knowing which regime your problem lives in decides everything about how you spend a machine.',
      },
      {
        kind: 'para',
        text: 'The machine stack has three standard layers. Between nodes — separate computers with separate memories — programs communicate through MPI, the Message Passing Interface standard (1994): processes exchange explicit messages, and the canonical pattern is domain decomposition, the simulation grid sliced into pieces, one per process, with each process exchanging halo or ghost cells — the boundary layers its neighbors need — after every timestep. Within a node\u2019s shared memory, OpenMP (1997) directives sprinkle parallel loops across threads without message passing. And beneath both sits the accelerator: the GPU, a thousands-wide bank of simple lanes executing the same instruction on different data — SIMT — fed through CUDA-style frameworks since 2007, delivering the memory bandwidth and floating-point throughput that matrix-dominated workloads crave. Production codes are hybrids: MPI across nodes, OpenMP or GPU kernels within, and the craft is choosing what runs where so that communication — the tax Amdahl warned about — stays under the compute.',
      },
      {
        kind: 'para',
        text: 'The roofline model is the performance engineer\u2019s map, published by Williams, Waterman and Patterson in 2009. A kernel\u2019s arithmetic intensity is its ratio of floating-point operations to bytes moved from memory. Plot attainable performance against that intensity on log axes: the ceiling is min(peak FLOPS, intensity × memory bandwidth) — a roofline with a sloping left side (memory-bound: bandwidth-limited) and a flat right side (compute-bound: peak-limited), meeting at the ridge point where intensity × bandwidth = peak. The model explains the most common performance shock in scientific computing: a naive matrix or stencil code with intensity near 0.25 FLOP/byte on a modern machine achieves a few percent of peak — the hardware is starving, not computing. Optimization is then reading the map: cache-blocking and fusion raise intensity; vectorization and GPU offload push toward the flat roof; and the first diagnostic is always where the kernel sits relative to the ridge.',
      },
      {
        kind: 'para',
        text: 'Exascale arrived in this decade. The TOP500 list — ranked since 1993 on the LINPACK benchmark — crowned Frontier at Oak Ridge the first exascale machine in June 2022, sustaining over 1.1 exaFLOPS (10¹⁸ floating-point operations per second), and El Capitan at Lawrence Livermore passed it in November 2024 at about 1.74 exaFLOPS, both built on AMD CPU+GPU nodes. The honest headline numbers, though, are power and movement: these machines draw tens of megawatts — a small town\u2019s electricity — and the Green500 list exists because performance per watt now ranks alongside raw FLOPS. Deeper still: moving a byte costs orders of magnitude more energy than a floating-point operation, which is why the roofline is really an energy map, why communication-avoiding algorithms are a research field, and why mixed precision — 16-bit arithmetic where AI tolerates it, 64-bit where conservation laws demand it — has become standard practice on the biggest machines.',
      },
      {
        kind: 'para',
        text: 'The craft closes the loop with this book. Monte Carlo ensembles are embarrassingly parallel — independent walks need no communication — which is why the Monte Carlo lesson\u2019s uncertainty quantification scales beautifully and why ensemble weather and climate forecasting was the first great beneficiary of many-core machines. Digital twins invert the budget: they must run FASTER than reality, a real-time constraint that forces model reduction, not just more hardware. Domain decomposition is the climate model\u2019s daily bread — every atmospheric code on Earth is a halo-exchange program. And the numerical-methods lesson\u2019s stability limits (the CFL condition) reappear as parallel constraints: finer decomposed grids demand smaller timesteps, so weak scaling buys resolution at a hidden time-stepping price. Parallel computing does not repeal the mathematics of simulation; it prices it.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Amdahl and Gustafson on the Same Machine',
        steps: [
          'Setup: N = 100 processors; the program is 90% parallel (p = 0.9, α = 0.1).',
          'Amdahl (same problem): S = 1/(0.1 + 0.9/100) = 1/0.109 ≈ 9.2×. Adding processors forever saturates at 1/0.1 = 10×.',
          'Gustafson (scaled problem, same runtime): S = 100 − 0.1 × 99 ≈ 90.1× — the machine now runs a grid ten times finer per dimension (100³ work) in the same wall-clock time.',
          'The lesson: same code, same machine, two honest answers to two different questions. State which question you are asking before you rent the supercomputer.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Weather and climate: ensemble forecasting and Earth-system models are the canonical weak-scaling workloads — the reason national weather services are supercomputing centers.',
        'CFD and engineering: aircraft, turbines and vehicles are designed in halo-exchanged domain-decomposition codes before any metal is cut.',
        'AI training: large-model training is extreme-scale weak scaling across GPU fabrics — the same MPI-and-broadcast machinery with tensor payloads.',
        'Drug discovery and materials: docking screens and first-principles materials searches parallelize over candidates, riding the embarrassingly-parallel easy case.',
        'Digital twins and national infrastructure: real-time fusion of simulation with sensor streams — the computational-science frontier this book\u2019s Simulating Reality chapter opens.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, extrapolating core counts past Amdahl: the serial fraction bounds strong scaling no matter what the procurement says — measure it before you promise it. Second, ignoring communication: halo exchanges and all-reduces grow as domains shrink, and at scale the boundary work can exceed the interior science. Third, trusting peak FLOPS: the roofline says most naive kernels live a few percent of peak; benchmark with the real data shapes. Fourth, assuming GPUs fix everything: transfer overhead to and from accelerator memory can erase the speedup for memory-bound or branchy code. Fifth, forgetting the timestep trap: decomposition refines grids, refined grids trip CFL limits, smaller timesteps undo the scaling — parallel efficiency and numerical stability negotiate through the same grid. Sixth, mixing precision casually: 16-bit arithmetic is a performance tool with numerical consequences, not a default.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Amdahl\u2019s law', def: 'Speedup S = 1/((1−p) + p/N) — the serial fraction bounds strong scaling at 1/(1−p) however many processors you buy.' },
        { term: 'Gustafson\u2019s law', def: 'Scaled speedup S = N − α(N−1): grow the problem with the machine and near-linear gains return.' },
        { term: 'Strong vs weak scaling', def: 'Same problem faster (saturates) versus bigger problem in the same time (can stay flat) — the first question of every HPC plan.' },
        { term: 'Domain decomposition', def: 'Slicing the grid across processes with halo/ghost-cell exchanges each step — MPI\u2019s canonical pattern.' },
        { term: 'Roofline model', def: 'Attainable performance = min(peak FLOPS, arithmetic intensity × bandwidth); kernels sit memory-bound left or compute-bound right of the ridge.' },
        { term: 'Exascale', def: 'Machines sustaining beyond 10¹⁸ FLOPS — Frontier (2022) first, El Capitan (2024) at ~1.74 EF/s — priced in megawatts and data movement.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A program is 90% parallel. With unlimited processors, its maximum speedup is…',
          options: ['90×', '10×', 'Unbounded', 'About 45×'],
          answer: 1,
          explain: 'Amdahl\u2019s ceiling is 1/(1−p) = 1/0.1 = 10× — the ten percent serial fraction becomes the entire runtime as N grows.',
        },
        {
          q: 'Weak scaling means…',
          options: ['the problem size grows with the processor count, holding runtime roughly constant', 'the code runs slower on more cores', 'only weak processors are used', 'the problem shrinks to fit one node'],
          answer: 0,
          explain: 'Gustafson\u2019s regime: more processors buy a bigger, better-resolved problem in the same wall-clock time — near-linear by design.',
        },
        {
          q: 'A kernel\u2019s arithmetic intensity sits well left of the roofline ridge point. Its performance is limited by…',
          options: ['peak FLOPS', 'memory bandwidth', 'core count', 'floating-point precision'],
          answer: 1,
          explain: 'Left of the ridge the machine is memory-bound: intensity × bandwidth caps performance far below peak — the fix is cache-blocking, fusion, vectorization.',
        },
        {
          q: 'Why do halo exchanges grow more expensive as a fixed grid is split across more and more processes?',
          options: ['Messages travel farther physically', 'Surface-to-volume ratio worsens: boundary cells grow relative to interior work', 'MPI slows down at scale', 'Timesteps get longer'],
          answer: 1,
          explain: 'Each split adds boundary and removes interior: communication grows while useful work per process shrinks — the strong-scaling tax Amdahl\u2019s law charges in practice.',
        },
      ] },
    ],
  },
]
