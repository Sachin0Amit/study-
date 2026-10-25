import type { KnowledgeTopic } from '../types'

/**
 * Expansion pass X41 (2026-10-25): the arts-split DESIGN pass (agent D).
 * Five lessons feeding the new Visual Design and Fashion & Identity books:
 *
 *  1. design-process-brief — the PROCESS layer (brief → research → ideate →
 *     prototype → test → handoff). New; no existing lesson owns the design
 *     process itself.
 *  2. design-typography — choosing and SETTING type. Carved against
 *     art-typography-letters-that-talk (which owns type-as-voice and
 *     classification history): this lesson owns the working craft of
 *     selection and fine setting — measure, leading, tracking, kerning,
 *     and the order of attack. Cross-referenced, not re-explained.
 *  3. design-layout-hierarchy — grids, white space, reading patterns,
 *     responsive behavior. Carved against art-rule-of-thirds-visual-weight
 *     (single-frame composition — cross-referenced only) and
 *     art-color-theory (owns contrast arithmetic — cross-referenced only).
 *  4. design-ux-interaction — usability heuristics, user flows, the
 *     wireframe-to-prototype ladder, affordances and signifiers,
 *     accessibility fundamentals, testing with real users. New.
 *  5. fashion-history — silhouettes, couture, sportswear, subcultures,
 *     fast fashion, wardrobe practice. Carved against art-fashion-semiotics
 *     (owns the MEANING of dress): this lesson owns the timeline and the
 *     industry history. Cross-referenced, not re-explained.
 *
 * Word counts follow the Library convention: every block string counts
 * (headings, block titles, terms, quiz options and explanations included).
 */

