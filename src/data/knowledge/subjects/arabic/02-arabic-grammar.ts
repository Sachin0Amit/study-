/**
 * Knowledge Universe — Arabic — Chapter 02: Arabic Grammar
 * 1 lesson · ~1,358 words
 * field: Arabic
 * legacy sources: x49-language-deepening-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Arabic Grammar]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 lang-arabic-grammar-morphology — Arabic Grammar Workshop: Cases, Plurals and the Verb Engine
 */
import type { KnowledgeTopic } from '../../types'

export const arabicCh02: KnowledgeTopic[] = [
  {
    id: 'lang-arabic-grammar-morphology',
    title: 'Arabic Grammar Workshop: Cases, Plurals and the Verb Engine',
    domain: 'Languages & World Literature',
    field: 'Arabic',
    branch: 'Arabic Grammar',
    tier: 'core' as const,
    concepts: [
      'I\u2018rab: three cases and the jussive mood',
      'Tanwīn and what the unwritten vowels carry',
      'Three plural systems plus the dual',
      'The verb: past stem, non-past stem, moods',
      'Derived stems II–X from one root',
      'kāna and inna: two sentence-reversing families',
    ],
    words: 1358,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book introduced the two great ideas of Arabic — the triliteral root and the pattern that moulds it — and showed how the script writes the consonants and long vowels while leaving the rest to the reader. This workshop takes those ideas to the workbench. Here you meet the full case system that the unwritten short vowels encode, the plural machinery that is really three systems at once, the dual number, and the verb engine that spins one root into ten interlocking stems. This is the layer where reading stops being decoding and becomes parsing.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Newspapers, novels and street signs are printed without the short vowels, which means the grammar they carry is invisible on the page. A reader who knows i\u2018rab does not need the dots: syntax tells the eye what the vowel would have said. Fluent Arabic reading is not faster letter-recognition — it is constant grammatical inference, and it is trainable.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Arabic marks grammatical role at the end of the word. Nouns take three cases — nominative (raf\u2018, written with a damma), accusative (naṣb, fatha) and genitive (jarr, kasra) — and a noun is definite (with al-, or as the first term of an iḍāfa chain) or indefinite. Indefiniteness adds the tanwīn, a doubled final vowel: kitābun "a book" (nominative), kitāban (accusative), kitābin (genitive). Verbs add a fourth ending-set, the jussive (majzūm), used after lam and for commands. None of this is decoration: in a sentence like kataba l-waladu risālatan "the boy wrote a letter", the -u on the subject and the -an on the object are the only reason you know who wrote what, because word order is free.',
      },
      {
        kind: 'para',
        text: 'The plural is where Arabic earns its reputation. Sound plurals simply attach an ending: sound masculine -ūna/-īna (mu\u2018allimūna "teachers"), sound feminine -āt (mu\u2018allimāt "female teachers"). Broken plurals instead reshape the word around a new pattern: kitāb → kutub "books", rajul → rijāl "men", madīna → mudun "cities". Then there is the dual, -āni (nominative) and -ayni (oblique), for exactly two: kitābāni "two books". A further trap waits in agreement: non-human plurals — cities, books, armies — take feminine singular agreement, so "the two books are long" says the books (feminine singular) is long. Human plurals agree in full.',
      },
      {
        kind: 'para',
        text: 'The verb system runs on two stems. The past stem is cited as the third-person masculine singular: kataba "he wrote". The non-past stem covers present and future: yaktubu "he writes / he will write". Around the non-past sit three moods, marked — again — only on the final short vowel: the indicative (yaktubu), the subjunctive (yaktuba, after an, lan, ḥattā, kay), and the jussive (yaktub, after lam and in negative commands). Negation is tense-sensitive: mā kataba negates the past, lan yaktuba negates the future, and lā yaktubu — with the energetic jussive in classical style — negates the habitual present.',
      },
      {
        kind: 'para',
        text: 'Derived stems are the engine room. From one root you build up to ten verb patterns with predictable meaning shifts. Form I is the plain verb (kataba "write", darasa "study"). Form II doubles the middle consonant and adds intensity or causation: darrasa "teach" (make study). Form III lengthens the first vowel and suggests aiming at someone: kātaba "correspond with". Form IV prefixes a- and is causative: \u2018alima "know" → a\u2018lama "inform". Form V and VI are the reflexive counterparts of II and III (tadarrasa "study intensively", takātaba "exchange letters"). Form VII prefixes in- and gives the middle-passive: inqata\u2018a "be cut off". Form X, istaf\u2018ala, means seeking or deeming: istalam from salima is "receive" (seek safety of), ista\u2018mala is "employ". The prefixes you saw in the dictionary entry were grammar, not decoration.',
      },
      {
        kind: 'para',
        text: 'Two small word families reverse a sentence\u2019s architecture. kāna "to be" and its sisters — aṣbaḥa "become", laysa "not be", and a dozen more — put their predicate in the accusative: kāna l-maṭaru ġazīran "the rain was heavy (accusative)". inna and its sisters — inna "indeed", anna "that", layta "would that" — do the opposite: inna l-maṭara ġazīrun flips the subject into the accusative and leaves the predicate nominative. Between them they account for a startling share of subordinate-clause errors in learner prose, and for the comma-less elegance of classical style: the case endings, not the commas, carry the logic.',
      },
      {
        kind: 'para',
        text: 'Relative clauses complete the toolkit. The relative pronoun alladhī (plural alladhīna, feminine allatī) appears only when the antecedent is definite: al-kitāb alladhī qara\u2018tuhu "the book that I read". Inside the clause a resumptive pronoun must echo the antecedent — the -hu on qara\u2018tuhu. When the antecedent is indefinite, no relative pronoun at all appears: kitābun qara\u2018tuhu "a book I read". The reader\u2019s rule: a definite noun followed immediately by a verb-without-particle is the start of a relative clause.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Parse the phrase kataba l-mu\u2018allimāni risālatin ṭawīlatayni: verb, then two nouns with case endings to recover.',
          'Read the endings: -āni marks a nominative dual (the two teachers = subject); -atin is a genitive-accusative tanwīn singular (a letter = object); -ayni is an oblique dual (long = describing the letter).',
          'Check agreement: the dual verb katabā would agree with the dual subject; non-past of the adjective ṭawīlatāni confirms the letter is the described item.',
          'State the reading: "the two teachers wrote a long letter (dual throughout)" — recovered entirely from endings, with word order doing almost no work.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Reading unvocalized text: news Arabic and street signage omit the short vowels; case knowledge substitutes for the dots.',
        'Dictionary use: Arabic dictionaries sort by triliteral root, so you must strip prefixes (a-, in-, ista-, ya-, ta-, mu-, ma-) before looking anything up.',
        'Editing and translation: agreement errors with non-human plurals are the number-one tell of machine-translated Arabic.',
        'Handwriting and typing: the tanwīn and case vowels you add for learners (fully vocalized school texts, Qur\u2019an editions) are the training wheels this workshop removes.',
        'Language aptitude tests and classical reading: the kāna/inna families and derived stems appear in every paragraph of classical prose.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, expecting one plural system: learners memorize sound plurals, then meet kutub and mudun and conclude the language is lawless — the broken plurals are patterns, and most dictionaries list them. Second, confusing mood triggers: an and lan take the subjunctive, lam takes the jussive; mixing them is the classic intermediate error. Third, assuming iḍāfa means only possession — it also marks specification, as in miṣdāq al-kalimāt "word-for-word true (scale of words)". Fourth, treating dialects as decayed case-less slang: Egyptian and Levantine are regular descendants of Old Arabic with their own consistent grammar; diglossia is a fact to manage, not a fault to fix.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'i\u2018rab', def: 'The case/mood system carried by final short vowels — the invisible grammar of Arabic text.' },
        { term: 'tanwīn', def: 'The doubled final vowel marking an indefinite noun: -un, -an, -in.' },
        { term: 'broken plural', def: 'A plural formed by reshaping the word onto a new pattern: kitāb → kutub.' },
        { term: 'dual', def: 'The -āni/-ayni ending used for exactly two of anything.' },
        { term: 'jussive', def: 'The verb mood after lam and in commands — the apocopated non-past.' },
        { term: 'derived stems', def: 'The ten verb patterns (I–X) built from one root with shifting meanings — causation, intensity, reciprocity, seeking.' },
        { term: 'kāna / inna', def: 'Two sentence-reversing families: kāna puts the predicate in the accusative; inna flips the subject into it.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In kataba l-waladu risālatan, what tells you the letter is the thing written?',
          options: ['Word order — verbs come first', 'The -an ending on risālatan', 'The al- on l-waladu', 'The number of syllables'],
          answer: 1,
          explain: 'The accusative tanwīn (-an) marks the object; Arabic word order is free, so endings, not position, carry the roles.',
        },
        {
          q: 'kutub, rijāl and mudun are examples of…',
          options: ['sound masculine plurals', 'sound feminine plurals', 'broken plurals', 'duals'],
          answer: 2,
          explain: 'They reshape the singular\u2019s pattern instead of attaching an ending — the broken-plural system.',
        },
        {
          q: 'Which particle takes the jussive mood?',
          options: ['an', 'lan', 'lam', 'kay'],
          answer: 2,
          explain: 'lam (negating the past) apocopates the non-past; an, lan and kay take the subjunctive.',
        },
        {
          q: 'darrasa "teach" is which derived stem of darasa "study"?',
          options: ['Form II — doubled middle consonant', 'Form IV — prefixed a-', 'Form VII — prefixed in-', 'Form X — prefixed ista-'],
          answer: 0,
          explain: 'Form II doubles the middle radical and adds intensive/causative meaning: make (someone) study.',
        },
      ] },
    ],
  },
]
