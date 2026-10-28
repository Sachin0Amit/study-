#!/usr/bin/env python3
"""Rebuild worklog.md from git history (workspace reset lost the gitignored file).
Precedent: CROSSVERIFY-20261026-4 'worklog rebuilt from git history'."""
import subprocess, datetime

log = subprocess.run(
    ["git", "log", "--format=%H%x09%ad%x09%s", "--date=short", "-20"],
    capture_output=True, text=True, cwd="/home/z/my-project"
).stdout

header = """# StudyVerse Worklog

> Rebuilt from git history on 2026-10-28 after workspace reset (worklog.md is
> gitignored and the sandbox workspace was reprovisioned at Oct 28 10:10).
> Precedent: CROSSVERIFY-20261026-4 note 'worklog rebuilt from git history'.
> Append-only from here on.

"""
lines = [header]
for row in log.strip().split("\n"):
    h, d, subj = row.split("\t", 2)
    lines.append(f"## {subj}  ({d})\n")
    body = subprocess.run(
        ["git", "log", "-1", "--format=%b", h],
        capture_output=True, text=True, cwd="/home/z/my-project"
    ).stdout.strip()
    lines.append(body + "\n\n---\n")

with open("/home/z/my-project/worklog.md", "w") as f:
    f.write("".join(lines))
print("rebuilt worklog.md with", len(log.strip().split(chr(10))), "sections")
