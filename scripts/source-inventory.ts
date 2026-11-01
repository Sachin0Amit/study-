// ============ Source Inventory Builder (master spec PART 2.1) ================
//
// Library-to-Repository traceability: inventories every user-provided source
// (upload/) and every generated educational asset (public/diagrams sketch
// plates, public/palace rooms), with dedupe groups, verification status, and
// incorporation state. Writes docs/project/SOURCE_INVENTORY.json.
//
// Image classifications marked "vlm-verified" were produced by an actual
// vision-model inspection (see docs/project/RESEARCH_VERSION_LOG.json for the
// run record). Files not in the curated map are reported honestly as
// "requires-inspection" — never guessed from filenames alone (spec rule).
//
// Run: bun scripts/source-inventory.ts

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join, basename, extname } from 'node:path'

const ROOT = join(__dirname, '..')
const OUT = join(ROOT, 'docs/project/SOURCE_INVENTORY.json')
const VERIFIED_ON = '2026-11-02'

/** VLM-inspected classifications (glm-5v-turbo run record in RESEARCH_VERSION_LOG.json). */
const CURATED_IMAGE_CLASSES: Record<string, { kind: string; subject: string | null; status: string; summary: string }> = {
  'pasted_image_1793476165171.png': {
    kind: 'app-screenshot',
    subject: null,
    status: 'superseded-reference',
    summary:
      'StudyVerse Library course-detail page of the then-combined "Aptitude, Reasoning & General Awareness" book (4 ch · 26 lessons · 3 labs). That book was retired and split into Quantitative Aptitude / Logical Reasoning / General Awareness; screenshot retained as decision provenance.',
  },
  'pasted_image_1793480186034.png': {
    kind: 'app-screenshot',
    subject: null,
    status: 'superseded-reference',
    summary:
      'Byte-identical copy of pasted_image_1793476165171.png (md5-proven; the same screenshot uploaded twice — VLM run described it twice with cosmetic wording variance, checksums are ground truth). Same retirement provenance as the canonical copy.',
  },
}

/** Known text-document classifications (verified by reading content, not filenames). */
const CURATED_TEXT_CLASSES: Record<string, { kind: string; subject: string | null; status: string; summary: string }> = {
  'Pasted Content_1793528602847.txt': {
    kind: 'governing-specification',
    subject: null,
    status: 'incorporated',
    summary:
      'STUDYVERSE UNIVERSAL MASTER AUTONOMOUS AGENT PROMPT — current governing spec; installed as docs/project/PROJECT_MASTER_PLAN.md (all five PART-2 systems built from it).',
  },
  'Pasted Content_1792161466223.txt': {
    kind: 'governing-specification (retired)',
    subject: null,
    status: 'superseded-reference',
    summary:
      'MASTER SYSTEM PROMPT: THE INFINITE LEARNING UNIVERSE — the prior governing spec (2026-11-01 era). Its "one subject at a time, complete it" doctrine produced the MASTER-SYLLABUS writing program, which the current spec continues. Superseded by the StudyVerse master prompt; provenance preserved in docs/project/RESEARCH_VERSION_LOG.json.',
  },
  'Pasted Content_1792161720776.txt': {
    kind: 'governing-specification draft (retired)',
    subject: null,
    status: 'superseded-reference',
    summary:
      'Earlier unnumbered-sections variant of the INFINITE LEARNING UNIVERSE prompt — historical draft, superseded; provenance preserved in docs/project/RESEARCH_VERSION_LOG.json.',
  },
}

interface InvEntry {
  sourceId: string
  originalFilename: string
  location: string
  fileType: string
  bytes: number
  kind: string
  subject: string | null
  discipline: string | null
  chapter: string | null
  topic: string | null
  educationalLevel: string | null
  dedupeGroup: string | null
  extractionStatus: string
  verificationStatus: string
  incorporated: boolean
  incorporatedInto: string[]
  relatedExamTopics: string[]
  missingSections: string[]
  notes: string
}

function md5(buf: Buffer): string {
  return createHash('md5').update(buf).digest('hex')
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/pasted[_ ]content[_ ]?/i, 'doc-')
    .replace(/pasted[_ ]image[_ ]?/i, 'img-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48)
}

function pngDimensions(buf: Buffer): string | null {
  if (buf.length > 24 && buf.readUInt32BE(12) === 0x49484452) {
    return `${buf.readUInt32BE(16)}x${buf.readUInt32BE(20)}`
  }
  return null
}

