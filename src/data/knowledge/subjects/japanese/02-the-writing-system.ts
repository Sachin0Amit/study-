/**
 * Knowledge Universe — Japanese — Chapter 02: The Writing System
 * 1 lesson · ~1,233 words
 * field: Japanese
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Lessons (snapshot at reorganization):
 *   02.1 lang-japanese-writing — Hiragana, Katakana and Kanji: How Japanese Writing Works
 */
import type { KnowledgeTopic } from '../../types'

export const japaneseCh02: KnowledgeTopic[] = [
  {
    id: 'lang-japanese-writing',
    title: 'Hiragana, Katakana and Kanji: How Japanese Writing Works',
    domain: 'Languages & World Literature',
    field: 'Japanese',
    branch: 'The Writing System',
    tier: 'core',
    concepts: [
      'Three scripts, one sentence',
      'Hiragana: the native syllabary',
      'Katakana: the script for the foreign',
      'Kanji: meaning borrowed from China',
      'Okurigana and furigana: kana in support',
      'A learning order that actually works',
    ],
    words: 1233,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Japanese writes a single sentence with three scripts at once, and each has a job. Kanji, characters borrowed from Chinese, carry the content words — nouns, verb and adjective stems. Hiragana, a flowing native syllabary, handles the grammar: particles, inflection endings, native words without kanji. Katakana, its angular twin, spells foreign loanwords, foreign names and sound effects. One ordinary line — 私はコーヒーを飲みます, “I drink coffee” — uses all three, and reading Japanese means knowing which script answers which question.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The writing system is the commonest reason learners quit Japanese and the best reason to attack it methodically. Hiragana is genuinely learnable in about two weeks; katakana reuses the same sounds in new shapes; and kanji, the long campaign, becomes tractable once characters are learned as assemblies of parts rather than arbitrary pictures. Every sign, menu, manga and message app routes through this topic — it is the gateway to everything else in the language.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The division of labour is strict. Kanji carry the stems that mean things: 私 watashi, “I”; 飲, the stem of “drink”. Hiragana carry the grammatical glue between them — the particles は and を, the politeness ending -ます, and native words like ねこ, cat, that never got a kanji. Katakana take the foreign: コーヒー, coffee; パン, bread; サラ, Sarah. There is also romaji, the Latin-letter transcription — a learning aid, not a fourth script, and a crutch to drop early.',
      },
      {
        kind: 'para',
        text: 'Hiragana is a true syllabary: forty-six base characters, each encoding one syllable-like beat. The layout is learnable in an evening — vowels a-i-u-e-o down the side, consonant columns k, s, t, n, h, m, y, r, w across it: あ a, か ka, さ sa. Its territory is everything grammatical, which makes it the script every textbook and every dictionary writes pronunciation in. The particles lesson in this section shows how much meaning those little hiragana characters actually carry.',
      },
      {
        kind: 'para',
        text: 'Katakana spell exactly the same forty-six sounds in different, angular shapes — ア a, カ ka, サ sa — and their territory is the foreign and the flagged. Loanwords are the core: コーヒー from Dutch koffie, パン from Portuguese pão, パソコン, “pasokon”, a personal computer. Foreign names go into katakana; so do onomatopoeia, scientific names, and anything a writer wants to make stand out the way italics do. Menus and signage lean on it constantly, which makes katakana a reading skill, not an optional extra.',
      },
      {
        kind: 'para',
        text: 'Kanji arrived from China, by way of Korea, by the fifth century CE, and they carry meaning as well as sound. 食 means “eat”: 食べる is the verb taberu, 食堂 is shokudō, a restaurant. Most characters have at least two readings — on\'yomi, the imported Chinese sound, and kun\'yomi, the native Japanese word the character was matched to — so literacy is a long habit of form, meaning and readings, calibrated against the 2,136 jōyō kanji designated for daily use.',
      },
      {
        kind: 'para',
        text: 'The scripts cooperate inside single words. Okurigana is hiragana trailing a kanji to carry the inflection — in 食べます, the kanji holds the stem “eat” while the hiragana holds tense and politeness. Furigana is the small kana printed beside a difficult kanji to give its reading; children\'s books, manga and learner texts supply it generously. Both are the system admitting its own difficulty and engineering a fix — use them shamelessly.',
      },
      {
        kind: 'para',
        text: 'The order that works: hiragana first, two weeks of grid, handwriting and reading until recall is automatic, because everything else is written over it. Katakana second — same sounds, new shapes — consolidated by decoding loanword menus. Kanji third and indefinitely: learn characters as assemblies of components, pair each with vocabulary words rather than abstract readings, and let spaced repetition schedule the reviews. Read real text early; furigana exists precisely so beginners can.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: label every character of 私はコーヒーを飲みます by script and state what each one is doing.',
        'Recall the division of labour: kanji for content stems, hiragana for grammatical glue, katakana for loanwords.',
        'Apply: 私 watashi, “I”, is kanji; は wa is a hiragana particle marking the topic; コーヒー kōhī, “coffee”, is katakana because the word is a Dutch loan; を o is a hiragana particle marking the object; 飲 is the kanji stem of “drink”; みます -mimasu is hiragana carrying tense and politeness.',
        'State the result: three scripts, six jobs, no redundancy — one sentence is a wiring diagram of what each script is for.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Manga and anime: many series print furigana over nearly every kanji, making them free graded readers for learners.',
        'Menus and signage: katakana loanwords let a traveller read コーヒー, ビール and エレベーター on sight once the script is known.',
        'Names: given names in kanji carry meanings parents chose, and official forms include a space for how each is read.',
        'Typing: a Japanese IME converts typed romaji through kana to kanji, so writing is choosing candidates, not drawing strokes.',
        'Certification: the JLPT language exams and the Kanji Kentei both grade reading levels by which characters a text uses.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The classic mistake is attacking all three scripts at once and stalling in month one — sequence them: kana, then kanji. The second is romaji dependence: staying in transcription delays the ear and the eye from doing real work. Third, memorising kanji stroke by stroke as pictures instead of assemblies of components — the difference between two thousand passwords and a few hundred parts. And beware one-to-one thinking: kanji are not words; 食堂 is one word built from two characters.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'syllabary', def: 'A writing system whose characters each encode one syllable-type beat, like hiragana and katakana.' },
        { term: 'mora', def: 'The timing unit of Japanese; each kana represents one mora, the basic beat of the language.' },
        { term: 'kanji', def: 'Characters borrowed from Chinese that carry meaning and both Sino-Japanese and native readings.' },
        { term: 'on\'yomi and kun\'yomi', def: 'The imported Chinese reading of a kanji and the native Japanese reading matched to it.' },
        { term: 'okurigana', def: 'Hiragana following a kanji to express inflection, as the べます of 食べます.' },
        { term: 'furigana', def: 'Small kana printed beside a kanji to indicate its reading.' },
        { term: 'jōyō kanji', def: 'The 2,136 characters designated for everyday literacy in Japan.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The job of hiragana in a Japanese sentence is…',
          options: ['spelling foreign loanwords', 'carrying grammar: particles, inflections and native words', 'representing Chinese roots', 'numbering dictionary entries'],
          answer: 1,
          explain: 'Kanji carry content stems, katakana the foreign, and hiragana the grammatical glue between them.',
        },
        {
          q: 'コーヒー is written in katakana because…',
          options: ['it is a grammatical particle', 'it is a foreign loanword, from Dutch koffie', 'it is a native Japanese word', 'it marks a formal register'],
          answer: 1,
          explain: 'Katakana is the script for loanwords, foreign names, onomatopoeia and emphasis.',
        },
        {
          q: 'The small kana printed beside a difficult kanji to show its pronunciation are called…',
          options: ['okurigana', 'furigana', 'romaji', 'mora'],
          answer: 1,
          explain: 'Furigana give the reading of a character in context — the built-in support system of learner texts.',
        },
        {
          q: 'The recommended learning order for the writing system is…',
          options: ['kanji first, because it is hardest', 'all three scripts simultaneously', 'hiragana, then katakana, then kanji', 'katakana, then kanji, then hiragana'],
          answer: 2,
          explain: 'Hiragana underlies every textbook and pronunciation guide; katakana reuses its sounds; kanji is the long campaign fed by real reading.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — start here for Japanese. Follow with the particles lesson, which turns these characters into sentences, then verb conjugation and politeness registers. Drill apps make the first fortnight of kana a game; after that, furigana-graded readers keep the kanji campaign fed.',
      },
    ],
  },
]
