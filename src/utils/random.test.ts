import { describe, it, expect } from "vitest";
import { randomBetween } from "./random";

describe("Utils: random", () => {
  it("get a number between 346 and 598 (Excluded)", () => {
    for (let i = 0; i < 1000; i++) {
      const random = randomBetween(346, 598);
      expect(random).toBeGreaterThanOrEqual(346);
      expect(random).toBeLessThan(598);
    }
  });
});
