# Automation Policy

Rules governing the scheduled LLM (the continuous improvement engine) and autonomous operations.

## The Daily Scheduler Pipeline
1. **DISCOVER**: Inspect the curriculum and identify gaps.
2. **PRIORITISE**: Score tasks based on educational impact (25%), coverage gaps (20%), accuracy (15%), interactivity (15%), demand (10%), cross-disciplinary usefulness (10%), and feasibility (5%).
3. **PLAN**: Create a bounded, measurable work plan.
4. **GENERATE**: Produce substantive additions in an isolated workspace.
5. **VERIFY**: Check factual claims, run automated tests, and content validation.
6. **TEST**: Run application builds and tests.
7. **REVIEW**: (If applicable) Queue high-stakes content for human review.
8. **PUBLISH**: Release changes that satisfy criteria.
9. **INDEX**: Update search and navigation indices.
10. **REPORT**: Generate the daily progress report.

## Guardrails
- **No Fabrications**: Never invent research or test results.
- **Safety First**: Never publish unvalidated code or execute untrusted code without isolation.
- **Irreversible Actions**: Do not delete or overwrite valuable content without a rollback plan.
- **Idempotency**: Scheduled jobs must be idempotent to prevent duplicate content on retries.
- **State Management**: Every scheduled run must leave the platform in a known, recoverable state.
