# ADR 0001: BFF Owns Frontend Contracts

## Status

Accepted

## Context

The user cabinet depends on multiple backend domains. Calling each internal service directly from the frontend would expose internal topology, duplicate error handling, and make UI releases fragile.

## Decision

Introduce a BFF that owns frontend-facing contracts and adapts downstream responses into stable view models.

## Consequences

- The frontend can evolve against a stable API.
- Downstream services can change without forcing UI rewrites.
- The BFF becomes responsible for timeouts, normalized errors, and contract tests.
- The BFF should stay thin and avoid becoming a second domain model.
