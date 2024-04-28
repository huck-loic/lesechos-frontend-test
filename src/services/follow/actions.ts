"use server";

import { randomBetween } from "@/utils/random";
import { wait } from "@/utils/wait";

export async function toggleFollow(followState: boolean) {
  // TODO: Real api call to follow
  await wait(randomBetween(1000, 3000));

  return !followState;
}
