/**
 * Knowledge Universe — Animation — Chapter 02: Storyboarding & Pre-Production
 * 1 lesson · ~1,383 words
 * field: Animation & Sequential Art
 * legacy sources: x40-arts-animation-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Storyboarding & Pre-Production]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 animation-storyboarding — Storyboarding and Pre-Production
 */
import type { KnowledgeTopic } from '../../types'

export const animationCh02: KnowledgeTopic[] = [
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
]
