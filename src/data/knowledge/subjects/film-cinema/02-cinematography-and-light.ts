/**
 * Knowledge Universe — Film & Cinema — Chapter 02: Cinematography & Light
 * 1 lesson · ~1,147 words
 * field: Film & Cinema
 * legacy sources: arts-culture.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Cinematography]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 cine-cinematography — Cinematography: Shots, Camera Movement and Light
 */
import type { KnowledgeTopic } from '../../types'

export const filmCinemaCh02: KnowledgeTopic[] = [
  {
    id: 'cine-cinematography',
    title: 'Cinematography: Shots, Camera Movement and Light',
    domain: 'Arts & Culture',
    field: 'Film & Cinema',
    branch: 'Cinematography',
    tier: 'core',
    concepts: [
      'Shot sizes: a ladder of emotional distance',
      'Angle and height: who has the power',
      'The 180-degree rule and screen direction',
      'Movement grammar: pan and tilt versus dolly',
      'Three-point lighting: key, fill and back',
      'Motivated light and exposure mood',
    ],
    words: 1147,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Editing decides what follows what; cinematography decides what is inside each frame in the first place. The director of photography commands four families of choice: how large the subject appears (shot size), where the camera sits (angle), whether and how it moves, and how the scene is lit. This core Film & Cinema topic covers that grammar — from establishing wides to the 180-degree rule that keeps a conversation legible, to the three-light setup that has survived from 1930s studios to today\'s YouTube studio.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'This is the vocabulary of every film, TV show, commercial and video you have ever watched — and the fastest way to level up your own videos. Framing, camera position and light communicate mood before a word of dialogue lands, and audiences feel every violation of the rules even when they cannot name them.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Shot sizes run from extreme wide — a figure lost in a landscape, geography established — through wide (the whole body and its world) and medium (waist up, the workhorse of dialogue) down to close-up (a face filling the frame, emotion unavoidable) and extreme close-up (the eyes, the trembling hand on a doorknob). Each step inward trades context for intensity, and editors cut across the ladder to steer attention beat by beat.',
      },
      {
        kind: 'para',
        text: 'Camera height encodes power before anyone speaks. A low angle looks up at a character and lends stature; a high angle looks down and diminishes; eye level stays neutral, which is why it is the default and why abandoning it means something. The Dutch tilt cants the horizon to signal unease, and the over-the-shoulder framing seats the viewer at the table.',
      },
      {
        kind: 'para',
        text: 'Two characters talking define an invisible line between them — the axis of action. Keep the camera on one side of that line and each character keeps a stable screen direction: she looks right, he looks left, and cuts between them read as one coherent conversation. Cross the line and they appear to swap places mid-scene. Directors break the 180-degree rule deliberately to disorient, usually at a story turn.',
      },
      {
        kind: 'para',
        text: 'Movement splits into two species. A pan or tilt rotates the camera on a fixed head — scanning a horizon, following a walker, revealing a room — and it never changes perspective. A dolly or tracking shot translates the whole camera, so parallax shifts through the scene, which is why dollies feel dimensional and pans feel flat. A slow push-in toward a face tightens pressure; a pull-back reveals context or releases it. A zoom is neither: it magnifies without moving, flattening as it goes.',
      },
      {
        kind: 'para',
        text: 'Three-point lighting is the oldest surviving studio recipe. The key is the main light, traditionally 45 degrees off the camera axis and 45 degrees up. The fill sits opposite and softer, lifting shadows — and the key-to-fill ratio sets mood, from a bright 2:1 sitcom to a noir 8:1. The back light rims the subject\'s outline, peeling them off the background. Every elaborate setup is this trio plus accessories.',
      },
      {
        kind: 'para',
        text: 'Light should be motivated — plausibly sourced from something in the scene: the window, the desk lamp, the neon sign outside. Color temperature carries time and mood: tungsten-warm interiors near 3200 K, daylight near 5600 K, the blue hour far cooler. Exposure is a narrative choice too — a face held in silhouette withholds information the story may owe the viewer.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: plan coverage for a two-person confession scene in a diner at night.',
          'Recall the governing ideas: the shot-size ladder for intimacy, one side of the axis for legibility, key-to-fill ratio for mood.',
          'Apply: open on a wide master establishing both seats; stay on one side of the table axis; shoot over-the-shoulder mediums in both directions for the argument; cut to a slow push-in close-up for the confession; key both faces from the window at 45 degrees with a 4:1 ratio and a warm rim from the pendant lamp.',
          'State the result: geography never confuses, pressure builds with the push-in, and the lighting reads as the diner\'s own — a scene that cuts itself together.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Directors and cinematographers storyboard shot-size ladders scene by scene before a single crew day.',
          'Interview and talking-head setups are textbook three-point lighting, often with a window as the key.',
          'Wedding and event videographers vary shot sizes in every sequence to keep montages alive.',
          'Sports broadcasts hold the axis so play direction stays consistent across camera cuts.',
          'Animated films run virtual cameras through the identical grammar — a Pixar dolly is a real dolly.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Movement without motivation — the creeping zoom, the swirl around a static conversation — reads as decoration, not meaning. Accidentally crossing the axis in coverage is the classic student-film disorientation. Flat frontal light without a rim merges subjects into the walls behind them. And shooting coverage without a wide master leaves the editor no establishing shot to cut to.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Shot size', def: 'How much of the subject fills the frame, from extreme wide to extreme close-up.' },
          { term: 'Axis of action', def: 'The invisible line between two subjects; the 180-degree rule keeps the camera on one side.' },
          { term: 'Over-the-shoulder shot', def: 'A medium framing from behind one character toward another — standard dialogue coverage.' },
          { term: 'Dolly shot', def: 'Camera translation along a track, producing parallax — distinct from pan, tilt or zoom.' },
          { term: 'Key light', def: 'The dominant source shaping the subject, traditionally 45 degrees off-axis and 45 degrees up.' },
          { term: 'Fill light', def: 'The soft source opposite the key that lifts shadow density; its ratio to the key sets mood.' },
          { term: 'Back light', def: 'A rim from behind that separates the subject from the background.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A shot that moves the entire camera along a track beside a walking character is a:',
            options: ['Pan', 'Tilt', 'Tracking (dolly) shot', 'Zoom'],
            answer: 2,
            explain: 'The camera translates through space, so parallax shifts — the signature of a dolly or tracking shot.',
          },
          {
            q: 'The 180-degree rule primarily keeps:',
            options: [
              'Exposure consistent between shots',
              'Screen direction and eyelines stable across cuts',
              'The budget under control',
              'Actors on their marks',
            ],
            answer: 1,
            explain: 'Staying one side of the axis of action preserves who looks which way, so a conversation reads as continuous.',
          },
          {
            q: 'In three-point lighting, the fill light\'s job is to:',
            options: ['Outshine the key', 'Lift the shadows and set the contrast ratio', 'Illuminate only the background', 'Project the film'],
            answer: 1,
            explain: 'Fill controls shadow density; the key-to-fill ratio is the mood dial from sitcom bright to noir dark.',
          },
          {
            q: 'Cutting from a wide shot directly to an extreme close-up most strongly communicates:',
            options: ['Confusion about location', 'A surge of emotional intensity', 'The passage of time', 'A change of weather'],
            answer: 1,
            explain: 'Dropping context for detail is the size ladder\'s intensity lever — the closer the shot, the heavier the emotion.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read alongside the montage lesson — framing and cutting are one system, not two. Natural next steps: color grading, aspect ratios and anamorphic optics, then the lighting instruments themselves and how crews rig them.',
        tone: 'path',
      },
    ],
  },
]
