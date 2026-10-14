// ============================================================================
// Digital SAT — Reading & Writing (bookId 'sat-rw-2026'). Chapters = the 4
// official College Board R&W content domains; sections = the official skill
// list (10 skills: 3 + 3 + 2 + 2) with their testing points. Source:
// College Board Digital SAT Suite Specifications Overview (Summer 2022) and
// satsuite.collegeboard.org skill descriptions, as compiled in
// research/sat-drdo-syllabus.md. Exam pattern: 54 discrete four-option MCQs
// / 64 minutes in 2 multistage-adaptive modules (27 Q each; 25 operational
// + 2 pretest), one short passage (25–150 words) or passage pair per
// question spanning literature, history/social studies, humanities, and
// science; within each module domains run Craft and Structure → Information
// and Ideas → Standard English Conventions → Expression of Ideas, ordered
// easiest → hardest.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../../library'

export const SAT_RW_CHAPTERS: ChapterMeta[] = [
  { id: 'eng-r1', bookId: 'english-complete', number: 1, title: 'Craft and Structure', shortTitle: 'Craft & Structure', description: 'Comprehension, vocabulary, analysis, synthesis, and reasoning needed to understand high-utility words in context, evaluate texts rhetorically, and connect topically related texts. The largest R&W domain at ~28% — 13–15 of 54 questions, always asked first in each module.', icon: 'type', pages: 'Domain 1 · ~28%', interactiveKey: 'js-playground' },
  { id: 'eng-r2', bookId: 'english-complete', number: 2, title: 'Information and Ideas', shortTitle: 'Information & Ideas', description: 'Locating, interpreting, evaluating, and integrating information and ideas from texts and informational graphics — tables, bar graphs, and line graphs. ~26% of the section, 12–14 questions.', icon: 'brain', pages: 'Domain 2 · ~26%', interactiveKey: 'js-playground' },
  { id: 'eng-r3', bookId: 'english-complete', number: 3, title: 'Standard English Conventions', shortTitle: 'English Conventions', description: 'Editing text to conform to core conventions of Standard English sentence structure, usage, and punctuation — every item asks which choice completes the text so it conforms to the conventions. ~26% of the section, 11–15 questions arranged easiest → hardest regardless of the convention tested.', icon: 'pen-tool', pages: 'Domain 3 · ~26%', interactiveKey: 'js-playground' },
  { id: 'eng-r4', bookId: 'english-complete', number: 4, title: 'Expression of Ideas', shortTitle: 'Expression of Ideas', description: 'Revising texts to improve the effectiveness of written expression and meet specific rhetorical goals — logically linking ideas with transitions and synthesizing a student’s notes into prose. ~20% of the section, 8–12 questions.', icon: 'sliders-horizontal', pages: 'Domain 4 · ~20%', interactiveKey: 'js-playground' },
]

export const SAT_RW_SECTIONS: SectionMeta[] = [
  // ---- Domain 1 · Craft and Structure (3 official skills) ----
  { id: 'eng-r1-s1', chapterId: 'eng-r1', number: 1.1, title: 'Words in Context', description: 'Determine the most logical and precise word or phrase to complete a text, and answer “as used in the text, what does ___ most nearly mean?” items. High-utility academic vocabulary is tested across multiple meanings and nuances, with choices that must be textually consistent.' },
  { id: 'eng-r1-s2', chapterId: 'eng-r1', number: 1.2, title: 'Text Structure and Purpose', description: 'Identify the main purpose of the overall text, and describe the function of an underlined sentence or claim within the text as a whole. Also analyze the overall structure and organization of a text and the rhetorical strategies used.' },
  { id: 'eng-r1-s3', chapterId: 'eng-r1', number: 1.3, title: 'Cross-Text Connections', description: 'For paired passages, identify points of agreement between the two authors, and determine how the author of one passage would most likely respond to a claim in the other. Compare similarities and differences in perspective, emphasis, and interpretation between the texts.' },
  // ---- Domain 2 · Information and Ideas (3 official skills) ----
  { id: 'eng-r2-s1', chapterId: 'eng-r2', number: 2.1, title: 'Central Ideas and Details', description: 'Identify the main idea or theme of a text, locate and interpret supporting details, and answer questions about specific details in the passage. Also select an accurate summary of the text.' },
  { id: 'eng-r2-s2', chapterId: 'eng-r2', number: 2.2, title: 'Command of Evidence', description: 'Textual evidence: identify which finding, claim, or quotation would best support a conclusion about the text. Quantitative evidence: interpret tables, bar graphs, and line graphs, determine which data support or illustrate a claim, and complete a table so it is consistent with findings.' },
  { id: 'eng-r2-s3', chapterId: 'eng-r2', number: 2.3, title: 'Inferences', description: 'Choose the statement that “most logically completes the text,” drawing valid inferences beyond literal comprehension. Complete incomplete ideas in a way consistent with the evidence in the passage.' },
  // ---- Domain 3 · Standard English Conventions (2 official skills) ----
  { id: 'eng-r3-s1', chapterId: 'eng-r3', number: 3.1, title: 'Boundaries', description: 'Recognize complete sentences versus fragments and run-ons, and link clauses correctly through coordination (FANBOYS + comma), subordination, and semicolons joining independent clauses. Punctuation within and among sentences — commas, semicolons, colons, dashes, apostrophes — including supplements like nonessential names, appositives, and interrupters, with no unwanted punctuation at clause boundaries.' },
  { id: 'eng-r3-s2', chapterId: 'eng-r3', number: 3.2, title: 'Form, Structure, and Sense', description: 'Subject–verb agreement (with intervening phrases and indefinite pronouns), verb tense, mood, and voice consistency, pronoun–antecedent agreement and case, and possessives versus plurals versus contractions. Also noun forms (count vs non-count), adjective vs adverb and comparative forms, modifier placement, frequently confused pairs (its/it’s, their/there), and logical conjunctions within sentences.' },
  // ---- Domain 4 · Expression of Ideas (2 official skills) ----
  { id: 'eng-r4-s1', chapterId: 'eng-r4', number: 4.1, title: 'Transitions', description: 'Select the most logical transition word or phrase to accomplish the organization of the text — addition, cause–effect, contrast, exemplification, emphasis, sequence/chronology, and summary relationships.' },
  { id: 'eng-r4-s2', chapterId: 'eng-r4', number: 4.2, title: 'Rhetorical Synthesis', description: 'Accomplish a stated rhetorical goal by effectively using information from a student’s bullet-point notes. Combine and revise sentences for concision, precision, and rhetorical effect while eliminating redundancy.' },
]
