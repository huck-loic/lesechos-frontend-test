// "use server";
/**
 * "use server" is to define server action **NOT** components,
 * the "server-only" package can be used to make sure a file is never sent to a client
 * but more usefull for services/utilities/library. Server component by default
 */

import NewslettersList from "@/components/organisms/NewsletterList";
import { getNewslettersForUser } from "@/services/get-newsletters-for-user";

type PageParams = {
  params: {
    user?: string[];
  };
};

export default async function Page({ params }: PageParams) {
  const userType =
    typeof params.user !== "undefined" ? params.user.pop() : undefined;
  const newsletters = await getNewslettersForUser(userType);

  return (
    <>
      <NewslettersList newsletters={newsletters}></NewslettersList>
    </>
  );
}
