import type { KnowledgeTopic } from '../types'

/**
 * Expansion pass X40 (2026-10-25): the Animation & Sequential Art pass
 * (ARTS-SPLIT-20261025-C). The arts-content audit found ZERO animation
 * topics; this pass seeds the new Animation & Sequential Art field with
 * 5 lessons across 5 branches, ~1,300-1,500 words each:
 *
 *   1. animation-twelve-principles (Principles of Animation, core) — the
 *      full classic list from the studio tradition, with the reason each
 *      principle sells motion to the eye.
 *   2. animation-storyboarding (Storyboarding & Pre-Production, core) —
 *      script to beats, panel grammar, animatics, model sheets, pipeline.
 *   3. animation-stop-motion (Stop-Motion & Hybrid, intermediate) —
 *      armatures, replacement faces, plasticine, cutout, pixilation, and
 *      the discipline of steady registration.
 *   4. animation-digital-3d (Digital & 3D, intermediate) — modeling,
 *      rigging, animation curves, simulation, lighting/shading, render
 *      passes and compositing.
 *   5. animation-comics-grammar (Comics & Sequential Art, core) — panel
 *      and gutter, closure, layout flow, balloons and SFX, elastic time,
 *      manga vs Western traditions, the infinite canvas.
 *
 *  DEDUP carve-outs (per worklog guardrails):
 *  - 'Montage and the Kuleshov Effect' (Film & Cinema) already owns film
 *    editing and the Kuleshov experiments. Comics CLOSURE is taught here as
 *    a distinct sibling concept — meaning assembled by the reader in the
 *    gutter, in the reader's own time — with only a brief cross-reference.
 *  - 'Cinematography: Shots, Camera Movement and Light' already owns shot
 *    types and key/fill/rim lighting. The storyboarding and 3D lessons
 *    REFERENCE that vocabulary (panel grammar borrows shot sizes; virtual
 *    lights reuse the same grammar) without re-teaching it.
 */

