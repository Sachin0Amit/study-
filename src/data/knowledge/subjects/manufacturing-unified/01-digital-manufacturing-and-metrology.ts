/**
 * Knowledge Universe — Manufacturing & Industrial Systems — Chapter 01: Digital Manufacturing & Metrology
 * 3 lessons · ~3,892 words
 * fields: Manufacturing & Materials, Manufacturing Engineering
 * legacy sources: engineering.ts, x30-orphan-final-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Manufacturing Engineering, Manufacturing & Materials]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 eng-manufacturing-tolerances — Tolerances, Fits and the Reality of Measurement
 *   01.2 eng-additive-manufacturing-3d-printing — Additive Manufacturing: How 3D Printing Reshapes Production
 *   01.3 manuf-welding-joining — Joining Processes: Welding, Brazing and Soldering
 */
import type { KnowledgeTopic } from '../../types'

export const manufacturingUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'eng-manufacturing-tolerances',
    title: 'Tolerances, Fits and the Reality of Measurement',
    domain: 'Engineering',
    field: 'Manufacturing Engineering',
    branch: 'Metrology',
    tier: 'intermediate',
    concepts: [
      'No measurement is exact',
      'Nominal dimensions, limits and tolerance',
      'Clearance, transition and interference fits',
      'Tolerance stack-up in assemblies',
      'Worst-case versus statistical (RSS) analysis',
      'Datums, gauges and the environment of measurement',
    ],
    words: 1100,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Ask a machine for a 20-millimetre shaft and it delivers 20.013, or 19.988, or 20.006 — never exactly 20, because nothing in manufacturing is exact: not the machine, not the tool, not the operator, not the thermometer. Engineering\u2019s answer is not despair but arithmetic — declare how wrong the part may be, and design so everything still assembles and works. Tolerances are the contract between design intent and physical reality, and learning to read them is learning how mass production is possible at all.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every interchangeable part — every bolt that fits every nut of its size — exists because someone specified a tolerance and someone else measured it. Fit and stack-up calculations decide whether products assemble by hand or need a hydraulic press, and whether they feel precise or sloppy in the hand.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "Every manufacturing process has a natural spread: a lathe cuts a distribution of diameters, not a number. A drawing that demands perfection demands bankruptcy, because cost climbs steeply as tolerance tightens — holding ±0.01 mm needs better machines, slower cuts and more inspection than ±0.1 mm. The designer's first job is deciding how much error each dimension can honestly absorb, and not one digit more.",
      },
      {
        kind: 'para',
        text: 'A dimension is written with a nominal value and a tolerance: 20.00 ± 0.05 means every acceptable part measures between 19.95 and 20.05 — the limits — and anything outside is rejected. The width of that zone encodes function: a decorative bracket forgives a millimetre, a fuel-injector nozzle does not. Every digit past the decimal point is a purchase order.',
      },
      {
        kind: 'para',
        text: "When a shaft enters a hole, the difference between their sizes decides the assembly's character. Hole always bigger: a clearance fit — the axle spins freely. Sizes overlapping: a transition fit — it may slide or need a mallet. Shaft always bigger: an interference fit — press it together cold and friction itself transmits torque. The same two nominal sizes can produce a running fit or a seized one; only the tolerances differ.",
      },
      {
        kind: 'para',
        text: 'Parts assemble in chains: four plates stacked in a slot must fit the slot sized for their sum. Each part deviates within its own tolerance and the deviations accumulate, so the assembly dimension inherits a tolerance built from all of them. Generous part tolerances can stack into an impossible whole — which is why someone must run that arithmetic before the parts exist, not after they do not fit.',
      },
      {
        kind: 'para',
        text: 'Worst-case stacking assumes every part sits at its extreme simultaneously: total tolerance is the plain sum — safe, and pessimistic, since real processes cluster near nominal. Statistical analysis instead combines variances: the root-sum-square, the square root of the summed squares, comes out far smaller. RSS bets on the improbability of simultaneous extremes, a bet justified only when parts come from controlled, centred processes.',
      },
      {
        kind: 'para',
        text: 'A tolerance is a promise only if someone can verify it: micrometers measure, Go/No-Go gauges decide, and datums — the reference surfaces a part is measured from — keep everyone agreeing on where zero is. Even temperature conspires, since steel grows about 11 micrometres per metre per degree; a gauge block certified at 20 °C fibs in a hot workshop. Metrology is tolerance\u2019s other half.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Worst-case stack-up',
        latex: 'T_{wc} = \\sum_{i=1}^{n} T_i',
        meaning: 'Total tolerance when every part is simultaneously at its extreme — the conservative bound.',
      },
      {
        kind: 'formula',
        name: 'Statistical (RSS) stack-up',
        latex: 'T_{rss} = \\sqrt{\\sum_{i=1}^{n} T_i^{2}}',
        meaning: 'Root-sum-square assembly tolerance, valid when part deviations are independent and roughly normal.',
      },
      {
        kind: 'formula',
        name: 'Clearance extremes of a fit',
        latex: 'C_{min} = H_{min} - S_{max}, \\quad C_{max} = H_{max} - S_{min}',
        meaning: 'Tightest clearance is smallest hole minus biggest shaft; loosest is the reverse — the fit\u2019s whole range.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the assembled thickness tolerance of four stacked plates, each 10.00 ± 0.10 mm, computed worst-case and statistically.',
          'Recall the governing idea: worst-case sums the tolerances directly; RSS takes the square root of the sum of their squares.',
          'Apply: worst case gives T = 4 × 0.10 = 0.40 mm, so the stack is 40.00 ± 0.40. RSS gives √(4 × 0.10²) = √0.04 = 0.20 mm, so 40.00 ± 0.20.',
          'State the result: the statistical stack is half as uncertain as the worst case — but claiming ±0.20 requires centred, independent processes, while ±0.40 holds even on a bad day.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Automotive lines where thousands of parts must assemble without hand-fitting',
          'Bearing and shaft fits chosen to hold precise clearance under load and heat',
          'Aerospace assemblies, where tolerance budgets trade against weight and fatigue margins',
          'Consumer products, where panel gaps and flushness are perceived as quality itself',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Mixing worst-case and RSS logic in one analysis quietly double-counts risk. Tightening every tolerance is the amateur reflex — tighten only the few dimensions on the critical stack and open the rest to save money. And never demand a tolerance finer than the gauge that must check it: unmeasurable precision is not precision, only expense.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Nominal dimension', def: 'The stated ideal size from which limits are derived.' },
          { term: 'Limits', def: 'The maximum and minimum acceptable measurements of a feature.' },
          { term: 'Clearance fit', def: 'Hole always larger than shaft — guaranteed play.' },
          { term: 'Interference fit', def: 'Shaft always larger than hole — assembly by force, torque by friction.' },
          { term: 'Tolerance stack-up', def: 'Accumulated tolerance along a chain of mating dimensions.' },
          { term: 'RSS', def: 'Root-sum-square statistical combination of independent tolerances.' },
          { term: 'Datum', def: 'The reference surface or axis from which measurements are taken.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Four parts, each ±0.05 mm, stack worst-case to:',
            options: ['±0.05 mm', '±0.10 mm', '±0.20 mm', '±0.0125 mm'],
            answer: 2,
            explain: 'Worst-case sums the extremes: 4 × 0.05 = 0.20 mm.',
          },
          {
            q: 'RSS stacking yields a smaller total than worst-case because:',
            options: [
              'measurement tools round down',
              'independent deviations are unlikely to sit at their extremes together',
              'tolerances shrink over the production run',
              'assemblies are measured at higher temperature',
            ],
            answer: 1,
            explain: 'Variances, not extremes, add — so simultaneous worst-case alignment is exponentially rare in controlled processes.',
          },
          {
            q: 'An interference fit means:',
            options: [
              'the hole is always larger than the shaft',
              'the shaft is always larger than the hole',
              'either may be larger within the tolerance zone',
              'the parts are joined by adhesive',
            ],
            answer: 1,
            explain: 'Oversized shaft in an undersized hole: assembled by force, held by friction, transmitting torque without keys.',
          },
          {
            q: 'Tightening a tolerance from ±0.1 to ±0.01 mm typically:',
            options: [
              'costs about the same',
              'raises cost steeply — finer machines, slower cuts, more inspection',
              'reduces inspection requirements',
              'has no effect until assembly',
            ],
            answer: 1,
            explain: 'Precision is bought with process capability: tighter zones demand better machines, gentler cuts and more frequent checks.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'This topic pairs naturally with the engineering-drawing conventions it annotates. Follow with statistical process control — how production keeps processes centred so RSS assumptions hold — and with geometric dimensioning and tolerancing, the symbolic language that controls form as well as size.',
        tone: 'path',
      },
    ],
  },
  {
    id: "eng-additive-manufacturing-3d-printing",
    title: "Additive Manufacturing: How 3D Printing Reshapes Production",
    domain: "Engineering",
    field: "Manufacturing Engineering",
    branch: "Digital Manufacturing",
    tier: "intermediate",
    concepts: [
      "seven process families",
      "the digital model-to-part chain",
      "anisotropy from layer bonding",
      "feedstock quality and qualification",
      "post-processing as part of the process",
      "tooling-free economics and the crossover volume",
      "part consolidation and design for additive",
    ],
    words: 1293,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Manufacturing has always meant subtraction or molding: carve material away, or force it into a shaped cavity. Additive manufacturing is the third way — a machine reads a digital model, slices it into layers and builds the part one bonded layer at a time, placing material exactly where the geometry demands and nowhere else. A decade ago that described prototypes; today it describes certified fuel nozzles flying on airliners, titanium hips grown into bone, and hearing-aid shells made no other way. This lesson covers the process families, the engineering realities of printed parts, and the arithmetic of when printing beats molding.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Additive manufacturing's real gift is not speed but permission: geometry that a mold could not eject and a cutter could not reach — internal channels, lattices, consolidated assemblies — becomes manufacturable. The engineering discipline is knowing when that permission pays.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Standard practice sorts the processes into seven families by how each layer is made and bonded. Vat photopolymerization cures resin with light — the original process. Powder bed fusion sweeps a layer of polymer or metal powder and selectively melts it with a laser or electron beam; the workhorse for structural metal parts. Material extrusion — the desktop printer — pushes thermoplastic through a nozzle: crude, cheap and everywhere. Material jetting and binder jetting print through inkjet-style heads — the first firing droplets of photopolymer, the second a glue that binds powder for later sintering. Directed energy deposition blows powder into a melt pool under a laser or arc — slow, but the only family that repairs parts. Sheet lamination stacks and cuts bonded sheets.",
      },
      {
        kind: "para",
        text: "The digital chain is the backbone. A solid model is sliced into hundreds of layers, each converted to a toolpath, and the machine executes them in order, every layer fusing to the one below. The part is born with a build orientation already chosen — strength, surface, support removal and inspection access all depend on it — and with supports written in wherever overhangs would otherwise print into air.",
      },
      {
        kind: "para",
        text: "Feedstock is a design decision. Polymers run from PLA and ABS to nylon, PEKK and continuous-fiber composites; metals from titanium and Inconel to stainless and aluminum alloys. In powder-bed fusion, powder quality — sphericity, size distribution, recycled content — sets part density, and qualification is unforgiving: an aerospace house tracks every lot, and each layer's thermal history belongs to the certified process. This is why a printed bracket is not a commodity; it is the product of one machine, one parameter set, one audit trail.",
      },
      {
        kind: "para",
        text: "Printed parts are not isotropic. Within a layer, material melts and fuses cleanly; between layers, the bond is a remelt of an already-cooling surface — so strength and fatigue resistance in the build direction are typically lower, and load-path orientation becomes a design decision made before the first layer exists. The part comes off the plate unfinished: supports cut away, stress-relieved or hot-isostatically pressed to close porosity, interfaces machined to tolerance, surfaces polished. Post-processing routinely costs a third or more of the part; a printer makes a near-part, not a part.",
      },
      {
        kind: "para",
        text: "The economics are structural. Injection molding pays enormous tooling up front and then molds parts for cents; printing pays no tooling but every part costs hours of machine time. There is a crossover volume, and it is pure arithmetic: below it, tooling amortization dominates; above it, marginal cost does. Complexity barely changes the printed part's price — five days of machine time is five days — while it can make a mold impossible outright. The logic inverts: print for low volumes, urgent lead times, geometry molds cannot eject, and consolidation that deletes assemblies. GE's LEAP fuel nozzle is the canonical proof — twenty brazed parts became one printed one, 25 percent lighter and about five times more durable.",
      },
      {
        kind: "para",
        text: "Design for additive is its own literacy. Build orientation trades surface against strength and supports; slopes shallower than about 45 degrees grow without scaffolding, so geometry is shaped to be self-supporting; lattices and topology optimization put material only where load flows — an economy subtractive thinking never allowed. Consolidation merges brackets, manifolds and housings into single parts, deleting fasteners and assembly labor. The harder half is restraint: a thousand identical simple parts still belong in a mold, and a flat, tight-tolerance face still wants a machine tool.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Crossover volume",
        latex: "V^* = \\frac{C_{tool}}{c_{print} - c_{mold}}",
        meaning: "Tooling cost divided by the per-part cost gap — below this volume printing is cheaper, above it molding wins.",
      },
      {
        kind: "formula",
        name: "Build time",
        latex: "t = N_{layers}\\,(t_{scan} + t_{layer})",
        meaning: "Layers times scanning plus recoat — cost scales with part height, which is why flat nested parts amortize the overhead.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: whether a 5,000-part run should be printed at 40 dollars per part, or injection-molded with 50,000 dollars of tooling at 2 dollars per part.",
          "Recall: the crossover volume is tooling cost divided by the per-part cost gap.",
          "Apply: the gap is 40 - 2 = 38 dollars, so V* = 50,000/38 ≈ 1,316 parts.",
          "State the result: 5,000 parts sit well past the crossover — mold it. But print the first thousand while the tool is cut: no lead time, and design errors surface before they are cast in steel.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "GE's LEAP fuel nozzle — twenty parts consolidated into one, flying in powder-bed-fused metal",
          "Hearing aids and dental aligners — industries that went almost entirely additive within a decade",
          "Titanium implants — porous lattices that bone grows into, impossible to machine",
          "Rocket engines — printed chambers and injectors cutting development from years to months",
          "Casting patterns and tooling — binder jetting making molds without a pattern shop",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The printable is not the manufacturable: support scars, surface finish and tolerance stacks make 'free' geometry expensive to finish. Desktop results do not transfer to industrial processes. And post-processing forgotten at quotation is where the business case quietly dies.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Powder bed fusion", def: "Family that laser- or electron-beam melts each layer of a powder bed; the metal workhorse." },
          { term: "Build orientation", def: "The direction a part grows — sets strength, surface and support burden." },
          { term: "Support structure", def: "Sacrificial scaffolding printed under overhangs, removed afterward." },
          { term: "Anisotropy", def: "Direction-dependent properties; the interlayer bond is typically the weak link." },
          { term: "HIP", def: "Hot isostatic pressing — heat plus gas pressure to close internal porosity." },
          { term: "Part consolidation", def: "Merging an assembly into one printed part, deleting joints and fasteners." },
          { term: "Topology optimization", def: "Algorithmic shaping that places material only along load paths." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "A molding tool costs $50,000; parts cost $2 molded and $40 printed. The crossover volume is about:",
            options: ["130 parts", "1,300 parts", "13,000 parts", "250,000 parts"],
            answer: 1,
            explain: "50,000 ÷ (40 - 2) ≈ 1,316 — below that volume print, above it mold.",
          },
          {
            q: "Printed parts usually carry their weakest direction:",
            options: [
              "along the toolpath",
              "between layers, where each pass bonds to a cooling surface",
              "at exactly 45 degrees",
              "in vacuum builds",
            ],
            answer: 1,
            explain: "The interlayer bond is a remelt of partially cooled material — build orientation is a structural decision.",
          },
          {
            q: "GE's LEAP fuel nozzle is the canonical case of:",
            options: [
              "printing winning on unit cost at scale",
              "part consolidation plus geometry no mold could eject",
              "desktop machines entering factories",
              "sacrificial tooling for casting",
            ],
            answer: 1,
            explain: "Twenty brazed parts became one lighter, far more durable printed part — value from geometry and consolidation, not cheap volume.",
          },
          {
            q: "Printed-part cost and build time scale chiefly with:",
            options: [
              "part mass",
              "the number of layers — part height — plus recoat overhead",
              "the color count",
              "the file size",
            ],
            answer: 1,
            explain: "Every layer pays scanning plus recoat; tall parts are expensive and flat nested ones cheap — the inverse of machining's intuition.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "The tolerances lesson covers the metrology printed parts must meet; why materials fail pairs naturally — layer bonds and porosity are fatigue questions. The Manufacturing subject's additive chapters go deeper on process parameters and the smart factory.",
        tone: "path",
      },
    ],
  },
  {
    id: 'manuf-welding-joining',
    title: 'Joining Processes: Welding, Brazing and Soldering',
    domain: 'Technology & Applied Science',
    field: 'Manufacturing & Materials',
    branch: 'Joining Processes',
    tier: 'intermediate',
    concepts: [
      'Joining taxonomy: permanent versus temporary',
      'Fusion welding versus pressure welding',
      'Oxy-fuel (gas) welding',
      'Shielded metal arc welding (SMAW)',
      'Gas metal arc welding (GMAW/MIG)',
      'Gas tungsten arc welding (GTAW/TIG)',
      'Resistance spot welding',
      'Shielding: flux and inert gas',
      'Brazing and soldering versus welding',
      'Joint types: butt, lap, tee, corner, edge',
      'Heat-affected zone and weld defects',
      'Weldability and process selection',
    ],
    words: 1499,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Almost every engineered product — a ship, a pipeline, a car body, a circuit board — is an assembly, and the joints are where engineering honesty is tested: a structure fails at its connections long before it fails in its members. Joining processes divide by how they make two solids one. Welding fuses the base metals themselves, melting the parts (with or without added filler) into a single continuous solid — the strongest and most permanent family. Brazing and soldering also bond metal to metal, but with a filler alloy that melts while the parts stay solid. Mechanical fasteners and adhesives complete the taxonomy as removable or bonded non-fusion options. Examiners test the family boundaries and the process logic; practice does the rest.',
      },
      {
        kind: 'para',
        text: 'The core trade-off is heat. Heat is what fuses metal — but heat is also what damages it: it oxidizes the melt, distorts the part and alters the microstructure beside the weld. Every process in this lesson is best read as an answer to one question: where does the heat come from, and how is the hot metal protected from the air?',
      },
      { kind: 'heading', text: 'The fusion-welding families' },
      {
        kind: 'para',
        text: 'Gas (oxy-fuel) welding burns acetylene in oxygen; the flame reaches roughly 3100 \u00b0C and can melt steel directly, with a filler rod supplying the extra metal and the flame\u2019s chemistry providing some shielding. It is portable, cheap and slow — the traditional choice for repair work and thin sections, and the family that also cuts steel when the flame is switched to excess oxygen. Arc welding replaces the flame with an electric arc between an electrode and the work: a plasma at several thousand degrees that melts metal almost on contact.',
      },
      {
        kind: 'para',
        text: 'The arc family separates by electrode and shielding. Shielded metal arc welding (SMAW, stick) uses a consumable flux-coated rod: the coating burns to make a protective gas, forms a slag blanket over the cooling bead, and stabilizes the arc — simple, rugged, everywhere, but slower and stop-start as rods are replaced. Gas metal arc welding (GMAW, MIG) feeds a continuously spooled consumable wire with an inert or active gas (argon mixtures, carbon dioxide) flowing from the nozzle — fast, clean and the workhorse of fabrication shops, since the welder only steers the gun. Gas tungsten arc welding (GTAW, TIG) uses a non-consumable tungsten electrode with argon shielding and a separately fed filler: the slowest and hardest of the three, but also the most precise, which is why aerospace, bicycle frames and pipework demand it. Resistance spot welding works differently again: copper electrodes clamp overlapping sheets and pass thousands of amperes; the interface\u2019s resistance heats a nugget of metal through its melting point in a fraction of a second — no filler, no shielding gas, and seconds per spot, which is exactly why car bodies, with thousands of spots, are built this way.',
      },
      { kind: 'heading', text: 'Brazing, soldering and the joint map' },
      {
        kind: 'para',
        text: 'The non-fusion families keep the base metals solid. Brazing joins with a filler alloy that melts above 450 \u00b0C but below the parts\u2019 melting points — brass or silver-alloy fillers drawn into a close-fitting gap by capillary action; the joint is strong and the parts barely distort, making brazing the choice for frames, tools and heat exchangers. Soldering is the same idea below 450 \u00b0C with tin-based alloys — structurally weak but perfect for electrical joints, where the solder\u2019s job is connection and corrosion protection, not load. The exam line is the temperature boundary plus the melt question: in both processes the parent metal never melts; only the filler does — that single sentence separates the whole family from welding.',
      },
      {
        kind: 'para',
        text: 'Joints are named by how the parts meet: butt (edge to edge), lap (overlapping), tee (perpendicular), corner and edge. Fillet welds serve lap, tee and corner joints with a triangular cross-section; groove welds serve butt joints in thicker sections. Beside geometry sits metallurgy: the fusion zone melted and refroze as cast metal, and around it the heat-affected zone (HAZ) — metal that never melted but was hot enough for its microstructure to change, often the true weak link in high-strength steels. Defects follow from process care: porosity from gas trapped by bad shielding, undercut from too much current, slag inclusion from careless cleaning between passes, cracks from hydrogen or restraint, and distortion from unbalanced shrinkage. Weldability summarizes all of it — plain carbon steels weld easily; high-carbon and alloy steels need preheat and care; cast iron and aluminium test every parameter at once. Safety is part of the craft: the arc emits intense ultraviolet light (arc eye and skin burns), fumes demand ventilation, and hot metal spatters — helmet with the correct shade, gloves, and no flux-core excuses.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Choose the process',
        steps: [
          'Task: joint two sheets of mild steel in a car-body line, thousands of joints per vehicle, seconds per joint. Answer: resistance spot welding — no filler or gas, cycle time in fractions of a second, robotic-friendly; the entire automotive industry is the witness.',
          'Task: an aluminium bicycle frame, visible seams, full penetration, low distortion. Answer: GTAW (TIG) — non-consumable tungsten, argon shielding, separate filler; slowest but cleanest and most controllable.',
          'Task: field repair of a farm implement, no gas bottles, wind, dirt. Answer: SMAW (stick) — flux-coated rods carry their own shielding, kit is portable, wind does not blow away a flux as it can a gas.',
          'Task: connect components on a printed circuit board without heat damage. Answer: soldering — tin alloy below 450 \u00b0C, parent metal never melts, joint designed for connection rather than strength.',
          'Task: join steel frame tubes with minimal distortion and a strong, neat joint. Answer: brazing — silver or brass filler above 450 \u00b0C, parts stay solid, capillary action fills the gap.',
          'Recipe: read the requirements as constraints (speed, precision, portability, heat budget, load), then match them to the process\u2019s signature: filler or none, flux or gas, consumable electrode or not, parent metal melted or not.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'What distinguishes brazing and soldering from welding?',
            options: [
              'they use no filler metal',
              'the base metals never melt — only the filler alloy does',
              'they require an electric arc',
              'they are only for aluminium',
            ],
            answer: 1,
            explain: 'Welding fuses the parent metals themselves; brazing (above 450 \u00b0C) and soldering (below) join with a melted filler while the parts stay solid.',
          },
          {
            q: 'In GTAW (TIG) welding the electrode is:',
            options: [
              'consumable steel wire',
              'non-consumable tungsten with separately fed filler',
              'a carbon rod dipped in flux',
              'the workpiece itself',
            ],
            answer: 1,
            explain: 'TIG\u2019s tungsten electrode only makes the arc under argon shielding; filler, if needed, is fed by hand — the source of the process\u2019s precision.',
          },
          {
            q: 'Why does resistance spot welding dominate car-body assembly?',
            options: [
              'it produces the strongest possible joints of any process',
              'it needs no filler or shielding and completes a spot in a fraction of a second',
              'it welds any metal pair equally well',
              'it leaves no heat-affected zone',
            ],
            answer: 1,
            explain: 'Thousands of amps through clamped overlapping sheets make a weld nugget almost instantly; speed and automation, not ultimate strength, won the automotive line.',
          },
          {
            q: 'The heat-affected zone (HAZ) is:',
            options: [
              'the melted and refrozen weld pool',
              'metal that never melted but whose microstructure changed from welding heat',
              'the flux blanket over the bead',
              'the gap between the parts being joined',
            ],
            answer: 1,
            explain: 'The HAZ sits beside the fusion zone — solid metal whose grain structure heat has altered; in many steels it, not the weld, is where failure starts.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling soldering "weak brazing" — the 450 \u00b0C boundary and the application (electrical versus structural) define the two. Saying MIG and TIG differ only in gas: the electrode does — consumable spooled wire versus non-consumable tungsten. Blaming porosity on the base metal when the cause is shielding: gas plus flux keep the air out of the melt. Forgetting that slag must be chipped between SMAW passes — inclusion defects follow. Assuming a weld is always stronger than the parent metal: the HAZ can be the weakest link, which is why preheat and post-weld heat treatment exist. And treating safety as an afterthought: arc radiation, fumes and spatter are process realities, not optional cautions.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: basic metallurgy (iron-carbon phases, grain structure) and electricity (current, resistance heating). Follow with the materials-failure topics (fatigue, fracture) to see why weld details decide service life, and the metrology topics for inspection of finished joints. Primary reading: Wikibooks, "Welding" (en.wikibooks.org, CC BY-SA) — the fusion-joining definition, the SMAW, oxy-fuel and GTAW process chapters and the safety framing used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Joining families: welding (parent metal fuses), brazing/soldering (only filler melts), fasteners and adhesives.',
        'Gas welding burns acetylene in oxygen; arc welding uses an electric plasma arc.',
        'SMAW: flux-coated stick, self-shielding slag; GMAW/MIG: spooled wire plus gas; GTAW/TIG: tungsten electrode, argon, precision.',
        'Resistance spot welding: clamp, thousands of amps, nugget in seconds — the car-body process.',
        'Joints: butt, lap, tee, corner, edge; fillet versus groove welds; the HAZ is the metallurgical weak link.',
        'Defects: porosity, undercut, slag inclusion, cracks, distortion — each traces to a process parameter.',
        'Brazing above 450 \u00b0C, soldering below; neither melts the parent metal.',
      ] },
    ],
  },
]
