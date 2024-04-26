import "server-only"; // make sure we don't send zod to the client
import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  email: z.string(),
  subscriptions: z.array(z.string()),
});
