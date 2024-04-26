import "server-only"; // make sure we don't send zod to the client
import { z } from "zod";

export const newsletterSchema = z.object({
  id: z.string(),
  image: z.string(),
  description: z.string(),
  title: z.string(),
  site: z.string(),
  subscriptions: z.array(z.string()),
});

export const newsletterItemsSchema = z.array(newsletterSchema);
