import { LIBRARY_CHAPTERS, LIBRARY_SECTIONS } from '../src/data/library';
const targets = ['young-ch42','ece-e-digital-comm','ece-e-ic','math-a7','apt-r1','me-e-powerplant','ece-e-analog-comm','phys-m20','hall-ch33','ece-e-satellite','cse-e-micro','me-e-rac','eng-l1','apt-g1'];
for (const t of targets) {
  const ch = LIBRARY_CHAPTERS.find(c => c.id === t);
  if (!ch) { console.log(`\n## ${t}: NOT FOUND`); continue; }
  const secs = LIBRARY_SECTIONS.filter(s => s.chapterId === t);
  console.log(`\n## ${t} :: ${ch.title} (${secs.length} sections)`);
  for (const s of secs) console.log(`   ${s.number} ${s.title}`);
}
