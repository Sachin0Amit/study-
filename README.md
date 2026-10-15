# StudyVerse — Subject-Wise Study Platform

A comprehensive study platform organized **purely by subject** — every subject covers all engineering branches, aptitude, and science tracks in one place. Browse a grouped catalog, dive into chapters and lesson sections, run interactive labs, practice with quizzes, and track your progress.

## Highlights

- **37 course-level subjects** — Physics, Chemistry, Mathematics, English & Aptitude, plus core CS/ECE/EE/ME subjects (COA, OS, DBMS, DSA, Networks, VLSI, Power Systems, Thermal-Fluids, and more)
- **443 chapters / 3,450+ sections** with structured lesson content: objectives, concepts, worked examples, key takeaways, and section quizzes
- **8,800+ practice questions** with explanations
- **Interactive labs** — code playgrounds, circuit/curve simulators, molecular & crystal viewers, and more
- **Formula sheets, flashcards, notes, bookmarks** and full progress tracking
- **Test simulator** with timed practice sets and analytics

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui** (New York style) + Lucide icons
- **Prisma ORM** with SQLite
- **Zustand** (client state) + server-side data APIs

## Getting Started

```bash
# 1. Install dependencies
bun install

# 2. Configure environment
cp .env.example .env

# 3. Create the local database
bun run db:push

# 4. Start the dev server
bun run dev
```

The app runs at `http://localhost:3000`.

## Project Structure

```
src/
  app/            # Next.js App Router (single-page app at /)
  components/     # UI components, interactives registry, visual tools
  data/
    library.ts    # Subject → Book → Chapter → Section metadata model
    library-parts/  # Subject & merged-track chapter/section definitions
    content/      # Lesson content per section (concepts, examples, quizzes)
  store/          # Zustand stores
  lib/            # Prisma client, utilities
prisma/           # Database schema
```

## License

For personal study use.
