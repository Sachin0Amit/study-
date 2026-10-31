/**
 * Knowledge Universe — Animation — Chapter 03: Stop-Motion & Hybrid Techniques
 * 1 lesson · ~1,451 words
 * field: Animation & Sequential Art
 * legacy sources: x40-arts-animation-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Stop-Motion & Hybrid]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 animation-stop-motion — Stop-Motion: Clay, Puppets and Cutouts
 */
import type { KnowledgeTopic } from '../../types'

export const animationCh03: KnowledgeTopic[] = [
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
]
