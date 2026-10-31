/**
 * Knowledge Universe — Korean — Chapter 02: Korean Grammar
 * 1 lesson · ~1,298 words
 * field: Korean
 * legacy sources: x49-language-deepening-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Korean Grammar]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 lang-korean-grammar-workshop — Korean Grammar Workshop: Particles, Endings and Irregular Verbs
 */
import type { KnowledgeTopic } from '../../types'

export const koreanCh02: KnowledgeTopic[] = [
  {
    id: 'lang-korean-grammar-workshop',
    title: 'Korean Grammar Workshop: Particles, Endings and Irregular Verbs',
    domain: 'Languages & World Literature',
    field: 'Korean',
    branch: 'Korean Grammar',
    tier: 'core' as const,
    concepts: [
      '은/는 versus 이/가: topic versus subject',
      'The case particle set: 에, 에서, 에게, 도, 의, (으)로',
      'The -시- honorific infix',
      'Tense and modality: 았/었, -(으)ㄹ 것, 겠',
      'Five irregular verb classes',
      'Connectives: -고, -지만, -아서/어서, -(으)면, -(으)니까',
    ],
    words: 1298,
    readMins: 6,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book gave you the frame: Hangul blocks, the verb parked at the end, particles gluing each noun to its job. This workshop installs the machinery inside that frame. Korean does almost nothing with word order and almost everything with endings — so the language lives in the difference between 은 and 이, in the infix that makes a verb polite about a third person, in the five phonological rules that bend stems, and in the connectives that chain clauses without a single conjunction word. Learn the endings and the sentences assemble themselves.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The single most diagnostic error in learner Korean is 은/는 versus 이/가 — even after years of study. It is not politeness, not vocabulary, not speed: it is information structure, and once you hear the difference — given versus new, frame versus focus — both the grammar and the drama of Korean sentences snap into place.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: '은 (는 after a vowel) marks the topic: what the sentence is about, often already known, often contrastive. 이/가 marks the subject: the new information, the answer to an implicit question, the thing being focused. "제가 학생이에요" answers "who here is a student?"; "저는 학생이에요" says "as for me (unlike that other person), I am a student". Both can appear: "그 책은 제가 읽었어요" — "that book, as for it, I (focus) am the one who read it". Topics also chain: start a paragraph with a topic and every following sentence inherits it silently. This is why Korean conversations feel continuous rather than episodic: the frame, once set, holds.',
      },
      {
        kind: 'para',
        text: 'The case set is small and merciless. 을/를 marks the object. 에 marks destination ("to school") and static time points ("at three o\u2019clock"); 에서 marks where an action actually happens ("at the library, studying") and the source ("from Korea"). The difference is the difference between being somewhere and doing something somewhere — 에 있다 (exist at) versus 에서 공부하다 (study at). 에게/한테/께 mark "to" a person, with 께 the honorific. 도 means "also" and often displaces the case particle entirely. 의 is the genitive ("of"). (으)로 means "by means of, with, as, toward" — 버스로 "by bus", 의사로 "as a doctor". And 와/과 (colloquial 하고) is both "and" and "with".',
      },
      {
        kind: 'para',
        text: 'Politeness lives inside the verb, and the crown jewel is the -시- infix: inserting -시- (으시- after a consonant) before the ending honors the subject of the verb. 가다 "go" → 가세요 "goes (honorific)"; 잡수시다 is "eat" honoring the eater. Combined with the ending ladder — 합니다체 (formal), 해요체 (polite, the default of adult strangers), 해체 (intimate) — the verb tells the listener exactly where the speaker locates the relationship. The system is not optional: choosing the wrong level is a grammatical error in Korean in a way choosing an informal register is not in English.',
      },
      {
        kind: 'para',
        text: 'Tense and modality are also endings. 았/었 inserts past: 하다 → 했어요, 가다 → 갔어요, 먹다 → 먹었어요. The future-flavoured -(으)ㄹ 것이다 ("will probably") is literally the future participle of "thing": 갈 거예요 "will go". 겠 adds inference, intention or conditionality: 비가 오겠어요 "it looks like rain". Negation runs through 안 (short form: 안 갔어요 "didn\u2019t go") or -지 않다 (long form: 가지 않았어요), with 못 marking inability ("couldn\u2019t") where 안 marks plain not-doing. The copula 이다 ("to be a…") conjugates like an adjective and, unlike every other verb, attaches directly to its noun: 학생이에요 "am a student".',
      },
      {
        kind: 'para',
        text: 'Five stem-final consonants and vowels bend predictably, and the bending is the irregular system. The ㅂ-irregular softens before vowels: 춥다 "cold" → 추워요, but 곱다 "beautiful" stays regular (고와요 is literary — the point is some ㅂ-stems are regular). The ㄷ-irregular turns to ㄹ before a vowel: 듣다 "listen" → 들어요. The 르-irregular splits into ㄹㄹ: 모르다 "not know" → 몰라요. The ㅡ-irregular drops ㅡ and takes 았/었 on the new final vowel: 바쁘다 "busy" → 바빠요, 쓰다 → 써요. The ㅅ-irregular drops the ㅅ: 짓다 "build" → 지어요. None of this is chaos: each is a phonological rule with a closed class of exceptions, and the exceptions (듣다, 걷다, 묻다 for ㄷ; 낫다, 짓다, 잇다 for ㅅ) are few enough to memorize as lists.',
      },
      {
        kind: 'para',
        text: 'Connectives chain clauses without conjunction words. -고 is plain "and then/and also" (facts in sequence). -지만 is "but". -아서/어서 is "because" with states and "and then" with actions — and it may never carry a command or suggestion: you cannot say "because it\u2019s late, go home" with -아서. -(으)니까 is the "because" that can: commands, suggestions and invitations wait for it. -(으)면 is "if/when", the foundation of every conditional. Master these five and you can say nearly everything a paragraph needs, with the verb still parked firmly at the end of each clause.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Build: "Because it was cold, I stayed home and read a book." Choose connectives first: reason → -(으)니까 (it can chain any clause), then -고 for the action sequence.',
          'Conjugate the reason: 춥다 is ㅂ-irregular → past → 추웠으니까.',
          'Assemble with particles: 집에 있으면서 책을 읽었어요 — destination 에 on 집, object 을 on 책, past tense on both verbs.',
          'Full sentence: 추웠으니까 집에 있으면서 책을 읽었어요 — three endings, zero conjunction words, verb-final throughout.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Texting: the intimate 해체 endings plus 은/는 chains are how group chats actually read.',
        'K-drama and film listening: 해요체 is the default adult register — train your ear by tracking -시- whenever a character is discussed.',
        'News and essays: written Korean (한다체) drops politeness for compression; the same endings carry tense and aspect without the ladder.',
        'Job and visa paperwork: forms use -(으)로 "as/in the capacity of" and plain infinitive stems — the particle set is compliance-critical.',
        'Language exchange: getting 은/는 versus 이/가 right in your self-introduction is the fastest credibility signal you can send.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, mapping 은/는 onto "the" and 이/가 onto "a" — the real contrast is given-versus-new, not definiteness. Second, using 에 for actions: things exist 에 but happen 에서. Third, the -아서 trap: reason with -아서 cannot precede a command; switch to -(으)니까. Fourth, expecting irregulars to be irregular everywhere — they only bend before vowel-initial endings, so 추위 (the noun) and 춥다 (the dictionary form) both keep the ㅂ. Fifth, over-honoring: -시- honors the subject, not the listener; saying 할머니가 께서... 가세요 is right, but you yourself never get -시-.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'topic particle (은/는)', def: 'Marks the sentence\u2019s frame — given, contrastive, chained across sentences.' },
        { term: 'subject particle (이/가)', def: 'Marks new or focused information — the answer to an implicit question.' },
        { term: '-시- infix', def: 'The honorific inserted in verbs to honor the subject — the core of Korean politeness.' },
        { term: 'irregular verb', def: 'A stem class that bends before vowel endings: ㅂ, ㄷ, 르, ㅡ, ㅅ — rules, not exceptions.' },
        { term: 'connective ending', def: 'A verb ending that chains clauses (-고, -지만, -아서/어서, -(으)면, -(으)니까) with no conjunction word.' },
        { term: 'speech level', def: 'The politeness register encoded in every finite verb: 합니다체, 해요체, 해체.' },
        { term: '이다', def: 'The copula "to be a…" — attaches directly to its noun and conjugates like an adjective.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In "그 책은 제가 읽었어요", what does 은 mark on 그 책?',
          options: ['New information', 'The topic — the frame of the sentence', 'The object', 'The destination'],
          answer: 1,
          explain: '은 sets "that book" as the topic; 이/가 on 제가 focuses who did the reading — frame plus focus.',
        },
        {
          q: 'Where does the studying happen — which particle?',
          options: ['도서관에 공부해요', '도서관에서 공부해요', '도서관을 공부해요', '도서관에게 공부해요'],
          answer: 1,
          explain: 'Actions happen 에서; 에 is for destination and static existence.',
        },
        {
          q: 'Which "because" can carry a command or suggestion?',
          options: ['-아서/어서', '-(으)니까', '-고', '-지만'],
          answer: 1,
          explain: 'Only -(으)니까 licenses commands and suggestions in its result clause — the classic -아서 trap.',
        },
        {
          q: '춥다 "be cold" becomes 추워요 because it belongs to which irregular class?',
          options: ['ㄷ-irregular', 'ㅅ-irregular', 'ㅂ-irregular', 'ㅡ-irregular'],
          answer: 2,
          explain: 'The ㅂ softens to 우/오 before vowel endings: 춥다 → 추워요.',
        },
      ] },
    ],
  },
]
