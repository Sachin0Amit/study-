/** Probe 2: what exactly did the suspicious QCE matches hit? Would renames fix them? */
import { getCatalog, fuzzyMatchWithinSubject, fuzzyMatchTopic, matchTopicDetailed } from '../src/lib/syllabus'

const catalog = getCatalog()

function show(name: string, subject: string, subs?: string[]) {
  const within = fuzzyMatchWithinSubject(name, subject, 0.32, catalog)
  console.log(`\n"${name}" in [${subject}]`)
  if (within) {
    console.log(`  scoped: conf=${Number(within.confidence ?? 0).toFixed(2)} sec=${within.chapterId} :: ${within.chapterTitle}`)
  } else console.log('  scoped: none')
  const detail = matchTopicDetailed(name, catalog)
  for (const m of detail.matches.slice(0, 3)) {
    console.log(`  detailed: ${Number(m.score).toFixed(2)} ${m.subject.id} :: ${m.section?.title ?? m.chapter?.title ?? '?'}`)
  }
  if (subs) {
    const g = fuzzyMatchTopic(`${name} ${subs.join(' ')}`, catalog)
    if (g) console.log(`  global(+subs): conf=${Number(g.confidence ?? 0).toFixed(2)} :: ${g.chapterTitle}`)
  }
}

show('Networks and decision mathematics', 'mathematics')
show('Networks and decision mathematics', 'mathematics', ['Dijkstra', 'critical path', 'flow'])
show('Trigonometry', 'mathematics', ['sine rule', 'cosine rule', 'area of a triangle', 'bearings'])
show('Trigonometry, sine and cosine rules', 'mathematics')
show('Earth geometry', 'mathematics')
show('Earth geometry: latitude, longitude and time zones', 'mathematics', ['great circles', 'distances on the Earth'])

// find any masters math sections mentioning trigonometry in their titles
const hits: string[] = []
const catalogAny = catalog as unknown as { subjects?: { id: string; name: string; chapters?: { title?: string; sections?: { title?: string }[] }[] }[] }
for (const s of catalogAny.subjects ?? []) {
  for (const ch of s.chapters ?? []) {
    if (/trigonomet/i.test(ch.title ?? '')) hits.push(`${s.id}: CHAPTER ${ch.title}`)
    for (const sec of ch.sections ?? []) {
      if (/trigonomet|sine rule|cosine rule/i.test(sec.title ?? '')) hits.push(`${s.id}: sec "${sec.title}" (in ${ch.title})`)
    }
  }
}
console.log('\nMASTERS trig sections:', hits.length)
for (const h of hits.slice(0, 25)) console.log('  -', h)
