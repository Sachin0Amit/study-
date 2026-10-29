/* ------------------------------------------------------------------ */
/*  Knowledge domains — Library bridge (SUBJECT-WISE edition)          */
/*                                                                     */
/*  USER RULE (verbatim intent): "Make all the things in the Library   */
/*  subject-wise, not field-wise. If it is maths it should be a        */
/*  single book of maths — whether IIT maths, GATE maths or            */
/*  engineering maths — inside which chapters group the topics: if     */
/*  it is integration, then ALL integration content sits in that       */
/*  chapter. Do this for every subject."                               */
/*                                                                     */
/*    Subject (canonical, via ../knowledge/subject-taxonomy) →         */
/*    Book (one per subject; curated masters absorb their field) →     */
/*    Chapter (canonical topic area) → Section (topic lesson)          */
/*                                                                     */
/*  Every field of every domain maps to ONE canonical subject;         */
/*  mathematics from any source lands in the Mathematics Master        */
/*  Library, physics in the Physics Master Library, and the rest       */
/*  each get a single unified book. The bridge adapts automatically    */
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
  LessonFigure,
  DetailedDerivation,
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
  'Geology & Earth Science': { icon: 'mountain', tagline: 'The planet underfoot' },
  Meteorology: { icon: 'cloud-lightning', tagline: 'Why the sky does what it does' },
  /* Life Sciences */
  'Genetics & Heredity': { icon: 'dna', tagline: 'The code of inheritance' },
  Neuroscience: { icon: 'brain', tagline: 'Signals of the mind' },
  Botany: { icon: 'sprout', tagline: 'How plants build the world' },
  'Evolutionary Biology': { icon: 'git-branch', tagline: 'Descent with modification' },
  Immunology: { icon: 'filter', tagline: 'The body\u2019s defense layers' },
  Ecology: { icon: 'globe', tagline: 'Energy through ecosystems' },
  'Anatomy & Physiology': { icon: 'heart-pulse', tagline: 'The body, system by system' },
  'Microbiology & Disease': { icon: 'bug', tagline: 'The unseen world of germs' },
  Zoology: { icon: 'paw-print', tagline: 'The animal kingdom mapped' },
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
  'Aviation & Flight': { icon: 'plane', tagline: 'The sky, organized' },
  'Construction & the Built Environment': { icon: 'hard-hat', tagline: 'How buildings happen' },
  /* Social Sciences */
  Psychology: { icon: 'brain', tagline: 'The studied mind' },
  Sociology: { icon: 'users', tagline: 'Society as a system' },
  'Political Science': { icon: 'landmark', tagline: 'Power and cooperation' },
  'Urban Sociology': { icon: 'boxes', tagline: 'Why cities exist' },
  Anthropology: { icon: 'users', tagline: 'What makes us human' },
  'Human Geography': { icon: 'map-pin', tagline: 'Where people live, and why' },
  /* Humanities */
  Philosophy: { icon: 'lightbulb', tagline: 'The examined life' },
  'World History': { icon: 'map', tagline: 'How the world connected' },
  'Comparative Mythology': { icon: 'sparkles', tagline: 'Stories people share' },
  'Art History': { icon: 'frame', tagline: 'Five millennia of seeing' },
  'Religious Studies': { icon: 'church', tagline: 'The great traditions, compared' },
  /* Languages & World Literature */
  'Language Acquisition Science': { icon: 'book', tagline: 'How brains absorb language' },
  Spanish: { icon: 'type', tagline: 'Two verbs for to be' },
  Japanese: { icon: 'type', tagline: 'Three scripts, one language' },
  Linguistics: { icon: 'binary', tagline: 'The architecture of language' },
  'Phonetics & Phonology': { icon: 'audio-waveform', tagline: 'The sounds of speech' },
  'Literary Craft': { icon: 'pen-tool', tagline: 'How writing works' },
  French: { icon: 'languages', tagline: 'Say it like the French' },
  'Mandarin Chinese': { icon: 'languages', tagline: 'Tones, strokes and characters' },
  'World Literature': { icon: 'library', tagline: 'The books that shaped us' },
  /* Law & Governance */
  'Constitutional Law': { icon: 'scale', tagline: 'Power divided' },
  'International Law': { icon: 'globe', tagline: 'Rules between nations' },
  'Private Law': { icon: 'handshake', tagline: 'Promises enforced' },
  'Criminal Justice': { icon: 'siren', tagline: 'Proof and process' },
  'Intellectual Property & Media Law': { icon: 'receipt', tagline: 'Who owns an idea' },
  /* Business & Economics */
  Microeconomics: { icon: 'trending', tagline: 'Prices and incentives' },
  'Finance & Investment': { icon: 'calculator', tagline: 'Money across time' },
  'International Trade': { icon: 'globe', tagline: 'Why nations exchange' },
  Macroeconomics: { icon: 'chart-line', tagline: 'Whole economies' },
  'Behavioral Economics': { icon: 'brain', tagline: 'Predictably irrational' },
  Strategy: { icon: 'route', tagline: 'Choosing what not to do' },
  Accounting: { icon: 'receipt', tagline: 'The language of business' },
  Marketing: { icon: 'megaphone', tagline: 'Attention, understood' },
  Entrepreneurship: { icon: 'lightbulb', tagline: 'Ideas into ventures' },
  /* Health & Wellness */
  'Sleep Science': { icon: 'clock', tagline: 'The night shift' },
  'Exercise & Fitness': { icon: 'heart-pulse', tagline: 'Adaptation by load' },
  Nutrition: { icon: 'utensils', tagline: 'Fuel, decoded' },
  'Mental Health': { icon: 'activity', tagline: 'Stress and balance' },
  'Public Health': { icon: 'users', tagline: 'Health at scale' },
  'First Aid & Emergency Care': { icon: 'stethoscope', tagline: 'Help that arrives first' },
  /* Arts & Culture */
  Photography: { icon: 'aperture', tagline: 'Light, framed' },
  'Music Theory & Practice': { icon: 'audio-waveform', tagline: 'Why chords feel' },
  'Film & Cinema': { icon: 'clapperboard', tagline: 'The grammar of film' },
  'Creative Writing': { icon: 'pen-tool', tagline: 'Stories, engineered' },
  'Visual Design': { icon: 'palette', tagline: 'Composition that guides' },
  'Fashion & Identity': { icon: 'tag', tagline: 'Clothing as signal' },
  'Drawing & Painting': { icon: 'brush', tagline: 'Seeing, made visible' },
  'Music Production': { icon: 'disc', tagline: 'Sound, shaped and mixed' },
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
  /* --- Everyday Knowledge: new subjects (2026-10-18 expansion) --- */
  'Car & Driving': { icon: 'car', tagline: 'Own the road, not the repair bill' },
  'Home & Repair': { icon: 'wrench', tagline: 'Fix it yourself' },
  'Garden & Growing': { icon: 'sprout', tagline: 'Grow something real' },
  'Practical Skills': { icon: 'hand', tagline: 'Life, handled' },
  'Career & Communication': { icon: 'megaphone', tagline: 'Be heard, be hired' },
  /* --- Health & Wellness: new subjects --- */
  'Medicine & Pharmacology': { icon: 'pill', tagline: 'How medicines work' },
  'Disease & Treatment': { icon: 'stethoscope', tagline: 'What illness really is' },
  'Health & Longevity': { icon: 'hourglass', tagline: 'More good years' },
  'Sexual & Reproductive Health': { icon: 'heart-pulse', tagline: 'Bodies, plainly explained' },
  /* --- Arts & Culture: new subjects --- */
  'Theater & Performance': { icon: 'drama', tagline: 'The live art' },
  Dance: { icon: 'music', tagline: 'Bodies in time' },
  'Animation & Sequential Art': { icon: 'film', tagline: 'Drawings that move' },
  Architecture: { icon: 'landmark', tagline: 'Read the built world' },
  'Sculpture & Craft': { icon: 'shapes', tagline: 'Art you can touch' },
  /* --- Languages: new subjects --- */
  German: { icon: 'languages', tagline: 'The logic of German' },
  Hindi: { icon: 'languages', tagline: 'Devanagari, decoded' },
  Korean: { icon: 'languages', tagline: 'Hangul, the smart script' },
  Russian: { icon: 'languages', tagline: 'Cases and Cyrillic' },
  Sociolinguistics: { icon: 'users', tagline: 'Language as social glue' },
  'Historical Linguistics': { icon: 'git-branch', tagline: 'How tongues drift' },
  /* --- Social Sciences: new subjects --- */
  'Research Methods': { icon: 'flask-conical', tagline: 'How we know' },
  Education: { icon: 'graduation-cap', tagline: 'How teaching works' },
  'Media & Communication': { icon: 'radio', tagline: 'Who frames your world' },
  'Public Policy': { icon: 'scroll-text', tagline: 'The policy machine' },
  /* --- Physical Sciences: new subjects --- */
  'Physics of Complexity': { icon: 'network', tagline: 'Simple rules, wild results' },
  'Physics of Everyday Phenomena': { icon: 'waves', tagline: 'The physics of the ordinary' },
  /* --- Life Sciences: new subjects --- */
  Biochemistry: { icon: 'atom', tagline: 'The cell\u2019s energy economy' },
  'Developmental Biology': { icon: 'egg', tagline: 'How bodies build themselves' },
  'Marine Biology': { icon: 'fish', tagline: 'Life in the blue' },
  'Animal Behavior': { icon: 'paw-print', tagline: 'Minds in the wild' },
  /* --- Technology & Applied Science: new subjects --- */
  'Water Technology': { icon: 'droplets', tagline: 'Clean water, engineered' },
  'Everyday Machines': { icon: 'cog', tagline: 'The machines around you' },
  'Nuclear Technology': { icon: 'radiation', tagline: 'The atom, harnessed' },
  Photonics: { icon: 'zap', tagline: 'Light, engineered' },
  'Materials Science': { icon: 'gem', tagline: 'Why stuff is strong' },
  'Quantum Information': { icon: 'atom', tagline: 'Qubits and beyond' },
  'Energy Systems': { icon: 'battery-charging', tagline: 'Storing and moving power' },
  /* --- Engineering: new subjects --- */
  'Chemical Engineering': { icon: 'flask-round', tagline: 'Reactions at scale' },
  'Railway Engineering': { icon: 'train-front', tagline: 'The steel network' },
  'Naval Architecture': { icon: 'ship', tagline: 'Why ships stay up' },
  'Electrical & Electronics Engineering': { icon: 'zap', tagline: 'Power and signals' },
  'Mechanical Engineering': { icon: 'cog', tagline: 'Machines, designed' },
  'Manufacturing Engineering': { icon: 'factory', tagline: 'Made at scale' },
  'Civil & Structural Engineering': { icon: 'hard-hat', tagline: 'Standing on math' },
  /* --- Environment: new subjects --- */
  'Waste & Circularity': { icon: 'recycle', tagline: 'After the bin' },
  'Pollution & Environmental Health': { icon: 'wind', tagline: 'The air we breathe' },
  'Urban Planning': { icon: 'map', tagline: 'Cities, by design' },
  /* --- Emerging: new subjects --- */
  Nanotechnology: { icon: 'atom', tagline: 'Engineering at atomic scale' },
  'Extended Reality': { icon: 'glasses', tagline: 'Worlds, rendered' },
  /* --- Science fundamentals referenced by field files --- */
  Chemistry: { icon: 'flask-conical', tagline: 'Molecules and change' },
  Physics: { icon: 'atom', tagline: 'The rules of reality' },
  /* --- Law & Governance: new subjects --- */
  'Tax & Administrative Law': { icon: 'receipt', tagline: 'The tax machine' },
  'Employment Law': { icon: 'briefcase', tagline: 'Work, under law' },
  /* --- Business: new subjects --- */
  'Operations & Supply Chain': { icon: 'boxes', tagline: 'Things, moving' },
  'Management & Leadership': { icon: 'users', tagline: 'Getting work done' },
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
  const figures: LessonFigure[] = []
  const derivations: DetailedDerivation[] = []
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
      case 'figure': {
        figures.push({
          caption: block.caption,
          svg: block.svg,
          sketchImage: block.sketchImage,
          sketchCaption: block.sketchCaption,
          afterConcept: block.afterConcept,
        })
        break
      }
      case 'derivation': {
        derivations.push({
          title: block.title,
          statement: block.statement,
          prerequisites: block.prerequisites,
          steps: block.steps,
          result: block.result,
        })
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
    figures: figures.length > 0 ? figures : undefined,
    derivations: derivations.length > 0 ? derivations : undefined,
    examples,
    keyTakeaways,
    quiz,
  }
}


