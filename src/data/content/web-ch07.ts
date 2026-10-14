import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 7: CSS Motion & Tooling
// Sections 7.1 – 7.5. Master study content.
// ============================================================================

export const webCh07Content: SectionContent[] = [
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: 'web-ch7-s1',
    readingTime: 8,
    intro: 'Transitions are the smallest unit of interface motion: a property glides from one value to another when state changes, making hovers, focus and toggles feel physical instead of abrupt. This section covers the transition properties, which properties animate cheaply on the compositor, easing and delay craft, trigger patterns from classes to hover, and the accessibility duty to respect reduced motion.',
    objectives: [
      'Write transition shorthand with property, duration, easing and delay',
      'Choose cheap transform and opacity animations over layout properties',
      'Shape feel with timing functions from ease to cubic-bezier and steps',
      'Gate motion behind prefers-reduced-motion for accessible interfaces'
    ],
    concepts: [
      {
        term: 'The four transition properties',
        kind: 'definition',
        statement: 'A transition needs four ingredients: **`transition-property`** naming what animates, **`transition-duration`** timing the glide, **`transition-timing-function`** shaping its acceleration, and **`transition-delay`** postponing the start. The **`transition`** shorthand bundles them as in `transition: background-color 200ms ease, transform 200ms ease`, with comma-separated entries animating independent properties on different curves. Declaring the transition on the base state — not the hover rule — ensures the glide runs in both directions, out and back.',
        detail: 'List each animated property explicitly rather than using `all`, so later style additions never accidentally inherit animation they were never designed for.'
      },
      {
        term: 'Cheap versus expensive properties',
        kind: 'law',
        statement: '**`transform`** and **`opacity`** animate **cheaply** because the compositor can interpolate them on the GPU without reflowing layout or repainting pixels. Animating **layout properties** such as `width`, `height`, `margin` or `top` is **expensive**: every frame recalculates geometry for the element and potentially its whole subtree, dropping frames on modest devices. The professional habit is reframing effects compositely — slide with `translate` instead of `left`, fade with `opacity` instead of `display`, grow with `scale` instead of `width`.',
        detail: 'When an effect seems to demand a layout property, look for the composite equivalent first, since sixty-frame motion lives or dies on this substitution.'
      },
      {
        term: 'Timing functions and cubic-bezier',
        kind: 'method',
        statement: 'The **timing function** sculpts velocity across the duration: **`ease`** starts fast and lands softly, **`ease-out`** decelerates into rest, **`ease-in`** accelerates away, and **`linear`** holds constant speed. Custom **`cubic-bezier()`** curves draw bespoke acceleration for brand-feel motion, while **`steps()`** jumps discretely for sprite flips and typewriter ticks. Short UI feedback lives near two hundred milliseconds with `ease-out` landings; entrances may run slightly longer, exits slightly shorter, matching physical expectation.',
        detail: 'Reserve `ease-in` for exits that accelerate away and `ease-out` for entrances that settle, since motion that lands softly reads as deliberate rather than mechanical.'
      },
      {
        term: 'Triggers: hover, focus, classes and interruption',
        kind: 'method',
        statement: 'Transitions fire whenever a transitioned property’s value **changes**, however the change arrives: **`:hover`** and **`:focus-visible`** for pointer and keyboard feedback, **class toggles** from JavaScript for menus and dialogs, or **attribute flips** like `aria-expanded` for disclosed panels. Because the transition lives on the base rule, **interrupting** mid-glide — hovering off halfway — smoothly reverses from the current value instead of snapping. Toggling one class that restyles many properties choreographs whole-panel motion from a single state bit.',
        detail: 'Drive multi-property choreography from one class or attribute so state stays singular while presentation animates across every affected property.'
      },
      {
        term: 'Reduced motion as a requirement',
        kind: 'law',
        statement: 'The **`prefers-reduced-motion`** media query signals users who need minimal animation, and honoring it is an accessibility **requirement**, not decoration: `@media (prefers-reduced-motion: reduce)` should collapse durations, disable glides, or snap to end states. Vestibular-sensitive users experience parallax and large-area motion as nausea or disorientation, so essential state changes must remain legible with motion removed. Design every transition as an enhancement layered over an instant change that already communicates fully.',
        detail: 'Wrap all non-essential transitions in a reduced-motion guard that forces near-zero durations, keeping meaning carried by state rather than movement.'
      }
    ],
    examples: [
      {
        title: 'Give buttons physical-feeling feedback',
        problem: 'A primary button needs hover lift, pressed compression and a keyboard focus treatment — all cheap, reversible and reduced-motion safe.',
        steps: [
          { label: 'Step 1: Base with explicit transitions', text: '```css\n.btn {\n  background: #4f46e5;\n  color: #fff;\n  padding: 0.625rem 1.25rem;\n  border-radius: 0.5rem;\n  transition: transform 150ms ease-out, background-color 150ms ease-out, box-shadow 150ms ease-out;\n}\n```\nExplicit properties on the base rule animate both directions, with `transform` carrying the motion on the compositor.' },
          { label: 'Step 2: Hover lift and active press', text: '```css\n.btn:hover {\n  background: #4338ca;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgb(79 70 229 / 0.35);\n}\n.btn:active { transform: translateY(0) scale(0.98); }\n```\nHover rises two pixels with a deepening shadow while press compresses slightly, both reversing smoothly on release because the transition persists.' },
          { label: 'Step 3: Focus plus reduced-motion guard', text: '```css\n.btn:focus-visible { outline: 3px solid #a5b4fc; outline-offset: 2px; }\n@media (prefers-reduced-motion: reduce) {\n  .btn { transition: none; }\n  .btn:hover { transform: none; }\n}\n```\nKeyboard users get a strong ring while reduced-motion users receive instant color-only feedback with the lift removed.' }
        ],
        result: 'The button feels tactile at sixty frames, reverses cleanly on interruption, and degrades to instant accessible feedback where motion is unwelcome.'
      },
      {
        title: 'Animate a disclosure panel without layout jank',
        problem: 'A FAQ answer must expand smoothly when its question toggles, staying on the cheap path and respecting reduced motion.',
        steps: [
          { label: 'Step 1: State-driven markup', text: '```html\n<div class="faq">\n  <button aria-expanded="false" aria-controls="a1">How does billing work?</button>\n  <div class="answer" id="a1">Billing runs monthly…</div>\n</div>\n```\nThe `aria-expanded` attribute is the single state bit driving both assistive announcements and visual motion.' },
          { label: 'Step 2: Grid-rows expansion trick', text: '```css\n.answer {\n  display: grid;\n  grid-template-rows: 0fr;\n  opacity: 0;\n  transition: grid-template-rows 250ms ease-out, opacity 250ms ease-out;\n  overflow: hidden;\n}\n.faq.open .answer { grid-template-rows: 1fr; opacity: 1; }\n```\nAnimating `grid-template-rows` between zero and one fractional unit expands fluidly to content height without measuring pixels in script.' },
          { label: 'Step 3: Toggle script and motion guard', text: '```js\nconst faq = document.querySelector(".faq");\nconst btn = faq.querySelector("button");\nbtn.addEventListener("click", () => {\n  const open = faq.classList.toggle("open");\n  btn.setAttribute("aria-expanded", String(open));\n});\n```\n```css\n@media (prefers-reduced-motion: reduce) {\n  .answer { transition: none; }\n}\n```\nOne class toggle choreographs rows plus fade together while the guard collapses the glide for sensitive users.' }
        ],
        result: 'The panel expands to any content height from one state bit, announces correctly, and snaps instantly where motion is reduced.'
      }
    ],
    keyTakeaways: [
      'Declare transitions on the base state with explicit properties, never all.',
      'Animate transform and opacity; reframe layout effects compositely.',
      'Shape feel with ease-out landings near two hundred milliseconds for feedback.',
      'Drive choreography from one class or attribute toggle.',
      'Guard every transition with prefers-reduced-motion handling.'
    ],
    quiz: [
      {
        q: 'Why must the transition declaration live on the base rule rather than :hover?',
        options: [
          'Hover rules cannot contain transitions',
          'The base placement animates both the forward and reverse changes',
          'It downloads faster',
          'Specificity requires it'
        ],
        answer: 1,
        explanation: 'Transitions run when a listed property changes value; on the base rule the property is transitioned in both directions, while hover-only placement animates just the entry.'
      },
      {
        q: 'Why is animating width considered expensive while animating transform is cheap?',
        options: [
          'Width is measured in pixels',
          'Layout properties force geometry recalculation each frame, while transform and opacity interpolate on the compositor',
          'Transform skips the cascade',
          'Width transitions ignore easing'
        ],
        answer: 1,
        explanation: 'Compositor-handled properties avoid reflow and repaint, sustaining sixty frames where per-frame layout work drops them.'
      },
      {
        q: 'What does transition: background-color 200ms ease, transform 200ms ease-out express?',
        options: [
          'Two properties animating on independent curves over the same duration',
          'A two-second delay before anything animates',
          'All properties animating identically',
          'A keyframe animation, not a transition'
        ],
        answer: 0,
        explanation: 'Comma-separated entries give each property its own duration and timing function, decoupling color crossfade from motion feel.'
      },
      {
        q: 'What must happen inside @media (prefers-reduced-motion: reduce)?',
        options: [
          'Animations should run longer for clarity',
          'Non-essential motion collapses to none or near-zero while state stays legible',
          'All color changes are removed',
          'JavaScript is disabled'
        ],
        answer: 1,
        explanation: 'Sensitive users need state communicated without vestibular-triggering movement, so motion becomes an enhancement over an already-clear instant change.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.2
  {
    sectionId: 'web-ch7-s2',
    readingTime: 8,
    intro: 'Transforms reshape elements without disturbing layout: moving, scaling, rotating and skewing boxes in two and three dimensions while siblings hold their ground. This section covers the transform functions, the origin they pivot around, true 3D with perspective, GPU compositing and will-change discipline, and the order sensitivity that makes combined transforms predictable.',
    objectives: [
      'Apply translate, scale, rotate and skew for layout-free movement',
      'Aim effects with transform-origin for pivots and zooms',
      'Build 3D scenes with perspective, rotate axes and preserve-3d',
      'Manage compositing cost with will-change discipline'
    ],
    concepts: [
      {
        term: 'The 2D transform functions',
        kind: 'definition',
        statement: 'The **`transform`** property applies geometric functions that move pixels without reflowing layout: **`translate()`** slides, **`scale()`** grows or mirrors, **`rotate()`** spins around the origin, and **`skew()`** slants axes for oblique effects. A rule like `transform: translateY(-4px) scale(1.02)` lifts and enlarges a card while siblings never shift, because transforms paint after layout completes. Individual properties **`translate`**, **`rotate`** and **`scale`** now offer the same effects as independent cascade-friendly declarations.',
        detail: 'Prefer the individual translate, rotate and scale properties when transitions must animate one axis without disturbing the others’ values.'
      },
      {
        term: 'Transform origin as the pivot',
        kind: 'method',
        statement: 'The **`transform-origin`** property sets the pivot around which scaling and rotation happen, defaulting to the element center at `50% 50%`. Zooming toward a corner wants `transform-origin: top left`, clock hands pivot at `bottom center`, and door-swing panels rotate around `left center`. Because percentages resolve against the element’s own box, origins track responsive sizing automatically where fixed offsets would drift.',
        detail: 'Set the origin explicitly on every rotation and scale that pivots anywhere but center, since the default silently misplaces edge-anchored effects.'
      },
      {
        term: 'True 3D with perspective and preserve-3d',
        kind: 'definition',
        statement: 'Three-dimensional transforms add depth axes: **`rotateX()`** and **`rotateY()`** tip planes backward and sideways, **`translateZ()`** pushes toward the viewer, and **`perspective()`** or the `perspective` property supplies the vanishing-point distance that makes depth visible. The **`transform-style: preserve-3d`** declaration keeps children in a shared 3D space so card faces can sit back to back, while **`backface-visibility: hidden`** hides the mirrored reverse of flipped faces. Without perspective, 3D rotations flatten into what looks like ordinary 2D skew.',
        detail: 'Apply perspective on the scene parent and preserve-3d on the flipping element, keeping depth context and flipped faces in their correct layers.'
      },
      {
        term: 'Compositing, GPU layers and will-change',
        kind: 'law',
        statement: 'Transformed elements earn their own **compositor layers** promoted to the **GPU**, which is why transform animation sustains sixty frames while layout animation stutters. The **`will-change`** property hints upcoming animation as in `will-change: transform`, letting the browser promote early — but each layer costs memory, so blanket `will-change` on dozens of elements exhausts mobile GPUs. The discipline is narrow and temporary: hint the animating few, then remove the hint when motion ends.',
        detail: 'Add will-change just before animation starts via a class or script, and clear it on transition end so layers collapse back and memory is released.'
      },
      {
        term: 'Order matters in transform lists',
        kind: 'insight',
        statement: 'Transform functions compose **right to left** as nested coordinate systems, so `transform: translateX(2rem) rotate(45deg)` slides then spins the moved frame, while `rotate(45deg) translateX(2rem)` spins first and slides along the rotated axis — visibly different destinations. Reading the list as successive frames around the element explains every surprise: each function redefines the axes its successors inherit. Fixed orders per component plus comments naming the intent keep combined transforms maintainable.',
        detail: 'Freeze one canonical order per component — typically translate, then rotate, then scale — and reorder only deliberately with a comment explaining the new frame sequence.'
      }
    ],
    examples: [
      {
        title: 'Center a modal and lift cards without reflow',
        problem: 'A dialog must center exactly in the viewport regardless of size, and cards should rise on hover without pushing neighbors.',
        steps: [
          { label: 'Step 1: Dead-center with translate', text: '```css\n.dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n```\nPercentage translation resolves against the dialog’s own box, so any content size centers exactly — the classic self-centering recipe.' },
          { label: 'Step 2: Hover lift on the cheap path', text: '```css\n.card { transition: transform 180ms ease-out, box-shadow 180ms ease-out; }\n.card:hover { transform: translateY(-6px) scale(1.01); }\n```\nLift plus micro-zoom runs entirely on the compositor, so neighbors hold position while the hovered card floats above them.' },
          { label: 'Step 3: Origin-aware image zoom', text: '```css\n.thumb { overflow: hidden; }\n.thumb img { transition: transform 250ms ease-out; }\n.thumb:hover img { transform: scale(1.08); transform-origin: center; }\n```\nClipping plus center-origin scale zooms within the frame like a gallery loupe, never reflowing surrounding text.' }
        ],
        result: 'Centering, lift and zoom all run layout-free: one translate recipe plus origin-aware scales that never disturb siblings.'
      },
      {
        title: 'Build a 3D flip card with compositor discipline',
        problem: 'A flashcard must flip in 3D on click to reveal its answer, with proper perspective, hidden backs and no permanent GPU layer bloat.',
        steps: [
          { label: 'Step 1: Scene with perspective', text: '```css\n.scene { perspective: 60rem; }\n.flip {\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 500ms ease;\n}\n```\nPerspective on the scene supplies depth while preserve-3d keeps both faces in one shared space during the turn.' },
          { label: 'Step 2: Faces back to back', text: '```css\n.face {\n  backface-visibility: hidden;\n}\n.face.back { transform: rotateY(180deg); }\n.flip.flipped { transform: rotateY(180deg); }\n```\nThe answer face pre-rotates half a turn and hides its mirror, so the container’s half-turn brings it forward legibly.' },
          { label: 'Step 3: Toggle with will-change hygiene', text: '```js\nconst flip = document.querySelector(".flip");\nflip.addEventListener("click", () => {\n  flip.style.willChange = "transform";\n  flip.classList.toggle("flipped");\n});\nflip.addEventListener("transitionend", () => {\n  flip.style.willChange = "auto";\n});\n```\nThe hint promotes the layer only for the flip duration, then releases it — smooth motion without permanent memory rent.' }
        ],
        result: 'True 3D flipping from three CSS ingredients plus disciplined layer hints: depth, hidden backs, and GPU memory returned after every turn.'
      }
    ],
    keyTakeaways: [
      'Move, scale and rotate with transform so siblings never reflow.',
      'Set transform-origin explicitly for every off-center pivot.',
      'Combine perspective, preserve-3d and backface-visibility for real 3D.',
      'Hint will-change narrowly and release layers after motion.',
      'Read transform lists as nested frames: order changes destinations.'
    ],
    quiz: [
      {
        q: 'Why does transform: translateY(-4px) on hover avoid disturbing siblings?',
        options: [
          'It removes the element from flow',
          'Transforms paint after layout, so geometry never recalculates',
          'It triggers GPU layout mode',
          'Siblings have higher z-index'
        ],
        answer: 1,
        explanation: 'Transforms apply at compositing time against already-computed layout, moving pixels while every box keeps its laid-out footprint.'
      },
      {
        q: 'A door-swing panel rotates around its center instead of its edge. What is missing?',
        options: [
          'A larger perspective value',
          'transform-origin: left center to move the pivot to the edge',
          'A longer transition duration',
          'backface-visibility: visible'
        ],
        answer: 1,
        explanation: 'Rotation pivots on transform-origin, which defaults to center; edge-anchored swings must relocate the pivot explicitly.'
      },
      {
        q: 'What does transform-style: preserve-3d accomplish?',
        options: [
          'It speeds up 2D animation',
          'It keeps children in a shared 3D space so faces can sit back to back',
          'It hides the back face automatically',
          'It flattens all children to 2D'
        ],
        answer: 1,
        explanation: 'Without preserve-3d each child flattens into its parent plane; with it, faces hold genuine depth positions for flips and cubes.'
      },
      {
        q: 'Why should will-change be added temporarily rather than permanently?',
        options: [
          'It has no effect when permanent',
          'Each hinted layer costs GPU memory, so blanket hints exhaust mobile devices',
          'It disables transitions',
          'It only works in JavaScript'
        ],
        answer: 1,
        explanation: 'Promoted layers rent video memory for their lifetime, so hints belong on the animating few for the animation duration, then release.'
      },
      // Placement-pattern: compositor-friendly animation choice (original)
      {
        q: "A card animates on hover. Two proposals: animate `width` between 200px and 260px, or animate `transform: scale()` across the equivalent sizes. Which stays smooth, and why?",
        options: ["The `transform` version: it reuses the already-painted layer on the compositor, while width changes force layout and paint for surrounding boxes", "The `width` version: layout calculations run on the GPU", "Both are identical: every property shares one pipeline stage", "Neither can animate: hover states are static"],
        answer: 0,
        explanation: "Step 1: The data given is two animations reaching the same visual sizes through different properties. Step 2: The governing rule is the rendering pipeline: geometry changes invalidate layout and paint for surrounding boxes, while `transform` and `opacity` only move already-painted layers through compositing. Step 3: Tracing each frame, the width version recomputes geometry and repaints neighbors every tick, while the scale version reuses the cached layer and composites it cheaply. Step 4: The distractors fail because layout is the expensive CPU path rather than a GPU shortcut, the pipeline stages differ per property, and hover transitions are fully supported. Step 5: Therefore the transform-based animation is the smooth choice."
      }
    ]
  },
  // ---------------------------------------------------------------- 7.3
  {
    sectionId: 'web-ch7-s3',
    readingTime: 9,
    intro: 'Where transitions glide between two states, keyframe animations choreograph entire performances: multi-step sequences that loop, bounce, stagger and run on their own timeline. This section covers @keyframes authorship, the animation properties that direct the show, fill modes and direction control, and the reduced-motion plus performance discipline that keeps animation delightful rather than hostile.',
    objectives: [
      'Author @keyframes with from/to and percentage stops',
      'Direct playback with the animation shorthand properties',
      'Hold end states with fill modes and shape loops with direction',
      'Honor prefers-reduced-motion and keep animations composited'
    ],
    concepts: [
      {
        term: 'Authoring @keyframes',
        kind: 'definition',
        statement: 'The **`@keyframes`** rule names a reusable performance as a sequence of **stops**: `from` and `to` for two-state motion or **percentages** like `0%`, `50%`, `100%` for multi-beat choreography. Each stop declares the property values at that progress point — `0% { opacity: 0; transform: translateY(8px); }` rising to full visibility — and the engine interpolates between stops. Naming keyframes by motion, such as `fade-up` or `spin`, builds a reusable motion vocabulary across the design system.',
        detail: 'Animate only transform and opacity inside keyframes wherever possible so every performance stays on the compositor from first frame to last.'
      },
      {
        term: 'Directing with the animation properties',
        kind: 'method',
        statement: 'Playback is directed by the **`animation`** family: **`animation-name`** selects the keyframes, **`animation-duration`** times one pass, **`animation-timing-function`** shapes velocity, and **`animation-delay`** staggers the start, bundled in the **`animation`** shorthand. Negative delays like `-200ms` start mid-performance so staggered items enter already in motion rather than waiting in formation. Separating choreography in `@keyframes` from direction in `animation` lets one performance play at many speeds across components.',
        detail: 'Stagger groups with incremental delays or negative offsets so ensembles cascade instead of marching in lockstep.'
      },
      {
        term: 'Fill modes for before and after',
        kind: 'method',
        statement: 'The **`animation-fill-mode`** property governs the element outside its active run: **`backwards`** applies the first stop during the delay, **`forwards`** holds the final stop after completion, and **`both`** covers the delay plus the aftermath. An entrance with a delay and no backwards fill flashes fully visible before jumping back to start — the classic fill-mode bug — while a toast that should linger needs `forwards` to keep its arrived state. One-shot UI motion almost always wants `both` so delays and endings behave.',
        detail: 'Default one-shot animations to a fill of both unless the element must snap back, eliminating both pre-delay flashes and post-run jumps.'
      },
      {
        term: 'Iteration, direction and play state',
        kind: 'definition',
        statement: '**`animation-iteration-count`** repeats the performance a number or **`infinite`** times, **`animation-direction`** aims each pass with `normal`, `reverse`, `alternate` and `alternate-reverse`, and **`animation-play-state`** pauses with `paused` or resumes with `running`. An `alternate` infinite loop swims there and back without a visible snap, while hover-pausing a marquee with `play-state` gives users control over perpetual motion. Infinite loops belong to ambient decoration like spinners, never to attention-demanding content.',
        detail: 'Pause infinite decoration on hover and provide a still alternative, since perpetual motion strains attention and battery alike.'
      },
      {
        term: 'Reduced motion and animation performance',
        kind: 'law',
        statement: 'Keyframe animation carries the same **reduced-motion duty** as transitions: inside `@media (prefers-reduced-motion: reduce)`, cancel loops, collapse entrances, or swap animated reveals for instant visibility. Performance discipline compounds the duty — infinite animations on layout properties burn battery continuously, while composited `transform` and `opacity` loops sip power. Large-area parallax and auto-playing loops are the highest-risk patterns, requiring opt-in or removal under reduced motion.',
        detail: 'Audit every infinite animation against reduced-motion handling first, because perpetual movement is exactly what sensitive users cannot escape by looking away.'
      }
    ],
    examples: [
      {
        title: 'Build a spinner and a skeleton shimmer',
        problem: 'A dashboard needs an infinite loading spinner and shimmering placeholder bars, both cheap and reduced-motion safe.',
        steps: [
          { label: 'Step 1: Rotation keyframes', text: '```css\n@keyframes spin { to { transform: rotate(360deg); } }\n.spinner {\n  width: 2.5rem; height: 2.5rem;\n  border-radius: 999px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #4f46e5;\n  animation: spin 800ms linear infinite;\n}\n```\nOne `to` stop spins the gapped ring linearly forever, rotating a composite-only property for minimal cost.' },
          { label: 'Step 2: Shimmer sweep', text: '```css\n@keyframes shimmer {\n  0% { transform: translateX(-100%); }\n  100% { transform: translateX(100%); }\n}\n.skeleton { overflow: hidden; background: #f1f5f9; }\n.skeleton::after {\n  content: "";\n  display: block; height: 100%;\n  background: linear-gradient(90deg, transparent, #ffffff, transparent);\n  animation: shimmer 1600ms ease-in-out infinite;\n}\n```\nA translating highlight band sweeps the placeholder, again moving only transforms on the compositor.' },
          { label: 'Step 3: Reduced-motion stills', text: '```css\n@media (prefers-reduced-motion: reduce) {\n  .spinner, .skeleton::after { animation: none; }\n  .skeleton { opacity: 0.7; }\n}\n```\nLoops collapse to a static ring and muted placeholders, keeping loading state legible with zero perpetual movement.' }
        ],
        result: 'Two ambient loaders from composited keyframes, each degrading to an honest still under reduced motion.'
      },
      {
        title: 'Choreograph a toast entrance that lingers',
        problem: 'A notification must slide up and fade in after a short delay, hold its arrived state, and stagger cleanly when stacked.',
        steps: [
          { label: 'Step 1: Entrance keyframes', text: '```css\n@keyframes toast-in {\n  0% { opacity: 0; transform: translateY(12px) scale(0.98); }\n  100% { opacity: 1; transform: translateY(0) scale(1); }\n}\n```\nCombined rise, fade and settle give the entrance weight while every animated property stays composite-friendly.' },
          { label: 'Step 2: Fill mode and stagger', text: '```css\n.toast { animation: toast-in 300ms ease-out both; }\n.toast:nth-child(2) { animation-delay: 80ms; }\n.toast:nth-child(3) { animation-delay: 160ms; }\n```\nThe `both` fill hides each toast during its delay and holds arrival after, while incremental delays cascade the stack.' },
          { label: 'Step 3: Trigger from script safely', text: '```js\nfunction showToast(message) {\n  const el = document.createElement("div");\n  el.className = "toast";\n  el.textContent = message;\n  el.setAttribute("role", "status");\n  document.querySelector("#toasts").append(el);\n}\n```\nAppending a `.toast` node starts its animation automatically, and the `status` role announces the message to screen readers.' }
        ],
        result: 'Toasts arrive with staged choreography, hold their end state via fill mode, and announce politely — motion and meaning in one pattern.'
      }
    ],
    keyTakeaways: [
      'Name @keyframes by motion and keep keyframe properties composited.',
      'Separate choreography in keyframes from direction in animation properties.',
      'Default one-shots to fill mode both; stagger ensembles with delays.',
      'Loop infinitely only for ambient decoration, pausable on hover.',
      'Cancel or still every loop under prefers-reduced-motion.'
    ],
    quiz: [
      {
        q: 'A delayed entrance flashes visible before animating. Which fix is correct?',
        options: [
          'Increase the duration',
          'Add a backwards or both fill mode so the first stop applies during the delay',
          'Remove the delay entirely',
          'Switch to a transition'
        ],
        answer: 1,
        explanation: 'Without a backwards fill the element renders normally during the delay, then jumps to the start stop; the fill extends the first stop across the wait.'
      },
      {
        q: 'What does animation-direction: alternate do for an infinite loop?',
        options: [
          'It randomizes each pass',
          'It plays forward then backward each cycle, avoiding a snap back to start',
          'It doubles the speed',
          'It pauses between iterations'
        ],
        answer: 1,
        explanation: 'Alternating direction returns along the same path it came, producing seamless there-and-back motion like swimming or breathing.'
      },
      {
        q: 'Why start staggered items with negative delays?',
        options: [
          'They render faster',
          'Each item begins mid-performance so the ensemble looks already alive on load',
          'Negative delays disable fill modes',
          'They reduce file size'
        ],
        answer: 1,
        explanation: 'A negative delay seeks into the timeline immediately, so followers enter at staggered progress points instead of waiting in a visible queue.'
      },
      {
        q: 'Which animation practice best respects prefers-reduced-motion?',
        options: [
          'Lengthen all durations for gentleness',
          'Cancel infinite loops and collapse entrances to instant visibility under the query',
          'Move animation to JavaScript timers',
          'Animate larger areas to compensate'
        ],
        answer: 1,
        explanation: 'Sensitive users need still legibility: loops stop, entrances snap to end states, and meaning survives with zero movement.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.4
  {
    sectionId: 'web-ch7-s4',
    readingTime: 9,
    intro: 'Sass was the stylesheet laboratory where variables, nesting and mixins were invented years before CSS grew its own versions. This section covers the Sass essentials — variables and maps, nesting with the parent selector, partials with the module system, mixins versus extends, and functions — closing with clear judgment about when Sass still earns its place in a 2026 toolchain.',
    objectives: [
      'Store design decisions in Sass variables, maps and functions',
      'Nest selectors safely with the parent selector and depth limits',
      'Organize code with partials, @use and @forward modules',
      'Decide when Sass beats native CSS in modern builds'
    ],
    concepts: [
      {
        term: 'Variables and maps as design memory',
        kind: 'definition',
        statement: 'Sass **variables** like `$brand: #4f46e5` store colors, spacing and type decisions in one tokens file, and **maps** like `$breakpoints: (sm: 40rem, lg: 64rem)` group related values retrievable with **`map.get()`**. Unlike CSS custom properties, Sass variables resolve at **compile time** into literal values, so they work in any property position and vanish from the shipped CSS. This makes them ideal for build-time decisions — palettes, scales, z-index ladders — while runtime theming stays with custom properties.',
        detail: 'Keep build-time constants in Sass variables and runtime-switchable values in custom properties, letting each system do what the other cannot.'
      },
      {
        term: 'Nesting and the parent selector',
        kind: 'method',
        statement: 'Sass **nesting** mirrors HTML structure so `.card { .title { … } }` compiles to the descendant selector, and the **parent selector `&`** references the enclosing rule for pseudo-classes, modifiers and compound names. Writing `&:hover` appends hover to the parent while `&--large` concatenates BEM-style modifier suffixes onto it. The discipline is shallow depth — rarely beyond three levels — because deep nesting bakes overspecific selectors that later overrides can only defeat with duplication.',
        detail: 'Cap nesting at three levels and let the parent selector carry states and modifiers, keeping compiled specificity flat and overridable.'
      },
      {
        term: 'Partials and the module system',
        kind: 'method',
        statement: 'Sass **partials** are underscore-prefixed files like `_tokens.scss` that compile only when included, organizing a codebase into focused modules for tokens, tools, components and layouts. The modern module system loads them with **`@use`** under namespaces — `@use "tokens" as t` then `t.$brand` — replacing the legacy global `@import` that dumped every name into one scope. Libraries re-export curated APIs with **`@forward`**, so consumers load one entry file while internals stay reorganized freely.',
        detail: 'Structure every project as tokens, tools, base, components and utilities partials behind one forwarded entry point for predictable imports.'
      },
      {
        term: 'Mixins, extends and content blocks',
        kind: 'definition',
        statement: 'A **`@mixin`** stamps parameterized declaration blocks at each **`@include`** site — perfect for button variants, focus rings and media-query shortcuts that take arguments. **Placeholder selectors** with **`@extend`** instead merge selectors sharing identical rules, deduplicating static declarations at the cost of rewritten selector lists. Mixins accept **`@content`** blocks so callers inject custom declarations into a wrapped context like a responsive or reduced-motion guard.',
        detail: 'Choose mixins for parameterized or guarded patterns and extend for truly identical static rules, watching compiled output to confirm the tradeoff lands as intended.'
      },
      {
        term: 'Functions, color craft and when Sass wins',
        kind: 'insight',
        statement: 'Sass **functions** compute values with `@function` and `@return`, and the **`color`** and **`math`** modules adjust, mix and contrast-check palette steps programmatically. In 2026 native CSS covers variables, nesting, cascade layers and `color-mix()`, so Sass wins specifically for **compile-time logic**: loops generating utility scales, shared functions across a monorepo, and the established partial architecture teams already know. New projects with modest logic may skip preprocessors entirely; large systems with generated scales still profit handsomely.',
        detail: 'Adopt Sass when stylesheets need loops, shared computation or team-scale architecture — and skip it when native variables plus nesting already cover the design.'
      }
    ],
    examples: [
      {
        title: 'Build tokens, a ring mixin and a button',
        problem: 'A component library needs brand tokens, a reusable focus-ring pattern parameterized by color, and two button variants sharing one core.',
        steps: [
          { label: 'Step 1: Tokens partial with a map', text: '```scss\n// _tokens.scss\n$brand: #4f46e5;\n$brand-dark: #4338ca;\n$radius: 0.5rem;\n$space: (sm: 0.5rem, md: 1rem, lg: 1.5rem);\n```\nVariables hold atoms while the spacing map groups a scale retrievable by name, forming the single source of truth.' },
          { label: 'Step 2: Mixin with content guard', text: '```scss\n// _tools.scss\n@mixin ring($color: $brand) {\n  outline: 3px solid $color;\n  outline-offset: 2px;\n}\n@mixin on-motion-ok {\n  @media (prefers-reduced-motion: no-preference) {\n    @content;\n  }\n}\n```\nThe ring mixin parameterizes color with a brand default while the content mixin wraps caller declarations in a motion guard.' },
          { label: 'Step 3: Button consuming both', text: '```scss\n@use "tokens" as t;\n@use "tools" as *;\n.btn {\n  background: t.$brand;\n  border-radius: t.$radius;\n  padding: map.get(t.$space, sm) map.get(t.$space, md);\n  &:hover { background: t.$brand-dark; }\n  &:focus-visible { @include ring; }\n  @include on-motion-ok {\n    transition: transform 150ms ease-out;\n    &:hover { transform: translateY(-2px); }\n  }\n}\n```\nNamespaced tokens, parent-selector states and guarded motion compose into one variant-ready rule with flat compiled specificity. The compiler emits plain CSS downstream:\n```css\n.btn { background: #4f46e5; border-radius: 0.5rem; }\n.btn:hover { background: #4338ca; }\n.btn:focus-visible { outline: 3px solid #4f46e5; outline-offset: 2px; }\n```\nNo variables, mixins or nesting survive into the shipped file — only resolved values.' }
        ],
        result: 'Tokens, mixins and guarded nesting produce a consistent button from shared decisions, with motion automatically withheld where unwelcome.'
      },
      {
        title: 'Generate a spacing scale with a loop',
        problem: 'A design system needs margin and padding utilities from zero to five steps without hand-writing dozens of near-identical rules.',
        steps: [
          { label: 'Step 1: Scale loop for utilities', text: '```scss\n$steps: (0: 0, 1: 0.25rem, 2: 0.5rem, 3: 1rem, 4: 1.5rem, 5: 3rem);\n@each $n, $v in $steps {\n  .m-#{$n} { margin: $v; }\n  .p-#{$n} { padding: $v; }\n}\n```\nOne `@each` loop interpolates class names and values, generating twelve utilities from six map entries with zero duplication.' },
          { label: 'Step 2: Breakpoint mixin from the map', text: '```scss\n$breakpoints: (sm: 40rem, lg: 64rem);\n@mixin respond($point) {\n  @media (min-width: map.get($breakpoints, $point)) {\n    @content;\n  }\n}\n.card { padding: 1rem; @include respond(lg) { padding: 2rem; } }\n```\nThe content mixin centralizes breakpoint values so components respond by intent — `lg` — rather than scattered magic widths.' },
          { label: 'Step 3: Function for contrast text', text: '```scss\n@use "sass:color";\n@function ink-on($bg) {\n  @if (color.channel($bg, "lightness", $space: hsl) > 60%) {\n    @return #0f172a;\n  }\n  @return #ffffff;\n}\n.badge { background: $brand; color: ink-on($brand); }\n```\nCompile-time luminance logic picks readable text per background, a computation native CSS cannot express this directly.' }
        ],
        result: 'Loops, content mixins and functions generate and reason about whole scales — the compile-time logic that justifies Sass in large systems.'
      }
    ],
    keyTakeaways: [
      'Store build-time constants in Sass variables and maps with map.get access.',
      'Nest shallowly and wield the parent selector for states and modifiers.',
      'Organize partials behind @use namespaces and @forward entry points.',
      'Use mixins for parameterized patterns and extend for identical statics.',
      'Keep Sass where compile-time loops and logic outrun native CSS.'
    ],
    quiz: [
      {
        q: 'What is the key difference between Sass variables and CSS custom properties?',
        options: [
          'Sass variables cascade at runtime',
          'Sass variables resolve at compile time into literals, while custom properties stay live and cascading',
          'Custom properties cannot hold colors',
          'Sass variables require JavaScript'
        ],
        answer: 1,
        explanation: 'Compile-time resolution suits build decisions and any property position, while live custom properties suit runtime theming and inheritance.'
      },
      {
        q: 'What does the parent selector & do inside .btn { &:hover { … } }?',
        options: [
          'It selects all children on hover',
          'It references the enclosing selector, compiling to .btn:hover',
          'It imports another file',
          'It declares a variable'
        ],
        answer: 1,
        explanation: 'The & replays the parent selector textually, enabling pseudo-classes, modifiers and compound names without repeating the base.'
      },
      {
        q: 'Why is @use preferred over legacy @import?',
        options: [
          'It compiles faster in all cases',
          'It loads modules under namespaces instead of dumping every name into global scope',
          'It enables runtime theming',
          'It removes the need for partials'
        ],
        answer: 1,
        explanation: 'Namespaced modules prevent collisions and make dependencies explicit, while @import globals tangle every file into one scope.'
      },
      {
        q: 'When does Sass still earn its place in a 2026 project?',
        options: [
          'For every project regardless of needs',
          'When compile-time logic — loops, shared functions, generated scales — exceeds what native CSS expresses',
          'When runtime dark mode is required',
          'When no build step is allowed'
        ],
        answer: 1,
        explanation: 'Native CSS now covers variables and nesting, so Sass justifies its build step through computation and architecture at scale.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.5
  {
    sectionId: 'web-ch7-s5',
    readingTime: 9,
    intro: 'Utility-first frameworks and component libraries are how most production CSS gets written in 2026: Tailwind for bespoke designs composed from utilities, Bootstrap for fluent reading and rapid assembly of familiar components. This section covers the Tailwind workflow, responsive and state variants, dark mode strategy, extracting components without losing discipline, and the Bootstrap literacy every hire needs.',
    objectives: [
      'Compose interfaces from Tailwind utilities in HTML',
      'Apply responsive, hover/focus and dark variants correctly',
      'Extract components with @layer and @apply without utility bloat',
      'Read and customize Bootstrap grids, components and utilities'
    ],
    concepts: [
      {
        term: 'Utility-first workflow and setup',
        kind: 'definition',
        statement: 'In the **utility-first** workflow, styling lives in **single-purpose classes** in markup — `flex`, `gap-4`, `rounded-xl`, `bg-indigo-600` — composed per element instead of written as bespoke selectors. The Tailwind **build scans content files** and generates only the used utilities, so the shipped CSS stays tiny despite thousands of available classes. Configuration in **`tailwind.config`** tailors the scale — brand colors, fonts, spacing — keeping one-off values out of markup and inside the design system.',
        detail: 'Configure brand tokens in the Tailwind config first so markup composes system values instead of scattering arbitrary hex codes.'
      },
      {
        term: 'Responsive and state variants',
        kind: 'method',
        statement: '**Variants** prefix utilities with conditions: **responsive** prefixes like `md:` and `lg:` activate at breakpoints upward, while **state** prefixes like `hover:`, `focus-visible:` and `disabled:` respond to interaction. A class string such as `grid grid-cols-1 md:grid-cols-3 gap-4` reads as the responsive design itself — stacked by default, three columns from medium screens. Stacking follows a fixed order of responsive then state, so `md:hover:bg-indigo-700` means hover-styled only at medium widths and up.',
        detail: 'Write base utilities first and layer prefixed variants after, mirroring mobile-first CSS where defaults serve phones and prefixes enhance upward.'
      },
      {
        term: 'Dark mode with the class strategy',
        kind: 'method',
        statement: 'Tailwind’s **`dark:`** variant styles the dark theme alongside the light one in the same class string, as in `bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100`. The **`class` dark-mode strategy** keys the variant to a `dark` class on `html`, toggled by script and seeded from **`prefers-color-scheme`**, giving explicit user control with persistence. This colocates both themes per element so reviewers see the full contract at a glance instead of hunting a separate dark stylesheet.',
        detail: 'Seed the html dark class from the media query on first load, then let stored user choice override it — mirroring the custom-property theming pattern.'
      },
      {
        term: 'Extracting components with layers and apply',
        kind: 'method',
        statement: 'Repeated utility strings graduate into components with **`@layer components`** plus **`@apply`**, bundling the recipe behind one class name like `.btn-primary` without leaving the utility system. **Cascade layers** (`@layer base, components, utilities`) order the output so utilities still override components predictably. The discipline is extracting only stable repetitions — buttons, inputs, badges — while one-off layouts stay inline, avoiding premature abstraction that freezes designs too early.',
        detail: 'Extract when a pattern repeats thrice with identical intent, and keep variant-carrying utilities inline so overrides never fight the abstraction.'
      },
      {
        term: 'Bootstrap literacy: grid, components, utilities',
        kind: 'insight',
        statement: '**Bootstrap** fluency means reading its **twelve-column grid** (`container`, `row`, `col-md-6`), wiring **components** like navbars, modals and accordions through data attributes, and speaking its **utility API** for spacing and display. Customization flows through **Sass variables** before compiling, or CSS variables at runtime in recent versions, mapping brand tokens onto the framework. Even Tailwind shops inherit Bootstrap codebases and admin templates, so grid classes, component markup and utility names must be legible on sight.',
        detail: 'Learn to read Bootstrap grid tiers, component data attributes and utility names cold, since maintenance and templates will demand it regardless of house framework.'
      }
    ],
    examples: [
      {
        title: 'Build a Tailwind pricing card with dark mode',
        problem: 'A pricing card needs stacked-to-row responsiveness, hover lift, focus rings and full dark-mode coverage from one class string per element.',
        steps: [
          { label: 'Step 1: Responsive card shell', text: '```html\n<article class="grid grid-cols-1 gap-4 rounded-2xl border p-6 md:grid-cols-2 bg-white dark:bg-slate-900 dark:border-slate-700">\n  <div>…plan details…</div>\n  <div>…price and CTA…</div>\n</article>\n```\nBase utilities stack on phones while `md:` variants split columns, and `dark:` colocates the night theme per element.' },
          { label: 'Step 2: Interactive CTA with states', text: '```html\n<a href="/signup" class="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50">Choose plan</a>\n```\nState variants choreograph hover lift, keyboard focus and disabled fading without a single custom selector.' },
          { label: 'Step 3: Extract the repeating button', text: '```css\n@layer components {\n  .btn-primary {\n    @apply inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700;\n  }\n}\n```\nOnce the recipe repeats, `@apply` inside the components layer names it while layers keep utility overrides winning afterward.' }
        ],
        result: 'Responsive, interactive and dual-themed UI from composed utilities, with repetition graduated into a layered component exactly once.'
      },
      {
        title: 'Read and customize a Bootstrap layout',
        problem: 'A legacy admin page uses Bootstrap grid plus a modal; make it legible, wire the dialog, and rebrand primary buttons to the house indigo.',
        steps: [
          { label: 'Step 1: Read the twelve-column grid', text: '```html\n<div class="container">\n  <div class="row g-3">\n    <div class="col-12 col-md-8">Main panel</div>\n    <div class="col-12 col-md-4">Sidebar</div>\n  </div>\n</div>\n```\nFull-width stacking on phones becomes an eight-plus-four split from the medium tier, with `g-3` gutters — the canonical Bootstrap reading.' },
          { label: 'Step 2: Wire the modal by attributes', text: '```html\n<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#helpModal">Help</button>\n<div class="modal fade" id="helpModal" tabindex="-1">\n  <div class="modal-dialog"><div class="modal-content">…</div></div>\n</div>\n```\nData attributes bind trigger to dialog with no custom script, and the focus-trap plus escape handling arrive with the component.' },
          { label: 'Step 3: Rebrand with variables', text: '```scss\n$primary: #4f46e5;\n$border-radius: 0.5rem;\n@import "bootstrap";\n```\nOverriding Sass variables before the import repaints every primary component consistently, mapping house tokens onto the framework in two lines.' }
        ],
        result: 'Grid legible on sight, modal wired declaratively, and brand applied at the variable root — full Bootstrap literacy in one pass.'
      }
    ],
    keyTakeaways: [
      'Compose Tailwind utilities in markup; configure tokens instead of hardcoding.',
      'Layer base utilities first, then responsive and state variants in order.',
      'Key dark: variants to a toggled html class seeded from the OS.',
      'Extract stable repetitions with @layer plus @apply, never one-offs.',
      'Read Bootstrap grids, data-attribute components and variables fluently.'
    ],
    quiz: [
      {
        q: 'What does class="grid grid-cols-1 md:grid-cols-3 gap-4" render?',
        options: [
          'Three columns on all screens',
          'One stacked column by default, three columns from the medium breakpoint',
          'Three rows on medium screens',
          'A three-pixel gap'
        ],
        answer: 1,
        explanation: 'Unprefixed utilities are the mobile base while md: activates upward, expressing mobile-first responsiveness directly in markup.'
      },
      {
        q: 'How does the Tailwind class dark-mode strategy work?',
        options: [
          'It follows the OS automatically with no markup',
          'The dark: variant keys off a dark class on html that script toggles and persists',
          'It inverts all colors automatically',
          'It requires a separate stylesheet'
        ],
        answer: 1,
        explanation: 'Class strategy gives explicit control: script seeds the class from prefers-color-scheme, users override it, and dark: utilities respond.'
      },
      {
        q: 'When should utilities graduate into @apply components?',
        options: [
          'Immediately for every element',
          'When a stable pattern repeats with identical intent, keeping one-offs inline',
          'Never — extraction is deprecated',
          'Only for dark-mode styles'
        ],
        answer: 1,
        explanation: 'Extraction pays for genuine repetition like buttons while one-off layouts stay flexible inline, avoiding premature abstraction.'
      },
      {
        q: 'How is a Bootstrap modal opened without custom JavaScript?',
        options: [
          'With a CSS :hover rule',
          'With data-bs-toggle="modal" and data-bs-target pointing at the dialog id',
          'Modals open automatically',
          'With an inline onclick handler only'
        ],
        answer: 1,
        explanation: 'Bootstrap binds components declaratively through data attributes, wiring trigger, dialog, focus trap and dismissal from markup.'
      }
    ]
  }
]
