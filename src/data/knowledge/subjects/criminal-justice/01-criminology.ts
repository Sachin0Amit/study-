/**
 * Knowledge Universe — Criminal Law & Justice — Chapter 01: Criminology
 * 1 lesson · ~1,366 words
 * field: Criminal Justice
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Criminology]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 crim-theories-of-crime — Criminology: Why People Commit Crime
 */
import type { KnowledgeTopic } from '../../types'

export const criminalJusticeCh01: KnowledgeTopic[] = [
  {
    id: 'crim-theories-of-crime',
    title: 'Criminology: Why People Commit Crime',
    domain: 'Law & Governance',
    field: 'Criminal Justice',
    branch: 'Criminology',
    tier: 'intermediate',
    concepts: [
      'What makes a good theory of crime',
      'Classical school: rational choice and deterrence',
      'Positivism: biology, psychology, and determinism',
      'Chicago School and social disorganization',
      'Merton strain and blocked opportunity',
      'Differential association: crime as learned',
      'Social bonds: what stops most people',
      'The dark figure: measuring what counts',
    ],
    words: 1366,
    readMins: 7,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Laws tell us what crime is; criminology asks why it happens. The question sounds simple and has resisted a simple answer for three centuries, producing a succession of schools — each grabbing one true thread — rational calculation, broken biology, disorganized neighborhoods, blocked ambitions, learned techniques, weak bonds. Policy today is these theories in costume: every sentencing grid, midnight basketball league, and hot-spot patrol descends from some theory of why people offend. Reading the theories is reading the machinery of the justice system itself.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Theory decides lives. A jurisdiction that believes crime is a rational choice writes mandatory minimum sentences; one that believes it is learned invests in mentoring; one that believes it is situational designs better locks and brighter streets. The debates over policing, sentencing, and rehabilitation are downstream arguments about theory — and knowing the theories lets you trace each policy back to its assumptions.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'First, what makes a theory good? A criminological theory must be logical (its claims cohere), testable against data, parsimonious (explaining much with little), and useful for policy. No single theory explains all crime — a shoplifted candy bar and a cartel execution sit in different worlds — so criminology is a toolbox of overlapping accounts, each strongest in its niche.',
      },
      {
        kind: 'para',
        text: 'The classical school, born with Enlightenment reformers like Cesare Beccaria and Jeremy Bentham, made a radical 1764 argument: punishment should be proportionate, public, and swift, because people are rational actors who weigh pleasure against pain. Crime, on this view, is a choice — and the state\'s job is to make the choice unattractive through certain, moderate penalties rather than spectacular cruelty. Modern deterrence theory and routine-activity thinking (crime needs a motivated offender, a suitable target, and an absent guardian) are this school\'s descendants: opportunistic, situational, and design-oriented.',
      },
      {
        kind: 'para',
        text: 'The positivist school answered a century later with a different premise: behavior, like everything else, has causes that science can find. Cesare Lombroso hunted criminal anatomy (a dead end, historically important as the first systematic attempt), while later psychological and sociological positivisms found more durable soil — impulsivity, learning histories, and neighborhood conditions. Positivism\'s lasting gift is empirical method; its cautionary tale is determinism\'s ethical trap, since causes that fully determine behavior sit awkwardly with culpability and punishment.',
      },
      {
        kind: 'para',
        text: 'The Chicago School moved the unit of analysis from the person to the place. Mapping delinquency across 1920s Chicago, its researchers found rates stubbornly high in certain neighborhoods even as the people living there kept changing — pointing at social disorganization: poverty, residential churn, and weak informal networks that cannot supervise teenagers or control public space. Crime, in this account, is a property of neighborhoods in transition, not of the ethnic groups passing through them — an anti-racist finding in its day and the ancestor of today\'s community-crime studies.',
      },
      {
        kind: 'para',
        text: 'Strain theory, from Robert Merton, shifts to blocked ambitions: society sells the American goal of material success to everyone while rationing the legitimate means. People adapt — most conform, some innovate through crime, others retreat or rebel. Crime here is a hole in the opportunity structure, which is why strain-inspired policy means education, jobs, and fair access rather than harsher cells. Learning theories, led by Edwin Sutherland\'s differential association, answer the "how" question: criminal behavior is learned in intimate groups, like any craft — techniques plus motives plus the vocabulary that neutralizes guilt. Control theories flip the question entirely: most people do not offend most of the time, so what holds them? Travis Hirschi\'s social bond — attachment to people, commitment to futures, involvement in activities, belief in rules — predicts offending best by its absence, which is why the strongest correlates of desistance are jobs, partners, and stakes in conformity.',
      },
      {
        kind: 'para',
        text: 'Beneath every theory sits a measurement problem. Official statistics — police records and arrests — count what was reported and enforced, not what happened; victimization surveys dig up the dark figure of unreported crime; self-report studies ask people what they actually did. Each instrument has biases: enforcement concentrates on street crime among the surveilled, while white-collar and corporate harm barely registers. Reading crime data critically — asking which instrument, which population, which enforcement net — is the field\'s entry-level discipline and the antidote to its noisiest public debates.',
      },
      { kind: 'heading', text: 'Key Reference Points' },
      {
        kind: 'list',
        items: [
          'Beccaria (1764): proportionate, certain, swift punishment — the classical charter.',
          'Lombroso (1876): the born-criminal hypothesis — influential, wrong, and the origin of scientific criminology.',
          'Chicago School: crime maps stable in disorganized places despite population turnover.',
          'Merton: shared goals plus unequal means generate strain adaptations, including innovation.',
          'Sutherland: crime is learned in intimate groups — techniques, motives, and rationalizations.',
          'Hirschi: attachment, commitment, involvement, belief — the bonds that keep most people law-abiding.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: a nineteen-year-old with no prior record commits a burglary. Show how four theories would each explain the same event.',
          'Classical lens: he weighed the gain against the chance of being caught — absent guardians and a lax visible risk made the calculus favorable; policy answer: better lighting, locks, and certain response.',
          'Strain lens: he wanted money and status that a stalled labor market would not deliver; policy answer: training and hiring pathways.',
          'Learning and control lenses: older friends modeled the technique and neutralized guilt, while his weak job commitments and thin attachments offered nothing to lose; policy answer: mentoring, structured activity, and building stakes in conformity — each theory true to a slice of the event, none sufficient alone.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Sentencing policy: deterrence logic underpins certainty-based reforms; proportionality arguments trace straight to Beccaria.',
          'Situational prevention: target hardening, lighting, and transit design are routine-activity theory as urban engineering.',
          'Community programs: mentoring and after-school investment are social-bond and strain theory operationalized.',
          'Policing strategy: hot-spot patrol assumes crime concentrates in predictable places — the Chicago School\'s map updated with GPS.',
          'Data literacy: victimization surveys and self-report studies routinely expose the gap between arrests and actual offending.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Ecological findings are not individual ones: a poor neighborhood\'s elevated rate does not mean most residents offend, nor that poverty excuses burglary. Official statistics measure enforcement as much as crime — more arrests in a group can mean more policing, not more offending. And a theory\'s policy does not license its abuse: deterrence has evidence at the margins, but certainty of consequences, not severity alone, does the work — decades of severe-but-uncertain penalties failed that test.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Criminology', def: 'The scientific study of crime, its causes, and its control.' },
          { term: 'Classical school', def: 'Rational-choice account of offending; basis of deterrence and proportionate punishment.' },
          { term: 'Positivism', def: 'The search for measurable causes of crime — biological, psychological, social.' },
          { term: 'Social disorganization', def: 'Weak informal control in churned, poor neighborhoods raising crime rates locally.' },
          { term: 'Strain theory', def: 'Blocked access to success goals generating adaptations, including crime.' },
          { term: 'Differential association', def: 'Criminal behavior learned in intimate groups — technique plus justification.' },
          { term: 'Social bond', def: 'Attachment, commitment, involvement, belief — the ties that prevent offending.' },
          { term: 'Dark figure', def: 'The volume of crime that never enters official statistics.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Beccaria\'s classical school holds that punishment deters best when it is:',
            options: ['As severe as possible', 'Certain and proportionate, more than extreme', 'Random and unpredictable', 'Publicly theatrical'],
            answer: 1,
            explain: 'Certainty and proportionality, not severity, carry deterrence — theatrical cruelty was exactly what the reformers opposed.',
          },
          {
            q: 'The Chicago School\'s key evidence was that neighborhood crime rates stayed high even as residents changed. This supports:',
            options: ['Biological determinism', 'Place-based social disorganization', 'Pure rational choice', 'Strain in individuals'],
            answer: 1,
            explain: 'Stable rates across changing populations point at neighborhood conditions, not the people passing through.',
          },
          {
            q: 'Sutherland\'s differential association explains how someone comes to offend through:',
            options: ['Genetic inheritance', 'Learning techniques and rationalizations in intimate groups', 'Media exposure alone', 'Random opportunity'],
            answer: 1,
            explain: 'Crime is learned like a trade: methods, motives, and the verbalizations that neutralize guilt.',
          },
          {
            q: 'Victimization surveys matter because they reveal:',
            options: ['Who the police arrest', 'The dark figure of crime that official records miss', 'Sentencing disparities', 'Prison populations'],
            answer: 1,
            explain: 'Asking people directly about being victimized exposes the large share of crime that never reaches police statistics.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'The evidence lesson covers how cases are proven once crime occurs; the court-procedure lesson follows the machinery of adjudication; the separation-of-powers lesson explains who writes and revises the criminal law itself. Next: life-course and developmental criminology, white-collar crime, and the evaluation methods behind what-works evidence.',
        tone: 'path',
      },
    ],
  },
]
