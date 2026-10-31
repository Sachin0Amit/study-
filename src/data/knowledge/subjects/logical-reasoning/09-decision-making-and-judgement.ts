/**
 * Knowledge Universe — Logical Reasoning — Chapter 09: Decision Making & Judgement
 * 2 lessons · ~2,552 words
 * fields: Games & Strategy, Professional & Interpersonal Skills
 * legacy sources: everyday-practical.ts, x21-skills-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Situational Judgement, Decision Math]
 *
 * Lessons (snapshot at reorganization):
 *   09.1 sj-situational-judgement — Situational Judgement: Integrity, Perspective Taking and Teamwork
 *   09.2 every-probability-everyday-decisions — Probability for Everyday Decisions
 */
import type { KnowledgeTopic } from '../../types'

export const logicalReasoningCh09: KnowledgeTopic[] = [
  {
    id: 'sj-situational-judgement',
    title: 'Situational Judgement: Integrity, Perspective Taking and Teamwork',
    domain: 'Foundation Learning',
    field: 'Professional & Interpersonal Skills',
    branch: 'Situational Judgement',
    tier: 'intermediate',
    concepts: [
      'Integrity and probity: honesty under pressure',
      'Escalation: when and to whom to raise concerns',
      'Perspective taking: stakes for each party',
      'Patient-centred and client-centred reasoning',
      'Teamwork: roles, handover, communication',
      'Confidentiality and disclosure boundaries',
      'Rating scales: appropriateness versus effectiveness',
      'The accountability-first framework',
    ],
    words: 1466,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Situational judgement tests put you inside a workplace dilemma — a colleague cutting a corner, a distressed client, a task outside your competence — and score the quality of your response. The scenarios change per profession; the tested structure does not. Three values recur: integrity (honesty and probity even when silence is easier), perspective taking (reading the stakes of every party, especially the most vulnerable), and teamwork (clear communication inside the role hierarchy). Across every marking scheme, one pattern sorts good answers from brilliant ones: do what you can at your own level, then escalate through the proper channel — and never let a patient, client or public interest be quietly sacrificed to colleague comfort or your own convenience.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'These items are scored against consensus judgements of experienced professionals, which makes them learnable: the professional consensus follows visible principles, not hidden taste. The same principles govern real workplaces — whether to report a mistake, how to correct a senior colleague, when to say no — so the practice transfers to reference requests, interviews and the first year of any job.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Integrity and probity', def: 'Truthfulness as a default: record events accurately, admit your own errors promptly, never falsify or sign for what you did not verify, and refuse instructions to mislead — even small ones, even from seniors. The marker\u2019s intuition: a small dishonesty tolerated is a large one rehearsed.' },
          { term: 'Escalation ladder', def: 'The canonical best response to a problem beyond your authority: address what is safe at your level, then raise it with the appropriate senior or responsible body, and follow through. Skipping levels, going straight to anonymous public complaint while private channels remain, or doing nothing are all marked down — the ladder has a middle and the middle is where the best answers live.' },
          { term: 'Perspective taking', def: 'Before rating any action, inventory the stakeholders and their stakes: the person affected, their family, colleagues, the institution, the public. The best responses protect the most vulnerable stake first; the worst dismiss someone\u2019s distress as overreaction or trade a client\u2019s interest for team harmony.' },
          { term: 'Patient/client-centred reasoning', def: 'In care-flavoured scenarios, the service user\u2019s welfare and autonomy outrank staff convenience. Explain rather than do unto, check understanding, respect refusals from a competent adult, and never let embarrassment or busyness decide what the person is told.' },
          { term: 'Teamwork and communication', def: 'Good answers communicate early, through the right channel, in the right tone: ask before assuming, delegate to competence rather than convenience, hand over fully (what, status, next step), and correct colleagues privately where possible — publicly only when the risk is immediate.' },
          { term: 'Confidentiality and disclosure', def: 'Information gained in a professional role is not gossip. Share it within the team on a need-to-know basis, with consent where possible, and break it only for defined reasons — imminent serious harm, legal duty, or safety of others — and then through the proper channel, not the group chat.' },
          { term: 'Appropriateness vs effectiveness', def: 'Many schemes rate actions on two axes: appropriateness (is it the right thing — ethics, policy) and effectiveness (does it achieve the aim). Asking a distracted senior for an urgent decision may be effective but inappropriate; documenting a concern and waiting may be appropriate but ineffective at that moment. Top-rated actions usually pair both: act at your level AND escalate, honestly AND kindly.' },
        ],
      },
      {
        kind: 'para',
        text: 'The fastest marking heuristic, confirmed across schemes: look for the option that combines honesty with action. Doing nothing, "staying out of it", and handling it alone beyond your competence are near-universal bottom ratings. Confrontation without proportion, and whistleblowing that skips every internal channel, are near-universal partial marks. Full marks typically belong to responses that protect the affected person now, record the facts accurately, and route the problem to the person whose job it is — in that order.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'One scenario, four responses, four ratings',
        steps: [
          'Scenario: during a busy shift you notice a senior colleague documenting a safety check that you did not see performed. Nothing has gone wrong yet.',
          'Response A: say nothing — the colleague is senior and nothing bad happened. Bottom rating: integrity failure; an unrecorded check is a live risk, and silence leaves no accurate record.',
          'Response B: publicly accuse the colleague of falsifying records in front of the team. Partial: the concern is right, the channel is wrong — disproportionate, damages team function, no accurate account gathered first.',
          'Response C: check the facts (was the check perhaps done before you arrived?), then speak to the colleague privately: "I could not see the check logged as done — can we make sure it is completed and recorded?" If it is resolved and recorded, no further step may be needed. Top rating: honest, proportionate, direct, preserves the team.',
          'Response D: the colleague dismisses the question and the record remains uncompleted. Now escalate to the shift lead, stating facts only. Also top rating — C was correct at its level, and this is correct at the next level: the ladder continues.',
          'The pattern: A fails on integrity, B fails on proportion and channel, C and D pair honesty with the right channel at the right level — the consensus-rated best actions.',
        ],
      },
      {
        kind: 'para',
        text: 'Perspective-taking items reward the same inventory stated as a habit. Before judging any action in a scenario, name the parties and the stakes: the user or client (safety, dignity, information), you (competence, honesty, workload), colleagues (fairness, morale), institution (rules, reputation, risk). Watch for the built-in asymmetry markers: scenarios are written so the cheapest convenient option is usually the one that sacrifices the least powerful party — the tired colleague\u2019s shortcut lands on the patient; the skipped explanation lands on the family. When an option\u2019s cost is borne by someone absent from the conversation, treat that as a flag, and let the response that informs and involves them rise.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'You realise you made a small error in a submitted report. Nobody has noticed. The best-rated action is:',
            options: [
              'wait — if no one notices, no harm done',
              'correct it quietly in the next revision without mention',
              'report the error promptly, state its impact, and propose the correction',
              'mention it casually weeks later in conversation',
            ],
            answer: 2,
            explain: 'Integrity plus action: prompt, honest disclosure with an impact statement and a fix. Silent correction (B) hides a process failure; waiting (A) leaves stakeholders acting on wrong information.',
          },
          {
            q: 'A distressed client asks a question you cannot answer and you are mid-shift alone at the desk. The most appropriate FIRST action:',
            options: [
              'guess an answer to be helpful',
              'acknowledge the question, say you will find out, and contact the responsible colleague or source',
              'tell them no one can help today',
              'research it yourself after your shift',
            ],
            answer: 1,
            explain: 'Honesty about limits plus immediate routing through the proper channel. Guessing violates integrity; deferral without acknowledgment abandons the client.',
          },
          {
            q: 'A colleague consistently misses handover information. Your team\u2019s work is slipping. Best-rated sequence:',
            options: [
              'raise it privately with the colleague, agree a fix, and if it continues, involve the supervisor',
              'report them to the supervisor immediately',
              'compensate silently by doing their part yourself',
              'mention it in the group chat so everyone knows',
            ],
            answer: 0,
            explain: 'The ladder in order: lowest appropriate level first, proportionate and private; escalation only if the problem persists. Immediate reporting is disproportionate; silent compensation conceals a team risk; public shaming damages the team.',
          },
          {
            q: 'An action is rated "appropriate but ineffective" most likely because it:',
            options: [
              'is honest but does not actually resolve or route the problem',
              'breaks a rule to solve the problem',
              'involves the supervisor too early',
              'protects the client at staff expense',
            ],
            answer: 0,
            explain: 'Appropriateness tracks ethics and policy; effectiveness tracks outcome. Documenting-and-waiting is the classic honest-but-inert option — the fix is pairing it with action at your level or the next one.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Five reliable traps: choosing loyalty to colleagues over the affected person — consensus always ranks the vulnerable party first; confusing "not my job" with professional boundaries (boundaries say whom to route to, not whether to care); skipping the private-first conversation; treating confidentiality as absolute when defined safety exceptions exist — and its mirror, breaking it casually; and answering as yourself under exam-day anxiety rather than as the trained professional the scheme assumes. When torn between two options, the one that both protects the person AND keeps an accurate record is nearly always the better rating.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Applying Principles — the same rule-to-case logic in normative form.',
          'Next: the stress and coping lesson — managing your own state is part of professional judgement.',
          'Reference reading: the official situational-judgement test framework and good-medical-practice style guidance published by admissions and regulator bodies.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Integrity first: honest records, prompt disclosure, no small falsities.',
          'Escalate through the ladder: act at your level, then route upward with facts.',
          'Inventory stakeholders; protect the most vulnerable stake first.',
          'Communicate early, privately where possible, completely when handing over.',
          'Pair appropriateness with effectiveness — the top rating does both.',
        ],
      },
    ],
  },
  {
    id: 'every-probability-everyday-decisions',
    title: 'Probability for Everyday Decisions',
    domain: 'Everyday Knowledge',
    field: 'Games & Strategy',
    branch: 'Decision Math',
    tier: 'core',
    concepts: [
      'Expected value: the long-run average',
      'Independence and the gambler\'s fallacy',
      'Base rates before updates',
      'Conditional probability, the plain version',
      'Variance: same expected value, different ride',
      'Law of large numbers and the house edge',
    ],
    words: 1086,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Most of life\'s small bets — warranties, insurance, raffles, lottery tickets — can be priced with one tool: expected value, the probability-weighted average of outcomes. This Games & Strategy topic brings the decision math branch of Everyday Knowledge to bear with the handful of ideas that do the most work: independence (why streaks predict nothing), base rates (why rare-condition test results mislead), variance (why insurance is rational despite negative expected value), and the law of large numbers (why the house always wins eventually). None of it requires formal training; all of it changes decisions.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Expected-value arithmetic exposes extended warranties, raffles, and machines that are due for what they are in seconds. The same ideas protect you from misleading medical headlines and your own pattern-hungry brain.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Multiply each possible outcome by its probability and add: that is the expected value, the long-run average per repetition. A raffle selling 1,000 tickets at $5 for a $3,000 prize has an expected value of $3 per ticket — pay $5, receive $3 on average. Whoever runs the game runs the same arithmetic on the other side of the table.',
      },
      {
        kind: 'para',
        text: 'Independent events carry no memory: after five heads, the next fair flip is still exactly 50% heads. Believing a red streak makes black due is the gambler\'s fallacy, and seeing skill in pure-chance streaks is its mirror, the clustering illusion — roulette wheels take no attendance.',
      },
      {
        kind: 'para',
        text: 'Anchor on how common something is before weighing any evidence. With a condition affecting 1% of people and a test 90% accurate both ways, a positive result still means only about an 8% chance of illness — the small pool of true positives is outnumbered by false positives from the 99%.',
      },
      {
        kind: 'para',
        text: 'The chance you have the disease given a positive test is not the chance of a positive test given the disease — the test\'s accuracy — and conflating the two is called the prosecutor\'s fallacy, after its courtroom appearances. The discipline is the same: start at the base rate, then ask how far the evidence should move you.',
      },
      {
        kind: 'para',
        text: 'Two bets can share an expected value and offer completely different rides. That spread is variance, and it resolves the insurance paradox: insuring a phone is negative-EV and usually skippable, while insuring a house is negative-EV and essential, because a house loss is a variance you cannot absorb.',
      },
      {
        kind: 'para',
        text: 'Averages stabilize only over many repetitions, which is why a casino\'s few-percent edge is a certainty across millions of bets and nothing across your twenty. Every professional game is priced this way — the double-zero pocket gives American roulette a 5.26% edge on even-money bets — and short-run winners are variance wearing a costume.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Expected value',
        latex: '\\mathrm{EV} = \\sum_i p_i \\, x_i',
        meaning: 'Each outcome xᵢ weighted by its probability pᵢ — the long-run average per repetition.',
      },
      {
        kind: 'formula',
        name: 'Independence',
        latex: 'P(A \\cap B) = P(A)\\,P(B)',
        meaning: 'Independent events multiply; knowing one happened tells you nothing about the other.',
      },
      {
        kind: 'formula',
        name: 'Bayes reasoning for a positive test',
        latex: 'P(D \\mid +) = \\frac{P(+ \\mid D)\\,P(D)}{P(+)}',
        meaning: 'Disease probability after a positive equals true positives divided by all positives — the base rate enters through the denominator.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: a store offers an $80 extended warranty on a TV; historical data says 8% of these TVs suffer a covered failure averaging $250 to repair. Is the warranty a good buy?',
          'Recall the governing idea: expected value — price the protection by its probability-weighted payout.',
          'Apply: expected payout of protection = 0.08 × 250 = $20. You pay $80 for an expected $20 back.',
          'State the result: an expected loss of $60 per warranty — the store\'s margin is exactly that gap — so self-insure by banking the $80 in a repairs fund if a $250 surprise would not hurt.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Setting insurance deductibles: raise them once your savings can absorb the variance.',
          'Declining — or selectively accepting — extended warranties and protection plans with priced expected value.',
          'Interpreting screening tests and health headlines with base rates before panic.',
          'Evaluating raffles, lotteries, and casino offers by expected loss per play.',
          'Judging claims of winning systems: ask about the long run and the sample size.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The gambler\'s fallacy and its hot-hand twin are the everyday failure modes — chance has no memory, and small samples are mostly noise. Confusing the two directions of conditional probability misleads patients and juries alike. And applying expected value alone to catastrophic risks is the pseudo-sophisticate\'s error: negative-EV insurance is still correct when the loss would ruin you.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Expected value', def: 'The probability-weighted average of outcomes; the long-run average per repetition.' },
          { term: 'Independence', def: 'When one event\'s occurrence changes nothing about another\'s probability.' },
          { term: 'Base rate', def: 'How common a condition is before considering specific evidence.' },
          { term: 'Conditional probability', def: 'The probability of one event given that another has occurred.' },
          { term: 'Variance', def: 'The spread of outcomes around the expected value — the size of the ride.' },
          { term: 'Law of large numbers', def: 'Averages converge to expected values as repetitions grow.' },
          { term: 'House edge', def: 'The built-in expected-loss percentage a game assigns to players.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A fair coin lands heads five times in a row. The chance the next flip is heads:',
            options: ['Higher — heads is hot', 'Exactly 50%', 'Lower — tails is due', 'Depends on how it is flipped'],
            answer: 1,
            explain: 'Independent events have no memory; every fair flip is 50/50.',
          },
          {
            q: 'A raffle sells 500 tickets at $10 each for a single $2,500 prize. Expected value per ticket:',
            options: ['$5 — a net gain', '$5 payout per $10 ticket — an expected loss of $5', '$2,500', 'Exactly zero'],
            answer: 1,
            explain: 'EV = 2,500 × (1/500) = $5, so each $10 ticket expects to lose $5.',
          },
          {
            q: 'A disease affects 1% of people; a test is 90% accurate both ways. Given a positive result, the chance of disease is about:',
            options: ['90%', '50%', '8%', '99%'],
            answer: 2,
            explain: 'True positives (0.9% of everyone) against all positives (0.9% + 9.9%) gives about 8% — base rates dominate.',
          },
          {
            q: 'Insurance typically has negative expected value, yet buying it can be rational because:',
            options: ['Expected value is wrong as a concept', 'It transfers catastrophic variance you could not absorb', 'Insurers lose money on claims', 'Premiums are tax-deductible everywhere'],
            answer: 1,
            explain: 'For ruin-sized losses, reducing variance is worth paying a premium above expected cost.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisite: comfortable percentages and fractions. Next: counting principles and combinatorics, then Bayesian updating formally, then introductory game theory.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Expected value = sum of probability × outcome; price every bet.',
          'Independent events have no memory — streaks predict nothing.',
          'Always anchor on the base rate before updating.',
          'Variance, not just expected value, decides what to insure.',
          'The law of large numbers guarantees the house; the short run is luck.',
        ],
      },
    ],
  },
]
