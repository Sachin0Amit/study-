import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 3: HTML Forms, Media & DOM
// Sections web-ch3-s1 through web-ch3-s5. Master study content.
// ============================================================================

export const webCh03Content: SectionContent[] = [
  // ---------------------------------------------------------------- web-ch3-s1
  {
    sectionId: 'web-ch3-s1',
    readingTime: 9,
    intro: 'Forms turn readers into participants by collecting names, choices, files, and payments. This section covers the form element, labels, input types, selection controls, and buttons. You will build forms whose data arrives named, grouped, and ready for the server.',
    objectives: [
      'Wire a form with action, method, labels, and named controls',
      'Choose the correct input type for text, numbers, dates, and choices',
      'Build selects, textareas, checkboxes, and radio groups with values',
      'Group controls with fieldset and legend and pick the right button type'
    ],
    concepts: [
      {
        term: 'Form, action, and method',
        kind: 'definition',
        statement: 'The `<form>` element collects its **named controls** into one submission sent to the **`action`** URL with the **`method`** verb. `GET` appends data to the `URL` for safe queries, while `POST` carries data in the **request body** for changes. The `name` attribute on each control becomes the **submission key**, so unnamed controls are silently dropped.',
        detail: 'Search boxes use GET so results stay shareable, while signup and payment forms use POST so data stays out of addresses.'
      },
      {
        term: 'Labels and accessible naming',
        kind: 'law',
        statement: 'Every control needs a **programmatic label**: either a `<label for="id">` pointing at the control `id`, or a wrapping `<label>` around the control itself. Clicking the label then **focuses or toggles** the control, enlarging its hit area for pointer and touch users. The `placeholder` attribute is a **hint, not a label**, because it vanishes on input and is often skipped by assistive tech.',
        detail: 'Visible persistent labels plus matching for and id pairs are the single biggest form accessibility win.'
      },
      {
        term: 'Input types for the right data',
        kind: 'notation',
        statement: 'The `type` attribute tailors keyboards, validation, and widgets: `email` and `url` check shape, `number` and `range` bound quantities, and `date`, `time`, and `month` open **native pickers**. Choice types include `checkbox` for **multiple picks**, `radio` for **one of many**, plus `file`, `password`, `tel`, `search`, and `hidden` for their specialties. Matching type to data gives mobile users the **right keyboard** automatically.',
        detail: 'Correct types also unlock free validation and autofill that plain text inputs never provide.'
      },
      {
        term: 'Selects, textareas, and option values',
        kind: 'definition',
        statement: 'The `<select>` element offers a **dropdown** of `<option>` items where `value` sets the **submitted data** and the text sets the **visible label**. The `<textarea>` element collects **multiline prose** with `rows` and `cols` sizing plus `maxlength` guards. Grouped options sit inside `<optgroup label="...">` bands, and a disabled preselected option can act as an **unpickable prompt**.',
        detail: 'Value and label separation lets the server receive compact codes while users read friendly phrases.'
      },
      {
        term: 'Fieldset, legend, and buttons',
        kind: 'definition',
        statement: 'The `<fieldset>` element **groups related controls** and `<legend>` captions that group for every user including assistive tech. Buttons come in three behaviors: `submit` **sends the form**, `reset` **clears it** and is rarely wanted, and `button` **does nothing** until scripted. The `name` plus `value` on a submit button identifies **which button** sent a multi-button form.',
        detail: 'Grouping plus an explicit submit type keeps default Enter-key behavior predictable across browsers.'
      }
    ],
    examples: [
      {
        title: 'Build a signup form',
        problem: 'Collect a name, email, role, bio, and newsletter opt-in with submittable names.',
        steps: [
          { label: 'Step 1: Form shell and labels', text: '```html\n<form action="/signup" method="post">\n  <label for="name">Full name</label>\n  <input id="name" name="name" type="text" autocomplete="name" required>\n  <label for="email">Email</label>\n  <input id="email" name="email" type="email" autocomplete="email" required>\n</form>\n```\nEach control carries matching `for` and `id` plus a `name` that becomes the submission key.' },
          { label: 'Step 2: Choices and text', text: 'Radio buttons share `name="role"` so only one submits, the newsletter uses a single `checkbox`, and the bio uses `textarea` with a `maxlength`.' },
          { label: 'Step 3: Submit explicitly', text: 'A `<button type="submit">Create account</button>` makes the default action obvious and keeps Enter-key submits working.' }
        ],
        result: 'The server receives named name, email, role, bio, and opt-in values, each with an accessible label.'
      },
      {
        title: 'Choose controls for tricky data',
        problem: 'Pick elements for a t-shirt size, a delivery date, and a bounded quantity with limits.',
        steps: [
          { label: 'Step 1: One-of-many size', text: '```html\n<fieldset>\n  <legend>Size</legend>\n  <label><input type="radio" name="size" value="m" checked> Medium</label>\n  <label><input type="radio" name="size" value="l"> Large</label>\n</fieldset>\n```\nShared `name` enforces one choice and `value` submits the compact code.' },
          { label: 'Step 2: Date and quantity', text: 'Use `type="date"` with a `min` for delivery and `type="number"` with `min` and `max` for quantity so browsers validate ranges natively.' },
          { label: 'Step 3: Select for long lists', text: 'When sizes grow to a dozen options, swap radios for a `select` with grouped `optgroup` bands to save space without losing meaning.' }
        ],
        result: 'Each datum uses the widget that validates and keyboards it best, keeping custom script near zero.'
      }
    ],
    keyTakeaways: [
      'Form action plus method route named controls as URL queries or body submissions.',
      'Every control needs a real label since placeholders vanish and are often skipped.',
      'Input types select keyboards, pickers, and free validation for each data kind.',
      'Selects submit option values while textareas hold bounded multiline prose.',
      'Fieldsets group with legends while explicit button types fix submit behavior.'
    ],
    quiz: [
      {
        q: 'When should a form use method GET?',
        options: ['For password changes', 'For safe queries like search where the URL should stay shareable', 'For file uploads', 'For payment charges'],
        answer: 1,
        explanation: 'GET appends data to the address, which suits idempotent lookups but exposes anything sensitive.'
      },
      {
        q: 'Why is placeholder not a label replacement?',
        options: ['Placeholders break layouts', 'Placeholders vanish on input and are often skipped by assistive tech', 'Placeholders cannot be styled', 'Placeholders disable validation'],
        answer: 1,
        explanation: 'A hint that disappears cannot persistently name a control for sighted or non-sighted users.'
      },
      {
        q: 'How do radio buttons form a single-choice group?',
        options: ['By sharing the same name with different values', 'By sharing the same id', 'By sitting in one paragraph', 'By using type checkbox'],
        answer: 0,
        explanation: 'The shared name binds the radios so selecting one deselects the rest and submits one value.'
      },
      {
        q: 'Which button does nothing until scripted?',
        options: ['<button type="submit">', '<button type="reset">', '<button type="button">', '<input type="submit">'],
        answer: 2,
        explanation: 'Button-type buttons have no default form action, making them safe triggers for custom scripts.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch3-s2
  {
    sectionId: 'web-ch3-s2',
    readingTime: 8,
    intro: 'Browsers can validate forms before any script runs, checking presence, shape, and ranges with built-in attributes. This section layers required fields, patterns, numeric bounds, and input modes, then adds the Constraint Validation API for custom messages. The result is fast feedback that still respects server-side truth.',
    objectives: [
      'Apply required, minlength, maxlength, min, max, and pattern attributes',
      'Guide mobile keyboards and autofill with inputmode and autocomplete',
      'Read validity states and customize messages with the validation API',
      'Decide what to validate in the browser versus on the server'
    ],
    concepts: [
      {
        term: 'Presence and length constraints',
        kind: 'definition',
        statement: 'The **`required`** attribute blocks submission while a control is empty, and **`minlength`** plus **`maxlength`** bound text length. The **`type`** already implies shape, so `type="email"` rejects strings without an **at-sign and domain** before script runs. Together these three attributes handle the large majority of contact and signup validation declaratively.',
        detail: 'Declarative checks run on submit and on input, giving instant feedback with zero script weight.'
      },
      {
        term: 'Patterns and numeric bounds',
        kind: 'method',
        statement: 'The **`pattern`** attribute holds a **regular expression** the whole value must match, such as a postal-code shape, with `title` explaining the expected format. Numeric controls take **`min`**, **`max`**, and **`step`** bounds, so `step="0.5"` permits halves while rejecting thirds. Date inputs accept `min` and `max` dates that disable **out-of-range days** in native pickers.',
        detail: 'Patterns validate shape rather than existence, so keep them loose enough for real-world spellings.'
      },
      {
        term: 'Inputmode and autocomplete',
        kind: 'method',
        statement: 'The **`inputmode`** attribute requests a **mobile keyboard** such as `numeric`, `decimal`, or `email` without changing the validated type. The **`autocomplete`** attribute names the **stored identity field** like `email`, `new-password`, or `postal-code` so browsers can fill safely. Pairing `type="text"` with `inputmode="numeric"` collects digit strings such as PINs without numeric coercion.',
        detail: 'Right keyboards plus autofill cut entry errors more than any error-message wording can recover.'
      },
      {
        term: 'Constraint Validation API',
        kind: 'method',
        statement: 'Every control exposes a **`validity`** object with flags like `valueMissing`, `typeMismatch`, and `patternMismatch`, plus **`checkValidity()`** and **`reportValidity()`** methods. Calling **`setCustomValidity(message)`** with a non-empty string forces a custom failure that clears when set back to `""`. The **`validationMessage`** property and `invalid` event let scripts display **friendly inline errors** beside each field.',
        detail: 'Custom validity composes with built-in checks, so one message can explain a cross-field rule like mismatched passwords.'
      },
      {
        term: 'Client checks versus server truth',
        kind: 'insight',
        statement: 'Browser validation is **user experience**, while **server validation** is **security**: any request can be forged past the browser entirely. The client should validate for **speed and kindness** with instant messages, and the server must **revalidate everything** including ownership and limits. The `novalidate` attribute disables native UI for **custom designs**, but never relaxes what the server enforces.',
        detail: 'Trust boundaries sit at the network edge, so the server treats every incoming field as hostile until checked.'
      }
    ],
    examples: [
      {
        title: 'Validate declaratively first',
        problem: 'Require a username, a shaped coupon code, and an age within bounds with no script.',
        steps: [
          { label: 'Step 1: Presence and length', text: '```html\n<label for="user">Username</label>\n<input id="user" name="user" type="text" required minlength="3" maxlength="20">\n<label for="age">Age</label>\n<input id="age" name="age" type="number" min="13" max="120" required>\n```\nEmpty, short, or out-of-range values block submission with native messages.' },
          { label: 'Step 2: Pattern shape', text: 'Add `pattern="[A-Z]{3}-[0-9]{4}"` with a `title` like three letters, a dash, four digits so the coupon shape is self-documenting.' },
          { label: 'Step 3: Keyboard help', text: 'Add `inputmode="numeric"` to PIN-like text fields and `autocomplete` tokens to identity fields for fast mobile entry.' }
        ],
        result: 'Common mistakes never reach the server, and each message appears beside the offending control.'
      },
      {
        title: 'Add a custom cross-field error',
        problem: 'Show one friendly message when two password fields disagree, clearing it once they match.',
        steps: [
          { label: 'Step 1: Listen for input', text: '```js\nconst pw = document.querySelector(`#pw`);\nconst pw2 = document.querySelector(`#pw2`);\npw2.addEventListener(`input`, () => {\n  pw2.setCustomValidity(pw2.value === pw.value ? `` : `Passwords must match.`);\n});\n```\nAn empty string means valid while any other string means invalid with that message.' },
          { label: 'Step 2: Report inline', text: 'Call `pw2.reportValidity()` on submit to surface the message, or mirror `pw2.validationMessage` into a styled error span.' },
          { label: 'Step 3: Keep server checks', text: 'Revalidate equality plus strength on the server, because forged requests skip this script entirely.' }
        ],
        result: 'Users see one clear mismatch message that vanishes the moment the fields agree.'
      }
    ],
    keyTakeaways: [
      'Required plus length plus type attributes validate most fields with no script.',
      'Patterns check value shape while min, max, and step bound numbers and dates.',
      'Inputmode picks mobile keyboards while autocomplete enables safe filling.',
      'Validity flags plus setCustomValidity power friendly custom error messages.',
      'Client validation speeds feedback while server validation enforces security.'
    ],
    quiz: [
      {
        q: 'What does setCustomValidity("") do?',
        options: ['It crashes the form', 'It marks the control valid with no custom error', 'It disables the control', 'It submits the form'],
        answer: 1,
        explanation: 'Empty string clears the custom error so built-in checks alone decide validity.'
      },
      {
        q: 'How should a numeric PIN that may start with zero be collected?',
        options: ['type="number"', 'type="text" with inputmode="numeric" and a pattern', 'type="date"', 'type="range"'],
        answer: 1,
        explanation: 'Text preserves leading zeros while inputmode still summons the digit keyboard and the pattern checks shape.'
      },
      {
        q: 'Why must the server revalidate everything?',
        options: ['Browsers are too slow', 'Requests can be forged past all browser checks', 'Servers cannot read HTML', 'Validation wastes bandwidth'],
        answer: 1,
        explanation: 'Client checks are bypassable UX, so the trust boundary and enforcement live on the server.'
      },
      {
        q: 'What does novalidate on a form do?',
        options: ['It disables native validation UI for custom designs', 'It disables server validation', 'It makes all fields required', 'It encrypts the submission'],
        answer: 0,
        explanation: 'Novalidate silences built-in bubbles so scripts can render errors, without relaxing server rules.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch3-s3
  {
    sectionId: 'web-ch3-s3',
    readingTime: 8,
    intro: 'Pages speak and move through audio, video, and embedded third-party content. This section teaches native playback with tracks and fallbacks, plus iframe embeds that stay performant and private. You will ship media that plays everywhere without wrecking load times.',
    objectives: [
      'Embed audio and video with controls, preload, and poster choices',
      'Supply multiple source formats plus captions and fallback content',
      'Embed third-party pages with iframes using titles and sandboxing',
      'Apply lazy loading and facade patterns to heavy embeds'
    ],
    concepts: [
      {
        term: 'Native audio and video',
        kind: 'definition',
        statement: 'The `<audio>` and `<video>` elements provide **built-in playback** with the **`controls`** attribute rendering play, volume, and seek UI. The **`preload`** attribute hints how much to fetch early with `none`, `metadata`, or `auto`, and `poster` shows a **preview image** before video starts. The `loop`, `muted`, and `playsinline` attributes tune **replay and mobile** behavior without scripting.',
        detail: 'Native players inherit platform accessibility and keyboard support that custom scripted players must rebuild.'
      },
      {
        term: 'Sources, types, and fallbacks',
        kind: 'method',
        statement: 'Listing multiple `<source>` children with **`src` plus `type`** lets the browser take the **first playable format** and skip the rest. Provide **`WebM`** plus **`MP4`** for video and **`Opus`** plus **`MP3`** for audio to cover modern and legacy engines. Any content between the tags, such as a **download link**, renders only when **no source plays**.',
        detail: 'Explicit type attributes let the browser skip unsupported files without downloading them first.'
      },
      {
        term: 'Tracks for captions and subtitles',
        kind: 'method',
        statement: 'The `<track>` element attaches timed text in **`WebVTT`** format through its `src`, `kind`, `srclang`, and `label` attributes. `kind="captions"` serves **dialog plus sound cues** for deaf viewers, while `kind="subtitles"` translates **spoken language** only. Marking one track `default` selects it initially, and every track needs a **descriptive label** for the player menu.',
        detail: 'Captions benefit search, silent autoplay contexts, and language learners beyond their core audience.'
      },
      {
        term: 'Iframes and sandboxing',
        kind: 'definition',
        statement: 'The `<iframe>` element embeds a **separate document** by `src`, announced through its **`title`** attribute for assistive tech. The **`sandbox`** attribute strips **scripts, forms, and popups** unless tokens like `allow-scripts` restore them selectively. The `allow` attribute gates **powerful features** such as camera or fullscreen, and `referrerpolicy` limits **leaked origin data** to third parties.',
        detail: 'Sandbox by default and allow only what the embed needs, since framed pages run with their own origin privileges.'
      },
      {
        term: 'Performant third-party embeds',
        kind: 'insight',
        statement: 'Heavy embeds cost **scripts, cookies, and layout**, so defer them with **`loading="lazy"`** and fixed **aspect-ratio boxes** that prevent shift. A **facade pattern** shows a lightweight **preview image with a play button** and creates the real iframe only on click. Self-hosting **posters and thumbnails** avoids pulling third-party bytes before consent or intent.',
        detail: 'One auto-loading video wall can outweigh the rest of a page, so laziness plus facades dominate media performance.'
      }
    ],
    examples: [
      {
        title: 'Publish accessible video',
        problem: 'Add a product video with captions, a poster, and a working fallback.',
        steps: [
          { label: 'Step 1: Sources first', text: '```html\n<video controls preload="metadata" poster="press-poster.jpg" width="960" height="540">\n  <source src="press.webm" type="video/webm">\n  <source src="press.mp4" type="video/mp4">\n  <track kind="captions" src="press-en.vtt" srclang="en" label="English captions" default>\n  <p>Download the <a href="press.mp4">product video</a>.</p>\n</video>\n```\nBrowsers take the first playable type while the paragraph serves users with no video support.' },
          { label: 'Step 2: Captions file', text: 'The referenced WebVTT file holds timestamped cues with sound effects, selected by default with a clear menu label.' },
          { label: 'Step 3: Poster and preload', text: '`metadata` preload plus a poster shows duration and artwork instantly without downloading the whole file.' }
        ],
        result: 'The video plays in modern and legacy browsers, reads aloud through captions, and degrades to a download link.'
      },
      {
        title: 'Embed a map without the weight',
        problem: 'Show an office map that loads lazily behind a facade and stays sandboxed.',
        steps: [
          { label: 'Step 1: Reserve the box', text: 'Hold a fixed-ratio container so the lazy frame never shifts layout when it arrives.' },
          { label: 'Step 2: Lazy sandboxed frame', text: '```html\n<iframe title="Office map" src="https://maps.example.com/embed?id=42" loading="lazy" sandbox="allow-scripts allow-same-origin" referrerpolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>\n```\nLazy loading defers the heavy document while sandbox and title bound its powers and name it.' },
          { label: 'Step 3: Facade upgrade', text: 'Replace the frame with a thumbnail plus button that creates it on click for pages with many embeds.' }
        ],
        result: 'Visitors see a stable fast page and pay the map cost only when they scroll to or activate it.'
      }
    ],
    keyTakeaways: [
      'Audio and video tags give native playback with controls, preload, and poster tuning.',
      'Multiple typed sources plus inner fallback content cover every browser generation.',
      'WebVTT tracks supply captions and subtitles with language labels and defaults.',
      'Iframes need titles plus sandbox, allow, and referrer policies to stay safe.',
      'Lazy loading plus facades keep heavy third-party embeds off the critical path.'
    ],
    quiz: [
      {
        q: 'Why list two video source formats?',
        options: ['To play both at once', 'So each browser takes the first format it can play', 'To double the volume', 'To satisfy validators'],
        answer: 1,
        explanation: 'Source fallback means modern engines take WebM while legacy ones fall through to MP4.'
      },
      {
        q: 'What does kind="captions" provide that subtitles do not?',
        options: ['Larger fonts', 'Dialog plus non-speech sound cues for deaf viewers', 'Automatic translation', 'Chapter markers'],
        answer: 1,
        explanation: 'Captions describe speech and meaningful sounds, while subtitles translate speech alone.'
      },
      {
        q: 'What does the sandbox attribute do without any tokens?',
        options: ['It speeds up the frame', 'It blocks scripts, forms, and popups inside the iframe', 'It hides the frame', 'It mutes audio'],
        answer: 1,
        explanation: 'Empty sandbox applies maximum restriction, with each allow token restoring one capability.'
      },
      {
        q: 'What is a facade embed?',
        options: ['A fake error message', 'A lightweight preview that creates the heavy iframe only on activation', 'A blurred background', 'A print stylesheet'],
        answer: 1,
        explanation: 'Facades defer third-party scripts and cookies until the user shows intent by clicking.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch3-s4
  {
    sectionId: 'web-ch3-s4',
    readingTime: 9,
    intro: 'Vector graphics, pixel canvases, and the DOM tree are three views of drawable content. This section contrasts inline SVG with canvas pixels, then models documents as live node trees. You will choose the right drawing tool and traverse the tree that scripts actually manipulate.',
    objectives: [
      'Contrast SVG vectors with canvas pixels for icons, charts, and games',
      'Write inline SVG shapes with viewBox scaling and accessible titles',
      'Draw and animate basic canvas shapes with scripts',
      'Explain nodes versus elements and traverse parents, children, and siblings'
    ],
    concepts: [
      {
        term: 'SVG as scalable markup',
        kind: 'definition',
        statement: 'Inline **SVG** draws **resolution-independent vectors** with markup elements like `<circle>`, `<rect>`, and `<path>` inside an `<svg>` canvas. The **`viewBox`** attribute maps an internal **coordinate system** onto the rendered size, so one file stays sharp from favicon to billboard. Strokes and fills accept **`CSS`**, and `<title>` plus `<desc>` give the graphic an **accessible name**.',
        detail: 'Vectors stay crisp and tiny for icons and charts, while photographic detail would explode them into thousands of nodes.'
      },
      {
        term: 'Canvas as scripted pixels',
        kind: 'definition',
        statement: 'The `<canvas>` element exposes a **pixel buffer** through `getContext("2d")`, where scripts call **`fillRect`**, **`arc`**, and **`drawImage`** to paint. Canvas has **no retained nodes**: once pixels land, the browser remembers colors rather than shapes, so **redraw loops** recreate every frame. Device-pixel scaling with `devicePixelRatio` keeps lines **sharp on dense screens**.',
        detail: 'Pixels win for games and photo filters where thousands of per-frame changes would drown a node tree.'
      },
      {
        term: 'Choosing SVG versus canvas',
        kind: 'insight',
        statement: 'Choose **SVG** when shapes need **selection, styling, and events**, such as icons, diagrams, and data charts. Choose **canvas** when content is **per-pixel and transient**, such as games, visualizers, and image processing. **Hit-testing** is free in SVG because each shape is a node, while canvas needs manual **coordinate math** to find what was clicked.',
        detail: 'Hybrid pages use SVG for chrome and overlays with canvas beneath for the fast-moving layer.'
      },
      {
        term: 'DOM tree: nodes versus elements',
        kind: 'definition',
        statement: 'The **DOM** is a live **tree of nodes** where **elements** are one node kind alongside **text**, **comment**, and **document** nodes. `Element` nodes carry `attributes` and `children`, while raw `childNodes` include **whitespace text** between tags. Live collections like `getElementsByClassName` **track edits**, whereas `querySelectorAll` returns a **static snapshot** of matches.',
        detail: 'Whitespace text nodes explain why firstChild is often text while firstElementChild is the expected tag.'
      },
      {
        term: 'Traversing the tree',
        kind: 'method',
        statement: 'Traversal moves through **parents**, **children**, and **siblings** with properties like `parentElement`, `children`, `firstElementChild`, and `closest("selector")`. The **`querySelector`** family finds nodes by **CSS selectors** from any subtree root. Scripts **create** nodes with `createElement`, set text with `textContent`, and attach with `append` or `before`, keeping **user strings** out of `innerHTML`.',
        detail: 'Element-only properties skip text nodes, which makes them the safe default for layout traversal.'
      }
    ],
    examples: [
      {
        title: 'Draw a scalable badge in SVG',
        problem: 'Create an inline checkmark badge that stays sharp and announces its meaning.',
        steps: [
          { label: 'Step 1: Set the coordinate system', text: '```html\n<svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-labelledby="badge-t">\n  <title id="badge-t">Verified account</title>\n  <circle cx="32" cy="32" r="30" fill="#0ea5e9"></circle>\n  <path d="M20 33 l8 8 l16 -18" stroke="white" stroke-width="6" fill="none" stroke-linecap="round"></path>\n</svg>\n```\nThe `viewBox` maps internal units to any rendered size while `title` names the graphic.' },
          { label: 'Step 2: Style with CSS', text: 'Target `circle` and `path` from a stylesheet to theme the badge for dark mode without editing markup.' },
          { label: 'Step 3: Scale test', text: 'Render at small and large sizes and confirm edges stay crisp where a raster icon would blur.' }
        ],
        result: 'One tiny markup block yields an infinitely scalable, themeable, named badge.'
      },
      {
        title: 'Paint and traverse with canvas plus DOM',
        problem: 'Paint a canvas rectangle and insert a status node beside it using safe DOM methods.',
        steps: [
          { label: 'Step 1: Paint pixels', text: '```js\nconst cv = document.querySelector(`#board`);\nconst ctx = cv.getContext(`2d`);\nctx.fillStyle = `#0ea5e9`;\nctx.fillRect(10, 10, 120, 60);\n```\nThe context paints into the buffer, and repainting the same calls each frame animates the scene.' },
          { label: 'Step 2: Build a node safely', text: 'Create a `p` with `createElement`, set its message with `textContent`, and `append` it to the status region so user text never parses as markup.' },
          { label: 'Step 3: Traverse to verify', text: 'Use `closest("section")` from the canvas and `firstElementChild` on the status region to confirm placement in the live tree.' }
        ],
        result: 'Pixels handle the drawing while nodes handle the message, each manipulated through its own correct API.'
      }
    ],
    keyTakeaways: [
      'SVG draws scalable styled nodes with viewBox coordinates and accessible titles.',
      'Canvas paints transient pixels through a scripted context with manual redraws.',
      'SVG fits selectable graphics while canvas fits per-pixel animation and filters.',
      'The DOM mixes element, text, comment, and document nodes in one live tree.',
      'Element-only traversal plus querySelector with safe text insertion covers daily scripting.'
    ],
    quiz: [
      {
        q: 'What does viewBox do in SVG?',
        options: ['It uploads the image', 'It maps an internal coordinate system onto the rendered size for sharp scaling', 'It compresses files', 'It disables CSS'],
        answer: 1,
        explanation: 'Internal units scale to any display size, keeping vector edges crisp at every resolution.'
      },
      {
        q: 'Why must canvas scenes redraw each frame?',
        options: ['Canvases delete their files', 'Canvas stores pixels rather than shape nodes, so nothing persists to move', 'Browsers forbid canvas caching', 'CSS cannot target canvas'],
        answer: 1,
        explanation: 'Without retained nodes the browser remembers only colors, so scripts repaint the whole scene per frame.'
      },
      {
        q: 'What is the difference between childNodes and children?',
        options: ['They are identical', 'childNodes includes text and comment nodes while children holds only elements', 'children includes text nodes', 'childNodes is always empty'],
        answer: 1,
        explanation: 'Whitespace between tags becomes text nodes in childNodes, which element-only children skips.'
      },
      {
        q: 'Why prefer textContent over innerHTML for user strings?',
        options: ['It renders faster only', 'It inserts text without parsing markup, blocking injected scripts', 'It adds styles', 'It validates forms'],
        answer: 1,
        explanation: 'Text insertion treats angle brackets as characters, while HTML insertion would execute attacker tags.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch3-s5
  {
    sectionId: 'web-ch3-s5',
    readingTime: 7,
    intro: 'Broken markup and inaccessible patterns hide in plain sight until validation and assistive testing reveal them. This section gives a debugging workflow for HTML plus the accessibility essentials of alt text, labels, keyboard order, and skip links. You will leave pages that parse cleanly and operate without a mouse.',
    objectives: [
      'Validate HTML and fix nesting, duplicate id, and unclosed-tag errors',
      'Diagnose common faults like overlapping tags and broken references',
      'Apply alt, label, and heading checks across a page audit',
      'Verify keyboard order, focus visibility, and skip-link behavior'
    ],
    concepts: [
      {
        term: 'Validator workflow',
        kind: 'method',
        statement: 'The **Nu Html Checker** parses a page against the **`HTML standard`** and reports **errors and warnings** with line numbers. Validate **early and often**: paste snippets during writing and whole pages before review. Fix the **first error first**, because one unclosed tag cascades into dozens of **phantom reports** downstream.',
        detail: 'Valid markup is not a badge but a baseline that lets browsers, parsers, and assistive tools agree on structure.'
      },
      {
        term: 'Classic nesting and reference faults',
        kind: 'definition',
        statement: 'Common faults include **overlapping tags** that the parser re-splits, **block children inside `p`** that get ejected, and **duplicate `id` values** where only the first is addressable. Broken `href` and `src` paths plus **unclosed list and table tags** round out the usual suspects. Each produces a DOM that **differs from source**, so DevTools Elements shows the truth while View Source shows the wish.',
        detail: 'Unique ids matter because fragments, labels, and scripts all resolve to the first match only.'
      },
      {
        term: 'HTML accessibility audit',
        kind: 'method',
        statement: 'An HTML-side audit checks five things: **meaningful `alt`** or empty decorative alt, **programmatic labels** on every control, **heading order** without skips, **landmark regions** with one main, and **link purpose** that survives alone. Tools like `axe` and `Lighthouse` automate the **mechanical checks** while humans judge **alt quality and reading order**. Alt and labels come from markup alone, so no CSS or script can substitute for them.',
        detail: 'Automated tools catch missing attributes while manual reading catches meaningless but present ones.'
      },
      {
        term: 'Keyboard order and focus',
        kind: 'definition',
        statement: 'Keyboard users move with **`Tab`** through links, buttons, and controls in **DOM order**, so visual order must match source order. The **`tabindex`** attribute should stay at `0` for inclusion or `-1` for programmatic focus, since positive values **hijack the sequence** unpredictably. Visible **focus styles** through `:focus-visible` show **where input will land** on every keystroke.',
        detail: 'Removing outlines without a replacement strands keyboard users on an invisible cursor.'
      },
      {
        term: 'Skip links and language',
        kind: 'method',
        statement: 'A **skip link** as the first focusable element jumps past **repeated navigation** to the `main` content in one keystroke. The **`lang`** attribute on `html` plus `alt` language matching lets screen readers **switch pronunciation** correctly. Tested with **keyboard only plus a screen reader**, these two small additions remove the largest navigation barriers on content pages.',
        detail: 'Skip links stay visually hidden until focused, serving keyboard users without changing the design.'
      }
    ],
    examples: [
      {
        title: 'Hunt a duplicate-id bug',
        problem: 'Two newsletter inputs share one id, so labels and fragments misbehave. Find and fix it.',
        steps: [
          { label: 'Step 1: Validate', text: 'Run the page through the Nu Html Checker and read the duplicate `id` error with both line numbers. Fix the first error before chasing later warnings.' },
          { label: 'Step 2: Confirm live', text: '```js\nconst el = document.querySelector(`#newsletter`);\nconsole.log(el.tagName, el.id);\nconsole.log(document.querySelectorAll(`#newsletter`).length);\n```\nThe single-match query returns the first node while the count proves two exist, explaining the misrouted label.' },
          { label: 'Step 3: Rename uniquely', text: 'Give the footer input `id="newsletter-footer"` with a matching label, keeping the header one unchanged, then revalidate to green.' }
        ],
        result: 'Each label now targets its own control and fragment links land on the intended element.'
      },
      {
        title: 'Keyboard-test a page',
        problem: 'Verify a docs page works without a mouse, from skip link to form submit.',
        steps: [
          { label: 'Step 1: Tab from the top', text: 'Reload, press Tab once, and confirm the skip link appears and Enter jumps into `main`. Every interactive stop should show a clear focus ring.' },
          { label: 'Step 2: Walk the order', text: 'Continue through nav, article links, and the search form, confirming visual order matches focus order with no traps. Positive `tabindex` values get removed on sight.' },
          { label: 'Step 3: Submit by keys', text: '```html\n<a href="#main-content">Skip to content</a>\n<main id="main-content">…form…</main>\n```\nMatching `href` and `id` make the bypass real, and the form submits with Enter from any of its controls.' }
        ],
        result: 'The page proves operable by keyboard alone, with visible focus and a working bypass for repeated menus.'
      }
    ],
    keyTakeaways: [
      'Validate early with the Nu checker and fix the first error to clear cascades.',
      'Overlapping tags, illegal children, duplicate ids, and bad paths top the fault list.',
      'Alt, labels, headings, landmarks, and link purpose form the markup audit.',
      'DOM order drives Tab flow, with zero and minus-one as the only sane tabindex values.',
      'Skip links plus correct lang make keyboard and screen reader passage fast.'
    ],
    quiz: [
      {
        q: 'Why fix the first validation error first?',
        options: ['Validators hide other errors', 'One early fault like an unclosed tag cascades into phantom downstream reports', 'First errors are always fatal', 'Later errors delete themselves'],
        answer: 1,
        explanation: 'The parser recovery from an early fault shifts everything after, so clearing it removes many reports at once.'
      },
      {
        q: 'Two elements share id="newsletter". What breaks?',
        options: ['Nothing, duplicates are fine', 'Labels, fragments, and scripts resolve to the first match only', 'The page fails to load', 'CSS stops working'],
        answer: 1,
        explanation: 'Id lookups return the first element, so the second control loses its label and link target.'
      },
      {
        q: 'Which tabindex values are safe?',
        options: ['Any positive number', 'Zero for inclusion and minus-one for programmatic focus', 'Only values above one hundred', 'tabindex is deprecated'],
        answer: 1,
        explanation: 'Positive values hijack the natural DOM order, while zero and minus-one compose with it predictably.'
      },
      {
        q: 'What makes a good skip link target?',
        options: ['The navigation menu', 'The main content region with a matching id', 'The footer logo', 'An advertisement'],
        answer: 1,
        explanation: 'Bypassing repeated blocks straight to main content saves keyboard users the most keystrokes.'
      },
      // Placement-pattern: label association with inputs (original)
      {
        q: "Clicking the visible text `Email address` does not focus the input next to it. Which markup fixes the association?\n```html\n<!-- P: <span>Email address</span><input type=\"email\" id=\"em\"> -->\n<!-- Q: <label for=\"em\">Email address</label><input type=\"email\" id=\"em\"> -->",
        options: ["P is correct: visual proximity creates the association", "Neither works: labels cannot target email inputs", "Both are equivalent for assistive tools", "Q is correct: the `for` attribute bound to the input `id` creates a programmatic label"],
        answer: 3,
        explanation: "Step 1: The data given is a plain text span beside an input versus a `for`-bound label beside the same input. Step 2: The governing rule is programmatic labeling: a labelable control needs its accessible name bound through `for` matching `id` or through wrapping, which transfers clicks to the control and announces the name to assistive tools. Step 3: Tracing both markups, P leaves the text unbound so clicks land on nothing and screen readers guess, while Q binds the name so clicking focuses the email field and the name is announced. Step 4: The distractors fail because proximity never associates, email inputs are fully labelable, and only one form creates the binding. Step 5: Therefore the `for` and `id` pair is the correct fix."
      }
    ]
  }
]
