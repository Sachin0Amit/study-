/* ------------------------------------------------------------------ */
/*  Knowledge domains — Library bridge (section-wise edition)          */
/*                                                                     */
/*  Every knowledge domain is a FIRST-CLASS LIBRARY SECTION, exactly   */
/*  like "Foundations", "Electronics & Communication" or "Mechanical   */
/*  & Energy":                                                         */
/*                                                                     */
/*    Section (domain group) → Subject (field) →                       */
/*    Book (field track) → Chapter (branch) → Section (topic lesson)   */
/*                                                                     */
/*  There is NO "Knowledge Universe" wrapper — the user asked for      */
/*  section-wise presentation: "Foundation Learning, which has         */
/*  multiple subjects; Life Science, which has multiple subjects;      */
/*  Social Science … Humanities …". The bridge adapts automatically    */
/*  as ../knowledge/fields/*.ts grows.                                 */
/*                                                                     */
/*  DEDUP RULE: topics listed in ../knowledge/dedup.ts are already     */
/*  explained elsewhere in the Library and are filtered out here —     */
/*  zero repetition across the app. Expansion passes must consult      */
/*  coverage/COVERAGE.md before authoring anything new.                */
/* ------------------------------------------------------------------ */

import type {
  Subject,
  BookMeta,
  ChapterMeta,
  SectionMeta,
  SectionContent,
  Concept,
  WorkedExample,
  QuizQuestion,
} from '../library'
import {
  KNOWLEDGE_DOMAIN_FILES,
  countTopicWords,
  type KnowledgeTopic,
  type KnowledgeBlock,
} from '../knowledge'
import { EXCLUDED_DOMAINS, EXCLUDED_TOPICS } from '../knowledge/dedup'

/* ------------------------------------------------------------------ */
/*  Section (domain) metadata                                          */
/* ------------------------------------------------------------------ */

interface DomainSectionDef {
  key: string
  /** Library section name — the group header users see */
  name: string
  icon: string
  accent: string
  tagline: string
}

const DOMAIN_SECTIONS: Record<string, DomainSectionDef> = {
  'Foundation Learning': {
    key: 'foundation-learning',
    name: 'Foundation Learning',
    icon: 'graduation-cap',
    accent: '#f59e0b',
    tagline: 'Learn how to learn',
  },
  'Physical Sciences': {
    key: 'physical-sciences',
    name: 'Physical Sciences',
    icon: 'telescope',
    accent: '#f43f5e',
    tagline: 'The physical world, explained',
  },
  'Life Sciences': {
    key: 'life-sciences',
    name: 'Life Sciences',
    icon: 'dna',
    accent: '#34d399',
    tagline: 'How living systems work',
  },
  'Environment & Sustainability': {
    key: 'environment',
    name: 'Environment & Sustainability',
    icon: 'leaf',
    accent: '#22c55e',
    tagline: 'Earth systems and stewardship',
  },
  Engineering: {
    key: 'engineering',
    name: 'Engineering Science',
    icon: 'cog',
    accent: '#b45309',
    tagline: 'How engineered things work',
  },
  'Technology & Applied Science': {
    key: 'technology-applied',
    name: 'Technology & Applied Science',
    icon: 'circuit-board',
    accent: '#0d9488',
    tagline: 'The applied engines of modern life',
  },
  'Social Sciences': {
    key: 'social-sciences',
    name: 'Social Sciences',
    icon: 'users',
    accent: '#d946ef',
    tagline: 'Why people do what they do',
  },
  Humanities: {
    key: 'humanities',
    name: 'Humanities',
    icon: 'landmark',
    accent: '#d97706',
    tagline: 'The record of human meaning',
  },
  'Languages & World Literature': {
    key: 'languages-literature',
    name: 'Languages & World Literature',
    icon: 'type',
    accent: '#f472b6',
    tagline: 'How languages live and grow',
  },
  'Law & Governance': {
    key: 'law-governance',
    name: 'Law & Governance',
    icon: 'scale',
    accent: '#a16207',
    tagline: 'Rules, states and constitutions',
  },
  'Business & Economics': {
    key: 'business-economics',
    name: 'Business & Economics',
    icon: 'trending',
    accent: '#65a30d',
    tagline: 'Markets, money and trade',
  },
  'Health & Wellness': {
    key: 'health-wellness',
    name: 'Health & Wellness',
    icon: 'heart-pulse',
    accent: '#e11d48',
    tagline: 'Body and mind, kept well',
  },
  'Arts & Culture': {
    key: 'arts-culture',
    name: 'Arts & Culture',
    icon: 'palette',
    accent: '#ec4899',
    tagline: 'How art works on us',
  },
  'Everyday Knowledge': {
    key: 'everyday-practical',
    name: 'Everyday Knowledge',
    icon: 'home',
    accent: '#f97316',
    tagline: 'The science of daily life',
  },
  'Emerging & Interdisciplinary': {
    key: 'emerging-interdisciplinary',
    name: 'Emerging & Interdisciplinary',
    icon: 'sparkles',
    accent: '#06b6d4',
    tagline: 'Where fields collide',
  },
}

