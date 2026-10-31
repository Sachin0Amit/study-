/**
 * Knowledge Universe — Logical Reasoning — Chapter 06: Clocks, Calendars & Mathematical Logic
 * 1 lesson · ~2,042 words
 * field: Logical Reasoning
 * legacy sources: aptitude.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Mathematical Logic]
 *
 * Lessons (snapshot at reorganization):
 *   06.1 lr-clock-calendar — Clocks and Calendars: Angles, Odd Days and Repeating Cycles
 */
import type { KnowledgeTopic } from '../../types'

export const logicalReasoningCh06: KnowledgeTopic[] = [
  // ================================================================
  // LOGICAL REASONING — Ch7 Clocks, Calendars & Mathematical Logic
  // §7.1 — clock angles and calendar cycles at examination speed.
  // Carve: biology's biological-clocks lesson owns CIRCADIAN rhythm
  // (different sense); time-management owns productivity. No topic
  // owns clock-angle arithmetic or odd-day computation (greps
  // 'odd days', 'clock angle' — zero hits).
  // ================================================================
  {
    id: 'lr-clock-calendar',
    title: 'Clocks and Calendars: Angles, Odd Days and Repeating Cycles',
    domain: 'Aptitude & Test Preparation',
    field: 'Logical Reasoning',
    branch: 'Mathematical Logic',
    tier: 'core',
    concepts: [
      'the clock as a rate problem: 6° per minute versus 0.5° per minute',
      'the angle formula and its reflex partner',
      'the relative-speed method for coincidence, opposition and right angles',
      'odd days: the week remainder that carries calendar structure',
      'the leap-year rules including the century exception',
      'day-of-week computation from a known anchor',
      'repeating calendars and the cycle arithmetic behind them',
    ],
    words: 2044,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Two ancient machines — the analog clock face and the seven-day week — still power a whole family of reasoning items: angle-between-hands at a given time, when the hands will coincide, which day a date falls on, whether two years share a calendar. School-entrance general tests, civil-services aptitude papers, recruitment screenings and defence-academy ability sections all set them, because they compress real arithmetic (rates, modular cycles) into objects everyone knows. The family looks fussy but runs on exactly two engines: a relative speed on the clock, and a remainder count on the calendar. This lesson builds both engines and the short derivations behind them, so nothing needs memorizing that can be rebuilt in thirty seconds.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Clock and calendar items are pure method: once the two engines are installed, every variant — reflex angles, faulty clocks, day-after-tomorrow puzzles, calendar repetition — collapses to a two-line computation. They also carry high nostalgia-trap risk: candidates attempt them by imagining the hands visually and miscounting, when the rate arithmetic is both faster and exact.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The clock is a rate problem in disguise. The minute hand sweeps the full 360° of the face in 60 minutes: 6° per minute. The hour hand sweeps 360° in 12 hours = 720 minutes: 0.5° per minute. Every clock question is a question about these two speeds — usually their difference, the relative speed of 5.5° per minute at which the minute hand gains on the hour hand. Read the hands as two runners on a circular track and the whole format becomes pursuit arithmetic: coincidences are overtakes, oppositions are half-track separations, right angles are quarter-track separations.',
      },
      {
        kind: 'para',
        text: 'The angle formula assembles the two rates. At H : M (with H read on the 12-hour scale), the hour hand sits at 30H + 0.5M degrees from 12 (it moved 30° per full hour plus half a degree per minute past the hour), and the minute hand sits at 6M degrees. The gap is |30H − 5.5M| — and because the question conventionally wants the smaller angle, take the lesser of that value and 360° minus it. At 3:40, the formula gives |90 − 220| = 130° (the reflex partner is 230°; answer 130°). The formula is worth deriving once on paper rather than memorizing, because derived formulas survive pressure while memorized ones blur — and the derivation is literally the two rates multiplied by time.',
      },
      {
        kind: 'figure',
        caption: 'The two hands as runners: the minute hand gains 5.5° per minute on the hour hand — coincidence, right angle and opposition are the 0°, 90° and 180° separation marks of a pursuit problem on a 360° track.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clock face as pursuit track with relative speed annotation">
  <style>.f{font-family:Georgia,serif;font-size:13px;fill:#52525b}.b{font-family:Georgia,serif;font-size:15px;font-weight:bold;fill:#3f3f46}.r{font-family:Georgia,serif;font-size:13px;font-weight:bold;fill:#e11d48}.g{font-family:Georgia,serif;font-size:13px;font-weight:bold;fill:#0f766e}.face{fill:#fafafa;stroke:#8a8a93;stroke-width:2.4}</style>
  <circle class="face" cx="190" cy="160" r="110"/>
  ${Array.from({length: 12}, (_, i) => { const a = (i * 30 - 60) * Math.PI / 180; return '<text class="f" x="' + Math.round(190 + 92 * Math.cos(a)) + '" y="' + Math.round(160 + 92 * Math.sin(a) + 4) + '" text-anchor="middle">' + (i + 1) + '</text>' }).join('')}
  <line x1="190" y1="160" x2="245" y2="105" stroke="#52525b" stroke-width="5" stroke-linecap="round"/>
  <line x1="190" y1="160" x2="190" y2="70" stroke="#e11d48" stroke-width="3" stroke-linecap="round"/>
  <circle cx="190" cy="160" r="5" fill="#3f3f46"/>
  <text class="g" x="250" y="70">minute hand: 6° per minute</text>
  <text class="r" x="250" y="96">hour hand: 0.5° per minute</text>
  <text class="b" x="250" y="130">relative speed: 5.5° per minute</text>
  <text class="f" x="250" y="160">coincidence = overtake every 360/5.5 = 65 5/11 min</text>
  <text class="f" x="250" y="186">right angle = 90° gap on the track</text>
  <text class="f" x="250" y="212">opposition = 180° gap on the track</text>
  <text class="f" x="250" y="246">At 3:40 the gap is |30\u00d73 \u2212 5.5\u00d740| = 130\u00b0</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The relative-speed method answers the “when” questions. When between 2 and 3 will the hands coincide? At 2:00 the hour hand leads by 60°; the minute hand closes at 5.5° per minute; time = 60/5.5 = 10 10/11 minutes, so the coincidence falls at 2:10 10/11. The same template solves every variant: for opposition, close a (gap − 180)° head start (or gap + 180, whichever is the legal chase); for a right angle, close to 90° or 270° — and because 270 is just the far-side crossing, each full hour contains two right-angle moments. The counting corollaries worth knowing cold: in 12 hours the hands coincide 11 times, are opposite 11 times, and form right angles 22 times — because the minute hand laps the hour hand 11 times per half-day, not 12 (the lap takes 65 5/11 minutes, and 720 ÷ 720/11 = 11).',
      },
      {
        kind: 'para',
        text: 'Odd days are the calendar\u2019s entire engine: the remainder when a span of days is divided by 7. An ordinary year is 365 = 52 weeks + 1 day — one odd day; a leap year leaves two. Odd days ADD across spans, which is why the calendar of a date shifts by one weekday per ordinary year and two per leap year. The century blocks are precomputed once and used forever: 100 years contain 76 ordinary + 24 leap years (the century exception below), giving 76 + 48 = 124 odd days ≡ 5 (mod 7); so 200 years ≡ 3, 300 years ≡ 1, and 400 years ≡ 0 — the Gregorian calendar repeats its weekday pattern exactly every 400 years, which is also why 1 January 1600, 2000 and 2400 all fall on the same weekday.',
      },
      {
        kind: 'para',
        text: 'The leap-year rules carry one famous exception: divisible by 4 means leap, EXCEPT century years, which must be divisible by 400 — so 1700, 1800 and 1900 were ordinary years while 1600 and 2000 were leap. The exception exists because the true tropical year is 365.2422 days, not 365.25: adding a leap day every fourth year over-corrects slightly, and dropping three leap days per 400 years trims the drift to near-nothing. The screening-test manifestation: “was 1900 a leap year?” is a designed trap item, and any odd-day computation crossing a non-400 century must price the exception in.',
      },
      {
        kind: 'para',
        text: 'Day-of-week computation runs from a known anchor. Use 1 January 2000 = Saturday (or any date you know cold — 15 August 1947 = Friday serves equally well). Count total days between anchor and target in three blocks — completed years (odd days via leap counting), completed months of the current year (month lengths: 31, 28/29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), and the day of the month — then reduce mod 7 and walk the anchor forward that many weekdays. The method is mechanical, and its two error sources are exactly the two traps above: forgetting a leap February when the span crosses it, and the century exception on long spans.',
      },
      {
        kind: 'para',
        text: 'Repeating calendars are the cycle arithmetic turned into a question: in which future year will the calendar of 2024 (a leap year) be reused? A year\u2019s calendar is fully determined by its leap status and the weekday of its 1 January — so scan forward, accumulating odd days until both match: leap years repeat after 28 years when the 28-year odd-day sum is 0 mod 7 (as it is whenever the span contains exactly 7 leap years — true unless a non-400 century intervenes). The standard results: a leap year repeats after 28; the year after a leap year after 6; the second and third years after a leap year after 11. The derivation takes one line of odd-day sums and beats every memorized table when the paper varies the question — which it does.',
      },
      {
        kind: 'example',
        title: 'Worked example — 15 August 1947, from anchor to weekday',
        steps: [
          'Anchor: 1 January 1900 = Monday (equivalently 1 January 2000 = Saturday; pick one and stay consistent).',
          'Years block: 1900 through 1946 = 47 completed years before 1947. Leap years among them: 1904, 1908, …, 1944 = 11 (1900 is NOT leap — the century exception). Odd days = 47 + 11 = 58 ≡ 2 (mod 7). So 1 January 1947 = Monday + 2 = Wednesday.',
          'Months block: days from 1 January to 15 August 1947 (an ordinary year): 31 + 28 + 31 + 30 + 31 + 30 + 31 + 15 = 227 days — that is day number 227 of the year, i.e. 226 days after 1 January.',
          'Reduce: 226 ≡ 2 (mod 7). 15 August 1947 = Wednesday + 2 = Friday.',
          'Cross-check with the second anchor: 15 August 1947 = Friday is the historically known weekday — two independent routes agreeing is the built-in audit of the method.',
          'Note the structure for reuse: anchor → years (odd days) → months (lengths) → days → mod 7 → walk. Every date question ever set is this ladder, and the only traps live inside the years block (leap counting and the century exception).',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Taking the reflex angle when the smaller is asked (and vice versa) — read “angle between” as the smaller unless stated. Forgetting that the hour hand MOVES during the minute — the 0.5M term exists precisely for that error. Miscounting laps: 11 coincidences per 12 hours, not 12, because each lap takes 65 5/11 minutes. On calendars: the 1900-class century exception, and leap-February crossing in the months block. Every wrong option in this family is one of these five errors computed cleanly.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Relative speed', def: 'The minute hand gains 5.5° per minute on the hour hand — the pursuit engine of every “when” question.' },
          { term: 'Angle formula', def: 'Gap = |30H − 5.5M| degrees at H:M; take the lesser of the gap and 360° − gap for the conventional answer.' },
          { term: 'Lap counting', def: 'The minute hand laps the hour hand 11 times per 12 hours: 11 coincidences, 11 oppositions, 22 right angles.' },
          { term: 'Odd days', def: 'Days remaining after whole weeks: 1 per ordinary year, 2 per leap year; they add across spans and shift weekdays.' },
          { term: 'Century blocks', def: '100 years ≡ 5 odd days, 200 ≡ 3, 300 ≡ 1, 400 ≡ 0 — the Gregorian cycle repeats every 400 years.' },
          { term: 'Century exception', def: 'Century years are leap only when divisible by 400: 1700, 1800, 1900 ordinary; 1600, 2000 leap.' },
          { term: 'Anchor date', def: 'A known weekday (1 January 2000 = Saturday) from which day-of-week computations walk by accumulated odd days.' },
          { term: 'Repeating calendar', def: 'A year\u2019s calendar reuses after 6, 11 or 28 years depending on position in the leap cycle — derived from odd-day sums, not memorized.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The angle between the hands at 3:40 is:',
            options: ['120°', '130°', '140°', '230°'],
            answer: 1,
            explain: '|30×3 − 5.5×40| = |90 − 220| = 130°, and the smaller of 130/230 is 130. Option 230 is the reflex partner waiting for candidates who forget the convention; 120 comes from dropping the 0.5M hour-hand drift.',
          },
          {
            q: 'The hands of a clock coincide every:',
            options: ['60 minutes', '65 minutes', '65 5/11 minutes', '72 minutes'],
            answer: 2,
            explain: 'A full lap is 360° at 5.5°/min = 720/11 = 65 5/11 minutes. This is why 12 hours contain exactly 11 coincidences — the source of half the counting traps in the family.',
          },
          {
            q: 'In 12 hours, the hands form a right angle:',
            options: ['11 times', '12 times', '22 times', '24 times'],
            answer: 2,
            explain: 'Two quarter-track marks per lap (90° and 270° separations), 11 laps per 12 hours → 22 right angles. The 24 distractor assumes two per hour naively; the last hour of the half-day shares a crossing with the first of the next.',
          },
          {
            q: 'Between 2 and 3 o\u2019clock, the hands coincide at:',
            options: ['2:10 exactly', '2:10 10/11', '2:12', '2:09 1/11'],
            answer: 1,
            explain: 'At 2:00 the hour hand leads by 60°; closing at 5.5°/min takes 60/5.5 = 10 10/11 minutes. The exact fraction is the point — “2:10 exactly” is the designed near-miss.',
          },
          {
            q: 'The number of odd days in 100 years is:',
            options: ['4', '5', '1', '0'],
            answer: 1,
            explain: '100 years = 76 ordinary + 24 leap years (the 400-rule drops 1900-class years) = 76 + 48 = 124 odd days ≡ 5 (mod 7). The chain continues: 200 years ≡ 3, 300 ≡ 1, 400 ≡ 0.',
          },
          {
            q: 'Which of these years was NOT a leap year?',
            options: ['1600', '1700', '2000', '2024'],
            answer: 1,
            explain: 'Century years need divisibility by 400: 1700, 1800 and 1900 are ordinary; 1600 and 2000 are leap. The exception exists because the tropical year is 365.2422, not 365.25 days.',
          },
          {
            q: 'A leap year\u2019s calendar (with no century break in between) repeats after:',
            options: ['6 years', '11 years', '28 years', 'depends on the month'],
            answer: 2,
            explain: 'A 28-year span holds exactly 7 leap years → 28 + 7 = 35 odd days ≡ 0 (mod 7), and year 28 + start is itself leap again — both the weekday pattern and leap status match. The 6- and 11-year repeats belong to the years AFTER a leap year.',
          },
          {
            q: 'An ordinary year shifts the weekday of any fixed date by:',
            options: ['0 days', '1 day', '2 days', '7 days'],
            answer: 1,
            explain: '365 = 52 weeks + 1 odd day: one weekday forward (a Tuesday date lands Wednesday next ordinary year, two days forward after a leap February intervenes). This single fact generates every “same date, next year” item ever set.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The rate arithmetic here is the same pursuit structure as Time–Speed–Distance in the Quantitative Aptitude subject, and the mod-7 cycles are the calendar face of the remainder machinery built in Remainders and Cyclicity. For the deep story — why weeks exist, calendar reform history, and the astronomy of the tropical year — the Astronomy and History of Science subjects own the narrative; here you own the computational layer.',
        tone: 'path',
      },
    ],
  },
]
