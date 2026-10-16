# Content Schema

This document defines the content types, validation rules, metadata, and relationships used in StudyVerse.

## Core Models

### Subject (`SubjectMeta`)
- `id`: string (unique identifier)
- `name`: string (display name)

### Book (`BookMeta`)
- `id`: string
- `subjectId`: string (foreign key to Subject)
- `title`: string
- `author`: string
- `description`: string
- `pages`: number
- `accent`: string (hex color)

### Chapter (`ChapterMeta`)
- `id`: string
- `bookId`: string (foreign key to Book)
- `number`: number
- `title`: string
- `shortTitle`: string
- `description`: string
- `icon`: string

### Section (`SectionMeta`)
- `id`: string
- `chapterId`: string (foreign key to Chapter)
- `number`: number
- `title`: string
- `description`: string

## Content Blocks

Lessons are composed of structured blocks, typically rendered via React components (e.g., `<Section>`, `<Concept>`, `<Example>`, `<Quiz>`, `<Lab>`).

## Database Models (Prisma)
- **StudySession**: Anonymous device-based study progress
- **SectionProgress**: Tracks completion of sections
- **QuizAttempt**: Stores quiz scores and answers
- **SectionNote**: Personal study notes
- **FlashcardState**: Spaced repetition state (Leitner system)
- **StudyActivity**: Daily activity for streaks
- **FormulaFavorite**: Pinned formulas
- **ExamAttempt**: Timed exam attempts
- **SyllabusPlan**: Mappings from custom syllabi to the library
- **TwinEvent**: Evidence for the Cognitive Digital Twin
- **StudioThread / StudioMessage**: Multi-Agent Teaching Studio
- **RemixPlan**: Custom study paths
- **BridgeLesson**: Dynamically generated gap-filling lessons
- **PaperAnalysis**: Analysis of past papers
- **MemoryPalace**: GenAI-based memory palace scenes

## Validation Rules
- Content must not be purely a large HTML string.
- Mathematical equations must be formatted for KaTeX rendering.
- Interactive elements must reference a valid key from the `FEATURE_REGISTRY`.
