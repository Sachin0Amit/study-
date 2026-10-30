// Dump the section order of ku-study-skills chapters from the live topic registry.
import { KNOWLEDGE_TOPICS } from '../src/data/knowledge';
import { SUBJECT_TAXONOMY } from '../src/data/knowledge/subject-taxonomy';

const subj = SUBJECT_TAXONOMY.find((s) => s.key === 'study-skills')!;
const topics = KNOWLEDGE_TOPICS.filter((t) =>
  (t as any).branch === 'Learning Science' ||
  subj.ownFields?.includes((t as any).field) ||
  (t as any).branch === 'Study Systems' ||
  (t as any).branch === 'Performing' ||
  subj.ownFields?.includes('Skill Acquisition') && (t as any).field === 'Skill Acquisition'
);

// Group by chapter per taxonomy rules
for (let ci = 0; ci < subj.chapters.length; ci++) {
  const ch = subj.chapters[ci];
  const inCh = topics.filter((t: any) =>
    (ch.fields?.includes(t.field) || ch.branches?.includes(t.branch))
  );
  console.log(`\n== Ch${ci + 1}: ${ch.name} (${inCh.length} lessons) ==`);
  inCh.forEach((t: any, i: number) => {
    console.log(`  §${ci + 1}.${i + 1} ${t.id} — ${t.title} (${t.words ?? '?'}w, quiz:${t.quiz?.length ?? 0}, figs:${(t.blocks ?? []).filter((b: any) => b.kind === 'figure').length}, derivs:${(t.blocks ?? []).filter((b: any) => b.kind === 'derivation').length})`);
  });
}