/* ------------------------------------------------------------------ */
/*  Subject (field) metadata — icon + tagline per field                */
/* ------------------------------------------------------------------ */

const FIELD_META: Record<string, { icon: string; tagline: string }> = {
  /* Foundation Learning */
  'Study Skills & Memory': { icon: 'brain', tagline: 'Retain more, study less' },
  'Reading & Literacy': { icon: 'book', tagline: 'Read with intent' },
  'Everyday Math & Numeracy': { icon: 'calculator', tagline: 'Numbers in daily life' },
  'Skill Acquisition': { icon: 'timer', tagline: 'Practice that compounds' },
  /* Physical Sciences */
  'Astronomy & Space Science': { icon: 'telescope', tagline: 'The lives of stars' },
  /* Life Sciences */
  'Genetics & Heredity': { icon: 'dna', tagline: 'The code of inheritance' },
  Neuroscience: { icon: 'brain', tagline: 'Signals of the mind' },
  Botany: { icon: 'sprout', tagline: 'How plants build the world' },
  'Evolutionary Biology': { icon: 'git-branch', tagline: 'Descent with modification' },
  Immunology: { icon: 'filter', tagline: 'The body\u2019s defense layers' },
  Ecology: { icon: 'globe', tagline: 'Energy through ecosystems' },
  /* Environment & Sustainability */
  'Climate Science': { icon: 'wind', tagline: 'Reading the atmosphere' },
  'Agriculture & Food Systems': { icon: 'sprout', tagline: 'Feeding eight billion' },
  'Conservation Biology': { icon: 'mountain', tagline: 'Keeping species alive' },
  'Earth Systems': { icon: 'globe', tagline: 'Rocks, water and cycles' },
  'Energy & Sustainability': { icon: 'battery-charging', tagline: 'Clean power, real math' },
  'Environmental Policy': { icon: 'scale', tagline: 'Governing the commons' },
  /* Engineering Science */
  'Aerospace Engineering': { icon: 'rocket', tagline: 'Why flight works' },
  /* Technology & Applied Science */
  Telecommunications: { icon: 'radio', tagline: 'Finding where you are' },
  'Medical Technology': { icon: 'microscope', tagline: 'Machines that see within' },
  /* Social Sciences */
  Psychology: { icon: 'brain', tagline: 'The studied mind' },
  Sociology: { icon: 'users', tagline: 'Society as a system' },
  'Political Science': { icon: 'landmark', tagline: 'Power and cooperation' },
  'Urban Sociology': { icon: 'boxes', tagline: 'Why cities exist' },
  /* Humanities */
  Philosophy: { icon: 'lightbulb', tagline: 'The examined life' },
  'World History': { icon: 'map', tagline: 'How the world connected' },
  'Comparative Mythology': { icon: 'sparkles', tagline: 'Stories people share' },
  /* Languages & World Literature */
  'Language Acquisition Science': { icon: 'book', tagline: 'How brains absorb language' },
  Spanish: { icon: 'type', tagline: 'Two verbs for to be' },
  Japanese: { icon: 'type', tagline: 'Three scripts, one language' },
  Linguistics: { icon: 'binary', tagline: 'The architecture of language' },
  'Phonetics & Phonology': { icon: 'audio-waveform', tagline: 'The sounds of speech' },
  'Literary Craft': { icon: 'pen-tool', tagline: 'How writing works' },
  /* Law & Governance */
  'Constitutional Law': { icon: 'scale', tagline: 'Power divided' },
  'International Law': { icon: 'globe', tagline: 'Rules between nations' },
  'Private Law': { icon: 'handshake', tagline: 'Promises enforced' },
  'Criminal Justice': { icon: 'siren', tagline: 'Proof and process' },
  /* Business & Economics */
  Microeconomics: { icon: 'trending', tagline: 'Prices and incentives' },
  'Finance & Investment': { icon: 'calculator', tagline: 'Money across time' },
  'International Trade': { icon: 'globe', tagline: 'Why nations exchange' },
  Macroeconomics: { icon: 'chart-line', tagline: 'Whole economies' },
  'Behavioral Economics': { icon: 'brain', tagline: 'Predictably irrational' },
  Strategy: { icon: 'route', tagline: 'Choosing what not to do' },
  /* Health & Wellness */
  'Sleep Science': { icon: 'clock', tagline: 'The night shift' },
  'Exercise & Fitness': { icon: 'heart-pulse', tagline: 'Adaptation by load' },
  Nutrition: { icon: 'utensils', tagline: 'Fuel, decoded' },
  'Mental Health': { icon: 'activity', tagline: 'Stress and balance' },
  'Public Health': { icon: 'users', tagline: 'Health at scale' },
  /* Arts & Culture */
  Photography: { icon: 'aperture', tagline: 'Light, framed' },
  'Music Theory & Practice': { icon: 'audio-waveform', tagline: 'Why chords feel' },
  'Film & Cinema': { icon: 'clapperboard', tagline: 'The grammar of film' },
  'Creative Writing': { icon: 'pen-tool', tagline: 'Stories, engineered' },
  'Visual Design': { icon: 'palette', tagline: 'Composition that guides' },
  'Fashion & Identity': { icon: 'tag', tagline: 'Clothing as signal' },
  /* Everyday Knowledge */
  'Cooking & Food Science': { icon: 'utensils', tagline: 'The chemistry of dinner' },
  'Personal Finance': { icon: 'calculator', tagline: 'Your money, mastered' },
  'Navigation & Outdoors': { icon: 'route', tagline: 'Never lost again' },
  'Games & Strategy': { icon: 'dices', tagline: 'Winning, formalized' },
  /* Emerging & Interdisciplinary */
  Bioinformatics: { icon: 'dna', tagline: 'Genomes, computed' },
  'Systems Science': { icon: 'network', tagline: 'Loops everywhere' },
  'Brain-Inspired Computing': { icon: 'cpu', tagline: 'Brains in silicon' },
  'Synthetic Biology': { icon: 'component', tagline: 'Cells, programmed' },
  'Computational Science': { icon: 'terminal', tagline: 'Models of the future' },
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function firstSentence(text: string): string {
  const m = text.match(/^([\s\S]*?[.!?])(\s|$)/)
  return m ? m[1] : text
}

function excerpt(text: string, max = 180): string {
  const t = text.trim().replace(/\s+/g, ' ')
  return t.length <= max ? t : t.slice(0, max - 1).replace(/\s+\S*$/, '') + '…'
}

function domainSectionFor(domain: string): DomainSectionDef {
  return (
    DOMAIN_SECTIONS[domain] ?? {
      key: slugify(domain),
      name: domain,
      icon: 'sparkles',
      accent: '#10b981',
      tagline: domain,
    }
  )
}

/** Per-field accent: the domain accent, hue-shifted per subject index for variety. */
function fieldAccent(base: string, idx: number): string {
  const shifts = [0, 14, -14, 28, -28, 42, -42, 56, -56, 70]
  const m = base.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  if (!m) return base
  const [h, s, l] = rgbToHsl(parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16))
  const h2 = (h + shifts[idx % shifts.length] + 360) % 360
  return hslToHex(h2, Math.min(92, s + 4), Math.max(38, Math.min(62, l + (idx % 2 === 0 ? 3 : -3))))
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, Math.round(l * 100)]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h: number
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
  else if (max === g) h = ((b - r) / d + 2) / 6
  else h = ((r - g) / d + 4) / 6
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}

