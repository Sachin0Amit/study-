// Rebuild worklog.md LESSONBOOK progress markers from git history (env reset lost the file).
// Extracts every LESSONBOOK commit on origin/main, in chronological order, and emits
// LESSONBOOK-DONE lines per the loop's progress protocol.
import { execSync } from 'node:child_process';

const log = (n = 40) =>
  execSync(`git log origin/main --oneline -n ${n}`, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
    .split('\n')
    .filter(Boolean);

const commits = log(40).reverse(); // chronological
const done: string[] = [];

for (const line of commits) {
  const hash = line.split(' ')[0];
  const subject = line.slice(line.indexOf(' ') + 1);
  if (!subject.startsWith('LESSONBOOK')) continue;
  // Section marker: LESSONBOOK-<date>-<n>: <book> Ch<m> §<k> <topic-id> ...
  const m = subject.match(/^LESSONBOOK-[\d-]+(?:\s*\([^)]*\))?\s*:?\s*(ku-[\w-]+)?\s*(?:Ch(\d+)\s*§([\d.]+)\s*([\w-]+))?/);
  if (m && m[2] && m[3] && m[4]) {
    const book = m[1] || 'ku-study-skills';
    done.push(`LESSONBOOK-DONE: ${book} — Ch${m[2]} §${m[3]} ${m[4]} ${m[4]}`);
  } else {
    // kickstart commit
    if (subject.includes('kickstart')) {
      done.push('LESSONBOOK-DONE: ku-study-skills — Ch1 §1.6 fnd-spaced-repetition fnd-spaced-repetition (kickstart reference implementation)');
    }
  }
  console.log(`${hash} :: ${subject.slice(0, 130)}`);
}

console.log('\n=== DONE MARKERS (chronological) ===');
for (const d of done) console.log(d);
