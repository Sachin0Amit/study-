/**
 * Knowledge Universe — Microeconomics — Chapter 05: Behavioral Economics
 * 1 lesson · ~1,331 words
 * field: Behavioral Economics
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Behavioral Economics]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 bus-behavioral-nudges — Nudges and the Psychology of Choosing
 */
import type { KnowledgeTopic } from '../../types'

export const microeconomicsCh05: KnowledgeTopic[] = [
  {
    id: 'bus-behavioral-nudges',
    title: 'Nudges and the Psychology of Choosing',
    domain: 'Business & Economics',
    field: 'Behavioral Economics',
    branch: 'Decision Science',
    tier: 'core',
    concepts: [
      'Two systems: fast and slow',
      'Heuristics and their biases',
      'Framing and loss aversion',
      'Defaults and the status quo',
      'Present bias and hyperbolic discounting',
      'Choice architecture and nudge design',
      'Libertarian paternalism and its critics',
    ],
    words: 1331,
    readMins: 7,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Standard economics pictures a chooser who is rational, consistent and unfooled. Real choosers procrastinate, lose receipts, buy warranties they will never use and forget to enrol in retirement plans that double their money. Behavioral economics studies the gap, and its most practical export is the nudge: a small change in how choices are presented — the default, the order, the wording — that steers decisions without forbidding any of them. Arrange the shelf, and you have already legislated.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Nudges move populations at nearly zero cost. Automatic pension enrolment has raised saving rates by dozens of percentage points; organ-donation defaults swing registration from under 20 to over 90 per cent between neighbouring countries; smaller default plates quietly trim calories. Knowing this toolkit matters twice over — to use it well, and to notice when it is being used on you.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The mind runs two engines. System 1 is fast, automatic, associative and cheap: it reads faces, finishes idioms and flinches at snakes. System 2 is slow, deliberate and effortful: it does arithmetic, compares contracts and plans pensions. The textbook rational agent is System 2 permanently on duty; the reality is a System 2 that is lazy and mostly ratifies System 1’s first draft. Most judgment errors are not stupidity — they are efficient machinery running outside its habitat.',
      },
      {
        kind: 'para',
        text: 'Faced with complexity, people use shortcuts. Availability: judge frequency by how easily examples come to mind — plane crashes feel common because they are filmed. Representativeness: judge probability by resemblance — the quiet, organised person “must be” a librarian. Anchoring: start every estimate from whatever number is on the table. Each heuristic is usually excellent, which is precisely why its failures are systematic and predictable rather than random — and predictable failure is what exploitable means.',
      },
      {
        kind: 'para',
        text: 'Losses loom larger than equivalent gains: losing 50 hurts roughly twice as much as gaining 50 pleases. Hence framing: “90 per cent survival” reassures while “10 per cent mortality” alarms, though the sentences state one fact. Doctors frame surgery, shops frame discounts, subscriptions frame themselves as “only 2 a day”. The demonstration that logically identical descriptions reverse choices is the sharpest single argument against the rational-chooser model — and the most useful tool in the persuader’s kit.',
      },
      {
        kind: 'para',
        text: 'Most choices are never actively made; they are inherited from wherever the setting rests. Changing the default — auto-enrolment in pensions, double-sided printing, vegetables at eye level — therefore changes outcomes while leaving every option open, which is the definition of a nudge. The default is powerful because inattention is normal: it is not that people decide to stay, it is that staying requires no decision at all. The neutral menu is a myth; something must be listed first, pre-ticked and pre-chosen.',
      },
      {
        kind: 'para',
        text: 'People discount the future steeply and unevenly: the pain of waiting two days instead of one looms larger than the gap between a year and a year-and-a-day — hyperbolic rather than exponential discounting. The result is civil war between selves: tonight’s self eats the cake that January’s self must burn. Present bias explains under-saving, procrastinated checkups and unused gym contracts — and it justifies commitment devices: automatic escalation, deadlines, deposits forfeited on relapse.',
      },
      {
        kind: 'para',
        text: 'A choice architect is anyone who designs the context of decision: the enrolment form, the menu, the app’s settings screen. The toolkit is concrete — defaults, ordering, partitioning into smaller packages, reminders, simplified information, pre-commitment, timely feedback. Good architecture adds friction where impulse hurts (cooling-off periods, cart delays) and removes it where the long-term self wants to act. Regulation by design beats regulation by pamphlet because it works with the grain of attention instead of against it.',
      },
      {
        kind: 'para',
        text: 'Nudging’s founding claim is libertarian paternalism: steer people toward welfare while preserving full freedom of choice. The critics are serious. Who decides what “better” is, and by which welfare standard? The same toolkit that enrols savers also sells payday loans; hidden influence bypasses deliberation rather than improving it. The emerging settlement demands transparency, easy opt-outs, democratic authorisation for public nudges — and scrutiny, not resignation, toward private ones.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      { kind: 'formula', name: 'Prospect-theory value function', latex: 'v(x) = x^{\\alpha} \\; (x \\geq 0), \\quad v(x) = -\\lambda\\,(-x)^{\\beta} \\; (x < 0)', meaning: 'Outcomes are coded as gains and losses from a reference point, with diminishing sensitivity (exponents below one) and loss aversion λ typically estimated near 2.25 — losses bite about twice as hard.' },
      { kind: 'formula', name: 'Hyperbolic discounting', latex: 'V = \\dfrac{u}{1 + k\\,d}', meaning: 'A reward u at delay d is discounted with parameter k; because value falls steeply at short delays, the nearer reward can win now while the farther one wins in the abstract — preference reversal.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a firm switches new hires’ pension plan from opt-in to automatic enrolment, keeping the exit door open — why does participation jump, and what does the change cost per worker?',
        'Recall the governing idea: status quo bias plus present bias make the default sticky; inattention means most workers remain wherever they are initially placed.',
        'Apply: under opt-in, enrolling costs effort today for a benefit decades away — classic hyperbolic territory — and participation among new hires ran below 50 per cent in the classic study; with automatic enrolment, the identical plan (same fund, same match, one form to leave) pushed participation above 85 per cent within months.',
        'State the result: the nudge roughly doubled saving participation at essentially zero cost per worker, banning nothing and subsidising nothing — architecture, not incentives, did the work.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Retirement systems: automatic enrolment and auto-escalation are now standard pension design across the world.',
        'Public health: defaults, plate size, placement and simplified labelling shift diets at population scale.',
        'Digital products: onboarding flows, privacy settings and notification defaults are nudge engineering — for better or worse.',
        'Government: behavioural insight teams redesign forms, letters and reminders to raise tax collection and benefit uptake.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The reflexive objection — “just educate people” — collides with inattention: information competes for the very bandwidth the nudge conserves. The real dangers run the other way: dark patterns exploit the identical toolkit, from hidden fees to obstructed cancellation. Effects vary across cultures and shrink as they become familiar, so test rather than assume. And do not confuse a nudge with a mandate: the open exit is definitional — remove it, and you have regulation, with different ethics and different justifications to make.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'System 1 and System 2', def: 'The fast, automatic and the slow, deliberate modes of thinking.' },
        { term: 'loss aversion', def: 'Losses weighing roughly twice as much as equivalent gains in decision weights.' },
        { term: 'framing effect', def: 'Logically equivalent descriptions producing different choices.' },
        { term: 'default effect', def: 'The strong tendency to remain with the pre-set option.' },
        { term: 'hyperbolic discounting', def: 'Steeper discounting of near delays than far ones, causing preference reversal.' },
        { term: 'choice architecture', def: 'The design of the context in which decisions are made.' },
        { term: 'libertarian paternalism', def: 'Steering choices toward welfare while preserving freedom to opt out.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: '“90 per cent survival” versus “10 per cent mortality” describes…',
          options: ['anchoring', 'a framing effect', 'hyperbolic discounting', 'a commitment device'],
          answer: 1,
          explain: 'The two sentences state one fact and yet reverse preferences — the framing effect in its purest form.',
        },
        {
          q: 'A nudge, strictly defined, must…',
          options: ['ban the harmful option', 'steer behaviour while leaving all options open', 'pay people to comply', 'provide more information'],
          answer: 1,
          explain: 'Freedom of choice is definitional: steer, but never forbid — otherwise the policy is a mandate, not a nudge.',
        },
        {
          q: 'Preferring 100 today over 110 tomorrow, but 110 in 366 days over 100 in 365, is…',
          options: ['mere consistency', 'preference reversal driven by present bias', 'loss aversion', 'the default effect'],
          answer: 1,
          explain: 'Hyperbolic discounting makes near rewards disproportionately tempting, so the ranking flips as the horizon shifts.',
        },
        {
          q: 'The loss-aversion coefficient λ estimated in prospect-theory research is typically about…',
          options: ['0.5', '1', '2.25', '10'],
          answer: 2,
          explain: 'Empirical estimates cluster near 2.25 — losses bite roughly twice as hard as gains please.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: basic microeconomics — choice under constraints. Follow with prospect theory in full, time inconsistency and commitment devices, and the design of incentives inside firms. Then audit one app on your phone: count the defaults, notice the framing, and ask whose welfare the architecture serves.',
      },
    ],
  },
]
