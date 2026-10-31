/**
 * Knowledge Universe — Sociology — Chapter 01: Classical Theory
 * 1 lesson · ~1,071 words
 * field: Sociology
 * legacy sources: social-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Classical Theory]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 soc-durkheim-social-facts-anomie — Durkheim’s Social Facts and Anomie
 */
import type { KnowledgeTopic } from '../../types'

export const sociologyCh01: KnowledgeTopic[] = [
  {
    id: 'soc-durkheim-social-facts-anomie',
    title: 'Durkheim’s Social Facts and Anomie',
    domain: 'Social Sciences',
    field: 'Sociology',
    branch: 'Classical Theory',
    tier: 'intermediate',
    concepts: [
      'Social facts as things',
      'The collective conscience',
      'Mechanical and organic solidarity',
      'Anomie as deregulated desire',
      'Four types of suicide',
      'Explain the social by the social',
    ],
    words: 1071,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Émile Durkheim, France’s first professor of sociology, argued that society is a reality of its own. His “social facts” — ways of acting, thinking and feeling that exist outside the individual and yet constrain them — gave the new discipline its proper object. In Suicide (1897) he demonstrated the method on the starkest individual act imaginable, showing that even self-destruction follows social forces, and named anomie, the pathology of unregulated desire, as a distinctly modern risk.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Durkheim’s move — explaining social outcomes with social causes, and measuring them as rates — still underwrites epidemiology, criminology and education research. Today’s debates about integration, belonging and economic dislocation run on his vocabulary, usually without knowing it.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The Rules of Sociological Method (1895) instructed sociologists to treat social phenomena as things: observable, measurable, and explainable by other social facts rather than by psychology or climate. A social fact is defined by two features — externality, because it predates and outlives the individual, and constraint, because it presses on behaviour regardless of personal preference. Language, currency, legal codes and table manners all qualify.',
      },
      {
        kind: 'para',
        text: 'The Division of Labour (1893) described the shared beliefs and sentiments that hold simple societies together as a collective conscience. Where everyone’s life resembles everyone else’s, agreement about the sacred and the profane needs little enforcement; the group thinks and feels largely as one, and deviation feels like a kind of sacrilege.',
      },
      {
        kind: 'para',
        text: 'As the division of labour deepens, cohesion changes type: from mechanical solidarity, based on sameness, to organic solidarity, based on interdependence. The farmer, the doctor and the railway engineer need one another precisely because they are different. Modern society, on Durkheim’s account, is held together less by shared creeds than by the practical fact that nobody can supply their own life.',
      },
      {
        kind: 'para',
        text: 'Anomie names a condition of deregulation, not of sadness. Norms tell desires where to stop; when they weaken — in booms as much as in crashes, amid sudden wealth as much as sudden loss — aspirations run unlimited and satisfaction becomes structurally impossible. Durkheim saw it as the specific disease of transitional and dislocated periods.',
      },
      {
        kind: 'para',
        text: 'Suicide (1897) sorted the official rates into types by social cause: egoistic, where integration is too weak and people drift from group life; altruistic, where integration is excessive and the self is subordinated to the group; anomic, where regulation collapses; and fatalistic, sketched only in a footnote, where regulation is crushing. His subject was never the individual case but the stable differences in rates between groups and periods.',
      },
      {
        kind: 'para',
        text: 'Durkheim’s methodological rule — the causes of a social fact are prior social facts, and its function is whatever it does for social order — made statistics a sociological instrument. His finding that suicide rates stay steady for a given society even as individuals come and go implies a current beneath the cases, and he treated the rate, not the person, as the datum.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: explain why, in Durkheim’s data, sudden economic prosperity raised suicide rates almost as reliably as bankruptcy did.',
        'Recall the governing idea: anomie is a deficit of regulation, and deregulation is triggered by abrupt change in either direction — not by misery specifically.',
        'Apply it: a boom dissolves the customary ceiling on desire as thoroughly as a crash dissolves the customary floor of security; in both, the norms that once sized ambitions no longer apply.',
        'State the result: the suicide rate rises with the disturbance itself, which is why Durkheim treated prosperity as a social disturbance on par with crisis — regulation, not wealth, is the operative variable.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Public health: suicide-prevention strategies that strengthen community integration and follow-up contact, not only individual therapy.',
        'Economic sociology: studies of lottery winners, mass layoffs and rapid growth that test anomie directly.',
        'Criminology: Robert Merton’s strain theory, which reworked anomie into a gap between cultural goals and legitimate means.',
        'Organisation design: onboarding, codes and rituals as deliberate norm-setting against workplace anomie.',
        'Methods teaching: Durkheim’s use of aggregate rates remains the textbook case for ecological analysis — and for its pitfalls.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The commonest error is translating anomie as personal despair; it is a property of social regulation, measurable only at the level of groups. A second is treating any widespread behaviour as a social fact — the term requires externality and constraint, not mere popularity. Finally, students forget fatalistic suicide, mentioned only in a footnote, and critics rightly note that county-level correlations invite the ecological fallacies later work had to untangle.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'social fact', def: 'A way of acting or thinking, external to the individual and capable of exerting coercive pressure.' },
        { term: 'collective conscience', def: 'The totality of shared beliefs and sentiments common to members of a society.' },
        { term: 'mechanical solidarity', def: 'Cohesion founded on likeness and shared sentiment in simpler societies.' },
        { term: 'organic solidarity', def: 'Cohesion founded on the interdependence created by the division of labour.' },
        { term: 'anomie', def: 'A condition of weakened norms in which desires lose their regulation.' },
        { term: 'egoistic suicide', def: 'Suicide accompanying weak integration of the individual into group life.' },
        { term: 'ecological analysis', def: 'Explaining group-level rates rather than individual cases; Durkheim’s signature method.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'Durkheim defined social facts by which two features?',
          options: ['Wealth and education', 'Externality and constraint', 'Biology and geography', 'Freedom and choice'],
          answer: 1,
          explain: 'A social fact exists prior to and outside the individual (externality) and presses on behaviour regardless of consent (constraint).',
        },
        {
          q: 'A society held together by the interdependence created by the division of labour displays…',
          options: ['mechanical solidarity', 'organic solidarity', 'anomie', 'collective conscience'],
          answer: 1,
          explain: 'Organic solidarity grows from difference and mutual need, in contrast to the likeness-based cohesion of mechanical solidarity.',
        },
        {
          q: 'Which type of suicide corresponds to too little regulation?',
          options: ['Egoistic', 'Altruistic', 'Anomic', 'Fatalistic'],
          answer: 2,
          explain: 'Anomic suicide accompanies deregulated desire — norms no longer bound what people can reasonably want.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: a first exposure to what sociology is for. Read alongside Marx and Weber to see the three classical answers to modernity, then take up Merton’s strain theory and contemporary research on social integration. Durkheim’s Suicide and Rules are readable in translation and reward slow reading at the intermediate tier.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Social facts are external to the individual and coercive; they are sociology’s proper object.',
        'Mechanical solidarity rests on likeness; organic solidarity on interdependence.',
        'Anomie is the disease of unregulated desire, triggered by abrupt change in any direction.',
        'Suicide rates vary with integration and regulation, not merely with individual psychology.',
        'The method: explain social facts with prior social facts, measured as rates.',
      ] },
    ],
  },
]
