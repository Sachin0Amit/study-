/**
 * Knowledge Universe — Spanish — Chapter 01: Verb Semantics
 * 1 lesson · ~1,047 words
 * field: Spanish
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Lessons (snapshot at reorganization):
 *   01.1 lang-spanish-ser-estar — Spanish ser vs estar: Two Ways to Be
 */
import type { KnowledgeTopic } from '../../types'

export const spanishCh01: KnowledgeTopic[] = [
  {
    id: 'lang-spanish-ser-estar',
    title: 'Spanish ser vs estar: Two Ways to Be',
    domain: 'Languages & World Literature',
    field: 'Spanish',
    branch: 'Verb Semantics',
    tier: 'core',
    concepts: [
      'Two Latin roots: esse and stare',
      'Ser for identity and classification',
      'Estar for state, condition and location',
      'Adjectives that change meaning',
      'Progressive constructions',
      'Why “permanent versus temporary” fails',
      'Resultative estar with past participles',
    ],
    words: 1047,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Spanish has two verbs for English “to be”, and choosing between them is the most frequent decision a learner makes. Ser, from Latin esse, frames what something is — identity, origin, class, definitional traits. Estar, from Latin stare, “to stand”, frames how something is right now — states, conditions, locations and results. The schoolroom shortcut “permanent versus temporary” works often but fails on famous counterexamples, so learners graduate to the deeper rule: essence takes ser, state takes estar.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every introduction, every description of a place, every “how are you” routes through this choice — it is unskippable in real conversation. It is also a window into how languages carve meaning: one concept in English is two concepts in Spanish, and mastering the split rewires how you think about predication itself.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The split descends from Latin, where esse meant “to be” essentially and stare meant “to stand”. Most Iberian Romance languages kept the pair — Spanish ser/estar, Portuguese ser/estar, Catalan ésser/estar — while French collapsed to être. The etymology is a working mnemonic: estar still smells of standing somewhere, in some condition.',
      },
      {
        kind: 'para',
        text: 'Ser answers “what or who is it?”: professions (es médica), origin (es de Lima), nationality, material (es de madera), possession, clock time (son las tres), and definitional judgements — unmodified attributes the speaker treats as the thing’s identity, like la nieve es blanca, snow is white.',
      },
      {
        kind: 'para',
        text: 'Estar answers “how or where is it?”: moods and health (está cansada, estoy enfermo), running states of machines and weather (está nublado), and all physical location — el museo está en Madrid, even for permanent geography. Any adjective predicated with estar invites the reading “currently, as things stand”.',
      },
      {
        kind: 'para',
        text: 'The verb re-scopes the adjective. Es listo means clever, a trait; está listo means ready, a state. Es aburrido describes a boring person; está aburrido, a bored one. Es rico can mean rich; está rico means tasty right now; es verde is green by nature while está verde is unripe. The pairs where both verbs occur are exactly the ones to memorise first.',
      },
      {
        kind: 'para',
        text: 'Ongoing actions take estar plus gerund: está lloviendo, it is raining; estoy cocinando, I am cooking. Ser never enters the progressive. The present participle describes a state in progress, which is estar’s territory by definition.',
      },
      {
        kind: 'para',
        text: 'The familiar rule fails in both directions: “dead” is permanent, yet Spanish says está muerto, reading death as the result of a change; “young” is temporary, yet es joven treats it as a classificatory trait. Linguists prefer individual-level predicates — stable kinds, ser — versus stage-level predicates, temporary stages, estar; that framing covers the exceptions.',
      },
      {
        kind: 'para',
        text: 'Estar plus a past participle presents a state as the outcome of a change: la puerta está cerrada, the door stands closed; la sopa está fría, the soup has gone cold. Contrast the event reading — alguien ha cerrado la puerta, someone has closed the door — with the aftermath reading estar supplies.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: fill the two gaps — “María ___ en la oficina” and “María ___ arquitecta” — and justify the choices.',
        'Recall the governing ideas: physical location and current states take estar; identity and classification take ser.',
        'Apply it: location gives “María está en la oficina”; profession gives “María es arquitecta”. Extend the pattern — “está muy ocupada hoy”, today’s condition, versus “es trabajadora”, a stable trait.',
        'State the result: the sentences read naturally, and the pattern generalises — where she is and how she feels right now take estar, who she is takes ser.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Travel Spanish: introductions, describing places and asking where things are all route through the pair.',
        'Professional registers: product states — la conexión está estable — versus categories — es una conexión de fibra.',
        'Healthcare interpreting: estar for patient condition (está estable, está consciente), where the distinction is safety-critical.',
        'Literary stylistics: writers exploit the flip — es/está sola — to characterise in a single word.',
        'Heritage learners: systematising an instinct they already have from home exposure.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The permanent–temporary mnemonic is the trap: it fails on está muerto and es joven, and learners who trust it too long fossilise errors. The second trap is adjective meaning — assuming listo, aburrido or rico mean the same with both verbs. Third, English habits leak in: the verb choice carries the meaning, and no fluent-sounding pronunciation rescues es en Madrid.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'copula', def: 'A linking verb connecting subject to predicate; Spanish has two.' },
        { term: 'individual-level predicate', def: 'A predication about stable, characteristic properties, expressed with ser.' },
        { term: 'stage-level predicate', def: 'A predication about a temporary stage or condition, expressed with estar.' },
        { term: 'resultative construction', def: 'Estar plus past participle, presenting a state as the outcome of change.' },
        { term: 'progressive construction', def: 'Estar plus gerund for actions in progress.' },
        { term: 'heritage learner', def: 'A speaker with childhood family exposure to the language, schooled in another.' },
        { term: 'fossilisation', def: 'Errors stabilised through years of uncorrected use.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: '“El café está frío” tells the listener most naturally that…',
          options: ['cold coffee is a defining property of that café', 'the coffee has gone cold — it is cold now', 'the café is in a cold town', 'the coffee is never served hot'],
          answer: 1,
          explain: 'Estar frames a current condition: the coffee, as things stand, is cold — typically as the result of cooling.',
        },
        {
          q: 'Which sentence means “my sister is clever” as a trait?',
          options: ['Mi hermana está lista.', 'Mi hermana es lista.', 'Mi hermana está lista ahora.', 'Mi hermana es estar lista.'],
          answer: 1,
          explain: 'Ser plus listo means clever by nature; estar plus listo means ready at the moment.',
        },
        {
          q: 'The physical location of a building is expressed with…',
          options: ['ser always', 'estar', 'either verb freely', 'ser, but only for permanent buildings'],
          answer: 1,
          explain: 'Location of people and things — permanent or not — takes estar: el banco está en la plaza.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: the present tense of both verbs. This is core-tier Spanish with immediate daily payoff. Follow with the past-tense pair preterite versus imperfect, which poses the same “classificatory versus in-progress” logic in time rather than in being.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Ser = essence: identity, origin, class, inherent traits.',
        'Estar = state: condition, mood, health, location, result of change.',
        'Adjectives flip meaning with the verb: es listo (clever) versus está listo (ready).',
        'Progressives and locations always take estar.',
        '“Permanent versus temporary” is a rough heuristic; essence versus state is the real rule.',
      ] },
    ],
  },
]
