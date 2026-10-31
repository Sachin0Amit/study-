/**
 * Knowledge Universe — International Trade — Chapter 01: Trade Theory
 * 1 lesson · ~1,319 words
 * field: International Trade
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Trade Theory]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bus-comparative-advantage — Comparative Advantage and Trade
 */
import type { KnowledgeTopic } from '../../types'

export const internationalTradeCh01: KnowledgeTopic[] = [
  {
    id: 'bus-comparative-advantage',
    title: 'Comparative Advantage and Trade',
    domain: 'Business & Economics',
    field: 'International Trade',
    branch: 'Trade Theory',
    tier: 'intermediate',
    concepts: [
      'Absolute versus comparative advantage',
      'Opportunity cost as the yardstick',
      'The Ricardian model',
      'Gains from trade beyond the frontier',
      'Terms of trade',
      'Beyond the one-factor model',
      'Distribution and adjustment',
    ],
    words: 1319,
    readMins: 7,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'In 1817 David Ricardo proved something counterintuitive: a country gains from trade even when it is worse at making everything. What matters is comparative advantage — producing where one’s opportunity cost is lowest — not absolute superiority. His two-country, two-goods example of English cloth and Portuguese wine launched trade theory, and its logic survives every complication economists have added since: specialise according to relative, not absolute, costs; trade at terms between your self-sufficiency prices; and both sides consume beyond what they could produce alone.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The theory is the strongest argument in economics for exchange — between nations, firms or two housemates — and simultaneously the source of its sharpest caveat: aggregate gains and individual losses coexist. Understanding which claim is which separates trade reasoning from trade sloganising.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Adam Smith’s case for trade was absolute advantage — buy from whoever makes a thing with the fewest inputs. Ricardo’s was subtler: even if Portugal produced both cloth and wine with less labour, each country still gains by specialising where its relative cost is lowest. Comparative advantage is about what you give up, not what you are best at — and because it is defined by relative costs, it cannot simply be lost, only re-priced.',
      },
      {
        kind: 'para',
        text: 'Producing more of one good means producing less of another; that trade-off, not money or hours, is the real price. A country has comparative advantage in the good with the lowest opportunity cost. Crucially, unless two countries’ opportunity costs are identical, each must be relatively better at something — comparative advantage is guaranteed to exist.',
      },
      {
        kind: 'para',
        text: 'The Ricardian model is deliberately tiny: one input (labour), two goods, constant costs. In self-sufficiency each country consumes where it produces; open trade at any world price between the two domestic price ratios shifts both toward specialisation and lets both consume beyond their production frontiers. The model’s simplicity is the point — the gains require nothing but differing opportunity costs.',
      },
      {
        kind: 'para',
        text: 'A production possibilities frontier bounds what a country can make; it does not bound what it can consume once goods can be swapped. Specialisation plus trade pushes the consumption bundle outside the frontier — an apparent free lunch that is really the arithmetic of comparative costs. This is the theorem’s quiet miracle, and the reason it has convinced economists for two centuries.',
      },
      {
        kind: 'para',
        text: 'The export-import price ratio — the terms of trade — determines how the gains are split. If it sits exactly at your own cost ratio you gain nothing; the further it moves toward your partner’s ratio, the more you gain. Small countries trading with large ones typically get better terms, because the world price barely moves when they specialise while the large country absorbs its own price effects.',
      },
      {
        kind: 'para',
        text: 'Real trade is many-good, many-country and factor-based: the Heckscher–Ohlin tradition explains patterns by factor endowments, and new trade theory added scale economies and product variety to explain why similar countries trade similar goods in both directions. Ricardo’s skeleton remains — relative costs still govern — with muscle added on top.',
      },
      {
        kind: 'para',
        text: 'Aggregate gains conceal redistribution: in factor-based models, trade raises the return to the abundant factor and lowers the scarce one, creating identifiable losers even as the total grows. This is the economic core of adjustment-assistance and retraining debates — not whether the country gains, but who is made whole when the pattern of work changes.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      { kind: 'formula', name: 'Opportunity cost of good X', latex: 'OC_X = \\frac{a_{LX}}{a_{LY}}\\ \\text{units of Y}', meaning: 'With a_LX hours needed per unit of X and a_LY hours per unit of Y, one unit of X costs a_LX / a_LY units of Y; the country with the lower OC_X has the comparative advantage in X.' },
      { kind: 'formula', name: 'Mutually beneficial terms of trade', latex: 'OC_X^{A} < T < OC_X^{B}', meaning: 'For country A to sell X to country B, the traded price of X in terms of Y must lie strictly between the two countries’ opportunity costs — each side’s price improves relative to making the good at home.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: in one hour, a worker in country A makes 6 bushels of wheat or 3 metres of cloth; in country B, 2 bushels or 2 metres. Who should export what?',
        'Recall the governing rule: comparative advantage goes to the lower opportunity cost, computed as the units of the other good forgone.',
        'Apply it: A’s wheat costs 0.5 cloth (3 ÷ 6) while B’s costs 1 cloth (2 ÷ 2), so A is the low-cost wheat producer; the ratios reverse for cloth, where A’s costs 2 wheat and B’s costs 1. Trade at, say, 1 wheat = 0.75 cloth sits between 0.5 and 1, beating both domestic ratios.',
        'State the result: A specialises in wheat, B in cloth, and each consumes more of both goods than it could alone — even though A is absolutely better at making both.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Global supply chains: each production stage locates where its opportunity cost is lowest, which is why one product is assembled across many countries.',
        'Trade policy: tariffs push domestic prices back toward self-sufficiency ratios, shrinking the specialisation gains to protect particular jobs.',
        'Team management: assigning tasks by comparative advantage — not by who is fastest at everything — raises total output.',
        'Labour policy: adjustment assistance and retraining exist because the gains and losses of trade land on different people.',
        'Development strategy: economies whose comparative advantage evolves — from garments to electronics — deliberately climb the ladder.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The canonical error is confusing absolute with comparative advantage and concluding “they are better at everything, so we cannot compete” — unless opportunity costs are identical, everyone has a comparative advantage at something. The second is assuming gains are evenly shared within a country; they are not, which is a different argument from the gains not existing. And the one-factor model is a lens, not the world: scale, variety and factor endowments do real work that Ricardo left out.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'absolute advantage', def: 'Producing a good with fewer inputs than another producer.' },
        { term: 'comparative advantage', def: 'Producing a good at lower opportunity cost than another producer.' },
        { term: 'opportunity cost', def: 'The value of the next-best alternative forgone in a choice.' },
        { term: 'autarky', def: 'A closed economy producing and consuming without trade.' },
        { term: 'terms of trade', def: 'The ratio of export prices to import prices.' },
        { term: 'production possibilities frontier', def: 'The set of output combinations an economy can produce with its resources.' },
        { term: 'intra-industry trade', def: 'Two-way trade in similar products, explained by scale economies and variety.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'Country A makes a car with 200 labour-hours and a boat with 100; country B needs 300 hours for a car and 300 for a boat. B has a comparative advantage in…',
          options: ['cars', 'boats', 'both goods', 'neither good'],
          answer: 0,
          explain: 'B’s car costs 1 boat and A’s costs 2 boats, so B is relatively better at cars; A’s boat costs only 0.5 cars, giving A the advantage there.',
        },
        {
          q: 'Ricardo’s original example concerned…',
          options: ['English cloth and Portuguese wine', 'American cars and Japanese electronics', 'French wine and German steel', 'wheat and corn in Prussia'],
          answer: 0,
          explain: 'The 1817 Principles used cloth and wine to show gains from trade despite Portugal’s absolute advantage in both.',
        },
        {
          q: 'Mutually beneficial trade requires the traded price ratio to lie…',
          options: ['below both countries’ opportunity costs', 'above both opportunity costs', 'between the two domestic opportunity costs', 'exactly at the larger country’s cost'],
          answer: 2,
          explain: 'Each side must receive a better price for its export than the cost of making the import at home.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: supply and demand plus the idea of opportunity cost. This is intermediate-tier trade theory: follow with factor endowments in the Heckscher–Ohlin model, the scale economies of new trade theory, and the analysis of tariffs and quotas. Ricardo’s own chapter is short and startlingly readable.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Absolute advantage is about inputs; comparative advantage is about opportunity cost.',
        'Everyone has a comparative advantage unless opportunity costs are identical.',
        'Specialisation plus trade pushes consumption beyond the production frontier.',
        'Terms of trade must lie between the partners’ domestic cost ratios.',
        'Aggregate gains coexist with domestic winners and losers — the adjustment problem.',
      ] },
    ],
  },
]
