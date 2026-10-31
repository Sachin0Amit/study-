/**
 * Knowledge Universe — Literature — Chapter 01: The Great Tradition
 * 1 lesson · ~1,397 words
 * field: World Literature
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [The Great Tradition]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 lang-epic-tradition — From Gilgamesh to the Odyssey: The Birth of Literature
 */
import type { KnowledgeTopic } from '../../types'

export const literatureCh01: KnowledgeTopic[] = [
  {
    id: 'lang-epic-tradition',
    title: 'From Gilgamesh to the Odyssey: The Birth of Literature',
    domain: 'Languages & World Literature',
    field: 'World Literature',
    branch: 'The Great Tradition',
    tier: 'core',
    concepts: [
      'Literature before writing: the oral poet',
      'Gilgamesh: the first recorded epic',
      'The Homeric question and the formula',
      'Epic conventions: invocation, in medias res, epithet',
      'The hero: kleos, nostos and mortality',
      'What writing changed',
    ],
    words: 1397,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'The oldest story we have is about a king who could not accept death. Gilgamesh, carved on clay tablets in Mesopotamia four thousand years ago, already contains friendship, hubris, flood and grief; the Iliad and the Odyssey, sung in Greek around the eighth century BCE, still define what a hero is. Epic is where literature begins — and it did not begin as writing at all, but as performance, rhythm and trained memory. Understanding how these poems were made is understanding what a book was before books.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Epic is the root system of nearly everything you have read or watched: the hero\'s arc that Hollywood engineers, the invocation that opens Paradise Lost, the in medias res cold open of every prestige drama. It is also the first evidence of how humans stored culture before hard drives — in formula, metre and memory. To read Gilgamesh and Homer knowing how they were built is to watch humanity invent literature in real time.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Before writing, the poet was the storage medium. Epics lived in performance: a singer with an instrument, a toolkit of ready-made phrases, and an audience with expectations. Rhythm and repetition were engineering, not ornament — metrical patterns made thousands of lines memorable. Composition happened in delivery: the singer re-created the story each time from structural bones and stock phrases, never reproducing the same text twice, because there was no text. Literature begins inside this performance tradition, not outside it.',
      },
      {
        kind: 'para',
        text: 'The Epic of Gilgamesh reached its standard Babylonian version around 1200 BCE, from Sumerian poems up to a millennium older. Gilgamesh, king of Uruk — two-thirds god, one-third man — is tamed by the wild man Enkidu; together they slay the guardian of the Cedar Forest; the gods answer with Enkidu\'s death; and Gilgamesh, terrified, crosses the waters of death to ask the flood-survivor Utnapishtim how to escape dying. The answer is that he cannot. It is literature\'s first great meditation on mortality — and its flood story predates Noah\'s by centuries.',
      },
      {
        kind: 'para',
        text: 'Who was Homer, and how were the Iliad and Odyssey made? Milman Parry\'s 1930s fieldwork on South Slavic oral singers supplied the answer. The signature Homeric devices — “swift-footed Achilles”, “rosy-fingered Dawn” — are metrical spare parts, each shaped to fit a given slot in the dactylic hexameter line. The oral-formulaic theory, completed by Albert Lord\'s The Singer of Tales, showed the poems could be composed in performance without writing. The monumental versions we read were probably dictated in the new Greek alphabet: performance caught and frozen at a moment of transition.',
      },
      {
        kind: 'para',
        text: 'The genre announces itself with a fixed toolkit. The invocation — “Sing, O goddess, the anger of Achilles” — calls a Muse and states the theme. In medias res: the Iliad opens in the war\'s tenth year; the Odyssey begins with its hero trapped on Calypso\'s island while his son searches for him. The fixed epithet, the catalog of massed ships, the extended epic simile, the visible gods who intervene — all were listeners\' signposts and the singer\'s scaffolding, and literary epics from Virgil to Milton adopted them as homage.',
      },
      {
        kind: 'para',
        text: 'Two Greek words name the epics\' engines. Kleos, glory won in song, is what Achilles buys with a short life — the Iliad\'s tragic bargain. Nostos, homecoming, is the Odyssey\'s drive: ten years of wandering, a wife holding off suitors, a kingdom to reclaim. Both poems run mortality as the unstated price — the gods are immortal and bored; humans matter because they die. This journey pattern — departure, trial, return — is the raw material that Campbell\'s monomyth later systematised; the comparative mythology lesson in Humanities takes that story forward.',
      },
      {
        kind: 'para',
        text: 'Writing did not kill the epics; it canonised them. A dictated text could outlive its dialect, its singer, its occasion — rhapsodes now performed a fixed Homer, and Alexandrian librarians edited him into the versions we inherit. Virgil, composing the Aeneid in writing two decades before the Common Era, deliberately wrote himself into the lineage; Beowulf, Dante and Milton follow. Literature became a portable, quotable object — the prerequisite for criticism, canon and school. The epic tradition is the record of that shift: performance becoming text, text becoming heritage.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: read the opening of the Odyssey as an engineering document — which conventions are deployed, and to what effect?',
        'Recall the toolkit: invocation, statement of theme, in medias res, fixed epithet, the Muse as authority.',
        'Apply: “Tell me, O Muse, of the man of many turns...” — the invocation outsources authority to the goddess; the theme arrives at once: the man, his wanderings, his crew; “many turns” is a fixed epithet doing double work, characterising both Odysseus\' mind and travels; the poem then jumps in medias res — year ten, everyone else home, the hero trapped — creating the gap the whole poem exists to close.',
        'State the result: in about twenty lines the performance contract is signed — who speaks, what the story is, where we are in it, and what the hero is like. Oral technology working at full pressure.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Reading the epics today: Emily Wilson\'s 2017 Odyssey — the first English translation by a woman — and modern Gilgamesh editions make four-thousand-year-old poems newly readable.',
        'Screenwriting: the cold open, the flashback structure and the journey plot are epic conventions still earning money in every multiplex.',
        'Ancient history: epics are evidence — for Bronze Age warfare, ships, palaces and values — read critically alongside archaeology.',
        'Comparative literature: Gilgamesh, Homer, the Mahabharata and Beowulf together frame the question of what makes a story epic.',
        'Creative writing: studying formula and variation teaches the deepest lesson the epics hold — constraints generate fluency.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Do not read epics as novels: they are amplified performance texts, and their repetition, catalogs and formulae are features of oral engineering, not padding. Do not insist on a single historical Homer — the formulaic make-up of the poems is precisely what complicates that picture. Do not call Gilgamesh “the first book”: older Sumerian poems fed it, and the standard version was compiled over centuries. And do not skip the invocation and catalogs to get to the story — in epic, the frame is part of the story.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'oral-formulaic composition', def: 'Building verse in performance from metrical formulas and story-patterns, without a fixed text.' },
        { term: 'epic', def: 'A long narrative poem of heroic action, performed or written, centring figures of communal importance.' },
        { term: 'epithet', def: 'A fixed, formulaic phrase — “swift-footed Achilles” — shaped to fit the metre.' },
        { term: 'in medias res', def: 'Opening in the middle of the action, at a late point in the story\'s chronology.' },
        { term: 'invocation', def: 'The opening appeal to a Muse to authorise and enable the telling.' },
        { term: 'kleos', def: 'Glory won in song — the imperishable fame that repays a mortal hero\'s death.' },
        { term: 'nostos', def: 'Homecoming, the Odyssey\'s driving pattern and the root of “nostalgia”.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The oral-formulaic theory of Parry and Lord explains Homeric epithets as…',
          options: ['decorations added by later editors', 'metrical spare parts for composing verse in performance', 'proof of a single written draft', 'translations from Sumerian originals'],
          answer: 1,
          explain: 'Each formula fits a metrical slot, letting the singer compose fluently without a fixed text.',
        },
        {
          q: 'Opening a poem in medias res means beginning…',
          options: ['with an invocation of the Muse', 'in the middle of the action', 'with the hero\'s birth', 'after the story has ended'],
          answer: 1,
          explain: 'The Iliad starts in the war\'s tenth year; the Odyssey with its hero already years into his return.',
        },
        {
          q: 'Achilles\' choice between a long life and kleos dramatises…',
          options: ['the tension between mortality and imperishable fame', 'the wrath of the gods against Troy', 'the invention of writing', 'the homecoming pattern'],
          answer: 0,
          explain: 'Kleos is glory in song — the only immortality a mortal can buy, and the Iliad prices it in years.',
        },
        {
          q: 'The standard Babylonian Gilgamesh is remarkable for containing…',
          options: ['the first alphabet', 'a flood narrative centuries older than Noah\'s', 'the rules of dactylic hexameter', 'a signed contract with the singer'],
          answer: 1,
          explain: 'Utnapishtim\'s flood predates the Genesis account by centuries — one of literature\'s earliest echoes across cultures.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — start world literature here. Follow with the comparative mythology lesson in Humanities, which follows the hero\'s journey from these epics to Campbell and Hollywood, and the literary devices lesson in this section for the close-reading toolkit. Wilson\'s Odyssey and a good Gilgamesh translation are the two first books to actually read.',
      },
    ],
  },
]
