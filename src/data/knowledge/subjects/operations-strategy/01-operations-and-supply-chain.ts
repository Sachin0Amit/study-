/**
 * Knowledge Universe — Operations, Strategy & Supply Chain — Chapter 01: Operations & Supply Chain
 * 2 lessons · ~3,266 words
 * field: Operations & Supply Chain
 * legacy sources: business-economics.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Operations & Supply Chain]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 ops-inventory-bullwhip-lean — Inventory, Logistics and the Bullwhip Effect
 *   01.2 ops-project-management — Project Management: Scope, Time and Cost
 */
import type { KnowledgeTopic } from '../../types'

export const operationsStrategyCh01: KnowledgeTopic[] = [
  {
    id: "ops-inventory-bullwhip-lean",
    title: "Inventory, Logistics and the Bullwhip Effect",
    domain: "Business & Economics",
    field: "Operations & Supply Chain",
    branch: "Running the Firm",
    tier: "core",
    concepts: [
      "Inventory as a buffer between rates",
      "The economic order quantity",
      "Safety stock and service levels",
      "The bullwhip effect and its four causes",
      "Lean manufacturing and the seven wastes",
      "Logistics networks and risk pooling",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A factory that runs out of one component stops; a shop that runs out of a bestseller loses the sale to a rival; a warehouse stacked with unsold stock is cash quietly rotting. Operations management — the discipline of turning inputs into outputs reliably, again and again — lives in the gap between those failures, and inventory is its central tension: every unit held is insurance against uncertainty and a cost that never sleeps. Logistics moves the buffers around; lean manufacturing tries to shrink them; and the bullwhip effect explains why, left alone, they scream. This lesson is the machinery behind every shelf you have ever seen empty — and every full one somebody is paying to hold.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Supply chains became headline news in 2020–22 when chips, ships and containers all vanished at once, and managers rediscovered what operations researchers had formalised over sixty years: buffers, batching and delays interact in predictable — and fixable — ways. Whether you run a bakery or only read business news, the economic order quantity, safety stock and the bullwhip effect explain the empty shelf, the full warehouse, and the difference between the two.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Operations management treats a firm as a system of flows — materials, information and money — rather than a box of separate decisions. Inventory comes in four flavours: cycle stock (ordered in batches to exploit economies of scale), safety stock (held against demand and lead-time surprises), pipeline stock (moving on trucks and ships — often half the total), and anticipation stock (built ahead of a known peak, like fireworks before July). Each exists because supply and demand, at some point in the chain, do not arrive at the same rate.",
      },
      {
        kind: "para",
        text: "The oldest quantitative answer in the field is the economic order quantity, published by Ford Harris in 1913. Ordering in large batches spreads the fixed cost of an order over more units but piles up holding cost — capital, storage, shrinkage, obsolescence; ordering often does the reverse. The optimum balances the two, and it carries a famous piece of intuition: because the formula takes a square root, doubling your annual demand raises the optimal batch by only about 41 per cent, not 100. Scale rewards bigger batches sublinearly — one reason warehouses grew while delivery windows shrank.",
      },
      {
        kind: "para",
        text: "Safety stock answers a different question: how wrong can demand and lead time be before a stockout? A service level — say 95 or 99 per cent — is converted into a statistical buffer over expected lead-time demand. The higher the target, the more expensive the tail: moving from 95 to 99 per cent can nearly double the buffer, because you are insuring against progressively rarer events. Fixing the source — shortening lead times or stabilising demand — is usually cheaper than stacking inventory against it.",
      },
      {
        kind: "para",
        text: "The bullwhip effect is the field's signature pathology: small swings in retail demand become violent oscillations in factory orders and raw-material supply. Jay Forrester spotted it in industrial simulations in the late 1950s; Hau Lee and colleagues named its four causes in 1997 — demand-signal processing (each stage forecasts from the orders it sees, not true demand), order batching (lumpy orders look lumpier upstream), price fluctuations (forward buying on promotions), and rationing games (customers inflate orders during shortages, then cancel). MIT's beer-distribution game shows intelligent players generating wild swings from a one-time blip; Procter & Gamble documented it in nappies, where baby consumption was nearly flat yet distributor orders swung wildly. The systems-thinking lesson in Emerging & Interdisciplinary covers the feedback mechanics; the operations cures are shared point-of-sale data, smaller and more frequent batches, everyday-stable pricing, and vendor-managed inventory.",
      },
      {
        kind: "para",
        text: "Lean manufacturing — the Toyota Production System built by Taiichi Ohno after 1950 — attacks the whole buffer. Ohno catalogued seven wastes: overproduction, waiting, transport, over-processing, excess inventory, unnecessary motion, and defects. His countermeasures were just-in-time flow (produce only what the next station pulls, via kanban cards), jidoka (stop the line the moment something is wrong, rather than passing defects downstream) and kaizen (continuous small improvements). Note the distinction from the lean-startup lesson in this domain: Eric Ries borrowed Toyota's vocabulary, but his build-measure-learn loop searches for a business model; this is the factory-floor original, optimising a process already known to work.",
      },
      {
        kind: "para",
        text: "Logistics is the physical network that moves the buffers: modes, routes, warehouses and the trade-off at its heart — fast transport is expensive, slow transport forces bigger inventories. Malcom McLean's container (1956) cut loading costs so far that shipping became nearly free, redrawing global manufacturing maps. One last idea does quiet hero work: risk pooling. Consolidating n warehouses into one cuts total safety stock roughly by the square root of n, because independent demands partially offset each other — the same statistical logic the insurance lesson exploits.",
      },
      { kind: "heading", text: "Key Formulas" },
      { kind: "formula", name: "Economic order quantity", latex: "Q^{*} = \\sqrt{\\frac{2 D S}{H}}", meaning: "D is annual demand, S the fixed cost per order, H the holding cost per unit per year; Q* is the batch size minimising the sum of ordering and holding costs." },
      { kind: "formula", name: "Total relevant cost", latex: "TC = \\frac{D}{Q} S + \\frac{Q}{2} H", meaning: "Annual ordering cost plus average holding cost; at Q* the two terms are equal — each about half the total." },
      { kind: "formula", name: "Reorder point", latex: "ROP = \\bar{d}\\,L + z\\,\\sigma_{d}\\sqrt{L}", meaning: "Average daily demand times lead time, plus a safety buffer: the z-score for the target service level times daily-demand volatility scaled by the square root of lead time." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a parts distributor sells 12,000 filters a year, each order placed costs 75 in paperwork and freight, and holding a filter for a year costs 4. What should it order, how often, and when should it reorder?",
        "Compute the EOQ: Q* = sqrt(2 × 12,000 × 75 ÷ 4) = sqrt(450,000) ≈ 671 units — about 18 orders a year, or roughly one every three weeks.",
        "Check the balance: annual ordering cost = (12,000 ÷ 671) × 75 ≈ 1,342; annual holding cost = (671 ÷ 2) × 4 ≈ 1,342. Equal, as the theory promises — total ≈ 2,684, the cheapest possible.",
        "Set the reorder point: daily demand = 12,000 ÷ 250 days = 48; lead time 6 days; daily standard deviation 12; for 95 per cent service z = 1.65. ROP = 48 × 6 + 1.65 × 12 × sqrt(6) ≈ 288 + 49 ≈ 337 units.",
        "State the result: order 671 units whenever stock hits 337. If the supplier offers to hold a consignment stock nearby, lead time effectively falls toward zero — and the safety buffer shrinks with the square root of lead time.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Retail replenishment: supermarkets reorder daily from point-of-sale data precisely to starve the bullwhip of order batching.",
        "Automotive supply: car makers kept the Toyota model running for decades, with kanban signals pacing entire supplier networks.",
        "E-commerce fulfilment: Amazon's warehouse placement is risk pooling at national scale, trading delivery speed against inventory consolidation.",
        "Humanitarian logistics: disaster agencies pre-position supplies by expected lead time, because the first week of a crisis has no functioning market.",
        "Chip supply after 2021: firms that had copied just-in-time without Toyota's parallel discipline of strategic buffers learned the difference expensively.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The first error is reading just-in-time as zero inventory: Toyota holds buffers — the discipline is holding the right ones, deliberately. The second is blaming the bullwhip on bad forecasting when its real drivers are batching, promotions and shortage gaming — no forecast fixes incentives. The third is treating EOQ as gospel: it assumes constant demand and instant replenishment, so use it as a heuristic and recompute when the world changes. And safety stock is not a substitute for fixing unreliable lead times; it is a tax you pay for tolerating them.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "cycle stock", def: "Inventory ordered in batches to capture economies of scale, drawn down between orders." },
        { term: "safety stock", def: "Buffer inventory held against variability in demand or lead time, sized to a service level." },
        { term: "economic order quantity", def: "The batch size equalising annual ordering and holding costs; grows with the square root of demand." },
        { term: "reorder point", def: "The inventory level that triggers a new order: expected lead-time demand plus safety stock." },
        { term: "bullwhip effect", def: "Amplification of demand variability as orders move upstream in a supply chain." },
        { term: "kanban", def: "The pull signal — card or digital — authorising production or withdrawal of a container in lean systems." },
        { term: "risk pooling", def: "Consolidating inventory locations so independent demands offset, cutting safety stock by roughly the square root of the number of pools merged." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "A store sells 12,000 units a year; each order costs 75 and each unit costs 4 a year to hold. The economic order quantity is closest to…",
          options: ["240 units", "671 units", "1,500 units", "3,000 units"],
          answer: 1,
          explain: "Q* = sqrt(2 × 12,000 × 75 ÷ 4) = sqrt(450,000) ≈ 671 — ordering and holding costs balance there.",
        },
        {
          q: "If the annual holding cost per unit doubles, the optimal order quantity…",
          options: ["doubles", "falls by about 29 per cent", "stays unchanged", "falls by half"],
          answer: 1,
          explain: "Q* shrinks with 1 over the square root of H: dividing by sqrt(2) ≈ 1.41 leaves about 71 per cent of the original batch.",
        },
        {
          q: "The bullwhip effect is best described as…",
          options: ["random noise in retail sales data", "demand variability amplifying upstream as each stage orders from the distorted signal it sees", "a sudden rise in transport costs", "consumers hoarding during promotions"],
          answer: 1,
          explain: "Forecasting from orders rather than demand, batching, promotions and shortage gaming compound at every tier — Lee's four causes.",
        },
        {
          q: "In lean production, a kanban card is…",
          options: ["a quality certificate issued by Toyota", "a pull signal authorising production or withdrawal of a specific container", "a long-term supplier contract", "a monthly forecasting report"],
          answer: 1,
          explain: "Nothing is produced without a kanban authorising it — the downstream station literally pulls work upstream.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none — comfort with square roots helps. Follow with the project-management lesson in this subject, the accounting lessons for how inventory is costed on the balance sheet, and the probability lesson in Everyday Knowledge for the statistics behind safety stock. Exercise: estimate the EOQ for something a campus shop sells, using realistic order and holding costs — the numbers are usually surprising.",
      },
    ],
  },
  {
    id: "ops-project-management",
    title: "Project Management: Scope, Time and Cost",
    domain: "Business & Economics",
    field: "Operations & Supply Chain",
    branch: "Running the Firm",
    tier: "core",
    concepts: [
      "Projects versus operations",
      "The triple constraint",
      "Work breakdown structure",
      "The critical path method",
      "Float, crashing and trade-offs",
      "Waterfall versus agile delivery",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "The Sydney Opera House was approved in 1957 as a four-year, 7-million-dollar project; it opened in 1973, ten years late and fourteen times over budget, and remains one of history's most beloved buildings. Projects — temporary endeavours with a defined output, a deadline and a budget — fail in famously predictable ways, and project management is the discipline that grew from their wreckage. Its central insight is structural: scope, time and cost are one constraint wearing three faces, and every methodology, from aerospace flowcharts to software sprints, is a different strategy for keeping them honest.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Consultancies, construction firms, software houses, hospitals and film studios all run on projects — the World Bank estimated project-style work at tens of trillions of dollars a year, and independent studies routinely find most large projects finish late and over budget. Knowing the critical path and the difference between waterfall and agile is knowing why your release slipped — and what the honest options for fixing it are.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "A project is temporary and unique — build the bridge, launch the app, move the office — while operations repeat a known process, as the inventory lesson in this subject describes. The triple constraint (the iron triangle) binds every project: scope is what is being built, time is the deadline, cost is the budget — and quality sits awkwardly in the middle. Change one corner and the others must give: add features, and time or money must absorb it. Scope creep — requirements arriving after the plan is set — is the quiet killer, because each addition looks small and none of them leave.",
      },
      {
        kind: "para",
        text: "Planning starts with the work breakdown structure: decompose the deliverable into work packages small enough to estimate, assign and finish — typically the units that one owner can be accountable for. Two things improve dramatically at this granularity: estimates (big things are estimated by optimism, small things by experience) and accountability. The behavioural lesson in this domain explains the deeper bias at work — the planning fallacy, best countered by consulting how long similar things actually took (the outside view) rather than how this one feels.",
      },
      {
        kind: "para",
        text: "The critical path method, developed at DuPont in 1957 by Kelley and Walker (with the Navy's PERT variant arriving a year later for the Polaris programme), turns the task list into a network of dependencies. The longest path through that network — in duration, not in number of tasks — sets the project's length; that chain of tasks is the critical path, and it has zero slack. Every other task has float: how long it can slip without delaying the whole project. This single calculation separates the tasks that matter from the tasks that can wait — the essence of managing anything with dependencies.",
      },
      {
        kind: "para",
        text: "Float is also the currency of trade-offs. Crashing means spending money to shorten critical tasks — overtime, more people, faster equipment — and each option has a cost per week saved. The trap is re-criticalisation: shorten one path enough and a formerly slack parallel path becomes the new critical one, after which further crashing of the original tasks buys nothing. Fast-tracking, running tasks in parallel that were planned sequentially, buys time without money but adds rework risk. Both moves say the same thing: once you know which tasks are critical, schedule pressure becomes an engineering decision instead of an atmosphere.",
      },
      {
        kind: "para",
        text: "Waterfall is the classic strategy: requirements, design, build, test, deliver — sequential phases, each signed off before the next begins. It suits stable requirements and physical outputs, where late change is ruinous: you cannot iterate a poured foundation. Its weakness is exactly that: if the requirements were wrong, you discover it at the end, when it is most expensive. Winston Royce's 1970 paper, often cited as waterfall's origin, actually presented the model to argue against single-pass use.",
      },
      {
        kind: "para",
        text: "Agile inverts the bet. Work ships in short iterations — Scrum, the dominant dialect from 1995, runs one-to-four-week sprints around a prioritised backlog, with daily stand-ups and a retrospective at each cycle. Requirements are expected to emerge, and feedback is the steering wheel; the trade-off is less predictability of final scope and cost. The choice is not fashion but information: waterfall when the destination is known, agile when it is being discovered — which is why the lean-startup lesson reads as agile applied to the business model itself. Most real programmes blend both, shipping increments inside a waterfall-shaped contract.",
      },
      { kind: "heading", text: "Key Formulas" },
      { kind: "formula", name: "Total float", latex: "F = LS - ES = LF - EF", meaning: "Latest start minus earliest start for a task: the slack available before it delays the project's finish (zero on the critical path)." },
      { kind: "formula", name: "PERT expected duration", latex: "t_{e} = \\frac{a + 4m + b}{6}", meaning: "A weighted estimate from optimistic, most-likely and pessimistic durations — the mode counted four times; the spread b − a encodes uncertainty." },
      { kind: "formula", name: "Cost-slope of crashing", latex: "s = \\frac{\\text{crash cost} - \\text{normal cost}}{\\text{normal time} - \\text{crash time}}", meaning: "The extra money per week (or day) saved by accelerating a task — crash the cheapest critical tasks first." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a software release must fit a 12-week deadline. Tasks: A requirements (3 weeks, then everything); B backend build (5 weeks, after A); C interface design (2 weeks, after A, parallel to B); D integration (4 weeks, after B and C); E final testing (2 weeks, after D).",
        "Enumerate the paths: A–B–D–E = 3 + 5 + 4 + 2 = 14 weeks; A–C–D–E = 3 + 2 + 4 + 2 = 11 weeks. The critical path is A–B–D–E at 14 weeks — the release is 2 weeks late as planned.",
        "Compute float: the interface design task C sits on an 11-week path, so it has 14 − 11 = 3 weeks of float; it can slip three weeks without moving the release date.",
        "Crash the critical path: B can be shortened one week for 3,000 and D one week for 4,000 — crash both and the project lands at 12 weeks for 7,000. Note the limit: with B and D shortened, A–B–D–E falls to 12 weeks, exactly equal to the parallel path — A and E are now critical too, and further compression of B alone buys nothing.",
        "State the result: the deadline is met for 7,000 of acceleration cost, and the manager can articulate the trade — three cheaper alternatives were dropping a feature, moving the date, or accepting the overtime — because the network made the constraint visible.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Construction scheduling: critical-path contracts often make the day of completion a liquidated-damages clause — time is literally money.",
        "Software delivery: sprint cadences and burn-down charts are agile's instruments for making progress visible weekly.",
        "Events: an Olympics or a product launch is a fixed-deadline project — scope must flex, because the date cannot.",
        "Pharmaceutical development: stage-gate processes blend waterfall governance with iterative science between gates.",
        "Maintenance turnarounds: refinery shutdowns compress years of planning into weeks of execution, all critical path.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The classic diseases are student syndrome (start at the last possible moment, consuming all float) and Parkinson's law (work expands to fill the time available) — together they turn slack into lateness. Managers mistake the critical path for a ranking of importance: it ranks schedule impact, not business value. Agile is not an absence of planning — it is re-planning every sprint, and pretending otherwise produces chaos wearing a board and sticky notes. And multitasking across projects stretches every timeline: queueing effects mean three concurrent projects finish later than three sequential ones.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "triple constraint", def: "The interlocked limits of scope, time and cost; changing one corner forces movement in another." },
        { term: "scope creep", def: "Uncontrolled growth of requirements after the baseline plan is set." },
        { term: "work breakdown structure", def: "Hierarchical decomposition of a project into estimable, assignable work packages." },
        { term: "critical path", def: "The longest duration path through the task network; it fixes the project's minimum length." },
        { term: "float (slack)", def: "Time a task can slip without delaying the project; zero for critical-path tasks." },
        { term: "crashing", def: "Spending money to shorten critical tasks, cheapest cost-slope first, watching for path re-criticalisation." },
        { term: "sprint", def: "A fixed short iteration in agile methods, ending in reviewable, shipped work." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "Total float is best defined as…",
          options: ["the budget of a task", "how long a task can slip without delaying the project finish", "the time a worker is idle", "the cost of overtime"],
          answer: 1,
          explain: "Float is schedule slack: latest minus earliest start. Critical-path tasks have none.",
        },
        {
          q: "PERT gives optimistic 2, most-likely 5 and pessimistic 8 weeks. The expected duration is…",
          options: ["4 weeks", "5 weeks", "6 weeks", "7 weeks"],
          answer: 1,
          explain: "(2 + 4×5 + 8) ÷ 6 = 30 ÷ 6 = 5 — the most-likely estimate weighted four times.",
        },
        {
          q: "You crash a critical task until its path is no longer the longest. Project duration is now set by…",
          options: ["the crashed task", "the parallel path, which is now critical", "the sum of both paths", "the project sponsor"],
          answer: 1,
          explain: "Duration always equals the longest path; compressing one path hands the bottleneck to the next — re-criticalisation.",
        },
        {
          q: "Agile delivery is the stronger fit when…",
          options: ["requirements are stable and fully specified", "requirements are uncertain and will emerge through feedback", "physical construction makes iteration impossible", "the deadline must be fixed at any scope"],
          answer: 1,
          explain: "Agile trades up-front predictability for steering; discovery is its home ground, as the lean-startup lesson generalises.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none. Follow with the negotiation lesson in the Management & Leadership subject for the politics of scope, the leadership lesson for the people who must actually finish the tasks, and queueing theory in the statistics direction for why multitasking is poison. Exercise: draw the dependency network of a group assignment you have due, find the critical path, and note which deadlines are real and which are theatre.",
      },
    ],
  },
]
