import { getNewsletterItems } from "./newsletters/queries";
import { getUser } from "./user/queries";

export async function getNewslettersForUser(userType?: string) {
  const [newsletters, user] = await Promise.all([
    getNewsletterItems(),
    getUser(userType),
  ]);

  const userSubscriptions = new Set(user.subscriptions);
  const userHasSubscriptionRights = (subscription: string) =>
    userSubscriptions.has(subscription);
  return newsletters.map((newsletter) => ({
    ...newsletter,
    hasSubscriptionRights:
      newsletter.subscriptions.length === 0 ||
      newsletter.subscriptions.some(userHasSubscriptionRights),
  }));
}
