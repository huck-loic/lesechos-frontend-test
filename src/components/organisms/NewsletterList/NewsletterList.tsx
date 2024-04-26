import { groupNewslettersBySite } from "@/services/transforms/group-newsletters-by-site";
import { css } from "styled-system/css";
import { Container } from "styled-system/jsx";
import Heading from "@/components/atoms/Heading";

import type { NewslettersForUser } from "@/services/get-newsletters-for-user";
import Card from "@/components/molecules/Card";
import NewsletterImage from "@/components/molecules/NewsletterImage";
import NewsletterGrid from "@/components/molecules/NewsletterGrid";

type NewslettersListProps = {
  newsletters: NewslettersForUser;
};

export default function NewslettersList({ newsletters }: NewslettersListProps) {
  const sites = groupNewslettersBySite(newsletters);

  return (
    <Container maxWidth="breakpoint-lg">
      {sites.map((site) => (
        <section key={site.name} className={css({ marginBottom: 8 })}>
          <Heading level="h2" intent="group">
            {site.name}
          </Heading>
          <NewsletterGrid>
            {site.items.map((item) => (
              <Card key={item.id}>
                <NewsletterImage src={item.image} alt={item.title}>
                  <Heading level="h3" intent="newsletter">
                    {item.title}
                  </Heading>
                </NewsletterImage>
                <p>{item.description}</p>
              </Card>
            ))}
          </NewsletterGrid>
        </section>
      ))}
    </Container>
  );
}