/* ------------------------------------------------------------------ */
/*  Derived Library registries — SUBJECT-WISE                          */
/*                                                                     */
/*  USER RULE (verbatim intent): one book per subject. If it is        */
/*  maths, it is a single mathematics book — whether the lesson came   */
/*  from university coursework, an entrance syllabus or applied        */
/*  engineering — and inside that book, chapters group the topics:     */
/*  all integration content lives in the calculus chapter, and so on   */
/*  for every subject.                                                 */
/*                                                                     */
/*  Every live topic is assigned to ONE canonical subject via the      */
/*  taxonomy (field ownership, with branch ownership as fallback),     */
/*  then grouped into canonical chapters (field- or branch-matched,    */
/*  with a branch-name fallback). Subjects with `mergeInto` append     */
/*  their chapters to an existing curated master book — the            */
/*  Mathematics Master Library grows the new chapters directly — so    */
/*  the Library shows exactly ONE book per subject.                    */
/*                                                                     */
/*  Section ids stay `ku-<topicId>` for every topic, so progress       */
/*  tracking, the exam-coverage matcher and content.json are           */
/*  unaffected by this presentation-layer regrouping.                  */
/* ------------------------------------------------------------------ */

import { SUBJECT_TAXONOMY, type TaxonomySubject } from '../knowledge/subject-taxonomy'
import { CURATED_BOOK_CHAPTER_TOPS } from './curated-book-tops'

