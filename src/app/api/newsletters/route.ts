import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { randomBetween } from "@/utils/random";
import { wait } from "@/utils/wait";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  await wait(randomBetween(100, 500)); // Random delay to simulate calls
  return NextResponse.json(NEWSLETTER_ITEMS);
}
