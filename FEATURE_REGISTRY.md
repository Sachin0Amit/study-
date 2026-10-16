# Feature Registry

This document catalogs the available components, capabilities, dependencies, and limitations of the StudyVerse platform.

## UI Components
Built on top of `shadcn/ui`, `Tailwind CSS 4`, and `Lucide` icons.
- **Views**: LibraryView, BookView, ChapterView, LessonView, PlaygroundView, FlashcardsView, FormulaView, ExamView, ProgressView, SearchView, SyllabusView, StudioView, TwinView, RemixView, ArenaView, PaperDnaView, PalaceView.

## Interactive Tools & Visualizations
Registered in `src/components/interactives/registry.tsx`.

### Computer Science & Algorithms
- `bankers-algorithm`
- `cpu-scheduler`
- `disk-scheduler`
- `event-loop-lab`
- `file-allocation`
- `fsm-simulator`
- `graph-playground`
- `hanoi-tower`
- `js-playground`, `cpp-playground`, `java-playground`
- `page-replacement`, `paging-visualizer`
- `process-lifecycle`
- `sorting-visualizer`
- `tree-traversal`

### Electronics & Logic
- `breadboard-oscilloscope-sim`
- `dc-circuit-lab`
- `diode-lab`, `transistor-lab`, `opamp-lab`
- `filter-lab`
- `kmap-minimizer`
- `logic-gates`, `truth-table-lab`
- `sequential-lab`

### Physics & Engineering
- `curve-lab`, `derivative-lab`, `riemann-lab`, `taylor-lab`
- `efield-lab`, `em-wave-lab`
- `fourier-lab`, `phasor-lab`, `wave-lab`
- `gas-lab`, `kinetics-lab`, `thermo-lab`
- `induction-lab`
- `machine-lab`, `converter-lab`
- `orbit-lab`, `projectile-lab`
- `quantum-lab`, `relativity-lab`

### Chemistry
- `equilibrium-lab`
- `molecular-lab`, `crystal-lattice-lab`
- `periodic-table-lab`

## AI Capabilities
- **Multi-Agent Teaching Studio**: Specialized personas (professor, examiner, driller) powered by LLMs.
- **Syllabus Mapper**: Maps user-uploaded syllabi to the existing library.
- **Bridge Lessons**: Generates intermediary lessons to fill prerequisite gaps.
- **Memory Palace**: Generates mnemonic visual descriptions.

## Limitations
- Interactive labs are currently read-only in terms of adding new lab logic dynamically without code deployment.
- Mobile responsiveness for complex 3D labs requires optimization.
