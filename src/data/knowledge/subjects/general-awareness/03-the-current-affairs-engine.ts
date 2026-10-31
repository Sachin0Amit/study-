/**
 * Knowledge Universe — General Awareness — Chapter 03: The Current-Affairs Engine
 * 1 lesson · ~2,099 words
 * field: General Awareness
 * legacy sources: aptitude.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Current Affairs]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 ga-current-affairs-engine — The Current-Affairs Engine: A Twelve-Month Recall System
 */
import type { KnowledgeTopic } from '../../types'

export const generalAwarenessCh03: KnowledgeTopic[] = [
  // ================================================================
  // GENERAL AWARENESS — Ch8 The Current-Affairs Engine
  // §8.1 — the 12-month recall system.
  // Carve: no existing topic owns a current-affairs METHOD (the
  // library is evergreen by design; GA subjects own the static
  // layers). This lesson owns the engine: the window rule, the
  // five lanes, the event card, source triage, linking, and the
  // 1-7-30 revision schedule.
  // ================================================================
  {
    id: 'ga-current-affairs-engine',
    title: 'The Current-Affairs Engine: A Twelve-Month Recall System',
    domain: 'Aptitude & Test Preparation',
    field: 'General Awareness',
    branch: 'Current Affairs',
    tier: 'core',
    concepts: [
      'the twelve-month window: what counts as current',
      'the five lanes: governance, economy, international, science and technology, sports-awards-persons',
      'the event card: who, what, when, where, significance in one line',
      'source triage: one daily, one weekly, one monthly',
      'linking: every current event back to its static anchor',
      'the national and international lanes: appointments, summits, agreements, reports',
      'the 1-7-30 revision schedule and recall drills',
    ],
    words: 2099,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Current affairs is the section candidates fear most and prepare worst \u2014 usually by hoarding monthly compilations and reading none of them twice. Yet every general-awareness paper in the country, from law entrances to bank recruitment to defence academies, draws its current-affairs block from a well-defined pool: roughly the twelve months before the exam, across five predictable lanes, with the questions themselves asking one-line facts \u2014 who, where, which edition, what rank. The pool is finite; the lanes are known; the only real variable is the system you run. This lesson installs that system: a window rule, a five-lane filing structure, a one-line event format, a three-source diet, and the spacing schedule that keeps a year of news retrievable in one-glance recall.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Current-affairs blocks typically run ten to twenty questions on recruitment papers \u2014 an entire sectional\u2019s worth of marks riding on material that changes monthly but asks in a fixed format. A working engine converts twenty minutes a day plus ten minutes a month into those marks permanently; a broken engine (unread compilations, un-revised notes) converts hours of reading into near-zero retrieval under exam pressure.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The twelve-month window is the boundary that makes the pool finite: for any exam date, \u201ccurrent affairs\u201d means events from roughly the preceding year, with the heaviest weight on the most recent six months. Very-old news returns only when a milestone anniversary or a sequel event revives it (a summit\u2019s next edition, an award\u2019s next cycle, a mission\u2019s next phase) \u2014 which is itself a filing instruction: when you record the new event, link it to the earlier one and refresh both. The window rule kills the two great preparation failures: trying to cover \u201ceverything since school\u201d, and reading the news of exam week itself with no system behind it.',
      },
      {
        kind: 'para',
        text: 'The five lanes organize everything inside the window. Governance and polity: legislation, schemes, court rulings of consequence, appointments to constitutional posts, elections and results. Economy: the Union Budget and the Economic Survey, the central bank\u2019s policy rates and reviews, inflation and growth data, major index movements, banking and market developments. International: summits and their venues, multilateral outcomes, appointments to global bodies, conflicts and treaties in motion. Science and technology: space and nuclear missions, major prizes announced, health developments, the technology headline layer. Sports, awards and persons: the tournament results, the laureates and national honours, the firsts and appointments \u2014 the recent column of the honours sheet in motion. Every event you meet files into exactly one lane; questions arrive lane-first in your memory, and revision runs lane by lane.',
      },
      {
        kind: 'figure',
        caption: 'The current-affairs engine: the twelve-month window feeds five lanes; every event is captured as a one-line card, linked to its static anchor, and kept alive by the 1-7-30 revision rhythm.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Current-affairs engine diagram">
  <style>.t{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.d{font-family:Georgia,serif;font-size:12px;fill:#52525b}.lane{fill:#fafafa;stroke:#8a8a93;stroke-width:1.6}.win{fill:#ecfdf5;stroke:#10b981;stroke-width:2}.card{fill:#fef3c7;stroke:#d97706;stroke-width:2}.rev{fill:#fee2e2;stroke:#e11d48;stroke-width:2}</style>
  <rect class="win" x="40" y="30" width="740" height="56" rx="10"/>
  <text class="t" x="60" y="55">THE 12-MONTH WINDOW</text>
  <text class="d" x="60" y="75">heaviest weight on the most recent six months; older news returns only via sequels and anniversaries</text>
  ${['Governance \u00b7 Polity','Economy','International','Science \u00b7 Technology','Sports \u00b7 Awards \u00b7 Persons'].map((lane, i) => '<rect class="lane" x="40" y="' + (100 + i * 44) + '" width="360" height="36" rx="6"/><text class="d" x="60" y="' + (123 + i * 44) + '" font-weight="bold" fill="#3f3f46">' + lane + '</text>').join('')}
  <rect class="card" x="440" y="100" width="340" height="160" rx="10"/>
  <text class="t" x="460" y="128">THE EVENT CARD \u2014 one line</text>
  ${['who \u00b7 what \u00b7 when \u00b7 where \u00b7 significance','venue-name pairs \u00b7 edition numbers \u00b7 ranks','link to the static anchor underneath'].map((l, i) => '<text class="d" x="460" y="' + (154 + i * 26) + '">' + l + '</text>').join('')}
  <rect class="rev" x="440" y="280" width="340" height="44" rx="10"/>
  <text class="t" x="460" y="308">1 \u00b7 7 \u00b7 30 \u2014 the revision rhythm</text>
  <text class="d" x="60" y="330">lane-by-lane capture \u2192 card format \u2192 static links \u2192 spaced revival</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The event card is the capture format, and its discipline is one line, five fields: who-what-when-where-significance. \u201cThe central bank held its policy rate at X% (when), citing Y (significance).\u201d \u201cThe Z summit was held at (venue), the Nth edition, with membership expanded to (what).\u201d If an event cannot be compressed to one line, you have not understood it \u2014 and if the line lacks the question-asked fields (venue, edition, rank, first), it will not answer anything. Cards carry the pair formats papers love: venue-name pairs, edition numbers, launch dates, record figures. The card is also the unit of revision: the 1-7-30 schedule below operates on cards, never on newspapers or compilations.',
      },
      {
        kind: 'para',
        text: 'Source triage keeps the intake to three streams: one daily (a standard newspaper\u2019s front and national pages, or a daily brief \u2014 twenty minutes, cards made on the spot for lane-worthy items only), one weekly (a current-affairs weekly that consolidates, converting your daily cards into lane files and catching what the daily missed), one monthly (the compilation you re-read as the final consolidation and quiz source). Reading more sources is preparation theatre: the engine runs on capture and revision, not on volume \u2014 three streams, each with a distinct job, is the complete diet.',
      },
      {
        kind: 'para',
        text: 'Linking is what turns current affairs from memory load into memory structure: every event card names its static anchor, and the anchor explains the event. A budget card links to the constitutional provision for the annual financial statement; a monetary-policy card links to the inflation-targeting framework; a summit card links to the organization\u2019s membership and mandate; a mission card links to the space agency\u2019s launch-vehicle lineage; an appointment card links to the post\u2019s constitutional or statutory basis. The link runs both directions at revision time \u2014 static knowledge makes the event\u2019s significance legible, and the event makes the static fact concrete \u2014 and papers examine exactly this junction: \u201cthe body whose summit was held at X was founded in \u2026\u201d is a linking question wearing a current-affairs costume.',
      },
      {
        kind: 'para',
        text: 'The national and international lanes deserve their capture checklists, because their question formats are the most stable. National: appointments (the top constitutional and statutory posts), schemes (launch dates, ministries, targets), reports and indices (who publishes, where India stands), court rulings of general significance, and the budget-economy calendar. International: summits (body, edition, venue, outcome theme), the multilateral appointments (the global bodies\u2019 chiefs), agreements and groupings (members in and out), the conflict-and-treaty layer at headline depth, and the prizes (the six Nobel fields plus the major international awards). Each checklist is a capture prompt during reading and a self-quiz skeleton at revision \u2014 the lane tells you what to ask about every event before the paper does.',
      },
      {
        kind: 'para',
        text: 'The 1-7-30 rhythm is the engine\u2019s maintenance schedule, straight from the study-skills spacing literature: every card is revisited one day after capture (the encoding check), seven days after (the consolidation pass, with the lane file), and thirty days after (the retention pass, with the monthly compilation \u2014 which doubles as the rewrite of the honours sheet\u2019s recent column). Each pass is a self-quiz, not a re-read: cover the card\u2019s answer fields and reproduce them. Cards that survive three passes un-recalled are re-made with better pair formatting; cards for expired events (superseded appointments, completed cycles) are retired. Ten minutes a day of capture, plus the spaced passes, keeps the whole twelve-month pool alive at one-glance depth \u2014 which is precisely the depth the paper asks.',
      },
      {
        kind: 'example',
        title: 'Worked example — one news week through the engine',
        steps: [
          'The week\u2019s lane-worthy items: a major space mission launches; a global summit concludes with a membership announcement; the central bank reviews policy; a national honour list is announced; a tournament final is played.',
          'Capture as five cards, one line each, fields forced: \u201cMission X launched (date) on vehicle Y \u2014 the agency\u2019s first Z\u201d; \u201cSummit N of body B held at venue V \u2014 membership expanded to M\u201d; \u201cPolicy rate held at R% (date) \u2014 inflation cited\u201d; \u201cHonour list: the top award to person P for field F\u201d; \u201cFinal: team T defeated U by margin \u2014 title number K\u201d.',
          'Link each to its static anchor: the mission to the launch-vehicle lineage and the agency\u2019s programme; the summit to the body\u2019s founding and mandate; the rate to the inflation-targeting framework; the honour to the award\u2019s criteria; the title to the trophy\u2019s history.',
          'File by lane (science; international; economy; sports-awards-persons) and schedule the passes: next-day recall of all five, the day-7 lane pass, the day-30 monthly consolidation.',
          'Exam-day retrieval, either direction: \u201cWhich body met at V?\u201d runs venue-to-body off the summit card; \u201cwhat launched on vehicle Y?\u201d runs the reverse. Both directions were drilled because the card forced both fields \u2014 that is the whole design.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Compilation hoarding \u2014 collecting monthly roundups without a capture-revise system \u2014 is the great engine failure: reading is not retention. Reading without lane filters captures trivia and misses the asked fields (venue, edition, rank). Cards without links decay into isolated strings, and linking questions (\u201cthe body that met at X was founded when?\u201d) go unanswered. Un-revised cards expire silently \u2014 the paper asks exactly the month you skipped. And the final-week flood \u2014 abandoning the engine to cram the last fortnight \u2014 trades a working twelve-month system for two weeks of unstructured panic.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Twelve-month window', def: 'The current-affairs boundary: the year before the exam, heaviest in the last six months; older items return via sequels and anniversaries.' },
          { term: 'Five lanes', def: 'Governance-polity, economy, international, science-technology, sports-awards-persons \u2014 the filing structure for every event.' },
          { term: 'Event card', def: 'One-line capture: who, what, when, where, significance \u2014 with the pair fields (venue, edition, rank, first) papers ask.' },
          { term: 'Source triage', def: 'One daily, one weekly, one monthly \u2014 each with a distinct job; more sources are theatre, not preparation.' },
          { term: 'Static anchor', def: 'The evergreen fact every event links to \u2014 the constitutional basis, the founding year, the framework \u2014 making both directions examinable.' },
          { term: 'Lane checklists', def: 'The capture prompts per lane: appointments-schemes-reports-indices nationally; summits-bodies-agreements-prizes internationally.' },
          { term: '1-7-30 rhythm', def: 'Spaced passes at one, seven and thirty days, each a self-quiz over cards and lane files \u2014 the engine\u2019s maintenance schedule.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'For an exam in April, the current-affairs window with the heaviest weight covers:',
            options: ['Everything since school', 'Roughly the preceding 12 months, heaviest in the last 6', 'Only the exam month', 'The last 5 years equally'],
            answer: 1,
            explain: 'The window rule makes the pool finite: a year of events, weighted toward the recent half; older news returns only when a sequel or anniversary revives it \u2014 which is a linking instruction, not extra reading.',
          },
          {
            q: 'A summit concludes with a membership expansion. The complete event card records:',
            options: ['A paragraph on the body\u2019s history', 'One line: body, edition, venue, outcome \u2014 with the pair fields papers ask', 'The full membership list', 'Only the date'],
            answer: 1,
            explain: 'The card is one line, five fields, and must carry the asked fields \u2014 venue-name, edition number, what changed. A card that cannot be compressed to one line has not been understood; a card without the pair fields will not answer anything.',
          },
          {
            q: 'A card notes a new monetary-policy decision. Its static anchor is:',
            options: ['The finance minister\u2019s biography', 'The inflation-targeting framework and the central bank\u2019s mandate', 'The previous year\u2019s budget speech', 'A newspaper editorial'],
            answer: 1,
            explain: 'Linking: the event (a rate decision) anchors to the framework that explains it (the inflation target, the review cycle). Papers examine the junction both directions \u2014 the body, its mandate, and the decision.',
          },
          {
            q: 'The 1-7-30 rhythm schedules:',
            options: ['Three full re-reads of every compilation', 'Self-quiz passes over cards at one, seven and thirty days', 'One revision on exam eve', 'Reading three newspapers daily'],
            answer: 1,
            explain: 'Spacing applied to news: the day-1 pass checks encoding, day-7 consolidates with the lane file, day-30 aligns with the monthly consolidation. Each pass is active recall, never re-reading \u2014 the study-skills law, applied to current affairs.',
          },
          {
            q: 'Source triage for the engine is:',
            options: ['As many compilations as possible', 'One daily, one weekly, one monthly \u2014 each with a distinct job', 'Only the exam board\u2019s bulletin', 'Social-media summaries'],
            answer: 1,
            explain: 'Daily for capture, weekly for consolidation, monthly for the final pass and quiz \u2014 three streams, three jobs. Volume beyond that is preparation theatre: the engine runs on capture and revision, not on reading more.',
          },
          {
            q: '\u201cThe body whose summit was held at venue V was founded in \u2026\u201d is an example of:',
            options: ['A pure static question', 'A linking question \u2014 current event asking its static anchor', 'An opinion question', 'A calculation question'],
            answer: 1,
            explain: 'The junction format: the event supplies the hook (this year\u2019s summit, its venue), the static layer supplies the answer (the founding year). Cards that name their anchor answer these; unlinked cards cannot.',
          },
          {
            q: 'Cards for a superseded appointment (the official has since retired) should be:',
            options: ['Kept and drilled forever', 'Retired at the monthly pass and replaced by the current occupant', 'Deleted immediately on rumor', 'Merged into the static layer'],
            answer: 1,
            explain: 'The recent layer cycles: the monthly consolidation retires expired cards and rewrites the honours sheet\u2019s role-pairs. The engine\u2019s health is exactly this renewal \u2014 a sheet full of stale occupants answers last year\u2019s paper.',
          },
          {
            q: 'The five lanes of the engine are:',
            options: ['History, geography, polity, economy, science', 'Governance-polity, economy, international, science-technology, sports-awards-persons', 'Cricket, politics, films, business, weather', 'National, regional, local, global, space'],
            answer: 1,
            explain: 'The lanes organize the window\u2019s pool: every event files into exactly one, revision runs lane by lane, and the checklists (appointments-schemes-reports; summits-bodies-agreements-prizes) turn each lane into a capture prompt and quiz skeleton.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The spacing science under the 1-7-30 rhythm lives in full in the Study Skills subject\u2019s spaced-repetition lesson; the static anchors \u2014 constitutional posts, the economic framework, the space programme\u2019s history, the honours ladders \u2014 are the deep subjects this one points to. Within General Awareness, this engine completes the subject\u2019s method core: the recall ladder for history, the culture atlas, the honours map, and now the living layer that binds them to the year\u2019s events.',
        tone: 'path',
      },
    ],
  },
]
