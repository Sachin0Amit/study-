/**
 * Knowledge Universe — Korean — Chapter 03: Korean Literature & Culture
 * 1 lesson · ~1,368 words
 * field: Korean
 * legacy sources: x49-language-deepening-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Korean Literature & Culture]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 lang-korean-reading-culture — Korean Reading and Culture: From Hunminjeongeum to the Nobel
 */
import type { KnowledgeTopic } from '../../types'

export const koreanCh03: KnowledgeTopic[] = [
  {
    id: 'lang-korean-reading-culture',
    title: 'Korean Reading and Culture: From Hunminjeongeum to the Nobel',
    domain: 'Languages & World Literature',
    field: 'Korean',
    branch: 'Korean Literature & Culture',
    tier: 'core' as const,
    concepts: [
      'Hunminjeongeum: the 1446 script event',
      'Featural design: consonants from articulators',
      'Before Hangul: hyangga, hanmun, sijo, pansori',
      'The modern novel from The Heartless onward',
      'Han Kang and the 2024 Nobel Prize',
      'Reading by particles, not word order',
    ],
    words: 1368,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Every other alphabet in this book accreted over centuries. Hangul was designed — decreed, explained, and promulgated in 1446 by King Sejong\u2019s court under the name Hunminjeongeum, "The Correct Sounds for the Instruction of the People". This lesson follows the script from that documented birth through the verse and song that carried Korean literature when writing meant Classical Chinese, into the modern novel, and up to the October evening in 2024 when the Swedish Academy awarded the Nobel Prize in Literature to Han Kang — the first Korean-language writer and the first Asian woman to receive it. The through-line is the workshop\u2019s grammar: Korean literature rewards particle-readers.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Hangul is the world\u2019s best-documented script invention, and its design is the reason the workshop\u2019s endings are writable at all: one block = one syllable, every ending visible. Knowing the story is knowing why Korean literacy campaigns actually work — and why the 1997 UNESCO inscription of the Haerye, the explanatory edition lost for centuries, mattered to a whole country\u2019s self-image.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The event is precisely datable. The script was created in 1443 and promulgated in 1446 with the Hunminjeongeum — a preface and a set of verses in the new letters — plus, in the full Haerye edition, explanations of each letter\u2019s design. That Haerye was lost for centuries and only resurfaced in 1940; UNESCO entered it in the Memory of the World register in 1997. The explanations describe the system this lesson now teaches: five basic consonant letters modeled on the shapes the speech organs make — the tongue root closing the back of the mouth (ㄱ), the tongue tip at the ridge (ㄴ), the lips (ㅁ), the teeth (ㅅ), the open throat (ㅇ) — with extra strokes adding aspiration (ㅋ, ㅌ, ㅍ, ㅊ) and compounding building the rest. Vowels were drawn from three elements: a dot for heaven (the sun), a horizontal line for earth, a vertical line for the human standing between them. A script you can see into your own mouth.',
      },
      {
        kind: 'para',
        text: 'Before Hangul — and long after — the prestige written language of Korea was hanmun: Classical Chinese, read in Korean order with Korean pronunciation. The vernacular record survives anyway: fourteenth-century hyangga songs from Silla preserved in the Samguk Yusa; the sijo, a three-breath lyric of roughly forty-five syllables that aristocrats and commoners both wrote, still written today; and pansori, the hours-long sung storytelling performed by a voice and a drum — whose Chunhyangga, the tale of a groomsman\u2019s son and a magistrate\u2019s daughter, is recognized on UNESCO\u2019s intangible heritage lists. Hangul itself was briefly banned under one fifteenth-century king and confined for centuries to women\u2019s letters, diaries and popular fiction — which is exactly why those genres preserved it. The mixed-script era (hanja roots inside Hangul sentences) lasted into the twentieth century, and hanja still disambiguates legalese and academic prose.',
      },
      {
        kind: 'para',
        text: 'Modern Korean prose is usually dated from Yi Kwang-su\u2019s The Heartless (1917), the first modern novel in the language, written in a Japan-annexed country arguing about what a modern Korea was. The twentieth century then ran the full arc: colonial censorship, division, war, and a postwar generation that wrote the national trauma into form — Ch\u2019oe In-hun\u2019s The Square (1960) sending its torn protagonist across the 38th parallel, Hwang Sok-yong\u2019s epic chronicles of the marginalized, Park Wan-suh\u2019s wartime family novels, and the poets who proved the language survived everything. Translation into English grew steadily through the late twentieth century, setting the stage for the current moment.',
      },
      {
        kind: 'para',
        text: 'That moment has a date and a name. Han Kang, daughter of the novelist Han Seung-won, built her reputation on The Vegetarian (2007; English 2015), which won the 2016 Man Booker International Prize — the story of a woman who stops eating meat and stops complying, told entirely through the family\u2019s bewildered eyes. Human Acts (2014) reconstructed the 1980 Gwangju uprising through the bodies it left behind. In October 2024 the Swedish Academy awarded her the Nobel Prize in Literature — the first laureate writing in Korean, and the first Asian woman laureate in the category — citing her "intense poetic prose that confronts historical traumas and exposes the fragility of human life". Her acceptance lecture, on light and snow and the first thing her brother read to her, became required reading overnight.',
      },
      {
        kind: 'para',
        text: 'The reading strategy this book teaches is particle-first parsing, and it is exactly how fluent readers process Korean. Because verbs end their clauses and particles label every noun, you do not read word-by-word the way English demands: you read phrase-final particle by phrase-final particle, letting each 에서, 을, 은/는 tell you what to do with the pile of words that preceded it. Topic chains mean the first sentence of a paragraph sets a frame the rest inherits. A two-line news item in 한자-free modern Hangul is therefore a closed exercise: find the topic, find the focus, find the final verb, and the sentence has told you everything it knows.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Parse a news-style line: 한강 작가는 2024년에 노벨 문학상을 받았습니다.',
          'Find the topic: 작가는 — "the author (as topic)", with 한강 her name before it.',
          'Find the time particle (에 on 2024년), the object particle (을 on the prize), and the final verb 받았습니다 — formal past of "receive".',
          'Assemble by roles, not order: "As for author Han Kang, in 2024, the Nobel Prize in Literature — received." No word order was harmed; the particles did all the work.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Hangul Day (October 9, the promulgation\u2019s commemoration) — Korea\u2019s only script holiday; the origin story is a national festival of literacy.',
        'Reading path: sijo collections in translation, then The Vegetarian, then Human Acts — the particle-first habit survives translation loss best.',
        'Webtoons and K-drama subtitles: the fastest volume reading you can get in the informal register.',
        'UNESCO listings as a study resource: the Haerye and pansori entries are short, free and dense with exactly the vocabulary of this lesson.',
        'Hanja spotting: legal and academic texts still gloss terms with Chinese characters — treat each one as free etymology.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, confusing Hangul (the script, 1446) with Korean (the language, millennia older) — the script event did not create the language. Second, assuming featural means simplistic: the design is brilliant precisely because it is systematic, and the grammar it encodes is as complex as any in this book. Third, declaring hanja dead: it lives in disambiguation, names and scholarship. Fourth, reading Korean in English word-order: your eye must land on the particles, not the first noun — parsing training beats vocabulary drilling at this stage. Fifth, treating 2024 as Korean literature\u2019s beginning: the Nobel crowned a century of the modern novel and a thousand years of verse.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Hunminjeongeum', def: 'The Correct Sounds for the Instruction of the People — the 1446 promulgation of Hangul.' },
        { term: 'Haerye', def: 'The explanatory edition of Hunminjeongeum documenting each letter\u2019s design; lost until 1940, UNESCO-listed 1997.' },
        { term: 'featural script', def: 'A writing system whose letter shapes encode where in the mouth the sound is made — Hangul\u2019s signature idea.' },
        { term: 'hanmun', def: 'Classical Chinese as Korea\u2019s prestige written language — the literature Hangul lived beside for centuries.' },
        { term: 'sijo', def: 'The three-breath lyric of roughly forty-five syllables — Korea\u2019s vernacular verse form, still alive.' },
        { term: 'pansori', def: 'Hours-long sung storytelling with drum — UNESCO-recognized; Chunhyangga is the beloved classic.' },
        { term: 'topic chain', def: 'The paragraph-level mechanism by which one 은/는 topic frames every sentence that follows.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The Hunminjeongeum was promulgated in which year?',
          options: ['1443', '1446', '1504', '1940'],
          answer: 1,
          explain: 'Created 1443, promulgated 1446 — and 1940 is the year the lost Haerye edition resurfaced.',
        },
        {
          q: 'In Hangul\u2019s design, the letter ㅁ derives its shape from…',
          options: ['the sun', 'the teeth', 'the lips', 'a horse\u2019s bridle'],
          answer: 2,
          explain: 'The five basic consonants model the speech organs: ㅁ is the two lips meeting.',
        },
        {
          q: 'Which work is regarded as the first modern Korean novel?',
          options: ['The Vegetarian', 'The Square', 'The Heartless', 'Chunhyangga'],
          answer: 2,
          explain: 'Yi Kwang-su\u2019s The Heartless (1917) — Chunhyangga is pansori, centuries older.',
        },
        {
          q: 'Han Kang\u2019s 2024 Nobel is historic because she is…',
          options: ['the first woman laureate ever', 'the first laureate writing in Korean and first Asian woman in Literature', 'the youngest laureate', 'the first laureate from Asia of any kind'],
          answer: 1,
          explain: 'First Korean-language laureate and the first Asian woman laureate in Literature.',
        },
      ] },
    ],
  },
]
