/**
 * Knowledge Universe — Research Methods — Chapter 02: Experimental Design
 * 1 lesson · ~1,422 words
 * field: Science & Inquiry Skills
 * legacy sources: x21-skills-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Science & Inquiry Skills]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 sci-experimental-design-hypotheses — Experimental Design: Hypotheses, Controls and the Theory Ladder
 */
import type { KnowledgeTopic } from '../../types'

export const researchMethodsCh02: KnowledgeTopic[] = [
  {
    id: 'sci-experimental-design-hypotheses',
    title: 'Experimental Design: Hypotheses, Controls and the Theory Ladder',
    domain: 'Foundation Learning',
    field: 'Science & Inquiry Skills',
    branch: 'Experimental Method',
    tier: 'core',
    concepts: [
      'Hypothesis: testable prediction from a question',
      'Hypothesis versus theory versus law',
      'Independent, dependent and controlled variables',
      'Control groups and the placebo effect',
      'Blinding: single, double and why it matters',
      'Randomisation, replication and blocking',
      'Reliability, validity and sources of error',
      'Falsifiability as the line around science',
    ],
    words: 1422,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'A science experiment is an argument arranged as apparatus. The question becomes a hypothesis — a specific, testable prediction — and the apparatus is designed so that the world itself can say no: one factor is varied, everything else is held fixed or distributed evenly, and a comparison group absorbs every influence except the one under test. This lesson builds that argument from its vocabulary out: the three kinds of variable, the control group and the placebo it receives, the blinding that keeps expectation out of the data, and the statistical backbone — randomisation, replication and blocking — that lets a difference in means count as evidence rather than luck. It closes with the ladder every result climbs: hypothesis, theory, law, and the falsifiability that makes the whole structure scientific.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Science sections test design literacy more than content: given an experiment, identify the variable that was manipulated, the group that was cheated of treatment, the flaw that lets a confounder in. The vocabulary is small, the questions are predictable, and the same words — control, blind, replicate — carry through biology, chemistry, physics and statistics alike.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Hypothesis', def: 'A specific, testable prediction stating an expected relationship between variables — "plants receiving fertiliser X grow taller in four weeks than unfertilised plants." Testable means an observation could in principle prove it wrong; "plants grow best" is too vague to fail, which is exactly its defect.' },
          { term: 'Hypothesis vs theory vs law', def: 'A hypothesis is a single testable prediction. A theory is a broad explanatory framework supported by many independent lines of evidence — it explains why patterns occur. A law describes a pattern, usually mathematically, without explaining its mechanism. Theories do not "graduate" into laws; they do different jobs. Everyday "just a theory" inverts the scientific usage.' },
          { term: 'Independent variable', def: 'The factor the experimenter deliberately varies — the dose, the temperature, the light level. Plotted on the horizontal axis. An experiment with two independently varied factors is factorial; most introductory questions keep one.' },
          { term: 'Dependent variable', def: 'The measured outcome expected to respond to the independent variable — height, reaction time, yield. Everything that could affect it but is not being studied must be controlled or randomised, or it becomes a confounder.' },
          { term: 'Control group', def: 'The comparison group that receives no active treatment — or an inert placebo where expectation itself could act. It anchors the counterfactual: without it, improvement cannot be attributed to the treatment, because untreated groups improve too, sometimes dramatically (regression to the mean).' },
          { term: 'Blinding and placebo', def: 'Single-blind: participants do not know their assignment, killing expectation effects. Double-blind: the experimenters interacting with participants do not know either, killing measurement and treatment bias. The placebo effect is genuine physiology — expectation changes outcomes — which is why the inert comparison is not cruelty but calibration.' },
          { term: 'Randomisation, replication, blocking', def: 'Random assignment distributes every known and unknown nuisance factor evenly between groups. Replication — enough experimental units — lets chance differences average out and gives errors a measurable size. Blocking groups similar units (same soil plot, same litter) so comparisons happen within blocks, removing a known nuisance factor from the noise. A matched-pairs design blocks by pairing each subject with itself: before-and-after, or two treatments in random order.' },
        ],
      },
      {
        kind: 'para',
        text: 'Reliability and validity name the two ways a measurement can disappoint. Reliability is repeatability: the same procedure on the same subject gives the same reading — unreliability shows up as scatter and is fought with replication and better instruments. Validity is truthfulness: the measurement measures the concept it claims to — a questionnaire on "screen time" that forgets phones under-measures, and a study whose only subjects are volunteers of one age has narrow external validity, whatever its internal logic. A result can be perfectly reliable and invalid — a precise reading of the wrong thing — which is why exam questions asking "what is the flaw here?" are usually pointing at a validity hole, not noise.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Auditing a plant-growth experiment',
        steps: [
          'Claim: fertiliser X increases tomato yield. Design so far: 20 plants in a sunny window get X; 20 plants in a dim corridor get nothing; all watered daily.',
          'Independent variable: fertiliser X. Dependent variable: yield. Confounder spotted immediately: light differs between groups — the design cannot attribute any difference to X.',
          'Repair 1 — control group: 20 plants in the SAME sunny window, no fertiliser. Now the comparison isolates X.',
          'Repair 2 — randomisation: assign the 40 window positions to treated/untreated plants by coin flip, so position-in-window, pot history and plant vigour distribute evenly.',
          'Repair 3 — replication and blocking: several trays (blocks) each containing treated and untreated plants, so a tray-level quirk (draft, heater) becomes a between-block difference, not a treatment effect. More plants per group narrows the error bars.',
          'Repair 4 — blinding where possible: whoever measures height records readings for pots labelled only with codes. Measurement stays blind even though gardeners know the assignment.',
          'Falsifiability check: the hypothesis names a direction and a timeframe — if treated plants show no excess yield after four weeks, it is disconfirmed. A hypothesis that accommodates any result was never scientific.',
        ],
      },
      {
        kind: 'para',
        text: 'The theory ladder deserves its honest restatement, because it is the most misused vocabulary in science. Hypotheses are tested; a hypothesis that survives many independent, risky tests becomes part of a theory — an integrated explanation with scope far beyond any single experiment, like germ theory or evolution. Laws summarise what happens under stated conditions — ideal gas behaviour at low pressure — without supplying mechanism. A theory explaining why gas laws hold (molecular motion) is not on a path to become a law; explanation and description are different products. And the boundary of the whole enterprise is falsifiability: a claim arranged so no observation could refute it has left the territory where experiments can adjudicate.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In a drug trial, Group A receives the drug, Group B an identical-looking tablet with no drug. Group B is:',
            options: [
              'the dependent variable',
              'the placebo control group',
              'a confounding variable',
              'the blocking variable',
            ],
            answer: 1,
            explain: 'The inert tablet makes B the placebo control — the anchor for what would happen without treatment, including expectation effects. The dependent variable is the measured outcome, not a group.',
          },
          {
            q: 'A study finds students given a new app score higher — but the app group knew they were receiving the "innovation". The missing safeguard is:',
            options: [
              'replication',
              'blinding (or a placebo-like control condition)',
              'a larger sample',
              'a hypothesis',
            ],
            answer: 1,
            explain: 'Knowledge of assignment is an expectation effect; blinding participants — or giving the comparison group a plausible inert alternative — is the designed remedy. More subjects do not remove expectation bias.',
          },
          {
            q: 'Which statement about theories and laws is correct?',
            options: [
              'A theory becomes a law once enough evidence accumulates',
              'A law explains mechanisms; a theory merely describes',
              'A theory is a broad explanation; a law describes a pattern without explaining it',
              'Laws are hypotheses that survived testing',
            ],
            answer: 2,
            explain: 'The two do different jobs and do not convert into each other. Option 3 is the inverted, incorrect folk version; the rest swap the definitions.',
          },
          {
            q: 'Field plots differ in soil quality across a slope. The design that removes this nuisance factor is:',
            options: [
              'increase the number of plots',
              'block by soil zone — compare treatments only within each zone',
              'use a placebo fertiliser',
              'double-blind the measurements',
            ],
            answer: 1,
            explain: 'Blocking groups similar units so treatment comparisons occur within a soil zone; the zone effect cancels. Replication alone leaves the confounder in place, and blinding addresses bias, not field heterogeneity.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The exam staples: confusing the independent variable (varied) with the dependent one (measured); calling any second group a "control" when it also differs in conditions — the control must differ ONLY in the treatment; reading "failed to reject" as "proved the hypothesis"; and treating correlation between two measured variables as an experiment at all — with no assignment and no manipulation, design vocabulary does not apply. And never say a theory is "just" a hypothesis: the ladder misreading is itself a tested item.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Next: the social-sciences evidence lesson — how causal inference works when experiments are impossible.',
          'Then: Nonverbal Reasoning — the same controlled-comparison instinct applied to figures.',
          'Reference reading: OpenStax Introductory Statistics, Ch. 1 (Sampling and Data — experimental design and ethics).',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A hypothesis is specific and falsifiable; theories explain, laws describe.',
          'One independent variable, one measured outcome, everything else controlled or randomised.',
          'The control group anchors the counterfactual; placebos calibrate expectation.',
          'Blinding removes bias; randomisation, replication and blocking remove noise and known nuisances.',
          'Reliable is not valid: precise measurement of the wrong thing is the classic flaw.',
        ],
      },
    ],
  },
]
