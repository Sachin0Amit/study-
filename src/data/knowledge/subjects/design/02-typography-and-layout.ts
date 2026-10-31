/**
 * Knowledge Universe — Design — Chapter 02: Typography & Layout
 * 3 lessons · ~4,078 words
 * field: Visual Design
 * legacy sources: arts-culture.ts, x41-arts-design-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Typography & Layout, Type & Letters]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 design-typography — Typography: Choosing and Setting Type
 *   02.2 design-layout-hierarchy — Layout and Visual Hierarchy on Page and Screen
 *   02.3 art-typography-letters-that-talk — Typography: Why Type Talks
 */
import type { KnowledgeTopic } from '../../types'

export const designCh02: KnowledgeTopic[] = [
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
  {
    id: "art-typography-letters-that-talk",
    title: "Typography: Why Type Talks",
    domain: "Arts & Culture",
    field: "Visual Design",
    branch: "Type & Letters",
    tier: "core",
    concepts: [
      "Type as the audible voice of text",
      "Anatomy: x-height, baseline, counters",
      "From old-style to didone serifs",
      "Grotesque, humanist and geometric sans",
      "Pairing by contrast and shared proportion",
      "Hierarchy, measure and line spacing",
    ],
    words: 1293,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Most of what designers arrange is not pictures — it is words. Typography is the craft of setting those words so they speak in the right voice: the same sentence set in a high-contrast Didone serif and a rounded geometric sans is spoken by two different people. The color lesson organized palettes; this Visual Design topic organizes letterforms — their anatomy, the classification families, what serif and sans signal, and how to pair and scale type into a working hierarchy.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Type is tone of voice made visible, and it is read before it is understood: visitors judge trust, era and personality from letterforms in milliseconds. Typographic literacy upgrades everything you make — slides, résumés, signs, sites — for free.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Letterforms share a skeleton with named parts. The baseline is the floor letters sit on; cap height is the ceiling of capitals; the x-height — the height of a lowercase x — is the body the eye actually reads, and it governs apparent size: two fonts at the same point size can differ wildly if one has a tall x-height. Ascenders rise, descenders drop, counters are the enclosed holes, apertures the openings, terminals the stroke ends. Small x-height with long extenders reads elegant and bookish; large x-height with tight extenders reads industrial and screen-born.",
      },
      {
        kind: "para",
        text: "Serifs divide by era. Old-style types descend from Renaissance calligraphy — bracketed serifs, low stroke contrast, a left-leaning stress that lets pages of text breathe; think Garamond, warm and bookish. Transitional types like Baskerville sharpened contrast and formality. Didones — Bodoni, Didot — pushed contrast to hairlines and vertical stress: dazzling at display sizes, shimmering to illegibility in long text. Slab serifs industrialized the foot into a rectangle. Sans-serifs split three ways: humanist (calligraphic skeletons, open apertures — Frutiger), grotesque (neutral and tight — Helvetica), and geometric (circles and rules — Futura).",
      },
      {
        kind: "para",
        text: "The history explains the jobs. Serifs descend from Roman stonecutting and Renaissance pens; sans-serifs surfaced in the industrial nineteenth century — critics called them grotesques — and conquered the twentieth via Bauhaus and Swiss design. The old rule that serifs read better in print and sans on screen has dissolved with screen resolution: what actually matters is x-height, spacing and contrast at the size used. The connotations persist, though. Serif reads institutional and literary — newspapers, novels, diplomas; sans reads modern and functional — interfaces, transit systems, startups.",
      },
      {
        kind: "para",
        text: "Casting a typeface is casting a voice. Didones speak couture and editorial — fashion mastheads live in them. Humanist serifs speak trustworthy scholarship; geometric sans speaks optimistic modernity; grotesques speak neutral corporate competence; slabs speak sturdy workwear; scripts speak handmade intimacy. The mistakes are audible too: blackletter in a corporate deck, comic irreverence in a legal brief, five voices in one flyer. One or two voices, cast deliberately, is the whole game.",
      },
      {
        kind: "para",
        text: "Pairing is contrast plus harmony. Contrast: two faces should differ clearly in classification, weight or era — a Didone headline over a humanist sans body reads as intentional, while two similar humanist sans read as a mistake you cannot name. Harmony: the pair should share proportions, above all matching x-heights, so they look like colleagues rather than strangers. Super-families — a serif and sans designed as siblings — make pairing safe. When in doubt: one family, many weights.",
      },
      {
        kind: "para",
        text: "Hierarchy is the reader's route: size, weight, case and color mark which text is the door, which the hallway, which the furniture. A modular scale — each step a fixed multiple of the last — keeps sizes musical instead of arbitrary. The measure, or line length, wants roughly 45 to 75 characters; longer lines lose the eye at the return, shorter ones chop the rhythm. Line spacing follows type and measure: long lines and tall x-heights want more air, display sizes want it tight. And letterspacing has rules: tighten large display text, widen small caps and labels, never letterspace lowercase body text.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Modular scale",
        latex: "s_n = s_0 \\cdot r^n",
        meaning: "Each type size is the base multiplied by the ratio r, n steps away — common ratios are 1.25, 1.333, 1.5 and 1.618; a 16 px base at 1.333 gives 16, 21, 28, 38.",
      },
      {
        kind: "formula",
        name: "Characters per line",
        latex: "C \\approx \\frac{w}{0.5\\,s}",
        meaning: "The average character is roughly half the font size wide, so a column of width w at font size s holds about this many characters — a 520 px column at 16 px gives about 65, inside the comfort band.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a lecture poster needs a title, a speaker line and a paragraph of details — a full hierarchy in two typefaces.",
          "Recall the governing ideas: pair by contrast with shared proportions; scale by a fixed ratio; set the measure for body copy; letterspace only what deserves it.",
          "Apply: cast a Didone for the title — one voice, display size, tightened tracking — and a humanist sans for everything else, weights 400 and 700, matched x-heights. Scale at 1.333 from a 16 px base: body 16, speaker line 21, title 38 px. Set the details paragraph at 55–65 characters wide with 1.4 line spacing, with the date labels in letterspaced small caps.",
          "State the result: one elegant voice for authority, one neutral voice for information, every size related by the same ratio — a poster that reads in the intended order from across the room.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Interface designers tune x-height and spacing for legibility at 14 px and below.",
          "Résumé and document makers signal competence through restrained pairing.",
          "Presentation builders cut word count and raise point size along a scale.",
          "Signage and wayfinding rely on aperture, weight and case for glance reading.",
          "Small businesses get a designed feel from a single super-family alone.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The seven sins: too many typefaces — three is a crowd; all-caps for long strings, which erases the word shapes skilled readers navigate; default leading under tall x-heights; letterspaced lowercase body text; fake bold and italic synthesized by software instead of designed weights; body copy set on a 100-character measure because the layout had room; and treating software defaults as decisions. Most bad typography is not ugly — it is inaudible.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "X-height", def: "The height of the lowercase body — the single biggest driver of apparent size." },
          { term: "Baseline", def: "The invisible floor on which the letters sit." },
          { term: "Counter", def: "The fully enclosed space inside a letter, as in o, e and b." },
          { term: "Didone", def: "The high-contrast, vertical-stress serif of Bodoni and Didot — display dazzle, text poison." },
          { term: "Grotesque", def: "The neutral, tight-aperture sans family of Helvetica — Swiss utility." },
          { term: "Measure", def: "The length of a line of text; comfortable at 45–75 characters." },
          { term: "Modular scale", def: "A fixed ratio governing each type-size step, keeping hierarchy musical." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Two fonts at the same point size can look very different in size because of:",
            options: ["Kerning", "X-height", "Leading", "Serifs"],
            answer: 1,
            explain: "The lowercase body is what the eye reads; a taller x-height reads bigger at the same point size.",
          },
          {
            q: "Didone serifs like Bodoni are best used:",
            options: ["For long body text", "At display sizes — their hairlines shimmer in text", "Only on screens", "For highway wayfinding"],
            answer: 1,
            explain: "Extreme stroke contrast glories at large sizes and self-destructs in long passages of text.",
          },
          {
            q: "A comfortable measure for body text is:",
            options: ["25–35 characters", "45–75 characters", "90–110 characters", "Whatever fits the layout"],
            answer: 1,
            explain: "Shorter chops the rhythm; longer loses the eye on the return trip to the next line.",
          },
          {
            q: "Good type pairing combines:",
            options: ["Two near-identical humanist sans", "Strong contrast with shared proportions like matching x-heights", "A different font for every heading level", "As many weights as possible"],
            answer: 1,
            explain: "Contrast gives each face a job; shared proportions keep them looking like colleagues.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Prerequisite: the color theory lesson as fellow foundation. Natural next steps: layout and grid systems, the comics lesson for lettering in sequence, and auditing every screen and sign you meet today.",
        tone: "path",
      },
    ],
  },
]
