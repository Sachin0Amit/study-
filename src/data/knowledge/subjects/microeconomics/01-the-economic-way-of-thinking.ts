/**
 * Knowledge Universe — Microeconomics — Chapter 01: The Economic Way of Thinking
 * 1 lesson · ~1,639 words
 * field: Foundations of Economics
 * legacy sources: x20-foundations-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Foundations of Economics]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 econ-foundations-methodology — Economic Methodology: Scarcity, Choice and How Economists Approach the World
 */
import type { KnowledgeTopic } from '../../types'

export const microeconomicsCh01: KnowledgeTopic[] = [
  {
    id: 'econ-foundations-methodology',
    title: 'Economic Methodology: Scarcity, Choice and How Economists Approach the World',
    domain: 'Business & Economics',
    field: 'Foundations of Economics',
    branch: 'Methodology & Scarcity',
    tier: 'core',
    concepts: [
      'Scarcity and the economic problem',
      'Opportunity cost as the real price',
      'Factors of production: land, labour, capital, enterprise',
      'The production possibilities frontier',
      'Positive versus normative statements',
      'Ceteris paribus and the role of models',
      'Marginal analysis and sunk costs',
      'Why economists disagree',
    ],
    words: 1639,
    readMins: 8,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Every economics course begins with an uncomfortable fact: wants are unlimited and the means to satisfy them are not. Land, labour, capital and entrepreneurial talent are finite, so no society — and no household — can have everything. This is the economic problem, and it forces a question that prices, politics and prudence all try to answer: what to produce, how, and for whom? Economics is the study of those choices, and its first lesson is that every choice has a cost measured not in money but in the best alternative forgone. This lesson builds the method economists use to study choice — models, assumptions and a strict distinction between what is and what ought to be — before any markets, curves or policies arrive.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Examiners treat this material as the load-bearing wall of the subject: definitions of scarcity, opportunity cost and the frontier reappear inside every later question, from elasticity to development. It is also where the discipline explains itself — why economists use models, why they hold other things equal, and why honest answers so often begin with the phrase "it depends on the assumption".',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Scarcity', def: 'The condition that resources are finite while wants are unlimited. Scarcity is not the same as shortage — a shortage is a market outcome at a given price, while scarcity is the permanent starting point of the subject.' },
          { term: 'Opportunity cost', def: 'The value of the next best alternative sacrificed when a choice is made. The cost of an extra hour of study is the hour of rest given up; the cost of a new motorway is whatever else those funds and crews could have built. Money price is only part of the story.' },
          { term: 'Factors of production', def: 'The scarce inputs every economy combines: land (natural resources, earning rent), labour (human effort and skill, earning wages), capital (produced means of production, earning interest and profit) and enterprise (the risk-bearing that organises the other three, earning profit).' },
          { term: 'Production possibilities frontier (PPF)', def: 'A diagram showing the maximum combinations of two goods an economy can produce with its current resources and technology. Points inside are feasible but wasteful, points on the curve are productively efficient, and points beyond are unreachable without growth.' },
          { term: 'Positive statement', def: 'A claim about what is, testable against evidence: "a rise in the minimum wage reduces teenage employment" can in principle be checked. Positive economics is the territory of data and models.' },
          { term: 'Normative statement', def: 'A claim about what ought to be, carrying a value judgment: "the rich should pay higher taxes" cannot be true or false in the way a fact can. Policy advice mixes both, and spotting the normative residue is a skill examiners explicitly test.' },
          { term: 'Ceteris paribus', def: '"Other things being equal" — the standing assumption that lets a model isolate one relationship at a time. Demand curves slope down, ceteris paribus; if incomes, tastes and rivals\' prices all move at once, no single curve can be read.' },
        ],
      },
      {
        kind: 'para',
        text: 'The frontier makes the economic problem visible. Moving along the PPF from, say, healthcare to education shows opportunity cost as the slope: the first thousand teachers may cost little, because the resources released are poorly suited to healthcare anyway, but each further transfer costs more as increasingly specialised staff and equipment must be reassigned. That rising cost is the law of increasing opportunity cost, and it explains why the frontier bows outward rather than running straight. A straight-line frontier means resources switch at a constant rate — a useful simplification, an unrealistic description. Economic growth appears as the whole curve shifting outward: more resources, better technology or improved institutions move the boundary itself.',
      },
      {
        kind: 'para',
        text: 'The frontier also carries two distinct meanings of efficiency. Productive efficiency means operating on the curve — no more output is possible without sacrificing something else. Allocative efficiency means being at the point on the curve that society most values, which requires information about preferences that the diagram itself does not supply. The distinction matters because an economy can be productively efficient and still produce the wrong mix — missiles and no medicine — which is why the choice question "for whom and what" never reduces to the technical question "how".',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Reading opportunity cost off a frontier',
        steps: [
          'An economy produces only wheat and cloth. At point A it makes 100 tonnes of wheat and 0 metres of cloth; at point B, 90 tonnes of wheat and 20 metres of cloth.',
          'Moving from A to B, gaining 20 metres of cloth costs 10 tonnes of wheat. The opportunity cost of 1 metre of cloth is therefore 0.5 tonnes of wheat.',
          'Moving from B to a point C at 80 tonnes of wheat and 45 metres of cloth, the next 25 metres of cloth cost 10 tonnes of wheat — opportunity cost per metre has fallen to 0.4, so here the frontier is locally flatter.',
          'Now suppose the economy is producing at 100 wheat and 20 cloth. That bundle lies outside the frontier traced by A–B–C: it is unattainable with current resources, and only growth — immigration, investment, better looms — can reach it.',
          'Finally, a minister argues "we should produce more cloth because cloth employment is fairer". Classify: the employment claim is normative; the statement "moving from A to B costs 10 tonnes of wheat" is positive and checkable.',
        ],
      },
      {
        kind: 'para',
        text: 'Method is the quiet half of the topic. Economists cannot run laboratory trials on a whole economy, so they build models — deliberately small machines made of assumptions — and test their predictions against data. Marginal analysis is the workhorse: decisions are compared at the margin, asking whether one more unit adds more benefit than cost, and sunk costs are ignored because they are paid whatever happens. A student who abandons a useless course because the fee is already spent is applying the theory better than one who sits through two more years "to get the money\'s worth". Models are judged not by realism of assumptions but by usefulness of predictions — which is why the same profession can prize a one-factor trade model that no country fits perfectly.',
      },
      {
        kind: 'para',
        text: 'Why do economists disagree? Partly over positive questions — which model fits the data — and partly, more stubbornly, over normative weights: how much to value equality against growth, present against future. Disagreement is not a failure of the discipline but a consequence of its subject matter: human choices under scarcity, where evidence is noisy and values differ. Recognising which half of a disagreement you are watching — facts or weights — is the fastest way to improve any argument about economic policy.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A student gives up a part-time job paying 200 to attend an extra lecture. The direct cost of attending is 10 in travel. What is the opportunity cost of attending?',
            options: ['10', '200', '210', '190'],
            answer: 2,
            explain: 'Opportunity cost is the next best alternative forgone plus any direct costs: the 200 in wages given up plus the 10 in travel, totalling 210. The 200 is not "saved" — it is sacrificed.',
          },
          {
            q: 'Which statement is positive rather than normative?',
            options: [
              'Taxes on sugary drinks should be higher.',
              'A 10% rise in the price of a good reduces quantity demanded, other things equal.',
              'The government ought to spend more on railways than on roads.',
              'Inequality is too high in most economies.',
            ],
            answer: 1,
            explain: 'Only the second is testable against evidence. The others contain "should" and "ought" — value judgments that cannot be confirmed or refuted by data alone.',
          },
          {
            q: 'An economy moves along its bowed-out PPF, producing ever more of one good. Why does opportunity cost rise?',
            options: [
              'Because money wages rise as output grows',
              'Because resources are not equally suited to both goods, so progressively less suitable ones must be switched',
              'Because demand falls as more is produced',
              'Because the frontier shifts inward',
            ],
            answer: 1,
            explain: 'Increasing opportunity cost reflects heterogeneous resources: the first workers transferred to cloth may be weavers, the last may be farmers whose wheat output is very high, so each extra metre of cloth costs more wheat.',
          },
          {
            q: 'A firm has already paid a non-refundable 5,000 for a project. New information says continuing adds 3,000 of value at 4,000 of extra cost. Rational choice is to:',
            options: [
              'continue, to recover the 5,000 already spent',
              'stop, because total costs 9,000 exceed total value 3,000',
              'stop, because the 5,000 is sunk and the marginal cost 4,000 exceeds the marginal benefit 3,000',
              'continue, because stopping admits a mistake',
            ],
            answer: 2,
            explain: 'Sunk costs are irrelevant to the decision at the margin. Compare only the additional benefit (3,000) with the additional cost (4,000). Total-loss accounting, the fallacy behind option B, is exactly the error the topic tests.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Three errors dominate scripts. First, defining opportunity cost as "money paid" — it is the next best alternative forgone, whether or not money changes hands. Second, calling a point inside the PPF "efficient because it is feasible": inside means idle or misallocated resources. Third, treating "should" statements as testable: mixing normative conclusions into positive analysis is precisely the boundary this topic draws, and examiners set questions to catch it.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Next: Supply, Demand and Elasticity — how markets answer the what, how and for whom questions this lesson poses.',
          'Then: the comparative-advantage lesson, which reuses the frontier logic across countries rather than goods.',
          'For policy work: When Markets Fail — where allocative efficiency is the measuring stick applied to real-world breakdowns.',
          'Revision cue: practise converting one-sentence news claims into positive and normative parts.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Scarcity makes choice unavoidable; opportunity cost is the real price of every choice.',
          'The PPF turns those costs into geometry: slope = opportunity cost, bow = increasing cost, shift = growth.',
          'Productive efficiency is being on the frontier; allocative efficiency is being at the point society values most.',
          'Positive claims are testable, normative claims are value judgments; good analysis keeps them labelled.',
          'Models isolate with ceteris paribus, decide at the margin and ignore sunk costs.',
        ],
      },
    ],
  },
]
