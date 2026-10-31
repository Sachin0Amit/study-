/**
 * Knowledge Universe — Russian — Chapter 02: Russian Grammar
 * 1 lesson · ~1,401 words
 * field: Russian
 * legacy sources: x49-language-deepening-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Russian Grammar]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 lang-russian-grammar-workshop — Russian Grammar Workshop: Declension, Motion and Government
 */
import type { KnowledgeTopic } from '../../types'

export const russianCh02: KnowledgeTopic[] = [
  {
    id: 'lang-russian-grammar-workshop',
    title: 'Russian Grammar Workshop: Declension, Motion and Government',
    domain: 'Languages & World Literature',
    field: 'Russian',
    branch: 'Russian Grammar',
    tier: 'core' as const,
    concepts: [
      'Three declensions, six cases, full tables',
      'Animacy: why the accusative splits',
      'Motion verbs: unidirectional versus multidirectional',
      'Prefixed motion: по-, при-, у-, вы-, за-',
      'Verbal government: verbs that choose cases',
      'Numerals, one rule for 1 / 2–4 / 5+',
    ],
    words: 1401,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book taught you that Russian has six cases and two aspects, that word order is free because the endings carry the grammar, and that Cyrillic lies about a few letters. This workshop fills in the tables. Full declension patterns for all three genders, the animacy rule that bends the accusative, the celebrated double set of motion verbs, the prefixes that turn "go" into "set off / arrive / leave / drop in", the verbs that choose unexpected cases for their objects, and the numeral rule every headline obeys. The case engine is the language; this lesson is the owner\u2019s manual.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Russian word order is not free because Russians are casual — it is free because every noun wears its role on its ending. That makes the endings the meaning, and makes word order pure emphasis: what you put last is what you stress. Learn the tables and you stop reading Russian as scrambled English and start reading it as music with a grammar score.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The declension system has three patterns. The first declines most feminines in -а/-я: книга "book" runs книга (nominative), книги (genitive), книге (dative), книгу (accusative), книгой (instrumental), книге (prepositional). The second declines masculines and neuters: hard-stem стол "table" runs стол, стола, столу, стол, столом, столе; neuter окно "window" follows with -о/-а endings (окно, окна, окну…); soft stems like словарь "dictionary" run словаря, словарю, словарём, словаре. The third is the small, ancient soft feminine class in -ь: ночь "night" runs ночь, ночи, ночи, ночь, ночью, ночи, and its two members with mobile stress, мать and дочь, hide a syllable in the plural (дочери, дочерей). Two spelling rules prune the tables: after ж, ш, ч, щ, ц an unstressed о writes е, and ы never follows к, г, х or the hushes — which is why книга has книги but душа has души.',
      },
      {
        kind: 'para',
        text: 'Animacy is a rule hiding inside the accusative. For inanimate masculines, the accusative simply copies the nominative: я вижу стол "I see the table". For animate masculines — people and animals — the accusative copies the genitive: я вижу брата "I see the brother", я вижу студента "the student". In the plural the rule extends to everything: animate plurals take genitive-form accusatives (я вижу студентов), inanimates copy the nominative (я вижу столы). First-declension feminines like книгу were already distinct, so the rule is invisible there — which is exactly why learners forget it exists until a masculine animate object appears and the sentence seems to put a possessive where the object should be.',
      },
      {
        kind: 'para',
        text: 'Russian famously has two verbs for each mode of motion. The unidirectional (also called determinate) verb describes motion in one direction, in progress: идти "be walking (one way)", ехать "be riding (one way)", бежать "be running", лететь "be flying", плыть "be swimming". The multidirectional (indeterminate) pair describes motion with no single direction — habit, repetition, round trips, wandering: ходить, ездить, бегать, летать, плавать. "Я иду в библиотеку" is "I am (right now, one-way) walking to the library"; "я хожу в библиотеку" is "I (regularly) go to the library". Multiply-directed wandering also takes the indeterminate: мы ходили по городу "we walked around the town". Choose the verb and you have already said when and whether.',
      },
      {
        kind: 'para',
        text: 'Prefixes then multiply the pairs. Adding по- to an indeterminate stem makes a perfective "set off": пойти, поехать. при- gives "arrive": прийти, приехать. у- gives "depart": уйти, уехать. вы- gives "exit": выйти, выехать. за- gives "drop in on the way": зайти, заехать; до- gives "reach as far as": дойти, доехать. The prefixes carry meaning across the whole family — arrive at a conclusion, depart from a plan, go out of fashion — which is why motion verbs are the best investment in the Russian lexicon: learn five prefixes and ten stems and you own a hundred verbs.',
      },
      {
        kind: 'para',
        text: 'Government (upravlenie) is the phenomenon of verbs and adjectives choosing cases the way English verbs choose prepositions. ждать takes the genitive (ждать письма, "await a letter"); достигать takes the genitive (достигнуть цели, "reach the goal"); верить, помогать and мешать take the dative (верить другу, помогать маме); заниматься, гордиться and интересоваться take the instrumental (заниматься спортом, "go in for sport"); следить takes за plus instrumental. Prepositions distribute too: к and по govern the dative; с, за, над, под and перед govern the instrumental; о governs the prepositional; без, до, для, из, от, у and ради govern the genitive; and в/на govern the accusative when motion is meant (в библиотеку "into the library") but the prepositional when location is meant (в библиотеке "in the library") — the same pair of words carrying go-versus-be.',
      },
      {
        kind: 'para',
        text: 'Numerals obey one headline-shaped rule. One takes the nominative singular: двадцать одна книга "twenty-one books (lit. one book)". Two, three and four take the genitive singular: две книги, три книги, четыре книги. Five and above take the genitive plural: пять книг, двадцать пять книг. Adjectives have a compressed predicate form — the short form — used when the adjective itself is the verb: он болен "he is ill", она готова "she is ready", город красив "the city is beautiful" — and comparatives add -ее: быстрее "faster", интереснее "more interesting".',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Build: "On Wednesday I went to the library, read a whole book and waited for a friend." Choose motion first: a completed one-way trip by unspecified means → поехал or пошёл; walking is default → пошёл.',
          'Aspect the actions: completed, sequenced events → perfective прочитать; the waiting, backgrounded → imperfective ждать.',
          'Government check: ждать + genitive → друга; the object книга takes accusative книгу (feminine first declension).',
          'Assemble: В среду я пошёл в библиотеку, прочитать книгу и ждал друга — motion prefix, aspect pair, and genitive government all correct; word order could now be shuffled at will.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Reading literature: case endings let you untie Tolstoy\u2019s long sentences — find the nominative, and you have found the subject.',
        'Forms and bureaucracy: Russian paperwork loves the genitive — dates of birth, "from / of" phrases, passport data.',
        'Texting: aspect choice is how you signal promise versus process — сделаю "I\u2019ll get it done" versus делаю "I\u2019m on it".',
        'Song lyrics and subtitles: motion-verb prefixes are the plot of half of Russian popular song (ушла, вернись).',
        'Headline reading: the 1 / 2–4 / 5+ numeral rule is why "22 человека" and "два человека" look nothing alike.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, memorizing endings without animacy — the masculine animate accusative will ambush every second sentence. Second, using ехать/идти for habitual motion: one-way verbs describe one-way trips; habits take ходить/ездить. Third, putting perfectives after начать, продолжить, кончить — "began to read (imperfective) and finished reading (perfective)" — the aspect of beginning continues, not completes. Fourth, ignoring government: helping + accusative is wrong (помогать + dative), and the error is glaring to every native ear. Fifth, translating numeral phrases word-for-word: две книги "two books" is genitive singular, not plural — the agreement is the rule.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'declension', def: 'One of three noun patterns (first, second, third) that generate all six case forms.' },
        { term: 'animacy', def: 'The split in the accusative: animates copy the genitive, inanimates copy the nominative.' },
        { term: 'motion verb pair', def: 'Unidirectional versus multidirectional: идти/ходить, ехать/ездить — direction versus habit.' },
        { term: 'prefixed motion', def: 'по- set off, при- arrive, у- depart, вы- exit, за- drop in — perfectives built on motion stems.' },
        { term: 'government', def: 'A verb or preposition\u2019s fixed choice of case for its object — ждать + genitive, помогать + dative, гордиться + instrumental.' },
        { term: 'short-form adjective', def: 'The predicate form of an adjective: он болен, город красив.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Why does я вижу брата use an -а ending on the object?',
          options: ['It is genitive — animate masculine accusatives copy the genitive', 'It is dative', 'It is a plural', 'It is vocative'],
          answer: 0,
          explain: 'Animacy: брата is accusative with genitive form — "I see the brother".',
        },
        {
          q: 'Which pair expresses habitual "going to the library"?',
          options: ['идти / ехать', 'ходить / ездить', 'пойти / поехать', 'прийти / приехать'],
          answer: 1,
          explain: 'Multidirectional (indeterminate) stems express habit and round trips; the others are one-way or prefixed perfectives.',
        },
        {
          q: 'В библиотеку versus в библиотеке differs in…',
          options: ['tense', 'case — accusative for motion, prepositional for location', 'register', 'number'],
          answer: 1,
          explain: 'в/на take the accusative when you are going there, the prepositional when you are there.',
        },
        {
          q: 'пять книг uses the genitive plural because…',
          options: ['книга is irregular', 'numerals 5 and above take genitive plural nouns', 'it is negative', 'it is possessive'],
          answer: 1,
          explain: 'The 1 / 2–4 / 5+ rule: nominative singular, genitive singular, genitive plural.',
        },
      ] },
    ],
  },
]