const TAXONOMY_BY_FIELD = new Map<string, TaxonomySubject>()
const TAXONOMY_BY_BRANCH = new Map<string, TaxonomySubject>()
for (const tax of SUBJECT_TAXONOMY) {
  for (const f of tax.ownFields ?? []) if (!TAXONOMY_BY_FIELD.has(f)) TAXONOMY_BY_FIELD.set(f, tax)
  for (const ch of tax.chapters) {
    if (!ch.branches) continue
    for (const b of ch.branches) if (!TAXONOMY_BY_BRANCH.has(b)) TAXONOMY_BY_BRANCH.set(b, tax)
  }
}

function taxonomyFor(topic: KnowledgeTopic): TaxonomySubject | null {
  return TAXONOMY_BY_FIELD.get(topic.field) ?? TAXONOMY_BY_BRANCH.get(topic.branch) ?? null
}

function chapterNameFor(tax: TaxonomySubject, topic: KnowledgeTopic): string {
  const ch = tax.chapters.find(
    (c) => (c.fields ? c.fields.includes(topic.field) : false) || (c.branches ? c.branches.includes(topic.branch) : false),
  )
  return ch ? ch.name : topic.branch
}

interface SubjectBucket {
  tax: TaxonomySubject
  /** canonical chapter name → topics (insertion order preserved) */
  chapters: Map<string, KnowledgeTopic[]>
}

