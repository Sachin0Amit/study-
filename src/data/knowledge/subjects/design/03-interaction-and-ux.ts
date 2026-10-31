/**
 * Knowledge Universe — Design — Chapter 03: Interaction & UX
 * 1 lesson · ~1,374 words
 * field: Visual Design
 * legacy sources: x41-arts-design-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Interaction & UX]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 design-ux-interaction — Interaction and UX Design: Usability, Flows and Wireframes
 */
import type { KnowledgeTopic } from '../../types'

export const designCh03: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'design-ux-interaction',
    title: 'Interaction and UX Design: Usability, Flows and Wireframes',
    domain: 'Arts & Culture',
    field: 'Visual Design',
    branch: 'Interaction & UX',
    tier: 'core',
    concepts: [
      'Visibility of system status and immediate feedback',
      'User flows and journey maps',
      'Wireframes to clickable prototypes',
      'Affordances and their signifiers',
      'Accessibility: contrast, focus, alt text, semantics',
      'Testing with real users, early and small',
    ],
    words: 1374,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'A poster is finished when it is printed; an interface is finished when someone uses it — and using involves time, motion, error, and memory. Interaction design and its parent discipline, user-experience design, exist for that difference: they design what a product does moment to moment in response to a person. This lesson covers usability heuristics, user flows and journey maps, the wireframe-to-prototype ladder, affordances and signifiers, accessibility fundamentals, and how to test with real users.',
      },
      {
        kind: 'para',
        text: 'The field\'s founding conviction comes from Don Norman\'s The Design of Everyday Things: when a person struggles with a door handle or a settings panel, the fault usually lies with the design, not the person. Norman spent years blaming himself for push-pull door confusion before concluding that the doors were lying to him. Usability, on this view, is not a vibe — it is measurable: whether specific users can complete specific tasks effectively, efficiently, and with satisfaction.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Usability is invisible when present and decisive when absent — a confusing flow quietly taxes every user, every session. And because an interface ships to everyone at once, small flaws scale into enormous aggregate costs, while small fixes compound in exactly the same way.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Heuristics, Flows, and Prototypes' },
      {
        kind: 'para',
        text: 'Jakob Nielsen and Rolf Molich published their usability heuristics in 1990, and Nielsen\'s 1994 refinement remains the field\'s shared checklist. Visibility of system status: keep users informed — the spinner, the saved checkmark, the cart count. Feedback: every action earns an immediate, legible response, so a pressed button confirms that it was pressed. Error prevention beats error messages: constrain the date field rather than scolding the typo. Recognition rather than recall: show the choices instead of forcing users to remember them. Consistency with standards, user control and undo, flexibility with shortcuts, a restrained aesthetic, plain-language error recovery, and reachable help complete the ten. A heuristic evaluation — one expert auditing a flow against this list — catches cheap findings before a single user is recruited.',
      },
      {
        kind: 'para',
        text: 'User flows map the machine\'s side of an experience: boxes for screens, arrows for paths, diamonds for decisions — checkout, onboarding, password recovery drawn as a map. Journey maps add the person\'s side over time: stages, actions, thoughts, and emotions laid along a timeline, often with a line of feeling running above it. The value of both is locating friction — the moment of doubt before paying, the dead end after an error — because that is where design work pays. Both are drawn before screens are beautiful; they are the blueprints that decide whether any screen should exist at all.',
      },
      {
        kind: 'para',
        text: 'The wireframe is the screen\'s skeleton: grayscale boxes, placeholder text, no brand — deliberately unresolved so that feedback targets structure rather than styling. Clickable prototypes stitch screens together with plausible fake behavior, so a whole flow can be tested before any engineering. The ladder runs from paper wireframes for divergent exploration, through digital wireframes for structure, to a clickable prototype for flow and behavior, with visual design arriving last. Each rung answers a different question at a different price, and climbing too fast — polishing pixels on an unproven flow — is the classic beginner\'s loss.',
      },
      {
        kind: 'para',
        text: 'An affordance is a relationship: what an object lets a person do. The signifier is the part that communicates it. A flat plate on a door affords pushing, and its shape says so; a handsome pull handle on a push-only door is a signifier lying about the affordance — Norman\'s famous doors. On screens, affordances must be signified by convention: buttons look filled or raised, links are colored and often underlined, carousels hint at more content beyond the edge. The rule that follows: everything clickable should look clickable, and nothing that looks clickable should be inert.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'The complaint: users abandon account creation. Map the current flow — six screens, password rules revealed only after a failed attempt, a newsletter checkbox pre-ticked.',
          'Journey-map it: the emotional low is the rejected password after full typing — anger landing exactly at the peak of effort; the hidden rule is the friction.',
          'Heuristic pass: error prevention — show password requirements beside the field; visibility — a strength meter; user control — an unmask toggle.',
          'Wireframe and prototype the fix: three screens, rules adjacent to the input, errors written in plain language next to their cause.',
          'Test with five thinking-aloud users: all five now finish, but two miss the unmask toggle — move it, retest, and five of five succeed without help.',
          'Ship and measure: abandonment falls, the journey map\'s dip flattens, and the next round is scheduled for a different flow.',
        ],
      },
      { kind: 'heading', text: 'Accessibility and Real Users' },
      {
        kind: 'para',
        text: 'Accessibility is usability at its most concrete, and its fundamentals are few. Contrast: text must clear the luminance ratio that the color-theory lesson in Design Foundations covers — a number any designer can verify, no good eye required. Focus: every control must be reachable by keyboard, with a visible focus indicator — tab through your own page and watch. Alt text: images need text equivalents for screen readers. Semantics: real buttons rather than clickable divs, real heading levels, labels tied to their inputs. Designing for permanent disabilities turns out to serve temporary and situational limits as well — captions built for deaf viewers serve commuters on mute, and large targets built for tremor serve anyone rushing.',
      },
      {
        kind: 'para',
        text: 'Usability testing is deliberately small and qualitative: recruit a real user, give a realistic task — find and book the cheapest Friday flight — ask them to think aloud, and watch where they hesitate, misread, or give up. A handful of participants surfaces most severe problems, because the big flaws repeat across users and diminishing returns arrive fast; that is why several rounds of five beat one study of thirty. Test early artifacts — paper, wireframes, prototypes — since a flaw found in wireframe costs an hour and the same flaw after launch costs a release cycle. Record the sessions and quote users verbatim; the recording is the argument.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Usability', def: 'Whether specific users can complete specific tasks effectively, efficiently, and with satisfaction — a measurable quality.' },
          { term: 'User flow', def: 'A diagram of the screens and decisions a user passes through to reach an outcome.' },
          { term: 'Journey map', def: 'A timeline of a user\'s actions, thoughts, and emotions across an experience, exposing friction points.' },
          { term: 'Wireframe', def: 'A low-fidelity skeleton of a screen — structure and hierarchy, deliberately unresolved visually.' },
          { term: 'Affordance', def: 'The action a thing makes possible for a person; communicated by its signifier.' },
          { term: 'Accessibility', def: 'Design that lets people across abilities perceive, operate, and understand a product — contrast, focus, alt text, semantics.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Commit to an answer before reading each explanation.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A spinner and a progress bar serve which heuristic?',
            options: ['Visibility of system status', 'Aesthetic and minimalist design', 'Error prevention', 'Flexibility and shortcuts'],
            answer: 0,
            explain: 'They keep the user informed about what the system is doing — the first heuristic on the list.',
          },
          {
            q: 'The difference between an affordance and a signifier is:',
            options: ['None — they are synonyms', 'The affordance is the possible action; the signifier is what communicates it', 'Affordances apply only to physical doors', 'Signifiers are possible actions; affordances communicate them'],
            answer: 1,
            explain: 'Pushing is what the door plate affords; the plate\'s flat shape is the signifier that says push.',
          },
          {
            q: 'Wireframes are kept grayscale and deliberately unresolved so that:',
            options: ['They print cheaply', 'Stakeholders mistake them for the final design', 'Feedback targets structure and hierarchy instead of styling debates', 'Colors confuse test software'],
            answer: 2,
            explain: 'Unpolished frames keep critique aimed at layout and flow — the expensive decisions — rather than font opinions.',
          },
          {
            q: 'Several rounds of five users beat one study of thirty because:',
            options: ['Five is a luckier number', 'The severe problems repeat across users, so small samples catch most of them — and rounds catch what redesign changes', 'Thirty users are impossible to recruit', 'Large studies violate ethics rules'],
            answer: 1,
            explain: 'Big flaws recur; the point of testing is to fix and then re-test the new design, not to average opinions once.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The design-process lesson places these prototypes in the full brief-to-handoff loop; the layout lesson covers the grids they sit on; the typography lesson handles the words inside the frames. For contrast arithmetic, see the color lesson in Design Foundations — then run one five-user test on something you have already shipped.',
        tone: 'path',
      },
    ],
  },
]
