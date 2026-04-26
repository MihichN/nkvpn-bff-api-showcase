# Roadmap

## Near Term

- Add schema validation examples for request DTOs.
- Add dependency-specific health aggregation.
- Add contract tests against mocked downstream services.

## Scaling

- Cache read-heavy subscription views with short TTLs.
- Add queue-backed workflows for slow account operations.
- Split BFF modules by frontend domain when routes grow.

## Leadership Notes

- Keep BFF responsibilities narrow and documented.
- Review API contracts with frontend owners before changes.
- Track dependency ownership so incidents have clear escalation paths.
