/**
 * Knowledge Universe — Visual Arts — Chapter 02: Photography
 * 2 lessons · ~2,198 words
 * field: Photography
 * legacy sources: arts-culture.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Photography]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 art-rule-of-thirds-visual-weight — The Rule of Thirds and Visual Weight
 *   02.2 photo-exposure-triangle — The Exposure Triangle: Aperture, Shutter Speed and ISO
 */
import type { KnowledgeTopic } from '../../types'

export const visualArtsCh02: KnowledgeTopic[] = [
  {
    id: 'art-rule-of-thirds-visual-weight',
    title: 'The Rule of Thirds and Visual Weight',
    domain: 'Arts & Culture',
    field: 'Photography',
    branch: 'Composition',
    tier: 'core',
    concepts: [
      'The 3×3 grid and its four power points',
      'Visual weight: what pulls the eye',
      'Balance and counterweight',
      'Leading lines guiding the gaze',
      'Negative space and horizon placement',
      'Breaking the grid deliberately',
    ],
    words: 1016,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'A photograph is organized before it is taken, and the rule of thirds is the first organizing idea most photographers learn. Composition — the arrangement of elements inside the frame — decides where the viewer\'s eye lands, travels, and rests, and this core Arts & Culture topic covers the grid, visual weight, leading lines, and negative space. The rule itself dates to an eighteenth-century British treatise on painting, yet it still governs the grid overlay on your phone camera today.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Composition is the difference between a snapshot of a scene and an image that holds attention — and it costs nothing to improve. The same grid thinking silently shapes portrait posing, web layouts, and film framing.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Divide the frame with two horizontal and two vertical lines and you get nine zones with four intersections — the power points. Placing a subject on a line or intersection adds gentle asymmetry that reads as alive, where dead-center placement often reads as static or accidental.',
      },
      {
        kind: 'para',
        text: 'Not all of the frame competes equally: bright areas, sharp focus, saturated warm color, high contrast, and above all faces and eyes carry the most visual weight. Viewers land on the heaviest element first and use it as their anchor, so composition is really the management of weight.',
      },
      {
        kind: 'para',
        text: 'An off-center subject needs something across the frame — a mountain, a shadow, an expanse of sky — to keep the image from tipping. Deliberate imbalance is a real tool as well: loading one side with emptiness manufactures unease, useful in certain portraits and street photographs.',
      },
      {
        kind: 'para',
        text: 'Roads, fences, shorelines, and shafts of light act as rails for attention; diagonals add motion, horizontals add calm. A line that delivers the eye to your subject is working for you, while one that sweeps past it and exits the frame is escorting viewers out of the picture.',
      },
      {
        kind: 'para',
        text: 'Emptiness around a subject is not wasted area but emphasis: leaving room in the direction a subject faces or moves keeps it free to move. The horizon follows the same logic — splitting the frame in half creates two competing pictures, while a lower third foregrounds the sky and an upper third foregrounds the land.',
      },
      {
        kind: 'para',
        text: 'Centered symmetry conveys formality, power, or stillness — a mirrored mountain reflection is the textbook case — and a tight frame on a face can feel confrontational in ways thirds never achieve. The rule is a default, not a law: masters break it deliberately, beginners break it accidentally, and intent is the difference.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: a landscape with a lone tree, a dramatic sunset, and a dirt path — where do tree, horizon, and path go?',
          'Recall the governing ideas: thirds grid for placement, visual weight for balance, leading lines for eye travel, horizon choice for emphasis.',
          'Apply: place the tree on the right power point, set the horizon on the lower third line since the sky is the show, and let the path enter bottom-left as a diagonal leading line toward the tree; leave open sky on the left as counterweight.',
          'State the result: the eye enters along the path, settles on the tree, and stays inside the frame — a composition that reads in one second.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Travel and landscape shooters use the in-viewfinder grid to place subjects in seconds.',
          'Portrait photographers align eyes along the top third line for naturally balanced headshots.',
          'Painters thumbnail compositions on thirds before committing to canvas.',
          'Designers lay out web pages and posters using the same grid logic.',
          'Film framings place characters off-center to leave story room in the shot.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The most common failure is mechanical placement — parking the subject on a power point while the background is a mess; the eye still bounces off clutter. Forgetting the frame edges lets stray branches and bright blobs steal weight from the subject. And treating the rule as law produces competent but forgettable images: it is a starting position, and knowing when to leave it is the actual skill.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Rule of thirds', def: 'Placing subjects along the lines or intersections of a 3×3 grid instead of dead center.' },
          { term: 'Power points', def: 'The four intersections of the thirds grid, natural magnets for subjects.' },
          { term: 'Visual weight', def: 'The pulling power of elements — brightness, contrast, sharpness, faces, color.' },
          { term: 'Leading lines', def: 'Edges and paths that guide the eye through the frame, ideally toward the subject.' },
          { term: 'Negative space', def: 'Deliberate emptiness that isolates and emphasizes the subject.' },
          { term: 'Counterweight', def: 'A secondary element balancing a heavy subject on the opposite side.' },
          { term: 'Horizon line', def: 'The boundary between ground and sky; its placement sets emphasis.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'According to the lesson, the phrase rule of thirds first appeared in print around:',
            options: ['1797, in a British painting treatise', 'The 1920s Bauhaus school', 'The 1860s photography manuals', 'Renaissance Italy'],
            answer: 0,
            explain: 'The phrase shows up in John Thomas Smith\'s 1797 Remarks on Rural Scenery, long before cameras had viewfinders.',
          },
          {
            q: 'Which element generally carries the MOST visual weight?',
            options: ['A uniformly blurred background', 'An empty patch of sky', 'A sharp, high-contrast human face', 'Whatever sits exactly at the center'],
            answer: 2,
            explain: 'Faces and eyes, amplified by sharpness and contrast, dominate attention almost involuntarily.',
          },
          {
            q: 'Placing the horizon on the lower third emphasizes:',
            options: ['The foreground and land', 'The sky', 'The middle ground', 'The subject'],
            answer: 1,
            explain: 'A low horizon gives the sky two-thirds of the frame, making clouds and light the picture\'s subject.',
          },
          {
            q: 'The best reason to center a subject is:',
            options: ['The center is the strongest default position', 'Intentional symmetry or confrontation, chosen deliberately', 'Centered subjects always read as professional', 'Thirds apply only to color photography'],
            answer: 1,
            explain: 'Centering is a deliberate statement — symmetry, formality, or confrontation — not a failure to compose.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'No prerequisites — grab any camera. Next: light and exposure basics, then color theory, then studying how master photographers crop.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Thirds grid: four power points beat dead center as a default.',
          'Visual weight: brightness, sharpness, contrast, and faces pull the eye first.',
          'A counterweight balances an off-center subject.',
          'Leading lines should deliver the eye to the subject, not out of frame.',
          'Horizon on a third — and break every rule only with intent.',
        ],
      },
    ],
  },
  {
    id: 'photo-exposure-triangle',
    title: 'The Exposure Triangle: Aperture, Shutter Speed and ISO',
    domain: 'Arts & Culture',
    field: 'Photography',
    branch: 'Exposure and Light',
    tier: 'core',
    concepts: [
      'The stop: doubling as the currency of exposure',
      'Aperture: f-numbers and depth of field',
      'Shutter speed: freezing versus blur',
      'ISO: gain and the price of noise',
      'Equivalent exposures: trading stops',
      'A working order of decisions',
    ],
    words: 1182,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Composition decides where the eye lands; exposure decides how much light lands at all. Every photograph is negotiated through three controls — the aperture inside the lens, the shutter in front of the sensor, and the ISO gain applied after capture — and photographers trade them against each other constantly. The currency of every trade is the stop: a doubling or halving of light. This core Photography topic covers the exposure triangle, the depth-of-field and motion-blur trade-offs hiding inside each dial, and how working photographers actually pick settings in the field.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Move off auto mode and every picture becomes a set of decisions you own: what stays sharp, what blurs, how clean the file is. The same three dials run every camera ever built, from a 1970s film body to a phone in pro mode.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Light is measured in stops, and one stop always means a doubling or a halving. Opening the aperture from f/5.6 to f/4 doubles the light; stretching the shutter from 1/250 to 1/125 s doubles it again; doubling ISO makes the sensor twice as responsive. Cameras display settings in third-stop clicks, which is why three clicks of a dial equal one full stop. The meter simply reports how far a combination sits from middle gray — you decide which trade-offs get you there.',
      },
      {
        kind: 'para',
        text: 'The aperture is an iris of overlapping blades, quoted as an f-number: focal length divided by the diameter of the opening. Counterintuitively, small numbers mean big holes — f/1.8 is wide open, f/16 is nearly a pinhole — and the classic full-stop sequence runs 1.4, 2, 2.8, 4, 5.6, 8, 11, 16. A wide aperture gives shallow depth of field: the portrait subject stays sharp while the background melts. Stopped down, more of the scene holds focus, which is why group photos and landscapes live near f/8.',
      },
      {
        kind: 'para',
        text: 'The shutter is a timed curtain, and its speed sets how motion is rendered. At 1/1000 s a sprinter\'s cleats freeze mid-stride; at 1/60 s the same runner smears. The reciprocal rule — handheld shutter speed at least 1 over the focal length — keeps camera shake invisible for a 50 mm lens at 1/50 s. Long exposures open a second world: one second smooths a waterfall into silk, thirty turn car headlights into ribbons. Blur is a tool, not a defect — pans and trails are planned.',
      },
      {
        kind: 'para',
        text: 'ISO is amplification applied after the light is captured, and its price is noise: speckled grain and blotchy color that grow as gain rises. Base ISO 100 is pristine; a dim school gymnasium may demand 3200 or 6400. The modern working rule is to raise ISO without guilt — noise can be reduced in software, but a blurred frame cannot be un-blurred. ISO is the dial you spend last, after aperture and shutter have committed to the look.',
      },
      {
        kind: 'para',
        text: 'Because stops are interchangeable, many combinations record the same brightness: f/8 at 1/125 s and ISO 100 matches f/5.6 at 1/250, and also f/11 at 1/60. Choosing among them is the actual craft. Want more background separation? Open up and pay with a faster shutter or higher ISO. Need to freeze faster motion? Accept less depth of field or more grain. Exposure modes formalize the priority: aperture priority guards depth of field, shutter priority guards motion.',
      },
      {
        kind: 'para',
        text: 'In the field, decide what the picture demands first. Portraits: aperture near f/1.8-2.8 for separation. Sports: 1/1000 s or faster, whatever the cost. Landscapes: f/8-f/11 on a tripod at ISO 100. Then let auto-ISO or the meter close the gap, check the histogram, and bracket when the light is tricky. The classic sunny-day starting point of f/8 at 1/500 s and ISO 100 sits one stop from the "Sunny 16" rule of thumb photographers have carried for a century.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: freeze a basketball player driving to the hoop in a dim school gym.',
          'Recall the governing idea: shutter speed sets motion rendering, aperture sets depth of field, and ISO pays for whatever light is missing.',
          'Apply: the motion demands 1/500 s or faster. The lens opens to f/2.8 for maximum light. The meter then calls for ISO 6400 — four stops of gain above base — which the camera\'s noise reduction can absorb. Freezing the action outranks a clean file.',
          'State the result: 1/500 s at f/2.8 and ISO 6400 — a sharp player isolated against a melted crowd, with grain accepted as the visible price of the trade.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Portrait photographers shoot f/1.4-f/2.8 specifically to dissolve backgrounds into soft bokeh.',
          'Sports and wildlife shooters anchor the shutter at 1/1000-1/2000 s and let everything else follow.',
          'Landscape work parks the aperture near f/8-f/11, where most lenses are sharpest, and carries a tripod instead of raising ISO.',
          'Astrophotographers combine 15-25 s exposures with f/2 or wider apertures and ISO 1600-3200 to gather starlight.',
          'Event photographers use auto-ISO with a shutter-speed floor to survive venues that change light hourly.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The classic error is hunting for the one correct exposure — there is none, only trade-offs. Close behind: obsessing over ISO noise until shutter speed drops and every frame blurs; reading the histogram while forgetting it says nothing about motion; and leaving ISO 6400 set when the dim venue becomes bright daylight, blowing out the next shoot entirely.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Stop', def: 'A doubling or halving of light; the unit all three exposure controls trade in.' },
          { term: 'F-number', def: 'Focal length divided by aperture diameter — smaller numbers mean larger openings.' },
          { term: 'Depth of field', def: 'The range of distances that appear acceptably sharp in one image.' },
          { term: 'Shutter speed', def: 'How long the sensor is exposed, from 1/8000 s to many seconds.' },
          { term: 'ISO', def: 'Post-capture gain applied to the signal; higher settings amplify noise along with light.' },
          { term: 'Image noise', def: 'Grain and color speckle that grows with ISO gain and underexposure.' },
          { term: 'Equivalent exposures', def: 'Different setting combinations that record the same overall brightness.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Changing the aperture from f/5.6 to f/8 does what to the light reaching the sensor?',
            options: ['Doubles it', 'Halves it', 'Leaves it unchanged', 'Quadruples it'],
            answer: 1,
            explain: 'Each full f-stop is a factor of two; f/8 admits half the light of f/5.6.',
          },
          {
            q: 'Which combination gives the shallowest depth of field?',
            options: ['f/16 at 1/60 s', 'f/8 at 1/250 s', 'f/2.8 at 1/1000 s', 'f/11 at 1/125 s'],
            answer: 2,
            explain: 'The widest aperture — the smallest f-number — produces the thinnest zone of focus.',
          },
          {
            q: 'To freeze a sprinting athlete, you would start with a shutter speed near:',
            options: ['1/30 s', '1/60 s', '1/250 s', '1/1000 s'],
            answer: 3,
            explain: 'Fast human motion needs roughly 1/1000 s to freeze cleanly at typical shooting distances.',
          },
          {
            q: 'Raising ISO from 100 to 1600 does what?',
            options: [
              'Changes the depth of field',
              'Amplifies the captured signal — and its noise — by four stops',
              'Slows the shutter automatically',
              'Halves the exposure',
            ],
            answer: 1,
            explain: 'ISO is gain: four doublings brighten the image and its noise together, with no optical effect.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisite: the composition lesson decides where things go — this one controls the light. Natural next steps: metering modes and histograms, white balance, and flash, where a fourth light source joins the triangle.',
        tone: 'path',
      },
    ],
  },
]