function hslToHex(h: number, s: number, l: number): string {
  const s2 = s / 100
  const l2 = l / 100
  const k = (n: number) => (n + h / 30) % 12
  const a = s2 * Math.min(l2, 1 - l2)
  const f = (n: number) => l2 - a * Math.max(-1, Math.min(Math.min(k(n) - 3, 9 - k(n)), 1))
  const to = (x: number) =>
    Math.round(255 * x)
      .toString(16)
      .padStart(2, '0')
  return `#${to(f(0))}${to(f(8))}${to(f(4))}`
}

/** Parse a "Label: text" step line into a labelled step. */
function parseStep(step: string, i: number): { label: string; text: string } {
  const m = step.match(/^([A-Z][A-Za-z][^:]{2,44}):\s+([\s\S]+)$/)
  if (m) return { label: m[1].trim(), text: m[2].trim() }
  return { label: `Step ${i + 1}`, text: step.trim() }
}

/* ------------------------------------------------------------------ */
/*  Dedup filter — ZERO repetition across the app                      */
/* ------------------------------------------------------------------ */

const LIVE_DOMAIN_FILES = KNOWLEDGE_DOMAIN_FILES.filter((f) => {
  if (EXCLUDED_DOMAINS[f.domain]) return false
  return f.topics.some((t) => !EXCLUDED_TOPICS[t.id])
}).map((f) => ({
  ...f,
  topics: f.topics.filter((t) => !EXCLUDED_TOPICS[t.id]),
}))

