import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 23: Data and Media Formats
// Sections web-ch23-s1 through web-ch23-s4. Master study content.
// Based on Rheinwerk Full Stack Web Development Guide Chapter 6.
// ============================================================================

export const webCh23Content: SectionContent[] = [
  // ---------------------------------------------------------------- 23.1
  {
    sectionId: 'web-ch23-s1',
    readingTime: 9,
    intro: 'Clients and servers trade contact lists, orders, and settings as text long before they render a pixel. This section compares delimited, markup, and object notations for structure, size, and parsing. You will choose the leanest safe encoding and validate it against a schema.',
    objectives: [
      'Contrast flat delimited rows with nested markup and object trees',
      'Parse safely with DOM versus streaming versus native object tools',
      'Validate payloads against schemas before trusting their shape'
    ],
    concepts: [
      {
        term: 'CSV for flat tables',
        kind: 'definition',
        statement: 'Comma separated **values** encode rows with line breaks and `comma` split columns. An optional first row names fields for human clarity. The shape suits simple tables but collapses on nested or optional structure.',
        detail: 'Use CSV for flat exports with stable columns and quote fields that contain separators or line breaks.'
      },
      {
        term: 'XML extensibility',
        kind: 'definition',
        statement: 'The **markup** language wraps data in `elements` plus attributes you define yourself. One `root` holds nested children such as grouped address parts, which flat rows cannot express. Namespaces plus schemas plus validators make cross service contracts explicit.',
        detail: 'Define element vocabularies per domain and validate inbound documents before mapping them to app objects.'
      },
      {
        term: 'DOM versus streaming parse',
        kind: 'method',
        statement: 'A **DOM** parser builds a `tree` for random access at memory cost, while a streaming parser fires `events` while walking once. Trees suit small to medium documents with cross references, while event walks suit huge feeds that never fit comfortably in memory. Libraries exist per language so hand parsing is rarely needed.',
        detail: 'Choose tree parsing for small config style files and event parsing for large feeds processed in order.'
      },
      {
        term: 'JSON leanness',
        kind: 'definition',
        statement: 'Object **notation** uses braces plus quoted `keys` plus colon values with arrays for lists. Strings plus numbers plus booleans plus nested objects cover most web payloads without open and close tag weight. Native `parse` plus direct embedding make browser handling almost free.',
        detail: 'Prefer JSON for browser APIs and config where human readability plus tiny size plus native parsing all matter.'
      },
      {
        term: 'Schemas and validators',
        kind: 'method',
        statement: 'A **schema** states required `properties` plus types plus nesting rules for a family of documents. Validators reject malformed payloads at the boundary before faulty data poisons logic. Both markup and object worlds offer schema dialects with the same gatekeeping role.',
        detail: 'Check every inbound payload against its schema in tests and at runtime boundaries, failing closed on mismatch.'
      }
    ],
    figures: [
      {
        caption: 'Data format ladder: flat rows, nested markup trees, and lean object trees with matching parse strategies.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CSV XML JSON comparison" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">three exchange shapes</text><rect x="36" y="60" width="200" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="13" font-weight="700" fill="currentColor">CSV flat</text><text x="52" y="108" font-size="11" fill="currentColor">rows + commas</text><text x="52" y="128" font-size="11" fill="currentColor">tiny, no nest</text><text x="52" y="148" font-size="11" fill="currentColor">tables only</text><rect x="252" y="60" width="216" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="268" y="86" font-size="13" font-weight="700" fill="currentColor">XML tree</text><text x="268" y="108" font-size="11" fill="currentColor">elements + attrs</text><text x="268" y="128" font-size="11" fill="currentColor">deep nest OK</text><text x="268" y="148" font-size="11" fill="currentColor">DOM or events</text><rect x="484" y="60" width="200" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="86" font-size="13" font-weight="700" fill="currentColor">JSON lean</text><text x="500" y="108" font-size="11" fill="currentColor">keys + arrays</text><text x="500" y="128" font-size="11" fill="currentColor">browser native</text><text x="500" y="148" font-size="11" fill="currentColor">small + clear</text><rect x="36" y="186" width="648" height="146" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="212" font-size="12" fill="currentColor">flat stable tables to CSV</text><text x="52" y="234" font-size="12" fill="currentColor">nested contracts to XML or JSON</text><text x="52" y="256" font-size="12" fill="currentColor">browser APIs lean to JSON</text><text x="52" y="278" font-size="12" fill="currentColor">huge files favor event walks</text><text x="52" y="300" font-size="12" fill="currentColor">validate at boundary always</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Trade contacts as flat rows',
        problem: 'A newsletter tool needs a tiny export of names plus phones plus mails with no nesting.',
        steps: [
          { label: 'Step 1: Write the rows', text: '```csv\nfirstname,lastname,phone,email\nJohn,Doe,01234567,john@example.com\nPaula,Doe,01234567,paula@example.com\n```\nLine breaks split records while commas split fields with an optional header row.' },
          { label: 'Step 2: Read with a library', text: 'Split lines then fields with a tested CSV reader that honors quotes and escapes. Hand splitting breaks on quoted commas.' },
          { label: 'Step 3: Know the ceiling', text: 'Adding grouped addresses or optional nested parts forces a move to markup or object trees. Flat rows cannot grow nesting without hacks.' }
        ],
        result: 'Flat contact exports stay tiny and readable until nesting requirements force a richer shape.'
      },
      {
        title: 'Exchange nested contacts safely',
        problem: 'A service must send grouped address parts with typed numbers and validate shape before processing.',
        steps: [
          { label: 'Step 1: Encode as objects', text: '```js\nconst payload = { contacts: [{ firstname: \"John\", address: { street: \"Sample Street\", number: 99 } }] };\nconst text = JSON.stringify(payload);\nconst back = JSON.parse(text);\n```\nStringify plus parse round trip nested objects with native browser support.' },
          { label: 'Step 2: Validate the shape', text: 'Check required keys plus value types against a shared schema before mapping to domain objects. Reject mismatches closed with a clear error.' },
          { label: 'Step 3: Choose markup when needed', text: '```html\n<!-- markup alternative with custom elements -->\n<!-- contacts root, contact child, address group -->\n```\nMarkup suits extensible cross service vocabularies with namespaces and mixed content.' }
        ],
        result: 'Nested contacts travel leanly as objects with schema gates, with markup reserved for extensible contracts.'
      }
    ],
    keyTakeaways: [
      'CSV suits flat stable tables while nesting needs markup or object trees.',
      'Trees give random access at memory cost while event walks stream huge files.',
      'JSON pairs lean syntax with native browser parsing for web APIs.',
      'Schemas plus validators reject malformed payloads at the boundary.'
    ],
    quiz: [
      {
        q: 'When does CSV suffice?',
        options: ['Deeply nested documents with optional groups', 'Flat tables with stable columns and no nesting', 'Mixed content with namespaces', 'Binary video streams'],
        answer: 1,
        explanation: 'Step 1: CSV has rows plus separators only. Step 2: It lacks nesting. Step 3: Stable flat tables fit that shape. Step 4: Richer needs force other formats.'
      },
      {
        q: 'What distinguishes tree parsing from event parsing?',
        options: ['Tree builds a full model for random access while events walk once with low memory', 'Events need more memory always', 'Trees cannot handle small files', 'Events cannot handle large files'],
        answer: 0,
        explanation: 'Step 1: Trees hold the whole model. Step 2: That enables jumps but costs memory. Step 3: Events fire while walking. Step 4: Walks suit huge ordered feeds.'
      },
      {
        q: 'Why does JSON dominate browser APIs?',
        options: ['It is a binary format', 'Lean braces plus native parse plus direct embedding keep it small and easy', 'It requires custom compilers', 'It forbids arrays'],
        answer: 1,
        explanation: 'Step 1: Syntax is compact. Step 2: No closing tags bloat size. Step 3: Browsers parse natively. Step 4: Together they lower cost and code.'
      },
      // Format-pattern: schema gated exchange selection (original)
      {
        q: 'A payload gains grouped optional address parts. What is the principled move?',
        options: ['Cram nesting into flat rows with hacks', 'Move to a nested tree shape with a schema and validate at the boundary', 'Drop validation to save time', 'Send the data as pixels'],
        answer: 1,
        explanation: 'Step 1: Flat rows cannot express groups. Step 2: Trees model nesting naturally. Step 3: Schemas state the contract. Step 4: Validators enforce it before logic runs.'
      }
    ]
  },
  // ---------------------------------------------------------------- 23.2
  {
    sectionId: 'web-ch23-s2',
    readingTime: 9,
    intro: 'Photos, logos, animations, and diagrams each punish the wrong encoding with bloat or blur. This section tours photographic, graphic, animated, vector, and modern unified formats. You will match color depth, transparency, animation, and scaling needs to the right container.',
    objectives: [
      'Separate photographic lossy needs from graphic lossless needs',
      'Compare palette limits, transparency, and animation support',
      'Explain vector scaling and modern unified compression'
    ],
    concepts: [
      {
        term: 'Photos in JPG',
        kind: 'definition',
        statement: 'The **photo** format compresses continuous tone images with `lossy` tuned quality. Millions of colors survive while file size falls as quality drops, which suits camera shots with gradients. Sharp text plus flat logos blur and band under the same treatment.',
        detail: 'Export photos at the lowest quality that still looks clean at display size and keep a lossless master.'
      },
      {
        term: 'Graphics and animation in GIF',
        kind: 'definition',
        statement: 'The **palette** format caps images at `256` colors for crisp flat areas. Small logos plus icons compress well while photos posterize, and frame sequences enable simple `animation`. Basic transparency is binary rather than smooth.',
        detail: 'Reserve this format for tiny flat animations and move rich motion to video or modern containers.'
      },
      {
        term: 'PNG tiers and alpha',
        kind: 'definition',
        statement: 'Portable **graphics** span palette plus true color plus `alpha` depths. Eight bit mode mirrors palette economy for flat art while twenty four bit mode covers photos without loss. An extra channel adds smooth `transparency` levels for overlays and soft edges.',
        detail: 'Use palette mode for flat UI art and true color plus alpha for graphics needing smooth see through.'
      },
      {
        term: 'SVG vectors',
        kind: 'definition',
        statement: 'Scalable **vectors** describe lines plus curves plus shapes in `XML` text rather than pixels. Any size renders crisply since math redraws the shapes, and style plus `animation` integrate with page code. Logos plus icons plus diagrams thrive as resolution free assets.',
        detail: 'Draw logos and icons as vectors and style them with page styles for theme aware crisp rendering.'
      },
      {
        term: 'WebP unification',
        kind: 'insight',
        statement: 'The modern **unified** format offers `lossless` plus lossy modes near a third smaller than older twins. One container covers photos plus graphics plus `transparency` plus animation, which simplifies pipelines. Fallbacks plus support checks still matter for older viewers.',
        detail: 'Serve the modern container first with classic fallbacks and verify support data before relying on it alone.'
      }
    ],
    figures: [
      {
        caption: 'Raster pixels versus vector math: photos and flat art on grids against infinitely scalable shape paths.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Raster versus vector image formats" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">pixels versus paths</text><rect x="36" y="60" width="320" height="130" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="13" font-weight="700" fill="currentColor">raster grid</text><g fill="currentColor"><rect x="52" y="100" width="22" height="22" opacity="0.85"/><rect x="78" y="100" width="22" height="22" opacity="0.55"/><rect x="104" y="100" width="22" height="22" opacity="0.3"/><rect x="130" y="100" width="22" height="22" opacity="0.65"/><rect x="52" y="126" width="22" height="22" opacity="0.4"/><rect x="78" y="126" width="22" height="22" opacity="0.9"/><rect x="104" y="126" width="22" height="22" opacity="0.6"/><rect x="130" y="126" width="22" height="22" opacity="0.25"/></g><text x="52" y="168" font-size="11" fill="currentColor">JPG photo, GIF flat, PNG alpha</text><rect x="372" y="60" width="312" height="130" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="388" y="86" font-size="13" font-weight="700" fill="currentColor">vector paths</text><circle cx="450" cy="125" r="28" fill="none" stroke="currentColor" stroke-width="2"/><rect x="490" y="103" width="56" height="44" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 580 150 L 620 100 L 660 150 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="388" y="168" font-size="11" fill="currentColor">SVG: any size, crisp edges</text><rect x="36" y="206" width="648" height="126" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="232" font-size="12" fill="currentColor">photos: continuous tone, lossy OK</text><text x="52" y="254" font-size="12" fill="currentColor">flat art: few colors, lossless + alpha</text><text x="52" y="276" font-size="12" fill="currentColor">motion: short loops or modern clips</text><text x="52" y="298" font-size="12" fill="currentColor">logos + icons: vectors scale free</text><text x="52" y="318" font-size="12" fill="currentColor">modern unified covers all, check support</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Ship a hero photo fast',
        problem: 'A homepage hero photo weighs megabytes and slows first paint on mobile networks.',
        steps: [
          { label: 'Step 1: Export for tone', text: '```bash\n# export master as JPG quality 70 width 1600\n# also export modern variant quality 65\n```\nLossy photo tuning trades invisible detail for large byte savings.' },
          { label: 'Step 2: Offer the modern twin', text: '```html\n<picture>\n  <source srcset=\"hero.webp\" type=\"image/webp\">\n  <img src=\"hero.jpg\" alt=\"Team working in daylight studio\">\n</picture>\n```\nCapable viewers take the smaller file while others fall back safely.' },
          { label: 'Step 3: Size to display', text: 'Resize to the largest rendered width rather than shipping camera resolution. Bytes fall with pixels before quality even matters.' }
        ],
        result: 'The hero paints quickly with preserved tone and a safe fallback for older viewers.'
      },
      {
        title: 'Keep a logo crisp everywhere',
        problem: 'A logo blurs on dense screens and needs theme aware recoloring without multiple bitmap exports.',
        steps: [
          { label: 'Step 1: Draw as shapes', text: '```html\n<svg xmlns="http://www.w3.org/2000/svg" viewBox=\"0 0 120 60\" role=\"img\" aria-label=\"Example logo\">\n  <circle cx=\"30\" cy=\"30\" r=\"20\"></circle>\n</svg>\n```\nShape math replaces pixel grids so any scale stays sharp.' },
          { label: 'Step 2: Style with page code', text: '```css\n.logo-mark { fill: currentColor; }\n.site-header { color: #123456; }\n```\nInheritance tints the mark with surrounding text color for themes.' },
          { label: 'Step 3: Animate cheaply', text: 'Transform and opacity tweens on shapes stay crisp unlike scaled bitmap frames. One asset serves favicon through billboard.' }
        ],
        result: 'One tiny text asset renders razor sharp at every size with theme driven color.'
      }
    ],
    keyTakeaways: [
      'Continuous tone photos favor tuned lossy compression over lossless weight.',
      'Flat art favors palette or lossless modes with smooth alpha when needed.',
      'Vectors replace pixel grids for logos, icons, and diagrams at any scale.',
      'A modern unified container can halve payloads but still needs fallbacks.'
    ],
    quiz: [
      {
        q: 'Why do photos favor JPG style lossy compression?',
        options: ['Photos contain smooth gradients where tuned loss saves bytes invisibly', 'Photos need only two colors', 'Lossy files cannot show gradients', 'Photos must stay vector'],
        answer: 0,
        explanation: 'Step 1: Photos hold continuous tone. Step 2: Human eyes forgive tuned loss there. Step 3: Size falls sharply. Step 4: Hence lossy fits photos.'
      },
      {
        q: 'What caps the classic palette animation format?',
        options: ['Unlimited colors with smooth alpha', 'About two hundred fifty six colors with binary transparency', 'Infinite scaling without pixels', 'Lossless photo gradients always'],
        answer: 1,
        explanation: 'Step 1: Palette means indexed color. Step 2: Eight bits allow limited entries. Step 3: Transparency is coarse. Step 4: Photos and soft edges suffer.'
      },
      {
        q: 'What makes vectors resolution free?',
        options: ['They store more pixels', 'They store shape math that redraws at any size', 'They forbid styling', 'They require camera resolution'],
        answer: 1,
        explanation: 'Step 1: No pixel grid is stored. Step 2: Lines plus curves define art. Step 3: Renderers rasterize per size. Step 4: Edges stay crisp at all scales.'
      },
      // Image-pattern: photo versus graphic versus vector choice (original)
      {
        q: 'A logo must stay crisp from favicon to billboard with theme tints. What fits best?',
        options: ['A single low quality photo export', 'A palette bitmap with binary transparency', 'A vector asset styled by page code', 'An uncompressed camera raw'],
        answer: 2,
        explanation: 'Step 1: Need spans huge scale range. Step 2: Bitmaps pixelate when enlarged. Step 3: Vectors redraw per size. Step 4: Page styling adds theme tints freely.'
      }
    ]
  },
  // ---------------------------------------------------------------- 23.3
  {
    sectionId: 'web-ch23-s3',
    readingTime: 8,
    intro: 'Knowing formats is half the job, and choosing between them under size, quality, and support pressure is the other half. This section turns the comparison matrix into decision rules for photos, graphics, transparency, and motion. You will serve responsive images with modern first sources and reliable fallbacks.',
    objectives: [
      'Apply the compression, color, transparency, and animation matrix',
      'Serve responsive sizes with modern first sources and fallbacks',
      'Weigh tooling and support data when adopting new containers'
    ],
    concepts: [
      {
        term: 'Comparison matrix',
        kind: 'definition',
        statement: 'The **matrix** rows map each format to `compression` plus color depth plus `transparency` plus animation plus scaling. Lossy rows trade quality for bytes while lossless rows preserve edges exactly. Reading across one need at a time yields a shortlist in seconds.',
        detail: 'Filter first by must have features like smooth alpha or motion, then by size among survivors.'
      },
      {
        term: 'Quality versus size dial',
        kind: 'method',
        statement: 'The **quality** dial trades visible fidelity for `bytes` along a curve unique per image. Photo exports fall fast with little visual cost before cliffs appear, while flat art cliffs arrive immediately. Testing at display size finds the knee where savings stop being free.',
        detail: 'Export three quality steps and pick the lowest that still looks clean at real display size.'
      },
      {
        term: 'Responsive delivery',
        kind: 'method',
        statement: 'Responsive **images** pair `srcset` plus sizes so browsers pick sufficient `pixels` for the slot. Small screens download small files while dense screens get extra density without waste. Art direction variants crop differently per breakpoint when layout demands it.',
        detail: 'Generate two to three widths per image and let the browser match slot plus density automatically.'
      },
      {
        term: 'Modern first with fallback',
        kind: 'method',
        statement: 'A **picture** wrapper lists modern `source` entries before a classic `img` fallback. Capable browsers take the smaller unified file while others ignore unknown types and render the fallback. Support tables plus real device tests gate full reliance on new containers.',
        detail: 'List modern sources first with correct type attributes and always keep a classic fallback image.'
      },
      {
        term: 'Tooling and data URIs',
        kind: 'insight',
        statement: 'Editors from **Affinity** to free `GIMP` tune exports while vector tools shape logos. Tiny icons may inline as Base sixty four `data` URIs to save requests, which trades cacheability for fewer round trips. Support references confirm which browsers accept each container before launch.',
        detail: 'Inline only sub kilobyte icons as data URIs and keep larger art as cacheable files with far future headers.'
      }
    ],
    figures: [
      {
        caption: 'Decision matrix flow: must have features filter formats, then size, then support checks pick the winner.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image choice decision matrix" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">choose by needs, not habit</text><rect x="36" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">photo?</text><text x="52" y="108" font-size="11" fill="currentColor">lossy tuned</text><text x="52" y="128" font-size="11" fill="currentColor">modern first</text><rect x="200" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="216" y="86" font-size="12" font-weight="700" fill="currentColor">flat art?</text><text x="216" y="108" font-size="11" fill="currentColor">lossless</text><text x="216" y="128" font-size="11" fill="currentColor">alpha if need</text><rect x="364" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="380" y="86" font-size="12" font-weight="700" fill="currentColor">motion?</text><text x="380" y="108" font-size="11" fill="currentColor">short loop</text><text x="380" y="128" font-size="11" fill="currentColor">or clip</text><rect x="528" y="60" width="156" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="544" y="86" font-size="12" font-weight="700" fill="currentColor">logo?</text><text x="544" y="108" font-size="11" fill="currentColor">vector</text><text x="544" y="128" font-size="11" fill="currentColor">any scale</text><rect x="36" y="156" width="648" height="176" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="182" font-size="12" fill="currentColor">filter by must haves: alpha, motion, scaling</text><text x="52" y="204" font-size="12" fill="currentColor">then smallest bytes at clean quality</text><text x="52" y="226" font-size="12" fill="currentColor">serve responsive widths via srcset</text><text x="52" y="248" font-size="12" fill="currentColor">modern source first, classic fallback last</text><text x="52" y="270" font-size="12" fill="currentColor">inline only tiny icons as data URIs</text><text x="52" y="292" font-size="12" fill="currentColor">confirm support tables + device tests</text><text x="52" y="314" font-size="12" fill="currentColor">keep lossless masters for reexport</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Cut a product grid payload',
        problem: 'A product grid ships identical large photos to phones and desktops with slow loads.',
        steps: [
          { label: 'Step 1: Generate widths', text: '```bash\n# export widths 400 800 1200 in both modern and classic types\n# quality near 65 modern, near 70 classic\n```\nThree widths cover phones through desktops without camera sized waste.' },
          { label: 'Step 2: Mark up choice', text: '```html\n<img srcset=\"p-400.webp 400w, p-800.webp 800w\" sizes=\"(max-width: 600px) 400px, 800px\" src=\"p-800.jpg\" alt=\"Blue backpack front view\">\n```\nThe browser picks sufficient pixels for slot plus density.' },
          { label: 'Step 3: Verify savings', text: 'Compare transferred bytes on throttled mobile profiles before and after. Phones should fetch the smallest sufficient file.' }
        ],
        result: 'Grid bytes fall sharply with identical visual quality across screen sizes.'
      },
      {
        title: 'Serve transparency without bloat',
        problem: 'A UI needs soft shadows over photos but palette transparency halos edges white.',
        steps: [
          { label: 'Step 1: Filter by need', text: 'Smooth alpha eliminates palette and photo only rows, leaving true color plus alpha and modern unified rows. Must have features shortlist correctly.' },
          { label: 'Step 2: Compare size', text: '```html\n<picture>\n  <source srcset=\"badge.webp\" type=\"image/webp\">\n  <img src=\"badge.png\" alt=\"Award badge with soft shadow\">\n</picture>\n```\nModern alpha often wins on bytes while classic alpha stays as fallback.' },
          { label: 'Step 3: Confirm support', text: 'Check support tables and test on oldest supported devices before removing fallbacks. Keep masters for future reexports.' }
        ],
        result: 'Soft overlays render cleanly at lower weight with safe fallback coverage.'
      }
    ],
    keyTakeaways: [
      'Filter by must have alpha, motion, and scaling before comparing bytes.',
      'Dial quality at display size to find the knee where savings stop being free.',
      'Responsive widths plus modern first sources cut payloads across devices.',
      'Inline only tiny icons while keeping larger art cacheable with fallbacks.'
    ],
    quiz: [
      {
        q: 'What is the correct first filter when choosing a format?',
        options: ['Favorite file extension', 'Must have features like smooth alpha, motion, or scaling', 'Alphabetical order', 'Largest possible file'],
        answer: 1,
        explanation: 'Step 1: List hard needs. Step 2: Drop rows lacking them. Step 3: Compare size among survivors. Step 4: Support checks finalize the pick.'
      },
      {
        q: 'How do responsive width sets save bytes?',
        options: ['They force desktop files on phones', 'They let browsers fetch sufficient pixels for slot plus density', 'They disable caching', 'They remove alt text'],
        answer: 1,
        explanation: 'Step 1: Slots differ by screen. Step 2: Sets offer widths. Step 3: Browsers match need. Step 4: Small screens skip large files.'
      },
      {
        q: 'Why keep a classic fallback beside modern sources?',
        options: ['Modern types bloat all browsers', 'Older viewers ignore unknown types and need a renderable image', 'Fallbacks speed up parsing', 'Fallbacks replace alt text'],
        answer: 1,
        explanation: 'Step 1: Support varies. Step 2: Unknown types are skipped. Step 3: The fallback renders. Step 4: Coverage stays universal.'
      },
      // Choice-pattern: matrix driven image decision (original)
      {
        q: 'A diagram needs crisp edges plus transparency plus huge scale range. What wins?',
        options: ['Low quality photo export', 'Palette bitmap with binary transparency', 'True color plus alpha bitmap only', 'Vector art with fallback bitmap for ancient viewers'],
        answer: 3,
        explanation: 'Step 1: Scaling demands vectors. Step 2: Edges need lossless shapes. Step 3: Styling handles tints. Step 4: Fallback covers ancient viewers.'
      }
    ]
  },
  // ---------------------------------------------------------------- 23.4
  {
    sectionId: 'web-ch23-s4',
    readingTime: 7,
    intro: 'Moving pictures and sound turn pages into players with their own controls and tracks. This section wires native video and audio elements with multi source fallbacks and accessible captions. You will configure playback attributes and drive custom controls through a tiny media interface.',
    objectives: [
      'Embed video and audio with native players and fallback sources',
      'Configure autoplay, controls, loop, mute, poster, and preload wisely',
      'Add caption tracks and script custom controls accessibly'
    ],
    concepts: [
      {
        term: 'Native video element',
        kind: 'definition',
        statement: 'The **video** element renders a built in `player` with timeline plus volume plus fullscreen. A `src` file suffices when one container covers the audience, while nested `source` children offer alternates per browser. Fallback text inside covers viewers without media support.',
        detail: 'Start with one widely supported container and add alternates only for measured gaps in the audience.'
      },
      {
        term: 'Containers versus codecs',
        kind: 'definition',
        statement: 'A **container** holds timed media while the `codec` compresses the pictures and sound inside. File extensions name containers while type attributes name the `MIME` contract the browser checks. Matching both avoids downloads that can never play.',
        detail: 'Declare correct MIME types on sources and servers so browsers skip unplayable options without fetching.'
      },
      {
        term: 'Player attributes',
        kind: 'method',
        statement: 'Boolean **attributes** tune `autoplay` plus controls plus loop plus `muted` plus preload plus poster. Controls expose usable chrome,muted plus autoplay satisfy motion policies, and `poster` plus preload shape first paint and data cost. Defaults should respect data, motion, and sound etiquette.',
        detail: 'Avoid autoplay with sound and preload only what the view likely plays to respect data plans.'
      },
      {
        term: 'Audio parity',
        kind: 'definition',
        statement: 'The **audio** element mirrors video with a compact `player` for sound only. Multiple `source` children with MIME types cover format splits while controls expose play plus seek plus volume. Scripting uses the same play plus `pause` verbs as video.',
        detail: 'Treat audio configuration like video minus dimensions, with identical fallback and scripting patterns.'
      },
      {
        term: 'Tracks and scripted controls',
        kind: 'method',
        statement: 'Text **tracks** add captions plus `chapters` for access and navigation. The media interface exposes `play` plus pause plus seek plus volume for custom chrome wired to buttons. Custom controls must stay keyboard reachable with visible focus and labels.',
        detail: 'Ship captions for speech content and mirror every custom button to the underlying media verb with labels.'
      }
    ],
    figures: [
      {
        caption: 'Native media pipeline: sources with MIME types, player attributes, caption tracks, and scripted custom chrome.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Video and audio element pipeline" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">browser as media player</text><rect x="36" y="60" width="200" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">sources</text><text x="52" y="108" font-size="11" fill="currentColor">mp4, webm, ogg</text><text x="52" y="128" font-size="11" fill="currentColor">MIME typed</text><rect x="252" y="60" width="216" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="268" y="86" font-size="12" font-weight="700" fill="currentColor">player</text><text x="268" y="108" font-size="11" fill="currentColor">controls, poster</text><text x="268" y="128" font-size="11" fill="currentColor">loop, muted</text><rect x="484" y="60" width="200" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="86" font-size="12" font-weight="700" fill="currentColor">tracks + code</text><text x="500" y="108" font-size="11" fill="currentColor">captions</text><text x="500" y="128" font-size="11" fill="currentColor">play, pause</text><line x1="236" y1="105" x2="252" y2="105" stroke="currentColor" stroke-width="2"/><line x1="468" y1="105" x2="484" y2="105" stroke="currentColor" stroke-width="2"/><rect x="36" y="166" width="648" height="166" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="192" font-size="12" fill="currentColor">pick first playable source by MIME</text><text x="52" y="214" font-size="12" fill="currentColor">controls on, sound off unless asked</text><text x="52" y="236" font-size="12" fill="currentColor">poster paints before start</text><text x="52" y="258" font-size="12" fill="currentColor">captions carry speech + cues</text><text x="52" y="280" font-size="12" fill="currentColor">custom chrome calls same verbs</text><text x="52" y="302" font-size="12" fill="currentColor">keyboard + labels stay required</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Embed a lesson video accessibly',
        problem: 'A course video must play across browsers with captions and a poster before start.',
        steps: [
          { label: 'Step 1: List sources by reach', text: '```html\n<video controls width=\"640\" height=\"360\" poster=\"lesson.jpg\">\n  <source src=\"lesson.mp4\" type=\"video/mp4\">\n  <source src=\"lesson.webm\" type=\"video/webm\">\n  <p>Your browser cannot play this video.</p>\n</video>\n```\nThe browser picks the first playable MIME while poster paints early.' },
          { label: 'Step 2: Add the caption track', text: 'Add a captions track file for speech plus cues so deaf viewers and search follow the lesson. Mark it default for the primary language.' },
          { label: 'Step 3: Respect autoplay rules', text: 'Leave autoplay off or pair it with muted plus user control. Sound on load startles and many browsers block it.' }
        ],
        result: 'The lesson plays widely with readable first paint and accessible speech coverage.'
      },
      {
        title: 'Wire custom audio controls',
        problem: 'A podcast player needs branded buttons that still expose play, pause, and volume to keyboard users.',
        steps: [
          { label: 'Step 1: Keep the native base', text: '```html\n<audio controls src=\"episode.mp3\">\n  <p>Your browser cannot play this audio.</p>\n</audio>\n```\nNative controls guarantee a working baseline on every viewer.' },
          { label: 'Step 2: Script branded chrome', text: '```js\nconst clip = document.querySelector(\"audio\");\nplayBtn.addEventListener(\"click\", () => clip.play());\npauseBtn.addEventListener(\"click\", () => clip.pause());\n```\nCustom buttons call the same media verbs as native chrome.' },
          { label: 'Step 3: Keep access', text: 'Use real buttons with labels plus visible focus and sync pressed state to playback. Keyboard users get full parity with pointer users.' }
        ],
        result: 'Branded audio chrome plays reliably while staying operable for all input modes.'
      }
    ],
    keyTakeaways: [
      'Native elements render full players with source fallbacks by MIME type.',
      'Controls on plus sound restraint plus poster shape usable first paint.',
      'Containers hold media while codecs compress, and types must match both.',
      'Caption tracks plus labeled scripted controls keep media accessible.'
    ],
    quiz: [
      {
        q: 'How does the browser choose among multiple sources?',
        options: ['It downloads all files at once', 'It picks the first playable MIME type and skips the rest', 'It picks the largest file always', 'It asks the user to choose a codec'],
        answer: 1,
        explanation: 'Step 1: Sources list options in order. Step 2: Types declare playability. Step 3: The browser tests each. Step 4: First playable wins.'
      },
      {
        q: 'Why pair autoplay with muted when autoplay is truly needed?',
        options: ['Policies allow silent motion while blocking unexpected sound', 'Muted files are larger', 'Muted disables controls', 'Muted removes captions'],
        answer: 0,
        explanation: 'Step 1: Sound on load harms users. Step 2: Browsers gate it. Step 3: Silent motion passes. Step 4: Users then opt into sound.'
      },
      {
        q: 'What do caption tracks add?',
        options: ['Larger video dimensions', 'Faster encoding', 'Accessible speech plus cues plus navigation aid', 'Free hosting'],
        answer: 2,
        explanation: 'Step 1: Speech needs text form. Step 2: Tracks carry it. Step 3: Viewers read or search it. Step 4: Access plus comprehension rise.'
      },
      // Media-pattern: accessible native player configuration (original)
      {
        q: 'A custom video skin must match native access. What is required?',
        options: ['Divs with no labels are enough', 'Remove all fallback text', 'Autoplay with sound always', 'Real labeled buttons with focus calling play plus pause plus volume verbs'],
        answer: 3,
        explanation: 'Step 1: Custom chrome replaces native. Step 2: Verbs stay the same. Step 3: Buttons plus labels expose them. Step 4: Focus plus state keep parity.'
      }
    ]
  }
]
