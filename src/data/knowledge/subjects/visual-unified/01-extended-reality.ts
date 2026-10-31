/**
 * Knowledge Universe — Visual Computing — Chapter 01: Extended Reality
 * 1 lesson · ~1,248 words
 * field: Extended Reality
 * legacy sources: emerging-interdisciplinary.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Extended Reality]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 emer-ar-vr-immersion — Augmented and Virtual Reality: Building Other Worlds
 */
import type { KnowledgeTopic } from '../../types'

export const visualUnifiedCh01: KnowledgeTopic[] = [
  {
    id: "emer-ar-vr-immersion",
    title: "Augmented and Virtual Reality: Building Other Worlds",
    domain: "Emerging & Interdisciplinary",
    field: "Extended Reality",
    branch: "Human-Computer Frontier",
    tier: "intermediate",
    concepts: [
      "the VR-AR-MR spectrum",
      "motion-to-photon latency budget",
      "inside-out tracking and SLAM",
      "presence and the uncanny valley",
      "training, surgery and design applications",
      "smartphone-supply-chain economics",
    ],
    words: 1248,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Virtual reality is a lie told to the human vestibular system with such speed and precision that the brain accepts it. Put on a headset, step to a virtual cliff edge, and your palms sweat and knees lock within seconds — no screen ever did that. Building the illusion is a systems problem of brutal tolerances: displays sharp enough to fool eyes, tracking fast enough to follow a head, latency low enough that the world moves the instant you do. This lesson covers how VR, AR and MR actually work — and why they are finally cheap enough to matter.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Presence — the feeling of being somewhere else — is the product XR sells, and it is fragile: add 30 milliseconds of delay or sloppy tracking and the body notices, then revolts. Every design decision serves this single, unforgiving perceptual contract.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The field spans a spectrum written XR. Virtual reality replaces the world entirely: the headset is opaque and the user lives inside the render. Augmented reality overlays graphics on the real world — creatures on the pavement — while mixed reality goes further, anchoring virtual objects so they stay put on real surfaces and can be hidden behind real ones. The distinctions matter commercially: AR already runs on the phone in your pocket, mixed reality demands depth sensing and scene understanding, virtual reality asks for everything at once.",
      },
      {
        kind: "para",
        text: "Head-mounted displays are two small screens, one per eye, driven with slightly different images to create stereoscopic depth, behind lenses that widen the field of view past 100 degrees. The hard constraint is motion-to-photon latency: the time from your head starting to move to the display updating must stay under about 20 milliseconds, or the visual system flags the mismatch — the leading cause of simulator sickness, the queasy cousin of seasickness. That budget dictates the architecture: refresh above 90 hertz, prediction rendering where the head will be, and late-stage reprojection shifting an already-rendered frame at the last instant.",
      },
      {
        kind: "para",
        text: "Tracking is what makes it reality rather than cinema. Early systems used outside-in cameras watching markers; the modern winner is inside-out — cameras on the headset itself watching the room, fused with inertial sensors. The hard core is SLAM, simultaneous localization and mapping: the system spots visual features, follows them across frames and solves in real time for both its own motion and the three-dimensional structure of the room. Hand tracking reuses the same cameras. The consequence: no external towers, no setup — a big reason headsets shed both the PC and the price.",
      },
      {
        kind: "para",
        text: "Presence is fragile and the uncanny valley is nearby. Humanoid avatars that are almost right read as wrong: static eyes and waxy skin trigger eeriness rather than recognition — roboticist Masahiro Mori's uncanny valley, where near-human likeness unsettles more than obvious stylization. Designers route around it: cartoons are forgiven what realism is not, and animated eyes, mouth and hands matter before skin pores. Social VR platforms found that a floating cartoon avatar with expressive hands delivers more presence than a stiff photorealistic body.",
      },
      {
        kind: "para",
        text: "The serious uses arrived before the consumer ones. Flight simulators taught pilots for decades before headsets existed; VR now trains surgeons, firefighters and machine operators on scenarios too dangerous or expensive to stage. Architects walk clients through buildings that exist only as models, surgeons rehearse on reconstructions of the patient's own scans, and exposure therapy treats phobias and PTSD by delivering precisely graded doses of a feared situation. On factory floors, AR overlays wiring instructions onto the actual machine.",
      },
      {
        kind: "para",
        text: "The economics flipped within a decade. Early VR rigs cost tens of thousands of dollars; standalone headsets now sell for the price of a games console because they ride the smartphone supply chain — the same high-refresh panels, mobile processors and camera modules built by the billions for phones. Content remains the bottleneck: hardware sells experiences, so headset makers subsidize studios the way console makers always have, while enterprise — training and design departments — quietly pays the bills that consumer markets hesitate over.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Motion-to-photon budget",
        latex: "t_{\\text{MTP}} = t_{\\text{sense}} + t_{\\text{render}} + t_{\\text{display}} \\lesssim 20\\,\\text{ms}",
        meaning: "Total latency from head movement to display update must stay under about 20 milliseconds or presence breaks and simulator sickness begins.",
      },
      {
        kind: "formula",
        name: "Pixels per degree",
        latex: "\\text{PPD} = \\frac{N_{\\text{pixels}}}{\\Theta_{\\text{FOV}}}",
        meaning: "Sharpness as pixels spread across the field of view; human acuity is about 60 PPD, far above current headsets.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: how sharp a headset with 2,160 by 2,160 pixels per eye across a 95-degree horizontal field actually is, and what resolution matching the eye would demand.",
          "Recall: pixels per degree = horizontal pixels divided by horizontal field of view; human acuity is about 60 PPD.",
          "Apply: PPD = 2,160/95 ≈ 23. Matching 60 PPD over the same 95 degrees needs 60 x 95 = 5,700 pixels horizontally — (5,700/2,160)² ≈ 7 times the pixel count.",
          "State the result: even a flagship headset resolves barely a third of what the eye can, and retinal VR needs roughly seven times more pixels per eye — which is why foveated rendering, drawing full detail only where the gaze rests, is essential.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Flight and driving simulators — the XR lineage and still the training gold standard",
          "Surgeons rehearsing operations on 3-D reconstructions of the patient's own scans",
          "Exposure therapy giving phobia and PTSD patients precisely graded doses of feared situations",
          "Automotive and architecture design reviews inside full-scale virtual models",
          "AR-assisted assembly and maintenance overlaying instructions on real machinery",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Simulator sickness ends products: if the camera moves without the body's consent, the vestibular mismatch punishes the user for hours. Chasing photorealism before comfort wastes effort — framerate and latency beat shader detail. A headset demo is not a business; content and ergonomics like weight, heat and glasses decide daily use. And the metaverse is a marketing layer over all of this — the technology works without requiring anyone's avatar to attend a meeting.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "XR", def: "Umbrella term for virtual, augmented and mixed reality." },
          { term: "Motion-to-photon latency", def: "Delay between head movement and display update; under about 20 milliseconds." },
          { term: "Degrees of freedom", def: "Independent motion axes tracked — three for rotation, six adds translation." },
          { term: "SLAM", def: "Simultaneous localization and mapping: tracking your position while building a 3-D map of the room." },
          { term: "Presence", def: "The convincing illusion of being inside the virtual environment." },
          { term: "Foveated rendering", def: "Rendering full detail only where the gaze rests, using eye tracking to save pixel budget." },
          { term: "Uncanny valley", def: "Discomfort triggered by humanoids that look almost, but not exactly, human." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "The motion-to-photon latency budget is roughly:",
            options: ["100 milliseconds", "20 milliseconds", "one second", "2 milliseconds"],
            answer: 1,
            explain: "Beyond about 20 ms the visual system flags the mismatch between movement and update — presence cracks and sickness begins.",
          },
          {
            q: "Inside-out tracking means:",
            options: [
              "cameras on the headset watch the room",
              "external cameras in the room watch the headset",
              "the user is tracked by satellite",
              "only head rotation is tracked",
            ],
            answer: 0,
            explain: "Onboard cameras plus inertial sensors track the head against the room itself — no external towers, no setup.",
          },
          {
            q: "SLAM solves for:",
            options: [
              "screen brightness",
              "the device's own position and the room's 3-D structure, simultaneously",
              "the user's heart rate",
              "network latency",
            ],
            answer: 1,
            explain: "It builds a feature map of the environment while localizing within it — the computational heart of standalone headsets.",
          },
          {
            q: "Foveated rendering exists because:",
            options: [
              "peripheral vision is color-blind",
              "rendering full detail everywhere would demand far more pixels than hardware can supply",
              "eyes cannot see motion",
              "batteries last longer when idle",
            ],
            answer: 1,
            explain: "Retinal sharpness across a wide field needs roughly seven times today's pixel count; eye tracking lets most of it stay cheaply blurred.",
          },
        ],
      },
    ],
  },
]
