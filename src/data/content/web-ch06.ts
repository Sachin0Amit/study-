import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 6: CSS Layout & Responsive Design
// Sections 6.1 – 6.5. Master study content.
// ============================================================================

export const webCh06Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'web-ch6-s1',
    readingTime: 9,
    intro: 'Every CSS layout scheme is an answer to one question: where does this box go when nobody tells it otherwise. This section starts from normal flow and the display types that shape it, detours through floats and their modern replacements, then masters the five positioning schemes — the toolkit behind dropdowns, modals, sticky headers and every overlay on the web.',
    objectives: [
      'Describe normal flow and choose block, inline and inline-block display',
      'Contain floats with clear and modern flow-root clearing',
      'Position elements with relative, absolute, fixed and sticky schemes',
      'Manage overlap with containing blocks, z-index and stacking contexts'
    ],
    concepts: [
      {
        term: 'Normal flow and display types',
        kind: 'definition',
        statement: 'In **normal flow**, block boxes stack vertically and fill their container width while **inline** boxes run with the text line, wrapping where it wraps. The **`display`** property moves elements between these worlds: `block` for sections and paragraphs, `inline` for runs within lines, and **`inline-block`** for boxes that size like blocks yet sit in the line, such as buttons or badges. Modern layouts layer flex and grid on top of flow rather than replacing it, so paragraphs, headings and form stacks still rely on these defaults.',
        detail: 'Reach for `inline-block` when an element needs width, height and vertical padding but must stay in the text line, like a pill badge inside a sentence.'
      },
      {
        term: 'Floats and clearing',
        kind: 'method',
        statement: 'The **`float`** property pulls an element to the `left` or `right`, letting following text wrap around it — the original mechanism behind magazine-style image wraps and the earliest column grids. Floated elements leave normal flow, so containers collapse around them unless **cleared** with `clear: both` or contained with the modern **`display: flow-root`**, which establishes a fresh block formatting context. The classic **clearfix** hack with a clearing `::after` pseudo-element solved the same collapse before `flow-root` made one declaration sufficient.',
        detail: 'Reserve floats for text wrap and legacy maintenance today, since flexbox and grid build columns with alignment, ordering and equal heights that floats never offered.'
      },
      {
        term: 'Relative and absolute positioning',
        kind: 'definition',
        statement: 'Setting **`position: relative`** offsets a box from its flow position with `top`, `right`, `bottom` and `left` while preserving its original footprint in the layout. The companion **`position: absolute`** removes the box from flow entirely and anchors it to its nearest **positioned ancestor** — the closest parent with any non-static position — which is why patterns pair `position: relative` on the card with `absolute` on its badge. Without a positioned ancestor, absolute offsets resolve against the initial containing block, effectively the viewport-sized page area.',
        detail: 'Give the intended anchor `position: relative` with no offsets to create a positioning context that moves nothing yet contains every absolute child.'
      },
      {
        term: 'Fixed and sticky positioning',
        kind: 'definition',
        statement: '**Fixed** positioning anchors an element to the **viewport**, so headers, chat buttons and modal backdrops stay put while the page scrolls beneath them. **Sticky** positioning is the hybrid: `position: sticky` with a `top` threshold behaves like relative until the scroll position reaches the offset, then sticks like fixed within its parent’s bounds and releases at the parent edge. Sticky table headers and section navs use this clamping naturally, but any ancestor with `overflow: hidden` or a transform clips the stick range and silently disables the effect.',
        detail: 'Pair sticky elements with a `top` value plus a background and `z-index` so content sliding underneath never shows through or overlaps the stuck bar.'
      },
      {
        term: 'Containing blocks, z-index and stacking contexts',
        kind: 'law',
        statement: 'An absolutely positioned box resolves its offsets against its **containing block**, and the **`z-index`** property orders overlapping positioned boxes along the depth axis, with larger values painting above smaller ones. Crucially, several properties — `opacity` below one, `transform`, `filter`, `isolation: isolate` — spawn new **stacking contexts** that trap descendants’ `z-index` values inside, so a huge `z-index` inside one context can never escape above a sibling context. The fix is structural: order the contexts themselves and keep modal layers as high-level siblings rather than nesting them inside transformed cards.',
        detail: 'When a `z-index` value seems ignored, inspect ancestors for stacking-context creators first, since the trap almost always sits one level above the element being raised.'
      }
    ],
    examples: [
      {
        title: 'Wrap text around an image with a contained float',
        problem: 'An article figure must float right with text wrapping around it, without the following section sliding up beside the float.',
        steps: [
          { label: 'Step 1: Markup and float', text: '```html\n<article class="flow">\n  <img class="art" src="chart.png" alt="Traffic chart">\n  <p>First paragraph wraps beside the chart…</p>\n  <p>Second paragraph continues the wrap…</p>\n</article>\n```\nThe image leads the article so following paragraphs have content to wrap around its left edge.' },
          { label: 'Step 2: Float with margin and shape', text: '```css\n.art {\n  float: right;\n  width: 16rem;\n  margin: 0 0 1rem 1.5rem;\n  border-radius: 0.5rem;\n}\n```\nThe `float` pulls the figure right while margins carve a breathing gutter between image and wrapped text.' },
          { label: 'Step 3: Contain with flow-root', text: '```css\n.flow { display: flow-root; }\n```\nOne declaration establishes a block formatting context that contains the float, so the next section starts cleanly below instead of sliding up.' }
        ],
        result: 'Text wraps the figure elegantly and the container self-clears with a single modern declaration — no clearfix hack, no collapsed parent.'
      },
      {
        title: 'Sticky header plus an absolutely pinned badge',
        problem: 'A product listing needs a header that sticks to the viewport top on scroll, with a discount badge pinned to each card corner above the card image.',
        steps: [
          { label: 'Step 1: Sticky site header', text: '```css\n.site-header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n}\n```\nThe header scrolls naturally until its top edge hits the viewport, then clamps in place with a `z-index` that keeps cards sliding beneath it.' },
          { label: 'Step 2: Card anchor with absolute badge', text: '```css\n.card { position: relative; }\n.badge {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  z-index: 10;\n  background: #dc2626;\n  color: #fff;\n  padding: 0.25rem 0.625rem;\n  border-radius: 999px;\n}\n```\nRelative positioning on the card creates the containing block so each badge pins to its own card rather than the page.' },
          { label: 'Step 3: Fixed back-to-top control', text: '```css\n.to-top {\n  position: fixed;\n  right: 1.25rem;\n  bottom: 1.25rem;\n  z-index: 60;\n}\n```\nThe viewport-anchored button floats above all scrolled content, layered above even the sticky header by its higher `z-index`.' }
        ],
        result: 'Sticky, absolute and fixed schemes compose cleanly: the header clamps, badges ride their cards, and the top-button hovers over everything.'
      }
    ],
    keyTakeaways: [
      'Normal flow stacks blocks and runs inlines; display moves boxes between behaviors.',
      'Contain floats with display: flow-root and prefer flex or grid for columns.',
      'Anchor absolute children by giving the intended parent position: relative.',
      'Use sticky for in-flow clamping and fixed for viewport-pinned chrome.',
      'Order stacking contexts, not just z-index values, when overlap misbehaves.'
    ],
    quiz: [
      {
        q: 'What does display: flow-root do for a container with floated children?',
        options: [
          'It removes the floats from the page',
          'It creates a block formatting context that contains the floats so the parent wraps them',
          'It converts floats to flex items',
          'It hides overflowing text'
        ],
        answer: 1,
        explanation: 'The new formatting context forces the container to account for floated descendants, curing the classic collapsed-parent without clearfix markup.'
      },
      {
        q: 'An absolutely positioned badge lands relative to the page instead of its card. What is missing?',
        options: [
          'The badge needs a higher z-index',
          'The card needs a non-static position such as relative to become the containing block',
          'The badge needs float: left',
          'The card needs overflow: visible'
        ],
        answer: 1,
        explanation: 'Absolute offsets resolve against the nearest positioned ancestor, so the card must establish that context with relative or another non-static scheme.'
      },
      {
        q: 'When does position: sticky actually stick?',
        options: [
          'Always, from page load',
          'After its scroll position reaches the declared offset, until its parent edge releases it',
          'Only inside transformed ancestors',
          'Only with a z-index above one hundred'
        ],
        answer: 1,
        explanation: 'Sticky behaves as relative until the threshold offset meets the scroll position, then clamps like fixed within the parent bounds.'
      },
      {
        q: 'A child with z-index 9999 still paints below a sibling card. What is the likely cause?',
        options: [
          'z-index values above one thousand are invalid',
          'An ancestor created a stacking context that traps the child below the sibling context',
          'The child needs position: static',
          'z-index only works on flex items'
        ],
        answer: 1,
        explanation: 'Properties like opacity, transform and filter spawn contexts that confine descendants, so ordering must be fixed at the context level.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.2
  {
    sectionId: 'web-ch6-s2',
    readingTime: 10,
    intro: 'Flexbox is the one-dimensional layout engine: a row or a column of items that distribute space, align and wrap with a handful of declarations. This section covers the container-versus-item split, the main and cross axes that explain every alignment property, wrapping, the flex sizing shorthand, and the ordering and gap patterns behind navbars, card rows and centered heroes.',
    objectives: [
      'Distinguish flex container properties from flex item properties',
      'Explain main-axis versus cross-axis alignment choices',
      'Size items with flex-grow, flex-shrink, flex-basis and the shorthand',
      'Build navbars, centered heroes and wrapping card rows'
    ],
    concepts: [
      {
        term: 'Flex containers and the two axes',
        kind: 'definition',
        statement: 'Declaring **`display: flex`** turns an element into a **flex container** whose children become **flex items** laid along the **main axis** with the **cross axis** perpendicular to it. The **`flex-direction`** property aims the main axis — `row`, `row-reverse`, `column` or `column-reverse` — which simultaneously decides the cross direction, so every alignment choice flows from this one setting. Row layouts align horizontally first and vertically second, while column layouts invert that priority entirely.',
        detail: 'Sketch the two axes before writing alignment code, since naming the main direction first makes every subsequent property choice obvious.'
      },
      {
        term: 'Direction, wrapping and flow',
        kind: 'method',
        statement: 'The **`flex-wrap`** property decides whether items squeeze onto one line with `nowrap` or spill onto multiple lines with `wrap` and `wrap-reverse`, and the **`flex-flow`** shorthand bundles direction plus wrap as in `flex-flow: row wrap`. Wrapping converts a flex row into a responsive grid-like band that needs no media queries, with each line then aligned independently. Combined with flexible bases, wrap gives card rows that collapse gracefully from four columns to one.',
        detail: 'Default to `flex-flow: row wrap` for card collections so overflow becomes a new aligned row instead of a clipped or squished line.'
      },
      {
        term: 'Main-axis and cross-axis alignment',
        kind: 'method',
        statement: '**`justify-content`** distributes space along the **main axis** with `flex-start`, `center`, `flex-end`, `space-between`, `space-around` and `space-evenly`, while **`align-items`** positions items along the **cross axis** with `stretch`, `center`, `flex-start` and `baseline`. The companion **`align-content`** only matters across multiple wrapped lines, spacing the rows themselves. Centering both axes — `justify-content: center; align-items: center` — is the canonical flexbox centering recipe for heroes and empty states.',
        detail: 'Remember the axis mapping, not the physical direction: justify always works the main axis, so in a column layout it centers vertically.'
      },
      {
        term: 'Growing, shrinking and the flex shorthand',
        kind: 'definition',
        statement: 'Three properties size each item: **`flex-grow`** claims shares of free space, **`flex-shrink`** surrenders shares when space runs short, and **`flex-basis`** sets the starting size before distribution. The **`flex`** shorthand bundles them — `flex: 1` means grow fully from a zero base, `flex: 0 0 12rem` fixes an item at twelve rems, and `flex: auto` grows from content size. Misunderstood shrink is the classic overflow culprit: long unbreakable content with `flex-shrink: 0` forces its siblings off the line.',
        detail: 'Allow text items to shrink and add `min-width: 0` so long words and nested elements can actually compress instead of bursting the row.'
      },
      {
        term: 'Order, self-alignment, gap and patterns',
        kind: 'insight',
        statement: 'The **`order`** property reorders items visually without touching source order, **`align-self`** overrides cross-axis alignment per item, and **`gap`** injects uniform gutters that margins never managed cleanly. Together they express the standard patterns: space-between navbars, vertically centered media objects, and equal-height cards with bottom-pinned actions via `margin-top: auto`. Keep `order` cosmetic only, because screen readers and tab order still follow the source sequence.',
        detail: 'Use `gap` for all inter-item spacing and reserve margins for alignment tricks like auto margins that push one item to the far edge.'
      }
    ],
    examples: [
      {
        title: 'Build a navbar with a pushed action group',
        problem: 'A site header needs a logo left, links centered beside it, and a signup button pinned to the far right — all vertically centered.',
        steps: [
          { label: 'Step 1: Flex header with gap', text: '```css\n.navbar {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 0.75rem 1.5rem;\n}\n```\nOne container declaration lines every child vertically centered with uniform gutters, replacing fragile inline-block and float approaches.' },
          { label: 'Step 2: Push actions with auto margin', text: '```css\n.nav-links { display: flex; gap: 1rem; list-style: none; margin: 0; }\n.nav-actions { margin-left: auto; display: flex; gap: 0.75rem; }\n```\nThe `margin-left: auto` absorbs all free main-axis space, pinning the action group right while links stay grouped near the logo.' },
          { label: 'Step 3: Responsive collapse via wrap', text: '```css\n@media (max-width: 40rem) {\n  .navbar { flex-wrap: wrap; }\n  .nav-actions { margin-left: 0; width: 100%; }\n}\n```\nOn narrow screens the bar wraps and actions take a full second row instead of crushing the links into overflow.' }
        ],
        result: 'Three declarations produce the canonical header: centered items, grouped links, right-pinned actions, and a clean wrapped fallback on phones.'
      },
      {
        title: 'Build wrapping cards with pinned footers',
        problem: 'A feature grid needs equal-height cards that wrap from three columns to one, with each call-to-action button pinned to the card bottom.',
        steps: [
          { label: 'Step 1: Wrapping flex grid', text: '```css\n.cards { display: flex; flex-flow: row wrap; gap: 1.5rem; }\n.card {\n  flex: 1 1 16rem;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  padding: 1.25rem;\n}\n```\nEach card grows and shrinks from a sixteen-rem base so the row holds as many as fit, while nested column flex prepares the pinned footer.' },
          { label: 'Step 2: Pin the action with auto margin', text: '```css\n.card p { flex: 1; }\n.card .cta { margin-top: auto; align-self: flex-start; }\n```\nThe paragraph absorbs slack and the auto top margin shoves the button to the card base, equalizing all footers regardless of text length.' },
          { label: 'Step 3: Center a hero with both axes', text: '```css\n.hero {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 60vh;\n  text-align: center;\n}\n```\nThe same axis model centers hero content both ways, showing how one mental model covers bars, grids and centered splash blocks.' }
        ],
        result: 'Cards wrap responsively with aligned footers, and the axis-centered hero demonstrates the single model behind all three patterns.'
      }
    ],
    keyTakeaways: [
      'Container properties arrange; item properties size and override.',
      'justify-content works the main axis, align-items the cross axis.',
      'Use flex-flow: row wrap plus flexible bases for self-responsive rows.',
      'Pin card footers with margin-top: auto inside column-direction cards.',
      'Keep order cosmetic and spacing in gap for accessible, clean flex code.'
    ],
    quiz: [
      {
        q: 'In a column-direction flex container, what does justify-content: center do?',
        options: [
          'Centers items horizontally',
          'Centers items vertically along the column main axis',
          'Stretches items to fill the container',
          'Wraps items onto new columns'
        ],
        answer: 1,
        explanation: 'Flex direction aims the main axis, so in column mode justify-content distributes vertical space while align-items handles the horizontal cross axis.'
      },
      {
        q: 'What does flex: 1 1 16rem declare?',
        options: [
          'Fixed sixteen-rem width with no flexibility',
          'Grow and shrink shares of one from a sixteen-rem starting basis',
          'Sixteen items per row',
          'Order sixteen with one line of wrap'
        ],
        answer: 1,
        explanation: 'The three values are grow, shrink and basis: the item starts at sixteen rems, claims free space and surrenders space equally with siblings.'
      },
      {
        q: 'How do you pin a button to the bottom of variable-height flex cards?',
        options: [
          'position: fixed on the button',
          'Make each card a column flex container and give the button margin-top: auto',
          'Set order: 999 on the button',
          'Add align-content: flex-end to the grid'
        ],
        answer: 1,
        explanation: 'Auto margins absorb free space in the flex direction, so an auto top margin inside a column card shoves the action to the base.'
      },
      {
        q: 'Why should order be used only for cosmetic reordering?',
        options: [
          'It has no visual effect',
          'Screen readers and keyboard tab order still follow source order',
          'It breaks the flex container',
          'It disables gap spacing'
        ],
        answer: 1,
        explanation: 'Order changes paint position alone, so visual order that contradicts source order confuses assistive technology and keyboard users.'
      },
      // Placement-pattern: flexbox centering and growth (original)
      {
        q: "A dialog must center horizontally and vertically inside its row-direction overlay, and one child should absorb leftover horizontal space. Which declaration set does it?",
        options: ["`display: flex; flex-direction: column; justify-content: center;` on the overlay", "`display: flex; align-items: stretch;` on the child alone", "`float: center;` on the dialog", "`display: flex; justify-content: center; align-items: center;` on the overlay plus `flex: 1;` on the growing child"],
        answer: 3,
        explanation: "Step 1: The data given is a row-direction flex container needing two-axis centering plus one expanding child. Step 2: The governing rules are axis mapping in row mode, `justify-content` placing along the horizontal main axis and `align-items` along the vertical cross axis, with `flex: 1` letting a child absorb free main-axis space. Step 3: Applying the set, the overlay centers the dialog on both axes while the flagged child grows to consume leftover width without disturbing the centering of the rest. Step 4: The distractors fail because a column switch redefines the axes, stretch alone centers nothing, and no `float: center` value exists. Step 5: Therefore the two-axis centering plus growth set is the correct one."
      }
    ]
  },
  // ---------------------------------------------------------------- 6.3
  {
    sectionId: 'web-ch6-s3',
    readingTime: 10,
    intro: 'Where flexbox lays out in one dimension, grid commands two: rows and columns together, with explicit placement, named areas and overlapping layers. This section builds the full grid model — tracks, lines and areas, explicit versus implicit grids, placement and spanning, and the judgment call of when grid rather than flexbox is the right instrument.',
    objectives: [
      'Define tracks with fr, repeat and minmax for fluid two-dimensional layouts',
      'Place items with lines, spans and named grid areas',
      'Control implicit rows and dense auto-placement for dynamic content',
      'Choose grid versus flexbox for any layout task'
    ],
    concepts: [
      {
        term: 'Tracks, fr units and repeat with minmax',
        kind: 'definition',
        statement: 'A grid **track** is one row or column defined in **`grid-template-columns`** and **`grid-template-rows`**, and the **`fr`** unit apportions leftover space as fractions after fixed tracks are satisfied. The **`repeat()`** function stamps recurring patterns such as `repeat(12, 1fr)`, while **`minmax()`** bounds each track between a floor and ceiling like `minmax(12rem, 1fr)`. Together, `repeat(auto-fill, minmax(14rem, 1fr))` yields a self-responsive card grid that needs no media queries at all.',
        detail: 'Size flexible tracks with `fr` and guard content tracks with `minmax()` so long words narrow the track to a floor instead of bursting the grid.'
      },
      {
        term: 'Lines, spans and explicit placement',
        kind: 'method',
        statement: '**Grid lines** are the numbered boundaries between tracks, and items attach to them with **`grid-column`** and **`grid-row`** using start and end lines or the **`span`** keyword. A declaration like `grid-column: 1 / span 8` starts at line one and covers eight tracks, while `grid-column: 1 / -1` stretches full-bleed from first to last line. Explicit placement overrides automatic flow exactly where the design needs a hero to span or a sidebar to dock.',
        detail: 'Prefer `span` for component widths and negative `-1` for full-bleed bands so layouts survive column-count changes without renumbering.'
      },
      {
        term: 'Named areas and template layouts',
        kind: 'method',
        statement: 'The **`grid-template-areas`** property draws the layout as ASCII art — `"header header" "sidebar main" "footer footer"` — and items dock into it with **`grid-area`** names, making page skeletons readable at a glance. Retargeting the same names inside a media query rearranges the whole page by rewriting the drawing rather than touching item rules. Areas also document intent: a glance at the template reveals the design in a way line numbers never do.',
        detail: 'Keep area names semantic like main and sidebar so the template reads as the page outline and restacks by editing strings alone.'
      },
      {
        term: 'Explicit versus implicit grids and auto flow',
        kind: 'definition',
        statement: 'The **explicit grid** is what templates declare; any items beyond it spawn the **implicit grid**, whose track sizes come from **`grid-auto-rows`**, **`grid-auto-columns`** and **`grid-auto-flow`**. Setting `grid-auto-rows: minmax(8rem, auto)` keeps dynamically added cards uniform, while `grid-auto-flow: dense` backfills holes left by spanning items at the cost of visual-versus-source order gaps. Understanding this split explains why extra items sometimes size unexpectedly — they live in implicit territory.',
        detail: 'Always declare `grid-auto-rows` on dynamic grids so user-added or CMS-fed items inherit designed sizing instead of content-height accidents.'
      },
      {
        term: 'Grid versus flexbox judgment',
        kind: 'insight',
        statement: 'The decision rule is dimensional: **grid** aligns content along **two axes at once** — page skeletons, card matrices, overlapping hero layers declared with `grid-template-columns` — while **flexbox** distributes along **one axis** — navbars, button rows, centered stacks. Grid controls the container’s columns and rows from the parent; flexbox lets items negotiate space along a line. Real pages compose both: grid frames the regions, flexbox arranges the furniture inside each region.',
        detail: 'When items must line up in both directions at once, choose grid; when they flow in one direction with wrapping, choose flexbox.'
      }
    ],
    examples: [
      {
        title: 'Frame a page with named areas that restack',
        problem: 'A documentation page needs header, sidebar, main and footer regions on desktop that collapse to a single column on phones.',
        steps: [
          { label: 'Step 1: Desktop area template', text: '```css\n.page {\n  display: grid;\n  grid-template-columns: 16rem 1fr;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  gap: 1.5rem;\n}\n.site-head { grid-area: header; }\n.side { grid-area: sidebar; }\n.content { grid-area: main; }\n.site-foot { grid-area: footer; }\n```\nThe ASCII drawing docks each region by name, so the skeleton is legible without counting lines.' },
          { label: 'Step 2: Restack by rewriting the drawing', text: '```css\n@media (max-width: 48rem) {\n  .page {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      "header"\n      "main"\n      "sidebar"\n      "footer";\n  }\n}\n```\nOnly the template changes — item rules stay untouched — which shows why areas beat line placement for responsive skeletons.' },
          { label: 'Step 3: Spanning hero inside main', text: '```css\n.hero-card { grid-column: 1 / -1; }\n```\nWithin a nested grid, the hero spans every column with a future-proof negative index that survives column-count edits.' }
        ],
        result: 'Areas frame the page readably, one media query restacks everything, and spanning handles full-bleed moments without renumbering.'
      },
      {
        title: 'Build a self-responsive card matrix',
        problem: 'A gallery of unknown card count must fill each row evenly, keep implicit rows uniform, and backfill holes left by featured spanning cards.',
        steps: [
          { label: 'Step 1: Auto-fill tracks', text: '```css\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));\n  grid-auto-rows: minmax(10rem, auto);\n  gap: 1.25rem;\n}\n```\nThe track recipe fits as many fourteen-rem-minimum columns as the container allows, each stretching to share leftover space equally.' },
          { label: 'Step 2: Featured spans with dense flow', text: '```css\n.gallery { grid-auto-flow: dense; }\n.featured { grid-column: span 2; grid-row: span 2; }\n```\nFeatured cards double in both dimensions while dense packing backfills the resulting holes with later items.' },
          { label: 'Step 3: Overlapping hero layer', text: '```css\n.hero { display: grid; }\n.hero > * { grid-area: 1 / 1; }\n.hero figcaption { align-self: end; background: rgb(15 23 42 / 0.65); color: #fff; }\n```\nStacking every child into the same cell layers caption over image — a two-dimensional overlap flexbox cannot express.' }
        ],
        result: 'The matrix adapts to any count or width, implicit rows stay uniform, and true layer overlap demonstrates grid’s second dimension.'
      }
    ],
    keyTakeaways: [
      'Define fluid tracks with fr, repeat and minmax combinations.',
      'Place with lines and span; stretch full-bleed with 1 / -1.',
      'Draw skeletons as named areas that restack by rewriting strings.',
      'Tame dynamic content with grid-auto-rows and deliberate auto-flow.',
      'Choose grid for two-axis alignment, flexbox for one-axis flow.'
    ],
    quiz: [
      {
        q: 'What does repeat(auto-fill, minmax(14rem, 1fr)) accomplish?',
        options: [
          'Fourteen fixed columns',
          'As many fourteen-rem-minimum columns as fit, sharing leftover space equally',
          'Fourteen rows of one fraction each',
          'A single centered column'
        ],
        answer: 1,
        explanation: 'Auto-fill stamps columns until the container fills, minmax floors each at fourteen rems, and fr stretches survivors across remaining space.'
      },
      {
        q: 'How does grid-column: 1 / -1 behave?',
        options: [
          'It hides the item',
          'It spans from the first line to the last, going full-bleed across columns',
          'It moves the item to row minus one',
          'It resets placement to automatic'
        ],
        answer: 1,
        explanation: 'Negative line indexes count back from the explicit grid end, so -1 always means the final boundary regardless of column count.'
      },
      {
        q: 'Why restack layouts by rewriting grid-template-areas in a media query?',
        options: [
          'It downloads faster',
          'Item rules stay untouched since docking is by name, so the whole page rearranges by editing the drawing',
          'Areas disable the cascade',
          'Line numbers are deprecated'
        ],
        answer: 1,
        explanation: 'Because items attach via grid-area names, redefining the area strings alone repositions everything without per-item overrides.'
      },
      {
        q: 'When is grid the right choice over flexbox?',
        options: [
          'For a single row of buttons',
          'When items must align along rows and columns simultaneously',
          'For vertical centering of one element',
          'For inline badge layout'
        ],
        answer: 1,
        explanation: 'Two-axis alignment — shared columns plus shared rows, overlap, spanning — is grid territory; one-directional distribution belongs to flexbox.'
      },
      // Placement-pattern: grid template areas spanning (original)
      {
        q: "A layout needs a header spanning two columns with a sidebar and content row below it. Which grid code expresses that?",
        options: ["Three nested flex rows with fixed pixel widths", "`grid-template-areas: 'head head' 'side main';` with each child assigned its area, so the header spans both tracks", "`grid-template-columns: 1fr;` with all children stacked in one track", "Absolute positioning with hard-coded offsets for every box"],
        answer: 1,
        explanation: "Step 1: The data given is a two-column layout with a full-width header row and a split second row. Step 2: The governing rules are named areas: each quoted string is a row, each name is a cell, repeating a name spans tracks, and children claim cells through their assigned area. Step 3: Tracing the declaration, `head head` stretches the header across both columns while `side main` splits the row below, and each child lands by name without any line arithmetic. Step 4: The distractors fail because fixed pixels cannot share leftover space, a single track cannot express two columns, and absolute offsets break flow and responsiveness. Step 5: Therefore the named-areas declaration with a repeated header name is the correct expression."
      }
    ]
  },
  // ---------------------------------------------------------------- 6.4
  {
    sectionId: 'web-ch6-s4',
    readingTime: 10,
    intro: 'Responsive design is the discipline of one codebase serving every screen, from a watch-wide viewport to an ultrawide monitor. This section builds the mobile-first workflow: fluid foundations that need no queries, min-width breakpoints that enhance upward, container queries that let components respond to their own box, and responsive images that serve the right pixels to each device.',
    objectives: [
      'Build fluid foundations with percentages, max-width and clamp()',
      'Write mobile-first media queries with min-width breakpoints',
      'Scope responsive behavior with container queries',
      'Serve right-sized images with srcset, sizes and picture'
    ],
    concepts: [
      {
        term: 'Fluid foundations before breakpoints',
        kind: 'method',
        statement: 'The cheapest responsiveness needs no queries at all: **percentages** and **`max-width`** let content fill small screens and stop sprawling on large ones, while **`clamp()`** interpolates type and spacing fluidly between bounds. A container with `width: min(100%, 70rem)` plus grid or flex children that wrap covers most layouts before any breakpoint fires. Breakpoints should resolve genuine design stress, not substitute for a fluid base that never needed them.',
        detail: 'Exhaust fluid tools — flexible grids, wrapping, clamp and max-width caps — before adding the first media query, and many pages will need only a handful.'
      },
      {
        term: 'Mobile-first media queries',
        kind: 'law',
        statement: 'In the **mobile-first** workflow, base styles target the smallest screen and **`min-width`** queries layer enhancements upward, as in `@media (min-width: 48rem)` unlocking two columns only where they fit. This keeps phones on the leanest CSS, guarantees content works without any query matching, and makes each breakpoint purely additive. Choosing breakpoints from **content stress** — where the design actually breaks — beats memorizing device widths that obsolesce every hardware cycle.',
        detail: 'Add a breakpoint exactly where the layout strains, name it by intent in a comment, and let device diversity fall wherever the content dictates.'
      },
      {
        term: 'Breakpoints, features and range syntax',
        kind: 'definition',
        statement: 'Classic **breakpoints** restack grids, reveal sidebars and scale type at widths like forty and sixty four rems, but modern queries also test **features** such as `orientation`, `prefers-color-scheme` and `prefers-reduced-motion`. The **range syntax** `@media (width >= 48rem)` reads as plain comparison and composes cleanly with `and` for bounded ranges. Feature queries adapt to user preference and device capability rather than raw size, which is the deeper half of responsiveness.',
        detail: 'Combine width ranges with preference features so layouts adapt to both the viewport and the human holding it.'
      },
      {
        term: 'Container queries for component autonomy',
        kind: 'insight',
        statement: '**Container queries** with `@container` let a component respond to its **own box** instead of the viewport, so the same card renders compact in a sidebar and expansive in main content from identical markup. Declaring `container-type: inline-size` on the wrapper establishes the query context, and `@container (min-width: 24rem)` restyles internals when that box — not the window — crosses the threshold. This finally decouples reusable components from page position, the limitation viewport queries could never escape.',
        detail: 'Establish containment on the component wrapper and write container rules for internal arrangement, keeping viewport queries for page-level skeleton changes.'
      },
      {
        term: 'Responsive images with srcset and picture',
        kind: 'method',
        statement: 'The **`srcset`** attribute offers the browser multiple resolutions or widths of one image while **`sizes`** declares the rendered slot width, letting the engine pick the cheapest sufficient file for the viewport and pixel density. The **`picture`** element goes further, swapping art direction — a cropped portrait on phones versus a panorama on desktop — plus next-generation formats with built-in fallback sources. Without these, phones download desktop-sized hero images, the single largest mobile performance tax on image-heavy pages.',
        detail: 'Describe every content image with width-based srcset plus sizes, and reserve picture for art-direction swaps or format upgrades with built-in fallbacks.'
      }
    ],
    examples: [
      {
        title: 'Go mobile-first from one column to three',
        problem: 'A feature section must read as stacked cards on phones, two columns on tablets, and three on desktop — starting from the smallest screen.',
        steps: [
          { label: 'Step 1: Single-column base, no query', text: '```css\n.features { display: grid; gap: 1.25rem; }\n.wrap { width: min(100%, 70rem); margin-inline: auto; padding-inline: 1rem; }\n```\nThe base is a clean one-column stack inside a capped fluid wrapper, so phones get the complete design with zero queries.' },
          { label: 'Step 2: Enhance upward with min-width', text: '```css\n@media (min-width: 40rem) {\n  .features { grid-template-columns: repeat(2, 1fr); }\n}\n@media (min-width: 64rem) {\n  .features { grid-template-columns: repeat(3, 1fr); }\n}\n```\nEach `min-width` layer adds columns only where they fit, keeping the cascade purely additive from small to large.' },
          { label: 'Step 3: Fluid type alongside', text: '```css\nh2 { font-size: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem); }\n```\nHeadings interpolate fluidly between the same breakpoints, so typography never jumps discretely while columns do.' }
        ],
        result: 'One additive stylesheet serves all screens: stacked base, staged column upgrades, and fluid type with no desktop-first overrides to undo.'
      },
      {
        title: 'Make a card respond to its container plus sized images',
        problem: 'A product card appears in both a narrow sidebar and wide main content, and its photo must download at an appropriate size in each slot.',
        steps: [
          { label: 'Step 1: Establish the container context', text: '```css\n.slot { container-type: inline-size; }\n.card { display: grid; gap: 1rem; }\n@container (min-width: 24rem) {\n  .card { grid-template-columns: 12rem 1fr; }\n}\n```\nThe wrapper’s inline-size containment lets the card switch to a horizontal layout whenever its own box — sidebar or main — is wide enough.' },
          { label: 'Step 2: Sized image markup', text: '```html\n<img src="shoe-800.jpg"\n     srcset="shoe-400.jpg 400w, shoe-800.jpg 800w, shoe-1200.jpg 1200w"\n     sizes="(max-width: 40rem) 100vw, 50vw"\n     alt="Running shoe" loading="lazy">\n```\nWidth descriptors plus the slot declaration let the browser fetch the cheapest file that still looks sharp in the actual rendered slot.' },
          { label: 'Step 3: Art direction with picture', text: '```html\n<picture>\n  <source media="(max-width: 40rem)" srcset="hero-portrait.jpg">\n  <img src="hero-wide.jpg" alt="Collection hero">\n</picture>\n```\nPhones receive a portrait crop composed for narrow screens while larger viewports get the panorama, each art-directed rather than merely scaled.' }
        ],
        result: 'The card self-adapts to any slot via container queries while images cost each device only the pixels its screen can show.'
      }
    ],
    keyTakeaways: [
      'Build fluid with percentages, max-width caps and clamp() before any query.',
      'Write mobile-first CSS enhanced upward with min-width breakpoints at content stress.',
      'Use range syntax and feature queries for preferences as well as widths.',
      'Give reusable components container queries so slots, not viewports, drive them.',
      'Describe images with srcset plus sizes and art-direct with picture.'
    ],
    quiz: [
      {
        q: 'What is the core mobile-first rule?',
        options: [
          'Write desktop styles first, then undo them for phones',
          'Base styles target small screens; min-width queries add enhancements upward',
          'Use only max-width queries',
          'Hide content on phones with display: none'
        ],
        answer: 1,
        explanation: 'Small-screen-first bases guarantee working content with no query matched, and min-width layers keep every breakpoint purely additive.'
      },
      {
        q: 'What problem do container queries solve that viewport queries cannot?',
        options: [
          'They download faster',
          'They let a component adapt to its own box so identical markup behaves correctly in different slots',
          'They replace all media queries',
          'They work without CSS'
        ],
        answer: 1,
        explanation: 'Viewport queries see only the window, so a sidebar card and a main-column card look identical to them; container queries respond to each wrapper box.'
      },
      {
        q: 'What do srcset and sizes together let the browser do?',
        options: [
          'Crop images artistically',
          'Pick the cheapest sufficient file for the rendered slot, viewport and density',
          'Lazy-load below-fold images',
          'Convert formats automatically'
        ],
        answer: 1,
        explanation: 'Width descriptors enumerate candidates while sizes declares the slot, so the engine computes and fetches the optimal resource.'
      },
      {
        q: 'When should the picture element be used instead of a plain img with srcset?',
        options: [
          'Always — picture is faster',
          'When art direction differs per viewport, such as a portrait crop versus a panorama',
          'When images need lazy loading',
          'When alt text is missing'
        ],
        answer: 1,
        explanation: 'Picture swaps whole sources by media condition, enabling different compositions per breakpoint rather than different resolutions of one composition.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.5
  {
    sectionId: 'web-ch6-s5',
    readingTime: 8,
    intro: 'Layout ends where geometry begins: measuring boxes, understanding the viewport they live in, and choreographing scroll. This section covers the viewport meta tag and modern viewport units, coordinate systems with getBoundingClientRect, sticky and smooth scrolling, overflow patterns including scroll snap, and scroll-driven reveals with IntersectionObserver.',
    objectives: [
      'Configure the viewport meta tag and choose modern viewport units',
      'Measure elements with getBoundingClientRect across coordinate systems',
      'Build sticky, smooth and snap scrolling experiences',
      'Reveal content on scroll with IntersectionObserver'
    ],
    concepts: [
      {
        term: 'Viewport meta and modern units',
        kind: 'definition',
        statement: 'The **viewport meta tag** `<meta name="viewport" content="width=device-width, initial-scale=1">` tells mobile browsers to size the layout viewport to the device width instead of shrinking a desktop page into a zoomed-out miniature. CSS then sizes against it with **viewport units**: classic **`vw`** and **`vh`** plus the 2026-stable small, large and **dynamic** variants — **`svh`**, **`lvh`** and **`dvh`** — where `100dvh` tracks the visible height as mobile chrome shows and hides. Full-height heroes built on `100vh` strand content behind browser bars; `100dvh` follows the visible area instead.',
        detail: 'Ship the meta tag on every page and default full-height sections to `min-height: 100dvh` so mobile browser chrome never covers content.'
      },
      {
        term: 'Coordinates and getBoundingClientRect',
        kind: 'method',
        statement: 'The **`getBoundingClientRect()`** method returns an element’s box as viewport-relative `top`, `right`, `bottom`, `left`, `width` and `height`, remeasured live on every call. These **client coordinates** differ from **page coordinates**, which add scroll offset, and from **`offsetTop`** chains that measure against positioned ancestors. Scroll math therefore pairs the rect with **`window.scrollY`** — as in `rect.top + window.scrollY` for document position — choosing the system that matches whether the goal is viewport visibility or document location.',
        detail: 'Call getBoundingClientRect at the moment of need inside scroll or click handlers, since cached rects go stale the instant anything scrolls or resizes.'
      },
      {
        term: 'Sticky, smooth scrolling and scroll margin',
        kind: 'method',
        statement: '**Sticky** section navs clamp within their parents while **`scroll-behavior: smooth`** animates anchor jumps instead of teleporting, and **`scroll-margin-top`** offsets landing positions so fixed headers never cover the target heading. Together they produce documentation-style navigation: clicking a table-of-contents link glides to the section with breathing room below the bar. Honor **`prefers-reduced-motion`** by disabling smooth scrolling for users who request minimal movement.',
        detail: 'Give every anchor target a `scroll-margin-top` matching the fixed header height plus a cushion so jumps land readable on the first try.'
      },
      {
        term: 'Overflow patterns and scroll snap',
        kind: 'definition',
        statement: 'The **`overflow`** property decides how boxes handle excess content — `visible`, `hidden`, `scroll`, `auto` and the per-axis `overflow-x` and `overflow-y` splits — with `auto` showing scrollbars only when needed. **Scroll snap** with **`scroll-snap-type`** on the scroller plus **`scroll-snap-align`** on children magnetizes carousels and full-screen decks to clean stopping points. Horizontal snap carousels with `scroll-snap-type: x mandatory` deliver app-like paging with zero JavaScript.',
        detail: 'Prefer `overflow: auto` over `scroll` so scrollbars appear only when content actually overflows, avoiding permanently disabled chrome.'
      },
      {
        term: 'IntersectionObserver reveals and lazy work',
        kind: 'insight',
        statement: 'The **`IntersectionObserver`** API fires callbacks when elements cross viewport thresholds, enabling scroll reveals, lazy image swaps and infinite lists without scroll-event math on the main thread. Observing sections with a modest threshold and unobserving after the first reveal runs entrance animations exactly once at minimal cost. Unlike scroll listeners that compute geometry every frame, the observer lets the browser batch visibility work off the critical path.',
        detail: 'Unobserve each target after its reveal and choose thresholds near one quarter visible so animations trigger while content is still entering.'
      }
    ],
    examples: [
      {
        title: 'Build a sticky table of contents with smooth anchors',
        problem: 'A long guide needs a sidebar index that sticks while reading, jumps smoothly to sections, and lands clear of the fixed header.',
        steps: [
          { label: 'Step 1: Viewport and sticky shell', text: '```html\n<meta name="viewport" content="width=device-width, initial-scale=1">\n```\n```css\n.toc { position: sticky; top: 5rem; }\n.site-header { position: fixed; top: 0; height: 4rem; }\n```\nThe meta tag establishes the mobile layout viewport while sticky keeps the index clamped beside the scrolling article.' },
          { label: 'Step 2: Smooth jumps with landing offset', text: '```css\nhtml { scroll-behavior: smooth; }\nsection[id] { scroll-margin-top: 5rem; }\n@media (prefers-reduced-motion: reduce) {\n  html { scroll-behavior: auto; }\n}\n```\nAnchor clicks glide instead of jumping, the margin clears the four-rem header plus cushion, and reduced-motion users get instant jumps.' },
          { label: 'Step 3: Highlight the visible section', text: '```js\nconst links = document.querySelectorAll(".toc a");\nconst spy = new IntersectionObserver((entries) => {\n  entries.forEach((entry) => {\n    if (entry.isIntersecting) {\n      links.forEach((a) => a.removeAttribute("aria-current"));\n      const active = document.querySelector(`.toc a[href="#${entry.target.id}"]`);\n      if (active) { active.setAttribute("aria-current", "true"); }\n    }\n  });\n}, { rootMargin: "-40% 0px -55% 0px" });\ndocument.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));\n```\nThe observer marks whichever section occupies the reading band, keeping the index highlight synchronized with scroll position.' }
        ],
        result: 'Sticky, smooth and self-highlighting navigation from three small techniques composed: clamp, glide with offset, and observe.'
      },
      {
        title: 'Build a snap carousel with scroll reveal',
        problem: 'A testimonial strip must page cleanly on swipe with no JavaScript, and feature blocks below should fade up once as they enter view.',
        steps: [
          { label: 'Step 1: Snap scroller markup and CSS', text: '```html\n<div class="rail">\n  <figure class="slide">…</figure>\n  <figure class="slide">…</figure>\n  <figure class="slide">…</figure>\n</div>\n```\n```css\n.rail {\n  display: flex; gap: 1rem;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n}\n.slide { flex: 0 0 80%; scroll-snap-align: center; }\n```\nMandatory snap on the scroller plus center alignment on children produces paging swipes with pure CSS.' },
          { label: 'Step 2: Geometry check for edge buttons', text: '```js\nconst rail = document.querySelector(".rail");\nfunction atEnd() {\n  const r = rail.getBoundingClientRect();\n  return rail.scrollWidth - (rail.scrollLeft + r.width) < 2;\n}\n```\nViewport-relative measurement plus scroll offsets detect the rail end within a two-pixel tolerance for disabling the next button.' },
          { label: 'Step 3: Reveal-once observer', text: '```css\n.reveal { opacity: 0; translate: 0 1rem; transition: opacity 400ms ease, translate 400ms ease; }\n.reveal.in { opacity: 1; translate: 0 0; }\n```\n```js\nconst io = new IntersectionObserver((entries) => {\n  entries.forEach((e) => {\n    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }\n  });\n}, { threshold: 0.25 });\ndocument.querySelectorAll(".reveal").forEach((el) => io.observe(el));\n```\nAdding the class at one quarter visibility triggers the transition once, then unobserving frees the target permanently.' }
        ],
        result: 'Swipes page magnetically with zero carousel script, and observer-driven reveals animate each block exactly once at minimal main-thread cost.'
      }
    ],
    keyTakeaways: [
      'Ship the viewport meta tag and size full-height sections with 100dvh.',
      'Measure with getBoundingClientRect and convert with scroll offsets deliberately.',
      'Combine sticky, smooth scroll and scroll-margin for polished anchor navigation.',
      'Use overflow: auto plus scroll snap for native-feeling carousels.',
      'Drive reveals with IntersectionObserver and unobserve after firing.'
    ],
    quiz: [
      {
        q: 'Why does a mobile page render as a shrunken desktop miniature?',
        options: [
          'The stylesheet failed to load',
          'The viewport meta tag is missing, so the layout viewport stays at desktop width',
          'JavaScript is disabled',
          'The images lack srcset'
        ],
        answer: 1,
        explanation: 'Without width=device-width the mobile browser lays out near desktop width and scales down; the meta tag aligns the layout viewport to the device.'
      },
      {
        q: 'What coordinates does getBoundingClientRect() return?',
        options: [
          'Document coordinates including scroll',
          'Viewport-relative client coordinates remeasured on each call',
          'Screen hardware pixels',
          'Offsets against the nearest positioned ancestor'
        ],
        answer: 1,
        explanation: 'The rect describes the box against the current viewport, so adding window.scrollY converts to document position and cached values stale on scroll.'
      },
      {
        q: 'Why pair scroll-behavior: smooth with scroll-margin-top on targets?',
        options: [
          'Margin enables the smooth animation',
          'The margin offsets landings so fixed headers do not cover the jumped-to heading',
          'Smooth scrolling requires margins by spec',
          'It disables reduced-motion handling'
        ],
        answer: 1,
        explanation: 'Smooth animates the journey while scroll-margin reserves space at the destination, clearing sticky or fixed chrome above the target.'
      },
      {
        q: 'What is the main performance advantage of IntersectionObserver over scroll listeners?',
        options: [
          'It renders more frames',
          'The browser batches visibility checks off the critical path instead of running geometry math per scroll event',
          'It preloads all images',
          'It disables layout entirely'
        ],
        answer: 1,
        explanation: 'Observers delegate intersection computation to the browser runtime, avoiding per-frame rect math and layout thrash in main-thread handlers.'
      }
    ]
  }
]