export const KNOWLEDGE_LIVE_TOPICS: KnowledgeTopic[] = LIVE_DOMAIN_FILES.flatMap((f) => f.topics)

/* ------------------------------------------------------------------ */
/*  Topic → SectionContent (the lesson conversion — unchanged)         */
/* ------------------------------------------------------------------ */

export function topicToSectionContent(topic: KnowledgeTopic): SectionContent {
  const paras: string[] = []
  const concepts: Concept[] = []
  const examples: WorkedExample[] = []
  const quiz: QuizQuestion[] = []
  const takeaways: string[] = []
  let insightCallout: { title: string; text: string } | null = null

  let conceptCursor = 0

  const coreConceptLabel = (): string | null => {
    if (conceptCursor < topic.concepts.length) {
      const label = topic.concepts[conceptCursor]
      conceptCursor += 1
      return label
    }
    return null
  }

  const pushConceptPara = (text: string) => {
    const label = coreConceptLabel()
    if (label) {
      concepts.push({ term: label, kind: 'insight', statement: text })
    } else if (concepts.length > 0) {
      // more paragraphs than listed concept phrases — fold into the last one
      const last = concepts[concepts.length - 1]
      last.detail = last.detail ? `${last.detail}\n\n${text}` : text
    } else {
      concepts.push({ term: topic.title, kind: 'insight', statement: text })
    }
  }

  for (const block of topic.blocks as KnowledgeBlock[]) {
    switch (block.kind) {
      case 'heading':
        // headings segment the topic; sections are honoured by the walkers below
        break
      case 'para': {
        if (paras.length === 0 && !insightCallout) {
          paras.push(block.text)
        } else {
          pushConceptPara(block.text)
        }
        break
      }
      case 'callout': {
        if (block.tone === 'insight' && !insightCallout && paras.length <= 1 && concepts.length === 0) {
          insightCallout = { title: block.title, text: block.text }
        } else if (block.tone === 'warn') {
          concepts.push({ term: block.title, kind: 'insight', statement: block.text })
        } else if (block.tone === 'path') {
          takeaways.push(`Where next — ${block.text}`)
        } else {
          concepts.push({ term: block.title, kind: 'insight', statement: block.text })
        }
        break
      }
      case 'formula': {
        concepts.push({
          term: block.name,
          kind: 'notation',
          statement: `$$${block.latex}$$`,
          detail: block.meaning,
        })
        break
      }
      case 'example': {
        const steps = block.steps
          .map((s, i) => parseStep(s, i))
          .filter((s) => s.text.length > 0)
        if (steps.length === 0) break
        // The house style opens with "Identify what is asked: …" — that is the problem.
        let problem = `${topic.title} — worked through step by step`
        let body = steps
        if (/^identify what is asked/i.test(steps[0].label + steps[0].text)) {
          const p = steps[0].text
          problem = p.charAt(0).toUpperCase() + p.slice(1)
          body = steps.slice(1)
        }
        let result: string | undefined
        if (body.length > 1 && /^(state the result|result)/i.test(body[body.length - 1].label)) {
          result = body[body.length - 1].text
          body = body.slice(0, -1)
        }
        examples.push({
          title: block.title && block.title !== 'Worked Example' ? block.title : `Worked example — ${topic.title}`,
          problem,
          steps: body,
          result,
        })
        break
      }
      case 'terms': {
        for (const item of block.items) {
          concepts.push({ term: item.term, kind: 'definition', statement: item.def })
        }
        break
      }
      case 'quiz': {
        for (const item of block.items) {
          const answer =
            Number.isInteger(item.answer) && item.answer >= 0 && item.answer < item.options.length
              ? item.answer
              : 0
          quiz.push({
            q: item.q,
            options: item.options,
            answer,
            explanation: item.explain,
          })
        }
        break
      }
      case 'list': {
        for (const item of block.items) takeaways.push(item)
        break
      }
    }
  }

  const intro = insightCallout
    ? `${paras[0] ?? ''}\n\n**${insightCallout.title}.** ${insightCallout.text}`
    : (paras[0] ?? '')

  const objectives = topic.concepts.map((c) => `Explain ${c.charAt(0).toLowerCase()}${c.slice(1)}`)

  const keyTakeaways =
    takeaways.length > 0
      ? takeaways
      : topic.concepts.slice(0, 5).map((c) => c.charAt(0).toUpperCase() + c.slice(1))

  const words = countTopicWords(topic)

  return {
    sectionId: `ku-${topic.id}`,
    readingTime: Math.max(2, Math.round(words / 200)),
    intro,
    objectives,
    concepts,
    examples,
    keyTakeaways,
    quiz,
  }
}

