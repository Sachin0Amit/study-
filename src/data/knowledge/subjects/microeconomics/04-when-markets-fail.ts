/**
 * Knowledge Universe — Microeconomics — Chapter 04: When Markets Fail
 * 1 lesson · ~1,326 words
 * field: Microeconomics
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [When Markets Fail]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 econ-market-failures — When Markets Fail: Externalities, Public Goods and Monopoly Power
 */
import type { KnowledgeTopic } from '../../types'

export const microeconomicsCh04: KnowledgeTopic[] = [
  {
    id: 'econ-market-failures',
    title: 'When Markets Fail: Externalities, Public Goods and Monopoly Power',
    domain: 'Business & Economics',
    field: 'Microeconomics',
    branch: 'When Markets Fail',
    tier: 'core',
    concepts: [
      'Externalities: costs and benefits prices omit',
      'Pigouvian taxes and tradable permits',
      'Public goods and the free-rider gap',
      'Monopoly power and deadweight loss',
      'Information asymmetry: markets for lemons',
      'Repairs and their trade-offs',
    ],
    words: 1326,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Price theory promises that self-interested buying and selling marshals resources to their best use. The promise holds only when prices carry all the costs and all the benefits of a transaction. When a smokestack pushes illness onto strangers, when nobody can sell clean air, or when a single seller corners the market, prices lie — and markets misallocate. The study of market failure names these breakdowns and designs the repairs: corrective taxes, tradable permits, public provision, antitrust. Every repair is contested, and every one is a live policy debate.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Climate policy, congestion charges, antitrust cases against technology platforms, tobacco duties, research funding — most consequential economic policy is market-failure repair. You cannot follow the argument without the diagnosis.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'An externality exists when a transaction imposes costs, or confers benefits, on people outside it. The smoker pays for tobacco but not for the asthma downstream; the vaccinated person is never paid for the protection given to neighbours. Because the price omits these spillovers, private cost and social cost part ways: goods with hidden costs are overproduced, goods with hidden benefits underproduced. The divergence is measurable — it is the vertical gap between the two cost curves at every quantity.',
      },
      {
        kind: 'para',
        text: 'The classic repair is a tax equal to the marginal external damage, named for Arthur Pigou: the polluter now faces the true social cost of the last unit and cuts output exactly to where marginal benefit meets it. Cap-and-trade reaches the same point from the other direction by fixing the total quantity and letting the market find the price — permits to emit are auctioned, traded and scarce. Which instrument wins depends on whether the regulator knows the damage per unit or the safe total, and on what can be monitored.',
      },
      {
        kind: 'para',
        text: 'A public good is non-excludable and non-rival — street lighting, national defence, basic science — so nobody can be charged for it and nobody has the incentive to fund it. Free riding makes voluntary markets undersupply it, which is why taxes and public provision step in. The full machinery — collective-action logic, commons regimes, self-governance design — is unpacked in the Social Sciences lesson on collective action; here the point is narrower: this is the second textbook failure of the price signal.',
      },
      {
        kind: 'para',
        text: 'Monopoly fails differently: price is not forced down to marginal cost but held above it. Buyers whose willingness to pay sits between the two would gain from trade, yet the transaction never happens — that unrealised surplus is deadweight loss, a triangle on the demand-and-cost diagram. Monopoly also redistributes: the markup transfers surplus from buyers to the seller. The trade-off is real, because temporary market power is also the prize that rewards risky innovation — the Schumpeterian defence.',
      },
      {
        kind: 'para',
        text: 'The third failure is informational. When one side of a deal knows more than the other, markets can unravel: George Akerlof\'s used-car example showed that if buyers cannot tell lemons from good cars, they offer lemon prices — and good cars quietly withdraw from the market. The same logic prices credit for the young, insurance for mixed risk pools, and labour whose quality is invisible at hiring. Repairs include warranties, disclosure rules and costly signalling — education works partly as a signal that is hard to fake.',
      },
      {
        kind: 'para',
        text: 'The repair toolbox — taxes, permits, public provision, regulation, antitrust — carries its own failure modes: levies set at the wrong level, regulators captured by the industries they police, mandates that ignore compliance costs. The honest conclusion is comparative, not absolute: set the imperfect market outcome beside the imperfect government remedy and choose the smaller error. "Market failure" names a diagnosis; it is not by itself a prescription.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a regional electricity market clears at 10,000 megawatt-hours a day, but each unit from the local coal plants imposes about 30 dollars of health and climate damage on outsiders. What does a corrective tax change, and what was the unpriced pollution costing?',
        'Recall: a Pigouvian tax equal to marginal damage lifts private cost onto social cost; output falls to where marginal benefit equals true cost; the waste from the excess units is the triangle between the two cost curves and demand.',
        'Apply: a 30-dollar-per-megawatt-hour levy moves output from 10,000 to 8,000 — the 2,000 dirtiest hours, worth less to buyers than their full social cost, disappear. The deadweight loss removed is roughly half of 2,000 times 30, about 30,000 dollars a day, and the levy collects 8,000 times 30, or 240,000.',
        'State the result: the gain is not the revenue but the 30,000 a day of destroyed value that no longer happens; the revenue can be rebated, and this same arithmetic underwrites every carbon-pricing scheme in the world.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Carbon pricing: emissions trading systems and carbon taxes are Pigouvian corrections operating at continental scale.',
        'Congestion charges: London and Singapore price the delay each extra car imposes on every other road user.',
        'Antitrust: competition authorities attack monopoly deadweight loss, from Standard Oil to modern platform cases.',
        'Tobacco and alcohol duties: corrective taxes aimed at health costs borne outside the transaction.',
        'Public research funding: governments supply basic science because no one can sell non-excludable knowledge.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The commonest error is treating market failure as automatic justification for intervention: remedies fail too, and the choice is always between two imperfect systems. The second is sloppy tax design — a Pigouvian tax belongs at marginal damage, not at whatever level punishes most. Do not confuse redistribution (the monopoly markup moving surplus to the seller) with deadweight loss (surplus destroyed outright), and remember that some market power is the reward for innovation the law deliberately protects.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'externality', def: 'A cost or benefit of a transaction that falls on people outside it.' },
        { term: 'Pigouvian tax', def: 'A levy set equal to marginal external damage, aligning private cost with social cost.' },
        { term: 'deadweight loss', def: 'Gains from trade that never occur because price diverges from marginal cost.' },
        { term: 'public good', def: 'A good that is non-excludable and non-rival, hence undersupplied by voluntary payment.' },
        { term: 'free rider', def: 'Someone who benefits from a good or effort without contributing to its cost.' },
        { term: 'cap-and-trade', def: 'A quantity-fixed permit system that lets markets discover the price of an externality.' },
        { term: 'information asymmetry', def: 'Situations where one party to a deal knows materially more than the other.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A steel mill pollutes a river without paying for the damage. This is an externality because…',
          options: ['the mill is breaking the law', 'the cost falls on outsiders and is missing from the price', 'steel demand is inelastic', 'the mill has monopoly power'],
          answer: 1,
          explain: 'The signature of an externality is a cost or benefit that escapes the transaction and therefore the price signal.',
        },
        {
          q: 'A Pigouvian tax on pollution should be set equal to…',
          options: ['the highest damage the pollution ever caused', 'the marginal external damage at the efficient output', 'the firm\'s total profit', 'the cost of the cleanest available technology'],
          answer: 1,
          explain: 'Set at marginal damage, the tax makes the polluter face exactly the social cost of the last unit — no more, no less.',
        },
        {
          q: 'Public goods such as street lighting are tax-funded mainly because they are…',
          options: ['expensive to produce', 'non-excludable, so free riders would starve voluntary funding', 'only useful at night', 'produced more cheaply by governments'],
          answer: 1,
          explain: 'Non-excludability means nobody can be charged, so voluntary markets undersupply — taxes solve the funding problem, not the production one.',
        },
        {
          q: 'The deadweight loss of monopoly is…',
          options: ['the monopoly\'s profit', 'the higher price consumers pay', 'gains from trade that never happen because price sits above marginal cost', 'the cost of regulating the monopoly'],
          answer: 2,
          explain: 'Buyers valued the missing units above what they would cost to make; that mutual gain is destroyed, not transferred.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: supply, demand and elasticity — this is the welfare sequel to price theory. Follow with competition policy in depth, the collective-action lesson in Social Sciences for public goods and commons governance, then environmental economics. Exercise: pick one tax in your country and work out which externality, if any, it is pricing.',
      },
    ],
  },
]
