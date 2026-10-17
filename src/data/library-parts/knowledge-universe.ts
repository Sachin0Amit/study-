/* ------------------------------------------------------------------ */
/*  The Knowledge Universe — Library bridge                            */
/*                                                                     */
/*  Every knowledge-domain topic becomes a first-class Library citizen */
/*  with the exact same data path as every other subject:              */
/*                                                                     */
/*    Subject (domain) → Book (domain collection) →                    */
/*    Chapter (field) → Section (topic) → SectionContent (lesson)      */
/*                                                                     */
/*  Nothing about the presentation is special: the topics render       */
/*  through the same library-view, book-view, chapter-view and         */
/*  lesson-view used by Mathematics, Physics and every engineering     */
/*  track. Expansion passes only append topics to                     */
/*  ../knowledge/fields/*.ts — this bridge adapts automatically.       */
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
  KNOWLEDGE_TOPICS,
  countTopicWords,
  type KnowledgeTopic,
  type KnowledgeBlock,
} from '../knowledge'

/* ------------------------------------------------------------------ */
/*  Subject metadata — one per knowledge domain                        */
/* ------------------------------------------------------------------ */

interface KnowledgeSubjectDef {
  key: string
  name: string
  icon: string
  accent: string
  tagline: string
}

export const KNOWLEDGE_GROUP = 'Knowledge Universe'

const SUBJECT_DEFS: Record<string, KnowledgeSubjectDef> = {
  'foundation-learning': {
    key: 'foundation-learning',
    name: 'Foundation Learning',
    icon: 'graduation-cap',
    accent: '#f59e0b',
    tagline: 'Learn how to learn',
  },
  'physical-sciences': {
    key: 'physical-sciences',
    name: 'Physical Sciences',
    icon: 'telescope',
    accent: '#f43f5e',
    tagline: 'The physical world, explained',
  },
  'life-sciences': {
    key: 'life-sciences',
    name: 'Life Sciences',
    icon: 'dna',
    accent: '#34d399',
    tagline: 'How living systems work',
  },
  mathematics: {
    key: 'mathematics',
    name: 'Mathematical Sciences',
    icon: 'sigma',
    accent: '#84cc16',
    tagline: 'The great ideas of mathematics',
  },
  environment: {
    key: 'environment',
    name: 'Environment & Sustainability',
    icon: 'leaf',
    accent: '#22c55e',
    tagline: 'Earth systems and stewardship',
  },
  'computing-ai': {
    key: 'computing-ai',
    name: 'Computing & AI',
    icon: 'bot',
    accent: '#9333ea',
    tagline: 'Machines that compute and learn',
  },
  engineering: {
    key: 'engineering',
    name: 'Engineering Science',
    icon: 'cog',
    accent: '#b45309',
    tagline: 'How engineered things work',
  },
  'technology-applied': {
    key: 'technology-applied',
    name: 'Technology & Applied Science',
    icon: 'circuit-board',
    accent: '#0d9488',
    tagline: 'The applied engines of modern life',
  },
  'social-sciences': {
    key: 'social-sciences',
    name: 'Social Sciences',
    icon: 'users',
    accent: '#d946ef',
    tagline: 'Why people do what they do',
  },
  humanities: {
    key: 'humanities',
    name: 'Humanities',
    icon: 'landmark',
    accent: '#d97706',
    tagline: 'The record of human meaning',
  },
  'languages-literature': {
    key: 'languages-literature',
    name: 'Languages & World Literature',
    icon: 'type',
    accent: '#f472b6',
    tagline: 'How languages live and grow',
  },
  'law-governance': {
    key: 'law-governance',
    name: 'Law & Governance',
    icon: 'scale',
    accent: '#a16207',
    tagline: 'Rules, states and constitutions',
  },
  'business-economics': {
    key: 'business-economics',
    name: 'Business & Economics',
    icon: 'trending',
    accent: '#65a30d',
    tagline: 'Markets, money and trade',
  },
  'health-wellness': {
    key: 'health-wellness',
    name: 'Health & Wellness',
    icon: 'heart-pulse',
    accent: '#e11d48',
    tagline: 'Body and mind, kept well',
  },
  'arts-culture': {
    key: 'arts-culture',
    name: 'Arts & Culture',
    icon: 'palette',
    accent: '#ec4899',
    tagline: 'How art works on us',
  },
  'everyday-practical': {
    key: 'everyday-practical',
    name: 'Everyday Knowledge',
    icon: 'home',
    accent: '#f97316',
    tagline: 'The science of daily life',
  },
  'emerging-interdisciplinary': {
    key: 'emerging-interdisciplinary',
    name: 'Emerging & Interdisciplinary',
    icon: 'sparkles',
    accent: '#06b6d4',
    tagline: 'Where fields collide',
  },
}

