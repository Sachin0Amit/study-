/**
 * Knowledge Universe — Education — Chapter 03: Learning Systems
 * 1 lesson · ~1,248 words
 * field: Education
 * legacy sources: social-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Learning Systems]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 soc-education-pedagogy — Education and Pedagogy: How Teaching Works
 */
import type { KnowledgeTopic } from '../../types'

export const educationCh03: KnowledgeTopic[] = [
  {
    id: "soc-education-pedagogy",
    title: "Education and Pedagogy: How Teaching Works",
    domain: "Social Sciences",
    field: "Education",
    branch: "Learning Systems",
    tier: "core",
    concepts: [
      "Transmission versus construction",
      "Cognitive load and worked examples",
      "Direct instruction versus discovery",
      "Bloom's two-sigma problem",
      "Mastery learning and feedback",
      "Formative versus summative assessment",
      "System variation and ed-tech evidence",
    ],
    words: 1248,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      { kind: "para", text: "Everyone spends years on the receiving end of teaching, which makes everyone confident they know how it works. They mostly do not. A century of research on instruction has separated methods that reliably build understanding from methods that merely feel good. This lesson is about the teaching side of learning: how knowledge is transmitted, constructed and assessed at scale, from classroom to nation. The learner's side — practice schedules, memory, habits — is covered in the Foundation study lessons." },
      { kind: "callout", title: "Why this matters", tone: "insight", text: "Schooling is among the largest deliberate interventions any society runs; small quality differences compound across millions of student-hours. Parents choosing schools, voters reading reforms, managers training staff and ed-tech buyers are all betting on a theory of teaching, often unknowingly." },
      { kind: "heading", text: "Core Concepts" },
      { kind: "para", text: "Two grand theories organize the field. Transmission theories treat knowledge as content to be delivered: explanation, worked examples, practice. Constructionist theories, from Jean Piaget's child-as-scientist to Jerome Bruner's spiral curriculum, treat learners as theory-builders who must reassemble understanding themselves. Paulo Freire attacked the extreme as “banking education” — depositing facts into passive accounts. The research verdict is not either/or: novices need structured input before they can construct anything solid, while experts learn best by connecting new material to what they already know." },
      { kind: "para", text: "The clearest result in the field is that pure discovery learning fails novices. Kirschner, Sweller and Clark's 2006 “Why Minimal Guidance During Instruction Does Not Work” argued from cognitive load: working memory is small, and searching for a solution while learning it overloads. Barak Rosenshine's Principles of Instruction distills decades of classroom research into a recipe: review first, small steps with many questions, worked examples, guided practice, checks for understanding, then independent work. Project Follow Through, the giant American evaluation of the 1970s, found direct instruction produced the strongest basic-skills gains of any model tested. Guided inquiry keeps its place once learners have schemas to navigate." },
      { kind: "para", text: "Benjamin Bloom's 1984 “two sigma problem” reported that students taught one-to-one under mastery conditions performed two standard deviations above conventional classrooms — an average student performing like a top-two-per-cent student. The “problem” is cost: tutoring everyone is unaffordable, so the quest is scaling the mechanism. Mastery learning holds the standard fixed and lets time vary — nobody advances until they demonstrate command; falling short triggers corrective teaching, not a permanent low grade. Fred Keller's personalized system of instruction did the same in universities. John Hattie's Visible Learning syntheses rank feedback and formative evaluation among the strongest influences on achievement." },
      { kind: "para", text: "Assessment splits by function. Summative assessment certifies after the fact — exams, grades, diplomas. Formative assessment runs during learning, feeding information back while it can still change instruction. Michael Scriven coined the distinction in 1967; Black and Wiliam's “Inside the Black Box” (1998) showed formative practice raises achievement substantially, especially for weaker students, at near-zero cost. Bloom's taxonomy (1956, revised by Anderson and Krathwohl in 2001) orders objectives from remembering and understanding through applying, analyzing, evaluating and creating — a checklist for alignment: teach, practice and test at one level." },
      { kind: "para", text: "At the system level, PISA and TIMSS comparisons show large, persistent differences between countries. East Asian systems — Shanghai, Singapore, Korea, Japan — top mathematics tables, combining coherent curricula, selective teacher recruitment and long distributed practice; Finland built a high-equity, low-testing system on masters-level teacher training and professional trust. Most successful systems share three factors: a selective, respected teaching profession; an ambitious, coherent curriculum; real time on task. Read the tables with care: sampling, culture and out-of-school “shadow education” tutoring inflate some scores, and rankings say nothing about student stress." },
      { kind: "para", text: "Education technology's evidence is stubbornly mixed. Peru's One Laptop per Child rollout, evaluated in a randomized trial by Julián Cristia and colleagues in 2017, found no measurable gains in mathematics or language — hardware without pedagogy moves nothing. Tools that embed the effective mechanisms — adaptive practice, immediate feedback, spaced scheduling — do better. The general law: technology amplifies whatever pedagogy it carries. A worksheet on a screen is still a worksheet, while well-designed tutoring software can approach Bloom's two sigma for a fraction of the cost. That is the current frontier." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: turn a four-week fractions unit into a mastery-learning design for a mixed-ability class.",
        "Set objectives up the taxonomy: from “add fractions with like denominators” (apply) to “choose which comparison strategy fits a problem” (evaluate) — objectives set the ceiling for both teaching and testing.",
        "Teach in small steps with checks: each segment ends with two quick questions; a wrong answer triggers re-explanation with different examples, not a repeat.",
        "Run formative checkpoints: a five-item quiz after each sub-topic; students below eighty per cent enter a corrective loop of alternative teaching plus practice, while others take enrichment tasks.",
        "Assess summatively when ready: the unit test is aligned question-for-question with the objectives; retakes with fresh items keep the standard fixed and the time variable.",
        "Read the data: if most of the class misses the same item, that is a teaching signal — re-teach it to everyone rather than record thirty failures.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Curriculum design and textbook adoption, where objectives–instruction–test alignment is the whole game.",
        "Teacher training and coaching built on Rosenshine-style instructional routines.",
        "High-dosage tutoring, the closest scalable cousin of Bloom's two-sigma result.",
        "Corporate training design, where mastery checkpoints and immediate feedback cut retraining costs.",
        "Ed-tech procurement that demands trial evidence before district-wide purchases.",
      ] },
      { kind: "callout", title: "Common Pitfalls", tone: "warn", text: "Constructivism is a theory of learning, not a license for unguided teaching — novices need the scaffolding first. Engagement is not learning: enjoyment predicts motivation, not mastery. Novelty effects make every new tool look brilliant for a semester; demand evidence from a second year. International league tables compare systems that differ in sampling, culture and shadow tutoring. And Bloom's taxonomy is a menu of objective types, not a pyramid children must climb one level at a time." },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "pedagogy", def: "The theory and practice of teaching — the method side of education." },
        { term: "constructivism", def: "The view that learners build knowledge from experience rather than receive it ready-made." },
        { term: "cognitive load", def: "The demand instruction places on working memory; overload blocks learning." },
        { term: "direct instruction", def: "Explicit, sequenced teaching: explanation, worked examples, guided practice, checks." },
        { term: "mastery learning", def: "Holding achievement standards fixed while time and corrective feedback vary per student." },
        { term: "formative assessment", def: "Assessment that feeds information back into teaching while learning is still underway." },
        { term: "Bloom's taxonomy", def: "A hierarchy of cognitive objectives from remembering to creating, aligning teaching and tests." },
      ] },
      { kind: "quiz", items: [
        {
          q: "Kirschner, Sweller and Clark's argument against minimal guidance rests on…",
          options: ["working memory limits in novices", "motivation deficits", "the cost of teachers", "national curriculum standards"],
          answer: 0,
          explain: "Novices lack the schemas to guide themselves, so searching for a solution and learning it simultaneously overload working memory.",
        },
        {
          q: "Bloom's “two sigma problem” is called a problem because…",
          options: ["tutoring harms independence", "the effect is too small to matter", "mastery tutoring works but is too costly for everyone", "standard deviations are unreliable"],
          answer: 2,
          explain: "The effect is the promise; scaling its mechanism to whole classrooms is the unsolved half.",
        },
        {
          q: "The defining feature of formative assessment is that it…",
          options: ["counts toward final grades", "occurs after instruction ends", "changes teaching while learning is still underway", "uses standardized tests only"],
          answer: 2,
          explain: "Black and Wiliam's review: feedback that can still alter instruction, near-zero cost, biggest gains for weaker students.",
        },
        {
          q: "Peru's One Laptop per Child randomized evaluation found…",
          options: ["large mathematics gains", "no measurable mathematics or language gains", "language gains only", "lower school enrollment"],
          answer: 1,
          explain: "Hardware without a pedagogy to carry it moved test scores not at all — technology amplifies instruction; it does not replace it.",
        },
      ] },
    ],
  },
]