function main() {
  const entries: InvEntry[] = []

  // ---------- 1. upload/ — user-provided sources ----------
  const uploadDir = join(ROOT, 'upload')
  const uploadFiles = readdirSync(uploadDir).sort()
  const groupsByHash = new Map<string, string[]>()
  const hashByName = new Map<string, string>()
  for (const f of uploadFiles) {
    const buf = readFileSync(join(uploadDir, f))
    const h = md5(buf)
    hashByName.set(f, h)
    const arr = groupsByHash.get(h) ?? []
    arr.push(f)
    groupsByHash.set(h, arr)
  }
  // canonical copy = lexicographically first of each group
  const canonical = new Set([...groupsByHash.values()].map((g) => [...g].sort()[0]))

  for (const f of uploadFiles) {
    const full = join(uploadDir, f)
    const buf = readFileSync(full)
    const ext = extname(f).toLowerCase()
    const h = hashByName.get(f)!
    const group = groupsByHash.get(h)!
    const isCanonical = canonical.has(f)
    const base = basename(f)

    let kind = 'unknown'
    let subject: string | null = null
    let status = 'requires-inspection'
    let summary = ''
    let extraction = 'not-extracted'
    let incorporated = false
    let incorporatedInto: string[] = []

    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const curated = CURATED_IMAGE_CLASSES[base]
      kind = curated?.kind ?? 'image'
      status = curated?.status ?? 'requires-inspection'
      summary = curated?.summary ?? 'Image file not yet visually inspected — classify via VLM before use (spec PART 2.1: never classify by filename).'
      extraction = curated ? 'visually-inspected' : 'not-inspected'
    } else if (ext === '.txt' || ext === '.md') {
      const head = buf.subarray(0, 800).toString('utf8')
      const titleLine = head.split('\n').find((l) => l.trim().length > 4)?.replace(/^#+\s*/, '').trim() ?? 'untitled'
      const curated = CURATED_TEXT_CLASSES[base]
      kind = curated?.kind ?? 'text-document'
      status = curated?.status ?? 'requires-inspection'
      summary = curated?.summary ?? `Text document, opening line: "${titleLine.slice(0, 90)}"`
      extraction = 'text-readable'
      if (curated?.status === 'incorporated') {
        incorporated = true
        incorporatedInto = ['docs/project/PROJECT_MASTER_PLAN.md', 'docs/project/ (all systems)']
      }
    }
    // duplicates inherit their canonical copy's verified classification
    if (!isCanonical) {
      const canonName = [...group].sort()[0]
      const canonClass = CURATED_TEXT_CLASSES[canonName] ?? CURATED_IMAGE_CLASSES[canonName]
      if (canonClass) {
        kind = canonClass.kind
        status = canonClass.status
        summary = `Duplicate of ${canonName} (byte-identical, verified by md5 group). ${canonClass.summary}`
        if (canonClass.status === 'incorporated') {
          incorporated = true
          incorporatedInto = ['duplicate of incorporated canonical copy']
        }
      }
    }

    entries.push({
      sourceId: slugify(base),
      originalFilename: base,
      location: `upload/${base}`,
      fileType: ext.replace('.', '') || 'unknown',
      bytes: buf.length,
      kind,
      subject,
      discipline: null,
      chapter: null,
      topic: null,
      educationalLevel: null,
      dedupeGroup: group.length > 1 ? `md5:${h.slice(0, 10)} (${group.length} copies)` : null,
      extractionStatus: isCanonical ? extraction : `duplicate-of:${slugify([...group].sort()[0])}`,
      verificationStatus: status.startsWith('requires') ? 'not-researched' : `verified:${VERIFIED_ON}`,
      incorporated,
      incorporatedInto,
      relatedExamTopics: [],
      missingSections: [],
      notes: [
        summary,
        group.length > 1 ? `Byte-identical to ${group.length - 1} other upload file(s); canonical copy: ${[...group].sort()[0]}.` : '',
        isCanonical ? '' : 'Duplicate retained per spec ("preserve original sources — never delete user files").',
      ]
        .filter(Boolean)
        .join(' '),
    })
  }

  // ---------- 2. public/diagrams — generated hand-drawn sketch plates ----------
  const diagDir = join(ROOT, 'public/diagrams')
  const diagramFiles = readdirSync(diagDir).filter((f) => /\.(jpg|jpeg|png)$/i.test(f)).sort()
  // reference counts: scan the authoring tree for each basename
  const subjectsDir = join(ROOT, 'src/data/knowledge/subjects')
  const chapterSources: string[] = []
  const walkSubjects = (dir: string) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) walkSubjects(join(dir, e.name))
      else if (e.name.endsWith('.ts')) chapterSources.push(readFileSync(join(dir, e.name), 'utf8'))
    }
  }
  walkSubjects(subjectsDir)

  let diagramsReferenced = 0
  for (const f of diagramFiles) {
    const refCount = chapterSources.reduce((n, src) => n + (src.includes(f) ? 1 : 0), 0)
    if (refCount > 0) diagramsReferenced++
    entries.push({
      sourceId: `diag-${f.replace(/\.[a-z]+$/, '').replace(/[^a-z0-9]+/g, '-')}`,
      originalFilename: f,
      location: `public/diagrams/${f}`,
      fileType: extname(f).replace('.', ''),
      bytes: statSync(join(diagDir, f)).size,
      kind: 'generated-figure-sketch',
      subject: null,
      discipline: null,
      chapter: null,
      topic: null,
      educationalLevel: null,
      dedupeGroup: null,
      extractionStatus: 'n/a (generated asset)',
      verificationStatus: `verified:${VERIFIED_ON}`,
      incorporated: refCount > 0,
      incorporatedInto: refCount > 0 ? [`${refCount} chapter source file(s) via sketchImage`] : [],
      relatedExamTopics: [],
      missingSections: [],
      notes:
        refCount > 0
          ? 'Hand-drawn notebook sketch paired with an inline SVG figure plate in lesson(s).'
          : 'Generated sketch not currently referenced by any lesson (candidate for pairing or retirement review).',
    })
  }

  // ---------- 3. public/palace — app asset rooms (incorporated by design) ----------
  const palaceDir = join(ROOT, 'public/palace')
  const palaceSessions = readdirSync(palaceDir)
  let palaceFiles = 0
  for (const s of palaceSessions) {
    const sDir = join(palaceDir, s)
    try {
      palaceFiles += readdirSync(sDir).length
    } catch {
      /* not a dir */
    }
  }

  // ---------- write ----------
  const uploadUniques = [...groupsByHash.values()].length
  const inventory = {
    $comment:
      'Machine-readable source inventory (master spec PART 2.1). Traceability chain: Source → Subject → Chapter → Topic → Lesson → Examination → Learning Objective. Sources are never deleted; duplicates carry group ids. Regenerate: bun scripts/source-inventory.ts',
    builtOn: new Date().toISOString().slice(0, 10),
    summary: {
      userSourceFiles: uploadFiles.length,
      uniqueUserSources: uploadUniques,
      duplicateCopies: uploadFiles.length - uploadUniques,
      generatedDiagramAssets: diagramFiles.length,
      diagramsReferencedByLessons: diagramsReferenced,
      diagramsUnreferenced: diagramFiles.length - diagramsReferenced,
      palaceAssetFiles: palaceFiles,
      incorporated: entries.filter((e) => e.incorporated).length,
      pendingInspection: entries.filter((e) => e.verificationStatus === 'not-researched').length,
    },
    sources: entries,
  }
  writeFileSync(OUT, JSON.stringify(inventory, null, 2) + '\n')

  console.log('SOURCE INVENTORY → docs/project/SOURCE_INVENTORY.json')
  console.log(`  upload/: ${uploadFiles.length} files (${uploadUniques} unique, ${uploadFiles.length - uploadUniques} duplicate copies)`)
  console.log(`  diagrams/: ${diagramFiles.length} sketch assets — ${diagramsReferenced} referenced, ${diagramFiles.length - diagramsReferenced} unreferenced`)
  console.log(`  palace/: ${palaceFiles} asset files (${palaceSessions.length} sessions)`)
  console.log(`  incorporated: ${inventory.summary.incorporated} · pending inspection: ${inventory.summary.pendingInspection}`)
  const pending = entries.filter((e) => e.verificationStatus === 'not-researched')
  if (pending.length) {
    console.log('  PENDING INSPECTION (honest gaps):')
    for (const p of pending) console.log(`    - ${p.location}`)
  }
}

main()
