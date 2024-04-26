// "use server";
/**
 * "use server" is to define server action **NOT** components,
 * the "server-only" package can be used to make sure a file is never sent to a client
 * but more usefull for services/utilities/library. Server component by default
 */

import NewsletterHeader from "@/components/organisms/NewsletterHeader";
import NewslettersList from "@/components/organisms/NewsletterList";
import { getNewslettersForUser } from "@/services/get-newsletters-for-user";

import type { Metadata } from "next";

type PageParams = {
  params: {
    user?: string[];
  };
};

const title = "Newsletters";
const description =
  "Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters.";

export const metadata: Metadata = {
  title,
  description,
};

export default async function Page({ params }: PageParams) {
  const userType =
    typeof params.user !== "undefined" ? params.user.pop() : undefined;
  const newsletters = await getNewslettersForUser(userType);

  return (
    <>
      <NewsletterHeader
        title={title}
        description={description}></NewsletterHeader>
      <NewslettersList newsletters={newsletters}></NewslettersList>
    </>
  );
}
