import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import NewsletterButton from "./NewsletterButton";

describe("Newsletter Button", () => {
  it(`render correct label when hadSubscription is false`, () => {
    render(<NewsletterButton hasSubscription={false} />);
    expect(screen.getByRole("button")).toHaveTextContent("S'abonner");
  });

  it(`render correct label when hadSubscription is true`, () => {
    render(<NewsletterButton hasSubscription={true} />);
    expect(screen.getByRole("button")).toHaveTextContent("S'inscrire");
  });
});
