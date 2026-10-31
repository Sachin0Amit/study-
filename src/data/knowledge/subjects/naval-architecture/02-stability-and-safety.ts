/**
 * Knowledge Universe — Naval Architecture & Marine Engineering — Chapter 02: Stability & Safety
 * 2 lessons · ~3,837 words
 * field: Naval Architecture
 * legacy sources: x61-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Stability & Safety]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 eng-naval-intact-stability-gz — Intact Stability: GZ Curves, Dynamic Stability and the Angle of Loll
 *   02.2 eng-naval-damage-subdivision — Damage Stability: Flooding, Subdivision and the Probabilistic Index
 */
import type { KnowledgeTopic } from '../../types'

export const navalArchitectureCh02: KnowledgeTopic[] = [
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
]
