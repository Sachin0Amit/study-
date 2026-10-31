/**
 * Knowledge Universe — Linguistics — Chapter 04: Language Acquisition
 * 1 lesson · ~1,022 words
 * field: Language Acquisition Science
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Language Acquisition Science]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 lang-comprehensible-input — Comprehensible Input and Language Acquisition
 */
import type { KnowledgeTopic } from '../../types'

export const linguisticsCh04: KnowledgeTopic[] = [
  {
    id: 'lang-comprehensible-input',
    title: 'Comprehensible Input and Language Acquisition',
    domain: 'Languages & World Literature',
    field: 'Language Acquisition Science',
    branch: 'Acquisition Theory',
    tier: 'core',
    concepts: [
      'Acquisition versus learning',
      'The input hypothesis and i + 1',
      'The affective filter',
      'The silent period',
      'Extensive reading and listening',
      'Refinements: output, interaction, noticing',
    ],
    words: 1022,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Why can a child be fluent by five without stating a single grammar rule, while adults who memorise rulebooks still freeze mid-sentence? In the 1970s Stephen Krashen answered with the input hypothesis: humans acquire language when they understand messages — messages slightly beyond their current level, “i + 1”. The claim turned acquisition research upside down, and its descendants — immersion classrooms, graded readers, comprehensible-input teaching — now shape how millions study second languages.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Most classroom failure, on this view, is a deficit of intake rather than effort: rules explained in an incomprehensible fog never reach the acquisition device. Learners who know the theory can curate their own input — choosing material they mostly understand — and convert years of study into measurable progress.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Krashen claimed two independent systems: acquisition, the subconscious absorption of language through understood messages, and learning, conscious knowledge of rules. Learned knowledge can serve only as a Monitor — an editor that checks output for errors — and only when there is time, focus on form, and a rule that applies. Fluent performance, he argued, comes from the acquired system alone.',
      },
      {
        kind: 'para',
        text: 'Development is driven by input one step ahead of the learner’s current competence, the “i + 1” of the hypothesis. Comprehension, not production, is the bottleneck: grammatical structure is acquired incidentally when it is carried by messages the learner is busy understanding. The step metaphor resists exact measurement, but its operational core — mostly understandable, a little new — survives in every graded-reader scheme.',
      },
      {
        kind: 'para',
        text: 'Anxiety, boredom and low motivation raise a mental filter that blocks input from being fully processed. Acquisition happens fastest in contexts that are interesting, relevant and low-pressure — which is why conversation about shared passions routinely beats drill, and why fear of mistakes is the classroom’s chief saboteur.',
      },
      {
        kind: 'para',
        text: 'Learners given comprehensible input often go weeks or months producing little while the internal system assembles. Krashen’s advice is not to force early speech; production emerges when readiness does. Forced output, on this view, merely invites the Monitor and raises the filter at the worst possible moment.',
      },
      {
        kind: 'para',
        text: 'The practical engine of the hypothesis is volume: graded readers, podcasts and shows consumed in quantity at ninety-five-per-cent-plus comprehension. Vocabulary research supports the mechanism — words are learned from repeated encounters in varying contexts, and a few hundred hours of understood input grows the known-word count faster than any rule list.',
      },
      {
        kind: 'para',
        text: 'Critics found parts of the theory unfalsifiable and added refinements. Merrill Swain’s output hypothesis argued that producing language forces learners to process syntax they could skate past in comprehension; Michael Long’s interaction hypothesis located growth in negotiated meaning; Richard Schmidt insisted on noticing — some attention to form is needed. The modern consensus: comprehensible input is necessary, and interaction and selective attention accelerate it.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: an intermediate learner wants conversational fluency — should she spend her daily hour on verb drills or on a dubbed series she mostly understands?',
        'Recall the governing ideas: acquisition runs on understood messages at i + 1; the affective filter punishes anxiety; the Monitor needs time and rules and cannot generate fluency.',
        'Apply it: she picks a series where visuals, repetition and known vocabulary let her follow most of the plot, and watches daily; production practice is added later, once comprehension is comfortable and pressure is low.',
        'State the result: after months of consistent input her listening leads and speech emerges unprompted — comprehension outpacing production is the signature of acquisition, not a defect.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Immersion and content-and-language-integrated schooling, where subject matter is taught in the target language.',
        'Extensive-reading programmes built on graded readers with carefully controlled vocabulary.',
        'Media curation: subtitles, replay and speed control as comprehension scaffolds for autonomous learners.',
        'Teacher training in comprehensible-input techniques such as story-listening and TPRS.',
        'Assessment design: comprehension-weighted placement instead of grammar-first testing.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The hypothesis is not “input only”: Krashen never forbade speaking, and forced early production is the error, not output itself. Learners also treat i + 1 as a findable level when it is a rough target — mostly comprehensible, a little new, is the practical test. And comprehensible input is no licence for incomprehensible material: untranslated native-audio podcasts on day one mostly filter out noise.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'comprehensible input', def: 'Language the learner understands, or nearly, carrying new structure incidentally.' },
        { term: 'i + 1', def: 'Input one step beyond current competence, where development is hypothesised to occur.' },
        { term: 'acquisition–learning distinction', def: 'Subconscious pickup from messages versus conscious rule knowledge.' },
        { term: 'Monitor', def: 'The learned system’s limited role as an editor of output.' },
        { term: 'affective filter', def: 'Anxiety and low motivation hypothesised to block intake.' },
        { term: 'silent period', def: 'A stretch of comprehension-before-production typical of natural acquisition.' },
        { term: 'extensive reading', def: 'High-volume reading of easy texts, the main engine of vocabulary growth.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'In Krashen’s notation, “i + 1” refers to…',
          options: ['one hour of study per day', 'input slightly beyond the learner’s current level', 'the first thousand words', 'one new grammar rule at a time'],
          answer: 1,
          explain: 'Structure is acquired when it rides on messages just ahead of current competence — mostly comprehensible, a little new.',
        },
        {
          q: 'According to the Monitor hypothesis, learned grammar knowledge…',
          options: ['generates fluent speech', 'can only edit output when there is time', 'replaces the need for input', 'lowers the affective filter'],
          answer: 1,
          explain: 'The Monitor checks already-generated speech for errors and works only under time, focus and rule availability.',
        },
        {
          q: 'Merrill Swain’s challenge to Krashen was that…',
          options: ['input is unnecessary', 'producing language forces processing that comprehension alone skips', 'adults cannot acquire languages', 'grammar study is the only path'],
          answer: 1,
          explain: 'The output hypothesis holds that speaking and writing push learners to attend to syntax they could ignore while understanding.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'No prerequisites — this is core-tier acquisition science and pays off from day one of any language study. Pair it with vocabulary acquisition and spaced repetition, then move to interactionist and usage-based accounts for the fuller intermediate picture.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Acquisition happens through understanding, not through memorising rules.',
        'Input should be one step ahead: mostly comprehensible, a little new.',
        'Anxiety raises the affective filter and blocks intake.',
        'Expect a silent period — comprehension leads production.',
        'Interaction and output refine what input builds.',
      ] },
    ],
  },
]
