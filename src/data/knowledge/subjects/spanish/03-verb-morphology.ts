/**
 * Knowledge Universe — Spanish — Chapter 03: Verb Morphology
 * 1 lesson · ~1,233 words
 * field: Spanish
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Lessons (snapshot at reorganization):
 *   03.1 lang-spanish-verbs — Spanish Verbs: Endings, Boot Verbs and Two Pasts
 */
import type { KnowledgeTopic } from '../../types'

export const spanishCh03: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'lang-spanish-verbs',
    title: 'Spanish Verbs: Endings, Boot Verbs and Two Pasts',
    domain: 'Languages & World Literature',
    field: 'Spanish',
    branch: 'Verb Morphology',
    tier: 'core',
    concepts: [
      'Three infinitive classes: -ar, -er, -ir',
      'Endings that carry person and number',
      'Stem-changing boot verbs: e→ie, o→ue, e→i',
      'Irregular first-person forms: -go, -zco',
      'Preterite versus imperfect aspect',
      'Only -ir verbs stem-change in the preterite',
      'Agreement lives on nouns and adjectives, not verbs',
    ],
    words: 1231,
    readMins: 6,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'The ser/estar lesson handled the two ways to be; this lesson handles everything else — the full Spanish verb engine. Spanish endings do the work pronouns would otherwise do, three infinitive classes organise the system, a beautiful irregularity (the stem-changing “boot verbs”) adds texture, and the language keeps two different past tenses because Spanish grammar insists completed events and ongoing background deserve separate grammar. It is the most regular of the major Romance engines, and its patterns transfer straight to French and Italian later.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Spanish is the second-most-spoken native language on earth, and its verb endings are the difference between hablo (I speak), habló (he/she spoke) and hablaré (I will speak) — three tenses, one letter. Proficiency tests, school curricula and workplace Spanish all drill exactly this machinery.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Regular verbs conjugate by stripping the infinitive ending (-ar, -er, -ir) and adding the person endings. The -ar template (hablar): -o, -as, -a, -amos, -áis, -an. The -er template (comer): -o, -es, -e, -emos, -éis, -en. The -ir template (vivir): same as -er except nosotros/vosotros take -imos/-ís. Because every ending encodes person and number, subject pronouns are optional and usually dropped — como already means “I eat”, and adding yo is for emphasis or contrast, not clarity. This is the load-bearing difference from English: the ending IS the subject.',
      },
      {
        kind: 'para',
        text: 'Boot verbs are the signature irregularity: in certain verbs the stem vowel shifts in all forms except nosotros and vosotros. Plot the changed and unchanged forms on a conjugation table and the changes form a boot shape. Three families: e→ie (pensar → pienso, piensas, piensa, pensamos, pensáis, piensan), o→ue (poder → puedo, puedes, puede, podemos, podéis, pueden), and e→i (pedir → pido, pides, pide, pedimos, pedís, piden), plus the lone u→ue (jugar → juego). The logic: the stress-bearing vowel mutates, and only the weak nosotros/vosotros forms escape. Dozens of high-frequency verbs live here — querer, cerrar, entender, dormir, volver, contar — so the boot is not decoration; it is daily speech.',
      },
      {
        kind: 'para',
        text: 'A second irregularity concentrates in the first person singular: many verbs are regular everywhere except the yo form. The -go family: tener → tengo, hacer → hago (with the silent-h spelling change), salir → salgo, poner → pongo, decir → digo. The -zco family (verbs whose infinitive ends in a vowel + -cer/-cir): conocer → conozco, conducir → conduzco. Learners who memorise the yo-forms separately — tengo, hago, conozco — neutralise most of Spanish’s apparent irregularity in one sitting, because the other five forms stay regular.',
      },
      {
        kind: 'para',
        text: 'Spanish keeps two past tenses, and the choice is aspectual, not temporal. The preterite (hablé, comí, vivió) frames events as completed: bounded, counted, done — fue ayer, “it happened yesterday”. The imperfect (hablaba, comía, vivía) paints background: ongoing, habitual, unbounded — comía todos los días, “I used to eat every day”. The contrast shines in combination: leía cuando sonó el teléfono — “I was reading (background, imperfect) when the phone rang (event, preterite)”. Classic minimal pairs encode worldview: supe (I found out) versus sabía (I knew), pude (I managed to) versus podía (I was able to). Tests drill this relentlessly because no English tense pair maps onto it.',
      },
      {
        kind: 'para',
        text: 'One wrinkle completes the picture: in the preterite, only -ir verbs stem-change, and only in the third-person forms — pedir → pidió, pidieron; dormir → durmió, durmieron — while -ar and -er verbs never do. The system’s regularity is remarkable otherwise: the future and conditional attach whole endings to the entire infinitive (hablaré, comería), and compound habits like ir + a + infinitive (voy a comer) offer the near future with zero new endings. Agreement, meanwhile, stays where the Romance languages put it: gender and number live on nouns and adjectives — the ser/estar lesson’s territory — never on the verb.',
      },
      {
        kind: 'formula',
        name: 'Boot-verb rule',
        latex: '\\text{stem change in: } \\{yo,\\ t\\acute{u},\\ \\acute{e}l,\\ ellos\\} \\qquad \\text{unchanged in: } \\{nosotros,\\ vosotros\\}',
        meaning: 'The stressed stem vowels mutate (e→ie, o→ue, e→i, u→ue) wherever stress falls on the stem; the weak nosotros/vosotros endings pull stress onto the ending, so the stem survives there intact.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: say “I was reading when the phone rang”, choosing between the two past tenses for each verb.',
          'Recall the aspect rule: background, ongoing scene → imperfect; completed, punctual event → preterite.',
          'Apply: leer (ongoing background) → leía; sonar (single completed event) → sonó — and sonar is a boot verb in the present, but -ar verbs never stem-change in the preterite, so it is simply sonó.',
          'State the result: Leía cuando sonó el teléfono — the sentence’s shape is itself the lesson: imperfect paints, preterite acts.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Everyday conversation across twenty-plus countries — the endings do the subject’s job, fast speech drops the pronouns.',
        'Proficiency-test grammar sections: ending tables, boot verbs, and preterite-versus-imperfect narratives are the core drills.',
        'Travel Spanish: past-tense storytelling (what happened, what you needed) runs on the preterite/imperfect pair.',
        'Song lyrics and telenovelas, where aspect shifts (sabía → supe) carry emotional turns.',
        'Learning French or Italian afterward — the -ar/-er/-ir logic maps onto their conjugation classes almost one-to-one.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Pronouncing or writing every pronoun — the endings already say yo, tú, nosotros. Stem-changing in the nosotros/vosotros forms — the boot leaves them alone. Stem-changing an -ar or -er verb in the preterite — only -ir verbs do, and only in él/ellos forms. Treating the two pasts as interchangeable tenses rather than aspects — comí (I ate it) and comía (I used to eat) are different claims about reality. And forgetting the yo-form irregulars (tengo, hago, conozco), which are Spanish’s most common single-letter surprises.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'conjugation class', def: 'The -ar, -er or -ir infinitive ending that sets a verb’s person endings.' },
        { term: 'boot verb', def: 'A stem-changing verb whose mutation covers all forms except nosotros/vosotros, tracing a boot on the table.' },
        { term: 'stem change', def: 'e→ie, o→ue, e→i (and u→ue for jugar) under stress in the present tense.' },
        { term: 'irregular yo form', def: 'A first-person-only surprise: -go (tengo, hago) or -zco (conozco) families.' },
        { term: 'preterite', def: 'The completed-event past: bounded, counted, done.' },
        { term: 'imperfect', def: 'The background past: ongoing, habitual, unbounded.' },
        { term: 'aspect', def: 'The shape an action is given — bounded vs ongoing — as distinct from when it happened.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The correct nosotros form of poder is…',
          options: ['podemos', 'puedemos', 'podéis', 'pueden'],
          answer: 0,
          explain: 'The o→ue boot skips nosotros — stress falls on the ending -emos, so the stem survives: podemos.',
        },
        {
          q: '“He found out yesterday” (saber, completed event) is…',
          options: ['sabía ayer', 'supo ayer', 'sabe ayer', 'supe ayer'],
          answer: 1,
          explain: 'Completed discovery takes the preterite third person: supo. Sabía would mean he already knew (background).',
        },
        {
          q: 'Which verb stem-changes in the preterite third person?',
          options: ['pensar → pensó', 'comer → comió', 'pedir → pidió', 'jugar → jugó'],
          answer: 2,
          explain: 'Only -ir verbs stem-change in the preterite: pedir → pidió. The others stay regular.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: the ser/estar lesson for the two “to be”s and the survival-Spanish lesson for context. Follow with the French verb lesson — sibling Romance logic — and the morphology lesson for the general theory of endings. Grounding texts: Wikibooks’ Spanish grammar (verb chapters) and the stem-changing/past-tense pages of any standard Spanish course.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Three classes — -ar, -er, -ir — with endings that carry person and number, so pronouns are optional.',
        'Boot verbs shift e→ie, o→ue, e→i under stress; nosotros/vosotros escape.',
        'Irregular yo-forms (-go, -zco) are memorisable in one sitting and cover most of the irregularity.',
        'Two pasts by aspect: preterite completes, imperfect paints — leía cuando sonó el teléfono.',
        'Only -ir verbs stem-change in the preterite, and only in él/ellos forms.',
      ] },
    ],
  },
]
