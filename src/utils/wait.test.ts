import { describe, it, expect } from "vitest";
import { wait } from "./wait";

describe("Utils: wait", () => {
  it("should wait for 1000ms", async () => {
    const start = performance.now();
    await wait(1000);
    const end = performance.now();
    const timePassed = end - start;
    expect(timePassed).toBeGreaterThan(999);
    expect(timePassed).toBeLessThan(1200);
  });
});
