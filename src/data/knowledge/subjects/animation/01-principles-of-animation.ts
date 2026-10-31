/**
 * Knowledge Universe — Animation — Chapter 01: Principles of Animation
 * 2 lessons · ~2,751 words
 * field: Animation & Sequential Art
 * legacy sources: arts-culture.ts, x40-arts-animation-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Principles of Animation, Moving Pictures]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 animation-twelve-principles — The Twelve Principles of Animation
 *   01.2 art-animation-twelve-principles — Animation: The Twelve Principles That Make Drawings Move
 */
import type { KnowledgeTopic } from '../../types'

export const animationCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'animation-twelve-principles',
    title: 'The Twelve Principles of Animation',
    domain: 'Arts & Culture',
    field: 'Animation & Sequential Art',
    branch: 'Principles of Animation',
    tier: 'core',
    concepts: [
      'Squash and stretch: deformation with volume held',
      'Anticipation: telegraphing the action',
      'Staging: one clear idea per shot',
      'Straight-ahead versus pose-to-pose workflow',
      'Follow-through, overlap, arcs and timing',
      'Exaggeration, solid drawing and appeal',
    ],
    words: 1581,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Animation does not move; it pretends to. A stack of still drawings flashes by at twenty-four frames per second and the visual system bridges the gaps, reading the flicker as continuous life. Everything an animator does either supports that illusion or breaks it. In 1981 two of Walt Disney\'s longest-serving animators, Frank Thomas and Ollie Johnston, gathered the studio\'s working knowledge into The Illusion of Life, cataloguing twelve principles hammered out on shorts and features since the late 1920s — a descriptive list of what already worked when a drawing needed to feel alive.',
      },
      {
        kind: 'para',
        text: 'Because the principles describe perception rather than any single technique, they outlived hand-drawn cel animation. Stop-motion puppeteers, computer animators, motion designers and game animators all lean on the same dozen ideas, because eyes have not changed since 1981 — or 1931. This lesson walks the full list — squash and stretch, anticipation, staging, straight-ahead action and pose-to-pose, follow-through and overlapping action, slow-in and slow-out, arcs, secondary action, timing, exaggeration, solid drawing and appeal — with the reason each one sells motion to the eye.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The twelve principles are the shared vocabulary of animation studios everywhere. Learn them and you can diagnose why a movement feels dead and fix it — whether the medium is pencil, clay, or a computer graph editor.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Squash and stretch deforms a shape along its motion. A rubber ball flattens the instant it strikes the ground and elongates as it rebounds — the visible signature of the forces acting on it. The discipline is conservation of volume: the same ball, flattened, must spread wider — never simply shrink. Hold volume and the material reads as soft and alive; break it and the object appears to inflate and deflate. It also tells an audience what things are made of: a bouncing sack of flour squashes generously, an anvil barely at all.',
      },
      {
        kind: 'para',
        text: 'Anticipation is the wind-up before the action: the crouch before a jump, the pull-back before a throw, the inhale before a shout. It works because the eye must be told what is about to happen; a character who leaps with no preparation reads as starting mid-motion, and the audience misses the first beat. A small movement opposite to the main one buys the viewer\'s attention a fraction of a second before spending it.',
      },
      {
        kind: 'para',
        text: 'Staging is presentation: one idea per shot, posed so it cannot be misread. The classic test is the silhouette — if a pose still reads as a pure black shape, it will read on screen. It covers framing, lighting and hold length; it is the animation-side cousin of the composition ideas in the Library\'s cinematography lesson, applied to a moving performance.',
      },
      {
        kind: 'para',
        text: 'Straight-ahead and pose-to-pose are the two working methods. Straight-ahead means animating frame by frame from the first drawing, in order — spontaneous, prone to happy accidents, and well suited to unpredictable motion like fire, water and fabric. Pose-to-pose means planning the storytelling poses first, then charting the timing, then filling the in-between drawings. It gives control over acting and structure, which is why character animation is usually blocked out pose-to-pose and polished shot by shot.',
      },
      {
        kind: 'para',
        text: 'Follow-through and overlapping action handle the fact that nothing in the world stops or starts all at once. When a runner halts, her hair and clothing keep travelling before settling. Overlapping action staggers connected movements — the arm arrives a few frames after the shoulders turn — so the parts of a figure do not move in robotic unison. Together they make a character feel assembled from mass rather than geometry.',
      },
      {
        kind: 'para',
        text: 'Slow-in and slow-out encode physics: objects accelerate into motion and decelerate out of it, and animators distribute drawings accordingly — many drawings near the extremes of a move, few in the middle. Even spacing reads as machinery. Arcs encode the rest of physics: because limbs pivot around joints, nearly all natural motion traces curved paths. A head turn that travels in a perfectly straight line looks like a sliding puppet; the same turn with a slight dip in its path looks like a neck.',
      },
      {
        kind: 'para',
        text: 'Secondary action is a smaller movement layered on the main one to enrich it — wiping a tear while sniffling, adjusting a hat during a stroll — and it must stay subordinate or it becomes a distraction. Timing is the number of frames an action occupies, and it carries meaning beyond speed. The same body taking a step can read as light, heavy, nervous or exhausted depending only on how many frames it is given; fewer drawings snap, more drawings drag. Timing is the one principle that applies before any drawing exists.',
      },
      {
        kind: 'para',
        text: 'The last three principles are quality controls. Exaggeration pushes a pose or movement past realism toward clarity — not wilder, but more legible than life, so the essence of the action survives the small screen and the fast cut. Solid drawing is draftsmanship: giving figures weight, volume and balance in three-dimensional space, and avoiding twinning — mirrored, symmetrical limbs that read as lifeless. Appeal is the magnetism of a design or performance; it belongs to villains as much as heroes, and it means interesting to look at, not necessarily pretty.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Plan the path: sketch the arc of the bounce — high at first, losing height with each impact, rolling out at the end. The arc is the scene\'s spine.',
          'Set the timing: decide the mass first. A heavy ball crosses in many frames with long, slow bounces; a light rubber ball snaps between impacts in few.',
          'Block the poses: contact, squash at impact, stretched fall, apex — placed on the timeline pose-to-pose, with more drawings clustered near the extremes than the middle.',
          'Animate the deformation: squash only on contact, stretch only in flight, and check that total volume never changes — flatten wider, never smaller.',
          'Add the settle: after the final impact let the ball wobble through two or three tiny oscillations — follow-through — before it stills.',
          'Review at speed: watch without stopping. If the eye loses the ball at any point, the timing has a hole; fix drawings, not intentions.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'para',
        text: 'In computer animation the principles translate rather than expire. Squash and stretch becomes a rig deformation; slow-in and slow-out becomes the shape of the interpolation curve in the graph editor — the software\'s default linear easing is exactly why unedited motion looks stiff until an animator bends the curves. Anticipation and follow-through are set as extra keyframes around the main action. Game animators layer them so characters can be interrupted at any moment, and interface designers borrow slow-in and slow-out for eased menu transitions.',
      },
      {
        kind: 'para',
        text: 'In stop-motion the same ideas are fought for by hand: the puppet physically squashes against the ground, and follow-through is pressed into costume fabric one frame at a time. Motion designers smear static drawings with speed lines and multiples. The unifying lesson is that the principles are medium-independent because they are about perception, not tools — a fact worth testing: pause any animated shot at random and name which principle is doing the work in that moment.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Squash and stretch', def: 'Deforming a shape along its motion — flattening at impact, elongating in flight — while conserving total volume.' },
          { term: 'Anticipation', def: 'A preparatory movement opposite to the main action that readies the audience for what follows.' },
          { term: 'Pose-to-pose', def: 'Working method that plans the storytelling key poses first, then fills the in-between frames to a timing plan.' },
          { term: 'Follow-through', def: 'The continuation of loose parts — hair, cloth, limbs — after the main body has stopped.' },
          { term: 'Slow-in and slow-out', def: 'Clustering drawings near the extremes of a move so action accelerates and decelerates naturally.' },
          { term: 'Appeal', def: 'The charisma of a design or performance that holds the viewer\'s willingness to keep watching.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'These questions check the reasoning behind the principles rather than the ability to recite the list — the why matters more than the order.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A bouncing ball is drawn stretched during flight, but the stretched drawings keep the same width as the resting ball. What does the audience perceive?',
            options: ['The ball losing and gaining material as it moves', 'A perfectly natural bounce', 'A heavier, more serious ball', 'Slower motion overall'],
            answer: 0,
            explain: 'Volume must be conserved: a stretched ball should be narrower. Keeping full width while adding length means the ball visibly grows, and the material illusion breaks.',
          },
          {
            q: 'Why does a jump read better when the character crouches first?',
            options: ['The crouch hides the takeoff drawing', 'Anticipation tells the audience where to look and what is coming', 'It saves in-between drawings', 'Crouching automatically adds follow-through'],
            answer: 1,
            explain: 'The preparatory movement telegraphs the action, buying the viewer\'s attention a beat before the jump spends it.',
          },
          {
            q: 'Which pairing belongs to the same principle family?',
            options: ['Staging and appeal', 'Slow-in and solid drawing', 'Follow-through and overlapping action', 'Arcs and exaggeration'],
            answer: 2,
            explain: 'Both deal with parts of a figure moving at different times — loose material continuing after a stop, and connected movements staggered rather than locked in unison.',
          },
          {
            q: 'Two identical characters each take one step — one in 8 frames, the other in 24. The longer version reads as:',
            options: ['Faster and lighter', 'Heavier or more deliberate', 'More exaggerated', 'More appealing by default'],
            answer: 1,
            explain: 'Timing carries mass and mood: more frames per action reads as weight, fatigue or gravity; fewer frames read as snap and lightness.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Next in Animation & Sequential Art: storyboarding, where motion is planned before it is animated, then the stop-motion and digital-pipeline lessons, which show the same dozen ideas fighting for the same illusion in different media.',
        tone: 'path',
      },
    ],
  },
  {
    id: "art-animation-twelve-principles",
    title: "Animation: The Twelve Principles That Make Drawings Move",
    domain: "Arts & Culture",
    field: "Animation & Sequential Art",
    branch: "Moving Pictures",
    tier: "core",
    concepts: [
      "The twelve principles and where they came from",
      "Squash and stretch: mass with moods",
      "Anticipation, follow-through, overlap",
      "Timing and spacing: weight in frames",
      "Slow in, slow out and arcs",
      "Straight-ahead versus pose-to-pose",
      "Staging, exaggeration, appeal",
    ],
    words: 1170,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "In 1981 two of Disney's veteran animators, Ollie Johnston and Frank Thomas, published The Illusion of Life, distilling half a century of studio discovery into twelve principles of animation. Drawn up for pencil and paper, the list turned out to describe motion itself, which is why 3-D riggers, game animators and interface designers still keep it taped above their desks. This core Animation & Sequential Art topic walks the principles that matter most: squash and stretch, anticipation and follow-through, timing and spacing, arcs, and the two ways to build a shot.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Animation is physics performed: the twelve principles encode how mass, momentum and personality read to the eye. Learn them and every bouncing logo, game jump and menu transition becomes readable craft rather than decoration.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "A ball hitting the ground flattens; hurled, it elongates along its path. Squash and stretch exaggerate a form's flexibility while conserving volume — a flattened ball must widen as it shortens, or it reads as deflating rather than compressing. The principle scales from a ball to a face: a jaw that drops and stretches sells surprise. Rigid objects squash nothing, and animating a rigid thing flexibly breaks its character; the amount of distortion is literally the material's personality.",
      },
      {
        kind: "para",
        text: "Before nearly every action comes its opposite: a wind-up before the pitch, a crouch before the leap, an inhale before the shout. Anticipation telegraphs what is coming and racks the audience's attention; skipping it makes motion unreadably sudden. After the action, follow-through lets the loose parts keep moving — the arm swings past the release, the ponytail arrives late — and overlapping action staggers those arrivals: hips, then shoulders, then head. Nothing in nature stops all at once, and animation that does reads robotic.",
      },
      {
        kind: "para",
        text: "Timing is how many frames an action takes; spacing is where the object falls between those frames. Together they are weight: a heavy safe needs many frames and gradual spacing, a balloon few and snappy. Because gravity accelerates falling things, spacing widens through a fall — equal spacing looks like an elevator, not a drop. Slow in and slow out ease the ends of movements, since a hand does not start or stop at full speed — which is why animation software's easing curves are named after the principle.",
      },
      {
        kind: "para",
        text: "Living motion curves. Limbs swing around joints, thrown objects trace parabolas, and even a head turn rides a shallow dip rather than a ruler-straight path. Straight-line motion reads mechanical — exactly right for robots and conveyor belts, which is the point: the straight line is a choice, not a default. Arc paths also carry force; a punch that loops wide feels committed, a dragging foot arcs low.",
      },
      {
        kind: "para",
        text: "Two workflows build the frames. Straight-ahead animates frame after frame in order — spontaneous and fluid, ideal for fire, water and chaotic effects, at the cost of drift in size and shape. Pose-to-pose blocks the key storytelling poses first, then the breakdowns, then the in-betweens — planned and controllable, the standard for character acting. Professionals hybridize: pose the acting beats, then straight-ahead the flourishes between them.",
      },
      {
        kind: "para",
        text: "The remaining principles are about readability and charm. Staging composes each frame so the idea is unmistakable — the silhouette test: black out the character and check that the pose still reads. Secondary action supports the main one without competing, like whistling while walking; exaggeration pushes poses past realism toward truth; appeal is simply whether the design draws the eye; solid drawing keeps volumes consistent from turn to turn.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Frames in a shot",
        latex: "N = t \\times f",
        meaning: "A shot of t seconds at f frames per second needs N drawings on ones; animating on twos halves it — at 24 fps, one second is 24 drawings on ones, 12 on twos.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: animate a rubber ball dropped from desk height, landing and bouncing twice, at 24 fps.",
          "Recall the governing ideas: gravity widens spacing through a fall; contact frames squash while conserving volume; ascents decelerate with shrinking spacing; each bounce loses height.",
          "Apply: give the first fall 10 frames, spacing widening toward impact. Squash across 3 contact frames — roughly half height, double width. Launch into a rising arc with wide spacing that narrows toward the apex; make the second bounce 5 frames high and the third 2, switching to twos after the first bounce for weight.",
          "State the result: the ball reads as rubber — accelerating falls, squashed impacts, dying bounces — in about two seconds of screen time.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "UI and motion designers tune easing curves that are slow-in/slow-out by another name.",
          "Game animators build anticipation into attack cycles so players can read and react.",
          "Stop-motion animators shoot on twos to stretch budgets without losing life.",
          "Explainer and whiteboard videos use staging and appeal to hold attention.",
          "Live-action editors borrow anticipation and follow-through when cutting action beats.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The tells of amateur work: linear, evenly spaced motion that glides like a screen saver; squash that loses volume and turns balls into pancakes; actions with no wind-up, so viewers miss them entirely; and animating everything on ones when twos would read just as alive at half the work. Exaggeration without structure tips into noise — the principles are a kit, not a checklist to dump into every shot.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Squash and stretch", def: "Deforming a form on impact and launch while conserving its volume — the read of flexible mass." },
          { term: "Anticipation", def: "The preparatory opposite motion that telegraphs an action before it happens." },
          { term: "Follow-through", def: "Loose parts continuing past an action's end before settling." },
          { term: "Timing and spacing", def: "The frames an action consumes and the positions between them — together, weight." },
          { term: "Slow in, slow out", def: "Easing at the start and end of motion; no living thing starts or stops at full speed." },
          { term: "Arcs", def: "The curved paths natural motion follows around joints and through space." },
          { term: "Staging", def: "Composing each frame so one idea reads instantly — the silhouette test." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "During squash, correct practice keeps:",
            options: ["Volume constant", "The object's color", "Vertical height", "The outline rigid"],
            answer: 0,
            explain: "Flatten one dimension and widen the other, or the object reads as deflating rather than compressing.",
          },
          {
            q: "At 24 fps, one second animated on twos uses:",
            options: ["24 drawings", "18 drawings", "12 drawings", "6 drawings"],
            answer: 2,
            explain: "On twos, each drawing is held two frames: 24 frames ÷ 2 = 12 drawings per second.",
          },
          {
            q: "Anticipation exists mainly to:",
            options: ["Lengthen the shot", "Telegraph the coming action so it reads", "Save drawings", "Show off the background"],
            answer: 1,
            explain: "The wind-up warns the eye where to look and when — without it, action lands as a blur.",
          },
          {
            q: "Equal spacing between every frame of a fall reads as:",
            options: ["Realistic gravity", "Heaviness", "Mechanical, elevator-like motion", "Slow motion"],
            answer: 2,
            explain: "Falling things accelerate, so spacing must widen; uniform spacing reads as constant velocity — a machine.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Any animation app — even a flip-book notebook — teaches this. Natural next steps: the comics lesson for still-frame sequencing on either side of the gutter, the rhythm lesson for timing against beats, and the cinematography lesson for staging shots.",
        tone: "path",
      },
    ],
  },
]
