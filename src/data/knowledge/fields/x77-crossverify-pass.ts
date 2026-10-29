import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X77 pass (2026-10-30): CROSSVERIFY-20261030-1 — Zoology (book #8   */
/*  in knowledge-meta order, first subject not yet marked done).       */
/*                                                                     */
/*  BOOK SEARCH: the two most popular zoology texts on earth —         */
/*  Hickman et al., Integrated Principles of Zoology (now 19e; the     */
/*  #1-adopted zoology text, named main textbook by Doane University   */
/*  and College of the Redwoods syllabi) and Miller & Harley, Zoology  */
/*  — have NO legitimately free full PDF: McGraw-Hill hosts only       */
/*  marketing TOC/flyer PDFs (the official 18e TOC was downloaded and  */
/*  read from mheducation.com — legitimate), archive.org's Miller &    */
/*  Harley 2002 item is lending-locked (lcpdf only; raw download      */
/*  returns a 172-byte HTML gate, deleted on sight), and every "full   */
/*  PDF" hit (dl.icdst.org, dokumen.pub, scribd, slideshare) is a      */
/*  pirate mirror — off-limits. GitHub holds only the same mirrors.    */
/*  Per the amendment ladder this run is therefore INTERNET-RESEARCH:  */
/*  coverage cross-checked against the official Hickman 18e TOC        */
/*  (in-scope chapters: 9 Architectural Pattern, 10 Taxonomy &         */
/*  Phylogeny, 33.4 Sense Organs, 36 Animal Behavior) and facts        */
/*  verified against open-authority sources actually read:             */
/*  Beer/Zupanc/Helfrich-Forster 2024 (J Comp Physiol A, CC BY —       */
/*  Beling 1929 time-memory under von Frisch), TIME/NYT 1955 on       */
/*  Max Renner's transatlantic bees ("3:15 New York time, 8:15 Paris   */
/*  time"), Gwinner 2003 (circannual rhythms persist under constant    */
/*  conditions, period deviates from 12 months), Gwinner 1999 (Proc    */
/*  Int Ornithol Congr: sparrows learn feeding time via circadian      */
/*  clock), Merlin-Gegear-Reppert 2009 Science + Reppert 2016          */
/*  (antennal circadian clocks time-compensate the monarch sun         */
/*  compass; 6-h delayed LD shifts orientation), Krebs 1977 (great     */
/*  tits took the profitable prey in 95% of encounters) and            */
/*  J.M. Tinbergen 1981 (Ardea 69: starling optimal load 6-7,          */
/*  observed 5.9).                                                     */
/*                                                                     */
/*  VERDICTS:                                                          */
/*  - CORRECTED (was X -> source says Y): the ethology lesson credited */
/*    the central-place load-size result to "starlings and             */
/*    chickadees"; chickadee load-vs-distance is not the canonical     */
/*    evidence — the canonical pair is great tits (Krebs 1977, 95%)    */
/*    and starlings (Tinbergen 1981, observed 5.9 vs predicted 6-7).   */
/*    Fixed in place; no other factual errors found in the four        */
/*    lessons (phyla counts, haplodiploidy 3/4, ampullae nV/cm,        */
/*    cryptochrome, Beling-adjacent founders, phyla tour all check).   */
/*  - MISSING vs Hickman 36.2 "Control of Behavior" -> NEW LESSON:     */
/*    biological clocks, Zeitgeber entrainment, time memory,           */
/*    circannual programs and hormonal control were absent from the    */
/*    zoology book (circadian existed only in human-health framing).   */
/*    Added as bio-animal-behavior-rhythms (branch Minds in the Wild,  */
/*    routes to the Senses & Behavior chapter next to the ethology     */
/*    lesson). Carve evidence: 'Zugunruhe' 0 hits, 'Gwinner' 0,        */
/*    'time memory' 0, 'circannual' 0 in live topics; 'zeitgeber'      */
/*    only in the human-sleep lesson; 'monarch' hits are env/history   */
/*    pages, none own the sun-compass clock.                           */
/*  - MISSING vs Hickman 33.4 "Sense Organs" -> ENRICHED the senses    */
/*    lesson with the lateral-line/mechanoreception paragraph          */
/*    ('lateral line' 0 live hits before this pass) + 2 terms +        */
/*    1 quiz item.                                                     */
/*  - NOT ADDED (carved against neighbours): Hickman 10.4 theories of  */
/*    taxonomy (the Evolutionary Biology + Bioinformatics books own    */
/*    cladistics/phylogenetics) and 9.4 allometry (kept for a future   */
/*    pass — 'surface area to volume' 0 hits but the body-plans lesson */
/*    is compact; enlarging three lessons in one run would bloat QA).  */
/* ------------------------------------------------------------------ */

export const x77CrossverifyZoologyTopics: KnowledgeTopic[] = [
  {
    id: 'bio-animal-behavior-rhythms',
    title: 'Biological Clocks and Rhythms: The Hidden Timetables of Behavior',
    domain: 'Life Sciences',
    field: 'Animal Behavior',
    branch: 'Minds in the Wild',
    tier: 'intermediate',
    concepts: [
      'Endogenous clocks: rhythms that free-run',
      'Zeitgebers and entrainment',
      'Time memory: the honeybee clock in action',
      'Circannual programs and migratory restlessness',
      "The monarch's time-compensated sun compass",
      'Hormones: the slower control layer',
    ],
    words: 1914,
    readMins: 10,
    addedOn: '2026-10-30',
    blocks: [
      {
        kind: 'para',
        text: 'Watch a beehive at dawn and you are watching a schedule, not a reflex: the foragers that found nectar on a patch yesterday reappear today at exactly the hour the flowers will yield it again — even if no flowers are there. Behavior is not only triggered (the fixed action patterns of the ethology lesson) and not only learned; it is TIMED. Animals run internal clocks — built into cells, set by the world — and much of what an animal does, from singing at first light to growing restless before migration, is the clock showing its hands. This lesson walks the clocks themselves, how the world keeps them wound, and two famous cases where timing is the whole trick: the honeybee\'s memory for meal times and the monarch butterfly\'s compass that must know what o\'clock it is.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Clocks schedule the living world: crop pollination rides on bee foraging times, migratory pests and songbirds arrive on timetables set by these mechanisms, and jet lag is your own clock re-entraining the slow way. Knowing that a behavior is clock-timed changes how it is studied, predicted and managed — and the discovery machinery behind it all is classic experimental zoology, still cited across chronobiology today.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The first discovery was negative space: rhythms that CONTINUE without the environment. Put an animal in constant darkness with constant temperature and the daily rhythm does not stop — it free-runs with a period close to but not exactly twenty-four hours (about 23.5 in some fruit-fly strains, 24.3 in others), drifting slowly out of register with the outside world. A rhythm that free-runs under constant conditions must be generated inside the animal: it is endogenous. By the late 1950s and early 1960s — with Jürgen Aschoff\'s constant-condition bunkers a famous instrument of the proof — biologists accepted that daily rhythms are driven by internal circadian clocks (circa = about, dies = a day), not by external cues read afresh each morning. The molecular machinery followed in 1971, when Ronald Konopka and Seymour Benzer isolated mutant fruit flies with broken period genes — clock genes whose products cycle, feed back on their own transcription, and take roughly a day to complete the loop, a design repeated from flies to humans.',
      },
      {
        kind: 'para',
        text: 'A free-running clock is useless, though, unless it is set. The environmental cues that pull a clock back into register each cycle are Zeitgebers — "time givers" — and light is the master of them: the daily dawn shifts the clock\'s phase so its period matches Earth\'s exactly, a process called entrainment. Temperature cycles, feeding times, tides and social cues entrain too (bees can even be entrained by a feeding schedule alone). The signature of entrainment is what a time-zone jump shows: the rhythm does not snap to the new light cycle, it slides a little each day — jet lag, in the lab\'s language — and a few days later the clock has caught up. Entrainment matters for every later experiment: to claim a clock is endogenous you must show free-run in constant conditions; to claim it is entrainable you must show the Zeitgeber pulling it.',
      },
      {
        kind: 'para',
        text: 'The honeybee experiment is chronobiology\'s jewel. In 1929 Ingeborg Beling, a doctoral student of Karl von Frisch in Munich, trained bees to visit a feeding station at a fixed time of day — and showed they would return punctually day after day even with the station empty, remembering the MEAL TIME, not just the place. Her controls were surgical: bees kept in constant darkness, away from the hive\'s light and social rhythms, still arrived at the trained hour, and if the cycle length were shifted the memory shifted with it. Then Max Renner pushed the question across the Atlantic in 1955: bees trained to a New York feeding time were flown overnight to Paris — and emerged at the feeding station at 3:15 Paris clock time, which was 3:15 New York time, swarming as their inner clocks said mealtime while Parisian sunlight said otherwise. The time memory was carried by the bees, not by watching the sky. The experiment made the bee\'s endogenous clock a fact, and the "time memory" (Zeitgedächtnis) Beling mapped remains one of the cleanest animal-clock behaviors known.',
      },
      {
        kind: 'para',
        text: 'Clocks also run on the year. Migratory birds caged through winter show Zugunruhe — migratory restlessness, the wing-whirring nighttime hopping Konrad Lorenz named and Günther Kramer first measured — that swells each spring and autumn even under constant laboratory conditions. Eberhard Gwinner spent decades proving the startling depth of this: garden warblers kept for years in constant conditions repeat migratory fattening, restlessness and molt on cycles of roughly twelve months but consistently DEVIATING from it — some birds cycling near thirteen months — for many consecutive cycles. These circannual rhythms (circa-annus, about a year) are endogenous calendars, entrained by the year\'s photoperiod, that open and close seasonal programs: when to migrate, when to breed, when the winter coat comes. Sparrows even use the circadian clock to learn what hour food appears, and garden warblers run their migration program inside a circannual window while staying flexible within it — fixed frameworks, adjustable details.',
      },
      {
        kind: 'para',
        text: "The most elegant clock-plus-compass device belongs to the monarch butterfly. Migrating monarchs navigate thousands of kilometers to central Mexico using the sun — but the sun is a moving target, its azimuth sweeping about fifteen degrees every hour. A compass that ignored the hour would fly a curving spiral; a compass that KNOWS the hour can compensate and hold a constant heading. Monarchs do exactly this: their sun compass is time-compensated, and the clock doing the compensating sits in the antennae — Christine Merlin, Robert Gegear and Steven Reppert showed in 2009 that removing the antennae abolished proper time-compensated orientation, that the antennae carry their own clock-gene rhythms, and that shifting the light cycle by six hours shifted the butterflies' predicted heading accordingly. Antennae act as both clock and sensor — a finding that has redrawn how biologists look for clocks in other sun-compass insects.",
      },
      {
        kind: 'para',
        text: 'Beneath the clocks sits a slower control layer: hormones. The nervous system triggers behavior in milliseconds; endocrine chemistry tunes behavior over hours, seasons and a lifetime. Testosterone and the song system of songbirds are the classic case — seasonal hormone surges grow the neural circuitry for song and drive its expression in spring, matching behavior to breeding season. Insects use hormones the same way at metamorphosis and in caste behavior, and the clock-and-hormone layers interlock: melatonin, the darkness hormone, is the mammalian clock\'s chemical messenger to the body, and photoperiod read through the hormonal axis sets breeding seasons. Control of behavior, in Hickman\'s textbook framing, is a hierarchy: neural release, hormonal modulation, circadian scheduling, circannual programming — four clocks ticking at four speeds over the same animal.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: why a time-blind sun compass would strand a migrating monarch, and how much compensation the clock must supply.',
          'The sun\'s azimuth sweeps 360 degrees in 24 hours — about 15 degrees per hour. A butterfly that steers a fixed angle to the sun while the sun drifts 15 degrees will itself drift off course by that rate.',
          'By 3 PM the sun has moved 45 degrees from its noon azimuth (3 hours x 15). The clock must add that 45 degrees of correction to keep the same world-heading — morning compensates one way, afternoon the other.',
          'Test the model against the 2009 experiment: shift the light cycle by 6 hours and the correction becomes 6 x 15 = 90 degrees — the butterflies should now hold a heading turned by roughly a right angle, which is exactly what Merlin, Gegear and Reppert observed in delayed-cycle migrants, while antenna-less butterflies simply failed to compensate. The arithmetic and the antennae agree.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Pollination management: hive placement and flower availability schedules built around the bees\' time memory and foraging hours',
          'Migration protection: lights-out programs and seasonal curfews timed to when circannual clocks send billions of birds aloft',
          'Livestock and aquaculture: feeding and lighting regimes designed to entrain rather than fight endogenous rhythms',
          'Pest forecasting: emergence and swarming times of insects predicted from degree-days and circadian flight windows',
          'Human relevance: the same clock-gene feedback loop and Zeitgeber logic that schedules animals underlies shift-work medicine and jet-lag advice',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not call a rhythm "circadian" just because it is daily — circadian means a FREE-RUNNING rhythm of about a day has been demonstrated under constant conditions; a pattern that vanishes in darkness may be exogenously driven. Do not confuse entrainment with learning: the bee\'s time memory is not a remembered reward schedule but an internal clock the schedule entrains — Renner\'s Paris bees proved the clock travels with the animal. Zugunruhe is restlessness measured in caged birds, not a synonym for migration itself. And hormones do not "cause" behaviors one-to-one: they bias thresholds and tune circuits over longer scales, which is why the control hierarchy has four layers, not one.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Endogenous rhythm', def: 'A rhythm generated inside the animal, proven by free-running under constant conditions.' },
          { term: 'Free-run', def: 'A rhythm continuing without environmental cues, drifting off the 24-hour or 12-month register.' },
          { term: 'Zeitgeber', def: 'A "time giver" — the environmental cue (usually light) that entrains an endogenous clock.' },
          { term: 'Entrainment', def: 'Phase-pulling of a clock into register with the environment; the slow slide after a time-zone jump is its signature.' },
          { term: 'Time memory', def: 'The honeybee\'s clock-based memory of daily feeding time, first mapped by Beling in 1929.' },
          { term: 'Zugunruhe', def: 'Migratory restlessness — nighttime locomotor surges in caged migratory birds, swelling seasonally.' },
          { term: 'Circannual rhythm', def: 'An endogenous rhythm of about a year (Gwinner\'s garden warblers ran near 13 months in constant conditions).' },
          { term: 'Time-compensated compass', def: 'A sun compass whose heading is corrected by the clock for the sun\'s ~15°/hour azimuth drift — the monarch\'s device.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which observation proves a daily rhythm is ENDogenous?',
            options: [
              'it aligns with sunrise',
              'it free-runs with a non-24-hour period under constant darkness and temperature',
              'it stops when food is removed',
              'it appears only in social animals',
            ],
            answer: 1,
            explain: 'Free-running under constant conditions means the rhythm is generated internally — an external driver would keep 24-hour time.',
          },
          {
            q: 'Renner\'s bees trained in New York and flown to Paris emerged at the feeding station at 3:15 Paris time. This showed the time memory is:',
            options: [
              'learned from local Paris bees',
              'carried by an endogenous clock keeping New York time',
              'driven by the sun\'s position over Paris',
              'a response to the feeding station\'s smell',
            ],
            answer: 1,
            explain: '8:15 AM Paris was 3:15 AM New York — the bees kept their entrained New York clock in a new environment.',
          },
          {
            q: 'Gwinner\'s garden warblers in constant conditions repeated annual cycles near thirteen months. That finding established:',
            options: [
              'migration is purely learned',
              'circannual rhythms are endogenous and need not equal the calendar year',
              'birds cannot be entrained',
              'constant conditions stop reproduction',
            ],
            answer: 1,
            explain: 'A period that deviates from 12 months yet persists for years is an internal calendar, entrained but not generated by the environment.',
          },
          {
            q: 'Shifting the monarch\'s light cycle by 6 hours shifts the time-compensation by roughly:',
            options: ['6 degrees', '15 degrees', '45 degrees', '90 degrees'],
            answer: 3,
            explain: 'Compensation runs at about 15 degrees per hour of clock shift — 6 x 15 = 90, the right-angle heading error Merlin, Gegear and Reppert produced.',
          },
          {
            q: 'In Hickman\'s control-of-behavior hierarchy, hormonal control differs from neural control chiefly in:',
            options: [
              'its millisecond speed',
              'its hours-to-seasons timescale via circulating chemistry',
              'its independence of the brain',
              'its restriction to insects',
            ],
            answer: 1,
            explain: 'Nerves trigger in milliseconds; hormones tune behavior over hours to seasons — the two layers interlock, they do not compete.',
          },
        ],
      },
    ],
  },
]
