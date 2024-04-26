import { css } from "styled-system/css";

import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren;

const cardStyle = css({
  base: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    minWidth: 0,
    textAlign: "center",
  },
});

export default function Card({ children }: CardProps) {
  return <div className={cardStyle}>{children}</div>;
}
