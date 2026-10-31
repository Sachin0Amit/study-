/**
 * Knowledge Universe — Naval Architecture & Marine Engineering — Chapter 03: Ship Structures
 * 1 lesson · ~1,235 words
 * field: Naval Architecture
 * legacy sources: x51-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Ship Structures]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 eng-naval-ship-structures — Ship Structures: Hull Girders, Framing and Fatigue
 */
import type { KnowledgeTopic } from '../../types'

export const navalArchitectureCh03: KnowledgeTopic[] = [
  {
    id: 'eng-naval-ship-structures',
    title: 'Ship Structures: Hull Girders, Framing and Fatigue',
    domain: 'Engineering',
    field: 'Naval Architecture',
    branch: 'Ship Structures',
    tier: 'core' as const,
    concepts: [
      'Still-water versus wave bending moments',
      'Section modulus: the number that sizes the ship',
      'Longitudinal, transverse and combined framing',
      'Steel grades, corrosion margins and coatings',
      'Fatigue: 100 million cycles per lifetime',
      'Brittle fracture: the Liberty ship lessons',
      'Classification societies and structural rules',
    ],
    words: 1235,
    readMins: 6,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book explained why a ship floats and how the metacentric height keeps it upright; this lesson explains how it survives. A ship at sea is a beam resting on a foundation that will not hold still: every wave re-shapes the buoyancy distribution, and every one of tens of millions of wave encounters flexes the hull. Naval architecture answers with a structure designed almost entirely by the mathematics of bending — and by a century of hard lessons about steel in the cold North Atlantic.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Ships are the largest moving structures humans build, and they are bought by the tonne: the steel in the hull is a huge share of the cost, and every unnecessary millimetre of plate is paid for over thirty years of fuel. Structural naval architecture is therefore a knife-edge discipline — strong enough to survive the worst wave the ocean offers, light enough to carry paying cargo.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The governing load is longitudinal bending. In still water the ship bends gently under the distribution of cargo, fuel and buoyancy — the still-water bending moment. In waves the bending alternates: with a crest amidships the middle is supported and the ends droop (hogging); with crests at the ends the middle hangs and sags (sagging). The extreme fiber stresses decide the hull girder\u2019s section modulus — the geometry-derived number that the rules require the midship section to meet. Deck plating, sheer strake, bottom shell and longitudinal bulkhead plating contribute most of the modulus, which is why the heaviest steel concentrates exactly there, and why cutting a hatch opening in the strength deck demands compensated, rounded-corner structures.',
      },
      {
        kind: 'para',
        text: 'How the frames run matters as much as how thick they are. Transverse framing — ribs across the hull at close spacing — suits smaller ships whose dominant loads are local water pressure. Longitudinal framing — many closely spaced fore-and-aft members under the deck and along the bottom — suits tankers and bulk carriers, because the hog-sag bending is carried by the longitudinals directly; the system owes its popularity to the oil tankers of the 1880s, where it cut steel weight dramatically. Most large ships today use a combined system: longitudinals for strength, deeper transverse webs to hold them in shape, and transverse floors at the bottom.',
      },
      {
        kind: 'para',
        text: 'Materials follow the load. Mild steel carries most of the hull; higher-tensile steel goes into the high-stress upper deck and bottom regions of big tankers and container ships, trading strength for thinner (and more fatigue-prone) plating. Rules add corrosion margins — extra millimetres on surfaces the coating will eventually lose — and owners extend life with epoxy coatings, sacrificial anodes and impressed-current protection. Aluminum buys weight in fast ferries at three times the cost and a welding problem; glass-reinforced plastic dominates small craft because it never rusts and shapes freely.',
      },
      {
        kind: 'para',
        text: 'Two failure modes dominate the safety record. Fatigue: a ship meets hundreds of millions of stress cycles in a life, so welded details that stress concentrates — hatch corners, bracket toes — must be fatigue-rated, and crack-arresting strakes are built into hulls to stop a running crack. Brittle fracture: steel that is tough at room temperature can shatter like glass when cold and notched. The Liberty ships of the Second World War taught this at scale — more than 1,500 built, some 1,500 fracture incidents reported, a few ships breaking clean in two in winter seas. The response rewrote metallurgy: notch-tough grades, grade selection by expected minimum service temperature, and design rules against sharp notches — knowledge now consolidated in the classification societies\u2019 common structural rules.',
      },
      {
        kind: 'para',
        text: 'That rulebook is the industry\u2019s immune system. Classification societies — Lloyd\u2019s Register descends from the 1760s coffee-house surveys, joined by DNV, ABS, Bureau Veritas, IRS and the rest — publish structural rules that encode this whole history, survey ships from keel-laying to scrapping, and issue the class certificate without which no insurer or port state will touch a vessel. The International Association of Classification Societies harmonizes the biggest classes\u2019 rules so a bulk carrier built anywhere meets one structural standard.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Question: why does loading a bulk carrier\u2019s iron ore in alternate holds threaten the hull?',
          'Recall the beam picture: bending moment follows the mismatch between weight (cargo) and buoyancy distribution along the length.',
          'Apply: ore in alternate holds concentrates weight at intervals — the still-water bending moment can exceed the design sagging or hogging moment even though displacement is unchanged.',
          'Conclude: loading plans sequence the holds to keep the bending moment inside the hull girder\u2019s section-modulus margin — the same physics, exercised by the chief officer instead of the yard.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Yard practice: plate thickness, frame spacing and steel grade selection come straight from the rules — a structure office works in the rulebook\u2019s units.',
        'Survey and repair: class surveys check coatings, cracking in known fatigue hot-spots and wastage against the corrosion margin.',
        'Casualty analysis: modern break-ups almost always trace to corrosion-sapped structure, misloading, or notch-tough steel used below its temperature range.',
        'New materials: LNG containment systems and composite superstructures push the same girder-and-fatigue mathematics into new materials.',
        'Insurance economics: the class certificate and the load line are the paper version of the structural margin this lesson describes.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, treating the corrosion margin as waste to be built light: ships live their final years on that margin, and the casualty record punishes yards that shaved it. Second, assuming transverse framing is "the old weak way" — it is the right answer to local-pressure-dominated loadings on smaller hulls. Third, reading the Liberty ship story as a steel scandal: the fractures taught the entire world about notch toughness, and modern grades are their legacy. Fourth, forgetting that fatigue lives at weld details — the plate is fine; the corner is the problem. Fifth, treating classification as paperwork: the rules are compressed fracture statistics.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'section modulus', def: 'The hull cross-section\u2019s bending resistance figure — the number the rules size the midship section to meet.' },
        { term: 'hogging / sagging', def: 'Alternating wave bending: crest amidships droops the ends; crests at the ends bend the middle down.' },
        { term: 'longitudinal framing', def: 'Fore-and-aft members carrying the hull-girder bending — the tanker tradition.' },
        { term: 'scantlings', def: 'The rulebook\u2019s set of plate thicknesses and frame dimensions.' },
        { term: 'notch toughness', def: 'Steel\u2019s resistance to brittle crack propagation at low temperature — the Liberty-ship lesson.' },
        { term: 'classification society', def: 'The survey-and-rules body whose certificate a ship cannot trade without.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A ship rides a wave with a crest amidships. The deck plating amidships is in…',
          options: ['compression — the hull hogs', 'tension — the hull sags', 'shear only', 'no stress'],
          answer: 1,
          explain: 'Crest amidships sags the middle: the deck goes into tension and the bottom into compression.',
        },
        {
          q: 'Longitudinal framing became dominant in tankers and bulk carriers because…',
          options: ['it resists local water pressure best', 'it carries the hull-girder bending directly with less steel', 'it is easier to weld', 'rules require it'],
          answer: 1,
          explain: 'The hog-sag bending is the governing load on large ships, and longitudinals take it directly.',
        },
        {
          q: 'The Liberty ships\u2019 structural legacy is the rulebook\u2019s emphasis on…',
          options: ['aluminum superstructures', 'notch-tough steel and notch-free design', 'transverse framing', 'grillage decks'],
          answer: 1,
          explain: 'Cold-water brittle fracture at weld notches taught the modern notch-toughness requirements.',
        },
        {
          q: 'A classification society\u2019s certificate exists to prove the ship…',
          options: ['has the fastest speed', 'meets structural and safety rules verified by survey', 'is registered in the right country', 'carries insurance'],
          answer: 1,
          explain: 'Class is the independent survey-and-rules attestation insurers, flag states and ports rely on.',
        },
      ] },
    ],
  },
]
