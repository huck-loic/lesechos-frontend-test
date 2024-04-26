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
        fontSize: "1.875rem",
        textTransform: "uppercase",
        fontWeight: 700,
      },
      group: {
        position: "relative",
        display: "inline-block",
        fontSize: "1.375rem",
        textTransform: "uppercase",
        fontWeight: 700,
        paddingBottom: 4,
        marginBottom: 5,
        _after: {
          content: '" "',
          position: "absolute",
          bottom: 0,
          left: 0,
          display: "block",
          height: ".25rem",
          width: "100%",
          maxWidth: "4.375rem",
          borderRadius: ".25rem",
          backgroundColor: "primary",
        },
      },
      newsletter: {
        fontFamily: "serif",
        fontSize: "1.875rem",
        textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
        letterSpacing: "-1%",
        lineHeight: 1.2,
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
