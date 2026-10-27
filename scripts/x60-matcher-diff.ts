/* Compare current (field-first) vs branch-first chapter routing for all live topics */
import { KNOWLEDGE_LIVE_TOPICS } from "../src/data/library-parts/knowledge-universe";
import { SUBJECT_TAXONOMY, type TaxonomySubject, type TaxonomyChapter } from "../src/data/knowledge/subject-taxonomy";
import type { KnowledgeTopic } from "../src/data/knowledge/types";

const byField = new Map<string, TaxonomySubject>();
const byBranch = new Map<string, TaxonomySubject>();
for (const tax of SUBJECT_TAXONOMY) {
  for (const f of tax.ownFields ?? []) if (!byField.has(f)) byField.set(f, tax);
  for (const ch of tax.chapters) {
    if (!ch.branches) continue;
    for (const b of ch.branches) if (!byBranch.has(b)) byBranch.set(b, tax);
  }
}
const taxFor = (t: KnowledgeTopic): TaxonomySubject | null => byField.get(t.field) ?? byBranch.get(t.branch) ?? null;

function chapterCurrent(tax: TaxonomySubject, t: KnowledgeTopic): string {
  const ch = tax.chapters.find((c: TaxonomyChapter) => (c.fields ? c.fields.includes(t.field) : false) || (c.branches ? c.branches.includes(t.branch) : false));
  return ch ? ch.name : t.branch;
}
function chapterBranchFirst(tax: TaxonomySubject, t: KnowledgeTopic): string {
  const chB = tax.chapters.find((c: TaxonomyChapter) => (c.branches ? c.branches.includes(t.branch) : false));
  if (chB) return chB.name;
  const chF = tax.chapters.find((c: TaxonomyChapter) => (c.fields ? c.fields.includes(t.field) : false));
  return chF ? chF.name : t.branch;
}

let moved = 0;
for (const t of KNOWLEDGE_LIVE_TOPICS) {
  const tax = taxFor(t);
  if (!tax) continue;
  const a = chapterCurrent(tax, t), b = chapterBranchFirst(tax, t);
  if (a !== b) { moved++; console.log(`MOVE ${t.id} [${tax.key}] ${a} -> ${b}`); }
}
console.log(`\nTotal topics moved under branch-first: ${moved}`);
