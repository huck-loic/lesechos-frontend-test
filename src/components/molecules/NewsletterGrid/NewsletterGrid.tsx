import { css } from "styled-system/css";

import type { PropsWithChildren } from "react";

type NewsletterGridProps = PropsWithChildren;

const gridStyle = css({
  base: {
    display: "grid",
    gridTemplateColumns: 1,
    gap: 8,
    marginBottom: 4,
  },
  sm: {
    gridTemplateColumns: 2,
  },
  md: {
    gridTemplateColumns: 3,
  },
});

export default function NewsletterGrid({ children }: NewsletterGridProps) {
  return <div className={gridStyle}>{children}</div>;
}
