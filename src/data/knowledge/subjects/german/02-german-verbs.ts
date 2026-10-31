/**
 * Knowledge Universe — German — Chapter 02: German Verbs
 * 1 lesson · ~1,244 words
 * field: German
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [German Verbs]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 lang-german-verbs — German Verbs: Stem Changes, Separable Prefixes and the Perfect
 */
import type { KnowledgeTopic } from '../../types'

export const germanCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'lang-german-verbs',
    title: 'German Verbs: Stem Changes, Separable Prefixes and the Perfect',
    domain: 'Languages & World Literature',
    field: 'German',
    branch: 'German Verbs',
    tier: 'core',
    concepts: [
      'Regular endings on one stem: -e, -st, -t, -en, -t, -en',
      'Stem-vowel changes: du gibst, du fährst',
      'Separable prefixes and the sentence bracket',
      'Inseparable prefixes and the no-ge- participle',
      'Modal verbs with a bare infinitive at the end',
      'Perfect tense: haben/sein + Partizip II',
      'Präteritum for the small verbs',
    ],
    words: 1242,
    readMins: 6,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson covered German’s cases and cognates; this lesson takes the verb machinery, which is where German earns its reputation. The system is strict — one stem, six endings, a bracketed sentence — but it is also deeply regular: learn the pattern for one verb and you own thousands. The exceptions concentrate in a small set of high-frequency verbs that repay memorising many times over.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'German packs meaning into prefixes — aufstehen, verstehen, bekommen are three different verbs wearing the same stem — so prefix behaviour is the key to vocabulary growth. And the perfect-tense word order (auxiliary second, participle last) is the single most recognisable signature of German syntax.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Regular verbs conjugate by adding six endings to the stem (infinitive minus -en): ich lerne, du lernst, er lernt, wir lernen, ihr lernt, sie lernen. Only the du and er/sie/es forms differ from the stem-plus-ending ideal — where the stem ends in -t or -d or a consonant cluster, an extra -e- slides in to keep it pronounceable: du arbeitest, er arbeitet. A small set of strong verbs changes the stem vowel in the du and er forms: geben → du gibst, er gibt; fahren → du fährst, er fährt; nehmen → du nimmst, er nimmt; lesen → du liest, er liest. English keeps a fossil of this in sing/sang/sung — German just kept the living system.',
      },
      {
        kind: 'para',
        text: 'The sentence bracket is German’s signature move. In a main clause the conjugated verb claims second position (V2), and any unhooks a separable prefix, which flies to the sentence’s end: aufstehen → Ich stehe um sechs Uhr auf, “I get up at six” — the bracket closes with auf. The same bracket holds infinitives (Ich kann heute nicht kommen) and participles. Subordinate clauses pull the whole verb to the end: …, weil ich früh aufstehe. Separable prefixes are a common, stressed set — ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück- — and each re-verbs the stem: anrufen (call), einkaufen (shop), mitnehmen (bring along).',
      },
      {
        kind: 'para',
        text: 'Inseparable prefixes behave in mirror image: be-, ge-, er-, ver-, zer-, ent-, emp-, miss- stay welded to the verb, carry no stress, and — crucially — forbid the ge- of the participle: verstehen → verstanden, besuchen → besucht, bekommen → bekommen. Spotting the prefix class therefore tells you the participle shape before you have conjugated anything. A third group, verbs ending in -ieren (studieren, telefonieren), also drops the ge-: studiert. This is the short list of German morphology that rewards fifteen minutes of memorising with lifetime returns.',
      },
      {
        kind: 'para',
        text: 'Modal verbs — können, müssen, dürfen, sollen, wollen, mögen(möchten) — conjugate irregularly in the singular (ich kann, du kannst, er kann with no ending on er) and, when they govern another verb, push that bare infinitive to the bracket’s end: Ich muss heute arbeiten, “I must work today”. They are also the exception to spoken-German perfect habits: the modals, haben, sein and es gibt prefer the simple Präteritum even in speech — ich konnte, ich hatte, ich war — because their perfect forms would need a double infinitive (ich habe kommen müssen), which exists but is heavy. So: small verbs take the old simple past; everything else takes the perfect.',
      },
      {
        kind: 'para',
        text: 'The everyday past is the Perfekt: haben or sein plus the Partizip II in final position. Weak verbs build ge- + stem + -t (lernen → gelernt); strong verbs build ge- + (possibly changed) stem + -en (sprechen → gesprochen); verbs with an inseparable prefix or -ieren drop the ge- as above. Auxiliary choice follows meaning: haben for transitive and most verbs; sein for movement from A to B and change of state — gehen, fahren, fliegen, aufstehen, werden, bleiben, sein itself. Ich habe gegessen, but ich bin gegangen. The participle agrees with nothing, which is a small mercy; the auxiliary does all the agreeing, and the perfect covers most conversational past-tense needs.',
      },
      {
        kind: 'formula',
        name: 'Partizip II patterns',
        latex: '\\text{weak: } ge + \\text{stem} + t \\quad | \\quad \\text{strong: } ge + \\text{stem}^{\\pm\\text{vowel}} + en \\quad | \\quad \\text{be-/ver-/er-/ent-/…-verbs and -ieren: no } ge-',
        meaning: 'Three participle shapes cover the lexicon; the prefix class of the verb decides whether the ge- appears at all.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: say “Yesterday I went shopping (and bought bread)” using einkaufen and kaufen.',
          'Recall the machinery: einkaufen is separable → bracket; kaufen is weak → Partizip II gekauft; movement/shopping takes sein in the perfect by convention with einkaufen.',
          'Apply: Ich bin gestern eingekauft (prefix at the end closes the bracket); for the bread with haben: Ich habe Brot gekauft.',
          'State the result: two past clauses, one bracket, one ge- participle suppressed where the prefix forbids it — in one sentence pair, the whole verb system in miniature.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Everyday conversation, where the perfect + modal + bracket structure is the default grammar of speech.',
        'Proficiency-exam writing sections, which score exactly these: ending accuracy, prefix behaviour, participle formation.',
        'Vocabulary tripling: one stem plus ten prefixes is eleven verbs — ver-, be-, ent- families grow fast.',
        'Reading signs and announcements: geschlossen, verboten, abgefahren — participles are public furniture.',
        'Workplace German: meeting verbs (besprechen, vorbereiten, einladen) are inseparable/separable showcases.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Sending the separable prefix into the bracket and then forgetting to close it. Adding ge- to inseparable verbs — it is verstanden, never geverstanden. Using haben where movement demands sein. Putting the bare infinitive after a modal anywhere but the bracket’s end. And using the Perfekt for haben/sein/modals in speech — ich war, ich hatte, ich konnte are what Germans actually say.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'stem vowel change', def: 'Strong-verb vowel shift in the du/er forms (geben → du gibst, fahren → du fährst).' },
        { term: 'separable prefix', def: 'A stressed prefix (auf-, ein-, mit-, …) that detaches and closes the sentence bracket.' },
        { term: 'inseparable prefix', def: 'An unstressed prefix (be-, ge-, er-, ver-, zer-, ent-, emp-, miss-) welded to the verb; no ge- in the participle.' },
        { term: 'sentence bracket', def: 'The frame formed by the conjugated verb in second position and its dependent (prefix, infinitive, participle) at the end.' },
        { term: 'modal verb', def: 'können, müssen, dürfen, sollen, wollen, mögen — conjugated irregularly, governing a bare infinitive at the end.' },
        { term: 'Partizip II', def: 'The perfect-tense participle: ge-…-t (weak), ge-…-en (strong), no ge- with inseparable prefixes and -ieren.' },
        { term: 'Präteritum', def: 'The simple past, reserved in speech for haben, sein and the modals.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The correct participle of verstehen is…',
          options: ['geverstanden', 'verstanden', 'verstehen', 'verstand'],
          answer: 1,
          explain: 'Inseparable prefixes forbid the ge-; the strong participle is verstanden.',
        },
        {
          q: 'Ich ______ morgen nach Berlin (fahren, perfect tense)…',
          options: ['habe gefahren', 'bin gefahren', 'fahre gefahren', 'bin gefahren worden'],
          answer: 1,
          explain: 'Fahren expresses movement, so the perfect auxiliary is sein: ich bin gefahren.',
        },
        {
          q: 'In “Ich muss heute früh aufstehen”, the bracket closes with…',
          options: ['muss', 'heute', 'früh', 'aufstehen'],
          answer: 3,
          explain: 'The modal holds position two; the governed bare infinitive (here with its separable prefix intact) sits at the end.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: the German foundations lesson for cases and the V2 rule it introduces. Follow with the French verb lesson for a sibling system that solves the past with two auxiliaries too, and the morphology lesson for the theory behind stems and affixes. Grounding texts: Wikibooks’ German grammar (verbs chapters) and the verb pages of any standard beginner German course.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'One stem, six endings; only du/er forms deviate, and strong verbs shift the vowel there.',
        'Separable prefixes fly to the sentence end and close the bracket; inseparables stay welded.',
        'Partizip II: ge-…-t (weak), ge-…-en (strong), no ge- with be-/ver-/er-/ent- and -ieren.',
        'Modals take bare infinitives at the end; in speech they, haben and sein prefer the Präteritum.',
        'Everyday past = haben (default) or sein (movement/state change) + participle in final position.',
      ] },
    ],
  },
]