const SUBJECT_BUCKETS: SubjectBucket[] = (() => {
  const byKey = new Map<string, SubjectBucket>()
  for (const topic of KNOWLEDGE_LIVE_TOPICS) {
    const tax = taxonomyFor(topic)
    if (!tax) continue // legacy fallback below owns these
    let bucket = byKey.get(tax.key)
    if (!bucket) {
      bucket = { tax, chapters: new Map() }
      byKey.set(tax.key, bucket)
    }
    const chName = chapterNameFor(tax, topic)
    if (!bucket.chapters.has(chName)) bucket.chapters.set(chName, [])
    bucket.chapters.get(chName)!.push(topic)
  }
  return SUBJECT_TAXONOMY.filter((t) => byKey.has(t.key)).map((t) => byKey.get(t.key)!)
})()

interface UnifiedChapter {
  tax: TaxonomySubject
  name: string
  bookId: string
  chapterId: string
  number: number
  topics: KnowledgeTopic[]
}

const UNIFIED_CHAPTERS: UnifiedChapter[] = (() => {
  const out: UnifiedChapter[] = []
  for (const bucket of SUBJECT_BUCKETS) {
    const merged = bucket.tax.mergeInto
    const bookId = merged ? merged.bookId : `ku-${bucket.tax.key}`
    let n = merged ? CURATED_BOOK_CHAPTER_TOPS[bookId] ?? 0 : 0
    /* USER RULE 5 — sequence-wise chapters: the taxonomy's declared
       chapter order IS the pedagogical sequence (foundations before
       mechanics before applications/culture). Declared chapters render
       first in declared order; any chapter the declaration missed keeps
       its first-occurrence order after them. Chapter ids are derived
       from the chapter NAME, so reordering never breaks lesson links —
       only the chapter/section numbers re-sequence. */
    const declared = bucket.tax.chapters
      .map((c) => c.name)
      .filter((name) => bucket.chapters.has(name))
    const rest = [...bucket.chapters.keys()].filter((name) => !declared.includes(name))
    for (const name of [...declared, ...rest]) {
      const topics = bucket.chapters.get(name)!
      n += 1
      out.push({
        tax: bucket.tax,
        name,
        bookId,
        chapterId: `ku-${merged ? `x-${bookId}` : bucket.tax.key}-${slugify(name)}`,
        number: n,
        topics,
      })
    }
  }
  return out
})()