export const x41ArtsDesignPassTopics: KnowledgeTopic[] = [
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
    // ------------------------------------------------------------------
    {
      id: 'design-typography',
      title: 'Typography: Choosing and Setting Type',
      domain: 'Arts & Culture',
      field: 'Visual Design',
      branch: 'Typography & Layout',
      tier: 'core',
      concepts: [
        'Anatomy: baseline, x-height, ascenders, counters',
        'The five classes: serif, sans, slab, script, mono',
        'Pairing: contrast with intent, or a single family',
        'Hierarchy through size, weight, and style',
        'Fine setting: measure, leading, tracking, kerning',
        'Choosing a voice, then making it readable',
      ],
      words: 1471,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'The companion lesson Typography: Why Type Talks covers why letterforms carry voice — the connotations of serifs, the history baked into a grotesque. This lesson covers the working half of the craft: how to choose typefaces for a project and, above all, how to set them. Choosing is the visible decision; setting — measure, leading, tracking, kerning — is where most of the quality actually lives, invisible when done well and uncomfortable to read when botched.',
        },
        {
          kind: 'para',
          text: 'A beautiful typeface set carelessly reads worse than a modest one set well. That asymmetry defines the professional\'s time: minutes casting the face, hours adjusting the spaces between and around it. Readers never consciously notice the adjustments; they only feel that the page is calm, or that something is vaguely wrong and they do not know why.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Type is the voice of the written message — the same sentence whispered in a light humanist serif and declared in a heavy geometric sans arrives as two different statements. Choosing that voice deliberately, then keeping it readable at the size it will actually be read, is the whole job of this discipline.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Choosing: Anatomy and Classes' },
        {
          kind: 'para',
          text: 'Anatomy supplies the vocabulary for choosing. The baseline is the invisible floor letters sit on; the x-height, the height of a lowercase x, determines how large the type feels and how it will pair with others. Ascenders rise above the x-height — the tall strokes of h and k — and descenders hang below the baseline, the tails of g and p. Counters are the enclosed spaces inside letters, the bowl of a b or the eye of an e. Small counters and tight apertures strangle a typeface at small sizes; generous ones keep it breathing on screens.',
        },
        {
          kind: 'para',
          text: 'Five working classes cover most choosing. Serifs — letterforms with finishing strokes — descend from the book tradition, running from warm old-style faces through crisper transitionals to the hairline dazzle of the didones. Sans serifs shed those strokes for industrial neutrality. Slab serifs thicken the serif into a blunt foot, born on nineteenth-century posters where type had to shout across a street. Scripts imitate handwriting and carry intimacy at a real cost in small-size legibility. Monospaces give every letter the same width — a typewriter inheritance that now signals code, terminals, and technical work.',
        },
        {
          kind: 'para',
          text: 'Pairing strategy reduces to one principle: contrast with intent, or do not pair at all. Two nearly-alike faces read as a mistake nobody can name, so a working pair separates roles clearly — a serif for body text against a geometric sans for headings, each with an obvious job. Two safe escape hatches exist: a superfamily that ships serif and sans siblings designed to match, or a single workhorse family in several weights, which many publications use exclusively. Two typefaces is a sensible ceiling for most projects; a third demands a reason you can say out loud.',
        },
        { kind: 'heading', text: 'Setting: Hierarchy and the Four Adjustments' },
        {
          kind: 'para',
          text: 'Hierarchy — what the reader meets first, second, third — is built from size, weight, and style, in that order of power. One clear step of size does more than any amount of italicizing; a bold weight changes rank without breaking the rhythm the way a new typeface would; style — italic, small caps — marks the third rank quietly. A modular scale keeps the steps related: each level a fixed multiple of the last, so the ladder reads as music rather than noise. The squint test settles it. Blur your eyes, and if a clear first, second, and third survive, the hierarchy exists; if everything blurs into equal importance, it does not.',
        },
        {
          kind: 'para',
          text: 'Then come the four adjustments that separate set from unset text. Measure — the length of a line — wants roughly 45 to 75 characters including spaces; longer lines exhaust the eye\'s return trip, shorter ones chop the rhythm into confetti. Leading, the vertical space between lines and named for the strips of lead once set between them, wants about 120 to 145 percent of the type size for body text, loosened for long measures and tightened for display sizes. Tracking adjusts letter spacing across a range: loosened for all-caps and small sizes, which otherwise feel cramped, and gently tightened at very large sizes. Kerning adjusts the space between one specific pair, fixing the optical gaps default metrics miss — classically in combinations like AV, To, and ry. The order of attack is always the same: measure first, then leading, then tracking, then kerning, because each earlier decision constrains the later ones.',
        },
        {
          kind: 'para',
          text: 'A few final details mark practiced hands. Widows and orphans — a lone line stranded at the top or bottom of a column — get merged or fed. All-caps for more than three or four words slows reading, because capital strings erase the varied word shapes fluent readers navigate by. Software defaults are not decisions: synthesized fake bold and italic never match designed weights, and the default leading under a tall x-height is usually too tight. The final proof is always read at actual size, in actual light — a mobile paragraph checked on the phone, not on the monitor.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'The job: set a 2,000-word online essay so it feels literary but modern and stays comfortable through twenty minutes of screen reading.',
            'Choose: one serif with a generous x-height for the body — screen legibility — paired with one grotesque sans for headings; a clear contrast of class, nothing else in the file.',
            'Set the base: body at 18 pixels, a 66-character measure, leading at 1.5 — decided together, because each setting constrains the others.',
            'Build the hierarchy: title on a 1.333 scale in the sans bold, section heads two steps down, pull quotes in the serif italic; squint until the ranks read.',
            'Fine-tune: track the small-caps kicker slightly loose, kern the display headline, and clear the widows from the opening paragraphs.',
            'Voice check: sans headings over serif body reads as a contemporary magazine — literary content, modern frame. Ship the sizes and spacing as reusable styles.',
          ],
        },
        { kind: 'heading', text: 'Practice Notes' },
        {
          kind: 'para',
          text: 'Choosing for screens adds one honest filter: test candidates at the actual smallest size the project uses, not at display glory. A face that shines at 48 pixels can dissolve at 14, and the difference is usually x-height and aperture, not price. When two candidates both pass, choose the one with more weights available, because hierarchy is easier to build inside one family than across two.',
        },
        {
          kind: 'para',
          text: 'Setting long documents rewards systems over judgment calls: define body, heading, caption, and quote styles once, apply them everywhere, and resist per-page fiddling. The discipline pays at revision time, when a client asks for "slightly bigger body text" and one style change ripples correctly through two hundred pages instead of being hunted by hand.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Baseline', def: 'The invisible line letters sit on; the anchor for every vertical alignment in a block of text.' },
            { term: 'X-height', def: 'The height of the lowercase body; the honest predictor of apparent size and the key to pairing.' },
            { term: 'Counter', def: 'The enclosed space inside a letter — small counters choke legibility at small sizes.' },
            { term: 'Measure', def: 'The length of a line of text; comfortable roughly between 45 and 75 characters.' },
            { term: 'Leading', def: 'Vertical spacing between lines, ideally 120–145 percent of type size for body text.' },
            { term: 'Kerning', def: 'Optical adjustment of the space between one specific letter pair, correcting gaps uniform spacing leaves.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Cover the answers, commit to a choice, then read the explanation.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Two typefaces at the same point size can look strikingly different in size because of:',
              options: ['Their kerning', 'Their x-height', 'Their leading', 'Their file format'],
              answer: 1,
              explain: 'The lowercase body is what the eye reads; a taller x-height reads bigger at an identical point size.',
            },
            {
              q: 'A script typeface is a poor choice for long body text because:',
              options: ['Scripts cannot be licensed', 'Scripts only exist for headlines', 'Script fonts are always condensed', 'Handwriting shapes lack the word-shape consistency fluent reading needs'],
              answer: 3,
              explain: 'Fluent reading rides on consistent, distinct word shapes; variable joined letterforms remove that scaffolding.',
            },
            {
              q: 'The correct order of attack when fine-setting a paragraph is:',
              options: ['Kerning, then tracking, then leading, then measure', 'Leading, then kerning, then measure, then tracking', 'Measure, then leading, then tracking, then kerning', 'All four simultaneously'],
              answer: 2,
              explain: 'Line length constrains line spacing, which constrains letter spacing, which constrains pair-level fixes — biggest decisions first.',
            },
            {
              q: 'All-caps slows reading for long strings because:',
              options: ['Capital letters are wider', 'Capital strings erase the varied word shapes readers navigate by', 'Caps disable kerning pairs', 'Uppercase has no baseline'],
              answer: 1,
              explain: 'Skilled readers recognize whole word shapes; a wall of identical-height rectangles removes that shortcut.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Next in this branch: layout and visual hierarchy builds the grids these letterforms live inside. The companion lesson Typography: Why Type Talks goes deeper on classification history and type as voice, and the Design Foundations color lesson owns the contrast arithmetic for type against its background.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'design-layout-hierarchy',
      title: 'Layout and Visual Hierarchy on Page and Screen',
      domain: 'Arts & Culture',
      field: 'Visual Design',
      branch: 'Typography & Layout',
      tier: 'intermediate',
      concepts: [
        'Visual hierarchy: ranking what the eye meets first',
        'Grid systems: columns, baselines, and modules',
        'White space as an active element, not leftover',
        'F-pattern and Z-pattern reading behavior',
        'Responsive layouts: reflow, never merely shrink',
        'Consistency and repetition as trust signals',
      ],
      words: 1314,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'A layout is an argument about importance. Before anyone chooses to read, the page has already announced what is biggest, what belongs with what, and where to go next — that ranking is visual hierarchy, and layout is the machinery that produces it. This lesson covers hierarchy on page and screen, the grid systems that hold content in order, white space as a working element, the paths eyes actually travel, and how a layout should behave when the viewport changes size.',
        },
        {
          kind: 'para',
          text: 'The photography lesson on the rule of thirds and visual weight covers composition inside a single frame; this lesson extends the same instincts to documents made of many elements — pages, spreads, screens — where the designer also controls sequence, grouping, and consistency across an entire product rather than placement within one image.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Visitors decide in seconds whether a page deserves them, and they decide on hierarchy alone: if a layout cannot show in one glance what it is about and what to do next, no amount of beautiful detail rescues it. If it can, the details get to matter.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Hierarchy and the Paths Eyes Travel' },
        {
          kind: 'para',
          text: 'Hierarchy is manufactured from differences the eye can rank: size first and most powerfully, then weight, color, position, and isolation. The working method is ruthless ranking — decide the single most important element on the page, give it the largest contrast against its surroundings, then rank everything else downward until the page has a first, a second, and a polite everything-else. The blur test settles it: photograph the layout, blur it heavily, and look at which shapes still dominate; if the wrong element wins the blur, the hierarchy is broken no matter how finely the type is set.',
        },
        {
          kind: 'para',
          text: 'Eye-tracking studies of text-heavy pages found readers scanning in an F-pattern: full sweeps across the first lines, then shorter and shorter movements down the left edge, leaving the right side largely unread. Sparser layouts — a hero image, a headline, a single call to action — tend to pull the gaze along a Z: across the top, diagonally down to the opposite corner, then across the bottom. The patterns are descriptions rather than laws, but they carry a real consequence: content that must be seen belongs along the paths eyes actually travel, and the bottom-right of a text-heavy page is the least-read real estate on it.',
        },
        {
          kind: 'para',
          text: 'Grid systems are the skeleton beneath professional layouts. A column grid divides the page into vertical tracks — twelve is a web favorite precisely because it divides evenly by two, three, four, and six — so that headlines, images, and sidebars can align to shared edges however varied the content. A baseline grid adds a horizontal rhythm, so lines of type in adjacent columns sit on the same footing. A modular grid combines both into cells and governs dense systems like newspapers. Grids entered graphic design through the Swiss school of the mid-twentieth century, but their value is practical rather than stylistic: alignment creates invisible order, and invisible order reads as competence.',
        },
        {
          kind: 'para',
          text: 'White space — negative space, whatever its color — is not the emptiness left over but an element the designer spends. Macro space, the regions between sections, creates grouping through proximity and signals confidence and price; micro space, the padding and line spacing inside components, creates readability. Dense layouts honestly communicate urgency and abundance, which is why newspapers and sale flyers are dense on purpose, while generous space communicates luxury and calm. The fastest cure for a cluttered layout is rarely shrinking things; it is deleting them and enlarging the space around whatever survives.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Inventory the content: a 900-word story, one hero photograph, a pull quote, an author biography, and a where-to-next block. Rank them — headline, photograph, body, quote, biography, next.',
            'Choose the armature: a twelve-column grid on a baseline rhythm; the photograph spans all twelve columns, the headline six, the body four, the pull quote in a two-column sidebar, the biography across the bottom.',
            'Hierarchy check: blur the composition — headline and hero must survive as shapes. If the pull quote outweighs the headline, shrink it or drop its color.',
            'Path check: confirm the entry at the headline and the diagonal toward the caption using F- and Z-pattern logic, rather than hoping readers find the order.',
            'Responsive pass: at mobile widths the sidebar stacks below the body, the next-block becomes full-width cards, and the measure is re-set near 65 characters.',
            'Consistency pass: match every spacing step and style to the publication\'s existing scale, then document the layout so the next issue inherits it rather than reinvents it.',
          ],
        },
        { kind: 'heading', text: 'Behavior on Screens' },
        {
          kind: 'para',
          text: 'On screens, a layout must behave, not merely sit. Responsive design reflows the same content into different structures as the viewport changes: the twelve-column desktop arrangement stacks into a single mobile column, navigation collapses behind a menu, and type with its measure is re-set for the smaller surface. The classic failure is treating mobile as the desktop shrunk — everything pinched down until it fits — which produces a page that technically works and practically repels. The discipline is deciding, at each breakpoint, what hides, what stacks, and what reorders, and then testing on the actual device.',
        },
        {
          kind: 'para',
          text: 'Consistency is hierarchy\'s memory. When the same type styles, spacing steps, and component patterns repeat across pages, readers learn the layout once and spend all further attention on content; every inconsistency is a small tax that forces relearning. Mature products formalize this into design systems — documented patterns with rules for their use — and the same logic governs magazines, books, and wayfinding. Templates are not the enemy of creativity; they are the container that earns it.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Visual hierarchy', def: 'The ranking of elements by visual importance — what the eye meets first, second, and last.' },
            { term: 'Column grid', def: 'Vertical tracks of equal width, commonly twelve, to which content aligns for invisible order.' },
            { term: 'Baseline grid', def: 'A horizontal rhythm that lines of type in different columns all sit upon.' },
            { term: 'White space', def: 'Empty area deployed as an active element — grouping, emphasis, and tone, not leftover.' },
            { term: 'F-pattern', def: 'The scan shape observed on text-heavy pages: full sweeps at the top, then progressively shorter ones down the left.' },
            { term: 'Breakpoint', def: 'A viewport width at which a responsive layout deliberately changes its structure.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Answer each from the lesson before checking the explanation.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A sparse landing page — hero image, headline, one call to action — will most likely be scanned in a:',
              options: ['F-pattern', 'Z-pattern', 'Vertical stripe', 'Random walk'],
              answer: 1,
              explain: 'With little text, the gaze tends to travel the Z: across the top, diagonally down, then across the bottom — ending near the call to action.',
            },
            {
              q: 'Twelve columns is the common web grid number because:',
              options: ['It divides evenly by two, three, four, and six, allowing many placements', 'Twelve matches the months', 'Screens are 1200 pixels wide', 'Twelve is the maximum browsers allow'],
              answer: 0,
              explain: 'The rich set of divisors lets content span half, third, quarter, or sixth widths while edges keep aligning.',
            },
            {
              q: 'In this lesson, white space is best described as:',
              options: ['Wasted area to be filled', 'An active element spent on grouping, emphasis, and tone', 'A printing error', 'Space reserved for future ads'],
              answer: 1,
              explain: 'Proximity through space does the grouping, and generous macro space signals confidence — the designer spends it deliberately.',
            },
            {
              q: 'The responsive failure this lesson warns against is:',
              options: ['Testing on real devices', 'Reflowing content into new structures per breakpoint', 'Uniformly shrinking the desktop layout until it fits', 'Re-setting the measure for mobile widths'],
              answer: 2,
              explain: 'Shrinking preserves a desktop structure that is unusable at phone scale; reflow re-decides stacking, order, and visibility instead.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Next in this field: interaction and UX design extends layout to interfaces that respond to input, and the design-process lesson shows where layout decisions sit in the brief-to-handoff loop. The typography lesson covers what fills these grids, and the photography composition lesson handles framing inside a single image.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'design-ux-interaction',
      title: 'Interaction and UX Design: Usability, Flows and Wireframes',
      domain: 'Arts & Culture',
      field: 'Visual Design',
      branch: 'Interaction & UX',
      tier: 'core',
      concepts: [
        'Visibility of system status and immediate feedback',
        'User flows and journey maps',
        'Wireframes to clickable prototypes',
        'Affordances and their signifiers',
        'Accessibility: contrast, focus, alt text, semantics',
        'Testing with real users, early and small',
      ],
      words: 1374,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'A poster is finished when it is printed; an interface is finished when someone uses it — and using involves time, motion, error, and memory. Interaction design and its parent discipline, user-experience design, exist for that difference: they design what a product does moment to moment in response to a person. This lesson covers usability heuristics, user flows and journey maps, the wireframe-to-prototype ladder, affordances and signifiers, accessibility fundamentals, and how to test with real users.',
        },
        {
          kind: 'para',
          text: 'The field\'s founding conviction comes from Don Norman\'s The Design of Everyday Things: when a person struggles with a door handle or a settings panel, the fault usually lies with the design, not the person. Norman spent years blaming himself for push-pull door confusion before concluding that the doors were lying to him. Usability, on this view, is not a vibe — it is measurable: whether specific users can complete specific tasks effectively, efficiently, and with satisfaction.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Usability is invisible when present and decisive when absent — a confusing flow quietly taxes every user, every session. And because an interface ships to everyone at once, small flaws scale into enormous aggregate costs, while small fixes compound in exactly the same way.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Heuristics, Flows, and Prototypes' },
        {
          kind: 'para',
          text: 'Jakob Nielsen and Rolf Molich published their usability heuristics in 1990, and Nielsen\'s 1994 refinement remains the field\'s shared checklist. Visibility of system status: keep users informed — the spinner, the saved checkmark, the cart count. Feedback: every action earns an immediate, legible response, so a pressed button confirms that it was pressed. Error prevention beats error messages: constrain the date field rather than scolding the typo. Recognition rather than recall: show the choices instead of forcing users to remember them. Consistency with standards, user control and undo, flexibility with shortcuts, a restrained aesthetic, plain-language error recovery, and reachable help complete the ten. A heuristic evaluation — one expert auditing a flow against this list — catches cheap findings before a single user is recruited.',
        },
        {
          kind: 'para',
          text: 'User flows map the machine\'s side of an experience: boxes for screens, arrows for paths, diamonds for decisions — checkout, onboarding, password recovery drawn as a map. Journey maps add the person\'s side over time: stages, actions, thoughts, and emotions laid along a timeline, often with a line of feeling running above it. The value of both is locating friction — the moment of doubt before paying, the dead end after an error — because that is where design work pays. Both are drawn before screens are beautiful; they are the blueprints that decide whether any screen should exist at all.',
        },
        {
          kind: 'para',
          text: 'The wireframe is the screen\'s skeleton: grayscale boxes, placeholder text, no brand — deliberately unresolved so that feedback targets structure rather than styling. Clickable prototypes stitch screens together with plausible fake behavior, so a whole flow can be tested before any engineering. The ladder runs from paper wireframes for divergent exploration, through digital wireframes for structure, to a clickable prototype for flow and behavior, with visual design arriving last. Each rung answers a different question at a different price, and climbing too fast — polishing pixels on an unproven flow — is the classic beginner\'s loss.',
        },
        {
          kind: 'para',
          text: 'An affordance is a relationship: what an object lets a person do. The signifier is the part that communicates it. A flat plate on a door affords pushing, and its shape says so; a handsome pull handle on a push-only door is a signifier lying about the affordance — Norman\'s famous doors. On screens, affordances must be signified by convention: buttons look filled or raised, links are colored and often underlined, carousels hint at more content beyond the edge. The rule that follows: everything clickable should look clickable, and nothing that looks clickable should be inert.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'The complaint: users abandon account creation. Map the current flow — six screens, password rules revealed only after a failed attempt, a newsletter checkbox pre-ticked.',
            'Journey-map it: the emotional low is the rejected password after full typing — anger landing exactly at the peak of effort; the hidden rule is the friction.',
            'Heuristic pass: error prevention — show password requirements beside the field; visibility — a strength meter; user control — an unmask toggle.',
            'Wireframe and prototype the fix: three screens, rules adjacent to the input, errors written in plain language next to their cause.',
            'Test with five thinking-aloud users: all five now finish, but two miss the unmask toggle — move it, retest, and five of five succeed without help.',
            'Ship and measure: abandonment falls, the journey map\'s dip flattens, and the next round is scheduled for a different flow.',
          ],
        },
        { kind: 'heading', text: 'Accessibility and Real Users' },
        {
          kind: 'para',
          text: 'Accessibility is usability at its most concrete, and its fundamentals are few. Contrast: text must clear the luminance ratio that the color-theory lesson in Design Foundations covers — a number any designer can verify, no good eye required. Focus: every control must be reachable by keyboard, with a visible focus indicator — tab through your own page and watch. Alt text: images need text equivalents for screen readers. Semantics: real buttons rather than clickable divs, real heading levels, labels tied to their inputs. Designing for permanent disabilities turns out to serve temporary and situational limits as well — captions built for deaf viewers serve commuters on mute, and large targets built for tremor serve anyone rushing.',
        },
        {
          kind: 'para',
          text: 'Usability testing is deliberately small and qualitative: recruit a real user, give a realistic task — find and book the cheapest Friday flight — ask them to think aloud, and watch where they hesitate, misread, or give up. A handful of participants surfaces most severe problems, because the big flaws repeat across users and diminishing returns arrive fast; that is why several rounds of five beat one study of thirty. Test early artifacts — paper, wireframes, prototypes — since a flaw found in wireframe costs an hour and the same flaw after launch costs a release cycle. Record the sessions and quote users verbatim; the recording is the argument.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Usability', def: 'Whether specific users can complete specific tasks effectively, efficiently, and with satisfaction — a measurable quality.' },
            { term: 'User flow', def: 'A diagram of the screens and decisions a user passes through to reach an outcome.' },
            { term: 'Journey map', def: 'A timeline of a user\'s actions, thoughts, and emotions across an experience, exposing friction points.' },
            { term: 'Wireframe', def: 'A low-fidelity skeleton of a screen — structure and hierarchy, deliberately unresolved visually.' },
            { term: 'Affordance', def: 'The action a thing makes possible for a person; communicated by its signifier.' },
            { term: 'Accessibility', def: 'Design that lets people across abilities perceive, operate, and understand a product — contrast, focus, alt text, semantics.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Commit to an answer before reading each explanation.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A spinner and a progress bar serve which heuristic?',
              options: ['Visibility of system status', 'Aesthetic and minimalist design', 'Error prevention', 'Flexibility and shortcuts'],
              answer: 0,
              explain: 'They keep the user informed about what the system is doing — the first heuristic on the list.',
            },
            {
              q: 'The difference between an affordance and a signifier is:',
              options: ['None — they are synonyms', 'The affordance is the possible action; the signifier is what communicates it', 'Affordances apply only to physical doors', 'Signifiers are possible actions; affordances communicate them'],
              answer: 1,
              explain: 'Pushing is what the door plate affords; the plate\'s flat shape is the signifier that says push.',
            },
            {
              q: 'Wireframes are kept grayscale and deliberately unresolved so that:',
              options: ['They print cheaply', 'Stakeholders mistake them for the final design', 'Feedback targets structure and hierarchy instead of styling debates', 'Colors confuse test software'],
              answer: 2,
              explain: 'Unpolished frames keep critique aimed at layout and flow — the expensive decisions — rather than font opinions.',
            },
            {
              q: 'Several rounds of five users beat one study of thirty because:',
              options: ['Five is a luckier number', 'The severe problems repeat across users, so small samples catch most of them — and rounds catch what redesign changes', 'Thirty users are impossible to recruit', 'Large studies violate ethics rules'],
              answer: 1,
              explain: 'Big flaws recur; the point of testing is to fix and then re-test the new design, not to average opinions once.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'The design-process lesson places these prototypes in the full brief-to-handoff loop; the layout lesson covers the grids they sit on; the typography lesson handles the words inside the frames. For contrast arithmetic, see the color lesson in Design Foundations — then run one five-user test on something you have already shipped.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fashion-history',
      title: 'Fashion History: Silhouettes, Revolutions and the Modern Wardrobe',
      domain: 'Arts & Culture',
      field: 'Fashion & Identity',
      branch: 'Fashion History & Practice',
      tier: 'intermediate',
      concepts: [
        'The silhouette as an era\'s signature',
        'Worth, Paris, and the birth of couture',
        'Sportswear and ready-to-wear democratize dress',
        'From street subcultures to the runway',
        'Fast fashion\'s speed and its costs',
        'Building a coherent modern wardrobe',
      ],
      words: 1468,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Fashion history is easiest to read as a parade of silhouettes — the shape clothes cut in the air is each era\'s signature, changing with technology, economics, and ideals of the body. The mid-nineteenth century achieved its dome skirt with the cage crinoline; the 1870s shifted the volume to the rear in the bustle; around 1900 the S-bend corset thrust the bust forward and the hips back. The twentieth century then ran a series of liberations and reactions — the straight drop-waist 1920s, the wasp-waisted 1950s, the mini, the power shoulder, minimalism — and this lesson follows both that parade and the industry that grew around it, ending at the modern wardrobe and how to build one.',
        },
        {
          kind: 'para',
          text: 'A companion lesson in this field, Fashion as Language, decodes what clothes mean — status, tribe, rebellion. This lesson owns the timeline itself: who made the clothes, who could afford them, how changes in manufacturing changed who participates in fashion, and what the twenty-first-century wardrobe inherits from all of it.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'No garment in a shop today explains itself. Why it costs what it costs, why it looks the way it looks — the answers are historical: couture contributed the idea of the designer, sportswear contributed comfort as default, and the street contributed the idea that trends can start at the bottom. The modern wardrobe is an archive of revolutions, most of them won.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Silhouettes, Couture, and the Designer' },
        {
          kind: 'para',
          text: 'Details make the silhouette timeline legible. The cage crinoline of the 1850s and 1860s replaced layers of heavy petticoats with steel hoops — lighter to wear, and a triumph of engineering that exaggerated volume further than fabric alone ever could. The bustle of the 1870s and 1880s gathered that volume at the rear. Paul Poiret, in the 1910s, claimed the credit for freeing women from the corset with loose, draped columns — then promptly cinched the ankle in his hobble skirt. The 1920s dropped the waist to the hip and flattened the chest, with Gabrielle "Coco" Chanel building the era\'s easy jersey sportiness into an empire.',
        },
        {
          kind: 'para',
          text: 'After the rationing and uniforms of the Second World War, Christian Dior\'s 1947 collection — tiny waist, padded hips, yards of skirt — was dubbed the New Look and read as scandalous luxury at a time when fabric was still rationed in memory. The 1960s answered with Mary Quant\'s raised hemlines and youthquake colors; the 1980s built shoulders like architecture; the 1990s stripped everything back to minimalism and grunge. Each reaction is legible only against what came before it, which is the basic grammar of fashion history.',
        },
        {
          kind: 'para',
          text: 'The designer as named author begins with Charles Frederick Worth, an Englishman who opened his Paris house in 1858. Clients came to be fitted to his designs rather than arriving with their own; his name went on the label; dressmaking stepped up from craft to art with a signature. That shift founded haute couture — made-to-measure clothing produced in Paris, its standards and membership governed to this day by a professional chamber — and installed the idea that a person, not a workshop, authors fashion. The perfume license, the celebrity designer, and the logo as value all descend from Worth\'s signature on a dress.',
        },
        {
          kind: 'para',
          text: 'The counter-revolution came from America: sportswear, a term for easy clothes built for movement rather than occasions. In the 1940s Claire McCardell and her generation made the case with practical fabrics and mix-and-match separates — clothes a woman could combine, wash, and actually live in, where Paris offered ensembles fitted to one body for one season. Ready-to-wear industrialized the idea: standard sizes from factories replaced bespoke fittings, and the middle class dressed off the rack. Denim finished the story — Levi Strauss and Jacob Davis patented riveted work trousers in 1873, and the laborer\'s uniform became the planet\'s default garment. The sneaker ran the same arc, from gym equipment through the 1985 arrival of the Air Jordan to collectible luxury.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'The task: read an unlabeled photograph\'s decade by silhouette alone. Start with the skirt shape — dome, rear projection, column, full circle, or straight and short.',
            'Dome with hoops means mid-nineteenth century; rear bustle means the 1870s or 1880s; an S-curve posture with puffed bosom means around 1900.',
            'A straight, dropped waist with flattened chest means the 1920s; a tiny waist over a full skirt means post-1947 New Look territory.',
            'Raised hemline with bold youth colors points to the 1960s; oversized shoulder padding to the 1980s; stripped-down grunge layering to the 1990s.',
            'Cross-check with secondary evidence — hair, accessories, the presence of sport shoes or denim — before committing, and note that revival cycles deliberately fake older silhouettes.',
            'State the result: the silhouette is the fastest fingerprint, but a confident dating always triangulates shape against fabric, hair, and context.',
          ],
        },
        { kind: 'heading', text: 'Street, Speed, and the Sustainable Turn' },
        {
          kind: 'para',
          text: 'The twentieth century also moved trend authority downward, from salon to street. Teddy boys and mods riffed on tailored tradition; punk\'s torn, safety-pinned DIY was packaged and sold by Vivienne Westwood and Malcolm McLaren\'s King\'s Road shop; hip-hop put its footwear in a lyric, and Run-DMC\'s "My Adidas" in 1986 became one of the first major sneaker endorsements earned by musicians rather than athletes. Streetwear brands later built scarcity into limited drops, and by 2017 Supreme — a skate label — was collaborating with Louis Vuitton. The runway now routinely mines the street for next season\'s product, a cycle the Fashion as Language lesson decodes as co-optation and bricolage.',
        },
        {
          kind: 'para',
          text: 'The industry\'s latest revolution is speed. The fast-fashion model — small batches, quick response to what actually sells, trend looks reproduced in weeks at low prices — turned clothing into near-disposable content and made trends a weekly rather than seasonal event. The costs followed: enormous textile waste, garments discarded after fewer wears, and relentless pressure on labor and environment along the supply chain. The sustainability turn answers with secondhand markets, rental, repair culture, and slow fashion — smaller collections built for longer lives — though whether it can outpace the discount cycle remains the industry\'s open question.',
        },
        {
          kind: 'para',
          text: 'History\'s practical bequest is a way to think about a personal wardrobe. Silhouettes and trend cycles churn; fit, identity, and versatility do not. A coherent wardrobe behaves like a design system — a defined palette and cut language, pieces that interoperate, quality judged by cost per wear rather than cost per purchase. The discipline: buy the best basics the budget can honestly afford to maintain, treat trends as accents rather than infrastructure, and edit regularly. The most sustainable garment in the world is the one already owned, worn, and repaired.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Silhouette', def: 'The overall outer shape clothes create around the body — the fastest fingerprint of an era.' },
            { term: 'Haute couture', def: 'Made-to-measure fashion from Paris houses governed by professional rules; historically the origin of the designer as author.' },
            { term: 'Ready-to-wear', def: 'Factory-produced clothing in standard sizes that replaced bespoke for most of the market.' },
            { term: 'Sportswear', def: 'The American tradition of easy, practical separates that made comfort the default of modern dress.' },
            { term: 'Fast fashion', def: 'Rapid, cheap, trend-responsive production that turned clothing into near-disposable goods.' },
            { term: 'Capsule wardrobe', def: 'A small, interoperable set of garments chosen for versatility and long wear.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Choose before you check — then read the explanation.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Charles Frederick Worth\'s revolutionary act was:',
              options: ['Inventing the sewing machine', 'Patenting the bustle', 'Fitting clients to his own designs and signing his name on the label', 'Founding the first department store'],
              answer: 2,
              explain: 'Before Worth, clients brought designs to dressmakers; his house made the designer the author — the root of haute couture and the modern fashion brand.',
            },
            {
              q: 'Dior\'s 1947 New Look was considered scandalous largely because:',
              options: ['It used printed fabrics', 'Its tiny waist and yards of fabric read as extravagant luxury so soon after wartime rationing', 'It shortened skirts above the knee', 'It was sold only in America'],
              answer: 1,
              explain: 'Fabric was still rationed in recent memory; a silhouette that lavish was a political statement about abundance.',
            },
            {
              q: 'What the American sportswear tradition contributed to fashion was:',
              options: ['Elaborate beading', 'The cage crinoline', 'Separates and practical fabrics that made ease and movement the default', 'Mandatory workplace uniforms'],
              answer: 2,
              explain: 'McCardell and her generation built mix-and-match clothes for real life — democratizing both price and movement.',
            },
            {
              q: 'The defining mechanics of the fast-fashion model are:',
              options: ['Small batches and quick response to trends at low prices', 'Hand-stitching every garment', 'Annual collections only', 'Made-to-measure fittings'],
              answer: 0,
              explain: 'Speed to market and rapid trend replication at low cost — the engine of both its commercial success and its waste problem.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Fashion as Language, in the same field, decodes the meaning layer — status, tribe, appropriation — that this timeline only gestures at. Practice the eye on old films and museum portraits, naming silhouettes by decade; then read a favorite label\'s sustainability statement with a historian\'s skepticism about what it promises and what it measures.',
          tone: 'path',
        },
      ],
    },
]
