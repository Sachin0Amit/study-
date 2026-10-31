/**
 * Knowledge Universe — Design — Chapter 01: Design Foundations
 * 2 lessons · ~2,524 words
 * field: Visual Design
 * legacy sources: arts-culture.ts, x41-arts-design-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Design Foundations]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 design-process-brief — The Design Process: From Brief to Prototype
 *   01.2 art-color-theory — Color Theory: Why Combinations Work
 */
import type { KnowledgeTopic } from '../../types'

export const designCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'design-process-brief',
    title: 'The Design Process: From Brief to Prototype',
    domain: 'Arts & Culture',
    field: 'Visual Design',
    branch: 'Design Foundations',
    tier: 'core',
    concepts: [
      'Reading the brief: audience, constraints, success criteria',
      'Empathy research: interviews, observation, competitive audits',
      'Divergent then convergent ideation',
      'The iteration loop: prototype, test, learn, repeat',
      'The fidelity ladder: thumbnail to clickable prototype',
      'Presenting decisions and handing off cleanly',
    ],
    words: 1453,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Design looks like a lightning strike from the outside — inspiration arrives, a logo falls out. In practice it is a process with checkpoints, and this lesson walks that process end to end: reading a brief, researching real people, generating and pruning ideas, building prototypes, testing them, and handing the finished work to whoever must print, build, or ship it. Craft matters; process is what makes craft repeatable.',
      },
      {
        kind: 'para',
        text: 'The process encodes one deep habit: design solves problems for other people, not puzzles for the designer. The poster that wins praise but fills no seats, the app screen that photographs beautifully and bewilders the first-time user — both are failures the process exists to prevent. Every stage, from brief to handoff, exists to keep the work tethered to somebody else\'s need.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Taste is not a plan. A designer with a process can take any brief — a book jacket, a checkout flow, a festival identity — and produce defensible work on a deadline, which is what clients, employers, and portfolios actually measure. The same loop scales from a birthday invitation to a product launch.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'From Brief to Insight' },
      {
        kind: 'para',
        text: 'A brief is the contract that starts the work, and the first skill is reading it actively. Three questions do most of the work. Who is the audience — not "everyone," but the specific person whose attention must be won? What are the constraints — budget, formats, deadlines, brand rules, legal lines — each one a boundary that shapes the solution rather than an insult to creativity? And what does success look like — tickets sold, sign-ups completed, shelves cleared? A strong brief answers all three; a weak one supplies a theme and a deadline, and the designer\'s first job is to interview the client until the missing answers exist in writing.',
      },
      {
        kind: 'para',
        text: 'Professionals then rewrite the brief as a problem statement before touching a pencil — one sentence in the shape of "busy parents need a faster way to reorder school supplies because the current form punishes mistakes." Design-thinking teams often phrase the opportunity as "How might we?" questions. Written this way, the brief becomes a measuring stick: every later sketch is judged against the sentence, not against the designer\'s mood.',
      },
      {
        kind: 'para',
        text: 'Research follows, and its goal is empathy rather than trivia. A handful of interviews with real users, quiet observation of people struggling with the current thing, a competitive audit of how others solved the same problem, whatever numbers the client can supply — the output is a short stack of insights, often anchored by a persona that stands in for the audience during later decisions. Good research is measured not by volume but by whether it changed the designer\'s assumptions.',
      },
      {
        kind: 'para',
        text: 'Ideation comes next, and its rule is volume before judgment. Sketching many small thumbnails — twenty, thirty, deliberately crude — is divergent thinking: cheap attempts to cover the whole territory of possible answers. Choosing few is the convergent half: a shortlist of two or three directions, each with reasons attached. Sketches stay rough precisely so that killing an idea costs nothing; emotional attachment to a polished mock-up is how projects die slowly.',
      },
      {
        kind: 'para',
        text: 'Iteration is the engine from there. Build a small version, put it in front of someone, watch it fail somewhere, learn, rebuild — the loop is scheduled deliberately rather than escaped from. Fidelity climbs as confidence grows: paper sketches test flow, grayscale wireframes test structure, a clickable prototype tests behavior, and full visual polish arrives last. Testing early and ugly is not laziness; it is how feedback lands while it is still cheap to act on. Polish applied to an unproven layout is decoration on a guess.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Read the brief: a city library wants posters that convince teenagers to attend a Saturday comics workshop. Constraints: A3 print plus an Instagram square; must show date, time, and a QR code; success means thirty sign-ups.',
          'Research: five short interviews reveal the audience ignores anything that looks official, shares bold comic-style art constantly, and decides while scrolling. The problem statement becomes: the poster must feel like the hobby, not like homework.',
          'Ideate: twenty crude thumbnails — a speech-bubble headline, a panel-grid layout, oversized sound-effect lettering — then converge on three directions worth mocking up.',
          'Prototype: build the strongest direction as a rough digital poster and test it the way it will actually be seen — printed and pinned in a corridor, and as a phone-sized image held at arm\'s length.',
          'Iterate: testers recall the event but not the date, so the hierarchy is broken. Enlarge the date, move it directly under the title, and re-test — five of six now read it correctly.',
          'Present and hand off: show the direction against the brief\'s criteria, include the two rejected routes with the reasons they lost, and deliver print files, social sizes, and the QR destination in one labeled package.',
        ],
      },
      { kind: 'heading', text: 'From Studio to Handoff' },
      {
        kind: 'para',
        text: 'Presentation is part of the process, not a performance after it. The durable pattern is to narrate decisions against the brief: here is the audience, here is the insight, here is how the chosen direction answers the problem statement — and then show the rejected directions with the reasons they lost. Stakeholders who see the reasoning can argue with it constructively; stakeholders shown only a result can only argue with the result.',
      },
      {
        kind: 'para',
        text: 'Handoff is where amateur and professional work separate most visibly. The departing designer delivers more than a pretty file: named and grouped layers, export-ready assets in every size the brief demands, spacing and behavior noted, fonts and colors specified, and a record of the success criteria so the next round can be measured. In product teams this hardens into a design system — shared components documented for reuse — so consistency survives the author\'s departure.',
      },
      {
        kind: 'para',
        text: 'Notice, finally, that the whole journey is drawn as a loop, not a line. The Stanford design-thinking model names five stations — empathize, define, ideate, prototype, test — and its arrows deliberately curve backward: test results redefine the problem, fresh insights reopen ideation. The British Design Council\'s double diamond draws the same idea as two alternating phases, diverge then converge — first to find the right problem, then to find the right solution. On either map, the real designing happens in the returns.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Design brief', def: 'The written contract of a project — audience, constraints, and success criteria — against which every later decision is judged.' },
          { term: 'Empathy research', def: 'Interviews, observation, and audits that surface what users actually do, replacing the designer\'s assumptions.' },
          { term: 'Divergent thinking', def: 'Generating many widely different options before any judgment is applied.' },
          { term: 'Prototype', def: 'A low-cost, testable stand-in for the final artifact, built at the lowest fidelity that can answer the current question.' },
          { term: 'Iteration', def: 'The planned loop of building, testing, learning, and rebuilding — each cycle cheaper than the mistake it prevents.' },
          { term: 'Handoff', def: 'The disciplined transfer of files, assets, and specifications so others can build or extend the design without its author.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Answer before reading the explanations — retrieval is the point of the quiz.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which trio does this lesson say a strong brief always answers?',
            options: ['Colors, fonts, and final dimensions', 'Audience, constraints, and success criteria', 'Budget, deadline, and the client\'s favorite design', 'Theme, slogan, and paper stock'],
            answer: 1,
            explain: 'The brief defines who the work is for, the boundaries it must live inside, and the measurable result that counts as success.',
          },
          {
            q: 'Why sketch twenty crude thumbnails instead of polishing one promising idea?',
            options: ['Crude sketches look professional in portfolios', 'Clients bill by the thumbnail', 'Volume explores the solution space while ideas are still cheap to discard', 'Polish is forbidden before the third meeting'],
            answer: 2,
            explain: 'Divergent ideation covers territory; roughness keeps the cost of killing weak ideas near zero.',
          },
          {
            q: 'A grayscale wireframe is tested before any color or imagery is added because:',
            options: ['Grayscale prints more cheaply', 'Color is banned in early prototypes', 'Users cannot perceive color on paper', 'Feedback then lands on structure and hierarchy instead of styling debates'],
            answer: 3,
            explain: 'Low fidelity aims critique at layout and flow — the decisions that are most expensive to change later.',
          },
          {
            q: 'What makes the design process a loop rather than a line?',
            options: ['Every stage must be repeated an equal number of times', 'Test results routinely send the work back to redefine the problem or reopen ideation', 'The client always asks for a restart', 'Prototypes can never be finished'],
            answer: 1,
            explain: 'Insights from tests and users feed backward; both the design-thinking and double-diamond models encode those return arrows.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Next inside Visual Design: typography and layout give the brief its letterforms and grids, and interaction design extends the loop to products that respond. Pair this lesson with Color Theory: Why Combinations Work, which lives in Design Foundations and owns the palette layer of any brief.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'art-color-theory',
    title: 'Color Theory: Why Combinations Work',
    domain: 'Arts & Culture',
    field: 'Visual Design',
    branch: 'Design Foundations',
    tier: 'core',
    concepts: [
      'Hue, saturation, and value: the three dials',
      'Additive light versus subtractive pigment',
      'The wheel and the harmony schemes',
      'Simultaneous contrast: context shifts color',
      'Warm and cool: temperature as depth',
      'The 60-30-10 rule and palettes that scale',
      'Contrast ratios and readable text',
    ],
    words: 1071,
    readMins: 5,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Some color combinations feel inevitable and others feel like an accident, and the difference is not mystique — it is structure. Color theory, the design foundation behind this Arts & Culture topic, breaks any color into three measurable dials, then explains how the eye and brain respond when colors sit together: contrast, vibration, temperature, and harmony. From painters\' wheels to interface palettes, the same small grammar governs why a poster sings and why a webpage makes people squint.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Color is the fastest emotional channel a design has — read before a single word. It also carries hard functional duties: legibility, wayfinding, and accessibility. A designer who can name why a palette works can also fix it when it does not.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every color is a setting on three dials. Hue is the position on the wheel — red, teal, gold. Saturation is intensity, from vivid to muted gray. Value is lightness, from black to white, and it is the dial that matters most to legibility: change the value and a design reorganizes; change only the hue and it often just hums. Professionals adjust value first for exactly this reason.',
      },
      {
        kind: 'para',
        text: 'Screens build color additively: red, green, and blue light sum toward white, which is why RGB rules interfaces. Pigments work subtractively — inks absorb wavelengths, and mixing cyan, magenta, and yellow approaches a muddy black, so print adds a true black plate (CMYK). A luminous on-screen teal can print flat; the two systems explain most "it looked different in print" disasters.',
      },
      {
        kind: 'para',
        text: 'Place hues on a circle and the classic harmonies become geometry. Complementary pairs sit opposite — blue and orange, red and green — trading maximum contrast for a vibrancy that tires if left unmanaged. Analogous neighbors share a family and read calm. Triads space three hues evenly for balanced energy. The schemes are starting points, not laws; masters break them knowingly.',
      },
      {
        kind: 'para',
        text: 'Josef Albers devoted an entire book to the discovery that color is never seen alone: the same gray reads warm against blue and cool against orange, heavier on white than on black. Surroundings push the perceived hue toward the complement of the neighbor. The practical consequence is absolute: never judge a color in isolation — swatch it against its actual neighbors.',
      },
      {
        kind: 'para',
        text: 'Reds through yellows advance; blues and greens recede — a trick borrowed from atmospheric perspective, where distant mountains cool and blur. Designers exploit the effect daily: a warm accent against a cool field pulls the eye instantly. Temperature also sets emotional register, which is why a horror poster and a spa brand rarely share a palette.',
      },
      {
        kind: 'para',
        text: 'A workable recipe proportions a palette by area: roughly 60 percent a dominant neutral field, 30 percent a secondary supporting hue, and 10 percent an accent reserved for what matters — the button, the price, the headline. The ratio enforces restraint and gives accents their punch, because an accent spread everywhere is an accent nowhere.',
      },
      {
        kind: 'para',
        text: 'On screens, legibility is arithmetic: text and background need enough luminance contrast, formalized as a ratio. White on black measures about 15:1; a fashionable gray on gray can sink below 3:1 and fail readability standards outright. The common guideline asks at least 4.5:1 for body text — a number any designer can verify, no good eye required.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Relative luminance',
        latex: 'L = 0.2126\\,R + 0.7152\\,G + 0.0722\\,B',
        meaning: 'The eye weights green far above red and blue; luminance L, computed from normalized 0–1 channel values, predicts perceived brightness.',
      },
      {
        kind: 'formula',
        name: 'Contrast ratio',
        latex: 'CR = \\frac{L_1 + 0.05}{L_2 + 0.05}',
        meaning: 'Lighter luminance L1 over darker L2; body text should reach 4.5:1 and large text 3:1.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a dark theme sets a background with luminance 0.02 — which of two text colors, white (L = 1.0) or a stylish mid-gray (L = 0.18), meets the 4.5:1 body-text bar?',
          'Recall the governing idea: the contrast ratio divides the lighter luminance plus 0.05 by the darker luminance plus 0.05.',
          'Apply: white gives (1.0 + 0.05)/(0.02 + 0.05) = 15:1, comfortably passing; the gray gives (0.18 + 0.05)/0.07 ≈ 3.3:1, below the body-text bar but above the 3:1 large-text bar.',
          'State the result: keep the gray for large display text only and set body text white — the accent keeps its flair, and nobody squints.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Interface designers verify text contrast ratios as a formal accessibility requirement, not a taste.',
          'Brand systems lock 60-30-10 proportions so every layout from every team shares one visual voice.',
          'Film colorists grade complementary teal-and-orange palettes to make faces pop from backgrounds.',
          'Cartographers sequence value and temperature so terrain and hazard layers read at a glance.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The rookie move is picking colors in isolation on a white artboard, then meeting simultaneous contrast in the wild. Chasing vibrancy, complementary schemes left at full saturation appear to vibrate at their edges. And encoding meaning by hue alone fails the roughly one in twelve men with color-vision deficiency — add value, shape, or labels as well.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Hue', def: 'The wheel position of a color — its identity as red, green, or gold.' },
          { term: 'Saturation', def: 'Intensity, from vivid to muted.' },
          { term: 'Value', def: 'Lightness from black to white; the dominant dial for legibility and structure.' },
          { term: 'Additive color', def: 'Mixing light (RGB), where primaries sum toward white on screens.' },
          { term: 'Subtractive color', def: 'Mixing pigments or inks (CMYK), where absorption darkens toward black.' },
          { term: 'Simultaneous contrast', def: 'The shift in a color\'s appearance caused by its neighbors.' },
          { term: 'Contrast ratio', def: 'The luminance-based measure of text legibility against its background.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which dial most determines whether text is legible?',
            options: ['Hue', 'Saturation', 'Value', 'Temperature'],
            answer: 2,
            explain: 'Luminance difference — value — does the reading work; two hues of equal value can be indistinguishable.',
          },
          {
            q: 'RGB is called additive because:',
            options: ['Pigments add weight to paper', 'Lights sum toward white', 'It adds a black plate', 'It was added to CMYK later'],
            answer: 1,
            explain: 'Red, green, and blue light combine additively; full values produce white on screens.',
          },
          {
            q: 'A complementary color scheme pairs:',
            options: ['Adjacent hues on the wheel', 'Three evenly spaced hues', 'Opposite hues on the wheel', 'Colors of equal value only'],
            answer: 2,
            explain: 'Opposites trade maximum contrast and vibrancy — the classic blue-and-orange pairing.',
          },
          {
            q: 'Against a background with L = 0.02, a text color with L = 0.10 yields a contrast ratio of about:',
            options: ['2:1', '5:1', '12:1', '0.5:1'],
            answer: 0,
            explain: '(0.10 + 0.05)/(0.02 + 0.05) ≈ 2.1:1 — below every readability bar; lighten the text.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisite: none — start designing immediately. Natural next steps: typography and hierarchy, layout grids, and the Gestalt psychology of perception that explains why these tricks work.',
        tone: 'path',
      },
    ],
  },
]