/** Chapter icons per field, with graceful fallback to the subject icon. */
const FIELD_ICONS: Record<string, string> = {
  'Study Skills & Memory': 'lightbulb',
  'Reading & Literacy': 'book',
  'Everyday Math & Numeracy': 'calculator',
  Physics: 'atom',
  Chemistry: 'flask',
  'Genetics & Heredity': 'dna',
  Neuroscience: 'brain',
  Botany: 'sprout',
  Calculus: 'chart-line',
  'Linear Algebra': 'layout-grid',
  'Probability & Statistics': 'dices',
  'Climate Science': 'wind',
  'Agriculture & Food Systems': 'sprout',
  'Environmental Policy': 'scale',
  'Data Structures & Algorithms': 'git-branch',
  'Machine Learning': 'bot',
  Cybersecurity: 'lock',
  'Electrical & Electronics Engineering': 'zap',
  'Materials Science': 'layers',
  'Mechanical Engineering': 'cog',
  'Energy Systems': 'battery-charging',
  Nanotechnology: 'shapes',
  Telecommunications: 'radio',
  Psychology: 'brain',
  Sociology: 'users',
  'Political Science': 'landmark',
  Philosophy: 'lightbulb',
  'World History': 'map',
  'Language Acquisition Science': 'book',
  Spanish: 'type',
  Japanese: 'type',
  'Constitutional Law': 'scale',
  'International Law': 'globe',
  Microeconomics: 'trending',
  'Finance & Investment': 'calculator',
  'International Trade': 'globe',
  'Sleep Science': 'clock',
  'Exercise & Fitness': 'heart-pulse',
  'Public Health': 'users',
  Photography: 'aperture',
  'Music Theory & Practice': 'audio-waveform',
  'Film & Cinema': 'clapperboard',
  'Cooking & Food Science': 'utensils',
  'Personal Finance': 'calculator',
  'Games & Strategy': 'dices',
  Bioinformatics: 'dna',
  'Quantum Information': 'atom',
  'Systems Science': 'network',
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

function domainKeyFor(domain: string): string {
  const hit = Object.values(SUBJECT_DEFS).find((d) => d.name === domain)
  if (hit) return hit.key
  return slugify(domain)
}

/** Parse a "Label: text" step line into a labelled step. */
function parseStep(step: string, i: number): { label: string; text: string } {
  const m = step.match(/^([A-Z][A-Za-z][^:]{2,44}):\s+([\s\S]+)$/)
  if (m) return { label: m[1].trim(), text: m[2].trim() }
  return { label: `Step ${i + 1}`, text: step.trim() }
}

/* ------------------------------------------------------------------ */
/*  Topic → SectionContent (the lesson conversion)                     */
/* ------------------------------------------------------------------ */

export function topicToSectionContent(topic: KnowledgeTopic): SectionContent {
  const paras: string[] = []
  const concepts: Concept[] = []
  const examples: WorkedExample[] = []
  const quiz: QuizQuestion[] = []
  const takeaways: string[] = []
  let insightCallout: { title: string; text: string } | null = null

  let sawExample = false
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
        sawExample = true
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
/*  Derived Library registries                                         */
/* ------------------------------------------------------------------ */

export const KNOWLEDGE_SUBJECTS: Subject[] = KNOWLEDGE_DOMAIN_FILES.map((file) => {
  const key = domainKeyFor(file.domain)
  const def =
    SUBJECT_DEFS[key] ??
    ({ key, name: file.domain, icon: 'sparkles', accent: '#10b981', tagline: file.domain } as KnowledgeSubjectDef)
  const fields = [...new Set(file.topics.map((t) => t.field))]
  return {
    id: `ku-${def.key}`,
    name: def.name,
    slug: `knowledge-${def.key}`,
    description: `${file.blurb} ${fields.length} field${fields.length !== 1 ? 's' : ''}: ${fields.join(', ')}.`,
    icon: def.icon,
    accent: def.accent,
    tagline: def.tagline,
    group: KNOWLEDGE_GROUP,
  }
})

export const KNOWLEDGE_BOOKS: BookMeta[] = KNOWLEDGE_DOMAIN_FILES.map((file) => {
  const key = domainKeyFor(file.domain)
  const def =
    SUBJECT_DEFS[key] ??
    ({ key, name: file.domain, icon: 'sparkles', accent: '#10b981', tagline: file.domain } as KnowledgeSubjectDef)
  const words = file.topics.reduce((n, t) => n + countTopicWords(t), 0)
  const fields = [...new Set(file.topics.map((t) => t.field))]
  const years = [...new Set(file.topics.map((t) => t.addedOn.slice(0, 4)))].sort()
  return {
    id: `ku-${def.key}`,
    subjectId: `ku-${def.key}`,
    title: `${def.name} — The Complete Track`,
    author: 'StudyVerse Knowledge Universe',
    edition: 'Growing Edition',
    year: years.join(' · '),
    description: `${file.blurb} Every lesson is a complete, self-contained read — concepts, worked examples, key terms and a self-check quiz — and new lessons are added continuously across ${fields.length} field${fields.length !== 1 ? 's' : ''}.`,
    pages: Math.max(1, Math.round(words / 400)),
    accent: def.accent,
    sources: [
      `Knowledge Universe — ${def.name}: ${file.topics.length} complete lesson${file.topics.length !== 1 ? 's' : ''} across ${fields.length} field${fields.length !== 1 ? 's' : ''}`,
    ],
  }
})

interface FieldGroup {
  field: string
  chapterId: string
  bookId: string
  number: number
  topics: KnowledgeTopic[]
}

const FIELD_GROUPS: FieldGroup[] = (() => {
  const groups: FieldGroup[] = []
  for (const file of KNOWLEDGE_DOMAIN_FILES) {
    const key = domainKeyFor(file.domain)
    const bookId = `ku-${key}`
    const def = SUBJECT_DEFS[key]
    let n = 0
    const byField = new Map<string, KnowledgeTopic[]>()
    for (const t of file.topics) {
      if (!byField.has(t.field)) byField.set(t.field, [])
      byField.get(t.field)!.push(t)
    }
    for (const [field, topics] of byField) {
      n += 1
      groups.push({
        field,
        chapterId: `ku-${key}-${slugify(field)}`,
        bookId,
        number: n,
        topics,
      })
    }
    // keep unused def reference meaningful for tooling
    void def
  }
  return groups
})()

export const KNOWLEDGE_CHAPTERS: ChapterMeta[] = FIELD_GROUPS.map((g) => {
  const subject = KNOWLEDGE_SUBJECTS.find((s) => s.id === g.bookId)!
  const words = g.topics.reduce((n, t) => n + countTopicWords(t), 0)
  const titles = g.topics.map((t) => t.title).join(' · ')
  return {
    id: g.chapterId,
    bookId: g.bookId,
    number: g.number,
    title: g.field,
    shortTitle: g.field,
    description: excerpt(
      `${g.field} — ${g.topics.length} complete lesson${g.topics.length !== 1 ? 's' : ''}: ${titles}.`,
      220,
    ),
    icon: FIELD_ICONS[g.field] ?? subject.icon,
    pages: `${words.toLocaleString('en-US')} words`,
    interactiveKey: '',
  }
})

export const KNOWLEDGE_SECTIONS: SectionMeta[] = FIELD_GROUPS.flatMap((g) =>
  g.topics.map((t, i) => ({
    id: `ku-${t.id}`,
    chapterId: g.chapterId,
    number: Number(`${g.number}.${i + 1}`),
    title: t.title,
    description: excerpt(firstSentence(t.blocks.find((b) => b.kind === 'para')?.text ?? t.title), 200),
  })),
)

export const KNOWLEDGE_CONTENT: SectionContent[] = KNOWLEDGE_TOPICS.map(topicToSectionContent)
