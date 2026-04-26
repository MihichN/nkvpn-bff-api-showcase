import { afterEach, describe, expect, it, vi } from "vitest"
import { DownstreamError, fetchJson } from "../examples/api-client/downstreamClient"

describe("fetchJson", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("returns parsed JSON for successful downstream responses", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ status: "ok" }), { status: 200 })),
    )

    await expect(fetchJson<{ status: string }>("https://service.local/health")).resolves.toEqual({
      status: "ok",
    })
  })

  it("normalizes non-2xx responses", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response("bad gateway", { status: 502 })))

    await expect(fetchJson("https://service.local/down")).rejects.toMatchObject({
      statusCode: 502,
    } satisfies Partial<DownstreamError>)
  })
})
