/**
 * Knowledge Universe — Medical Technology — Chapter 03: Prosthetics & Human–Machine Interfaces
 * 1 lesson · ~1,188 words
 * field: Medical Technology
 * legacy sources: technology-applied.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Human-Machine Interfaces]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 tech-prosthetics-bionics — Prosthetics and Bionics: Rebuilding Bodies
 */
import type { KnowledgeTopic } from '../../types'

export const medicalTechnologyCh03: KnowledgeTopic[] = [
  {
    id: "tech-prosthetics-bionics",
    title: "Prosthetics and Bionics: Rebuilding Bodies",
    domain: "Technology & Applied Science",
    field: "Medical Technology",
    branch: "Human-Machine Interfaces",
    tier: "intermediate",
    concepts: [
      "socket fit as pressure management",
      "myoelectric control from residual muscles",
      "osseointegration: bone-anchored limbs",
      "sensory feedback closes the loop",
      "targeted muscle reinnervation rewires nerves",
      "bionic eyes and cochlear implants",
      "cost, access and device abandonment",
    ],
    words: 1188,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A prosthetic leg carved from wood walked with an Egyptian pharaoh three thousand years ago; a myoelectric hand today opens and closes because its owner thinks about opening and closing. Between those two objects lies the whole arc of prosthetics and bionics: from passive replacement to active machine that reads the nervous system's intentions. This lesson walks the modern field — how a limb attaches, how it is controlled, how it feeds sensation back, and who can actually get one.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "The interface, not the machinery, is the hard part. The most advanced bionic hand fails on a badly fitting socket, and the most successful device is the one its wearer keeps using. Everything in this field begins and ends at the boundary between body and machine.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The socket is the foundation of every conventional prosthesis, and socket design is pressure management. A leg prosthesis must funnel the entire load of standing and walking — multiples of body weight at heel strike — through soft tissue never designed to bear it. Total-surface-bearing sockets spread force over every available square centimeter, with padded liners and pin or vacuum suspension holding the limb snugly inside. Alignment matters just as much: a few degrees of rotation at the foot cascades into knee and hip pain.",
      },
      {
        kind: "para",
        text: "Myoelectric control turns residual muscles into a joystick. When an arm is amputated, the muscles that once moved the wrist and fingers usually remain in the forearm, still contracting under voluntary command. Electrodes pressed against the skin inside the socket read this electromyography; a processor maps signal strength to motor speed — squeeze harder, close faster — and co-contractions of opposing muscles switch grip modes. The hand moves, in effect, because the patient fires the same mental command that once moved flesh.",
      },
      {
        kind: "para",
        text: "Osseointegration removes the socket entirely. A titanium fixture is screwed into the marrow cavity of the residual bone and, over months, living bone grows onto the metal — the same biology dental implants exploit. An abutment passes through the skin to carry the artificial limb, so load travels bone-to-bone instead of squeezing soft tissue. The gains are stability, range of motion and comfort; the standing risk is infection at the skin-penetration site, which demands disciplined hygiene.",
      },
      {
        kind: "para",
        text: "Modern bionics tries to close the loop in both directions. Sensors in a prosthetic fingertip can report pressure to tiny electrodes that stimulate nerves in the residual limb, letting the wearer feel squeeze and texture — in laboratory systems, patients sort fruit by ripeness through the device alone. Feedback is not a luxury: sensation steadies grip, cuts the concentration a device demands, and has even reduced phantom-limb pain. The most experimental interfaces skip the arm entirely, decoding intended movement straight from the motor cortex.",
      },
      {
        kind: "para",
        text: "Targeted muscle reinnervation rewires the problem for high-level amputees. When an arm is lost at the shoulder, too little limb remains to carry electrodes, so surgeons redirect the severed nerves that once served the hand into chest muscles. After healing, thinking about opening the hand makes a patch of chest contract — a biological amplifier the prosthesis can read. The same nerve transfers, in gentler form, treat painful neuromas and restore protective sensation.",
      },
      {
        kind: "para",
        text: "The senses have their own machines. Cochlear implants, the most successful neural prosthesis ever built, bypass damaged hair cells and fire the auditory nerve directly with an array of electrodes — restoring usable hearing to hundreds of thousands, including children born deaf who develop spoken language with it. Retinal implants push the same idea into vision, electrically stimulating surviving retinal cells in conditions like retinitis pigmentosa, though resolution remains coarse. Both prove the principle: the nervous system will accept a machine's version of its native language.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Socket interface pressure",
        latex: "P = \\frac{F}{A}",
        meaning: "Pressure under the socket equals load divided by contact area, kept below soft tissue's tolerance for all-day wear.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: an 80-kilogram transtibial amputee's prosthesis delivers about 800 newtons of stance load through the residual limb — what interface pressure does that create, and is it safe for all-day wear?",
          "Recall the governing idea: socket pressure is force divided by contact area, and soft tissue tolerates roughly 20 to 35 kilopascals sustained before breakdown.",
          "Apply: a patellar-tendon-bearing socket contacts about 250 square centimeters, or 0.025 square meters, so P = 800 N ÷ 0.025 m² = 32,000 Pa, about 32 kPa — at the ceiling of the tolerance band. A total-surface-bearing design capturing 400 cm² gives 800 ÷ 0.04 = 20 kPa, comfortably inside it.",
          "State the result: socket design is arithmetic plus anatomy — enlarging effective contact area drops pressure proportionally, which is why modern sockets engulf the whole limb rather than hang from a single tendon.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Microprocessor knees sense gait dozens of times a second and prevent stumbles on stairs",
          "Carbon running blades store and return stride energy for sprinters",
          "Cochlear implants restore spoken language to children born deaf",
          "Osseointegration programs return swimming and showering to amputees who could not tolerate sockets",
          "TMR patients control multi-grasp bionic arms through chest and upper-arm muscles",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Do not picture movie robot arms: today's bionic hands remain slower and less dexterous than biological ones, and many users still prefer a simple body-powered hook for reliability. A prosthesis nobody can afford, repair or be refitted for — children outgrow limbs like shoes — is no replacement at all; myoelectric arms cost as much as cars, and abandonment rates run high. And the socket still rules: most complaints trace to fit, not firmware.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Socket", def: "The custom-molded interface that transfers load from prosthesis to residual limb." },
          { term: "Myoelectric control", def: "Driving a motorized prosthesis with EMG signals from residual muscles." },
          { term: "Osseointegration", def: "Direct anchoring of a titanium implant in living bone to carry a limb without a socket." },
          { term: "Targeted muscle reinnervation", def: "Surgical redirection of severed nerves to new muscles, creating readable control signals." },
          { term: "Sensory feedback", def: "Returning touch information from sensors to nerves, closing the control loop." },
          { term: "Cochlear implant", def: "Electrode array that stimulates the auditory nerve directly, bypassing damaged hair cells." },
          { term: "Proportional control", def: "Mapping signal strength to speed or force: harder contraction, faster motion." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "In a conventional prosthesis, the component that most determines comfort is:",
            options: ["The microprocessor", "The socket", "The cosmetic glove", "The battery"],
            answer: 1,
            explain: "Every load passes through the socket into soft tissue; fit problems, not electronics, drive most abandonment.",
          },
          {
            q: "Myoelectric hands are controlled by:",
            options: [
              "Electromyography from residual muscles that still contract",
              "Thought-reading scalp electrodes",
              "Voice commands",
              "Pre-programmed gestures only",
            ],
            answer: 0,
            explain: "The muscles that once moved the hand remain and contract on command; surface electrodes read their signals.",
          },
          {
            q: "Osseointegration attaches a prosthesis by:",
            options: [
              "Bone growing onto a titanium implant anchored in the residual bone",
              "Grafted skin stretched over the device",
              "Straps over the shoulder",
              "Magnetic coupling",
            ],
            answer: 0,
            explain: "Bone bonds directly to titanium, and an abutment through the skin carries the limb — no socket at all.",
          },
          {
            q: "Targeted muscle reinnervation helps shoulder-level amputees by:",
            options: [
              "Lengthening the residual limb",
              "Reducing device weight",
              "Rewiring hand nerves to chest muscles so their signals become readable",
              "Replacing sensory nerves with wires",
            ],
            answer: 2,
            explain: "Thoughts of hand movement then contract chest muscle — a biological amplifier the prosthesis can read.",
          },
        ],
      },
    ],
  },
]
