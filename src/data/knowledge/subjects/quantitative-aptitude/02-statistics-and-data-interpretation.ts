/**
 * Knowledge Universe — Quantitative Aptitude — Chapter 02: Statistics & Data Interpretation
 * 1 lesson · ~2,295 words
 * field: Quantitative Aptitude
 * legacy sources: aptitude.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Data Interpretation]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 qa-tables-caselets — Tables and Caselets: Reading Data at Examination Speed
 */
import type { KnowledgeTopic } from '../../types'

export const quantitativeAptitudeCh02: KnowledgeTopic[] = [
  // ================================================================
  // QUANTITATIVE APTITUDE — Ch12 Statistics & Data Interpretation
  // §12.1 — the DI speed layer over tables and caselets.
  // Carve: ku-math-reading-data-charts (Mathematics Master Library)
  // owns chart-reading CONCEPTS — what a bar/line/pie chart IS, how
  // axes and scales work, density-histogram reading. This lesson OWNS
  // the examination layer: the 10-second table scan, percentage-basing
  // discipline, approximation under option pressure, and the
  // paragraph→grid caselet translation. Greps for 'caselet',
  // 'percentage-basing', 'data interpretation' had ZERO live
  // knowledge-topic hits.
  // ================================================================
  {
    id: 'qa-tables-caselets',
    title: 'Tables and Caselets: Reading Data at Examination Speed',
    domain: 'Aptitude & Test Preparation',
    field: 'Quantitative Aptitude',
    branch: 'Data Interpretation',
    tier: 'core',
    concepts: [
      'the 10-second scan: title, units, totals and missing cells before any question',
      'percentage-basing: choosing the right base (row total vs column total vs grand total)',
      'share and ratio work on tabulated data at speed',
      'percentage change and growth rates between periods',
      'approximation discipline: when rounding is safe and when options forbid it',
      'the caselet: translating a paragraph of facts into a grid before computing',
      'multi-step chains: writing the calculation chain before executing it',
      'trap anatomy: wrong base, mixed units and per-thousand disguises',
    ],
    words: 2297,
    readMins: 11,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Data-interpretation blocks — a dense table or a paragraph hiding numbers, followed by three to five questions — are the highest-volume scoring real estate on modern aptitude papers: recruitment screenings, management-admission tests, bank promotion papers and campus placement batteries all lean on them, because they test arithmetic and reading discipline inside one format. The mathematics rarely goes beyond percentages, ratios and averages. What separates the 90th percentile from the crowd is entirely procedural: how you read the table, which base you choose, when you approximate, and how you translate a caselet paragraph into something you can see. This lesson installs those procedures as reflexes.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'A typical four-question set on one table pays four marks for about three minutes of work — the best marks-per-minute trade on the paper — but only for readers with a fixed scan routine. Without one, the same set eats eight minutes and surrenders two negatives to base errors. The routines here are short, learnable and universal across every table you will ever meet.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The 10-second scan comes before any question. Read the table title first — it tells you what the numbers ARE (production in tonnes? sales in crore rupees? percentage of total?). Then the units, row by row, because mixed units are the single most common trap in this format. Then the totals: does the table give row totals, column totals, a grand total? A grand total converts every cell into an instant percentage base. Finally, mark the missing cells — tables deliberately leave blanks that later questions ask you to fill, and knowing where the holes are before reading the question saves a full re-scan. Ten seconds, four facts: title, units, totals, holes.',
      },
      {
        kind: 'para',
        text: 'Percentage-basing is the heart of table work, and the base is a choice you must make consciously. “What percent of the company\u2019s total sales came from the North zone?” — base is the grand total. “What percent of North-zone sales were hardware?” — base is the North-zone row total. “Hardware grew by what percent from 2023 to 2024?” — base is the 2023 hardware cell, the earlier value, always. The rule worth tattooing on the inside of your eyelids: the base is the thing you are taking a share OF, and it is named by the sentence structure after the word “of” or by the comparison direction. Roughly half of all DI wrong answers in mock analyses are base errors, not arithmetic errors — the candidate divided by the column when the question wanted the row.',
      },
      {
        kind: 'figure',
        caption: 'Anatomy of a data table: the four scan targets — title and units, row totals, column totals, and the missing cell — with the three distinct percentage bases (row, column, grand) that most questions switch between.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table anatomy diagram with percentage bases highlighted">
  <style>.h{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.c{font-family:Georgia,serif;font-size:14px;fill:#52525b}.t{font-family:Georgia,serif;font-size:16px;font-weight:bold;fill:#18181b}.note{font-family:Georgia,serif;font-size:13px;fill:#e11d48}.box{fill:#fafafa;stroke:#8a8a93;stroke-width:1.6}.base{fill:#fef3c7;stroke:#d97706;stroke-width:2}</style>
  <text class="t" x="60" y="30">Zonal sales, 2024 (₹ crore) — TITLE + UNITS read first</text>
  <rect class="box" x="60" y="46" width="700" height="36"/>
  <text class="h" x="80" y="70">Zone</text><text class="h" x="300" y="70">Hardware</text><text class="h" x="440" y="70">Services</text><text class="h" x="590" y="70">Row total</text>
  <rect class="base" x="60" y="84" width="700" height="34"/>
  <text class="c" x="80" y="106">North</text><text class="c" x="310" y="106">120</text><text class="c" x="450" y="106">180</text><text class="h" x="600" y="106">300</text>
  <rect class="box" x="60" y="120" width="700" height="34"/>
  <text class="c" x="80" y="142">South</text><text class="c" x="310" y="142">90</text><text class="c" x="450" y="142">110</text><text class="c" x="600" y="142">200</text>
  <rect class="box" x="60" y="156" width="700" height="34"/>
  <text class="c" x="80" y="178">East</text><text class="c" x="310" y="178">60</text><text class="c" x="450" y="178">? </text><text class="c" x="600" y="178">140</text>
  <rect class="base" x="60" y="192" width="700" height="34"/>
  <text class="c" x="80" y="214">West</text><text class="c" x="310" y="214">130</text><text class="c" x="450" y="214">130</text><text class="c" x="600" y="214">260</text>
  <rect class="base" x="60" y="228" width="700" height="34"/>
  <text class="h" x="80" y="250">Column total</text><text class="h" x="300" y="250">400</text><text class="h" x="440" y="250">540</text><text class="h" x="590" y="250">900 (grand)</text>
  <text class="note" x="70" y="290">Row base: “% of North-zone sales that is Services” → 180/300</text>
  <text class="note" x="70" y="314">Column base: “Services sales of South as % of all Services” → 110/540</text>
  <text class="note" x="70" y="338">Grand base: “North zone share of total sales” → 300/900</text>
  <text class="note" x="70" y="366">Missing cell: East Services = 140 − 60 = 80 — spotted in the scan, not mid-question.</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Share and ratio work flows straight from the base discipline. Shares are cell-over-base; ratio questions on tables ask things like “the ratio of hardware to services sales in the South zone” (90 : 110, which is 9 : 11 — always reduce, because options come reduced). When a question compares two cells\u2019 shares, compute both over the same base before subtracting: “how many percentage points more is the North zone\u2019s share than the East zone\u2019s?” is 300/900 − 140/900 = 33.3% − 15.6% ≈ 17.7 points. The percentage-POINT subtraction of two shares is not a percentage change — divide nothing, just subtract. Papers love the confusion between “percentage points” and “percent more”, and both appear as options.',
      },
      {
        kind: 'para',
        text: 'Percentage change between periods is the growth engine. From 250 to 300 is a growth of 50/250 = 20% — the old value is the base, and the formula (new − old)/old should be read aloud as “change over where it started”. When a table spans several years, the follow-up classics are: which year saw the highest growth RATE (not the highest absolute jump — a small base grows fast), what is the average growth rate over the period (usually approximated, sometimes exactly computed as the total change over total starting value when options are coarse), and simple-index questions where one year is set to 100. Approximation shortcuts: growth from 480 to 610 is about 27% (call it 480→600 = +25%, then the extra 10 is +2%).',
      },
      {
        kind: 'para',
        text: 'Approximation discipline is what makes DI fast, and it is a decision, not a habit. Round when the options are far apart (10% or more of the answer value between neighbours) and compute exactly when they crowd. Round the numbers, never the logic: 48.7% of 2,13,600 can become 50% of 2,00,000 = 1,00,000 when options are 0.8/1.0/1.2/1.4 lakh, and the saving is a full minute. Two safety rules: round multiplicands in the same direction you will err (round the base UP when dividing, so your answer errs small, then pick the option just above your estimate), and re-compute exactly when two options survive the estimate. The common failure mode is approximating a four-step chain at every step — errors compound, and a 3% slack per step becomes 12% by the end. Approximate at most twice in a chain; carry exact intermediate values the rest of the way.',
      },
      {
        kind: 'para',
        text: 'The caselet is a table wearing a paragraph costume: five sentences of prose hiding an entity-quantity structure. The procedure is translation before computation. Identify the entities (factories, students, zones — usually three to five), the quantities attached to them, and the relations between sentences (“40% more than A”, “half of the remainder”). Then rebuild the data as a small grid or a running list with symbols: A = 200; B = A + 40% of A = 280; C = half of (A + B) = 240. Only when the whole paragraph is on paper as symbols do you look at the actual question — because caselet questions come in sets, and the translated grid answers all of them. Candidates who compute per question re-derive the same facts four times; candidates who translate once, answer four questions from the sheet.',
      },
      {
        kind: 'para',
        text: 'Multi-step chains are where caselets earn their fear: the answer needs quantity X, which needs Y, which needs Z from the third sentence. The discipline is write-first: before touching any arithmetic, write the chain backwards from the question. “Profit per unit” = profit ÷ units = (revenue − cost) ÷ units, where revenue = price × quantity sold and the sentence gives price and quantity sold separately from quantity produced. Writing the chain exposes the exact cells you need and the ones you do NOT need — caselets deliberately supply one or two irrelevant numbers, and readers who compute from the top of the paragraph waste a step on every one of them. The written chain is also your error audit: when the answer does not match any option, walk the chain, not the arithmetic.',
      },
      {
        kind: 'para',
        text: 'Trap anatomy for this format, in order of frequency. Wrong base — the percentage computed over the column instead of the row, or the new value instead of the old in growth questions; every DI wrong option is a right computation on the wrong base, which is why base choice must be conscious. Mixed units — sales in lakh next to production in thousand tonnes, or a column in crore while the question asks in lakh (1 crore = 100 lakh; catch it in the scan). Per-thousand and per-million disguises — literacy or mortality “per 1,000 population” presented among ordinary percentages. And the missing-cell trick: a table with a blank asks you to recover it from a total before you can even start the real question — the scan marks the hole so it never ambushes you mid-solve.',
      },
      {
        kind: 'example',
        title: 'Worked example — a full caselet from paragraph to answer',
        steps: [
          'The paragraph: “A factory produced 12,000 units in 2024, 20% more than in 2023. It sold 85% of 2024 production at ₹500 per unit; the rest were scrapped. Total production cost was ₹42 lakh.” Question: the profit on sold units, in lakh rupees.',
          'Translate to a grid before computing: 2023 production = P; 2024 = 1.2P = 12,000 → P = 10,000 (not needed for this question — note and move on, the set will ask later).',
          'Units sold = 85% of 12,000 = 10,200; scrapped = 1,800. Revenue = 10,200 × ₹500 = ₹51,00,000 = ₹51 lakh.',
          'Cost discipline: the ₹42 lakh total production cost is the cost of ALL 12,000 units. For profit on sold units the standard screening convention is to book the full cost against the sold revenue (scrapped units recover nothing): profit = 51 − 42 = ₹9 lakh.',
          'Write the chain check: revenue (sold × price) − cost (all units) = profit → 51 − 42 = 9. Matches an option — stop.',
          'Mark the two traps this caselet plants: the 2023 value (10,000) is computed-and-irrelevant for this question, and a “cost of sold units only” reading (42 × 0.85 ≈ 35.7 → profit 15.3) is the designed distractor when the question says “total production cost”. Read cost scope exactly as written.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Base blindness is the king of DI errors: before any percentage, say the base aloud — “share OF what, growth FROM which year”. Second comes unit drift between table and question (crore/lakh, thousands/units). Third is compounding approximation through multi-step chains. And the quietest trap of all: computing a fact the question never asked for. The scan and the written chain exist precisely to kill these four.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: '10-second scan', def: 'The pre-question read of a table: title, units, totals, missing cells.' },
          { term: 'Percentage base', def: 'The quantity a share is taken OF — row total, column total, grand total or an earlier period value, chosen by question structure.' },
          { term: 'Percentage-basing', def: 'The conscious act of naming the base before dividing; the main defence against designed distractors.' },
          { term: 'Percentage points', def: 'The plain difference of two percentages (33% − 15% = 18 points); not itself a percentage change.' },
          { term: 'Growth rate', def: '(New − old)/old — the change measured against the starting value.' },
          { term: 'Caselet', def: 'A data-interpretation set delivered as a paragraph; solved by translating prose into a grid of symbols before any arithmetic.' },
          { term: 'Write-first chain', def: 'Writing the multi-step calculation plan backwards from the question before executing any step of it.' },
          { term: 'Missing-cell recovery', def: 'Recovering a blank table value from its row or column total before the real question can begin.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A zone sold 300 units, of which 180 were services. In the whole company, services were 540 of 900 units. “Services share of the zone” uses which base?',
            options: ['900 — the grand total', '540 — all services', '300 — the zone row total', '180 — the zone\u2019s services'],
            answer: 2,
            explain: 'The share of the zone that is services is services-over-zone: 180/300 = 60%. The 540 and 900 belong to the column-base and grand-base questions — each of which appears as a distractor here, exactly as in real option sets.',
          },
          {
            q: 'Production rose from 250 tonnes to 300 tonnes. The growth rate is:',
            options: ['16.7%', '20%', '50%', '2%'],
            answer: 1,
            explain: 'Change over the STARTING value: (300 − 250)/250 = 50/250 = 20%. Option 16.7% is the error of dividing by 300 — the new-value base trap; 50% is the raw difference left un-divided.',
          },
          {
            q: 'Zone A holds 33% of total sales and Zone B holds 15%. Zone A exceeds Zone B by:',
            options: ['18%', '18 percentage points', '2.2 times', '48%'],
            answer: 1,
            explain: 'Two shares subtract in percentage POINTS: 33 − 15 = 18 points. Calling it “18%” is the classic conflation the options test; 2.2 times is the ratio 33/15, a different (sometimes asked) quantity.',
          },
          {
            q: 'A table gives revenue in ₹ crore and costs in ₹ lakh. Before comparing them you must:',
            options: ['Round both to the nearest ten', 'Convert to one unit — 1 crore = 100 lakh', 'Take percentages of each separately', 'Nothing — compare directly'],
            answer: 1,
            explain: 'Mixed units are caught in the 10-second scan and fixed once: bring everything to the smaller unit (lakh) or the larger (crore) and stay there for the whole set.',
          },
          {
            q: 'Options are 0.8, 1.0, 1.2, 1.4 lakh. The exact computation is 48.7% of 2,13,600. The exam-speed move is:',
            options: ['Compute exactly — always', 'Approximate 50% of 2,10,000 ≈ 1.05 lakh and pick 1.0 or 1.2 by direction', 'Skip the question', 'Compute 48.7% of 2,00,000 exactly'],
            answer: 1,
            explain: 'With neighbours ~0.2 lakh apart, a 50% × 2.1 lakh estimate (1.05 lakh) separates the options decisively — the rounding errs small, so choose the option just above the estimate: 1.0 lakh. Exact computation here buys nothing but seconds.',
          },
          {
            q: 'A caselet: “A shop bought 400 pens; sold 75% at ₹20 each; the rest at ₹12.” Revenue from the cheaper pens is:',
            options: ['₹6,000', '₹1,200', '₹4,800', '₹7,200'],
            answer: 1,
            explain: 'Translate first: 75% of 400 = 300 sold at ₹20 (₹6,000 — the distractor); the REST = 100 pens at ₹12 = ₹1,200. The question asks the cheaper-pen revenue; the grid you built once answers both without re-reading the paragraph.',
          },
          {
            q: 'Literacy is given as “920 per 1,000 persons”. As a percentage this is:',
            options: ['0.92%', '9.2%', '92%', '920%'],
            answer: 2,
            explain: 'Per-thousand rates disguise percentages: 920/1,000 = 92%. The scan flags “per 1,000” in the units so the conversion happens once, consciously — not guessed under option pressure.',
          },
          {
            q: 'A question needs “profit per unit sold”. The write-first chain starts from:',
            options: ['Total revenue', 'Profit ÷ units sold', 'Price per unit', 'Total cost'],
            answer: 1,
            explain: 'Chains are written backwards from the question: profit per unit sold = profit ÷ units sold; then expand profit = revenue − cost, and only then collect the cells the expansion requires. Starting from the paragraph\u2019s first number is how irrelevant data claims victims.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'For the concepts under the charts this book does not re-teach — what axes, scales and chart types ARE — read the Mathematics Master Library\u2019s Reading Data lesson, which owns that layer. Inside this subject, Quantity Comparison and Data Sufficiency completes the interpretation family with the comparison-decision format, and the Commercial Arithmetic chapters supply the percentage and ratio machinery this lesson runs at speed.',
        tone: 'path',
      },
    ],
  },
]
