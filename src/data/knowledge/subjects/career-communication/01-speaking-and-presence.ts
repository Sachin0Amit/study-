/**
 * Knowledge Universe — Career & Communication — Chapter 01: Speaking & Presence
 * 1 lesson · ~1,594 words
 * field: Career & Communication
 * legacy sources: everyday-practical.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Speaking & Presence]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 every-public-speaking — Public Speaking: Managing Fear, Structure and Delivery
 */
import type { KnowledgeTopic } from '../../types'

export const careerCommunicationCh01: KnowledgeTopic[] = [
  {
    id: "every-public-speaking",
    title: "Public Speaking: Managing Fear, Structure and Delivery",
    domain: "Everyday Knowledge",
    field: "Career & Communication",
    branch: "Speaking & Presence",
    tier: "core",
    concepts: [
      "Stage fright is arousal, not prophecy",
      "The exposure ladder: one small room at a time",
      "Structure: rule of three, open and close the loop",
      "Rehearse aloud, never memorize word-for-word",
      "Pace, pauses and the eye-contact triangle",
      "Slides support the speaker, never replace them",
      "Q&A: pause, restate, answer the real question",
    ],
    words: 1160,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Surveys have ranked public speaking among people's worst fears, which is statistically absurd — the podium has never once eaten anyone — but psychologically honest: a room of eyes reading you is exactly the situation ancient alarm systems were built for. Public speaking, the branch of Career & Communication behind this Everyday Knowledge topic, treats that fear as the first subject rather than ignoring it, then builds the three crafts that make audiences glad they came: a structure they can follow, a delivery they can relax into, and slides that know their place. Speaking is a trainable motor skill, like swimming, and almost nobody is naturally good before practice.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "From wedding toasts to job defenses, sales pitches to eulogies, life periodically hands everyone a microphone. The professional premium is real — the person who can stand up and clearly explain an idea becomes the visible one on every team — but the deeper payoff is that the fear, once walked through, stops leaking into ordinary meetings and interviews. Speaking skill is mostly thinking structure on your feet.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Fear first: the racing heart, dry mouth and shaky hands are adrenaline doing its job for a predator that is not there. Two reframe facts change everything. One, arousal is generic — the same pounding heart is excitement with a different label, and speakers who relabel 'I am terrified' as 'I am energized' measurably perform better. Two, audiences cannot see your insides; what feels like visible trembling reads as normal animation from three rows back. Slow exhalation (in four counts, out six) brakes the nervous system, arriving early to own the room kills half the spike, and the remaining nerves are fuel — the flat, un-nervous speaker is the boring one.",
      },
      {
        kind: "para",
        text: "The cure is graduated exposure, not avoidance. Toastmasters-style clubs, asking one question in the large meeting, volunteering for the small internal presentation, then the bigger one — each rung recalibrates the alarm a notch, and the person who speaks monthly cannot remember what the fear was like. The trap is the opposite pattern: every declined invitation makes the next one heavier. Treat speaking like a muscle with a training schedule, not a test you either pass or dodge.",
      },
      {
        kind: "para",
        text: "Structure is what audiences actually forgive you for. Working memory holds about three chunks, so build the talk as three things with a signposted map: 'three costs, three fixes, one decision.' Open with a hook that is not 'hello, my name is' — a question, a number, a story's first sentence — and close by visibly completing the loop back to that opening, which produces a small neurological click of satisfaction. Between them, signpost relentlessly: 'that was the problem; now the first option.' Listeners who always know where they are forgive imperfect sentences along the way.",
      },
      {
        kind: "para",
        text: "Rehearse aloud, on your feet, with a timer — reading it silently to yourself rehearses nothing, because speaking is a motor skill. Record yourself on a phone once: the playback is uncomfortable and instantly instructive (most people discover they speak faster and say 'um' more than they believed, and that their terrible stumbles were inaudible). Memorize the skeleton — the three points, the opening line and the closing line — and trust the sentences to regenerate differently each run; word-for-word memorization creates a brittle performance where one lost word derails the train. Three full spoken run-throughs is the honest minimum for anything that matters.",
      },
      {
        kind: "para",
        text: "Delivery is pace, pause and eyes. Aim for roughly 130 to 150 words per minute — nervous speakers hit 180, and the audience's comprehension does not come along — and mark your notes with pause points, because a two-second silence after a key sentence does more emphasis than any vocal gymnastics. Plant your weight on both feet, hands free to gesture at waist height (a speaker holding a pen still transmits tension through it). For eye contact, use the triangle: hold one person's eyes for a full thought, then another — three friendly anchors across the room become your rotation. Scanning the crowd like a sprinkler contacts no one.",
      },
      {
        kind: "para",
        text: "Slides are a backdrop with a strict job: one idea per slide, big type, more images than words, and never read aloud — the moment you read a bullet, the audience reads ahead and stops listening. A slide exists so the audience's eyes have somewhere to land that supports your point; when a story or a key line matters, put up nothing (black screen, or step forward) and let yourself be the only channel. And when technology fails, as it will, a speaker with a memorized skeleton simply continues talking — the disaster is only a disaster if the talk lived in the file.",
      },
      {
        kind: "para",
        text: "Q&A is a separate skill with three habits. Pause for two seconds before answering — it reads as wisdom and buys your brain the time it actually needs. Restate the question in your own words, both for the room's acoustics and to check you heard the real one. And answer the question that was asked, briefly, before elaborating; if you do not know, say so plainly and offer to follow up — audiences trust 'I don't know, I'll find out' more than a confident waffle. End Q&A by taking the last question and then delivering your prepared closing line, so the talk ends on your terms, not on whatever the final question happened to be.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Speech length",
        latex: "W = t \\times 120\\text{--}150",
        meaning: "Words needed equal minutes times pace; a five-minute talk is about 600-750 words — write to the timer, not the topic.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: deliver a five-minute pitch at a team offsite on adopting a weekly planning ritual — no slides required, mixed senior audience, two days away.",
          "Recall the governing idea: three-chunk structure with a closing loop, 600-750 words rehearsed aloud, pauses marked, and a pre-planned Q&A ending.",
          "Apply: skeleton — hook ('we lose a day a week to deciding what to do next'), three chunks (the cost, the ritual, the first month), loop back to the hook in the close. Write 700 words, cut to 650; rehearse aloud three times with a timer, marking pauses after the hook and each chunk; record once, note the speed; plant three eye-contact anchors.",
          "State the result: a five-minute talk that lands at 4:48, a closing line held in reserve for after Q&A, and — the real product — a next invitation to speak, one rung up the exposure ladder.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Before: arrive early, own the room, breathe out longer than in, relabel the nerves as energy.",
          "Build: hook, three chunks, signposts, closing loop — write the skeleton first and the words second.",
          "Rehearse: three spoken run-throughs on your feet with a timer; one recorded and reviewed; memorize only skeleton, opening and close.",
          "Deliver: 130-150 words per minute, marked pauses, eye-contact triangle, feet planted, hands free.",
          "Slides: one idea each, big type, never read; black screen for your key story.",
          "Q&A: two-second pause, restate, answer briefly, end with your prepared closer.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The top three self-inflicted wounds: memorizing word-for-word (one blank and the talk drowns), reading slides (the audience reads faster than you speak, and you become furniture), and apologizing — for nervousness, for a cough, for slides — which only teaches the audience to look for faults they would never have noticed. Close behind: opening with logistics ('can everyone hear me?' for two minutes), speaking to the screen instead of the room, and running long, which tells the audience their time was the cheapest input in your preparation.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Exposure ladder", def: "A sequence of small, increasing speaking challenges that recalibrates the fear response." },
          { term: "Rule of three", def: "Structuring content in three chunks to fit the audience's working memory." },
          { term: "Closing the loop", def: "Ending by returning to the opening image or question for a click of completion." },
          { term: "Eye-contact triangle", def: "Rotating eye contact among three anchor listeners, one full thought each." },
          { term: "Signposting", def: "Verbal markers that tell the audience where they are in the structure." },
          { term: "Skeleton memorization", def: "Memorizing points and transitions while letting sentences regenerate naturally." },
          { term: "Restating the question", def: "Repeating an audience question in your own words before answering it." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "The racing heart and shaky hands before speaking are best treated as:",
            options: ["Proof you are not cut out for it", "Generic arousal that can be relabeled as energy and used as fuel", "An illness to medicate", "Something that disappears with age"],
            answer: 1,
            explain: "Arousal is not fear-specific; speakers who relabel it as excitement measurably perform better, and audiences cannot see the inside state.",
          },
          {
            q: "A five-minute talk at a comfortable pace contains roughly:",
            options: ["300 words", "650 words", "1,200 words", "2,500 words"],
            answer: 1,
            explain: "At 130-150 words per minute, five minutes is 650-750 words — writing to the timer is what keeps talks on time.",
          },
          {
            q: "Why avoid memorizing a speech word-for-word?",
            options: ["It sounds too polished", "One lost word can derail the whole performance; a memorized skeleton regenerates", "Audiences dislike accuracy", "It is impossible"],
            answer: 1,
            explain: "Verbatim memory is brittle; knowing points, transitions, opening and close lets sentences rebuild live and survive interruptions.",
          },
          {
            q: "The best response to a question you cannot answer is:",
            options: ["A confident guess", "Say so plainly and offer to follow up", "Answer a different question", "Critique the question"],
            answer: 1,
            explain: "'I don't know, I'll find out' preserves credibility; bluffing and question-swapping burn it.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "The job-interview lesson in this branch applies the same structure one-on-one. Cognitive Psychology in the Library explains the working-memory limit behind the rule of three; the Language Acquisition and Linguistics subjects cover the deeper machinery of spoken language; and the study-skills lessons cover rehearsing as deliberate practice.",
        tone: "path",
      },
    ],
  },
]
