import Heading from "@/components/atoms/Heading";
import { css } from "styled-system/css";
import { Container } from "styled-system/jsx";

type NewsletterHeaderProps = {
  title: string;
  description: string;
};

const header = css({
  base: {
    borderRadius: "lg",
    backgroundColor: "neutralMicroContrast",
    textAlign: "center",
    paddingX: 4,
    paddingTop: 4,
    paddingBottom: 6,
    marginY: 4,
  },
  lg: {
    marginTop: 8,
    marginBottom: 6,
  },
});

export default function NewsletterHeader({
  title,
  description,
}: NewsletterHeaderProps) {
  return (
    <Container maxWidth="breakpoint-lg">
      <div className={header}>
        <Heading level="h1" intent="main">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </Container>
  );
}