/* ------------------------------------------------------------------ */
/*  Derived Library registries — section (domain) → subject (field)    */
/*    → book → chapter (branch) → section (topic)                      */
/* ------------------------------------------------------------------ */

interface FieldSubject {
  domainKey: string
  domainName: string
  field: string
  fieldSlug: string
  subjectId: string
  accent: string
  topics: KnowledgeTopic[]
}

const FIELD_SUBJECTS: FieldSubject[] = (() => {
  const out: FieldSubject[] = []
  for (const file of LIVE_DOMAIN_FILES) {
    const def = domainSectionFor(file.domain)
    const byField = new Map<string, KnowledgeTopic[]>()
    for (const t of file.topics) {
      if (!byField.has(t.field)) byField.set(t.field, [])
      byField.get(t.field)!.push(t)
    }
    let idx = 0
    for (const [field, topics] of byField) {
      out.push({
        domainKey: def.key,
        domainName: def.name,
        field,
        fieldSlug: slugify(field),
        subjectId: `ku-${def.key}-${slugify(field)}`,
        accent: fieldAccent(def.accent, idx),
        topics,
      })
      idx += 1
    }
  }
  return out
})()

export const KNOWLEDGE_SUBJECTS: Subject[] = FIELD_SUBJECTS.map((fs) => {
  const domainDef = DOMAIN_SECTIONS[fs.domainName]
  const meta = FIELD_META[fs.field]
  const titles = fs.topics.map((t) => t.title)
  return {
    id: fs.subjectId,
    name: fs.field,
    slug: `${fs.domainKey}-${fs.fieldSlug}`,
    description: `${fs.topics.length} complete lesson${fs.topics.length !== 1 ? 's' : ''}: ${titles.join('; ')}.`,
    icon: meta?.icon ?? domainDef?.icon ?? 'sparkles',
    accent: fs.accent,
    tagline: meta?.tagline ?? domainDef?.tagline ?? fs.domainName,
    group: fs.domainName,
  }
})

