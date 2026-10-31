/**
 * Knowledge Universe — Visual Arts — Chapter 01: Drawing & Painting
 * 3 lessons · ~4,062 words
 * field: Drawing & Painting
 * legacy sources: arts-culture.ts, x38-arts-history-visual-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Drawing & Painting]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 drawing-figure-gesture — Figure Drawing: Gesture, Proportion and Anatomy
 *   01.2 painting-media-techniques — Painting Media: Watercolor, Oil and Acrylic
 *   01.3 draw-seeing-perspective — Learning to See: Line, Shape and Perspective
 */
import type { KnowledgeTopic } from '../../types'

export const visualArtsCh01: KnowledgeTopic[] = [
  {
    id: 'drawing-figure-gesture',
    title: 'Figure Drawing: Gesture, Proportion and Anatomy',
    domain: 'Arts & Culture',
    field: 'Drawing & Painting',
    branch: 'Drawing Foundations',
    tier: 'intermediate',
    concepts: [
      'Gesture: the pose\'s verb',
      'The line of action',
      'Big three masses and landmarks',
      'Head-unit proportion canons',
      'Light logic on the form',
      'Foreshortening as overlap',
    ],
    words: 1442,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Learning to See, the first Drawing & Painting lesson, trained the eye on line, shape and perspective using the still world. The human figure is that curriculum\'s summit and its stress test: it moves, breathes, foreshortens and turns through a full three hundred sixty degrees, and it comes with a built-in detector for wrongness — every viewer is an instant expert on how a body should look. Figure drawing is therefore taught as two skills fused together: gesture, which captures what a pose is doing in seconds, and construction, which builds what the body actually is, solid by solid.',
      },
      {
        kind: 'para',
        text: 'A third component, anatomy, sits between the two — but it is anatomy for artists, not for surgeons. You need the skeleton\'s logic and the major muscle groups\' straps and bulges, where they attach and what they squeeze, not Latin completeness. And you need the proportion canons, the accumulated shortcuts for how big a head is against a body, held loosely, because they are style choices rather than laws.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Figure training is the backbone of animation, illustration, comics, fashion and concept art — every industry that draws people hires for exactly this skill. It is also the fastest general upgrade to any drawing practice, because the figure forgives nothing: work at it seriously for a season and objects, animals and scenes improve for free.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Gesture: The Thirty-Second Drawing' },
      {
        kind: 'para',
        text: 'A gesture drawing is the quickest true statement about a pose — its action, weight and intention — made in thirty seconds to two minutes. It is not an outline and not a mannequin; it is the pose\'s verb. The central tool is the line of action: one imaginary stroke through the body, from head to weighted foot, that carries the whole curve of the movement — drawn first, drawn long, and obeyed. The teacher Kimon Nicolaides systematized this study in the 1940s, assigning timed poses by the thousand; the count, not any single sheet, is the point. Thirty-second drawings are supposed to fail. They are press-ups for attention.',
      },
      {
        kind: 'para',
        text: 'Technique follows attitude. Draw from the shoulder, keep the implement moving, and feel the pose in your own body before committing — your mirror neurons are a drawing tool. Capture the three big tilts — head, ribcage, pelvis — before anything else, and sacrifice every detail without grief. Watch for weight: drop an imaginary plumb line from the pit of the neck and see which foot falls under it. A believable figure is always negotiating with gravity, and the classical term for the most elegant negotiation — shoulders counter-angled to hips, one leg loaded — is contrapposto, the weight-shift stance the Greeks invented and the Renaissance revived.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Warm up: ten thirty-second gestures, line of action only, one long stroke per drawing; no erasing, no detail, no regret.',
          'Five one-minute drawings: add the three tilts — head, ribcage, pelvis — and the direction of each limb as a single curve.',
          'Three five-minute structural studies: egg for the ribcage, box for the pelvis, cylinders for the limbs; check the plumb line and the loaded leg.',
          'Two fifteen-minute value studies under one fixed light: squint, find the light side and shadow side of each major form, and place the core shadow and cast shadow before any halftone.',
          'One twenty-minute long pose with deliberate foreshortening — a knee or foot aimed at you — solved with overlap and compression, not avoidance.',
          'Five-minute review: mark the strongest sheet, write one sentence on why, and date the stack; progress lives in the pile, not in any single drawing.',
        ],
      },
      { kind: 'heading', text: 'Construction, Proportion, Practice' },
      {
        kind: 'para',
        text: 'Construction draws the body as solids before surfaces. The big three masses — skull, ribcage, pelvis — are the architecture: a ball with a jaw, an egg, a bucket, joined by a flexible spine and carrying the limbs\' cylinders. Landmarks make the masses placeable under skin: the clavicles like a coat-hanger across the chest, the sternum, the iliac crests of the pelvis, the kneecaps. Muscles are learned as straps that wrap and squeeze these solids — the pectoral fan, the paired calf, the sheets along the spine — a working set of a couple of dozen groups, each memorable for what it does, since a muscle\'s shape in a pose follows from its job.',
      },
      {
        kind: 'para',
        text: 'Proportion canons measure the body in heads. The classical ideal runs about eight heads tall; the living average is nearer seven and a half; a child is five or six, which is why enlarged heads read as young. Useful checks: the body\'s midpoint sits at the pubic bone; the eye line falls halfway up the head; the open hand spans the height of the face; the wrists hang near the midpoint of the whole figure. Leonardo\'s Vitruvian Man is the canon\'s most famous drawing, and older traditions chose different ones — Egyptian workshops laid figures out on grids of fists. Hold all of them loosely: they are tuning forks for checking a drawing, never templates to trace over the model in front of you.',
      },
      {
        kind: 'para',
        text: 'Value is what makes constructed forms turn in light. The sequence — highlight, halftones, core shadow at the form\'s turning edge, reflected light inside the shadow, cast shadow thrown beyond it — is covered for color in the Color Theory lesson; in figure drawing it runs in graphite and charcoal. Squint until the model becomes three or four big values, and block those shapes before any detail. A belly, a thigh or a cheek is a sphere in disguise, and viewers read correct light logic as roundness even when they cannot say why.',
      },
      {
        kind: 'para',
        text: 'Foreshortening is perspective applied to the body. A limb aimed at your eye compresses into a stack of overlapping shapes, and the correct response is to draw the shapes you actually see, not the length you know the limb to be. Overlap is the master tool — the nearer form bites into the farther one — with compression, taper and ellipse close behind. Cross-contours, lines drawn around a form as if the form were a potato being wrapped in string, state which way it swells. When in doubt, measure: hold the pencil at arm\'s length, read a limb\'s angle against the vertical, compare one seen length against the head you have already drawn, and trust the reading over the belief.',
      },
      {
        kind: 'para',
        text: 'Structured practice beats heroic sessions. A workable rhythm: gestures daily, a long pose weekly, one slow master copy each month — a Raphael red-chalk study or any drawing you admire, copied to absorb its decisions — and a pocket sketchbook for hands, feet and strangers on trains. You are your own always-available model for heads and hands, and a mirror doubles your studio. Count poses in the hundreds; the hundredth attempt at a foreshortened forearm is where the first honest one tends to appear.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Gesture drawing', def: 'A rapid study, thirty seconds to two minutes, capturing a pose\'s action and weight.' },
          { term: 'Line of action', def: 'The single imaginary curve running through a pose that carries its whole movement.' },
          { term: 'Contrapposto', def: 'The classical weight-shift stance: hips and shoulders counter-angled around the loaded leg.' },
          { term: 'Constructive anatomy', def: 'Simplified artistic anatomy — masses, landmarks and major muscle straps — used to build figures.' },
          { term: 'Foreshortening', def: 'Perspective applied to the body: forms pointing at the eye overlap and compress.' },
          { term: 'Core shadow', def: 'The darkest band on a form, where its surface turns away from the light.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'The questions below check the two halves of the skill — capturing and building — plus the safety rails that keep practice honest.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A thirty-second study exists chiefly to capture:',
            options: ['An accurate outline', 'Facial likeness', 'Finished shading', 'The pose\'s action and weight'],
            answer: 3,
            explain: 'Gesture is the pose\'s verb; outline and detail are exactly what must be sacrificed.',
          },
          {
            q: 'The big three masses of constructive anatomy are:',
            options: ['Head, ribcage, pelvis', 'Arms, torso, legs', 'Skull, spine, hands', 'Chest, abdomen, thighs'],
            answer: 0,
            explain: 'Skull, ribcage and pelvis are the architecture; everything else is cylinders, straps and connections.',
          },
          {
            q: 'In the classical proportion canon, the body\'s midpoint falls at:',
            options: ['The navel', 'The sternum', 'The pubic bone', 'The knees'],
            answer: 2,
            explain: 'Measured in heads, the figure splits roughly in half at the pubic bone — a fast check on leg length.',
          },
          {
            q: 'A forearm pointing directly at the viewer should be drawn mainly with:',
            options: ['Its full known length', 'A lighter, fainter line', 'An orthogonal grid', 'Overlapping compressed shapes and wrapping cross-contours'],
            answer: 3,
            explain: 'Foreshortening is solved by overlap and compression — drawing the shapes seen, not the length known.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Turn these drawings into paint with Painting Media: Watercolor, Oil and Acrylic, or rebuild the figure in clay with Sculpture Fundamentals. For the historical payoff, the Art History lessons show Michelangelo-class draftsmen using exactly these canons.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'painting-media-techniques',
    title: 'Painting Media: Watercolor, Oil and Acrylic',
    domain: 'Arts & Culture',
    field: 'Drawing & Painting',
    branch: 'Painting Media & Technique',
    tier: 'core',
    concepts: [
      'Pigment plus binder defines the medium',
      'Watercolor: reserve the white',
      'Oil: oxidation and open edges',
      'Fat over lean',
      'Acrylic speed and mediums',
      'Solvents, pigments and rag safety',
    ],
    words: 1439,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Color Theory explained why combinations work; this lesson is about the vehicle that carries them. Paint is pigment — ground colored matter — suspended in a binder, and the binder is the medium\'s whole personality. Gum arabic makes watercolor: transparent, re-wettable, obedient to water. Linseed oil makes oil paint: slow, buttery, capable of layers upon layers. Acrylic polymer makes acrylic paint: fast, waterproof when dry, and content to imitate either of its elders. The same pigment in three binders is three different arts.',
      },
      {
        kind: 'para',
        text: 'Because the binder decides drying, opacity and repairability, it quietly decides your process: watercolor plans its whites and works light to dark, oil piles rich layers over lean and reworks for days, and acrylic does everything in between at the cost of never coming back once it sets. Medium chemistry sounds like a constraint; in practice it is the reason each medium has a look nothing else can fake. This lesson covers the behavior of the three vehicles, the craft moves of each, and the studio habits that keep the practice safe.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Nearly every painting mishap — cracking glazes, muddy watercolors, rags that smolder in a bin — is a binder problem, not a talent problem. A weekend of medium knowledge prevents years of mysterious failures, and choosing a medium honestly, by temperament and available time, is the first real decision of a painting life.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'How the Three Vehicles Behave' },
      {
        kind: 'para',
        text: 'Watercolor\'s gum arabic holds pigment in a film so transparent that the paper glows through it, which makes the white of the sheet the only white you will ever have — it must be reserved, planned, masked; a white is an act of planning, not of paint. The paint re-dissolves in water forever, so lifting and blending stay possible, and blooms — the cauliflower edges where wet paint creeps into damp paint — are both hazard and signature effect. Oil\'s linseed oil does not evaporate at all; it combines with oxygen and polymerizes into a tough, slightly flexible film, from the outside in, over days. That slowness is the medium\'s gift: edges stay open, glazes can be planned, and mistakes can be scraped back tomorrow. Acrylic\'s polymer particles sit in water until the water leaves and the particles fuse; the film is waterproof within minutes to an hour, and after that it is permanent.',
      },
      {
        kind: 'para',
        text: 'The craft of watercolor is the management of wetness. Flat, graded and variegated washes are the medium\'s scales; wet-into-wet softens edges into fog, wet-on-dry snaps them crisp, and the timing interval between the two is where the medium\'s weather happens. Layering is glazing: thin, transparent passages over completely dry ones, building depth without mud — which comes from stirring layers together rather than adding to them. Paper is a collaborator, not a surface: thin sheets buckle, heavy two-hundred-plus-GSM stock holds a wash, cold-press texture glows, hot-press suits fine detail, and masking fluid reserves the whites the plan nearly forgot.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Tone and draw: on a primed canvas, fix the composition in lean paint — pigment thinned with solvent — as a thin imprimatura; this layer dries fastest and hardest.',
          'Block in the big shapes, still thin: establish the value architecture with solvent-thinned color, keeping every layer matte and stingy with oil.',
          'Build the middle passages: as layers stack, add more medium to each mixture — it literally gets fatter — so every new film dries more slowly and stays more flexible than the films beneath it.',
          'Place the lights thick: highlights and texture go on last and fattest, often straight from the tube, as impasto ridges that catch raking light.',
          'Glaze after full drying: transparent, oil-rich color over the set painting adjusts temperature and unifies — the layered logic of fifteenth-century Netherlandish panels, and the reason old glazes still glow.',
        ],
      },
      { kind: 'heading', text: 'Oil Craft, Acrylic Craft, Tools and Safety' },
      {
        kind: 'para',
        text: 'Oil\'s first law is fat over lean: each successive layer must be at least as oil-rich as the one below, because an oil-poor layer on top dries harder and faster than the soft film beneath it and cracks as that film keeps moving. Alla prima painting sidesteps the rule by finishing wet-into-wet in one session; indirect painting embraces it with underpainting, body layers and final glazes, plus scumbling — dragging dry, broken light paint over a darker passage — for shimmer. Mediums tune the machine: linseed and stand oil for flow and gloss, alkyds for speed, and solvents — odorless mineral spirits rather than raw turpentine — for thinning and cleanup. Rembrandt built his late surfaces from translucency and thick lead-white ridges; Van Gogh dragged impasto in strokes that are nearly sculpture.',
      },
      {
        kind: 'para',
        text: 'Acrylic is the diplomat of the family. Thinned to a wash it behaves like ink or watercolor on almost any paper; cut with gel it piles like slow oil, holding knife marks and ridges. Retarder buys back working time; molding paste carves; the paint sticks to nearly anything — canvas, panel, paper, board, stone — and cleans up with water. The tax is speed itself: blending windows close in minutes, and a dried passage cannot be lifted, only painted over. That is also a freedom, because nothing on the canvas stays precious.',
      },
      {
        kind: 'para',
        text: 'Grounds come first, because they are half the painting: traditional gesso — chalk in animal glue — on panels, modern acrylic gesso on cotton or linen canvas, panels for razor detail, and toned grounds for mid-value starts. Brushes divide by temperament: stiff hog bristle pushes oil, soft synthetic or sable carries watercolor, and the shapes — flat, bright, filbert, round, rigger — each make a different family of marks. The palette knife mixes without waste and paints where a brush would collapse; palettes run from seasoned wood to disposable paper, with glass the easiest to scrape clean. Buy fewer, better tools: one good filbert outlives a dozen novelty brushes.',
      },
      {
        kind: 'para',
        text: 'Safety is binder chemistry again. Solvents want ventilation — work near moving air, cap the jars, and keep food out of the studio. Some pigments are genuinely toxic — lead white, cadmiums, cobalts — so never point a brush with your lips, and never sand dry paint without a mask and extraction. The quietest hazard is the most mundane: linseed-oil-soaked rags oxidize with the release of heat and, bunched in a bin, can ignite hours after you leave; spread them flat to dry hard, or seal them under water in a metal can before disposal. Water media carry none of these burdens — which is why acrylic is the schoolroom medium.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Binder', def: 'The glue that carries pigment: gum arabic, linseed oil, or acrylic polymer.' },
          { term: 'Wash', def: 'A broad, thin layer of watercolor — flat, graded, or variegated.' },
          { term: 'Fat over lean', def: 'The oil-painting rule that each layer must be at least as oil-rich as the one beneath it.' },
          { term: 'Glazing', def: 'Applying a transparent layer of color over a dried layer to modify it.' },
          { term: 'Impasto', def: 'Paint applied thick enough to hold its own texture and catch light.' },
          { term: 'Ground', def: 'The prepared surface a painting sits on — gessoed panel or canvas.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Each question targets a fact about the vehicles rather than a preference among them; answer from the chemistry.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Oil paint hardens chiefly by:',
            options: ['Evaporation of its water content', 'Cooling of a melted binder', 'Oxidation — the oil combines with air and polymerizes', 'Ultraviolet curing'],
            answer: 2,
            explain: 'Linseed oil does not evaporate; it takes up oxygen and polymerizes into a solid film, from the surface inward.',
          },
          {
            q: 'The fat-over-lean rule exists chiefly to prevent:',
            options: ['Muddy mixtures', 'Glazes drying too glossy', 'Canvas rot', 'Cracking, as a hard upper film splits over a still-moving lower one'],
            answer: 3,
            explain: 'Lean layers dry harder and faster; placed on top of soft, slow fat layers, they crack as the film beneath keeps shifting.',
          },
          {
            q: 'In watercolor, the brightest whites are normally:',
            options: ['The untouched paper, reserved in advance', 'Titanium white painted on last', 'A body of gouache', 'A wash of diluted white ink'],
            answer: 0,
            explain: 'Gum arabic\'s film is transparent, so the paper is the only true white — and it must be planned, not painted.',
          },
          {
            q: 'Oil-soaked rags bunched together in a bin are dangerous because:',
            options: ['They stain the floor permanently', 'The oxidizing oil releases heat and can self-ignite', 'Solvent fumes dissolve the palette', 'They attract damp and mold'],
            answer: 1,
            explain: 'Linseed oil\'s oxidation is exothermic; trapped heat in a folded rag can reach ignition hours later. Lay rags flat or seal them under water.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Bring the figure from Figure Drawing into whichever vehicle suits your tempo, then move into three dimensions with Sculpture Fundamentals. World Art Traditions shows these same media in other centuries — Chinese ink, Mughal gouache, ukiyo-e blocks — deepening every choice made at the palette.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'draw-seeing-perspective',
    title: 'Learning to See: Line, Shape and Perspective',
    domain: 'Arts & Culture',
    field: 'Drawing & Painting',
    branch: 'Drawing Foundations',
    tier: 'core',
    concepts: [
      'Symbols versus what is actually there',
      'Contour drawing: the slow line',
      'Negative space: the shapes between',
      'Why parallel lines appear to converge',
      'One-point and two-point construction',
      'Sighting: measuring with a stretched arm',
    ],
    words: 1181,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Most people who "cannot draw" are actually drawing the wrong thing: the symbol their brain stores for eye, hand or chair, instead of the specific shapes in front of them. Learning to draw is largely learning to see — slowing the eye down until it reports edges, gaps, angles and proportions honestly. This core Drawing & Painting topic covers the perception drills — contour, negative space, sighting — and the geometric construction of one- and two-point perspective that lets you draw a believable box, room or city block.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Drawing is the entry skill of every visual art: painting, illustration, industrial design and storyboarding all run on it. The drills here require a pencil, paper and thirty minutes — no talent required, because the blocker was never the hand. It was the label the brain kept substituting for the scene.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The obstacle is the brain\'s labeling system. Presented with a hand, it serves up a stored glove-shape and five sausages — which is why beginner hands look like mittens. The fix is to draw what the eye actually receives: the specific curve of a knuckle, the exact angle of a wrist. Teachers force the shift with a five-minute blind contour: trace every edge of your hand at a crawl, eyes on the hand, never on the paper, pencil never lifting. The result is a mess — and the eye is permanently loosened.',
      },
      {
        kind: 'para',
        text: 'Regular contour drawing keeps the slow line but allows glances at the page, trading a little accuracy for control. Cross-contour lines — imagined threads wrapping over the form like a fishing net — describe volume: where they bulge, the surface swells. Ten unhurried contour minutes teach more than an hour of quick sketching, because speed invites the symbol system straight back in.',
      },
      {
        kind: 'para',
        text: 'The gaps are honest. The spaces between a chair\'s rungs, the sky-holes between branches, the shape of air around a bent elbow — the brain keeps no symbols for these, so it reports them accurately. Drawing the negative space around a subject silently corrects the positive shapes, and proportion errors become glaring: if the hole between the chair legs looks wrong, the legs are wrong.',
      },
      {
        kind: 'para',
        text: 'Perspective is geometry done on receding parallels. Railway rails are parallel and equally spaced, yet they appear to meet at a point on the horizon — and the horizon is nothing but your eye level. Every set of parallel edges receding from you aims at its own vanishing point on that line, while the railroad sleepers shrink in halves of halves. That is how depth gets onto flat paper.',
      },
      {
        kind: 'para',
        text: 'One-point perspective handles objects whose front faces you: the back wall of a room, a head-on bookcase — all receding edges aim at a single vanishing point. Two-point perspective handles objects seen at an angle, like a building\'s corner: two edge sets recede toward two separate vanishing points while the verticals stay vertical. Keep those two points far apart, because crowding them fisheyes the drawing. Only when you look steeply up or down a tall building do the verticals recede too, demanding a third point.',
      },
      {
        kind: 'para',
        text: 'Sighting turns a pencil into a ruler and protractor. Arm locked straight, pencil tip on the subject\'s top, thumb marking its base: that pencil length is now one unit, and every other dimension compares to it — the mug is one and a half units tall, two wide. Tilt the pencil to read an angle, a rooftop at two o\'clock, and transpose that slope to the paper. A dangling pencil checks plumb verticals, catching a tilted world before the drawing does.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: draw a cereal box standing on a table, seen at an angle from standing height.',
          'Recall the governing ideas: the horizon sits at your eye level; the nearest vertical corner stays vertical; each receding edge set aims at its own vanishing point; proportions come from sighting.',
          'Apply: mark the horizon in the upper third. Draw the box\'s nearest vertical corner and sight its height with the pencil. Aim the top and bottom edges toward two far-apart vanishing points, left and right, then close the far side; sighting shows the visible depth is about half the height.',
          'State the result: a box that sits in space instead of floating — and the identical procedure, scaled up, draws the city block outside the window.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Urban sketchers construct streetscapes in two-point perspective on location in under an hour.',
          'Industrial designers pitch products as renderings built on two-point box construction before any CAD.',
          'Comic and manga artists rule perspective grids before inking a single background.',
          'Interior designers present clients a one-point view down a room\'s diagonal axis.',
          'Life-drawing classes open every session with gesture and contour warmups — exactly these drills.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The symbol system sneaks back the moment you speed up — slow down when accuracy dies. Vanishing points crowded together warp boxes like funhouse mirrors. Guessing angles instead of sighting is the quiet killer: a rooftop off by five degrees reads as wrong to everyone, though nobody can say why. And the horizon moves with your head — stand up and every vanishing point relocates.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Contour drawing', def: 'Slowly tracing the edges of a form; the blind variant forbids looking at the page.' },
          { term: 'Negative space', def: 'The shapes between and around the subject, drawn instead of the subject itself.' },
          { term: 'Horizon line', def: 'The drawer\'s eye level — the home of every vanishing point.' },
          { term: 'Vanishing point', def: 'The spot on the horizon toward which a receding set of parallel lines appears to converge.' },
          { term: 'Two-point perspective', def: 'An angular view with two vanishing points; verticals remain vertical.' },
          { term: 'Sighting', def: 'Measuring proportions and angles with a pencil held at arm\'s length, thumb as marker.' },
          { term: 'Cross-contour', def: 'Lines imagined wrapping over a form to describe its volume.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The horizon line in a perspective drawing always represents:',
            options: ['The ground plane', 'The drawer\'s eye level', 'The top of the tallest object', 'A fixed 1.5-meter height'],
            answer: 1,
            explain: 'The horizon is where receding parallel lines converge for a viewer — literally the height of the viewer\'s eyes.',
          },
          {
            q: 'Drawing the shapes between a chair\'s rungs improves accuracy because:',
            options: [
              'It is faster than drawing the chair',
              'The brain stores no symbols for gaps, so it perceives them honestly',
              'Chairs are geometric objects',
              'It avoids using perspective',
            ],
            answer: 1,
            explain: 'Negative space bypasses the label system, so the shapes you draw are the ones actually in front of you.',
          },
          {
            q: 'A building seen at an angle, corner toward you, is correctly constructed in:',
            options: ['One-point perspective', 'Two-point perspective', 'Three-point perspective always', 'Isometric projection'],
            answer: 1,
            explain: 'Two horizontal edge sets recede to two vanishing points; the verticals remain vertical.',
          },
          {
            q: 'Sighting with a pencil at arm\'s length is used to:',
            options: ['Shade smooth gradients', 'Compare proportions and read angles', 'Clean up smudges', 'Trace edges precisely'],
            answer: 1,
            explain: 'The locked arm keeps a constant viewpoint, so the pencil works as a unit ruler and angle gauge.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'No prerequisites beyond a pencil. Natural next steps: value and shading to give forms light, then color — the color-theory lesson maps directly onto paint — then anatomy and the figure.',
        tone: 'path',
      },
    ],
  },
]
