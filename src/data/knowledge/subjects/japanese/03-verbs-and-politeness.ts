/**
 * Knowledge Universe — Japanese — Chapter 03: Verbs & Politeness
 * 1 lesson · ~1,263 words
 * field: Japanese
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Lessons (snapshot at reorganization):
 *   03.1 lang-japanese-verbs — Japanese Verbs: Three Groups, the te-Form and the Politeness Engine
 */
import type { KnowledgeTopic } from '../../types'

export const japaneseCh03: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'lang-japanese-verbs',
    title: 'Japanese Verbs: Three Groups, the te-Form and the Politeness Engine',
    domain: 'Languages & World Literature',
    field: 'Japanese',
    branch: 'Verbs & Politeness',
    tier: 'core',
    concepts: [
      'Verbs inflect for tense and politeness, never for person',
      'Group 1 (u-verbs) vs Group 2 (ru-verbs) vs the two irregulars',
      'The ます polite system and its negative/past',
      'Plain forms and the dictionary form',
      'te-form: the connective of Japanese',
      'Sound changes: く→いて, む/ぶ/ぬ→んで, る/つ/う→って',
      'Politeness levels from casual to keigo',
    ],
    words: 1261,
    readMins: 6,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'The writing-system lesson covered scripts; the particles lesson covered how Japanese marks roles; this lesson covers the verbs themselves — and they are friendlier than the writing suggests. A Japanese verb never changes for person or number: 飲む (nomu, drink) means I, you, we or they drink; the sentence ends in the verb; and every form is built by regular inflection for tense, polarity and politeness. Master three groups and a handful of sound rules, and you can conjugate nearly the whole language.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Japanese politeness is built into the verb, not added around it: choosing ます-form versus plain form is a social act performed dozens of times per minute. The te-form, meanwhile, is the hinge of half the language’s most useful patterns — requests, progressives, permission — which is why textbooks race learners toward it.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Verbs divide into three groups. Group 2 — the ru-verbs — end in the vowel row る and conjugate by simply dropping it: 食べる → 食べます (eat → polite eat), 食べない (negative), 食べた (past). Group 1 — the u-verbs — end in a consonant plus a u-vowel (買う, 書く, 飲む, 話す) and conjugate by shifting that final syllable to its i-row twin before ます: 買う → 買います (kau → kaimasu), 書く → 書きます (kaku → kakimasu), 飲む → 飲みます (nomu → nomimasu), 話す → 話します (hanasu → hanashimasu — note す becomes し, shi). Group 3 is two verbs, irregular and indispensable: する (suru, do → します shimasu) and 来る (kuru, come → 来ます kimasu). A verb ending in る is usually a ru-verb, but a set of u-verbs wears る too (帰る kaeru → 帰ります kaerimasu) — the dictionary mark and practice settle them.',
      },
      {
        kind: 'para',
        text: 'The ます system gives four core forms with total regularity: present affirmative ます, present negative ません, past affirmative ました, past negative ませんでした. 行きます (go), 行きません (do not go), 行きました (went), 行きませんでした (did not go). The plain forms — dictionary form, -nai negative, -ta past — carry the same tense information without the politeness marker, and they are the forms dictionaries list and casual conversation lives in: 行く, 行かない, 行った. Learners who meet textbooks first speak ます-form everywhere; learners who meet anime first speak plain everywhere — Japanese fluency needs both registers and the judgment to switch.',
      },
      {
        kind: 'para',
        text: 'The te-form is the connective tissue. For ru-verbs, it is the ます-stem plus て: 食べて, 見て. For u-verbs, four sound-change families: final く→いて and ぐ→いで (書く→書いて, 泳ぐ→泳いで); す→して (話す→話して); む/ぶ/ぬ→んで (飲む→飲んで, 遊ぶ→遊んで, 死ぬ→死んで); る/つ/う→って (食べる is Group 2, but 乗る→乗って, 待つ→待って, 買う→買って). The te-form alone does little, but compounds: お願い pattern 〜てください (please do), progressive 〜ている (doing / in a state — 知っている, to know, literally “has been knowing”), permission 〜てもいい, linking clauses “and then” (朝起きて、顔を洗って、出かけた). One form, five high-frequency grammars.',
      },
      {
        kind: 'para',
        text: 'Politeness is a layered architecture. The plain and ます contrast is the first layer (teineigo, polite speech); Japanese adds honorific keigo — sonkeigo to elevate the listener’s actions (召し上がる for eat), kenjougo to humble your own (いただく, 参る). Everyday learners need awareness, not mastery: use ます-form with strangers, teachers, shops; plain form with family, close friends, and inside casual writing; and remember that politeness attaches to WHO the action benefits, not just to formality. Verb-final word order plus the politeness engine gives Japanese its famous rhythm: topic, roles, then the verb — ending in ます or its plain twin — that tells you when the sentence was over.',
      },
      {
        kind: 'para',
        text: 'Two habits seal the system. First, particles and verbs share the load: は/が/を mark who does and what receives (the particles lesson), and the verb closes the frame — 私はコーヒーを飲みます — so no ending change for person ever arrives. Second, the past tense splits between ました (polite) and -た (plain) without any of the agreement anxiety of European languages: no gender, no number, no auxiliary stacking for the everyday past. Japanese verbs are the rare grammar that is easier than its script — and the script is learnable too, which is the encouragement the writing lesson ends on.',
      },
      {
        kind: 'formula',
        name: 'u-verb ます rule',
        latex: '\\text{u-verb: } \\text{final う-row syllable} \\to \\text{i-row twin} + ます \\quad (\\text{ru-verb: drop る} + ます)',
        meaning: 'Group 1 verbs shift the final syllable to its i-row (く→き, む→み, す→し) before ます; Group 2 verbs just drop る. Every other form builds on these stems.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: conjugate 飲む (drink) through polite negative, polite past, and te-form, then say “I am drinking coffee now”.',
          'Recall the machinery: 飲む is a Group 1 u-verb ending む; the む family maps to んで in the te-form and み in the ます-stem.',
          'Apply: polite 飲みます; negative 飲みません; past 飲みました; te-form 飲んで; progressive uses ている → 今、コーヒーを飲んでいます.',
          'State the result: one stem (のみ-) generated three polite forms, and the te-form opened the progressive — four grammars from one sound rule, with zero person endings anywhere.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Daily conversation: ます-form with strangers and shops; plain form among friends — the register switch is constant.',
        'Proficiency-test grammar sections, which drill group identification, te-form sound changes and ている states.',
        'Asking and responding: 〜てください requests and 〜てもいい permission run daily logistics.',
        'Describing states: 結婚している (is married), 行っている (has gone) — the progressive that doubles as resultative.',
        'Workplace survival: understanding keigo even while speaking plain-polite, and spotting the humble いたします.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Classifying every る-verb as Group 2 — 帰る, 走る, 要る are u-verbs (帰ります, not 帰ます). Applying the te-form sound change to ru-verbs, which simply take て. Using 〜ている wherever English uses “is -ing” — Japanese often prefers the plain result state (知っている for “I know”). Mixing plain and ます forms mid-conversation with the same person without signalling a register change. And expecting person endings — they never come; the particles carry the roles.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'u-verb (Group 1)', def: 'Verb whose final syllable is a consonant + u-vowel; conjugates by shifting to the i-row before ます.' },
        { term: 'ru-verb (Group 2)', def: 'Verb ending in the る vowel row; conjugates by dropping る.' },
        { term: 'te-form', def: 'The connective form powering requests, progressives, permission and clause linking.' },
        { term: 'ます-form', def: 'The polite verb system: ます / ません / ました / ませんでした.' },
        { term: 'plain form', def: 'Dictionary, -nai and -ta forms; casual register and dictionary listing.' },
        { term: 'ている', def: 'The te-form + いる progressive/state pattern, covering both “is doing” and “is in a state”.' },
        { term: 'keigo', def: 'The honorific layer (sonkeigo, kenjougo) that elevates and humbles actions beyond the ます level.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The polite present of 書く (write) is…',
          options: ['書るます', '書きます', '書いてます', '書った'],
          answer: 1,
          explain: 'く shifts to its i-row き before ます: 書きます. (書いています would be the progressive te-form.)',
        },
        {
          q: 'The te-form of 飲む is…',
          options: ['飲みて', '飲んで', '飲って', '飲んでる'],
          answer: 1,
          explain: 'The む/ぶ/ぬ family maps to んで: 飲んで. (飲んでいる is the progressive built on it.)',
        },
        {
          q: 'How many person endings does a Japanese verb have?',
          options: ['three, like European verbs', 'two: polite and plain', 'zero — verbs never agree with the subject', 'six, matching the pronoun set'],
          answer: 2,
          explain: 'Tense, polarity and politeness inflect; person and number never do — particles mark the roles.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: the particles lesson for は/が/を and the writing lesson to read the examples. Follow with the French and German verb lessons for contrastive views of how languages encode person, and the prosody lesson for pitch accent. Grounding texts: the verb chapters of standard beginner Japanese courses (the Genki tradition) and Wikibooks’ Japanese grammar.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Three groups: ru-verbs drop る; u-verbs shift the last syllable to the i-row; する and 来る are irregular.',
        'ます system: ます / ません / ました / ませんでした — four forms, total regularity.',
        'Plain forms (dictionary, -nai, -ta) are the casual register and the base for te-form.',
        'te-form sound changes: く→いて, ぐ→いで, す→して, む/ぶ/ぬ→んで, る/つ/う→って.',
        'Politeness is lexical and layered — ます first, keigo later; verbs never mark person.',
      ] },
    ],
  },
]