export const KNOWLEDGE_BOOKS: BookMeta[] = FIELD_SUBJECTS.map((fs) => {
  const words = fs.topics.reduce((n, t) => n + countTopicWords(t), 0)
  const years = [...new Set(fs.topics.map((t) => t.addedOn.slice(0, 4)))].sort()
  const meta = FIELD_META[fs.field]
  return {
    id: fs.subjectId,
    subjectId: fs.subjectId,
    title: `${fs.field} — The Complete Track`,
    author: 'StudyVerse Curriculum Team',
    edition: 'Growing Edition',
    year: years.join(' · '),
    description: `The ${fs.field} track in the ${fs.domainName} section — ${fs.topics.length} complete, self-contained lesson${fs.topics.length !== 1 ? 's' : ''} with worked examples, key terms and self-check quizzes. New lessons are added as the section grows.`,
    pages: Math.max(1, Math.round(words / 400)),
    accent: fs.accent,
    sources: [
      `${fs.domainName} → ${fs.field}: ${fs.topics.length} lesson${fs.topics.length !== 1 ? 's' : ''} (${meta?.tagline ?? ''})`.trim(),
    ],
  }
})

interface BranchChapter {
  branch: string
  chapterId: string
  subjectId: string
  number: number
  topics: KnowledgeTopic[]
}

const BRANCH_CHAPTERS: BranchChapter[] = (() => {
  const out: BranchChapter[] = []
  for (const fs of FIELD_SUBJECTS) {
    const byBranch = new Map<string, KnowledgeTopic[]>()
    for (const t of fs.topics) {
      if (!byBranch.has(t.branch)) byBranch.set(t.branch, [])
      byBranch.get(t.branch)!.push(t)
    }
    let n = 0
    for (const [branch, topics] of byBranch) {
      n += 1
      out.push({
        branch,
        chapterId: `${fs.subjectId}-${slugify(branch)}`,
        subjectId: fs.subjectId,
        number: n,
        topics,
      })
    }
  }
  return out
})()

const SUBJECT_BY_ID = new Map(KNOWLEDGE_SUBJECTS.map((s) => [s.id, s]))

export const KNOWLEDGE_CHAPTERS: ChapterMeta[] = BRANCH_CHAPTERS.map((g) => {
  const subject = SUBJECT_BY_ID.get(g.subjectId)!
  const words = g.topics.reduce((n, t) => n + countTopicWords(t), 0)
  const titles = g.topics.map((t) => t.title).join(' · ')
  return {
    id: g.chapterId,
    bookId: g.subjectId,
    number: g.number,
    title: g.branch,
    shortTitle: g.branch,
    description: excerpt(
      `${g.branch} — ${g.topics.length} complete lesson${g.topics.length !== 1 ? 's' : ''}: ${titles}.`,
      220,
    ),
    icon: subject.icon,
    pages: `${words.toLocaleString('en-US')} words`,
    interactiveKey: '',
  }
})

export const KNOWLEDGE_SECTIONS: SectionMeta[] = BRANCH_CHAPTERS.flatMap((g) =>
  g.topics.map((t, i) => ({
    id: `ku-${t.id}`,
    chapterId: g.chapterId,
    number: Number(`${g.number}.${i + 1}`),
    title: t.title,
    description: excerpt(firstSentence(t.blocks.find((b) => b.kind === 'para')?.text ?? t.title), 200),
  })),
)

export const KNOWLEDGE_CONTENT: SectionContent[] = KNOWLEDGE_LIVE_TOPICS.map(topicToSectionContent)
