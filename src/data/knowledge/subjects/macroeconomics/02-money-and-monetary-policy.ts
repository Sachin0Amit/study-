/**
 * Knowledge Universe — Macroeconomics — Chapter 02: Money & Monetary Policy
 * 2 lessons · ~3,666 words
 * field: Macroeconomics
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Monetary Economics, Monetary Policy]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 bus-inflation-monetary-policy — Inflation and What Central Banks Actually Do
 *   02.2 econ-monetary-policy-central-banking — Monetary Policy and Central Banking
 */
import type { KnowledgeTopic } from '../../types'

export const macroeconomicsCh02: KnowledgeTopic[] = [
  {
    id: 'bus-inflation-monetary-policy',
    title: 'Inflation and What Central Banks Actually Do',
    domain: 'Business & Economics',
    field: 'Macroeconomics',
    branch: 'Monetary Economics',
    tier: 'intermediate',
    concepts: [
      'What inflation is — and is not',
      'The quantity theory: money behind prices',
      'Demand-pull and cost-push',
      'Expectations and the wage–price spiral',
      'The policy rate and transmission',
      'Independence, credibility and anchoring',
      'The costs of inflation — and of quenching it',
    ],
    words: 1431,
    readMins: 7,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Inflation is a quiet tax on the unprepared: savings shrink, wages chase prices, and contracts written yesterday are repaid in cheaper money. It is also the variable central banks exist to manage — and behind their marble façades the toolkit is surprisingly narrow, mostly a single short-term interest rate. Yet through that one dial they steer the spending of entire economies. This topic explains where inflation comes from, why expectations decide everything, and how a committee moving a quarter-point moves a continent.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Inflation decided the fates of the 1970s, the Weimar Republic and Venezuela, and tamed inflation underwrote four decades of stability until 2021 revived the lesson. Every mortgage, wage negotiation and long-term contract is secretly a bet on what central banks will do next. Reading monetary policy is now a survival skill for households, not just for traders.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Inflation is a sustained rise in the general price level — not one price jumping (avocado frost), not a one-off adjustment, and not the same as “things feel expensive”. It is measured by tracking the cost of a fixed basket of goods and services (the consumer price index) and reporting its growth rate; core measures strip out volatile food and energy to expose the trend. Its mirror, deflation, is in some ways worse: purchases get postponed, debts grow heavier in real terms, and the economy stalls in place.',
      },
      {
        kind: 'para',
        text: 'The oldest identity in macroeconomics says money times its velocity of circulation equals prices times real output. With velocity and output sluggish in the short run, a central bank that doubles the money stock eventually doubles the price level — the monetarist slogan “inflation is always and everywhere a monetary phenomenon” — and every hyperinflation in history has ridden on a printing press. The identity is a map, not a stopwatch: the lags run from months to years, and velocity is not always well behaved.',
      },
      {
        kind: 'para',
        text: 'Two stories explain most episodes. Demand-pull: spending outruns capacity — stimulus, credit booms, war economies — and prices are pulled up by buyers competing for scarce output. Cost-push: input costs rise — energy shocks, failed harvests, collapsing currencies — and sellers push prices up to defend margins. The 2020s delivered both at once: pandemic stimulus met broken supply chains and an energy war. The policy moral differs: rate hikes can cool demand; they cannot grow grain or pump gas.',
      },
      {
        kind: 'para',
        text: 'Modern macro’s central insight is that inflation depends partly on what people expect it to be. Workers who expect 5 per cent demand 5 per cent raises; firms that expect 5 per cent pre-emptively raise prices 5 per cent; the expectation fulfils itself as a wage–price spiral. This is why central banks watch surveys, market breakevens and wage settlements so closely, and why “anchoring” expectations near target is half the victory — won or lost — before a single rate is moved.',
      },
      {
        kind: 'para',
        text: 'The main instrument is the short-term policy rate — the rate at which the central bank lends to banks or pays on their reserves. It transmits through many channels: borrowing costs on mortgages and business loans, asset prices as discount rates rise, exchange rates as capital chases yield, and expectations directly. The chain is long and lagged — a hike today spends most of its force over the following one to two years — so policy must aim at the economy of next year, not this one, which is why it looks either clairvoyant or reckless in real time.',
      },
      {
        kind: 'para',
        text: 'Politicians want low rates before elections; the temptation is structural, not personal. Hence the design: independent central banks with price-stability mandates, insulated appointments and published targets — commonly around 2 per cent — that the public can verify. Credibility is capital. A bank that has earned it can fight inflation with smaller moves, because markets and workers believe the target will hold and adjust expectations for free; a bank that has squandered it must pay in recession.',
      },
      {
        kind: 'para',
        text: 'Moderate inflation greases the wheels: it lets real wages adjust where nominal ones are sticky, and it keeps nominal rates safely above zero. High inflation scrambles price signals, taxes unindexed savings and picks winners and losers at random. But quenching it is not free: the standard medicine — rates held above neutral until demand yields — risks recession and unemployment, the celebrated sacrifice ratio. Monetary policy is a choice among imperfect paths, which is the entire drama of every press conference.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      { kind: 'formula', name: 'Fisher equation', latex: 'i \\approx r + \\pi^{e}', meaning: 'The nominal interest rate equals the real rate plus expected inflation — so a central bank that holds nominal rates steady while inflation rises is actually loosening policy.' },
      { kind: 'formula', name: 'Taylor rule', latex: 'i = r^{*} + \\pi + 0.5\\,(\\pi - \\pi^{*}) + 0.5\\,(y - y^{*})', meaning: 'A benchmark policy rate: the neutral real rate plus inflation, corrected by half the inflation gap and half the output gap — a guide to how assertive policy should be.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: inflation is running at 6 per cent against a 2 per cent target, the neutral real rate is 2 per cent and the output gap is zero — what policy rate does the Taylor rule prescribe, and is the implied stance tight or loose?',
        'Recall the governing idea: the Taylor rule sets the policy rate at the neutral real rate plus current inflation, plus half the inflation gap and half the output gap.',
        'Apply: i = 2 + 6 + 0.5 × (6 − 2) + 0.5 × 0 = 10 per cent. The implied real rate is 10 − 6 = 4 per cent — two full points above the 2 per cent neutral rate.',
        'State the result: the rule prescribes a 10 per cent policy rate — unambiguously restrictive, deliberately braking demand because inflation, not just supply noise, is doing the damage.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Household finance: choosing a fixed versus floating mortgage is an opposite-bets position on the policy path.',
        'Investing: bond yields, breakevens and equity valuations are all downstream of expected policy.',
        'Wage bargaining: multi-year contracts index or anticipate inflation, and expectations then self-fulfil.',
        'Public finance: interest bills on government debt now move with the policy rate, tightening fiscal space.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The commonest confusion is nominal versus real: a 4 per cent return with 5 per cent inflation is a loss, and a nominal rate held constant while inflation rises is a real rate cut — accidental stimulus. Do not treat the money supply as a dial with instant effect: lags are long and variable. Resist the comfort that supply shocks explain everything — central banks cannot lower the price of energy, but they decide whether the shock becomes a permanent inflation regime. And the 2 per cent target is a convention with accidental origins, not a law of nature.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'inflation', def: 'A sustained rise in the general price level, measured as index growth.' },
        { term: 'core inflation', def: 'Index growth excluding volatile food and energy, revealing the underlying trend.' },
        { term: 'policy rate', def: 'The short-term interest rate a central bank sets as its main instrument.' },
        { term: 'real interest rate', def: 'The nominal rate minus inflation — the true cost of borrowing.' },
        { term: 'inflation expectations', def: 'What households, firms and markets forecast for future inflation; the anchor of the whole system.' },
        { term: 'wage–price spiral', def: 'Self-reinforcing indexation of wages and prices to expected inflation.' },
        { term: 'Taylor rule', def: 'A formula prescribing the policy rate from the inflation gap and the output gap.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'If the nominal policy rate is held at 4 per cent while inflation rises from 2 to 6 per cent, the real stance becomes…',
          options: ['tighter', 'looser', 'unchanged', 'undefined'],
          answer: 1,
          explain: 'The real rate falls from about 2 to minus 2 per cent — an accidental loosening, which is the Fisher equation biting.',
        },
        {
          q: 'With velocity and real output fixed, the quantity equation implies that doubling the money stock eventually…',
          options: ['doubles real output', 'doubles the price level', 'halves the price level', 'changes nothing'],
          answer: 1,
          explain: 'Prices must absorb what output and velocity do not, in proportion to the money expansion.',
        },
        {
          q: 'An energy shock raising costs across the economy is…',
          options: ['demand-pull inflation', 'cost-push inflation', 'deflation', 'a velocity shock'],
          answer: 1,
          explain: 'Costs rise first and prices follow to defend margins — classic cost-push; cooling demand only partly helps.',
        },
        {
          q: 'Central banks are given independence and published targets mainly to…',
          options: ['cut their operating costs', 'insulate price stability from electoral cycles', 'increase money growth', 'replace fiscal policy'],
          answer: 1,
          explain: 'Credible independence anchors expectations, making disinflation cheaper in lost output.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: supply and demand, plus comfort with percentages. Follow with the labour market and the Phillips curve, banking and money creation, then fiscal policy and the debt dynamics that constrain it. One live exercise: read an actual central-bank decision statement and identify the diagnosis — demand, supply or expectations.',
      },
    ],
  },
  {
    id: 'econ-monetary-policy-central-banking',
    title: 'Monetary Policy and Central Banking',
    domain: 'Business & Economics',
    field: 'Macroeconomics',
    branch: 'Monetary Policy',
    tier: 'intermediate',
    concepts: [
      'The central bank as bank for banks',
      'The Fed: Board, districts, FOMC',
      'Bank regulation and supervision',
      'Open market operations',
      'Discount rate and reserve requirements',
      'Expansionary versus contractionary policy',
      'Transmission to aggregate demand',
      'Pitfalls: lags, deflation, velocity',
    ],
    words: 2235,
    readMins: 11,
    addedOn: '2026-10-19',
    blocks: [
      { kind: 'para', text: 'Eight times a year, a committee of twelve decides the price of overnight money — and through a chain of consequences, the pace of hiring, the heat of inflation and the monthly payment on every adjustable mortgage in the land. Central banking looks like a temple and works like a plumbing diagram: a "bank for banks" whose classic tools are simple, whose lags are long and whose independence from the governments it serves is deliberate. This lesson covers the institution — the Federal Reserve\'s structure and its counterparts abroad — the toolkit of open market operations, reserve requirements and the discount rate, the expansionary-versus-contractionary logic, the regulation that keeps banks solvent, and the pitfalls that make the job genuinely hard.' },
      { kind: 'callout', title: 'Why this matters', tone: 'insight', text: 'Every recession and every inflation fight of the past fifty years has run through a central-bank decision — the Volcker disinflation, the 2008 rescue, the 2020 dash for liquidity, the post-2021 tightening. You cannot read a financial headline, or a mortgage offer, without the machinery this lesson describes. The inflation lesson in this domain covers what central banks are trying to achieve; this one covers how the machine actually works.' },
      { kind: 'heading', text: 'Core Concepts' },
      { kind: 'para', text: 'The Federal Reserve is a deliberately hybrid institution: government appointees at the top, private-sector banks inside the system. A Board of Governors — seven members appointed by the president and confirmed by the Senate to staggered fourteen-year terms, one expiring every second January — runs the national level; the long, staggered, single terms are engineered to insulate monetary policy from electoral pressure, and the president cannot dismiss a governor the way a cabinet secretary can be dismissed. One governor serves as Chair — Greenspan, then Bernanke, then Yellen, then Powell — first among equals, setting the agenda and serving as the institution\'s public voice. Around the Board sit twelve regional Federal Reserve Banks, each serving its district with directors drawn partly from the commercial banks it oversees. The system does three jobs: conduct monetary policy; promote financial stability; and provide banking services — to banks (reserve accounts, check clearing, emergency loans at the discount window) and to the government, alongside keeping currency circulating and enforcing consumer-protection rules on lenders.' },
      { kind: 'para', text: 'The stability job is bank regulation, whose goal is solvency — keeping net worth positive so depositors are safe. The levers: minimum capital requirements (net worth as a percent of assets), restrictions on risky investments (banks may lend and hold Treasuries, not play the stock market with depositors\' money) and supervision — on-site examinations. In the American division of labor, the Office of the Comptroller of the Currency examines the largest national banks, the NCUA supervises credit unions, and the Fed supervises the holding companies that own banks. Examiners can compel changes or close a bank outright — when they are allowed to: valuing a loan book is genuinely hard, and supervisors face political pressure to go easy, as Japan\'s decade of tolerated zombie banks showed. The deeper defenses against panic are the two the 1930s taught: deposit insurance — in the United States, the FDIC\'s 250,000-dollar guarantee, funded by risk-based premiums on banks — and the lender of last resort, the central bank lending freely to solvent-but-illiquid institutions: the role the Fed was invented for after the Panic of 1907 and used again in the 1987 crash.' },
      { kind: 'para', text: 'The classical toolkit assumes a world where reserves are scarce and banks need to borrow them — and it has three instruments. The workhorse since the 1920s is open market operations: the Fed buys or sells Treasury securities to manage the supply of reserves, targeting the federal funds rate — the rate at which banks lend reserves to one another overnight. Buy 20 million of bonds from a bank and the Fed pays with new reserves, created literally with keystrokes; the bank, now holding more reserves than it wants, lends them out, and the deposit multiplier ripples the expansion through the system. Sell bonds and the film runs in reverse: reserves drain, loans contract, the money supply shrinks. The decisions belong to the Federal Open Market Committee — the seven governors plus the New York Fed president and four district presidents rotating annually — meeting about every six weeks. The second tool is the discount rate, the price of borrowing directly from the Fed\'s window; it is kept deliberately above the federal funds rate so banks borrow from each other first, and its changes are as much signal as mechanics. The third is the reserve requirement, the share of deposits banks must hold back — historically tiered near 10 percent for large banks, too blunt to adjust often, and set to zero in March 2020, when the scarcity assumption itself expired.' },
      { kind: 'para', text: 'Since 2008 the operating environment has been ample reserves rather than scarce. Banks, scarred by the crisis and — by congressional grant — paid interest on their reserve balances, hold trillions at the Fed; the FOMC now steers the federal funds rate administratively rather than by rationing reserves. Raise the interest on reserve balances and banks prefer the Fed\'s floor; lower it and they lend in the overnight market until the target follows. When the policy rate hit the zero lower bound in 2008 — and again in 2020 — the Fed reached past the toolkit for quantitative easing: massive purchases of long-term Treasuries and mortgage-backed securities to press down long-term rates and unfreeze credit, in successive episodes that swelled its balance sheet from roughly 4 trillion dollars before the pandemic past 8 trillion through it.' },
      { kind: 'para', text: 'The direction of travel is set by the state of the economy, and the logic is countercyclical. Expansionary (loose) policy — buying bonds, supplying reserves — lowers interest rates, stimulates business investment and consumer borrowing on houses and cars, and shifts aggregate demand right: the medicine for a recession with output below potential and unemployment high. Contractionary (tight) policy — selling bonds, draining reserves — raises rates, discourages borrowing and shifts demand left: the medicine for inflation when the economy runs above potential. The history is a list of hard calls. The Fed pushed the federal funds rate from 5.5 percent in 1977 to 16.4 percent in 1981 to break double-digit inflation — and bought back-to-back recessions and 9.7 percent unemployment by 1982 before inflation settled near 3 percent. It slashed rates through the early 1990s, tightened into 2000, slashed again after 2001 and 2008 — reaching the zero bound and staying — and cut to near zero within weeks in March 2020. The federal funds rate leads other rates, a point of it moving mortgages by less than a point, because markets price the long end; expectations do half the work, which is the inflation lesson\'s territory.' },
      { kind: 'para', text: 'The pitfalls are structural. Lags: policy works through a chain — perceive, meet, decide, transmit through banks, move investment — whose main effects land one to three years out, so the Fed is always steering by forecast. Pushing on a string: in deep downturns banks may hoard excess reserves and borrowers may refuse cheap credit, blunting expansion — Japan held its policy rate at zero and expanded the money supply by half in the early 2000s while the economy barely stirred. Deflation: with nominal rates stuck at zero, expected deflation raises real rates on its own (7 percent nominal minus 2 percent deflation is a 9 percent real rate), defaults and bank losses follow, and policy cannot cut further — the mechanism that deepened 1930–33 in the United States. Velocity: money\'s turnover ties the money supply to nominal GDP by the identity M × V = P × Y, and V\'s unpredictability since the 1980s is why Friedman\'s constant-money-growth rule was abandoned for interest-rate targeting. Add asset bubbles and leverage cycles — the dot-com and housing episodes a narrow inflation mandate can miss — and the case for humility writes itself: the strongest single lever in macroeconomics, with slack built in.' },
      { kind: 'heading', text: 'The Mathematics' },
      { kind: 'formula', name: 'The money multiplier (textbook leverage)', latex: '\\Delta M = \\frac{1}{rr}\\,\\Delta R', meaning: 'In the scarce-reserves model, each dollar of reserves the Fed injects supports 1/rr of deposits — ten times at a 10 percent requirement. The banking lesson in this domain shows why this is a ceiling, not a dial: capital and loan demand bind first.' },
      { kind: 'formula', name: 'Velocity and the quantity equation', latex: 'V = \\frac{P \\times Y}{M} \\;\\Longleftrightarrow\\; M \\times V = P \\times Y', meaning: 'Money times its turnover equals nominal GDP — the identity linking monetary policy to prices and output, and the reason unstable velocity makes money-growth targets unreliable.' },
      { kind: 'example', title: 'Worked Example — Tracing a Disinflation', steps: [
        'Identify what is asked: inflation runs above 10 percent in 1979–80. What does the central bank do, through what chain, and at what cost?',
        'Recall the governing idea: contractionary policy drains reserves, raises the federal funds rate, discourages interest-sensitive spending, and shifts aggregate demand left — landing on prices and output with a lag of one to three years.',
        'Apply: the FOMC sells securities; the federal funds rate climbs from 5.5 percent (1977) to 16.4 percent (1981). Borrowing for houses, cars and plant investment collapses, demand contracts, and inflation falls from double digits to 3.2 percent by 1983 — while unemployment rises from 5.8 to 9.7 percent through back-to-back recessions.',
        'State the result: the disinflation succeeded, and the measured sacrifice of output and jobs while the policy worked its way through the economy is exactly what economists mean when they warn that credibility and lags — not malice — determine how expensive price stability is.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Reading FOMC statements: the balance of risk language — inflation versus employment — is the countercyclical dial made public.',
        'Household finance: fixed-versus-floating mortgage choice is a bet on the policy path this lesson describes.',
        'Bank compliance: capital rules, investment restrictions and consumer-protection duties are the regulation half of the central bank\'s job description.',
        'Dividing the levers: recessions are fought with both monetary and fiscal policy — the fiscal lesson in this domain covers the spending-and-taxing side and the coordination problems.',
        'Business planning: rate-sensitive sectors — housing, autos, construction — read central-bank calendars the way farmers read weather reports.',
      ] },
      { kind: 'callout', title: 'Common Pitfalls', tone: 'warn', text: 'The Fed does not "set mortgage rates" — it targets an overnight interbank rate, and longer rates follow imperfectly, priced by markets. "Printing money" is not an instant inflation dial: reserves must become loans and loans become spending, and in a slump that chain can kink. Monetary policy is not fiscal policy — no taxes, no spending, just the price and quantity of money and credit (the fiscal lesson has the other lever). Independence is a design choice with a real democratic critique, not a law of nature. And the zero lower bound is real: with deflation, even a zero nominal rate can be a tight real one.' },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'central bank', def: 'The institution that conducts monetary policy, regulates banks and safeguards financial stability — the bank for banks.' },
        { term: 'Board of Governors', def: 'The Fed\'s seven presidentially appointed, Senate-confirmed governors on staggered fourteen-year terms.' },
        { term: 'FOMC', def: 'The Federal Open Market Committee — governors plus rotating district-bank presidents — that sets the policy rate.' },
        { term: 'open market operations', def: 'Central-bank purchases and sales of Treasury securities to manage reserves and steer the federal funds rate.' },
        { term: 'discount rate', def: 'The interest rate banks pay to borrow directly from the central bank\'s window.' },
        { term: 'lender of last resort', def: 'The central bank\'s standby lending to solvent banks in a panic — the 1907 lesson institutionalized.' },
        { term: 'quantitative easing', def: 'Large-scale purchases of long-term bonds and mortgage securities when the policy rate is at zero.' },
        { term: 'federal funds rate', def: 'The overnight rate at which banks lend reserves to one another — the target of policy.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The Fed\'s structure — a Board of Governors with staggered fourteen-year terms plus twelve district banks — is designed mainly to…',
          options: ['collect taxes efficiently', 'blend public authority with regional input while insulating policy from electoral pressure', 'compete with commercial banks', 'print coins'],
          answer: 1,
          explain: 'Long, staggered, single terms and no presidential dismissal are engineering choices for political insulation.',
        },
        {
          q: 'In an open market purchase, the Fed buys bonds from a bank. The immediate effect is…',
          options: ['bank reserves rise, and the federal funds rate tends to fall', 'bank reserves fall', 'the discount rate disappears', 'bank capital doubles'],
          answer: 0,
          explain: 'The Fed pays with newly created reserves; more reserves in the overnight market means a cheaper overnight rate.',
        },
        {
          q: 'The discount rate is kept above the federal funds rate so that…',
          options: ['banks borrow from each other before coming to the Fed\'s window', 'the Fed maximizes profit', 'reserve requirements stay binding', 'inflation rises faster'],
          answer: 0,
          explain: 'The penalty spread makes the discount window a backstop — which is also why discount-rate changes are as much signal as substance.',
        },
        {
          q: 'Facing a recession with output below potential, the countercyclical move is…',
          options: ['contractionary policy to shift demand left', 'expansionary policy — buy bonds, lower rates, shift demand right', 'raising reserve requirements', 'raising the discount rate'],
          answer: 1,
          explain: 'Loose policy stimulates interest-sensitive spending and moves aggregate demand toward potential output.',
        },
        {
          q: 'With the nominal policy rate at zero and deflation running 5 percent, the real interest rate is…',
          options: ['zero', 'minus five percent', 'five percent', 'undefined'],
          answer: 2,
          explain: 'Real = nominal − inflation = 0 − (−5) = +5 percent — the arithmetic trap that makes deflation so hard to fight.',
        },
        {
          q: 'The velocity of money is…',
          options: ['the speed of bank tellers', 'nominal GDP divided by the money supply — how often an average dollar turns over', 'the money multiplier', 'the inflation rate'],
          answer: 1,
          explain: 'In 2009, US nominal GDP of 14.3 trillion against an M1 of 1.7 trillion gave a velocity of 8.4 turns per dollar per year.',
        },
      ] },
    ],
  },
]
