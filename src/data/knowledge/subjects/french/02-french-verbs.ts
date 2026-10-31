/**
 * Knowledge Universe — French — Chapter 02: French Verbs
 * 1 lesson · ~1,274 words
 * field: French
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [French Verbs]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 lang-french-verbs — French Verbs: Three Endings, Four Rebels and the Compound Past
 */
import type { KnowledgeTopic } from '../../types'

export const frenchCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'lang-french-verbs',
    title: 'French Verbs: Three Endings, Four Rebels and the Compound Past',
    domain: 'Languages & World Literature',
    field: 'French',
    branch: 'French Verbs',
    tier: 'core',
    concepts: [
      'Three conjugation classes: -er, -ir, -re',
      'The silent-ending pattern of French speech',
      'Four essential irregulars: être, avoir, aller, faire',
      'Negation as a sandwich: ne … pas',
      'Near future: aller + infinitive',
      'Passé composé: auxiliary + past participle',
      'The être-verbs of motion and reflexives',
    ],
    words: 1272,
    readMins: 6,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson gave French its sound and its first phrases; this lesson hands over the engine — the verb system. French endings carry person and number, the ending classes follow three infinitive patterns, a handful of irregular verbs do a disproportionate share of the work, and the main past tense is built by stacking two verbs together. None of it is arbitrary: each pattern recurs across hundreds of verbs, so four or five shapes cover most of everyday speech.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Verb endings are where French learners either converge or stall: they decide whether you are understood as saying “I speak”, “you spoke” or “we will speak” — three different conversations. They are also the backbone of proficiency-exam grammar sections worldwide, from school papers to the CEFR-based tests that gate study and work visas.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Regular verbs split into three classes by infinitive ending. The -er class — parler, manger, donner — is the giant, covering the large majority of French verbs, and it conjugates with one stem and six endings: -e, -es, -e, -ons, -ez, -ent. Notice that four of the six are silent in speech: je parle, tu parles, il parle and ils parlent all sound identical — context and pronouns carry the grammar. The -ir class — finir, choisir, grandir — inserts -iss- in the plural: finis, finis, finit, finissons, finissez, finissent. The -re class — attendre, vendre, répondre — drops the ending entirely in the singular: attends, attend, attend (tu/il forms identical, no -s in the il form), then -ons, -ez, -ent return in the plural.',
      },
      {
        kind: 'para',
        text: 'Four irregulars are worth memorising cold because they double as auxiliary and scaffolding verbs. être (to be): suis, es, est, sommes, êtes, sont. avoir (to have): ai, as, a, avons, avez, ont. aller (to go): vais, vas, va, allons, allez, vont — note the singular forms swap in a v-. faire (to do/make): fais, fais, fait, faisons, faites, font. With these four plus the -er pattern you can already narrate most of a day: je suis fatigué, j’ai un train, je vais au marché, je fais la cuisine.',
      },
      {
        kind: 'para',
        text: 'Negation wraps the verb like a sandwich: ne before the conjugated verb, pas after — je ne parle pas, il n’a pas (the ne drops to n’ before a vowel). In compound tenses the sandwich closes around the auxiliary, not the participle: je n’ai pas parlé. Learners who speak the words but forget the wrapper still communicate; those who master it early avoid relearning later. Related daily grammar: questions by intonation (tu parles ?) or est-ce que, and the near future formed with aller plus an infinitive — je vais parler, “I am going to speak” — which is often the first tense learners actually use, precisely because it needs no new endings.',
      },
      {
        kind: 'para',
        text: 'The default past is the passé composé: a conjugated auxiliary (avoir, occasionally être) plus a past participle. Participles mostly form on the infinitive stem: -er gives -é (parlé), -ir gives -i (fini), and -re gives -u (attendu), with famous short forms — faire → fait, prendre → pris, mettre → mis, dire → dit. With avoir, the participle never agrees with the subject. With être, the participle agrees: elle est allée, ils sont allés. The être auxiliary serves a closed club — movement and change-of-state verbs (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, devenir, and their kin) — plus all reflexive verbs (elle s’est levée). Choosing the wrong auxiliary is the classic learner error, but the club’s membership rule — motion or change of state — makes it predictable.',
      },
      {
        kind: 'para',
        text: 'One more habit breaks English speakers in: French has no present progressive. “I am speaking” is je parle, full stop — the Wikibooks grammar puts it bluntly: the present indicative does the job, and constructions translating “am -ing” word-for-word are wrong. Beyond the two tenses here, the ladder continues: imparfait for habitual or ongoing past description (parlais), futur simple for formal prediction (parlerai), and the subjunctive after expressions of necessity and emotion (il faut que je parle). Each rung reuses the same stem logic, so the -er/-ir/-re patterns learned now keep paying out.',
      },
      {
        kind: 'formula',
        name: 'Passé composé',
        latex: '\\text{passé composé} = \\underbrace{\\text{avoir (default)} \\;|\\; \\text{être (motion/reflexive)}}_{\\text{conjugated, carries negation}} + \\text{participe passé}',
        meaning: 'The auxiliary is conjugated for person and tense and hosts the ne…pas sandwich; the participle follows — agreeing with the subject only when the auxiliary is être.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: build the French for “she did not finish her homework yesterday”, using finir.',
          'Recall the machinery: finir is -ir class; the compound past needs an auxiliary; finir takes avoir; negation wraps the auxiliary.',
          'Apply: participle fini; auxiliary a (elle a); sandwich: n’a … pas; assemble: elle n’a pas fini ses devoirs hier.',
          'State the result: no participle agreement with avoir, the ne…pas hugs the auxiliary, and the time word sits at the end — every rule in one sentence, and the shape transfers to hundreds of -ir verbs.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Everyday narration: emails, postcards and voicemails lean on present, near future and passé composé alone.',
        'Proficiency-exam grammar sections test exactly these patterns: ending choice, auxiliary choice, agreement.',
        'Reading comprehension: recognising participles (fini, pris, fait) unlocks most narrative prose.',
        'Travel logistics: je vais partir, nous sommes arrivés — transport announcements speak in compound pasts.',
        'Recipe and instruction language, where the vous imperative of -er verbs (ajoutez) is a regular-verb ending in disguise.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Sounding out every ending — most singular -er endings are silent, and pronouns carry the distinctions. Using avoir with the motion club (j’ai allé is wrong; je suis allé). Making the avoir-participle agree (elle a fini, never finie for the subject). Translating the English progressive literally. And forgetting that ne…pas wraps the conjugated verb — in compound tenses, that is the auxiliary, not the participle.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'conjugation class', def: 'The infinitive-ending family (-er, -ir, -re) that determines a regular verb’s endings.' },
        { term: 'auxiliary', def: 'The helper verb (avoir or être) conjugated to build the compound past.' },
        { term: 'past participle', def: 'The verb form (-é, -i, -u families plus irregulars) combined with the auxiliary.' },
        { term: 'être-verbs', def: 'The closed set of motion/change-of-state verbs that take être and agree in the compound past.' },
        { term: 'ne … pas', def: 'The two-part negation wrapping the conjugated verb (or auxiliary).' },
        { term: 'near future', def: 'aller + infinitive; the everyday way to express upcoming intentions.' },
        { term: 'imparfait', def: 'The imperfect past, used for habitual, ongoing or descriptive past actions.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'Which verb is conjugated: vous ______ au cinéma (aller)?',
          options: ['allez', 'vont', 'allez-vous', 'allons'],
          answer: 0,
          explain: 'Aller’s plural forms are allons, allez, vont; vous takes allez.',
        },
        {
          q: 'The past of “they (masculine) went out” is…',
          options: ['ils ont sorti', 'ils sont sortis', 'ils ont sortis', 'ils sont sorti'],
          answer: 1,
          explain: 'Sortir belongs to the être club: auxiliary sont, participle sortis agreeing in gender and number.',
        },
        {
          q: 'In elle n’a pas parlé, the ne…pas wraps…',
          options: ['the participle parlé', 'the auxiliary a', 'the subject pronoun', 'nothing — it splits around both verbs'],
          answer: 1,
          explain: 'Negation attaches to the conjugated element, which in compound tenses is the auxiliary.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: the French foundations lesson for sound rules and articles. Follow with the Spanish and German verb lessons to see how sibling Romance and Germanic systems solve the same problems, and the morphology lesson for the general theory of endings. Grounding texts: Wikibooks’ French grammar (verbs chapters) and any standard beginner French course grammar.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Three classes — -er (dominant), -ir (-iss- in plural), -re (bare singular) — six endings each.',
        'Singular -er endings are silent; pronouns do the disambiguating.',
        'être, avoir, aller, faire are the four irregulars that build everything else.',
        'ne … pas sandwiches the conjugated verb; the near future is aller + infinitive.',
        'Passé composé = avoir (default) or être (motion/reflexive) + participle; only être triggers agreement.',
      ] },
    ],
  },
]
