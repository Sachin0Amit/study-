/**
 * Knowledge Universe — Animation — Chapter 05: Comics & Sequential Art
 * 2 lessons · ~2,549 words
 * field: Animation & Sequential Art
 * legacy sources: arts-culture.ts, x40-arts-animation-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Comics & Sequential Art, The Page]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 animation-comics-grammar — Comics and the Grammar of Sequential Art
 *   05.2 art-comics-manga-sequential-art — Comics and Manga: How Sequential Art Tells Stories
 */
import type { KnowledgeTopic } from '../../types'

export const animationCh05: KnowledgeTopic[] = [
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
  {
    id: "art-comics-manga-sequential-art",
    title: "Comics and Manga: How Sequential Art Tells Stories",
    domain: "Arts & Culture",
    field: "Animation & Sequential Art",
    branch: "The Page",
    tier: "core",
    concepts: [
      "Juxtaposed images in deliberate sequence",
      "Panel, gutter, page: the three units",
      "Closure: the reader's imagination in the gap",
      "McCloud's six panel-to-panel transitions",
      "Manga reading flow and its conventions",
      "Words and pictures sharing the load",
    ],
    words: 1179,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Comics are writing with images: series of pictures read in deliberate order, where time flows through space. Will Eisner called it sequential art; Scott McCloud's Understanding Comics (1993) turned it into a grammar — panels as sentences, pages as paragraphs, and the gap between panels as the reader's job. This core Animation & Sequential Art topic covers that grammar, the transitions that connect panels, the mechanics of page flow, and what distinguishes manga from Western comic traditions.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Film moves at 24 frames a second you cannot control; comics hand the reader the throttle. That is why the craft matters — pacing, emphasis and revelation are designed into frozen space, and the same grammar underlies storyboards, UX flows and picture books.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The panel is the atom: a bounded image holding one chosen moment. The gutter — the space between panels — is where the magic happens: nothing is drawn there, yet the reader's closure manufactures time, motion and causation to bridge the gap. The page is the largest unit, a composition grasped in an instant before and after its sequence; a full-page panel is a held breath, a nine-panel grid is a brisk pulse. And the page turn hides a reveal until the reader's own hand commits it — comics' only guaranteed surprise.",
      },
      {
        kind: "para",
        text: "McCloud sorted panel-to-panel moves into six transitions. Moment-to-moment closes the smallest gaps; action-to-action follows one subject through a deed — the workhorse of Western comics. Subject-to-subject hops between actors in the same scene; scene-to-scene jumps across distance or time and demands the most closure. Aspect-to-aspect lingers on one place across angles — weather, hands, a sunset — building mood rather than plot, a manga staple. Non-sequitur respects no logic at all, rare and jarring by design.",
      },
      {
        kind: "para",
        text: "The eye must never wonder where to go next. Western pages read left to right, top to bottom, so designers stack panels along a Z-shaped path and use composition — a character's gaze, a motion line — to sling the reader toward the next frame. Manga run right to left, and translated volumes keep the original direction; panel tiers read right to left within each page. Shape carries meaning too: tall panels read as tall, wide as panoramic, a row of identical small panels as a beat of monotony or suspense. Break the grid rarely, and on purpose.",
      },
      {
        kind: "para",
        text: "Comics braid two streams. Speech balloons carry spoken voice, thought bubbles interior monologue, captions narration and time stamps, and sound effects make noise visible. The craft decision is division of labor: words and pictures should not both say the same thing — a caption describing what the art already shows is dead weight. The strongest pages let images carry action while words carry irony or specificity. Wordless sequences — a silent fight, a wordless grief — prove the pictures were never illustrations to begin with.",
      },
      {
        kind: "para",
        text: "Manga industrialized the form: weekly anthologies like Shonen Jump run chapters by a creator and a small studio, then collected volumes gather them into permanent books. Visual conventions hardened into a language — screentone dots for shading and mood, speed lines that stretch time, chibi distortions for comic relief, silent gutters for grief. Genres sort by audience: shonen for young readers, shojo for girls, seinen and josei for adults, each with its own pacing norms. Decompression — telling less story per panel — is a Japanese export that reshaped Western books toward mood.",
      },
      {
        kind: "para",
        text: "The infinite canvas arrived with the web: webtoons scroll vertically forever, replacing the page turn with a controlled drip of reveals and cliffhanger spacing. Graphic novels carry long-form literary ambition; graphic medicine explains illness in panels; instruction manuals and airplane safety cards are comics that never admit it. The grammar survives every medium it touches.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: lay out a six-panel page — a woman finds a letter, reads it, packs a bag and leaves — landing the biggest beat on a page turn.",
          "Recall the governing ideas: transitions control pacing; aspect-to-aspect sets mood; the final panel and the page turn are the two strongest positions.",
          "Apply: open with an establishing panel of the hallway (aspect-to-aspect, quiet tone). Two action-to-action panels — envelope on the mat, hands breaking the seal. A tight subject-to-subject pair: her eyes, then her face. Close the page on the packed bag by the door, the letter itself never shown, one caption giving the departure time. The page turn reveals the empty room.",
          "State the result: the reader's closure supplies the letter's contents and the decision between panels; the page break does the emotional work a special effect would do in film.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Film storyboards are comics drawn under time pressure — same grammar, disposable art.",
          "UX designers storyboard user journeys panel by panel before writing code.",
          "Educators teach processes — lab procedures, history — with panel sequences that pace attention.",
          "Manga readers navigate right-to-left volumes fluently, a small cognitive superpower.",
          "Webtoon creators script for vertical scroll, spacing reveals between thumb-flicks.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The fatal sins are ambiguity and redundancy. Panels whose order is unclear — a diagonal that reads two ways — lose the reader mid-story; captions that narrate the drawing insult the art; gutters that jump too far without anchors feel like missing pages; and copying a favorite style's surface (speed lines, heavy tone) without its pacing logic produces noise. Also common: forgetting the page is read as a whole composition before it is read in sequence.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Panel", def: "A bounded image holding one chosen moment — the atom of the form." },
          { term: "Gutter", def: "The space between panels where the reader's imagination performs closure." },
          { term: "Closure", def: "The act of bridging panels — inferring time, motion and cause that are never drawn." },
          { term: "Aspect-to-aspect transition", def: "A panel move that tours one place across angles or details, building mood over plot." },
          { term: "Screentone", def: "Printed dot patterns, adhesive or digital, that shade and set mood in manga." },
          { term: "Caption", def: "Boxed narration outside the story's present voice — time stamps, narrators, context." },
          { term: "Page turn", def: "The physical reveal between pages or spreads — comics' controlled surprise." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Closure happens where, exactly?",
            options: ["Inside the panel", "In the gutter between panels", "In the caption", "On the back cover"],
            answer: 1,
            explain: "The undrawn space between panels is where the reader manufactures time, motion and cause.",
          },
          {
            q: "Manga pages read:",
            options: ["Left to right", "Top to bottom only", "Right to left", "In any order"],
            answer: 2,
            explain: "Japanese reads right to left, and translated volumes preserve the original direction of travel.",
          },
          {
            q: "An aspect-to-aspect transition primarily builds:",
            options: ["Plot momentum", "Mood and place", "Sound effects", "Panel count"],
            answer: 1,
            explain: "It tours a scene across angles and details rather than advancing action — a manga signature.",
          },
          {
            q: "A caption that restates exactly what the drawing shows is:",
            options: ["Useful reinforcement", "Redundant — dead weight", "Standard practice", "A sound effect"],
            answer: 1,
            explain: "Words and pictures should divide the labor; duplication wastes the reader's attention twice.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "One pencil and printer paper will do. Natural next steps: the animation lesson for motion principles on either side of the gutter, the story-structure lesson for long-form arcs, and the typography lesson for lettering that speaks.",
        tone: "path",
      },
    ],
  },
]
