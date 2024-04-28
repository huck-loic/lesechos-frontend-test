import { describe, it, expect, vi } from "vitest";
import { getApiUrl } from "./get-api-url";

describe("Get API URL", () => {
  it("use localhost is no env exist", async () => {
    const url = getApiUrl("");
    expect(url).toBe("http://localhost:3000/api");
  });

  it("use env PUBLIC_API_URL if set", async () => {
    vi.stubEnv("PUBLIC_API_URL", "https://site.test/api");
    const url = getApiUrl("");
    expect(url).toBe("https://site.test/api");
    vi.unstubAllEnvs();
  });
});
