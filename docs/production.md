# Production Concerns

## Reliability

- Downstream calls require explicit timeouts.
- Normalize downstream errors into frontend-safe error codes.
- Use circuit breakers or dependency health checks for unstable services.
- Keep request correlation IDs across BFF and downstream services.

## Security

- Attach internal API keys server-side only.
- Validate every frontend-facing request body and query.
- Avoid logging tokens, user identifiers, and raw downstream payloads.
- Rate-limit authentication and account endpoints.

## Observability

- Track downstream latency, timeout count, error rate, and cache hit rate.
- Alert on dependency-specific error spikes.
- Log normalized error code, correlation ID, and dependency name.

## Contract Discipline

- Treat OpenAPI as the public contract for the frontend.
- Add compatibility checks before changing response shapes.
- Version breaking changes rather than silently changing semantics.
