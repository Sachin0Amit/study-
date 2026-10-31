/**
 * Knowledge Universe — Structural & Seismic Engineering — Chapter 01: Structural Analysis & Design
 * 3 lessons · ~4,688 words
 * fields: Civil & Structural Engineering, Civil Engineering
 * legacy sources: engineering.ts, x19-civil-core.ts, x48-all-subjects-split-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Structural Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 eng-structural-analysis-methods — Structural Analysis: Determinacy, Trusses and Shear-and-Moment Diagrams
 *   01.2 civ-concrete-structures — Concrete Structures: Materials, Beams and Limit-State Design
 *   01.3 eng-structures-bridges — Why Bridges Stand: Loads, Stress and Safety Factors
 */
import type { KnowledgeTopic } from '../../types'

export const structuralSeismicEngineeringCh01: KnowledgeTopic[] = [
  {
    id: 'eng-structural-analysis-methods',
    title: 'Structural Analysis: Determinacy, Trusses and Shear-and-Moment Diagrams',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Structural Engineering',
    tier: 'intermediate',
    concepts: [
      'Equilibrium as the whole game: reactions from statics',
      'Static determinacy and indeterminacy: counting equations and unknowns',
      'Trusses: assumptions, method of joints, method of sections',
      'Zero-force members and why they exist',
      'Beam analysis: shear force and bending moment diagrams',
      'Point loads, distributed loads and the differential relations',
      'Influence lines: analysis for moving loads',
    ],
    words: 1687,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Before any structure is designed, it must be analyzed: given the loads, what forces travel through the members? Structural analysis answers that question, and its first half — the statically determinate half covered here — rests on nothing more than Newton\'s laws written three times: the sums of horizontal forces, vertical forces and moments must each equal zero. Every method in this lesson is a bookkeeping scheme for those three equations, applied to joints, to whole members, or to a cut piece of a structure. Master the bookkeeping and the analysis of trusses and beams becomes arithmetic rather than memory.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Determinacy checks, truss member forces, and shear-and-moment diagrams are the opening moves of nearly every structural problem set and design calculation in the world. The companion lessons own the neighboring territory: the bridges lesson owns the physical picture of loads, stress and buckling; the concrete lesson owns reinforced-concrete design. This lesson owns the analysis machinery that feeds both.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Reactions and Determinacy' },
      {
        kind: 'para',
        text: 'A structure rests on supports, and supports supply unknown reaction forces: a roller gives one unknown (perpendicular to its plane), a pin or hinge gives two (horizontal and vertical), a fixed support gives three (two forces plus a moment). With three equations of equilibrium available for a planar body, the count decides the character of the structure. If the unknowns equal the available equations, the structure is statically determinate — the reactions, and then every internal force, can be found by statics alone. If the unknowns exceed the equations, it is indeterminate: consistent equations still bind the structure, but extra information — member stiffnesses, deflection compatibility — is needed to solve them, which is the business of the force and displacement methods treated in advanced courses. If the unknowns fall short, or the equations are dependent while the structure can move, it is a mechanism, not a structure at all.',
      },
      {
        kind: 'para',
        text: 'For trusses the classic count compares members m, reactions r and joints j: with two equations per joint, determinacy requires m + r = 2j. Fewer members than that means the truss can change shape; more means redundant members that cannot be resolved by statics. The count is a first screening, not a proof — a truss can have the right count yet be internally unstable — but as a sanity check it settles most examination questions in one line.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Reactions of a Simple Beam',
        steps: [
          'Set up: a beam of length 10 m rests on a pin at A (left) and a roller at B (right); a point load of 20 kN acts 3 m from A, and a uniformly distributed load of 2 kN/m covers the right 5 m.',
          'Replace the distributed load by its resultant: 2 kN/m × 5 m = 10 kN at the centroid, 2.5 m from B.',
          'Sum moments about A to get the vertical reaction at B: ΣM_A = 0 gives (20 × 3) + (10 × 7.5) − (R_B × 10) = 0, so R_B = (60 + 75)/10 = 13.5 kN.',
          'Sum vertical forces: R_A + 13.5 − 20 − 10 = 0, so R_A = 16.5 kN.',
          'Check: sum of moments about B — (16.5 × 10) − (20 × 7) − (10 × 2.5) = 165 − 140 − 25 = 0 ✓. The check is not decoration; in practice it catches most arithmetic slips.',
        ],
      },
      { kind: 'heading', text: 'Trusses: Joints and Sections' },
      {
        kind: 'para',
        text: 'A truss is an assembly of straight two-force members joined at pinned connections, loaded only at the joints. Under those assumptions every member carries pure axial tension or compression — no bending — which is why trusses turn long spans into lightweight cages of push and pull. The method of joints works joint by joint: draw the free body of one joint with at most two unknown member forces, apply the two force-equilibrium equations, and march across the truss, each solved joint exposing the next. Tension is conventionally positive — the member pulls on the joint — and a negative answer simply means the member is in compression.',
      },
      {
        kind: 'para',
        text: 'The method of sections is the shortcut when a single member\'s force is wanted: cut the truss completely through that member (and at most two others), keep whichever half is simpler, and apply all three equilibrium equations to the piece. The moment equation taken about the point where two cut members intersect isolates the third force immediately — the deliberate choice of such moment centers is the craft of the method. Two reading skills complete the toolkit. Zero-force members — found at joints with no external load where two non-collinear members meet, or three members where two are collinear — carry no force under that loading but exist for stability, bracing slender compression members against buckling; spotting them first simplifies everything downstream. And symmetric trusses under symmetric loading answer in half the work.',
      },
      { kind: 'heading', text: 'Beams: Shear and Moment Diagrams' },
      {
        kind: 'para',
        text: 'A beam resists loads perpendicular to its axis by bending, and the two diagrams that describe that bending are drawn everywhere in structural engineering. The shear force V at a section is the algebraic sum of transverse forces on one side; the bending moment M is the sum of their moments about that section. Between disturbances the two obey differential relations that make the diagrams nearly self-drawing: the slope of the moment diagram equals the shear, and the slope of the shear diagram equals minus the load intensity. A point load drops the shear diagram by the load\'s value; a uniformly distributed load shears the diagram linearly and bends the moment diagram into a parabola; a couple jumps the moment diagram without touching shear. Maximum moment occurs where shear crosses zero — the rule that locates the design section of every floor beam.',
      },
      {
        kind: 'para',
        text: 'The diagram pair also explains structural shape. Where moment is large and single-signed, the beam wants depth; where it reverses sign, the same top and bottom flanges alternate between tension and compression. Reading a shear-moment pair fluently — sketching both by hand for a loaded beam in a few minutes — is the single most transferable skill of this lesson, because reinforced-concrete design begins by multiplying these internal forces by material properties.',
      },
      { kind: 'heading', text: 'Influence Lines: Loads That Move' },
      {
        kind: 'para',
        text: 'When a load crosses a structure — a truck on a bridge, a crane on a gantry — the question changes from "what is the force?" to "where should the load stand for worst effect?" The influence line for a response (a reaction, a shear, a member force) is the graph of that response against the load\'s position: place a unit load at a point, record the response, and plot. Once the line is drawn, any load train is evaluated by superposition — multiply each load by the line\'s ordinate beneath it and sum. For determinate structures the influence lines are straight segments, and two theorems make them quick: the line for a reaction of a simple beam is the straight line rising from zero at the far support to one at the reaction\'s own support; the line for shear just inside a section is the reaction line shifted down by one over the span to the section. The worst position of a set of wheel loads places the average load on either side of the diagram peak equal — the criterion that governs bridge rating to this day.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Four slips. Assuming tension and "correcting" the sign twice — fix a convention and trust it. Forgetting that the method of sections may cut at most three unknown members for a planar truss. Drawing moment diagrams whose slopes contradict the shear diagram — the differential relations are a free check. And treating determinacy counts as a verdict: the m + r = 2j test can pass for a truss that still collapses by its geometry, so a quick shape check always accompanies the count.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'static determinacy', def: 'The condition that unknown forces can be found from equilibrium equations alone (planar truss: m + r = 2j).' },
          { term: 'two-force member', def: 'A member loaded only at its ends, carrying pure axial force along its line.' },
          { term: 'method of joints', def: 'Joint-by-joint free bodies with two equilibrium equations each, exposing member forces progressively.' },
          { term: 'method of sections', def: 'Cutting through the truss to a member of interest and applying three equilibrium equations to one half.' },
          { term: 'shear force / bending moment diagrams', def: 'Graphs of internal V and M along a beam; their slopes interlock by dM/dx = V.' },
          { term: 'influence line', def: 'A response plotted against a moving unit load\'s position, used to find the worst loading case.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A planar truss has m = 21 members, r = 3 reactions and j = 12 joints. The determinacy count says:',
            options: ['determinate — 21 + 3 = 24 = 2 × 12', 'indeterminate by one degree', 'a mechanism — too few members', 'the count cannot be applied'],
            answer: 0,
            explain: 'm + r = 24 equals 2j = 24, so statics suffices — but the count only screens; a quick geometry check must still confirm the truss cannot change shape.',
          },
          {
            q: 'At an unloaded truss joint, two non-collinear members meet. Their forces are:',
            options: ['both zero', 'equal and opposite', 'each half the joint load', 'undetermined'],
            answer: 0,
            explain: 'With no external load, two non-collinear forces can balance only if both vanish — the zero-force-member rule.',
          },
          {
            q: 'The shear diagram of a beam crosses zero at midspan under a uniformly distributed load. There:',
            options: ['shear is maximum', 'moment is maximum', 'deflection is zero', 'the slope of the beam is zero'],
            answer: 1,
            explain: 'Since dM/dx = V, the moment is stationary (maximum for sagging) exactly where V = 0 — the design section.',
          },
          {
            q: 'An influence line differs from a shear or moment diagram because it is plotted against:',
            options: ['position along the beam of a fixed load', 'the position of a moving unit load', 'time', 'material strength'],
            answer: 1,
            explain: 'Influence lines graph a chosen response as the load\'s location varies — the tool for bridges, cranes and moving trains.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the bridges lesson for loads, stress and the physical vocabulary this lesson computes with. Follow with the concrete design lesson, which consumes these internal forces, and the seismic lesson for how analysis changes when the load becomes dynamic.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'civ-concrete-structures',
    title: 'Concrete Structures: Materials, Beams and Limit-State Design',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Structural Engineering',
    tier: 'intermediate',
    concepts: [
      'Concrete technology: water-cement ratio, grades and workability',
      'Shrinkage, creep and characteristic strength',
      'Working stress versus limit state design philosophies',
      'Flexural design of singly reinforced beams',
      'Shear design, bond and stirrups',
      'Slabs, columns and footings',
      'Basics of prestressed concrete',
    ],
    words: 1832,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Reinforced concrete is the most-used engineered material on earth, and its design is a study in managed imperfection: concrete strong in compression and weak in tension, steel the reverse, combined so each does what it does best. This lesson follows the material from its chemistry to its code-based design — how the water-cement ratio fixes strength, why the working stress method and the limit state method answer different questions, how a beam is designed to bend, shear and crack safely, and what prestressing buys. The bridge lesson in this Library covers load paths and trusses; here the subject is the material and the section, the daily work of the structural designer.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Concrete structures is the single largest Core CE topic in the GATE civil paper, and its vocabulary — characteristic strength, limit state, xu/d, superelevation\'s cousin nowhere in sight — repeats across every other structural question. The examiners test whether you can compute a design moment, check shear, and reason about why under-reinforced sections fail ductile rather than brittle.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Water-cement ratio', def: 'The mass ratio of water to cement in a mix — the dominant control on strength via Abrams\' law: lower w/c means higher strength, because excess water leaves capillary pores as it evaporates. Structural mixes run roughly 0.40 to 0.60.' },
          { term: 'Characteristic strength', def: 'The strength below which not more than 5% of test results fall — a statistical floor, not an average. Grade M20 concrete has a characteristic 28-day cube strength of 20 MPa; Fe415 steel yields at 415 MPa.' },
          { term: 'Limit state', def: 'A condition beyond which a structure fails its purpose. Collapse (ultimate) limit states cover flexure, shear and instability; serviceability limit states cover deflection and cracking. The limit state method applies partial safety factors to both loads and material strengths.' },
          { term: 'Neutral axis depth (xu)', def: 'The depth of the zero-stress fibre in a flexural section at failure. Its ratio to the effective depth d distinguishes balanced (xu = xu,max), under-reinforced (xu < xu,max — steel yields first, ductile) and over-reinforced (brittle) sections.' },
          { term: 'Creep', def: 'The slow additional strain of concrete under sustained load, growing for years and increasing deflections; it also relaxes some of the stress in prestressing steel and redistributes moments.' },
          { term: 'Prestressing', def: 'Intentionally compressing concrete with tensioned high-strength steel so applied loads work against an existing compression — pre-tensioned before casting or post-tensioned through ducts afterwards — controlling cracks and enabling long spans.' },
        ],
      },
      {
        kind: 'para',
        text: 'Concrete\'s strength is decided before it sets. Cement hydrates with water to form calcium-silicate-hydrate gel — the glue of the matrix — but only about 0.25 by weight of water is chemically needed; anything more exists for workability and eventually evaporates, leaving capillary pores. Hence Abrams\' law: for fully compacted concrete of given age, strength is inversely related to the water-cement ratio. The mix is specified by grade — M20, M25, M30 — where the number is the characteristic 28-day cube strength in MPa, measured on 150 mm cubes; cylinder strengths run about 0.8 of cube. Workability is measured by slump or compaction factor, and it trades against strength: more water flows better but weakens, so admixtures — plasticisers and superplasticisers — exist to separate the two. Hardened concrete also moves: drying shrinkage (roughly 0.0003 strain, more with finer cements and poorer curing), thermal expansion, and creep under sustained load, which roughly doubles the immediate elastic deflection over years. Curing — keeping moisture and temperature favourable for at least 7 to 14 days — is not a formality; most site strength problems trace to it.',
      },
      {
        kind: 'para',
        text: 'Two design philosophies share the syllabus. The working stress method, the older one, keeps computed service-load stresses within permissible values using elastic theory: steel and concrete are assumed linear-elastic, bonded, and related by the modular ratio, and the safety margin hides entirely inside conservative permissible stresses. It is simple and still used for some serviceability checks, but it cannot describe failure, because a section near collapse is far from elastic. The limit state method — the Indian code IS 456\'s current basis — instead multiplies loads by partial safety factors (1.5 for dead plus live load combinations) and divides material strengths by theirs (1.5 for concrete, 1.15 for steel), then checks separate limit states: the structure must not collapse under factored loads and must not deflect, crack or vibrate unacceptably under service loads. The philosophy\'s insight is that uncertainties differ — loads vary more than steel strength, concrete more than steel — so factors should attach where the uncertainty lives, with statistics behind each number.',
      },
      {
        kind: 'formula',
        name: 'Limiting moment of resistance (singly reinforced, Fe415)',
        latex: 'M_{u,lim} = 0.138\\, f_{ck}\\, b\\, d^{2}',
        meaning: 'The maximum factored moment a balanced under-reinforced section can carry: 0.36 fck b xu,max (d − 0.42 xu,max) with xu,max/d = 0.48 for Fe415 (0.53 for Fe250, 0.46 for Fe500). Beyond this the section needs compression steel or a larger depth.',
      },
      {
        kind: 'para',
        text: 'Flexural design then becomes a controlled choice. A singly reinforced beam carries the factored moment with tension steel alone: pick the section, compute the required steel from force equilibrium between the concrete compression block (0.36 fck b xu) and steel tension (0.87 fy Ast), and deliberately keep xu below xu,max so the steel yields before the concrete crushes — the under-reinforced, ductile condition that telegraphs failure by large deflections and wide cracks instead of dropping without warning. Shear is the second check: diagonal tension near supports, quantified as nominal shear stress Vu/bd against code limits, resisted by vertical or inclined stirrups working in a truss analogy — concrete struts diagonally, steel ties across. Minimum shear reinforcement is mandatory regardless of calculation, because concrete\'s shear story is unreliable. Bond and anchorage complete the force path: the development length embeds the bar far enough that its yield force transfers to the concrete before the bar pulls out, and details like laps and hooks exist for this reason, not decoration.',
      },
      {
        kind: 'para',
        text: 'The member families specialise the same mechanics. Slabs span in one direction when the longer side exceeds twice the shorter (load mostly to the long supports) and in two-way bending otherwise, with minimum reinforcement for temperature and shrinkage; flat slabs drop the beams and add punching-shear checks at columns. Columns carry compression with nominal eccentricity requirements, classified short or slender because slenderness invites buckling amplification, and confined by lateral ties that delay buckling of the main bars and hold the core — the reason confined columns survive earthquakes better. Footings spread column loads to soil as isolated pads, combined strips or rafts, designed both for bending and for punching shear at the column face. Prestressing reorganises all of it: tensioned strands — pre-tensioned on a bed before casting, bonded by curing; post-tensioned through ducts and locked by anchorages — put the whole section in compression so the live load must first erase it. Cracks close, spans lengthen, and the high steel strengths that would crack ordinary RC become usable. The price is the loss list: elastic shortening, creep and shrinkage of concrete, relaxation of steel, anchorage slip, and friction in post-tensioned ducts — every exam asks at least one.',
      },
      {
        kind: 'para',
        text: 'Two further blocks complete the designer\'s checklist. Durability is now designed, not hoped for: exposure classifications (mild to severe, IS 456\'s tables) set minimum grades, covers and cement contents, because the real killers of RC structures are chemical — chloride ingress depassivating reinforcement and triggering corrosion that expands to crack the cover, sulfate attack disrupting the paste, alkali-silica reaction swelling with certain aggregates. Water-cement ratio, cover and compaction are the defence trio; the 50-year design life of a bridge is bought at the detailing stage, not in repairs. Testing closes the loop: cube (or cylinder) compression tests at 7 and 28 days are the acceptance standard, workability is sampled at the truck, and hardened structures are assessed non-destructively by rebound (Schmidt) hammer for surface strength correlations, ultrasonic pulse velocity for homogeneity and cracking, and core extraction when disputes need the truth. What links durability and testing is the lesson\'s recurring theme: concrete is a statistical material made on site, and every safety factor in the code is an honest acknowledgment of that variance — the same statistical humility the limit-state philosophy formalised.',
      },
      {
        kind: 'example',
        title: 'Sizing a beam in three moves',
        steps: [
          'Factored load gives design moment Mu = 180 kN·m on a 230 mm × 450 mm (effective) Fe415/fck 20 section. Capacity check: 0.138 × 20 × 230 × 450² in N·mm ≈ 128.8 kN·m < 180 — singly reinforced is insufficient at this size.',
          'Either deepen (d = 550 mm gives 0.138 × 20 × 230 × 550² ≈ 192 kN·m ≥ 180 — feasible) or add compression steel; the designer weighs headroom against steel.',
          'With d = 550, xu < xu,max is arranged by computing Ast from equilibrium with the intended neutral axis, then checking shear: Vu/(bd) against code limits fixes stirrup diameter and spacing, and the development length fixes anchorage past the support.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          { q: 'Grade M25 means the concrete has a characteristic 28-day cube strength of…', options: ['25 kN average', '25 MPa below which not more than 5% of results fall', '25 MPa mean strength', '25 MPa cylinder strength'], answer: 1, explain: 'Characteristic strength is the 5% fractile on 150 mm cubes — a statistical floor, not the mean.' },
          { q: 'In limit state design, the partial safety factor for steel is smaller than for concrete (1.15 vs 1.5) mainly because…', options: ['steel is cheaper', 'steel strength is less variable and better controlled', 'steel carries less load', 'concrete cracks'], answer: 1, explain: 'Partial factors attach to uncertainty; factory-controlled steel is statistically tighter than site-cast concrete.' },
          { q: 'An under-reinforced beam section is preferred because it…', options: ['uses less concrete', 'fails ductile after steel yields, warning before collapse', 'never cracks', 'is always cheaper'], answer: 1, explain: 'Yielding steel gives large deflections and cracking before the brittle concrete crushing — ductility is a design goal, not an accident.' },
          { q: 'xu,max/d for Fe415 is…', options: ['0.46', '0.48', '0.53', '0.62'], answer: 1, explain: 'IS 456 gives 0.53 for Fe250, 0.48 for Fe415 and 0.46 for Fe500 — it falls as steel strength rises.' },
          { q: 'Pre-tensioning differs from post-tensioning chiefly in that pre-tensioning…', options: ['uses no steel', 'tensions strands before casting and relies on bond', 'requires anchorages and ducts', 'cannot be done in factories'], answer: 1, explain: 'Pre-tensioned strands are jacked against a bed before casting and gain bond as the concrete cures; post-tensioning needs ducts and anchorages.' },
        ] },
      {
        kind: 'para',
        text: 'Read the code the way examiners quote it: IS 456 for everything ordinary, the IRC codes where roads meet structures, and the detailing rules that turn calculations into drawings — cover, spacing, laps, anchorage. The material science half of this lesson connects to the materials-failure lesson for the metals side; the design half connects to the bridge lesson for systems thinking about loads; the hydrology lesson that follows is the water-resources half of the same professional exam.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the bridge-structures lesson for load paths and statics, and the materials-failure lesson for stress and strain vocabulary. Follow with the highway lesson for another IRC-governed design domain, and the surveying lesson for how positions on site are actually fixed. Standard readings: IS 456:2000, Pillai & Menon\'s Reinforced Concrete Design, Krishna Raju on prestressing, and the GATE CE syllabus sections on concrete structures.',
      },
    ],
  },
  {
    id: 'eng-structures-bridges',
    title: 'Why Bridges Stand: Loads, Stress and Safety Factors',
    domain: 'Engineering',
    field: 'Civil & Structural Engineering',
    branch: 'Structural Engineering',
    tier: 'core',
    concepts: [
      'Dead load, live load and environmental load',
      'Stress, strain and the elastic range',
      'Tension, compression and structural form',
      'Bending and the shape of beams',
      'Buckling in slender members',
      'Safety factors and limit states',
    ],
    words: 1169,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'A bridge holds rush-hour traffic over a canyon for a century — through storms, heat waves and the slow creep of rust — and we walk onto it without a thought. That calm is engineered. Every member is sized so the worst credible load meets a material kept comfortably inside its limits, with a margin for everything nobody can know. Structural engineering is the art of turning strong enough into numbers: loads, stresses and safety factors you can actually check.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every structure you trust — bridges, buildings, cranes, aircraft wings — is a stack of calculations like these. The vocabulary of load, stress and safety factor is how engineers argue about whether something stands, and it is the same vocabulary that explains the spectacular failures after the fact.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "Dead load is the structure's own weight — known to the kilogram and never leaving. Live load is everything that moves: traffic, crowds, snow, estimated at their credible worst. Environmental loads add wind pressure, earthquake shaking and thermal expansion. Design then stacks these pessimistically: a bridge is sized for the day maximum traffic meets a once-in-decades storm, and the load path — the route those forces trace through members to the ground — must be unbroken all the way down.",
      },
      {
        kind: 'para',
        text: "Force spread over area is stress, measured in pascals; stretch relative to length is strain, a pure ratio. Below the yield point the two are proportional — Hooke's law — with the constant E, the elastic modulus, a stiffness fingerprint of the material. Working stress stays well under yield, where steel and timber spring back; past it they deform permanently, announcing overload by bending rather than shattering without warning.",
      },
      {
        kind: 'para',
        text: 'Materials speak different dialects of strength: steel pulls superbly, concrete crushes well but cracks under tension. Structural form follows the split — suspension bridges hang cables in pure tension, arches squeeze stone into pure compression, trusses triangulate members so each carries only push or pull. A good design lets every material work in its native language, which is why arches appeared in Rome and cables had to wait for industrial steel.',
      },
      {
        kind: 'para',
        text: 'A beam bends because its fibres want different lengths: the top shortens, the bottom stretches, and a neutral axis between them does neither. Bending stress grows with distance from that axis, which is why I-beams exist — flanges pushed far from the middle where they earn their keep, a thin web knitting them together. Depth is cheap strength: doubling a beam\u2019s depth typically cuts its bending stress about fourfold.',
      },
      {
        kind: 'para',
        text: 'Squash a short concrete block and it crushes at a predictable stress. Squash a slender steel column of the same material and it bows sideways long before that — buckling, a stability failure governed by length rather than strength. Euler\u2019s formula has the collapse load falling with the square of length: double the column and it carries a quarter. Many historic collapses trace to members that were strong enough but not stiff enough.',
      },
      {
        kind: 'para',
        text: 'No calculation knows everything — loads are estimated, materials vary, welds hide flaws, decades bring corrosion. So engineers divide capacity by demand: a factor of 1.5 to 2 against yield means the structure could carry half again its design load before yielding. Modern codes frame this as limit states — strength, serviceability, fatigue — each with partial factors. The margin is not padding; it is the honest price of uncertainty.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: "Stress, strain and Hooke's law",
        latex: '\\sigma = \\frac{F}{A}, \\qquad \\varepsilon = \\frac{\\Delta L}{L}, \\qquad \\sigma = E\\,\\varepsilon',
        meaning: 'Force over area, stretch over length, and the linear link between them through elastic modulus E.',
      },
      {
        kind: 'formula',
        name: 'Safety factor',
        latex: 'n = \\frac{\\sigma_{failure}}{\\sigma_{working}}',
        meaning: 'How many times the working stress the material can take before failing — the engineered margin for uncertainty.',
      },
      {
        kind: 'formula',
        name: 'Euler buckling load',
        latex: 'P_{cr} = \\frac{\\pi^{2} E I}{(KL)^{2}}',
        meaning: 'Critical load for a slender column, falling with the square of effective length KL — length, not strength, governs.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: whether a steel hanger carrying 300 kN in tension on a 1200 mm² cross-section meets a required safety factor of 1.5 against a 350 MPa yield strength.',
          'Recall the governing idea: working stress is load divided by area, and the safety factor is yield stress divided by that working stress.',
          'Apply: σ = 300,000 N / 1200 mm² = 250 MPa, so n = 350/250 = 1.4 — short of 1.5. The area needed is 300,000 / (350/1.5) ≈ 1286 mm².',
          'State the result: the hanger fails the check at n = 1.4; enlarging the section to about 1300 mm² restores the margin, adding under a tenth to weight and cost.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Suspension and cable-stayed bridges trading deck weight for pure tension in steel cables',
          'Arch bridges and masonry domes keeping their material in beloved compression',
          'Trusses in bridges, cranes and roofs, triangulating every member into pure push or pull',
          'Earthquake-engineered towers designed to yield in chosen places and still stand',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Compression is where confidence dies: members sized by crushing strength still buckle at a fraction of it. Live loads are not averages — a bridge rated for crowds must actually carry crowds. And a safety factor is not a licence to exceed design load by forty percent, because uncertainty in loads, workmanship and deterioration was already inside the margin you would be spending.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Dead load', def: 'The structure\u2019s own permanent weight, present on day one and forever.' },
          { term: 'Live load', def: 'Occupancy loads — traffic, people, snow — that move and vary.' },
          { term: 'Stress', def: 'Internal force per unit area, in pascals or N/mm².' },
          { term: 'Strain', def: 'Deformation as a fraction of original size — dimensionless.' },
          { term: 'Yield strength', def: 'The stress where a material stops springing back and starts deforming permanently.' },
          { term: 'Buckling', def: 'Sudden sideways collapse of a slender compression member below its crush strength.' },
          { term: 'Safety factor', def: 'Capacity divided by demand — the engineered margin for uncertainty.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: "A beam's bending stress is reduced most effectively by:",
            options: [
              'doubling the steel grade',
              "increasing the beam's depth",
              'painting it against corrosion',
              'adding more live load to seat it',
            ],
            answer: 1,
            explain: 'Depth moves material away from the neutral axis, growing the second moment of area far faster than material added near it.',
          },
          {
            q: 'A slender column loaded in compression usually fails by:',
            options: [
              'crushing of the material',
              'buckling sideways below the crush stress',
              'melting under friction',
              'cracking in tension',
            ],
            answer: 1,
            explain: 'Buckling is a stability failure governed by slenderness; it arrives before the material itself gives up.',
          },
          {
            q: 'A safety factor of 2 against yield means:',
            options: [
              'the design life is two years',
              'the material could carry roughly twice the working stress before yielding',
              'loads may be doubled every day',
              'two engineers checked the arithmetic',
            ],
            answer: 1,
            explain: 'It is a capacity-to-demand ratio — margin held in reserve for loads and flaws nobody measured.',
          },
          {
            q: 'The main cables of a suspension bridge work primarily in:',
            options: ['compression', 'bending', 'tension', 'torsion'],
            answer: 2,
            explain: 'Steel pulls superbly, so the form hands the canyon-spanning forces to cables in pure tension.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Static equilibrium — forces and moments that balance — is the only prerequisite. Follow with material behaviour beyond yield, the design codes that package these margins into rules, and structural dynamics: how bridges answer wind, earthquakes and marching feet.',
        tone: 'path',
      },
    ],
  },
]
