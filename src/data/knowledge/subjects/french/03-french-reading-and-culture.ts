/**
 * Knowledge Universe — French — Chapter 03: French Reading & Culture
 * 1 lesson · ~1,377 words
 * field: French
 * legacy sources: x46-thin-books-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [French Reading & Culture]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 lang-french-reading-francophonie — French Reading and the Francophone World
 */
import type { KnowledgeTopic } from '../../types'

export const frenchCh03: KnowledgeTopic[] = [
  {
    id: 'lang-french-reading-francophonie',
    title: 'French Reading and the Francophone World',
    domain: 'Languages & World Literature',
    field: 'French',
    branch: 'French Reading & Culture',
    tier: 'intermediate' as const,
    concepts: [
      'Cognates: the free vocabulary of French',
      'False friends: actuellement is not “actually”',
      'Connectors as reading signposts',
      'Recognizing verbs on the page',
      'La Francophonie: 88 states and governments',
      'Africa, where French is growing',
    ],
    words: 1377,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The first two lessons of this book gave you pronunciation, the article system and the verb engine. This lesson buys the fastest possible next skill: reading real French — menus, news headlines, song lyrics, Wikipedia stubs — earlier than you think you can. Reading rewards you in a way speaking does not at this stage: the words sit still, you control the pace, and every sentence you decode deposits vocabulary and grammar into memory for free. It also opens the door to the francophone world, which is far larger and far more African than most learners picture.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'French shares the bulk of its learned vocabulary with English, so a reader can start with a working stock of thousands of words on day one — provided they know the sound-shift patterns and the handful of false friends. And French is not one country’s language: the Organisation internationale de la Francophonie counts 88 states and governments, French is official in 29 countries, and the majority of its speakers now live in Africa. Reading is the skill that lets you touch all of it with one alphabet.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Cognates are the free lunch. Centuries of shared Latin and Norman borrowing mean English and French overlap on huge vocabulary islands: nation, université, importance, situation, musique, conventionnel. The trick is recognizing them through French spelling habits. Learned words ending in English -tion are identical in French (information, nation, réaction); -ty arrives as -té (liberté, université, sécurité); -ous often arrives as -eux (dangerous → dangereux, curious → curieux); -al and -able survive almost unchanged (national, formidable, admirable — though formidable means “great” as often as “formidable”). Once the pattern is conscious, a page of French text lights up with words you already own, and the genuinely new vocabulary shrinks to a manageable residue you can mine from context.',
      },
      {
        kind: 'para',
        text: 'False friends are the tax on that free lunch, and a short list covers most accidents. Actuellement means currently, not actually — the honest translation of “actually” is en fait. Attendre is to wait (for), not to attend (that is assister à). Blesser is to wound, not to bless (bénir). Rester is to stay, not to rest (se reposer). Une librairie is a bookshop, not a library (bibliothèque); and sensible means sensitive, not sensible (the French is raisonnable). The rule: when a lookalike word is doing a key job in the sentence, suspect it first, and let the rest of the sentence audition it before you trust it.',
      },
      {
        kind: 'para',
        text: 'Connectors are the signposts that make pages readable. D’abord (first), ensuite (next), puis (then), enfin (finally) sequence an argument; cependant, pourtant and par contre signal contrast (however, yet, on the other hand); donc, alors and c’est pourquoi mark consequence (therefore, so, that is why); c’est-à-dire (that is to say) and par exemple announce restatement and illustration; en fait (in fact) and surtout (above all) flag emphasis. Spotting them converts a wall of prose into a map: every cependant tells you a claim is about to be qualified, every donc that a conclusion is landing. Headlines compress the same logic brutally — French headlines drop articles and the verb être (star française means “a French star”), and use the present tense for the recent past, so “Président démissionne” is a completed event, not a slow-motion one.',
      },
      {
        kind: 'para',
        text: 'Verb recognition turns pages from fog to text. You already own the engine from the verbs lesson; on the page it appears as -er verbs whose third-person plural ends in a silent -ent (ils parlent sounds exactly like il parle — only context and pronouns distinguish them), the passé composé as a two-part stack (a/ont + participle: il a mangé, ils ont fini), and the future often as the infinitive plus a helping ending (je partirai). Two habits finish the job: read pronouns as verb-disambiguators, and when you meet an unfamiliar verb form, subtract the endings you know rather than reaching for the dictionary — French verb tables are regular enough that recognition becomes automatic within a few reading sessions.',
      },
      {
        kind: 'para',
        text: 'Now the world the language opens. The Organisation internationale de la Francophonie — the OIF, founded in 1970 and headquartered in Paris — counts 88 states and governments as members or observers, from France, Canada (Québec is a full participating government), Switzerland and Belgium to Vietnam, Lebanon, Senegal and Côte d’Ivoire. French is an official language in 29 countries, spoken today by roughly 320 million people, and the demographic center of gravity has shifted decisively: well over half of daily French speakers now live in Africa, and demographers project that the coming decades’ growth will be almost entirely African. The Académie française, the language’s self-appointed guardian since 1635, issues rulings that ordinary speakers cheerfully ignore — the living language belongs to Dakar, Montréal and Abidjan as much as to Paris. Reading French with this map in mind changes what you read: news from Ouagadougou and Abidjan, novels from Maghrebi and sub-Saharan writers, and lyrics from Paris rap all belong to the same language you are decoding.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: decode the headline “Le président annonce des mesures contre la pollution; les industriels sont cependant sceptiques.”',
          'Recall the tools: cognates first (président, mesures, pollution, industriels), connectors second (cependant flags contrast), verb recognition last (annonce = announces, sont = are).',
          'Apply it: “The president announces measures against pollution; industry, however, is skeptical.” The headline’s dropped article and present tense read as recent news, not an ongoing ritual.',
          'State the result: one headline decoded in under a minute using pattern knowledge — no dictionary. That is the skill loop: cognates, signposts, verb shapes, repeat.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'News reading: France Info, Radio France Internationale and African outlets like Jeune Afrique run accessible French that rewards the connector-and-cognate method.',
        'Music and film: lyric sheets and subtitles become study material; francophone rap from Paris, Brussels and Kinshasa doubles as demographic and slang fieldwork.',
        'Travel: menus, signs and museum cards across 29 official-language countries decode on sight once false friends are arrested.',
        'Study and research: French remains a working language of diplomacy, law and history; the reading skill unlocks archives and scholarship English ignores.',
        'Career breadth: organizations from the UN to African development banks recruit French readers — the OIF’s 88 members are a hiring map.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Trusting every lookalike is the cardinal error — actuellement, librairie and sensible are the classics that derail comprehension. Reading word by word defeats the purpose: hunt connectors first, then verbs, then fill the frame. Translating headlines literally misleads, because dropped articles and être plus present tense carry information you must reconstruct. Assuming French means France misses the majority of the language’s future — the francophone center of gravity is African. Finally, waiting to “finish grammar” before reading: the method works precisely because reading is grammar practice with rewards attached.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'cognate', def: 'A word shared in recognizable form by two languages through common origin — French -té to English -ty, for example.' },
        { term: 'false friend', def: 'A lookalike word whose meaning has diverged — actuellement means “currently”, not “actually”.' },
        { term: 'connector', def: 'A signpost word sequencing or qualifying discourse — d’abord, cependant, donc, c’est-à-dire.' },
        { term: 'passé composé', def: 'The two-part past tense on the page: auxiliary (a/ont) plus past participle.' },
        { term: 'OIF', def: 'The Organisation internationale de la Francophonie — 88 member and observer states and governments.' },
        { term: 'francophonie', def: 'The community of French speakers worldwide, about 320 million people, with the majority in Africa.' },
        { term: 'Académie française', def: 'The French language academy, est. 1635, guardian of the official dictionary and grammar rulings.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: '“Actuellement” means…',
          options: ['actually, in truth', 'currently, at present', 'actively', 'extremely'],
          answer: 1,
          explain: 'The classic false friend: actuellement is “currently”; “actually” is en fait.',
        },
        {
          q: 'English words ending in -tion usually appear in French as…',
          options: ['-zione', '-tion (identical)', '-té', '-tude'],
          answer: 1,
          explain: 'The learned Latinate suffix survives identically — information, nation, réaction are the same words on both pages.',
        },
        {
          q: 'In a French news headline, the present tense usually signals…',
          options: ['a habitual action', 'a very recent completed event', 'a future plan', 'a command'],
          answer: 1,
          explain: 'Headline French uses the present for the news just past — “démissionne” means “has resigned”.',
        },
        {
          q: 'Today, the majority of the world’s daily French speakers live…',
          options: ['in France', 'in Canada', 'in Africa', 'in Belgium and Switzerland'],
          answer: 2,
          explain: 'The demographic center of the francophonie has shifted to Africa — and projections keep the growth there.',
        },
      ] },
    ],
  },
]
