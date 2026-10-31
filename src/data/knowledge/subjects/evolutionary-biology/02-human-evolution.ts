/**
 * Knowledge Universe — Evolutionary Biology — Chapter 02: Human Evolution
 * 1 lesson · ~990 words
 * field: Evolutionary Biology
 * legacy sources: life-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Human Evolution]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 bio-human-evolution — From Lucy to Us: The Story of Human Evolution
 */
import type { KnowledgeTopic } from '../../types'

export const evolutionaryBiologyCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-human-evolution',
    title: 'From Lucy to Us: The Story of Human Evolution',
    domain: 'Life Sciences',
    field: 'Evolutionary Biology',
    branch: 'Human Evolution',
    tier: 'intermediate',
    concepts: [
      'Hominins: the walk comes first',
      'Lucy and the australopithecines',
      'The Homo lineage: brain meets tools',
      'Sapiens, Neanderthals, and interbreeding',
      'Out of Africa',
      'Reading the evidence: fossils, stone, DNA',
    ],
    words: 990,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Somewhere between six and seven million years ago, an African ape population split in two: one branch leads to today\'s chimpanzees and bonobos, the other to every human being who has ever lived. The story of that second branch is written in fragmentary skeletons, chipped stones, and — only since 2010 — in DNA recovered from the bones themselves. This topic traces the main chapters, from Lucy\'s small-brained bipedality to the global species reading this sentence.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Human evolution was never a ladder. For most of the last three million years, several hominin species shared the planet at once; Homo sapiens is the last branch standing, not the summit of a staircase. Every new fossil nudges the details without shaking the outline — and ancient DNA now settles disputes fossils never could.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The first defining trait was underfoot. Bipedalism — habitual walking on two legs — predates big brains, tools, and language by millions of years, visible in four-million-year-old Ardipithecus bones and in the Laetoli footprints, an upright pair\'s trail preserved in volcanic ash some 3.6 million years ago. Freed hands, energy-cheap walking, and a view over the grass came before everything else.',
      },
      {
        kind: 'para',
        text: 'The most famous fossil, Lucy — an Australopithecus afarensis from Ethiopia, 3.2 million years old — stood barely a meter tall with a brain near 400 cubic centimeters: a chimpanzee-sized brain riding on a human-style pelvis, spine, and knees. Australopithecines kept long arms suited to climbing, ate everything from fruit to tubers, and their kind persisted across Africa for well over a million years.',
      },
      {
        kind: 'para',
        text: 'By 2.4 million years ago, larger brains and the first sharp stone tools mark Homo habilis. Homo erectus, appearing near 1.9 million years ago, had a tall striding body, a brain approaching 1,000 cubic centimeters, and the range to walk out of Africa into Asia — the first globetrotter. Through the ice ages, brain volume climbed toward the modern average of about 1,350 cubic centimeters as toolkits diversified, fire spread, and hunting grew serious.',
      },
      {
        kind: 'para',
        text: 'Homo sapiens enters the African fossil record near 300,000 years ago at Jebel Irhoud, Morocco. Meanwhile, Europe and Asia belonged to the Neanderthals — heavy-browed, cold-adapted hunters — and to the Denisovans, known almost entirely from DNA. The groups met: most people with non-African ancestry carry 1-4 percent Neanderthal DNA, and a Denisovan version of the altitude gene EPAS1 helps Tibetans live above 4,000 meters.',
      },
      {
        kind: 'para',
        text: 'Genetics, fossils, and archaeology agree on the outline: a main dispersal out of Africa around 60,000-70,000 years ago reached Australia by about 50,000 years ago and the Americas by around 15,000. Earlier excursions left fossils and stone tools but no descendants in today\'s gene pool. Every living population descends from African ancestors — legible in the diversity of African genomes, deeper than anywhere else on Earth.',
      },
      {
        kind: 'para',
        text: 'The evidence stacks in independent layers. Fossils give anatomy and radiometric dates; tools, hearths, and art give behavior; ancient DNA, first recovered from Neanderthal bones in 2010, gives migrations and interbreeding directly. When a discovery moves a date or adds a branch, the genetic clock and the stones move with it — the sign of a story that keeps checking out.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how DNA itself dates the split between the human and chimpanzee lineages.',
          'Recall the governing idea: the molecular clock — neutral mutations accumulate at a roughly steady rate per lineage.',
          'Apply: the two genomes differ at about 1.2 percent of DNA positions; at roughly 0.1 percent per million years per lineage, the two lines together close that gap in about six million years.',
          'State the result: a split near six million years ago, matching the oldest putative hominin fossils — independent clocks vouching for one another.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Ancient DNA extracted from bones now tests migration and interbreeding claims directly.',
          'Rift Valley fieldwork keeps adding branches — Homo naledi was announced only in 2015.',
          'EPAS1, an inherited Denisovan gene, helps Tibetans thrive at extreme altitude.',
          'Neanderthal-derived immune and skin genes still influence disease risk and drug response.',
          'Argon and uranium dating anchor each fossil\'s age within a few percent.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The march-of-progress cartoon is wrong twice over: evolution has no direction or goal, and humans did not descend from any living ape — chimpanzees are cousins, not ancestors, both lines having evolved since the split. "Missing link" is a relic phrase; the bush is richly populated. And human genetic variation does not sort into deep continental lineages: most of humanity\'s diversity lies within Africa, and the rest of the world carries only a subset of it.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Hominin', def: 'Any species on the human side of the split from the chimpanzee lineage.' },
          { term: 'Bipedalism', def: 'Habitual upright walking on two legs — the earliest hominin signature.' },
          { term: 'Australopithecus', def: 'The genus of Lucy: small-brained, upright-walking African hominins.' },
          { term: 'Homo erectus', def: 'The tall, wide-ranging hominin of the last two million years.' },
          { term: 'Neanderthal', def: 'The cold-adapted Eurasian hominin that interbred with sapiens.' },
          { term: 'Molecular clock', def: 'Dating divergence by counting neutral mutations that accumulate at steady rates.' },
          { term: 'Ancient DNA', def: 'Genetic material recovered from fossils, readable at scale since 2010.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The earliest defining trait of the hominin lineage was:',
            options: ['bipedal walking', 'a large brain', 'control of fire', 'spoken language'],
            answer: 0,
            explain: 'Upright walking shows up millions of years before brains expanded — the feet came first.',
          },
          {
            q: 'Lucy (Australopithecus afarensis) is famous for showing:',
            options: ['the first stone tools', 'cave paintings', 'a chimp-sized brain on a bipedal body', 'a modern-sized brain'],
            answer: 2,
            explain: 'About 400 cubic centimeters of brain on a human-style pelvis and knees — walking long before thinking much.',
          },
          {
            q: 'Most people with non-African ancestry carry:',
            options: ['no archaic human DNA', 'about 1-4 percent Neanderthal DNA', 'exclusively Denisovan DNA', 'Neanderthal mitochondria'],
            answer: 1,
            explain: 'Interbreeding with Neanderthals left a measurable signature in non-African genomes.',
          },
          {
            q: 'The main Homo sapiens dispersal from Africa occurred roughly:',
            options: ['2 million years ago', '300,000 years ago', '60,000-70,000 years ago', '8,000 years ago'],
            answer: 2,
            explain: 'Earlier humans left Africa too, but the dominant ancestry of living non-Africans traces to that late dispersal.',
          },
        ],
      },
    ],
  },
]
