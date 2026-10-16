# Testing

Documentation of automated tests, validation commands, expected results, and known failures.

## Test Suites

### Database & Backend
- `bun run db:push`: Pushes schema changes to the local SQLite database. Ensure no unexpected data loss.
- `bun run tests/database-runtime-build.sh`: Script to test the DB environment build.
- `bun run tests/python-runtime-build.sh`: Tests python runtime execution environment if applicable.

### Content Validation
Validation scripts are located in `scripts/`:
- `bun run scripts/validate-library.ts`: Validates the structure and references in the main library files.
- `node scripts/check-rosen.mjs`: Checks specific math/logic content chapters.
- `node scripts/validate-calc-content.mjs`: Checks calculus content chapters.
- *Various other subject-specific validation scripts exist in the `scripts/` directory.*

## Execution
Run validation scripts prior to committing changes to the content files.

## Known Issues / Failures
- *To be populated as tests are executed and failures are documented.*
