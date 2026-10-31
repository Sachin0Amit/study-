/**
 * Knowledge Universe — Japanese — Chapter 01: Sentence Structure
 * 1 lesson · ~1,112 words
 * field: Japanese
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Lessons (snapshot at reorganization):
 *   01.1 lang-japanese-particles — Japanese Particles: The Grammar Glue of は, が, を
 */
import type { KnowledgeTopic } from '../../types'

export const japaneseCh01: KnowledgeTopic[] = [
  {
    id: 'lang-japanese-particles',
    title: 'Japanese Particles: The Grammar Glue of は, が, を',
    domain: 'Languages & World Literature',
    field: 'Japanese',
    branch: 'Sentence Structure',
    tier: 'intermediate',
    concepts: [
      'SOV order and postpositions',
      'は (wa), the topic marker',
      'が (ga), the subject and focus marker',
      'The wa–ga dance in one sentence',
      'を (o), the direct-object marker',
      'Ellipsis licensed by particles',
      'The wider case system',
    ],
    words: 1112,
    readMins: 6,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Japanese verbs come last, and the work English does with word order — who does what to whom — is done by small particles attached to the ends of noun phrases. Three of them carry the core grammar: は (romanised wa) marks the topic, the thing the sentence is about; が (ga) marks the subject, the focus of new or neutral information; and を (o) marks the direct object. Because particles, not positions, encode roles, the same words can be reordered for emphasis without breaking the sentence — the particles are the glue.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'These three particles appear in virtually every Japanese sentence from the first day of study, and misusing them is the leading cause of “understandable but foreign-sounding” speech. They also encode a distinction English lacks — topic versus subject — and once it clicks, Japanese sentences stop feeling scrambled and start feeling precisely engineered.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Japanese is verb-final: 私はパンを食べる (watashi wa pan o taberu) is literally “I-topic bread-object eat”. Particles are postpositions, following the noun they mark, where English prepositions precede. Modifiers consistently precede what they modify, so the listener assembles the meaning backward from the verb.',
      },
      {
        kind: 'para',
        text: 'は — pronounced wa despite its ha spelling — announces the running theme: “as for X…”. Watashi wa gakusei desu is “as for me, [I am] a student”. Once set, the topic silently persists across following sentences, which is one reason Japanese needs so few pronouns. In a question like これはいくらですか (kore wa ikura desu ka), は points the sentence’s spotlight at “this”.',
      },
      {
        kind: 'para',
        text: 'が does two main jobs. In neutral description it simply marks the subject of an event being reported: 雨が降っている (ame ga futte iru), rain is falling. In focus readings it answers and implies “who or what?” exhaustively — 私が行きます (watashi ga ikimasu) means “I — and specifically I — will go”. New information leans on が; established context leans on は.',
      },
      {
        kind: 'para',
        text: 'The famous example 象は鼻が長い (zō wa hana ga nagai) — “as for elephants, the nose is long” — uses both: は sets the frame, elephants; が marks the subject within it, the trunk; and the comment is “long”. Choosing は also invites contrast: ビールは飲みます (bīru wa nomimasu) can imply “beer — unlike whatever else — I do drink”. Particle choice is meaning, not decoration.',
      },
      {
        kind: 'para',
        text: 'を (romanised o or wo) marks what a transitive verb acts on: 本を読んだ (hon o yonda), read the book. In casual speech it is sometimes dropped, but learners should keep it. It also marks paths of movement with motion verbs — 公園を散歩した (kōen o sanpo shita), strolled through the park — a relation English expresses with a preposition.',
      },
      {
        kind: 'para',
        text: 'Because particles label roles, anything recoverable from context can be omitted — subjects, topics, whole clauses. おいしい！ (“[it is] delicious!”) and 明日行きます (“[I am] going tomorrow”) are complete sentences. The skill of reading Japanese is largely the skill of reconstructing what the particles make droppable.',
      },
      {
        kind: 'para',
        text: 'は, が and を sit inside a larger set: に (ni) marks time points and goals, で (de) marks location of action and means, の (no) links possessors, へ (e) marks direction, と (to) marks accompaniment. Only は is special: it does not mark a grammatical role at all, but a discourse position — the topic — which is exactly what makes it tricky.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: what is the difference between 私は本を読んだ (watashi wa hon o yonda) and 私が本を読んだ (watashi ga hon o yonda)?',
        'Recall the governing ideas: は frames a known topic with a contrastive tinge; が marks focused or new information, often exhaustively.',
        'Apply it: with は, “I” is the given frame — as for me, I read the book — and the news is what I did. With が, “I” is the news: I am the one who read the book, as an answer to “who read it?”.',
        'State the result: identical words, different information structure — the particle decides what the sentence is about versus what it asserts.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Travel Japanese: ordering, prices and directions run on simple は/が/を frames from day one.',
        'Media study: parsing anime, drama and song lyrics trains the topic–subject eye on real input.',
        'Academic reading: following topic chains, where は carries over from sentence to sentence, is the core reading skill.',
        'Language technology: topic and focus particles are a standard test case for machine-translation quality.',
        'Heritage learners: converting set phrases learned at home into a generative system.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The classic beginner error is treating は as the English subject marker and attaching it to everything — producing 猫はいる where neutral description wants 猫がいる (neko ga iru, there is a cat), since は there would imply “as for cats, they exist — unlike something else”. Learners also read は as ha and を as wo in speech, and drop を and が too early, imitating casual natives before they can hear the difference dropping makes.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'particle', def: 'A grammatical word attaching to a noun phrase to mark its role.' },
        { term: 'postposition', def: 'A role marker placed after the noun — Japanese’s mirror of English prepositions.' },
        { term: 'topic marker', def: 'は (wa), which announces what the sentence is about.' },
        { term: 'exhaustive listing', def: 'The が reading that answers “who or what?” to the exclusion of alternatives.' },
        { term: 'contrastive は', def: 'は used to set one item against an implicit alternative.' },
        { term: 'direct object', def: 'The noun a transitive verb acts on, marked by を.' },
        { term: 'ellipsis', def: 'Omitting words recoverable from context, licensed by particle marking.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The particle は is romanised and pronounced…',
          options: ['ha', 'wa', 'a', 'ka'],
          answer: 1,
          explain: 'As a particle, は abandons its ordinary ha reading and is pronounced wa.',
        },
        {
          q: 'In 象は鼻が長い (zō wa hana ga nagai), which phrase is the grammatical subject?',
          options: ['象 (elephant)', '鼻 (nose)', '長い (long)', 'the sentence has none'],
          answer: 1,
          explain: 'は sets elephants as the topic; が marks “the nose” as the subject of the comment “long”.',
        },
        {
          q: '私が行きます (watashi ga ikimasu), spoken among several candidates, most naturally means…',
          options: ['I will go too', 'I — and specifically I — will go', 'as for me, someone will go', 'I went'],
          answer: 1,
          explain: 'が here is exhaustive-listing focus: it answers “who?” with “me, and not the others”.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: hiragana and basic present-tense sentences. This is intermediate-tier Japanese grammar: after wa, ga and o, take the full case set (ni, de, no, e, to), then verb conjugation and politeness registers. Real-input reading practice cements the topic–subject eye faster than drills.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Japanese is verb-final; particles, not word order, mark grammatical roles.',
        'は (wa) announces the topic and invites contrast.',
        'が (ga) marks subjects — neutral events, or exhaustive focus on new information.',
        'を (o) marks direct objects, plus paths of movement.',
        'Particles license ellipsis: whatever is recoverable can be dropped.',
      ] },
    ],
  },
]
