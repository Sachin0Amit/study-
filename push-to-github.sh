#!/usr/bin/env bash
# Push StudyVerse to https://github.com/Sachin0Amit/study-
# Usage:  GITHUB_TOKEN=ghp_xxxxx ./push-to-github.sh
set -e
if [ -z "$GITHUB_TOKEN" ]; then
  echo "ERROR: Set GITHUB_TOKEN first, e.g.:"
  echo "  GITHUB_TOKEN=ghp_yourtoken ./push-to-github.sh"
  exit 1
fi
git push "https://${GITHUB_TOKEN}@github.com/Sachin0Amit/study-.git" main:main
echo ""
echo "✓ Pushed! Verify at: https://github.com/Sachin0Amit/study-"
