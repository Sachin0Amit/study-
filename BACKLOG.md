# Backlog

Prioritized tasks, unresolved problems, proposed features, and future research.

## High Priority
1. **Implement the Daily Scheduler**: Create the actual background job/pipeline (e.g., via cron or a dedicated Next.js API route combined with a worker) that executes the "Automation Policy".
2. **Dynamic Content Loading**: Migrate static `.ts` content files in `src/data/content/` to the database to allow the autonomous system to create and edit content without requiring a full code deployment.
3. **Establish End-to-End Autonomous Workflow**: Prove the scheduler can discover a gap, generate a lesson (e.g., a "Bridge Lesson"), validate it, and publish it to the database.

## Medium Priority
- Develop new interactive components for currently underserved areas (e.g., Humanities, Arts).
- Enhance the AI Tutor (Multi-Agent Teaching Studio) to cite specific platform lessons when answering.

## Low Priority / Future Research
- Integrate WebGL/WebGPU 3D visualizations for complex physics and biology concepts.
- Implement an offline-first study experience using service workers and IndexedDB.
