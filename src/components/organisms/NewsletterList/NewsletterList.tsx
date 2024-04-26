import { groupNewslettersBySite } from "@/services/transforms/group-newsletters-by-site";

import type { NewslettersForUser } from "@/services/get-newsletters-for-user";

type NewslettersListProps = {
  newsletters: NewslettersForUser;
};

export default function NewslettersList({ newsletters }: NewslettersListProps) {
  const sites = groupNewslettersBySite(newsletters);

  return (
    <>
      {sites.map((site, index) => (
        <section key={index}>
          <h2>{site.name}</h2>
          <div>
            {site.items.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
