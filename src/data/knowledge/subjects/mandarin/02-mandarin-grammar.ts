/**
 * Knowledge Universe — Mandarin Chinese — Chapter 02: Mandarin Grammar
 * 1 lesson · ~1,126 words
 * field: Mandarin Chinese
 * legacy sources: x51-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Mandarin Grammar]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 lang-mandarin-grammar — Mandarin Grammar: Measure Words, Aspect and the Ba-Construction
 */
import type { KnowledgeTopic } from '../../types'

export const mandarinCh02: KnowledgeTopic[] = [
  {
    id: 'lang-mandarin-grammar',
    title: 'Mandarin Grammar: Measure Words, Aspect and the Ba-Construction',
    domain: 'Languages & World Literature',
    field: 'Mandarin Chinese',
    branch: 'Mandarin Grammar',
    tier: 'core' as const,
    concepts: [
      'No inflection: word order and particles carry grammar',
      'Measure words: 个 and its shape-and-function family',
      'Two vs 二/两: counting and measuring',
      'Aspect particles 了, 过, 着 — no tense, just viewpoint',
      'Questions: 吗, A-not-A and 呢',
      'The 把 construction: disposal with an obligatory result',
      'Complements and adjective predicates',
    ],
    words: 1126,
    readMins: 6,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book taught tones, pinyin and radicals; the classical-canon lesson taught set-text recitation. This lesson installs the grammar engine that all of it runs on — and Mandarin\u2019s grammar is a surprise to learners expecting European complexity: no conjugations, no plurals, no declensions. What replaces them is a particle system of great precision, three aspect markers that replace tense, and one construction (把) that English simply cannot translate literally.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Mandarin grammar errors are binary: either you know the particle system or your sentences are noise to a native ear. A perfect accent with a dropped measure word still marks you as a learner instantly — and the reverse (correct particles, imperfect tones) reads as competence. The engine matters more than the paint.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The frame is SVO with a topic-comment preference: 我吃饭 "I eat rice", but Mandarin prefers to set the topic first — 这本书我看过 "this book, I have read". Grammar lives in particles, not endings. The most conspicuous system is the measure word (量词): a numeral does not touch a noun directly — it takes a classifier between: 一本书 "one book", 三只猫 "three cats", 两张桌子 "two tables". The generic 个 covers most nouns in casual speech, but the full system classifies by shape and function: 条 for long flexible things (rivers, snakes, trousers), 张 for flat surfaces (paper, tables, tickets), 把 for handled objects (knives, chairs, umbrellas), 本 for bound volumes, 只 for many animals and one of a pair, 双 for pairs. Choosing the classifier is a small act of visual categorization — the grammar makes you see the object\u2019s shape.',
      },
      {
        kind: 'para',
        text: 'Numbers have a trap: 二 is the counting number, but before a measure word the form is 两 — 两个人 "two people", not *二个人. Time follows the frame from large to small (2024年10月26日 — year, month, day), the reverse of English dates, and location/time phrases go before the verb, not after.',
      },
      {
        kind: 'para',
        text: 'Mandarin has no tense — it has aspect, three particles after the verb. 了 marks completion/perfective: 我吃了 "I ate (it) / have eaten" — and it also marks the new-situation at sentence end (下雨了 "it\u2019s started raining"). 过 marks the experiential — "have ever, at least once in life": 我去过中国 "I have been to China (and returned)". 着 marks continuing state: 门开着 "the door is (standing) open". Time comes from adverbs and context: 昨天去 "went yesterday", 明天去 "will go tomorrow" — the same bare verb.',
      },
      {
        kind: 'para',
        text: 'Questions come in three molds: the 吗 particle (你去吗? "are you going?"), the A-not-A pattern (你去不去? — the question fused into the verb phrase), and 呢 follow-ups ("and you?"). The answer system: 是/对 or the verb itself (去 "going"). Softeners: 吧 for suggestions (走吧 "let\u2019s go"), 呢 for topic follow-ups.',
      },
      {
        kind: 'para',
        text: 'The 把 construction is the signature. When an action DISPOSES of an object — moves it, changes it, uses it up — Mandarin demands: Subject 把 Object Verb-Complement: 我把书放在桌子上了 "I put the book on the table (and there it is)" — literally "I took the book, put it at the table, done". The verb cannot stand bare: a result or directional complement must say what became of the object (放好 "placed properly", 拿出来 "took out", 吃完 "finished eating"). Perception verbs and states forbid 把 (*我把这个问题懂了 is out). Learners who dodge 把 produce sentences natives hear as broken; mastering it is the passage into real fluency.',
      },
      {
        kind: 'para',
        text: 'Two finishing touches. Complements: resultative (看见 "see-AND-SEE" — perceived), directional (拿出来 "take-out-come"), potential (拿得动/拿不动 "can/cannot lift") — the complement slot after the verb is where Mandarin packs meaning English spreads over auxiliaries. Adjective predicates: adjectives act as stative verbs and need something before them — 今天很热 "today (is) hot" with a semantically light 很, because a bare adjective predicate sounds comparative or contrary (今天热?! "today hot?! [of all days]"). Comparison uses 比: 他比我高 "he compared-to-me is tall".',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Build: "I have already read that book twice."',
          'Frame: topic first — 那本书 (that book, topic). The verb is read: 看.',
          'Add the aspect gear: experiential 过 (read at least once in life) + completion of the second reading 了 + the frequency phrase 两次 with the generic classifier 次.',
          'Result: 那本书我看了两次了 — topic-comment, 了 both after verb and sentence-final, classifier attached to the numeral. Every particle has done exactly one job.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Ordering and shopping: classifier use (一瓶水, 两斤苹果) is daily commerce — the measure-word system is survival grammar.',
        'Texting and chat: sentence-final 了, 呢 and 吧 carry tone in writing the way emojis do elsewhere.',
        'News reading: the 把 construction and resultative complements dominate headlines about policy action.',
        'Classical contrast: the canon lesson\u2019s texts use bare monosyllabic verbs — modern particles mark the shift instantly.',
        'Graded readers and HSK-style progression: particles and classifiers are the core of every proficiency syllabus.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, mapping 了 onto English past tense: future clauses take 了 too (明天下了课我去找你 "tomorrow when class ends I\u2019ll come find you"). Second, pasting 了 after every verb — completion of the specific action is the rule, habit and future-irrelevant actions stay bare. Third, dropping measure words under English influence: *三书 is broken; 三本书 is speech. Fourth, using 二 before classifiers (两, always). Fifth, the bare-adjective predicate (今天热 instead of 今天很热) — it flips meaning into "of all days". Sixth, forcing 把 where disposal is absent — it is a rule-governed construction, not a synonym for "take".',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'measure word (量词)', def: 'The classifier between numeral and noun — shape-and-function categorization built into grammar.' },
        { term: 'aspect particle', def: '了 (completion), 过 (experiential), 着 (continuous) — viewpoint over time, replacing tense.' },
        { term: 'A-not-A question', def: '你去不去 — the yes-no question fused into the verb phrase.' },
        { term: '把 construction', def: 'S 把 O V-Complement — the disposal pattern with a mandatory result after the verb.' },
        { term: 'resultative complement', def: '看见, 吃完 — the verb-plus-outcome compound that says what became of the action.' },
        { term: '两', def: 'The form of "two" required before measure words — 二 counts, 两 measures.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which is correct for "three books"?',
          options: ['三书', '三个本', '三本书', '二本书'],
          answer: 2,
          explain: '本 classifies bound volumes; 两/二 rule: before classifiers use 两 — 三 works with the classifier.',
        },
        {
          q: '我去过北京 means…',
          options: ['I am going to Beijing', 'I have been to Beijing (experiential — and returned)', 'I will go to Beijing', 'I am in Beijing'],
          answer: 1,
          explain: '过 marks life experience: been there at least once.',
        },
        {
          q: '我把书放在桌子上了 is correct, but *我把书放 is not, because…',
          options: ['把 needs a location word', 'the 把 construction requires a result/complement after the verb', '放 is irregular', '书 is the wrong classifier'],
          answer: 1,
          explain: 'Disposal demands an outcome: 在桌子上了 says where the book ended up.',
        },
        {
          q: '今天很热 needs the 很 because…',
          options: ['很 means "very" always', 'bare adjective predicates sound comparative or contrary', '热 is a noun', 'questions need 很'],
          answer: 1,
          explain: '今天热?! reads as "hot TODAY?! (of all days)" — the semantically light 很 stabilizes the predicate.',
        },
      ] },
    ],
  },
]
