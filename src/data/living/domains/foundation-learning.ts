/**
 * Living Library — domain file: Foundation Learning
 *
 * Study skills, reading strategies, and practical numeracy. Written as
 * complete lessons; future expansion passes append new topics below.
 */

import type { LivingDomainFile } from '../types'

export const foundationLearning: LivingDomainFile = {
  domain: 'Foundation Learning',
  blurb:
    'Study skills, reading strategy, and practical numeracy — the bedrock abilities that make every other domain easier to learn.',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'fnd-spaced-repetition',
      title: 'Spaced Repetition and the Forgetting Curve',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Learning Science',
      tier: 'core',
      concepts: [
        'The Ebbinghaus forgetting curve',
        'The spacing effect',
        'Retrieval practice and the testing effect',
        'Expanding review intervals',
        'Active recall versus passive re-reading',
        'Interference and sleep in consolidation',
      ],
      words: 897,
      readMins: 5,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'Every memory starts fading the moment you stop using it. Learning Science captured this decay in the forgetting curve, traced experimentally by Hermann Ebbinghaus in 1885, and its antidote is spaced repetition: reviews scheduled at growing intervals so each retrieval lands just as the memory weakens. This topic explains why the curve dips steeply at first and how retrieval practice turns cramming into durable knowledge.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Spaced repetition powers every serious memorization system, from language apps that resurface flashcards at the predicted moment of forgetting to medical platforms that keep drug dosages fresh for years. A schedule that respects the curve cuts study time while multiplying recall.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Ebbinghaus taught himself nonsense syllables and tested recall after delays from minutes to days, finding memory drops steeply within the first day before flattening. Most forgetting happens early — exactly when the first review should arrive.',
        },
        {
          kind: 'para',
          text: 'The spacing effect is the robust finding that identical total study time produces stronger memory when split across separate sessions rather than massed together. Two short encounters a day apart beat one double-length session.',
        },
        {
          kind: 'para',
          text: 'Retrieval practice — pulling an answer from memory instead of looking at it again — is what actually strengthens the trace. Researchers call this the testing effect, and it holds even when the attempt is failed and corrected.',
        },
        {
          kind: 'para',
          text: 'Because each successful review slows the next round of decay, sensible schedules expand their gaps: one day, then three, then a week, then a month. The interval stretches as the memory stabilizes.',
        },
        {
          kind: 'para',
          text: 'Re-reading feels productive because the page grows familiar, but fluency is not learning. Active recall with feedback forces the reconstruction that builds knowledge you can use anywhere.',
        },
        {
          kind: 'para',
          text: 'New learning competes with old: similar facts interfere, and sleep helps the brain consolidate what you studied. Spacing reviews across days gives consolidation the time it needs.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Retention decay model',
          latex: 'R = e^{-t/S}',
          meaning:
            'Retention R falls exponentially with elapsed time t; the stability constant S grows with each successful review, flattening the curve.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a plan to memorize 40 anatomy terms for an exam six weeks away, using spaced repetition instead of cramming.',
            'Recall the governing idea: reviews sit at expanding intervals, and every session uses active recall rather than re-reading.',
            'Apply: split the 40 terms into four sets of ten; learn set one on day one, test yourself on days 2, 5, 12, and 28, and start a new set each day on the same pattern.',
            'State the result: every term is retrieved four to five times over six weeks, about two and a half hours total, and recall at the exam far exceeds any single three-hour cram.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Language apps resurface each card at its predicted moment of forgetting, keeping daily review loads small.',
            'Medical platforms drill drug dosages on expanding schedules so knowledge survives years of training.',
            'Musicians space practice of hard passages across days, beating marathon repetition for security.',
            'Compliance training schedules quarterly refreshers to fight the early decay of procedural rules.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The commonest mistake is trusting fluency: re-reading feels easy, so students stop too soon and mistake recognition for recall. Another is cramming before every deadline, which carries you through a quiz while leaving almost nothing a month later.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Forgetting curve', def: 'The graph of retention against time since learning, steep at first then flattening.' },
            { term: 'Spacing effect', def: 'The gain in long-term memory when study is distributed rather than massed.' },
            { term: 'Retrieval practice', def: 'Actively recalling information from memory, which strengthens it more than restudy.' },
            { term: 'Testing effect', def: 'Testing yourself on material improves later retention more than extra review.' },
            { term: 'Expanding interval', def: 'A review schedule whose gaps grow after each successful retrieval.' },
            { term: 'Consolidation', def: 'The post-study process, aided by sleep, that stabilizes memory.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'According to the forgetting curve, when is most forgetting likely to occur?',
              options: ['Evenly across a month', 'Within the first hours and days', 'Only after a full night of sleep', 'After about six weeks'],
              answer: 1,
              explain: 'Retention drops steeply soon after learning, then levels off, so early reviews matter most.',
            },
            {
              q: 'Which study method exploits the spacing effect most directly?',
              options: ['Re-reading notes the night before an exam', 'Highlighting key passages', 'Testing yourself today, in three days, and in a week', 'Studying one topic in a single long session'],
              answer: 2,
              explain: 'Distributing retrievals across expanding gaps is the essence of spaced repetition.',
            },
            {
              q: 'Why does re-reading often produce weak learning despite feeling productive?',
              options: ['It creates familiarity that is mistaken for knowledge', 'It takes too much time', 'It works only for numbers', 'It prevents sleep'],
              answer: 0,
              explain: 'Fluency is recognition, not recall — the material feels known but cannot be reproduced.',
            },
            {
              q: 'In an expanding schedule, when should the next review be scheduled after a successful retrieval?',
              options: ['At the same interval as before', 'At a shorter interval than before', 'At a longer interval than before', 'Only after a failed test'],
              answer: 2,
              explain: 'Each successful recall raises memory stability, so the safe interval can lengthen.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisite: nothing beyond everyday study habits. Pair it with SQ3R-style active reading, then move to intermediate topics like interleaving and elaborative interrogation.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Memory decays fast at first, then flattens — the forgetting curve of 1885.',
            'The same study time works harder when spread across separate days.',
            'Retrieval practice, not re-reading, is the active ingredient of durable memory.',
            'Good schedules expand the interval after each successful recall.',
            'Sleep and low interference between similar topics let consolidation finish.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-sq3r-reading',
      title: 'Active Reading with SQ3R',
      domain: 'Foundation Learning',
      field: 'Reading & Literacy',
      branch: 'Reading Strategies',
      tier: 'core',
      concepts: [
        'Survey the text structure first',
        'Question headings into goals',
        'Read with a purpose',
        'Recite from memory',
        'Review to consolidate',
        'Metacognitive monitoring',
      ],
      words: 853,
      readMins: 5,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'SQ3R — Survey, Question, Read, Recite, Review — is a reading strategy published by Francis P. Robinson in 1946 to make textbook study active instead of passive. Within Reading Strategies it works because each stage gives the mind a specific job: the survey builds a map, questions set goals, reading hunts for answers, reciting checks memory, and reviewing repairs it. Together the five steps convert pages into recall you can use.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Readers with a purpose consistently outperform readers who merely scan, because a question in mind turns every paragraph into a search. SQ3R remains the backbone of most university study-skills courses taught today.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Before touching the body text, spend two minutes building the chapter map: title, headings, bold terms, diagrams, and the end-of-chapter summary and questions. This preview creates the mental scaffolding onto which new details can be hung.',
        },
        {
          kind: 'para',
          text: 'Rewrite each heading as a question before reading the section beneath it — asking how a cell makes ATP gives that section a target. Questions convert passive exposure into an information hunt with a built-in success test.',
        },
        {
          kind: 'para',
          text: 'Read only to answer your question, marking sparingly rather than painting the page yellow. Because attention has a target, mind-wandering drops and comprehension of the relevant material deepens.',
        },
        {
          kind: 'para',
          text: 'Close the book and say or write the answer in your own words, checking against the text only afterward. Recitation is where SQ3R overlaps with spaced repetition — recall, not recognition, is what gets stored.',
        },
        {
          kind: 'para',
          text: 'Within a day, answer each heading-question again from memory and repair the gaps you find. Distributed reviews of the same questions are what turn a chapter from visited into known.',
        },
        {
          kind: 'para',
          text: 'Throughout, the method forces you to notice what you do and do not understand — the essence of metacognition. Accurate self-monitoring is what lets you spend limited study time where it is actually needed.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: master a 25-page chapter on the Industrial Revolution for a class discussion two days away, within about 90 minutes.',
            'Recall the governing idea: SQ3R sequences preview, questioning, purposeful reading, recitation, and delayed review.',
            'Apply: survey the maps and headings (5 min); write 12 heading-questions (5 min); read to answer them with light marking (45 min); recite each answer from memory into notes (25 min); review the weak answers the next evening (10 min).',
            'State the result: the chapter is processed twice through active recall, and the question-answer notes double as ready material for the discussion and for later revision.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Textbook study in any subject becomes recall practice when chapters are attacked through heading-questions.',
            'Technical documentation becomes navigable when engineers survey structure first and read sections on demand.',
            'Exam preparation compresses when chapter questions become self-tests instead of triggers for re-reading.',
            'Professional reading — reports, papers, manuals — gets faster because the survey reveals which sections deserve deep attention.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The classic failure is skipping recitation because the reading felt clear, which leaves recognition instead of recall. Another is letting the survey expand into full reading — the preview must stay quick, or the method collapses into an ordinary single pass.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Survey', def: 'A quick structural preview of headings, figures, and summaries before reading.' },
            { term: 'Question', def: 'A heading rewritten as an interrogative goal that directs the reading.' },
            { term: 'Recite', def: 'Restating the key points of a section from memory with the book closed.' },
            { term: 'Review', def: 'Re-testing the recited material after a delay to repair gaps.' },
            { term: 'Metacognition', def: 'Awareness and control of your own understanding while learning.' },
            { term: 'Active reading', def: 'Reading with tasks — predicting, questioning, summarizing — rather than passive scanning.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'What is the correct order of the SQ3R steps?',
              options: ['Survey, Question, Read, Recite, Review', 'Skim, Quote, Rest, Reread, Reflect', 'Survey, Read, Question, Review, Recite', 'Question, Survey, Recite, Read, Review'],
              answer: 0,
              explain: 'The name is the sequence: Survey, Question, Read, Recite, Review, as Robinson defined it in 1946.',
            },
            {
              q: 'Which SQ3R step most directly builds durable memory?',
              options: ['Surveying the chapter map', 'Reciting answers from memory with the book closed', 'Highlighting while reading', 'Reading quickly the first time'],
              answer: 1,
              explain: 'Recitation is retrieval practice, and retrieval is what strengthens storage; the other steps merely prepare or check it.',
            },
            {
              q: 'A student spends fifteen minutes reading every figure caption in detail during the survey step. What went wrong?',
              options: ['Nothing — surveys should be thorough reads', 'The survey became a second reading pass instead of a quick preview', 'Figures should never be looked at before reading', 'The student should have skipped the questioning step'],
              answer: 1,
              explain: 'A survey is a two-minute map of structure, not detailed reading; dwelling on captions defeats the pacing the method depends on.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisite: comfortable reading fluency. Combine with spaced repetition so that recited answers are re-reviewed on expanding intervals, then advance to note-taking systems such as Cornell notes and to argument-mapping for analytical reading.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Survey builds the map; questions set the goals; reading hunts the answers.',
            'Reciting from closed-book memory is the retention engine of SQ3R.',
            'Delayed review of the same questions converts chapters into durable recall.',
            'Questions written from headings give every section a success test.',
            'The method works because it makes reading metacognitive rather than passive.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-percentage-ratio-mental-math',
      title: 'Percentage, Ratio and Mental Math Shortcuts',
      domain: 'Foundation Learning',
      field: 'Everyday Math & Numeracy',
      branch: 'Practical Arithmetic',
      tier: 'core',
      concepts: [
        'Percent as parts per hundred',
        'The x-percent of y equals y-percent of x trick',
        'Percentage change versus percentage points',
        'Ratios and the unitary method',
        'Double-and-halve and distributive shortcuts',
        'Estimation and sanity checks',
      ],
      words: 897,
      readMins: 5,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'Percentages, ratios, and a toolkit of mental shortcuts power the arithmetic behind prices, tips, discounts, taxes, and news statistics. Practical Arithmetic treats a percent as a fraction with denominator 100, a ratio as a comparison of quantities, and mental math as reorderings — swapping, halving, doubling — that make awkward numbers friendly.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Numerate adults catch markup disguised as a discount, recompute a bill in seconds, and read a five percent headline with an accurate sense of scale — fluency that pays daily dividends.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'A percent is literally per hundred — 8 percent means 8/100 — and the word of means multiply: 8 percent of 250 is 20. Fluency among percent, fraction, and decimal is the gateway skill.',
        },
        {
          kind: 'para',
          text: 'Multiplication commutes, so x percent of y equals y percent of x. Four percent of 75 sounds awkward, but 75 percent of 4 — three quarters of 4 — is instantly 3; when one arrangement is friendly, use it.',
        },
        {
          kind: 'para',
          text: 'A percentage change is measured against the original: rising from 40 to 50 is a 25 percent increase, yet falling from 50 to 40 is only 20 percent. Percentage points are plain differences — a rate moving from 4 to 6 percent rose two points, a 50 percent relative jump.',
        },
        {
          kind: 'para',
          text: 'Find the value of one unit first: if 7 notebooks cost 42, one costs 6, so 12 cost 72 — this unitary method solves nearly every proportion problem without algebra.',
        },
        {
          kind: 'para',
          text: 'Reorder products to your advantage: 25 times 16 is 25 times 4, times 4, giving 400; double-and-halve turns 15 times 22 into 30 times 11, or 330; the distributive law gives 7 times 98 as 700 minus 14, or 686.',
        },
        {
          kind: 'para',
          text: 'Round to one or two significant figures and bracket: a 17.5 percent tip on 84.60 is near 13 to 15. Estimation turns wrong answers into visibly wrong ones.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Percentage change',
          latex: '\\%\\,\\Delta = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100',
          meaning: 'Change is measured against the original value, which is why up and down by the same percent are asymmetric.',
        },
        {
          kind: 'formula',
          name: 'Successive percentage changes',
          latex: '\\text{net}\\% = a + b + \\frac{ab}{100}',
          meaning: 'Two successive changes of a and b percent net a + b + ab/100 — a 20 percent rise then fall nets minus 4 percent.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the final price of a jacket marked 120 with a 30 percent discount plus 8 percent tax.',
            'Recall the governing idea: each percentage applies to the current value — the discount on the marked price, the tax on the sale price.',
            'Apply: 30 percent of 120 is 36, so the sale price is 84; 8 percent of 84 is 6.72, giving 90.72 with tax — or directly, 84 times 1.08.',
            'State the result: the jacket costs 90.72 — 75.6 percent of the marked price, an overall reduction of 24.4 percent, not 22.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Tips: a 15 percent tip on 64 is 10 percent (6.40) plus half again (3.20), so 9.60.',
            'Loans: 1 percent monthly compounds to about 12.7 percent a year.',
            'News: a 3 point rise in a 10 percent rate is a 30 percent relative increase — very different claims.',
            'Cooking: ratios stretch a four-person recipe to six by scaling by 1.5.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The most common error is adding percentages from different bases — a 30 percent discount plus 8 percent tax is not 22 percent off, since tax applies to the sale price. Watch also the percent versus percentage-point confusion, which quietly triples or halves reported statistics.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Percent', def: 'A fraction expressed with denominator 100.' },
            { term: 'Percentage point', def: 'The plain difference between two percentages, distinct from relative change.' },
            { term: 'Ratio', def: 'A comparison of two quantities by division, such as 3:2.' },
            { term: 'Unitary method', def: 'Finding the value of one unit, then scaling to the required units.' },
            { term: 'Commutativity', def: 'The property that a times b equals b times a.' },
            { term: 'Distributive law', def: 'a times (b + c) equals ab plus ac — splitting hard multiplications.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'What is 8 percent of 25, using the commutative trick?',
              options: ['2', '1.5', '2.5', '0.2'],
              answer: 0,
              explain: '8 percent of 25 equals 25 percent of 8, and a quarter of 8 is 2.',
            },
            {
              q: 'A price rises from 80 to 100. What is the percentage increase?',
              options: ['20 percent', '25 percent', '80 percent', 'It depends on the currency'],
              answer: 1,
              explain: 'The change is 20, measured against the original 80 — always divide by where you started.',
            },
            {
              q: 'An interest rate rises from 4 percent to 7 percent. Which statement is correct?',
              options: ['A 3 percent increase', 'A 3 percentage point rise — a 75 percent relative increase', 'A 7 percent rise', 'A 43 percent point rise'],
              answer: 1,
              explain: 'The difference is 3 points; relative to 4 percent that is 75 percent.',
            },
            {
              q: 'After a 20 percent rise and then a 20 percent fall, a price is:',
              options: ['Back where it started', '4 percent lower', '4 percent higher', '20 percent lower'],
              answer: 1,
              explain: '1.2 times 0.8 is 0.96, a net 4 percent decrease.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisite: multiplication tables and basic fractions. Next come algebraic proportions, simple and compound interest, and estimation habits for statistics literacy.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Percent means per hundred, and the word of means multiply.',
            'Swap when it helps: x percent of y equals y percent of x.',
            'Percentage change divides by the original; percentage points are plain differences.',
            'The unitary method — value of one, then scale — cracks proportion problems.',
            'Double-and-halve, split with distribution, and always bracket with an estimate.',
          ],
        },
      ],
    },
  ],
}