export const x40ArtsAnimationPassTopics: KnowledgeTopic[] = [
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
    // ------------------------------------------------------------------
    {
      id: 'animation-storyboarding',
      title: 'Storyboarding and Pre-Production',
      domain: 'Arts & Culture',
      field: 'Animation & Sequential Art',
      branch: 'Storyboarding & Pre-Production',
      tier: 'core',
      concepts: [
        'From script to story beats',
        'Panel grammar: shot types and arrows',
        'Animatics: testing timing cheaply',
        'Model sheets and character turnarounds',
        'Planning the production pipeline',
        'Why fixes on paper are cheapest',
      ],
      words: 1383,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Nobody animates a film and then decides what it is about. Long before the first frame of animation, the story exists as words and then as pictures: the storyboard, a sequence of drawings that plans the film shot by shot and cut by cut. The practice took shape at the Walt Disney studio in the early 1930s — studio history credits animator Webb Smith with the simple act of pinning his drawings in sequence on a corkboard instead of keeping them in a pile — and the board quickly became the room where the film was argued over, re-cut and approved before anyone touched production.',
        },
        {
          kind: 'para',
          text: 'A storyboard panel is not illustration; it is a decision. Each drawing fixes what the camera sees, where the characters stand, roughly how long the shot lasts, and why the shot exists at all. String the decisions together on paper and the whole team — director, designers, animators, editors — can walk through the film years before it exists. Pre-production, this planning phase, is where animated films are actually made; production merely executes what it decided.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Storyboarding is the cheapest place to be wrong. A joke that dies, a confusing cut, a scene that drags — all are found on paper for the cost of pencil lead, before a single expensive frame of animation is produced.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The unit of planning is the beat: the smallest piece of story that changes something. A script is read aloud and broken into beats — she hears a knock; she freezes; she decides to open the door — and each meaningful beat earns one or more panels. Panels are drawn rough on purpose: polish invites protectiveness, while scribbles stay easy to throw away, and the whole culture of the board room depends on drawings being cheap to replace.',
        },
        {
          kind: 'para',
          text: 'Panel grammar is the shorthand that makes boards readable at a glance. The shot vocabulary — wide, medium, close, over-the-shoulder, point of view — is borrowed directly from live-action filmmaking, where the meaning of each shot size is covered in the Library\'s cinematography lesson; the board reuses it to control intimacy and scale. Inside a panel, arrows carry the grammar of motion: a solid arrow means a character or object moves through the frame, a double-headed arrow means the camera itself pans or tilts, and radiating lines mean it zooms. Camera notes — push in slowly, rack focus to the window — sit beneath the frame, and panels are numbered so any shot can be referenced in notes and reviews.',
        },
        {
          kind: 'para',
          text: 'Boards are photographed or scanned and cut together with temporary dialogue, music and sound into an animatic — a slideshow of the film with real timing. The animatic is where pacing is discovered: a gag that seemed obvious in the script plays as slow mud at actual seconds; a cut that read fine between adjacent drawings disorients at speed. Timing tests refine it — shots are trimmed, holds lengthened, whole sequences cut or reordered. A feature may go through many animatic versions; each pass costs days, where the same discovery during final animation would cost months.',
        },
        {
          kind: 'para',
          text: 'Character design locks into model sheets once the boards prove who the characters are. A turnaround shows the character from front, three-quarter, side and back so that any animator draws the same body; expression sheets catalogue the emotional range; scale charts fix heights against the rest of the cast. The sheets exist because animation is made by many hands — without them a character would drift in proportion from scene to scene. Staying on model is the discipline of drawing the character as the sheets dictate.',
        },
        {
          kind: 'para',
          text: 'The pipeline is the order of the factory. Pre-production: script, boards, animatic, design of characters, props and backgrounds, voice records. Production: layout, which translates panels into staged space and camera setups; animation proper; and the ink-and-paint or rendering steps that finish frames. Post-production: compositing, final edit, music and sound mix. Studios vary the details but never the dependency chain: each stage consumes the approved decisions of the one before it — which is exactly why the cheapest fixes are always upstream.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Break the script into beats: a girl at a desk hears a knock; she hesitates, hand hovering over a photograph; she crosses to the door; she opens it; a cat walks in. Five beats, roughly four seconds each.',
            'Choose the grammar: a wide for the room and the knock, a close-up on her face and hovering hand for the hesitation, a medium shot tracking her crossing, and a held close-up as the door opens — the payoff gets the tightest shot.',
            'Annotate: motion arrows for her crossing, a camera note reading slow push in on the hesitation panel, and the sound cue KNOCK KNOCK written where it lands.',
            'Cut the animatic with scratch dialogue and a door knock recorded on a phone; watch it three times without stopping.',
            'Diagnose: the hesitation plays twice as long as it deserves — four panels become two — and the reveal of the cat needs one extra panel of her reaction first, or the joke lands before the audience is looking.',
            'Re-board only the broken beats and recut. Total cost: an afternoon and a pencil.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'para',
          text: 'Live-action filmmaking boards too: action sequences, stunts and effects shots are boarded so crews do not build sets the camera will never see. Advertising boards every spot before the shoot day, because a thirty-second commercial cannot afford discovery on set. Game studios board cutscenes; theme parks board rides. In every case the reasoning is identical — the board converts an idea into something a committee can approve and a crew can price.',
        },
        {
          kind: 'para',
          text: 'For a solo creator the discipline scales down without changing shape. A one-minute short planned as twenty thumbnails on index cards will still outperform the same minute animated from enthusiasm alone, because the index cards expose dead time and redundant shots early. The habit to build is simple: never animate a shot you cannot justify with one sentence about what it changes.',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Story beat', def: 'The smallest unit of story that changes something; one or more panels per beat.' },
            { term: 'Animatic', def: 'The storyboard cut together with temp sound and real timing, used to test pacing before animation begins.' },
            { term: 'Model sheet', def: 'Reference sheets fixing a character\'s proportions, expressions and scale so all animators draw the same figure.' },
            { term: 'Turnaround', def: 'A character shown from front, three-quarter, side and back views on one sheet.' },
            { term: 'Panel grammar', def: 'Storyboard shorthand: shot types, motion arrows, camera notes and numbered frames.' },
            { term: 'Pipeline', def: 'The ordered stages of production, each consuming the approved decisions of the previous stage.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Quick checks on why pre-production works the way it does — the reasoning matters more than the vocabulary.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Why are storyboard panels drawn rough on purpose?',
              options: ['Rough drawings render faster in the animatic', 'Sloppy art signals a low budget', 'Unpolished drawings stay cheap to throw away, keeping revision easy', 'Only pencil lines scan properly'],
              answer: 2,
              explain: 'The board room depends on replacing drawings without ceremony; polish creates ownership, and ownership slows cutting.',
            },
            {
              q: 'An animatic primarily tests:',
              options: ['Final image quality', 'Pacing and readability at real speed', 'Voice acting quality', 'Whether characters are on model'],
              answer: 1,
              explain: 'The animatic exists to expose timing problems — dead beats, confusing cuts — while fixing them still costs only a re-edit.',
            },
            {
              q: 'A scale chart on a model sheet exists so that:',
              options: ['Backgrounds can be painted first', 'The animatic can be timed precisely', 'The marketing department knows the characters', 'Characters keep consistent heights relative to one another across scenes and animators'],
              answer: 3,
              explain: 'Many animators draw the same cast; the scale chart keeps a child a child and a giant a giant in every scene.',
            },
            {
              q: 'The deepest reason fixes are cheapest on paper is that:',
              options: ['Paper is a cheap physical material', 'Each pipeline stage consumes the previous stage\'s approved decisions, so errors compound downstream', 'Studios are contractually required to board first', 'Animators prefer not to revise finished work'],
              answer: 1,
              explain: 'An upstream change costs a drawing; the same change after animation, lighting and rendering multiplies across every dependent stage.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Natural companions: the twelve principles lesson explains what will eventually fill the panels with life, and the stop-motion and digital-pipeline lessons show how different media execute the same board. The cinematography lesson deepens the shot grammar boards borrow.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'animation-stop-motion',
      title: 'Stop-Motion: Clay, Puppets and Cutouts',
      domain: 'Arts & Culture',
      field: 'Animation & Sequential Art',
      branch: 'Stop-Motion & Hybrid',
      tier: 'intermediate',
      concepts: [
        'The frame-by-frame discipline',
        'Puppet armatures and replacement faces',
        'Plasticine: clay that never dries',
        'Cutout and collage animation',
        'Pixilation: live actors as puppets',
        'Locked registration and steady light',
      ],
      words: 1451,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Stop-motion is animation with objects instead of drawings: a real puppet is posed, a photograph is taken, the puppet moves a few millimetres, another photograph is taken. Twenty-four of those photographs make one second of film, which means a minute of screen time is more than a thousand separate poses, each one set by hand. That is the discipline which defines the craft — an animator on a feature production is doing well to deliver a few seconds of finished footage in a week — and it is also what gives the medium its strange double character: handmade warmth bound to a hypnotic, slightly deliberate gait.',
        },
        {
          kind: 'para',
          text: 'The lineage is long. Willis O\'Brien animated the dinosaurs and the Kong of the 1933 King Kong; his protégé Ray Harryhausen spent decades combining stop-motion creatures with live actors; Aardman built a house style out of plasticine characters like Wallace & Gromit; LAIKA\'s films pushed puppet craft toward elaborate hybrids with digital cleanup. The medium survives beside computer effects precisely because the camera photographs something real — real felt, real metal, real light falling on real paint — a texture no renderer has fully imitated.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Stop-motion teaches every animator the value of a single frame. When one photograph equals a twenty-fourth of a second, planning, patience and absolute consistency stop being virtues and become the entire job.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'A stop-motion puppet is built around its armature: a skeleton. Quality armatures are machined from metal with ball-and-socket joints whose friction can be tuned to hold a pose against gravity without drifting between frames; cheaper builds use twisted wire, which bends easily but fatigues and eventually snaps. Over the armature goes a body of foam latex or silicone, padded and clothed. The feet contain tie-downs — threaded bolts that pass through holes in the set floor into nuts beneath — so a puppet standing on one leg stays exactly there. Without tie-downs, characters lean, wobble and fall over mid-take.',
        },
        {
          kind: 'para',
          text: 'The finest control in puppet work often comes from replacement animation: instead of resculpting a mouth into a new shape every frame, the studio keeps a library of pre-made parts and swaps them. A drawer of mouths, numbered shape by shape, gives dialogue lip-sync; George Pal\'s Puppetoons of the 1940s built entire characters from swappable carved heads and limbs. LAIKA modernised the idea by three-dimensionally printing thousands of faces for films such as Coraline, giving handcrafted puppets an expressive range no single sculpted head could hold.',
        },
        {
          kind: 'para',
          text: 'Clay animation uses plasticine — modelling clay based on oils and waxes — because it never dries out. That single property makes it the perfect animation material: a figure can be resculpted every frame for months without hardening or cracking. Typically plasticine is built over a simple wire armature, and the animator works by pressing and smoothing it into each new pose. Aardman\'s films made the fingerprints in the clay part of the style, and the word claymation itself was trademarked by American animator Will Vinton\'s studio.',
        },
        {
          kind: 'para',
          text: 'Cutout animation moves flat puppets — paper, card or fabric — hinged at the joints with pins or brads, shot by a camera pointing down at a tabletop. It is fast, because whole limbs are swapped rather than redrawn. Lotte Reiniger\'s silhouette films of the 1920s, including The Adventures of Prince Achmed, the oldest surviving animated feature, worked in articulated black paper against backlit glass. Terry Gilliam\'s cutout collages for Monty Python made the technique a comedy language, and South Park began as genuinely physical paper cutouts before moving to software that mimics the look.',
        },
        {
          kind: 'para',
          text: 'Pixilation is stop-motion performed by living actors: a person holds a pose, is photographed, shuffles invisibly into the next pose, and is photographed again. Norman McLaren\'s Neighbours (1952) is the canonical demonstration — two men glide across a lawn and fight as if the ground itself were dragging them. Because people cannot hold perfectly still, pixilation carries a telltale shimmer, which is also its charm: actors teleport, slide and unspool in ways no drawn version of the trick quite matches.',
        },
        {
          kind: 'para',
          text: 'The invisible craft is keeping everything that should not move, motionless. The set is bolted down; the camera is locked on its stand with every knob taped; lights sit on stable circuits, because a lamp drifting a fraction of a stop makes the finished shot flicker. Heat is the enemy — hot lights soften plasticine and sag foam, which is why many modern studios favour cool LED arrays. Tie-down holes are patched with clay matching the floor, and capture software with onion-skinning — the industry standard being Dragonframe — overlays the previous frame so the animator can measure exactly how far anything moved. Stop-motion is largely the art of watching things not move.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Plan the timing: at twenty-four frames per second, five seconds is 120 frames. A plain walk runs about one step per twelve frames — roughly ten steps — so chart the contact and passing poses for the first step before touching the puppet.',
            'Anchor: drill the tie-down through the set floor into the standing foot before the first frame.',
            'Shoot the first step in small, equal moves: hips forward, back leg bending to push, arms counter-swinging a frame behind the legs — overlapping action by hand.',
            'Onion-skin every frame against the last; any joint that jumped too far is re-posed and the frame re-shot before moving on.',
            'Patch the tie-down hole with clay that matches the floor, checking the patch against the previous frame so it does not pop.',
            'Play the shot at speed. The walk either has life or it does not — and every flaw is a lesson about exactly which frames lied.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'para',
          text: 'Commercials and music videos still commission stop-motion for its texture — a cereal box that visibly walks carries an authenticity of object that audiences feel before they can name it. Title sequences, holiday specials and channel idents keep small studios busy. In classrooms, stop-motion remains the most democratic animation form: a phone, a desk lamp and a few blocks of modelling clay produce real films, and the frame budget teaches timing more brutally than any software tutorial.',
        },
        {
          kind: 'para',
          text: 'Modern features are hybrids. Digital tools erase support rigs from the frame, retouch seams in replacement faces, and blend crowd shots of physical puppets with computer-generated ones. Far from killing the craft, the digital safety net lets productions take riskier physical performances — a puppet can leap further when someone can paint out the rig that held it up.',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Armature', def: 'The poseable skeleton inside a puppet: machined ball-and-socket joints, or wire on smaller builds.' },
            { term: 'Replacement animation', def: 'Swapping pre-made parts — mouths, heads, limbs — frame by frame instead of resculpting a single piece.' },
            { term: 'Plasticine', def: 'Oil-based modelling clay that never dries, allowing months of frame-by-frame resculpting.' },
            { term: 'Pixilation', def: 'Stop-motion performed by live actors holding poses frame by frame.' },
            { term: 'Onion skinning', def: 'Capture software overlaying the previous frame so the animator can measure each new move.' },
            { term: 'Tie-down', def: 'A bolt through the puppet\'s foot and the set floor that anchors the pose.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Quick checks on the material logic of the medium — why each technique is built the way it is.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Why plasticine rather than ordinary water-based clay?',
              options: ['It is cheaper', 'It is lighter for armatures', 'It never dries out, so a figure can be resculpted frame by frame for months', 'It photographs in higher contrast'],
              answer: 2,
              explain: 'Water-based clay hardens and cracks within days; plasticine\'s oil base keeps it workable for an entire production.',
            },
            {
              q: 'A ball-and-socket armature is preferred over wire for hero puppets chiefly because:',
              options: ['Its tunable joints hold poses without drifting between frames', 'It is lighter than wire', 'Wire cannot be animated at all', 'It bends in arcs automatically'],
              answer: 0,
              explain: 'Machined joint friction keeps a heavy puppet exactly where it was left; wire slowly springs back and fatigues.',
            },
            {
              q: 'Heat from lights is a stop-motion problem because it:',
              options: ['Fogs the camera lens', 'Softens plasticine and can shift foam and paint across frames', 'Changes the exposure of every single frame', 'Makes the animator sweat'],
              answer: 1,
              explain: 'A sagging prop or softening face moves between frames — the deadly kind of motion, because it was nobody\'s choice.',
            },
            {
              q: 'Pixilation differs from other stop-motion because:',
              options: ['It uses drawings instead of objects', 'It can only be shot outdoors', 'It requires no camera lock', 'Live actors hold the poses, giving the motion its characteristic shimmer'],
              answer: 3,
              explain: 'People cannot hold perfectly still, so pixilation trades precision for an uncanny glide that drawn animation must fake.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'From here, the digital-pipeline lesson shows how computers solve the same problems — pose holding, smooth motion, clean lighting — by opposite means, and the twelve principles lesson explains why a good walk reads well in either medium.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'animation-digital-3d',
      title: 'The Digital Pipeline: Modeling, Rigging and Rendering',
      domain: 'Arts & Culture',
      field: 'Animation & Sequential Art',
      branch: 'Digital & 3D',
      tier: 'intermediate',
      concepts: [
        'Polygon meshes: vertices, edges, faces',
        'Rigging and skinning: the digital skeleton',
        'Keyframes and animation curves',
        'Simulation for cloth, hair and crowds',
        'Shading, texturing and UV mapping',
        'Render passes and compositing',
      ],
      words: 1366,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Computer animation did not replace the animation craft; it re-housed it. A 3D production still designs characters, still blocks their performances, still lights and photographs them — but the drawing desk becomes a pipeline of specialised stages, each feeding the next. Modeling constructs the geometry, rigging equips it for motion, animation performs, simulation handles what refuses to be posed, lighting and shading dress the world, and rendering turns all of it into final images that compositing assembles.',
        },
        {
          kind: 'para',
          text: 'The stages exist because 3D data is expensive to produce and easy to ruin. A single character shot may involve a dozen specialists whose work must interlock, and the pipeline is the contract between them. Understanding the order — and why the order is the order — is the difference between a hobbyist making a clip and a studio shipping a film.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Every stage of the 3D pipeline exists to defer commitment. Change a shader after lighting and the shot re-renders; change the rig before animation and everything downstream updates. Knowing what to lock, and when, is pipeline literacy.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Modeling builds form from polygons — flat shapes defined by vertices, edges and faces, welded into a mesh. Characters are usually built from four-sided polygons, called quads, because quad topology subdivides cleanly into smooth surfaces and, more importantly, deforms cleanly: joints like shoulders and knees need rings of edges — edge loops — running around them so the mesh has geometry to bend with. A model without loops at the knees cannot crease believably no matter how good its rig is. Sculpting and curve-based methods exist, but polygonal modeling remains the backbone of studio work.',
        },
        {
          kind: 'para',
          text: 'Rigging gives the mesh its machinery. A rigger builds a hierarchy of joints — the digital skeleton — plus control curves an animator can grab, and connects them with two kinds of mathematics: forward kinematics rotates each joint down the chain in order, while inverse kinematics takes a goal, such as a hand placed on a railing, and solves the chain backwards to reach it. The mesh is then bound to the skeleton by skinning, in which every vertex receives weights describing how much each joint pulls on it. Weight painting is the tedious, decisive art of this binding — a badly painted shoulder chews the armpit when the arm lifts.',
        },
        {
          kind: 'para',
          text: 'Animators work by setting keyframes: values for the controls at chosen frames, which the software interpolates between. The interpolation is visible in the graph editor as animation curves — splines whose handles encode acceleration. This is where slow-in and slow-out from the classical principles physically lives: a linear curve between keys produces robotically even speed, while easing the handle shapes produces the accelerate-and-settle of real motion. Curves are read like sheet music; experienced animators diagnose a shot from curve shape alone, spotting an unwanted overshoot as a bump in the translate channel.',
        },
        {
          kind: 'para',
          text: 'Some motion is not posed but computed. Cloth, hair and fur, fluids, destruction and crowds go to simulation departments, where artists set physical parameters — fabric stiffness, hair clumping, flocking behaviours — and constraints, then let solvers generate the motion frame by frame. Simulation is a partnership rather than an autopilot: results are shaped by nudging parameters, painting maps of stiffness across a coat, layering forces, and re-running takes like a director re-shooting until the performance is right.',
        },
        {
          kind: 'para',
          text: 'Shading defines how surfaces respond to light: a shader is a recipe describing roughness, metalness, transparency and subsurface scattering — the difference between wax skin, plastic skin and skin itself. Texturing supplies surface detail as painted images, placed on the model through UV mapping: the mesh is cut and unfolded flat, like a tailor\'s pattern, and the flat map is painted so it wraps back without visible seams. Lighting then places virtual sources — key, fill and rim, the same grammar as live-action cinematography — and computes how they interact with the shaded surfaces, whether by tracing actual light paths or by faster approximations.',
        },
        {
          kind: 'para',
          text: 'Rendering converts the lit scene into images, and it is measured in machine-hours; a single feature frame can take hours across a render farm. To keep that affordable, shots render in passes — separate layers for diffuse color, specular highlights, shadows, ambient occlusion and depth — which compositors recombine and grade in 2D. The payoff is control: a window glow that reads too weak is lifted in the composite in minutes instead of triggering another night of rendering.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Model check: the courtyard and hero are approved geometry, but walk-cycle tests reveal bad edge loops behind the knees — fix the topology now, before any performance exists.',
            'Rig: legs on inverse kinematics for planted feet, arms on forward kinematics for swinging; skin the shoulders with extra weight where the cloak will pull.',
            'Animate: block the walk pose-to-pose against the storyboard, then refine in the graph editor, easing every start and stop.',
            'Simulate: run the cloak and hair against the recorded wind curves; keep three takes and pick the one that reads at a glance.',
            'Light and surface: a cool morning key with a warm bounce card, and a UV-mapped paint pass for the flagstones.',
            'Render in passes and comp: performance, cloth and lit set combined, with the windows\' glow lifted and a soft fog card behind the wall — no re-render required.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'para',
          text: 'Feature animation and visual effects run the full pipeline, but its stages dominate wherever imagery is made. Game studios model, rig, animate and light in real-time engines, trading offline rendering for frame budgets measured in milliseconds; product visualisation lights virtual packaging; architects walk clients through rendered buildings. Because the stage names are shared, a rigger, a compositor and a lookdev artist can join the same project having never worked together before.',
        },
        {
          kind: 'para',
          text: 'For individuals the pipeline scales down but keeps its order — and the most common beginner mistake is decorating before performing: texturing a character whose topology cannot bend, or lighting a scene whose animation is still placeholder. The discipline is always the same: lock upstream, then commit downstream.',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Polygon mesh', def: 'A 3D form built from vertices, edges and faces; character work favours quads for clean deformation.' },
            { term: 'Rig', def: 'The skeleton of joints plus animator-facing controls that makes a mesh poseable.' },
            { term: 'Skinning', def: 'Binding mesh vertices to joints with weights that set how far each joint\'s influence reaches.' },
            { term: 'Inverse kinematics', def: 'Solving a joint chain backwards from a placed goal, such as a hand gripping a rail.' },
            { term: 'Animation curve', def: 'The interpolated spline between keyframes whose shape encodes acceleration — the graph-editor home of slow-in and slow-out.' },
            { term: 'Render pass', def: 'A separated layer of the final image — shadows, specular, depth — composited afterward for cheap adjustment.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Quick checks on why the pipeline is ordered the way it is — the dependencies, not the software.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Why do modelers build characters from quads rather than triangles?',
              options: ['Quads render faster', 'Triangles cannot be lit', 'Quad topology subdivides and deforms cleanly, giving joints geometry to bend with', 'Quads are required by all software'],
              answer: 2,
              explain: 'Rings of quads flow around joints like fabric around an elbow; irregular triangles pinch and crease when the rig bends them.',
            },
            {
              q: 'In the graph editor, perfectly linear interpolation between two keys produces:',
              options: ['Natural easing', 'Robotically even speed', 'Automatic anticipation', 'Follow-through'],
              answer: 1,
              explain: 'Even spacing in time is the machine signature — which is why animators curve the handles and reintroduce slow-in and slow-out.',
            },
            {
              q: 'Skinning weights determine:',
              options: ['The color of the mesh', 'How much each joint pulls on each vertex as it moves', 'The render time of a shot', 'Which passes are rendered'],
              answer: 1,
              explain: 'Weights are the tug-of-war between joints over every point of the surface; bad weights are why meshes tear and chew.',
            },
            {
              q: 'The main reason shots are rendered in passes is:',
              options: ['Adjustments can be made in compositing without paying for re-renders', 'Passes look more artistic', 'The software cannot render whole images', 'It speeds up simulation'],
              answer: 0,
              explain: 'A tweak made in a 2D composite costs minutes; the same tweak made upstream costs another pass through the render farm.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Next, the comics-grammar lesson stays with sequential images but hands the timeline back to the reader, while the twelve principles lesson explains the perception this whole pipeline is engineered to serve.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'animation-comics-grammar',
      title: 'Comics and the Grammar of Sequential Art',
      domain: 'Arts & Culture',
      field: 'Animation & Sequential Art',
      branch: 'Comics & Sequential Art',
      tier: 'core',
      concepts: [
        'The panel and the gutter',
        'Closure: the reader completes the story',
        'Layout, reading flow and page rhythm',
        'Balloons, captions and sound effects',
        'Elastic time across panels',
        'Manga traditions and the infinite canvas',
      ],
      words: 1370,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Comics are images in deliberate sequence — Will Eisner called the form sequential art — and their most important machinery is the gap between the pictures. The framed image is the panel; the space between panels is the gutter; and the meaning that appears in that space is made by the reader, not the artist. Scott McCloud, in Understanding Comics, named the process closure: observing the parts but perceiving the whole. Film edits exploit a sibling effect — the Kuleshov experiments, covered in the Library\'s montage lesson — but where a film\'s meaning assembles in projected time, comics closure happens in the reader\'s own time, at whatever pace the page is turned.',
        },
        {
          kind: 'para',
          text: 'That single difference shapes the rest of the grammar. Because the reader controls the clock, the cartoonist controls rhythm only through the page itself: the size and arrangement of panels, the density of the layout, the placement of text. A comic page is simultaneously a story, a tempo map and an eye-path puzzle — and the craft lies in making all three read the same way.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Closure is why comics can do with two images what prose does with a paragraph and film with a scene. The gutter is the least expensive special effect in storytelling: the reader supplies the journey, the decade, the murder — at perfect resolution.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The basic unit of comics grammar is the panel-to-panel transition. McCloud sorted them into six: moment-to-moment, action-to-action, subject-to-subject, scene-to-scene, aspect-to-aspect and non-sequitur. Mainstream Western narrative comics lean heavily on action-to-action — the progress of a single event — with scene-to-scene cuts for travel and time jumps. Manga tradition makes far freer use of moment-to-moment and aspect-to-aspect: dwelling on a falling teardrop, a clock face, a fist unclenching while the plot stands still and mood accumulates. The choice of transition is the choice of what work the reader\'s imagination is assigned — the wider the gutter\'s leap, the more the reader builds.',
        },
        {
          kind: 'para',
          text: 'Pages are read in an agreed order — left to right, top to bottom in Western comics; right to left in Japanese manga, whose binding traditionally opens from the other side. Within that agreement, layout steers pace: a big panel slows the eye, a stack of small ones accelerates it; a full-width strip lands like a beat of silence; a full page stops time entirely. The reader\'s eye path must also be unambiguous — when layout lets two panels compete for the next glance, the reader mis-orders the story without ever knowing why it felt wrong. Wide panels suggest vista and duration; tall, narrow ones suggest height, descent or isolation.',
        },
        {
          kind: 'para',
          text: 'Text in comics is drawing. Word balloons carry speech, their tails pointing to the speaker; bubbly outlines mark thought; rectangular captions carry narration or a time-and-place slug. Sound effects are lettering as sound-image — the shape, weight and texture of a KRAKOOM is its performance. Placement does the conducting: within a panel the eye reads the upper balloon first, so balloon order scripts the reading order, and a balloon placed carelessly can hand a line to the wrong character or smother the image it was meant to accompany.',
        },
        {
          kind: 'para',
          text: 'Time in comics is famously elastic. A single panel holds one frozen instant, yet motion lines, repeated figures and streaked shapes imply everything around it; one sound effect can split a second across a whole page; a dozen near-identical panels of a character waiting make a minute genuinely pass, because the reader experiences each one. Panel rhythm is tempo — regular grids tick like a metronome, splashes and double-page spreads hold a breath. The cartoonist conducts time without a clock, only spacing.',
        },
        {
          kind: 'para',
          text: 'The two great traditions cross-pollinate freely now, but their defaults differ. Manga grew from black-and-white serialised installments, leaning on screentone patterns for tone, speed lines for motion, and decompressed, patient pacing across small pages; Western mainstream comics grew up in colour on larger paper with denser pages. The screen then broke the page entirely: in Reinventing Comics, McCloud proposed the infinite canvas — on a screen that scrolls, a comic needs no page break at all, so a story can run a single panel wide down a scroll of any length or open into shapes paper never allowed. Webcomics inherited both possibilities: the daily-strip discipline of three or four panels, and the long scroll whose ending arrives like the end of a shot.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Break the script into beats: a knight reaches a tower door; a dragon\'s shadow crosses it; she hesitates; she opens the door; inside, the dragon is small and old. Five beats, six panels — the hesitation gets two.',
            'Choose transitions: action-to-action through the approach, then one aspect-to-aspect pair — the door\'s carving, her hand on the hilt — to stretch the hesitation and let dread accumulate.',
            'Design the eye path: three tiers of two panels, the aspect pair drawn small and quiet, and the final panel full-width for the reveal.',
            'Conduct the text: a caption slug in the first panel and one balloon late in the reveal; no sound effect — silence is the choice.',
            'Test on a reader who has not seen the script; watch where their eye lands first in each panel and whether they pause where the design asks.',
            'Revise: if the dragon is read before the knight\'s reaction, enlarge the knight in the final panel — the fix is layout, not words.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'para',
          text: 'Storyboard artists read comics theory on purpose: a storyboard is a comic whose gutters will be filled by film, and the transition vocabulary is identical. Instructional designers use sequences of captioned panels because closure forces readers to process, rather than skim, each step. Picture-book authors work the same machinery at picture-book scale, and diagram-heavy technical communication borrows panel rhythm to sequence instructions.',
        },
        {
          kind: 'para',
          text: 'For creators the practical lesson is that a page can be play-tested. Print it, hand it to someone, and watch their eyes: the moment a reader re-orders panels or reads a balloon out of sequence is a bug report, and the gutter that confused them names exactly which leap was too wide. Comics may be the only storytelling form whose editing interface is another person\'s gaze.',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Panel', def: 'A single framed image — the comics equivalent of a shot.' },
            { term: 'Gutter', def: 'The space between panels, where the reader\'s closure performs the unshown action.' },
            { term: 'Closure', def: 'The reader\'s act of observing the parts but perceiving the whole — completing meaning across the gutter.' },
            { term: 'Screentone', def: 'The printed dot and line patterns used in manga for shading, texture and mood.' },
            { term: 'Aspect-to-aspect transition', def: 'A panel change that wanders within a scene or mood rather than advancing the action.' },
            { term: 'Infinite canvas', def: 'McCloud\'s term for webcomics freed from the physical page, composing along an arbitrarily long scroll.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Quick checks on the machinery of the page — what the gutter, the layout and the balloons are actually doing.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Closure in comics is best defined as:',
              options: ['The final panel of a story', 'Closing the book at the end', 'The reader\'s completion of unshown action in the gutter', 'The artist erasing the pencil lines'],
              answer: 2,
              explain: 'Closure is the reader\'s contribution — the murder, the journey, the years that happen between two pictures and nowhere on the page.',
            },
            {
              q: 'A transition that dwells on a rain-soaked street sign while the plot waits is:',
              options: ['Action-to-action', 'Non-sequitur', 'Moment-to-moment', 'Aspect-to-aspect'],
              answer: 3,
              explain: 'Aspect-to-aspect wanders within a moment or mood — a manga favourite for letting atmosphere accumulate while nothing advances.',
            },
            {
              q: 'Traditional manga is read:',
              options: ['Left to right', 'Right to left', 'Top to bottom only, columns free', 'In any order'],
              answer: 1,
              explain: 'Japanese books are bound to open from the opposite side, so the reading path runs right to left — a fact every localised edition has to negotiate.',
            },
            {
              q: 'Drawing several near-identical panels of a character waiting primarily manipulates:',
              options: ['Closure', 'Perceived time — the reader experiences each panel as duration', 'The reading order', 'The lettering budget'],
              answer: 1,
              explain: 'Repeated panels make the reader live through the wait; time in comics is spacing, and spacing is time.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Natural companions: the storyboarding lesson — comics grammar aimed at film production — and the montage lesson, where editing performs in time what the gutter performs in space. From here, the drawing lessons sharpen the panels themselves.',
          tone: 'path',
        },
      ],
    },
]