/* ---- Legacy fallback — fields not (yet) in the taxonomy keep the   */
/* ---- old domain/field presentation so nothing is ever lost.        */

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
  const seen = new Set<string>()
  for (const file of LIVE_DOMAIN_FILES) {
    const def = domainSectionFor(file.domain)
    const byField = new Map<string, KnowledgeTopic[]>()
    for (const t of file.topics) {
      if (taxonomyFor(t)) continue
      if (!byField.has(t.field)) byField.set(t.field, [])
      byField.get(t.field)!.push(t)
    }
    let idx = 0
    for (const [field, topics] of byField) {
      if (seen.has(field)) continue
      seen.add(field)
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
  if (out.length > 0) {
    console.warn(
      `[taxonomy] ${out.length} field(s) not covered by the subject taxonomy — rendered via legacy fallback:`,
      out.map((f) => `${f.domainName} > ${f.field}`).join(' | '),
    )
  }
  return out
})()

interface BranchChapter {
  branch: string
  chapterId: string
  subjectId: string
  number: number
  topics: KnowledgeTopic[]
}

const LEGACY_CHAPTERS: BranchChapter[] = (() => {
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

/* ---- Subjects: one card per canonical subject (legacy fallback last) */

export const KNOWLEDGE_SUBJECTS: Subject[] = [
  ...SUBJECT_BUCKETS.filter((b) => !b.tax.mergeInto).map((bucket) => {
    const tax = bucket.tax
    const topicCount = bucket.chapters.size > 0 ? [...bucket.chapters.values()].reduce((n, ts) => n + ts.length, 0) : 0
    /* USER RULE 5 — the subject card lists chapters in the SAME declared
       pedagogical order the book page renders (X51 fix): declared
       chapters first in declaration order, undeclared keep first-
       occurrence order after them. */
    const declaredNames = tax.chapters.map((c) => c.name).filter((name) => bucket.chapters.has(name))
    const restNames = [...bucket.chapters.keys()].filter((name) => !declaredNames.includes(name))
    const chapterTitles = [...declaredNames, ...restNames].join(' · ')
    return {
      id: `ku-${tax.key}`,
      name: tax.name,
      slug: tax.key,
      description: `${tax.blurb} ${bucket.chapters.size} chapter${bucket.chapters.size !== 1 ? 's' : ''} · ${topicCount} complete lesson${topicCount !== 1 ? 's' : ''}: ${chapterTitles}.`,
      icon: tax.icon,
      accent: tax.accent,
      tagline: tax.tagline,
      group: tax.group,
    }
  }),
  ...FIELD_SUBJECTS.map((fs) => {
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
  }),
]

/* ---- Books: one unified volume per own subject (nothing emitted for
        merged subjects — their chapters live in the curated master) */

export const KNOWLEDGE_BOOKS: BookMeta[] = [
  ...SUBJECT_BUCKETS.filter((b) => !b.tax.mergeInto).map((bucket) => {
    const tax = bucket.tax
    const topics = [...bucket.chapters.values()].flat()
    const words = topics.reduce((n, t) => n + countTopicWords(t), 0)
    const years = [...new Set(topics.map((t) => t.addedOn.slice(0, 4)))].sort()
    /* USER RULE 5 — the card blurb lists chapters in the SAME declared
       pedagogical order the book page renders (X51 fix): declared
       chapters first in declaration order, undeclared keep first-
       occurrence order after them. */
    const declaredNames = tax.chapters.map((c) => c.name).filter((name) => bucket.chapters.has(name))
    const restNames = [...bucket.chapters.keys()].filter((name) => !declaredNames.includes(name))
    const chapterTitles = [...declaredNames, ...restNames].join(', ')
    const sourceAreas = [...new Set(topics.map((t) => t.field))].join(', ')
    return {
      id: `ku-${tax.key}`,
      subjectId: `ku-${tax.key}`,
      title: `${tax.name} — The Complete Book`,
      author: 'StudyVerse Curriculum Team',
      edition: 'Unified Edition',
      year: years.join(' · '),
      description: `Every ${tax.name} lesson in the Library, unified into one volume — ${chapterTitles}. ${topics.length} complete, self-contained lessons with worked examples, key terms and self-check quizzes, merging university coursework, entrance-exam scope and applied material.`,
      pages: Math.max(1, Math.round(words / 400)),
      accent: tax.accent,
      sources: [
        `One book per subject — ${[...new Set(topics.map((t) => t.field))].length} subject areas merged: ${sourceAreas}`,
      ],
    }
  }),
  ...FIELD_SUBJECTS.map((fs) => {
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
      description: `The ${fs.field} track in the ${fs.domainName} section — ${fs.topics.length} complete, self-contained lesson${fs.topics.length !== 1 ? 's' : ''} with worked examples, key terms and self-check quizzes.`,
      pages: Math.max(1, Math.round(words / 400)),
      accent: fs.accent,
      sources: [
        `${fs.domainName} → ${fs.field}: ${fs.topics.length} lesson${fs.topics.length !== 1 ? 's' : ''} (${meta?.tagline ?? ''})`.trim(),
      ],
    }
  }),
]

/* ---- Chapters: canonical chapters inside each subject's book        */

export const KNOWLEDGE_CHAPTERS: ChapterMeta[] = [
  ...UNIFIED_CHAPTERS.map((g) => {
    const words = g.topics.reduce((n, t) => n + countTopicWords(t), 0)
    const titles = g.topics.map((t) => t.title).join(' · ')
    return {
      id: g.chapterId,
      bookId: g.bookId,
      number: g.number,
      title: g.name,
      shortTitle: g.name,
      description: excerpt(
        `${g.name} — ${g.topics.length} complete lesson${g.topics.length !== 1 ? 's' : ''}: ${titles}.`,
        220,
      ),
      icon: g.tax.icon,
      pages: `${words.toLocaleString('en-US')} words`,
      interactiveKey: '',
    }
  }),
  ...LEGACY_CHAPTERS.map((g) => {
    const subject = KNOWLEDGE_SUBJECTS.find((s) => s.id === g.subjectId)
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
      icon: subject?.icon ?? 'sparkles',
      pages: `${words.toLocaleString('en-US')} words`,
      interactiveKey: '',
    }
  }),
]

/* ---- Sections: the lessons themselves (ids unchanged: ku-<topicId>) */

export const KNOWLEDGE_SECTIONS: SectionMeta[] = [
  ...UNIFIED_CHAPTERS.flatMap((g) =>
    g.topics.map((t, i) => ({
      id: `ku-${t.id}`,
      chapterId: g.chapterId,
      number: Number(`${g.number}.${i + 1}`),
      title: t.title,
      description: excerpt(firstSentence(t.blocks.find((b) => b.kind === 'para')?.text ?? t.title), 200),
    })),
  ),
  ...LEGACY_CHAPTERS.flatMap((g) =>
    g.topics.map((t, i) => ({
      id: `ku-${t.id}`,
      chapterId: g.chapterId,
      number: Number(`${g.number}.${i + 1}`),
      title: t.title,
      description: excerpt(firstSentence(t.blocks.find((b) => b.kind === 'para')?.text ?? t.title), 200),
    })),
  ),
]

export const KNOWLEDGE_CONTENT: SectionContent[] = KNOWLEDGE_LIVE_TOPICS.map(topicToSectionContent)
