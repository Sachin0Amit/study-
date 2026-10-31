/**
 * Knowledge Universe — Structural & Seismic Engineering — Chapter 02: Ground & Foundations
 * 1 lesson · ~1,765 words
 * field: Civil Engineering
 * legacy sources: x67-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Geotechnical Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 civ-foundations-geotechnical — Foundations and Ground Engineering: What Every Structure Stands On
 */
import type { KnowledgeTopic } from '../../types'

export const structuralSeismicEngineeringCh02: KnowledgeTopic[] = [
  {
    id: 'civ-foundations-geotechnical',
    title: 'Foundations and Ground Engineering: What Every Structure Stands On',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Geotechnical Engineering',
    tier: 'intermediate' as const,
    concepts: [
      'Soil is a three-phase material: solids, water, air',
      'Terzaghi’s effective stress σ′ = σ − u runs everything',
      'Consolidation: clay settles slowly, sand immediately',
      'Bearing capacity and the two failure modes',
      'Shallow footings versus deep piles',
      'Site investigation: the SPT and the soil profile',
      'Liquefaction and seismic ground improvement',
    ],
    words: 1765,
    readMins: 9,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'The structural chapters of this book analysed beams, columns and frames — idealized members with known properties. Everything they carry eventually reaches the ground, and the ground is the one structural material the engineer did not choose, cannot order to specification, and can only characterize by digging. Geotechnical engineering is the discipline that reads the ground, and its master variable was published by Karl Terzaghi — the field’s founder — in 1925: effective stress, the stress carried by the soil skeleton after pore-water pressure is subtracted. The previous chapter’s seismic design borrowed soil-amplification facts to explain site effects; this chapter builds the ground itself, from classification to bearing capacity to the liquefaction phenomenon that turns sand into a fluid in seconds.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'More structural failures trace to the ground than to the structure: differential settlement cracks buildings long before any yield line forms, and the deadliest seismic killers — liquefaction, lateral spreading, site amplification — are soil behaviours, not building behaviours. Every tall tower, bridge pier and levee spends a meaningful share of its budget on what the ground requires, and the Leaning Tower of Pisa remains the world’s most famous lesson in what happens when that share is underweighted.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The three-phase material. Soil is a skeleton of mineral particles with water and air in the voids between — which makes it unlike steel or concrete in a fundamental way: its behaviour depends on what fills the pores. The phase relationships give the language: void ratio (void volume over solids volume), degree of saturation, water content (weigh a wet sample, oven-dry it, weigh again). Clays are plastic because their flat, charged mineral plates (kaolinite, montmorillonite) interact electrochemically with adsorbed water — the Atterberg limits (liquid limit, plastic limit) quantify where a soil stops flowing and starts behaving plastically, and the plasticity index becomes the classifier’s first fork: gravels and sands (cohesionless) versus silts and clays (cohesive). Sand crushes and rearranges; clay creeps, swells and holds water for years. The same building behaves differently on each.',
      },
      {
        kind: 'para',
        text: 'Effective stress. Terzaghi’s insight, σ′ = σ − u — total stress minus pore-water pressure — explains half of geotechnical phenomenology in one line. Load carried by the water does nothing to the skeleton; load carried by the particle contacts does everything: strength and stiffness follow effective stress. It is why a drained sand is strong, why a saturated loose sand under cyclic shaking can momentarily lose all effective stress and flow like a liquid (liquefaction — the pore pressure rises until u approaches σ), and why pumping groundwater from a delta city, which drains pore pressure into the skeleton, consolidates the clay beneath — Mexico City, Jakarta and Bangkok are all sinking for this exact reason. The principle converts a soil problem into a hydraulics problem, and it is why water is the villain of every geotechnical report.',
      },
      {
        kind: 'para',
        text: 'Settlement and consolidation. Foundations rarely fail by bearing; they settle. Immediate (elastic) settlement happens as loads compress the soil skeleton at once — dominant in sands and gravels, drained almost instantly. Consolidation is clay’s slow story: loading raises pore pressure in the low-permeability clay, and the excess pressure drains out over months to decades while the skeleton compresses — the oedometer test measures the coefficient of consolidation, and Terzaghi’s one-dimensional consolidation theory predicts the time-settlement curve. Differential settlement — one corner dropping more than another — is the cracking mechanism: a uniform 50 millimetres is absorbed; 50 millimetres across a 20-metre façade is a diagnosis. The design levers: spread loads wider (rafts), preload and surcharge, wick drains to speed consolidation, or go deep.',
      },
      {
        kind: 'para',
        text: 'Bearing capacity. The classic check: can the ground under a footing resist shear failure? Terzaghi’s 1943 bearing-capacity equation — the archetype of a whole family — sums three terms: a width term (wider footings mobilize more ground), a depth term (surcharge above the base helps), and a cohesion term, each scaled by bearing-capacity factors that explode as friction angle rises. Two failure modes bound reality: general shear (dense soils — a well-defined wedge heaves the ground surface) and local/punching shear (loose soils — the footing just pushes down with no dramatic wedge). The safety factor applied to bearing capacity is large — around three — because soil parameters are uncertain in a way steel properties never are: the same site can vary across a single building footprint.',
      },
      {
        kind: 'para',
        text: 'Shallow or deep. Shallow foundations (spread footings under columns, strip footings under walls, rafts spanning the whole footprint) transfer load near the surface and are the default when competent soil sits within a few metres. Deep foundations go below the bad ground: driven or bored piles transfer load either to a firm stratum at depth (end-bearing) or along the shaft–soil interface by friction — and group behaviour matters, because closely spaced piles overlap their pressure bulbs and the group can settle more than the single-pile sum predicts. Pisa is the permanent case study: its foundation sits on soft clayey marine deposits, the south side has carried slightly more stress for eight centuries, and the tower’s famous tilt is differential settlement — the 1990s intervention excavated soil on the north side to reduce the lean by about 45 centimetres while keeping the tourist-attracting tilt.',
      },
      {
        kind: 'para',
        text: 'Reading the ground. You cannot design what you have not characterized. Site investigation begins with boreholes and the standard penetration test (SPT) — drop a 63.5-kilogram hammer 760 millimetres, count the blows to drive a sampler 300 millimetres; the N-value correlates with density, friction angle and, critically in seismic zones, liquefaction resistance — plus cone penetration tests (CPT) for continuous profiles, lab testing of recovered samples, and groundwater observation. The seismic design chapter’s site classes are built from this investigation: the average shear-wave velocity in the top 30 metres (Vs30) sorts sites A through F, and soft-soil sites get the long-period spectra that destroyed distant mid-rises in Mexico City. The boring log is the least glamorous document in engineering and the one that decides the foundation budget.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Question: a 2-metre square spread footing carries 1,200 kN on a sand with friction angle 35 degrees, unit weight 18 kN/m³, bearing-capacity factor Nq ≈ 33, Nγ ≈ 34, base at 1.5 m. Is the ground adequate?',
          'Compute the terms (ignore cohesion in sand; use Terzaghi’s form): net bearing capacity ≈ q·Nq·(correction) + 0.5·γ·B·Nγ. Roughly: (18×1.5)×33 ≈ 891 kPa plus 0.5×18×2×34 ≈ 612 kPa — order 1,500 kPa gross, before shape and depth corrections.',
          'Compare demand: 1,200 kN over 4 m² = 300 kPa. Against an allowable capacity of roughly 1,500/3 ≈ 500 kPa, the footing passes on bearing — margin is comfortable.',
          'Check settlement — the real limiter on sand: estimate using elastic or SPT-based methods; if predicted settlement exceeds the 25-millimetre typical limit, widen the footing (spreads the pressure bulb) or deepen it.',
          'Lesson: bearing capacity rarely governs on sand — serviceability (settlement) does. The worked check that matters is often the second one.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Seismic practice: liquefaction screening (SPT/CPT-based trigger curves), stone columns and compaction grouting to densify loose sands, and the Niigata 1964 images — apartment blocks tipped intact as their underlying sand lost strength — remain the field’s icon.',
        'Anchorage 1964: the Turnagain Heights slide — sensitive clay losing strength under cyclic loading — took an entire residential bench into the sea; landslide and lateral-spreading hazard mapping now precedes zoning in seismically active coasts.',
        'Deep foundations: skyscrapers in soft basins (Shanghai, Mexico City) stand on basements and piles tens of metres deep; the deepest bored piles reach rock under Kuala Lumpur’s Petronas Towers.',
        'Ground improvement: wick drains and preloading for port expansions, dynamic compaction for reclaimed land, jet grouting under existing structures — the toolkit that lets weak ground host modern infrastructure.',
        'Water control: dewatering, cut-off walls and the effective-stress logic behind them keep excavations dry and levees (and their Dutch ancestors) standing.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, treating soil as a weak concrete: it is a particulate, water-filled, history-dependent material — parameters vary across a site and tests sample a pitiful volume fraction. Second, ignoring groundwater: most geotechnical surprises are water surprises — buoyancy on basements, softening on wet clay, pore pressure under cyclic load. Third, checking bearing and forgetting settlement: most "failures" are serviceability cracks, not bearing blowouts. Fourth, extrapolating one boring log across a site: differential settlement begins with differential information. Fifth, trusting loose sand under seismic load because static design passed — liquefaction is a dynamic effective-stress event the static check never sees, which is exactly why the seismic chapter and this one are companions, not alternatives.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'effective stress (σ′)', def: 'Total stress minus pore-water pressure — the skeleton stress that controls soil strength and stiffness (Terzaghi 1925).' },
        { term: 'consolidation', def: 'The slow, drainage-controlled compression of saturated clay as excess pore pressure dissipates — settlement on a timescale of months to decades.' },
        { term: 'bearing capacity', def: 'The ground pressure at which soil beneath a foundation fails in shear; checked with a safety factor around three against uncertain parameters.' },
        { term: 'pile', def: 'A deep foundation element transferring load to depth by end-bearing on firm strata or by friction along the shaft.' },
        { term: 'standard penetration test (SPT)', def: 'The standard borehole test counting hammer blows to drive a sampler — the field’s cheapest strength and liquefaction indicator.' },
        { term: 'liquefaction', def: 'Cyclic loading (usually seismic) raising pore pressure until saturated loose sand loses effective stress and behaves as a heavy fluid.' },
        { term: 'Vs30', def: 'Average shear-wave velocity in the top 30 metres — the site-class parameter that sets the seismic design spectrum.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Terzaghi’s effective stress is…',
          options: ['total stress plus pore pressure', 'total stress minus pore-water pressure', 'the stress in the water alone', 'unit weight times depth always'],
          answer: 1,
          explain: 'σ′ = σ − u: only the skeleton carries strength-giving stress — water pressure carries load that does nothing to the particles.',
        },
        {
          q: 'Clay settles more slowly than sand under load mainly because clay…',
          options: ['is lighter', 'has much lower permeability, so excess pore pressure drains out over months to years', 'has no particles', 'cannot bear any load'],
          answer: 1,
          explain: 'Consolidation is a drainage problem: low-permeability clay delays pore-pressure dissipation, and settlement follows the drainage clock.',
        },
        {
          q: 'Liquefaction occurs when…',
          options: ['dry sand is blown by wind', 'cyclic shaking raises pore pressure in saturated loose sand until effective stress vanishes', 'clay is over-consolidated', 'the water table drops'],
          answer: 1,
          explain: 'Shaking rearranges the loose skeleton, water pressure spikes, the skeleton loses contact — the sand flows. Niigata 1964 is the icon.',
        },
        {
          q: 'On a competent sand, the check that usually governs footing design is…',
          options: ['bearing capacity', 'settlement (serviceability)', 'soil chemistry', 'pile group efficiency'],
          answer: 1,
          explain: 'Bearing margins are comfortable; the 25-millimetre settlement limit usually sizes the footing — serviceability, not failure.',
        },
      ] },
    ],
  },
]
