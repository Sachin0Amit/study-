import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 4: CSS Fundamentals
// Sections web-ch4-s1 through web-ch4-s5. Master study content.
// ============================================================================

export const webCh04Content: SectionContent[] = [
  // ---------------------------------------------------------------- web-ch4-s1
  {
    sectionId: 'web-ch4-s1',
    readingTime: 8,
    intro: 'CSS turns structured HTML into designed pages through rules that select elements and declare their presentation. This section covers ruleset syntax plus the selector vocabulary of classes, ids, attributes, and pseudo states. Combinators then express relationships like descent and sibling order that classes alone cannot.',
    objectives: [
      'Write valid rulesets with selectors, declarations, properties, and values',
      'Select with type, class, id, and attribute selectors appropriately',
      'Apply pseudo-classes and pseudo-elements for states and generated parts',
      'Combine selectors with descendant, child, sibling, and group combinators'
    ],
    concepts: [
      {
        term: 'Rulesets and declarations',
        kind: 'definition',
        statement: 'A **ruleset** pairs a **selector** naming which elements match with a **declaration block** in braces holding `property: value` pairs. Each **declaration** ends with a **semicolon**, and the final semicolon is recommended so later additions never break parsing. The `link` element attaches **external stylesheets**, keeping `presentation` separate from `markup`.',
        detail: 'One ruleset can style thousands of matching elements, which is why selector choice matters more than declaration count.'
      },
      {
        term: 'Type, class, id, and attribute selectors',
        kind: 'definition',
        statement: 'Type selectors like `p` match by **tag name**, class selectors like `.card` match the **`class`** token list, and id selectors like `#main` match one **`id`** value. **Attribute selectors** such as `[type="email"]` and `[href^="https"]` match by **presence, value, and prefix**, styling inputs and links without extra classes. Classes are **reusable and composable**, while ids are **unique hooks** best saved for anchors and scripting.',
        detail: 'Prefer classes for styling because they combine freely, unlike ids which cannot repeat and overpower the cascade.'
      },
      {
        term: 'Pseudo-classes for state',
        kind: 'definition',
        statement: 'A **pseudo-class** with a single colon matches an **element state** such as `:hover`, `:focus-visible`, `:checked`, or `:nth-child(2n)`. Link history uses `:link` and `:visited`, interaction uses `:hover`, `:active`, and `:focus`, and form state uses `:required`, `:valid`, and `:disabled`. Structural patterns like `:first-child` and `:not(.muted)` select by **position and negation** without touching markup.',
        detail: 'State selectors keep behavior in CSS that scripts would otherwise toggle with classes.'
      },
      {
        term: 'Pseudo-elements for generated parts',
        kind: 'notation',
        statement: 'A **pseudo-element** with a double colon styles a **part of an element** such as `::before`, `::after`, `::first-line`, or `::marker`. Generated content comes from the **`content`** property, which can insert **decorative glyphs** or counters that never enter the DOM. The `::selection` and `::placeholder` elements theme **highlighted text** and **hint text** respectively.',
        detail: 'Decorative icons belong in pseudo-elements so assistive tech never announces them as content.'
      },
      {
        term: 'Combinators and grouping',
        kind: 'method',
        statement: 'Combinators express **relationships**: a space for any **descendant**, `>` for a direct **child**, `+` for the adjacent **sibling**, and `~` for any later **sibling**. Grouping with commas like `h1, h2, h3` shares **one declaration block** across selectors, while chaining like `button.primary` requires **all conditions** on one element. Specific intent such as `nav > ul` stays robust where loose `nav ul` over-matches nested menus.',
        detail: 'Tight combinators document structure, while bare descendant selectors silently restyle content added months later.'
      }
    ],
    examples: [
      {
        title: 'Style a card with classes and states',
        problem: 'Give article cards a reusable look with a hover lift and a styled marker list.',
        steps: [
          { label: 'Step 1: Reusable classes', text: '```css\n.card {\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n}\n.card:hover {\n  box-shadow: 0 8px 24px rgb(0 0 0 / 0.12);\n}\n```\nThe `.card` class applies anywhere while `:hover` adds the interactive state with no script.' },
          { label: 'Step 2: Attribute hook', text: 'Style external links inside cards with `[href^="https"]::after` adding a small arrow glyph through `content`, keeping icons out of markup.' },
          { label: 'Step 3: Group headings', text: 'Share one font rule across `h1, h2, h3` with a comma group instead of repeating the declaration three times.' }
        ],
        result: 'Cards share one class-driven design, links signal externals automatically, and headings stay consistent.'
      },
      {
        title: 'Target structure with combinators',
        problem: 'Style only top-level nav items and the paragraph directly after each figure.',
        steps: [
          { label: 'Step 1: Child over descendant', text: '```css\nnav > ul > li {\n  list-style: none;\n}\nfigure + p {\n  margin-top: 0.5rem;\n  color: #475569;\n}\n```\nThe child chain skips nested dropdown lists while the adjacent combinator hits only the caption paragraph.' },
          { label: 'Step 2: Chain for intent', text: 'Require `button.primary` with no space so the rule needs both the tag and the class on one element.' },
          { label: 'Step 3: Verify scope', text: 'Add a nested list and a second paragraph to confirm only the intended nodes change.' }
        ],
        result: 'Relationship selectors style exactly the structural positions named, immune to later nested content.'
      }
    ],
    keyTakeaways: [
      'Rulesets pair selectors with braced property-value declarations for matched elements.',
      'Type, class, id, and attribute selectors trade specificity for reusability.',
      'Pseudo-classes match states like hover, focus, checked, and structural position.',
      'Pseudo-elements style element parts and generated content outside the DOM.',
      'Combinators plus grouping express descent, parenthood, and sibling order precisely.'
    ],
    quiz: [
      {
        q: 'What does nav > ul select?',
        options: ['Any ul anywhere inside nav', 'Only ul elements that are direct children of nav', 'All siblings of nav', 'The nav parent'],
        answer: 1,
        explanation: 'The child combinator requires direct parenthood, unlike the descendant space which allows any depth.'
      },
      {
        q: 'When should an id selector style a page?',
        options: ['For every repeated component', 'Rarely: ids are unique and overpowering, so classes suit repeated styling', 'For all buttons', 'Never in any file'],
        answer: 1,
        explanation: 'Unique high-specificity ids resist reuse and overrides, making composable classes the styling default.'
      },
      {
        q: 'What does ::before with content do?',
        options: ['It edits the HTML file', 'It renders generated decoration that is not a DOM node', 'It deletes the element', 'It validates the page'],
        answer: 1,
        explanation: 'Generated content paints through CSS alone, keeping decorative glyphs out of markup and assistive trees.'
      },
      {
        q: 'Which selector matches checked checkboxes?',
        options: [':hover', ':checked', '::marker', ':link'],
        answer: 1,
        explanation: 'Checked is a form-state pseudo-class, while hover is interaction and marker is a pseudo-element.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch4-s2
  {
    sectionId: 'web-ch4-s2',
    readingTime: 9,
    intro: 'When several rules target one element, the cascade decides the winner through origin, specificity, and order. This section scores specificity, explains inheritance, and places important declarations correctly. You will predict winning rules before touching DevTools.',
    objectives: [
      'Order cascade origins from user-agent to author to important layers',
      'Score specificity with id, class-attribute, and type counts',
      'Explain inheritance with inherited versus non-inherited properties',
      'Use shorthand, unset values, and important without creating traps'
    ],
    concepts: [
      {
        term: 'Cascade origins and order',
        kind: 'law',
        statement: 'The **cascade** resolves conflicts in layers: **user-agent** defaults lose to **author** styles, which lose to **`!important`** author styles and then **`!important`** user styles. Within one origin, **`@layer`** order, then **specificity**, then **source order** break ties, so later rules win only at **equal specificity**. Inline `style` attributes beat all normal author rules because they attach **directly to the element**.',
        detail: 'Order matters last, which is why a later single-class rule never beats an earlier id rule.'
      },
      {
        term: 'Specificity scoring',
        kind: 'method',
        statement: 'Specificity counts three columns: **`id`** selectors, **`class plus attribute plus pseudo-class`** selectors, and **`type plus pseudo-element`** selectors. The selector `#nav .link` scores one id plus one class and beats `.menu .link.active` with zero ids and three classes. The **universal `*`** and combinators add **nothing**, and `:where()` contributes **zero** while `:is()` takes its **strongest argument**.',
        detail: 'Counting columns predicts winners faster than trial edits, especially in large stylesheets.'
      },
      {
        term: 'Inheritance through the tree',
        kind: 'definition',
        statement: 'Some properties **inherit** by default, notably `color`, `font`, and `line-height`, flowing from **parent to child** until overridden. Box properties like `margin`, `padding`, and `border` **do not inherit**, so each element starts fresh. The `inherit` keyword forces **explicit inheritance** of any property, while `initial` and `unset` restore **specified or natural** behavior.',
        detail: 'Setting fonts and colors on body leverages inheritance instead of repeating declarations per element.'
      },
      {
        term: 'Important and layers',
        kind: 'insight',
        statement: 'The **`!important`** flag promotes one declaration above all normal rules, which makes it a **last-resort override** rather than a daily tool. Overuse creates an **arms race** where only more important flags can win, hiding the real specificity fault. Cascade **`@layer`** blocks organize code into **ordered strata** like reset, components, and utilities so placement expresses priority structurally.',
        detail: 'Layers solve the same conflicts declaratively that scattered important flags solve destructively.'
      },
      {
        term: 'Shorthand and computed values',
        kind: 'notation',
        statement: 'Shorthand properties like `margin`, `font`, and `background` set **multiple longhands** in one line, resetting any **omitted parts** to initials. The **computed value** DevTools shows is the cascade winner after **inheritance and defaults** resolve. Reading computed versus authored styles reveals whether a rule **lost the cascade** or never **matched at all**.',
        detail: 'Unexpected resets usually trace to a shorthand silently clearing a longhand set just above it.'
      }
    ],
    examples: [
      {
        title: 'Score two competing rules',
        problem: 'A link stays red when a later rule says blue. Score the selectors and fix it properly.',
        steps: [
          { label: 'Step 1: Score both', text: '```css\n#nav a { color: red; }       /* one id + one type: wins */\n.footer a.link { color: blue; } /* zero ids + one class + one type: loses */\n```\nOne id outweighs any number of classes, so source order never gets consulted.' },
          { label: 'Step 2: Fix structurally', text: 'Replace the id styling with a class like `.site-nav a` so both rules live in the same column and order can decide. Reserve `!important` for third-party overrides only.' },
          { label: 'Step 3: Confirm in DevTools', text: 'Inspect the link: the losing declaration appears struck through with its selector shown, proving the cascade verdict.' }
        ],
        result: 'Scoring explains the red link and the class-based rewrite lets the later blue rule win fairly.'
      },
      {
        title: 'Use inheritance deliberately',
        problem: 'Theme a whole article with one font and color while boxing each card separately.',
        steps: [
          { label: 'Step 1: Inherit type', text: '```css\narticle {\n  color: #0f172a;\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.card {\n  border: 1px solid #e2e8f0;\n  padding: 1rem;\n}\n```\nText properties flow into every descendant while borders stay per card because they never inherit.' },
          { label: 'Step 2: Force one exception', text: 'Give a muted note `color: inherit` explicitly after a reset so it tracks article color automatically.' },
          { label: 'Step 3: Check computed', text: 'Inspect a nested paragraph computed font to confirm it arrives via inheritance rather than a direct match.' }
        ],
        result: 'One ancestor rule themes all prose while box rules stay local, minimizing declarations and overrides.'
      }
    ],
    keyTakeaways: [
      'Origins, layers, specificity, and order resolve every cascade conflict in sequence.',
      'Specificity counts id, class-family, and type-family columns with ids dominant.',
      'Text properties inherit while box properties reset per element by default.',
      'Important flags are last resorts that layers and scoring usually replace.',
      'Shorthands reset omitted longhands, and computed styles reveal the true winner.'
    ],
    quiz: [
      {
        q: 'Which selector wins: #nav a or .footer a.link?',
        options: ['.footer a.link because it is later', '#nav a because one id beats any number of classes', 'They tie', 'Neither applies'],
        answer: 1,
        explanation: 'Id-column counts outrank the class column entirely, so order only matters within equal scores.'
      },
      {
        q: 'Which property inherits by default?',
        options: ['margin', 'border', 'color', 'padding'],
        answer: 2,
        explanation: 'Text color flows down the tree unless overridden, while box properties start fresh per element.'
      },
      {
        q: 'What does :where(.a, #b) contribute to specificity?',
        options: ['One id', 'One class', 'Zero', 'One type'],
        answer: 2,
        explanation: 'Where always contributes zero so grouped conditions never inflate the score.'
      },
      {
        q: 'Why avoid !important for routine overrides?',
        options: ['It is invalid CSS', 'It forces an arms race where only more important flags can override it', 'It slows downloads', 'It deletes comments'],
        answer: 1,
        explanation: 'Promoted declarations hide the real conflict and escalate until the stylesheet is undebuggable.'
      },
      // Placement-pattern: specificity scoring across selectors (original)
      {
        q: "Three rules target the same link, with no inline styles or `!important` anywhere:\n```css\n.nav a { color: blue; }\n#menu .item { color: green; }\nul li a.active { color: red; }\n```\nThe link matches all three rules. Which color wins?",
        options: ["Blue: fewer selectors always win over more selectors", "Green: a single ID outranks any number of classes and elements", "Red: three selectors always beat two selectors", "Blue: rules in earlier files always beat rules in later files"],
        answer: 1,
        explanation: "Step 1: The data given is three matching rules differing in selector makeup. Step 2: The governing rule is specificity scoring as an ID, class, element triple compared column by column, with source order breaking only exact ties. Step 3: Scoring each rule gives `.nav a` as (0, 1, 1), `#menu .item` as (1, 1, 0), and `ul li a.active` as (0, 1, 3); the ID column decides immediately in favor of the second rule, so the link renders green. Step 4: The distractors fail because raw selector counts never decide, file order matters only after a tie, and no inline style participates here. Step 5: Therefore the ID-bearing rule wins regardless of length."
      },
      // Placement-pattern: inheritance versus non-inherited properties (original)
      {
        q: "A stylesheet holds `article { color: slate; margin: 2rem; }`. A paragraph inside the article matches no rule of its own. What renders?",
        options: ["The paragraph text inherits the slate color, but the article margin does not transfer to it", "Both the color and the margin transfer to the paragraph", "Neither transfers: no property ever inherits", "The margin transfers but the color resets to black"],
        answer: 0,
        explanation: "Step 1: The data given is one rule on a parent and an unstyled child paragraph. Step 2: The governing rules are per-property inheritance: text color inherits by default while box properties such as margin, border, and padding never inherit, and any directly matching rule would beat an inherited value. Step 3: Tracing the paragraph, its color resolves through inheritance to slate since nothing targets it, while its own margin stays at the initial zero because margins do not inherit. Step 4: The distractors fail because inheritance is selective rather than total, the paragraph demonstrably receives the color, and no reset-to-black rule exists. Step 5: Therefore the text takes the inherited color while spacing stays local to the article."
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch4-s3
  {
    sectionId: 'web-ch4-s3',
    readingTime: 9,
    intro: 'Every element is a box of content, padding, border, and margin, sized and clipped by precise rules. This section maps the four layers, switches box-sizing safely, and controls width, height, and overflow. Master the model and spacing stops being guesswork.',
    objectives: [
      'Name the content, padding, border, and margin layers of the box model',
      'Apply box-sizing border-box for predictable sizing',
      'Control width, height, min, max, and margin collapsing behavior',
      'Handle overflowing content with visible, hidden, scroll, and auto'
    ],
    concepts: [
      {
        term: 'Four layers of the box',
        kind: 'definition',
        statement: 'From inside out, each box holds **`content`** with text or children, **`padding`** clearing space inside the border, **`border`** drawing the edge, and **`margin`** clearing space outside it. The `background` paints under content plus padding but **not margin**, which stays transparent. DevTools draws each layer in a **different color** so spacing faults map to one named band.',
        detail: 'Naming the band turns vague too much space into padding versus margin with a direct fix.'
      },
      {
        term: 'Box-sizing: content versus border',
        kind: 'law',
        statement: 'With **`content-box`**, `width` sizes only the **content** and padding plus border add extra, so `width: 200px` plus wide padding overflows its slot. With **`border-box`**, `width` covers **content plus padding plus border**, keeping the declared size exact. The modern reset `*, *::before, *::after { box-sizing: border-box; }` makes **declared sizes truthful** across a project.',
        detail: 'Most overflow mysteries are content-box arithmetic where padding silently widened the box.'
      },
      {
        term: 'Width, height, min, and max',
        kind: 'method',
        statement: 'The `width` and `height` properties fix size while **`min-width`**, **`max-width`**, **`min-height`**, and **`max-height`** bound fluid growth. Setting `max-width: 65ch` keeps **line length readable** on wide screens while `width: 100%` fills narrow ones. The `margin: 0 auto` pattern **centers block boxes** with a bounded width by splitting leftover space equally.',
        detail: 'Bounds plus fluid widths adapt to viewports where fixed pixels either overflow or strand content.'
      },
      {
        term: 'Margins and collapsing',
        kind: 'insight',
        statement: '**Vertical margins collapse**: adjacent `margin-top` and `margin-bottom` merge into the **larger value** rather than adding. Parent and first-child margins can collapse **through each other** unless `padding`, `border`, or `display: flow-root` **contains** them. Horizontal margins never collapse, and `gap` in flex and grid **spaces without collapsing** at all.',
        detail: 'Missing expected spacing usually means two margins merged, not that one rule failed to apply.'
      },
      {
        term: 'Overflow control',
        kind: 'method',
        statement: 'The **`overflow`** property decides what happens past the padding box: `visible` **spills out**, `hidden` **clips**, `scroll` always shows **scrollbars**, and `auto` adds them **only when needed**. Independent `overflow-x` and `overflow-y` axes split behavior, though one non-visible axis forces the other to **`auto`**. Pairing `max-height` with `overflow: auto` builds **scroll regions** that preserve surrounding layout.',
        detail: 'Clipping needs a sized box first, since unbounded heights never overflow.'
      }
    ],
    examples: [
      {
        title: 'Fix an overflowing card grid',
        problem: 'Cards with padding overflow their columns. Diagnose the sizing and repair it globally.',
        steps: [
          { label: 'Step 1: Show the math', text: '```css\n/* content-box: 200px content + 2 * 16px padding + 2 * 1px border = 234px */\n.card { width: 200px; padding: 1rem; border: 1px solid #cbd5e1; }\n```\nEach card renders wider than its declared width, breaking the grid sum.' },
          { label: 'Step 2: Switch the model', text: '```css\n*, *::before, *::after { box-sizing: border-box; }\n.card { width: 200px; padding: 1rem; }\n```\nDeclared width now includes padding and border, so grid columns add up exactly.' },
          { label: 'Step 3: Bound fluidly', text: 'Add `max-width: 100%` so cards shrink inside narrow viewports instead of overflowing the page.' }
        ],
        result: 'Grid math becomes exact: declared widths hold and padding lives inside them.'
      },
      {
        title: 'Contain margins and scrolling text',
        problem: 'A section top margin escapes its parent and a long bio breaks the card.',
        steps: [
          { label: 'Step 1: Contain the collapse', text: 'Give the parent `display: flow-root` or small top `padding` so the child margin cannot collapse through it. The gap then sits visibly inside the parent background.' },
          { label: 'Step 2: Scroll the bio', text: '```css\n.bio {\n  max-height: 8rem;\n  overflow-y: auto;\n}\n```\nBounded height plus automatic vertical scrolling keeps one long bio from stretching every card.' },
          { label: 'Step 3: Center the column', text: 'Bound the page column with `max-width` and `margin: 0 auto` so leftover space splits evenly on wide screens.' }
        ],
        result: 'Margins stay where declared and long content scrolls locally instead of breaking shared layouts.'
      }
    ],
    keyTakeaways: [
      'Content, padding, border, and margin layer from inside out with distinct roles.',
      'Border-box sizing keeps declared widths truthful by including padding and border.',
      'Min and max bounds plus fluid widths adapt boxes to every viewport.',
      'Vertical margins collapse into the larger value unless contained explicitly.',
      'Overflow settings clip or scroll sized boxes per axis when content exceeds them.'
    ],
    quiz: [
      {
        q: 'With content-box, what does width: 200px plus 16px side padding produce?',
        options: ['A 200px total box', 'A box wider than 200px because padding adds outside content', 'A 168px content area', 'No visible box'],
        answer: 1,
        explanation: 'Content-box sizes content alone, so padding and border extend beyond the declared width.'
      },
      {
        q: 'Which reset makes declared sizes include padding and border?',
        options: ['margin: 0', 'box-sizing: border-box on all elements and pseudo-elements', 'display: block', 'overflow: hidden'],
        answer: 1,
        explanation: 'Border-box redefines width to cover content plus padding plus border for predictable math.'
      },
      {
        q: 'Two stacked 20px and 30px vertical margins meet. What gap results?',
        options: ['50px', '30px', '20px', 'Zero'],
        answer: 1,
        explanation: 'Adjacent vertical margins collapse into the larger value rather than summing.'
      },
      {
        q: 'How do you build a local vertical scroll region?',
        options: ['overflow: visible only', 'A bounded max-height with overflow-y auto', 'A larger font size', 'Negative margins'],
        answer: 1,
        explanation: 'The bound creates overflow potential and auto adds a scrollbar exactly when content exceeds it.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch4-s4
  {
    sectionId: 'web-ch4-s4',
    readingTime: 8,
    intro: 'CSS values turn design intent into numbers, lengths, and colors that adapt across screens. This section compares absolute and relative units, sizes type fluidly, and mixes modern color formats. You will pick units and colors that scale with users rather than fighting them.',
    objectives: [
      'Distinguish absolute lengths from font-relative and viewport-relative units',
      'Size type and spacing with rem and em without compounding surprises',
      'Write colors in hex, rgb, hsl, and lab with alpha transparency',
      'Build fluid type and spacing with clamp and relative units'
    ],
    concepts: [
      {
        term: 'Length families',
        kind: 'definition',
        statement: 'Absolute units like **`px`** fix size to **CSS pixels** regardless of context, while percentages resolve against the **parent dimension**. Font-relative units **`em`** and **`rem`** scale with **element and root type size**, and viewport units **`vw`**, **`vh`**, and **`dvh`** scale with the **visible window**. Choosing the family decides whether a value **holds still or adapts** when users zoom or rotate.',
        detail: 'Zoom scales CSS pixels too, so px is absolute only relative to the design, not to user needs.'
      },
      {
        term: 'em versus rem',
        kind: 'method',
        statement: 'One **`rem`** always equals the **root `html` font size**, so `1.5rem` means the same everywhere and composes cleanly. One **`em`** equals the **current element font size**, so nestedems **compound** as each level multiplies its parent. Use `rem` for **component dimensions and type scale** and reserve `em` for **local proportional tweaks** like padding that should track nearby text.',
        detail: 'Compounding em lists are the classic surprise where third-level items shrink or balloon unexpectedly.'
      },
      {
        term: 'Viewport units and dynamic mobile bars',
        kind: 'insight',
        statement: 'Viewport units size against the **browser window**: `100vw` spans full width while `100vh` spans the **initial viewport height**. Mobile browser chrome expands and collapses, so plain `vh` can **jump**; the **`dvh`, `svh`, and `lvh`** units track **dynamic, small, and large** heights respectively. Pairing viewport units with **`clamp()`** bounds keeps full-bleed heroes usable at every height.',
        detail: 'Dynamic viewport units end the jumping-hero bug where content hid behind appearing toolbars.'
      },
      {
        term: 'Color formats and alpha',
        kind: 'notation',
        statement: 'Hex like `#0ea5e9` packs **red, green, and blue** into digits, while **`rgb()`** and **`hsl()`** expose **channels and hue plus saturation plus lightness** for readable tweaks. Modern **`lab()` and `oklch()`** describe **perceptual lightness and chroma** so steps look even to human eyes. Each format takes an **alpha channel** for transparency, written as a fourth hex pair or a slash value like `rgb(0 0 0 / 0.5)`.',
        detail: 'HSL suits theme shifts by hue while OKLCH suits accessible shade scales by lightness.'
      },
      {
        term: 'Fluid values with clamp and variables',
        kind: 'method',
        statement: 'The **`clamp(min, preferred, max)`** function bounds a **fluid preferred value** such as `4vw` between readable extremes. Storing tokens in **custom properties** like `--space` lets one change retune **spacing and type** consistently. The **`calc()`** function mixes units, for example subtracting a fixed header from viewport height, without precomputing breakpoints.',
        detail: 'Fluid type with clamps adapts continuously where three fixed breakpoints would jump.'
      }
    ],
    examples: [
      {
        title: 'Scale type without surprises',
        problem: 'Build a type scale that respects user font settings and stays readable on phones.',
        steps: [
          { label: 'Step 1: Root in relative units', text: '```css\nhtml { font-size: 100%; }\nh1 { font-size: clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem); }\np { font-size: 1rem; line-height: 1.6; }\n```\nRoot percentage honors browser settings while `rem` headings scale from that base with fluid bounds.' },
          { label: 'Step 2: Local em tuning', text: 'Give buttons `padding: 0.5em 1em` so padding tracks button text size locally without affecting global layout.' },
          { label: 'Step 3: Test zoom', text: 'Raise browser font size and zoom to confirm text and spacing grow together instead of clipping.' }
        ],
        result: 'Type honors user preferences, grows fluidly with viewports, and never strands fixed-pixel text.'
      },
      {
        title: 'Theme with modern color',
        problem: 'Define a brand blue with hover and overlay variants that stay legible.',
        steps: [
          { label: 'Step 1: Tokenize the hue', text: '```css\n:root {\n  --brand: oklch(0.65 0.15 240);\n  --brand-dark: oklch(0.55 0.15 240);\n  --scrim: rgb(0 0 0 / 0.5);\n}\n.btn { background: var(--brand); }\n.btn:hover { background: var(--brand-dark); }\n```\nPerceptual lightness steps keep hover darkening even while alpha scrims dim photos beneath.' },
          { label: 'Step 2: Check contrast', text: 'Verify white text on both brand tokens meets contrast targets before shipping the palette.' },
          { label: 'Step 3: Keep fallbacks', text: 'Supply a hex or rgb fallback above the modern line for engines without OKLCH support.' }
        ],
        result: 'One hue token yields consistent interactive and overlay colors with graceful degradation.'
      }
    ],
    keyTakeaways: [
      'Absolute, percentage, font-relative, and viewport units adapt to different contexts.',
      'Rem scales from the root predictably while nested em compounds per level.',
      'Dynamic viewport units track mobile chrome without jumping layouts.',
      'Hex, rgb, hsl, and oklch describe the same colors with different tuning strengths.',
      'Clamp, calc, and custom properties build fluid bounded designs from tokens.'
    ],
    quiz: [
      {
        q: 'Why prefer rem over em for a type scale?',
        options: ['rem animates faster', 'rem anchors to the root so nested levels never compound', 'em is invalid', 'rem disables zoom'],
        answer: 1,
        explanation: 'Root-relative units compute identically everywhere, while em multiplies through each ancestor.'
      },
      {
        q: 'Which unit tracks the visible mobile height without jumps?',
        options: ['vh always', 'px', 'dvh for the dynamic viewport height', 'pt'],
        answer: 2,
        explanation: 'Dynamic units follow showing and hiding browser chrome where static vh holds the initial size.'
      },
      {
        q: 'What does the alpha value in rgb(0 0 0 / 0.5) do?',
        options: ['It sets the hue', 'It makes black half transparent', 'It increases saturation', 'It selects the font'],
        answer: 1,
        explanation: 'Alpha blends the color with whatever paints beneath, with one half opacity here.'
      },
      {
        q: 'What does clamp(1rem, 2.5vw, 1.75rem) guarantee?',
        options: ['A fixed 2.5vw size', 'A fluid size that never drops below 1rem or exceeds 1.75rem', 'A random size', 'A print-only size'],
        answer: 1,
        explanation: 'The preferred viewport value flexes between the stated minimum and maximum bounds.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch4-s5
  {
    sectionId: 'web-ch4-s5',
    readingTime: 8,
    intro: 'Backgrounds, borders, and effects give surfaces depth while DevTools keeps their stacking honest. This section layers backgrounds and gradients, rounds corners, adds shadows and outlines, and debugs with computed styles. You will finish surfaces that look deliberate and diagnose the ones that do not.',
    objectives: [
      'Layer background colors, images, gradients, and positions correctly',
      'Style borders, radii, and outlines including focus rings',
      'Apply box and text shadows with restraint and performance sense',
      'Debug CSS with Elements, computed styles, and the box overlay'
    ],
    concepts: [
      {
        term: 'Background layers',
        kind: 'definition',
        statement: 'Backgrounds stack **comma-separated layers** with the **first listed on top**, each combining `image`, `position`, `size`, `repeat`, and `attachment`. The **`background-size: cover`** value fills the box by **cropping**, while `contain` fits the whole image by **letterboxing**. A final **`background-color`** under all layers guarantees **contrast before images load**.',
        detail: 'Layer order plus a fallback color keeps text readable during slow image fetches.'
      },
      {
        term: 'Gradients as images',
        kind: 'notation',
        statement: 'Gradient functions like **`linear-gradient()`** and **`radial-gradient()`** generate **`background-image`** values with no file cost. Color stops such as `red 0, blue 100%` set **blend positions**, and hard stops with **matching positions** draw crisp **stripes and dividers**. Angles like `135deg` plus layered gradients build **patterns** that scale without assets.',
        detail: 'Gradients are resolution-independent paint, so they stay sharp where raster textures blur.'
      },
      {
        term: 'Borders, radius, and outlines',
        kind: 'definition',
        statement: 'The **`border`** shorthand sets **width, style, and color** per side, while **`border-radius`** rounds corners with **circular or elliptical** arcs. Borders occupy **box-model space** and shift layout, whereas **`outline`** draws outside the border for **focus rings** without moving neighbors. The `:focus-visible` selector shows outlines for **keyboard focus** while sparing mouse clicks the ring.',
        detail: 'Outlines signal focus without reflow, which is why they suit accessibility rings that borders would disturb.'
      },
      {
        term: 'Shadows for depth',
        kind: 'method',
        statement: '**`box-shadow`** layers **offsets, blur, spread, and color** to lift surfaces, with comma lists stacking **multiple shadows** for soft depth. **`text-shadow`** applies the same model to **glyphs** for legibility over images. Shadows repaint on animation, so **static shadows plus transformed movement** keep motion cheap while still looking deep.',
        detail: 'Two soft shadows beat one harsh one for realistic elevation at lower opacity.'
      },
      {
        term: 'Debugging CSS in DevTools',
        kind: 'method',
        statement: 'The **Elements Styles pane** shows **matched rules** with losers **struck through**, the **Computed tab** shows the **winning value plus origin**, and the **box overlay** visualizes **content, padding, border, and margin** on hover. Toggling declarations live isolates **which rule matters**, and the **badge icons** flag **invalid or inactive** properties with reasons. Copying the fix back to source closes the **experiment-to-patch** loop.',
        detail: 'Struck-through versus missing distinguishes lost cascades from selectors that never matched.'
      }
    ],
    examples: [
      {
        title: 'Layer a hero background',
        problem: 'Keep hero text legible over a photo with a gradient scrim and a fallback color.',
        steps: [
          { label: 'Step 1: Stack scrim over photo', text: '```css\n.hero {\n  background-color: #0f172a;\n  background-image: linear-gradient(rgb(0 0 0 / 0.55), rgb(0 0 0 / 0.25)), url("peaks.jpg");\n  background-size: cover;\n  background-position: center;\n}\n```\nThe first gradient layer darkens the photo beneath while the color shows before either loads.' },
          { label: 'Step 2: Round and ring the card', text: 'Add `border-radius` to the inner card and a `:focus-visible` outline so keyboard users see their position.' },
          { label: 'Step 3: Lift with shadow', text: 'One soft `box-shadow` separates the card from the hero without harsh edges.' }
        ],
        result: 'Text stays legible during and after loading on a surface with depth and focus support.'
      },
      {
        title: 'Diagnose a missing border',
        problem: 'A button radius and border never appear. Determine whether the selector missed or lost.',
        steps: [
          { label: 'Step 1: Inspect matching', text: 'Select the button in Elements and search Styles for the rule. Absence means the **selector missed**, often a typo like `.btn-primary` versus `.btn.primary`.' },
          { label: 'Step 2: Read computed', text: '```css\n/* losing rule shows struck through in Styles */\n.btn { border: 1px solid #cbd5e1; }\n/* winning rule in Computed */\n/* border-width: 0px from button reset */\n```\nStrike-through means the cascade beat it, so raise specificity fairly or reorder layers.' },
          { label: 'Step 3: Check the box overlay', text: 'Hover the node to see whether border space exists but blends in, or whether zero width confirms the reset won.' }
        ],
        result: 'The pane verdict directs the fix: correct the selector for misses or restructure the cascade for losses.'
      }
    ],
    keyTakeaways: [
      'Background layers stack top-first with size, position, and fallback colors.',
      'Gradients are image values that paint stripes and scrims without files.',
      'Borders take layout space while outlines draw focus rings without reflow.',
      'Layered soft shadows create depth that stays cheap when static.',
      'Styles, Computed, and box overlays pinpoint missed versus losing rules.'
    ],
    quiz: [
      {
        q: 'In background-image with two layers, which paints on top?',
        options: ['The last listed', 'The first listed', 'Neither, they blend randomly', 'The background-color'],
        answer: 1,
        explanation: 'Layers stack with the first listed uppermost, ending in the background color at the bottom.'
      },
      {
        q: 'Why use outline rather than border for focus rings?',
        options: ['Outlines cannot be seen', 'Outlines draw outside the border without shifting layout', 'Borders are invalid', 'Outlines disable focus'],
        answer: 1,
        explanation: 'Focus indication should never reflow neighbors, which outside-the-box outlines guarantee.'
      },
      {
        q: 'A rule is missing entirely from the Styles pane. What does that mean?',
        options: ['It lost the cascade', 'Its selector never matched the inspected element', 'It is always a browser bug', 'It was overridden by HTML'],
        answer: 1,
        explanation: 'Only matching rules appear, with losers struck through, so absence proves non-matching.'
      },
      {
        q: 'How do you draw a crisp stripe with a gradient?',
        options: ['Blur all stops widely', 'Give adjacent stops the same position for a hard edge', 'Use only one color', 'Avoid background-size'],
        answer: 1,
        explanation: 'Coincident stop positions stop blending and switch color instantly at that line.'
      }
    ]
  }
]
