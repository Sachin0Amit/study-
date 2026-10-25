#!/bin/bash
# Rebuild the gitignored worklog.md from git history (environment reset lost it).
# Precedent: commit f1b8227 "worklog rebuilt from git history".
set -e
cd /home/z/my-project

OUT=worklog.md
{
echo "# StudyVerse Multi-Agent Worklog"
echo "Rebuilt from git history on $(date '+%Y-%m-%d %H:%M %Z') after environment reset (worklog*.md is gitignored and was lost)."
echo "Commits are the source of truth; entries below are condensed from 'git log' subjects."
echo
for sha in $(git log --format=%H --reverse | tail -40); do
  subject=$(git log -1 --format=%s "$sha")
  date=$(git log -1 --format=%ad --date=format:'%Y-%m-%d %H:%M' "$sha")
  echo "---"
  echo "COMMIT ${sha:0:7} ($date)"
  echo "$subject" | fold -s -w 110
  echo
done
} > "$OUT"

echo "worklog.md rebuilt: $(wc -l < "$OUT") lines, $(git log --oneline | wc -l) total commits in repo"
