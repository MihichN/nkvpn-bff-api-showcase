# NKVPN BFF API Showcase

Public-safe showcase of a backend-for-frontend API for a VPN SaaS user cabinet. The private version coordinates user-facing flows across bot APIs, subscription APIs, and account services.

## Highlights

- Stable API facade for the frontend.
- Internal API key protection.
- Request validation and timeout-aware downstream calls.
- Email/account flows in the private implementation.
- Service boundary that prevents frontend coupling to internal APIs.

## Tech Stack

- NestJS, TypeScript.
- Axios, RxJS, class-validator, Joi.
- Environment-based configuration.

## Included

- `docs/architecture.md` - BFF boundaries and request flow.
- `docs/openapi.yaml` - frontend-facing public-safe contract.
- `docs/adr/` - architecture decision records.
- `docs/production.md` - reliability, security, observability, and contract notes.
- `docs/roadmap.md` - scaling and delivery roadmap.
- `examples/api-client/downstreamClient.ts` - safe downstream client pattern.
- `tests/` - unit tests for downstream error normalization.
- `.github/workflows/ci.yml` - CI pipeline for typecheck and tests.

## Engineering Quality

```bash
npm install
npm run typecheck
npm test
```

## Not Included

Internal keys, production URLs, user identifiers, request logs, and full downstream endpoint mappings are excluded.
