import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 5: CSS Text, Color & Theming
// Sections 5.1 – 5.5. Master study content.
// ============================================================================

export const webCh05Content: SectionContent[] = [
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'web-ch5-s1',
    readingTime: 8,
    intro: 'Typography is the voice of a page: before a visitor reads a single word, the choice of typeface, size, weight and spacing tells them whether the site is playful or serious, cheap or premium. This section builds the full font and text toolkit — families and fallbacks, fluid sizes, weights, line and letter spacing, alignment, decoration and the readability rules that keep long passages comfortable.',
    objectives: [
      'Compose font-family stacks with generic fallbacks and system stacks',
      'Size type with rem units, fluid clamp() scales and a clear hierarchy',
      'Control weight, line-height and letter-spacing for legible text',
      'Align, decorate and transform text without harming readability'
    ],
    concepts: [
      {
        term: 'Font families and fallback stacks',
        kind: 'definition',
        statement: 'The **font-family** property takes an ordered list of typefaces, ending in a **generic family** such as `serif`, `sans-serif` or `monospace`, so the browser walks the list until it finds an installed face. A classic stack like `Georgia, "Times New Roman", serif` prefers Georgia, falls back to Times New Roman, and guarantees a serif rendering even on bare systems. Quote multi-word names such as `"Segoe UI"` and always keep the generic keyword last, because a stack with no generic can end in an unpredictable default.',
        detail: 'System stacks like `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` skip downloads entirely by using the operating system’s own interface face, which is fast and feels native on every device.'
      },
      {
        term: 'Sizing type with rem and fluid clamp()',
        kind: 'method',
        statement: 'The **root-relative `rem`** unit sizes text against the `html` font size, so `1rem` equals the root size and `1.25rem` scales with a single user or author change to that root. Body copy around `1rem` with headings stepped up a modular scale keeps hierarchy consistent, while **fluid type** with `clamp()` such as `font-size: clamp(1.75rem, 1.2rem + 2vw, 2.75rem)` lets a heading grow with the viewport between sane minimum and maximum bounds. Prefer `rem` over `px` for text so browser font-size preferences and zoom keep working.',
        detail: 'Set `html { font-size: 100%; }` to respect the user default, then build every text size in `rem` or `clamp()` expressions so one root change rescales the whole page proportionally.'
      },
      {
        term: 'Weight, style and the variable range',
        kind: 'definition',
        statement: 'The **font-weight** property selects the thickness of glyphs, either with keywords `normal` and `bold` or with the numeric scale `100` through `900` where `400` is regular and `700` is bold. Numeric weights only render when the loaded face actually ships them, otherwise the browser synthesizes or rounds to the nearest available cut, which is why a `font-weight: 600` headline can look identical to `700` with a two-weight web font. The companion **font-style** property toggles `italic` and `oblique`, and variable fonts expose the whole weight continuum through one file instead of discrete cuts.',
        detail: 'Load only the weights you use and match every `font-weight` you declare to a shipped cut, because each extra cut is render-blocking download weight for zero visual gain.'
      },
      {
        term: 'Line height and letter spacing',
        kind: 'method',
        statement: 'The **line-height** property sets the leading between baselines, and a unitless value such as `line-height: 1.5` is the professional default because it scales with the element’s own font size and inherits as a pure ratio. Body copy reads best between `1.4` and `1.7`, headings can tighten toward `1.1`, and **letter-spacing** with small `em` values such as `letter-spacing: 0.02em` opens up caps or small text while negative values draw display type together. Use `em` for spacing so the tracking stays proportional when the font size changes, and reach for `word-spacing` or `text-wrap: balance` for headline polish.',
        detail: 'Unitless `line-height` inherits as a multiplier while `em` or percentage values inherit as a computed length, so a unitless ratio is almost always the safer, more predictable choice.'
      },
      {
        term: 'Alignment, decoration and readable measure',
        kind: 'insight',
        statement: 'The **text-align** property positions lines within their block with `left`, `right`, `center` and `justify`, while **text-decoration** underlines, overlines or strikes text and **text-transform** recases it to `uppercase` or `capitalize` without touching the source. Long-form readability then depends on **measure and contrast**: lines of roughly forty five to seventy five characters, left-aligned body copy, generous line height, and color pairs that pass WCAG contrast keep readers comfortable. Centered paragraphs and justified narrow columns look decorative but tire the eye, so reserve centering for headings and short hero lines.',
        detail: 'Constrain article bodies with `max-width: 65ch` and `line-height: 1.6` to land measure and leading in the comfortable zone on every screen with two declarations.'
      }
    ],
    examples: [
      {
        title: 'Build a fluid type scale for an article page',
        problem: 'A blog needs body copy at a readable size plus three heading levels that grow on wide screens but never shrink below legible minimums or explode on ultrawide monitors.',
        steps: [
          { label: 'Step 1: Root and body baseline', text: '```css\nhtml { font-size: 100%; }\nbody {\n  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n```\nThe root respects the user default, `body` sets the `1rem` baseline with a unitless `1.6` ratio, and the system stack renders instantly with no download.' },
          { label: 'Step 2: Fluid headings with clamp()', text: '```css\nh1 { font-size: clamp(2rem, 1.4rem + 3vw, 3.25rem); line-height: 1.1; }\nh2 { font-size: clamp(1.5rem, 1.2rem + 1.5vw, 2rem); line-height: 1.2; }\nh3 { font-size: 1.25rem; line-height: 1.3; }\n```\nEach `clamp()` pins a minimum, a viewport-driven preferred size, and a maximum, so headings breathe on desktop yet stay legible on a small phone.' },
          { label: 'Step 3: Measure and detail type', text: '```css\narticle { max-width: 65ch; }\n.kicker {\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n```\nThe article column caps line length near the top of the comfort range while the kicker uses transform plus tracking for a label treatment.' }
        ],
        result: 'One root size, a fluid heading scale, and a capped measure give a complete readable hierarchy that adapts from phone to ultrawide with no breakpoints.'
      },
      {
        title: 'Style quotes, links-in-text and captions cleanly',
        problem: 'Within the same article, blockquotes should stand apart, inline links must stay legible, and image captions need a distinct small treatment without adding new font files.',
        steps: [
          { label: 'Step 1: Blockquote with weight and style', text: '```css\nblockquote {\n  font-size: 1.25rem;\n  font-style: italic;\n  line-height: 1.5;\n  border-left: 4px solid #6366f1;\n  padding-left: 1rem;\n}\n```\nSize plus `italic` plus the border signals quotation using only system faces, and the slightly tighter `1.5` suits shorter quoted passages.' },
          { label: 'Step 2: Underlined links with offset', text: '```css\narticle a {\n  color: #1d4ed8;\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 3px;\n}\n```\nExplicit thickness and offset keep underlines clear of descenders, preserving legibility that the browser default often crowds.' },
          { label: 'Step 3: Small caption treatment', text: '```css\nfigcaption {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #475569;\n  text-align: left;\n}\n```\nThe caption steps down to `0.875rem` with a muted tone, left-aligned so multi-line captions keep a straight reading edge.' }
        ],
        result: 'Quotes, links and captions each read distinctly through size, style and decoration alone — no extra typefaces, no layout changes, full readability preserved.'
      }
    ],
    keyTakeaways: [
      'End every font-family stack with a generic family so text always has a designed fallback.',
      'Size body copy in rem and headings in clamp() so user preferences and viewports both work.',
      'Declare only font weights you actually load, and prefer unitless line-height ratios.',
      'Track small caps and labels with em letter-spacing; keep body copy left-aligned.',
      'Cap article measure near 65ch with generous leading for comfortable long-form reading.'
    ],
    quiz: [
      {
        q: 'Why must a font-family stack end with a generic family like sans-serif?',
        options: [
          'The CSS parser rejects stacks without one',
          'It guarantees a designed category fallback when no named face is installed',
          'It loads a web font automatically',
          'It disables faux bold rendering'
        ],
        answer: 1,
        explanation: 'The browser walks the list in order; the generic keyword ensures the last resort is a serif, sans-serif or monospace face rather than an unpredictable browser default.'
      },
      {
        q: 'What is the advantage of clamp(1.75rem, 1.2rem + 2vw, 2.75rem) over a fixed rem size for a heading?',
        options: [
          'It downloads the font faster',
          'It scales fluidly with the viewport while enforcing a minimum and maximum',
          'It changes the typeface at breakpoints',
          'It fixes cumulative layout shift by itself'
        ],
        answer: 1,
        explanation: 'The middle preferred value grows with viewport width while the first and last arguments clamp the result, giving fluid scaling between legible bounds.'
      },
      {
        q: 'Why is unitless line-height: 1.5 preferred over line-height: 1.5em for body text?',
        options: [
          'It renders larger in all browsers',
          'It inherits as a pure ratio that rescales with each element’s font size',
          'It enables variable fonts',
          'It prevents margin collapse'
        ],
        answer: 1,
        explanation: 'Unitless values inherit as multipliers, so children with different font sizes keep proportional leading; em values inherit as a fixed computed length that can crowd larger child text.'
      },
      {
        q: 'Which combination best supports long-form readability?',
        options: [
          'Justified narrow columns with tight leading',
          'Centered paragraphs at full viewport width',
          'Left-aligned copy, measure near 65ch, line-height around 1.6, strong contrast',
          'Uppercase body copy with negative letter-spacing'
        ],
        answer: 2,
        explanation: 'Left alignment gives a steady reading edge, the ch-capped measure keeps lines in the comfort range, generous leading separates lines, and contrast keeps glyphs legible.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.2
  {
    sectionId: 'web-ch5-s2',
    readingTime: 7,
    intro: 'Lists and links are the working furniture of the web: navigation menus, article bullets, breadcrumbs and calls to action are all lists of links wearing different outfits. This section covers list markers and counters, the link-state order that keeps interactive feedback predictable, modern underline control, and the navigation patterns that turn a plain unordered list into a robust menu.',
    objectives: [
      'Style list markers, positions and custom counters with ::marker',
      'Apply the LVHA link-state order for predictable feedback',
      'Control underlines with offset, thickness and skip behavior',
      'Build accessible horizontal navigation from a plain list'
    ],
    concepts: [
      {
        term: 'List style type and position',
        kind: 'definition',
        statement: 'The **list-style-type** property chooses the marker glyph — `disc`, `circle`, `square`, decimal `1`, `lower-roman`, `upper-alpha` and friends — while **list-style-position** decides whether the marker hangs `outside` the content box or sits `inside` it. The `outside` default keeps multi-line items aligned on a straight text edge with markers in the margin, whereas `inside` pulls markers into the flow so wrapped lines start beneath the bullet. The **list-style** shorthand bundles type, position and an optional `list-style-image` in one declaration.',
        detail: 'Reset default indentation deliberately with `margin: 0; padding-left: 1.5rem;` so custom markers align identically across browsers instead of inheriting each engine’s own list chrome.'
      },
      {
        term: 'Markers and custom counters',
        kind: 'method',
        statement: 'The **::marker** pseudo-element styles the bullet or number itself — `color`, `font-size` and `content` — without touching the item text, so `li::marker { color: #6366f1; font-weight: 700; }` recolors every bullet in one rule. For bespoke numbering, **CSS counters** with `counter-reset`, `counter-increment` and `content: counter(step)` in `::before` build chapter numbers, step badges or nested outlines that native `ol` types cannot express. Counters live on any element and nest with `counters(step, ".")` for dotted section numbers.',
        detail: 'Prefer `::marker` for simple recoloring since it keeps native list semantics and alignment, and reach for counters only when the design needs text, shapes or numbering the marker cannot draw.'
      },
      {
        term: 'The LVHA link-state order',
        kind: 'law',
        statement: 'Links carry four classic states — **`:link`**, **`:visited`**, **`:hover`** and **`:active`** — and they must be written in that **LVHA order** so each later rule can override the earlier ones at equal specificity. The mnemonic **LoVe HAte** encodes the sequence: unvisited, visited, hover, active, with `:focus` typically grouped alongside hover for keyboard parity. Disordering them lets `:link` override `:hover`, which silently kills hover feedback and is one of the oldest CSS gotchas on record.',
        detail: 'Modern practice adds `:focus-visible` to the hover group so mouse users see no ring while keyboard users keep a strong indicator, satisfying both aesthetics and accessibility.'
      },
      {
        term: 'Modern underline control',
        kind: 'method',
        statement: 'The **text-decoration** family gives fine control: `text-decoration-line`, `text-decoration-color`, `text-decoration-style` with `wavy` or `dotted`, plus **text-decoration-thickness** and **text-underline-offset** for weight and clearance. A rule like `text-underline-offset: 4px` lifts the stroke off descenders for legibility, and `text-decoration-skip-ink: auto` lets the line gap around glyphs. These beat the old `border-bottom` underline hack because they wrap across line breaks and follow text direction automatically.',
        detail: 'Animate `text-decoration-color` or background-size underlines rather than thickness for hover effects, since color and background transitions stay on the cheap compositing path.'
      },
      {
        term: 'Navigation built from lists',
        kind: 'insight',
        statement: 'Professional navigation starts as a semantic **unordered list of anchors** inside a `nav` landmark, then CSS removes bullets, lays items out with **flexbox**, and styles the **current page** with `aria-current="page"` rather than a presentational class. Spacing comes from `gap`, padding on the anchors enlarges the tap target to at least forty four pixels, and `:hover`, `:focus-visible` and the current-page style give three distinguishable states. This structure degrades to a clean vertical list with no CSS and announces itself correctly to screen readers.',
        detail: 'Mark the active link with `aria-current="page"` so assistive technology announces it, then hook the visual treatment to the selector `[aria-current="page"]` to keep state and style in one source of truth.'
      }
    ],
    examples: [
      {
        title: 'Build a custom step list with CSS counters',
        problem: 'A tutorial needs steps numbered “Step one”, “Step two” and so on inside colored badges, with nested sub-steps numbered in dotted form — beyond what plain ordered lists can draw.',
        steps: [
          { label: 'Step 1: Reset and seed the counter', text: '```css\n.steps { counter-reset: step; list-style: none; padding: 0; }\n.steps > li { counter-increment: step; }\n```\nNative bullets are removed and each top-level item advances the `step` counter, giving full control over the rendered number.' },
          { label: 'Step 2: Draw the badge in ::before', text: '```css\n.steps > li::before {\n  content: counter(step);\n  display: inline-grid;\n  place-items: center;\n  width: 2rem; height: 2rem;\n  border-radius: 999px;\n  background: #4f46e5; color: #fff;\n  font-weight: 700;\n}\n```\nThe generated `content` renders the counter value inside a pill badge, decoupled from the item text so alignment stays exact.' },
          { label: 'Step 3: Dotted nested numbering', text: '```css\n.steps li ol { counter-reset: sub; list-style: none; }\n.steps li ol li { counter-increment: sub; }\n.steps li ol li::before {\n  content: counter(step) "." counter(sub);\n  color: #4f46e5;\n  font-weight: 700;\n}\n```\nCombining both counters with a dot separator yields hierarchical labels while each level keeps its own independent sequence.' }
        ],
        result: 'Counters produce badge numerals and dotted sub-numbers that native list types cannot draw, while the underlying ol structure keeps the semantics intact.'
      },
      {
        title: 'Turn a list into an accessible nav bar',
        problem: 'Convert a plain ul of five links into a horizontal navigation bar with LVHA feedback, a visible current page, and keyboard-friendly focus rings.',
        steps: [
          { label: 'Step 1: Semantic markup', text: '```html\n<nav aria-label="Primary">\n  <ul class="nav">\n    <li><a href="/" aria-current="page">Home</a></li>\n    <li><a href="/guides">Guides</a></li>\n    <li><a href="/pricing">Pricing</a></li>\n  </ul>\n</nav>\n```\nThe `nav` landmark plus list conveys structure to assistive technology, and `aria-current` marks the active page programmatically.' },
          { label: 'Step 2: Horizontal layout in LVHA order', text: '```css\n.nav { display: flex; gap: 0.25rem; list-style: none; margin: 0; padding: 0; }\n.nav a { display: block; padding: 0.75rem 1rem; border-radius: 0.5rem; }\n.nav a:link { color: #1e293b; }\n.nav a:visited { color: #1e293b; }\n.nav a:hover { background: #eef2ff; }\n.nav a:active { background: #e0e7ff; }\n```\nStates follow **LVHA** so hover and active reliably override the base, and generous anchor padding creates large tap targets.' },
          { label: 'Step 3: Current page and focus', text: '```css\n.nav a[aria-current="page"] {\n  background: #4f46e5; color: #fff; font-weight: 700;\n}\n.nav a:focus-visible {\n  outline: 3px solid #4f46e5;\n  outline-offset: 2px;\n}\n```\nThe attribute selector styles the current page distinctly while `:focus-visible` reserves the strong ring for keyboard users.' }
        ],
        result: 'A semantic list becomes a robust menu: horizontal by flexbox, ordered LVHA feedback, an announced current page, and focus rings that appear exactly when keyboard users need them.'
      }
    ],
    keyTakeaways: [
      'Use ::marker for simple bullet styling and CSS counters for bespoke numbering.',
      'Write link states in LVHA order — :link, :visited, :hover, :active — or hover feedback breaks.',
      'Control underlines with thickness, offset and skip-ink instead of border hacks.',
      'Build navigation as a ul of anchors in a nav landmark with aria-current on the active link.',
      'Pair :hover with :focus-visible so mouse and keyboard users each get correct feedback.'
    ],
    quiz: [
      {
        q: 'What breaks if you write a:hover before a:link and a:visited at equal specificity?',
        options: [
          'Nothing — order is irrelevant',
          'The :link and :visited rules override :hover, killing hover feedback',
          'Visited links stop being clickable',
          'The cascade throws an error'
        ],
        answer: 1,
        explanation: 'Equal-specificity rules resolve by source order, so LVHA puts hover after link and visited precisely so hover wins while pointing.'
      },
      {
        q: 'Which approach recolors every bullet without disturbing item alignment?',
        options: [
          'li { color: rebeccapurple; }',
          'li::marker { color: rebeccapurple; }',
          'ul { list-style-position: inside; }',
          'li::before { content: "•"; }'
        ],
        answer: 1,
        explanation: 'The ::marker pseudo-element targets the marker glyph alone, leaving item text color and the hanging outside alignment untouched.'
      },
      {
        q: 'Why prefer text-underline-offset over a border-bottom underline?',
        options: [
          'Borders cannot be colored',
          'Text decorations wrap across line breaks and follow text direction automatically',
          'Borders are removed by resets',
          'Offsets render faster than borders'
        ],
        answer: 1,
        explanation: 'Decoration underlines are part of text layout so they fragment across wrapped lines and rtl text correctly, while a bottom border is a single box edge.'
      },
      {
        q: 'How should the current page be marked in a list-based nav?',
        options: [
          'With a bold class and nothing else',
          'With aria-current="page" on the anchor, styled via an attribute selector',
          'By removing the anchor and using plain text',
          'With a title attribute on the nav'
        ],
        answer: 1,
        explanation: 'The aria-current attribute announces the active page to screen readers, and hooking styles to the same attribute keeps the announced and visual states synchronized.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.3
  {
    sectionId: 'web-ch5-s3',
    readingTime: 9,
    intro: 'Custom properties — the feature universally called CSS variables — turn scattered magic values into a named design-token system that cascades, inherits and can be rewritten at runtime. This section covers declaring tokens, how scoping and the cascade shape them, fallback values that keep components resilient, theme switching with dark mode, and live updates from JavaScript.',
    objectives: [
      'Declare --tokens on :root and consume them with var()',
      'Predict variable values through scoping, inheritance and cascade',
      'Write fallbacks including nested var() chains for resilient components',
      'Switch themes with data attributes and update tokens from JavaScript'
    ],
    concepts: [
      {
        term: 'Declaring and consuming tokens',
        kind: 'definition',
        statement: 'A **custom property** is any property whose name begins with a double dash, such as `--brand: #4f46e5;`, and it is consumed with the **`var()`** function as in `color: var(--brand)`. Tokens are conventionally declared on **`:root`** so every element inherits them, with names grouped by role — `--color-brand`, `--space-md`, `--radius-lg` — forming a design-token dictionary. Unlike preprocessor variables, custom properties are live cascade participants that DevTools can inspect and override per element.',
        detail: 'Name tokens by purpose rather than value, so `--color-danger` survives a rebrand while `--red` becomes a lie the moment the palette changes.'
      },
      {
        term: 'Scoping, inheritance and cascade',
        kind: 'law',
        statement: 'Custom properties **inherit** like ordinary properties and obey the **cascade**, so a `--brand` set on `:root` flows everywhere until a nearer rule overrides it for its subtree. Redefining the token inside `.card { --brand: #0ea5e9; }` recolors only that card and its descendants, which makes scoped theming a one-line override instead of a selector rewrite. Specificity, order and origin resolve competing definitions exactly as they do for `color` or `margin`, because variables are properties first and values second.',
        detail: 'Scope overrides to the smallest subtree that needs them so a component theme never leaks sideways into unrelated siblings.'
      },
      {
        term: 'Fallbacks and nested var() chains',
        kind: 'method',
        statement: 'The **fallback** second argument of `var()` supplies a safety net: `color: var(--brand, #4f46e5)` renders the hex value whenever `--brand` is undefined or invalid. Fallbacks **nest**, so `color: var(--button-bg, var(--brand, #4f46e5))` walks a preference chain from component token to global brand to hard default. This pattern lets shared components ship working defaults while pages opt into narrower tokens only where they define them.',
        detail: 'Treat every consumed token in a reusable component as optional-with-fallback so the component renders sensibly even in pages that define none of its variables.'
      },
      {
        term: 'Theming with data attributes and media queries',
        kind: 'method',
        statement: 'Theme switching means **redefining the same tokens** under a different selector, typically `[data-theme="dark"] { --bg: #0f172a; --ink: #e2e8f0; }` toggled by one attribute on `html`, with components referencing only the tokens. The **`prefers-color-scheme`** media query seeds the initial theme from the operating system, while the explicit attribute lets the user override it and persist the choice. Because only token definitions change, every component repaints consistently with no per-component dark rules.',
        detail: 'Combine both signals by defaulting the attribute from the media query in a tiny startup script, then honoring stored user choice over the system preference thereafter.'
      },
      {
        term: 'Runtime updates from JavaScript',
        kind: 'insight',
        statement: 'JavaScript reads and writes tokens through **`setProperty`** and **`getComputedStyle`**, as in `root.style.setProperty("--brand", "#7c3aed")`, which repaints every consumer instantly without touching individual elements. This powers live theme pickers, density toggles and animation parameters driven by scroll or pointer position. The complementary **`@property`** rule registers a token with a syntax, initial value and inheritance flag, unlocking type-checked transitions and animations of variables that plain unregistered tokens cannot interpolate.',
        detail: 'Set tokens on the narrowest ancestor that needs the change and prefer `@property` registration when animating a variable, since registered types interpolate smoothly instead of flipping discretely.'
      }
    ],
    examples: [
      {
        title: 'Build a token system with dark-mode theming',
        problem: 'A site needs light and dark themes driven by one attribute, with components that keep working even where a token is missing.',
        steps: [
          { label: 'Step 1: Declare light tokens on :root', text: '```css\n:root {\n  --bg: #ffffff;\n  --ink: #0f172a;\n  --brand: #4f46e5;\n  --space-md: 1rem;\n  --radius-lg: 0.75rem;\n}\nbody { background: var(--bg); color: var(--ink); }\n```\nGlobal tokens define the light theme and the page consumes them, so every surface derives from the dictionary.' },
          { label: 'Step 2: Redefine tokens for dark mode', text: '```css\n[data-theme="dark"] {\n  --bg: #0f172a;\n  --ink: #e2e8f0;\n  --brand: #818cf8;\n}\n```\nOne attribute selector overrides the same names, and inheritance repaints the whole tree with zero component-level dark rules.' },
          { label: 'Step 3: Consume with fallback chains', text: '```css\n.button {\n  background: var(--button-bg, var(--brand, #4f46e5));\n  color: var(--button-ink, #ffffff);\n  padding: var(--space-md);\n  border-radius: var(--radius-lg);\n}\n```\nNested fallbacks walk from component token to brand to hard default, so the button renders correctly in any theme context.' }
        ],
        result: 'Toggling data-theme on html flips the entire design, and fallback chains keep components resilient wherever tokens are absent.'
      },
      {
        title: 'Drive tokens live from JavaScript',
        problem: 'Add a settings panel where a color input recolors the brand everywhere and a density toggle compacts spacing — with choices persisted across visits.',
        steps: [
          { label: 'Step 1: Markup with controls', text: '```html\n<label>Brand <input type="color" id="brandPicker" value="#4f46e5"></label>\n<button id="themeToggle">Toggle dark mode</button>\n```\nTwo controls cover the requirements: a native color input for the brand and a button flipping the theme attribute.' },
          { label: 'Step 2: Update tokens and persist', text: '```js\nconst root = document.documentElement;\nconst picker = document.querySelector("#brandPicker");\nconst toggle = document.querySelector("#themeToggle");\nconst saved = localStorage.getItem("theme");\nif (saved) { root.setAttribute("data-theme", saved); }\n Picker writes one live token:\n picker.addEventListener("input", (event) => {\n  root.style.setProperty("--brand", event.target.value);\n});\n Toggle flips one attribute and persists it:\n toggle.addEventListener("click", () => {\n  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";\n  root.setAttribute("data-theme", next);\n  localStorage.setItem("theme", next);\n});\n```\nOne `setProperty` call repaints every `var(--brand)` consumer, while the attribute toggle reuses the pure-CSS dark definitions.' },
          { label: 'Step 3: Seed from the operating system', text: '```js\nconst prefersDark = window.matchMedia("(prefers-color-scheme: dark)");\nif (!localStorage.getItem("theme") && prefersDark.matches) {\n  root.setAttribute("data-theme", "dark");\n}\n```\nWhen no stored choice exists, the media query seeds dark mode from the OS so first paint already matches user expectation.' }
        ],
        result: 'Brand and theme become runtime state: instant repaints from token writes, OS-aware defaults, and user choices that survive reloads.'
      }
    ],
    keyTakeaways: [
      'Declare --tokens on :root and consume them with var() for a single source of truth.',
      'Variables inherit and cascade, so scoped redefinitions theme subtrees with one rule.',
      'Give components nested var() fallbacks so they render without every token defined.',
      'Theme by redefining tokens under [data-theme] seeded from prefers-color-scheme.',
      'Update tokens from JS with setProperty and register animatable tokens with @property.'
    ],
    quiz: [
      {
        q: 'What does color: var(--brand, #4f46e5) do when --brand is undefined?',
        options: [
          'The declaration is dropped as invalid',
          'It renders #4f46e5 as the fallback',
          'It inherits --brand from the parent anyway',
          'It throws a console error'
        ],
        answer: 1,
        explanation: 'The second var() argument is a fallback used whenever the named custom property is missing or invalid at the point of use.'
      },
      {
        q: 'Why does redefining --brand inside .card recolor only that card?',
        options: [
          'Custom properties are scoped to the stylesheet that defines them',
          'They inherit and cascade, so the nearer definition wins for that subtree',
          'The card creates a new stacking context',
          'Variables cannot cross element boundaries'
        ],
        answer: 1,
        explanation: 'Variables are ordinary cascading properties: the .card definition overrides :root for descendants of the card while the rest of the page keeps the root value.'
      },
      {
        q: 'What is the cleanest dark-mode architecture with custom properties?',
        options: [
          'Duplicate every component rule inside a dark media query',
          'Redefine the same tokens under [data-theme="dark"] so all consumers repaint',
          'Swap stylesheets with JavaScript per component',
          'Use !important overrides for dark colors'
        ],
        answer: 1,
        explanation: 'Since components reference tokens rather than literal colors, redefining the token set once repaints everything consistently with no per-component dark rules.'
      },
      {
        q: 'What does root.style.setProperty("--brand", value) accomplish?',
        options: [
          'It edits the CSS file on disk',
          'It updates the live token so every var(--brand) consumer repaints instantly',
          'It only affects the next created element',
          'It registers the property for animation'
        ],
        answer: 1,
        explanation: 'Inline custom property values on the root cascade to all inheriting consumers, so one write repaints the whole design; registration for animation is the separate @property job.'
      },
      // Placement-pattern: custom property cascade and fallback (original)
      {
        q: "A theme system defines `:root { --brand: teal; }` while a dark panel overrides `--brand: amber` on its own class. A button inside the panel uses `color: var(--brand, teal);`. Which color shows, and what is the fallback for?",
        options: ["Teal: the `:root` value always wins everywhere", "Teal: the declared fallback overrides the cascade", "Amber: the closer custom-property value wins through the cascade, and the fallback applies only when `--brand` is undefined", "Nothing renders: variables cannot change per subtree"],
        answer: 2,
        explanation: "Step 1: The data given is a global token, a subtree override, and a use site with a fallback. Step 2: The governing rules are that custom properties cascade and inherit like ordinary properties so the closest definition wins, and that the `var()` fallback applies only when the variable is undefined or guaranteed-invalid. Step 3: Tracing the button, `--brand` resolves through the panel override to amber since that definition is nearer than `:root`, the fallback is ignored because the variable is defined, and the text renders amber. Step 4: The distractors fail because `:root` loses to nearer definitions, fallbacks never override live values, and per-subtree tokens are the entire point of the feature. Step 5: Therefore the panel override wins and the fallback stays dormant."
      }
    ]
  },
  // ---------------------------------------------------------------- 5.4
  {
    sectionId: 'web-ch5-s4',
    readingTime: 8,
    intro: 'System fonts are instant but generic; web fonts give a site its typographic identity at the cost of downloads that can block rendering and shift layout. This section makes web fonts production-safe: declaring faces with @font-face, choosing display strategies, preloading critical cuts, adopting variable fonts, and neutralizing the layout shift that font swaps cause.',
    objectives: [
      'Declare web fonts with @font-face, src formats and descriptors',
      'Choose font-display strategies for the right blocking tradeoff',
      'Preload critical cuts and connect early to font origins',
      'Contain layout shift with fallbacks, metrics overrides and variable fonts'
    ],
    concepts: [
      {
        term: 'Declaring faces with @font-face',
        kind: 'definition',
        statement: 'The **`@font-face`** rule registers a family name with one or more **`src`** files plus descriptors — **`font-weight`**, **`font-style`**, **`font-stretch`** and **`unicode-range`** — that tell the browser exactly which characters and cuts each file covers. A modern declaration lists **`woff2`** first with a `format("woff2")` hint and keeps older formats only where legacy support demands them. Splitting by weight and by `unicode-range` subsets lets pages download just the Latin cut they need instead of the entire world’s glyphs.',
        detail: 'Serve fonts from your own origin when possible so caching, subsetting and cache lifetimes stay under your control rather than a third party’s.'
      },
      {
        term: 'Font display strategies',
        kind: 'method',
        statement: 'The **`font-display`** descriptor controls the render-blocking tradeoff during download: **`swap`** paints fallback text immediately then swaps when the face arrives, **`fallback`** allows only a brief swap window, and **`optional`** uses the web font solely when already cached. Body copy almost always wants **`swap`** so content is never invisible, while decorative display faces can accept `fallback` or `optional` to avoid a jarring late swap. The dreaded invisible-text flash comes from the default blocking behavior that `swap` explicitly disables.',
        detail: 'Pair `swap` with a well-matched fallback stack so the interim render already resembles the final design and the swap feels like a refinement rather than a jump.'
      },
      {
        term: 'Preloading and early connection',
        kind: 'method',
        statement: 'The **`preload`** resource hint with `as="font"`, `type="font/woff2"` and `crossorigin` tells the browser to fetch the critical roman cut before CSS parsing discovers it, shaving a full round trip off first paint. A companion **`preconnect`** to the font origin warms up DNS, TLS and congestion state so the fetch starts without handshake delay. Preload at most one or two cuts — the above-the-fold roman and perhaps its bold — because every preloaded file competes with hero images and scripts for early bandwidth.',
        detail: 'Always include the `crossorigin` attribute on font preloads since fonts fetch anonymously by default, and a mismatched CORS mode double-downloads the file.'
      },
      {
        term: 'Variable fonts',
        kind: 'insight',
        statement: 'A **variable font** packs an entire design space — weight, width, slant, optical size — into one file addressed by axes such as **`wght`** and **`wdth`**, requested with `font-weight: 100 900` ranges in `@font-face` and tuned per element or animated smoothly. One variable file replaces a dozen static cuts, collapsing both transfer size and request count while enabling fluid weight animation impossible with discrete files. Fine control comes from **`font-variation-settings`**, though standard properties like `font-weight` should carry everyday styling so the cascade keeps working.',
        detail: 'Prefer the standard `font-weight` and `font-stretch` properties over raw `font-variation-settings` for ordinary styling, reserving the low-level setting for axes with no CSS property mapping.'
      },
      {
        term: 'Containing layout shift from swaps',
        kind: 'law',
        statement: 'Swapping faces shifts layout whenever the fallback and web font disagree on **metrics**, so production setups harmonize them with **`size-adjust`**, **`ascent-override`** and **`descent-override`** in a fallback `@font-face` that reshapes the system face to the web font’s box. Google Fonts’ `display=swap` URLs plus a metric-matched fallback stack keep **Cumulative Layout Shift** near zero even on slow connections. Always declare explicit `width` and `height` or aspect boxes around font-dependent hero areas so the swap refines glyphs without moving surrounding content.',
        detail: 'Generate the override percentages from the two faces’ published metrics and verify with Lighthouse CLS audits on throttled connections, since eyeballing on fast office wifi hides the shift real users feel.'
      }
    ],
    examples: [
      {
        title: 'Ship Inter with swap and a metric-matched fallback',
        problem: 'A marketing page wants the Inter typeface for headings and body with no invisible text, fast first paint, and negligible layout shift on swap.',
        steps: [
          { label: 'Step 1: Declare the faces', text: '```css\n@font-face {\n  font-family: "Inter";\n  src: url("/fonts/inter-latin-400.woff2") format("woff2");\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n  unicode-range: U+0000-00FF;\n}\n@font-face {\n  font-family: "Inter";\n  src: url("/fonts/inter-latin-700.woff2") format("woff2");\n  font-weight: 700;\n  font-style: normal;\n  font-display: swap;\n  unicode-range: U+0000-00FF;\n}\n```\nTwo Latin-subset cuts cover regular and bold with `swap` behavior, so text paints instantly and only needed glyphs download.' },
          { label: 'Step 2: Preload the critical cut', text: '```html\n<link rel="preconnect" href="https://fonts.example.com" crossorigin>\n<link rel="preload" as="font" type="font/woff2" href="/fonts/inter-latin-400.woff2" crossorigin>\n```\nPreconnect warms the origin and preload fetches the roman cut early, since body copy renders before any bold headline matters.' },
          { label: 'Step 3: Metric-matched fallback stack', text: '```css\nbody {\n  font-family: "Inter", "Inter Fallback", system-ui, sans-serif;\n}\n@font-face {\n  font-family: "Inter Fallback";\n  src: local("Arial");\n  size-adjust: 107%;\n  ascent-override: 90%;\n  descent-override: 22%;\n}\n```\nThe synthetic fallback reshapes Arial’s box to Inter’s metrics, so the swap refines letterforms without reflowing lines.' }
        ],
        result: 'Text paints immediately in a metrically compatible fallback, Inter swaps in with near-zero shift, and only two subset files ever download.'
      },
      {
        title: 'Adopt one variable font for the whole scale',
        problem: 'A dashboard ships six static weights of a grotesque face; replace them with a single variable file that still styles through normal font-weight declarations.',
        steps: [
          { label: 'Step 1: Declare the weight range', text: '```css\n@font-face {\n  font-family: "Grotesk VF";\n  src: url("/fonts/grotesk-var.woff2") format("woff2-variations");\n  font-weight: 100 900;\n  font-stretch: 75% 100%;\n  font-display: swap;\n}\n```\nRange descriptors advertise the full continuum, so any numeric weight request maps into this one file.' },
          { label: 'Step 2: Style with standard properties', text: '```css\nbody { font-family: "Grotesk VF", system-ui, sans-serif; }\nh1 { font-weight: 800; }\nstrong { font-weight: 650; }\n.caption { font-weight: 450; font-stretch: 85%; }\n```\nOrdinary `font-weight` values address the axis, including fractional grades like `650` that no static cut could ever ship.' },
          { label: 'Step 3: Animate weight on interaction', text: '```css\n.navlink { font-weight: 500; transition: font-weight 200ms ease; }\n.navlink:hover { font-weight: 750; }\n```\nBecause the axis is continuous, the hover transition interpolates smoothly instead of jumping between discrete files.' }
        ],
        result: 'Six downloads collapse to one, arbitrary grades become available, and weight itself turns into an animatable design dimension.'
      }
    ],
    keyTakeaways: [
      'Declare faces with @font-face, woff2 first, split by weight and unicode-range.',
      'Use font-display: swap for body copy so text never sits invisible.',
      'Preload only the critical roman cut with crossorigin, plus preconnect.',
      'Prefer one variable font over many static cuts for size and fluid grades.',
      'Neutralize swap shift with metric-matched fallbacks using size-adjust and overrides.'
    ],
    quiz: [
      {
        q: 'What does font-display: swap guarantee during font download?',
        options: [
          'The browser waits for the font before painting any text',
          'Fallback text paints immediately and swaps when the face arrives',
          'The font downloads with highest network priority',
          'Layout shift is impossible'
        ],
        answer: 1,
        explanation: 'Swap sets a zero block period: text renders in the fallback face at once, then upgrades to the web font on arrival instead of hiding.'
      },
      {
        q: 'Why must font preload links carry the crossorigin attribute?',
        options: [
          'It enables HTTP/2 push',
          'Fonts fetch with anonymous CORS mode, and a mismatch double-downloads the file',
          'It compresses the font',
          'It restricts the font to one page'
        ],
        answer: 1,
        explanation: 'Font fetches use CORS anonymous mode; a preload without matching crossorigin creates a separate cache entry and the file downloads twice.'
      },
      {
        q: 'What is the main delivery advantage of a variable font?',
        options: [
          'It renders without any CSS',
          'One file covers continuous weight and width ranges, replacing many static cuts',
          'It needs no fallback stack',
          'It disables layout shift entirely'
        ],
        answer: 1,
        explanation: 'Axes like wght address the whole design space from one resource, collapsing request count and bytes while enabling intermediate grades.'
      },
      {
        q: 'How do size-adjust and ascent-override reduce layout shift?',
        options: [
          'They delay the swap until idle time',
          'They reshape the fallback face’s metrics to match the web font so lines keep their boxes',
          'They subset the font to fewer glyphs',
          'They preload the font automatically'
        ],
        answer: 1,
        explanation: 'Harmonizing the fallback box with the web font’s metrics means the swap changes glyph shapes without reflowing line breaks or container heights.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.5
  {
    sectionId: 'web-ch5-s5',
    readingTime: 7,
    intro: 'Form controls are the least cooperative citizens of CSS: inputs, selects, checkboxes and buttons arrive with heavy native chrome, ignore inherited fonts, and vary by operating system. This section tames them — forcing font inheritance, designing visible focus rings, styling placeholders, and building buttons and inputs that look identical in every modern browser.',
    objectives: [
      'Force font, color and sizing inheritance into native controls',
      'Design :focus-visible rings that survive brand styling',
      'Style placeholders, labels and validation states accessibly',
      'Normalize buttons, inputs and selects to one visual language'
    ],
    concepts: [
      {
        term: 'Inheriting type into controls',
        kind: 'law',
        statement: 'Form elements do **not** inherit typography by default: `button`, `input`, `select` and `textarea` render in the operating system’s widget font unless told otherwise. The one-line reset `font: inherit` — or the trio `font-family: inherit; font-size: 100%; line-height: inherit` — forces controls to adopt the page’s type, and `color: inherit` extends the treatment to text color. Skipping this step leaves mismatched micro-type where every label says the brand face but every field speaks the OS default.',
        detail: 'Apply the inheritance reset globally to all four control families at the top of the stylesheet so no dynamically injected field ever escapes it.'
      },
      {
        term: 'Focus rings with :focus-visible',
        kind: 'method',
        statement: 'The **`:focus-visible`** pseudo-class shows a focus indicator exactly when keyboard or assistive-technology users need one, staying hidden for mouse clicks that already carry positional context. A robust ring pairs **`outline`** with **`outline-offset`**, as in `outline: 3px solid #4f46e5; outline-offset: 2px`, so the indicator clears the element edge at any contrast ratio. Never remove outlines without supplying an equivalent, because `outline: none` with no replacement strands keyboard users with zero orientation.',
        detail: 'Test every ring by tabbing through the form with the mouse untouched, and verify the ring survives Windows High Contrast and forced-colors modes.'
      },
      {
        term: 'Placeholders, labels and hint text',
        kind: 'definition',
        statement: 'The **`::placeholder`** pseudo-element styles hint text inside empty fields — `color`, `opacity` and `font-size` — but placeholders must never replace **labels**, since hint text vanishes on input and many browsers render it at low contrast. Every control needs a real **`label`** element bound by `for` and `id`, with placeholders reserved for short format examples like a date pattern. Keep placeholder contrast above the faint browser default and disable the temptation to stuff instructions solely into disappearing text.',
        detail: 'Pair each placeholder example with a persistent label and, where format matters, an `aria-describedby` hint so screen readers announce the requirement without depending on vanishing text.'
      },
      {
        term: 'Normalizing buttons and inputs',
        kind: 'method',
        statement: 'Consistent controls start by neutralizing native chrome with **`appearance: none`** where appropriate, then rebuilding with explicit `padding`, `border`, `border-radius`, `background` and a shared height scale. Unifying `border-width`, focus, hover, disabled and invalid states across `input`, `select`, `textarea` and `button` produces one visual language instead of four OS dialects. The **`accent-color`** property then tints checkboxes, radios, ranges and progress bars to the brand with a single declaration, sparing custom-drawn replacements for most designs.',
        detail: 'Define one control height scale and one border treatment as tokens, then compose every control from them so sizing and state feedback stay synchronized.'
      },
      {
        term: 'Validation states that help, not punish',
        kind: 'insight',
        statement: 'Helpful validation styles **`:invalid`** and **`:valid`** only after interaction — combining them with `:user-invalid` or a `.touched` class — so pristine fields are not painted red on page load. Pair the border treatment with an **inline message** element referenced by `aria-describedby`, using `aria-invalid="true"` for programmatic state, because color alone excludes color-blind users. Success styling should whisper while error styling speaks clearly, with icons plus text rather than hue as the carrier of meaning.',
        detail: 'Delay error visuals until blur or submit so users are guided rather than scolded, and always announce errors in text that persists beside the field.'
      }
    ],
    examples: [
      {
        title: 'Normalize controls and design focus rings',
        problem: 'A signup form mixes unstyled inputs, a native select and a button that ignore the brand typeface and show inconsistent browser focus outlines.',
        steps: [
          { label: 'Step 1: Inheritance and base normalization', text: '```css\nbutton, input, select, textarea {\n  font: inherit;\n  color: inherit;\n}\ninput[type="text"], input[type="email"], select, textarea {\n  display: block;\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  border: 2px solid #cbd5e1;\n  border-radius: 0.5rem;\n  background: #fff;\n}\n```\nThe `font: inherit` reset adopts page typography everywhere while shared padding, border and radius unify the box language.' },
          { label: 'Step 2: Brand focus rings', text: '```css\ninput:focus, select:focus, textarea:focus, button:focus { outline: none; }\ninput:focus-visible, select:focus-visible, textarea:focus-visible, button:focus-visible {\n  outline: 3px solid #4f46e5;\n  outline-offset: 2px;\n  border-color: #4f46e5;\n}\n```\nDefault outlines are replaced — never merely removed — with a high-contrast ring that appears for keyboard users via `:focus-visible`.' },
          { label: 'Step 3: Placeholder and disabled states', text: '```css\n::placeholder { color: #64748b; opacity: 1; }\n:disabled { background: #f1f5f9; color: #94a3b8; cursor: not-allowed; }\ninput[type="checkbox"], input[type="radio"] { accent-color: #4f46e5; }\n```\nExplicit opacity defeats the faded default, disabled fields read clearly as inert, and `accent-color` brands checks and radios in one line.' }
        ],
        result: 'Every control speaks the brand typeface, shares one box and focus language, and disabled or placeholder states stay legible across browsers.'
      },
      {
        title: 'Build kind validation with messages',
        problem: 'An email field should show a helpful error only after the user interacts, pairing border treatment with a persistent text message instead of color alone.',
        steps: [
          { label: 'Step 1: Markup with label and message slot', text: '```html\n<div class="field">\n  <label for="email">Email address</label>\n  <input type="email" id="email" name="email" required\n         placeholder="you@example.com" aria-describedby="email-error">\n  <p class="error" id="email-error" hidden>Enter an address like you@example.com.</p>\n</div>\n```\nA real label, a format-example placeholder, and a described-by message slot satisfy sighted and screen-reader users together.' },
          { label: 'Step 2: Interaction-gated invalid styling', text: '```css\n.field input:user-invalid {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.field input:user-valid {\n  border-color: #16a34a;\n}\n.error { color: #b91c1c; font-size: 0.875rem; }\n```\nThe `:user-invalid` gate withholds error paint until real interaction, while the message carries meaning in text rather than hue alone.' },
          { label: 'Step 3: Reveal the message with script', text: '```js\nconst input = document.querySelector("#email");\nconst msg = document.querySelector("#email-error");\ninput.addEventListener("invalid", () => {\n  msg.hidden = false;\n  input.setAttribute("aria-invalid", "true");\n});\ninput.addEventListener("input", () => {\n  const ok = input.checkValidity();\n  msg.hidden = ok;\n  input.setAttribute("aria-invalid", String(!ok));\n});\n```\nEvent wiring reveals the message on failed submit and clears it as the entry becomes valid, keeping visual and programmatic state synchronized.' }
        ],
        result: 'Validation guides instead of scolding: no red on load, a text message plus border on genuine errors, and state exposed to assistive technology.'
      }
    ],
    keyTakeaways: [
      'Apply font: inherit to buttons, inputs, selects and textareas or type will mismatch.',
      'Show strong :focus-visible rings with outline plus offset; never remove outlines bare.',
      'Use real labels for every control; keep placeholders as short format examples.',
      'Normalize controls with shared padding, borders and accent-color for one language.',
      'Gate invalid styles behind interaction and pair them with persistent text messages.'
    ],
    quiz: [
      {
        q: 'Why do form controls need an explicit font: inherit rule?',
        options: [
          'They cannot display web fonts otherwise',
          'They default to the OS widget font instead of inheriting page typography',
          'Inheritance is disabled in forms by the HTML parser',
          'It enables validation styling'
        ],
        answer: 1,
        explanation: 'Buttons, inputs, selects and textareas start in the operating system widget face, so only an explicit inheritance rule brings them into the page type system.'
      },
      {
        q: 'What is the key advantage of :focus-visible over :focus for rings?',
        options: [
          'It renders larger outlines',
          'It shows the indicator for keyboard users while staying quiet for mouse clicks',
          'It works without any CSS',
          'It disables the outline entirely'
        ],
        answer: 1,
        explanation: 'The :focus-visible heuristic matches focus that needs a visible indicator — typically keyboard and assistive-tech interaction — avoiding redundant rings on mouse clicks.'
      },
      {
        q: 'What is wrong with using a placeholder as the only label?',
        options: [
          'Placeholders cannot be styled',
          'Hint text disappears on input and often fails contrast, leaving the field unlabeled',
          'Placeholders break form submission',
          'Labels are deprecated in HTML'
        ],
        answer: 1,
        explanation: 'Vanishing hint text plus low-contrast defaults strand both memory and screen-reader users; a persistent label element is the accessible name.'
      },
      {
        q: 'How should :invalid styling avoid punishing users on page load?',
        options: [
          'Style :invalid only after interaction via :user-invalid or a touched class',
          'Never style invalid states',
          'Use !important on valid styles',
          'Validate only on the server'
        ],
        answer: 0,
        explanation: 'Gating error paint behind interaction keeps pristine fields neutral, so red appears as guidance after real input rather than a scolding on arrival.'
      }
    ]
  }
]
