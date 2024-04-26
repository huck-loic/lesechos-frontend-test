import { groupNewslettersBySite } from "@/services/transforms/group-newsletters-by-site";

import type { NewslettersForUser } from "@/services/get-newsletters-for-user";
import { Container } from "styled-system/jsx";
import Heading from "@/components/atoms/Heading";

type NewslettersListProps = {
  newsletters: NewslettersForUser;
};

export default function NewslettersList({ newsletters }: NewslettersListProps) {
  const sites = groupNewslettersBySite(newsletters);

  return (
    <Container maxWidth="breakpoint-lg">
      {sites.map((site, index) => (
        <section key={index}>
          <Heading level="h2" intent="group">
            {site.name}
          </Heading>
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
    </Container>
  );
}
