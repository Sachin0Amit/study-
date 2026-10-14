import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 2: HTML5 Document & Semantics
// Sections web-ch2-s1 through web-ch2-s5. Master study content.
// ============================================================================

export const webCh02Content: SectionContent[] = [
  // ---------------------------------------------------------------- web-ch2-s1
  {
    sectionId: 'web-ch2-s1',
    readingTime: 8,
    intro: 'HTML is a language of elements built from tags, attributes, and text, parsed into a document with strict rules about nesting and structure. This section covers syntax, the doctype, and the split between head metadata and body content. Get this skeleton right and every later chapter has a valid page to style and script.',
    objectives: [
      'Write well-formed elements with correct tag, attribute, and nesting syntax',
      'Explain the purpose of the doctype and the lang attribute on html',
      'Separate head metadata from body content and place each tag correctly',
      'Add charset, viewport, title, and description meta tags to a document'
    ],
    concepts: [
      {
        term: 'Elements, tags, and attributes',
        kind: 'definition',
        statement: 'An **element** is a unit of meaning built from a **start tag**, content, and an **end tag**, such as `<p>hello</p>`, with **attributes** carrying extra data as `name="value"` pairs inside the start tag. **Void elements** like `<img>` and `<br>` have no end tag because they cannot contain content. Whitespace between attributes is required, and attribute values should always be **quoted** so special characters parse predictably.',
        detail: 'Tags describe structure while attributes configure it, which is why the same img tag shows different pictures through different src values.'
      },
      {
        term: 'Doctype and standards mode',
        kind: 'definition',
        statement: 'The `<!DOCTYPE html>` declaration is a **history-triggered switch** that tells the browser to parse the page in **standards mode** with modern layout rules. It is not an element, carries no attributes, and must be the **first line** of the document. Omitting it drops the browser into **quirks mode**, where old box-model bugs return and CSS behaves inconsistently.',
        detail: 'One line at the top prevents an entire family of cross-browser layout mysteries.'
      },
      {
        term: 'Document skeleton: html, head, body',
        kind: 'notation',
        statement: 'Every page wraps content in `<html lang="en">`, which holds exactly one `<head>` for **metadata** and one `<body>` for **visible content**. The `lang` attribute names the page language for **screen readers** and search engines. Scripts, styles, and metadata belong in the head or at the end of the body, but never as loose text directly inside `html`.',
        detail: 'Assistive technology announces the language and switches pronunciation from this single attribute.'
      },
      {
        term: 'Head metadata that controls rendering',
        kind: 'method',
        statement: 'Three head tags shape every render: `<meta charset="utf-8">` selects the **character encoding**, `<meta name="viewport">` sets the **mobile layout width**, and `<title>` names the **tab and bookmark**. Declaring `charset` first avoids mojibake, and the viewport tag with `width=device-width` stops phones from shrinking desktop layouts. The head also hosts linked `stylesheets` and `scripts` plus social preview tags.',
        detail: 'Pages missing the viewport tag look tiny on phones because the browser assumes a desktop-width canvas.'
      },
      {
        term: 'Nesting and the parser',
        kind: 'law',
        statement: 'Elements must **nest strictly**: inner elements close before outer ones, so `<strong><em>text</em></strong>` is valid while overlapping tags are not. Block containers like `<div>` and `<p>` may hold inline content like `<a>` and `<strong>`, but **paragraphs cannot contain** block children such as headings or divs. When markup overlaps, the **parser repairs** it by closing and reopening elements, which moves nodes somewhere surprising.',
        detail: 'Validation catches nesting faults early because the repaired DOM rarely matches the intended outline.'
      }
    ],
    examples: [
      {
        title: 'Build a minimal valid document',
        problem: 'Write the smallest HTML5 page that passes validation and renders predictably on phones.',
        steps: [
          { label: 'Step 1: Doctype and language', text: '```html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Hello page</title>\n</head>\n<body>\n  <p>Hello, web.</p>\n</body>\n</html>\n```\nThe doctype triggers standards mode, `lang` names the language, and `charset` comes before any content bytes.' },
          { label: 'Step 2: Check head versus body', text: 'Metadata such as `title` and `meta` sits in the head, while the visible `p` sits in the body. Nothing visible leaks into the head and no metadata litters the body.' },
          { label: 'Step 3: Validate', text: 'Paste the file into the Nu Html Checker and fix any reported nesting or missing-tag errors. A green validation pass means the parser needs no repairs.' }
        ],
        result: 'A compact skeleton now guarantees standards mode, correct encoding, mobile sizing, and a named tab.'
      },
      {
        title: 'Repair an overlapping-nesting bug',
        problem: 'A paragraph was written to hold a div, and the layout breaks. Diagnose and fix it.',
        steps: [
          { label: 'Step 1: Spot the violation', text: '```html\n<!-- broken: p cannot contain div -->\n<p>Intro text<div class="callout">Note</div></p>\n```\nThe `p` element accepts only phrasing content, so a `div` child violates the content model.' },
          { label: 'Step 2: Predict the repair', text: 'The parser closes the paragraph before the div and drops the stray closing tag, producing siblings instead of a parent and child. Styles targeting `p div` therefore never match.' },
          { label: 'Step 3: Rewrite validly', text: '```html\n<!-- fixed: siblings inside a section -->\n<section>\n  <p>Intro text</p>\n  <div class="callout">Note</div>\n</section>\n```\nSiblings inside a `section` preserve the visual order with a DOM that matches the stylesheet.' }
        ],
        result: 'Replacing illegal nesting with explicit siblings aligns the DOM, the styles, and the author intent.'
      }
    ],
    keyTakeaways: [
      'Elements combine tags, quoted attributes, and content, with void elements taking no end tag.',
      'The doctype must lead the file to keep browsers in standards mode.',
      'html wraps one head for metadata and one body for visible content with a lang attribute.',
      'Charset, viewport, and title tags control encoding, mobile layout, and tab naming.',
      'Strict nesting matters because the parser silently repairs overlapping or illegal children.'
    ],
    quiz: [
      {
        q: 'What does <!DOCTYPE html> do?',
        options: ['It imports a JavaScript framework', 'It switches the browser into standards mode for modern parsing and layout', 'It sets the page background', 'It validates forms'],
        answer: 1,
        explanation: 'The doctype is a historical switch: present means standards mode, absent means quirks mode with legacy bugs.'
      },
      {
        q: 'Where do <title> and <meta charset> belong?',
        options: ['Directly inside <html>', 'Inside <body>', 'Inside <head>', 'Inside <footer>'],
        answer: 2,
        explanation: 'Head holds metadata about the document while body holds visible content, so title and charset live in the head.'
      },
      {
        q: 'Why is <p>Text<div>Note</div></p> invalid?',
        options: ['Paragraphs cannot contain block-level children like div', 'Divs cannot have classes', 'Paragraphs cannot hold text', 'Comments are required'],
        answer: 0,
        explanation: 'The p content model allows only phrasing content, so the parser closes the paragraph early and repairs the tree.'
      },
      {
        q: 'Why quote all attribute values?',
        options: ['Quotes speed up downloads', 'Quoted values parse predictably when they contain spaces or special characters', 'Unquoted values are a security feature', 'Quotes are required only in CSS'],
        answer: 1,
        explanation: 'Quotes delimit exactly where a value ends, preventing spaces and symbols from splitting it into new tokens.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch2-s2
  {
    sectionId: 'web-ch2-s2',
    readingTime: 9,
    intro: 'Most pages are headings, paragraphs, lists, and links arranged in a meaningful order. This section teaches the text elements that carry document meaning and the link patterns that connect pages. Done well, the markup reads like an outline even with styles disabled.',
    objectives: [
      'Apply the heading hierarchy from h1 to h6 without skipping levels',
      'Mark paragraphs, emphasis, code, and quotations with inline semantics',
      'Choose between ordered, unordered, and description lists for grouped content',
      'Write links with correct href values, targets, and accessible names'
    ],
    concepts: [
      {
        term: 'Headings hierarchy',
        kind: 'law',
        statement: 'Headings from `<h1>` to `<h6>` form the **document outline**, with exactly one `h1` naming the page and deeper levels **nesting in order** without skips. Screen readers and search engines navigate by this outline, treating headings as a table of contents. Using headings for **sizing rather than structure** destroys that map, since visual size belongs to `CSS`.',
        detail: 'Skipping from h1 to h4 confuses assistive tech because the missing levels imply sections that do not exist.'
      },
      {
        term: 'Paragraphs and inline semantics',
        kind: 'definition',
        statement: 'The `<p>` element wraps a **block of prose**, while inline elements mark meaning inside it: `<strong>` for **strong importance**, `<em>` for **stress emphasis**, and `<code>` for **code mentions**. Quotations use `<blockquote>` for **block quotes** with a `cite` source and `<q>` for **inline quotes**. Line breaks with `<br>` are for verse and addresses only, never for paragraph spacing.',
        detail: 'Strong and em convey meaning to assistive tech, unlike bold and italic styling which only change appearance.'
      },
      {
        term: 'Ordered, unordered, and description lists',
        kind: 'definition',
        statement: 'Lists group related items where each `<li>` is one member: `<ul>` marks an **unordered** set, `<ol>` marks an **ordered** sequence with `start` and `type` controls, and `<dl>` pairs **terms** in `<dt>` with **definitions** in `<dd>`. Navigation menus, breadcrumbs, and steps are all lists because their items belong together. Nesting a full `ul` or `ol` inside a parent `li` builds sub-steps correctly.',
        detail: 'Announcing list counts helps screen reader users, which stray divs pretending to be lists never provide.'
      },
      {
        term: 'Links and href values',
        kind: 'method',
        statement: 'The `<a>` element turns its content into a **hyperlink** whose `href` names the destination: absolute `https://` URLs for other sites, **root-relative** `/docs` paths for same-site pages, and `#id` **fragments** for in-page jumps. The `target="_blank"` value opens a new tab and should pair with `rel="noopener"` for **process isolation**. **Descriptive link text** like `Read the install guide` replaces bare `click here` so the purpose survives out of context.',
        detail: 'Fragment links need a matching id on the destination element, otherwise the jump silently lands at the top.'
      },
      {
        term: 'Text-level details that matter',
        kind: 'insight',
        statement: 'Small elements prevent big misunderstandings: `<time datetime="2026-05-01">` gives machines a **parseable date**, `<abbr title="...">` expands an **abbreviation**, and `<mark>` highlights a **relevant passage**. Escaping with `&lt;`, `&gt;`, and `&amp;` shows literal **angle brackets** instead of starting new tags. These details make prose robust for search, translation, and assistive tools.',
        detail: 'Human-readable dates vary by locale, so the datetime attribute carries the canonical value for sorting and calendars.'
      }
    ],
    examples: [
      {
        title: 'Outline an article correctly',
        problem: 'Structure a recipe page with a title, two sections, steps, and an ingredient list.',
        steps: [
          { label: 'Step 1: Headings in order', text: '```html\n<h1>Lemon Cake</h1>\n<h2>Ingredients</h2>\n<h2>Method</h2>\n<h3>Step details</h3>\n```\nOne `h1` names the page, `h2` sections divide it, and `h3` subdivides without skipping from `h1` to `h3`.' },
          { label: 'Step 2: Lists for groups', text: 'Ingredients become a `ul` of `li` items while method steps become an `ol`, so numbering and bullets carry meaning rather than decoration.' },
          { label: 'Step 3: Inline meaning', text: 'Mark the oven setting with `<strong>` for importance and the pan size with `<code>` so both survive as semantics, not just styling.' }
        ],
        result: 'The page outline reads as title, two sections, and a subsection even in a screen reader rotor or text-only view.'
      },
      {
        title: 'Write links that survive anywhere',
        problem: 'Add external, internal, and in-page links to a docs page with safe behavior.',
        steps: [
          { label: 'Step 1: Three href shapes', text: '```html\n<a href="https://developer.mozilla.org/">MDN reference</a>\n<a href="/guides/install">Install guide</a>\n<a href="#troubleshooting">Jump to troubleshooting</a>\n```\nAbsolute, root-relative, and fragment destinations each match their use: off-site, same-site, and same-page.' },
          { label: 'Step 2: Safe new tabs', text: 'External links that need a new tab add `target="_blank"` with `rel="noopener"` so the opened page cannot reach back into the opener.' },
          { label: 'Step 3: Name the purpose', text: 'Link text describes the destination instead of the mechanics, so a list of links read aloud still makes sense.' }
        ],
        result: 'Every link resolves correctly, opens safely, and announces a purpose that needs no surrounding context.'
      }
    ],
    keyTakeaways: [
      'One h1 plus ordered h2 through h6 headings form the navigable document outline.',
      'Paragraphs hold prose while strong, em, code, blockquote, and q mark inline meaning.',
      'Unordered, ordered, and description lists group items that belong together.',
      'Hrefs use absolute, root-relative, or fragment forms with descriptive link text.',
      'Target blank links need rel noopener, and dates and abbreviations need machine-readable attributes.'
    ],
    quiz: [
      {
        q: 'Which heading pattern is correct?',
        options: ['h1 then h4 then h2', 'One h1, then h2 sections, then h3 subsections in order', 'Multiple h1 elements per section for sizing', 'No h1 at all'],
        answer: 1,
        explanation: 'Headings nest in order without skips so assistive tech and search can reconstruct the document outline.'
      },
      {
        q: 'When should <br> be used?',
        options: ['To add space between paragraphs', 'For line breaks inside verse or addresses where the break is content', 'To clear floats', 'To separate sections'],
        answer: 1,
        explanation: 'Breaks encode meaningful line endings, while paragraph and section spacing belongs to CSS margins.'
      },
      {
        q: 'What is wrong with <a href="#">click here</a>?',
        options: ['Nothing, it is ideal', 'The text describes mechanics instead of the destination and fails out of context', 'Hashes are illegal in href', 'Anchors cannot contain text'],
        answer: 1,
        explanation: 'Link text should name the destination so it stays useful in link lists and screen reader rotors.'
      },
      {
        q: 'Which list fits a glossary of terms and definitions?',
        options: ['<ul>', '<ol>', '<dl> with dt and dd pairs', '<table> with divs'],
        answer: 2,
        explanation: 'Description lists pair each term in dt with its definition in dd, which is exactly the glossary shape.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch2-s3
  {
    sectionId: 'web-ch2-s3',
    readingTime: 8,
    intro: 'Images carry product photos, diagrams, and delight, but each one costs bytes and layout stability. This section teaches img essentials, meaningful alt text, figure captions, and the responsive picture system. You will serve sharp images on every screen without shipping desktop weight to phones.',
    objectives: [
      'Write img elements with src, alt, width, and height for stable layout',
      'Compose alt text that replaces the image purpose for non-sighted users',
      'Use figure and figcaption to bind images to their captions',
      'Serve responsive images with srcset, sizes, picture, and modern formats'
    ],
    concepts: [
      {
        term: 'img essentials and layout stability',
        kind: 'definition',
        statement: 'The `<img>` element embeds a raster image through its **`src`** address, and it is a **void element** with no end tag. Including **`width` and `height`** attributes reserves the aspect box before bytes arrive, preventing **cumulative layout shift** as images load. The `loading="lazy"` attribute defers **below-the-fold** images until scroll approaches, while `decoding="async"` keeps decoding off the main thread.',
        detail: 'Reserving the box is a performance fix: content stops jumping once image dimensions are known upfront.'
      },
      {
        term: 'Alt text as replacement',
        kind: 'method',
        statement: 'The **`alt`** attribute replaces the image when it cannot be seen, so it should state the **purpose**, not the pixels. Informative images get concise functional text like `alt="Golden lemon cake on a plate"`, while **decorative** images take an empty `alt=""` so assistive tech skips them. Complex charts need a short alt plus a nearby **text equivalent** such as a table or described summary.',
        detail: 'Good alt completes the sentence formed by surrounding content, while redundant phrases like image of waste the listener time.'
      },
      {
        term: 'Figure and figcaption',
        kind: 'definition',
        statement: 'The `<figure>` element groups an **image with its caption**, and `<figcaption>` holds the **visible explanation** of that image. Captions can credit sources, explain trends, or link to data, keeping the association explicit for browsers and assistive tech. A figure may hold multiple images plus one caption when they form a single **illustrated unit**.',
        detail: 'Caption text is visible to everyone while alt stays invisible, so they complement rather than duplicate each other.'
      },
      {
        term: 'Responsive images: srcset and sizes',
        kind: 'method',
        statement: 'The **`srcset`** attribute lists **candidate files** with `w` width descriptors, and **`sizes`** tells the browser how wide the image will render at each viewport. The browser then picks the **smallest sufficient file** given viewport width and `device pixel ratio`, saving mobile data without blurring desktop screens. A plain `src` remains as the **fallback** for older parsers.',
        detail: 'Width descriptors plus sizes beat pixel-density descriptors for fluid layouts because they account for rendered CSS width.'
      },
      {
        term: 'Picture, types, and modern formats',
        kind: 'method',
        statement: 'The `<picture>` element wraps multiple `<source>` options plus a fallback `<img>`, switching by **`media` queries** or **`type`** format support. Serving **`AVIF`** first, then **`WebP`**, then `JPEG` or `PNG` gives each browser the **smallest format** it understands. **Art direction** uses media sources to crop differently on narrow screens, while format switching keeps the same crop in lighter bytes.',
        detail: 'Modern formats can halve file size at equal quality, which directly improves loading scores on image-heavy pages.'
      }
    ],
    examples: [
      {
        title: 'Make an image stable and accessible',
        problem: 'Add a hero photo of a cake so layout never jumps and screen readers get its purpose.',
        steps: [
          { label: 'Step 1: Size the box', text: '```html\n<figure>\n  <img src="cake-1200.jpg" alt="Golden lemon cake with glaze on a white plate" width="1200" height="800" loading="eager" decoding="async">\n  <figcaption>Our signature lemon cake, glazed each morning.</figcaption>\n</figure>\n```\nExplicit `width` and `height` reserve a box with the right aspect ratio, and `figcaption` carries the visible story.' },
          { label: 'Step 2: Write purpose alt', text: 'The alt names the dish and setting rather than listing pixels or repeating the caption. A decorative divider elsewhere on the page would instead use `alt=""`.' },
          { label: 'Step 3: Choose loading', text: 'Hero images stay `eager` because they fill the first viewport, while gallery images below switch to `loading="lazy"`.' }
        ],
        result: 'The photo appears without shifting text, announces its purpose aloud, and shows a caption to sighted readers.'
      },
      {
        title: 'Serve responsive formats',
        problem: 'Ship one sharp image to phones, tablets, and desktops without wasting bytes.',
        steps: [
          { label: 'Step 1: List candidates', text: '```html\n<img src="cake-800.jpg"\n     srcset="cake-400.jpg 400w, cake-800.jpg 800w, cake-1600.jpg 1600w"\n     sizes="(max-width: 600px) 90vw, 800px"\n     alt="Sliced lemon cake showing crumb">\n```\nThe browser compares rendered width from `sizes` against candidate widths and device pixels to pick the leanest sharp file.' },
          { label: 'Step 2: Prefer modern formats', text: '```html\n<picture>\n  <source type="image/avif" srcset="cake-400.avif 400w, cake-800.avif 800w">\n  <source type="image/webp" srcset="cake-400.webp 400w, cake-800.webp 800w">\n  <img src="cake-800.jpg" alt="Sliced lemon cake showing crumb">\n</picture>\n```\nEach browser takes the first `type` it supports and falls back to JPEG otherwise.' },
          { label: 'Step 3: Verify savings', text: 'Reload with DevTools Network throttled to a phone viewport and confirm a small candidate loads, then widen the viewport and confirm a larger one replaces it.' }
        ],
        result: 'Phones fetch a small modern file while desktops fetch a large one, all from one markup block with a safe fallback.'
      }
    ],
    keyTakeaways: [
      'Img needs src plus width and height so the layout box exists before bytes arrive.',
      'Alt text replaces image purpose, with empty alt marking purely decorative images.',
      'Figure plus figcaption bind an image to its visible explanation.',
      'Srcset with sizes lets the browser pick the smallest file that stays sharp.',
      'Picture with AVIF and WebP sources delivers modern formats with guaranteed fallbacks.'
    ],
    quiz: [
      {
        q: 'Why include width and height on <img>?',
        options: ['To prevent upscaling only', 'To reserve the aspect box and prevent layout shift before loading', 'To set the file size', 'To replace alt text'],
        answer: 1,
        explanation: 'Known dimensions let the browser hold the right box during layout, so text stops jumping when bytes arrive.'
      },
      {
        q: 'Which alt is best for a decorative divider flourish?',
        options: ['alt="A beautiful swirling gray divider flourish image"', 'alt="divider"', 'alt=""', 'No alt attribute at all'],
        answer: 2,
        explanation: 'Empty alt tells assistive tech the image is decorative and safe to skip entirely.'
      },
      {
        q: 'What do srcset width descriptors plus sizes achieve?',
        options: ['They change image colors', 'They let the browser choose the smallest file that renders sharply at the actual display size', 'They watermark images', 'They disable caching'],
        answer: 1,
        explanation: 'Sizes predicts rendered CSS width so the browser can match it against candidate file widths and pixel density.'
      },
      {
        q: 'What is the role of the fallback <img> inside <picture>?',
        options: ['It is optional decoration', 'It guarantees an image for browsers matching no source type or media', 'It speeds up CSS', 'It replaces figcaption'],
        answer: 1,
        explanation: 'Sources are opinions and the inner img is the guarantee, so every browser ends with a renderable file.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch2-s4
  {
    sectionId: 'web-ch2-s4',
    readingTime: 7,
    intro: 'Tables are the correct tool for tabular data where rows and columns both carry meaning, such as schedules and price grids. This section builds accessible tables with headers, captions, and scoped cells. You will also learn when a table is the wrong tool and a list or grid serves better.',
    objectives: [
      'Build a table with table, thead, tbody, tfoot, tr, th, and td in order',
      'Add captions and scope attributes so headers announce correctly',
      'Span cells with colspan and rowspan without breaking the grid',
      'Decide when tabular data needs a table versus a list or cards'
    ],
    concepts: [
      {
        term: 'Table skeleton',
        kind: 'notation',
        statement: 'A `<table>` holds rows in `<tr>` elements, grouped into an optional `<thead>` for **column labels**, `<tbody>` for **data rows**, and `<tfoot>` for **totals or notes**. Header cells use `<th>` while data cells use `<td>`, and every row should hold the **same column count** once spans are counted. Grouping sections lets long tables repeat headers and lets styles target each band separately.',
        detail: 'Explicit thead and tbody also help printers repeat headers and assistive tech announce row position.'
      },
      {
        term: 'Captions and headers with scope',
        kind: 'method',
        statement: 'The `<caption>` element gives the table a **visible title** as its first child, naming what the grid shows. Adding `scope="col"` marks **column headers** and `scope="row"` marks **row headers**, so screen readers announce coordinates like city plus temperature. The `id` plus `headers` pairing handles **complex tables** where one cell answers to multiple headers.',
        detail: 'Without scope, a listener hears bare values with no idea which row or column each belongs to.'
      },
      {
        term: 'Spanning with colspan and rowspan',
        kind: 'method',
        statement: 'The **`colspan`** attribute stretches a cell across **columns** and **`rowspan`** stretches it across **rows**, merging grid slots for grouped labels. A cell with `colspan="2"` consumes two column positions, so its row needs one fewer cell to stay aligned. Over-spanning breaks the grid silently, so **counting columns** per row is the essential validation step.',
        detail: 'Spans describe grouped meaning such as a weekend header over two day columns, not visual shortcuts for padding.'
      },
      {
        term: 'When a table fits and when it does not',
        kind: 'insight',
        statement: 'Reach for a table when **both axes mean something**: removing either the row or column headers would lose information. Use **lists** for one-dimensional sequences and **cards or grids** for independent items that merely sit side by side. Tables used for **page layout** harm accessibility because assistive tech announces layout cells as data relationships that do not exist.',
        detail: 'The test is semantic: if sorting or looking up by headers makes sense, the content is tabular.'
      },
      {
        term: 'Styling and responsive tables',
        kind: 'method',
        statement: 'The `border-collapse: collapse` rule merges **adjacent cell borders** into single lines for a clean grid. Zebra striping with `tbody tr:nth-child(even)` aids **row tracking** across wide tables. For narrow screens, wrap the table in a container with `overflow-x: auto` so it **scrolls horizontally** instead of crushing columns or breaking the page layout.',
        detail: 'Horizontal scroll preserves header alignment, while squashing columns destroys the very comparisons the table exists for.'
      }
    ],
    examples: [
      {
        title: 'Build an accessible schedule table',
        problem: 'Present a three-city temperature table that announces correctly to screen readers.',
        steps: [
          { label: 'Step 1: Caption and head', text: '```html\n<table>\n  <caption>Midday temperatures, May 2026</caption>\n  <thead>\n    <tr><th scope="col">City</th><th scope="col">Mon</th><th scope="col">Tue</th></tr>\n  </thead>\n  <tbody>\n    <tr><th scope="row">Oslo</th><td>14C</td><td>16C</td></tr>\n    <tr><th scope="row">Cairo</th><td>31C</td><td>33C</td></tr>\n  </tbody>\n</table>\n```\nColumn scopes label days and row scopes label cities, so each value announces with both coordinates.' },
          { label: 'Step 2: Add a footer total', text: 'A `tfoot` row with `colspan` can carry a source note across all three columns without adding a fake data row.' },
          { label: 'Step 3: Make it scroll', text: 'Wrap the table in `<div style="overflow-x: auto">` so narrow phones scroll the grid intact.' }
        ],
        result: 'Sighted users scan aligned columns while assistive users hear each temperature with its city and day.'
      },
      {
        title: 'Choose table versus list',
        problem: 'Decide the markup for a pricing grid and for a set of team member bios.',
        steps: [
          { label: 'Step 1: Test the pricing grid', text: 'Plans run down rows while features run across columns, and a cell means the intersection of one plan and one feature. Both axes carry meaning, so a `table` with `th` headers is correct.' },
          { label: 'Step 2: Test the bios', text: 'Each bio stands alone: removing neighboring cards loses nothing about the remaining person. A `ul` of articles or a CSS grid of cards fits, and a table would falsely imply row relationships.' },
          { label: 'Step 3: Encode the choice', text: '```html\n<!-- bios: one-dimensional set, not tabular -->\n<ul class="team">\n  <li><h3>Ada</h3><p>Designer</p></li>\n  <li><h3>Lin</h3><p>Engineer</p></li>\n</ul>\n```\nList markup announces counts and order without inventing header coordinates.' }
        ],
        result: 'The pricing comparison earns a table while the independent bios earn a list, matching semantics to structure.'
      }
    ],
    keyTakeaways: [
      'Tables group tr rows into thead, tbody, and tfoot with th headers and td data cells.',
      'Caption titles the table while scope col and scope row announce header coordinates.',
      'Colspan and rowspan merge slots and demand column counting to keep the grid aligned.',
      'Tables fit two-dimensional lookups while lists and cards fit independent sequences.',
      'Collapsed borders, zebra rows, and scroll wrappers keep tables clean and responsive.'
    ],
    quiz: [
      {
        q: 'Which element gives a table its visible title?',
        options: ['<title>', '<caption> as the first child of table', '<h1> inside tbody', '<label>'],
        answer: 1,
        explanation: 'Caption is the table-titling element, placed first so assistive tech announces it before the grid.'
      },
      {
        q: 'What does scope="row" on a th mean?',
        options: ['The header labels its row', 'The header spans all rows', 'The cell holds totals', 'The table scrolls'],
        answer: 0,
        explanation: 'Row scope binds the header to its row siblings, so values announce with their row label.'
      },
      {
        q: 'A cell has colspan="2" in a three-column table. How many more cells does its row need?',
        options: ['Three', 'Two', 'One', 'Zero'],
        answer: 2,
        explanation: 'The spanning cell consumes two of three slots, leaving exactly one slot for one more cell.'
      },
      {
        q: 'Which content should NOT use a table?',
        options: ['Train timetables', 'Pricing comparisons', 'Independent team bios laid out as cards', 'Financial statements'],
        answer: 2,
        explanation: 'Bios are independent items with no shared axes, so a list or card grid avoids false data relationships.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch2-s5
  {
    sectionId: 'web-ch2-s5',
    readingTime: 8,
    intro: 'Semantic elements describe what content is rather than how it looks, giving browsers, assistive tech, and search engines a shared map. This section covers landmarks, article versus section, heading order, and the SEO basics that follow from good semantics. Pages built this way navigate well by keyboard and rank on their merits.',
    objectives: [
      'Place header, nav, main, aside, and footer landmarks correctly on a page',
      'Choose between article, section, and div for grouped content',
      'Maintain heading order and landmark uniqueness for navigation',
      'Apply semantic SEO basics with titles, descriptions, and heading keywords'
    ],
    concepts: [
      {
        term: 'Landmark elements',
        kind: 'definition',
        statement: 'Landmarks are **semantic containers** that label page regions: `<header>` for **introductory matter**, `<nav>` for **navigation blocks**, `<main>` for the **primary content** that appears once per page, `<aside>` for **tangential content**, and `<footer>` for **closing matter**. Screen readers list landmarks in a **rotor menu** so users jump straight to content. A page needs exactly one `main`, while repeated `nav` regions need distinct `aria-label` names.',
        detail: 'Landmarks turn a flat div soup into a labeled map that keyboard and screen reader users can traverse in seconds.'
      },
      {
        term: 'Article versus section versus div',
        kind: 'definition',
        statement: 'An `<article>` is an **independently distributable** unit such as a post or card that still makes sense syndicated alone. A `<section>` is a **thematic grouping** that normally opens with a **heading**, such as features or pricing. A `<div>` is a **meaningless wrapper** for styling and scripting only, carrying no outline or landmark meaning.',
        detail: 'The test is reuse: if the block survives alone in a feed reader it is an article, and if it needs its heading to make sense it is a section.'
      },
      {
        term: 'Heading order and landmark navigation',
        kind: 'law',
        statement: 'Headings should **descend without skipping** and every section should open with the **next logical level**, so the outline mirrors the visual hierarchy. Landmark regions need unique accessible names when repeated, using `aria-label` such as `<nav aria-label="Primary">`. The **skip link** pattern with `<a href="#main">` lets keyboard users **bypass navigation** straight to content.',
        detail: 'Skipped levels and duplicate unnamed landmarks force assistive users to guess structure that sighted users see instantly.'
      },
      {
        term: 'How semantics feeds SEO',
        kind: 'insight',
        statement: 'Search crawlers weight **semantic signals**: the `<title>` names the result, the `meta description` writes its **snippet**, headings declare **topical hierarchy**, and descriptive `anchor text` labels each link. **Crawlable HTML** with real links beats JavaScript-only navigation because content exists before scripting. Semantic markup is therefore **SEO groundwork**, not a ranking trick.',
        detail: 'Thin or duplicated titles waste crawl attention, while one precise title plus summary per page earns clear snippets.'
      },
      {
        term: 'SEO basics checklist',
        kind: 'method',
        statement: 'Each page needs one **descriptive title** under about sixty characters, one **unique meta description** summarizing the page, one `h1` matching **search intent**, and **canonical** plus **Open Graph** tags for duplicates and sharing. Images need `alt` text and files need **readable URLs** like `/guides/install` rather than query soup. The `robots` meta and `sitemap` then guide **crawling and indexing** without blocking valuable pages.',
        detail: 'Share previews and canonical tags decide which URL gets credit when one page is reachable several ways.'
      }
    ],
    examples: [
      {
        title: 'Landmark a blog page',
        problem: 'Convert a div-only blog layout into landmarked semantics with a skip link.',
        steps: [
          { label: 'Step 1: Map the regions', text: '```html\n<a href="#main">Skip to content</a>\n<header><nav aria-label="Primary">…links…</nav></header>\n<main id="main">\n  <article><h1>Post title</h1><p>Body…</p></article>\n  <aside><h2>Related</h2>…</aside>\n</main>\n<footer>…colophon…</footer>\n```\nOne `main` holds the article plus its tangential aside, and the skip link targets it directly.' },
          { label: 'Step 2: Name repeated landmarks', text: 'Footer navigation gets `aria-label="Footer"` so it never collides with the primary nav in the rotor menu.' },
          { label: 'Step 3: Test by keyboard', text: 'Press Tab from the address bar: the skip link appears first and Enter jumps focus into main, bypassing the menu.' }
        ],
        result: 'Keyboard and screen reader users reach content in two keystrokes on a page that looks unchanged visually.'
      },
      {
        title: 'Give a page its SEO foundation',
        problem: 'Add the semantic SEO essentials to a guide page about installing an app.',
        steps: [
          { label: 'Step 1: Head tags', text: '```html\n<title>Install StudyVerse on Linux — Guide</title>\n<meta name="description" content="Install StudyVerse on Linux in five minutes with verified steps and troubleshooting.">\n<link rel="canonical" href="https://example.com/guides/install">\n```\nThe title matches query intent, the description becomes the snippet, and the canonical names the credited URL.' },
          { label: 'Step 2: Heading and links', text: 'One `h1` restates the install goal, `h2` elements divide steps and troubleshooting, and anchors use text like `Download the Linux package`.' },
          { label: 'Step 3: Verify rendering', text: 'Fetch the page with styles and scripts disabled and confirm the guide still reads in order with working links.' }
        ],
        result: 'Crawlers find a titled, described, canonical page whose headings and links state its topic without styling.'
      }
    ],
    keyTakeaways: [
      'Header, nav, main, aside, and footer landmarks label regions for fast navigation.',
      'Articles syndicate alone, sections group under headings, and divs carry no meaning.',
      'Ordered headings, unique landmark names, and skip links keep navigation predictable.',
      'Semantic signals like titles, headings, and anchor text drive fair search snippets.',
      'Titles, descriptions, canonical tags, alt text, and readable URLs form the SEO baseline.'
    ],
    quiz: [
      {
        q: 'How many <main> elements should a page have?',
        options: ['Zero', 'Exactly one', 'One per section', 'As many as possible'],
        answer: 1,
        explanation: 'Main identifies the single primary content region so assistive tech can jump to it unambiguously.'
      },
      {
        q: 'When is <article> the right choice?',
        options: ['For any styled box', 'For independently distributable content like a post or card', 'Only for newspaper sites', 'For navigation menus'],
        answer: 1,
        explanation: 'Articles survive syndication alone, while sections need their context and divs mean nothing.'
      },
      {
        q: 'What does a skip link do?',
        options: ['It skips validation', 'It lets keyboard users jump past navigation straight to content', 'It hides the footer', 'It preloads images'],
        answer: 1,
        explanation: 'The first Tab stop offers a bypass link targeting main content, saving dozens of keystrokes.'
      },
      {
        q: 'Which head tag writes the search-result snippet?',
        options: ['<title>', 'Meta description', '<h1>', 'Canonical link'],
        answer: 1,
        explanation: 'Search engines render the meta description as the snippet under the title when it summarizes the page well.'
      },
      // Placement-pattern: heading order and landmark naming (original)
      {
        q: "An audit finds `<h1>Shop</h1>` followed directly by `<h3>Filters</h3>`, plus two `<nav>` regions with no labels. What should change?",
        options: ["Nothing: heading levels are purely visual styling hooks", "Remove all headings and use large-text `<div>` elements instead", "Restore the order to `<h1>` then `<h2>`, and give each `<nav>` an `aria-label` so assistive tools can tell them apart", "Keep the skipped level but add `tabindex` to every heading"],
        answer: 2,
        explanation: "Step 1: The data given is a skipped heading level and two identically named navigation landmarks. Step 2: The governing rules are that heading order conveys document structure to assistive navigation, so a jump from `h1` to `h3` implies a missing section, and that duplicate landmarks need accessible names to stay distinguishable. Step 3: Applying the rules, the `h3` becomes an `h2` under the page title, and each `nav` gains a label such as primary and footer, so rotor menus list meaningful entries. Step 4: The distractors fail because headings carry structure beyond styling, removing them destroys navigation, and focusability never repairs a broken outline. Step 5: Therefore the fix is sequential headings plus labeled landmarks."
      },
      // Placement-pattern: main and article structure for feeds (original)
      {
        q: "A news homepage shows ten story cards, each with a headline, summary, and link, all inside the page primary content. Which structure is correct?",
        options: ["One `<main>` holding ten `<article>` cards, each self-contained with its own heading", "Ten `<main>` elements, one wrapping each card", "One `<article>` wrapping ten `<main>` elements", "Only `<div>` elements, because semantics slow down rendering"],
        answer: 0,
        explanation: "Step 1: The data given is a primary content region containing ten independently readable stories. Step 2: The governing rules are that a page carries exactly one `<main>` identifying its primary content, and that `<article>` marks independently distributable content such as a post or card. Step 3: Applying the rules, the single `main` gives assistive tools one jump target, each card becomes an `article` with its own heading, and syndication of any card still makes sense alone. Step 4: The distractors fail because multiple mains destroy the unique-target contract, nesting mains inside an article inverts the landmark roles, and element choice has no meaningful rendering cost. Step 5: Therefore one `main` with ten `article` children is the correct structure."
      }
    ]
  }
]
