/* eslint-disable @next/next/no-img-element */
import { css } from "styled-system/css";

import type { PropsWithChildren } from "react";

type NewsletterImageProps = PropsWithChildren<{
  src: string;
  alt: string;
}>;

const wrapperStyle = css({
  base: {
    position: "relative",
    color: "white",
  },
});

const imageStyle = css({
  base: {
    position: "absolute",
    width: "100%",
    aspectRatio: "3/2",
    objectFit: "cover",
  },
});

const overlayStyle = css({
  base: {
    position: "relative",
    padding: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    aspectRatio: "3/2",
  },
});

export default function NewsletterImage({
  children,
  src,
  alt,
}: NewsletterImageProps) {
  return (
    <div className={wrapperStyle}>
      <img
        className={imageStyle}
        src={src}
        width={300}
        height={200}
        alt={alt}
      />
      <div className={overlayStyle}>{children}</div>
    </div>
  );
}
