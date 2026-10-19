# X10-R — Review Mode rebuild (SM-2 spaced repetition)

Task: Rebuild the lost X10 "Review Mode" per the authoritative spec in
/home/z/my-project/worklog.md ("X10 Review Mode — rebuild spec").

## Status: COMPLETE (2026-10-19, not committed — per instructions)

## Files created
- `src/lib/sm2.ts` — SM-2 scheduler: `schedule(card, grade)` grades 0–3
  (Again/Hard/Good/Easy), exact parameter deltas from the spec, ease floor
  1.3, plus `formatInterval()` ("10m", "1d", "2.4mo") for button previews.
- `src/lib/review.ts` — `seedCards(sectionId, content)`: quiz →
  front=q / back="**A. correct** — explanation"; concepts → term / statement
  (≤240 chars); keyTakeaways → "Remember: <first 8 words>…" cue. Skips
  existing (sectionId, front); returns {created, skipped}.
- `src/app/api/review/seed/route.ts` — POST {sectionId}; content via
  `getSectionContent` from `@/data/content/server`; 404 unknown.
- `src/app/api/review/queue/route.ts` — GET due (≤ now) asc, take 50.
- `src/app/api/review/answer/route.ts` — POST {cardId, grade 0–3}: applies
  sm2.schedule, upserts ReviewLog (UTC day) reviews+1.
- `src/app/api/review/cards/route.ts` — GET ?limit=300 newest-first.
- `src/app/api/review/stats/route.ts` — GET {due, total, streak,
  reviewedToday, week[7]} (streak ends today-or-yesterday, UTC).
- `src/components/app/review-view.tsx` (~830 lines, 'use client') — stats
  row + 7-day sparkline, session runner (Space reveal, keys 1–4 with SM-2
  interval previews, Again re-queues in-session, Esc ends), all-cards
  browser (due chips, kind filters, click-to-jump), empty state, amber
  bookish theme matching flashcards-view.

## Files modified (minimal edits)
- `prisma/schema.prisma` — +ReviewCard, +ReviewLog (after ExamMap);
  `bun run db:push` run successfully.
- `src/store/useStudy.ts` — View union `| { name: 'review' }`.
- `src/app/page.tsx` — dynamic ReviewView import, `?view=review` bridge,
  render, footer link "Review — spaced repetition".
- `src/components/app/header.tsx` — NAV entry after Cards (Repeat icon) +
  nav-click view mapping.
- `src/components/app/command-palette.tsx` — "Start a review session"
  QUICK_ACTION + 'review' ViewName.
- `src/components/app/lesson-view.tsx` — SaveToReview dashed-amber panel
  before the colophon (print:hidden, content-gated); sonner toast with
  created-count + "Open Review" action; saved state "In your Review deck —
  scheduled by SM-2".

## Verification
- `bun run lint` → clean. `bunx tsc --noEmit | grep -E "review|sm2"` → 0
  hits (pre-existing unrelated errors only).
- API smoke: seed chaos lesson → {created:22, skipped:0}; reseed →
  {0,22}; unknown → 404; Good→1d, Again→10m+ease−0.2, Easy→3d+ease+0.15,
  Hard→3.6d; grade 7 → 400; stats → streak 1, reviewedToday 4.
- Browser QA (agent-browser): nav pill, dashboard, session, keyboard
  (Space/1–4/Esc), SaveToReview panel, palette command, mobile 390px
  (VLM-verified clean), zero console/page errors.

## Notes for next agents
- The dev server + watchdog had died mid-task; I restarted both
  (`scripts/dev-watchdog.sh` + `bun run dev`). Port 3000 is live.
- sonner `<Toaster>` is not mounted in layout.tsx (pre-existing, affects
  studio/remix/palette too) — toast calls still follow the codebase
  convention per spec; the SaveToReview inline state works regardless.
- X10 rebuild is done but NOT committed/pushed (per task instructions).
  Priority queue item 1 can be checked off after commit+push.
