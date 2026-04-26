export class DownstreamError extends Error {
  constructor(
    message: string,
    readonly statusCode = 502,
  ) {
    super(message)
  }
}

export async function fetchJson<T>(url: string, timeoutMs = 5000): Promise<T> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(url, { signal: controller.signal })

    if (!response.ok) {
      throw new DownstreamError("Downstream service returned an error", response.status)
    }

    return (await response.json()) as T
  } finally {
    clearTimeout(timeout)
  }
}
