import {
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
} from "@/mocks/user";
import { randomBetween } from "@/utils/random";
import { wait } from "@/utils/wait";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

type UserParams = {
  params: {
    type?: string[];
  };
};

export async function GET(request: NextRequest, { params }: UserParams) {
  await wait(randomBetween(100, 500)); // Random delay to simulate calls

  const type =
    typeof params.type !== "undefined" ? params.type.pop() : undefined;

  if (type === "one") {
    return NextResponse.json(USER_WITH_ONE_SUBSCRIPTION);
  }

  if (type === "multiple") {
    return NextResponse.json(USER_WITH_MULTIPLE_SUBSCRIPTION);
  }

  return NextResponse.json(USER_WITHOUT_SUBSCRIPTION);
}
