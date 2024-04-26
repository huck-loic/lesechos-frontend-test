import { cva } from "styled-system/css";

import type { RecipeVariantProps } from "styled-system/css";
import type { PropsWithChildren } from "react";

type HeadingVariants = RecipeVariantProps<typeof headingVariants>;

type HeadingProps = PropsWithChildren<
  {
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  } & HeadingVariants
>;

const headingVariants = cva({
  variants: {
    intent: {
      main: {
        fontSize: "3xl",
        textTransform: "uppercase",
        fontWeight: 700,
      },
    },
  },
  defaultVariants: {
    intent: "main",
  },
});

export default function Heading({ level, intent, children }: HeadingProps) {
  const Element = level;
  return <Element className={headingVariants({ intent })}>{children}</Element>;
}
