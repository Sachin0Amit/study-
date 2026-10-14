import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 26: Sass Mastery
// Sections web-ch26-s1 through web-ch26-s4. Master study content.
// Based on Rheinwerk Full Stack Web Development Guide Chapter 9.
// ============================================================================

export const webCh26Content: SectionContent[] = [
  // ---------------------------------------------------------------- 26.1
  {
    sectionId: 'web-ch26-s1',
    readingTime: 8,
    intro: 'Style sheets sprawl until variables and nesting restore order. This section compiles preprocessor sources into plain style sheets with watch driven feedback. You will centralize tokens, nest with discipline, and split code into partials with source maps for debugging.',
    objectives: [
      'Compile sources to style sheets with watch and directory builds',
      'Centralize design tokens in variables with clean references',
      'Nest selectors plus split partials without over specificity'
    ],
    concepts: [
      {
        term: 'Preprocessor build',
        kind: 'definition',
        statement: 'A **preprocessor** translates enriched `source` into plain `CSS` during builds, not at runtime. Linked pages consume only the generated sheet while sources stay as authorship truth. Watch mode recompiles on save for instant feedback.',
        detail: 'Compile named sources to named outputs and keep generated files out of hand edits.'
      },
      {
        term: 'Variables as tokens',
        kind: 'method',
        statement: 'A **variable** names one `value` once for reuse across many declarations. Fonts plus brand colors live centrally so a rebrand edits one line instead of dozens. Typed values cover numbers plus strings plus colors plus lists plus `maps`.',
        detail: 'Tokenize repeated values early and reference variables instead of pasting literals.'
      },
      {
        term: 'Nesting discipline',
        kind: 'method',
        statement: 'Rule **nesting** derives child `selectors` from parent context automatically. Lists plus items plus nested items read as their DOM shape without retyping long chains. Depth beyond two or three levels breeds over specific `selectors` that resist override.',
        detail: 'Nest to mirror structure but flatten when depth exceeds three levels or reuse suffers.'
      },
      {
        term: 'Partials and modules',
        kind: 'method',
        statement: 'Small **partials** split tokens plus base plus components into focused `files` joined by modern `use` imports. Each file owns one concern while the entry composes the sheet in order. Namespaced imports prevent global collisions as the system grows.',
        detail: 'Split by concern with an entry that imports in dependency order and namespaces shared tokens.'
      },
      {
        term: 'Source maps and syntax flavors',
        kind: 'insight',
        statement: 'Compiler **maps** link generated `CSS` lines back to source lines for DevTools. Newer brace `syntax` suits CSS authors while older indented syntax suits minimalists, with identical power. Editor highlighting plus linked sources make debugging feel source native.',
        detail: 'Ship maps in development and click through to source lines when inspecting applied rules.'
      }
    ],
    figures: [
      {
        caption: 'Preprocessor pipeline: tokenized nested partials compile to plain sheets with maps back to sources.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sass compile pipeline with partials" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">sources to sheets, debuggable</text><rect x="36" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">partials</text><text x="52" y="108" font-size="11" fill="currentColor">tokens</text><text x="52" y="128" font-size="11" fill="currentColor">components</text><rect x="200" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="216" y="86" font-size="12" font-weight="700" fill="currentColor">nest + vars</text><text x="216" y="108" font-size="11" fill="currentColor">single edit</text><text x="216" y="128" font-size="11" fill="currentColor">many uses</text><rect x="364" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="380" y="86" font-size="12" font-weight="700" fill="currentColor">compile</text><text x="380" y="108" font-size="11" fill="currentColor">watch dir</text><text x="380" y="128" font-size="11" fill="currentColor">plain CSS</text><rect x="528" y="60" width="156" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="544" y="86" font-size="12" font-weight="700" fill="currentColor">maps</text><text x="544" y="108" font-size="11" fill="currentColor">line links</text><text x="544" y="128" font-size="11" fill="currentColor">DevTools</text><line x1="186" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2"/><line x1="350" y1="100" x2="364" y2="100" stroke="currentColor" stroke-width="2"/><line x1="514" y1="100" x2="528" y2="100" stroke="currentColor" stroke-width="2"/><rect x="36" y="156" width="648" height="176" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="182" font-size="12" fill="currentColor">pages link generated sheets only</text><text x="52" y="204" font-size="12" fill="currentColor">brace or indented syntax, same power</text><text x="52" y="226" font-size="12" fill="currentColor">depth past three harms reuse</text><text x="52" y="248" font-size="12" fill="currentColor">entry imports in dependency order</text><text x="52" y="270" font-size="12" fill="currentColor">highlighting + maps keep debug native</text><text x="52" y="292" font-size="12" fill="currentColor">never hand edit generated output</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Tokenize a palette and compile it',
        problem: 'Brand colors repeat across dozens of rules and a shade change means error prone find replace.',
        steps: [
          { label: 'Step 1: Define tokens', text: '```css\n$font: Helvetica, sans-serif;\n$primary-color: #333333;\n$secondary-color: #999999;\nbody { font: 100% $font; color: $secondary-color; }\n```\nThree tokens centralize type plus brand colors for every rule below.' },
          { label: 'Step 2: Compile with watch', text: '```bash\nsass --watch styles.scss styles.css\n```\nWatch recompiles on save so edits appear without manual steps.' },
          { label: 'Step 3: Confirm replacement', text: 'Generated CSS inlines literal values while maps link back to token lines. One token edit now repaints the system.' }
        ],
        result: 'Palette changes land in one edit with generated sheets staying consistent and debuggable.'
      },
      {
        title: 'Nest a list without specificity debt',
        problem: 'List styles repeat long selector chains that drift out of sync when markup shifts.',
        steps: [
          { label: 'Step 1: Nest by structure', text: '```css\nul { font-family: $font; }\nul li { background-color: $primary-color; }\nul li li { background-color: $secondary-color; }\n```\nNesting derives child selectors from parent context automatically.' },
          { label: 'Step 2: Cap the depth', text: 'Stop at two or three levels and flatten deeper branches into named classes. Shallow trees override cleanly.' },
          { label: 'Step 3: Split into partials', text: 'Move tokens plus lists into focused files joined by namespaced imports. The entry composes them in order for one sheet.' }
        ],
        result: 'Lists read as their structure with shallow selectors that stay easy to override.'
      }
    ],
    keyTakeaways: [
      'Sources compile to plain sheets consumed by pages with watch feedback.',
      'Variables centralize tokens so rebrands edit once and apply widely.',
      'Nesting mirrors structure but must stay shallow to avoid specificity debt.',
      'Partials plus maps keep large systems split yet debuggable to source.'
    ],
    quiz: [
      {
        q: 'What does watch mode automate?',
        options: ['Browser history deletion', 'Recompilation on every source save without manual commands', 'Image compression', 'DNS lookups'],
        answer: 1,
        explanation: 'Step 1: Sources change often. Step 2: Manual builds slow flow. Step 3: Watch detects saves. Step 4: Sheets regenerate instantly.'
      },
      {
        q: 'Why centralize colors in variables?',
        options: ['One edit updates every use without find replace errors', 'To use more colors randomly', 'To delete all styles', 'To slow down builds'],
        answer: 0,
        explanation: 'Step 1: Values repeat widely. Step 2: Literals drift. Step 3: Tokens single source. Step 4: Rebrands stay consistent.'
      },
      {
        q: 'What is the nesting danger?',
        options: ['Nesting is always free', 'Nesting deletes variables', 'Deep chains create over specific selectors that resist override', 'Nesting forbids partials'],
        answer: 2,
        explanation: 'Step 1: Nesting builds selectors. Step 2: Depth compounds specificity. Step 3: Overrides need heavier hacks. Step 4: Shallow stays flexible.'
      },
      // Sass-pattern: token plus nesting discipline (original)
      {
        q: 'A sheet repeats one font stack in forty rules. What is the disciplined fix?',
        options: ['Paste it forty more times', 'Inline styles on every element', 'Delete all type styles', 'Tokenize to a variable plus compile with maps and reference it everywhere'],
        answer: 3,
        explanation: 'Step 1: Repetition invites drift. Step 2: Tokens centralize. Step 3: References spread the value. Step 4: Maps keep debugging source native.'
      }
    ]
  },
  // ---------------------------------------------------------------- 26.2
  {
    sectionId: 'web-ch26-s2',
    readingTime: 9,
    intro: 'Static tokens only start the story, and logic finishes it. This section branches themes, loops repetitive grids and icons, and computes with built in plus custom functions. You will generate families of rules from data instead of hand writing each cousin.',
    objectives: [
      'Branch themes with conditional compilation for light and dark modes',
      'Generate families with each, counted, and conditional loops',
      'Compute with module functions plus custom reusable functions'
    ],
    concepts: [
      {
        term: 'Conditional branches',
        kind: 'method',
        statement: 'A **branch** compiles one `block` or another by boolean test. A theme flag selects light tokens or dark tokens so one source ships either skin. Only the taken branch reaches the generated `sheet`, which keeps output lean.',
        detail: 'Gate theme skins plus feature variants on flags so dead alternatives never bloat the sheet.'
      },
      {
        term: 'Each loops over lists',
        kind: 'method',
        statement: 'An **each** loop walks a `list` binding each value in turn. Icon names generate matching classes plus image paths without copy paste. Interpolation injects the current value into `selectors` plus URLs cleanly.',
        detail: 'Collect variant names in one list and generate their rules with a single each block.'
      },
      {
        term: 'Counted and conditional loops',
        kind: 'method',
        statement: 'Counted **loops** repeat by index with `to` excluding the end and `through` including it. Conditional `while` loops repeat until a test fails for data driven widths. Choosing the right bound avoids off by one families.',
        detail: 'Prefer counted loops for grids and while loops for growing scales with explicit termination.'
      },
      {
        term: 'Built in modules',
        kind: 'definition',
        statement: 'Namespaced **modules** group color plus string plus `math` plus list plus map helpers. Imports like color plus math load only needed powers, and calls like mix plus max compute values at `compile` time. Modern code favors modules over legacy globals.',
        detail: 'Import the narrow module needed per file and call helpers for computed values, not hand math.'
      },
      {
        term: 'Custom functions',
        kind: 'method',
        statement: 'A **custom** function names reusable `calc` with params plus return for domain math. A sum helper totals dynamic lengths while nested lists feed batch generation. Debug prints trace values during `compile` without touching output.',
        detail: 'Extract repeated calculations into named functions with clear params and return the computed value.'
      }
    ],
    figures: [
      {
        caption: 'Logic to sheets: branches pick skins, loops birth families, and functions compute values at compile time.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sass branches loops functions" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">data in, rules out</text><rect x="36" y="60" width="200" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">branch: theme?</text><text x="52" y="108" font-size="11" fill="currentColor">light tokens</text><text x="52" y="128" font-size="11" fill="currentColor">or dark tokens</text><rect x="252" y="60" width="216" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="268" y="86" font-size="12" font-weight="700" fill="currentColor">loops: families</text><text x="268" y="108" font-size="11" fill="currentColor">each icons</text><text x="268" y="128" font-size="11" fill="currentColor">for grids</text><rect x="484" y="60" width="200" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="86" font-size="12" font-weight="700" fill="currentColor">functions</text><text x="500" y="108" font-size="11" fill="currentColor">mix, max</text><text x="500" y="128" font-size="11" fill="currentColor">custom sum</text><rect x="36" y="176" width="648" height="156" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="202" font-size="12" fill="currentColor">only taken branch ships, output stays lean</text><text x="52" y="224" font-size="12" fill="currentColor">to excludes end, through includes it</text><text x="52" y="246" font-size="12" fill="currentColor">modules: import narrow, call namespaced</text><text x="52" y="268" font-size="12" fill="currentColor">custom: params in, computed value out</text><text x="52" y="290" font-size="12" fill="currentColor">debug prints trace without output cost</text><text x="52" y="310" font-size="12" fill="currentColor">loops + functions kill copy paste</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Theme with a branch',
        problem: 'A site needs light and dark skins from one source without shipping both sets of declarations.',
        steps: [
          { label: 'Step 1: Flag the theme', text: '```css\n$light-theme: true;\nbody { background-color: #ffffff; color: #000000; }\n```\nA boolean flag selects which token set the branch compiles.' },
          { label: 'Step 2: Branch the body', text: 'Use if plus else blocks to emit light declarations or dark declarations exclusively. Untaken code never reaches output.' },
          { label: 'Step 3: Flip and rebuild', text: 'Toggle the flag and recompile to ship the alternate skin. One source honestly owns both outcomes.' }
        ],
        result: 'One source ships either skin leanly with the choice recorded as data.'
      },
      {
        title: 'Generate icons and columns',
        problem: 'Dozens of icon classes plus grid widths differ only by name or index and invite copy errors.',
        steps: [
          { label: 'Step 1: Loop the icons', text: '```css\n$icons: error, warning, info;\n.icon-error { background-image: url(\"/icons/error.png\"); }\n```\nEach names generate class plus path from one list.' },
          { label: 'Step 2: Loop the grid', text: '```css\n.column-i-1 { width: 100%; }\n.column-i-2 { width: 50%; }\n.column-j-6 { width: 16.6%; }\n```\nCounted loops birth width families with correct end handling.' },
          { label: 'Step 3: Compute with functions', text: '```bash\n# color.mix blends brand tones, math.max picks widths\n# custom sum totals dynamic lengths for batch classes\n```\nModule plus custom calls compute values instead of hand math.' }
        ],
        result: 'Families generate from data with consistent names and computed values.'
      }
    ],
    keyTakeaways: [
      'Branches compile one skin or variant so output stays lean.',
      'Each loops birth named families from single lists without duplication.',
      'Counted bounds differ by inclusion while while loops grow until tests fail.',
      'Module plus custom functions compute values reliably at compile time.'
    ],
    quiz: [
      {
        q: 'Why branch themes at compile time?',
        options: ['To ship both skins always', 'To emit only the selected skin so output stays lean', 'To delete all variables', 'To forbid dark mode'],
        answer: 1,
        explanation: 'Step 1: Two skins exist in source. Step 2: Flags select one. Step 3: Only taken code emits. Step 4: Bytes stay minimal.'
      },
      {
        q: 'What does to versus through control?',
        options: ['Whether the end index is excluded or included in counted loops', 'Font families', 'Image formats', 'Network ports'],
        answer: 0,
        explanation: 'Step 1: Loops count to a bound. Step 2: To stops before end. Step 3: Through reaches end. Step 4: Choice sizes families correctly.'
      },
      {
        q: 'Why import narrow Sass modules?',
        options: ['To load every helper always', 'To delete custom functions', 'To load only needed color, math, or string powers with clear names', 'To forbid compilation'],
        answer: 2,
        explanation: 'Step 1: Helpers group by domain. Step 2: Narrow imports clarify deps. Step 3: Namespaced calls read clearly. Step 4: Globals fade safely.'
      },
      // Logic-pattern: loop plus function generation (original)
      {
        q: 'Three width classes differ only by summed lengths. What is the DRY fix?',
        options: ['Hand write each width again', 'Copy pixels from images', 'Delete the widths', 'Custom sum function plus each over nested lists to generate all three'],
        answer: 3,
        explanation: 'Step 1: Values derive by sum. Step 2: Function centralizes math. Step 3: Lists hold param sets. Step 4: Each generates classes uniformly.'
      }
    ]
  },
  // ---------------------------------------------------------------- 26.3
  {
    sectionId: 'web-ch26-s3',
    readingTime: 8,
    intro: 'Reuse separates tidy systems from pasted ones. This section contrasts inheritance that merges selectors with mixins that inject declarations, plus operators that compute fluid grids. You will bottle media query management and button variants into callable abstractions.',
    objectives: [
      'Contrast extend merging with mixin injection for reuse',
      'Compute fluid layouts with operators and calc correctly',
      'Abstract media handling and variants into callable patterns'
    ],
    concepts: [
      {
        term: 'Inheritance by extend',
        kind: 'method',
        statement: 'Inheritance via **extend** merges selectors into one shared `rule` for common declarations. Base button plus special plus submit variants group their shared core while keeping deltas separate. Merged output stays compact when variants truly share `semantics`.',
        detail: 'Extend only for genuinely shared semantics since unrelated grouping harms readability.'
      },
      {
        term: 'Mixins by include',
        kind: 'method',
        statement: 'A **mixin** injects its `declarations` into each including rule via `include`. Error plus warning boxes duplicate the marker core with distinct backgrounds, which favors flexibility over selector `merging`. Params plus defaults later turn mixins into configurable factories.',
        detail: 'Prefer mixins for skinnable patterns where each use may diverge with params.'
      },
      {
        term: 'Operators and calc',
        kind: 'definition',
        statement: 'Math **operators** compute widths plus gutters from `variables` at compile time. Division needs function safe `calc` handling while multiply plus add size fluid columns from base widths. Computed numbers land as finished values in output `CSS`.',
        detail: 'Compute grid math from base widths and verify finished values in output before shipping.'
      },
      {
        term: 'Media managers',
        kind: 'method',
        statement: 'A media **manager** mixin centralizes `breakpoints` behind named calls. Components include tablet or desktop wrappers instead of pasting raw queries, which keeps bands consistent. One map owns widths while many callers reuse `names`.',
        detail: 'Bottle each band once behind a named mixin and call it everywhere instead of pasting queries.'
      },
      {
        term: 'Extend versus mixin choice',
        kind: 'insight',
        statement: 'Choose **merging** for identical `cores` and injection for diverging `skins`. Extend compacts truly shared meaning while mixins duplicate safely for parameterized variety. Misapplied merging couples strangers while misapplied injection bloats twins.',
        detail: 'Ask whether variants share meaning or merely look alike before picking the reuse tool.'
      }
    ],
    figures: [
      {
        caption: 'Reuse fork: extend merges selectors into one core rule while mixins inject declarations per use.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Extend versus mixin reuse" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">two reuse roads</text><rect x="36" y="60" width="320" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="13" font-weight="700" fill="currentColor">extend: merge</text><text x="52" y="108" font-size="11" fill="currentColor">base + special + submit</text><text x="52" y="128" font-size="11" fill="currentColor">one shared rule</text><text x="52" y="148" font-size="11" fill="currentColor">compact, coupled</text><text x="52" y="166" font-size="11" fill="currentColor">same meaning only</text><rect x="372" y="60" width="312" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="388" y="86" font-size="13" font-weight="700" fill="currentColor">mixin: inject</text><text x="388" y="108" font-size="11" fill="currentColor">marker into error</text><text x="388" y="128" font-size="11" fill="currentColor">marker into warning</text><text x="388" y="148" font-size="11" fill="currentColor">duplicated, flexible</text><text x="388" y="166" font-size="11" fill="currentColor">params later</text><rect x="36" y="196" width="648" height="136" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="222" font-size="12" fill="currentColor">operators size fluid grids from base widths</text><text x="52" y="244" font-size="12" fill="currentColor">media manager bottles bands behind names</text><text x="52" y="266" font-size="12" fill="currentColor">merge for shared cores, inject for skins</text><text x="52" y="288" font-size="12" fill="currentColor">wrong tool couples or bloats</text><text x="52" y="310" font-size="12" fill="currentColor">name reuse by meaning, not looks</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Unify buttons with inheritance',
        problem: 'Three button variants repeat padding plus type plus cursor rules with drift between copies.',
        steps: [
          { label: 'Step 1: Define the base', text: '```css\n.button-base { padding: 15px 30px; text-align: center; cursor: pointer; }\n.button-special { background-color: #999999; }\n```\nThe base owns the shared core while variants own deltas.' },
          { label: 'Step 2: Extend the core', text: 'Special plus submit extend the base so output groups all three selectors into one shared rule. Deltas follow as small separate rules.' },
          { label: 'Step 3: Guard the semantics', text: 'Extend only because all three are truly buttons with shared meaning. Unrelated selectors must never merge merely to save bytes.' }
        ],
        result: 'Buttons share one compact core with honest deltas and no pasted drift.'
      },
      {
        title: 'Skin alerts plus fluid grid with mixins',
        problem: 'Alerts share marker styling with distinct backgrounds while article grids need computed fluid widths.',
        steps: [
          { label: 'Step 1: Mix the marker', text: '```css\n.error { color: red; font-weight: bold; background-color: blue; }\n.warning { color: red; font-weight: bold; background-color: yellow; }\n```\nEach alert injects the shared marker then adds its own ground.' },
          { label: 'Step 2: Compute the grid', text: '```css\narticle { float: left; width: 62.5%; }\naside { float: right; width: 31.25%; }\n```\nOperators sized columns from base widths into finished values.' },
          { label: 'Step 3: Manage media centrally', text: 'Bottle band queries behind named mixins so components include tablet or desktop instead of pasting raw widths. Bands stay consistent everywhere.' }
        ],
        result: 'Alerts flex with injected skins while grids compute cleanly and bands stay centralized.'
      }
    ],
    keyTakeaways: [
      'Extend merges truly shared cores into compact grouped rules.',
      'Mixins inject flexible declarations per use with future params.',
      'Operators compute fluid grids into finished values at compile time.',
      'Named media managers keep bands consistent across components.'
    ],
    quiz: [
      {
        q: 'What does extend output look like?',
        options: ['Duplicated declarations per rule', 'Grouped selectors sharing one core rule plus small delta rules', 'No output at all', 'Binary files'],
        answer: 1,
        explanation: 'Step 1: Base holds shared core. Step 2: Variants extend it. Step 3: Compiler groups selectors. Step 4: Deltas follow separately.'
      },
      {
        q: 'When do mixins beat extend?',
        options: ['When uses diverge with skins or params needing injected copies', 'Always, for identical cores', 'Never, mixins are banned', 'Only for images'],
        answer: 0,
        explanation: 'Step 1: Cores may differ. Step 2: Skins vary per use. Step 3: Injection duplicates safely. Step 4: Params add flexibility.'
      },
      {
        q: 'Why bottle media queries in a manager?',
        options: ['To use more raw widths', 'To forbid responsive design', 'One map owns bands while callers reuse names consistently', 'To increase pasted queries'],
        answer: 2,
        explanation: 'Step 1: Bands repeat widely. Step 2: Raw pastes drift. Step 3: Manager centralizes. Step 4: Names keep use uniform.'
      },
      // Reuse-pattern: extend versus mixin selection (original)
      {
        q: 'Two alerts look alike but mean different severities. Which reuse fits?',
        options: ['Extend them into one meaning', 'Merge them with unrelated buttons', 'Delete both alerts', 'Mixin injection with distinct grounds since looks alike but meanings differ'],
        answer: 3,
        explanation: 'Step 1: Looks match. Step 2: Meanings differ. Step 3: Merging couples strangers. Step 4: Injection shares looks safely.'
      }
    ]
  },
  // ---------------------------------------------------------------- 26.4
  {
    sectionId: 'web-ch26-s4',
    readingTime: 8,
    intro: 'Small demos forgive mess that large teams cannot. This section scales Sass with layered architecture, build integration, and a clear path to modern CSS. You will organize seven folders with intent, automate reloads, and migrate variables without breaking themes.',
    objectives: [
      'Organize large systems with layered folders and strict imports',
      'Integrate builds with directory watch plus live reload helpers',
      'Migrate thoughtfully to modern CSS while keeping Sass strengths'
    ],
    concepts: [
      {
        term: 'Seven folder architecture',
        kind: 'method',
        statement: 'A **seven** folder layout splits abstracts plus base plus `components` plus layout plus pages plus themes plus vendors. Tokens plus mixins live in abstracts while real rules live outward in order. The entry imports layers so `cascade` stays predictable at scale.',
        detail: 'Adopt the full split once partial counts pass a dozen and enforce import order in review.'
      },
      {
        term: 'Build integration',
        kind: 'method',
        statement: 'Directory **watch** compiles whole `source` trees to output trees on save. Live reload helpers refresh browsers on sheet change, which closes the edit see loop. Together they turn large systems into small feedback `loops`.',
        detail: 'Watch source to output directories and pair with reload tooling for instant visual feedback.'
      },
      {
        term: 'Preprocessor choice context',
        kind: 'definition',
        statement: 'Classic **rivals** share variables plus nesting plus `mixins` with taste level differences. Sass leads on modules plus community depth, while leaner dialects suit existing pipelines. Concepts transfer, so teams should honor incumbent `choices` over relitigation.',
        detail: 'Learn concepts deeply and respect incumbent picks since migration cost dwarfs syntax taste.'
      },
      {
        term: 'Modern CSS migration',
        kind: 'method',
        statement: 'Native **custom** properties now offer runtime `theming` plus cascade plus JS updates. Compile time tokens still win for math plus branching plus dead code removal, while runtime props win for live theme `switches`. Hybrids keep build power with runtime flexibility.',
        detail: 'Keep computed design math in Sass while exposing live theme knobs as custom properties.'
      },
      {
        term: 'Scale hygiene',
        kind: 'insight',
        statement: 'Large **systems** rot through deep nesting plus merged strangers plus `global` leaks. Lint depth plus forbid unrelated extension plus namespace shared `tokens` to keep growth linear. Reviews guard the entry order like API surface.',
        detail: 'Lint nesting depth plus import order and reject global leaks that couple distant features.'
      }
    ],
    figures: [
      {
        caption: 'At scale pipeline: layered folders feed ordered entry, directory watch builds, reload previews, and modern CSS receives live knobs.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sass at scale architecture" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">scale without sprawl</text><rect x="36" y="60" width="200" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">7 folders</text><text x="52" y="108" font-size="11" fill="currentColor">tokens first</text><text x="52" y="128" font-size="11" fill="currentColor">pages last</text><rect x="252" y="60" width="216" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="268" y="86" font-size="12" font-weight="700" fill="currentColor">ordered entry</text><text x="268" y="108" font-size="11" fill="currentColor">abstract to vendor</text><text x="268" y="128" font-size="11" fill="currentColor">stable cascade</text><rect x="484" y="60" width="200" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="86" font-size="12" font-weight="700" fill="currentColor">watch + reload</text><text x="500" y="108" font-size="11" fill="currentColor">dir to dir</text><text x="500" y="128" font-size="11" fill="currentColor">live preview</text><line x1="236" y1="110" x2="252" y2="110" stroke="currentColor" stroke-width="2"/><line x1="468" y1="110" x2="484" y2="110" stroke="currentColor" stroke-width="2"/><rect x="36" y="176" width="648" height="156" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="202" font-size="12" fill="currentColor">concepts transfer across rival dialects</text><text x="52" y="224" font-size="12" fill="currentColor">Sass for math + branches, native for live themes</text><text x="52" y="246" font-size="12" fill="currentColor">lint depth + order + namespaces</text><text x="52" y="268" font-size="12" fill="currentColor">review entry like public API</text><text x="52" y="290" font-size="12" fill="currentColor">masters stay for reexport, maps in dev</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Lay out a team sheet system',
        problem: 'A team sheet folder grows to forty files with import order bugs and cascade surprises.',
        steps: [
          { label: 'Step 1: Split by layer', text: '```bash\nsass --watch sources/styles:output/styles\n```\nDirectory watch builds the whole tree while folders separate abstracts through vendors.' },
          { label: 'Step 2: Order the entry', text: 'Import tokens plus mixins first, then base plus layout plus components plus pages plus themes. Vendors last so overrides win predictably.' },
          { label: 'Step 3: Lint the hygiene', text: 'Cap nesting depth plus forbid unrelated extension plus require namespaced tokens. Reviews reject global leaks early.' }
        ],
        result: 'Forty files behave as one predictable cascade with fast feedback and clean ownership.'
      },
      {
        title: 'Migrate theme knobs to native',
        problem: 'Themes need runtime switching without recompiles while math plus branching must stay build powered.',
        steps: [
          { label: 'Step 1: Keep build math', text: '```css\n.card { padding: 16px; border-radius: 8px; }\n.theme-dark { color: #ffffff; background-color: #000000; }\n```\nComputed layout plus generated variants stay in Sass sources.' },
          { label: 'Step 2: Expose live knobs', text: '```css\n:root { --brand: #333333; }\n.btn { background-color: var(--brand); }\n```\nRuntime props expose brand plus surface colors for instant switches.' },
          { label: 'Step 3: Bridge the two', text: 'Assign Sass tokens into custom props at the root so one palette feeds both worlds. JS updates props live without rebuilds.' }
        ],
        result: 'Builds keep power while themes switch live with one shared palette truth.'
      }
    ],
    keyTakeaways: [
      'Layered folders plus ordered entry keep large cascades predictable.',
      'Directory watch plus reload helpers restore small loop feedback.',
      'Concepts transfer across dialects so honor incumbent choices.',
      'Hybrid tokens pair Sass math with native live theme knobs.'
    ],
    quiz: [
      {
        q: 'Why order entry imports from abstracts outward?',
        options: ['To look tidy only', 'Tokens plus mixins must exist before use and overrides must win predictably', 'To slow builds', 'To forbid components'],
        answer: 1,
        explanation: 'Step 1: Deps flow outward. Step 2: Early tokens feed later rules. Step 3: Late overrides win. Step 4: Order stabilizes cascade.'
      },
      {
        q: 'What does directory watch add over single file builds?',
        options: ['Whole tree recompiles on any save for large systems', 'Manual steps per file', 'No output at all', 'Deleted source maps'],
        answer: 0,
        explanation: 'Step 1: Systems hold many files. Step 2: Single builds miss peers. Step 3: Directory mode tracks all. Step 4: Feedback stays whole.'
      },
      {
        q: 'When do native custom props beat Sass variables?',
        options: ['For compile time math', 'For dead code removal', 'For runtime theme switches plus JS updates without rebuilds', 'For branching output'],
        answer: 2,
        explanation: 'Step 1: Sass runs at build. Step 2: Native runs live. Step 3: Switches need runtime. Step 4: Props fill that gap.'
      },
      // Scale-pattern: layered architecture plus migration (original)
      {
        q: 'A forty file system suffers cascade surprises. What restores order?',
        options: ['More global leaks', 'Random import order', 'Deeper nesting everywhere', 'Layered folders plus ordered entry plus depth and namespace linting'],
        answer: 3,
        explanation: 'Step 1: Growth needs structure. Step 2: Layers separate concerns. Step 3: Order fixes cascade. Step 4: Lint guards depth plus globals.'
      }
    ]
  }
]
