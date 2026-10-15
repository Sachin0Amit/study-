import { LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '../src/data/library';
const targets = ['young-ch1','eng-r3','eng-r4','apt-q1','phys-lasers','math-sk3','me-e-powerplant'];
for (const t of targets) {
  const ch = LIBRARY_CHAPTERS.find(c => c.id === t);
  if (!ch) { console.log(`\n## ${t}: NOT FOUND`); continue; }
  const secs = LIBRARY_SECTIONS.filter(s => s.chapterId === t);
  console.log(`\n## ${t} :: ${ch.title} (${secs.length} sections)`);
  for (const s of secs) console.log(`   ${s.number} ${s.id} ${s.title}`);
}
